precision mediump float;

// -----------------------------------------------------------------------------
// UNIFORMS
// -----------------------------------------------------------------------------
uniform vec4 u_lightColour;
uniform vec2 u_resolution;
uniform vec2 u_lightScreenPositionTopLeft;
uniform vec2 u_lightScreenPositionBottomRight;
uniform float u_wallLightingYOffset;
uniform float u_highlightAlpha;
uniform float u_shadowAlpha;
uniform float u_specularAlpha;

// -----------------------------------------------------------------------------
// SAMPLERS
// -----------------------------------------------------------------------------
uniform sampler2D u_sceneNormalMap;
uniform sampler2D u_sceneSpecularMap;
uniform sampler2D u_groundLightMap;
uniform sampler2D u_wall1LightMap;
uniform sampler2D u_wall2LightMap;
uniform sampler2D u_groundMask;
uniform sampler2D u_wall1Mask;
uniform sampler2D u_wall2Mask;

// -----------------------------------------------------------------------------
// GLOBAL CONSTANTS
// -----------------------------------------------------------------------------
float LIGHT_HEIGHT = -0.3;
float WALL_NORMAL_Z_OFFSET = 0.2;

float HIGHLIGHT_THRESHOLD = 0.849;
float HIGHLIGHT_OFFSET = 0.25;

float SPECULAR_THRESHOLD = 1.06;
float SPECULAR_OFFSET = 0.25;
float SPECULAR_SPREAD = 0.1;
float SPECULAR_MULTIPLIER = 100.0;
float SPECULAR_DISTANCE_AMPLITUDE = 0.119;
float SPECULAR_DISTANCE_OFFSET = 0.1;
float SPECULAR_DISTANCE_SPREAD = 0.1;

float SHADOW_THRESHOLD = 0.121;

float SHADING_FALLOFF = 1.788;
float SHADING_OFFSET = 2.244;
float SHADING_BANDING = 0.1;

// -----------------------------------------------------------------------------
// UTILITY FUNCTIONS
// -----------------------------------------------------------------------------
float remap(float i, float a1, float a2, float b1, float b2) {
  return b1 + (i - a1) * (b2 - b1) / (a2 - a1);
}

float avg(vec3 a) {
  return (a.r + a.g + a.b) / 3.0;
}

float band(float a, float p) {
  float ip = 1.0 / p;
  return floor((a - p) * ip) / ip;
}

float bump(float x, float amplitude, float center, float spread) {
  return amplitude * (1.0 - pow((x - center) / spread, 2.0));
}

bool floatEquals(float a, float b, float epsilon) {
  return abs(a - b) < epsilon;
}

bool isTransparent(vec4 color) {
  return floatEquals(color.a, 0.0, 0.01);
}

bool isBlack(vec4 color) {
  return (
    floatEquals(color.r, 0.0, 0.01) &&
    floatEquals(color.g, 0.0, 0.01) &&
    floatEquals(color.b, 0.0, 0.01)
  );
}

// -----------------------------------------------------------------------------
// MAIN
// -----------------------------------------------------------------------------
struct SpecularResult
{
  vec4 colour;
  float amount;
};

// Calculate highlight colour
vec4 calculateHighlight(float light, float falloff) {
  vec4 highlightColour = vec4(
    vec3(clamp(u_lightColour.rgb + HIGHLIGHT_OFFSET, 0.0, 1.0)),
    u_lightColour.a
  );
  float highlightAmount = clamp(
    band(
      (0.5 + 0.5 * light) * falloff * highlightColour.a * u_highlightAlpha,
      SHADING_BANDING
    ),
    0.0,
    1.0
  );

  return vec4(
    highlightColour.rgb * highlightAmount,
    highlightAmount
  );
}

// Calculate specular colour and amount
SpecularResult calculateSpecular(
  float light,
  float falloff,
  float lightDistance,
  float sceneSpecular
) {
  vec4 specularColour = vec4(
    vec3(clamp(u_lightColour.rgb + SPECULAR_OFFSET, 0.0, 1.0)),
    1.0
  );
  float specularAmount = clamp(
    band(
      (0.5 + 0.5 * light) * falloff,
      SHADING_BANDING
    ),
    0.0,
    1.0
  );
  float specularDistance = clamp(bump(
    lightDistance,
    SPECULAR_DISTANCE_AMPLITUDE,
    SPECULAR_DISTANCE_OFFSET,
    SPECULAR_DISTANCE_SPREAD
  ), 0.0, 1.0);
  float specularMixAmount = (
    sceneSpecular *
    bump(
      clamp(light, 0.0, 1.0),
      SPECULAR_MULTIPLIER,
      SPECULAR_THRESHOLD,
      SPECULAR_SPREAD
    ) *
    specularDistance *
    u_specularAlpha
  );

  vec4 specularResult = vec4(
    specularColour.rgb * specularAmount,
    specularAmount
  );

  return SpecularResult(specularResult, specularMixAmount);
}

// Calculate shadow colour
vec4 calculateShadow(float light, float falloff) {
  vec4 shadowColour = vec4(0.0, 0.0, 0.0, 1.0);
  float shadowAmount = clamp(
    band(
      (0.5 - 0.5 * light) * falloff * u_shadowAlpha,
      SHADING_BANDING
    ),
    0.0,
    1.0
  );

  return vec4(shadowColour.rgb * shadowAmount, shadowAmount);
}

// Fragment shader
void main() {
  vec2 uv = gl_FragCoord.xy / u_resolution;

  // We pass in various maps (e.g. normal and specular) for the entire scene,
  // but we're only interested in the  part of the map under the light's
  // bounding box
  vec2 sceneUV = vec2(
    remap(
      uv.x,
      0.0,
      1.0,
      u_lightScreenPositionTopLeft.x,
      u_lightScreenPositionBottomRight.x
    ),
    1.0 - remap(
      uv.y,
      0.0,
      1.0,
      u_lightScreenPositionBottomRight.y,
      u_lightScreenPositionTopLeft.y
    )
  );

  vec4 sceneNormal = texture2D(u_sceneNormalMap, sceneUV);
  vec4 sceneSpecular = texture2D(u_sceneSpecularMap, sceneUV);

  vec2 lightDirection = normalize(uv - vec2(0.5));
  vec3 lightNormal = normalize(vec3(
    lightDirection.x,
    -lightDirection.y,
    LIGHT_HEIGHT
  ));

  // ---------------------------------------------------------------------------
  // GROUND SHADING
  // ---------------------------------------------------------------------------
  vec4 groundMask = texture2D(u_groundMask, sceneUV);
  if (!isTransparent(groundMask)) {
    vec4 groundLight = texture2D(u_groundLightMap, uv);

    // We don't need any shading if there's no light on this part of the ground
    if (isBlack(groundLight)) {
      gl_FragColor = vec4(0.0);
      return;
    }

    // Light intensity
    float light = -dot(
      normalize(sceneNormal.rgb - vec3(0.5)),
      lightNormal
    );

    // Gradual falloff of light intensity with distance from light
    float falloff = pow(avg(groundLight.rgb) * SHADING_OFFSET, SHADING_FALLOFF);

    // Highlights
    if (light >= HIGHLIGHT_THRESHOLD) {
      vec4 highlightResult = calculateHighlight(light, falloff);
      SpecularResult specularResult = calculateSpecular(
        light,
        falloff,
        length(uv - vec2(0.5)),
        sceneSpecular.r
      );

      gl_FragColor = mix(
        highlightResult,
        specularResult.colour,
        specularResult.amount
      );
      return;
    }

    // Shadows
    if (light <= SHADOW_THRESHOLD) {
      gl_FragColor = calculateShadow(light, falloff);
      return;
    }

    gl_FragColor = vec4(0.0);
    return;
  }

  // ---------------------------------------------------------------------------
  // WALL LAYER 1 SHADING
  // ---------------------------------------------------------------------------
  vec2 wallLightingYOffset = vec2(0.0, u_wallLightingYOffset / u_resolution.y);
  vec4 wall1Mask = texture2D(u_wall1Mask, sceneUV);
  if (!isTransparent(wall1Mask)) {
    vec4 wallLight = texture2D(u_wall1LightMap, uv + wallLightingYOffset);

    // We don't need any shading if there's no light on this part of the wall
    if (isBlack(wallLight)) {
      gl_FragColor = vec4(0.0);
      return;
    }

    // Light intensity
    float light = -dot(
      normalize(sceneNormal.rgb - vec3(0.5, 0.5, 0.5 + WALL_NORMAL_Z_OFFSET)),
      lightNormal
    );

    // Gradual falloff of light intensity with distance from light
    float falloff = pow(avg(wallLight.rgb) * SHADING_OFFSET, SHADING_FALLOFF);

    // Highlights
    if (light >= HIGHLIGHT_THRESHOLD) {
      vec4 highlightResult = calculateHighlight(light, falloff);
      SpecularResult specularResult = calculateSpecular(
        light,
        falloff,
        length(uv - vec2(0.5)),
        sceneSpecular.r
      );

      gl_FragColor = mix(
        highlightResult,
        specularResult.colour,
        specularResult.amount
      );
      return;
    }

    // Shadows
    if (light <= SHADOW_THRESHOLD) {
      gl_FragColor = calculateShadow(light, falloff);
      return;
    }

    gl_FragColor = vec4(0.0);
    return;
  }

  // ---------------------------------------------------------------------------
  // WALL LAYER 2 SHADING
  // ---------------------------------------------------------------------------
  vec4 wall2Mask = texture2D(u_wall2Mask, sceneUV);
  if (!isTransparent(wall2Mask)) {
    vec4 wallLight = texture2D(u_wall2LightMap, uv + wallLightingYOffset);

    // We don't need any shading if there's no light on this part of the wall
    if (isBlack(wallLight)) {
      gl_FragColor = vec4(0.0);
      return;
    }

    // Light intensity
    float light = -dot(
      normalize(sceneNormal.rgb - vec3(0.5, 0.5, 0.5 + WALL_NORMAL_Z_OFFSET)),
      lightNormal
    );

    // Gradual falloff of light intensity with distance from light
    float falloff = pow(avg(wallLight.rgb) * SHADING_OFFSET, SHADING_FALLOFF);

    // Highlights
    if (light >= HIGHLIGHT_THRESHOLD) {
      vec4 highlightResult = calculateHighlight(light, falloff);
      SpecularResult specularResult = calculateSpecular(
        light,
        falloff,
        length(uv - vec2(0.5)),
        sceneSpecular.r
      );

      gl_FragColor = mix(
        highlightResult,
        specularResult.colour,
        specularResult.amount
      );
      return;
    }

    // Shadows
    if (light <= SHADOW_THRESHOLD) {
      gl_FragColor = calculateShadow(light, falloff);
      return;
    }

    gl_FragColor = vec4(0.0);
    return;
  }
}

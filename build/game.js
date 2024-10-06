/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@basementuniverse/debug/build/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/@basementuniverse/debug/build/index.js ***!
  \*************************************************************/
/***/ ((module) => {

/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else { var i, a; }
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@basementuniverse/utils/utils.js":
/*!*******************************************************!*\
  !*** ./node_modules/@basementuniverse/utils/utils.js ***!
  \*******************************************************/
/***/ ((module) => {

eval("/**\n * @overview A library of useful functions\n * @author Gordon Larrigan\n */\n\n/**\n * Check if two numbers are approximately equal\n * @param {number} a Number a\n * @param {number} b Number b\n * @param {number} [p=Number.EPSILON] The precision value\n * @return {boolean} True if numbers a and b are approximately equal\n */\nconst floatEquals = (a, b, p = Number.EPSILON) => Math.abs(a - b) < p;\n\n/**\n * Clamp a number between min and max\n * @param {number} a The number to clamp\n * @param {number} [min=0] The minimum value\n * @param {number} [max=1] The maximum value\n * @return {number} A clamped number\n */\nconst clamp = (a, min = 0, max = 1) => a < min ? min : (a > max ? max : a);\n\n/**\n * Get the fractional part of a number\n * @param {number} a The number from which to get the fractional part\n * @return {number} The fractional part of the number\n */\nconst frac = a => a >= 0 ? a - Math.floor(a) : a - Math.ceil(a);\n\n/**\n * Do a linear interpolation between a and b\n * @param {number} a The minimum number\n * @param {number} b The maximum number\n * @param {number} i The interpolation value, should be in the interval [0, 1]\n * @return {number} An interpolated value in the interval [a, b]\n */\nconst lerp = (a, b, i) => a + (b - a) * i;\n\n/**\n * Get the position of i between a and b\n * @param {number} a The minimum number\n * @param {number} b The maximum number\n * @param {number} i The interpolated value in the interval [a, b]\n * @return {number} The position of i between a and b\n */\nconst unlerp = (a, b, i) => (i - a) / (b - a);\n\n/**\n * Do a bilinear interpolation\n * @param {number} c00 Top-left value\n * @param {number} c10 Top-right value\n * @param {number} c01 Bottom-left value\n * @param {number} c11 Bottom-right value\n * @param {number} ix Interpolation value along x\n * @param {number} iy Interpolation value along y\n * @return {number} A bilinear interpolated value\n */\nconst blerp = (c00, c10, c01, c11, ix, iy) => lerp(lerp(c00, c10, ix), lerp(c01, c11, ix), iy);\n\n/**\n * Re-map a number i from range a1...a2 to b1...b2\n * @param {number} i The number to re-map\n * @param {number} a1\n * @param {number} a2\n * @param {number} b1\n * @param {number} b2\n * @return {number}\n */\nconst remap = (i, a1, a2, b1, b2) => b1 + (i - a1) * (b2 - b1) / (a2 - a1);\n\n/**\n * Do a smooth interpolation between a and b\n * @param {number} a The minimum number\n * @param {number} b The maximum number\n * @param {number} i The interpolation value\n * @return {number} An interpolated value in the interval [a, b]\n */\nconst smoothstep = (a, b, i) => lerp(a, b, 3 * Math.pow(i, 2) - 2 * Math.pow(i, 3));\n\n/**\n * Get an angle in radians\n * @param {number} degrees The angle in degrees\n * @return {number} The angle in radians\n */\nconst radians = degrees => (Math.PI / 180) * degrees;\n\n/**\n * Get an angle in degrees\n * @param {number} radians The angle in radians\n * @return {number} The angle in degrees\n */\nconst degrees = radians => (180 / Math.PI) * radians;\n\n/**\n * Get a random float in the interval [min, max)\n * @param {number} min Inclusive min\n * @param {number} max Exclusive max\n * @return {number} A random float in the interval [min, max)\n */\nconst randomBetween = (min, max) => Math.random() * (max - min) + min;\n\n/**\n * Get a random integer in the interval [min, max]\n * @param {number} min Inclusive min\n * @param {number} max Inclusive max\n * @return {number} A random integer in the interval [min, max]\n */\nconst randomIntBetween = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;\n\n/**\n * Get a normally-distributed random number\n * @param {number} [mu=0.5] The mean value\n * @param {number} [sigma=0.5] The standard deviation\n * @param {number} [samples=2] The number of samples\n * @return {number} A normally-distributed random number\n */\nconst cltRandom = (mu = 0.5, sigma = 0.5, samples = 2) => {\n  let total = 0;\n  for (let i = samples; i--;) {\n    total += Math.random();\n  }\n  return mu + (total - samples / 2) / (samples / 2) * sigma;\n};\n\n/**\n * Get a normally-distributed random integer in the interval [min, max]\n * @param {number} min Inclusive min\n * @param {number} max Inclusive max\n * @return {number} A normally-distributed random integer\n */\nconst cltRandomInt = (min, max) => Math.floor(min + cltRandom(0.5, 0.5, 2) * (max + 1 - min));\n\n/**\n * Return a weighted random integer\n * @param {Array<number>} w An array of weights\n * @return {number} An index from w\n */\nconst weightedRandom = w => {\n  let total = w.reduce((a, i) => a + i, 0), n = 0;\n  const r = Math.random() * total;\n  while (total > r) {\n    total -= w[n++];\n  }\n  return n - 1;\n};\n\n/**\n * An interpolation function\n * @callback interpolationCallback\n * @param {number} a The minimum number\n * @param {number} b The maximum number\n * @param {number} i The interpolation value, should be in the interval [0, 1]\n * @return {number} The interpolated value in the interval [a, b]\n */\n\n/**\n * Return an interpolated value from an array\n * @param {Array<number>} a An array of values interpolate\n * @param {number} i A number in the interval [0, 1]\n * @param {interpolationCallback} [f=Math.lerp] The interpolation function to use\n * @return {number} An interpolated value in the interval [min(a), max(a)]\n */\nconst lerpArray = (a, i, f = lerp) => {\n  const s = i * (a.length - 1);\n  const p = clamp(Math.trunc(s), 0, a.length - 1);\n  return f(a[p] || 0, a[p + 1] || 0, frac(s));\n};\n\n/**\n * Get the dot product of two vectors\n * @param {Array<number>} a Vector a\n * @param {Array<number>} b Vector b\n * @return {number} a ∙ b\n */\nconst dot = (a, b) => a.reduce((n, v, i) => n + v * b[i], 0);\n\n/**\n * Get the factorial of a number\n * @param {number} a\n * @return {number} a!\n */\nconst factorial = a => {\n  let result = 1;\n  for (let i = 2; i <= a; i++) {\n    result *= i;\n  }\n  return result;\n};\n\n/**\n * Get the number of permutations of r elements from a set of n elements\n * @param {number} n\n * @param {number} r\n * @return {number} nPr\n */\nconst permutation = (n, r) => factorial(n) / factorial(n - r);\n\n/**\n * Get the number of combinations of r elements from a set of n elements\n * @param {number} n\n * @param {number} r\n * @return {number} nCr\n */\nconst combination = (n, r) => factorial(n) / (factorial(r) * factorial(n - r));\n\n/**\n * A function for generating array values\n * @callback timesCallback\n * @param {number} i The array index\n * @return {*} The array value\n */\n\n/**\n * Return a new array with length n by calling function f(i) on each element\n * @param {timesCallback} f\n * @param {number} n The size of the array\n * @return {Array<*>}\n */\nconst times = (f, n) => Array(n).fill(0).map((_, i) => f(i));\n\n/**\n * Return an array containing numbers 0->(n - 1)\n * @param {number} n The size of the array\n * @return {Array<number>} An array of integers 0->(n - 1)\n */\nconst range = n => times(i => i, n);\n\n/**\n * Zip 2 arrays together, i.e. ([1, 2, 3], [a, b, c]) => [[1, a], [2, b], [3, c]]\n * @param {Array<*>} a\n * @param {Array<*>} b\n * @return {Array<Array<*>>}\n */\nconst zip = (a, b) => a.map((k, i) => [k, b[i]]);\n\n/**\n * Return array[i] with positive and negative wrapping\n * @param {Array<*>} a\n * @param {number} i The positively/negatively wrapped array index\n * @return {*} An element from the array\n */\nconst at = (a, i) => a[i < 0 ? a.length - (Math.abs(i + 1) % a.length) - 1 : i % a.length];\n\n/**\n * Chop an array into chunks of size n\n * @param {Array<*>} a\n * @param {number} n The chunk size\n * @return {Array<Array<*>>} An array of array chunks\n */\nconst chunk = (a, n) => times(i => a.slice(i * n, i * n + n), Math.ceil(a.length / n));\n\n/**\n * Randomly shuffle a shallow copy of an array\n * @param {Array<*>} a\n * @return {Array<*>} The shuffled array\n */\nconst shuffle = a => a.slice().sort(() => Math.random() - 0.5);\n\nif (true) {\n  module.exports = {\n    floatEquals,\n    clamp,\n    frac,\n    lerp,\n    unlerp,\n    blerp,\n    remap,\n    smoothstep,\n    radians,\n    degrees,\n    randomBetween,\n    randomIntBetween,\n    cltRandom,\n    cltRandomInt,\n    weightedRandom,\n    lerpArray,\n    dot,\n    factorial,\n    permutation,\n    combination,\n    times,\n    range,\n    zip,\n    at,\n    chunk,\n    shuffle,\n  };\n}\n\n\n//# sourceURL=webpack://@basementuniverse/debug/./node_modules/@basementuniverse/utils/utils.js?");

/***/ }),

/***/ "./node_modules/@basementuniverse/vec/vec.js":
/*!***************************************************!*\
  !*** ./node_modules/@basementuniverse/vec/vec.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { times, chunk, dot } = __webpack_require__(/*! @basementuniverse/utils */ \"./node_modules/@basementuniverse/utils/utils.js\");\n\n/**\n * @overview A library of useful functions\n * @author Gordon Larrigan\n */\n\n/**\n * A 2d vector\n * @typedef {Object} vec\n * @property {number} x The x component of the vector\n * @property {number} y The y component of the vector\n */\n\n/**\n * Create a new vector\n * @param {number|vec} [x] The x component of the vector, or a vector to copy\n * @param {number} [y] The y component of the vector\n * @return {vec} A new vector\n * @example <caption>Various ways to initialise a vector</caption>\n * let a = vec(3, 2);  // (3, 2)\n * let b = vec(4);     // (4, 4)\n * let c = vec(a);     // (3, 2)\n * let d = vec();      // (0, 0)\n */\nconst vec = (x, y) => (!x && !y ?\n  { x: 0, y: 0 } : (typeof x === 'object' ?\n    { x: x.x || 0, y: x.y || 0 } : (y === null || y === undefined ?\n      { x: x, y: x } : { x: x, y: y })\n  )\n);\n\n/**\n * Get the components of a vector as an array\n * @param {vec} a The vector to get components from\n * @return {Array<number>} The vector components as an array\n */\nvec.components = a => [a.x, a.y];\n\n/**\n * Return a unit vector (1, 0)\n * @return {vec} A unit vector (1, 0)\n */\nvec.ux = () => vec(1, 0);\n\n/**\n * Return a unit vector (0, 1)\n * @return {vec} A unit vector (0, 1)\n */\nvec.uy = () => vec(0, 1);\n\n/**\n * Add vectors\n * @param {vec} a Vector a\n * @param {vec} b Vector b\n * @return {vec} a + b\n */\nvec.add = (a, b) => ({ x: a.x + b.x, y: a.y + b.y });\n\n/**\n * Scale a vector\n * @param {vec} a Vector a\n * @param {number} b Scalar b\n * @return {vec} a * b\n */\nvec.mul = (a, b) => ({ x: a.x * b, y: a.y * b });\n\n/**\n * Subtract vectors\n * @param {vec} a Vector a\n * @param {vec} b Vector b\n * @return {vec} a - b\n */\nvec.sub = (a, b) => ({ x: a.x - b.x, y: a.y - b.y });\n\n/**\n * Get the length of a vector\n * @param {vec} a Vector a\n * @return {number} |a|\n */\nvec.len = a => Math.sqrt(a.x * a.x + a.y * a.y);\n\n/**\n * Get the length of a vector using taxicab geometry\n * @param {vec} a Vector a\n * @return {number} |a|\n */\nvec.manhattan = a => Math.abs(a.x) + Math.abs(a.y);\n\n/**\n * Normalise a vector\n * @param {vec} a The vector to normalise\n * @return {vec} ^a\n */\nvec.nor = a => {\n  let len = vec.len(a);\n  return len ? { x: a.x / len, y: a.y / len } : vec();\n};\n\n/**\n * Get a dot product of vectors\n * @param {vec} a Vector a\n * @param {vec} b Vector b\n * @return {number} a ∙ b\n */\nvec.dot = (a, b) => a.x * b.x + a.y * b.y;\n\n/**\n * Rotate a vector by r radians\n * @param {vec} a The vector to rotate\n * @param {number} r The angle to rotate by, measured in radians\n * @return {vec} A rotated vector\n */\nvec.rot = (a, r) => {\n  let s = Math.sin(r),\n    c = Math.cos(r);\n  return { x: c * a.x - s * a.y, y: s * a.x + c * a.y };\n}\n\n/**\n * Check if two vectors are equal\n * @param {vec} a Vector a\n * @param {vec} b Vector b\n * @return {boolean} True if vectors a and b are equal, false otherwise\n */\nvec.eq = (a, b) => a.x === b.x && a.y === b.y;\n\n/**\n * Get the angle of a vector\n * @param {vec} a Vector a\n * @return {number} The angle of vector a in radians\n */\nvec.rad = a => Math.atan2(a.y, a.x);\n\n/**\n * Copy a vector\n * @param {vec} a The vector to copy\n * @return {vec} A copy of vector a\n */\nvec.cpy = a => vec(a);\n\n/**\n * A function to call on each component of a vector\n * @callback vectorMapCallback\n * @param {number} value The component value\n * @param {'x' | 'y'} label The component label (x or y)\n * @return {number} The mapped component\n */\n\n/**\n * Call a function on each component of a vector and build a new vector from the results\n * @param {vec} a Vector a\n * @param {vectorMapCallback} f The function to call on each component of the vector\n * @return {vec} Vector a mapped through f\n */\nvec.map = (a, f) => ({ x: f(a.x, 'x'), y: f(a.y, 'y') });\n\n/**\n * Convert a vector into a string\n * @param {vec} a The vector to convert\n * @param {string} [s=', '] The separator string\n * @return {string} A string representation of the vector\n */\nvec.str = (a, s = ', ') => `${a.x}${s}${a.y}`;\n\n/**\n * A matrix\n * @typedef {Object} mat\n * @property {number} m The number of rows in the matrix\n * @property {number} n The number of columns in the matrix\n * @property {Array<number>} entries The matrix values\n */\n\n/**\n * Create a new matrix\n * @param {number} [m=4] The number of rows\n * @param {number} [n=4] The number of columns\n * @param {Array<number>} [entries=[]] Matrix values in reading order\n * @return {mat} A new matrix\n */\nconst mat = (m = 4, n = 4, entries = []) => ({\n  m, n,\n  entries: entries.concat(Array(m * n).fill(0)).slice(0, m * n)\n});\n\n/**\n * Get an identity matrix of size n\n * @param {number} n The size of the matrix\n * @return {mat} An identity matrix\n */\nmat.identity = n => mat(n, n, Array(n * n).fill(0).map((v, i) => +(Math.floor(i / n) === i % n)));\n\n/**\n * Get an entry from a matrix\n * @param {mat} a Matrix a\n * @param {number} i The row offset\n * @param {number} j The column offset\n * @return {number} The value at position (i, j) in matrix a\n */\nmat.get = (a, i, j) => a.entries[(j - 1) + (i - 1) * a.n];\n\n/**\n * Set an entry of a matrix\n * @param {mat} a Matrix a\n * @param {number} i The row offset\n * @param {number} j The column offset\n * @param {number} v The value to set in matrix a\n */\nmat.set = (a, i, j, v) => { a.entries[(j - 1) + (i - 1) * a.n] = v; };\n\n/**\n * Get a row from a matrix as an array\n * @param {mat} a Matrix a\n * @param {number} m The row offset\n * @return {Array<number>} Row m from matrix a\n */\nmat.row = (a, m) => {\n  const s = (m - 1) * a.n;\n  return a.entries.slice(s, s + a.n);\n};\n\n/**\n * Get a column from a matrix as an array\n * @param {mat} a Matrix a\n * @param {number} n The column offset\n * @return {Array<number>} Column n from matrix a\n */\nmat.col = (a, n) => times(i => mat.get(a, (i + 1), n), a.m);\n\n/**\n * Add matrices\n * @param {mat} a Matrix a\n * @param {mat} b Matrix b\n * @return {mat} a + b\n */\nmat.add = (a, b) => a.m === b.m && a.n === b.n && mat.map(a, (v, i) => v + b.entries[i]);\n\n/**\n * Subtract matrices\n * @param {mat} a Matrix a\n * @param {mat} b Matrix b\n * @return {mat} a - b\n */\nmat.sub = (a, b) => a.m === b.m && a.n === b.n && mat.map(a, (v, i) => v - b.entries[i]);\n\n/**\n * Multiply matrices\n * @param {mat} a Matrix a\n * @param {mat} b Matrix b\n * @return {mat|boolean} ab or false if the matrices cannot be multiplied\n */\nmat.mul = (a, b) => {\n  if (a.n !== b.m) { return false; }\n  const result = mat(a.m, b.n);\n  for (let i = 1; i <= a.m; i++) {\n    for (let j = 1; j <= b.n; j++) {\n      mat.set(result, i, j, dot(mat.row(a, i), mat.col(b, j)));\n    }\n  }\n  return result;\n};\n\n/**\n * Scale a matrix\n * @param {mat} a Matrix a\n * @param {number} b Scalar b\n * @return {mat} a * b\n */\nmat.scale = (a, b) => mat.map(a, v => v * b);\n\n/**\n * Transpose a matrix\n * @param {mat} a The matrix to transpose\n * @return {mat} A transposed matrix\n */\nmat.trans = a => mat(a.n, a.m, times(i => mat.col(a, (i + 1)), a.n).flat());\n\n/**\n * Get the minor of a matrix\n * @param {mat} a Matrix a\n * @param {number} i The row offset\n * @param {number} j The column offset\n * @return {mat|boolean} The (i, j) minor of matrix a or false if the matrix is not square\n */\nmat.minor = (a, i, j) => {\n  if (a.m !== a.n) { return false; }\n  const entries = [];\n  for (let ii = 1; ii <= a.m; ii++) {\n    if (ii === i) { continue; }\n    for (let jj = 1; jj <= a.n; jj++) {\n      if (jj === j) { continue; }\n      entries.push(mat.get(a, ii, jj));\n    }\n  }\n  return mat(a.m - 1, a.n - 1, entries);\n};\n\n/**\n * Get the determinant of a matrix\n * @param {mat} a Matrix a\n * @return {number|boolean} |a| or false if the matrix is not square\n */\nmat.det = a => {\n  if (a.m !== a.n) { return false; }\n  if (a.m === 1) {\n    return a.entries[0];\n  }\n  if (a.m === 2) {\n    return a.entries[0] * a.entries[3] - a.entries[1] * a.entries[2];\n  }\n  let total = 0, sign = 1;\n  for (let j = 1; j <= a.n; j++) {\n    total += sign * a.entries[j - 1] * mat.det(mat.minor(a, 1, j));\n    sign *= -1;\n  }\n  return total;\n};\n\n/**\n * Normalise a matrix\n * @param {mat} a The matrix to normalise\n * @return {mat|boolean} ^a or false if the matrix is not square\n */\nmat.nor = a => {\n  if (a.m !== a.n) { return false; }\n  const d = mat.det(a);\n  return mat.map(a, i => i * d);\n};\n\n/**\n * Get the adjugate of a matrix\n * @param {mat} a The matrix from which to get the adjugate\n * @return {mat} The adjugate of a\n */\nmat.adj = a => {\n  const minors = mat(a.m, a.n);\n  for (let i = 1; i <= a.m; i++) {\n    for (let j = 1; j <= a.n; j++) {\n      mat.set(minors, i, j, mat.det(mat.minor(a, i, j)));\n    }\n  }\n  const cofactors = mat.map(minors, (v, i) => v * (i % 2 ? -1 : 1));\n  return mat.trans(cofactors);\n};\n\n/**\n * Get the inverse of a matrix\n * @param {mat} a The matrix to invert\n * @return {mat|boolean} a^-1 or false if the matrix has no inverse\n */\nmat.inv = a => {\n  if (a.m !== a.n) { return false; }\n  const d = mat.det(a);\n  if (d === 0) { return false; }\n  return mat.scale(mat.adj(a), 1 / d);\n};\n\n/**\n * Check if two matrices are equal\n * @param {mat} a Matrix a\n * @param {mat} b Matrix b\n * @return {boolean} True if matrices a and b are identical, false otherwise\n */\nmat.eq = (a, b) => a.m === b.m && a.n === b.n && mat.str(a) === mat.str(b);\n\n/**\n * Copy a matrix\n * @param {mat} a The matrix to copy\n * @return {mat} A copy of matrix a\n */\nmat.cpy = a => mat(a.m, a.n, [...a.entries]);\n\n/**\n * A function to call on each entry of a matrix\n * @callback matrixMapCallback\n * @param {number} value The entry value\n * @param {number} index The entry index\n * @param {Array<number>} entries The array of matrix entries\n * @return {number} The mapped entry\n */\n\n/**\n * Call a function on each entry of a matrix and build a new matrix from the results\n * @param {mat} a Matrix a\n * @param {matrixMapCallback} f The function to call on each entry of the matrix\n * @return {mat} Matrix a mapped through f\n */\nmat.map = (a, f) => mat(a.m, a.n, a.entries.map(f));\n\n/**\n * Convert a matrix into a string\n * @param {mat} a The matrix to convert\n * @param {string} [ms=', '] The separator string for columns\n * @param {string} [ns='\\n'] The separator string for rows\n * @return {string} A string representation of the matrix\n */\nmat.str = (a, ms = ', ', ns = '\\n') => chunk(a.entries, a.n).map(r => r.join(ms)).join(ns);\n\nif (true) {\n  module.exports = { vec, mat };\n}\n\n\n//# sourceURL=webpack://@basementuniverse/debug/./node_modules/@basementuniverse/vec/vec.js?");

/***/ }),

/***/ "./index.ts":
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst vec_1 = __webpack_require__(/*! @basementuniverse/vec */ \"./node_modules/@basementuniverse/vec/vec.js\");\nclass Debug {\n    constructor(options) {\n        if (options === null || options === void 0 ? void 0 : options.defaultValue) {\n            options.defaultValue = Object.assign({}, Debug.defaultOptions.defaultValue, options.defaultValue);\n        }\n        if (options === null || options === void 0 ? void 0 : options.defaultChart) {\n            options.defaultChart = Object.assign({}, Debug.defaultOptions.defaultChart, options.defaultChart);\n        }\n        if (options === null || options === void 0 ? void 0 : options.defaultMarker) {\n            options.defaultMarker = Object.assign({}, Debug.defaultOptions.defaultMarker, options.defaultMarker);\n        }\n        if (options === null || options === void 0 ? void 0 : options.defaultBorder) {\n            options.defaultBorder = Object.assign({}, Debug.defaultOptions.defaultBorder, options.defaultBorder);\n        }\n        this.options = Object.assign({}, Debug.defaultOptions, options !== null && options !== void 0 ? options : {});\n        this.values = new Map();\n        this.charts = new Map();\n        this.markers = new Map();\n        this.borders = new Map();\n    }\n    /**\n     * Initialise the debug renderer for displaying values and markers\n     */\n    static initialise(options = {}) {\n        if (Debug.instance !== undefined) {\n            throw new Error('Debug has already been initialised');\n        }\n        Debug.instance = new Debug(options);\n    }\n    static getInstance() {\n        if (Debug.instance === undefined) {\n            throw new Error('Debug not properly initialised');\n        }\n        return Debug.instance;\n    }\n    /**\n     * Show a debug value\n     */\n    static value(label, value, options) {\n        var _a;\n        const instance = Debug.getInstance();\n        instance.values.set(label, Object.assign({}, instance.options.defaultValue, (_a = instance.values.get(label)) !== null && _a !== void 0 ? _a : {}, options !== null && options !== void 0 ? options : {}, { label, value }));\n    }\n    /**\n     * Show a debug chart\n     */\n    static chart(label, value, options) {\n        var _a, _b;\n        const instance = Debug.getInstance();\n        const currentChart = instance.charts.get(label);\n        instance.charts.set(label, Object.assign({}, instance.options.defaultChart, currentChart !== null && currentChart !== void 0 ? currentChart : {}, options !== null && options !== void 0 ? options : {}, {\n            label,\n            values: [...(_a = currentChart === null || currentChart === void 0 ? void 0 : currentChart.values) !== null && _a !== void 0 ? _a : [], value].slice(-((_b = options === null || options === void 0 ? void 0 : options.valueBufferSize) !== null && _b !== void 0 ? _b : instance.options.defaultChart.valueBufferSize)),\n        }));\n    }\n    /**\n     * Remove a debug chart\n     */\n    static removeChart(label) {\n        const instance = Debug.getInstance();\n        instance.charts.delete(label);\n    }\n    /**\n     * Show a marker in world or screen space\n     */\n    static marker(label, value, position, options) {\n        var _a;\n        const instance = Debug.getInstance();\n        instance.markers.set(label, Object.assign({}, instance.options.defaultMarker, (_a = instance.markers.get(label)) !== null && _a !== void 0 ? _a : {}, options !== null && options !== void 0 ? options : {}, { label, value, position }));\n    }\n    /**\n     * Show a border in world or screen space\n     */\n    static border(label, value, position, options) {\n        var _a;\n        if ((options === null || options === void 0 ? void 0 : options.borderShape) === 'circle' && (options === null || options === void 0 ? void 0 : options.radius) === undefined) {\n            // Don't add the border if it's circular but we don't have a radius\n            return;\n        }\n        if ((options === null || options === void 0 ? void 0 : options.borderShape) !== 'circle' && (options === null || options === void 0 ? void 0 : options.size) === undefined) {\n            // Don't add the border if it's rectangular (default is rectangular) but\n            // we don't have a size\n            return;\n        }\n        const instance = Debug.getInstance();\n        instance.borders.set(label, Object.assign({}, instance.options.defaultBorder, (_a = instance.borders.get(label)) !== null && _a !== void 0 ? _a : {}, options !== null && options !== void 0 ? options : {}, { label, value, position }));\n    }\n    /**\n     * Render the debug values and markers onto a canvas\n     */\n    static draw(context) {\n        const instance = Debug.getInstance();\n        // Draw world-space markers & borders\n        context.save();\n        instance.markers.forEach(marker => {\n            if (marker.space === 'world') {\n                instance.drawMarker(context, marker);\n            }\n        });\n        instance.borders.forEach(border => {\n            if (border.space === 'world') {\n                instance.drawBorder(context, border);\n            }\n        });\n        context.restore();\n        // Draw values, charts and screen-space markers & borders\n        context.save();\n        context.setTransform(1, 0, 0, 1, 0, 0);\n        let position;\n        let leftY = instance.options.margin;\n        let rightY = instance.options.margin;\n        const lineHeight = (instance.options.lineHeight +\n            instance.options.padding * 2);\n        instance.values.forEach(value => {\n            var _a, _b, _c, _d, _e, _f;\n            switch (value.align) {\n                case 'left':\n                    position = (0, vec_1.vec)(instance.options.margin, leftY);\n                    leftY += lineHeight + instance.options.lineMargin;\n                    break;\n                case 'right':\n                    position = (0, vec_1.vec)(context.canvas.clientWidth - instance.options.margin, rightY);\n                    rightY += lineHeight + instance.options.lineMargin;\n                    break;\n            }\n            instance.drawLabel(context, Debug.prepareLabel((_a = value.label) !== null && _a !== void 0 ? _a : '', (_b = value.value) !== null && _b !== void 0 ? _b : '', value.showLabel, true), position, value.align, (_c = value.padding) !== null && _c !== void 0 ? _c : instance.options.padding, (_d = value.font) !== null && _d !== void 0 ? _d : instance.options.font, (_e = value.foregroundColour) !== null && _e !== void 0 ? _e : instance.options.foregroundColour, (_f = value.backgroundColour) !== null && _f !== void 0 ? _f : instance.options.backgroundColour);\n        });\n        instance.charts.forEach(chart => {\n            var _a, _b, _c, _d, _e;\n            switch (chart.align) {\n                case 'left':\n                    position = (0, vec_1.vec)(instance.options.margin, leftY);\n                    leftY += lineHeight + instance.options.lineMargin;\n                    break;\n                case 'right':\n                    position = (0, vec_1.vec)(context.canvas.clientWidth - instance.options.margin, rightY);\n                    rightY += lineHeight + instance.options.lineMargin;\n                    break;\n            }\n            instance.drawChart(context, Debug.prepareLabel((_a = chart.label) !== null && _a !== void 0 ? _a : '', '', chart.showLabel, false), position, chart.align, (_b = chart.padding) !== null && _b !== void 0 ? _b : instance.options.padding, (_c = chart.font) !== null && _c !== void 0 ? _c : instance.options.font, (_d = chart.foregroundColour) !== null && _d !== void 0 ? _d : instance.options.foregroundColour, (_e = chart.backgroundColour) !== null && _e !== void 0 ? _e : instance.options.backgroundColour, chart.chartBackgroundColour, chart.values, chart.valueBufferSize, chart.valueBufferStride, chart.minValue, chart.maxValue, chart.barWidth, chart.barColours);\n        });\n        instance.markers.forEach(marker => {\n            if (marker.space === 'screen') {\n                instance.drawMarker(context, marker);\n            }\n        });\n        instance.borders.forEach(border => {\n            if (border.space === 'screen') {\n                instance.drawBorder(context, border);\n            }\n        });\n        context.restore();\n        // Clear values, markers & borders ready for next frame\n        instance.values.clear();\n        instance.markers.clear();\n        instance.borders.clear();\n    }\n    static prepareLabel(label, value, showLabel, showValue) {\n        const actualLabel = (showLabel && label) ? label : '';\n        const actualValue = (!!showValue && value !== '') ? value.toString() : '';\n        const separator = (actualLabel && actualValue) ? ': ' : '';\n        return `${actualLabel}${separator}${actualValue}`;\n    }\n    drawLabel(context, text, position, align, padding, font, foregroundColour, backgroundColour) {\n        context.save();\n        context.font = font;\n        context.textBaseline = 'top';\n        const backgroundSize = {\n            width: context.measureText(text).width + padding * 2,\n            height: this.options.lineHeight + padding * 2,\n        };\n        const x = align === 'right'\n            ? (position.x - backgroundSize.width)\n            : position.x;\n        // Draw background\n        context.fillStyle = backgroundColour;\n        context.fillRect(x - padding, position.y - padding, backgroundSize.width, backgroundSize.height);\n        // Draw text\n        context.fillStyle = foregroundColour;\n        context.fillText(text, x, position.y);\n        context.restore();\n    }\n    drawChart(context, label, position, align, padding, font, foregroundColour, backgroundColour, chartBackgroundColour, values, valueBufferSize, valueBufferStride, minValue, maxValue, barWidth, barColours) {\n        var _a, _b;\n        context.save();\n        context.font = font;\n        context.textBaseline = 'top';\n        const chartSize = {\n            width: barWidth * Math.ceil(valueBufferSize / Math.max(valueBufferStride, 1)),\n            height: this.options.lineHeight + padding * 2,\n        };\n        const labelSize = {\n            width: context.measureText(label).width,\n            height: this.options.lineHeight,\n        };\n        const backgroundSize = {\n            width: (labelSize.width +\n                padding +\n                chartSize.width) + padding * 2,\n            height: this.options.lineHeight + padding * 2,\n        };\n        const x = align === 'right'\n            ? (position.x - backgroundSize.width)\n            : position.x;\n        // Draw background\n        context.fillStyle = backgroundColour;\n        context.fillRect(x - padding, position.y - padding, backgroundSize.width, backgroundSize.height);\n        // Draw label\n        if (label) {\n            context.fillStyle = foregroundColour;\n            context.fillText(label, x, position.y);\n        }\n        // Draw chart\n        if (chartBackgroundColour) {\n            context.fillStyle = chartBackgroundColour;\n            context.fillRect(x + padding + labelSize.width + padding, position.y - padding, chartSize.width, chartSize.height);\n        }\n        const range = maxValue - minValue;\n        const barOffset = (0, vec_1.vec)(x + padding + labelSize.width + padding, position.y - padding);\n        for (let i = 0; i < Math.ceil(values.length / Math.max(valueBufferStride, 1)); i++) {\n            let value;\n            if (valueBufferStride <= 1) {\n                value = values[i];\n            }\n            else {\n                value = values\n                    .slice(i * valueBufferStride, (i + 1) * valueBufferStride)\n                    .reduce((a, b) => a + b, 0) / valueBufferStride;\n            }\n            const barSize = (0, vec_1.vec)(barWidth, Math.round(chartSize.height * (value - minValue) / range));\n            const barPosition = vec_1.vec.add(barOffset, (0, vec_1.vec)((values.length < valueBufferSize\n                ? Math.ceil((valueBufferSize - values.length) / valueBufferStride) * barWidth\n                : 0) + i * barWidth, chartSize.height - barSize.y));\n            const barColour = (_b = (barColours\n                ? (_a = [...barColours].reverse().find(c => values[i] >= c.offset)) === null || _a === void 0 ? void 0 : _a.colour\n                : undefined)) !== null && _b !== void 0 ? _b : foregroundColour;\n            context.fillStyle = barColour;\n            context.fillRect(barPosition.x, barPosition.y, barSize.x, barSize.y);\n        }\n        context.restore();\n    }\n    drawMarker(context, marker) {\n        var _a, _b, _c, _d, _e, _f, _g;\n        context.save();\n        const position = (_a = marker.position) !== null && _a !== void 0 ? _a : (0, vec_1.vec)();\n        if (marker.showLabel || marker.showValue) {\n            this.drawLabel(context, Debug.prepareLabel((_b = marker.label) !== null && _b !== void 0 ? _b : '', (_c = marker.value) !== null && _c !== void 0 ? _c : '', marker.showLabel, marker.showValue), vec_1.vec.add(position !== null && position !== void 0 ? position : (0, vec_1.vec)(), marker.labelOffset), 'left', (_d = marker.padding) !== null && _d !== void 0 ? _d : this.options.padding, (_e = marker.font) !== null && _e !== void 0 ? _e : this.options.font, (_f = marker.foregroundColour) !== null && _f !== void 0 ? _f : this.options.foregroundColour, (_g = marker.backgroundColour) !== null && _g !== void 0 ? _g : this.options.backgroundColour);\n        }\n        if (marker.showMarker) {\n            context.lineWidth = 2;\n            context.strokeStyle = context.fillStyle = marker.markerColour;\n            switch (marker.markerStyle) {\n                case 'x':\n                    this.drawCross(context, position, marker.markerSize);\n                    break;\n                case '+':\n                    this.drawPlus(context, position, marker.markerSize);\n                    break;\n                case '.':\n                    this.drawDot(context, position, marker.markerSize);\n                    break;\n            }\n        }\n        context.restore();\n    }\n    drawCross(context, position, size) {\n        context.beginPath();\n        const halfSize = size / 2;\n        context.moveTo(position.x - halfSize, position.y - halfSize);\n        context.lineTo(position.x + halfSize, position.y + halfSize);\n        context.moveTo(position.x - halfSize, position.y + halfSize);\n        context.lineTo(position.x + halfSize, position.y - halfSize);\n        context.stroke();\n    }\n    drawPlus(context, position, size) {\n        context.beginPath();\n        const halfSize = size / 2;\n        context.moveTo(position.x, position.y - halfSize);\n        context.lineTo(position.x, position.y + halfSize);\n        context.moveTo(position.x - halfSize, position.y);\n        context.lineTo(position.x + halfSize, position.y);\n        context.stroke();\n    }\n    drawDot(context, position, size) {\n        context.beginPath();\n        context.arc(position.x, position.y, size / 2, 0, Math.PI * 2);\n        context.fill();\n    }\n    drawBorder(context, border) {\n        var _a, _b, _c, _d, _e, _f, _g;\n        context.save();\n        const position = (_a = border.position) !== null && _a !== void 0 ? _a : (0, vec_1.vec)();\n        if (border.showLabel || border.showValue) {\n            this.drawLabel(context, Debug.prepareLabel((_b = border.label) !== null && _b !== void 0 ? _b : '', (_c = border.value) !== null && _c !== void 0 ? _c : '', border.showLabel, border.showValue), vec_1.vec.add(position !== null && position !== void 0 ? position : (0, vec_1.vec)(), border.labelOffset), 'left', (_d = border.padding) !== null && _d !== void 0 ? _d : this.options.padding, (_e = border.font) !== null && _e !== void 0 ? _e : this.options.font, (_f = border.foregroundColour) !== null && _f !== void 0 ? _f : this.options.foregroundColour, (_g = border.backgroundColour) !== null && _g !== void 0 ? _g : this.options.backgroundColour);\n        }\n        if (border.showBorder) {\n            context.lineWidth = border.borderWidth;\n            context.strokeStyle = context.fillStyle = border.borderColour;\n            switch (border.borderStyle) {\n                case 'solid':\n                    context.setLineDash([]);\n                    break;\n                case 'dashed':\n                    context.setLineDash([border.borderDashSize, border.borderDashSize]);\n                    break;\n                case 'dotted':\n                    context.setLineDash([border.borderWidth, border.borderWidth]);\n                    break;\n            }\n            switch (border.borderShape) {\n                case 'rectangle':\n                    if (border.size) {\n                        this.drawRectangle(context, position, border.size);\n                    }\n                    break;\n                case 'circle':\n                    if (border.radius) {\n                        this.drawCircle(context, position, border.radius);\n                    }\n                    break;\n            }\n        }\n        context.restore();\n    }\n    drawRectangle(context, position, size) {\n        context.beginPath();\n        context.rect(position.x, position.y, size.x, size.y);\n        context.stroke();\n    }\n    drawCircle(context, position, radius) {\n        context.beginPath();\n        context.arc(position.x, position.y, radius, 0, Math.PI * 2);\n        context.stroke();\n    }\n}\nexports[\"default\"] = Debug;\nDebug.defaultOptions = {\n    margin: 10,\n    padding: 4,\n    font: '10pt Lucida Console, monospace',\n    lineHeight: 12,\n    lineMargin: 0,\n    foregroundColour: '#fff',\n    backgroundColour: '#333',\n    defaultValue: {\n        align: 'left',\n        showLabel: true,\n    },\n    defaultChart: {\n        values: [],\n        valueBufferSize: 60,\n        valueBufferStride: 1,\n        minValue: 0,\n        maxValue: 100,\n        barWidth: 2,\n        align: 'left',\n        showLabel: true,\n        chartBackgroundColour: '#222',\n    },\n    defaultMarker: {\n        showLabel: true,\n        showValue: true,\n        showMarker: true,\n        markerSize: 6,\n        markerStyle: 'x',\n        markerColour: '#ccc',\n        space: 'world',\n        labelOffset: (0, vec_1.vec)(10),\n    },\n    defaultBorder: {\n        showLabel: true,\n        showValue: true,\n        showBorder: true,\n        borderWidth: 1,\n        borderStyle: 'solid',\n        borderShape: 'rectangle',\n        borderColour: '#ccc',\n        borderDashSize: 5,\n        space: 'world',\n        labelOffset: (0, vec_1.vec)(10),\n    },\n};\n\n\n//# sourceURL=webpack://@basementuniverse/debug/./index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nested_webpack_require_40469__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __nested_webpack_require_40469__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __nested_webpack_exports__ = __nested_webpack_require_40469__("./index.ts");
/******/ 	
/******/ 	return __nested_webpack_exports__;
/******/ })()
;
});

/***/ }),

/***/ "./node_modules/@basementuniverse/input-manager/build/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@basementuniverse/input-manager/build/index.js ***!
  \*********************************************************************/
/***/ ((module) => {

/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else { var i, a; }
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@basementuniverse/utils/utils.js":
/*!*******************************************************!*\
  !*** ./node_modules/@basementuniverse/utils/utils.js ***!
  \*******************************************************/
/***/ ((module) => {

eval("/**\n * @overview A library of useful functions\n * @author Gordon Larrigan\n */\n\n/**\n * Check if two numbers are approximately equal\n * @param {number} a Number a\n * @param {number} b Number b\n * @param {number} [p=Number.EPSILON] The precision value\n * @return {boolean} True if numbers a and b are approximately equal\n */\nconst floatEquals = (a, b, p = Number.EPSILON) => Math.abs(a - b) < p;\n\n/**\n * Clamp a number between min and max\n * @param {number} a The number to clamp\n * @param {number} [min=0] The minimum value\n * @param {number} [max=1] The maximum value\n * @return {number} A clamped number\n */\nconst clamp = (a, min = 0, max = 1) => a < min ? min : (a > max ? max : a);\n\n/**\n * Get the fractional part of a number\n * @param {number} a The number from which to get the fractional part\n * @return {number} The fractional part of the number\n */\nconst frac = a => a >= 0 ? a - Math.floor(a) : a - Math.ceil(a);\n\n/**\n * Do a linear interpolation between a and b\n * @param {number} a The minimum number\n * @param {number} b The maximum number\n * @param {number} i The interpolation value, should be in the interval [0, 1]\n * @return {number} An interpolated value in the interval [a, b]\n */\nconst lerp = (a, b, i) => a + (b - a) * i;\n\n/**\n * Get the position of i between a and b\n * @param {number} a The minimum number\n * @param {number} b The maximum number\n * @param {number} i The interpolated value in the interval [a, b]\n * @return {number} The position of i between a and b\n */\nconst unlerp = (a, b, i) => (i - a) / (b - a);\n\n/**\n * Do a bilinear interpolation\n * @param {number} c00 Top-left value\n * @param {number} c10 Top-right value\n * @param {number} c01 Bottom-left value\n * @param {number} c11 Bottom-right value\n * @param {number} ix Interpolation value along x\n * @param {number} iy Interpolation value along y\n * @return {number} A bilinear interpolated value\n */\nconst blerp = (c00, c10, c01, c11, ix, iy) => lerp(lerp(c00, c10, ix), lerp(c01, c11, ix), iy);\n\n/**\n * Re-map a number i from range a1...a2 to b1...b2\n * @param {number} i The number to re-map\n * @param {number} a1\n * @param {number} a2\n * @param {number} b1\n * @param {number} b2\n * @return {number}\n */\nconst remap = (i, a1, a2, b1, b2) => b1 + (i - a1) * (b2 - b1) / (a2 - a1);\n\n/**\n * Do a smooth interpolation between a and b\n * @param {number} a The minimum number\n * @param {number} b The maximum number\n * @param {number} i The interpolation value\n * @return {number} An interpolated value in the interval [a, b]\n */\nconst smoothstep = (a, b, i) => lerp(a, b, 3 * Math.pow(i, 2) - 2 * Math.pow(i, 3));\n\n/**\n * Get an angle in radians\n * @param {number} degrees The angle in degrees\n * @return {number} The angle in radians\n */\nconst radians = degrees => (Math.PI / 180) * degrees;\n\n/**\n * Get an angle in degrees\n * @param {number} radians The angle in radians\n * @return {number} The angle in degrees\n */\nconst degrees = radians => (180 / Math.PI) * radians;\n\n/**\n * Get a random float in the interval [min, max)\n * @param {number} min Inclusive min\n * @param {number} max Exclusive max\n * @return {number} A random float in the interval [min, max)\n */\nconst randomBetween = (min, max) => Math.random() * (max - min) + min;\n\n/**\n * Get a random integer in the interval [min, max]\n * @param {number} min Inclusive min\n * @param {number} max Inclusive max\n * @return {number} A random integer in the interval [min, max]\n */\nconst randomIntBetween = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;\n\n/**\n * Get a normally-distributed random number\n * @param {number} [mu=0.5] The mean value\n * @param {number} [sigma=0.5] The standard deviation\n * @param {number} [samples=2] The number of samples\n * @return {number} A normally-distributed random number\n */\nconst cltRandom = (mu = 0.5, sigma = 0.5, samples = 2) => {\n  let total = 0;\n  for (let i = samples; i--;) {\n    total += Math.random();\n  }\n  return mu + (total - samples / 2) / (samples / 2) * sigma;\n};\n\n/**\n * Get a normally-distributed random integer in the interval [min, max]\n * @param {number} min Inclusive min\n * @param {number} max Inclusive max\n * @return {number} A normally-distributed random integer\n */\nconst cltRandomInt = (min, max) => Math.floor(min + cltRandom(0.5, 0.5, 2) * (max + 1 - min));\n\n/**\n * Return a weighted random integer\n * @param {Array<number>} w An array of weights\n * @return {number} An index from w\n */\nconst weightedRandom = w => {\n  let total = w.reduce((a, i) => a + i, 0), n = 0;\n  const r = Math.random() * total;\n  while (total > r) {\n    total -= w[n++];\n  }\n  return n - 1;\n};\n\n/**\n * An interpolation function\n * @callback interpolationCallback\n * @param {number} a The minimum number\n * @param {number} b The maximum number\n * @param {number} i The interpolation value, should be in the interval [0, 1]\n * @return {number} The interpolated value in the interval [a, b]\n */\n\n/**\n * Return an interpolated value from an array\n * @param {Array<number>} a An array of values interpolate\n * @param {number} i A number in the interval [0, 1]\n * @param {interpolationCallback} [f=Math.lerp] The interpolation function to use\n * @return {number} An interpolated value in the interval [min(a), max(a)]\n */\nconst lerpArray = (a, i, f = lerp) => {\n  const s = i * (a.length - 1);\n  const p = clamp(Math.trunc(s), 0, a.length - 1);\n  return f(a[p] || 0, a[p + 1] || 0, frac(s));\n};\n\n/**\n * Get the dot product of two vectors\n * @param {Array<number>} a Vector a\n * @param {Array<number>} b Vector b\n * @return {number} a ∙ b\n */\nconst dot = (a, b) => a.reduce((n, v, i) => n + v * b[i], 0);\n\n/**\n * Get the factorial of a number\n * @param {number} a\n * @return {number} a!\n */\nconst factorial = a => {\n  let result = 1;\n  for (let i = 2; i <= a; i++) {\n    result *= i;\n  }\n  return result;\n};\n\n/**\n * Get the number of permutations of r elements from a set of n elements\n * @param {number} n\n * @param {number} r\n * @return {number} nPr\n */\nconst permutation = (n, r) => factorial(n) / factorial(n - r);\n\n/**\n * Get the number of combinations of r elements from a set of n elements\n * @param {number} n\n * @param {number} r\n * @return {number} nCr\n */\nconst combination = (n, r) => factorial(n) / (factorial(r) * factorial(n - r));\n\n/**\n * A function for generating array values\n * @callback timesCallback\n * @param {number} i The array index\n * @return {*} The array value\n */\n\n/**\n * Return a new array with length n by calling function f(i) on each element\n * @param {timesCallback} f\n * @param {number} n The size of the array\n * @return {Array<*>}\n */\nconst times = (f, n) => Array(n).fill(0).map((_, i) => f(i));\n\n/**\n * Return an array containing numbers 0->(n - 1)\n * @param {number} n The size of the array\n * @return {Array<number>} An array of integers 0->(n - 1)\n */\nconst range = n => times(i => i, n);\n\n/**\n * Zip 2 arrays together, i.e. ([1, 2, 3], [a, b, c]) => [[1, a], [2, b], [3, c]]\n * @param {Array<*>} a\n * @param {Array<*>} b\n * @return {Array<Array<*>>}\n */\nconst zip = (a, b) => a.map((k, i) => [k, b[i]]);\n\n/**\n * Return array[i] with positive and negative wrapping\n * @param {Array<*>} a\n * @param {number} i The positively/negatively wrapped array index\n * @return {*} An element from the array\n */\nconst at = (a, i) => a[i < 0 ? a.length - (Math.abs(i + 1) % a.length) - 1 : i % a.length];\n\n/**\n * Chop an array into chunks of size n\n * @param {Array<*>} a\n * @param {number} n The chunk size\n * @return {Array<Array<*>>} An array of array chunks\n */\nconst chunk = (a, n) => times(i => a.slice(i * n, i * n + n), Math.ceil(a.length / n));\n\n/**\n * Randomly shuffle a shallow copy of an array\n * @param {Array<*>} a\n * @return {Array<*>} The shuffled array\n */\nconst shuffle = a => a.slice().sort(() => Math.random() - 0.5);\n\nif (true) {\n  module.exports = {\n    floatEquals,\n    clamp,\n    frac,\n    lerp,\n    unlerp,\n    blerp,\n    remap,\n    smoothstep,\n    radians,\n    degrees,\n    randomBetween,\n    randomIntBetween,\n    cltRandom,\n    cltRandomInt,\n    weightedRandom,\n    lerpArray,\n    dot,\n    factorial,\n    permutation,\n    combination,\n    times,\n    range,\n    zip,\n    at,\n    chunk,\n    shuffle,\n  };\n}\n\n\n//# sourceURL=webpack://@basementuniverse/input-manager/./node_modules/@basementuniverse/utils/utils.js?");

/***/ }),

/***/ "./node_modules/@basementuniverse/vec/vec.js":
/*!***************************************************!*\
  !*** ./node_modules/@basementuniverse/vec/vec.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { times, chunk, dot } = __webpack_require__(/*! @basementuniverse/utils */ \"./node_modules/@basementuniverse/utils/utils.js\");\n\n/**\n * @overview A library of useful functions\n * @author Gordon Larrigan\n */\n\n/**\n * A 2d vector\n * @typedef {Object} vec\n * @property {number} x The x component of the vector\n * @property {number} y The y component of the vector\n */\n\n/**\n * Create a new vector\n * @param {number|vec} [x] The x component of the vector, or a vector to copy\n * @param {number} [y] The y component of the vector\n * @return {vec} A new vector\n * @example <caption>Various ways to initialise a vector</caption>\n * let a = vec(3, 2);  // (3, 2)\n * let b = vec(4);     // (4, 4)\n * let c = vec(a);     // (3, 2)\n * let d = vec();      // (0, 0)\n */\nconst vec = (x, y) => (!x && !y ?\n  { x: 0, y: 0 } : (typeof x === 'object' ?\n    { x: x.x || 0, y: x.y || 0 } : (y === null || y === undefined ?\n      { x: x, y: x } : { x: x, y: y })\n  )\n);\n\n/**\n * Get the components of a vector as an array\n * @param {vec} a The vector to get components from\n * @return {Array<number>} The vector components as an array\n */\nvec.components = a => [a.x, a.y];\n\n/**\n * Return a unit vector (1, 0)\n * @return {vec} A unit vector (1, 0)\n */\nvec.ux = () => vec(1, 0);\n\n/**\n * Return a unit vector (0, 1)\n * @return {vec} A unit vector (0, 1)\n */\nvec.uy = () => vec(0, 1);\n\n/**\n * Add vectors\n * @param {vec} a Vector a\n * @param {vec} b Vector b\n * @return {vec} a + b\n */\nvec.add = (a, b) => ({ x: a.x + b.x, y: a.y + b.y });\n\n/**\n * Scale a vector\n * @param {vec} a Vector a\n * @param {number} b Scalar b\n * @return {vec} a * b\n */\nvec.mul = (a, b) => ({ x: a.x * b, y: a.y * b });\n\n/**\n * Subtract vectors\n * @param {vec} a Vector a\n * @param {vec} b Vector b\n * @return {vec} a - b\n */\nvec.sub = (a, b) => ({ x: a.x - b.x, y: a.y - b.y });\n\n/**\n * Get the length of a vector\n * @param {vec} a Vector a\n * @return {number} |a|\n */\nvec.len = a => Math.sqrt(a.x * a.x + a.y * a.y);\n\n/**\n * Get the length of a vector using taxicab geometry\n * @param {vec} a Vector a\n * @return {number} |a|\n */\nvec.manhattan = a => Math.abs(a.x) + Math.abs(a.y);\n\n/**\n * Normalise a vector\n * @param {vec} a The vector to normalise\n * @return {vec} ^a\n */\nvec.nor = a => {\n  let len = vec.len(a);\n  return len ? { x: a.x / len, y: a.y / len } : vec();\n};\n\n/**\n * Get a dot product of vectors\n * @param {vec} a Vector a\n * @param {vec} b Vector b\n * @return {number} a ∙ b\n */\nvec.dot = (a, b) => a.x * b.x + a.y * b.y;\n\n/**\n * Rotate a vector by r radians\n * @param {vec} a The vector to rotate\n * @param {number} r The angle to rotate by, measured in radians\n * @return {vec} A rotated vector\n */\nvec.rot = (a, r) => {\n  let s = Math.sin(r),\n    c = Math.cos(r);\n  return { x: c * a.x - s * a.y, y: s * a.x + c * a.y };\n}\n\n/**\n * Check if two vectors are equal\n * @param {vec} a Vector a\n * @param {vec} b Vector b\n * @return {boolean} True if vectors a and b are equal, false otherwise\n */\nvec.eq = (a, b) => a.x === b.x && a.y === b.y;\n\n/**\n * Get the angle of a vector\n * @param {vec} a Vector a\n * @return {number} The angle of vector a in radians\n */\nvec.rad = a => Math.atan2(a.y, a.x);\n\n/**\n * Copy a vector\n * @param {vec} a The vector to copy\n * @return {vec} A copy of vector a\n */\nvec.cpy = a => vec(a);\n\n/**\n * A function to call on each component of a vector\n * @callback vectorMapCallback\n * @param {number} value The component value\n * @param {'x' | 'y'} label The component label (x or y)\n * @return {number} The mapped component\n */\n\n/**\n * Call a function on each component of a vector and build a new vector from the results\n * @param {vec} a Vector a\n * @param {vectorMapCallback} f The function to call on each component of the vector\n * @return {vec} Vector a mapped through f\n */\nvec.map = (a, f) => ({ x: f(a.x, 'x'), y: f(a.y, 'y') });\n\n/**\n * Convert a vector into a string\n * @param {vec} a The vector to convert\n * @param {string} [s=', '] The separator string\n * @return {string} A string representation of the vector\n */\nvec.str = (a, s = ', ') => `${a.x}${s}${a.y}`;\n\n/**\n * A matrix\n * @typedef {Object} mat\n * @property {number} m The number of rows in the matrix\n * @property {number} n The number of columns in the matrix\n * @property {Array<number>} entries The matrix values\n */\n\n/**\n * Create a new matrix\n * @param {number} [m=4] The number of rows\n * @param {number} [n=4] The number of columns\n * @param {Array<number>} [entries=[]] Matrix values in reading order\n * @return {mat} A new matrix\n */\nconst mat = (m = 4, n = 4, entries = []) => ({\n  m, n,\n  entries: entries.concat(Array(m * n).fill(0)).slice(0, m * n)\n});\n\n/**\n * Get an identity matrix of size n\n * @param {number} n The size of the matrix\n * @return {mat} An identity matrix\n */\nmat.identity = n => mat(n, n, Array(n * n).fill(0).map((v, i) => +(Math.floor(i / n) === i % n)));\n\n/**\n * Get an entry from a matrix\n * @param {mat} a Matrix a\n * @param {number} i The row offset\n * @param {number} j The column offset\n * @return {number} The value at position (i, j) in matrix a\n */\nmat.get = (a, i, j) => a.entries[(j - 1) + (i - 1) * a.n];\n\n/**\n * Set an entry of a matrix\n * @param {mat} a Matrix a\n * @param {number} i The row offset\n * @param {number} j The column offset\n * @param {number} v The value to set in matrix a\n */\nmat.set = (a, i, j, v) => { a.entries[(j - 1) + (i - 1) * a.n] = v; };\n\n/**\n * Get a row from a matrix as an array\n * @param {mat} a Matrix a\n * @param {number} m The row offset\n * @return {Array<number>} Row m from matrix a\n */\nmat.row = (a, m) => {\n  const s = (m - 1) * a.n;\n  return a.entries.slice(s, s + a.n);\n};\n\n/**\n * Get a column from a matrix as an array\n * @param {mat} a Matrix a\n * @param {number} n The column offset\n * @return {Array<number>} Column n from matrix a\n */\nmat.col = (a, n) => times(i => mat.get(a, (i + 1), n), a.m);\n\n/**\n * Add matrices\n * @param {mat} a Matrix a\n * @param {mat} b Matrix b\n * @return {mat} a + b\n */\nmat.add = (a, b) => a.m === b.m && a.n === b.n && mat.map(a, (v, i) => v + b.entries[i]);\n\n/**\n * Subtract matrices\n * @param {mat} a Matrix a\n * @param {mat} b Matrix b\n * @return {mat} a - b\n */\nmat.sub = (a, b) => a.m === b.m && a.n === b.n && mat.map(a, (v, i) => v - b.entries[i]);\n\n/**\n * Multiply matrices\n * @param {mat} a Matrix a\n * @param {mat} b Matrix b\n * @return {mat|boolean} ab or false if the matrices cannot be multiplied\n */\nmat.mul = (a, b) => {\n  if (a.n !== b.m) { return false; }\n  const result = mat(a.m, b.n);\n  for (let i = 1; i <= a.m; i++) {\n    for (let j = 1; j <= b.n; j++) {\n      mat.set(result, i, j, dot(mat.row(a, i), mat.col(b, j)));\n    }\n  }\n  return result;\n};\n\n/**\n * Scale a matrix\n * @param {mat} a Matrix a\n * @param {number} b Scalar b\n * @return {mat} a * b\n */\nmat.scale = (a, b) => mat.map(a, v => v * b);\n\n/**\n * Transpose a matrix\n * @param {mat} a The matrix to transpose\n * @return {mat} A transposed matrix\n */\nmat.trans = a => mat(a.n, a.m, times(i => mat.col(a, (i + 1)), a.n).flat());\n\n/**\n * Get the minor of a matrix\n * @param {mat} a Matrix a\n * @param {number} i The row offset\n * @param {number} j The column offset\n * @return {mat|boolean} The (i, j) minor of matrix a or false if the matrix is not square\n */\nmat.minor = (a, i, j) => {\n  if (a.m !== a.n) { return false; }\n  const entries = [];\n  for (let ii = 1; ii <= a.m; ii++) {\n    if (ii === i) { continue; }\n    for (let jj = 1; jj <= a.n; jj++) {\n      if (jj === j) { continue; }\n      entries.push(mat.get(a, ii, jj));\n    }\n  }\n  return mat(a.m - 1, a.n - 1, entries);\n};\n\n/**\n * Get the determinant of a matrix\n * @param {mat} a Matrix a\n * @return {number|boolean} |a| or false if the matrix is not square\n */\nmat.det = a => {\n  if (a.m !== a.n) { return false; }\n  if (a.m === 1) {\n    return a.entries[0];\n  }\n  if (a.m === 2) {\n    return a.entries[0] * a.entries[3] - a.entries[1] * a.entries[2];\n  }\n  let total = 0, sign = 1;\n  for (let j = 1; j <= a.n; j++) {\n    total += sign * a.entries[j - 1] * mat.det(mat.minor(a, 1, j));\n    sign *= -1;\n  }\n  return total;\n};\n\n/**\n * Normalise a matrix\n * @param {mat} a The matrix to normalise\n * @return {mat|boolean} ^a or false if the matrix is not square\n */\nmat.nor = a => {\n  if (a.m !== a.n) { return false; }\n  const d = mat.det(a);\n  return mat.map(a, i => i * d);\n};\n\n/**\n * Get the adjugate of a matrix\n * @param {mat} a The matrix from which to get the adjugate\n * @return {mat} The adjugate of a\n */\nmat.adj = a => {\n  const minors = mat(a.m, a.n);\n  for (let i = 1; i <= a.m; i++) {\n    for (let j = 1; j <= a.n; j++) {\n      mat.set(minors, i, j, mat.det(mat.minor(a, i, j)));\n    }\n  }\n  const cofactors = mat.map(minors, (v, i) => v * (i % 2 ? -1 : 1));\n  return mat.trans(cofactors);\n};\n\n/**\n * Get the inverse of a matrix\n * @param {mat} a The matrix to invert\n * @return {mat|boolean} a^-1 or false if the matrix has no inverse\n */\nmat.inv = a => {\n  if (a.m !== a.n) { return false; }\n  const d = mat.det(a);\n  if (d === 0) { return false; }\n  return mat.scale(mat.adj(a), 1 / d);\n};\n\n/**\n * Check if two matrices are equal\n * @param {mat} a Matrix a\n * @param {mat} b Matrix b\n * @return {boolean} True if matrices a and b are identical, false otherwise\n */\nmat.eq = (a, b) => a.m === b.m && a.n === b.n && mat.str(a) === mat.str(b);\n\n/**\n * Copy a matrix\n * @param {mat} a The matrix to copy\n * @return {mat} A copy of matrix a\n */\nmat.cpy = a => mat(a.m, a.n, [...a.entries]);\n\n/**\n * A function to call on each entry of a matrix\n * @callback matrixMapCallback\n * @param {number} value The entry value\n * @param {number} index The entry index\n * @param {Array<number>} entries The array of matrix entries\n * @return {number} The mapped entry\n */\n\n/**\n * Call a function on each entry of a matrix and build a new matrix from the results\n * @param {mat} a Matrix a\n * @param {matrixMapCallback} f The function to call on each entry of the matrix\n * @return {mat} Matrix a mapped through f\n */\nmat.map = (a, f) => mat(a.m, a.n, a.entries.map(f));\n\n/**\n * Convert a matrix into a string\n * @param {mat} a The matrix to convert\n * @param {string} [ms=', '] The separator string for columns\n * @param {string} [ns='\\n'] The separator string for rows\n * @return {string} A string representation of the matrix\n */\nmat.str = (a, ms = ', ', ns = '\\n') => chunk(a.entries, a.n).map(r => r.join(ms)).join(ns);\n\nif (true) {\n  module.exports = { vec, mat };\n}\n\n\n//# sourceURL=webpack://@basementuniverse/input-manager/./node_modules/@basementuniverse/vec/vec.js?");

/***/ }),

/***/ "./index.ts":
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst vec_1 = __webpack_require__(/*! @basementuniverse/vec */ \"./node_modules/@basementuniverse/vec/vec.js\");\nclass InputManager {\n    constructor(options) {\n        this.keyboardState = {};\n        this.previousKeyboardState = {};\n        this.mouseState = { button: false, position: (0, vec_1.vec)(), wheel: 0 };\n        this.previousMouseState = { button: false, position: (0, vec_1.vec)(), wheel: 0 };\n        this.options = Object.assign({}, InputManager.defaultOptions, options !== null && options !== void 0 ? options : {});\n        // Set up event handlers\n        if (this.options.mouse) {\n            window.addEventListener('mousedown', () => {\n                this.mouseState.button = true;\n            });\n            window.addEventListener('mouseup', () => {\n                this.mouseState.button = false;\n            });\n            window.addEventListener('touchstart', () => {\n                this.mouseState.button = true;\n            });\n            window.addEventListener('touchend', () => {\n                this.mouseState.button = false;\n            });\n            window.addEventListener('mousemove', e => {\n                this.mouseState.position.x = e.offsetX;\n                this.mouseState.position.y = e.offsetY;\n            });\n            if (this.options.mouseWheel) {\n                window.addEventListener('wheel', e => {\n                    this.mouseState.wheel = e.deltaY > 0 ? 1 : -1;\n                });\n            }\n        }\n        if (this.options.keyboard) {\n            window.addEventListener('keydown', e => {\n                this.keyboardState[e.code] = true;\n            });\n            window.addEventListener('keyup', e => {\n                this.keyboardState[e.code] = false;\n            });\n        }\n    }\n    /**\n     * Initialise the input manager for managing mouse and keyboard input\n     */\n    static initialise(options) {\n        if (InputManager.instance !== undefined) {\n            throw new Error('Input manager already initialised');\n        }\n        InputManager.instance = new InputManager(options);\n    }\n    static getInstance() {\n        if (InputManager.instance === undefined) {\n            throw new Error('Input manager not properly initialised');\n        }\n        return InputManager.instance;\n    }\n    /**\n     * Update the state of the input devices\n     */\n    static update() {\n        const instance = InputManager.getInstance();\n        instance.previousKeyboardState = Object.assign({}, instance.keyboardState);\n        instance.previousMouseState = {\n            ...instance.mouseState,\n            position: vec_1.vec.cpy(instance.mouseState.position),\n        };\n        instance.mouseState.wheel = 0;\n    }\n    /**\n     * Check if a key is currently pressed down\n     */\n    static keyDown(code) {\n        const instance = InputManager.getInstance();\n        // Check if any key is down\n        if (!code) {\n            for (const k in instance.keyboardState) {\n                if (instance.keyboardState[k]) {\n                    return true;\n                }\n            }\n            return false;\n        }\n        return !!instance.keyboardState[code];\n    }\n    /**\n     * Check if a key has been pressed since the last frame\n     */\n    static keyPressed(code) {\n        const instance = InputManager.getInstance();\n        // Check if any key was pressed\n        if (!code) {\n            for (const k in instance.keyboardState) {\n                if (instance.keyboardState[k] &&\n                    (!(k in instance.previousKeyboardState) ||\n                        !instance.previousKeyboardState[k])) {\n                    return true;\n                }\n            }\n            return false;\n        }\n        return !!instance.keyboardState[code] && !instance.previousKeyboardState[code];\n    }\n    /**\n     * Check if a key has been released since the last frame\n     */\n    static keyReleased(code) {\n        const instance = InputManager.getInstance();\n        // Check if any key was released\n        if (!code) {\n            for (const k in instance.keyboardState) {\n                if (!instance.keyboardState[k] &&\n                    !!instance.previousKeyboardState[k]) {\n                    return true;\n                }\n            }\n            return false;\n        }\n        return !instance.keyboardState[code] && !!instance.previousKeyboardState[code];\n    }\n    /**\n     * Check if a mouse button is currently pressed down\n     */\n    static mouseDown() {\n        const instance = InputManager.getInstance();\n        return !!instance.mouseState.button;\n    }\n    /**\n     * Check if a mouse button has been pressed since the last frame\n     */\n    static mousePressed() {\n        const instance = InputManager.getInstance();\n        return !!instance.mouseState.button && !instance.previousMouseState.button;\n    }\n    /**\n     * Check if a mouse button has been released since the last frame\n     */\n    static mouseReleased() {\n        const instance = InputManager.getInstance();\n        return !instance.mouseState.button && !!instance.previousMouseState.button;\n    }\n    /**\n     * Check if the mousewheel is scrolling up\n     */\n    static mouseWheelUp() {\n        const instance = InputManager.getInstance();\n        return instance.mouseState.wheel > 0;\n    }\n    /**\n     * Check if the mousewheel is scrolling down\n     */\n    static mouseWheelDown() {\n        const instance = InputManager.getInstance();\n        return instance.mouseState.wheel < 0;\n    }\n    /**\n     * Get the current mouse position in screen-space\n     */\n    static get mousePosition() {\n        const instance = InputManager.getInstance();\n        return instance.mouseState.position;\n    }\n}\nexports[\"default\"] = InputManager;\nInputManager.defaultOptions = {\n    mouse: true,\n    mouseWheel: true,\n    keyboard: true,\n};\n\n\n//# sourceURL=webpack://@basementuniverse/input-manager/./index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nested_webpack_require_27635__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __nested_webpack_require_27635__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __nested_webpack_exports__ = __nested_webpack_require_27635__("./index.ts");
/******/ 	
/******/ 	return __nested_webpack_exports__;
/******/ })()
;
});

/***/ }),

/***/ "./node_modules/@basementuniverse/parsecolor/parsecolor.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@basementuniverse/parsecolor/parsecolor.js ***!
  \*****************************************************************/
/***/ ((module) => {

/*

Parse a valid CSS color string into an object like: { r, g, b, a }
Properties will have the correct interval and precision.
Valid input examples:

red
#f00
#ff0000
#ff0000ff
rgb(255, 0, 0)
rgb(100%, 0%, 0%)
rgba(255, 0, 0, 1)
rgba(100%, 0%, 0%, 1)
hsl(0, 100%, 50%)
hsla(0, 100%, 50%, 1)

*/
const parseColor = (function() {
	const names = {
		"aliceblue": "f0f8ff",
		"antiquewhite": "faebd7",
		"aqua": "0ff",
		"aquamarine": "7fffd4",
		"azure": "f0ffff",
		"beige": "f5f5dc",
		"bisque": "ffe4c4",
		"black": "000",
		"blanchedalmond": "ffebcd",
		"blue": "00f",
		"blueviolet": "8a2be2",
		"brown": "a52a2a",
		"burlywood": "deb887",
		"cadetblue": "5f9ea0",
		"chartreuse": "7fff00",
		"chocolate": "d2691e",
		"coral": "ff7f50",
		"cornflowerblue": "6495ed",
		"cornsilk": "fff8dc",
		"crimson": "dc143c",
		"cyan": "0ff",
		"darkblue": "00008b",
		"darkcyan": "008b8b",
		"darkgoldenrod": "b8860b",
		"darkgray": "a9a9a9",
		"darkgreen": "006400",
		"darkgrey": "a9a9a9",
		"darkkhaki": "bdb76b",
		"darkmagenta": "8b008b",
		"darkolivegreen": "556b2f",
		"darkorange": "ff8c00",
		"darkorchid": "9932cc",
		"darkred": "8b0000",
		"darksalmon": "e9967a",
		"darkseagreen": "8fbc8f",
		"darkslateblue": "483d8b",
		"darkslategray": "2f4f4f",
		"darkslategrey": "2f4f4f",
		"darkturquoise": "00ced1",
		"darkviolet": "9400d3",
		"deeppink": "ff1493",
		"deepskyblue": "00bfff",
		"dimgray": "696969",
		"dimgrey": "696969",
		"dodgerblue": "1e90ff",
		"firebrick": "b22222",
		"floralwhite": "fffaf0",
		"forestgreen": "228b22",
		"fuchsia": "f0f",
		"gainsboro": "dcdcdc",
		"ghostwhite": "f8f8ff",
		"gold": "ffd700",
		"goldenrod": "daa520",
		"gray": "808080",
		"green": "008000",
		"greenyellow": "adff2f",
		"grey": "808080",
		"honeydew": "f0fff0",
		"hotpink": "ff69b4",
		"indianred": "cd5c5c",
		"indigo": "4b0082",
		"ivory": "fffff0",
		"khaki": "f0e68c",
		"lavender": "e6e6fa",
		"lavenderblush": "fff0f5",
		"lawngreen": "7cfc00",
		"lemonchiffon": "fffacd",
		"lightblue": "add8e6",
		"lightcoral": "f08080",
		"lightcyan": "e0ffff",
		"lightgoldenrodyellow": "fafad2",
		"lightgray": "d3d3d3",
		"lightgreen": "90ee90",
		"lightgrey": "d3d3d3",
		"lightpink": "ffb6c1",
		"lightsalmon": "ffa07a",
		"lightseagreen": "20b2aa",
		"lightskyblue": "87cefa",
		"lightslategray": "789",
		"lightslategrey": "789",
		"lightsteelblue": "b0c4de",
		"lightyellow": "ffffe0",
		"lime": "0f0",
		"limegreen": "32cd32",
		"linen": "faf0e6",
		"magenta": "f0f",
		"maroon": "800000",
		"mediumaquamarine": "66cdaa",
		"mediumblue": "0000cd",
		"mediumorchid": "ba55d3",
		"mediumpurple": "9370db",
		"mediumseagreen": "3cb371",
		"mediumslateblue": "7b68ee",
		"mediumspringgreen": "00fa9a",
		"mediumturquoise": "48d1cc",
		"mediumvioletred": "c71585",
		"midnightblue": "191970",
		"mintcream": "f5fffa",
		"mistyrose": "ffe4e1",
		"moccasin": "ffe4b5",
		"navajowhite": "ffdead",
		"navy": "000080",
		"oldlace": "fdf5e6",
		"olive": "808000",
		"olivedrab": "6b8e23",
		"orange": "ffa500",
		"orangered": "ff4500",
		"orchid": "da70d6",
		"palegoldenrod": "eee8aa",
		"palegreen": "98fb98",
		"paleturquoise": "afeeee",
		"palevioletred": "db7093",
		"papayawhip": "ffefd5",
		"peachpuff": "ffdab9",
		"peru": "cd853f",
		"pink": "ffc0cb",
		"plum": "dda0dd",
		"powderblue": "b0e0e6",
		"purple": "800080",
		"rebeccapurple": "639",
		"red": "f00",
		"rosybrown": "bc8f8f",
		"royalblue": "4169e1",
		"saddlebrown": "8b4513",
		"salmon": "fa8072",
		"sandybrown": "f4a460",
		"seagreen": "2e8b57",
		"seashell": "fff5ee",
		"sienna": "a0522d",
		"silver": "c0c0c0",
		"skyblue": "87ceeb",
		"slateblue": "6a5acd",
		"slategray": "708090",
		"slategrey": "708090",
		"snow": "fffafa",
		"springgreen": "00ff7f",
		"steelblue": "4682b4",
		"tan": "d2b48c",
		"teal": "008080",
		"thistle": "d8bfd8",
		"tomato": "ff6347",
		"turquoise": "40e0d0",
		"violet": "ee82ee",
		"wheat": "f5deb3",
		"white": "fff",
		"whitesmoke": "f5f5f5",
		"yellow": "ff0",
		"yellowgreen": "9acd32",
		"transparent": "00000000"
	};
	
	const clamp = (n, a, b) => n < a ? a : (n > b ? b : n),	// Clamp n in interval [a, b]
		round = (n, d) => {	// Round n to nearest integer, or to d decimal places (if d is defined)
			var p = Math.pow(10, d || 0);
			return Math.round(n * p) / p;
		},
		hi = n => clamp(parseInt(n, 16), 0, 255),	// Convert 2-digit hex to int in interval [0, 255]
		hf = n => clamp(round(parseInt(n, 16) / 255, 2), 0, 1),	// Convert 2-digit hex to float with 2 decimal places in interval [0, 1]
		si = n => clamp(round(parseFloat(n)), 0, 255),	// Convert string to int in interval [0, 255]
		sf = n => clamp(round(parseFloat(n), 2), 0, 1),	// Convert string to float with 2 decimal places in interval [0, 1]
		pi = n => clamp(round(parseFloat(n) / 100 * 255), 0, 255),	// Convert percentage string to int in interval [0, 255]
		uf = n => clamp(parseFloat(n) / 360, 0, 1),	// Convert hue string to float in interval [0, 1]
		pf = n => clamp(parseFloat(n) / 100, 0, 1);	// Convert percentage string to float in interval [0, 1]
	
	// Convert hsl to rgb, alpha value gets passed straight through
	// h, s, l values are assumed to be in interval [0, 1]
	// Returns an object like { r, g, b, a }
	// http://axonflux.com/handy-rgb-to-hsl-and-rgb-to-hsv-color-model-c
	function hslToRgb(h, s, l, a) {
		var r, g, b,
			hue = function(p, q, t) {
				if (t < 0) { t += 1; }
				if (t > 1) { t -= 1; }
				if (t < 1 / 6) { return p + (q - p) * 6 * t };
				if (t < 1 / 2) { return q; }
				if (t < 2 / 3) { return p + (q - p) * (2 / 3 - t) * 6 };
				return p;
			};
		if (s == 0) {
			r = g = b = l;
		} else {
			var q = l < 0.5 ? l * (1 + s) : l + s - l * s,
				p = 2 * l - q;
			r = hue(p, q, h + 1 / 3);
			g = hue(p, q, h);
			b = hue(p, q, h - 1 / 3);
		}
		return { r: round(r * 255), g: round(g * 255), b: round(b * 255), a: a };
	}
	return function(c) {
		var o = { r: 0, g: 0, b: 0, a: 0 }, m = null;
		if (typeof c == "string") {
			if (c in names) { c = "#" + names[c]; }
			if ((m = c.match(/#([a-f0-9])([a-f0-9])([a-f0-9])$/i)) !== null) {
				o = { r: hi(m[1] + m[1]), g: hi(m[2] + m[2]), b: hi(m[3] + m[3]), a: 1 };
			} else if ((m = c.match(/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})$/i)) !== null) {
				o = { r: hi(m[1]), g: hi(m[2]), b: hi(m[3]), a: 1 };
			} else if ((m = c.match(/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})$/i)) !== null) {
				o = { r: hi(m[1]), g: hi(m[2]), b: hi(m[3]), a: hf(m[4]) };
			} else if ((m = c.match(/rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)/)) !== null) {
				o = { r: si(m[1]), g: si(m[2]), b: si(m[3]), a: 1 };
			} else if ((m = c.match(/rgb\(\s*(\d{1,3}\.?\d?%)\s*,\s*(\d{1,3}\.?\d?%)\s*,\s*(\d{1,3}\.?\d?%)\s*\)/)) !== null) {
				o = { r: pi(m[1]), g: pi(m[2]), b: pi(m[3]), a: 1 };
			} else if ((m = c.match(/rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d?\.?\d*?)?\s*\)/)) !== null) {
				o = { r: si(m[1]), g: si(m[2]), b: si(m[3]), a: sf(m[4]) };
			} else if ((m = c.match(/rgba\(\s*(\d{1,3}\.?\d?%)\s*,\s*(\d{1,3}\.?\d?%)\s*,\s*(\d{1,3}\.?\d?%)\s*,\s*(\d?\.?\d*?)?\s*\)/)) !== null) {
				o = { r: pi(m[1]), g: pi(m[2]), b: pi(m[3]), a: sf(m[4]) };
			} else if ((m = c.match(/hsl\(\s*(\d{1,3}\.?\d?)\s*,\s*(\d{1,3}\.?\d?%)\s*,\s*(\d{1,3}\.?\d?%)\s*\)/)) !== null) {
				o = hslToRgb(uf(m[1]), pf(m[2]), pf(m[3]), 1);
			} else if ((m = c.match(/hsla\(\s*(\d{1,3}\.?\d?)\s*,\s*(\d{1,3}\.?\d?%)\s*,\s*(\d{1,3}\.?\d?%)\s*,\s*(\d?\.?\d*?)?\s*\)/)) !== null) {
				o = hslToRgb(uf(m[1]), pf(m[2]), pf(m[3]), sf(m[4]));
			}
		} else if (typeof c == "object") {
			if (c.r !== undefined && c.g != undefined && c.b !== undefined) {
				o = { r: si(c.r), g: si(c.g), b: si(c.b), a: sf(c.a || 1) };
			} else if (c.h !== undefined && c.s !== undefined && c.l !== undefined) {
				o = hslToRgb(uf(c.h), pf(c.s), pf(c.l), sf(c.a || 1));
			}
		}
		return o;
	};
}());

if (true) {
  module.exports = { parseColor };
}


/***/ }),

/***/ "./node_modules/@basementuniverse/utils/utils.js":
/*!*******************************************************!*\
  !*** ./node_modules/@basementuniverse/utils/utils.js ***!
  \*******************************************************/
/***/ ((module) => {

/**
 * @overview A library of useful functions
 * @author Gordon Larrigan
 */

/**
 * Check if two numbers are approximately equal
 * @param {number} a Number a
 * @param {number} b Number b
 * @param {number} [p=Number.EPSILON] The precision value
 * @return {boolean} True if numbers a and b are approximately equal
 */
const floatEquals = (a, b, p = Number.EPSILON) => Math.abs(a - b) < p;

/**
 * Clamp a number between min and max
 * @param {number} a The number to clamp
 * @param {number} [min=0] The minimum value
 * @param {number} [max=1] The maximum value
 * @return {number} A clamped number
 */
const clamp = (a, min = 0, max = 1) => a < min ? min : (a > max ? max : a);

/**
 * Get the fractional part of a number
 * @param {number} a The number from which to get the fractional part
 * @return {number} The fractional part of the number
 */
const frac = a => a >= 0 ? a - Math.floor(a) : a - Math.ceil(a);

/**
 * Round n to d decimal places
 * @param {number} n The number to round
 * @param {number} [d=0] The number of decimal places to round to
 * @return {number} A rounded number
 */
const round = (n, d = 0) => {
  const p = Math.pow(10, d);
  return Math.round(n * p + Number.EPSILON) / p;
}

/**
 * Do a linear interpolation between a and b
 * @param {number} a The minimum number
 * @param {number} b The maximum number
 * @param {number} i The interpolation value, should be in the interval [0, 1]
 * @return {number} An interpolated value in the interval [a, b]
 */
const lerp = (a, b, i) => a + (b - a) * i;

/**
 * Get the position of i between a and b
 * @param {number} a The minimum number
 * @param {number} b The maximum number
 * @param {number} i The interpolated value in the interval [a, b]
 * @return {number} The position of i between a and b
 */
const unlerp = (a, b, i) => (i - a) / (b - a);

/**
 * Do a bilinear interpolation
 * @param {number} c00 Top-left value
 * @param {number} c10 Top-right value
 * @param {number} c01 Bottom-left value
 * @param {number} c11 Bottom-right value
 * @param {number} ix Interpolation value along x
 * @param {number} iy Interpolation value along y
 * @return {number} A bilinear interpolated value
 */
const blerp = (c00, c10, c01, c11, ix, iy) => lerp(lerp(c00, c10, ix), lerp(c01, c11, ix), iy);

/**
 * Re-map a number i from range a1...a2 to b1...b2
 * @param {number} i The number to re-map
 * @param {number} a1
 * @param {number} a2
 * @param {number} b1
 * @param {number} b2
 * @return {number}
 */
const remap = (i, a1, a2, b1, b2) => b1 + (i - a1) * (b2 - b1) / (a2 - a1);

/**
 * Do a smooth interpolation between a and b
 * @param {number} a The minimum number
 * @param {number} b The maximum number
 * @param {number} i The interpolation value
 * @return {number} An interpolated value in the interval [a, b]
 */
const smoothstep = (a, b, i) => lerp(a, b, 3 * Math.pow(i, 2) - 2 * Math.pow(i, 3));

/**
 * Get an angle in radians
 * @param {number} degrees The angle in degrees
 * @return {number} The angle in radians
 */
const radians = degrees => (Math.PI / 180) * degrees;

/**
 * Get an angle in degrees
 * @param {number} radians The angle in radians
 * @return {number} The angle in degrees
 */
const degrees = radians => (180 / Math.PI) * radians;

/**
 * Get a random float in the interval [min, max)
 * @param {number} min Inclusive min
 * @param {number} max Exclusive max
 * @return {number} A random float in the interval [min, max)
 */
const randomBetween = (min, max) => Math.random() * (max - min) + min;

/**
 * Get a random integer in the interval [min, max]
 * @param {number} min Inclusive min
 * @param {number} max Inclusive max
 * @return {number} A random integer in the interval [min, max]
 */
const randomIntBetween = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

/**
 * Get a normally-distributed random number
 * @param {number} [mu=0.5] The mean value
 * @param {number} [sigma=0.5] The standard deviation
 * @param {number} [samples=2] The number of samples
 * @return {number} A normally-distributed random number
 */
const cltRandom = (mu = 0.5, sigma = 0.5, samples = 2) => {
  let total = 0;
  for (let i = samples; i--;) {
    total += Math.random();
  }
  return mu + (total - samples / 2) / (samples / 2) * sigma;
};

/**
 * Get a normally-distributed random integer in the interval [min, max]
 * @param {number} min Inclusive min
 * @param {number} max Inclusive max
 * @return {number} A normally-distributed random integer
 */
const cltRandomInt = (min, max) => Math.floor(min + cltRandom(0.5, 0.5, 2) * (max + 1 - min));

/**
 * Return a weighted random integer
 * @param {Array<number>} w An array of weights
 * @return {number} An index from w
 */
const weightedRandom = w => {
  let total = w.reduce((a, i) => a + i, 0), n = 0;
  const r = Math.random() * total;
  while (total > r) {
    total -= w[n++];
  }
  return n - 1;
};

/**
 * An interpolation function
 * @callback InterpolationFunction
 * @param {number} a The minimum number
 * @param {number} b The maximum number
 * @param {number} i The interpolation value, should be in the interval [0, 1]
 * @return {number} The interpolated value in the interval [a, b]
 */

/**
 * Return an interpolated value from an array
 * @param {Array<number>} a An array of values interpolate
 * @param {number} i A number in the interval [0, 1]
 * @param {InterpolationFunction} [f=Math.lerp] The interpolation function to use
 * @return {number} An interpolated value in the interval [min(a), max(a)]
 */
const lerpArray = (a, i, f = lerp) => {
  const s = i * (a.length - 1);
  const p = clamp(Math.trunc(s), 0, a.length - 1);
  return f(a[p] || 0, a[p + 1] || 0, frac(s));
};

/**
 * Get the dot product of two vectors
 * @param {Array<number>} a Vector a
 * @param {Array<number>} b Vector b
 * @return {number} a ∙ b
 */
const dot = (a, b) => a.reduce((n, v, i) => n + v * b[i], 0);

/**
 * Get the factorial of a number
 * @param {number} a
 * @return {number} a!
 */
const factorial = a => {
  let result = 1;
  for (let i = 2; i <= a; i++) {
    result *= i;
  }
  return result;
};

/**
 * Get the number of permutations of r elements from a set of n elements
 * @param {number} n
 * @param {number} r
 * @return {number} nPr
 */
const npr = (n, r) => factorial(n) / factorial(n - r);

/**
 * Get the number of combinations of r elements from a set of n elements
 * @param {number} n
 * @param {number} r
 * @return {number} nCr
 */
const ncr = (n, r) => factorial(n) / (factorial(r) * factorial(n - r));

/**
 * Generate all combinations of r elements from an array
 *
 * @example
 * ```js
 * combinations([1, 2, 3], 2);
 * ```
 *
 * Output:
 * ```json
 * [
 *   [1, 2],
 *   [1, 3],
 *   [2, 3]
 * ]
 * ```
 * @param {Array<*>} a
 * @param {number} r The number of elements to choose in each combination
 * @return {Array<Array<*>>} An array of combination arrays
 */
const combinations = (a, r) => {
  if (r === 1) {
    return a.map(item => [item]);
  }

  return a.reduce(
    (acc, item, i) => [
      ...acc,
      ...combinations(a.slice(i + 1), r - 1).map(c => [item, ...c]),
    ],
    []
  );
};

/**
 * Get a cartesian product of arrays
 *
 * @example
 * ```js
 * cartesian([1, 2, 3], ['a', 'b']);
 * ```
 *
 * Output:
 * ```json
 * [
 *   [1, "a"],
 *   [1, "b"],
 *   [2, "a"],
 *   [2, "b"],
 *   [3, "a"],
 *   [3, "b"]
 * ]
 * ```
 */
const cartesian = (...arr) =>
  arr.reduce(
    (a, b) => a.flatMap(c => b.map(d => [...c, d])),
    [[]]
  );

/**
 * A function for generating array values
 * @callback TimesFunction
 * @param {number} i The array index
 * @return {*} The array value
 */

/**
 * Return a new array with length n by calling function f(i) on each element
 * @param {TimesFunction} f
 * @param {number} n The size of the array
 * @return {Array<*>}
 */
const times = (f, n) => Array(n).fill(0).map((_, i) => f(i));

/**
 * Return an array containing numbers 0->(n - 1)
 * @param {number} n The size of the array
 * @return {Array<number>} An array of integers 0->(n - 1)
 */
const range = n => times(i => i, n);

/**
 * Zip 2 arrays together, i.e. ([1, 2, 3], [a, b, c]) => [[1, a], [2, b], [3, c]]
 * @param {Array<*>} a
 * @param {Array<*>} b
 * @return {Array<Array<*>>}
 */
const zip = (a, b) => a.map((k, i) => [k, b[i]]);

/**
 * Return array[i] with positive and negative wrapping
 * @param {Array<*>} a
 * @param {number} i The positively/negatively wrapped array index
 * @return {*} An element from the array
 */
const at = (a, i) => a[i < 0 ? a.length - (Math.abs(i + 1) % a.length) - 1 : i % a.length];

/**
 * Return the last element of an array without removing it
 * @param {Array<*>} a
 * @return {*} The last element from the array
 */
const peek = (a) => {
  if (!a.length) {
    return undefined;
  }

  return a[a.length - 1];
};

/**
 * Chop an array into chunks of size n
 * @param {Array<*>} a
 * @param {number} n The chunk size
 * @return {Array<Array<*>>} An array of array chunks
 */
const chunk = (a, n) => times(i => a.slice(i * n, i * n + n), Math.ceil(a.length / n));

/**
 * Randomly shuffle a shallow copy of an array
 * @param {Array<*>} a
 * @return {Array<*>} The shuffled array
 */
const shuffle = a => a.slice().sort(() => Math.random() - 0.5);

/**
 * Flatten an object
 * @param {object} o
 * @param {string} concatenator The string to use for concatenating keys
 * @return {object} A flattened object
 */
const flat = (o, concatenator = '.') => {
  return Object.keys(o).reduce((acc, key) => {
    if (o[key] instanceof Date) {
      return {
        ...acc,
        [key]: o[key].toISOString(),
      };
    }

    if (typeof o[key] !== 'object' || !o[key]) {
      return {
        ...acc,
        [key]: o[key],
      };
    }
    const flattened = flat(o[key], concatenator);

    return {
      ...acc,
      ...Object.keys(flattened).reduce(
        (childAcc, childKey) => ({
          ...childAcc,
          [`${key}${concatenator}${childKey}`]: flattened[childKey],
        }),
        {}
      ),
    };
  }, {});
};

/**
 * Unflatten an object
 * @param {object} o
 * @param {string} concatenator The string to check for in concatenated keys
 * @return {object} An un-flattened object
 */
const unflat = (o, concatenator = '.') => {
  let result = {}, temp, substrings, property, i;

  for (property in o) {
    substrings = property.split(concatenator);
    temp = result;
    for (i = 0; i < substrings.length - 1; i++) {
      if (!(substrings[i] in temp)) {
        if (isFinite(substrings[i + 1])) {
          temp[substrings[i]] = [];
        } else {
          temp[substrings[i]] = {};
        }
      }
      temp = temp[substrings[i]];
    }
    temp[substrings[substrings.length - 1]] = o[property];
  }

  return result;
};

/**
 * A split predicate
 * @callback SplitPredicate
 * @param {any} value The current value
 * @return {boolean} True if the array should split at this index
 */

/**
 * Split an array into sub-arrays based on a predicate
 * @param {Array<*>} array
 * @param {SplitPredicate} predicate
 * @return {Array<Array<*>>} An array of arrays
 */
const split = (array, predicate) => {
  const result = [];
  let current = [];
  for (const value of array) {
    if (predicate(value)) {
      if (current.length) {
        result.push(current);
      }
      current = [value];
    } else {
      current.push(value);
    }
  }
  result.push(current);

  return result;
};

/**
 * Pluck keys from an object
 * @param {object} o
 * @param {...string} keys The keys to pluck from the object
 * @return {object} An object containing the plucked keys
 */
const pluck = (o, ...keys) => {
  return keys.reduce(
    (result, key) => Object.assign(result, { [key]: o[key] }),
    {}
  );
};

/**
 * Exclude keys from an object
 * @param {object} o
 * @param {...string} keys The keys to exclude from the object
 * @return {object} An object containing all keys except excluded keys
 */
const exclude = (o, ...keys) => {
  return Object.fromEntries(
    Object.entries(o).filter(([key]) => !keys.includes(key))
  );
};

if (true) {
  module.exports = {
    floatEquals,
    clamp,
    frac,
    round,
    lerp,
    unlerp,
    blerp,
    remap,
    smoothstep,
    radians,
    degrees,
    randomBetween,
    randomIntBetween,
    cltRandom,
    cltRandomInt,
    weightedRandom,
    lerpArray,
    dot,
    factorial,
    npr,
    ncr,
    combinations,
    cartesian,
    times,
    range,
    zip,
    at,
    peek,
    chunk,
    shuffle,
    flat,
    unflat,
    split,
    pluck,
    exclude,
  };
}


/***/ }),

/***/ "./node_modules/@basementuniverse/vec/vec.js":
/*!***************************************************!*\
  !*** ./node_modules/@basementuniverse/vec/vec.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const { times, chunk, dot } = __webpack_require__(/*! @basementuniverse/utils */ "./node_modules/@basementuniverse/utils/utils.js");

/**
 * @overview A small vector and matrix library
 * @author Gordon Larrigan
 */

/**
 * A 2d vector
 * @typedef {Object} vec
 * @property {number} x The x component of the vector
 * @property {number} y The y component of the vector
 */

/**
 * Create a new vector
 * @param {number|vec} [x] The x component of the vector, or a vector to copy
 * @param {number} [y] The y component of the vector
 * @return {vec} A new vector
 * @example <caption>Various ways to initialise a vector</caption>
 * let a = vec(3, 2);  // (3, 2)
 * let b = vec(4);     // (4, 4)
 * let c = vec(a);     // (3, 2)
 * let d = vec();      // (0, 0)
 */
const vec = (x, y) => (!x && !y ?
  { x: 0, y: 0 } : (typeof x === 'object' ?
    { x: x.x || 0, y: x.y || 0 } : (y === null || y === undefined ?
      { x: x, y: x } : { x: x, y: y })
  )
);

/**
 * Get the components of a vector as an array
 * @param {vec} a The vector to get components from
 * @return {Array<number>} The vector components as an array
 */
vec.components = a => [a.x, a.y];

/**
 * Return a unit vector (1, 0)
 * @return {vec} A unit vector (1, 0)
 */
vec.ux = () => vec(1, 0);

/**
 * Return a unit vector (0, 1)
 * @return {vec} A unit vector (0, 1)
 */
vec.uy = () => vec(0, 1);

/**
 * Add vectors
 * @param {vec} a Vector a
 * @param {vec} b Vector b
 * @return {vec} a + b
 */
vec.add = (a, b) => ({ x: a.x + b.x, y: a.y + b.y });

/**
 * Scale a vector
 * @param {vec} a Vector a
 * @param {number} b Scalar b
 * @return {vec} a * b
 */
vec.mul = (a, b) => ({ x: a.x * b, y: a.y * b });

/**
 * Subtract vectors
 * @param {vec} a Vector a
 * @param {vec} b Vector b
 * @return {vec} a - b
 */
vec.sub = (a, b) => ({ x: a.x - b.x, y: a.y - b.y });

/**
 * Get the length of a vector
 * @param {vec} a Vector a
 * @return {number} |a|
 */
vec.len = a => Math.sqrt(a.x * a.x + a.y * a.y);

/**
 * Get the length of a vector using taxicab geometry
 * @param {vec} a Vector a
 * @return {number} |a|
 */
vec.manhattan = a => Math.abs(a.x) + Math.abs(a.y);

/**
 * Normalise a vector
 * @param {vec} a The vector to normalise
 * @return {vec} ^a
 */
vec.nor = a => {
  let len = vec.len(a);
  return len ? { x: a.x / len, y: a.y / len } : vec();
};

/**
 * Get a dot product of vectors
 * @param {vec} a Vector a
 * @param {vec} b Vector b
 * @return {number} a ∙ b
 */
vec.dot = (a, b) => a.x * b.x + a.y * b.y;

/**
 * Rotate a vector by r radians
 * @param {vec} a The vector to rotate
 * @param {number} r The angle to rotate by, measured in radians
 * @return {vec} A rotated vector
 */
vec.rot = (a, r) => {
  let s = Math.sin(r),
    c = Math.cos(r);
  return { x: c * a.x - s * a.y, y: s * a.x + c * a.y };
}

/**
 * Check if two vectors are equal
 * @param {vec} a Vector a
 * @param {vec} b Vector b
 * @return {boolean} True if vectors a and b are equal, false otherwise
 */
vec.eq = (a, b) => a.x === b.x && a.y === b.y;

/**
 * Get the angle of a vector
 * @param {vec} a Vector a
 * @return {number} The angle of vector a in radians
 */
vec.rad = a => Math.atan2(a.y, a.x);

/**
 * Copy a vector
 * @param {vec} a The vector to copy
 * @return {vec} A copy of vector a
 */
vec.cpy = a => vec(a);

/**
 * A function to call on each component of a vector
 * @callback vectorMapCallback
 * @param {number} value The component value
 * @param {'x' | 'y'} label The component label (x or y)
 * @return {number} The mapped component
 */

/**
 * Call a function on each component of a vector and build a new vector from the results
 * @param {vec} a Vector a
 * @param {vectorMapCallback} f The function to call on each component of the vector
 * @return {vec} Vector a mapped through f
 */
vec.map = (a, f) => ({ x: f(a.x, 'x'), y: f(a.y, 'y') });

/**
 * Convert a vector into a string
 * @param {vec} a The vector to convert
 * @param {string} [s=', '] The separator string
 * @return {string} A string representation of the vector
 */
vec.str = (a, s = ', ') => `${a.x}${s}${a.y}`;

/**
 * A matrix
 * @typedef {Object} mat
 * @property {number} m The number of rows in the matrix
 * @property {number} n The number of columns in the matrix
 * @property {Array<number>} entries The matrix values
 */

/**
 * Create a new matrix
 * @param {number} [m=4] The number of rows
 * @param {number} [n=4] The number of columns
 * @param {Array<number>} [entries=[]] Matrix values in reading order
 * @return {mat} A new matrix
 */
const mat = (m = 4, n = 4, entries = []) => ({
  m, n,
  entries: entries.concat(Array(m * n).fill(0)).slice(0, m * n)
});

/**
 * Get an identity matrix of size n
 * @param {number} n The size of the matrix
 * @return {mat} An identity matrix
 */
mat.identity = n => mat(n, n, Array(n * n).fill(0).map((v, i) => +(Math.floor(i / n) === i % n)));

/**
 * Get an entry from a matrix
 * @param {mat} a Matrix a
 * @param {number} i The row offset
 * @param {number} j The column offset
 * @return {number} The value at position (i, j) in matrix a
 */
mat.get = (a, i, j) => a.entries[(j - 1) + (i - 1) * a.n];

/**
 * Set an entry of a matrix
 * @param {mat} a Matrix a
 * @param {number} i The row offset
 * @param {number} j The column offset
 * @param {number} v The value to set in matrix a
 */
mat.set = (a, i, j, v) => { a.entries[(j - 1) + (i - 1) * a.n] = v; };

/**
 * Get a row from a matrix as an array
 * @param {mat} a Matrix a
 * @param {number} m The row offset
 * @return {Array<number>} Row m from matrix a
 */
mat.row = (a, m) => {
  const s = (m - 1) * a.n;
  return a.entries.slice(s, s + a.n);
};

/**
 * Get a column from a matrix as an array
 * @param {mat} a Matrix a
 * @param {number} n The column offset
 * @return {Array<number>} Column n from matrix a
 */
mat.col = (a, n) => times(i => mat.get(a, (i + 1), n), a.m);

/**
 * Add matrices
 * @param {mat} a Matrix a
 * @param {mat} b Matrix b
 * @return {mat} a + b
 */
mat.add = (a, b) => a.m === b.m && a.n === b.n && mat.map(a, (v, i) => v + b.entries[i]);

/**
 * Subtract matrices
 * @param {mat} a Matrix a
 * @param {mat} b Matrix b
 * @return {mat} a - b
 */
mat.sub = (a, b) => a.m === b.m && a.n === b.n && mat.map(a, (v, i) => v - b.entries[i]);

/**
 * Multiply matrices
 * @param {mat} a Matrix a
 * @param {mat} b Matrix b
 * @return {mat|boolean} ab or false if the matrices cannot be multiplied
 */
mat.mul = (a, b) => {
  if (a.n !== b.m) { return false; }
  const result = mat(a.m, b.n);
  for (let i = 1; i <= a.m; i++) {
    for (let j = 1; j <= b.n; j++) {
      mat.set(result, i, j, dot(mat.row(a, i), mat.col(b, j)));
    }
  }
  return result;
};

/**
 * Scale a matrix
 * @param {mat} a Matrix a
 * @param {number} b Scalar b
 * @return {mat} a * b
 */
mat.scale = (a, b) => mat.map(a, v => v * b);

/**
 * Transpose a matrix
 * @param {mat} a The matrix to transpose
 * @return {mat} A transposed matrix
 */
mat.trans = a => mat(a.n, a.m, times(i => mat.col(a, (i + 1)), a.n).flat());

/**
 * Get the minor of a matrix
 * @param {mat} a Matrix a
 * @param {number} i The row offset
 * @param {number} j The column offset
 * @return {mat|boolean} The (i, j) minor of matrix a or false if the matrix is not square
 */
mat.minor = (a, i, j) => {
  if (a.m !== a.n) { return false; }
  const entries = [];
  for (let ii = 1; ii <= a.m; ii++) {
    if (ii === i) { continue; }
    for (let jj = 1; jj <= a.n; jj++) {
      if (jj === j) { continue; }
      entries.push(mat.get(a, ii, jj));
    }
  }
  return mat(a.m - 1, a.n - 1, entries);
};

/**
 * Get the determinant of a matrix
 * @param {mat} a Matrix a
 * @return {number|boolean} |a| or false if the matrix is not square
 */
mat.det = a => {
  if (a.m !== a.n) { return false; }
  if (a.m === 1) {
    return a.entries[0];
  }
  if (a.m === 2) {
    return a.entries[0] * a.entries[3] - a.entries[1] * a.entries[2];
  }
  let total = 0, sign = 1;
  for (let j = 1; j <= a.n; j++) {
    total += sign * a.entries[j - 1] * mat.det(mat.minor(a, 1, j));
    sign *= -1;
  }
  return total;
};

/**
 * Normalise a matrix
 * @param {mat} a The matrix to normalise
 * @return {mat|boolean} ^a or false if the matrix is not square
 */
mat.nor = a => {
  if (a.m !== a.n) { return false; }
  const d = mat.det(a);
  return mat.map(a, i => i * d);
};

/**
 * Get the adjugate of a matrix
 * @param {mat} a The matrix from which to get the adjugate
 * @return {mat} The adjugate of a
 */
mat.adj = a => {
  const minors = mat(a.m, a.n);
  for (let i = 1; i <= a.m; i++) {
    for (let j = 1; j <= a.n; j++) {
      mat.set(minors, i, j, mat.det(mat.minor(a, i, j)));
    }
  }
  const cofactors = mat.map(minors, (v, i) => v * (i % 2 ? -1 : 1));
  return mat.trans(cofactors);
};

/**
 * Get the inverse of a matrix
 * @param {mat} a The matrix to invert
 * @return {mat|boolean} a^-1 or false if the matrix has no inverse
 */
mat.inv = a => {
  if (a.m !== a.n) { return false; }
  const d = mat.det(a);
  if (d === 0) { return false; }
  return mat.scale(mat.adj(a), 1 / d);
};

/**
 * Check if two matrices are equal
 * @param {mat} a Matrix a
 * @param {mat} b Matrix b
 * @return {boolean} True if matrices a and b are identical, false otherwise
 */
mat.eq = (a, b) => a.m === b.m && a.n === b.n && mat.str(a) === mat.str(b);

/**
 * Copy a matrix
 * @param {mat} a The matrix to copy
 * @return {mat} A copy of matrix a
 */
mat.cpy = a => mat(a.m, a.n, [...a.entries]);

/**
 * A function to call on each entry of a matrix
 * @callback matrixMapCallback
 * @param {number} value The entry value
 * @param {number} index The entry index
 * @param {Array<number>} entries The array of matrix entries
 * @return {number} The mapped entry
 */

/**
 * Call a function on each entry of a matrix and build a new matrix from the results
 * @param {mat} a Matrix a
 * @param {matrixMapCallback} f The function to call on each entry of the matrix
 * @return {mat} Matrix a mapped through f
 */
mat.map = (a, f) => mat(a.m, a.n, a.entries.map(f));

/**
 * Convert a matrix into a string
 * @param {mat} a The matrix to convert
 * @param {string} [ms=', '] The separator string for columns
 * @param {string} [ns='\n'] The separator string for rows
 * @return {string} A string representation of the matrix
 */
mat.str = (a, ms = ', ', ns = '\n') => chunk(a.entries, a.n).map(r => r.join(ms)).join(ns);

if (true) {
  module.exports = { vec, mat };
}


/***/ }),

/***/ "./node_modules/dat.gui/build/dat.gui.module.js":
/*!******************************************************!*\
  !*** ./node_modules/dat.gui/build/dat.gui.module.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GUI: () => (/* binding */ GUI$1),
/* harmony export */   color: () => (/* binding */ color),
/* harmony export */   controllers: () => (/* binding */ controllers),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   dom: () => (/* binding */ dom$1),
/* harmony export */   gui: () => (/* binding */ gui)
/* harmony export */ });
/**
 * dat-gui JavaScript Controller Library
 * https://github.com/dataarts/dat.gui
 *
 * Copyright 2011 Data Arts Team, Google Creative Lab
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 */

function ___$insertStyle(css) {
  if (!css) {
    return;
  }
  if (typeof window === 'undefined') {
    return;
  }

  var style = document.createElement('style');

  style.setAttribute('type', 'text/css');
  style.innerHTML = css;
  document.head.appendChild(style);

  return css;
}

function colorToString (color, forceCSSHex) {
  var colorFormat = color.__state.conversionName.toString();
  var r = Math.round(color.r);
  var g = Math.round(color.g);
  var b = Math.round(color.b);
  var a = color.a;
  var h = Math.round(color.h);
  var s = color.s.toFixed(1);
  var v = color.v.toFixed(1);
  if (forceCSSHex || colorFormat === 'THREE_CHAR_HEX' || colorFormat === 'SIX_CHAR_HEX') {
    var str = color.hex.toString(16);
    while (str.length < 6) {
      str = '0' + str;
    }
    return '#' + str;
  } else if (colorFormat === 'CSS_RGB') {
    return 'rgb(' + r + ',' + g + ',' + b + ')';
  } else if (colorFormat === 'CSS_RGBA') {
    return 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')';
  } else if (colorFormat === 'HEX') {
    return '0x' + color.hex.toString(16);
  } else if (colorFormat === 'RGB_ARRAY') {
    return '[' + r + ',' + g + ',' + b + ']';
  } else if (colorFormat === 'RGBA_ARRAY') {
    return '[' + r + ',' + g + ',' + b + ',' + a + ']';
  } else if (colorFormat === 'RGB_OBJ') {
    return '{r:' + r + ',g:' + g + ',b:' + b + '}';
  } else if (colorFormat === 'RGBA_OBJ') {
    return '{r:' + r + ',g:' + g + ',b:' + b + ',a:' + a + '}';
  } else if (colorFormat === 'HSV_OBJ') {
    return '{h:' + h + ',s:' + s + ',v:' + v + '}';
  } else if (colorFormat === 'HSVA_OBJ') {
    return '{h:' + h + ',s:' + s + ',v:' + v + ',a:' + a + '}';
  }
  return 'unknown format';
}

var ARR_EACH = Array.prototype.forEach;
var ARR_SLICE = Array.prototype.slice;
var Common = {
  BREAK: {},
  extend: function extend(target) {
    this.each(ARR_SLICE.call(arguments, 1), function (obj) {
      var keys = this.isObject(obj) ? Object.keys(obj) : [];
      keys.forEach(function (key) {
        if (!this.isUndefined(obj[key])) {
          target[key] = obj[key];
        }
      }.bind(this));
    }, this);
    return target;
  },
  defaults: function defaults(target) {
    this.each(ARR_SLICE.call(arguments, 1), function (obj) {
      var keys = this.isObject(obj) ? Object.keys(obj) : [];
      keys.forEach(function (key) {
        if (this.isUndefined(target[key])) {
          target[key] = obj[key];
        }
      }.bind(this));
    }, this);
    return target;
  },
  compose: function compose() {
    var toCall = ARR_SLICE.call(arguments);
    return function () {
      var args = ARR_SLICE.call(arguments);
      for (var i = toCall.length - 1; i >= 0; i--) {
        args = [toCall[i].apply(this, args)];
      }
      return args[0];
    };
  },
  each: function each(obj, itr, scope) {
    if (!obj) {
      return;
    }
    if (ARR_EACH && obj.forEach && obj.forEach === ARR_EACH) {
      obj.forEach(itr, scope);
    } else if (obj.length === obj.length + 0) {
      var key = void 0;
      var l = void 0;
      for (key = 0, l = obj.length; key < l; key++) {
        if (key in obj && itr.call(scope, obj[key], key) === this.BREAK) {
          return;
        }
      }
    } else {
      for (var _key in obj) {
        if (itr.call(scope, obj[_key], _key) === this.BREAK) {
          return;
        }
      }
    }
  },
  defer: function defer(fnc) {
    setTimeout(fnc, 0);
  },
  debounce: function debounce(func, threshold, callImmediately) {
    var timeout = void 0;
    return function () {
      var obj = this;
      var args = arguments;
      function delayed() {
        timeout = null;
        if (!callImmediately) func.apply(obj, args);
      }
      var callNow = callImmediately || !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(delayed, threshold);
      if (callNow) {
        func.apply(obj, args);
      }
    };
  },
  toArray: function toArray(obj) {
    if (obj.toArray) return obj.toArray();
    return ARR_SLICE.call(obj);
  },
  isUndefined: function isUndefined(obj) {
    return obj === undefined;
  },
  isNull: function isNull(obj) {
    return obj === null;
  },
  isNaN: function (_isNaN) {
    function isNaN(_x) {
      return _isNaN.apply(this, arguments);
    }
    isNaN.toString = function () {
      return _isNaN.toString();
    };
    return isNaN;
  }(function (obj) {
    return isNaN(obj);
  }),
  isArray: Array.isArray || function (obj) {
    return obj.constructor === Array;
  },
  isObject: function isObject(obj) {
    return obj === Object(obj);
  },
  isNumber: function isNumber(obj) {
    return obj === obj + 0;
  },
  isString: function isString(obj) {
    return obj === obj + '';
  },
  isBoolean: function isBoolean(obj) {
    return obj === false || obj === true;
  },
  isFunction: function isFunction(obj) {
    return obj instanceof Function;
  }
};

var INTERPRETATIONS = [
{
  litmus: Common.isString,
  conversions: {
    THREE_CHAR_HEX: {
      read: function read(original) {
        var test = original.match(/^#([A-F0-9])([A-F0-9])([A-F0-9])$/i);
        if (test === null) {
          return false;
        }
        return {
          space: 'HEX',
          hex: parseInt('0x' + test[1].toString() + test[1].toString() + test[2].toString() + test[2].toString() + test[3].toString() + test[3].toString(), 0)
        };
      },
      write: colorToString
    },
    SIX_CHAR_HEX: {
      read: function read(original) {
        var test = original.match(/^#([A-F0-9]{6})$/i);
        if (test === null) {
          return false;
        }
        return {
          space: 'HEX',
          hex: parseInt('0x' + test[1].toString(), 0)
        };
      },
      write: colorToString
    },
    CSS_RGB: {
      read: function read(original) {
        var test = original.match(/^rgb\(\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*\)/);
        if (test === null) {
          return false;
        }
        return {
          space: 'RGB',
          r: parseFloat(test[1]),
          g: parseFloat(test[2]),
          b: parseFloat(test[3])
        };
      },
      write: colorToString
    },
    CSS_RGBA: {
      read: function read(original) {
        var test = original.match(/^rgba\(\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*\)/);
        if (test === null) {
          return false;
        }
        return {
          space: 'RGB',
          r: parseFloat(test[1]),
          g: parseFloat(test[2]),
          b: parseFloat(test[3]),
          a: parseFloat(test[4])
        };
      },
      write: colorToString
    }
  }
},
{
  litmus: Common.isNumber,
  conversions: {
    HEX: {
      read: function read(original) {
        return {
          space: 'HEX',
          hex: original,
          conversionName: 'HEX'
        };
      },
      write: function write(color) {
        return color.hex;
      }
    }
  }
},
{
  litmus: Common.isArray,
  conversions: {
    RGB_ARRAY: {
      read: function read(original) {
        if (original.length !== 3) {
          return false;
        }
        return {
          space: 'RGB',
          r: original[0],
          g: original[1],
          b: original[2]
        };
      },
      write: function write(color) {
        return [color.r, color.g, color.b];
      }
    },
    RGBA_ARRAY: {
      read: function read(original) {
        if (original.length !== 4) return false;
        return {
          space: 'RGB',
          r: original[0],
          g: original[1],
          b: original[2],
          a: original[3]
        };
      },
      write: function write(color) {
        return [color.r, color.g, color.b, color.a];
      }
    }
  }
},
{
  litmus: Common.isObject,
  conversions: {
    RGBA_OBJ: {
      read: function read(original) {
        if (Common.isNumber(original.r) && Common.isNumber(original.g) && Common.isNumber(original.b) && Common.isNumber(original.a)) {
          return {
            space: 'RGB',
            r: original.r,
            g: original.g,
            b: original.b,
            a: original.a
          };
        }
        return false;
      },
      write: function write(color) {
        return {
          r: color.r,
          g: color.g,
          b: color.b,
          a: color.a
        };
      }
    },
    RGB_OBJ: {
      read: function read(original) {
        if (Common.isNumber(original.r) && Common.isNumber(original.g) && Common.isNumber(original.b)) {
          return {
            space: 'RGB',
            r: original.r,
            g: original.g,
            b: original.b
          };
        }
        return false;
      },
      write: function write(color) {
        return {
          r: color.r,
          g: color.g,
          b: color.b
        };
      }
    },
    HSVA_OBJ: {
      read: function read(original) {
        if (Common.isNumber(original.h) && Common.isNumber(original.s) && Common.isNumber(original.v) && Common.isNumber(original.a)) {
          return {
            space: 'HSV',
            h: original.h,
            s: original.s,
            v: original.v,
            a: original.a
          };
        }
        return false;
      },
      write: function write(color) {
        return {
          h: color.h,
          s: color.s,
          v: color.v,
          a: color.a
        };
      }
    },
    HSV_OBJ: {
      read: function read(original) {
        if (Common.isNumber(original.h) && Common.isNumber(original.s) && Common.isNumber(original.v)) {
          return {
            space: 'HSV',
            h: original.h,
            s: original.s,
            v: original.v
          };
        }
        return false;
      },
      write: function write(color) {
        return {
          h: color.h,
          s: color.s,
          v: color.v
        };
      }
    }
  }
}];
var result = void 0;
var toReturn = void 0;
var interpret = function interpret() {
  toReturn = false;
  var original = arguments.length > 1 ? Common.toArray(arguments) : arguments[0];
  Common.each(INTERPRETATIONS, function (family) {
    if (family.litmus(original)) {
      Common.each(family.conversions, function (conversion, conversionName) {
        result = conversion.read(original);
        if (toReturn === false && result !== false) {
          toReturn = result;
          result.conversionName = conversionName;
          result.conversion = conversion;
          return Common.BREAK;
        }
      });
      return Common.BREAK;
    }
  });
  return toReturn;
};

var tmpComponent = void 0;
var ColorMath = {
  hsv_to_rgb: function hsv_to_rgb(h, s, v) {
    var hi = Math.floor(h / 60) % 6;
    var f = h / 60 - Math.floor(h / 60);
    var p = v * (1.0 - s);
    var q = v * (1.0 - f * s);
    var t = v * (1.0 - (1.0 - f) * s);
    var c = [[v, t, p], [q, v, p], [p, v, t], [p, q, v], [t, p, v], [v, p, q]][hi];
    return {
      r: c[0] * 255,
      g: c[1] * 255,
      b: c[2] * 255
    };
  },
  rgb_to_hsv: function rgb_to_hsv(r, g, b) {
    var min = Math.min(r, g, b);
    var max = Math.max(r, g, b);
    var delta = max - min;
    var h = void 0;
    var s = void 0;
    if (max !== 0) {
      s = delta / max;
    } else {
      return {
        h: NaN,
        s: 0,
        v: 0
      };
    }
    if (r === max) {
      h = (g - b) / delta;
    } else if (g === max) {
      h = 2 + (b - r) / delta;
    } else {
      h = 4 + (r - g) / delta;
    }
    h /= 6;
    if (h < 0) {
      h += 1;
    }
    return {
      h: h * 360,
      s: s,
      v: max / 255
    };
  },
  rgb_to_hex: function rgb_to_hex(r, g, b) {
    var hex = this.hex_with_component(0, 2, r);
    hex = this.hex_with_component(hex, 1, g);
    hex = this.hex_with_component(hex, 0, b);
    return hex;
  },
  component_from_hex: function component_from_hex(hex, componentIndex) {
    return hex >> componentIndex * 8 & 0xFF;
  },
  hex_with_component: function hex_with_component(hex, componentIndex, value) {
    return value << (tmpComponent = componentIndex * 8) | hex & ~(0xFF << tmpComponent);
  }
};

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};











var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();







var get = function get(object, property, receiver) {
  if (object === null) object = Function.prototype;
  var desc = Object.getOwnPropertyDescriptor(object, property);

  if (desc === undefined) {
    var parent = Object.getPrototypeOf(object);

    if (parent === null) {
      return undefined;
    } else {
      return get(parent, property, receiver);
    }
  } else if ("value" in desc) {
    return desc.value;
  } else {
    var getter = desc.get;

    if (getter === undefined) {
      return undefined;
    }

    return getter.call(receiver);
  }
};

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};











var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var Color = function () {
  function Color() {
    classCallCheck(this, Color);
    this.__state = interpret.apply(this, arguments);
    if (this.__state === false) {
      throw new Error('Failed to interpret color arguments');
    }
    this.__state.a = this.__state.a || 1;
  }
  createClass(Color, [{
    key: 'toString',
    value: function toString() {
      return colorToString(this);
    }
  }, {
    key: 'toHexString',
    value: function toHexString() {
      return colorToString(this, true);
    }
  }, {
    key: 'toOriginal',
    value: function toOriginal() {
      return this.__state.conversion.write(this);
    }
  }]);
  return Color;
}();
function defineRGBComponent(target, component, componentHexIndex) {
  Object.defineProperty(target, component, {
    get: function get$$1() {
      if (this.__state.space === 'RGB') {
        return this.__state[component];
      }
      Color.recalculateRGB(this, component, componentHexIndex);
      return this.__state[component];
    },
    set: function set$$1(v) {
      if (this.__state.space !== 'RGB') {
        Color.recalculateRGB(this, component, componentHexIndex);
        this.__state.space = 'RGB';
      }
      this.__state[component] = v;
    }
  });
}
function defineHSVComponent(target, component) {
  Object.defineProperty(target, component, {
    get: function get$$1() {
      if (this.__state.space === 'HSV') {
        return this.__state[component];
      }
      Color.recalculateHSV(this);
      return this.__state[component];
    },
    set: function set$$1(v) {
      if (this.__state.space !== 'HSV') {
        Color.recalculateHSV(this);
        this.__state.space = 'HSV';
      }
      this.__state[component] = v;
    }
  });
}
Color.recalculateRGB = function (color, component, componentHexIndex) {
  if (color.__state.space === 'HEX') {
    color.__state[component] = ColorMath.component_from_hex(color.__state.hex, componentHexIndex);
  } else if (color.__state.space === 'HSV') {
    Common.extend(color.__state, ColorMath.hsv_to_rgb(color.__state.h, color.__state.s, color.__state.v));
  } else {
    throw new Error('Corrupted color state');
  }
};
Color.recalculateHSV = function (color) {
  var result = ColorMath.rgb_to_hsv(color.r, color.g, color.b);
  Common.extend(color.__state, {
    s: result.s,
    v: result.v
  });
  if (!Common.isNaN(result.h)) {
    color.__state.h = result.h;
  } else if (Common.isUndefined(color.__state.h)) {
    color.__state.h = 0;
  }
};
Color.COMPONENTS = ['r', 'g', 'b', 'h', 's', 'v', 'hex', 'a'];
defineRGBComponent(Color.prototype, 'r', 2);
defineRGBComponent(Color.prototype, 'g', 1);
defineRGBComponent(Color.prototype, 'b', 0);
defineHSVComponent(Color.prototype, 'h');
defineHSVComponent(Color.prototype, 's');
defineHSVComponent(Color.prototype, 'v');
Object.defineProperty(Color.prototype, 'a', {
  get: function get$$1() {
    return this.__state.a;
  },
  set: function set$$1(v) {
    this.__state.a = v;
  }
});
Object.defineProperty(Color.prototype, 'hex', {
  get: function get$$1() {
    if (this.__state.space !== 'HEX') {
      this.__state.hex = ColorMath.rgb_to_hex(this.r, this.g, this.b);
      this.__state.space = 'HEX';
    }
    return this.__state.hex;
  },
  set: function set$$1(v) {
    this.__state.space = 'HEX';
    this.__state.hex = v;
  }
});

var Controller = function () {
  function Controller(object, property) {
    classCallCheck(this, Controller);
    this.initialValue = object[property];
    this.domElement = document.createElement('div');
    this.object = object;
    this.property = property;
    this.__onChange = undefined;
    this.__onFinishChange = undefined;
  }
  createClass(Controller, [{
    key: 'onChange',
    value: function onChange(fnc) {
      this.__onChange = fnc;
      return this;
    }
  }, {
    key: 'onFinishChange',
    value: function onFinishChange(fnc) {
      this.__onFinishChange = fnc;
      return this;
    }
  }, {
    key: 'setValue',
    value: function setValue(newValue) {
      this.object[this.property] = newValue;
      if (this.__onChange) {
        this.__onChange.call(this, newValue);
      }
      this.updateDisplay();
      return this;
    }
  }, {
    key: 'getValue',
    value: function getValue() {
      return this.object[this.property];
    }
  }, {
    key: 'updateDisplay',
    value: function updateDisplay() {
      return this;
    }
  }, {
    key: 'isModified',
    value: function isModified() {
      return this.initialValue !== this.getValue();
    }
  }]);
  return Controller;
}();

var EVENT_MAP = {
  HTMLEvents: ['change'],
  MouseEvents: ['click', 'mousemove', 'mousedown', 'mouseup', 'mouseover'],
  KeyboardEvents: ['keydown']
};
var EVENT_MAP_INV = {};
Common.each(EVENT_MAP, function (v, k) {
  Common.each(v, function (e) {
    EVENT_MAP_INV[e] = k;
  });
});
var CSS_VALUE_PIXELS = /(\d+(\.\d+)?)px/;
function cssValueToPixels(val) {
  if (val === '0' || Common.isUndefined(val)) {
    return 0;
  }
  var match = val.match(CSS_VALUE_PIXELS);
  if (!Common.isNull(match)) {
    return parseFloat(match[1]);
  }
  return 0;
}
var dom = {
  makeSelectable: function makeSelectable(elem, selectable) {
    if (elem === undefined || elem.style === undefined) return;
    elem.onselectstart = selectable ? function () {
      return false;
    } : function () {};
    elem.style.MozUserSelect = selectable ? 'auto' : 'none';
    elem.style.KhtmlUserSelect = selectable ? 'auto' : 'none';
    elem.unselectable = selectable ? 'on' : 'off';
  },
  makeFullscreen: function makeFullscreen(elem, hor, vert) {
    var vertical = vert;
    var horizontal = hor;
    if (Common.isUndefined(horizontal)) {
      horizontal = true;
    }
    if (Common.isUndefined(vertical)) {
      vertical = true;
    }
    elem.style.position = 'absolute';
    if (horizontal) {
      elem.style.left = 0;
      elem.style.right = 0;
    }
    if (vertical) {
      elem.style.top = 0;
      elem.style.bottom = 0;
    }
  },
  fakeEvent: function fakeEvent(elem, eventType, pars, aux) {
    var params = pars || {};
    var className = EVENT_MAP_INV[eventType];
    if (!className) {
      throw new Error('Event type ' + eventType + ' not supported.');
    }
    var evt = document.createEvent(className);
    switch (className) {
      case 'MouseEvents':
        {
          var clientX = params.x || params.clientX || 0;
          var clientY = params.y || params.clientY || 0;
          evt.initMouseEvent(eventType, params.bubbles || false, params.cancelable || true, window, params.clickCount || 1, 0,
          0,
          clientX,
          clientY,
          false, false, false, false, 0, null);
          break;
        }
      case 'KeyboardEvents':
        {
          var init = evt.initKeyboardEvent || evt.initKeyEvent;
          Common.defaults(params, {
            cancelable: true,
            ctrlKey: false,
            altKey: false,
            shiftKey: false,
            metaKey: false,
            keyCode: undefined,
            charCode: undefined
          });
          init(eventType, params.bubbles || false, params.cancelable, window, params.ctrlKey, params.altKey, params.shiftKey, params.metaKey, params.keyCode, params.charCode);
          break;
        }
      default:
        {
          evt.initEvent(eventType, params.bubbles || false, params.cancelable || true);
          break;
        }
    }
    Common.defaults(evt, aux);
    elem.dispatchEvent(evt);
  },
  bind: function bind(elem, event, func, newBool) {
    var bool = newBool || false;
    if (elem.addEventListener) {
      elem.addEventListener(event, func, bool);
    } else if (elem.attachEvent) {
      elem.attachEvent('on' + event, func);
    }
    return dom;
  },
  unbind: function unbind(elem, event, func, newBool) {
    var bool = newBool || false;
    if (elem.removeEventListener) {
      elem.removeEventListener(event, func, bool);
    } else if (elem.detachEvent) {
      elem.detachEvent('on' + event, func);
    }
    return dom;
  },
  addClass: function addClass(elem, className) {
    if (elem.className === undefined) {
      elem.className = className;
    } else if (elem.className !== className) {
      var classes = elem.className.split(/ +/);
      if (classes.indexOf(className) === -1) {
        classes.push(className);
        elem.className = classes.join(' ').replace(/^\s+/, '').replace(/\s+$/, '');
      }
    }
    return dom;
  },
  removeClass: function removeClass(elem, className) {
    if (className) {
      if (elem.className === className) {
        elem.removeAttribute('class');
      } else {
        var classes = elem.className.split(/ +/);
        var index = classes.indexOf(className);
        if (index !== -1) {
          classes.splice(index, 1);
          elem.className = classes.join(' ');
        }
      }
    } else {
      elem.className = undefined;
    }
    return dom;
  },
  hasClass: function hasClass(elem, className) {
    return new RegExp('(?:^|\\s+)' + className + '(?:\\s+|$)').test(elem.className) || false;
  },
  getWidth: function getWidth(elem) {
    var style = getComputedStyle(elem);
    return cssValueToPixels(style['border-left-width']) + cssValueToPixels(style['border-right-width']) + cssValueToPixels(style['padding-left']) + cssValueToPixels(style['padding-right']) + cssValueToPixels(style.width);
  },
  getHeight: function getHeight(elem) {
    var style = getComputedStyle(elem);
    return cssValueToPixels(style['border-top-width']) + cssValueToPixels(style['border-bottom-width']) + cssValueToPixels(style['padding-top']) + cssValueToPixels(style['padding-bottom']) + cssValueToPixels(style.height);
  },
  getOffset: function getOffset(el) {
    var elem = el;
    var offset = { left: 0, top: 0 };
    if (elem.offsetParent) {
      do {
        offset.left += elem.offsetLeft;
        offset.top += elem.offsetTop;
        elem = elem.offsetParent;
      } while (elem);
    }
    return offset;
  },
  isActive: function isActive(elem) {
    return elem === document.activeElement && (elem.type || elem.href);
  }
};

var BooleanController = function (_Controller) {
  inherits(BooleanController, _Controller);
  function BooleanController(object, property) {
    classCallCheck(this, BooleanController);
    var _this2 = possibleConstructorReturn(this, (BooleanController.__proto__ || Object.getPrototypeOf(BooleanController)).call(this, object, property));
    var _this = _this2;
    _this2.__prev = _this2.getValue();
    _this2.__checkbox = document.createElement('input');
    _this2.__checkbox.setAttribute('type', 'checkbox');
    function onChange() {
      _this.setValue(!_this.__prev);
    }
    dom.bind(_this2.__checkbox, 'change', onChange, false);
    _this2.domElement.appendChild(_this2.__checkbox);
    _this2.updateDisplay();
    return _this2;
  }
  createClass(BooleanController, [{
    key: 'setValue',
    value: function setValue(v) {
      var toReturn = get(BooleanController.prototype.__proto__ || Object.getPrototypeOf(BooleanController.prototype), 'setValue', this).call(this, v);
      if (this.__onFinishChange) {
        this.__onFinishChange.call(this, this.getValue());
      }
      this.__prev = this.getValue();
      return toReturn;
    }
  }, {
    key: 'updateDisplay',
    value: function updateDisplay() {
      if (this.getValue() === true) {
        this.__checkbox.setAttribute('checked', 'checked');
        this.__checkbox.checked = true;
        this.__prev = true;
      } else {
        this.__checkbox.checked = false;
        this.__prev = false;
      }
      return get(BooleanController.prototype.__proto__ || Object.getPrototypeOf(BooleanController.prototype), 'updateDisplay', this).call(this);
    }
  }]);
  return BooleanController;
}(Controller);

var OptionController = function (_Controller) {
  inherits(OptionController, _Controller);
  function OptionController(object, property, opts) {
    classCallCheck(this, OptionController);
    var _this2 = possibleConstructorReturn(this, (OptionController.__proto__ || Object.getPrototypeOf(OptionController)).call(this, object, property));
    var options = opts;
    var _this = _this2;
    _this2.__select = document.createElement('select');
    if (Common.isArray(options)) {
      var map = {};
      Common.each(options, function (element) {
        map[element] = element;
      });
      options = map;
    }
    Common.each(options, function (value, key) {
      var opt = document.createElement('option');
      opt.innerHTML = key;
      opt.setAttribute('value', value);
      _this.__select.appendChild(opt);
    });
    _this2.updateDisplay();
    dom.bind(_this2.__select, 'change', function () {
      var desiredValue = this.options[this.selectedIndex].value;
      _this.setValue(desiredValue);
    });
    _this2.domElement.appendChild(_this2.__select);
    return _this2;
  }
  createClass(OptionController, [{
    key: 'setValue',
    value: function setValue(v) {
      var toReturn = get(OptionController.prototype.__proto__ || Object.getPrototypeOf(OptionController.prototype), 'setValue', this).call(this, v);
      if (this.__onFinishChange) {
        this.__onFinishChange.call(this, this.getValue());
      }
      return toReturn;
    }
  }, {
    key: 'updateDisplay',
    value: function updateDisplay() {
      if (dom.isActive(this.__select)) return this;
      this.__select.value = this.getValue();
      return get(OptionController.prototype.__proto__ || Object.getPrototypeOf(OptionController.prototype), 'updateDisplay', this).call(this);
    }
  }]);
  return OptionController;
}(Controller);

var StringController = function (_Controller) {
  inherits(StringController, _Controller);
  function StringController(object, property) {
    classCallCheck(this, StringController);
    var _this2 = possibleConstructorReturn(this, (StringController.__proto__ || Object.getPrototypeOf(StringController)).call(this, object, property));
    var _this = _this2;
    function onChange() {
      _this.setValue(_this.__input.value);
    }
    function onBlur() {
      if (_this.__onFinishChange) {
        _this.__onFinishChange.call(_this, _this.getValue());
      }
    }
    _this2.__input = document.createElement('input');
    _this2.__input.setAttribute('type', 'text');
    dom.bind(_this2.__input, 'keyup', onChange);
    dom.bind(_this2.__input, 'change', onChange);
    dom.bind(_this2.__input, 'blur', onBlur);
    dom.bind(_this2.__input, 'keydown', function (e) {
      if (e.keyCode === 13) {
        this.blur();
      }
    });
    _this2.updateDisplay();
    _this2.domElement.appendChild(_this2.__input);
    return _this2;
  }
  createClass(StringController, [{
    key: 'updateDisplay',
    value: function updateDisplay() {
      if (!dom.isActive(this.__input)) {
        this.__input.value = this.getValue();
      }
      return get(StringController.prototype.__proto__ || Object.getPrototypeOf(StringController.prototype), 'updateDisplay', this).call(this);
    }
  }]);
  return StringController;
}(Controller);

function numDecimals(x) {
  var _x = x.toString();
  if (_x.indexOf('.') > -1) {
    return _x.length - _x.indexOf('.') - 1;
  }
  return 0;
}
var NumberController = function (_Controller) {
  inherits(NumberController, _Controller);
  function NumberController(object, property, params) {
    classCallCheck(this, NumberController);
    var _this = possibleConstructorReturn(this, (NumberController.__proto__ || Object.getPrototypeOf(NumberController)).call(this, object, property));
    var _params = params || {};
    _this.__min = _params.min;
    _this.__max = _params.max;
    _this.__step = _params.step;
    if (Common.isUndefined(_this.__step)) {
      if (_this.initialValue === 0) {
        _this.__impliedStep = 1;
      } else {
        _this.__impliedStep = Math.pow(10, Math.floor(Math.log(Math.abs(_this.initialValue)) / Math.LN10)) / 10;
      }
    } else {
      _this.__impliedStep = _this.__step;
    }
    _this.__precision = numDecimals(_this.__impliedStep);
    return _this;
  }
  createClass(NumberController, [{
    key: 'setValue',
    value: function setValue(v) {
      var _v = v;
      if (this.__min !== undefined && _v < this.__min) {
        _v = this.__min;
      } else if (this.__max !== undefined && _v > this.__max) {
        _v = this.__max;
      }
      if (this.__step !== undefined && _v % this.__step !== 0) {
        _v = Math.round(_v / this.__step) * this.__step;
      }
      return get(NumberController.prototype.__proto__ || Object.getPrototypeOf(NumberController.prototype), 'setValue', this).call(this, _v);
    }
  }, {
    key: 'min',
    value: function min(minValue) {
      this.__min = minValue;
      return this;
    }
  }, {
    key: 'max',
    value: function max(maxValue) {
      this.__max = maxValue;
      return this;
    }
  }, {
    key: 'step',
    value: function step(stepValue) {
      this.__step = stepValue;
      this.__impliedStep = stepValue;
      this.__precision = numDecimals(stepValue);
      return this;
    }
  }]);
  return NumberController;
}(Controller);

function roundToDecimal(value, decimals) {
  var tenTo = Math.pow(10, decimals);
  return Math.round(value * tenTo) / tenTo;
}
var NumberControllerBox = function (_NumberController) {
  inherits(NumberControllerBox, _NumberController);
  function NumberControllerBox(object, property, params) {
    classCallCheck(this, NumberControllerBox);
    var _this2 = possibleConstructorReturn(this, (NumberControllerBox.__proto__ || Object.getPrototypeOf(NumberControllerBox)).call(this, object, property, params));
    _this2.__truncationSuspended = false;
    var _this = _this2;
    var prevY = void 0;
    function onChange() {
      var attempted = parseFloat(_this.__input.value);
      if (!Common.isNaN(attempted)) {
        _this.setValue(attempted);
      }
    }
    function onFinish() {
      if (_this.__onFinishChange) {
        _this.__onFinishChange.call(_this, _this.getValue());
      }
    }
    function onBlur() {
      onFinish();
    }
    function onMouseDrag(e) {
      var diff = prevY - e.clientY;
      _this.setValue(_this.getValue() + diff * _this.__impliedStep);
      prevY = e.clientY;
    }
    function onMouseUp() {
      dom.unbind(window, 'mousemove', onMouseDrag);
      dom.unbind(window, 'mouseup', onMouseUp);
      onFinish();
    }
    function onMouseDown(e) {
      dom.bind(window, 'mousemove', onMouseDrag);
      dom.bind(window, 'mouseup', onMouseUp);
      prevY = e.clientY;
    }
    _this2.__input = document.createElement('input');
    _this2.__input.setAttribute('type', 'text');
    dom.bind(_this2.__input, 'change', onChange);
    dom.bind(_this2.__input, 'blur', onBlur);
    dom.bind(_this2.__input, 'mousedown', onMouseDown);
    dom.bind(_this2.__input, 'keydown', function (e) {
      if (e.keyCode === 13) {
        _this.__truncationSuspended = true;
        this.blur();
        _this.__truncationSuspended = false;
        onFinish();
      }
    });
    _this2.updateDisplay();
    _this2.domElement.appendChild(_this2.__input);
    return _this2;
  }
  createClass(NumberControllerBox, [{
    key: 'updateDisplay',
    value: function updateDisplay() {
      this.__input.value = this.__truncationSuspended ? this.getValue() : roundToDecimal(this.getValue(), this.__precision);
      return get(NumberControllerBox.prototype.__proto__ || Object.getPrototypeOf(NumberControllerBox.prototype), 'updateDisplay', this).call(this);
    }
  }]);
  return NumberControllerBox;
}(NumberController);

function map(v, i1, i2, o1, o2) {
  return o1 + (o2 - o1) * ((v - i1) / (i2 - i1));
}
var NumberControllerSlider = function (_NumberController) {
  inherits(NumberControllerSlider, _NumberController);
  function NumberControllerSlider(object, property, min, max, step) {
    classCallCheck(this, NumberControllerSlider);
    var _this2 = possibleConstructorReturn(this, (NumberControllerSlider.__proto__ || Object.getPrototypeOf(NumberControllerSlider)).call(this, object, property, { min: min, max: max, step: step }));
    var _this = _this2;
    _this2.__background = document.createElement('div');
    _this2.__foreground = document.createElement('div');
    dom.bind(_this2.__background, 'mousedown', onMouseDown);
    dom.bind(_this2.__background, 'touchstart', onTouchStart);
    dom.addClass(_this2.__background, 'slider');
    dom.addClass(_this2.__foreground, 'slider-fg');
    function onMouseDown(e) {
      document.activeElement.blur();
      dom.bind(window, 'mousemove', onMouseDrag);
      dom.bind(window, 'mouseup', onMouseUp);
      onMouseDrag(e);
    }
    function onMouseDrag(e) {
      e.preventDefault();
      var bgRect = _this.__background.getBoundingClientRect();
      _this.setValue(map(e.clientX, bgRect.left, bgRect.right, _this.__min, _this.__max));
      return false;
    }
    function onMouseUp() {
      dom.unbind(window, 'mousemove', onMouseDrag);
      dom.unbind(window, 'mouseup', onMouseUp);
      if (_this.__onFinishChange) {
        _this.__onFinishChange.call(_this, _this.getValue());
      }
    }
    function onTouchStart(e) {
      if (e.touches.length !== 1) {
        return;
      }
      dom.bind(window, 'touchmove', onTouchMove);
      dom.bind(window, 'touchend', onTouchEnd);
      onTouchMove(e);
    }
    function onTouchMove(e) {
      var clientX = e.touches[0].clientX;
      var bgRect = _this.__background.getBoundingClientRect();
      _this.setValue(map(clientX, bgRect.left, bgRect.right, _this.__min, _this.__max));
    }
    function onTouchEnd() {
      dom.unbind(window, 'touchmove', onTouchMove);
      dom.unbind(window, 'touchend', onTouchEnd);
      if (_this.__onFinishChange) {
        _this.__onFinishChange.call(_this, _this.getValue());
      }
    }
    _this2.updateDisplay();
    _this2.__background.appendChild(_this2.__foreground);
    _this2.domElement.appendChild(_this2.__background);
    return _this2;
  }
  createClass(NumberControllerSlider, [{
    key: 'updateDisplay',
    value: function updateDisplay() {
      var pct = (this.getValue() - this.__min) / (this.__max - this.__min);
      this.__foreground.style.width = pct * 100 + '%';
      return get(NumberControllerSlider.prototype.__proto__ || Object.getPrototypeOf(NumberControllerSlider.prototype), 'updateDisplay', this).call(this);
    }
  }]);
  return NumberControllerSlider;
}(NumberController);

var FunctionController = function (_Controller) {
  inherits(FunctionController, _Controller);
  function FunctionController(object, property, text) {
    classCallCheck(this, FunctionController);
    var _this2 = possibleConstructorReturn(this, (FunctionController.__proto__ || Object.getPrototypeOf(FunctionController)).call(this, object, property));
    var _this = _this2;
    _this2.__button = document.createElement('div');
    _this2.__button.innerHTML = text === undefined ? 'Fire' : text;
    dom.bind(_this2.__button, 'click', function (e) {
      e.preventDefault();
      _this.fire();
      return false;
    });
    dom.addClass(_this2.__button, 'button');
    _this2.domElement.appendChild(_this2.__button);
    return _this2;
  }
  createClass(FunctionController, [{
    key: 'fire',
    value: function fire() {
      if (this.__onChange) {
        this.__onChange.call(this);
      }
      this.getValue().call(this.object);
      if (this.__onFinishChange) {
        this.__onFinishChange.call(this, this.getValue());
      }
    }
  }]);
  return FunctionController;
}(Controller);

var ColorController = function (_Controller) {
  inherits(ColorController, _Controller);
  function ColorController(object, property) {
    classCallCheck(this, ColorController);
    var _this2 = possibleConstructorReturn(this, (ColorController.__proto__ || Object.getPrototypeOf(ColorController)).call(this, object, property));
    _this2.__color = new Color(_this2.getValue());
    _this2.__temp = new Color(0);
    var _this = _this2;
    _this2.domElement = document.createElement('div');
    dom.makeSelectable(_this2.domElement, false);
    _this2.__selector = document.createElement('div');
    _this2.__selector.className = 'selector';
    _this2.__saturation_field = document.createElement('div');
    _this2.__saturation_field.className = 'saturation-field';
    _this2.__field_knob = document.createElement('div');
    _this2.__field_knob.className = 'field-knob';
    _this2.__field_knob_border = '2px solid ';
    _this2.__hue_knob = document.createElement('div');
    _this2.__hue_knob.className = 'hue-knob';
    _this2.__hue_field = document.createElement('div');
    _this2.__hue_field.className = 'hue-field';
    _this2.__input = document.createElement('input');
    _this2.__input.type = 'text';
    _this2.__input_textShadow = '0 1px 1px ';
    dom.bind(_this2.__input, 'keydown', function (e) {
      if (e.keyCode === 13) {
        onBlur.call(this);
      }
    });
    dom.bind(_this2.__input, 'blur', onBlur);
    dom.bind(_this2.__selector, 'mousedown', function () {
      dom.addClass(this, 'drag').bind(window, 'mouseup', function () {
        dom.removeClass(_this.__selector, 'drag');
      });
    });
    dom.bind(_this2.__selector, 'touchstart', function () {
      dom.addClass(this, 'drag').bind(window, 'touchend', function () {
        dom.removeClass(_this.__selector, 'drag');
      });
    });
    var valueField = document.createElement('div');
    Common.extend(_this2.__selector.style, {
      width: '122px',
      height: '102px',
      padding: '3px',
      backgroundColor: '#222',
      boxShadow: '0px 1px 3px rgba(0,0,0,0.3)'
    });
    Common.extend(_this2.__field_knob.style, {
      position: 'absolute',
      width: '12px',
      height: '12px',
      border: _this2.__field_knob_border + (_this2.__color.v < 0.5 ? '#fff' : '#000'),
      boxShadow: '0px 1px 3px rgba(0,0,0,0.5)',
      borderRadius: '12px',
      zIndex: 1
    });
    Common.extend(_this2.__hue_knob.style, {
      position: 'absolute',
      width: '15px',
      height: '2px',
      borderRight: '4px solid #fff',
      zIndex: 1
    });
    Common.extend(_this2.__saturation_field.style, {
      width: '100px',
      height: '100px',
      border: '1px solid #555',
      marginRight: '3px',
      display: 'inline-block',
      cursor: 'pointer'
    });
    Common.extend(valueField.style, {
      width: '100%',
      height: '100%',
      background: 'none'
    });
    linearGradient(valueField, 'top', 'rgba(0,0,0,0)', '#000');
    Common.extend(_this2.__hue_field.style, {
      width: '15px',
      height: '100px',
      border: '1px solid #555',
      cursor: 'ns-resize',
      position: 'absolute',
      top: '3px',
      right: '3px'
    });
    hueGradient(_this2.__hue_field);
    Common.extend(_this2.__input.style, {
      outline: 'none',
      textAlign: 'center',
      color: '#fff',
      border: 0,
      fontWeight: 'bold',
      textShadow: _this2.__input_textShadow + 'rgba(0,0,0,0.7)'
    });
    dom.bind(_this2.__saturation_field, 'mousedown', fieldDown);
    dom.bind(_this2.__saturation_field, 'touchstart', fieldDown);
    dom.bind(_this2.__field_knob, 'mousedown', fieldDown);
    dom.bind(_this2.__field_knob, 'touchstart', fieldDown);
    dom.bind(_this2.__hue_field, 'mousedown', fieldDownH);
    dom.bind(_this2.__hue_field, 'touchstart', fieldDownH);
    function fieldDown(e) {
      setSV(e);
      dom.bind(window, 'mousemove', setSV);
      dom.bind(window, 'touchmove', setSV);
      dom.bind(window, 'mouseup', fieldUpSV);
      dom.bind(window, 'touchend', fieldUpSV);
    }
    function fieldDownH(e) {
      setH(e);
      dom.bind(window, 'mousemove', setH);
      dom.bind(window, 'touchmove', setH);
      dom.bind(window, 'mouseup', fieldUpH);
      dom.bind(window, 'touchend', fieldUpH);
    }
    function fieldUpSV() {
      dom.unbind(window, 'mousemove', setSV);
      dom.unbind(window, 'touchmove', setSV);
      dom.unbind(window, 'mouseup', fieldUpSV);
      dom.unbind(window, 'touchend', fieldUpSV);
      onFinish();
    }
    function fieldUpH() {
      dom.unbind(window, 'mousemove', setH);
      dom.unbind(window, 'touchmove', setH);
      dom.unbind(window, 'mouseup', fieldUpH);
      dom.unbind(window, 'touchend', fieldUpH);
      onFinish();
    }
    function onBlur() {
      var i = interpret(this.value);
      if (i !== false) {
        _this.__color.__state = i;
        _this.setValue(_this.__color.toOriginal());
      } else {
        this.value = _this.__color.toString();
      }
    }
    function onFinish() {
      if (_this.__onFinishChange) {
        _this.__onFinishChange.call(_this, _this.__color.toOriginal());
      }
    }
    _this2.__saturation_field.appendChild(valueField);
    _this2.__selector.appendChild(_this2.__field_knob);
    _this2.__selector.appendChild(_this2.__saturation_field);
    _this2.__selector.appendChild(_this2.__hue_field);
    _this2.__hue_field.appendChild(_this2.__hue_knob);
    _this2.domElement.appendChild(_this2.__input);
    _this2.domElement.appendChild(_this2.__selector);
    _this2.updateDisplay();
    function setSV(e) {
      if (e.type.indexOf('touch') === -1) {
        e.preventDefault();
      }
      var fieldRect = _this.__saturation_field.getBoundingClientRect();
      var _ref = e.touches && e.touches[0] || e,
          clientX = _ref.clientX,
          clientY = _ref.clientY;
      var s = (clientX - fieldRect.left) / (fieldRect.right - fieldRect.left);
      var v = 1 - (clientY - fieldRect.top) / (fieldRect.bottom - fieldRect.top);
      if (v > 1) {
        v = 1;
      } else if (v < 0) {
        v = 0;
      }
      if (s > 1) {
        s = 1;
      } else if (s < 0) {
        s = 0;
      }
      _this.__color.v = v;
      _this.__color.s = s;
      _this.setValue(_this.__color.toOriginal());
      return false;
    }
    function setH(e) {
      if (e.type.indexOf('touch') === -1) {
        e.preventDefault();
      }
      var fieldRect = _this.__hue_field.getBoundingClientRect();
      var _ref2 = e.touches && e.touches[0] || e,
          clientY = _ref2.clientY;
      var h = 1 - (clientY - fieldRect.top) / (fieldRect.bottom - fieldRect.top);
      if (h > 1) {
        h = 1;
      } else if (h < 0) {
        h = 0;
      }
      _this.__color.h = h * 360;
      _this.setValue(_this.__color.toOriginal());
      return false;
    }
    return _this2;
  }
  createClass(ColorController, [{
    key: 'updateDisplay',
    value: function updateDisplay() {
      var i = interpret(this.getValue());
      if (i !== false) {
        var mismatch = false;
        Common.each(Color.COMPONENTS, function (component) {
          if (!Common.isUndefined(i[component]) && !Common.isUndefined(this.__color.__state[component]) && i[component] !== this.__color.__state[component]) {
            mismatch = true;
            return {};
          }
        }, this);
        if (mismatch) {
          Common.extend(this.__color.__state, i);
        }
      }
      Common.extend(this.__temp.__state, this.__color.__state);
      this.__temp.a = 1;
      var flip = this.__color.v < 0.5 || this.__color.s > 0.5 ? 255 : 0;
      var _flip = 255 - flip;
      Common.extend(this.__field_knob.style, {
        marginLeft: 100 * this.__color.s - 7 + 'px',
        marginTop: 100 * (1 - this.__color.v) - 7 + 'px',
        backgroundColor: this.__temp.toHexString(),
        border: this.__field_knob_border + 'rgb(' + flip + ',' + flip + ',' + flip + ')'
      });
      this.__hue_knob.style.marginTop = (1 - this.__color.h / 360) * 100 + 'px';
      this.__temp.s = 1;
      this.__temp.v = 1;
      linearGradient(this.__saturation_field, 'left', '#fff', this.__temp.toHexString());
      this.__input.value = this.__color.toString();
      Common.extend(this.__input.style, {
        backgroundColor: this.__color.toHexString(),
        color: 'rgb(' + flip + ',' + flip + ',' + flip + ')',
        textShadow: this.__input_textShadow + 'rgba(' + _flip + ',' + _flip + ',' + _flip + ',.7)'
      });
    }
  }]);
  return ColorController;
}(Controller);
var vendors = ['-moz-', '-o-', '-webkit-', '-ms-', ''];
function linearGradient(elem, x, a, b) {
  elem.style.background = '';
  Common.each(vendors, function (vendor) {
    elem.style.cssText += 'background: ' + vendor + 'linear-gradient(' + x + ', ' + a + ' 0%, ' + b + ' 100%); ';
  });
}
function hueGradient(elem) {
  elem.style.background = '';
  elem.style.cssText += 'background: -moz-linear-gradient(top,  #ff0000 0%, #ff00ff 17%, #0000ff 34%, #00ffff 50%, #00ff00 67%, #ffff00 84%, #ff0000 100%);';
  elem.style.cssText += 'background: -webkit-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);';
  elem.style.cssText += 'background: -o-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);';
  elem.style.cssText += 'background: -ms-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);';
  elem.style.cssText += 'background: linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);';
}

var css = {
  load: function load(url, indoc) {
    var doc = indoc || document;
    var link = doc.createElement('link');
    link.type = 'text/css';
    link.rel = 'stylesheet';
    link.href = url;
    doc.getElementsByTagName('head')[0].appendChild(link);
  },
  inject: function inject(cssContent, indoc) {
    var doc = indoc || document;
    var injected = document.createElement('style');
    injected.type = 'text/css';
    injected.innerHTML = cssContent;
    var head = doc.getElementsByTagName('head')[0];
    try {
      head.appendChild(injected);
    } catch (e) {
    }
  }
};

var saveDialogContents = "<div id=\"dg-save\" class=\"dg dialogue\">\n\n  Here's the new load parameter for your <code>GUI</code>'s constructor:\n\n  <textarea id=\"dg-new-constructor\"></textarea>\n\n  <div id=\"dg-save-locally\">\n\n    <input id=\"dg-local-storage\" type=\"checkbox\"/> Automatically save\n    values to <code>localStorage</code> on exit.\n\n    <div id=\"dg-local-explain\">The values saved to <code>localStorage</code> will\n      override those passed to <code>dat.GUI</code>'s constructor. This makes it\n      easier to work incrementally, but <code>localStorage</code> is fragile,\n      and your friends may not see the same values you do.\n\n    </div>\n\n  </div>\n\n</div>";

var ControllerFactory = function ControllerFactory(object, property) {
  var initialValue = object[property];
  if (Common.isArray(arguments[2]) || Common.isObject(arguments[2])) {
    return new OptionController(object, property, arguments[2]);
  }
  if (Common.isNumber(initialValue)) {
    if (Common.isNumber(arguments[2]) && Common.isNumber(arguments[3])) {
      if (Common.isNumber(arguments[4])) {
        return new NumberControllerSlider(object, property, arguments[2], arguments[3], arguments[4]);
      }
      return new NumberControllerSlider(object, property, arguments[2], arguments[3]);
    }
    if (Common.isNumber(arguments[4])) {
      return new NumberControllerBox(object, property, { min: arguments[2], max: arguments[3], step: arguments[4] });
    }
    return new NumberControllerBox(object, property, { min: arguments[2], max: arguments[3] });
  }
  if (Common.isString(initialValue)) {
    return new StringController(object, property);
  }
  if (Common.isFunction(initialValue)) {
    return new FunctionController(object, property, '');
  }
  if (Common.isBoolean(initialValue)) {
    return new BooleanController(object, property);
  }
  return null;
};

function requestAnimationFrame(callback) {
  setTimeout(callback, 1000 / 60);
}
var requestAnimationFrame$1 = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || requestAnimationFrame;

var CenteredDiv = function () {
  function CenteredDiv() {
    classCallCheck(this, CenteredDiv);
    this.backgroundElement = document.createElement('div');
    Common.extend(this.backgroundElement.style, {
      backgroundColor: 'rgba(0,0,0,0.8)',
      top: 0,
      left: 0,
      display: 'none',
      zIndex: '1000',
      opacity: 0,
      WebkitTransition: 'opacity 0.2s linear',
      transition: 'opacity 0.2s linear'
    });
    dom.makeFullscreen(this.backgroundElement);
    this.backgroundElement.style.position = 'fixed';
    this.domElement = document.createElement('div');
    Common.extend(this.domElement.style, {
      position: 'fixed',
      display: 'none',
      zIndex: '1001',
      opacity: 0,
      WebkitTransition: '-webkit-transform 0.2s ease-out, opacity 0.2s linear',
      transition: 'transform 0.2s ease-out, opacity 0.2s linear'
    });
    document.body.appendChild(this.backgroundElement);
    document.body.appendChild(this.domElement);
    var _this = this;
    dom.bind(this.backgroundElement, 'click', function () {
      _this.hide();
    });
  }
  createClass(CenteredDiv, [{
    key: 'show',
    value: function show() {
      var _this = this;
      this.backgroundElement.style.display = 'block';
      this.domElement.style.display = 'block';
      this.domElement.style.opacity = 0;
      this.domElement.style.webkitTransform = 'scale(1.1)';
      this.layout();
      Common.defer(function () {
        _this.backgroundElement.style.opacity = 1;
        _this.domElement.style.opacity = 1;
        _this.domElement.style.webkitTransform = 'scale(1)';
      });
    }
  }, {
    key: 'hide',
    value: function hide() {
      var _this = this;
      var hide = function hide() {
        _this.domElement.style.display = 'none';
        _this.backgroundElement.style.display = 'none';
        dom.unbind(_this.domElement, 'webkitTransitionEnd', hide);
        dom.unbind(_this.domElement, 'transitionend', hide);
        dom.unbind(_this.domElement, 'oTransitionEnd', hide);
      };
      dom.bind(this.domElement, 'webkitTransitionEnd', hide);
      dom.bind(this.domElement, 'transitionend', hide);
      dom.bind(this.domElement, 'oTransitionEnd', hide);
      this.backgroundElement.style.opacity = 0;
      this.domElement.style.opacity = 0;
      this.domElement.style.webkitTransform = 'scale(1.1)';
    }
  }, {
    key: 'layout',
    value: function layout() {
      this.domElement.style.left = window.innerWidth / 2 - dom.getWidth(this.domElement) / 2 + 'px';
      this.domElement.style.top = window.innerHeight / 2 - dom.getHeight(this.domElement) / 2 + 'px';
    }
  }]);
  return CenteredDiv;
}();

var styleSheet = ___$insertStyle(".dg ul{list-style:none;margin:0;padding:0;width:100%;clear:both}.dg.ac{position:fixed;top:0;left:0;right:0;height:0;z-index:0}.dg:not(.ac) .main{overflow:hidden}.dg.main{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear}.dg.main.taller-than-window{overflow-y:auto}.dg.main.taller-than-window .close-button{opacity:1;margin-top:-1px;border-top:1px solid #2c2c2c}.dg.main ul.closed .close-button{opacity:1 !important}.dg.main:hover .close-button,.dg.main .close-button.drag{opacity:1}.dg.main .close-button{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear;border:0;line-height:19px;height:20px;cursor:pointer;text-align:center;background-color:#000}.dg.main .close-button.close-top{position:relative}.dg.main .close-button.close-bottom{position:absolute}.dg.main .close-button:hover{background-color:#111}.dg.a{float:right;margin-right:15px;overflow-y:visible}.dg.a.has-save>ul.close-top{margin-top:0}.dg.a.has-save>ul.close-bottom{margin-top:27px}.dg.a.has-save>ul.closed{margin-top:0}.dg.a .save-row{top:0;z-index:1002}.dg.a .save-row.close-top{position:relative}.dg.a .save-row.close-bottom{position:fixed}.dg li{-webkit-transition:height .1s ease-out;-o-transition:height .1s ease-out;-moz-transition:height .1s ease-out;transition:height .1s ease-out;-webkit-transition:overflow .1s linear;-o-transition:overflow .1s linear;-moz-transition:overflow .1s linear;transition:overflow .1s linear}.dg li:not(.folder){cursor:auto;height:27px;line-height:27px;padding:0 4px 0 5px}.dg li.folder{padding:0;border-left:4px solid rgba(0,0,0,0)}.dg li.title{cursor:pointer;margin-left:-4px}.dg .closed li:not(.title),.dg .closed ul li,.dg .closed ul li>*{height:0;overflow:hidden;border:0}.dg .cr{clear:both;padding-left:3px;height:27px;overflow:hidden}.dg .property-name{cursor:default;float:left;clear:left;width:40%;overflow:hidden;text-overflow:ellipsis}.dg .cr.function .property-name{width:100%}.dg .c{float:left;width:60%;position:relative}.dg .c input[type=text]{border:0;margin-top:4px;padding:3px;width:100%;float:right}.dg .has-slider input[type=text]{width:30%;margin-left:0}.dg .slider{float:left;width:66%;margin-left:-5px;margin-right:0;height:19px;margin-top:4px}.dg .slider-fg{height:100%}.dg .c input[type=checkbox]{margin-top:7px}.dg .c select{margin-top:5px}.dg .cr.function,.dg .cr.function .property-name,.dg .cr.function *,.dg .cr.boolean,.dg .cr.boolean *{cursor:pointer}.dg .cr.color{overflow:visible}.dg .selector{display:none;position:absolute;margin-left:-9px;margin-top:23px;z-index:10}.dg .c:hover .selector,.dg .selector.drag{display:block}.dg li.save-row{padding:0}.dg li.save-row .button{display:inline-block;padding:0px 6px}.dg.dialogue{background-color:#222;width:460px;padding:15px;font-size:13px;line-height:15px}#dg-new-constructor{padding:10px;color:#222;font-family:Monaco, monospace;font-size:10px;border:0;resize:none;box-shadow:inset 1px 1px 1px #888;word-wrap:break-word;margin:12px 0;display:block;width:440px;overflow-y:scroll;height:100px;position:relative}#dg-local-explain{display:none;font-size:11px;line-height:17px;border-radius:3px;background-color:#333;padding:8px;margin-top:10px}#dg-local-explain code{font-size:10px}#dat-gui-save-locally{display:none}.dg{color:#eee;font:11px 'Lucida Grande', sans-serif;text-shadow:0 -1px 0 #111}.dg.main::-webkit-scrollbar{width:5px;background:#1a1a1a}.dg.main::-webkit-scrollbar-corner{height:0;display:none}.dg.main::-webkit-scrollbar-thumb{border-radius:5px;background:#676767}.dg li:not(.folder){background:#1a1a1a;border-bottom:1px solid #2c2c2c}.dg li.save-row{line-height:25px;background:#dad5cb;border:0}.dg li.save-row select{margin-left:5px;width:108px}.dg li.save-row .button{margin-left:5px;margin-top:1px;border-radius:2px;font-size:9px;line-height:7px;padding:4px 4px 5px 4px;background:#c5bdad;color:#fff;text-shadow:0 1px 0 #b0a58f;box-shadow:0 -1px 0 #b0a58f;cursor:pointer}.dg li.save-row .button.gears{background:#c5bdad url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAANCAYAAAB/9ZQ7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQJJREFUeNpiYKAU/P//PwGIC/ApCABiBSAW+I8AClAcgKxQ4T9hoMAEUrxx2QSGN6+egDX+/vWT4e7N82AMYoPAx/evwWoYoSYbACX2s7KxCxzcsezDh3evFoDEBYTEEqycggWAzA9AuUSQQgeYPa9fPv6/YWm/Acx5IPb7ty/fw+QZblw67vDs8R0YHyQhgObx+yAJkBqmG5dPPDh1aPOGR/eugW0G4vlIoTIfyFcA+QekhhHJhPdQxbiAIguMBTQZrPD7108M6roWYDFQiIAAv6Aow/1bFwXgis+f2LUAynwoIaNcz8XNx3Dl7MEJUDGQpx9gtQ8YCueB+D26OECAAQDadt7e46D42QAAAABJRU5ErkJggg==) 2px 1px no-repeat;height:7px;width:8px}.dg li.save-row .button:hover{background-color:#bab19e;box-shadow:0 -1px 0 #b0a58f}.dg li.folder{border-bottom:0}.dg li.title{padding-left:16px;background:#000 url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlI+hKgFxoCgAOw==) 6px 10px no-repeat;cursor:pointer;border-bottom:1px solid rgba(255,255,255,0.2)}.dg .closed li.title{background-image:url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlGIWqMCbWAEAOw==)}.dg .cr.boolean{border-left:3px solid #806787}.dg .cr.color{border-left:3px solid}.dg .cr.function{border-left:3px solid #e61d5f}.dg .cr.number{border-left:3px solid #2FA1D6}.dg .cr.number input[type=text]{color:#2FA1D6}.dg .cr.string{border-left:3px solid #1ed36f}.dg .cr.string input[type=text]{color:#1ed36f}.dg .cr.function:hover,.dg .cr.boolean:hover{background:#111}.dg .c input[type=text]{background:#303030;outline:none}.dg .c input[type=text]:hover{background:#3c3c3c}.dg .c input[type=text]:focus{background:#494949;color:#fff}.dg .c .slider{background:#303030;cursor:ew-resize}.dg .c .slider-fg{background:#2FA1D6;max-width:100%}.dg .c .slider:hover{background:#3c3c3c}.dg .c .slider:hover .slider-fg{background:#44abda}\n");

css.inject(styleSheet);
var CSS_NAMESPACE = 'dg';
var HIDE_KEY_CODE = 72;
var CLOSE_BUTTON_HEIGHT = 20;
var DEFAULT_DEFAULT_PRESET_NAME = 'Default';
var SUPPORTS_LOCAL_STORAGE = function () {
  try {
    return !!window.localStorage;
  } catch (e) {
    return false;
  }
}();
var SAVE_DIALOGUE = void 0;
var autoPlaceVirgin = true;
var autoPlaceContainer = void 0;
var hide = false;
var hideableGuis = [];
var GUI = function GUI(pars) {
  var _this = this;
  var params = pars || {};
  this.domElement = document.createElement('div');
  this.__ul = document.createElement('ul');
  this.domElement.appendChild(this.__ul);
  dom.addClass(this.domElement, CSS_NAMESPACE);
  this.__folders = {};
  this.__controllers = [];
  this.__rememberedObjects = [];
  this.__rememberedObjectIndecesToControllers = [];
  this.__listening = [];
  params = Common.defaults(params, {
    closeOnTop: false,
    autoPlace: true,
    width: GUI.DEFAULT_WIDTH
  });
  params = Common.defaults(params, {
    resizable: params.autoPlace,
    hideable: params.autoPlace
  });
  if (!Common.isUndefined(params.load)) {
    if (params.preset) {
      params.load.preset = params.preset;
    }
  } else {
    params.load = { preset: DEFAULT_DEFAULT_PRESET_NAME };
  }
  if (Common.isUndefined(params.parent) && params.hideable) {
    hideableGuis.push(this);
  }
  params.resizable = Common.isUndefined(params.parent) && params.resizable;
  if (params.autoPlace && Common.isUndefined(params.scrollable)) {
    params.scrollable = true;
  }
  var useLocalStorage = SUPPORTS_LOCAL_STORAGE && localStorage.getItem(getLocalStorageHash(this, 'isLocal')) === 'true';
  var saveToLocalStorage = void 0;
  var titleRow = void 0;
  Object.defineProperties(this,
  {
    parent: {
      get: function get$$1() {
        return params.parent;
      }
    },
    scrollable: {
      get: function get$$1() {
        return params.scrollable;
      }
    },
    autoPlace: {
      get: function get$$1() {
        return params.autoPlace;
      }
    },
    closeOnTop: {
      get: function get$$1() {
        return params.closeOnTop;
      }
    },
    preset: {
      get: function get$$1() {
        if (_this.parent) {
          return _this.getRoot().preset;
        }
        return params.load.preset;
      },
      set: function set$$1(v) {
        if (_this.parent) {
          _this.getRoot().preset = v;
        } else {
          params.load.preset = v;
        }
        setPresetSelectIndex(this);
        _this.revert();
      }
    },
    width: {
      get: function get$$1() {
        return params.width;
      },
      set: function set$$1(v) {
        params.width = v;
        setWidth(_this, v);
      }
    },
    name: {
      get: function get$$1() {
        return params.name;
      },
      set: function set$$1(v) {
        params.name = v;
        if (titleRow) {
          titleRow.innerHTML = params.name;
        }
      }
    },
    closed: {
      get: function get$$1() {
        return params.closed;
      },
      set: function set$$1(v) {
        params.closed = v;
        if (params.closed) {
          dom.addClass(_this.__ul, GUI.CLASS_CLOSED);
        } else {
          dom.removeClass(_this.__ul, GUI.CLASS_CLOSED);
        }
        this.onResize();
        if (_this.__closeButton) {
          _this.__closeButton.innerHTML = v ? GUI.TEXT_OPEN : GUI.TEXT_CLOSED;
        }
      }
    },
    load: {
      get: function get$$1() {
        return params.load;
      }
    },
    useLocalStorage: {
      get: function get$$1() {
        return useLocalStorage;
      },
      set: function set$$1(bool) {
        if (SUPPORTS_LOCAL_STORAGE) {
          useLocalStorage = bool;
          if (bool) {
            dom.bind(window, 'unload', saveToLocalStorage);
          } else {
            dom.unbind(window, 'unload', saveToLocalStorage);
          }
          localStorage.setItem(getLocalStorageHash(_this, 'isLocal'), bool);
        }
      }
    }
  });
  if (Common.isUndefined(params.parent)) {
    this.closed = params.closed || false;
    dom.addClass(this.domElement, GUI.CLASS_MAIN);
    dom.makeSelectable(this.domElement, false);
    if (SUPPORTS_LOCAL_STORAGE) {
      if (useLocalStorage) {
        _this.useLocalStorage = true;
        var savedGui = localStorage.getItem(getLocalStorageHash(this, 'gui'));
        if (savedGui) {
          params.load = JSON.parse(savedGui);
        }
      }
    }
    this.__closeButton = document.createElement('div');
    this.__closeButton.innerHTML = GUI.TEXT_CLOSED;
    dom.addClass(this.__closeButton, GUI.CLASS_CLOSE_BUTTON);
    if (params.closeOnTop) {
      dom.addClass(this.__closeButton, GUI.CLASS_CLOSE_TOP);
      this.domElement.insertBefore(this.__closeButton, this.domElement.childNodes[0]);
    } else {
      dom.addClass(this.__closeButton, GUI.CLASS_CLOSE_BOTTOM);
      this.domElement.appendChild(this.__closeButton);
    }
    dom.bind(this.__closeButton, 'click', function () {
      _this.closed = !_this.closed;
    });
  } else {
    if (params.closed === undefined) {
      params.closed = true;
    }
    var titleRowName = document.createTextNode(params.name);
    dom.addClass(titleRowName, 'controller-name');
    titleRow = addRow(_this, titleRowName);
    var onClickTitle = function onClickTitle(e) {
      e.preventDefault();
      _this.closed = !_this.closed;
      return false;
    };
    dom.addClass(this.__ul, GUI.CLASS_CLOSED);
    dom.addClass(titleRow, 'title');
    dom.bind(titleRow, 'click', onClickTitle);
    if (!params.closed) {
      this.closed = false;
    }
  }
  if (params.autoPlace) {
    if (Common.isUndefined(params.parent)) {
      if (autoPlaceVirgin) {
        autoPlaceContainer = document.createElement('div');
        dom.addClass(autoPlaceContainer, CSS_NAMESPACE);
        dom.addClass(autoPlaceContainer, GUI.CLASS_AUTO_PLACE_CONTAINER);
        document.body.appendChild(autoPlaceContainer);
        autoPlaceVirgin = false;
      }
      autoPlaceContainer.appendChild(this.domElement);
      dom.addClass(this.domElement, GUI.CLASS_AUTO_PLACE);
    }
    if (!this.parent) {
      setWidth(_this, params.width);
    }
  }
  this.__resizeHandler = function () {
    _this.onResizeDebounced();
  };
  dom.bind(window, 'resize', this.__resizeHandler);
  dom.bind(this.__ul, 'webkitTransitionEnd', this.__resizeHandler);
  dom.bind(this.__ul, 'transitionend', this.__resizeHandler);
  dom.bind(this.__ul, 'oTransitionEnd', this.__resizeHandler);
  this.onResize();
  if (params.resizable) {
    addResizeHandle(this);
  }
  saveToLocalStorage = function saveToLocalStorage() {
    if (SUPPORTS_LOCAL_STORAGE && localStorage.getItem(getLocalStorageHash(_this, 'isLocal')) === 'true') {
      localStorage.setItem(getLocalStorageHash(_this, 'gui'), JSON.stringify(_this.getSaveObject()));
    }
  };
  this.saveToLocalStorageIfPossible = saveToLocalStorage;
  function resetWidth() {
    var root = _this.getRoot();
    root.width += 1;
    Common.defer(function () {
      root.width -= 1;
    });
  }
  if (!params.parent) {
    resetWidth();
  }
};
GUI.toggleHide = function () {
  hide = !hide;
  Common.each(hideableGuis, function (gui) {
    gui.domElement.style.display = hide ? 'none' : '';
  });
};
GUI.CLASS_AUTO_PLACE = 'a';
GUI.CLASS_AUTO_PLACE_CONTAINER = 'ac';
GUI.CLASS_MAIN = 'main';
GUI.CLASS_CONTROLLER_ROW = 'cr';
GUI.CLASS_TOO_TALL = 'taller-than-window';
GUI.CLASS_CLOSED = 'closed';
GUI.CLASS_CLOSE_BUTTON = 'close-button';
GUI.CLASS_CLOSE_TOP = 'close-top';
GUI.CLASS_CLOSE_BOTTOM = 'close-bottom';
GUI.CLASS_DRAG = 'drag';
GUI.DEFAULT_WIDTH = 245;
GUI.TEXT_CLOSED = 'Close Controls';
GUI.TEXT_OPEN = 'Open Controls';
GUI._keydownHandler = function (e) {
  if (document.activeElement.type !== 'text' && (e.which === HIDE_KEY_CODE || e.keyCode === HIDE_KEY_CODE)) {
    GUI.toggleHide();
  }
};
dom.bind(window, 'keydown', GUI._keydownHandler, false);
Common.extend(GUI.prototype,
{
  add: function add(object, property) {
    return _add(this, object, property, {
      factoryArgs: Array.prototype.slice.call(arguments, 2)
    });
  },
  addColor: function addColor(object, property) {
    return _add(this, object, property, {
      color: true
    });
  },
  remove: function remove(controller) {
    this.__ul.removeChild(controller.__li);
    this.__controllers.splice(this.__controllers.indexOf(controller), 1);
    var _this = this;
    Common.defer(function () {
      _this.onResize();
    });
  },
  destroy: function destroy() {
    if (this.parent) {
      throw new Error('Only the root GUI should be removed with .destroy(). ' + 'For subfolders, use gui.removeFolder(folder) instead.');
    }
    if (this.autoPlace) {
      autoPlaceContainer.removeChild(this.domElement);
    }
    var _this = this;
    Common.each(this.__folders, function (subfolder) {
      _this.removeFolder(subfolder);
    });
    dom.unbind(window, 'keydown', GUI._keydownHandler, false);
    removeListeners(this);
  },
  addFolder: function addFolder(name) {
    if (this.__folders[name] !== undefined) {
      throw new Error('You already have a folder in this GUI by the' + ' name "' + name + '"');
    }
    var newGuiParams = { name: name, parent: this };
    newGuiParams.autoPlace = this.autoPlace;
    if (this.load &&
    this.load.folders &&
    this.load.folders[name]) {
      newGuiParams.closed = this.load.folders[name].closed;
      newGuiParams.load = this.load.folders[name];
    }
    var gui = new GUI(newGuiParams);
    this.__folders[name] = gui;
    var li = addRow(this, gui.domElement);
    dom.addClass(li, 'folder');
    return gui;
  },
  removeFolder: function removeFolder(folder) {
    this.__ul.removeChild(folder.domElement.parentElement);
    delete this.__folders[folder.name];
    if (this.load &&
    this.load.folders &&
    this.load.folders[folder.name]) {
      delete this.load.folders[folder.name];
    }
    removeListeners(folder);
    var _this = this;
    Common.each(folder.__folders, function (subfolder) {
      folder.removeFolder(subfolder);
    });
    Common.defer(function () {
      _this.onResize();
    });
  },
  open: function open() {
    this.closed = false;
  },
  close: function close() {
    this.closed = true;
  },
  hide: function hide() {
    this.domElement.style.display = 'none';
  },
  show: function show() {
    this.domElement.style.display = '';
  },
  onResize: function onResize() {
    var root = this.getRoot();
    if (root.scrollable) {
      var top = dom.getOffset(root.__ul).top;
      var h = 0;
      Common.each(root.__ul.childNodes, function (node) {
        if (!(root.autoPlace && node === root.__save_row)) {
          h += dom.getHeight(node);
        }
      });
      if (window.innerHeight - top - CLOSE_BUTTON_HEIGHT < h) {
        dom.addClass(root.domElement, GUI.CLASS_TOO_TALL);
        root.__ul.style.height = window.innerHeight - top - CLOSE_BUTTON_HEIGHT + 'px';
      } else {
        dom.removeClass(root.domElement, GUI.CLASS_TOO_TALL);
        root.__ul.style.height = 'auto';
      }
    }
    if (root.__resize_handle) {
      Common.defer(function () {
        root.__resize_handle.style.height = root.__ul.offsetHeight + 'px';
      });
    }
    if (root.__closeButton) {
      root.__closeButton.style.width = root.width + 'px';
    }
  },
  onResizeDebounced: Common.debounce(function () {
    this.onResize();
  }, 50),
  remember: function remember() {
    if (Common.isUndefined(SAVE_DIALOGUE)) {
      SAVE_DIALOGUE = new CenteredDiv();
      SAVE_DIALOGUE.domElement.innerHTML = saveDialogContents;
    }
    if (this.parent) {
      throw new Error('You can only call remember on a top level GUI.');
    }
    var _this = this;
    Common.each(Array.prototype.slice.call(arguments), function (object) {
      if (_this.__rememberedObjects.length === 0) {
        addSaveMenu(_this);
      }
      if (_this.__rememberedObjects.indexOf(object) === -1) {
        _this.__rememberedObjects.push(object);
      }
    });
    if (this.autoPlace) {
      setWidth(this, this.width);
    }
  },
  getRoot: function getRoot() {
    var gui = this;
    while (gui.parent) {
      gui = gui.parent;
    }
    return gui;
  },
  getSaveObject: function getSaveObject() {
    var toReturn = this.load;
    toReturn.closed = this.closed;
    if (this.__rememberedObjects.length > 0) {
      toReturn.preset = this.preset;
      if (!toReturn.remembered) {
        toReturn.remembered = {};
      }
      toReturn.remembered[this.preset] = getCurrentPreset(this);
    }
    toReturn.folders = {};
    Common.each(this.__folders, function (element, key) {
      toReturn.folders[key] = element.getSaveObject();
    });
    return toReturn;
  },
  save: function save() {
    if (!this.load.remembered) {
      this.load.remembered = {};
    }
    this.load.remembered[this.preset] = getCurrentPreset(this);
    markPresetModified(this, false);
    this.saveToLocalStorageIfPossible();
  },
  saveAs: function saveAs(presetName) {
    if (!this.load.remembered) {
      this.load.remembered = {};
      this.load.remembered[DEFAULT_DEFAULT_PRESET_NAME] = getCurrentPreset(this, true);
    }
    this.load.remembered[presetName] = getCurrentPreset(this);
    this.preset = presetName;
    addPresetOption(this, presetName, true);
    this.saveToLocalStorageIfPossible();
  },
  revert: function revert(gui) {
    Common.each(this.__controllers, function (controller) {
      if (!this.getRoot().load.remembered) {
        controller.setValue(controller.initialValue);
      } else {
        recallSavedValue(gui || this.getRoot(), controller);
      }
      if (controller.__onFinishChange) {
        controller.__onFinishChange.call(controller, controller.getValue());
      }
    }, this);
    Common.each(this.__folders, function (folder) {
      folder.revert(folder);
    });
    if (!gui) {
      markPresetModified(this.getRoot(), false);
    }
  },
  listen: function listen(controller) {
    var init = this.__listening.length === 0;
    this.__listening.push(controller);
    if (init) {
      updateDisplays(this.__listening);
    }
  },
  updateDisplay: function updateDisplay() {
    Common.each(this.__controllers, function (controller) {
      controller.updateDisplay();
    });
    Common.each(this.__folders, function (folder) {
      folder.updateDisplay();
    });
  }
});
function addRow(gui, newDom, liBefore) {
  var li = document.createElement('li');
  if (newDom) {
    li.appendChild(newDom);
  }
  if (liBefore) {
    gui.__ul.insertBefore(li, liBefore);
  } else {
    gui.__ul.appendChild(li);
  }
  gui.onResize();
  return li;
}
function removeListeners(gui) {
  dom.unbind(window, 'resize', gui.__resizeHandler);
  if (gui.saveToLocalStorageIfPossible) {
    dom.unbind(window, 'unload', gui.saveToLocalStorageIfPossible);
  }
}
function markPresetModified(gui, modified) {
  var opt = gui.__preset_select[gui.__preset_select.selectedIndex];
  if (modified) {
    opt.innerHTML = opt.value + '*';
  } else {
    opt.innerHTML = opt.value;
  }
}
function augmentController(gui, li, controller) {
  controller.__li = li;
  controller.__gui = gui;
  Common.extend(controller, {
    options: function options(_options) {
      if (arguments.length > 1) {
        var nextSibling = controller.__li.nextElementSibling;
        controller.remove();
        return _add(gui, controller.object, controller.property, {
          before: nextSibling,
          factoryArgs: [Common.toArray(arguments)]
        });
      }
      if (Common.isArray(_options) || Common.isObject(_options)) {
        var _nextSibling = controller.__li.nextElementSibling;
        controller.remove();
        return _add(gui, controller.object, controller.property, {
          before: _nextSibling,
          factoryArgs: [_options]
        });
      }
    },
    name: function name(_name) {
      controller.__li.firstElementChild.firstElementChild.innerHTML = _name;
      return controller;
    },
    listen: function listen() {
      controller.__gui.listen(controller);
      return controller;
    },
    remove: function remove() {
      controller.__gui.remove(controller);
      return controller;
    }
  });
  if (controller instanceof NumberControllerSlider) {
    var box = new NumberControllerBox(controller.object, controller.property, { min: controller.__min, max: controller.__max, step: controller.__step });
    Common.each(['updateDisplay', 'onChange', 'onFinishChange', 'step', 'min', 'max'], function (method) {
      var pc = controller[method];
      var pb = box[method];
      controller[method] = box[method] = function () {
        var args = Array.prototype.slice.call(arguments);
        pb.apply(box, args);
        return pc.apply(controller, args);
      };
    });
    dom.addClass(li, 'has-slider');
    controller.domElement.insertBefore(box.domElement, controller.domElement.firstElementChild);
  } else if (controller instanceof NumberControllerBox) {
    var r = function r(returned) {
      if (Common.isNumber(controller.__min) && Common.isNumber(controller.__max)) {
        var oldName = controller.__li.firstElementChild.firstElementChild.innerHTML;
        var wasListening = controller.__gui.__listening.indexOf(controller) > -1;
        controller.remove();
        var newController = _add(gui, controller.object, controller.property, {
          before: controller.__li.nextElementSibling,
          factoryArgs: [controller.__min, controller.__max, controller.__step]
        });
        newController.name(oldName);
        if (wasListening) newController.listen();
        return newController;
      }
      return returned;
    };
    controller.min = Common.compose(r, controller.min);
    controller.max = Common.compose(r, controller.max);
  } else if (controller instanceof BooleanController) {
    dom.bind(li, 'click', function () {
      dom.fakeEvent(controller.__checkbox, 'click');
    });
    dom.bind(controller.__checkbox, 'click', function (e) {
      e.stopPropagation();
    });
  } else if (controller instanceof FunctionController) {
    dom.bind(li, 'click', function () {
      dom.fakeEvent(controller.__button, 'click');
    });
    dom.bind(li, 'mouseover', function () {
      dom.addClass(controller.__button, 'hover');
    });
    dom.bind(li, 'mouseout', function () {
      dom.removeClass(controller.__button, 'hover');
    });
  } else if (controller instanceof ColorController) {
    dom.addClass(li, 'color');
    controller.updateDisplay = Common.compose(function (val) {
      li.style.borderLeftColor = controller.__color.toString();
      return val;
    }, controller.updateDisplay);
    controller.updateDisplay();
  }
  controller.setValue = Common.compose(function (val) {
    if (gui.getRoot().__preset_select && controller.isModified()) {
      markPresetModified(gui.getRoot(), true);
    }
    return val;
  }, controller.setValue);
}
function recallSavedValue(gui, controller) {
  var root = gui.getRoot();
  var matchedIndex = root.__rememberedObjects.indexOf(controller.object);
  if (matchedIndex !== -1) {
    var controllerMap = root.__rememberedObjectIndecesToControllers[matchedIndex];
    if (controllerMap === undefined) {
      controllerMap = {};
      root.__rememberedObjectIndecesToControllers[matchedIndex] = controllerMap;
    }
    controllerMap[controller.property] = controller;
    if (root.load && root.load.remembered) {
      var presetMap = root.load.remembered;
      var preset = void 0;
      if (presetMap[gui.preset]) {
        preset = presetMap[gui.preset];
      } else if (presetMap[DEFAULT_DEFAULT_PRESET_NAME]) {
        preset = presetMap[DEFAULT_DEFAULT_PRESET_NAME];
      } else {
        return;
      }
      if (preset[matchedIndex] && preset[matchedIndex][controller.property] !== undefined) {
        var value = preset[matchedIndex][controller.property];
        controller.initialValue = value;
        controller.setValue(value);
      }
    }
  }
}
function _add(gui, object, property, params) {
  if (object[property] === undefined) {
    throw new Error('Object "' + object + '" has no property "' + property + '"');
  }
  var controller = void 0;
  if (params.color) {
    controller = new ColorController(object, property);
  } else {
    var factoryArgs = [object, property].concat(params.factoryArgs);
    controller = ControllerFactory.apply(gui, factoryArgs);
  }
  if (params.before instanceof Controller) {
    params.before = params.before.__li;
  }
  recallSavedValue(gui, controller);
  dom.addClass(controller.domElement, 'c');
  var name = document.createElement('span');
  dom.addClass(name, 'property-name');
  name.innerHTML = controller.property;
  var container = document.createElement('div');
  container.appendChild(name);
  container.appendChild(controller.domElement);
  var li = addRow(gui, container, params.before);
  dom.addClass(li, GUI.CLASS_CONTROLLER_ROW);
  if (controller instanceof ColorController) {
    dom.addClass(li, 'color');
  } else {
    dom.addClass(li, _typeof(controller.getValue()));
  }
  augmentController(gui, li, controller);
  gui.__controllers.push(controller);
  return controller;
}
function getLocalStorageHash(gui, key) {
  return document.location.href + '.' + key;
}
function addPresetOption(gui, name, setSelected) {
  var opt = document.createElement('option');
  opt.innerHTML = name;
  opt.value = name;
  gui.__preset_select.appendChild(opt);
  if (setSelected) {
    gui.__preset_select.selectedIndex = gui.__preset_select.length - 1;
  }
}
function showHideExplain(gui, explain) {
  explain.style.display = gui.useLocalStorage ? 'block' : 'none';
}
function addSaveMenu(gui) {
  var div = gui.__save_row = document.createElement('li');
  dom.addClass(gui.domElement, 'has-save');
  gui.__ul.insertBefore(div, gui.__ul.firstChild);
  dom.addClass(div, 'save-row');
  var gears = document.createElement('span');
  gears.innerHTML = '&nbsp;';
  dom.addClass(gears, 'button gears');
  var button = document.createElement('span');
  button.innerHTML = 'Save';
  dom.addClass(button, 'button');
  dom.addClass(button, 'save');
  var button2 = document.createElement('span');
  button2.innerHTML = 'New';
  dom.addClass(button2, 'button');
  dom.addClass(button2, 'save-as');
  var button3 = document.createElement('span');
  button3.innerHTML = 'Revert';
  dom.addClass(button3, 'button');
  dom.addClass(button3, 'revert');
  var select = gui.__preset_select = document.createElement('select');
  if (gui.load && gui.load.remembered) {
    Common.each(gui.load.remembered, function (value, key) {
      addPresetOption(gui, key, key === gui.preset);
    });
  } else {
    addPresetOption(gui, DEFAULT_DEFAULT_PRESET_NAME, false);
  }
  dom.bind(select, 'change', function () {
    for (var index = 0; index < gui.__preset_select.length; index++) {
      gui.__preset_select[index].innerHTML = gui.__preset_select[index].value;
    }
    gui.preset = this.value;
  });
  div.appendChild(select);
  div.appendChild(gears);
  div.appendChild(button);
  div.appendChild(button2);
  div.appendChild(button3);
  if (SUPPORTS_LOCAL_STORAGE) {
    var explain = document.getElementById('dg-local-explain');
    var localStorageCheckBox = document.getElementById('dg-local-storage');
    var saveLocally = document.getElementById('dg-save-locally');
    saveLocally.style.display = 'block';
    if (localStorage.getItem(getLocalStorageHash(gui, 'isLocal')) === 'true') {
      localStorageCheckBox.setAttribute('checked', 'checked');
    }
    showHideExplain(gui, explain);
    dom.bind(localStorageCheckBox, 'change', function () {
      gui.useLocalStorage = !gui.useLocalStorage;
      showHideExplain(gui, explain);
    });
  }
  var newConstructorTextArea = document.getElementById('dg-new-constructor');
  dom.bind(newConstructorTextArea, 'keydown', function (e) {
    if (e.metaKey && (e.which === 67 || e.keyCode === 67)) {
      SAVE_DIALOGUE.hide();
    }
  });
  dom.bind(gears, 'click', function () {
    newConstructorTextArea.innerHTML = JSON.stringify(gui.getSaveObject(), undefined, 2);
    SAVE_DIALOGUE.show();
    newConstructorTextArea.focus();
    newConstructorTextArea.select();
  });
  dom.bind(button, 'click', function () {
    gui.save();
  });
  dom.bind(button2, 'click', function () {
    var presetName = prompt('Enter a new preset name.');
    if (presetName) {
      gui.saveAs(presetName);
    }
  });
  dom.bind(button3, 'click', function () {
    gui.revert();
  });
}
function addResizeHandle(gui) {
  var pmouseX = void 0;
  gui.__resize_handle = document.createElement('div');
  Common.extend(gui.__resize_handle.style, {
    width: '6px',
    marginLeft: '-3px',
    height: '200px',
    cursor: 'ew-resize',
    position: 'absolute'
  });
  function drag(e) {
    e.preventDefault();
    gui.width += pmouseX - e.clientX;
    gui.onResize();
    pmouseX = e.clientX;
    return false;
  }
  function dragStop() {
    dom.removeClass(gui.__closeButton, GUI.CLASS_DRAG);
    dom.unbind(window, 'mousemove', drag);
    dom.unbind(window, 'mouseup', dragStop);
  }
  function dragStart(e) {
    e.preventDefault();
    pmouseX = e.clientX;
    dom.addClass(gui.__closeButton, GUI.CLASS_DRAG);
    dom.bind(window, 'mousemove', drag);
    dom.bind(window, 'mouseup', dragStop);
    return false;
  }
  dom.bind(gui.__resize_handle, 'mousedown', dragStart);
  dom.bind(gui.__closeButton, 'mousedown', dragStart);
  gui.domElement.insertBefore(gui.__resize_handle, gui.domElement.firstElementChild);
}
function setWidth(gui, w) {
  gui.domElement.style.width = w + 'px';
  if (gui.__save_row && gui.autoPlace) {
    gui.__save_row.style.width = w + 'px';
  }
  if (gui.__closeButton) {
    gui.__closeButton.style.width = w + 'px';
  }
}
function getCurrentPreset(gui, useInitialValues) {
  var toReturn = {};
  Common.each(gui.__rememberedObjects, function (val, index) {
    var savedValues = {};
    var controllerMap = gui.__rememberedObjectIndecesToControllers[index];
    Common.each(controllerMap, function (controller, property) {
      savedValues[property] = useInitialValues ? controller.initialValue : controller.getValue();
    });
    toReturn[index] = savedValues;
  });
  return toReturn;
}
function setPresetSelectIndex(gui) {
  for (var index = 0; index < gui.__preset_select.length; index++) {
    if (gui.__preset_select[index].value === gui.preset) {
      gui.__preset_select.selectedIndex = index;
    }
  }
}
function updateDisplays(controllerArray) {
  if (controllerArray.length !== 0) {
    requestAnimationFrame$1.call(window, function () {
      updateDisplays(controllerArray);
    });
  }
  Common.each(controllerArray, function (c) {
    c.updateDisplay();
  });
}

var color = {
  Color: Color,
  math: ColorMath,
  interpret: interpret
};
var controllers = {
  Controller: Controller,
  BooleanController: BooleanController,
  OptionController: OptionController,
  StringController: StringController,
  NumberController: NumberController,
  NumberControllerBox: NumberControllerBox,
  NumberControllerSlider: NumberControllerSlider,
  FunctionController: FunctionController,
  ColorController: ColorController
};
var dom$1 = { dom: dom };
var gui = { GUI: GUI };
var GUI$1 = GUI;
var index = {
  color: color,
  controllers: controllers,
  dom: dom$1,
  gui: gui,
  GUI: GUI$1
};


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (index);
//# sourceMappingURL=dat.gui.module.js.map


/***/ }),

/***/ "./src/CircleShadowCaster.ts":
/*!***********************************!*\
  !*** ./src/CircleShadowCaster.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CircleShadowCaster = void 0;
const debug_1 = __webpack_require__(/*! @basementuniverse/debug */ "./node_modules/@basementuniverse/debug/build/index.js");
const input_manager_1 = __webpack_require__(/*! @basementuniverse/input-manager */ "./node_modules/@basementuniverse/input-manager/build/index.js");
const vec_1 = __webpack_require__(/*! @basementuniverse/vec */ "./node_modules/@basementuniverse/vec/vec.js");
const uuid_1 = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/commonjs-browser/index.js");
const Game_1 = __webpack_require__(/*! ./Game */ "./src/Game.ts");
const utils_1 = __webpack_require__(/*! ./utils */ "./src/utils.ts");
class CircleShadowCaster {
    constructor(data = {}) {
        var _a;
        this.type = 'CircleShadowCaster';
        this.id = '';
        this.folder = null;
        this.position = (0, vec_1.vec)();
        this.size = CircleShadowCaster.DEFAULT_SIZE;
        this.colour = CircleShadowCaster.DEFAULT_COLOUR;
        this.hovered = false;
        this.selected = false;
        this.dragging = false;
        this.dragOffset = null;
        Object.assign(this, data, {
            id: (_a = data.id) !== null && _a !== void 0 ? _a : (0, uuid_1.v4)().split('-')[0],
        });
        this.folder = Game_1.default.gui.addFolder(`CircleShadowCaster ${this.id}`);
        this.folder.add(this.position, 'x');
        this.folder.add(this.position, 'y');
        this.folder
            .add(this.size, 'x', CircleShadowCaster.MIN_SIZE.x, CircleShadowCaster.MAX_SIZE.x)
            .name('width');
        this.folder
            .add(this.size, 'y', CircleShadowCaster.MIN_SIZE.y, CircleShadowCaster.MAX_SIZE.y)
            .name('height');
        this.folder.add(this, 'colour');
    }
    serialise() {
        return {
            type: this.type,
            id: this.id,
            position: this.position,
            size: this.size,
            colour: this.colour,
        };
    }
    static deserialise(data) {
        return new CircleShadowCaster(data);
    }
    destroy() {
        if (this.folder) {
            Game_1.default.gui.removeFolder(this.folder);
        }
    }
    update(dt) {
        this.hovered = (0, utils_1.pointInRectangle)(input_manager_1.default.mousePosition, {
            position: this.position,
            size: this.size,
        });
        if (input_manager_1.default.mouseDown() && this.selected && !this.dragging) {
            this.dragging = true;
            this.dragOffset = vec_1.vec.sub(input_manager_1.default.mousePosition, this.position);
        }
        if (!input_manager_1.default.mouseDown()) {
            this.dragging = false;
            this.dragOffset = null;
        }
        if (this.selected && this.dragging && this.dragOffset) {
            if (input_manager_1.default.keyDown('ControlLeft')) {
                this.size = (0, utils_1.clampVec)(vec_1.vec.sub(input_manager_1.default.mousePosition, this.position), CircleShadowCaster.MIN_SIZE, CircleShadowCaster.MAX_SIZE);
            }
            else {
                this.position = vec_1.vec.sub(input_manager_1.default.mousePosition, this.dragOffset);
            }
        }
        debug_1.default.border(`CircleShadowCaster ${this.id}`, '', this.position, {
            showLabel: true,
            showValue: false,
            size: this.size,
            borderColour: this.hovered || this.dragging
                ? CircleShadowCaster.DEBUG_HOVER_COLOUR
                : CircleShadowCaster.DEBUG_COLOUR,
            borderStyle: this.selected ? 'solid' : 'dashed',
        });
    }
}
exports.CircleShadowCaster = CircleShadowCaster;
CircleShadowCaster.DEFAULT_SIZE = (0, vec_1.vec)(100, 100);
CircleShadowCaster.DEFAULT_COLOUR = '#ccc';
CircleShadowCaster.DEBUG_COLOUR = '#b05';
CircleShadowCaster.DEBUG_HOVER_COLOUR = '#d27';
CircleShadowCaster.MIN_SIZE = (0, vec_1.vec)(20, 20);
CircleShadowCaster.MAX_SIZE = (0, vec_1.vec)(200, 200);


/***/ }),

/***/ "./src/Game.ts":
/*!*********************!*\
  !*** ./src/Game.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const debug_1 = __webpack_require__(/*! @basementuniverse/debug */ "./node_modules/@basementuniverse/debug/build/index.js");
const input_manager_1 = __webpack_require__(/*! @basementuniverse/input-manager */ "./node_modules/@basementuniverse/input-manager/build/index.js");
const vec_1 = __webpack_require__(/*! @basementuniverse/vec */ "./node_modules/@basementuniverse/vec/vec.js");
const dat = __webpack_require__(/*! dat.gui */ "./node_modules/dat.gui/build/dat.gui.module.js");
const constants = __webpack_require__(/*! ./constants */ "./src/constants.ts");
const LightingScene_1 = __webpack_require__(/*! ./LightingScene */ "./src/LightingScene.ts");
class Game {
    constructor(container) {
        this.frameRate = 0;
        this.frameCount = 0;
        this.scene = null;
        if (container === null) {
            throw new Error('A valid container element must be specified.');
        }
        if (container.tagName.toLowerCase() !== 'canvas') {
            throw new Error('Container element must be a canvas.');
        }
        this.canvas = container;
        const context = this.canvas.getContext('2d');
        if (context !== null) {
            this.context = context;
        }
        else {
            throw new Error("Couldn't get a 2d context.");
        }
        window.addEventListener('resize', this.resize.bind(this), false);
        this.resize();
    }
    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }
    initialise() {
        debug_1.default.initialise();
        input_manager_1.default.initialise();
        Game.gui = new dat.GUI();
        this.lastFrameTime = this.lastFrameCountTime = performance.now();
        this.loop();
        this.scene = new LightingScene_1.LightingScene();
        this.scene.initialise();
    }
    loop() {
        const now = performance.now();
        const elapsedTime = Math.min(now - this.lastFrameTime, constants.FPS_MIN);
        if (now - this.lastFrameCountTime >= 1000) {
            this.lastFrameCountTime = now;
            this.frameRate = this.frameCount;
            this.frameCount = 0;
        }
        this.frameCount++;
        this.lastFrameTime = now;
        debug_1.default.value('FPS', this.frameRate);
        this.update(elapsedTime);
        this.draw();
        window.requestAnimationFrame(this.loop.bind(this));
    }
    update(dt) {
        Game.screen = (0, vec_1.vec)(this.canvas.width, this.canvas.height);
        if (this.scene) {
            this.scene.update(dt);
        }
        input_manager_1.default.update();
    }
    draw() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        if (this.scene) {
            this.scene.draw(this.context);
        }
        debug_1.default.draw(this.context);
    }
}
exports["default"] = Game;


/***/ }),

/***/ "./src/GroundShadowReceiver.ts":
/*!*************************************!*\
  !*** ./src/GroundShadowReceiver.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GroundShadowReceiver = void 0;
const debug_1 = __webpack_require__(/*! @basementuniverse/debug */ "./node_modules/@basementuniverse/debug/build/index.js");
const input_manager_1 = __webpack_require__(/*! @basementuniverse/input-manager */ "./node_modules/@basementuniverse/input-manager/build/index.js");
const vec_1 = __webpack_require__(/*! @basementuniverse/vec */ "./node_modules/@basementuniverse/vec/vec.js");
const uuid_1 = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/commonjs-browser/index.js");
const Game_1 = __webpack_require__(/*! ./Game */ "./src/Game.ts");
const utils_1 = __webpack_require__(/*! ./utils */ "./src/utils.ts");
class GroundShadowReceiver {
    constructor(data = {}) {
        var _a;
        this.type = 'GroundShadowReceiver';
        this.id = '';
        this.folder = null;
        this.position = (0, vec_1.vec)();
        this.size = GroundShadowReceiver.DEFAULT_SIZE;
        this.colour = GroundShadowReceiver.DEFAULT_COLOUR;
        this.hovered = false;
        this.selected = false;
        this.dragging = false;
        this.dragOffset = null;
        Object.assign(this, data, {
            id: (_a = data.id) !== null && _a !== void 0 ? _a : (0, uuid_1.v4)().split('-')[0],
        });
        this.folder = Game_1.default.gui.addFolder(`GroundShadowReceiver ${this.id}`);
        this.folder.add(this.position, 'x');
        this.folder.add(this.position, 'y');
        this.folder
            .add(this.size, 'x', GroundShadowReceiver.MIN_SIZE.x, GroundShadowReceiver.MAX_SIZE.x)
            .name('width');
        this.folder
            .add(this.size, 'y', GroundShadowReceiver.MIN_SIZE.y, GroundShadowReceiver.MAX_SIZE.y)
            .name('height');
        this.folder.add(this, 'colour');
    }
    serialise() {
        return {
            type: this.type,
            id: this.id,
            position: this.position,
            size: this.size,
            colour: this.colour,
        };
    }
    static deserialise(data) {
        return new GroundShadowReceiver(data);
    }
    destroy() {
        if (this.folder) {
            Game_1.default.gui.removeFolder(this.folder);
        }
    }
    update(dt) {
        this.hovered = (0, utils_1.pointInRectangle)(input_manager_1.default.mousePosition, {
            position: this.position,
            size: this.size,
        });
        if (input_manager_1.default.mouseDown() && this.selected && !this.dragging) {
            this.dragging = true;
            this.dragOffset = vec_1.vec.sub(input_manager_1.default.mousePosition, this.position);
        }
        if (!input_manager_1.default.mouseDown()) {
            this.dragging = false;
            this.dragOffset = null;
        }
        if (this.selected && this.dragging && this.dragOffset) {
            if (input_manager_1.default.keyDown('ControlLeft')) {
                this.size = (0, utils_1.clampVec)(vec_1.vec.sub(input_manager_1.default.mousePosition, this.position), GroundShadowReceiver.MIN_SIZE, GroundShadowReceiver.MAX_SIZE);
            }
            else {
                this.position = vec_1.vec.sub(input_manager_1.default.mousePosition, this.dragOffset);
            }
        }
        debug_1.default.border(`GroundShadowReceiver ${this.id}`, '', this.position, {
            showLabel: false,
            showValue: false,
            size: this.size,
            borderColour: this.hovered || this.dragging
                ? GroundShadowReceiver.DEBUG_HOVER_COLOUR
                : GroundShadowReceiver.DEBUG_COLOUR,
            borderStyle: this.selected ? 'solid' : 'dashed',
        });
    }
    draw(context) {
        context.save();
        context.fillStyle = this.colour;
        context.fillRect(this.position.x, this.position.y, this.size.x, this.size.y);
        context.restore();
    }
    drawMask(context) {
        context.save();
        context.fillStyle = 'black';
        context.fillRect(this.position.x, this.position.y, this.size.x, this.size.y);
        context.restore();
    }
}
exports.GroundShadowReceiver = GroundShadowReceiver;
GroundShadowReceiver.DEFAULT_SIZE = (0, vec_1.vec)(200, 200);
GroundShadowReceiver.DEFAULT_COLOUR = '#ddd';
GroundShadowReceiver.DEBUG_COLOUR = '#05b';
GroundShadowReceiver.DEBUG_HOVER_COLOUR = '#38f';
GroundShadowReceiver.MIN_SIZE = (0, vec_1.vec)(20, 20);
GroundShadowReceiver.MAX_SIZE = (0, vec_1.vec)(600, 600);


/***/ }),

/***/ "./src/Light.ts":
/*!**********************!*\
  !*** ./src/Light.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Light = void 0;
const debug_1 = __webpack_require__(/*! @basementuniverse/debug */ "./node_modules/@basementuniverse/debug/build/index.js");
const input_manager_1 = __webpack_require__(/*! @basementuniverse/input-manager */ "./node_modules/@basementuniverse/input-manager/build/index.js");
const parsecolor_1 = __webpack_require__(/*! @basementuniverse/parsecolor */ "./node_modules/@basementuniverse/parsecolor/parsecolor.js");
const utils_1 = __webpack_require__(/*! @basementuniverse/utils */ "./node_modules/@basementuniverse/utils/utils.js");
const vec_1 = __webpack_require__(/*! @basementuniverse/vec */ "./node_modules/@basementuniverse/vec/vec.js");
const uuid_1 = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/commonjs-browser/index.js");
const Game_1 = __webpack_require__(/*! ./Game */ "./src/Game.ts");
const LightingSystem_1 = __webpack_require__(/*! ./LightingSystem */ "./src/LightingSystem.ts");
const types_1 = __webpack_require__(/*! ./types */ "./src/types.ts");
const utils_2 = __webpack_require__(/*! ./utils */ "./src/utils.ts");
class Light {
    constructor(data = {}) {
        var _a, _b, _c, _d;
        this.type = 'Light';
        this.id = '';
        this.folder = null;
        this.position = (0, vec_1.vec)();
        this._radius = Light.DEFAULT_RADIUS;
        this._colour = Light.DEFAULT_COLOUR;
        this._intensity = Light.DEFAULT_INTENSITY;
        this.hovered = false;
        this.selected = false;
        this.dragging = false;
        this.dragOffset = null;
        this.dirty = true;
        Object.assign(this, (0, utils_1.exclude)(data, 'radius', 'colour', 'intensity'), {
            id: (_a = data.id) !== null && _a !== void 0 ? _a : (0, uuid_1.v4)().split('-')[0],
            _radius: (_b = data.radius) !== null && _b !== void 0 ? _b : Light.DEFAULT_RADIUS,
            _colour: (_c = data.colour) !== null && _c !== void 0 ? _c : Light.DEFAULT_COLOUR,
            _intensity: (_d = data.intensity) !== null && _d !== void 0 ? _d : Light.DEFAULT_INTENSITY,
        });
        this.folder = Game_1.default.gui.addFolder(`Light ${this.id}`);
        this.folder.add(this.position, 'x');
        this.folder.add(this.position, 'y');
        this.folder.add(this, 'radius', Light.MIN_RADIUS, Light.MAX_RADIUS);
        this.folder.add(this, 'colour');
        this.folder.add(this, 'intensity', 0, 1);
        this.colourObject = (0, parsecolor_1.parseColor)(this._colour);
        this.lightCanvas = document.createElement('canvas');
        this.lightCanvas.width = this.lightCanvas.height = this._radius * 2;
        this.lightContext = this.lightCanvas.getContext('2d');
        this.groundLightCanvas = document.createElement('canvas');
        this.groundLightCanvas.width = this.groundLightCanvas.height =
            this._radius * 2;
        this.groundLightContext = this.groundLightCanvas.getContext('2d');
        this.wallLightCanvas = document.createElement('canvas');
        this.wallLightCanvas.width = this.wallLightCanvas.height = this._radius * 2;
        this.wallLightContext = this.wallLightCanvas.getContext('2d');
    }
    get radius() {
        return this._radius;
    }
    set radius(value) {
        this._radius = value;
        this.dirty = true;
    }
    get colour() {
        return this._colour;
    }
    set colour(value) {
        this._colour = value;
        this.colourObject = (0, parsecolor_1.parseColor)(value);
        this.dirty = true;
    }
    get intensity() {
        return this._intensity;
    }
    set intensity(value) {
        this._intensity = value;
        this.dirty = true;
    }
    serialise() {
        return {
            type: this.type,
            id: this.id,
            position: this.position,
            radius: this._radius,
            colour: this._colour,
            intensity: this._intensity,
        };
    }
    static deserialise(data) {
        return new Light(data);
    }
    destroy() {
        if (this.folder) {
            Game_1.default.gui.removeFolder(this.folder);
        }
    }
    update(dt) {
        this.hovered =
            vec_1.vec.len(vec_1.vec.sub(input_manager_1.default.mousePosition, this.position)) <
                Light.HOVER_RADIUS;
        if (input_manager_1.default.mouseDown() && this.selected && !this.dragging) {
            this.dragging = true;
            this.dragOffset = vec_1.vec.sub(input_manager_1.default.mousePosition, this.position);
        }
        if (!input_manager_1.default.mouseDown()) {
            this.dragging = false;
            this.dragOffset = null;
        }
        if (this.selected && this.dragging && this.dragOffset) {
            if (input_manager_1.default.keyDown('ControlLeft')) {
                this.radius = (0, utils_1.clamp)(vec_1.vec.len(vec_1.vec.sub(input_manager_1.default.mousePosition, this.position)), Light.MIN_RADIUS, Light.MAX_RADIUS);
            }
            else {
                this.position = vec_1.vec.sub(input_manager_1.default.mousePosition, this.dragOffset);
            }
        }
        debug_1.default.border(`Light ${this.id} border`, '', this.position, {
            showLabel: false,
            showValue: false,
            borderShape: 'circle',
            radius: this.radius,
            borderColour: this.hovered || this.dragging
                ? Light.DEBUG_HOVER_COLOUR
                : Light.DEBUG_COLOUR,
            borderStyle: this.selected ? 'solid' : 'dashed',
        });
        debug_1.default.marker(`Light ${this.id}`, this.id, this.position, {
            showLabel: false,
            markerColour: this.hovered || this.dragging
                ? Light.DEBUG_HOVER_COLOUR
                : Light.DEBUG_COLOUR,
        });
    }
    prepare(groundShadowReceivers, wallShadowReceivers, regionShadowCasters, spriteShadowCasters, circleShadowCasters) {
        var _a, _b;
        if (this.dirty) {
            this.lightCanvas.width = this.lightCanvas.height = this._radius * 2;
            this.lightContext.save();
            this.lightContext.fillStyle = 'black';
            this.lightContext.fillRect(0, 0, this.lightCanvas.width, this.lightCanvas.height);
            const gradient = this.lightContext.createRadialGradient(this._radius, this._radius, this._radius * this._intensity, this._radius, this._radius, this._radius);
            gradient.addColorStop(0, (0, utils_2.colourToString)(this.colourObject));
            gradient.addColorStop(1, 'black');
            this.lightContext.fillStyle = gradient;
            this.lightContext.beginPath();
            this.lightContext.arc(this._radius, this._radius, this._radius, 0, Math.PI * 2);
            this.lightContext.fill();
            this.lightContext.restore();
        }
        this.groundLightCanvas.width = this.groundLightCanvas.height =
            this._radius * 2;
        this.groundLightContext.save();
        this.groundLightContext.drawImage(this.lightCanvas, 0, 0);
        this.groundLightContext.fillStyle = 'black';
        this.groundLightContext.translate(-this.position.x + this._radius, -this.position.y + this._radius);
        const lightRectangle = {
            position: vec_1.vec.sub(this.position, (0, vec_1.vec)(this._radius)),
            size: (0, vec_1.vec)(this._radius * 2),
        };
        const shadows = [];
        for (const caster of regionShadowCasters) {
            const casterRectangle = {
                position: caster.position,
                size: caster.size,
            };
            if ((0, utils_2.rectanglesIntersect)(lightRectangle, casterRectangle)) {
                const shadow = {
                    caster,
                    ...this.prepareRegionShadow(casterRectangle),
                };
                shadows.push((0, utils_1.exclude)(shadow, 'vertices'));
                (0, utils_2.polygon)(this.groundLightContext, ...shadow.vertices);
                this.groundLightContext.fill();
            }
        }
        this.groundLightContext.restore();
        this.wallLightCanvas.width = this.wallLightCanvas.height = this._radius * 2;
        this.wallLightContext.save();
        this.wallLightContext.drawImage(this.lightCanvas, 0, 0);
        this.wallLightContext.fillStyle = 'black';
        this.wallLightContext.translate(-this.position.x + this._radius, -this.position.y + this._radius - LightingSystem_1.LightingSystem.WALL_LIGHTING_Y_OFFSET);
        for (const wall of wallShadowReceivers) {
            const wallRectangle = {
                position: wall.position,
                size: wall.size,
            };
            const wallInterval = (0, utils_2.rectangleToInterval)(wallRectangle);
            if ((0, utils_2.rectanglesIntersect)(lightRectangle, wallRectangle)) {
                if (this.position.y < wallInterval.bottom) {
                    this.wallLightContext.save();
                    this.wallLightContext.globalAlpha = (0, utils_1.clamp)((0, utils_1.remap)(wallInterval.bottom - this.position.y, 0, Light.WALL_LIGHT_CUTOFF_DISTANCE, 0, 1), 0, 1);
                    this.wallLightContext.fillRect(wallRectangle.position.x, wallRectangle.position.y, wallRectangle.size.x, wallRectangle.size.y);
                    this.wallLightContext.restore();
                }
                for (const shadow of shadows) {
                    const shadowCasterInterval = (0, utils_2.rectangleToInterval)({
                        position: shadow.caster.position,
                        size: shadow.caster.size,
                    });
                    if (wall.id === shadow.caster.id) {
                        continue;
                    }
                    if (wallInterval.bottom >= shadowCasterInterval.bottom) {
                        continue;
                    }
                    if (shadow.leftEdge === null && shadow.rightEdge === null) {
                        continue;
                    }
                    let leftIntercept = null;
                    if (shadow.leftEdge) {
                        leftIntercept = (0, utils_2.lineYIntercept)(shadow.leftEdge, wallInterval.bottom);
                    }
                    let rightIntercept = null;
                    if (shadow.rightEdge) {
                        rightIntercept = (0, utils_2.lineYIntercept)(shadow.rightEdge, wallInterval.bottom);
                    }
                    if (leftIntercept === null && rightIntercept === null) {
                        continue;
                    }
                    if (shadowCasterInterval.top < wallInterval.bottom) {
                        if (shadowCasterInterval.right < wallInterval.left &&
                            rightIntercept &&
                            shadow.rightEdge &&
                            rightIntercept > shadow.rightEdge.start.x &&
                            shadow.rightEdge.start.x > shadow.rightEdge.end.x) {
                            continue;
                        }
                        if (shadowCasterInterval.left > wallInterval.right &&
                            leftIntercept &&
                            shadow.leftEdge &&
                            leftIntercept < shadow.leftEdge.start.x &&
                            shadow.leftEdge.start.x < shadow.leftEdge.end.x) {
                            continue;
                        }
                    }
                    const min = Math.max(wallInterval.left, shadow.leftEdge
                        ? (_a = (0, utils_2.lineYIntercept)(shadow.leftEdge, wallInterval.bottom)) !== null && _a !== void 0 ? _a : -Infinity
                        : -Infinity);
                    const max = Math.min(wallInterval.right, shadow.rightEdge
                        ? (_b = (0, utils_2.lineYIntercept)(shadow.rightEdge, wallInterval.bottom)) !== null && _b !== void 0 ? _b : Infinity
                        : Infinity);
                    if (min >= max) {
                        continue;
                    }
                    if (min > wallInterval.right || max < wallInterval.left) {
                        continue;
                    }
                    if ((0, utils_2.overlap1d)({
                        start: min,
                        end: max,
                    }, {
                        start: wallInterval.left,
                        end: wallInterval.right,
                    })) {
                        this.wallLightContext.fillRect(min, wallInterval.top, max - min, wall.size.y);
                    }
                }
            }
        }
        this.wallLightContext.restore();
    }
    lineIsFacing(line) {
        const edge = vec_1.vec.nor(vec_1.vec.sub(line.end, line.start));
        const edgeNormal = (0, vec_1.vec)(edge.y, -edge.x);
        const lightNormal = vec_1.vec.nor(vec_1.vec.sub(vec_1.vec.mul(vec_1.vec.add(line.start, line.end), 0.5), this.position));
        return vec_1.vec.dot(lightNormal, edgeNormal) <= 0;
    }
    prepareRegionShadow(shadowCasterRectangle) {
        const lightPosition = vec_1.vec.cpy(this.position);
        const lightRadius = this._radius;
        const shadowCasterInterval = (0, utils_2.rectangleToInterval)(shadowCasterRectangle);
        const shadowCasterVertices = (0, utils_2.rectangleVertices)(shadowCasterRectangle);
        const shadowEdges = [];
        for (let i = 0; i < shadowCasterVertices.length; i++) {
            const previous = (0, utils_1.at)(shadowCasterVertices, i - 1);
            const current = shadowCasterVertices[i];
            if (!this.lineIsFacing({ start: previous, end: current })) {
                const vertex1 = vec_1.vec.sub(previous, lightPosition);
                const vertex2 = vec_1.vec.sub(current, lightPosition);
                shadowEdges.push({
                    start: previous,
                    end: vec_1.vec.add(previous, vec_1.vec.mul(vec_1.vec.nor(vertex1), Math.max(Light.SHADOW_BUFFER, lightRadius + Light.SHADOW_BUFFER - vec_1.vec.len(vertex1)))),
                }, {
                    start: current,
                    end: vec_1.vec.add(current, vec_1.vec.mul(vec_1.vec.nor(vertex2), Math.max(Light.SHADOW_BUFFER, lightRadius + Light.SHADOW_BUFFER - vec_1.vec.len(vertex2)))),
                });
            }
        }
        let leftEdge = null;
        let rightEdge = null;
        const shadowPolygon = [];
        switch ((0, utils_2.sector2d)(this.position, shadowCasterInterval)) {
            case types_1.Sector2d.TopLeft:
                if (shadowEdges.length !== 4) {
                    break;
                }
                leftEdge = null;
                rightEdge = null;
                shadowPolygon.push(shadowEdges[0].start, shadowEdges[0].end, (0, vec_1.vec)(shadowEdges[0].end.x, shadowEdges[3].end.y), shadowEdges[3].end, shadowEdges[3].start, shadowEdges[2].start);
                break;
            case types_1.Sector2d.Top:
                if (shadowEdges.length !== 6) {
                    break;
                }
                leftEdge = null;
                rightEdge = null;
                shadowPolygon.push(shadowEdges[2].start, shadowEdges[2].end, (context) => {
                    context.arc(lightPosition.x, lightPosition.y, lightRadius + Light.SHADOW_BUFFER, vec_1.vec.rad(vec_1.vec.sub(shadowEdges[2].end, shadowEdges[2].start)), vec_1.vec.rad(vec_1.vec.sub(shadowEdges[1].end, shadowEdges[1].start)), false);
                }, shadowEdges[1].start, shadowEdges[5].start, shadowEdges[4].start);
                break;
            case types_1.Sector2d.TopRight:
                if (shadowEdges.length !== 4) {
                    break;
                }
                leftEdge = null;
                rightEdge = null;
                shadowPolygon.push(shadowEdges[2].start, shadowEdges[2].end, (0, vec_1.vec)(shadowEdges[1].end.x, shadowEdges[2].end.y), shadowEdges[1].end, shadowEdges[1].start, shadowEdges[3].start);
                break;
            case types_1.Sector2d.Left:
                if (shadowEdges.length !== 6) {
                    break;
                }
                leftEdge = shadowEdges[0];
                rightEdge = null;
                shadowPolygon.push(shadowEdges[0].start, shadowEdges[0].end, (context) => {
                    context.arc(lightPosition.x, lightPosition.y, lightRadius + Light.SHADOW_BUFFER, vec_1.vec.rad(vec_1.vec.sub(shadowEdges[0].end, shadowEdges[0].start)), vec_1.vec.rad(vec_1.vec.sub(shadowEdges[5].end, shadowEdges[5].start)), false);
                }, shadowEdges[5].start, shadowEdges[4].start, shadowEdges[2].start);
                break;
            case types_1.Sector2d.Inside:
                break;
            case types_1.Sector2d.Right:
                if (shadowEdges.length !== 6) {
                    break;
                }
                leftEdge = null;
                rightEdge = shadowEdges[3];
                shadowPolygon.push(shadowEdges[4].start, shadowEdges[4].end, (context) => {
                    context.arc(lightPosition.x, lightPosition.y, lightRadius + Light.SHADOW_BUFFER, vec_1.vec.rad(vec_1.vec.sub(shadowEdges[4].end, shadowEdges[4].start)), vec_1.vec.rad(vec_1.vec.sub(shadowEdges[3].end, shadowEdges[3].start)), false);
                }, shadowEdges[3].start, shadowEdges[2].start, shadowEdges[5].start);
                break;
            case types_1.Sector2d.BottomLeft:
                if (shadowEdges.length !== 4) {
                    break;
                }
                leftEdge = shadowEdges[0];
                rightEdge = shadowEdges[3];
                shadowPolygon.push(shadowEdges[0].start, shadowEdges[0].end, (0, vec_1.vec)(shadowEdges[3].end.x, shadowEdges[0].end.y), shadowEdges[3].end, shadowEdges[3].start, shadowEdges[2].start);
                break;
            case types_1.Sector2d.Bottom:
                if (shadowEdges.length !== 6) {
                    break;
                }
                leftEdge = shadowEdges[0];
                rightEdge = shadowEdges[5];
                shadowPolygon.push(shadowEdges[0].start, shadowEdges[0].end, (context) => {
                    context.arc(lightPosition.x, lightPosition.y, lightRadius + Light.SHADOW_BUFFER, vec_1.vec.rad(vec_1.vec.sub(shadowEdges[0].end, shadowEdges[0].start)), vec_1.vec.rad(vec_1.vec.sub(shadowEdges[5].end, shadowEdges[5].start)), false);
                }, shadowEdges[5].start, shadowEdges[4].start, shadowEdges[2].start);
                break;
            case types_1.Sector2d.BottomRight:
                if (shadowEdges.length !== 4) {
                    break;
                }
                leftEdge = shadowEdges[0];
                rightEdge = shadowEdges[3];
                shadowPolygon.push(shadowEdges[0].start, shadowEdges[0].end, (0, vec_1.vec)(shadowEdges[0].end.x, shadowEdges[3].end.y), shadowEdges[3].end, shadowEdges[3].start, shadowEdges[2].start);
                break;
        }
        return {
            shadowCasterInterval,
            leftEdge,
            rightEdge,
            vertices: shadowPolygon,
        };
    }
}
exports.Light = Light;
Light.DEFAULT_RADIUS = 100;
Light.DEFAULT_COLOUR = 'white';
Light.DEFAULT_INTENSITY = 0.2;
Light.HOVER_RADIUS = 20;
Light.DEBUG_COLOUR = '#f50';
Light.DEBUG_HOVER_COLOUR = '#f90';
Light.MIN_RADIUS = 10;
Light.MAX_RADIUS = 400;
Light.SHADOW_BUFFER = 20;
Light.WALL_LIGHT_CUTOFF_DISTANCE = 30;


/***/ }),

/***/ "./src/LightingScene.ts":
/*!******************************!*\
  !*** ./src/LightingScene.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LightingScene = void 0;
const debug_1 = __webpack_require__(/*! @basementuniverse/debug */ "./node_modules/@basementuniverse/debug/build/index.js");
const input_manager_1 = __webpack_require__(/*! @basementuniverse/input-manager */ "./node_modules/@basementuniverse/input-manager/build/index.js");
const vec_1 = __webpack_require__(/*! @basementuniverse/vec */ "./node_modules/@basementuniverse/vec/vec.js");
const CircleShadowCaster_1 = __webpack_require__(/*! ./CircleShadowCaster */ "./src/CircleShadowCaster.ts");
const Game_1 = __webpack_require__(/*! ./Game */ "./src/Game.ts");
const GroundShadowReceiver_1 = __webpack_require__(/*! ./GroundShadowReceiver */ "./src/GroundShadowReceiver.ts");
const Light_1 = __webpack_require__(/*! ./Light */ "./src/Light.ts");
const LightingSystem_1 = __webpack_require__(/*! ./LightingSystem */ "./src/LightingSystem.ts");
const RegionShadowCaster_1 = __webpack_require__(/*! ./RegionShadowCaster */ "./src/RegionShadowCaster.ts");
const SpriteShadowCaster_1 = __webpack_require__(/*! ./SpriteShadowCaster */ "./src/SpriteShadowCaster.ts");
const WallShadowReceiver_1 = __webpack_require__(/*! ./WallShadowReceiver */ "./src/WallShadowReceiver.ts");
class LightingScene {
    constructor() {
        this.groundShadowReceivers = [];
        this.wallShadowReceivers = [];
        this.regionShadowCasters = [];
        this.spriteShadowCasters = [];
        this.circleShadowCasters = [];
        this.selected = null;
        this.mode = 'normal';
    }
    initialise() {
        this.lightingSystem = new LightingSystem_1.LightingSystem();
        this.lightingSystem.initialise();
        Game_1.default.gui.add({ click: () => this.save() }, 'click').name('Save');
        Game_1.default.gui.add({ click: () => this.load() }, 'click').name('Load');
        Game_1.default.gui
            .add({ click: () => (this.mode = 'nolighting') }, 'click')
            .name('No lighting');
        Game_1.default.gui
            .add({ click: () => (this.mode = 'normal') }, 'click')
            .name('Normal');
        Game_1.default.gui
            .add({ click: () => (this.mode = 'groundmask') }, 'click')
            .name('Ground mask');
        Game_1.default.gui
            .add({ click: () => (this.mode = 'wallmask') }, 'click')
            .name('Wall mask');
        Game_1.default.gui
            .add({ click: () => (this.mode = 'groundmaskedlightmap') }, 'click')
            .name('Ground-masked lightmap');
        Game_1.default.gui
            .add({ click: () => (this.mode = 'wallmaskedlightmap') }, 'click')
            .name('Wall-masked lightmap');
        Game_1.default.gui
            .add({ click: () => (this.mode = 'lightmap') }, 'click')
            .name('Light map');
        Game_1.default.gui.add(this.lightingSystem, 'ambientLightColour').listen();
    }
    save() {
        localStorage.setItem('lighting_demo_test_state', JSON.stringify({
            ambientLightColour: this.lightingSystem.ambientLightColour,
            groundShadowReceivers: this.groundShadowReceivers.map(g => g.serialise()),
            wallShadowReceivers: this.wallShadowReceivers.map(w => w.serialise()),
            regionShadowCasters: this.regionShadowCasters.map(r => r.serialise()),
            spriteShadowCasters: this.spriteShadowCasters.map(s => s.serialise()),
            circleShadowCasters: this.circleShadowCasters.map(c => c.serialise()),
            lights: this.lightingSystem.lights.map(l => l.serialise()),
        }));
    }
    load() {
        const stateData = localStorage.getItem('lighting_demo_test_state');
        if (!stateData) {
            return;
        }
        let state;
        try {
            state = JSON.parse(stateData);
        }
        catch (e) {
            console.error('State data is invalid');
            return;
        }
        this.lightingSystem.ambientLightColour = state.ambientLightColour;
        this.groundShadowReceivers.forEach(g => g.destroy());
        this.groundShadowReceivers = state.groundShadowReceivers.map((g) => GroundShadowReceiver_1.GroundShadowReceiver.deserialise(g));
        this.wallShadowReceivers.forEach(w => w.destroy());
        this.wallShadowReceivers = state.wallShadowReceivers.map((w) => WallShadowReceiver_1.WallShadowReceiver.deserialise(w));
        this.regionShadowCasters.forEach(r => r.destroy());
        this.regionShadowCasters = state.regionShadowCasters.map((r) => RegionShadowCaster_1.RegionShadowCaster.deserialise(r));
        this.spriteShadowCasters.forEach(s => s.destroy());
        this.spriteShadowCasters = state.spriteShadowCasters.map((s) => SpriteShadowCaster_1.SpriteShadowCaster.deserialise(s));
        this.circleShadowCasters.forEach(c => c.destroy());
        this.circleShadowCasters = state.circleShadowCasters.map((c) => CircleShadowCaster_1.CircleShadowCaster.deserialise(c));
        this.lightingSystem.lights.forEach(light => light.destroy());
        this.lightingSystem.lights = state.lights.map((light) => Light_1.Light.deserialise(light));
    }
    update(dt) {
        debug_1.default.value('Press SHIFT-L to create a new Light', '');
        debug_1.default.value('Press SHIFT-G to create a new GroundShadowReceiver', '');
        debug_1.default.value('Press SHIFT-W to create a new WallShadowReceiver', '');
        debug_1.default.value('Press SHIFT-R to create a new RegionShadowCaster', '');
        debug_1.default.value('Press SHIFT-S to create a new SpriteShadowCaster', '');
        debug_1.default.value('Press SHIFT-C to create a new CircleShadowCaster', '');
        debug_1.default.value('CTRL-drag to resize', '');
        this.groundShadowReceivers.forEach(ground => ground.update(dt));
        this.wallShadowReceivers.forEach(wall => wall.update(dt));
        this.regionShadowCasters.forEach(region => region.update(dt));
        this.spriteShadowCasters.forEach(sprite => sprite.update(dt));
        this.circleShadowCasters.forEach(circle => circle.update(dt));
        this.lightingSystem.update(dt);
        this.groundShadowReceivers = this.groundShadowReceivers.sort((a, b) => a.position.y + a.size.y - (b.position.y + b.size.y));
        this.wallShadowReceivers = this.wallShadowReceivers.sort((a, b) => a.position.y + a.size.y - (b.position.y + b.size.y));
        if (input_manager_1.default.mousePressed()) {
            let selectedGroundShadowReceiver = this.groundShadowReceivers.find(g => g.hovered) || null;
            let selectedWallShadowReceiver = this.wallShadowReceivers.find(w => w.hovered) || null;
            let selectedRegionShadowCaster = this.regionShadowCasters.find(r => r.hovered) || null;
            let selectedSpriteShadowCaster = this.spriteShadowCasters.find(s => s.hovered) || null;
            let selectedCircleShadowCaster = this.circleShadowCasters.find(c => c.hovered) || null;
            let selectedLight = this.lightingSystem.lights.find(light => light.hovered) || null;
            this.selected =
                selectedLight ||
                    selectedWallShadowReceiver ||
                    selectedRegionShadowCaster ||
                    selectedSpriteShadowCaster ||
                    selectedCircleShadowCaster ||
                    selectedGroundShadowReceiver ||
                    null;
            this.groundShadowReceivers.forEach(g => {
                g.selected = false;
            });
            this.wallShadowReceivers.forEach(w => {
                w.selected = false;
            });
            this.regionShadowCasters.forEach(r => {
                r.selected = false;
            });
            this.spriteShadowCasters.forEach(s => {
                s.selected = false;
            });
            this.circleShadowCasters.forEach(c => {
                c.selected = false;
            });
            this.lightingSystem.lights.forEach(light => {
                light.selected = false;
            });
            if (this.selected) {
                this.selected.selected = true;
            }
        }
        if (input_manager_1.default.keyDown('ShiftLeft')) {
            if (input_manager_1.default.keyPressed('KeyG')) {
                this.groundShadowReceivers.push(new GroundShadowReceiver_1.GroundShadowReceiver({
                    position: vec_1.vec.cpy(input_manager_1.default.mousePosition),
                }));
            }
            if (input_manager_1.default.keyPressed('KeyW')) {
                this.wallShadowReceivers.push(new WallShadowReceiver_1.WallShadowReceiver({
                    position: vec_1.vec.cpy(input_manager_1.default.mousePosition),
                }));
            }
            if (input_manager_1.default.keyPressed('KeyR')) {
                this.regionShadowCasters.push(new RegionShadowCaster_1.RegionShadowCaster({
                    position: vec_1.vec.cpy(input_manager_1.default.mousePosition),
                }));
            }
            if (input_manager_1.default.keyPressed('KeyS')) {
                this.spriteShadowCasters.push(new SpriteShadowCaster_1.SpriteShadowCaster({
                    position: vec_1.vec.cpy(input_manager_1.default.mousePosition),
                }));
            }
            if (input_manager_1.default.keyPressed('KeyC')) {
                this.circleShadowCasters.push(new CircleShadowCaster_1.CircleShadowCaster({
                    position: vec_1.vec.cpy(input_manager_1.default.mousePosition),
                }));
            }
            if (input_manager_1.default.keyPressed('KeyL')) {
                this.lightingSystem.lights.push(new Light_1.Light({
                    position: vec_1.vec.cpy(input_manager_1.default.mousePosition),
                }));
            }
        }
        if (input_manager_1.default.keyPressed('Delete') && this.selected) {
            switch (this.selected.type) {
                case 'GroundShadowReceiver':
                    this.groundShadowReceivers = this.groundShadowReceivers.filter(g => g.id !== this.selected.id);
                    break;
                case 'WallShadowReceiver':
                    this.wallShadowReceivers = this.wallShadowReceivers.filter(w => w.id !== this.selected.id);
                    break;
                case 'RegionShadowCaster':
                    this.regionShadowCasters = this.regionShadowCasters.filter(r => r.id !== this.selected.id);
                    break;
                case 'SpriteShadowCaster':
                    this.spriteShadowCasters = this.spriteShadowCasters.filter(s => s.id !== this.selected.id);
                    break;
                case 'CircleShadowCaster':
                    this.circleShadowCasters = this.circleShadowCasters.filter(c => c.id !== this.selected.id);
                    break;
                case 'Light':
                    this.lightingSystem.lights = this.lightingSystem.lights.filter(light => light.id !== this.selected.id);
                    break;
            }
            this.selected.destroy();
            this.selected = null;
        }
    }
    draw(context) {
        context.save();
        switch (this.mode) {
            case 'nolighting':
                this.groundShadowReceivers.forEach(g => g.draw(context));
                this.wallShadowReceivers.forEach(w => w.draw(context));
                break;
            case 'normal':
                this.groundShadowReceivers.forEach(g => g.draw(context));
                this.wallShadowReceivers.forEach(w => w.draw(context));
                this.lightingSystem.prepare(this.groundShadowReceivers, this.wallShadowReceivers, this.regionShadowCasters, this.spriteShadowCasters, this.circleShadowCasters);
                this.lightingSystem.draw(context);
                break;
            case 'groundmask':
                this.lightingSystem.prepare(this.groundShadowReceivers, this.wallShadowReceivers, this.regionShadowCasters, this.spriteShadowCasters, this.circleShadowCasters);
                context.drawImage(this.lightingSystem.groundMaskCanvas, 0, 0);
                break;
            case 'wallmask':
                this.lightingSystem.prepare(this.groundShadowReceivers, this.wallShadowReceivers, this.regionShadowCasters, this.spriteShadowCasters, this.circleShadowCasters);
                context.drawImage(this.lightingSystem.wallMaskCanvas, 0, 0);
                break;
            case 'groundmaskedlightmap':
                this.lightingSystem.prepare(this.groundShadowReceivers, this.wallShadowReceivers, this.regionShadowCasters, this.spriteShadowCasters, this.circleShadowCasters);
                context.drawImage(this.lightingSystem.groundMaskedLightMapCanvas, 0, 0);
                break;
            case 'wallmaskedlightmap':
                this.lightingSystem.prepare(this.groundShadowReceivers, this.wallShadowReceivers, this.regionShadowCasters, this.spriteShadowCasters, this.circleShadowCasters);
                context.drawImage(this.lightingSystem.wallMaskedLightMapCanvas, 0, 0);
                break;
            case 'lightmap':
                this.lightingSystem.prepare(this.groundShadowReceivers, this.wallShadowReceivers, this.regionShadowCasters, this.spriteShadowCasters, this.circleShadowCasters);
                context.drawImage(this.lightingSystem.groundMaskedLightMapCanvas, 0, 0);
                context.drawImage(this.lightingSystem.wallMaskedLightMapCanvas, 0, 0);
                break;
        }
        context.restore();
    }
}
exports.LightingScene = LightingScene;


/***/ }),

/***/ "./src/LightingSystem.ts":
/*!*******************************!*\
  !*** ./src/LightingSystem.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LightingSystem = void 0;
const Game_1 = __webpack_require__(/*! ./Game */ "./src/Game.ts");
class LightingSystem {
    constructor() {
        this.ambientLightColour = 'black';
        this.lights = [];
    }
    initialise() {
        this.groundMaskCanvas = document.createElement('canvas');
        this.groundMaskCanvas.width = Game_1.default.screen.x;
        this.groundMaskCanvas.height = Game_1.default.screen.y;
        this.groundMaskContext = this.groundMaskCanvas.getContext('2d');
        this.wallMaskCanvas = document.createElement('canvas');
        this.wallMaskCanvas.width = Game_1.default.screen.x;
        this.wallMaskCanvas.height = Game_1.default.screen.y;
        this.wallMaskContext = this.wallMaskCanvas.getContext('2d');
        this.wallMaskedLightMapCanvas = document.createElement('canvas');
        this.wallMaskedLightMapCanvas.width = Game_1.default.screen.x;
        this.wallMaskedLightMapCanvas.height = Game_1.default.screen.y;
        this.wallMaskedLightMapContext =
            this.wallMaskedLightMapCanvas.getContext('2d');
        this.groundMaskedLightMapCanvas = document.createElement('canvas');
        this.groundMaskedLightMapCanvas.width = Game_1.default.screen.x;
        this.groundMaskedLightMapCanvas.height = Game_1.default.screen.y;
        this.groundMaskedLightMapContext =
            this.groundMaskedLightMapCanvas.getContext('2d');
    }
    update(dt) {
        this.lights.forEach(light => light.update(dt));
    }
    prepare(groundShadowReceivers, wallShadowReceivers, regionShadowCasters, spriteShadowCasters, circleShadowCasters) {
        this.lights.forEach(light => light.prepare(groundShadowReceivers, wallShadowReceivers, regionShadowCasters, spriteShadowCasters, circleShadowCasters));
        this.groundMaskCanvas.width = Game_1.default.screen.x;
        this.groundMaskCanvas.height = Game_1.default.screen.y;
        this.groundMaskContext.save();
        groundShadowReceivers.forEach(ground => {
            ground.drawMask(this.groundMaskContext);
        });
        this.groundMaskContext.globalCompositeOperation = 'destination-out';
        wallShadowReceivers.forEach(wall => {
            wall.drawMask(this.groundMaskContext);
        });
        this.groundMaskContext.restore();
        this.wallMaskCanvas.width = Game_1.default.screen.x;
        this.wallMaskCanvas.height = Game_1.default.screen.y;
        this.wallMaskContext.save();
        wallShadowReceivers.forEach(wall => {
            wall.drawMask(this.wallMaskContext);
        });
        this.wallMaskContext.restore();
        this.groundMaskedLightMapCanvas.width = Game_1.default.screen.x;
        this.groundMaskedLightMapCanvas.height = Game_1.default.screen.y;
        this.groundMaskedLightMapContext.save();
        this.groundMaskedLightMapContext.fillStyle = this.ambientLightColour;
        this.groundMaskedLightMapContext.fillRect(0, 0, Game_1.default.screen.x, Game_1.default.screen.y);
        this.groundMaskedLightMapContext.globalCompositeOperation = 'screen';
        this.lights.forEach(light => {
            this.groundMaskedLightMapContext.drawImage(light.groundLightCanvas, light.position.x - light.radius, light.position.y - light.radius);
        });
        this.groundMaskedLightMapContext.globalCompositeOperation =
            'destination-atop';
        this.groundMaskedLightMapContext.drawImage(this.groundMaskCanvas, 0, 0);
        this.wallMaskedLightMapCanvas.width = Game_1.default.screen.x;
        this.wallMaskedLightMapCanvas.height = Game_1.default.screen.y;
        this.wallMaskedLightMapContext.save();
        this.wallMaskedLightMapContext.fillStyle = this.ambientLightColour;
        this.wallMaskedLightMapContext.fillRect(0, 0, Game_1.default.screen.x, Game_1.default.screen.y);
        this.wallMaskedLightMapContext.globalCompositeOperation = 'screen';
        this.lights.forEach(light => {
            this.wallMaskedLightMapContext.drawImage(light.wallLightCanvas, light.position.x - light.radius, light.position.y - light.radius + LightingSystem.WALL_LIGHTING_Y_OFFSET);
        });
        this.wallMaskedLightMapContext.globalCompositeOperation =
            'destination-atop';
        this.wallMaskedLightMapContext.drawImage(this.wallMaskCanvas, 0, 0);
    }
    draw(context) {
        context.save();
        context.globalCompositeOperation = 'multiply';
        context.drawImage(this.groundMaskedLightMapCanvas, 0, 0);
        context.drawImage(this.wallMaskedLightMapCanvas, 0, 0);
        context.restore();
    }
}
exports.LightingSystem = LightingSystem;
LightingSystem.WALL_LIGHTING_Y_OFFSET = -30;


/***/ }),

/***/ "./src/RegionShadowCaster.ts":
/*!***********************************!*\
  !*** ./src/RegionShadowCaster.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RegionShadowCaster = void 0;
const debug_1 = __webpack_require__(/*! @basementuniverse/debug */ "./node_modules/@basementuniverse/debug/build/index.js");
const input_manager_1 = __webpack_require__(/*! @basementuniverse/input-manager */ "./node_modules/@basementuniverse/input-manager/build/index.js");
const vec_1 = __webpack_require__(/*! @basementuniverse/vec */ "./node_modules/@basementuniverse/vec/vec.js");
const uuid_1 = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/commonjs-browser/index.js");
const Game_1 = __webpack_require__(/*! ./Game */ "./src/Game.ts");
const utils_1 = __webpack_require__(/*! ./utils */ "./src/utils.ts");
class RegionShadowCaster {
    constructor(data = {}) {
        var _a;
        this.type = 'RegionShadowCaster';
        this.id = '';
        this.folder = null;
        this.position = (0, vec_1.vec)();
        this.size = RegionShadowCaster.DEFAULT_SIZE;
        this.colour = RegionShadowCaster.DEFAULT_COLOUR;
        this.hovered = false;
        this.selected = false;
        this.dragging = false;
        this.dragOffset = null;
        Object.assign(this, data, {
            id: (_a = data.id) !== null && _a !== void 0 ? _a : (0, uuid_1.v4)().split('-')[0],
        });
        this.folder = Game_1.default.gui.addFolder(`RegionShadowCaster ${this.id}`);
        this.folder.add(this.position, 'x');
        this.folder.add(this.position, 'y');
        this.folder
            .add(this.size, 'x', RegionShadowCaster.MIN_SIZE.x, RegionShadowCaster.MAX_SIZE.x)
            .name('width');
        this.folder
            .add(this.size, 'y', RegionShadowCaster.MIN_SIZE.y, RegionShadowCaster.MAX_SIZE.y)
            .name('height');
        this.folder.add(this, 'colour');
    }
    serialise() {
        return {
            type: this.type,
            id: this.id,
            position: this.position,
            size: this.size,
            colour: this.colour,
        };
    }
    static deserialise(data) {
        return new RegionShadowCaster(data);
    }
    destroy() {
        if (this.folder) {
            Game_1.default.gui.removeFolder(this.folder);
        }
    }
    update(dt) {
        this.hovered = (0, utils_1.pointInRectangle)(input_manager_1.default.mousePosition, {
            position: this.position,
            size: this.size,
        });
        if (input_manager_1.default.mouseDown() && this.selected && !this.dragging) {
            this.dragging = true;
            this.dragOffset = vec_1.vec.sub(input_manager_1.default.mousePosition, this.position);
        }
        if (!input_manager_1.default.mouseDown()) {
            this.dragging = false;
            this.dragOffset = null;
        }
        if (this.selected && this.dragging && this.dragOffset) {
            if (input_manager_1.default.keyDown('ControlLeft')) {
                this.size = (0, utils_1.clampVec)(vec_1.vec.sub(input_manager_1.default.mousePosition, this.position), RegionShadowCaster.MIN_SIZE, RegionShadowCaster.MAX_SIZE);
            }
            else {
                this.position = vec_1.vec.sub(input_manager_1.default.mousePosition, this.dragOffset);
            }
        }
        debug_1.default.border(`RegionShadowCaster ${this.id}`, '', this.position, {
            showLabel: true,
            showValue: false,
            size: this.size,
            borderColour: this.hovered || this.dragging
                ? RegionShadowCaster.DEBUG_HOVER_COLOUR
                : RegionShadowCaster.DEBUG_COLOUR,
            borderStyle: this.selected ? 'solid' : 'dashed',
        });
    }
}
exports.RegionShadowCaster = RegionShadowCaster;
RegionShadowCaster.DEFAULT_SIZE = (0, vec_1.vec)(100, 100);
RegionShadowCaster.DEFAULT_COLOUR = '#ccc';
RegionShadowCaster.DEBUG_COLOUR = '#b05';
RegionShadowCaster.DEBUG_HOVER_COLOUR = '#d27';
RegionShadowCaster.MIN_SIZE = (0, vec_1.vec)(20, 20);
RegionShadowCaster.MAX_SIZE = (0, vec_1.vec)(200, 200);


/***/ }),

/***/ "./src/SpriteShadowCaster.ts":
/*!***********************************!*\
  !*** ./src/SpriteShadowCaster.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SpriteShadowCaster = void 0;
const debug_1 = __webpack_require__(/*! @basementuniverse/debug */ "./node_modules/@basementuniverse/debug/build/index.js");
const input_manager_1 = __webpack_require__(/*! @basementuniverse/input-manager */ "./node_modules/@basementuniverse/input-manager/build/index.js");
const vec_1 = __webpack_require__(/*! @basementuniverse/vec */ "./node_modules/@basementuniverse/vec/vec.js");
const uuid_1 = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/commonjs-browser/index.js");
const Game_1 = __webpack_require__(/*! ./Game */ "./src/Game.ts");
const utils_1 = __webpack_require__(/*! ./utils */ "./src/utils.ts");
class SpriteShadowCaster {
    constructor(data = {}) {
        var _a;
        this.type = 'SpriteShadowCaster';
        this.id = '';
        this.folder = null;
        this.position = (0, vec_1.vec)();
        this.size = SpriteShadowCaster.DEFAULT_SIZE;
        this.colour = SpriteShadowCaster.DEFAULT_COLOUR;
        this.spriteName = '';
        this.hovered = false;
        this.selected = false;
        this.dragging = false;
        this.dragOffset = null;
        Object.assign(this, data, {
            id: (_a = data.id) !== null && _a !== void 0 ? _a : (0, uuid_1.v4)().split('-')[0],
        });
        this.folder = Game_1.default.gui.addFolder(`SpriteShadowCaster ${this.id}`);
        this.folder.add(this.position, 'x');
        this.folder.add(this.position, 'y');
        this.folder
            .add(this.size, 'x', SpriteShadowCaster.MIN_SIZE.x, SpriteShadowCaster.MAX_SIZE.x)
            .name('width');
        this.folder
            .add(this.size, 'y', SpriteShadowCaster.MIN_SIZE.y, SpriteShadowCaster.MAX_SIZE.y)
            .name('height');
        this.folder.add(this, 'colour');
        this.folder.add(this, 'spriteName');
    }
    serialise() {
        return {
            type: this.type,
            id: this.id,
            position: this.position,
            size: this.size,
            colour: this.colour,
            spriteName: this.spriteName,
        };
    }
    static deserialise(data) {
        return new SpriteShadowCaster(data);
    }
    destroy() {
        if (this.folder) {
            Game_1.default.gui.removeFolder(this.folder);
        }
    }
    update(dt) {
        this.hovered = (0, utils_1.pointInRectangle)(input_manager_1.default.mousePosition, {
            position: this.position,
            size: this.size,
        });
        if (input_manager_1.default.mouseDown() && this.selected && !this.dragging) {
            this.dragging = true;
            this.dragOffset = vec_1.vec.sub(input_manager_1.default.mousePosition, this.position);
        }
        if (!input_manager_1.default.mouseDown()) {
            this.dragging = false;
            this.dragOffset = null;
        }
        if (this.selected && this.dragging && this.dragOffset) {
            if (input_manager_1.default.keyDown('ControlLeft')) {
                this.size = (0, utils_1.clampVec)(vec_1.vec.sub(input_manager_1.default.mousePosition, this.position), SpriteShadowCaster.MIN_SIZE, SpriteShadowCaster.MAX_SIZE);
            }
            else {
                this.position = vec_1.vec.sub(input_manager_1.default.mousePosition, this.dragOffset);
            }
        }
        debug_1.default.border(`SpriteShadowCaster ${this.id}`, '', this.position, {
            showLabel: true,
            showValue: false,
            size: this.size,
            borderColour: this.hovered || this.dragging
                ? SpriteShadowCaster.DEBUG_HOVER_COLOUR
                : SpriteShadowCaster.DEBUG_COLOUR,
            borderStyle: this.selected ? 'solid' : 'dashed',
        });
    }
}
exports.SpriteShadowCaster = SpriteShadowCaster;
SpriteShadowCaster.DEFAULT_SIZE = (0, vec_1.vec)(100, 100);
SpriteShadowCaster.DEFAULT_COLOUR = '#ccc';
SpriteShadowCaster.DEBUG_COLOUR = '#b05';
SpriteShadowCaster.DEBUG_HOVER_COLOUR = '#d27';
SpriteShadowCaster.MIN_SIZE = (0, vec_1.vec)(20, 20);
SpriteShadowCaster.MAX_SIZE = (0, vec_1.vec)(200, 200);


/***/ }),

/***/ "./src/WallShadowReceiver.ts":
/*!***********************************!*\
  !*** ./src/WallShadowReceiver.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WallShadowReceiver = void 0;
const debug_1 = __webpack_require__(/*! @basementuniverse/debug */ "./node_modules/@basementuniverse/debug/build/index.js");
const input_manager_1 = __webpack_require__(/*! @basementuniverse/input-manager */ "./node_modules/@basementuniverse/input-manager/build/index.js");
const vec_1 = __webpack_require__(/*! @basementuniverse/vec */ "./node_modules/@basementuniverse/vec/vec.js");
const uuid_1 = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/commonjs-browser/index.js");
const Game_1 = __webpack_require__(/*! ./Game */ "./src/Game.ts");
const utils_1 = __webpack_require__(/*! ./utils */ "./src/utils.ts");
class WallShadowReceiver {
    constructor(data = {}) {
        var _a;
        this.type = 'WallShadowReceiver';
        this.id = '';
        this.folder = null;
        this.position = (0, vec_1.vec)();
        this.size = WallShadowReceiver.DEFAULT_SIZE;
        this.colour = WallShadowReceiver.DEFAULT_COLOUR;
        this.hovered = false;
        this.selected = false;
        this.dragging = false;
        this.dragOffset = null;
        Object.assign(this, data, {
            id: (_a = data.id) !== null && _a !== void 0 ? _a : (0, uuid_1.v4)().split('-')[0],
        });
        this.folder = Game_1.default.gui.addFolder(`WallShadowReceiver ${this.id}`);
        this.folder.add(this.position, 'x');
        this.folder.add(this.position, 'y');
        this.folder
            .add(this.size, 'x', WallShadowReceiver.MIN_SIZE.x, WallShadowReceiver.MAX_SIZE.x)
            .name('width');
        this.folder
            .add(this.size, 'y', WallShadowReceiver.MIN_SIZE.y, WallShadowReceiver.MAX_SIZE.y)
            .name('height');
        this.folder.add(this, 'colour');
    }
    serialise() {
        return {
            type: this.type,
            id: this.id,
            position: this.position,
            size: this.size,
            colour: this.colour,
        };
    }
    static deserialise(data) {
        return new WallShadowReceiver(data);
    }
    destroy() {
        if (this.folder) {
            Game_1.default.gui.removeFolder(this.folder);
        }
    }
    update(dt) {
        this.hovered = (0, utils_1.pointInRectangle)(input_manager_1.default.mousePosition, {
            position: this.position,
            size: this.size,
        });
        if (input_manager_1.default.mouseDown() && this.selected && !this.dragging) {
            this.dragging = true;
            this.dragOffset = vec_1.vec.sub(input_manager_1.default.mousePosition, this.position);
        }
        if (!input_manager_1.default.mouseDown()) {
            this.dragging = false;
            this.dragOffset = null;
        }
        if (this.selected && this.dragging && this.dragOffset) {
            if (input_manager_1.default.keyDown('ControlLeft')) {
                this.size = (0, utils_1.clampVec)(vec_1.vec.sub(input_manager_1.default.mousePosition, this.position), WallShadowReceiver.MIN_SIZE, WallShadowReceiver.MAX_SIZE);
            }
            else {
                this.position = vec_1.vec.sub(input_manager_1.default.mousePosition, this.dragOffset);
            }
        }
        debug_1.default.border(`WallShadowReceiver ${this.id}`, '', this.position, {
            showLabel: false,
            showValue: false,
            size: this.size,
            borderColour: this.hovered || this.dragging
                ? WallShadowReceiver.DEBUG_HOVER_COLOUR
                : WallShadowReceiver.DEBUG_COLOUR,
            borderStyle: this.selected ? 'solid' : 'dashed',
        });
    }
    draw(context) {
        context.save();
        context.fillStyle = this.colour;
        context.fillRect(this.position.x, this.position.y, this.size.x, this.size.y);
        context.restore();
    }
    drawMask(context) {
        context.save();
        context.fillStyle = 'black';
        context.fillRect(this.position.x, this.position.y, this.size.x, this.size.y);
        context.restore();
    }
}
exports.WallShadowReceiver = WallShadowReceiver;
WallShadowReceiver.DEFAULT_SIZE = (0, vec_1.vec)(200, 200);
WallShadowReceiver.DEFAULT_COLOUR = '#ddd';
WallShadowReceiver.DEBUG_COLOUR = '#05b';
WallShadowReceiver.DEBUG_HOVER_COLOUR = '#38f';
WallShadowReceiver.MIN_SIZE = (0, vec_1.vec)(20, 20);
WallShadowReceiver.MAX_SIZE = (0, vec_1.vec)(600, 600);


/***/ }),

/***/ "./src/constants.ts":
/*!**************************!*\
  !*** ./src/constants.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FPS_MIN = void 0;
exports.FPS_MIN = 1 / 30;


/***/ }),

/***/ "./src/types.ts":
/*!**********************!*\
  !*** ./src/types.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Sector2d = exports.Sector1d = void 0;
var Sector1d;
(function (Sector1d) {
    Sector1d["Before"] = "before";
    Sector1d["Inside"] = "inside";
    Sector1d["After"] = "after";
})(Sector1d = exports.Sector1d || (exports.Sector1d = {}));
var Sector2d;
(function (Sector2d) {
    Sector2d["TopLeft"] = "top-left";
    Sector2d["Top"] = "top";
    Sector2d["TopRight"] = "top-right";
    Sector2d["Left"] = "left";
    Sector2d["Inside"] = "inside";
    Sector2d["Right"] = "right";
    Sector2d["BottomLeft"] = "bottom-left";
    Sector2d["Bottom"] = "bottom";
    Sector2d["BottomRight"] = "bottom-right";
})(Sector2d = exports.Sector2d || (exports.Sector2d = {}));


/***/ }),

/***/ "./src/utils.ts":
/*!**********************!*\
  !*** ./src/utils.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.sector2d = exports.sector1d = exports.polygon = exports.rectangleVertices = exports.rectanglesIntersect = exports.overlap2d = exports.overlap1d = exports.rectangleToInterval = exports.intervalToRectangle = exports.intervalLength = exports.lineYIntercept = exports.lineInRectangle = exports.lineInInterval = exports.pointInRectangle = exports.pointInInterval = exports.colourToString = exports.clampVec = exports.maxVec = exports.minVec = void 0;
const utils_1 = __webpack_require__(/*! @basementuniverse/utils */ "./node_modules/@basementuniverse/utils/utils.js");
const vec_1 = __webpack_require__(/*! @basementuniverse/vec */ "./node_modules/@basementuniverse/vec/vec.js");
const types_1 = __webpack_require__(/*! ./types */ "./src/types.ts");
function minVec(...vectors) {
    return vectors.reduce((min, v) => (0, vec_1.vec)(Math.min(min.x, v.x), Math.min(min.y, v.y)), (0, vec_1.vec)(Infinity, Infinity));
}
exports.minVec = minVec;
function maxVec(...vectors) {
    return vectors.reduce((max, v) => (0, vec_1.vec)(Math.max(max.x, v.x), Math.max(max.y, v.y)), (0, vec_1.vec)(-Infinity, -Infinity));
}
exports.maxVec = maxVec;
function clampVec(v, min, max) {
    return (0, vec_1.vec)((0, utils_1.clamp)(v.x, min.x, max.x), (0, utils_1.clamp)(v.y, min.y, max.y));
}
exports.clampVec = clampVec;
function colourToString(colour) {
    return `rgba(${colour.r}, ${colour.g}, ${colour.b}, ${colour.a})`;
}
exports.colourToString = colourToString;
function pointInInterval(point, interval) {
    return (point.x >= interval.left &&
        point.x <= interval.right &&
        point.y >= interval.top &&
        point.y <= interval.bottom);
}
exports.pointInInterval = pointInInterval;
function pointInRectangle(point, rectangle) {
    return pointInInterval(point, rectangleToInterval(rectangle));
}
exports.pointInRectangle = pointInRectangle;
function lineInInterval(line, interval) {
    if (vec_1.vec.eq(line.start, line.end)) {
        return null;
    }
    if (line.start.x >= interval.left &&
        line.start.x <= interval.right &&
        line.start.y >= interval.top &&
        line.start.y <= interval.bottom) {
        return null;
    }
    const lineDeltaX = line.end.x - line.start.x;
    let txMin = (interval.left - line.start.x) / lineDeltaX;
    let txMax = (interval.right - line.start.x) / lineDeltaX;
    if (txMin > txMax) {
        [txMin, txMax] = [txMax, txMin];
    }
    const lineDeltaY = line.end.y - line.start.y;
    let tyMin = (interval.top - line.start.y) / lineDeltaY;
    let tyMax = (interval.bottom - line.start.y) / lineDeltaY;
    if (tyMin > tyMax) {
        [tyMin, tyMax] = [tyMax, tyMin];
    }
    if (txMin > tyMax || tyMin > txMax) {
        return null;
    }
    const tMin = Math.max(txMin, tyMin);
    const tMax = Math.min(txMax, tyMax);
    if (tMin > 1 || tMax < 0) {
        return null;
    }
    const t = tMin < 0 ? tMax : tMin;
    if (t < 0 || t > 1) {
        return null;
    }
    return {
        x: line.start.x + t * lineDeltaX,
        y: line.start.y + t * lineDeltaY,
    };
}
exports.lineInInterval = lineInInterval;
function lineInRectangle(line, rectangle) {
    return lineInInterval(line, rectangleToInterval(rectangle));
}
exports.lineInRectangle = lineInRectangle;
function lineYIntercept(line, y) {
    if ((0, utils_1.floatEquals)(line.start.y, line.end.y)) {
        return null;
    }
    const t = (y - line.start.y) / (line.end.y - line.start.y);
    return line.start.x + t * (line.end.x - line.start.x);
}
exports.lineYIntercept = lineYIntercept;
function intervalLength(interval) {
    return interval.end - interval.start;
}
exports.intervalLength = intervalLength;
function intervalToRectangle(interval) {
    return {
        position: (0, vec_1.vec)(interval.left, interval.top),
        size: (0, vec_1.vec)(interval.right - interval.left, interval.bottom - interval.top),
    };
}
exports.intervalToRectangle = intervalToRectangle;
function rectangleToInterval(rectangle) {
    return {
        left: rectangle.position.x,
        right: rectangle.position.x + rectangle.size.x,
        top: rectangle.position.y,
        bottom: rectangle.position.y + rectangle.size.y,
    };
}
exports.rectangleToInterval = rectangleToInterval;
function overlap1d(a, b) {
    if (a.end < b.start || a.start > b.end) {
        return null;
    }
    return {
        start: Math.max(a.start, b.start),
        end: Math.min(a.end, b.end),
    };
}
exports.overlap1d = overlap1d;
function overlap2d(a, b) {
    const xOverlap = this.overlap1d(a.left, a.right, b.left, b.right);
    const yOverlap = this.overlap1d(a.top, a.bottom, b.top, b.bottom);
    if (xOverlap && yOverlap) {
        return {
            left: xOverlap.start,
            right: xOverlap.end,
            top: yOverlap.start,
            bottom: yOverlap.end,
        };
    }
    return null;
}
exports.overlap2d = overlap2d;
function rectanglesIntersect(a, b) {
    const tl1 = a.position;
    const br1 = vec_1.vec.add(a.position, a.size);
    const tl2 = b.position;
    const br2 = vec_1.vec.add(b.position, b.size);
    return tl1.x <= br2.x && br1.x >= tl2.x && tl1.y <= br2.y && br1.y >= tl2.y;
}
exports.rectanglesIntersect = rectanglesIntersect;
function rectangleVertices(rectangle) {
    const tl = rectangle.position;
    const br = vec_1.vec.add(rectangle.position, rectangle.size);
    return [rectangle.position, (0, vec_1.vec)(br.x, tl.y), br, (0, vec_1.vec)(tl.x, br.y)];
}
exports.rectangleVertices = rectangleVertices;
function polygon(context, ...vertices) {
    if (vertices.length === 0) {
        return;
    }
    context.beginPath();
    if (typeof vertices[0] === 'function') {
        vertices[0](context);
    }
    else {
        context.moveTo(vertices[0].x, vertices[0].y);
    }
    for (let i = 1; i < vertices.length; i++) {
        if (typeof vertices[i] === 'function') {
            vertices[i](context);
        }
        else {
            context.lineTo(vertices[i].x, vertices[i].y);
        }
    }
    context.closePath();
}
exports.polygon = polygon;
function sector1d(n, interval) {
    if (n <= interval.start) {
        return types_1.Sector1d.Before;
    }
    if (n >= interval.end) {
        return types_1.Sector1d.After;
    }
    return types_1.Sector1d.Inside;
}
exports.sector1d = sector1d;
function sector2d(point, interval) {
    const x = sector1d(point.x, { start: interval.left, end: interval.right });
    const y = sector1d(point.y, { start: interval.top, end: interval.bottom });
    return {
        [types_1.Sector1d.Before]: {
            [types_1.Sector1d.Before]: types_1.Sector2d.TopLeft,
            [types_1.Sector1d.Inside]: types_1.Sector2d.Left,
            [types_1.Sector1d.After]: types_1.Sector2d.BottomLeft,
        },
        [types_1.Sector1d.Inside]: {
            [types_1.Sector1d.Before]: types_1.Sector2d.Top,
            [types_1.Sector1d.Inside]: types_1.Sector2d.Inside,
            [types_1.Sector1d.After]: types_1.Sector2d.Bottom,
        },
        [types_1.Sector1d.After]: {
            [types_1.Sector1d.Before]: types_1.Sector2d.TopRight,
            [types_1.Sector1d.Inside]: types_1.Sector2d.Right,
            [types_1.Sector1d.After]: types_1.Sector2d.BottomRight,
        },
    }[x][y];
}
exports.sector2d = sector2d;


/***/ }),

/***/ "./node_modules/uuid/dist/commonjs-browser/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/uuid/dist/commonjs-browser/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "MAX", ({
  enumerable: true,
  get: function get() {
    return _max.default;
  }
}));
Object.defineProperty(exports, "NIL", ({
  enumerable: true,
  get: function get() {
    return _nil.default;
  }
}));
Object.defineProperty(exports, "parse", ({
  enumerable: true,
  get: function get() {
    return _parse.default;
  }
}));
Object.defineProperty(exports, "stringify", ({
  enumerable: true,
  get: function get() {
    return _stringify.default;
  }
}));
Object.defineProperty(exports, "v1", ({
  enumerable: true,
  get: function get() {
    return _v.default;
  }
}));
Object.defineProperty(exports, "v1ToV6", ({
  enumerable: true,
  get: function get() {
    return _v1ToV.default;
  }
}));
Object.defineProperty(exports, "v3", ({
  enumerable: true,
  get: function get() {
    return _v2.default;
  }
}));
Object.defineProperty(exports, "v4", ({
  enumerable: true,
  get: function get() {
    return _v3.default;
  }
}));
Object.defineProperty(exports, "v5", ({
  enumerable: true,
  get: function get() {
    return _v4.default;
  }
}));
Object.defineProperty(exports, "v6", ({
  enumerable: true,
  get: function get() {
    return _v5.default;
  }
}));
Object.defineProperty(exports, "v6ToV1", ({
  enumerable: true,
  get: function get() {
    return _v6ToV.default;
  }
}));
Object.defineProperty(exports, "v7", ({
  enumerable: true,
  get: function get() {
    return _v6.default;
  }
}));
Object.defineProperty(exports, "validate", ({
  enumerable: true,
  get: function get() {
    return _validate.default;
  }
}));
Object.defineProperty(exports, "version", ({
  enumerable: true,
  get: function get() {
    return _version.default;
  }
}));
var _max = _interopRequireDefault(__webpack_require__(/*! ./max.js */ "./node_modules/uuid/dist/commonjs-browser/max.js"));
var _nil = _interopRequireDefault(__webpack_require__(/*! ./nil.js */ "./node_modules/uuid/dist/commonjs-browser/nil.js"));
var _parse = _interopRequireDefault(__webpack_require__(/*! ./parse.js */ "./node_modules/uuid/dist/commonjs-browser/parse.js"));
var _stringify = _interopRequireDefault(__webpack_require__(/*! ./stringify.js */ "./node_modules/uuid/dist/commonjs-browser/stringify.js"));
var _v = _interopRequireDefault(__webpack_require__(/*! ./v1.js */ "./node_modules/uuid/dist/commonjs-browser/v1.js"));
var _v1ToV = _interopRequireDefault(__webpack_require__(/*! ./v1ToV6.js */ "./node_modules/uuid/dist/commonjs-browser/v1ToV6.js"));
var _v2 = _interopRequireDefault(__webpack_require__(/*! ./v3.js */ "./node_modules/uuid/dist/commonjs-browser/v3.js"));
var _v3 = _interopRequireDefault(__webpack_require__(/*! ./v4.js */ "./node_modules/uuid/dist/commonjs-browser/v4.js"));
var _v4 = _interopRequireDefault(__webpack_require__(/*! ./v5.js */ "./node_modules/uuid/dist/commonjs-browser/v5.js"));
var _v5 = _interopRequireDefault(__webpack_require__(/*! ./v6.js */ "./node_modules/uuid/dist/commonjs-browser/v6.js"));
var _v6ToV = _interopRequireDefault(__webpack_require__(/*! ./v6ToV1.js */ "./node_modules/uuid/dist/commonjs-browser/v6ToV1.js"));
var _v6 = _interopRequireDefault(__webpack_require__(/*! ./v7.js */ "./node_modules/uuid/dist/commonjs-browser/v7.js"));
var _validate = _interopRequireDefault(__webpack_require__(/*! ./validate.js */ "./node_modules/uuid/dist/commonjs-browser/validate.js"));
var _version = _interopRequireDefault(__webpack_require__(/*! ./version.js */ "./node_modules/uuid/dist/commonjs-browser/version.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }

/***/ }),

/***/ "./node_modules/uuid/dist/commonjs-browser/max.js":
/*!********************************************************!*\
  !*** ./node_modules/uuid/dist/commonjs-browser/max.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _default = exports["default"] = 'ffffffff-ffff-ffff-ffff-ffffffffffff';

/***/ }),

/***/ "./node_modules/uuid/dist/commonjs-browser/md5.js":
/*!********************************************************!*\
  !*** ./node_modules/uuid/dist/commonjs-browser/md5.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
/*
 * Browser-compatible JavaScript MD5
 *
 * Modification of JavaScript MD5
 * https://github.com/blueimp/JavaScript-MD5
 *
 * Copyright 2011, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 *
 * Based on
 * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
 * Digest Algorithm, as defined in RFC 1321.
 * Version 2.2 Copyright (C) Paul Johnston 1999 - 2009
 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
 * Distributed under the BSD License
 * See http://pajhome.org.uk/crypt/md5 for more info.
 */
function md5(bytes) {
  if (typeof bytes === 'string') {
    var msg = unescape(encodeURIComponent(bytes)); // UTF8 escape

    bytes = new Uint8Array(msg.length);
    for (var i = 0; i < msg.length; ++i) {
      bytes[i] = msg.charCodeAt(i);
    }
  }
  return md5ToHexEncodedArray(wordsToMd5(bytesToWords(bytes), bytes.length * 8));
}

/*
 * Convert an array of little-endian words to an array of bytes
 */
function md5ToHexEncodedArray(input) {
  var output = [];
  var length32 = input.length * 32;
  var hexTab = '0123456789abcdef';
  for (var i = 0; i < length32; i += 8) {
    var x = input[i >> 5] >>> i % 32 & 0xff;
    var hex = parseInt(hexTab.charAt(x >>> 4 & 0x0f) + hexTab.charAt(x & 0x0f), 16);
    output.push(hex);
  }
  return output;
}

/**
 * Calculate output length with padding and bit length
 */
function getOutputLength(inputLength8) {
  return (inputLength8 + 64 >>> 9 << 4) + 14 + 1;
}

/*
 * Calculate the MD5 of an array of little-endian words, and a bit length.
 */
function wordsToMd5(x, len) {
  /* append padding */
  x[len >> 5] |= 0x80 << len % 32;
  x[getOutputLength(len) - 1] = len;
  var a = 1732584193;
  var b = -271733879;
  var c = -1732584194;
  var d = 271733878;
  for (var i = 0; i < x.length; i += 16) {
    var olda = a;
    var oldb = b;
    var oldc = c;
    var oldd = d;
    a = md5ff(a, b, c, d, x[i], 7, -680876936);
    d = md5ff(d, a, b, c, x[i + 1], 12, -389564586);
    c = md5ff(c, d, a, b, x[i + 2], 17, 606105819);
    b = md5ff(b, c, d, a, x[i + 3], 22, -1044525330);
    a = md5ff(a, b, c, d, x[i + 4], 7, -176418897);
    d = md5ff(d, a, b, c, x[i + 5], 12, 1200080426);
    c = md5ff(c, d, a, b, x[i + 6], 17, -1473231341);
    b = md5ff(b, c, d, a, x[i + 7], 22, -45705983);
    a = md5ff(a, b, c, d, x[i + 8], 7, 1770035416);
    d = md5ff(d, a, b, c, x[i + 9], 12, -1958414417);
    c = md5ff(c, d, a, b, x[i + 10], 17, -42063);
    b = md5ff(b, c, d, a, x[i + 11], 22, -1990404162);
    a = md5ff(a, b, c, d, x[i + 12], 7, 1804603682);
    d = md5ff(d, a, b, c, x[i + 13], 12, -40341101);
    c = md5ff(c, d, a, b, x[i + 14], 17, -1502002290);
    b = md5ff(b, c, d, a, x[i + 15], 22, 1236535329);
    a = md5gg(a, b, c, d, x[i + 1], 5, -165796510);
    d = md5gg(d, a, b, c, x[i + 6], 9, -1069501632);
    c = md5gg(c, d, a, b, x[i + 11], 14, 643717713);
    b = md5gg(b, c, d, a, x[i], 20, -373897302);
    a = md5gg(a, b, c, d, x[i + 5], 5, -701558691);
    d = md5gg(d, a, b, c, x[i + 10], 9, 38016083);
    c = md5gg(c, d, a, b, x[i + 15], 14, -660478335);
    b = md5gg(b, c, d, a, x[i + 4], 20, -405537848);
    a = md5gg(a, b, c, d, x[i + 9], 5, 568446438);
    d = md5gg(d, a, b, c, x[i + 14], 9, -1019803690);
    c = md5gg(c, d, a, b, x[i + 3], 14, -187363961);
    b = md5gg(b, c, d, a, x[i + 8], 20, 1163531501);
    a = md5gg(a, b, c, d, x[i + 13], 5, -1444681467);
    d = md5gg(d, a, b, c, x[i + 2], 9, -51403784);
    c = md5gg(c, d, a, b, x[i + 7], 14, 1735328473);
    b = md5gg(b, c, d, a, x[i + 12], 20, -1926607734);
    a = md5hh(a, b, c, d, x[i + 5], 4, -378558);
    d = md5hh(d, a, b, c, x[i + 8], 11, -2022574463);
    c = md5hh(c, d, a, b, x[i + 11], 16, 1839030562);
    b = md5hh(b, c, d, a, x[i + 14], 23, -35309556);
    a = md5hh(a, b, c, d, x[i + 1], 4, -1530992060);
    d = md5hh(d, a, b, c, x[i + 4], 11, 1272893353);
    c = md5hh(c, d, a, b, x[i + 7], 16, -155497632);
    b = md5hh(b, c, d, a, x[i + 10], 23, -1094730640);
    a = md5hh(a, b, c, d, x[i + 13], 4, 681279174);
    d = md5hh(d, a, b, c, x[i], 11, -358537222);
    c = md5hh(c, d, a, b, x[i + 3], 16, -722521979);
    b = md5hh(b, c, d, a, x[i + 6], 23, 76029189);
    a = md5hh(a, b, c, d, x[i + 9], 4, -640364487);
    d = md5hh(d, a, b, c, x[i + 12], 11, -421815835);
    c = md5hh(c, d, a, b, x[i + 15], 16, 530742520);
    b = md5hh(b, c, d, a, x[i + 2], 23, -995338651);
    a = md5ii(a, b, c, d, x[i], 6, -198630844);
    d = md5ii(d, a, b, c, x[i + 7], 10, 1126891415);
    c = md5ii(c, d, a, b, x[i + 14], 15, -1416354905);
    b = md5ii(b, c, d, a, x[i + 5], 21, -57434055);
    a = md5ii(a, b, c, d, x[i + 12], 6, 1700485571);
    d = md5ii(d, a, b, c, x[i + 3], 10, -1894986606);
    c = md5ii(c, d, a, b, x[i + 10], 15, -1051523);
    b = md5ii(b, c, d, a, x[i + 1], 21, -2054922799);
    a = md5ii(a, b, c, d, x[i + 8], 6, 1873313359);
    d = md5ii(d, a, b, c, x[i + 15], 10, -30611744);
    c = md5ii(c, d, a, b, x[i + 6], 15, -1560198380);
    b = md5ii(b, c, d, a, x[i + 13], 21, 1309151649);
    a = md5ii(a, b, c, d, x[i + 4], 6, -145523070);
    d = md5ii(d, a, b, c, x[i + 11], 10, -1120210379);
    c = md5ii(c, d, a, b, x[i + 2], 15, 718787259);
    b = md5ii(b, c, d, a, x[i + 9], 21, -343485551);
    a = safeAdd(a, olda);
    b = safeAdd(b, oldb);
    c = safeAdd(c, oldc);
    d = safeAdd(d, oldd);
  }
  return [a, b, c, d];
}

/*
 * Convert an array bytes to an array of little-endian words
 * Characters >255 have their high-byte silently ignored.
 */
function bytesToWords(input) {
  if (input.length === 0) {
    return [];
  }
  var length8 = input.length * 8;
  var output = new Uint32Array(getOutputLength(length8));
  for (var i = 0; i < length8; i += 8) {
    output[i >> 5] |= (input[i / 8] & 0xff) << i % 32;
  }
  return output;
}

/*
 * Add integers, wrapping at 2^32. This uses 16-bit operations internally
 * to work around bugs in some JS interpreters.
 */
function safeAdd(x, y) {
  var lsw = (x & 0xffff) + (y & 0xffff);
  var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
  return msw << 16 | lsw & 0xffff;
}

/*
 * Bitwise rotate a 32-bit number to the left.
 */
function bitRotateLeft(num, cnt) {
  return num << cnt | num >>> 32 - cnt;
}

/*
 * These functions implement the four basic operations the algorithm uses.
 */
function md5cmn(q, a, b, x, s, t) {
  return safeAdd(bitRotateLeft(safeAdd(safeAdd(a, q), safeAdd(x, t)), s), b);
}
function md5ff(a, b, c, d, x, s, t) {
  return md5cmn(b & c | ~b & d, a, b, x, s, t);
}
function md5gg(a, b, c, d, x, s, t) {
  return md5cmn(b & d | c & ~d, a, b, x, s, t);
}
function md5hh(a, b, c, d, x, s, t) {
  return md5cmn(b ^ c ^ d, a, b, x, s, t);
}
function md5ii(a, b, c, d, x, s, t) {
  return md5cmn(c ^ (b | ~d), a, b, x, s, t);
}
var _default = exports["default"] = md5;

/***/ }),

/***/ "./node_modules/uuid/dist/commonjs-browser/native.js":
/*!***********************************************************!*\
  !*** ./node_modules/uuid/dist/commonjs-browser/native.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var randomUUID = typeof crypto !== 'undefined' && crypto.randomUUID && crypto.randomUUID.bind(crypto);
var _default = exports["default"] = {
  randomUUID
};

/***/ }),

/***/ "./node_modules/uuid/dist/commonjs-browser/nil.js":
/*!********************************************************!*\
  !*** ./node_modules/uuid/dist/commonjs-browser/nil.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _default = exports["default"] = '00000000-0000-0000-0000-000000000000';

/***/ }),

/***/ "./node_modules/uuid/dist/commonjs-browser/parse.js":
/*!**********************************************************!*\
  !*** ./node_modules/uuid/dist/commonjs-browser/parse.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _validate = _interopRequireDefault(__webpack_require__(/*! ./validate.js */ "./node_modules/uuid/dist/commonjs-browser/validate.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function parse(uuid) {
  if (!(0, _validate.default)(uuid)) {
    throw TypeError('Invalid UUID');
  }
  var v;
  var arr = new Uint8Array(16);

  // Parse ########-....-....-....-............
  arr[0] = (v = parseInt(uuid.slice(0, 8), 16)) >>> 24;
  arr[1] = v >>> 16 & 0xff;
  arr[2] = v >>> 8 & 0xff;
  arr[3] = v & 0xff;

  // Parse ........-####-....-....-............
  arr[4] = (v = parseInt(uuid.slice(9, 13), 16)) >>> 8;
  arr[5] = v & 0xff;

  // Parse ........-....-####-....-............
  arr[6] = (v = parseInt(uuid.slice(14, 18), 16)) >>> 8;
  arr[7] = v & 0xff;

  // Parse ........-....-....-####-............
  arr[8] = (v = parseInt(uuid.slice(19, 23), 16)) >>> 8;
  arr[9] = v & 0xff;

  // Parse ........-....-....-....-############
  // (Use "/" to avoid 32-bit truncation when bit-shifting high-order bytes)
  arr[10] = (v = parseInt(uuid.slice(24, 36), 16)) / 0x10000000000 & 0xff;
  arr[11] = v / 0x100000000 & 0xff;
  arr[12] = v >>> 24 & 0xff;
  arr[13] = v >>> 16 & 0xff;
  arr[14] = v >>> 8 & 0xff;
  arr[15] = v & 0xff;
  return arr;
}
var _default = exports["default"] = parse;

/***/ }),

/***/ "./node_modules/uuid/dist/commonjs-browser/regex.js":
/*!**********************************************************!*\
  !*** ./node_modules/uuid/dist/commonjs-browser/regex.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _default = exports["default"] = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/i;

/***/ }),

/***/ "./node_modules/uuid/dist/commonjs-browser/rng.js":
/*!********************************************************!*\
  !*** ./node_modules/uuid/dist/commonjs-browser/rng.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = rng;
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).

var getRandomValues;
var rnds8 = new Uint8Array(16);
function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);
    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }
  return getRandomValues(rnds8);
}

/***/ }),

/***/ "./node_modules/uuid/dist/commonjs-browser/sha1.js":
/*!*********************************************************!*\
  !*** ./node_modules/uuid/dist/commonjs-browser/sha1.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
// Adapted from Chris Veness' SHA1 code at
// http://www.movable-type.co.uk/scripts/sha1.html
function f(s, x, y, z) {
  switch (s) {
    case 0:
      return x & y ^ ~x & z;
    case 1:
      return x ^ y ^ z;
    case 2:
      return x & y ^ x & z ^ y & z;
    case 3:
      return x ^ y ^ z;
  }
}
function ROTL(x, n) {
  return x << n | x >>> 32 - n;
}
function sha1(bytes) {
  var K = [0x5a827999, 0x6ed9eba1, 0x8f1bbcdc, 0xca62c1d6];
  var H = [0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476, 0xc3d2e1f0];
  if (typeof bytes === 'string') {
    var msg = unescape(encodeURIComponent(bytes)); // UTF8 escape

    bytes = [];
    for (var i = 0; i < msg.length; ++i) {
      bytes.push(msg.charCodeAt(i));
    }
  } else if (!Array.isArray(bytes)) {
    // Convert Array-like to Array
    bytes = Array.prototype.slice.call(bytes);
  }
  bytes.push(0x80);
  var l = bytes.length / 4 + 2;
  var N = Math.ceil(l / 16);
  var M = new Array(N);
  for (var _i = 0; _i < N; ++_i) {
    var arr = new Uint32Array(16);
    for (var j = 0; j < 16; ++j) {
      arr[j] = bytes[_i * 64 + j * 4] << 24 | bytes[_i * 64 + j * 4 + 1] << 16 | bytes[_i * 64 + j * 4 + 2] << 8 | bytes[_i * 64 + j * 4 + 3];
    }
    M[_i] = arr;
  }
  M[N - 1][14] = (bytes.length - 1) * 8 / Math.pow(2, 32);
  M[N - 1][14] = Math.floor(M[N - 1][14]);
  M[N - 1][15] = (bytes.length - 1) * 8 & 0xffffffff;
  for (var _i2 = 0; _i2 < N; ++_i2) {
    var W = new Uint32Array(80);
    for (var t = 0; t < 16; ++t) {
      W[t] = M[_i2][t];
    }
    for (var _t = 16; _t < 80; ++_t) {
      W[_t] = ROTL(W[_t - 3] ^ W[_t - 8] ^ W[_t - 14] ^ W[_t - 16], 1);
    }
    var a = H[0];
    var b = H[1];
    var c = H[2];
    var d = H[3];
    var e = H[4];
    for (var _t2 = 0; _t2 < 80; ++_t2) {
      var s = Math.floor(_t2 / 20);
      var T = ROTL(a, 5) + f(s, b, c, d) + e + K[s] + W[_t2] >>> 0;
      e = d;
      d = c;
      c = ROTL(b, 30) >>> 0;
      b = a;
      a = T;
    }
    H[0] = H[0] + a >>> 0;
    H[1] = H[1] + b >>> 0;
    H[2] = H[2] + c >>> 0;
    H[3] = H[3] + d >>> 0;
    H[4] = H[4] + e >>> 0;
  }
  return [H[0] >> 24 & 0xff, H[0] >> 16 & 0xff, H[0] >> 8 & 0xff, H[0] & 0xff, H[1] >> 24 & 0xff, H[1] >> 16 & 0xff, H[1] >> 8 & 0xff, H[1] & 0xff, H[2] >> 24 & 0xff, H[2] >> 16 & 0xff, H[2] >> 8 & 0xff, H[2] & 0xff, H[3] >> 24 & 0xff, H[3] >> 16 & 0xff, H[3] >> 8 & 0xff, H[3] & 0xff, H[4] >> 24 & 0xff, H[4] >> 16 & 0xff, H[4] >> 8 & 0xff, H[4] & 0xff];
}
var _default = exports["default"] = sha1;

/***/ }),

/***/ "./node_modules/uuid/dist/commonjs-browser/stringify.js":
/*!**************************************************************!*\
  !*** ./node_modules/uuid/dist/commonjs-browser/stringify.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
exports.unsafeStringify = unsafeStringify;
var _validate = _interopRequireDefault(__webpack_require__(/*! ./validate.js */ "./node_modules/uuid/dist/commonjs-browser/validate.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
var byteToHex = [];
for (var i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).slice(1));
}
function unsafeStringify(arr, offset = 0) {
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  //
  // Note to future-self: No, you can't remove the `toLowerCase()` call.
  // REF: https://github.com/uuidjs/uuid/pull/677#issuecomment-1757351351
  return (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
}
function stringify(arr, offset = 0) {
  var uuid = unsafeStringify(arr, offset);
  // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields
  if (!(0, _validate.default)(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }
  return uuid;
}
var _default = exports["default"] = stringify;

/***/ }),

/***/ "./node_modules/uuid/dist/commonjs-browser/v1.js":
/*!*******************************************************!*\
  !*** ./node_modules/uuid/dist/commonjs-browser/v1.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _rng = _interopRequireDefault(__webpack_require__(/*! ./rng.js */ "./node_modules/uuid/dist/commonjs-browser/rng.js"));
var _stringify = __webpack_require__(/*! ./stringify.js */ "./node_modules/uuid/dist/commonjs-browser/stringify.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
// **`v1()` - Generate time-based UUID**
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html

var _nodeId;
var _clockseq;

// Previous uuid creation time
var _lastMSecs = 0;
var _lastNSecs = 0;

// See https://github.com/uuidjs/uuid for API details
function v1(options, buf, offset) {
  var i = buf && offset || 0;
  var b = buf || new Array(16);
  options = options || {};
  var node = options.node;
  var clockseq = options.clockseq;

  // v1 only: Use cached `node` and `clockseq` values
  if (!options._v6) {
    if (!node) {
      node = _nodeId;
    }
    if (clockseq == null) {
      clockseq = _clockseq;
    }
  }

  // Handle cases where we need entropy.  We do this lazily to minimize issues
  // related to insufficient system entropy.  See #189
  if (node == null || clockseq == null) {
    var seedBytes = options.random || (options.rng || _rng.default)();

    // Randomize node
    if (node == null) {
      node = [seedBytes[0], seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]];

      // v1 only: cache node value for reuse
      if (!_nodeId && !options._v6) {
        // per RFC4122 4.5: Set MAC multicast bit (v1 only)
        node[0] |= 0x01; // Set multicast bit

        _nodeId = node;
      }
    }

    // Randomize clockseq
    if (clockseq == null) {
      // Per 4.2.2, randomize (14 bit) clockseq
      clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;
      if (_clockseq === undefined && !options._v6) {
        _clockseq = clockseq;
      }
    }
  }

  // v1 & v6 timestamps are 100 nano-second units since the Gregorian epoch,
  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so time is
  // handled internally as 'msecs' (integer milliseconds) and 'nsecs'
  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.
  var msecs = options.msecs !== undefined ? options.msecs : Date.now();

  // Per 4.2.1.2, use count of uuid's generated during the current clock
  // cycle to simulate higher resolution clock
  var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1;

  // Time since last uuid creation (in msecs)
  var dt = msecs - _lastMSecs + (nsecs - _lastNSecs) / 10000;

  // Per 4.2.1.2, Bump clockseq on clock regression
  if (dt < 0 && options.clockseq === undefined) {
    clockseq = clockseq + 1 & 0x3fff;
  }

  // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
  // time interval
  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
    nsecs = 0;
  }

  // Per 4.2.1.2 Throw error if too many uuids are requested
  if (nsecs >= 10000) {
    throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
  }
  _lastMSecs = msecs;
  _lastNSecs = nsecs;
  _clockseq = clockseq;

  // Per 4.1.4 - Convert from unix epoch to Gregorian epoch
  msecs += 12219292800000;

  // `time_low`
  var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
  b[i++] = tl >>> 24 & 0xff;
  b[i++] = tl >>> 16 & 0xff;
  b[i++] = tl >>> 8 & 0xff;
  b[i++] = tl & 0xff;

  // `time_mid`
  var tmh = msecs / 0x100000000 * 10000 & 0xfffffff;
  b[i++] = tmh >>> 8 & 0xff;
  b[i++] = tmh & 0xff;

  // `time_high_and_version`
  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version
  b[i++] = tmh >>> 16 & 0xff;

  // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)
  b[i++] = clockseq >>> 8 | 0x80;

  // `clock_seq_low`
  b[i++] = clockseq & 0xff;

  // `node`
  for (var n = 0; n < 6; ++n) {
    b[i + n] = node[n];
  }
  return buf || (0, _stringify.unsafeStringify)(b);
}
var _default = exports["default"] = v1;

/***/ }),

/***/ "./node_modules/uuid/dist/commonjs-browser/v1ToV6.js":
/*!***********************************************************!*\
  !*** ./node_modules/uuid/dist/commonjs-browser/v1ToV6.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = v1ToV6;
var _parse = _interopRequireDefault(__webpack_require__(/*! ./parse.js */ "./node_modules/uuid/dist/commonjs-browser/parse.js"));
var _stringify = __webpack_require__(/*! ./stringify.js */ "./node_modules/uuid/dist/commonjs-browser/stringify.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/**
 * Convert a v1 UUID to a v6 UUID
 *
 * @param {string|Uint8Array} uuid - The v1 UUID to convert to v6
 * @returns {string|Uint8Array} The v6 UUID as the same type as the `uuid` arg
 * (string or Uint8Array)
 */
function v1ToV6(uuid) {
  var v1Bytes = typeof uuid === 'string' ? (0, _parse.default)(uuid) : uuid;
  var v6Bytes = _v1ToV6(v1Bytes);
  return typeof uuid === 'string' ? (0, _stringify.unsafeStringify)(v6Bytes) : v6Bytes;
}

// Do the field transformation needed for v1 -> v6
function _v1ToV6(v1Bytes, randomize = false) {
  return Uint8Array.of((v1Bytes[6] & 0x0f) << 4 | v1Bytes[7] >> 4 & 0x0f, (v1Bytes[7] & 0x0f) << 4 | (v1Bytes[4] & 0xf0) >> 4, (v1Bytes[4] & 0x0f) << 4 | (v1Bytes[5] & 0xf0) >> 4, (v1Bytes[5] & 0x0f) << 4 | (v1Bytes[0] & 0xf0) >> 4, (v1Bytes[0] & 0x0f) << 4 | (v1Bytes[1] & 0xf0) >> 4, (v1Bytes[1] & 0x0f) << 4 | (v1Bytes[2] & 0xf0) >> 4, 0x60 | v1Bytes[2] & 0x0f, v1Bytes[3], v1Bytes[8], v1Bytes[9], v1Bytes[10], v1Bytes[11], v1Bytes[12], v1Bytes[13], v1Bytes[14], v1Bytes[15]);
}

/***/ }),

/***/ "./node_modules/uuid/dist/commonjs-browser/v3.js":
/*!*******************************************************!*\
  !*** ./node_modules/uuid/dist/commonjs-browser/v3.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _v = _interopRequireDefault(__webpack_require__(/*! ./v35.js */ "./node_modules/uuid/dist/commonjs-browser/v35.js"));
var _md = _interopRequireDefault(__webpack_require__(/*! ./md5.js */ "./node_modules/uuid/dist/commonjs-browser/md5.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
var v3 = (0, _v.default)('v3', 0x30, _md.default);
var _default = exports["default"] = v3;

/***/ }),

/***/ "./node_modules/uuid/dist/commonjs-browser/v35.js":
/*!********************************************************!*\
  !*** ./node_modules/uuid/dist/commonjs-browser/v35.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.URL = exports.DNS = void 0;
exports["default"] = v35;
var _stringify = __webpack_require__(/*! ./stringify.js */ "./node_modules/uuid/dist/commonjs-browser/stringify.js");
var _parse = _interopRequireDefault(__webpack_require__(/*! ./parse.js */ "./node_modules/uuid/dist/commonjs-browser/parse.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function stringToBytes(str) {
  str = unescape(encodeURIComponent(str)); // UTF8 escape

  var bytes = [];
  for (var i = 0; i < str.length; ++i) {
    bytes.push(str.charCodeAt(i));
  }
  return bytes;
}
var DNS = exports.DNS = '6ba7b810-9dad-11d1-80b4-00c04fd430c8';
var URL = exports.URL = '6ba7b811-9dad-11d1-80b4-00c04fd430c8';
function v35(name, version, hashfunc) {
  function generateUUID(value, namespace, buf, offset) {
    var _namespace;
    if (typeof value === 'string') {
      value = stringToBytes(value);
    }
    if (typeof namespace === 'string') {
      namespace = (0, _parse.default)(namespace);
    }
    if (((_namespace = namespace) === null || _namespace === void 0 ? void 0 : _namespace.length) !== 16) {
      throw TypeError('Namespace must be array-like (16 iterable integer values, 0-255)');
    }

    // Compute hash of namespace and value, Per 4.3
    // Future: Use spread syntax when supported on all platforms, e.g. `bytes =
    // hashfunc([...namespace, ... value])`
    var bytes = new Uint8Array(16 + value.length);
    bytes.set(namespace);
    bytes.set(value, namespace.length);
    bytes = hashfunc(bytes);
    bytes[6] = bytes[6] & 0x0f | version;
    bytes[8] = bytes[8] & 0x3f | 0x80;
    if (buf) {
      offset = offset || 0;
      for (var i = 0; i < 16; ++i) {
        buf[offset + i] = bytes[i];
      }
      return buf;
    }
    return (0, _stringify.unsafeStringify)(bytes);
  }

  // Function#name is not settable on some platforms (#270)
  try {
    generateUUID.name = name;
  } catch (err) {}

  // For CommonJS default export support
  generateUUID.DNS = DNS;
  generateUUID.URL = URL;
  return generateUUID;
}

/***/ }),

/***/ "./node_modules/uuid/dist/commonjs-browser/v4.js":
/*!*******************************************************!*\
  !*** ./node_modules/uuid/dist/commonjs-browser/v4.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _native = _interopRequireDefault(__webpack_require__(/*! ./native.js */ "./node_modules/uuid/dist/commonjs-browser/native.js"));
var _rng = _interopRequireDefault(__webpack_require__(/*! ./rng.js */ "./node_modules/uuid/dist/commonjs-browser/rng.js"));
var _stringify = __webpack_require__(/*! ./stringify.js */ "./node_modules/uuid/dist/commonjs-browser/stringify.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function v4(options, buf, offset) {
  if (_native.default.randomUUID && !buf && !options) {
    return _native.default.randomUUID();
  }
  options = options || {};
  var rnds = options.random || (options.rng || _rng.default)();

  // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80;

  // Copy bytes to buffer, if provided
  if (buf) {
    offset = offset || 0;
    for (var i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }
    return buf;
  }
  return (0, _stringify.unsafeStringify)(rnds);
}
var _default = exports["default"] = v4;

/***/ }),

/***/ "./node_modules/uuid/dist/commonjs-browser/v5.js":
/*!*******************************************************!*\
  !*** ./node_modules/uuid/dist/commonjs-browser/v5.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _v = _interopRequireDefault(__webpack_require__(/*! ./v35.js */ "./node_modules/uuid/dist/commonjs-browser/v35.js"));
var _sha = _interopRequireDefault(__webpack_require__(/*! ./sha1.js */ "./node_modules/uuid/dist/commonjs-browser/sha1.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
var v5 = (0, _v.default)('v5', 0x50, _sha.default);
var _default = exports["default"] = v5;

/***/ }),

/***/ "./node_modules/uuid/dist/commonjs-browser/v6.js":
/*!*******************************************************!*\
  !*** ./node_modules/uuid/dist/commonjs-browser/v6.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = v6;
var _stringify = __webpack_require__(/*! ./stringify.js */ "./node_modules/uuid/dist/commonjs-browser/stringify.js");
var _v = _interopRequireDefault(__webpack_require__(/*! ./v1.js */ "./node_modules/uuid/dist/commonjs-browser/v1.js"));
var _v1ToV = _interopRequireDefault(__webpack_require__(/*! ./v1ToV6.js */ "./node_modules/uuid/dist/commonjs-browser/v1ToV6.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 *
 * @param {object} options
 * @param {Uint8Array=} buf
 * @param {number=} offset
 * @returns
 */
function v6(options = {}, buf, offset = 0) {
  // v6 is v1 with different field layout, so we start with a v1 UUID, albeit
  // with slightly different behavior around how the clock_seq and node fields
  // are randomized, which is why we call v1 with _v6: true.
  var bytes = (0, _v.default)(_objectSpread(_objectSpread({}, options), {}, {
    _v6: true
  }), new Uint8Array(16));

  // Reorder the fields to v6 layout.
  bytes = (0, _v1ToV.default)(bytes);

  // Return as a byte array if requested
  if (buf) {
    for (var i = 0; i < 16; i++) {
      buf[offset + i] = bytes[i];
    }
    return buf;
  }
  return (0, _stringify.unsafeStringify)(bytes);
}

/***/ }),

/***/ "./node_modules/uuid/dist/commonjs-browser/v6ToV1.js":
/*!***********************************************************!*\
  !*** ./node_modules/uuid/dist/commonjs-browser/v6ToV1.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = v6ToV1;
var _parse = _interopRequireDefault(__webpack_require__(/*! ./parse.js */ "./node_modules/uuid/dist/commonjs-browser/parse.js"));
var _stringify = __webpack_require__(/*! ./stringify.js */ "./node_modules/uuid/dist/commonjs-browser/stringify.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/**
 * Convert a v6 UUID to a v1 UUID
 *
 * @param {string|Uint8Array} uuid - The v6 UUID to convert to v6
 * @returns {string|Uint8Array} The v1 UUID as the same type as the `uuid` arg
 * (string or Uint8Array)
 */
function v6ToV1(uuid) {
  var v6Bytes = typeof uuid === 'string' ? (0, _parse.default)(uuid) : uuid;
  var v1Bytes = _v6ToV1(v6Bytes);
  return typeof uuid === 'string' ? (0, _stringify.unsafeStringify)(v1Bytes) : v1Bytes;
}

// Do the field transformation needed for v6 -> v1
function _v6ToV1(v6Bytes) {
  return Uint8Array.of((v6Bytes[3] & 0x0f) << 4 | v6Bytes[4] >> 4 & 0x0f, (v6Bytes[4] & 0x0f) << 4 | (v6Bytes[5] & 0xf0) >> 4, (v6Bytes[5] & 0x0f) << 4 | v6Bytes[6] & 0x0f, v6Bytes[7], (v6Bytes[1] & 0x0f) << 4 | (v6Bytes[2] & 0xf0) >> 4, (v6Bytes[2] & 0x0f) << 4 | (v6Bytes[3] & 0xf0) >> 4, 0x10 | (v6Bytes[0] & 0xf0) >> 4, (v6Bytes[0] & 0x0f) << 4 | (v6Bytes[1] & 0xf0) >> 4, v6Bytes[8], v6Bytes[9], v6Bytes[10], v6Bytes[11], v6Bytes[12], v6Bytes[13], v6Bytes[14], v6Bytes[15]);
}

/***/ }),

/***/ "./node_modules/uuid/dist/commonjs-browser/v7.js":
/*!*******************************************************!*\
  !*** ./node_modules/uuid/dist/commonjs-browser/v7.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _rng = _interopRequireDefault(__webpack_require__(/*! ./rng.js */ "./node_modules/uuid/dist/commonjs-browser/rng.js"));
var _stringify = __webpack_require__(/*! ./stringify.js */ "./node_modules/uuid/dist/commonjs-browser/stringify.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/**
 * UUID V7 - Unix Epoch time-based UUID
 *
 * The IETF has published RFC9562, introducing 3 new UUID versions (6,7,8). This
 * implementation of V7 is based on the accepted, though not yet approved,
 * revisions.
 *
 * RFC 9562:https://www.rfc-editor.org/rfc/rfc9562.html Universally Unique
 * IDentifiers (UUIDs)

 *
 * Sample V7 value:
 * https://www.rfc-editor.org/rfc/rfc9562.html#name-example-of-a-uuidv7-value
 *
 * Monotonic Bit Layout: RFC rfc9562.6.2 Method 1, Dedicated Counter Bits ref:
 *     https://www.rfc-editor.org/rfc/rfc9562.html#section-6.2-5.1
 *
 *   0                   1                   2                   3 0 1 2 3 4 5 6
 *   7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1
 *  +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
 *  |                          unix_ts_ms                           |
 *  +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
 *  |          unix_ts_ms           |  ver  |        seq_hi         |
 *  +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
 *  |var|               seq_low               |        rand         |
 *  +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
 *  |                             rand                              |
 *  +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
 *
 * seq is a 31 bit serialized counter; comprised of 12 bit seq_hi and 19 bit
 * seq_low, and randomly initialized upon timestamp change. 31 bit counter size
 * was selected as any bitwise operations in node are done as _signed_ 32 bit
 * ints. we exclude the sign bit.
 */

var _seqLow = null;
var _seqHigh = null;
var _msecs = 0;
function v7(options, buf, offset) {
  options = options || {};

  // initialize buffer and pointer
  var i = buf && offset || 0;
  var b = buf || new Uint8Array(16);

  // rnds is Uint8Array(16) filled with random bytes
  var rnds = options.random || (options.rng || _rng.default)();

  // milliseconds since unix epoch, 1970-01-01 00:00
  var msecs = options.msecs !== undefined ? options.msecs : Date.now();

  // seq is user provided 31 bit counter
  var seq = options.seq !== undefined ? options.seq : null;

  // initialize local seq high/low parts
  var seqHigh = _seqHigh;
  var seqLow = _seqLow;

  // check if clock has advanced and user has not provided msecs
  if (msecs > _msecs && options.msecs === undefined) {
    _msecs = msecs;

    // unless user provided seq, reset seq parts
    if (seq !== null) {
      seqHigh = null;
      seqLow = null;
    }
  }

  // if we have a user provided seq
  if (seq !== null) {
    // trim provided seq to 31 bits of value, avoiding overflow
    if (seq > 0x7fffffff) {
      seq = 0x7fffffff;
    }

    // split provided seq into high/low parts
    seqHigh = seq >>> 19 & 0xfff;
    seqLow = seq & 0x7ffff;
  }

  // randomly initialize seq
  if (seqHigh === null || seqLow === null) {
    seqHigh = rnds[6] & 0x7f;
    seqHigh = seqHigh << 8 | rnds[7];
    seqLow = rnds[8] & 0x3f; // pad for var
    seqLow = seqLow << 8 | rnds[9];
    seqLow = seqLow << 5 | rnds[10] >>> 3;
  }

  // increment seq if within msecs window
  if (msecs + 10000 > _msecs && seq === null) {
    if (++seqLow > 0x7ffff) {
      seqLow = 0;
      if (++seqHigh > 0xfff) {
        seqHigh = 0;

        // increment internal _msecs. this allows us to continue incrementing
        // while staying monotonic. Note, once we hit 10k milliseconds beyond system
        // clock, we will reset breaking monotonicity (after (2^31)*10000 generations)
        _msecs++;
      }
    }
  } else {
    // resetting; we have advanced more than
    // 10k milliseconds beyond system clock
    _msecs = msecs;
  }
  _seqHigh = seqHigh;
  _seqLow = seqLow;

  // [bytes 0-5] 48 bits of local timestamp
  b[i++] = _msecs / 0x10000000000 & 0xff;
  b[i++] = _msecs / 0x100000000 & 0xff;
  b[i++] = _msecs / 0x1000000 & 0xff;
  b[i++] = _msecs / 0x10000 & 0xff;
  b[i++] = _msecs / 0x100 & 0xff;
  b[i++] = _msecs & 0xff;

  // [byte 6] - set 4 bits of version (7) with first 4 bits seq_hi
  b[i++] = seqHigh >>> 4 & 0x0f | 0x70;

  // [byte 7] remaining 8 bits of seq_hi
  b[i++] = seqHigh & 0xff;

  // [byte 8] - variant (2 bits), first 6 bits seq_low
  b[i++] = seqLow >>> 13 & 0x3f | 0x80;

  // [byte 9] 8 bits seq_low
  b[i++] = seqLow >>> 5 & 0xff;

  // [byte 10] remaining 5 bits seq_low, 3 bits random
  b[i++] = seqLow << 3 & 0xff | rnds[10] & 0x07;

  // [bytes 11-15] always random
  b[i++] = rnds[11];
  b[i++] = rnds[12];
  b[i++] = rnds[13];
  b[i++] = rnds[14];
  b[i++] = rnds[15];
  return buf || (0, _stringify.unsafeStringify)(b);
}
var _default = exports["default"] = v7;

/***/ }),

/***/ "./node_modules/uuid/dist/commonjs-browser/validate.js":
/*!*************************************************************!*\
  !*** ./node_modules/uuid/dist/commonjs-browser/validate.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _regex = _interopRequireDefault(__webpack_require__(/*! ./regex.js */ "./node_modules/uuid/dist/commonjs-browser/regex.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function validate(uuid) {
  return typeof uuid === 'string' && _regex.default.test(uuid);
}
var _default = exports["default"] = validate;

/***/ }),

/***/ "./node_modules/uuid/dist/commonjs-browser/version.js":
/*!************************************************************!*\
  !*** ./node_modules/uuid/dist/commonjs-browser/version.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _validate = _interopRequireDefault(__webpack_require__(/*! ./validate.js */ "./node_modules/uuid/dist/commonjs-browser/validate.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function version(uuid) {
  if (!(0, _validate.default)(uuid)) {
    throw TypeError('Invalid UUID');
  }
  return parseInt(uuid.slice(14, 15), 16);
}
var _default = exports["default"] = version;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
var exports = __webpack_exports__;
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const Game_1 = __webpack_require__(/*! ./Game */ "./src/Game.ts");
window.onload = () => {
    const game = new Game_1.default(document.querySelector('#game'));
    game.initialise();
};

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RkQ7QUFDQTtBQUNBLHNEQUFzRDtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QztBQUM5QztBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsaUJBQWlCO0FBQ2pCLHFCQUFxQjtBQUNyQixxQkFBcUI7QUFDckIscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsWUFBWSx3QkFBd0I7QUFDcEM7QUFDQSxxQkFBcUI7QUFDckI7QUFDQSxVQUFVO0FBQ1YsS0FBSyxrQ0FBa0MsRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUFFO0FBQ25FLFVBQVU7QUFDVixLQUFLLGtDQUFrQyxFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUFFO0FBQ2hGLFVBQVU7QUFDVixLQUFLLG1DQUFtQyxJQUFJLFlBQVksSUFBSSxZQUFZLElBQUk7QUFDNUUsVUFBVTtBQUNWLEtBQUssbUNBQW1DLElBQUksbUJBQW1CLElBQUksbUJBQW1CLElBQUk7QUFDMUYsVUFBVTtBQUNWLEtBQUssb0NBQW9DLElBQUksWUFBWSxJQUFJLFlBQVksSUFBSTtBQUM3RSxVQUFVO0FBQ1YsS0FBSyxvQ0FBb0MsSUFBSSxtQkFBbUIsSUFBSSxtQkFBbUIsSUFBSTtBQUMzRixVQUFVO0FBQ1YsS0FBSyxtQ0FBbUMsSUFBSSxrQkFBa0IsSUFBSSxtQkFBbUIsSUFBSTtBQUN6RjtBQUNBLEtBQUssb0NBQW9DLElBQUksa0JBQWtCLElBQUksbUJBQW1CLElBQUk7QUFDMUY7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLFVBQVU7QUFDVixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLElBQUksSUFBNkI7QUFDakMscUJBQXFCO0FBQ3JCOzs7Ozs7Ozs7OztBQ3JQQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsWUFBWSxTQUFTO0FBQ3JCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CLFlBQVksUUFBUTtBQUNwQjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsWUFBWSxRQUFRO0FBQ3BCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsWUFBWSxRQUFRO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CLFlBQVksUUFBUTtBQUNwQjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQixZQUFZLFFBQVE7QUFDcEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsWUFBWSxRQUFRO0FBQ3BCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CLFlBQVksUUFBUTtBQUNwQjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsWUFBWSxRQUFRO0FBQ3BCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixZQUFZLFFBQVE7QUFDcEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0Es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QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsK0NBQStDLEVBQUU7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7Ozs7Ozs7Ozs7O0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0JBQW9CLGtCQUFrQjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7QUFRRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOzs7Ozs7Ozs7Ozs7QUFZQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9LQUFvSyxnQ0FBZ0M7QUFDcE07QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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dkw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0osb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLGdGQUFnRix1RUFBdUU7QUFDdko7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsSUFBSTtBQUNKO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLG9DQUFvQztBQUM1RDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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LENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUM5RCxDQUFDO1FBQ0YsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQ3RELENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUM5RCxDQUFDO1FBR0YsSUFBSSx1QkFBWSxDQUFDLFlBQVksRUFBRSxFQUFFO1lBQy9CLElBQUksNEJBQTRCLEdBQzlCLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksSUFBSSxDQUFDO1lBQzFELElBQUksMEJBQTBCLEdBQzVCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksSUFBSSxDQUFDO1lBQ3hELElBQUksMEJBQTBCLEdBQzVCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksSUFBSSxDQUFDO1lBQ3hELElBQUksMEJBQTBCLEdBQzVCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksSUFBSSxDQUFDO1lBQ3hELElBQUksMEJBQTBCLEdBQzVCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJ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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRDs7QUFFbkQ7QUFDQSxvQkFBb0IsZ0JBQWdCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsY0FBYztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsY0FBYztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsYUFBYTtBQUMvQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QkFBZTtBQUNmLG9DQUFvQyxtQkFBTyxDQUFDLHNFQUFZO0FBQ3hELHFDQUFxQyxpQ0FBaUM7QUFDdEU7QUFDQTtBQUNBO0FBQ0EsZUFBZSxrQkFBZTs7Ozs7Ozs7Ozs7QUNYakI7O0FBRWIsOENBQTZDO0FBQzdDO0FBQ0EsQ0FBQyxFQUFDO0FBQ0Ysa0JBQWU7QUFDZix1Q0FBdUMsbUJBQU8sQ0FBQyw0RUFBZTtBQUM5RCxxQ0FBcUMsaUNBQWlDO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsa0JBQWU7Ozs7OztVQ2Q5QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNOQSxrRUFBMEI7QUFFMUIsTUFBTSxDQUFDLE1BQU0sR0FBRyxHQUFHLEVBQUU7SUFDbkIsTUFBTSxJQUFJLEdBQUcsSUFBSSxjQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ3ZELElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztBQUNwQixDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9saWdodGluZy0yLjVkLy4vbm9kZV9tb2R1bGVzL0BiYXNlbWVudHVuaXZlcnNlL2RlYnVnL2J1aWxkL2luZGV4LmpzIiwid2VicGFjazovL2xpZ2h0aW5nLTIuNWQvLi9ub2RlX21vZHVsZXMvQGJhc2VtZW50dW5pdmVyc2UvaW5wdXQtbWFuYWdlci9idWlsZC9pbmRleC5qcyIsIndlYnBhY2s6Ly9saWdodGluZy0yLjVkLy4vbm9kZV9tb2R1bGVzL0BiYXNlbWVudHVuaXZlcnNlL3BhcnNlY29sb3IvcGFyc2Vjb2xvci5qcyIsIndlYnBhY2s6Ly9saWdodGluZy0yLjVkLy4vbm9kZV9tb2R1bGVzL0BiYXNlbWVudHVuaXZlcnNlL3V0aWxzL3V0aWxzLmpzIiwid2VicGFjazovL2xpZ2h0aW5nLTIuNWQvLi9ub2RlX21vZHVsZXMvQGJhc2VtZW50dW5pdmVyc2UvdmVjL3ZlYy5qcyIsIndlYnBhY2s6Ly9saWdodGluZy0yLjVkLy4vbm9kZV9tb2R1bGVzL2RhdC5ndWkvYnVpbGQvZGF0Lmd1aS5tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vbGlnaHRpbmctMi41ZC8uL3NyYy9DaXJjbGVTaGFkb3dDYXN0ZXIudHMiLCJ3ZWJwYWNrOi8vbGlnaHRpbmctMi41ZC8uL3NyYy9HYW1lLnRzIiwid2VicGFjazovL2xpZ2h0aW5nLTIuNWQvLi9zcmMvR3JvdW5kU2hhZG93UmVjZWl2ZXIudHMiLCJ3ZWJwYWNrOi8vbGlnaHRpbmctMi41ZC8uL3NyYy9MaWdodC50cyIsIndlYnBhY2s6Ly9saWdodGluZy0yLjVkLy4vc3JjL0xpZ2h0aW5nU2NlbmUudHMiLCJ3ZWJwYWNrOi8vbGlnaHRpbmctMi41ZC8uL3NyYy9MaWdodGluZ1N5c3RlbS50cyIsIndlYnBhY2s6Ly9saWdodGluZy0yLjVkLy4vc3JjL1JlZ2lvblNoYWRvd0Nhc3Rlci50cyIsIndlYnBhY2s6Ly9saWdodGluZy0yLjVkLy4vc3JjL1Nwcml0ZVNoYWRvd0Nhc3Rlci50cyIsIndlYnBhY2s6Ly9saWdodGluZy0yLjVkLy4vc3JjL1dhbGxTaGFkb3dSZWNlaXZlci50cyIsIndlYnBhY2s6Ly9saWdodGluZy0yLjVkLy4vc3JjL2NvbnN0YW50cy50cyIsIndlYnBhY2s6Ly9saWdodGluZy0yLjVkLy4vc3JjL3R5cGVzLnRzIiwid2VicGFjazovL2xpZ2h0aW5nLTIuNWQvLi9zcmMvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vbGlnaHRpbmctMi41ZC8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvY29tbW9uanMtYnJvd3Nlci9pbmRleC5qcyIsIndlYnBhY2s6Ly9saWdodGluZy0yLjVkLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9jb21tb25qcy1icm93c2VyL21heC5qcyIsIndlYnBhY2s6Ly9saWdodGluZy0yLjVkLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9jb21tb25qcy1icm93c2VyL21kNS5qcyIsIndlYnBhY2s6Ly9saWdodGluZy0yLjVkLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9jb21tb25qcy1icm93c2VyL25hdGl2ZS5qcyIsIndlYnBhY2s6Ly9saWdodGluZy0yLjVkLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9jb21tb25qcy1icm93c2VyL25pbC5qcyIsIndlYnBhY2s6Ly9saWdodGluZy0yLjVkLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9jb21tb25qcy1icm93c2VyL3BhcnNlLmpzIiwid2VicGFjazovL2xpZ2h0aW5nLTIuNWQvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2NvbW1vbmpzLWJyb3dzZXIvcmVnZXguanMiLCJ3ZWJwYWNrOi8vbGlnaHRpbmctMi41ZC8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvY29tbW9uanMtYnJvd3Nlci9ybmcuanMiLCJ3ZWJwYWNrOi8vbGlnaHRpbmctMi41ZC8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvY29tbW9uanMtYnJvd3Nlci9zaGExLmpzIiwid2VicGFjazovL2xpZ2h0aW5nLTIuNWQvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2NvbW1vbmpzLWJyb3dzZXIvc3RyaW5naWZ5LmpzIiwid2VicGFjazovL2xpZ2h0aW5nLTIuNWQvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2NvbW1vbmpzLWJyb3dzZXIvdjEuanMiLCJ3ZWJwYWNrOi8vbGlnaHRpbmctMi41ZC8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvY29tbW9uanMtYnJvd3Nlci92MVRvVjYuanMiLCJ3ZWJwYWNrOi8vbGlnaHRpbmctMi41ZC8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvY29tbW9uanMtYnJvd3Nlci92My5qcyIsIndlYnBhY2s6Ly9saWdodGluZy0yLjVkLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9jb21tb25qcy1icm93c2VyL3YzNS5qcyIsIndlYnBhY2s6Ly9saWdodGluZy0yLjVkLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9jb21tb25qcy1icm93c2VyL3Y0LmpzIiwid2VicGFjazovL2xpZ2h0aW5nLTIuNWQvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2NvbW1vbmpzLWJyb3dzZXIvdjUuanMiLCJ3ZWJwYWNrOi8vbGlnaHRpbmctMi41ZC8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvY29tbW9uanMtYnJvd3Nlci92Ni5qcyIsIndlYnBhY2s6Ly9saWdodGluZy0yLjVkLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9jb21tb25qcy1icm93c2VyL3Y2VG9WMS5qcyIsIndlYnBhY2s6Ly9saWdodGluZy0yLjVkLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9jb21tb25qcy1icm93c2VyL3Y3LmpzIiwid2VicGFjazovL2xpZ2h0aW5nLTIuNWQvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2NvbW1vbmpzLWJyb3dzZXIvdmFsaWRhdGUuanMiLCJ3ZWJwYWNrOi8vbGlnaHRpbmctMi41ZC8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvY29tbW9uanMtYnJvd3Nlci92ZXJzaW9uLmpzIiwid2VicGFjazovL2xpZ2h0aW5nLTIuNWQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbGlnaHRpbmctMi41ZC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbGlnaHRpbmctMi41ZC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2xpZ2h0aW5nLTIuNWQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9saWdodGluZy0yLjVkLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBBVFRFTlRJT046IFRoZSBcImV2YWxcIiBkZXZ0b29sIGhhcyBiZWVuIHVzZWQgKG1heWJlIGJ5IGRlZmF1bHQgaW4gbW9kZTogXCJkZXZlbG9wbWVudFwiKS5cbiAqIFRoaXMgZGV2dG9vbCBpcyBuZWl0aGVyIG1hZGUgZm9yIHByb2R1Y3Rpb24gbm9yIGZvciByZWFkYWJsZSBvdXRwdXQgZmlsZXMuXG4gKiBJdCB1c2VzIFwiZXZhbCgpXCIgY2FsbHMgdG8gY3JlYXRlIGEgc2VwYXJhdGUgc291cmNlIGZpbGUgaW4gdGhlIGJyb3dzZXIgZGV2dG9vbHMuXG4gKiBJZiB5b3UgYXJlIHRyeWluZyB0byByZWFkIHRoZSBvdXRwdXQgZmlsZSwgc2VsZWN0IGEgZGlmZmVyZW50IGRldnRvb2wgKGh0dHBzOi8vd2VicGFjay5qcy5vcmcvY29uZmlndXJhdGlvbi9kZXZ0b29sLylcbiAqIG9yIGRpc2FibGUgdGhlIGRlZmF1bHQgZGV2dG9vbCB3aXRoIFwiZGV2dG9vbDogZmFsc2VcIi5cbiAqIElmIHlvdSBhcmUgbG9va2luZyBmb3IgcHJvZHVjdGlvbi1yZWFkeSBvdXRwdXQgZmlsZXMsIHNlZSBtb2RlOiBcInByb2R1Y3Rpb25cIiAoaHR0cHM6Ly93ZWJwYWNrLmpzLm9yZy9jb25maWd1cmF0aW9uL21vZGUvKS5cbiAqL1xuKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIHtcblx0XHR2YXIgYSA9IGZhY3RvcnkoKTtcblx0XHRmb3IodmFyIGkgaW4gYSkgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyA/IGV4cG9ydHMgOiByb290KVtpXSA9IGFbaV07XG5cdH1cbn0pKHNlbGYsICgpID0+IHtcbnJldHVybiAvKioqKioqLyAoKCkgPT4geyAvLyB3ZWJwYWNrQm9vdHN0cmFwXG4vKioqKioqLyBcdHZhciBfX3dlYnBhY2tfbW9kdWxlc19fID0gKHtcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9AYmFzZW1lbnR1bml2ZXJzZS91dGlscy91dGlscy5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9AYmFzZW1lbnR1bml2ZXJzZS91dGlscy91dGlscy5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKiovICgobW9kdWxlKSA9PiB7XG5cbmV2YWwoXCIvKipcXG4gKiBAb3ZlcnZpZXcgQSBsaWJyYXJ5IG9mIHVzZWZ1bCBmdW5jdGlvbnNcXG4gKiBAYXV0aG9yIEdvcmRvbiBMYXJyaWdhblxcbiAqL1xcblxcbi8qKlxcbiAqIENoZWNrIGlmIHR3byBudW1iZXJzIGFyZSBhcHByb3hpbWF0ZWx5IGVxdWFsXFxuICogQHBhcmFtIHtudW1iZXJ9IGEgTnVtYmVyIGFcXG4gKiBAcGFyYW0ge251bWJlcn0gYiBOdW1iZXIgYlxcbiAqIEBwYXJhbSB7bnVtYmVyfSBbcD1OdW1iZXIuRVBTSUxPTl0gVGhlIHByZWNpc2lvbiB2YWx1ZVxcbiAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgbnVtYmVycyBhIGFuZCBiIGFyZSBhcHByb3hpbWF0ZWx5IGVxdWFsXFxuICovXFxuY29uc3QgZmxvYXRFcXVhbHMgPSAoYSwgYiwgcCA9IE51bWJlci5FUFNJTE9OKSA9PiBNYXRoLmFicyhhIC0gYikgPCBwO1xcblxcbi8qKlxcbiAqIENsYW1wIGEgbnVtYmVyIGJldHdlZW4gbWluIGFuZCBtYXhcXG4gKiBAcGFyYW0ge251bWJlcn0gYSBUaGUgbnVtYmVyIHRvIGNsYW1wXFxuICogQHBhcmFtIHtudW1iZXJ9IFttaW49MF0gVGhlIG1pbmltdW0gdmFsdWVcXG4gKiBAcGFyYW0ge251bWJlcn0gW21heD0xXSBUaGUgbWF4aW11bSB2YWx1ZVxcbiAqIEByZXR1cm4ge251bWJlcn0gQSBjbGFtcGVkIG51bWJlclxcbiAqL1xcbmNvbnN0IGNsYW1wID0gKGEsIG1pbiA9IDAsIG1heCA9IDEpID0+IGEgPCBtaW4gPyBtaW4gOiAoYSA+IG1heCA/IG1heCA6IGEpO1xcblxcbi8qKlxcbiAqIEdldCB0aGUgZnJhY3Rpb25hbCBwYXJ0IG9mIGEgbnVtYmVyXFxuICogQHBhcmFtIHtudW1iZXJ9IGEgVGhlIG51bWJlciBmcm9tIHdoaWNoIHRvIGdldCB0aGUgZnJhY3Rpb25hbCBwYXJ0XFxuICogQHJldHVybiB7bnVtYmVyfSBUaGUgZnJhY3Rpb25hbCBwYXJ0IG9mIHRoZSBudW1iZXJcXG4gKi9cXG5jb25zdCBmcmFjID0gYSA9PiBhID49IDAgPyBhIC0gTWF0aC5mbG9vcihhKSA6IGEgLSBNYXRoLmNlaWwoYSk7XFxuXFxuLyoqXFxuICogRG8gYSBsaW5lYXIgaW50ZXJwb2xhdGlvbiBiZXR3ZWVuIGEgYW5kIGJcXG4gKiBAcGFyYW0ge251bWJlcn0gYSBUaGUgbWluaW11bSBudW1iZXJcXG4gKiBAcGFyYW0ge251bWJlcn0gYiBUaGUgbWF4aW11bSBudW1iZXJcXG4gKiBAcGFyYW0ge251bWJlcn0gaSBUaGUgaW50ZXJwb2xhdGlvbiB2YWx1ZSwgc2hvdWxkIGJlIGluIHRoZSBpbnRlcnZhbCBbMCwgMV1cXG4gKiBAcmV0dXJuIHtudW1iZXJ9IEFuIGludGVycG9sYXRlZCB2YWx1ZSBpbiB0aGUgaW50ZXJ2YWwgW2EsIGJdXFxuICovXFxuY29uc3QgbGVycCA9IChhLCBiLCBpKSA9PiBhICsgKGIgLSBhKSAqIGk7XFxuXFxuLyoqXFxuICogR2V0IHRoZSBwb3NpdGlvbiBvZiBpIGJldHdlZW4gYSBhbmQgYlxcbiAqIEBwYXJhbSB7bnVtYmVyfSBhIFRoZSBtaW5pbXVtIG51bWJlclxcbiAqIEBwYXJhbSB7bnVtYmVyfSBiIFRoZSBtYXhpbXVtIG51bWJlclxcbiAqIEBwYXJhbSB7bnVtYmVyfSBpIFRoZSBpbnRlcnBvbGF0ZWQgdmFsdWUgaW4gdGhlIGludGVydmFsIFthLCBiXVxcbiAqIEByZXR1cm4ge251bWJlcn0gVGhlIHBvc2l0aW9uIG9mIGkgYmV0d2VlbiBhIGFuZCBiXFxuICovXFxuY29uc3QgdW5sZXJwID0gKGEsIGIsIGkpID0+IChpIC0gYSkgLyAoYiAtIGEpO1xcblxcbi8qKlxcbiAqIERvIGEgYmlsaW5lYXIgaW50ZXJwb2xhdGlvblxcbiAqIEBwYXJhbSB7bnVtYmVyfSBjMDAgVG9wLWxlZnQgdmFsdWVcXG4gKiBAcGFyYW0ge251bWJlcn0gYzEwIFRvcC1yaWdodCB2YWx1ZVxcbiAqIEBwYXJhbSB7bnVtYmVyfSBjMDEgQm90dG9tLWxlZnQgdmFsdWVcXG4gKiBAcGFyYW0ge251bWJlcn0gYzExIEJvdHRvbS1yaWdodCB2YWx1ZVxcbiAqIEBwYXJhbSB7bnVtYmVyfSBpeCBJbnRlcnBvbGF0aW9uIHZhbHVlIGFsb25nIHhcXG4gKiBAcGFyYW0ge251bWJlcn0gaXkgSW50ZXJwb2xhdGlvbiB2YWx1ZSBhbG9uZyB5XFxuICogQHJldHVybiB7bnVtYmVyfSBBIGJpbGluZWFyIGludGVycG9sYXRlZCB2YWx1ZVxcbiAqL1xcbmNvbnN0IGJsZXJwID0gKGMwMCwgYzEwLCBjMDEsIGMxMSwgaXgsIGl5KSA9PiBsZXJwKGxlcnAoYzAwLCBjMTAsIGl4KSwgbGVycChjMDEsIGMxMSwgaXgpLCBpeSk7XFxuXFxuLyoqXFxuICogUmUtbWFwIGEgbnVtYmVyIGkgZnJvbSByYW5nZSBhMS4uLmEyIHRvIGIxLi4uYjJcXG4gKiBAcGFyYW0ge251bWJlcn0gaSBUaGUgbnVtYmVyIHRvIHJlLW1hcFxcbiAqIEBwYXJhbSB7bnVtYmVyfSBhMVxcbiAqIEBwYXJhbSB7bnVtYmVyfSBhMlxcbiAqIEBwYXJhbSB7bnVtYmVyfSBiMVxcbiAqIEBwYXJhbSB7bnVtYmVyfSBiMlxcbiAqIEByZXR1cm4ge251bWJlcn1cXG4gKi9cXG5jb25zdCByZW1hcCA9IChpLCBhMSwgYTIsIGIxLCBiMikgPT4gYjEgKyAoaSAtIGExKSAqIChiMiAtIGIxKSAvIChhMiAtIGExKTtcXG5cXG4vKipcXG4gKiBEbyBhIHNtb290aCBpbnRlcnBvbGF0aW9uIGJldHdlZW4gYSBhbmQgYlxcbiAqIEBwYXJhbSB7bnVtYmVyfSBhIFRoZSBtaW5pbXVtIG51bWJlclxcbiAqIEBwYXJhbSB7bnVtYmVyfSBiIFRoZSBtYXhpbXVtIG51bWJlclxcbiAqIEBwYXJhbSB7bnVtYmVyfSBpIFRoZSBpbnRlcnBvbGF0aW9uIHZhbHVlXFxuICogQHJldHVybiB7bnVtYmVyfSBBbiBpbnRlcnBvbGF0ZWQgdmFsdWUgaW4gdGhlIGludGVydmFsIFthLCBiXVxcbiAqL1xcbmNvbnN0IHNtb290aHN0ZXAgPSAoYSwgYiwgaSkgPT4gbGVycChhLCBiLCAzICogTWF0aC5wb3coaSwgMikgLSAyICogTWF0aC5wb3coaSwgMykpO1xcblxcbi8qKlxcbiAqIEdldCBhbiBhbmdsZSBpbiByYWRpYW5zXFxuICogQHBhcmFtIHtudW1iZXJ9IGRlZ3JlZXMgVGhlIGFuZ2xlIGluIGRlZ3JlZXNcXG4gKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBhbmdsZSBpbiByYWRpYW5zXFxuICovXFxuY29uc3QgcmFkaWFucyA9IGRlZ3JlZXMgPT4gKE1hdGguUEkgLyAxODApICogZGVncmVlcztcXG5cXG4vKipcXG4gKiBHZXQgYW4gYW5nbGUgaW4gZGVncmVlc1xcbiAqIEBwYXJhbSB7bnVtYmVyfSByYWRpYW5zIFRoZSBhbmdsZSBpbiByYWRpYW5zXFxuICogQHJldHVybiB7bnVtYmVyfSBUaGUgYW5nbGUgaW4gZGVncmVlc1xcbiAqL1xcbmNvbnN0IGRlZ3JlZXMgPSByYWRpYW5zID0+ICgxODAgLyBNYXRoLlBJKSAqIHJhZGlhbnM7XFxuXFxuLyoqXFxuICogR2V0IGEgcmFuZG9tIGZsb2F0IGluIHRoZSBpbnRlcnZhbCBbbWluLCBtYXgpXFxuICogQHBhcmFtIHtudW1iZXJ9IG1pbiBJbmNsdXNpdmUgbWluXFxuICogQHBhcmFtIHtudW1iZXJ9IG1heCBFeGNsdXNpdmUgbWF4XFxuICogQHJldHVybiB7bnVtYmVyfSBBIHJhbmRvbSBmbG9hdCBpbiB0aGUgaW50ZXJ2YWwgW21pbiwgbWF4KVxcbiAqL1xcbmNvbnN0IHJhbmRvbUJldHdlZW4gPSAobWluLCBtYXgpID0+IE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSArIG1pbjtcXG5cXG4vKipcXG4gKiBHZXQgYSByYW5kb20gaW50ZWdlciBpbiB0aGUgaW50ZXJ2YWwgW21pbiwgbWF4XVxcbiAqIEBwYXJhbSB7bnVtYmVyfSBtaW4gSW5jbHVzaXZlIG1pblxcbiAqIEBwYXJhbSB7bnVtYmVyfSBtYXggSW5jbHVzaXZlIG1heFxcbiAqIEByZXR1cm4ge251bWJlcn0gQSByYW5kb20gaW50ZWdlciBpbiB0aGUgaW50ZXJ2YWwgW21pbiwgbWF4XVxcbiAqL1xcbmNvbnN0IHJhbmRvbUludEJldHdlZW4gPSAobWluLCBtYXgpID0+IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW47XFxuXFxuLyoqXFxuICogR2V0IGEgbm9ybWFsbHktZGlzdHJpYnV0ZWQgcmFuZG9tIG51bWJlclxcbiAqIEBwYXJhbSB7bnVtYmVyfSBbbXU9MC41XSBUaGUgbWVhbiB2YWx1ZVxcbiAqIEBwYXJhbSB7bnVtYmVyfSBbc2lnbWE9MC41XSBUaGUgc3RhbmRhcmQgZGV2aWF0aW9uXFxuICogQHBhcmFtIHtudW1iZXJ9IFtzYW1wbGVzPTJdIFRoZSBudW1iZXIgb2Ygc2FtcGxlc1xcbiAqIEByZXR1cm4ge251bWJlcn0gQSBub3JtYWxseS1kaXN0cmlidXRlZCByYW5kb20gbnVtYmVyXFxuICovXFxuY29uc3QgY2x0UmFuZG9tID0gKG11ID0gMC41LCBzaWdtYSA9IDAuNSwgc2FtcGxlcyA9IDIpID0+IHtcXG4gIGxldCB0b3RhbCA9IDA7XFxuICBmb3IgKGxldCBpID0gc2FtcGxlczsgaS0tOykge1xcbiAgICB0b3RhbCArPSBNYXRoLnJhbmRvbSgpO1xcbiAgfVxcbiAgcmV0dXJuIG11ICsgKHRvdGFsIC0gc2FtcGxlcyAvIDIpIC8gKHNhbXBsZXMgLyAyKSAqIHNpZ21hO1xcbn07XFxuXFxuLyoqXFxuICogR2V0IGEgbm9ybWFsbHktZGlzdHJpYnV0ZWQgcmFuZG9tIGludGVnZXIgaW4gdGhlIGludGVydmFsIFttaW4sIG1heF1cXG4gKiBAcGFyYW0ge251bWJlcn0gbWluIEluY2x1c2l2ZSBtaW5cXG4gKiBAcGFyYW0ge251bWJlcn0gbWF4IEluY2x1c2l2ZSBtYXhcXG4gKiBAcmV0dXJuIHtudW1iZXJ9IEEgbm9ybWFsbHktZGlzdHJpYnV0ZWQgcmFuZG9tIGludGVnZXJcXG4gKi9cXG5jb25zdCBjbHRSYW5kb21JbnQgPSAobWluLCBtYXgpID0+IE1hdGguZmxvb3IobWluICsgY2x0UmFuZG9tKDAuNSwgMC41LCAyKSAqIChtYXggKyAxIC0gbWluKSk7XFxuXFxuLyoqXFxuICogUmV0dXJuIGEgd2VpZ2h0ZWQgcmFuZG9tIGludGVnZXJcXG4gKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IHcgQW4gYXJyYXkgb2Ygd2VpZ2h0c1xcbiAqIEByZXR1cm4ge251bWJlcn0gQW4gaW5kZXggZnJvbSB3XFxuICovXFxuY29uc3Qgd2VpZ2h0ZWRSYW5kb20gPSB3ID0+IHtcXG4gIGxldCB0b3RhbCA9IHcucmVkdWNlKChhLCBpKSA9PiBhICsgaSwgMCksIG4gPSAwO1xcbiAgY29uc3QgciA9IE1hdGgucmFuZG9tKCkgKiB0b3RhbDtcXG4gIHdoaWxlICh0b3RhbCA+IHIpIHtcXG4gICAgdG90YWwgLT0gd1tuKytdO1xcbiAgfVxcbiAgcmV0dXJuIG4gLSAxO1xcbn07XFxuXFxuLyoqXFxuICogQW4gaW50ZXJwb2xhdGlvbiBmdW5jdGlvblxcbiAqIEBjYWxsYmFjayBpbnRlcnBvbGF0aW9uQ2FsbGJhY2tcXG4gKiBAcGFyYW0ge251bWJlcn0gYSBUaGUgbWluaW11bSBudW1iZXJcXG4gKiBAcGFyYW0ge251bWJlcn0gYiBUaGUgbWF4aW11bSBudW1iZXJcXG4gKiBAcGFyYW0ge251bWJlcn0gaSBUaGUgaW50ZXJwb2xhdGlvbiB2YWx1ZSwgc2hvdWxkIGJlIGluIHRoZSBpbnRlcnZhbCBbMCwgMV1cXG4gKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBpbnRlcnBvbGF0ZWQgdmFsdWUgaW4gdGhlIGludGVydmFsIFthLCBiXVxcbiAqL1xcblxcbi8qKlxcbiAqIFJldHVybiBhbiBpbnRlcnBvbGF0ZWQgdmFsdWUgZnJvbSBhbiBhcnJheVxcbiAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0gYSBBbiBhcnJheSBvZiB2YWx1ZXMgaW50ZXJwb2xhdGVcXG4gKiBAcGFyYW0ge251bWJlcn0gaSBBIG51bWJlciBpbiB0aGUgaW50ZXJ2YWwgWzAsIDFdXFxuICogQHBhcmFtIHtpbnRlcnBvbGF0aW9uQ2FsbGJhY2t9IFtmPU1hdGgubGVycF0gVGhlIGludGVycG9sYXRpb24gZnVuY3Rpb24gdG8gdXNlXFxuICogQHJldHVybiB7bnVtYmVyfSBBbiBpbnRlcnBvbGF0ZWQgdmFsdWUgaW4gdGhlIGludGVydmFsIFttaW4oYSksIG1heChhKV1cXG4gKi9cXG5jb25zdCBsZXJwQXJyYXkgPSAoYSwgaSwgZiA9IGxlcnApID0+IHtcXG4gIGNvbnN0IHMgPSBpICogKGEubGVuZ3RoIC0gMSk7XFxuICBjb25zdCBwID0gY2xhbXAoTWF0aC50cnVuYyhzKSwgMCwgYS5sZW5ndGggLSAxKTtcXG4gIHJldHVybiBmKGFbcF0gfHwgMCwgYVtwICsgMV0gfHwgMCwgZnJhYyhzKSk7XFxufTtcXG5cXG4vKipcXG4gKiBHZXQgdGhlIGRvdCBwcm9kdWN0IG9mIHR3byB2ZWN0b3JzXFxuICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSBhIFZlY3RvciBhXFxuICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSBiIFZlY3RvciBiXFxuICogQHJldHVybiB7bnVtYmVyfSBhIOKImSBiXFxuICovXFxuY29uc3QgZG90ID0gKGEsIGIpID0+IGEucmVkdWNlKChuLCB2LCBpKSA9PiBuICsgdiAqIGJbaV0sIDApO1xcblxcbi8qKlxcbiAqIEdldCB0aGUgZmFjdG9yaWFsIG9mIGEgbnVtYmVyXFxuICogQHBhcmFtIHtudW1iZXJ9IGFcXG4gKiBAcmV0dXJuIHtudW1iZXJ9IGEhXFxuICovXFxuY29uc3QgZmFjdG9yaWFsID0gYSA9PiB7XFxuICBsZXQgcmVzdWx0ID0gMTtcXG4gIGZvciAobGV0IGkgPSAyOyBpIDw9IGE7IGkrKykge1xcbiAgICByZXN1bHQgKj0gaTtcXG4gIH1cXG4gIHJldHVybiByZXN1bHQ7XFxufTtcXG5cXG4vKipcXG4gKiBHZXQgdGhlIG51bWJlciBvZiBwZXJtdXRhdGlvbnMgb2YgciBlbGVtZW50cyBmcm9tIGEgc2V0IG9mIG4gZWxlbWVudHNcXG4gKiBAcGFyYW0ge251bWJlcn0gblxcbiAqIEBwYXJhbSB7bnVtYmVyfSByXFxuICogQHJldHVybiB7bnVtYmVyfSBuUHJcXG4gKi9cXG5jb25zdCBwZXJtdXRhdGlvbiA9IChuLCByKSA9PiBmYWN0b3JpYWwobikgLyBmYWN0b3JpYWwobiAtIHIpO1xcblxcbi8qKlxcbiAqIEdldCB0aGUgbnVtYmVyIG9mIGNvbWJpbmF0aW9ucyBvZiByIGVsZW1lbnRzIGZyb20gYSBzZXQgb2YgbiBlbGVtZW50c1xcbiAqIEBwYXJhbSB7bnVtYmVyfSBuXFxuICogQHBhcmFtIHtudW1iZXJ9IHJcXG4gKiBAcmV0dXJuIHtudW1iZXJ9IG5DclxcbiAqL1xcbmNvbnN0IGNvbWJpbmF0aW9uID0gKG4sIHIpID0+IGZhY3RvcmlhbChuKSAvIChmYWN0b3JpYWwocikgKiBmYWN0b3JpYWwobiAtIHIpKTtcXG5cXG4vKipcXG4gKiBBIGZ1bmN0aW9uIGZvciBnZW5lcmF0aW5nIGFycmF5IHZhbHVlc1xcbiAqIEBjYWxsYmFjayB0aW1lc0NhbGxiYWNrXFxuICogQHBhcmFtIHtudW1iZXJ9IGkgVGhlIGFycmF5IGluZGV4XFxuICogQHJldHVybiB7Kn0gVGhlIGFycmF5IHZhbHVlXFxuICovXFxuXFxuLyoqXFxuICogUmV0dXJuIGEgbmV3IGFycmF5IHdpdGggbGVuZ3RoIG4gYnkgY2FsbGluZyBmdW5jdGlvbiBmKGkpIG9uIGVhY2ggZWxlbWVudFxcbiAqIEBwYXJhbSB7dGltZXNDYWxsYmFja30gZlxcbiAqIEBwYXJhbSB7bnVtYmVyfSBuIFRoZSBzaXplIG9mIHRoZSBhcnJheVxcbiAqIEByZXR1cm4ge0FycmF5PCo+fVxcbiAqL1xcbmNvbnN0IHRpbWVzID0gKGYsIG4pID0+IEFycmF5KG4pLmZpbGwoMCkubWFwKChfLCBpKSA9PiBmKGkpKTtcXG5cXG4vKipcXG4gKiBSZXR1cm4gYW4gYXJyYXkgY29udGFpbmluZyBudW1iZXJzIDAtPihuIC0gMSlcXG4gKiBAcGFyYW0ge251bWJlcn0gbiBUaGUgc2l6ZSBvZiB0aGUgYXJyYXlcXG4gKiBAcmV0dXJuIHtBcnJheTxudW1iZXI+fSBBbiBhcnJheSBvZiBpbnRlZ2VycyAwLT4obiAtIDEpXFxuICovXFxuY29uc3QgcmFuZ2UgPSBuID0+IHRpbWVzKGkgPT4gaSwgbik7XFxuXFxuLyoqXFxuICogWmlwIDIgYXJyYXlzIHRvZ2V0aGVyLCBpLmUuIChbMSwgMiwgM10sIFthLCBiLCBjXSkgPT4gW1sxLCBhXSwgWzIsIGJdLCBbMywgY11dXFxuICogQHBhcmFtIHtBcnJheTwqPn0gYVxcbiAqIEBwYXJhbSB7QXJyYXk8Kj59IGJcXG4gKiBAcmV0dXJuIHtBcnJheTxBcnJheTwqPj59XFxuICovXFxuY29uc3QgemlwID0gKGEsIGIpID0+IGEubWFwKChrLCBpKSA9PiBbaywgYltpXV0pO1xcblxcbi8qKlxcbiAqIFJldHVybiBhcnJheVtpXSB3aXRoIHBvc2l0aXZlIGFuZCBuZWdhdGl2ZSB3cmFwcGluZ1xcbiAqIEBwYXJhbSB7QXJyYXk8Kj59IGFcXG4gKiBAcGFyYW0ge251bWJlcn0gaSBUaGUgcG9zaXRpdmVseS9uZWdhdGl2ZWx5IHdyYXBwZWQgYXJyYXkgaW5kZXhcXG4gKiBAcmV0dXJuIHsqfSBBbiBlbGVtZW50IGZyb20gdGhlIGFycmF5XFxuICovXFxuY29uc3QgYXQgPSAoYSwgaSkgPT4gYVtpIDwgMCA/IGEubGVuZ3RoIC0gKE1hdGguYWJzKGkgKyAxKSAlIGEubGVuZ3RoKSAtIDEgOiBpICUgYS5sZW5ndGhdO1xcblxcbi8qKlxcbiAqIENob3AgYW4gYXJyYXkgaW50byBjaHVua3Mgb2Ygc2l6ZSBuXFxuICogQHBhcmFtIHtBcnJheTwqPn0gYVxcbiAqIEBwYXJhbSB7bnVtYmVyfSBuIFRoZSBjaHVuayBzaXplXFxuICogQHJldHVybiB7QXJyYXk8QXJyYXk8Kj4+fSBBbiBhcnJheSBvZiBhcnJheSBjaHVua3NcXG4gKi9cXG5jb25zdCBjaHVuayA9IChhLCBuKSA9PiB0aW1lcyhpID0+IGEuc2xpY2UoaSAqIG4sIGkgKiBuICsgbiksIE1hdGguY2VpbChhLmxlbmd0aCAvIG4pKTtcXG5cXG4vKipcXG4gKiBSYW5kb21seSBzaHVmZmxlIGEgc2hhbGxvdyBjb3B5IG9mIGFuIGFycmF5XFxuICogQHBhcmFtIHtBcnJheTwqPn0gYVxcbiAqIEByZXR1cm4ge0FycmF5PCo+fSBUaGUgc2h1ZmZsZWQgYXJyYXlcXG4gKi9cXG5jb25zdCBzaHVmZmxlID0gYSA9PiBhLnNsaWNlKCkuc29ydCgoKSA9PiBNYXRoLnJhbmRvbSgpIC0gMC41KTtcXG5cXG5pZiAodHJ1ZSkge1xcbiAgbW9kdWxlLmV4cG9ydHMgPSB7XFxuICAgIGZsb2F0RXF1YWxzLFxcbiAgICBjbGFtcCxcXG4gICAgZnJhYyxcXG4gICAgbGVycCxcXG4gICAgdW5sZXJwLFxcbiAgICBibGVycCxcXG4gICAgcmVtYXAsXFxuICAgIHNtb290aHN0ZXAsXFxuICAgIHJhZGlhbnMsXFxuICAgIGRlZ3JlZXMsXFxuICAgIHJhbmRvbUJldHdlZW4sXFxuICAgIHJhbmRvbUludEJldHdlZW4sXFxuICAgIGNsdFJhbmRvbSxcXG4gICAgY2x0UmFuZG9tSW50LFxcbiAgICB3ZWlnaHRlZFJhbmRvbSxcXG4gICAgbGVycEFycmF5LFxcbiAgICBkb3QsXFxuICAgIGZhY3RvcmlhbCxcXG4gICAgcGVybXV0YXRpb24sXFxuICAgIGNvbWJpbmF0aW9uLFxcbiAgICB0aW1lcyxcXG4gICAgcmFuZ2UsXFxuICAgIHppcCxcXG4gICAgYXQsXFxuICAgIGNodW5rLFxcbiAgICBzaHVmZmxlLFxcbiAgfTtcXG59XFxuXFxuXFxuLy8jIHNvdXJjZVVSTD13ZWJwYWNrOi8vQGJhc2VtZW50dW5pdmVyc2UvZGVidWcvLi9ub2RlX21vZHVsZXMvQGJhc2VtZW50dW5pdmVyc2UvdXRpbHMvdXRpbHMuanM/XCIpO1xuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9AYmFzZW1lbnR1bml2ZXJzZS92ZWMvdmVjLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvQGJhc2VtZW50dW5pdmVyc2UvdmVjL3ZlYy5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKi8gKChtb2R1bGUsIF9fdW51c2VkX3dlYnBhY2tfZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykgPT4ge1xuXG5ldmFsKFwiY29uc3QgeyB0aW1lcywgY2h1bmssIGRvdCB9ID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgQGJhc2VtZW50dW5pdmVyc2UvdXRpbHMgKi8gXFxcIi4vbm9kZV9tb2R1bGVzL0BiYXNlbWVudHVuaXZlcnNlL3V0aWxzL3V0aWxzLmpzXFxcIik7XFxuXFxuLyoqXFxuICogQG92ZXJ2aWV3IEEgbGlicmFyeSBvZiB1c2VmdWwgZnVuY3Rpb25zXFxuICogQGF1dGhvciBHb3Jkb24gTGFycmlnYW5cXG4gKi9cXG5cXG4vKipcXG4gKiBBIDJkIHZlY3RvclxcbiAqIEB0eXBlZGVmIHtPYmplY3R9IHZlY1xcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSB4IFRoZSB4IGNvbXBvbmVudCBvZiB0aGUgdmVjdG9yXFxuICogQHByb3BlcnR5IHtudW1iZXJ9IHkgVGhlIHkgY29tcG9uZW50IG9mIHRoZSB2ZWN0b3JcXG4gKi9cXG5cXG4vKipcXG4gKiBDcmVhdGUgYSBuZXcgdmVjdG9yXFxuICogQHBhcmFtIHtudW1iZXJ8dmVjfSBbeF0gVGhlIHggY29tcG9uZW50IG9mIHRoZSB2ZWN0b3IsIG9yIGEgdmVjdG9yIHRvIGNvcHlcXG4gKiBAcGFyYW0ge251bWJlcn0gW3ldIFRoZSB5IGNvbXBvbmVudCBvZiB0aGUgdmVjdG9yXFxuICogQHJldHVybiB7dmVjfSBBIG5ldyB2ZWN0b3JcXG4gKiBAZXhhbXBsZSA8Y2FwdGlvbj5WYXJpb3VzIHdheXMgdG8gaW5pdGlhbGlzZSBhIHZlY3RvcjwvY2FwdGlvbj5cXG4gKiBsZXQgYSA9IHZlYygzLCAyKTsgIC8vICgzLCAyKVxcbiAqIGxldCBiID0gdmVjKDQpOyAgICAgLy8gKDQsIDQpXFxuICogbGV0IGMgPSB2ZWMoYSk7ICAgICAvLyAoMywgMilcXG4gKiBsZXQgZCA9IHZlYygpOyAgICAgIC8vICgwLCAwKVxcbiAqL1xcbmNvbnN0IHZlYyA9ICh4LCB5KSA9PiAoIXggJiYgIXkgP1xcbiAgeyB4OiAwLCB5OiAwIH0gOiAodHlwZW9mIHggPT09ICdvYmplY3QnID9cXG4gICAgeyB4OiB4LnggfHwgMCwgeTogeC55IHx8IDAgfSA6ICh5ID09PSBudWxsIHx8IHkgPT09IHVuZGVmaW5lZCA/XFxuICAgICAgeyB4OiB4LCB5OiB4IH0gOiB7IHg6IHgsIHk6IHkgfSlcXG4gIClcXG4pO1xcblxcbi8qKlxcbiAqIEdldCB0aGUgY29tcG9uZW50cyBvZiBhIHZlY3RvciBhcyBhbiBhcnJheVxcbiAqIEBwYXJhbSB7dmVjfSBhIFRoZSB2ZWN0b3IgdG8gZ2V0IGNvbXBvbmVudHMgZnJvbVxcbiAqIEByZXR1cm4ge0FycmF5PG51bWJlcj59IFRoZSB2ZWN0b3IgY29tcG9uZW50cyBhcyBhbiBhcnJheVxcbiAqL1xcbnZlYy5jb21wb25lbnRzID0gYSA9PiBbYS54LCBhLnldO1xcblxcbi8qKlxcbiAqIFJldHVybiBhIHVuaXQgdmVjdG9yICgxLCAwKVxcbiAqIEByZXR1cm4ge3ZlY30gQSB1bml0IHZlY3RvciAoMSwgMClcXG4gKi9cXG52ZWMudXggPSAoKSA9PiB2ZWMoMSwgMCk7XFxuXFxuLyoqXFxuICogUmV0dXJuIGEgdW5pdCB2ZWN0b3IgKDAsIDEpXFxuICogQHJldHVybiB7dmVjfSBBIHVuaXQgdmVjdG9yICgwLCAxKVxcbiAqL1xcbnZlYy51eSA9ICgpID0+IHZlYygwLCAxKTtcXG5cXG4vKipcXG4gKiBBZGQgdmVjdG9yc1xcbiAqIEBwYXJhbSB7dmVjfSBhIFZlY3RvciBhXFxuICogQHBhcmFtIHt2ZWN9IGIgVmVjdG9yIGJcXG4gKiBAcmV0dXJuIHt2ZWN9IGEgKyBiXFxuICovXFxudmVjLmFkZCA9IChhLCBiKSA9PiAoeyB4OiBhLnggKyBiLngsIHk6IGEueSArIGIueSB9KTtcXG5cXG4vKipcXG4gKiBTY2FsZSBhIHZlY3RvclxcbiAqIEBwYXJhbSB7dmVjfSBhIFZlY3RvciBhXFxuICogQHBhcmFtIHtudW1iZXJ9IGIgU2NhbGFyIGJcXG4gKiBAcmV0dXJuIHt2ZWN9IGEgKiBiXFxuICovXFxudmVjLm11bCA9IChhLCBiKSA9PiAoeyB4OiBhLnggKiBiLCB5OiBhLnkgKiBiIH0pO1xcblxcbi8qKlxcbiAqIFN1YnRyYWN0IHZlY3RvcnNcXG4gKiBAcGFyYW0ge3ZlY30gYSBWZWN0b3IgYVxcbiAqIEBwYXJhbSB7dmVjfSBiIFZlY3RvciBiXFxuICogQHJldHVybiB7dmVjfSBhIC0gYlxcbiAqL1xcbnZlYy5zdWIgPSAoYSwgYikgPT4gKHsgeDogYS54IC0gYi54LCB5OiBhLnkgLSBiLnkgfSk7XFxuXFxuLyoqXFxuICogR2V0IHRoZSBsZW5ndGggb2YgYSB2ZWN0b3JcXG4gKiBAcGFyYW0ge3ZlY30gYSBWZWN0b3IgYVxcbiAqIEByZXR1cm4ge251bWJlcn0gfGF8XFxuICovXFxudmVjLmxlbiA9IGEgPT4gTWF0aC5zcXJ0KGEueCAqIGEueCArIGEueSAqIGEueSk7XFxuXFxuLyoqXFxuICogR2V0IHRoZSBsZW5ndGggb2YgYSB2ZWN0b3IgdXNpbmcgdGF4aWNhYiBnZW9tZXRyeVxcbiAqIEBwYXJhbSB7dmVjfSBhIFZlY3RvciBhXFxuICogQHJldHVybiB7bnVtYmVyfSB8YXxcXG4gKi9cXG52ZWMubWFuaGF0dGFuID0gYSA9PiBNYXRoLmFicyhhLngpICsgTWF0aC5hYnMoYS55KTtcXG5cXG4vKipcXG4gKiBOb3JtYWxpc2UgYSB2ZWN0b3JcXG4gKiBAcGFyYW0ge3ZlY30gYSBUaGUgdmVjdG9yIHRvIG5vcm1hbGlzZVxcbiAqIEByZXR1cm4ge3ZlY30gXmFcXG4gKi9cXG52ZWMubm9yID0gYSA9PiB7XFxuICBsZXQgbGVuID0gdmVjLmxlbihhKTtcXG4gIHJldHVybiBsZW4gPyB7IHg6IGEueCAvIGxlbiwgeTogYS55IC8gbGVuIH0gOiB2ZWMoKTtcXG59O1xcblxcbi8qKlxcbiAqIEdldCBhIGRvdCBwcm9kdWN0IG9mIHZlY3RvcnNcXG4gKiBAcGFyYW0ge3ZlY30gYSBWZWN0b3IgYVxcbiAqIEBwYXJhbSB7dmVjfSBiIFZlY3RvciBiXFxuICogQHJldHVybiB7bnVtYmVyfSBhIOKImSBiXFxuICovXFxudmVjLmRvdCA9IChhLCBiKSA9PiBhLnggKiBiLnggKyBhLnkgKiBiLnk7XFxuXFxuLyoqXFxuICogUm90YXRlIGEgdmVjdG9yIGJ5IHIgcmFkaWFuc1xcbiAqIEBwYXJhbSB7dmVjfSBhIFRoZSB2ZWN0b3IgdG8gcm90YXRlXFxuICogQHBhcmFtIHtudW1iZXJ9IHIgVGhlIGFuZ2xlIHRvIHJvdGF0ZSBieSwgbWVhc3VyZWQgaW4gcmFkaWFuc1xcbiAqIEByZXR1cm4ge3ZlY30gQSByb3RhdGVkIHZlY3RvclxcbiAqL1xcbnZlYy5yb3QgPSAoYSwgcikgPT4ge1xcbiAgbGV0IHMgPSBNYXRoLnNpbihyKSxcXG4gICAgYyA9IE1hdGguY29zKHIpO1xcbiAgcmV0dXJuIHsgeDogYyAqIGEueCAtIHMgKiBhLnksIHk6IHMgKiBhLnggKyBjICogYS55IH07XFxufVxcblxcbi8qKlxcbiAqIENoZWNrIGlmIHR3byB2ZWN0b3JzIGFyZSBlcXVhbFxcbiAqIEBwYXJhbSB7dmVjfSBhIFZlY3RvciBhXFxuICogQHBhcmFtIHt2ZWN9IGIgVmVjdG9yIGJcXG4gKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIHZlY3RvcnMgYSBhbmQgYiBhcmUgZXF1YWwsIGZhbHNlIG90aGVyd2lzZVxcbiAqL1xcbnZlYy5lcSA9IChhLCBiKSA9PiBhLnggPT09IGIueCAmJiBhLnkgPT09IGIueTtcXG5cXG4vKipcXG4gKiBHZXQgdGhlIGFuZ2xlIG9mIGEgdmVjdG9yXFxuICogQHBhcmFtIHt2ZWN9IGEgVmVjdG9yIGFcXG4gKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBhbmdsZSBvZiB2ZWN0b3IgYSBpbiByYWRpYW5zXFxuICovXFxudmVjLnJhZCA9IGEgPT4gTWF0aC5hdGFuMihhLnksIGEueCk7XFxuXFxuLyoqXFxuICogQ29weSBhIHZlY3RvclxcbiAqIEBwYXJhbSB7dmVjfSBhIFRoZSB2ZWN0b3IgdG8gY29weVxcbiAqIEByZXR1cm4ge3ZlY30gQSBjb3B5IG9mIHZlY3RvciBhXFxuICovXFxudmVjLmNweSA9IGEgPT4gdmVjKGEpO1xcblxcbi8qKlxcbiAqIEEgZnVuY3Rpb24gdG8gY2FsbCBvbiBlYWNoIGNvbXBvbmVudCBvZiBhIHZlY3RvclxcbiAqIEBjYWxsYmFjayB2ZWN0b3JNYXBDYWxsYmFja1xcbiAqIEBwYXJhbSB7bnVtYmVyfSB2YWx1ZSBUaGUgY29tcG9uZW50IHZhbHVlXFxuICogQHBhcmFtIHsneCcgfCAneSd9IGxhYmVsIFRoZSBjb21wb25lbnQgbGFiZWwgKHggb3IgeSlcXG4gKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBtYXBwZWQgY29tcG9uZW50XFxuICovXFxuXFxuLyoqXFxuICogQ2FsbCBhIGZ1bmN0aW9uIG9uIGVhY2ggY29tcG9uZW50IG9mIGEgdmVjdG9yIGFuZCBidWlsZCBhIG5ldyB2ZWN0b3IgZnJvbSB0aGUgcmVzdWx0c1xcbiAqIEBwYXJhbSB7dmVjfSBhIFZlY3RvciBhXFxuICogQHBhcmFtIHt2ZWN0b3JNYXBDYWxsYmFja30gZiBUaGUgZnVuY3Rpb24gdG8gY2FsbCBvbiBlYWNoIGNvbXBvbmVudCBvZiB0aGUgdmVjdG9yXFxuICogQHJldHVybiB7dmVjfSBWZWN0b3IgYSBtYXBwZWQgdGhyb3VnaCBmXFxuICovXFxudmVjLm1hcCA9IChhLCBmKSA9PiAoeyB4OiBmKGEueCwgJ3gnKSwgeTogZihhLnksICd5JykgfSk7XFxuXFxuLyoqXFxuICogQ29udmVydCBhIHZlY3RvciBpbnRvIGEgc3RyaW5nXFxuICogQHBhcmFtIHt2ZWN9IGEgVGhlIHZlY3RvciB0byBjb252ZXJ0XFxuICogQHBhcmFtIHtzdHJpbmd9IFtzPScsICddIFRoZSBzZXBhcmF0b3Igc3RyaW5nXFxuICogQHJldHVybiB7c3RyaW5nfSBBIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgdmVjdG9yXFxuICovXFxudmVjLnN0ciA9IChhLCBzID0gJywgJykgPT4gYCR7YS54fSR7c30ke2EueX1gO1xcblxcbi8qKlxcbiAqIEEgbWF0cml4XFxuICogQHR5cGVkZWYge09iamVjdH0gbWF0XFxuICogQHByb3BlcnR5IHtudW1iZXJ9IG0gVGhlIG51bWJlciBvZiByb3dzIGluIHRoZSBtYXRyaXhcXG4gKiBAcHJvcGVydHkge251bWJlcn0gbiBUaGUgbnVtYmVyIG9mIGNvbHVtbnMgaW4gdGhlIG1hdHJpeFxcbiAqIEBwcm9wZXJ0eSB7QXJyYXk8bnVtYmVyPn0gZW50cmllcyBUaGUgbWF0cml4IHZhbHVlc1xcbiAqL1xcblxcbi8qKlxcbiAqIENyZWF0ZSBhIG5ldyBtYXRyaXhcXG4gKiBAcGFyYW0ge251bWJlcn0gW209NF0gVGhlIG51bWJlciBvZiByb3dzXFxuICogQHBhcmFtIHtudW1iZXJ9IFtuPTRdIFRoZSBudW1iZXIgb2YgY29sdW1uc1xcbiAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0gW2VudHJpZXM9W11dIE1hdHJpeCB2YWx1ZXMgaW4gcmVhZGluZyBvcmRlclxcbiAqIEByZXR1cm4ge21hdH0gQSBuZXcgbWF0cml4XFxuICovXFxuY29uc3QgbWF0ID0gKG0gPSA0LCBuID0gNCwgZW50cmllcyA9IFtdKSA9PiAoe1xcbiAgbSwgbixcXG4gIGVudHJpZXM6IGVudHJpZXMuY29uY2F0KEFycmF5KG0gKiBuKS5maWxsKDApKS5zbGljZSgwLCBtICogbilcXG59KTtcXG5cXG4vKipcXG4gKiBHZXQgYW4gaWRlbnRpdHkgbWF0cml4IG9mIHNpemUgblxcbiAqIEBwYXJhbSB7bnVtYmVyfSBuIFRoZSBzaXplIG9mIHRoZSBtYXRyaXhcXG4gKiBAcmV0dXJuIHttYXR9IEFuIGlkZW50aXR5IG1hdHJpeFxcbiAqL1xcbm1hdC5pZGVudGl0eSA9IG4gPT4gbWF0KG4sIG4sIEFycmF5KG4gKiBuKS5maWxsKDApLm1hcCgodiwgaSkgPT4gKyhNYXRoLmZsb29yKGkgLyBuKSA9PT0gaSAlIG4pKSk7XFxuXFxuLyoqXFxuICogR2V0IGFuIGVudHJ5IGZyb20gYSBtYXRyaXhcXG4gKiBAcGFyYW0ge21hdH0gYSBNYXRyaXggYVxcbiAqIEBwYXJhbSB7bnVtYmVyfSBpIFRoZSByb3cgb2Zmc2V0XFxuICogQHBhcmFtIHtudW1iZXJ9IGogVGhlIGNvbHVtbiBvZmZzZXRcXG4gKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSB2YWx1ZSBhdCBwb3NpdGlvbiAoaSwgaikgaW4gbWF0cml4IGFcXG4gKi9cXG5tYXQuZ2V0ID0gKGEsIGksIGopID0+IGEuZW50cmllc1soaiAtIDEpICsgKGkgLSAxKSAqIGEubl07XFxuXFxuLyoqXFxuICogU2V0IGFuIGVudHJ5IG9mIGEgbWF0cml4XFxuICogQHBhcmFtIHttYXR9IGEgTWF0cml4IGFcXG4gKiBAcGFyYW0ge251bWJlcn0gaSBUaGUgcm93IG9mZnNldFxcbiAqIEBwYXJhbSB7bnVtYmVyfSBqIFRoZSBjb2x1bW4gb2Zmc2V0XFxuICogQHBhcmFtIHtudW1iZXJ9IHYgVGhlIHZhbHVlIHRvIHNldCBpbiBtYXRyaXggYVxcbiAqL1xcbm1hdC5zZXQgPSAoYSwgaSwgaiwgdikgPT4geyBhLmVudHJpZXNbKGogLSAxKSArIChpIC0gMSkgKiBhLm5dID0gdjsgfTtcXG5cXG4vKipcXG4gKiBHZXQgYSByb3cgZnJvbSBhIG1hdHJpeCBhcyBhbiBhcnJheVxcbiAqIEBwYXJhbSB7bWF0fSBhIE1hdHJpeCBhXFxuICogQHBhcmFtIHtudW1iZXJ9IG0gVGhlIHJvdyBvZmZzZXRcXG4gKiBAcmV0dXJuIHtBcnJheTxudW1iZXI+fSBSb3cgbSBmcm9tIG1hdHJpeCBhXFxuICovXFxubWF0LnJvdyA9IChhLCBtKSA9PiB7XFxuICBjb25zdCBzID0gKG0gLSAxKSAqIGEubjtcXG4gIHJldHVybiBhLmVudHJpZXMuc2xpY2UocywgcyArIGEubik7XFxufTtcXG5cXG4vKipcXG4gKiBHZXQgYSBjb2x1bW4gZnJvbSBhIG1hdHJpeCBhcyBhbiBhcnJheVxcbiAqIEBwYXJhbSB7bWF0fSBhIE1hdHJpeCBhXFxuICogQHBhcmFtIHtudW1iZXJ9IG4gVGhlIGNvbHVtbiBvZmZzZXRcXG4gKiBAcmV0dXJuIHtBcnJheTxudW1iZXI+fSBDb2x1bW4gbiBmcm9tIG1hdHJpeCBhXFxuICovXFxubWF0LmNvbCA9IChhLCBuKSA9PiB0aW1lcyhpID0+IG1hdC5nZXQoYSwgKGkgKyAxKSwgbiksIGEubSk7XFxuXFxuLyoqXFxuICogQWRkIG1hdHJpY2VzXFxuICogQHBhcmFtIHttYXR9IGEgTWF0cml4IGFcXG4gKiBAcGFyYW0ge21hdH0gYiBNYXRyaXggYlxcbiAqIEByZXR1cm4ge21hdH0gYSArIGJcXG4gKi9cXG5tYXQuYWRkID0gKGEsIGIpID0+IGEubSA9PT0gYi5tICYmIGEubiA9PT0gYi5uICYmIG1hdC5tYXAoYSwgKHYsIGkpID0+IHYgKyBiLmVudHJpZXNbaV0pO1xcblxcbi8qKlxcbiAqIFN1YnRyYWN0IG1hdHJpY2VzXFxuICogQHBhcmFtIHttYXR9IGEgTWF0cml4IGFcXG4gKiBAcGFyYW0ge21hdH0gYiBNYXRyaXggYlxcbiAqIEByZXR1cm4ge21hdH0gYSAtIGJcXG4gKi9cXG5tYXQuc3ViID0gKGEsIGIpID0+IGEubSA9PT0gYi5tICYmIGEubiA9PT0gYi5uICYmIG1hdC5tYXAoYSwgKHYsIGkpID0+IHYgLSBiLmVudHJpZXNbaV0pO1xcblxcbi8qKlxcbiAqIE11bHRpcGx5IG1hdHJpY2VzXFxuICogQHBhcmFtIHttYXR9IGEgTWF0cml4IGFcXG4gKiBAcGFyYW0ge21hdH0gYiBNYXRyaXggYlxcbiAqIEByZXR1cm4ge21hdHxib29sZWFufSBhYiBvciBmYWxzZSBpZiB0aGUgbWF0cmljZXMgY2Fubm90IGJlIG11bHRpcGxpZWRcXG4gKi9cXG5tYXQubXVsID0gKGEsIGIpID0+IHtcXG4gIGlmIChhLm4gIT09IGIubSkgeyByZXR1cm4gZmFsc2U7IH1cXG4gIGNvbnN0IHJlc3VsdCA9IG1hdChhLm0sIGIubik7XFxuICBmb3IgKGxldCBpID0gMTsgaSA8PSBhLm07IGkrKykge1xcbiAgICBmb3IgKGxldCBqID0gMTsgaiA8PSBiLm47IGorKykge1xcbiAgICAgIG1hdC5zZXQocmVzdWx0LCBpLCBqLCBkb3QobWF0LnJvdyhhLCBpKSwgbWF0LmNvbChiLCBqKSkpO1xcbiAgICB9XFxuICB9XFxuICByZXR1cm4gcmVzdWx0O1xcbn07XFxuXFxuLyoqXFxuICogU2NhbGUgYSBtYXRyaXhcXG4gKiBAcGFyYW0ge21hdH0gYSBNYXRyaXggYVxcbiAqIEBwYXJhbSB7bnVtYmVyfSBiIFNjYWxhciBiXFxuICogQHJldHVybiB7bWF0fSBhICogYlxcbiAqL1xcbm1hdC5zY2FsZSA9IChhLCBiKSA9PiBtYXQubWFwKGEsIHYgPT4gdiAqIGIpO1xcblxcbi8qKlxcbiAqIFRyYW5zcG9zZSBhIG1hdHJpeFxcbiAqIEBwYXJhbSB7bWF0fSBhIFRoZSBtYXRyaXggdG8gdHJhbnNwb3NlXFxuICogQHJldHVybiB7bWF0fSBBIHRyYW5zcG9zZWQgbWF0cml4XFxuICovXFxubWF0LnRyYW5zID0gYSA9PiBtYXQoYS5uLCBhLm0sIHRpbWVzKGkgPT4gbWF0LmNvbChhLCAoaSArIDEpKSwgYS5uKS5mbGF0KCkpO1xcblxcbi8qKlxcbiAqIEdldCB0aGUgbWlub3Igb2YgYSBtYXRyaXhcXG4gKiBAcGFyYW0ge21hdH0gYSBNYXRyaXggYVxcbiAqIEBwYXJhbSB7bnVtYmVyfSBpIFRoZSByb3cgb2Zmc2V0XFxuICogQHBhcmFtIHtudW1iZXJ9IGogVGhlIGNvbHVtbiBvZmZzZXRcXG4gKiBAcmV0dXJuIHttYXR8Ym9vbGVhbn0gVGhlIChpLCBqKSBtaW5vciBvZiBtYXRyaXggYSBvciBmYWxzZSBpZiB0aGUgbWF0cml4IGlzIG5vdCBzcXVhcmVcXG4gKi9cXG5tYXQubWlub3IgPSAoYSwgaSwgaikgPT4ge1xcbiAgaWYgKGEubSAhPT0gYS5uKSB7IHJldHVybiBmYWxzZTsgfVxcbiAgY29uc3QgZW50cmllcyA9IFtdO1xcbiAgZm9yIChsZXQgaWkgPSAxOyBpaSA8PSBhLm07IGlpKyspIHtcXG4gICAgaWYgKGlpID09PSBpKSB7IGNvbnRpbnVlOyB9XFxuICAgIGZvciAobGV0IGpqID0gMTsgamogPD0gYS5uOyBqaisrKSB7XFxuICAgICAgaWYgKGpqID09PSBqKSB7IGNvbnRpbnVlOyB9XFxuICAgICAgZW50cmllcy5wdXNoKG1hdC5nZXQoYSwgaWksIGpqKSk7XFxuICAgIH1cXG4gIH1cXG4gIHJldHVybiBtYXQoYS5tIC0gMSwgYS5uIC0gMSwgZW50cmllcyk7XFxufTtcXG5cXG4vKipcXG4gKiBHZXQgdGhlIGRldGVybWluYW50IG9mIGEgbWF0cml4XFxuICogQHBhcmFtIHttYXR9IGEgTWF0cml4IGFcXG4gKiBAcmV0dXJuIHtudW1iZXJ8Ym9vbGVhbn0gfGF8IG9yIGZhbHNlIGlmIHRoZSBtYXRyaXggaXMgbm90IHNxdWFyZVxcbiAqL1xcbm1hdC5kZXQgPSBhID0+IHtcXG4gIGlmIChhLm0gIT09IGEubikgeyByZXR1cm4gZmFsc2U7IH1cXG4gIGlmIChhLm0gPT09IDEpIHtcXG4gICAgcmV0dXJuIGEuZW50cmllc1swXTtcXG4gIH1cXG4gIGlmIChhLm0gPT09IDIpIHtcXG4gICAgcmV0dXJuIGEuZW50cmllc1swXSAqIGEuZW50cmllc1szXSAtIGEuZW50cmllc1sxXSAqIGEuZW50cmllc1syXTtcXG4gIH1cXG4gIGxldCB0b3RhbCA9IDAsIHNpZ24gPSAxO1xcbiAgZm9yIChsZXQgaiA9IDE7IGogPD0gYS5uOyBqKyspIHtcXG4gICAgdG90YWwgKz0gc2lnbiAqIGEuZW50cmllc1tqIC0gMV0gKiBtYXQuZGV0KG1hdC5taW5vcihhLCAxLCBqKSk7XFxuICAgIHNpZ24gKj0gLTE7XFxuICB9XFxuICByZXR1cm4gdG90YWw7XFxufTtcXG5cXG4vKipcXG4gKiBOb3JtYWxpc2UgYSBtYXRyaXhcXG4gKiBAcGFyYW0ge21hdH0gYSBUaGUgbWF0cml4IHRvIG5vcm1hbGlzZVxcbiAqIEByZXR1cm4ge21hdHxib29sZWFufSBeYSBvciBmYWxzZSBpZiB0aGUgbWF0cml4IGlzIG5vdCBzcXVhcmVcXG4gKi9cXG5tYXQubm9yID0gYSA9PiB7XFxuICBpZiAoYS5tICE9PSBhLm4pIHsgcmV0dXJuIGZhbHNlOyB9XFxuICBjb25zdCBkID0gbWF0LmRldChhKTtcXG4gIHJldHVybiBtYXQubWFwKGEsIGkgPT4gaSAqIGQpO1xcbn07XFxuXFxuLyoqXFxuICogR2V0IHRoZSBhZGp1Z2F0ZSBvZiBhIG1hdHJpeFxcbiAqIEBwYXJhbSB7bWF0fSBhIFRoZSBtYXRyaXggZnJvbSB3aGljaCB0byBnZXQgdGhlIGFkanVnYXRlXFxuICogQHJldHVybiB7bWF0fSBUaGUgYWRqdWdhdGUgb2YgYVxcbiAqL1xcbm1hdC5hZGogPSBhID0+IHtcXG4gIGNvbnN0IG1pbm9ycyA9IG1hdChhLm0sIGEubik7XFxuICBmb3IgKGxldCBpID0gMTsgaSA8PSBhLm07IGkrKykge1xcbiAgICBmb3IgKGxldCBqID0gMTsgaiA8PSBhLm47IGorKykge1xcbiAgICAgIG1hdC5zZXQobWlub3JzLCBpLCBqLCBtYXQuZGV0KG1hdC5taW5vcihhLCBpLCBqKSkpO1xcbiAgICB9XFxuICB9XFxuICBjb25zdCBjb2ZhY3RvcnMgPSBtYXQubWFwKG1pbm9ycywgKHYsIGkpID0+IHYgKiAoaSAlIDIgPyAtMSA6IDEpKTtcXG4gIHJldHVybiBtYXQudHJhbnMoY29mYWN0b3JzKTtcXG59O1xcblxcbi8qKlxcbiAqIEdldCB0aGUgaW52ZXJzZSBvZiBhIG1hdHJpeFxcbiAqIEBwYXJhbSB7bWF0fSBhIFRoZSBtYXRyaXggdG8gaW52ZXJ0XFxuICogQHJldHVybiB7bWF0fGJvb2xlYW59IGFeLTEgb3IgZmFsc2UgaWYgdGhlIG1hdHJpeCBoYXMgbm8gaW52ZXJzZVxcbiAqL1xcbm1hdC5pbnYgPSBhID0+IHtcXG4gIGlmIChhLm0gIT09IGEubikgeyByZXR1cm4gZmFsc2U7IH1cXG4gIGNvbnN0IGQgPSBtYXQuZGV0KGEpO1xcbiAgaWYgKGQgPT09IDApIHsgcmV0dXJuIGZhbHNlOyB9XFxuICByZXR1cm4gbWF0LnNjYWxlKG1hdC5hZGooYSksIDEgLyBkKTtcXG59O1xcblxcbi8qKlxcbiAqIENoZWNrIGlmIHR3byBtYXRyaWNlcyBhcmUgZXF1YWxcXG4gKiBAcGFyYW0ge21hdH0gYSBNYXRyaXggYVxcbiAqIEBwYXJhbSB7bWF0fSBiIE1hdHJpeCBiXFxuICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiBtYXRyaWNlcyBhIGFuZCBiIGFyZSBpZGVudGljYWwsIGZhbHNlIG90aGVyd2lzZVxcbiAqL1xcbm1hdC5lcSA9IChhLCBiKSA9PiBhLm0gPT09IGIubSAmJiBhLm4gPT09IGIubiAmJiBtYXQuc3RyKGEpID09PSBtYXQuc3RyKGIpO1xcblxcbi8qKlxcbiAqIENvcHkgYSBtYXRyaXhcXG4gKiBAcGFyYW0ge21hdH0gYSBUaGUgbWF0cml4IHRvIGNvcHlcXG4gKiBAcmV0dXJuIHttYXR9IEEgY29weSBvZiBtYXRyaXggYVxcbiAqL1xcbm1hdC5jcHkgPSBhID0+IG1hdChhLm0sIGEubiwgWy4uLmEuZW50cmllc10pO1xcblxcbi8qKlxcbiAqIEEgZnVuY3Rpb24gdG8gY2FsbCBvbiBlYWNoIGVudHJ5IG9mIGEgbWF0cml4XFxuICogQGNhbGxiYWNrIG1hdHJpeE1hcENhbGxiYWNrXFxuICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlIFRoZSBlbnRyeSB2YWx1ZVxcbiAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCBUaGUgZW50cnkgaW5kZXhcXG4gKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IGVudHJpZXMgVGhlIGFycmF5IG9mIG1hdHJpeCBlbnRyaWVzXFxuICogQHJldHVybiB7bnVtYmVyfSBUaGUgbWFwcGVkIGVudHJ5XFxuICovXFxuXFxuLyoqXFxuICogQ2FsbCBhIGZ1bmN0aW9uIG9uIGVhY2ggZW50cnkgb2YgYSBtYXRyaXggYW5kIGJ1aWxkIGEgbmV3IG1hdHJpeCBmcm9tIHRoZSByZXN1bHRzXFxuICogQHBhcmFtIHttYXR9IGEgTWF0cml4IGFcXG4gKiBAcGFyYW0ge21hdHJpeE1hcENhbGxiYWNrfSBmIFRoZSBmdW5jdGlvbiB0byBjYWxsIG9uIGVhY2ggZW50cnkgb2YgdGhlIG1hdHJpeFxcbiAqIEByZXR1cm4ge21hdH0gTWF0cml4IGEgbWFwcGVkIHRocm91Z2ggZlxcbiAqL1xcbm1hdC5tYXAgPSAoYSwgZikgPT4gbWF0KGEubSwgYS5uLCBhLmVudHJpZXMubWFwKGYpKTtcXG5cXG4vKipcXG4gKiBDb252ZXJ0IGEgbWF0cml4IGludG8gYSBzdHJpbmdcXG4gKiBAcGFyYW0ge21hdH0gYSBUaGUgbWF0cml4IHRvIGNvbnZlcnRcXG4gKiBAcGFyYW0ge3N0cmluZ30gW21zPScsICddIFRoZSBzZXBhcmF0b3Igc3RyaW5nIGZvciBjb2x1bW5zXFxuICogQHBhcmFtIHtzdHJpbmd9IFtucz0nXFxcXG4nXSBUaGUgc2VwYXJhdG9yIHN0cmluZyBmb3Igcm93c1xcbiAqIEByZXR1cm4ge3N0cmluZ30gQSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIG1hdHJpeFxcbiAqL1xcbm1hdC5zdHIgPSAoYSwgbXMgPSAnLCAnLCBucyA9ICdcXFxcbicpID0+IGNodW5rKGEuZW50cmllcywgYS5uKS5tYXAociA9PiByLmpvaW4obXMpKS5qb2luKG5zKTtcXG5cXG5pZiAodHJ1ZSkge1xcbiAgbW9kdWxlLmV4cG9ydHMgPSB7IHZlYywgbWF0IH07XFxufVxcblxcblxcbi8vIyBzb3VyY2VVUkw9d2VicGFjazovL0BiYXNlbWVudHVuaXZlcnNlL2RlYnVnLy4vbm9kZV9tb2R1bGVzL0BiYXNlbWVudHVuaXZlcnNlL3ZlYy92ZWMuanM/XCIpO1xuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL2luZGV4LnRzXCI6XG4vKiEqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9pbmRleC50cyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqL1xuLyoqKi8gKChfX3VudXNlZF93ZWJwYWNrX21vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykgPT4ge1xuXG5cInVzZSBzdHJpY3RcIjtcbmV2YWwoXCJcXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXFxcIl9fZXNNb2R1bGVcXFwiLCAoeyB2YWx1ZTogdHJ1ZSB9KSk7XFxuY29uc3QgdmVjXzEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBAYmFzZW1lbnR1bml2ZXJzZS92ZWMgKi8gXFxcIi4vbm9kZV9tb2R1bGVzL0BiYXNlbWVudHVuaXZlcnNlL3ZlYy92ZWMuanNcXFwiKTtcXG5jbGFzcyBEZWJ1ZyB7XFxuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcXG4gICAgICAgIGlmIChvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuZGVmYXVsdFZhbHVlKSB7XFxuICAgICAgICAgICAgb3B0aW9ucy5kZWZhdWx0VmFsdWUgPSBPYmplY3QuYXNzaWduKHt9LCBEZWJ1Zy5kZWZhdWx0T3B0aW9ucy5kZWZhdWx0VmFsdWUsIG9wdGlvbnMuZGVmYXVsdFZhbHVlKTtcXG4gICAgICAgIH1cXG4gICAgICAgIGlmIChvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuZGVmYXVsdENoYXJ0KSB7XFxuICAgICAgICAgICAgb3B0aW9ucy5kZWZhdWx0Q2hhcnQgPSBPYmplY3QuYXNzaWduKHt9LCBEZWJ1Zy5kZWZhdWx0T3B0aW9ucy5kZWZhdWx0Q2hhcnQsIG9wdGlvbnMuZGVmYXVsdENoYXJ0KTtcXG4gICAgICAgIH1cXG4gICAgICAgIGlmIChvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuZGVmYXVsdE1hcmtlcikge1xcbiAgICAgICAgICAgIG9wdGlvbnMuZGVmYXVsdE1hcmtlciA9IE9iamVjdC5hc3NpZ24oe30sIERlYnVnLmRlZmF1bHRPcHRpb25zLmRlZmF1bHRNYXJrZXIsIG9wdGlvbnMuZGVmYXVsdE1hcmtlcik7XFxuICAgICAgICB9XFxuICAgICAgICBpZiAob3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmRlZmF1bHRCb3JkZXIpIHtcXG4gICAgICAgICAgICBvcHRpb25zLmRlZmF1bHRCb3JkZXIgPSBPYmplY3QuYXNzaWduKHt9LCBEZWJ1Zy5kZWZhdWx0T3B0aW9ucy5kZWZhdWx0Qm9yZGVyLCBvcHRpb25zLmRlZmF1bHRCb3JkZXIpO1xcbiAgICAgICAgfVxcbiAgICAgICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgRGVidWcuZGVmYXVsdE9wdGlvbnMsIG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwID8gb3B0aW9ucyA6IHt9KTtcXG4gICAgICAgIHRoaXMudmFsdWVzID0gbmV3IE1hcCgpO1xcbiAgICAgICAgdGhpcy5jaGFydHMgPSBuZXcgTWFwKCk7XFxuICAgICAgICB0aGlzLm1hcmtlcnMgPSBuZXcgTWFwKCk7XFxuICAgICAgICB0aGlzLmJvcmRlcnMgPSBuZXcgTWFwKCk7XFxuICAgIH1cXG4gICAgLyoqXFxuICAgICAqIEluaXRpYWxpc2UgdGhlIGRlYnVnIHJlbmRlcmVyIGZvciBkaXNwbGF5aW5nIHZhbHVlcyBhbmQgbWFya2Vyc1xcbiAgICAgKi9cXG4gICAgc3RhdGljIGluaXRpYWxpc2Uob3B0aW9ucyA9IHt9KSB7XFxuICAgICAgICBpZiAoRGVidWcuaW5zdGFuY2UgIT09IHVuZGVmaW5lZCkge1xcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignRGVidWcgaGFzIGFscmVhZHkgYmVlbiBpbml0aWFsaXNlZCcpO1xcbiAgICAgICAgfVxcbiAgICAgICAgRGVidWcuaW5zdGFuY2UgPSBuZXcgRGVidWcob3B0aW9ucyk7XFxuICAgIH1cXG4gICAgc3RhdGljIGdldEluc3RhbmNlKCkge1xcbiAgICAgICAgaWYgKERlYnVnLmluc3RhbmNlID09PSB1bmRlZmluZWQpIHtcXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0RlYnVnIG5vdCBwcm9wZXJseSBpbml0aWFsaXNlZCcpO1xcbiAgICAgICAgfVxcbiAgICAgICAgcmV0dXJuIERlYnVnLmluc3RhbmNlO1xcbiAgICB9XFxuICAgIC8qKlxcbiAgICAgKiBTaG93IGEgZGVidWcgdmFsdWVcXG4gICAgICovXFxuICAgIHN0YXRpYyB2YWx1ZShsYWJlbCwgdmFsdWUsIG9wdGlvbnMpIHtcXG4gICAgICAgIHZhciBfYTtcXG4gICAgICAgIGNvbnN0IGluc3RhbmNlID0gRGVidWcuZ2V0SW5zdGFuY2UoKTtcXG4gICAgICAgIGluc3RhbmNlLnZhbHVlcy5zZXQobGFiZWwsIE9iamVjdC5hc3NpZ24oe30sIGluc3RhbmNlLm9wdGlvbnMuZGVmYXVsdFZhbHVlLCAoX2EgPSBpbnN0YW5jZS52YWx1ZXMuZ2V0KGxhYmVsKSkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDoge30sIG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwID8gb3B0aW9ucyA6IHt9LCB7IGxhYmVsLCB2YWx1ZSB9KSk7XFxuICAgIH1cXG4gICAgLyoqXFxuICAgICAqIFNob3cgYSBkZWJ1ZyBjaGFydFxcbiAgICAgKi9cXG4gICAgc3RhdGljIGNoYXJ0KGxhYmVsLCB2YWx1ZSwgb3B0aW9ucykge1xcbiAgICAgICAgdmFyIF9hLCBfYjtcXG4gICAgICAgIGNvbnN0IGluc3RhbmNlID0gRGVidWcuZ2V0SW5zdGFuY2UoKTtcXG4gICAgICAgIGNvbnN0IGN1cnJlbnRDaGFydCA9IGluc3RhbmNlLmNoYXJ0cy5nZXQobGFiZWwpO1xcbiAgICAgICAgaW5zdGFuY2UuY2hhcnRzLnNldChsYWJlbCwgT2JqZWN0LmFzc2lnbih7fSwgaW5zdGFuY2Uub3B0aW9ucy5kZWZhdWx0Q2hhcnQsIGN1cnJlbnRDaGFydCAhPT0gbnVsbCAmJiBjdXJyZW50Q2hhcnQgIT09IHZvaWQgMCA/IGN1cnJlbnRDaGFydCA6IHt9LCBvcHRpb25zICE9PSBudWxsICYmIG9wdGlvbnMgIT09IHZvaWQgMCA/IG9wdGlvbnMgOiB7fSwge1xcbiAgICAgICAgICAgIGxhYmVsLFxcbiAgICAgICAgICAgIHZhbHVlczogWy4uLihfYSA9IGN1cnJlbnRDaGFydCA9PT0gbnVsbCB8fCBjdXJyZW50Q2hhcnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGN1cnJlbnRDaGFydC52YWx1ZXMpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IFtdLCB2YWx1ZV0uc2xpY2UoLSgoX2IgPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMudmFsdWVCdWZmZXJTaXplKSAhPT0gbnVsbCAmJiBfYiAhPT0gdm9pZCAwID8gX2IgOiBpbnN0YW5jZS5vcHRpb25zLmRlZmF1bHRDaGFydC52YWx1ZUJ1ZmZlclNpemUpKSxcXG4gICAgICAgIH0pKTtcXG4gICAgfVxcbiAgICAvKipcXG4gICAgICogUmVtb3ZlIGEgZGVidWcgY2hhcnRcXG4gICAgICovXFxuICAgIHN0YXRpYyByZW1vdmVDaGFydChsYWJlbCkge1xcbiAgICAgICAgY29uc3QgaW5zdGFuY2UgPSBEZWJ1Zy5nZXRJbnN0YW5jZSgpO1xcbiAgICAgICAgaW5zdGFuY2UuY2hhcnRzLmRlbGV0ZShsYWJlbCk7XFxuICAgIH1cXG4gICAgLyoqXFxuICAgICAqIFNob3cgYSBtYXJrZXIgaW4gd29ybGQgb3Igc2NyZWVuIHNwYWNlXFxuICAgICAqL1xcbiAgICBzdGF0aWMgbWFya2VyKGxhYmVsLCB2YWx1ZSwgcG9zaXRpb24sIG9wdGlvbnMpIHtcXG4gICAgICAgIHZhciBfYTtcXG4gICAgICAgIGNvbnN0IGluc3RhbmNlID0gRGVidWcuZ2V0SW5zdGFuY2UoKTtcXG4gICAgICAgIGluc3RhbmNlLm1hcmtlcnMuc2V0KGxhYmVsLCBPYmplY3QuYXNzaWduKHt9LCBpbnN0YW5jZS5vcHRpb25zLmRlZmF1bHRNYXJrZXIsIChfYSA9IGluc3RhbmNlLm1hcmtlcnMuZ2V0KGxhYmVsKSkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDoge30sIG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwID8gb3B0aW9ucyA6IHt9LCB7IGxhYmVsLCB2YWx1ZSwgcG9zaXRpb24gfSkpO1xcbiAgICB9XFxuICAgIC8qKlxcbiAgICAgKiBTaG93IGEgYm9yZGVyIGluIHdvcmxkIG9yIHNjcmVlbiBzcGFjZVxcbiAgICAgKi9cXG4gICAgc3RhdGljIGJvcmRlcihsYWJlbCwgdmFsdWUsIHBvc2l0aW9uLCBvcHRpb25zKSB7XFxuICAgICAgICB2YXIgX2E7XFxuICAgICAgICBpZiAoKG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5ib3JkZXJTaGFwZSkgPT09ICdjaXJjbGUnICYmIChvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMucmFkaXVzKSA9PT0gdW5kZWZpbmVkKSB7XFxuICAgICAgICAgICAgLy8gRG9uJ3QgYWRkIHRoZSBib3JkZXIgaWYgaXQncyBjaXJjdWxhciBidXQgd2UgZG9uJ3QgaGF2ZSBhIHJhZGl1c1xcbiAgICAgICAgICAgIHJldHVybjtcXG4gICAgICAgIH1cXG4gICAgICAgIGlmICgob3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmJvcmRlclNoYXBlKSAhPT0gJ2NpcmNsZScgJiYgKG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5zaXplKSA9PT0gdW5kZWZpbmVkKSB7XFxuICAgICAgICAgICAgLy8gRG9uJ3QgYWRkIHRoZSBib3JkZXIgaWYgaXQncyByZWN0YW5ndWxhciAoZGVmYXVsdCBpcyByZWN0YW5ndWxhcikgYnV0XFxuICAgICAgICAgICAgLy8gd2UgZG9uJ3QgaGF2ZSBhIHNpemVcXG4gICAgICAgICAgICByZXR1cm47XFxuICAgICAgICB9XFxuICAgICAgICBjb25zdCBpbnN0YW5jZSA9IERlYnVnLmdldEluc3RhbmNlKCk7XFxuICAgICAgICBpbnN0YW5jZS5ib3JkZXJzLnNldChsYWJlbCwgT2JqZWN0LmFzc2lnbih7fSwgaW5zdGFuY2Uub3B0aW9ucy5kZWZhdWx0Qm9yZGVyLCAoX2EgPSBpbnN0YW5jZS5ib3JkZXJzLmdldChsYWJlbCkpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IHt9LCBvcHRpb25zICE9PSBudWxsICYmIG9wdGlvbnMgIT09IHZvaWQgMCA/IG9wdGlvbnMgOiB7fSwgeyBsYWJlbCwgdmFsdWUsIHBvc2l0aW9uIH0pKTtcXG4gICAgfVxcbiAgICAvKipcXG4gICAgICogUmVuZGVyIHRoZSBkZWJ1ZyB2YWx1ZXMgYW5kIG1hcmtlcnMgb250byBhIGNhbnZhc1xcbiAgICAgKi9cXG4gICAgc3RhdGljIGRyYXcoY29udGV4dCkge1xcbiAgICAgICAgY29uc3QgaW5zdGFuY2UgPSBEZWJ1Zy5nZXRJbnN0YW5jZSgpO1xcbiAgICAgICAgLy8gRHJhdyB3b3JsZC1zcGFjZSBtYXJrZXJzICYgYm9yZGVyc1xcbiAgICAgICAgY29udGV4dC5zYXZlKCk7XFxuICAgICAgICBpbnN0YW5jZS5tYXJrZXJzLmZvckVhY2gobWFya2VyID0+IHtcXG4gICAgICAgICAgICBpZiAobWFya2VyLnNwYWNlID09PSAnd29ybGQnKSB7XFxuICAgICAgICAgICAgICAgIGluc3RhbmNlLmRyYXdNYXJrZXIoY29udGV4dCwgbWFya2VyKTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9KTtcXG4gICAgICAgIGluc3RhbmNlLmJvcmRlcnMuZm9yRWFjaChib3JkZXIgPT4ge1xcbiAgICAgICAgICAgIGlmIChib3JkZXIuc3BhY2UgPT09ICd3b3JsZCcpIHtcXG4gICAgICAgICAgICAgICAgaW5zdGFuY2UuZHJhd0JvcmRlcihjb250ZXh0LCBib3JkZXIpO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH0pO1xcbiAgICAgICAgY29udGV4dC5yZXN0b3JlKCk7XFxuICAgICAgICAvLyBEcmF3IHZhbHVlcywgY2hhcnRzIGFuZCBzY3JlZW4tc3BhY2UgbWFya2VycyAmIGJvcmRlcnNcXG4gICAgICAgIGNvbnRleHQuc2F2ZSgpO1xcbiAgICAgICAgY29udGV4dC5zZXRUcmFuc2Zvcm0oMSwgMCwgMCwgMSwgMCwgMCk7XFxuICAgICAgICBsZXQgcG9zaXRpb247XFxuICAgICAgICBsZXQgbGVmdFkgPSBpbnN0YW5jZS5vcHRpb25zLm1hcmdpbjtcXG4gICAgICAgIGxldCByaWdodFkgPSBpbnN0YW5jZS5vcHRpb25zLm1hcmdpbjtcXG4gICAgICAgIGNvbnN0IGxpbmVIZWlnaHQgPSAoaW5zdGFuY2Uub3B0aW9ucy5saW5lSGVpZ2h0ICtcXG4gICAgICAgICAgICBpbnN0YW5jZS5vcHRpb25zLnBhZGRpbmcgKiAyKTtcXG4gICAgICAgIGluc3RhbmNlLnZhbHVlcy5mb3JFYWNoKHZhbHVlID0+IHtcXG4gICAgICAgICAgICB2YXIgX2EsIF9iLCBfYywgX2QsIF9lLCBfZjtcXG4gICAgICAgICAgICBzd2l0Y2ggKHZhbHVlLmFsaWduKSB7XFxuICAgICAgICAgICAgICAgIGNhc2UgJ2xlZnQnOlxcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb24gPSAoMCwgdmVjXzEudmVjKShpbnN0YW5jZS5vcHRpb25zLm1hcmdpbiwgbGVmdFkpO1xcbiAgICAgICAgICAgICAgICAgICAgbGVmdFkgKz0gbGluZUhlaWdodCArIGluc3RhbmNlLm9wdGlvbnMubGluZU1hcmdpbjtcXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xcbiAgICAgICAgICAgICAgICBjYXNlICdyaWdodCc6XFxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbiA9ICgwLCB2ZWNfMS52ZWMpKGNvbnRleHQuY2FudmFzLmNsaWVudFdpZHRoIC0gaW5zdGFuY2Uub3B0aW9ucy5tYXJnaW4sIHJpZ2h0WSk7XFxuICAgICAgICAgICAgICAgICAgICByaWdodFkgKz0gbGluZUhlaWdodCArIGluc3RhbmNlLm9wdGlvbnMubGluZU1hcmdpbjtcXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICBpbnN0YW5jZS5kcmF3TGFiZWwoY29udGV4dCwgRGVidWcucHJlcGFyZUxhYmVsKChfYSA9IHZhbHVlLmxhYmVsKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiAnJywgKF9iID0gdmFsdWUudmFsdWUpICE9PSBudWxsICYmIF9iICE9PSB2b2lkIDAgPyBfYiA6ICcnLCB2YWx1ZS5zaG93TGFiZWwsIHRydWUpLCBwb3NpdGlvbiwgdmFsdWUuYWxpZ24sIChfYyA9IHZhbHVlLnBhZGRpbmcpICE9PSBudWxsICYmIF9jICE9PSB2b2lkIDAgPyBfYyA6IGluc3RhbmNlLm9wdGlvbnMucGFkZGluZywgKF9kID0gdmFsdWUuZm9udCkgIT09IG51bGwgJiYgX2QgIT09IHZvaWQgMCA/IF9kIDogaW5zdGFuY2Uub3B0aW9ucy5mb250LCAoX2UgPSB2YWx1ZS5mb3JlZ3JvdW5kQ29sb3VyKSAhPT0gbnVsbCAmJiBfZSAhPT0gdm9pZCAwID8gX2UgOiBpbnN0YW5jZS5vcHRpb25zLmZvcmVncm91bmRDb2xvdXIsIChfZiA9IHZhbHVlLmJhY2tncm91bmRDb2xvdXIpICE9PSBudWxsICYmIF9mICE9PSB2b2lkIDAgPyBfZiA6IGluc3RhbmNlLm9wdGlvbnMuYmFja2dyb3VuZENvbG91cik7XFxuICAgICAgICB9KTtcXG4gICAgICAgIGluc3RhbmNlLmNoYXJ0cy5mb3JFYWNoKGNoYXJ0ID0+IHtcXG4gICAgICAgICAgICB2YXIgX2EsIF9iLCBfYywgX2QsIF9lO1xcbiAgICAgICAgICAgIHN3aXRjaCAoY2hhcnQuYWxpZ24pIHtcXG4gICAgICAgICAgICAgICAgY2FzZSAnbGVmdCc6XFxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbiA9ICgwLCB2ZWNfMS52ZWMpKGluc3RhbmNlLm9wdGlvbnMubWFyZ2luLCBsZWZ0WSk7XFxuICAgICAgICAgICAgICAgICAgICBsZWZ0WSArPSBsaW5lSGVpZ2h0ICsgaW5zdGFuY2Uub3B0aW9ucy5saW5lTWFyZ2luO1xcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XFxuICAgICAgICAgICAgICAgIGNhc2UgJ3JpZ2h0JzpcXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uID0gKDAsIHZlY18xLnZlYykoY29udGV4dC5jYW52YXMuY2xpZW50V2lkdGggLSBpbnN0YW5jZS5vcHRpb25zLm1hcmdpbiwgcmlnaHRZKTtcXG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0WSArPSBsaW5lSGVpZ2h0ICsgaW5zdGFuY2Uub3B0aW9ucy5saW5lTWFyZ2luO1xcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIGluc3RhbmNlLmRyYXdDaGFydChjb250ZXh0LCBEZWJ1Zy5wcmVwYXJlTGFiZWwoKF9hID0gY2hhcnQubGFiZWwpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6ICcnLCAnJywgY2hhcnQuc2hvd0xhYmVsLCBmYWxzZSksIHBvc2l0aW9uLCBjaGFydC5hbGlnbiwgKF9iID0gY2hhcnQucGFkZGluZykgIT09IG51bGwgJiYgX2IgIT09IHZvaWQgMCA/IF9iIDogaW5zdGFuY2Uub3B0aW9ucy5wYWRkaW5nLCAoX2MgPSBjaGFydC5mb250KSAhPT0gbnVsbCAmJiBfYyAhPT0gdm9pZCAwID8gX2MgOiBpbnN0YW5jZS5vcHRpb25zLmZvbnQsIChfZCA9IGNoYXJ0LmZvcmVncm91bmRDb2xvdXIpICE9PSBudWxsICYmIF9kICE9PSB2b2lkIDAgPyBfZCA6IGluc3RhbmNlLm9wdGlvbnMuZm9yZWdyb3VuZENvbG91ciwgKF9lID0gY2hhcnQuYmFja2dyb3VuZENvbG91cikgIT09IG51bGwgJiYgX2UgIT09IHZvaWQgMCA/IF9lIDogaW5zdGFuY2Uub3B0aW9ucy5iYWNrZ3JvdW5kQ29sb3VyLCBjaGFydC5jaGFydEJhY2tncm91bmRDb2xvdXIsIGNoYXJ0LnZhbHVlcywgY2hhcnQudmFsdWVCdWZmZXJTaXplLCBjaGFydC52YWx1ZUJ1ZmZlclN0cmlkZSwgY2hhcnQubWluVmFsdWUsIGNoYXJ0Lm1heFZhbHVlLCBjaGFydC5iYXJXaWR0aCwgY2hhcnQuYmFyQ29sb3Vycyk7XFxuICAgICAgICB9KTtcXG4gICAgICAgIGluc3RhbmNlLm1hcmtlcnMuZm9yRWFjaChtYXJrZXIgPT4ge1xcbiAgICAgICAgICAgIGlmIChtYXJrZXIuc3BhY2UgPT09ICdzY3JlZW4nKSB7XFxuICAgICAgICAgICAgICAgIGluc3RhbmNlLmRyYXdNYXJrZXIoY29udGV4dCwgbWFya2VyKTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9KTtcXG4gICAgICAgIGluc3RhbmNlLmJvcmRlcnMuZm9yRWFjaChib3JkZXIgPT4ge1xcbiAgICAgICAgICAgIGlmIChib3JkZXIuc3BhY2UgPT09ICdzY3JlZW4nKSB7XFxuICAgICAgICAgICAgICAgIGluc3RhbmNlLmRyYXdCb3JkZXIoY29udGV4dCwgYm9yZGVyKTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9KTtcXG4gICAgICAgIGNvbnRleHQucmVzdG9yZSgpO1xcbiAgICAgICAgLy8gQ2xlYXIgdmFsdWVzLCBtYXJrZXJzICYgYm9yZGVycyByZWFkeSBmb3IgbmV4dCBmcmFtZVxcbiAgICAgICAgaW5zdGFuY2UudmFsdWVzLmNsZWFyKCk7XFxuICAgICAgICBpbnN0YW5jZS5tYXJrZXJzLmNsZWFyKCk7XFxuICAgICAgICBpbnN0YW5jZS5ib3JkZXJzLmNsZWFyKCk7XFxuICAgIH1cXG4gICAgc3RhdGljIHByZXBhcmVMYWJlbChsYWJlbCwgdmFsdWUsIHNob3dMYWJlbCwgc2hvd1ZhbHVlKSB7XFxuICAgICAgICBjb25zdCBhY3R1YWxMYWJlbCA9IChzaG93TGFiZWwgJiYgbGFiZWwpID8gbGFiZWwgOiAnJztcXG4gICAgICAgIGNvbnN0IGFjdHVhbFZhbHVlID0gKCEhc2hvd1ZhbHVlICYmIHZhbHVlICE9PSAnJykgPyB2YWx1ZS50b1N0cmluZygpIDogJyc7XFxuICAgICAgICBjb25zdCBzZXBhcmF0b3IgPSAoYWN0dWFsTGFiZWwgJiYgYWN0dWFsVmFsdWUpID8gJzogJyA6ICcnO1xcbiAgICAgICAgcmV0dXJuIGAke2FjdHVhbExhYmVsfSR7c2VwYXJhdG9yfSR7YWN0dWFsVmFsdWV9YDtcXG4gICAgfVxcbiAgICBkcmF3TGFiZWwoY29udGV4dCwgdGV4dCwgcG9zaXRpb24sIGFsaWduLCBwYWRkaW5nLCBmb250LCBmb3JlZ3JvdW5kQ29sb3VyLCBiYWNrZ3JvdW5kQ29sb3VyKSB7XFxuICAgICAgICBjb250ZXh0LnNhdmUoKTtcXG4gICAgICAgIGNvbnRleHQuZm9udCA9IGZvbnQ7XFxuICAgICAgICBjb250ZXh0LnRleHRCYXNlbGluZSA9ICd0b3AnO1xcbiAgICAgICAgY29uc3QgYmFja2dyb3VuZFNpemUgPSB7XFxuICAgICAgICAgICAgd2lkdGg6IGNvbnRleHQubWVhc3VyZVRleHQodGV4dCkud2lkdGggKyBwYWRkaW5nICogMixcXG4gICAgICAgICAgICBoZWlnaHQ6IHRoaXMub3B0aW9ucy5saW5lSGVpZ2h0ICsgcGFkZGluZyAqIDIsXFxuICAgICAgICB9O1xcbiAgICAgICAgY29uc3QgeCA9IGFsaWduID09PSAncmlnaHQnXFxuICAgICAgICAgICAgPyAocG9zaXRpb24ueCAtIGJhY2tncm91bmRTaXplLndpZHRoKVxcbiAgICAgICAgICAgIDogcG9zaXRpb24ueDtcXG4gICAgICAgIC8vIERyYXcgYmFja2dyb3VuZFxcbiAgICAgICAgY29udGV4dC5maWxsU3R5bGUgPSBiYWNrZ3JvdW5kQ29sb3VyO1xcbiAgICAgICAgY29udGV4dC5maWxsUmVjdCh4IC0gcGFkZGluZywgcG9zaXRpb24ueSAtIHBhZGRpbmcsIGJhY2tncm91bmRTaXplLndpZHRoLCBiYWNrZ3JvdW5kU2l6ZS5oZWlnaHQpO1xcbiAgICAgICAgLy8gRHJhdyB0ZXh0XFxuICAgICAgICBjb250ZXh0LmZpbGxTdHlsZSA9IGZvcmVncm91bmRDb2xvdXI7XFxuICAgICAgICBjb250ZXh0LmZpbGxUZXh0KHRleHQsIHgsIHBvc2l0aW9uLnkpO1xcbiAgICAgICAgY29udGV4dC5yZXN0b3JlKCk7XFxuICAgIH1cXG4gICAgZHJhd0NoYXJ0KGNvbnRleHQsIGxhYmVsLCBwb3NpdGlvbiwgYWxpZ24sIHBhZGRpbmcsIGZvbnQsIGZvcmVncm91bmRDb2xvdXIsIGJhY2tncm91bmRDb2xvdXIsIGNoYXJ0QmFja2dyb3VuZENvbG91ciwgdmFsdWVzLCB2YWx1ZUJ1ZmZlclNpemUsIHZhbHVlQnVmZmVyU3RyaWRlLCBtaW5WYWx1ZSwgbWF4VmFsdWUsIGJhcldpZHRoLCBiYXJDb2xvdXJzKSB7XFxuICAgICAgICB2YXIgX2EsIF9iO1xcbiAgICAgICAgY29udGV4dC5zYXZlKCk7XFxuICAgICAgICBjb250ZXh0LmZvbnQgPSBmb250O1xcbiAgICAgICAgY29udGV4dC50ZXh0QmFzZWxpbmUgPSAndG9wJztcXG4gICAgICAgIGNvbnN0IGNoYXJ0U2l6ZSA9IHtcXG4gICAgICAgICAgICB3aWR0aDogYmFyV2lkdGggKiBNYXRoLmNlaWwodmFsdWVCdWZmZXJTaXplIC8gTWF0aC5tYXgodmFsdWVCdWZmZXJTdHJpZGUsIDEpKSxcXG4gICAgICAgICAgICBoZWlnaHQ6IHRoaXMub3B0aW9ucy5saW5lSGVpZ2h0ICsgcGFkZGluZyAqIDIsXFxuICAgICAgICB9O1xcbiAgICAgICAgY29uc3QgbGFiZWxTaXplID0ge1xcbiAgICAgICAgICAgIHdpZHRoOiBjb250ZXh0Lm1lYXN1cmVUZXh0KGxhYmVsKS53aWR0aCxcXG4gICAgICAgICAgICBoZWlnaHQ6IHRoaXMub3B0aW9ucy5saW5lSGVpZ2h0LFxcbiAgICAgICAgfTtcXG4gICAgICAgIGNvbnN0IGJhY2tncm91bmRTaXplID0ge1xcbiAgICAgICAgICAgIHdpZHRoOiAobGFiZWxTaXplLndpZHRoICtcXG4gICAgICAgICAgICAgICAgcGFkZGluZyArXFxuICAgICAgICAgICAgICAgIGNoYXJ0U2l6ZS53aWR0aCkgKyBwYWRkaW5nICogMixcXG4gICAgICAgICAgICBoZWlnaHQ6IHRoaXMub3B0aW9ucy5saW5lSGVpZ2h0ICsgcGFkZGluZyAqIDIsXFxuICAgICAgICB9O1xcbiAgICAgICAgY29uc3QgeCA9IGFsaWduID09PSAncmlnaHQnXFxuICAgICAgICAgICAgPyAocG9zaXRpb24ueCAtIGJhY2tncm91bmRTaXplLndpZHRoKVxcbiAgICAgICAgICAgIDogcG9zaXRpb24ueDtcXG4gICAgICAgIC8vIERyYXcgYmFja2dyb3VuZFxcbiAgICAgICAgY29udGV4dC5maWxsU3R5bGUgPSBiYWNrZ3JvdW5kQ29sb3VyO1xcbiAgICAgICAgY29udGV4dC5maWxsUmVjdCh4IC0gcGFkZGluZywgcG9zaXRpb24ueSAtIHBhZGRpbmcsIGJhY2tncm91bmRTaXplLndpZHRoLCBiYWNrZ3JvdW5kU2l6ZS5oZWlnaHQpO1xcbiAgICAgICAgLy8gRHJhdyBsYWJlbFxcbiAgICAgICAgaWYgKGxhYmVsKSB7XFxuICAgICAgICAgICAgY29udGV4dC5maWxsU3R5bGUgPSBmb3JlZ3JvdW5kQ29sb3VyO1xcbiAgICAgICAgICAgIGNvbnRleHQuZmlsbFRleHQobGFiZWwsIHgsIHBvc2l0aW9uLnkpO1xcbiAgICAgICAgfVxcbiAgICAgICAgLy8gRHJhdyBjaGFydFxcbiAgICAgICAgaWYgKGNoYXJ0QmFja2dyb3VuZENvbG91cikge1xcbiAgICAgICAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gY2hhcnRCYWNrZ3JvdW5kQ29sb3VyO1xcbiAgICAgICAgICAgIGNvbnRleHQuZmlsbFJlY3QoeCArIHBhZGRpbmcgKyBsYWJlbFNpemUud2lkdGggKyBwYWRkaW5nLCBwb3NpdGlvbi55IC0gcGFkZGluZywgY2hhcnRTaXplLndpZHRoLCBjaGFydFNpemUuaGVpZ2h0KTtcXG4gICAgICAgIH1cXG4gICAgICAgIGNvbnN0IHJhbmdlID0gbWF4VmFsdWUgLSBtaW5WYWx1ZTtcXG4gICAgICAgIGNvbnN0IGJhck9mZnNldCA9ICgwLCB2ZWNfMS52ZWMpKHggKyBwYWRkaW5nICsgbGFiZWxTaXplLndpZHRoICsgcGFkZGluZywgcG9zaXRpb24ueSAtIHBhZGRpbmcpO1xcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBNYXRoLmNlaWwodmFsdWVzLmxlbmd0aCAvIE1hdGgubWF4KHZhbHVlQnVmZmVyU3RyaWRlLCAxKSk7IGkrKykge1xcbiAgICAgICAgICAgIGxldCB2YWx1ZTtcXG4gICAgICAgICAgICBpZiAodmFsdWVCdWZmZXJTdHJpZGUgPD0gMSkge1xcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHZhbHVlc1tpXTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgZWxzZSB7XFxuICAgICAgICAgICAgICAgIHZhbHVlID0gdmFsdWVzXFxuICAgICAgICAgICAgICAgICAgICAuc2xpY2UoaSAqIHZhbHVlQnVmZmVyU3RyaWRlLCAoaSArIDEpICogdmFsdWVCdWZmZXJTdHJpZGUpXFxuICAgICAgICAgICAgICAgICAgICAucmVkdWNlKChhLCBiKSA9PiBhICsgYiwgMCkgLyB2YWx1ZUJ1ZmZlclN0cmlkZTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgY29uc3QgYmFyU2l6ZSA9ICgwLCB2ZWNfMS52ZWMpKGJhcldpZHRoLCBNYXRoLnJvdW5kKGNoYXJ0U2l6ZS5oZWlnaHQgKiAodmFsdWUgLSBtaW5WYWx1ZSkgLyByYW5nZSkpO1xcbiAgICAgICAgICAgIGNvbnN0IGJhclBvc2l0aW9uID0gdmVjXzEudmVjLmFkZChiYXJPZmZzZXQsICgwLCB2ZWNfMS52ZWMpKCh2YWx1ZXMubGVuZ3RoIDwgdmFsdWVCdWZmZXJTaXplXFxuICAgICAgICAgICAgICAgID8gTWF0aC5jZWlsKCh2YWx1ZUJ1ZmZlclNpemUgLSB2YWx1ZXMubGVuZ3RoKSAvIHZhbHVlQnVmZmVyU3RyaWRlKSAqIGJhcldpZHRoXFxuICAgICAgICAgICAgICAgIDogMCkgKyBpICogYmFyV2lkdGgsIGNoYXJ0U2l6ZS5oZWlnaHQgLSBiYXJTaXplLnkpKTtcXG4gICAgICAgICAgICBjb25zdCBiYXJDb2xvdXIgPSAoX2IgPSAoYmFyQ29sb3Vyc1xcbiAgICAgICAgICAgICAgICA/IChfYSA9IFsuLi5iYXJDb2xvdXJzXS5yZXZlcnNlKCkuZmluZChjID0+IHZhbHVlc1tpXSA+PSBjLm9mZnNldCkpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5jb2xvdXJcXG4gICAgICAgICAgICAgICAgOiB1bmRlZmluZWQpKSAhPT0gbnVsbCAmJiBfYiAhPT0gdm9pZCAwID8gX2IgOiBmb3JlZ3JvdW5kQ29sb3VyO1xcbiAgICAgICAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gYmFyQ29sb3VyO1xcbiAgICAgICAgICAgIGNvbnRleHQuZmlsbFJlY3QoYmFyUG9zaXRpb24ueCwgYmFyUG9zaXRpb24ueSwgYmFyU2l6ZS54LCBiYXJTaXplLnkpO1xcbiAgICAgICAgfVxcbiAgICAgICAgY29udGV4dC5yZXN0b3JlKCk7XFxuICAgIH1cXG4gICAgZHJhd01hcmtlcihjb250ZXh0LCBtYXJrZXIpIHtcXG4gICAgICAgIHZhciBfYSwgX2IsIF9jLCBfZCwgX2UsIF9mLCBfZztcXG4gICAgICAgIGNvbnRleHQuc2F2ZSgpO1xcbiAgICAgICAgY29uc3QgcG9zaXRpb24gPSAoX2EgPSBtYXJrZXIucG9zaXRpb24pICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6ICgwLCB2ZWNfMS52ZWMpKCk7XFxuICAgICAgICBpZiAobWFya2VyLnNob3dMYWJlbCB8fCBtYXJrZXIuc2hvd1ZhbHVlKSB7XFxuICAgICAgICAgICAgdGhpcy5kcmF3TGFiZWwoY29udGV4dCwgRGVidWcucHJlcGFyZUxhYmVsKChfYiA9IG1hcmtlci5sYWJlbCkgIT09IG51bGwgJiYgX2IgIT09IHZvaWQgMCA/IF9iIDogJycsIChfYyA9IG1hcmtlci52YWx1ZSkgIT09IG51bGwgJiYgX2MgIT09IHZvaWQgMCA/IF9jIDogJycsIG1hcmtlci5zaG93TGFiZWwsIG1hcmtlci5zaG93VmFsdWUpLCB2ZWNfMS52ZWMuYWRkKHBvc2l0aW9uICE9PSBudWxsICYmIHBvc2l0aW9uICE9PSB2b2lkIDAgPyBwb3NpdGlvbiA6ICgwLCB2ZWNfMS52ZWMpKCksIG1hcmtlci5sYWJlbE9mZnNldCksICdsZWZ0JywgKF9kID0gbWFya2VyLnBhZGRpbmcpICE9PSBudWxsICYmIF9kICE9PSB2b2lkIDAgPyBfZCA6IHRoaXMub3B0aW9ucy5wYWRkaW5nLCAoX2UgPSBtYXJrZXIuZm9udCkgIT09IG51bGwgJiYgX2UgIT09IHZvaWQgMCA/IF9lIDogdGhpcy5vcHRpb25zLmZvbnQsIChfZiA9IG1hcmtlci5mb3JlZ3JvdW5kQ29sb3VyKSAhPT0gbnVsbCAmJiBfZiAhPT0gdm9pZCAwID8gX2YgOiB0aGlzLm9wdGlvbnMuZm9yZWdyb3VuZENvbG91ciwgKF9nID0gbWFya2VyLmJhY2tncm91bmRDb2xvdXIpICE9PSBudWxsICYmIF9nICE9PSB2b2lkIDAgPyBfZyA6IHRoaXMub3B0aW9ucy5iYWNrZ3JvdW5kQ29sb3VyKTtcXG4gICAgICAgIH1cXG4gICAgICAgIGlmIChtYXJrZXIuc2hvd01hcmtlcikge1xcbiAgICAgICAgICAgIGNvbnRleHQubGluZVdpZHRoID0gMjtcXG4gICAgICAgICAgICBjb250ZXh0LnN0cm9rZVN0eWxlID0gY29udGV4dC5maWxsU3R5bGUgPSBtYXJrZXIubWFya2VyQ29sb3VyO1xcbiAgICAgICAgICAgIHN3aXRjaCAobWFya2VyLm1hcmtlclN0eWxlKSB7XFxuICAgICAgICAgICAgICAgIGNhc2UgJ3gnOlxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kcmF3Q3Jvc3MoY29udGV4dCwgcG9zaXRpb24sIG1hcmtlci5tYXJrZXJTaXplKTtcXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xcbiAgICAgICAgICAgICAgICBjYXNlICcrJzpcXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZHJhd1BsdXMoY29udGV4dCwgcG9zaXRpb24sIG1hcmtlci5tYXJrZXJTaXplKTtcXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xcbiAgICAgICAgICAgICAgICBjYXNlICcuJzpcXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZHJhd0RvdChjb250ZXh0LCBwb3NpdGlvbiwgbWFya2VyLm1hcmtlclNpemUpO1xcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICAgICAgY29udGV4dC5yZXN0b3JlKCk7XFxuICAgIH1cXG4gICAgZHJhd0Nyb3NzKGNvbnRleHQsIHBvc2l0aW9uLCBzaXplKSB7XFxuICAgICAgICBjb250ZXh0LmJlZ2luUGF0aCgpO1xcbiAgICAgICAgY29uc3QgaGFsZlNpemUgPSBzaXplIC8gMjtcXG4gICAgICAgIGNvbnRleHQubW92ZVRvKHBvc2l0aW9uLnggLSBoYWxmU2l6ZSwgcG9zaXRpb24ueSAtIGhhbGZTaXplKTtcXG4gICAgICAgIGNvbnRleHQubGluZVRvKHBvc2l0aW9uLnggKyBoYWxmU2l6ZSwgcG9zaXRpb24ueSArIGhhbGZTaXplKTtcXG4gICAgICAgIGNvbnRleHQubW92ZVRvKHBvc2l0aW9uLnggLSBoYWxmU2l6ZSwgcG9zaXRpb24ueSArIGhhbGZTaXplKTtcXG4gICAgICAgIGNvbnRleHQubGluZVRvKHBvc2l0aW9uLnggKyBoYWxmU2l6ZSwgcG9zaXRpb24ueSAtIGhhbGZTaXplKTtcXG4gICAgICAgIGNvbnRleHQuc3Ryb2tlKCk7XFxuICAgIH1cXG4gICAgZHJhd1BsdXMoY29udGV4dCwgcG9zaXRpb24sIHNpemUpIHtcXG4gICAgICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XFxuICAgICAgICBjb25zdCBoYWxmU2l6ZSA9IHNpemUgLyAyO1xcbiAgICAgICAgY29udGV4dC5tb3ZlVG8ocG9zaXRpb24ueCwgcG9zaXRpb24ueSAtIGhhbGZTaXplKTtcXG4gICAgICAgIGNvbnRleHQubGluZVRvKHBvc2l0aW9uLngsIHBvc2l0aW9uLnkgKyBoYWxmU2l6ZSk7XFxuICAgICAgICBjb250ZXh0Lm1vdmVUbyhwb3NpdGlvbi54IC0gaGFsZlNpemUsIHBvc2l0aW9uLnkpO1xcbiAgICAgICAgY29udGV4dC5saW5lVG8ocG9zaXRpb24ueCArIGhhbGZTaXplLCBwb3NpdGlvbi55KTtcXG4gICAgICAgIGNvbnRleHQuc3Ryb2tlKCk7XFxuICAgIH1cXG4gICAgZHJhd0RvdChjb250ZXh0LCBwb3NpdGlvbiwgc2l6ZSkge1xcbiAgICAgICAgY29udGV4dC5iZWdpblBhdGgoKTtcXG4gICAgICAgIGNvbnRleHQuYXJjKHBvc2l0aW9uLngsIHBvc2l0aW9uLnksIHNpemUgLyAyLCAwLCBNYXRoLlBJICogMik7XFxuICAgICAgICBjb250ZXh0LmZpbGwoKTtcXG4gICAgfVxcbiAgICBkcmF3Qm9yZGVyKGNvbnRleHQsIGJvcmRlcikge1xcbiAgICAgICAgdmFyIF9hLCBfYiwgX2MsIF9kLCBfZSwgX2YsIF9nO1xcbiAgICAgICAgY29udGV4dC5zYXZlKCk7XFxuICAgICAgICBjb25zdCBwb3NpdGlvbiA9IChfYSA9IGJvcmRlci5wb3NpdGlvbikgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogKDAsIHZlY18xLnZlYykoKTtcXG4gICAgICAgIGlmIChib3JkZXIuc2hvd0xhYmVsIHx8IGJvcmRlci5zaG93VmFsdWUpIHtcXG4gICAgICAgICAgICB0aGlzLmRyYXdMYWJlbChjb250ZXh0LCBEZWJ1Zy5wcmVwYXJlTGFiZWwoKF9iID0gYm9yZGVyLmxhYmVsKSAhPT0gbnVsbCAmJiBfYiAhPT0gdm9pZCAwID8gX2IgOiAnJywgKF9jID0gYm9yZGVyLnZhbHVlKSAhPT0gbnVsbCAmJiBfYyAhPT0gdm9pZCAwID8gX2MgOiAnJywgYm9yZGVyLnNob3dMYWJlbCwgYm9yZGVyLnNob3dWYWx1ZSksIHZlY18xLnZlYy5hZGQocG9zaXRpb24gIT09IG51bGwgJiYgcG9zaXRpb24gIT09IHZvaWQgMCA/IHBvc2l0aW9uIDogKDAsIHZlY18xLnZlYykoKSwgYm9yZGVyLmxhYmVsT2Zmc2V0KSwgJ2xlZnQnLCAoX2QgPSBib3JkZXIucGFkZGluZykgIT09IG51bGwgJiYgX2QgIT09IHZvaWQgMCA/IF9kIDogdGhpcy5vcHRpb25zLnBhZGRpbmcsIChfZSA9IGJvcmRlci5mb250KSAhPT0gbnVsbCAmJiBfZSAhPT0gdm9pZCAwID8gX2UgOiB0aGlzLm9wdGlvbnMuZm9udCwgKF9mID0gYm9yZGVyLmZvcmVncm91bmRDb2xvdXIpICE9PSBudWxsICYmIF9mICE9PSB2b2lkIDAgPyBfZiA6IHRoaXMub3B0aW9ucy5mb3JlZ3JvdW5kQ29sb3VyLCAoX2cgPSBib3JkZXIuYmFja2dyb3VuZENvbG91cikgIT09IG51bGwgJiYgX2cgIT09IHZvaWQgMCA/IF9nIDogdGhpcy5vcHRpb25zLmJhY2tncm91bmRDb2xvdXIpO1xcbiAgICAgICAgfVxcbiAgICAgICAgaWYgKGJvcmRlci5zaG93Qm9yZGVyKSB7XFxuICAgICAgICAgICAgY29udGV4dC5saW5lV2lkdGggPSBib3JkZXIuYm9yZGVyV2lkdGg7XFxuICAgICAgICAgICAgY29udGV4dC5zdHJva2VTdHlsZSA9IGNvbnRleHQuZmlsbFN0eWxlID0gYm9yZGVyLmJvcmRlckNvbG91cjtcXG4gICAgICAgICAgICBzd2l0Y2ggKGJvcmRlci5ib3JkZXJTdHlsZSkge1xcbiAgICAgICAgICAgICAgICBjYXNlICdzb2xpZCc6XFxuICAgICAgICAgICAgICAgICAgICBjb250ZXh0LnNldExpbmVEYXNoKFtdKTtcXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xcbiAgICAgICAgICAgICAgICBjYXNlICdkYXNoZWQnOlxcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dC5zZXRMaW5lRGFzaChbYm9yZGVyLmJvcmRlckRhc2hTaXplLCBib3JkZXIuYm9yZGVyRGFzaFNpemVdKTtcXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xcbiAgICAgICAgICAgICAgICBjYXNlICdkb3R0ZWQnOlxcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dC5zZXRMaW5lRGFzaChbYm9yZGVyLmJvcmRlcldpZHRoLCBib3JkZXIuYm9yZGVyV2lkdGhdKTtcXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICBzd2l0Y2ggKGJvcmRlci5ib3JkZXJTaGFwZSkge1xcbiAgICAgICAgICAgICAgICBjYXNlICdyZWN0YW5nbGUnOlxcbiAgICAgICAgICAgICAgICAgICAgaWYgKGJvcmRlci5zaXplKSB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kcmF3UmVjdGFuZ2xlKGNvbnRleHQsIHBvc2l0aW9uLCBib3JkZXIuc2l6ZSk7XFxuICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgICAgICBicmVhaztcXG4gICAgICAgICAgICAgICAgY2FzZSAnY2lyY2xlJzpcXG4gICAgICAgICAgICAgICAgICAgIGlmIChib3JkZXIucmFkaXVzKSB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kcmF3Q2lyY2xlKGNvbnRleHQsIHBvc2l0aW9uLCBib3JkZXIucmFkaXVzKTtcXG4gICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgICAgIGNvbnRleHQucmVzdG9yZSgpO1xcbiAgICB9XFxuICAgIGRyYXdSZWN0YW5nbGUoY29udGV4dCwgcG9zaXRpb24sIHNpemUpIHtcXG4gICAgICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XFxuICAgICAgICBjb250ZXh0LnJlY3QocG9zaXRpb24ueCwgcG9zaXRpb24ueSwgc2l6ZS54LCBzaXplLnkpO1xcbiAgICAgICAgY29udGV4dC5zdHJva2UoKTtcXG4gICAgfVxcbiAgICBkcmF3Q2lyY2xlKGNvbnRleHQsIHBvc2l0aW9uLCByYWRpdXMpIHtcXG4gICAgICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XFxuICAgICAgICBjb250ZXh0LmFyYyhwb3NpdGlvbi54LCBwb3NpdGlvbi55LCByYWRpdXMsIDAsIE1hdGguUEkgKiAyKTtcXG4gICAgICAgIGNvbnRleHQuc3Ryb2tlKCk7XFxuICAgIH1cXG59XFxuZXhwb3J0c1tcXFwiZGVmYXVsdFxcXCJdID0gRGVidWc7XFxuRGVidWcuZGVmYXVsdE9wdGlvbnMgPSB7XFxuICAgIG1hcmdpbjogMTAsXFxuICAgIHBhZGRpbmc6IDQsXFxuICAgIGZvbnQ6ICcxMHB0IEx1Y2lkYSBDb25zb2xlLCBtb25vc3BhY2UnLFxcbiAgICBsaW5lSGVpZ2h0OiAxMixcXG4gICAgbGluZU1hcmdpbjogMCxcXG4gICAgZm9yZWdyb3VuZENvbG91cjogJyNmZmYnLFxcbiAgICBiYWNrZ3JvdW5kQ29sb3VyOiAnIzMzMycsXFxuICAgIGRlZmF1bHRWYWx1ZToge1xcbiAgICAgICAgYWxpZ246ICdsZWZ0JyxcXG4gICAgICAgIHNob3dMYWJlbDogdHJ1ZSxcXG4gICAgfSxcXG4gICAgZGVmYXVsdENoYXJ0OiB7XFxuICAgICAgICB2YWx1ZXM6IFtdLFxcbiAgICAgICAgdmFsdWVCdWZmZXJTaXplOiA2MCxcXG4gICAgICAgIHZhbHVlQnVmZmVyU3RyaWRlOiAxLFxcbiAgICAgICAgbWluVmFsdWU6IDAsXFxuICAgICAgICBtYXhWYWx1ZTogMTAwLFxcbiAgICAgICAgYmFyV2lkdGg6IDIsXFxuICAgICAgICBhbGlnbjogJ2xlZnQnLFxcbiAgICAgICAgc2hvd0xhYmVsOiB0cnVlLFxcbiAgICAgICAgY2hhcnRCYWNrZ3JvdW5kQ29sb3VyOiAnIzIyMicsXFxuICAgIH0sXFxuICAgIGRlZmF1bHRNYXJrZXI6IHtcXG4gICAgICAgIHNob3dMYWJlbDogdHJ1ZSxcXG4gICAgICAgIHNob3dWYWx1ZTogdHJ1ZSxcXG4gICAgICAgIHNob3dNYXJrZXI6IHRydWUsXFxuICAgICAgICBtYXJrZXJTaXplOiA2LFxcbiAgICAgICAgbWFya2VyU3R5bGU6ICd4JyxcXG4gICAgICAgIG1hcmtlckNvbG91cjogJyNjY2MnLFxcbiAgICAgICAgc3BhY2U6ICd3b3JsZCcsXFxuICAgICAgICBsYWJlbE9mZnNldDogKDAsIHZlY18xLnZlYykoMTApLFxcbiAgICB9LFxcbiAgICBkZWZhdWx0Qm9yZGVyOiB7XFxuICAgICAgICBzaG93TGFiZWw6IHRydWUsXFxuICAgICAgICBzaG93VmFsdWU6IHRydWUsXFxuICAgICAgICBzaG93Qm9yZGVyOiB0cnVlLFxcbiAgICAgICAgYm9yZGVyV2lkdGg6IDEsXFxuICAgICAgICBib3JkZXJTdHlsZTogJ3NvbGlkJyxcXG4gICAgICAgIGJvcmRlclNoYXBlOiAncmVjdGFuZ2xlJyxcXG4gICAgICAgIGJvcmRlckNvbG91cjogJyNjY2MnLFxcbiAgICAgICAgYm9yZGVyRGFzaFNpemU6IDUsXFxuICAgICAgICBzcGFjZTogJ3dvcmxkJyxcXG4gICAgICAgIGxhYmVsT2Zmc2V0OiAoMCwgdmVjXzEudmVjKSgxMCksXFxuICAgIH0sXFxufTtcXG5cXG5cXG4vLyMgc291cmNlVVJMPXdlYnBhY2s6Ly9AYmFzZW1lbnR1bml2ZXJzZS9kZWJ1Zy8uL2luZGV4LnRzP1wiKTtcblxuLyoqKi8gfSlcblxuLyoqKioqKi8gXHR9KTtcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqLyBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0dmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuLyoqKioqKi8gXHRcbi8qKioqKiovIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbi8qKioqKiovIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuLyoqKioqKi8gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuLyoqKioqKi8gXHRcdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuLyoqKioqKi8gXHRcdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuLyoqKioqKi8gXHRcdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuLyoqKioqKi8gXHRcdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuLyoqKioqKi8gXHRcdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuLyoqKioqKi8gXHRcdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcbi8qKioqKiovIFx0XHRcdGV4cG9ydHM6IHt9XG4vKioqKioqLyBcdFx0fTtcbi8qKioqKiovIFx0XG4vKioqKioqLyBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4vKioqKioqLyBcdFx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4vKioqKioqLyBcdFxuLyoqKioqKi8gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4vKioqKioqLyBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuLyoqKioqKi8gXHR9XG4vKioqKioqLyBcdFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKiovIFx0XG4vKioqKioqLyBcdC8vIHN0YXJ0dXBcbi8qKioqKiovIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vKioqKioqLyBcdC8vIFRoaXMgZW50cnkgbW9kdWxlIGNhbid0IGJlIGlubGluZWQgYmVjYXVzZSB0aGUgZXZhbCBkZXZ0b29sIGlzIHVzZWQuXG4vKioqKioqLyBcdHZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vaW5kZXgudHNcIik7XG4vKioqKioqLyBcdFxuLyoqKioqKi8gXHRyZXR1cm4gX193ZWJwYWNrX2V4cG9ydHNfXztcbi8qKioqKiovIH0pKClcbjtcbn0pOyIsIi8qXG4gKiBBVFRFTlRJT046IFRoZSBcImV2YWxcIiBkZXZ0b29sIGhhcyBiZWVuIHVzZWQgKG1heWJlIGJ5IGRlZmF1bHQgaW4gbW9kZTogXCJkZXZlbG9wbWVudFwiKS5cbiAqIFRoaXMgZGV2dG9vbCBpcyBuZWl0aGVyIG1hZGUgZm9yIHByb2R1Y3Rpb24gbm9yIGZvciByZWFkYWJsZSBvdXRwdXQgZmlsZXMuXG4gKiBJdCB1c2VzIFwiZXZhbCgpXCIgY2FsbHMgdG8gY3JlYXRlIGEgc2VwYXJhdGUgc291cmNlIGZpbGUgaW4gdGhlIGJyb3dzZXIgZGV2dG9vbHMuXG4gKiBJZiB5b3UgYXJlIHRyeWluZyB0byByZWFkIHRoZSBvdXRwdXQgZmlsZSwgc2VsZWN0IGEgZGlmZmVyZW50IGRldnRvb2wgKGh0dHBzOi8vd2VicGFjay5qcy5vcmcvY29uZmlndXJhdGlvbi9kZXZ0b29sLylcbiAqIG9yIGRpc2FibGUgdGhlIGRlZmF1bHQgZGV2dG9vbCB3aXRoIFwiZGV2dG9vbDogZmFsc2VcIi5cbiAqIElmIHlvdSBhcmUgbG9va2luZyBmb3IgcHJvZHVjdGlvbi1yZWFkeSBvdXRwdXQgZmlsZXMsIHNlZSBtb2RlOiBcInByb2R1Y3Rpb25cIiAoaHR0cHM6Ly93ZWJwYWNrLmpzLm9yZy9jb25maWd1cmF0aW9uL21vZGUvKS5cbiAqL1xuKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIHtcblx0XHR2YXIgYSA9IGZhY3RvcnkoKTtcblx0XHRmb3IodmFyIGkgaW4gYSkgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyA/IGV4cG9ydHMgOiByb290KVtpXSA9IGFbaV07XG5cdH1cbn0pKHNlbGYsICgpID0+IHtcbnJldHVybiAvKioqKioqLyAoKCkgPT4geyAvLyB3ZWJwYWNrQm9vdHN0cmFwXG4vKioqKioqLyBcdHZhciBfX3dlYnBhY2tfbW9kdWxlc19fID0gKHtcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9AYmFzZW1lbnR1bml2ZXJzZS91dGlscy91dGlscy5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9AYmFzZW1lbnR1bml2ZXJzZS91dGlscy91dGlscy5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKiovICgobW9kdWxlKSA9PiB7XG5cbmV2YWwoXCIvKipcXG4gKiBAb3ZlcnZpZXcgQSBsaWJyYXJ5IG9mIHVzZWZ1bCBmdW5jdGlvbnNcXG4gKiBAYXV0aG9yIEdvcmRvbiBMYXJyaWdhblxcbiAqL1xcblxcbi8qKlxcbiAqIENoZWNrIGlmIHR3byBudW1iZXJzIGFyZSBhcHByb3hpbWF0ZWx5IGVxdWFsXFxuICogQHBhcmFtIHtudW1iZXJ9IGEgTnVtYmVyIGFcXG4gKiBAcGFyYW0ge251bWJlcn0gYiBOdW1iZXIgYlxcbiAqIEBwYXJhbSB7bnVtYmVyfSBbcD1OdW1iZXIuRVBTSUxPTl0gVGhlIHByZWNpc2lvbiB2YWx1ZVxcbiAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgbnVtYmVycyBhIGFuZCBiIGFyZSBhcHByb3hpbWF0ZWx5IGVxdWFsXFxuICovXFxuY29uc3QgZmxvYXRFcXVhbHMgPSAoYSwgYiwgcCA9IE51bWJlci5FUFNJTE9OKSA9PiBNYXRoLmFicyhhIC0gYikgPCBwO1xcblxcbi8qKlxcbiAqIENsYW1wIGEgbnVtYmVyIGJldHdlZW4gbWluIGFuZCBtYXhcXG4gKiBAcGFyYW0ge251bWJlcn0gYSBUaGUgbnVtYmVyIHRvIGNsYW1wXFxuICogQHBhcmFtIHtudW1iZXJ9IFttaW49MF0gVGhlIG1pbmltdW0gdmFsdWVcXG4gKiBAcGFyYW0ge251bWJlcn0gW21heD0xXSBUaGUgbWF4aW11bSB2YWx1ZVxcbiAqIEByZXR1cm4ge251bWJlcn0gQSBjbGFtcGVkIG51bWJlclxcbiAqL1xcbmNvbnN0IGNsYW1wID0gKGEsIG1pbiA9IDAsIG1heCA9IDEpID0+IGEgPCBtaW4gPyBtaW4gOiAoYSA+IG1heCA/IG1heCA6IGEpO1xcblxcbi8qKlxcbiAqIEdldCB0aGUgZnJhY3Rpb25hbCBwYXJ0IG9mIGEgbnVtYmVyXFxuICogQHBhcmFtIHtudW1iZXJ9IGEgVGhlIG51bWJlciBmcm9tIHdoaWNoIHRvIGdldCB0aGUgZnJhY3Rpb25hbCBwYXJ0XFxuICogQHJldHVybiB7bnVtYmVyfSBUaGUgZnJhY3Rpb25hbCBwYXJ0IG9mIHRoZSBudW1iZXJcXG4gKi9cXG5jb25zdCBmcmFjID0gYSA9PiBhID49IDAgPyBhIC0gTWF0aC5mbG9vcihhKSA6IGEgLSBNYXRoLmNlaWwoYSk7XFxuXFxuLyoqXFxuICogRG8gYSBsaW5lYXIgaW50ZXJwb2xhdGlvbiBiZXR3ZWVuIGEgYW5kIGJcXG4gKiBAcGFyYW0ge251bWJlcn0gYSBUaGUgbWluaW11bSBudW1iZXJcXG4gKiBAcGFyYW0ge251bWJlcn0gYiBUaGUgbWF4aW11bSBudW1iZXJcXG4gKiBAcGFyYW0ge251bWJlcn0gaSBUaGUgaW50ZXJwb2xhdGlvbiB2YWx1ZSwgc2hvdWxkIGJlIGluIHRoZSBpbnRlcnZhbCBbMCwgMV1cXG4gKiBAcmV0dXJuIHtudW1iZXJ9IEFuIGludGVycG9sYXRlZCB2YWx1ZSBpbiB0aGUgaW50ZXJ2YWwgW2EsIGJdXFxuICovXFxuY29uc3QgbGVycCA9IChhLCBiLCBpKSA9PiBhICsgKGIgLSBhKSAqIGk7XFxuXFxuLyoqXFxuICogR2V0IHRoZSBwb3NpdGlvbiBvZiBpIGJldHdlZW4gYSBhbmQgYlxcbiAqIEBwYXJhbSB7bnVtYmVyfSBhIFRoZSBtaW5pbXVtIG51bWJlclxcbiAqIEBwYXJhbSB7bnVtYmVyfSBiIFRoZSBtYXhpbXVtIG51bWJlclxcbiAqIEBwYXJhbSB7bnVtYmVyfSBpIFRoZSBpbnRlcnBvbGF0ZWQgdmFsdWUgaW4gdGhlIGludGVydmFsIFthLCBiXVxcbiAqIEByZXR1cm4ge251bWJlcn0gVGhlIHBvc2l0aW9uIG9mIGkgYmV0d2VlbiBhIGFuZCBiXFxuICovXFxuY29uc3QgdW5sZXJwID0gKGEsIGIsIGkpID0+IChpIC0gYSkgLyAoYiAtIGEpO1xcblxcbi8qKlxcbiAqIERvIGEgYmlsaW5lYXIgaW50ZXJwb2xhdGlvblxcbiAqIEBwYXJhbSB7bnVtYmVyfSBjMDAgVG9wLWxlZnQgdmFsdWVcXG4gKiBAcGFyYW0ge251bWJlcn0gYzEwIFRvcC1yaWdodCB2YWx1ZVxcbiAqIEBwYXJhbSB7bnVtYmVyfSBjMDEgQm90dG9tLWxlZnQgdmFsdWVcXG4gKiBAcGFyYW0ge251bWJlcn0gYzExIEJvdHRvbS1yaWdodCB2YWx1ZVxcbiAqIEBwYXJhbSB7bnVtYmVyfSBpeCBJbnRlcnBvbGF0aW9uIHZhbHVlIGFsb25nIHhcXG4gKiBAcGFyYW0ge251bWJlcn0gaXkgSW50ZXJwb2xhdGlvbiB2YWx1ZSBhbG9uZyB5XFxuICogQHJldHVybiB7bnVtYmVyfSBBIGJpbGluZWFyIGludGVycG9sYXRlZCB2YWx1ZVxcbiAqL1xcbmNvbnN0IGJsZXJwID0gKGMwMCwgYzEwLCBjMDEsIGMxMSwgaXgsIGl5KSA9PiBsZXJwKGxlcnAoYzAwLCBjMTAsIGl4KSwgbGVycChjMDEsIGMxMSwgaXgpLCBpeSk7XFxuXFxuLyoqXFxuICogUmUtbWFwIGEgbnVtYmVyIGkgZnJvbSByYW5nZSBhMS4uLmEyIHRvIGIxLi4uYjJcXG4gKiBAcGFyYW0ge251bWJlcn0gaSBUaGUgbnVtYmVyIHRvIHJlLW1hcFxcbiAqIEBwYXJhbSB7bnVtYmVyfSBhMVxcbiAqIEBwYXJhbSB7bnVtYmVyfSBhMlxcbiAqIEBwYXJhbSB7bnVtYmVyfSBiMVxcbiAqIEBwYXJhbSB7bnVtYmVyfSBiMlxcbiAqIEByZXR1cm4ge251bWJlcn1cXG4gKi9cXG5jb25zdCByZW1hcCA9IChpLCBhMSwgYTIsIGIxLCBiMikgPT4gYjEgKyAoaSAtIGExKSAqIChiMiAtIGIxKSAvIChhMiAtIGExKTtcXG5cXG4vKipcXG4gKiBEbyBhIHNtb290aCBpbnRlcnBvbGF0aW9uIGJldHdlZW4gYSBhbmQgYlxcbiAqIEBwYXJhbSB7bnVtYmVyfSBhIFRoZSBtaW5pbXVtIG51bWJlclxcbiAqIEBwYXJhbSB7bnVtYmVyfSBiIFRoZSBtYXhpbXVtIG51bWJlclxcbiAqIEBwYXJhbSB7bnVtYmVyfSBpIFRoZSBpbnRlcnBvbGF0aW9uIHZhbHVlXFxuICogQHJldHVybiB7bnVtYmVyfSBBbiBpbnRlcnBvbGF0ZWQgdmFsdWUgaW4gdGhlIGludGVydmFsIFthLCBiXVxcbiAqL1xcbmNvbnN0IHNtb290aHN0ZXAgPSAoYSwgYiwgaSkgPT4gbGVycChhLCBiLCAzICogTWF0aC5wb3coaSwgMikgLSAyICogTWF0aC5wb3coaSwgMykpO1xcblxcbi8qKlxcbiAqIEdldCBhbiBhbmdsZSBpbiByYWRpYW5zXFxuICogQHBhcmFtIHtudW1iZXJ9IGRlZ3JlZXMgVGhlIGFuZ2xlIGluIGRlZ3JlZXNcXG4gKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBhbmdsZSBpbiByYWRpYW5zXFxuICovXFxuY29uc3QgcmFkaWFucyA9IGRlZ3JlZXMgPT4gKE1hdGguUEkgLyAxODApICogZGVncmVlcztcXG5cXG4vKipcXG4gKiBHZXQgYW4gYW5nbGUgaW4gZGVncmVlc1xcbiAqIEBwYXJhbSB7bnVtYmVyfSByYWRpYW5zIFRoZSBhbmdsZSBpbiByYWRpYW5zXFxuICogQHJldHVybiB7bnVtYmVyfSBUaGUgYW5nbGUgaW4gZGVncmVlc1xcbiAqL1xcbmNvbnN0IGRlZ3JlZXMgPSByYWRpYW5zID0+ICgxODAgLyBNYXRoLlBJKSAqIHJhZGlhbnM7XFxuXFxuLyoqXFxuICogR2V0IGEgcmFuZG9tIGZsb2F0IGluIHRoZSBpbnRlcnZhbCBbbWluLCBtYXgpXFxuICogQHBhcmFtIHtudW1iZXJ9IG1pbiBJbmNsdXNpdmUgbWluXFxuICogQHBhcmFtIHtudW1iZXJ9IG1heCBFeGNsdXNpdmUgbWF4XFxuICogQHJldHVybiB7bnVtYmVyfSBBIHJhbmRvbSBmbG9hdCBpbiB0aGUgaW50ZXJ2YWwgW21pbiwgbWF4KVxcbiAqL1xcbmNvbnN0IHJhbmRvbUJldHdlZW4gPSAobWluLCBtYXgpID0+IE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSArIG1pbjtcXG5cXG4vKipcXG4gKiBHZXQgYSByYW5kb20gaW50ZWdlciBpbiB0aGUgaW50ZXJ2YWwgW21pbiwgbWF4XVxcbiAqIEBwYXJhbSB7bnVtYmVyfSBtaW4gSW5jbHVzaXZlIG1pblxcbiAqIEBwYXJhbSB7bnVtYmVyfSBtYXggSW5jbHVzaXZlIG1heFxcbiAqIEByZXR1cm4ge251bWJlcn0gQSByYW5kb20gaW50ZWdlciBpbiB0aGUgaW50ZXJ2YWwgW21pbiwgbWF4XVxcbiAqL1xcbmNvbnN0IHJhbmRvbUludEJldHdlZW4gPSAobWluLCBtYXgpID0+IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW47XFxuXFxuLyoqXFxuICogR2V0IGEgbm9ybWFsbHktZGlzdHJpYnV0ZWQgcmFuZG9tIG51bWJlclxcbiAqIEBwYXJhbSB7bnVtYmVyfSBbbXU9MC41XSBUaGUgbWVhbiB2YWx1ZVxcbiAqIEBwYXJhbSB7bnVtYmVyfSBbc2lnbWE9MC41XSBUaGUgc3RhbmRhcmQgZGV2aWF0aW9uXFxuICogQHBhcmFtIHtudW1iZXJ9IFtzYW1wbGVzPTJdIFRoZSBudW1iZXIgb2Ygc2FtcGxlc1xcbiAqIEByZXR1cm4ge251bWJlcn0gQSBub3JtYWxseS1kaXN0cmlidXRlZCByYW5kb20gbnVtYmVyXFxuICovXFxuY29uc3QgY2x0UmFuZG9tID0gKG11ID0gMC41LCBzaWdtYSA9IDAuNSwgc2FtcGxlcyA9IDIpID0+IHtcXG4gIGxldCB0b3RhbCA9IDA7XFxuICBmb3IgKGxldCBpID0gc2FtcGxlczsgaS0tOykge1xcbiAgICB0b3RhbCArPSBNYXRoLnJhbmRvbSgpO1xcbiAgfVxcbiAgcmV0dXJuIG11ICsgKHRvdGFsIC0gc2FtcGxlcyAvIDIpIC8gKHNhbXBsZXMgLyAyKSAqIHNpZ21hO1xcbn07XFxuXFxuLyoqXFxuICogR2V0IGEgbm9ybWFsbHktZGlzdHJpYnV0ZWQgcmFuZG9tIGludGVnZXIgaW4gdGhlIGludGVydmFsIFttaW4sIG1heF1cXG4gKiBAcGFyYW0ge251bWJlcn0gbWluIEluY2x1c2l2ZSBtaW5cXG4gKiBAcGFyYW0ge251bWJlcn0gbWF4IEluY2x1c2l2ZSBtYXhcXG4gKiBAcmV0dXJuIHtudW1iZXJ9IEEgbm9ybWFsbHktZGlzdHJpYnV0ZWQgcmFuZG9tIGludGVnZXJcXG4gKi9cXG5jb25zdCBjbHRSYW5kb21JbnQgPSAobWluLCBtYXgpID0+IE1hdGguZmxvb3IobWluICsgY2x0UmFuZG9tKDAuNSwgMC41LCAyKSAqIChtYXggKyAxIC0gbWluKSk7XFxuXFxuLyoqXFxuICogUmV0dXJuIGEgd2VpZ2h0ZWQgcmFuZG9tIGludGVnZXJcXG4gKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IHcgQW4gYXJyYXkgb2Ygd2VpZ2h0c1xcbiAqIEByZXR1cm4ge251bWJlcn0gQW4gaW5kZXggZnJvbSB3XFxuICovXFxuY29uc3Qgd2VpZ2h0ZWRSYW5kb20gPSB3ID0+IHtcXG4gIGxldCB0b3RhbCA9IHcucmVkdWNlKChhLCBpKSA9PiBhICsgaSwgMCksIG4gPSAwO1xcbiAgY29uc3QgciA9IE1hdGgucmFuZG9tKCkgKiB0b3RhbDtcXG4gIHdoaWxlICh0b3RhbCA+IHIpIHtcXG4gICAgdG90YWwgLT0gd1tuKytdO1xcbiAgfVxcbiAgcmV0dXJuIG4gLSAxO1xcbn07XFxuXFxuLyoqXFxuICogQW4gaW50ZXJwb2xhdGlvbiBmdW5jdGlvblxcbiAqIEBjYWxsYmFjayBpbnRlcnBvbGF0aW9uQ2FsbGJhY2tcXG4gKiBAcGFyYW0ge251bWJlcn0gYSBUaGUgbWluaW11bSBudW1iZXJcXG4gKiBAcGFyYW0ge251bWJlcn0gYiBUaGUgbWF4aW11bSBudW1iZXJcXG4gKiBAcGFyYW0ge251bWJlcn0gaSBUaGUgaW50ZXJwb2xhdGlvbiB2YWx1ZSwgc2hvdWxkIGJlIGluIHRoZSBpbnRlcnZhbCBbMCwgMV1cXG4gKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBpbnRlcnBvbGF0ZWQgdmFsdWUgaW4gdGhlIGludGVydmFsIFthLCBiXVxcbiAqL1xcblxcbi8qKlxcbiAqIFJldHVybiBhbiBpbnRlcnBvbGF0ZWQgdmFsdWUgZnJvbSBhbiBhcnJheVxcbiAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0gYSBBbiBhcnJheSBvZiB2YWx1ZXMgaW50ZXJwb2xhdGVcXG4gKiBAcGFyYW0ge251bWJlcn0gaSBBIG51bWJlciBpbiB0aGUgaW50ZXJ2YWwgWzAsIDFdXFxuICogQHBhcmFtIHtpbnRlcnBvbGF0aW9uQ2FsbGJhY2t9IFtmPU1hdGgubGVycF0gVGhlIGludGVycG9sYXRpb24gZnVuY3Rpb24gdG8gdXNlXFxuICogQHJldHVybiB7bnVtYmVyfSBBbiBpbnRlcnBvbGF0ZWQgdmFsdWUgaW4gdGhlIGludGVydmFsIFttaW4oYSksIG1heChhKV1cXG4gKi9cXG5jb25zdCBsZXJwQXJyYXkgPSAoYSwgaSwgZiA9IGxlcnApID0+IHtcXG4gIGNvbnN0IHMgPSBpICogKGEubGVuZ3RoIC0gMSk7XFxuICBjb25zdCBwID0gY2xhbXAoTWF0aC50cnVuYyhzKSwgMCwgYS5sZW5ndGggLSAxKTtcXG4gIHJldHVybiBmKGFbcF0gfHwgMCwgYVtwICsgMV0gfHwgMCwgZnJhYyhzKSk7XFxufTtcXG5cXG4vKipcXG4gKiBHZXQgdGhlIGRvdCBwcm9kdWN0IG9mIHR3byB2ZWN0b3JzXFxuICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSBhIFZlY3RvciBhXFxuICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSBiIFZlY3RvciBiXFxuICogQHJldHVybiB7bnVtYmVyfSBhIOKImSBiXFxuICovXFxuY29uc3QgZG90ID0gKGEsIGIpID0+IGEucmVkdWNlKChuLCB2LCBpKSA9PiBuICsgdiAqIGJbaV0sIDApO1xcblxcbi8qKlxcbiAqIEdldCB0aGUgZmFjdG9yaWFsIG9mIGEgbnVtYmVyXFxuICogQHBhcmFtIHtudW1iZXJ9IGFcXG4gKiBAcmV0dXJuIHtudW1iZXJ9IGEhXFxuICovXFxuY29uc3QgZmFjdG9yaWFsID0gYSA9PiB7XFxuICBsZXQgcmVzdWx0ID0gMTtcXG4gIGZvciAobGV0IGkgPSAyOyBpIDw9IGE7IGkrKykge1xcbiAgICByZXN1bHQgKj0gaTtcXG4gIH1cXG4gIHJldHVybiByZXN1bHQ7XFxufTtcXG5cXG4vKipcXG4gKiBHZXQgdGhlIG51bWJlciBvZiBwZXJtdXRhdGlvbnMgb2YgciBlbGVtZW50cyBmcm9tIGEgc2V0IG9mIG4gZWxlbWVudHNcXG4gKiBAcGFyYW0ge251bWJlcn0gblxcbiAqIEBwYXJhbSB7bnVtYmVyfSByXFxuICogQHJldHVybiB7bnVtYmVyfSBuUHJcXG4gKi9cXG5jb25zdCBwZXJtdXRhdGlvbiA9IChuLCByKSA9PiBmYWN0b3JpYWwobikgLyBmYWN0b3JpYWwobiAtIHIpO1xcblxcbi8qKlxcbiAqIEdldCB0aGUgbnVtYmVyIG9mIGNvbWJpbmF0aW9ucyBvZiByIGVsZW1lbnRzIGZyb20gYSBzZXQgb2YgbiBlbGVtZW50c1xcbiAqIEBwYXJhbSB7bnVtYmVyfSBuXFxuICogQHBhcmFtIHtudW1iZXJ9IHJcXG4gKiBAcmV0dXJuIHtudW1iZXJ9IG5DclxcbiAqL1xcbmNvbnN0IGNvbWJpbmF0aW9uID0gKG4sIHIpID0+IGZhY3RvcmlhbChuKSAvIChmYWN0b3JpYWwocikgKiBmYWN0b3JpYWwobiAtIHIpKTtcXG5cXG4vKipcXG4gKiBBIGZ1bmN0aW9uIGZvciBnZW5lcmF0aW5nIGFycmF5IHZhbHVlc1xcbiAqIEBjYWxsYmFjayB0aW1lc0NhbGxiYWNrXFxuICogQHBhcmFtIHtudW1iZXJ9IGkgVGhlIGFycmF5IGluZGV4XFxuICogQHJldHVybiB7Kn0gVGhlIGFycmF5IHZhbHVlXFxuICovXFxuXFxuLyoqXFxuICogUmV0dXJuIGEgbmV3IGFycmF5IHdpdGggbGVuZ3RoIG4gYnkgY2FsbGluZyBmdW5jdGlvbiBmKGkpIG9uIGVhY2ggZWxlbWVudFxcbiAqIEBwYXJhbSB7dGltZXNDYWxsYmFja30gZlxcbiAqIEBwYXJhbSB7bnVtYmVyfSBuIFRoZSBzaXplIG9mIHRoZSBhcnJheVxcbiAqIEByZXR1cm4ge0FycmF5PCo+fVxcbiAqL1xcbmNvbnN0IHRpbWVzID0gKGYsIG4pID0+IEFycmF5KG4pLmZpbGwoMCkubWFwKChfLCBpKSA9PiBmKGkpKTtcXG5cXG4vKipcXG4gKiBSZXR1cm4gYW4gYXJyYXkgY29udGFpbmluZyBudW1iZXJzIDAtPihuIC0gMSlcXG4gKiBAcGFyYW0ge251bWJlcn0gbiBUaGUgc2l6ZSBvZiB0aGUgYXJyYXlcXG4gKiBAcmV0dXJuIHtBcnJheTxudW1iZXI+fSBBbiBhcnJheSBvZiBpbnRlZ2VycyAwLT4obiAtIDEpXFxuICovXFxuY29uc3QgcmFuZ2UgPSBuID0+IHRpbWVzKGkgPT4gaSwgbik7XFxuXFxuLyoqXFxuICogWmlwIDIgYXJyYXlzIHRvZ2V0aGVyLCBpLmUuIChbMSwgMiwgM10sIFthLCBiLCBjXSkgPT4gW1sxLCBhXSwgWzIsIGJdLCBbMywgY11dXFxuICogQHBhcmFtIHtBcnJheTwqPn0gYVxcbiAqIEBwYXJhbSB7QXJyYXk8Kj59IGJcXG4gKiBAcmV0dXJuIHtBcnJheTxBcnJheTwqPj59XFxuICovXFxuY29uc3QgemlwID0gKGEsIGIpID0+IGEubWFwKChrLCBpKSA9PiBbaywgYltpXV0pO1xcblxcbi8qKlxcbiAqIFJldHVybiBhcnJheVtpXSB3aXRoIHBvc2l0aXZlIGFuZCBuZWdhdGl2ZSB3cmFwcGluZ1xcbiAqIEBwYXJhbSB7QXJyYXk8Kj59IGFcXG4gKiBAcGFyYW0ge251bWJlcn0gaSBUaGUgcG9zaXRpdmVseS9uZWdhdGl2ZWx5IHdyYXBwZWQgYXJyYXkgaW5kZXhcXG4gKiBAcmV0dXJuIHsqfSBBbiBlbGVtZW50IGZyb20gdGhlIGFycmF5XFxuICovXFxuY29uc3QgYXQgPSAoYSwgaSkgPT4gYVtpIDwgMCA/IGEubGVuZ3RoIC0gKE1hdGguYWJzKGkgKyAxKSAlIGEubGVuZ3RoKSAtIDEgOiBpICUgYS5sZW5ndGhdO1xcblxcbi8qKlxcbiAqIENob3AgYW4gYXJyYXkgaW50byBjaHVua3Mgb2Ygc2l6ZSBuXFxuICogQHBhcmFtIHtBcnJheTwqPn0gYVxcbiAqIEBwYXJhbSB7bnVtYmVyfSBuIFRoZSBjaHVuayBzaXplXFxuICogQHJldHVybiB7QXJyYXk8QXJyYXk8Kj4+fSBBbiBhcnJheSBvZiBhcnJheSBjaHVua3NcXG4gKi9cXG5jb25zdCBjaHVuayA9IChhLCBuKSA9PiB0aW1lcyhpID0+IGEuc2xpY2UoaSAqIG4sIGkgKiBuICsgbiksIE1hdGguY2VpbChhLmxlbmd0aCAvIG4pKTtcXG5cXG4vKipcXG4gKiBSYW5kb21seSBzaHVmZmxlIGEgc2hhbGxvdyBjb3B5IG9mIGFuIGFycmF5XFxuICogQHBhcmFtIHtBcnJheTwqPn0gYVxcbiAqIEByZXR1cm4ge0FycmF5PCo+fSBUaGUgc2h1ZmZsZWQgYXJyYXlcXG4gKi9cXG5jb25zdCBzaHVmZmxlID0gYSA9PiBhLnNsaWNlKCkuc29ydCgoKSA9PiBNYXRoLnJhbmRvbSgpIC0gMC41KTtcXG5cXG5pZiAodHJ1ZSkge1xcbiAgbW9kdWxlLmV4cG9ydHMgPSB7XFxuICAgIGZsb2F0RXF1YWxzLFxcbiAgICBjbGFtcCxcXG4gICAgZnJhYyxcXG4gICAgbGVycCxcXG4gICAgdW5sZXJwLFxcbiAgICBibGVycCxcXG4gICAgcmVtYXAsXFxuICAgIHNtb290aHN0ZXAsXFxuICAgIHJhZGlhbnMsXFxuICAgIGRlZ3JlZXMsXFxuICAgIHJhbmRvbUJldHdlZW4sXFxuICAgIHJhbmRvbUludEJldHdlZW4sXFxuICAgIGNsdFJhbmRvbSxcXG4gICAgY2x0UmFuZG9tSW50LFxcbiAgICB3ZWlnaHRlZFJhbmRvbSxcXG4gICAgbGVycEFycmF5LFxcbiAgICBkb3QsXFxuICAgIGZhY3RvcmlhbCxcXG4gICAgcGVybXV0YXRpb24sXFxuICAgIGNvbWJpbmF0aW9uLFxcbiAgICB0aW1lcyxcXG4gICAgcmFuZ2UsXFxuICAgIHppcCxcXG4gICAgYXQsXFxuICAgIGNodW5rLFxcbiAgICBzaHVmZmxlLFxcbiAgfTtcXG59XFxuXFxuXFxuLy8jIHNvdXJjZVVSTD13ZWJwYWNrOi8vQGJhc2VtZW50dW5pdmVyc2UvaW5wdXQtbWFuYWdlci8uL25vZGVfbW9kdWxlcy9AYmFzZW1lbnR1bml2ZXJzZS91dGlscy91dGlscy5qcz9cIik7XG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL0BiYXNlbWVudHVuaXZlcnNlL3ZlYy92ZWMuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9AYmFzZW1lbnR1bml2ZXJzZS92ZWMvdmVjLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqLyAoKG1vZHVsZSwgX191bnVzZWRfd2VicGFja19leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSA9PiB7XG5cbmV2YWwoXCJjb25zdCB7IHRpbWVzLCBjaHVuaywgZG90IH0gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBAYmFzZW1lbnR1bml2ZXJzZS91dGlscyAqLyBcXFwiLi9ub2RlX21vZHVsZXMvQGJhc2VtZW50dW5pdmVyc2UvdXRpbHMvdXRpbHMuanNcXFwiKTtcXG5cXG4vKipcXG4gKiBAb3ZlcnZpZXcgQSBsaWJyYXJ5IG9mIHVzZWZ1bCBmdW5jdGlvbnNcXG4gKiBAYXV0aG9yIEdvcmRvbiBMYXJyaWdhblxcbiAqL1xcblxcbi8qKlxcbiAqIEEgMmQgdmVjdG9yXFxuICogQHR5cGVkZWYge09iamVjdH0gdmVjXFxuICogQHByb3BlcnR5IHtudW1iZXJ9IHggVGhlIHggY29tcG9uZW50IG9mIHRoZSB2ZWN0b3JcXG4gKiBAcHJvcGVydHkge251bWJlcn0geSBUaGUgeSBjb21wb25lbnQgb2YgdGhlIHZlY3RvclxcbiAqL1xcblxcbi8qKlxcbiAqIENyZWF0ZSBhIG5ldyB2ZWN0b3JcXG4gKiBAcGFyYW0ge251bWJlcnx2ZWN9IFt4XSBUaGUgeCBjb21wb25lbnQgb2YgdGhlIHZlY3Rvciwgb3IgYSB2ZWN0b3IgdG8gY29weVxcbiAqIEBwYXJhbSB7bnVtYmVyfSBbeV0gVGhlIHkgY29tcG9uZW50IG9mIHRoZSB2ZWN0b3JcXG4gKiBAcmV0dXJuIHt2ZWN9IEEgbmV3IHZlY3RvclxcbiAqIEBleGFtcGxlIDxjYXB0aW9uPlZhcmlvdXMgd2F5cyB0byBpbml0aWFsaXNlIGEgdmVjdG9yPC9jYXB0aW9uPlxcbiAqIGxldCBhID0gdmVjKDMsIDIpOyAgLy8gKDMsIDIpXFxuICogbGV0IGIgPSB2ZWMoNCk7ICAgICAvLyAoNCwgNClcXG4gKiBsZXQgYyA9IHZlYyhhKTsgICAgIC8vICgzLCAyKVxcbiAqIGxldCBkID0gdmVjKCk7ICAgICAgLy8gKDAsIDApXFxuICovXFxuY29uc3QgdmVjID0gKHgsIHkpID0+ICgheCAmJiAheSA/XFxuICB7IHg6IDAsIHk6IDAgfSA6ICh0eXBlb2YgeCA9PT0gJ29iamVjdCcgP1xcbiAgICB7IHg6IHgueCB8fCAwLCB5OiB4LnkgfHwgMCB9IDogKHkgPT09IG51bGwgfHwgeSA9PT0gdW5kZWZpbmVkID9cXG4gICAgICB7IHg6IHgsIHk6IHggfSA6IHsgeDogeCwgeTogeSB9KVxcbiAgKVxcbik7XFxuXFxuLyoqXFxuICogR2V0IHRoZSBjb21wb25lbnRzIG9mIGEgdmVjdG9yIGFzIGFuIGFycmF5XFxuICogQHBhcmFtIHt2ZWN9IGEgVGhlIHZlY3RvciB0byBnZXQgY29tcG9uZW50cyBmcm9tXFxuICogQHJldHVybiB7QXJyYXk8bnVtYmVyPn0gVGhlIHZlY3RvciBjb21wb25lbnRzIGFzIGFuIGFycmF5XFxuICovXFxudmVjLmNvbXBvbmVudHMgPSBhID0+IFthLngsIGEueV07XFxuXFxuLyoqXFxuICogUmV0dXJuIGEgdW5pdCB2ZWN0b3IgKDEsIDApXFxuICogQHJldHVybiB7dmVjfSBBIHVuaXQgdmVjdG9yICgxLCAwKVxcbiAqL1xcbnZlYy51eCA9ICgpID0+IHZlYygxLCAwKTtcXG5cXG4vKipcXG4gKiBSZXR1cm4gYSB1bml0IHZlY3RvciAoMCwgMSlcXG4gKiBAcmV0dXJuIHt2ZWN9IEEgdW5pdCB2ZWN0b3IgKDAsIDEpXFxuICovXFxudmVjLnV5ID0gKCkgPT4gdmVjKDAsIDEpO1xcblxcbi8qKlxcbiAqIEFkZCB2ZWN0b3JzXFxuICogQHBhcmFtIHt2ZWN9IGEgVmVjdG9yIGFcXG4gKiBAcGFyYW0ge3ZlY30gYiBWZWN0b3IgYlxcbiAqIEByZXR1cm4ge3ZlY30gYSArIGJcXG4gKi9cXG52ZWMuYWRkID0gKGEsIGIpID0+ICh7IHg6IGEueCArIGIueCwgeTogYS55ICsgYi55IH0pO1xcblxcbi8qKlxcbiAqIFNjYWxlIGEgdmVjdG9yXFxuICogQHBhcmFtIHt2ZWN9IGEgVmVjdG9yIGFcXG4gKiBAcGFyYW0ge251bWJlcn0gYiBTY2FsYXIgYlxcbiAqIEByZXR1cm4ge3ZlY30gYSAqIGJcXG4gKi9cXG52ZWMubXVsID0gKGEsIGIpID0+ICh7IHg6IGEueCAqIGIsIHk6IGEueSAqIGIgfSk7XFxuXFxuLyoqXFxuICogU3VidHJhY3QgdmVjdG9yc1xcbiAqIEBwYXJhbSB7dmVjfSBhIFZlY3RvciBhXFxuICogQHBhcmFtIHt2ZWN9IGIgVmVjdG9yIGJcXG4gKiBAcmV0dXJuIHt2ZWN9IGEgLSBiXFxuICovXFxudmVjLnN1YiA9IChhLCBiKSA9PiAoeyB4OiBhLnggLSBiLngsIHk6IGEueSAtIGIueSB9KTtcXG5cXG4vKipcXG4gKiBHZXQgdGhlIGxlbmd0aCBvZiBhIHZlY3RvclxcbiAqIEBwYXJhbSB7dmVjfSBhIFZlY3RvciBhXFxuICogQHJldHVybiB7bnVtYmVyfSB8YXxcXG4gKi9cXG52ZWMubGVuID0gYSA9PiBNYXRoLnNxcnQoYS54ICogYS54ICsgYS55ICogYS55KTtcXG5cXG4vKipcXG4gKiBHZXQgdGhlIGxlbmd0aCBvZiBhIHZlY3RvciB1c2luZyB0YXhpY2FiIGdlb21ldHJ5XFxuICogQHBhcmFtIHt2ZWN9IGEgVmVjdG9yIGFcXG4gKiBAcmV0dXJuIHtudW1iZXJ9IHxhfFxcbiAqL1xcbnZlYy5tYW5oYXR0YW4gPSBhID0+IE1hdGguYWJzKGEueCkgKyBNYXRoLmFicyhhLnkpO1xcblxcbi8qKlxcbiAqIE5vcm1hbGlzZSBhIHZlY3RvclxcbiAqIEBwYXJhbSB7dmVjfSBhIFRoZSB2ZWN0b3IgdG8gbm9ybWFsaXNlXFxuICogQHJldHVybiB7dmVjfSBeYVxcbiAqL1xcbnZlYy5ub3IgPSBhID0+IHtcXG4gIGxldCBsZW4gPSB2ZWMubGVuKGEpO1xcbiAgcmV0dXJuIGxlbiA/IHsgeDogYS54IC8gbGVuLCB5OiBhLnkgLyBsZW4gfSA6IHZlYygpO1xcbn07XFxuXFxuLyoqXFxuICogR2V0IGEgZG90IHByb2R1Y3Qgb2YgdmVjdG9yc1xcbiAqIEBwYXJhbSB7dmVjfSBhIFZlY3RvciBhXFxuICogQHBhcmFtIHt2ZWN9IGIgVmVjdG9yIGJcXG4gKiBAcmV0dXJuIHtudW1iZXJ9IGEg4oiZIGJcXG4gKi9cXG52ZWMuZG90ID0gKGEsIGIpID0+IGEueCAqIGIueCArIGEueSAqIGIueTtcXG5cXG4vKipcXG4gKiBSb3RhdGUgYSB2ZWN0b3IgYnkgciByYWRpYW5zXFxuICogQHBhcmFtIHt2ZWN9IGEgVGhlIHZlY3RvciB0byByb3RhdGVcXG4gKiBAcGFyYW0ge251bWJlcn0gciBUaGUgYW5nbGUgdG8gcm90YXRlIGJ5LCBtZWFzdXJlZCBpbiByYWRpYW5zXFxuICogQHJldHVybiB7dmVjfSBBIHJvdGF0ZWQgdmVjdG9yXFxuICovXFxudmVjLnJvdCA9IChhLCByKSA9PiB7XFxuICBsZXQgcyA9IE1hdGguc2luKHIpLFxcbiAgICBjID0gTWF0aC5jb3Mocik7XFxuICByZXR1cm4geyB4OiBjICogYS54IC0gcyAqIGEueSwgeTogcyAqIGEueCArIGMgKiBhLnkgfTtcXG59XFxuXFxuLyoqXFxuICogQ2hlY2sgaWYgdHdvIHZlY3RvcnMgYXJlIGVxdWFsXFxuICogQHBhcmFtIHt2ZWN9IGEgVmVjdG9yIGFcXG4gKiBAcGFyYW0ge3ZlY30gYiBWZWN0b3IgYlxcbiAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgdmVjdG9ycyBhIGFuZCBiIGFyZSBlcXVhbCwgZmFsc2Ugb3RoZXJ3aXNlXFxuICovXFxudmVjLmVxID0gKGEsIGIpID0+IGEueCA9PT0gYi54ICYmIGEueSA9PT0gYi55O1xcblxcbi8qKlxcbiAqIEdldCB0aGUgYW5nbGUgb2YgYSB2ZWN0b3JcXG4gKiBAcGFyYW0ge3ZlY30gYSBWZWN0b3IgYVxcbiAqIEByZXR1cm4ge251bWJlcn0gVGhlIGFuZ2xlIG9mIHZlY3RvciBhIGluIHJhZGlhbnNcXG4gKi9cXG52ZWMucmFkID0gYSA9PiBNYXRoLmF0YW4yKGEueSwgYS54KTtcXG5cXG4vKipcXG4gKiBDb3B5IGEgdmVjdG9yXFxuICogQHBhcmFtIHt2ZWN9IGEgVGhlIHZlY3RvciB0byBjb3B5XFxuICogQHJldHVybiB7dmVjfSBBIGNvcHkgb2YgdmVjdG9yIGFcXG4gKi9cXG52ZWMuY3B5ID0gYSA9PiB2ZWMoYSk7XFxuXFxuLyoqXFxuICogQSBmdW5jdGlvbiB0byBjYWxsIG9uIGVhY2ggY29tcG9uZW50IG9mIGEgdmVjdG9yXFxuICogQGNhbGxiYWNrIHZlY3Rvck1hcENhbGxiYWNrXFxuICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlIFRoZSBjb21wb25lbnQgdmFsdWVcXG4gKiBAcGFyYW0geyd4JyB8ICd5J30gbGFiZWwgVGhlIGNvbXBvbmVudCBsYWJlbCAoeCBvciB5KVxcbiAqIEByZXR1cm4ge251bWJlcn0gVGhlIG1hcHBlZCBjb21wb25lbnRcXG4gKi9cXG5cXG4vKipcXG4gKiBDYWxsIGEgZnVuY3Rpb24gb24gZWFjaCBjb21wb25lbnQgb2YgYSB2ZWN0b3IgYW5kIGJ1aWxkIGEgbmV3IHZlY3RvciBmcm9tIHRoZSByZXN1bHRzXFxuICogQHBhcmFtIHt2ZWN9IGEgVmVjdG9yIGFcXG4gKiBAcGFyYW0ge3ZlY3Rvck1hcENhbGxiYWNrfSBmIFRoZSBmdW5jdGlvbiB0byBjYWxsIG9uIGVhY2ggY29tcG9uZW50IG9mIHRoZSB2ZWN0b3JcXG4gKiBAcmV0dXJuIHt2ZWN9IFZlY3RvciBhIG1hcHBlZCB0aHJvdWdoIGZcXG4gKi9cXG52ZWMubWFwID0gKGEsIGYpID0+ICh7IHg6IGYoYS54LCAneCcpLCB5OiBmKGEueSwgJ3knKSB9KTtcXG5cXG4vKipcXG4gKiBDb252ZXJ0IGEgdmVjdG9yIGludG8gYSBzdHJpbmdcXG4gKiBAcGFyYW0ge3ZlY30gYSBUaGUgdmVjdG9yIHRvIGNvbnZlcnRcXG4gKiBAcGFyYW0ge3N0cmluZ30gW3M9JywgJ10gVGhlIHNlcGFyYXRvciBzdHJpbmdcXG4gKiBAcmV0dXJuIHtzdHJpbmd9IEEgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSB2ZWN0b3JcXG4gKi9cXG52ZWMuc3RyID0gKGEsIHMgPSAnLCAnKSA9PiBgJHthLnh9JHtzfSR7YS55fWA7XFxuXFxuLyoqXFxuICogQSBtYXRyaXhcXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBtYXRcXG4gKiBAcHJvcGVydHkge251bWJlcn0gbSBUaGUgbnVtYmVyIG9mIHJvd3MgaW4gdGhlIG1hdHJpeFxcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBuIFRoZSBudW1iZXIgb2YgY29sdW1ucyBpbiB0aGUgbWF0cml4XFxuICogQHByb3BlcnR5IHtBcnJheTxudW1iZXI+fSBlbnRyaWVzIFRoZSBtYXRyaXggdmFsdWVzXFxuICovXFxuXFxuLyoqXFxuICogQ3JlYXRlIGEgbmV3IG1hdHJpeFxcbiAqIEBwYXJhbSB7bnVtYmVyfSBbbT00XSBUaGUgbnVtYmVyIG9mIHJvd3NcXG4gKiBAcGFyYW0ge251bWJlcn0gW249NF0gVGhlIG51bWJlciBvZiBjb2x1bW5zXFxuICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSBbZW50cmllcz1bXV0gTWF0cml4IHZhbHVlcyBpbiByZWFkaW5nIG9yZGVyXFxuICogQHJldHVybiB7bWF0fSBBIG5ldyBtYXRyaXhcXG4gKi9cXG5jb25zdCBtYXQgPSAobSA9IDQsIG4gPSA0LCBlbnRyaWVzID0gW10pID0+ICh7XFxuICBtLCBuLFxcbiAgZW50cmllczogZW50cmllcy5jb25jYXQoQXJyYXkobSAqIG4pLmZpbGwoMCkpLnNsaWNlKDAsIG0gKiBuKVxcbn0pO1xcblxcbi8qKlxcbiAqIEdldCBhbiBpZGVudGl0eSBtYXRyaXggb2Ygc2l6ZSBuXFxuICogQHBhcmFtIHtudW1iZXJ9IG4gVGhlIHNpemUgb2YgdGhlIG1hdHJpeFxcbiAqIEByZXR1cm4ge21hdH0gQW4gaWRlbnRpdHkgbWF0cml4XFxuICovXFxubWF0LmlkZW50aXR5ID0gbiA9PiBtYXQobiwgbiwgQXJyYXkobiAqIG4pLmZpbGwoMCkubWFwKCh2LCBpKSA9PiArKE1hdGguZmxvb3IoaSAvIG4pID09PSBpICUgbikpKTtcXG5cXG4vKipcXG4gKiBHZXQgYW4gZW50cnkgZnJvbSBhIG1hdHJpeFxcbiAqIEBwYXJhbSB7bWF0fSBhIE1hdHJpeCBhXFxuICogQHBhcmFtIHtudW1iZXJ9IGkgVGhlIHJvdyBvZmZzZXRcXG4gKiBAcGFyYW0ge251bWJlcn0gaiBUaGUgY29sdW1uIG9mZnNldFxcbiAqIEByZXR1cm4ge251bWJlcn0gVGhlIHZhbHVlIGF0IHBvc2l0aW9uIChpLCBqKSBpbiBtYXRyaXggYVxcbiAqL1xcbm1hdC5nZXQgPSAoYSwgaSwgaikgPT4gYS5lbnRyaWVzWyhqIC0gMSkgKyAoaSAtIDEpICogYS5uXTtcXG5cXG4vKipcXG4gKiBTZXQgYW4gZW50cnkgb2YgYSBtYXRyaXhcXG4gKiBAcGFyYW0ge21hdH0gYSBNYXRyaXggYVxcbiAqIEBwYXJhbSB7bnVtYmVyfSBpIFRoZSByb3cgb2Zmc2V0XFxuICogQHBhcmFtIHtudW1iZXJ9IGogVGhlIGNvbHVtbiBvZmZzZXRcXG4gKiBAcGFyYW0ge251bWJlcn0gdiBUaGUgdmFsdWUgdG8gc2V0IGluIG1hdHJpeCBhXFxuICovXFxubWF0LnNldCA9IChhLCBpLCBqLCB2KSA9PiB7IGEuZW50cmllc1soaiAtIDEpICsgKGkgLSAxKSAqIGEubl0gPSB2OyB9O1xcblxcbi8qKlxcbiAqIEdldCBhIHJvdyBmcm9tIGEgbWF0cml4IGFzIGFuIGFycmF5XFxuICogQHBhcmFtIHttYXR9IGEgTWF0cml4IGFcXG4gKiBAcGFyYW0ge251bWJlcn0gbSBUaGUgcm93IG9mZnNldFxcbiAqIEByZXR1cm4ge0FycmF5PG51bWJlcj59IFJvdyBtIGZyb20gbWF0cml4IGFcXG4gKi9cXG5tYXQucm93ID0gKGEsIG0pID0+IHtcXG4gIGNvbnN0IHMgPSAobSAtIDEpICogYS5uO1xcbiAgcmV0dXJuIGEuZW50cmllcy5zbGljZShzLCBzICsgYS5uKTtcXG59O1xcblxcbi8qKlxcbiAqIEdldCBhIGNvbHVtbiBmcm9tIGEgbWF0cml4IGFzIGFuIGFycmF5XFxuICogQHBhcmFtIHttYXR9IGEgTWF0cml4IGFcXG4gKiBAcGFyYW0ge251bWJlcn0gbiBUaGUgY29sdW1uIG9mZnNldFxcbiAqIEByZXR1cm4ge0FycmF5PG51bWJlcj59IENvbHVtbiBuIGZyb20gbWF0cml4IGFcXG4gKi9cXG5tYXQuY29sID0gKGEsIG4pID0+IHRpbWVzKGkgPT4gbWF0LmdldChhLCAoaSArIDEpLCBuKSwgYS5tKTtcXG5cXG4vKipcXG4gKiBBZGQgbWF0cmljZXNcXG4gKiBAcGFyYW0ge21hdH0gYSBNYXRyaXggYVxcbiAqIEBwYXJhbSB7bWF0fSBiIE1hdHJpeCBiXFxuICogQHJldHVybiB7bWF0fSBhICsgYlxcbiAqL1xcbm1hdC5hZGQgPSAoYSwgYikgPT4gYS5tID09PSBiLm0gJiYgYS5uID09PSBiLm4gJiYgbWF0Lm1hcChhLCAodiwgaSkgPT4gdiArIGIuZW50cmllc1tpXSk7XFxuXFxuLyoqXFxuICogU3VidHJhY3QgbWF0cmljZXNcXG4gKiBAcGFyYW0ge21hdH0gYSBNYXRyaXggYVxcbiAqIEBwYXJhbSB7bWF0fSBiIE1hdHJpeCBiXFxuICogQHJldHVybiB7bWF0fSBhIC0gYlxcbiAqL1xcbm1hdC5zdWIgPSAoYSwgYikgPT4gYS5tID09PSBiLm0gJiYgYS5uID09PSBiLm4gJiYgbWF0Lm1hcChhLCAodiwgaSkgPT4gdiAtIGIuZW50cmllc1tpXSk7XFxuXFxuLyoqXFxuICogTXVsdGlwbHkgbWF0cmljZXNcXG4gKiBAcGFyYW0ge21hdH0gYSBNYXRyaXggYVxcbiAqIEBwYXJhbSB7bWF0fSBiIE1hdHJpeCBiXFxuICogQHJldHVybiB7bWF0fGJvb2xlYW59IGFiIG9yIGZhbHNlIGlmIHRoZSBtYXRyaWNlcyBjYW5ub3QgYmUgbXVsdGlwbGllZFxcbiAqL1xcbm1hdC5tdWwgPSAoYSwgYikgPT4ge1xcbiAgaWYgKGEubiAhPT0gYi5tKSB7IHJldHVybiBmYWxzZTsgfVxcbiAgY29uc3QgcmVzdWx0ID0gbWF0KGEubSwgYi5uKTtcXG4gIGZvciAobGV0IGkgPSAxOyBpIDw9IGEubTsgaSsrKSB7XFxuICAgIGZvciAobGV0IGogPSAxOyBqIDw9IGIubjsgaisrKSB7XFxuICAgICAgbWF0LnNldChyZXN1bHQsIGksIGosIGRvdChtYXQucm93KGEsIGkpLCBtYXQuY29sKGIsIGopKSk7XFxuICAgIH1cXG4gIH1cXG4gIHJldHVybiByZXN1bHQ7XFxufTtcXG5cXG4vKipcXG4gKiBTY2FsZSBhIG1hdHJpeFxcbiAqIEBwYXJhbSB7bWF0fSBhIE1hdHJpeCBhXFxuICogQHBhcmFtIHtudW1iZXJ9IGIgU2NhbGFyIGJcXG4gKiBAcmV0dXJuIHttYXR9IGEgKiBiXFxuICovXFxubWF0LnNjYWxlID0gKGEsIGIpID0+IG1hdC5tYXAoYSwgdiA9PiB2ICogYik7XFxuXFxuLyoqXFxuICogVHJhbnNwb3NlIGEgbWF0cml4XFxuICogQHBhcmFtIHttYXR9IGEgVGhlIG1hdHJpeCB0byB0cmFuc3Bvc2VcXG4gKiBAcmV0dXJuIHttYXR9IEEgdHJhbnNwb3NlZCBtYXRyaXhcXG4gKi9cXG5tYXQudHJhbnMgPSBhID0+IG1hdChhLm4sIGEubSwgdGltZXMoaSA9PiBtYXQuY29sKGEsIChpICsgMSkpLCBhLm4pLmZsYXQoKSk7XFxuXFxuLyoqXFxuICogR2V0IHRoZSBtaW5vciBvZiBhIG1hdHJpeFxcbiAqIEBwYXJhbSB7bWF0fSBhIE1hdHJpeCBhXFxuICogQHBhcmFtIHtudW1iZXJ9IGkgVGhlIHJvdyBvZmZzZXRcXG4gKiBAcGFyYW0ge251bWJlcn0gaiBUaGUgY29sdW1uIG9mZnNldFxcbiAqIEByZXR1cm4ge21hdHxib29sZWFufSBUaGUgKGksIGopIG1pbm9yIG9mIG1hdHJpeCBhIG9yIGZhbHNlIGlmIHRoZSBtYXRyaXggaXMgbm90IHNxdWFyZVxcbiAqL1xcbm1hdC5taW5vciA9IChhLCBpLCBqKSA9PiB7XFxuICBpZiAoYS5tICE9PSBhLm4pIHsgcmV0dXJuIGZhbHNlOyB9XFxuICBjb25zdCBlbnRyaWVzID0gW107XFxuICBmb3IgKGxldCBpaSA9IDE7IGlpIDw9IGEubTsgaWkrKykge1xcbiAgICBpZiAoaWkgPT09IGkpIHsgY29udGludWU7IH1cXG4gICAgZm9yIChsZXQgamogPSAxOyBqaiA8PSBhLm47IGpqKyspIHtcXG4gICAgICBpZiAoamogPT09IGopIHsgY29udGludWU7IH1cXG4gICAgICBlbnRyaWVzLnB1c2gobWF0LmdldChhLCBpaSwgamopKTtcXG4gICAgfVxcbiAgfVxcbiAgcmV0dXJuIG1hdChhLm0gLSAxLCBhLm4gLSAxLCBlbnRyaWVzKTtcXG59O1xcblxcbi8qKlxcbiAqIEdldCB0aGUgZGV0ZXJtaW5hbnQgb2YgYSBtYXRyaXhcXG4gKiBAcGFyYW0ge21hdH0gYSBNYXRyaXggYVxcbiAqIEByZXR1cm4ge251bWJlcnxib29sZWFufSB8YXwgb3IgZmFsc2UgaWYgdGhlIG1hdHJpeCBpcyBub3Qgc3F1YXJlXFxuICovXFxubWF0LmRldCA9IGEgPT4ge1xcbiAgaWYgKGEubSAhPT0gYS5uKSB7IHJldHVybiBmYWxzZTsgfVxcbiAgaWYgKGEubSA9PT0gMSkge1xcbiAgICByZXR1cm4gYS5lbnRyaWVzWzBdO1xcbiAgfVxcbiAgaWYgKGEubSA9PT0gMikge1xcbiAgICByZXR1cm4gYS5lbnRyaWVzWzBdICogYS5lbnRyaWVzWzNdIC0gYS5lbnRyaWVzWzFdICogYS5lbnRyaWVzWzJdO1xcbiAgfVxcbiAgbGV0IHRvdGFsID0gMCwgc2lnbiA9IDE7XFxuICBmb3IgKGxldCBqID0gMTsgaiA8PSBhLm47IGorKykge1xcbiAgICB0b3RhbCArPSBzaWduICogYS5lbnRyaWVzW2ogLSAxXSAqIG1hdC5kZXQobWF0Lm1pbm9yKGEsIDEsIGopKTtcXG4gICAgc2lnbiAqPSAtMTtcXG4gIH1cXG4gIHJldHVybiB0b3RhbDtcXG59O1xcblxcbi8qKlxcbiAqIE5vcm1hbGlzZSBhIG1hdHJpeFxcbiAqIEBwYXJhbSB7bWF0fSBhIFRoZSBtYXRyaXggdG8gbm9ybWFsaXNlXFxuICogQHJldHVybiB7bWF0fGJvb2xlYW59IF5hIG9yIGZhbHNlIGlmIHRoZSBtYXRyaXggaXMgbm90IHNxdWFyZVxcbiAqL1xcbm1hdC5ub3IgPSBhID0+IHtcXG4gIGlmIChhLm0gIT09IGEubikgeyByZXR1cm4gZmFsc2U7IH1cXG4gIGNvbnN0IGQgPSBtYXQuZGV0KGEpO1xcbiAgcmV0dXJuIG1hdC5tYXAoYSwgaSA9PiBpICogZCk7XFxufTtcXG5cXG4vKipcXG4gKiBHZXQgdGhlIGFkanVnYXRlIG9mIGEgbWF0cml4XFxuICogQHBhcmFtIHttYXR9IGEgVGhlIG1hdHJpeCBmcm9tIHdoaWNoIHRvIGdldCB0aGUgYWRqdWdhdGVcXG4gKiBAcmV0dXJuIHttYXR9IFRoZSBhZGp1Z2F0ZSBvZiBhXFxuICovXFxubWF0LmFkaiA9IGEgPT4ge1xcbiAgY29uc3QgbWlub3JzID0gbWF0KGEubSwgYS5uKTtcXG4gIGZvciAobGV0IGkgPSAxOyBpIDw9IGEubTsgaSsrKSB7XFxuICAgIGZvciAobGV0IGogPSAxOyBqIDw9IGEubjsgaisrKSB7XFxuICAgICAgbWF0LnNldChtaW5vcnMsIGksIGosIG1hdC5kZXQobWF0Lm1pbm9yKGEsIGksIGopKSk7XFxuICAgIH1cXG4gIH1cXG4gIGNvbnN0IGNvZmFjdG9ycyA9IG1hdC5tYXAobWlub3JzLCAodiwgaSkgPT4gdiAqIChpICUgMiA/IC0xIDogMSkpO1xcbiAgcmV0dXJuIG1hdC50cmFucyhjb2ZhY3RvcnMpO1xcbn07XFxuXFxuLyoqXFxuICogR2V0IHRoZSBpbnZlcnNlIG9mIGEgbWF0cml4XFxuICogQHBhcmFtIHttYXR9IGEgVGhlIG1hdHJpeCB0byBpbnZlcnRcXG4gKiBAcmV0dXJuIHttYXR8Ym9vbGVhbn0gYV4tMSBvciBmYWxzZSBpZiB0aGUgbWF0cml4IGhhcyBubyBpbnZlcnNlXFxuICovXFxubWF0LmludiA9IGEgPT4ge1xcbiAgaWYgKGEubSAhPT0gYS5uKSB7IHJldHVybiBmYWxzZTsgfVxcbiAgY29uc3QgZCA9IG1hdC5kZXQoYSk7XFxuICBpZiAoZCA9PT0gMCkgeyByZXR1cm4gZmFsc2U7IH1cXG4gIHJldHVybiBtYXQuc2NhbGUobWF0LmFkaihhKSwgMSAvIGQpO1xcbn07XFxuXFxuLyoqXFxuICogQ2hlY2sgaWYgdHdvIG1hdHJpY2VzIGFyZSBlcXVhbFxcbiAqIEBwYXJhbSB7bWF0fSBhIE1hdHJpeCBhXFxuICogQHBhcmFtIHttYXR9IGIgTWF0cml4IGJcXG4gKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIG1hdHJpY2VzIGEgYW5kIGIgYXJlIGlkZW50aWNhbCwgZmFsc2Ugb3RoZXJ3aXNlXFxuICovXFxubWF0LmVxID0gKGEsIGIpID0+IGEubSA9PT0gYi5tICYmIGEubiA9PT0gYi5uICYmIG1hdC5zdHIoYSkgPT09IG1hdC5zdHIoYik7XFxuXFxuLyoqXFxuICogQ29weSBhIG1hdHJpeFxcbiAqIEBwYXJhbSB7bWF0fSBhIFRoZSBtYXRyaXggdG8gY29weVxcbiAqIEByZXR1cm4ge21hdH0gQSBjb3B5IG9mIG1hdHJpeCBhXFxuICovXFxubWF0LmNweSA9IGEgPT4gbWF0KGEubSwgYS5uLCBbLi4uYS5lbnRyaWVzXSk7XFxuXFxuLyoqXFxuICogQSBmdW5jdGlvbiB0byBjYWxsIG9uIGVhY2ggZW50cnkgb2YgYSBtYXRyaXhcXG4gKiBAY2FsbGJhY2sgbWF0cml4TWFwQ2FsbGJhY2tcXG4gKiBAcGFyYW0ge251bWJlcn0gdmFsdWUgVGhlIGVudHJ5IHZhbHVlXFxuICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IFRoZSBlbnRyeSBpbmRleFxcbiAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0gZW50cmllcyBUaGUgYXJyYXkgb2YgbWF0cml4IGVudHJpZXNcXG4gKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBtYXBwZWQgZW50cnlcXG4gKi9cXG5cXG4vKipcXG4gKiBDYWxsIGEgZnVuY3Rpb24gb24gZWFjaCBlbnRyeSBvZiBhIG1hdHJpeCBhbmQgYnVpbGQgYSBuZXcgbWF0cml4IGZyb20gdGhlIHJlc3VsdHNcXG4gKiBAcGFyYW0ge21hdH0gYSBNYXRyaXggYVxcbiAqIEBwYXJhbSB7bWF0cml4TWFwQ2FsbGJhY2t9IGYgVGhlIGZ1bmN0aW9uIHRvIGNhbGwgb24gZWFjaCBlbnRyeSBvZiB0aGUgbWF0cml4XFxuICogQHJldHVybiB7bWF0fSBNYXRyaXggYSBtYXBwZWQgdGhyb3VnaCBmXFxuICovXFxubWF0Lm1hcCA9IChhLCBmKSA9PiBtYXQoYS5tLCBhLm4sIGEuZW50cmllcy5tYXAoZikpO1xcblxcbi8qKlxcbiAqIENvbnZlcnQgYSBtYXRyaXggaW50byBhIHN0cmluZ1xcbiAqIEBwYXJhbSB7bWF0fSBhIFRoZSBtYXRyaXggdG8gY29udmVydFxcbiAqIEBwYXJhbSB7c3RyaW5nfSBbbXM9JywgJ10gVGhlIHNlcGFyYXRvciBzdHJpbmcgZm9yIGNvbHVtbnNcXG4gKiBAcGFyYW0ge3N0cmluZ30gW25zPSdcXFxcbiddIFRoZSBzZXBhcmF0b3Igc3RyaW5nIGZvciByb3dzXFxuICogQHJldHVybiB7c3RyaW5nfSBBIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgbWF0cml4XFxuICovXFxubWF0LnN0ciA9IChhLCBtcyA9ICcsICcsIG5zID0gJ1xcXFxuJykgPT4gY2h1bmsoYS5lbnRyaWVzLCBhLm4pLm1hcChyID0+IHIuam9pbihtcykpLmpvaW4obnMpO1xcblxcbmlmICh0cnVlKSB7XFxuICBtb2R1bGUuZXhwb3J0cyA9IHsgdmVjLCBtYXQgfTtcXG59XFxuXFxuXFxuLy8jIHNvdXJjZVVSTD13ZWJwYWNrOi8vQGJhc2VtZW50dW5pdmVyc2UvaW5wdXQtbWFuYWdlci8uL25vZGVfbW9kdWxlcy9AYmFzZW1lbnR1bml2ZXJzZS92ZWMvdmVjLmpzP1wiKTtcblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9pbmRleC50c1wiOlxuLyohKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vaW5kZXgudHMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKi9cbi8qKiovICgoX191bnVzZWRfd2VicGFja19tb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pID0+IHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5ldmFsKFwiXFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFxcXCJfX2VzTW9kdWxlXFxcIiwgKHsgdmFsdWU6IHRydWUgfSkpO1xcbmNvbnN0IHZlY18xID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgQGJhc2VtZW50dW5pdmVyc2UvdmVjICovIFxcXCIuL25vZGVfbW9kdWxlcy9AYmFzZW1lbnR1bml2ZXJzZS92ZWMvdmVjLmpzXFxcIik7XFxuY2xhc3MgSW5wdXRNYW5hZ2VyIHtcXG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xcbiAgICAgICAgdGhpcy5rZXlib2FyZFN0YXRlID0ge307XFxuICAgICAgICB0aGlzLnByZXZpb3VzS2V5Ym9hcmRTdGF0ZSA9IHt9O1xcbiAgICAgICAgdGhpcy5tb3VzZVN0YXRlID0geyBidXR0b246IGZhbHNlLCBwb3NpdGlvbjogKDAsIHZlY18xLnZlYykoKSwgd2hlZWw6IDAgfTtcXG4gICAgICAgIHRoaXMucHJldmlvdXNNb3VzZVN0YXRlID0geyBidXR0b246IGZhbHNlLCBwb3NpdGlvbjogKDAsIHZlY18xLnZlYykoKSwgd2hlZWw6IDAgfTtcXG4gICAgICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIElucHV0TWFuYWdlci5kZWZhdWx0T3B0aW9ucywgb3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgPyBvcHRpb25zIDoge30pO1xcbiAgICAgICAgLy8gU2V0IHVwIGV2ZW50IGhhbmRsZXJzXFxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLm1vdXNlKSB7XFxuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsICgpID0+IHtcXG4gICAgICAgICAgICAgICAgdGhpcy5tb3VzZVN0YXRlLmJ1dHRvbiA9IHRydWU7XFxuICAgICAgICAgICAgfSk7XFxuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCAoKSA9PiB7XFxuICAgICAgICAgICAgICAgIHRoaXMubW91c2VTdGF0ZS5idXR0b24gPSBmYWxzZTtcXG4gICAgICAgICAgICB9KTtcXG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsICgpID0+IHtcXG4gICAgICAgICAgICAgICAgdGhpcy5tb3VzZVN0YXRlLmJ1dHRvbiA9IHRydWU7XFxuICAgICAgICAgICAgfSk7XFxuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgKCkgPT4ge1xcbiAgICAgICAgICAgICAgICB0aGlzLm1vdXNlU3RhdGUuYnV0dG9uID0gZmFsc2U7XFxuICAgICAgICAgICAgfSk7XFxuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGUgPT4ge1xcbiAgICAgICAgICAgICAgICB0aGlzLm1vdXNlU3RhdGUucG9zaXRpb24ueCA9IGUub2Zmc2V0WDtcXG4gICAgICAgICAgICAgICAgdGhpcy5tb3VzZVN0YXRlLnBvc2l0aW9uLnkgPSBlLm9mZnNldFk7XFxuICAgICAgICAgICAgfSk7XFxuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5tb3VzZVdoZWVsKSB7XFxuICAgICAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd3aGVlbCcsIGUgPT4ge1xcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3VzZVN0YXRlLndoZWVsID0gZS5kZWx0YVkgPiAwID8gMSA6IC0xO1xcbiAgICAgICAgICAgICAgICB9KTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmtleWJvYXJkKSB7XFxuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBlID0+IHtcXG4gICAgICAgICAgICAgICAgdGhpcy5rZXlib2FyZFN0YXRlW2UuY29kZV0gPSB0cnVlO1xcbiAgICAgICAgICAgIH0pO1xcbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGUgPT4ge1xcbiAgICAgICAgICAgICAgICB0aGlzLmtleWJvYXJkU3RhdGVbZS5jb2RlXSA9IGZhbHNlO1xcbiAgICAgICAgICAgIH0pO1xcbiAgICAgICAgfVxcbiAgICB9XFxuICAgIC8qKlxcbiAgICAgKiBJbml0aWFsaXNlIHRoZSBpbnB1dCBtYW5hZ2VyIGZvciBtYW5hZ2luZyBtb3VzZSBhbmQga2V5Ym9hcmQgaW5wdXRcXG4gICAgICovXFxuICAgIHN0YXRpYyBpbml0aWFsaXNlKG9wdGlvbnMpIHtcXG4gICAgICAgIGlmIChJbnB1dE1hbmFnZXIuaW5zdGFuY2UgIT09IHVuZGVmaW5lZCkge1xcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW5wdXQgbWFuYWdlciBhbHJlYWR5IGluaXRpYWxpc2VkJyk7XFxuICAgICAgICB9XFxuICAgICAgICBJbnB1dE1hbmFnZXIuaW5zdGFuY2UgPSBuZXcgSW5wdXRNYW5hZ2VyKG9wdGlvbnMpO1xcbiAgICB9XFxuICAgIHN0YXRpYyBnZXRJbnN0YW5jZSgpIHtcXG4gICAgICAgIGlmIChJbnB1dE1hbmFnZXIuaW5zdGFuY2UgPT09IHVuZGVmaW5lZCkge1xcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW5wdXQgbWFuYWdlciBub3QgcHJvcGVybHkgaW5pdGlhbGlzZWQnKTtcXG4gICAgICAgIH1cXG4gICAgICAgIHJldHVybiBJbnB1dE1hbmFnZXIuaW5zdGFuY2U7XFxuICAgIH1cXG4gICAgLyoqXFxuICAgICAqIFVwZGF0ZSB0aGUgc3RhdGUgb2YgdGhlIGlucHV0IGRldmljZXNcXG4gICAgICovXFxuICAgIHN0YXRpYyB1cGRhdGUoKSB7XFxuICAgICAgICBjb25zdCBpbnN0YW5jZSA9IElucHV0TWFuYWdlci5nZXRJbnN0YW5jZSgpO1xcbiAgICAgICAgaW5zdGFuY2UucHJldmlvdXNLZXlib2FyZFN0YXRlID0gT2JqZWN0LmFzc2lnbih7fSwgaW5zdGFuY2Uua2V5Ym9hcmRTdGF0ZSk7XFxuICAgICAgICBpbnN0YW5jZS5wcmV2aW91c01vdXNlU3RhdGUgPSB7XFxuICAgICAgICAgICAgLi4uaW5zdGFuY2UubW91c2VTdGF0ZSxcXG4gICAgICAgICAgICBwb3NpdGlvbjogdmVjXzEudmVjLmNweShpbnN0YW5jZS5tb3VzZVN0YXRlLnBvc2l0aW9uKSxcXG4gICAgICAgIH07XFxuICAgICAgICBpbnN0YW5jZS5tb3VzZVN0YXRlLndoZWVsID0gMDtcXG4gICAgfVxcbiAgICAvKipcXG4gICAgICogQ2hlY2sgaWYgYSBrZXkgaXMgY3VycmVudGx5IHByZXNzZWQgZG93blxcbiAgICAgKi9cXG4gICAgc3RhdGljIGtleURvd24oY29kZSkge1xcbiAgICAgICAgY29uc3QgaW5zdGFuY2UgPSBJbnB1dE1hbmFnZXIuZ2V0SW5zdGFuY2UoKTtcXG4gICAgICAgIC8vIENoZWNrIGlmIGFueSBrZXkgaXMgZG93blxcbiAgICAgICAgaWYgKCFjb2RlKSB7XFxuICAgICAgICAgICAgZm9yIChjb25zdCBrIGluIGluc3RhbmNlLmtleWJvYXJkU3RhdGUpIHtcXG4gICAgICAgICAgICAgICAgaWYgKGluc3RhbmNlLmtleWJvYXJkU3RhdGVba10pIHtcXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcXG4gICAgICAgIH1cXG4gICAgICAgIHJldHVybiAhIWluc3RhbmNlLmtleWJvYXJkU3RhdGVbY29kZV07XFxuICAgIH1cXG4gICAgLyoqXFxuICAgICAqIENoZWNrIGlmIGEga2V5IGhhcyBiZWVuIHByZXNzZWQgc2luY2UgdGhlIGxhc3QgZnJhbWVcXG4gICAgICovXFxuICAgIHN0YXRpYyBrZXlQcmVzc2VkKGNvZGUpIHtcXG4gICAgICAgIGNvbnN0IGluc3RhbmNlID0gSW5wdXRNYW5hZ2VyLmdldEluc3RhbmNlKCk7XFxuICAgICAgICAvLyBDaGVjayBpZiBhbnkga2V5IHdhcyBwcmVzc2VkXFxuICAgICAgICBpZiAoIWNvZGUpIHtcXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGsgaW4gaW5zdGFuY2Uua2V5Ym9hcmRTdGF0ZSkge1xcbiAgICAgICAgICAgICAgICBpZiAoaW5zdGFuY2Uua2V5Ym9hcmRTdGF0ZVtrXSAmJlxcbiAgICAgICAgICAgICAgICAgICAgKCEoayBpbiBpbnN0YW5jZS5wcmV2aW91c0tleWJvYXJkU3RhdGUpIHx8XFxuICAgICAgICAgICAgICAgICAgICAgICAgIWluc3RhbmNlLnByZXZpb3VzS2V5Ym9hcmRTdGF0ZVtrXSkpIHtcXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcXG4gICAgICAgIH1cXG4gICAgICAgIHJldHVybiAhIWluc3RhbmNlLmtleWJvYXJkU3RhdGVbY29kZV0gJiYgIWluc3RhbmNlLnByZXZpb3VzS2V5Ym9hcmRTdGF0ZVtjb2RlXTtcXG4gICAgfVxcbiAgICAvKipcXG4gICAgICogQ2hlY2sgaWYgYSBrZXkgaGFzIGJlZW4gcmVsZWFzZWQgc2luY2UgdGhlIGxhc3QgZnJhbWVcXG4gICAgICovXFxuICAgIHN0YXRpYyBrZXlSZWxlYXNlZChjb2RlKSB7XFxuICAgICAgICBjb25zdCBpbnN0YW5jZSA9IElucHV0TWFuYWdlci5nZXRJbnN0YW5jZSgpO1xcbiAgICAgICAgLy8gQ2hlY2sgaWYgYW55IGtleSB3YXMgcmVsZWFzZWRcXG4gICAgICAgIGlmICghY29kZSkge1xcbiAgICAgICAgICAgIGZvciAoY29uc3QgayBpbiBpbnN0YW5jZS5rZXlib2FyZFN0YXRlKSB7XFxuICAgICAgICAgICAgICAgIGlmICghaW5zdGFuY2Uua2V5Ym9hcmRTdGF0ZVtrXSAmJlxcbiAgICAgICAgICAgICAgICAgICAgISFpbnN0YW5jZS5wcmV2aW91c0tleWJvYXJkU3RhdGVba10pIHtcXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcXG4gICAgICAgIH1cXG4gICAgICAgIHJldHVybiAhaW5zdGFuY2Uua2V5Ym9hcmRTdGF0ZVtjb2RlXSAmJiAhIWluc3RhbmNlLnByZXZpb3VzS2V5Ym9hcmRTdGF0ZVtjb2RlXTtcXG4gICAgfVxcbiAgICAvKipcXG4gICAgICogQ2hlY2sgaWYgYSBtb3VzZSBidXR0b24gaXMgY3VycmVudGx5IHByZXNzZWQgZG93blxcbiAgICAgKi9cXG4gICAgc3RhdGljIG1vdXNlRG93bigpIHtcXG4gICAgICAgIGNvbnN0IGluc3RhbmNlID0gSW5wdXRNYW5hZ2VyLmdldEluc3RhbmNlKCk7XFxuICAgICAgICByZXR1cm4gISFpbnN0YW5jZS5tb3VzZVN0YXRlLmJ1dHRvbjtcXG4gICAgfVxcbiAgICAvKipcXG4gICAgICogQ2hlY2sgaWYgYSBtb3VzZSBidXR0b24gaGFzIGJlZW4gcHJlc3NlZCBzaW5jZSB0aGUgbGFzdCBmcmFtZVxcbiAgICAgKi9cXG4gICAgc3RhdGljIG1vdXNlUHJlc3NlZCgpIHtcXG4gICAgICAgIGNvbnN0IGluc3RhbmNlID0gSW5wdXRNYW5hZ2VyLmdldEluc3RhbmNlKCk7XFxuICAgICAgICByZXR1cm4gISFpbnN0YW5jZS5tb3VzZVN0YXRlLmJ1dHRvbiAmJiAhaW5zdGFuY2UucHJldmlvdXNNb3VzZVN0YXRlLmJ1dHRvbjtcXG4gICAgfVxcbiAgICAvKipcXG4gICAgICogQ2hlY2sgaWYgYSBtb3VzZSBidXR0b24gaGFzIGJlZW4gcmVsZWFzZWQgc2luY2UgdGhlIGxhc3QgZnJhbWVcXG4gICAgICovXFxuICAgIHN0YXRpYyBtb3VzZVJlbGVhc2VkKCkge1xcbiAgICAgICAgY29uc3QgaW5zdGFuY2UgPSBJbnB1dE1hbmFnZXIuZ2V0SW5zdGFuY2UoKTtcXG4gICAgICAgIHJldHVybiAhaW5zdGFuY2UubW91c2VTdGF0ZS5idXR0b24gJiYgISFpbnN0YW5jZS5wcmV2aW91c01vdXNlU3RhdGUuYnV0dG9uO1xcbiAgICB9XFxuICAgIC8qKlxcbiAgICAgKiBDaGVjayBpZiB0aGUgbW91c2V3aGVlbCBpcyBzY3JvbGxpbmcgdXBcXG4gICAgICovXFxuICAgIHN0YXRpYyBtb3VzZVdoZWVsVXAoKSB7XFxuICAgICAgICBjb25zdCBpbnN0YW5jZSA9IElucHV0TWFuYWdlci5nZXRJbnN0YW5jZSgpO1xcbiAgICAgICAgcmV0dXJuIGluc3RhbmNlLm1vdXNlU3RhdGUud2hlZWwgPiAwO1xcbiAgICB9XFxuICAgIC8qKlxcbiAgICAgKiBDaGVjayBpZiB0aGUgbW91c2V3aGVlbCBpcyBzY3JvbGxpbmcgZG93blxcbiAgICAgKi9cXG4gICAgc3RhdGljIG1vdXNlV2hlZWxEb3duKCkge1xcbiAgICAgICAgY29uc3QgaW5zdGFuY2UgPSBJbnB1dE1hbmFnZXIuZ2V0SW5zdGFuY2UoKTtcXG4gICAgICAgIHJldHVybiBpbnN0YW5jZS5tb3VzZVN0YXRlLndoZWVsIDwgMDtcXG4gICAgfVxcbiAgICAvKipcXG4gICAgICogR2V0IHRoZSBjdXJyZW50IG1vdXNlIHBvc2l0aW9uIGluIHNjcmVlbi1zcGFjZVxcbiAgICAgKi9cXG4gICAgc3RhdGljIGdldCBtb3VzZVBvc2l0aW9uKCkge1xcbiAgICAgICAgY29uc3QgaW5zdGFuY2UgPSBJbnB1dE1hbmFnZXIuZ2V0SW5zdGFuY2UoKTtcXG4gICAgICAgIHJldHVybiBpbnN0YW5jZS5tb3VzZVN0YXRlLnBvc2l0aW9uO1xcbiAgICB9XFxufVxcbmV4cG9ydHNbXFxcImRlZmF1bHRcXFwiXSA9IElucHV0TWFuYWdlcjtcXG5JbnB1dE1hbmFnZXIuZGVmYXVsdE9wdGlvbnMgPSB7XFxuICAgIG1vdXNlOiB0cnVlLFxcbiAgICBtb3VzZVdoZWVsOiB0cnVlLFxcbiAgICBrZXlib2FyZDogdHJ1ZSxcXG59O1xcblxcblxcbi8vIyBzb3VyY2VVUkw9d2VicGFjazovL0BiYXNlbWVudHVuaXZlcnNlL2lucHV0LW1hbmFnZXIvLi9pbmRleC50cz9cIik7XG5cbi8qKiovIH0pXG5cbi8qKioqKiovIFx0fSk7XG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKi8gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdHZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcbi8qKioqKiovIFx0XG4vKioqKioqLyBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4vKioqKioqLyBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcbi8qKioqKiovIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbi8qKioqKiovIFx0XHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcbi8qKioqKiovIFx0XHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcbi8qKioqKiovIFx0XHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbi8qKioqKiovIFx0XHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcbi8qKioqKiovIFx0XHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcbi8qKioqKiovIFx0XHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG4vKioqKioqLyBcdFx0XHRleHBvcnRzOiB7fVxuLyoqKioqKi8gXHRcdH07XG4vKioqKioqLyBcdFxuLyoqKioqKi8gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuLyoqKioqKi8gXHRcdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuLyoqKioqKi8gXHRcbi8qKioqKiovIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuLyoqKioqKi8gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbi8qKioqKiovIFx0fVxuLyoqKioqKi8gXHRcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqLyBcdFxuLyoqKioqKi8gXHQvLyBzdGFydHVwXG4vKioqKioqLyBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLyoqKioqKi8gXHQvLyBUaGlzIGVudHJ5IG1vZHVsZSBjYW4ndCBiZSBpbmxpbmVkIGJlY2F1c2UgdGhlIGV2YWwgZGV2dG9vbCBpcyB1c2VkLlxuLyoqKioqKi8gXHR2YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL2luZGV4LnRzXCIpO1xuLyoqKioqKi8gXHRcbi8qKioqKiovIFx0cmV0dXJuIF9fd2VicGFja19leHBvcnRzX187XG4vKioqKioqLyB9KSgpXG47XG59KTsiLCIvKlxyXG5cclxuUGFyc2UgYSB2YWxpZCBDU1MgY29sb3Igc3RyaW5nIGludG8gYW4gb2JqZWN0IGxpa2U6IHsgciwgZywgYiwgYSB9XHJcblByb3BlcnRpZXMgd2lsbCBoYXZlIHRoZSBjb3JyZWN0IGludGVydmFsIGFuZCBwcmVjaXNpb24uXHJcblZhbGlkIGlucHV0IGV4YW1wbGVzOlxyXG5cclxucmVkXHJcbiNmMDBcclxuI2ZmMDAwMFxyXG4jZmYwMDAwZmZcclxucmdiKDI1NSwgMCwgMClcclxucmdiKDEwMCUsIDAlLCAwJSlcclxucmdiYSgyNTUsIDAsIDAsIDEpXHJcbnJnYmEoMTAwJSwgMCUsIDAlLCAxKVxyXG5oc2woMCwgMTAwJSwgNTAlKVxyXG5oc2xhKDAsIDEwMCUsIDUwJSwgMSlcclxuXHJcbiovXHJcbmNvbnN0IHBhcnNlQ29sb3IgPSAoZnVuY3Rpb24oKSB7XHJcblx0Y29uc3QgbmFtZXMgPSB7XHJcblx0XHRcImFsaWNlYmx1ZVwiOiBcImYwZjhmZlwiLFxyXG5cdFx0XCJhbnRpcXVld2hpdGVcIjogXCJmYWViZDdcIixcclxuXHRcdFwiYXF1YVwiOiBcIjBmZlwiLFxyXG5cdFx0XCJhcXVhbWFyaW5lXCI6IFwiN2ZmZmQ0XCIsXHJcblx0XHRcImF6dXJlXCI6IFwiZjBmZmZmXCIsXHJcblx0XHRcImJlaWdlXCI6IFwiZjVmNWRjXCIsXHJcblx0XHRcImJpc3F1ZVwiOiBcImZmZTRjNFwiLFxyXG5cdFx0XCJibGFja1wiOiBcIjAwMFwiLFxyXG5cdFx0XCJibGFuY2hlZGFsbW9uZFwiOiBcImZmZWJjZFwiLFxyXG5cdFx0XCJibHVlXCI6IFwiMDBmXCIsXHJcblx0XHRcImJsdWV2aW9sZXRcIjogXCI4YTJiZTJcIixcclxuXHRcdFwiYnJvd25cIjogXCJhNTJhMmFcIixcclxuXHRcdFwiYnVybHl3b29kXCI6IFwiZGViODg3XCIsXHJcblx0XHRcImNhZGV0Ymx1ZVwiOiBcIjVmOWVhMFwiLFxyXG5cdFx0XCJjaGFydHJldXNlXCI6IFwiN2ZmZjAwXCIsXHJcblx0XHRcImNob2NvbGF0ZVwiOiBcImQyNjkxZVwiLFxyXG5cdFx0XCJjb3JhbFwiOiBcImZmN2Y1MFwiLFxyXG5cdFx0XCJjb3JuZmxvd2VyYmx1ZVwiOiBcIjY0OTVlZFwiLFxyXG5cdFx0XCJjb3Juc2lsa1wiOiBcImZmZjhkY1wiLFxyXG5cdFx0XCJjcmltc29uXCI6IFwiZGMxNDNjXCIsXHJcblx0XHRcImN5YW5cIjogXCIwZmZcIixcclxuXHRcdFwiZGFya2JsdWVcIjogXCIwMDAwOGJcIixcclxuXHRcdFwiZGFya2N5YW5cIjogXCIwMDhiOGJcIixcclxuXHRcdFwiZGFya2dvbGRlbnJvZFwiOiBcImI4ODYwYlwiLFxyXG5cdFx0XCJkYXJrZ3JheVwiOiBcImE5YTlhOVwiLFxyXG5cdFx0XCJkYXJrZ3JlZW5cIjogXCIwMDY0MDBcIixcclxuXHRcdFwiZGFya2dyZXlcIjogXCJhOWE5YTlcIixcclxuXHRcdFwiZGFya2toYWtpXCI6IFwiYmRiNzZiXCIsXHJcblx0XHRcImRhcmttYWdlbnRhXCI6IFwiOGIwMDhiXCIsXHJcblx0XHRcImRhcmtvbGl2ZWdyZWVuXCI6IFwiNTU2YjJmXCIsXHJcblx0XHRcImRhcmtvcmFuZ2VcIjogXCJmZjhjMDBcIixcclxuXHRcdFwiZGFya29yY2hpZFwiOiBcIjk5MzJjY1wiLFxyXG5cdFx0XCJkYXJrcmVkXCI6IFwiOGIwMDAwXCIsXHJcblx0XHRcImRhcmtzYWxtb25cIjogXCJlOTk2N2FcIixcclxuXHRcdFwiZGFya3NlYWdyZWVuXCI6IFwiOGZiYzhmXCIsXHJcblx0XHRcImRhcmtzbGF0ZWJsdWVcIjogXCI0ODNkOGJcIixcclxuXHRcdFwiZGFya3NsYXRlZ3JheVwiOiBcIjJmNGY0ZlwiLFxyXG5cdFx0XCJkYXJrc2xhdGVncmV5XCI6IFwiMmY0ZjRmXCIsXHJcblx0XHRcImRhcmt0dXJxdW9pc2VcIjogXCIwMGNlZDFcIixcclxuXHRcdFwiZGFya3Zpb2xldFwiOiBcIjk0MDBkM1wiLFxyXG5cdFx0XCJkZWVwcGlua1wiOiBcImZmMTQ5M1wiLFxyXG5cdFx0XCJkZWVwc2t5Ymx1ZVwiOiBcIjAwYmZmZlwiLFxyXG5cdFx0XCJkaW1ncmF5XCI6IFwiNjk2OTY5XCIsXHJcblx0XHRcImRpbWdyZXlcIjogXCI2OTY5NjlcIixcclxuXHRcdFwiZG9kZ2VyYmx1ZVwiOiBcIjFlOTBmZlwiLFxyXG5cdFx0XCJmaXJlYnJpY2tcIjogXCJiMjIyMjJcIixcclxuXHRcdFwiZmxvcmFsd2hpdGVcIjogXCJmZmZhZjBcIixcclxuXHRcdFwiZm9yZXN0Z3JlZW5cIjogXCIyMjhiMjJcIixcclxuXHRcdFwiZnVjaHNpYVwiOiBcImYwZlwiLFxyXG5cdFx0XCJnYWluc2Jvcm9cIjogXCJkY2RjZGNcIixcclxuXHRcdFwiZ2hvc3R3aGl0ZVwiOiBcImY4ZjhmZlwiLFxyXG5cdFx0XCJnb2xkXCI6IFwiZmZkNzAwXCIsXHJcblx0XHRcImdvbGRlbnJvZFwiOiBcImRhYTUyMFwiLFxyXG5cdFx0XCJncmF5XCI6IFwiODA4MDgwXCIsXHJcblx0XHRcImdyZWVuXCI6IFwiMDA4MDAwXCIsXHJcblx0XHRcImdyZWVueWVsbG93XCI6IFwiYWRmZjJmXCIsXHJcblx0XHRcImdyZXlcIjogXCI4MDgwODBcIixcclxuXHRcdFwiaG9uZXlkZXdcIjogXCJmMGZmZjBcIixcclxuXHRcdFwiaG90cGlua1wiOiBcImZmNjliNFwiLFxyXG5cdFx0XCJpbmRpYW5yZWRcIjogXCJjZDVjNWNcIixcclxuXHRcdFwiaW5kaWdvXCI6IFwiNGIwMDgyXCIsXHJcblx0XHRcIml2b3J5XCI6IFwiZmZmZmYwXCIsXHJcblx0XHRcImtoYWtpXCI6IFwiZjBlNjhjXCIsXHJcblx0XHRcImxhdmVuZGVyXCI6IFwiZTZlNmZhXCIsXHJcblx0XHRcImxhdmVuZGVyYmx1c2hcIjogXCJmZmYwZjVcIixcclxuXHRcdFwibGF3bmdyZWVuXCI6IFwiN2NmYzAwXCIsXHJcblx0XHRcImxlbW9uY2hpZmZvblwiOiBcImZmZmFjZFwiLFxyXG5cdFx0XCJsaWdodGJsdWVcIjogXCJhZGQ4ZTZcIixcclxuXHRcdFwibGlnaHRjb3JhbFwiOiBcImYwODA4MFwiLFxyXG5cdFx0XCJsaWdodGN5YW5cIjogXCJlMGZmZmZcIixcclxuXHRcdFwibGlnaHRnb2xkZW5yb2R5ZWxsb3dcIjogXCJmYWZhZDJcIixcclxuXHRcdFwibGlnaHRncmF5XCI6IFwiZDNkM2QzXCIsXHJcblx0XHRcImxpZ2h0Z3JlZW5cIjogXCI5MGVlOTBcIixcclxuXHRcdFwibGlnaHRncmV5XCI6IFwiZDNkM2QzXCIsXHJcblx0XHRcImxpZ2h0cGlua1wiOiBcImZmYjZjMVwiLFxyXG5cdFx0XCJsaWdodHNhbG1vblwiOiBcImZmYTA3YVwiLFxyXG5cdFx0XCJsaWdodHNlYWdyZWVuXCI6IFwiMjBiMmFhXCIsXHJcblx0XHRcImxpZ2h0c2t5Ymx1ZVwiOiBcIjg3Y2VmYVwiLFxyXG5cdFx0XCJsaWdodHNsYXRlZ3JheVwiOiBcIjc4OVwiLFxyXG5cdFx0XCJsaWdodHNsYXRlZ3JleVwiOiBcIjc4OVwiLFxyXG5cdFx0XCJsaWdodHN0ZWVsYmx1ZVwiOiBcImIwYzRkZVwiLFxyXG5cdFx0XCJsaWdodHllbGxvd1wiOiBcImZmZmZlMFwiLFxyXG5cdFx0XCJsaW1lXCI6IFwiMGYwXCIsXHJcblx0XHRcImxpbWVncmVlblwiOiBcIjMyY2QzMlwiLFxyXG5cdFx0XCJsaW5lblwiOiBcImZhZjBlNlwiLFxyXG5cdFx0XCJtYWdlbnRhXCI6IFwiZjBmXCIsXHJcblx0XHRcIm1hcm9vblwiOiBcIjgwMDAwMFwiLFxyXG5cdFx0XCJtZWRpdW1hcXVhbWFyaW5lXCI6IFwiNjZjZGFhXCIsXHJcblx0XHRcIm1lZGl1bWJsdWVcIjogXCIwMDAwY2RcIixcclxuXHRcdFwibWVkaXVtb3JjaGlkXCI6IFwiYmE1NWQzXCIsXHJcblx0XHRcIm1lZGl1bXB1cnBsZVwiOiBcIjkzNzBkYlwiLFxyXG5cdFx0XCJtZWRpdW1zZWFncmVlblwiOiBcIjNjYjM3MVwiLFxyXG5cdFx0XCJtZWRpdW1zbGF0ZWJsdWVcIjogXCI3YjY4ZWVcIixcclxuXHRcdFwibWVkaXVtc3ByaW5nZ3JlZW5cIjogXCIwMGZhOWFcIixcclxuXHRcdFwibWVkaXVtdHVycXVvaXNlXCI6IFwiNDhkMWNjXCIsXHJcblx0XHRcIm1lZGl1bXZpb2xldHJlZFwiOiBcImM3MTU4NVwiLFxyXG5cdFx0XCJtaWRuaWdodGJsdWVcIjogXCIxOTE5NzBcIixcclxuXHRcdFwibWludGNyZWFtXCI6IFwiZjVmZmZhXCIsXHJcblx0XHRcIm1pc3R5cm9zZVwiOiBcImZmZTRlMVwiLFxyXG5cdFx0XCJtb2NjYXNpblwiOiBcImZmZTRiNVwiLFxyXG5cdFx0XCJuYXZham93aGl0ZVwiOiBcImZmZGVhZFwiLFxyXG5cdFx0XCJuYXZ5XCI6IFwiMDAwMDgwXCIsXHJcblx0XHRcIm9sZGxhY2VcIjogXCJmZGY1ZTZcIixcclxuXHRcdFwib2xpdmVcIjogXCI4MDgwMDBcIixcclxuXHRcdFwib2xpdmVkcmFiXCI6IFwiNmI4ZTIzXCIsXHJcblx0XHRcIm9yYW5nZVwiOiBcImZmYTUwMFwiLFxyXG5cdFx0XCJvcmFuZ2VyZWRcIjogXCJmZjQ1MDBcIixcclxuXHRcdFwib3JjaGlkXCI6IFwiZGE3MGQ2XCIsXHJcblx0XHRcInBhbGVnb2xkZW5yb2RcIjogXCJlZWU4YWFcIixcclxuXHRcdFwicGFsZWdyZWVuXCI6IFwiOThmYjk4XCIsXHJcblx0XHRcInBhbGV0dXJxdW9pc2VcIjogXCJhZmVlZWVcIixcclxuXHRcdFwicGFsZXZpb2xldHJlZFwiOiBcImRiNzA5M1wiLFxyXG5cdFx0XCJwYXBheWF3aGlwXCI6IFwiZmZlZmQ1XCIsXHJcblx0XHRcInBlYWNocHVmZlwiOiBcImZmZGFiOVwiLFxyXG5cdFx0XCJwZXJ1XCI6IFwiY2Q4NTNmXCIsXHJcblx0XHRcInBpbmtcIjogXCJmZmMwY2JcIixcclxuXHRcdFwicGx1bVwiOiBcImRkYTBkZFwiLFxyXG5cdFx0XCJwb3dkZXJibHVlXCI6IFwiYjBlMGU2XCIsXHJcblx0XHRcInB1cnBsZVwiOiBcIjgwMDA4MFwiLFxyXG5cdFx0XCJyZWJlY2NhcHVycGxlXCI6IFwiNjM5XCIsXHJcblx0XHRcInJlZFwiOiBcImYwMFwiLFxyXG5cdFx0XCJyb3N5YnJvd25cIjogXCJiYzhmOGZcIixcclxuXHRcdFwicm95YWxibHVlXCI6IFwiNDE2OWUxXCIsXHJcblx0XHRcInNhZGRsZWJyb3duXCI6IFwiOGI0NTEzXCIsXHJcblx0XHRcInNhbG1vblwiOiBcImZhODA3MlwiLFxyXG5cdFx0XCJzYW5keWJyb3duXCI6IFwiZjRhNDYwXCIsXHJcblx0XHRcInNlYWdyZWVuXCI6IFwiMmU4YjU3XCIsXHJcblx0XHRcInNlYXNoZWxsXCI6IFwiZmZmNWVlXCIsXHJcblx0XHRcInNpZW5uYVwiOiBcImEwNTIyZFwiLFxyXG5cdFx0XCJzaWx2ZXJcIjogXCJjMGMwYzBcIixcclxuXHRcdFwic2t5Ymx1ZVwiOiBcIjg3Y2VlYlwiLFxyXG5cdFx0XCJzbGF0ZWJsdWVcIjogXCI2YTVhY2RcIixcclxuXHRcdFwic2xhdGVncmF5XCI6IFwiNzA4MDkwXCIsXHJcblx0XHRcInNsYXRlZ3JleVwiOiBcIjcwODA5MFwiLFxyXG5cdFx0XCJzbm93XCI6IFwiZmZmYWZhXCIsXHJcblx0XHRcInNwcmluZ2dyZWVuXCI6IFwiMDBmZjdmXCIsXHJcblx0XHRcInN0ZWVsYmx1ZVwiOiBcIjQ2ODJiNFwiLFxyXG5cdFx0XCJ0YW5cIjogXCJkMmI0OGNcIixcclxuXHRcdFwidGVhbFwiOiBcIjAwODA4MFwiLFxyXG5cdFx0XCJ0aGlzdGxlXCI6IFwiZDhiZmQ4XCIsXHJcblx0XHRcInRvbWF0b1wiOiBcImZmNjM0N1wiLFxyXG5cdFx0XCJ0dXJxdW9pc2VcIjogXCI0MGUwZDBcIixcclxuXHRcdFwidmlvbGV0XCI6IFwiZWU4MmVlXCIsXHJcblx0XHRcIndoZWF0XCI6IFwiZjVkZWIzXCIsXHJcblx0XHRcIndoaXRlXCI6IFwiZmZmXCIsXHJcblx0XHRcIndoaXRlc21va2VcIjogXCJmNWY1ZjVcIixcclxuXHRcdFwieWVsbG93XCI6IFwiZmYwXCIsXHJcblx0XHRcInllbGxvd2dyZWVuXCI6IFwiOWFjZDMyXCIsXHJcblx0XHRcInRyYW5zcGFyZW50XCI6IFwiMDAwMDAwMDBcIlxyXG5cdH07XHJcblx0XHJcblx0Y29uc3QgY2xhbXAgPSAobiwgYSwgYikgPT4gbiA8IGEgPyBhIDogKG4gPiBiID8gYiA6IG4pLFx0Ly8gQ2xhbXAgbiBpbiBpbnRlcnZhbCBbYSwgYl1cclxuXHRcdHJvdW5kID0gKG4sIGQpID0+IHtcdC8vIFJvdW5kIG4gdG8gbmVhcmVzdCBpbnRlZ2VyLCBvciB0byBkIGRlY2ltYWwgcGxhY2VzIChpZiBkIGlzIGRlZmluZWQpXHJcblx0XHRcdHZhciBwID0gTWF0aC5wb3coMTAsIGQgfHwgMCk7XHJcblx0XHRcdHJldHVybiBNYXRoLnJvdW5kKG4gKiBwKSAvIHA7XHJcblx0XHR9LFxyXG5cdFx0aGkgPSBuID0+IGNsYW1wKHBhcnNlSW50KG4sIDE2KSwgMCwgMjU1KSxcdC8vIENvbnZlcnQgMi1kaWdpdCBoZXggdG8gaW50IGluIGludGVydmFsIFswLCAyNTVdXHJcblx0XHRoZiA9IG4gPT4gY2xhbXAocm91bmQocGFyc2VJbnQobiwgMTYpIC8gMjU1LCAyKSwgMCwgMSksXHQvLyBDb252ZXJ0IDItZGlnaXQgaGV4IHRvIGZsb2F0IHdpdGggMiBkZWNpbWFsIHBsYWNlcyBpbiBpbnRlcnZhbCBbMCwgMV1cclxuXHRcdHNpID0gbiA9PiBjbGFtcChyb3VuZChwYXJzZUZsb2F0KG4pKSwgMCwgMjU1KSxcdC8vIENvbnZlcnQgc3RyaW5nIHRvIGludCBpbiBpbnRlcnZhbCBbMCwgMjU1XVxyXG5cdFx0c2YgPSBuID0+IGNsYW1wKHJvdW5kKHBhcnNlRmxvYXQobiksIDIpLCAwLCAxKSxcdC8vIENvbnZlcnQgc3RyaW5nIHRvIGZsb2F0IHdpdGggMiBkZWNpbWFsIHBsYWNlcyBpbiBpbnRlcnZhbCBbMCwgMV1cclxuXHRcdHBpID0gbiA9PiBjbGFtcChyb3VuZChwYXJzZUZsb2F0KG4pIC8gMTAwICogMjU1KSwgMCwgMjU1KSxcdC8vIENvbnZlcnQgcGVyY2VudGFnZSBzdHJpbmcgdG8gaW50IGluIGludGVydmFsIFswLCAyNTVdXHJcblx0XHR1ZiA9IG4gPT4gY2xhbXAocGFyc2VGbG9hdChuKSAvIDM2MCwgMCwgMSksXHQvLyBDb252ZXJ0IGh1ZSBzdHJpbmcgdG8gZmxvYXQgaW4gaW50ZXJ2YWwgWzAsIDFdXHJcblx0XHRwZiA9IG4gPT4gY2xhbXAocGFyc2VGbG9hdChuKSAvIDEwMCwgMCwgMSk7XHQvLyBDb252ZXJ0IHBlcmNlbnRhZ2Ugc3RyaW5nIHRvIGZsb2F0IGluIGludGVydmFsIFswLCAxXVxyXG5cdFxyXG5cdC8vIENvbnZlcnQgaHNsIHRvIHJnYiwgYWxwaGEgdmFsdWUgZ2V0cyBwYXNzZWQgc3RyYWlnaHQgdGhyb3VnaFxyXG5cdC8vIGgsIHMsIGwgdmFsdWVzIGFyZSBhc3N1bWVkIHRvIGJlIGluIGludGVydmFsIFswLCAxXVxyXG5cdC8vIFJldHVybnMgYW4gb2JqZWN0IGxpa2UgeyByLCBnLCBiLCBhIH1cclxuXHQvLyBodHRwOi8vYXhvbmZsdXguY29tL2hhbmR5LXJnYi10by1oc2wtYW5kLXJnYi10by1oc3YtY29sb3ItbW9kZWwtY1xyXG5cdGZ1bmN0aW9uIGhzbFRvUmdiKGgsIHMsIGwsIGEpIHtcclxuXHRcdHZhciByLCBnLCBiLFxyXG5cdFx0XHRodWUgPSBmdW5jdGlvbihwLCBxLCB0KSB7XHJcblx0XHRcdFx0aWYgKHQgPCAwKSB7IHQgKz0gMTsgfVxyXG5cdFx0XHRcdGlmICh0ID4gMSkgeyB0IC09IDE7IH1cclxuXHRcdFx0XHRpZiAodCA8IDEgLyA2KSB7IHJldHVybiBwICsgKHEgLSBwKSAqIDYgKiB0IH07XHJcblx0XHRcdFx0aWYgKHQgPCAxIC8gMikgeyByZXR1cm4gcTsgfVxyXG5cdFx0XHRcdGlmICh0IDwgMiAvIDMpIHsgcmV0dXJuIHAgKyAocSAtIHApICogKDIgLyAzIC0gdCkgKiA2IH07XHJcblx0XHRcdFx0cmV0dXJuIHA7XHJcblx0XHRcdH07XHJcblx0XHRpZiAocyA9PSAwKSB7XHJcblx0XHRcdHIgPSBnID0gYiA9IGw7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR2YXIgcSA9IGwgPCAwLjUgPyBsICogKDEgKyBzKSA6IGwgKyBzIC0gbCAqIHMsXHJcblx0XHRcdFx0cCA9IDIgKiBsIC0gcTtcclxuXHRcdFx0ciA9IGh1ZShwLCBxLCBoICsgMSAvIDMpO1xyXG5cdFx0XHRnID0gaHVlKHAsIHEsIGgpO1xyXG5cdFx0XHRiID0gaHVlKHAsIHEsIGggLSAxIC8gMyk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4geyByOiByb3VuZChyICogMjU1KSwgZzogcm91bmQoZyAqIDI1NSksIGI6IHJvdW5kKGIgKiAyNTUpLCBhOiBhIH07XHJcblx0fVxyXG5cdHJldHVybiBmdW5jdGlvbihjKSB7XHJcblx0XHR2YXIgbyA9IHsgcjogMCwgZzogMCwgYjogMCwgYTogMCB9LCBtID0gbnVsbDtcclxuXHRcdGlmICh0eXBlb2YgYyA9PSBcInN0cmluZ1wiKSB7XHJcblx0XHRcdGlmIChjIGluIG5hbWVzKSB7IGMgPSBcIiNcIiArIG5hbWVzW2NdOyB9XHJcblx0XHRcdGlmICgobSA9IGMubWF0Y2goLyMoW2EtZjAtOV0pKFthLWYwLTldKShbYS1mMC05XSkkL2kpKSAhPT0gbnVsbCkge1xyXG5cdFx0XHRcdG8gPSB7IHI6IGhpKG1bMV0gKyBtWzFdKSwgZzogaGkobVsyXSArIG1bMl0pLCBiOiBoaShtWzNdICsgbVszXSksIGE6IDEgfTtcclxuXHRcdFx0fSBlbHNlIGlmICgobSA9IGMubWF0Y2goLyMoW2EtZjAtOV17Mn0pKFthLWYwLTldezJ9KShbYS1mMC05XXsyfSkkL2kpKSAhPT0gbnVsbCkge1xyXG5cdFx0XHRcdG8gPSB7IHI6IGhpKG1bMV0pLCBnOiBoaShtWzJdKSwgYjogaGkobVszXSksIGE6IDEgfTtcclxuXHRcdFx0fSBlbHNlIGlmICgobSA9IGMubWF0Y2goLyMoW2EtZjAtOV17Mn0pKFthLWYwLTldezJ9KShbYS1mMC05XXsyfSkoW2EtZjAtOV17Mn0pJC9pKSkgIT09IG51bGwpIHtcclxuXHRcdFx0XHRvID0geyByOiBoaShtWzFdKSwgZzogaGkobVsyXSksIGI6IGhpKG1bM10pLCBhOiBoZihtWzRdKSB9O1xyXG5cdFx0XHR9IGVsc2UgaWYgKChtID0gYy5tYXRjaCgvcmdiXFwoXFxzKihcXGR7MSwzfSlcXHMqLFxccyooXFxkezEsM30pXFxzKixcXHMqKFxcZHsxLDN9KVxccypcXCkvKSkgIT09IG51bGwpIHtcclxuXHRcdFx0XHRvID0geyByOiBzaShtWzFdKSwgZzogc2kobVsyXSksIGI6IHNpKG1bM10pLCBhOiAxIH07XHJcblx0XHRcdH0gZWxzZSBpZiAoKG0gPSBjLm1hdGNoKC9yZ2JcXChcXHMqKFxcZHsxLDN9XFwuP1xcZD8lKVxccyosXFxzKihcXGR7MSwzfVxcLj9cXGQ/JSlcXHMqLFxccyooXFxkezEsM31cXC4/XFxkPyUpXFxzKlxcKS8pKSAhPT0gbnVsbCkge1xyXG5cdFx0XHRcdG8gPSB7IHI6IHBpKG1bMV0pLCBnOiBwaShtWzJdKSwgYjogcGkobVszXSksIGE6IDEgfTtcclxuXHRcdFx0fSBlbHNlIGlmICgobSA9IGMubWF0Y2goL3JnYmFcXChcXHMqKFxcZHsxLDN9KVxccyosXFxzKihcXGR7MSwzfSlcXHMqLFxccyooXFxkezEsM30pXFxzKixcXHMqKFxcZD9cXC4/XFxkKj8pP1xccypcXCkvKSkgIT09IG51bGwpIHtcclxuXHRcdFx0XHRvID0geyByOiBzaShtWzFdKSwgZzogc2kobVsyXSksIGI6IHNpKG1bM10pLCBhOiBzZihtWzRdKSB9O1xyXG5cdFx0XHR9IGVsc2UgaWYgKChtID0gYy5tYXRjaCgvcmdiYVxcKFxccyooXFxkezEsM31cXC4/XFxkPyUpXFxzKixcXHMqKFxcZHsxLDN9XFwuP1xcZD8lKVxccyosXFxzKihcXGR7MSwzfVxcLj9cXGQ/JSlcXHMqLFxccyooXFxkP1xcLj9cXGQqPyk/XFxzKlxcKS8pKSAhPT0gbnVsbCkge1xyXG5cdFx0XHRcdG8gPSB7IHI6IHBpKG1bMV0pLCBnOiBwaShtWzJdKSwgYjogcGkobVszXSksIGE6IHNmKG1bNF0pIH07XHJcblx0XHRcdH0gZWxzZSBpZiAoKG0gPSBjLm1hdGNoKC9oc2xcXChcXHMqKFxcZHsxLDN9XFwuP1xcZD8pXFxzKixcXHMqKFxcZHsxLDN9XFwuP1xcZD8lKVxccyosXFxzKihcXGR7MSwzfVxcLj9cXGQ/JSlcXHMqXFwpLykpICE9PSBudWxsKSB7XHJcblx0XHRcdFx0byA9IGhzbFRvUmdiKHVmKG1bMV0pLCBwZihtWzJdKSwgcGYobVszXSksIDEpO1xyXG5cdFx0XHR9IGVsc2UgaWYgKChtID0gYy5tYXRjaCgvaHNsYVxcKFxccyooXFxkezEsM31cXC4/XFxkPylcXHMqLFxccyooXFxkezEsM31cXC4/XFxkPyUpXFxzKixcXHMqKFxcZHsxLDN9XFwuP1xcZD8lKVxccyosXFxzKihcXGQ/XFwuP1xcZCo/KT9cXHMqXFwpLykpICE9PSBudWxsKSB7XHJcblx0XHRcdFx0byA9IGhzbFRvUmdiKHVmKG1bMV0pLCBwZihtWzJdKSwgcGYobVszXSksIHNmKG1bNF0pKTtcclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIGlmICh0eXBlb2YgYyA9PSBcIm9iamVjdFwiKSB7XHJcblx0XHRcdGlmIChjLnIgIT09IHVuZGVmaW5lZCAmJiBjLmcgIT0gdW5kZWZpbmVkICYmIGMuYiAhPT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdFx0byA9IHsgcjogc2koYy5yKSwgZzogc2koYy5nKSwgYjogc2koYy5iKSwgYTogc2YoYy5hIHx8IDEpIH07XHJcblx0XHRcdH0gZWxzZSBpZiAoYy5oICE9PSB1bmRlZmluZWQgJiYgYy5zICE9PSB1bmRlZmluZWQgJiYgYy5sICE9PSB1bmRlZmluZWQpIHtcclxuXHRcdFx0XHRvID0gaHNsVG9SZ2IodWYoYy5oKSwgcGYoYy5zKSwgcGYoYy5sKSwgc2YoYy5hIHx8IDEpKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIG87XHJcblx0fTtcclxufSgpKTtcclxuXHJcbmlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJykge1xyXG4gIG1vZHVsZS5leHBvcnRzID0geyBwYXJzZUNvbG9yIH07XHJcbn1cclxuIiwiLyoqXG4gKiBAb3ZlcnZpZXcgQSBsaWJyYXJ5IG9mIHVzZWZ1bCBmdW5jdGlvbnNcbiAqIEBhdXRob3IgR29yZG9uIExhcnJpZ2FuXG4gKi9cblxuLyoqXG4gKiBDaGVjayBpZiB0d28gbnVtYmVycyBhcmUgYXBwcm94aW1hdGVseSBlcXVhbFxuICogQHBhcmFtIHtudW1iZXJ9IGEgTnVtYmVyIGFcbiAqIEBwYXJhbSB7bnVtYmVyfSBiIE51bWJlciBiXG4gKiBAcGFyYW0ge251bWJlcn0gW3A9TnVtYmVyLkVQU0lMT05dIFRoZSBwcmVjaXNpb24gdmFsdWVcbiAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgbnVtYmVycyBhIGFuZCBiIGFyZSBhcHByb3hpbWF0ZWx5IGVxdWFsXG4gKi9cbmNvbnN0IGZsb2F0RXF1YWxzID0gKGEsIGIsIHAgPSBOdW1iZXIuRVBTSUxPTikgPT4gTWF0aC5hYnMoYSAtIGIpIDwgcDtcblxuLyoqXG4gKiBDbGFtcCBhIG51bWJlciBiZXR3ZWVuIG1pbiBhbmQgbWF4XG4gKiBAcGFyYW0ge251bWJlcn0gYSBUaGUgbnVtYmVyIHRvIGNsYW1wXG4gKiBAcGFyYW0ge251bWJlcn0gW21pbj0wXSBUaGUgbWluaW11bSB2YWx1ZVxuICogQHBhcmFtIHtudW1iZXJ9IFttYXg9MV0gVGhlIG1heGltdW0gdmFsdWVcbiAqIEByZXR1cm4ge251bWJlcn0gQSBjbGFtcGVkIG51bWJlclxuICovXG5jb25zdCBjbGFtcCA9IChhLCBtaW4gPSAwLCBtYXggPSAxKSA9PiBhIDwgbWluID8gbWluIDogKGEgPiBtYXggPyBtYXggOiBhKTtcblxuLyoqXG4gKiBHZXQgdGhlIGZyYWN0aW9uYWwgcGFydCBvZiBhIG51bWJlclxuICogQHBhcmFtIHtudW1iZXJ9IGEgVGhlIG51bWJlciBmcm9tIHdoaWNoIHRvIGdldCB0aGUgZnJhY3Rpb25hbCBwYXJ0XG4gKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBmcmFjdGlvbmFsIHBhcnQgb2YgdGhlIG51bWJlclxuICovXG5jb25zdCBmcmFjID0gYSA9PiBhID49IDAgPyBhIC0gTWF0aC5mbG9vcihhKSA6IGEgLSBNYXRoLmNlaWwoYSk7XG5cbi8qKlxuICogUm91bmQgbiB0byBkIGRlY2ltYWwgcGxhY2VzXG4gKiBAcGFyYW0ge251bWJlcn0gbiBUaGUgbnVtYmVyIHRvIHJvdW5kXG4gKiBAcGFyYW0ge251bWJlcn0gW2Q9MF0gVGhlIG51bWJlciBvZiBkZWNpbWFsIHBsYWNlcyB0byByb3VuZCB0b1xuICogQHJldHVybiB7bnVtYmVyfSBBIHJvdW5kZWQgbnVtYmVyXG4gKi9cbmNvbnN0IHJvdW5kID0gKG4sIGQgPSAwKSA9PiB7XG4gIGNvbnN0IHAgPSBNYXRoLnBvdygxMCwgZCk7XG4gIHJldHVybiBNYXRoLnJvdW5kKG4gKiBwICsgTnVtYmVyLkVQU0lMT04pIC8gcDtcbn1cblxuLyoqXG4gKiBEbyBhIGxpbmVhciBpbnRlcnBvbGF0aW9uIGJldHdlZW4gYSBhbmQgYlxuICogQHBhcmFtIHtudW1iZXJ9IGEgVGhlIG1pbmltdW0gbnVtYmVyXG4gKiBAcGFyYW0ge251bWJlcn0gYiBUaGUgbWF4aW11bSBudW1iZXJcbiAqIEBwYXJhbSB7bnVtYmVyfSBpIFRoZSBpbnRlcnBvbGF0aW9uIHZhbHVlLCBzaG91bGQgYmUgaW4gdGhlIGludGVydmFsIFswLCAxXVxuICogQHJldHVybiB7bnVtYmVyfSBBbiBpbnRlcnBvbGF0ZWQgdmFsdWUgaW4gdGhlIGludGVydmFsIFthLCBiXVxuICovXG5jb25zdCBsZXJwID0gKGEsIGIsIGkpID0+IGEgKyAoYiAtIGEpICogaTtcblxuLyoqXG4gKiBHZXQgdGhlIHBvc2l0aW9uIG9mIGkgYmV0d2VlbiBhIGFuZCBiXG4gKiBAcGFyYW0ge251bWJlcn0gYSBUaGUgbWluaW11bSBudW1iZXJcbiAqIEBwYXJhbSB7bnVtYmVyfSBiIFRoZSBtYXhpbXVtIG51bWJlclxuICogQHBhcmFtIHtudW1iZXJ9IGkgVGhlIGludGVycG9sYXRlZCB2YWx1ZSBpbiB0aGUgaW50ZXJ2YWwgW2EsIGJdXG4gKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBwb3NpdGlvbiBvZiBpIGJldHdlZW4gYSBhbmQgYlxuICovXG5jb25zdCB1bmxlcnAgPSAoYSwgYiwgaSkgPT4gKGkgLSBhKSAvIChiIC0gYSk7XG5cbi8qKlxuICogRG8gYSBiaWxpbmVhciBpbnRlcnBvbGF0aW9uXG4gKiBAcGFyYW0ge251bWJlcn0gYzAwIFRvcC1sZWZ0IHZhbHVlXG4gKiBAcGFyYW0ge251bWJlcn0gYzEwIFRvcC1yaWdodCB2YWx1ZVxuICogQHBhcmFtIHtudW1iZXJ9IGMwMSBCb3R0b20tbGVmdCB2YWx1ZVxuICogQHBhcmFtIHtudW1iZXJ9IGMxMSBCb3R0b20tcmlnaHQgdmFsdWVcbiAqIEBwYXJhbSB7bnVtYmVyfSBpeCBJbnRlcnBvbGF0aW9uIHZhbHVlIGFsb25nIHhcbiAqIEBwYXJhbSB7bnVtYmVyfSBpeSBJbnRlcnBvbGF0aW9uIHZhbHVlIGFsb25nIHlcbiAqIEByZXR1cm4ge251bWJlcn0gQSBiaWxpbmVhciBpbnRlcnBvbGF0ZWQgdmFsdWVcbiAqL1xuY29uc3QgYmxlcnAgPSAoYzAwLCBjMTAsIGMwMSwgYzExLCBpeCwgaXkpID0+IGxlcnAobGVycChjMDAsIGMxMCwgaXgpLCBsZXJwKGMwMSwgYzExLCBpeCksIGl5KTtcblxuLyoqXG4gKiBSZS1tYXAgYSBudW1iZXIgaSBmcm9tIHJhbmdlIGExLi4uYTIgdG8gYjEuLi5iMlxuICogQHBhcmFtIHtudW1iZXJ9IGkgVGhlIG51bWJlciB0byByZS1tYXBcbiAqIEBwYXJhbSB7bnVtYmVyfSBhMVxuICogQHBhcmFtIHtudW1iZXJ9IGEyXG4gKiBAcGFyYW0ge251bWJlcn0gYjFcbiAqIEBwYXJhbSB7bnVtYmVyfSBiMlxuICogQHJldHVybiB7bnVtYmVyfVxuICovXG5jb25zdCByZW1hcCA9IChpLCBhMSwgYTIsIGIxLCBiMikgPT4gYjEgKyAoaSAtIGExKSAqIChiMiAtIGIxKSAvIChhMiAtIGExKTtcblxuLyoqXG4gKiBEbyBhIHNtb290aCBpbnRlcnBvbGF0aW9uIGJldHdlZW4gYSBhbmQgYlxuICogQHBhcmFtIHtudW1iZXJ9IGEgVGhlIG1pbmltdW0gbnVtYmVyXG4gKiBAcGFyYW0ge251bWJlcn0gYiBUaGUgbWF4aW11bSBudW1iZXJcbiAqIEBwYXJhbSB7bnVtYmVyfSBpIFRoZSBpbnRlcnBvbGF0aW9uIHZhbHVlXG4gKiBAcmV0dXJuIHtudW1iZXJ9IEFuIGludGVycG9sYXRlZCB2YWx1ZSBpbiB0aGUgaW50ZXJ2YWwgW2EsIGJdXG4gKi9cbmNvbnN0IHNtb290aHN0ZXAgPSAoYSwgYiwgaSkgPT4gbGVycChhLCBiLCAzICogTWF0aC5wb3coaSwgMikgLSAyICogTWF0aC5wb3coaSwgMykpO1xuXG4vKipcbiAqIEdldCBhbiBhbmdsZSBpbiByYWRpYW5zXG4gKiBAcGFyYW0ge251bWJlcn0gZGVncmVlcyBUaGUgYW5nbGUgaW4gZGVncmVlc1xuICogQHJldHVybiB7bnVtYmVyfSBUaGUgYW5nbGUgaW4gcmFkaWFuc1xuICovXG5jb25zdCByYWRpYW5zID0gZGVncmVlcyA9PiAoTWF0aC5QSSAvIDE4MCkgKiBkZWdyZWVzO1xuXG4vKipcbiAqIEdldCBhbiBhbmdsZSBpbiBkZWdyZWVzXG4gKiBAcGFyYW0ge251bWJlcn0gcmFkaWFucyBUaGUgYW5nbGUgaW4gcmFkaWFuc1xuICogQHJldHVybiB7bnVtYmVyfSBUaGUgYW5nbGUgaW4gZGVncmVlc1xuICovXG5jb25zdCBkZWdyZWVzID0gcmFkaWFucyA9PiAoMTgwIC8gTWF0aC5QSSkgKiByYWRpYW5zO1xuXG4vKipcbiAqIEdldCBhIHJhbmRvbSBmbG9hdCBpbiB0aGUgaW50ZXJ2YWwgW21pbiwgbWF4KVxuICogQHBhcmFtIHtudW1iZXJ9IG1pbiBJbmNsdXNpdmUgbWluXG4gKiBAcGFyYW0ge251bWJlcn0gbWF4IEV4Y2x1c2l2ZSBtYXhcbiAqIEByZXR1cm4ge251bWJlcn0gQSByYW5kb20gZmxvYXQgaW4gdGhlIGludGVydmFsIFttaW4sIG1heClcbiAqL1xuY29uc3QgcmFuZG9tQmV0d2VlbiA9IChtaW4sIG1heCkgPT4gTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pICsgbWluO1xuXG4vKipcbiAqIEdldCBhIHJhbmRvbSBpbnRlZ2VyIGluIHRoZSBpbnRlcnZhbCBbbWluLCBtYXhdXG4gKiBAcGFyYW0ge251bWJlcn0gbWluIEluY2x1c2l2ZSBtaW5cbiAqIEBwYXJhbSB7bnVtYmVyfSBtYXggSW5jbHVzaXZlIG1heFxuICogQHJldHVybiB7bnVtYmVyfSBBIHJhbmRvbSBpbnRlZ2VyIGluIHRoZSBpbnRlcnZhbCBbbWluLCBtYXhdXG4gKi9cbmNvbnN0IHJhbmRvbUludEJldHdlZW4gPSAobWluLCBtYXgpID0+IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW47XG5cbi8qKlxuICogR2V0IGEgbm9ybWFsbHktZGlzdHJpYnV0ZWQgcmFuZG9tIG51bWJlclxuICogQHBhcmFtIHtudW1iZXJ9IFttdT0wLjVdIFRoZSBtZWFuIHZhbHVlXG4gKiBAcGFyYW0ge251bWJlcn0gW3NpZ21hPTAuNV0gVGhlIHN0YW5kYXJkIGRldmlhdGlvblxuICogQHBhcmFtIHtudW1iZXJ9IFtzYW1wbGVzPTJdIFRoZSBudW1iZXIgb2Ygc2FtcGxlc1xuICogQHJldHVybiB7bnVtYmVyfSBBIG5vcm1hbGx5LWRpc3RyaWJ1dGVkIHJhbmRvbSBudW1iZXJcbiAqL1xuY29uc3QgY2x0UmFuZG9tID0gKG11ID0gMC41LCBzaWdtYSA9IDAuNSwgc2FtcGxlcyA9IDIpID0+IHtcbiAgbGV0IHRvdGFsID0gMDtcbiAgZm9yIChsZXQgaSA9IHNhbXBsZXM7IGktLTspIHtcbiAgICB0b3RhbCArPSBNYXRoLnJhbmRvbSgpO1xuICB9XG4gIHJldHVybiBtdSArICh0b3RhbCAtIHNhbXBsZXMgLyAyKSAvIChzYW1wbGVzIC8gMikgKiBzaWdtYTtcbn07XG5cbi8qKlxuICogR2V0IGEgbm9ybWFsbHktZGlzdHJpYnV0ZWQgcmFuZG9tIGludGVnZXIgaW4gdGhlIGludGVydmFsIFttaW4sIG1heF1cbiAqIEBwYXJhbSB7bnVtYmVyfSBtaW4gSW5jbHVzaXZlIG1pblxuICogQHBhcmFtIHtudW1iZXJ9IG1heCBJbmNsdXNpdmUgbWF4XG4gKiBAcmV0dXJuIHtudW1iZXJ9IEEgbm9ybWFsbHktZGlzdHJpYnV0ZWQgcmFuZG9tIGludGVnZXJcbiAqL1xuY29uc3QgY2x0UmFuZG9tSW50ID0gKG1pbiwgbWF4KSA9PiBNYXRoLmZsb29yKG1pbiArIGNsdFJhbmRvbSgwLjUsIDAuNSwgMikgKiAobWF4ICsgMSAtIG1pbikpO1xuXG4vKipcbiAqIFJldHVybiBhIHdlaWdodGVkIHJhbmRvbSBpbnRlZ2VyXG4gKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IHcgQW4gYXJyYXkgb2Ygd2VpZ2h0c1xuICogQHJldHVybiB7bnVtYmVyfSBBbiBpbmRleCBmcm9tIHdcbiAqL1xuY29uc3Qgd2VpZ2h0ZWRSYW5kb20gPSB3ID0+IHtcbiAgbGV0IHRvdGFsID0gdy5yZWR1Y2UoKGEsIGkpID0+IGEgKyBpLCAwKSwgbiA9IDA7XG4gIGNvbnN0IHIgPSBNYXRoLnJhbmRvbSgpICogdG90YWw7XG4gIHdoaWxlICh0b3RhbCA+IHIpIHtcbiAgICB0b3RhbCAtPSB3W24rK107XG4gIH1cbiAgcmV0dXJuIG4gLSAxO1xufTtcblxuLyoqXG4gKiBBbiBpbnRlcnBvbGF0aW9uIGZ1bmN0aW9uXG4gKiBAY2FsbGJhY2sgSW50ZXJwb2xhdGlvbkZ1bmN0aW9uXG4gKiBAcGFyYW0ge251bWJlcn0gYSBUaGUgbWluaW11bSBudW1iZXJcbiAqIEBwYXJhbSB7bnVtYmVyfSBiIFRoZSBtYXhpbXVtIG51bWJlclxuICogQHBhcmFtIHtudW1iZXJ9IGkgVGhlIGludGVycG9sYXRpb24gdmFsdWUsIHNob3VsZCBiZSBpbiB0aGUgaW50ZXJ2YWwgWzAsIDFdXG4gKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBpbnRlcnBvbGF0ZWQgdmFsdWUgaW4gdGhlIGludGVydmFsIFthLCBiXVxuICovXG5cbi8qKlxuICogUmV0dXJuIGFuIGludGVycG9sYXRlZCB2YWx1ZSBmcm9tIGFuIGFycmF5XG4gKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IGEgQW4gYXJyYXkgb2YgdmFsdWVzIGludGVycG9sYXRlXG4gKiBAcGFyYW0ge251bWJlcn0gaSBBIG51bWJlciBpbiB0aGUgaW50ZXJ2YWwgWzAsIDFdXG4gKiBAcGFyYW0ge0ludGVycG9sYXRpb25GdW5jdGlvbn0gW2Y9TWF0aC5sZXJwXSBUaGUgaW50ZXJwb2xhdGlvbiBmdW5jdGlvbiB0byB1c2VcbiAqIEByZXR1cm4ge251bWJlcn0gQW4gaW50ZXJwb2xhdGVkIHZhbHVlIGluIHRoZSBpbnRlcnZhbCBbbWluKGEpLCBtYXgoYSldXG4gKi9cbmNvbnN0IGxlcnBBcnJheSA9IChhLCBpLCBmID0gbGVycCkgPT4ge1xuICBjb25zdCBzID0gaSAqIChhLmxlbmd0aCAtIDEpO1xuICBjb25zdCBwID0gY2xhbXAoTWF0aC50cnVuYyhzKSwgMCwgYS5sZW5ndGggLSAxKTtcbiAgcmV0dXJuIGYoYVtwXSB8fCAwLCBhW3AgKyAxXSB8fCAwLCBmcmFjKHMpKTtcbn07XG5cbi8qKlxuICogR2V0IHRoZSBkb3QgcHJvZHVjdCBvZiB0d28gdmVjdG9yc1xuICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSBhIFZlY3RvciBhXG4gKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IGIgVmVjdG9yIGJcbiAqIEByZXR1cm4ge251bWJlcn0gYSDiiJkgYlxuICovXG5jb25zdCBkb3QgPSAoYSwgYikgPT4gYS5yZWR1Y2UoKG4sIHYsIGkpID0+IG4gKyB2ICogYltpXSwgMCk7XG5cbi8qKlxuICogR2V0IHRoZSBmYWN0b3JpYWwgb2YgYSBudW1iZXJcbiAqIEBwYXJhbSB7bnVtYmVyfSBhXG4gKiBAcmV0dXJuIHtudW1iZXJ9IGEhXG4gKi9cbmNvbnN0IGZhY3RvcmlhbCA9IGEgPT4ge1xuICBsZXQgcmVzdWx0ID0gMTtcbiAgZm9yIChsZXQgaSA9IDI7IGkgPD0gYTsgaSsrKSB7XG4gICAgcmVzdWx0ICo9IGk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbi8qKlxuICogR2V0IHRoZSBudW1iZXIgb2YgcGVybXV0YXRpb25zIG9mIHIgZWxlbWVudHMgZnJvbSBhIHNldCBvZiBuIGVsZW1lbnRzXG4gKiBAcGFyYW0ge251bWJlcn0gblxuICogQHBhcmFtIHtudW1iZXJ9IHJcbiAqIEByZXR1cm4ge251bWJlcn0gblByXG4gKi9cbmNvbnN0IG5wciA9IChuLCByKSA9PiBmYWN0b3JpYWwobikgLyBmYWN0b3JpYWwobiAtIHIpO1xuXG4vKipcbiAqIEdldCB0aGUgbnVtYmVyIG9mIGNvbWJpbmF0aW9ucyBvZiByIGVsZW1lbnRzIGZyb20gYSBzZXQgb2YgbiBlbGVtZW50c1xuICogQHBhcmFtIHtudW1iZXJ9IG5cbiAqIEBwYXJhbSB7bnVtYmVyfSByXG4gKiBAcmV0dXJuIHtudW1iZXJ9IG5DclxuICovXG5jb25zdCBuY3IgPSAobiwgcikgPT4gZmFjdG9yaWFsKG4pIC8gKGZhY3RvcmlhbChyKSAqIGZhY3RvcmlhbChuIC0gcikpO1xuXG4vKipcbiAqIEdlbmVyYXRlIGFsbCBjb21iaW5hdGlvbnMgb2YgciBlbGVtZW50cyBmcm9tIGFuIGFycmF5XG4gKlxuICogQGV4YW1wbGVcbiAqIGBgYGpzXG4gKiBjb21iaW5hdGlvbnMoWzEsIDIsIDNdLCAyKTtcbiAqIGBgYFxuICpcbiAqIE91dHB1dDpcbiAqIGBgYGpzb25cbiAqIFtcbiAqICAgWzEsIDJdLFxuICogICBbMSwgM10sXG4gKiAgIFsyLCAzXVxuICogXVxuICogYGBgXG4gKiBAcGFyYW0ge0FycmF5PCo+fSBhXG4gKiBAcGFyYW0ge251bWJlcn0gciBUaGUgbnVtYmVyIG9mIGVsZW1lbnRzIHRvIGNob29zZSBpbiBlYWNoIGNvbWJpbmF0aW9uXG4gKiBAcmV0dXJuIHtBcnJheTxBcnJheTwqPj59IEFuIGFycmF5IG9mIGNvbWJpbmF0aW9uIGFycmF5c1xuICovXG5jb25zdCBjb21iaW5hdGlvbnMgPSAoYSwgcikgPT4ge1xuICBpZiAociA9PT0gMSkge1xuICAgIHJldHVybiBhLm1hcChpdGVtID0+IFtpdGVtXSk7XG4gIH1cblxuICByZXR1cm4gYS5yZWR1Y2UoXG4gICAgKGFjYywgaXRlbSwgaSkgPT4gW1xuICAgICAgLi4uYWNjLFxuICAgICAgLi4uY29tYmluYXRpb25zKGEuc2xpY2UoaSArIDEpLCByIC0gMSkubWFwKGMgPT4gW2l0ZW0sIC4uLmNdKSxcbiAgICBdLFxuICAgIFtdXG4gICk7XG59O1xuXG4vKipcbiAqIEdldCBhIGNhcnRlc2lhbiBwcm9kdWN0IG9mIGFycmF5c1xuICpcbiAqIEBleGFtcGxlXG4gKiBgYGBqc1xuICogY2FydGVzaWFuKFsxLCAyLCAzXSwgWydhJywgJ2InXSk7XG4gKiBgYGBcbiAqXG4gKiBPdXRwdXQ6XG4gKiBgYGBqc29uXG4gKiBbXG4gKiAgIFsxLCBcImFcIl0sXG4gKiAgIFsxLCBcImJcIl0sXG4gKiAgIFsyLCBcImFcIl0sXG4gKiAgIFsyLCBcImJcIl0sXG4gKiAgIFszLCBcImFcIl0sXG4gKiAgIFszLCBcImJcIl1cbiAqIF1cbiAqIGBgYFxuICovXG5jb25zdCBjYXJ0ZXNpYW4gPSAoLi4uYXJyKSA9PlxuICBhcnIucmVkdWNlKFxuICAgIChhLCBiKSA9PiBhLmZsYXRNYXAoYyA9PiBiLm1hcChkID0+IFsuLi5jLCBkXSkpLFxuICAgIFtbXV1cbiAgKTtcblxuLyoqXG4gKiBBIGZ1bmN0aW9uIGZvciBnZW5lcmF0aW5nIGFycmF5IHZhbHVlc1xuICogQGNhbGxiYWNrIFRpbWVzRnVuY3Rpb25cbiAqIEBwYXJhbSB7bnVtYmVyfSBpIFRoZSBhcnJheSBpbmRleFxuICogQHJldHVybiB7Kn0gVGhlIGFycmF5IHZhbHVlXG4gKi9cblxuLyoqXG4gKiBSZXR1cm4gYSBuZXcgYXJyYXkgd2l0aCBsZW5ndGggbiBieSBjYWxsaW5nIGZ1bmN0aW9uIGYoaSkgb24gZWFjaCBlbGVtZW50XG4gKiBAcGFyYW0ge1RpbWVzRnVuY3Rpb259IGZcbiAqIEBwYXJhbSB7bnVtYmVyfSBuIFRoZSBzaXplIG9mIHRoZSBhcnJheVxuICogQHJldHVybiB7QXJyYXk8Kj59XG4gKi9cbmNvbnN0IHRpbWVzID0gKGYsIG4pID0+IEFycmF5KG4pLmZpbGwoMCkubWFwKChfLCBpKSA9PiBmKGkpKTtcblxuLyoqXG4gKiBSZXR1cm4gYW4gYXJyYXkgY29udGFpbmluZyBudW1iZXJzIDAtPihuIC0gMSlcbiAqIEBwYXJhbSB7bnVtYmVyfSBuIFRoZSBzaXplIG9mIHRoZSBhcnJheVxuICogQHJldHVybiB7QXJyYXk8bnVtYmVyPn0gQW4gYXJyYXkgb2YgaW50ZWdlcnMgMC0+KG4gLSAxKVxuICovXG5jb25zdCByYW5nZSA9IG4gPT4gdGltZXMoaSA9PiBpLCBuKTtcblxuLyoqXG4gKiBaaXAgMiBhcnJheXMgdG9nZXRoZXIsIGkuZS4gKFsxLCAyLCAzXSwgW2EsIGIsIGNdKSA9PiBbWzEsIGFdLCBbMiwgYl0sIFszLCBjXV1cbiAqIEBwYXJhbSB7QXJyYXk8Kj59IGFcbiAqIEBwYXJhbSB7QXJyYXk8Kj59IGJcbiAqIEByZXR1cm4ge0FycmF5PEFycmF5PCo+Pn1cbiAqL1xuY29uc3QgemlwID0gKGEsIGIpID0+IGEubWFwKChrLCBpKSA9PiBbaywgYltpXV0pO1xuXG4vKipcbiAqIFJldHVybiBhcnJheVtpXSB3aXRoIHBvc2l0aXZlIGFuZCBuZWdhdGl2ZSB3cmFwcGluZ1xuICogQHBhcmFtIHtBcnJheTwqPn0gYVxuICogQHBhcmFtIHtudW1iZXJ9IGkgVGhlIHBvc2l0aXZlbHkvbmVnYXRpdmVseSB3cmFwcGVkIGFycmF5IGluZGV4XG4gKiBAcmV0dXJuIHsqfSBBbiBlbGVtZW50IGZyb20gdGhlIGFycmF5XG4gKi9cbmNvbnN0IGF0ID0gKGEsIGkpID0+IGFbaSA8IDAgPyBhLmxlbmd0aCAtIChNYXRoLmFicyhpICsgMSkgJSBhLmxlbmd0aCkgLSAxIDogaSAlIGEubGVuZ3RoXTtcblxuLyoqXG4gKiBSZXR1cm4gdGhlIGxhc3QgZWxlbWVudCBvZiBhbiBhcnJheSB3aXRob3V0IHJlbW92aW5nIGl0XG4gKiBAcGFyYW0ge0FycmF5PCo+fSBhXG4gKiBAcmV0dXJuIHsqfSBUaGUgbGFzdCBlbGVtZW50IGZyb20gdGhlIGFycmF5XG4gKi9cbmNvbnN0IHBlZWsgPSAoYSkgPT4ge1xuICBpZiAoIWEubGVuZ3RoKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuXG4gIHJldHVybiBhW2EubGVuZ3RoIC0gMV07XG59O1xuXG4vKipcbiAqIENob3AgYW4gYXJyYXkgaW50byBjaHVua3Mgb2Ygc2l6ZSBuXG4gKiBAcGFyYW0ge0FycmF5PCo+fSBhXG4gKiBAcGFyYW0ge251bWJlcn0gbiBUaGUgY2h1bmsgc2l6ZVxuICogQHJldHVybiB7QXJyYXk8QXJyYXk8Kj4+fSBBbiBhcnJheSBvZiBhcnJheSBjaHVua3NcbiAqL1xuY29uc3QgY2h1bmsgPSAoYSwgbikgPT4gdGltZXMoaSA9PiBhLnNsaWNlKGkgKiBuLCBpICogbiArIG4pLCBNYXRoLmNlaWwoYS5sZW5ndGggLyBuKSk7XG5cbi8qKlxuICogUmFuZG9tbHkgc2h1ZmZsZSBhIHNoYWxsb3cgY29weSBvZiBhbiBhcnJheVxuICogQHBhcmFtIHtBcnJheTwqPn0gYVxuICogQHJldHVybiB7QXJyYXk8Kj59IFRoZSBzaHVmZmxlZCBhcnJheVxuICovXG5jb25zdCBzaHVmZmxlID0gYSA9PiBhLnNsaWNlKCkuc29ydCgoKSA9PiBNYXRoLnJhbmRvbSgpIC0gMC41KTtcblxuLyoqXG4gKiBGbGF0dGVuIGFuIG9iamVjdFxuICogQHBhcmFtIHtvYmplY3R9IG9cbiAqIEBwYXJhbSB7c3RyaW5nfSBjb25jYXRlbmF0b3IgVGhlIHN0cmluZyB0byB1c2UgZm9yIGNvbmNhdGVuYXRpbmcga2V5c1xuICogQHJldHVybiB7b2JqZWN0fSBBIGZsYXR0ZW5lZCBvYmplY3RcbiAqL1xuY29uc3QgZmxhdCA9IChvLCBjb25jYXRlbmF0b3IgPSAnLicpID0+IHtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKG8pLnJlZHVjZSgoYWNjLCBrZXkpID0+IHtcbiAgICBpZiAob1trZXldIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uYWNjLFxuICAgICAgICBba2V5XTogb1trZXldLnRvSVNPU3RyaW5nKCksXG4gICAgICB9O1xuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygb1trZXldICE9PSAnb2JqZWN0JyB8fCAhb1trZXldKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5hY2MsXG4gICAgICAgIFtrZXldOiBvW2tleV0sXG4gICAgICB9O1xuICAgIH1cbiAgICBjb25zdCBmbGF0dGVuZWQgPSBmbGF0KG9ba2V5XSwgY29uY2F0ZW5hdG9yKTtcblxuICAgIHJldHVybiB7XG4gICAgICAuLi5hY2MsXG4gICAgICAuLi5PYmplY3Qua2V5cyhmbGF0dGVuZWQpLnJlZHVjZShcbiAgICAgICAgKGNoaWxkQWNjLCBjaGlsZEtleSkgPT4gKHtcbiAgICAgICAgICAuLi5jaGlsZEFjYyxcbiAgICAgICAgICBbYCR7a2V5fSR7Y29uY2F0ZW5hdG9yfSR7Y2hpbGRLZXl9YF06IGZsYXR0ZW5lZFtjaGlsZEtleV0sXG4gICAgICAgIH0pLFxuICAgICAgICB7fVxuICAgICAgKSxcbiAgICB9O1xuICB9LCB7fSk7XG59O1xuXG4vKipcbiAqIFVuZmxhdHRlbiBhbiBvYmplY3RcbiAqIEBwYXJhbSB7b2JqZWN0fSBvXG4gKiBAcGFyYW0ge3N0cmluZ30gY29uY2F0ZW5hdG9yIFRoZSBzdHJpbmcgdG8gY2hlY2sgZm9yIGluIGNvbmNhdGVuYXRlZCBrZXlzXG4gKiBAcmV0dXJuIHtvYmplY3R9IEFuIHVuLWZsYXR0ZW5lZCBvYmplY3RcbiAqL1xuY29uc3QgdW5mbGF0ID0gKG8sIGNvbmNhdGVuYXRvciA9ICcuJykgPT4ge1xuICBsZXQgcmVzdWx0ID0ge30sIHRlbXAsIHN1YnN0cmluZ3MsIHByb3BlcnR5LCBpO1xuXG4gIGZvciAocHJvcGVydHkgaW4gbykge1xuICAgIHN1YnN0cmluZ3MgPSBwcm9wZXJ0eS5zcGxpdChjb25jYXRlbmF0b3IpO1xuICAgIHRlbXAgPSByZXN1bHQ7XG4gICAgZm9yIChpID0gMDsgaSA8IHN1YnN0cmluZ3MubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgICBpZiAoIShzdWJzdHJpbmdzW2ldIGluIHRlbXApKSB7XG4gICAgICAgIGlmIChpc0Zpbml0ZShzdWJzdHJpbmdzW2kgKyAxXSkpIHtcbiAgICAgICAgICB0ZW1wW3N1YnN0cmluZ3NbaV1dID0gW107XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGVtcFtzdWJzdHJpbmdzW2ldXSA9IHt9O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0ZW1wID0gdGVtcFtzdWJzdHJpbmdzW2ldXTtcbiAgICB9XG4gICAgdGVtcFtzdWJzdHJpbmdzW3N1YnN0cmluZ3MubGVuZ3RoIC0gMV1dID0gb1twcm9wZXJ0eV07XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuLyoqXG4gKiBBIHNwbGl0IHByZWRpY2F0ZVxuICogQGNhbGxiYWNrIFNwbGl0UHJlZGljYXRlXG4gKiBAcGFyYW0ge2FueX0gdmFsdWUgVGhlIGN1cnJlbnQgdmFsdWVcbiAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgdGhlIGFycmF5IHNob3VsZCBzcGxpdCBhdCB0aGlzIGluZGV4XG4gKi9cblxuLyoqXG4gKiBTcGxpdCBhbiBhcnJheSBpbnRvIHN1Yi1hcnJheXMgYmFzZWQgb24gYSBwcmVkaWNhdGVcbiAqIEBwYXJhbSB7QXJyYXk8Kj59IGFycmF5XG4gKiBAcGFyYW0ge1NwbGl0UHJlZGljYXRlfSBwcmVkaWNhdGVcbiAqIEByZXR1cm4ge0FycmF5PEFycmF5PCo+Pn0gQW4gYXJyYXkgb2YgYXJyYXlzXG4gKi9cbmNvbnN0IHNwbGl0ID0gKGFycmF5LCBwcmVkaWNhdGUpID0+IHtcbiAgY29uc3QgcmVzdWx0ID0gW107XG4gIGxldCBjdXJyZW50ID0gW107XG4gIGZvciAoY29uc3QgdmFsdWUgb2YgYXJyYXkpIHtcbiAgICBpZiAocHJlZGljYXRlKHZhbHVlKSkge1xuICAgICAgaWYgKGN1cnJlbnQubGVuZ3RoKSB7XG4gICAgICAgIHJlc3VsdC5wdXNoKGN1cnJlbnQpO1xuICAgICAgfVxuICAgICAgY3VycmVudCA9IFt2YWx1ZV07XG4gICAgfSBlbHNlIHtcbiAgICAgIGN1cnJlbnQucHVzaCh2YWx1ZSk7XG4gICAgfVxuICB9XG4gIHJlc3VsdC5wdXNoKGN1cnJlbnQpO1xuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG4vKipcbiAqIFBsdWNrIGtleXMgZnJvbSBhbiBvYmplY3RcbiAqIEBwYXJhbSB7b2JqZWN0fSBvXG4gKiBAcGFyYW0gey4uLnN0cmluZ30ga2V5cyBUaGUga2V5cyB0byBwbHVjayBmcm9tIHRoZSBvYmplY3RcbiAqIEByZXR1cm4ge29iamVjdH0gQW4gb2JqZWN0IGNvbnRhaW5pbmcgdGhlIHBsdWNrZWQga2V5c1xuICovXG5jb25zdCBwbHVjayA9IChvLCAuLi5rZXlzKSA9PiB7XG4gIHJldHVybiBrZXlzLnJlZHVjZShcbiAgICAocmVzdWx0LCBrZXkpID0+IE9iamVjdC5hc3NpZ24ocmVzdWx0LCB7IFtrZXldOiBvW2tleV0gfSksXG4gICAge31cbiAgKTtcbn07XG5cbi8qKlxuICogRXhjbHVkZSBrZXlzIGZyb20gYW4gb2JqZWN0XG4gKiBAcGFyYW0ge29iamVjdH0gb1xuICogQHBhcmFtIHsuLi5zdHJpbmd9IGtleXMgVGhlIGtleXMgdG8gZXhjbHVkZSBmcm9tIHRoZSBvYmplY3RcbiAqIEByZXR1cm4ge29iamVjdH0gQW4gb2JqZWN0IGNvbnRhaW5pbmcgYWxsIGtleXMgZXhjZXB0IGV4Y2x1ZGVkIGtleXNcbiAqL1xuY29uc3QgZXhjbHVkZSA9IChvLCAuLi5rZXlzKSA9PiB7XG4gIHJldHVybiBPYmplY3QuZnJvbUVudHJpZXMoXG4gICAgT2JqZWN0LmVudHJpZXMobykuZmlsdGVyKChba2V5XSkgPT4gIWtleXMuaW5jbHVkZXMoa2V5KSlcbiAgKTtcbn07XG5cbmlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBmbG9hdEVxdWFscyxcbiAgICBjbGFtcCxcbiAgICBmcmFjLFxuICAgIHJvdW5kLFxuICAgIGxlcnAsXG4gICAgdW5sZXJwLFxuICAgIGJsZXJwLFxuICAgIHJlbWFwLFxuICAgIHNtb290aHN0ZXAsXG4gICAgcmFkaWFucyxcbiAgICBkZWdyZWVzLFxuICAgIHJhbmRvbUJldHdlZW4sXG4gICAgcmFuZG9tSW50QmV0d2VlbixcbiAgICBjbHRSYW5kb20sXG4gICAgY2x0UmFuZG9tSW50LFxuICAgIHdlaWdodGVkUmFuZG9tLFxuICAgIGxlcnBBcnJheSxcbiAgICBkb3QsXG4gICAgZmFjdG9yaWFsLFxuICAgIG5wcixcbiAgICBuY3IsXG4gICAgY29tYmluYXRpb25zLFxuICAgIGNhcnRlc2lhbixcbiAgICB0aW1lcyxcbiAgICByYW5nZSxcbiAgICB6aXAsXG4gICAgYXQsXG4gICAgcGVlayxcbiAgICBjaHVuayxcbiAgICBzaHVmZmxlLFxuICAgIGZsYXQsXG4gICAgdW5mbGF0LFxuICAgIHNwbGl0LFxuICAgIHBsdWNrLFxuICAgIGV4Y2x1ZGUsXG4gIH07XG59XG4iLCJjb25zdCB7IHRpbWVzLCBjaHVuaywgZG90IH0gPSByZXF1aXJlKCdAYmFzZW1lbnR1bml2ZXJzZS91dGlscycpO1xuXG4vKipcbiAqIEBvdmVydmlldyBBIHNtYWxsIHZlY3RvciBhbmQgbWF0cml4IGxpYnJhcnlcbiAqIEBhdXRob3IgR29yZG9uIExhcnJpZ2FuXG4gKi9cblxuLyoqXG4gKiBBIDJkIHZlY3RvclxuICogQHR5cGVkZWYge09iamVjdH0gdmVjXG4gKiBAcHJvcGVydHkge251bWJlcn0geCBUaGUgeCBjb21wb25lbnQgb2YgdGhlIHZlY3RvclxuICogQHByb3BlcnR5IHtudW1iZXJ9IHkgVGhlIHkgY29tcG9uZW50IG9mIHRoZSB2ZWN0b3JcbiAqL1xuXG4vKipcbiAqIENyZWF0ZSBhIG5ldyB2ZWN0b3JcbiAqIEBwYXJhbSB7bnVtYmVyfHZlY30gW3hdIFRoZSB4IGNvbXBvbmVudCBvZiB0aGUgdmVjdG9yLCBvciBhIHZlY3RvciB0byBjb3B5XG4gKiBAcGFyYW0ge251bWJlcn0gW3ldIFRoZSB5IGNvbXBvbmVudCBvZiB0aGUgdmVjdG9yXG4gKiBAcmV0dXJuIHt2ZWN9IEEgbmV3IHZlY3RvclxuICogQGV4YW1wbGUgPGNhcHRpb24+VmFyaW91cyB3YXlzIHRvIGluaXRpYWxpc2UgYSB2ZWN0b3I8L2NhcHRpb24+XG4gKiBsZXQgYSA9IHZlYygzLCAyKTsgIC8vICgzLCAyKVxuICogbGV0IGIgPSB2ZWMoNCk7ICAgICAvLyAoNCwgNClcbiAqIGxldCBjID0gdmVjKGEpOyAgICAgLy8gKDMsIDIpXG4gKiBsZXQgZCA9IHZlYygpOyAgICAgIC8vICgwLCAwKVxuICovXG5jb25zdCB2ZWMgPSAoeCwgeSkgPT4gKCF4ICYmICF5ID9cbiAgeyB4OiAwLCB5OiAwIH0gOiAodHlwZW9mIHggPT09ICdvYmplY3QnID9cbiAgICB7IHg6IHgueCB8fCAwLCB5OiB4LnkgfHwgMCB9IDogKHkgPT09IG51bGwgfHwgeSA9PT0gdW5kZWZpbmVkID9cbiAgICAgIHsgeDogeCwgeTogeCB9IDogeyB4OiB4LCB5OiB5IH0pXG4gIClcbik7XG5cbi8qKlxuICogR2V0IHRoZSBjb21wb25lbnRzIG9mIGEgdmVjdG9yIGFzIGFuIGFycmF5XG4gKiBAcGFyYW0ge3ZlY30gYSBUaGUgdmVjdG9yIHRvIGdldCBjb21wb25lbnRzIGZyb21cbiAqIEByZXR1cm4ge0FycmF5PG51bWJlcj59IFRoZSB2ZWN0b3IgY29tcG9uZW50cyBhcyBhbiBhcnJheVxuICovXG52ZWMuY29tcG9uZW50cyA9IGEgPT4gW2EueCwgYS55XTtcblxuLyoqXG4gKiBSZXR1cm4gYSB1bml0IHZlY3RvciAoMSwgMClcbiAqIEByZXR1cm4ge3ZlY30gQSB1bml0IHZlY3RvciAoMSwgMClcbiAqL1xudmVjLnV4ID0gKCkgPT4gdmVjKDEsIDApO1xuXG4vKipcbiAqIFJldHVybiBhIHVuaXQgdmVjdG9yICgwLCAxKVxuICogQHJldHVybiB7dmVjfSBBIHVuaXQgdmVjdG9yICgwLCAxKVxuICovXG52ZWMudXkgPSAoKSA9PiB2ZWMoMCwgMSk7XG5cbi8qKlxuICogQWRkIHZlY3RvcnNcbiAqIEBwYXJhbSB7dmVjfSBhIFZlY3RvciBhXG4gKiBAcGFyYW0ge3ZlY30gYiBWZWN0b3IgYlxuICogQHJldHVybiB7dmVjfSBhICsgYlxuICovXG52ZWMuYWRkID0gKGEsIGIpID0+ICh7IHg6IGEueCArIGIueCwgeTogYS55ICsgYi55IH0pO1xuXG4vKipcbiAqIFNjYWxlIGEgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlY30gYSBWZWN0b3IgYVxuICogQHBhcmFtIHtudW1iZXJ9IGIgU2NhbGFyIGJcbiAqIEByZXR1cm4ge3ZlY30gYSAqIGJcbiAqL1xudmVjLm11bCA9IChhLCBiKSA9PiAoeyB4OiBhLnggKiBiLCB5OiBhLnkgKiBiIH0pO1xuXG4vKipcbiAqIFN1YnRyYWN0IHZlY3RvcnNcbiAqIEBwYXJhbSB7dmVjfSBhIFZlY3RvciBhXG4gKiBAcGFyYW0ge3ZlY30gYiBWZWN0b3IgYlxuICogQHJldHVybiB7dmVjfSBhIC0gYlxuICovXG52ZWMuc3ViID0gKGEsIGIpID0+ICh7IHg6IGEueCAtIGIueCwgeTogYS55IC0gYi55IH0pO1xuXG4vKipcbiAqIEdldCB0aGUgbGVuZ3RoIG9mIGEgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlY30gYSBWZWN0b3IgYVxuICogQHJldHVybiB7bnVtYmVyfSB8YXxcbiAqL1xudmVjLmxlbiA9IGEgPT4gTWF0aC5zcXJ0KGEueCAqIGEueCArIGEueSAqIGEueSk7XG5cbi8qKlxuICogR2V0IHRoZSBsZW5ndGggb2YgYSB2ZWN0b3IgdXNpbmcgdGF4aWNhYiBnZW9tZXRyeVxuICogQHBhcmFtIHt2ZWN9IGEgVmVjdG9yIGFcbiAqIEByZXR1cm4ge251bWJlcn0gfGF8XG4gKi9cbnZlYy5tYW5oYXR0YW4gPSBhID0+IE1hdGguYWJzKGEueCkgKyBNYXRoLmFicyhhLnkpO1xuXG4vKipcbiAqIE5vcm1hbGlzZSBhIHZlY3RvclxuICogQHBhcmFtIHt2ZWN9IGEgVGhlIHZlY3RvciB0byBub3JtYWxpc2VcbiAqIEByZXR1cm4ge3ZlY30gXmFcbiAqL1xudmVjLm5vciA9IGEgPT4ge1xuICBsZXQgbGVuID0gdmVjLmxlbihhKTtcbiAgcmV0dXJuIGxlbiA/IHsgeDogYS54IC8gbGVuLCB5OiBhLnkgLyBsZW4gfSA6IHZlYygpO1xufTtcblxuLyoqXG4gKiBHZXQgYSBkb3QgcHJvZHVjdCBvZiB2ZWN0b3JzXG4gKiBAcGFyYW0ge3ZlY30gYSBWZWN0b3IgYVxuICogQHBhcmFtIHt2ZWN9IGIgVmVjdG9yIGJcbiAqIEByZXR1cm4ge251bWJlcn0gYSDiiJkgYlxuICovXG52ZWMuZG90ID0gKGEsIGIpID0+IGEueCAqIGIueCArIGEueSAqIGIueTtcblxuLyoqXG4gKiBSb3RhdGUgYSB2ZWN0b3IgYnkgciByYWRpYW5zXG4gKiBAcGFyYW0ge3ZlY30gYSBUaGUgdmVjdG9yIHRvIHJvdGF0ZVxuICogQHBhcmFtIHtudW1iZXJ9IHIgVGhlIGFuZ2xlIHRvIHJvdGF0ZSBieSwgbWVhc3VyZWQgaW4gcmFkaWFuc1xuICogQHJldHVybiB7dmVjfSBBIHJvdGF0ZWQgdmVjdG9yXG4gKi9cbnZlYy5yb3QgPSAoYSwgcikgPT4ge1xuICBsZXQgcyA9IE1hdGguc2luKHIpLFxuICAgIGMgPSBNYXRoLmNvcyhyKTtcbiAgcmV0dXJuIHsgeDogYyAqIGEueCAtIHMgKiBhLnksIHk6IHMgKiBhLnggKyBjICogYS55IH07XG59XG5cbi8qKlxuICogQ2hlY2sgaWYgdHdvIHZlY3RvcnMgYXJlIGVxdWFsXG4gKiBAcGFyYW0ge3ZlY30gYSBWZWN0b3IgYVxuICogQHBhcmFtIHt2ZWN9IGIgVmVjdG9yIGJcbiAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgdmVjdG9ycyBhIGFuZCBiIGFyZSBlcXVhbCwgZmFsc2Ugb3RoZXJ3aXNlXG4gKi9cbnZlYy5lcSA9IChhLCBiKSA9PiBhLnggPT09IGIueCAmJiBhLnkgPT09IGIueTtcblxuLyoqXG4gKiBHZXQgdGhlIGFuZ2xlIG9mIGEgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlY30gYSBWZWN0b3IgYVxuICogQHJldHVybiB7bnVtYmVyfSBUaGUgYW5nbGUgb2YgdmVjdG9yIGEgaW4gcmFkaWFuc1xuICovXG52ZWMucmFkID0gYSA9PiBNYXRoLmF0YW4yKGEueSwgYS54KTtcblxuLyoqXG4gKiBDb3B5IGEgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlY30gYSBUaGUgdmVjdG9yIHRvIGNvcHlcbiAqIEByZXR1cm4ge3ZlY30gQSBjb3B5IG9mIHZlY3RvciBhXG4gKi9cbnZlYy5jcHkgPSBhID0+IHZlYyhhKTtcblxuLyoqXG4gKiBBIGZ1bmN0aW9uIHRvIGNhbGwgb24gZWFjaCBjb21wb25lbnQgb2YgYSB2ZWN0b3JcbiAqIEBjYWxsYmFjayB2ZWN0b3JNYXBDYWxsYmFja1xuICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlIFRoZSBjb21wb25lbnQgdmFsdWVcbiAqIEBwYXJhbSB7J3gnIHwgJ3knfSBsYWJlbCBUaGUgY29tcG9uZW50IGxhYmVsICh4IG9yIHkpXG4gKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBtYXBwZWQgY29tcG9uZW50XG4gKi9cblxuLyoqXG4gKiBDYWxsIGEgZnVuY3Rpb24gb24gZWFjaCBjb21wb25lbnQgb2YgYSB2ZWN0b3IgYW5kIGJ1aWxkIGEgbmV3IHZlY3RvciBmcm9tIHRoZSByZXN1bHRzXG4gKiBAcGFyYW0ge3ZlY30gYSBWZWN0b3IgYVxuICogQHBhcmFtIHt2ZWN0b3JNYXBDYWxsYmFja30gZiBUaGUgZnVuY3Rpb24gdG8gY2FsbCBvbiBlYWNoIGNvbXBvbmVudCBvZiB0aGUgdmVjdG9yXG4gKiBAcmV0dXJuIHt2ZWN9IFZlY3RvciBhIG1hcHBlZCB0aHJvdWdoIGZcbiAqL1xudmVjLm1hcCA9IChhLCBmKSA9PiAoeyB4OiBmKGEueCwgJ3gnKSwgeTogZihhLnksICd5JykgfSk7XG5cbi8qKlxuICogQ29udmVydCBhIHZlY3RvciBpbnRvIGEgc3RyaW5nXG4gKiBAcGFyYW0ge3ZlY30gYSBUaGUgdmVjdG9yIHRvIGNvbnZlcnRcbiAqIEBwYXJhbSB7c3RyaW5nfSBbcz0nLCAnXSBUaGUgc2VwYXJhdG9yIHN0cmluZ1xuICogQHJldHVybiB7c3RyaW5nfSBBIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgdmVjdG9yXG4gKi9cbnZlYy5zdHIgPSAoYSwgcyA9ICcsICcpID0+IGAke2EueH0ke3N9JHthLnl9YDtcblxuLyoqXG4gKiBBIG1hdHJpeFxuICogQHR5cGVkZWYge09iamVjdH0gbWF0XG4gKiBAcHJvcGVydHkge251bWJlcn0gbSBUaGUgbnVtYmVyIG9mIHJvd3MgaW4gdGhlIG1hdHJpeFxuICogQHByb3BlcnR5IHtudW1iZXJ9IG4gVGhlIG51bWJlciBvZiBjb2x1bW5zIGluIHRoZSBtYXRyaXhcbiAqIEBwcm9wZXJ0eSB7QXJyYXk8bnVtYmVyPn0gZW50cmllcyBUaGUgbWF0cml4IHZhbHVlc1xuICovXG5cbi8qKlxuICogQ3JlYXRlIGEgbmV3IG1hdHJpeFxuICogQHBhcmFtIHtudW1iZXJ9IFttPTRdIFRoZSBudW1iZXIgb2Ygcm93c1xuICogQHBhcmFtIHtudW1iZXJ9IFtuPTRdIFRoZSBudW1iZXIgb2YgY29sdW1uc1xuICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSBbZW50cmllcz1bXV0gTWF0cml4IHZhbHVlcyBpbiByZWFkaW5nIG9yZGVyXG4gKiBAcmV0dXJuIHttYXR9IEEgbmV3IG1hdHJpeFxuICovXG5jb25zdCBtYXQgPSAobSA9IDQsIG4gPSA0LCBlbnRyaWVzID0gW10pID0+ICh7XG4gIG0sIG4sXG4gIGVudHJpZXM6IGVudHJpZXMuY29uY2F0KEFycmF5KG0gKiBuKS5maWxsKDApKS5zbGljZSgwLCBtICogbilcbn0pO1xuXG4vKipcbiAqIEdldCBhbiBpZGVudGl0eSBtYXRyaXggb2Ygc2l6ZSBuXG4gKiBAcGFyYW0ge251bWJlcn0gbiBUaGUgc2l6ZSBvZiB0aGUgbWF0cml4XG4gKiBAcmV0dXJuIHttYXR9IEFuIGlkZW50aXR5IG1hdHJpeFxuICovXG5tYXQuaWRlbnRpdHkgPSBuID0+IG1hdChuLCBuLCBBcnJheShuICogbikuZmlsbCgwKS5tYXAoKHYsIGkpID0+ICsoTWF0aC5mbG9vcihpIC8gbikgPT09IGkgJSBuKSkpO1xuXG4vKipcbiAqIEdldCBhbiBlbnRyeSBmcm9tIGEgbWF0cml4XG4gKiBAcGFyYW0ge21hdH0gYSBNYXRyaXggYVxuICogQHBhcmFtIHtudW1iZXJ9IGkgVGhlIHJvdyBvZmZzZXRcbiAqIEBwYXJhbSB7bnVtYmVyfSBqIFRoZSBjb2x1bW4gb2Zmc2V0XG4gKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSB2YWx1ZSBhdCBwb3NpdGlvbiAoaSwgaikgaW4gbWF0cml4IGFcbiAqL1xubWF0LmdldCA9IChhLCBpLCBqKSA9PiBhLmVudHJpZXNbKGogLSAxKSArIChpIC0gMSkgKiBhLm5dO1xuXG4vKipcbiAqIFNldCBhbiBlbnRyeSBvZiBhIG1hdHJpeFxuICogQHBhcmFtIHttYXR9IGEgTWF0cml4IGFcbiAqIEBwYXJhbSB7bnVtYmVyfSBpIFRoZSByb3cgb2Zmc2V0XG4gKiBAcGFyYW0ge251bWJlcn0gaiBUaGUgY29sdW1uIG9mZnNldFxuICogQHBhcmFtIHtudW1iZXJ9IHYgVGhlIHZhbHVlIHRvIHNldCBpbiBtYXRyaXggYVxuICovXG5tYXQuc2V0ID0gKGEsIGksIGosIHYpID0+IHsgYS5lbnRyaWVzWyhqIC0gMSkgKyAoaSAtIDEpICogYS5uXSA9IHY7IH07XG5cbi8qKlxuICogR2V0IGEgcm93IGZyb20gYSBtYXRyaXggYXMgYW4gYXJyYXlcbiAqIEBwYXJhbSB7bWF0fSBhIE1hdHJpeCBhXG4gKiBAcGFyYW0ge251bWJlcn0gbSBUaGUgcm93IG9mZnNldFxuICogQHJldHVybiB7QXJyYXk8bnVtYmVyPn0gUm93IG0gZnJvbSBtYXRyaXggYVxuICovXG5tYXQucm93ID0gKGEsIG0pID0+IHtcbiAgY29uc3QgcyA9IChtIC0gMSkgKiBhLm47XG4gIHJldHVybiBhLmVudHJpZXMuc2xpY2UocywgcyArIGEubik7XG59O1xuXG4vKipcbiAqIEdldCBhIGNvbHVtbiBmcm9tIGEgbWF0cml4IGFzIGFuIGFycmF5XG4gKiBAcGFyYW0ge21hdH0gYSBNYXRyaXggYVxuICogQHBhcmFtIHtudW1iZXJ9IG4gVGhlIGNvbHVtbiBvZmZzZXRcbiAqIEByZXR1cm4ge0FycmF5PG51bWJlcj59IENvbHVtbiBuIGZyb20gbWF0cml4IGFcbiAqL1xubWF0LmNvbCA9IChhLCBuKSA9PiB0aW1lcyhpID0+IG1hdC5nZXQoYSwgKGkgKyAxKSwgbiksIGEubSk7XG5cbi8qKlxuICogQWRkIG1hdHJpY2VzXG4gKiBAcGFyYW0ge21hdH0gYSBNYXRyaXggYVxuICogQHBhcmFtIHttYXR9IGIgTWF0cml4IGJcbiAqIEByZXR1cm4ge21hdH0gYSArIGJcbiAqL1xubWF0LmFkZCA9IChhLCBiKSA9PiBhLm0gPT09IGIubSAmJiBhLm4gPT09IGIubiAmJiBtYXQubWFwKGEsICh2LCBpKSA9PiB2ICsgYi5lbnRyaWVzW2ldKTtcblxuLyoqXG4gKiBTdWJ0cmFjdCBtYXRyaWNlc1xuICogQHBhcmFtIHttYXR9IGEgTWF0cml4IGFcbiAqIEBwYXJhbSB7bWF0fSBiIE1hdHJpeCBiXG4gKiBAcmV0dXJuIHttYXR9IGEgLSBiXG4gKi9cbm1hdC5zdWIgPSAoYSwgYikgPT4gYS5tID09PSBiLm0gJiYgYS5uID09PSBiLm4gJiYgbWF0Lm1hcChhLCAodiwgaSkgPT4gdiAtIGIuZW50cmllc1tpXSk7XG5cbi8qKlxuICogTXVsdGlwbHkgbWF0cmljZXNcbiAqIEBwYXJhbSB7bWF0fSBhIE1hdHJpeCBhXG4gKiBAcGFyYW0ge21hdH0gYiBNYXRyaXggYlxuICogQHJldHVybiB7bWF0fGJvb2xlYW59IGFiIG9yIGZhbHNlIGlmIHRoZSBtYXRyaWNlcyBjYW5ub3QgYmUgbXVsdGlwbGllZFxuICovXG5tYXQubXVsID0gKGEsIGIpID0+IHtcbiAgaWYgKGEubiAhPT0gYi5tKSB7IHJldHVybiBmYWxzZTsgfVxuICBjb25zdCByZXN1bHQgPSBtYXQoYS5tLCBiLm4pO1xuICBmb3IgKGxldCBpID0gMTsgaSA8PSBhLm07IGkrKykge1xuICAgIGZvciAobGV0IGogPSAxOyBqIDw9IGIubjsgaisrKSB7XG4gICAgICBtYXQuc2V0KHJlc3VsdCwgaSwgaiwgZG90KG1hdC5yb3coYSwgaSksIG1hdC5jb2woYiwgaikpKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbi8qKlxuICogU2NhbGUgYSBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0fSBhIE1hdHJpeCBhXG4gKiBAcGFyYW0ge251bWJlcn0gYiBTY2FsYXIgYlxuICogQHJldHVybiB7bWF0fSBhICogYlxuICovXG5tYXQuc2NhbGUgPSAoYSwgYikgPT4gbWF0Lm1hcChhLCB2ID0+IHYgKiBiKTtcblxuLyoqXG4gKiBUcmFuc3Bvc2UgYSBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0fSBhIFRoZSBtYXRyaXggdG8gdHJhbnNwb3NlXG4gKiBAcmV0dXJuIHttYXR9IEEgdHJhbnNwb3NlZCBtYXRyaXhcbiAqL1xubWF0LnRyYW5zID0gYSA9PiBtYXQoYS5uLCBhLm0sIHRpbWVzKGkgPT4gbWF0LmNvbChhLCAoaSArIDEpKSwgYS5uKS5mbGF0KCkpO1xuXG4vKipcbiAqIEdldCB0aGUgbWlub3Igb2YgYSBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0fSBhIE1hdHJpeCBhXG4gKiBAcGFyYW0ge251bWJlcn0gaSBUaGUgcm93IG9mZnNldFxuICogQHBhcmFtIHtudW1iZXJ9IGogVGhlIGNvbHVtbiBvZmZzZXRcbiAqIEByZXR1cm4ge21hdHxib29sZWFufSBUaGUgKGksIGopIG1pbm9yIG9mIG1hdHJpeCBhIG9yIGZhbHNlIGlmIHRoZSBtYXRyaXggaXMgbm90IHNxdWFyZVxuICovXG5tYXQubWlub3IgPSAoYSwgaSwgaikgPT4ge1xuICBpZiAoYS5tICE9PSBhLm4pIHsgcmV0dXJuIGZhbHNlOyB9XG4gIGNvbnN0IGVudHJpZXMgPSBbXTtcbiAgZm9yIChsZXQgaWkgPSAxOyBpaSA8PSBhLm07IGlpKyspIHtcbiAgICBpZiAoaWkgPT09IGkpIHsgY29udGludWU7IH1cbiAgICBmb3IgKGxldCBqaiA9IDE7IGpqIDw9IGEubjsgamorKykge1xuICAgICAgaWYgKGpqID09PSBqKSB7IGNvbnRpbnVlOyB9XG4gICAgICBlbnRyaWVzLnB1c2gobWF0LmdldChhLCBpaSwgamopKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG1hdChhLm0gLSAxLCBhLm4gLSAxLCBlbnRyaWVzKTtcbn07XG5cbi8qKlxuICogR2V0IHRoZSBkZXRlcm1pbmFudCBvZiBhIG1hdHJpeFxuICogQHBhcmFtIHttYXR9IGEgTWF0cml4IGFcbiAqIEByZXR1cm4ge251bWJlcnxib29sZWFufSB8YXwgb3IgZmFsc2UgaWYgdGhlIG1hdHJpeCBpcyBub3Qgc3F1YXJlXG4gKi9cbm1hdC5kZXQgPSBhID0+IHtcbiAgaWYgKGEubSAhPT0gYS5uKSB7IHJldHVybiBmYWxzZTsgfVxuICBpZiAoYS5tID09PSAxKSB7XG4gICAgcmV0dXJuIGEuZW50cmllc1swXTtcbiAgfVxuICBpZiAoYS5tID09PSAyKSB7XG4gICAgcmV0dXJuIGEuZW50cmllc1swXSAqIGEuZW50cmllc1szXSAtIGEuZW50cmllc1sxXSAqIGEuZW50cmllc1syXTtcbiAgfVxuICBsZXQgdG90YWwgPSAwLCBzaWduID0gMTtcbiAgZm9yIChsZXQgaiA9IDE7IGogPD0gYS5uOyBqKyspIHtcbiAgICB0b3RhbCArPSBzaWduICogYS5lbnRyaWVzW2ogLSAxXSAqIG1hdC5kZXQobWF0Lm1pbm9yKGEsIDEsIGopKTtcbiAgICBzaWduICo9IC0xO1xuICB9XG4gIHJldHVybiB0b3RhbDtcbn07XG5cbi8qKlxuICogTm9ybWFsaXNlIGEgbWF0cml4XG4gKiBAcGFyYW0ge21hdH0gYSBUaGUgbWF0cml4IHRvIG5vcm1hbGlzZVxuICogQHJldHVybiB7bWF0fGJvb2xlYW59IF5hIG9yIGZhbHNlIGlmIHRoZSBtYXRyaXggaXMgbm90IHNxdWFyZVxuICovXG5tYXQubm9yID0gYSA9PiB7XG4gIGlmIChhLm0gIT09IGEubikgeyByZXR1cm4gZmFsc2U7IH1cbiAgY29uc3QgZCA9IG1hdC5kZXQoYSk7XG4gIHJldHVybiBtYXQubWFwKGEsIGkgPT4gaSAqIGQpO1xufTtcblxuLyoqXG4gKiBHZXQgdGhlIGFkanVnYXRlIG9mIGEgbWF0cml4XG4gKiBAcGFyYW0ge21hdH0gYSBUaGUgbWF0cml4IGZyb20gd2hpY2ggdG8gZ2V0IHRoZSBhZGp1Z2F0ZVxuICogQHJldHVybiB7bWF0fSBUaGUgYWRqdWdhdGUgb2YgYVxuICovXG5tYXQuYWRqID0gYSA9PiB7XG4gIGNvbnN0IG1pbm9ycyA9IG1hdChhLm0sIGEubik7XG4gIGZvciAobGV0IGkgPSAxOyBpIDw9IGEubTsgaSsrKSB7XG4gICAgZm9yIChsZXQgaiA9IDE7IGogPD0gYS5uOyBqKyspIHtcbiAgICAgIG1hdC5zZXQobWlub3JzLCBpLCBqLCBtYXQuZGV0KG1hdC5taW5vcihhLCBpLCBqKSkpO1xuICAgIH1cbiAgfVxuICBjb25zdCBjb2ZhY3RvcnMgPSBtYXQubWFwKG1pbm9ycywgKHYsIGkpID0+IHYgKiAoaSAlIDIgPyAtMSA6IDEpKTtcbiAgcmV0dXJuIG1hdC50cmFucyhjb2ZhY3RvcnMpO1xufTtcblxuLyoqXG4gKiBHZXQgdGhlIGludmVyc2Ugb2YgYSBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0fSBhIFRoZSBtYXRyaXggdG8gaW52ZXJ0XG4gKiBAcmV0dXJuIHttYXR8Ym9vbGVhbn0gYV4tMSBvciBmYWxzZSBpZiB0aGUgbWF0cml4IGhhcyBubyBpbnZlcnNlXG4gKi9cbm1hdC5pbnYgPSBhID0+IHtcbiAgaWYgKGEubSAhPT0gYS5uKSB7IHJldHVybiBmYWxzZTsgfVxuICBjb25zdCBkID0gbWF0LmRldChhKTtcbiAgaWYgKGQgPT09IDApIHsgcmV0dXJuIGZhbHNlOyB9XG4gIHJldHVybiBtYXQuc2NhbGUobWF0LmFkaihhKSwgMSAvIGQpO1xufTtcblxuLyoqXG4gKiBDaGVjayBpZiB0d28gbWF0cmljZXMgYXJlIGVxdWFsXG4gKiBAcGFyYW0ge21hdH0gYSBNYXRyaXggYVxuICogQHBhcmFtIHttYXR9IGIgTWF0cml4IGJcbiAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgbWF0cmljZXMgYSBhbmQgYiBhcmUgaWRlbnRpY2FsLCBmYWxzZSBvdGhlcndpc2VcbiAqL1xubWF0LmVxID0gKGEsIGIpID0+IGEubSA9PT0gYi5tICYmIGEubiA9PT0gYi5uICYmIG1hdC5zdHIoYSkgPT09IG1hdC5zdHIoYik7XG5cbi8qKlxuICogQ29weSBhIG1hdHJpeFxuICogQHBhcmFtIHttYXR9IGEgVGhlIG1hdHJpeCB0byBjb3B5XG4gKiBAcmV0dXJuIHttYXR9IEEgY29weSBvZiBtYXRyaXggYVxuICovXG5tYXQuY3B5ID0gYSA9PiBtYXQoYS5tLCBhLm4sIFsuLi5hLmVudHJpZXNdKTtcblxuLyoqXG4gKiBBIGZ1bmN0aW9uIHRvIGNhbGwgb24gZWFjaCBlbnRyeSBvZiBhIG1hdHJpeFxuICogQGNhbGxiYWNrIG1hdHJpeE1hcENhbGxiYWNrXG4gKiBAcGFyYW0ge251bWJlcn0gdmFsdWUgVGhlIGVudHJ5IHZhbHVlXG4gKiBAcGFyYW0ge251bWJlcn0gaW5kZXggVGhlIGVudHJ5IGluZGV4XG4gKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IGVudHJpZXMgVGhlIGFycmF5IG9mIG1hdHJpeCBlbnRyaWVzXG4gKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBtYXBwZWQgZW50cnlcbiAqL1xuXG4vKipcbiAqIENhbGwgYSBmdW5jdGlvbiBvbiBlYWNoIGVudHJ5IG9mIGEgbWF0cml4IGFuZCBidWlsZCBhIG5ldyBtYXRyaXggZnJvbSB0aGUgcmVzdWx0c1xuICogQHBhcmFtIHttYXR9IGEgTWF0cml4IGFcbiAqIEBwYXJhbSB7bWF0cml4TWFwQ2FsbGJhY2t9IGYgVGhlIGZ1bmN0aW9uIHRvIGNhbGwgb24gZWFjaCBlbnRyeSBvZiB0aGUgbWF0cml4XG4gKiBAcmV0dXJuIHttYXR9IE1hdHJpeCBhIG1hcHBlZCB0aHJvdWdoIGZcbiAqL1xubWF0Lm1hcCA9IChhLCBmKSA9PiBtYXQoYS5tLCBhLm4sIGEuZW50cmllcy5tYXAoZikpO1xuXG4vKipcbiAqIENvbnZlcnQgYSBtYXRyaXggaW50byBhIHN0cmluZ1xuICogQHBhcmFtIHttYXR9IGEgVGhlIG1hdHJpeCB0byBjb252ZXJ0XG4gKiBAcGFyYW0ge3N0cmluZ30gW21zPScsICddIFRoZSBzZXBhcmF0b3Igc3RyaW5nIGZvciBjb2x1bW5zXG4gKiBAcGFyYW0ge3N0cmluZ30gW25zPSdcXG4nXSBUaGUgc2VwYXJhdG9yIHN0cmluZyBmb3Igcm93c1xuICogQHJldHVybiB7c3RyaW5nfSBBIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgbWF0cml4XG4gKi9cbm1hdC5zdHIgPSAoYSwgbXMgPSAnLCAnLCBucyA9ICdcXG4nKSA9PiBjaHVuayhhLmVudHJpZXMsIGEubikubWFwKHIgPT4gci5qb2luKG1zKSkuam9pbihucyk7XG5cbmlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHsgdmVjLCBtYXQgfTtcbn1cbiIsIi8qKlxuICogZGF0LWd1aSBKYXZhU2NyaXB0IENvbnRyb2xsZXIgTGlicmFyeVxuICogaHR0cHM6Ly9naXRodWIuY29tL2RhdGFhcnRzL2RhdC5ndWlcbiAqXG4gKiBDb3B5cmlnaHQgMjAxMSBEYXRhIEFydHMgVGVhbSwgR29vZ2xlIENyZWF0aXZlIExhYlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqL1xuXG5mdW5jdGlvbiBfX18kaW5zZXJ0U3R5bGUoY3NzKSB7XG4gIGlmICghY3NzKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG5cbiAgc3R5bGUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQvY3NzJyk7XG4gIHN0eWxlLmlubmVySFRNTCA9IGNzcztcbiAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cbiAgcmV0dXJuIGNzcztcbn1cblxuZnVuY3Rpb24gY29sb3JUb1N0cmluZyAoY29sb3IsIGZvcmNlQ1NTSGV4KSB7XG4gIHZhciBjb2xvckZvcm1hdCA9IGNvbG9yLl9fc3RhdGUuY29udmVyc2lvbk5hbWUudG9TdHJpbmcoKTtcbiAgdmFyIHIgPSBNYXRoLnJvdW5kKGNvbG9yLnIpO1xuICB2YXIgZyA9IE1hdGgucm91bmQoY29sb3IuZyk7XG4gIHZhciBiID0gTWF0aC5yb3VuZChjb2xvci5iKTtcbiAgdmFyIGEgPSBjb2xvci5hO1xuICB2YXIgaCA9IE1hdGgucm91bmQoY29sb3IuaCk7XG4gIHZhciBzID0gY29sb3Iucy50b0ZpeGVkKDEpO1xuICB2YXIgdiA9IGNvbG9yLnYudG9GaXhlZCgxKTtcbiAgaWYgKGZvcmNlQ1NTSGV4IHx8IGNvbG9yRm9ybWF0ID09PSAnVEhSRUVfQ0hBUl9IRVgnIHx8IGNvbG9yRm9ybWF0ID09PSAnU0lYX0NIQVJfSEVYJykge1xuICAgIHZhciBzdHIgPSBjb2xvci5oZXgudG9TdHJpbmcoMTYpO1xuICAgIHdoaWxlIChzdHIubGVuZ3RoIDwgNikge1xuICAgICAgc3RyID0gJzAnICsgc3RyO1xuICAgIH1cbiAgICByZXR1cm4gJyMnICsgc3RyO1xuICB9IGVsc2UgaWYgKGNvbG9yRm9ybWF0ID09PSAnQ1NTX1JHQicpIHtcbiAgICByZXR1cm4gJ3JnYignICsgciArICcsJyArIGcgKyAnLCcgKyBiICsgJyknO1xuICB9IGVsc2UgaWYgKGNvbG9yRm9ybWF0ID09PSAnQ1NTX1JHQkEnKSB7XG4gICAgcmV0dXJuICdyZ2JhKCcgKyByICsgJywnICsgZyArICcsJyArIGIgKyAnLCcgKyBhICsgJyknO1xuICB9IGVsc2UgaWYgKGNvbG9yRm9ybWF0ID09PSAnSEVYJykge1xuICAgIHJldHVybiAnMHgnICsgY29sb3IuaGV4LnRvU3RyaW5nKDE2KTtcbiAgfSBlbHNlIGlmIChjb2xvckZvcm1hdCA9PT0gJ1JHQl9BUlJBWScpIHtcbiAgICByZXR1cm4gJ1snICsgciArICcsJyArIGcgKyAnLCcgKyBiICsgJ10nO1xuICB9IGVsc2UgaWYgKGNvbG9yRm9ybWF0ID09PSAnUkdCQV9BUlJBWScpIHtcbiAgICByZXR1cm4gJ1snICsgciArICcsJyArIGcgKyAnLCcgKyBiICsgJywnICsgYSArICddJztcbiAgfSBlbHNlIGlmIChjb2xvckZvcm1hdCA9PT0gJ1JHQl9PQkonKSB7XG4gICAgcmV0dXJuICd7cjonICsgciArICcsZzonICsgZyArICcsYjonICsgYiArICd9JztcbiAgfSBlbHNlIGlmIChjb2xvckZvcm1hdCA9PT0gJ1JHQkFfT0JKJykge1xuICAgIHJldHVybiAne3I6JyArIHIgKyAnLGc6JyArIGcgKyAnLGI6JyArIGIgKyAnLGE6JyArIGEgKyAnfSc7XG4gIH0gZWxzZSBpZiAoY29sb3JGb3JtYXQgPT09ICdIU1ZfT0JKJykge1xuICAgIHJldHVybiAne2g6JyArIGggKyAnLHM6JyArIHMgKyAnLHY6JyArIHYgKyAnfSc7XG4gIH0gZWxzZSBpZiAoY29sb3JGb3JtYXQgPT09ICdIU1ZBX09CSicpIHtcbiAgICByZXR1cm4gJ3toOicgKyBoICsgJyxzOicgKyBzICsgJyx2OicgKyB2ICsgJyxhOicgKyBhICsgJ30nO1xuICB9XG4gIHJldHVybiAndW5rbm93biBmb3JtYXQnO1xufVxuXG52YXIgQVJSX0VBQ0ggPSBBcnJheS5wcm90b3R5cGUuZm9yRWFjaDtcbnZhciBBUlJfU0xJQ0UgPSBBcnJheS5wcm90b3R5cGUuc2xpY2U7XG52YXIgQ29tbW9uID0ge1xuICBCUkVBSzoge30sXG4gIGV4dGVuZDogZnVuY3Rpb24gZXh0ZW5kKHRhcmdldCkge1xuICAgIHRoaXMuZWFjaChBUlJfU0xJQ0UuY2FsbChhcmd1bWVudHMsIDEpLCBmdW5jdGlvbiAob2JqKSB7XG4gICAgICB2YXIga2V5cyA9IHRoaXMuaXNPYmplY3Qob2JqKSA/IE9iamVjdC5rZXlzKG9iaikgOiBbXTtcbiAgICAgIGtleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIGlmICghdGhpcy5pc1VuZGVmaW5lZChvYmpba2V5XSkpIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IG9ialtrZXldO1xuICAgICAgICB9XG4gICAgICB9LmJpbmQodGhpcykpO1xuICAgIH0sIHRoaXMpO1xuICAgIHJldHVybiB0YXJnZXQ7XG4gIH0sXG4gIGRlZmF1bHRzOiBmdW5jdGlvbiBkZWZhdWx0cyh0YXJnZXQpIHtcbiAgICB0aGlzLmVhY2goQVJSX1NMSUNFLmNhbGwoYXJndW1lbnRzLCAxKSwgZnVuY3Rpb24gKG9iaikge1xuICAgICAgdmFyIGtleXMgPSB0aGlzLmlzT2JqZWN0KG9iaikgPyBPYmplY3Qua2V5cyhvYmopIDogW107XG4gICAgICBrZXlzLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICBpZiAodGhpcy5pc1VuZGVmaW5lZCh0YXJnZXRba2V5XSkpIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IG9ialtrZXldO1xuICAgICAgICB9XG4gICAgICB9LmJpbmQodGhpcykpO1xuICAgIH0sIHRoaXMpO1xuICAgIHJldHVybiB0YXJnZXQ7XG4gIH0sXG4gIGNvbXBvc2U6IGZ1bmN0aW9uIGNvbXBvc2UoKSB7XG4gICAgdmFyIHRvQ2FsbCA9IEFSUl9TTElDRS5jYWxsKGFyZ3VtZW50cyk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBhcmdzID0gQVJSX1NMSUNFLmNhbGwoYXJndW1lbnRzKTtcbiAgICAgIGZvciAodmFyIGkgPSB0b0NhbGwubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgYXJncyA9IFt0b0NhbGxbaV0uYXBwbHkodGhpcywgYXJncyldO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGFyZ3NbMF07XG4gICAgfTtcbiAgfSxcbiAgZWFjaDogZnVuY3Rpb24gZWFjaChvYmosIGl0ciwgc2NvcGUpIHtcbiAgICBpZiAoIW9iaikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoQVJSX0VBQ0ggJiYgb2JqLmZvckVhY2ggJiYgb2JqLmZvckVhY2ggPT09IEFSUl9FQUNIKSB7XG4gICAgICBvYmouZm9yRWFjaChpdHIsIHNjb3BlKTtcbiAgICB9IGVsc2UgaWYgKG9iai5sZW5ndGggPT09IG9iai5sZW5ndGggKyAwKSB7XG4gICAgICB2YXIga2V5ID0gdm9pZCAwO1xuICAgICAgdmFyIGwgPSB2b2lkIDA7XG4gICAgICBmb3IgKGtleSA9IDAsIGwgPSBvYmoubGVuZ3RoOyBrZXkgPCBsOyBrZXkrKykge1xuICAgICAgICBpZiAoa2V5IGluIG9iaiAmJiBpdHIuY2FsbChzY29wZSwgb2JqW2tleV0sIGtleSkgPT09IHRoaXMuQlJFQUspIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZm9yICh2YXIgX2tleSBpbiBvYmopIHtcbiAgICAgICAgaWYgKGl0ci5jYWxsKHNjb3BlLCBvYmpbX2tleV0sIF9rZXkpID09PSB0aGlzLkJSRUFLKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9LFxuICBkZWZlcjogZnVuY3Rpb24gZGVmZXIoZm5jKSB7XG4gICAgc2V0VGltZW91dChmbmMsIDApO1xuICB9LFxuICBkZWJvdW5jZTogZnVuY3Rpb24gZGVib3VuY2UoZnVuYywgdGhyZXNob2xkLCBjYWxsSW1tZWRpYXRlbHkpIHtcbiAgICB2YXIgdGltZW91dCA9IHZvaWQgMDtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIG9iaiA9IHRoaXM7XG4gICAgICB2YXIgYXJncyA9IGFyZ3VtZW50cztcbiAgICAgIGZ1bmN0aW9uIGRlbGF5ZWQoKSB7XG4gICAgICAgIHRpbWVvdXQgPSBudWxsO1xuICAgICAgICBpZiAoIWNhbGxJbW1lZGlhdGVseSkgZnVuYy5hcHBseShvYmosIGFyZ3MpO1xuICAgICAgfVxuICAgICAgdmFyIGNhbGxOb3cgPSBjYWxsSW1tZWRpYXRlbHkgfHwgIXRpbWVvdXQ7XG4gICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgICB0aW1lb3V0ID0gc2V0VGltZW91dChkZWxheWVkLCB0aHJlc2hvbGQpO1xuICAgICAgaWYgKGNhbGxOb3cpIHtcbiAgICAgICAgZnVuYy5hcHBseShvYmosIGFyZ3MpO1xuICAgICAgfVxuICAgIH07XG4gIH0sXG4gIHRvQXJyYXk6IGZ1bmN0aW9uIHRvQXJyYXkob2JqKSB7XG4gICAgaWYgKG9iai50b0FycmF5KSByZXR1cm4gb2JqLnRvQXJyYXkoKTtcbiAgICByZXR1cm4gQVJSX1NMSUNFLmNhbGwob2JqKTtcbiAgfSxcbiAgaXNVbmRlZmluZWQ6IGZ1bmN0aW9uIGlzVW5kZWZpbmVkKG9iaikge1xuICAgIHJldHVybiBvYmogPT09IHVuZGVmaW5lZDtcbiAgfSxcbiAgaXNOdWxsOiBmdW5jdGlvbiBpc051bGwob2JqKSB7XG4gICAgcmV0dXJuIG9iaiA9PT0gbnVsbDtcbiAgfSxcbiAgaXNOYU46IGZ1bmN0aW9uIChfaXNOYU4pIHtcbiAgICBmdW5jdGlvbiBpc05hTihfeCkge1xuICAgICAgcmV0dXJuIF9pc05hTi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgICBpc05hTi50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBfaXNOYU4udG9TdHJpbmcoKTtcbiAgICB9O1xuICAgIHJldHVybiBpc05hTjtcbiAgfShmdW5jdGlvbiAob2JqKSB7XG4gICAgcmV0dXJuIGlzTmFOKG9iaik7XG4gIH0pLFxuICBpc0FycmF5OiBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gb2JqLmNvbnN0cnVjdG9yID09PSBBcnJheTtcbiAgfSxcbiAgaXNPYmplY3Q6IGZ1bmN0aW9uIGlzT2JqZWN0KG9iaikge1xuICAgIHJldHVybiBvYmogPT09IE9iamVjdChvYmopO1xuICB9LFxuICBpc051bWJlcjogZnVuY3Rpb24gaXNOdW1iZXIob2JqKSB7XG4gICAgcmV0dXJuIG9iaiA9PT0gb2JqICsgMDtcbiAgfSxcbiAgaXNTdHJpbmc6IGZ1bmN0aW9uIGlzU3RyaW5nKG9iaikge1xuICAgIHJldHVybiBvYmogPT09IG9iaiArICcnO1xuICB9LFxuICBpc0Jvb2xlYW46IGZ1bmN0aW9uIGlzQm9vbGVhbihvYmopIHtcbiAgICByZXR1cm4gb2JqID09PSBmYWxzZSB8fCBvYmogPT09IHRydWU7XG4gIH0sXG4gIGlzRnVuY3Rpb246IGZ1bmN0aW9uIGlzRnVuY3Rpb24ob2JqKSB7XG4gICAgcmV0dXJuIG9iaiBpbnN0YW5jZW9mIEZ1bmN0aW9uO1xuICB9XG59O1xuXG52YXIgSU5URVJQUkVUQVRJT05TID0gW1xue1xuICBsaXRtdXM6IENvbW1vbi5pc1N0cmluZyxcbiAgY29udmVyc2lvbnM6IHtcbiAgICBUSFJFRV9DSEFSX0hFWDoge1xuICAgICAgcmVhZDogZnVuY3Rpb24gcmVhZChvcmlnaW5hbCkge1xuICAgICAgICB2YXIgdGVzdCA9IG9yaWdpbmFsLm1hdGNoKC9eIyhbQS1GMC05XSkoW0EtRjAtOV0pKFtBLUYwLTldKSQvaSk7XG4gICAgICAgIGlmICh0ZXN0ID09PSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgc3BhY2U6ICdIRVgnLFxuICAgICAgICAgIGhleDogcGFyc2VJbnQoJzB4JyArIHRlc3RbMV0udG9TdHJpbmcoKSArIHRlc3RbMV0udG9TdHJpbmcoKSArIHRlc3RbMl0udG9TdHJpbmcoKSArIHRlc3RbMl0udG9TdHJpbmcoKSArIHRlc3RbM10udG9TdHJpbmcoKSArIHRlc3RbM10udG9TdHJpbmcoKSwgMClcbiAgICAgICAgfTtcbiAgICAgIH0sXG4gICAgICB3cml0ZTogY29sb3JUb1N0cmluZ1xuICAgIH0sXG4gICAgU0lYX0NIQVJfSEVYOiB7XG4gICAgICByZWFkOiBmdW5jdGlvbiByZWFkKG9yaWdpbmFsKSB7XG4gICAgICAgIHZhciB0ZXN0ID0gb3JpZ2luYWwubWF0Y2goL14jKFtBLUYwLTldezZ9KSQvaSk7XG4gICAgICAgIGlmICh0ZXN0ID09PSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgc3BhY2U6ICdIRVgnLFxuICAgICAgICAgIGhleDogcGFyc2VJbnQoJzB4JyArIHRlc3RbMV0udG9TdHJpbmcoKSwgMClcbiAgICAgICAgfTtcbiAgICAgIH0sXG4gICAgICB3cml0ZTogY29sb3JUb1N0cmluZ1xuICAgIH0sXG4gICAgQ1NTX1JHQjoge1xuICAgICAgcmVhZDogZnVuY3Rpb24gcmVhZChvcmlnaW5hbCkge1xuICAgICAgICB2YXIgdGVzdCA9IG9yaWdpbmFsLm1hdGNoKC9ecmdiXFwoXFxzKihcXFMrKVxccyosXFxzKihcXFMrKVxccyosXFxzKihcXFMrKVxccypcXCkvKTtcbiAgICAgICAgaWYgKHRlc3QgPT09IG51bGwpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBzcGFjZTogJ1JHQicsXG4gICAgICAgICAgcjogcGFyc2VGbG9hdCh0ZXN0WzFdKSxcbiAgICAgICAgICBnOiBwYXJzZUZsb2F0KHRlc3RbMl0pLFxuICAgICAgICAgIGI6IHBhcnNlRmxvYXQodGVzdFszXSlcbiAgICAgICAgfTtcbiAgICAgIH0sXG4gICAgICB3cml0ZTogY29sb3JUb1N0cmluZ1xuICAgIH0sXG4gICAgQ1NTX1JHQkE6IHtcbiAgICAgIHJlYWQ6IGZ1bmN0aW9uIHJlYWQob3JpZ2luYWwpIHtcbiAgICAgICAgdmFyIHRlc3QgPSBvcmlnaW5hbC5tYXRjaCgvXnJnYmFcXChcXHMqKFxcUyspXFxzKixcXHMqKFxcUyspXFxzKixcXHMqKFxcUyspXFxzKixcXHMqKFxcUyspXFxzKlxcKS8pO1xuICAgICAgICBpZiAodGVzdCA9PT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHNwYWNlOiAnUkdCJyxcbiAgICAgICAgICByOiBwYXJzZUZsb2F0KHRlc3RbMV0pLFxuICAgICAgICAgIGc6IHBhcnNlRmxvYXQodGVzdFsyXSksXG4gICAgICAgICAgYjogcGFyc2VGbG9hdCh0ZXN0WzNdKSxcbiAgICAgICAgICBhOiBwYXJzZUZsb2F0KHRlc3RbNF0pXG4gICAgICAgIH07XG4gICAgICB9LFxuICAgICAgd3JpdGU6IGNvbG9yVG9TdHJpbmdcbiAgICB9XG4gIH1cbn0sXG57XG4gIGxpdG11czogQ29tbW9uLmlzTnVtYmVyLFxuICBjb252ZXJzaW9uczoge1xuICAgIEhFWDoge1xuICAgICAgcmVhZDogZnVuY3Rpb24gcmVhZChvcmlnaW5hbCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHNwYWNlOiAnSEVYJyxcbiAgICAgICAgICBoZXg6IG9yaWdpbmFsLFxuICAgICAgICAgIGNvbnZlcnNpb25OYW1lOiAnSEVYJ1xuICAgICAgICB9O1xuICAgICAgfSxcbiAgICAgIHdyaXRlOiBmdW5jdGlvbiB3cml0ZShjb2xvcikge1xuICAgICAgICByZXR1cm4gY29sb3IuaGV4O1xuICAgICAgfVxuICAgIH1cbiAgfVxufSxcbntcbiAgbGl0bXVzOiBDb21tb24uaXNBcnJheSxcbiAgY29udmVyc2lvbnM6IHtcbiAgICBSR0JfQVJSQVk6IHtcbiAgICAgIHJlYWQ6IGZ1bmN0aW9uIHJlYWQob3JpZ2luYWwpIHtcbiAgICAgICAgaWYgKG9yaWdpbmFsLmxlbmd0aCAhPT0gMykge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHNwYWNlOiAnUkdCJyxcbiAgICAgICAgICByOiBvcmlnaW5hbFswXSxcbiAgICAgICAgICBnOiBvcmlnaW5hbFsxXSxcbiAgICAgICAgICBiOiBvcmlnaW5hbFsyXVxuICAgICAgICB9O1xuICAgICAgfSxcbiAgICAgIHdyaXRlOiBmdW5jdGlvbiB3cml0ZShjb2xvcikge1xuICAgICAgICByZXR1cm4gW2NvbG9yLnIsIGNvbG9yLmcsIGNvbG9yLmJdO1xuICAgICAgfVxuICAgIH0sXG4gICAgUkdCQV9BUlJBWToge1xuICAgICAgcmVhZDogZnVuY3Rpb24gcmVhZChvcmlnaW5hbCkge1xuICAgICAgICBpZiAob3JpZ2luYWwubGVuZ3RoICE9PSA0KSByZXR1cm4gZmFsc2U7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgc3BhY2U6ICdSR0InLFxuICAgICAgICAgIHI6IG9yaWdpbmFsWzBdLFxuICAgICAgICAgIGc6IG9yaWdpbmFsWzFdLFxuICAgICAgICAgIGI6IG9yaWdpbmFsWzJdLFxuICAgICAgICAgIGE6IG9yaWdpbmFsWzNdXG4gICAgICAgIH07XG4gICAgICB9LFxuICAgICAgd3JpdGU6IGZ1bmN0aW9uIHdyaXRlKGNvbG9yKSB7XG4gICAgICAgIHJldHVybiBbY29sb3IuciwgY29sb3IuZywgY29sb3IuYiwgY29sb3IuYV07XG4gICAgICB9XG4gICAgfVxuICB9XG59LFxue1xuICBsaXRtdXM6IENvbW1vbi5pc09iamVjdCxcbiAgY29udmVyc2lvbnM6IHtcbiAgICBSR0JBX09CSjoge1xuICAgICAgcmVhZDogZnVuY3Rpb24gcmVhZChvcmlnaW5hbCkge1xuICAgICAgICBpZiAoQ29tbW9uLmlzTnVtYmVyKG9yaWdpbmFsLnIpICYmIENvbW1vbi5pc051bWJlcihvcmlnaW5hbC5nKSAmJiBDb21tb24uaXNOdW1iZXIob3JpZ2luYWwuYikgJiYgQ29tbW9uLmlzTnVtYmVyKG9yaWdpbmFsLmEpKSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHNwYWNlOiAnUkdCJyxcbiAgICAgICAgICAgIHI6IG9yaWdpbmFsLnIsXG4gICAgICAgICAgICBnOiBvcmlnaW5hbC5nLFxuICAgICAgICAgICAgYjogb3JpZ2luYWwuYixcbiAgICAgICAgICAgIGE6IG9yaWdpbmFsLmFcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH0sXG4gICAgICB3cml0ZTogZnVuY3Rpb24gd3JpdGUoY29sb3IpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICByOiBjb2xvci5yLFxuICAgICAgICAgIGc6IGNvbG9yLmcsXG4gICAgICAgICAgYjogY29sb3IuYixcbiAgICAgICAgICBhOiBjb2xvci5hXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfSxcbiAgICBSR0JfT0JKOiB7XG4gICAgICByZWFkOiBmdW5jdGlvbiByZWFkKG9yaWdpbmFsKSB7XG4gICAgICAgIGlmIChDb21tb24uaXNOdW1iZXIob3JpZ2luYWwucikgJiYgQ29tbW9uLmlzTnVtYmVyKG9yaWdpbmFsLmcpICYmIENvbW1vbi5pc051bWJlcihvcmlnaW5hbC5iKSkge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzcGFjZTogJ1JHQicsXG4gICAgICAgICAgICByOiBvcmlnaW5hbC5yLFxuICAgICAgICAgICAgZzogb3JpZ2luYWwuZyxcbiAgICAgICAgICAgIGI6IG9yaWdpbmFsLmJcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH0sXG4gICAgICB3cml0ZTogZnVuY3Rpb24gd3JpdGUoY29sb3IpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICByOiBjb2xvci5yLFxuICAgICAgICAgIGc6IGNvbG9yLmcsXG4gICAgICAgICAgYjogY29sb3IuYlxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH0sXG4gICAgSFNWQV9PQko6IHtcbiAgICAgIHJlYWQ6IGZ1bmN0aW9uIHJlYWQob3JpZ2luYWwpIHtcbiAgICAgICAgaWYgKENvbW1vbi5pc051bWJlcihvcmlnaW5hbC5oKSAmJiBDb21tb24uaXNOdW1iZXIob3JpZ2luYWwucykgJiYgQ29tbW9uLmlzTnVtYmVyKG9yaWdpbmFsLnYpICYmIENvbW1vbi5pc051bWJlcihvcmlnaW5hbC5hKSkge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzcGFjZTogJ0hTVicsXG4gICAgICAgICAgICBoOiBvcmlnaW5hbC5oLFxuICAgICAgICAgICAgczogb3JpZ2luYWwucyxcbiAgICAgICAgICAgIHY6IG9yaWdpbmFsLnYsXG4gICAgICAgICAgICBhOiBvcmlnaW5hbC5hXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9LFxuICAgICAgd3JpdGU6IGZ1bmN0aW9uIHdyaXRlKGNvbG9yKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgaDogY29sb3IuaCxcbiAgICAgICAgICBzOiBjb2xvci5zLFxuICAgICAgICAgIHY6IGNvbG9yLnYsXG4gICAgICAgICAgYTogY29sb3IuYVxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH0sXG4gICAgSFNWX09CSjoge1xuICAgICAgcmVhZDogZnVuY3Rpb24gcmVhZChvcmlnaW5hbCkge1xuICAgICAgICBpZiAoQ29tbW9uLmlzTnVtYmVyKG9yaWdpbmFsLmgpICYmIENvbW1vbi5pc051bWJlcihvcmlnaW5hbC5zKSAmJiBDb21tb24uaXNOdW1iZXIob3JpZ2luYWwudikpIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc3BhY2U6ICdIU1YnLFxuICAgICAgICAgICAgaDogb3JpZ2luYWwuaCxcbiAgICAgICAgICAgIHM6IG9yaWdpbmFsLnMsXG4gICAgICAgICAgICB2OiBvcmlnaW5hbC52XG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9LFxuICAgICAgd3JpdGU6IGZ1bmN0aW9uIHdyaXRlKGNvbG9yKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgaDogY29sb3IuaCxcbiAgICAgICAgICBzOiBjb2xvci5zLFxuICAgICAgICAgIHY6IGNvbG9yLnZcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1dO1xudmFyIHJlc3VsdCA9IHZvaWQgMDtcbnZhciB0b1JldHVybiA9IHZvaWQgMDtcbnZhciBpbnRlcnByZXQgPSBmdW5jdGlvbiBpbnRlcnByZXQoKSB7XG4gIHRvUmV0dXJuID0gZmFsc2U7XG4gIHZhciBvcmlnaW5hbCA9IGFyZ3VtZW50cy5sZW5ndGggPiAxID8gQ29tbW9uLnRvQXJyYXkoYXJndW1lbnRzKSA6IGFyZ3VtZW50c1swXTtcbiAgQ29tbW9uLmVhY2goSU5URVJQUkVUQVRJT05TLCBmdW5jdGlvbiAoZmFtaWx5KSB7XG4gICAgaWYgKGZhbWlseS5saXRtdXMob3JpZ2luYWwpKSB7XG4gICAgICBDb21tb24uZWFjaChmYW1pbHkuY29udmVyc2lvbnMsIGZ1bmN0aW9uIChjb252ZXJzaW9uLCBjb252ZXJzaW9uTmFtZSkge1xuICAgICAgICByZXN1bHQgPSBjb252ZXJzaW9uLnJlYWQob3JpZ2luYWwpO1xuICAgICAgICBpZiAodG9SZXR1cm4gPT09IGZhbHNlICYmIHJlc3VsdCAhPT0gZmFsc2UpIHtcbiAgICAgICAgICB0b1JldHVybiA9IHJlc3VsdDtcbiAgICAgICAgICByZXN1bHQuY29udmVyc2lvbk5hbWUgPSBjb252ZXJzaW9uTmFtZTtcbiAgICAgICAgICByZXN1bHQuY29udmVyc2lvbiA9IGNvbnZlcnNpb247XG4gICAgICAgICAgcmV0dXJuIENvbW1vbi5CUkVBSztcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gQ29tbW9uLkJSRUFLO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiB0b1JldHVybjtcbn07XG5cbnZhciB0bXBDb21wb25lbnQgPSB2b2lkIDA7XG52YXIgQ29sb3JNYXRoID0ge1xuICBoc3ZfdG9fcmdiOiBmdW5jdGlvbiBoc3ZfdG9fcmdiKGgsIHMsIHYpIHtcbiAgICB2YXIgaGkgPSBNYXRoLmZsb29yKGggLyA2MCkgJSA2O1xuICAgIHZhciBmID0gaCAvIDYwIC0gTWF0aC5mbG9vcihoIC8gNjApO1xuICAgIHZhciBwID0gdiAqICgxLjAgLSBzKTtcbiAgICB2YXIgcSA9IHYgKiAoMS4wIC0gZiAqIHMpO1xuICAgIHZhciB0ID0gdiAqICgxLjAgLSAoMS4wIC0gZikgKiBzKTtcbiAgICB2YXIgYyA9IFtbdiwgdCwgcF0sIFtxLCB2LCBwXSwgW3AsIHYsIHRdLCBbcCwgcSwgdl0sIFt0LCBwLCB2XSwgW3YsIHAsIHFdXVtoaV07XG4gICAgcmV0dXJuIHtcbiAgICAgIHI6IGNbMF0gKiAyNTUsXG4gICAgICBnOiBjWzFdICogMjU1LFxuICAgICAgYjogY1syXSAqIDI1NVxuICAgIH07XG4gIH0sXG4gIHJnYl90b19oc3Y6IGZ1bmN0aW9uIHJnYl90b19oc3YociwgZywgYikge1xuICAgIHZhciBtaW4gPSBNYXRoLm1pbihyLCBnLCBiKTtcbiAgICB2YXIgbWF4ID0gTWF0aC5tYXgociwgZywgYik7XG4gICAgdmFyIGRlbHRhID0gbWF4IC0gbWluO1xuICAgIHZhciBoID0gdm9pZCAwO1xuICAgIHZhciBzID0gdm9pZCAwO1xuICAgIGlmIChtYXggIT09IDApIHtcbiAgICAgIHMgPSBkZWx0YSAvIG1heDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaDogTmFOLFxuICAgICAgICBzOiAwLFxuICAgICAgICB2OiAwXG4gICAgICB9O1xuICAgIH1cbiAgICBpZiAociA9PT0gbWF4KSB7XG4gICAgICBoID0gKGcgLSBiKSAvIGRlbHRhO1xuICAgIH0gZWxzZSBpZiAoZyA9PT0gbWF4KSB7XG4gICAgICBoID0gMiArIChiIC0gcikgLyBkZWx0YTtcbiAgICB9IGVsc2Uge1xuICAgICAgaCA9IDQgKyAociAtIGcpIC8gZGVsdGE7XG4gICAgfVxuICAgIGggLz0gNjtcbiAgICBpZiAoaCA8IDApIHtcbiAgICAgIGggKz0gMTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIGg6IGggKiAzNjAsXG4gICAgICBzOiBzLFxuICAgICAgdjogbWF4IC8gMjU1XG4gICAgfTtcbiAgfSxcbiAgcmdiX3RvX2hleDogZnVuY3Rpb24gcmdiX3RvX2hleChyLCBnLCBiKSB7XG4gICAgdmFyIGhleCA9IHRoaXMuaGV4X3dpdGhfY29tcG9uZW50KDAsIDIsIHIpO1xuICAgIGhleCA9IHRoaXMuaGV4X3dpdGhfY29tcG9uZW50KGhleCwgMSwgZyk7XG4gICAgaGV4ID0gdGhpcy5oZXhfd2l0aF9jb21wb25lbnQoaGV4LCAwLCBiKTtcbiAgICByZXR1cm4gaGV4O1xuICB9LFxuICBjb21wb25lbnRfZnJvbV9oZXg6IGZ1bmN0aW9uIGNvbXBvbmVudF9mcm9tX2hleChoZXgsIGNvbXBvbmVudEluZGV4KSB7XG4gICAgcmV0dXJuIGhleCA+PiBjb21wb25lbnRJbmRleCAqIDggJiAweEZGO1xuICB9LFxuICBoZXhfd2l0aF9jb21wb25lbnQ6IGZ1bmN0aW9uIGhleF93aXRoX2NvbXBvbmVudChoZXgsIGNvbXBvbmVudEluZGV4LCB2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSA8PCAodG1wQ29tcG9uZW50ID0gY29tcG9uZW50SW5kZXggKiA4KSB8IGhleCAmIH4oMHhGRiA8PCB0bXBDb21wb25lbnQpO1xuICB9XG59O1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gdHlwZW9mIG9iajtcbn0gOiBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xufTtcblxuXG5cblxuXG5cblxuXG5cblxuXG52YXIgY2xhc3NDYWxsQ2hlY2sgPSBmdW5jdGlvbiAoaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufTtcblxudmFyIGNyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICAgIGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gICAgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gICAgcmV0dXJuIENvbnN0cnVjdG9yO1xuICB9O1xufSgpO1xuXG5cblxuXG5cblxuXG52YXIgZ2V0ID0gZnVuY3Rpb24gZ2V0KG9iamVjdCwgcHJvcGVydHksIHJlY2VpdmVyKSB7XG4gIGlmIChvYmplY3QgPT09IG51bGwpIG9iamVjdCA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcbiAgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgcHJvcGVydHkpO1xuXG4gIGlmIChkZXNjID09PSB1bmRlZmluZWQpIHtcbiAgICB2YXIgcGFyZW50ID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKG9iamVjdCk7XG5cbiAgICBpZiAocGFyZW50ID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZ2V0KHBhcmVudCwgcHJvcGVydHksIHJlY2VpdmVyKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoXCJ2YWx1ZVwiIGluIGRlc2MpIHtcbiAgICByZXR1cm4gZGVzYy52YWx1ZTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgZ2V0dGVyID0gZGVzYy5nZXQ7XG5cbiAgICBpZiAoZ2V0dGVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIGdldHRlci5jYWxsKHJlY2VpdmVyKTtcbiAgfVxufTtcblxudmFyIGluaGVyaXRzID0gZnVuY3Rpb24gKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gIGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTtcbiAgfVxuXG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwge1xuICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICB2YWx1ZTogc3ViQ2xhc3MsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfVxuICB9KTtcbiAgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzO1xufTtcblxuXG5cblxuXG5cblxuXG5cblxuXG52YXIgcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiA9IGZ1bmN0aW9uIChzZWxmLCBjYWxsKSB7XG4gIGlmICghc2VsZikge1xuICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtcbiAgfVxuXG4gIHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmO1xufTtcblxudmFyIENvbG9yID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBDb2xvcigpIHtcbiAgICBjbGFzc0NhbGxDaGVjayh0aGlzLCBDb2xvcik7XG4gICAgdGhpcy5fX3N0YXRlID0gaW50ZXJwcmV0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgaWYgKHRoaXMuX19zdGF0ZSA9PT0gZmFsc2UpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignRmFpbGVkIHRvIGludGVycHJldCBjb2xvciBhcmd1bWVudHMnKTtcbiAgICB9XG4gICAgdGhpcy5fX3N0YXRlLmEgPSB0aGlzLl9fc3RhdGUuYSB8fCAxO1xuICB9XG4gIGNyZWF0ZUNsYXNzKENvbG9yLCBbe1xuICAgIGtleTogJ3RvU3RyaW5nJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgICByZXR1cm4gY29sb3JUb1N0cmluZyh0aGlzKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICd0b0hleFN0cmluZycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHRvSGV4U3RyaW5nKCkge1xuICAgICAgcmV0dXJuIGNvbG9yVG9TdHJpbmcodGhpcywgdHJ1ZSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAndG9PcmlnaW5hbCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHRvT3JpZ2luYWwoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fX3N0YXRlLmNvbnZlcnNpb24ud3JpdGUodGhpcyk7XG4gICAgfVxuICB9XSk7XG4gIHJldHVybiBDb2xvcjtcbn0oKTtcbmZ1bmN0aW9uIGRlZmluZVJHQkNvbXBvbmVudCh0YXJnZXQsIGNvbXBvbmVudCwgY29tcG9uZW50SGV4SW5kZXgpIHtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgY29tcG9uZW50LCB7XG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQkJDEoKSB7XG4gICAgICBpZiAodGhpcy5fX3N0YXRlLnNwYWNlID09PSAnUkdCJykge1xuICAgICAgICByZXR1cm4gdGhpcy5fX3N0YXRlW2NvbXBvbmVudF07XG4gICAgICB9XG4gICAgICBDb2xvci5yZWNhbGN1bGF0ZVJHQih0aGlzLCBjb21wb25lbnQsIGNvbXBvbmVudEhleEluZGV4KTtcbiAgICAgIHJldHVybiB0aGlzLl9fc3RhdGVbY29tcG9uZW50XTtcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24gc2V0JCQxKHYpIHtcbiAgICAgIGlmICh0aGlzLl9fc3RhdGUuc3BhY2UgIT09ICdSR0InKSB7XG4gICAgICAgIENvbG9yLnJlY2FsY3VsYXRlUkdCKHRoaXMsIGNvbXBvbmVudCwgY29tcG9uZW50SGV4SW5kZXgpO1xuICAgICAgICB0aGlzLl9fc3RhdGUuc3BhY2UgPSAnUkdCJztcbiAgICAgIH1cbiAgICAgIHRoaXMuX19zdGF0ZVtjb21wb25lbnRdID0gdjtcbiAgICB9XG4gIH0pO1xufVxuZnVuY3Rpb24gZGVmaW5lSFNWQ29tcG9uZW50KHRhcmdldCwgY29tcG9uZW50KSB7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGNvbXBvbmVudCwge1xuICAgIGdldDogZnVuY3Rpb24gZ2V0JCQxKCkge1xuICAgICAgaWYgKHRoaXMuX19zdGF0ZS5zcGFjZSA9PT0gJ0hTVicpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX19zdGF0ZVtjb21wb25lbnRdO1xuICAgICAgfVxuICAgICAgQ29sb3IucmVjYWxjdWxhdGVIU1YodGhpcyk7XG4gICAgICByZXR1cm4gdGhpcy5fX3N0YXRlW2NvbXBvbmVudF07XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldCQkMSh2KSB7XG4gICAgICBpZiAodGhpcy5fX3N0YXRlLnNwYWNlICE9PSAnSFNWJykge1xuICAgICAgICBDb2xvci5yZWNhbGN1bGF0ZUhTVih0aGlzKTtcbiAgICAgICAgdGhpcy5fX3N0YXRlLnNwYWNlID0gJ0hTVic7XG4gICAgICB9XG4gICAgICB0aGlzLl9fc3RhdGVbY29tcG9uZW50XSA9IHY7XG4gICAgfVxuICB9KTtcbn1cbkNvbG9yLnJlY2FsY3VsYXRlUkdCID0gZnVuY3Rpb24gKGNvbG9yLCBjb21wb25lbnQsIGNvbXBvbmVudEhleEluZGV4KSB7XG4gIGlmIChjb2xvci5fX3N0YXRlLnNwYWNlID09PSAnSEVYJykge1xuICAgIGNvbG9yLl9fc3RhdGVbY29tcG9uZW50XSA9IENvbG9yTWF0aC5jb21wb25lbnRfZnJvbV9oZXgoY29sb3IuX19zdGF0ZS5oZXgsIGNvbXBvbmVudEhleEluZGV4KTtcbiAgfSBlbHNlIGlmIChjb2xvci5fX3N0YXRlLnNwYWNlID09PSAnSFNWJykge1xuICAgIENvbW1vbi5leHRlbmQoY29sb3IuX19zdGF0ZSwgQ29sb3JNYXRoLmhzdl90b19yZ2IoY29sb3IuX19zdGF0ZS5oLCBjb2xvci5fX3N0YXRlLnMsIGNvbG9yLl9fc3RhdGUudikpO1xuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBFcnJvcignQ29ycnVwdGVkIGNvbG9yIHN0YXRlJyk7XG4gIH1cbn07XG5Db2xvci5yZWNhbGN1bGF0ZUhTViA9IGZ1bmN0aW9uIChjb2xvcikge1xuICB2YXIgcmVzdWx0ID0gQ29sb3JNYXRoLnJnYl90b19oc3YoY29sb3IuciwgY29sb3IuZywgY29sb3IuYik7XG4gIENvbW1vbi5leHRlbmQoY29sb3IuX19zdGF0ZSwge1xuICAgIHM6IHJlc3VsdC5zLFxuICAgIHY6IHJlc3VsdC52XG4gIH0pO1xuICBpZiAoIUNvbW1vbi5pc05hTihyZXN1bHQuaCkpIHtcbiAgICBjb2xvci5fX3N0YXRlLmggPSByZXN1bHQuaDtcbiAgfSBlbHNlIGlmIChDb21tb24uaXNVbmRlZmluZWQoY29sb3IuX19zdGF0ZS5oKSkge1xuICAgIGNvbG9yLl9fc3RhdGUuaCA9IDA7XG4gIH1cbn07XG5Db2xvci5DT01QT05FTlRTID0gWydyJywgJ2cnLCAnYicsICdoJywgJ3MnLCAndicsICdoZXgnLCAnYSddO1xuZGVmaW5lUkdCQ29tcG9uZW50KENvbG9yLnByb3RvdHlwZSwgJ3InLCAyKTtcbmRlZmluZVJHQkNvbXBvbmVudChDb2xvci5wcm90b3R5cGUsICdnJywgMSk7XG5kZWZpbmVSR0JDb21wb25lbnQoQ29sb3IucHJvdG90eXBlLCAnYicsIDApO1xuZGVmaW5lSFNWQ29tcG9uZW50KENvbG9yLnByb3RvdHlwZSwgJ2gnKTtcbmRlZmluZUhTVkNvbXBvbmVudChDb2xvci5wcm90b3R5cGUsICdzJyk7XG5kZWZpbmVIU1ZDb21wb25lbnQoQ29sb3IucHJvdG90eXBlLCAndicpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbG9yLnByb3RvdHlwZSwgJ2EnLCB7XG4gIGdldDogZnVuY3Rpb24gZ2V0JCQxKCkge1xuICAgIHJldHVybiB0aGlzLl9fc3RhdGUuYTtcbiAgfSxcbiAgc2V0OiBmdW5jdGlvbiBzZXQkJDEodikge1xuICAgIHRoaXMuX19zdGF0ZS5hID0gdjtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoQ29sb3IucHJvdG90eXBlLCAnaGV4Jywge1xuICBnZXQ6IGZ1bmN0aW9uIGdldCQkMSgpIHtcbiAgICBpZiAodGhpcy5fX3N0YXRlLnNwYWNlICE9PSAnSEVYJykge1xuICAgICAgdGhpcy5fX3N0YXRlLmhleCA9IENvbG9yTWF0aC5yZ2JfdG9faGV4KHRoaXMuciwgdGhpcy5nLCB0aGlzLmIpO1xuICAgICAgdGhpcy5fX3N0YXRlLnNwYWNlID0gJ0hFWCc7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9fc3RhdGUuaGV4O1xuICB9LFxuICBzZXQ6IGZ1bmN0aW9uIHNldCQkMSh2KSB7XG4gICAgdGhpcy5fX3N0YXRlLnNwYWNlID0gJ0hFWCc7XG4gICAgdGhpcy5fX3N0YXRlLmhleCA9IHY7XG4gIH1cbn0pO1xuXG52YXIgQ29udHJvbGxlciA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gQ29udHJvbGxlcihvYmplY3QsIHByb3BlcnR5KSB7XG4gICAgY2xhc3NDYWxsQ2hlY2sodGhpcywgQ29udHJvbGxlcik7XG4gICAgdGhpcy5pbml0aWFsVmFsdWUgPSBvYmplY3RbcHJvcGVydHldO1xuICAgIHRoaXMuZG9tRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRoaXMub2JqZWN0ID0gb2JqZWN0O1xuICAgIHRoaXMucHJvcGVydHkgPSBwcm9wZXJ0eTtcbiAgICB0aGlzLl9fb25DaGFuZ2UgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5fX29uRmluaXNoQ2hhbmdlID0gdW5kZWZpbmVkO1xuICB9XG4gIGNyZWF0ZUNsYXNzKENvbnRyb2xsZXIsIFt7XG4gICAga2V5OiAnb25DaGFuZ2UnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvbkNoYW5nZShmbmMpIHtcbiAgICAgIHRoaXMuX19vbkNoYW5nZSA9IGZuYztcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ29uRmluaXNoQ2hhbmdlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gb25GaW5pc2hDaGFuZ2UoZm5jKSB7XG4gICAgICB0aGlzLl9fb25GaW5pc2hDaGFuZ2UgPSBmbmM7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdzZXRWYWx1ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldFZhbHVlKG5ld1ZhbHVlKSB7XG4gICAgICB0aGlzLm9iamVjdFt0aGlzLnByb3BlcnR5XSA9IG5ld1ZhbHVlO1xuICAgICAgaWYgKHRoaXMuX19vbkNoYW5nZSkge1xuICAgICAgICB0aGlzLl9fb25DaGFuZ2UuY2FsbCh0aGlzLCBuZXdWYWx1ZSk7XG4gICAgICB9XG4gICAgICB0aGlzLnVwZGF0ZURpc3BsYXkoKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2dldFZhbHVlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0VmFsdWUoKSB7XG4gICAgICByZXR1cm4gdGhpcy5vYmplY3RbdGhpcy5wcm9wZXJ0eV07XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAndXBkYXRlRGlzcGxheScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHVwZGF0ZURpc3BsYXkoKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdpc01vZGlmaWVkJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gaXNNb2RpZmllZCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmluaXRpYWxWYWx1ZSAhPT0gdGhpcy5nZXRWYWx1ZSgpO1xuICAgIH1cbiAgfV0pO1xuICByZXR1cm4gQ29udHJvbGxlcjtcbn0oKTtcblxudmFyIEVWRU5UX01BUCA9IHtcbiAgSFRNTEV2ZW50czogWydjaGFuZ2UnXSxcbiAgTW91c2VFdmVudHM6IFsnY2xpY2snLCAnbW91c2Vtb3ZlJywgJ21vdXNlZG93bicsICdtb3VzZXVwJywgJ21vdXNlb3ZlciddLFxuICBLZXlib2FyZEV2ZW50czogWydrZXlkb3duJ11cbn07XG52YXIgRVZFTlRfTUFQX0lOViA9IHt9O1xuQ29tbW9uLmVhY2goRVZFTlRfTUFQLCBmdW5jdGlvbiAodiwgaykge1xuICBDb21tb24uZWFjaCh2LCBmdW5jdGlvbiAoZSkge1xuICAgIEVWRU5UX01BUF9JTlZbZV0gPSBrO1xuICB9KTtcbn0pO1xudmFyIENTU19WQUxVRV9QSVhFTFMgPSAvKFxcZCsoXFwuXFxkKyk/KXB4LztcbmZ1bmN0aW9uIGNzc1ZhbHVlVG9QaXhlbHModmFsKSB7XG4gIGlmICh2YWwgPT09ICcwJyB8fCBDb21tb24uaXNVbmRlZmluZWQodmFsKSkge1xuICAgIHJldHVybiAwO1xuICB9XG4gIHZhciBtYXRjaCA9IHZhbC5tYXRjaChDU1NfVkFMVUVfUElYRUxTKTtcbiAgaWYgKCFDb21tb24uaXNOdWxsKG1hdGNoKSkge1xuICAgIHJldHVybiBwYXJzZUZsb2F0KG1hdGNoWzFdKTtcbiAgfVxuICByZXR1cm4gMDtcbn1cbnZhciBkb20gPSB7XG4gIG1ha2VTZWxlY3RhYmxlOiBmdW5jdGlvbiBtYWtlU2VsZWN0YWJsZShlbGVtLCBzZWxlY3RhYmxlKSB7XG4gICAgaWYgKGVsZW0gPT09IHVuZGVmaW5lZCB8fCBlbGVtLnN0eWxlID09PSB1bmRlZmluZWQpIHJldHVybjtcbiAgICBlbGVtLm9uc2VsZWN0c3RhcnQgPSBzZWxlY3RhYmxlID8gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gOiBmdW5jdGlvbiAoKSB7fTtcbiAgICBlbGVtLnN0eWxlLk1velVzZXJTZWxlY3QgPSBzZWxlY3RhYmxlID8gJ2F1dG8nIDogJ25vbmUnO1xuICAgIGVsZW0uc3R5bGUuS2h0bWxVc2VyU2VsZWN0ID0gc2VsZWN0YWJsZSA/ICdhdXRvJyA6ICdub25lJztcbiAgICBlbGVtLnVuc2VsZWN0YWJsZSA9IHNlbGVjdGFibGUgPyAnb24nIDogJ29mZic7XG4gIH0sXG4gIG1ha2VGdWxsc2NyZWVuOiBmdW5jdGlvbiBtYWtlRnVsbHNjcmVlbihlbGVtLCBob3IsIHZlcnQpIHtcbiAgICB2YXIgdmVydGljYWwgPSB2ZXJ0O1xuICAgIHZhciBob3Jpem9udGFsID0gaG9yO1xuICAgIGlmIChDb21tb24uaXNVbmRlZmluZWQoaG9yaXpvbnRhbCkpIHtcbiAgICAgIGhvcml6b250YWwgPSB0cnVlO1xuICAgIH1cbiAgICBpZiAoQ29tbW9uLmlzVW5kZWZpbmVkKHZlcnRpY2FsKSkge1xuICAgICAgdmVydGljYWwgPSB0cnVlO1xuICAgIH1cbiAgICBlbGVtLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICBpZiAoaG9yaXpvbnRhbCkge1xuICAgICAgZWxlbS5zdHlsZS5sZWZ0ID0gMDtcbiAgICAgIGVsZW0uc3R5bGUucmlnaHQgPSAwO1xuICAgIH1cbiAgICBpZiAodmVydGljYWwpIHtcbiAgICAgIGVsZW0uc3R5bGUudG9wID0gMDtcbiAgICAgIGVsZW0uc3R5bGUuYm90dG9tID0gMDtcbiAgICB9XG4gIH0sXG4gIGZha2VFdmVudDogZnVuY3Rpb24gZmFrZUV2ZW50KGVsZW0sIGV2ZW50VHlwZSwgcGFycywgYXV4KSB7XG4gICAgdmFyIHBhcmFtcyA9IHBhcnMgfHwge307XG4gICAgdmFyIGNsYXNzTmFtZSA9IEVWRU5UX01BUF9JTlZbZXZlbnRUeXBlXTtcbiAgICBpZiAoIWNsYXNzTmFtZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdFdmVudCB0eXBlICcgKyBldmVudFR5cGUgKyAnIG5vdCBzdXBwb3J0ZWQuJyk7XG4gICAgfVxuICAgIHZhciBldnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudChjbGFzc05hbWUpO1xuICAgIHN3aXRjaCAoY2xhc3NOYW1lKSB7XG4gICAgICBjYXNlICdNb3VzZUV2ZW50cyc6XG4gICAgICAgIHtcbiAgICAgICAgICB2YXIgY2xpZW50WCA9IHBhcmFtcy54IHx8IHBhcmFtcy5jbGllbnRYIHx8IDA7XG4gICAgICAgICAgdmFyIGNsaWVudFkgPSBwYXJhbXMueSB8fCBwYXJhbXMuY2xpZW50WSB8fCAwO1xuICAgICAgICAgIGV2dC5pbml0TW91c2VFdmVudChldmVudFR5cGUsIHBhcmFtcy5idWJibGVzIHx8IGZhbHNlLCBwYXJhbXMuY2FuY2VsYWJsZSB8fCB0cnVlLCB3aW5kb3csIHBhcmFtcy5jbGlja0NvdW50IHx8IDEsIDAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICBjbGllbnRYLFxuICAgICAgICAgIGNsaWVudFksXG4gICAgICAgICAgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIDAsIG51bGwpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICBjYXNlICdLZXlib2FyZEV2ZW50cyc6XG4gICAgICAgIHtcbiAgICAgICAgICB2YXIgaW5pdCA9IGV2dC5pbml0S2V5Ym9hcmRFdmVudCB8fCBldnQuaW5pdEtleUV2ZW50O1xuICAgICAgICAgIENvbW1vbi5kZWZhdWx0cyhwYXJhbXMsIHtcbiAgICAgICAgICAgIGNhbmNlbGFibGU6IHRydWUsXG4gICAgICAgICAgICBjdHJsS2V5OiBmYWxzZSxcbiAgICAgICAgICAgIGFsdEtleTogZmFsc2UsXG4gICAgICAgICAgICBzaGlmdEtleTogZmFsc2UsXG4gICAgICAgICAgICBtZXRhS2V5OiBmYWxzZSxcbiAgICAgICAgICAgIGtleUNvZGU6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIGNoYXJDb2RlOiB1bmRlZmluZWRcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBpbml0KGV2ZW50VHlwZSwgcGFyYW1zLmJ1YmJsZXMgfHwgZmFsc2UsIHBhcmFtcy5jYW5jZWxhYmxlLCB3aW5kb3csIHBhcmFtcy5jdHJsS2V5LCBwYXJhbXMuYWx0S2V5LCBwYXJhbXMuc2hpZnRLZXksIHBhcmFtcy5tZXRhS2V5LCBwYXJhbXMua2V5Q29kZSwgcGFyYW1zLmNoYXJDb2RlKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgZGVmYXVsdDpcbiAgICAgICAge1xuICAgICAgICAgIGV2dC5pbml0RXZlbnQoZXZlbnRUeXBlLCBwYXJhbXMuYnViYmxlcyB8fCBmYWxzZSwgcGFyYW1zLmNhbmNlbGFibGUgfHwgdHJ1ZSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG4gICAgQ29tbW9uLmRlZmF1bHRzKGV2dCwgYXV4KTtcbiAgICBlbGVtLmRpc3BhdGNoRXZlbnQoZXZ0KTtcbiAgfSxcbiAgYmluZDogZnVuY3Rpb24gYmluZChlbGVtLCBldmVudCwgZnVuYywgbmV3Qm9vbCkge1xuICAgIHZhciBib29sID0gbmV3Qm9vbCB8fCBmYWxzZTtcbiAgICBpZiAoZWxlbS5hZGRFdmVudExpc3RlbmVyKSB7XG4gICAgICBlbGVtLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGZ1bmMsIGJvb2wpO1xuICAgIH0gZWxzZSBpZiAoZWxlbS5hdHRhY2hFdmVudCkge1xuICAgICAgZWxlbS5hdHRhY2hFdmVudCgnb24nICsgZXZlbnQsIGZ1bmMpO1xuICAgIH1cbiAgICByZXR1cm4gZG9tO1xuICB9LFxuICB1bmJpbmQ6IGZ1bmN0aW9uIHVuYmluZChlbGVtLCBldmVudCwgZnVuYywgbmV3Qm9vbCkge1xuICAgIHZhciBib29sID0gbmV3Qm9vbCB8fCBmYWxzZTtcbiAgICBpZiAoZWxlbS5yZW1vdmVFdmVudExpc3RlbmVyKSB7XG4gICAgICBlbGVtLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIGZ1bmMsIGJvb2wpO1xuICAgIH0gZWxzZSBpZiAoZWxlbS5kZXRhY2hFdmVudCkge1xuICAgICAgZWxlbS5kZXRhY2hFdmVudCgnb24nICsgZXZlbnQsIGZ1bmMpO1xuICAgIH1cbiAgICByZXR1cm4gZG9tO1xuICB9LFxuICBhZGRDbGFzczogZnVuY3Rpb24gYWRkQ2xhc3MoZWxlbSwgY2xhc3NOYW1lKSB7XG4gICAgaWYgKGVsZW0uY2xhc3NOYW1lID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGVsZW0uY2xhc3NOYW1lID0gY2xhc3NOYW1lO1xuICAgIH0gZWxzZSBpZiAoZWxlbS5jbGFzc05hbWUgIT09IGNsYXNzTmFtZSkge1xuICAgICAgdmFyIGNsYXNzZXMgPSBlbGVtLmNsYXNzTmFtZS5zcGxpdCgvICsvKTtcbiAgICAgIGlmIChjbGFzc2VzLmluZGV4T2YoY2xhc3NOYW1lKSA9PT0gLTEpIHtcbiAgICAgICAgY2xhc3Nlcy5wdXNoKGNsYXNzTmFtZSk7XG4gICAgICAgIGVsZW0uY2xhc3NOYW1lID0gY2xhc3Nlcy5qb2luKCcgJykucmVwbGFjZSgvXlxccysvLCAnJykucmVwbGFjZSgvXFxzKyQvLCAnJyk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBkb207XG4gIH0sXG4gIHJlbW92ZUNsYXNzOiBmdW5jdGlvbiByZW1vdmVDbGFzcyhlbGVtLCBjbGFzc05hbWUpIHtcbiAgICBpZiAoY2xhc3NOYW1lKSB7XG4gICAgICBpZiAoZWxlbS5jbGFzc05hbWUgPT09IGNsYXNzTmFtZSkge1xuICAgICAgICBlbGVtLnJlbW92ZUF0dHJpYnV0ZSgnY2xhc3MnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBjbGFzc2VzID0gZWxlbS5jbGFzc05hbWUuc3BsaXQoLyArLyk7XG4gICAgICAgIHZhciBpbmRleCA9IGNsYXNzZXMuaW5kZXhPZihjbGFzc05hbWUpO1xuICAgICAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgY2xhc3Nlcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgIGVsZW0uY2xhc3NOYW1lID0gY2xhc3Nlcy5qb2luKCcgJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZWxlbS5jbGFzc05hbWUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIHJldHVybiBkb207XG4gIH0sXG4gIGhhc0NsYXNzOiBmdW5jdGlvbiBoYXNDbGFzcyhlbGVtLCBjbGFzc05hbWUpIHtcbiAgICByZXR1cm4gbmV3IFJlZ0V4cCgnKD86XnxcXFxccyspJyArIGNsYXNzTmFtZSArICcoPzpcXFxccyt8JCknKS50ZXN0KGVsZW0uY2xhc3NOYW1lKSB8fCBmYWxzZTtcbiAgfSxcbiAgZ2V0V2lkdGg6IGZ1bmN0aW9uIGdldFdpZHRoKGVsZW0pIHtcbiAgICB2YXIgc3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKGVsZW0pO1xuICAgIHJldHVybiBjc3NWYWx1ZVRvUGl4ZWxzKHN0eWxlWydib3JkZXItbGVmdC13aWR0aCddKSArIGNzc1ZhbHVlVG9QaXhlbHMoc3R5bGVbJ2JvcmRlci1yaWdodC13aWR0aCddKSArIGNzc1ZhbHVlVG9QaXhlbHMoc3R5bGVbJ3BhZGRpbmctbGVmdCddKSArIGNzc1ZhbHVlVG9QaXhlbHMoc3R5bGVbJ3BhZGRpbmctcmlnaHQnXSkgKyBjc3NWYWx1ZVRvUGl4ZWxzKHN0eWxlLndpZHRoKTtcbiAgfSxcbiAgZ2V0SGVpZ2h0OiBmdW5jdGlvbiBnZXRIZWlnaHQoZWxlbSkge1xuICAgIHZhciBzdHlsZSA9IGdldENvbXB1dGVkU3R5bGUoZWxlbSk7XG4gICAgcmV0dXJuIGNzc1ZhbHVlVG9QaXhlbHMoc3R5bGVbJ2JvcmRlci10b3Atd2lkdGgnXSkgKyBjc3NWYWx1ZVRvUGl4ZWxzKHN0eWxlWydib3JkZXItYm90dG9tLXdpZHRoJ10pICsgY3NzVmFsdWVUb1BpeGVscyhzdHlsZVsncGFkZGluZy10b3AnXSkgKyBjc3NWYWx1ZVRvUGl4ZWxzKHN0eWxlWydwYWRkaW5nLWJvdHRvbSddKSArIGNzc1ZhbHVlVG9QaXhlbHMoc3R5bGUuaGVpZ2h0KTtcbiAgfSxcbiAgZ2V0T2Zmc2V0OiBmdW5jdGlvbiBnZXRPZmZzZXQoZWwpIHtcbiAgICB2YXIgZWxlbSA9IGVsO1xuICAgIHZhciBvZmZzZXQgPSB7IGxlZnQ6IDAsIHRvcDogMCB9O1xuICAgIGlmIChlbGVtLm9mZnNldFBhcmVudCkge1xuICAgICAgZG8ge1xuICAgICAgICBvZmZzZXQubGVmdCArPSBlbGVtLm9mZnNldExlZnQ7XG4gICAgICAgIG9mZnNldC50b3AgKz0gZWxlbS5vZmZzZXRUb3A7XG4gICAgICAgIGVsZW0gPSBlbGVtLm9mZnNldFBhcmVudDtcbiAgICAgIH0gd2hpbGUgKGVsZW0pO1xuICAgIH1cbiAgICByZXR1cm4gb2Zmc2V0O1xuICB9LFxuICBpc0FjdGl2ZTogZnVuY3Rpb24gaXNBY3RpdmUoZWxlbSkge1xuICAgIHJldHVybiBlbGVtID09PSBkb2N1bWVudC5hY3RpdmVFbGVtZW50ICYmIChlbGVtLnR5cGUgfHwgZWxlbS5ocmVmKTtcbiAgfVxufTtcblxudmFyIEJvb2xlYW5Db250cm9sbGVyID0gZnVuY3Rpb24gKF9Db250cm9sbGVyKSB7XG4gIGluaGVyaXRzKEJvb2xlYW5Db250cm9sbGVyLCBfQ29udHJvbGxlcik7XG4gIGZ1bmN0aW9uIEJvb2xlYW5Db250cm9sbGVyKG9iamVjdCwgcHJvcGVydHkpIHtcbiAgICBjbGFzc0NhbGxDaGVjayh0aGlzLCBCb29sZWFuQ29udHJvbGxlcik7XG4gICAgdmFyIF90aGlzMiA9IHBvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKEJvb2xlYW5Db250cm9sbGVyLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoQm9vbGVhbkNvbnRyb2xsZXIpKS5jYWxsKHRoaXMsIG9iamVjdCwgcHJvcGVydHkpKTtcbiAgICB2YXIgX3RoaXMgPSBfdGhpczI7XG4gICAgX3RoaXMyLl9fcHJldiA9IF90aGlzMi5nZXRWYWx1ZSgpO1xuICAgIF90aGlzMi5fX2NoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBfdGhpczIuX19jaGVja2JveC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2hlY2tib3gnKTtcbiAgICBmdW5jdGlvbiBvbkNoYW5nZSgpIHtcbiAgICAgIF90aGlzLnNldFZhbHVlKCFfdGhpcy5fX3ByZXYpO1xuICAgIH1cbiAgICBkb20uYmluZChfdGhpczIuX19jaGVja2JveCwgJ2NoYW5nZScsIG9uQ2hhbmdlLCBmYWxzZSk7XG4gICAgX3RoaXMyLmRvbUVsZW1lbnQuYXBwZW5kQ2hpbGQoX3RoaXMyLl9fY2hlY2tib3gpO1xuICAgIF90aGlzMi51cGRhdGVEaXNwbGF5KCk7XG4gICAgcmV0dXJuIF90aGlzMjtcbiAgfVxuICBjcmVhdGVDbGFzcyhCb29sZWFuQ29udHJvbGxlciwgW3tcbiAgICBrZXk6ICdzZXRWYWx1ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldFZhbHVlKHYpIHtcbiAgICAgIHZhciB0b1JldHVybiA9IGdldChCb29sZWFuQ29udHJvbGxlci5wcm90b3R5cGUuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihCb29sZWFuQ29udHJvbGxlci5wcm90b3R5cGUpLCAnc2V0VmFsdWUnLCB0aGlzKS5jYWxsKHRoaXMsIHYpO1xuICAgICAgaWYgKHRoaXMuX19vbkZpbmlzaENoYW5nZSkge1xuICAgICAgICB0aGlzLl9fb25GaW5pc2hDaGFuZ2UuY2FsbCh0aGlzLCB0aGlzLmdldFZhbHVlKCkpO1xuICAgICAgfVxuICAgICAgdGhpcy5fX3ByZXYgPSB0aGlzLmdldFZhbHVlKCk7XG4gICAgICByZXR1cm4gdG9SZXR1cm47XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAndXBkYXRlRGlzcGxheScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHVwZGF0ZURpc3BsYXkoKSB7XG4gICAgICBpZiAodGhpcy5nZXRWYWx1ZSgpID09PSB0cnVlKSB7XG4gICAgICAgIHRoaXMuX19jaGVja2JveC5zZXRBdHRyaWJ1dGUoJ2NoZWNrZWQnLCAnY2hlY2tlZCcpO1xuICAgICAgICB0aGlzLl9fY2hlY2tib3guY2hlY2tlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuX19wcmV2ID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX19jaGVja2JveC5jaGVja2VkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX19wcmV2ID0gZmFsc2U7XG4gICAgICB9XG4gICAgICByZXR1cm4gZ2V0KEJvb2xlYW5Db250cm9sbGVyLnByb3RvdHlwZS5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKEJvb2xlYW5Db250cm9sbGVyLnByb3RvdHlwZSksICd1cGRhdGVEaXNwbGF5JywgdGhpcykuY2FsbCh0aGlzKTtcbiAgICB9XG4gIH1dKTtcbiAgcmV0dXJuIEJvb2xlYW5Db250cm9sbGVyO1xufShDb250cm9sbGVyKTtcblxudmFyIE9wdGlvbkNvbnRyb2xsZXIgPSBmdW5jdGlvbiAoX0NvbnRyb2xsZXIpIHtcbiAgaW5oZXJpdHMoT3B0aW9uQ29udHJvbGxlciwgX0NvbnRyb2xsZXIpO1xuICBmdW5jdGlvbiBPcHRpb25Db250cm9sbGVyKG9iamVjdCwgcHJvcGVydHksIG9wdHMpIHtcbiAgICBjbGFzc0NhbGxDaGVjayh0aGlzLCBPcHRpb25Db250cm9sbGVyKTtcbiAgICB2YXIgX3RoaXMyID0gcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoT3B0aW9uQ29udHJvbGxlci5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKE9wdGlvbkNvbnRyb2xsZXIpKS5jYWxsKHRoaXMsIG9iamVjdCwgcHJvcGVydHkpKTtcbiAgICB2YXIgb3B0aW9ucyA9IG9wdHM7XG4gICAgdmFyIF90aGlzID0gX3RoaXMyO1xuICAgIF90aGlzMi5fX3NlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgIGlmIChDb21tb24uaXNBcnJheShvcHRpb25zKSkge1xuICAgICAgdmFyIG1hcCA9IHt9O1xuICAgICAgQ29tbW9uLmVhY2gob3B0aW9ucywgZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgbWFwW2VsZW1lbnRdID0gZWxlbWVudDtcbiAgICAgIH0pO1xuICAgICAgb3B0aW9ucyA9IG1hcDtcbiAgICB9XG4gICAgQ29tbW9uLmVhY2gob3B0aW9ucywgZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcbiAgICAgIHZhciBvcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgIG9wdC5pbm5lckhUTUwgPSBrZXk7XG4gICAgICBvcHQuc2V0QXR0cmlidXRlKCd2YWx1ZScsIHZhbHVlKTtcbiAgICAgIF90aGlzLl9fc2VsZWN0LmFwcGVuZENoaWxkKG9wdCk7XG4gICAgfSk7XG4gICAgX3RoaXMyLnVwZGF0ZURpc3BsYXkoKTtcbiAgICBkb20uYmluZChfdGhpczIuX19zZWxlY3QsICdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgZGVzaXJlZFZhbHVlID0gdGhpcy5vcHRpb25zW3RoaXMuc2VsZWN0ZWRJbmRleF0udmFsdWU7XG4gICAgICBfdGhpcy5zZXRWYWx1ZShkZXNpcmVkVmFsdWUpO1xuICAgIH0pO1xuICAgIF90aGlzMi5kb21FbGVtZW50LmFwcGVuZENoaWxkKF90aGlzMi5fX3NlbGVjdCk7XG4gICAgcmV0dXJuIF90aGlzMjtcbiAgfVxuICBjcmVhdGVDbGFzcyhPcHRpb25Db250cm9sbGVyLCBbe1xuICAgIGtleTogJ3NldFZhbHVlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0VmFsdWUodikge1xuICAgICAgdmFyIHRvUmV0dXJuID0gZ2V0KE9wdGlvbkNvbnRyb2xsZXIucHJvdG90eXBlLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoT3B0aW9uQ29udHJvbGxlci5wcm90b3R5cGUpLCAnc2V0VmFsdWUnLCB0aGlzKS5jYWxsKHRoaXMsIHYpO1xuICAgICAgaWYgKHRoaXMuX19vbkZpbmlzaENoYW5nZSkge1xuICAgICAgICB0aGlzLl9fb25GaW5pc2hDaGFuZ2UuY2FsbCh0aGlzLCB0aGlzLmdldFZhbHVlKCkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRvUmV0dXJuO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3VwZGF0ZURpc3BsYXknLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB1cGRhdGVEaXNwbGF5KCkge1xuICAgICAgaWYgKGRvbS5pc0FjdGl2ZSh0aGlzLl9fc2VsZWN0KSkgcmV0dXJuIHRoaXM7XG4gICAgICB0aGlzLl9fc2VsZWN0LnZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpO1xuICAgICAgcmV0dXJuIGdldChPcHRpb25Db250cm9sbGVyLnByb3RvdHlwZS5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKE9wdGlvbkNvbnRyb2xsZXIucHJvdG90eXBlKSwgJ3VwZGF0ZURpc3BsYXknLCB0aGlzKS5jYWxsKHRoaXMpO1xuICAgIH1cbiAgfV0pO1xuICByZXR1cm4gT3B0aW9uQ29udHJvbGxlcjtcbn0oQ29udHJvbGxlcik7XG5cbnZhciBTdHJpbmdDb250cm9sbGVyID0gZnVuY3Rpb24gKF9Db250cm9sbGVyKSB7XG4gIGluaGVyaXRzKFN0cmluZ0NvbnRyb2xsZXIsIF9Db250cm9sbGVyKTtcbiAgZnVuY3Rpb24gU3RyaW5nQ29udHJvbGxlcihvYmplY3QsIHByb3BlcnR5KSB7XG4gICAgY2xhc3NDYWxsQ2hlY2sodGhpcywgU3RyaW5nQ29udHJvbGxlcik7XG4gICAgdmFyIF90aGlzMiA9IHBvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKFN0cmluZ0NvbnRyb2xsZXIuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihTdHJpbmdDb250cm9sbGVyKSkuY2FsbCh0aGlzLCBvYmplY3QsIHByb3BlcnR5KSk7XG4gICAgdmFyIF90aGlzID0gX3RoaXMyO1xuICAgIGZ1bmN0aW9uIG9uQ2hhbmdlKCkge1xuICAgICAgX3RoaXMuc2V0VmFsdWUoX3RoaXMuX19pbnB1dC52YWx1ZSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIG9uQmx1cigpIHtcbiAgICAgIGlmIChfdGhpcy5fX29uRmluaXNoQ2hhbmdlKSB7XG4gICAgICAgIF90aGlzLl9fb25GaW5pc2hDaGFuZ2UuY2FsbChfdGhpcywgX3RoaXMuZ2V0VmFsdWUoKSk7XG4gICAgICB9XG4gICAgfVxuICAgIF90aGlzMi5fX2lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBfdGhpczIuX19pbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICAgIGRvbS5iaW5kKF90aGlzMi5fX2lucHV0LCAna2V5dXAnLCBvbkNoYW5nZSk7XG4gICAgZG9tLmJpbmQoX3RoaXMyLl9faW5wdXQsICdjaGFuZ2UnLCBvbkNoYW5nZSk7XG4gICAgZG9tLmJpbmQoX3RoaXMyLl9faW5wdXQsICdibHVyJywgb25CbHVyKTtcbiAgICBkb20uYmluZChfdGhpczIuX19pbnB1dCwgJ2tleWRvd24nLCBmdW5jdGlvbiAoZSkge1xuICAgICAgaWYgKGUua2V5Q29kZSA9PT0gMTMpIHtcbiAgICAgICAgdGhpcy5ibHVyKCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgX3RoaXMyLnVwZGF0ZURpc3BsYXkoKTtcbiAgICBfdGhpczIuZG9tRWxlbWVudC5hcHBlbmRDaGlsZChfdGhpczIuX19pbnB1dCk7XG4gICAgcmV0dXJuIF90aGlzMjtcbiAgfVxuICBjcmVhdGVDbGFzcyhTdHJpbmdDb250cm9sbGVyLCBbe1xuICAgIGtleTogJ3VwZGF0ZURpc3BsYXknLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB1cGRhdGVEaXNwbGF5KCkge1xuICAgICAgaWYgKCFkb20uaXNBY3RpdmUodGhpcy5fX2lucHV0KSkge1xuICAgICAgICB0aGlzLl9faW5wdXQudmFsdWUgPSB0aGlzLmdldFZhbHVlKCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gZ2V0KFN0cmluZ0NvbnRyb2xsZXIucHJvdG90eXBlLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoU3RyaW5nQ29udHJvbGxlci5wcm90b3R5cGUpLCAndXBkYXRlRGlzcGxheScsIHRoaXMpLmNhbGwodGhpcyk7XG4gICAgfVxuICB9XSk7XG4gIHJldHVybiBTdHJpbmdDb250cm9sbGVyO1xufShDb250cm9sbGVyKTtcblxuZnVuY3Rpb24gbnVtRGVjaW1hbHMoeCkge1xuICB2YXIgX3ggPSB4LnRvU3RyaW5nKCk7XG4gIGlmIChfeC5pbmRleE9mKCcuJykgPiAtMSkge1xuICAgIHJldHVybiBfeC5sZW5ndGggLSBfeC5pbmRleE9mKCcuJykgLSAxO1xuICB9XG4gIHJldHVybiAwO1xufVxudmFyIE51bWJlckNvbnRyb2xsZXIgPSBmdW5jdGlvbiAoX0NvbnRyb2xsZXIpIHtcbiAgaW5oZXJpdHMoTnVtYmVyQ29udHJvbGxlciwgX0NvbnRyb2xsZXIpO1xuICBmdW5jdGlvbiBOdW1iZXJDb250cm9sbGVyKG9iamVjdCwgcHJvcGVydHksIHBhcmFtcykge1xuICAgIGNsYXNzQ2FsbENoZWNrKHRoaXMsIE51bWJlckNvbnRyb2xsZXIpO1xuICAgIHZhciBfdGhpcyA9IHBvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKE51bWJlckNvbnRyb2xsZXIuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihOdW1iZXJDb250cm9sbGVyKSkuY2FsbCh0aGlzLCBvYmplY3QsIHByb3BlcnR5KSk7XG4gICAgdmFyIF9wYXJhbXMgPSBwYXJhbXMgfHwge307XG4gICAgX3RoaXMuX19taW4gPSBfcGFyYW1zLm1pbjtcbiAgICBfdGhpcy5fX21heCA9IF9wYXJhbXMubWF4O1xuICAgIF90aGlzLl9fc3RlcCA9IF9wYXJhbXMuc3RlcDtcbiAgICBpZiAoQ29tbW9uLmlzVW5kZWZpbmVkKF90aGlzLl9fc3RlcCkpIHtcbiAgICAgIGlmIChfdGhpcy5pbml0aWFsVmFsdWUgPT09IDApIHtcbiAgICAgICAgX3RoaXMuX19pbXBsaWVkU3RlcCA9IDE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBfdGhpcy5fX2ltcGxpZWRTdGVwID0gTWF0aC5wb3coMTAsIE1hdGguZmxvb3IoTWF0aC5sb2coTWF0aC5hYnMoX3RoaXMuaW5pdGlhbFZhbHVlKSkgLyBNYXRoLkxOMTApKSAvIDEwO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBfdGhpcy5fX2ltcGxpZWRTdGVwID0gX3RoaXMuX19zdGVwO1xuICAgIH1cbiAgICBfdGhpcy5fX3ByZWNpc2lvbiA9IG51bURlY2ltYWxzKF90aGlzLl9faW1wbGllZFN0ZXApO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuICBjcmVhdGVDbGFzcyhOdW1iZXJDb250cm9sbGVyLCBbe1xuICAgIGtleTogJ3NldFZhbHVlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0VmFsdWUodikge1xuICAgICAgdmFyIF92ID0gdjtcbiAgICAgIGlmICh0aGlzLl9fbWluICE9PSB1bmRlZmluZWQgJiYgX3YgPCB0aGlzLl9fbWluKSB7XG4gICAgICAgIF92ID0gdGhpcy5fX21pbjtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5fX21heCAhPT0gdW5kZWZpbmVkICYmIF92ID4gdGhpcy5fX21heCkge1xuICAgICAgICBfdiA9IHRoaXMuX19tYXg7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5fX3N0ZXAgIT09IHVuZGVmaW5lZCAmJiBfdiAlIHRoaXMuX19zdGVwICE9PSAwKSB7XG4gICAgICAgIF92ID0gTWF0aC5yb3VuZChfdiAvIHRoaXMuX19zdGVwKSAqIHRoaXMuX19zdGVwO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGdldChOdW1iZXJDb250cm9sbGVyLnByb3RvdHlwZS5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKE51bWJlckNvbnRyb2xsZXIucHJvdG90eXBlKSwgJ3NldFZhbHVlJywgdGhpcykuY2FsbCh0aGlzLCBfdik7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnbWluJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gbWluKG1pblZhbHVlKSB7XG4gICAgICB0aGlzLl9fbWluID0gbWluVmFsdWU7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdtYXgnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBtYXgobWF4VmFsdWUpIHtcbiAgICAgIHRoaXMuX19tYXggPSBtYXhWYWx1ZTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3N0ZXAnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzdGVwKHN0ZXBWYWx1ZSkge1xuICAgICAgdGhpcy5fX3N0ZXAgPSBzdGVwVmFsdWU7XG4gICAgICB0aGlzLl9faW1wbGllZFN0ZXAgPSBzdGVwVmFsdWU7XG4gICAgICB0aGlzLl9fcHJlY2lzaW9uID0gbnVtRGVjaW1hbHMoc3RlcFZhbHVlKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgfV0pO1xuICByZXR1cm4gTnVtYmVyQ29udHJvbGxlcjtcbn0oQ29udHJvbGxlcik7XG5cbmZ1bmN0aW9uIHJvdW5kVG9EZWNpbWFsKHZhbHVlLCBkZWNpbWFscykge1xuICB2YXIgdGVuVG8gPSBNYXRoLnBvdygxMCwgZGVjaW1hbHMpO1xuICByZXR1cm4gTWF0aC5yb3VuZCh2YWx1ZSAqIHRlblRvKSAvIHRlblRvO1xufVxudmFyIE51bWJlckNvbnRyb2xsZXJCb3ggPSBmdW5jdGlvbiAoX051bWJlckNvbnRyb2xsZXIpIHtcbiAgaW5oZXJpdHMoTnVtYmVyQ29udHJvbGxlckJveCwgX051bWJlckNvbnRyb2xsZXIpO1xuICBmdW5jdGlvbiBOdW1iZXJDb250cm9sbGVyQm94KG9iamVjdCwgcHJvcGVydHksIHBhcmFtcykge1xuICAgIGNsYXNzQ2FsbENoZWNrKHRoaXMsIE51bWJlckNvbnRyb2xsZXJCb3gpO1xuICAgIHZhciBfdGhpczIgPSBwb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChOdW1iZXJDb250cm9sbGVyQm94Ll9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoTnVtYmVyQ29udHJvbGxlckJveCkpLmNhbGwodGhpcywgb2JqZWN0LCBwcm9wZXJ0eSwgcGFyYW1zKSk7XG4gICAgX3RoaXMyLl9fdHJ1bmNhdGlvblN1c3BlbmRlZCA9IGZhbHNlO1xuICAgIHZhciBfdGhpcyA9IF90aGlzMjtcbiAgICB2YXIgcHJldlkgPSB2b2lkIDA7XG4gICAgZnVuY3Rpb24gb25DaGFuZ2UoKSB7XG4gICAgICB2YXIgYXR0ZW1wdGVkID0gcGFyc2VGbG9hdChfdGhpcy5fX2lucHV0LnZhbHVlKTtcbiAgICAgIGlmICghQ29tbW9uLmlzTmFOKGF0dGVtcHRlZCkpIHtcbiAgICAgICAgX3RoaXMuc2V0VmFsdWUoYXR0ZW1wdGVkKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gb25GaW5pc2goKSB7XG4gICAgICBpZiAoX3RoaXMuX19vbkZpbmlzaENoYW5nZSkge1xuICAgICAgICBfdGhpcy5fX29uRmluaXNoQ2hhbmdlLmNhbGwoX3RoaXMsIF90aGlzLmdldFZhbHVlKCkpO1xuICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBvbkJsdXIoKSB7XG4gICAgICBvbkZpbmlzaCgpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBvbk1vdXNlRHJhZyhlKSB7XG4gICAgICB2YXIgZGlmZiA9IHByZXZZIC0gZS5jbGllbnRZO1xuICAgICAgX3RoaXMuc2V0VmFsdWUoX3RoaXMuZ2V0VmFsdWUoKSArIGRpZmYgKiBfdGhpcy5fX2ltcGxpZWRTdGVwKTtcbiAgICAgIHByZXZZID0gZS5jbGllbnRZO1xuICAgIH1cbiAgICBmdW5jdGlvbiBvbk1vdXNlVXAoKSB7XG4gICAgICBkb20udW5iaW5kKHdpbmRvdywgJ21vdXNlbW92ZScsIG9uTW91c2VEcmFnKTtcbiAgICAgIGRvbS51bmJpbmQod2luZG93LCAnbW91c2V1cCcsIG9uTW91c2VVcCk7XG4gICAgICBvbkZpbmlzaCgpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBvbk1vdXNlRG93bihlKSB7XG4gICAgICBkb20uYmluZCh3aW5kb3csICdtb3VzZW1vdmUnLCBvbk1vdXNlRHJhZyk7XG4gICAgICBkb20uYmluZCh3aW5kb3csICdtb3VzZXVwJywgb25Nb3VzZVVwKTtcbiAgICAgIHByZXZZID0gZS5jbGllbnRZO1xuICAgIH1cbiAgICBfdGhpczIuX19pbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgX3RoaXMyLl9faW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgICBkb20uYmluZChfdGhpczIuX19pbnB1dCwgJ2NoYW5nZScsIG9uQ2hhbmdlKTtcbiAgICBkb20uYmluZChfdGhpczIuX19pbnB1dCwgJ2JsdXInLCBvbkJsdXIpO1xuICAgIGRvbS5iaW5kKF90aGlzMi5fX2lucHV0LCAnbW91c2Vkb3duJywgb25Nb3VzZURvd24pO1xuICAgIGRvbS5iaW5kKF90aGlzMi5fX2lucHV0LCAna2V5ZG93bicsIGZ1bmN0aW9uIChlKSB7XG4gICAgICBpZiAoZS5rZXlDb2RlID09PSAxMykge1xuICAgICAgICBfdGhpcy5fX3RydW5jYXRpb25TdXNwZW5kZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLmJsdXIoKTtcbiAgICAgICAgX3RoaXMuX190cnVuY2F0aW9uU3VzcGVuZGVkID0gZmFsc2U7XG4gICAgICAgIG9uRmluaXNoKCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgX3RoaXMyLnVwZGF0ZURpc3BsYXkoKTtcbiAgICBfdGhpczIuZG9tRWxlbWVudC5hcHBlbmRDaGlsZChfdGhpczIuX19pbnB1dCk7XG4gICAgcmV0dXJuIF90aGlzMjtcbiAgfVxuICBjcmVhdGVDbGFzcyhOdW1iZXJDb250cm9sbGVyQm94LCBbe1xuICAgIGtleTogJ3VwZGF0ZURpc3BsYXknLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB1cGRhdGVEaXNwbGF5KCkge1xuICAgICAgdGhpcy5fX2lucHV0LnZhbHVlID0gdGhpcy5fX3RydW5jYXRpb25TdXNwZW5kZWQgPyB0aGlzLmdldFZhbHVlKCkgOiByb3VuZFRvRGVjaW1hbCh0aGlzLmdldFZhbHVlKCksIHRoaXMuX19wcmVjaXNpb24pO1xuICAgICAgcmV0dXJuIGdldChOdW1iZXJDb250cm9sbGVyQm94LnByb3RvdHlwZS5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKE51bWJlckNvbnRyb2xsZXJCb3gucHJvdG90eXBlKSwgJ3VwZGF0ZURpc3BsYXknLCB0aGlzKS5jYWxsKHRoaXMpO1xuICAgIH1cbiAgfV0pO1xuICByZXR1cm4gTnVtYmVyQ29udHJvbGxlckJveDtcbn0oTnVtYmVyQ29udHJvbGxlcik7XG5cbmZ1bmN0aW9uIG1hcCh2LCBpMSwgaTIsIG8xLCBvMikge1xuICByZXR1cm4gbzEgKyAobzIgLSBvMSkgKiAoKHYgLSBpMSkgLyAoaTIgLSBpMSkpO1xufVxudmFyIE51bWJlckNvbnRyb2xsZXJTbGlkZXIgPSBmdW5jdGlvbiAoX051bWJlckNvbnRyb2xsZXIpIHtcbiAgaW5oZXJpdHMoTnVtYmVyQ29udHJvbGxlclNsaWRlciwgX051bWJlckNvbnRyb2xsZXIpO1xuICBmdW5jdGlvbiBOdW1iZXJDb250cm9sbGVyU2xpZGVyKG9iamVjdCwgcHJvcGVydHksIG1pbiwgbWF4LCBzdGVwKSB7XG4gICAgY2xhc3NDYWxsQ2hlY2sodGhpcywgTnVtYmVyQ29udHJvbGxlclNsaWRlcik7XG4gICAgdmFyIF90aGlzMiA9IHBvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKE51bWJlckNvbnRyb2xsZXJTbGlkZXIuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihOdW1iZXJDb250cm9sbGVyU2xpZGVyKSkuY2FsbCh0aGlzLCBvYmplY3QsIHByb3BlcnR5LCB7IG1pbjogbWluLCBtYXg6IG1heCwgc3RlcDogc3RlcCB9KSk7XG4gICAgdmFyIF90aGlzID0gX3RoaXMyO1xuICAgIF90aGlzMi5fX2JhY2tncm91bmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBfdGhpczIuX19mb3JlZ3JvdW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZG9tLmJpbmQoX3RoaXMyLl9fYmFja2dyb3VuZCwgJ21vdXNlZG93bicsIG9uTW91c2VEb3duKTtcbiAgICBkb20uYmluZChfdGhpczIuX19iYWNrZ3JvdW5kLCAndG91Y2hzdGFydCcsIG9uVG91Y2hTdGFydCk7XG4gICAgZG9tLmFkZENsYXNzKF90aGlzMi5fX2JhY2tncm91bmQsICdzbGlkZXInKTtcbiAgICBkb20uYWRkQ2xhc3MoX3RoaXMyLl9fZm9yZWdyb3VuZCwgJ3NsaWRlci1mZycpO1xuICAgIGZ1bmN0aW9uIG9uTW91c2VEb3duKGUpIHtcbiAgICAgIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQuYmx1cigpO1xuICAgICAgZG9tLmJpbmQod2luZG93LCAnbW91c2Vtb3ZlJywgb25Nb3VzZURyYWcpO1xuICAgICAgZG9tLmJpbmQod2luZG93LCAnbW91c2V1cCcsIG9uTW91c2VVcCk7XG4gICAgICBvbk1vdXNlRHJhZyhlKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gb25Nb3VzZURyYWcoZSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdmFyIGJnUmVjdCA9IF90aGlzLl9fYmFja2dyb3VuZC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgIF90aGlzLnNldFZhbHVlKG1hcChlLmNsaWVudFgsIGJnUmVjdC5sZWZ0LCBiZ1JlY3QucmlnaHQsIF90aGlzLl9fbWluLCBfdGhpcy5fX21heCkpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBmdW5jdGlvbiBvbk1vdXNlVXAoKSB7XG4gICAgICBkb20udW5iaW5kKHdpbmRvdywgJ21vdXNlbW92ZScsIG9uTW91c2VEcmFnKTtcbiAgICAgIGRvbS51bmJpbmQod2luZG93LCAnbW91c2V1cCcsIG9uTW91c2VVcCk7XG4gICAgICBpZiAoX3RoaXMuX19vbkZpbmlzaENoYW5nZSkge1xuICAgICAgICBfdGhpcy5fX29uRmluaXNoQ2hhbmdlLmNhbGwoX3RoaXMsIF90aGlzLmdldFZhbHVlKCkpO1xuICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBvblRvdWNoU3RhcnQoZSkge1xuICAgICAgaWYgKGUudG91Y2hlcy5sZW5ndGggIT09IDEpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgZG9tLmJpbmQod2luZG93LCAndG91Y2htb3ZlJywgb25Ub3VjaE1vdmUpO1xuICAgICAgZG9tLmJpbmQod2luZG93LCAndG91Y2hlbmQnLCBvblRvdWNoRW5kKTtcbiAgICAgIG9uVG91Y2hNb3ZlKGUpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBvblRvdWNoTW92ZShlKSB7XG4gICAgICB2YXIgY2xpZW50WCA9IGUudG91Y2hlc1swXS5jbGllbnRYO1xuICAgICAgdmFyIGJnUmVjdCA9IF90aGlzLl9fYmFja2dyb3VuZC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgIF90aGlzLnNldFZhbHVlKG1hcChjbGllbnRYLCBiZ1JlY3QubGVmdCwgYmdSZWN0LnJpZ2h0LCBfdGhpcy5fX21pbiwgX3RoaXMuX19tYXgpKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gb25Ub3VjaEVuZCgpIHtcbiAgICAgIGRvbS51bmJpbmQod2luZG93LCAndG91Y2htb3ZlJywgb25Ub3VjaE1vdmUpO1xuICAgICAgZG9tLnVuYmluZCh3aW5kb3csICd0b3VjaGVuZCcsIG9uVG91Y2hFbmQpO1xuICAgICAgaWYgKF90aGlzLl9fb25GaW5pc2hDaGFuZ2UpIHtcbiAgICAgICAgX3RoaXMuX19vbkZpbmlzaENoYW5nZS5jYWxsKF90aGlzLCBfdGhpcy5nZXRWYWx1ZSgpKTtcbiAgICAgIH1cbiAgICB9XG4gICAgX3RoaXMyLnVwZGF0ZURpc3BsYXkoKTtcbiAgICBfdGhpczIuX19iYWNrZ3JvdW5kLmFwcGVuZENoaWxkKF90aGlzMi5fX2ZvcmVncm91bmQpO1xuICAgIF90aGlzMi5kb21FbGVtZW50LmFwcGVuZENoaWxkKF90aGlzMi5fX2JhY2tncm91bmQpO1xuICAgIHJldHVybiBfdGhpczI7XG4gIH1cbiAgY3JlYXRlQ2xhc3MoTnVtYmVyQ29udHJvbGxlclNsaWRlciwgW3tcbiAgICBrZXk6ICd1cGRhdGVEaXNwbGF5JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gdXBkYXRlRGlzcGxheSgpIHtcbiAgICAgIHZhciBwY3QgPSAodGhpcy5nZXRWYWx1ZSgpIC0gdGhpcy5fX21pbikgLyAodGhpcy5fX21heCAtIHRoaXMuX19taW4pO1xuICAgICAgdGhpcy5fX2ZvcmVncm91bmQuc3R5bGUud2lkdGggPSBwY3QgKiAxMDAgKyAnJSc7XG4gICAgICByZXR1cm4gZ2V0KE51bWJlckNvbnRyb2xsZXJTbGlkZXIucHJvdG90eXBlLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoTnVtYmVyQ29udHJvbGxlclNsaWRlci5wcm90b3R5cGUpLCAndXBkYXRlRGlzcGxheScsIHRoaXMpLmNhbGwodGhpcyk7XG4gICAgfVxuICB9XSk7XG4gIHJldHVybiBOdW1iZXJDb250cm9sbGVyU2xpZGVyO1xufShOdW1iZXJDb250cm9sbGVyKTtcblxudmFyIEZ1bmN0aW9uQ29udHJvbGxlciA9IGZ1bmN0aW9uIChfQ29udHJvbGxlcikge1xuICBpbmhlcml0cyhGdW5jdGlvbkNvbnRyb2xsZXIsIF9Db250cm9sbGVyKTtcbiAgZnVuY3Rpb24gRnVuY3Rpb25Db250cm9sbGVyKG9iamVjdCwgcHJvcGVydHksIHRleHQpIHtcbiAgICBjbGFzc0NhbGxDaGVjayh0aGlzLCBGdW5jdGlvbkNvbnRyb2xsZXIpO1xuICAgIHZhciBfdGhpczIgPSBwb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChGdW5jdGlvbkNvbnRyb2xsZXIuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihGdW5jdGlvbkNvbnRyb2xsZXIpKS5jYWxsKHRoaXMsIG9iamVjdCwgcHJvcGVydHkpKTtcbiAgICB2YXIgX3RoaXMgPSBfdGhpczI7XG4gICAgX3RoaXMyLl9fYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgX3RoaXMyLl9fYnV0dG9uLmlubmVySFRNTCA9IHRleHQgPT09IHVuZGVmaW5lZCA/ICdGaXJlJyA6IHRleHQ7XG4gICAgZG9tLmJpbmQoX3RoaXMyLl9fYnV0dG9uLCAnY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgX3RoaXMuZmlyZSgpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pO1xuICAgIGRvbS5hZGRDbGFzcyhfdGhpczIuX19idXR0b24sICdidXR0b24nKTtcbiAgICBfdGhpczIuZG9tRWxlbWVudC5hcHBlbmRDaGlsZChfdGhpczIuX19idXR0b24pO1xuICAgIHJldHVybiBfdGhpczI7XG4gIH1cbiAgY3JlYXRlQ2xhc3MoRnVuY3Rpb25Db250cm9sbGVyLCBbe1xuICAgIGtleTogJ2ZpcmUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBmaXJlKCkge1xuICAgICAgaWYgKHRoaXMuX19vbkNoYW5nZSkge1xuICAgICAgICB0aGlzLl9fb25DaGFuZ2UuY2FsbCh0aGlzKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuZ2V0VmFsdWUoKS5jYWxsKHRoaXMub2JqZWN0KTtcbiAgICAgIGlmICh0aGlzLl9fb25GaW5pc2hDaGFuZ2UpIHtcbiAgICAgICAgdGhpcy5fX29uRmluaXNoQ2hhbmdlLmNhbGwodGhpcywgdGhpcy5nZXRWYWx1ZSgpKTtcbiAgICAgIH1cbiAgICB9XG4gIH1dKTtcbiAgcmV0dXJuIEZ1bmN0aW9uQ29udHJvbGxlcjtcbn0oQ29udHJvbGxlcik7XG5cbnZhciBDb2xvckNvbnRyb2xsZXIgPSBmdW5jdGlvbiAoX0NvbnRyb2xsZXIpIHtcbiAgaW5oZXJpdHMoQ29sb3JDb250cm9sbGVyLCBfQ29udHJvbGxlcik7XG4gIGZ1bmN0aW9uIENvbG9yQ29udHJvbGxlcihvYmplY3QsIHByb3BlcnR5KSB7XG4gICAgY2xhc3NDYWxsQ2hlY2sodGhpcywgQ29sb3JDb250cm9sbGVyKTtcbiAgICB2YXIgX3RoaXMyID0gcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoQ29sb3JDb250cm9sbGVyLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoQ29sb3JDb250cm9sbGVyKSkuY2FsbCh0aGlzLCBvYmplY3QsIHByb3BlcnR5KSk7XG4gICAgX3RoaXMyLl9fY29sb3IgPSBuZXcgQ29sb3IoX3RoaXMyLmdldFZhbHVlKCkpO1xuICAgIF90aGlzMi5fX3RlbXAgPSBuZXcgQ29sb3IoMCk7XG4gICAgdmFyIF90aGlzID0gX3RoaXMyO1xuICAgIF90aGlzMi5kb21FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZG9tLm1ha2VTZWxlY3RhYmxlKF90aGlzMi5kb21FbGVtZW50LCBmYWxzZSk7XG4gICAgX3RoaXMyLl9fc2VsZWN0b3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBfdGhpczIuX19zZWxlY3Rvci5jbGFzc05hbWUgPSAnc2VsZWN0b3InO1xuICAgIF90aGlzMi5fX3NhdHVyYXRpb25fZmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBfdGhpczIuX19zYXR1cmF0aW9uX2ZpZWxkLmNsYXNzTmFtZSA9ICdzYXR1cmF0aW9uLWZpZWxkJztcbiAgICBfdGhpczIuX19maWVsZF9rbm9iID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgX3RoaXMyLl9fZmllbGRfa25vYi5jbGFzc05hbWUgPSAnZmllbGQta25vYic7XG4gICAgX3RoaXMyLl9fZmllbGRfa25vYl9ib3JkZXIgPSAnMnB4IHNvbGlkICc7XG4gICAgX3RoaXMyLl9faHVlX2tub2IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBfdGhpczIuX19odWVfa25vYi5jbGFzc05hbWUgPSAnaHVlLWtub2InO1xuICAgIF90aGlzMi5fX2h1ZV9maWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIF90aGlzMi5fX2h1ZV9maWVsZC5jbGFzc05hbWUgPSAnaHVlLWZpZWxkJztcbiAgICBfdGhpczIuX19pbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgX3RoaXMyLl9faW5wdXQudHlwZSA9ICd0ZXh0JztcbiAgICBfdGhpczIuX19pbnB1dF90ZXh0U2hhZG93ID0gJzAgMXB4IDFweCAnO1xuICAgIGRvbS5iaW5kKF90aGlzMi5fX2lucHV0LCAna2V5ZG93bicsIGZ1bmN0aW9uIChlKSB7XG4gICAgICBpZiAoZS5rZXlDb2RlID09PSAxMykge1xuICAgICAgICBvbkJsdXIuY2FsbCh0aGlzKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBkb20uYmluZChfdGhpczIuX19pbnB1dCwgJ2JsdXInLCBvbkJsdXIpO1xuICAgIGRvbS5iaW5kKF90aGlzMi5fX3NlbGVjdG9yLCAnbW91c2Vkb3duJywgZnVuY3Rpb24gKCkge1xuICAgICAgZG9tLmFkZENsYXNzKHRoaXMsICdkcmFnJykuYmluZCh3aW5kb3csICdtb3VzZXVwJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBkb20ucmVtb3ZlQ2xhc3MoX3RoaXMuX19zZWxlY3RvciwgJ2RyYWcnKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIGRvbS5iaW5kKF90aGlzMi5fX3NlbGVjdG9yLCAndG91Y2hzdGFydCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGRvbS5hZGRDbGFzcyh0aGlzLCAnZHJhZycpLmJpbmQod2luZG93LCAndG91Y2hlbmQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGRvbS5yZW1vdmVDbGFzcyhfdGhpcy5fX3NlbGVjdG9yLCAnZHJhZycpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgdmFyIHZhbHVlRmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBDb21tb24uZXh0ZW5kKF90aGlzMi5fX3NlbGVjdG9yLnN0eWxlLCB7XG4gICAgICB3aWR0aDogJzEyMnB4JyxcbiAgICAgIGhlaWdodDogJzEwMnB4JyxcbiAgICAgIHBhZGRpbmc6ICczcHgnLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzIyMicsXG4gICAgICBib3hTaGFkb3c6ICcwcHggMXB4IDNweCByZ2JhKDAsMCwwLDAuMyknXG4gICAgfSk7XG4gICAgQ29tbW9uLmV4dGVuZChfdGhpczIuX19maWVsZF9rbm9iLnN0eWxlLCB7XG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIHdpZHRoOiAnMTJweCcsXG4gICAgICBoZWlnaHQ6ICcxMnB4JyxcbiAgICAgIGJvcmRlcjogX3RoaXMyLl9fZmllbGRfa25vYl9ib3JkZXIgKyAoX3RoaXMyLl9fY29sb3IudiA8IDAuNSA/ICcjZmZmJyA6ICcjMDAwJyksXG4gICAgICBib3hTaGFkb3c6ICcwcHggMXB4IDNweCByZ2JhKDAsMCwwLDAuNSknLFxuICAgICAgYm9yZGVyUmFkaXVzOiAnMTJweCcsXG4gICAgICB6SW5kZXg6IDFcbiAgICB9KTtcbiAgICBDb21tb24uZXh0ZW5kKF90aGlzMi5fX2h1ZV9rbm9iLnN0eWxlLCB7XG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIHdpZHRoOiAnMTVweCcsXG4gICAgICBoZWlnaHQ6ICcycHgnLFxuICAgICAgYm9yZGVyUmlnaHQ6ICc0cHggc29saWQgI2ZmZicsXG4gICAgICB6SW5kZXg6IDFcbiAgICB9KTtcbiAgICBDb21tb24uZXh0ZW5kKF90aGlzMi5fX3NhdHVyYXRpb25fZmllbGQuc3R5bGUsIHtcbiAgICAgIHdpZHRoOiAnMTAwcHgnLFxuICAgICAgaGVpZ2h0OiAnMTAwcHgnLFxuICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkICM1NTUnLFxuICAgICAgbWFyZ2luUmlnaHQ6ICczcHgnLFxuICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICBjdXJzb3I6ICdwb2ludGVyJ1xuICAgIH0pO1xuICAgIENvbW1vbi5leHRlbmQodmFsdWVGaWVsZC5zdHlsZSwge1xuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgYmFja2dyb3VuZDogJ25vbmUnXG4gICAgfSk7XG4gICAgbGluZWFyR3JhZGllbnQodmFsdWVGaWVsZCwgJ3RvcCcsICdyZ2JhKDAsMCwwLDApJywgJyMwMDAnKTtcbiAgICBDb21tb24uZXh0ZW5kKF90aGlzMi5fX2h1ZV9maWVsZC5zdHlsZSwge1xuICAgICAgd2lkdGg6ICcxNXB4JyxcbiAgICAgIGhlaWdodDogJzEwMHB4JyxcbiAgICAgIGJvcmRlcjogJzFweCBzb2xpZCAjNTU1JyxcbiAgICAgIGN1cnNvcjogJ25zLXJlc2l6ZScsXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIHRvcDogJzNweCcsXG4gICAgICByaWdodDogJzNweCdcbiAgICB9KTtcbiAgICBodWVHcmFkaWVudChfdGhpczIuX19odWVfZmllbGQpO1xuICAgIENvbW1vbi5leHRlbmQoX3RoaXMyLl9faW5wdXQuc3R5bGUsIHtcbiAgICAgIG91dGxpbmU6ICdub25lJyxcbiAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICBjb2xvcjogJyNmZmYnLFxuICAgICAgYm9yZGVyOiAwLFxuICAgICAgZm9udFdlaWdodDogJ2JvbGQnLFxuICAgICAgdGV4dFNoYWRvdzogX3RoaXMyLl9faW5wdXRfdGV4dFNoYWRvdyArICdyZ2JhKDAsMCwwLDAuNyknXG4gICAgfSk7XG4gICAgZG9tLmJpbmQoX3RoaXMyLl9fc2F0dXJhdGlvbl9maWVsZCwgJ21vdXNlZG93bicsIGZpZWxkRG93bik7XG4gICAgZG9tLmJpbmQoX3RoaXMyLl9fc2F0dXJhdGlvbl9maWVsZCwgJ3RvdWNoc3RhcnQnLCBmaWVsZERvd24pO1xuICAgIGRvbS5iaW5kKF90aGlzMi5fX2ZpZWxkX2tub2IsICdtb3VzZWRvd24nLCBmaWVsZERvd24pO1xuICAgIGRvbS5iaW5kKF90aGlzMi5fX2ZpZWxkX2tub2IsICd0b3VjaHN0YXJ0JywgZmllbGREb3duKTtcbiAgICBkb20uYmluZChfdGhpczIuX19odWVfZmllbGQsICdtb3VzZWRvd24nLCBmaWVsZERvd25IKTtcbiAgICBkb20uYmluZChfdGhpczIuX19odWVfZmllbGQsICd0b3VjaHN0YXJ0JywgZmllbGREb3duSCk7XG4gICAgZnVuY3Rpb24gZmllbGREb3duKGUpIHtcbiAgICAgIHNldFNWKGUpO1xuICAgICAgZG9tLmJpbmQod2luZG93LCAnbW91c2Vtb3ZlJywgc2V0U1YpO1xuICAgICAgZG9tLmJpbmQod2luZG93LCAndG91Y2htb3ZlJywgc2V0U1YpO1xuICAgICAgZG9tLmJpbmQod2luZG93LCAnbW91c2V1cCcsIGZpZWxkVXBTVik7XG4gICAgICBkb20uYmluZCh3aW5kb3csICd0b3VjaGVuZCcsIGZpZWxkVXBTVik7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGZpZWxkRG93bkgoZSkge1xuICAgICAgc2V0SChlKTtcbiAgICAgIGRvbS5iaW5kKHdpbmRvdywgJ21vdXNlbW92ZScsIHNldEgpO1xuICAgICAgZG9tLmJpbmQod2luZG93LCAndG91Y2htb3ZlJywgc2V0SCk7XG4gICAgICBkb20uYmluZCh3aW5kb3csICdtb3VzZXVwJywgZmllbGRVcEgpO1xuICAgICAgZG9tLmJpbmQod2luZG93LCAndG91Y2hlbmQnLCBmaWVsZFVwSCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGZpZWxkVXBTVigpIHtcbiAgICAgIGRvbS51bmJpbmQod2luZG93LCAnbW91c2Vtb3ZlJywgc2V0U1YpO1xuICAgICAgZG9tLnVuYmluZCh3aW5kb3csICd0b3VjaG1vdmUnLCBzZXRTVik7XG4gICAgICBkb20udW5iaW5kKHdpbmRvdywgJ21vdXNldXAnLCBmaWVsZFVwU1YpO1xuICAgICAgZG9tLnVuYmluZCh3aW5kb3csICd0b3VjaGVuZCcsIGZpZWxkVXBTVik7XG4gICAgICBvbkZpbmlzaCgpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBmaWVsZFVwSCgpIHtcbiAgICAgIGRvbS51bmJpbmQod2luZG93LCAnbW91c2Vtb3ZlJywgc2V0SCk7XG4gICAgICBkb20udW5iaW5kKHdpbmRvdywgJ3RvdWNobW92ZScsIHNldEgpO1xuICAgICAgZG9tLnVuYmluZCh3aW5kb3csICdtb3VzZXVwJywgZmllbGRVcEgpO1xuICAgICAgZG9tLnVuYmluZCh3aW5kb3csICd0b3VjaGVuZCcsIGZpZWxkVXBIKTtcbiAgICAgIG9uRmluaXNoKCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIG9uQmx1cigpIHtcbiAgICAgIHZhciBpID0gaW50ZXJwcmV0KHRoaXMudmFsdWUpO1xuICAgICAgaWYgKGkgIT09IGZhbHNlKSB7XG4gICAgICAgIF90aGlzLl9fY29sb3IuX19zdGF0ZSA9IGk7XG4gICAgICAgIF90aGlzLnNldFZhbHVlKF90aGlzLl9fY29sb3IudG9PcmlnaW5hbCgpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMudmFsdWUgPSBfdGhpcy5fX2NvbG9yLnRvU3RyaW5nKCk7XG4gICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIG9uRmluaXNoKCkge1xuICAgICAgaWYgKF90aGlzLl9fb25GaW5pc2hDaGFuZ2UpIHtcbiAgICAgICAgX3RoaXMuX19vbkZpbmlzaENoYW5nZS5jYWxsKF90aGlzLCBfdGhpcy5fX2NvbG9yLnRvT3JpZ2luYWwoKSk7XG4gICAgICB9XG4gICAgfVxuICAgIF90aGlzMi5fX3NhdHVyYXRpb25fZmllbGQuYXBwZW5kQ2hpbGQodmFsdWVGaWVsZCk7XG4gICAgX3RoaXMyLl9fc2VsZWN0b3IuYXBwZW5kQ2hpbGQoX3RoaXMyLl9fZmllbGRfa25vYik7XG4gICAgX3RoaXMyLl9fc2VsZWN0b3IuYXBwZW5kQ2hpbGQoX3RoaXMyLl9fc2F0dXJhdGlvbl9maWVsZCk7XG4gICAgX3RoaXMyLl9fc2VsZWN0b3IuYXBwZW5kQ2hpbGQoX3RoaXMyLl9faHVlX2ZpZWxkKTtcbiAgICBfdGhpczIuX19odWVfZmllbGQuYXBwZW5kQ2hpbGQoX3RoaXMyLl9faHVlX2tub2IpO1xuICAgIF90aGlzMi5kb21FbGVtZW50LmFwcGVuZENoaWxkKF90aGlzMi5fX2lucHV0KTtcbiAgICBfdGhpczIuZG9tRWxlbWVudC5hcHBlbmRDaGlsZChfdGhpczIuX19zZWxlY3Rvcik7XG4gICAgX3RoaXMyLnVwZGF0ZURpc3BsYXkoKTtcbiAgICBmdW5jdGlvbiBzZXRTVihlKSB7XG4gICAgICBpZiAoZS50eXBlLmluZGV4T2YoJ3RvdWNoJykgPT09IC0xKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH1cbiAgICAgIHZhciBmaWVsZFJlY3QgPSBfdGhpcy5fX3NhdHVyYXRpb25fZmllbGQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICB2YXIgX3JlZiA9IGUudG91Y2hlcyAmJiBlLnRvdWNoZXNbMF0gfHwgZSxcbiAgICAgICAgICBjbGllbnRYID0gX3JlZi5jbGllbnRYLFxuICAgICAgICAgIGNsaWVudFkgPSBfcmVmLmNsaWVudFk7XG4gICAgICB2YXIgcyA9IChjbGllbnRYIC0gZmllbGRSZWN0LmxlZnQpIC8gKGZpZWxkUmVjdC5yaWdodCAtIGZpZWxkUmVjdC5sZWZ0KTtcbiAgICAgIHZhciB2ID0gMSAtIChjbGllbnRZIC0gZmllbGRSZWN0LnRvcCkgLyAoZmllbGRSZWN0LmJvdHRvbSAtIGZpZWxkUmVjdC50b3ApO1xuICAgICAgaWYgKHYgPiAxKSB7XG4gICAgICAgIHYgPSAxO1xuICAgICAgfSBlbHNlIGlmICh2IDwgMCkge1xuICAgICAgICB2ID0gMDtcbiAgICAgIH1cbiAgICAgIGlmIChzID4gMSkge1xuICAgICAgICBzID0gMTtcbiAgICAgIH0gZWxzZSBpZiAocyA8IDApIHtcbiAgICAgICAgcyA9IDA7XG4gICAgICB9XG4gICAgICBfdGhpcy5fX2NvbG9yLnYgPSB2O1xuICAgICAgX3RoaXMuX19jb2xvci5zID0gcztcbiAgICAgIF90aGlzLnNldFZhbHVlKF90aGlzLl9fY29sb3IudG9PcmlnaW5hbCgpKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgZnVuY3Rpb24gc2V0SChlKSB7XG4gICAgICBpZiAoZS50eXBlLmluZGV4T2YoJ3RvdWNoJykgPT09IC0xKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH1cbiAgICAgIHZhciBmaWVsZFJlY3QgPSBfdGhpcy5fX2h1ZV9maWVsZC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgIHZhciBfcmVmMiA9IGUudG91Y2hlcyAmJiBlLnRvdWNoZXNbMF0gfHwgZSxcbiAgICAgICAgICBjbGllbnRZID0gX3JlZjIuY2xpZW50WTtcbiAgICAgIHZhciBoID0gMSAtIChjbGllbnRZIC0gZmllbGRSZWN0LnRvcCkgLyAoZmllbGRSZWN0LmJvdHRvbSAtIGZpZWxkUmVjdC50b3ApO1xuICAgICAgaWYgKGggPiAxKSB7XG4gICAgICAgIGggPSAxO1xuICAgICAgfSBlbHNlIGlmIChoIDwgMCkge1xuICAgICAgICBoID0gMDtcbiAgICAgIH1cbiAgICAgIF90aGlzLl9fY29sb3IuaCA9IGggKiAzNjA7XG4gICAgICBfdGhpcy5zZXRWYWx1ZShfdGhpcy5fX2NvbG9yLnRvT3JpZ2luYWwoKSk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiBfdGhpczI7XG4gIH1cbiAgY3JlYXRlQ2xhc3MoQ29sb3JDb250cm9sbGVyLCBbe1xuICAgIGtleTogJ3VwZGF0ZURpc3BsYXknLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB1cGRhdGVEaXNwbGF5KCkge1xuICAgICAgdmFyIGkgPSBpbnRlcnByZXQodGhpcy5nZXRWYWx1ZSgpKTtcbiAgICAgIGlmIChpICE9PSBmYWxzZSkge1xuICAgICAgICB2YXIgbWlzbWF0Y2ggPSBmYWxzZTtcbiAgICAgICAgQ29tbW9uLmVhY2goQ29sb3IuQ09NUE9ORU5UUywgZnVuY3Rpb24gKGNvbXBvbmVudCkge1xuICAgICAgICAgIGlmICghQ29tbW9uLmlzVW5kZWZpbmVkKGlbY29tcG9uZW50XSkgJiYgIUNvbW1vbi5pc1VuZGVmaW5lZCh0aGlzLl9fY29sb3IuX19zdGF0ZVtjb21wb25lbnRdKSAmJiBpW2NvbXBvbmVudF0gIT09IHRoaXMuX19jb2xvci5fX3N0YXRlW2NvbXBvbmVudF0pIHtcbiAgICAgICAgICAgIG1pc21hdGNoID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybiB7fTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIHRoaXMpO1xuICAgICAgICBpZiAobWlzbWF0Y2gpIHtcbiAgICAgICAgICBDb21tb24uZXh0ZW5kKHRoaXMuX19jb2xvci5fX3N0YXRlLCBpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgQ29tbW9uLmV4dGVuZCh0aGlzLl9fdGVtcC5fX3N0YXRlLCB0aGlzLl9fY29sb3IuX19zdGF0ZSk7XG4gICAgICB0aGlzLl9fdGVtcC5hID0gMTtcbiAgICAgIHZhciBmbGlwID0gdGhpcy5fX2NvbG9yLnYgPCAwLjUgfHwgdGhpcy5fX2NvbG9yLnMgPiAwLjUgPyAyNTUgOiAwO1xuICAgICAgdmFyIF9mbGlwID0gMjU1IC0gZmxpcDtcbiAgICAgIENvbW1vbi5leHRlbmQodGhpcy5fX2ZpZWxkX2tub2Iuc3R5bGUsIHtcbiAgICAgICAgbWFyZ2luTGVmdDogMTAwICogdGhpcy5fX2NvbG9yLnMgLSA3ICsgJ3B4JyxcbiAgICAgICAgbWFyZ2luVG9wOiAxMDAgKiAoMSAtIHRoaXMuX19jb2xvci52KSAtIDcgKyAncHgnLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuX190ZW1wLnRvSGV4U3RyaW5nKCksXG4gICAgICAgIGJvcmRlcjogdGhpcy5fX2ZpZWxkX2tub2JfYm9yZGVyICsgJ3JnYignICsgZmxpcCArICcsJyArIGZsaXAgKyAnLCcgKyBmbGlwICsgJyknXG4gICAgICB9KTtcbiAgICAgIHRoaXMuX19odWVfa25vYi5zdHlsZS5tYXJnaW5Ub3AgPSAoMSAtIHRoaXMuX19jb2xvci5oIC8gMzYwKSAqIDEwMCArICdweCc7XG4gICAgICB0aGlzLl9fdGVtcC5zID0gMTtcbiAgICAgIHRoaXMuX190ZW1wLnYgPSAxO1xuICAgICAgbGluZWFyR3JhZGllbnQodGhpcy5fX3NhdHVyYXRpb25fZmllbGQsICdsZWZ0JywgJyNmZmYnLCB0aGlzLl9fdGVtcC50b0hleFN0cmluZygpKTtcbiAgICAgIHRoaXMuX19pbnB1dC52YWx1ZSA9IHRoaXMuX19jb2xvci50b1N0cmluZygpO1xuICAgICAgQ29tbW9uLmV4dGVuZCh0aGlzLl9faW5wdXQuc3R5bGUsIHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGlzLl9fY29sb3IudG9IZXhTdHJpbmcoKSxcbiAgICAgICAgY29sb3I6ICdyZ2IoJyArIGZsaXAgKyAnLCcgKyBmbGlwICsgJywnICsgZmxpcCArICcpJyxcbiAgICAgICAgdGV4dFNoYWRvdzogdGhpcy5fX2lucHV0X3RleHRTaGFkb3cgKyAncmdiYSgnICsgX2ZsaXAgKyAnLCcgKyBfZmxpcCArICcsJyArIF9mbGlwICsgJywuNyknXG4gICAgICB9KTtcbiAgICB9XG4gIH1dKTtcbiAgcmV0dXJuIENvbG9yQ29udHJvbGxlcjtcbn0oQ29udHJvbGxlcik7XG52YXIgdmVuZG9ycyA9IFsnLW1vei0nLCAnLW8tJywgJy13ZWJraXQtJywgJy1tcy0nLCAnJ107XG5mdW5jdGlvbiBsaW5lYXJHcmFkaWVudChlbGVtLCB4LCBhLCBiKSB7XG4gIGVsZW0uc3R5bGUuYmFja2dyb3VuZCA9ICcnO1xuICBDb21tb24uZWFjaCh2ZW5kb3JzLCBmdW5jdGlvbiAodmVuZG9yKSB7XG4gICAgZWxlbS5zdHlsZS5jc3NUZXh0ICs9ICdiYWNrZ3JvdW5kOiAnICsgdmVuZG9yICsgJ2xpbmVhci1ncmFkaWVudCgnICsgeCArICcsICcgKyBhICsgJyAwJSwgJyArIGIgKyAnIDEwMCUpOyAnO1xuICB9KTtcbn1cbmZ1bmN0aW9uIGh1ZUdyYWRpZW50KGVsZW0pIHtcbiAgZWxlbS5zdHlsZS5iYWNrZ3JvdW5kID0gJyc7XG4gIGVsZW0uc3R5bGUuY3NzVGV4dCArPSAnYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQodG9wLCAgI2ZmMDAwMCAwJSwgI2ZmMDBmZiAxNyUsICMwMDAwZmYgMzQlLCAjMDBmZmZmIDUwJSwgIzAwZmYwMCA2NyUsICNmZmZmMDAgODQlLCAjZmYwMDAwIDEwMCUpOyc7XG4gIGVsZW0uc3R5bGUuY3NzVGV4dCArPSAnYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCAgI2ZmMDAwMCAwJSwjZmYwMGZmIDE3JSwjMDAwMGZmIDM0JSwjMDBmZmZmIDUwJSwjMDBmZjAwIDY3JSwjZmZmZjAwIDg0JSwjZmYwMDAwIDEwMCUpOyc7XG4gIGVsZW0uc3R5bGUuY3NzVGV4dCArPSAnYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KHRvcCwgICNmZjAwMDAgMCUsI2ZmMDBmZiAxNyUsIzAwMDBmZiAzNCUsIzAwZmZmZiA1MCUsIzAwZmYwMCA2NyUsI2ZmZmYwMCA4NCUsI2ZmMDAwMCAxMDAlKTsnO1xuICBlbGVtLnN0eWxlLmNzc1RleHQgKz0gJ2JhY2tncm91bmQ6IC1tcy1saW5lYXItZ3JhZGllbnQodG9wLCAgI2ZmMDAwMCAwJSwjZmYwMGZmIDE3JSwjMDAwMGZmIDM0JSwjMDBmZmZmIDUwJSwjMDBmZjAwIDY3JSwjZmZmZjAwIDg0JSwjZmYwMDAwIDEwMCUpOyc7XG4gIGVsZW0uc3R5bGUuY3NzVGV4dCArPSAnYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvcCwgICNmZjAwMDAgMCUsI2ZmMDBmZiAxNyUsIzAwMDBmZiAzNCUsIzAwZmZmZiA1MCUsIzAwZmYwMCA2NyUsI2ZmZmYwMCA4NCUsI2ZmMDAwMCAxMDAlKTsnO1xufVxuXG52YXIgY3NzID0ge1xuICBsb2FkOiBmdW5jdGlvbiBsb2FkKHVybCwgaW5kb2MpIHtcbiAgICB2YXIgZG9jID0gaW5kb2MgfHwgZG9jdW1lbnQ7XG4gICAgdmFyIGxpbmsgPSBkb2MuY3JlYXRlRWxlbWVudCgnbGluaycpO1xuICAgIGxpbmsudHlwZSA9ICd0ZXh0L2Nzcyc7XG4gICAgbGluay5yZWwgPSAnc3R5bGVzaGVldCc7XG4gICAgbGluay5ocmVmID0gdXJsO1xuICAgIGRvYy5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdLmFwcGVuZENoaWxkKGxpbmspO1xuICB9LFxuICBpbmplY3Q6IGZ1bmN0aW9uIGluamVjdChjc3NDb250ZW50LCBpbmRvYykge1xuICAgIHZhciBkb2MgPSBpbmRvYyB8fCBkb2N1bWVudDtcbiAgICB2YXIgaW5qZWN0ZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgIGluamVjdGVkLnR5cGUgPSAndGV4dC9jc3MnO1xuICAgIGluamVjdGVkLmlubmVySFRNTCA9IGNzc0NvbnRlbnQ7XG4gICAgdmFyIGhlYWQgPSBkb2MuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXTtcbiAgICB0cnkge1xuICAgICAgaGVhZC5hcHBlbmRDaGlsZChpbmplY3RlZCk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgIH1cbiAgfVxufTtcblxudmFyIHNhdmVEaWFsb2dDb250ZW50cyA9IFwiPGRpdiBpZD1cXFwiZGctc2F2ZVxcXCIgY2xhc3M9XFxcImRnIGRpYWxvZ3VlXFxcIj5cXG5cXG4gIEhlcmUncyB0aGUgbmV3IGxvYWQgcGFyYW1ldGVyIGZvciB5b3VyIDxjb2RlPkdVSTwvY29kZT4ncyBjb25zdHJ1Y3RvcjpcXG5cXG4gIDx0ZXh0YXJlYSBpZD1cXFwiZGctbmV3LWNvbnN0cnVjdG9yXFxcIj48L3RleHRhcmVhPlxcblxcbiAgPGRpdiBpZD1cXFwiZGctc2F2ZS1sb2NhbGx5XFxcIj5cXG5cXG4gICAgPGlucHV0IGlkPVxcXCJkZy1sb2NhbC1zdG9yYWdlXFxcIiB0eXBlPVxcXCJjaGVja2JveFxcXCIvPiBBdXRvbWF0aWNhbGx5IHNhdmVcXG4gICAgdmFsdWVzIHRvIDxjb2RlPmxvY2FsU3RvcmFnZTwvY29kZT4gb24gZXhpdC5cXG5cXG4gICAgPGRpdiBpZD1cXFwiZGctbG9jYWwtZXhwbGFpblxcXCI+VGhlIHZhbHVlcyBzYXZlZCB0byA8Y29kZT5sb2NhbFN0b3JhZ2U8L2NvZGU+IHdpbGxcXG4gICAgICBvdmVycmlkZSB0aG9zZSBwYXNzZWQgdG8gPGNvZGU+ZGF0LkdVSTwvY29kZT4ncyBjb25zdHJ1Y3Rvci4gVGhpcyBtYWtlcyBpdFxcbiAgICAgIGVhc2llciB0byB3b3JrIGluY3JlbWVudGFsbHksIGJ1dCA8Y29kZT5sb2NhbFN0b3JhZ2U8L2NvZGU+IGlzIGZyYWdpbGUsXFxuICAgICAgYW5kIHlvdXIgZnJpZW5kcyBtYXkgbm90IHNlZSB0aGUgc2FtZSB2YWx1ZXMgeW91IGRvLlxcblxcbiAgICA8L2Rpdj5cXG5cXG4gIDwvZGl2PlxcblxcbjwvZGl2PlwiO1xuXG52YXIgQ29udHJvbGxlckZhY3RvcnkgPSBmdW5jdGlvbiBDb250cm9sbGVyRmFjdG9yeShvYmplY3QsIHByb3BlcnR5KSB7XG4gIHZhciBpbml0aWFsVmFsdWUgPSBvYmplY3RbcHJvcGVydHldO1xuICBpZiAoQ29tbW9uLmlzQXJyYXkoYXJndW1lbnRzWzJdKSB8fCBDb21tb24uaXNPYmplY3QoYXJndW1lbnRzWzJdKSkge1xuICAgIHJldHVybiBuZXcgT3B0aW9uQ29udHJvbGxlcihvYmplY3QsIHByb3BlcnR5LCBhcmd1bWVudHNbMl0pO1xuICB9XG4gIGlmIChDb21tb24uaXNOdW1iZXIoaW5pdGlhbFZhbHVlKSkge1xuICAgIGlmIChDb21tb24uaXNOdW1iZXIoYXJndW1lbnRzWzJdKSAmJiBDb21tb24uaXNOdW1iZXIoYXJndW1lbnRzWzNdKSkge1xuICAgICAgaWYgKENvbW1vbi5pc051bWJlcihhcmd1bWVudHNbNF0pKSB7XG4gICAgICAgIHJldHVybiBuZXcgTnVtYmVyQ29udHJvbGxlclNsaWRlcihvYmplY3QsIHByb3BlcnR5LCBhcmd1bWVudHNbMl0sIGFyZ3VtZW50c1szXSwgYXJndW1lbnRzWzRdKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBuZXcgTnVtYmVyQ29udHJvbGxlclNsaWRlcihvYmplY3QsIHByb3BlcnR5LCBhcmd1bWVudHNbMl0sIGFyZ3VtZW50c1szXSk7XG4gICAgfVxuICAgIGlmIChDb21tb24uaXNOdW1iZXIoYXJndW1lbnRzWzRdKSkge1xuICAgICAgcmV0dXJuIG5ldyBOdW1iZXJDb250cm9sbGVyQm94KG9iamVjdCwgcHJvcGVydHksIHsgbWluOiBhcmd1bWVudHNbMl0sIG1heDogYXJndW1lbnRzWzNdLCBzdGVwOiBhcmd1bWVudHNbNF0gfSk7XG4gICAgfVxuICAgIHJldHVybiBuZXcgTnVtYmVyQ29udHJvbGxlckJveChvYmplY3QsIHByb3BlcnR5LCB7IG1pbjogYXJndW1lbnRzWzJdLCBtYXg6IGFyZ3VtZW50c1szXSB9KTtcbiAgfVxuICBpZiAoQ29tbW9uLmlzU3RyaW5nKGluaXRpYWxWYWx1ZSkpIHtcbiAgICByZXR1cm4gbmV3IFN0cmluZ0NvbnRyb2xsZXIob2JqZWN0LCBwcm9wZXJ0eSk7XG4gIH1cbiAgaWYgKENvbW1vbi5pc0Z1bmN0aW9uKGluaXRpYWxWYWx1ZSkpIHtcbiAgICByZXR1cm4gbmV3IEZ1bmN0aW9uQ29udHJvbGxlcihvYmplY3QsIHByb3BlcnR5LCAnJyk7XG4gIH1cbiAgaWYgKENvbW1vbi5pc0Jvb2xlYW4oaW5pdGlhbFZhbHVlKSkge1xuICAgIHJldHVybiBuZXcgQm9vbGVhbkNvbnRyb2xsZXIob2JqZWN0LCBwcm9wZXJ0eSk7XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59O1xuXG5mdW5jdGlvbiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoY2FsbGJhY2spIHtcbiAgc2V0VGltZW91dChjYWxsYmFjaywgMTAwMCAvIDYwKTtcbn1cbnZhciByZXF1ZXN0QW5pbWF0aW9uRnJhbWUkMSA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgd2luZG93LndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSB8fCB3aW5kb3cubW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IHdpbmRvdy5vUmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IHdpbmRvdy5tc1JlcXVlc3RBbmltYXRpb25GcmFtZSB8fCByZXF1ZXN0QW5pbWF0aW9uRnJhbWU7XG5cbnZhciBDZW50ZXJlZERpdiA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gQ2VudGVyZWREaXYoKSB7XG4gICAgY2xhc3NDYWxsQ2hlY2sodGhpcywgQ2VudGVyZWREaXYpO1xuICAgIHRoaXMuYmFja2dyb3VuZEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBDb21tb24uZXh0ZW5kKHRoaXMuYmFja2dyb3VuZEVsZW1lbnQuc3R5bGUsIHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMCwwLDAsMC44KScsXG4gICAgICB0b3A6IDAsXG4gICAgICBsZWZ0OiAwLFxuICAgICAgZGlzcGxheTogJ25vbmUnLFxuICAgICAgekluZGV4OiAnMTAwMCcsXG4gICAgICBvcGFjaXR5OiAwLFxuICAgICAgV2Via2l0VHJhbnNpdGlvbjogJ29wYWNpdHkgMC4ycyBsaW5lYXInLFxuICAgICAgdHJhbnNpdGlvbjogJ29wYWNpdHkgMC4ycyBsaW5lYXInXG4gICAgfSk7XG4gICAgZG9tLm1ha2VGdWxsc2NyZWVuKHRoaXMuYmFja2dyb3VuZEVsZW1lbnQpO1xuICAgIHRoaXMuYmFja2dyb3VuZEVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAnZml4ZWQnO1xuICAgIHRoaXMuZG9tRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIENvbW1vbi5leHRlbmQodGhpcy5kb21FbGVtZW50LnN0eWxlLCB7XG4gICAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICAgIGRpc3BsYXk6ICdub25lJyxcbiAgICAgIHpJbmRleDogJzEwMDEnLFxuICAgICAgb3BhY2l0eTogMCxcbiAgICAgIFdlYmtpdFRyYW5zaXRpb246ICctd2Via2l0LXRyYW5zZm9ybSAwLjJzIGVhc2Utb3V0LCBvcGFjaXR5IDAuMnMgbGluZWFyJyxcbiAgICAgIHRyYW5zaXRpb246ICd0cmFuc2Zvcm0gMC4ycyBlYXNlLW91dCwgb3BhY2l0eSAwLjJzIGxpbmVhcidcbiAgICB9KTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuYmFja2dyb3VuZEVsZW1lbnQpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5kb21FbGVtZW50KTtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgIGRvbS5iaW5kKHRoaXMuYmFja2dyb3VuZEVsZW1lbnQsICdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzLmhpZGUoKTtcbiAgICB9KTtcbiAgfVxuICBjcmVhdGVDbGFzcyhDZW50ZXJlZERpdiwgW3tcbiAgICBrZXk6ICdzaG93JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2hvdygpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICB0aGlzLmJhY2tncm91bmRFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgdGhpcy5kb21FbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgdGhpcy5kb21FbGVtZW50LnN0eWxlLm9wYWNpdHkgPSAwO1xuICAgICAgdGhpcy5kb21FbGVtZW50LnN0eWxlLndlYmtpdFRyYW5zZm9ybSA9ICdzY2FsZSgxLjEpJztcbiAgICAgIHRoaXMubGF5b3V0KCk7XG4gICAgICBDb21tb24uZGVmZXIoZnVuY3Rpb24gKCkge1xuICAgICAgICBfdGhpcy5iYWNrZ3JvdW5kRWxlbWVudC5zdHlsZS5vcGFjaXR5ID0gMTtcbiAgICAgICAgX3RoaXMuZG9tRWxlbWVudC5zdHlsZS5vcGFjaXR5ID0gMTtcbiAgICAgICAgX3RoaXMuZG9tRWxlbWVudC5zdHlsZS53ZWJraXRUcmFuc2Zvcm0gPSAnc2NhbGUoMSknO1xuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnaGlkZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGhpZGUoKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgdmFyIGhpZGUgPSBmdW5jdGlvbiBoaWRlKCkge1xuICAgICAgICBfdGhpcy5kb21FbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIF90aGlzLmJhY2tncm91bmRFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIGRvbS51bmJpbmQoX3RoaXMuZG9tRWxlbWVudCwgJ3dlYmtpdFRyYW5zaXRpb25FbmQnLCBoaWRlKTtcbiAgICAgICAgZG9tLnVuYmluZChfdGhpcy5kb21FbGVtZW50LCAndHJhbnNpdGlvbmVuZCcsIGhpZGUpO1xuICAgICAgICBkb20udW5iaW5kKF90aGlzLmRvbUVsZW1lbnQsICdvVHJhbnNpdGlvbkVuZCcsIGhpZGUpO1xuICAgICAgfTtcbiAgICAgIGRvbS5iaW5kKHRoaXMuZG9tRWxlbWVudCwgJ3dlYmtpdFRyYW5zaXRpb25FbmQnLCBoaWRlKTtcbiAgICAgIGRvbS5iaW5kKHRoaXMuZG9tRWxlbWVudCwgJ3RyYW5zaXRpb25lbmQnLCBoaWRlKTtcbiAgICAgIGRvbS5iaW5kKHRoaXMuZG9tRWxlbWVudCwgJ29UcmFuc2l0aW9uRW5kJywgaGlkZSk7XG4gICAgICB0aGlzLmJhY2tncm91bmRFbGVtZW50LnN0eWxlLm9wYWNpdHkgPSAwO1xuICAgICAgdGhpcy5kb21FbGVtZW50LnN0eWxlLm9wYWNpdHkgPSAwO1xuICAgICAgdGhpcy5kb21FbGVtZW50LnN0eWxlLndlYmtpdFRyYW5zZm9ybSA9ICdzY2FsZSgxLjEpJztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdsYXlvdXQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBsYXlvdXQoKSB7XG4gICAgICB0aGlzLmRvbUVsZW1lbnQuc3R5bGUubGVmdCA9IHdpbmRvdy5pbm5lcldpZHRoIC8gMiAtIGRvbS5nZXRXaWR0aCh0aGlzLmRvbUVsZW1lbnQpIC8gMiArICdweCc7XG4gICAgICB0aGlzLmRvbUVsZW1lbnQuc3R5bGUudG9wID0gd2luZG93LmlubmVySGVpZ2h0IC8gMiAtIGRvbS5nZXRIZWlnaHQodGhpcy5kb21FbGVtZW50KSAvIDIgKyAncHgnO1xuICAgIH1cbiAgfV0pO1xuICByZXR1cm4gQ2VudGVyZWREaXY7XG59KCk7XG5cbnZhciBzdHlsZVNoZWV0ID0gX19fJGluc2VydFN0eWxlKFwiLmRnIHVse2xpc3Qtc3R5bGU6bm9uZTttYXJnaW46MDtwYWRkaW5nOjA7d2lkdGg6MTAwJTtjbGVhcjpib3RofS5kZy5hY3twb3NpdGlvbjpmaXhlZDt0b3A6MDtsZWZ0OjA7cmlnaHQ6MDtoZWlnaHQ6MDt6LWluZGV4OjB9LmRnOm5vdCguYWMpIC5tYWlue292ZXJmbG93OmhpZGRlbn0uZGcubWFpbnstd2Via2l0LXRyYW5zaXRpb246b3BhY2l0eSAuMXMgbGluZWFyOy1vLXRyYW5zaXRpb246b3BhY2l0eSAuMXMgbGluZWFyOy1tb3otdHJhbnNpdGlvbjpvcGFjaXR5IC4xcyBsaW5lYXI7dHJhbnNpdGlvbjpvcGFjaXR5IC4xcyBsaW5lYXJ9LmRnLm1haW4udGFsbGVyLXRoYW4td2luZG93e292ZXJmbG93LXk6YXV0b30uZGcubWFpbi50YWxsZXItdGhhbi13aW5kb3cgLmNsb3NlLWJ1dHRvbntvcGFjaXR5OjE7bWFyZ2luLXRvcDotMXB4O2JvcmRlci10b3A6MXB4IHNvbGlkICMyYzJjMmN9LmRnLm1haW4gdWwuY2xvc2VkIC5jbG9zZS1idXR0b257b3BhY2l0eToxICFpbXBvcnRhbnR9LmRnLm1haW46aG92ZXIgLmNsb3NlLWJ1dHRvbiwuZGcubWFpbiAuY2xvc2UtYnV0dG9uLmRyYWd7b3BhY2l0eToxfS5kZy5tYWluIC5jbG9zZS1idXR0b257LXdlYmtpdC10cmFuc2l0aW9uOm9wYWNpdHkgLjFzIGxpbmVhcjstby10cmFuc2l0aW9uOm9wYWNpdHkgLjFzIGxpbmVhcjstbW96LXRyYW5zaXRpb246b3BhY2l0eSAuMXMgbGluZWFyO3RyYW5zaXRpb246b3BhY2l0eSAuMXMgbGluZWFyO2JvcmRlcjowO2xpbmUtaGVpZ2h0OjE5cHg7aGVpZ2h0OjIwcHg7Y3Vyc29yOnBvaW50ZXI7dGV4dC1hbGlnbjpjZW50ZXI7YmFja2dyb3VuZC1jb2xvcjojMDAwfS5kZy5tYWluIC5jbG9zZS1idXR0b24uY2xvc2UtdG9we3Bvc2l0aW9uOnJlbGF0aXZlfS5kZy5tYWluIC5jbG9zZS1idXR0b24uY2xvc2UtYm90dG9te3Bvc2l0aW9uOmFic29sdXRlfS5kZy5tYWluIC5jbG9zZS1idXR0b246aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojMTExfS5kZy5he2Zsb2F0OnJpZ2h0O21hcmdpbi1yaWdodDoxNXB4O292ZXJmbG93LXk6dmlzaWJsZX0uZGcuYS5oYXMtc2F2ZT51bC5jbG9zZS10b3B7bWFyZ2luLXRvcDowfS5kZy5hLmhhcy1zYXZlPnVsLmNsb3NlLWJvdHRvbXttYXJnaW4tdG9wOjI3cHh9LmRnLmEuaGFzLXNhdmU+dWwuY2xvc2Vke21hcmdpbi10b3A6MH0uZGcuYSAuc2F2ZS1yb3d7dG9wOjA7ei1pbmRleDoxMDAyfS5kZy5hIC5zYXZlLXJvdy5jbG9zZS10b3B7cG9zaXRpb246cmVsYXRpdmV9LmRnLmEgLnNhdmUtcm93LmNsb3NlLWJvdHRvbXtwb3NpdGlvbjpmaXhlZH0uZGcgbGl7LXdlYmtpdC10cmFuc2l0aW9uOmhlaWdodCAuMXMgZWFzZS1vdXQ7LW8tdHJhbnNpdGlvbjpoZWlnaHQgLjFzIGVhc2Utb3V0Oy1tb3otdHJhbnNpdGlvbjpoZWlnaHQgLjFzIGVhc2Utb3V0O3RyYW5zaXRpb246aGVpZ2h0IC4xcyBlYXNlLW91dDstd2Via2l0LXRyYW5zaXRpb246b3ZlcmZsb3cgLjFzIGxpbmVhcjstby10cmFuc2l0aW9uOm92ZXJmbG93IC4xcyBsaW5lYXI7LW1vei10cmFuc2l0aW9uOm92ZXJmbG93IC4xcyBsaW5lYXI7dHJhbnNpdGlvbjpvdmVyZmxvdyAuMXMgbGluZWFyfS5kZyBsaTpub3QoLmZvbGRlcil7Y3Vyc29yOmF1dG87aGVpZ2h0OjI3cHg7bGluZS1oZWlnaHQ6MjdweDtwYWRkaW5nOjAgNHB4IDAgNXB4fS5kZyBsaS5mb2xkZXJ7cGFkZGluZzowO2JvcmRlci1sZWZ0OjRweCBzb2xpZCByZ2JhKDAsMCwwLDApfS5kZyBsaS50aXRsZXtjdXJzb3I6cG9pbnRlcjttYXJnaW4tbGVmdDotNHB4fS5kZyAuY2xvc2VkIGxpOm5vdCgudGl0bGUpLC5kZyAuY2xvc2VkIHVsIGxpLC5kZyAuY2xvc2VkIHVsIGxpPip7aGVpZ2h0OjA7b3ZlcmZsb3c6aGlkZGVuO2JvcmRlcjowfS5kZyAuY3J7Y2xlYXI6Ym90aDtwYWRkaW5nLWxlZnQ6M3B4O2hlaWdodDoyN3B4O292ZXJmbG93OmhpZGRlbn0uZGcgLnByb3BlcnR5LW5hbWV7Y3Vyc29yOmRlZmF1bHQ7ZmxvYXQ6bGVmdDtjbGVhcjpsZWZ0O3dpZHRoOjQwJTtvdmVyZmxvdzpoaWRkZW47dGV4dC1vdmVyZmxvdzplbGxpcHNpc30uZGcgLmNyLmZ1bmN0aW9uIC5wcm9wZXJ0eS1uYW1le3dpZHRoOjEwMCV9LmRnIC5je2Zsb2F0OmxlZnQ7d2lkdGg6NjAlO3Bvc2l0aW9uOnJlbGF0aXZlfS5kZyAuYyBpbnB1dFt0eXBlPXRleHRde2JvcmRlcjowO21hcmdpbi10b3A6NHB4O3BhZGRpbmc6M3B4O3dpZHRoOjEwMCU7ZmxvYXQ6cmlnaHR9LmRnIC5oYXMtc2xpZGVyIGlucHV0W3R5cGU9dGV4dF17d2lkdGg6MzAlO21hcmdpbi1sZWZ0OjB9LmRnIC5zbGlkZXJ7ZmxvYXQ6bGVmdDt3aWR0aDo2NiU7bWFyZ2luLWxlZnQ6LTVweDttYXJnaW4tcmlnaHQ6MDtoZWlnaHQ6MTlweDttYXJnaW4tdG9wOjRweH0uZGcgLnNsaWRlci1mZ3toZWlnaHQ6MTAwJX0uZGcgLmMgaW5wdXRbdHlwZT1jaGVja2JveF17bWFyZ2luLXRvcDo3cHh9LmRnIC5jIHNlbGVjdHttYXJnaW4tdG9wOjVweH0uZGcgLmNyLmZ1bmN0aW9uLC5kZyAuY3IuZnVuY3Rpb24gLnByb3BlcnR5LW5hbWUsLmRnIC5jci5mdW5jdGlvbiAqLC5kZyAuY3IuYm9vbGVhbiwuZGcgLmNyLmJvb2xlYW4gKntjdXJzb3I6cG9pbnRlcn0uZGcgLmNyLmNvbG9ye292ZXJmbG93OnZpc2libGV9LmRnIC5zZWxlY3RvcntkaXNwbGF5Om5vbmU7cG9zaXRpb246YWJzb2x1dGU7bWFyZ2luLWxlZnQ6LTlweDttYXJnaW4tdG9wOjIzcHg7ei1pbmRleDoxMH0uZGcgLmM6aG92ZXIgLnNlbGVjdG9yLC5kZyAuc2VsZWN0b3IuZHJhZ3tkaXNwbGF5OmJsb2NrfS5kZyBsaS5zYXZlLXJvd3twYWRkaW5nOjB9LmRnIGxpLnNhdmUtcm93IC5idXR0b257ZGlzcGxheTppbmxpbmUtYmxvY2s7cGFkZGluZzowcHggNnB4fS5kZy5kaWFsb2d1ZXtiYWNrZ3JvdW5kLWNvbG9yOiMyMjI7d2lkdGg6NDYwcHg7cGFkZGluZzoxNXB4O2ZvbnQtc2l6ZToxM3B4O2xpbmUtaGVpZ2h0OjE1cHh9I2RnLW5ldy1jb25zdHJ1Y3RvcntwYWRkaW5nOjEwcHg7Y29sb3I6IzIyMjtmb250LWZhbWlseTpNb25hY28sIG1vbm9zcGFjZTtmb250LXNpemU6MTBweDtib3JkZXI6MDtyZXNpemU6bm9uZTtib3gtc2hhZG93Omluc2V0IDFweCAxcHggMXB4ICM4ODg7d29yZC13cmFwOmJyZWFrLXdvcmQ7bWFyZ2luOjEycHggMDtkaXNwbGF5OmJsb2NrO3dpZHRoOjQ0MHB4O292ZXJmbG93LXk6c2Nyb2xsO2hlaWdodDoxMDBweDtwb3NpdGlvbjpyZWxhdGl2ZX0jZGctbG9jYWwtZXhwbGFpbntkaXNwbGF5Om5vbmU7Zm9udC1zaXplOjExcHg7bGluZS1oZWlnaHQ6MTdweDtib3JkZXItcmFkaXVzOjNweDtiYWNrZ3JvdW5kLWNvbG9yOiMzMzM7cGFkZGluZzo4cHg7bWFyZ2luLXRvcDoxMHB4fSNkZy1sb2NhbC1leHBsYWluIGNvZGV7Zm9udC1zaXplOjEwcHh9I2RhdC1ndWktc2F2ZS1sb2NhbGx5e2Rpc3BsYXk6bm9uZX0uZGd7Y29sb3I6I2VlZTtmb250OjExcHggJ0x1Y2lkYSBHcmFuZGUnLCBzYW5zLXNlcmlmO3RleHQtc2hhZG93OjAgLTFweCAwICMxMTF9LmRnLm1haW46Oi13ZWJraXQtc2Nyb2xsYmFye3dpZHRoOjVweDtiYWNrZ3JvdW5kOiMxYTFhMWF9LmRnLm1haW46Oi13ZWJraXQtc2Nyb2xsYmFyLWNvcm5lcntoZWlnaHQ6MDtkaXNwbGF5Om5vbmV9LmRnLm1haW46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1ie2JvcmRlci1yYWRpdXM6NXB4O2JhY2tncm91bmQ6IzY3Njc2N30uZGcgbGk6bm90KC5mb2xkZXIpe2JhY2tncm91bmQ6IzFhMWExYTtib3JkZXItYm90dG9tOjFweCBzb2xpZCAjMmMyYzJjfS5kZyBsaS5zYXZlLXJvd3tsaW5lLWhlaWdodDoyNXB4O2JhY2tncm91bmQ6I2RhZDVjYjtib3JkZXI6MH0uZGcgbGkuc2F2ZS1yb3cgc2VsZWN0e21hcmdpbi1sZWZ0OjVweDt3aWR0aDoxMDhweH0uZGcgbGkuc2F2ZS1yb3cgLmJ1dHRvbnttYXJnaW4tbGVmdDo1cHg7bWFyZ2luLXRvcDoxcHg7Ym9yZGVyLXJhZGl1czoycHg7Zm9udC1zaXplOjlweDtsaW5lLWhlaWdodDo3cHg7cGFkZGluZzo0cHggNHB4IDVweCA0cHg7YmFja2dyb3VuZDojYzViZGFkO2NvbG9yOiNmZmY7dGV4dC1zaGFkb3c6MCAxcHggMCAjYjBhNThmO2JveC1zaGFkb3c6MCAtMXB4IDAgI2IwYTU4ZjtjdXJzb3I6cG9pbnRlcn0uZGcgbGkuc2F2ZS1yb3cgLmJ1dHRvbi5nZWFyc3tiYWNrZ3JvdW5kOiNjNWJkYWQgdXJsKGRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQXNBQUFBTkNBWUFBQUIvOVpRN0FBQUFHWFJGV0hSVGIyWjBkMkZ5WlFCQlpHOWlaU0JKYldGblpWSmxZV1I1Y2NsbFBBQUFBUUpKUkVGVWVOcGlZS0FVL1AvL1B3R0lDL0FwQ0FCaUJTQVcrSThBQ2xBY2dLeFE0VDlob01BRVVyeHgyUVNHTjYrZWdEWCsvdldUNGU3TjgyQU1Zb1BBeC9ldndXb1lvU1liQUNYMnM3S3hDeHpjc2V6RGgzZXZGb0RFQllURUVxeWNnZ1dBekE5QXVVU1FRZ2VZUGE5ZlB2Ni9ZV20vQWN4NUlQYjd0eS9mdytRWmJsdzY3dkRzOFIwWUh5UWhnT2J4K3lBSmtCcW1HNWRQUERoMWFQT0dSL2V1Z1cwRzR2bElvVElmeUZjQStRZWtoaEhKaFBkUXhiaUFJZ3VNQlRRWnJQRDcxMDhNNnJvV1lERlFpSUFBdjZBb3cvMWJGd1hnaXMrZjJMVUF5bndvSWFOY3o4WE54M0RsN01FSlVER1FweDlndFE4WUN1ZUIrRDI2T0VDQUFRRGFkdDdlNDZENDJRQUFBQUJKUlU1RXJrSmdnZz09KSAycHggMXB4IG5vLXJlcGVhdDtoZWlnaHQ6N3B4O3dpZHRoOjhweH0uZGcgbGkuc2F2ZS1yb3cgLmJ1dHRvbjpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiNiYWIxOWU7Ym94LXNoYWRvdzowIC0xcHggMCAjYjBhNThmfS5kZyBsaS5mb2xkZXJ7Ym9yZGVyLWJvdHRvbTowfS5kZyBsaS50aXRsZXtwYWRkaW5nLWxlZnQ6MTZweDtiYWNrZ3JvdW5kOiMwMDAgdXJsKGRhdGE6aW1hZ2UvZ2lmO2Jhc2U2NCxSMGxHT0RsaEJRQUZBSkVBQVAvLy8vUHo4Ly8vLy8vLy95SDVCQUVBQUFJQUxBQUFBQUFGQUFVQUFBSUlsSStoS2dGeG9DZ0FPdz09KSA2cHggMTBweCBuby1yZXBlYXQ7Y3Vyc29yOnBvaW50ZXI7Ym9yZGVyLWJvdHRvbToxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwLjIpfS5kZyAuY2xvc2VkIGxpLnRpdGxle2JhY2tncm91bmQtaW1hZ2U6dXJsKGRhdGE6aW1hZ2UvZ2lmO2Jhc2U2NCxSMGxHT0RsaEJRQUZBSkVBQVAvLy8vUHo4Ly8vLy8vLy95SDVCQUVBQUFJQUxBQUFBQUFGQUFVQUFBSUlsR0lXcU1DYldBRUFPdz09KX0uZGcgLmNyLmJvb2xlYW57Ym9yZGVyLWxlZnQ6M3B4IHNvbGlkICM4MDY3ODd9LmRnIC5jci5jb2xvcntib3JkZXItbGVmdDozcHggc29saWR9LmRnIC5jci5mdW5jdGlvbntib3JkZXItbGVmdDozcHggc29saWQgI2U2MWQ1Zn0uZGcgLmNyLm51bWJlcntib3JkZXItbGVmdDozcHggc29saWQgIzJGQTFENn0uZGcgLmNyLm51bWJlciBpbnB1dFt0eXBlPXRleHRde2NvbG9yOiMyRkExRDZ9LmRnIC5jci5zdHJpbmd7Ym9yZGVyLWxlZnQ6M3B4IHNvbGlkICMxZWQzNmZ9LmRnIC5jci5zdHJpbmcgaW5wdXRbdHlwZT10ZXh0XXtjb2xvcjojMWVkMzZmfS5kZyAuY3IuZnVuY3Rpb246aG92ZXIsLmRnIC5jci5ib29sZWFuOmhvdmVye2JhY2tncm91bmQ6IzExMX0uZGcgLmMgaW5wdXRbdHlwZT10ZXh0XXtiYWNrZ3JvdW5kOiMzMDMwMzA7b3V0bGluZTpub25lfS5kZyAuYyBpbnB1dFt0eXBlPXRleHRdOmhvdmVye2JhY2tncm91bmQ6IzNjM2MzY30uZGcgLmMgaW5wdXRbdHlwZT10ZXh0XTpmb2N1c3tiYWNrZ3JvdW5kOiM0OTQ5NDk7Y29sb3I6I2ZmZn0uZGcgLmMgLnNsaWRlcntiYWNrZ3JvdW5kOiMzMDMwMzA7Y3Vyc29yOmV3LXJlc2l6ZX0uZGcgLmMgLnNsaWRlci1mZ3tiYWNrZ3JvdW5kOiMyRkExRDY7bWF4LXdpZHRoOjEwMCV9LmRnIC5jIC5zbGlkZXI6aG92ZXJ7YmFja2dyb3VuZDojM2MzYzNjfS5kZyAuYyAuc2xpZGVyOmhvdmVyIC5zbGlkZXItZmd7YmFja2dyb3VuZDojNDRhYmRhfVxcblwiKTtcblxuY3NzLmluamVjdChzdHlsZVNoZWV0KTtcbnZhciBDU1NfTkFNRVNQQUNFID0gJ2RnJztcbnZhciBISURFX0tFWV9DT0RFID0gNzI7XG52YXIgQ0xPU0VfQlVUVE9OX0hFSUdIVCA9IDIwO1xudmFyIERFRkFVTFRfREVGQVVMVF9QUkVTRVRfTkFNRSA9ICdEZWZhdWx0JztcbnZhciBTVVBQT1JUU19MT0NBTF9TVE9SQUdFID0gZnVuY3Rpb24gKCkge1xuICB0cnkge1xuICAgIHJldHVybiAhIXdpbmRvdy5sb2NhbFN0b3JhZ2U7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn0oKTtcbnZhciBTQVZFX0RJQUxPR1VFID0gdm9pZCAwO1xudmFyIGF1dG9QbGFjZVZpcmdpbiA9IHRydWU7XG52YXIgYXV0b1BsYWNlQ29udGFpbmVyID0gdm9pZCAwO1xudmFyIGhpZGUgPSBmYWxzZTtcbnZhciBoaWRlYWJsZUd1aXMgPSBbXTtcbnZhciBHVUkgPSBmdW5jdGlvbiBHVUkocGFycykge1xuICB2YXIgX3RoaXMgPSB0aGlzO1xuICB2YXIgcGFyYW1zID0gcGFycyB8fCB7fTtcbiAgdGhpcy5kb21FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRoaXMuX191bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gIHRoaXMuZG9tRWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLl9fdWwpO1xuICBkb20uYWRkQ2xhc3ModGhpcy5kb21FbGVtZW50LCBDU1NfTkFNRVNQQUNFKTtcbiAgdGhpcy5fX2ZvbGRlcnMgPSB7fTtcbiAgdGhpcy5fX2NvbnRyb2xsZXJzID0gW107XG4gIHRoaXMuX19yZW1lbWJlcmVkT2JqZWN0cyA9IFtdO1xuICB0aGlzLl9fcmVtZW1iZXJlZE9iamVjdEluZGVjZXNUb0NvbnRyb2xsZXJzID0gW107XG4gIHRoaXMuX19saXN0ZW5pbmcgPSBbXTtcbiAgcGFyYW1zID0gQ29tbW9uLmRlZmF1bHRzKHBhcmFtcywge1xuICAgIGNsb3NlT25Ub3A6IGZhbHNlLFxuICAgIGF1dG9QbGFjZTogdHJ1ZSxcbiAgICB3aWR0aDogR1VJLkRFRkFVTFRfV0lEVEhcbiAgfSk7XG4gIHBhcmFtcyA9IENvbW1vbi5kZWZhdWx0cyhwYXJhbXMsIHtcbiAgICByZXNpemFibGU6IHBhcmFtcy5hdXRvUGxhY2UsXG4gICAgaGlkZWFibGU6IHBhcmFtcy5hdXRvUGxhY2VcbiAgfSk7XG4gIGlmICghQ29tbW9uLmlzVW5kZWZpbmVkKHBhcmFtcy5sb2FkKSkge1xuICAgIGlmIChwYXJhbXMucHJlc2V0KSB7XG4gICAgICBwYXJhbXMubG9hZC5wcmVzZXQgPSBwYXJhbXMucHJlc2V0O1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBwYXJhbXMubG9hZCA9IHsgcHJlc2V0OiBERUZBVUxUX0RFRkFVTFRfUFJFU0VUX05BTUUgfTtcbiAgfVxuICBpZiAoQ29tbW9uLmlzVW5kZWZpbmVkKHBhcmFtcy5wYXJlbnQpICYmIHBhcmFtcy5oaWRlYWJsZSkge1xuICAgIGhpZGVhYmxlR3Vpcy5wdXNoKHRoaXMpO1xuICB9XG4gIHBhcmFtcy5yZXNpemFibGUgPSBDb21tb24uaXNVbmRlZmluZWQocGFyYW1zLnBhcmVudCkgJiYgcGFyYW1zLnJlc2l6YWJsZTtcbiAgaWYgKHBhcmFtcy5hdXRvUGxhY2UgJiYgQ29tbW9uLmlzVW5kZWZpbmVkKHBhcmFtcy5zY3JvbGxhYmxlKSkge1xuICAgIHBhcmFtcy5zY3JvbGxhYmxlID0gdHJ1ZTtcbiAgfVxuICB2YXIgdXNlTG9jYWxTdG9yYWdlID0gU1VQUE9SVFNfTE9DQUxfU1RPUkFHRSAmJiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShnZXRMb2NhbFN0b3JhZ2VIYXNoKHRoaXMsICdpc0xvY2FsJykpID09PSAndHJ1ZSc7XG4gIHZhciBzYXZlVG9Mb2NhbFN0b3JhZ2UgPSB2b2lkIDA7XG4gIHZhciB0aXRsZVJvdyA9IHZvaWQgMDtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcyxcbiAge1xuICAgIHBhcmVudDoge1xuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQkJDEoKSB7XG4gICAgICAgIHJldHVybiBwYXJhbXMucGFyZW50O1xuICAgICAgfVxuICAgIH0sXG4gICAgc2Nyb2xsYWJsZToge1xuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQkJDEoKSB7XG4gICAgICAgIHJldHVybiBwYXJhbXMuc2Nyb2xsYWJsZTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGF1dG9QbGFjZToge1xuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQkJDEoKSB7XG4gICAgICAgIHJldHVybiBwYXJhbXMuYXV0b1BsYWNlO1xuICAgICAgfVxuICAgIH0sXG4gICAgY2xvc2VPblRvcDoge1xuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQkJDEoKSB7XG4gICAgICAgIHJldHVybiBwYXJhbXMuY2xvc2VPblRvcDtcbiAgICAgIH1cbiAgICB9LFxuICAgIHByZXNldDoge1xuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQkJDEoKSB7XG4gICAgICAgIGlmIChfdGhpcy5wYXJlbnQpIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXMuZ2V0Um9vdCgpLnByZXNldDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcGFyYW1zLmxvYWQucHJlc2V0O1xuICAgICAgfSxcbiAgICAgIHNldDogZnVuY3Rpb24gc2V0JCQxKHYpIHtcbiAgICAgICAgaWYgKF90aGlzLnBhcmVudCkge1xuICAgICAgICAgIF90aGlzLmdldFJvb3QoKS5wcmVzZXQgPSB2O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHBhcmFtcy5sb2FkLnByZXNldCA9IHY7XG4gICAgICAgIH1cbiAgICAgICAgc2V0UHJlc2V0U2VsZWN0SW5kZXgodGhpcyk7XG4gICAgICAgIF90aGlzLnJldmVydCgpO1xuICAgICAgfVxuICAgIH0sXG4gICAgd2lkdGg6IHtcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0JCQxKCkge1xuICAgICAgICByZXR1cm4gcGFyYW1zLndpZHRoO1xuICAgICAgfSxcbiAgICAgIHNldDogZnVuY3Rpb24gc2V0JCQxKHYpIHtcbiAgICAgICAgcGFyYW1zLndpZHRoID0gdjtcbiAgICAgICAgc2V0V2lkdGgoX3RoaXMsIHYpO1xuICAgICAgfVxuICAgIH0sXG4gICAgbmFtZToge1xuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQkJDEoKSB7XG4gICAgICAgIHJldHVybiBwYXJhbXMubmFtZTtcbiAgICAgIH0sXG4gICAgICBzZXQ6IGZ1bmN0aW9uIHNldCQkMSh2KSB7XG4gICAgICAgIHBhcmFtcy5uYW1lID0gdjtcbiAgICAgICAgaWYgKHRpdGxlUm93KSB7XG4gICAgICAgICAgdGl0bGVSb3cuaW5uZXJIVE1MID0gcGFyYW1zLm5hbWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIGNsb3NlZDoge1xuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQkJDEoKSB7XG4gICAgICAgIHJldHVybiBwYXJhbXMuY2xvc2VkO1xuICAgICAgfSxcbiAgICAgIHNldDogZnVuY3Rpb24gc2V0JCQxKHYpIHtcbiAgICAgICAgcGFyYW1zLmNsb3NlZCA9IHY7XG4gICAgICAgIGlmIChwYXJhbXMuY2xvc2VkKSB7XG4gICAgICAgICAgZG9tLmFkZENsYXNzKF90aGlzLl9fdWwsIEdVSS5DTEFTU19DTE9TRUQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRvbS5yZW1vdmVDbGFzcyhfdGhpcy5fX3VsLCBHVUkuQ0xBU1NfQ0xPU0VEKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm9uUmVzaXplKCk7XG4gICAgICAgIGlmIChfdGhpcy5fX2Nsb3NlQnV0dG9uKSB7XG4gICAgICAgICAgX3RoaXMuX19jbG9zZUJ1dHRvbi5pbm5lckhUTUwgPSB2ID8gR1VJLlRFWFRfT1BFTiA6IEdVSS5URVhUX0NMT1NFRDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgbG9hZDoge1xuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQkJDEoKSB7XG4gICAgICAgIHJldHVybiBwYXJhbXMubG9hZDtcbiAgICAgIH1cbiAgICB9LFxuICAgIHVzZUxvY2FsU3RvcmFnZToge1xuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQkJDEoKSB7XG4gICAgICAgIHJldHVybiB1c2VMb2NhbFN0b3JhZ2U7XG4gICAgICB9LFxuICAgICAgc2V0OiBmdW5jdGlvbiBzZXQkJDEoYm9vbCkge1xuICAgICAgICBpZiAoU1VQUE9SVFNfTE9DQUxfU1RPUkFHRSkge1xuICAgICAgICAgIHVzZUxvY2FsU3RvcmFnZSA9IGJvb2w7XG4gICAgICAgICAgaWYgKGJvb2wpIHtcbiAgICAgICAgICAgIGRvbS5iaW5kKHdpbmRvdywgJ3VubG9hZCcsIHNhdmVUb0xvY2FsU3RvcmFnZSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRvbS51bmJpbmQod2luZG93LCAndW5sb2FkJywgc2F2ZVRvTG9jYWxTdG9yYWdlKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oZ2V0TG9jYWxTdG9yYWdlSGFzaChfdGhpcywgJ2lzTG9jYWwnKSwgYm9vbCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuICBpZiAoQ29tbW9uLmlzVW5kZWZpbmVkKHBhcmFtcy5wYXJlbnQpKSB7XG4gICAgdGhpcy5jbG9zZWQgPSBwYXJhbXMuY2xvc2VkIHx8IGZhbHNlO1xuICAgIGRvbS5hZGRDbGFzcyh0aGlzLmRvbUVsZW1lbnQsIEdVSS5DTEFTU19NQUlOKTtcbiAgICBkb20ubWFrZVNlbGVjdGFibGUodGhpcy5kb21FbGVtZW50LCBmYWxzZSk7XG4gICAgaWYgKFNVUFBPUlRTX0xPQ0FMX1NUT1JBR0UpIHtcbiAgICAgIGlmICh1c2VMb2NhbFN0b3JhZ2UpIHtcbiAgICAgICAgX3RoaXMudXNlTG9jYWxTdG9yYWdlID0gdHJ1ZTtcbiAgICAgICAgdmFyIHNhdmVkR3VpID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oZ2V0TG9jYWxTdG9yYWdlSGFzaCh0aGlzLCAnZ3VpJykpO1xuICAgICAgICBpZiAoc2F2ZWRHdWkpIHtcbiAgICAgICAgICBwYXJhbXMubG9hZCA9IEpTT04ucGFyc2Uoc2F2ZWRHdWkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuX19jbG9zZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRoaXMuX19jbG9zZUJ1dHRvbi5pbm5lckhUTUwgPSBHVUkuVEVYVF9DTE9TRUQ7XG4gICAgZG9tLmFkZENsYXNzKHRoaXMuX19jbG9zZUJ1dHRvbiwgR1VJLkNMQVNTX0NMT1NFX0JVVFRPTik7XG4gICAgaWYgKHBhcmFtcy5jbG9zZU9uVG9wKSB7XG4gICAgICBkb20uYWRkQ2xhc3ModGhpcy5fX2Nsb3NlQnV0dG9uLCBHVUkuQ0xBU1NfQ0xPU0VfVE9QKTtcbiAgICAgIHRoaXMuZG9tRWxlbWVudC5pbnNlcnRCZWZvcmUodGhpcy5fX2Nsb3NlQnV0dG9uLCB0aGlzLmRvbUVsZW1lbnQuY2hpbGROb2Rlc1swXSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRvbS5hZGRDbGFzcyh0aGlzLl9fY2xvc2VCdXR0b24sIEdVSS5DTEFTU19DTE9TRV9CT1RUT00pO1xuICAgICAgdGhpcy5kb21FbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuX19jbG9zZUJ1dHRvbik7XG4gICAgfVxuICAgIGRvbS5iaW5kKHRoaXMuX19jbG9zZUJ1dHRvbiwgJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXMuY2xvc2VkID0gIV90aGlzLmNsb3NlZDtcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBpZiAocGFyYW1zLmNsb3NlZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBwYXJhbXMuY2xvc2VkID0gdHJ1ZTtcbiAgICB9XG4gICAgdmFyIHRpdGxlUm93TmFtZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHBhcmFtcy5uYW1lKTtcbiAgICBkb20uYWRkQ2xhc3ModGl0bGVSb3dOYW1lLCAnY29udHJvbGxlci1uYW1lJyk7XG4gICAgdGl0bGVSb3cgPSBhZGRSb3coX3RoaXMsIHRpdGxlUm93TmFtZSk7XG4gICAgdmFyIG9uQ2xpY2tUaXRsZSA9IGZ1bmN0aW9uIG9uQ2xpY2tUaXRsZShlKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBfdGhpcy5jbG9zZWQgPSAhX3RoaXMuY2xvc2VkO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH07XG4gICAgZG9tLmFkZENsYXNzKHRoaXMuX191bCwgR1VJLkNMQVNTX0NMT1NFRCk7XG4gICAgZG9tLmFkZENsYXNzKHRpdGxlUm93LCAndGl0bGUnKTtcbiAgICBkb20uYmluZCh0aXRsZVJvdywgJ2NsaWNrJywgb25DbGlja1RpdGxlKTtcbiAgICBpZiAoIXBhcmFtcy5jbG9zZWQpIHtcbiAgICAgIHRoaXMuY2xvc2VkID0gZmFsc2U7XG4gICAgfVxuICB9XG4gIGlmIChwYXJhbXMuYXV0b1BsYWNlKSB7XG4gICAgaWYgKENvbW1vbi5pc1VuZGVmaW5lZChwYXJhbXMucGFyZW50KSkge1xuICAgICAgaWYgKGF1dG9QbGFjZVZpcmdpbikge1xuICAgICAgICBhdXRvUGxhY2VDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZG9tLmFkZENsYXNzKGF1dG9QbGFjZUNvbnRhaW5lciwgQ1NTX05BTUVTUEFDRSk7XG4gICAgICAgIGRvbS5hZGRDbGFzcyhhdXRvUGxhY2VDb250YWluZXIsIEdVSS5DTEFTU19BVVRPX1BMQUNFX0NPTlRBSU5FUik7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYXV0b1BsYWNlQ29udGFpbmVyKTtcbiAgICAgICAgYXV0b1BsYWNlVmlyZ2luID0gZmFsc2U7XG4gICAgICB9XG4gICAgICBhdXRvUGxhY2VDb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5kb21FbGVtZW50KTtcbiAgICAgIGRvbS5hZGRDbGFzcyh0aGlzLmRvbUVsZW1lbnQsIEdVSS5DTEFTU19BVVRPX1BMQUNFKTtcbiAgICB9XG4gICAgaWYgKCF0aGlzLnBhcmVudCkge1xuICAgICAgc2V0V2lkdGgoX3RoaXMsIHBhcmFtcy53aWR0aCk7XG4gICAgfVxuICB9XG4gIHRoaXMuX19yZXNpemVIYW5kbGVyID0gZnVuY3Rpb24gKCkge1xuICAgIF90aGlzLm9uUmVzaXplRGVib3VuY2VkKCk7XG4gIH07XG4gIGRvbS5iaW5kKHdpbmRvdywgJ3Jlc2l6ZScsIHRoaXMuX19yZXNpemVIYW5kbGVyKTtcbiAgZG9tLmJpbmQodGhpcy5fX3VsLCAnd2Via2l0VHJhbnNpdGlvbkVuZCcsIHRoaXMuX19yZXNpemVIYW5kbGVyKTtcbiAgZG9tLmJpbmQodGhpcy5fX3VsLCAndHJhbnNpdGlvbmVuZCcsIHRoaXMuX19yZXNpemVIYW5kbGVyKTtcbiAgZG9tLmJpbmQodGhpcy5fX3VsLCAnb1RyYW5zaXRpb25FbmQnLCB0aGlzLl9fcmVzaXplSGFuZGxlcik7XG4gIHRoaXMub25SZXNpemUoKTtcbiAgaWYgKHBhcmFtcy5yZXNpemFibGUpIHtcbiAgICBhZGRSZXNpemVIYW5kbGUodGhpcyk7XG4gIH1cbiAgc2F2ZVRvTG9jYWxTdG9yYWdlID0gZnVuY3Rpb24gc2F2ZVRvTG9jYWxTdG9yYWdlKCkge1xuICAgIGlmIChTVVBQT1JUU19MT0NBTF9TVE9SQUdFICYmIGxvY2FsU3RvcmFnZS5nZXRJdGVtKGdldExvY2FsU3RvcmFnZUhhc2goX3RoaXMsICdpc0xvY2FsJykpID09PSAndHJ1ZScpIHtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGdldExvY2FsU3RvcmFnZUhhc2goX3RoaXMsICdndWknKSwgSlNPTi5zdHJpbmdpZnkoX3RoaXMuZ2V0U2F2ZU9iamVjdCgpKSk7XG4gICAgfVxuICB9O1xuICB0aGlzLnNhdmVUb0xvY2FsU3RvcmFnZUlmUG9zc2libGUgPSBzYXZlVG9Mb2NhbFN0b3JhZ2U7XG4gIGZ1bmN0aW9uIHJlc2V0V2lkdGgoKSB7XG4gICAgdmFyIHJvb3QgPSBfdGhpcy5nZXRSb290KCk7XG4gICAgcm9vdC53aWR0aCArPSAxO1xuICAgIENvbW1vbi5kZWZlcihmdW5jdGlvbiAoKSB7XG4gICAgICByb290LndpZHRoIC09IDE7XG4gICAgfSk7XG4gIH1cbiAgaWYgKCFwYXJhbXMucGFyZW50KSB7XG4gICAgcmVzZXRXaWR0aCgpO1xuICB9XG59O1xuR1VJLnRvZ2dsZUhpZGUgPSBmdW5jdGlvbiAoKSB7XG4gIGhpZGUgPSAhaGlkZTtcbiAgQ29tbW9uLmVhY2goaGlkZWFibGVHdWlzLCBmdW5jdGlvbiAoZ3VpKSB7XG4gICAgZ3VpLmRvbUVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IGhpZGUgPyAnbm9uZScgOiAnJztcbiAgfSk7XG59O1xuR1VJLkNMQVNTX0FVVE9fUExBQ0UgPSAnYSc7XG5HVUkuQ0xBU1NfQVVUT19QTEFDRV9DT05UQUlORVIgPSAnYWMnO1xuR1VJLkNMQVNTX01BSU4gPSAnbWFpbic7XG5HVUkuQ0xBU1NfQ09OVFJPTExFUl9ST1cgPSAnY3InO1xuR1VJLkNMQVNTX1RPT19UQUxMID0gJ3RhbGxlci10aGFuLXdpbmRvdyc7XG5HVUkuQ0xBU1NfQ0xPU0VEID0gJ2Nsb3NlZCc7XG5HVUkuQ0xBU1NfQ0xPU0VfQlVUVE9OID0gJ2Nsb3NlLWJ1dHRvbic7XG5HVUkuQ0xBU1NfQ0xPU0VfVE9QID0gJ2Nsb3NlLXRvcCc7XG5HVUkuQ0xBU1NfQ0xPU0VfQk9UVE9NID0gJ2Nsb3NlLWJvdHRvbSc7XG5HVUkuQ0xBU1NfRFJBRyA9ICdkcmFnJztcbkdVSS5ERUZBVUxUX1dJRFRIID0gMjQ1O1xuR1VJLlRFWFRfQ0xPU0VEID0gJ0Nsb3NlIENvbnRyb2xzJztcbkdVSS5URVhUX09QRU4gPSAnT3BlbiBDb250cm9scyc7XG5HVUkuX2tleWRvd25IYW5kbGVyID0gZnVuY3Rpb24gKGUpIHtcbiAgaWYgKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQudHlwZSAhPT0gJ3RleHQnICYmIChlLndoaWNoID09PSBISURFX0tFWV9DT0RFIHx8IGUua2V5Q29kZSA9PT0gSElERV9LRVlfQ09ERSkpIHtcbiAgICBHVUkudG9nZ2xlSGlkZSgpO1xuICB9XG59O1xuZG9tLmJpbmQod2luZG93LCAna2V5ZG93bicsIEdVSS5fa2V5ZG93bkhhbmRsZXIsIGZhbHNlKTtcbkNvbW1vbi5leHRlbmQoR1VJLnByb3RvdHlwZSxcbntcbiAgYWRkOiBmdW5jdGlvbiBhZGQob2JqZWN0LCBwcm9wZXJ0eSkge1xuICAgIHJldHVybiBfYWRkKHRoaXMsIG9iamVjdCwgcHJvcGVydHksIHtcbiAgICAgIGZhY3RvcnlBcmdzOiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDIpXG4gICAgfSk7XG4gIH0sXG4gIGFkZENvbG9yOiBmdW5jdGlvbiBhZGRDb2xvcihvYmplY3QsIHByb3BlcnR5KSB7XG4gICAgcmV0dXJuIF9hZGQodGhpcywgb2JqZWN0LCBwcm9wZXJ0eSwge1xuICAgICAgY29sb3I6IHRydWVcbiAgICB9KTtcbiAgfSxcbiAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoY29udHJvbGxlcikge1xuICAgIHRoaXMuX191bC5yZW1vdmVDaGlsZChjb250cm9sbGVyLl9fbGkpO1xuICAgIHRoaXMuX19jb250cm9sbGVycy5zcGxpY2UodGhpcy5fX2NvbnRyb2xsZXJzLmluZGV4T2YoY29udHJvbGxlciksIDEpO1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgQ29tbW9uLmRlZmVyKGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzLm9uUmVzaXplKCk7XG4gICAgfSk7XG4gIH0sXG4gIGRlc3Ryb3k6IGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMucGFyZW50KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ09ubHkgdGhlIHJvb3QgR1VJIHNob3VsZCBiZSByZW1vdmVkIHdpdGggLmRlc3Ryb3koKS4gJyArICdGb3Igc3ViZm9sZGVycywgdXNlIGd1aS5yZW1vdmVGb2xkZXIoZm9sZGVyKSBpbnN0ZWFkLicpO1xuICAgIH1cbiAgICBpZiAodGhpcy5hdXRvUGxhY2UpIHtcbiAgICAgIGF1dG9QbGFjZUNvbnRhaW5lci5yZW1vdmVDaGlsZCh0aGlzLmRvbUVsZW1lbnQpO1xuICAgIH1cbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgIENvbW1vbi5lYWNoKHRoaXMuX19mb2xkZXJzLCBmdW5jdGlvbiAoc3ViZm9sZGVyKSB7XG4gICAgICBfdGhpcy5yZW1vdmVGb2xkZXIoc3ViZm9sZGVyKTtcbiAgICB9KTtcbiAgICBkb20udW5iaW5kKHdpbmRvdywgJ2tleWRvd24nLCBHVUkuX2tleWRvd25IYW5kbGVyLCBmYWxzZSk7XG4gICAgcmVtb3ZlTGlzdGVuZXJzKHRoaXMpO1xuICB9LFxuICBhZGRGb2xkZXI6IGZ1bmN0aW9uIGFkZEZvbGRlcihuYW1lKSB7XG4gICAgaWYgKHRoaXMuX19mb2xkZXJzW25hbWVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignWW91IGFscmVhZHkgaGF2ZSBhIGZvbGRlciBpbiB0aGlzIEdVSSBieSB0aGUnICsgJyBuYW1lIFwiJyArIG5hbWUgKyAnXCInKTtcbiAgICB9XG4gICAgdmFyIG5ld0d1aVBhcmFtcyA9IHsgbmFtZTogbmFtZSwgcGFyZW50OiB0aGlzIH07XG4gICAgbmV3R3VpUGFyYW1zLmF1dG9QbGFjZSA9IHRoaXMuYXV0b1BsYWNlO1xuICAgIGlmICh0aGlzLmxvYWQgJiZcbiAgICB0aGlzLmxvYWQuZm9sZGVycyAmJlxuICAgIHRoaXMubG9hZC5mb2xkZXJzW25hbWVdKSB7XG4gICAgICBuZXdHdWlQYXJhbXMuY2xvc2VkID0gdGhpcy5sb2FkLmZvbGRlcnNbbmFtZV0uY2xvc2VkO1xuICAgICAgbmV3R3VpUGFyYW1zLmxvYWQgPSB0aGlzLmxvYWQuZm9sZGVyc1tuYW1lXTtcbiAgICB9XG4gICAgdmFyIGd1aSA9IG5ldyBHVUkobmV3R3VpUGFyYW1zKTtcbiAgICB0aGlzLl9fZm9sZGVyc1tuYW1lXSA9IGd1aTtcbiAgICB2YXIgbGkgPSBhZGRSb3codGhpcywgZ3VpLmRvbUVsZW1lbnQpO1xuICAgIGRvbS5hZGRDbGFzcyhsaSwgJ2ZvbGRlcicpO1xuICAgIHJldHVybiBndWk7XG4gIH0sXG4gIHJlbW92ZUZvbGRlcjogZnVuY3Rpb24gcmVtb3ZlRm9sZGVyKGZvbGRlcikge1xuICAgIHRoaXMuX191bC5yZW1vdmVDaGlsZChmb2xkZXIuZG9tRWxlbWVudC5wYXJlbnRFbGVtZW50KTtcbiAgICBkZWxldGUgdGhpcy5fX2ZvbGRlcnNbZm9sZGVyLm5hbWVdO1xuICAgIGlmICh0aGlzLmxvYWQgJiZcbiAgICB0aGlzLmxvYWQuZm9sZGVycyAmJlxuICAgIHRoaXMubG9hZC5mb2xkZXJzW2ZvbGRlci5uYW1lXSkge1xuICAgICAgZGVsZXRlIHRoaXMubG9hZC5mb2xkZXJzW2ZvbGRlci5uYW1lXTtcbiAgICB9XG4gICAgcmVtb3ZlTGlzdGVuZXJzKGZvbGRlcik7XG4gICAgdmFyIF90aGlzID0gdGhpcztcbiAgICBDb21tb24uZWFjaChmb2xkZXIuX19mb2xkZXJzLCBmdW5jdGlvbiAoc3ViZm9sZGVyKSB7XG4gICAgICBmb2xkZXIucmVtb3ZlRm9sZGVyKHN1YmZvbGRlcik7XG4gICAgfSk7XG4gICAgQ29tbW9uLmRlZmVyKGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzLm9uUmVzaXplKCk7XG4gICAgfSk7XG4gIH0sXG4gIG9wZW46IGZ1bmN0aW9uIG9wZW4oKSB7XG4gICAgdGhpcy5jbG9zZWQgPSBmYWxzZTtcbiAgfSxcbiAgY2xvc2U6IGZ1bmN0aW9uIGNsb3NlKCkge1xuICAgIHRoaXMuY2xvc2VkID0gdHJ1ZTtcbiAgfSxcbiAgaGlkZTogZnVuY3Rpb24gaGlkZSgpIHtcbiAgICB0aGlzLmRvbUVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgfSxcbiAgc2hvdzogZnVuY3Rpb24gc2hvdygpIHtcbiAgICB0aGlzLmRvbUVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICcnO1xuICB9LFxuICBvblJlc2l6ZTogZnVuY3Rpb24gb25SZXNpemUoKSB7XG4gICAgdmFyIHJvb3QgPSB0aGlzLmdldFJvb3QoKTtcbiAgICBpZiAocm9vdC5zY3JvbGxhYmxlKSB7XG4gICAgICB2YXIgdG9wID0gZG9tLmdldE9mZnNldChyb290Ll9fdWwpLnRvcDtcbiAgICAgIHZhciBoID0gMDtcbiAgICAgIENvbW1vbi5lYWNoKHJvb3QuX191bC5jaGlsZE5vZGVzLCBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICBpZiAoIShyb290LmF1dG9QbGFjZSAmJiBub2RlID09PSByb290Ll9fc2F2ZV9yb3cpKSB7XG4gICAgICAgICAgaCArPSBkb20uZ2V0SGVpZ2h0KG5vZGUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGlmICh3aW5kb3cuaW5uZXJIZWlnaHQgLSB0b3AgLSBDTE9TRV9CVVRUT05fSEVJR0hUIDwgaCkge1xuICAgICAgICBkb20uYWRkQ2xhc3Mocm9vdC5kb21FbGVtZW50LCBHVUkuQ0xBU1NfVE9PX1RBTEwpO1xuICAgICAgICByb290Ll9fdWwuc3R5bGUuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0IC0gdG9wIC0gQ0xPU0VfQlVUVE9OX0hFSUdIVCArICdweCc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkb20ucmVtb3ZlQ2xhc3Mocm9vdC5kb21FbGVtZW50LCBHVUkuQ0xBU1NfVE9PX1RBTEwpO1xuICAgICAgICByb290Ll9fdWwuc3R5bGUuaGVpZ2h0ID0gJ2F1dG8nO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAocm9vdC5fX3Jlc2l6ZV9oYW5kbGUpIHtcbiAgICAgIENvbW1vbi5kZWZlcihmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJvb3QuX19yZXNpemVfaGFuZGxlLnN0eWxlLmhlaWdodCA9IHJvb3QuX191bC5vZmZzZXRIZWlnaHQgKyAncHgnO1xuICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChyb290Ll9fY2xvc2VCdXR0b24pIHtcbiAgICAgIHJvb3QuX19jbG9zZUJ1dHRvbi5zdHlsZS53aWR0aCA9IHJvb3Qud2lkdGggKyAncHgnO1xuICAgIH1cbiAgfSxcbiAgb25SZXNpemVEZWJvdW5jZWQ6IENvbW1vbi5kZWJvdW5jZShmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5vblJlc2l6ZSgpO1xuICB9LCA1MCksXG4gIHJlbWVtYmVyOiBmdW5jdGlvbiByZW1lbWJlcigpIHtcbiAgICBpZiAoQ29tbW9uLmlzVW5kZWZpbmVkKFNBVkVfRElBTE9HVUUpKSB7XG4gICAgICBTQVZFX0RJQUxPR1VFID0gbmV3IENlbnRlcmVkRGl2KCk7XG4gICAgICBTQVZFX0RJQUxPR1VFLmRvbUVsZW1lbnQuaW5uZXJIVE1MID0gc2F2ZURpYWxvZ0NvbnRlbnRzO1xuICAgIH1cbiAgICBpZiAodGhpcy5wYXJlbnQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignWW91IGNhbiBvbmx5IGNhbGwgcmVtZW1iZXIgb24gYSB0b3AgbGV2ZWwgR1VJLicpO1xuICAgIH1cbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgIENvbW1vbi5lYWNoKEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cyksIGZ1bmN0aW9uIChvYmplY3QpIHtcbiAgICAgIGlmIChfdGhpcy5fX3JlbWVtYmVyZWRPYmplY3RzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBhZGRTYXZlTWVudShfdGhpcyk7XG4gICAgICB9XG4gICAgICBpZiAoX3RoaXMuX19yZW1lbWJlcmVkT2JqZWN0cy5pbmRleE9mKG9iamVjdCkgPT09IC0xKSB7XG4gICAgICAgIF90aGlzLl9fcmVtZW1iZXJlZE9iamVjdHMucHVzaChvYmplY3QpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGlmICh0aGlzLmF1dG9QbGFjZSkge1xuICAgICAgc2V0V2lkdGgodGhpcywgdGhpcy53aWR0aCk7XG4gICAgfVxuICB9LFxuICBnZXRSb290OiBmdW5jdGlvbiBnZXRSb290KCkge1xuICAgIHZhciBndWkgPSB0aGlzO1xuICAgIHdoaWxlIChndWkucGFyZW50KSB7XG4gICAgICBndWkgPSBndWkucGFyZW50O1xuICAgIH1cbiAgICByZXR1cm4gZ3VpO1xuICB9LFxuICBnZXRTYXZlT2JqZWN0OiBmdW5jdGlvbiBnZXRTYXZlT2JqZWN0KCkge1xuICAgIHZhciB0b1JldHVybiA9IHRoaXMubG9hZDtcbiAgICB0b1JldHVybi5jbG9zZWQgPSB0aGlzLmNsb3NlZDtcbiAgICBpZiAodGhpcy5fX3JlbWVtYmVyZWRPYmplY3RzLmxlbmd0aCA+IDApIHtcbiAgICAgIHRvUmV0dXJuLnByZXNldCA9IHRoaXMucHJlc2V0O1xuICAgICAgaWYgKCF0b1JldHVybi5yZW1lbWJlcmVkKSB7XG4gICAgICAgIHRvUmV0dXJuLnJlbWVtYmVyZWQgPSB7fTtcbiAgICAgIH1cbiAgICAgIHRvUmV0dXJuLnJlbWVtYmVyZWRbdGhpcy5wcmVzZXRdID0gZ2V0Q3VycmVudFByZXNldCh0aGlzKTtcbiAgICB9XG4gICAgdG9SZXR1cm4uZm9sZGVycyA9IHt9O1xuICAgIENvbW1vbi5lYWNoKHRoaXMuX19mb2xkZXJzLCBmdW5jdGlvbiAoZWxlbWVudCwga2V5KSB7XG4gICAgICB0b1JldHVybi5mb2xkZXJzW2tleV0gPSBlbGVtZW50LmdldFNhdmVPYmplY3QoKTtcbiAgICB9KTtcbiAgICByZXR1cm4gdG9SZXR1cm47XG4gIH0sXG4gIHNhdmU6IGZ1bmN0aW9uIHNhdmUoKSB7XG4gICAgaWYgKCF0aGlzLmxvYWQucmVtZW1iZXJlZCkge1xuICAgICAgdGhpcy5sb2FkLnJlbWVtYmVyZWQgPSB7fTtcbiAgICB9XG4gICAgdGhpcy5sb2FkLnJlbWVtYmVyZWRbdGhpcy5wcmVzZXRdID0gZ2V0Q3VycmVudFByZXNldCh0aGlzKTtcbiAgICBtYXJrUHJlc2V0TW9kaWZpZWQodGhpcywgZmFsc2UpO1xuICAgIHRoaXMuc2F2ZVRvTG9jYWxTdG9yYWdlSWZQb3NzaWJsZSgpO1xuICB9LFxuICBzYXZlQXM6IGZ1bmN0aW9uIHNhdmVBcyhwcmVzZXROYW1lKSB7XG4gICAgaWYgKCF0aGlzLmxvYWQucmVtZW1iZXJlZCkge1xuICAgICAgdGhpcy5sb2FkLnJlbWVtYmVyZWQgPSB7fTtcbiAgICAgIHRoaXMubG9hZC5yZW1lbWJlcmVkW0RFRkFVTFRfREVGQVVMVF9QUkVTRVRfTkFNRV0gPSBnZXRDdXJyZW50UHJlc2V0KHRoaXMsIHRydWUpO1xuICAgIH1cbiAgICB0aGlzLmxvYWQucmVtZW1iZXJlZFtwcmVzZXROYW1lXSA9IGdldEN1cnJlbnRQcmVzZXQodGhpcyk7XG4gICAgdGhpcy5wcmVzZXQgPSBwcmVzZXROYW1lO1xuICAgIGFkZFByZXNldE9wdGlvbih0aGlzLCBwcmVzZXROYW1lLCB0cnVlKTtcbiAgICB0aGlzLnNhdmVUb0xvY2FsU3RvcmFnZUlmUG9zc2libGUoKTtcbiAgfSxcbiAgcmV2ZXJ0OiBmdW5jdGlvbiByZXZlcnQoZ3VpKSB7XG4gICAgQ29tbW9uLmVhY2godGhpcy5fX2NvbnRyb2xsZXJzLCBmdW5jdGlvbiAoY29udHJvbGxlcikge1xuICAgICAgaWYgKCF0aGlzLmdldFJvb3QoKS5sb2FkLnJlbWVtYmVyZWQpIHtcbiAgICAgICAgY29udHJvbGxlci5zZXRWYWx1ZShjb250cm9sbGVyLmluaXRpYWxWYWx1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZWNhbGxTYXZlZFZhbHVlKGd1aSB8fCB0aGlzLmdldFJvb3QoKSwgY29udHJvbGxlcik7XG4gICAgICB9XG4gICAgICBpZiAoY29udHJvbGxlci5fX29uRmluaXNoQ2hhbmdlKSB7XG4gICAgICAgIGNvbnRyb2xsZXIuX19vbkZpbmlzaENoYW5nZS5jYWxsKGNvbnRyb2xsZXIsIGNvbnRyb2xsZXIuZ2V0VmFsdWUoKSk7XG4gICAgICB9XG4gICAgfSwgdGhpcyk7XG4gICAgQ29tbW9uLmVhY2godGhpcy5fX2ZvbGRlcnMsIGZ1bmN0aW9uIChmb2xkZXIpIHtcbiAgICAgIGZvbGRlci5yZXZlcnQoZm9sZGVyKTtcbiAgICB9KTtcbiAgICBpZiAoIWd1aSkge1xuICAgICAgbWFya1ByZXNldE1vZGlmaWVkKHRoaXMuZ2V0Um9vdCgpLCBmYWxzZSk7XG4gICAgfVxuICB9LFxuICBsaXN0ZW46IGZ1bmN0aW9uIGxpc3Rlbihjb250cm9sbGVyKSB7XG4gICAgdmFyIGluaXQgPSB0aGlzLl9fbGlzdGVuaW5nLmxlbmd0aCA9PT0gMDtcbiAgICB0aGlzLl9fbGlzdGVuaW5nLnB1c2goY29udHJvbGxlcik7XG4gICAgaWYgKGluaXQpIHtcbiAgICAgIHVwZGF0ZURpc3BsYXlzKHRoaXMuX19saXN0ZW5pbmcpO1xuICAgIH1cbiAgfSxcbiAgdXBkYXRlRGlzcGxheTogZnVuY3Rpb24gdXBkYXRlRGlzcGxheSgpIHtcbiAgICBDb21tb24uZWFjaCh0aGlzLl9fY29udHJvbGxlcnMsIGZ1bmN0aW9uIChjb250cm9sbGVyKSB7XG4gICAgICBjb250cm9sbGVyLnVwZGF0ZURpc3BsYXkoKTtcbiAgICB9KTtcbiAgICBDb21tb24uZWFjaCh0aGlzLl9fZm9sZGVycywgZnVuY3Rpb24gKGZvbGRlcikge1xuICAgICAgZm9sZGVyLnVwZGF0ZURpc3BsYXkoKTtcbiAgICB9KTtcbiAgfVxufSk7XG5mdW5jdGlvbiBhZGRSb3coZ3VpLCBuZXdEb20sIGxpQmVmb3JlKSB7XG4gIHZhciBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIGlmIChuZXdEb20pIHtcbiAgICBsaS5hcHBlbmRDaGlsZChuZXdEb20pO1xuICB9XG4gIGlmIChsaUJlZm9yZSkge1xuICAgIGd1aS5fX3VsLmluc2VydEJlZm9yZShsaSwgbGlCZWZvcmUpO1xuICB9IGVsc2Uge1xuICAgIGd1aS5fX3VsLmFwcGVuZENoaWxkKGxpKTtcbiAgfVxuICBndWkub25SZXNpemUoKTtcbiAgcmV0dXJuIGxpO1xufVxuZnVuY3Rpb24gcmVtb3ZlTGlzdGVuZXJzKGd1aSkge1xuICBkb20udW5iaW5kKHdpbmRvdywgJ3Jlc2l6ZScsIGd1aS5fX3Jlc2l6ZUhhbmRsZXIpO1xuICBpZiAoZ3VpLnNhdmVUb0xvY2FsU3RvcmFnZUlmUG9zc2libGUpIHtcbiAgICBkb20udW5iaW5kKHdpbmRvdywgJ3VubG9hZCcsIGd1aS5zYXZlVG9Mb2NhbFN0b3JhZ2VJZlBvc3NpYmxlKTtcbiAgfVxufVxuZnVuY3Rpb24gbWFya1ByZXNldE1vZGlmaWVkKGd1aSwgbW9kaWZpZWQpIHtcbiAgdmFyIG9wdCA9IGd1aS5fX3ByZXNldF9zZWxlY3RbZ3VpLl9fcHJlc2V0X3NlbGVjdC5zZWxlY3RlZEluZGV4XTtcbiAgaWYgKG1vZGlmaWVkKSB7XG4gICAgb3B0LmlubmVySFRNTCA9IG9wdC52YWx1ZSArICcqJztcbiAgfSBlbHNlIHtcbiAgICBvcHQuaW5uZXJIVE1MID0gb3B0LnZhbHVlO1xuICB9XG59XG5mdW5jdGlvbiBhdWdtZW50Q29udHJvbGxlcihndWksIGxpLCBjb250cm9sbGVyKSB7XG4gIGNvbnRyb2xsZXIuX19saSA9IGxpO1xuICBjb250cm9sbGVyLl9fZ3VpID0gZ3VpO1xuICBDb21tb24uZXh0ZW5kKGNvbnRyb2xsZXIsIHtcbiAgICBvcHRpb25zOiBmdW5jdGlvbiBvcHRpb25zKF9vcHRpb25zKSB7XG4gICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgdmFyIG5leHRTaWJsaW5nID0gY29udHJvbGxlci5fX2xpLm5leHRFbGVtZW50U2libGluZztcbiAgICAgICAgY29udHJvbGxlci5yZW1vdmUoKTtcbiAgICAgICAgcmV0dXJuIF9hZGQoZ3VpLCBjb250cm9sbGVyLm9iamVjdCwgY29udHJvbGxlci5wcm9wZXJ0eSwge1xuICAgICAgICAgIGJlZm9yZTogbmV4dFNpYmxpbmcsXG4gICAgICAgICAgZmFjdG9yeUFyZ3M6IFtDb21tb24udG9BcnJheShhcmd1bWVudHMpXVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGlmIChDb21tb24uaXNBcnJheShfb3B0aW9ucykgfHwgQ29tbW9uLmlzT2JqZWN0KF9vcHRpb25zKSkge1xuICAgICAgICB2YXIgX25leHRTaWJsaW5nID0gY29udHJvbGxlci5fX2xpLm5leHRFbGVtZW50U2libGluZztcbiAgICAgICAgY29udHJvbGxlci5yZW1vdmUoKTtcbiAgICAgICAgcmV0dXJuIF9hZGQoZ3VpLCBjb250cm9sbGVyLm9iamVjdCwgY29udHJvbGxlci5wcm9wZXJ0eSwge1xuICAgICAgICAgIGJlZm9yZTogX25leHRTaWJsaW5nLFxuICAgICAgICAgIGZhY3RvcnlBcmdzOiBbX29wdGlvbnNdXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sXG4gICAgbmFtZTogZnVuY3Rpb24gbmFtZShfbmFtZSkge1xuICAgICAgY29udHJvbGxlci5fX2xpLmZpcnN0RWxlbWVudENoaWxkLmZpcnN0RWxlbWVudENoaWxkLmlubmVySFRNTCA9IF9uYW1lO1xuICAgICAgcmV0dXJuIGNvbnRyb2xsZXI7XG4gICAgfSxcbiAgICBsaXN0ZW46IGZ1bmN0aW9uIGxpc3RlbigpIHtcbiAgICAgIGNvbnRyb2xsZXIuX19ndWkubGlzdGVuKGNvbnRyb2xsZXIpO1xuICAgICAgcmV0dXJuIGNvbnRyb2xsZXI7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIGNvbnRyb2xsZXIuX19ndWkucmVtb3ZlKGNvbnRyb2xsZXIpO1xuICAgICAgcmV0dXJuIGNvbnRyb2xsZXI7XG4gICAgfVxuICB9KTtcbiAgaWYgKGNvbnRyb2xsZXIgaW5zdGFuY2VvZiBOdW1iZXJDb250cm9sbGVyU2xpZGVyKSB7XG4gICAgdmFyIGJveCA9IG5ldyBOdW1iZXJDb250cm9sbGVyQm94KGNvbnRyb2xsZXIub2JqZWN0LCBjb250cm9sbGVyLnByb3BlcnR5LCB7IG1pbjogY29udHJvbGxlci5fX21pbiwgbWF4OiBjb250cm9sbGVyLl9fbWF4LCBzdGVwOiBjb250cm9sbGVyLl9fc3RlcCB9KTtcbiAgICBDb21tb24uZWFjaChbJ3VwZGF0ZURpc3BsYXknLCAnb25DaGFuZ2UnLCAnb25GaW5pc2hDaGFuZ2UnLCAnc3RlcCcsICdtaW4nLCAnbWF4J10sIGZ1bmN0aW9uIChtZXRob2QpIHtcbiAgICAgIHZhciBwYyA9IGNvbnRyb2xsZXJbbWV0aG9kXTtcbiAgICAgIHZhciBwYiA9IGJveFttZXRob2RdO1xuICAgICAgY29udHJvbGxlclttZXRob2RdID0gYm94W21ldGhvZF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcbiAgICAgICAgcGIuYXBwbHkoYm94LCBhcmdzKTtcbiAgICAgICAgcmV0dXJuIHBjLmFwcGx5KGNvbnRyb2xsZXIsIGFyZ3MpO1xuICAgICAgfTtcbiAgICB9KTtcbiAgICBkb20uYWRkQ2xhc3MobGksICdoYXMtc2xpZGVyJyk7XG4gICAgY29udHJvbGxlci5kb21FbGVtZW50Lmluc2VydEJlZm9yZShib3guZG9tRWxlbWVudCwgY29udHJvbGxlci5kb21FbGVtZW50LmZpcnN0RWxlbWVudENoaWxkKTtcbiAgfSBlbHNlIGlmIChjb250cm9sbGVyIGluc3RhbmNlb2YgTnVtYmVyQ29udHJvbGxlckJveCkge1xuICAgIHZhciByID0gZnVuY3Rpb24gcihyZXR1cm5lZCkge1xuICAgICAgaWYgKENvbW1vbi5pc051bWJlcihjb250cm9sbGVyLl9fbWluKSAmJiBDb21tb24uaXNOdW1iZXIoY29udHJvbGxlci5fX21heCkpIHtcbiAgICAgICAgdmFyIG9sZE5hbWUgPSBjb250cm9sbGVyLl9fbGkuZmlyc3RFbGVtZW50Q2hpbGQuZmlyc3RFbGVtZW50Q2hpbGQuaW5uZXJIVE1MO1xuICAgICAgICB2YXIgd2FzTGlzdGVuaW5nID0gY29udHJvbGxlci5fX2d1aS5fX2xpc3RlbmluZy5pbmRleE9mKGNvbnRyb2xsZXIpID4gLTE7XG4gICAgICAgIGNvbnRyb2xsZXIucmVtb3ZlKCk7XG4gICAgICAgIHZhciBuZXdDb250cm9sbGVyID0gX2FkZChndWksIGNvbnRyb2xsZXIub2JqZWN0LCBjb250cm9sbGVyLnByb3BlcnR5LCB7XG4gICAgICAgICAgYmVmb3JlOiBjb250cm9sbGVyLl9fbGkubmV4dEVsZW1lbnRTaWJsaW5nLFxuICAgICAgICAgIGZhY3RvcnlBcmdzOiBbY29udHJvbGxlci5fX21pbiwgY29udHJvbGxlci5fX21heCwgY29udHJvbGxlci5fX3N0ZXBdXG4gICAgICAgIH0pO1xuICAgICAgICBuZXdDb250cm9sbGVyLm5hbWUob2xkTmFtZSk7XG4gICAgICAgIGlmICh3YXNMaXN0ZW5pbmcpIG5ld0NvbnRyb2xsZXIubGlzdGVuKCk7XG4gICAgICAgIHJldHVybiBuZXdDb250cm9sbGVyO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJldHVybmVkO1xuICAgIH07XG4gICAgY29udHJvbGxlci5taW4gPSBDb21tb24uY29tcG9zZShyLCBjb250cm9sbGVyLm1pbik7XG4gICAgY29udHJvbGxlci5tYXggPSBDb21tb24uY29tcG9zZShyLCBjb250cm9sbGVyLm1heCk7XG4gIH0gZWxzZSBpZiAoY29udHJvbGxlciBpbnN0YW5jZW9mIEJvb2xlYW5Db250cm9sbGVyKSB7XG4gICAgZG9tLmJpbmQobGksICdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGRvbS5mYWtlRXZlbnQoY29udHJvbGxlci5fX2NoZWNrYm94LCAnY2xpY2snKTtcbiAgICB9KTtcbiAgICBkb20uYmluZChjb250cm9sbGVyLl9fY2hlY2tib3gsICdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH0pO1xuICB9IGVsc2UgaWYgKGNvbnRyb2xsZXIgaW5zdGFuY2VvZiBGdW5jdGlvbkNvbnRyb2xsZXIpIHtcbiAgICBkb20uYmluZChsaSwgJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgZG9tLmZha2VFdmVudChjb250cm9sbGVyLl9fYnV0dG9uLCAnY2xpY2snKTtcbiAgICB9KTtcbiAgICBkb20uYmluZChsaSwgJ21vdXNlb3ZlcicsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGRvbS5hZGRDbGFzcyhjb250cm9sbGVyLl9fYnV0dG9uLCAnaG92ZXInKTtcbiAgICB9KTtcbiAgICBkb20uYmluZChsaSwgJ21vdXNlb3V0JywgZnVuY3Rpb24gKCkge1xuICAgICAgZG9tLnJlbW92ZUNsYXNzKGNvbnRyb2xsZXIuX19idXR0b24sICdob3ZlcicpO1xuICAgIH0pO1xuICB9IGVsc2UgaWYgKGNvbnRyb2xsZXIgaW5zdGFuY2VvZiBDb2xvckNvbnRyb2xsZXIpIHtcbiAgICBkb20uYWRkQ2xhc3MobGksICdjb2xvcicpO1xuICAgIGNvbnRyb2xsZXIudXBkYXRlRGlzcGxheSA9IENvbW1vbi5jb21wb3NlKGZ1bmN0aW9uICh2YWwpIHtcbiAgICAgIGxpLnN0eWxlLmJvcmRlckxlZnRDb2xvciA9IGNvbnRyb2xsZXIuX19jb2xvci50b1N0cmluZygpO1xuICAgICAgcmV0dXJuIHZhbDtcbiAgICB9LCBjb250cm9sbGVyLnVwZGF0ZURpc3BsYXkpO1xuICAgIGNvbnRyb2xsZXIudXBkYXRlRGlzcGxheSgpO1xuICB9XG4gIGNvbnRyb2xsZXIuc2V0VmFsdWUgPSBDb21tb24uY29tcG9zZShmdW5jdGlvbiAodmFsKSB7XG4gICAgaWYgKGd1aS5nZXRSb290KCkuX19wcmVzZXRfc2VsZWN0ICYmIGNvbnRyb2xsZXIuaXNNb2RpZmllZCgpKSB7XG4gICAgICBtYXJrUHJlc2V0TW9kaWZpZWQoZ3VpLmdldFJvb3QoKSwgdHJ1ZSk7XG4gICAgfVxuICAgIHJldHVybiB2YWw7XG4gIH0sIGNvbnRyb2xsZXIuc2V0VmFsdWUpO1xufVxuZnVuY3Rpb24gcmVjYWxsU2F2ZWRWYWx1ZShndWksIGNvbnRyb2xsZXIpIHtcbiAgdmFyIHJvb3QgPSBndWkuZ2V0Um9vdCgpO1xuICB2YXIgbWF0Y2hlZEluZGV4ID0gcm9vdC5fX3JlbWVtYmVyZWRPYmplY3RzLmluZGV4T2YoY29udHJvbGxlci5vYmplY3QpO1xuICBpZiAobWF0Y2hlZEluZGV4ICE9PSAtMSkge1xuICAgIHZhciBjb250cm9sbGVyTWFwID0gcm9vdC5fX3JlbWVtYmVyZWRPYmplY3RJbmRlY2VzVG9Db250cm9sbGVyc1ttYXRjaGVkSW5kZXhdO1xuICAgIGlmIChjb250cm9sbGVyTWFwID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnRyb2xsZXJNYXAgPSB7fTtcbiAgICAgIHJvb3QuX19yZW1lbWJlcmVkT2JqZWN0SW5kZWNlc1RvQ29udHJvbGxlcnNbbWF0Y2hlZEluZGV4XSA9IGNvbnRyb2xsZXJNYXA7XG4gICAgfVxuICAgIGNvbnRyb2xsZXJNYXBbY29udHJvbGxlci5wcm9wZXJ0eV0gPSBjb250cm9sbGVyO1xuICAgIGlmIChyb290LmxvYWQgJiYgcm9vdC5sb2FkLnJlbWVtYmVyZWQpIHtcbiAgICAgIHZhciBwcmVzZXRNYXAgPSByb290LmxvYWQucmVtZW1iZXJlZDtcbiAgICAgIHZhciBwcmVzZXQgPSB2b2lkIDA7XG4gICAgICBpZiAocHJlc2V0TWFwW2d1aS5wcmVzZXRdKSB7XG4gICAgICAgIHByZXNldCA9IHByZXNldE1hcFtndWkucHJlc2V0XTtcbiAgICAgIH0gZWxzZSBpZiAocHJlc2V0TWFwW0RFRkFVTFRfREVGQVVMVF9QUkVTRVRfTkFNRV0pIHtcbiAgICAgICAgcHJlc2V0ID0gcHJlc2V0TWFwW0RFRkFVTFRfREVGQVVMVF9QUkVTRVRfTkFNRV07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAocHJlc2V0W21hdGNoZWRJbmRleF0gJiYgcHJlc2V0W21hdGNoZWRJbmRleF1bY29udHJvbGxlci5wcm9wZXJ0eV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICB2YXIgdmFsdWUgPSBwcmVzZXRbbWF0Y2hlZEluZGV4XVtjb250cm9sbGVyLnByb3BlcnR5XTtcbiAgICAgICAgY29udHJvbGxlci5pbml0aWFsVmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgY29udHJvbGxlci5zZXRWYWx1ZSh2YWx1ZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5mdW5jdGlvbiBfYWRkKGd1aSwgb2JqZWN0LCBwcm9wZXJ0eSwgcGFyYW1zKSB7XG4gIGlmIChvYmplY3RbcHJvcGVydHldID09PSB1bmRlZmluZWQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ09iamVjdCBcIicgKyBvYmplY3QgKyAnXCIgaGFzIG5vIHByb3BlcnR5IFwiJyArIHByb3BlcnR5ICsgJ1wiJyk7XG4gIH1cbiAgdmFyIGNvbnRyb2xsZXIgPSB2b2lkIDA7XG4gIGlmIChwYXJhbXMuY29sb3IpIHtcbiAgICBjb250cm9sbGVyID0gbmV3IENvbG9yQ29udHJvbGxlcihvYmplY3QsIHByb3BlcnR5KTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgZmFjdG9yeUFyZ3MgPSBbb2JqZWN0LCBwcm9wZXJ0eV0uY29uY2F0KHBhcmFtcy5mYWN0b3J5QXJncyk7XG4gICAgY29udHJvbGxlciA9IENvbnRyb2xsZXJGYWN0b3J5LmFwcGx5KGd1aSwgZmFjdG9yeUFyZ3MpO1xuICB9XG4gIGlmIChwYXJhbXMuYmVmb3JlIGluc3RhbmNlb2YgQ29udHJvbGxlcikge1xuICAgIHBhcmFtcy5iZWZvcmUgPSBwYXJhbXMuYmVmb3JlLl9fbGk7XG4gIH1cbiAgcmVjYWxsU2F2ZWRWYWx1ZShndWksIGNvbnRyb2xsZXIpO1xuICBkb20uYWRkQ2xhc3MoY29udHJvbGxlci5kb21FbGVtZW50LCAnYycpO1xuICB2YXIgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgZG9tLmFkZENsYXNzKG5hbWUsICdwcm9wZXJ0eS1uYW1lJyk7XG4gIG5hbWUuaW5uZXJIVE1MID0gY29udHJvbGxlci5wcm9wZXJ0eTtcbiAgdmFyIGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQobmFtZSk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjb250cm9sbGVyLmRvbUVsZW1lbnQpO1xuICB2YXIgbGkgPSBhZGRSb3coZ3VpLCBjb250YWluZXIsIHBhcmFtcy5iZWZvcmUpO1xuICBkb20uYWRkQ2xhc3MobGksIEdVSS5DTEFTU19DT05UUk9MTEVSX1JPVyk7XG4gIGlmIChjb250cm9sbGVyIGluc3RhbmNlb2YgQ29sb3JDb250cm9sbGVyKSB7XG4gICAgZG9tLmFkZENsYXNzKGxpLCAnY29sb3InKTtcbiAgfSBlbHNlIHtcbiAgICBkb20uYWRkQ2xhc3MobGksIF90eXBlb2YoY29udHJvbGxlci5nZXRWYWx1ZSgpKSk7XG4gIH1cbiAgYXVnbWVudENvbnRyb2xsZXIoZ3VpLCBsaSwgY29udHJvbGxlcik7XG4gIGd1aS5fX2NvbnRyb2xsZXJzLnB1c2goY29udHJvbGxlcik7XG4gIHJldHVybiBjb250cm9sbGVyO1xufVxuZnVuY3Rpb24gZ2V0TG9jYWxTdG9yYWdlSGFzaChndWksIGtleSkge1xuICByZXR1cm4gZG9jdW1lbnQubG9jYXRpb24uaHJlZiArICcuJyArIGtleTtcbn1cbmZ1bmN0aW9uIGFkZFByZXNldE9wdGlvbihndWksIG5hbWUsIHNldFNlbGVjdGVkKSB7XG4gIHZhciBvcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgb3B0LmlubmVySFRNTCA9IG5hbWU7XG4gIG9wdC52YWx1ZSA9IG5hbWU7XG4gIGd1aS5fX3ByZXNldF9zZWxlY3QuYXBwZW5kQ2hpbGQob3B0KTtcbiAgaWYgKHNldFNlbGVjdGVkKSB7XG4gICAgZ3VpLl9fcHJlc2V0X3NlbGVjdC5zZWxlY3RlZEluZGV4ID0gZ3VpLl9fcHJlc2V0X3NlbGVjdC5sZW5ndGggLSAxO1xuICB9XG59XG5mdW5jdGlvbiBzaG93SGlkZUV4cGxhaW4oZ3VpLCBleHBsYWluKSB7XG4gIGV4cGxhaW4uc3R5bGUuZGlzcGxheSA9IGd1aS51c2VMb2NhbFN0b3JhZ2UgPyAnYmxvY2snIDogJ25vbmUnO1xufVxuZnVuY3Rpb24gYWRkU2F2ZU1lbnUoZ3VpKSB7XG4gIHZhciBkaXYgPSBndWkuX19zYXZlX3JvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIGRvbS5hZGRDbGFzcyhndWkuZG9tRWxlbWVudCwgJ2hhcy1zYXZlJyk7XG4gIGd1aS5fX3VsLmluc2VydEJlZm9yZShkaXYsIGd1aS5fX3VsLmZpcnN0Q2hpbGQpO1xuICBkb20uYWRkQ2xhc3MoZGl2LCAnc2F2ZS1yb3cnKTtcbiAgdmFyIGdlYXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBnZWFycy5pbm5lckhUTUwgPSAnJm5ic3A7JztcbiAgZG9tLmFkZENsYXNzKGdlYXJzLCAnYnV0dG9uIGdlYXJzJyk7XG4gIHZhciBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIGJ1dHRvbi5pbm5lckhUTUwgPSAnU2F2ZSc7XG4gIGRvbS5hZGRDbGFzcyhidXR0b24sICdidXR0b24nKTtcbiAgZG9tLmFkZENsYXNzKGJ1dHRvbiwgJ3NhdmUnKTtcbiAgdmFyIGJ1dHRvbjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIGJ1dHRvbjIuaW5uZXJIVE1MID0gJ05ldyc7XG4gIGRvbS5hZGRDbGFzcyhidXR0b24yLCAnYnV0dG9uJyk7XG4gIGRvbS5hZGRDbGFzcyhidXR0b24yLCAnc2F2ZS1hcycpO1xuICB2YXIgYnV0dG9uMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgYnV0dG9uMy5pbm5lckhUTUwgPSAnUmV2ZXJ0JztcbiAgZG9tLmFkZENsYXNzKGJ1dHRvbjMsICdidXR0b24nKTtcbiAgZG9tLmFkZENsYXNzKGJ1dHRvbjMsICdyZXZlcnQnKTtcbiAgdmFyIHNlbGVjdCA9IGd1aS5fX3ByZXNldF9zZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgaWYgKGd1aS5sb2FkICYmIGd1aS5sb2FkLnJlbWVtYmVyZWQpIHtcbiAgICBDb21tb24uZWFjaChndWkubG9hZC5yZW1lbWJlcmVkLCBmdW5jdGlvbiAodmFsdWUsIGtleSkge1xuICAgICAgYWRkUHJlc2V0T3B0aW9uKGd1aSwga2V5LCBrZXkgPT09IGd1aS5wcmVzZXQpO1xuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIGFkZFByZXNldE9wdGlvbihndWksIERFRkFVTFRfREVGQVVMVF9QUkVTRVRfTkFNRSwgZmFsc2UpO1xuICB9XG4gIGRvbS5iaW5kKHNlbGVjdCwgJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcbiAgICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgZ3VpLl9fcHJlc2V0X3NlbGVjdC5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgIGd1aS5fX3ByZXNldF9zZWxlY3RbaW5kZXhdLmlubmVySFRNTCA9IGd1aS5fX3ByZXNldF9zZWxlY3RbaW5kZXhdLnZhbHVlO1xuICAgIH1cbiAgICBndWkucHJlc2V0ID0gdGhpcy52YWx1ZTtcbiAgfSk7XG4gIGRpdi5hcHBlbmRDaGlsZChzZWxlY3QpO1xuICBkaXYuYXBwZW5kQ2hpbGQoZ2VhcnMpO1xuICBkaXYuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbiAgZGl2LmFwcGVuZENoaWxkKGJ1dHRvbjIpO1xuICBkaXYuYXBwZW5kQ2hpbGQoYnV0dG9uMyk7XG4gIGlmIChTVVBQT1JUU19MT0NBTF9TVE9SQUdFKSB7XG4gICAgdmFyIGV4cGxhaW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGctbG9jYWwtZXhwbGFpbicpO1xuICAgIHZhciBsb2NhbFN0b3JhZ2VDaGVja0JveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZy1sb2NhbC1zdG9yYWdlJyk7XG4gICAgdmFyIHNhdmVMb2NhbGx5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RnLXNhdmUtbG9jYWxseScpO1xuICAgIHNhdmVMb2NhbGx5LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShnZXRMb2NhbFN0b3JhZ2VIYXNoKGd1aSwgJ2lzTG9jYWwnKSkgPT09ICd0cnVlJykge1xuICAgICAgbG9jYWxTdG9yYWdlQ2hlY2tCb3guc2V0QXR0cmlidXRlKCdjaGVja2VkJywgJ2NoZWNrZWQnKTtcbiAgICB9XG4gICAgc2hvd0hpZGVFeHBsYWluKGd1aSwgZXhwbGFpbik7XG4gICAgZG9tLmJpbmQobG9jYWxTdG9yYWdlQ2hlY2tCb3gsICdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XG4gICAgICBndWkudXNlTG9jYWxTdG9yYWdlID0gIWd1aS51c2VMb2NhbFN0b3JhZ2U7XG4gICAgICBzaG93SGlkZUV4cGxhaW4oZ3VpLCBleHBsYWluKTtcbiAgICB9KTtcbiAgfVxuICB2YXIgbmV3Q29uc3RydWN0b3JUZXh0QXJlYSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZy1uZXctY29uc3RydWN0b3InKTtcbiAgZG9tLmJpbmQobmV3Q29uc3RydWN0b3JUZXh0QXJlYSwgJ2tleWRvd24nLCBmdW5jdGlvbiAoZSkge1xuICAgIGlmIChlLm1ldGFLZXkgJiYgKGUud2hpY2ggPT09IDY3IHx8IGUua2V5Q29kZSA9PT0gNjcpKSB7XG4gICAgICBTQVZFX0RJQUxPR1VFLmhpZGUoKTtcbiAgICB9XG4gIH0pO1xuICBkb20uYmluZChnZWFycywgJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgIG5ld0NvbnN0cnVjdG9yVGV4dEFyZWEuaW5uZXJIVE1MID0gSlNPTi5zdHJpbmdpZnkoZ3VpLmdldFNhdmVPYmplY3QoKSwgdW5kZWZpbmVkLCAyKTtcbiAgICBTQVZFX0RJQUxPR1VFLnNob3coKTtcbiAgICBuZXdDb25zdHJ1Y3RvclRleHRBcmVhLmZvY3VzKCk7XG4gICAgbmV3Q29uc3RydWN0b3JUZXh0QXJlYS5zZWxlY3QoKTtcbiAgfSk7XG4gIGRvbS5iaW5kKGJ1dHRvbiwgJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgIGd1aS5zYXZlKCk7XG4gIH0pO1xuICBkb20uYmluZChidXR0b24yLCAnY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHByZXNldE5hbWUgPSBwcm9tcHQoJ0VudGVyIGEgbmV3IHByZXNldCBuYW1lLicpO1xuICAgIGlmIChwcmVzZXROYW1lKSB7XG4gICAgICBndWkuc2F2ZUFzKHByZXNldE5hbWUpO1xuICAgIH1cbiAgfSk7XG4gIGRvbS5iaW5kKGJ1dHRvbjMsICdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICBndWkucmV2ZXJ0KCk7XG4gIH0pO1xufVxuZnVuY3Rpb24gYWRkUmVzaXplSGFuZGxlKGd1aSkge1xuICB2YXIgcG1vdXNlWCA9IHZvaWQgMDtcbiAgZ3VpLl9fcmVzaXplX2hhbmRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBDb21tb24uZXh0ZW5kKGd1aS5fX3Jlc2l6ZV9oYW5kbGUuc3R5bGUsIHtcbiAgICB3aWR0aDogJzZweCcsXG4gICAgbWFyZ2luTGVmdDogJy0zcHgnLFxuICAgIGhlaWdodDogJzIwMHB4JyxcbiAgICBjdXJzb3I6ICdldy1yZXNpemUnLFxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnXG4gIH0pO1xuICBmdW5jdGlvbiBkcmFnKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZ3VpLndpZHRoICs9IHBtb3VzZVggLSBlLmNsaWVudFg7XG4gICAgZ3VpLm9uUmVzaXplKCk7XG4gICAgcG1vdXNlWCA9IGUuY2xpZW50WDtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgZnVuY3Rpb24gZHJhZ1N0b3AoKSB7XG4gICAgZG9tLnJlbW92ZUNsYXNzKGd1aS5fX2Nsb3NlQnV0dG9uLCBHVUkuQ0xBU1NfRFJBRyk7XG4gICAgZG9tLnVuYmluZCh3aW5kb3csICdtb3VzZW1vdmUnLCBkcmFnKTtcbiAgICBkb20udW5iaW5kKHdpbmRvdywgJ21vdXNldXAnLCBkcmFnU3RvcCk7XG4gIH1cbiAgZnVuY3Rpb24gZHJhZ1N0YXJ0KGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgcG1vdXNlWCA9IGUuY2xpZW50WDtcbiAgICBkb20uYWRkQ2xhc3MoZ3VpLl9fY2xvc2VCdXR0b24sIEdVSS5DTEFTU19EUkFHKTtcbiAgICBkb20uYmluZCh3aW5kb3csICdtb3VzZW1vdmUnLCBkcmFnKTtcbiAgICBkb20uYmluZCh3aW5kb3csICdtb3VzZXVwJywgZHJhZ1N0b3ApO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBkb20uYmluZChndWkuX19yZXNpemVfaGFuZGxlLCAnbW91c2Vkb3duJywgZHJhZ1N0YXJ0KTtcbiAgZG9tLmJpbmQoZ3VpLl9fY2xvc2VCdXR0b24sICdtb3VzZWRvd24nLCBkcmFnU3RhcnQpO1xuICBndWkuZG9tRWxlbWVudC5pbnNlcnRCZWZvcmUoZ3VpLl9fcmVzaXplX2hhbmRsZSwgZ3VpLmRvbUVsZW1lbnQuZmlyc3RFbGVtZW50Q2hpbGQpO1xufVxuZnVuY3Rpb24gc2V0V2lkdGgoZ3VpLCB3KSB7XG4gIGd1aS5kb21FbGVtZW50LnN0eWxlLndpZHRoID0gdyArICdweCc7XG4gIGlmIChndWkuX19zYXZlX3JvdyAmJiBndWkuYXV0b1BsYWNlKSB7XG4gICAgZ3VpLl9fc2F2ZV9yb3cuc3R5bGUud2lkdGggPSB3ICsgJ3B4JztcbiAgfVxuICBpZiAoZ3VpLl9fY2xvc2VCdXR0b24pIHtcbiAgICBndWkuX19jbG9zZUJ1dHRvbi5zdHlsZS53aWR0aCA9IHcgKyAncHgnO1xuICB9XG59XG5mdW5jdGlvbiBnZXRDdXJyZW50UHJlc2V0KGd1aSwgdXNlSW5pdGlhbFZhbHVlcykge1xuICB2YXIgdG9SZXR1cm4gPSB7fTtcbiAgQ29tbW9uLmVhY2goZ3VpLl9fcmVtZW1iZXJlZE9iamVjdHMsIGZ1bmN0aW9uICh2YWwsIGluZGV4KSB7XG4gICAgdmFyIHNhdmVkVmFsdWVzID0ge307XG4gICAgdmFyIGNvbnRyb2xsZXJNYXAgPSBndWkuX19yZW1lbWJlcmVkT2JqZWN0SW5kZWNlc1RvQ29udHJvbGxlcnNbaW5kZXhdO1xuICAgIENvbW1vbi5lYWNoKGNvbnRyb2xsZXJNYXAsIGZ1bmN0aW9uIChjb250cm9sbGVyLCBwcm9wZXJ0eSkge1xuICAgICAgc2F2ZWRWYWx1ZXNbcHJvcGVydHldID0gdXNlSW5pdGlhbFZhbHVlcyA/IGNvbnRyb2xsZXIuaW5pdGlhbFZhbHVlIDogY29udHJvbGxlci5nZXRWYWx1ZSgpO1xuICAgIH0pO1xuICAgIHRvUmV0dXJuW2luZGV4XSA9IHNhdmVkVmFsdWVzO1xuICB9KTtcbiAgcmV0dXJuIHRvUmV0dXJuO1xufVxuZnVuY3Rpb24gc2V0UHJlc2V0U2VsZWN0SW5kZXgoZ3VpKSB7XG4gIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCBndWkuX19wcmVzZXRfc2VsZWN0Lmxlbmd0aDsgaW5kZXgrKykge1xuICAgIGlmIChndWkuX19wcmVzZXRfc2VsZWN0W2luZGV4XS52YWx1ZSA9PT0gZ3VpLnByZXNldCkge1xuICAgICAgZ3VpLl9fcHJlc2V0X3NlbGVjdC5zZWxlY3RlZEluZGV4ID0gaW5kZXg7XG4gICAgfVxuICB9XG59XG5mdW5jdGlvbiB1cGRhdGVEaXNwbGF5cyhjb250cm9sbGVyQXJyYXkpIHtcbiAgaWYgKGNvbnRyb2xsZXJBcnJheS5sZW5ndGggIT09IDApIHtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUkMS5jYWxsKHdpbmRvdywgZnVuY3Rpb24gKCkge1xuICAgICAgdXBkYXRlRGlzcGxheXMoY29udHJvbGxlckFycmF5KTtcbiAgICB9KTtcbiAgfVxuICBDb21tb24uZWFjaChjb250cm9sbGVyQXJyYXksIGZ1bmN0aW9uIChjKSB7XG4gICAgYy51cGRhdGVEaXNwbGF5KCk7XG4gIH0pO1xufVxuXG52YXIgY29sb3IgPSB7XG4gIENvbG9yOiBDb2xvcixcbiAgbWF0aDogQ29sb3JNYXRoLFxuICBpbnRlcnByZXQ6IGludGVycHJldFxufTtcbnZhciBjb250cm9sbGVycyA9IHtcbiAgQ29udHJvbGxlcjogQ29udHJvbGxlcixcbiAgQm9vbGVhbkNvbnRyb2xsZXI6IEJvb2xlYW5Db250cm9sbGVyLFxuICBPcHRpb25Db250cm9sbGVyOiBPcHRpb25Db250cm9sbGVyLFxuICBTdHJpbmdDb250cm9sbGVyOiBTdHJpbmdDb250cm9sbGVyLFxuICBOdW1iZXJDb250cm9sbGVyOiBOdW1iZXJDb250cm9sbGVyLFxuICBOdW1iZXJDb250cm9sbGVyQm94OiBOdW1iZXJDb250cm9sbGVyQm94LFxuICBOdW1iZXJDb250cm9sbGVyU2xpZGVyOiBOdW1iZXJDb250cm9sbGVyU2xpZGVyLFxuICBGdW5jdGlvbkNvbnRyb2xsZXI6IEZ1bmN0aW9uQ29udHJvbGxlcixcbiAgQ29sb3JDb250cm9sbGVyOiBDb2xvckNvbnRyb2xsZXJcbn07XG52YXIgZG9tJDEgPSB7IGRvbTogZG9tIH07XG52YXIgZ3VpID0geyBHVUk6IEdVSSB9O1xudmFyIEdVSSQxID0gR1VJO1xudmFyIGluZGV4ID0ge1xuICBjb2xvcjogY29sb3IsXG4gIGNvbnRyb2xsZXJzOiBjb250cm9sbGVycyxcbiAgZG9tOiBkb20kMSxcbiAgZ3VpOiBndWksXG4gIEdVSTogR1VJJDFcbn07XG5cbmV4cG9ydCB7IGNvbG9yLCBjb250cm9sbGVycywgZG9tJDEgYXMgZG9tLCBndWksIEdVSSQxIGFzIEdVSSB9O1xuZXhwb3J0IGRlZmF1bHQgaW5kZXg7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXQuZ3VpLm1vZHVsZS5qcy5tYXBcbiIsImltcG9ydCBEZWJ1ZyBmcm9tICdAYmFzZW1lbnR1bml2ZXJzZS9kZWJ1Zyc7XG5pbXBvcnQgSW5wdXRNYW5hZ2VyIGZyb20gJ0BiYXNlbWVudHVuaXZlcnNlL2lucHV0LW1hbmFnZXInO1xuaW1wb3J0IHsgdmVjIH0gZnJvbSAnQGJhc2VtZW50dW5pdmVyc2UvdmVjJztcbmltcG9ydCB7IHY0IGFzIHV1aWQgfSBmcm9tICd1dWlkJztcbmltcG9ydCBHYW1lIGZyb20gJy4vR2FtZSc7XG5pbXBvcnQgU2hhZG93Q2FzdGVyIGZyb20gJy4vU2hhZG93Q2FzdGVyJztcbmltcG9ydCB7IGNsYW1wVmVjLCBwb2ludEluUmVjdGFuZ2xlIH0gZnJvbSAnLi91dGlscyc7XG5cbmV4cG9ydCBjbGFzcyBDaXJjbGVTaGFkb3dDYXN0ZXIgaW1wbGVtZW50cyBTaGFkb3dDYXN0ZXIge1xuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBERUZBVUxUX1NJWkUgPSB2ZWMoMTAwLCAxMDApO1xuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBERUZBVUxUX0NPTE9VUiA9ICcjY2NjJztcbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgREVCVUdfQ09MT1VSID0gJyNiMDUnO1xuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBERUJVR19IT1ZFUl9DT0xPVVIgPSAnI2QyNyc7XG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IE1JTl9TSVpFID0gdmVjKDIwLCAyMCk7XG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IE1BWF9TSVpFID0gdmVjKDIwMCwgMjAwKTtcblxuICBwdWJsaWMgcmVhZG9ubHkgdHlwZSA9ICdDaXJjbGVTaGFkb3dDYXN0ZXInO1xuXG4gIHB1YmxpYyBpZDogc3RyaW5nID0gJyc7XG4gIHB1YmxpYyBmb2xkZXI6IGRhdC5HVUkgfCBudWxsID0gbnVsbDtcblxuICBwdWJsaWMgcG9zaXRpb246IHZlYyA9IHZlYygpO1xuICBwdWJsaWMgc2l6ZTogdmVjID0gQ2lyY2xlU2hhZG93Q2FzdGVyLkRFRkFVTFRfU0laRTtcbiAgcHVibGljIGNvbG91cjogc3RyaW5nID0gQ2lyY2xlU2hhZG93Q2FzdGVyLkRFRkFVTFRfQ09MT1VSO1xuXG4gIHB1YmxpYyBob3ZlcmVkID0gZmFsc2U7XG4gIHB1YmxpYyBzZWxlY3RlZCA9IGZhbHNlO1xuICBwcml2YXRlIGRyYWdnaW5nID0gZmFsc2U7XG4gIHByaXZhdGUgZHJhZ09mZnNldDogdmVjIHwgbnVsbCA9IG51bGw7XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKGRhdGE6IFBhcnRpYWw8Q2lyY2xlU2hhZG93Q2FzdGVyPiA9IHt9KSB7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBkYXRhLCB7XG4gICAgICBpZDogZGF0YS5pZCA/PyB1dWlkKCkuc3BsaXQoJy0nKVswXSxcbiAgICB9KTtcblxuICAgIHRoaXMuZm9sZGVyID0gR2FtZS5ndWkuYWRkRm9sZGVyKGBDaXJjbGVTaGFkb3dDYXN0ZXIgJHt0aGlzLmlkfWApO1xuICAgIHRoaXMuZm9sZGVyLmFkZCh0aGlzLnBvc2l0aW9uLCAneCcpO1xuICAgIHRoaXMuZm9sZGVyLmFkZCh0aGlzLnBvc2l0aW9uLCAneScpO1xuICAgIHRoaXMuZm9sZGVyXG4gICAgICAuYWRkKFxuICAgICAgICB0aGlzLnNpemUsXG4gICAgICAgICd4JyxcbiAgICAgICAgQ2lyY2xlU2hhZG93Q2FzdGVyLk1JTl9TSVpFLngsXG4gICAgICAgIENpcmNsZVNoYWRvd0Nhc3Rlci5NQVhfU0laRS54XG4gICAgICApXG4gICAgICAubmFtZSgnd2lkdGgnKTtcbiAgICB0aGlzLmZvbGRlclxuICAgICAgLmFkZChcbiAgICAgICAgdGhpcy5zaXplLFxuICAgICAgICAneScsXG4gICAgICAgIENpcmNsZVNoYWRvd0Nhc3Rlci5NSU5fU0laRS55LFxuICAgICAgICBDaXJjbGVTaGFkb3dDYXN0ZXIuTUFYX1NJWkUueVxuICAgICAgKVxuICAgICAgLm5hbWUoJ2hlaWdodCcpO1xuICAgIHRoaXMuZm9sZGVyLmFkZCh0aGlzLCAnY29sb3VyJyk7XG4gIH1cblxuICBwdWJsaWMgc2VyaWFsaXNlKCk6IGFueSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6IHRoaXMudHlwZSxcbiAgICAgIGlkOiB0aGlzLmlkLFxuICAgICAgcG9zaXRpb246IHRoaXMucG9zaXRpb24sXG4gICAgICBzaXplOiB0aGlzLnNpemUsXG4gICAgICBjb2xvdXI6IHRoaXMuY29sb3VyLFxuICAgIH07XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGRlc2VyaWFsaXNlKGRhdGE6IGFueSk6IENpcmNsZVNoYWRvd0Nhc3RlciB7XG4gICAgcmV0dXJuIG5ldyBDaXJjbGVTaGFkb3dDYXN0ZXIoZGF0YSk7XG4gIH1cblxuICBwdWJsaWMgZGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy5mb2xkZXIpIHtcbiAgICAgIEdhbWUuZ3VpLnJlbW92ZUZvbGRlcih0aGlzLmZvbGRlcik7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHVwZGF0ZShkdDogbnVtYmVyKSB7XG4gICAgdGhpcy5ob3ZlcmVkID0gcG9pbnRJblJlY3RhbmdsZShJbnB1dE1hbmFnZXIubW91c2VQb3NpdGlvbiwge1xuICAgICAgcG9zaXRpb246IHRoaXMucG9zaXRpb24sXG4gICAgICBzaXplOiB0aGlzLnNpemUsXG4gICAgfSk7XG5cbiAgICBpZiAoSW5wdXRNYW5hZ2VyLm1vdXNlRG93bigpICYmIHRoaXMuc2VsZWN0ZWQgJiYgIXRoaXMuZHJhZ2dpbmcpIHtcbiAgICAgIHRoaXMuZHJhZ2dpbmcgPSB0cnVlO1xuICAgICAgdGhpcy5kcmFnT2Zmc2V0ID0gdmVjLnN1YihJbnB1dE1hbmFnZXIubW91c2VQb3NpdGlvbiwgdGhpcy5wb3NpdGlvbik7XG4gICAgfVxuXG4gICAgaWYgKCFJbnB1dE1hbmFnZXIubW91c2VEb3duKCkpIHtcbiAgICAgIHRoaXMuZHJhZ2dpbmcgPSBmYWxzZTtcbiAgICAgIHRoaXMuZHJhZ09mZnNldCA9IG51bGw7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuc2VsZWN0ZWQgJiYgdGhpcy5kcmFnZ2luZyAmJiB0aGlzLmRyYWdPZmZzZXQpIHtcbiAgICAgIGlmIChJbnB1dE1hbmFnZXIua2V5RG93bignQ29udHJvbExlZnQnKSkge1xuICAgICAgICB0aGlzLnNpemUgPSBjbGFtcFZlYyhcbiAgICAgICAgICB2ZWMuc3ViKElucHV0TWFuYWdlci5tb3VzZVBvc2l0aW9uLCB0aGlzLnBvc2l0aW9uKSxcbiAgICAgICAgICBDaXJjbGVTaGFkb3dDYXN0ZXIuTUlOX1NJWkUsXG4gICAgICAgICAgQ2lyY2xlU2hhZG93Q2FzdGVyLk1BWF9TSVpFXG4gICAgICAgICk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnBvc2l0aW9uID0gdmVjLnN1YihJbnB1dE1hbmFnZXIubW91c2VQb3NpdGlvbiwgdGhpcy5kcmFnT2Zmc2V0KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBEZWJ1Zy5ib3JkZXIoYENpcmNsZVNoYWRvd0Nhc3RlciAke3RoaXMuaWR9YCwgJycsIHRoaXMucG9zaXRpb24sIHtcbiAgICAgIHNob3dMYWJlbDogdHJ1ZSxcbiAgICAgIHNob3dWYWx1ZTogZmFsc2UsXG4gICAgICBzaXplOiB0aGlzLnNpemUsXG4gICAgICBib3JkZXJDb2xvdXI6XG4gICAgICAgIHRoaXMuaG92ZXJlZCB8fCB0aGlzLmRyYWdnaW5nXG4gICAgICAgICAgPyBDaXJjbGVTaGFkb3dDYXN0ZXIuREVCVUdfSE9WRVJfQ09MT1VSXG4gICAgICAgICAgOiBDaXJjbGVTaGFkb3dDYXN0ZXIuREVCVUdfQ09MT1VSLFxuICAgICAgYm9yZGVyU3R5bGU6IHRoaXMuc2VsZWN0ZWQgPyAnc29saWQnIDogJ2Rhc2hlZCcsXG4gICAgfSk7XG4gIH1cbn1cbiIsImltcG9ydCBEZWJ1ZyBmcm9tICdAYmFzZW1lbnR1bml2ZXJzZS9kZWJ1Zyc7XG5pbXBvcnQgSW5wdXRNYW5hZ2VyIGZyb20gJ0BiYXNlbWVudHVuaXZlcnNlL2lucHV0LW1hbmFnZXInO1xuaW1wb3J0IHsgdmVjIH0gZnJvbSAnQGJhc2VtZW50dW5pdmVyc2UvdmVjJztcbmltcG9ydCAqIGFzIGRhdCBmcm9tICdkYXQuZ3VpJztcbmltcG9ydCAqIGFzIGNvbnN0YW50cyBmcm9tICcuL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBMaWdodGluZ1NjZW5lIH0gZnJvbSAnLi9MaWdodGluZ1NjZW5lJztcbmltcG9ydCB7IFRlc3RTY2VuZSB9IGZyb20gJy4vVGVzdFNjZW5lJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZSB7XG4gIHByaXZhdGUgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudDtcbiAgcHJpdmF0ZSBjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XG5cbiAgcHJpdmF0ZSBsYXN0RnJhbWVUaW1lOiBudW1iZXI7XG4gIHByaXZhdGUgbGFzdEZyYW1lQ291bnRUaW1lOiBudW1iZXI7XG4gIHByaXZhdGUgZnJhbWVSYXRlOiBudW1iZXIgPSAwO1xuICBwcml2YXRlIGZyYW1lQ291bnQ6IG51bWJlciA9IDA7XG5cbiAgcHJpdmF0ZSBzY2VuZTogVGVzdFNjZW5lIHwgTGlnaHRpbmdTY2VuZSB8IG51bGwgPSBudWxsO1xuXG4gIHB1YmxpYyBzdGF0aWMgc2NyZWVuOiB2ZWM7XG4gIHB1YmxpYyBzdGF0aWMgZ3VpOiBkYXQuR1VJO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcihjb250YWluZXI6IEhUTUxFbGVtZW50IHwgbnVsbCkge1xuICAgIGlmIChjb250YWluZXIgPT09IG51bGwpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQSB2YWxpZCBjb250YWluZXIgZWxlbWVudCBtdXN0IGJlIHNwZWNpZmllZC4nKTtcbiAgICB9XG4gICAgaWYgKGNvbnRhaW5lci50YWdOYW1lLnRvTG93ZXJDYXNlKCkgIT09ICdjYW52YXMnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvbnRhaW5lciBlbGVtZW50IG11c3QgYmUgYSBjYW52YXMuJyk7XG4gICAgfVxuICAgIHRoaXMuY2FudmFzID0gY29udGFpbmVyIGFzIEhUTUxDYW52YXNFbGVtZW50O1xuXG4gICAgLy8gR2V0IGEgMmQgY29udGV4dFxuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIGlmIChjb250ZXh0ICE9PSBudWxsKSB7XG4gICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBnZXQgYSAyZCBjb250ZXh0LlwiKTtcbiAgICB9XG5cbiAgICAvLyBIYW5kbGUgcmVzaXplXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMucmVzaXplLmJpbmQodGhpcyksIGZhbHNlKTtcbiAgICB0aGlzLnJlc2l6ZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSByZXNpemUoKSB7XG4gICAgdGhpcy5jYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gIH1cblxuICBwdWJsaWMgaW5pdGlhbGlzZSgpIHtcbiAgICAvLyBJbml0aWFsaXNlIHN1YnN5c3RlbXNcbiAgICBEZWJ1Zy5pbml0aWFsaXNlKCk7XG4gICAgSW5wdXRNYW5hZ2VyLmluaXRpYWxpc2UoKTtcbiAgICBHYW1lLmd1aSA9IG5ldyBkYXQuR1VJKCk7XG5cbiAgICAvLyBTdGFydCBnYW1lIGxvb3BcbiAgICB0aGlzLmxhc3RGcmFtZVRpbWUgPSB0aGlzLmxhc3RGcmFtZUNvdW50VGltZSA9IHBlcmZvcm1hbmNlLm5vdygpO1xuICAgIHRoaXMubG9vcCgpO1xuXG4gICAgLy8gSW5pdGlhbGlzZSBzY2VuZVxuICAgIHRoaXMuc2NlbmUgPSBuZXcgTGlnaHRpbmdTY2VuZSgpO1xuICAgIC8vIHRoaXMuc2NlbmUgPSBuZXcgVGVzdFNjZW5lKCk7XG4gICAgdGhpcy5zY2VuZS5pbml0aWFsaXNlKCk7XG4gIH1cblxuICBwcml2YXRlIGxvb3AoKSB7XG4gICAgY29uc3Qgbm93ID0gcGVyZm9ybWFuY2Uubm93KCk7XG4gICAgY29uc3QgZWxhcHNlZFRpbWUgPSBNYXRoLm1pbihub3cgLSB0aGlzLmxhc3RGcmFtZVRpbWUsIGNvbnN0YW50cy5GUFNfTUlOKTtcblxuICAgIC8vIENhbGN1bGF0ZSBmcmFtZXJhdGVcbiAgICBpZiAobm93IC0gdGhpcy5sYXN0RnJhbWVDb3VudFRpbWUgPj0gMTAwMCkge1xuICAgICAgdGhpcy5sYXN0RnJhbWVDb3VudFRpbWUgPSBub3c7XG4gICAgICB0aGlzLmZyYW1lUmF0ZSA9IHRoaXMuZnJhbWVDb3VudDtcbiAgICAgIHRoaXMuZnJhbWVDb3VudCA9IDA7XG4gICAgfVxuICAgIHRoaXMuZnJhbWVDb3VudCsrO1xuICAgIHRoaXMubGFzdEZyYW1lVGltZSA9IG5vdztcblxuICAgIERlYnVnLnZhbHVlKCdGUFMnLCB0aGlzLmZyYW1lUmF0ZSk7XG5cbiAgICAvLyBEbyBnYW1lIGxvb3BcbiAgICB0aGlzLnVwZGF0ZShlbGFwc2VkVGltZSk7XG4gICAgdGhpcy5kcmF3KCk7XG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmxvb3AuYmluZCh0aGlzKSk7XG4gIH1cblxuICB1cGRhdGUoZHQ6IG51bWJlcikge1xuICAgIEdhbWUuc2NyZWVuID0gdmVjKHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuXG4gICAgaWYgKHRoaXMuc2NlbmUpIHtcbiAgICAgIHRoaXMuc2NlbmUudXBkYXRlKGR0KTtcbiAgICB9XG5cbiAgICBJbnB1dE1hbmFnZXIudXBkYXRlKCk7IC8vIElucHV0IG1hbmFnZXIgc2hvdWxkIGJlIHVwZGF0ZWQgbGFzdFxuICB9XG5cbiAgZHJhdygpIHtcbiAgICB0aGlzLmNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuXG4gICAgaWYgKHRoaXMuc2NlbmUpIHtcbiAgICAgIHRoaXMuc2NlbmUuZHJhdyh0aGlzLmNvbnRleHQpO1xuICAgIH1cblxuICAgIERlYnVnLmRyYXcodGhpcy5jb250ZXh0KTtcbiAgfVxufVxuIiwiaW1wb3J0IERlYnVnIGZyb20gJ0BiYXNlbWVudHVuaXZlcnNlL2RlYnVnJztcbmltcG9ydCBJbnB1dE1hbmFnZXIgZnJvbSAnQGJhc2VtZW50dW5pdmVyc2UvaW5wdXQtbWFuYWdlcic7XG5pbXBvcnQgeyB2ZWMgfSBmcm9tICdAYmFzZW1lbnR1bml2ZXJzZS92ZWMnO1xuaW1wb3J0IHsgdjQgYXMgdXVpZCB9IGZyb20gJ3V1aWQnO1xuaW1wb3J0IEdhbWUgZnJvbSAnLi9HYW1lJztcbmltcG9ydCB7IGNsYW1wVmVjLCBwb2ludEluUmVjdGFuZ2xlIH0gZnJvbSAnLi91dGlscyc7XG5cbmV4cG9ydCBjbGFzcyBHcm91bmRTaGFkb3dSZWNlaXZlciB7XG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IERFRkFVTFRfU0laRSA9IHZlYygyMDAsIDIwMCk7XG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IERFRkFVTFRfQ09MT1VSID0gJyNkZGQnO1xuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBERUJVR19DT0xPVVIgPSAnIzA1Yic7XG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IERFQlVHX0hPVkVSX0NPTE9VUiA9ICcjMzhmJztcbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgTUlOX1NJWkUgPSB2ZWMoMjAsIDIwKTtcbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgTUFYX1NJWkUgPSB2ZWMoNjAwLCA2MDApO1xuXG4gIHB1YmxpYyByZWFkb25seSB0eXBlID0gJ0dyb3VuZFNoYWRvd1JlY2VpdmVyJztcblxuICBwdWJsaWMgaWQ6IHN0cmluZyA9ICcnO1xuICBwdWJsaWMgZm9sZGVyOiBkYXQuR1VJIHwgbnVsbCA9IG51bGw7XG5cbiAgcHVibGljIHBvc2l0aW9uOiB2ZWMgPSB2ZWMoKTtcbiAgcHVibGljIHNpemU6IHZlYyA9IEdyb3VuZFNoYWRvd1JlY2VpdmVyLkRFRkFVTFRfU0laRTtcbiAgcHVibGljIGNvbG91cjogc3RyaW5nID0gR3JvdW5kU2hhZG93UmVjZWl2ZXIuREVGQVVMVF9DT0xPVVI7XG5cbiAgcHVibGljIGhvdmVyZWQgPSBmYWxzZTtcbiAgcHVibGljIHNlbGVjdGVkID0gZmFsc2U7XG4gIHByaXZhdGUgZHJhZ2dpbmcgPSBmYWxzZTtcbiAgcHJpdmF0ZSBkcmFnT2Zmc2V0OiB2ZWMgfCBudWxsID0gbnVsbDtcblxuICBwdWJsaWMgY29uc3RydWN0b3IoZGF0YTogUGFydGlhbDxHcm91bmRTaGFkb3dSZWNlaXZlcj4gPSB7fSkge1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywgZGF0YSwge1xuICAgICAgaWQ6IGRhdGEuaWQgPz8gdXVpZCgpLnNwbGl0KCctJylbMF0sXG4gICAgfSk7XG5cbiAgICB0aGlzLmZvbGRlciA9IEdhbWUuZ3VpLmFkZEZvbGRlcihgR3JvdW5kU2hhZG93UmVjZWl2ZXIgJHt0aGlzLmlkfWApO1xuICAgIHRoaXMuZm9sZGVyLmFkZCh0aGlzLnBvc2l0aW9uLCAneCcpO1xuICAgIHRoaXMuZm9sZGVyLmFkZCh0aGlzLnBvc2l0aW9uLCAneScpO1xuICAgIHRoaXMuZm9sZGVyXG4gICAgICAuYWRkKFxuICAgICAgICB0aGlzLnNpemUsXG4gICAgICAgICd4JyxcbiAgICAgICAgR3JvdW5kU2hhZG93UmVjZWl2ZXIuTUlOX1NJWkUueCxcbiAgICAgICAgR3JvdW5kU2hhZG93UmVjZWl2ZXIuTUFYX1NJWkUueFxuICAgICAgKVxuICAgICAgLm5hbWUoJ3dpZHRoJyk7XG4gICAgdGhpcy5mb2xkZXJcbiAgICAgIC5hZGQoXG4gICAgICAgIHRoaXMuc2l6ZSxcbiAgICAgICAgJ3knLFxuICAgICAgICBHcm91bmRTaGFkb3dSZWNlaXZlci5NSU5fU0laRS55LFxuICAgICAgICBHcm91bmRTaGFkb3dSZWNlaXZlci5NQVhfU0laRS55XG4gICAgICApXG4gICAgICAubmFtZSgnaGVpZ2h0Jyk7XG4gICAgdGhpcy5mb2xkZXIuYWRkKHRoaXMsICdjb2xvdXInKTtcbiAgfVxuXG4gIHB1YmxpYyBzZXJpYWxpc2UoKTogYW55IHtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogdGhpcy50eXBlLFxuICAgICAgaWQ6IHRoaXMuaWQsXG4gICAgICBwb3NpdGlvbjogdGhpcy5wb3NpdGlvbixcbiAgICAgIHNpemU6IHRoaXMuc2l6ZSxcbiAgICAgIGNvbG91cjogdGhpcy5jb2xvdXIsXG4gICAgfTtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgZGVzZXJpYWxpc2UoZGF0YTogYW55KTogR3JvdW5kU2hhZG93UmVjZWl2ZXIge1xuICAgIHJldHVybiBuZXcgR3JvdW5kU2hhZG93UmVjZWl2ZXIoZGF0YSk7XG4gIH1cblxuICBwdWJsaWMgZGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy5mb2xkZXIpIHtcbiAgICAgIEdhbWUuZ3VpLnJlbW92ZUZvbGRlcih0aGlzLmZvbGRlcik7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHVwZGF0ZShkdDogbnVtYmVyKSB7XG4gICAgdGhpcy5ob3ZlcmVkID0gcG9pbnRJblJlY3RhbmdsZShJbnB1dE1hbmFnZXIubW91c2VQb3NpdGlvbiwge1xuICAgICAgcG9zaXRpb246IHRoaXMucG9zaXRpb24sXG4gICAgICBzaXplOiB0aGlzLnNpemUsXG4gICAgfSk7XG5cbiAgICBpZiAoSW5wdXRNYW5hZ2VyLm1vdXNlRG93bigpICYmIHRoaXMuc2VsZWN0ZWQgJiYgIXRoaXMuZHJhZ2dpbmcpIHtcbiAgICAgIHRoaXMuZHJhZ2dpbmcgPSB0cnVlO1xuICAgICAgdGhpcy5kcmFnT2Zmc2V0ID0gdmVjLnN1YihJbnB1dE1hbmFnZXIubW91c2VQb3NpdGlvbiwgdGhpcy5wb3NpdGlvbik7XG4gICAgfVxuXG4gICAgaWYgKCFJbnB1dE1hbmFnZXIubW91c2VEb3duKCkpIHtcbiAgICAgIHRoaXMuZHJhZ2dpbmcgPSBmYWxzZTtcbiAgICAgIHRoaXMuZHJhZ09mZnNldCA9IG51bGw7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuc2VsZWN0ZWQgJiYgdGhpcy5kcmFnZ2luZyAmJiB0aGlzLmRyYWdPZmZzZXQpIHtcbiAgICAgIGlmIChJbnB1dE1hbmFnZXIua2V5RG93bignQ29udHJvbExlZnQnKSkge1xuICAgICAgICB0aGlzLnNpemUgPSBjbGFtcFZlYyhcbiAgICAgICAgICB2ZWMuc3ViKElucHV0TWFuYWdlci5tb3VzZVBvc2l0aW9uLCB0aGlzLnBvc2l0aW9uKSxcbiAgICAgICAgICBHcm91bmRTaGFkb3dSZWNlaXZlci5NSU5fU0laRSxcbiAgICAgICAgICBHcm91bmRTaGFkb3dSZWNlaXZlci5NQVhfU0laRVxuICAgICAgICApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHZlYy5zdWIoSW5wdXRNYW5hZ2VyLm1vdXNlUG9zaXRpb24sIHRoaXMuZHJhZ09mZnNldCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgRGVidWcuYm9yZGVyKGBHcm91bmRTaGFkb3dSZWNlaXZlciAke3RoaXMuaWR9YCwgJycsIHRoaXMucG9zaXRpb24sIHtcbiAgICAgIHNob3dMYWJlbDogZmFsc2UsXG4gICAgICBzaG93VmFsdWU6IGZhbHNlLFxuICAgICAgc2l6ZTogdGhpcy5zaXplLFxuICAgICAgYm9yZGVyQ29sb3VyOlxuICAgICAgICB0aGlzLmhvdmVyZWQgfHwgdGhpcy5kcmFnZ2luZ1xuICAgICAgICAgID8gR3JvdW5kU2hhZG93UmVjZWl2ZXIuREVCVUdfSE9WRVJfQ09MT1VSXG4gICAgICAgICAgOiBHcm91bmRTaGFkb3dSZWNlaXZlci5ERUJVR19DT0xPVVIsXG4gICAgICBib3JkZXJTdHlsZTogdGhpcy5zZWxlY3RlZCA/ICdzb2xpZCcgOiAnZGFzaGVkJyxcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBkcmF3KGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkge1xuICAgIGNvbnRleHQuc2F2ZSgpO1xuXG4gICAgY29udGV4dC5maWxsU3R5bGUgPSB0aGlzLmNvbG91cjtcbiAgICBjb250ZXh0LmZpbGxSZWN0KFxuICAgICAgdGhpcy5wb3NpdGlvbi54LFxuICAgICAgdGhpcy5wb3NpdGlvbi55LFxuICAgICAgdGhpcy5zaXplLngsXG4gICAgICB0aGlzLnNpemUueVxuICAgICk7XG5cbiAgICBjb250ZXh0LnJlc3RvcmUoKTtcbiAgfVxuXG4gIHB1YmxpYyBkcmF3TWFzayhjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpIHtcbiAgICBjb250ZXh0LnNhdmUoKTtcblxuICAgIGNvbnRleHQuZmlsbFN0eWxlID0gJ2JsYWNrJztcbiAgICBjb250ZXh0LmZpbGxSZWN0KFxuICAgICAgdGhpcy5wb3NpdGlvbi54LFxuICAgICAgdGhpcy5wb3NpdGlvbi55LFxuICAgICAgdGhpcy5zaXplLngsXG4gICAgICB0aGlzLnNpemUueVxuICAgICk7XG5cbiAgICBjb250ZXh0LnJlc3RvcmUoKTtcbiAgfVxufVxuIiwiaW1wb3J0IERlYnVnIGZyb20gJ0BiYXNlbWVudHVuaXZlcnNlL2RlYnVnJztcbmltcG9ydCBJbnB1dE1hbmFnZXIgZnJvbSAnQGJhc2VtZW50dW5pdmVyc2UvaW5wdXQtbWFuYWdlcic7XG5pbXBvcnQgeyBwYXJzZUNvbG9yIH0gZnJvbSAnQGJhc2VtZW50dW5pdmVyc2UvcGFyc2Vjb2xvcic7XG5pbXBvcnQgeyBhdCwgY2xhbXAsIGV4Y2x1ZGUsIHJlbWFwIH0gZnJvbSAnQGJhc2VtZW50dW5pdmVyc2UvdXRpbHMnO1xuaW1wb3J0IHsgdmVjIH0gZnJvbSAnQGJhc2VtZW50dW5pdmVyc2UvdmVjJztcbmltcG9ydCB7IHY0IGFzIHV1aWQgfSBmcm9tICd1dWlkJztcbmltcG9ydCB7IENpcmNsZVNoYWRvd0Nhc3RlciB9IGZyb20gJy4vQ2lyY2xlU2hhZG93Q2FzdGVyJztcbmltcG9ydCBHYW1lIGZyb20gJy4vR2FtZSc7XG5pbXBvcnQgeyBHcm91bmRTaGFkb3dSZWNlaXZlciB9IGZyb20gJy4vR3JvdW5kU2hhZG93UmVjZWl2ZXInO1xuaW1wb3J0IHsgTGlnaHRpbmdTeXN0ZW0gfSBmcm9tICcuL0xpZ2h0aW5nU3lzdGVtJztcbmltcG9ydCB7IFJlZ2lvblNoYWRvd0Nhc3RlciB9IGZyb20gJy4vUmVnaW9uU2hhZG93Q2FzdGVyJztcbmltcG9ydCBTaGFkb3dDYXN0ZXIgZnJvbSAnLi9TaGFkb3dDYXN0ZXInO1xuaW1wb3J0IHsgU3ByaXRlU2hhZG93Q2FzdGVyIH0gZnJvbSAnLi9TcHJpdGVTaGFkb3dDYXN0ZXInO1xuaW1wb3J0IHtcbiAgQ29sb3VyLFxuICBJbnRlcnZhbDJkLFxuICBMaW5lLFxuICBQb2x5Z29uVmVydGljZXMsXG4gIFJlY3RhbmdsZSxcbiAgU2VjdG9yMmQsXG59IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHtcbiAgY29sb3VyVG9TdHJpbmcsXG4gIGxpbmVZSW50ZXJjZXB0LFxuICBvdmVybGFwMWQsXG4gIHBvbHlnb24sXG4gIHJlY3RhbmdsZXNJbnRlcnNlY3QsXG4gIHJlY3RhbmdsZVRvSW50ZXJ2YWwsXG4gIHJlY3RhbmdsZVZlcnRpY2VzLFxuICBzZWN0b3IyZCxcbn0gZnJvbSAnLi91dGlscyc7XG5pbXBvcnQgeyBXYWxsU2hhZG93UmVjZWl2ZXIgfSBmcm9tICcuL1dhbGxTaGFkb3dSZWNlaXZlcic7XG5cbmV4cG9ydCBjbGFzcyBMaWdodCB7XG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IERFRkFVTFRfUkFESVVTID0gMTAwO1xuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBERUZBVUxUX0NPTE9VUiA9ICd3aGl0ZSc7XG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IERFRkFVTFRfSU5URU5TSVRZID0gMC4yO1xuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBIT1ZFUl9SQURJVVMgPSAyMDtcbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgREVCVUdfQ09MT1VSID0gJyNmNTAnO1xuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBERUJVR19IT1ZFUl9DT0xPVVIgPSAnI2Y5MCc7XG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IE1JTl9SQURJVVMgPSAxMDtcbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgTUFYX1JBRElVUyA9IDQwMDtcbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgU0hBRE9XX0JVRkZFUiA9IDIwO1xuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBXQUxMX0xJR0hUX0NVVE9GRl9ESVNUQU5DRSA9IDMwO1xuXG4gIHB1YmxpYyByZWFkb25seSB0eXBlID0gJ0xpZ2h0JztcblxuICBwdWJsaWMgaWQ6IHN0cmluZyA9ICcnO1xuICBwdWJsaWMgZm9sZGVyOiBkYXQuR1VJIHwgbnVsbCA9IG51bGw7XG5cbiAgcHVibGljIHBvc2l0aW9uOiB2ZWMgPSB2ZWMoKTtcbiAgcHJpdmF0ZSBfcmFkaXVzOiBudW1iZXIgPSBMaWdodC5ERUZBVUxUX1JBRElVUztcbiAgcHJpdmF0ZSBfY29sb3VyOiBzdHJpbmcgPSBMaWdodC5ERUZBVUxUX0NPTE9VUjtcbiAgcHVibGljIGNvbG91ck9iamVjdDogQ29sb3VyO1xuICBwcml2YXRlIF9pbnRlbnNpdHk6IG51bWJlciA9IExpZ2h0LkRFRkFVTFRfSU5URU5TSVRZO1xuXG4gIHB1YmxpYyBob3ZlcmVkID0gZmFsc2U7XG4gIHB1YmxpYyBzZWxlY3RlZCA9IGZhbHNlO1xuICBwcml2YXRlIGRyYWdnaW5nID0gZmFsc2U7XG4gIHByaXZhdGUgZHJhZ09mZnNldDogdmVjIHwgbnVsbCA9IG51bGw7XG5cbiAgcHVibGljIGxpZ2h0Q2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudDtcbiAgcHJpdmF0ZSBsaWdodENvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcblxuICBwdWJsaWMgZ3JvdW5kTGlnaHRDYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xuICBwcml2YXRlIGdyb3VuZExpZ2h0Q29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xuXG4gIHB1YmxpYyB3YWxsTGlnaHRDYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xuICBwcml2YXRlIHdhbGxMaWdodENvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcblxuICBwcml2YXRlIGRpcnR5ID0gdHJ1ZTtcblxuICBwdWJsaWMgY29uc3RydWN0b3IoZGF0YTogUGFydGlhbDxMaWdodD4gPSB7fSkge1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywgZXhjbHVkZShkYXRhLCAncmFkaXVzJywgJ2NvbG91cicsICdpbnRlbnNpdHknKSwge1xuICAgICAgaWQ6IGRhdGEuaWQgPz8gdXVpZCgpLnNwbGl0KCctJylbMF0sXG4gICAgICBfcmFkaXVzOiBkYXRhLnJhZGl1cyA/PyBMaWdodC5ERUZBVUxUX1JBRElVUyxcbiAgICAgIF9jb2xvdXI6IGRhdGEuY29sb3VyID8/IExpZ2h0LkRFRkFVTFRfQ09MT1VSLFxuICAgICAgX2ludGVuc2l0eTogZGF0YS5pbnRlbnNpdHkgPz8gTGlnaHQuREVGQVVMVF9JTlRFTlNJVFksXG4gICAgfSk7XG5cbiAgICB0aGlzLmZvbGRlciA9IEdhbWUuZ3VpLmFkZEZvbGRlcihgTGlnaHQgJHt0aGlzLmlkfWApO1xuICAgIHRoaXMuZm9sZGVyLmFkZCh0aGlzLnBvc2l0aW9uLCAneCcpO1xuICAgIHRoaXMuZm9sZGVyLmFkZCh0aGlzLnBvc2l0aW9uLCAneScpO1xuICAgIHRoaXMuZm9sZGVyLmFkZCh0aGlzLCAncmFkaXVzJywgTGlnaHQuTUlOX1JBRElVUywgTGlnaHQuTUFYX1JBRElVUyk7XG4gICAgdGhpcy5mb2xkZXIuYWRkKHRoaXMsICdjb2xvdXInKTtcbiAgICB0aGlzLmZvbGRlci5hZGQodGhpcywgJ2ludGVuc2l0eScsIDAsIDEpO1xuXG4gICAgdGhpcy5jb2xvdXJPYmplY3QgPSBwYXJzZUNvbG9yKHRoaXMuX2NvbG91cik7XG5cbiAgICB0aGlzLmxpZ2h0Q2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgdGhpcy5saWdodENhbnZhcy53aWR0aCA9IHRoaXMubGlnaHRDYW52YXMuaGVpZ2h0ID0gdGhpcy5fcmFkaXVzICogMjtcbiAgICB0aGlzLmxpZ2h0Q29udGV4dCA9IHRoaXMubGlnaHRDYW52YXMuZ2V0Q29udGV4dCgnMmQnKSE7XG5cbiAgICB0aGlzLmdyb3VuZExpZ2h0Q2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgdGhpcy5ncm91bmRMaWdodENhbnZhcy53aWR0aCA9IHRoaXMuZ3JvdW5kTGlnaHRDYW52YXMuaGVpZ2h0ID1cbiAgICAgIHRoaXMuX3JhZGl1cyAqIDI7XG4gICAgdGhpcy5ncm91bmRMaWdodENvbnRleHQgPSB0aGlzLmdyb3VuZExpZ2h0Q2FudmFzLmdldENvbnRleHQoJzJkJykhO1xuXG4gICAgdGhpcy53YWxsTGlnaHRDYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICB0aGlzLndhbGxMaWdodENhbnZhcy53aWR0aCA9IHRoaXMud2FsbExpZ2h0Q2FudmFzLmhlaWdodCA9IHRoaXMuX3JhZGl1cyAqIDI7XG4gICAgdGhpcy53YWxsTGlnaHRDb250ZXh0ID0gdGhpcy53YWxsTGlnaHRDYW52YXMuZ2V0Q29udGV4dCgnMmQnKSE7XG4gIH1cblxuICBwdWJsaWMgZ2V0IHJhZGl1cygpIHtcbiAgICByZXR1cm4gdGhpcy5fcmFkaXVzO1xuICB9XG5cbiAgcHVibGljIHNldCByYWRpdXModmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX3JhZGl1cyA9IHZhbHVlO1xuICAgIHRoaXMuZGlydHkgPSB0cnVlO1xuICB9XG5cbiAgcHVibGljIGdldCBjb2xvdXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbG91cjtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgY29sb3VyKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9jb2xvdXIgPSB2YWx1ZTtcbiAgICB0aGlzLmNvbG91ck9iamVjdCA9IHBhcnNlQ29sb3IodmFsdWUpO1xuICAgIHRoaXMuZGlydHkgPSB0cnVlO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlbnNpdHkoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ludGVuc2l0eTtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZW5zaXR5KHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9pbnRlbnNpdHkgPSB2YWx1ZTtcbiAgICB0aGlzLmRpcnR5ID0gdHJ1ZTtcbiAgfVxuXG4gIHB1YmxpYyBzZXJpYWxpc2UoKTogYW55IHtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogdGhpcy50eXBlLFxuICAgICAgaWQ6IHRoaXMuaWQsXG4gICAgICBwb3NpdGlvbjogdGhpcy5wb3NpdGlvbixcbiAgICAgIHJhZGl1czogdGhpcy5fcmFkaXVzLFxuICAgICAgY29sb3VyOiB0aGlzLl9jb2xvdXIsXG4gICAgICBpbnRlbnNpdHk6IHRoaXMuX2ludGVuc2l0eSxcbiAgICB9O1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBkZXNlcmlhbGlzZShkYXRhOiBhbnkpOiBMaWdodCB7XG4gICAgcmV0dXJuIG5ldyBMaWdodChkYXRhKTtcbiAgfVxuXG4gIHB1YmxpYyBkZXN0cm95KCkge1xuICAgIGlmICh0aGlzLmZvbGRlcikge1xuICAgICAgR2FtZS5ndWkucmVtb3ZlRm9sZGVyKHRoaXMuZm9sZGVyKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgdXBkYXRlKGR0OiBudW1iZXIpIHtcbiAgICB0aGlzLmhvdmVyZWQgPVxuICAgICAgdmVjLmxlbih2ZWMuc3ViKElucHV0TWFuYWdlci5tb3VzZVBvc2l0aW9uLCB0aGlzLnBvc2l0aW9uKSkgPFxuICAgICAgTGlnaHQuSE9WRVJfUkFESVVTO1xuXG4gICAgaWYgKElucHV0TWFuYWdlci5tb3VzZURvd24oKSAmJiB0aGlzLnNlbGVjdGVkICYmICF0aGlzLmRyYWdnaW5nKSB7XG4gICAgICB0aGlzLmRyYWdnaW5nID0gdHJ1ZTtcbiAgICAgIHRoaXMuZHJhZ09mZnNldCA9IHZlYy5zdWIoSW5wdXRNYW5hZ2VyLm1vdXNlUG9zaXRpb24sIHRoaXMucG9zaXRpb24pO1xuICAgIH1cblxuICAgIGlmICghSW5wdXRNYW5hZ2VyLm1vdXNlRG93bigpKSB7XG4gICAgICB0aGlzLmRyYWdnaW5nID0gZmFsc2U7XG4gICAgICB0aGlzLmRyYWdPZmZzZXQgPSBudWxsO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnNlbGVjdGVkICYmIHRoaXMuZHJhZ2dpbmcgJiYgdGhpcy5kcmFnT2Zmc2V0KSB7XG4gICAgICBpZiAoSW5wdXRNYW5hZ2VyLmtleURvd24oJ0NvbnRyb2xMZWZ0JykpIHtcbiAgICAgICAgdGhpcy5yYWRpdXMgPSBjbGFtcChcbiAgICAgICAgICB2ZWMubGVuKHZlYy5zdWIoSW5wdXRNYW5hZ2VyLm1vdXNlUG9zaXRpb24sIHRoaXMucG9zaXRpb24pKSxcbiAgICAgICAgICBMaWdodC5NSU5fUkFESVVTLFxuICAgICAgICAgIExpZ2h0Lk1BWF9SQURJVVNcbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucG9zaXRpb24gPSB2ZWMuc3ViKElucHV0TWFuYWdlci5tb3VzZVBvc2l0aW9uLCB0aGlzLmRyYWdPZmZzZXQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIERlYnVnLmJvcmRlcihgTGlnaHQgJHt0aGlzLmlkfSBib3JkZXJgLCAnJywgdGhpcy5wb3NpdGlvbiwge1xuICAgICAgc2hvd0xhYmVsOiBmYWxzZSxcbiAgICAgIHNob3dWYWx1ZTogZmFsc2UsXG4gICAgICBib3JkZXJTaGFwZTogJ2NpcmNsZScsXG4gICAgICByYWRpdXM6IHRoaXMucmFkaXVzLFxuICAgICAgYm9yZGVyQ29sb3VyOlxuICAgICAgICB0aGlzLmhvdmVyZWQgfHwgdGhpcy5kcmFnZ2luZ1xuICAgICAgICAgID8gTGlnaHQuREVCVUdfSE9WRVJfQ09MT1VSXG4gICAgICAgICAgOiBMaWdodC5ERUJVR19DT0xPVVIsXG4gICAgICBib3JkZXJTdHlsZTogdGhpcy5zZWxlY3RlZCA/ICdzb2xpZCcgOiAnZGFzaGVkJyxcbiAgICB9KTtcbiAgICBEZWJ1Zy5tYXJrZXIoYExpZ2h0ICR7dGhpcy5pZH1gLCB0aGlzLmlkLCB0aGlzLnBvc2l0aW9uLCB7XG4gICAgICBzaG93TGFiZWw6IGZhbHNlLFxuICAgICAgbWFya2VyQ29sb3VyOlxuICAgICAgICB0aGlzLmhvdmVyZWQgfHwgdGhpcy5kcmFnZ2luZ1xuICAgICAgICAgID8gTGlnaHQuREVCVUdfSE9WRVJfQ09MT1VSXG4gICAgICAgICAgOiBMaWdodC5ERUJVR19DT0xPVVIsXG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgcHJlcGFyZShcbiAgICBncm91bmRTaGFkb3dSZWNlaXZlcnM6IEdyb3VuZFNoYWRvd1JlY2VpdmVyW10sXG4gICAgd2FsbFNoYWRvd1JlY2VpdmVyczogV2FsbFNoYWRvd1JlY2VpdmVyW10sXG4gICAgcmVnaW9uU2hhZG93Q2FzdGVyczogUmVnaW9uU2hhZG93Q2FzdGVyW10sXG4gICAgc3ByaXRlU2hhZG93Q2FzdGVyczogU3ByaXRlU2hhZG93Q2FzdGVyW10sXG4gICAgY2lyY2xlU2hhZG93Q2FzdGVyczogQ2lyY2xlU2hhZG93Q2FzdGVyW11cbiAgKSB7XG4gICAgLy8gSWYgdGhlIGxpZ2h0IHNldHRpbmdzIGhhdmUgY2hhbmdlZCwgd2UgbmVlZCB0byByZWRyYXcgdGhlIGJhc2UgbGlnaHRtYXBcbiAgICBpZiAodGhpcy5kaXJ0eSkge1xuICAgICAgdGhpcy5saWdodENhbnZhcy53aWR0aCA9IHRoaXMubGlnaHRDYW52YXMuaGVpZ2h0ID0gdGhpcy5fcmFkaXVzICogMjtcblxuICAgICAgdGhpcy5saWdodENvbnRleHQuc2F2ZSgpO1xuICAgICAgdGhpcy5saWdodENvbnRleHQuZmlsbFN0eWxlID0gJ2JsYWNrJztcbiAgICAgIHRoaXMubGlnaHRDb250ZXh0LmZpbGxSZWN0KFxuICAgICAgICAwLFxuICAgICAgICAwLFxuICAgICAgICB0aGlzLmxpZ2h0Q2FudmFzLndpZHRoLFxuICAgICAgICB0aGlzLmxpZ2h0Q2FudmFzLmhlaWdodFxuICAgICAgKTtcblxuICAgICAgY29uc3QgZ3JhZGllbnQgPSB0aGlzLmxpZ2h0Q29udGV4dC5jcmVhdGVSYWRpYWxHcmFkaWVudChcbiAgICAgICAgdGhpcy5fcmFkaXVzLFxuICAgICAgICB0aGlzLl9yYWRpdXMsXG4gICAgICAgIHRoaXMuX3JhZGl1cyAqIHRoaXMuX2ludGVuc2l0eSxcbiAgICAgICAgdGhpcy5fcmFkaXVzLFxuICAgICAgICB0aGlzLl9yYWRpdXMsXG4gICAgICAgIHRoaXMuX3JhZGl1c1xuICAgICAgKTtcbiAgICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcCgwLCBjb2xvdXJUb1N0cmluZyh0aGlzLmNvbG91ck9iamVjdCkpO1xuICAgICAgZ3JhZGllbnQuYWRkQ29sb3JTdG9wKDEsICdibGFjaycpO1xuXG4gICAgICB0aGlzLmxpZ2h0Q29udGV4dC5maWxsU3R5bGUgPSBncmFkaWVudDtcbiAgICAgIHRoaXMubGlnaHRDb250ZXh0LmJlZ2luUGF0aCgpO1xuICAgICAgdGhpcy5saWdodENvbnRleHQuYXJjKFxuICAgICAgICB0aGlzLl9yYWRpdXMsXG4gICAgICAgIHRoaXMuX3JhZGl1cyxcbiAgICAgICAgdGhpcy5fcmFkaXVzLFxuICAgICAgICAwLFxuICAgICAgICBNYXRoLlBJICogMlxuICAgICAgKTtcbiAgICAgIHRoaXMubGlnaHRDb250ZXh0LmZpbGwoKTtcblxuICAgICAgdGhpcy5saWdodENvbnRleHQucmVzdG9yZSgpO1xuICAgIH1cblxuICAgIC8vIFJlbmRlciBsaWdodCBvbnRvIGdyb3VuZCBsaWdodCBjYW52YXNcbiAgICB0aGlzLmdyb3VuZExpZ2h0Q2FudmFzLndpZHRoID0gdGhpcy5ncm91bmRMaWdodENhbnZhcy5oZWlnaHQgPVxuICAgICAgdGhpcy5fcmFkaXVzICogMjtcbiAgICB0aGlzLmdyb3VuZExpZ2h0Q29udGV4dC5zYXZlKCk7XG4gICAgdGhpcy5ncm91bmRMaWdodENvbnRleHQuZHJhd0ltYWdlKHRoaXMubGlnaHRDYW52YXMsIDAsIDApO1xuXG4gICAgLy8gU3VidHJhY3Qgc2hhZG93cyBmcm9tIGdyb3VuZCBsaWdodG1hcFxuICAgIHRoaXMuZ3JvdW5kTGlnaHRDb250ZXh0LmZpbGxTdHlsZSA9ICdibGFjayc7XG4gICAgdGhpcy5ncm91bmRMaWdodENvbnRleHQudHJhbnNsYXRlKFxuICAgICAgLXRoaXMucG9zaXRpb24ueCArIHRoaXMuX3JhZGl1cyxcbiAgICAgIC10aGlzLnBvc2l0aW9uLnkgKyB0aGlzLl9yYWRpdXNcbiAgICApO1xuXG4gICAgLy8gQm91bmRpbmcgYm94IGZvciB0aGlzIGxpZ2h0XG4gICAgY29uc3QgbGlnaHRSZWN0YW5nbGUgPSB7XG4gICAgICBwb3NpdGlvbjogdmVjLnN1Yih0aGlzLnBvc2l0aW9uLCB2ZWModGhpcy5fcmFkaXVzKSksXG4gICAgICBzaXplOiB2ZWModGhpcy5fcmFkaXVzICogMiksXG4gICAgfTtcblxuICAgIC8vIFNoYWRvdyBtZXRhZGF0YSBmb3IgZWFjaCBzaGFkb3dcbiAgICBjb25zdCBzaGFkb3dzOiB7XG4gICAgICAvLyBUaGUgZW50aXR5IHRoYXQgaXMgY2FzdGluZyB0aGlzIHNoYWRvd1xuICAgICAgY2FzdGVyOiBTaGFkb3dDYXN0ZXI7XG5cbiAgICAgIC8vIFRoZSBsZWZ0bW9zdCBlZGdlIG9mIHRoZSBzaGFkb3cgKHdoZW4gcG9pbnRpbmcgdXB3YXJkcylcbiAgICAgIGxlZnRFZGdlOiBMaW5lIHwgbnVsbDtcblxuICAgICAgLy8gVGhlIHJpZ2h0bW9zdCBlZGdlIG9mIHRoZSBzaGFkb3cgKHdoZW4gcG9pbnRpbmcgdXB3YXJkcylcbiAgICAgIHJpZ2h0RWRnZTogTGluZSB8IG51bGw7XG4gICAgfVtdID0gW107XG4gICAgZm9yIChjb25zdCBjYXN0ZXIgb2YgcmVnaW9uU2hhZG93Q2FzdGVycykge1xuICAgICAgY29uc3QgY2FzdGVyUmVjdGFuZ2xlID0ge1xuICAgICAgICBwb3NpdGlvbjogY2FzdGVyLnBvc2l0aW9uLFxuICAgICAgICBzaXplOiBjYXN0ZXIuc2l6ZSxcbiAgICAgIH07XG5cbiAgICAgIC8vIENoZWNrIGlmIHRoaXMgd2FsbCBpcyBpbiByYW5nZSBvZiB0aGUgbGlnaHRcbiAgICAgIGlmIChyZWN0YW5nbGVzSW50ZXJzZWN0KGxpZ2h0UmVjdGFuZ2xlLCBjYXN0ZXJSZWN0YW5nbGUpKSB7XG4gICAgICAgIGNvbnN0IHNoYWRvdyA9IHtcbiAgICAgICAgICBjYXN0ZXIsXG4gICAgICAgICAgLi4udGhpcy5wcmVwYXJlUmVnaW9uU2hhZG93KGNhc3RlclJlY3RhbmdsZSksXG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gU2F2ZSBzaGFkb3cgbWV0YWRhdGEgZm9yIHVzZSBsYXRlciB3aGVuIHJlbmRlcmluZyB3YWxsIHNoYWRvd3NcbiAgICAgICAgc2hhZG93cy5wdXNoKGV4Y2x1ZGUoc2hhZG93LCAndmVydGljZXMnKSk7XG5cbiAgICAgICAgLy8gUmVuZGVyIHRoZSBncm91bmQgc2hhZG93IHBvbHlnb24gb250byB0aGUgbGlnaHRtYXBcbiAgICAgICAgcG9seWdvbih0aGlzLmdyb3VuZExpZ2h0Q29udGV4dCwgLi4uc2hhZG93LnZlcnRpY2VzKTtcbiAgICAgICAgdGhpcy5ncm91bmRMaWdodENvbnRleHQuZmlsbCgpO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmdyb3VuZExpZ2h0Q29udGV4dC5yZXN0b3JlKCk7XG5cbiAgICAvLyBSZW5kZXIgbGlnaHQgb250byB3YWxsIGxpZ2h0IGNhbnZhc1xuICAgIHRoaXMud2FsbExpZ2h0Q2FudmFzLndpZHRoID0gdGhpcy53YWxsTGlnaHRDYW52YXMuaGVpZ2h0ID0gdGhpcy5fcmFkaXVzICogMjtcbiAgICB0aGlzLndhbGxMaWdodENvbnRleHQuc2F2ZSgpO1xuICAgIHRoaXMud2FsbExpZ2h0Q29udGV4dC5kcmF3SW1hZ2UodGhpcy5saWdodENhbnZhcywgMCwgMCk7XG5cbiAgICAvLyBTdWJ0cmFjdCBzaGFkb3dzIGZyb20gd2FsbCBsaWdodG1hcFxuICAgIHRoaXMud2FsbExpZ2h0Q29udGV4dC5maWxsU3R5bGUgPSAnYmxhY2snO1xuICAgIHRoaXMud2FsbExpZ2h0Q29udGV4dC50cmFuc2xhdGUoXG4gICAgICAtdGhpcy5wb3NpdGlvbi54ICsgdGhpcy5fcmFkaXVzLFxuICAgICAgLXRoaXMucG9zaXRpb24ueSArIHRoaXMuX3JhZGl1cyAtIExpZ2h0aW5nU3lzdGVtLldBTExfTElHSFRJTkdfWV9PRkZTRVRcbiAgICApO1xuXG4gICAgZm9yIChjb25zdCB3YWxsIG9mIHdhbGxTaGFkb3dSZWNlaXZlcnMpIHtcbiAgICAgIGNvbnN0IHdhbGxSZWN0YW5nbGUgPSB7XG4gICAgICAgIHBvc2l0aW9uOiB3YWxsLnBvc2l0aW9uLFxuICAgICAgICBzaXplOiB3YWxsLnNpemUsXG4gICAgICB9O1xuICAgICAgY29uc3Qgd2FsbEludGVydmFsID0gcmVjdGFuZ2xlVG9JbnRlcnZhbCh3YWxsUmVjdGFuZ2xlKTtcblxuICAgICAgLy8gQ2hlY2sgaWYgdGhpcyB3YWxsIHNoYWRvdyByZWNlaXZlciBpcyBpbiByYW5nZSBvZiB0aGUgbGlnaHRcbiAgICAgIGlmIChyZWN0YW5nbGVzSW50ZXJzZWN0KGxpZ2h0UmVjdGFuZ2xlLCB3YWxsUmVjdGFuZ2xlKSkge1xuICAgICAgICAvLyBUaGUgd2FsbCBpcyBvbmx5IGxpdCBieSB0aGlzIGxpZ2h0IGlmIGl0J3MgYWJvdmUgdGhlIGxpZ2h0XG4gICAgICAgIGlmICh0aGlzLnBvc2l0aW9uLnkgPCB3YWxsSW50ZXJ2YWwuYm90dG9tKSB7XG4gICAgICAgICAgdGhpcy53YWxsTGlnaHRDb250ZXh0LnNhdmUoKTtcbiAgICAgICAgICB0aGlzLndhbGxMaWdodENvbnRleHQuZ2xvYmFsQWxwaGEgPSBjbGFtcChcbiAgICAgICAgICAgIHJlbWFwKFxuICAgICAgICAgICAgICB3YWxsSW50ZXJ2YWwuYm90dG9tIC0gdGhpcy5wb3NpdGlvbi55LFxuICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICBMaWdodC5XQUxMX0xJR0hUX0NVVE9GRl9ESVNUQU5DRSxcbiAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKTtcbiAgICAgICAgICB0aGlzLndhbGxMaWdodENvbnRleHQuZmlsbFJlY3QoXG4gICAgICAgICAgICB3YWxsUmVjdGFuZ2xlLnBvc2l0aW9uLngsXG4gICAgICAgICAgICB3YWxsUmVjdGFuZ2xlLnBvc2l0aW9uLnksXG4gICAgICAgICAgICB3YWxsUmVjdGFuZ2xlLnNpemUueCxcbiAgICAgICAgICAgIHdhbGxSZWN0YW5nbGUuc2l6ZS55XG4gICAgICAgICAgKTtcbiAgICAgICAgICB0aGlzLndhbGxMaWdodENvbnRleHQucmVzdG9yZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ2hlY2sgZWFjaCBzaGFkb3cgdG8gc2VlIGlmIGl0IGZ1bGx5IG9yIHBhcnRpYWxseSBzaGFkb3dzIHRoaXMgd2FsbFxuICAgICAgICBmb3IgKGNvbnN0IHNoYWRvdyBvZiBzaGFkb3dzKSB7XG4gICAgICAgICAgY29uc3Qgc2hhZG93Q2FzdGVySW50ZXJ2YWwgPSByZWN0YW5nbGVUb0ludGVydmFsKHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBzaGFkb3cuY2FzdGVyLnBvc2l0aW9uLFxuICAgICAgICAgICAgc2l6ZTogc2hhZG93LmNhc3Rlci5zaXplLFxuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgLy8gQSBzaGFkb3cgY2FzdGVyIGRvZXNuJ3QgY2FzdCBhIHNoYWRvdyBvbnRvIGl0c2VsZlxuICAgICAgICAgIGlmICh3YWxsLmlkID09PSBzaGFkb3cuY2FzdGVyLmlkKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBDaGVjayBpZiB0aGlzIHdhbGwncyBsb3dlciBlZGdlIGlzIGJlbG93IHRoZSBzaGFkb3cgY2FzdGVyJ3NcbiAgICAgICAgICAvLyBsb3dlciBlZGdlIChpZiBpdCBpcywgdGhlbiB0aGUgc2hhZG93IHdvbid0IGNhc3Qgb250byB0aGlzIHdhbGwpXG4gICAgICAgICAgaWYgKHdhbGxJbnRlcnZhbC5ib3R0b20gPj0gc2hhZG93Q2FzdGVySW50ZXJ2YWwuYm90dG9tKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBDaGVjayBpZiB0aGlzIHNoYWRvdyBoYXMgb25lIG9yIG1vcmUgZWRnZXMgKGlmIGl0IGhhcyBubyBlZGdlcyxcbiAgICAgICAgICAvLyB0aGVuIHRoZXkncmUgcHJvYmFibHkgYm90aCBwb2ludGluZyBpbiB0aGUgd3JvbmcgZGlyZWN0aW9uIGFuZFxuICAgICAgICAgIC8vIGFzIHN1Y2ggd29uJ3QgY2FzdCBvbnRvIHRoaXMgd2FsbClcbiAgICAgICAgICBpZiAoc2hhZG93LmxlZnRFZGdlID09PSBudWxsICYmIHNoYWRvdy5yaWdodEVkZ2UgPT09IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIEZpbmQgd2hlcmUgdGhlIGxlZnQgYW5kIHJpZ2h0IGVkZ2VzIG9mIHRoZSBzaGFkb3cgaW50ZXJjZXB0IHRoZVxuICAgICAgICAgIC8vIGxvd2VyIGVkZ2Ugb2YgdGhlIHJlY2VpdmluZyB3YWxsXG4gICAgICAgICAgbGV0IGxlZnRJbnRlcmNlcHQ6IG51bWJlciB8IG51bGwgPSBudWxsO1xuICAgICAgICAgIGlmIChzaGFkb3cubGVmdEVkZ2UpIHtcbiAgICAgICAgICAgIGxlZnRJbnRlcmNlcHQgPSBsaW5lWUludGVyY2VwdChcbiAgICAgICAgICAgICAgc2hhZG93LmxlZnRFZGdlLFxuICAgICAgICAgICAgICB3YWxsSW50ZXJ2YWwuYm90dG9tXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGxldCByaWdodEludGVyY2VwdDogbnVtYmVyIHwgbnVsbCA9IG51bGw7XG4gICAgICAgICAgaWYgKHNoYWRvdy5yaWdodEVkZ2UpIHtcbiAgICAgICAgICAgIHJpZ2h0SW50ZXJjZXB0ID0gbGluZVlJbnRlcmNlcHQoXG4gICAgICAgICAgICAgIHNoYWRvdy5yaWdodEVkZ2UsXG4gICAgICAgICAgICAgIHdhbGxJbnRlcnZhbC5ib3R0b21cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gQ2hlY2sgaWYgdGhlcmUgYXJlIG5vIGludGVyY2VwdHMgKGlmIHRoZXJlIGFyZSBubyBpbnRlcmNlcHRzLFxuICAgICAgICAgIC8vIHRoaXMgbWVhbnMgdGhlIHNoYWRvdyBpcyBwb2ludGluZyBpbiB0aGUgd3JvbmcgZGlyZWN0aW9uIGFuZCBhc1xuICAgICAgICAgIC8vIHN1Y2ggd29uJ3QgY2FzdCBvbnRvIHRoaXMgd2FsbClcbiAgICAgICAgICBpZiAobGVmdEludGVyY2VwdCA9PT0gbnVsbCAmJiByaWdodEludGVyY2VwdCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gRWRnZSBjYXNlOiB3aGVuIHRoZSBzaGFkb3cgY2FzdGVyIGlzIHBhcnRpYWxseSBhYm92ZSBhbmQgYmVsb3dcbiAgICAgICAgICAvLyB0aGUgc2hhZG93IHJlY2VpdmVyIGFuZCB0aGUgc2hhZG93IGlzIHBvaW50aW5nIGF3YXkgZnJvbSB0aGVcbiAgICAgICAgICAvLyByZWNlaXZpbmcgd2FsbCwgc29tZXRpbWVzIGEgc2hhZG93IGFwcGVhcnMgZHVlIHRvIHRoZSBpbnRlcmNlcHRcbiAgICAgICAgICAvLyBiZWluZyBiZWhpbmQgdGhlIHN0YXJ0IG9mIHRoZSBzaGFkb3dcbiAgICAgICAgICBpZiAoc2hhZG93Q2FzdGVySW50ZXJ2YWwudG9wIDwgd2FsbEludGVydmFsLmJvdHRvbSkge1xuICAgICAgICAgICAgLy8gU2hhZG93IGNhc3RlciBpcyB0byB0aGUgbGVmdCBvZiBzaGFkb3cgcmVjZWl2ZXJcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgc2hhZG93Q2FzdGVySW50ZXJ2YWwucmlnaHQgPCB3YWxsSW50ZXJ2YWwubGVmdCAmJlxuICAgICAgICAgICAgICByaWdodEludGVyY2VwdCAmJlxuICAgICAgICAgICAgICBzaGFkb3cucmlnaHRFZGdlICYmXG4gICAgICAgICAgICAgIHJpZ2h0SW50ZXJjZXB0ID4gc2hhZG93LnJpZ2h0RWRnZS5zdGFydC54ICYmXG4gICAgICAgICAgICAgIHNoYWRvdy5yaWdodEVkZ2Uuc3RhcnQueCA+IHNoYWRvdy5yaWdodEVkZ2UuZW5kLnhcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gU2hhZG93IGNhc3RlciBpcyB0byB0aGUgcmlnaHQgb2Ygc2hhZG93IHJlY2VpdmVyXG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgIHNoYWRvd0Nhc3RlckludGVydmFsLmxlZnQgPiB3YWxsSW50ZXJ2YWwucmlnaHQgJiZcbiAgICAgICAgICAgICAgbGVmdEludGVyY2VwdCAmJlxuICAgICAgICAgICAgICBzaGFkb3cubGVmdEVkZ2UgJiZcbiAgICAgICAgICAgICAgbGVmdEludGVyY2VwdCA8IHNoYWRvdy5sZWZ0RWRnZS5zdGFydC54ICYmXG4gICAgICAgICAgICAgIHNoYWRvdy5sZWZ0RWRnZS5zdGFydC54IDwgc2hhZG93LmxlZnRFZGdlLmVuZC54XG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29uc3QgbWluID0gTWF0aC5tYXgoXG4gICAgICAgICAgICB3YWxsSW50ZXJ2YWwubGVmdCxcbiAgICAgICAgICAgIHNoYWRvdy5sZWZ0RWRnZVxuICAgICAgICAgICAgICA/IGxpbmVZSW50ZXJjZXB0KHNoYWRvdy5sZWZ0RWRnZSwgd2FsbEludGVydmFsLmJvdHRvbSkgPz9cbiAgICAgICAgICAgICAgICAgIC1JbmZpbml0eVxuICAgICAgICAgICAgICA6IC1JbmZpbml0eVxuICAgICAgICAgICk7XG4gICAgICAgICAgY29uc3QgbWF4ID0gTWF0aC5taW4oXG4gICAgICAgICAgICB3YWxsSW50ZXJ2YWwucmlnaHQsXG4gICAgICAgICAgICBzaGFkb3cucmlnaHRFZGdlXG4gICAgICAgICAgICAgID8gbGluZVlJbnRlcmNlcHQoc2hhZG93LnJpZ2h0RWRnZSwgd2FsbEludGVydmFsLmJvdHRvbSkgPz9cbiAgICAgICAgICAgICAgICAgIEluZmluaXR5XG4gICAgICAgICAgICAgIDogSW5maW5pdHlcbiAgICAgICAgICApO1xuXG4gICAgICAgICAgLy8gRG9uJ3QgcmVuZGVyIHRoZSBzaGFkb3cgaWYgaXQncyBnb3QgbmVnYXRpdmUgd2lkdGhcbiAgICAgICAgICBpZiAobWluID49IG1heCkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gRG9uJ3QgcmVuZGVyIHRoZSBzaGFkb3cgaWYgaXQncyBvdXRzaWRlIHRoZSB3YWxsIGJvdW5kYXJpZXNcbiAgICAgICAgICBpZiAobWluID4gd2FsbEludGVydmFsLnJpZ2h0IHx8IG1heCA8IHdhbGxJbnRlcnZhbC5sZWZ0KSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICBvdmVybGFwMWQoXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGFydDogbWluLFxuICAgICAgICAgICAgICAgIGVuZDogbWF4LFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhcnQ6IHdhbGxJbnRlcnZhbC5sZWZ0LFxuICAgICAgICAgICAgICAgIGVuZDogd2FsbEludGVydmFsLnJpZ2h0LFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICB0aGlzLndhbGxMaWdodENvbnRleHQuZmlsbFJlY3QoXG4gICAgICAgICAgICAgIG1pbixcbiAgICAgICAgICAgICAgd2FsbEludGVydmFsLnRvcCxcbiAgICAgICAgICAgICAgbWF4IC0gbWluLFxuICAgICAgICAgICAgICB3YWxsLnNpemUueVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy53YWxsTGlnaHRDb250ZXh0LnJlc3RvcmUoKTtcbiAgfVxuXG4gIHByaXZhdGUgbGluZUlzRmFjaW5nKGxpbmU6IExpbmUpOiBib29sZWFuIHtcbiAgICBjb25zdCBlZGdlID0gdmVjLm5vcih2ZWMuc3ViKGxpbmUuZW5kLCBsaW5lLnN0YXJ0KSk7XG4gICAgY29uc3QgZWRnZU5vcm1hbCA9IHZlYyhlZGdlLnksIC1lZGdlLngpO1xuICAgIGNvbnN0IGxpZ2h0Tm9ybWFsID0gdmVjLm5vcihcbiAgICAgIHZlYy5zdWIodmVjLm11bCh2ZWMuYWRkKGxpbmUuc3RhcnQsIGxpbmUuZW5kKSwgMC41KSwgdGhpcy5wb3NpdGlvbilcbiAgICApO1xuXG4gICAgcmV0dXJuIHZlYy5kb3QobGlnaHROb3JtYWwsIGVkZ2VOb3JtYWwpIDw9IDA7XG4gIH1cblxuICBwcml2YXRlIHByZXBhcmVSZWdpb25TaGFkb3coc2hhZG93Q2FzdGVyUmVjdGFuZ2xlOiBSZWN0YW5nbGUpOiB7XG4gICAgc2hhZG93Q2FzdGVySW50ZXJ2YWw6IEludGVydmFsMmQ7XG4gICAgbGVmdEVkZ2U6IExpbmUgfCBudWxsO1xuICAgIHJpZ2h0RWRnZTogTGluZSB8IG51bGw7XG4gICAgdmVydGljZXM6IFBvbHlnb25WZXJ0aWNlcztcbiAgfSB7XG4gICAgY29uc3QgbGlnaHRQb3NpdGlvbiA9IHZlYy5jcHkodGhpcy5wb3NpdGlvbik7XG4gICAgY29uc3QgbGlnaHRSYWRpdXMgPSB0aGlzLl9yYWRpdXM7XG4gICAgY29uc3Qgc2hhZG93Q2FzdGVySW50ZXJ2YWwgPSByZWN0YW5nbGVUb0ludGVydmFsKHNoYWRvd0Nhc3RlclJlY3RhbmdsZSk7XG4gICAgY29uc3Qgc2hhZG93Q2FzdGVyVmVydGljZXMgPSByZWN0YW5nbGVWZXJ0aWNlcyhzaGFkb3dDYXN0ZXJSZWN0YW5nbGUpO1xuICAgIGNvbnN0IHNoYWRvd0VkZ2VzOiBMaW5lW10gPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hhZG93Q2FzdGVyVmVydGljZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHByZXZpb3VzID0gYXQoc2hhZG93Q2FzdGVyVmVydGljZXMsIGkgLSAxKTtcbiAgICAgIGNvbnN0IGN1cnJlbnQgPSBzaGFkb3dDYXN0ZXJWZXJ0aWNlc1tpXTtcblxuICAgICAgaWYgKCF0aGlzLmxpbmVJc0ZhY2luZyh7IHN0YXJ0OiBwcmV2aW91cywgZW5kOiBjdXJyZW50IH0pKSB7XG4gICAgICAgIGNvbnN0IHZlcnRleDEgPSB2ZWMuc3ViKHByZXZpb3VzLCBsaWdodFBvc2l0aW9uKTtcbiAgICAgICAgY29uc3QgdmVydGV4MiA9IHZlYy5zdWIoY3VycmVudCwgbGlnaHRQb3NpdGlvbik7XG4gICAgICAgIHNoYWRvd0VkZ2VzLnB1c2goXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3RhcnQ6IHByZXZpb3VzLFxuICAgICAgICAgICAgZW5kOiB2ZWMuYWRkKFxuICAgICAgICAgICAgICBwcmV2aW91cyxcbiAgICAgICAgICAgICAgdmVjLm11bChcbiAgICAgICAgICAgICAgICB2ZWMubm9yKHZlcnRleDEpLFxuICAgICAgICAgICAgICAgIE1hdGgubWF4KFxuICAgICAgICAgICAgICAgICAgTGlnaHQuU0hBRE9XX0JVRkZFUixcbiAgICAgICAgICAgICAgICAgIGxpZ2h0UmFkaXVzICsgTGlnaHQuU0hBRE9XX0JVRkZFUiAtIHZlYy5sZW4odmVydGV4MSlcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICksXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzdGFydDogY3VycmVudCxcbiAgICAgICAgICAgIGVuZDogdmVjLmFkZChcbiAgICAgICAgICAgICAgY3VycmVudCxcbiAgICAgICAgICAgICAgdmVjLm11bChcbiAgICAgICAgICAgICAgICB2ZWMubm9yKHZlcnRleDIpLFxuICAgICAgICAgICAgICAgIE1hdGgubWF4KFxuICAgICAgICAgICAgICAgICAgTGlnaHQuU0hBRE9XX0JVRkZFUixcbiAgICAgICAgICAgICAgICAgIGxpZ2h0UmFkaXVzICsgTGlnaHQuU0hBRE9XX0JVRkZFUiAtIHZlYy5sZW4odmVydGV4MilcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICksXG4gICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxldCBsZWZ0RWRnZTogTGluZSB8IG51bGwgPSBudWxsO1xuICAgIGxldCByaWdodEVkZ2U6IExpbmUgfCBudWxsID0gbnVsbDtcbiAgICBjb25zdCBzaGFkb3dQb2x5Z29uOiBQb2x5Z29uVmVydGljZXMgPSBbXTtcbiAgICBzd2l0Y2ggKHNlY3RvcjJkKHRoaXMucG9zaXRpb24sIHNoYWRvd0Nhc3RlckludGVydmFsKSkge1xuICAgICAgY2FzZSBTZWN0b3IyZC5Ub3BMZWZ0OlxuICAgICAgICBpZiAoc2hhZG93RWRnZXMubGVuZ3RoICE9PSA0KSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBsZWZ0RWRnZSA9IG51bGw7XG4gICAgICAgIHJpZ2h0RWRnZSA9IG51bGw7XG4gICAgICAgIHNoYWRvd1BvbHlnb24ucHVzaChcbiAgICAgICAgICBzaGFkb3dFZGdlc1swXS5zdGFydCxcbiAgICAgICAgICBzaGFkb3dFZGdlc1swXS5lbmQsXG4gICAgICAgICAgdmVjKHNoYWRvd0VkZ2VzWzBdLmVuZC54LCBzaGFkb3dFZGdlc1szXS5lbmQueSksXG4gICAgICAgICAgc2hhZG93RWRnZXNbM10uZW5kLFxuICAgICAgICAgIHNoYWRvd0VkZ2VzWzNdLnN0YXJ0LFxuICAgICAgICAgIHNoYWRvd0VkZ2VzWzJdLnN0YXJ0XG4gICAgICAgICk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIFNlY3RvcjJkLlRvcDpcbiAgICAgICAgaWYgKHNoYWRvd0VkZ2VzLmxlbmd0aCAhPT0gNikge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgbGVmdEVkZ2UgPSBudWxsO1xuICAgICAgICByaWdodEVkZ2UgPSBudWxsO1xuICAgICAgICBzaGFkb3dQb2x5Z29uLnB1c2goXG4gICAgICAgICAgc2hhZG93RWRnZXNbMl0uc3RhcnQsXG4gICAgICAgICAgc2hhZG93RWRnZXNbMl0uZW5kLFxuICAgICAgICAgIChjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpID0+IHtcbiAgICAgICAgICAgIGNvbnRleHQuYXJjKFxuICAgICAgICAgICAgICBsaWdodFBvc2l0aW9uLngsXG4gICAgICAgICAgICAgIGxpZ2h0UG9zaXRpb24ueSxcbiAgICAgICAgICAgICAgbGlnaHRSYWRpdXMgKyBMaWdodC5TSEFET1dfQlVGRkVSLFxuICAgICAgICAgICAgICB2ZWMucmFkKHZlYy5zdWIoc2hhZG93RWRnZXNbMl0uZW5kLCBzaGFkb3dFZGdlc1syXS5zdGFydCkpLFxuICAgICAgICAgICAgICB2ZWMucmFkKHZlYy5zdWIoc2hhZG93RWRnZXNbMV0uZW5kLCBzaGFkb3dFZGdlc1sxXS5zdGFydCkpLFxuICAgICAgICAgICAgICBmYWxzZVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIHNoYWRvd0VkZ2VzWzFdLnN0YXJ0LFxuICAgICAgICAgIHNoYWRvd0VkZ2VzWzVdLnN0YXJ0LFxuICAgICAgICAgIHNoYWRvd0VkZ2VzWzRdLnN0YXJ0XG4gICAgICAgICk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIFNlY3RvcjJkLlRvcFJpZ2h0OlxuICAgICAgICBpZiAoc2hhZG93RWRnZXMubGVuZ3RoICE9PSA0KSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBsZWZ0RWRnZSA9IG51bGw7XG4gICAgICAgIHJpZ2h0RWRnZSA9IG51bGw7XG4gICAgICAgIHNoYWRvd1BvbHlnb24ucHVzaChcbiAgICAgICAgICBzaGFkb3dFZGdlc1syXS5zdGFydCxcbiAgICAgICAgICBzaGFkb3dFZGdlc1syXS5lbmQsXG4gICAgICAgICAgdmVjKHNoYWRvd0VkZ2VzWzFdLmVuZC54LCBzaGFkb3dFZGdlc1syXS5lbmQueSksXG4gICAgICAgICAgc2hhZG93RWRnZXNbMV0uZW5kLFxuICAgICAgICAgIHNoYWRvd0VkZ2VzWzFdLnN0YXJ0LFxuICAgICAgICAgIHNoYWRvd0VkZ2VzWzNdLnN0YXJ0XG4gICAgICAgICk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIFNlY3RvcjJkLkxlZnQ6XG4gICAgICAgIGlmIChzaGFkb3dFZGdlcy5sZW5ndGggIT09IDYpIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGxlZnRFZGdlID0gc2hhZG93RWRnZXNbMF07XG4gICAgICAgIHJpZ2h0RWRnZSA9IG51bGw7XG4gICAgICAgIHNoYWRvd1BvbHlnb24ucHVzaChcbiAgICAgICAgICBzaGFkb3dFZGdlc1swXS5zdGFydCxcbiAgICAgICAgICBzaGFkb3dFZGdlc1swXS5lbmQsXG4gICAgICAgICAgKGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkgPT4ge1xuICAgICAgICAgICAgY29udGV4dC5hcmMoXG4gICAgICAgICAgICAgIGxpZ2h0UG9zaXRpb24ueCxcbiAgICAgICAgICAgICAgbGlnaHRQb3NpdGlvbi55LFxuICAgICAgICAgICAgICBsaWdodFJhZGl1cyArIExpZ2h0LlNIQURPV19CVUZGRVIsXG4gICAgICAgICAgICAgIHZlYy5yYWQodmVjLnN1YihzaGFkb3dFZGdlc1swXS5lbmQsIHNoYWRvd0VkZ2VzWzBdLnN0YXJ0KSksXG4gICAgICAgICAgICAgIHZlYy5yYWQodmVjLnN1YihzaGFkb3dFZGdlc1s1XS5lbmQsIHNoYWRvd0VkZ2VzWzVdLnN0YXJ0KSksXG4gICAgICAgICAgICAgIGZhbHNlXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgc2hhZG93RWRnZXNbNV0uc3RhcnQsXG4gICAgICAgICAgc2hhZG93RWRnZXNbNF0uc3RhcnQsXG4gICAgICAgICAgc2hhZG93RWRnZXNbMl0uc3RhcnRcbiAgICAgICAgKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgU2VjdG9yMmQuSW5zaWRlOlxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBTZWN0b3IyZC5SaWdodDpcbiAgICAgICAgaWYgKHNoYWRvd0VkZ2VzLmxlbmd0aCAhPT0gNikge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgbGVmdEVkZ2UgPSBudWxsO1xuICAgICAgICByaWdodEVkZ2UgPSBzaGFkb3dFZGdlc1szXTtcbiAgICAgICAgc2hhZG93UG9seWdvbi5wdXNoKFxuICAgICAgICAgIHNoYWRvd0VkZ2VzWzRdLnN0YXJ0LFxuICAgICAgICAgIHNoYWRvd0VkZ2VzWzRdLmVuZCxcbiAgICAgICAgICAoY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSA9PiB7XG4gICAgICAgICAgICBjb250ZXh0LmFyYyhcbiAgICAgICAgICAgICAgbGlnaHRQb3NpdGlvbi54LFxuICAgICAgICAgICAgICBsaWdodFBvc2l0aW9uLnksXG4gICAgICAgICAgICAgIGxpZ2h0UmFkaXVzICsgTGlnaHQuU0hBRE9XX0JVRkZFUixcbiAgICAgICAgICAgICAgdmVjLnJhZCh2ZWMuc3ViKHNoYWRvd0VkZ2VzWzRdLmVuZCwgc2hhZG93RWRnZXNbNF0uc3RhcnQpKSxcbiAgICAgICAgICAgICAgdmVjLnJhZCh2ZWMuc3ViKHNoYWRvd0VkZ2VzWzNdLmVuZCwgc2hhZG93RWRnZXNbM10uc3RhcnQpKSxcbiAgICAgICAgICAgICAgZmFsc2VcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBzaGFkb3dFZGdlc1szXS5zdGFydCxcbiAgICAgICAgICBzaGFkb3dFZGdlc1syXS5zdGFydCxcbiAgICAgICAgICBzaGFkb3dFZGdlc1s1XS5zdGFydFxuICAgICAgICApO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBTZWN0b3IyZC5Cb3R0b21MZWZ0OlxuICAgICAgICBpZiAoc2hhZG93RWRnZXMubGVuZ3RoICE9PSA0KSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBsZWZ0RWRnZSA9IHNoYWRvd0VkZ2VzWzBdO1xuICAgICAgICByaWdodEVkZ2UgPSBzaGFkb3dFZGdlc1szXTtcbiAgICAgICAgc2hhZG93UG9seWdvbi5wdXNoKFxuICAgICAgICAgIHNoYWRvd0VkZ2VzWzBdLnN0YXJ0LFxuICAgICAgICAgIHNoYWRvd0VkZ2VzWzBdLmVuZCxcbiAgICAgICAgICB2ZWMoc2hhZG93RWRnZXNbM10uZW5kLngsIHNoYWRvd0VkZ2VzWzBdLmVuZC55KSxcbiAgICAgICAgICBzaGFkb3dFZGdlc1szXS5lbmQsXG4gICAgICAgICAgc2hhZG93RWRnZXNbM10uc3RhcnQsXG4gICAgICAgICAgc2hhZG93RWRnZXNbMl0uc3RhcnRcbiAgICAgICAgKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgU2VjdG9yMmQuQm90dG9tOlxuICAgICAgICBpZiAoc2hhZG93RWRnZXMubGVuZ3RoICE9PSA2KSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBsZWZ0RWRnZSA9IHNoYWRvd0VkZ2VzWzBdO1xuICAgICAgICByaWdodEVkZ2UgPSBzaGFkb3dFZGdlc1s1XTtcbiAgICAgICAgc2hhZG93UG9seWdvbi5wdXNoKFxuICAgICAgICAgIHNoYWRvd0VkZ2VzWzBdLnN0YXJ0LFxuICAgICAgICAgIHNoYWRvd0VkZ2VzWzBdLmVuZCxcbiAgICAgICAgICAoY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSA9PiB7XG4gICAgICAgICAgICBjb250ZXh0LmFyYyhcbiAgICAgICAgICAgICAgbGlnaHRQb3NpdGlvbi54LFxuICAgICAgICAgICAgICBsaWdodFBvc2l0aW9uLnksXG4gICAgICAgICAgICAgIGxpZ2h0UmFkaXVzICsgTGlnaHQuU0hBRE9XX0JVRkZFUixcbiAgICAgICAgICAgICAgdmVjLnJhZCh2ZWMuc3ViKHNoYWRvd0VkZ2VzWzBdLmVuZCwgc2hhZG93RWRnZXNbMF0uc3RhcnQpKSxcbiAgICAgICAgICAgICAgdmVjLnJhZCh2ZWMuc3ViKHNoYWRvd0VkZ2VzWzVdLmVuZCwgc2hhZG93RWRnZXNbNV0uc3RhcnQpKSxcbiAgICAgICAgICAgICAgZmFsc2VcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBzaGFkb3dFZGdlc1s1XS5zdGFydCxcbiAgICAgICAgICBzaGFkb3dFZGdlc1s0XS5zdGFydCxcbiAgICAgICAgICBzaGFkb3dFZGdlc1syXS5zdGFydFxuICAgICAgICApO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBTZWN0b3IyZC5Cb3R0b21SaWdodDpcbiAgICAgICAgaWYgKHNoYWRvd0VkZ2VzLmxlbmd0aCAhPT0gNCkge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgbGVmdEVkZ2UgPSBzaGFkb3dFZGdlc1swXTtcbiAgICAgICAgcmlnaHRFZGdlID0gc2hhZG93RWRnZXNbM107XG4gICAgICAgIHNoYWRvd1BvbHlnb24ucHVzaChcbiAgICAgICAgICBzaGFkb3dFZGdlc1swXS5zdGFydCxcbiAgICAgICAgICBzaGFkb3dFZGdlc1swXS5lbmQsXG4gICAgICAgICAgdmVjKHNoYWRvd0VkZ2VzWzBdLmVuZC54LCBzaGFkb3dFZGdlc1szXS5lbmQueSksXG4gICAgICAgICAgc2hhZG93RWRnZXNbM10uZW5kLFxuICAgICAgICAgIHNoYWRvd0VkZ2VzWzNdLnN0YXJ0LFxuICAgICAgICAgIHNoYWRvd0VkZ2VzWzJdLnN0YXJ0XG4gICAgICAgICk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBzaGFkb3dDYXN0ZXJJbnRlcnZhbCxcbiAgICAgIGxlZnRFZGdlLFxuICAgICAgcmlnaHRFZGdlLFxuICAgICAgdmVydGljZXM6IHNoYWRvd1BvbHlnb24sXG4gICAgfTtcbiAgfVxufVxuIiwiaW1wb3J0IERlYnVnIGZyb20gJ0BiYXNlbWVudHVuaXZlcnNlL2RlYnVnJztcbmltcG9ydCBJbnB1dE1hbmFnZXIgZnJvbSAnQGJhc2VtZW50dW5pdmVyc2UvaW5wdXQtbWFuYWdlcic7XG5pbXBvcnQgeyB2ZWMgfSBmcm9tICdAYmFzZW1lbnR1bml2ZXJzZS92ZWMnO1xuaW1wb3J0IHsgQ2lyY2xlU2hhZG93Q2FzdGVyIH0gZnJvbSAnLi9DaXJjbGVTaGFkb3dDYXN0ZXInO1xuaW1wb3J0IEdhbWUgZnJvbSAnLi9HYW1lJztcbmltcG9ydCB7IEdyb3VuZFNoYWRvd1JlY2VpdmVyIH0gZnJvbSAnLi9Hcm91bmRTaGFkb3dSZWNlaXZlcic7XG5pbXBvcnQgeyBMaWdodCB9IGZyb20gJy4vTGlnaHQnO1xuaW1wb3J0IHsgTGlnaHRpbmdTeXN0ZW0gfSBmcm9tICcuL0xpZ2h0aW5nU3lzdGVtJztcbmltcG9ydCB7IFJlZ2lvblNoYWRvd0Nhc3RlciB9IGZyb20gJy4vUmVnaW9uU2hhZG93Q2FzdGVyJztcbmltcG9ydCB7IFNwcml0ZVNoYWRvd0Nhc3RlciB9IGZyb20gJy4vU3ByaXRlU2hhZG93Q2FzdGVyJztcbmltcG9ydCB7IFdhbGxTaGFkb3dSZWNlaXZlciB9IGZyb20gJy4vV2FsbFNoYWRvd1JlY2VpdmVyJztcblxuZXhwb3J0IGNsYXNzIExpZ2h0aW5nU2NlbmUge1xuICBwdWJsaWMgbGlnaHRpbmdTeXN0ZW06IExpZ2h0aW5nU3lzdGVtO1xuXG4gIHByaXZhdGUgZ3JvdW5kU2hhZG93UmVjZWl2ZXJzOiBHcm91bmRTaGFkb3dSZWNlaXZlcltdID0gW107XG4gIHByaXZhdGUgd2FsbFNoYWRvd1JlY2VpdmVyczogV2FsbFNoYWRvd1JlY2VpdmVyW10gPSBbXTtcbiAgcHJpdmF0ZSByZWdpb25TaGFkb3dDYXN0ZXJzOiBSZWdpb25TaGFkb3dDYXN0ZXJbXSA9IFtdO1xuICBwcml2YXRlIHNwcml0ZVNoYWRvd0Nhc3RlcnM6IFNwcml0ZVNoYWRvd0Nhc3RlcltdID0gW107XG4gIHByaXZhdGUgY2lyY2xlU2hhZG93Q2FzdGVyczogQ2lyY2xlU2hhZG93Q2FzdGVyW10gPSBbXTtcblxuICBwcml2YXRlIHNlbGVjdGVkOlxuICAgIHwgR3JvdW5kU2hhZG93UmVjZWl2ZXJcbiAgICB8IFdhbGxTaGFkb3dSZWNlaXZlclxuICAgIHwgUmVnaW9uU2hhZG93Q2FzdGVyXG4gICAgfCBTcHJpdGVTaGFkb3dDYXN0ZXJcbiAgICB8IENpcmNsZVNoYWRvd0Nhc3RlclxuICAgIHwgTGlnaHRcbiAgICB8IG51bGwgPSBudWxsO1xuXG4gIHByaXZhdGUgbW9kZTpcbiAgICB8ICdub2xpZ2h0aW5nJ1xuICAgIHwgJ25vcm1hbCdcbiAgICB8ICdncm91bmRtYXNrJ1xuICAgIHwgJ3dhbGxtYXNrJ1xuICAgIHwgJ2dyb3VuZG1hc2tlZGxpZ2h0bWFwJ1xuICAgIHwgJ3dhbGxtYXNrZWRsaWdodG1hcCdcbiAgICB8ICdsaWdodG1hcCcgPSAnbm9ybWFsJztcblxuICBwdWJsaWMgaW5pdGlhbGlzZSgpIHtcbiAgICB0aGlzLmxpZ2h0aW5nU3lzdGVtID0gbmV3IExpZ2h0aW5nU3lzdGVtKCk7XG4gICAgdGhpcy5saWdodGluZ1N5c3RlbS5pbml0aWFsaXNlKCk7XG5cbiAgICBHYW1lLmd1aS5hZGQoeyBjbGljazogKCkgPT4gdGhpcy5zYXZlKCkgfSwgJ2NsaWNrJykubmFtZSgnU2F2ZScpO1xuICAgIEdhbWUuZ3VpLmFkZCh7IGNsaWNrOiAoKSA9PiB0aGlzLmxvYWQoKSB9LCAnY2xpY2snKS5uYW1lKCdMb2FkJyk7XG4gICAgR2FtZS5ndWlcbiAgICAgIC5hZGQoeyBjbGljazogKCkgPT4gKHRoaXMubW9kZSA9ICdub2xpZ2h0aW5nJykgfSwgJ2NsaWNrJylcbiAgICAgIC5uYW1lKCdObyBsaWdodGluZycpO1xuICAgIEdhbWUuZ3VpXG4gICAgICAuYWRkKHsgY2xpY2s6ICgpID0+ICh0aGlzLm1vZGUgPSAnbm9ybWFsJykgfSwgJ2NsaWNrJylcbiAgICAgIC5uYW1lKCdOb3JtYWwnKTtcbiAgICBHYW1lLmd1aVxuICAgICAgLmFkZCh7IGNsaWNrOiAoKSA9PiAodGhpcy5tb2RlID0gJ2dyb3VuZG1hc2snKSB9LCAnY2xpY2snKVxuICAgICAgLm5hbWUoJ0dyb3VuZCBtYXNrJyk7XG4gICAgR2FtZS5ndWlcbiAgICAgIC5hZGQoeyBjbGljazogKCkgPT4gKHRoaXMubW9kZSA9ICd3YWxsbWFzaycpIH0sICdjbGljaycpXG4gICAgICAubmFtZSgnV2FsbCBtYXNrJyk7XG4gICAgR2FtZS5ndWlcbiAgICAgIC5hZGQoeyBjbGljazogKCkgPT4gKHRoaXMubW9kZSA9ICdncm91bmRtYXNrZWRsaWdodG1hcCcpIH0sICdjbGljaycpXG4gICAgICAubmFtZSgnR3JvdW5kLW1hc2tlZCBsaWdodG1hcCcpO1xuICAgIEdhbWUuZ3VpXG4gICAgICAuYWRkKHsgY2xpY2s6ICgpID0+ICh0aGlzLm1vZGUgPSAnd2FsbG1hc2tlZGxpZ2h0bWFwJykgfSwgJ2NsaWNrJylcbiAgICAgIC5uYW1lKCdXYWxsLW1hc2tlZCBsaWdodG1hcCcpO1xuICAgIEdhbWUuZ3VpXG4gICAgICAuYWRkKHsgY2xpY2s6ICgpID0+ICh0aGlzLm1vZGUgPSAnbGlnaHRtYXAnKSB9LCAnY2xpY2snKVxuICAgICAgLm5hbWUoJ0xpZ2h0IG1hcCcpO1xuICAgIEdhbWUuZ3VpLmFkZCh0aGlzLmxpZ2h0aW5nU3lzdGVtLCAnYW1iaWVudExpZ2h0Q29sb3VyJykubGlzdGVuKCk7XG4gIH1cblxuICBwcml2YXRlIHNhdmUoKSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXG4gICAgICAnbGlnaHRpbmdfZGVtb190ZXN0X3N0YXRlJyxcbiAgICAgIEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgYW1iaWVudExpZ2h0Q29sb3VyOiB0aGlzLmxpZ2h0aW5nU3lzdGVtLmFtYmllbnRMaWdodENvbG91cixcbiAgICAgICAgZ3JvdW5kU2hhZG93UmVjZWl2ZXJzOiB0aGlzLmdyb3VuZFNoYWRvd1JlY2VpdmVycy5tYXAoZyA9PlxuICAgICAgICAgIGcuc2VyaWFsaXNlKClcbiAgICAgICAgKSxcbiAgICAgICAgd2FsbFNoYWRvd1JlY2VpdmVyczogdGhpcy53YWxsU2hhZG93UmVjZWl2ZXJzLm1hcCh3ID0+IHcuc2VyaWFsaXNlKCkpLFxuICAgICAgICByZWdpb25TaGFkb3dDYXN0ZXJzOiB0aGlzLnJlZ2lvblNoYWRvd0Nhc3RlcnMubWFwKHIgPT4gci5zZXJpYWxpc2UoKSksXG4gICAgICAgIHNwcml0ZVNoYWRvd0Nhc3RlcnM6IHRoaXMuc3ByaXRlU2hhZG93Q2FzdGVycy5tYXAocyA9PiBzLnNlcmlhbGlzZSgpKSxcbiAgICAgICAgY2lyY2xlU2hhZG93Q2FzdGVyczogdGhpcy5jaXJjbGVTaGFkb3dDYXN0ZXJzLm1hcChjID0+IGMuc2VyaWFsaXNlKCkpLFxuICAgICAgICBsaWdodHM6IHRoaXMubGlnaHRpbmdTeXN0ZW0ubGlnaHRzLm1hcChsID0+IGwuc2VyaWFsaXNlKCkpLFxuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBsb2FkKCkge1xuICAgIGNvbnN0IHN0YXRlRGF0YSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdsaWdodGluZ19kZW1vX3Rlc3Rfc3RhdGUnKTtcbiAgICBpZiAoIXN0YXRlRGF0YSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCBzdGF0ZTtcbiAgICB0cnkge1xuICAgICAgc3RhdGUgPSBKU09OLnBhcnNlKHN0YXRlRGF0YSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5lcnJvcignU3RhdGUgZGF0YSBpcyBpbnZhbGlkJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5saWdodGluZ1N5c3RlbS5hbWJpZW50TGlnaHRDb2xvdXIgPSBzdGF0ZS5hbWJpZW50TGlnaHRDb2xvdXI7XG5cbiAgICB0aGlzLmdyb3VuZFNoYWRvd1JlY2VpdmVycy5mb3JFYWNoKGcgPT4gZy5kZXN0cm95KCkpO1xuICAgIHRoaXMuZ3JvdW5kU2hhZG93UmVjZWl2ZXJzID0gc3RhdGUuZ3JvdW5kU2hhZG93UmVjZWl2ZXJzLm1hcCgoZzogYW55KSA9PlxuICAgICAgR3JvdW5kU2hhZG93UmVjZWl2ZXIuZGVzZXJpYWxpc2UoZylcbiAgICApO1xuXG4gICAgdGhpcy53YWxsU2hhZG93UmVjZWl2ZXJzLmZvckVhY2godyA9PiB3LmRlc3Ryb3koKSk7XG4gICAgdGhpcy53YWxsU2hhZG93UmVjZWl2ZXJzID0gc3RhdGUud2FsbFNoYWRvd1JlY2VpdmVycy5tYXAoKHc6IGFueSkgPT5cbiAgICAgIFdhbGxTaGFkb3dSZWNlaXZlci5kZXNlcmlhbGlzZSh3KVxuICAgICk7XG5cbiAgICB0aGlzLnJlZ2lvblNoYWRvd0Nhc3RlcnMuZm9yRWFjaChyID0+IHIuZGVzdHJveSgpKTtcbiAgICB0aGlzLnJlZ2lvblNoYWRvd0Nhc3RlcnMgPSBzdGF0ZS5yZWdpb25TaGFkb3dDYXN0ZXJzLm1hcCgocjogYW55KSA9PlxuICAgICAgUmVnaW9uU2hhZG93Q2FzdGVyLmRlc2VyaWFsaXNlKHIpXG4gICAgKTtcblxuICAgIHRoaXMuc3ByaXRlU2hhZG93Q2FzdGVycy5mb3JFYWNoKHMgPT4gcy5kZXN0cm95KCkpO1xuICAgIHRoaXMuc3ByaXRlU2hhZG93Q2FzdGVycyA9IHN0YXRlLnNwcml0ZVNoYWRvd0Nhc3RlcnMubWFwKChzOiBhbnkpID0+XG4gICAgICBTcHJpdGVTaGFkb3dDYXN0ZXIuZGVzZXJpYWxpc2UocylcbiAgICApO1xuXG4gICAgdGhpcy5jaXJjbGVTaGFkb3dDYXN0ZXJzLmZvckVhY2goYyA9PiBjLmRlc3Ryb3koKSk7XG4gICAgdGhpcy5jaXJjbGVTaGFkb3dDYXN0ZXJzID0gc3RhdGUuY2lyY2xlU2hhZG93Q2FzdGVycy5tYXAoKGM6IGFueSkgPT5cbiAgICAgIENpcmNsZVNoYWRvd0Nhc3Rlci5kZXNlcmlhbGlzZShjKVxuICAgICk7XG5cbiAgICB0aGlzLmxpZ2h0aW5nU3lzdGVtLmxpZ2h0cy5mb3JFYWNoKGxpZ2h0ID0+IGxpZ2h0LmRlc3Ryb3koKSk7XG4gICAgdGhpcy5saWdodGluZ1N5c3RlbS5saWdodHMgPSBzdGF0ZS5saWdodHMubWFwKChsaWdodDogYW55KSA9PlxuICAgICAgTGlnaHQuZGVzZXJpYWxpc2UobGlnaHQpXG4gICAgKTtcbiAgfVxuXG4gIHB1YmxpYyB1cGRhdGUoZHQ6IG51bWJlcikge1xuICAgIERlYnVnLnZhbHVlKCdQcmVzcyBTSElGVC1MIHRvIGNyZWF0ZSBhIG5ldyBMaWdodCcsICcnKTtcbiAgICBEZWJ1Zy52YWx1ZSgnUHJlc3MgU0hJRlQtRyB0byBjcmVhdGUgYSBuZXcgR3JvdW5kU2hhZG93UmVjZWl2ZXInLCAnJyk7XG4gICAgRGVidWcudmFsdWUoJ1ByZXNzIFNISUZULVcgdG8gY3JlYXRlIGEgbmV3IFdhbGxTaGFkb3dSZWNlaXZlcicsICcnKTtcbiAgICBEZWJ1Zy52YWx1ZSgnUHJlc3MgU0hJRlQtUiB0byBjcmVhdGUgYSBuZXcgUmVnaW9uU2hhZG93Q2FzdGVyJywgJycpO1xuICAgIERlYnVnLnZhbHVlKCdQcmVzcyBTSElGVC1TIHRvIGNyZWF0ZSBhIG5ldyBTcHJpdGVTaGFkb3dDYXN0ZXInLCAnJyk7XG4gICAgRGVidWcudmFsdWUoJ1ByZXNzIFNISUZULUMgdG8gY3JlYXRlIGEgbmV3IENpcmNsZVNoYWRvd0Nhc3RlcicsICcnKTtcbiAgICBEZWJ1Zy52YWx1ZSgnQ1RSTC1kcmFnIHRvIHJlc2l6ZScsICcnKTtcblxuICAgIHRoaXMuZ3JvdW5kU2hhZG93UmVjZWl2ZXJzLmZvckVhY2goZ3JvdW5kID0+IGdyb3VuZC51cGRhdGUoZHQpKTtcbiAgICB0aGlzLndhbGxTaGFkb3dSZWNlaXZlcnMuZm9yRWFjaCh3YWxsID0+IHdhbGwudXBkYXRlKGR0KSk7XG5cbiAgICB0aGlzLnJlZ2lvblNoYWRvd0Nhc3RlcnMuZm9yRWFjaChyZWdpb24gPT4gcmVnaW9uLnVwZGF0ZShkdCkpO1xuICAgIHRoaXMuc3ByaXRlU2hhZG93Q2FzdGVycy5mb3JFYWNoKHNwcml0ZSA9PiBzcHJpdGUudXBkYXRlKGR0KSk7XG4gICAgdGhpcy5jaXJjbGVTaGFkb3dDYXN0ZXJzLmZvckVhY2goY2lyY2xlID0+IGNpcmNsZS51cGRhdGUoZHQpKTtcblxuICAgIHRoaXMubGlnaHRpbmdTeXN0ZW0udXBkYXRlKGR0KTtcblxuICAgIC8vIHktc29ydGluZ1xuICAgIHRoaXMuZ3JvdW5kU2hhZG93UmVjZWl2ZXJzID0gdGhpcy5ncm91bmRTaGFkb3dSZWNlaXZlcnMuc29ydChcbiAgICAgIChhLCBiKSA9PiBhLnBvc2l0aW9uLnkgKyBhLnNpemUueSAtIChiLnBvc2l0aW9uLnkgKyBiLnNpemUueSlcbiAgICApO1xuICAgIHRoaXMud2FsbFNoYWRvd1JlY2VpdmVycyA9IHRoaXMud2FsbFNoYWRvd1JlY2VpdmVycy5zb3J0KFxuICAgICAgKGEsIGIpID0+IGEucG9zaXRpb24ueSArIGEuc2l6ZS55IC0gKGIucG9zaXRpb24ueSArIGIuc2l6ZS55KVxuICAgICk7XG5cbiAgICAvLyBIYW5kbGUgaXRlbSBzZWxlY3RcbiAgICBpZiAoSW5wdXRNYW5hZ2VyLm1vdXNlUHJlc3NlZCgpKSB7XG4gICAgICBsZXQgc2VsZWN0ZWRHcm91bmRTaGFkb3dSZWNlaXZlciA9XG4gICAgICAgIHRoaXMuZ3JvdW5kU2hhZG93UmVjZWl2ZXJzLmZpbmQoZyA9PiBnLmhvdmVyZWQpIHx8IG51bGw7XG4gICAgICBsZXQgc2VsZWN0ZWRXYWxsU2hhZG93UmVjZWl2ZXIgPVxuICAgICAgICB0aGlzLndhbGxTaGFkb3dSZWNlaXZlcnMuZmluZCh3ID0+IHcuaG92ZXJlZCkgfHwgbnVsbDtcbiAgICAgIGxldCBzZWxlY3RlZFJlZ2lvblNoYWRvd0Nhc3RlciA9XG4gICAgICAgIHRoaXMucmVnaW9uU2hhZG93Q2FzdGVycy5maW5kKHIgPT4gci5ob3ZlcmVkKSB8fCBudWxsO1xuICAgICAgbGV0IHNlbGVjdGVkU3ByaXRlU2hhZG93Q2FzdGVyID1cbiAgICAgICAgdGhpcy5zcHJpdGVTaGFkb3dDYXN0ZXJzLmZpbmQocyA9PiBzLmhvdmVyZWQpIHx8IG51bGw7XG4gICAgICBsZXQgc2VsZWN0ZWRDaXJjbGVTaGFkb3dDYXN0ZXIgPVxuICAgICAgICB0aGlzLmNpcmNsZVNoYWRvd0Nhc3RlcnMuZmluZChjID0+IGMuaG92ZXJlZCkgfHwgbnVsbDtcbiAgICAgIGxldCBzZWxlY3RlZExpZ2h0ID1cbiAgICAgICAgdGhpcy5saWdodGluZ1N5c3RlbS5saWdodHMuZmluZChsaWdodCA9PiBsaWdodC5ob3ZlcmVkKSB8fCBudWxsO1xuXG4gICAgICB0aGlzLnNlbGVjdGVkID1cbiAgICAgICAgc2VsZWN0ZWRMaWdodCB8fFxuICAgICAgICBzZWxlY3RlZFdhbGxTaGFkb3dSZWNlaXZlciB8fFxuICAgICAgICBzZWxlY3RlZFJlZ2lvblNoYWRvd0Nhc3RlciB8fFxuICAgICAgICBzZWxlY3RlZFNwcml0ZVNoYWRvd0Nhc3RlciB8fFxuICAgICAgICBzZWxlY3RlZENpcmNsZVNoYWRvd0Nhc3RlciB8fFxuICAgICAgICBzZWxlY3RlZEdyb3VuZFNoYWRvd1JlY2VpdmVyIHx8XG4gICAgICAgIG51bGw7XG5cbiAgICAgIHRoaXMuZ3JvdW5kU2hhZG93UmVjZWl2ZXJzLmZvckVhY2goZyA9PiB7XG4gICAgICAgIGcuc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy53YWxsU2hhZG93UmVjZWl2ZXJzLmZvckVhY2godyA9PiB7XG4gICAgICAgIHcuc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5yZWdpb25TaGFkb3dDYXN0ZXJzLmZvckVhY2gociA9PiB7XG4gICAgICAgIHIuc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5zcHJpdGVTaGFkb3dDYXN0ZXJzLmZvckVhY2gocyA9PiB7XG4gICAgICAgIHMuc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5jaXJjbGVTaGFkb3dDYXN0ZXJzLmZvckVhY2goYyA9PiB7XG4gICAgICAgIGMuc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5saWdodGluZ1N5c3RlbS5saWdodHMuZm9yRWFjaChsaWdodCA9PiB7XG4gICAgICAgIGxpZ2h0LnNlbGVjdGVkID0gZmFsc2U7XG4gICAgICB9KTtcblxuICAgICAgaWYgKHRoaXMuc2VsZWN0ZWQpIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZC5zZWxlY3RlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gSGFuZGxlIGl0ZW0gY3JlYXRlXG4gICAgaWYgKElucHV0TWFuYWdlci5rZXlEb3duKCdTaGlmdExlZnQnKSkge1xuICAgICAgLy8gQ3JlYXRlIEdyb3VuZFNoYWRvd1JlY2VpdmVyXG4gICAgICBpZiAoSW5wdXRNYW5hZ2VyLmtleVByZXNzZWQoJ0tleUcnKSkge1xuICAgICAgICB0aGlzLmdyb3VuZFNoYWRvd1JlY2VpdmVycy5wdXNoKFxuICAgICAgICAgIG5ldyBHcm91bmRTaGFkb3dSZWNlaXZlcih7XG4gICAgICAgICAgICBwb3NpdGlvbjogdmVjLmNweShJbnB1dE1hbmFnZXIubW91c2VQb3NpdGlvbiksXG4gICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgLy8gQ3JlYXRlIFdhbGxTaGFkb3dSZWNlaXZlclxuICAgICAgaWYgKElucHV0TWFuYWdlci5rZXlQcmVzc2VkKCdLZXlXJykpIHtcbiAgICAgICAgdGhpcy53YWxsU2hhZG93UmVjZWl2ZXJzLnB1c2goXG4gICAgICAgICAgbmV3IFdhbGxTaGFkb3dSZWNlaXZlcih7XG4gICAgICAgICAgICBwb3NpdGlvbjogdmVjLmNweShJbnB1dE1hbmFnZXIubW91c2VQb3NpdGlvbiksXG4gICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgLy8gQ3JlYXRlIFdhbGxTaGFkb3dSZWNlaXZlclxuICAgICAgaWYgKElucHV0TWFuYWdlci5rZXlQcmVzc2VkKCdLZXlSJykpIHtcbiAgICAgICAgdGhpcy5yZWdpb25TaGFkb3dDYXN0ZXJzLnB1c2goXG4gICAgICAgICAgbmV3IFJlZ2lvblNoYWRvd0Nhc3Rlcih7XG4gICAgICAgICAgICBwb3NpdGlvbjogdmVjLmNweShJbnB1dE1hbmFnZXIubW91c2VQb3NpdGlvbiksXG4gICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgLy8gQ3JlYXRlIFdhbGxTaGFkb3dSZWNlaXZlclxuICAgICAgaWYgKElucHV0TWFuYWdlci5rZXlQcmVzc2VkKCdLZXlTJykpIHtcbiAgICAgICAgdGhpcy5zcHJpdGVTaGFkb3dDYXN0ZXJzLnB1c2goXG4gICAgICAgICAgbmV3IFNwcml0ZVNoYWRvd0Nhc3Rlcih7XG4gICAgICAgICAgICBwb3NpdGlvbjogdmVjLmNweShJbnB1dE1hbmFnZXIubW91c2VQb3NpdGlvbiksXG4gICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgLy8gQ3JlYXRlIFdhbGxTaGFkb3dSZWNlaXZlclxuICAgICAgaWYgKElucHV0TWFuYWdlci5rZXlQcmVzc2VkKCdLZXlDJykpIHtcbiAgICAgICAgdGhpcy5jaXJjbGVTaGFkb3dDYXN0ZXJzLnB1c2goXG4gICAgICAgICAgbmV3IENpcmNsZVNoYWRvd0Nhc3Rlcih7XG4gICAgICAgICAgICBwb3NpdGlvbjogdmVjLmNweShJbnB1dE1hbmFnZXIubW91c2VQb3NpdGlvbiksXG4gICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgLy8gQ3JlYXRlIGxpZ2h0XG4gICAgICBpZiAoSW5wdXRNYW5hZ2VyLmtleVByZXNzZWQoJ0tleUwnKSkge1xuICAgICAgICB0aGlzLmxpZ2h0aW5nU3lzdGVtLmxpZ2h0cy5wdXNoKFxuICAgICAgICAgIG5ldyBMaWdodCh7XG4gICAgICAgICAgICBwb3NpdGlvbjogdmVjLmNweShJbnB1dE1hbmFnZXIubW91c2VQb3NpdGlvbiksXG4gICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBIYW5kbGUgaXRlbSBkZWxldGVcbiAgICBpZiAoSW5wdXRNYW5hZ2VyLmtleVByZXNzZWQoJ0RlbGV0ZScpICYmIHRoaXMuc2VsZWN0ZWQpIHtcbiAgICAgIHN3aXRjaCAodGhpcy5zZWxlY3RlZC50eXBlKSB7XG4gICAgICAgIGNhc2UgJ0dyb3VuZFNoYWRvd1JlY2VpdmVyJzpcbiAgICAgICAgICB0aGlzLmdyb3VuZFNoYWRvd1JlY2VpdmVycyA9IHRoaXMuZ3JvdW5kU2hhZG93UmVjZWl2ZXJzLmZpbHRlcihcbiAgICAgICAgICAgIGcgPT4gZy5pZCAhPT0gdGhpcy5zZWxlY3RlZCEuaWRcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ1dhbGxTaGFkb3dSZWNlaXZlcic6XG4gICAgICAgICAgdGhpcy53YWxsU2hhZG93UmVjZWl2ZXJzID0gdGhpcy53YWxsU2hhZG93UmVjZWl2ZXJzLmZpbHRlcihcbiAgICAgICAgICAgIHcgPT4gdy5pZCAhPT0gdGhpcy5zZWxlY3RlZCEuaWRcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ1JlZ2lvblNoYWRvd0Nhc3Rlcic6XG4gICAgICAgICAgdGhpcy5yZWdpb25TaGFkb3dDYXN0ZXJzID0gdGhpcy5yZWdpb25TaGFkb3dDYXN0ZXJzLmZpbHRlcihcbiAgICAgICAgICAgIHIgPT4gci5pZCAhPT0gdGhpcy5zZWxlY3RlZCEuaWRcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ1Nwcml0ZVNoYWRvd0Nhc3Rlcic6XG4gICAgICAgICAgdGhpcy5zcHJpdGVTaGFkb3dDYXN0ZXJzID0gdGhpcy5zcHJpdGVTaGFkb3dDYXN0ZXJzLmZpbHRlcihcbiAgICAgICAgICAgIHMgPT4gcy5pZCAhPT0gdGhpcy5zZWxlY3RlZCEuaWRcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ0NpcmNsZVNoYWRvd0Nhc3Rlcic6XG4gICAgICAgICAgdGhpcy5jaXJjbGVTaGFkb3dDYXN0ZXJzID0gdGhpcy5jaXJjbGVTaGFkb3dDYXN0ZXJzLmZpbHRlcihcbiAgICAgICAgICAgIGMgPT4gYy5pZCAhPT0gdGhpcy5zZWxlY3RlZCEuaWRcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ0xpZ2h0JzpcbiAgICAgICAgICB0aGlzLmxpZ2h0aW5nU3lzdGVtLmxpZ2h0cyA9IHRoaXMubGlnaHRpbmdTeXN0ZW0ubGlnaHRzLmZpbHRlcihcbiAgICAgICAgICAgIGxpZ2h0ID0+IGxpZ2h0LmlkICE9PSB0aGlzLnNlbGVjdGVkIS5pZFxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICB0aGlzLnNlbGVjdGVkLmRlc3Ryb3koKTtcbiAgICAgIHRoaXMuc2VsZWN0ZWQgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBkcmF3KGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkge1xuICAgIGNvbnRleHQuc2F2ZSgpO1xuXG4gICAgc3dpdGNoICh0aGlzLm1vZGUpIHtcbiAgICAgIGNhc2UgJ25vbGlnaHRpbmcnOlxuICAgICAgICB0aGlzLmdyb3VuZFNoYWRvd1JlY2VpdmVycy5mb3JFYWNoKGcgPT4gZy5kcmF3KGNvbnRleHQpKTtcbiAgICAgICAgdGhpcy53YWxsU2hhZG93UmVjZWl2ZXJzLmZvckVhY2godyA9PiB3LmRyYXcoY29udGV4dCkpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnbm9ybWFsJzpcbiAgICAgICAgdGhpcy5ncm91bmRTaGFkb3dSZWNlaXZlcnMuZm9yRWFjaChnID0+IGcuZHJhdyhjb250ZXh0KSk7XG4gICAgICAgIHRoaXMud2FsbFNoYWRvd1JlY2VpdmVycy5mb3JFYWNoKHcgPT4gdy5kcmF3KGNvbnRleHQpKTtcblxuICAgICAgICB0aGlzLmxpZ2h0aW5nU3lzdGVtLnByZXBhcmUoXG4gICAgICAgICAgdGhpcy5ncm91bmRTaGFkb3dSZWNlaXZlcnMsXG4gICAgICAgICAgdGhpcy53YWxsU2hhZG93UmVjZWl2ZXJzLFxuICAgICAgICAgIHRoaXMucmVnaW9uU2hhZG93Q2FzdGVycyxcbiAgICAgICAgICB0aGlzLnNwcml0ZVNoYWRvd0Nhc3RlcnMsXG4gICAgICAgICAgdGhpcy5jaXJjbGVTaGFkb3dDYXN0ZXJzXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMubGlnaHRpbmdTeXN0ZW0uZHJhdyhjb250ZXh0KTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ2dyb3VuZG1hc2snOlxuICAgICAgICB0aGlzLmxpZ2h0aW5nU3lzdGVtLnByZXBhcmUoXG4gICAgICAgICAgdGhpcy5ncm91bmRTaGFkb3dSZWNlaXZlcnMsXG4gICAgICAgICAgdGhpcy53YWxsU2hhZG93UmVjZWl2ZXJzLFxuICAgICAgICAgIHRoaXMucmVnaW9uU2hhZG93Q2FzdGVycyxcbiAgICAgICAgICB0aGlzLnNwcml0ZVNoYWRvd0Nhc3RlcnMsXG4gICAgICAgICAgdGhpcy5jaXJjbGVTaGFkb3dDYXN0ZXJzXG4gICAgICAgICk7XG4gICAgICAgIGNvbnRleHQuZHJhd0ltYWdlKHRoaXMubGlnaHRpbmdTeXN0ZW0uZ3JvdW5kTWFza0NhbnZhcywgMCwgMCk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICd3YWxsbWFzayc6XG4gICAgICAgIHRoaXMubGlnaHRpbmdTeXN0ZW0ucHJlcGFyZShcbiAgICAgICAgICB0aGlzLmdyb3VuZFNoYWRvd1JlY2VpdmVycyxcbiAgICAgICAgICB0aGlzLndhbGxTaGFkb3dSZWNlaXZlcnMsXG4gICAgICAgICAgdGhpcy5yZWdpb25TaGFkb3dDYXN0ZXJzLFxuICAgICAgICAgIHRoaXMuc3ByaXRlU2hhZG93Q2FzdGVycyxcbiAgICAgICAgICB0aGlzLmNpcmNsZVNoYWRvd0Nhc3RlcnNcbiAgICAgICAgKTtcbiAgICAgICAgY29udGV4dC5kcmF3SW1hZ2UodGhpcy5saWdodGluZ1N5c3RlbS53YWxsTWFza0NhbnZhcywgMCwgMCk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdncm91bmRtYXNrZWRsaWdodG1hcCc6XG4gICAgICAgIHRoaXMubGlnaHRpbmdTeXN0ZW0ucHJlcGFyZShcbiAgICAgICAgICB0aGlzLmdyb3VuZFNoYWRvd1JlY2VpdmVycyxcbiAgICAgICAgICB0aGlzLndhbGxTaGFkb3dSZWNlaXZlcnMsXG4gICAgICAgICAgdGhpcy5yZWdpb25TaGFkb3dDYXN0ZXJzLFxuICAgICAgICAgIHRoaXMuc3ByaXRlU2hhZG93Q2FzdGVycyxcbiAgICAgICAgICB0aGlzLmNpcmNsZVNoYWRvd0Nhc3RlcnNcbiAgICAgICAgKTtcbiAgICAgICAgY29udGV4dC5kcmF3SW1hZ2UodGhpcy5saWdodGluZ1N5c3RlbS5ncm91bmRNYXNrZWRMaWdodE1hcENhbnZhcywgMCwgMCk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICd3YWxsbWFza2VkbGlnaHRtYXAnOlxuICAgICAgICB0aGlzLmxpZ2h0aW5nU3lzdGVtLnByZXBhcmUoXG4gICAgICAgICAgdGhpcy5ncm91bmRTaGFkb3dSZWNlaXZlcnMsXG4gICAgICAgICAgdGhpcy53YWxsU2hhZG93UmVjZWl2ZXJzLFxuICAgICAgICAgIHRoaXMucmVnaW9uU2hhZG93Q2FzdGVycyxcbiAgICAgICAgICB0aGlzLnNwcml0ZVNoYWRvd0Nhc3RlcnMsXG4gICAgICAgICAgdGhpcy5jaXJjbGVTaGFkb3dDYXN0ZXJzXG4gICAgICAgICk7XG4gICAgICAgIGNvbnRleHQuZHJhd0ltYWdlKHRoaXMubGlnaHRpbmdTeXN0ZW0ud2FsbE1hc2tlZExpZ2h0TWFwQ2FudmFzLCAwLCAwKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ2xpZ2h0bWFwJzpcbiAgICAgICAgdGhpcy5saWdodGluZ1N5c3RlbS5wcmVwYXJlKFxuICAgICAgICAgIHRoaXMuZ3JvdW5kU2hhZG93UmVjZWl2ZXJzLFxuICAgICAgICAgIHRoaXMud2FsbFNoYWRvd1JlY2VpdmVycyxcbiAgICAgICAgICB0aGlzLnJlZ2lvblNoYWRvd0Nhc3RlcnMsXG4gICAgICAgICAgdGhpcy5zcHJpdGVTaGFkb3dDYXN0ZXJzLFxuICAgICAgICAgIHRoaXMuY2lyY2xlU2hhZG93Q2FzdGVyc1xuICAgICAgICApO1xuICAgICAgICBjb250ZXh0LmRyYXdJbWFnZSh0aGlzLmxpZ2h0aW5nU3lzdGVtLmdyb3VuZE1hc2tlZExpZ2h0TWFwQ2FudmFzLCAwLCAwKTtcbiAgICAgICAgY29udGV4dC5kcmF3SW1hZ2UodGhpcy5saWdodGluZ1N5c3RlbS53YWxsTWFza2VkTGlnaHRNYXBDYW52YXMsIDAsIDApO1xuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICBjb250ZXh0LnJlc3RvcmUoKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ2lyY2xlU2hhZG93Q2FzdGVyIH0gZnJvbSAnLi9DaXJjbGVTaGFkb3dDYXN0ZXInO1xuaW1wb3J0IEdhbWUgZnJvbSAnLi9HYW1lJztcbmltcG9ydCB7IEdyb3VuZFNoYWRvd1JlY2VpdmVyIH0gZnJvbSAnLi9Hcm91bmRTaGFkb3dSZWNlaXZlcic7XG5pbXBvcnQgeyBMaWdodCB9IGZyb20gJy4vTGlnaHQnO1xuaW1wb3J0IHsgUmVnaW9uU2hhZG93Q2FzdGVyIH0gZnJvbSAnLi9SZWdpb25TaGFkb3dDYXN0ZXInO1xuaW1wb3J0IHsgU3ByaXRlU2hhZG93Q2FzdGVyIH0gZnJvbSAnLi9TcHJpdGVTaGFkb3dDYXN0ZXInO1xuaW1wb3J0IHsgV2FsbFNoYWRvd1JlY2VpdmVyIH0gZnJvbSAnLi9XYWxsU2hhZG93UmVjZWl2ZXInO1xuXG5leHBvcnQgY2xhc3MgTGlnaHRpbmdTeXN0ZW0ge1xuICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFdBTExfTElHSFRJTkdfWV9PRkZTRVQgPSAtMzA7XG5cbiAgcHVibGljIGFtYmllbnRMaWdodENvbG91ciA9ICdibGFjayc7XG4gIHB1YmxpYyBsaWdodHM6IExpZ2h0W10gPSBbXTtcblxuICBwdWJsaWMgZ3JvdW5kTWFza0NhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XG4gIHByaXZhdGUgZ3JvdW5kTWFza0NvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcblxuICBwdWJsaWMgd2FsbE1hc2tDYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xuICBwcml2YXRlIHdhbGxNYXNrQ29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xuXG4gIHB1YmxpYyB3YWxsTWFza2VkTGlnaHRNYXBDYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xuICBwcml2YXRlIHdhbGxNYXNrZWRMaWdodE1hcENvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcblxuICBwdWJsaWMgZ3JvdW5kTWFza2VkTGlnaHRNYXBDYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xuICBwcml2YXRlIGdyb3VuZE1hc2tlZExpZ2h0TWFwQ29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xuXG4gIHB1YmxpYyBpbml0aWFsaXNlKCkge1xuICAgIHRoaXMuZ3JvdW5kTWFza0NhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgIHRoaXMuZ3JvdW5kTWFza0NhbnZhcy53aWR0aCA9IEdhbWUuc2NyZWVuLng7XG4gICAgdGhpcy5ncm91bmRNYXNrQ2FudmFzLmhlaWdodCA9IEdhbWUuc2NyZWVuLnk7XG4gICAgdGhpcy5ncm91bmRNYXNrQ29udGV4dCA9IHRoaXMuZ3JvdW5kTWFza0NhbnZhcy5nZXRDb250ZXh0KCcyZCcpITtcblxuICAgIHRoaXMud2FsbE1hc2tDYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICB0aGlzLndhbGxNYXNrQ2FudmFzLndpZHRoID0gR2FtZS5zY3JlZW4ueDtcbiAgICB0aGlzLndhbGxNYXNrQ2FudmFzLmhlaWdodCA9IEdhbWUuc2NyZWVuLnk7XG4gICAgdGhpcy53YWxsTWFza0NvbnRleHQgPSB0aGlzLndhbGxNYXNrQ2FudmFzLmdldENvbnRleHQoJzJkJykhO1xuXG4gICAgdGhpcy53YWxsTWFza2VkTGlnaHRNYXBDYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICB0aGlzLndhbGxNYXNrZWRMaWdodE1hcENhbnZhcy53aWR0aCA9IEdhbWUuc2NyZWVuLng7XG4gICAgdGhpcy53YWxsTWFza2VkTGlnaHRNYXBDYW52YXMuaGVpZ2h0ID0gR2FtZS5zY3JlZW4ueTtcbiAgICB0aGlzLndhbGxNYXNrZWRMaWdodE1hcENvbnRleHQgPVxuICAgICAgdGhpcy53YWxsTWFza2VkTGlnaHRNYXBDYW52YXMuZ2V0Q29udGV4dCgnMmQnKSE7XG5cbiAgICB0aGlzLmdyb3VuZE1hc2tlZExpZ2h0TWFwQ2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgdGhpcy5ncm91bmRNYXNrZWRMaWdodE1hcENhbnZhcy53aWR0aCA9IEdhbWUuc2NyZWVuLng7XG4gICAgdGhpcy5ncm91bmRNYXNrZWRMaWdodE1hcENhbnZhcy5oZWlnaHQgPSBHYW1lLnNjcmVlbi55O1xuICAgIHRoaXMuZ3JvdW5kTWFza2VkTGlnaHRNYXBDb250ZXh0ID1cbiAgICAgIHRoaXMuZ3JvdW5kTWFza2VkTGlnaHRNYXBDYW52YXMuZ2V0Q29udGV4dCgnMmQnKSE7XG4gIH1cblxuICBwdWJsaWMgdXBkYXRlKGR0OiBudW1iZXIpIHtcbiAgICB0aGlzLmxpZ2h0cy5mb3JFYWNoKGxpZ2h0ID0+IGxpZ2h0LnVwZGF0ZShkdCkpO1xuICB9XG5cbiAgcHVibGljIHByZXBhcmUoXG4gICAgZ3JvdW5kU2hhZG93UmVjZWl2ZXJzOiBHcm91bmRTaGFkb3dSZWNlaXZlcltdLFxuICAgIHdhbGxTaGFkb3dSZWNlaXZlcnM6IFdhbGxTaGFkb3dSZWNlaXZlcltdLFxuICAgIHJlZ2lvblNoYWRvd0Nhc3RlcnM6IFJlZ2lvblNoYWRvd0Nhc3RlcltdLFxuICAgIHNwcml0ZVNoYWRvd0Nhc3RlcnM6IFNwcml0ZVNoYWRvd0Nhc3RlcltdLFxuICAgIGNpcmNsZVNoYWRvd0Nhc3RlcnM6IENpcmNsZVNoYWRvd0Nhc3RlcltdXG4gICkge1xuICAgIHRoaXMubGlnaHRzLmZvckVhY2gobGlnaHQgPT5cbiAgICAgIGxpZ2h0LnByZXBhcmUoXG4gICAgICAgIGdyb3VuZFNoYWRvd1JlY2VpdmVycyxcbiAgICAgICAgd2FsbFNoYWRvd1JlY2VpdmVycyxcbiAgICAgICAgcmVnaW9uU2hhZG93Q2FzdGVycyxcbiAgICAgICAgc3ByaXRlU2hhZG93Q2FzdGVycyxcbiAgICAgICAgY2lyY2xlU2hhZG93Q2FzdGVyc1xuICAgICAgKVxuICAgICk7XG5cbiAgICAvLyBQcmVwYXJlIGdyb3VuZCBtYXNrXG4gICAgdGhpcy5ncm91bmRNYXNrQ2FudmFzLndpZHRoID0gR2FtZS5zY3JlZW4ueDtcbiAgICB0aGlzLmdyb3VuZE1hc2tDYW52YXMuaGVpZ2h0ID0gR2FtZS5zY3JlZW4ueTtcbiAgICB0aGlzLmdyb3VuZE1hc2tDb250ZXh0LnNhdmUoKTtcblxuICAgIGdyb3VuZFNoYWRvd1JlY2VpdmVycy5mb3JFYWNoKGdyb3VuZCA9PiB7XG4gICAgICBncm91bmQuZHJhd01hc2sodGhpcy5ncm91bmRNYXNrQ29udGV4dCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmdyb3VuZE1hc2tDb250ZXh0Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdkZXN0aW5hdGlvbi1vdXQnO1xuXG4gICAgd2FsbFNoYWRvd1JlY2VpdmVycy5mb3JFYWNoKHdhbGwgPT4ge1xuICAgICAgd2FsbC5kcmF3TWFzayh0aGlzLmdyb3VuZE1hc2tDb250ZXh0KTtcbiAgICB9KTtcblxuICAgIHRoaXMuZ3JvdW5kTWFza0NvbnRleHQucmVzdG9yZSgpO1xuXG4gICAgLy8gUHJlcGFyZSB3YWxsIG1hc2tcbiAgICB0aGlzLndhbGxNYXNrQ2FudmFzLndpZHRoID0gR2FtZS5zY3JlZW4ueDtcbiAgICB0aGlzLndhbGxNYXNrQ2FudmFzLmhlaWdodCA9IEdhbWUuc2NyZWVuLnk7XG4gICAgdGhpcy53YWxsTWFza0NvbnRleHQuc2F2ZSgpO1xuXG4gICAgd2FsbFNoYWRvd1JlY2VpdmVycy5mb3JFYWNoKHdhbGwgPT4ge1xuICAgICAgd2FsbC5kcmF3TWFzayh0aGlzLndhbGxNYXNrQ29udGV4dCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLndhbGxNYXNrQ29udGV4dC5yZXN0b3JlKCk7XG5cbiAgICAvLyBQcmVwYXJlIGdyb3VuZC1tYXNrIGxpZ2h0bWFwIGNhbnZhc1xuICAgIHRoaXMuZ3JvdW5kTWFza2VkTGlnaHRNYXBDYW52YXMud2lkdGggPSBHYW1lLnNjcmVlbi54O1xuICAgIHRoaXMuZ3JvdW5kTWFza2VkTGlnaHRNYXBDYW52YXMuaGVpZ2h0ID0gR2FtZS5zY3JlZW4ueTtcbiAgICB0aGlzLmdyb3VuZE1hc2tlZExpZ2h0TWFwQ29udGV4dC5zYXZlKCk7XG5cbiAgICB0aGlzLmdyb3VuZE1hc2tlZExpZ2h0TWFwQ29udGV4dC5maWxsU3R5bGUgPSB0aGlzLmFtYmllbnRMaWdodENvbG91cjtcbiAgICB0aGlzLmdyb3VuZE1hc2tlZExpZ2h0TWFwQ29udGV4dC5maWxsUmVjdChcbiAgICAgIDAsXG4gICAgICAwLFxuICAgICAgR2FtZS5zY3JlZW4ueCxcbiAgICAgIEdhbWUuc2NyZWVuLnlcbiAgICApO1xuXG4gICAgLy8gRHJhdyBsaWdodHNcbiAgICB0aGlzLmdyb3VuZE1hc2tlZExpZ2h0TWFwQ29udGV4dC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnc2NyZWVuJztcbiAgICB0aGlzLmxpZ2h0cy5mb3JFYWNoKGxpZ2h0ID0+IHtcbiAgICAgIHRoaXMuZ3JvdW5kTWFza2VkTGlnaHRNYXBDb250ZXh0LmRyYXdJbWFnZShcbiAgICAgICAgbGlnaHQuZ3JvdW5kTGlnaHRDYW52YXMsXG4gICAgICAgIGxpZ2h0LnBvc2l0aW9uLnggLSBsaWdodC5yYWRpdXMsXG4gICAgICAgIGxpZ2h0LnBvc2l0aW9uLnkgLSBsaWdodC5yYWRpdXNcbiAgICAgICk7XG4gICAgfSk7XG5cbiAgICAvLyBNYXNrIGdyb3VuZFxuICAgIHRoaXMuZ3JvdW5kTWFza2VkTGlnaHRNYXBDb250ZXh0Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9XG4gICAgICAnZGVzdGluYXRpb24tYXRvcCc7XG4gICAgdGhpcy5ncm91bmRNYXNrZWRMaWdodE1hcENvbnRleHQuZHJhd0ltYWdlKHRoaXMuZ3JvdW5kTWFza0NhbnZhcywgMCwgMCk7XG5cbiAgICAvLyBQcmVwYXJlIHdhbGwtbWFzayBsaWdodG1hcCBjYW52YXNcbiAgICB0aGlzLndhbGxNYXNrZWRMaWdodE1hcENhbnZhcy53aWR0aCA9IEdhbWUuc2NyZWVuLng7XG4gICAgdGhpcy53YWxsTWFza2VkTGlnaHRNYXBDYW52YXMuaGVpZ2h0ID0gR2FtZS5zY3JlZW4ueTtcbiAgICB0aGlzLndhbGxNYXNrZWRMaWdodE1hcENvbnRleHQuc2F2ZSgpO1xuXG4gICAgdGhpcy53YWxsTWFza2VkTGlnaHRNYXBDb250ZXh0LmZpbGxTdHlsZSA9IHRoaXMuYW1iaWVudExpZ2h0Q29sb3VyO1xuICAgIHRoaXMud2FsbE1hc2tlZExpZ2h0TWFwQ29udGV4dC5maWxsUmVjdCgwLCAwLCBHYW1lLnNjcmVlbi54LCBHYW1lLnNjcmVlbi55KTtcblxuICAgIC8vIERyYXcgbGlnaHRzXG4gICAgdGhpcy53YWxsTWFza2VkTGlnaHRNYXBDb250ZXh0Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdzY3JlZW4nO1xuICAgIHRoaXMubGlnaHRzLmZvckVhY2gobGlnaHQgPT4ge1xuICAgICAgdGhpcy53YWxsTWFza2VkTGlnaHRNYXBDb250ZXh0LmRyYXdJbWFnZShcbiAgICAgICAgbGlnaHQud2FsbExpZ2h0Q2FudmFzLFxuICAgICAgICBsaWdodC5wb3NpdGlvbi54IC0gbGlnaHQucmFkaXVzLFxuICAgICAgICBsaWdodC5wb3NpdGlvbi55IC0gbGlnaHQucmFkaXVzICsgTGlnaHRpbmdTeXN0ZW0uV0FMTF9MSUdIVElOR19ZX09GRlNFVFxuICAgICAgKTtcbiAgICB9KTtcblxuICAgIC8vIE1hc2sgd2FsbFxuICAgIHRoaXMud2FsbE1hc2tlZExpZ2h0TWFwQ29udGV4dC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPVxuICAgICAgJ2Rlc3RpbmF0aW9uLWF0b3AnO1xuICAgIHRoaXMud2FsbE1hc2tlZExpZ2h0TWFwQ29udGV4dC5kcmF3SW1hZ2UodGhpcy53YWxsTWFza0NhbnZhcywgMCwgMCk7XG4gIH1cblxuICBwdWJsaWMgZHJhdyhjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpIHtcbiAgICBjb250ZXh0LnNhdmUoKTtcblxuICAgIGNvbnRleHQuZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ211bHRpcGx5JztcbiAgICBjb250ZXh0LmRyYXdJbWFnZSh0aGlzLmdyb3VuZE1hc2tlZExpZ2h0TWFwQ2FudmFzLCAwLCAwKTtcbiAgICBjb250ZXh0LmRyYXdJbWFnZSh0aGlzLndhbGxNYXNrZWRMaWdodE1hcENhbnZhcywgMCwgMCk7XG5cbiAgICBjb250ZXh0LnJlc3RvcmUoKTtcbiAgfVxufVxuIiwiaW1wb3J0IERlYnVnIGZyb20gJ0BiYXNlbWVudHVuaXZlcnNlL2RlYnVnJztcbmltcG9ydCBJbnB1dE1hbmFnZXIgZnJvbSAnQGJhc2VtZW50dW5pdmVyc2UvaW5wdXQtbWFuYWdlcic7XG5pbXBvcnQgeyB2ZWMgfSBmcm9tICdAYmFzZW1lbnR1bml2ZXJzZS92ZWMnO1xuaW1wb3J0IHsgdjQgYXMgdXVpZCB9IGZyb20gJ3V1aWQnO1xuaW1wb3J0IEdhbWUgZnJvbSAnLi9HYW1lJztcbmltcG9ydCBTaGFkb3dDYXN0ZXIgZnJvbSAnLi9TaGFkb3dDYXN0ZXInO1xuaW1wb3J0IHsgY2xhbXBWZWMsIHBvaW50SW5SZWN0YW5nbGUgfSBmcm9tICcuL3V0aWxzJztcblxuZXhwb3J0IGNsYXNzIFJlZ2lvblNoYWRvd0Nhc3RlciBpbXBsZW1lbnRzIFNoYWRvd0Nhc3RlciB7XG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IERFRkFVTFRfU0laRSA9IHZlYygxMDAsIDEwMCk7XG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IERFRkFVTFRfQ09MT1VSID0gJyNjY2MnO1xuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBERUJVR19DT0xPVVIgPSAnI2IwNSc7XG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IERFQlVHX0hPVkVSX0NPTE9VUiA9ICcjZDI3JztcbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgTUlOX1NJWkUgPSB2ZWMoMjAsIDIwKTtcbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgTUFYX1NJWkUgPSB2ZWMoMjAwLCAyMDApO1xuXG4gIHB1YmxpYyByZWFkb25seSB0eXBlID0gJ1JlZ2lvblNoYWRvd0Nhc3Rlcic7XG5cbiAgcHVibGljIGlkOiBzdHJpbmcgPSAnJztcbiAgcHVibGljIGZvbGRlcjogZGF0LkdVSSB8IG51bGwgPSBudWxsO1xuXG4gIHB1YmxpYyBwb3NpdGlvbjogdmVjID0gdmVjKCk7XG4gIHB1YmxpYyBzaXplOiB2ZWMgPSBSZWdpb25TaGFkb3dDYXN0ZXIuREVGQVVMVF9TSVpFO1xuICBwdWJsaWMgY29sb3VyOiBzdHJpbmcgPSBSZWdpb25TaGFkb3dDYXN0ZXIuREVGQVVMVF9DT0xPVVI7XG5cbiAgcHVibGljIGhvdmVyZWQgPSBmYWxzZTtcbiAgcHVibGljIHNlbGVjdGVkID0gZmFsc2U7XG4gIHByaXZhdGUgZHJhZ2dpbmcgPSBmYWxzZTtcbiAgcHJpdmF0ZSBkcmFnT2Zmc2V0OiB2ZWMgfCBudWxsID0gbnVsbDtcblxuICBwdWJsaWMgY29uc3RydWN0b3IoZGF0YTogUGFydGlhbDxSZWdpb25TaGFkb3dDYXN0ZXI+ID0ge30pIHtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGRhdGEsIHtcbiAgICAgIGlkOiBkYXRhLmlkID8/IHV1aWQoKS5zcGxpdCgnLScpWzBdLFxuICAgIH0pO1xuXG4gICAgdGhpcy5mb2xkZXIgPSBHYW1lLmd1aS5hZGRGb2xkZXIoYFJlZ2lvblNoYWRvd0Nhc3RlciAke3RoaXMuaWR9YCk7XG4gICAgdGhpcy5mb2xkZXIuYWRkKHRoaXMucG9zaXRpb24sICd4Jyk7XG4gICAgdGhpcy5mb2xkZXIuYWRkKHRoaXMucG9zaXRpb24sICd5Jyk7XG4gICAgdGhpcy5mb2xkZXJcbiAgICAgIC5hZGQoXG4gICAgICAgIHRoaXMuc2l6ZSxcbiAgICAgICAgJ3gnLFxuICAgICAgICBSZWdpb25TaGFkb3dDYXN0ZXIuTUlOX1NJWkUueCxcbiAgICAgICAgUmVnaW9uU2hhZG93Q2FzdGVyLk1BWF9TSVpFLnhcbiAgICAgIClcbiAgICAgIC5uYW1lKCd3aWR0aCcpO1xuICAgIHRoaXMuZm9sZGVyXG4gICAgICAuYWRkKFxuICAgICAgICB0aGlzLnNpemUsXG4gICAgICAgICd5JyxcbiAgICAgICAgUmVnaW9uU2hhZG93Q2FzdGVyLk1JTl9TSVpFLnksXG4gICAgICAgIFJlZ2lvblNoYWRvd0Nhc3Rlci5NQVhfU0laRS55XG4gICAgICApXG4gICAgICAubmFtZSgnaGVpZ2h0Jyk7XG4gICAgdGhpcy5mb2xkZXIuYWRkKHRoaXMsICdjb2xvdXInKTtcbiAgfVxuXG4gIHB1YmxpYyBzZXJpYWxpc2UoKTogYW55IHtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogdGhpcy50eXBlLFxuICAgICAgaWQ6IHRoaXMuaWQsXG4gICAgICBwb3NpdGlvbjogdGhpcy5wb3NpdGlvbixcbiAgICAgIHNpemU6IHRoaXMuc2l6ZSxcbiAgICAgIGNvbG91cjogdGhpcy5jb2xvdXIsXG4gICAgfTtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgZGVzZXJpYWxpc2UoZGF0YTogYW55KTogUmVnaW9uU2hhZG93Q2FzdGVyIHtcbiAgICByZXR1cm4gbmV3IFJlZ2lvblNoYWRvd0Nhc3RlcihkYXRhKTtcbiAgfVxuXG4gIHB1YmxpYyBkZXN0cm95KCkge1xuICAgIGlmICh0aGlzLmZvbGRlcikge1xuICAgICAgR2FtZS5ndWkucmVtb3ZlRm9sZGVyKHRoaXMuZm9sZGVyKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgdXBkYXRlKGR0OiBudW1iZXIpIHtcbiAgICB0aGlzLmhvdmVyZWQgPSBwb2ludEluUmVjdGFuZ2xlKElucHV0TWFuYWdlci5tb3VzZVBvc2l0aW9uLCB7XG4gICAgICBwb3NpdGlvbjogdGhpcy5wb3NpdGlvbixcbiAgICAgIHNpemU6IHRoaXMuc2l6ZSxcbiAgICB9KTtcblxuICAgIGlmIChJbnB1dE1hbmFnZXIubW91c2VEb3duKCkgJiYgdGhpcy5zZWxlY3RlZCAmJiAhdGhpcy5kcmFnZ2luZykge1xuICAgICAgdGhpcy5kcmFnZ2luZyA9IHRydWU7XG4gICAgICB0aGlzLmRyYWdPZmZzZXQgPSB2ZWMuc3ViKElucHV0TWFuYWdlci5tb3VzZVBvc2l0aW9uLCB0aGlzLnBvc2l0aW9uKTtcbiAgICB9XG5cbiAgICBpZiAoIUlucHV0TWFuYWdlci5tb3VzZURvd24oKSkge1xuICAgICAgdGhpcy5kcmFnZ2luZyA9IGZhbHNlO1xuICAgICAgdGhpcy5kcmFnT2Zmc2V0ID0gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5zZWxlY3RlZCAmJiB0aGlzLmRyYWdnaW5nICYmIHRoaXMuZHJhZ09mZnNldCkge1xuICAgICAgaWYgKElucHV0TWFuYWdlci5rZXlEb3duKCdDb250cm9sTGVmdCcpKSB7XG4gICAgICAgIHRoaXMuc2l6ZSA9IGNsYW1wVmVjKFxuICAgICAgICAgIHZlYy5zdWIoSW5wdXRNYW5hZ2VyLm1vdXNlUG9zaXRpb24sIHRoaXMucG9zaXRpb24pLFxuICAgICAgICAgIFJlZ2lvblNoYWRvd0Nhc3Rlci5NSU5fU0laRSxcbiAgICAgICAgICBSZWdpb25TaGFkb3dDYXN0ZXIuTUFYX1NJWkVcbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucG9zaXRpb24gPSB2ZWMuc3ViKElucHV0TWFuYWdlci5tb3VzZVBvc2l0aW9uLCB0aGlzLmRyYWdPZmZzZXQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIERlYnVnLmJvcmRlcihgUmVnaW9uU2hhZG93Q2FzdGVyICR7dGhpcy5pZH1gLCAnJywgdGhpcy5wb3NpdGlvbiwge1xuICAgICAgc2hvd0xhYmVsOiB0cnVlLFxuICAgICAgc2hvd1ZhbHVlOiBmYWxzZSxcbiAgICAgIHNpemU6IHRoaXMuc2l6ZSxcbiAgICAgIGJvcmRlckNvbG91cjpcbiAgICAgICAgdGhpcy5ob3ZlcmVkIHx8IHRoaXMuZHJhZ2dpbmdcbiAgICAgICAgICA/IFJlZ2lvblNoYWRvd0Nhc3Rlci5ERUJVR19IT1ZFUl9DT0xPVVJcbiAgICAgICAgICA6IFJlZ2lvblNoYWRvd0Nhc3Rlci5ERUJVR19DT0xPVVIsXG4gICAgICBib3JkZXJTdHlsZTogdGhpcy5zZWxlY3RlZCA/ICdzb2xpZCcgOiAnZGFzaGVkJyxcbiAgICB9KTtcbiAgfVxufVxuIiwiaW1wb3J0IERlYnVnIGZyb20gJ0BiYXNlbWVudHVuaXZlcnNlL2RlYnVnJztcbmltcG9ydCBJbnB1dE1hbmFnZXIgZnJvbSAnQGJhc2VtZW50dW5pdmVyc2UvaW5wdXQtbWFuYWdlcic7XG5pbXBvcnQgeyB2ZWMgfSBmcm9tICdAYmFzZW1lbnR1bml2ZXJzZS92ZWMnO1xuaW1wb3J0IHsgdjQgYXMgdXVpZCB9IGZyb20gJ3V1aWQnO1xuaW1wb3J0IEdhbWUgZnJvbSAnLi9HYW1lJztcbmltcG9ydCBTaGFkb3dDYXN0ZXIgZnJvbSAnLi9TaGFkb3dDYXN0ZXInO1xuaW1wb3J0IHsgY2xhbXBWZWMsIHBvaW50SW5SZWN0YW5nbGUgfSBmcm9tICcuL3V0aWxzJztcblxuZXhwb3J0IGNsYXNzIFNwcml0ZVNoYWRvd0Nhc3RlciBpbXBsZW1lbnRzIFNoYWRvd0Nhc3RlciB7XG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IERFRkFVTFRfU0laRSA9IHZlYygxMDAsIDEwMCk7XG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IERFRkFVTFRfQ09MT1VSID0gJyNjY2MnO1xuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBERUJVR19DT0xPVVIgPSAnI2IwNSc7XG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IERFQlVHX0hPVkVSX0NPTE9VUiA9ICcjZDI3JztcbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgTUlOX1NJWkUgPSB2ZWMoMjAsIDIwKTtcbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgTUFYX1NJWkUgPSB2ZWMoMjAwLCAyMDApO1xuXG4gIHB1YmxpYyByZWFkb25seSB0eXBlID0gJ1Nwcml0ZVNoYWRvd0Nhc3Rlcic7XG5cbiAgcHVibGljIGlkOiBzdHJpbmcgPSAnJztcbiAgcHVibGljIGZvbGRlcjogZGF0LkdVSSB8IG51bGwgPSBudWxsO1xuXG4gIHB1YmxpYyBwb3NpdGlvbjogdmVjID0gdmVjKCk7XG4gIHB1YmxpYyBzaXplOiB2ZWMgPSBTcHJpdGVTaGFkb3dDYXN0ZXIuREVGQVVMVF9TSVpFO1xuICBwdWJsaWMgY29sb3VyOiBzdHJpbmcgPSBTcHJpdGVTaGFkb3dDYXN0ZXIuREVGQVVMVF9DT0xPVVI7XG4gIHB1YmxpYyBzcHJpdGVOYW1lOiBzdHJpbmcgPSAnJztcblxuICBwdWJsaWMgaG92ZXJlZCA9IGZhbHNlO1xuICBwdWJsaWMgc2VsZWN0ZWQgPSBmYWxzZTtcbiAgcHJpdmF0ZSBkcmFnZ2luZyA9IGZhbHNlO1xuICBwcml2YXRlIGRyYWdPZmZzZXQ6IHZlYyB8IG51bGwgPSBudWxsO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihkYXRhOiBQYXJ0aWFsPFNwcml0ZVNoYWRvd0Nhc3Rlcj4gPSB7fSkge1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywgZGF0YSwge1xuICAgICAgaWQ6IGRhdGEuaWQgPz8gdXVpZCgpLnNwbGl0KCctJylbMF0sXG4gICAgfSk7XG5cbiAgICB0aGlzLmZvbGRlciA9IEdhbWUuZ3VpLmFkZEZvbGRlcihgU3ByaXRlU2hhZG93Q2FzdGVyICR7dGhpcy5pZH1gKTtcbiAgICB0aGlzLmZvbGRlci5hZGQodGhpcy5wb3NpdGlvbiwgJ3gnKTtcbiAgICB0aGlzLmZvbGRlci5hZGQodGhpcy5wb3NpdGlvbiwgJ3knKTtcbiAgICB0aGlzLmZvbGRlclxuICAgICAgLmFkZChcbiAgICAgICAgdGhpcy5zaXplLFxuICAgICAgICAneCcsXG4gICAgICAgIFNwcml0ZVNoYWRvd0Nhc3Rlci5NSU5fU0laRS54LFxuICAgICAgICBTcHJpdGVTaGFkb3dDYXN0ZXIuTUFYX1NJWkUueFxuICAgICAgKVxuICAgICAgLm5hbWUoJ3dpZHRoJyk7XG4gICAgdGhpcy5mb2xkZXJcbiAgICAgIC5hZGQoXG4gICAgICAgIHRoaXMuc2l6ZSxcbiAgICAgICAgJ3knLFxuICAgICAgICBTcHJpdGVTaGFkb3dDYXN0ZXIuTUlOX1NJWkUueSxcbiAgICAgICAgU3ByaXRlU2hhZG93Q2FzdGVyLk1BWF9TSVpFLnlcbiAgICAgIClcbiAgICAgIC5uYW1lKCdoZWlnaHQnKTtcbiAgICB0aGlzLmZvbGRlci5hZGQodGhpcywgJ2NvbG91cicpO1xuICAgIHRoaXMuZm9sZGVyLmFkZCh0aGlzLCAnc3ByaXRlTmFtZScpO1xuICB9XG5cbiAgcHVibGljIHNlcmlhbGlzZSgpOiBhbnkge1xuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiB0aGlzLnR5cGUsXG4gICAgICBpZDogdGhpcy5pZCxcbiAgICAgIHBvc2l0aW9uOiB0aGlzLnBvc2l0aW9uLFxuICAgICAgc2l6ZTogdGhpcy5zaXplLFxuICAgICAgY29sb3VyOiB0aGlzLmNvbG91cixcbiAgICAgIHNwcml0ZU5hbWU6IHRoaXMuc3ByaXRlTmFtZSxcbiAgICB9O1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBkZXNlcmlhbGlzZShkYXRhOiBhbnkpOiBTcHJpdGVTaGFkb3dDYXN0ZXIge1xuICAgIHJldHVybiBuZXcgU3ByaXRlU2hhZG93Q2FzdGVyKGRhdGEpO1xuICB9XG5cbiAgcHVibGljIGRlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMuZm9sZGVyKSB7XG4gICAgICBHYW1lLmd1aS5yZW1vdmVGb2xkZXIodGhpcy5mb2xkZXIpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyB1cGRhdGUoZHQ6IG51bWJlcikge1xuICAgIHRoaXMuaG92ZXJlZCA9IHBvaW50SW5SZWN0YW5nbGUoSW5wdXRNYW5hZ2VyLm1vdXNlUG9zaXRpb24sIHtcbiAgICAgIHBvc2l0aW9uOiB0aGlzLnBvc2l0aW9uLFxuICAgICAgc2l6ZTogdGhpcy5zaXplLFxuICAgIH0pO1xuXG4gICAgaWYgKElucHV0TWFuYWdlci5tb3VzZURvd24oKSAmJiB0aGlzLnNlbGVjdGVkICYmICF0aGlzLmRyYWdnaW5nKSB7XG4gICAgICB0aGlzLmRyYWdnaW5nID0gdHJ1ZTtcbiAgICAgIHRoaXMuZHJhZ09mZnNldCA9IHZlYy5zdWIoSW5wdXRNYW5hZ2VyLm1vdXNlUG9zaXRpb24sIHRoaXMucG9zaXRpb24pO1xuICAgIH1cblxuICAgIGlmICghSW5wdXRNYW5hZ2VyLm1vdXNlRG93bigpKSB7XG4gICAgICB0aGlzLmRyYWdnaW5nID0gZmFsc2U7XG4gICAgICB0aGlzLmRyYWdPZmZzZXQgPSBudWxsO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnNlbGVjdGVkICYmIHRoaXMuZHJhZ2dpbmcgJiYgdGhpcy5kcmFnT2Zmc2V0KSB7XG4gICAgICBpZiAoSW5wdXRNYW5hZ2VyLmtleURvd24oJ0NvbnRyb2xMZWZ0JykpIHtcbiAgICAgICAgdGhpcy5zaXplID0gY2xhbXBWZWMoXG4gICAgICAgICAgdmVjLnN1YihJbnB1dE1hbmFnZXIubW91c2VQb3NpdGlvbiwgdGhpcy5wb3NpdGlvbiksXG4gICAgICAgICAgU3ByaXRlU2hhZG93Q2FzdGVyLk1JTl9TSVpFLFxuICAgICAgICAgIFNwcml0ZVNoYWRvd0Nhc3Rlci5NQVhfU0laRVxuICAgICAgICApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHZlYy5zdWIoSW5wdXRNYW5hZ2VyLm1vdXNlUG9zaXRpb24sIHRoaXMuZHJhZ09mZnNldCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgRGVidWcuYm9yZGVyKGBTcHJpdGVTaGFkb3dDYXN0ZXIgJHt0aGlzLmlkfWAsICcnLCB0aGlzLnBvc2l0aW9uLCB7XG4gICAgICBzaG93TGFiZWw6IHRydWUsXG4gICAgICBzaG93VmFsdWU6IGZhbHNlLFxuICAgICAgc2l6ZTogdGhpcy5zaXplLFxuICAgICAgYm9yZGVyQ29sb3VyOlxuICAgICAgICB0aGlzLmhvdmVyZWQgfHwgdGhpcy5kcmFnZ2luZ1xuICAgICAgICAgID8gU3ByaXRlU2hhZG93Q2FzdGVyLkRFQlVHX0hPVkVSX0NPTE9VUlxuICAgICAgICAgIDogU3ByaXRlU2hhZG93Q2FzdGVyLkRFQlVHX0NPTE9VUixcbiAgICAgIGJvcmRlclN0eWxlOiB0aGlzLnNlbGVjdGVkID8gJ3NvbGlkJyA6ICdkYXNoZWQnLFxuICAgIH0pO1xuICB9XG59XG4iLCJpbXBvcnQgRGVidWcgZnJvbSAnQGJhc2VtZW50dW5pdmVyc2UvZGVidWcnO1xuaW1wb3J0IElucHV0TWFuYWdlciBmcm9tICdAYmFzZW1lbnR1bml2ZXJzZS9pbnB1dC1tYW5hZ2VyJztcbmltcG9ydCB7IHZlYyB9IGZyb20gJ0BiYXNlbWVudHVuaXZlcnNlL3ZlYyc7XG5pbXBvcnQgeyB2NCBhcyB1dWlkIH0gZnJvbSAndXVpZCc7XG5pbXBvcnQgR2FtZSBmcm9tICcuL0dhbWUnO1xuaW1wb3J0IHsgY2xhbXBWZWMsIHBvaW50SW5SZWN0YW5nbGUgfSBmcm9tICcuL3V0aWxzJztcblxuZXhwb3J0IGNsYXNzIFdhbGxTaGFkb3dSZWNlaXZlciB7XG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IERFRkFVTFRfU0laRSA9IHZlYygyMDAsIDIwMCk7XG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IERFRkFVTFRfQ09MT1VSID0gJyNkZGQnO1xuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBERUJVR19DT0xPVVIgPSAnIzA1Yic7XG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IERFQlVHX0hPVkVSX0NPTE9VUiA9ICcjMzhmJztcbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgTUlOX1NJWkUgPSB2ZWMoMjAsIDIwKTtcbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgTUFYX1NJWkUgPSB2ZWMoNjAwLCA2MDApO1xuXG4gIHB1YmxpYyByZWFkb25seSB0eXBlID0gJ1dhbGxTaGFkb3dSZWNlaXZlcic7XG5cbiAgcHVibGljIGlkOiBzdHJpbmcgPSAnJztcbiAgcHVibGljIGZvbGRlcjogZGF0LkdVSSB8IG51bGwgPSBudWxsO1xuXG4gIHB1YmxpYyBwb3NpdGlvbjogdmVjID0gdmVjKCk7XG4gIHB1YmxpYyBzaXplOiB2ZWMgPSBXYWxsU2hhZG93UmVjZWl2ZXIuREVGQVVMVF9TSVpFO1xuICBwdWJsaWMgY29sb3VyOiBzdHJpbmcgPSBXYWxsU2hhZG93UmVjZWl2ZXIuREVGQVVMVF9DT0xPVVI7XG5cbiAgcHVibGljIGhvdmVyZWQgPSBmYWxzZTtcbiAgcHVibGljIHNlbGVjdGVkID0gZmFsc2U7XG4gIHByaXZhdGUgZHJhZ2dpbmcgPSBmYWxzZTtcbiAgcHJpdmF0ZSBkcmFnT2Zmc2V0OiB2ZWMgfCBudWxsID0gbnVsbDtcblxuICBwdWJsaWMgY29uc3RydWN0b3IoZGF0YTogUGFydGlhbDxXYWxsU2hhZG93UmVjZWl2ZXI+ID0ge30pIHtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGRhdGEsIHtcbiAgICAgIGlkOiBkYXRhLmlkID8/IHV1aWQoKS5zcGxpdCgnLScpWzBdLFxuICAgIH0pO1xuXG4gICAgdGhpcy5mb2xkZXIgPSBHYW1lLmd1aS5hZGRGb2xkZXIoYFdhbGxTaGFkb3dSZWNlaXZlciAke3RoaXMuaWR9YCk7XG4gICAgdGhpcy5mb2xkZXIuYWRkKHRoaXMucG9zaXRpb24sICd4Jyk7XG4gICAgdGhpcy5mb2xkZXIuYWRkKHRoaXMucG9zaXRpb24sICd5Jyk7XG4gICAgdGhpcy5mb2xkZXJcbiAgICAgIC5hZGQoXG4gICAgICAgIHRoaXMuc2l6ZSxcbiAgICAgICAgJ3gnLFxuICAgICAgICBXYWxsU2hhZG93UmVjZWl2ZXIuTUlOX1NJWkUueCxcbiAgICAgICAgV2FsbFNoYWRvd1JlY2VpdmVyLk1BWF9TSVpFLnhcbiAgICAgIClcbiAgICAgIC5uYW1lKCd3aWR0aCcpO1xuICAgIHRoaXMuZm9sZGVyXG4gICAgICAuYWRkKFxuICAgICAgICB0aGlzLnNpemUsXG4gICAgICAgICd5JyxcbiAgICAgICAgV2FsbFNoYWRvd1JlY2VpdmVyLk1JTl9TSVpFLnksXG4gICAgICAgIFdhbGxTaGFkb3dSZWNlaXZlci5NQVhfU0laRS55XG4gICAgICApXG4gICAgICAubmFtZSgnaGVpZ2h0Jyk7XG4gICAgdGhpcy5mb2xkZXIuYWRkKHRoaXMsICdjb2xvdXInKTtcbiAgfVxuXG4gIHB1YmxpYyBzZXJpYWxpc2UoKTogYW55IHtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogdGhpcy50eXBlLFxuICAgICAgaWQ6IHRoaXMuaWQsXG4gICAgICBwb3NpdGlvbjogdGhpcy5wb3NpdGlvbixcbiAgICAgIHNpemU6IHRoaXMuc2l6ZSxcbiAgICAgIGNvbG91cjogdGhpcy5jb2xvdXIsXG4gICAgfTtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgZGVzZXJpYWxpc2UoZGF0YTogYW55KTogV2FsbFNoYWRvd1JlY2VpdmVyIHtcbiAgICByZXR1cm4gbmV3IFdhbGxTaGFkb3dSZWNlaXZlcihkYXRhKTtcbiAgfVxuXG4gIHB1YmxpYyBkZXN0cm95KCkge1xuICAgIGlmICh0aGlzLmZvbGRlcikge1xuICAgICAgR2FtZS5ndWkucmVtb3ZlRm9sZGVyKHRoaXMuZm9sZGVyKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgdXBkYXRlKGR0OiBudW1iZXIpIHtcbiAgICB0aGlzLmhvdmVyZWQgPSBwb2ludEluUmVjdGFuZ2xlKElucHV0TWFuYWdlci5tb3VzZVBvc2l0aW9uLCB7XG4gICAgICBwb3NpdGlvbjogdGhpcy5wb3NpdGlvbixcbiAgICAgIHNpemU6IHRoaXMuc2l6ZSxcbiAgICB9KTtcblxuICAgIGlmIChJbnB1dE1hbmFnZXIubW91c2VEb3duKCkgJiYgdGhpcy5zZWxlY3RlZCAmJiAhdGhpcy5kcmFnZ2luZykge1xuICAgICAgdGhpcy5kcmFnZ2luZyA9IHRydWU7XG4gICAgICB0aGlzLmRyYWdPZmZzZXQgPSB2ZWMuc3ViKElucHV0TWFuYWdlci5tb3VzZVBvc2l0aW9uLCB0aGlzLnBvc2l0aW9uKTtcbiAgICB9XG5cbiAgICBpZiAoIUlucHV0TWFuYWdlci5tb3VzZURvd24oKSkge1xuICAgICAgdGhpcy5kcmFnZ2luZyA9IGZhbHNlO1xuICAgICAgdGhpcy5kcmFnT2Zmc2V0ID0gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5zZWxlY3RlZCAmJiB0aGlzLmRyYWdnaW5nICYmIHRoaXMuZHJhZ09mZnNldCkge1xuICAgICAgaWYgKElucHV0TWFuYWdlci5rZXlEb3duKCdDb250cm9sTGVmdCcpKSB7XG4gICAgICAgIHRoaXMuc2l6ZSA9IGNsYW1wVmVjKFxuICAgICAgICAgIHZlYy5zdWIoSW5wdXRNYW5hZ2VyLm1vdXNlUG9zaXRpb24sIHRoaXMucG9zaXRpb24pLFxuICAgICAgICAgIFdhbGxTaGFkb3dSZWNlaXZlci5NSU5fU0laRSxcbiAgICAgICAgICBXYWxsU2hhZG93UmVjZWl2ZXIuTUFYX1NJWkVcbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucG9zaXRpb24gPSB2ZWMuc3ViKElucHV0TWFuYWdlci5tb3VzZVBvc2l0aW9uLCB0aGlzLmRyYWdPZmZzZXQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIERlYnVnLmJvcmRlcihgV2FsbFNoYWRvd1JlY2VpdmVyICR7dGhpcy5pZH1gLCAnJywgdGhpcy5wb3NpdGlvbiwge1xuICAgICAgc2hvd0xhYmVsOiBmYWxzZSxcbiAgICAgIHNob3dWYWx1ZTogZmFsc2UsXG4gICAgICBzaXplOiB0aGlzLnNpemUsXG4gICAgICBib3JkZXJDb2xvdXI6XG4gICAgICAgIHRoaXMuaG92ZXJlZCB8fCB0aGlzLmRyYWdnaW5nXG4gICAgICAgICAgPyBXYWxsU2hhZG93UmVjZWl2ZXIuREVCVUdfSE9WRVJfQ09MT1VSXG4gICAgICAgICAgOiBXYWxsU2hhZG93UmVjZWl2ZXIuREVCVUdfQ09MT1VSLFxuICAgICAgYm9yZGVyU3R5bGU6IHRoaXMuc2VsZWN0ZWQgPyAnc29saWQnIDogJ2Rhc2hlZCcsXG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgZHJhdyhjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpIHtcbiAgICBjb250ZXh0LnNhdmUoKTtcblxuICAgIGNvbnRleHQuZmlsbFN0eWxlID0gdGhpcy5jb2xvdXI7XG4gICAgY29udGV4dC5maWxsUmVjdChcbiAgICAgIHRoaXMucG9zaXRpb24ueCxcbiAgICAgIHRoaXMucG9zaXRpb24ueSxcbiAgICAgIHRoaXMuc2l6ZS54LFxuICAgICAgdGhpcy5zaXplLnlcbiAgICApO1xuXG4gICAgY29udGV4dC5yZXN0b3JlKCk7XG4gIH1cblxuICBwdWJsaWMgZHJhd01hc2soY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSB7XG4gICAgY29udGV4dC5zYXZlKCk7XG5cbiAgICBjb250ZXh0LmZpbGxTdHlsZSA9ICdibGFjayc7XG4gICAgY29udGV4dC5maWxsUmVjdChcbiAgICAgIHRoaXMucG9zaXRpb24ueCxcbiAgICAgIHRoaXMucG9zaXRpb24ueSxcbiAgICAgIHRoaXMuc2l6ZS54LFxuICAgICAgdGhpcy5zaXplLnlcbiAgICApO1xuXG4gICAgY29udGV4dC5yZXN0b3JlKCk7XG4gIH1cbn1cbiIsImV4cG9ydCBjb25zdCBGUFNfTUlOID0gMSAvIDMwO1xuIiwiaW1wb3J0IHsgdmVjIH0gZnJvbSAnQGJhc2VtZW50dW5pdmVyc2UvdmVjJztcblxuZXhwb3J0IHR5cGUgQ29sb3VyID0ge1xuICByOiBudW1iZXI7XG4gIGc6IG51bWJlcjtcbiAgYjogbnVtYmVyO1xuICBhOiBudW1iZXI7XG59O1xuXG5leHBvcnQgdHlwZSBMaW5lID0ge1xuICBzdGFydDogdmVjO1xuICBlbmQ6IHZlYztcbn07XG5cbmV4cG9ydCB0eXBlIEludGVydmFsMWQgPSB7XG4gIHN0YXJ0OiBudW1iZXI7XG4gIGVuZDogbnVtYmVyO1xufTtcblxuZXhwb3J0IHR5cGUgSW50ZXJ2YWwyZCA9IHtcbiAgdG9wOiBudW1iZXI7XG4gIGJvdHRvbTogbnVtYmVyO1xuICByaWdodDogbnVtYmVyO1xuICBsZWZ0OiBudW1iZXI7XG59O1xuXG5leHBvcnQgZW51bSBTZWN0b3IxZCB7XG4gIEJlZm9yZSA9ICdiZWZvcmUnLFxuICBJbnNpZGUgPSAnaW5zaWRlJyxcbiAgQWZ0ZXIgPSAnYWZ0ZXInLFxufVxuXG5leHBvcnQgZW51bSBTZWN0b3IyZCB7XG4gIFRvcExlZnQgPSAndG9wLWxlZnQnLFxuICBUb3AgPSAndG9wJyxcbiAgVG9wUmlnaHQgPSAndG9wLXJpZ2h0JyxcbiAgTGVmdCA9ICdsZWZ0JyxcbiAgSW5zaWRlID0gJ2luc2lkZScsXG4gIFJpZ2h0ID0gJ3JpZ2h0JyxcbiAgQm90dG9tTGVmdCA9ICdib3R0b20tbGVmdCcsXG4gIEJvdHRvbSA9ICdib3R0b20nLFxuICBCb3R0b21SaWdodCA9ICdib3R0b20tcmlnaHQnLFxufVxuXG5leHBvcnQgdHlwZSBSZWN0YW5nbGUgPSB7XG4gIHBvc2l0aW9uOiB2ZWM7XG4gIHNpemU6IHZlYztcbn07XG5cbmV4cG9ydCB0eXBlIFBvbHlnb25WZXJ0aWNlcyA9IChcbiAgfCB2ZWNcbiAgfCAoKGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkgPT4gdm9pZClcbilbXTtcbiIsImltcG9ydCB7IGNsYW1wLCBmbG9hdEVxdWFscyB9IGZyb20gJ0BiYXNlbWVudHVuaXZlcnNlL3V0aWxzJztcbmltcG9ydCB7IHZlYyB9IGZyb20gJ0BiYXNlbWVudHVuaXZlcnNlL3ZlYyc7XG5pbXBvcnQge1xuICBDb2xvdXIsXG4gIEludGVydmFsMWQsXG4gIEludGVydmFsMmQsXG4gIExpbmUsXG4gIFBvbHlnb25WZXJ0aWNlcyxcbiAgUmVjdGFuZ2xlLFxuICBTZWN0b3IxZCxcbiAgU2VjdG9yMmQsXG59IGZyb20gJy4vdHlwZXMnO1xuXG4vKipcbiAqIEdldCB0aGUgbWluaW11bSBvZiBhIHNldCBvZiB2ZWN0b3JzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtaW5WZWMoLi4udmVjdG9yczogdmVjW10pOiB2ZWMge1xuICByZXR1cm4gdmVjdG9ycy5yZWR1Y2UoXG4gICAgKG1pbiwgdikgPT4gdmVjKE1hdGgubWluKG1pbi54LCB2LngpLCBNYXRoLm1pbihtaW4ueSwgdi55KSksXG4gICAgdmVjKEluZmluaXR5LCBJbmZpbml0eSlcbiAgKTtcbn1cblxuLyoqXG4gKiBHZXQgdGhlIG1heGltdW0gb2YgYSBzZXQgb2YgdmVjdG9yc1xuICovXG5leHBvcnQgZnVuY3Rpb24gbWF4VmVjKC4uLnZlY3RvcnM6IHZlY1tdKTogdmVjIHtcbiAgcmV0dXJuIHZlY3RvcnMucmVkdWNlKFxuICAgIChtYXgsIHYpID0+IHZlYyhNYXRoLm1heChtYXgueCwgdi54KSwgTWF0aC5tYXgobWF4LnksIHYueSkpLFxuICAgIHZlYygtSW5maW5pdHksIC1JbmZpbml0eSlcbiAgKTtcbn1cblxuLyoqXG4gKiBDbGFtcCBhIHZlY3RvciBiZXR3ZWVuIG1pbiBhbmQgbWF4XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjbGFtcFZlYyh2OiB2ZWMsIG1pbjogdmVjLCBtYXg6IHZlYyk6IHZlYyB7XG4gIHJldHVybiB2ZWMoY2xhbXAodi54LCBtaW4ueCwgbWF4LngpLCBjbGFtcCh2LnksIG1pbi55LCBtYXgueSkpO1xufVxuXG4vKipcbiAqIENvbnZlcnQgYSBjb2xvdXIgb2JqZWN0IHRvIGEgQ1NTIHN0cmluZ1xuICovXG5leHBvcnQgZnVuY3Rpb24gY29sb3VyVG9TdHJpbmcoY29sb3VyOiBDb2xvdXIpOiBzdHJpbmcge1xuICByZXR1cm4gYHJnYmEoJHtjb2xvdXIucn0sICR7Y29sb3VyLmd9LCAke2NvbG91ci5ifSwgJHtjb2xvdXIuYX0pYDtcbn1cblxuLyoqXG4gKiBDaGVjayBpZiBhIHBvaW50IGlzIGluc2lkZSBhIDJkIGludGVydmFsXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwb2ludEluSW50ZXJ2YWwocG9pbnQ6IHZlYywgaW50ZXJ2YWw6IEludGVydmFsMmQpOiBib29sZWFuIHtcbiAgcmV0dXJuIChcbiAgICBwb2ludC54ID49IGludGVydmFsLmxlZnQgJiZcbiAgICBwb2ludC54IDw9IGludGVydmFsLnJpZ2h0ICYmXG4gICAgcG9pbnQueSA+PSBpbnRlcnZhbC50b3AgJiZcbiAgICBwb2ludC55IDw9IGludGVydmFsLmJvdHRvbVxuICApO1xufVxuXG4vKipcbiAqIENoZWNrIGlmIGEgcG9pbnQgaXMgaW5zaWRlIGFuIEFBQkIgcmVjdGFuZ2xlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwb2ludEluUmVjdGFuZ2xlKHBvaW50OiB2ZWMsIHJlY3RhbmdsZTogUmVjdGFuZ2xlKTogYm9vbGVhbiB7XG4gIHJldHVybiBwb2ludEluSW50ZXJ2YWwocG9pbnQsIHJlY3RhbmdsZVRvSW50ZXJ2YWwocmVjdGFuZ2xlKSk7XG59XG5cbi8qKlxuICogQ2hlY2sgaWYgYSBsaW5lIGludGVyc2VjdHMgYSAyZCBpbnRlcnZhbCBhbmQgcmV0dXJuIHRoZSBlYXJsaWVzdCBwb2ludCBvZlxuICogaW50ZXJzZWN0aW9uXG4gKlxuICogSWYgdGhlIGxpbmUgc2VnbWVudCBkb2VzIG5vdCBpbnRlcnNlY3QgdGhlIGludGVydmFsLCByZXR1cm4gbnVsbFxuICpcbiAqIElmIHRoZSBsaW5lIGJlZ2lucyBpbnNpZGUgdGhlIGludGVydmFsLCByZXR1cm4gbnVsbFxuICovXG5leHBvcnQgZnVuY3Rpb24gbGluZUluSW50ZXJ2YWwobGluZTogTGluZSwgaW50ZXJ2YWw6IEludGVydmFsMmQpOiB2ZWMgfCBudWxsIHtcbiAgaWYgKHZlYy5lcShsaW5lLnN0YXJ0LCBsaW5lLmVuZCkpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGlmIChcbiAgICBsaW5lLnN0YXJ0LnggPj0gaW50ZXJ2YWwubGVmdCAmJlxuICAgIGxpbmUuc3RhcnQueCA8PSBpbnRlcnZhbC5yaWdodCAmJlxuICAgIGxpbmUuc3RhcnQueSA+PSBpbnRlcnZhbC50b3AgJiZcbiAgICBsaW5lLnN0YXJ0LnkgPD0gaW50ZXJ2YWwuYm90dG9tXG4gICkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgY29uc3QgbGluZURlbHRhWCA9IGxpbmUuZW5kLnggLSBsaW5lLnN0YXJ0Lng7XG4gIGxldCB0eE1pbiA9IChpbnRlcnZhbC5sZWZ0IC0gbGluZS5zdGFydC54KSAvIGxpbmVEZWx0YVg7XG4gIGxldCB0eE1heCA9IChpbnRlcnZhbC5yaWdodCAtIGxpbmUuc3RhcnQueCkgLyBsaW5lRGVsdGFYO1xuXG4gIGlmICh0eE1pbiA+IHR4TWF4KSB7XG4gICAgW3R4TWluLCB0eE1heF0gPSBbdHhNYXgsIHR4TWluXTtcbiAgfVxuXG4gIGNvbnN0IGxpbmVEZWx0YVkgPSBsaW5lLmVuZC55IC0gbGluZS5zdGFydC55O1xuICBsZXQgdHlNaW4gPSAoaW50ZXJ2YWwudG9wIC0gbGluZS5zdGFydC55KSAvIGxpbmVEZWx0YVk7XG4gIGxldCB0eU1heCA9IChpbnRlcnZhbC5ib3R0b20gLSBsaW5lLnN0YXJ0LnkpIC8gbGluZURlbHRhWTtcblxuICBpZiAodHlNaW4gPiB0eU1heCkge1xuICAgIFt0eU1pbiwgdHlNYXhdID0gW3R5TWF4LCB0eU1pbl07XG4gIH1cblxuICAvLyBDaGVjayBpZiBpbnRlcnZhbHMgb3ZlcmxhcFxuICBpZiAodHhNaW4gPiB0eU1heCB8fCB0eU1pbiA+IHR4TWF4KSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICAvLyBGaW5kIHRoZSBlYXJsaWVzdCBpbnRlcnNlY3Rpb24gcG9pbnRcbiAgY29uc3QgdE1pbiA9IE1hdGgubWF4KHR4TWluLCB0eU1pbik7XG4gIGNvbnN0IHRNYXggPSBNYXRoLm1pbih0eE1heCwgdHlNYXgpO1xuXG4gIGlmICh0TWluID4gMSB8fCB0TWF4IDwgMCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgY29uc3QgdCA9IHRNaW4gPCAwID8gdE1heCA6IHRNaW47XG4gIGlmICh0IDwgMCB8fCB0ID4gMSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB4OiBsaW5lLnN0YXJ0LnggKyB0ICogbGluZURlbHRhWCxcbiAgICB5OiBsaW5lLnN0YXJ0LnkgKyB0ICogbGluZURlbHRhWSxcbiAgfTtcbn1cblxuLyoqXG4gKiBDaGVjayBpZiBhIGxpbmUgaW50ZXJzZWN0cyBhbiBBQUJCIHJlY3RhbmdsZSBhbmQgcmV0dXJuIHRoZSBlYXJsaWVzdCBwb2ludFxuICogb2YgaW50ZXJzZWN0aW9uXG4gKlxuICogSWYgdGhlIGxpbmUgc2VnbWVudCBkb2VzIG5vdCBpbnRlcnNlY3QgdGhlIHJlY3RhbmdsZSwgcmV0dXJuIG51bGxcbiAqXG4gKiBJZiB0aGUgbGluZSBiZWdpbnMgaW5zaWRlIHRoZSByZWN0YW5nbGUsIHJldHVybiBudWxsXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBsaW5lSW5SZWN0YW5nbGUobGluZTogTGluZSwgcmVjdGFuZ2xlOiBSZWN0YW5nbGUpOiB2ZWMgfCBudWxsIHtcbiAgcmV0dXJuIGxpbmVJbkludGVydmFsKGxpbmUsIHJlY3RhbmdsZVRvSW50ZXJ2YWwocmVjdGFuZ2xlKSk7XG59XG5cbi8qKlxuICogQ2FsY3VsYXRlIHRoZSB4IHBvc2l0aW9uIG9mIGEgbGluZSB3aGVyZSBpdCBpbnRlcmNlcHRzIGEgZ2l2ZW4geVxuICovXG5leHBvcnQgZnVuY3Rpb24gbGluZVlJbnRlcmNlcHQobGluZTogTGluZSwgeTogbnVtYmVyKTogbnVtYmVyIHwgbnVsbCB7XG4gIGlmIChmbG9hdEVxdWFscyhsaW5lLnN0YXJ0LnksIGxpbmUuZW5kLnkpKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBjb25zdCB0ID0gKHkgLSBsaW5lLnN0YXJ0LnkpIC8gKGxpbmUuZW5kLnkgLSBsaW5lLnN0YXJ0LnkpO1xuXG4gIHJldHVybiBsaW5lLnN0YXJ0LnggKyB0ICogKGxpbmUuZW5kLnggLSBsaW5lLnN0YXJ0LngpO1xufVxuXG4vKipcbiAqIEdldCB0aGUgbGVuZ3RoIG9mIGFuIGludGVydmFsXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpbnRlcnZhbExlbmd0aChpbnRlcnZhbDogSW50ZXJ2YWwxZCk6IG51bWJlciB7XG4gIHJldHVybiBpbnRlcnZhbC5lbmQgLSBpbnRlcnZhbC5zdGFydDtcbn1cblxuLyoqXG4gKiBDb252ZXJ0IGEgMmQgaW50ZXJ2YWwgdG8gYSByZWN0YW5nbGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGludGVydmFsVG9SZWN0YW5nbGUoaW50ZXJ2YWw6IEludGVydmFsMmQpOiBSZWN0YW5nbGUge1xuICByZXR1cm4ge1xuICAgIHBvc2l0aW9uOiB2ZWMoaW50ZXJ2YWwubGVmdCwgaW50ZXJ2YWwudG9wKSxcbiAgICBzaXplOiB2ZWMoaW50ZXJ2YWwucmlnaHQgLSBpbnRlcnZhbC5sZWZ0LCBpbnRlcnZhbC5ib3R0b20gLSBpbnRlcnZhbC50b3ApLFxuICB9O1xufVxuXG4vKipcbiAqIENvbnZlcnQgYSByZWN0YW5nbGUgdG8gYSAyZCBpbnRlcnZhbFxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVjdGFuZ2xlVG9JbnRlcnZhbChyZWN0YW5nbGU6IFJlY3RhbmdsZSk6IEludGVydmFsMmQge1xuICByZXR1cm4ge1xuICAgIGxlZnQ6IHJlY3RhbmdsZS5wb3NpdGlvbi54LFxuICAgIHJpZ2h0OiByZWN0YW5nbGUucG9zaXRpb24ueCArIHJlY3RhbmdsZS5zaXplLngsXG4gICAgdG9wOiByZWN0YW5nbGUucG9zaXRpb24ueSxcbiAgICBib3R0b206IHJlY3RhbmdsZS5wb3NpdGlvbi55ICsgcmVjdGFuZ2xlLnNpemUueSxcbiAgfTtcbn1cblxuLyoqXG4gKiBGaW5kIHRoZSBvdmVybGFwIGJldHdlZW4gMiAxZCBpbnRlcnZhbHNcbiAqXG4gKiBJZiB0aGVyZSBpcyBubyBvdmVybGFwLCByZXR1cm4gbnVsbFxuICovXG5leHBvcnQgZnVuY3Rpb24gb3ZlcmxhcDFkKGE6IEludGVydmFsMWQsIGI6IEludGVydmFsMWQpOiBJbnRlcnZhbDFkIHwgbnVsbCB7XG4gIGlmIChhLmVuZCA8IGIuc3RhcnQgfHwgYS5zdGFydCA+IGIuZW5kKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHN0YXJ0OiBNYXRoLm1heChhLnN0YXJ0LCBiLnN0YXJ0KSxcbiAgICBlbmQ6IE1hdGgubWluKGEuZW5kLCBiLmVuZCksXG4gIH07XG59XG5cbi8qKlxuICogRmluZCB0aGUgb3ZlcmxhcCBiZXR3ZWVuIDIgMmQgaW50ZXJ2YWxzXG4gKlxuICogSWYgdGhlcmUgaXMgbm8gb3ZlcmxhcCwgcmV0dXJuIG51bGxcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG92ZXJsYXAyZChhOiBJbnRlcnZhbDJkLCBiOiBJbnRlcnZhbDJkKTogSW50ZXJ2YWwyZCB8IG51bGwge1xuICBjb25zdCB4T3ZlcmxhcCA9IHRoaXMub3ZlcmxhcDFkKGEubGVmdCwgYS5yaWdodCwgYi5sZWZ0LCBiLnJpZ2h0KTtcbiAgY29uc3QgeU92ZXJsYXAgPSB0aGlzLm92ZXJsYXAxZChhLnRvcCwgYS5ib3R0b20sIGIudG9wLCBiLmJvdHRvbSk7XG5cbiAgaWYgKHhPdmVybGFwICYmIHlPdmVybGFwKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGxlZnQ6IHhPdmVybGFwLnN0YXJ0LFxuICAgICAgcmlnaHQ6IHhPdmVybGFwLmVuZCxcbiAgICAgIHRvcDogeU92ZXJsYXAuc3RhcnQsXG4gICAgICBib3R0b206IHlPdmVybGFwLmVuZCxcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbi8qKlxuICogQ2hlY2sgaWYgMiBBQUJCcyBpbnRlcnNlY3RcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlY3RhbmdsZXNJbnRlcnNlY3QoYTogUmVjdGFuZ2xlLCBiOiBSZWN0YW5nbGUpOiBib29sZWFuIHtcbiAgY29uc3QgdGwxID0gYS5wb3NpdGlvbjtcbiAgY29uc3QgYnIxID0gdmVjLmFkZChhLnBvc2l0aW9uLCBhLnNpemUpO1xuICBjb25zdCB0bDIgPSBiLnBvc2l0aW9uO1xuICBjb25zdCBicjIgPSB2ZWMuYWRkKGIucG9zaXRpb24sIGIuc2l6ZSk7XG5cbiAgcmV0dXJuIHRsMS54IDw9IGJyMi54ICYmIGJyMS54ID49IHRsMi54ICYmIHRsMS55IDw9IGJyMi55ICYmIGJyMS55ID49IHRsMi55O1xufVxuXG4vKipcbiAqIEdldCBhbiBhcnJheSBvZiB2ZXJ0aWNlcyBmb3IgYSByZWN0YW5nbGUgaW4gQ1cgd2luZGluZyBvcmRlclxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVjdGFuZ2xlVmVydGljZXMocmVjdGFuZ2xlOiBSZWN0YW5nbGUpOiB2ZWNbXSB7XG4gIGNvbnN0IHRsID0gcmVjdGFuZ2xlLnBvc2l0aW9uO1xuICBjb25zdCBiciA9IHZlYy5hZGQocmVjdGFuZ2xlLnBvc2l0aW9uLCByZWN0YW5nbGUuc2l6ZSk7XG5cbiAgcmV0dXJuIFtyZWN0YW5nbGUucG9zaXRpb24sIHZlYyhici54LCB0bC55KSwgYnIsIHZlYyh0bC54LCBici55KV07XG59XG5cbi8qKlxuICogQ3JlYXRlIGEgcG9seWdvbiBwYXRoIG9uIGEgY2FudmFzIGNvbnRleHRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBvbHlnb24oXG4gIGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCxcbiAgLi4udmVydGljZXM6IFBvbHlnb25WZXJ0aWNlc1xuKSB7XG4gIGlmICh2ZXJ0aWNlcy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb250ZXh0LmJlZ2luUGF0aCgpO1xuICBpZiAodHlwZW9mIHZlcnRpY2VzWzBdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmVydGljZXNbMF0oY29udGV4dCk7XG4gIH0gZWxzZSB7XG4gICAgY29udGV4dC5tb3ZlVG8odmVydGljZXNbMF0ueCwgdmVydGljZXNbMF0ueSk7XG4gIH1cbiAgZm9yIChsZXQgaSA9IDE7IGkgPCB2ZXJ0aWNlcy5sZW5ndGg7IGkrKykge1xuICAgIGlmICh0eXBlb2YgdmVydGljZXNbaV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICh2ZXJ0aWNlc1tpXSBhcyBGdW5jdGlvbikoY29udGV4dCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRleHQubGluZVRvKCh2ZXJ0aWNlc1tpXSBhcyB2ZWMpLngsICh2ZXJ0aWNlc1tpXSBhcyB2ZWMpLnkpO1xuICAgIH1cbiAgfVxuICBjb250ZXh0LmNsb3NlUGF0aCgpO1xufVxuXG4vKipcbiAqIEdldCB0aGUgc2VjdG9yIG9mIGEgcG9pbnQgcmVsYXRpdmUgdG8gYSAxZCBpbnRlcnZhbFxuICovXG5leHBvcnQgZnVuY3Rpb24gc2VjdG9yMWQobjogbnVtYmVyLCBpbnRlcnZhbDogSW50ZXJ2YWwxZCk6IFNlY3RvcjFkIHtcbiAgaWYgKG4gPD0gaW50ZXJ2YWwuc3RhcnQpIHtcbiAgICByZXR1cm4gU2VjdG9yMWQuQmVmb3JlO1xuICB9XG5cbiAgaWYgKG4gPj0gaW50ZXJ2YWwuZW5kKSB7XG4gICAgcmV0dXJuIFNlY3RvcjFkLkFmdGVyO1xuICB9XG5cbiAgcmV0dXJuIFNlY3RvcjFkLkluc2lkZTtcbn1cblxuLyoqXG4gKiBHZXQgdGhlIHNlY3RvciBvZiBhIHBvaW50IHJlbGF0aXZlIHRvIGEgMmQgaW50ZXJ2YWxcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNlY3RvcjJkKHBvaW50OiB2ZWMsIGludGVydmFsOiBJbnRlcnZhbDJkKTogU2VjdG9yMmQge1xuICBjb25zdCB4ID0gc2VjdG9yMWQocG9pbnQueCwgeyBzdGFydDogaW50ZXJ2YWwubGVmdCwgZW5kOiBpbnRlcnZhbC5yaWdodCB9KTtcbiAgY29uc3QgeSA9IHNlY3RvcjFkKHBvaW50LnksIHsgc3RhcnQ6IGludGVydmFsLnRvcCwgZW5kOiBpbnRlcnZhbC5ib3R0b20gfSk7XG5cbiAgcmV0dXJuIHtcbiAgICBbU2VjdG9yMWQuQmVmb3JlXToge1xuICAgICAgW1NlY3RvcjFkLkJlZm9yZV06IFNlY3RvcjJkLlRvcExlZnQsXG4gICAgICBbU2VjdG9yMWQuSW5zaWRlXTogU2VjdG9yMmQuTGVmdCxcbiAgICAgIFtTZWN0b3IxZC5BZnRlcl06IFNlY3RvcjJkLkJvdHRvbUxlZnQsXG4gICAgfSxcbiAgICBbU2VjdG9yMWQuSW5zaWRlXToge1xuICAgICAgW1NlY3RvcjFkLkJlZm9yZV06IFNlY3RvcjJkLlRvcCxcbiAgICAgIFtTZWN0b3IxZC5JbnNpZGVdOiBTZWN0b3IyZC5JbnNpZGUsXG4gICAgICBbU2VjdG9yMWQuQWZ0ZXJdOiBTZWN0b3IyZC5Cb3R0b20sXG4gICAgfSxcbiAgICBbU2VjdG9yMWQuQWZ0ZXJdOiB7XG4gICAgICBbU2VjdG9yMWQuQmVmb3JlXTogU2VjdG9yMmQuVG9wUmlnaHQsXG4gICAgICBbU2VjdG9yMWQuSW5zaWRlXTogU2VjdG9yMmQuUmlnaHQsXG4gICAgICBbU2VjdG9yMWQuQWZ0ZXJdOiBTZWN0b3IyZC5Cb3R0b21SaWdodCxcbiAgICB9LFxuICB9W3hdW3ldO1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJNQVhcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX21heC5kZWZhdWx0O1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIk5JTFwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfbmlsLmRlZmF1bHQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwicGFyc2VcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX3BhcnNlLmRlZmF1bHQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwic3RyaW5naWZ5XCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9zdHJpbmdpZnkuZGVmYXVsdDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJ2MVwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfdi5kZWZhdWx0O1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcInYxVG9WNlwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfdjFUb1YuZGVmYXVsdDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJ2M1wiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfdjIuZGVmYXVsdDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJ2NFwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfdjMuZGVmYXVsdDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJ2NVwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfdjQuZGVmYXVsdDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJ2NlwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfdjUuZGVmYXVsdDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJ2NlRvVjFcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX3Y2VG9WLmRlZmF1bHQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwidjdcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX3Y2LmRlZmF1bHQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwidmFsaWRhdGVcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX3ZhbGlkYXRlLmRlZmF1bHQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwidmVyc2lvblwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfdmVyc2lvbi5kZWZhdWx0O1xuICB9XG59KTtcbnZhciBfbWF4ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9tYXguanNcIikpO1xudmFyIF9uaWwgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL25pbC5qc1wiKSk7XG52YXIgX3BhcnNlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9wYXJzZS5qc1wiKSk7XG52YXIgX3N0cmluZ2lmeSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vc3RyaW5naWZ5LmpzXCIpKTtcbnZhciBfdiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdjEuanNcIikpO1xudmFyIF92MVRvViA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdjFUb1Y2LmpzXCIpKTtcbnZhciBfdjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3YzLmpzXCIpKTtcbnZhciBfdjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3Y0LmpzXCIpKTtcbnZhciBfdjQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3Y1LmpzXCIpKTtcbnZhciBfdjUgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3Y2LmpzXCIpKTtcbnZhciBfdjZUb1YgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3Y2VG9WMS5qc1wiKSk7XG52YXIgX3Y2ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi92Ny5qc1wiKSk7XG52YXIgX3ZhbGlkYXRlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi92YWxpZGF0ZS5qc1wiKSk7XG52YXIgX3ZlcnNpb24gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3ZlcnNpb24uanNcIikpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChlKSB7IHJldHVybiBlICYmIGUuX19lc01vZHVsZSA/IGUgOiB7IGRlZmF1bHQ6IGUgfTsgfSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIF9kZWZhdWx0ID0gZXhwb3J0cy5kZWZhdWx0ID0gJ2ZmZmZmZmZmLWZmZmYtZmZmZi1mZmZmLWZmZmZmZmZmZmZmZic7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG4vKlxuICogQnJvd3Nlci1jb21wYXRpYmxlIEphdmFTY3JpcHQgTUQ1XG4gKlxuICogTW9kaWZpY2F0aW9uIG9mIEphdmFTY3JpcHQgTUQ1XG4gKiBodHRwczovL2dpdGh1Yi5jb20vYmx1ZWltcC9KYXZhU2NyaXB0LU1ENVxuICpcbiAqIENvcHlyaWdodCAyMDExLCBTZWJhc3RpYW4gVHNjaGFuXG4gKiBodHRwczovL2JsdWVpbXAubmV0XG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlOlxuICogaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiAqXG4gKiBCYXNlZCBvblxuICogQSBKYXZhU2NyaXB0IGltcGxlbWVudGF0aW9uIG9mIHRoZSBSU0EgRGF0YSBTZWN1cml0eSwgSW5jLiBNRDUgTWVzc2FnZVxuICogRGlnZXN0IEFsZ29yaXRobSwgYXMgZGVmaW5lZCBpbiBSRkMgMTMyMS5cbiAqIFZlcnNpb24gMi4yIENvcHlyaWdodCAoQykgUGF1bCBKb2huc3RvbiAxOTk5IC0gMjAwOVxuICogT3RoZXIgY29udHJpYnV0b3JzOiBHcmVnIEhvbHQsIEFuZHJldyBLZXBlcnQsIFlkbmFyLCBMb3N0aW5ldFxuICogRGlzdHJpYnV0ZWQgdW5kZXIgdGhlIEJTRCBMaWNlbnNlXG4gKiBTZWUgaHR0cDovL3BhamhvbWUub3JnLnVrL2NyeXB0L21kNSBmb3IgbW9yZSBpbmZvLlxuICovXG5mdW5jdGlvbiBtZDUoYnl0ZXMpIHtcbiAgaWYgKHR5cGVvZiBieXRlcyA9PT0gJ3N0cmluZycpIHtcbiAgICB2YXIgbXNnID0gdW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KGJ5dGVzKSk7IC8vIFVURjggZXNjYXBlXG5cbiAgICBieXRlcyA9IG5ldyBVaW50OEFycmF5KG1zZy5sZW5ndGgpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbXNnLmxlbmd0aDsgKytpKSB7XG4gICAgICBieXRlc1tpXSA9IG1zZy5jaGFyQ29kZUF0KGkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbWQ1VG9IZXhFbmNvZGVkQXJyYXkod29yZHNUb01kNShieXRlc1RvV29yZHMoYnl0ZXMpLCBieXRlcy5sZW5ndGggKiA4KSk7XG59XG5cbi8qXG4gKiBDb252ZXJ0IGFuIGFycmF5IG9mIGxpdHRsZS1lbmRpYW4gd29yZHMgdG8gYW4gYXJyYXkgb2YgYnl0ZXNcbiAqL1xuZnVuY3Rpb24gbWQ1VG9IZXhFbmNvZGVkQXJyYXkoaW5wdXQpIHtcbiAgdmFyIG91dHB1dCA9IFtdO1xuICB2YXIgbGVuZ3RoMzIgPSBpbnB1dC5sZW5ndGggKiAzMjtcbiAgdmFyIGhleFRhYiA9ICcwMTIzNDU2Nzg5YWJjZGVmJztcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGgzMjsgaSArPSA4KSB7XG4gICAgdmFyIHggPSBpbnB1dFtpID4+IDVdID4+PiBpICUgMzIgJiAweGZmO1xuICAgIHZhciBoZXggPSBwYXJzZUludChoZXhUYWIuY2hhckF0KHggPj4+IDQgJiAweDBmKSArIGhleFRhYi5jaGFyQXQoeCAmIDB4MGYpLCAxNik7XG4gICAgb3V0cHV0LnB1c2goaGV4KTtcbiAgfVxuICByZXR1cm4gb3V0cHV0O1xufVxuXG4vKipcbiAqIENhbGN1bGF0ZSBvdXRwdXQgbGVuZ3RoIHdpdGggcGFkZGluZyBhbmQgYml0IGxlbmd0aFxuICovXG5mdW5jdGlvbiBnZXRPdXRwdXRMZW5ndGgoaW5wdXRMZW5ndGg4KSB7XG4gIHJldHVybiAoaW5wdXRMZW5ndGg4ICsgNjQgPj4+IDkgPDwgNCkgKyAxNCArIDE7XG59XG5cbi8qXG4gKiBDYWxjdWxhdGUgdGhlIE1ENSBvZiBhbiBhcnJheSBvZiBsaXR0bGUtZW5kaWFuIHdvcmRzLCBhbmQgYSBiaXQgbGVuZ3RoLlxuICovXG5mdW5jdGlvbiB3b3Jkc1RvTWQ1KHgsIGxlbikge1xuICAvKiBhcHBlbmQgcGFkZGluZyAqL1xuICB4W2xlbiA+PiA1XSB8PSAweDgwIDw8IGxlbiAlIDMyO1xuICB4W2dldE91dHB1dExlbmd0aChsZW4pIC0gMV0gPSBsZW47XG4gIHZhciBhID0gMTczMjU4NDE5MztcbiAgdmFyIGIgPSAtMjcxNzMzODc5O1xuICB2YXIgYyA9IC0xNzMyNTg0MTk0O1xuICB2YXIgZCA9IDI3MTczMzg3ODtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB4Lmxlbmd0aDsgaSArPSAxNikge1xuICAgIHZhciBvbGRhID0gYTtcbiAgICB2YXIgb2xkYiA9IGI7XG4gICAgdmFyIG9sZGMgPSBjO1xuICAgIHZhciBvbGRkID0gZDtcbiAgICBhID0gbWQ1ZmYoYSwgYiwgYywgZCwgeFtpXSwgNywgLTY4MDg3NjkzNik7XG4gICAgZCA9IG1kNWZmKGQsIGEsIGIsIGMsIHhbaSArIDFdLCAxMiwgLTM4OTU2NDU4Nik7XG4gICAgYyA9IG1kNWZmKGMsIGQsIGEsIGIsIHhbaSArIDJdLCAxNywgNjA2MTA1ODE5KTtcbiAgICBiID0gbWQ1ZmYoYiwgYywgZCwgYSwgeFtpICsgM10sIDIyLCAtMTA0NDUyNTMzMCk7XG4gICAgYSA9IG1kNWZmKGEsIGIsIGMsIGQsIHhbaSArIDRdLCA3LCAtMTc2NDE4ODk3KTtcbiAgICBkID0gbWQ1ZmYoZCwgYSwgYiwgYywgeFtpICsgNV0sIDEyLCAxMjAwMDgwNDI2KTtcbiAgICBjID0gbWQ1ZmYoYywgZCwgYSwgYiwgeFtpICsgNl0sIDE3LCAtMTQ3MzIzMTM0MSk7XG4gICAgYiA9IG1kNWZmKGIsIGMsIGQsIGEsIHhbaSArIDddLCAyMiwgLTQ1NzA1OTgzKTtcbiAgICBhID0gbWQ1ZmYoYSwgYiwgYywgZCwgeFtpICsgOF0sIDcsIDE3NzAwMzU0MTYpO1xuICAgIGQgPSBtZDVmZihkLCBhLCBiLCBjLCB4W2kgKyA5XSwgMTIsIC0xOTU4NDE0NDE3KTtcbiAgICBjID0gbWQ1ZmYoYywgZCwgYSwgYiwgeFtpICsgMTBdLCAxNywgLTQyMDYzKTtcbiAgICBiID0gbWQ1ZmYoYiwgYywgZCwgYSwgeFtpICsgMTFdLCAyMiwgLTE5OTA0MDQxNjIpO1xuICAgIGEgPSBtZDVmZihhLCBiLCBjLCBkLCB4W2kgKyAxMl0sIDcsIDE4MDQ2MDM2ODIpO1xuICAgIGQgPSBtZDVmZihkLCBhLCBiLCBjLCB4W2kgKyAxM10sIDEyLCAtNDAzNDExMDEpO1xuICAgIGMgPSBtZDVmZihjLCBkLCBhLCBiLCB4W2kgKyAxNF0sIDE3LCAtMTUwMjAwMjI5MCk7XG4gICAgYiA9IG1kNWZmKGIsIGMsIGQsIGEsIHhbaSArIDE1XSwgMjIsIDEyMzY1MzUzMjkpO1xuICAgIGEgPSBtZDVnZyhhLCBiLCBjLCBkLCB4W2kgKyAxXSwgNSwgLTE2NTc5NjUxMCk7XG4gICAgZCA9IG1kNWdnKGQsIGEsIGIsIGMsIHhbaSArIDZdLCA5LCAtMTA2OTUwMTYzMik7XG4gICAgYyA9IG1kNWdnKGMsIGQsIGEsIGIsIHhbaSArIDExXSwgMTQsIDY0MzcxNzcxMyk7XG4gICAgYiA9IG1kNWdnKGIsIGMsIGQsIGEsIHhbaV0sIDIwLCAtMzczODk3MzAyKTtcbiAgICBhID0gbWQ1Z2coYSwgYiwgYywgZCwgeFtpICsgNV0sIDUsIC03MDE1NTg2OTEpO1xuICAgIGQgPSBtZDVnZyhkLCBhLCBiLCBjLCB4W2kgKyAxMF0sIDksIDM4MDE2MDgzKTtcbiAgICBjID0gbWQ1Z2coYywgZCwgYSwgYiwgeFtpICsgMTVdLCAxNCwgLTY2MDQ3ODMzNSk7XG4gICAgYiA9IG1kNWdnKGIsIGMsIGQsIGEsIHhbaSArIDRdLCAyMCwgLTQwNTUzNzg0OCk7XG4gICAgYSA9IG1kNWdnKGEsIGIsIGMsIGQsIHhbaSArIDldLCA1LCA1Njg0NDY0MzgpO1xuICAgIGQgPSBtZDVnZyhkLCBhLCBiLCBjLCB4W2kgKyAxNF0sIDksIC0xMDE5ODAzNjkwKTtcbiAgICBjID0gbWQ1Z2coYywgZCwgYSwgYiwgeFtpICsgM10sIDE0LCAtMTg3MzYzOTYxKTtcbiAgICBiID0gbWQ1Z2coYiwgYywgZCwgYSwgeFtpICsgOF0sIDIwLCAxMTYzNTMxNTAxKTtcbiAgICBhID0gbWQ1Z2coYSwgYiwgYywgZCwgeFtpICsgMTNdLCA1LCAtMTQ0NDY4MTQ2Nyk7XG4gICAgZCA9IG1kNWdnKGQsIGEsIGIsIGMsIHhbaSArIDJdLCA5LCAtNTE0MDM3ODQpO1xuICAgIGMgPSBtZDVnZyhjLCBkLCBhLCBiLCB4W2kgKyA3XSwgMTQsIDE3MzUzMjg0NzMpO1xuICAgIGIgPSBtZDVnZyhiLCBjLCBkLCBhLCB4W2kgKyAxMl0sIDIwLCAtMTkyNjYwNzczNCk7XG4gICAgYSA9IG1kNWhoKGEsIGIsIGMsIGQsIHhbaSArIDVdLCA0LCAtMzc4NTU4KTtcbiAgICBkID0gbWQ1aGgoZCwgYSwgYiwgYywgeFtpICsgOF0sIDExLCAtMjAyMjU3NDQ2Myk7XG4gICAgYyA9IG1kNWhoKGMsIGQsIGEsIGIsIHhbaSArIDExXSwgMTYsIDE4MzkwMzA1NjIpO1xuICAgIGIgPSBtZDVoaChiLCBjLCBkLCBhLCB4W2kgKyAxNF0sIDIzLCAtMzUzMDk1NTYpO1xuICAgIGEgPSBtZDVoaChhLCBiLCBjLCBkLCB4W2kgKyAxXSwgNCwgLTE1MzA5OTIwNjApO1xuICAgIGQgPSBtZDVoaChkLCBhLCBiLCBjLCB4W2kgKyA0XSwgMTEsIDEyNzI4OTMzNTMpO1xuICAgIGMgPSBtZDVoaChjLCBkLCBhLCBiLCB4W2kgKyA3XSwgMTYsIC0xNTU0OTc2MzIpO1xuICAgIGIgPSBtZDVoaChiLCBjLCBkLCBhLCB4W2kgKyAxMF0sIDIzLCAtMTA5NDczMDY0MCk7XG4gICAgYSA9IG1kNWhoKGEsIGIsIGMsIGQsIHhbaSArIDEzXSwgNCwgNjgxMjc5MTc0KTtcbiAgICBkID0gbWQ1aGgoZCwgYSwgYiwgYywgeFtpXSwgMTEsIC0zNTg1MzcyMjIpO1xuICAgIGMgPSBtZDVoaChjLCBkLCBhLCBiLCB4W2kgKyAzXSwgMTYsIC03MjI1MjE5NzkpO1xuICAgIGIgPSBtZDVoaChiLCBjLCBkLCBhLCB4W2kgKyA2XSwgMjMsIDc2MDI5MTg5KTtcbiAgICBhID0gbWQ1aGgoYSwgYiwgYywgZCwgeFtpICsgOV0sIDQsIC02NDAzNjQ0ODcpO1xuICAgIGQgPSBtZDVoaChkLCBhLCBiLCBjLCB4W2kgKyAxMl0sIDExLCAtNDIxODE1ODM1KTtcbiAgICBjID0gbWQ1aGgoYywgZCwgYSwgYiwgeFtpICsgMTVdLCAxNiwgNTMwNzQyNTIwKTtcbiAgICBiID0gbWQ1aGgoYiwgYywgZCwgYSwgeFtpICsgMl0sIDIzLCAtOTk1MzM4NjUxKTtcbiAgICBhID0gbWQ1aWkoYSwgYiwgYywgZCwgeFtpXSwgNiwgLTE5ODYzMDg0NCk7XG4gICAgZCA9IG1kNWlpKGQsIGEsIGIsIGMsIHhbaSArIDddLCAxMCwgMTEyNjg5MTQxNSk7XG4gICAgYyA9IG1kNWlpKGMsIGQsIGEsIGIsIHhbaSArIDE0XSwgMTUsIC0xNDE2MzU0OTA1KTtcbiAgICBiID0gbWQ1aWkoYiwgYywgZCwgYSwgeFtpICsgNV0sIDIxLCAtNTc0MzQwNTUpO1xuICAgIGEgPSBtZDVpaShhLCBiLCBjLCBkLCB4W2kgKyAxMl0sIDYsIDE3MDA0ODU1NzEpO1xuICAgIGQgPSBtZDVpaShkLCBhLCBiLCBjLCB4W2kgKyAzXSwgMTAsIC0xODk0OTg2NjA2KTtcbiAgICBjID0gbWQ1aWkoYywgZCwgYSwgYiwgeFtpICsgMTBdLCAxNSwgLTEwNTE1MjMpO1xuICAgIGIgPSBtZDVpaShiLCBjLCBkLCBhLCB4W2kgKyAxXSwgMjEsIC0yMDU0OTIyNzk5KTtcbiAgICBhID0gbWQ1aWkoYSwgYiwgYywgZCwgeFtpICsgOF0sIDYsIDE4NzMzMTMzNTkpO1xuICAgIGQgPSBtZDVpaShkLCBhLCBiLCBjLCB4W2kgKyAxNV0sIDEwLCAtMzA2MTE3NDQpO1xuICAgIGMgPSBtZDVpaShjLCBkLCBhLCBiLCB4W2kgKyA2XSwgMTUsIC0xNTYwMTk4MzgwKTtcbiAgICBiID0gbWQ1aWkoYiwgYywgZCwgYSwgeFtpICsgMTNdLCAyMSwgMTMwOTE1MTY0OSk7XG4gICAgYSA9IG1kNWlpKGEsIGIsIGMsIGQsIHhbaSArIDRdLCA2LCAtMTQ1NTIzMDcwKTtcbiAgICBkID0gbWQ1aWkoZCwgYSwgYiwgYywgeFtpICsgMTFdLCAxMCwgLTExMjAyMTAzNzkpO1xuICAgIGMgPSBtZDVpaShjLCBkLCBhLCBiLCB4W2kgKyAyXSwgMTUsIDcxODc4NzI1OSk7XG4gICAgYiA9IG1kNWlpKGIsIGMsIGQsIGEsIHhbaSArIDldLCAyMSwgLTM0MzQ4NTU1MSk7XG4gICAgYSA9IHNhZmVBZGQoYSwgb2xkYSk7XG4gICAgYiA9IHNhZmVBZGQoYiwgb2xkYik7XG4gICAgYyA9IHNhZmVBZGQoYywgb2xkYyk7XG4gICAgZCA9IHNhZmVBZGQoZCwgb2xkZCk7XG4gIH1cbiAgcmV0dXJuIFthLCBiLCBjLCBkXTtcbn1cblxuLypcbiAqIENvbnZlcnQgYW4gYXJyYXkgYnl0ZXMgdG8gYW4gYXJyYXkgb2YgbGl0dGxlLWVuZGlhbiB3b3Jkc1xuICogQ2hhcmFjdGVycyA+MjU1IGhhdmUgdGhlaXIgaGlnaC1ieXRlIHNpbGVudGx5IGlnbm9yZWQuXG4gKi9cbmZ1bmN0aW9uIGJ5dGVzVG9Xb3JkcyhpbnB1dCkge1xuICBpZiAoaW5wdXQubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG4gIHZhciBsZW5ndGg4ID0gaW5wdXQubGVuZ3RoICogODtcbiAgdmFyIG91dHB1dCA9IG5ldyBVaW50MzJBcnJheShnZXRPdXRwdXRMZW5ndGgobGVuZ3RoOCkpO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDg7IGkgKz0gOCkge1xuICAgIG91dHB1dFtpID4+IDVdIHw9IChpbnB1dFtpIC8gOF0gJiAweGZmKSA8PCBpICUgMzI7XG4gIH1cbiAgcmV0dXJuIG91dHB1dDtcbn1cblxuLypcbiAqIEFkZCBpbnRlZ2Vycywgd3JhcHBpbmcgYXQgMl4zMi4gVGhpcyB1c2VzIDE2LWJpdCBvcGVyYXRpb25zIGludGVybmFsbHlcbiAqIHRvIHdvcmsgYXJvdW5kIGJ1Z3MgaW4gc29tZSBKUyBpbnRlcnByZXRlcnMuXG4gKi9cbmZ1bmN0aW9uIHNhZmVBZGQoeCwgeSkge1xuICB2YXIgbHN3ID0gKHggJiAweGZmZmYpICsgKHkgJiAweGZmZmYpO1xuICB2YXIgbXN3ID0gKHggPj4gMTYpICsgKHkgPj4gMTYpICsgKGxzdyA+PiAxNik7XG4gIHJldHVybiBtc3cgPDwgMTYgfCBsc3cgJiAweGZmZmY7XG59XG5cbi8qXG4gKiBCaXR3aXNlIHJvdGF0ZSBhIDMyLWJpdCBudW1iZXIgdG8gdGhlIGxlZnQuXG4gKi9cbmZ1bmN0aW9uIGJpdFJvdGF0ZUxlZnQobnVtLCBjbnQpIHtcbiAgcmV0dXJuIG51bSA8PCBjbnQgfCBudW0gPj4+IDMyIC0gY250O1xufVxuXG4vKlxuICogVGhlc2UgZnVuY3Rpb25zIGltcGxlbWVudCB0aGUgZm91ciBiYXNpYyBvcGVyYXRpb25zIHRoZSBhbGdvcml0aG0gdXNlcy5cbiAqL1xuZnVuY3Rpb24gbWQ1Y21uKHEsIGEsIGIsIHgsIHMsIHQpIHtcbiAgcmV0dXJuIHNhZmVBZGQoYml0Um90YXRlTGVmdChzYWZlQWRkKHNhZmVBZGQoYSwgcSksIHNhZmVBZGQoeCwgdCkpLCBzKSwgYik7XG59XG5mdW5jdGlvbiBtZDVmZihhLCBiLCBjLCBkLCB4LCBzLCB0KSB7XG4gIHJldHVybiBtZDVjbW4oYiAmIGMgfCB+YiAmIGQsIGEsIGIsIHgsIHMsIHQpO1xufVxuZnVuY3Rpb24gbWQ1Z2coYSwgYiwgYywgZCwgeCwgcywgdCkge1xuICByZXR1cm4gbWQ1Y21uKGIgJiBkIHwgYyAmIH5kLCBhLCBiLCB4LCBzLCB0KTtcbn1cbmZ1bmN0aW9uIG1kNWhoKGEsIGIsIGMsIGQsIHgsIHMsIHQpIHtcbiAgcmV0dXJuIG1kNWNtbihiIF4gYyBeIGQsIGEsIGIsIHgsIHMsIHQpO1xufVxuZnVuY3Rpb24gbWQ1aWkoYSwgYiwgYywgZCwgeCwgcywgdCkge1xuICByZXR1cm4gbWQ1Y21uKGMgXiAoYiB8IH5kKSwgYSwgYiwgeCwgcywgdCk7XG59XG52YXIgX2RlZmF1bHQgPSBleHBvcnRzLmRlZmF1bHQgPSBtZDU7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgcmFuZG9tVVVJRCA9IHR5cGVvZiBjcnlwdG8gIT09ICd1bmRlZmluZWQnICYmIGNyeXB0by5yYW5kb21VVUlEICYmIGNyeXB0by5yYW5kb21VVUlELmJpbmQoY3J5cHRvKTtcbnZhciBfZGVmYXVsdCA9IGV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgcmFuZG9tVVVJRFxufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfZGVmYXVsdCA9IGV4cG9ydHMuZGVmYXVsdCA9ICcwMDAwMDAwMC0wMDAwLTAwMDAtMDAwMC0wMDAwMDAwMDAwMDAnOyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIF92YWxpZGF0ZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdmFsaWRhdGUuanNcIikpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChlKSB7IHJldHVybiBlICYmIGUuX19lc01vZHVsZSA/IGUgOiB7IGRlZmF1bHQ6IGUgfTsgfVxuZnVuY3Rpb24gcGFyc2UodXVpZCkge1xuICBpZiAoISgwLCBfdmFsaWRhdGUuZGVmYXVsdCkodXVpZCkpIHtcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ0ludmFsaWQgVVVJRCcpO1xuICB9XG4gIHZhciB2O1xuICB2YXIgYXJyID0gbmV3IFVpbnQ4QXJyYXkoMTYpO1xuXG4gIC8vIFBhcnNlICMjIyMjIyMjLS4uLi4tLi4uLi0uLi4uLS4uLi4uLi4uLi4uLlxuICBhcnJbMF0gPSAodiA9IHBhcnNlSW50KHV1aWQuc2xpY2UoMCwgOCksIDE2KSkgPj4+IDI0O1xuICBhcnJbMV0gPSB2ID4+PiAxNiAmIDB4ZmY7XG4gIGFyclsyXSA9IHYgPj4+IDggJiAweGZmO1xuICBhcnJbM10gPSB2ICYgMHhmZjtcblxuICAvLyBQYXJzZSAuLi4uLi4uLi0jIyMjLS4uLi4tLi4uLi0uLi4uLi4uLi4uLi5cbiAgYXJyWzRdID0gKHYgPSBwYXJzZUludCh1dWlkLnNsaWNlKDksIDEzKSwgMTYpKSA+Pj4gODtcbiAgYXJyWzVdID0gdiAmIDB4ZmY7XG5cbiAgLy8gUGFyc2UgLi4uLi4uLi4tLi4uLi0jIyMjLS4uLi4tLi4uLi4uLi4uLi4uXG4gIGFycls2XSA9ICh2ID0gcGFyc2VJbnQodXVpZC5zbGljZSgxNCwgMTgpLCAxNikpID4+PiA4O1xuICBhcnJbN10gPSB2ICYgMHhmZjtcblxuICAvLyBQYXJzZSAuLi4uLi4uLi0uLi4uLS4uLi4tIyMjIy0uLi4uLi4uLi4uLi5cbiAgYXJyWzhdID0gKHYgPSBwYXJzZUludCh1dWlkLnNsaWNlKDE5LCAyMyksIDE2KSkgPj4+IDg7XG4gIGFycls5XSA9IHYgJiAweGZmO1xuXG4gIC8vIFBhcnNlIC4uLi4uLi4uLS4uLi4tLi4uLi0uLi4uLSMjIyMjIyMjIyMjI1xuICAvLyAoVXNlIFwiL1wiIHRvIGF2b2lkIDMyLWJpdCB0cnVuY2F0aW9uIHdoZW4gYml0LXNoaWZ0aW5nIGhpZ2gtb3JkZXIgYnl0ZXMpXG4gIGFyclsxMF0gPSAodiA9IHBhcnNlSW50KHV1aWQuc2xpY2UoMjQsIDM2KSwgMTYpKSAvIDB4MTAwMDAwMDAwMDAgJiAweGZmO1xuICBhcnJbMTFdID0gdiAvIDB4MTAwMDAwMDAwICYgMHhmZjtcbiAgYXJyWzEyXSA9IHYgPj4+IDI0ICYgMHhmZjtcbiAgYXJyWzEzXSA9IHYgPj4+IDE2ICYgMHhmZjtcbiAgYXJyWzE0XSA9IHYgPj4+IDggJiAweGZmO1xuICBhcnJbMTVdID0gdiAmIDB4ZmY7XG4gIHJldHVybiBhcnI7XG59XG52YXIgX2RlZmF1bHQgPSBleHBvcnRzLmRlZmF1bHQgPSBwYXJzZTsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfZGVmYXVsdCA9IGV4cG9ydHMuZGVmYXVsdCA9IC9eKD86WzAtOWEtZl17OH0tWzAtOWEtZl17NH0tWzEtOF1bMC05YS1mXXszfS1bODlhYl1bMC05YS1mXXszfS1bMC05YS1mXXsxMn18MDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDAwMDAwMDAwfGZmZmZmZmZmLWZmZmYtZmZmZi1mZmZmLWZmZmZmZmZmZmZmZikkL2k7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBybmc7XG4vLyBVbmlxdWUgSUQgY3JlYXRpb24gcmVxdWlyZXMgYSBoaWdoIHF1YWxpdHkgcmFuZG9tICMgZ2VuZXJhdG9yLiBJbiB0aGUgYnJvd3NlciB3ZSB0aGVyZWZvcmVcbi8vIHJlcXVpcmUgdGhlIGNyeXB0byBBUEkgYW5kIGRvIG5vdCBzdXBwb3J0IGJ1aWx0LWluIGZhbGxiYWNrIHRvIGxvd2VyIHF1YWxpdHkgcmFuZG9tIG51bWJlclxuLy8gZ2VuZXJhdG9ycyAobGlrZSBNYXRoLnJhbmRvbSgpKS5cblxudmFyIGdldFJhbmRvbVZhbHVlcztcbnZhciBybmRzOCA9IG5ldyBVaW50OEFycmF5KDE2KTtcbmZ1bmN0aW9uIHJuZygpIHtcbiAgLy8gbGF6eSBsb2FkIHNvIHRoYXQgZW52aXJvbm1lbnRzIHRoYXQgbmVlZCB0byBwb2x5ZmlsbCBoYXZlIGEgY2hhbmNlIHRvIGRvIHNvXG4gIGlmICghZ2V0UmFuZG9tVmFsdWVzKSB7XG4gICAgLy8gZ2V0UmFuZG9tVmFsdWVzIG5lZWRzIHRvIGJlIGludm9rZWQgaW4gYSBjb250ZXh0IHdoZXJlIFwidGhpc1wiIGlzIGEgQ3J5cHRvIGltcGxlbWVudGF0aW9uLlxuICAgIGdldFJhbmRvbVZhbHVlcyA9IHR5cGVvZiBjcnlwdG8gIT09ICd1bmRlZmluZWQnICYmIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMgJiYgY3J5cHRvLmdldFJhbmRvbVZhbHVlcy5iaW5kKGNyeXB0byk7XG4gICAgaWYgKCFnZXRSYW5kb21WYWx1ZXMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignY3J5cHRvLmdldFJhbmRvbVZhbHVlcygpIG5vdCBzdXBwb3J0ZWQuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdXVpZGpzL3V1aWQjZ2V0cmFuZG9tdmFsdWVzLW5vdC1zdXBwb3J0ZWQnKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGdldFJhbmRvbVZhbHVlcyhybmRzOCk7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG4vLyBBZGFwdGVkIGZyb20gQ2hyaXMgVmVuZXNzJyBTSEExIGNvZGUgYXRcbi8vIGh0dHA6Ly93d3cubW92YWJsZS10eXBlLmNvLnVrL3NjcmlwdHMvc2hhMS5odG1sXG5mdW5jdGlvbiBmKHMsIHgsIHksIHopIHtcbiAgc3dpdGNoIChzKSB7XG4gICAgY2FzZSAwOlxuICAgICAgcmV0dXJuIHggJiB5IF4gfnggJiB6O1xuICAgIGNhc2UgMTpcbiAgICAgIHJldHVybiB4IF4geSBeIHo7XG4gICAgY2FzZSAyOlxuICAgICAgcmV0dXJuIHggJiB5IF4geCAmIHogXiB5ICYgejtcbiAgICBjYXNlIDM6XG4gICAgICByZXR1cm4geCBeIHkgXiB6O1xuICB9XG59XG5mdW5jdGlvbiBST1RMKHgsIG4pIHtcbiAgcmV0dXJuIHggPDwgbiB8IHggPj4+IDMyIC0gbjtcbn1cbmZ1bmN0aW9uIHNoYTEoYnl0ZXMpIHtcbiAgdmFyIEsgPSBbMHg1YTgyNzk5OSwgMHg2ZWQ5ZWJhMSwgMHg4ZjFiYmNkYywgMHhjYTYyYzFkNl07XG4gIHZhciBIID0gWzB4Njc0NTIzMDEsIDB4ZWZjZGFiODksIDB4OThiYWRjZmUsIDB4MTAzMjU0NzYsIDB4YzNkMmUxZjBdO1xuICBpZiAodHlwZW9mIGJ5dGVzID09PSAnc3RyaW5nJykge1xuICAgIHZhciBtc2cgPSB1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoYnl0ZXMpKTsgLy8gVVRGOCBlc2NhcGVcblxuICAgIGJ5dGVzID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtc2cubGVuZ3RoOyArK2kpIHtcbiAgICAgIGJ5dGVzLnB1c2gobXNnLmNoYXJDb2RlQXQoaSkpO1xuICAgIH1cbiAgfSBlbHNlIGlmICghQXJyYXkuaXNBcnJheShieXRlcykpIHtcbiAgICAvLyBDb252ZXJ0IEFycmF5LWxpa2UgdG8gQXJyYXlcbiAgICBieXRlcyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGJ5dGVzKTtcbiAgfVxuICBieXRlcy5wdXNoKDB4ODApO1xuICB2YXIgbCA9IGJ5dGVzLmxlbmd0aCAvIDQgKyAyO1xuICB2YXIgTiA9IE1hdGguY2VpbChsIC8gMTYpO1xuICB2YXIgTSA9IG5ldyBBcnJheShOKTtcbiAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IE47ICsrX2kpIHtcbiAgICB2YXIgYXJyID0gbmV3IFVpbnQzMkFycmF5KDE2KTtcbiAgICBmb3IgKHZhciBqID0gMDsgaiA8IDE2OyArK2opIHtcbiAgICAgIGFycltqXSA9IGJ5dGVzW19pICogNjQgKyBqICogNF0gPDwgMjQgfCBieXRlc1tfaSAqIDY0ICsgaiAqIDQgKyAxXSA8PCAxNiB8IGJ5dGVzW19pICogNjQgKyBqICogNCArIDJdIDw8IDggfCBieXRlc1tfaSAqIDY0ICsgaiAqIDQgKyAzXTtcbiAgICB9XG4gICAgTVtfaV0gPSBhcnI7XG4gIH1cbiAgTVtOIC0gMV1bMTRdID0gKGJ5dGVzLmxlbmd0aCAtIDEpICogOCAvIE1hdGgucG93KDIsIDMyKTtcbiAgTVtOIC0gMV1bMTRdID0gTWF0aC5mbG9vcihNW04gLSAxXVsxNF0pO1xuICBNW04gLSAxXVsxNV0gPSAoYnl0ZXMubGVuZ3RoIC0gMSkgKiA4ICYgMHhmZmZmZmZmZjtcbiAgZm9yICh2YXIgX2kyID0gMDsgX2kyIDwgTjsgKytfaTIpIHtcbiAgICB2YXIgVyA9IG5ldyBVaW50MzJBcnJheSg4MCk7XG4gICAgZm9yICh2YXIgdCA9IDA7IHQgPCAxNjsgKyt0KSB7XG4gICAgICBXW3RdID0gTVtfaTJdW3RdO1xuICAgIH1cbiAgICBmb3IgKHZhciBfdCA9IDE2OyBfdCA8IDgwOyArK190KSB7XG4gICAgICBXW190XSA9IFJPVEwoV1tfdCAtIDNdIF4gV1tfdCAtIDhdIF4gV1tfdCAtIDE0XSBeIFdbX3QgLSAxNl0sIDEpO1xuICAgIH1cbiAgICB2YXIgYSA9IEhbMF07XG4gICAgdmFyIGIgPSBIWzFdO1xuICAgIHZhciBjID0gSFsyXTtcbiAgICB2YXIgZCA9IEhbM107XG4gICAgdmFyIGUgPSBIWzRdO1xuICAgIGZvciAodmFyIF90MiA9IDA7IF90MiA8IDgwOyArK190Mikge1xuICAgICAgdmFyIHMgPSBNYXRoLmZsb29yKF90MiAvIDIwKTtcbiAgICAgIHZhciBUID0gUk9UTChhLCA1KSArIGYocywgYiwgYywgZCkgKyBlICsgS1tzXSArIFdbX3QyXSA+Pj4gMDtcbiAgICAgIGUgPSBkO1xuICAgICAgZCA9IGM7XG4gICAgICBjID0gUk9UTChiLCAzMCkgPj4+IDA7XG4gICAgICBiID0gYTtcbiAgICAgIGEgPSBUO1xuICAgIH1cbiAgICBIWzBdID0gSFswXSArIGEgPj4+IDA7XG4gICAgSFsxXSA9IEhbMV0gKyBiID4+PiAwO1xuICAgIEhbMl0gPSBIWzJdICsgYyA+Pj4gMDtcbiAgICBIWzNdID0gSFszXSArIGQgPj4+IDA7XG4gICAgSFs0XSA9IEhbNF0gKyBlID4+PiAwO1xuICB9XG4gIHJldHVybiBbSFswXSA+PiAyNCAmIDB4ZmYsIEhbMF0gPj4gMTYgJiAweGZmLCBIWzBdID4+IDggJiAweGZmLCBIWzBdICYgMHhmZiwgSFsxXSA+PiAyNCAmIDB4ZmYsIEhbMV0gPj4gMTYgJiAweGZmLCBIWzFdID4+IDggJiAweGZmLCBIWzFdICYgMHhmZiwgSFsyXSA+PiAyNCAmIDB4ZmYsIEhbMl0gPj4gMTYgJiAweGZmLCBIWzJdID4+IDggJiAweGZmLCBIWzJdICYgMHhmZiwgSFszXSA+PiAyNCAmIDB4ZmYsIEhbM10gPj4gMTYgJiAweGZmLCBIWzNdID4+IDggJiAweGZmLCBIWzNdICYgMHhmZiwgSFs0XSA+PiAyNCAmIDB4ZmYsIEhbNF0gPj4gMTYgJiAweGZmLCBIWzRdID4+IDggJiAweGZmLCBIWzRdICYgMHhmZl07XG59XG52YXIgX2RlZmF1bHQgPSBleHBvcnRzLmRlZmF1bHQgPSBzaGExOyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuZXhwb3J0cy51bnNhZmVTdHJpbmdpZnkgPSB1bnNhZmVTdHJpbmdpZnk7XG52YXIgX3ZhbGlkYXRlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi92YWxpZGF0ZS5qc1wiKSk7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KGUpIHsgcmV0dXJuIGUgJiYgZS5fX2VzTW9kdWxlID8gZSA6IHsgZGVmYXVsdDogZSB9OyB9XG4vKipcbiAqIENvbnZlcnQgYXJyYXkgb2YgMTYgYnl0ZSB2YWx1ZXMgdG8gVVVJRCBzdHJpbmcgZm9ybWF0IG9mIHRoZSBmb3JtOlxuICogWFhYWFhYWFgtWFhYWC1YWFhYLVhYWFgtWFhYWFhYWFhYWFhYXG4gKi9cbnZhciBieXRlVG9IZXggPSBbXTtcbmZvciAodmFyIGkgPSAwOyBpIDwgMjU2OyArK2kpIHtcbiAgYnl0ZVRvSGV4LnB1c2goKGkgKyAweDEwMCkudG9TdHJpbmcoMTYpLnNsaWNlKDEpKTtcbn1cbmZ1bmN0aW9uIHVuc2FmZVN0cmluZ2lmeShhcnIsIG9mZnNldCA9IDApIHtcbiAgLy8gTm90ZTogQmUgY2FyZWZ1bCBlZGl0aW5nIHRoaXMgY29kZSEgIEl0J3MgYmVlbiB0dW5lZCBmb3IgcGVyZm9ybWFuY2VcbiAgLy8gYW5kIHdvcmtzIGluIHdheXMgeW91IG1heSBub3QgZXhwZWN0LiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3V1aWRqcy91dWlkL3B1bGwvNDM0XG4gIC8vXG4gIC8vIE5vdGUgdG8gZnV0dXJlLXNlbGY6IE5vLCB5b3UgY2FuJ3QgcmVtb3ZlIHRoZSBgdG9Mb3dlckNhc2UoKWAgY2FsbC5cbiAgLy8gUkVGOiBodHRwczovL2dpdGh1Yi5jb20vdXVpZGpzL3V1aWQvcHVsbC82NzcjaXNzdWVjb21tZW50LTE3NTczNTEzNTFcbiAgcmV0dXJuIChieXRlVG9IZXhbYXJyW29mZnNldCArIDBdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMV1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAyXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDNdXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA1XV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDZdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgN11dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA4XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDldXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTBdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTFdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTJdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTNdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTRdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTVdXSkudG9Mb3dlckNhc2UoKTtcbn1cbmZ1bmN0aW9uIHN0cmluZ2lmeShhcnIsIG9mZnNldCA9IDApIHtcbiAgdmFyIHV1aWQgPSB1bnNhZmVTdHJpbmdpZnkoYXJyLCBvZmZzZXQpO1xuICAvLyBDb25zaXN0ZW5jeSBjaGVjayBmb3IgdmFsaWQgVVVJRC4gIElmIHRoaXMgdGhyb3dzLCBpdCdzIGxpa2VseSBkdWUgdG8gb25lXG4gIC8vIG9mIHRoZSBmb2xsb3dpbmc6XG4gIC8vIC0gT25lIG9yIG1vcmUgaW5wdXQgYXJyYXkgdmFsdWVzIGRvbid0IG1hcCB0byBhIGhleCBvY3RldCAobGVhZGluZyB0b1xuICAvLyBcInVuZGVmaW5lZFwiIGluIHRoZSB1dWlkKVxuICAvLyAtIEludmFsaWQgaW5wdXQgdmFsdWVzIGZvciB0aGUgUkZDIGB2ZXJzaW9uYCBvciBgdmFyaWFudGAgZmllbGRzXG4gIGlmICghKDAsIF92YWxpZGF0ZS5kZWZhdWx0KSh1dWlkKSkge1xuICAgIHRocm93IFR5cGVFcnJvcignU3RyaW5naWZpZWQgVVVJRCBpcyBpbnZhbGlkJyk7XG4gIH1cbiAgcmV0dXJuIHV1aWQ7XG59XG52YXIgX2RlZmF1bHQgPSBleHBvcnRzLmRlZmF1bHQgPSBzdHJpbmdpZnk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgX3JuZyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vcm5nLmpzXCIpKTtcbnZhciBfc3RyaW5naWZ5ID0gcmVxdWlyZShcIi4vc3RyaW5naWZ5LmpzXCIpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChlKSB7IHJldHVybiBlICYmIGUuX19lc01vZHVsZSA/IGUgOiB7IGRlZmF1bHQ6IGUgfTsgfVxuLy8gKipgdjEoKWAgLSBHZW5lcmF0ZSB0aW1lLWJhc2VkIFVVSUQqKlxuLy9cbi8vIEluc3BpcmVkIGJ5IGh0dHBzOi8vZ2l0aHViLmNvbS9MaW9zSy9VVUlELmpzXG4vLyBhbmQgaHR0cDovL2RvY3MucHl0aG9uLm9yZy9saWJyYXJ5L3V1aWQuaHRtbFxuXG52YXIgX25vZGVJZDtcbnZhciBfY2xvY2tzZXE7XG5cbi8vIFByZXZpb3VzIHV1aWQgY3JlYXRpb24gdGltZVxudmFyIF9sYXN0TVNlY3MgPSAwO1xudmFyIF9sYXN0TlNlY3MgPSAwO1xuXG4vLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3V1aWRqcy91dWlkIGZvciBBUEkgZGV0YWlsc1xuZnVuY3Rpb24gdjEob3B0aW9ucywgYnVmLCBvZmZzZXQpIHtcbiAgdmFyIGkgPSBidWYgJiYgb2Zmc2V0IHx8IDA7XG4gIHZhciBiID0gYnVmIHx8IG5ldyBBcnJheSgxNik7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICB2YXIgbm9kZSA9IG9wdGlvbnMubm9kZTtcbiAgdmFyIGNsb2Nrc2VxID0gb3B0aW9ucy5jbG9ja3NlcTtcblxuICAvLyB2MSBvbmx5OiBVc2UgY2FjaGVkIGBub2RlYCBhbmQgYGNsb2Nrc2VxYCB2YWx1ZXNcbiAgaWYgKCFvcHRpb25zLl92Nikge1xuICAgIGlmICghbm9kZSkge1xuICAgICAgbm9kZSA9IF9ub2RlSWQ7XG4gICAgfVxuICAgIGlmIChjbG9ja3NlcSA9PSBudWxsKSB7XG4gICAgICBjbG9ja3NlcSA9IF9jbG9ja3NlcTtcbiAgICB9XG4gIH1cblxuICAvLyBIYW5kbGUgY2FzZXMgd2hlcmUgd2UgbmVlZCBlbnRyb3B5LiAgV2UgZG8gdGhpcyBsYXppbHkgdG8gbWluaW1pemUgaXNzdWVzXG4gIC8vIHJlbGF0ZWQgdG8gaW5zdWZmaWNpZW50IHN5c3RlbSBlbnRyb3B5LiAgU2VlICMxODlcbiAgaWYgKG5vZGUgPT0gbnVsbCB8fCBjbG9ja3NlcSA9PSBudWxsKSB7XG4gICAgdmFyIHNlZWRCeXRlcyA9IG9wdGlvbnMucmFuZG9tIHx8IChvcHRpb25zLnJuZyB8fCBfcm5nLmRlZmF1bHQpKCk7XG5cbiAgICAvLyBSYW5kb21pemUgbm9kZVxuICAgIGlmIChub2RlID09IG51bGwpIHtcbiAgICAgIG5vZGUgPSBbc2VlZEJ5dGVzWzBdLCBzZWVkQnl0ZXNbMV0sIHNlZWRCeXRlc1syXSwgc2VlZEJ5dGVzWzNdLCBzZWVkQnl0ZXNbNF0sIHNlZWRCeXRlc1s1XV07XG5cbiAgICAgIC8vIHYxIG9ubHk6IGNhY2hlIG5vZGUgdmFsdWUgZm9yIHJldXNlXG4gICAgICBpZiAoIV9ub2RlSWQgJiYgIW9wdGlvbnMuX3Y2KSB7XG4gICAgICAgIC8vIHBlciBSRkM0MTIyIDQuNTogU2V0IE1BQyBtdWx0aWNhc3QgYml0ICh2MSBvbmx5KVxuICAgICAgICBub2RlWzBdIHw9IDB4MDE7IC8vIFNldCBtdWx0aWNhc3QgYml0XG5cbiAgICAgICAgX25vZGVJZCA9IG5vZGU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmFuZG9taXplIGNsb2Nrc2VxXG4gICAgaWYgKGNsb2Nrc2VxID09IG51bGwpIHtcbiAgICAgIC8vIFBlciA0LjIuMiwgcmFuZG9taXplICgxNCBiaXQpIGNsb2Nrc2VxXG4gICAgICBjbG9ja3NlcSA9IChzZWVkQnl0ZXNbNl0gPDwgOCB8IHNlZWRCeXRlc1s3XSkgJiAweDNmZmY7XG4gICAgICBpZiAoX2Nsb2Nrc2VxID09PSB1bmRlZmluZWQgJiYgIW9wdGlvbnMuX3Y2KSB7XG4gICAgICAgIF9jbG9ja3NlcSA9IGNsb2Nrc2VxO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIHYxICYgdjYgdGltZXN0YW1wcyBhcmUgMTAwIG5hbm8tc2Vjb25kIHVuaXRzIHNpbmNlIHRoZSBHcmVnb3JpYW4gZXBvY2gsXG4gIC8vICgxNTgyLTEwLTE1IDAwOjAwKS4gIEpTTnVtYmVycyBhcmVuJ3QgcHJlY2lzZSBlbm91Z2ggZm9yIHRoaXMsIHNvIHRpbWUgaXNcbiAgLy8gaGFuZGxlZCBpbnRlcm5hbGx5IGFzICdtc2VjcycgKGludGVnZXIgbWlsbGlzZWNvbmRzKSBhbmQgJ25zZWNzJ1xuICAvLyAoMTAwLW5hbm9zZWNvbmRzIG9mZnNldCBmcm9tIG1zZWNzKSBzaW5jZSB1bml4IGVwb2NoLCAxOTcwLTAxLTAxIDAwOjAwLlxuICB2YXIgbXNlY3MgPSBvcHRpb25zLm1zZWNzICE9PSB1bmRlZmluZWQgPyBvcHRpb25zLm1zZWNzIDogRGF0ZS5ub3coKTtcblxuICAvLyBQZXIgNC4yLjEuMiwgdXNlIGNvdW50IG9mIHV1aWQncyBnZW5lcmF0ZWQgZHVyaW5nIHRoZSBjdXJyZW50IGNsb2NrXG4gIC8vIGN5Y2xlIHRvIHNpbXVsYXRlIGhpZ2hlciByZXNvbHV0aW9uIGNsb2NrXG4gIHZhciBuc2VjcyA9IG9wdGlvbnMubnNlY3MgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMubnNlY3MgOiBfbGFzdE5TZWNzICsgMTtcblxuICAvLyBUaW1lIHNpbmNlIGxhc3QgdXVpZCBjcmVhdGlvbiAoaW4gbXNlY3MpXG4gIHZhciBkdCA9IG1zZWNzIC0gX2xhc3RNU2VjcyArIChuc2VjcyAtIF9sYXN0TlNlY3MpIC8gMTAwMDA7XG5cbiAgLy8gUGVyIDQuMi4xLjIsIEJ1bXAgY2xvY2tzZXEgb24gY2xvY2sgcmVncmVzc2lvblxuICBpZiAoZHQgPCAwICYmIG9wdGlvbnMuY2xvY2tzZXEgPT09IHVuZGVmaW5lZCkge1xuICAgIGNsb2Nrc2VxID0gY2xvY2tzZXEgKyAxICYgMHgzZmZmO1xuICB9XG5cbiAgLy8gUmVzZXQgbnNlY3MgaWYgY2xvY2sgcmVncmVzc2VzIChuZXcgY2xvY2tzZXEpIG9yIHdlJ3ZlIG1vdmVkIG9udG8gYSBuZXdcbiAgLy8gdGltZSBpbnRlcnZhbFxuICBpZiAoKGR0IDwgMCB8fCBtc2VjcyA+IF9sYXN0TVNlY3MpICYmIG9wdGlvbnMubnNlY3MgPT09IHVuZGVmaW5lZCkge1xuICAgIG5zZWNzID0gMDtcbiAgfVxuXG4gIC8vIFBlciA0LjIuMS4yIFRocm93IGVycm9yIGlmIHRvbyBtYW55IHV1aWRzIGFyZSByZXF1ZXN0ZWRcbiAgaWYgKG5zZWNzID49IDEwMDAwKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwidXVpZC52MSgpOiBDYW4ndCBjcmVhdGUgbW9yZSB0aGFuIDEwTSB1dWlkcy9zZWNcIik7XG4gIH1cbiAgX2xhc3RNU2VjcyA9IG1zZWNzO1xuICBfbGFzdE5TZWNzID0gbnNlY3M7XG4gIF9jbG9ja3NlcSA9IGNsb2Nrc2VxO1xuXG4gIC8vIFBlciA0LjEuNCAtIENvbnZlcnQgZnJvbSB1bml4IGVwb2NoIHRvIEdyZWdvcmlhbiBlcG9jaFxuICBtc2VjcyArPSAxMjIxOTI5MjgwMDAwMDtcblxuICAvLyBgdGltZV9sb3dgXG4gIHZhciB0bCA9ICgobXNlY3MgJiAweGZmZmZmZmYpICogMTAwMDAgKyBuc2VjcykgJSAweDEwMDAwMDAwMDtcbiAgYltpKytdID0gdGwgPj4+IDI0ICYgMHhmZjtcbiAgYltpKytdID0gdGwgPj4+IDE2ICYgMHhmZjtcbiAgYltpKytdID0gdGwgPj4+IDggJiAweGZmO1xuICBiW2krK10gPSB0bCAmIDB4ZmY7XG5cbiAgLy8gYHRpbWVfbWlkYFxuICB2YXIgdG1oID0gbXNlY3MgLyAweDEwMDAwMDAwMCAqIDEwMDAwICYgMHhmZmZmZmZmO1xuICBiW2krK10gPSB0bWggPj4+IDggJiAweGZmO1xuICBiW2krK10gPSB0bWggJiAweGZmO1xuXG4gIC8vIGB0aW1lX2hpZ2hfYW5kX3ZlcnNpb25gXG4gIGJbaSsrXSA9IHRtaCA+Pj4gMjQgJiAweGYgfCAweDEwOyAvLyBpbmNsdWRlIHZlcnNpb25cbiAgYltpKytdID0gdG1oID4+PiAxNiAmIDB4ZmY7XG5cbiAgLy8gYGNsb2NrX3NlcV9oaV9hbmRfcmVzZXJ2ZWRgIChQZXIgNC4yLjIgLSBpbmNsdWRlIHZhcmlhbnQpXG4gIGJbaSsrXSA9IGNsb2Nrc2VxID4+PiA4IHwgMHg4MDtcblxuICAvLyBgY2xvY2tfc2VxX2xvd2BcbiAgYltpKytdID0gY2xvY2tzZXEgJiAweGZmO1xuXG4gIC8vIGBub2RlYFxuICBmb3IgKHZhciBuID0gMDsgbiA8IDY7ICsrbikge1xuICAgIGJbaSArIG5dID0gbm9kZVtuXTtcbiAgfVxuICByZXR1cm4gYnVmIHx8ICgwLCBfc3RyaW5naWZ5LnVuc2FmZVN0cmluZ2lmeSkoYik7XG59XG52YXIgX2RlZmF1bHQgPSBleHBvcnRzLmRlZmF1bHQgPSB2MTsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHYxVG9WNjtcbnZhciBfcGFyc2UgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3BhcnNlLmpzXCIpKTtcbnZhciBfc3RyaW5naWZ5ID0gcmVxdWlyZShcIi4vc3RyaW5naWZ5LmpzXCIpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChlKSB7IHJldHVybiBlICYmIGUuX19lc01vZHVsZSA/IGUgOiB7IGRlZmF1bHQ6IGUgfTsgfVxuLyoqXG4gKiBDb252ZXJ0IGEgdjEgVVVJRCB0byBhIHY2IFVVSURcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ3xVaW50OEFycmF5fSB1dWlkIC0gVGhlIHYxIFVVSUQgdG8gY29udmVydCB0byB2NlxuICogQHJldHVybnMge3N0cmluZ3xVaW50OEFycmF5fSBUaGUgdjYgVVVJRCBhcyB0aGUgc2FtZSB0eXBlIGFzIHRoZSBgdXVpZGAgYXJnXG4gKiAoc3RyaW5nIG9yIFVpbnQ4QXJyYXkpXG4gKi9cbmZ1bmN0aW9uIHYxVG9WNih1dWlkKSB7XG4gIHZhciB2MUJ5dGVzID0gdHlwZW9mIHV1aWQgPT09ICdzdHJpbmcnID8gKDAsIF9wYXJzZS5kZWZhdWx0KSh1dWlkKSA6IHV1aWQ7XG4gIHZhciB2NkJ5dGVzID0gX3YxVG9WNih2MUJ5dGVzKTtcbiAgcmV0dXJuIHR5cGVvZiB1dWlkID09PSAnc3RyaW5nJyA/ICgwLCBfc3RyaW5naWZ5LnVuc2FmZVN0cmluZ2lmeSkodjZCeXRlcykgOiB2NkJ5dGVzO1xufVxuXG4vLyBEbyB0aGUgZmllbGQgdHJhbnNmb3JtYXRpb24gbmVlZGVkIGZvciB2MSAtPiB2NlxuZnVuY3Rpb24gX3YxVG9WNih2MUJ5dGVzLCByYW5kb21pemUgPSBmYWxzZSkge1xuICByZXR1cm4gVWludDhBcnJheS5vZigodjFCeXRlc1s2XSAmIDB4MGYpIDw8IDQgfCB2MUJ5dGVzWzddID4+IDQgJiAweDBmLCAodjFCeXRlc1s3XSAmIDB4MGYpIDw8IDQgfCAodjFCeXRlc1s0XSAmIDB4ZjApID4+IDQsICh2MUJ5dGVzWzRdICYgMHgwZikgPDwgNCB8ICh2MUJ5dGVzWzVdICYgMHhmMCkgPj4gNCwgKHYxQnl0ZXNbNV0gJiAweDBmKSA8PCA0IHwgKHYxQnl0ZXNbMF0gJiAweGYwKSA+PiA0LCAodjFCeXRlc1swXSAmIDB4MGYpIDw8IDQgfCAodjFCeXRlc1sxXSAmIDB4ZjApID4+IDQsICh2MUJ5dGVzWzFdICYgMHgwZikgPDwgNCB8ICh2MUJ5dGVzWzJdICYgMHhmMCkgPj4gNCwgMHg2MCB8IHYxQnl0ZXNbMl0gJiAweDBmLCB2MUJ5dGVzWzNdLCB2MUJ5dGVzWzhdLCB2MUJ5dGVzWzldLCB2MUJ5dGVzWzEwXSwgdjFCeXRlc1sxMV0sIHYxQnl0ZXNbMTJdLCB2MUJ5dGVzWzEzXSwgdjFCeXRlc1sxNF0sIHYxQnl0ZXNbMTVdKTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfdiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdjM1LmpzXCIpKTtcbnZhciBfbWQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL21kNS5qc1wiKSk7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KGUpIHsgcmV0dXJuIGUgJiYgZS5fX2VzTW9kdWxlID8gZSA6IHsgZGVmYXVsdDogZSB9OyB9XG52YXIgdjMgPSAoMCwgX3YuZGVmYXVsdCkoJ3YzJywgMHgzMCwgX21kLmRlZmF1bHQpO1xudmFyIF9kZWZhdWx0ID0gZXhwb3J0cy5kZWZhdWx0ID0gdjM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLlVSTCA9IGV4cG9ydHMuRE5TID0gdm9pZCAwO1xuZXhwb3J0cy5kZWZhdWx0ID0gdjM1O1xudmFyIF9zdHJpbmdpZnkgPSByZXF1aXJlKFwiLi9zdHJpbmdpZnkuanNcIik7XG52YXIgX3BhcnNlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9wYXJzZS5qc1wiKSk7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KGUpIHsgcmV0dXJuIGUgJiYgZS5fX2VzTW9kdWxlID8gZSA6IHsgZGVmYXVsdDogZSB9OyB9XG5mdW5jdGlvbiBzdHJpbmdUb0J5dGVzKHN0cikge1xuICBzdHIgPSB1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoc3RyKSk7IC8vIFVURjggZXNjYXBlXG5cbiAgdmFyIGJ5dGVzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgKytpKSB7XG4gICAgYnl0ZXMucHVzaChzdHIuY2hhckNvZGVBdChpKSk7XG4gIH1cbiAgcmV0dXJuIGJ5dGVzO1xufVxudmFyIEROUyA9IGV4cG9ydHMuRE5TID0gJzZiYTdiODEwLTlkYWQtMTFkMS04MGI0LTAwYzA0ZmQ0MzBjOCc7XG52YXIgVVJMID0gZXhwb3J0cy5VUkwgPSAnNmJhN2I4MTEtOWRhZC0xMWQxLTgwYjQtMDBjMDRmZDQzMGM4JztcbmZ1bmN0aW9uIHYzNShuYW1lLCB2ZXJzaW9uLCBoYXNoZnVuYykge1xuICBmdW5jdGlvbiBnZW5lcmF0ZVVVSUQodmFsdWUsIG5hbWVzcGFjZSwgYnVmLCBvZmZzZXQpIHtcbiAgICB2YXIgX25hbWVzcGFjZTtcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgdmFsdWUgPSBzdHJpbmdUb0J5dGVzKHZhbHVlKTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBuYW1lc3BhY2UgPT09ICdzdHJpbmcnKSB7XG4gICAgICBuYW1lc3BhY2UgPSAoMCwgX3BhcnNlLmRlZmF1bHQpKG5hbWVzcGFjZSk7XG4gICAgfVxuICAgIGlmICgoKF9uYW1lc3BhY2UgPSBuYW1lc3BhY2UpID09PSBudWxsIHx8IF9uYW1lc3BhY2UgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9uYW1lc3BhY2UubGVuZ3RoKSAhPT0gMTYpIHtcbiAgICAgIHRocm93IFR5cGVFcnJvcignTmFtZXNwYWNlIG11c3QgYmUgYXJyYXktbGlrZSAoMTYgaXRlcmFibGUgaW50ZWdlciB2YWx1ZXMsIDAtMjU1KScpO1xuICAgIH1cblxuICAgIC8vIENvbXB1dGUgaGFzaCBvZiBuYW1lc3BhY2UgYW5kIHZhbHVlLCBQZXIgNC4zXG4gICAgLy8gRnV0dXJlOiBVc2Ugc3ByZWFkIHN5bnRheCB3aGVuIHN1cHBvcnRlZCBvbiBhbGwgcGxhdGZvcm1zLCBlLmcuIGBieXRlcyA9XG4gICAgLy8gaGFzaGZ1bmMoWy4uLm5hbWVzcGFjZSwgLi4uIHZhbHVlXSlgXG4gICAgdmFyIGJ5dGVzID0gbmV3IFVpbnQ4QXJyYXkoMTYgKyB2YWx1ZS5sZW5ndGgpO1xuICAgIGJ5dGVzLnNldChuYW1lc3BhY2UpO1xuICAgIGJ5dGVzLnNldCh2YWx1ZSwgbmFtZXNwYWNlLmxlbmd0aCk7XG4gICAgYnl0ZXMgPSBoYXNoZnVuYyhieXRlcyk7XG4gICAgYnl0ZXNbNl0gPSBieXRlc1s2XSAmIDB4MGYgfCB2ZXJzaW9uO1xuICAgIGJ5dGVzWzhdID0gYnl0ZXNbOF0gJiAweDNmIHwgMHg4MDtcbiAgICBpZiAoYnVmKSB7XG4gICAgICBvZmZzZXQgPSBvZmZzZXQgfHwgMDtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMTY7ICsraSkge1xuICAgICAgICBidWZbb2Zmc2V0ICsgaV0gPSBieXRlc1tpXTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBidWY7XG4gICAgfVxuICAgIHJldHVybiAoMCwgX3N0cmluZ2lmeS51bnNhZmVTdHJpbmdpZnkpKGJ5dGVzKTtcbiAgfVxuXG4gIC8vIEZ1bmN0aW9uI25hbWUgaXMgbm90IHNldHRhYmxlIG9uIHNvbWUgcGxhdGZvcm1zICgjMjcwKVxuICB0cnkge1xuICAgIGdlbmVyYXRlVVVJRC5uYW1lID0gbmFtZTtcbiAgfSBjYXRjaCAoZXJyKSB7fVxuXG4gIC8vIEZvciBDb21tb25KUyBkZWZhdWx0IGV4cG9ydCBzdXBwb3J0XG4gIGdlbmVyYXRlVVVJRC5ETlMgPSBETlM7XG4gIGdlbmVyYXRlVVVJRC5VUkwgPSBVUkw7XG4gIHJldHVybiBnZW5lcmF0ZVVVSUQ7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgX25hdGl2ZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vbmF0aXZlLmpzXCIpKTtcbnZhciBfcm5nID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9ybmcuanNcIikpO1xudmFyIF9zdHJpbmdpZnkgPSByZXF1aXJlKFwiLi9zdHJpbmdpZnkuanNcIik7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KGUpIHsgcmV0dXJuIGUgJiYgZS5fX2VzTW9kdWxlID8gZSA6IHsgZGVmYXVsdDogZSB9OyB9XG5mdW5jdGlvbiB2NChvcHRpb25zLCBidWYsIG9mZnNldCkge1xuICBpZiAoX25hdGl2ZS5kZWZhdWx0LnJhbmRvbVVVSUQgJiYgIWJ1ZiAmJiAhb3B0aW9ucykge1xuICAgIHJldHVybiBfbmF0aXZlLmRlZmF1bHQucmFuZG9tVVVJRCgpO1xuICB9XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICB2YXIgcm5kcyA9IG9wdGlvbnMucmFuZG9tIHx8IChvcHRpb25zLnJuZyB8fCBfcm5nLmRlZmF1bHQpKCk7XG5cbiAgLy8gUGVyIDQuNCwgc2V0IGJpdHMgZm9yIHZlcnNpb24gYW5kIGBjbG9ja19zZXFfaGlfYW5kX3Jlc2VydmVkYFxuICBybmRzWzZdID0gcm5kc1s2XSAmIDB4MGYgfCAweDQwO1xuICBybmRzWzhdID0gcm5kc1s4XSAmIDB4M2YgfCAweDgwO1xuXG4gIC8vIENvcHkgYnl0ZXMgdG8gYnVmZmVyLCBpZiBwcm92aWRlZFxuICBpZiAoYnVmKSB7XG4gICAgb2Zmc2V0ID0gb2Zmc2V0IHx8IDA7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCAxNjsgKytpKSB7XG4gICAgICBidWZbb2Zmc2V0ICsgaV0gPSBybmRzW2ldO1xuICAgIH1cbiAgICByZXR1cm4gYnVmO1xuICB9XG4gIHJldHVybiAoMCwgX3N0cmluZ2lmeS51bnNhZmVTdHJpbmdpZnkpKHJuZHMpO1xufVxudmFyIF9kZWZhdWx0ID0gZXhwb3J0cy5kZWZhdWx0ID0gdjQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgX3YgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3YzNS5qc1wiKSk7XG52YXIgX3NoYSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vc2hhMS5qc1wiKSk7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KGUpIHsgcmV0dXJuIGUgJiYgZS5fX2VzTW9kdWxlID8gZSA6IHsgZGVmYXVsdDogZSB9OyB9XG52YXIgdjUgPSAoMCwgX3YuZGVmYXVsdCkoJ3Y1JywgMHg1MCwgX3NoYS5kZWZhdWx0KTtcbnZhciBfZGVmYXVsdCA9IGV4cG9ydHMuZGVmYXVsdCA9IHY1OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdjY7XG52YXIgX3N0cmluZ2lmeSA9IHJlcXVpcmUoXCIuL3N0cmluZ2lmeS5qc1wiKTtcbnZhciBfdiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdjEuanNcIikpO1xudmFyIF92MVRvViA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdjFUb1Y2LmpzXCIpKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoZSkgeyByZXR1cm4gZSAmJiBlLl9fZXNNb2R1bGUgPyBlIDogeyBkZWZhdWx0OiBlIH07IH1cbmZ1bmN0aW9uIG93bktleXMoZSwgcikgeyB2YXIgdCA9IE9iamVjdC5rZXlzKGUpOyBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykgeyB2YXIgbyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoZSk7IHIgJiYgKG8gPSBvLmZpbHRlcihmdW5jdGlvbiAocikgeyByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihlLCByKS5lbnVtZXJhYmxlOyB9KSksIHQucHVzaC5hcHBseSh0LCBvKTsgfSByZXR1cm4gdDsgfVxuZnVuY3Rpb24gX29iamVjdFNwcmVhZChlKSB7IGZvciAodmFyIHIgPSAxOyByIDwgYXJndW1lbnRzLmxlbmd0aDsgcisrKSB7IHZhciB0ID0gbnVsbCAhPSBhcmd1bWVudHNbcl0gPyBhcmd1bWVudHNbcl0gOiB7fTsgciAlIDIgPyBvd25LZXlzKE9iamVjdCh0KSwgITApLmZvckVhY2goZnVuY3Rpb24gKHIpIHsgX2RlZmluZVByb3BlcnR5KGUsIHIsIHRbcl0pOyB9KSA6IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzID8gT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoZSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnModCkpIDogb3duS2V5cyhPYmplY3QodCkpLmZvckVhY2goZnVuY3Rpb24gKHIpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsIHIsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodCwgcikpOyB9KTsgfSByZXR1cm4gZTsgfVxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KGUsIHIsIHQpIHsgcmV0dXJuIChyID0gX3RvUHJvcGVydHlLZXkocikpIGluIGUgPyBPYmplY3QuZGVmaW5lUHJvcGVydHkoZSwgciwgeyB2YWx1ZTogdCwgZW51bWVyYWJsZTogITAsIGNvbmZpZ3VyYWJsZTogITAsIHdyaXRhYmxlOiAhMCB9KSA6IGVbcl0gPSB0LCBlOyB9XG5mdW5jdGlvbiBfdG9Qcm9wZXJ0eUtleSh0KSB7IHZhciBpID0gX3RvUHJpbWl0aXZlKHQsIFwic3RyaW5nXCIpOyByZXR1cm4gXCJzeW1ib2xcIiA9PSB0eXBlb2YgaSA/IGkgOiBpICsgXCJcIjsgfVxuZnVuY3Rpb24gX3RvUHJpbWl0aXZlKHQsIHIpIHsgaWYgKFwib2JqZWN0XCIgIT0gdHlwZW9mIHQgfHwgIXQpIHJldHVybiB0OyB2YXIgZSA9IHRbU3ltYm9sLnRvUHJpbWl0aXZlXTsgaWYgKHZvaWQgMCAhPT0gZSkgeyB2YXIgaSA9IGUuY2FsbCh0LCByIHx8IFwiZGVmYXVsdFwiKTsgaWYgKFwib2JqZWN0XCIgIT0gdHlwZW9mIGkpIHJldHVybiBpOyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQEB0b1ByaW1pdGl2ZSBtdXN0IHJldHVybiBhIHByaW1pdGl2ZSB2YWx1ZS5cIik7IH0gcmV0dXJuIChcInN0cmluZ1wiID09PSByID8gU3RyaW5nIDogTnVtYmVyKSh0KTsgfVxuLyoqXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnNcbiAqIEBwYXJhbSB7VWludDhBcnJheT19IGJ1ZlxuICogQHBhcmFtIHtudW1iZXI9fSBvZmZzZXRcbiAqIEByZXR1cm5zXG4gKi9cbmZ1bmN0aW9uIHY2KG9wdGlvbnMgPSB7fSwgYnVmLCBvZmZzZXQgPSAwKSB7XG4gIC8vIHY2IGlzIHYxIHdpdGggZGlmZmVyZW50IGZpZWxkIGxheW91dCwgc28gd2Ugc3RhcnQgd2l0aCBhIHYxIFVVSUQsIGFsYmVpdFxuICAvLyB3aXRoIHNsaWdodGx5IGRpZmZlcmVudCBiZWhhdmlvciBhcm91bmQgaG93IHRoZSBjbG9ja19zZXEgYW5kIG5vZGUgZmllbGRzXG4gIC8vIGFyZSByYW5kb21pemVkLCB3aGljaCBpcyB3aHkgd2UgY2FsbCB2MSB3aXRoIF92NjogdHJ1ZS5cbiAgdmFyIGJ5dGVzID0gKDAsIF92LmRlZmF1bHQpKF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgb3B0aW9ucyksIHt9LCB7XG4gICAgX3Y2OiB0cnVlXG4gIH0pLCBuZXcgVWludDhBcnJheSgxNikpO1xuXG4gIC8vIFJlb3JkZXIgdGhlIGZpZWxkcyB0byB2NiBsYXlvdXQuXG4gIGJ5dGVzID0gKDAsIF92MVRvVi5kZWZhdWx0KShieXRlcyk7XG5cbiAgLy8gUmV0dXJuIGFzIGEgYnl0ZSBhcnJheSBpZiByZXF1ZXN0ZWRcbiAgaWYgKGJ1Zikge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMTY7IGkrKykge1xuICAgICAgYnVmW29mZnNldCArIGldID0gYnl0ZXNbaV07XG4gICAgfVxuICAgIHJldHVybiBidWY7XG4gIH1cbiAgcmV0dXJuICgwLCBfc3RyaW5naWZ5LnVuc2FmZVN0cmluZ2lmeSkoYnl0ZXMpO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdjZUb1YxO1xudmFyIF9wYXJzZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vcGFyc2UuanNcIikpO1xudmFyIF9zdHJpbmdpZnkgPSByZXF1aXJlKFwiLi9zdHJpbmdpZnkuanNcIik7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KGUpIHsgcmV0dXJuIGUgJiYgZS5fX2VzTW9kdWxlID8gZSA6IHsgZGVmYXVsdDogZSB9OyB9XG4vKipcbiAqIENvbnZlcnQgYSB2NiBVVUlEIHRvIGEgdjEgVVVJRFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfFVpbnQ4QXJyYXl9IHV1aWQgLSBUaGUgdjYgVVVJRCB0byBjb252ZXJ0IHRvIHY2XG4gKiBAcmV0dXJucyB7c3RyaW5nfFVpbnQ4QXJyYXl9IFRoZSB2MSBVVUlEIGFzIHRoZSBzYW1lIHR5cGUgYXMgdGhlIGB1dWlkYCBhcmdcbiAqIChzdHJpbmcgb3IgVWludDhBcnJheSlcbiAqL1xuZnVuY3Rpb24gdjZUb1YxKHV1aWQpIHtcbiAgdmFyIHY2Qnl0ZXMgPSB0eXBlb2YgdXVpZCA9PT0gJ3N0cmluZycgPyAoMCwgX3BhcnNlLmRlZmF1bHQpKHV1aWQpIDogdXVpZDtcbiAgdmFyIHYxQnl0ZXMgPSBfdjZUb1YxKHY2Qnl0ZXMpO1xuICByZXR1cm4gdHlwZW9mIHV1aWQgPT09ICdzdHJpbmcnID8gKDAsIF9zdHJpbmdpZnkudW5zYWZlU3RyaW5naWZ5KSh2MUJ5dGVzKSA6IHYxQnl0ZXM7XG59XG5cbi8vIERvIHRoZSBmaWVsZCB0cmFuc2Zvcm1hdGlvbiBuZWVkZWQgZm9yIHY2IC0+IHYxXG5mdW5jdGlvbiBfdjZUb1YxKHY2Qnl0ZXMpIHtcbiAgcmV0dXJuIFVpbnQ4QXJyYXkub2YoKHY2Qnl0ZXNbM10gJiAweDBmKSA8PCA0IHwgdjZCeXRlc1s0XSA+PiA0ICYgMHgwZiwgKHY2Qnl0ZXNbNF0gJiAweDBmKSA8PCA0IHwgKHY2Qnl0ZXNbNV0gJiAweGYwKSA+PiA0LCAodjZCeXRlc1s1XSAmIDB4MGYpIDw8IDQgfCB2NkJ5dGVzWzZdICYgMHgwZiwgdjZCeXRlc1s3XSwgKHY2Qnl0ZXNbMV0gJiAweDBmKSA8PCA0IHwgKHY2Qnl0ZXNbMl0gJiAweGYwKSA+PiA0LCAodjZCeXRlc1syXSAmIDB4MGYpIDw8IDQgfCAodjZCeXRlc1szXSAmIDB4ZjApID4+IDQsIDB4MTAgfCAodjZCeXRlc1swXSAmIDB4ZjApID4+IDQsICh2NkJ5dGVzWzBdICYgMHgwZikgPDwgNCB8ICh2NkJ5dGVzWzFdICYgMHhmMCkgPj4gNCwgdjZCeXRlc1s4XSwgdjZCeXRlc1s5XSwgdjZCeXRlc1sxMF0sIHY2Qnl0ZXNbMTFdLCB2NkJ5dGVzWzEyXSwgdjZCeXRlc1sxM10sIHY2Qnl0ZXNbMTRdLCB2NkJ5dGVzWzE1XSk7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgX3JuZyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vcm5nLmpzXCIpKTtcbnZhciBfc3RyaW5naWZ5ID0gcmVxdWlyZShcIi4vc3RyaW5naWZ5LmpzXCIpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChlKSB7IHJldHVybiBlICYmIGUuX19lc01vZHVsZSA/IGUgOiB7IGRlZmF1bHQ6IGUgfTsgfVxuLyoqXG4gKiBVVUlEIFY3IC0gVW5peCBFcG9jaCB0aW1lLWJhc2VkIFVVSURcbiAqXG4gKiBUaGUgSUVURiBoYXMgcHVibGlzaGVkIFJGQzk1NjIsIGludHJvZHVjaW5nIDMgbmV3IFVVSUQgdmVyc2lvbnMgKDYsNyw4KS4gVGhpc1xuICogaW1wbGVtZW50YXRpb24gb2YgVjcgaXMgYmFzZWQgb24gdGhlIGFjY2VwdGVkLCB0aG91Z2ggbm90IHlldCBhcHByb3ZlZCxcbiAqIHJldmlzaW9ucy5cbiAqXG4gKiBSRkMgOTU2MjpodHRwczovL3d3dy5yZmMtZWRpdG9yLm9yZy9yZmMvcmZjOTU2Mi5odG1sIFVuaXZlcnNhbGx5IFVuaXF1ZVxuICogSURlbnRpZmllcnMgKFVVSURzKVxuXG4gKlxuICogU2FtcGxlIFY3IHZhbHVlOlxuICogaHR0cHM6Ly93d3cucmZjLWVkaXRvci5vcmcvcmZjL3JmYzk1NjIuaHRtbCNuYW1lLWV4YW1wbGUtb2YtYS11dWlkdjctdmFsdWVcbiAqXG4gKiBNb25vdG9uaWMgQml0IExheW91dDogUkZDIHJmYzk1NjIuNi4yIE1ldGhvZCAxLCBEZWRpY2F0ZWQgQ291bnRlciBCaXRzIHJlZjpcbiAqICAgICBodHRwczovL3d3dy5yZmMtZWRpdG9yLm9yZy9yZmMvcmZjOTU2Mi5odG1sI3NlY3Rpb24tNi4yLTUuMVxuICpcbiAqICAgMCAgICAgICAgICAgICAgICAgICAxICAgICAgICAgICAgICAgICAgIDIgICAgICAgICAgICAgICAgICAgMyAwIDEgMiAzIDQgNSA2XG4gKiAgIDcgOCA5IDAgMSAyIDMgNCA1IDYgNyA4IDkgMCAxIDIgMyA0IDUgNiA3IDggOSAwIDFcbiAqICArLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstK1xuICogIHwgICAgICAgICAgICAgICAgICAgICAgICAgIHVuaXhfdHNfbXMgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiAgKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLStcbiAqICB8ICAgICAgICAgIHVuaXhfdHNfbXMgICAgICAgICAgIHwgIHZlciAgfCAgICAgICAgc2VxX2hpICAgICAgICAgfFxuICogICstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rXG4gKiAgfHZhcnwgICAgICAgICAgICAgICBzZXFfbG93ICAgICAgICAgICAgICAgfCAgICAgICAgcmFuZCAgICAgICAgIHxcbiAqICArLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstK1xuICogIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhbmQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiAgKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLStcbiAqXG4gKiBzZXEgaXMgYSAzMSBiaXQgc2VyaWFsaXplZCBjb3VudGVyOyBjb21wcmlzZWQgb2YgMTIgYml0IHNlcV9oaSBhbmQgMTkgYml0XG4gKiBzZXFfbG93LCBhbmQgcmFuZG9tbHkgaW5pdGlhbGl6ZWQgdXBvbiB0aW1lc3RhbXAgY2hhbmdlLiAzMSBiaXQgY291bnRlciBzaXplXG4gKiB3YXMgc2VsZWN0ZWQgYXMgYW55IGJpdHdpc2Ugb3BlcmF0aW9ucyBpbiBub2RlIGFyZSBkb25lIGFzIF9zaWduZWRfIDMyIGJpdFxuICogaW50cy4gd2UgZXhjbHVkZSB0aGUgc2lnbiBiaXQuXG4gKi9cblxudmFyIF9zZXFMb3cgPSBudWxsO1xudmFyIF9zZXFIaWdoID0gbnVsbDtcbnZhciBfbXNlY3MgPSAwO1xuZnVuY3Rpb24gdjcob3B0aW9ucywgYnVmLCBvZmZzZXQpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgLy8gaW5pdGlhbGl6ZSBidWZmZXIgYW5kIHBvaW50ZXJcbiAgdmFyIGkgPSBidWYgJiYgb2Zmc2V0IHx8IDA7XG4gIHZhciBiID0gYnVmIHx8IG5ldyBVaW50OEFycmF5KDE2KTtcblxuICAvLyBybmRzIGlzIFVpbnQ4QXJyYXkoMTYpIGZpbGxlZCB3aXRoIHJhbmRvbSBieXRlc1xuICB2YXIgcm5kcyA9IG9wdGlvbnMucmFuZG9tIHx8IChvcHRpb25zLnJuZyB8fCBfcm5nLmRlZmF1bHQpKCk7XG5cbiAgLy8gbWlsbGlzZWNvbmRzIHNpbmNlIHVuaXggZXBvY2gsIDE5NzAtMDEtMDEgMDA6MDBcbiAgdmFyIG1zZWNzID0gb3B0aW9ucy5tc2VjcyAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy5tc2VjcyA6IERhdGUubm93KCk7XG5cbiAgLy8gc2VxIGlzIHVzZXIgcHJvdmlkZWQgMzEgYml0IGNvdW50ZXJcbiAgdmFyIHNlcSA9IG9wdGlvbnMuc2VxICE9PSB1bmRlZmluZWQgPyBvcHRpb25zLnNlcSA6IG51bGw7XG5cbiAgLy8gaW5pdGlhbGl6ZSBsb2NhbCBzZXEgaGlnaC9sb3cgcGFydHNcbiAgdmFyIHNlcUhpZ2ggPSBfc2VxSGlnaDtcbiAgdmFyIHNlcUxvdyA9IF9zZXFMb3c7XG5cbiAgLy8gY2hlY2sgaWYgY2xvY2sgaGFzIGFkdmFuY2VkIGFuZCB1c2VyIGhhcyBub3QgcHJvdmlkZWQgbXNlY3NcbiAgaWYgKG1zZWNzID4gX21zZWNzICYmIG9wdGlvbnMubXNlY3MgPT09IHVuZGVmaW5lZCkge1xuICAgIF9tc2VjcyA9IG1zZWNzO1xuXG4gICAgLy8gdW5sZXNzIHVzZXIgcHJvdmlkZWQgc2VxLCByZXNldCBzZXEgcGFydHNcbiAgICBpZiAoc2VxICE9PSBudWxsKSB7XG4gICAgICBzZXFIaWdoID0gbnVsbDtcbiAgICAgIHNlcUxvdyA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgLy8gaWYgd2UgaGF2ZSBhIHVzZXIgcHJvdmlkZWQgc2VxXG4gIGlmIChzZXEgIT09IG51bGwpIHtcbiAgICAvLyB0cmltIHByb3ZpZGVkIHNlcSB0byAzMSBiaXRzIG9mIHZhbHVlLCBhdm9pZGluZyBvdmVyZmxvd1xuICAgIGlmIChzZXEgPiAweDdmZmZmZmZmKSB7XG4gICAgICBzZXEgPSAweDdmZmZmZmZmO1xuICAgIH1cblxuICAgIC8vIHNwbGl0IHByb3ZpZGVkIHNlcSBpbnRvIGhpZ2gvbG93IHBhcnRzXG4gICAgc2VxSGlnaCA9IHNlcSA+Pj4gMTkgJiAweGZmZjtcbiAgICBzZXFMb3cgPSBzZXEgJiAweDdmZmZmO1xuICB9XG5cbiAgLy8gcmFuZG9tbHkgaW5pdGlhbGl6ZSBzZXFcbiAgaWYgKHNlcUhpZ2ggPT09IG51bGwgfHwgc2VxTG93ID09PSBudWxsKSB7XG4gICAgc2VxSGlnaCA9IHJuZHNbNl0gJiAweDdmO1xuICAgIHNlcUhpZ2ggPSBzZXFIaWdoIDw8IDggfCBybmRzWzddO1xuICAgIHNlcUxvdyA9IHJuZHNbOF0gJiAweDNmOyAvLyBwYWQgZm9yIHZhclxuICAgIHNlcUxvdyA9IHNlcUxvdyA8PCA4IHwgcm5kc1s5XTtcbiAgICBzZXFMb3cgPSBzZXFMb3cgPDwgNSB8IHJuZHNbMTBdID4+PiAzO1xuICB9XG5cbiAgLy8gaW5jcmVtZW50IHNlcSBpZiB3aXRoaW4gbXNlY3Mgd2luZG93XG4gIGlmIChtc2VjcyArIDEwMDAwID4gX21zZWNzICYmIHNlcSA9PT0gbnVsbCkge1xuICAgIGlmICgrK3NlcUxvdyA+IDB4N2ZmZmYpIHtcbiAgICAgIHNlcUxvdyA9IDA7XG4gICAgICBpZiAoKytzZXFIaWdoID4gMHhmZmYpIHtcbiAgICAgICAgc2VxSGlnaCA9IDA7XG5cbiAgICAgICAgLy8gaW5jcmVtZW50IGludGVybmFsIF9tc2Vjcy4gdGhpcyBhbGxvd3MgdXMgdG8gY29udGludWUgaW5jcmVtZW50aW5nXG4gICAgICAgIC8vIHdoaWxlIHN0YXlpbmcgbW9ub3RvbmljLiBOb3RlLCBvbmNlIHdlIGhpdCAxMGsgbWlsbGlzZWNvbmRzIGJleW9uZCBzeXN0ZW1cbiAgICAgICAgLy8gY2xvY2ssIHdlIHdpbGwgcmVzZXQgYnJlYWtpbmcgbW9ub3RvbmljaXR5IChhZnRlciAoMl4zMSkqMTAwMDAgZ2VuZXJhdGlvbnMpXG4gICAgICAgIF9tc2VjcysrO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyByZXNldHRpbmc7IHdlIGhhdmUgYWR2YW5jZWQgbW9yZSB0aGFuXG4gICAgLy8gMTBrIG1pbGxpc2Vjb25kcyBiZXlvbmQgc3lzdGVtIGNsb2NrXG4gICAgX21zZWNzID0gbXNlY3M7XG4gIH1cbiAgX3NlcUhpZ2ggPSBzZXFIaWdoO1xuICBfc2VxTG93ID0gc2VxTG93O1xuXG4gIC8vIFtieXRlcyAwLTVdIDQ4IGJpdHMgb2YgbG9jYWwgdGltZXN0YW1wXG4gIGJbaSsrXSA9IF9tc2VjcyAvIDB4MTAwMDAwMDAwMDAgJiAweGZmO1xuICBiW2krK10gPSBfbXNlY3MgLyAweDEwMDAwMDAwMCAmIDB4ZmY7XG4gIGJbaSsrXSA9IF9tc2VjcyAvIDB4MTAwMDAwMCAmIDB4ZmY7XG4gIGJbaSsrXSA9IF9tc2VjcyAvIDB4MTAwMDAgJiAweGZmO1xuICBiW2krK10gPSBfbXNlY3MgLyAweDEwMCAmIDB4ZmY7XG4gIGJbaSsrXSA9IF9tc2VjcyAmIDB4ZmY7XG5cbiAgLy8gW2J5dGUgNl0gLSBzZXQgNCBiaXRzIG9mIHZlcnNpb24gKDcpIHdpdGggZmlyc3QgNCBiaXRzIHNlcV9oaVxuICBiW2krK10gPSBzZXFIaWdoID4+PiA0ICYgMHgwZiB8IDB4NzA7XG5cbiAgLy8gW2J5dGUgN10gcmVtYWluaW5nIDggYml0cyBvZiBzZXFfaGlcbiAgYltpKytdID0gc2VxSGlnaCAmIDB4ZmY7XG5cbiAgLy8gW2J5dGUgOF0gLSB2YXJpYW50ICgyIGJpdHMpLCBmaXJzdCA2IGJpdHMgc2VxX2xvd1xuICBiW2krK10gPSBzZXFMb3cgPj4+IDEzICYgMHgzZiB8IDB4ODA7XG5cbiAgLy8gW2J5dGUgOV0gOCBiaXRzIHNlcV9sb3dcbiAgYltpKytdID0gc2VxTG93ID4+PiA1ICYgMHhmZjtcblxuICAvLyBbYnl0ZSAxMF0gcmVtYWluaW5nIDUgYml0cyBzZXFfbG93LCAzIGJpdHMgcmFuZG9tXG4gIGJbaSsrXSA9IHNlcUxvdyA8PCAzICYgMHhmZiB8IHJuZHNbMTBdICYgMHgwNztcblxuICAvLyBbYnl0ZXMgMTEtMTVdIGFsd2F5cyByYW5kb21cbiAgYltpKytdID0gcm5kc1sxMV07XG4gIGJbaSsrXSA9IHJuZHNbMTJdO1xuICBiW2krK10gPSBybmRzWzEzXTtcbiAgYltpKytdID0gcm5kc1sxNF07XG4gIGJbaSsrXSA9IHJuZHNbMTVdO1xuICByZXR1cm4gYnVmIHx8ICgwLCBfc3RyaW5naWZ5LnVuc2FmZVN0cmluZ2lmeSkoYik7XG59XG52YXIgX2RlZmF1bHQgPSBleHBvcnRzLmRlZmF1bHQgPSB2NzsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfcmVnZXggPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3JlZ2V4LmpzXCIpKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoZSkgeyByZXR1cm4gZSAmJiBlLl9fZXNNb2R1bGUgPyBlIDogeyBkZWZhdWx0OiBlIH07IH1cbmZ1bmN0aW9uIHZhbGlkYXRlKHV1aWQpIHtcbiAgcmV0dXJuIHR5cGVvZiB1dWlkID09PSAnc3RyaW5nJyAmJiBfcmVnZXguZGVmYXVsdC50ZXN0KHV1aWQpO1xufVxudmFyIF9kZWZhdWx0ID0gZXhwb3J0cy5kZWZhdWx0ID0gdmFsaWRhdGU7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgX3ZhbGlkYXRlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi92YWxpZGF0ZS5qc1wiKSk7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KGUpIHsgcmV0dXJuIGUgJiYgZS5fX2VzTW9kdWxlID8gZSA6IHsgZGVmYXVsdDogZSB9OyB9XG5mdW5jdGlvbiB2ZXJzaW9uKHV1aWQpIHtcbiAgaWYgKCEoMCwgX3ZhbGlkYXRlLmRlZmF1bHQpKHV1aWQpKSB7XG4gICAgdGhyb3cgVHlwZUVycm9yKCdJbnZhbGlkIFVVSUQnKTtcbiAgfVxuICByZXR1cm4gcGFyc2VJbnQodXVpZC5zbGljZSgxNCwgMTUpLCAxNik7XG59XG52YXIgX2RlZmF1bHQgPSBleHBvcnRzLmRlZmF1bHQgPSB2ZXJzaW9uOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IEdhbWUgZnJvbSAnLi9HYW1lJztcblxud2luZG93Lm9ubG9hZCA9ICgpID0+IHtcbiAgY29uc3QgZ2FtZSA9IG5ldyBHYW1lKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNnYW1lJykpO1xuICBnYW1lLmluaXRpYWxpc2UoKTtcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
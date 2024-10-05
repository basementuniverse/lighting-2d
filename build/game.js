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
        this.type = 'ground';
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
        this.folder = Game_1.default.gui.addFolder(`Ground ${this.id}`);
        this.folder.add(this, 'colour');
        this.folder
            .add(this.size, 'x', GroundShadowReceiver.MIN_SIZE.x, GroundShadowReceiver.MAX_SIZE.x)
            .name('width');
        this.folder
            .add(this.size, 'y', GroundShadowReceiver.MIN_SIZE.y, GroundShadowReceiver.MAX_SIZE.y)
            .name('height');
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
        debug_1.default.border(`${this.id}_border`, '', this.position, {
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
        this.type = 'light';
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
        debug_1.default.border(`${this.id}_border`, '', this.position, {
            showLabel: false,
            showValue: false,
            borderShape: 'circle',
            radius: this.radius,
            borderColour: this.hovered || this.dragging
                ? Light.DEBUG_HOVER_COLOUR
                : Light.DEBUG_COLOUR,
            borderStyle: this.selected ? 'solid' : 'dashed',
        });
        debug_1.default.marker(`${this.id}_marker`, this.id, this.position, {
            showLabel: false,
            markerColour: this.hovered || this.dragging
                ? Light.DEBUG_HOVER_COLOUR
                : Light.DEBUG_COLOUR,
        });
    }
    prepare(grounds, walls) {
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
        const wallShadows = [];
        for (const wall of walls) {
            const wallShadowRegion = wall.shadowRegion;
            if (!wallShadowRegion) {
                continue;
            }
            if ((0, utils_2.rectanglesIntersect)(lightRectangle, wallShadowRegion)) {
                const shadow = {
                    shadowCasterId: wall.id,
                    ...this.prepareShadow(wallShadowRegion),
                };
                wallShadows.push((0, utils_1.exclude)(shadow, 'vertices'));
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
        for (const wall of walls) {
            const wallRegion = {
                position: wall.position,
                size: wall.size,
            };
            const wallInterval = (0, utils_2.rectangleToInterval)(wallRegion);
            if ((0, utils_2.rectanglesIntersect)(lightRectangle, wallRegion)) {
                if (this.position.y < wallInterval.bottom) {
                    this.wallLightContext.save();
                    this.wallLightContext.globalAlpha = (0, utils_1.clamp)((0, utils_1.remap)(wallInterval.bottom - this.position.y, 0, Light.WALL_LIGHT_CUTOFF_DISTANCE, 0, 1), 0, 1);
                    this.wallLightContext.fillRect(wallRegion.position.x, wallRegion.position.y, wallRegion.size.x, wallRegion.size.y);
                    this.wallLightContext.restore();
                }
                for (const wallShadow of wallShadows) {
                    if (wall.id === wallShadow.shadowCasterId) {
                        continue;
                    }
                    if (wallInterval.bottom >= wallShadow.shadowRegionInterval.bottom) {
                        continue;
                    }
                    if (wallShadow.leftEdge === null && wallShadow.rightEdge === null) {
                        continue;
                    }
                    let leftIntercept = null;
                    if (wallShadow.leftEdge) {
                        leftIntercept = (0, utils_2.lineYIntercept)(wallShadow.leftEdge, wallInterval.bottom);
                    }
                    let rightIntercept = null;
                    if (wallShadow.rightEdge) {
                        rightIntercept = (0, utils_2.lineYIntercept)(wallShadow.rightEdge, wallInterval.bottom);
                    }
                    if (leftIntercept === null && rightIntercept === null) {
                        continue;
                    }
                    if (wallShadow.shadowRegionInterval.top < wallInterval.bottom) {
                        if (wallShadow.shadowRegionInterval.right < wallInterval.left &&
                            rightIntercept &&
                            wallShadow.rightEdge &&
                            rightIntercept > wallShadow.rightEdge.start.x &&
                            wallShadow.rightEdge.start.x > wallShadow.rightEdge.end.x) {
                            continue;
                        }
                        if (wallShadow.shadowRegionInterval.left > wallInterval.right &&
                            leftIntercept &&
                            wallShadow.leftEdge &&
                            leftIntercept < wallShadow.leftEdge.start.x &&
                            wallShadow.leftEdge.start.x < wallShadow.leftEdge.end.x) {
                            continue;
                        }
                    }
                    const min = Math.max(wallInterval.left, wallShadow.leftEdge
                        ? (_a = (0, utils_2.lineYIntercept)(wallShadow.leftEdge, wallInterval.bottom)) !== null && _a !== void 0 ? _a : -Infinity
                        : -Infinity);
                    const max = Math.min(wallInterval.right, wallShadow.rightEdge
                        ? (_b = (0, utils_2.lineYIntercept)(wallShadow.rightEdge, wallInterval.bottom)) !== null && _b !== void 0 ? _b : Infinity
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
    prepareShadow(shadowRegion) {
        const lightPosition = vec_1.vec.cpy(this.position);
        const lightRadius = this._radius;
        const shadowRegionInterval = (0, utils_2.rectangleToInterval)(shadowRegion);
        const shadowRegionVertices = (0, utils_2.rectangleVertices)(shadowRegion);
        const shadowEdges = [];
        for (let i = 0; i < shadowRegionVertices.length; i++) {
            const previous = (0, utils_1.at)(shadowRegionVertices, i - 1);
            const current = shadowRegionVertices[i];
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
        switch ((0, utils_2.sector2d)(this.position, shadowRegionInterval)) {
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
            shadowRegionInterval,
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
const Game_1 = __webpack_require__(/*! ./Game */ "./src/Game.ts");
const GroundShadowReceiver_1 = __webpack_require__(/*! ./GroundShadowReceiver */ "./src/GroundShadowReceiver.ts");
const Light_1 = __webpack_require__(/*! ./Light */ "./src/Light.ts");
const LightingSystem_1 = __webpack_require__(/*! ./LightingSystem */ "./src/LightingSystem.ts");
const Wall_1 = __webpack_require__(/*! ./Wall */ "./src/Wall.ts");
class LightingScene {
    constructor() {
        this.walls = [];
        this.grounds = [];
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
        Game_1.default.gui.add(this.lightingSystem, 'ambientLightColour');
    }
    save() {
        localStorage.setItem('lighting_demo_test_state', JSON.stringify({
            walls: this.walls.map(wall => wall.serialise()),
            grounds: this.grounds.map(ground => ground.serialise()),
            lights: this.lightingSystem.lights.map(light => light.serialise()),
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
        this.walls.forEach(wall => wall.destroy());
        this.walls = state.walls.map((wall) => Wall_1.Wall.deserialise(wall));
        this.grounds.forEach(ground => ground.destroy());
        this.grounds = state.grounds.map((ground) => GroundShadowReceiver_1.GroundShadowReceiver.deserialise(ground));
        this.lightingSystem.lights.forEach(light => light.destroy());
        this.lightingSystem.lights = state.lights.map((light) => Light_1.Light.deserialise(light));
    }
    update(dt) {
        debug_1.default.value('Press SHIFT-L to create a new light', '');
        debug_1.default.value('Press SHIFT-W to create a new wall', '');
        debug_1.default.value('Press SHIFT-G to create a new ground', '');
        debug_1.default.value('CTRL-drag to resize', '');
        this.walls.forEach(wall => wall.update(dt));
        this.grounds.forEach(ground => ground.update(dt));
        this.lightingSystem.update(dt);
        this.walls = this.walls.sort((a, b) => a.position.y + a.size.y - (b.position.y + b.size.y));
        this.grounds = this.grounds.sort((a, b) => a.position.y + a.size.y - (b.position.y + b.size.y));
        if (input_manager_1.default.mousePressed()) {
            let selectedWall = this.walls.find(wall => wall.hovered) || null;
            let selectedGround = this.grounds.find(ground => ground.hovered) || null;
            let selectedLight = this.lightingSystem.lights.find(light => light.hovered) || null;
            this.selected = selectedLight || selectedWall || selectedGround || null;
            this.walls.forEach(wall => {
                wall.selected = false;
            });
            this.grounds.forEach(ground => {
                ground.selected = false;
            });
            this.lightingSystem.lights.forEach(light => {
                light.selected = false;
            });
            if (this.selected) {
                this.selected.selected = true;
            }
        }
        if (input_manager_1.default.keyDown('ShiftLeft')) {
            if (input_manager_1.default.keyPressed('KeyL')) {
                this.lightingSystem.lights.push(new Light_1.Light({
                    position: vec_1.vec.cpy(input_manager_1.default.mousePosition),
                }));
            }
            if (input_manager_1.default.keyPressed('KeyW')) {
                this.walls.push(new Wall_1.Wall({
                    position: vec_1.vec.cpy(input_manager_1.default.mousePosition),
                }));
            }
            if (input_manager_1.default.keyPressed('KeyG')) {
                this.grounds.push(new GroundShadowReceiver_1.GroundShadowReceiver({
                    position: vec_1.vec.cpy(input_manager_1.default.mousePosition),
                }));
            }
        }
        if (input_manager_1.default.keyPressed('Delete') && this.selected) {
            switch (this.selected.type) {
                case 'light':
                    this.lightingSystem.lights = this.lightingSystem.lights.filter(light => light.id !== this.selected.id);
                    break;
                case 'wall':
                    this.walls = this.walls.filter(wall => wall.id !== this.selected.id);
                    break;
                case 'ground':
                    this.grounds = this.grounds.filter(ground => ground.id !== this.selected.id);
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
                this.grounds.forEach(ground => ground.draw(context));
                this.walls.forEach(wall => wall.draw(context));
                break;
            case 'normal':
                this.grounds.forEach(ground => ground.draw(context));
                this.walls.forEach(wall => wall.draw(context));
                this.lightingSystem.prepare(this.grounds, this.walls);
                this.lightingSystem.draw(context);
                break;
            case 'groundmask':
                this.lightingSystem.prepare(this.grounds, this.walls);
                context.drawImage(this.lightingSystem.groundMaskCanvas, 0, 0);
                break;
            case 'wallmask':
                this.lightingSystem.prepare(this.grounds, this.walls);
                context.drawImage(this.lightingSystem.wallMaskCanvas, 0, 0);
                break;
            case 'groundmaskedlightmap':
                this.lightingSystem.prepare(this.grounds, this.walls);
                context.drawImage(this.lightingSystem.groundMaskedLightMapCanvas, 0, 0);
                break;
            case 'wallmaskedlightmap':
                this.lightingSystem.prepare(this.grounds, this.walls);
                context.drawImage(this.lightingSystem.wallMaskedLightMapCanvas, 0, 0);
                break;
            case 'lightmap':
                this.lightingSystem.prepare(this.grounds, this.walls);
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
    prepare(grounds, walls) {
        this.lights.forEach(light => light.prepare(grounds, walls));
        this.groundMaskCanvas.width = Game_1.default.screen.x;
        this.groundMaskCanvas.height = Game_1.default.screen.y;
        this.groundMaskContext.save();
        grounds.forEach(ground => {
            ground.drawMask(this.groundMaskContext);
        });
        this.groundMaskContext.globalCompositeOperation = 'destination-out';
        walls.forEach(wall => {
            wall.drawMask(this.groundMaskContext);
        });
        this.groundMaskContext.restore();
        this.wallMaskCanvas.width = Game_1.default.screen.x;
        this.wallMaskCanvas.height = Game_1.default.screen.y;
        this.wallMaskContext.save();
        walls.forEach(wall => {
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

/***/ "./src/Wall.ts":
/*!*********************!*\
  !*** ./src/Wall.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Wall = void 0;
const debug_1 = __webpack_require__(/*! @basementuniverse/debug */ "./node_modules/@basementuniverse/debug/build/index.js");
const input_manager_1 = __webpack_require__(/*! @basementuniverse/input-manager */ "./node_modules/@basementuniverse/input-manager/build/index.js");
const vec_1 = __webpack_require__(/*! @basementuniverse/vec */ "./node_modules/@basementuniverse/vec/vec.js");
const uuid_1 = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/commonjs-browser/index.js");
const Game_1 = __webpack_require__(/*! ./Game */ "./src/Game.ts");
const utils_1 = __webpack_require__(/*! ./utils */ "./src/utils.ts");
class Wall {
    constructor(data = {}) {
        var _a;
        this.type = 'wall';
        this.id = '';
        this.folder = null;
        this.position = (0, vec_1.vec)();
        this.size = Wall.DEFAULT_SIZE;
        this.colour = Wall.DEFAULT_COLOUR;
        this.shadowOptions = Wall.DEFAULT_SHADOW_OPTIONS;
        this.hovered = false;
        this.selected = false;
        this.dragging = false;
        this.dragOffset = null;
        Object.assign(this, data, {
            id: (_a = data.id) !== null && _a !== void 0 ? _a : (0, uuid_1.v4)().split('-')[0],
        });
        this.folder = Game_1.default.gui.addFolder(`Wall ${this.id}`);
        this.folder.add(this, 'colour');
        this.folder
            .add(this.size, 'x', Wall.MIN_SIZE.x, Wall.MAX_SIZE.x)
            .name('width');
        this.folder
            .add(this.size, 'y', Wall.MIN_SIZE.y, Wall.MAX_SIZE.y)
            .name('height');
    }
    get shadowRegion() {
        if (this.shadowOptions.type === 'region') {
            return {
                position: (0, vec_1.vec)(this.position.x + this.shadowOptions.region.position.x * this.size.x, this.position.y + this.shadowOptions.region.position.y * this.size.y),
                size: (0, vec_1.vec)(this.shadowOptions.region.size.x * this.size.x, this.shadowOptions.region.size.y * this.size.y),
            };
        }
        return null;
    }
    serialise() {
        return {
            type: this.type,
            id: this.id,
            position: this.position,
            size: this.size,
            colour: this.colour,
            shadowOptions: this.shadowOptions,
        };
    }
    static deserialise(data) {
        return new Wall(data);
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
                this.size = (0, utils_1.clampVec)(vec_1.vec.sub(input_manager_1.default.mousePosition, this.position), Wall.MIN_SIZE, Wall.MAX_SIZE);
            }
            else {
                this.position = vec_1.vec.sub(input_manager_1.default.mousePosition, this.dragOffset);
            }
        }
        debug_1.default.border(this.id, '', this.position, {
            showLabel: true,
            showValue: false,
            size: this.size,
            borderColour: this.hovered || this.dragging
                ? Wall.DEBUG_HOVER_COLOUR
                : Wall.DEBUG_COLOUR,
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
exports.Wall = Wall;
Wall.DEFAULT_SIZE = (0, vec_1.vec)(100, 100);
Wall.DEFAULT_COLOUR = '#ccc';
Wall.DEFAULT_SHADOW_OPTIONS = {
    type: 'region',
    region: {
        position: (0, vec_1.vec)(0, 0.4),
        size: (0, vec_1.vec)(1, 0.6),
    },
};
Wall.DEBUG_COLOUR = '#b05';
Wall.DEBUG_HOVER_COLOUR = '#d27';
Wall.MIN_SIZE = (0, vec_1.vec)(20, 20);
Wall.MAX_SIZE = (0, vec_1.vec)(200, 200);


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RkQ7QUFDQTtBQUNBLHNEQUFzRDtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QztBQUM5QztBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsaUJBQWlCO0FBQ2pCLHFCQUFxQjtBQUNyQixxQkFBcUI7QUFDckIscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsWUFBWSx3QkFBd0I7QUFDcEM7QUFDQSxxQkFBcUI7QUFDckI7QUFDQSxVQUFVO0FBQ1YsS0FBSyxrQ0FBa0MsRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUFFO0FBQ25FLFVBQVU7QUFDVixLQUFLLGtDQUFrQyxFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUFFO0FBQ2hGLFVBQVU7QUFDVixLQUFLLG1DQUFtQyxJQUFJLFlBQVksSUFBSSxZQUFZLElBQUk7QUFDNUUsVUFBVTtBQUNWLEtBQUssbUNBQW1DLElBQUksbUJBQW1CLElBQUksbUJBQW1CLElBQUk7QUFDMUYsVUFBVTtBQUNWLEtBQUssb0NBQW9DLElBQUksWUFBWSxJQUFJLFlBQVksSUFBSTtBQUM3RSxVQUFVO0FBQ1YsS0FBSyxvQ0FBb0MsSUFBSSxtQkFBbUIsSUFBSSxtQkFBbUIsSUFBSTtBQUMzRixVQUFVO0FBQ1YsS0FBSyxtQ0FBbUMsSUFBSSxrQkFBa0IsSUFBSSxtQkFBbUIsSUFBSTtBQUN6RjtBQUNBLEtBQUssb0NBQW9DLElBQUksa0JBQWtCLElBQUksbUJBQW1CLElBQUk7QUFDMUY7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLFVBQVU7QUFDVixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLElBQUksSUFBNkI7QUFDakMscUJBQXFCO0FBQ3JCOzs7Ozs7Ozs7OztBQ3JQQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsWUFBWSxTQUFTO0FBQ3JCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CLFlBQVksUUFBUTtBQUNwQjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsWUFBWSxRQUFRO0FBQ3BCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsWUFBWSxRQUFRO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CLFlBQVksUUFBUTtBQUNwQjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQixZQUFZLFFBQVE7QUFDcEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsWUFBWSxRQUFRO0FBQ3BCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CLFlBQVksUUFBUTtBQUNwQjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsWUFBWSxRQUFRO0FBQ3BCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixZQUFZLFFBQVE7QUFDcEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0Es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QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsK0NBQStDLEVBQUU7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7Ozs7Ozs7Ozs7O0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0JBQW9CLGtCQUFrQjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7QUFRRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOzs7Ozs7Ozs7Ozs7QUFZQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9LQUFvSyxnQ0FBZ0M7QUFDcE07QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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dkw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0osb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLGdGQUFnRix1RUFBdUU7QUFDdko7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsSUFBSTtBQUNKO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLG9DQUFvQztBQUM1RDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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Mi41ZC8uL25vZGVfbW9kdWxlcy9AYmFzZW1lbnR1bml2ZXJzZS9kZWJ1Zy9idWlsZC9pbmRleC5qcyIsIndlYnBhY2s6Ly9saWdodGluZy0yLjVkLy4vbm9kZV9tb2R1bGVzL0BiYXNlbWVudHVuaXZlcnNlL2lucHV0LW1hbmFnZXIvYnVpbGQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbGlnaHRpbmctMi41ZC8uL25vZGVfbW9kdWxlcy9AYmFzZW1lbnR1bml2ZXJzZS9wYXJzZWNvbG9yL3BhcnNlY29sb3IuanMiLCJ3ZWJwYWNrOi8vbGlnaHRpbmctMi41ZC8uL25vZGVfbW9kdWxlcy9AYmFzZW1lbnR1bml2ZXJzZS91dGlscy91dGlscy5qcyIsIndlYnBhY2s6Ly9saWdodGluZy0yLjVkLy4vbm9kZV9tb2R1bGVzL0BiYXNlbWVudHVuaXZlcnNlL3ZlYy92ZWMuanMiLCJ3ZWJwYWNrOi8vbGlnaHRpbmctMi41ZC8uL25vZGVfbW9kdWxlcy9kYXQuZ3VpL2J1aWxkL2RhdC5ndWkubW9kdWxlLmpzIiwid2VicGFjazovL2xpZ2h0aW5nLTIuNWQvLi9zcmMvR2FtZS50cyIsIndlYnBhY2s6Ly9saWdodGluZy0yLjVkLy4vc3JjL0dyb3VuZFNoYWRvd1JlY2VpdmVyLnRzIiwid2VicGFjazovL2xpZ2h0aW5nLTIuNWQvLi9zcmMvTGlnaHQudHMiLCJ3ZWJwYWNrOi8vbGlnaHRpbmctMi41ZC8uL3NyYy9MaWdodGluZ1NjZW5lLnRzIiwid2VicGFjazovL2xpZ2h0aW5nLTIuNWQvLi9zcmMvTGlnaHRpbmdTeXN0ZW0udHMiLCJ3ZWJwYWNrOi8vbGlnaHRpbmctMi41ZC8uL3NyYy9XYWxsLnRzIiwid2VicGFjazovL2xpZ2h0aW5nLTIuNWQvLi9zcmMvY29uc3RhbnRzLnRzIiwid2VicGFjazovL2xpZ2h0aW5nLTIuNWQvLi9zcmMvdHlwZXMudHMiLCJ3ZWJwYWNrOi8vbGlnaHRpbmctMi41ZC8uL3NyYy91dGlscy50cyIsIndlYnBhY2s6Ly9saWdodGluZy0yLjVkLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9jb21tb25qcy1icm93c2VyL2luZGV4LmpzIiwid2VicGFjazovL2xpZ2h0aW5nLTIuNWQvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2NvbW1vbmpzLWJyb3dzZXIvbWF4LmpzIiwid2VicGFjazovL2xpZ2h0aW5nLTIuNWQvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2NvbW1vbmpzLWJyb3dzZXIvbWQ1LmpzIiwid2VicGFjazovL2xpZ2h0aW5nLTIuNWQvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2NvbW1vbmpzLWJyb3dzZXIvbmF0aXZlLmpzIiwid2VicGFjazovL2xpZ2h0aW5nLTIuNWQvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2NvbW1vbmpzLWJyb3dzZXIvbmlsLmpzIiwid2VicGFjazovL2xpZ2h0aW5nLTIuNWQvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2NvbW1vbmpzLWJyb3dzZXIvcGFyc2UuanMiLCJ3ZWJwYWNrOi8vbGlnaHRpbmctMi41ZC8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvY29tbW9uanMtYnJvd3Nlci9yZWdleC5qcyIsIndlYnBhY2s6Ly9saWdodGluZy0yLjVkLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9jb21tb25qcy1icm93c2VyL3JuZy5qcyIsIndlYnBhY2s6Ly9saWdodGluZy0yLjVkLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9jb21tb25qcy1icm93c2VyL3NoYTEuanMiLCJ3ZWJwYWNrOi8vbGlnaHRpbmctMi41ZC8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvY29tbW9uanMtYnJvd3Nlci9zdHJpbmdpZnkuanMiLCJ3ZWJwYWNrOi8vbGlnaHRpbmctMi41ZC8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvY29tbW9uanMtYnJvd3Nlci92MS5qcyIsIndlYnBhY2s6Ly9saWdodGluZy0yLjVkLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9jb21tb25qcy1icm93c2VyL3YxVG9WNi5qcyIsIndlYnBhY2s6Ly9saWdodGluZy0yLjVkLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9jb21tb25qcy1icm93c2VyL3YzLmpzIiwid2VicGFjazovL2xpZ2h0aW5nLTIuNWQvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2NvbW1vbmpzLWJyb3dzZXIvdjM1LmpzIiwid2VicGFjazovL2xpZ2h0aW5nLTIuNWQvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2NvbW1vbmpzLWJyb3dzZXIvdjQuanMiLCJ3ZWJwYWNrOi8vbGlnaHRpbmctMi41ZC8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvY29tbW9uanMtYnJvd3Nlci92NS5qcyIsIndlYnBhY2s6Ly9saWdodGluZy0yLjVkLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9jb21tb25qcy1icm93c2VyL3Y2LmpzIiwid2VicGFjazovL2xpZ2h0aW5nLTIuNWQvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2NvbW1vbmpzLWJyb3dzZXIvdjZUb1YxLmpzIiwid2VicGFjazovL2xpZ2h0aW5nLTIuNWQvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2NvbW1vbmpzLWJyb3dzZXIvdjcuanMiLCJ3ZWJwYWNrOi8vbGlnaHRpbmctMi41ZC8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvY29tbW9uanMtYnJvd3Nlci92YWxpZGF0ZS5qcyIsIndlYnBhY2s6Ly9saWdodGluZy0yLjVkLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9jb21tb25qcy1icm93c2VyL3ZlcnNpb24uanMiLCJ3ZWJwYWNrOi8vbGlnaHRpbmctMi41ZC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9saWdodGluZy0yLjVkL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9saWdodGluZy0yLjVkL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbGlnaHRpbmctMi41ZC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2xpZ2h0aW5nLTIuNWQvLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIEFUVEVOVElPTjogVGhlIFwiZXZhbFwiIGRldnRvb2wgaGFzIGJlZW4gdXNlZCAobWF5YmUgYnkgZGVmYXVsdCBpbiBtb2RlOiBcImRldmVsb3BtZW50XCIpLlxuICogVGhpcyBkZXZ0b29sIGlzIG5laXRoZXIgbWFkZSBmb3IgcHJvZHVjdGlvbiBub3IgZm9yIHJlYWRhYmxlIG91dHB1dCBmaWxlcy5cbiAqIEl0IHVzZXMgXCJldmFsKClcIiBjYWxscyB0byBjcmVhdGUgYSBzZXBhcmF0ZSBzb3VyY2UgZmlsZSBpbiB0aGUgYnJvd3NlciBkZXZ0b29scy5cbiAqIElmIHlvdSBhcmUgdHJ5aW5nIHRvIHJlYWQgdGhlIG91dHB1dCBmaWxlLCBzZWxlY3QgYSBkaWZmZXJlbnQgZGV2dG9vbCAoaHR0cHM6Ly93ZWJwYWNrLmpzLm9yZy9jb25maWd1cmF0aW9uL2RldnRvb2wvKVxuICogb3IgZGlzYWJsZSB0aGUgZGVmYXVsdCBkZXZ0b29sIHdpdGggXCJkZXZ0b29sOiBmYWxzZVwiLlxuICogSWYgeW91IGFyZSBsb29raW5nIGZvciBwcm9kdWN0aW9uLXJlYWR5IG91dHB1dCBmaWxlcywgc2VlIG1vZGU6IFwicHJvZHVjdGlvblwiIChodHRwczovL3dlYnBhY2suanMub3JnL2NvbmZpZ3VyYXRpb24vbW9kZS8pLlxuICovXG4oZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2Uge1xuXHRcdHZhciBhID0gZmFjdG9yeSgpO1xuXHRcdGZvcih2YXIgaSBpbiBhKSAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnID8gZXhwb3J0cyA6IHJvb3QpW2ldID0gYVtpXTtcblx0fVxufSkoc2VsZiwgKCkgPT4ge1xucmV0dXJuIC8qKioqKiovICgoKSA9PiB7IC8vIHdlYnBhY2tCb290c3RyYXBcbi8qKioqKiovIFx0dmFyIF9fd2VicGFja19tb2R1bGVzX18gPSAoe1xuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL0BiYXNlbWVudHVuaXZlcnNlL3V0aWxzL3V0aWxzLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL0BiYXNlbWVudHVuaXZlcnNlL3V0aWxzL3V0aWxzLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKi8gKChtb2R1bGUpID0+IHtcblxuZXZhbChcIi8qKlxcbiAqIEBvdmVydmlldyBBIGxpYnJhcnkgb2YgdXNlZnVsIGZ1bmN0aW9uc1xcbiAqIEBhdXRob3IgR29yZG9uIExhcnJpZ2FuXFxuICovXFxuXFxuLyoqXFxuICogQ2hlY2sgaWYgdHdvIG51bWJlcnMgYXJlIGFwcHJveGltYXRlbHkgZXF1YWxcXG4gKiBAcGFyYW0ge251bWJlcn0gYSBOdW1iZXIgYVxcbiAqIEBwYXJhbSB7bnVtYmVyfSBiIE51bWJlciBiXFxuICogQHBhcmFtIHtudW1iZXJ9IFtwPU51bWJlci5FUFNJTE9OXSBUaGUgcHJlY2lzaW9uIHZhbHVlXFxuICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiBudW1iZXJzIGEgYW5kIGIgYXJlIGFwcHJveGltYXRlbHkgZXF1YWxcXG4gKi9cXG5jb25zdCBmbG9hdEVxdWFscyA9IChhLCBiLCBwID0gTnVtYmVyLkVQU0lMT04pID0+IE1hdGguYWJzKGEgLSBiKSA8IHA7XFxuXFxuLyoqXFxuICogQ2xhbXAgYSBudW1iZXIgYmV0d2VlbiBtaW4gYW5kIG1heFxcbiAqIEBwYXJhbSB7bnVtYmVyfSBhIFRoZSBudW1iZXIgdG8gY2xhbXBcXG4gKiBAcGFyYW0ge251bWJlcn0gW21pbj0wXSBUaGUgbWluaW11bSB2YWx1ZVxcbiAqIEBwYXJhbSB7bnVtYmVyfSBbbWF4PTFdIFRoZSBtYXhpbXVtIHZhbHVlXFxuICogQHJldHVybiB7bnVtYmVyfSBBIGNsYW1wZWQgbnVtYmVyXFxuICovXFxuY29uc3QgY2xhbXAgPSAoYSwgbWluID0gMCwgbWF4ID0gMSkgPT4gYSA8IG1pbiA/IG1pbiA6IChhID4gbWF4ID8gbWF4IDogYSk7XFxuXFxuLyoqXFxuICogR2V0IHRoZSBmcmFjdGlvbmFsIHBhcnQgb2YgYSBudW1iZXJcXG4gKiBAcGFyYW0ge251bWJlcn0gYSBUaGUgbnVtYmVyIGZyb20gd2hpY2ggdG8gZ2V0IHRoZSBmcmFjdGlvbmFsIHBhcnRcXG4gKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBmcmFjdGlvbmFsIHBhcnQgb2YgdGhlIG51bWJlclxcbiAqL1xcbmNvbnN0IGZyYWMgPSBhID0+IGEgPj0gMCA/IGEgLSBNYXRoLmZsb29yKGEpIDogYSAtIE1hdGguY2VpbChhKTtcXG5cXG4vKipcXG4gKiBEbyBhIGxpbmVhciBpbnRlcnBvbGF0aW9uIGJldHdlZW4gYSBhbmQgYlxcbiAqIEBwYXJhbSB7bnVtYmVyfSBhIFRoZSBtaW5pbXVtIG51bWJlclxcbiAqIEBwYXJhbSB7bnVtYmVyfSBiIFRoZSBtYXhpbXVtIG51bWJlclxcbiAqIEBwYXJhbSB7bnVtYmVyfSBpIFRoZSBpbnRlcnBvbGF0aW9uIHZhbHVlLCBzaG91bGQgYmUgaW4gdGhlIGludGVydmFsIFswLCAxXVxcbiAqIEByZXR1cm4ge251bWJlcn0gQW4gaW50ZXJwb2xhdGVkIHZhbHVlIGluIHRoZSBpbnRlcnZhbCBbYSwgYl1cXG4gKi9cXG5jb25zdCBsZXJwID0gKGEsIGIsIGkpID0+IGEgKyAoYiAtIGEpICogaTtcXG5cXG4vKipcXG4gKiBHZXQgdGhlIHBvc2l0aW9uIG9mIGkgYmV0d2VlbiBhIGFuZCBiXFxuICogQHBhcmFtIHtudW1iZXJ9IGEgVGhlIG1pbmltdW0gbnVtYmVyXFxuICogQHBhcmFtIHtudW1iZXJ9IGIgVGhlIG1heGltdW0gbnVtYmVyXFxuICogQHBhcmFtIHtudW1iZXJ9IGkgVGhlIGludGVycG9sYXRlZCB2YWx1ZSBpbiB0aGUgaW50ZXJ2YWwgW2EsIGJdXFxuICogQHJldHVybiB7bnVtYmVyfSBUaGUgcG9zaXRpb24gb2YgaSBiZXR3ZWVuIGEgYW5kIGJcXG4gKi9cXG5jb25zdCB1bmxlcnAgPSAoYSwgYiwgaSkgPT4gKGkgLSBhKSAvIChiIC0gYSk7XFxuXFxuLyoqXFxuICogRG8gYSBiaWxpbmVhciBpbnRlcnBvbGF0aW9uXFxuICogQHBhcmFtIHtudW1iZXJ9IGMwMCBUb3AtbGVmdCB2YWx1ZVxcbiAqIEBwYXJhbSB7bnVtYmVyfSBjMTAgVG9wLXJpZ2h0IHZhbHVlXFxuICogQHBhcmFtIHtudW1iZXJ9IGMwMSBCb3R0b20tbGVmdCB2YWx1ZVxcbiAqIEBwYXJhbSB7bnVtYmVyfSBjMTEgQm90dG9tLXJpZ2h0IHZhbHVlXFxuICogQHBhcmFtIHtudW1iZXJ9IGl4IEludGVycG9sYXRpb24gdmFsdWUgYWxvbmcgeFxcbiAqIEBwYXJhbSB7bnVtYmVyfSBpeSBJbnRlcnBvbGF0aW9uIHZhbHVlIGFsb25nIHlcXG4gKiBAcmV0dXJuIHtudW1iZXJ9IEEgYmlsaW5lYXIgaW50ZXJwb2xhdGVkIHZhbHVlXFxuICovXFxuY29uc3QgYmxlcnAgPSAoYzAwLCBjMTAsIGMwMSwgYzExLCBpeCwgaXkpID0+IGxlcnAobGVycChjMDAsIGMxMCwgaXgpLCBsZXJwKGMwMSwgYzExLCBpeCksIGl5KTtcXG5cXG4vKipcXG4gKiBSZS1tYXAgYSBudW1iZXIgaSBmcm9tIHJhbmdlIGExLi4uYTIgdG8gYjEuLi5iMlxcbiAqIEBwYXJhbSB7bnVtYmVyfSBpIFRoZSBudW1iZXIgdG8gcmUtbWFwXFxuICogQHBhcmFtIHtudW1iZXJ9IGExXFxuICogQHBhcmFtIHtudW1iZXJ9IGEyXFxuICogQHBhcmFtIHtudW1iZXJ9IGIxXFxuICogQHBhcmFtIHtudW1iZXJ9IGIyXFxuICogQHJldHVybiB7bnVtYmVyfVxcbiAqL1xcbmNvbnN0IHJlbWFwID0gKGksIGExLCBhMiwgYjEsIGIyKSA9PiBiMSArIChpIC0gYTEpICogKGIyIC0gYjEpIC8gKGEyIC0gYTEpO1xcblxcbi8qKlxcbiAqIERvIGEgc21vb3RoIGludGVycG9sYXRpb24gYmV0d2VlbiBhIGFuZCBiXFxuICogQHBhcmFtIHtudW1iZXJ9IGEgVGhlIG1pbmltdW0gbnVtYmVyXFxuICogQHBhcmFtIHtudW1iZXJ9IGIgVGhlIG1heGltdW0gbnVtYmVyXFxuICogQHBhcmFtIHtudW1iZXJ9IGkgVGhlIGludGVycG9sYXRpb24gdmFsdWVcXG4gKiBAcmV0dXJuIHtudW1iZXJ9IEFuIGludGVycG9sYXRlZCB2YWx1ZSBpbiB0aGUgaW50ZXJ2YWwgW2EsIGJdXFxuICovXFxuY29uc3Qgc21vb3Roc3RlcCA9IChhLCBiLCBpKSA9PiBsZXJwKGEsIGIsIDMgKiBNYXRoLnBvdyhpLCAyKSAtIDIgKiBNYXRoLnBvdyhpLCAzKSk7XFxuXFxuLyoqXFxuICogR2V0IGFuIGFuZ2xlIGluIHJhZGlhbnNcXG4gKiBAcGFyYW0ge251bWJlcn0gZGVncmVlcyBUaGUgYW5nbGUgaW4gZGVncmVlc1xcbiAqIEByZXR1cm4ge251bWJlcn0gVGhlIGFuZ2xlIGluIHJhZGlhbnNcXG4gKi9cXG5jb25zdCByYWRpYW5zID0gZGVncmVlcyA9PiAoTWF0aC5QSSAvIDE4MCkgKiBkZWdyZWVzO1xcblxcbi8qKlxcbiAqIEdldCBhbiBhbmdsZSBpbiBkZWdyZWVzXFxuICogQHBhcmFtIHtudW1iZXJ9IHJhZGlhbnMgVGhlIGFuZ2xlIGluIHJhZGlhbnNcXG4gKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBhbmdsZSBpbiBkZWdyZWVzXFxuICovXFxuY29uc3QgZGVncmVlcyA9IHJhZGlhbnMgPT4gKDE4MCAvIE1hdGguUEkpICogcmFkaWFucztcXG5cXG4vKipcXG4gKiBHZXQgYSByYW5kb20gZmxvYXQgaW4gdGhlIGludGVydmFsIFttaW4sIG1heClcXG4gKiBAcGFyYW0ge251bWJlcn0gbWluIEluY2x1c2l2ZSBtaW5cXG4gKiBAcGFyYW0ge251bWJlcn0gbWF4IEV4Y2x1c2l2ZSBtYXhcXG4gKiBAcmV0dXJuIHtudW1iZXJ9IEEgcmFuZG9tIGZsb2F0IGluIHRoZSBpbnRlcnZhbCBbbWluLCBtYXgpXFxuICovXFxuY29uc3QgcmFuZG9tQmV0d2VlbiA9IChtaW4sIG1heCkgPT4gTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pICsgbWluO1xcblxcbi8qKlxcbiAqIEdldCBhIHJhbmRvbSBpbnRlZ2VyIGluIHRoZSBpbnRlcnZhbCBbbWluLCBtYXhdXFxuICogQHBhcmFtIHtudW1iZXJ9IG1pbiBJbmNsdXNpdmUgbWluXFxuICogQHBhcmFtIHtudW1iZXJ9IG1heCBJbmNsdXNpdmUgbWF4XFxuICogQHJldHVybiB7bnVtYmVyfSBBIHJhbmRvbSBpbnRlZ2VyIGluIHRoZSBpbnRlcnZhbCBbbWluLCBtYXhdXFxuICovXFxuY29uc3QgcmFuZG9tSW50QmV0d2VlbiA9IChtaW4sIG1heCkgPT4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpKSArIG1pbjtcXG5cXG4vKipcXG4gKiBHZXQgYSBub3JtYWxseS1kaXN0cmlidXRlZCByYW5kb20gbnVtYmVyXFxuICogQHBhcmFtIHtudW1iZXJ9IFttdT0wLjVdIFRoZSBtZWFuIHZhbHVlXFxuICogQHBhcmFtIHtudW1iZXJ9IFtzaWdtYT0wLjVdIFRoZSBzdGFuZGFyZCBkZXZpYXRpb25cXG4gKiBAcGFyYW0ge251bWJlcn0gW3NhbXBsZXM9Ml0gVGhlIG51bWJlciBvZiBzYW1wbGVzXFxuICogQHJldHVybiB7bnVtYmVyfSBBIG5vcm1hbGx5LWRpc3RyaWJ1dGVkIHJhbmRvbSBudW1iZXJcXG4gKi9cXG5jb25zdCBjbHRSYW5kb20gPSAobXUgPSAwLjUsIHNpZ21hID0gMC41LCBzYW1wbGVzID0gMikgPT4ge1xcbiAgbGV0IHRvdGFsID0gMDtcXG4gIGZvciAobGV0IGkgPSBzYW1wbGVzOyBpLS07KSB7XFxuICAgIHRvdGFsICs9IE1hdGgucmFuZG9tKCk7XFxuICB9XFxuICByZXR1cm4gbXUgKyAodG90YWwgLSBzYW1wbGVzIC8gMikgLyAoc2FtcGxlcyAvIDIpICogc2lnbWE7XFxufTtcXG5cXG4vKipcXG4gKiBHZXQgYSBub3JtYWxseS1kaXN0cmlidXRlZCByYW5kb20gaW50ZWdlciBpbiB0aGUgaW50ZXJ2YWwgW21pbiwgbWF4XVxcbiAqIEBwYXJhbSB7bnVtYmVyfSBtaW4gSW5jbHVzaXZlIG1pblxcbiAqIEBwYXJhbSB7bnVtYmVyfSBtYXggSW5jbHVzaXZlIG1heFxcbiAqIEByZXR1cm4ge251bWJlcn0gQSBub3JtYWxseS1kaXN0cmlidXRlZCByYW5kb20gaW50ZWdlclxcbiAqL1xcbmNvbnN0IGNsdFJhbmRvbUludCA9IChtaW4sIG1heCkgPT4gTWF0aC5mbG9vcihtaW4gKyBjbHRSYW5kb20oMC41LCAwLjUsIDIpICogKG1heCArIDEgLSBtaW4pKTtcXG5cXG4vKipcXG4gKiBSZXR1cm4gYSB3ZWlnaHRlZCByYW5kb20gaW50ZWdlclxcbiAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0gdyBBbiBhcnJheSBvZiB3ZWlnaHRzXFxuICogQHJldHVybiB7bnVtYmVyfSBBbiBpbmRleCBmcm9tIHdcXG4gKi9cXG5jb25zdCB3ZWlnaHRlZFJhbmRvbSA9IHcgPT4ge1xcbiAgbGV0IHRvdGFsID0gdy5yZWR1Y2UoKGEsIGkpID0+IGEgKyBpLCAwKSwgbiA9IDA7XFxuICBjb25zdCByID0gTWF0aC5yYW5kb20oKSAqIHRvdGFsO1xcbiAgd2hpbGUgKHRvdGFsID4gcikge1xcbiAgICB0b3RhbCAtPSB3W24rK107XFxuICB9XFxuICByZXR1cm4gbiAtIDE7XFxufTtcXG5cXG4vKipcXG4gKiBBbiBpbnRlcnBvbGF0aW9uIGZ1bmN0aW9uXFxuICogQGNhbGxiYWNrIGludGVycG9sYXRpb25DYWxsYmFja1xcbiAqIEBwYXJhbSB7bnVtYmVyfSBhIFRoZSBtaW5pbXVtIG51bWJlclxcbiAqIEBwYXJhbSB7bnVtYmVyfSBiIFRoZSBtYXhpbXVtIG51bWJlclxcbiAqIEBwYXJhbSB7bnVtYmVyfSBpIFRoZSBpbnRlcnBvbGF0aW9uIHZhbHVlLCBzaG91bGQgYmUgaW4gdGhlIGludGVydmFsIFswLCAxXVxcbiAqIEByZXR1cm4ge251bWJlcn0gVGhlIGludGVycG9sYXRlZCB2YWx1ZSBpbiB0aGUgaW50ZXJ2YWwgW2EsIGJdXFxuICovXFxuXFxuLyoqXFxuICogUmV0dXJuIGFuIGludGVycG9sYXRlZCB2YWx1ZSBmcm9tIGFuIGFycmF5XFxuICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSBhIEFuIGFycmF5IG9mIHZhbHVlcyBpbnRlcnBvbGF0ZVxcbiAqIEBwYXJhbSB7bnVtYmVyfSBpIEEgbnVtYmVyIGluIHRoZSBpbnRlcnZhbCBbMCwgMV1cXG4gKiBAcGFyYW0ge2ludGVycG9sYXRpb25DYWxsYmFja30gW2Y9TWF0aC5sZXJwXSBUaGUgaW50ZXJwb2xhdGlvbiBmdW5jdGlvbiB0byB1c2VcXG4gKiBAcmV0dXJuIHtudW1iZXJ9IEFuIGludGVycG9sYXRlZCB2YWx1ZSBpbiB0aGUgaW50ZXJ2YWwgW21pbihhKSwgbWF4KGEpXVxcbiAqL1xcbmNvbnN0IGxlcnBBcnJheSA9IChhLCBpLCBmID0gbGVycCkgPT4ge1xcbiAgY29uc3QgcyA9IGkgKiAoYS5sZW5ndGggLSAxKTtcXG4gIGNvbnN0IHAgPSBjbGFtcChNYXRoLnRydW5jKHMpLCAwLCBhLmxlbmd0aCAtIDEpO1xcbiAgcmV0dXJuIGYoYVtwXSB8fCAwLCBhW3AgKyAxXSB8fCAwLCBmcmFjKHMpKTtcXG59O1xcblxcbi8qKlxcbiAqIEdldCB0aGUgZG90IHByb2R1Y3Qgb2YgdHdvIHZlY3RvcnNcXG4gKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IGEgVmVjdG9yIGFcXG4gKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IGIgVmVjdG9yIGJcXG4gKiBAcmV0dXJuIHtudW1iZXJ9IGEg4oiZIGJcXG4gKi9cXG5jb25zdCBkb3QgPSAoYSwgYikgPT4gYS5yZWR1Y2UoKG4sIHYsIGkpID0+IG4gKyB2ICogYltpXSwgMCk7XFxuXFxuLyoqXFxuICogR2V0IHRoZSBmYWN0b3JpYWwgb2YgYSBudW1iZXJcXG4gKiBAcGFyYW0ge251bWJlcn0gYVxcbiAqIEByZXR1cm4ge251bWJlcn0gYSFcXG4gKi9cXG5jb25zdCBmYWN0b3JpYWwgPSBhID0+IHtcXG4gIGxldCByZXN1bHQgPSAxO1xcbiAgZm9yIChsZXQgaSA9IDI7IGkgPD0gYTsgaSsrKSB7XFxuICAgIHJlc3VsdCAqPSBpO1xcbiAgfVxcbiAgcmV0dXJuIHJlc3VsdDtcXG59O1xcblxcbi8qKlxcbiAqIEdldCB0aGUgbnVtYmVyIG9mIHBlcm11dGF0aW9ucyBvZiByIGVsZW1lbnRzIGZyb20gYSBzZXQgb2YgbiBlbGVtZW50c1xcbiAqIEBwYXJhbSB7bnVtYmVyfSBuXFxuICogQHBhcmFtIHtudW1iZXJ9IHJcXG4gKiBAcmV0dXJuIHtudW1iZXJ9IG5QclxcbiAqL1xcbmNvbnN0IHBlcm11dGF0aW9uID0gKG4sIHIpID0+IGZhY3RvcmlhbChuKSAvIGZhY3RvcmlhbChuIC0gcik7XFxuXFxuLyoqXFxuICogR2V0IHRoZSBudW1iZXIgb2YgY29tYmluYXRpb25zIG9mIHIgZWxlbWVudHMgZnJvbSBhIHNldCBvZiBuIGVsZW1lbnRzXFxuICogQHBhcmFtIHtudW1iZXJ9IG5cXG4gKiBAcGFyYW0ge251bWJlcn0gclxcbiAqIEByZXR1cm4ge251bWJlcn0gbkNyXFxuICovXFxuY29uc3QgY29tYmluYXRpb24gPSAobiwgcikgPT4gZmFjdG9yaWFsKG4pIC8gKGZhY3RvcmlhbChyKSAqIGZhY3RvcmlhbChuIC0gcikpO1xcblxcbi8qKlxcbiAqIEEgZnVuY3Rpb24gZm9yIGdlbmVyYXRpbmcgYXJyYXkgdmFsdWVzXFxuICogQGNhbGxiYWNrIHRpbWVzQ2FsbGJhY2tcXG4gKiBAcGFyYW0ge251bWJlcn0gaSBUaGUgYXJyYXkgaW5kZXhcXG4gKiBAcmV0dXJuIHsqfSBUaGUgYXJyYXkgdmFsdWVcXG4gKi9cXG5cXG4vKipcXG4gKiBSZXR1cm4gYSBuZXcgYXJyYXkgd2l0aCBsZW5ndGggbiBieSBjYWxsaW5nIGZ1bmN0aW9uIGYoaSkgb24gZWFjaCBlbGVtZW50XFxuICogQHBhcmFtIHt0aW1lc0NhbGxiYWNrfSBmXFxuICogQHBhcmFtIHtudW1iZXJ9IG4gVGhlIHNpemUgb2YgdGhlIGFycmF5XFxuICogQHJldHVybiB7QXJyYXk8Kj59XFxuICovXFxuY29uc3QgdGltZXMgPSAoZiwgbikgPT4gQXJyYXkobikuZmlsbCgwKS5tYXAoKF8sIGkpID0+IGYoaSkpO1xcblxcbi8qKlxcbiAqIFJldHVybiBhbiBhcnJheSBjb250YWluaW5nIG51bWJlcnMgMC0+KG4gLSAxKVxcbiAqIEBwYXJhbSB7bnVtYmVyfSBuIFRoZSBzaXplIG9mIHRoZSBhcnJheVxcbiAqIEByZXR1cm4ge0FycmF5PG51bWJlcj59IEFuIGFycmF5IG9mIGludGVnZXJzIDAtPihuIC0gMSlcXG4gKi9cXG5jb25zdCByYW5nZSA9IG4gPT4gdGltZXMoaSA9PiBpLCBuKTtcXG5cXG4vKipcXG4gKiBaaXAgMiBhcnJheXMgdG9nZXRoZXIsIGkuZS4gKFsxLCAyLCAzXSwgW2EsIGIsIGNdKSA9PiBbWzEsIGFdLCBbMiwgYl0sIFszLCBjXV1cXG4gKiBAcGFyYW0ge0FycmF5PCo+fSBhXFxuICogQHBhcmFtIHtBcnJheTwqPn0gYlxcbiAqIEByZXR1cm4ge0FycmF5PEFycmF5PCo+Pn1cXG4gKi9cXG5jb25zdCB6aXAgPSAoYSwgYikgPT4gYS5tYXAoKGssIGkpID0+IFtrLCBiW2ldXSk7XFxuXFxuLyoqXFxuICogUmV0dXJuIGFycmF5W2ldIHdpdGggcG9zaXRpdmUgYW5kIG5lZ2F0aXZlIHdyYXBwaW5nXFxuICogQHBhcmFtIHtBcnJheTwqPn0gYVxcbiAqIEBwYXJhbSB7bnVtYmVyfSBpIFRoZSBwb3NpdGl2ZWx5L25lZ2F0aXZlbHkgd3JhcHBlZCBhcnJheSBpbmRleFxcbiAqIEByZXR1cm4geyp9IEFuIGVsZW1lbnQgZnJvbSB0aGUgYXJyYXlcXG4gKi9cXG5jb25zdCBhdCA9IChhLCBpKSA9PiBhW2kgPCAwID8gYS5sZW5ndGggLSAoTWF0aC5hYnMoaSArIDEpICUgYS5sZW5ndGgpIC0gMSA6IGkgJSBhLmxlbmd0aF07XFxuXFxuLyoqXFxuICogQ2hvcCBhbiBhcnJheSBpbnRvIGNodW5rcyBvZiBzaXplIG5cXG4gKiBAcGFyYW0ge0FycmF5PCo+fSBhXFxuICogQHBhcmFtIHtudW1iZXJ9IG4gVGhlIGNodW5rIHNpemVcXG4gKiBAcmV0dXJuIHtBcnJheTxBcnJheTwqPj59IEFuIGFycmF5IG9mIGFycmF5IGNodW5rc1xcbiAqL1xcbmNvbnN0IGNodW5rID0gKGEsIG4pID0+IHRpbWVzKGkgPT4gYS5zbGljZShpICogbiwgaSAqIG4gKyBuKSwgTWF0aC5jZWlsKGEubGVuZ3RoIC8gbikpO1xcblxcbi8qKlxcbiAqIFJhbmRvbWx5IHNodWZmbGUgYSBzaGFsbG93IGNvcHkgb2YgYW4gYXJyYXlcXG4gKiBAcGFyYW0ge0FycmF5PCo+fSBhXFxuICogQHJldHVybiB7QXJyYXk8Kj59IFRoZSBzaHVmZmxlZCBhcnJheVxcbiAqL1xcbmNvbnN0IHNodWZmbGUgPSBhID0+IGEuc2xpY2UoKS5zb3J0KCgpID0+IE1hdGgucmFuZG9tKCkgLSAwLjUpO1xcblxcbmlmICh0cnVlKSB7XFxuICBtb2R1bGUuZXhwb3J0cyA9IHtcXG4gICAgZmxvYXRFcXVhbHMsXFxuICAgIGNsYW1wLFxcbiAgICBmcmFjLFxcbiAgICBsZXJwLFxcbiAgICB1bmxlcnAsXFxuICAgIGJsZXJwLFxcbiAgICByZW1hcCxcXG4gICAgc21vb3Roc3RlcCxcXG4gICAgcmFkaWFucyxcXG4gICAgZGVncmVlcyxcXG4gICAgcmFuZG9tQmV0d2VlbixcXG4gICAgcmFuZG9tSW50QmV0d2VlbixcXG4gICAgY2x0UmFuZG9tLFxcbiAgICBjbHRSYW5kb21JbnQsXFxuICAgIHdlaWdodGVkUmFuZG9tLFxcbiAgICBsZXJwQXJyYXksXFxuICAgIGRvdCxcXG4gICAgZmFjdG9yaWFsLFxcbiAgICBwZXJtdXRhdGlvbixcXG4gICAgY29tYmluYXRpb24sXFxuICAgIHRpbWVzLFxcbiAgICByYW5nZSxcXG4gICAgemlwLFxcbiAgICBhdCxcXG4gICAgY2h1bmssXFxuICAgIHNodWZmbGUsXFxuICB9O1xcbn1cXG5cXG5cXG4vLyMgc291cmNlVVJMPXdlYnBhY2s6Ly9AYmFzZW1lbnR1bml2ZXJzZS9kZWJ1Zy8uL25vZGVfbW9kdWxlcy9AYmFzZW1lbnR1bml2ZXJzZS91dGlscy91dGlscy5qcz9cIik7XG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL0BiYXNlbWVudHVuaXZlcnNlL3ZlYy92ZWMuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9AYmFzZW1lbnR1bml2ZXJzZS92ZWMvdmVjLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqLyAoKG1vZHVsZSwgX191bnVzZWRfd2VicGFja19leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSA9PiB7XG5cbmV2YWwoXCJjb25zdCB7IHRpbWVzLCBjaHVuaywgZG90IH0gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBAYmFzZW1lbnR1bml2ZXJzZS91dGlscyAqLyBcXFwiLi9ub2RlX21vZHVsZXMvQGJhc2VtZW50dW5pdmVyc2UvdXRpbHMvdXRpbHMuanNcXFwiKTtcXG5cXG4vKipcXG4gKiBAb3ZlcnZpZXcgQSBsaWJyYXJ5IG9mIHVzZWZ1bCBmdW5jdGlvbnNcXG4gKiBAYXV0aG9yIEdvcmRvbiBMYXJyaWdhblxcbiAqL1xcblxcbi8qKlxcbiAqIEEgMmQgdmVjdG9yXFxuICogQHR5cGVkZWYge09iamVjdH0gdmVjXFxuICogQHByb3BlcnR5IHtudW1iZXJ9IHggVGhlIHggY29tcG9uZW50IG9mIHRoZSB2ZWN0b3JcXG4gKiBAcHJvcGVydHkge251bWJlcn0geSBUaGUgeSBjb21wb25lbnQgb2YgdGhlIHZlY3RvclxcbiAqL1xcblxcbi8qKlxcbiAqIENyZWF0ZSBhIG5ldyB2ZWN0b3JcXG4gKiBAcGFyYW0ge251bWJlcnx2ZWN9IFt4XSBUaGUgeCBjb21wb25lbnQgb2YgdGhlIHZlY3Rvciwgb3IgYSB2ZWN0b3IgdG8gY29weVxcbiAqIEBwYXJhbSB7bnVtYmVyfSBbeV0gVGhlIHkgY29tcG9uZW50IG9mIHRoZSB2ZWN0b3JcXG4gKiBAcmV0dXJuIHt2ZWN9IEEgbmV3IHZlY3RvclxcbiAqIEBleGFtcGxlIDxjYXB0aW9uPlZhcmlvdXMgd2F5cyB0byBpbml0aWFsaXNlIGEgdmVjdG9yPC9jYXB0aW9uPlxcbiAqIGxldCBhID0gdmVjKDMsIDIpOyAgLy8gKDMsIDIpXFxuICogbGV0IGIgPSB2ZWMoNCk7ICAgICAvLyAoNCwgNClcXG4gKiBsZXQgYyA9IHZlYyhhKTsgICAgIC8vICgzLCAyKVxcbiAqIGxldCBkID0gdmVjKCk7ICAgICAgLy8gKDAsIDApXFxuICovXFxuY29uc3QgdmVjID0gKHgsIHkpID0+ICgheCAmJiAheSA/XFxuICB7IHg6IDAsIHk6IDAgfSA6ICh0eXBlb2YgeCA9PT0gJ29iamVjdCcgP1xcbiAgICB7IHg6IHgueCB8fCAwLCB5OiB4LnkgfHwgMCB9IDogKHkgPT09IG51bGwgfHwgeSA9PT0gdW5kZWZpbmVkID9cXG4gICAgICB7IHg6IHgsIHk6IHggfSA6IHsgeDogeCwgeTogeSB9KVxcbiAgKVxcbik7XFxuXFxuLyoqXFxuICogR2V0IHRoZSBjb21wb25lbnRzIG9mIGEgdmVjdG9yIGFzIGFuIGFycmF5XFxuICogQHBhcmFtIHt2ZWN9IGEgVGhlIHZlY3RvciB0byBnZXQgY29tcG9uZW50cyBmcm9tXFxuICogQHJldHVybiB7QXJyYXk8bnVtYmVyPn0gVGhlIHZlY3RvciBjb21wb25lbnRzIGFzIGFuIGFycmF5XFxuICovXFxudmVjLmNvbXBvbmVudHMgPSBhID0+IFthLngsIGEueV07XFxuXFxuLyoqXFxuICogUmV0dXJuIGEgdW5pdCB2ZWN0b3IgKDEsIDApXFxuICogQHJldHVybiB7dmVjfSBBIHVuaXQgdmVjdG9yICgxLCAwKVxcbiAqL1xcbnZlYy51eCA9ICgpID0+IHZlYygxLCAwKTtcXG5cXG4vKipcXG4gKiBSZXR1cm4gYSB1bml0IHZlY3RvciAoMCwgMSlcXG4gKiBAcmV0dXJuIHt2ZWN9IEEgdW5pdCB2ZWN0b3IgKDAsIDEpXFxuICovXFxudmVjLnV5ID0gKCkgPT4gdmVjKDAsIDEpO1xcblxcbi8qKlxcbiAqIEFkZCB2ZWN0b3JzXFxuICogQHBhcmFtIHt2ZWN9IGEgVmVjdG9yIGFcXG4gKiBAcGFyYW0ge3ZlY30gYiBWZWN0b3IgYlxcbiAqIEByZXR1cm4ge3ZlY30gYSArIGJcXG4gKi9cXG52ZWMuYWRkID0gKGEsIGIpID0+ICh7IHg6IGEueCArIGIueCwgeTogYS55ICsgYi55IH0pO1xcblxcbi8qKlxcbiAqIFNjYWxlIGEgdmVjdG9yXFxuICogQHBhcmFtIHt2ZWN9IGEgVmVjdG9yIGFcXG4gKiBAcGFyYW0ge251bWJlcn0gYiBTY2FsYXIgYlxcbiAqIEByZXR1cm4ge3ZlY30gYSAqIGJcXG4gKi9cXG52ZWMubXVsID0gKGEsIGIpID0+ICh7IHg6IGEueCAqIGIsIHk6IGEueSAqIGIgfSk7XFxuXFxuLyoqXFxuICogU3VidHJhY3QgdmVjdG9yc1xcbiAqIEBwYXJhbSB7dmVjfSBhIFZlY3RvciBhXFxuICogQHBhcmFtIHt2ZWN9IGIgVmVjdG9yIGJcXG4gKiBAcmV0dXJuIHt2ZWN9IGEgLSBiXFxuICovXFxudmVjLnN1YiA9IChhLCBiKSA9PiAoeyB4OiBhLnggLSBiLngsIHk6IGEueSAtIGIueSB9KTtcXG5cXG4vKipcXG4gKiBHZXQgdGhlIGxlbmd0aCBvZiBhIHZlY3RvclxcbiAqIEBwYXJhbSB7dmVjfSBhIFZlY3RvciBhXFxuICogQHJldHVybiB7bnVtYmVyfSB8YXxcXG4gKi9cXG52ZWMubGVuID0gYSA9PiBNYXRoLnNxcnQoYS54ICogYS54ICsgYS55ICogYS55KTtcXG5cXG4vKipcXG4gKiBHZXQgdGhlIGxlbmd0aCBvZiBhIHZlY3RvciB1c2luZyB0YXhpY2FiIGdlb21ldHJ5XFxuICogQHBhcmFtIHt2ZWN9IGEgVmVjdG9yIGFcXG4gKiBAcmV0dXJuIHtudW1iZXJ9IHxhfFxcbiAqL1xcbnZlYy5tYW5oYXR0YW4gPSBhID0+IE1hdGguYWJzKGEueCkgKyBNYXRoLmFicyhhLnkpO1xcblxcbi8qKlxcbiAqIE5vcm1hbGlzZSBhIHZlY3RvclxcbiAqIEBwYXJhbSB7dmVjfSBhIFRoZSB2ZWN0b3IgdG8gbm9ybWFsaXNlXFxuICogQHJldHVybiB7dmVjfSBeYVxcbiAqL1xcbnZlYy5ub3IgPSBhID0+IHtcXG4gIGxldCBsZW4gPSB2ZWMubGVuKGEpO1xcbiAgcmV0dXJuIGxlbiA/IHsgeDogYS54IC8gbGVuLCB5OiBhLnkgLyBsZW4gfSA6IHZlYygpO1xcbn07XFxuXFxuLyoqXFxuICogR2V0IGEgZG90IHByb2R1Y3Qgb2YgdmVjdG9yc1xcbiAqIEBwYXJhbSB7dmVjfSBhIFZlY3RvciBhXFxuICogQHBhcmFtIHt2ZWN9IGIgVmVjdG9yIGJcXG4gKiBAcmV0dXJuIHtudW1iZXJ9IGEg4oiZIGJcXG4gKi9cXG52ZWMuZG90ID0gKGEsIGIpID0+IGEueCAqIGIueCArIGEueSAqIGIueTtcXG5cXG4vKipcXG4gKiBSb3RhdGUgYSB2ZWN0b3IgYnkgciByYWRpYW5zXFxuICogQHBhcmFtIHt2ZWN9IGEgVGhlIHZlY3RvciB0byByb3RhdGVcXG4gKiBAcGFyYW0ge251bWJlcn0gciBUaGUgYW5nbGUgdG8gcm90YXRlIGJ5LCBtZWFzdXJlZCBpbiByYWRpYW5zXFxuICogQHJldHVybiB7dmVjfSBBIHJvdGF0ZWQgdmVjdG9yXFxuICovXFxudmVjLnJvdCA9IChhLCByKSA9PiB7XFxuICBsZXQgcyA9IE1hdGguc2luKHIpLFxcbiAgICBjID0gTWF0aC5jb3Mocik7XFxuICByZXR1cm4geyB4OiBjICogYS54IC0gcyAqIGEueSwgeTogcyAqIGEueCArIGMgKiBhLnkgfTtcXG59XFxuXFxuLyoqXFxuICogQ2hlY2sgaWYgdHdvIHZlY3RvcnMgYXJlIGVxdWFsXFxuICogQHBhcmFtIHt2ZWN9IGEgVmVjdG9yIGFcXG4gKiBAcGFyYW0ge3ZlY30gYiBWZWN0b3IgYlxcbiAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgdmVjdG9ycyBhIGFuZCBiIGFyZSBlcXVhbCwgZmFsc2Ugb3RoZXJ3aXNlXFxuICovXFxudmVjLmVxID0gKGEsIGIpID0+IGEueCA9PT0gYi54ICYmIGEueSA9PT0gYi55O1xcblxcbi8qKlxcbiAqIEdldCB0aGUgYW5nbGUgb2YgYSB2ZWN0b3JcXG4gKiBAcGFyYW0ge3ZlY30gYSBWZWN0b3IgYVxcbiAqIEByZXR1cm4ge251bWJlcn0gVGhlIGFuZ2xlIG9mIHZlY3RvciBhIGluIHJhZGlhbnNcXG4gKi9cXG52ZWMucmFkID0gYSA9PiBNYXRoLmF0YW4yKGEueSwgYS54KTtcXG5cXG4vKipcXG4gKiBDb3B5IGEgdmVjdG9yXFxuICogQHBhcmFtIHt2ZWN9IGEgVGhlIHZlY3RvciB0byBjb3B5XFxuICogQHJldHVybiB7dmVjfSBBIGNvcHkgb2YgdmVjdG9yIGFcXG4gKi9cXG52ZWMuY3B5ID0gYSA9PiB2ZWMoYSk7XFxuXFxuLyoqXFxuICogQSBmdW5jdGlvbiB0byBjYWxsIG9uIGVhY2ggY29tcG9uZW50IG9mIGEgdmVjdG9yXFxuICogQGNhbGxiYWNrIHZlY3Rvck1hcENhbGxiYWNrXFxuICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlIFRoZSBjb21wb25lbnQgdmFsdWVcXG4gKiBAcGFyYW0geyd4JyB8ICd5J30gbGFiZWwgVGhlIGNvbXBvbmVudCBsYWJlbCAoeCBvciB5KVxcbiAqIEByZXR1cm4ge251bWJlcn0gVGhlIG1hcHBlZCBjb21wb25lbnRcXG4gKi9cXG5cXG4vKipcXG4gKiBDYWxsIGEgZnVuY3Rpb24gb24gZWFjaCBjb21wb25lbnQgb2YgYSB2ZWN0b3IgYW5kIGJ1aWxkIGEgbmV3IHZlY3RvciBmcm9tIHRoZSByZXN1bHRzXFxuICogQHBhcmFtIHt2ZWN9IGEgVmVjdG9yIGFcXG4gKiBAcGFyYW0ge3ZlY3Rvck1hcENhbGxiYWNrfSBmIFRoZSBmdW5jdGlvbiB0byBjYWxsIG9uIGVhY2ggY29tcG9uZW50IG9mIHRoZSB2ZWN0b3JcXG4gKiBAcmV0dXJuIHt2ZWN9IFZlY3RvciBhIG1hcHBlZCB0aHJvdWdoIGZcXG4gKi9cXG52ZWMubWFwID0gKGEsIGYpID0+ICh7IHg6IGYoYS54LCAneCcpLCB5OiBmKGEueSwgJ3knKSB9KTtcXG5cXG4vKipcXG4gKiBDb252ZXJ0IGEgdmVjdG9yIGludG8gYSBzdHJpbmdcXG4gKiBAcGFyYW0ge3ZlY30gYSBUaGUgdmVjdG9yIHRvIGNvbnZlcnRcXG4gKiBAcGFyYW0ge3N0cmluZ30gW3M9JywgJ10gVGhlIHNlcGFyYXRvciBzdHJpbmdcXG4gKiBAcmV0dXJuIHtzdHJpbmd9IEEgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSB2ZWN0b3JcXG4gKi9cXG52ZWMuc3RyID0gKGEsIHMgPSAnLCAnKSA9PiBgJHthLnh9JHtzfSR7YS55fWA7XFxuXFxuLyoqXFxuICogQSBtYXRyaXhcXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBtYXRcXG4gKiBAcHJvcGVydHkge251bWJlcn0gbSBUaGUgbnVtYmVyIG9mIHJvd3MgaW4gdGhlIG1hdHJpeFxcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBuIFRoZSBudW1iZXIgb2YgY29sdW1ucyBpbiB0aGUgbWF0cml4XFxuICogQHByb3BlcnR5IHtBcnJheTxudW1iZXI+fSBlbnRyaWVzIFRoZSBtYXRyaXggdmFsdWVzXFxuICovXFxuXFxuLyoqXFxuICogQ3JlYXRlIGEgbmV3IG1hdHJpeFxcbiAqIEBwYXJhbSB7bnVtYmVyfSBbbT00XSBUaGUgbnVtYmVyIG9mIHJvd3NcXG4gKiBAcGFyYW0ge251bWJlcn0gW249NF0gVGhlIG51bWJlciBvZiBjb2x1bW5zXFxuICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSBbZW50cmllcz1bXV0gTWF0cml4IHZhbHVlcyBpbiByZWFkaW5nIG9yZGVyXFxuICogQHJldHVybiB7bWF0fSBBIG5ldyBtYXRyaXhcXG4gKi9cXG5jb25zdCBtYXQgPSAobSA9IDQsIG4gPSA0LCBlbnRyaWVzID0gW10pID0+ICh7XFxuICBtLCBuLFxcbiAgZW50cmllczogZW50cmllcy5jb25jYXQoQXJyYXkobSAqIG4pLmZpbGwoMCkpLnNsaWNlKDAsIG0gKiBuKVxcbn0pO1xcblxcbi8qKlxcbiAqIEdldCBhbiBpZGVudGl0eSBtYXRyaXggb2Ygc2l6ZSBuXFxuICogQHBhcmFtIHtudW1iZXJ9IG4gVGhlIHNpemUgb2YgdGhlIG1hdHJpeFxcbiAqIEByZXR1cm4ge21hdH0gQW4gaWRlbnRpdHkgbWF0cml4XFxuICovXFxubWF0LmlkZW50aXR5ID0gbiA9PiBtYXQobiwgbiwgQXJyYXkobiAqIG4pLmZpbGwoMCkubWFwKCh2LCBpKSA9PiArKE1hdGguZmxvb3IoaSAvIG4pID09PSBpICUgbikpKTtcXG5cXG4vKipcXG4gKiBHZXQgYW4gZW50cnkgZnJvbSBhIG1hdHJpeFxcbiAqIEBwYXJhbSB7bWF0fSBhIE1hdHJpeCBhXFxuICogQHBhcmFtIHtudW1iZXJ9IGkgVGhlIHJvdyBvZmZzZXRcXG4gKiBAcGFyYW0ge251bWJlcn0gaiBUaGUgY29sdW1uIG9mZnNldFxcbiAqIEByZXR1cm4ge251bWJlcn0gVGhlIHZhbHVlIGF0IHBvc2l0aW9uIChpLCBqKSBpbiBtYXRyaXggYVxcbiAqL1xcbm1hdC5nZXQgPSAoYSwgaSwgaikgPT4gYS5lbnRyaWVzWyhqIC0gMSkgKyAoaSAtIDEpICogYS5uXTtcXG5cXG4vKipcXG4gKiBTZXQgYW4gZW50cnkgb2YgYSBtYXRyaXhcXG4gKiBAcGFyYW0ge21hdH0gYSBNYXRyaXggYVxcbiAqIEBwYXJhbSB7bnVtYmVyfSBpIFRoZSByb3cgb2Zmc2V0XFxuICogQHBhcmFtIHtudW1iZXJ9IGogVGhlIGNvbHVtbiBvZmZzZXRcXG4gKiBAcGFyYW0ge251bWJlcn0gdiBUaGUgdmFsdWUgdG8gc2V0IGluIG1hdHJpeCBhXFxuICovXFxubWF0LnNldCA9IChhLCBpLCBqLCB2KSA9PiB7IGEuZW50cmllc1soaiAtIDEpICsgKGkgLSAxKSAqIGEubl0gPSB2OyB9O1xcblxcbi8qKlxcbiAqIEdldCBhIHJvdyBmcm9tIGEgbWF0cml4IGFzIGFuIGFycmF5XFxuICogQHBhcmFtIHttYXR9IGEgTWF0cml4IGFcXG4gKiBAcGFyYW0ge251bWJlcn0gbSBUaGUgcm93IG9mZnNldFxcbiAqIEByZXR1cm4ge0FycmF5PG51bWJlcj59IFJvdyBtIGZyb20gbWF0cml4IGFcXG4gKi9cXG5tYXQucm93ID0gKGEsIG0pID0+IHtcXG4gIGNvbnN0IHMgPSAobSAtIDEpICogYS5uO1xcbiAgcmV0dXJuIGEuZW50cmllcy5zbGljZShzLCBzICsgYS5uKTtcXG59O1xcblxcbi8qKlxcbiAqIEdldCBhIGNvbHVtbiBmcm9tIGEgbWF0cml4IGFzIGFuIGFycmF5XFxuICogQHBhcmFtIHttYXR9IGEgTWF0cml4IGFcXG4gKiBAcGFyYW0ge251bWJlcn0gbiBUaGUgY29sdW1uIG9mZnNldFxcbiAqIEByZXR1cm4ge0FycmF5PG51bWJlcj59IENvbHVtbiBuIGZyb20gbWF0cml4IGFcXG4gKi9cXG5tYXQuY29sID0gKGEsIG4pID0+IHRpbWVzKGkgPT4gbWF0LmdldChhLCAoaSArIDEpLCBuKSwgYS5tKTtcXG5cXG4vKipcXG4gKiBBZGQgbWF0cmljZXNcXG4gKiBAcGFyYW0ge21hdH0gYSBNYXRyaXggYVxcbiAqIEBwYXJhbSB7bWF0fSBiIE1hdHJpeCBiXFxuICogQHJldHVybiB7bWF0fSBhICsgYlxcbiAqL1xcbm1hdC5hZGQgPSAoYSwgYikgPT4gYS5tID09PSBiLm0gJiYgYS5uID09PSBiLm4gJiYgbWF0Lm1hcChhLCAodiwgaSkgPT4gdiArIGIuZW50cmllc1tpXSk7XFxuXFxuLyoqXFxuICogU3VidHJhY3QgbWF0cmljZXNcXG4gKiBAcGFyYW0ge21hdH0gYSBNYXRyaXggYVxcbiAqIEBwYXJhbSB7bWF0fSBiIE1hdHJpeCBiXFxuICogQHJldHVybiB7bWF0fSBhIC0gYlxcbiAqL1xcbm1hdC5zdWIgPSAoYSwgYikgPT4gYS5tID09PSBiLm0gJiYgYS5uID09PSBiLm4gJiYgbWF0Lm1hcChhLCAodiwgaSkgPT4gdiAtIGIuZW50cmllc1tpXSk7XFxuXFxuLyoqXFxuICogTXVsdGlwbHkgbWF0cmljZXNcXG4gKiBAcGFyYW0ge21hdH0gYSBNYXRyaXggYVxcbiAqIEBwYXJhbSB7bWF0fSBiIE1hdHJpeCBiXFxuICogQHJldHVybiB7bWF0fGJvb2xlYW59IGFiIG9yIGZhbHNlIGlmIHRoZSBtYXRyaWNlcyBjYW5ub3QgYmUgbXVsdGlwbGllZFxcbiAqL1xcbm1hdC5tdWwgPSAoYSwgYikgPT4ge1xcbiAgaWYgKGEubiAhPT0gYi5tKSB7IHJldHVybiBmYWxzZTsgfVxcbiAgY29uc3QgcmVzdWx0ID0gbWF0KGEubSwgYi5uKTtcXG4gIGZvciAobGV0IGkgPSAxOyBpIDw9IGEubTsgaSsrKSB7XFxuICAgIGZvciAobGV0IGogPSAxOyBqIDw9IGIubjsgaisrKSB7XFxuICAgICAgbWF0LnNldChyZXN1bHQsIGksIGosIGRvdChtYXQucm93KGEsIGkpLCBtYXQuY29sKGIsIGopKSk7XFxuICAgIH1cXG4gIH1cXG4gIHJldHVybiByZXN1bHQ7XFxufTtcXG5cXG4vKipcXG4gKiBTY2FsZSBhIG1hdHJpeFxcbiAqIEBwYXJhbSB7bWF0fSBhIE1hdHJpeCBhXFxuICogQHBhcmFtIHtudW1iZXJ9IGIgU2NhbGFyIGJcXG4gKiBAcmV0dXJuIHttYXR9IGEgKiBiXFxuICovXFxubWF0LnNjYWxlID0gKGEsIGIpID0+IG1hdC5tYXAoYSwgdiA9PiB2ICogYik7XFxuXFxuLyoqXFxuICogVHJhbnNwb3NlIGEgbWF0cml4XFxuICogQHBhcmFtIHttYXR9IGEgVGhlIG1hdHJpeCB0byB0cmFuc3Bvc2VcXG4gKiBAcmV0dXJuIHttYXR9IEEgdHJhbnNwb3NlZCBtYXRyaXhcXG4gKi9cXG5tYXQudHJhbnMgPSBhID0+IG1hdChhLm4sIGEubSwgdGltZXMoaSA9PiBtYXQuY29sKGEsIChpICsgMSkpLCBhLm4pLmZsYXQoKSk7XFxuXFxuLyoqXFxuICogR2V0IHRoZSBtaW5vciBvZiBhIG1hdHJpeFxcbiAqIEBwYXJhbSB7bWF0fSBhIE1hdHJpeCBhXFxuICogQHBhcmFtIHtudW1iZXJ9IGkgVGhlIHJvdyBvZmZzZXRcXG4gKiBAcGFyYW0ge251bWJlcn0gaiBUaGUgY29sdW1uIG9mZnNldFxcbiAqIEByZXR1cm4ge21hdHxib29sZWFufSBUaGUgKGksIGopIG1pbm9yIG9mIG1hdHJpeCBhIG9yIGZhbHNlIGlmIHRoZSBtYXRyaXggaXMgbm90IHNxdWFyZVxcbiAqL1xcbm1hdC5taW5vciA9IChhLCBpLCBqKSA9PiB7XFxuICBpZiAoYS5tICE9PSBhLm4pIHsgcmV0dXJuIGZhbHNlOyB9XFxuICBjb25zdCBlbnRyaWVzID0gW107XFxuICBmb3IgKGxldCBpaSA9IDE7IGlpIDw9IGEubTsgaWkrKykge1xcbiAgICBpZiAoaWkgPT09IGkpIHsgY29udGludWU7IH1cXG4gICAgZm9yIChsZXQgamogPSAxOyBqaiA8PSBhLm47IGpqKyspIHtcXG4gICAgICBpZiAoamogPT09IGopIHsgY29udGludWU7IH1cXG4gICAgICBlbnRyaWVzLnB1c2gobWF0LmdldChhLCBpaSwgamopKTtcXG4gICAgfVxcbiAgfVxcbiAgcmV0dXJuIG1hdChhLm0gLSAxLCBhLm4gLSAxLCBlbnRyaWVzKTtcXG59O1xcblxcbi8qKlxcbiAqIEdldCB0aGUgZGV0ZXJtaW5hbnQgb2YgYSBtYXRyaXhcXG4gKiBAcGFyYW0ge21hdH0gYSBNYXRyaXggYVxcbiAqIEByZXR1cm4ge251bWJlcnxib29sZWFufSB8YXwgb3IgZmFsc2UgaWYgdGhlIG1hdHJpeCBpcyBub3Qgc3F1YXJlXFxuICovXFxubWF0LmRldCA9IGEgPT4ge1xcbiAgaWYgKGEubSAhPT0gYS5uKSB7IHJldHVybiBmYWxzZTsgfVxcbiAgaWYgKGEubSA9PT0gMSkge1xcbiAgICByZXR1cm4gYS5lbnRyaWVzWzBdO1xcbiAgfVxcbiAgaWYgKGEubSA9PT0gMikge1xcbiAgICByZXR1cm4gYS5lbnRyaWVzWzBdICogYS5lbnRyaWVzWzNdIC0gYS5lbnRyaWVzWzFdICogYS5lbnRyaWVzWzJdO1xcbiAgfVxcbiAgbGV0IHRvdGFsID0gMCwgc2lnbiA9IDE7XFxuICBmb3IgKGxldCBqID0gMTsgaiA8PSBhLm47IGorKykge1xcbiAgICB0b3RhbCArPSBzaWduICogYS5lbnRyaWVzW2ogLSAxXSAqIG1hdC5kZXQobWF0Lm1pbm9yKGEsIDEsIGopKTtcXG4gICAgc2lnbiAqPSAtMTtcXG4gIH1cXG4gIHJldHVybiB0b3RhbDtcXG59O1xcblxcbi8qKlxcbiAqIE5vcm1hbGlzZSBhIG1hdHJpeFxcbiAqIEBwYXJhbSB7bWF0fSBhIFRoZSBtYXRyaXggdG8gbm9ybWFsaXNlXFxuICogQHJldHVybiB7bWF0fGJvb2xlYW59IF5hIG9yIGZhbHNlIGlmIHRoZSBtYXRyaXggaXMgbm90IHNxdWFyZVxcbiAqL1xcbm1hdC5ub3IgPSBhID0+IHtcXG4gIGlmIChhLm0gIT09IGEubikgeyByZXR1cm4gZmFsc2U7IH1cXG4gIGNvbnN0IGQgPSBtYXQuZGV0KGEpO1xcbiAgcmV0dXJuIG1hdC5tYXAoYSwgaSA9PiBpICogZCk7XFxufTtcXG5cXG4vKipcXG4gKiBHZXQgdGhlIGFkanVnYXRlIG9mIGEgbWF0cml4XFxuICogQHBhcmFtIHttYXR9IGEgVGhlIG1hdHJpeCBmcm9tIHdoaWNoIHRvIGdldCB0aGUgYWRqdWdhdGVcXG4gKiBAcmV0dXJuIHttYXR9IFRoZSBhZGp1Z2F0ZSBvZiBhXFxuICovXFxubWF0LmFkaiA9IGEgPT4ge1xcbiAgY29uc3QgbWlub3JzID0gbWF0KGEubSwgYS5uKTtcXG4gIGZvciAobGV0IGkgPSAxOyBpIDw9IGEubTsgaSsrKSB7XFxuICAgIGZvciAobGV0IGogPSAxOyBqIDw9IGEubjsgaisrKSB7XFxuICAgICAgbWF0LnNldChtaW5vcnMsIGksIGosIG1hdC5kZXQobWF0Lm1pbm9yKGEsIGksIGopKSk7XFxuICAgIH1cXG4gIH1cXG4gIGNvbnN0IGNvZmFjdG9ycyA9IG1hdC5tYXAobWlub3JzLCAodiwgaSkgPT4gdiAqIChpICUgMiA/IC0xIDogMSkpO1xcbiAgcmV0dXJuIG1hdC50cmFucyhjb2ZhY3RvcnMpO1xcbn07XFxuXFxuLyoqXFxuICogR2V0IHRoZSBpbnZlcnNlIG9mIGEgbWF0cml4XFxuICogQHBhcmFtIHttYXR9IGEgVGhlIG1hdHJpeCB0byBpbnZlcnRcXG4gKiBAcmV0dXJuIHttYXR8Ym9vbGVhbn0gYV4tMSBvciBmYWxzZSBpZiB0aGUgbWF0cml4IGhhcyBubyBpbnZlcnNlXFxuICovXFxubWF0LmludiA9IGEgPT4ge1xcbiAgaWYgKGEubSAhPT0gYS5uKSB7IHJldHVybiBmYWxzZTsgfVxcbiAgY29uc3QgZCA9IG1hdC5kZXQoYSk7XFxuICBpZiAoZCA9PT0gMCkgeyByZXR1cm4gZmFsc2U7IH1cXG4gIHJldHVybiBtYXQuc2NhbGUobWF0LmFkaihhKSwgMSAvIGQpO1xcbn07XFxuXFxuLyoqXFxuICogQ2hlY2sgaWYgdHdvIG1hdHJpY2VzIGFyZSBlcXVhbFxcbiAqIEBwYXJhbSB7bWF0fSBhIE1hdHJpeCBhXFxuICogQHBhcmFtIHttYXR9IGIgTWF0cml4IGJcXG4gKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIG1hdHJpY2VzIGEgYW5kIGIgYXJlIGlkZW50aWNhbCwgZmFsc2Ugb3RoZXJ3aXNlXFxuICovXFxubWF0LmVxID0gKGEsIGIpID0+IGEubSA9PT0gYi5tICYmIGEubiA9PT0gYi5uICYmIG1hdC5zdHIoYSkgPT09IG1hdC5zdHIoYik7XFxuXFxuLyoqXFxuICogQ29weSBhIG1hdHJpeFxcbiAqIEBwYXJhbSB7bWF0fSBhIFRoZSBtYXRyaXggdG8gY29weVxcbiAqIEByZXR1cm4ge21hdH0gQSBjb3B5IG9mIG1hdHJpeCBhXFxuICovXFxubWF0LmNweSA9IGEgPT4gbWF0KGEubSwgYS5uLCBbLi4uYS5lbnRyaWVzXSk7XFxuXFxuLyoqXFxuICogQSBmdW5jdGlvbiB0byBjYWxsIG9uIGVhY2ggZW50cnkgb2YgYSBtYXRyaXhcXG4gKiBAY2FsbGJhY2sgbWF0cml4TWFwQ2FsbGJhY2tcXG4gKiBAcGFyYW0ge251bWJlcn0gdmFsdWUgVGhlIGVudHJ5IHZhbHVlXFxuICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IFRoZSBlbnRyeSBpbmRleFxcbiAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0gZW50cmllcyBUaGUgYXJyYXkgb2YgbWF0cml4IGVudHJpZXNcXG4gKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBtYXBwZWQgZW50cnlcXG4gKi9cXG5cXG4vKipcXG4gKiBDYWxsIGEgZnVuY3Rpb24gb24gZWFjaCBlbnRyeSBvZiBhIG1hdHJpeCBhbmQgYnVpbGQgYSBuZXcgbWF0cml4IGZyb20gdGhlIHJlc3VsdHNcXG4gKiBAcGFyYW0ge21hdH0gYSBNYXRyaXggYVxcbiAqIEBwYXJhbSB7bWF0cml4TWFwQ2FsbGJhY2t9IGYgVGhlIGZ1bmN0aW9uIHRvIGNhbGwgb24gZWFjaCBlbnRyeSBvZiB0aGUgbWF0cml4XFxuICogQHJldHVybiB7bWF0fSBNYXRyaXggYSBtYXBwZWQgdGhyb3VnaCBmXFxuICovXFxubWF0Lm1hcCA9IChhLCBmKSA9PiBtYXQoYS5tLCBhLm4sIGEuZW50cmllcy5tYXAoZikpO1xcblxcbi8qKlxcbiAqIENvbnZlcnQgYSBtYXRyaXggaW50byBhIHN0cmluZ1xcbiAqIEBwYXJhbSB7bWF0fSBhIFRoZSBtYXRyaXggdG8gY29udmVydFxcbiAqIEBwYXJhbSB7c3RyaW5nfSBbbXM9JywgJ10gVGhlIHNlcGFyYXRvciBzdHJpbmcgZm9yIGNvbHVtbnNcXG4gKiBAcGFyYW0ge3N0cmluZ30gW25zPSdcXFxcbiddIFRoZSBzZXBhcmF0b3Igc3RyaW5nIGZvciByb3dzXFxuICogQHJldHVybiB7c3RyaW5nfSBBIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgbWF0cml4XFxuICovXFxubWF0LnN0ciA9IChhLCBtcyA9ICcsICcsIG5zID0gJ1xcXFxuJykgPT4gY2h1bmsoYS5lbnRyaWVzLCBhLm4pLm1hcChyID0+IHIuam9pbihtcykpLmpvaW4obnMpO1xcblxcbmlmICh0cnVlKSB7XFxuICBtb2R1bGUuZXhwb3J0cyA9IHsgdmVjLCBtYXQgfTtcXG59XFxuXFxuXFxuLy8jIHNvdXJjZVVSTD13ZWJwYWNrOi8vQGJhc2VtZW50dW5pdmVyc2UvZGVidWcvLi9ub2RlX21vZHVsZXMvQGJhc2VtZW50dW5pdmVyc2UvdmVjL3ZlYy5qcz9cIik7XG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vaW5kZXgudHNcIjpcbi8qISoqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL2luZGV4LnRzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKiovXG4vKioqLyAoKF9fdW51c2VkX3dlYnBhY2tfbW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSA9PiB7XG5cblwidXNlIHN0cmljdFwiO1xuZXZhbChcIlxcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcXFwiX19lc01vZHVsZVxcXCIsICh7IHZhbHVlOiB0cnVlIH0pKTtcXG5jb25zdCB2ZWNfMSA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIEBiYXNlbWVudHVuaXZlcnNlL3ZlYyAqLyBcXFwiLi9ub2RlX21vZHVsZXMvQGJhc2VtZW50dW5pdmVyc2UvdmVjL3ZlYy5qc1xcXCIpO1xcbmNsYXNzIERlYnVnIHtcXG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xcbiAgICAgICAgaWYgKG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5kZWZhdWx0VmFsdWUpIHtcXG4gICAgICAgICAgICBvcHRpb25zLmRlZmF1bHRWYWx1ZSA9IE9iamVjdC5hc3NpZ24oe30sIERlYnVnLmRlZmF1bHRPcHRpb25zLmRlZmF1bHRWYWx1ZSwgb3B0aW9ucy5kZWZhdWx0VmFsdWUpO1xcbiAgICAgICAgfVxcbiAgICAgICAgaWYgKG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5kZWZhdWx0Q2hhcnQpIHtcXG4gICAgICAgICAgICBvcHRpb25zLmRlZmF1bHRDaGFydCA9IE9iamVjdC5hc3NpZ24oe30sIERlYnVnLmRlZmF1bHRPcHRpb25zLmRlZmF1bHRDaGFydCwgb3B0aW9ucy5kZWZhdWx0Q2hhcnQpO1xcbiAgICAgICAgfVxcbiAgICAgICAgaWYgKG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5kZWZhdWx0TWFya2VyKSB7XFxuICAgICAgICAgICAgb3B0aW9ucy5kZWZhdWx0TWFya2VyID0gT2JqZWN0LmFzc2lnbih7fSwgRGVidWcuZGVmYXVsdE9wdGlvbnMuZGVmYXVsdE1hcmtlciwgb3B0aW9ucy5kZWZhdWx0TWFya2VyKTtcXG4gICAgICAgIH1cXG4gICAgICAgIGlmIChvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuZGVmYXVsdEJvcmRlcikge1xcbiAgICAgICAgICAgIG9wdGlvbnMuZGVmYXVsdEJvcmRlciA9IE9iamVjdC5hc3NpZ24oe30sIERlYnVnLmRlZmF1bHRPcHRpb25zLmRlZmF1bHRCb3JkZXIsIG9wdGlvbnMuZGVmYXVsdEJvcmRlcik7XFxuICAgICAgICB9XFxuICAgICAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCBEZWJ1Zy5kZWZhdWx0T3B0aW9ucywgb3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgPyBvcHRpb25zIDoge30pO1xcbiAgICAgICAgdGhpcy52YWx1ZXMgPSBuZXcgTWFwKCk7XFxuICAgICAgICB0aGlzLmNoYXJ0cyA9IG5ldyBNYXAoKTtcXG4gICAgICAgIHRoaXMubWFya2VycyA9IG5ldyBNYXAoKTtcXG4gICAgICAgIHRoaXMuYm9yZGVycyA9IG5ldyBNYXAoKTtcXG4gICAgfVxcbiAgICAvKipcXG4gICAgICogSW5pdGlhbGlzZSB0aGUgZGVidWcgcmVuZGVyZXIgZm9yIGRpc3BsYXlpbmcgdmFsdWVzIGFuZCBtYXJrZXJzXFxuICAgICAqL1xcbiAgICBzdGF0aWMgaW5pdGlhbGlzZShvcHRpb25zID0ge30pIHtcXG4gICAgICAgIGlmIChEZWJ1Zy5pbnN0YW5jZSAhPT0gdW5kZWZpbmVkKSB7XFxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdEZWJ1ZyBoYXMgYWxyZWFkeSBiZWVuIGluaXRpYWxpc2VkJyk7XFxuICAgICAgICB9XFxuICAgICAgICBEZWJ1Zy5pbnN0YW5jZSA9IG5ldyBEZWJ1ZyhvcHRpb25zKTtcXG4gICAgfVxcbiAgICBzdGF0aWMgZ2V0SW5zdGFuY2UoKSB7XFxuICAgICAgICBpZiAoRGVidWcuaW5zdGFuY2UgPT09IHVuZGVmaW5lZCkge1xcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignRGVidWcgbm90IHByb3Blcmx5IGluaXRpYWxpc2VkJyk7XFxuICAgICAgICB9XFxuICAgICAgICByZXR1cm4gRGVidWcuaW5zdGFuY2U7XFxuICAgIH1cXG4gICAgLyoqXFxuICAgICAqIFNob3cgYSBkZWJ1ZyB2YWx1ZVxcbiAgICAgKi9cXG4gICAgc3RhdGljIHZhbHVlKGxhYmVsLCB2YWx1ZSwgb3B0aW9ucykge1xcbiAgICAgICAgdmFyIF9hO1xcbiAgICAgICAgY29uc3QgaW5zdGFuY2UgPSBEZWJ1Zy5nZXRJbnN0YW5jZSgpO1xcbiAgICAgICAgaW5zdGFuY2UudmFsdWVzLnNldChsYWJlbCwgT2JqZWN0LmFzc2lnbih7fSwgaW5zdGFuY2Uub3B0aW9ucy5kZWZhdWx0VmFsdWUsIChfYSA9IGluc3RhbmNlLnZhbHVlcy5nZXQobGFiZWwpKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiB7fSwgb3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgPyBvcHRpb25zIDoge30sIHsgbGFiZWwsIHZhbHVlIH0pKTtcXG4gICAgfVxcbiAgICAvKipcXG4gICAgICogU2hvdyBhIGRlYnVnIGNoYXJ0XFxuICAgICAqL1xcbiAgICBzdGF0aWMgY2hhcnQobGFiZWwsIHZhbHVlLCBvcHRpb25zKSB7XFxuICAgICAgICB2YXIgX2EsIF9iO1xcbiAgICAgICAgY29uc3QgaW5zdGFuY2UgPSBEZWJ1Zy5nZXRJbnN0YW5jZSgpO1xcbiAgICAgICAgY29uc3QgY3VycmVudENoYXJ0ID0gaW5zdGFuY2UuY2hhcnRzLmdldChsYWJlbCk7XFxuICAgICAgICBpbnN0YW5jZS5jaGFydHMuc2V0KGxhYmVsLCBPYmplY3QuYXNzaWduKHt9LCBpbnN0YW5jZS5vcHRpb25zLmRlZmF1bHRDaGFydCwgY3VycmVudENoYXJ0ICE9PSBudWxsICYmIGN1cnJlbnRDaGFydCAhPT0gdm9pZCAwID8gY3VycmVudENoYXJ0IDoge30sIG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwID8gb3B0aW9ucyA6IHt9LCB7XFxuICAgICAgICAgICAgbGFiZWwsXFxuICAgICAgICAgICAgdmFsdWVzOiBbLi4uKF9hID0gY3VycmVudENoYXJ0ID09PSBudWxsIHx8IGN1cnJlbnRDaGFydCA9PT0gdm9pZCAwID8gdm9pZCAwIDogY3VycmVudENoYXJ0LnZhbHVlcykgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogW10sIHZhbHVlXS5zbGljZSgtKChfYiA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy52YWx1ZUJ1ZmZlclNpemUpICE9PSBudWxsICYmIF9iICE9PSB2b2lkIDAgPyBfYiA6IGluc3RhbmNlLm9wdGlvbnMuZGVmYXVsdENoYXJ0LnZhbHVlQnVmZmVyU2l6ZSkpLFxcbiAgICAgICAgfSkpO1xcbiAgICB9XFxuICAgIC8qKlxcbiAgICAgKiBSZW1vdmUgYSBkZWJ1ZyBjaGFydFxcbiAgICAgKi9cXG4gICAgc3RhdGljIHJlbW92ZUNoYXJ0KGxhYmVsKSB7XFxuICAgICAgICBjb25zdCBpbnN0YW5jZSA9IERlYnVnLmdldEluc3RhbmNlKCk7XFxuICAgICAgICBpbnN0YW5jZS5jaGFydHMuZGVsZXRlKGxhYmVsKTtcXG4gICAgfVxcbiAgICAvKipcXG4gICAgICogU2hvdyBhIG1hcmtlciBpbiB3b3JsZCBvciBzY3JlZW4gc3BhY2VcXG4gICAgICovXFxuICAgIHN0YXRpYyBtYXJrZXIobGFiZWwsIHZhbHVlLCBwb3NpdGlvbiwgb3B0aW9ucykge1xcbiAgICAgICAgdmFyIF9hO1xcbiAgICAgICAgY29uc3QgaW5zdGFuY2UgPSBEZWJ1Zy5nZXRJbnN0YW5jZSgpO1xcbiAgICAgICAgaW5zdGFuY2UubWFya2Vycy5zZXQobGFiZWwsIE9iamVjdC5hc3NpZ24oe30sIGluc3RhbmNlLm9wdGlvbnMuZGVmYXVsdE1hcmtlciwgKF9hID0gaW5zdGFuY2UubWFya2Vycy5nZXQobGFiZWwpKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiB7fSwgb3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgPyBvcHRpb25zIDoge30sIHsgbGFiZWwsIHZhbHVlLCBwb3NpdGlvbiB9KSk7XFxuICAgIH1cXG4gICAgLyoqXFxuICAgICAqIFNob3cgYSBib3JkZXIgaW4gd29ybGQgb3Igc2NyZWVuIHNwYWNlXFxuICAgICAqL1xcbiAgICBzdGF0aWMgYm9yZGVyKGxhYmVsLCB2YWx1ZSwgcG9zaXRpb24sIG9wdGlvbnMpIHtcXG4gICAgICAgIHZhciBfYTtcXG4gICAgICAgIGlmICgob3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmJvcmRlclNoYXBlKSA9PT0gJ2NpcmNsZScgJiYgKG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5yYWRpdXMpID09PSB1bmRlZmluZWQpIHtcXG4gICAgICAgICAgICAvLyBEb24ndCBhZGQgdGhlIGJvcmRlciBpZiBpdCdzIGNpcmN1bGFyIGJ1dCB3ZSBkb24ndCBoYXZlIGEgcmFkaXVzXFxuICAgICAgICAgICAgcmV0dXJuO1xcbiAgICAgICAgfVxcbiAgICAgICAgaWYgKChvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuYm9yZGVyU2hhcGUpICE9PSAnY2lyY2xlJyAmJiAob3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLnNpemUpID09PSB1bmRlZmluZWQpIHtcXG4gICAgICAgICAgICAvLyBEb24ndCBhZGQgdGhlIGJvcmRlciBpZiBpdCdzIHJlY3Rhbmd1bGFyIChkZWZhdWx0IGlzIHJlY3Rhbmd1bGFyKSBidXRcXG4gICAgICAgICAgICAvLyB3ZSBkb24ndCBoYXZlIGEgc2l6ZVxcbiAgICAgICAgICAgIHJldHVybjtcXG4gICAgICAgIH1cXG4gICAgICAgIGNvbnN0IGluc3RhbmNlID0gRGVidWcuZ2V0SW5zdGFuY2UoKTtcXG4gICAgICAgIGluc3RhbmNlLmJvcmRlcnMuc2V0KGxhYmVsLCBPYmplY3QuYXNzaWduKHt9LCBpbnN0YW5jZS5vcHRpb25zLmRlZmF1bHRCb3JkZXIsIChfYSA9IGluc3RhbmNlLmJvcmRlcnMuZ2V0KGxhYmVsKSkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDoge30sIG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwID8gb3B0aW9ucyA6IHt9LCB7IGxhYmVsLCB2YWx1ZSwgcG9zaXRpb24gfSkpO1xcbiAgICB9XFxuICAgIC8qKlxcbiAgICAgKiBSZW5kZXIgdGhlIGRlYnVnIHZhbHVlcyBhbmQgbWFya2VycyBvbnRvIGEgY2FudmFzXFxuICAgICAqL1xcbiAgICBzdGF0aWMgZHJhdyhjb250ZXh0KSB7XFxuICAgICAgICBjb25zdCBpbnN0YW5jZSA9IERlYnVnLmdldEluc3RhbmNlKCk7XFxuICAgICAgICAvLyBEcmF3IHdvcmxkLXNwYWNlIG1hcmtlcnMgJiBib3JkZXJzXFxuICAgICAgICBjb250ZXh0LnNhdmUoKTtcXG4gICAgICAgIGluc3RhbmNlLm1hcmtlcnMuZm9yRWFjaChtYXJrZXIgPT4ge1xcbiAgICAgICAgICAgIGlmIChtYXJrZXIuc3BhY2UgPT09ICd3b3JsZCcpIHtcXG4gICAgICAgICAgICAgICAgaW5zdGFuY2UuZHJhd01hcmtlcihjb250ZXh0LCBtYXJrZXIpO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH0pO1xcbiAgICAgICAgaW5zdGFuY2UuYm9yZGVycy5mb3JFYWNoKGJvcmRlciA9PiB7XFxuICAgICAgICAgICAgaWYgKGJvcmRlci5zcGFjZSA9PT0gJ3dvcmxkJykge1xcbiAgICAgICAgICAgICAgICBpbnN0YW5jZS5kcmF3Qm9yZGVyKGNvbnRleHQsIGJvcmRlcik7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfSk7XFxuICAgICAgICBjb250ZXh0LnJlc3RvcmUoKTtcXG4gICAgICAgIC8vIERyYXcgdmFsdWVzLCBjaGFydHMgYW5kIHNjcmVlbi1zcGFjZSBtYXJrZXJzICYgYm9yZGVyc1xcbiAgICAgICAgY29udGV4dC5zYXZlKCk7XFxuICAgICAgICBjb250ZXh0LnNldFRyYW5zZm9ybSgxLCAwLCAwLCAxLCAwLCAwKTtcXG4gICAgICAgIGxldCBwb3NpdGlvbjtcXG4gICAgICAgIGxldCBsZWZ0WSA9IGluc3RhbmNlLm9wdGlvbnMubWFyZ2luO1xcbiAgICAgICAgbGV0IHJpZ2h0WSA9IGluc3RhbmNlLm9wdGlvbnMubWFyZ2luO1xcbiAgICAgICAgY29uc3QgbGluZUhlaWdodCA9IChpbnN0YW5jZS5vcHRpb25zLmxpbmVIZWlnaHQgK1xcbiAgICAgICAgICAgIGluc3RhbmNlLm9wdGlvbnMucGFkZGluZyAqIDIpO1xcbiAgICAgICAgaW5zdGFuY2UudmFsdWVzLmZvckVhY2godmFsdWUgPT4ge1xcbiAgICAgICAgICAgIHZhciBfYSwgX2IsIF9jLCBfZCwgX2UsIF9mO1xcbiAgICAgICAgICAgIHN3aXRjaCAodmFsdWUuYWxpZ24pIHtcXG4gICAgICAgICAgICAgICAgY2FzZSAnbGVmdCc6XFxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbiA9ICgwLCB2ZWNfMS52ZWMpKGluc3RhbmNlLm9wdGlvbnMubWFyZ2luLCBsZWZ0WSk7XFxuICAgICAgICAgICAgICAgICAgICBsZWZ0WSArPSBsaW5lSGVpZ2h0ICsgaW5zdGFuY2Uub3B0aW9ucy5saW5lTWFyZ2luO1xcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XFxuICAgICAgICAgICAgICAgIGNhc2UgJ3JpZ2h0JzpcXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uID0gKDAsIHZlY18xLnZlYykoY29udGV4dC5jYW52YXMuY2xpZW50V2lkdGggLSBpbnN0YW5jZS5vcHRpb25zLm1hcmdpbiwgcmlnaHRZKTtcXG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0WSArPSBsaW5lSGVpZ2h0ICsgaW5zdGFuY2Uub3B0aW9ucy5saW5lTWFyZ2luO1xcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIGluc3RhbmNlLmRyYXdMYWJlbChjb250ZXh0LCBEZWJ1Zy5wcmVwYXJlTGFiZWwoKF9hID0gdmFsdWUubGFiZWwpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6ICcnLCAoX2IgPSB2YWx1ZS52YWx1ZSkgIT09IG51bGwgJiYgX2IgIT09IHZvaWQgMCA/IF9iIDogJycsIHZhbHVlLnNob3dMYWJlbCwgdHJ1ZSksIHBvc2l0aW9uLCB2YWx1ZS5hbGlnbiwgKF9jID0gdmFsdWUucGFkZGluZykgIT09IG51bGwgJiYgX2MgIT09IHZvaWQgMCA/IF9jIDogaW5zdGFuY2Uub3B0aW9ucy5wYWRkaW5nLCAoX2QgPSB2YWx1ZS5mb250KSAhPT0gbnVsbCAmJiBfZCAhPT0gdm9pZCAwID8gX2QgOiBpbnN0YW5jZS5vcHRpb25zLmZvbnQsIChfZSA9IHZhbHVlLmZvcmVncm91bmRDb2xvdXIpICE9PSBudWxsICYmIF9lICE9PSB2b2lkIDAgPyBfZSA6IGluc3RhbmNlLm9wdGlvbnMuZm9yZWdyb3VuZENvbG91ciwgKF9mID0gdmFsdWUuYmFja2dyb3VuZENvbG91cikgIT09IG51bGwgJiYgX2YgIT09IHZvaWQgMCA/IF9mIDogaW5zdGFuY2Uub3B0aW9ucy5iYWNrZ3JvdW5kQ29sb3VyKTtcXG4gICAgICAgIH0pO1xcbiAgICAgICAgaW5zdGFuY2UuY2hhcnRzLmZvckVhY2goY2hhcnQgPT4ge1xcbiAgICAgICAgICAgIHZhciBfYSwgX2IsIF9jLCBfZCwgX2U7XFxuICAgICAgICAgICAgc3dpdGNoIChjaGFydC5hbGlnbikge1xcbiAgICAgICAgICAgICAgICBjYXNlICdsZWZ0JzpcXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uID0gKDAsIHZlY18xLnZlYykoaW5zdGFuY2Uub3B0aW9ucy5tYXJnaW4sIGxlZnRZKTtcXG4gICAgICAgICAgICAgICAgICAgIGxlZnRZICs9IGxpbmVIZWlnaHQgKyBpbnN0YW5jZS5vcHRpb25zLmxpbmVNYXJnaW47XFxuICAgICAgICAgICAgICAgICAgICBicmVhaztcXG4gICAgICAgICAgICAgICAgY2FzZSAncmlnaHQnOlxcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb24gPSAoMCwgdmVjXzEudmVjKShjb250ZXh0LmNhbnZhcy5jbGllbnRXaWR0aCAtIGluc3RhbmNlLm9wdGlvbnMubWFyZ2luLCByaWdodFkpO1xcbiAgICAgICAgICAgICAgICAgICAgcmlnaHRZICs9IGxpbmVIZWlnaHQgKyBpbnN0YW5jZS5vcHRpb25zLmxpbmVNYXJnaW47XFxuICAgICAgICAgICAgICAgICAgICBicmVhaztcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgaW5zdGFuY2UuZHJhd0NoYXJ0KGNvbnRleHQsIERlYnVnLnByZXBhcmVMYWJlbCgoX2EgPSBjaGFydC5sYWJlbCkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogJycsICcnLCBjaGFydC5zaG93TGFiZWwsIGZhbHNlKSwgcG9zaXRpb24sIGNoYXJ0LmFsaWduLCAoX2IgPSBjaGFydC5wYWRkaW5nKSAhPT0gbnVsbCAmJiBfYiAhPT0gdm9pZCAwID8gX2IgOiBpbnN0YW5jZS5vcHRpb25zLnBhZGRpbmcsIChfYyA9IGNoYXJ0LmZvbnQpICE9PSBudWxsICYmIF9jICE9PSB2b2lkIDAgPyBfYyA6IGluc3RhbmNlLm9wdGlvbnMuZm9udCwgKF9kID0gY2hhcnQuZm9yZWdyb3VuZENvbG91cikgIT09IG51bGwgJiYgX2QgIT09IHZvaWQgMCA/IF9kIDogaW5zdGFuY2Uub3B0aW9ucy5mb3JlZ3JvdW5kQ29sb3VyLCAoX2UgPSBjaGFydC5iYWNrZ3JvdW5kQ29sb3VyKSAhPT0gbnVsbCAmJiBfZSAhPT0gdm9pZCAwID8gX2UgOiBpbnN0YW5jZS5vcHRpb25zLmJhY2tncm91bmRDb2xvdXIsIGNoYXJ0LmNoYXJ0QmFja2dyb3VuZENvbG91ciwgY2hhcnQudmFsdWVzLCBjaGFydC52YWx1ZUJ1ZmZlclNpemUsIGNoYXJ0LnZhbHVlQnVmZmVyU3RyaWRlLCBjaGFydC5taW5WYWx1ZSwgY2hhcnQubWF4VmFsdWUsIGNoYXJ0LmJhcldpZHRoLCBjaGFydC5iYXJDb2xvdXJzKTtcXG4gICAgICAgIH0pO1xcbiAgICAgICAgaW5zdGFuY2UubWFya2Vycy5mb3JFYWNoKG1hcmtlciA9PiB7XFxuICAgICAgICAgICAgaWYgKG1hcmtlci5zcGFjZSA9PT0gJ3NjcmVlbicpIHtcXG4gICAgICAgICAgICAgICAgaW5zdGFuY2UuZHJhd01hcmtlcihjb250ZXh0LCBtYXJrZXIpO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH0pO1xcbiAgICAgICAgaW5zdGFuY2UuYm9yZGVycy5mb3JFYWNoKGJvcmRlciA9PiB7XFxuICAgICAgICAgICAgaWYgKGJvcmRlci5zcGFjZSA9PT0gJ3NjcmVlbicpIHtcXG4gICAgICAgICAgICAgICAgaW5zdGFuY2UuZHJhd0JvcmRlcihjb250ZXh0LCBib3JkZXIpO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH0pO1xcbiAgICAgICAgY29udGV4dC5yZXN0b3JlKCk7XFxuICAgICAgICAvLyBDbGVhciB2YWx1ZXMsIG1hcmtlcnMgJiBib3JkZXJzIHJlYWR5IGZvciBuZXh0IGZyYW1lXFxuICAgICAgICBpbnN0YW5jZS52YWx1ZXMuY2xlYXIoKTtcXG4gICAgICAgIGluc3RhbmNlLm1hcmtlcnMuY2xlYXIoKTtcXG4gICAgICAgIGluc3RhbmNlLmJvcmRlcnMuY2xlYXIoKTtcXG4gICAgfVxcbiAgICBzdGF0aWMgcHJlcGFyZUxhYmVsKGxhYmVsLCB2YWx1ZSwgc2hvd0xhYmVsLCBzaG93VmFsdWUpIHtcXG4gICAgICAgIGNvbnN0IGFjdHVhbExhYmVsID0gKHNob3dMYWJlbCAmJiBsYWJlbCkgPyBsYWJlbCA6ICcnO1xcbiAgICAgICAgY29uc3QgYWN0dWFsVmFsdWUgPSAoISFzaG93VmFsdWUgJiYgdmFsdWUgIT09ICcnKSA/IHZhbHVlLnRvU3RyaW5nKCkgOiAnJztcXG4gICAgICAgIGNvbnN0IHNlcGFyYXRvciA9IChhY3R1YWxMYWJlbCAmJiBhY3R1YWxWYWx1ZSkgPyAnOiAnIDogJyc7XFxuICAgICAgICByZXR1cm4gYCR7YWN0dWFsTGFiZWx9JHtzZXBhcmF0b3J9JHthY3R1YWxWYWx1ZX1gO1xcbiAgICB9XFxuICAgIGRyYXdMYWJlbChjb250ZXh0LCB0ZXh0LCBwb3NpdGlvbiwgYWxpZ24sIHBhZGRpbmcsIGZvbnQsIGZvcmVncm91bmRDb2xvdXIsIGJhY2tncm91bmRDb2xvdXIpIHtcXG4gICAgICAgIGNvbnRleHQuc2F2ZSgpO1xcbiAgICAgICAgY29udGV4dC5mb250ID0gZm9udDtcXG4gICAgICAgIGNvbnRleHQudGV4dEJhc2VsaW5lID0gJ3RvcCc7XFxuICAgICAgICBjb25zdCBiYWNrZ3JvdW5kU2l6ZSA9IHtcXG4gICAgICAgICAgICB3aWR0aDogY29udGV4dC5tZWFzdXJlVGV4dCh0ZXh0KS53aWR0aCArIHBhZGRpbmcgKiAyLFxcbiAgICAgICAgICAgIGhlaWdodDogdGhpcy5vcHRpb25zLmxpbmVIZWlnaHQgKyBwYWRkaW5nICogMixcXG4gICAgICAgIH07XFxuICAgICAgICBjb25zdCB4ID0gYWxpZ24gPT09ICdyaWdodCdcXG4gICAgICAgICAgICA/IChwb3NpdGlvbi54IC0gYmFja2dyb3VuZFNpemUud2lkdGgpXFxuICAgICAgICAgICAgOiBwb3NpdGlvbi54O1xcbiAgICAgICAgLy8gRHJhdyBiYWNrZ3JvdW5kXFxuICAgICAgICBjb250ZXh0LmZpbGxTdHlsZSA9IGJhY2tncm91bmRDb2xvdXI7XFxuICAgICAgICBjb250ZXh0LmZpbGxSZWN0KHggLSBwYWRkaW5nLCBwb3NpdGlvbi55IC0gcGFkZGluZywgYmFja2dyb3VuZFNpemUud2lkdGgsIGJhY2tncm91bmRTaXplLmhlaWdodCk7XFxuICAgICAgICAvLyBEcmF3IHRleHRcXG4gICAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gZm9yZWdyb3VuZENvbG91cjtcXG4gICAgICAgIGNvbnRleHQuZmlsbFRleHQodGV4dCwgeCwgcG9zaXRpb24ueSk7XFxuICAgICAgICBjb250ZXh0LnJlc3RvcmUoKTtcXG4gICAgfVxcbiAgICBkcmF3Q2hhcnQoY29udGV4dCwgbGFiZWwsIHBvc2l0aW9uLCBhbGlnbiwgcGFkZGluZywgZm9udCwgZm9yZWdyb3VuZENvbG91ciwgYmFja2dyb3VuZENvbG91ciwgY2hhcnRCYWNrZ3JvdW5kQ29sb3VyLCB2YWx1ZXMsIHZhbHVlQnVmZmVyU2l6ZSwgdmFsdWVCdWZmZXJTdHJpZGUsIG1pblZhbHVlLCBtYXhWYWx1ZSwgYmFyV2lkdGgsIGJhckNvbG91cnMpIHtcXG4gICAgICAgIHZhciBfYSwgX2I7XFxuICAgICAgICBjb250ZXh0LnNhdmUoKTtcXG4gICAgICAgIGNvbnRleHQuZm9udCA9IGZvbnQ7XFxuICAgICAgICBjb250ZXh0LnRleHRCYXNlbGluZSA9ICd0b3AnO1xcbiAgICAgICAgY29uc3QgY2hhcnRTaXplID0ge1xcbiAgICAgICAgICAgIHdpZHRoOiBiYXJXaWR0aCAqIE1hdGguY2VpbCh2YWx1ZUJ1ZmZlclNpemUgLyBNYXRoLm1heCh2YWx1ZUJ1ZmZlclN0cmlkZSwgMSkpLFxcbiAgICAgICAgICAgIGhlaWdodDogdGhpcy5vcHRpb25zLmxpbmVIZWlnaHQgKyBwYWRkaW5nICogMixcXG4gICAgICAgIH07XFxuICAgICAgICBjb25zdCBsYWJlbFNpemUgPSB7XFxuICAgICAgICAgICAgd2lkdGg6IGNvbnRleHQubWVhc3VyZVRleHQobGFiZWwpLndpZHRoLFxcbiAgICAgICAgICAgIGhlaWdodDogdGhpcy5vcHRpb25zLmxpbmVIZWlnaHQsXFxuICAgICAgICB9O1xcbiAgICAgICAgY29uc3QgYmFja2dyb3VuZFNpemUgPSB7XFxuICAgICAgICAgICAgd2lkdGg6IChsYWJlbFNpemUud2lkdGggK1xcbiAgICAgICAgICAgICAgICBwYWRkaW5nICtcXG4gICAgICAgICAgICAgICAgY2hhcnRTaXplLndpZHRoKSArIHBhZGRpbmcgKiAyLFxcbiAgICAgICAgICAgIGhlaWdodDogdGhpcy5vcHRpb25zLmxpbmVIZWlnaHQgKyBwYWRkaW5nICogMixcXG4gICAgICAgIH07XFxuICAgICAgICBjb25zdCB4ID0gYWxpZ24gPT09ICdyaWdodCdcXG4gICAgICAgICAgICA/IChwb3NpdGlvbi54IC0gYmFja2dyb3VuZFNpemUud2lkdGgpXFxuICAgICAgICAgICAgOiBwb3NpdGlvbi54O1xcbiAgICAgICAgLy8gRHJhdyBiYWNrZ3JvdW5kXFxuICAgICAgICBjb250ZXh0LmZpbGxTdHlsZSA9IGJhY2tncm91bmRDb2xvdXI7XFxuICAgICAgICBjb250ZXh0LmZpbGxSZWN0KHggLSBwYWRkaW5nLCBwb3NpdGlvbi55IC0gcGFkZGluZywgYmFja2dyb3VuZFNpemUud2lkdGgsIGJhY2tncm91bmRTaXplLmhlaWdodCk7XFxuICAgICAgICAvLyBEcmF3IGxhYmVsXFxuICAgICAgICBpZiAobGFiZWwpIHtcXG4gICAgICAgICAgICBjb250ZXh0LmZpbGxTdHlsZSA9IGZvcmVncm91bmRDb2xvdXI7XFxuICAgICAgICAgICAgY29udGV4dC5maWxsVGV4dChsYWJlbCwgeCwgcG9zaXRpb24ueSk7XFxuICAgICAgICB9XFxuICAgICAgICAvLyBEcmF3IGNoYXJ0XFxuICAgICAgICBpZiAoY2hhcnRCYWNrZ3JvdW5kQ29sb3VyKSB7XFxuICAgICAgICAgICAgY29udGV4dC5maWxsU3R5bGUgPSBjaGFydEJhY2tncm91bmRDb2xvdXI7XFxuICAgICAgICAgICAgY29udGV4dC5maWxsUmVjdCh4ICsgcGFkZGluZyArIGxhYmVsU2l6ZS53aWR0aCArIHBhZGRpbmcsIHBvc2l0aW9uLnkgLSBwYWRkaW5nLCBjaGFydFNpemUud2lkdGgsIGNoYXJ0U2l6ZS5oZWlnaHQpO1xcbiAgICAgICAgfVxcbiAgICAgICAgY29uc3QgcmFuZ2UgPSBtYXhWYWx1ZSAtIG1pblZhbHVlO1xcbiAgICAgICAgY29uc3QgYmFyT2Zmc2V0ID0gKDAsIHZlY18xLnZlYykoeCArIHBhZGRpbmcgKyBsYWJlbFNpemUud2lkdGggKyBwYWRkaW5nLCBwb3NpdGlvbi55IC0gcGFkZGluZyk7XFxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IE1hdGguY2VpbCh2YWx1ZXMubGVuZ3RoIC8gTWF0aC5tYXgodmFsdWVCdWZmZXJTdHJpZGUsIDEpKTsgaSsrKSB7XFxuICAgICAgICAgICAgbGV0IHZhbHVlO1xcbiAgICAgICAgICAgIGlmICh2YWx1ZUJ1ZmZlclN0cmlkZSA8PSAxKSB7XFxuICAgICAgICAgICAgICAgIHZhbHVlID0gdmFsdWVzW2ldO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICBlbHNlIHtcXG4gICAgICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZXNcXG4gICAgICAgICAgICAgICAgICAgIC5zbGljZShpICogdmFsdWVCdWZmZXJTdHJpZGUsIChpICsgMSkgKiB2YWx1ZUJ1ZmZlclN0cmlkZSlcXG4gICAgICAgICAgICAgICAgICAgIC5yZWR1Y2UoKGEsIGIpID0+IGEgKyBiLCAwKSAvIHZhbHVlQnVmZmVyU3RyaWRlO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICBjb25zdCBiYXJTaXplID0gKDAsIHZlY18xLnZlYykoYmFyV2lkdGgsIE1hdGgucm91bmQoY2hhcnRTaXplLmhlaWdodCAqICh2YWx1ZSAtIG1pblZhbHVlKSAvIHJhbmdlKSk7XFxuICAgICAgICAgICAgY29uc3QgYmFyUG9zaXRpb24gPSB2ZWNfMS52ZWMuYWRkKGJhck9mZnNldCwgKDAsIHZlY18xLnZlYykoKHZhbHVlcy5sZW5ndGggPCB2YWx1ZUJ1ZmZlclNpemVcXG4gICAgICAgICAgICAgICAgPyBNYXRoLmNlaWwoKHZhbHVlQnVmZmVyU2l6ZSAtIHZhbHVlcy5sZW5ndGgpIC8gdmFsdWVCdWZmZXJTdHJpZGUpICogYmFyV2lkdGhcXG4gICAgICAgICAgICAgICAgOiAwKSArIGkgKiBiYXJXaWR0aCwgY2hhcnRTaXplLmhlaWdodCAtIGJhclNpemUueSkpO1xcbiAgICAgICAgICAgIGNvbnN0IGJhckNvbG91ciA9IChfYiA9IChiYXJDb2xvdXJzXFxuICAgICAgICAgICAgICAgID8gKF9hID0gWy4uLmJhckNvbG91cnNdLnJldmVyc2UoKS5maW5kKGMgPT4gdmFsdWVzW2ldID49IGMub2Zmc2V0KSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmNvbG91clxcbiAgICAgICAgICAgICAgICA6IHVuZGVmaW5lZCkpICE9PSBudWxsICYmIF9iICE9PSB2b2lkIDAgPyBfYiA6IGZvcmVncm91bmRDb2xvdXI7XFxuICAgICAgICAgICAgY29udGV4dC5maWxsU3R5bGUgPSBiYXJDb2xvdXI7XFxuICAgICAgICAgICAgY29udGV4dC5maWxsUmVjdChiYXJQb3NpdGlvbi54LCBiYXJQb3NpdGlvbi55LCBiYXJTaXplLngsIGJhclNpemUueSk7XFxuICAgICAgICB9XFxuICAgICAgICBjb250ZXh0LnJlc3RvcmUoKTtcXG4gICAgfVxcbiAgICBkcmF3TWFya2VyKGNvbnRleHQsIG1hcmtlcikge1xcbiAgICAgICAgdmFyIF9hLCBfYiwgX2MsIF9kLCBfZSwgX2YsIF9nO1xcbiAgICAgICAgY29udGV4dC5zYXZlKCk7XFxuICAgICAgICBjb25zdCBwb3NpdGlvbiA9IChfYSA9IG1hcmtlci5wb3NpdGlvbikgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogKDAsIHZlY18xLnZlYykoKTtcXG4gICAgICAgIGlmIChtYXJrZXIuc2hvd0xhYmVsIHx8IG1hcmtlci5zaG93VmFsdWUpIHtcXG4gICAgICAgICAgICB0aGlzLmRyYXdMYWJlbChjb250ZXh0LCBEZWJ1Zy5wcmVwYXJlTGFiZWwoKF9iID0gbWFya2VyLmxhYmVsKSAhPT0gbnVsbCAmJiBfYiAhPT0gdm9pZCAwID8gX2IgOiAnJywgKF9jID0gbWFya2VyLnZhbHVlKSAhPT0gbnVsbCAmJiBfYyAhPT0gdm9pZCAwID8gX2MgOiAnJywgbWFya2VyLnNob3dMYWJlbCwgbWFya2VyLnNob3dWYWx1ZSksIHZlY18xLnZlYy5hZGQocG9zaXRpb24gIT09IG51bGwgJiYgcG9zaXRpb24gIT09IHZvaWQgMCA/IHBvc2l0aW9uIDogKDAsIHZlY18xLnZlYykoKSwgbWFya2VyLmxhYmVsT2Zmc2V0KSwgJ2xlZnQnLCAoX2QgPSBtYXJrZXIucGFkZGluZykgIT09IG51bGwgJiYgX2QgIT09IHZvaWQgMCA/IF9kIDogdGhpcy5vcHRpb25zLnBhZGRpbmcsIChfZSA9IG1hcmtlci5mb250KSAhPT0gbnVsbCAmJiBfZSAhPT0gdm9pZCAwID8gX2UgOiB0aGlzLm9wdGlvbnMuZm9udCwgKF9mID0gbWFya2VyLmZvcmVncm91bmRDb2xvdXIpICE9PSBudWxsICYmIF9mICE9PSB2b2lkIDAgPyBfZiA6IHRoaXMub3B0aW9ucy5mb3JlZ3JvdW5kQ29sb3VyLCAoX2cgPSBtYXJrZXIuYmFja2dyb3VuZENvbG91cikgIT09IG51bGwgJiYgX2cgIT09IHZvaWQgMCA/IF9nIDogdGhpcy5vcHRpb25zLmJhY2tncm91bmRDb2xvdXIpO1xcbiAgICAgICAgfVxcbiAgICAgICAgaWYgKG1hcmtlci5zaG93TWFya2VyKSB7XFxuICAgICAgICAgICAgY29udGV4dC5saW5lV2lkdGggPSAyO1xcbiAgICAgICAgICAgIGNvbnRleHQuc3Ryb2tlU3R5bGUgPSBjb250ZXh0LmZpbGxTdHlsZSA9IG1hcmtlci5tYXJrZXJDb2xvdXI7XFxuICAgICAgICAgICAgc3dpdGNoIChtYXJrZXIubWFya2VyU3R5bGUpIHtcXG4gICAgICAgICAgICAgICAgY2FzZSAneCc6XFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRyYXdDcm9zcyhjb250ZXh0LCBwb3NpdGlvbiwgbWFya2VyLm1hcmtlclNpemUpO1xcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XFxuICAgICAgICAgICAgICAgIGNhc2UgJysnOlxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kcmF3UGx1cyhjb250ZXh0LCBwb3NpdGlvbiwgbWFya2VyLm1hcmtlclNpemUpO1xcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XFxuICAgICAgICAgICAgICAgIGNhc2UgJy4nOlxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kcmF3RG90KGNvbnRleHQsIHBvc2l0aW9uLCBtYXJrZXIubWFya2VyU2l6ZSk7XFxuICAgICAgICAgICAgICAgICAgICBicmVhaztcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgICAgICBjb250ZXh0LnJlc3RvcmUoKTtcXG4gICAgfVxcbiAgICBkcmF3Q3Jvc3MoY29udGV4dCwgcG9zaXRpb24sIHNpemUpIHtcXG4gICAgICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XFxuICAgICAgICBjb25zdCBoYWxmU2l6ZSA9IHNpemUgLyAyO1xcbiAgICAgICAgY29udGV4dC5tb3ZlVG8ocG9zaXRpb24ueCAtIGhhbGZTaXplLCBwb3NpdGlvbi55IC0gaGFsZlNpemUpO1xcbiAgICAgICAgY29udGV4dC5saW5lVG8ocG9zaXRpb24ueCArIGhhbGZTaXplLCBwb3NpdGlvbi55ICsgaGFsZlNpemUpO1xcbiAgICAgICAgY29udGV4dC5tb3ZlVG8ocG9zaXRpb24ueCAtIGhhbGZTaXplLCBwb3NpdGlvbi55ICsgaGFsZlNpemUpO1xcbiAgICAgICAgY29udGV4dC5saW5lVG8ocG9zaXRpb24ueCArIGhhbGZTaXplLCBwb3NpdGlvbi55IC0gaGFsZlNpemUpO1xcbiAgICAgICAgY29udGV4dC5zdHJva2UoKTtcXG4gICAgfVxcbiAgICBkcmF3UGx1cyhjb250ZXh0LCBwb3NpdGlvbiwgc2l6ZSkge1xcbiAgICAgICAgY29udGV4dC5iZWdpblBhdGgoKTtcXG4gICAgICAgIGNvbnN0IGhhbGZTaXplID0gc2l6ZSAvIDI7XFxuICAgICAgICBjb250ZXh0Lm1vdmVUbyhwb3NpdGlvbi54LCBwb3NpdGlvbi55IC0gaGFsZlNpemUpO1xcbiAgICAgICAgY29udGV4dC5saW5lVG8ocG9zaXRpb24ueCwgcG9zaXRpb24ueSArIGhhbGZTaXplKTtcXG4gICAgICAgIGNvbnRleHQubW92ZVRvKHBvc2l0aW9uLnggLSBoYWxmU2l6ZSwgcG9zaXRpb24ueSk7XFxuICAgICAgICBjb250ZXh0LmxpbmVUbyhwb3NpdGlvbi54ICsgaGFsZlNpemUsIHBvc2l0aW9uLnkpO1xcbiAgICAgICAgY29udGV4dC5zdHJva2UoKTtcXG4gICAgfVxcbiAgICBkcmF3RG90KGNvbnRleHQsIHBvc2l0aW9uLCBzaXplKSB7XFxuICAgICAgICBjb250ZXh0LmJlZ2luUGF0aCgpO1xcbiAgICAgICAgY29udGV4dC5hcmMocG9zaXRpb24ueCwgcG9zaXRpb24ueSwgc2l6ZSAvIDIsIDAsIE1hdGguUEkgKiAyKTtcXG4gICAgICAgIGNvbnRleHQuZmlsbCgpO1xcbiAgICB9XFxuICAgIGRyYXdCb3JkZXIoY29udGV4dCwgYm9yZGVyKSB7XFxuICAgICAgICB2YXIgX2EsIF9iLCBfYywgX2QsIF9lLCBfZiwgX2c7XFxuICAgICAgICBjb250ZXh0LnNhdmUoKTtcXG4gICAgICAgIGNvbnN0IHBvc2l0aW9uID0gKF9hID0gYm9yZGVyLnBvc2l0aW9uKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiAoMCwgdmVjXzEudmVjKSgpO1xcbiAgICAgICAgaWYgKGJvcmRlci5zaG93TGFiZWwgfHwgYm9yZGVyLnNob3dWYWx1ZSkge1xcbiAgICAgICAgICAgIHRoaXMuZHJhd0xhYmVsKGNvbnRleHQsIERlYnVnLnByZXBhcmVMYWJlbCgoX2IgPSBib3JkZXIubGFiZWwpICE9PSBudWxsICYmIF9iICE9PSB2b2lkIDAgPyBfYiA6ICcnLCAoX2MgPSBib3JkZXIudmFsdWUpICE9PSBudWxsICYmIF9jICE9PSB2b2lkIDAgPyBfYyA6ICcnLCBib3JkZXIuc2hvd0xhYmVsLCBib3JkZXIuc2hvd1ZhbHVlKSwgdmVjXzEudmVjLmFkZChwb3NpdGlvbiAhPT0gbnVsbCAmJiBwb3NpdGlvbiAhPT0gdm9pZCAwID8gcG9zaXRpb24gOiAoMCwgdmVjXzEudmVjKSgpLCBib3JkZXIubGFiZWxPZmZzZXQpLCAnbGVmdCcsIChfZCA9IGJvcmRlci5wYWRkaW5nKSAhPT0gbnVsbCAmJiBfZCAhPT0gdm9pZCAwID8gX2QgOiB0aGlzLm9wdGlvbnMucGFkZGluZywgKF9lID0gYm9yZGVyLmZvbnQpICE9PSBudWxsICYmIF9lICE9PSB2b2lkIDAgPyBfZSA6IHRoaXMub3B0aW9ucy5mb250LCAoX2YgPSBib3JkZXIuZm9yZWdyb3VuZENvbG91cikgIT09IG51bGwgJiYgX2YgIT09IHZvaWQgMCA/IF9mIDogdGhpcy5vcHRpb25zLmZvcmVncm91bmRDb2xvdXIsIChfZyA9IGJvcmRlci5iYWNrZ3JvdW5kQ29sb3VyKSAhPT0gbnVsbCAmJiBfZyAhPT0gdm9pZCAwID8gX2cgOiB0aGlzLm9wdGlvbnMuYmFja2dyb3VuZENvbG91cik7XFxuICAgICAgICB9XFxuICAgICAgICBpZiAoYm9yZGVyLnNob3dCb3JkZXIpIHtcXG4gICAgICAgICAgICBjb250ZXh0LmxpbmVXaWR0aCA9IGJvcmRlci5ib3JkZXJXaWR0aDtcXG4gICAgICAgICAgICBjb250ZXh0LnN0cm9rZVN0eWxlID0gY29udGV4dC5maWxsU3R5bGUgPSBib3JkZXIuYm9yZGVyQ29sb3VyO1xcbiAgICAgICAgICAgIHN3aXRjaCAoYm9yZGVyLmJvcmRlclN0eWxlKSB7XFxuICAgICAgICAgICAgICAgIGNhc2UgJ3NvbGlkJzpcXG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQuc2V0TGluZURhc2goW10pO1xcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XFxuICAgICAgICAgICAgICAgIGNhc2UgJ2Rhc2hlZCc6XFxuICAgICAgICAgICAgICAgICAgICBjb250ZXh0LnNldExpbmVEYXNoKFtib3JkZXIuYm9yZGVyRGFzaFNpemUsIGJvcmRlci5ib3JkZXJEYXNoU2l6ZV0pO1xcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XFxuICAgICAgICAgICAgICAgIGNhc2UgJ2RvdHRlZCc6XFxuICAgICAgICAgICAgICAgICAgICBjb250ZXh0LnNldExpbmVEYXNoKFtib3JkZXIuYm9yZGVyV2lkdGgsIGJvcmRlci5ib3JkZXJXaWR0aF0pO1xcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIHN3aXRjaCAoYm9yZGVyLmJvcmRlclNoYXBlKSB7XFxuICAgICAgICAgICAgICAgIGNhc2UgJ3JlY3RhbmdsZSc6XFxuICAgICAgICAgICAgICAgICAgICBpZiAoYm9yZGVyLnNpemUpIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRyYXdSZWN0YW5nbGUoY29udGV4dCwgcG9zaXRpb24sIGJvcmRlci5zaXplKTtcXG4gICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xcbiAgICAgICAgICAgICAgICBjYXNlICdjaXJjbGUnOlxcbiAgICAgICAgICAgICAgICAgICAgaWYgKGJvcmRlci5yYWRpdXMpIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRyYXdDaXJjbGUoY29udGV4dCwgcG9zaXRpb24sIGJvcmRlci5yYWRpdXMpO1xcbiAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICAgICAgY29udGV4dC5yZXN0b3JlKCk7XFxuICAgIH1cXG4gICAgZHJhd1JlY3RhbmdsZShjb250ZXh0LCBwb3NpdGlvbiwgc2l6ZSkge1xcbiAgICAgICAgY29udGV4dC5iZWdpblBhdGgoKTtcXG4gICAgICAgIGNvbnRleHQucmVjdChwb3NpdGlvbi54LCBwb3NpdGlvbi55LCBzaXplLngsIHNpemUueSk7XFxuICAgICAgICBjb250ZXh0LnN0cm9rZSgpO1xcbiAgICB9XFxuICAgIGRyYXdDaXJjbGUoY29udGV4dCwgcG9zaXRpb24sIHJhZGl1cykge1xcbiAgICAgICAgY29udGV4dC5iZWdpblBhdGgoKTtcXG4gICAgICAgIGNvbnRleHQuYXJjKHBvc2l0aW9uLngsIHBvc2l0aW9uLnksIHJhZGl1cywgMCwgTWF0aC5QSSAqIDIpO1xcbiAgICAgICAgY29udGV4dC5zdHJva2UoKTtcXG4gICAgfVxcbn1cXG5leHBvcnRzW1xcXCJkZWZhdWx0XFxcIl0gPSBEZWJ1ZztcXG5EZWJ1Zy5kZWZhdWx0T3B0aW9ucyA9IHtcXG4gICAgbWFyZ2luOiAxMCxcXG4gICAgcGFkZGluZzogNCxcXG4gICAgZm9udDogJzEwcHQgTHVjaWRhIENvbnNvbGUsIG1vbm9zcGFjZScsXFxuICAgIGxpbmVIZWlnaHQ6IDEyLFxcbiAgICBsaW5lTWFyZ2luOiAwLFxcbiAgICBmb3JlZ3JvdW5kQ29sb3VyOiAnI2ZmZicsXFxuICAgIGJhY2tncm91bmRDb2xvdXI6ICcjMzMzJyxcXG4gICAgZGVmYXVsdFZhbHVlOiB7XFxuICAgICAgICBhbGlnbjogJ2xlZnQnLFxcbiAgICAgICAgc2hvd0xhYmVsOiB0cnVlLFxcbiAgICB9LFxcbiAgICBkZWZhdWx0Q2hhcnQ6IHtcXG4gICAgICAgIHZhbHVlczogW10sXFxuICAgICAgICB2YWx1ZUJ1ZmZlclNpemU6IDYwLFxcbiAgICAgICAgdmFsdWVCdWZmZXJTdHJpZGU6IDEsXFxuICAgICAgICBtaW5WYWx1ZTogMCxcXG4gICAgICAgIG1heFZhbHVlOiAxMDAsXFxuICAgICAgICBiYXJXaWR0aDogMixcXG4gICAgICAgIGFsaWduOiAnbGVmdCcsXFxuICAgICAgICBzaG93TGFiZWw6IHRydWUsXFxuICAgICAgICBjaGFydEJhY2tncm91bmRDb2xvdXI6ICcjMjIyJyxcXG4gICAgfSxcXG4gICAgZGVmYXVsdE1hcmtlcjoge1xcbiAgICAgICAgc2hvd0xhYmVsOiB0cnVlLFxcbiAgICAgICAgc2hvd1ZhbHVlOiB0cnVlLFxcbiAgICAgICAgc2hvd01hcmtlcjogdHJ1ZSxcXG4gICAgICAgIG1hcmtlclNpemU6IDYsXFxuICAgICAgICBtYXJrZXJTdHlsZTogJ3gnLFxcbiAgICAgICAgbWFya2VyQ29sb3VyOiAnI2NjYycsXFxuICAgICAgICBzcGFjZTogJ3dvcmxkJyxcXG4gICAgICAgIGxhYmVsT2Zmc2V0OiAoMCwgdmVjXzEudmVjKSgxMCksXFxuICAgIH0sXFxuICAgIGRlZmF1bHRCb3JkZXI6IHtcXG4gICAgICAgIHNob3dMYWJlbDogdHJ1ZSxcXG4gICAgICAgIHNob3dWYWx1ZTogdHJ1ZSxcXG4gICAgICAgIHNob3dCb3JkZXI6IHRydWUsXFxuICAgICAgICBib3JkZXJXaWR0aDogMSxcXG4gICAgICAgIGJvcmRlclN0eWxlOiAnc29saWQnLFxcbiAgICAgICAgYm9yZGVyU2hhcGU6ICdyZWN0YW5nbGUnLFxcbiAgICAgICAgYm9yZGVyQ29sb3VyOiAnI2NjYycsXFxuICAgICAgICBib3JkZXJEYXNoU2l6ZTogNSxcXG4gICAgICAgIHNwYWNlOiAnd29ybGQnLFxcbiAgICAgICAgbGFiZWxPZmZzZXQ6ICgwLCB2ZWNfMS52ZWMpKDEwKSxcXG4gICAgfSxcXG59O1xcblxcblxcbi8vIyBzb3VyY2VVUkw9d2VicGFjazovL0BiYXNlbWVudHVuaXZlcnNlL2RlYnVnLy4vaW5kZXgudHM/XCIpO1xuXG4vKioqLyB9KVxuXG4vKioqKioqLyBcdH0pO1xuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKiovIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHR2YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG4vKioqKioqLyBcdFxuLyoqKioqKi8gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuLyoqKioqKi8gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG4vKioqKioqLyBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4vKioqKioqLyBcdFx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG4vKioqKioqLyBcdFx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG4vKioqKioqLyBcdFx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4vKioqKioqLyBcdFx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG4vKioqKioqLyBcdFx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG4vKioqKioqLyBcdFx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuLyoqKioqKi8gXHRcdFx0ZXhwb3J0czoge31cbi8qKioqKiovIFx0XHR9O1xuLyoqKioqKi8gXHRcbi8qKioqKiovIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbi8qKioqKiovIFx0XHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbi8qKioqKiovIFx0XG4vKioqKioqLyBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbi8qKioqKiovIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4vKioqKioqLyBcdH1cbi8qKioqKiovIFx0XG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKi8gXHRcbi8qKioqKiovIFx0Ly8gc3RhcnR1cFxuLyoqKioqKi8gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8qKioqKiovIFx0Ly8gVGhpcyBlbnRyeSBtb2R1bGUgY2FuJ3QgYmUgaW5saW5lZCBiZWNhdXNlIHRoZSBldmFsIGRldnRvb2wgaXMgdXNlZC5cbi8qKioqKiovIFx0dmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9pbmRleC50c1wiKTtcbi8qKioqKiovIFx0XG4vKioqKioqLyBcdHJldHVybiBfX3dlYnBhY2tfZXhwb3J0c19fO1xuLyoqKioqKi8gfSkoKVxuO1xufSk7IiwiLypcbiAqIEFUVEVOVElPTjogVGhlIFwiZXZhbFwiIGRldnRvb2wgaGFzIGJlZW4gdXNlZCAobWF5YmUgYnkgZGVmYXVsdCBpbiBtb2RlOiBcImRldmVsb3BtZW50XCIpLlxuICogVGhpcyBkZXZ0b29sIGlzIG5laXRoZXIgbWFkZSBmb3IgcHJvZHVjdGlvbiBub3IgZm9yIHJlYWRhYmxlIG91dHB1dCBmaWxlcy5cbiAqIEl0IHVzZXMgXCJldmFsKClcIiBjYWxscyB0byBjcmVhdGUgYSBzZXBhcmF0ZSBzb3VyY2UgZmlsZSBpbiB0aGUgYnJvd3NlciBkZXZ0b29scy5cbiAqIElmIHlvdSBhcmUgdHJ5aW5nIHRvIHJlYWQgdGhlIG91dHB1dCBmaWxlLCBzZWxlY3QgYSBkaWZmZXJlbnQgZGV2dG9vbCAoaHR0cHM6Ly93ZWJwYWNrLmpzLm9yZy9jb25maWd1cmF0aW9uL2RldnRvb2wvKVxuICogb3IgZGlzYWJsZSB0aGUgZGVmYXVsdCBkZXZ0b29sIHdpdGggXCJkZXZ0b29sOiBmYWxzZVwiLlxuICogSWYgeW91IGFyZSBsb29raW5nIGZvciBwcm9kdWN0aW9uLXJlYWR5IG91dHB1dCBmaWxlcywgc2VlIG1vZGU6IFwicHJvZHVjdGlvblwiIChodHRwczovL3dlYnBhY2suanMub3JnL2NvbmZpZ3VyYXRpb24vbW9kZS8pLlxuICovXG4oZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2Uge1xuXHRcdHZhciBhID0gZmFjdG9yeSgpO1xuXHRcdGZvcih2YXIgaSBpbiBhKSAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnID8gZXhwb3J0cyA6IHJvb3QpW2ldID0gYVtpXTtcblx0fVxufSkoc2VsZiwgKCkgPT4ge1xucmV0dXJuIC8qKioqKiovICgoKSA9PiB7IC8vIHdlYnBhY2tCb290c3RyYXBcbi8qKioqKiovIFx0dmFyIF9fd2VicGFja19tb2R1bGVzX18gPSAoe1xuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL0BiYXNlbWVudHVuaXZlcnNlL3V0aWxzL3V0aWxzLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL0BiYXNlbWVudHVuaXZlcnNlL3V0aWxzL3V0aWxzLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKi8gKChtb2R1bGUpID0+IHtcblxuZXZhbChcIi8qKlxcbiAqIEBvdmVydmlldyBBIGxpYnJhcnkgb2YgdXNlZnVsIGZ1bmN0aW9uc1xcbiAqIEBhdXRob3IgR29yZG9uIExhcnJpZ2FuXFxuICovXFxuXFxuLyoqXFxuICogQ2hlY2sgaWYgdHdvIG51bWJlcnMgYXJlIGFwcHJveGltYXRlbHkgZXF1YWxcXG4gKiBAcGFyYW0ge251bWJlcn0gYSBOdW1iZXIgYVxcbiAqIEBwYXJhbSB7bnVtYmVyfSBiIE51bWJlciBiXFxuICogQHBhcmFtIHtudW1iZXJ9IFtwPU51bWJlci5FUFNJTE9OXSBUaGUgcHJlY2lzaW9uIHZhbHVlXFxuICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiBudW1iZXJzIGEgYW5kIGIgYXJlIGFwcHJveGltYXRlbHkgZXF1YWxcXG4gKi9cXG5jb25zdCBmbG9hdEVxdWFscyA9IChhLCBiLCBwID0gTnVtYmVyLkVQU0lMT04pID0+IE1hdGguYWJzKGEgLSBiKSA8IHA7XFxuXFxuLyoqXFxuICogQ2xhbXAgYSBudW1iZXIgYmV0d2VlbiBtaW4gYW5kIG1heFxcbiAqIEBwYXJhbSB7bnVtYmVyfSBhIFRoZSBudW1iZXIgdG8gY2xhbXBcXG4gKiBAcGFyYW0ge251bWJlcn0gW21pbj0wXSBUaGUgbWluaW11bSB2YWx1ZVxcbiAqIEBwYXJhbSB7bnVtYmVyfSBbbWF4PTFdIFRoZSBtYXhpbXVtIHZhbHVlXFxuICogQHJldHVybiB7bnVtYmVyfSBBIGNsYW1wZWQgbnVtYmVyXFxuICovXFxuY29uc3QgY2xhbXAgPSAoYSwgbWluID0gMCwgbWF4ID0gMSkgPT4gYSA8IG1pbiA/IG1pbiA6IChhID4gbWF4ID8gbWF4IDogYSk7XFxuXFxuLyoqXFxuICogR2V0IHRoZSBmcmFjdGlvbmFsIHBhcnQgb2YgYSBudW1iZXJcXG4gKiBAcGFyYW0ge251bWJlcn0gYSBUaGUgbnVtYmVyIGZyb20gd2hpY2ggdG8gZ2V0IHRoZSBmcmFjdGlvbmFsIHBhcnRcXG4gKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBmcmFjdGlvbmFsIHBhcnQgb2YgdGhlIG51bWJlclxcbiAqL1xcbmNvbnN0IGZyYWMgPSBhID0+IGEgPj0gMCA/IGEgLSBNYXRoLmZsb29yKGEpIDogYSAtIE1hdGguY2VpbChhKTtcXG5cXG4vKipcXG4gKiBEbyBhIGxpbmVhciBpbnRlcnBvbGF0aW9uIGJldHdlZW4gYSBhbmQgYlxcbiAqIEBwYXJhbSB7bnVtYmVyfSBhIFRoZSBtaW5pbXVtIG51bWJlclxcbiAqIEBwYXJhbSB7bnVtYmVyfSBiIFRoZSBtYXhpbXVtIG51bWJlclxcbiAqIEBwYXJhbSB7bnVtYmVyfSBpIFRoZSBpbnRlcnBvbGF0aW9uIHZhbHVlLCBzaG91bGQgYmUgaW4gdGhlIGludGVydmFsIFswLCAxXVxcbiAqIEByZXR1cm4ge251bWJlcn0gQW4gaW50ZXJwb2xhdGVkIHZhbHVlIGluIHRoZSBpbnRlcnZhbCBbYSwgYl1cXG4gKi9cXG5jb25zdCBsZXJwID0gKGEsIGIsIGkpID0+IGEgKyAoYiAtIGEpICogaTtcXG5cXG4vKipcXG4gKiBHZXQgdGhlIHBvc2l0aW9uIG9mIGkgYmV0d2VlbiBhIGFuZCBiXFxuICogQHBhcmFtIHtudW1iZXJ9IGEgVGhlIG1pbmltdW0gbnVtYmVyXFxuICogQHBhcmFtIHtudW1iZXJ9IGIgVGhlIG1heGltdW0gbnVtYmVyXFxuICogQHBhcmFtIHtudW1iZXJ9IGkgVGhlIGludGVycG9sYXRlZCB2YWx1ZSBpbiB0aGUgaW50ZXJ2YWwgW2EsIGJdXFxuICogQHJldHVybiB7bnVtYmVyfSBUaGUgcG9zaXRpb24gb2YgaSBiZXR3ZWVuIGEgYW5kIGJcXG4gKi9cXG5jb25zdCB1bmxlcnAgPSAoYSwgYiwgaSkgPT4gKGkgLSBhKSAvIChiIC0gYSk7XFxuXFxuLyoqXFxuICogRG8gYSBiaWxpbmVhciBpbnRlcnBvbGF0aW9uXFxuICogQHBhcmFtIHtudW1iZXJ9IGMwMCBUb3AtbGVmdCB2YWx1ZVxcbiAqIEBwYXJhbSB7bnVtYmVyfSBjMTAgVG9wLXJpZ2h0IHZhbHVlXFxuICogQHBhcmFtIHtudW1iZXJ9IGMwMSBCb3R0b20tbGVmdCB2YWx1ZVxcbiAqIEBwYXJhbSB7bnVtYmVyfSBjMTEgQm90dG9tLXJpZ2h0IHZhbHVlXFxuICogQHBhcmFtIHtudW1iZXJ9IGl4IEludGVycG9sYXRpb24gdmFsdWUgYWxvbmcgeFxcbiAqIEBwYXJhbSB7bnVtYmVyfSBpeSBJbnRlcnBvbGF0aW9uIHZhbHVlIGFsb25nIHlcXG4gKiBAcmV0dXJuIHtudW1iZXJ9IEEgYmlsaW5lYXIgaW50ZXJwb2xhdGVkIHZhbHVlXFxuICovXFxuY29uc3QgYmxlcnAgPSAoYzAwLCBjMTAsIGMwMSwgYzExLCBpeCwgaXkpID0+IGxlcnAobGVycChjMDAsIGMxMCwgaXgpLCBsZXJwKGMwMSwgYzExLCBpeCksIGl5KTtcXG5cXG4vKipcXG4gKiBSZS1tYXAgYSBudW1iZXIgaSBmcm9tIHJhbmdlIGExLi4uYTIgdG8gYjEuLi5iMlxcbiAqIEBwYXJhbSB7bnVtYmVyfSBpIFRoZSBudW1iZXIgdG8gcmUtbWFwXFxuICogQHBhcmFtIHtudW1iZXJ9IGExXFxuICogQHBhcmFtIHtudW1iZXJ9IGEyXFxuICogQHBhcmFtIHtudW1iZXJ9IGIxXFxuICogQHBhcmFtIHtudW1iZXJ9IGIyXFxuICogQHJldHVybiB7bnVtYmVyfVxcbiAqL1xcbmNvbnN0IHJlbWFwID0gKGksIGExLCBhMiwgYjEsIGIyKSA9PiBiMSArIChpIC0gYTEpICogKGIyIC0gYjEpIC8gKGEyIC0gYTEpO1xcblxcbi8qKlxcbiAqIERvIGEgc21vb3RoIGludGVycG9sYXRpb24gYmV0d2VlbiBhIGFuZCBiXFxuICogQHBhcmFtIHtudW1iZXJ9IGEgVGhlIG1pbmltdW0gbnVtYmVyXFxuICogQHBhcmFtIHtudW1iZXJ9IGIgVGhlIG1heGltdW0gbnVtYmVyXFxuICogQHBhcmFtIHtudW1iZXJ9IGkgVGhlIGludGVycG9sYXRpb24gdmFsdWVcXG4gKiBAcmV0dXJuIHtudW1iZXJ9IEFuIGludGVycG9sYXRlZCB2YWx1ZSBpbiB0aGUgaW50ZXJ2YWwgW2EsIGJdXFxuICovXFxuY29uc3Qgc21vb3Roc3RlcCA9IChhLCBiLCBpKSA9PiBsZXJwKGEsIGIsIDMgKiBNYXRoLnBvdyhpLCAyKSAtIDIgKiBNYXRoLnBvdyhpLCAzKSk7XFxuXFxuLyoqXFxuICogR2V0IGFuIGFuZ2xlIGluIHJhZGlhbnNcXG4gKiBAcGFyYW0ge251bWJlcn0gZGVncmVlcyBUaGUgYW5nbGUgaW4gZGVncmVlc1xcbiAqIEByZXR1cm4ge251bWJlcn0gVGhlIGFuZ2xlIGluIHJhZGlhbnNcXG4gKi9cXG5jb25zdCByYWRpYW5zID0gZGVncmVlcyA9PiAoTWF0aC5QSSAvIDE4MCkgKiBkZWdyZWVzO1xcblxcbi8qKlxcbiAqIEdldCBhbiBhbmdsZSBpbiBkZWdyZWVzXFxuICogQHBhcmFtIHtudW1iZXJ9IHJhZGlhbnMgVGhlIGFuZ2xlIGluIHJhZGlhbnNcXG4gKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBhbmdsZSBpbiBkZWdyZWVzXFxuICovXFxuY29uc3QgZGVncmVlcyA9IHJhZGlhbnMgPT4gKDE4MCAvIE1hdGguUEkpICogcmFkaWFucztcXG5cXG4vKipcXG4gKiBHZXQgYSByYW5kb20gZmxvYXQgaW4gdGhlIGludGVydmFsIFttaW4sIG1heClcXG4gKiBAcGFyYW0ge251bWJlcn0gbWluIEluY2x1c2l2ZSBtaW5cXG4gKiBAcGFyYW0ge251bWJlcn0gbWF4IEV4Y2x1c2l2ZSBtYXhcXG4gKiBAcmV0dXJuIHtudW1iZXJ9IEEgcmFuZG9tIGZsb2F0IGluIHRoZSBpbnRlcnZhbCBbbWluLCBtYXgpXFxuICovXFxuY29uc3QgcmFuZG9tQmV0d2VlbiA9IChtaW4sIG1heCkgPT4gTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pICsgbWluO1xcblxcbi8qKlxcbiAqIEdldCBhIHJhbmRvbSBpbnRlZ2VyIGluIHRoZSBpbnRlcnZhbCBbbWluLCBtYXhdXFxuICogQHBhcmFtIHtudW1iZXJ9IG1pbiBJbmNsdXNpdmUgbWluXFxuICogQHBhcmFtIHtudW1iZXJ9IG1heCBJbmNsdXNpdmUgbWF4XFxuICogQHJldHVybiB7bnVtYmVyfSBBIHJhbmRvbSBpbnRlZ2VyIGluIHRoZSBpbnRlcnZhbCBbbWluLCBtYXhdXFxuICovXFxuY29uc3QgcmFuZG9tSW50QmV0d2VlbiA9IChtaW4sIG1heCkgPT4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpKSArIG1pbjtcXG5cXG4vKipcXG4gKiBHZXQgYSBub3JtYWxseS1kaXN0cmlidXRlZCByYW5kb20gbnVtYmVyXFxuICogQHBhcmFtIHtudW1iZXJ9IFttdT0wLjVdIFRoZSBtZWFuIHZhbHVlXFxuICogQHBhcmFtIHtudW1iZXJ9IFtzaWdtYT0wLjVdIFRoZSBzdGFuZGFyZCBkZXZpYXRpb25cXG4gKiBAcGFyYW0ge251bWJlcn0gW3NhbXBsZXM9Ml0gVGhlIG51bWJlciBvZiBzYW1wbGVzXFxuICogQHJldHVybiB7bnVtYmVyfSBBIG5vcm1hbGx5LWRpc3RyaWJ1dGVkIHJhbmRvbSBudW1iZXJcXG4gKi9cXG5jb25zdCBjbHRSYW5kb20gPSAobXUgPSAwLjUsIHNpZ21hID0gMC41LCBzYW1wbGVzID0gMikgPT4ge1xcbiAgbGV0IHRvdGFsID0gMDtcXG4gIGZvciAobGV0IGkgPSBzYW1wbGVzOyBpLS07KSB7XFxuICAgIHRvdGFsICs9IE1hdGgucmFuZG9tKCk7XFxuICB9XFxuICByZXR1cm4gbXUgKyAodG90YWwgLSBzYW1wbGVzIC8gMikgLyAoc2FtcGxlcyAvIDIpICogc2lnbWE7XFxufTtcXG5cXG4vKipcXG4gKiBHZXQgYSBub3JtYWxseS1kaXN0cmlidXRlZCByYW5kb20gaW50ZWdlciBpbiB0aGUgaW50ZXJ2YWwgW21pbiwgbWF4XVxcbiAqIEBwYXJhbSB7bnVtYmVyfSBtaW4gSW5jbHVzaXZlIG1pblxcbiAqIEBwYXJhbSB7bnVtYmVyfSBtYXggSW5jbHVzaXZlIG1heFxcbiAqIEByZXR1cm4ge251bWJlcn0gQSBub3JtYWxseS1kaXN0cmlidXRlZCByYW5kb20gaW50ZWdlclxcbiAqL1xcbmNvbnN0IGNsdFJhbmRvbUludCA9IChtaW4sIG1heCkgPT4gTWF0aC5mbG9vcihtaW4gKyBjbHRSYW5kb20oMC41LCAwLjUsIDIpICogKG1heCArIDEgLSBtaW4pKTtcXG5cXG4vKipcXG4gKiBSZXR1cm4gYSB3ZWlnaHRlZCByYW5kb20gaW50ZWdlclxcbiAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0gdyBBbiBhcnJheSBvZiB3ZWlnaHRzXFxuICogQHJldHVybiB7bnVtYmVyfSBBbiBpbmRleCBmcm9tIHdcXG4gKi9cXG5jb25zdCB3ZWlnaHRlZFJhbmRvbSA9IHcgPT4ge1xcbiAgbGV0IHRvdGFsID0gdy5yZWR1Y2UoKGEsIGkpID0+IGEgKyBpLCAwKSwgbiA9IDA7XFxuICBjb25zdCByID0gTWF0aC5yYW5kb20oKSAqIHRvdGFsO1xcbiAgd2hpbGUgKHRvdGFsID4gcikge1xcbiAgICB0b3RhbCAtPSB3W24rK107XFxuICB9XFxuICByZXR1cm4gbiAtIDE7XFxufTtcXG5cXG4vKipcXG4gKiBBbiBpbnRlcnBvbGF0aW9uIGZ1bmN0aW9uXFxuICogQGNhbGxiYWNrIGludGVycG9sYXRpb25DYWxsYmFja1xcbiAqIEBwYXJhbSB7bnVtYmVyfSBhIFRoZSBtaW5pbXVtIG51bWJlclxcbiAqIEBwYXJhbSB7bnVtYmVyfSBiIFRoZSBtYXhpbXVtIG51bWJlclxcbiAqIEBwYXJhbSB7bnVtYmVyfSBpIFRoZSBpbnRlcnBvbGF0aW9uIHZhbHVlLCBzaG91bGQgYmUgaW4gdGhlIGludGVydmFsIFswLCAxXVxcbiAqIEByZXR1cm4ge251bWJlcn0gVGhlIGludGVycG9sYXRlZCB2YWx1ZSBpbiB0aGUgaW50ZXJ2YWwgW2EsIGJdXFxuICovXFxuXFxuLyoqXFxuICogUmV0dXJuIGFuIGludGVycG9sYXRlZCB2YWx1ZSBmcm9tIGFuIGFycmF5XFxuICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSBhIEFuIGFycmF5IG9mIHZhbHVlcyBpbnRlcnBvbGF0ZVxcbiAqIEBwYXJhbSB7bnVtYmVyfSBpIEEgbnVtYmVyIGluIHRoZSBpbnRlcnZhbCBbMCwgMV1cXG4gKiBAcGFyYW0ge2ludGVycG9sYXRpb25DYWxsYmFja30gW2Y9TWF0aC5sZXJwXSBUaGUgaW50ZXJwb2xhdGlvbiBmdW5jdGlvbiB0byB1c2VcXG4gKiBAcmV0dXJuIHtudW1iZXJ9IEFuIGludGVycG9sYXRlZCB2YWx1ZSBpbiB0aGUgaW50ZXJ2YWwgW21pbihhKSwgbWF4KGEpXVxcbiAqL1xcbmNvbnN0IGxlcnBBcnJheSA9IChhLCBpLCBmID0gbGVycCkgPT4ge1xcbiAgY29uc3QgcyA9IGkgKiAoYS5sZW5ndGggLSAxKTtcXG4gIGNvbnN0IHAgPSBjbGFtcChNYXRoLnRydW5jKHMpLCAwLCBhLmxlbmd0aCAtIDEpO1xcbiAgcmV0dXJuIGYoYVtwXSB8fCAwLCBhW3AgKyAxXSB8fCAwLCBmcmFjKHMpKTtcXG59O1xcblxcbi8qKlxcbiAqIEdldCB0aGUgZG90IHByb2R1Y3Qgb2YgdHdvIHZlY3RvcnNcXG4gKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IGEgVmVjdG9yIGFcXG4gKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IGIgVmVjdG9yIGJcXG4gKiBAcmV0dXJuIHtudW1iZXJ9IGEg4oiZIGJcXG4gKi9cXG5jb25zdCBkb3QgPSAoYSwgYikgPT4gYS5yZWR1Y2UoKG4sIHYsIGkpID0+IG4gKyB2ICogYltpXSwgMCk7XFxuXFxuLyoqXFxuICogR2V0IHRoZSBmYWN0b3JpYWwgb2YgYSBudW1iZXJcXG4gKiBAcGFyYW0ge251bWJlcn0gYVxcbiAqIEByZXR1cm4ge251bWJlcn0gYSFcXG4gKi9cXG5jb25zdCBmYWN0b3JpYWwgPSBhID0+IHtcXG4gIGxldCByZXN1bHQgPSAxO1xcbiAgZm9yIChsZXQgaSA9IDI7IGkgPD0gYTsgaSsrKSB7XFxuICAgIHJlc3VsdCAqPSBpO1xcbiAgfVxcbiAgcmV0dXJuIHJlc3VsdDtcXG59O1xcblxcbi8qKlxcbiAqIEdldCB0aGUgbnVtYmVyIG9mIHBlcm11dGF0aW9ucyBvZiByIGVsZW1lbnRzIGZyb20gYSBzZXQgb2YgbiBlbGVtZW50c1xcbiAqIEBwYXJhbSB7bnVtYmVyfSBuXFxuICogQHBhcmFtIHtudW1iZXJ9IHJcXG4gKiBAcmV0dXJuIHtudW1iZXJ9IG5QclxcbiAqL1xcbmNvbnN0IHBlcm11dGF0aW9uID0gKG4sIHIpID0+IGZhY3RvcmlhbChuKSAvIGZhY3RvcmlhbChuIC0gcik7XFxuXFxuLyoqXFxuICogR2V0IHRoZSBudW1iZXIgb2YgY29tYmluYXRpb25zIG9mIHIgZWxlbWVudHMgZnJvbSBhIHNldCBvZiBuIGVsZW1lbnRzXFxuICogQHBhcmFtIHtudW1iZXJ9IG5cXG4gKiBAcGFyYW0ge251bWJlcn0gclxcbiAqIEByZXR1cm4ge251bWJlcn0gbkNyXFxuICovXFxuY29uc3QgY29tYmluYXRpb24gPSAobiwgcikgPT4gZmFjdG9yaWFsKG4pIC8gKGZhY3RvcmlhbChyKSAqIGZhY3RvcmlhbChuIC0gcikpO1xcblxcbi8qKlxcbiAqIEEgZnVuY3Rpb24gZm9yIGdlbmVyYXRpbmcgYXJyYXkgdmFsdWVzXFxuICogQGNhbGxiYWNrIHRpbWVzQ2FsbGJhY2tcXG4gKiBAcGFyYW0ge251bWJlcn0gaSBUaGUgYXJyYXkgaW5kZXhcXG4gKiBAcmV0dXJuIHsqfSBUaGUgYXJyYXkgdmFsdWVcXG4gKi9cXG5cXG4vKipcXG4gKiBSZXR1cm4gYSBuZXcgYXJyYXkgd2l0aCBsZW5ndGggbiBieSBjYWxsaW5nIGZ1bmN0aW9uIGYoaSkgb24gZWFjaCBlbGVtZW50XFxuICogQHBhcmFtIHt0aW1lc0NhbGxiYWNrfSBmXFxuICogQHBhcmFtIHtudW1iZXJ9IG4gVGhlIHNpemUgb2YgdGhlIGFycmF5XFxuICogQHJldHVybiB7QXJyYXk8Kj59XFxuICovXFxuY29uc3QgdGltZXMgPSAoZiwgbikgPT4gQXJyYXkobikuZmlsbCgwKS5tYXAoKF8sIGkpID0+IGYoaSkpO1xcblxcbi8qKlxcbiAqIFJldHVybiBhbiBhcnJheSBjb250YWluaW5nIG51bWJlcnMgMC0+KG4gLSAxKVxcbiAqIEBwYXJhbSB7bnVtYmVyfSBuIFRoZSBzaXplIG9mIHRoZSBhcnJheVxcbiAqIEByZXR1cm4ge0FycmF5PG51bWJlcj59IEFuIGFycmF5IG9mIGludGVnZXJzIDAtPihuIC0gMSlcXG4gKi9cXG5jb25zdCByYW5nZSA9IG4gPT4gdGltZXMoaSA9PiBpLCBuKTtcXG5cXG4vKipcXG4gKiBaaXAgMiBhcnJheXMgdG9nZXRoZXIsIGkuZS4gKFsxLCAyLCAzXSwgW2EsIGIsIGNdKSA9PiBbWzEsIGFdLCBbMiwgYl0sIFszLCBjXV1cXG4gKiBAcGFyYW0ge0FycmF5PCo+fSBhXFxuICogQHBhcmFtIHtBcnJheTwqPn0gYlxcbiAqIEByZXR1cm4ge0FycmF5PEFycmF5PCo+Pn1cXG4gKi9cXG5jb25zdCB6aXAgPSAoYSwgYikgPT4gYS5tYXAoKGssIGkpID0+IFtrLCBiW2ldXSk7XFxuXFxuLyoqXFxuICogUmV0dXJuIGFycmF5W2ldIHdpdGggcG9zaXRpdmUgYW5kIG5lZ2F0aXZlIHdyYXBwaW5nXFxuICogQHBhcmFtIHtBcnJheTwqPn0gYVxcbiAqIEBwYXJhbSB7bnVtYmVyfSBpIFRoZSBwb3NpdGl2ZWx5L25lZ2F0aXZlbHkgd3JhcHBlZCBhcnJheSBpbmRleFxcbiAqIEByZXR1cm4geyp9IEFuIGVsZW1lbnQgZnJvbSB0aGUgYXJyYXlcXG4gKi9cXG5jb25zdCBhdCA9IChhLCBpKSA9PiBhW2kgPCAwID8gYS5sZW5ndGggLSAoTWF0aC5hYnMoaSArIDEpICUgYS5sZW5ndGgpIC0gMSA6IGkgJSBhLmxlbmd0aF07XFxuXFxuLyoqXFxuICogQ2hvcCBhbiBhcnJheSBpbnRvIGNodW5rcyBvZiBzaXplIG5cXG4gKiBAcGFyYW0ge0FycmF5PCo+fSBhXFxuICogQHBhcmFtIHtudW1iZXJ9IG4gVGhlIGNodW5rIHNpemVcXG4gKiBAcmV0dXJuIHtBcnJheTxBcnJheTwqPj59IEFuIGFycmF5IG9mIGFycmF5IGNodW5rc1xcbiAqL1xcbmNvbnN0IGNodW5rID0gKGEsIG4pID0+IHRpbWVzKGkgPT4gYS5zbGljZShpICogbiwgaSAqIG4gKyBuKSwgTWF0aC5jZWlsKGEubGVuZ3RoIC8gbikpO1xcblxcbi8qKlxcbiAqIFJhbmRvbWx5IHNodWZmbGUgYSBzaGFsbG93IGNvcHkgb2YgYW4gYXJyYXlcXG4gKiBAcGFyYW0ge0FycmF5PCo+fSBhXFxuICogQHJldHVybiB7QXJyYXk8Kj59IFRoZSBzaHVmZmxlZCBhcnJheVxcbiAqL1xcbmNvbnN0IHNodWZmbGUgPSBhID0+IGEuc2xpY2UoKS5zb3J0KCgpID0+IE1hdGgucmFuZG9tKCkgLSAwLjUpO1xcblxcbmlmICh0cnVlKSB7XFxuICBtb2R1bGUuZXhwb3J0cyA9IHtcXG4gICAgZmxvYXRFcXVhbHMsXFxuICAgIGNsYW1wLFxcbiAgICBmcmFjLFxcbiAgICBsZXJwLFxcbiAgICB1bmxlcnAsXFxuICAgIGJsZXJwLFxcbiAgICByZW1hcCxcXG4gICAgc21vb3Roc3RlcCxcXG4gICAgcmFkaWFucyxcXG4gICAgZGVncmVlcyxcXG4gICAgcmFuZG9tQmV0d2VlbixcXG4gICAgcmFuZG9tSW50QmV0d2VlbixcXG4gICAgY2x0UmFuZG9tLFxcbiAgICBjbHRSYW5kb21JbnQsXFxuICAgIHdlaWdodGVkUmFuZG9tLFxcbiAgICBsZXJwQXJyYXksXFxuICAgIGRvdCxcXG4gICAgZmFjdG9yaWFsLFxcbiAgICBwZXJtdXRhdGlvbixcXG4gICAgY29tYmluYXRpb24sXFxuICAgIHRpbWVzLFxcbiAgICByYW5nZSxcXG4gICAgemlwLFxcbiAgICBhdCxcXG4gICAgY2h1bmssXFxuICAgIHNodWZmbGUsXFxuICB9O1xcbn1cXG5cXG5cXG4vLyMgc291cmNlVVJMPXdlYnBhY2s6Ly9AYmFzZW1lbnR1bml2ZXJzZS9pbnB1dC1tYW5hZ2VyLy4vbm9kZV9tb2R1bGVzL0BiYXNlbWVudHVuaXZlcnNlL3V0aWxzL3V0aWxzLmpzP1wiKTtcblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvQGJhc2VtZW50dW5pdmVyc2UvdmVjL3ZlYy5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL0BiYXNlbWVudHVuaXZlcnNlL3ZlYy92ZWMuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKiovICgobW9kdWxlLCBfX3VudXNlZF93ZWJwYWNrX2V4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pID0+IHtcblxuZXZhbChcImNvbnN0IHsgdGltZXMsIGNodW5rLCBkb3QgfSA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIEBiYXNlbWVudHVuaXZlcnNlL3V0aWxzICovIFxcXCIuL25vZGVfbW9kdWxlcy9AYmFzZW1lbnR1bml2ZXJzZS91dGlscy91dGlscy5qc1xcXCIpO1xcblxcbi8qKlxcbiAqIEBvdmVydmlldyBBIGxpYnJhcnkgb2YgdXNlZnVsIGZ1bmN0aW9uc1xcbiAqIEBhdXRob3IgR29yZG9uIExhcnJpZ2FuXFxuICovXFxuXFxuLyoqXFxuICogQSAyZCB2ZWN0b3JcXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSB2ZWNcXG4gKiBAcHJvcGVydHkge251bWJlcn0geCBUaGUgeCBjb21wb25lbnQgb2YgdGhlIHZlY3RvclxcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSB5IFRoZSB5IGNvbXBvbmVudCBvZiB0aGUgdmVjdG9yXFxuICovXFxuXFxuLyoqXFxuICogQ3JlYXRlIGEgbmV3IHZlY3RvclxcbiAqIEBwYXJhbSB7bnVtYmVyfHZlY30gW3hdIFRoZSB4IGNvbXBvbmVudCBvZiB0aGUgdmVjdG9yLCBvciBhIHZlY3RvciB0byBjb3B5XFxuICogQHBhcmFtIHtudW1iZXJ9IFt5XSBUaGUgeSBjb21wb25lbnQgb2YgdGhlIHZlY3RvclxcbiAqIEByZXR1cm4ge3ZlY30gQSBuZXcgdmVjdG9yXFxuICogQGV4YW1wbGUgPGNhcHRpb24+VmFyaW91cyB3YXlzIHRvIGluaXRpYWxpc2UgYSB2ZWN0b3I8L2NhcHRpb24+XFxuICogbGV0IGEgPSB2ZWMoMywgMik7ICAvLyAoMywgMilcXG4gKiBsZXQgYiA9IHZlYyg0KTsgICAgIC8vICg0LCA0KVxcbiAqIGxldCBjID0gdmVjKGEpOyAgICAgLy8gKDMsIDIpXFxuICogbGV0IGQgPSB2ZWMoKTsgICAgICAvLyAoMCwgMClcXG4gKi9cXG5jb25zdCB2ZWMgPSAoeCwgeSkgPT4gKCF4ICYmICF5ID9cXG4gIHsgeDogMCwgeTogMCB9IDogKHR5cGVvZiB4ID09PSAnb2JqZWN0JyA/XFxuICAgIHsgeDogeC54IHx8IDAsIHk6IHgueSB8fCAwIH0gOiAoeSA9PT0gbnVsbCB8fCB5ID09PSB1bmRlZmluZWQgP1xcbiAgICAgIHsgeDogeCwgeTogeCB9IDogeyB4OiB4LCB5OiB5IH0pXFxuICApXFxuKTtcXG5cXG4vKipcXG4gKiBHZXQgdGhlIGNvbXBvbmVudHMgb2YgYSB2ZWN0b3IgYXMgYW4gYXJyYXlcXG4gKiBAcGFyYW0ge3ZlY30gYSBUaGUgdmVjdG9yIHRvIGdldCBjb21wb25lbnRzIGZyb21cXG4gKiBAcmV0dXJuIHtBcnJheTxudW1iZXI+fSBUaGUgdmVjdG9yIGNvbXBvbmVudHMgYXMgYW4gYXJyYXlcXG4gKi9cXG52ZWMuY29tcG9uZW50cyA9IGEgPT4gW2EueCwgYS55XTtcXG5cXG4vKipcXG4gKiBSZXR1cm4gYSB1bml0IHZlY3RvciAoMSwgMClcXG4gKiBAcmV0dXJuIHt2ZWN9IEEgdW5pdCB2ZWN0b3IgKDEsIDApXFxuICovXFxudmVjLnV4ID0gKCkgPT4gdmVjKDEsIDApO1xcblxcbi8qKlxcbiAqIFJldHVybiBhIHVuaXQgdmVjdG9yICgwLCAxKVxcbiAqIEByZXR1cm4ge3ZlY30gQSB1bml0IHZlY3RvciAoMCwgMSlcXG4gKi9cXG52ZWMudXkgPSAoKSA9PiB2ZWMoMCwgMSk7XFxuXFxuLyoqXFxuICogQWRkIHZlY3RvcnNcXG4gKiBAcGFyYW0ge3ZlY30gYSBWZWN0b3IgYVxcbiAqIEBwYXJhbSB7dmVjfSBiIFZlY3RvciBiXFxuICogQHJldHVybiB7dmVjfSBhICsgYlxcbiAqL1xcbnZlYy5hZGQgPSAoYSwgYikgPT4gKHsgeDogYS54ICsgYi54LCB5OiBhLnkgKyBiLnkgfSk7XFxuXFxuLyoqXFxuICogU2NhbGUgYSB2ZWN0b3JcXG4gKiBAcGFyYW0ge3ZlY30gYSBWZWN0b3IgYVxcbiAqIEBwYXJhbSB7bnVtYmVyfSBiIFNjYWxhciBiXFxuICogQHJldHVybiB7dmVjfSBhICogYlxcbiAqL1xcbnZlYy5tdWwgPSAoYSwgYikgPT4gKHsgeDogYS54ICogYiwgeTogYS55ICogYiB9KTtcXG5cXG4vKipcXG4gKiBTdWJ0cmFjdCB2ZWN0b3JzXFxuICogQHBhcmFtIHt2ZWN9IGEgVmVjdG9yIGFcXG4gKiBAcGFyYW0ge3ZlY30gYiBWZWN0b3IgYlxcbiAqIEByZXR1cm4ge3ZlY30gYSAtIGJcXG4gKi9cXG52ZWMuc3ViID0gKGEsIGIpID0+ICh7IHg6IGEueCAtIGIueCwgeTogYS55IC0gYi55IH0pO1xcblxcbi8qKlxcbiAqIEdldCB0aGUgbGVuZ3RoIG9mIGEgdmVjdG9yXFxuICogQHBhcmFtIHt2ZWN9IGEgVmVjdG9yIGFcXG4gKiBAcmV0dXJuIHtudW1iZXJ9IHxhfFxcbiAqL1xcbnZlYy5sZW4gPSBhID0+IE1hdGguc3FydChhLnggKiBhLnggKyBhLnkgKiBhLnkpO1xcblxcbi8qKlxcbiAqIEdldCB0aGUgbGVuZ3RoIG9mIGEgdmVjdG9yIHVzaW5nIHRheGljYWIgZ2VvbWV0cnlcXG4gKiBAcGFyYW0ge3ZlY30gYSBWZWN0b3IgYVxcbiAqIEByZXR1cm4ge251bWJlcn0gfGF8XFxuICovXFxudmVjLm1hbmhhdHRhbiA9IGEgPT4gTWF0aC5hYnMoYS54KSArIE1hdGguYWJzKGEueSk7XFxuXFxuLyoqXFxuICogTm9ybWFsaXNlIGEgdmVjdG9yXFxuICogQHBhcmFtIHt2ZWN9IGEgVGhlIHZlY3RvciB0byBub3JtYWxpc2VcXG4gKiBAcmV0dXJuIHt2ZWN9IF5hXFxuICovXFxudmVjLm5vciA9IGEgPT4ge1xcbiAgbGV0IGxlbiA9IHZlYy5sZW4oYSk7XFxuICByZXR1cm4gbGVuID8geyB4OiBhLnggLyBsZW4sIHk6IGEueSAvIGxlbiB9IDogdmVjKCk7XFxufTtcXG5cXG4vKipcXG4gKiBHZXQgYSBkb3QgcHJvZHVjdCBvZiB2ZWN0b3JzXFxuICogQHBhcmFtIHt2ZWN9IGEgVmVjdG9yIGFcXG4gKiBAcGFyYW0ge3ZlY30gYiBWZWN0b3IgYlxcbiAqIEByZXR1cm4ge251bWJlcn0gYSDiiJkgYlxcbiAqL1xcbnZlYy5kb3QgPSAoYSwgYikgPT4gYS54ICogYi54ICsgYS55ICogYi55O1xcblxcbi8qKlxcbiAqIFJvdGF0ZSBhIHZlY3RvciBieSByIHJhZGlhbnNcXG4gKiBAcGFyYW0ge3ZlY30gYSBUaGUgdmVjdG9yIHRvIHJvdGF0ZVxcbiAqIEBwYXJhbSB7bnVtYmVyfSByIFRoZSBhbmdsZSB0byByb3RhdGUgYnksIG1lYXN1cmVkIGluIHJhZGlhbnNcXG4gKiBAcmV0dXJuIHt2ZWN9IEEgcm90YXRlZCB2ZWN0b3JcXG4gKi9cXG52ZWMucm90ID0gKGEsIHIpID0+IHtcXG4gIGxldCBzID0gTWF0aC5zaW4ociksXFxuICAgIGMgPSBNYXRoLmNvcyhyKTtcXG4gIHJldHVybiB7IHg6IGMgKiBhLnggLSBzICogYS55LCB5OiBzICogYS54ICsgYyAqIGEueSB9O1xcbn1cXG5cXG4vKipcXG4gKiBDaGVjayBpZiB0d28gdmVjdG9ycyBhcmUgZXF1YWxcXG4gKiBAcGFyYW0ge3ZlY30gYSBWZWN0b3IgYVxcbiAqIEBwYXJhbSB7dmVjfSBiIFZlY3RvciBiXFxuICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiB2ZWN0b3JzIGEgYW5kIGIgYXJlIGVxdWFsLCBmYWxzZSBvdGhlcndpc2VcXG4gKi9cXG52ZWMuZXEgPSAoYSwgYikgPT4gYS54ID09PSBiLnggJiYgYS55ID09PSBiLnk7XFxuXFxuLyoqXFxuICogR2V0IHRoZSBhbmdsZSBvZiBhIHZlY3RvclxcbiAqIEBwYXJhbSB7dmVjfSBhIFZlY3RvciBhXFxuICogQHJldHVybiB7bnVtYmVyfSBUaGUgYW5nbGUgb2YgdmVjdG9yIGEgaW4gcmFkaWFuc1xcbiAqL1xcbnZlYy5yYWQgPSBhID0+IE1hdGguYXRhbjIoYS55LCBhLngpO1xcblxcbi8qKlxcbiAqIENvcHkgYSB2ZWN0b3JcXG4gKiBAcGFyYW0ge3ZlY30gYSBUaGUgdmVjdG9yIHRvIGNvcHlcXG4gKiBAcmV0dXJuIHt2ZWN9IEEgY29weSBvZiB2ZWN0b3IgYVxcbiAqL1xcbnZlYy5jcHkgPSBhID0+IHZlYyhhKTtcXG5cXG4vKipcXG4gKiBBIGZ1bmN0aW9uIHRvIGNhbGwgb24gZWFjaCBjb21wb25lbnQgb2YgYSB2ZWN0b3JcXG4gKiBAY2FsbGJhY2sgdmVjdG9yTWFwQ2FsbGJhY2tcXG4gKiBAcGFyYW0ge251bWJlcn0gdmFsdWUgVGhlIGNvbXBvbmVudCB2YWx1ZVxcbiAqIEBwYXJhbSB7J3gnIHwgJ3knfSBsYWJlbCBUaGUgY29tcG9uZW50IGxhYmVsICh4IG9yIHkpXFxuICogQHJldHVybiB7bnVtYmVyfSBUaGUgbWFwcGVkIGNvbXBvbmVudFxcbiAqL1xcblxcbi8qKlxcbiAqIENhbGwgYSBmdW5jdGlvbiBvbiBlYWNoIGNvbXBvbmVudCBvZiBhIHZlY3RvciBhbmQgYnVpbGQgYSBuZXcgdmVjdG9yIGZyb20gdGhlIHJlc3VsdHNcXG4gKiBAcGFyYW0ge3ZlY30gYSBWZWN0b3IgYVxcbiAqIEBwYXJhbSB7dmVjdG9yTWFwQ2FsbGJhY2t9IGYgVGhlIGZ1bmN0aW9uIHRvIGNhbGwgb24gZWFjaCBjb21wb25lbnQgb2YgdGhlIHZlY3RvclxcbiAqIEByZXR1cm4ge3ZlY30gVmVjdG9yIGEgbWFwcGVkIHRocm91Z2ggZlxcbiAqL1xcbnZlYy5tYXAgPSAoYSwgZikgPT4gKHsgeDogZihhLngsICd4JyksIHk6IGYoYS55LCAneScpIH0pO1xcblxcbi8qKlxcbiAqIENvbnZlcnQgYSB2ZWN0b3IgaW50byBhIHN0cmluZ1xcbiAqIEBwYXJhbSB7dmVjfSBhIFRoZSB2ZWN0b3IgdG8gY29udmVydFxcbiAqIEBwYXJhbSB7c3RyaW5nfSBbcz0nLCAnXSBUaGUgc2VwYXJhdG9yIHN0cmluZ1xcbiAqIEByZXR1cm4ge3N0cmluZ30gQSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIHZlY3RvclxcbiAqL1xcbnZlYy5zdHIgPSAoYSwgcyA9ICcsICcpID0+IGAke2EueH0ke3N9JHthLnl9YDtcXG5cXG4vKipcXG4gKiBBIG1hdHJpeFxcbiAqIEB0eXBlZGVmIHtPYmplY3R9IG1hdFxcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBtIFRoZSBudW1iZXIgb2Ygcm93cyBpbiB0aGUgbWF0cml4XFxuICogQHByb3BlcnR5IHtudW1iZXJ9IG4gVGhlIG51bWJlciBvZiBjb2x1bW5zIGluIHRoZSBtYXRyaXhcXG4gKiBAcHJvcGVydHkge0FycmF5PG51bWJlcj59IGVudHJpZXMgVGhlIG1hdHJpeCB2YWx1ZXNcXG4gKi9cXG5cXG4vKipcXG4gKiBDcmVhdGUgYSBuZXcgbWF0cml4XFxuICogQHBhcmFtIHtudW1iZXJ9IFttPTRdIFRoZSBudW1iZXIgb2Ygcm93c1xcbiAqIEBwYXJhbSB7bnVtYmVyfSBbbj00XSBUaGUgbnVtYmVyIG9mIGNvbHVtbnNcXG4gKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IFtlbnRyaWVzPVtdXSBNYXRyaXggdmFsdWVzIGluIHJlYWRpbmcgb3JkZXJcXG4gKiBAcmV0dXJuIHttYXR9IEEgbmV3IG1hdHJpeFxcbiAqL1xcbmNvbnN0IG1hdCA9IChtID0gNCwgbiA9IDQsIGVudHJpZXMgPSBbXSkgPT4gKHtcXG4gIG0sIG4sXFxuICBlbnRyaWVzOiBlbnRyaWVzLmNvbmNhdChBcnJheShtICogbikuZmlsbCgwKSkuc2xpY2UoMCwgbSAqIG4pXFxufSk7XFxuXFxuLyoqXFxuICogR2V0IGFuIGlkZW50aXR5IG1hdHJpeCBvZiBzaXplIG5cXG4gKiBAcGFyYW0ge251bWJlcn0gbiBUaGUgc2l6ZSBvZiB0aGUgbWF0cml4XFxuICogQHJldHVybiB7bWF0fSBBbiBpZGVudGl0eSBtYXRyaXhcXG4gKi9cXG5tYXQuaWRlbnRpdHkgPSBuID0+IG1hdChuLCBuLCBBcnJheShuICogbikuZmlsbCgwKS5tYXAoKHYsIGkpID0+ICsoTWF0aC5mbG9vcihpIC8gbikgPT09IGkgJSBuKSkpO1xcblxcbi8qKlxcbiAqIEdldCBhbiBlbnRyeSBmcm9tIGEgbWF0cml4XFxuICogQHBhcmFtIHttYXR9IGEgTWF0cml4IGFcXG4gKiBAcGFyYW0ge251bWJlcn0gaSBUaGUgcm93IG9mZnNldFxcbiAqIEBwYXJhbSB7bnVtYmVyfSBqIFRoZSBjb2x1bW4gb2Zmc2V0XFxuICogQHJldHVybiB7bnVtYmVyfSBUaGUgdmFsdWUgYXQgcG9zaXRpb24gKGksIGopIGluIG1hdHJpeCBhXFxuICovXFxubWF0LmdldCA9IChhLCBpLCBqKSA9PiBhLmVudHJpZXNbKGogLSAxKSArIChpIC0gMSkgKiBhLm5dO1xcblxcbi8qKlxcbiAqIFNldCBhbiBlbnRyeSBvZiBhIG1hdHJpeFxcbiAqIEBwYXJhbSB7bWF0fSBhIE1hdHJpeCBhXFxuICogQHBhcmFtIHtudW1iZXJ9IGkgVGhlIHJvdyBvZmZzZXRcXG4gKiBAcGFyYW0ge251bWJlcn0gaiBUaGUgY29sdW1uIG9mZnNldFxcbiAqIEBwYXJhbSB7bnVtYmVyfSB2IFRoZSB2YWx1ZSB0byBzZXQgaW4gbWF0cml4IGFcXG4gKi9cXG5tYXQuc2V0ID0gKGEsIGksIGosIHYpID0+IHsgYS5lbnRyaWVzWyhqIC0gMSkgKyAoaSAtIDEpICogYS5uXSA9IHY7IH07XFxuXFxuLyoqXFxuICogR2V0IGEgcm93IGZyb20gYSBtYXRyaXggYXMgYW4gYXJyYXlcXG4gKiBAcGFyYW0ge21hdH0gYSBNYXRyaXggYVxcbiAqIEBwYXJhbSB7bnVtYmVyfSBtIFRoZSByb3cgb2Zmc2V0XFxuICogQHJldHVybiB7QXJyYXk8bnVtYmVyPn0gUm93IG0gZnJvbSBtYXRyaXggYVxcbiAqL1xcbm1hdC5yb3cgPSAoYSwgbSkgPT4ge1xcbiAgY29uc3QgcyA9IChtIC0gMSkgKiBhLm47XFxuICByZXR1cm4gYS5lbnRyaWVzLnNsaWNlKHMsIHMgKyBhLm4pO1xcbn07XFxuXFxuLyoqXFxuICogR2V0IGEgY29sdW1uIGZyb20gYSBtYXRyaXggYXMgYW4gYXJyYXlcXG4gKiBAcGFyYW0ge21hdH0gYSBNYXRyaXggYVxcbiAqIEBwYXJhbSB7bnVtYmVyfSBuIFRoZSBjb2x1bW4gb2Zmc2V0XFxuICogQHJldHVybiB7QXJyYXk8bnVtYmVyPn0gQ29sdW1uIG4gZnJvbSBtYXRyaXggYVxcbiAqL1xcbm1hdC5jb2wgPSAoYSwgbikgPT4gdGltZXMoaSA9PiBtYXQuZ2V0KGEsIChpICsgMSksIG4pLCBhLm0pO1xcblxcbi8qKlxcbiAqIEFkZCBtYXRyaWNlc1xcbiAqIEBwYXJhbSB7bWF0fSBhIE1hdHJpeCBhXFxuICogQHBhcmFtIHttYXR9IGIgTWF0cml4IGJcXG4gKiBAcmV0dXJuIHttYXR9IGEgKyBiXFxuICovXFxubWF0LmFkZCA9IChhLCBiKSA9PiBhLm0gPT09IGIubSAmJiBhLm4gPT09IGIubiAmJiBtYXQubWFwKGEsICh2LCBpKSA9PiB2ICsgYi5lbnRyaWVzW2ldKTtcXG5cXG4vKipcXG4gKiBTdWJ0cmFjdCBtYXRyaWNlc1xcbiAqIEBwYXJhbSB7bWF0fSBhIE1hdHJpeCBhXFxuICogQHBhcmFtIHttYXR9IGIgTWF0cml4IGJcXG4gKiBAcmV0dXJuIHttYXR9IGEgLSBiXFxuICovXFxubWF0LnN1YiA9IChhLCBiKSA9PiBhLm0gPT09IGIubSAmJiBhLm4gPT09IGIubiAmJiBtYXQubWFwKGEsICh2LCBpKSA9PiB2IC0gYi5lbnRyaWVzW2ldKTtcXG5cXG4vKipcXG4gKiBNdWx0aXBseSBtYXRyaWNlc1xcbiAqIEBwYXJhbSB7bWF0fSBhIE1hdHJpeCBhXFxuICogQHBhcmFtIHttYXR9IGIgTWF0cml4IGJcXG4gKiBAcmV0dXJuIHttYXR8Ym9vbGVhbn0gYWIgb3IgZmFsc2UgaWYgdGhlIG1hdHJpY2VzIGNhbm5vdCBiZSBtdWx0aXBsaWVkXFxuICovXFxubWF0Lm11bCA9IChhLCBiKSA9PiB7XFxuICBpZiAoYS5uICE9PSBiLm0pIHsgcmV0dXJuIGZhbHNlOyB9XFxuICBjb25zdCByZXN1bHQgPSBtYXQoYS5tLCBiLm4pO1xcbiAgZm9yIChsZXQgaSA9IDE7IGkgPD0gYS5tOyBpKyspIHtcXG4gICAgZm9yIChsZXQgaiA9IDE7IGogPD0gYi5uOyBqKyspIHtcXG4gICAgICBtYXQuc2V0KHJlc3VsdCwgaSwgaiwgZG90KG1hdC5yb3coYSwgaSksIG1hdC5jb2woYiwgaikpKTtcXG4gICAgfVxcbiAgfVxcbiAgcmV0dXJuIHJlc3VsdDtcXG59O1xcblxcbi8qKlxcbiAqIFNjYWxlIGEgbWF0cml4XFxuICogQHBhcmFtIHttYXR9IGEgTWF0cml4IGFcXG4gKiBAcGFyYW0ge251bWJlcn0gYiBTY2FsYXIgYlxcbiAqIEByZXR1cm4ge21hdH0gYSAqIGJcXG4gKi9cXG5tYXQuc2NhbGUgPSAoYSwgYikgPT4gbWF0Lm1hcChhLCB2ID0+IHYgKiBiKTtcXG5cXG4vKipcXG4gKiBUcmFuc3Bvc2UgYSBtYXRyaXhcXG4gKiBAcGFyYW0ge21hdH0gYSBUaGUgbWF0cml4IHRvIHRyYW5zcG9zZVxcbiAqIEByZXR1cm4ge21hdH0gQSB0cmFuc3Bvc2VkIG1hdHJpeFxcbiAqL1xcbm1hdC50cmFucyA9IGEgPT4gbWF0KGEubiwgYS5tLCB0aW1lcyhpID0+IG1hdC5jb2woYSwgKGkgKyAxKSksIGEubikuZmxhdCgpKTtcXG5cXG4vKipcXG4gKiBHZXQgdGhlIG1pbm9yIG9mIGEgbWF0cml4XFxuICogQHBhcmFtIHttYXR9IGEgTWF0cml4IGFcXG4gKiBAcGFyYW0ge251bWJlcn0gaSBUaGUgcm93IG9mZnNldFxcbiAqIEBwYXJhbSB7bnVtYmVyfSBqIFRoZSBjb2x1bW4gb2Zmc2V0XFxuICogQHJldHVybiB7bWF0fGJvb2xlYW59IFRoZSAoaSwgaikgbWlub3Igb2YgbWF0cml4IGEgb3IgZmFsc2UgaWYgdGhlIG1hdHJpeCBpcyBub3Qgc3F1YXJlXFxuICovXFxubWF0Lm1pbm9yID0gKGEsIGksIGopID0+IHtcXG4gIGlmIChhLm0gIT09IGEubikgeyByZXR1cm4gZmFsc2U7IH1cXG4gIGNvbnN0IGVudHJpZXMgPSBbXTtcXG4gIGZvciAobGV0IGlpID0gMTsgaWkgPD0gYS5tOyBpaSsrKSB7XFxuICAgIGlmIChpaSA9PT0gaSkgeyBjb250aW51ZTsgfVxcbiAgICBmb3IgKGxldCBqaiA9IDE7IGpqIDw9IGEubjsgamorKykge1xcbiAgICAgIGlmIChqaiA9PT0gaikgeyBjb250aW51ZTsgfVxcbiAgICAgIGVudHJpZXMucHVzaChtYXQuZ2V0KGEsIGlpLCBqaikpO1xcbiAgICB9XFxuICB9XFxuICByZXR1cm4gbWF0KGEubSAtIDEsIGEubiAtIDEsIGVudHJpZXMpO1xcbn07XFxuXFxuLyoqXFxuICogR2V0IHRoZSBkZXRlcm1pbmFudCBvZiBhIG1hdHJpeFxcbiAqIEBwYXJhbSB7bWF0fSBhIE1hdHJpeCBhXFxuICogQHJldHVybiB7bnVtYmVyfGJvb2xlYW59IHxhfCBvciBmYWxzZSBpZiB0aGUgbWF0cml4IGlzIG5vdCBzcXVhcmVcXG4gKi9cXG5tYXQuZGV0ID0gYSA9PiB7XFxuICBpZiAoYS5tICE9PSBhLm4pIHsgcmV0dXJuIGZhbHNlOyB9XFxuICBpZiAoYS5tID09PSAxKSB7XFxuICAgIHJldHVybiBhLmVudHJpZXNbMF07XFxuICB9XFxuICBpZiAoYS5tID09PSAyKSB7XFxuICAgIHJldHVybiBhLmVudHJpZXNbMF0gKiBhLmVudHJpZXNbM10gLSBhLmVudHJpZXNbMV0gKiBhLmVudHJpZXNbMl07XFxuICB9XFxuICBsZXQgdG90YWwgPSAwLCBzaWduID0gMTtcXG4gIGZvciAobGV0IGogPSAxOyBqIDw9IGEubjsgaisrKSB7XFxuICAgIHRvdGFsICs9IHNpZ24gKiBhLmVudHJpZXNbaiAtIDFdICogbWF0LmRldChtYXQubWlub3IoYSwgMSwgaikpO1xcbiAgICBzaWduICo9IC0xO1xcbiAgfVxcbiAgcmV0dXJuIHRvdGFsO1xcbn07XFxuXFxuLyoqXFxuICogTm9ybWFsaXNlIGEgbWF0cml4XFxuICogQHBhcmFtIHttYXR9IGEgVGhlIG1hdHJpeCB0byBub3JtYWxpc2VcXG4gKiBAcmV0dXJuIHttYXR8Ym9vbGVhbn0gXmEgb3IgZmFsc2UgaWYgdGhlIG1hdHJpeCBpcyBub3Qgc3F1YXJlXFxuICovXFxubWF0Lm5vciA9IGEgPT4ge1xcbiAgaWYgKGEubSAhPT0gYS5uKSB7IHJldHVybiBmYWxzZTsgfVxcbiAgY29uc3QgZCA9IG1hdC5kZXQoYSk7XFxuICByZXR1cm4gbWF0Lm1hcChhLCBpID0+IGkgKiBkKTtcXG59O1xcblxcbi8qKlxcbiAqIEdldCB0aGUgYWRqdWdhdGUgb2YgYSBtYXRyaXhcXG4gKiBAcGFyYW0ge21hdH0gYSBUaGUgbWF0cml4IGZyb20gd2hpY2ggdG8gZ2V0IHRoZSBhZGp1Z2F0ZVxcbiAqIEByZXR1cm4ge21hdH0gVGhlIGFkanVnYXRlIG9mIGFcXG4gKi9cXG5tYXQuYWRqID0gYSA9PiB7XFxuICBjb25zdCBtaW5vcnMgPSBtYXQoYS5tLCBhLm4pO1xcbiAgZm9yIChsZXQgaSA9IDE7IGkgPD0gYS5tOyBpKyspIHtcXG4gICAgZm9yIChsZXQgaiA9IDE7IGogPD0gYS5uOyBqKyspIHtcXG4gICAgICBtYXQuc2V0KG1pbm9ycywgaSwgaiwgbWF0LmRldChtYXQubWlub3IoYSwgaSwgaikpKTtcXG4gICAgfVxcbiAgfVxcbiAgY29uc3QgY29mYWN0b3JzID0gbWF0Lm1hcChtaW5vcnMsICh2LCBpKSA9PiB2ICogKGkgJSAyID8gLTEgOiAxKSk7XFxuICByZXR1cm4gbWF0LnRyYW5zKGNvZmFjdG9ycyk7XFxufTtcXG5cXG4vKipcXG4gKiBHZXQgdGhlIGludmVyc2Ugb2YgYSBtYXRyaXhcXG4gKiBAcGFyYW0ge21hdH0gYSBUaGUgbWF0cml4IHRvIGludmVydFxcbiAqIEByZXR1cm4ge21hdHxib29sZWFufSBhXi0xIG9yIGZhbHNlIGlmIHRoZSBtYXRyaXggaGFzIG5vIGludmVyc2VcXG4gKi9cXG5tYXQuaW52ID0gYSA9PiB7XFxuICBpZiAoYS5tICE9PSBhLm4pIHsgcmV0dXJuIGZhbHNlOyB9XFxuICBjb25zdCBkID0gbWF0LmRldChhKTtcXG4gIGlmIChkID09PSAwKSB7IHJldHVybiBmYWxzZTsgfVxcbiAgcmV0dXJuIG1hdC5zY2FsZShtYXQuYWRqKGEpLCAxIC8gZCk7XFxufTtcXG5cXG4vKipcXG4gKiBDaGVjayBpZiB0d28gbWF0cmljZXMgYXJlIGVxdWFsXFxuICogQHBhcmFtIHttYXR9IGEgTWF0cml4IGFcXG4gKiBAcGFyYW0ge21hdH0gYiBNYXRyaXggYlxcbiAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgbWF0cmljZXMgYSBhbmQgYiBhcmUgaWRlbnRpY2FsLCBmYWxzZSBvdGhlcndpc2VcXG4gKi9cXG5tYXQuZXEgPSAoYSwgYikgPT4gYS5tID09PSBiLm0gJiYgYS5uID09PSBiLm4gJiYgbWF0LnN0cihhKSA9PT0gbWF0LnN0cihiKTtcXG5cXG4vKipcXG4gKiBDb3B5IGEgbWF0cml4XFxuICogQHBhcmFtIHttYXR9IGEgVGhlIG1hdHJpeCB0byBjb3B5XFxuICogQHJldHVybiB7bWF0fSBBIGNvcHkgb2YgbWF0cml4IGFcXG4gKi9cXG5tYXQuY3B5ID0gYSA9PiBtYXQoYS5tLCBhLm4sIFsuLi5hLmVudHJpZXNdKTtcXG5cXG4vKipcXG4gKiBBIGZ1bmN0aW9uIHRvIGNhbGwgb24gZWFjaCBlbnRyeSBvZiBhIG1hdHJpeFxcbiAqIEBjYWxsYmFjayBtYXRyaXhNYXBDYWxsYmFja1xcbiAqIEBwYXJhbSB7bnVtYmVyfSB2YWx1ZSBUaGUgZW50cnkgdmFsdWVcXG4gKiBAcGFyYW0ge251bWJlcn0gaW5kZXggVGhlIGVudHJ5IGluZGV4XFxuICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSBlbnRyaWVzIFRoZSBhcnJheSBvZiBtYXRyaXggZW50cmllc1xcbiAqIEByZXR1cm4ge251bWJlcn0gVGhlIG1hcHBlZCBlbnRyeVxcbiAqL1xcblxcbi8qKlxcbiAqIENhbGwgYSBmdW5jdGlvbiBvbiBlYWNoIGVudHJ5IG9mIGEgbWF0cml4IGFuZCBidWlsZCBhIG5ldyBtYXRyaXggZnJvbSB0aGUgcmVzdWx0c1xcbiAqIEBwYXJhbSB7bWF0fSBhIE1hdHJpeCBhXFxuICogQHBhcmFtIHttYXRyaXhNYXBDYWxsYmFja30gZiBUaGUgZnVuY3Rpb24gdG8gY2FsbCBvbiBlYWNoIGVudHJ5IG9mIHRoZSBtYXRyaXhcXG4gKiBAcmV0dXJuIHttYXR9IE1hdHJpeCBhIG1hcHBlZCB0aHJvdWdoIGZcXG4gKi9cXG5tYXQubWFwID0gKGEsIGYpID0+IG1hdChhLm0sIGEubiwgYS5lbnRyaWVzLm1hcChmKSk7XFxuXFxuLyoqXFxuICogQ29udmVydCBhIG1hdHJpeCBpbnRvIGEgc3RyaW5nXFxuICogQHBhcmFtIHttYXR9IGEgVGhlIG1hdHJpeCB0byBjb252ZXJ0XFxuICogQHBhcmFtIHtzdHJpbmd9IFttcz0nLCAnXSBUaGUgc2VwYXJhdG9yIHN0cmluZyBmb3IgY29sdW1uc1xcbiAqIEBwYXJhbSB7c3RyaW5nfSBbbnM9J1xcXFxuJ10gVGhlIHNlcGFyYXRvciBzdHJpbmcgZm9yIHJvd3NcXG4gKiBAcmV0dXJuIHtzdHJpbmd9IEEgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBtYXRyaXhcXG4gKi9cXG5tYXQuc3RyID0gKGEsIG1zID0gJywgJywgbnMgPSAnXFxcXG4nKSA9PiBjaHVuayhhLmVudHJpZXMsIGEubikubWFwKHIgPT4gci5qb2luKG1zKSkuam9pbihucyk7XFxuXFxuaWYgKHRydWUpIHtcXG4gIG1vZHVsZS5leHBvcnRzID0geyB2ZWMsIG1hdCB9O1xcbn1cXG5cXG5cXG4vLyMgc291cmNlVVJMPXdlYnBhY2s6Ly9AYmFzZW1lbnR1bml2ZXJzZS9pbnB1dC1tYW5hZ2VyLy4vbm9kZV9tb2R1bGVzL0BiYXNlbWVudHVuaXZlcnNlL3ZlYy92ZWMuanM/XCIpO1xuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL2luZGV4LnRzXCI6XG4vKiEqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9pbmRleC50cyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqL1xuLyoqKi8gKChfX3VudXNlZF93ZWJwYWNrX21vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykgPT4ge1xuXG5cInVzZSBzdHJpY3RcIjtcbmV2YWwoXCJcXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXFxcIl9fZXNNb2R1bGVcXFwiLCAoeyB2YWx1ZTogdHJ1ZSB9KSk7XFxuY29uc3QgdmVjXzEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBAYmFzZW1lbnR1bml2ZXJzZS92ZWMgKi8gXFxcIi4vbm9kZV9tb2R1bGVzL0BiYXNlbWVudHVuaXZlcnNlL3ZlYy92ZWMuanNcXFwiKTtcXG5jbGFzcyBJbnB1dE1hbmFnZXIge1xcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XFxuICAgICAgICB0aGlzLmtleWJvYXJkU3RhdGUgPSB7fTtcXG4gICAgICAgIHRoaXMucHJldmlvdXNLZXlib2FyZFN0YXRlID0ge307XFxuICAgICAgICB0aGlzLm1vdXNlU3RhdGUgPSB7IGJ1dHRvbjogZmFsc2UsIHBvc2l0aW9uOiAoMCwgdmVjXzEudmVjKSgpLCB3aGVlbDogMCB9O1xcbiAgICAgICAgdGhpcy5wcmV2aW91c01vdXNlU3RhdGUgPSB7IGJ1dHRvbjogZmFsc2UsIHBvc2l0aW9uOiAoMCwgdmVjXzEudmVjKSgpLCB3aGVlbDogMCB9O1xcbiAgICAgICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgSW5wdXRNYW5hZ2VyLmRlZmF1bHRPcHRpb25zLCBvcHRpb25zICE9PSBudWxsICYmIG9wdGlvbnMgIT09IHZvaWQgMCA/IG9wdGlvbnMgOiB7fSk7XFxuICAgICAgICAvLyBTZXQgdXAgZXZlbnQgaGFuZGxlcnNcXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMubW91c2UpIHtcXG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgKCkgPT4ge1xcbiAgICAgICAgICAgICAgICB0aGlzLm1vdXNlU3RhdGUuYnV0dG9uID0gdHJ1ZTtcXG4gICAgICAgICAgICB9KTtcXG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsICgpID0+IHtcXG4gICAgICAgICAgICAgICAgdGhpcy5tb3VzZVN0YXRlLmJ1dHRvbiA9IGZhbHNlO1xcbiAgICAgICAgICAgIH0pO1xcbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgKCkgPT4ge1xcbiAgICAgICAgICAgICAgICB0aGlzLm1vdXNlU3RhdGUuYnV0dG9uID0gdHJ1ZTtcXG4gICAgICAgICAgICB9KTtcXG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCAoKSA9PiB7XFxuICAgICAgICAgICAgICAgIHRoaXMubW91c2VTdGF0ZS5idXR0b24gPSBmYWxzZTtcXG4gICAgICAgICAgICB9KTtcXG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgZSA9PiB7XFxuICAgICAgICAgICAgICAgIHRoaXMubW91c2VTdGF0ZS5wb3NpdGlvbi54ID0gZS5vZmZzZXRYO1xcbiAgICAgICAgICAgICAgICB0aGlzLm1vdXNlU3RhdGUucG9zaXRpb24ueSA9IGUub2Zmc2V0WTtcXG4gICAgICAgICAgICB9KTtcXG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLm1vdXNlV2hlZWwpIHtcXG4gICAgICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3doZWVsJywgZSA9PiB7XFxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdXNlU3RhdGUud2hlZWwgPSBlLmRlbHRhWSA+IDAgPyAxIDogLTE7XFxuICAgICAgICAgICAgICAgIH0pO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMua2V5Ym9hcmQpIHtcXG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGUgPT4ge1xcbiAgICAgICAgICAgICAgICB0aGlzLmtleWJvYXJkU3RhdGVbZS5jb2RlXSA9IHRydWU7XFxuICAgICAgICAgICAgfSk7XFxuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZSA9PiB7XFxuICAgICAgICAgICAgICAgIHRoaXMua2V5Ym9hcmRTdGF0ZVtlLmNvZGVdID0gZmFsc2U7XFxuICAgICAgICAgICAgfSk7XFxuICAgICAgICB9XFxuICAgIH1cXG4gICAgLyoqXFxuICAgICAqIEluaXRpYWxpc2UgdGhlIGlucHV0IG1hbmFnZXIgZm9yIG1hbmFnaW5nIG1vdXNlIGFuZCBrZXlib2FyZCBpbnB1dFxcbiAgICAgKi9cXG4gICAgc3RhdGljIGluaXRpYWxpc2Uob3B0aW9ucykge1xcbiAgICAgICAgaWYgKElucHV0TWFuYWdlci5pbnN0YW5jZSAhPT0gdW5kZWZpbmVkKSB7XFxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnB1dCBtYW5hZ2VyIGFscmVhZHkgaW5pdGlhbGlzZWQnKTtcXG4gICAgICAgIH1cXG4gICAgICAgIElucHV0TWFuYWdlci5pbnN0YW5jZSA9IG5ldyBJbnB1dE1hbmFnZXIob3B0aW9ucyk7XFxuICAgIH1cXG4gICAgc3RhdGljIGdldEluc3RhbmNlKCkge1xcbiAgICAgICAgaWYgKElucHV0TWFuYWdlci5pbnN0YW5jZSA9PT0gdW5kZWZpbmVkKSB7XFxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnB1dCBtYW5hZ2VyIG5vdCBwcm9wZXJseSBpbml0aWFsaXNlZCcpO1xcbiAgICAgICAgfVxcbiAgICAgICAgcmV0dXJuIElucHV0TWFuYWdlci5pbnN0YW5jZTtcXG4gICAgfVxcbiAgICAvKipcXG4gICAgICogVXBkYXRlIHRoZSBzdGF0ZSBvZiB0aGUgaW5wdXQgZGV2aWNlc1xcbiAgICAgKi9cXG4gICAgc3RhdGljIHVwZGF0ZSgpIHtcXG4gICAgICAgIGNvbnN0IGluc3RhbmNlID0gSW5wdXRNYW5hZ2VyLmdldEluc3RhbmNlKCk7XFxuICAgICAgICBpbnN0YW5jZS5wcmV2aW91c0tleWJvYXJkU3RhdGUgPSBPYmplY3QuYXNzaWduKHt9LCBpbnN0YW5jZS5rZXlib2FyZFN0YXRlKTtcXG4gICAgICAgIGluc3RhbmNlLnByZXZpb3VzTW91c2VTdGF0ZSA9IHtcXG4gICAgICAgICAgICAuLi5pbnN0YW5jZS5tb3VzZVN0YXRlLFxcbiAgICAgICAgICAgIHBvc2l0aW9uOiB2ZWNfMS52ZWMuY3B5KGluc3RhbmNlLm1vdXNlU3RhdGUucG9zaXRpb24pLFxcbiAgICAgICAgfTtcXG4gICAgICAgIGluc3RhbmNlLm1vdXNlU3RhdGUud2hlZWwgPSAwO1xcbiAgICB9XFxuICAgIC8qKlxcbiAgICAgKiBDaGVjayBpZiBhIGtleSBpcyBjdXJyZW50bHkgcHJlc3NlZCBkb3duXFxuICAgICAqL1xcbiAgICBzdGF0aWMga2V5RG93bihjb2RlKSB7XFxuICAgICAgICBjb25zdCBpbnN0YW5jZSA9IElucHV0TWFuYWdlci5nZXRJbnN0YW5jZSgpO1xcbiAgICAgICAgLy8gQ2hlY2sgaWYgYW55IGtleSBpcyBkb3duXFxuICAgICAgICBpZiAoIWNvZGUpIHtcXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGsgaW4gaW5zdGFuY2Uua2V5Ym9hcmRTdGF0ZSkge1xcbiAgICAgICAgICAgICAgICBpZiAoaW5zdGFuY2Uua2V5Ym9hcmRTdGF0ZVtrXSkge1xcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xcbiAgICAgICAgfVxcbiAgICAgICAgcmV0dXJuICEhaW5zdGFuY2Uua2V5Ym9hcmRTdGF0ZVtjb2RlXTtcXG4gICAgfVxcbiAgICAvKipcXG4gICAgICogQ2hlY2sgaWYgYSBrZXkgaGFzIGJlZW4gcHJlc3NlZCBzaW5jZSB0aGUgbGFzdCBmcmFtZVxcbiAgICAgKi9cXG4gICAgc3RhdGljIGtleVByZXNzZWQoY29kZSkge1xcbiAgICAgICAgY29uc3QgaW5zdGFuY2UgPSBJbnB1dE1hbmFnZXIuZ2V0SW5zdGFuY2UoKTtcXG4gICAgICAgIC8vIENoZWNrIGlmIGFueSBrZXkgd2FzIHByZXNzZWRcXG4gICAgICAgIGlmICghY29kZSkge1xcbiAgICAgICAgICAgIGZvciAoY29uc3QgayBpbiBpbnN0YW5jZS5rZXlib2FyZFN0YXRlKSB7XFxuICAgICAgICAgICAgICAgIGlmIChpbnN0YW5jZS5rZXlib2FyZFN0YXRlW2tdICYmXFxuICAgICAgICAgICAgICAgICAgICAoIShrIGluIGluc3RhbmNlLnByZXZpb3VzS2V5Ym9hcmRTdGF0ZSkgfHxcXG4gICAgICAgICAgICAgICAgICAgICAgICAhaW5zdGFuY2UucHJldmlvdXNLZXlib2FyZFN0YXRlW2tdKSkge1xcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xcbiAgICAgICAgfVxcbiAgICAgICAgcmV0dXJuICEhaW5zdGFuY2Uua2V5Ym9hcmRTdGF0ZVtjb2RlXSAmJiAhaW5zdGFuY2UucHJldmlvdXNLZXlib2FyZFN0YXRlW2NvZGVdO1xcbiAgICB9XFxuICAgIC8qKlxcbiAgICAgKiBDaGVjayBpZiBhIGtleSBoYXMgYmVlbiByZWxlYXNlZCBzaW5jZSB0aGUgbGFzdCBmcmFtZVxcbiAgICAgKi9cXG4gICAgc3RhdGljIGtleVJlbGVhc2VkKGNvZGUpIHtcXG4gICAgICAgIGNvbnN0IGluc3RhbmNlID0gSW5wdXRNYW5hZ2VyLmdldEluc3RhbmNlKCk7XFxuICAgICAgICAvLyBDaGVjayBpZiBhbnkga2V5IHdhcyByZWxlYXNlZFxcbiAgICAgICAgaWYgKCFjb2RlKSB7XFxuICAgICAgICAgICAgZm9yIChjb25zdCBrIGluIGluc3RhbmNlLmtleWJvYXJkU3RhdGUpIHtcXG4gICAgICAgICAgICAgICAgaWYgKCFpbnN0YW5jZS5rZXlib2FyZFN0YXRlW2tdICYmXFxuICAgICAgICAgICAgICAgICAgICAhIWluc3RhbmNlLnByZXZpb3VzS2V5Ym9hcmRTdGF0ZVtrXSkge1xcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xcbiAgICAgICAgfVxcbiAgICAgICAgcmV0dXJuICFpbnN0YW5jZS5rZXlib2FyZFN0YXRlW2NvZGVdICYmICEhaW5zdGFuY2UucHJldmlvdXNLZXlib2FyZFN0YXRlW2NvZGVdO1xcbiAgICB9XFxuICAgIC8qKlxcbiAgICAgKiBDaGVjayBpZiBhIG1vdXNlIGJ1dHRvbiBpcyBjdXJyZW50bHkgcHJlc3NlZCBkb3duXFxuICAgICAqL1xcbiAgICBzdGF0aWMgbW91c2VEb3duKCkge1xcbiAgICAgICAgY29uc3QgaW5zdGFuY2UgPSBJbnB1dE1hbmFnZXIuZ2V0SW5zdGFuY2UoKTtcXG4gICAgICAgIHJldHVybiAhIWluc3RhbmNlLm1vdXNlU3RhdGUuYnV0dG9uO1xcbiAgICB9XFxuICAgIC8qKlxcbiAgICAgKiBDaGVjayBpZiBhIG1vdXNlIGJ1dHRvbiBoYXMgYmVlbiBwcmVzc2VkIHNpbmNlIHRoZSBsYXN0IGZyYW1lXFxuICAgICAqL1xcbiAgICBzdGF0aWMgbW91c2VQcmVzc2VkKCkge1xcbiAgICAgICAgY29uc3QgaW5zdGFuY2UgPSBJbnB1dE1hbmFnZXIuZ2V0SW5zdGFuY2UoKTtcXG4gICAgICAgIHJldHVybiAhIWluc3RhbmNlLm1vdXNlU3RhdGUuYnV0dG9uICYmICFpbnN0YW5jZS5wcmV2aW91c01vdXNlU3RhdGUuYnV0dG9uO1xcbiAgICB9XFxuICAgIC8qKlxcbiAgICAgKiBDaGVjayBpZiBhIG1vdXNlIGJ1dHRvbiBoYXMgYmVlbiByZWxlYXNlZCBzaW5jZSB0aGUgbGFzdCBmcmFtZVxcbiAgICAgKi9cXG4gICAgc3RhdGljIG1vdXNlUmVsZWFzZWQoKSB7XFxuICAgICAgICBjb25zdCBpbnN0YW5jZSA9IElucHV0TWFuYWdlci5nZXRJbnN0YW5jZSgpO1xcbiAgICAgICAgcmV0dXJuICFpbnN0YW5jZS5tb3VzZVN0YXRlLmJ1dHRvbiAmJiAhIWluc3RhbmNlLnByZXZpb3VzTW91c2VTdGF0ZS5idXR0b247XFxuICAgIH1cXG4gICAgLyoqXFxuICAgICAqIENoZWNrIGlmIHRoZSBtb3VzZXdoZWVsIGlzIHNjcm9sbGluZyB1cFxcbiAgICAgKi9cXG4gICAgc3RhdGljIG1vdXNlV2hlZWxVcCgpIHtcXG4gICAgICAgIGNvbnN0IGluc3RhbmNlID0gSW5wdXRNYW5hZ2VyLmdldEluc3RhbmNlKCk7XFxuICAgICAgICByZXR1cm4gaW5zdGFuY2UubW91c2VTdGF0ZS53aGVlbCA+IDA7XFxuICAgIH1cXG4gICAgLyoqXFxuICAgICAqIENoZWNrIGlmIHRoZSBtb3VzZXdoZWVsIGlzIHNjcm9sbGluZyBkb3duXFxuICAgICAqL1xcbiAgICBzdGF0aWMgbW91c2VXaGVlbERvd24oKSB7XFxuICAgICAgICBjb25zdCBpbnN0YW5jZSA9IElucHV0TWFuYWdlci5nZXRJbnN0YW5jZSgpO1xcbiAgICAgICAgcmV0dXJuIGluc3RhbmNlLm1vdXNlU3RhdGUud2hlZWwgPCAwO1xcbiAgICB9XFxuICAgIC8qKlxcbiAgICAgKiBHZXQgdGhlIGN1cnJlbnQgbW91c2UgcG9zaXRpb24gaW4gc2NyZWVuLXNwYWNlXFxuICAgICAqL1xcbiAgICBzdGF0aWMgZ2V0IG1vdXNlUG9zaXRpb24oKSB7XFxuICAgICAgICBjb25zdCBpbnN0YW5jZSA9IElucHV0TWFuYWdlci5nZXRJbnN0YW5jZSgpO1xcbiAgICAgICAgcmV0dXJuIGluc3RhbmNlLm1vdXNlU3RhdGUucG9zaXRpb247XFxuICAgIH1cXG59XFxuZXhwb3J0c1tcXFwiZGVmYXVsdFxcXCJdID0gSW5wdXRNYW5hZ2VyO1xcbklucHV0TWFuYWdlci5kZWZhdWx0T3B0aW9ucyA9IHtcXG4gICAgbW91c2U6IHRydWUsXFxuICAgIG1vdXNlV2hlZWw6IHRydWUsXFxuICAgIGtleWJvYXJkOiB0cnVlLFxcbn07XFxuXFxuXFxuLy8jIHNvdXJjZVVSTD13ZWJwYWNrOi8vQGJhc2VtZW50dW5pdmVyc2UvaW5wdXQtbWFuYWdlci8uL2luZGV4LnRzP1wiKTtcblxuLyoqKi8gfSlcblxuLyoqKioqKi8gXHR9KTtcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqLyBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0dmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuLyoqKioqKi8gXHRcbi8qKioqKiovIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbi8qKioqKiovIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuLyoqKioqKi8gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuLyoqKioqKi8gXHRcdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuLyoqKioqKi8gXHRcdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuLyoqKioqKi8gXHRcdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuLyoqKioqKi8gXHRcdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuLyoqKioqKi8gXHRcdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuLyoqKioqKi8gXHRcdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcbi8qKioqKiovIFx0XHRcdGV4cG9ydHM6IHt9XG4vKioqKioqLyBcdFx0fTtcbi8qKioqKiovIFx0XG4vKioqKioqLyBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4vKioqKioqLyBcdFx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4vKioqKioqLyBcdFxuLyoqKioqKi8gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4vKioqKioqLyBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuLyoqKioqKi8gXHR9XG4vKioqKioqLyBcdFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKiovIFx0XG4vKioqKioqLyBcdC8vIHN0YXJ0dXBcbi8qKioqKiovIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vKioqKioqLyBcdC8vIFRoaXMgZW50cnkgbW9kdWxlIGNhbid0IGJlIGlubGluZWQgYmVjYXVzZSB0aGUgZXZhbCBkZXZ0b29sIGlzIHVzZWQuXG4vKioqKioqLyBcdHZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vaW5kZXgudHNcIik7XG4vKioqKioqLyBcdFxuLyoqKioqKi8gXHRyZXR1cm4gX193ZWJwYWNrX2V4cG9ydHNfXztcbi8qKioqKiovIH0pKClcbjtcbn0pOyIsIi8qXHJcblxyXG5QYXJzZSBhIHZhbGlkIENTUyBjb2xvciBzdHJpbmcgaW50byBhbiBvYmplY3QgbGlrZTogeyByLCBnLCBiLCBhIH1cclxuUHJvcGVydGllcyB3aWxsIGhhdmUgdGhlIGNvcnJlY3QgaW50ZXJ2YWwgYW5kIHByZWNpc2lvbi5cclxuVmFsaWQgaW5wdXQgZXhhbXBsZXM6XHJcblxyXG5yZWRcclxuI2YwMFxyXG4jZmYwMDAwXHJcbiNmZjAwMDBmZlxyXG5yZ2IoMjU1LCAwLCAwKVxyXG5yZ2IoMTAwJSwgMCUsIDAlKVxyXG5yZ2JhKDI1NSwgMCwgMCwgMSlcclxucmdiYSgxMDAlLCAwJSwgMCUsIDEpXHJcbmhzbCgwLCAxMDAlLCA1MCUpXHJcbmhzbGEoMCwgMTAwJSwgNTAlLCAxKVxyXG5cclxuKi9cclxuY29uc3QgcGFyc2VDb2xvciA9IChmdW5jdGlvbigpIHtcclxuXHRjb25zdCBuYW1lcyA9IHtcclxuXHRcdFwiYWxpY2VibHVlXCI6IFwiZjBmOGZmXCIsXHJcblx0XHRcImFudGlxdWV3aGl0ZVwiOiBcImZhZWJkN1wiLFxyXG5cdFx0XCJhcXVhXCI6IFwiMGZmXCIsXHJcblx0XHRcImFxdWFtYXJpbmVcIjogXCI3ZmZmZDRcIixcclxuXHRcdFwiYXp1cmVcIjogXCJmMGZmZmZcIixcclxuXHRcdFwiYmVpZ2VcIjogXCJmNWY1ZGNcIixcclxuXHRcdFwiYmlzcXVlXCI6IFwiZmZlNGM0XCIsXHJcblx0XHRcImJsYWNrXCI6IFwiMDAwXCIsXHJcblx0XHRcImJsYW5jaGVkYWxtb25kXCI6IFwiZmZlYmNkXCIsXHJcblx0XHRcImJsdWVcIjogXCIwMGZcIixcclxuXHRcdFwiYmx1ZXZpb2xldFwiOiBcIjhhMmJlMlwiLFxyXG5cdFx0XCJicm93blwiOiBcImE1MmEyYVwiLFxyXG5cdFx0XCJidXJseXdvb2RcIjogXCJkZWI4ODdcIixcclxuXHRcdFwiY2FkZXRibHVlXCI6IFwiNWY5ZWEwXCIsXHJcblx0XHRcImNoYXJ0cmV1c2VcIjogXCI3ZmZmMDBcIixcclxuXHRcdFwiY2hvY29sYXRlXCI6IFwiZDI2OTFlXCIsXHJcblx0XHRcImNvcmFsXCI6IFwiZmY3ZjUwXCIsXHJcblx0XHRcImNvcm5mbG93ZXJibHVlXCI6IFwiNjQ5NWVkXCIsXHJcblx0XHRcImNvcm5zaWxrXCI6IFwiZmZmOGRjXCIsXHJcblx0XHRcImNyaW1zb25cIjogXCJkYzE0M2NcIixcclxuXHRcdFwiY3lhblwiOiBcIjBmZlwiLFxyXG5cdFx0XCJkYXJrYmx1ZVwiOiBcIjAwMDA4YlwiLFxyXG5cdFx0XCJkYXJrY3lhblwiOiBcIjAwOGI4YlwiLFxyXG5cdFx0XCJkYXJrZ29sZGVucm9kXCI6IFwiYjg4NjBiXCIsXHJcblx0XHRcImRhcmtncmF5XCI6IFwiYTlhOWE5XCIsXHJcblx0XHRcImRhcmtncmVlblwiOiBcIjAwNjQwMFwiLFxyXG5cdFx0XCJkYXJrZ3JleVwiOiBcImE5YTlhOVwiLFxyXG5cdFx0XCJkYXJra2hha2lcIjogXCJiZGI3NmJcIixcclxuXHRcdFwiZGFya21hZ2VudGFcIjogXCI4YjAwOGJcIixcclxuXHRcdFwiZGFya29saXZlZ3JlZW5cIjogXCI1NTZiMmZcIixcclxuXHRcdFwiZGFya29yYW5nZVwiOiBcImZmOGMwMFwiLFxyXG5cdFx0XCJkYXJrb3JjaGlkXCI6IFwiOTkzMmNjXCIsXHJcblx0XHRcImRhcmtyZWRcIjogXCI4YjAwMDBcIixcclxuXHRcdFwiZGFya3NhbG1vblwiOiBcImU5OTY3YVwiLFxyXG5cdFx0XCJkYXJrc2VhZ3JlZW5cIjogXCI4ZmJjOGZcIixcclxuXHRcdFwiZGFya3NsYXRlYmx1ZVwiOiBcIjQ4M2Q4YlwiLFxyXG5cdFx0XCJkYXJrc2xhdGVncmF5XCI6IFwiMmY0ZjRmXCIsXHJcblx0XHRcImRhcmtzbGF0ZWdyZXlcIjogXCIyZjRmNGZcIixcclxuXHRcdFwiZGFya3R1cnF1b2lzZVwiOiBcIjAwY2VkMVwiLFxyXG5cdFx0XCJkYXJrdmlvbGV0XCI6IFwiOTQwMGQzXCIsXHJcblx0XHRcImRlZXBwaW5rXCI6IFwiZmYxNDkzXCIsXHJcblx0XHRcImRlZXBza3libHVlXCI6IFwiMDBiZmZmXCIsXHJcblx0XHRcImRpbWdyYXlcIjogXCI2OTY5NjlcIixcclxuXHRcdFwiZGltZ3JleVwiOiBcIjY5Njk2OVwiLFxyXG5cdFx0XCJkb2RnZXJibHVlXCI6IFwiMWU5MGZmXCIsXHJcblx0XHRcImZpcmVicmlja1wiOiBcImIyMjIyMlwiLFxyXG5cdFx0XCJmbG9yYWx3aGl0ZVwiOiBcImZmZmFmMFwiLFxyXG5cdFx0XCJmb3Jlc3RncmVlblwiOiBcIjIyOGIyMlwiLFxyXG5cdFx0XCJmdWNoc2lhXCI6IFwiZjBmXCIsXHJcblx0XHRcImdhaW5zYm9yb1wiOiBcImRjZGNkY1wiLFxyXG5cdFx0XCJnaG9zdHdoaXRlXCI6IFwiZjhmOGZmXCIsXHJcblx0XHRcImdvbGRcIjogXCJmZmQ3MDBcIixcclxuXHRcdFwiZ29sZGVucm9kXCI6IFwiZGFhNTIwXCIsXHJcblx0XHRcImdyYXlcIjogXCI4MDgwODBcIixcclxuXHRcdFwiZ3JlZW5cIjogXCIwMDgwMDBcIixcclxuXHRcdFwiZ3JlZW55ZWxsb3dcIjogXCJhZGZmMmZcIixcclxuXHRcdFwiZ3JleVwiOiBcIjgwODA4MFwiLFxyXG5cdFx0XCJob25leWRld1wiOiBcImYwZmZmMFwiLFxyXG5cdFx0XCJob3RwaW5rXCI6IFwiZmY2OWI0XCIsXHJcblx0XHRcImluZGlhbnJlZFwiOiBcImNkNWM1Y1wiLFxyXG5cdFx0XCJpbmRpZ29cIjogXCI0YjAwODJcIixcclxuXHRcdFwiaXZvcnlcIjogXCJmZmZmZjBcIixcclxuXHRcdFwia2hha2lcIjogXCJmMGU2OGNcIixcclxuXHRcdFwibGF2ZW5kZXJcIjogXCJlNmU2ZmFcIixcclxuXHRcdFwibGF2ZW5kZXJibHVzaFwiOiBcImZmZjBmNVwiLFxyXG5cdFx0XCJsYXduZ3JlZW5cIjogXCI3Y2ZjMDBcIixcclxuXHRcdFwibGVtb25jaGlmZm9uXCI6IFwiZmZmYWNkXCIsXHJcblx0XHRcImxpZ2h0Ymx1ZVwiOiBcImFkZDhlNlwiLFxyXG5cdFx0XCJsaWdodGNvcmFsXCI6IFwiZjA4MDgwXCIsXHJcblx0XHRcImxpZ2h0Y3lhblwiOiBcImUwZmZmZlwiLFxyXG5cdFx0XCJsaWdodGdvbGRlbnJvZHllbGxvd1wiOiBcImZhZmFkMlwiLFxyXG5cdFx0XCJsaWdodGdyYXlcIjogXCJkM2QzZDNcIixcclxuXHRcdFwibGlnaHRncmVlblwiOiBcIjkwZWU5MFwiLFxyXG5cdFx0XCJsaWdodGdyZXlcIjogXCJkM2QzZDNcIixcclxuXHRcdFwibGlnaHRwaW5rXCI6IFwiZmZiNmMxXCIsXHJcblx0XHRcImxpZ2h0c2FsbW9uXCI6IFwiZmZhMDdhXCIsXHJcblx0XHRcImxpZ2h0c2VhZ3JlZW5cIjogXCIyMGIyYWFcIixcclxuXHRcdFwibGlnaHRza3libHVlXCI6IFwiODdjZWZhXCIsXHJcblx0XHRcImxpZ2h0c2xhdGVncmF5XCI6IFwiNzg5XCIsXHJcblx0XHRcImxpZ2h0c2xhdGVncmV5XCI6IFwiNzg5XCIsXHJcblx0XHRcImxpZ2h0c3RlZWxibHVlXCI6IFwiYjBjNGRlXCIsXHJcblx0XHRcImxpZ2h0eWVsbG93XCI6IFwiZmZmZmUwXCIsXHJcblx0XHRcImxpbWVcIjogXCIwZjBcIixcclxuXHRcdFwibGltZWdyZWVuXCI6IFwiMzJjZDMyXCIsXHJcblx0XHRcImxpbmVuXCI6IFwiZmFmMGU2XCIsXHJcblx0XHRcIm1hZ2VudGFcIjogXCJmMGZcIixcclxuXHRcdFwibWFyb29uXCI6IFwiODAwMDAwXCIsXHJcblx0XHRcIm1lZGl1bWFxdWFtYXJpbmVcIjogXCI2NmNkYWFcIixcclxuXHRcdFwibWVkaXVtYmx1ZVwiOiBcIjAwMDBjZFwiLFxyXG5cdFx0XCJtZWRpdW1vcmNoaWRcIjogXCJiYTU1ZDNcIixcclxuXHRcdFwibWVkaXVtcHVycGxlXCI6IFwiOTM3MGRiXCIsXHJcblx0XHRcIm1lZGl1bXNlYWdyZWVuXCI6IFwiM2NiMzcxXCIsXHJcblx0XHRcIm1lZGl1bXNsYXRlYmx1ZVwiOiBcIjdiNjhlZVwiLFxyXG5cdFx0XCJtZWRpdW1zcHJpbmdncmVlblwiOiBcIjAwZmE5YVwiLFxyXG5cdFx0XCJtZWRpdW10dXJxdW9pc2VcIjogXCI0OGQxY2NcIixcclxuXHRcdFwibWVkaXVtdmlvbGV0cmVkXCI6IFwiYzcxNTg1XCIsXHJcblx0XHRcIm1pZG5pZ2h0Ymx1ZVwiOiBcIjE5MTk3MFwiLFxyXG5cdFx0XCJtaW50Y3JlYW1cIjogXCJmNWZmZmFcIixcclxuXHRcdFwibWlzdHlyb3NlXCI6IFwiZmZlNGUxXCIsXHJcblx0XHRcIm1vY2Nhc2luXCI6IFwiZmZlNGI1XCIsXHJcblx0XHRcIm5hdmFqb3doaXRlXCI6IFwiZmZkZWFkXCIsXHJcblx0XHRcIm5hdnlcIjogXCIwMDAwODBcIixcclxuXHRcdFwib2xkbGFjZVwiOiBcImZkZjVlNlwiLFxyXG5cdFx0XCJvbGl2ZVwiOiBcIjgwODAwMFwiLFxyXG5cdFx0XCJvbGl2ZWRyYWJcIjogXCI2YjhlMjNcIixcclxuXHRcdFwib3JhbmdlXCI6IFwiZmZhNTAwXCIsXHJcblx0XHRcIm9yYW5nZXJlZFwiOiBcImZmNDUwMFwiLFxyXG5cdFx0XCJvcmNoaWRcIjogXCJkYTcwZDZcIixcclxuXHRcdFwicGFsZWdvbGRlbnJvZFwiOiBcImVlZThhYVwiLFxyXG5cdFx0XCJwYWxlZ3JlZW5cIjogXCI5OGZiOThcIixcclxuXHRcdFwicGFsZXR1cnF1b2lzZVwiOiBcImFmZWVlZVwiLFxyXG5cdFx0XCJwYWxldmlvbGV0cmVkXCI6IFwiZGI3MDkzXCIsXHJcblx0XHRcInBhcGF5YXdoaXBcIjogXCJmZmVmZDVcIixcclxuXHRcdFwicGVhY2hwdWZmXCI6IFwiZmZkYWI5XCIsXHJcblx0XHRcInBlcnVcIjogXCJjZDg1M2ZcIixcclxuXHRcdFwicGlua1wiOiBcImZmYzBjYlwiLFxyXG5cdFx0XCJwbHVtXCI6IFwiZGRhMGRkXCIsXHJcblx0XHRcInBvd2RlcmJsdWVcIjogXCJiMGUwZTZcIixcclxuXHRcdFwicHVycGxlXCI6IFwiODAwMDgwXCIsXHJcblx0XHRcInJlYmVjY2FwdXJwbGVcIjogXCI2MzlcIixcclxuXHRcdFwicmVkXCI6IFwiZjAwXCIsXHJcblx0XHRcInJvc3licm93blwiOiBcImJjOGY4ZlwiLFxyXG5cdFx0XCJyb3lhbGJsdWVcIjogXCI0MTY5ZTFcIixcclxuXHRcdFwic2FkZGxlYnJvd25cIjogXCI4YjQ1MTNcIixcclxuXHRcdFwic2FsbW9uXCI6IFwiZmE4MDcyXCIsXHJcblx0XHRcInNhbmR5YnJvd25cIjogXCJmNGE0NjBcIixcclxuXHRcdFwic2VhZ3JlZW5cIjogXCIyZThiNTdcIixcclxuXHRcdFwic2Vhc2hlbGxcIjogXCJmZmY1ZWVcIixcclxuXHRcdFwic2llbm5hXCI6IFwiYTA1MjJkXCIsXHJcblx0XHRcInNpbHZlclwiOiBcImMwYzBjMFwiLFxyXG5cdFx0XCJza3libHVlXCI6IFwiODdjZWViXCIsXHJcblx0XHRcInNsYXRlYmx1ZVwiOiBcIjZhNWFjZFwiLFxyXG5cdFx0XCJzbGF0ZWdyYXlcIjogXCI3MDgwOTBcIixcclxuXHRcdFwic2xhdGVncmV5XCI6IFwiNzA4MDkwXCIsXHJcblx0XHRcInNub3dcIjogXCJmZmZhZmFcIixcclxuXHRcdFwic3ByaW5nZ3JlZW5cIjogXCIwMGZmN2ZcIixcclxuXHRcdFwic3RlZWxibHVlXCI6IFwiNDY4MmI0XCIsXHJcblx0XHRcInRhblwiOiBcImQyYjQ4Y1wiLFxyXG5cdFx0XCJ0ZWFsXCI6IFwiMDA4MDgwXCIsXHJcblx0XHRcInRoaXN0bGVcIjogXCJkOGJmZDhcIixcclxuXHRcdFwidG9tYXRvXCI6IFwiZmY2MzQ3XCIsXHJcblx0XHRcInR1cnF1b2lzZVwiOiBcIjQwZTBkMFwiLFxyXG5cdFx0XCJ2aW9sZXRcIjogXCJlZTgyZWVcIixcclxuXHRcdFwid2hlYXRcIjogXCJmNWRlYjNcIixcclxuXHRcdFwid2hpdGVcIjogXCJmZmZcIixcclxuXHRcdFwid2hpdGVzbW9rZVwiOiBcImY1ZjVmNVwiLFxyXG5cdFx0XCJ5ZWxsb3dcIjogXCJmZjBcIixcclxuXHRcdFwieWVsbG93Z3JlZW5cIjogXCI5YWNkMzJcIixcclxuXHRcdFwidHJhbnNwYXJlbnRcIjogXCIwMDAwMDAwMFwiXHJcblx0fTtcclxuXHRcclxuXHRjb25zdCBjbGFtcCA9IChuLCBhLCBiKSA9PiBuIDwgYSA/IGEgOiAobiA+IGIgPyBiIDogbiksXHQvLyBDbGFtcCBuIGluIGludGVydmFsIFthLCBiXVxyXG5cdFx0cm91bmQgPSAobiwgZCkgPT4ge1x0Ly8gUm91bmQgbiB0byBuZWFyZXN0IGludGVnZXIsIG9yIHRvIGQgZGVjaW1hbCBwbGFjZXMgKGlmIGQgaXMgZGVmaW5lZClcclxuXHRcdFx0dmFyIHAgPSBNYXRoLnBvdygxMCwgZCB8fCAwKTtcclxuXHRcdFx0cmV0dXJuIE1hdGgucm91bmQobiAqIHApIC8gcDtcclxuXHRcdH0sXHJcblx0XHRoaSA9IG4gPT4gY2xhbXAocGFyc2VJbnQobiwgMTYpLCAwLCAyNTUpLFx0Ly8gQ29udmVydCAyLWRpZ2l0IGhleCB0byBpbnQgaW4gaW50ZXJ2YWwgWzAsIDI1NV1cclxuXHRcdGhmID0gbiA9PiBjbGFtcChyb3VuZChwYXJzZUludChuLCAxNikgLyAyNTUsIDIpLCAwLCAxKSxcdC8vIENvbnZlcnQgMi1kaWdpdCBoZXggdG8gZmxvYXQgd2l0aCAyIGRlY2ltYWwgcGxhY2VzIGluIGludGVydmFsIFswLCAxXVxyXG5cdFx0c2kgPSBuID0+IGNsYW1wKHJvdW5kKHBhcnNlRmxvYXQobikpLCAwLCAyNTUpLFx0Ly8gQ29udmVydCBzdHJpbmcgdG8gaW50IGluIGludGVydmFsIFswLCAyNTVdXHJcblx0XHRzZiA9IG4gPT4gY2xhbXAocm91bmQocGFyc2VGbG9hdChuKSwgMiksIDAsIDEpLFx0Ly8gQ29udmVydCBzdHJpbmcgdG8gZmxvYXQgd2l0aCAyIGRlY2ltYWwgcGxhY2VzIGluIGludGVydmFsIFswLCAxXVxyXG5cdFx0cGkgPSBuID0+IGNsYW1wKHJvdW5kKHBhcnNlRmxvYXQobikgLyAxMDAgKiAyNTUpLCAwLCAyNTUpLFx0Ly8gQ29udmVydCBwZXJjZW50YWdlIHN0cmluZyB0byBpbnQgaW4gaW50ZXJ2YWwgWzAsIDI1NV1cclxuXHRcdHVmID0gbiA9PiBjbGFtcChwYXJzZUZsb2F0KG4pIC8gMzYwLCAwLCAxKSxcdC8vIENvbnZlcnQgaHVlIHN0cmluZyB0byBmbG9hdCBpbiBpbnRlcnZhbCBbMCwgMV1cclxuXHRcdHBmID0gbiA9PiBjbGFtcChwYXJzZUZsb2F0KG4pIC8gMTAwLCAwLCAxKTtcdC8vIENvbnZlcnQgcGVyY2VudGFnZSBzdHJpbmcgdG8gZmxvYXQgaW4gaW50ZXJ2YWwgWzAsIDFdXHJcblx0XHJcblx0Ly8gQ29udmVydCBoc2wgdG8gcmdiLCBhbHBoYSB2YWx1ZSBnZXRzIHBhc3NlZCBzdHJhaWdodCB0aHJvdWdoXHJcblx0Ly8gaCwgcywgbCB2YWx1ZXMgYXJlIGFzc3VtZWQgdG8gYmUgaW4gaW50ZXJ2YWwgWzAsIDFdXHJcblx0Ly8gUmV0dXJucyBhbiBvYmplY3QgbGlrZSB7IHIsIGcsIGIsIGEgfVxyXG5cdC8vIGh0dHA6Ly9heG9uZmx1eC5jb20vaGFuZHktcmdiLXRvLWhzbC1hbmQtcmdiLXRvLWhzdi1jb2xvci1tb2RlbC1jXHJcblx0ZnVuY3Rpb24gaHNsVG9SZ2IoaCwgcywgbCwgYSkge1xyXG5cdFx0dmFyIHIsIGcsIGIsXHJcblx0XHRcdGh1ZSA9IGZ1bmN0aW9uKHAsIHEsIHQpIHtcclxuXHRcdFx0XHRpZiAodCA8IDApIHsgdCArPSAxOyB9XHJcblx0XHRcdFx0aWYgKHQgPiAxKSB7IHQgLT0gMTsgfVxyXG5cdFx0XHRcdGlmICh0IDwgMSAvIDYpIHsgcmV0dXJuIHAgKyAocSAtIHApICogNiAqIHQgfTtcclxuXHRcdFx0XHRpZiAodCA8IDEgLyAyKSB7IHJldHVybiBxOyB9XHJcblx0XHRcdFx0aWYgKHQgPCAyIC8gMykgeyByZXR1cm4gcCArIChxIC0gcCkgKiAoMiAvIDMgLSB0KSAqIDYgfTtcclxuXHRcdFx0XHRyZXR1cm4gcDtcclxuXHRcdFx0fTtcclxuXHRcdGlmIChzID09IDApIHtcclxuXHRcdFx0ciA9IGcgPSBiID0gbDtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHZhciBxID0gbCA8IDAuNSA/IGwgKiAoMSArIHMpIDogbCArIHMgLSBsICogcyxcclxuXHRcdFx0XHRwID0gMiAqIGwgLSBxO1xyXG5cdFx0XHRyID0gaHVlKHAsIHEsIGggKyAxIC8gMyk7XHJcblx0XHRcdGcgPSBodWUocCwgcSwgaCk7XHJcblx0XHRcdGIgPSBodWUocCwgcSwgaCAtIDEgLyAzKTtcclxuXHRcdH1cclxuXHRcdHJldHVybiB7IHI6IHJvdW5kKHIgKiAyNTUpLCBnOiByb3VuZChnICogMjU1KSwgYjogcm91bmQoYiAqIDI1NSksIGE6IGEgfTtcclxuXHR9XHJcblx0cmV0dXJuIGZ1bmN0aW9uKGMpIHtcclxuXHRcdHZhciBvID0geyByOiAwLCBnOiAwLCBiOiAwLCBhOiAwIH0sIG0gPSBudWxsO1xyXG5cdFx0aWYgKHR5cGVvZiBjID09IFwic3RyaW5nXCIpIHtcclxuXHRcdFx0aWYgKGMgaW4gbmFtZXMpIHsgYyA9IFwiI1wiICsgbmFtZXNbY107IH1cclxuXHRcdFx0aWYgKChtID0gYy5tYXRjaCgvIyhbYS1mMC05XSkoW2EtZjAtOV0pKFthLWYwLTldKSQvaSkpICE9PSBudWxsKSB7XHJcblx0XHRcdFx0byA9IHsgcjogaGkobVsxXSArIG1bMV0pLCBnOiBoaShtWzJdICsgbVsyXSksIGI6IGhpKG1bM10gKyBtWzNdKSwgYTogMSB9O1xyXG5cdFx0XHR9IGVsc2UgaWYgKChtID0gYy5tYXRjaCgvIyhbYS1mMC05XXsyfSkoW2EtZjAtOV17Mn0pKFthLWYwLTldezJ9KSQvaSkpICE9PSBudWxsKSB7XHJcblx0XHRcdFx0byA9IHsgcjogaGkobVsxXSksIGc6IGhpKG1bMl0pLCBiOiBoaShtWzNdKSwgYTogMSB9O1xyXG5cdFx0XHR9IGVsc2UgaWYgKChtID0gYy5tYXRjaCgvIyhbYS1mMC05XXsyfSkoW2EtZjAtOV17Mn0pKFthLWYwLTldezJ9KShbYS1mMC05XXsyfSkkL2kpKSAhPT0gbnVsbCkge1xyXG5cdFx0XHRcdG8gPSB7IHI6IGhpKG1bMV0pLCBnOiBoaShtWzJdKSwgYjogaGkobVszXSksIGE6IGhmKG1bNF0pIH07XHJcblx0XHRcdH0gZWxzZSBpZiAoKG0gPSBjLm1hdGNoKC9yZ2JcXChcXHMqKFxcZHsxLDN9KVxccyosXFxzKihcXGR7MSwzfSlcXHMqLFxccyooXFxkezEsM30pXFxzKlxcKS8pKSAhPT0gbnVsbCkge1xyXG5cdFx0XHRcdG8gPSB7IHI6IHNpKG1bMV0pLCBnOiBzaShtWzJdKSwgYjogc2kobVszXSksIGE6IDEgfTtcclxuXHRcdFx0fSBlbHNlIGlmICgobSA9IGMubWF0Y2goL3JnYlxcKFxccyooXFxkezEsM31cXC4/XFxkPyUpXFxzKixcXHMqKFxcZHsxLDN9XFwuP1xcZD8lKVxccyosXFxzKihcXGR7MSwzfVxcLj9cXGQ/JSlcXHMqXFwpLykpICE9PSBudWxsKSB7XHJcblx0XHRcdFx0byA9IHsgcjogcGkobVsxXSksIGc6IHBpKG1bMl0pLCBiOiBwaShtWzNdKSwgYTogMSB9O1xyXG5cdFx0XHR9IGVsc2UgaWYgKChtID0gYy5tYXRjaCgvcmdiYVxcKFxccyooXFxkezEsM30pXFxzKixcXHMqKFxcZHsxLDN9KVxccyosXFxzKihcXGR7MSwzfSlcXHMqLFxccyooXFxkP1xcLj9cXGQqPyk/XFxzKlxcKS8pKSAhPT0gbnVsbCkge1xyXG5cdFx0XHRcdG8gPSB7IHI6IHNpKG1bMV0pLCBnOiBzaShtWzJdKSwgYjogc2kobVszXSksIGE6IHNmKG1bNF0pIH07XHJcblx0XHRcdH0gZWxzZSBpZiAoKG0gPSBjLm1hdGNoKC9yZ2JhXFwoXFxzKihcXGR7MSwzfVxcLj9cXGQ/JSlcXHMqLFxccyooXFxkezEsM31cXC4/XFxkPyUpXFxzKixcXHMqKFxcZHsxLDN9XFwuP1xcZD8lKVxccyosXFxzKihcXGQ/XFwuP1xcZCo/KT9cXHMqXFwpLykpICE9PSBudWxsKSB7XHJcblx0XHRcdFx0byA9IHsgcjogcGkobVsxXSksIGc6IHBpKG1bMl0pLCBiOiBwaShtWzNdKSwgYTogc2YobVs0XSkgfTtcclxuXHRcdFx0fSBlbHNlIGlmICgobSA9IGMubWF0Y2goL2hzbFxcKFxccyooXFxkezEsM31cXC4/XFxkPylcXHMqLFxccyooXFxkezEsM31cXC4/XFxkPyUpXFxzKixcXHMqKFxcZHsxLDN9XFwuP1xcZD8lKVxccypcXCkvKSkgIT09IG51bGwpIHtcclxuXHRcdFx0XHRvID0gaHNsVG9SZ2IodWYobVsxXSksIHBmKG1bMl0pLCBwZihtWzNdKSwgMSk7XHJcblx0XHRcdH0gZWxzZSBpZiAoKG0gPSBjLm1hdGNoKC9oc2xhXFwoXFxzKihcXGR7MSwzfVxcLj9cXGQ/KVxccyosXFxzKihcXGR7MSwzfVxcLj9cXGQ/JSlcXHMqLFxccyooXFxkezEsM31cXC4/XFxkPyUpXFxzKixcXHMqKFxcZD9cXC4/XFxkKj8pP1xccypcXCkvKSkgIT09IG51bGwpIHtcclxuXHRcdFx0XHRvID0gaHNsVG9SZ2IodWYobVsxXSksIHBmKG1bMl0pLCBwZihtWzNdKSwgc2YobVs0XSkpO1xyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2UgaWYgKHR5cGVvZiBjID09IFwib2JqZWN0XCIpIHtcclxuXHRcdFx0aWYgKGMuciAhPT0gdW5kZWZpbmVkICYmIGMuZyAhPSB1bmRlZmluZWQgJiYgYy5iICE9PSB1bmRlZmluZWQpIHtcclxuXHRcdFx0XHRvID0geyByOiBzaShjLnIpLCBnOiBzaShjLmcpLCBiOiBzaShjLmIpLCBhOiBzZihjLmEgfHwgMSkgfTtcclxuXHRcdFx0fSBlbHNlIGlmIChjLmggIT09IHVuZGVmaW5lZCAmJiBjLnMgIT09IHVuZGVmaW5lZCAmJiBjLmwgIT09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHRcdG8gPSBoc2xUb1JnYih1ZihjLmgpLCBwZihjLnMpLCBwZihjLmwpLCBzZihjLmEgfHwgMSkpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gbztcclxuXHR9O1xyXG59KCkpO1xyXG5cclxuaWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgbW9kdWxlLmV4cG9ydHMgPSB7IHBhcnNlQ29sb3IgfTtcclxufVxyXG4iLCIvKipcbiAqIEBvdmVydmlldyBBIGxpYnJhcnkgb2YgdXNlZnVsIGZ1bmN0aW9uc1xuICogQGF1dGhvciBHb3Jkb24gTGFycmlnYW5cbiAqL1xuXG4vKipcbiAqIENoZWNrIGlmIHR3byBudW1iZXJzIGFyZSBhcHByb3hpbWF0ZWx5IGVxdWFsXG4gKiBAcGFyYW0ge251bWJlcn0gYSBOdW1iZXIgYVxuICogQHBhcmFtIHtudW1iZXJ9IGIgTnVtYmVyIGJcbiAqIEBwYXJhbSB7bnVtYmVyfSBbcD1OdW1iZXIuRVBTSUxPTl0gVGhlIHByZWNpc2lvbiB2YWx1ZVxuICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiBudW1iZXJzIGEgYW5kIGIgYXJlIGFwcHJveGltYXRlbHkgZXF1YWxcbiAqL1xuY29uc3QgZmxvYXRFcXVhbHMgPSAoYSwgYiwgcCA9IE51bWJlci5FUFNJTE9OKSA9PiBNYXRoLmFicyhhIC0gYikgPCBwO1xuXG4vKipcbiAqIENsYW1wIGEgbnVtYmVyIGJldHdlZW4gbWluIGFuZCBtYXhcbiAqIEBwYXJhbSB7bnVtYmVyfSBhIFRoZSBudW1iZXIgdG8gY2xhbXBcbiAqIEBwYXJhbSB7bnVtYmVyfSBbbWluPTBdIFRoZSBtaW5pbXVtIHZhbHVlXG4gKiBAcGFyYW0ge251bWJlcn0gW21heD0xXSBUaGUgbWF4aW11bSB2YWx1ZVxuICogQHJldHVybiB7bnVtYmVyfSBBIGNsYW1wZWQgbnVtYmVyXG4gKi9cbmNvbnN0IGNsYW1wID0gKGEsIG1pbiA9IDAsIG1heCA9IDEpID0+IGEgPCBtaW4gPyBtaW4gOiAoYSA+IG1heCA/IG1heCA6IGEpO1xuXG4vKipcbiAqIEdldCB0aGUgZnJhY3Rpb25hbCBwYXJ0IG9mIGEgbnVtYmVyXG4gKiBAcGFyYW0ge251bWJlcn0gYSBUaGUgbnVtYmVyIGZyb20gd2hpY2ggdG8gZ2V0IHRoZSBmcmFjdGlvbmFsIHBhcnRcbiAqIEByZXR1cm4ge251bWJlcn0gVGhlIGZyYWN0aW9uYWwgcGFydCBvZiB0aGUgbnVtYmVyXG4gKi9cbmNvbnN0IGZyYWMgPSBhID0+IGEgPj0gMCA/IGEgLSBNYXRoLmZsb29yKGEpIDogYSAtIE1hdGguY2VpbChhKTtcblxuLyoqXG4gKiBSb3VuZCBuIHRvIGQgZGVjaW1hbCBwbGFjZXNcbiAqIEBwYXJhbSB7bnVtYmVyfSBuIFRoZSBudW1iZXIgdG8gcm91bmRcbiAqIEBwYXJhbSB7bnVtYmVyfSBbZD0wXSBUaGUgbnVtYmVyIG9mIGRlY2ltYWwgcGxhY2VzIHRvIHJvdW5kIHRvXG4gKiBAcmV0dXJuIHtudW1iZXJ9IEEgcm91bmRlZCBudW1iZXJcbiAqL1xuY29uc3Qgcm91bmQgPSAobiwgZCA9IDApID0+IHtcbiAgY29uc3QgcCA9IE1hdGgucG93KDEwLCBkKTtcbiAgcmV0dXJuIE1hdGgucm91bmQobiAqIHAgKyBOdW1iZXIuRVBTSUxPTikgLyBwO1xufVxuXG4vKipcbiAqIERvIGEgbGluZWFyIGludGVycG9sYXRpb24gYmV0d2VlbiBhIGFuZCBiXG4gKiBAcGFyYW0ge251bWJlcn0gYSBUaGUgbWluaW11bSBudW1iZXJcbiAqIEBwYXJhbSB7bnVtYmVyfSBiIFRoZSBtYXhpbXVtIG51bWJlclxuICogQHBhcmFtIHtudW1iZXJ9IGkgVGhlIGludGVycG9sYXRpb24gdmFsdWUsIHNob3VsZCBiZSBpbiB0aGUgaW50ZXJ2YWwgWzAsIDFdXG4gKiBAcmV0dXJuIHtudW1iZXJ9IEFuIGludGVycG9sYXRlZCB2YWx1ZSBpbiB0aGUgaW50ZXJ2YWwgW2EsIGJdXG4gKi9cbmNvbnN0IGxlcnAgPSAoYSwgYiwgaSkgPT4gYSArIChiIC0gYSkgKiBpO1xuXG4vKipcbiAqIEdldCB0aGUgcG9zaXRpb24gb2YgaSBiZXR3ZWVuIGEgYW5kIGJcbiAqIEBwYXJhbSB7bnVtYmVyfSBhIFRoZSBtaW5pbXVtIG51bWJlclxuICogQHBhcmFtIHtudW1iZXJ9IGIgVGhlIG1heGltdW0gbnVtYmVyXG4gKiBAcGFyYW0ge251bWJlcn0gaSBUaGUgaW50ZXJwb2xhdGVkIHZhbHVlIGluIHRoZSBpbnRlcnZhbCBbYSwgYl1cbiAqIEByZXR1cm4ge251bWJlcn0gVGhlIHBvc2l0aW9uIG9mIGkgYmV0d2VlbiBhIGFuZCBiXG4gKi9cbmNvbnN0IHVubGVycCA9IChhLCBiLCBpKSA9PiAoaSAtIGEpIC8gKGIgLSBhKTtcblxuLyoqXG4gKiBEbyBhIGJpbGluZWFyIGludGVycG9sYXRpb25cbiAqIEBwYXJhbSB7bnVtYmVyfSBjMDAgVG9wLWxlZnQgdmFsdWVcbiAqIEBwYXJhbSB7bnVtYmVyfSBjMTAgVG9wLXJpZ2h0IHZhbHVlXG4gKiBAcGFyYW0ge251bWJlcn0gYzAxIEJvdHRvbS1sZWZ0IHZhbHVlXG4gKiBAcGFyYW0ge251bWJlcn0gYzExIEJvdHRvbS1yaWdodCB2YWx1ZVxuICogQHBhcmFtIHtudW1iZXJ9IGl4IEludGVycG9sYXRpb24gdmFsdWUgYWxvbmcgeFxuICogQHBhcmFtIHtudW1iZXJ9IGl5IEludGVycG9sYXRpb24gdmFsdWUgYWxvbmcgeVxuICogQHJldHVybiB7bnVtYmVyfSBBIGJpbGluZWFyIGludGVycG9sYXRlZCB2YWx1ZVxuICovXG5jb25zdCBibGVycCA9IChjMDAsIGMxMCwgYzAxLCBjMTEsIGl4LCBpeSkgPT4gbGVycChsZXJwKGMwMCwgYzEwLCBpeCksIGxlcnAoYzAxLCBjMTEsIGl4KSwgaXkpO1xuXG4vKipcbiAqIFJlLW1hcCBhIG51bWJlciBpIGZyb20gcmFuZ2UgYTEuLi5hMiB0byBiMS4uLmIyXG4gKiBAcGFyYW0ge251bWJlcn0gaSBUaGUgbnVtYmVyIHRvIHJlLW1hcFxuICogQHBhcmFtIHtudW1iZXJ9IGExXG4gKiBAcGFyYW0ge251bWJlcn0gYTJcbiAqIEBwYXJhbSB7bnVtYmVyfSBiMVxuICogQHBhcmFtIHtudW1iZXJ9IGIyXG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbmNvbnN0IHJlbWFwID0gKGksIGExLCBhMiwgYjEsIGIyKSA9PiBiMSArIChpIC0gYTEpICogKGIyIC0gYjEpIC8gKGEyIC0gYTEpO1xuXG4vKipcbiAqIERvIGEgc21vb3RoIGludGVycG9sYXRpb24gYmV0d2VlbiBhIGFuZCBiXG4gKiBAcGFyYW0ge251bWJlcn0gYSBUaGUgbWluaW11bSBudW1iZXJcbiAqIEBwYXJhbSB7bnVtYmVyfSBiIFRoZSBtYXhpbXVtIG51bWJlclxuICogQHBhcmFtIHtudW1iZXJ9IGkgVGhlIGludGVycG9sYXRpb24gdmFsdWVcbiAqIEByZXR1cm4ge251bWJlcn0gQW4gaW50ZXJwb2xhdGVkIHZhbHVlIGluIHRoZSBpbnRlcnZhbCBbYSwgYl1cbiAqL1xuY29uc3Qgc21vb3Roc3RlcCA9IChhLCBiLCBpKSA9PiBsZXJwKGEsIGIsIDMgKiBNYXRoLnBvdyhpLCAyKSAtIDIgKiBNYXRoLnBvdyhpLCAzKSk7XG5cbi8qKlxuICogR2V0IGFuIGFuZ2xlIGluIHJhZGlhbnNcbiAqIEBwYXJhbSB7bnVtYmVyfSBkZWdyZWVzIFRoZSBhbmdsZSBpbiBkZWdyZWVzXG4gKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBhbmdsZSBpbiByYWRpYW5zXG4gKi9cbmNvbnN0IHJhZGlhbnMgPSBkZWdyZWVzID0+IChNYXRoLlBJIC8gMTgwKSAqIGRlZ3JlZXM7XG5cbi8qKlxuICogR2V0IGFuIGFuZ2xlIGluIGRlZ3JlZXNcbiAqIEBwYXJhbSB7bnVtYmVyfSByYWRpYW5zIFRoZSBhbmdsZSBpbiByYWRpYW5zXG4gKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBhbmdsZSBpbiBkZWdyZWVzXG4gKi9cbmNvbnN0IGRlZ3JlZXMgPSByYWRpYW5zID0+ICgxODAgLyBNYXRoLlBJKSAqIHJhZGlhbnM7XG5cbi8qKlxuICogR2V0IGEgcmFuZG9tIGZsb2F0IGluIHRoZSBpbnRlcnZhbCBbbWluLCBtYXgpXG4gKiBAcGFyYW0ge251bWJlcn0gbWluIEluY2x1c2l2ZSBtaW5cbiAqIEBwYXJhbSB7bnVtYmVyfSBtYXggRXhjbHVzaXZlIG1heFxuICogQHJldHVybiB7bnVtYmVyfSBBIHJhbmRvbSBmbG9hdCBpbiB0aGUgaW50ZXJ2YWwgW21pbiwgbWF4KVxuICovXG5jb25zdCByYW5kb21CZXR3ZWVuID0gKG1pbiwgbWF4KSA9PiBNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikgKyBtaW47XG5cbi8qKlxuICogR2V0IGEgcmFuZG9tIGludGVnZXIgaW4gdGhlIGludGVydmFsIFttaW4sIG1heF1cbiAqIEBwYXJhbSB7bnVtYmVyfSBtaW4gSW5jbHVzaXZlIG1pblxuICogQHBhcmFtIHtudW1iZXJ9IG1heCBJbmNsdXNpdmUgbWF4XG4gKiBAcmV0dXJuIHtudW1iZXJ9IEEgcmFuZG9tIGludGVnZXIgaW4gdGhlIGludGVydmFsIFttaW4sIG1heF1cbiAqL1xuY29uc3QgcmFuZG9tSW50QmV0d2VlbiA9IChtaW4sIG1heCkgPT4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpKSArIG1pbjtcblxuLyoqXG4gKiBHZXQgYSBub3JtYWxseS1kaXN0cmlidXRlZCByYW5kb20gbnVtYmVyXG4gKiBAcGFyYW0ge251bWJlcn0gW211PTAuNV0gVGhlIG1lYW4gdmFsdWVcbiAqIEBwYXJhbSB7bnVtYmVyfSBbc2lnbWE9MC41XSBUaGUgc3RhbmRhcmQgZGV2aWF0aW9uXG4gKiBAcGFyYW0ge251bWJlcn0gW3NhbXBsZXM9Ml0gVGhlIG51bWJlciBvZiBzYW1wbGVzXG4gKiBAcmV0dXJuIHtudW1iZXJ9IEEgbm9ybWFsbHktZGlzdHJpYnV0ZWQgcmFuZG9tIG51bWJlclxuICovXG5jb25zdCBjbHRSYW5kb20gPSAobXUgPSAwLjUsIHNpZ21hID0gMC41LCBzYW1wbGVzID0gMikgPT4ge1xuICBsZXQgdG90YWwgPSAwO1xuICBmb3IgKGxldCBpID0gc2FtcGxlczsgaS0tOykge1xuICAgIHRvdGFsICs9IE1hdGgucmFuZG9tKCk7XG4gIH1cbiAgcmV0dXJuIG11ICsgKHRvdGFsIC0gc2FtcGxlcyAvIDIpIC8gKHNhbXBsZXMgLyAyKSAqIHNpZ21hO1xufTtcblxuLyoqXG4gKiBHZXQgYSBub3JtYWxseS1kaXN0cmlidXRlZCByYW5kb20gaW50ZWdlciBpbiB0aGUgaW50ZXJ2YWwgW21pbiwgbWF4XVxuICogQHBhcmFtIHtudW1iZXJ9IG1pbiBJbmNsdXNpdmUgbWluXG4gKiBAcGFyYW0ge251bWJlcn0gbWF4IEluY2x1c2l2ZSBtYXhcbiAqIEByZXR1cm4ge251bWJlcn0gQSBub3JtYWxseS1kaXN0cmlidXRlZCByYW5kb20gaW50ZWdlclxuICovXG5jb25zdCBjbHRSYW5kb21JbnQgPSAobWluLCBtYXgpID0+IE1hdGguZmxvb3IobWluICsgY2x0UmFuZG9tKDAuNSwgMC41LCAyKSAqIChtYXggKyAxIC0gbWluKSk7XG5cbi8qKlxuICogUmV0dXJuIGEgd2VpZ2h0ZWQgcmFuZG9tIGludGVnZXJcbiAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0gdyBBbiBhcnJheSBvZiB3ZWlnaHRzXG4gKiBAcmV0dXJuIHtudW1iZXJ9IEFuIGluZGV4IGZyb20gd1xuICovXG5jb25zdCB3ZWlnaHRlZFJhbmRvbSA9IHcgPT4ge1xuICBsZXQgdG90YWwgPSB3LnJlZHVjZSgoYSwgaSkgPT4gYSArIGksIDApLCBuID0gMDtcbiAgY29uc3QgciA9IE1hdGgucmFuZG9tKCkgKiB0b3RhbDtcbiAgd2hpbGUgKHRvdGFsID4gcikge1xuICAgIHRvdGFsIC09IHdbbisrXTtcbiAgfVxuICByZXR1cm4gbiAtIDE7XG59O1xuXG4vKipcbiAqIEFuIGludGVycG9sYXRpb24gZnVuY3Rpb25cbiAqIEBjYWxsYmFjayBJbnRlcnBvbGF0aW9uRnVuY3Rpb25cbiAqIEBwYXJhbSB7bnVtYmVyfSBhIFRoZSBtaW5pbXVtIG51bWJlclxuICogQHBhcmFtIHtudW1iZXJ9IGIgVGhlIG1heGltdW0gbnVtYmVyXG4gKiBAcGFyYW0ge251bWJlcn0gaSBUaGUgaW50ZXJwb2xhdGlvbiB2YWx1ZSwgc2hvdWxkIGJlIGluIHRoZSBpbnRlcnZhbCBbMCwgMV1cbiAqIEByZXR1cm4ge251bWJlcn0gVGhlIGludGVycG9sYXRlZCB2YWx1ZSBpbiB0aGUgaW50ZXJ2YWwgW2EsIGJdXG4gKi9cblxuLyoqXG4gKiBSZXR1cm4gYW4gaW50ZXJwb2xhdGVkIHZhbHVlIGZyb20gYW4gYXJyYXlcbiAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0gYSBBbiBhcnJheSBvZiB2YWx1ZXMgaW50ZXJwb2xhdGVcbiAqIEBwYXJhbSB7bnVtYmVyfSBpIEEgbnVtYmVyIGluIHRoZSBpbnRlcnZhbCBbMCwgMV1cbiAqIEBwYXJhbSB7SW50ZXJwb2xhdGlvbkZ1bmN0aW9ufSBbZj1NYXRoLmxlcnBdIFRoZSBpbnRlcnBvbGF0aW9uIGZ1bmN0aW9uIHRvIHVzZVxuICogQHJldHVybiB7bnVtYmVyfSBBbiBpbnRlcnBvbGF0ZWQgdmFsdWUgaW4gdGhlIGludGVydmFsIFttaW4oYSksIG1heChhKV1cbiAqL1xuY29uc3QgbGVycEFycmF5ID0gKGEsIGksIGYgPSBsZXJwKSA9PiB7XG4gIGNvbnN0IHMgPSBpICogKGEubGVuZ3RoIC0gMSk7XG4gIGNvbnN0IHAgPSBjbGFtcChNYXRoLnRydW5jKHMpLCAwLCBhLmxlbmd0aCAtIDEpO1xuICByZXR1cm4gZihhW3BdIHx8IDAsIGFbcCArIDFdIHx8IDAsIGZyYWMocykpO1xufTtcblxuLyoqXG4gKiBHZXQgdGhlIGRvdCBwcm9kdWN0IG9mIHR3byB2ZWN0b3JzXG4gKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IGEgVmVjdG9yIGFcbiAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0gYiBWZWN0b3IgYlxuICogQHJldHVybiB7bnVtYmVyfSBhIOKImSBiXG4gKi9cbmNvbnN0IGRvdCA9IChhLCBiKSA9PiBhLnJlZHVjZSgobiwgdiwgaSkgPT4gbiArIHYgKiBiW2ldLCAwKTtcblxuLyoqXG4gKiBHZXQgdGhlIGZhY3RvcmlhbCBvZiBhIG51bWJlclxuICogQHBhcmFtIHtudW1iZXJ9IGFcbiAqIEByZXR1cm4ge251bWJlcn0gYSFcbiAqL1xuY29uc3QgZmFjdG9yaWFsID0gYSA9PiB7XG4gIGxldCByZXN1bHQgPSAxO1xuICBmb3IgKGxldCBpID0gMjsgaSA8PSBhOyBpKyspIHtcbiAgICByZXN1bHQgKj0gaTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuLyoqXG4gKiBHZXQgdGhlIG51bWJlciBvZiBwZXJtdXRhdGlvbnMgb2YgciBlbGVtZW50cyBmcm9tIGEgc2V0IG9mIG4gZWxlbWVudHNcbiAqIEBwYXJhbSB7bnVtYmVyfSBuXG4gKiBAcGFyYW0ge251bWJlcn0gclxuICogQHJldHVybiB7bnVtYmVyfSBuUHJcbiAqL1xuY29uc3QgbnByID0gKG4sIHIpID0+IGZhY3RvcmlhbChuKSAvIGZhY3RvcmlhbChuIC0gcik7XG5cbi8qKlxuICogR2V0IHRoZSBudW1iZXIgb2YgY29tYmluYXRpb25zIG9mIHIgZWxlbWVudHMgZnJvbSBhIHNldCBvZiBuIGVsZW1lbnRzXG4gKiBAcGFyYW0ge251bWJlcn0gblxuICogQHBhcmFtIHtudW1iZXJ9IHJcbiAqIEByZXR1cm4ge251bWJlcn0gbkNyXG4gKi9cbmNvbnN0IG5jciA9IChuLCByKSA9PiBmYWN0b3JpYWwobikgLyAoZmFjdG9yaWFsKHIpICogZmFjdG9yaWFsKG4gLSByKSk7XG5cbi8qKlxuICogR2VuZXJhdGUgYWxsIGNvbWJpbmF0aW9ucyBvZiByIGVsZW1lbnRzIGZyb20gYW4gYXJyYXlcbiAqXG4gKiBAZXhhbXBsZVxuICogYGBganNcbiAqIGNvbWJpbmF0aW9ucyhbMSwgMiwgM10sIDIpO1xuICogYGBgXG4gKlxuICogT3V0cHV0OlxuICogYGBganNvblxuICogW1xuICogICBbMSwgMl0sXG4gKiAgIFsxLCAzXSxcbiAqICAgWzIsIDNdXG4gKiBdXG4gKiBgYGBcbiAqIEBwYXJhbSB7QXJyYXk8Kj59IGFcbiAqIEBwYXJhbSB7bnVtYmVyfSByIFRoZSBudW1iZXIgb2YgZWxlbWVudHMgdG8gY2hvb3NlIGluIGVhY2ggY29tYmluYXRpb25cbiAqIEByZXR1cm4ge0FycmF5PEFycmF5PCo+Pn0gQW4gYXJyYXkgb2YgY29tYmluYXRpb24gYXJyYXlzXG4gKi9cbmNvbnN0IGNvbWJpbmF0aW9ucyA9IChhLCByKSA9PiB7XG4gIGlmIChyID09PSAxKSB7XG4gICAgcmV0dXJuIGEubWFwKGl0ZW0gPT4gW2l0ZW1dKTtcbiAgfVxuXG4gIHJldHVybiBhLnJlZHVjZShcbiAgICAoYWNjLCBpdGVtLCBpKSA9PiBbXG4gICAgICAuLi5hY2MsXG4gICAgICAuLi5jb21iaW5hdGlvbnMoYS5zbGljZShpICsgMSksIHIgLSAxKS5tYXAoYyA9PiBbaXRlbSwgLi4uY10pLFxuICAgIF0sXG4gICAgW11cbiAgKTtcbn07XG5cbi8qKlxuICogR2V0IGEgY2FydGVzaWFuIHByb2R1Y3Qgb2YgYXJyYXlzXG4gKlxuICogQGV4YW1wbGVcbiAqIGBgYGpzXG4gKiBjYXJ0ZXNpYW4oWzEsIDIsIDNdLCBbJ2EnLCAnYiddKTtcbiAqIGBgYFxuICpcbiAqIE91dHB1dDpcbiAqIGBgYGpzb25cbiAqIFtcbiAqICAgWzEsIFwiYVwiXSxcbiAqICAgWzEsIFwiYlwiXSxcbiAqICAgWzIsIFwiYVwiXSxcbiAqICAgWzIsIFwiYlwiXSxcbiAqICAgWzMsIFwiYVwiXSxcbiAqICAgWzMsIFwiYlwiXVxuICogXVxuICogYGBgXG4gKi9cbmNvbnN0IGNhcnRlc2lhbiA9ICguLi5hcnIpID0+XG4gIGFyci5yZWR1Y2UoXG4gICAgKGEsIGIpID0+IGEuZmxhdE1hcChjID0+IGIubWFwKGQgPT4gWy4uLmMsIGRdKSksXG4gICAgW1tdXVxuICApO1xuXG4vKipcbiAqIEEgZnVuY3Rpb24gZm9yIGdlbmVyYXRpbmcgYXJyYXkgdmFsdWVzXG4gKiBAY2FsbGJhY2sgVGltZXNGdW5jdGlvblxuICogQHBhcmFtIHtudW1iZXJ9IGkgVGhlIGFycmF5IGluZGV4XG4gKiBAcmV0dXJuIHsqfSBUaGUgYXJyYXkgdmFsdWVcbiAqL1xuXG4vKipcbiAqIFJldHVybiBhIG5ldyBhcnJheSB3aXRoIGxlbmd0aCBuIGJ5IGNhbGxpbmcgZnVuY3Rpb24gZihpKSBvbiBlYWNoIGVsZW1lbnRcbiAqIEBwYXJhbSB7VGltZXNGdW5jdGlvbn0gZlxuICogQHBhcmFtIHtudW1iZXJ9IG4gVGhlIHNpemUgb2YgdGhlIGFycmF5XG4gKiBAcmV0dXJuIHtBcnJheTwqPn1cbiAqL1xuY29uc3QgdGltZXMgPSAoZiwgbikgPT4gQXJyYXkobikuZmlsbCgwKS5tYXAoKF8sIGkpID0+IGYoaSkpO1xuXG4vKipcbiAqIFJldHVybiBhbiBhcnJheSBjb250YWluaW5nIG51bWJlcnMgMC0+KG4gLSAxKVxuICogQHBhcmFtIHtudW1iZXJ9IG4gVGhlIHNpemUgb2YgdGhlIGFycmF5XG4gKiBAcmV0dXJuIHtBcnJheTxudW1iZXI+fSBBbiBhcnJheSBvZiBpbnRlZ2VycyAwLT4obiAtIDEpXG4gKi9cbmNvbnN0IHJhbmdlID0gbiA9PiB0aW1lcyhpID0+IGksIG4pO1xuXG4vKipcbiAqIFppcCAyIGFycmF5cyB0b2dldGhlciwgaS5lLiAoWzEsIDIsIDNdLCBbYSwgYiwgY10pID0+IFtbMSwgYV0sIFsyLCBiXSwgWzMsIGNdXVxuICogQHBhcmFtIHtBcnJheTwqPn0gYVxuICogQHBhcmFtIHtBcnJheTwqPn0gYlxuICogQHJldHVybiB7QXJyYXk8QXJyYXk8Kj4+fVxuICovXG5jb25zdCB6aXAgPSAoYSwgYikgPT4gYS5tYXAoKGssIGkpID0+IFtrLCBiW2ldXSk7XG5cbi8qKlxuICogUmV0dXJuIGFycmF5W2ldIHdpdGggcG9zaXRpdmUgYW5kIG5lZ2F0aXZlIHdyYXBwaW5nXG4gKiBAcGFyYW0ge0FycmF5PCo+fSBhXG4gKiBAcGFyYW0ge251bWJlcn0gaSBUaGUgcG9zaXRpdmVseS9uZWdhdGl2ZWx5IHdyYXBwZWQgYXJyYXkgaW5kZXhcbiAqIEByZXR1cm4geyp9IEFuIGVsZW1lbnQgZnJvbSB0aGUgYXJyYXlcbiAqL1xuY29uc3QgYXQgPSAoYSwgaSkgPT4gYVtpIDwgMCA/IGEubGVuZ3RoIC0gKE1hdGguYWJzKGkgKyAxKSAlIGEubGVuZ3RoKSAtIDEgOiBpICUgYS5sZW5ndGhdO1xuXG4vKipcbiAqIFJldHVybiB0aGUgbGFzdCBlbGVtZW50IG9mIGFuIGFycmF5IHdpdGhvdXQgcmVtb3ZpbmcgaXRcbiAqIEBwYXJhbSB7QXJyYXk8Kj59IGFcbiAqIEByZXR1cm4geyp9IFRoZSBsYXN0IGVsZW1lbnQgZnJvbSB0aGUgYXJyYXlcbiAqL1xuY29uc3QgcGVlayA9IChhKSA9PiB7XG4gIGlmICghYS5sZW5ndGgpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG5cbiAgcmV0dXJuIGFbYS5sZW5ndGggLSAxXTtcbn07XG5cbi8qKlxuICogQ2hvcCBhbiBhcnJheSBpbnRvIGNodW5rcyBvZiBzaXplIG5cbiAqIEBwYXJhbSB7QXJyYXk8Kj59IGFcbiAqIEBwYXJhbSB7bnVtYmVyfSBuIFRoZSBjaHVuayBzaXplXG4gKiBAcmV0dXJuIHtBcnJheTxBcnJheTwqPj59IEFuIGFycmF5IG9mIGFycmF5IGNodW5rc1xuICovXG5jb25zdCBjaHVuayA9IChhLCBuKSA9PiB0aW1lcyhpID0+IGEuc2xpY2UoaSAqIG4sIGkgKiBuICsgbiksIE1hdGguY2VpbChhLmxlbmd0aCAvIG4pKTtcblxuLyoqXG4gKiBSYW5kb21seSBzaHVmZmxlIGEgc2hhbGxvdyBjb3B5IG9mIGFuIGFycmF5XG4gKiBAcGFyYW0ge0FycmF5PCo+fSBhXG4gKiBAcmV0dXJuIHtBcnJheTwqPn0gVGhlIHNodWZmbGVkIGFycmF5XG4gKi9cbmNvbnN0IHNodWZmbGUgPSBhID0+IGEuc2xpY2UoKS5zb3J0KCgpID0+IE1hdGgucmFuZG9tKCkgLSAwLjUpO1xuXG4vKipcbiAqIEZsYXR0ZW4gYW4gb2JqZWN0XG4gKiBAcGFyYW0ge29iamVjdH0gb1xuICogQHBhcmFtIHtzdHJpbmd9IGNvbmNhdGVuYXRvciBUaGUgc3RyaW5nIHRvIHVzZSBmb3IgY29uY2F0ZW5hdGluZyBrZXlzXG4gKiBAcmV0dXJuIHtvYmplY3R9IEEgZmxhdHRlbmVkIG9iamVjdFxuICovXG5jb25zdCBmbGF0ID0gKG8sIGNvbmNhdGVuYXRvciA9ICcuJykgPT4ge1xuICByZXR1cm4gT2JqZWN0LmtleXMobykucmVkdWNlKChhY2MsIGtleSkgPT4ge1xuICAgIGlmIChvW2tleV0gaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5hY2MsXG4gICAgICAgIFtrZXldOiBvW2tleV0udG9JU09TdHJpbmcoKSxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBvW2tleV0gIT09ICdvYmplY3QnIHx8ICFvW2tleV0pIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLmFjYyxcbiAgICAgICAgW2tleV06IG9ba2V5XSxcbiAgICAgIH07XG4gICAgfVxuICAgIGNvbnN0IGZsYXR0ZW5lZCA9IGZsYXQob1trZXldLCBjb25jYXRlbmF0b3IpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLmFjYyxcbiAgICAgIC4uLk9iamVjdC5rZXlzKGZsYXR0ZW5lZCkucmVkdWNlKFxuICAgICAgICAoY2hpbGRBY2MsIGNoaWxkS2V5KSA9PiAoe1xuICAgICAgICAgIC4uLmNoaWxkQWNjLFxuICAgICAgICAgIFtgJHtrZXl9JHtjb25jYXRlbmF0b3J9JHtjaGlsZEtleX1gXTogZmxhdHRlbmVkW2NoaWxkS2V5XSxcbiAgICAgICAgfSksXG4gICAgICAgIHt9XG4gICAgICApLFxuICAgIH07XG4gIH0sIHt9KTtcbn07XG5cbi8qKlxuICogVW5mbGF0dGVuIGFuIG9iamVjdFxuICogQHBhcmFtIHtvYmplY3R9IG9cbiAqIEBwYXJhbSB7c3RyaW5nfSBjb25jYXRlbmF0b3IgVGhlIHN0cmluZyB0byBjaGVjayBmb3IgaW4gY29uY2F0ZW5hdGVkIGtleXNcbiAqIEByZXR1cm4ge29iamVjdH0gQW4gdW4tZmxhdHRlbmVkIG9iamVjdFxuICovXG5jb25zdCB1bmZsYXQgPSAobywgY29uY2F0ZW5hdG9yID0gJy4nKSA9PiB7XG4gIGxldCByZXN1bHQgPSB7fSwgdGVtcCwgc3Vic3RyaW5ncywgcHJvcGVydHksIGk7XG5cbiAgZm9yIChwcm9wZXJ0eSBpbiBvKSB7XG4gICAgc3Vic3RyaW5ncyA9IHByb3BlcnR5LnNwbGl0KGNvbmNhdGVuYXRvcik7XG4gICAgdGVtcCA9IHJlc3VsdDtcbiAgICBmb3IgKGkgPSAwOyBpIDwgc3Vic3RyaW5ncy5sZW5ndGggLSAxOyBpKyspIHtcbiAgICAgIGlmICghKHN1YnN0cmluZ3NbaV0gaW4gdGVtcCkpIHtcbiAgICAgICAgaWYgKGlzRmluaXRlKHN1YnN0cmluZ3NbaSArIDFdKSkge1xuICAgICAgICAgIHRlbXBbc3Vic3RyaW5nc1tpXV0gPSBbXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0ZW1wW3N1YnN0cmluZ3NbaV1dID0ge307XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRlbXAgPSB0ZW1wW3N1YnN0cmluZ3NbaV1dO1xuICAgIH1cbiAgICB0ZW1wW3N1YnN0cmluZ3Nbc3Vic3RyaW5ncy5sZW5ndGggLSAxXV0gPSBvW3Byb3BlcnR5XTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG4vKipcbiAqIEEgc3BsaXQgcHJlZGljYXRlXG4gKiBAY2FsbGJhY2sgU3BsaXRQcmVkaWNhdGVcbiAqIEBwYXJhbSB7YW55fSB2YWx1ZSBUaGUgY3VycmVudCB2YWx1ZVxuICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgYXJyYXkgc2hvdWxkIHNwbGl0IGF0IHRoaXMgaW5kZXhcbiAqL1xuXG4vKipcbiAqIFNwbGl0IGFuIGFycmF5IGludG8gc3ViLWFycmF5cyBiYXNlZCBvbiBhIHByZWRpY2F0ZVxuICogQHBhcmFtIHtBcnJheTwqPn0gYXJyYXlcbiAqIEBwYXJhbSB7U3BsaXRQcmVkaWNhdGV9IHByZWRpY2F0ZVxuICogQHJldHVybiB7QXJyYXk8QXJyYXk8Kj4+fSBBbiBhcnJheSBvZiBhcnJheXNcbiAqL1xuY29uc3Qgc3BsaXQgPSAoYXJyYXksIHByZWRpY2F0ZSkgPT4ge1xuICBjb25zdCByZXN1bHQgPSBbXTtcbiAgbGV0IGN1cnJlbnQgPSBbXTtcbiAgZm9yIChjb25zdCB2YWx1ZSBvZiBhcnJheSkge1xuICAgIGlmIChwcmVkaWNhdGUodmFsdWUpKSB7XG4gICAgICBpZiAoY3VycmVudC5sZW5ndGgpIHtcbiAgICAgICAgcmVzdWx0LnB1c2goY3VycmVudCk7XG4gICAgICB9XG4gICAgICBjdXJyZW50ID0gW3ZhbHVlXTtcbiAgICB9IGVsc2Uge1xuICAgICAgY3VycmVudC5wdXNoKHZhbHVlKTtcbiAgICB9XG4gIH1cbiAgcmVzdWx0LnB1c2goY3VycmVudCk7XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbi8qKlxuICogUGx1Y2sga2V5cyBmcm9tIGFuIG9iamVjdFxuICogQHBhcmFtIHtvYmplY3R9IG9cbiAqIEBwYXJhbSB7Li4uc3RyaW5nfSBrZXlzIFRoZSBrZXlzIHRvIHBsdWNrIGZyb20gdGhlIG9iamVjdFxuICogQHJldHVybiB7b2JqZWN0fSBBbiBvYmplY3QgY29udGFpbmluZyB0aGUgcGx1Y2tlZCBrZXlzXG4gKi9cbmNvbnN0IHBsdWNrID0gKG8sIC4uLmtleXMpID0+IHtcbiAgcmV0dXJuIGtleXMucmVkdWNlKFxuICAgIChyZXN1bHQsIGtleSkgPT4gT2JqZWN0LmFzc2lnbihyZXN1bHQsIHsgW2tleV06IG9ba2V5XSB9KSxcbiAgICB7fVxuICApO1xufTtcblxuLyoqXG4gKiBFeGNsdWRlIGtleXMgZnJvbSBhbiBvYmplY3RcbiAqIEBwYXJhbSB7b2JqZWN0fSBvXG4gKiBAcGFyYW0gey4uLnN0cmluZ30ga2V5cyBUaGUga2V5cyB0byBleGNsdWRlIGZyb20gdGhlIG9iamVjdFxuICogQHJldHVybiB7b2JqZWN0fSBBbiBvYmplY3QgY29udGFpbmluZyBhbGwga2V5cyBleGNlcHQgZXhjbHVkZWQga2V5c1xuICovXG5jb25zdCBleGNsdWRlID0gKG8sIC4uLmtleXMpID0+IHtcbiAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhcbiAgICBPYmplY3QuZW50cmllcyhvKS5maWx0ZXIoKFtrZXldKSA9PiAha2V5cy5pbmNsdWRlcyhrZXkpKVxuICApO1xufTtcblxuaWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnKSB7XG4gIG1vZHVsZS5leHBvcnRzID0ge1xuICAgIGZsb2F0RXF1YWxzLFxuICAgIGNsYW1wLFxuICAgIGZyYWMsXG4gICAgcm91bmQsXG4gICAgbGVycCxcbiAgICB1bmxlcnAsXG4gICAgYmxlcnAsXG4gICAgcmVtYXAsXG4gICAgc21vb3Roc3RlcCxcbiAgICByYWRpYW5zLFxuICAgIGRlZ3JlZXMsXG4gICAgcmFuZG9tQmV0d2VlbixcbiAgICByYW5kb21JbnRCZXR3ZWVuLFxuICAgIGNsdFJhbmRvbSxcbiAgICBjbHRSYW5kb21JbnQsXG4gICAgd2VpZ2h0ZWRSYW5kb20sXG4gICAgbGVycEFycmF5LFxuICAgIGRvdCxcbiAgICBmYWN0b3JpYWwsXG4gICAgbnByLFxuICAgIG5jcixcbiAgICBjb21iaW5hdGlvbnMsXG4gICAgY2FydGVzaWFuLFxuICAgIHRpbWVzLFxuICAgIHJhbmdlLFxuICAgIHppcCxcbiAgICBhdCxcbiAgICBwZWVrLFxuICAgIGNodW5rLFxuICAgIHNodWZmbGUsXG4gICAgZmxhdCxcbiAgICB1bmZsYXQsXG4gICAgc3BsaXQsXG4gICAgcGx1Y2ssXG4gICAgZXhjbHVkZSxcbiAgfTtcbn1cbiIsImNvbnN0IHsgdGltZXMsIGNodW5rLCBkb3QgfSA9IHJlcXVpcmUoJ0BiYXNlbWVudHVuaXZlcnNlL3V0aWxzJyk7XG5cbi8qKlxuICogQG92ZXJ2aWV3IEEgc21hbGwgdmVjdG9yIGFuZCBtYXRyaXggbGlicmFyeVxuICogQGF1dGhvciBHb3Jkb24gTGFycmlnYW5cbiAqL1xuXG4vKipcbiAqIEEgMmQgdmVjdG9yXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSB2ZWNcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSB4IFRoZSB4IGNvbXBvbmVudCBvZiB0aGUgdmVjdG9yXG4gKiBAcHJvcGVydHkge251bWJlcn0geSBUaGUgeSBjb21wb25lbnQgb2YgdGhlIHZlY3RvclxuICovXG5cbi8qKlxuICogQ3JlYXRlIGEgbmV3IHZlY3RvclxuICogQHBhcmFtIHtudW1iZXJ8dmVjfSBbeF0gVGhlIHggY29tcG9uZW50IG9mIHRoZSB2ZWN0b3IsIG9yIGEgdmVjdG9yIHRvIGNvcHlcbiAqIEBwYXJhbSB7bnVtYmVyfSBbeV0gVGhlIHkgY29tcG9uZW50IG9mIHRoZSB2ZWN0b3JcbiAqIEByZXR1cm4ge3ZlY30gQSBuZXcgdmVjdG9yXG4gKiBAZXhhbXBsZSA8Y2FwdGlvbj5WYXJpb3VzIHdheXMgdG8gaW5pdGlhbGlzZSBhIHZlY3RvcjwvY2FwdGlvbj5cbiAqIGxldCBhID0gdmVjKDMsIDIpOyAgLy8gKDMsIDIpXG4gKiBsZXQgYiA9IHZlYyg0KTsgICAgIC8vICg0LCA0KVxuICogbGV0IGMgPSB2ZWMoYSk7ICAgICAvLyAoMywgMilcbiAqIGxldCBkID0gdmVjKCk7ICAgICAgLy8gKDAsIDApXG4gKi9cbmNvbnN0IHZlYyA9ICh4LCB5KSA9PiAoIXggJiYgIXkgP1xuICB7IHg6IDAsIHk6IDAgfSA6ICh0eXBlb2YgeCA9PT0gJ29iamVjdCcgP1xuICAgIHsgeDogeC54IHx8IDAsIHk6IHgueSB8fCAwIH0gOiAoeSA9PT0gbnVsbCB8fCB5ID09PSB1bmRlZmluZWQgP1xuICAgICAgeyB4OiB4LCB5OiB4IH0gOiB7IHg6IHgsIHk6IHkgfSlcbiAgKVxuKTtcblxuLyoqXG4gKiBHZXQgdGhlIGNvbXBvbmVudHMgb2YgYSB2ZWN0b3IgYXMgYW4gYXJyYXlcbiAqIEBwYXJhbSB7dmVjfSBhIFRoZSB2ZWN0b3IgdG8gZ2V0IGNvbXBvbmVudHMgZnJvbVxuICogQHJldHVybiB7QXJyYXk8bnVtYmVyPn0gVGhlIHZlY3RvciBjb21wb25lbnRzIGFzIGFuIGFycmF5XG4gKi9cbnZlYy5jb21wb25lbnRzID0gYSA9PiBbYS54LCBhLnldO1xuXG4vKipcbiAqIFJldHVybiBhIHVuaXQgdmVjdG9yICgxLCAwKVxuICogQHJldHVybiB7dmVjfSBBIHVuaXQgdmVjdG9yICgxLCAwKVxuICovXG52ZWMudXggPSAoKSA9PiB2ZWMoMSwgMCk7XG5cbi8qKlxuICogUmV0dXJuIGEgdW5pdCB2ZWN0b3IgKDAsIDEpXG4gKiBAcmV0dXJuIHt2ZWN9IEEgdW5pdCB2ZWN0b3IgKDAsIDEpXG4gKi9cbnZlYy51eSA9ICgpID0+IHZlYygwLCAxKTtcblxuLyoqXG4gKiBBZGQgdmVjdG9yc1xuICogQHBhcmFtIHt2ZWN9IGEgVmVjdG9yIGFcbiAqIEBwYXJhbSB7dmVjfSBiIFZlY3RvciBiXG4gKiBAcmV0dXJuIHt2ZWN9IGEgKyBiXG4gKi9cbnZlYy5hZGQgPSAoYSwgYikgPT4gKHsgeDogYS54ICsgYi54LCB5OiBhLnkgKyBiLnkgfSk7XG5cbi8qKlxuICogU2NhbGUgYSB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjfSBhIFZlY3RvciBhXG4gKiBAcGFyYW0ge251bWJlcn0gYiBTY2FsYXIgYlxuICogQHJldHVybiB7dmVjfSBhICogYlxuICovXG52ZWMubXVsID0gKGEsIGIpID0+ICh7IHg6IGEueCAqIGIsIHk6IGEueSAqIGIgfSk7XG5cbi8qKlxuICogU3VidHJhY3QgdmVjdG9yc1xuICogQHBhcmFtIHt2ZWN9IGEgVmVjdG9yIGFcbiAqIEBwYXJhbSB7dmVjfSBiIFZlY3RvciBiXG4gKiBAcmV0dXJuIHt2ZWN9IGEgLSBiXG4gKi9cbnZlYy5zdWIgPSAoYSwgYikgPT4gKHsgeDogYS54IC0gYi54LCB5OiBhLnkgLSBiLnkgfSk7XG5cbi8qKlxuICogR2V0IHRoZSBsZW5ndGggb2YgYSB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjfSBhIFZlY3RvciBhXG4gKiBAcmV0dXJuIHtudW1iZXJ9IHxhfFxuICovXG52ZWMubGVuID0gYSA9PiBNYXRoLnNxcnQoYS54ICogYS54ICsgYS55ICogYS55KTtcblxuLyoqXG4gKiBHZXQgdGhlIGxlbmd0aCBvZiBhIHZlY3RvciB1c2luZyB0YXhpY2FiIGdlb21ldHJ5XG4gKiBAcGFyYW0ge3ZlY30gYSBWZWN0b3IgYVxuICogQHJldHVybiB7bnVtYmVyfSB8YXxcbiAqL1xudmVjLm1hbmhhdHRhbiA9IGEgPT4gTWF0aC5hYnMoYS54KSArIE1hdGguYWJzKGEueSk7XG5cbi8qKlxuICogTm9ybWFsaXNlIGEgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlY30gYSBUaGUgdmVjdG9yIHRvIG5vcm1hbGlzZVxuICogQHJldHVybiB7dmVjfSBeYVxuICovXG52ZWMubm9yID0gYSA9PiB7XG4gIGxldCBsZW4gPSB2ZWMubGVuKGEpO1xuICByZXR1cm4gbGVuID8geyB4OiBhLnggLyBsZW4sIHk6IGEueSAvIGxlbiB9IDogdmVjKCk7XG59O1xuXG4vKipcbiAqIEdldCBhIGRvdCBwcm9kdWN0IG9mIHZlY3RvcnNcbiAqIEBwYXJhbSB7dmVjfSBhIFZlY3RvciBhXG4gKiBAcGFyYW0ge3ZlY30gYiBWZWN0b3IgYlxuICogQHJldHVybiB7bnVtYmVyfSBhIOKImSBiXG4gKi9cbnZlYy5kb3QgPSAoYSwgYikgPT4gYS54ICogYi54ICsgYS55ICogYi55O1xuXG4vKipcbiAqIFJvdGF0ZSBhIHZlY3RvciBieSByIHJhZGlhbnNcbiAqIEBwYXJhbSB7dmVjfSBhIFRoZSB2ZWN0b3IgdG8gcm90YXRlXG4gKiBAcGFyYW0ge251bWJlcn0gciBUaGUgYW5nbGUgdG8gcm90YXRlIGJ5LCBtZWFzdXJlZCBpbiByYWRpYW5zXG4gKiBAcmV0dXJuIHt2ZWN9IEEgcm90YXRlZCB2ZWN0b3JcbiAqL1xudmVjLnJvdCA9IChhLCByKSA9PiB7XG4gIGxldCBzID0gTWF0aC5zaW4ociksXG4gICAgYyA9IE1hdGguY29zKHIpO1xuICByZXR1cm4geyB4OiBjICogYS54IC0gcyAqIGEueSwgeTogcyAqIGEueCArIGMgKiBhLnkgfTtcbn1cblxuLyoqXG4gKiBDaGVjayBpZiB0d28gdmVjdG9ycyBhcmUgZXF1YWxcbiAqIEBwYXJhbSB7dmVjfSBhIFZlY3RvciBhXG4gKiBAcGFyYW0ge3ZlY30gYiBWZWN0b3IgYlxuICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiB2ZWN0b3JzIGEgYW5kIGIgYXJlIGVxdWFsLCBmYWxzZSBvdGhlcndpc2VcbiAqL1xudmVjLmVxID0gKGEsIGIpID0+IGEueCA9PT0gYi54ICYmIGEueSA9PT0gYi55O1xuXG4vKipcbiAqIEdldCB0aGUgYW5nbGUgb2YgYSB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjfSBhIFZlY3RvciBhXG4gKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBhbmdsZSBvZiB2ZWN0b3IgYSBpbiByYWRpYW5zXG4gKi9cbnZlYy5yYWQgPSBhID0+IE1hdGguYXRhbjIoYS55LCBhLngpO1xuXG4vKipcbiAqIENvcHkgYSB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjfSBhIFRoZSB2ZWN0b3IgdG8gY29weVxuICogQHJldHVybiB7dmVjfSBBIGNvcHkgb2YgdmVjdG9yIGFcbiAqL1xudmVjLmNweSA9IGEgPT4gdmVjKGEpO1xuXG4vKipcbiAqIEEgZnVuY3Rpb24gdG8gY2FsbCBvbiBlYWNoIGNvbXBvbmVudCBvZiBhIHZlY3RvclxuICogQGNhbGxiYWNrIHZlY3Rvck1hcENhbGxiYWNrXG4gKiBAcGFyYW0ge251bWJlcn0gdmFsdWUgVGhlIGNvbXBvbmVudCB2YWx1ZVxuICogQHBhcmFtIHsneCcgfCAneSd9IGxhYmVsIFRoZSBjb21wb25lbnQgbGFiZWwgKHggb3IgeSlcbiAqIEByZXR1cm4ge251bWJlcn0gVGhlIG1hcHBlZCBjb21wb25lbnRcbiAqL1xuXG4vKipcbiAqIENhbGwgYSBmdW5jdGlvbiBvbiBlYWNoIGNvbXBvbmVudCBvZiBhIHZlY3RvciBhbmQgYnVpbGQgYSBuZXcgdmVjdG9yIGZyb20gdGhlIHJlc3VsdHNcbiAqIEBwYXJhbSB7dmVjfSBhIFZlY3RvciBhXG4gKiBAcGFyYW0ge3ZlY3Rvck1hcENhbGxiYWNrfSBmIFRoZSBmdW5jdGlvbiB0byBjYWxsIG9uIGVhY2ggY29tcG9uZW50IG9mIHRoZSB2ZWN0b3JcbiAqIEByZXR1cm4ge3ZlY30gVmVjdG9yIGEgbWFwcGVkIHRocm91Z2ggZlxuICovXG52ZWMubWFwID0gKGEsIGYpID0+ICh7IHg6IGYoYS54LCAneCcpLCB5OiBmKGEueSwgJ3knKSB9KTtcblxuLyoqXG4gKiBDb252ZXJ0IGEgdmVjdG9yIGludG8gYSBzdHJpbmdcbiAqIEBwYXJhbSB7dmVjfSBhIFRoZSB2ZWN0b3IgdG8gY29udmVydFxuICogQHBhcmFtIHtzdHJpbmd9IFtzPScsICddIFRoZSBzZXBhcmF0b3Igc3RyaW5nXG4gKiBAcmV0dXJuIHtzdHJpbmd9IEEgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSB2ZWN0b3JcbiAqL1xudmVjLnN0ciA9IChhLCBzID0gJywgJykgPT4gYCR7YS54fSR7c30ke2EueX1gO1xuXG4vKipcbiAqIEEgbWF0cml4XG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBtYXRcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBtIFRoZSBudW1iZXIgb2Ygcm93cyBpbiB0aGUgbWF0cml4XG4gKiBAcHJvcGVydHkge251bWJlcn0gbiBUaGUgbnVtYmVyIG9mIGNvbHVtbnMgaW4gdGhlIG1hdHJpeFxuICogQHByb3BlcnR5IHtBcnJheTxudW1iZXI+fSBlbnRyaWVzIFRoZSBtYXRyaXggdmFsdWVzXG4gKi9cblxuLyoqXG4gKiBDcmVhdGUgYSBuZXcgbWF0cml4XG4gKiBAcGFyYW0ge251bWJlcn0gW209NF0gVGhlIG51bWJlciBvZiByb3dzXG4gKiBAcGFyYW0ge251bWJlcn0gW249NF0gVGhlIG51bWJlciBvZiBjb2x1bW5zXG4gKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IFtlbnRyaWVzPVtdXSBNYXRyaXggdmFsdWVzIGluIHJlYWRpbmcgb3JkZXJcbiAqIEByZXR1cm4ge21hdH0gQSBuZXcgbWF0cml4XG4gKi9cbmNvbnN0IG1hdCA9IChtID0gNCwgbiA9IDQsIGVudHJpZXMgPSBbXSkgPT4gKHtcbiAgbSwgbixcbiAgZW50cmllczogZW50cmllcy5jb25jYXQoQXJyYXkobSAqIG4pLmZpbGwoMCkpLnNsaWNlKDAsIG0gKiBuKVxufSk7XG5cbi8qKlxuICogR2V0IGFuIGlkZW50aXR5IG1hdHJpeCBvZiBzaXplIG5cbiAqIEBwYXJhbSB7bnVtYmVyfSBuIFRoZSBzaXplIG9mIHRoZSBtYXRyaXhcbiAqIEByZXR1cm4ge21hdH0gQW4gaWRlbnRpdHkgbWF0cml4XG4gKi9cbm1hdC5pZGVudGl0eSA9IG4gPT4gbWF0KG4sIG4sIEFycmF5KG4gKiBuKS5maWxsKDApLm1hcCgodiwgaSkgPT4gKyhNYXRoLmZsb29yKGkgLyBuKSA9PT0gaSAlIG4pKSk7XG5cbi8qKlxuICogR2V0IGFuIGVudHJ5IGZyb20gYSBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0fSBhIE1hdHJpeCBhXG4gKiBAcGFyYW0ge251bWJlcn0gaSBUaGUgcm93IG9mZnNldFxuICogQHBhcmFtIHtudW1iZXJ9IGogVGhlIGNvbHVtbiBvZmZzZXRcbiAqIEByZXR1cm4ge251bWJlcn0gVGhlIHZhbHVlIGF0IHBvc2l0aW9uIChpLCBqKSBpbiBtYXRyaXggYVxuICovXG5tYXQuZ2V0ID0gKGEsIGksIGopID0+IGEuZW50cmllc1soaiAtIDEpICsgKGkgLSAxKSAqIGEubl07XG5cbi8qKlxuICogU2V0IGFuIGVudHJ5IG9mIGEgbWF0cml4XG4gKiBAcGFyYW0ge21hdH0gYSBNYXRyaXggYVxuICogQHBhcmFtIHtudW1iZXJ9IGkgVGhlIHJvdyBvZmZzZXRcbiAqIEBwYXJhbSB7bnVtYmVyfSBqIFRoZSBjb2x1bW4gb2Zmc2V0XG4gKiBAcGFyYW0ge251bWJlcn0gdiBUaGUgdmFsdWUgdG8gc2V0IGluIG1hdHJpeCBhXG4gKi9cbm1hdC5zZXQgPSAoYSwgaSwgaiwgdikgPT4geyBhLmVudHJpZXNbKGogLSAxKSArIChpIC0gMSkgKiBhLm5dID0gdjsgfTtcblxuLyoqXG4gKiBHZXQgYSByb3cgZnJvbSBhIG1hdHJpeCBhcyBhbiBhcnJheVxuICogQHBhcmFtIHttYXR9IGEgTWF0cml4IGFcbiAqIEBwYXJhbSB7bnVtYmVyfSBtIFRoZSByb3cgb2Zmc2V0XG4gKiBAcmV0dXJuIHtBcnJheTxudW1iZXI+fSBSb3cgbSBmcm9tIG1hdHJpeCBhXG4gKi9cbm1hdC5yb3cgPSAoYSwgbSkgPT4ge1xuICBjb25zdCBzID0gKG0gLSAxKSAqIGEubjtcbiAgcmV0dXJuIGEuZW50cmllcy5zbGljZShzLCBzICsgYS5uKTtcbn07XG5cbi8qKlxuICogR2V0IGEgY29sdW1uIGZyb20gYSBtYXRyaXggYXMgYW4gYXJyYXlcbiAqIEBwYXJhbSB7bWF0fSBhIE1hdHJpeCBhXG4gKiBAcGFyYW0ge251bWJlcn0gbiBUaGUgY29sdW1uIG9mZnNldFxuICogQHJldHVybiB7QXJyYXk8bnVtYmVyPn0gQ29sdW1uIG4gZnJvbSBtYXRyaXggYVxuICovXG5tYXQuY29sID0gKGEsIG4pID0+IHRpbWVzKGkgPT4gbWF0LmdldChhLCAoaSArIDEpLCBuKSwgYS5tKTtcblxuLyoqXG4gKiBBZGQgbWF0cmljZXNcbiAqIEBwYXJhbSB7bWF0fSBhIE1hdHJpeCBhXG4gKiBAcGFyYW0ge21hdH0gYiBNYXRyaXggYlxuICogQHJldHVybiB7bWF0fSBhICsgYlxuICovXG5tYXQuYWRkID0gKGEsIGIpID0+IGEubSA9PT0gYi5tICYmIGEubiA9PT0gYi5uICYmIG1hdC5tYXAoYSwgKHYsIGkpID0+IHYgKyBiLmVudHJpZXNbaV0pO1xuXG4vKipcbiAqIFN1YnRyYWN0IG1hdHJpY2VzXG4gKiBAcGFyYW0ge21hdH0gYSBNYXRyaXggYVxuICogQHBhcmFtIHttYXR9IGIgTWF0cml4IGJcbiAqIEByZXR1cm4ge21hdH0gYSAtIGJcbiAqL1xubWF0LnN1YiA9IChhLCBiKSA9PiBhLm0gPT09IGIubSAmJiBhLm4gPT09IGIubiAmJiBtYXQubWFwKGEsICh2LCBpKSA9PiB2IC0gYi5lbnRyaWVzW2ldKTtcblxuLyoqXG4gKiBNdWx0aXBseSBtYXRyaWNlc1xuICogQHBhcmFtIHttYXR9IGEgTWF0cml4IGFcbiAqIEBwYXJhbSB7bWF0fSBiIE1hdHJpeCBiXG4gKiBAcmV0dXJuIHttYXR8Ym9vbGVhbn0gYWIgb3IgZmFsc2UgaWYgdGhlIG1hdHJpY2VzIGNhbm5vdCBiZSBtdWx0aXBsaWVkXG4gKi9cbm1hdC5tdWwgPSAoYSwgYikgPT4ge1xuICBpZiAoYS5uICE9PSBiLm0pIHsgcmV0dXJuIGZhbHNlOyB9XG4gIGNvbnN0IHJlc3VsdCA9IG1hdChhLm0sIGIubik7XG4gIGZvciAobGV0IGkgPSAxOyBpIDw9IGEubTsgaSsrKSB7XG4gICAgZm9yIChsZXQgaiA9IDE7IGogPD0gYi5uOyBqKyspIHtcbiAgICAgIG1hdC5zZXQocmVzdWx0LCBpLCBqLCBkb3QobWF0LnJvdyhhLCBpKSwgbWF0LmNvbChiLCBqKSkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuLyoqXG4gKiBTY2FsZSBhIG1hdHJpeFxuICogQHBhcmFtIHttYXR9IGEgTWF0cml4IGFcbiAqIEBwYXJhbSB7bnVtYmVyfSBiIFNjYWxhciBiXG4gKiBAcmV0dXJuIHttYXR9IGEgKiBiXG4gKi9cbm1hdC5zY2FsZSA9IChhLCBiKSA9PiBtYXQubWFwKGEsIHYgPT4gdiAqIGIpO1xuXG4vKipcbiAqIFRyYW5zcG9zZSBhIG1hdHJpeFxuICogQHBhcmFtIHttYXR9IGEgVGhlIG1hdHJpeCB0byB0cmFuc3Bvc2VcbiAqIEByZXR1cm4ge21hdH0gQSB0cmFuc3Bvc2VkIG1hdHJpeFxuICovXG5tYXQudHJhbnMgPSBhID0+IG1hdChhLm4sIGEubSwgdGltZXMoaSA9PiBtYXQuY29sKGEsIChpICsgMSkpLCBhLm4pLmZsYXQoKSk7XG5cbi8qKlxuICogR2V0IHRoZSBtaW5vciBvZiBhIG1hdHJpeFxuICogQHBhcmFtIHttYXR9IGEgTWF0cml4IGFcbiAqIEBwYXJhbSB7bnVtYmVyfSBpIFRoZSByb3cgb2Zmc2V0XG4gKiBAcGFyYW0ge251bWJlcn0gaiBUaGUgY29sdW1uIG9mZnNldFxuICogQHJldHVybiB7bWF0fGJvb2xlYW59IFRoZSAoaSwgaikgbWlub3Igb2YgbWF0cml4IGEgb3IgZmFsc2UgaWYgdGhlIG1hdHJpeCBpcyBub3Qgc3F1YXJlXG4gKi9cbm1hdC5taW5vciA9IChhLCBpLCBqKSA9PiB7XG4gIGlmIChhLm0gIT09IGEubikgeyByZXR1cm4gZmFsc2U7IH1cbiAgY29uc3QgZW50cmllcyA9IFtdO1xuICBmb3IgKGxldCBpaSA9IDE7IGlpIDw9IGEubTsgaWkrKykge1xuICAgIGlmIChpaSA9PT0gaSkgeyBjb250aW51ZTsgfVxuICAgIGZvciAobGV0IGpqID0gMTsgamogPD0gYS5uOyBqaisrKSB7XG4gICAgICBpZiAoamogPT09IGopIHsgY29udGludWU7IH1cbiAgICAgIGVudHJpZXMucHVzaChtYXQuZ2V0KGEsIGlpLCBqaikpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbWF0KGEubSAtIDEsIGEubiAtIDEsIGVudHJpZXMpO1xufTtcblxuLyoqXG4gKiBHZXQgdGhlIGRldGVybWluYW50IG9mIGEgbWF0cml4XG4gKiBAcGFyYW0ge21hdH0gYSBNYXRyaXggYVxuICogQHJldHVybiB7bnVtYmVyfGJvb2xlYW59IHxhfCBvciBmYWxzZSBpZiB0aGUgbWF0cml4IGlzIG5vdCBzcXVhcmVcbiAqL1xubWF0LmRldCA9IGEgPT4ge1xuICBpZiAoYS5tICE9PSBhLm4pIHsgcmV0dXJuIGZhbHNlOyB9XG4gIGlmIChhLm0gPT09IDEpIHtcbiAgICByZXR1cm4gYS5lbnRyaWVzWzBdO1xuICB9XG4gIGlmIChhLm0gPT09IDIpIHtcbiAgICByZXR1cm4gYS5lbnRyaWVzWzBdICogYS5lbnRyaWVzWzNdIC0gYS5lbnRyaWVzWzFdICogYS5lbnRyaWVzWzJdO1xuICB9XG4gIGxldCB0b3RhbCA9IDAsIHNpZ24gPSAxO1xuICBmb3IgKGxldCBqID0gMTsgaiA8PSBhLm47IGorKykge1xuICAgIHRvdGFsICs9IHNpZ24gKiBhLmVudHJpZXNbaiAtIDFdICogbWF0LmRldChtYXQubWlub3IoYSwgMSwgaikpO1xuICAgIHNpZ24gKj0gLTE7XG4gIH1cbiAgcmV0dXJuIHRvdGFsO1xufTtcblxuLyoqXG4gKiBOb3JtYWxpc2UgYSBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0fSBhIFRoZSBtYXRyaXggdG8gbm9ybWFsaXNlXG4gKiBAcmV0dXJuIHttYXR8Ym9vbGVhbn0gXmEgb3IgZmFsc2UgaWYgdGhlIG1hdHJpeCBpcyBub3Qgc3F1YXJlXG4gKi9cbm1hdC5ub3IgPSBhID0+IHtcbiAgaWYgKGEubSAhPT0gYS5uKSB7IHJldHVybiBmYWxzZTsgfVxuICBjb25zdCBkID0gbWF0LmRldChhKTtcbiAgcmV0dXJuIG1hdC5tYXAoYSwgaSA9PiBpICogZCk7XG59O1xuXG4vKipcbiAqIEdldCB0aGUgYWRqdWdhdGUgb2YgYSBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0fSBhIFRoZSBtYXRyaXggZnJvbSB3aGljaCB0byBnZXQgdGhlIGFkanVnYXRlXG4gKiBAcmV0dXJuIHttYXR9IFRoZSBhZGp1Z2F0ZSBvZiBhXG4gKi9cbm1hdC5hZGogPSBhID0+IHtcbiAgY29uc3QgbWlub3JzID0gbWF0KGEubSwgYS5uKTtcbiAgZm9yIChsZXQgaSA9IDE7IGkgPD0gYS5tOyBpKyspIHtcbiAgICBmb3IgKGxldCBqID0gMTsgaiA8PSBhLm47IGorKykge1xuICAgICAgbWF0LnNldChtaW5vcnMsIGksIGosIG1hdC5kZXQobWF0Lm1pbm9yKGEsIGksIGopKSk7XG4gICAgfVxuICB9XG4gIGNvbnN0IGNvZmFjdG9ycyA9IG1hdC5tYXAobWlub3JzLCAodiwgaSkgPT4gdiAqIChpICUgMiA/IC0xIDogMSkpO1xuICByZXR1cm4gbWF0LnRyYW5zKGNvZmFjdG9ycyk7XG59O1xuXG4vKipcbiAqIEdldCB0aGUgaW52ZXJzZSBvZiBhIG1hdHJpeFxuICogQHBhcmFtIHttYXR9IGEgVGhlIG1hdHJpeCB0byBpbnZlcnRcbiAqIEByZXR1cm4ge21hdHxib29sZWFufSBhXi0xIG9yIGZhbHNlIGlmIHRoZSBtYXRyaXggaGFzIG5vIGludmVyc2VcbiAqL1xubWF0LmludiA9IGEgPT4ge1xuICBpZiAoYS5tICE9PSBhLm4pIHsgcmV0dXJuIGZhbHNlOyB9XG4gIGNvbnN0IGQgPSBtYXQuZGV0KGEpO1xuICBpZiAoZCA9PT0gMCkgeyByZXR1cm4gZmFsc2U7IH1cbiAgcmV0dXJuIG1hdC5zY2FsZShtYXQuYWRqKGEpLCAxIC8gZCk7XG59O1xuXG4vKipcbiAqIENoZWNrIGlmIHR3byBtYXRyaWNlcyBhcmUgZXF1YWxcbiAqIEBwYXJhbSB7bWF0fSBhIE1hdHJpeCBhXG4gKiBAcGFyYW0ge21hdH0gYiBNYXRyaXggYlxuICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiBtYXRyaWNlcyBhIGFuZCBiIGFyZSBpZGVudGljYWwsIGZhbHNlIG90aGVyd2lzZVxuICovXG5tYXQuZXEgPSAoYSwgYikgPT4gYS5tID09PSBiLm0gJiYgYS5uID09PSBiLm4gJiYgbWF0LnN0cihhKSA9PT0gbWF0LnN0cihiKTtcblxuLyoqXG4gKiBDb3B5IGEgbWF0cml4XG4gKiBAcGFyYW0ge21hdH0gYSBUaGUgbWF0cml4IHRvIGNvcHlcbiAqIEByZXR1cm4ge21hdH0gQSBjb3B5IG9mIG1hdHJpeCBhXG4gKi9cbm1hdC5jcHkgPSBhID0+IG1hdChhLm0sIGEubiwgWy4uLmEuZW50cmllc10pO1xuXG4vKipcbiAqIEEgZnVuY3Rpb24gdG8gY2FsbCBvbiBlYWNoIGVudHJ5IG9mIGEgbWF0cml4XG4gKiBAY2FsbGJhY2sgbWF0cml4TWFwQ2FsbGJhY2tcbiAqIEBwYXJhbSB7bnVtYmVyfSB2YWx1ZSBUaGUgZW50cnkgdmFsdWVcbiAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCBUaGUgZW50cnkgaW5kZXhcbiAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0gZW50cmllcyBUaGUgYXJyYXkgb2YgbWF0cml4IGVudHJpZXNcbiAqIEByZXR1cm4ge251bWJlcn0gVGhlIG1hcHBlZCBlbnRyeVxuICovXG5cbi8qKlxuICogQ2FsbCBhIGZ1bmN0aW9uIG9uIGVhY2ggZW50cnkgb2YgYSBtYXRyaXggYW5kIGJ1aWxkIGEgbmV3IG1hdHJpeCBmcm9tIHRoZSByZXN1bHRzXG4gKiBAcGFyYW0ge21hdH0gYSBNYXRyaXggYVxuICogQHBhcmFtIHttYXRyaXhNYXBDYWxsYmFja30gZiBUaGUgZnVuY3Rpb24gdG8gY2FsbCBvbiBlYWNoIGVudHJ5IG9mIHRoZSBtYXRyaXhcbiAqIEByZXR1cm4ge21hdH0gTWF0cml4IGEgbWFwcGVkIHRocm91Z2ggZlxuICovXG5tYXQubWFwID0gKGEsIGYpID0+IG1hdChhLm0sIGEubiwgYS5lbnRyaWVzLm1hcChmKSk7XG5cbi8qKlxuICogQ29udmVydCBhIG1hdHJpeCBpbnRvIGEgc3RyaW5nXG4gKiBAcGFyYW0ge21hdH0gYSBUaGUgbWF0cml4IHRvIGNvbnZlcnRcbiAqIEBwYXJhbSB7c3RyaW5nfSBbbXM9JywgJ10gVGhlIHNlcGFyYXRvciBzdHJpbmcgZm9yIGNvbHVtbnNcbiAqIEBwYXJhbSB7c3RyaW5nfSBbbnM9J1xcbiddIFRoZSBzZXBhcmF0b3Igc3RyaW5nIGZvciByb3dzXG4gKiBAcmV0dXJuIHtzdHJpbmd9IEEgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBtYXRyaXhcbiAqL1xubWF0LnN0ciA9IChhLCBtcyA9ICcsICcsIG5zID0gJ1xcbicpID0+IGNodW5rKGEuZW50cmllcywgYS5uKS5tYXAociA9PiByLmpvaW4obXMpKS5qb2luKG5zKTtcblxuaWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnKSB7XG4gIG1vZHVsZS5leHBvcnRzID0geyB2ZWMsIG1hdCB9O1xufVxuIiwiLyoqXG4gKiBkYXQtZ3VpIEphdmFTY3JpcHQgQ29udHJvbGxlciBMaWJyYXJ5XG4gKiBodHRwczovL2dpdGh1Yi5jb20vZGF0YWFydHMvZGF0Lmd1aVxuICpcbiAqIENvcHlyaWdodCAyMDExIERhdGEgQXJ0cyBUZWFtLCBHb29nbGUgQ3JlYXRpdmUgTGFiXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICovXG5cbmZ1bmN0aW9uIF9fXyRpbnNlcnRTdHlsZShjc3MpIHtcbiAgaWYgKCFjc3MpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcblxuICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dC9jc3MnKTtcbiAgc3R5bGUuaW5uZXJIVE1MID0gY3NzO1xuICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHN0eWxlKTtcblxuICByZXR1cm4gY3NzO1xufVxuXG5mdW5jdGlvbiBjb2xvclRvU3RyaW5nIChjb2xvciwgZm9yY2VDU1NIZXgpIHtcbiAgdmFyIGNvbG9yRm9ybWF0ID0gY29sb3IuX19zdGF0ZS5jb252ZXJzaW9uTmFtZS50b1N0cmluZygpO1xuICB2YXIgciA9IE1hdGgucm91bmQoY29sb3Iucik7XG4gIHZhciBnID0gTWF0aC5yb3VuZChjb2xvci5nKTtcbiAgdmFyIGIgPSBNYXRoLnJvdW5kKGNvbG9yLmIpO1xuICB2YXIgYSA9IGNvbG9yLmE7XG4gIHZhciBoID0gTWF0aC5yb3VuZChjb2xvci5oKTtcbiAgdmFyIHMgPSBjb2xvci5zLnRvRml4ZWQoMSk7XG4gIHZhciB2ID0gY29sb3Iudi50b0ZpeGVkKDEpO1xuICBpZiAoZm9yY2VDU1NIZXggfHwgY29sb3JGb3JtYXQgPT09ICdUSFJFRV9DSEFSX0hFWCcgfHwgY29sb3JGb3JtYXQgPT09ICdTSVhfQ0hBUl9IRVgnKSB7XG4gICAgdmFyIHN0ciA9IGNvbG9yLmhleC50b1N0cmluZygxNik7XG4gICAgd2hpbGUgKHN0ci5sZW5ndGggPCA2KSB7XG4gICAgICBzdHIgPSAnMCcgKyBzdHI7XG4gICAgfVxuICAgIHJldHVybiAnIycgKyBzdHI7XG4gIH0gZWxzZSBpZiAoY29sb3JGb3JtYXQgPT09ICdDU1NfUkdCJykge1xuICAgIHJldHVybiAncmdiKCcgKyByICsgJywnICsgZyArICcsJyArIGIgKyAnKSc7XG4gIH0gZWxzZSBpZiAoY29sb3JGb3JtYXQgPT09ICdDU1NfUkdCQScpIHtcbiAgICByZXR1cm4gJ3JnYmEoJyArIHIgKyAnLCcgKyBnICsgJywnICsgYiArICcsJyArIGEgKyAnKSc7XG4gIH0gZWxzZSBpZiAoY29sb3JGb3JtYXQgPT09ICdIRVgnKSB7XG4gICAgcmV0dXJuICcweCcgKyBjb2xvci5oZXgudG9TdHJpbmcoMTYpO1xuICB9IGVsc2UgaWYgKGNvbG9yRm9ybWF0ID09PSAnUkdCX0FSUkFZJykge1xuICAgIHJldHVybiAnWycgKyByICsgJywnICsgZyArICcsJyArIGIgKyAnXSc7XG4gIH0gZWxzZSBpZiAoY29sb3JGb3JtYXQgPT09ICdSR0JBX0FSUkFZJykge1xuICAgIHJldHVybiAnWycgKyByICsgJywnICsgZyArICcsJyArIGIgKyAnLCcgKyBhICsgJ10nO1xuICB9IGVsc2UgaWYgKGNvbG9yRm9ybWF0ID09PSAnUkdCX09CSicpIHtcbiAgICByZXR1cm4gJ3tyOicgKyByICsgJyxnOicgKyBnICsgJyxiOicgKyBiICsgJ30nO1xuICB9IGVsc2UgaWYgKGNvbG9yRm9ybWF0ID09PSAnUkdCQV9PQkonKSB7XG4gICAgcmV0dXJuICd7cjonICsgciArICcsZzonICsgZyArICcsYjonICsgYiArICcsYTonICsgYSArICd9JztcbiAgfSBlbHNlIGlmIChjb2xvckZvcm1hdCA9PT0gJ0hTVl9PQkonKSB7XG4gICAgcmV0dXJuICd7aDonICsgaCArICcsczonICsgcyArICcsdjonICsgdiArICd9JztcbiAgfSBlbHNlIGlmIChjb2xvckZvcm1hdCA9PT0gJ0hTVkFfT0JKJykge1xuICAgIHJldHVybiAne2g6JyArIGggKyAnLHM6JyArIHMgKyAnLHY6JyArIHYgKyAnLGE6JyArIGEgKyAnfSc7XG4gIH1cbiAgcmV0dXJuICd1bmtub3duIGZvcm1hdCc7XG59XG5cbnZhciBBUlJfRUFDSCA9IEFycmF5LnByb3RvdHlwZS5mb3JFYWNoO1xudmFyIEFSUl9TTElDRSA9IEFycmF5LnByb3RvdHlwZS5zbGljZTtcbnZhciBDb21tb24gPSB7XG4gIEJSRUFLOiB7fSxcbiAgZXh0ZW5kOiBmdW5jdGlvbiBleHRlbmQodGFyZ2V0KSB7XG4gICAgdGhpcy5lYWNoKEFSUl9TTElDRS5jYWxsKGFyZ3VtZW50cywgMSksIGZ1bmN0aW9uIChvYmopIHtcbiAgICAgIHZhciBrZXlzID0gdGhpcy5pc09iamVjdChvYmopID8gT2JqZWN0LmtleXMob2JqKSA6IFtdO1xuICAgICAga2V5cy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzVW5kZWZpbmVkKG9ialtrZXldKSkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gb2JqW2tleV07XG4gICAgICAgIH1cbiAgICAgIH0uYmluZCh0aGlzKSk7XG4gICAgfSwgdGhpcyk7XG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfSxcbiAgZGVmYXVsdHM6IGZ1bmN0aW9uIGRlZmF1bHRzKHRhcmdldCkge1xuICAgIHRoaXMuZWFjaChBUlJfU0xJQ0UuY2FsbChhcmd1bWVudHMsIDEpLCBmdW5jdGlvbiAob2JqKSB7XG4gICAgICB2YXIga2V5cyA9IHRoaXMuaXNPYmplY3Qob2JqKSA/IE9iamVjdC5rZXlzKG9iaikgOiBbXTtcbiAgICAgIGtleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIGlmICh0aGlzLmlzVW5kZWZpbmVkKHRhcmdldFtrZXldKSkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gb2JqW2tleV07XG4gICAgICAgIH1cbiAgICAgIH0uYmluZCh0aGlzKSk7XG4gICAgfSwgdGhpcyk7XG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfSxcbiAgY29tcG9zZTogZnVuY3Rpb24gY29tcG9zZSgpIHtcbiAgICB2YXIgdG9DYWxsID0gQVJSX1NMSUNFLmNhbGwoYXJndW1lbnRzKTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGFyZ3MgPSBBUlJfU0xJQ0UuY2FsbChhcmd1bWVudHMpO1xuICAgICAgZm9yICh2YXIgaSA9IHRvQ2FsbC5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICBhcmdzID0gW3RvQ2FsbFtpXS5hcHBseSh0aGlzLCBhcmdzKV07XG4gICAgICB9XG4gICAgICByZXR1cm4gYXJnc1swXTtcbiAgICB9O1xuICB9LFxuICBlYWNoOiBmdW5jdGlvbiBlYWNoKG9iaiwgaXRyLCBzY29wZSkge1xuICAgIGlmICghb2JqKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChBUlJfRUFDSCAmJiBvYmouZm9yRWFjaCAmJiBvYmouZm9yRWFjaCA9PT0gQVJSX0VBQ0gpIHtcbiAgICAgIG9iai5mb3JFYWNoKGl0ciwgc2NvcGUpO1xuICAgIH0gZWxzZSBpZiAob2JqLmxlbmd0aCA9PT0gb2JqLmxlbmd0aCArIDApIHtcbiAgICAgIHZhciBrZXkgPSB2b2lkIDA7XG4gICAgICB2YXIgbCA9IHZvaWQgMDtcbiAgICAgIGZvciAoa2V5ID0gMCwgbCA9IG9iai5sZW5ndGg7IGtleSA8IGw7IGtleSsrKSB7XG4gICAgICAgIGlmIChrZXkgaW4gb2JqICYmIGl0ci5jYWxsKHNjb3BlLCBvYmpba2V5XSwga2V5KSA9PT0gdGhpcy5CUkVBSykge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKHZhciBfa2V5IGluIG9iaikge1xuICAgICAgICBpZiAoaXRyLmNhbGwoc2NvcGUsIG9ialtfa2V5XSwgX2tleSkgPT09IHRoaXMuQlJFQUspIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIGRlZmVyOiBmdW5jdGlvbiBkZWZlcihmbmMpIHtcbiAgICBzZXRUaW1lb3V0KGZuYywgMCk7XG4gIH0sXG4gIGRlYm91bmNlOiBmdW5jdGlvbiBkZWJvdW5jZShmdW5jLCB0aHJlc2hvbGQsIGNhbGxJbW1lZGlhdGVseSkge1xuICAgIHZhciB0aW1lb3V0ID0gdm9pZCAwO1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgb2JqID0gdGhpcztcbiAgICAgIHZhciBhcmdzID0gYXJndW1lbnRzO1xuICAgICAgZnVuY3Rpb24gZGVsYXllZCgpIHtcbiAgICAgICAgdGltZW91dCA9IG51bGw7XG4gICAgICAgIGlmICghY2FsbEltbWVkaWF0ZWx5KSBmdW5jLmFwcGx5KG9iaiwgYXJncyk7XG4gICAgICB9XG4gICAgICB2YXIgY2FsbE5vdyA9IGNhbGxJbW1lZGlhdGVseSB8fCAhdGltZW91dDtcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGRlbGF5ZWQsIHRocmVzaG9sZCk7XG4gICAgICBpZiAoY2FsbE5vdykge1xuICAgICAgICBmdW5jLmFwcGx5KG9iaiwgYXJncyk7XG4gICAgICB9XG4gICAgfTtcbiAgfSxcbiAgdG9BcnJheTogZnVuY3Rpb24gdG9BcnJheShvYmopIHtcbiAgICBpZiAob2JqLnRvQXJyYXkpIHJldHVybiBvYmoudG9BcnJheSgpO1xuICAgIHJldHVybiBBUlJfU0xJQ0UuY2FsbChvYmopO1xuICB9LFxuICBpc1VuZGVmaW5lZDogZnVuY3Rpb24gaXNVbmRlZmluZWQob2JqKSB7XG4gICAgcmV0dXJuIG9iaiA9PT0gdW5kZWZpbmVkO1xuICB9LFxuICBpc051bGw6IGZ1bmN0aW9uIGlzTnVsbChvYmopIHtcbiAgICByZXR1cm4gb2JqID09PSBudWxsO1xuICB9LFxuICBpc05hTjogZnVuY3Rpb24gKF9pc05hTikge1xuICAgIGZ1bmN0aW9uIGlzTmFOKF94KSB7XG4gICAgICByZXR1cm4gX2lzTmFOLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuICAgIGlzTmFOLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIF9pc05hTi50b1N0cmluZygpO1xuICAgIH07XG4gICAgcmV0dXJuIGlzTmFOO1xuICB9KGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gaXNOYU4ob2JqKTtcbiAgfSksXG4gIGlzQXJyYXk6IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gKG9iaikge1xuICAgIHJldHVybiBvYmouY29uc3RydWN0b3IgPT09IEFycmF5O1xuICB9LFxuICBpc09iamVjdDogZnVuY3Rpb24gaXNPYmplY3Qob2JqKSB7XG4gICAgcmV0dXJuIG9iaiA9PT0gT2JqZWN0KG9iaik7XG4gIH0sXG4gIGlzTnVtYmVyOiBmdW5jdGlvbiBpc051bWJlcihvYmopIHtcbiAgICByZXR1cm4gb2JqID09PSBvYmogKyAwO1xuICB9LFxuICBpc1N0cmluZzogZnVuY3Rpb24gaXNTdHJpbmcob2JqKSB7XG4gICAgcmV0dXJuIG9iaiA9PT0gb2JqICsgJyc7XG4gIH0sXG4gIGlzQm9vbGVhbjogZnVuY3Rpb24gaXNCb29sZWFuKG9iaikge1xuICAgIHJldHVybiBvYmogPT09IGZhbHNlIHx8IG9iaiA9PT0gdHJ1ZTtcbiAgfSxcbiAgaXNGdW5jdGlvbjogZnVuY3Rpb24gaXNGdW5jdGlvbihvYmopIHtcbiAgICByZXR1cm4gb2JqIGluc3RhbmNlb2YgRnVuY3Rpb247XG4gIH1cbn07XG5cbnZhciBJTlRFUlBSRVRBVElPTlMgPSBbXG57XG4gIGxpdG11czogQ29tbW9uLmlzU3RyaW5nLFxuICBjb252ZXJzaW9uczoge1xuICAgIFRIUkVFX0NIQVJfSEVYOiB7XG4gICAgICByZWFkOiBmdW5jdGlvbiByZWFkKG9yaWdpbmFsKSB7XG4gICAgICAgIHZhciB0ZXN0ID0gb3JpZ2luYWwubWF0Y2goL14jKFtBLUYwLTldKShbQS1GMC05XSkoW0EtRjAtOV0pJC9pKTtcbiAgICAgICAgaWYgKHRlc3QgPT09IG51bGwpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBzcGFjZTogJ0hFWCcsXG4gICAgICAgICAgaGV4OiBwYXJzZUludCgnMHgnICsgdGVzdFsxXS50b1N0cmluZygpICsgdGVzdFsxXS50b1N0cmluZygpICsgdGVzdFsyXS50b1N0cmluZygpICsgdGVzdFsyXS50b1N0cmluZygpICsgdGVzdFszXS50b1N0cmluZygpICsgdGVzdFszXS50b1N0cmluZygpLCAwKVxuICAgICAgICB9O1xuICAgICAgfSxcbiAgICAgIHdyaXRlOiBjb2xvclRvU3RyaW5nXG4gICAgfSxcbiAgICBTSVhfQ0hBUl9IRVg6IHtcbiAgICAgIHJlYWQ6IGZ1bmN0aW9uIHJlYWQob3JpZ2luYWwpIHtcbiAgICAgICAgdmFyIHRlc3QgPSBvcmlnaW5hbC5tYXRjaCgvXiMoW0EtRjAtOV17Nn0pJC9pKTtcbiAgICAgICAgaWYgKHRlc3QgPT09IG51bGwpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBzcGFjZTogJ0hFWCcsXG4gICAgICAgICAgaGV4OiBwYXJzZUludCgnMHgnICsgdGVzdFsxXS50b1N0cmluZygpLCAwKVxuICAgICAgICB9O1xuICAgICAgfSxcbiAgICAgIHdyaXRlOiBjb2xvclRvU3RyaW5nXG4gICAgfSxcbiAgICBDU1NfUkdCOiB7XG4gICAgICByZWFkOiBmdW5jdGlvbiByZWFkKG9yaWdpbmFsKSB7XG4gICAgICAgIHZhciB0ZXN0ID0gb3JpZ2luYWwubWF0Y2goL15yZ2JcXChcXHMqKFxcUyspXFxzKixcXHMqKFxcUyspXFxzKixcXHMqKFxcUyspXFxzKlxcKS8pO1xuICAgICAgICBpZiAodGVzdCA9PT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHNwYWNlOiAnUkdCJyxcbiAgICAgICAgICByOiBwYXJzZUZsb2F0KHRlc3RbMV0pLFxuICAgICAgICAgIGc6IHBhcnNlRmxvYXQodGVzdFsyXSksXG4gICAgICAgICAgYjogcGFyc2VGbG9hdCh0ZXN0WzNdKVxuICAgICAgICB9O1xuICAgICAgfSxcbiAgICAgIHdyaXRlOiBjb2xvclRvU3RyaW5nXG4gICAgfSxcbiAgICBDU1NfUkdCQToge1xuICAgICAgcmVhZDogZnVuY3Rpb24gcmVhZChvcmlnaW5hbCkge1xuICAgICAgICB2YXIgdGVzdCA9IG9yaWdpbmFsLm1hdGNoKC9ecmdiYVxcKFxccyooXFxTKylcXHMqLFxccyooXFxTKylcXHMqLFxccyooXFxTKylcXHMqLFxccyooXFxTKylcXHMqXFwpLyk7XG4gICAgICAgIGlmICh0ZXN0ID09PSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgc3BhY2U6ICdSR0InLFxuICAgICAgICAgIHI6IHBhcnNlRmxvYXQodGVzdFsxXSksXG4gICAgICAgICAgZzogcGFyc2VGbG9hdCh0ZXN0WzJdKSxcbiAgICAgICAgICBiOiBwYXJzZUZsb2F0KHRlc3RbM10pLFxuICAgICAgICAgIGE6IHBhcnNlRmxvYXQodGVzdFs0XSlcbiAgICAgICAgfTtcbiAgICAgIH0sXG4gICAgICB3cml0ZTogY29sb3JUb1N0cmluZ1xuICAgIH1cbiAgfVxufSxcbntcbiAgbGl0bXVzOiBDb21tb24uaXNOdW1iZXIsXG4gIGNvbnZlcnNpb25zOiB7XG4gICAgSEVYOiB7XG4gICAgICByZWFkOiBmdW5jdGlvbiByZWFkKG9yaWdpbmFsKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgc3BhY2U6ICdIRVgnLFxuICAgICAgICAgIGhleDogb3JpZ2luYWwsXG4gICAgICAgICAgY29udmVyc2lvbk5hbWU6ICdIRVgnXG4gICAgICAgIH07XG4gICAgICB9LFxuICAgICAgd3JpdGU6IGZ1bmN0aW9uIHdyaXRlKGNvbG9yKSB7XG4gICAgICAgIHJldHVybiBjb2xvci5oZXg7XG4gICAgICB9XG4gICAgfVxuICB9XG59LFxue1xuICBsaXRtdXM6IENvbW1vbi5pc0FycmF5LFxuICBjb252ZXJzaW9uczoge1xuICAgIFJHQl9BUlJBWToge1xuICAgICAgcmVhZDogZnVuY3Rpb24gcmVhZChvcmlnaW5hbCkge1xuICAgICAgICBpZiAob3JpZ2luYWwubGVuZ3RoICE9PSAzKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgc3BhY2U6ICdSR0InLFxuICAgICAgICAgIHI6IG9yaWdpbmFsWzBdLFxuICAgICAgICAgIGc6IG9yaWdpbmFsWzFdLFxuICAgICAgICAgIGI6IG9yaWdpbmFsWzJdXG4gICAgICAgIH07XG4gICAgICB9LFxuICAgICAgd3JpdGU6IGZ1bmN0aW9uIHdyaXRlKGNvbG9yKSB7XG4gICAgICAgIHJldHVybiBbY29sb3IuciwgY29sb3IuZywgY29sb3IuYl07XG4gICAgICB9XG4gICAgfSxcbiAgICBSR0JBX0FSUkFZOiB7XG4gICAgICByZWFkOiBmdW5jdGlvbiByZWFkKG9yaWdpbmFsKSB7XG4gICAgICAgIGlmIChvcmlnaW5hbC5sZW5ndGggIT09IDQpIHJldHVybiBmYWxzZTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBzcGFjZTogJ1JHQicsXG4gICAgICAgICAgcjogb3JpZ2luYWxbMF0sXG4gICAgICAgICAgZzogb3JpZ2luYWxbMV0sXG4gICAgICAgICAgYjogb3JpZ2luYWxbMl0sXG4gICAgICAgICAgYTogb3JpZ2luYWxbM11cbiAgICAgICAgfTtcbiAgICAgIH0sXG4gICAgICB3cml0ZTogZnVuY3Rpb24gd3JpdGUoY29sb3IpIHtcbiAgICAgICAgcmV0dXJuIFtjb2xvci5yLCBjb2xvci5nLCBjb2xvci5iLCBjb2xvci5hXTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn0sXG57XG4gIGxpdG11czogQ29tbW9uLmlzT2JqZWN0LFxuICBjb252ZXJzaW9uczoge1xuICAgIFJHQkFfT0JKOiB7XG4gICAgICByZWFkOiBmdW5jdGlvbiByZWFkKG9yaWdpbmFsKSB7XG4gICAgICAgIGlmIChDb21tb24uaXNOdW1iZXIob3JpZ2luYWwucikgJiYgQ29tbW9uLmlzTnVtYmVyKG9yaWdpbmFsLmcpICYmIENvbW1vbi5pc051bWJlcihvcmlnaW5hbC5iKSAmJiBDb21tb24uaXNOdW1iZXIob3JpZ2luYWwuYSkpIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc3BhY2U6ICdSR0InLFxuICAgICAgICAgICAgcjogb3JpZ2luYWwucixcbiAgICAgICAgICAgIGc6IG9yaWdpbmFsLmcsXG4gICAgICAgICAgICBiOiBvcmlnaW5hbC5iLFxuICAgICAgICAgICAgYTogb3JpZ2luYWwuYVxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfSxcbiAgICAgIHdyaXRlOiBmdW5jdGlvbiB3cml0ZShjb2xvcikge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHI6IGNvbG9yLnIsXG4gICAgICAgICAgZzogY29sb3IuZyxcbiAgICAgICAgICBiOiBjb2xvci5iLFxuICAgICAgICAgIGE6IGNvbG9yLmFcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9LFxuICAgIFJHQl9PQko6IHtcbiAgICAgIHJlYWQ6IGZ1bmN0aW9uIHJlYWQob3JpZ2luYWwpIHtcbiAgICAgICAgaWYgKENvbW1vbi5pc051bWJlcihvcmlnaW5hbC5yKSAmJiBDb21tb24uaXNOdW1iZXIob3JpZ2luYWwuZykgJiYgQ29tbW9uLmlzTnVtYmVyKG9yaWdpbmFsLmIpKSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHNwYWNlOiAnUkdCJyxcbiAgICAgICAgICAgIHI6IG9yaWdpbmFsLnIsXG4gICAgICAgICAgICBnOiBvcmlnaW5hbC5nLFxuICAgICAgICAgICAgYjogb3JpZ2luYWwuYlxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfSxcbiAgICAgIHdyaXRlOiBmdW5jdGlvbiB3cml0ZShjb2xvcikge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHI6IGNvbG9yLnIsXG4gICAgICAgICAgZzogY29sb3IuZyxcbiAgICAgICAgICBiOiBjb2xvci5iXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfSxcbiAgICBIU1ZBX09CSjoge1xuICAgICAgcmVhZDogZnVuY3Rpb24gcmVhZChvcmlnaW5hbCkge1xuICAgICAgICBpZiAoQ29tbW9uLmlzTnVtYmVyKG9yaWdpbmFsLmgpICYmIENvbW1vbi5pc051bWJlcihvcmlnaW5hbC5zKSAmJiBDb21tb24uaXNOdW1iZXIob3JpZ2luYWwudikgJiYgQ29tbW9uLmlzTnVtYmVyKG9yaWdpbmFsLmEpKSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHNwYWNlOiAnSFNWJyxcbiAgICAgICAgICAgIGg6IG9yaWdpbmFsLmgsXG4gICAgICAgICAgICBzOiBvcmlnaW5hbC5zLFxuICAgICAgICAgICAgdjogb3JpZ2luYWwudixcbiAgICAgICAgICAgIGE6IG9yaWdpbmFsLmFcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH0sXG4gICAgICB3cml0ZTogZnVuY3Rpb24gd3JpdGUoY29sb3IpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBoOiBjb2xvci5oLFxuICAgICAgICAgIHM6IGNvbG9yLnMsXG4gICAgICAgICAgdjogY29sb3IudixcbiAgICAgICAgICBhOiBjb2xvci5hXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfSxcbiAgICBIU1ZfT0JKOiB7XG4gICAgICByZWFkOiBmdW5jdGlvbiByZWFkKG9yaWdpbmFsKSB7XG4gICAgICAgIGlmIChDb21tb24uaXNOdW1iZXIob3JpZ2luYWwuaCkgJiYgQ29tbW9uLmlzTnVtYmVyKG9yaWdpbmFsLnMpICYmIENvbW1vbi5pc051bWJlcihvcmlnaW5hbC52KSkge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzcGFjZTogJ0hTVicsXG4gICAgICAgICAgICBoOiBvcmlnaW5hbC5oLFxuICAgICAgICAgICAgczogb3JpZ2luYWwucyxcbiAgICAgICAgICAgIHY6IG9yaWdpbmFsLnZcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH0sXG4gICAgICB3cml0ZTogZnVuY3Rpb24gd3JpdGUoY29sb3IpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBoOiBjb2xvci5oLFxuICAgICAgICAgIHM6IGNvbG9yLnMsXG4gICAgICAgICAgdjogY29sb3IudlxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH1cbiAgfVxufV07XG52YXIgcmVzdWx0ID0gdm9pZCAwO1xudmFyIHRvUmV0dXJuID0gdm9pZCAwO1xudmFyIGludGVycHJldCA9IGZ1bmN0aW9uIGludGVycHJldCgpIHtcbiAgdG9SZXR1cm4gPSBmYWxzZTtcbiAgdmFyIG9yaWdpbmFsID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBDb21tb24udG9BcnJheShhcmd1bWVudHMpIDogYXJndW1lbnRzWzBdO1xuICBDb21tb24uZWFjaChJTlRFUlBSRVRBVElPTlMsIGZ1bmN0aW9uIChmYW1pbHkpIHtcbiAgICBpZiAoZmFtaWx5LmxpdG11cyhvcmlnaW5hbCkpIHtcbiAgICAgIENvbW1vbi5lYWNoKGZhbWlseS5jb252ZXJzaW9ucywgZnVuY3Rpb24gKGNvbnZlcnNpb24sIGNvbnZlcnNpb25OYW1lKSB7XG4gICAgICAgIHJlc3VsdCA9IGNvbnZlcnNpb24ucmVhZChvcmlnaW5hbCk7XG4gICAgICAgIGlmICh0b1JldHVybiA9PT0gZmFsc2UgJiYgcmVzdWx0ICE9PSBmYWxzZSkge1xuICAgICAgICAgIHRvUmV0dXJuID0gcmVzdWx0O1xuICAgICAgICAgIHJlc3VsdC5jb252ZXJzaW9uTmFtZSA9IGNvbnZlcnNpb25OYW1lO1xuICAgICAgICAgIHJlc3VsdC5jb252ZXJzaW9uID0gY29udmVyc2lvbjtcbiAgICAgICAgICByZXR1cm4gQ29tbW9uLkJSRUFLO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBDb21tb24uQlJFQUs7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHRvUmV0dXJuO1xufTtcblxudmFyIHRtcENvbXBvbmVudCA9IHZvaWQgMDtcbnZhciBDb2xvck1hdGggPSB7XG4gIGhzdl90b19yZ2I6IGZ1bmN0aW9uIGhzdl90b19yZ2IoaCwgcywgdikge1xuICAgIHZhciBoaSA9IE1hdGguZmxvb3IoaCAvIDYwKSAlIDY7XG4gICAgdmFyIGYgPSBoIC8gNjAgLSBNYXRoLmZsb29yKGggLyA2MCk7XG4gICAgdmFyIHAgPSB2ICogKDEuMCAtIHMpO1xuICAgIHZhciBxID0gdiAqICgxLjAgLSBmICogcyk7XG4gICAgdmFyIHQgPSB2ICogKDEuMCAtICgxLjAgLSBmKSAqIHMpO1xuICAgIHZhciBjID0gW1t2LCB0LCBwXSwgW3EsIHYsIHBdLCBbcCwgdiwgdF0sIFtwLCBxLCB2XSwgW3QsIHAsIHZdLCBbdiwgcCwgcV1dW2hpXTtcbiAgICByZXR1cm4ge1xuICAgICAgcjogY1swXSAqIDI1NSxcbiAgICAgIGc6IGNbMV0gKiAyNTUsXG4gICAgICBiOiBjWzJdICogMjU1XG4gICAgfTtcbiAgfSxcbiAgcmdiX3RvX2hzdjogZnVuY3Rpb24gcmdiX3RvX2hzdihyLCBnLCBiKSB7XG4gICAgdmFyIG1pbiA9IE1hdGgubWluKHIsIGcsIGIpO1xuICAgIHZhciBtYXggPSBNYXRoLm1heChyLCBnLCBiKTtcbiAgICB2YXIgZGVsdGEgPSBtYXggLSBtaW47XG4gICAgdmFyIGggPSB2b2lkIDA7XG4gICAgdmFyIHMgPSB2b2lkIDA7XG4gICAgaWYgKG1heCAhPT0gMCkge1xuICAgICAgcyA9IGRlbHRhIC8gbWF4O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBoOiBOYU4sXG4gICAgICAgIHM6IDAsXG4gICAgICAgIHY6IDBcbiAgICAgIH07XG4gICAgfVxuICAgIGlmIChyID09PSBtYXgpIHtcbiAgICAgIGggPSAoZyAtIGIpIC8gZGVsdGE7XG4gICAgfSBlbHNlIGlmIChnID09PSBtYXgpIHtcbiAgICAgIGggPSAyICsgKGIgLSByKSAvIGRlbHRhO1xuICAgIH0gZWxzZSB7XG4gICAgICBoID0gNCArIChyIC0gZykgLyBkZWx0YTtcbiAgICB9XG4gICAgaCAvPSA2O1xuICAgIGlmIChoIDwgMCkge1xuICAgICAgaCArPSAxO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgaDogaCAqIDM2MCxcbiAgICAgIHM6IHMsXG4gICAgICB2OiBtYXggLyAyNTVcbiAgICB9O1xuICB9LFxuICByZ2JfdG9faGV4OiBmdW5jdGlvbiByZ2JfdG9faGV4KHIsIGcsIGIpIHtcbiAgICB2YXIgaGV4ID0gdGhpcy5oZXhfd2l0aF9jb21wb25lbnQoMCwgMiwgcik7XG4gICAgaGV4ID0gdGhpcy5oZXhfd2l0aF9jb21wb25lbnQoaGV4LCAxLCBnKTtcbiAgICBoZXggPSB0aGlzLmhleF93aXRoX2NvbXBvbmVudChoZXgsIDAsIGIpO1xuICAgIHJldHVybiBoZXg7XG4gIH0sXG4gIGNvbXBvbmVudF9mcm9tX2hleDogZnVuY3Rpb24gY29tcG9uZW50X2Zyb21faGV4KGhleCwgY29tcG9uZW50SW5kZXgpIHtcbiAgICByZXR1cm4gaGV4ID4+IGNvbXBvbmVudEluZGV4ICogOCAmIDB4RkY7XG4gIH0sXG4gIGhleF93aXRoX2NvbXBvbmVudDogZnVuY3Rpb24gaGV4X3dpdGhfY29tcG9uZW50KGhleCwgY29tcG9uZW50SW5kZXgsIHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlIDw8ICh0bXBDb21wb25lbnQgPSBjb21wb25lbnRJbmRleCAqIDgpIHwgaGV4ICYgfigweEZGIDw8IHRtcENvbXBvbmVudCk7XG4gIH1cbn07XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqO1xufSA6IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG59O1xuXG5cblxuXG5cblxuXG5cblxuXG5cbnZhciBjbGFzc0NhbGxDaGVjayA9IGZ1bmN0aW9uIChpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59O1xuXG52YXIgY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gICAgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgICBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgICByZXR1cm4gQ29uc3RydWN0b3I7XG4gIH07XG59KCk7XG5cblxuXG5cblxuXG5cbnZhciBnZXQgPSBmdW5jdGlvbiBnZXQob2JqZWN0LCBwcm9wZXJ0eSwgcmVjZWl2ZXIpIHtcbiAgaWYgKG9iamVjdCA9PT0gbnVsbCkgb2JqZWN0ID0gRnVuY3Rpb24ucHJvdG90eXBlO1xuICB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBwcm9wZXJ0eSk7XG5cbiAgaWYgKGRlc2MgPT09IHVuZGVmaW5lZCkge1xuICAgIHZhciBwYXJlbnQgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Yob2JqZWN0KTtcblxuICAgIGlmIChwYXJlbnQgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBnZXQocGFyZW50LCBwcm9wZXJ0eSwgcmVjZWl2ZXIpO1xuICAgIH1cbiAgfSBlbHNlIGlmIChcInZhbHVlXCIgaW4gZGVzYykge1xuICAgIHJldHVybiBkZXNjLnZhbHVlO1xuICB9IGVsc2Uge1xuICAgIHZhciBnZXR0ZXIgPSBkZXNjLmdldDtcblxuICAgIGlmIChnZXR0ZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICByZXR1cm4gZ2V0dGVyLmNhbGwocmVjZWl2ZXIpO1xuICB9XG59O1xuXG52YXIgaW5oZXJpdHMgPSBmdW5jdGlvbiAoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpO1xuICB9XG5cbiAgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7XG4gICAgY29uc3RydWN0b3I6IHtcbiAgICAgIHZhbHVlOiBzdWJDbGFzcyxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9XG4gIH0pO1xuICBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7XG59O1xuXG5cblxuXG5cblxuXG5cblxuXG5cbnZhciBwb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuID0gZnVuY3Rpb24gKHNlbGYsIGNhbGwpIHtcbiAgaWYgKCFzZWxmKSB7XG4gICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICB9XG5cbiAgcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7XG59O1xuXG52YXIgQ29sb3IgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIENvbG9yKCkge1xuICAgIGNsYXNzQ2FsbENoZWNrKHRoaXMsIENvbG9yKTtcbiAgICB0aGlzLl9fc3RhdGUgPSBpbnRlcnByZXQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICBpZiAodGhpcy5fX3N0YXRlID09PSBmYWxzZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdGYWlsZWQgdG8gaW50ZXJwcmV0IGNvbG9yIGFyZ3VtZW50cycpO1xuICAgIH1cbiAgICB0aGlzLl9fc3RhdGUuYSA9IHRoaXMuX19zdGF0ZS5hIHx8IDE7XG4gIH1cbiAgY3JlYXRlQ2xhc3MoQ29sb3IsIFt7XG4gICAga2V5OiAndG9TdHJpbmcnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICAgIHJldHVybiBjb2xvclRvU3RyaW5nKHRoaXMpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3RvSGV4U3RyaW5nJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gdG9IZXhTdHJpbmcoKSB7XG4gICAgICByZXR1cm4gY29sb3JUb1N0cmluZyh0aGlzLCB0cnVlKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICd0b09yaWdpbmFsJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gdG9PcmlnaW5hbCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9fc3RhdGUuY29udmVyc2lvbi53cml0ZSh0aGlzKTtcbiAgICB9XG4gIH1dKTtcbiAgcmV0dXJuIENvbG9yO1xufSgpO1xuZnVuY3Rpb24gZGVmaW5lUkdCQ29tcG9uZW50KHRhcmdldCwgY29tcG9uZW50LCBjb21wb25lbnRIZXhJbmRleCkge1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBjb21wb25lbnQsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCQkMSgpIHtcbiAgICAgIGlmICh0aGlzLl9fc3RhdGUuc3BhY2UgPT09ICdSR0InKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9fc3RhdGVbY29tcG9uZW50XTtcbiAgICAgIH1cbiAgICAgIENvbG9yLnJlY2FsY3VsYXRlUkdCKHRoaXMsIGNvbXBvbmVudCwgY29tcG9uZW50SGV4SW5kZXgpO1xuICAgICAgcmV0dXJuIHRoaXMuX19zdGF0ZVtjb21wb25lbnRdO1xuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQkJDEodikge1xuICAgICAgaWYgKHRoaXMuX19zdGF0ZS5zcGFjZSAhPT0gJ1JHQicpIHtcbiAgICAgICAgQ29sb3IucmVjYWxjdWxhdGVSR0IodGhpcywgY29tcG9uZW50LCBjb21wb25lbnRIZXhJbmRleCk7XG4gICAgICAgIHRoaXMuX19zdGF0ZS5zcGFjZSA9ICdSR0InO1xuICAgICAgfVxuICAgICAgdGhpcy5fX3N0YXRlW2NvbXBvbmVudF0gPSB2O1xuICAgIH1cbiAgfSk7XG59XG5mdW5jdGlvbiBkZWZpbmVIU1ZDb21wb25lbnQodGFyZ2V0LCBjb21wb25lbnQpIHtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgY29tcG9uZW50LCB7XG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQkJDEoKSB7XG4gICAgICBpZiAodGhpcy5fX3N0YXRlLnNwYWNlID09PSAnSFNWJykge1xuICAgICAgICByZXR1cm4gdGhpcy5fX3N0YXRlW2NvbXBvbmVudF07XG4gICAgICB9XG4gICAgICBDb2xvci5yZWNhbGN1bGF0ZUhTVih0aGlzKTtcbiAgICAgIHJldHVybiB0aGlzLl9fc3RhdGVbY29tcG9uZW50XTtcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24gc2V0JCQxKHYpIHtcbiAgICAgIGlmICh0aGlzLl9fc3RhdGUuc3BhY2UgIT09ICdIU1YnKSB7XG4gICAgICAgIENvbG9yLnJlY2FsY3VsYXRlSFNWKHRoaXMpO1xuICAgICAgICB0aGlzLl9fc3RhdGUuc3BhY2UgPSAnSFNWJztcbiAgICAgIH1cbiAgICAgIHRoaXMuX19zdGF0ZVtjb21wb25lbnRdID0gdjtcbiAgICB9XG4gIH0pO1xufVxuQ29sb3IucmVjYWxjdWxhdGVSR0IgPSBmdW5jdGlvbiAoY29sb3IsIGNvbXBvbmVudCwgY29tcG9uZW50SGV4SW5kZXgpIHtcbiAgaWYgKGNvbG9yLl9fc3RhdGUuc3BhY2UgPT09ICdIRVgnKSB7XG4gICAgY29sb3IuX19zdGF0ZVtjb21wb25lbnRdID0gQ29sb3JNYXRoLmNvbXBvbmVudF9mcm9tX2hleChjb2xvci5fX3N0YXRlLmhleCwgY29tcG9uZW50SGV4SW5kZXgpO1xuICB9IGVsc2UgaWYgKGNvbG9yLl9fc3RhdGUuc3BhY2UgPT09ICdIU1YnKSB7XG4gICAgQ29tbW9uLmV4dGVuZChjb2xvci5fX3N0YXRlLCBDb2xvck1hdGguaHN2X3RvX3JnYihjb2xvci5fX3N0YXRlLmgsIGNvbG9yLl9fc3RhdGUucywgY29sb3IuX19zdGF0ZS52KSk7XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdDb3JydXB0ZWQgY29sb3Igc3RhdGUnKTtcbiAgfVxufTtcbkNvbG9yLnJlY2FsY3VsYXRlSFNWID0gZnVuY3Rpb24gKGNvbG9yKSB7XG4gIHZhciByZXN1bHQgPSBDb2xvck1hdGgucmdiX3RvX2hzdihjb2xvci5yLCBjb2xvci5nLCBjb2xvci5iKTtcbiAgQ29tbW9uLmV4dGVuZChjb2xvci5fX3N0YXRlLCB7XG4gICAgczogcmVzdWx0LnMsXG4gICAgdjogcmVzdWx0LnZcbiAgfSk7XG4gIGlmICghQ29tbW9uLmlzTmFOKHJlc3VsdC5oKSkge1xuICAgIGNvbG9yLl9fc3RhdGUuaCA9IHJlc3VsdC5oO1xuICB9IGVsc2UgaWYgKENvbW1vbi5pc1VuZGVmaW5lZChjb2xvci5fX3N0YXRlLmgpKSB7XG4gICAgY29sb3IuX19zdGF0ZS5oID0gMDtcbiAgfVxufTtcbkNvbG9yLkNPTVBPTkVOVFMgPSBbJ3InLCAnZycsICdiJywgJ2gnLCAncycsICd2JywgJ2hleCcsICdhJ107XG5kZWZpbmVSR0JDb21wb25lbnQoQ29sb3IucHJvdG90eXBlLCAncicsIDIpO1xuZGVmaW5lUkdCQ29tcG9uZW50KENvbG9yLnByb3RvdHlwZSwgJ2cnLCAxKTtcbmRlZmluZVJHQkNvbXBvbmVudChDb2xvci5wcm90b3R5cGUsICdiJywgMCk7XG5kZWZpbmVIU1ZDb21wb25lbnQoQ29sb3IucHJvdG90eXBlLCAnaCcpO1xuZGVmaW5lSFNWQ29tcG9uZW50KENvbG9yLnByb3RvdHlwZSwgJ3MnKTtcbmRlZmluZUhTVkNvbXBvbmVudChDb2xvci5wcm90b3R5cGUsICd2Jyk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoQ29sb3IucHJvdG90eXBlLCAnYScsIHtcbiAgZ2V0OiBmdW5jdGlvbiBnZXQkJDEoKSB7XG4gICAgcmV0dXJuIHRoaXMuX19zdGF0ZS5hO1xuICB9LFxuICBzZXQ6IGZ1bmN0aW9uIHNldCQkMSh2KSB7XG4gICAgdGhpcy5fX3N0YXRlLmEgPSB2O1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb2xvci5wcm90b3R5cGUsICdoZXgnLCB7XG4gIGdldDogZnVuY3Rpb24gZ2V0JCQxKCkge1xuICAgIGlmICh0aGlzLl9fc3RhdGUuc3BhY2UgIT09ICdIRVgnKSB7XG4gICAgICB0aGlzLl9fc3RhdGUuaGV4ID0gQ29sb3JNYXRoLnJnYl90b19oZXgodGhpcy5yLCB0aGlzLmcsIHRoaXMuYik7XG4gICAgICB0aGlzLl9fc3RhdGUuc3BhY2UgPSAnSEVYJztcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX19zdGF0ZS5oZXg7XG4gIH0sXG4gIHNldDogZnVuY3Rpb24gc2V0JCQxKHYpIHtcbiAgICB0aGlzLl9fc3RhdGUuc3BhY2UgPSAnSEVYJztcbiAgICB0aGlzLl9fc3RhdGUuaGV4ID0gdjtcbiAgfVxufSk7XG5cbnZhciBDb250cm9sbGVyID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBDb250cm9sbGVyKG9iamVjdCwgcHJvcGVydHkpIHtcbiAgICBjbGFzc0NhbGxDaGVjayh0aGlzLCBDb250cm9sbGVyKTtcbiAgICB0aGlzLmluaXRpYWxWYWx1ZSA9IG9iamVjdFtwcm9wZXJ0eV07XG4gICAgdGhpcy5kb21FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGhpcy5vYmplY3QgPSBvYmplY3Q7XG4gICAgdGhpcy5wcm9wZXJ0eSA9IHByb3BlcnR5O1xuICAgIHRoaXMuX19vbkNoYW5nZSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLl9fb25GaW5pc2hDaGFuZ2UgPSB1bmRlZmluZWQ7XG4gIH1cbiAgY3JlYXRlQ2xhc3MoQ29udHJvbGxlciwgW3tcbiAgICBrZXk6ICdvbkNoYW5nZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uQ2hhbmdlKGZuYykge1xuICAgICAgdGhpcy5fX29uQ2hhbmdlID0gZm5jO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnb25GaW5pc2hDaGFuZ2UnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvbkZpbmlzaENoYW5nZShmbmMpIHtcbiAgICAgIHRoaXMuX19vbkZpbmlzaENoYW5nZSA9IGZuYztcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3NldFZhbHVlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0VmFsdWUobmV3VmFsdWUpIHtcbiAgICAgIHRoaXMub2JqZWN0W3RoaXMucHJvcGVydHldID0gbmV3VmFsdWU7XG4gICAgICBpZiAodGhpcy5fX29uQ2hhbmdlKSB7XG4gICAgICAgIHRoaXMuX19vbkNoYW5nZS5jYWxsKHRoaXMsIG5ld1ZhbHVlKTtcbiAgICAgIH1cbiAgICAgIHRoaXMudXBkYXRlRGlzcGxheSgpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZ2V0VmFsdWUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRWYWx1ZSgpIHtcbiAgICAgIHJldHVybiB0aGlzLm9iamVjdFt0aGlzLnByb3BlcnR5XTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICd1cGRhdGVEaXNwbGF5JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gdXBkYXRlRGlzcGxheSgpIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2lzTW9kaWZpZWQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBpc01vZGlmaWVkKCkge1xuICAgICAgcmV0dXJuIHRoaXMuaW5pdGlhbFZhbHVlICE9PSB0aGlzLmdldFZhbHVlKCk7XG4gICAgfVxuICB9XSk7XG4gIHJldHVybiBDb250cm9sbGVyO1xufSgpO1xuXG52YXIgRVZFTlRfTUFQID0ge1xuICBIVE1MRXZlbnRzOiBbJ2NoYW5nZSddLFxuICBNb3VzZUV2ZW50czogWydjbGljaycsICdtb3VzZW1vdmUnLCAnbW91c2Vkb3duJywgJ21vdXNldXAnLCAnbW91c2VvdmVyJ10sXG4gIEtleWJvYXJkRXZlbnRzOiBbJ2tleWRvd24nXVxufTtcbnZhciBFVkVOVF9NQVBfSU5WID0ge307XG5Db21tb24uZWFjaChFVkVOVF9NQVAsIGZ1bmN0aW9uICh2LCBrKSB7XG4gIENvbW1vbi5lYWNoKHYsIGZ1bmN0aW9uIChlKSB7XG4gICAgRVZFTlRfTUFQX0lOVltlXSA9IGs7XG4gIH0pO1xufSk7XG52YXIgQ1NTX1ZBTFVFX1BJWEVMUyA9IC8oXFxkKyhcXC5cXGQrKT8pcHgvO1xuZnVuY3Rpb24gY3NzVmFsdWVUb1BpeGVscyh2YWwpIHtcbiAgaWYgKHZhbCA9PT0gJzAnIHx8IENvbW1vbi5pc1VuZGVmaW5lZCh2YWwpKSB7XG4gICAgcmV0dXJuIDA7XG4gIH1cbiAgdmFyIG1hdGNoID0gdmFsLm1hdGNoKENTU19WQUxVRV9QSVhFTFMpO1xuICBpZiAoIUNvbW1vbi5pc051bGwobWF0Y2gpKSB7XG4gICAgcmV0dXJuIHBhcnNlRmxvYXQobWF0Y2hbMV0pO1xuICB9XG4gIHJldHVybiAwO1xufVxudmFyIGRvbSA9IHtcbiAgbWFrZVNlbGVjdGFibGU6IGZ1bmN0aW9uIG1ha2VTZWxlY3RhYmxlKGVsZW0sIHNlbGVjdGFibGUpIHtcbiAgICBpZiAoZWxlbSA9PT0gdW5kZWZpbmVkIHx8IGVsZW0uc3R5bGUgPT09IHVuZGVmaW5lZCkgcmV0dXJuO1xuICAgIGVsZW0ub25zZWxlY3RzdGFydCA9IHNlbGVjdGFibGUgPyBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSA6IGZ1bmN0aW9uICgpIHt9O1xuICAgIGVsZW0uc3R5bGUuTW96VXNlclNlbGVjdCA9IHNlbGVjdGFibGUgPyAnYXV0bycgOiAnbm9uZSc7XG4gICAgZWxlbS5zdHlsZS5LaHRtbFVzZXJTZWxlY3QgPSBzZWxlY3RhYmxlID8gJ2F1dG8nIDogJ25vbmUnO1xuICAgIGVsZW0udW5zZWxlY3RhYmxlID0gc2VsZWN0YWJsZSA/ICdvbicgOiAnb2ZmJztcbiAgfSxcbiAgbWFrZUZ1bGxzY3JlZW46IGZ1bmN0aW9uIG1ha2VGdWxsc2NyZWVuKGVsZW0sIGhvciwgdmVydCkge1xuICAgIHZhciB2ZXJ0aWNhbCA9IHZlcnQ7XG4gICAgdmFyIGhvcml6b250YWwgPSBob3I7XG4gICAgaWYgKENvbW1vbi5pc1VuZGVmaW5lZChob3Jpem9udGFsKSkge1xuICAgICAgaG9yaXpvbnRhbCA9IHRydWU7XG4gICAgfVxuICAgIGlmIChDb21tb24uaXNVbmRlZmluZWQodmVydGljYWwpKSB7XG4gICAgICB2ZXJ0aWNhbCA9IHRydWU7XG4gICAgfVxuICAgIGVsZW0uc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgIGlmIChob3Jpem9udGFsKSB7XG4gICAgICBlbGVtLnN0eWxlLmxlZnQgPSAwO1xuICAgICAgZWxlbS5zdHlsZS5yaWdodCA9IDA7XG4gICAgfVxuICAgIGlmICh2ZXJ0aWNhbCkge1xuICAgICAgZWxlbS5zdHlsZS50b3AgPSAwO1xuICAgICAgZWxlbS5zdHlsZS5ib3R0b20gPSAwO1xuICAgIH1cbiAgfSxcbiAgZmFrZUV2ZW50OiBmdW5jdGlvbiBmYWtlRXZlbnQoZWxlbSwgZXZlbnRUeXBlLCBwYXJzLCBhdXgpIHtcbiAgICB2YXIgcGFyYW1zID0gcGFycyB8fCB7fTtcbiAgICB2YXIgY2xhc3NOYW1lID0gRVZFTlRfTUFQX0lOVltldmVudFR5cGVdO1xuICAgIGlmICghY2xhc3NOYW1lKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0V2ZW50IHR5cGUgJyArIGV2ZW50VHlwZSArICcgbm90IHN1cHBvcnRlZC4nKTtcbiAgICB9XG4gICAgdmFyIGV2dCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KGNsYXNzTmFtZSk7XG4gICAgc3dpdGNoIChjbGFzc05hbWUpIHtcbiAgICAgIGNhc2UgJ01vdXNlRXZlbnRzJzpcbiAgICAgICAge1xuICAgICAgICAgIHZhciBjbGllbnRYID0gcGFyYW1zLnggfHwgcGFyYW1zLmNsaWVudFggfHwgMDtcbiAgICAgICAgICB2YXIgY2xpZW50WSA9IHBhcmFtcy55IHx8IHBhcmFtcy5jbGllbnRZIHx8IDA7XG4gICAgICAgICAgZXZ0LmluaXRNb3VzZUV2ZW50KGV2ZW50VHlwZSwgcGFyYW1zLmJ1YmJsZXMgfHwgZmFsc2UsIHBhcmFtcy5jYW5jZWxhYmxlIHx8IHRydWUsIHdpbmRvdywgcGFyYW1zLmNsaWNrQ291bnQgfHwgMSwgMCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIGNsaWVudFgsXG4gICAgICAgICAgY2xpZW50WSxcbiAgICAgICAgICBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgMCwgbnVsbCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIGNhc2UgJ0tleWJvYXJkRXZlbnRzJzpcbiAgICAgICAge1xuICAgICAgICAgIHZhciBpbml0ID0gZXZ0LmluaXRLZXlib2FyZEV2ZW50IHx8IGV2dC5pbml0S2V5RXZlbnQ7XG4gICAgICAgICAgQ29tbW9uLmRlZmF1bHRzKHBhcmFtcywge1xuICAgICAgICAgICAgY2FuY2VsYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGN0cmxLZXk6IGZhbHNlLFxuICAgICAgICAgICAgYWx0S2V5OiBmYWxzZSxcbiAgICAgICAgICAgIHNoaWZ0S2V5OiBmYWxzZSxcbiAgICAgICAgICAgIG1ldGFLZXk6IGZhbHNlLFxuICAgICAgICAgICAga2V5Q29kZTogdW5kZWZpbmVkLFxuICAgICAgICAgICAgY2hhckNvZGU6IHVuZGVmaW5lZFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGluaXQoZXZlbnRUeXBlLCBwYXJhbXMuYnViYmxlcyB8fCBmYWxzZSwgcGFyYW1zLmNhbmNlbGFibGUsIHdpbmRvdywgcGFyYW1zLmN0cmxLZXksIHBhcmFtcy5hbHRLZXksIHBhcmFtcy5zaGlmdEtleSwgcGFyYW1zLm1ldGFLZXksIHBhcmFtcy5rZXlDb2RlLCBwYXJhbXMuY2hhckNvZGUpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICBkZWZhdWx0OlxuICAgICAgICB7XG4gICAgICAgICAgZXZ0LmluaXRFdmVudChldmVudFR5cGUsIHBhcmFtcy5idWJibGVzIHx8IGZhbHNlLCBwYXJhbXMuY2FuY2VsYWJsZSB8fCB0cnVlKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbiAgICBDb21tb24uZGVmYXVsdHMoZXZ0LCBhdXgpO1xuICAgIGVsZW0uZGlzcGF0Y2hFdmVudChldnQpO1xuICB9LFxuICBiaW5kOiBmdW5jdGlvbiBiaW5kKGVsZW0sIGV2ZW50LCBmdW5jLCBuZXdCb29sKSB7XG4gICAgdmFyIGJvb2wgPSBuZXdCb29sIHx8IGZhbHNlO1xuICAgIGlmIChlbGVtLmFkZEV2ZW50TGlzdGVuZXIpIHtcbiAgICAgIGVsZW0uYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgZnVuYywgYm9vbCk7XG4gICAgfSBlbHNlIGlmIChlbGVtLmF0dGFjaEV2ZW50KSB7XG4gICAgICBlbGVtLmF0dGFjaEV2ZW50KCdvbicgKyBldmVudCwgZnVuYyk7XG4gICAgfVxuICAgIHJldHVybiBkb207XG4gIH0sXG4gIHVuYmluZDogZnVuY3Rpb24gdW5iaW5kKGVsZW0sIGV2ZW50LCBmdW5jLCBuZXdCb29sKSB7XG4gICAgdmFyIGJvb2wgPSBuZXdCb29sIHx8IGZhbHNlO1xuICAgIGlmIChlbGVtLnJlbW92ZUV2ZW50TGlzdGVuZXIpIHtcbiAgICAgIGVsZW0ucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgZnVuYywgYm9vbCk7XG4gICAgfSBlbHNlIGlmIChlbGVtLmRldGFjaEV2ZW50KSB7XG4gICAgICBlbGVtLmRldGFjaEV2ZW50KCdvbicgKyBldmVudCwgZnVuYyk7XG4gICAgfVxuICAgIHJldHVybiBkb207XG4gIH0sXG4gIGFkZENsYXNzOiBmdW5jdGlvbiBhZGRDbGFzcyhlbGVtLCBjbGFzc05hbWUpIHtcbiAgICBpZiAoZWxlbS5jbGFzc05hbWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgZWxlbS5jbGFzc05hbWUgPSBjbGFzc05hbWU7XG4gICAgfSBlbHNlIGlmIChlbGVtLmNsYXNzTmFtZSAhPT0gY2xhc3NOYW1lKSB7XG4gICAgICB2YXIgY2xhc3NlcyA9IGVsZW0uY2xhc3NOYW1lLnNwbGl0KC8gKy8pO1xuICAgICAgaWYgKGNsYXNzZXMuaW5kZXhPZihjbGFzc05hbWUpID09PSAtMSkge1xuICAgICAgICBjbGFzc2VzLnB1c2goY2xhc3NOYW1lKTtcbiAgICAgICAgZWxlbS5jbGFzc05hbWUgPSBjbGFzc2VzLmpvaW4oJyAnKS5yZXBsYWNlKC9eXFxzKy8sICcnKS5yZXBsYWNlKC9cXHMrJC8sICcnKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGRvbTtcbiAgfSxcbiAgcmVtb3ZlQ2xhc3M6IGZ1bmN0aW9uIHJlbW92ZUNsYXNzKGVsZW0sIGNsYXNzTmFtZSkge1xuICAgIGlmIChjbGFzc05hbWUpIHtcbiAgICAgIGlmIChlbGVtLmNsYXNzTmFtZSA9PT0gY2xhc3NOYW1lKSB7XG4gICAgICAgIGVsZW0ucmVtb3ZlQXR0cmlidXRlKCdjbGFzcycpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIGNsYXNzZXMgPSBlbGVtLmNsYXNzTmFtZS5zcGxpdCgvICsvKTtcbiAgICAgICAgdmFyIGluZGV4ID0gY2xhc3Nlcy5pbmRleE9mKGNsYXNzTmFtZSk7XG4gICAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICBjbGFzc2VzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgZWxlbS5jbGFzc05hbWUgPSBjbGFzc2VzLmpvaW4oJyAnKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBlbGVtLmNsYXNzTmFtZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgcmV0dXJuIGRvbTtcbiAgfSxcbiAgaGFzQ2xhc3M6IGZ1bmN0aW9uIGhhc0NsYXNzKGVsZW0sIGNsYXNzTmFtZSkge1xuICAgIHJldHVybiBuZXcgUmVnRXhwKCcoPzpefFxcXFxzKyknICsgY2xhc3NOYW1lICsgJyg/OlxcXFxzK3wkKScpLnRlc3QoZWxlbS5jbGFzc05hbWUpIHx8IGZhbHNlO1xuICB9LFxuICBnZXRXaWR0aDogZnVuY3Rpb24gZ2V0V2lkdGgoZWxlbSkge1xuICAgIHZhciBzdHlsZSA9IGdldENvbXB1dGVkU3R5bGUoZWxlbSk7XG4gICAgcmV0dXJuIGNzc1ZhbHVlVG9QaXhlbHMoc3R5bGVbJ2JvcmRlci1sZWZ0LXdpZHRoJ10pICsgY3NzVmFsdWVUb1BpeGVscyhzdHlsZVsnYm9yZGVyLXJpZ2h0LXdpZHRoJ10pICsgY3NzVmFsdWVUb1BpeGVscyhzdHlsZVsncGFkZGluZy1sZWZ0J10pICsgY3NzVmFsdWVUb1BpeGVscyhzdHlsZVsncGFkZGluZy1yaWdodCddKSArIGNzc1ZhbHVlVG9QaXhlbHMoc3R5bGUud2lkdGgpO1xuICB9LFxuICBnZXRIZWlnaHQ6IGZ1bmN0aW9uIGdldEhlaWdodChlbGVtKSB7XG4gICAgdmFyIHN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShlbGVtKTtcbiAgICByZXR1cm4gY3NzVmFsdWVUb1BpeGVscyhzdHlsZVsnYm9yZGVyLXRvcC13aWR0aCddKSArIGNzc1ZhbHVlVG9QaXhlbHMoc3R5bGVbJ2JvcmRlci1ib3R0b20td2lkdGgnXSkgKyBjc3NWYWx1ZVRvUGl4ZWxzKHN0eWxlWydwYWRkaW5nLXRvcCddKSArIGNzc1ZhbHVlVG9QaXhlbHMoc3R5bGVbJ3BhZGRpbmctYm90dG9tJ10pICsgY3NzVmFsdWVUb1BpeGVscyhzdHlsZS5oZWlnaHQpO1xuICB9LFxuICBnZXRPZmZzZXQ6IGZ1bmN0aW9uIGdldE9mZnNldChlbCkge1xuICAgIHZhciBlbGVtID0gZWw7XG4gICAgdmFyIG9mZnNldCA9IHsgbGVmdDogMCwgdG9wOiAwIH07XG4gICAgaWYgKGVsZW0ub2Zmc2V0UGFyZW50KSB7XG4gICAgICBkbyB7XG4gICAgICAgIG9mZnNldC5sZWZ0ICs9IGVsZW0ub2Zmc2V0TGVmdDtcbiAgICAgICAgb2Zmc2V0LnRvcCArPSBlbGVtLm9mZnNldFRvcDtcbiAgICAgICAgZWxlbSA9IGVsZW0ub2Zmc2V0UGFyZW50O1xuICAgICAgfSB3aGlsZSAoZWxlbSk7XG4gICAgfVxuICAgIHJldHVybiBvZmZzZXQ7XG4gIH0sXG4gIGlzQWN0aXZlOiBmdW5jdGlvbiBpc0FjdGl2ZShlbGVtKSB7XG4gICAgcmV0dXJuIGVsZW0gPT09IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgJiYgKGVsZW0udHlwZSB8fCBlbGVtLmhyZWYpO1xuICB9XG59O1xuXG52YXIgQm9vbGVhbkNvbnRyb2xsZXIgPSBmdW5jdGlvbiAoX0NvbnRyb2xsZXIpIHtcbiAgaW5oZXJpdHMoQm9vbGVhbkNvbnRyb2xsZXIsIF9Db250cm9sbGVyKTtcbiAgZnVuY3Rpb24gQm9vbGVhbkNvbnRyb2xsZXIob2JqZWN0LCBwcm9wZXJ0eSkge1xuICAgIGNsYXNzQ2FsbENoZWNrKHRoaXMsIEJvb2xlYW5Db250cm9sbGVyKTtcbiAgICB2YXIgX3RoaXMyID0gcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoQm9vbGVhbkNvbnRyb2xsZXIuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihCb29sZWFuQ29udHJvbGxlcikpLmNhbGwodGhpcywgb2JqZWN0LCBwcm9wZXJ0eSkpO1xuICAgIHZhciBfdGhpcyA9IF90aGlzMjtcbiAgICBfdGhpczIuX19wcmV2ID0gX3RoaXMyLmdldFZhbHVlKCk7XG4gICAgX3RoaXMyLl9fY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIF90aGlzMi5fX2NoZWNrYm94LnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpO1xuICAgIGZ1bmN0aW9uIG9uQ2hhbmdlKCkge1xuICAgICAgX3RoaXMuc2V0VmFsdWUoIV90aGlzLl9fcHJldik7XG4gICAgfVxuICAgIGRvbS5iaW5kKF90aGlzMi5fX2NoZWNrYm94LCAnY2hhbmdlJywgb25DaGFuZ2UsIGZhbHNlKTtcbiAgICBfdGhpczIuZG9tRWxlbWVudC5hcHBlbmRDaGlsZChfdGhpczIuX19jaGVja2JveCk7XG4gICAgX3RoaXMyLnVwZGF0ZURpc3BsYXkoKTtcbiAgICByZXR1cm4gX3RoaXMyO1xuICB9XG4gIGNyZWF0ZUNsYXNzKEJvb2xlYW5Db250cm9sbGVyLCBbe1xuICAgIGtleTogJ3NldFZhbHVlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0VmFsdWUodikge1xuICAgICAgdmFyIHRvUmV0dXJuID0gZ2V0KEJvb2xlYW5Db250cm9sbGVyLnByb3RvdHlwZS5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKEJvb2xlYW5Db250cm9sbGVyLnByb3RvdHlwZSksICdzZXRWYWx1ZScsIHRoaXMpLmNhbGwodGhpcywgdik7XG4gICAgICBpZiAodGhpcy5fX29uRmluaXNoQ2hhbmdlKSB7XG4gICAgICAgIHRoaXMuX19vbkZpbmlzaENoYW5nZS5jYWxsKHRoaXMsIHRoaXMuZ2V0VmFsdWUoKSk7XG4gICAgICB9XG4gICAgICB0aGlzLl9fcHJldiA9IHRoaXMuZ2V0VmFsdWUoKTtcbiAgICAgIHJldHVybiB0b1JldHVybjtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICd1cGRhdGVEaXNwbGF5JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gdXBkYXRlRGlzcGxheSgpIHtcbiAgICAgIGlmICh0aGlzLmdldFZhbHVlKCkgPT09IHRydWUpIHtcbiAgICAgICAgdGhpcy5fX2NoZWNrYm94LnNldEF0dHJpYnV0ZSgnY2hlY2tlZCcsICdjaGVja2VkJyk7XG4gICAgICAgIHRoaXMuX19jaGVja2JveC5jaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5fX3ByZXYgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fX2NoZWNrYm94LmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fX3ByZXYgPSBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBnZXQoQm9vbGVhbkNvbnRyb2xsZXIucHJvdG90eXBlLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoQm9vbGVhbkNvbnRyb2xsZXIucHJvdG90eXBlKSwgJ3VwZGF0ZURpc3BsYXknLCB0aGlzKS5jYWxsKHRoaXMpO1xuICAgIH1cbiAgfV0pO1xuICByZXR1cm4gQm9vbGVhbkNvbnRyb2xsZXI7XG59KENvbnRyb2xsZXIpO1xuXG52YXIgT3B0aW9uQ29udHJvbGxlciA9IGZ1bmN0aW9uIChfQ29udHJvbGxlcikge1xuICBpbmhlcml0cyhPcHRpb25Db250cm9sbGVyLCBfQ29udHJvbGxlcik7XG4gIGZ1bmN0aW9uIE9wdGlvbkNvbnRyb2xsZXIob2JqZWN0LCBwcm9wZXJ0eSwgb3B0cykge1xuICAgIGNsYXNzQ2FsbENoZWNrKHRoaXMsIE9wdGlvbkNvbnRyb2xsZXIpO1xuICAgIHZhciBfdGhpczIgPSBwb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChPcHRpb25Db250cm9sbGVyLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoT3B0aW9uQ29udHJvbGxlcikpLmNhbGwodGhpcywgb2JqZWN0LCBwcm9wZXJ0eSkpO1xuICAgIHZhciBvcHRpb25zID0gb3B0cztcbiAgICB2YXIgX3RoaXMgPSBfdGhpczI7XG4gICAgX3RoaXMyLl9fc2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gICAgaWYgKENvbW1vbi5pc0FycmF5KG9wdGlvbnMpKSB7XG4gICAgICB2YXIgbWFwID0ge307XG4gICAgICBDb21tb24uZWFjaChvcHRpb25zLCBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICBtYXBbZWxlbWVudF0gPSBlbGVtZW50O1xuICAgICAgfSk7XG4gICAgICBvcHRpb25zID0gbWFwO1xuICAgIH1cbiAgICBDb21tb24uZWFjaChvcHRpb25zLCBmdW5jdGlvbiAodmFsdWUsIGtleSkge1xuICAgICAgdmFyIG9wdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgb3B0LmlubmVySFRNTCA9IGtleTtcbiAgICAgIG9wdC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgdmFsdWUpO1xuICAgICAgX3RoaXMuX19zZWxlY3QuYXBwZW5kQ2hpbGQob3B0KTtcbiAgICB9KTtcbiAgICBfdGhpczIudXBkYXRlRGlzcGxheSgpO1xuICAgIGRvbS5iaW5kKF90aGlzMi5fX3NlbGVjdCwgJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBkZXNpcmVkVmFsdWUgPSB0aGlzLm9wdGlvbnNbdGhpcy5zZWxlY3RlZEluZGV4XS52YWx1ZTtcbiAgICAgIF90aGlzLnNldFZhbHVlKGRlc2lyZWRWYWx1ZSk7XG4gICAgfSk7XG4gICAgX3RoaXMyLmRvbUVsZW1lbnQuYXBwZW5kQ2hpbGQoX3RoaXMyLl9fc2VsZWN0KTtcbiAgICByZXR1cm4gX3RoaXMyO1xuICB9XG4gIGNyZWF0ZUNsYXNzKE9wdGlvbkNvbnRyb2xsZXIsIFt7XG4gICAga2V5OiAnc2V0VmFsdWUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRWYWx1ZSh2KSB7XG4gICAgICB2YXIgdG9SZXR1cm4gPSBnZXQoT3B0aW9uQ29udHJvbGxlci5wcm90b3R5cGUuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihPcHRpb25Db250cm9sbGVyLnByb3RvdHlwZSksICdzZXRWYWx1ZScsIHRoaXMpLmNhbGwodGhpcywgdik7XG4gICAgICBpZiAodGhpcy5fX29uRmluaXNoQ2hhbmdlKSB7XG4gICAgICAgIHRoaXMuX19vbkZpbmlzaENoYW5nZS5jYWxsKHRoaXMsIHRoaXMuZ2V0VmFsdWUoKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdG9SZXR1cm47XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAndXBkYXRlRGlzcGxheScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHVwZGF0ZURpc3BsYXkoKSB7XG4gICAgICBpZiAoZG9tLmlzQWN0aXZlKHRoaXMuX19zZWxlY3QpKSByZXR1cm4gdGhpcztcbiAgICAgIHRoaXMuX19zZWxlY3QudmFsdWUgPSB0aGlzLmdldFZhbHVlKCk7XG4gICAgICByZXR1cm4gZ2V0KE9wdGlvbkNvbnRyb2xsZXIucHJvdG90eXBlLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoT3B0aW9uQ29udHJvbGxlci5wcm90b3R5cGUpLCAndXBkYXRlRGlzcGxheScsIHRoaXMpLmNhbGwodGhpcyk7XG4gICAgfVxuICB9XSk7XG4gIHJldHVybiBPcHRpb25Db250cm9sbGVyO1xufShDb250cm9sbGVyKTtcblxudmFyIFN0cmluZ0NvbnRyb2xsZXIgPSBmdW5jdGlvbiAoX0NvbnRyb2xsZXIpIHtcbiAgaW5oZXJpdHMoU3RyaW5nQ29udHJvbGxlciwgX0NvbnRyb2xsZXIpO1xuICBmdW5jdGlvbiBTdHJpbmdDb250cm9sbGVyKG9iamVjdCwgcHJvcGVydHkpIHtcbiAgICBjbGFzc0NhbGxDaGVjayh0aGlzLCBTdHJpbmdDb250cm9sbGVyKTtcbiAgICB2YXIgX3RoaXMyID0gcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoU3RyaW5nQ29udHJvbGxlci5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKFN0cmluZ0NvbnRyb2xsZXIpKS5jYWxsKHRoaXMsIG9iamVjdCwgcHJvcGVydHkpKTtcbiAgICB2YXIgX3RoaXMgPSBfdGhpczI7XG4gICAgZnVuY3Rpb24gb25DaGFuZ2UoKSB7XG4gICAgICBfdGhpcy5zZXRWYWx1ZShfdGhpcy5fX2lucHV0LnZhbHVlKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gb25CbHVyKCkge1xuICAgICAgaWYgKF90aGlzLl9fb25GaW5pc2hDaGFuZ2UpIHtcbiAgICAgICAgX3RoaXMuX19vbkZpbmlzaENoYW5nZS5jYWxsKF90aGlzLCBfdGhpcy5nZXRWYWx1ZSgpKTtcbiAgICAgIH1cbiAgICB9XG4gICAgX3RoaXMyLl9faW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIF90aGlzMi5fX2lucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gICAgZG9tLmJpbmQoX3RoaXMyLl9faW5wdXQsICdrZXl1cCcsIG9uQ2hhbmdlKTtcbiAgICBkb20uYmluZChfdGhpczIuX19pbnB1dCwgJ2NoYW5nZScsIG9uQ2hhbmdlKTtcbiAgICBkb20uYmluZChfdGhpczIuX19pbnB1dCwgJ2JsdXInLCBvbkJsdXIpO1xuICAgIGRvbS5iaW5kKF90aGlzMi5fX2lucHV0LCAna2V5ZG93bicsIGZ1bmN0aW9uIChlKSB7XG4gICAgICBpZiAoZS5rZXlDb2RlID09PSAxMykge1xuICAgICAgICB0aGlzLmJsdXIoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBfdGhpczIudXBkYXRlRGlzcGxheSgpO1xuICAgIF90aGlzMi5kb21FbGVtZW50LmFwcGVuZENoaWxkKF90aGlzMi5fX2lucHV0KTtcbiAgICByZXR1cm4gX3RoaXMyO1xuICB9XG4gIGNyZWF0ZUNsYXNzKFN0cmluZ0NvbnRyb2xsZXIsIFt7XG4gICAga2V5OiAndXBkYXRlRGlzcGxheScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHVwZGF0ZURpc3BsYXkoKSB7XG4gICAgICBpZiAoIWRvbS5pc0FjdGl2ZSh0aGlzLl9faW5wdXQpKSB7XG4gICAgICAgIHRoaXMuX19pbnB1dC52YWx1ZSA9IHRoaXMuZ2V0VmFsdWUoKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBnZXQoU3RyaW5nQ29udHJvbGxlci5wcm90b3R5cGUuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihTdHJpbmdDb250cm9sbGVyLnByb3RvdHlwZSksICd1cGRhdGVEaXNwbGF5JywgdGhpcykuY2FsbCh0aGlzKTtcbiAgICB9XG4gIH1dKTtcbiAgcmV0dXJuIFN0cmluZ0NvbnRyb2xsZXI7XG59KENvbnRyb2xsZXIpO1xuXG5mdW5jdGlvbiBudW1EZWNpbWFscyh4KSB7XG4gIHZhciBfeCA9IHgudG9TdHJpbmcoKTtcbiAgaWYgKF94LmluZGV4T2YoJy4nKSA+IC0xKSB7XG4gICAgcmV0dXJuIF94Lmxlbmd0aCAtIF94LmluZGV4T2YoJy4nKSAtIDE7XG4gIH1cbiAgcmV0dXJuIDA7XG59XG52YXIgTnVtYmVyQ29udHJvbGxlciA9IGZ1bmN0aW9uIChfQ29udHJvbGxlcikge1xuICBpbmhlcml0cyhOdW1iZXJDb250cm9sbGVyLCBfQ29udHJvbGxlcik7XG4gIGZ1bmN0aW9uIE51bWJlckNvbnRyb2xsZXIob2JqZWN0LCBwcm9wZXJ0eSwgcGFyYW1zKSB7XG4gICAgY2xhc3NDYWxsQ2hlY2sodGhpcywgTnVtYmVyQ29udHJvbGxlcik7XG4gICAgdmFyIF90aGlzID0gcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoTnVtYmVyQ29udHJvbGxlci5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKE51bWJlckNvbnRyb2xsZXIpKS5jYWxsKHRoaXMsIG9iamVjdCwgcHJvcGVydHkpKTtcbiAgICB2YXIgX3BhcmFtcyA9IHBhcmFtcyB8fCB7fTtcbiAgICBfdGhpcy5fX21pbiA9IF9wYXJhbXMubWluO1xuICAgIF90aGlzLl9fbWF4ID0gX3BhcmFtcy5tYXg7XG4gICAgX3RoaXMuX19zdGVwID0gX3BhcmFtcy5zdGVwO1xuICAgIGlmIChDb21tb24uaXNVbmRlZmluZWQoX3RoaXMuX19zdGVwKSkge1xuICAgICAgaWYgKF90aGlzLmluaXRpYWxWYWx1ZSA9PT0gMCkge1xuICAgICAgICBfdGhpcy5fX2ltcGxpZWRTdGVwID0gMTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIF90aGlzLl9faW1wbGllZFN0ZXAgPSBNYXRoLnBvdygxMCwgTWF0aC5mbG9vcihNYXRoLmxvZyhNYXRoLmFicyhfdGhpcy5pbml0aWFsVmFsdWUpKSAvIE1hdGguTE4xMCkpIC8gMTA7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIF90aGlzLl9faW1wbGllZFN0ZXAgPSBfdGhpcy5fX3N0ZXA7XG4gICAgfVxuICAgIF90aGlzLl9fcHJlY2lzaW9uID0gbnVtRGVjaW1hbHMoX3RoaXMuX19pbXBsaWVkU3RlcCk7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG4gIGNyZWF0ZUNsYXNzKE51bWJlckNvbnRyb2xsZXIsIFt7XG4gICAga2V5OiAnc2V0VmFsdWUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRWYWx1ZSh2KSB7XG4gICAgICB2YXIgX3YgPSB2O1xuICAgICAgaWYgKHRoaXMuX19taW4gIT09IHVuZGVmaW5lZCAmJiBfdiA8IHRoaXMuX19taW4pIHtcbiAgICAgICAgX3YgPSB0aGlzLl9fbWluO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLl9fbWF4ICE9PSB1bmRlZmluZWQgJiYgX3YgPiB0aGlzLl9fbWF4KSB7XG4gICAgICAgIF92ID0gdGhpcy5fX21heDtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLl9fc3RlcCAhPT0gdW5kZWZpbmVkICYmIF92ICUgdGhpcy5fX3N0ZXAgIT09IDApIHtcbiAgICAgICAgX3YgPSBNYXRoLnJvdW5kKF92IC8gdGhpcy5fX3N0ZXApICogdGhpcy5fX3N0ZXA7XG4gICAgICB9XG4gICAgICByZXR1cm4gZ2V0KE51bWJlckNvbnRyb2xsZXIucHJvdG90eXBlLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoTnVtYmVyQ29udHJvbGxlci5wcm90b3R5cGUpLCAnc2V0VmFsdWUnLCB0aGlzKS5jYWxsKHRoaXMsIF92KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdtaW4nLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBtaW4obWluVmFsdWUpIHtcbiAgICAgIHRoaXMuX19taW4gPSBtaW5WYWx1ZTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ21heCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG1heChtYXhWYWx1ZSkge1xuICAgICAgdGhpcy5fX21heCA9IG1heFZhbHVlO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnc3RlcCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHN0ZXAoc3RlcFZhbHVlKSB7XG4gICAgICB0aGlzLl9fc3RlcCA9IHN0ZXBWYWx1ZTtcbiAgICAgIHRoaXMuX19pbXBsaWVkU3RlcCA9IHN0ZXBWYWx1ZTtcbiAgICAgIHRoaXMuX19wcmVjaXNpb24gPSBudW1EZWNpbWFscyhzdGVwVmFsdWUpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICB9XSk7XG4gIHJldHVybiBOdW1iZXJDb250cm9sbGVyO1xufShDb250cm9sbGVyKTtcblxuZnVuY3Rpb24gcm91bmRUb0RlY2ltYWwodmFsdWUsIGRlY2ltYWxzKSB7XG4gIHZhciB0ZW5UbyA9IE1hdGgucG93KDEwLCBkZWNpbWFscyk7XG4gIHJldHVybiBNYXRoLnJvdW5kKHZhbHVlICogdGVuVG8pIC8gdGVuVG87XG59XG52YXIgTnVtYmVyQ29udHJvbGxlckJveCA9IGZ1bmN0aW9uIChfTnVtYmVyQ29udHJvbGxlcikge1xuICBpbmhlcml0cyhOdW1iZXJDb250cm9sbGVyQm94LCBfTnVtYmVyQ29udHJvbGxlcik7XG4gIGZ1bmN0aW9uIE51bWJlckNvbnRyb2xsZXJCb3gob2JqZWN0LCBwcm9wZXJ0eSwgcGFyYW1zKSB7XG4gICAgY2xhc3NDYWxsQ2hlY2sodGhpcywgTnVtYmVyQ29udHJvbGxlckJveCk7XG4gICAgdmFyIF90aGlzMiA9IHBvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKE51bWJlckNvbnRyb2xsZXJCb3guX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihOdW1iZXJDb250cm9sbGVyQm94KSkuY2FsbCh0aGlzLCBvYmplY3QsIHByb3BlcnR5LCBwYXJhbXMpKTtcbiAgICBfdGhpczIuX190cnVuY2F0aW9uU3VzcGVuZGVkID0gZmFsc2U7XG4gICAgdmFyIF90aGlzID0gX3RoaXMyO1xuICAgIHZhciBwcmV2WSA9IHZvaWQgMDtcbiAgICBmdW5jdGlvbiBvbkNoYW5nZSgpIHtcbiAgICAgIHZhciBhdHRlbXB0ZWQgPSBwYXJzZUZsb2F0KF90aGlzLl9faW5wdXQudmFsdWUpO1xuICAgICAgaWYgKCFDb21tb24uaXNOYU4oYXR0ZW1wdGVkKSkge1xuICAgICAgICBfdGhpcy5zZXRWYWx1ZShhdHRlbXB0ZWQpO1xuICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBvbkZpbmlzaCgpIHtcbiAgICAgIGlmIChfdGhpcy5fX29uRmluaXNoQ2hhbmdlKSB7XG4gICAgICAgIF90aGlzLl9fb25GaW5pc2hDaGFuZ2UuY2FsbChfdGhpcywgX3RoaXMuZ2V0VmFsdWUoKSk7XG4gICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIG9uQmx1cigpIHtcbiAgICAgIG9uRmluaXNoKCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIG9uTW91c2VEcmFnKGUpIHtcbiAgICAgIHZhciBkaWZmID0gcHJldlkgLSBlLmNsaWVudFk7XG4gICAgICBfdGhpcy5zZXRWYWx1ZShfdGhpcy5nZXRWYWx1ZSgpICsgZGlmZiAqIF90aGlzLl9faW1wbGllZFN0ZXApO1xuICAgICAgcHJldlkgPSBlLmNsaWVudFk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIG9uTW91c2VVcCgpIHtcbiAgICAgIGRvbS51bmJpbmQod2luZG93LCAnbW91c2Vtb3ZlJywgb25Nb3VzZURyYWcpO1xuICAgICAgZG9tLnVuYmluZCh3aW5kb3csICdtb3VzZXVwJywgb25Nb3VzZVVwKTtcbiAgICAgIG9uRmluaXNoKCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIG9uTW91c2VEb3duKGUpIHtcbiAgICAgIGRvbS5iaW5kKHdpbmRvdywgJ21vdXNlbW92ZScsIG9uTW91c2VEcmFnKTtcbiAgICAgIGRvbS5iaW5kKHdpbmRvdywgJ21vdXNldXAnLCBvbk1vdXNlVXApO1xuICAgICAgcHJldlkgPSBlLmNsaWVudFk7XG4gICAgfVxuICAgIF90aGlzMi5fX2lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBfdGhpczIuX19pbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICAgIGRvbS5iaW5kKF90aGlzMi5fX2lucHV0LCAnY2hhbmdlJywgb25DaGFuZ2UpO1xuICAgIGRvbS5iaW5kKF90aGlzMi5fX2lucHV0LCAnYmx1cicsIG9uQmx1cik7XG4gICAgZG9tLmJpbmQoX3RoaXMyLl9faW5wdXQsICdtb3VzZWRvd24nLCBvbk1vdXNlRG93bik7XG4gICAgZG9tLmJpbmQoX3RoaXMyLl9faW5wdXQsICdrZXlkb3duJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgIGlmIChlLmtleUNvZGUgPT09IDEzKSB7XG4gICAgICAgIF90aGlzLl9fdHJ1bmNhdGlvblN1c3BlbmRlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuYmx1cigpO1xuICAgICAgICBfdGhpcy5fX3RydW5jYXRpb25TdXNwZW5kZWQgPSBmYWxzZTtcbiAgICAgICAgb25GaW5pc2goKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBfdGhpczIudXBkYXRlRGlzcGxheSgpO1xuICAgIF90aGlzMi5kb21FbGVtZW50LmFwcGVuZENoaWxkKF90aGlzMi5fX2lucHV0KTtcbiAgICByZXR1cm4gX3RoaXMyO1xuICB9XG4gIGNyZWF0ZUNsYXNzKE51bWJlckNvbnRyb2xsZXJCb3gsIFt7XG4gICAga2V5OiAndXBkYXRlRGlzcGxheScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHVwZGF0ZURpc3BsYXkoKSB7XG4gICAgICB0aGlzLl9faW5wdXQudmFsdWUgPSB0aGlzLl9fdHJ1bmNhdGlvblN1c3BlbmRlZCA/IHRoaXMuZ2V0VmFsdWUoKSA6IHJvdW5kVG9EZWNpbWFsKHRoaXMuZ2V0VmFsdWUoKSwgdGhpcy5fX3ByZWNpc2lvbik7XG4gICAgICByZXR1cm4gZ2V0KE51bWJlckNvbnRyb2xsZXJCb3gucHJvdG90eXBlLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoTnVtYmVyQ29udHJvbGxlckJveC5wcm90b3R5cGUpLCAndXBkYXRlRGlzcGxheScsIHRoaXMpLmNhbGwodGhpcyk7XG4gICAgfVxuICB9XSk7XG4gIHJldHVybiBOdW1iZXJDb250cm9sbGVyQm94O1xufShOdW1iZXJDb250cm9sbGVyKTtcblxuZnVuY3Rpb24gbWFwKHYsIGkxLCBpMiwgbzEsIG8yKSB7XG4gIHJldHVybiBvMSArIChvMiAtIG8xKSAqICgodiAtIGkxKSAvIChpMiAtIGkxKSk7XG59XG52YXIgTnVtYmVyQ29udHJvbGxlclNsaWRlciA9IGZ1bmN0aW9uIChfTnVtYmVyQ29udHJvbGxlcikge1xuICBpbmhlcml0cyhOdW1iZXJDb250cm9sbGVyU2xpZGVyLCBfTnVtYmVyQ29udHJvbGxlcik7XG4gIGZ1bmN0aW9uIE51bWJlckNvbnRyb2xsZXJTbGlkZXIob2JqZWN0LCBwcm9wZXJ0eSwgbWluLCBtYXgsIHN0ZXApIHtcbiAgICBjbGFzc0NhbGxDaGVjayh0aGlzLCBOdW1iZXJDb250cm9sbGVyU2xpZGVyKTtcbiAgICB2YXIgX3RoaXMyID0gcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoTnVtYmVyQ29udHJvbGxlclNsaWRlci5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKE51bWJlckNvbnRyb2xsZXJTbGlkZXIpKS5jYWxsKHRoaXMsIG9iamVjdCwgcHJvcGVydHksIHsgbWluOiBtaW4sIG1heDogbWF4LCBzdGVwOiBzdGVwIH0pKTtcbiAgICB2YXIgX3RoaXMgPSBfdGhpczI7XG4gICAgX3RoaXMyLl9fYmFja2dyb3VuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIF90aGlzMi5fX2ZvcmVncm91bmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkb20uYmluZChfdGhpczIuX19iYWNrZ3JvdW5kLCAnbW91c2Vkb3duJywgb25Nb3VzZURvd24pO1xuICAgIGRvbS5iaW5kKF90aGlzMi5fX2JhY2tncm91bmQsICd0b3VjaHN0YXJ0Jywgb25Ub3VjaFN0YXJ0KTtcbiAgICBkb20uYWRkQ2xhc3MoX3RoaXMyLl9fYmFja2dyb3VuZCwgJ3NsaWRlcicpO1xuICAgIGRvbS5hZGRDbGFzcyhfdGhpczIuX19mb3JlZ3JvdW5kLCAnc2xpZGVyLWZnJyk7XG4gICAgZnVuY3Rpb24gb25Nb3VzZURvd24oZSkge1xuICAgICAgZG9jdW1lbnQuYWN0aXZlRWxlbWVudC5ibHVyKCk7XG4gICAgICBkb20uYmluZCh3aW5kb3csICdtb3VzZW1vdmUnLCBvbk1vdXNlRHJhZyk7XG4gICAgICBkb20uYmluZCh3aW5kb3csICdtb3VzZXVwJywgb25Nb3VzZVVwKTtcbiAgICAgIG9uTW91c2VEcmFnKGUpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBvbk1vdXNlRHJhZyhlKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB2YXIgYmdSZWN0ID0gX3RoaXMuX19iYWNrZ3JvdW5kLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgX3RoaXMuc2V0VmFsdWUobWFwKGUuY2xpZW50WCwgYmdSZWN0LmxlZnQsIGJnUmVjdC5yaWdodCwgX3RoaXMuX19taW4sIF90aGlzLl9fbWF4KSk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGZ1bmN0aW9uIG9uTW91c2VVcCgpIHtcbiAgICAgIGRvbS51bmJpbmQod2luZG93LCAnbW91c2Vtb3ZlJywgb25Nb3VzZURyYWcpO1xuICAgICAgZG9tLnVuYmluZCh3aW5kb3csICdtb3VzZXVwJywgb25Nb3VzZVVwKTtcbiAgICAgIGlmIChfdGhpcy5fX29uRmluaXNoQ2hhbmdlKSB7XG4gICAgICAgIF90aGlzLl9fb25GaW5pc2hDaGFuZ2UuY2FsbChfdGhpcywgX3RoaXMuZ2V0VmFsdWUoKSk7XG4gICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIG9uVG91Y2hTdGFydChlKSB7XG4gICAgICBpZiAoZS50b3VjaGVzLmxlbmd0aCAhPT0gMSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBkb20uYmluZCh3aW5kb3csICd0b3VjaG1vdmUnLCBvblRvdWNoTW92ZSk7XG4gICAgICBkb20uYmluZCh3aW5kb3csICd0b3VjaGVuZCcsIG9uVG91Y2hFbmQpO1xuICAgICAgb25Ub3VjaE1vdmUoZSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIG9uVG91Y2hNb3ZlKGUpIHtcbiAgICAgIHZhciBjbGllbnRYID0gZS50b3VjaGVzWzBdLmNsaWVudFg7XG4gICAgICB2YXIgYmdSZWN0ID0gX3RoaXMuX19iYWNrZ3JvdW5kLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgX3RoaXMuc2V0VmFsdWUobWFwKGNsaWVudFgsIGJnUmVjdC5sZWZ0LCBiZ1JlY3QucmlnaHQsIF90aGlzLl9fbWluLCBfdGhpcy5fX21heCkpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBvblRvdWNoRW5kKCkge1xuICAgICAgZG9tLnVuYmluZCh3aW5kb3csICd0b3VjaG1vdmUnLCBvblRvdWNoTW92ZSk7XG4gICAgICBkb20udW5iaW5kKHdpbmRvdywgJ3RvdWNoZW5kJywgb25Ub3VjaEVuZCk7XG4gICAgICBpZiAoX3RoaXMuX19vbkZpbmlzaENoYW5nZSkge1xuICAgICAgICBfdGhpcy5fX29uRmluaXNoQ2hhbmdlLmNhbGwoX3RoaXMsIF90aGlzLmdldFZhbHVlKCkpO1xuICAgICAgfVxuICAgIH1cbiAgICBfdGhpczIudXBkYXRlRGlzcGxheSgpO1xuICAgIF90aGlzMi5fX2JhY2tncm91bmQuYXBwZW5kQ2hpbGQoX3RoaXMyLl9fZm9yZWdyb3VuZCk7XG4gICAgX3RoaXMyLmRvbUVsZW1lbnQuYXBwZW5kQ2hpbGQoX3RoaXMyLl9fYmFja2dyb3VuZCk7XG4gICAgcmV0dXJuIF90aGlzMjtcbiAgfVxuICBjcmVhdGVDbGFzcyhOdW1iZXJDb250cm9sbGVyU2xpZGVyLCBbe1xuICAgIGtleTogJ3VwZGF0ZURpc3BsYXknLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB1cGRhdGVEaXNwbGF5KCkge1xuICAgICAgdmFyIHBjdCA9ICh0aGlzLmdldFZhbHVlKCkgLSB0aGlzLl9fbWluKSAvICh0aGlzLl9fbWF4IC0gdGhpcy5fX21pbik7XG4gICAgICB0aGlzLl9fZm9yZWdyb3VuZC5zdHlsZS53aWR0aCA9IHBjdCAqIDEwMCArICclJztcbiAgICAgIHJldHVybiBnZXQoTnVtYmVyQ29udHJvbGxlclNsaWRlci5wcm90b3R5cGUuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihOdW1iZXJDb250cm9sbGVyU2xpZGVyLnByb3RvdHlwZSksICd1cGRhdGVEaXNwbGF5JywgdGhpcykuY2FsbCh0aGlzKTtcbiAgICB9XG4gIH1dKTtcbiAgcmV0dXJuIE51bWJlckNvbnRyb2xsZXJTbGlkZXI7XG59KE51bWJlckNvbnRyb2xsZXIpO1xuXG52YXIgRnVuY3Rpb25Db250cm9sbGVyID0gZnVuY3Rpb24gKF9Db250cm9sbGVyKSB7XG4gIGluaGVyaXRzKEZ1bmN0aW9uQ29udHJvbGxlciwgX0NvbnRyb2xsZXIpO1xuICBmdW5jdGlvbiBGdW5jdGlvbkNvbnRyb2xsZXIob2JqZWN0LCBwcm9wZXJ0eSwgdGV4dCkge1xuICAgIGNsYXNzQ2FsbENoZWNrKHRoaXMsIEZ1bmN0aW9uQ29udHJvbGxlcik7XG4gICAgdmFyIF90aGlzMiA9IHBvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKEZ1bmN0aW9uQ29udHJvbGxlci5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKEZ1bmN0aW9uQ29udHJvbGxlcikpLmNhbGwodGhpcywgb2JqZWN0LCBwcm9wZXJ0eSkpO1xuICAgIHZhciBfdGhpcyA9IF90aGlzMjtcbiAgICBfdGhpczIuX19idXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBfdGhpczIuX19idXR0b24uaW5uZXJIVE1MID0gdGV4dCA9PT0gdW5kZWZpbmVkID8gJ0ZpcmUnIDogdGV4dDtcbiAgICBkb20uYmluZChfdGhpczIuX19idXR0b24sICdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBfdGhpcy5maXJlKCk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSk7XG4gICAgZG9tLmFkZENsYXNzKF90aGlzMi5fX2J1dHRvbiwgJ2J1dHRvbicpO1xuICAgIF90aGlzMi5kb21FbGVtZW50LmFwcGVuZENoaWxkKF90aGlzMi5fX2J1dHRvbik7XG4gICAgcmV0dXJuIF90aGlzMjtcbiAgfVxuICBjcmVhdGVDbGFzcyhGdW5jdGlvbkNvbnRyb2xsZXIsIFt7XG4gICAga2V5OiAnZmlyZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGZpcmUoKSB7XG4gICAgICBpZiAodGhpcy5fX29uQ2hhbmdlKSB7XG4gICAgICAgIHRoaXMuX19vbkNoYW5nZS5jYWxsKHRoaXMpO1xuICAgICAgfVxuICAgICAgdGhpcy5nZXRWYWx1ZSgpLmNhbGwodGhpcy5vYmplY3QpO1xuICAgICAgaWYgKHRoaXMuX19vbkZpbmlzaENoYW5nZSkge1xuICAgICAgICB0aGlzLl9fb25GaW5pc2hDaGFuZ2UuY2FsbCh0aGlzLCB0aGlzLmdldFZhbHVlKCkpO1xuICAgICAgfVxuICAgIH1cbiAgfV0pO1xuICByZXR1cm4gRnVuY3Rpb25Db250cm9sbGVyO1xufShDb250cm9sbGVyKTtcblxudmFyIENvbG9yQ29udHJvbGxlciA9IGZ1bmN0aW9uIChfQ29udHJvbGxlcikge1xuICBpbmhlcml0cyhDb2xvckNvbnRyb2xsZXIsIF9Db250cm9sbGVyKTtcbiAgZnVuY3Rpb24gQ29sb3JDb250cm9sbGVyKG9iamVjdCwgcHJvcGVydHkpIHtcbiAgICBjbGFzc0NhbGxDaGVjayh0aGlzLCBDb2xvckNvbnRyb2xsZXIpO1xuICAgIHZhciBfdGhpczIgPSBwb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChDb2xvckNvbnRyb2xsZXIuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihDb2xvckNvbnRyb2xsZXIpKS5jYWxsKHRoaXMsIG9iamVjdCwgcHJvcGVydHkpKTtcbiAgICBfdGhpczIuX19jb2xvciA9IG5ldyBDb2xvcihfdGhpczIuZ2V0VmFsdWUoKSk7XG4gICAgX3RoaXMyLl9fdGVtcCA9IG5ldyBDb2xvcigwKTtcbiAgICB2YXIgX3RoaXMgPSBfdGhpczI7XG4gICAgX3RoaXMyLmRvbUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkb20ubWFrZVNlbGVjdGFibGUoX3RoaXMyLmRvbUVsZW1lbnQsIGZhbHNlKTtcbiAgICBfdGhpczIuX19zZWxlY3RvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIF90aGlzMi5fX3NlbGVjdG9yLmNsYXNzTmFtZSA9ICdzZWxlY3Rvcic7XG4gICAgX3RoaXMyLl9fc2F0dXJhdGlvbl9maWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIF90aGlzMi5fX3NhdHVyYXRpb25fZmllbGQuY2xhc3NOYW1lID0gJ3NhdHVyYXRpb24tZmllbGQnO1xuICAgIF90aGlzMi5fX2ZpZWxkX2tub2IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBfdGhpczIuX19maWVsZF9rbm9iLmNsYXNzTmFtZSA9ICdmaWVsZC1rbm9iJztcbiAgICBfdGhpczIuX19maWVsZF9rbm9iX2JvcmRlciA9ICcycHggc29saWQgJztcbiAgICBfdGhpczIuX19odWVfa25vYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIF90aGlzMi5fX2h1ZV9rbm9iLmNsYXNzTmFtZSA9ICdodWUta25vYic7XG4gICAgX3RoaXMyLl9faHVlX2ZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgX3RoaXMyLl9faHVlX2ZpZWxkLmNsYXNzTmFtZSA9ICdodWUtZmllbGQnO1xuICAgIF90aGlzMi5fX2lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBfdGhpczIuX19pbnB1dC50eXBlID0gJ3RleHQnO1xuICAgIF90aGlzMi5fX2lucHV0X3RleHRTaGFkb3cgPSAnMCAxcHggMXB4ICc7XG4gICAgZG9tLmJpbmQoX3RoaXMyLl9faW5wdXQsICdrZXlkb3duJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgIGlmIChlLmtleUNvZGUgPT09IDEzKSB7XG4gICAgICAgIG9uQmx1ci5jYWxsKHRoaXMpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGRvbS5iaW5kKF90aGlzMi5fX2lucHV0LCAnYmx1cicsIG9uQmx1cik7XG4gICAgZG9tLmJpbmQoX3RoaXMyLl9fc2VsZWN0b3IsICdtb3VzZWRvd24nLCBmdW5jdGlvbiAoKSB7XG4gICAgICBkb20uYWRkQ2xhc3ModGhpcywgJ2RyYWcnKS5iaW5kKHdpbmRvdywgJ21vdXNldXAnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGRvbS5yZW1vdmVDbGFzcyhfdGhpcy5fX3NlbGVjdG9yLCAnZHJhZycpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgZG9tLmJpbmQoX3RoaXMyLl9fc2VsZWN0b3IsICd0b3VjaHN0YXJ0JywgZnVuY3Rpb24gKCkge1xuICAgICAgZG9tLmFkZENsYXNzKHRoaXMsICdkcmFnJykuYmluZCh3aW5kb3csICd0b3VjaGVuZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZG9tLnJlbW92ZUNsYXNzKF90aGlzLl9fc2VsZWN0b3IsICdkcmFnJyk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICB2YXIgdmFsdWVGaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIENvbW1vbi5leHRlbmQoX3RoaXMyLl9fc2VsZWN0b3Iuc3R5bGUsIHtcbiAgICAgIHdpZHRoOiAnMTIycHgnLFxuICAgICAgaGVpZ2h0OiAnMTAycHgnLFxuICAgICAgcGFkZGluZzogJzNweCcsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMjIyJyxcbiAgICAgIGJveFNoYWRvdzogJzBweCAxcHggM3B4IHJnYmEoMCwwLDAsMC4zKSdcbiAgICB9KTtcbiAgICBDb21tb24uZXh0ZW5kKF90aGlzMi5fX2ZpZWxkX2tub2Iuc3R5bGUsIHtcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgd2lkdGg6ICcxMnB4JyxcbiAgICAgIGhlaWdodDogJzEycHgnLFxuICAgICAgYm9yZGVyOiBfdGhpczIuX19maWVsZF9rbm9iX2JvcmRlciArIChfdGhpczIuX19jb2xvci52IDwgMC41ID8gJyNmZmYnIDogJyMwMDAnKSxcbiAgICAgIGJveFNoYWRvdzogJzBweCAxcHggM3B4IHJnYmEoMCwwLDAsMC41KScsXG4gICAgICBib3JkZXJSYWRpdXM6ICcxMnB4JyxcbiAgICAgIHpJbmRleDogMVxuICAgIH0pO1xuICAgIENvbW1vbi5leHRlbmQoX3RoaXMyLl9faHVlX2tub2Iuc3R5bGUsIHtcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgd2lkdGg6ICcxNXB4JyxcbiAgICAgIGhlaWdodDogJzJweCcsXG4gICAgICBib3JkZXJSaWdodDogJzRweCBzb2xpZCAjZmZmJyxcbiAgICAgIHpJbmRleDogMVxuICAgIH0pO1xuICAgIENvbW1vbi5leHRlbmQoX3RoaXMyLl9fc2F0dXJhdGlvbl9maWVsZC5zdHlsZSwge1xuICAgICAgd2lkdGg6ICcxMDBweCcsXG4gICAgICBoZWlnaHQ6ICcxMDBweCcsXG4gICAgICBib3JkZXI6ICcxcHggc29saWQgIzU1NScsXG4gICAgICBtYXJnaW5SaWdodDogJzNweCcsXG4gICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgIGN1cnNvcjogJ3BvaW50ZXInXG4gICAgfSk7XG4gICAgQ29tbW9uLmV4dGVuZCh2YWx1ZUZpZWxkLnN0eWxlLCB7XG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICBiYWNrZ3JvdW5kOiAnbm9uZSdcbiAgICB9KTtcbiAgICBsaW5lYXJHcmFkaWVudCh2YWx1ZUZpZWxkLCAndG9wJywgJ3JnYmEoMCwwLDAsMCknLCAnIzAwMCcpO1xuICAgIENvbW1vbi5leHRlbmQoX3RoaXMyLl9faHVlX2ZpZWxkLnN0eWxlLCB7XG4gICAgICB3aWR0aDogJzE1cHgnLFxuICAgICAgaGVpZ2h0OiAnMTAwcHgnLFxuICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkICM1NTUnLFxuICAgICAgY3Vyc29yOiAnbnMtcmVzaXplJyxcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgdG9wOiAnM3B4JyxcbiAgICAgIHJpZ2h0OiAnM3B4J1xuICAgIH0pO1xuICAgIGh1ZUdyYWRpZW50KF90aGlzMi5fX2h1ZV9maWVsZCk7XG4gICAgQ29tbW9uLmV4dGVuZChfdGhpczIuX19pbnB1dC5zdHlsZSwge1xuICAgICAgb3V0bGluZTogJ25vbmUnLFxuICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgIGNvbG9yOiAnI2ZmZicsXG4gICAgICBib3JkZXI6IDAsXG4gICAgICBmb250V2VpZ2h0OiAnYm9sZCcsXG4gICAgICB0ZXh0U2hhZG93OiBfdGhpczIuX19pbnB1dF90ZXh0U2hhZG93ICsgJ3JnYmEoMCwwLDAsMC43KSdcbiAgICB9KTtcbiAgICBkb20uYmluZChfdGhpczIuX19zYXR1cmF0aW9uX2ZpZWxkLCAnbW91c2Vkb3duJywgZmllbGREb3duKTtcbiAgICBkb20uYmluZChfdGhpczIuX19zYXR1cmF0aW9uX2ZpZWxkLCAndG91Y2hzdGFydCcsIGZpZWxkRG93bik7XG4gICAgZG9tLmJpbmQoX3RoaXMyLl9fZmllbGRfa25vYiwgJ21vdXNlZG93bicsIGZpZWxkRG93bik7XG4gICAgZG9tLmJpbmQoX3RoaXMyLl9fZmllbGRfa25vYiwgJ3RvdWNoc3RhcnQnLCBmaWVsZERvd24pO1xuICAgIGRvbS5iaW5kKF90aGlzMi5fX2h1ZV9maWVsZCwgJ21vdXNlZG93bicsIGZpZWxkRG93bkgpO1xuICAgIGRvbS5iaW5kKF90aGlzMi5fX2h1ZV9maWVsZCwgJ3RvdWNoc3RhcnQnLCBmaWVsZERvd25IKTtcbiAgICBmdW5jdGlvbiBmaWVsZERvd24oZSkge1xuICAgICAgc2V0U1YoZSk7XG4gICAgICBkb20uYmluZCh3aW5kb3csICdtb3VzZW1vdmUnLCBzZXRTVik7XG4gICAgICBkb20uYmluZCh3aW5kb3csICd0b3VjaG1vdmUnLCBzZXRTVik7XG4gICAgICBkb20uYmluZCh3aW5kb3csICdtb3VzZXVwJywgZmllbGRVcFNWKTtcbiAgICAgIGRvbS5iaW5kKHdpbmRvdywgJ3RvdWNoZW5kJywgZmllbGRVcFNWKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZmllbGREb3duSChlKSB7XG4gICAgICBzZXRIKGUpO1xuICAgICAgZG9tLmJpbmQod2luZG93LCAnbW91c2Vtb3ZlJywgc2V0SCk7XG4gICAgICBkb20uYmluZCh3aW5kb3csICd0b3VjaG1vdmUnLCBzZXRIKTtcbiAgICAgIGRvbS5iaW5kKHdpbmRvdywgJ21vdXNldXAnLCBmaWVsZFVwSCk7XG4gICAgICBkb20uYmluZCh3aW5kb3csICd0b3VjaGVuZCcsIGZpZWxkVXBIKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZmllbGRVcFNWKCkge1xuICAgICAgZG9tLnVuYmluZCh3aW5kb3csICdtb3VzZW1vdmUnLCBzZXRTVik7XG4gICAgICBkb20udW5iaW5kKHdpbmRvdywgJ3RvdWNobW92ZScsIHNldFNWKTtcbiAgICAgIGRvbS51bmJpbmQod2luZG93LCAnbW91c2V1cCcsIGZpZWxkVXBTVik7XG4gICAgICBkb20udW5iaW5kKHdpbmRvdywgJ3RvdWNoZW5kJywgZmllbGRVcFNWKTtcbiAgICAgIG9uRmluaXNoKCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGZpZWxkVXBIKCkge1xuICAgICAgZG9tLnVuYmluZCh3aW5kb3csICdtb3VzZW1vdmUnLCBzZXRIKTtcbiAgICAgIGRvbS51bmJpbmQod2luZG93LCAndG91Y2htb3ZlJywgc2V0SCk7XG4gICAgICBkb20udW5iaW5kKHdpbmRvdywgJ21vdXNldXAnLCBmaWVsZFVwSCk7XG4gICAgICBkb20udW5iaW5kKHdpbmRvdywgJ3RvdWNoZW5kJywgZmllbGRVcEgpO1xuICAgICAgb25GaW5pc2goKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gb25CbHVyKCkge1xuICAgICAgdmFyIGkgPSBpbnRlcnByZXQodGhpcy52YWx1ZSk7XG4gICAgICBpZiAoaSAhPT0gZmFsc2UpIHtcbiAgICAgICAgX3RoaXMuX19jb2xvci5fX3N0YXRlID0gaTtcbiAgICAgICAgX3RoaXMuc2V0VmFsdWUoX3RoaXMuX19jb2xvci50b09yaWdpbmFsKCkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy52YWx1ZSA9IF90aGlzLl9fY29sb3IudG9TdHJpbmcoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gb25GaW5pc2goKSB7XG4gICAgICBpZiAoX3RoaXMuX19vbkZpbmlzaENoYW5nZSkge1xuICAgICAgICBfdGhpcy5fX29uRmluaXNoQ2hhbmdlLmNhbGwoX3RoaXMsIF90aGlzLl9fY29sb3IudG9PcmlnaW5hbCgpKTtcbiAgICAgIH1cbiAgICB9XG4gICAgX3RoaXMyLl9fc2F0dXJhdGlvbl9maWVsZC5hcHBlbmRDaGlsZCh2YWx1ZUZpZWxkKTtcbiAgICBfdGhpczIuX19zZWxlY3Rvci5hcHBlbmRDaGlsZChfdGhpczIuX19maWVsZF9rbm9iKTtcbiAgICBfdGhpczIuX19zZWxlY3Rvci5hcHBlbmRDaGlsZChfdGhpczIuX19zYXR1cmF0aW9uX2ZpZWxkKTtcbiAgICBfdGhpczIuX19zZWxlY3Rvci5hcHBlbmRDaGlsZChfdGhpczIuX19odWVfZmllbGQpO1xuICAgIF90aGlzMi5fX2h1ZV9maWVsZC5hcHBlbmRDaGlsZChfdGhpczIuX19odWVfa25vYik7XG4gICAgX3RoaXMyLmRvbUVsZW1lbnQuYXBwZW5kQ2hpbGQoX3RoaXMyLl9faW5wdXQpO1xuICAgIF90aGlzMi5kb21FbGVtZW50LmFwcGVuZENoaWxkKF90aGlzMi5fX3NlbGVjdG9yKTtcbiAgICBfdGhpczIudXBkYXRlRGlzcGxheSgpO1xuICAgIGZ1bmN0aW9uIHNldFNWKGUpIHtcbiAgICAgIGlmIChlLnR5cGUuaW5kZXhPZigndG91Y2gnKSA9PT0gLTEpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfVxuICAgICAgdmFyIGZpZWxkUmVjdCA9IF90aGlzLl9fc2F0dXJhdGlvbl9maWVsZC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgIHZhciBfcmVmID0gZS50b3VjaGVzICYmIGUudG91Y2hlc1swXSB8fCBlLFxuICAgICAgICAgIGNsaWVudFggPSBfcmVmLmNsaWVudFgsXG4gICAgICAgICAgY2xpZW50WSA9IF9yZWYuY2xpZW50WTtcbiAgICAgIHZhciBzID0gKGNsaWVudFggLSBmaWVsZFJlY3QubGVmdCkgLyAoZmllbGRSZWN0LnJpZ2h0IC0gZmllbGRSZWN0LmxlZnQpO1xuICAgICAgdmFyIHYgPSAxIC0gKGNsaWVudFkgLSBmaWVsZFJlY3QudG9wKSAvIChmaWVsZFJlY3QuYm90dG9tIC0gZmllbGRSZWN0LnRvcCk7XG4gICAgICBpZiAodiA+IDEpIHtcbiAgICAgICAgdiA9IDE7XG4gICAgICB9IGVsc2UgaWYgKHYgPCAwKSB7XG4gICAgICAgIHYgPSAwO1xuICAgICAgfVxuICAgICAgaWYgKHMgPiAxKSB7XG4gICAgICAgIHMgPSAxO1xuICAgICAgfSBlbHNlIGlmIChzIDwgMCkge1xuICAgICAgICBzID0gMDtcbiAgICAgIH1cbiAgICAgIF90aGlzLl9fY29sb3IudiA9IHY7XG4gICAgICBfdGhpcy5fX2NvbG9yLnMgPSBzO1xuICAgICAgX3RoaXMuc2V0VmFsdWUoX3RoaXMuX19jb2xvci50b09yaWdpbmFsKCkpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBmdW5jdGlvbiBzZXRIKGUpIHtcbiAgICAgIGlmIChlLnR5cGUuaW5kZXhPZigndG91Y2gnKSA9PT0gLTEpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfVxuICAgICAgdmFyIGZpZWxkUmVjdCA9IF90aGlzLl9faHVlX2ZpZWxkLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgdmFyIF9yZWYyID0gZS50b3VjaGVzICYmIGUudG91Y2hlc1swXSB8fCBlLFxuICAgICAgICAgIGNsaWVudFkgPSBfcmVmMi5jbGllbnRZO1xuICAgICAgdmFyIGggPSAxIC0gKGNsaWVudFkgLSBmaWVsZFJlY3QudG9wKSAvIChmaWVsZFJlY3QuYm90dG9tIC0gZmllbGRSZWN0LnRvcCk7XG4gICAgICBpZiAoaCA+IDEpIHtcbiAgICAgICAgaCA9IDE7XG4gICAgICB9IGVsc2UgaWYgKGggPCAwKSB7XG4gICAgICAgIGggPSAwO1xuICAgICAgfVxuICAgICAgX3RoaXMuX19jb2xvci5oID0gaCAqIDM2MDtcbiAgICAgIF90aGlzLnNldFZhbHVlKF90aGlzLl9fY29sb3IudG9PcmlnaW5hbCgpKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIF90aGlzMjtcbiAgfVxuICBjcmVhdGVDbGFzcyhDb2xvckNvbnRyb2xsZXIsIFt7XG4gICAga2V5OiAndXBkYXRlRGlzcGxheScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHVwZGF0ZURpc3BsYXkoKSB7XG4gICAgICB2YXIgaSA9IGludGVycHJldCh0aGlzLmdldFZhbHVlKCkpO1xuICAgICAgaWYgKGkgIT09IGZhbHNlKSB7XG4gICAgICAgIHZhciBtaXNtYXRjaCA9IGZhbHNlO1xuICAgICAgICBDb21tb24uZWFjaChDb2xvci5DT01QT05FTlRTLCBmdW5jdGlvbiAoY29tcG9uZW50KSB7XG4gICAgICAgICAgaWYgKCFDb21tb24uaXNVbmRlZmluZWQoaVtjb21wb25lbnRdKSAmJiAhQ29tbW9uLmlzVW5kZWZpbmVkKHRoaXMuX19jb2xvci5fX3N0YXRlW2NvbXBvbmVudF0pICYmIGlbY29tcG9uZW50XSAhPT0gdGhpcy5fX2NvbG9yLl9fc3RhdGVbY29tcG9uZW50XSkge1xuICAgICAgICAgICAgbWlzbWF0Y2ggPSB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuIHt9O1xuICAgICAgICAgIH1cbiAgICAgICAgfSwgdGhpcyk7XG4gICAgICAgIGlmIChtaXNtYXRjaCkge1xuICAgICAgICAgIENvbW1vbi5leHRlbmQodGhpcy5fX2NvbG9yLl9fc3RhdGUsIGkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBDb21tb24uZXh0ZW5kKHRoaXMuX190ZW1wLl9fc3RhdGUsIHRoaXMuX19jb2xvci5fX3N0YXRlKTtcbiAgICAgIHRoaXMuX190ZW1wLmEgPSAxO1xuICAgICAgdmFyIGZsaXAgPSB0aGlzLl9fY29sb3IudiA8IDAuNSB8fCB0aGlzLl9fY29sb3IucyA+IDAuNSA/IDI1NSA6IDA7XG4gICAgICB2YXIgX2ZsaXAgPSAyNTUgLSBmbGlwO1xuICAgICAgQ29tbW9uLmV4dGVuZCh0aGlzLl9fZmllbGRfa25vYi5zdHlsZSwge1xuICAgICAgICBtYXJnaW5MZWZ0OiAxMDAgKiB0aGlzLl9fY29sb3IucyAtIDcgKyAncHgnLFxuICAgICAgICBtYXJnaW5Ub3A6IDEwMCAqICgxIC0gdGhpcy5fX2NvbG9yLnYpIC0gNyArICdweCcsXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhpcy5fX3RlbXAudG9IZXhTdHJpbmcoKSxcbiAgICAgICAgYm9yZGVyOiB0aGlzLl9fZmllbGRfa25vYl9ib3JkZXIgKyAncmdiKCcgKyBmbGlwICsgJywnICsgZmxpcCArICcsJyArIGZsaXAgKyAnKSdcbiAgICAgIH0pO1xuICAgICAgdGhpcy5fX2h1ZV9rbm9iLnN0eWxlLm1hcmdpblRvcCA9ICgxIC0gdGhpcy5fX2NvbG9yLmggLyAzNjApICogMTAwICsgJ3B4JztcbiAgICAgIHRoaXMuX190ZW1wLnMgPSAxO1xuICAgICAgdGhpcy5fX3RlbXAudiA9IDE7XG4gICAgICBsaW5lYXJHcmFkaWVudCh0aGlzLl9fc2F0dXJhdGlvbl9maWVsZCwgJ2xlZnQnLCAnI2ZmZicsIHRoaXMuX190ZW1wLnRvSGV4U3RyaW5nKCkpO1xuICAgICAgdGhpcy5fX2lucHV0LnZhbHVlID0gdGhpcy5fX2NvbG9yLnRvU3RyaW5nKCk7XG4gICAgICBDb21tb24uZXh0ZW5kKHRoaXMuX19pbnB1dC5zdHlsZSwge1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuX19jb2xvci50b0hleFN0cmluZygpLFxuICAgICAgICBjb2xvcjogJ3JnYignICsgZmxpcCArICcsJyArIGZsaXAgKyAnLCcgKyBmbGlwICsgJyknLFxuICAgICAgICB0ZXh0U2hhZG93OiB0aGlzLl9faW5wdXRfdGV4dFNoYWRvdyArICdyZ2JhKCcgKyBfZmxpcCArICcsJyArIF9mbGlwICsgJywnICsgX2ZsaXAgKyAnLC43KSdcbiAgICAgIH0pO1xuICAgIH1cbiAgfV0pO1xuICByZXR1cm4gQ29sb3JDb250cm9sbGVyO1xufShDb250cm9sbGVyKTtcbnZhciB2ZW5kb3JzID0gWyctbW96LScsICctby0nLCAnLXdlYmtpdC0nLCAnLW1zLScsICcnXTtcbmZ1bmN0aW9uIGxpbmVhckdyYWRpZW50KGVsZW0sIHgsIGEsIGIpIHtcbiAgZWxlbS5zdHlsZS5iYWNrZ3JvdW5kID0gJyc7XG4gIENvbW1vbi5lYWNoKHZlbmRvcnMsIGZ1bmN0aW9uICh2ZW5kb3IpIHtcbiAgICBlbGVtLnN0eWxlLmNzc1RleHQgKz0gJ2JhY2tncm91bmQ6ICcgKyB2ZW5kb3IgKyAnbGluZWFyLWdyYWRpZW50KCcgKyB4ICsgJywgJyArIGEgKyAnIDAlLCAnICsgYiArICcgMTAwJSk7ICc7XG4gIH0pO1xufVxuZnVuY3Rpb24gaHVlR3JhZGllbnQoZWxlbSkge1xuICBlbGVtLnN0eWxlLmJhY2tncm91bmQgPSAnJztcbiAgZWxlbS5zdHlsZS5jc3NUZXh0ICs9ICdiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCh0b3AsICAjZmYwMDAwIDAlLCAjZmYwMGZmIDE3JSwgIzAwMDBmZiAzNCUsICMwMGZmZmYgNTAlLCAjMDBmZjAwIDY3JSwgI2ZmZmYwMCA4NCUsICNmZjAwMDAgMTAwJSk7JztcbiAgZWxlbS5zdHlsZS5jc3NUZXh0ICs9ICdiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsICAjZmYwMDAwIDAlLCNmZjAwZmYgMTclLCMwMDAwZmYgMzQlLCMwMGZmZmYgNTAlLCMwMGZmMDAgNjclLCNmZmZmMDAgODQlLCNmZjAwMDAgMTAwJSk7JztcbiAgZWxlbS5zdHlsZS5jc3NUZXh0ICs9ICdiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQodG9wLCAgI2ZmMDAwMCAwJSwjZmYwMGZmIDE3JSwjMDAwMGZmIDM0JSwjMDBmZmZmIDUwJSwjMDBmZjAwIDY3JSwjZmZmZjAwIDg0JSwjZmYwMDAwIDEwMCUpOyc7XG4gIGVsZW0uc3R5bGUuY3NzVGV4dCArPSAnYmFja2dyb3VuZDogLW1zLWxpbmVhci1ncmFkaWVudCh0b3AsICAjZmYwMDAwIDAlLCNmZjAwZmYgMTclLCMwMDAwZmYgMzQlLCMwMGZmZmYgNTAlLCMwMGZmMDAgNjclLCNmZmZmMDAgODQlLCNmZjAwMDAgMTAwJSk7JztcbiAgZWxlbS5zdHlsZS5jc3NUZXh0ICs9ICdiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG9wLCAgI2ZmMDAwMCAwJSwjZmYwMGZmIDE3JSwjMDAwMGZmIDM0JSwjMDBmZmZmIDUwJSwjMDBmZjAwIDY3JSwjZmZmZjAwIDg0JSwjZmYwMDAwIDEwMCUpOyc7XG59XG5cbnZhciBjc3MgPSB7XG4gIGxvYWQ6IGZ1bmN0aW9uIGxvYWQodXJsLCBpbmRvYykge1xuICAgIHZhciBkb2MgPSBpbmRvYyB8fCBkb2N1bWVudDtcbiAgICB2YXIgbGluayA9IGRvYy5jcmVhdGVFbGVtZW50KCdsaW5rJyk7XG4gICAgbGluay50eXBlID0gJ3RleHQvY3NzJztcbiAgICBsaW5rLnJlbCA9ICdzdHlsZXNoZWV0JztcbiAgICBsaW5rLmhyZWYgPSB1cmw7XG4gICAgZG9jLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF0uYXBwZW5kQ2hpbGQobGluayk7XG4gIH0sXG4gIGluamVjdDogZnVuY3Rpb24gaW5qZWN0KGNzc0NvbnRlbnQsIGluZG9jKSB7XG4gICAgdmFyIGRvYyA9IGluZG9jIHx8IGRvY3VtZW50O1xuICAgIHZhciBpbmplY3RlZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgaW5qZWN0ZWQudHlwZSA9ICd0ZXh0L2Nzcyc7XG4gICAgaW5qZWN0ZWQuaW5uZXJIVE1MID0gY3NzQ29udGVudDtcbiAgICB2YXIgaGVhZCA9IGRvYy5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdO1xuICAgIHRyeSB7XG4gICAgICBoZWFkLmFwcGVuZENoaWxkKGluamVjdGVkKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgfVxuICB9XG59O1xuXG52YXIgc2F2ZURpYWxvZ0NvbnRlbnRzID0gXCI8ZGl2IGlkPVxcXCJkZy1zYXZlXFxcIiBjbGFzcz1cXFwiZGcgZGlhbG9ndWVcXFwiPlxcblxcbiAgSGVyZSdzIHRoZSBuZXcgbG9hZCBwYXJhbWV0ZXIgZm9yIHlvdXIgPGNvZGU+R1VJPC9jb2RlPidzIGNvbnN0cnVjdG9yOlxcblxcbiAgPHRleHRhcmVhIGlkPVxcXCJkZy1uZXctY29uc3RydWN0b3JcXFwiPjwvdGV4dGFyZWE+XFxuXFxuICA8ZGl2IGlkPVxcXCJkZy1zYXZlLWxvY2FsbHlcXFwiPlxcblxcbiAgICA8aW5wdXQgaWQ9XFxcImRnLWxvY2FsLXN0b3JhZ2VcXFwiIHR5cGU9XFxcImNoZWNrYm94XFxcIi8+IEF1dG9tYXRpY2FsbHkgc2F2ZVxcbiAgICB2YWx1ZXMgdG8gPGNvZGU+bG9jYWxTdG9yYWdlPC9jb2RlPiBvbiBleGl0LlxcblxcbiAgICA8ZGl2IGlkPVxcXCJkZy1sb2NhbC1leHBsYWluXFxcIj5UaGUgdmFsdWVzIHNhdmVkIHRvIDxjb2RlPmxvY2FsU3RvcmFnZTwvY29kZT4gd2lsbFxcbiAgICAgIG92ZXJyaWRlIHRob3NlIHBhc3NlZCB0byA8Y29kZT5kYXQuR1VJPC9jb2RlPidzIGNvbnN0cnVjdG9yLiBUaGlzIG1ha2VzIGl0XFxuICAgICAgZWFzaWVyIHRvIHdvcmsgaW5jcmVtZW50YWxseSwgYnV0IDxjb2RlPmxvY2FsU3RvcmFnZTwvY29kZT4gaXMgZnJhZ2lsZSxcXG4gICAgICBhbmQgeW91ciBmcmllbmRzIG1heSBub3Qgc2VlIHRoZSBzYW1lIHZhbHVlcyB5b3UgZG8uXFxuXFxuICAgIDwvZGl2PlxcblxcbiAgPC9kaXY+XFxuXFxuPC9kaXY+XCI7XG5cbnZhciBDb250cm9sbGVyRmFjdG9yeSA9IGZ1bmN0aW9uIENvbnRyb2xsZXJGYWN0b3J5KG9iamVjdCwgcHJvcGVydHkpIHtcbiAgdmFyIGluaXRpYWxWYWx1ZSA9IG9iamVjdFtwcm9wZXJ0eV07XG4gIGlmIChDb21tb24uaXNBcnJheShhcmd1bWVudHNbMl0pIHx8IENvbW1vbi5pc09iamVjdChhcmd1bWVudHNbMl0pKSB7XG4gICAgcmV0dXJuIG5ldyBPcHRpb25Db250cm9sbGVyKG9iamVjdCwgcHJvcGVydHksIGFyZ3VtZW50c1syXSk7XG4gIH1cbiAgaWYgKENvbW1vbi5pc051bWJlcihpbml0aWFsVmFsdWUpKSB7XG4gICAgaWYgKENvbW1vbi5pc051bWJlcihhcmd1bWVudHNbMl0pICYmIENvbW1vbi5pc051bWJlcihhcmd1bWVudHNbM10pKSB7XG4gICAgICBpZiAoQ29tbW9uLmlzTnVtYmVyKGFyZ3VtZW50c1s0XSkpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBOdW1iZXJDb250cm9sbGVyU2xpZGVyKG9iamVjdCwgcHJvcGVydHksIGFyZ3VtZW50c1syXSwgYXJndW1lbnRzWzNdLCBhcmd1bWVudHNbNF0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG5ldyBOdW1iZXJDb250cm9sbGVyU2xpZGVyKG9iamVjdCwgcHJvcGVydHksIGFyZ3VtZW50c1syXSwgYXJndW1lbnRzWzNdKTtcbiAgICB9XG4gICAgaWYgKENvbW1vbi5pc051bWJlcihhcmd1bWVudHNbNF0pKSB7XG4gICAgICByZXR1cm4gbmV3IE51bWJlckNvbnRyb2xsZXJCb3gob2JqZWN0LCBwcm9wZXJ0eSwgeyBtaW46IGFyZ3VtZW50c1syXSwgbWF4OiBhcmd1bWVudHNbM10sIHN0ZXA6IGFyZ3VtZW50c1s0XSB9KTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBOdW1iZXJDb250cm9sbGVyQm94KG9iamVjdCwgcHJvcGVydHksIHsgbWluOiBhcmd1bWVudHNbMl0sIG1heDogYXJndW1lbnRzWzNdIH0pO1xuICB9XG4gIGlmIChDb21tb24uaXNTdHJpbmcoaW5pdGlhbFZhbHVlKSkge1xuICAgIHJldHVybiBuZXcgU3RyaW5nQ29udHJvbGxlcihvYmplY3QsIHByb3BlcnR5KTtcbiAgfVxuICBpZiAoQ29tbW9uLmlzRnVuY3Rpb24oaW5pdGlhbFZhbHVlKSkge1xuICAgIHJldHVybiBuZXcgRnVuY3Rpb25Db250cm9sbGVyKG9iamVjdCwgcHJvcGVydHksICcnKTtcbiAgfVxuICBpZiAoQ29tbW9uLmlzQm9vbGVhbihpbml0aWFsVmFsdWUpKSB7XG4gICAgcmV0dXJuIG5ldyBCb29sZWFuQ29udHJvbGxlcihvYmplY3QsIHByb3BlcnR5KTtcbiAgfVxuICByZXR1cm4gbnVsbDtcbn07XG5cbmZ1bmN0aW9uIHJlcXVlc3RBbmltYXRpb25GcmFtZShjYWxsYmFjaykge1xuICBzZXRUaW1lb3V0KGNhbGxiYWNrLCAxMDAwIC8gNjApO1xufVxudmFyIHJlcXVlc3RBbmltYXRpb25GcmFtZSQxID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSB8fCB3aW5kb3cud2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IHdpbmRvdy5tb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgd2luZG93Lm9SZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgd2luZG93Lm1zUmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IHJlcXVlc3RBbmltYXRpb25GcmFtZTtcblxudmFyIENlbnRlcmVkRGl2ID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBDZW50ZXJlZERpdigpIHtcbiAgICBjbGFzc0NhbGxDaGVjayh0aGlzLCBDZW50ZXJlZERpdik7XG4gICAgdGhpcy5iYWNrZ3JvdW5kRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIENvbW1vbi5leHRlbmQodGhpcy5iYWNrZ3JvdW5kRWxlbWVudC5zdHlsZSwge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSgwLDAsMCwwLjgpJyxcbiAgICAgIHRvcDogMCxcbiAgICAgIGxlZnQ6IDAsXG4gICAgICBkaXNwbGF5OiAnbm9uZScsXG4gICAgICB6SW5kZXg6ICcxMDAwJyxcbiAgICAgIG9wYWNpdHk6IDAsXG4gICAgICBXZWJraXRUcmFuc2l0aW9uOiAnb3BhY2l0eSAwLjJzIGxpbmVhcicsXG4gICAgICB0cmFuc2l0aW9uOiAnb3BhY2l0eSAwLjJzIGxpbmVhcidcbiAgICB9KTtcbiAgICBkb20ubWFrZUZ1bGxzY3JlZW4odGhpcy5iYWNrZ3JvdW5kRWxlbWVudCk7XG4gICAgdGhpcy5iYWNrZ3JvdW5kRWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdmaXhlZCc7XG4gICAgdGhpcy5kb21FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgQ29tbW9uLmV4dGVuZCh0aGlzLmRvbUVsZW1lbnQuc3R5bGUsIHtcbiAgICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgICAgZGlzcGxheTogJ25vbmUnLFxuICAgICAgekluZGV4OiAnMTAwMScsXG4gICAgICBvcGFjaXR5OiAwLFxuICAgICAgV2Via2l0VHJhbnNpdGlvbjogJy13ZWJraXQtdHJhbnNmb3JtIDAuMnMgZWFzZS1vdXQsIG9wYWNpdHkgMC4ycyBsaW5lYXInLFxuICAgICAgdHJhbnNpdGlvbjogJ3RyYW5zZm9ybSAwLjJzIGVhc2Utb3V0LCBvcGFjaXR5IDAuMnMgbGluZWFyJ1xuICAgIH0pO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5iYWNrZ3JvdW5kRWxlbWVudCk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmRvbUVsZW1lbnQpO1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgZG9tLmJpbmQodGhpcy5iYWNrZ3JvdW5kRWxlbWVudCwgJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXMuaGlkZSgpO1xuICAgIH0pO1xuICB9XG4gIGNyZWF0ZUNsYXNzKENlbnRlcmVkRGl2LCBbe1xuICAgIGtleTogJ3Nob3cnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzaG93KCkge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgIHRoaXMuYmFja2dyb3VuZEVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICB0aGlzLmRvbUVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICB0aGlzLmRvbUVsZW1lbnQuc3R5bGUub3BhY2l0eSA9IDA7XG4gICAgICB0aGlzLmRvbUVsZW1lbnQuc3R5bGUud2Via2l0VHJhbnNmb3JtID0gJ3NjYWxlKDEuMSknO1xuICAgICAgdGhpcy5sYXlvdXQoKTtcbiAgICAgIENvbW1vbi5kZWZlcihmdW5jdGlvbiAoKSB7XG4gICAgICAgIF90aGlzLmJhY2tncm91bmRFbGVtZW50LnN0eWxlLm9wYWNpdHkgPSAxO1xuICAgICAgICBfdGhpcy5kb21FbGVtZW50LnN0eWxlLm9wYWNpdHkgPSAxO1xuICAgICAgICBfdGhpcy5kb21FbGVtZW50LnN0eWxlLndlYmtpdFRyYW5zZm9ybSA9ICdzY2FsZSgxKSc7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdoaWRlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gaGlkZSgpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICB2YXIgaGlkZSA9IGZ1bmN0aW9uIGhpZGUoKSB7XG4gICAgICAgIF90aGlzLmRvbUVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgX3RoaXMuYmFja2dyb3VuZEVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgZG9tLnVuYmluZChfdGhpcy5kb21FbGVtZW50LCAnd2Via2l0VHJhbnNpdGlvbkVuZCcsIGhpZGUpO1xuICAgICAgICBkb20udW5iaW5kKF90aGlzLmRvbUVsZW1lbnQsICd0cmFuc2l0aW9uZW5kJywgaGlkZSk7XG4gICAgICAgIGRvbS51bmJpbmQoX3RoaXMuZG9tRWxlbWVudCwgJ29UcmFuc2l0aW9uRW5kJywgaGlkZSk7XG4gICAgICB9O1xuICAgICAgZG9tLmJpbmQodGhpcy5kb21FbGVtZW50LCAnd2Via2l0VHJhbnNpdGlvbkVuZCcsIGhpZGUpO1xuICAgICAgZG9tLmJpbmQodGhpcy5kb21FbGVtZW50LCAndHJhbnNpdGlvbmVuZCcsIGhpZGUpO1xuICAgICAgZG9tLmJpbmQodGhpcy5kb21FbGVtZW50LCAnb1RyYW5zaXRpb25FbmQnLCBoaWRlKTtcbiAgICAgIHRoaXMuYmFja2dyb3VuZEVsZW1lbnQuc3R5bGUub3BhY2l0eSA9IDA7XG4gICAgICB0aGlzLmRvbUVsZW1lbnQuc3R5bGUub3BhY2l0eSA9IDA7XG4gICAgICB0aGlzLmRvbUVsZW1lbnQuc3R5bGUud2Via2l0VHJhbnNmb3JtID0gJ3NjYWxlKDEuMSknO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2xheW91dCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGxheW91dCgpIHtcbiAgICAgIHRoaXMuZG9tRWxlbWVudC5zdHlsZS5sZWZ0ID0gd2luZG93LmlubmVyV2lkdGggLyAyIC0gZG9tLmdldFdpZHRoKHRoaXMuZG9tRWxlbWVudCkgLyAyICsgJ3B4JztcbiAgICAgIHRoaXMuZG9tRWxlbWVudC5zdHlsZS50b3AgPSB3aW5kb3cuaW5uZXJIZWlnaHQgLyAyIC0gZG9tLmdldEhlaWdodCh0aGlzLmRvbUVsZW1lbnQpIC8gMiArICdweCc7XG4gICAgfVxuICB9XSk7XG4gIHJldHVybiBDZW50ZXJlZERpdjtcbn0oKTtcblxudmFyIHN0eWxlU2hlZXQgPSBfX18kaW5zZXJ0U3R5bGUoXCIuZGcgdWx7bGlzdC1zdHlsZTpub25lO21hcmdpbjowO3BhZGRpbmc6MDt3aWR0aDoxMDAlO2NsZWFyOmJvdGh9LmRnLmFje3Bvc2l0aW9uOmZpeGVkO3RvcDowO2xlZnQ6MDtyaWdodDowO2hlaWdodDowO3otaW5kZXg6MH0uZGc6bm90KC5hYykgLm1haW57b3ZlcmZsb3c6aGlkZGVufS5kZy5tYWluey13ZWJraXQtdHJhbnNpdGlvbjpvcGFjaXR5IC4xcyBsaW5lYXI7LW8tdHJhbnNpdGlvbjpvcGFjaXR5IC4xcyBsaW5lYXI7LW1vei10cmFuc2l0aW9uOm9wYWNpdHkgLjFzIGxpbmVhcjt0cmFuc2l0aW9uOm9wYWNpdHkgLjFzIGxpbmVhcn0uZGcubWFpbi50YWxsZXItdGhhbi13aW5kb3d7b3ZlcmZsb3cteTphdXRvfS5kZy5tYWluLnRhbGxlci10aGFuLXdpbmRvdyAuY2xvc2UtYnV0dG9ue29wYWNpdHk6MTttYXJnaW4tdG9wOi0xcHg7Ym9yZGVyLXRvcDoxcHggc29saWQgIzJjMmMyY30uZGcubWFpbiB1bC5jbG9zZWQgLmNsb3NlLWJ1dHRvbntvcGFjaXR5OjEgIWltcG9ydGFudH0uZGcubWFpbjpob3ZlciAuY2xvc2UtYnV0dG9uLC5kZy5tYWluIC5jbG9zZS1idXR0b24uZHJhZ3tvcGFjaXR5OjF9LmRnLm1haW4gLmNsb3NlLWJ1dHRvbnstd2Via2l0LXRyYW5zaXRpb246b3BhY2l0eSAuMXMgbGluZWFyOy1vLXRyYW5zaXRpb246b3BhY2l0eSAuMXMgbGluZWFyOy1tb3otdHJhbnNpdGlvbjpvcGFjaXR5IC4xcyBsaW5lYXI7dHJhbnNpdGlvbjpvcGFjaXR5IC4xcyBsaW5lYXI7Ym9yZGVyOjA7bGluZS1oZWlnaHQ6MTlweDtoZWlnaHQ6MjBweDtjdXJzb3I6cG9pbnRlcjt0ZXh0LWFsaWduOmNlbnRlcjtiYWNrZ3JvdW5kLWNvbG9yOiMwMDB9LmRnLm1haW4gLmNsb3NlLWJ1dHRvbi5jbG9zZS10b3B7cG9zaXRpb246cmVsYXRpdmV9LmRnLm1haW4gLmNsb3NlLWJ1dHRvbi5jbG9zZS1ib3R0b217cG9zaXRpb246YWJzb2x1dGV9LmRnLm1haW4gLmNsb3NlLWJ1dHRvbjpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiMxMTF9LmRnLmF7ZmxvYXQ6cmlnaHQ7bWFyZ2luLXJpZ2h0OjE1cHg7b3ZlcmZsb3cteTp2aXNpYmxlfS5kZy5hLmhhcy1zYXZlPnVsLmNsb3NlLXRvcHttYXJnaW4tdG9wOjB9LmRnLmEuaGFzLXNhdmU+dWwuY2xvc2UtYm90dG9te21hcmdpbi10b3A6MjdweH0uZGcuYS5oYXMtc2F2ZT51bC5jbG9zZWR7bWFyZ2luLXRvcDowfS5kZy5hIC5zYXZlLXJvd3t0b3A6MDt6LWluZGV4OjEwMDJ9LmRnLmEgLnNhdmUtcm93LmNsb3NlLXRvcHtwb3NpdGlvbjpyZWxhdGl2ZX0uZGcuYSAuc2F2ZS1yb3cuY2xvc2UtYm90dG9te3Bvc2l0aW9uOmZpeGVkfS5kZyBsaXstd2Via2l0LXRyYW5zaXRpb246aGVpZ2h0IC4xcyBlYXNlLW91dDstby10cmFuc2l0aW9uOmhlaWdodCAuMXMgZWFzZS1vdXQ7LW1vei10cmFuc2l0aW9uOmhlaWdodCAuMXMgZWFzZS1vdXQ7dHJhbnNpdGlvbjpoZWlnaHQgLjFzIGVhc2Utb3V0Oy13ZWJraXQtdHJhbnNpdGlvbjpvdmVyZmxvdyAuMXMgbGluZWFyOy1vLXRyYW5zaXRpb246b3ZlcmZsb3cgLjFzIGxpbmVhcjstbW96LXRyYW5zaXRpb246b3ZlcmZsb3cgLjFzIGxpbmVhcjt0cmFuc2l0aW9uOm92ZXJmbG93IC4xcyBsaW5lYXJ9LmRnIGxpOm5vdCguZm9sZGVyKXtjdXJzb3I6YXV0bztoZWlnaHQ6MjdweDtsaW5lLWhlaWdodDoyN3B4O3BhZGRpbmc6MCA0cHggMCA1cHh9LmRnIGxpLmZvbGRlcntwYWRkaW5nOjA7Ym9yZGVyLWxlZnQ6NHB4IHNvbGlkIHJnYmEoMCwwLDAsMCl9LmRnIGxpLnRpdGxle2N1cnNvcjpwb2ludGVyO21hcmdpbi1sZWZ0Oi00cHh9LmRnIC5jbG9zZWQgbGk6bm90KC50aXRsZSksLmRnIC5jbG9zZWQgdWwgbGksLmRnIC5jbG9zZWQgdWwgbGk+KntoZWlnaHQ6MDtvdmVyZmxvdzpoaWRkZW47Ym9yZGVyOjB9LmRnIC5jcntjbGVhcjpib3RoO3BhZGRpbmctbGVmdDozcHg7aGVpZ2h0OjI3cHg7b3ZlcmZsb3c6aGlkZGVufS5kZyAucHJvcGVydHktbmFtZXtjdXJzb3I6ZGVmYXVsdDtmbG9hdDpsZWZ0O2NsZWFyOmxlZnQ7d2lkdGg6NDAlO292ZXJmbG93OmhpZGRlbjt0ZXh0LW92ZXJmbG93OmVsbGlwc2lzfS5kZyAuY3IuZnVuY3Rpb24gLnByb3BlcnR5LW5hbWV7d2lkdGg6MTAwJX0uZGcgLmN7ZmxvYXQ6bGVmdDt3aWR0aDo2MCU7cG9zaXRpb246cmVsYXRpdmV9LmRnIC5jIGlucHV0W3R5cGU9dGV4dF17Ym9yZGVyOjA7bWFyZ2luLXRvcDo0cHg7cGFkZGluZzozcHg7d2lkdGg6MTAwJTtmbG9hdDpyaWdodH0uZGcgLmhhcy1zbGlkZXIgaW5wdXRbdHlwZT10ZXh0XXt3aWR0aDozMCU7bWFyZ2luLWxlZnQ6MH0uZGcgLnNsaWRlcntmbG9hdDpsZWZ0O3dpZHRoOjY2JTttYXJnaW4tbGVmdDotNXB4O21hcmdpbi1yaWdodDowO2hlaWdodDoxOXB4O21hcmdpbi10b3A6NHB4fS5kZyAuc2xpZGVyLWZne2hlaWdodDoxMDAlfS5kZyAuYyBpbnB1dFt0eXBlPWNoZWNrYm94XXttYXJnaW4tdG9wOjdweH0uZGcgLmMgc2VsZWN0e21hcmdpbi10b3A6NXB4fS5kZyAuY3IuZnVuY3Rpb24sLmRnIC5jci5mdW5jdGlvbiAucHJvcGVydHktbmFtZSwuZGcgLmNyLmZ1bmN0aW9uICosLmRnIC5jci5ib29sZWFuLC5kZyAuY3IuYm9vbGVhbiAqe2N1cnNvcjpwb2ludGVyfS5kZyAuY3IuY29sb3J7b3ZlcmZsb3c6dmlzaWJsZX0uZGcgLnNlbGVjdG9ye2Rpc3BsYXk6bm9uZTtwb3NpdGlvbjphYnNvbHV0ZTttYXJnaW4tbGVmdDotOXB4O21hcmdpbi10b3A6MjNweDt6LWluZGV4OjEwfS5kZyAuYzpob3ZlciAuc2VsZWN0b3IsLmRnIC5zZWxlY3Rvci5kcmFne2Rpc3BsYXk6YmxvY2t9LmRnIGxpLnNhdmUtcm93e3BhZGRpbmc6MH0uZGcgbGkuc2F2ZS1yb3cgLmJ1dHRvbntkaXNwbGF5OmlubGluZS1ibG9jaztwYWRkaW5nOjBweCA2cHh9LmRnLmRpYWxvZ3Vle2JhY2tncm91bmQtY29sb3I6IzIyMjt3aWR0aDo0NjBweDtwYWRkaW5nOjE1cHg7Zm9udC1zaXplOjEzcHg7bGluZS1oZWlnaHQ6MTVweH0jZGctbmV3LWNvbnN0cnVjdG9ye3BhZGRpbmc6MTBweDtjb2xvcjojMjIyO2ZvbnQtZmFtaWx5Ok1vbmFjbywgbW9ub3NwYWNlO2ZvbnQtc2l6ZToxMHB4O2JvcmRlcjowO3Jlc2l6ZTpub25lO2JveC1zaGFkb3c6aW5zZXQgMXB4IDFweCAxcHggIzg4ODt3b3JkLXdyYXA6YnJlYWstd29yZDttYXJnaW46MTJweCAwO2Rpc3BsYXk6YmxvY2s7d2lkdGg6NDQwcHg7b3ZlcmZsb3cteTpzY3JvbGw7aGVpZ2h0OjEwMHB4O3Bvc2l0aW9uOnJlbGF0aXZlfSNkZy1sb2NhbC1leHBsYWlue2Rpc3BsYXk6bm9uZTtmb250LXNpemU6MTFweDtsaW5lLWhlaWdodDoxN3B4O2JvcmRlci1yYWRpdXM6M3B4O2JhY2tncm91bmQtY29sb3I6IzMzMztwYWRkaW5nOjhweDttYXJnaW4tdG9wOjEwcHh9I2RnLWxvY2FsLWV4cGxhaW4gY29kZXtmb250LXNpemU6MTBweH0jZGF0LWd1aS1zYXZlLWxvY2FsbHl7ZGlzcGxheTpub25lfS5kZ3tjb2xvcjojZWVlO2ZvbnQ6MTFweCAnTHVjaWRhIEdyYW5kZScsIHNhbnMtc2VyaWY7dGV4dC1zaGFkb3c6MCAtMXB4IDAgIzExMX0uZGcubWFpbjo6LXdlYmtpdC1zY3JvbGxiYXJ7d2lkdGg6NXB4O2JhY2tncm91bmQ6IzFhMWExYX0uZGcubWFpbjo6LXdlYmtpdC1zY3JvbGxiYXItY29ybmVye2hlaWdodDowO2Rpc3BsYXk6bm9uZX0uZGcubWFpbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWJ7Ym9yZGVyLXJhZGl1czo1cHg7YmFja2dyb3VuZDojNjc2NzY3fS5kZyBsaTpub3QoLmZvbGRlcil7YmFja2dyb3VuZDojMWExYTFhO2JvcmRlci1ib3R0b206MXB4IHNvbGlkICMyYzJjMmN9LmRnIGxpLnNhdmUtcm93e2xpbmUtaGVpZ2h0OjI1cHg7YmFja2dyb3VuZDojZGFkNWNiO2JvcmRlcjowfS5kZyBsaS5zYXZlLXJvdyBzZWxlY3R7bWFyZ2luLWxlZnQ6NXB4O3dpZHRoOjEwOHB4fS5kZyBsaS5zYXZlLXJvdyAuYnV0dG9ue21hcmdpbi1sZWZ0OjVweDttYXJnaW4tdG9wOjFweDtib3JkZXItcmFkaXVzOjJweDtmb250LXNpemU6OXB4O2xpbmUtaGVpZ2h0OjdweDtwYWRkaW5nOjRweCA0cHggNXB4IDRweDtiYWNrZ3JvdW5kOiNjNWJkYWQ7Y29sb3I6I2ZmZjt0ZXh0LXNoYWRvdzowIDFweCAwICNiMGE1OGY7Ym94LXNoYWRvdzowIC0xcHggMCAjYjBhNThmO2N1cnNvcjpwb2ludGVyfS5kZyBsaS5zYXZlLXJvdyAuYnV0dG9uLmdlYXJze2JhY2tncm91bmQ6I2M1YmRhZCB1cmwoZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBc0FBQUFOQ0FZQUFBQi85WlE3QUFBQUdYUkZXSFJUYjJaMGQyRnlaUUJCWkc5aVpTQkpiV0ZuWlZKbFlXUjVjY2xsUEFBQUFRSkpSRUZVZU5waVlLQVUvUC8vUHdHSUMvQXBDQUJpQlNBVytJOEFDbEFjZ0t4UTRUOWhvTUFFVXJ4eDJRU0dONitlZ0RYKy92V1Q0ZTdOODJBTVlvUEF4L2V2d1dvWW9TWWJBQ1gyczdLeEN4emNzZXpEaDNldkZvREVCWVRFRXF5Y2dnV0F6QTlBdVVTUVFnZVlQYTlmUHY2L1lXbS9BY3g1SVBiN3R5L2Z3K1FaYmx3Njd2RHM4UjBZSHlRaGdPYngreUFKa0JxbUc1ZFBQRGgxYVBPR1IvZXVnVzBHNHZsSW9USWZ5RmNBK1Fla2hoSEpoUGRReGJpQUlndU1CVFFaclBENzEwOE02cm9XWURGUWlJQUF2NkFvdy8xYkZ3WGdpcytmMkxVQXlud29JYU5jejhYTngzRGw3TUVKVURHUXB4OWd0UThZQ3VlQitEMjZPRUNBQVFEYWR0N2U0NkQ0MlFBQUFBQkpSVTVFcmtKZ2dnPT0pIDJweCAxcHggbm8tcmVwZWF0O2hlaWdodDo3cHg7d2lkdGg6OHB4fS5kZyBsaS5zYXZlLXJvdyAuYnV0dG9uOmhvdmVye2JhY2tncm91bmQtY29sb3I6I2JhYjE5ZTtib3gtc2hhZG93OjAgLTFweCAwICNiMGE1OGZ9LmRnIGxpLmZvbGRlcntib3JkZXItYm90dG9tOjB9LmRnIGxpLnRpdGxle3BhZGRpbmctbGVmdDoxNnB4O2JhY2tncm91bmQ6IzAwMCB1cmwoZGF0YTppbWFnZS9naWY7YmFzZTY0LFIwbEdPRGxoQlFBRkFKRUFBUC8vLy9QejgvLy8vLy8vL3lINUJBRUFBQUlBTEFBQUFBQUZBQVVBQUFJSWxJK2hLZ0Z4b0NnQU93PT0pIDZweCAxMHB4IG5vLXJlcGVhdDtjdXJzb3I6cG9pbnRlcjtib3JkZXItYm90dG9tOjFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuMil9LmRnIC5jbG9zZWQgbGkudGl0bGV7YmFja2dyb3VuZC1pbWFnZTp1cmwoZGF0YTppbWFnZS9naWY7YmFzZTY0LFIwbEdPRGxoQlFBRkFKRUFBUC8vLy9QejgvLy8vLy8vL3lINUJBRUFBQUlBTEFBQUFBQUZBQVVBQUFJSWxHSVdxTUNiV0FFQU93PT0pfS5kZyAuY3IuYm9vbGVhbntib3JkZXItbGVmdDozcHggc29saWQgIzgwNjc4N30uZGcgLmNyLmNvbG9ye2JvcmRlci1sZWZ0OjNweCBzb2xpZH0uZGcgLmNyLmZ1bmN0aW9ue2JvcmRlci1sZWZ0OjNweCBzb2xpZCAjZTYxZDVmfS5kZyAuY3IubnVtYmVye2JvcmRlci1sZWZ0OjNweCBzb2xpZCAjMkZBMUQ2fS5kZyAuY3IubnVtYmVyIGlucHV0W3R5cGU9dGV4dF17Y29sb3I6IzJGQTFENn0uZGcgLmNyLnN0cmluZ3tib3JkZXItbGVmdDozcHggc29saWQgIzFlZDM2Zn0uZGcgLmNyLnN0cmluZyBpbnB1dFt0eXBlPXRleHRde2NvbG9yOiMxZWQzNmZ9LmRnIC5jci5mdW5jdGlvbjpob3ZlciwuZGcgLmNyLmJvb2xlYW46aG92ZXJ7YmFja2dyb3VuZDojMTExfS5kZyAuYyBpbnB1dFt0eXBlPXRleHRde2JhY2tncm91bmQ6IzMwMzAzMDtvdXRsaW5lOm5vbmV9LmRnIC5jIGlucHV0W3R5cGU9dGV4dF06aG92ZXJ7YmFja2dyb3VuZDojM2MzYzNjfS5kZyAuYyBpbnB1dFt0eXBlPXRleHRdOmZvY3Vze2JhY2tncm91bmQ6IzQ5NDk0OTtjb2xvcjojZmZmfS5kZyAuYyAuc2xpZGVye2JhY2tncm91bmQ6IzMwMzAzMDtjdXJzb3I6ZXctcmVzaXplfS5kZyAuYyAuc2xpZGVyLWZne2JhY2tncm91bmQ6IzJGQTFENjttYXgtd2lkdGg6MTAwJX0uZGcgLmMgLnNsaWRlcjpob3ZlcntiYWNrZ3JvdW5kOiMzYzNjM2N9LmRnIC5jIC5zbGlkZXI6aG92ZXIgLnNsaWRlci1mZ3tiYWNrZ3JvdW5kOiM0NGFiZGF9XFxuXCIpO1xuXG5jc3MuaW5qZWN0KHN0eWxlU2hlZXQpO1xudmFyIENTU19OQU1FU1BBQ0UgPSAnZGcnO1xudmFyIEhJREVfS0VZX0NPREUgPSA3MjtcbnZhciBDTE9TRV9CVVRUT05fSEVJR0hUID0gMjA7XG52YXIgREVGQVVMVF9ERUZBVUxUX1BSRVNFVF9OQU1FID0gJ0RlZmF1bHQnO1xudmFyIFNVUFBPUlRTX0xPQ0FMX1NUT1JBR0UgPSBmdW5jdGlvbiAoKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuICEhd2luZG93LmxvY2FsU3RvcmFnZTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufSgpO1xudmFyIFNBVkVfRElBTE9HVUUgPSB2b2lkIDA7XG52YXIgYXV0b1BsYWNlVmlyZ2luID0gdHJ1ZTtcbnZhciBhdXRvUGxhY2VDb250YWluZXIgPSB2b2lkIDA7XG52YXIgaGlkZSA9IGZhbHNlO1xudmFyIGhpZGVhYmxlR3VpcyA9IFtdO1xudmFyIEdVSSA9IGZ1bmN0aW9uIEdVSShwYXJzKSB7XG4gIHZhciBfdGhpcyA9IHRoaXM7XG4gIHZhciBwYXJhbXMgPSBwYXJzIHx8IHt9O1xuICB0aGlzLmRvbUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdGhpcy5fX3VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgdGhpcy5kb21FbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuX191bCk7XG4gIGRvbS5hZGRDbGFzcyh0aGlzLmRvbUVsZW1lbnQsIENTU19OQU1FU1BBQ0UpO1xuICB0aGlzLl9fZm9sZGVycyA9IHt9O1xuICB0aGlzLl9fY29udHJvbGxlcnMgPSBbXTtcbiAgdGhpcy5fX3JlbWVtYmVyZWRPYmplY3RzID0gW107XG4gIHRoaXMuX19yZW1lbWJlcmVkT2JqZWN0SW5kZWNlc1RvQ29udHJvbGxlcnMgPSBbXTtcbiAgdGhpcy5fX2xpc3RlbmluZyA9IFtdO1xuICBwYXJhbXMgPSBDb21tb24uZGVmYXVsdHMocGFyYW1zLCB7XG4gICAgY2xvc2VPblRvcDogZmFsc2UsXG4gICAgYXV0b1BsYWNlOiB0cnVlLFxuICAgIHdpZHRoOiBHVUkuREVGQVVMVF9XSURUSFxuICB9KTtcbiAgcGFyYW1zID0gQ29tbW9uLmRlZmF1bHRzKHBhcmFtcywge1xuICAgIHJlc2l6YWJsZTogcGFyYW1zLmF1dG9QbGFjZSxcbiAgICBoaWRlYWJsZTogcGFyYW1zLmF1dG9QbGFjZVxuICB9KTtcbiAgaWYgKCFDb21tb24uaXNVbmRlZmluZWQocGFyYW1zLmxvYWQpKSB7XG4gICAgaWYgKHBhcmFtcy5wcmVzZXQpIHtcbiAgICAgIHBhcmFtcy5sb2FkLnByZXNldCA9IHBhcmFtcy5wcmVzZXQ7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHBhcmFtcy5sb2FkID0geyBwcmVzZXQ6IERFRkFVTFRfREVGQVVMVF9QUkVTRVRfTkFNRSB9O1xuICB9XG4gIGlmIChDb21tb24uaXNVbmRlZmluZWQocGFyYW1zLnBhcmVudCkgJiYgcGFyYW1zLmhpZGVhYmxlKSB7XG4gICAgaGlkZWFibGVHdWlzLnB1c2godGhpcyk7XG4gIH1cbiAgcGFyYW1zLnJlc2l6YWJsZSA9IENvbW1vbi5pc1VuZGVmaW5lZChwYXJhbXMucGFyZW50KSAmJiBwYXJhbXMucmVzaXphYmxlO1xuICBpZiAocGFyYW1zLmF1dG9QbGFjZSAmJiBDb21tb24uaXNVbmRlZmluZWQocGFyYW1zLnNjcm9sbGFibGUpKSB7XG4gICAgcGFyYW1zLnNjcm9sbGFibGUgPSB0cnVlO1xuICB9XG4gIHZhciB1c2VMb2NhbFN0b3JhZ2UgPSBTVVBQT1JUU19MT0NBTF9TVE9SQUdFICYmIGxvY2FsU3RvcmFnZS5nZXRJdGVtKGdldExvY2FsU3RvcmFnZUhhc2godGhpcywgJ2lzTG9jYWwnKSkgPT09ICd0cnVlJztcbiAgdmFyIHNhdmVUb0xvY2FsU3RvcmFnZSA9IHZvaWQgMDtcbiAgdmFyIHRpdGxlUm93ID0gdm9pZCAwO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0aGlzLFxuICB7XG4gICAgcGFyZW50OiB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCQkMSgpIHtcbiAgICAgICAgcmV0dXJuIHBhcmFtcy5wYXJlbnQ7XG4gICAgICB9XG4gICAgfSxcbiAgICBzY3JvbGxhYmxlOiB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCQkMSgpIHtcbiAgICAgICAgcmV0dXJuIHBhcmFtcy5zY3JvbGxhYmxlO1xuICAgICAgfVxuICAgIH0sXG4gICAgYXV0b1BsYWNlOiB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCQkMSgpIHtcbiAgICAgICAgcmV0dXJuIHBhcmFtcy5hdXRvUGxhY2U7XG4gICAgICB9XG4gICAgfSxcbiAgICBjbG9zZU9uVG9wOiB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCQkMSgpIHtcbiAgICAgICAgcmV0dXJuIHBhcmFtcy5jbG9zZU9uVG9wO1xuICAgICAgfVxuICAgIH0sXG4gICAgcHJlc2V0OiB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCQkMSgpIHtcbiAgICAgICAgaWYgKF90aGlzLnBhcmVudCkge1xuICAgICAgICAgIHJldHVybiBfdGhpcy5nZXRSb290KCkucHJlc2V0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwYXJhbXMubG9hZC5wcmVzZXQ7XG4gICAgICB9LFxuICAgICAgc2V0OiBmdW5jdGlvbiBzZXQkJDEodikge1xuICAgICAgICBpZiAoX3RoaXMucGFyZW50KSB7XG4gICAgICAgICAgX3RoaXMuZ2V0Um9vdCgpLnByZXNldCA9IHY7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcGFyYW1zLmxvYWQucHJlc2V0ID0gdjtcbiAgICAgICAgfVxuICAgICAgICBzZXRQcmVzZXRTZWxlY3RJbmRleCh0aGlzKTtcbiAgICAgICAgX3RoaXMucmV2ZXJ0KCk7XG4gICAgICB9XG4gICAgfSxcbiAgICB3aWR0aDoge1xuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQkJDEoKSB7XG4gICAgICAgIHJldHVybiBwYXJhbXMud2lkdGg7XG4gICAgICB9LFxuICAgICAgc2V0OiBmdW5jdGlvbiBzZXQkJDEodikge1xuICAgICAgICBwYXJhbXMud2lkdGggPSB2O1xuICAgICAgICBzZXRXaWR0aChfdGhpcywgdik7XG4gICAgICB9XG4gICAgfSxcbiAgICBuYW1lOiB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCQkMSgpIHtcbiAgICAgICAgcmV0dXJuIHBhcmFtcy5uYW1lO1xuICAgICAgfSxcbiAgICAgIHNldDogZnVuY3Rpb24gc2V0JCQxKHYpIHtcbiAgICAgICAgcGFyYW1zLm5hbWUgPSB2O1xuICAgICAgICBpZiAodGl0bGVSb3cpIHtcbiAgICAgICAgICB0aXRsZVJvdy5pbm5lckhUTUwgPSBwYXJhbXMubmFtZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgY2xvc2VkOiB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCQkMSgpIHtcbiAgICAgICAgcmV0dXJuIHBhcmFtcy5jbG9zZWQ7XG4gICAgICB9LFxuICAgICAgc2V0OiBmdW5jdGlvbiBzZXQkJDEodikge1xuICAgICAgICBwYXJhbXMuY2xvc2VkID0gdjtcbiAgICAgICAgaWYgKHBhcmFtcy5jbG9zZWQpIHtcbiAgICAgICAgICBkb20uYWRkQ2xhc3MoX3RoaXMuX191bCwgR1VJLkNMQVNTX0NMT1NFRCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZG9tLnJlbW92ZUNsYXNzKF90aGlzLl9fdWwsIEdVSS5DTEFTU19DTE9TRUQpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMub25SZXNpemUoKTtcbiAgICAgICAgaWYgKF90aGlzLl9fY2xvc2VCdXR0b24pIHtcbiAgICAgICAgICBfdGhpcy5fX2Nsb3NlQnV0dG9uLmlubmVySFRNTCA9IHYgPyBHVUkuVEVYVF9PUEVOIDogR1VJLlRFWFRfQ0xPU0VEO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBsb2FkOiB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCQkMSgpIHtcbiAgICAgICAgcmV0dXJuIHBhcmFtcy5sb2FkO1xuICAgICAgfVxuICAgIH0sXG4gICAgdXNlTG9jYWxTdG9yYWdlOiB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCQkMSgpIHtcbiAgICAgICAgcmV0dXJuIHVzZUxvY2FsU3RvcmFnZTtcbiAgICAgIH0sXG4gICAgICBzZXQ6IGZ1bmN0aW9uIHNldCQkMShib29sKSB7XG4gICAgICAgIGlmIChTVVBQT1JUU19MT0NBTF9TVE9SQUdFKSB7XG4gICAgICAgICAgdXNlTG9jYWxTdG9yYWdlID0gYm9vbDtcbiAgICAgICAgICBpZiAoYm9vbCkge1xuICAgICAgICAgICAgZG9tLmJpbmQod2luZG93LCAndW5sb2FkJywgc2F2ZVRvTG9jYWxTdG9yYWdlKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZG9tLnVuYmluZCh3aW5kb3csICd1bmxvYWQnLCBzYXZlVG9Mb2NhbFN0b3JhZ2UpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShnZXRMb2NhbFN0b3JhZ2VIYXNoKF90aGlzLCAnaXNMb2NhbCcpLCBib29sKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSk7XG4gIGlmIChDb21tb24uaXNVbmRlZmluZWQocGFyYW1zLnBhcmVudCkpIHtcbiAgICB0aGlzLmNsb3NlZCA9IHBhcmFtcy5jbG9zZWQgfHwgZmFsc2U7XG4gICAgZG9tLmFkZENsYXNzKHRoaXMuZG9tRWxlbWVudCwgR1VJLkNMQVNTX01BSU4pO1xuICAgIGRvbS5tYWtlU2VsZWN0YWJsZSh0aGlzLmRvbUVsZW1lbnQsIGZhbHNlKTtcbiAgICBpZiAoU1VQUE9SVFNfTE9DQUxfU1RPUkFHRSkge1xuICAgICAgaWYgKHVzZUxvY2FsU3RvcmFnZSkge1xuICAgICAgICBfdGhpcy51c2VMb2NhbFN0b3JhZ2UgPSB0cnVlO1xuICAgICAgICB2YXIgc2F2ZWRHdWkgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShnZXRMb2NhbFN0b3JhZ2VIYXNoKHRoaXMsICdndWknKSk7XG4gICAgICAgIGlmIChzYXZlZEd1aSkge1xuICAgICAgICAgIHBhcmFtcy5sb2FkID0gSlNPTi5wYXJzZShzYXZlZEd1aSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5fX2Nsb3NlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGhpcy5fX2Nsb3NlQnV0dG9uLmlubmVySFRNTCA9IEdVSS5URVhUX0NMT1NFRDtcbiAgICBkb20uYWRkQ2xhc3ModGhpcy5fX2Nsb3NlQnV0dG9uLCBHVUkuQ0xBU1NfQ0xPU0VfQlVUVE9OKTtcbiAgICBpZiAocGFyYW1zLmNsb3NlT25Ub3ApIHtcbiAgICAgIGRvbS5hZGRDbGFzcyh0aGlzLl9fY2xvc2VCdXR0b24sIEdVSS5DTEFTU19DTE9TRV9UT1ApO1xuICAgICAgdGhpcy5kb21FbGVtZW50Lmluc2VydEJlZm9yZSh0aGlzLl9fY2xvc2VCdXR0b24sIHRoaXMuZG9tRWxlbWVudC5jaGlsZE5vZGVzWzBdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZG9tLmFkZENsYXNzKHRoaXMuX19jbG9zZUJ1dHRvbiwgR1VJLkNMQVNTX0NMT1NFX0JPVFRPTSk7XG4gICAgICB0aGlzLmRvbUVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5fX2Nsb3NlQnV0dG9uKTtcbiAgICB9XG4gICAgZG9tLmJpbmQodGhpcy5fX2Nsb3NlQnV0dG9uLCAnY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICBfdGhpcy5jbG9zZWQgPSAhX3RoaXMuY2xvc2VkO1xuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIGlmIChwYXJhbXMuY2xvc2VkID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHBhcmFtcy5jbG9zZWQgPSB0cnVlO1xuICAgIH1cbiAgICB2YXIgdGl0bGVSb3dOYW1lID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUocGFyYW1zLm5hbWUpO1xuICAgIGRvbS5hZGRDbGFzcyh0aXRsZVJvd05hbWUsICdjb250cm9sbGVyLW5hbWUnKTtcbiAgICB0aXRsZVJvdyA9IGFkZFJvdyhfdGhpcywgdGl0bGVSb3dOYW1lKTtcbiAgICB2YXIgb25DbGlja1RpdGxlID0gZnVuY3Rpb24gb25DbGlja1RpdGxlKGUpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIF90aGlzLmNsb3NlZCA9ICFfdGhpcy5jbG9zZWQ7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcbiAgICBkb20uYWRkQ2xhc3ModGhpcy5fX3VsLCBHVUkuQ0xBU1NfQ0xPU0VEKTtcbiAgICBkb20uYWRkQ2xhc3ModGl0bGVSb3csICd0aXRsZScpO1xuICAgIGRvbS5iaW5kKHRpdGxlUm93LCAnY2xpY2snLCBvbkNsaWNrVGl0bGUpO1xuICAgIGlmICghcGFyYW1zLmNsb3NlZCkge1xuICAgICAgdGhpcy5jbG9zZWQgPSBmYWxzZTtcbiAgICB9XG4gIH1cbiAgaWYgKHBhcmFtcy5hdXRvUGxhY2UpIHtcbiAgICBpZiAoQ29tbW9uLmlzVW5kZWZpbmVkKHBhcmFtcy5wYXJlbnQpKSB7XG4gICAgICBpZiAoYXV0b1BsYWNlVmlyZ2luKSB7XG4gICAgICAgIGF1dG9QbGFjZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkb20uYWRkQ2xhc3MoYXV0b1BsYWNlQ29udGFpbmVyLCBDU1NfTkFNRVNQQUNFKTtcbiAgICAgICAgZG9tLmFkZENsYXNzKGF1dG9QbGFjZUNvbnRhaW5lciwgR1VJLkNMQVNTX0FVVE9fUExBQ0VfQ09OVEFJTkVSKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChhdXRvUGxhY2VDb250YWluZXIpO1xuICAgICAgICBhdXRvUGxhY2VWaXJnaW4gPSBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGF1dG9QbGFjZUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmRvbUVsZW1lbnQpO1xuICAgICAgZG9tLmFkZENsYXNzKHRoaXMuZG9tRWxlbWVudCwgR1VJLkNMQVNTX0FVVE9fUExBQ0UpO1xuICAgIH1cbiAgICBpZiAoIXRoaXMucGFyZW50KSB7XG4gICAgICBzZXRXaWR0aChfdGhpcywgcGFyYW1zLndpZHRoKTtcbiAgICB9XG4gIH1cbiAgdGhpcy5fX3Jlc2l6ZUhhbmRsZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgX3RoaXMub25SZXNpemVEZWJvdW5jZWQoKTtcbiAgfTtcbiAgZG9tLmJpbmQod2luZG93LCAncmVzaXplJywgdGhpcy5fX3Jlc2l6ZUhhbmRsZXIpO1xuICBkb20uYmluZCh0aGlzLl9fdWwsICd3ZWJraXRUcmFuc2l0aW9uRW5kJywgdGhpcy5fX3Jlc2l6ZUhhbmRsZXIpO1xuICBkb20uYmluZCh0aGlzLl9fdWwsICd0cmFuc2l0aW9uZW5kJywgdGhpcy5fX3Jlc2l6ZUhhbmRsZXIpO1xuICBkb20uYmluZCh0aGlzLl9fdWwsICdvVHJhbnNpdGlvbkVuZCcsIHRoaXMuX19yZXNpemVIYW5kbGVyKTtcbiAgdGhpcy5vblJlc2l6ZSgpO1xuICBpZiAocGFyYW1zLnJlc2l6YWJsZSkge1xuICAgIGFkZFJlc2l6ZUhhbmRsZSh0aGlzKTtcbiAgfVxuICBzYXZlVG9Mb2NhbFN0b3JhZ2UgPSBmdW5jdGlvbiBzYXZlVG9Mb2NhbFN0b3JhZ2UoKSB7XG4gICAgaWYgKFNVUFBPUlRTX0xPQ0FMX1NUT1JBR0UgJiYgbG9jYWxTdG9yYWdlLmdldEl0ZW0oZ2V0TG9jYWxTdG9yYWdlSGFzaChfdGhpcywgJ2lzTG9jYWwnKSkgPT09ICd0cnVlJykge1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oZ2V0TG9jYWxTdG9yYWdlSGFzaChfdGhpcywgJ2d1aScpLCBKU09OLnN0cmluZ2lmeShfdGhpcy5nZXRTYXZlT2JqZWN0KCkpKTtcbiAgICB9XG4gIH07XG4gIHRoaXMuc2F2ZVRvTG9jYWxTdG9yYWdlSWZQb3NzaWJsZSA9IHNhdmVUb0xvY2FsU3RvcmFnZTtcbiAgZnVuY3Rpb24gcmVzZXRXaWR0aCgpIHtcbiAgICB2YXIgcm9vdCA9IF90aGlzLmdldFJvb3QoKTtcbiAgICByb290LndpZHRoICs9IDE7XG4gICAgQ29tbW9uLmRlZmVyKGZ1bmN0aW9uICgpIHtcbiAgICAgIHJvb3Qud2lkdGggLT0gMTtcbiAgICB9KTtcbiAgfVxuICBpZiAoIXBhcmFtcy5wYXJlbnQpIHtcbiAgICByZXNldFdpZHRoKCk7XG4gIH1cbn07XG5HVUkudG9nZ2xlSGlkZSA9IGZ1bmN0aW9uICgpIHtcbiAgaGlkZSA9ICFoaWRlO1xuICBDb21tb24uZWFjaChoaWRlYWJsZUd1aXMsIGZ1bmN0aW9uIChndWkpIHtcbiAgICBndWkuZG9tRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gaGlkZSA/ICdub25lJyA6ICcnO1xuICB9KTtcbn07XG5HVUkuQ0xBU1NfQVVUT19QTEFDRSA9ICdhJztcbkdVSS5DTEFTU19BVVRPX1BMQUNFX0NPTlRBSU5FUiA9ICdhYyc7XG5HVUkuQ0xBU1NfTUFJTiA9ICdtYWluJztcbkdVSS5DTEFTU19DT05UUk9MTEVSX1JPVyA9ICdjcic7XG5HVUkuQ0xBU1NfVE9PX1RBTEwgPSAndGFsbGVyLXRoYW4td2luZG93JztcbkdVSS5DTEFTU19DTE9TRUQgPSAnY2xvc2VkJztcbkdVSS5DTEFTU19DTE9TRV9CVVRUT04gPSAnY2xvc2UtYnV0dG9uJztcbkdVSS5DTEFTU19DTE9TRV9UT1AgPSAnY2xvc2UtdG9wJztcbkdVSS5DTEFTU19DTE9TRV9CT1RUT00gPSAnY2xvc2UtYm90dG9tJztcbkdVSS5DTEFTU19EUkFHID0gJ2RyYWcnO1xuR1VJLkRFRkFVTFRfV0lEVEggPSAyNDU7XG5HVUkuVEVYVF9DTE9TRUQgPSAnQ2xvc2UgQ29udHJvbHMnO1xuR1VJLlRFWFRfT1BFTiA9ICdPcGVuIENvbnRyb2xzJztcbkdVSS5fa2V5ZG93bkhhbmRsZXIgPSBmdW5jdGlvbiAoZSkge1xuICBpZiAoZG9jdW1lbnQuYWN0aXZlRWxlbWVudC50eXBlICE9PSAndGV4dCcgJiYgKGUud2hpY2ggPT09IEhJREVfS0VZX0NPREUgfHwgZS5rZXlDb2RlID09PSBISURFX0tFWV9DT0RFKSkge1xuICAgIEdVSS50b2dnbGVIaWRlKCk7XG4gIH1cbn07XG5kb20uYmluZCh3aW5kb3csICdrZXlkb3duJywgR1VJLl9rZXlkb3duSGFuZGxlciwgZmFsc2UpO1xuQ29tbW9uLmV4dGVuZChHVUkucHJvdG90eXBlLFxue1xuICBhZGQ6IGZ1bmN0aW9uIGFkZChvYmplY3QsIHByb3BlcnR5KSB7XG4gICAgcmV0dXJuIF9hZGQodGhpcywgb2JqZWN0LCBwcm9wZXJ0eSwge1xuICAgICAgZmFjdG9yeUFyZ3M6IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMilcbiAgICB9KTtcbiAgfSxcbiAgYWRkQ29sb3I6IGZ1bmN0aW9uIGFkZENvbG9yKG9iamVjdCwgcHJvcGVydHkpIHtcbiAgICByZXR1cm4gX2FkZCh0aGlzLCBvYmplY3QsIHByb3BlcnR5LCB7XG4gICAgICBjb2xvcjogdHJ1ZVxuICAgIH0pO1xuICB9LFxuICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZShjb250cm9sbGVyKSB7XG4gICAgdGhpcy5fX3VsLnJlbW92ZUNoaWxkKGNvbnRyb2xsZXIuX19saSk7XG4gICAgdGhpcy5fX2NvbnRyb2xsZXJzLnNwbGljZSh0aGlzLl9fY29udHJvbGxlcnMuaW5kZXhPZihjb250cm9sbGVyKSwgMSk7XG4gICAgdmFyIF90aGlzID0gdGhpcztcbiAgICBDb21tb24uZGVmZXIoZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXMub25SZXNpemUoKTtcbiAgICB9KTtcbiAgfSxcbiAgZGVzdHJveTogZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy5wYXJlbnQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignT25seSB0aGUgcm9vdCBHVUkgc2hvdWxkIGJlIHJlbW92ZWQgd2l0aCAuZGVzdHJveSgpLiAnICsgJ0ZvciBzdWJmb2xkZXJzLCB1c2UgZ3VpLnJlbW92ZUZvbGRlcihmb2xkZXIpIGluc3RlYWQuJyk7XG4gICAgfVxuICAgIGlmICh0aGlzLmF1dG9QbGFjZSkge1xuICAgICAgYXV0b1BsYWNlQ29udGFpbmVyLnJlbW92ZUNoaWxkKHRoaXMuZG9tRWxlbWVudCk7XG4gICAgfVxuICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgQ29tbW9uLmVhY2godGhpcy5fX2ZvbGRlcnMsIGZ1bmN0aW9uIChzdWJmb2xkZXIpIHtcbiAgICAgIF90aGlzLnJlbW92ZUZvbGRlcihzdWJmb2xkZXIpO1xuICAgIH0pO1xuICAgIGRvbS51bmJpbmQod2luZG93LCAna2V5ZG93bicsIEdVSS5fa2V5ZG93bkhhbmRsZXIsIGZhbHNlKTtcbiAgICByZW1vdmVMaXN0ZW5lcnModGhpcyk7XG4gIH0sXG4gIGFkZEZvbGRlcjogZnVuY3Rpb24gYWRkRm9sZGVyKG5hbWUpIHtcbiAgICBpZiAodGhpcy5fX2ZvbGRlcnNbbmFtZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdZb3UgYWxyZWFkeSBoYXZlIGEgZm9sZGVyIGluIHRoaXMgR1VJIGJ5IHRoZScgKyAnIG5hbWUgXCInICsgbmFtZSArICdcIicpO1xuICAgIH1cbiAgICB2YXIgbmV3R3VpUGFyYW1zID0geyBuYW1lOiBuYW1lLCBwYXJlbnQ6IHRoaXMgfTtcbiAgICBuZXdHdWlQYXJhbXMuYXV0b1BsYWNlID0gdGhpcy5hdXRvUGxhY2U7XG4gICAgaWYgKHRoaXMubG9hZCAmJlxuICAgIHRoaXMubG9hZC5mb2xkZXJzICYmXG4gICAgdGhpcy5sb2FkLmZvbGRlcnNbbmFtZV0pIHtcbiAgICAgIG5ld0d1aVBhcmFtcy5jbG9zZWQgPSB0aGlzLmxvYWQuZm9sZGVyc1tuYW1lXS5jbG9zZWQ7XG4gICAgICBuZXdHdWlQYXJhbXMubG9hZCA9IHRoaXMubG9hZC5mb2xkZXJzW25hbWVdO1xuICAgIH1cbiAgICB2YXIgZ3VpID0gbmV3IEdVSShuZXdHdWlQYXJhbXMpO1xuICAgIHRoaXMuX19mb2xkZXJzW25hbWVdID0gZ3VpO1xuICAgIHZhciBsaSA9IGFkZFJvdyh0aGlzLCBndWkuZG9tRWxlbWVudCk7XG4gICAgZG9tLmFkZENsYXNzKGxpLCAnZm9sZGVyJyk7XG4gICAgcmV0dXJuIGd1aTtcbiAgfSxcbiAgcmVtb3ZlRm9sZGVyOiBmdW5jdGlvbiByZW1vdmVGb2xkZXIoZm9sZGVyKSB7XG4gICAgdGhpcy5fX3VsLnJlbW92ZUNoaWxkKGZvbGRlci5kb21FbGVtZW50LnBhcmVudEVsZW1lbnQpO1xuICAgIGRlbGV0ZSB0aGlzLl9fZm9sZGVyc1tmb2xkZXIubmFtZV07XG4gICAgaWYgKHRoaXMubG9hZCAmJlxuICAgIHRoaXMubG9hZC5mb2xkZXJzICYmXG4gICAgdGhpcy5sb2FkLmZvbGRlcnNbZm9sZGVyLm5hbWVdKSB7XG4gICAgICBkZWxldGUgdGhpcy5sb2FkLmZvbGRlcnNbZm9sZGVyLm5hbWVdO1xuICAgIH1cbiAgICByZW1vdmVMaXN0ZW5lcnMoZm9sZGVyKTtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgIENvbW1vbi5lYWNoKGZvbGRlci5fX2ZvbGRlcnMsIGZ1bmN0aW9uIChzdWJmb2xkZXIpIHtcbiAgICAgIGZvbGRlci5yZW1vdmVGb2xkZXIoc3ViZm9sZGVyKTtcbiAgICB9KTtcbiAgICBDb21tb24uZGVmZXIoZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXMub25SZXNpemUoKTtcbiAgICB9KTtcbiAgfSxcbiAgb3BlbjogZnVuY3Rpb24gb3BlbigpIHtcbiAgICB0aGlzLmNsb3NlZCA9IGZhbHNlO1xuICB9LFxuICBjbG9zZTogZnVuY3Rpb24gY2xvc2UoKSB7XG4gICAgdGhpcy5jbG9zZWQgPSB0cnVlO1xuICB9LFxuICBoaWRlOiBmdW5jdGlvbiBoaWRlKCkge1xuICAgIHRoaXMuZG9tRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICB9LFxuICBzaG93OiBmdW5jdGlvbiBzaG93KCkge1xuICAgIHRoaXMuZG9tRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJyc7XG4gIH0sXG4gIG9uUmVzaXplOiBmdW5jdGlvbiBvblJlc2l6ZSgpIHtcbiAgICB2YXIgcm9vdCA9IHRoaXMuZ2V0Um9vdCgpO1xuICAgIGlmIChyb290LnNjcm9sbGFibGUpIHtcbiAgICAgIHZhciB0b3AgPSBkb20uZ2V0T2Zmc2V0KHJvb3QuX191bCkudG9wO1xuICAgICAgdmFyIGggPSAwO1xuICAgICAgQ29tbW9uLmVhY2gocm9vdC5fX3VsLmNoaWxkTm9kZXMsIGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgIGlmICghKHJvb3QuYXV0b1BsYWNlICYmIG5vZGUgPT09IHJvb3QuX19zYXZlX3JvdykpIHtcbiAgICAgICAgICBoICs9IGRvbS5nZXRIZWlnaHQobm9kZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgaWYgKHdpbmRvdy5pbm5lckhlaWdodCAtIHRvcCAtIENMT1NFX0JVVFRPTl9IRUlHSFQgPCBoKSB7XG4gICAgICAgIGRvbS5hZGRDbGFzcyhyb290LmRvbUVsZW1lbnQsIEdVSS5DTEFTU19UT09fVEFMTCk7XG4gICAgICAgIHJvb3QuX191bC5zdHlsZS5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgLSB0b3AgLSBDTE9TRV9CVVRUT05fSEVJR0hUICsgJ3B4JztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRvbS5yZW1vdmVDbGFzcyhyb290LmRvbUVsZW1lbnQsIEdVSS5DTEFTU19UT09fVEFMTCk7XG4gICAgICAgIHJvb3QuX191bC5zdHlsZS5oZWlnaHQgPSAnYXV0byc7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChyb290Ll9fcmVzaXplX2hhbmRsZSkge1xuICAgICAgQ29tbW9uLmRlZmVyKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcm9vdC5fX3Jlc2l6ZV9oYW5kbGUuc3R5bGUuaGVpZ2h0ID0gcm9vdC5fX3VsLm9mZnNldEhlaWdodCArICdweCc7XG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKHJvb3QuX19jbG9zZUJ1dHRvbikge1xuICAgICAgcm9vdC5fX2Nsb3NlQnV0dG9uLnN0eWxlLndpZHRoID0gcm9vdC53aWR0aCArICdweCc7XG4gICAgfVxuICB9LFxuICBvblJlc2l6ZURlYm91bmNlZDogQ29tbW9uLmRlYm91bmNlKGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLm9uUmVzaXplKCk7XG4gIH0sIDUwKSxcbiAgcmVtZW1iZXI6IGZ1bmN0aW9uIHJlbWVtYmVyKCkge1xuICAgIGlmIChDb21tb24uaXNVbmRlZmluZWQoU0FWRV9ESUFMT0dVRSkpIHtcbiAgICAgIFNBVkVfRElBTE9HVUUgPSBuZXcgQ2VudGVyZWREaXYoKTtcbiAgICAgIFNBVkVfRElBTE9HVUUuZG9tRWxlbWVudC5pbm5lckhUTUwgPSBzYXZlRGlhbG9nQ29udGVudHM7XG4gICAgfVxuICAgIGlmICh0aGlzLnBhcmVudCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdZb3UgY2FuIG9ubHkgY2FsbCByZW1lbWJlciBvbiBhIHRvcCBsZXZlbCBHVUkuJyk7XG4gICAgfVxuICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgQ29tbW9uLmVhY2goQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKSwgZnVuY3Rpb24gKG9iamVjdCkge1xuICAgICAgaWYgKF90aGlzLl9fcmVtZW1iZXJlZE9iamVjdHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGFkZFNhdmVNZW51KF90aGlzKTtcbiAgICAgIH1cbiAgICAgIGlmIChfdGhpcy5fX3JlbWVtYmVyZWRPYmplY3RzLmluZGV4T2Yob2JqZWN0KSA9PT0gLTEpIHtcbiAgICAgICAgX3RoaXMuX19yZW1lbWJlcmVkT2JqZWN0cy5wdXNoKG9iamVjdCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgaWYgKHRoaXMuYXV0b1BsYWNlKSB7XG4gICAgICBzZXRXaWR0aCh0aGlzLCB0aGlzLndpZHRoKTtcbiAgICB9XG4gIH0sXG4gIGdldFJvb3Q6IGZ1bmN0aW9uIGdldFJvb3QoKSB7XG4gICAgdmFyIGd1aSA9IHRoaXM7XG4gICAgd2hpbGUgKGd1aS5wYXJlbnQpIHtcbiAgICAgIGd1aSA9IGd1aS5wYXJlbnQ7XG4gICAgfVxuICAgIHJldHVybiBndWk7XG4gIH0sXG4gIGdldFNhdmVPYmplY3Q6IGZ1bmN0aW9uIGdldFNhdmVPYmplY3QoKSB7XG4gICAgdmFyIHRvUmV0dXJuID0gdGhpcy5sb2FkO1xuICAgIHRvUmV0dXJuLmNsb3NlZCA9IHRoaXMuY2xvc2VkO1xuICAgIGlmICh0aGlzLl9fcmVtZW1iZXJlZE9iamVjdHMubGVuZ3RoID4gMCkge1xuICAgICAgdG9SZXR1cm4ucHJlc2V0ID0gdGhpcy5wcmVzZXQ7XG4gICAgICBpZiAoIXRvUmV0dXJuLnJlbWVtYmVyZWQpIHtcbiAgICAgICAgdG9SZXR1cm4ucmVtZW1iZXJlZCA9IHt9O1xuICAgICAgfVxuICAgICAgdG9SZXR1cm4ucmVtZW1iZXJlZFt0aGlzLnByZXNldF0gPSBnZXRDdXJyZW50UHJlc2V0KHRoaXMpO1xuICAgIH1cbiAgICB0b1JldHVybi5mb2xkZXJzID0ge307XG4gICAgQ29tbW9uLmVhY2godGhpcy5fX2ZvbGRlcnMsIGZ1bmN0aW9uIChlbGVtZW50LCBrZXkpIHtcbiAgICAgIHRvUmV0dXJuLmZvbGRlcnNba2V5XSA9IGVsZW1lbnQuZ2V0U2F2ZU9iamVjdCgpO1xuICAgIH0pO1xuICAgIHJldHVybiB0b1JldHVybjtcbiAgfSxcbiAgc2F2ZTogZnVuY3Rpb24gc2F2ZSgpIHtcbiAgICBpZiAoIXRoaXMubG9hZC5yZW1lbWJlcmVkKSB7XG4gICAgICB0aGlzLmxvYWQucmVtZW1iZXJlZCA9IHt9O1xuICAgIH1cbiAgICB0aGlzLmxvYWQucmVtZW1iZXJlZFt0aGlzLnByZXNldF0gPSBnZXRDdXJyZW50UHJlc2V0KHRoaXMpO1xuICAgIG1hcmtQcmVzZXRNb2RpZmllZCh0aGlzLCBmYWxzZSk7XG4gICAgdGhpcy5zYXZlVG9Mb2NhbFN0b3JhZ2VJZlBvc3NpYmxlKCk7XG4gIH0sXG4gIHNhdmVBczogZnVuY3Rpb24gc2F2ZUFzKHByZXNldE5hbWUpIHtcbiAgICBpZiAoIXRoaXMubG9hZC5yZW1lbWJlcmVkKSB7XG4gICAgICB0aGlzLmxvYWQucmVtZW1iZXJlZCA9IHt9O1xuICAgICAgdGhpcy5sb2FkLnJlbWVtYmVyZWRbREVGQVVMVF9ERUZBVUxUX1BSRVNFVF9OQU1FXSA9IGdldEN1cnJlbnRQcmVzZXQodGhpcywgdHJ1ZSk7XG4gICAgfVxuICAgIHRoaXMubG9hZC5yZW1lbWJlcmVkW3ByZXNldE5hbWVdID0gZ2V0Q3VycmVudFByZXNldCh0aGlzKTtcbiAgICB0aGlzLnByZXNldCA9IHByZXNldE5hbWU7XG4gICAgYWRkUHJlc2V0T3B0aW9uKHRoaXMsIHByZXNldE5hbWUsIHRydWUpO1xuICAgIHRoaXMuc2F2ZVRvTG9jYWxTdG9yYWdlSWZQb3NzaWJsZSgpO1xuICB9LFxuICByZXZlcnQ6IGZ1bmN0aW9uIHJldmVydChndWkpIHtcbiAgICBDb21tb24uZWFjaCh0aGlzLl9fY29udHJvbGxlcnMsIGZ1bmN0aW9uIChjb250cm9sbGVyKSB7XG4gICAgICBpZiAoIXRoaXMuZ2V0Um9vdCgpLmxvYWQucmVtZW1iZXJlZCkge1xuICAgICAgICBjb250cm9sbGVyLnNldFZhbHVlKGNvbnRyb2xsZXIuaW5pdGlhbFZhbHVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlY2FsbFNhdmVkVmFsdWUoZ3VpIHx8IHRoaXMuZ2V0Um9vdCgpLCBjb250cm9sbGVyKTtcbiAgICAgIH1cbiAgICAgIGlmIChjb250cm9sbGVyLl9fb25GaW5pc2hDaGFuZ2UpIHtcbiAgICAgICAgY29udHJvbGxlci5fX29uRmluaXNoQ2hhbmdlLmNhbGwoY29udHJvbGxlciwgY29udHJvbGxlci5nZXRWYWx1ZSgpKTtcbiAgICAgIH1cbiAgICB9LCB0aGlzKTtcbiAgICBDb21tb24uZWFjaCh0aGlzLl9fZm9sZGVycywgZnVuY3Rpb24gKGZvbGRlcikge1xuICAgICAgZm9sZGVyLnJldmVydChmb2xkZXIpO1xuICAgIH0pO1xuICAgIGlmICghZ3VpKSB7XG4gICAgICBtYXJrUHJlc2V0TW9kaWZpZWQodGhpcy5nZXRSb290KCksIGZhbHNlKTtcbiAgICB9XG4gIH0sXG4gIGxpc3RlbjogZnVuY3Rpb24gbGlzdGVuKGNvbnRyb2xsZXIpIHtcbiAgICB2YXIgaW5pdCA9IHRoaXMuX19saXN0ZW5pbmcubGVuZ3RoID09PSAwO1xuICAgIHRoaXMuX19saXN0ZW5pbmcucHVzaChjb250cm9sbGVyKTtcbiAgICBpZiAoaW5pdCkge1xuICAgICAgdXBkYXRlRGlzcGxheXModGhpcy5fX2xpc3RlbmluZyk7XG4gICAgfVxuICB9LFxuICB1cGRhdGVEaXNwbGF5OiBmdW5jdGlvbiB1cGRhdGVEaXNwbGF5KCkge1xuICAgIENvbW1vbi5lYWNoKHRoaXMuX19jb250cm9sbGVycywgZnVuY3Rpb24gKGNvbnRyb2xsZXIpIHtcbiAgICAgIGNvbnRyb2xsZXIudXBkYXRlRGlzcGxheSgpO1xuICAgIH0pO1xuICAgIENvbW1vbi5lYWNoKHRoaXMuX19mb2xkZXJzLCBmdW5jdGlvbiAoZm9sZGVyKSB7XG4gICAgICBmb2xkZXIudXBkYXRlRGlzcGxheSgpO1xuICAgIH0pO1xuICB9XG59KTtcbmZ1bmN0aW9uIGFkZFJvdyhndWksIG5ld0RvbSwgbGlCZWZvcmUpIHtcbiAgdmFyIGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgaWYgKG5ld0RvbSkge1xuICAgIGxpLmFwcGVuZENoaWxkKG5ld0RvbSk7XG4gIH1cbiAgaWYgKGxpQmVmb3JlKSB7XG4gICAgZ3VpLl9fdWwuaW5zZXJ0QmVmb3JlKGxpLCBsaUJlZm9yZSk7XG4gIH0gZWxzZSB7XG4gICAgZ3VpLl9fdWwuYXBwZW5kQ2hpbGQobGkpO1xuICB9XG4gIGd1aS5vblJlc2l6ZSgpO1xuICByZXR1cm4gbGk7XG59XG5mdW5jdGlvbiByZW1vdmVMaXN0ZW5lcnMoZ3VpKSB7XG4gIGRvbS51bmJpbmQod2luZG93LCAncmVzaXplJywgZ3VpLl9fcmVzaXplSGFuZGxlcik7XG4gIGlmIChndWkuc2F2ZVRvTG9jYWxTdG9yYWdlSWZQb3NzaWJsZSkge1xuICAgIGRvbS51bmJpbmQod2luZG93LCAndW5sb2FkJywgZ3VpLnNhdmVUb0xvY2FsU3RvcmFnZUlmUG9zc2libGUpO1xuICB9XG59XG5mdW5jdGlvbiBtYXJrUHJlc2V0TW9kaWZpZWQoZ3VpLCBtb2RpZmllZCkge1xuICB2YXIgb3B0ID0gZ3VpLl9fcHJlc2V0X3NlbGVjdFtndWkuX19wcmVzZXRfc2VsZWN0LnNlbGVjdGVkSW5kZXhdO1xuICBpZiAobW9kaWZpZWQpIHtcbiAgICBvcHQuaW5uZXJIVE1MID0gb3B0LnZhbHVlICsgJyonO1xuICB9IGVsc2Uge1xuICAgIG9wdC5pbm5lckhUTUwgPSBvcHQudmFsdWU7XG4gIH1cbn1cbmZ1bmN0aW9uIGF1Z21lbnRDb250cm9sbGVyKGd1aSwgbGksIGNvbnRyb2xsZXIpIHtcbiAgY29udHJvbGxlci5fX2xpID0gbGk7XG4gIGNvbnRyb2xsZXIuX19ndWkgPSBndWk7XG4gIENvbW1vbi5leHRlbmQoY29udHJvbGxlciwge1xuICAgIG9wdGlvbnM6IGZ1bmN0aW9uIG9wdGlvbnMoX29wdGlvbnMpIHtcbiAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICB2YXIgbmV4dFNpYmxpbmcgPSBjb250cm9sbGVyLl9fbGkubmV4dEVsZW1lbnRTaWJsaW5nO1xuICAgICAgICBjb250cm9sbGVyLnJlbW92ZSgpO1xuICAgICAgICByZXR1cm4gX2FkZChndWksIGNvbnRyb2xsZXIub2JqZWN0LCBjb250cm9sbGVyLnByb3BlcnR5LCB7XG4gICAgICAgICAgYmVmb3JlOiBuZXh0U2libGluZyxcbiAgICAgICAgICBmYWN0b3J5QXJnczogW0NvbW1vbi50b0FycmF5KGFyZ3VtZW50cyldXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgaWYgKENvbW1vbi5pc0FycmF5KF9vcHRpb25zKSB8fCBDb21tb24uaXNPYmplY3QoX29wdGlvbnMpKSB7XG4gICAgICAgIHZhciBfbmV4dFNpYmxpbmcgPSBjb250cm9sbGVyLl9fbGkubmV4dEVsZW1lbnRTaWJsaW5nO1xuICAgICAgICBjb250cm9sbGVyLnJlbW92ZSgpO1xuICAgICAgICByZXR1cm4gX2FkZChndWksIGNvbnRyb2xsZXIub2JqZWN0LCBjb250cm9sbGVyLnByb3BlcnR5LCB7XG4gICAgICAgICAgYmVmb3JlOiBfbmV4dFNpYmxpbmcsXG4gICAgICAgICAgZmFjdG9yeUFyZ3M6IFtfb3B0aW9uc11cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSxcbiAgICBuYW1lOiBmdW5jdGlvbiBuYW1lKF9uYW1lKSB7XG4gICAgICBjb250cm9sbGVyLl9fbGkuZmlyc3RFbGVtZW50Q2hpbGQuZmlyc3RFbGVtZW50Q2hpbGQuaW5uZXJIVE1MID0gX25hbWU7XG4gICAgICByZXR1cm4gY29udHJvbGxlcjtcbiAgICB9LFxuICAgIGxpc3RlbjogZnVuY3Rpb24gbGlzdGVuKCkge1xuICAgICAgY29udHJvbGxlci5fX2d1aS5saXN0ZW4oY29udHJvbGxlcik7XG4gICAgICByZXR1cm4gY29udHJvbGxlcjtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgY29udHJvbGxlci5fX2d1aS5yZW1vdmUoY29udHJvbGxlcik7XG4gICAgICByZXR1cm4gY29udHJvbGxlcjtcbiAgICB9XG4gIH0pO1xuICBpZiAoY29udHJvbGxlciBpbnN0YW5jZW9mIE51bWJlckNvbnRyb2xsZXJTbGlkZXIpIHtcbiAgICB2YXIgYm94ID0gbmV3IE51bWJlckNvbnRyb2xsZXJCb3goY29udHJvbGxlci5vYmplY3QsIGNvbnRyb2xsZXIucHJvcGVydHksIHsgbWluOiBjb250cm9sbGVyLl9fbWluLCBtYXg6IGNvbnRyb2xsZXIuX19tYXgsIHN0ZXA6IGNvbnRyb2xsZXIuX19zdGVwIH0pO1xuICAgIENvbW1vbi5lYWNoKFsndXBkYXRlRGlzcGxheScsICdvbkNoYW5nZScsICdvbkZpbmlzaENoYW5nZScsICdzdGVwJywgJ21pbicsICdtYXgnXSwgZnVuY3Rpb24gKG1ldGhvZCkge1xuICAgICAgdmFyIHBjID0gY29udHJvbGxlclttZXRob2RdO1xuICAgICAgdmFyIHBiID0gYm94W21ldGhvZF07XG4gICAgICBjb250cm9sbGVyW21ldGhvZF0gPSBib3hbbWV0aG9kXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpO1xuICAgICAgICBwYi5hcHBseShib3gsIGFyZ3MpO1xuICAgICAgICByZXR1cm4gcGMuYXBwbHkoY29udHJvbGxlciwgYXJncyk7XG4gICAgICB9O1xuICAgIH0pO1xuICAgIGRvbS5hZGRDbGFzcyhsaSwgJ2hhcy1zbGlkZXInKTtcbiAgICBjb250cm9sbGVyLmRvbUVsZW1lbnQuaW5zZXJ0QmVmb3JlKGJveC5kb21FbGVtZW50LCBjb250cm9sbGVyLmRvbUVsZW1lbnQuZmlyc3RFbGVtZW50Q2hpbGQpO1xuICB9IGVsc2UgaWYgKGNvbnRyb2xsZXIgaW5zdGFuY2VvZiBOdW1iZXJDb250cm9sbGVyQm94KSB7XG4gICAgdmFyIHIgPSBmdW5jdGlvbiByKHJldHVybmVkKSB7XG4gICAgICBpZiAoQ29tbW9uLmlzTnVtYmVyKGNvbnRyb2xsZXIuX19taW4pICYmIENvbW1vbi5pc051bWJlcihjb250cm9sbGVyLl9fbWF4KSkge1xuICAgICAgICB2YXIgb2xkTmFtZSA9IGNvbnRyb2xsZXIuX19saS5maXJzdEVsZW1lbnRDaGlsZC5maXJzdEVsZW1lbnRDaGlsZC5pbm5lckhUTUw7XG4gICAgICAgIHZhciB3YXNMaXN0ZW5pbmcgPSBjb250cm9sbGVyLl9fZ3VpLl9fbGlzdGVuaW5nLmluZGV4T2YoY29udHJvbGxlcikgPiAtMTtcbiAgICAgICAgY29udHJvbGxlci5yZW1vdmUoKTtcbiAgICAgICAgdmFyIG5ld0NvbnRyb2xsZXIgPSBfYWRkKGd1aSwgY29udHJvbGxlci5vYmplY3QsIGNvbnRyb2xsZXIucHJvcGVydHksIHtcbiAgICAgICAgICBiZWZvcmU6IGNvbnRyb2xsZXIuX19saS5uZXh0RWxlbWVudFNpYmxpbmcsXG4gICAgICAgICAgZmFjdG9yeUFyZ3M6IFtjb250cm9sbGVyLl9fbWluLCBjb250cm9sbGVyLl9fbWF4LCBjb250cm9sbGVyLl9fc3RlcF1cbiAgICAgICAgfSk7XG4gICAgICAgIG5ld0NvbnRyb2xsZXIubmFtZShvbGROYW1lKTtcbiAgICAgICAgaWYgKHdhc0xpc3RlbmluZykgbmV3Q29udHJvbGxlci5saXN0ZW4oKTtcbiAgICAgICAgcmV0dXJuIG5ld0NvbnRyb2xsZXI7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmV0dXJuZWQ7XG4gICAgfTtcbiAgICBjb250cm9sbGVyLm1pbiA9IENvbW1vbi5jb21wb3NlKHIsIGNvbnRyb2xsZXIubWluKTtcbiAgICBjb250cm9sbGVyLm1heCA9IENvbW1vbi5jb21wb3NlKHIsIGNvbnRyb2xsZXIubWF4KTtcbiAgfSBlbHNlIGlmIChjb250cm9sbGVyIGluc3RhbmNlb2YgQm9vbGVhbkNvbnRyb2xsZXIpIHtcbiAgICBkb20uYmluZChsaSwgJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgZG9tLmZha2VFdmVudChjb250cm9sbGVyLl9fY2hlY2tib3gsICdjbGljaycpO1xuICAgIH0pO1xuICAgIGRvbS5iaW5kKGNvbnRyb2xsZXIuX19jaGVja2JveCwgJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfSk7XG4gIH0gZWxzZSBpZiAoY29udHJvbGxlciBpbnN0YW5jZW9mIEZ1bmN0aW9uQ29udHJvbGxlcikge1xuICAgIGRvbS5iaW5kKGxpLCAnY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICBkb20uZmFrZUV2ZW50KGNvbnRyb2xsZXIuX19idXR0b24sICdjbGljaycpO1xuICAgIH0pO1xuICAgIGRvbS5iaW5kKGxpLCAnbW91c2VvdmVyJywgZnVuY3Rpb24gKCkge1xuICAgICAgZG9tLmFkZENsYXNzKGNvbnRyb2xsZXIuX19idXR0b24sICdob3ZlcicpO1xuICAgIH0pO1xuICAgIGRvbS5iaW5kKGxpLCAnbW91c2VvdXQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICBkb20ucmVtb3ZlQ2xhc3MoY29udHJvbGxlci5fX2J1dHRvbiwgJ2hvdmVyJyk7XG4gICAgfSk7XG4gIH0gZWxzZSBpZiAoY29udHJvbGxlciBpbnN0YW5jZW9mIENvbG9yQ29udHJvbGxlcikge1xuICAgIGRvbS5hZGRDbGFzcyhsaSwgJ2NvbG9yJyk7XG4gICAgY29udHJvbGxlci51cGRhdGVEaXNwbGF5ID0gQ29tbW9uLmNvbXBvc2UoZnVuY3Rpb24gKHZhbCkge1xuICAgICAgbGkuc3R5bGUuYm9yZGVyTGVmdENvbG9yID0gY29udHJvbGxlci5fX2NvbG9yLnRvU3RyaW5nKCk7XG4gICAgICByZXR1cm4gdmFsO1xuICAgIH0sIGNvbnRyb2xsZXIudXBkYXRlRGlzcGxheSk7XG4gICAgY29udHJvbGxlci51cGRhdGVEaXNwbGF5KCk7XG4gIH1cbiAgY29udHJvbGxlci5zZXRWYWx1ZSA9IENvbW1vbi5jb21wb3NlKGZ1bmN0aW9uICh2YWwpIHtcbiAgICBpZiAoZ3VpLmdldFJvb3QoKS5fX3ByZXNldF9zZWxlY3QgJiYgY29udHJvbGxlci5pc01vZGlmaWVkKCkpIHtcbiAgICAgIG1hcmtQcmVzZXRNb2RpZmllZChndWkuZ2V0Um9vdCgpLCB0cnVlKTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbDtcbiAgfSwgY29udHJvbGxlci5zZXRWYWx1ZSk7XG59XG5mdW5jdGlvbiByZWNhbGxTYXZlZFZhbHVlKGd1aSwgY29udHJvbGxlcikge1xuICB2YXIgcm9vdCA9IGd1aS5nZXRSb290KCk7XG4gIHZhciBtYXRjaGVkSW5kZXggPSByb290Ll9fcmVtZW1iZXJlZE9iamVjdHMuaW5kZXhPZihjb250cm9sbGVyLm9iamVjdCk7XG4gIGlmIChtYXRjaGVkSW5kZXggIT09IC0xKSB7XG4gICAgdmFyIGNvbnRyb2xsZXJNYXAgPSByb290Ll9fcmVtZW1iZXJlZE9iamVjdEluZGVjZXNUb0NvbnRyb2xsZXJzW21hdGNoZWRJbmRleF07XG4gICAgaWYgKGNvbnRyb2xsZXJNYXAgPT09IHVuZGVmaW5lZCkge1xuICAgICAgY29udHJvbGxlck1hcCA9IHt9O1xuICAgICAgcm9vdC5fX3JlbWVtYmVyZWRPYmplY3RJbmRlY2VzVG9Db250cm9sbGVyc1ttYXRjaGVkSW5kZXhdID0gY29udHJvbGxlck1hcDtcbiAgICB9XG4gICAgY29udHJvbGxlck1hcFtjb250cm9sbGVyLnByb3BlcnR5XSA9IGNvbnRyb2xsZXI7XG4gICAgaWYgKHJvb3QubG9hZCAmJiByb290LmxvYWQucmVtZW1iZXJlZCkge1xuICAgICAgdmFyIHByZXNldE1hcCA9IHJvb3QubG9hZC5yZW1lbWJlcmVkO1xuICAgICAgdmFyIHByZXNldCA9IHZvaWQgMDtcbiAgICAgIGlmIChwcmVzZXRNYXBbZ3VpLnByZXNldF0pIHtcbiAgICAgICAgcHJlc2V0ID0gcHJlc2V0TWFwW2d1aS5wcmVzZXRdO1xuICAgICAgfSBlbHNlIGlmIChwcmVzZXRNYXBbREVGQVVMVF9ERUZBVUxUX1BSRVNFVF9OQU1FXSkge1xuICAgICAgICBwcmVzZXQgPSBwcmVzZXRNYXBbREVGQVVMVF9ERUZBVUxUX1BSRVNFVF9OQU1FXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChwcmVzZXRbbWF0Y2hlZEluZGV4XSAmJiBwcmVzZXRbbWF0Y2hlZEluZGV4XVtjb250cm9sbGVyLnByb3BlcnR5XSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IHByZXNldFttYXRjaGVkSW5kZXhdW2NvbnRyb2xsZXIucHJvcGVydHldO1xuICAgICAgICBjb250cm9sbGVyLmluaXRpYWxWYWx1ZSA9IHZhbHVlO1xuICAgICAgICBjb250cm9sbGVyLnNldFZhbHVlKHZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbmZ1bmN0aW9uIF9hZGQoZ3VpLCBvYmplY3QsIHByb3BlcnR5LCBwYXJhbXMpIHtcbiAgaWYgKG9iamVjdFtwcm9wZXJ0eV0gPT09IHVuZGVmaW5lZCkge1xuICAgIHRocm93IG5ldyBFcnJvcignT2JqZWN0IFwiJyArIG9iamVjdCArICdcIiBoYXMgbm8gcHJvcGVydHkgXCInICsgcHJvcGVydHkgKyAnXCInKTtcbiAgfVxuICB2YXIgY29udHJvbGxlciA9IHZvaWQgMDtcbiAgaWYgKHBhcmFtcy5jb2xvcikge1xuICAgIGNvbnRyb2xsZXIgPSBuZXcgQ29sb3JDb250cm9sbGVyKG9iamVjdCwgcHJvcGVydHkpO1xuICB9IGVsc2Uge1xuICAgIHZhciBmYWN0b3J5QXJncyA9IFtvYmplY3QsIHByb3BlcnR5XS5jb25jYXQocGFyYW1zLmZhY3RvcnlBcmdzKTtcbiAgICBjb250cm9sbGVyID0gQ29udHJvbGxlckZhY3RvcnkuYXBwbHkoZ3VpLCBmYWN0b3J5QXJncyk7XG4gIH1cbiAgaWYgKHBhcmFtcy5iZWZvcmUgaW5zdGFuY2VvZiBDb250cm9sbGVyKSB7XG4gICAgcGFyYW1zLmJlZm9yZSA9IHBhcmFtcy5iZWZvcmUuX19saTtcbiAgfVxuICByZWNhbGxTYXZlZFZhbHVlKGd1aSwgY29udHJvbGxlcik7XG4gIGRvbS5hZGRDbGFzcyhjb250cm9sbGVyLmRvbUVsZW1lbnQsICdjJyk7XG4gIHZhciBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBkb20uYWRkQ2xhc3MobmFtZSwgJ3Byb3BlcnR5LW5hbWUnKTtcbiAgbmFtZS5pbm5lckhUTUwgPSBjb250cm9sbGVyLnByb3BlcnR5O1xuICB2YXIgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChuYW1lKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRyb2xsZXIuZG9tRWxlbWVudCk7XG4gIHZhciBsaSA9IGFkZFJvdyhndWksIGNvbnRhaW5lciwgcGFyYW1zLmJlZm9yZSk7XG4gIGRvbS5hZGRDbGFzcyhsaSwgR1VJLkNMQVNTX0NPTlRST0xMRVJfUk9XKTtcbiAgaWYgKGNvbnRyb2xsZXIgaW5zdGFuY2VvZiBDb2xvckNvbnRyb2xsZXIpIHtcbiAgICBkb20uYWRkQ2xhc3MobGksICdjb2xvcicpO1xuICB9IGVsc2Uge1xuICAgIGRvbS5hZGRDbGFzcyhsaSwgX3R5cGVvZihjb250cm9sbGVyLmdldFZhbHVlKCkpKTtcbiAgfVxuICBhdWdtZW50Q29udHJvbGxlcihndWksIGxpLCBjb250cm9sbGVyKTtcbiAgZ3VpLl9fY29udHJvbGxlcnMucHVzaChjb250cm9sbGVyKTtcbiAgcmV0dXJuIGNvbnRyb2xsZXI7XG59XG5mdW5jdGlvbiBnZXRMb2NhbFN0b3JhZ2VIYXNoKGd1aSwga2V5KSB7XG4gIHJldHVybiBkb2N1bWVudC5sb2NhdGlvbi5ocmVmICsgJy4nICsga2V5O1xufVxuZnVuY3Rpb24gYWRkUHJlc2V0T3B0aW9uKGd1aSwgbmFtZSwgc2V0U2VsZWN0ZWQpIHtcbiAgdmFyIG9wdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICBvcHQuaW5uZXJIVE1MID0gbmFtZTtcbiAgb3B0LnZhbHVlID0gbmFtZTtcbiAgZ3VpLl9fcHJlc2V0X3NlbGVjdC5hcHBlbmRDaGlsZChvcHQpO1xuICBpZiAoc2V0U2VsZWN0ZWQpIHtcbiAgICBndWkuX19wcmVzZXRfc2VsZWN0LnNlbGVjdGVkSW5kZXggPSBndWkuX19wcmVzZXRfc2VsZWN0Lmxlbmd0aCAtIDE7XG4gIH1cbn1cbmZ1bmN0aW9uIHNob3dIaWRlRXhwbGFpbihndWksIGV4cGxhaW4pIHtcbiAgZXhwbGFpbi5zdHlsZS5kaXNwbGF5ID0gZ3VpLnVzZUxvY2FsU3RvcmFnZSA/ICdibG9jaycgOiAnbm9uZSc7XG59XG5mdW5jdGlvbiBhZGRTYXZlTWVudShndWkpIHtcbiAgdmFyIGRpdiA9IGd1aS5fX3NhdmVfcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgZG9tLmFkZENsYXNzKGd1aS5kb21FbGVtZW50LCAnaGFzLXNhdmUnKTtcbiAgZ3VpLl9fdWwuaW5zZXJ0QmVmb3JlKGRpdiwgZ3VpLl9fdWwuZmlyc3RDaGlsZCk7XG4gIGRvbS5hZGRDbGFzcyhkaXYsICdzYXZlLXJvdycpO1xuICB2YXIgZ2VhcnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIGdlYXJzLmlubmVySFRNTCA9ICcmbmJzcDsnO1xuICBkb20uYWRkQ2xhc3MoZ2VhcnMsICdidXR0b24gZ2VhcnMnKTtcbiAgdmFyIGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgYnV0dG9uLmlubmVySFRNTCA9ICdTYXZlJztcbiAgZG9tLmFkZENsYXNzKGJ1dHRvbiwgJ2J1dHRvbicpO1xuICBkb20uYWRkQ2xhc3MoYnV0dG9uLCAnc2F2ZScpO1xuICB2YXIgYnV0dG9uMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgYnV0dG9uMi5pbm5lckhUTUwgPSAnTmV3JztcbiAgZG9tLmFkZENsYXNzKGJ1dHRvbjIsICdidXR0b24nKTtcbiAgZG9tLmFkZENsYXNzKGJ1dHRvbjIsICdzYXZlLWFzJyk7XG4gIHZhciBidXR0b24zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBidXR0b24zLmlubmVySFRNTCA9ICdSZXZlcnQnO1xuICBkb20uYWRkQ2xhc3MoYnV0dG9uMywgJ2J1dHRvbicpO1xuICBkb20uYWRkQ2xhc3MoYnV0dG9uMywgJ3JldmVydCcpO1xuICB2YXIgc2VsZWN0ID0gZ3VpLl9fcHJlc2V0X3NlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICBpZiAoZ3VpLmxvYWQgJiYgZ3VpLmxvYWQucmVtZW1iZXJlZCkge1xuICAgIENvbW1vbi5lYWNoKGd1aS5sb2FkLnJlbWVtYmVyZWQsIGZ1bmN0aW9uICh2YWx1ZSwga2V5KSB7XG4gICAgICBhZGRQcmVzZXRPcHRpb24oZ3VpLCBrZXksIGtleSA9PT0gZ3VpLnByZXNldCk7XG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgYWRkUHJlc2V0T3B0aW9uKGd1aSwgREVGQVVMVF9ERUZBVUxUX1BSRVNFVF9OQU1FLCBmYWxzZSk7XG4gIH1cbiAgZG9tLmJpbmQoc2VsZWN0LCAnY2hhbmdlJywgZnVuY3Rpb24gKCkge1xuICAgIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCBndWkuX19wcmVzZXRfc2VsZWN0Lmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgZ3VpLl9fcHJlc2V0X3NlbGVjdFtpbmRleF0uaW5uZXJIVE1MID0gZ3VpLl9fcHJlc2V0X3NlbGVjdFtpbmRleF0udmFsdWU7XG4gICAgfVxuICAgIGd1aS5wcmVzZXQgPSB0aGlzLnZhbHVlO1xuICB9KTtcbiAgZGl2LmFwcGVuZENoaWxkKHNlbGVjdCk7XG4gIGRpdi5hcHBlbmRDaGlsZChnZWFycyk7XG4gIGRpdi5hcHBlbmRDaGlsZChidXR0b24pO1xuICBkaXYuYXBwZW5kQ2hpbGQoYnV0dG9uMik7XG4gIGRpdi5hcHBlbmRDaGlsZChidXR0b24zKTtcbiAgaWYgKFNVUFBPUlRTX0xPQ0FMX1NUT1JBR0UpIHtcbiAgICB2YXIgZXhwbGFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZy1sb2NhbC1leHBsYWluJyk7XG4gICAgdmFyIGxvY2FsU3RvcmFnZUNoZWNrQm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RnLWxvY2FsLXN0b3JhZ2UnKTtcbiAgICB2YXIgc2F2ZUxvY2FsbHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGctc2F2ZS1sb2NhbGx5Jyk7XG4gICAgc2F2ZUxvY2FsbHkuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGdldExvY2FsU3RvcmFnZUhhc2goZ3VpLCAnaXNMb2NhbCcpKSA9PT0gJ3RydWUnKSB7XG4gICAgICBsb2NhbFN0b3JhZ2VDaGVja0JveC5zZXRBdHRyaWJ1dGUoJ2NoZWNrZWQnLCAnY2hlY2tlZCcpO1xuICAgIH1cbiAgICBzaG93SGlkZUV4cGxhaW4oZ3VpLCBleHBsYWluKTtcbiAgICBkb20uYmluZChsb2NhbFN0b3JhZ2VDaGVja0JveCwgJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGd1aS51c2VMb2NhbFN0b3JhZ2UgPSAhZ3VpLnVzZUxvY2FsU3RvcmFnZTtcbiAgICAgIHNob3dIaWRlRXhwbGFpbihndWksIGV4cGxhaW4pO1xuICAgIH0pO1xuICB9XG4gIHZhciBuZXdDb25zdHJ1Y3RvclRleHRBcmVhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RnLW5ldy1jb25zdHJ1Y3RvcicpO1xuICBkb20uYmluZChuZXdDb25zdHJ1Y3RvclRleHRBcmVhLCAna2V5ZG93bicsIGZ1bmN0aW9uIChlKSB7XG4gICAgaWYgKGUubWV0YUtleSAmJiAoZS53aGljaCA9PT0gNjcgfHwgZS5rZXlDb2RlID09PSA2NykpIHtcbiAgICAgIFNBVkVfRElBTE9HVUUuaGlkZSgpO1xuICAgIH1cbiAgfSk7XG4gIGRvbS5iaW5kKGdlYXJzLCAnY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgbmV3Q29uc3RydWN0b3JUZXh0QXJlYS5pbm5lckhUTUwgPSBKU09OLnN0cmluZ2lmeShndWkuZ2V0U2F2ZU9iamVjdCgpLCB1bmRlZmluZWQsIDIpO1xuICAgIFNBVkVfRElBTE9HVUUuc2hvdygpO1xuICAgIG5ld0NvbnN0cnVjdG9yVGV4dEFyZWEuZm9jdXMoKTtcbiAgICBuZXdDb25zdHJ1Y3RvclRleHRBcmVhLnNlbGVjdCgpO1xuICB9KTtcbiAgZG9tLmJpbmQoYnV0dG9uLCAnY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgZ3VpLnNhdmUoKTtcbiAgfSk7XG4gIGRvbS5iaW5kKGJ1dHRvbjIsICdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcHJlc2V0TmFtZSA9IHByb21wdCgnRW50ZXIgYSBuZXcgcHJlc2V0IG5hbWUuJyk7XG4gICAgaWYgKHByZXNldE5hbWUpIHtcbiAgICAgIGd1aS5zYXZlQXMocHJlc2V0TmFtZSk7XG4gICAgfVxuICB9KTtcbiAgZG9tLmJpbmQoYnV0dG9uMywgJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgIGd1aS5yZXZlcnQoKTtcbiAgfSk7XG59XG5mdW5jdGlvbiBhZGRSZXNpemVIYW5kbGUoZ3VpKSB7XG4gIHZhciBwbW91c2VYID0gdm9pZCAwO1xuICBndWkuX19yZXNpemVfaGFuZGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIENvbW1vbi5leHRlbmQoZ3VpLl9fcmVzaXplX2hhbmRsZS5zdHlsZSwge1xuICAgIHdpZHRoOiAnNnB4JyxcbiAgICBtYXJnaW5MZWZ0OiAnLTNweCcsXG4gICAgaGVpZ2h0OiAnMjAwcHgnLFxuICAgIGN1cnNvcjogJ2V3LXJlc2l6ZScsXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZSdcbiAgfSk7XG4gIGZ1bmN0aW9uIGRyYWcoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBndWkud2lkdGggKz0gcG1vdXNlWCAtIGUuY2xpZW50WDtcbiAgICBndWkub25SZXNpemUoKTtcbiAgICBwbW91c2VYID0gZS5jbGllbnRYO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBmdW5jdGlvbiBkcmFnU3RvcCgpIHtcbiAgICBkb20ucmVtb3ZlQ2xhc3MoZ3VpLl9fY2xvc2VCdXR0b24sIEdVSS5DTEFTU19EUkFHKTtcbiAgICBkb20udW5iaW5kKHdpbmRvdywgJ21vdXNlbW92ZScsIGRyYWcpO1xuICAgIGRvbS51bmJpbmQod2luZG93LCAnbW91c2V1cCcsIGRyYWdTdG9wKTtcbiAgfVxuICBmdW5jdGlvbiBkcmFnU3RhcnQoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBwbW91c2VYID0gZS5jbGllbnRYO1xuICAgIGRvbS5hZGRDbGFzcyhndWkuX19jbG9zZUJ1dHRvbiwgR1VJLkNMQVNTX0RSQUcpO1xuICAgIGRvbS5iaW5kKHdpbmRvdywgJ21vdXNlbW92ZScsIGRyYWcpO1xuICAgIGRvbS5iaW5kKHdpbmRvdywgJ21vdXNldXAnLCBkcmFnU3RvcCk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGRvbS5iaW5kKGd1aS5fX3Jlc2l6ZV9oYW5kbGUsICdtb3VzZWRvd24nLCBkcmFnU3RhcnQpO1xuICBkb20uYmluZChndWkuX19jbG9zZUJ1dHRvbiwgJ21vdXNlZG93bicsIGRyYWdTdGFydCk7XG4gIGd1aS5kb21FbGVtZW50Lmluc2VydEJlZm9yZShndWkuX19yZXNpemVfaGFuZGxlLCBndWkuZG9tRWxlbWVudC5maXJzdEVsZW1lbnRDaGlsZCk7XG59XG5mdW5jdGlvbiBzZXRXaWR0aChndWksIHcpIHtcbiAgZ3VpLmRvbUVsZW1lbnQuc3R5bGUud2lkdGggPSB3ICsgJ3B4JztcbiAgaWYgKGd1aS5fX3NhdmVfcm93ICYmIGd1aS5hdXRvUGxhY2UpIHtcbiAgICBndWkuX19zYXZlX3Jvdy5zdHlsZS53aWR0aCA9IHcgKyAncHgnO1xuICB9XG4gIGlmIChndWkuX19jbG9zZUJ1dHRvbikge1xuICAgIGd1aS5fX2Nsb3NlQnV0dG9uLnN0eWxlLndpZHRoID0gdyArICdweCc7XG4gIH1cbn1cbmZ1bmN0aW9uIGdldEN1cnJlbnRQcmVzZXQoZ3VpLCB1c2VJbml0aWFsVmFsdWVzKSB7XG4gIHZhciB0b1JldHVybiA9IHt9O1xuICBDb21tb24uZWFjaChndWkuX19yZW1lbWJlcmVkT2JqZWN0cywgZnVuY3Rpb24gKHZhbCwgaW5kZXgpIHtcbiAgICB2YXIgc2F2ZWRWYWx1ZXMgPSB7fTtcbiAgICB2YXIgY29udHJvbGxlck1hcCA9IGd1aS5fX3JlbWVtYmVyZWRPYmplY3RJbmRlY2VzVG9Db250cm9sbGVyc1tpbmRleF07XG4gICAgQ29tbW9uLmVhY2goY29udHJvbGxlck1hcCwgZnVuY3Rpb24gKGNvbnRyb2xsZXIsIHByb3BlcnR5KSB7XG4gICAgICBzYXZlZFZhbHVlc1twcm9wZXJ0eV0gPSB1c2VJbml0aWFsVmFsdWVzID8gY29udHJvbGxlci5pbml0aWFsVmFsdWUgOiBjb250cm9sbGVyLmdldFZhbHVlKCk7XG4gICAgfSk7XG4gICAgdG9SZXR1cm5baW5kZXhdID0gc2F2ZWRWYWx1ZXM7XG4gIH0pO1xuICByZXR1cm4gdG9SZXR1cm47XG59XG5mdW5jdGlvbiBzZXRQcmVzZXRTZWxlY3RJbmRleChndWkpIHtcbiAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IGd1aS5fX3ByZXNldF9zZWxlY3QubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgaWYgKGd1aS5fX3ByZXNldF9zZWxlY3RbaW5kZXhdLnZhbHVlID09PSBndWkucHJlc2V0KSB7XG4gICAgICBndWkuX19wcmVzZXRfc2VsZWN0LnNlbGVjdGVkSW5kZXggPSBpbmRleDtcbiAgICB9XG4gIH1cbn1cbmZ1bmN0aW9uIHVwZGF0ZURpc3BsYXlzKGNvbnRyb2xsZXJBcnJheSkge1xuICBpZiAoY29udHJvbGxlckFycmF5Lmxlbmd0aCAhPT0gMCkge1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSQxLmNhbGwod2luZG93LCBmdW5jdGlvbiAoKSB7XG4gICAgICB1cGRhdGVEaXNwbGF5cyhjb250cm9sbGVyQXJyYXkpO1xuICAgIH0pO1xuICB9XG4gIENvbW1vbi5lYWNoKGNvbnRyb2xsZXJBcnJheSwgZnVuY3Rpb24gKGMpIHtcbiAgICBjLnVwZGF0ZURpc3BsYXkoKTtcbiAgfSk7XG59XG5cbnZhciBjb2xvciA9IHtcbiAgQ29sb3I6IENvbG9yLFxuICBtYXRoOiBDb2xvck1hdGgsXG4gIGludGVycHJldDogaW50ZXJwcmV0XG59O1xudmFyIGNvbnRyb2xsZXJzID0ge1xuICBDb250cm9sbGVyOiBDb250cm9sbGVyLFxuICBCb29sZWFuQ29udHJvbGxlcjogQm9vbGVhbkNvbnRyb2xsZXIsXG4gIE9wdGlvbkNvbnRyb2xsZXI6IE9wdGlvbkNvbnRyb2xsZXIsXG4gIFN0cmluZ0NvbnRyb2xsZXI6IFN0cmluZ0NvbnRyb2xsZXIsXG4gIE51bWJlckNvbnRyb2xsZXI6IE51bWJlckNvbnRyb2xsZXIsXG4gIE51bWJlckNvbnRyb2xsZXJCb3g6IE51bWJlckNvbnRyb2xsZXJCb3gsXG4gIE51bWJlckNvbnRyb2xsZXJTbGlkZXI6IE51bWJlckNvbnRyb2xsZXJTbGlkZXIsXG4gIEZ1bmN0aW9uQ29udHJvbGxlcjogRnVuY3Rpb25Db250cm9sbGVyLFxuICBDb2xvckNvbnRyb2xsZXI6IENvbG9yQ29udHJvbGxlclxufTtcbnZhciBkb20kMSA9IHsgZG9tOiBkb20gfTtcbnZhciBndWkgPSB7IEdVSTogR1VJIH07XG52YXIgR1VJJDEgPSBHVUk7XG52YXIgaW5kZXggPSB7XG4gIGNvbG9yOiBjb2xvcixcbiAgY29udHJvbGxlcnM6IGNvbnRyb2xsZXJzLFxuICBkb206IGRvbSQxLFxuICBndWk6IGd1aSxcbiAgR1VJOiBHVUkkMVxufTtcblxuZXhwb3J0IHsgY29sb3IsIGNvbnRyb2xsZXJzLCBkb20kMSBhcyBkb20sIGd1aSwgR1VJJDEgYXMgR1VJIH07XG5leHBvcnQgZGVmYXVsdCBpbmRleDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdC5ndWkubW9kdWxlLmpzLm1hcFxuIiwiaW1wb3J0IERlYnVnIGZyb20gJ0BiYXNlbWVudHVuaXZlcnNlL2RlYnVnJztcbmltcG9ydCBJbnB1dE1hbmFnZXIgZnJvbSAnQGJhc2VtZW50dW5pdmVyc2UvaW5wdXQtbWFuYWdlcic7XG5pbXBvcnQgeyB2ZWMgfSBmcm9tICdAYmFzZW1lbnR1bml2ZXJzZS92ZWMnO1xuaW1wb3J0ICogYXMgZGF0IGZyb20gJ2RhdC5ndWknO1xuaW1wb3J0ICogYXMgY29uc3RhbnRzIGZyb20gJy4vY29uc3RhbnRzJztcbmltcG9ydCB7IExpZ2h0aW5nU2NlbmUgfSBmcm9tICcuL0xpZ2h0aW5nU2NlbmUnO1xuaW1wb3J0IHsgVGVzdFNjZW5lIH0gZnJvbSAnLi9UZXN0U2NlbmUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lIHtcbiAgcHJpdmF0ZSBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xuICBwcml2YXRlIGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcblxuICBwcml2YXRlIGxhc3RGcmFtZVRpbWU6IG51bWJlcjtcbiAgcHJpdmF0ZSBsYXN0RnJhbWVDb3VudFRpbWU6IG51bWJlcjtcbiAgcHJpdmF0ZSBmcmFtZVJhdGU6IG51bWJlciA9IDA7XG4gIHByaXZhdGUgZnJhbWVDb3VudDogbnVtYmVyID0gMDtcblxuICBwcml2YXRlIHNjZW5lOiBUZXN0U2NlbmUgfCBMaWdodGluZ1NjZW5lIHwgbnVsbCA9IG51bGw7XG5cbiAgcHVibGljIHN0YXRpYyBzY3JlZW46IHZlYztcbiAgcHVibGljIHN0YXRpYyBndWk6IGRhdC5HVUk7XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogSFRNTEVsZW1lbnQgfCBudWxsKSB7XG4gICAgaWYgKGNvbnRhaW5lciA9PT0gbnVsbCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdBIHZhbGlkIGNvbnRhaW5lciBlbGVtZW50IG11c3QgYmUgc3BlY2lmaWVkLicpO1xuICAgIH1cbiAgICBpZiAoY29udGFpbmVyLnRhZ05hbWUudG9Mb3dlckNhc2UoKSAhPT0gJ2NhbnZhcycpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQ29udGFpbmVyIGVsZW1lbnQgbXVzdCBiZSBhIGNhbnZhcy4nKTtcbiAgICB9XG4gICAgdGhpcy5jYW52YXMgPSBjb250YWluZXIgYXMgSFRNTENhbnZhc0VsZW1lbnQ7XG5cbiAgICAvLyBHZXQgYSAyZCBjb250ZXh0XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgaWYgKGNvbnRleHQgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGdldCBhIDJkIGNvbnRleHQuXCIpO1xuICAgIH1cblxuICAgIC8vIEhhbmRsZSByZXNpemVcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5yZXNpemUuYmluZCh0aGlzKSwgZmFsc2UpO1xuICAgIHRoaXMucmVzaXplKCk7XG4gIH1cblxuICBwcml2YXRlIHJlc2l6ZSgpIHtcbiAgICB0aGlzLmNhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgfVxuXG4gIHB1YmxpYyBpbml0aWFsaXNlKCkge1xuICAgIC8vIEluaXRpYWxpc2Ugc3Vic3lzdGVtc1xuICAgIERlYnVnLmluaXRpYWxpc2UoKTtcbiAgICBJbnB1dE1hbmFnZXIuaW5pdGlhbGlzZSgpO1xuICAgIEdhbWUuZ3VpID0gbmV3IGRhdC5HVUkoKTtcblxuICAgIC8vIFN0YXJ0IGdhbWUgbG9vcFxuICAgIHRoaXMubGFzdEZyYW1lVGltZSA9IHRoaXMubGFzdEZyYW1lQ291bnRUaW1lID0gcGVyZm9ybWFuY2Uubm93KCk7XG4gICAgdGhpcy5sb29wKCk7XG5cbiAgICAvLyBJbml0aWFsaXNlIHNjZW5lXG4gICAgdGhpcy5zY2VuZSA9IG5ldyBMaWdodGluZ1NjZW5lKCk7XG4gICAgLy8gdGhpcy5zY2VuZSA9IG5ldyBUZXN0U2NlbmUoKTtcbiAgICB0aGlzLnNjZW5lLmluaXRpYWxpc2UoKTtcbiAgfVxuXG4gIHByaXZhdGUgbG9vcCgpIHtcbiAgICBjb25zdCBub3cgPSBwZXJmb3JtYW5jZS5ub3coKTtcbiAgICBjb25zdCBlbGFwc2VkVGltZSA9IE1hdGgubWluKG5vdyAtIHRoaXMubGFzdEZyYW1lVGltZSwgY29uc3RhbnRzLkZQU19NSU4pO1xuXG4gICAgLy8gQ2FsY3VsYXRlIGZyYW1lcmF0ZVxuICAgIGlmIChub3cgLSB0aGlzLmxhc3RGcmFtZUNvdW50VGltZSA+PSAxMDAwKSB7XG4gICAgICB0aGlzLmxhc3RGcmFtZUNvdW50VGltZSA9IG5vdztcbiAgICAgIHRoaXMuZnJhbWVSYXRlID0gdGhpcy5mcmFtZUNvdW50O1xuICAgICAgdGhpcy5mcmFtZUNvdW50ID0gMDtcbiAgICB9XG4gICAgdGhpcy5mcmFtZUNvdW50Kys7XG4gICAgdGhpcy5sYXN0RnJhbWVUaW1lID0gbm93O1xuXG4gICAgRGVidWcudmFsdWUoJ0ZQUycsIHRoaXMuZnJhbWVSYXRlKTtcblxuICAgIC8vIERvIGdhbWUgbG9vcFxuICAgIHRoaXMudXBkYXRlKGVsYXBzZWRUaW1lKTtcbiAgICB0aGlzLmRyYXcoKTtcbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMubG9vcC5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIHVwZGF0ZShkdDogbnVtYmVyKSB7XG4gICAgR2FtZS5zY3JlZW4gPSB2ZWModGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG5cbiAgICBpZiAodGhpcy5zY2VuZSkge1xuICAgICAgdGhpcy5zY2VuZS51cGRhdGUoZHQpO1xuICAgIH1cblxuICAgIElucHV0TWFuYWdlci51cGRhdGUoKTsgLy8gSW5wdXQgbWFuYWdlciBzaG91bGQgYmUgdXBkYXRlZCBsYXN0XG4gIH1cblxuICBkcmF3KCkge1xuICAgIHRoaXMuY29udGV4dC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG5cbiAgICBpZiAodGhpcy5zY2VuZSkge1xuICAgICAgdGhpcy5zY2VuZS5kcmF3KHRoaXMuY29udGV4dCk7XG4gICAgfVxuXG4gICAgRGVidWcuZHJhdyh0aGlzLmNvbnRleHQpO1xuICB9XG59XG4iLCJpbXBvcnQgRGVidWcgZnJvbSAnQGJhc2VtZW50dW5pdmVyc2UvZGVidWcnO1xuaW1wb3J0IElucHV0TWFuYWdlciBmcm9tICdAYmFzZW1lbnR1bml2ZXJzZS9pbnB1dC1tYW5hZ2VyJztcbmltcG9ydCB7IHZlYyB9IGZyb20gJ0BiYXNlbWVudHVuaXZlcnNlL3ZlYyc7XG5pbXBvcnQgeyB2NCBhcyB1dWlkIH0gZnJvbSAndXVpZCc7XG5pbXBvcnQgR2FtZSBmcm9tICcuL0dhbWUnO1xuaW1wb3J0IHsgY2xhbXBWZWMsIHBvaW50SW5SZWN0YW5nbGUgfSBmcm9tICcuL3V0aWxzJztcblxuZXhwb3J0IGNsYXNzIEdyb3VuZFNoYWRvd1JlY2VpdmVyIHtcbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgREVGQVVMVF9TSVpFID0gdmVjKDIwMCwgMjAwKTtcbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgREVGQVVMVF9DT0xPVVIgPSAnI2RkZCc7XG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IERFQlVHX0NPTE9VUiA9ICcjMDViJztcbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgREVCVUdfSE9WRVJfQ09MT1VSID0gJyMzOGYnO1xuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBNSU5fU0laRSA9IHZlYygyMCwgMjApO1xuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBNQVhfU0laRSA9IHZlYyg2MDAsIDYwMCk7XG5cbiAgcHVibGljIHJlYWRvbmx5IHR5cGUgPSAnZ3JvdW5kJztcblxuICBwdWJsaWMgaWQ6IHN0cmluZyA9ICcnO1xuICBwdWJsaWMgZm9sZGVyOiBkYXQuR1VJIHwgbnVsbCA9IG51bGw7XG5cbiAgcHVibGljIHBvc2l0aW9uOiB2ZWMgPSB2ZWMoKTtcbiAgcHVibGljIHNpemU6IHZlYyA9IEdyb3VuZFNoYWRvd1JlY2VpdmVyLkRFRkFVTFRfU0laRTtcbiAgcHVibGljIGNvbG91cjogc3RyaW5nID0gR3JvdW5kU2hhZG93UmVjZWl2ZXIuREVGQVVMVF9DT0xPVVI7XG5cbiAgcHVibGljIGhvdmVyZWQgPSBmYWxzZTtcbiAgcHVibGljIHNlbGVjdGVkID0gZmFsc2U7XG4gIHByaXZhdGUgZHJhZ2dpbmcgPSBmYWxzZTtcbiAgcHJpdmF0ZSBkcmFnT2Zmc2V0OiB2ZWMgfCBudWxsID0gbnVsbDtcblxuICBwdWJsaWMgY29uc3RydWN0b3IoZGF0YTogUGFydGlhbDxHcm91bmRTaGFkb3dSZWNlaXZlcj4gPSB7fSkge1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywgZGF0YSwge1xuICAgICAgaWQ6IGRhdGEuaWQgPz8gdXVpZCgpLnNwbGl0KCctJylbMF0sXG4gICAgfSk7XG5cbiAgICB0aGlzLmZvbGRlciA9IEdhbWUuZ3VpLmFkZEZvbGRlcihgR3JvdW5kICR7dGhpcy5pZH1gKTtcbiAgICB0aGlzLmZvbGRlci5hZGQodGhpcywgJ2NvbG91cicpO1xuICAgIHRoaXMuZm9sZGVyXG4gICAgICAuYWRkKFxuICAgICAgICB0aGlzLnNpemUsXG4gICAgICAgICd4JyxcbiAgICAgICAgR3JvdW5kU2hhZG93UmVjZWl2ZXIuTUlOX1NJWkUueCxcbiAgICAgICAgR3JvdW5kU2hhZG93UmVjZWl2ZXIuTUFYX1NJWkUueFxuICAgICAgKVxuICAgICAgLm5hbWUoJ3dpZHRoJyk7XG4gICAgdGhpcy5mb2xkZXJcbiAgICAgIC5hZGQoXG4gICAgICAgIHRoaXMuc2l6ZSxcbiAgICAgICAgJ3knLFxuICAgICAgICBHcm91bmRTaGFkb3dSZWNlaXZlci5NSU5fU0laRS55LFxuICAgICAgICBHcm91bmRTaGFkb3dSZWNlaXZlci5NQVhfU0laRS55XG4gICAgICApXG4gICAgICAubmFtZSgnaGVpZ2h0Jyk7XG4gIH1cblxuICBwdWJsaWMgc2VyaWFsaXNlKCk6IGFueSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6IHRoaXMudHlwZSxcbiAgICAgIGlkOiB0aGlzLmlkLFxuICAgICAgcG9zaXRpb246IHRoaXMucG9zaXRpb24sXG4gICAgICBzaXplOiB0aGlzLnNpemUsXG4gICAgICBjb2xvdXI6IHRoaXMuY29sb3VyLFxuICAgIH07XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGRlc2VyaWFsaXNlKGRhdGE6IGFueSk6IEdyb3VuZFNoYWRvd1JlY2VpdmVyIHtcbiAgICByZXR1cm4gbmV3IEdyb3VuZFNoYWRvd1JlY2VpdmVyKGRhdGEpO1xuICB9XG5cbiAgcHVibGljIGRlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMuZm9sZGVyKSB7XG4gICAgICBHYW1lLmd1aS5yZW1vdmVGb2xkZXIodGhpcy5mb2xkZXIpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyB1cGRhdGUoZHQ6IG51bWJlcikge1xuICAgIHRoaXMuaG92ZXJlZCA9IHBvaW50SW5SZWN0YW5nbGUoSW5wdXRNYW5hZ2VyLm1vdXNlUG9zaXRpb24sIHtcbiAgICAgIHBvc2l0aW9uOiB0aGlzLnBvc2l0aW9uLFxuICAgICAgc2l6ZTogdGhpcy5zaXplLFxuICAgIH0pO1xuXG4gICAgaWYgKElucHV0TWFuYWdlci5tb3VzZURvd24oKSAmJiB0aGlzLnNlbGVjdGVkICYmICF0aGlzLmRyYWdnaW5nKSB7XG4gICAgICB0aGlzLmRyYWdnaW5nID0gdHJ1ZTtcbiAgICAgIHRoaXMuZHJhZ09mZnNldCA9IHZlYy5zdWIoSW5wdXRNYW5hZ2VyLm1vdXNlUG9zaXRpb24sIHRoaXMucG9zaXRpb24pO1xuICAgIH1cblxuICAgIGlmICghSW5wdXRNYW5hZ2VyLm1vdXNlRG93bigpKSB7XG4gICAgICB0aGlzLmRyYWdnaW5nID0gZmFsc2U7XG4gICAgICB0aGlzLmRyYWdPZmZzZXQgPSBudWxsO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnNlbGVjdGVkICYmIHRoaXMuZHJhZ2dpbmcgJiYgdGhpcy5kcmFnT2Zmc2V0KSB7XG4gICAgICBpZiAoSW5wdXRNYW5hZ2VyLmtleURvd24oJ0NvbnRyb2xMZWZ0JykpIHtcbiAgICAgICAgdGhpcy5zaXplID0gY2xhbXBWZWMoXG4gICAgICAgICAgdmVjLnN1YihJbnB1dE1hbmFnZXIubW91c2VQb3NpdGlvbiwgdGhpcy5wb3NpdGlvbiksXG4gICAgICAgICAgR3JvdW5kU2hhZG93UmVjZWl2ZXIuTUlOX1NJWkUsXG4gICAgICAgICAgR3JvdW5kU2hhZG93UmVjZWl2ZXIuTUFYX1NJWkVcbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucG9zaXRpb24gPSB2ZWMuc3ViKElucHV0TWFuYWdlci5tb3VzZVBvc2l0aW9uLCB0aGlzLmRyYWdPZmZzZXQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIERlYnVnLmJvcmRlcihgJHt0aGlzLmlkfV9ib3JkZXJgLCAnJywgdGhpcy5wb3NpdGlvbiwge1xuICAgICAgc2hvd0xhYmVsOiBmYWxzZSxcbiAgICAgIHNob3dWYWx1ZTogZmFsc2UsXG4gICAgICBzaXplOiB0aGlzLnNpemUsXG4gICAgICBib3JkZXJDb2xvdXI6XG4gICAgICAgIHRoaXMuaG92ZXJlZCB8fCB0aGlzLmRyYWdnaW5nXG4gICAgICAgICAgPyBHcm91bmRTaGFkb3dSZWNlaXZlci5ERUJVR19IT1ZFUl9DT0xPVVJcbiAgICAgICAgICA6IEdyb3VuZFNoYWRvd1JlY2VpdmVyLkRFQlVHX0NPTE9VUixcbiAgICAgIGJvcmRlclN0eWxlOiB0aGlzLnNlbGVjdGVkID8gJ3NvbGlkJyA6ICdkYXNoZWQnLFxuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGRyYXcoY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSB7XG4gICAgY29udGV4dC5zYXZlKCk7XG5cbiAgICBjb250ZXh0LmZpbGxTdHlsZSA9IHRoaXMuY29sb3VyO1xuICAgIGNvbnRleHQuZmlsbFJlY3QoXG4gICAgICB0aGlzLnBvc2l0aW9uLngsXG4gICAgICB0aGlzLnBvc2l0aW9uLnksXG4gICAgICB0aGlzLnNpemUueCxcbiAgICAgIHRoaXMuc2l6ZS55XG4gICAgKTtcblxuICAgIGNvbnRleHQucmVzdG9yZSgpO1xuICB9XG5cbiAgcHVibGljIGRyYXdNYXNrKGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkge1xuICAgIGNvbnRleHQuc2F2ZSgpO1xuXG4gICAgY29udGV4dC5maWxsU3R5bGUgPSAnYmxhY2snO1xuICAgIGNvbnRleHQuZmlsbFJlY3QoXG4gICAgICB0aGlzLnBvc2l0aW9uLngsXG4gICAgICB0aGlzLnBvc2l0aW9uLnksXG4gICAgICB0aGlzLnNpemUueCxcbiAgICAgIHRoaXMuc2l6ZS55XG4gICAgKTtcblxuICAgIGNvbnRleHQucmVzdG9yZSgpO1xuICB9XG59XG4iLCJpbXBvcnQgRGVidWcgZnJvbSAnQGJhc2VtZW50dW5pdmVyc2UvZGVidWcnO1xuaW1wb3J0IElucHV0TWFuYWdlciBmcm9tICdAYmFzZW1lbnR1bml2ZXJzZS9pbnB1dC1tYW5hZ2VyJztcbmltcG9ydCB7IHBhcnNlQ29sb3IgfSBmcm9tICdAYmFzZW1lbnR1bml2ZXJzZS9wYXJzZWNvbG9yJztcbmltcG9ydCB7IGF0LCBjbGFtcCwgZXhjbHVkZSwgcmVtYXAgfSBmcm9tICdAYmFzZW1lbnR1bml2ZXJzZS91dGlscyc7XG5pbXBvcnQgeyB2ZWMgfSBmcm9tICdAYmFzZW1lbnR1bml2ZXJzZS92ZWMnO1xuaW1wb3J0IHsgdjQgYXMgdXVpZCB9IGZyb20gJ3V1aWQnO1xuaW1wb3J0IEdhbWUgZnJvbSAnLi9HYW1lJztcbmltcG9ydCB7IEdyb3VuZFNoYWRvd1JlY2VpdmVyIH0gZnJvbSAnLi9Hcm91bmRTaGFkb3dSZWNlaXZlcic7XG5pbXBvcnQgeyBMaWdodGluZ1N5c3RlbSB9IGZyb20gJy4vTGlnaHRpbmdTeXN0ZW0nO1xuaW1wb3J0IHtcbiAgQ29sb3VyLFxuICBJbnRlcnZhbDJkLFxuICBMaW5lLFxuICBQb2x5Z29uVmVydGljZXMsXG4gIFJlY3RhbmdsZSxcbiAgU2VjdG9yMmQsXG59IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHtcbiAgY29sb3VyVG9TdHJpbmcsXG4gIGxpbmVZSW50ZXJjZXB0LFxuICBvdmVybGFwMWQsXG4gIHBvbHlnb24sXG4gIHJlY3RhbmdsZXNJbnRlcnNlY3QsXG4gIHJlY3RhbmdsZVRvSW50ZXJ2YWwsXG4gIHJlY3RhbmdsZVZlcnRpY2VzLFxuICBzZWN0b3IyZCxcbn0gZnJvbSAnLi91dGlscyc7XG5pbXBvcnQgeyBXYWxsIH0gZnJvbSAnLi9XYWxsJztcblxuZXhwb3J0IGNsYXNzIExpZ2h0IHtcbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgREVGQVVMVF9SQURJVVMgPSAxMDA7XG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IERFRkFVTFRfQ09MT1VSID0gJ3doaXRlJztcbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgREVGQVVMVF9JTlRFTlNJVFkgPSAwLjI7XG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IEhPVkVSX1JBRElVUyA9IDIwO1xuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBERUJVR19DT0xPVVIgPSAnI2Y1MCc7XG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IERFQlVHX0hPVkVSX0NPTE9VUiA9ICcjZjkwJztcbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgTUlOX1JBRElVUyA9IDEwO1xuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBNQVhfUkFESVVTID0gNDAwO1xuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBTSEFET1dfQlVGRkVSID0gMjA7XG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IFdBTExfTElHSFRfQ1VUT0ZGX0RJU1RBTkNFID0gMzA7XG5cbiAgcHVibGljIHJlYWRvbmx5IHR5cGUgPSAnbGlnaHQnO1xuXG4gIHB1YmxpYyBpZDogc3RyaW5nID0gJyc7XG4gIHB1YmxpYyBmb2xkZXI6IGRhdC5HVUkgfCBudWxsID0gbnVsbDtcblxuICBwdWJsaWMgcG9zaXRpb246IHZlYyA9IHZlYygpO1xuICBwcml2YXRlIF9yYWRpdXM6IG51bWJlciA9IExpZ2h0LkRFRkFVTFRfUkFESVVTO1xuICBwcml2YXRlIF9jb2xvdXI6IHN0cmluZyA9IExpZ2h0LkRFRkFVTFRfQ09MT1VSO1xuICBwdWJsaWMgY29sb3VyT2JqZWN0OiBDb2xvdXI7XG4gIHByaXZhdGUgX2ludGVuc2l0eTogbnVtYmVyID0gTGlnaHQuREVGQVVMVF9JTlRFTlNJVFk7XG5cbiAgcHVibGljIGhvdmVyZWQgPSBmYWxzZTtcbiAgcHVibGljIHNlbGVjdGVkID0gZmFsc2U7XG4gIHByaXZhdGUgZHJhZ2dpbmcgPSBmYWxzZTtcbiAgcHJpdmF0ZSBkcmFnT2Zmc2V0OiB2ZWMgfCBudWxsID0gbnVsbDtcblxuICBwdWJsaWMgbGlnaHRDYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xuICBwcml2YXRlIGxpZ2h0Q29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xuXG4gIHB1YmxpYyBncm91bmRMaWdodENhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XG4gIHByaXZhdGUgZ3JvdW5kTGlnaHRDb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XG5cbiAgcHVibGljIHdhbGxMaWdodENhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XG4gIHByaXZhdGUgd2FsbExpZ2h0Q29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xuXG4gIHByaXZhdGUgZGlydHkgPSB0cnVlO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihkYXRhOiBQYXJ0aWFsPExpZ2h0PiA9IHt9KSB7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBleGNsdWRlKGRhdGEsICdyYWRpdXMnLCAnY29sb3VyJywgJ2ludGVuc2l0eScpLCB7XG4gICAgICBpZDogZGF0YS5pZCA/PyB1dWlkKCkuc3BsaXQoJy0nKVswXSxcbiAgICAgIF9yYWRpdXM6IGRhdGEucmFkaXVzID8/IExpZ2h0LkRFRkFVTFRfUkFESVVTLFxuICAgICAgX2NvbG91cjogZGF0YS5jb2xvdXIgPz8gTGlnaHQuREVGQVVMVF9DT0xPVVIsXG4gICAgICBfaW50ZW5zaXR5OiBkYXRhLmludGVuc2l0eSA/PyBMaWdodC5ERUZBVUxUX0lOVEVOU0lUWSxcbiAgICB9KTtcblxuICAgIHRoaXMuZm9sZGVyID0gR2FtZS5ndWkuYWRkRm9sZGVyKGBMaWdodCAke3RoaXMuaWR9YCk7XG4gICAgdGhpcy5mb2xkZXIuYWRkKHRoaXMsICdyYWRpdXMnLCBMaWdodC5NSU5fUkFESVVTLCBMaWdodC5NQVhfUkFESVVTKTtcbiAgICB0aGlzLmZvbGRlci5hZGQodGhpcywgJ2NvbG91cicpO1xuICAgIHRoaXMuZm9sZGVyLmFkZCh0aGlzLCAnaW50ZW5zaXR5JywgMCwgMSk7XG5cbiAgICB0aGlzLmNvbG91ck9iamVjdCA9IHBhcnNlQ29sb3IodGhpcy5fY29sb3VyKTtcblxuICAgIHRoaXMubGlnaHRDYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICB0aGlzLmxpZ2h0Q2FudmFzLndpZHRoID0gdGhpcy5saWdodENhbnZhcy5oZWlnaHQgPSB0aGlzLl9yYWRpdXMgKiAyO1xuICAgIHRoaXMubGlnaHRDb250ZXh0ID0gdGhpcy5saWdodENhbnZhcy5nZXRDb250ZXh0KCcyZCcpITtcblxuICAgIHRoaXMuZ3JvdW5kTGlnaHRDYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICB0aGlzLmdyb3VuZExpZ2h0Q2FudmFzLndpZHRoID0gdGhpcy5ncm91bmRMaWdodENhbnZhcy5oZWlnaHQgPVxuICAgICAgdGhpcy5fcmFkaXVzICogMjtcbiAgICB0aGlzLmdyb3VuZExpZ2h0Q29udGV4dCA9IHRoaXMuZ3JvdW5kTGlnaHRDYW52YXMuZ2V0Q29udGV4dCgnMmQnKSE7XG5cbiAgICB0aGlzLndhbGxMaWdodENhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgIHRoaXMud2FsbExpZ2h0Q2FudmFzLndpZHRoID0gdGhpcy53YWxsTGlnaHRDYW52YXMuaGVpZ2h0ID0gdGhpcy5fcmFkaXVzICogMjtcbiAgICB0aGlzLndhbGxMaWdodENvbnRleHQgPSB0aGlzLndhbGxMaWdodENhbnZhcy5nZXRDb250ZXh0KCcyZCcpITtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgcmFkaXVzKCkge1xuICAgIHJldHVybiB0aGlzLl9yYWRpdXM7XG4gIH1cblxuICBwdWJsaWMgc2V0IHJhZGl1cyh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fcmFkaXVzID0gdmFsdWU7XG4gICAgdGhpcy5kaXJ0eSA9IHRydWU7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGNvbG91cigpIHtcbiAgICByZXR1cm4gdGhpcy5fY29sb3VyO1xuICB9XG5cbiAgcHVibGljIHNldCBjb2xvdXIodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2NvbG91ciA9IHZhbHVlO1xuICAgIHRoaXMuY29sb3VyT2JqZWN0ID0gcGFyc2VDb2xvcih2YWx1ZSk7XG4gICAgdGhpcy5kaXJ0eSA9IHRydWU7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGludGVuc2l0eSgpIHtcbiAgICByZXR1cm4gdGhpcy5faW50ZW5zaXR5O1xuICB9XG5cbiAgcHVibGljIHNldCBpbnRlbnNpdHkodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX2ludGVuc2l0eSA9IHZhbHVlO1xuICAgIHRoaXMuZGlydHkgPSB0cnVlO1xuICB9XG5cbiAgcHVibGljIHNlcmlhbGlzZSgpOiBhbnkge1xuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiB0aGlzLnR5cGUsXG4gICAgICBpZDogdGhpcy5pZCxcbiAgICAgIHBvc2l0aW9uOiB0aGlzLnBvc2l0aW9uLFxuICAgICAgcmFkaXVzOiB0aGlzLl9yYWRpdXMsXG4gICAgICBjb2xvdXI6IHRoaXMuX2NvbG91cixcbiAgICAgIGludGVuc2l0eTogdGhpcy5faW50ZW5zaXR5LFxuICAgIH07XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGRlc2VyaWFsaXNlKGRhdGE6IGFueSk6IExpZ2h0IHtcbiAgICByZXR1cm4gbmV3IExpZ2h0KGRhdGEpO1xuICB9XG5cbiAgcHVibGljIGRlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMuZm9sZGVyKSB7XG4gICAgICBHYW1lLmd1aS5yZW1vdmVGb2xkZXIodGhpcy5mb2xkZXIpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyB1cGRhdGUoZHQ6IG51bWJlcikge1xuICAgIHRoaXMuaG92ZXJlZCA9XG4gICAgICB2ZWMubGVuKHZlYy5zdWIoSW5wdXRNYW5hZ2VyLm1vdXNlUG9zaXRpb24sIHRoaXMucG9zaXRpb24pKSA8XG4gICAgICBMaWdodC5IT1ZFUl9SQURJVVM7XG5cbiAgICBpZiAoSW5wdXRNYW5hZ2VyLm1vdXNlRG93bigpICYmIHRoaXMuc2VsZWN0ZWQgJiYgIXRoaXMuZHJhZ2dpbmcpIHtcbiAgICAgIHRoaXMuZHJhZ2dpbmcgPSB0cnVlO1xuICAgICAgdGhpcy5kcmFnT2Zmc2V0ID0gdmVjLnN1YihJbnB1dE1hbmFnZXIubW91c2VQb3NpdGlvbiwgdGhpcy5wb3NpdGlvbik7XG4gICAgfVxuXG4gICAgaWYgKCFJbnB1dE1hbmFnZXIubW91c2VEb3duKCkpIHtcbiAgICAgIHRoaXMuZHJhZ2dpbmcgPSBmYWxzZTtcbiAgICAgIHRoaXMuZHJhZ09mZnNldCA9IG51bGw7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuc2VsZWN0ZWQgJiYgdGhpcy5kcmFnZ2luZyAmJiB0aGlzLmRyYWdPZmZzZXQpIHtcbiAgICAgIGlmIChJbnB1dE1hbmFnZXIua2V5RG93bignQ29udHJvbExlZnQnKSkge1xuICAgICAgICB0aGlzLnJhZGl1cyA9IGNsYW1wKFxuICAgICAgICAgIHZlYy5sZW4odmVjLnN1YihJbnB1dE1hbmFnZXIubW91c2VQb3NpdGlvbiwgdGhpcy5wb3NpdGlvbikpLFxuICAgICAgICAgIExpZ2h0Lk1JTl9SQURJVVMsXG4gICAgICAgICAgTGlnaHQuTUFYX1JBRElVU1xuICAgICAgICApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHZlYy5zdWIoSW5wdXRNYW5hZ2VyLm1vdXNlUG9zaXRpb24sIHRoaXMuZHJhZ09mZnNldCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgRGVidWcuYm9yZGVyKGAke3RoaXMuaWR9X2JvcmRlcmAsICcnLCB0aGlzLnBvc2l0aW9uLCB7XG4gICAgICBzaG93TGFiZWw6IGZhbHNlLFxuICAgICAgc2hvd1ZhbHVlOiBmYWxzZSxcbiAgICAgIGJvcmRlclNoYXBlOiAnY2lyY2xlJyxcbiAgICAgIHJhZGl1czogdGhpcy5yYWRpdXMsXG4gICAgICBib3JkZXJDb2xvdXI6XG4gICAgICAgIHRoaXMuaG92ZXJlZCB8fCB0aGlzLmRyYWdnaW5nXG4gICAgICAgICAgPyBMaWdodC5ERUJVR19IT1ZFUl9DT0xPVVJcbiAgICAgICAgICA6IExpZ2h0LkRFQlVHX0NPTE9VUixcbiAgICAgIGJvcmRlclN0eWxlOiB0aGlzLnNlbGVjdGVkID8gJ3NvbGlkJyA6ICdkYXNoZWQnLFxuICAgIH0pO1xuICAgIERlYnVnLm1hcmtlcihgJHt0aGlzLmlkfV9tYXJrZXJgLCB0aGlzLmlkLCB0aGlzLnBvc2l0aW9uLCB7XG4gICAgICBzaG93TGFiZWw6IGZhbHNlLFxuICAgICAgbWFya2VyQ29sb3VyOlxuICAgICAgICB0aGlzLmhvdmVyZWQgfHwgdGhpcy5kcmFnZ2luZ1xuICAgICAgICAgID8gTGlnaHQuREVCVUdfSE9WRVJfQ09MT1VSXG4gICAgICAgICAgOiBMaWdodC5ERUJVR19DT0xPVVIsXG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgcHJlcGFyZShncm91bmRzOiBHcm91bmRTaGFkb3dSZWNlaXZlcltdLCB3YWxsczogV2FsbFtdKSB7XG4gICAgaWYgKHRoaXMuZGlydHkpIHtcbiAgICAgIHRoaXMubGlnaHRDYW52YXMud2lkdGggPSB0aGlzLmxpZ2h0Q2FudmFzLmhlaWdodCA9IHRoaXMuX3JhZGl1cyAqIDI7XG5cbiAgICAgIHRoaXMubGlnaHRDb250ZXh0LnNhdmUoKTtcbiAgICAgIHRoaXMubGlnaHRDb250ZXh0LmZpbGxTdHlsZSA9ICdibGFjayc7XG4gICAgICB0aGlzLmxpZ2h0Q29udGV4dC5maWxsUmVjdChcbiAgICAgICAgMCxcbiAgICAgICAgMCxcbiAgICAgICAgdGhpcy5saWdodENhbnZhcy53aWR0aCxcbiAgICAgICAgdGhpcy5saWdodENhbnZhcy5oZWlnaHRcbiAgICAgICk7XG5cbiAgICAgIGNvbnN0IGdyYWRpZW50ID0gdGhpcy5saWdodENvbnRleHQuY3JlYXRlUmFkaWFsR3JhZGllbnQoXG4gICAgICAgIHRoaXMuX3JhZGl1cyxcbiAgICAgICAgdGhpcy5fcmFkaXVzLFxuICAgICAgICB0aGlzLl9yYWRpdXMgKiB0aGlzLl9pbnRlbnNpdHksXG4gICAgICAgIHRoaXMuX3JhZGl1cyxcbiAgICAgICAgdGhpcy5fcmFkaXVzLFxuICAgICAgICB0aGlzLl9yYWRpdXNcbiAgICAgICk7XG4gICAgICBncmFkaWVudC5hZGRDb2xvclN0b3AoMCwgY29sb3VyVG9TdHJpbmcodGhpcy5jb2xvdXJPYmplY3QpKTtcbiAgICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcCgxLCAnYmxhY2snKTtcblxuICAgICAgdGhpcy5saWdodENvbnRleHQuZmlsbFN0eWxlID0gZ3JhZGllbnQ7XG4gICAgICB0aGlzLmxpZ2h0Q29udGV4dC5iZWdpblBhdGgoKTtcbiAgICAgIHRoaXMubGlnaHRDb250ZXh0LmFyYyhcbiAgICAgICAgdGhpcy5fcmFkaXVzLFxuICAgICAgICB0aGlzLl9yYWRpdXMsXG4gICAgICAgIHRoaXMuX3JhZGl1cyxcbiAgICAgICAgMCxcbiAgICAgICAgTWF0aC5QSSAqIDJcbiAgICAgICk7XG4gICAgICB0aGlzLmxpZ2h0Q29udGV4dC5maWxsKCk7XG5cbiAgICAgIHRoaXMubGlnaHRDb250ZXh0LnJlc3RvcmUoKTtcbiAgICB9XG5cbiAgICAvLyBSZW5kZXIgbGlnaHQgb250byBncm91bmQgbGlnaHQgY2FudmFzXG4gICAgdGhpcy5ncm91bmRMaWdodENhbnZhcy53aWR0aCA9IHRoaXMuZ3JvdW5kTGlnaHRDYW52YXMuaGVpZ2h0ID1cbiAgICAgIHRoaXMuX3JhZGl1cyAqIDI7XG4gICAgdGhpcy5ncm91bmRMaWdodENvbnRleHQuc2F2ZSgpO1xuICAgIHRoaXMuZ3JvdW5kTGlnaHRDb250ZXh0LmRyYXdJbWFnZSh0aGlzLmxpZ2h0Q2FudmFzLCAwLCAwKTtcblxuICAgIC8vIFN1YnRyYWN0IHNoYWRvd3MgZnJvbSBncm91bmQgbGlnaHRtYXBcbiAgICB0aGlzLmdyb3VuZExpZ2h0Q29udGV4dC5maWxsU3R5bGUgPSAnYmxhY2snO1xuICAgIHRoaXMuZ3JvdW5kTGlnaHRDb250ZXh0LnRyYW5zbGF0ZShcbiAgICAgIC10aGlzLnBvc2l0aW9uLnggKyB0aGlzLl9yYWRpdXMsXG4gICAgICAtdGhpcy5wb3NpdGlvbi55ICsgdGhpcy5fcmFkaXVzXG4gICAgKTtcblxuICAgIC8vIEJvdW5kaW5nIGJveCBmb3IgdGhpcyBsaWdodFxuICAgIGNvbnN0IGxpZ2h0UmVjdGFuZ2xlID0ge1xuICAgICAgcG9zaXRpb246IHZlYy5zdWIodGhpcy5wb3NpdGlvbiwgdmVjKHRoaXMuX3JhZGl1cykpLFxuICAgICAgc2l6ZTogdmVjKHRoaXMuX3JhZGl1cyAqIDIpLFxuICAgIH07XG5cbiAgICAvLyBTaGFkb3cgbWV0YWRhdGEgZm9yIGVhY2ggc2hhZG93XG4gICAgY29uc3Qgd2FsbFNoYWRvd3M6IHtcbiAgICAgIC8vIFRoZSBpZCBvZiB0aGUgd2FsbCBjYXN0aW5nIHRoaXMgc2hhZG93XG4gICAgICBzaGFkb3dDYXN0ZXJJZDogc3RyaW5nO1xuXG4gICAgICAvLyBBIDJkIGludGVydmFsIHJlcHJlc2VudGluZyB0aGUgc2hhZG93IHJlZ2lvbiBvZiB0aGUgd2FsbCBjYXN0aW5nXG4gICAgICAvLyB0aGlzIHNoYWRvd1xuICAgICAgc2hhZG93UmVnaW9uSW50ZXJ2YWw6IEludGVydmFsMmQ7XG5cbiAgICAgIC8vIFRoZSBsZWZ0bW9zdCBlZGdlIG9mIHRoZSBzaGFkb3cgKHdoZW4gcG9pbnRpbmcgdXB3YXJkcylcbiAgICAgIGxlZnRFZGdlOiBMaW5lIHwgbnVsbDtcblxuICAgICAgLy8gVGhlIHJpZ2h0bW9zdCBlZGdlIG9mIHRoZSBzaGFkb3cgKHdoZW4gcG9pbnRpbmcgdXB3YXJkcylcbiAgICAgIHJpZ2h0RWRnZTogTGluZSB8IG51bGw7XG4gICAgfVtdID0gW107XG4gICAgZm9yIChjb25zdCB3YWxsIG9mIHdhbGxzKSB7XG4gICAgICBjb25zdCB3YWxsU2hhZG93UmVnaW9uID0gd2FsbC5zaGFkb3dSZWdpb247XG5cbiAgICAgIC8vIElmIHRoZSB3YWxsIGhhcyBubyBzaGFkb3cgcmVnaW9uLCB0aGVuIGl0IGRvZXNuJ3QgY2FzdCBhIHNoYWRvd1xuICAgICAgaWYgKCF3YWxsU2hhZG93UmVnaW9uKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICAvLyBDaGVjayBpZiB0aGlzIHdhbGwgaXMgaW4gcmFuZ2Ugb2YgdGhlIGxpZ2h0XG4gICAgICBpZiAocmVjdGFuZ2xlc0ludGVyc2VjdChsaWdodFJlY3RhbmdsZSwgd2FsbFNoYWRvd1JlZ2lvbikpIHtcbiAgICAgICAgY29uc3Qgc2hhZG93ID0ge1xuICAgICAgICAgIHNoYWRvd0Nhc3RlcklkOiB3YWxsLmlkLFxuICAgICAgICAgIC4uLnRoaXMucHJlcGFyZVNoYWRvdyh3YWxsU2hhZG93UmVnaW9uKSxcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBTYXZlIHNoYWRvdyBtZXRhZGF0YSBmb3IgdXNlIGxhdGVyIHdoZW4gcmVuZGVyaW5nIHdhbGwgc2hhZG93c1xuICAgICAgICB3YWxsU2hhZG93cy5wdXNoKGV4Y2x1ZGUoc2hhZG93LCAndmVydGljZXMnKSk7XG5cbiAgICAgICAgLy8gUmVuZGVyIHRoZSBncm91bmQgc2hhZG93IHBvbHlnb24gb250byB0aGUgbGlnaHRtYXBcbiAgICAgICAgcG9seWdvbih0aGlzLmdyb3VuZExpZ2h0Q29udGV4dCwgLi4uc2hhZG93LnZlcnRpY2VzKTtcbiAgICAgICAgdGhpcy5ncm91bmRMaWdodENvbnRleHQuZmlsbCgpO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmdyb3VuZExpZ2h0Q29udGV4dC5yZXN0b3JlKCk7XG5cbiAgICAvLyBSZW5kZXIgbGlnaHQgb250byB3YWxsIGxpZ2h0IGNhbnZhc1xuICAgIHRoaXMud2FsbExpZ2h0Q2FudmFzLndpZHRoID0gdGhpcy53YWxsTGlnaHRDYW52YXMuaGVpZ2h0ID0gdGhpcy5fcmFkaXVzICogMjtcbiAgICB0aGlzLndhbGxMaWdodENvbnRleHQuc2F2ZSgpO1xuICAgIHRoaXMud2FsbExpZ2h0Q29udGV4dC5kcmF3SW1hZ2UodGhpcy5saWdodENhbnZhcywgMCwgMCk7XG5cbiAgICAvLyBTdWJ0cmFjdCBzaGFkb3dzIGZyb20gd2FsbCBsaWdodG1hcFxuICAgIHRoaXMud2FsbExpZ2h0Q29udGV4dC5maWxsU3R5bGUgPSAnYmxhY2snO1xuICAgIHRoaXMud2FsbExpZ2h0Q29udGV4dC50cmFuc2xhdGUoXG4gICAgICAtdGhpcy5wb3NpdGlvbi54ICsgdGhpcy5fcmFkaXVzLFxuICAgICAgLXRoaXMucG9zaXRpb24ueSArIHRoaXMuX3JhZGl1cyAtIExpZ2h0aW5nU3lzdGVtLldBTExfTElHSFRJTkdfWV9PRkZTRVRcbiAgICApO1xuXG4gICAgZm9yIChjb25zdCB3YWxsIG9mIHdhbGxzKSB7XG4gICAgICBjb25zdCB3YWxsUmVnaW9uID0ge1xuICAgICAgICBwb3NpdGlvbjogd2FsbC5wb3NpdGlvbixcbiAgICAgICAgc2l6ZTogd2FsbC5zaXplLFxuICAgICAgfTtcbiAgICAgIGNvbnN0IHdhbGxJbnRlcnZhbCA9IHJlY3RhbmdsZVRvSW50ZXJ2YWwod2FsbFJlZ2lvbik7XG5cbiAgICAgIC8vIENoZWNrIGlmIHRoaXMgd2FsbCBpcyBpbiByYW5nZSBvZiB0aGUgbGlnaHRcbiAgICAgIGlmIChyZWN0YW5nbGVzSW50ZXJzZWN0KGxpZ2h0UmVjdGFuZ2xlLCB3YWxsUmVnaW9uKSkge1xuICAgICAgICAvLyBUaGUgd2FsbCBpcyBvbmx5IGxpdCBieSB0aGlzIGxpZ2h0IGlmIGl0J3MgYWJvdmUgdGhlIGxpZ2h0XG4gICAgICAgIGlmICh0aGlzLnBvc2l0aW9uLnkgPCB3YWxsSW50ZXJ2YWwuYm90dG9tKSB7XG4gICAgICAgICAgdGhpcy53YWxsTGlnaHRDb250ZXh0LnNhdmUoKTtcbiAgICAgICAgICB0aGlzLndhbGxMaWdodENvbnRleHQuZ2xvYmFsQWxwaGEgPSBjbGFtcChcbiAgICAgICAgICAgIHJlbWFwKFxuICAgICAgICAgICAgICB3YWxsSW50ZXJ2YWwuYm90dG9tIC0gdGhpcy5wb3NpdGlvbi55LFxuICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICBMaWdodC5XQUxMX0xJR0hUX0NVVE9GRl9ESVNUQU5DRSxcbiAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKTtcbiAgICAgICAgICB0aGlzLndhbGxMaWdodENvbnRleHQuZmlsbFJlY3QoXG4gICAgICAgICAgICB3YWxsUmVnaW9uLnBvc2l0aW9uLngsXG4gICAgICAgICAgICB3YWxsUmVnaW9uLnBvc2l0aW9uLnksXG4gICAgICAgICAgICB3YWxsUmVnaW9uLnNpemUueCxcbiAgICAgICAgICAgIHdhbGxSZWdpb24uc2l6ZS55XG4gICAgICAgICAgKTtcbiAgICAgICAgICB0aGlzLndhbGxMaWdodENvbnRleHQucmVzdG9yZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ2hlY2sgZWFjaCBzaGFkb3cgdG8gc2VlIGlmIGl0IGZ1bGx5IG9yIHBhcnRpYWxseSBzaGFkb3dzIHRoaXMgd2FsbFxuICAgICAgICBmb3IgKGNvbnN0IHdhbGxTaGFkb3cgb2Ygd2FsbFNoYWRvd3MpIHtcbiAgICAgICAgICAvLyBBIHNoYWRvdyBjYXN0ZXIgZG9lc24ndCBjYXN0IGEgc2hhZG93IG9udG8gaXRzZWxmXG4gICAgICAgICAgaWYgKHdhbGwuaWQgPT09IHdhbGxTaGFkb3cuc2hhZG93Q2FzdGVySWQpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIENoZWNrIGlmIHRoaXMgd2FsbCdzIGxvd2VyIGVkZ2UgaXMgYmVsb3cgdGhlIHNoYWRvdyBjYXN0ZXInc1xuICAgICAgICAgIC8vIGxvd2VyIGVkZ2UgKGlmIGl0IGlzLCB0aGVuIHRoZSBzaGFkb3cgd29uJ3QgY2FzdCBvbnRvIHRoaXMgd2FsbClcbiAgICAgICAgICBpZiAod2FsbEludGVydmFsLmJvdHRvbSA+PSB3YWxsU2hhZG93LnNoYWRvd1JlZ2lvbkludGVydmFsLmJvdHRvbSkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gQ2hlY2sgaWYgdGhpcyBzaGFkb3cgaGFzIG9uZSBvciBtb3JlIGVkZ2VzIChpZiBpdCBoYXMgbm8gZWRnZXMsXG4gICAgICAgICAgLy8gdGhlbiB0aGV5J3JlIHByb2JhYmx5IGJvdGggcG9pbnRpbmcgaW4gdGhlIHdyb25nIGRpcmVjdGlvbiBhbmRcbiAgICAgICAgICAvLyBhcyBzdWNoIHdvbid0IGNhc3Qgb250byB0aGlzIHdhbGwpXG4gICAgICAgICAgaWYgKHdhbGxTaGFkb3cubGVmdEVkZ2UgPT09IG51bGwgJiYgd2FsbFNoYWRvdy5yaWdodEVkZ2UgPT09IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIEZpbmQgd2hlcmUgdGhlIGxlZnQgYW5kIHJpZ2h0IGVkZ2VzIG9mIHRoZSBzaGFkb3cgaW50ZXJjZXB0IHRoZVxuICAgICAgICAgIC8vIGxvd2VyIGVkZ2Ugb2YgdGhlIHJlY2VpdmluZyB3YWxsXG4gICAgICAgICAgbGV0IGxlZnRJbnRlcmNlcHQ6IG51bWJlciB8IG51bGwgPSBudWxsO1xuICAgICAgICAgIGlmICh3YWxsU2hhZG93LmxlZnRFZGdlKSB7XG4gICAgICAgICAgICBsZWZ0SW50ZXJjZXB0ID0gbGluZVlJbnRlcmNlcHQoXG4gICAgICAgICAgICAgIHdhbGxTaGFkb3cubGVmdEVkZ2UsXG4gICAgICAgICAgICAgIHdhbGxJbnRlcnZhbC5ib3R0b21cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbGV0IHJpZ2h0SW50ZXJjZXB0OiBudW1iZXIgfCBudWxsID0gbnVsbDtcbiAgICAgICAgICBpZiAod2FsbFNoYWRvdy5yaWdodEVkZ2UpIHtcbiAgICAgICAgICAgIHJpZ2h0SW50ZXJjZXB0ID0gbGluZVlJbnRlcmNlcHQoXG4gICAgICAgICAgICAgIHdhbGxTaGFkb3cucmlnaHRFZGdlLFxuICAgICAgICAgICAgICB3YWxsSW50ZXJ2YWwuYm90dG9tXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIENoZWNrIGlmIHRoZXJlIGFyZSBubyBpbnRlcmNlcHRzIChpZiB0aGVyZSBhcmUgbm8gaW50ZXJjZXB0cyxcbiAgICAgICAgICAvLyB0aGlzIG1lYW5zIHRoZSBzaGFkb3cgaXMgcG9pbnRpbmcgaW4gdGhlIHdyb25nIGRpcmVjdGlvbiBhbmQgYXNcbiAgICAgICAgICAvLyBzdWNoIHdvbid0IGNhc3Qgb250byB0aGlzIHdhbGwpXG4gICAgICAgICAgaWYgKGxlZnRJbnRlcmNlcHQgPT09IG51bGwgJiYgcmlnaHRJbnRlcmNlcHQgPT09IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIEVkZ2UgY2FzZTogd2hlbiB0aGUgc2hhZG93IGNhc3RlciBpcyBwYXJ0aWFsbHkgYWJvdmUgYW5kIGJlbG93XG4gICAgICAgICAgLy8gdGhlIHNoYWRvdyByZWNlaXZlciBhbmQgdGhlIHNoYWRvdyBpcyBwb2ludGluZyBhd2F5IGZyb20gdGhlXG4gICAgICAgICAgLy8gcmVjZWl2aW5nIHdhbGwsIHNvbWV0aW1lcyBhIHNoYWRvdyBhcHBlYXJzIGR1ZSB0byB0aGUgaW50ZXJjZXB0XG4gICAgICAgICAgLy8gYmVpbmcgYmVoaW5kIHRoZSBzdGFydCBvZiB0aGUgc2hhZG93XG4gICAgICAgICAgaWYgKHdhbGxTaGFkb3cuc2hhZG93UmVnaW9uSW50ZXJ2YWwudG9wIDwgd2FsbEludGVydmFsLmJvdHRvbSkge1xuICAgICAgICAgICAgLy8gU2hhZG93IGNhc3RlciBpcyB0byB0aGUgbGVmdCBvZiBzaGFkb3cgcmVjZWl2ZXJcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgd2FsbFNoYWRvdy5zaGFkb3dSZWdpb25JbnRlcnZhbC5yaWdodCA8IHdhbGxJbnRlcnZhbC5sZWZ0ICYmXG4gICAgICAgICAgICAgIHJpZ2h0SW50ZXJjZXB0ICYmXG4gICAgICAgICAgICAgIHdhbGxTaGFkb3cucmlnaHRFZGdlICYmXG4gICAgICAgICAgICAgIHJpZ2h0SW50ZXJjZXB0ID4gd2FsbFNoYWRvdy5yaWdodEVkZ2Uuc3RhcnQueCAmJlxuICAgICAgICAgICAgICB3YWxsU2hhZG93LnJpZ2h0RWRnZS5zdGFydC54ID4gd2FsbFNoYWRvdy5yaWdodEVkZ2UuZW5kLnhcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gU2hhZG93IGNhc3RlciBpcyB0byB0aGUgcmlnaHQgb2Ygc2hhZG93IHJlY2VpdmVyXG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgIHdhbGxTaGFkb3cuc2hhZG93UmVnaW9uSW50ZXJ2YWwubGVmdCA+IHdhbGxJbnRlcnZhbC5yaWdodCAmJlxuICAgICAgICAgICAgICBsZWZ0SW50ZXJjZXB0ICYmXG4gICAgICAgICAgICAgIHdhbGxTaGFkb3cubGVmdEVkZ2UgJiZcbiAgICAgICAgICAgICAgbGVmdEludGVyY2VwdCA8IHdhbGxTaGFkb3cubGVmdEVkZ2Uuc3RhcnQueCAmJlxuICAgICAgICAgICAgICB3YWxsU2hhZG93LmxlZnRFZGdlLnN0YXJ0LnggPCB3YWxsU2hhZG93LmxlZnRFZGdlLmVuZC54XG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29uc3QgbWluID0gTWF0aC5tYXgoXG4gICAgICAgICAgICB3YWxsSW50ZXJ2YWwubGVmdCxcbiAgICAgICAgICAgIHdhbGxTaGFkb3cubGVmdEVkZ2VcbiAgICAgICAgICAgICAgPyBsaW5lWUludGVyY2VwdCh3YWxsU2hhZG93LmxlZnRFZGdlLCB3YWxsSW50ZXJ2YWwuYm90dG9tKSA/P1xuICAgICAgICAgICAgICAgICAgLUluZmluaXR5XG4gICAgICAgICAgICAgIDogLUluZmluaXR5XG4gICAgICAgICAgKTtcbiAgICAgICAgICBjb25zdCBtYXggPSBNYXRoLm1pbihcbiAgICAgICAgICAgIHdhbGxJbnRlcnZhbC5yaWdodCxcbiAgICAgICAgICAgIHdhbGxTaGFkb3cucmlnaHRFZGdlXG4gICAgICAgICAgICAgID8gbGluZVlJbnRlcmNlcHQod2FsbFNoYWRvdy5yaWdodEVkZ2UsIHdhbGxJbnRlcnZhbC5ib3R0b20pID8/XG4gICAgICAgICAgICAgICAgICBJbmZpbml0eVxuICAgICAgICAgICAgICA6IEluZmluaXR5XG4gICAgICAgICAgKTtcblxuICAgICAgICAgIC8vIERvbid0IHJlbmRlciB0aGUgc2hhZG93IGlmIGl0J3MgZ290IG5lZ2F0aXZlIHdpZHRoXG4gICAgICAgICAgaWYgKG1pbiA+PSBtYXgpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIERvbid0IHJlbmRlciB0aGUgc2hhZG93IGlmIGl0J3Mgb3V0c2lkZSB0aGUgd2FsbCBib3VuZGFyaWVzXG4gICAgICAgICAgaWYgKG1pbiA+IHdhbGxJbnRlcnZhbC5yaWdodCB8fCBtYXggPCB3YWxsSW50ZXJ2YWwubGVmdCkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgb3ZlcmxhcDFkKFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhcnQ6IG1pbixcbiAgICAgICAgICAgICAgICBlbmQ6IG1heCxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXJ0OiB3YWxsSW50ZXJ2YWwubGVmdCxcbiAgICAgICAgICAgICAgICBlbmQ6IHdhbGxJbnRlcnZhbC5yaWdodCxcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgdGhpcy53YWxsTGlnaHRDb250ZXh0LmZpbGxSZWN0KFxuICAgICAgICAgICAgICBtaW4sXG4gICAgICAgICAgICAgIHdhbGxJbnRlcnZhbC50b3AsXG4gICAgICAgICAgICAgIG1heCAtIG1pbixcbiAgICAgICAgICAgICAgd2FsbC5zaXplLnlcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMud2FsbExpZ2h0Q29udGV4dC5yZXN0b3JlKCk7XG4gIH1cblxuICBwcml2YXRlIGxpbmVJc0ZhY2luZyhsaW5lOiBMaW5lKTogYm9vbGVhbiB7XG4gICAgY29uc3QgZWRnZSA9IHZlYy5ub3IodmVjLnN1YihsaW5lLmVuZCwgbGluZS5zdGFydCkpO1xuICAgIGNvbnN0IGVkZ2VOb3JtYWwgPSB2ZWMoZWRnZS55LCAtZWRnZS54KTtcbiAgICBjb25zdCBsaWdodE5vcm1hbCA9IHZlYy5ub3IoXG4gICAgICB2ZWMuc3ViKHZlYy5tdWwodmVjLmFkZChsaW5lLnN0YXJ0LCBsaW5lLmVuZCksIDAuNSksIHRoaXMucG9zaXRpb24pXG4gICAgKTtcblxuICAgIHJldHVybiB2ZWMuZG90KGxpZ2h0Tm9ybWFsLCBlZGdlTm9ybWFsKSA8PSAwO1xuICB9XG5cbiAgcHJpdmF0ZSBwcmVwYXJlU2hhZG93KHNoYWRvd1JlZ2lvbjogUmVjdGFuZ2xlKToge1xuICAgIHNoYWRvd1JlZ2lvbkludGVydmFsOiBJbnRlcnZhbDJkO1xuICAgIGxlZnRFZGdlOiBMaW5lIHwgbnVsbDtcbiAgICByaWdodEVkZ2U6IExpbmUgfCBudWxsO1xuICAgIHZlcnRpY2VzOiBQb2x5Z29uVmVydGljZXM7XG4gIH0ge1xuICAgIGNvbnN0IGxpZ2h0UG9zaXRpb24gPSB2ZWMuY3B5KHRoaXMucG9zaXRpb24pO1xuICAgIGNvbnN0IGxpZ2h0UmFkaXVzID0gdGhpcy5fcmFkaXVzO1xuICAgIGNvbnN0IHNoYWRvd1JlZ2lvbkludGVydmFsID0gcmVjdGFuZ2xlVG9JbnRlcnZhbChzaGFkb3dSZWdpb24pO1xuICAgIGNvbnN0IHNoYWRvd1JlZ2lvblZlcnRpY2VzID0gcmVjdGFuZ2xlVmVydGljZXMoc2hhZG93UmVnaW9uKTtcbiAgICBjb25zdCBzaGFkb3dFZGdlczogTGluZVtdID0gW107XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoYWRvd1JlZ2lvblZlcnRpY2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBwcmV2aW91cyA9IGF0KHNoYWRvd1JlZ2lvblZlcnRpY2VzLCBpIC0gMSk7XG4gICAgICBjb25zdCBjdXJyZW50ID0gc2hhZG93UmVnaW9uVmVydGljZXNbaV07XG5cbiAgICAgIGlmICghdGhpcy5saW5lSXNGYWNpbmcoeyBzdGFydDogcHJldmlvdXMsIGVuZDogY3VycmVudCB9KSkge1xuICAgICAgICBjb25zdCB2ZXJ0ZXgxID0gdmVjLnN1YihwcmV2aW91cywgbGlnaHRQb3NpdGlvbik7XG4gICAgICAgIGNvbnN0IHZlcnRleDIgPSB2ZWMuc3ViKGN1cnJlbnQsIGxpZ2h0UG9zaXRpb24pO1xuICAgICAgICBzaGFkb3dFZGdlcy5wdXNoKFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHN0YXJ0OiBwcmV2aW91cyxcbiAgICAgICAgICAgIGVuZDogdmVjLmFkZChcbiAgICAgICAgICAgICAgcHJldmlvdXMsXG4gICAgICAgICAgICAgIHZlYy5tdWwoXG4gICAgICAgICAgICAgICAgdmVjLm5vcih2ZXJ0ZXgxKSxcbiAgICAgICAgICAgICAgICBNYXRoLm1heChcbiAgICAgICAgICAgICAgICAgIExpZ2h0LlNIQURPV19CVUZGRVIsXG4gICAgICAgICAgICAgICAgICBsaWdodFJhZGl1cyArIExpZ2h0LlNIQURPV19CVUZGRVIgLSB2ZWMubGVuKHZlcnRleDEpXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3RhcnQ6IGN1cnJlbnQsXG4gICAgICAgICAgICBlbmQ6IHZlYy5hZGQoXG4gICAgICAgICAgICAgIGN1cnJlbnQsXG4gICAgICAgICAgICAgIHZlYy5tdWwoXG4gICAgICAgICAgICAgICAgdmVjLm5vcih2ZXJ0ZXgyKSxcbiAgICAgICAgICAgICAgICBNYXRoLm1heChcbiAgICAgICAgICAgICAgICAgIExpZ2h0LlNIQURPV19CVUZGRVIsXG4gICAgICAgICAgICAgICAgICBsaWdodFJhZGl1cyArIExpZ2h0LlNIQURPV19CVUZGRVIgLSB2ZWMubGVuKHZlcnRleDIpXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApLFxuICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgbGVmdEVkZ2U6IExpbmUgfCBudWxsID0gbnVsbDtcbiAgICBsZXQgcmlnaHRFZGdlOiBMaW5lIHwgbnVsbCA9IG51bGw7XG4gICAgY29uc3Qgc2hhZG93UG9seWdvbjogUG9seWdvblZlcnRpY2VzID0gW107XG4gICAgc3dpdGNoIChzZWN0b3IyZCh0aGlzLnBvc2l0aW9uLCBzaGFkb3dSZWdpb25JbnRlcnZhbCkpIHtcbiAgICAgIGNhc2UgU2VjdG9yMmQuVG9wTGVmdDpcbiAgICAgICAgaWYgKHNoYWRvd0VkZ2VzLmxlbmd0aCAhPT0gNCkge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgbGVmdEVkZ2UgPSBudWxsO1xuICAgICAgICByaWdodEVkZ2UgPSBudWxsO1xuICAgICAgICBzaGFkb3dQb2x5Z29uLnB1c2goXG4gICAgICAgICAgc2hhZG93RWRnZXNbMF0uc3RhcnQsXG4gICAgICAgICAgc2hhZG93RWRnZXNbMF0uZW5kLFxuICAgICAgICAgIHZlYyhzaGFkb3dFZGdlc1swXS5lbmQueCwgc2hhZG93RWRnZXNbM10uZW5kLnkpLFxuICAgICAgICAgIHNoYWRvd0VkZ2VzWzNdLmVuZCxcbiAgICAgICAgICBzaGFkb3dFZGdlc1szXS5zdGFydCxcbiAgICAgICAgICBzaGFkb3dFZGdlc1syXS5zdGFydFxuICAgICAgICApO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBTZWN0b3IyZC5Ub3A6XG4gICAgICAgIGlmIChzaGFkb3dFZGdlcy5sZW5ndGggIT09IDYpIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGxlZnRFZGdlID0gbnVsbDtcbiAgICAgICAgcmlnaHRFZGdlID0gbnVsbDtcbiAgICAgICAgc2hhZG93UG9seWdvbi5wdXNoKFxuICAgICAgICAgIHNoYWRvd0VkZ2VzWzJdLnN0YXJ0LFxuICAgICAgICAgIHNoYWRvd0VkZ2VzWzJdLmVuZCxcbiAgICAgICAgICAoY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSA9PiB7XG4gICAgICAgICAgICBjb250ZXh0LmFyYyhcbiAgICAgICAgICAgICAgbGlnaHRQb3NpdGlvbi54LFxuICAgICAgICAgICAgICBsaWdodFBvc2l0aW9uLnksXG4gICAgICAgICAgICAgIGxpZ2h0UmFkaXVzICsgTGlnaHQuU0hBRE9XX0JVRkZFUixcbiAgICAgICAgICAgICAgdmVjLnJhZCh2ZWMuc3ViKHNoYWRvd0VkZ2VzWzJdLmVuZCwgc2hhZG93RWRnZXNbMl0uc3RhcnQpKSxcbiAgICAgICAgICAgICAgdmVjLnJhZCh2ZWMuc3ViKHNoYWRvd0VkZ2VzWzFdLmVuZCwgc2hhZG93RWRnZXNbMV0uc3RhcnQpKSxcbiAgICAgICAgICAgICAgZmFsc2VcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBzaGFkb3dFZGdlc1sxXS5zdGFydCxcbiAgICAgICAgICBzaGFkb3dFZGdlc1s1XS5zdGFydCxcbiAgICAgICAgICBzaGFkb3dFZGdlc1s0XS5zdGFydFxuICAgICAgICApO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBTZWN0b3IyZC5Ub3BSaWdodDpcbiAgICAgICAgaWYgKHNoYWRvd0VkZ2VzLmxlbmd0aCAhPT0gNCkge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgbGVmdEVkZ2UgPSBudWxsO1xuICAgICAgICByaWdodEVkZ2UgPSBudWxsO1xuICAgICAgICBzaGFkb3dQb2x5Z29uLnB1c2goXG4gICAgICAgICAgc2hhZG93RWRnZXNbMl0uc3RhcnQsXG4gICAgICAgICAgc2hhZG93RWRnZXNbMl0uZW5kLFxuICAgICAgICAgIHZlYyhzaGFkb3dFZGdlc1sxXS5lbmQueCwgc2hhZG93RWRnZXNbMl0uZW5kLnkpLFxuICAgICAgICAgIHNoYWRvd0VkZ2VzWzFdLmVuZCxcbiAgICAgICAgICBzaGFkb3dFZGdlc1sxXS5zdGFydCxcbiAgICAgICAgICBzaGFkb3dFZGdlc1szXS5zdGFydFxuICAgICAgICApO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBTZWN0b3IyZC5MZWZ0OlxuICAgICAgICBpZiAoc2hhZG93RWRnZXMubGVuZ3RoICE9PSA2KSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBsZWZ0RWRnZSA9IHNoYWRvd0VkZ2VzWzBdO1xuICAgICAgICByaWdodEVkZ2UgPSBudWxsO1xuICAgICAgICBzaGFkb3dQb2x5Z29uLnB1c2goXG4gICAgICAgICAgc2hhZG93RWRnZXNbMF0uc3RhcnQsXG4gICAgICAgICAgc2hhZG93RWRnZXNbMF0uZW5kLFxuICAgICAgICAgIChjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpID0+IHtcbiAgICAgICAgICAgIGNvbnRleHQuYXJjKFxuICAgICAgICAgICAgICBsaWdodFBvc2l0aW9uLngsXG4gICAgICAgICAgICAgIGxpZ2h0UG9zaXRpb24ueSxcbiAgICAgICAgICAgICAgbGlnaHRSYWRpdXMgKyBMaWdodC5TSEFET1dfQlVGRkVSLFxuICAgICAgICAgICAgICB2ZWMucmFkKHZlYy5zdWIoc2hhZG93RWRnZXNbMF0uZW5kLCBzaGFkb3dFZGdlc1swXS5zdGFydCkpLFxuICAgICAgICAgICAgICB2ZWMucmFkKHZlYy5zdWIoc2hhZG93RWRnZXNbNV0uZW5kLCBzaGFkb3dFZGdlc1s1XS5zdGFydCkpLFxuICAgICAgICAgICAgICBmYWxzZVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIHNoYWRvd0VkZ2VzWzVdLnN0YXJ0LFxuICAgICAgICAgIHNoYWRvd0VkZ2VzWzRdLnN0YXJ0LFxuICAgICAgICAgIHNoYWRvd0VkZ2VzWzJdLnN0YXJ0XG4gICAgICAgICk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIFNlY3RvcjJkLkluc2lkZTpcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgU2VjdG9yMmQuUmlnaHQ6XG4gICAgICAgIGlmIChzaGFkb3dFZGdlcy5sZW5ndGggIT09IDYpIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGxlZnRFZGdlID0gbnVsbDtcbiAgICAgICAgcmlnaHRFZGdlID0gc2hhZG93RWRnZXNbM107XG4gICAgICAgIHNoYWRvd1BvbHlnb24ucHVzaChcbiAgICAgICAgICBzaGFkb3dFZGdlc1s0XS5zdGFydCxcbiAgICAgICAgICBzaGFkb3dFZGdlc1s0XS5lbmQsXG4gICAgICAgICAgKGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkgPT4ge1xuICAgICAgICAgICAgY29udGV4dC5hcmMoXG4gICAgICAgICAgICAgIGxpZ2h0UG9zaXRpb24ueCxcbiAgICAgICAgICAgICAgbGlnaHRQb3NpdGlvbi55LFxuICAgICAgICAgICAgICBsaWdodFJhZGl1cyArIExpZ2h0LlNIQURPV19CVUZGRVIsXG4gICAgICAgICAgICAgIHZlYy5yYWQodmVjLnN1YihzaGFkb3dFZGdlc1s0XS5lbmQsIHNoYWRvd0VkZ2VzWzRdLnN0YXJ0KSksXG4gICAgICAgICAgICAgIHZlYy5yYWQodmVjLnN1YihzaGFkb3dFZGdlc1szXS5lbmQsIHNoYWRvd0VkZ2VzWzNdLnN0YXJ0KSksXG4gICAgICAgICAgICAgIGZhbHNlXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgc2hhZG93RWRnZXNbM10uc3RhcnQsXG4gICAgICAgICAgc2hhZG93RWRnZXNbMl0uc3RhcnQsXG4gICAgICAgICAgc2hhZG93RWRnZXNbNV0uc3RhcnRcbiAgICAgICAgKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgU2VjdG9yMmQuQm90dG9tTGVmdDpcbiAgICAgICAgaWYgKHNoYWRvd0VkZ2VzLmxlbmd0aCAhPT0gNCkge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgbGVmdEVkZ2UgPSBzaGFkb3dFZGdlc1swXTtcbiAgICAgICAgcmlnaHRFZGdlID0gc2hhZG93RWRnZXNbM107XG4gICAgICAgIHNoYWRvd1BvbHlnb24ucHVzaChcbiAgICAgICAgICBzaGFkb3dFZGdlc1swXS5zdGFydCxcbiAgICAgICAgICBzaGFkb3dFZGdlc1swXS5lbmQsXG4gICAgICAgICAgdmVjKHNoYWRvd0VkZ2VzWzNdLmVuZC54LCBzaGFkb3dFZGdlc1swXS5lbmQueSksXG4gICAgICAgICAgc2hhZG93RWRnZXNbM10uZW5kLFxuICAgICAgICAgIHNoYWRvd0VkZ2VzWzNdLnN0YXJ0LFxuICAgICAgICAgIHNoYWRvd0VkZ2VzWzJdLnN0YXJ0XG4gICAgICAgICk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIFNlY3RvcjJkLkJvdHRvbTpcbiAgICAgICAgaWYgKHNoYWRvd0VkZ2VzLmxlbmd0aCAhPT0gNikge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgbGVmdEVkZ2UgPSBzaGFkb3dFZGdlc1swXTtcbiAgICAgICAgcmlnaHRFZGdlID0gc2hhZG93RWRnZXNbNV07XG4gICAgICAgIHNoYWRvd1BvbHlnb24ucHVzaChcbiAgICAgICAgICBzaGFkb3dFZGdlc1swXS5zdGFydCxcbiAgICAgICAgICBzaGFkb3dFZGdlc1swXS5lbmQsXG4gICAgICAgICAgKGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkgPT4ge1xuICAgICAgICAgICAgY29udGV4dC5hcmMoXG4gICAgICAgICAgICAgIGxpZ2h0UG9zaXRpb24ueCxcbiAgICAgICAgICAgICAgbGlnaHRQb3NpdGlvbi55LFxuICAgICAgICAgICAgICBsaWdodFJhZGl1cyArIExpZ2h0LlNIQURPV19CVUZGRVIsXG4gICAgICAgICAgICAgIHZlYy5yYWQodmVjLnN1YihzaGFkb3dFZGdlc1swXS5lbmQsIHNoYWRvd0VkZ2VzWzBdLnN0YXJ0KSksXG4gICAgICAgICAgICAgIHZlYy5yYWQodmVjLnN1YihzaGFkb3dFZGdlc1s1XS5lbmQsIHNoYWRvd0VkZ2VzWzVdLnN0YXJ0KSksXG4gICAgICAgICAgICAgIGZhbHNlXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgc2hhZG93RWRnZXNbNV0uc3RhcnQsXG4gICAgICAgICAgc2hhZG93RWRnZXNbNF0uc3RhcnQsXG4gICAgICAgICAgc2hhZG93RWRnZXNbMl0uc3RhcnRcbiAgICAgICAgKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgU2VjdG9yMmQuQm90dG9tUmlnaHQ6XG4gICAgICAgIGlmIChzaGFkb3dFZGdlcy5sZW5ndGggIT09IDQpIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGxlZnRFZGdlID0gc2hhZG93RWRnZXNbMF07XG4gICAgICAgIHJpZ2h0RWRnZSA9IHNoYWRvd0VkZ2VzWzNdO1xuICAgICAgICBzaGFkb3dQb2x5Z29uLnB1c2goXG4gICAgICAgICAgc2hhZG93RWRnZXNbMF0uc3RhcnQsXG4gICAgICAgICAgc2hhZG93RWRnZXNbMF0uZW5kLFxuICAgICAgICAgIHZlYyhzaGFkb3dFZGdlc1swXS5lbmQueCwgc2hhZG93RWRnZXNbM10uZW5kLnkpLFxuICAgICAgICAgIHNoYWRvd0VkZ2VzWzNdLmVuZCxcbiAgICAgICAgICBzaGFkb3dFZGdlc1szXS5zdGFydCxcbiAgICAgICAgICBzaGFkb3dFZGdlc1syXS5zdGFydFxuICAgICAgICApO1xuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgc2hhZG93UmVnaW9uSW50ZXJ2YWwsXG4gICAgICBsZWZ0RWRnZSxcbiAgICAgIHJpZ2h0RWRnZSxcbiAgICAgIHZlcnRpY2VzOiBzaGFkb3dQb2x5Z29uLFxuICAgIH07XG4gIH1cbn1cbiIsImltcG9ydCBEZWJ1ZyBmcm9tICdAYmFzZW1lbnR1bml2ZXJzZS9kZWJ1Zyc7XG5pbXBvcnQgSW5wdXRNYW5hZ2VyIGZyb20gJ0BiYXNlbWVudHVuaXZlcnNlL2lucHV0LW1hbmFnZXInO1xuaW1wb3J0IHsgdmVjIH0gZnJvbSAnQGJhc2VtZW50dW5pdmVyc2UvdmVjJztcbmltcG9ydCBHYW1lIGZyb20gJy4vR2FtZSc7XG5pbXBvcnQgeyBHcm91bmRTaGFkb3dSZWNlaXZlciB9IGZyb20gJy4vR3JvdW5kU2hhZG93UmVjZWl2ZXInO1xuaW1wb3J0IHsgTGlnaHQgfSBmcm9tICcuL0xpZ2h0JztcbmltcG9ydCB7IExpZ2h0aW5nU3lzdGVtIH0gZnJvbSAnLi9MaWdodGluZ1N5c3RlbSc7XG5pbXBvcnQgeyBXYWxsIH0gZnJvbSAnLi9XYWxsJztcblxuZXhwb3J0IGNsYXNzIExpZ2h0aW5nU2NlbmUge1xuICBwdWJsaWMgbGlnaHRpbmdTeXN0ZW06IExpZ2h0aW5nU3lzdGVtO1xuXG4gIHByaXZhdGUgd2FsbHM6IFdhbGxbXSA9IFtdO1xuICBwcml2YXRlIGdyb3VuZHM6IEdyb3VuZFNoYWRvd1JlY2VpdmVyW10gPSBbXTtcblxuICBwcml2YXRlIHNlbGVjdGVkOiBXYWxsIHwgR3JvdW5kU2hhZG93UmVjZWl2ZXIgfCBMaWdodCB8IG51bGwgPSBudWxsO1xuXG4gIHByaXZhdGUgbW9kZTpcbiAgICB8ICdub2xpZ2h0aW5nJ1xuICAgIHwgJ25vcm1hbCdcbiAgICB8ICdncm91bmRtYXNrJ1xuICAgIHwgJ3dhbGxtYXNrJ1xuICAgIHwgJ2dyb3VuZG1hc2tlZGxpZ2h0bWFwJ1xuICAgIHwgJ3dhbGxtYXNrZWRsaWdodG1hcCdcbiAgICB8ICdsaWdodG1hcCcgPSAnbm9ybWFsJztcblxuICBwdWJsaWMgaW5pdGlhbGlzZSgpIHtcbiAgICB0aGlzLmxpZ2h0aW5nU3lzdGVtID0gbmV3IExpZ2h0aW5nU3lzdGVtKCk7XG4gICAgdGhpcy5saWdodGluZ1N5c3RlbS5pbml0aWFsaXNlKCk7XG5cbiAgICBHYW1lLmd1aS5hZGQoeyBjbGljazogKCkgPT4gdGhpcy5zYXZlKCkgfSwgJ2NsaWNrJykubmFtZSgnU2F2ZScpO1xuICAgIEdhbWUuZ3VpLmFkZCh7IGNsaWNrOiAoKSA9PiB0aGlzLmxvYWQoKSB9LCAnY2xpY2snKS5uYW1lKCdMb2FkJyk7XG4gICAgR2FtZS5ndWlcbiAgICAgIC5hZGQoeyBjbGljazogKCkgPT4gKHRoaXMubW9kZSA9ICdub2xpZ2h0aW5nJykgfSwgJ2NsaWNrJylcbiAgICAgIC5uYW1lKCdObyBsaWdodGluZycpO1xuICAgIEdhbWUuZ3VpXG4gICAgICAuYWRkKHsgY2xpY2s6ICgpID0+ICh0aGlzLm1vZGUgPSAnbm9ybWFsJykgfSwgJ2NsaWNrJylcbiAgICAgIC5uYW1lKCdOb3JtYWwnKTtcbiAgICBHYW1lLmd1aVxuICAgICAgLmFkZCh7IGNsaWNrOiAoKSA9PiAodGhpcy5tb2RlID0gJ2dyb3VuZG1hc2snKSB9LCAnY2xpY2snKVxuICAgICAgLm5hbWUoJ0dyb3VuZCBtYXNrJyk7XG4gICAgR2FtZS5ndWlcbiAgICAgIC5hZGQoeyBjbGljazogKCkgPT4gKHRoaXMubW9kZSA9ICd3YWxsbWFzaycpIH0sICdjbGljaycpXG4gICAgICAubmFtZSgnV2FsbCBtYXNrJyk7XG4gICAgR2FtZS5ndWlcbiAgICAgIC5hZGQoeyBjbGljazogKCkgPT4gKHRoaXMubW9kZSA9ICdncm91bmRtYXNrZWRsaWdodG1hcCcpIH0sICdjbGljaycpXG4gICAgICAubmFtZSgnR3JvdW5kLW1hc2tlZCBsaWdodG1hcCcpO1xuICAgIEdhbWUuZ3VpXG4gICAgICAuYWRkKHsgY2xpY2s6ICgpID0+ICh0aGlzLm1vZGUgPSAnd2FsbG1hc2tlZGxpZ2h0bWFwJykgfSwgJ2NsaWNrJylcbiAgICAgIC5uYW1lKCdXYWxsLW1hc2tlZCBsaWdodG1hcCcpO1xuICAgIEdhbWUuZ3VpXG4gICAgICAuYWRkKHsgY2xpY2s6ICgpID0+ICh0aGlzLm1vZGUgPSAnbGlnaHRtYXAnKSB9LCAnY2xpY2snKVxuICAgICAgLm5hbWUoJ0xpZ2h0IG1hcCcpO1xuICAgIEdhbWUuZ3VpLmFkZCh0aGlzLmxpZ2h0aW5nU3lzdGVtLCAnYW1iaWVudExpZ2h0Q29sb3VyJyk7XG4gIH1cblxuICBwcml2YXRlIHNhdmUoKSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXG4gICAgICAnbGlnaHRpbmdfZGVtb190ZXN0X3N0YXRlJyxcbiAgICAgIEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgd2FsbHM6IHRoaXMud2FsbHMubWFwKHdhbGwgPT4gd2FsbC5zZXJpYWxpc2UoKSksXG4gICAgICAgIGdyb3VuZHM6IHRoaXMuZ3JvdW5kcy5tYXAoZ3JvdW5kID0+IGdyb3VuZC5zZXJpYWxpc2UoKSksXG4gICAgICAgIGxpZ2h0czogdGhpcy5saWdodGluZ1N5c3RlbS5saWdodHMubWFwKGxpZ2h0ID0+IGxpZ2h0LnNlcmlhbGlzZSgpKSxcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgbG9hZCgpIHtcbiAgICBjb25zdCBzdGF0ZURhdGEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbGlnaHRpbmdfZGVtb190ZXN0X3N0YXRlJyk7XG4gICAgaWYgKCFzdGF0ZURhdGEpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgc3RhdGU7XG4gICAgdHJ5IHtcbiAgICAgIHN0YXRlID0gSlNPTi5wYXJzZShzdGF0ZURhdGEpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1N0YXRlIGRhdGEgaXMgaW52YWxpZCcpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMud2FsbHMuZm9yRWFjaCh3YWxsID0+IHdhbGwuZGVzdHJveSgpKTtcbiAgICB0aGlzLndhbGxzID0gc3RhdGUud2FsbHMubWFwKCh3YWxsOiBhbnkpID0+IFdhbGwuZGVzZXJpYWxpc2Uod2FsbCkpO1xuXG4gICAgdGhpcy5ncm91bmRzLmZvckVhY2goZ3JvdW5kID0+IGdyb3VuZC5kZXN0cm95KCkpO1xuICAgIHRoaXMuZ3JvdW5kcyA9IHN0YXRlLmdyb3VuZHMubWFwKChncm91bmQ6IGFueSkgPT5cbiAgICAgIEdyb3VuZFNoYWRvd1JlY2VpdmVyLmRlc2VyaWFsaXNlKGdyb3VuZClcbiAgICApO1xuXG4gICAgdGhpcy5saWdodGluZ1N5c3RlbS5saWdodHMuZm9yRWFjaChsaWdodCA9PiBsaWdodC5kZXN0cm95KCkpO1xuICAgIHRoaXMubGlnaHRpbmdTeXN0ZW0ubGlnaHRzID0gc3RhdGUubGlnaHRzLm1hcCgobGlnaHQ6IGFueSkgPT5cbiAgICAgIExpZ2h0LmRlc2VyaWFsaXNlKGxpZ2h0KVxuICAgICk7XG4gIH1cblxuICBwdWJsaWMgdXBkYXRlKGR0OiBudW1iZXIpIHtcbiAgICBEZWJ1Zy52YWx1ZSgnUHJlc3MgU0hJRlQtTCB0byBjcmVhdGUgYSBuZXcgbGlnaHQnLCAnJyk7XG4gICAgRGVidWcudmFsdWUoJ1ByZXNzIFNISUZULVcgdG8gY3JlYXRlIGEgbmV3IHdhbGwnLCAnJyk7XG4gICAgRGVidWcudmFsdWUoJ1ByZXNzIFNISUZULUcgdG8gY3JlYXRlIGEgbmV3IGdyb3VuZCcsICcnKTtcbiAgICBEZWJ1Zy52YWx1ZSgnQ1RSTC1kcmFnIHRvIHJlc2l6ZScsICcnKTtcblxuICAgIHRoaXMud2FsbHMuZm9yRWFjaCh3YWxsID0+IHdhbGwudXBkYXRlKGR0KSk7XG4gICAgdGhpcy5ncm91bmRzLmZvckVhY2goZ3JvdW5kID0+IGdyb3VuZC51cGRhdGUoZHQpKTtcblxuICAgIHRoaXMubGlnaHRpbmdTeXN0ZW0udXBkYXRlKGR0KTtcblxuICAgIC8vIHktc29ydGluZ1xuICAgIHRoaXMud2FsbHMgPSB0aGlzLndhbGxzLnNvcnQoXG4gICAgICAoYSwgYikgPT4gYS5wb3NpdGlvbi55ICsgYS5zaXplLnkgLSAoYi5wb3NpdGlvbi55ICsgYi5zaXplLnkpXG4gICAgKTtcbiAgICB0aGlzLmdyb3VuZHMgPSB0aGlzLmdyb3VuZHMuc29ydChcbiAgICAgIChhLCBiKSA9PiBhLnBvc2l0aW9uLnkgKyBhLnNpemUueSAtIChiLnBvc2l0aW9uLnkgKyBiLnNpemUueSlcbiAgICApO1xuXG4gICAgLy8gSGFuZGxlIGl0ZW0gc2VsZWN0XG4gICAgaWYgKElucHV0TWFuYWdlci5tb3VzZVByZXNzZWQoKSkge1xuICAgICAgbGV0IHNlbGVjdGVkV2FsbCA9IHRoaXMud2FsbHMuZmluZCh3YWxsID0+IHdhbGwuaG92ZXJlZCkgfHwgbnVsbDtcbiAgICAgIGxldCBzZWxlY3RlZEdyb3VuZCA9IHRoaXMuZ3JvdW5kcy5maW5kKGdyb3VuZCA9PiBncm91bmQuaG92ZXJlZCkgfHwgbnVsbDtcbiAgICAgIGxldCBzZWxlY3RlZExpZ2h0ID1cbiAgICAgICAgdGhpcy5saWdodGluZ1N5c3RlbS5saWdodHMuZmluZChsaWdodCA9PiBsaWdodC5ob3ZlcmVkKSB8fCBudWxsO1xuXG4gICAgICB0aGlzLnNlbGVjdGVkID0gc2VsZWN0ZWRMaWdodCB8fCBzZWxlY3RlZFdhbGwgfHwgc2VsZWN0ZWRHcm91bmQgfHwgbnVsbDtcblxuICAgICAgdGhpcy53YWxscy5mb3JFYWNoKHdhbGwgPT4ge1xuICAgICAgICB3YWxsLnNlbGVjdGVkID0gZmFsc2U7XG4gICAgICB9KTtcbiAgICAgIHRoaXMuZ3JvdW5kcy5mb3JFYWNoKGdyb3VuZCA9PiB7XG4gICAgICAgIGdyb3VuZC5zZWxlY3RlZCA9IGZhbHNlO1xuICAgICAgfSk7XG4gICAgICB0aGlzLmxpZ2h0aW5nU3lzdGVtLmxpZ2h0cy5mb3JFYWNoKGxpZ2h0ID0+IHtcbiAgICAgICAgbGlnaHQuc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgIH0pO1xuXG4gICAgICBpZiAodGhpcy5zZWxlY3RlZCkge1xuICAgICAgICB0aGlzLnNlbGVjdGVkLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBIYW5kbGUgaXRlbSBjcmVhdGVcbiAgICBpZiAoSW5wdXRNYW5hZ2VyLmtleURvd24oJ1NoaWZ0TGVmdCcpKSB7XG4gICAgICAvLyBDcmVhdGUgbGlnaHRcbiAgICAgIGlmIChJbnB1dE1hbmFnZXIua2V5UHJlc3NlZCgnS2V5TCcpKSB7XG4gICAgICAgIHRoaXMubGlnaHRpbmdTeXN0ZW0ubGlnaHRzLnB1c2goXG4gICAgICAgICAgbmV3IExpZ2h0KHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiB2ZWMuY3B5KElucHV0TWFuYWdlci5tb3VzZVBvc2l0aW9uKSxcbiAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICAvLyBDcmVhdGUgd2FsbFxuICAgICAgaWYgKElucHV0TWFuYWdlci5rZXlQcmVzc2VkKCdLZXlXJykpIHtcbiAgICAgICAgdGhpcy53YWxscy5wdXNoKFxuICAgICAgICAgIG5ldyBXYWxsKHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiB2ZWMuY3B5KElucHV0TWFuYWdlci5tb3VzZVBvc2l0aW9uKSxcbiAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICAvLyBDcmVhdGUgZ3JvdW5kXG4gICAgICBpZiAoSW5wdXRNYW5hZ2VyLmtleVByZXNzZWQoJ0tleUcnKSkge1xuICAgICAgICB0aGlzLmdyb3VuZHMucHVzaChcbiAgICAgICAgICBuZXcgR3JvdW5kU2hhZG93UmVjZWl2ZXIoe1xuICAgICAgICAgICAgcG9zaXRpb246IHZlYy5jcHkoSW5wdXRNYW5hZ2VyLm1vdXNlUG9zaXRpb24pLFxuICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gSGFuZGxlIGl0ZW0gZGVsZXRlXG4gICAgaWYgKElucHV0TWFuYWdlci5rZXlQcmVzc2VkKCdEZWxldGUnKSAmJiB0aGlzLnNlbGVjdGVkKSB7XG4gICAgICBzd2l0Y2ggKHRoaXMuc2VsZWN0ZWQudHlwZSkge1xuICAgICAgICBjYXNlICdsaWdodCc6XG4gICAgICAgICAgdGhpcy5saWdodGluZ1N5c3RlbS5saWdodHMgPSB0aGlzLmxpZ2h0aW5nU3lzdGVtLmxpZ2h0cy5maWx0ZXIoXG4gICAgICAgICAgICBsaWdodCA9PiBsaWdodC5pZCAhPT0gdGhpcy5zZWxlY3RlZCEuaWRcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ3dhbGwnOlxuICAgICAgICAgIHRoaXMud2FsbHMgPSB0aGlzLndhbGxzLmZpbHRlcih3YWxsID0+IHdhbGwuaWQgIT09IHRoaXMuc2VsZWN0ZWQhLmlkKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdncm91bmQnOlxuICAgICAgICAgIHRoaXMuZ3JvdW5kcyA9IHRoaXMuZ3JvdW5kcy5maWx0ZXIoXG4gICAgICAgICAgICBncm91bmQgPT4gZ3JvdW5kLmlkICE9PSB0aGlzLnNlbGVjdGVkIS5pZFxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICB0aGlzLnNlbGVjdGVkLmRlc3Ryb3koKTtcbiAgICAgIHRoaXMuc2VsZWN0ZWQgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBkcmF3KGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkge1xuICAgIGNvbnRleHQuc2F2ZSgpO1xuXG4gICAgc3dpdGNoICh0aGlzLm1vZGUpIHtcbiAgICAgIGNhc2UgJ25vbGlnaHRpbmcnOlxuICAgICAgICB0aGlzLmdyb3VuZHMuZm9yRWFjaChncm91bmQgPT4gZ3JvdW5kLmRyYXcoY29udGV4dCkpO1xuICAgICAgICB0aGlzLndhbGxzLmZvckVhY2god2FsbCA9PiB3YWxsLmRyYXcoY29udGV4dCkpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnbm9ybWFsJzpcbiAgICAgICAgdGhpcy5ncm91bmRzLmZvckVhY2goZ3JvdW5kID0+IGdyb3VuZC5kcmF3KGNvbnRleHQpKTtcbiAgICAgICAgdGhpcy53YWxscy5mb3JFYWNoKHdhbGwgPT4gd2FsbC5kcmF3KGNvbnRleHQpKTtcblxuICAgICAgICB0aGlzLmxpZ2h0aW5nU3lzdGVtLnByZXBhcmUodGhpcy5ncm91bmRzLCB0aGlzLndhbGxzKTtcbiAgICAgICAgdGhpcy5saWdodGluZ1N5c3RlbS5kcmF3KGNvbnRleHQpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnZ3JvdW5kbWFzayc6XG4gICAgICAgIHRoaXMubGlnaHRpbmdTeXN0ZW0ucHJlcGFyZSh0aGlzLmdyb3VuZHMsIHRoaXMud2FsbHMpO1xuICAgICAgICBjb250ZXh0LmRyYXdJbWFnZSh0aGlzLmxpZ2h0aW5nU3lzdGVtLmdyb3VuZE1hc2tDYW52YXMsIDAsIDApO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnd2FsbG1hc2snOlxuICAgICAgICB0aGlzLmxpZ2h0aW5nU3lzdGVtLnByZXBhcmUodGhpcy5ncm91bmRzLCB0aGlzLndhbGxzKTtcbiAgICAgICAgY29udGV4dC5kcmF3SW1hZ2UodGhpcy5saWdodGluZ1N5c3RlbS53YWxsTWFza0NhbnZhcywgMCwgMCk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdncm91bmRtYXNrZWRsaWdodG1hcCc6XG4gICAgICAgIHRoaXMubGlnaHRpbmdTeXN0ZW0ucHJlcGFyZSh0aGlzLmdyb3VuZHMsIHRoaXMud2FsbHMpO1xuICAgICAgICBjb250ZXh0LmRyYXdJbWFnZSh0aGlzLmxpZ2h0aW5nU3lzdGVtLmdyb3VuZE1hc2tlZExpZ2h0TWFwQ2FudmFzLCAwLCAwKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ3dhbGxtYXNrZWRsaWdodG1hcCc6XG4gICAgICAgIHRoaXMubGlnaHRpbmdTeXN0ZW0ucHJlcGFyZSh0aGlzLmdyb3VuZHMsIHRoaXMud2FsbHMpO1xuICAgICAgICBjb250ZXh0LmRyYXdJbWFnZSh0aGlzLmxpZ2h0aW5nU3lzdGVtLndhbGxNYXNrZWRMaWdodE1hcENhbnZhcywgMCwgMCk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdsaWdodG1hcCc6XG4gICAgICAgIHRoaXMubGlnaHRpbmdTeXN0ZW0ucHJlcGFyZSh0aGlzLmdyb3VuZHMsIHRoaXMud2FsbHMpO1xuICAgICAgICBjb250ZXh0LmRyYXdJbWFnZSh0aGlzLmxpZ2h0aW5nU3lzdGVtLmdyb3VuZE1hc2tlZExpZ2h0TWFwQ2FudmFzLCAwLCAwKTtcbiAgICAgICAgY29udGV4dC5kcmF3SW1hZ2UodGhpcy5saWdodGluZ1N5c3RlbS53YWxsTWFza2VkTGlnaHRNYXBDYW52YXMsIDAsIDApO1xuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICBjb250ZXh0LnJlc3RvcmUoKTtcbiAgfVxufVxuIiwiaW1wb3J0IEdhbWUgZnJvbSAnLi9HYW1lJztcbmltcG9ydCB7IEdyb3VuZFNoYWRvd1JlY2VpdmVyIH0gZnJvbSAnLi9Hcm91bmRTaGFkb3dSZWNlaXZlcic7XG5pbXBvcnQgeyBMaWdodCB9IGZyb20gJy4vTGlnaHQnO1xuaW1wb3J0IHsgV2FsbCB9IGZyb20gJy4vV2FsbCc7XG5cbmV4cG9ydCBjbGFzcyBMaWdodGluZ1N5c3RlbSB7XG4gIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgV0FMTF9MSUdIVElOR19ZX09GRlNFVCA9IC0zMDtcblxuICBwdWJsaWMgYW1iaWVudExpZ2h0Q29sb3VyID0gJ2JsYWNrJztcbiAgcHVibGljIGxpZ2h0czogTGlnaHRbXSA9IFtdO1xuXG4gIHB1YmxpYyBncm91bmRNYXNrQ2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudDtcbiAgcHJpdmF0ZSBncm91bmRNYXNrQ29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xuXG4gIHB1YmxpYyB3YWxsTWFza0NhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XG4gIHByaXZhdGUgd2FsbE1hc2tDb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XG5cbiAgcHVibGljIHdhbGxNYXNrZWRMaWdodE1hcENhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XG4gIHByaXZhdGUgd2FsbE1hc2tlZExpZ2h0TWFwQ29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xuXG4gIHB1YmxpYyBncm91bmRNYXNrZWRMaWdodE1hcENhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XG4gIHByaXZhdGUgZ3JvdW5kTWFza2VkTGlnaHRNYXBDb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XG5cbiAgcHVibGljIGluaXRpYWxpc2UoKSB7XG4gICAgdGhpcy5ncm91bmRNYXNrQ2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgdGhpcy5ncm91bmRNYXNrQ2FudmFzLndpZHRoID0gR2FtZS5zY3JlZW4ueDtcbiAgICB0aGlzLmdyb3VuZE1hc2tDYW52YXMuaGVpZ2h0ID0gR2FtZS5zY3JlZW4ueTtcbiAgICB0aGlzLmdyb3VuZE1hc2tDb250ZXh0ID0gdGhpcy5ncm91bmRNYXNrQ2FudmFzLmdldENvbnRleHQoJzJkJykhO1xuXG4gICAgdGhpcy53YWxsTWFza0NhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgIHRoaXMud2FsbE1hc2tDYW52YXMud2lkdGggPSBHYW1lLnNjcmVlbi54O1xuICAgIHRoaXMud2FsbE1hc2tDYW52YXMuaGVpZ2h0ID0gR2FtZS5zY3JlZW4ueTtcbiAgICB0aGlzLndhbGxNYXNrQ29udGV4dCA9IHRoaXMud2FsbE1hc2tDYW52YXMuZ2V0Q29udGV4dCgnMmQnKSE7XG5cbiAgICB0aGlzLndhbGxNYXNrZWRMaWdodE1hcENhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgIHRoaXMud2FsbE1hc2tlZExpZ2h0TWFwQ2FudmFzLndpZHRoID0gR2FtZS5zY3JlZW4ueDtcbiAgICB0aGlzLndhbGxNYXNrZWRMaWdodE1hcENhbnZhcy5oZWlnaHQgPSBHYW1lLnNjcmVlbi55O1xuICAgIHRoaXMud2FsbE1hc2tlZExpZ2h0TWFwQ29udGV4dCA9XG4gICAgICB0aGlzLndhbGxNYXNrZWRMaWdodE1hcENhbnZhcy5nZXRDb250ZXh0KCcyZCcpITtcblxuICAgIHRoaXMuZ3JvdW5kTWFza2VkTGlnaHRNYXBDYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICB0aGlzLmdyb3VuZE1hc2tlZExpZ2h0TWFwQ2FudmFzLndpZHRoID0gR2FtZS5zY3JlZW4ueDtcbiAgICB0aGlzLmdyb3VuZE1hc2tlZExpZ2h0TWFwQ2FudmFzLmhlaWdodCA9IEdhbWUuc2NyZWVuLnk7XG4gICAgdGhpcy5ncm91bmRNYXNrZWRMaWdodE1hcENvbnRleHQgPVxuICAgICAgdGhpcy5ncm91bmRNYXNrZWRMaWdodE1hcENhbnZhcy5nZXRDb250ZXh0KCcyZCcpITtcbiAgfVxuXG4gIHB1YmxpYyB1cGRhdGUoZHQ6IG51bWJlcikge1xuICAgIHRoaXMubGlnaHRzLmZvckVhY2gobGlnaHQgPT4gbGlnaHQudXBkYXRlKGR0KSk7XG4gIH1cblxuICBwdWJsaWMgcHJlcGFyZShncm91bmRzOiBHcm91bmRTaGFkb3dSZWNlaXZlcltdLCB3YWxsczogV2FsbFtdKSB7XG4gICAgdGhpcy5saWdodHMuZm9yRWFjaChsaWdodCA9PiBsaWdodC5wcmVwYXJlKGdyb3VuZHMsIHdhbGxzKSk7XG5cbiAgICAvLyBQcmVwYXJlIGdyb3VuZCBtYXNrXG4gICAgdGhpcy5ncm91bmRNYXNrQ2FudmFzLndpZHRoID0gR2FtZS5zY3JlZW4ueDtcbiAgICB0aGlzLmdyb3VuZE1hc2tDYW52YXMuaGVpZ2h0ID0gR2FtZS5zY3JlZW4ueTtcbiAgICB0aGlzLmdyb3VuZE1hc2tDb250ZXh0LnNhdmUoKTtcblxuICAgIGdyb3VuZHMuZm9yRWFjaChncm91bmQgPT4ge1xuICAgICAgZ3JvdW5kLmRyYXdNYXNrKHRoaXMuZ3JvdW5kTWFza0NvbnRleHQpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5ncm91bmRNYXNrQ29udGV4dC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnZGVzdGluYXRpb24tb3V0JztcblxuICAgIHdhbGxzLmZvckVhY2god2FsbCA9PiB7XG4gICAgICB3YWxsLmRyYXdNYXNrKHRoaXMuZ3JvdW5kTWFza0NvbnRleHQpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5ncm91bmRNYXNrQ29udGV4dC5yZXN0b3JlKCk7XG5cbiAgICAvLyBQcmVwYXJlIHdhbGwgbWFza1xuICAgIHRoaXMud2FsbE1hc2tDYW52YXMud2lkdGggPSBHYW1lLnNjcmVlbi54O1xuICAgIHRoaXMud2FsbE1hc2tDYW52YXMuaGVpZ2h0ID0gR2FtZS5zY3JlZW4ueTtcbiAgICB0aGlzLndhbGxNYXNrQ29udGV4dC5zYXZlKCk7XG5cbiAgICB3YWxscy5mb3JFYWNoKHdhbGwgPT4ge1xuICAgICAgd2FsbC5kcmF3TWFzayh0aGlzLndhbGxNYXNrQ29udGV4dCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLndhbGxNYXNrQ29udGV4dC5yZXN0b3JlKCk7XG5cbiAgICAvLyBQcmVwYXJlIGdyb3VuZC1tYXNrIGxpZ2h0bWFwIGNhbnZhc1xuICAgIHRoaXMuZ3JvdW5kTWFza2VkTGlnaHRNYXBDYW52YXMud2lkdGggPSBHYW1lLnNjcmVlbi54O1xuICAgIHRoaXMuZ3JvdW5kTWFza2VkTGlnaHRNYXBDYW52YXMuaGVpZ2h0ID0gR2FtZS5zY3JlZW4ueTtcbiAgICB0aGlzLmdyb3VuZE1hc2tlZExpZ2h0TWFwQ29udGV4dC5zYXZlKCk7XG5cbiAgICB0aGlzLmdyb3VuZE1hc2tlZExpZ2h0TWFwQ29udGV4dC5maWxsU3R5bGUgPSB0aGlzLmFtYmllbnRMaWdodENvbG91cjtcbiAgICB0aGlzLmdyb3VuZE1hc2tlZExpZ2h0TWFwQ29udGV4dC5maWxsUmVjdChcbiAgICAgIDAsXG4gICAgICAwLFxuICAgICAgR2FtZS5zY3JlZW4ueCxcbiAgICAgIEdhbWUuc2NyZWVuLnlcbiAgICApO1xuXG4gICAgLy8gRHJhdyBsaWdodHNcbiAgICB0aGlzLmdyb3VuZE1hc2tlZExpZ2h0TWFwQ29udGV4dC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnc2NyZWVuJztcbiAgICB0aGlzLmxpZ2h0cy5mb3JFYWNoKGxpZ2h0ID0+IHtcbiAgICAgIHRoaXMuZ3JvdW5kTWFza2VkTGlnaHRNYXBDb250ZXh0LmRyYXdJbWFnZShcbiAgICAgICAgbGlnaHQuZ3JvdW5kTGlnaHRDYW52YXMsXG4gICAgICAgIGxpZ2h0LnBvc2l0aW9uLnggLSBsaWdodC5yYWRpdXMsXG4gICAgICAgIGxpZ2h0LnBvc2l0aW9uLnkgLSBsaWdodC5yYWRpdXNcbiAgICAgICk7XG4gICAgfSk7XG5cbiAgICAvLyBNYXNrIGdyb3VuZFxuICAgIHRoaXMuZ3JvdW5kTWFza2VkTGlnaHRNYXBDb250ZXh0Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9XG4gICAgICAnZGVzdGluYXRpb24tYXRvcCc7XG4gICAgdGhpcy5ncm91bmRNYXNrZWRMaWdodE1hcENvbnRleHQuZHJhd0ltYWdlKHRoaXMuZ3JvdW5kTWFza0NhbnZhcywgMCwgMCk7XG5cbiAgICAvLyBQcmVwYXJlIHdhbGwtbWFzayBsaWdodG1hcCBjYW52YXNcbiAgICB0aGlzLndhbGxNYXNrZWRMaWdodE1hcENhbnZhcy53aWR0aCA9IEdhbWUuc2NyZWVuLng7XG4gICAgdGhpcy53YWxsTWFza2VkTGlnaHRNYXBDYW52YXMuaGVpZ2h0ID0gR2FtZS5zY3JlZW4ueTtcbiAgICB0aGlzLndhbGxNYXNrZWRMaWdodE1hcENvbnRleHQuc2F2ZSgpO1xuXG4gICAgdGhpcy53YWxsTWFza2VkTGlnaHRNYXBDb250ZXh0LmZpbGxTdHlsZSA9IHRoaXMuYW1iaWVudExpZ2h0Q29sb3VyO1xuICAgIHRoaXMud2FsbE1hc2tlZExpZ2h0TWFwQ29udGV4dC5maWxsUmVjdCgwLCAwLCBHYW1lLnNjcmVlbi54LCBHYW1lLnNjcmVlbi55KTtcblxuICAgIC8vIERyYXcgbGlnaHRzXG4gICAgdGhpcy53YWxsTWFza2VkTGlnaHRNYXBDb250ZXh0Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdzY3JlZW4nO1xuICAgIHRoaXMubGlnaHRzLmZvckVhY2gobGlnaHQgPT4ge1xuICAgICAgdGhpcy53YWxsTWFza2VkTGlnaHRNYXBDb250ZXh0LmRyYXdJbWFnZShcbiAgICAgICAgbGlnaHQud2FsbExpZ2h0Q2FudmFzLFxuICAgICAgICBsaWdodC5wb3NpdGlvbi54IC0gbGlnaHQucmFkaXVzLFxuICAgICAgICBsaWdodC5wb3NpdGlvbi55IC0gbGlnaHQucmFkaXVzICsgTGlnaHRpbmdTeXN0ZW0uV0FMTF9MSUdIVElOR19ZX09GRlNFVFxuICAgICAgKTtcbiAgICB9KTtcblxuICAgIC8vIE1hc2sgd2FsbFxuICAgIHRoaXMud2FsbE1hc2tlZExpZ2h0TWFwQ29udGV4dC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPVxuICAgICAgJ2Rlc3RpbmF0aW9uLWF0b3AnO1xuICAgIHRoaXMud2FsbE1hc2tlZExpZ2h0TWFwQ29udGV4dC5kcmF3SW1hZ2UodGhpcy53YWxsTWFza0NhbnZhcywgMCwgMCk7XG4gIH1cblxuICBwdWJsaWMgZHJhdyhjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpIHtcbiAgICBjb250ZXh0LnNhdmUoKTtcblxuICAgIGNvbnRleHQuZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ211bHRpcGx5JztcbiAgICBjb250ZXh0LmRyYXdJbWFnZSh0aGlzLmdyb3VuZE1hc2tlZExpZ2h0TWFwQ2FudmFzLCAwLCAwKTtcbiAgICBjb250ZXh0LmRyYXdJbWFnZSh0aGlzLndhbGxNYXNrZWRMaWdodE1hcENhbnZhcywgMCwgMCk7XG5cbiAgICBjb250ZXh0LnJlc3RvcmUoKTtcbiAgfVxufVxuIiwiaW1wb3J0IERlYnVnIGZyb20gJ0BiYXNlbWVudHVuaXZlcnNlL2RlYnVnJztcbmltcG9ydCBJbnB1dE1hbmFnZXIgZnJvbSAnQGJhc2VtZW50dW5pdmVyc2UvaW5wdXQtbWFuYWdlcic7XG5pbXBvcnQgeyB2ZWMgfSBmcm9tICdAYmFzZW1lbnR1bml2ZXJzZS92ZWMnO1xuaW1wb3J0IHsgdjQgYXMgdXVpZCB9IGZyb20gJ3V1aWQnO1xuaW1wb3J0IEdhbWUgZnJvbSAnLi9HYW1lJztcbmltcG9ydCB7IFJlY3RhbmdsZSwgU2hhZG93T3B0aW9ucyB9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHsgY2xhbXBWZWMsIHBvaW50SW5SZWN0YW5nbGUgfSBmcm9tICcuL3V0aWxzJztcblxuZXhwb3J0IGNsYXNzIFdhbGwge1xuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBERUZBVUxUX1NJWkUgPSB2ZWMoMTAwLCAxMDApO1xuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBERUZBVUxUX0NPTE9VUiA9ICcjY2NjJztcbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgREVGQVVMVF9TSEFET1dfT1BUSU9OUzogU2hhZG93T3B0aW9ucyA9IHtcbiAgICB0eXBlOiAncmVnaW9uJyxcbiAgICByZWdpb246IHtcbiAgICAgIHBvc2l0aW9uOiB2ZWMoMCwgMC40KSxcbiAgICAgIHNpemU6IHZlYygxLCAwLjYpLFxuICAgIH0sXG4gIH07XG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IERFQlVHX0NPTE9VUiA9ICcjYjA1JztcbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgREVCVUdfSE9WRVJfQ09MT1VSID0gJyNkMjcnO1xuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBNSU5fU0laRSA9IHZlYygyMCwgMjApO1xuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBNQVhfU0laRSA9IHZlYygyMDAsIDIwMCk7XG5cbiAgcHVibGljIHJlYWRvbmx5IHR5cGUgPSAnd2FsbCc7XG5cbiAgcHVibGljIGlkOiBzdHJpbmcgPSAnJztcbiAgcHVibGljIGZvbGRlcjogZGF0LkdVSSB8IG51bGwgPSBudWxsO1xuXG4gIHB1YmxpYyBwb3NpdGlvbjogdmVjID0gdmVjKCk7XG4gIHB1YmxpYyBzaXplOiB2ZWMgPSBXYWxsLkRFRkFVTFRfU0laRTtcbiAgcHVibGljIGNvbG91cjogc3RyaW5nID0gV2FsbC5ERUZBVUxUX0NPTE9VUjtcbiAgcHVibGljIHNoYWRvd09wdGlvbnM6IFNoYWRvd09wdGlvbnMgPSBXYWxsLkRFRkFVTFRfU0hBRE9XX09QVElPTlM7XG5cbiAgcHVibGljIGhvdmVyZWQgPSBmYWxzZTtcbiAgcHVibGljIHNlbGVjdGVkID0gZmFsc2U7XG4gIHByaXZhdGUgZHJhZ2dpbmcgPSBmYWxzZTtcbiAgcHJpdmF0ZSBkcmFnT2Zmc2V0OiB2ZWMgfCBudWxsID0gbnVsbDtcblxuICBwdWJsaWMgY29uc3RydWN0b3IoZGF0YTogUGFydGlhbDxXYWxsPiA9IHt9KSB7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBkYXRhLCB7XG4gICAgICBpZDogZGF0YS5pZCA/PyB1dWlkKCkuc3BsaXQoJy0nKVswXSxcbiAgICB9KTtcblxuICAgIHRoaXMuZm9sZGVyID0gR2FtZS5ndWkuYWRkRm9sZGVyKGBXYWxsICR7dGhpcy5pZH1gKTtcbiAgICB0aGlzLmZvbGRlci5hZGQodGhpcywgJ2NvbG91cicpO1xuICAgIHRoaXMuZm9sZGVyXG4gICAgICAuYWRkKHRoaXMuc2l6ZSwgJ3gnLCBXYWxsLk1JTl9TSVpFLngsIFdhbGwuTUFYX1NJWkUueClcbiAgICAgIC5uYW1lKCd3aWR0aCcpO1xuICAgIHRoaXMuZm9sZGVyXG4gICAgICAuYWRkKHRoaXMuc2l6ZSwgJ3knLCBXYWxsLk1JTl9TSVpFLnksIFdhbGwuTUFYX1NJWkUueSlcbiAgICAgIC5uYW1lKCdoZWlnaHQnKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgc2hhZG93UmVnaW9uKCk6IFJlY3RhbmdsZSB8IG51bGwge1xuICAgIGlmICh0aGlzLnNoYWRvd09wdGlvbnMudHlwZSA9PT0gJ3JlZ2lvbicpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBvc2l0aW9uOiB2ZWMoXG4gICAgICAgICAgdGhpcy5wb3NpdGlvbi54ICsgdGhpcy5zaGFkb3dPcHRpb25zLnJlZ2lvbi5wb3NpdGlvbi54ICogdGhpcy5zaXplLngsXG4gICAgICAgICAgdGhpcy5wb3NpdGlvbi55ICsgdGhpcy5zaGFkb3dPcHRpb25zLnJlZ2lvbi5wb3NpdGlvbi55ICogdGhpcy5zaXplLnlcbiAgICAgICAgKSxcbiAgICAgICAgc2l6ZTogdmVjKFxuICAgICAgICAgIHRoaXMuc2hhZG93T3B0aW9ucy5yZWdpb24uc2l6ZS54ICogdGhpcy5zaXplLngsXG4gICAgICAgICAgdGhpcy5zaGFkb3dPcHRpb25zLnJlZ2lvbi5zaXplLnkgKiB0aGlzLnNpemUueVxuICAgICAgICApLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHB1YmxpYyBzZXJpYWxpc2UoKTogYW55IHtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogdGhpcy50eXBlLFxuICAgICAgaWQ6IHRoaXMuaWQsXG4gICAgICBwb3NpdGlvbjogdGhpcy5wb3NpdGlvbixcbiAgICAgIHNpemU6IHRoaXMuc2l6ZSxcbiAgICAgIGNvbG91cjogdGhpcy5jb2xvdXIsXG4gICAgICBzaGFkb3dPcHRpb25zOiB0aGlzLnNoYWRvd09wdGlvbnMsXG4gICAgfTtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgZGVzZXJpYWxpc2UoZGF0YTogYW55KTogV2FsbCB7XG4gICAgcmV0dXJuIG5ldyBXYWxsKGRhdGEpO1xuICB9XG5cbiAgcHVibGljIGRlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMuZm9sZGVyKSB7XG4gICAgICBHYW1lLmd1aS5yZW1vdmVGb2xkZXIodGhpcy5mb2xkZXIpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyB1cGRhdGUoZHQ6IG51bWJlcikge1xuICAgIHRoaXMuaG92ZXJlZCA9IHBvaW50SW5SZWN0YW5nbGUoSW5wdXRNYW5hZ2VyLm1vdXNlUG9zaXRpb24sIHtcbiAgICAgIHBvc2l0aW9uOiB0aGlzLnBvc2l0aW9uLFxuICAgICAgc2l6ZTogdGhpcy5zaXplLFxuICAgIH0pO1xuXG4gICAgaWYgKElucHV0TWFuYWdlci5tb3VzZURvd24oKSAmJiB0aGlzLnNlbGVjdGVkICYmICF0aGlzLmRyYWdnaW5nKSB7XG4gICAgICB0aGlzLmRyYWdnaW5nID0gdHJ1ZTtcbiAgICAgIHRoaXMuZHJhZ09mZnNldCA9IHZlYy5zdWIoSW5wdXRNYW5hZ2VyLm1vdXNlUG9zaXRpb24sIHRoaXMucG9zaXRpb24pO1xuICAgIH1cblxuICAgIGlmICghSW5wdXRNYW5hZ2VyLm1vdXNlRG93bigpKSB7XG4gICAgICB0aGlzLmRyYWdnaW5nID0gZmFsc2U7XG4gICAgICB0aGlzLmRyYWdPZmZzZXQgPSBudWxsO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnNlbGVjdGVkICYmIHRoaXMuZHJhZ2dpbmcgJiYgdGhpcy5kcmFnT2Zmc2V0KSB7XG4gICAgICBpZiAoSW5wdXRNYW5hZ2VyLmtleURvd24oJ0NvbnRyb2xMZWZ0JykpIHtcbiAgICAgICAgdGhpcy5zaXplID0gY2xhbXBWZWMoXG4gICAgICAgICAgdmVjLnN1YihJbnB1dE1hbmFnZXIubW91c2VQb3NpdGlvbiwgdGhpcy5wb3NpdGlvbiksXG4gICAgICAgICAgV2FsbC5NSU5fU0laRSxcbiAgICAgICAgICBXYWxsLk1BWF9TSVpFXG4gICAgICAgICk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnBvc2l0aW9uID0gdmVjLnN1YihJbnB1dE1hbmFnZXIubW91c2VQb3NpdGlvbiwgdGhpcy5kcmFnT2Zmc2V0KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBEZWJ1Zy5ib3JkZXIodGhpcy5pZCwgJycsIHRoaXMucG9zaXRpb24sIHtcbiAgICAgIHNob3dMYWJlbDogdHJ1ZSxcbiAgICAgIHNob3dWYWx1ZTogZmFsc2UsXG4gICAgICBzaXplOiB0aGlzLnNpemUsXG4gICAgICBib3JkZXJDb2xvdXI6XG4gICAgICAgIHRoaXMuaG92ZXJlZCB8fCB0aGlzLmRyYWdnaW5nXG4gICAgICAgICAgPyBXYWxsLkRFQlVHX0hPVkVSX0NPTE9VUlxuICAgICAgICAgIDogV2FsbC5ERUJVR19DT0xPVVIsXG4gICAgICBib3JkZXJTdHlsZTogdGhpcy5zZWxlY3RlZCA/ICdzb2xpZCcgOiAnZGFzaGVkJyxcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBkcmF3KGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkge1xuICAgIGNvbnRleHQuc2F2ZSgpO1xuXG4gICAgY29udGV4dC5maWxsU3R5bGUgPSB0aGlzLmNvbG91cjtcbiAgICBjb250ZXh0LmZpbGxSZWN0KFxuICAgICAgdGhpcy5wb3NpdGlvbi54LFxuICAgICAgdGhpcy5wb3NpdGlvbi55LFxuICAgICAgdGhpcy5zaXplLngsXG4gICAgICB0aGlzLnNpemUueVxuICAgICk7XG5cbiAgICBjb250ZXh0LnJlc3RvcmUoKTtcbiAgfVxuXG4gIHB1YmxpYyBkcmF3TWFzayhjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpIHtcbiAgICBjb250ZXh0LnNhdmUoKTtcblxuICAgIGNvbnRleHQuZmlsbFN0eWxlID0gJ2JsYWNrJztcbiAgICBjb250ZXh0LmZpbGxSZWN0KFxuICAgICAgdGhpcy5wb3NpdGlvbi54LFxuICAgICAgdGhpcy5wb3NpdGlvbi55LFxuICAgICAgdGhpcy5zaXplLngsXG4gICAgICB0aGlzLnNpemUueVxuICAgICk7XG5cbiAgICBjb250ZXh0LnJlc3RvcmUoKTtcbiAgfVxufVxuIiwiZXhwb3J0IGNvbnN0IEZQU19NSU4gPSAxIC8gMzA7XG4iLCJpbXBvcnQgeyB2ZWMgfSBmcm9tICdAYmFzZW1lbnR1bml2ZXJzZS92ZWMnO1xuXG5leHBvcnQgdHlwZSBDb2xvdXIgPSB7XG4gIHI6IG51bWJlcjtcbiAgZzogbnVtYmVyO1xuICBiOiBudW1iZXI7XG4gIGE6IG51bWJlcjtcbn07XG5cbmV4cG9ydCB0eXBlIExpbmUgPSB7XG4gIHN0YXJ0OiB2ZWM7XG4gIGVuZDogdmVjO1xufTtcblxuZXhwb3J0IHR5cGUgSW50ZXJ2YWwxZCA9IHtcbiAgc3RhcnQ6IG51bWJlcjtcbiAgZW5kOiBudW1iZXI7XG59O1xuXG5leHBvcnQgdHlwZSBJbnRlcnZhbDJkID0ge1xuICB0b3A6IG51bWJlcjtcbiAgYm90dG9tOiBudW1iZXI7XG4gIHJpZ2h0OiBudW1iZXI7XG4gIGxlZnQ6IG51bWJlcjtcbn07XG5cbmV4cG9ydCBlbnVtIFNlY3RvcjFkIHtcbiAgQmVmb3JlID0gJ2JlZm9yZScsXG4gIEluc2lkZSA9ICdpbnNpZGUnLFxuICBBZnRlciA9ICdhZnRlcicsXG59XG5cbmV4cG9ydCBlbnVtIFNlY3RvcjJkIHtcbiAgVG9wTGVmdCA9ICd0b3AtbGVmdCcsXG4gIFRvcCA9ICd0b3AnLFxuICBUb3BSaWdodCA9ICd0b3AtcmlnaHQnLFxuICBMZWZ0ID0gJ2xlZnQnLFxuICBJbnNpZGUgPSAnaW5zaWRlJyxcbiAgUmlnaHQgPSAncmlnaHQnLFxuICBCb3R0b21MZWZ0ID0gJ2JvdHRvbS1sZWZ0JyxcbiAgQm90dG9tID0gJ2JvdHRvbScsXG4gIEJvdHRvbVJpZ2h0ID0gJ2JvdHRvbS1yaWdodCcsXG59XG5cbmV4cG9ydCB0eXBlIFJlY3RhbmdsZSA9IHtcbiAgcG9zaXRpb246IHZlYztcbiAgc2l6ZTogdmVjO1xufTtcblxudHlwZSBSZWdpb25TaGFkb3dPcHRpb25zID0ge1xuICB0eXBlOiAncmVnaW9uJztcbiAgcmVnaW9uOiBSZWN0YW5nbGU7XG59O1xuXG50eXBlIFNwcml0ZVNoYWRvd09wdGlvbnMgPSB7XG4gIHR5cGU6ICdzcHJpdGUnO1xuICBzcHJpdGU6IGFueTtcbiAgb2Zmc2V0PzogbnVtYmVyO1xufTtcblxudHlwZSBDaXJjbGVTaGFkb3dPcHRpb25zID0ge1xuICB0eXBlOiAnY2lyY2xlJztcbiAgcmFkaXVzOiBudW1iZXI7XG4gIG9mZnNldD86IG51bWJlcjtcbn07XG5cbmV4cG9ydCB0eXBlIFNoYWRvd09wdGlvbnMgPVxuICB8IFJlZ2lvblNoYWRvd09wdGlvbnNcbiAgfCBTcHJpdGVTaGFkb3dPcHRpb25zXG4gIHwgQ2lyY2xlU2hhZG93T3B0aW9ucztcblxuZXhwb3J0IHR5cGUgUG9seWdvblZlcnRpY2VzID0gKFxuICB8IHZlY1xuICB8ICgoY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSA9PiB2b2lkKVxuKVtdO1xuIiwiaW1wb3J0IHsgY2xhbXAsIGZsb2F0RXF1YWxzIH0gZnJvbSAnQGJhc2VtZW50dW5pdmVyc2UvdXRpbHMnO1xuaW1wb3J0IHsgdmVjIH0gZnJvbSAnQGJhc2VtZW50dW5pdmVyc2UvdmVjJztcbmltcG9ydCB7XG4gIENvbG91cixcbiAgSW50ZXJ2YWwxZCxcbiAgSW50ZXJ2YWwyZCxcbiAgTGluZSxcbiAgUG9seWdvblZlcnRpY2VzLFxuICBSZWN0YW5nbGUsXG4gIFNlY3RvcjFkLFxuICBTZWN0b3IyZCxcbn0gZnJvbSAnLi90eXBlcyc7XG5cbi8qKlxuICogR2V0IHRoZSBtaW5pbXVtIG9mIGEgc2V0IG9mIHZlY3RvcnNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1pblZlYyguLi52ZWN0b3JzOiB2ZWNbXSk6IHZlYyB7XG4gIHJldHVybiB2ZWN0b3JzLnJlZHVjZShcbiAgICAobWluLCB2KSA9PiB2ZWMoTWF0aC5taW4obWluLngsIHYueCksIE1hdGgubWluKG1pbi55LCB2LnkpKSxcbiAgICB2ZWMoSW5maW5pdHksIEluZmluaXR5KVxuICApO1xufVxuXG4vKipcbiAqIEdldCB0aGUgbWF4aW11bSBvZiBhIHNldCBvZiB2ZWN0b3JzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtYXhWZWMoLi4udmVjdG9yczogdmVjW10pOiB2ZWMge1xuICByZXR1cm4gdmVjdG9ycy5yZWR1Y2UoXG4gICAgKG1heCwgdikgPT4gdmVjKE1hdGgubWF4KG1heC54LCB2LngpLCBNYXRoLm1heChtYXgueSwgdi55KSksXG4gICAgdmVjKC1JbmZpbml0eSwgLUluZmluaXR5KVxuICApO1xufVxuXG4vKipcbiAqIENsYW1wIGEgdmVjdG9yIGJldHdlZW4gbWluIGFuZCBtYXhcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNsYW1wVmVjKHY6IHZlYywgbWluOiB2ZWMsIG1heDogdmVjKTogdmVjIHtcbiAgcmV0dXJuIHZlYyhjbGFtcCh2LngsIG1pbi54LCBtYXgueCksIGNsYW1wKHYueSwgbWluLnksIG1heC55KSk7XG59XG5cbi8qKlxuICogQ29udmVydCBhIGNvbG91ciBvYmplY3QgdG8gYSBDU1Mgc3RyaW5nXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb2xvdXJUb1N0cmluZyhjb2xvdXI6IENvbG91cik6IHN0cmluZyB7XG4gIHJldHVybiBgcmdiYSgke2NvbG91ci5yfSwgJHtjb2xvdXIuZ30sICR7Y29sb3VyLmJ9LCAke2NvbG91ci5hfSlgO1xufVxuXG4vKipcbiAqIENoZWNrIGlmIGEgcG9pbnQgaXMgaW5zaWRlIGEgMmQgaW50ZXJ2YWxcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBvaW50SW5JbnRlcnZhbChwb2ludDogdmVjLCBpbnRlcnZhbDogSW50ZXJ2YWwyZCk6IGJvb2xlYW4ge1xuICByZXR1cm4gKFxuICAgIHBvaW50LnggPj0gaW50ZXJ2YWwubGVmdCAmJlxuICAgIHBvaW50LnggPD0gaW50ZXJ2YWwucmlnaHQgJiZcbiAgICBwb2ludC55ID49IGludGVydmFsLnRvcCAmJlxuICAgIHBvaW50LnkgPD0gaW50ZXJ2YWwuYm90dG9tXG4gICk7XG59XG5cbi8qKlxuICogQ2hlY2sgaWYgYSBwb2ludCBpcyBpbnNpZGUgYW4gQUFCQiByZWN0YW5nbGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBvaW50SW5SZWN0YW5nbGUocG9pbnQ6IHZlYywgcmVjdGFuZ2xlOiBSZWN0YW5nbGUpOiBib29sZWFuIHtcbiAgcmV0dXJuIHBvaW50SW5JbnRlcnZhbChwb2ludCwgcmVjdGFuZ2xlVG9JbnRlcnZhbChyZWN0YW5nbGUpKTtcbn1cblxuLyoqXG4gKiBDaGVjayBpZiBhIGxpbmUgaW50ZXJzZWN0cyBhIDJkIGludGVydmFsIGFuZCByZXR1cm4gdGhlIGVhcmxpZXN0IHBvaW50IG9mXG4gKiBpbnRlcnNlY3Rpb25cbiAqXG4gKiBJZiB0aGUgbGluZSBzZWdtZW50IGRvZXMgbm90IGludGVyc2VjdCB0aGUgaW50ZXJ2YWwsIHJldHVybiBudWxsXG4gKlxuICogSWYgdGhlIGxpbmUgYmVnaW5zIGluc2lkZSB0aGUgaW50ZXJ2YWwsIHJldHVybiBudWxsXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBsaW5lSW5JbnRlcnZhbChsaW5lOiBMaW5lLCBpbnRlcnZhbDogSW50ZXJ2YWwyZCk6IHZlYyB8IG51bGwge1xuICBpZiAodmVjLmVxKGxpbmUuc3RhcnQsIGxpbmUuZW5kKSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgaWYgKFxuICAgIGxpbmUuc3RhcnQueCA+PSBpbnRlcnZhbC5sZWZ0ICYmXG4gICAgbGluZS5zdGFydC54IDw9IGludGVydmFsLnJpZ2h0ICYmXG4gICAgbGluZS5zdGFydC55ID49IGludGVydmFsLnRvcCAmJlxuICAgIGxpbmUuc3RhcnQueSA8PSBpbnRlcnZhbC5ib3R0b21cbiAgKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBjb25zdCBsaW5lRGVsdGFYID0gbGluZS5lbmQueCAtIGxpbmUuc3RhcnQueDtcbiAgbGV0IHR4TWluID0gKGludGVydmFsLmxlZnQgLSBsaW5lLnN0YXJ0LngpIC8gbGluZURlbHRhWDtcbiAgbGV0IHR4TWF4ID0gKGludGVydmFsLnJpZ2h0IC0gbGluZS5zdGFydC54KSAvIGxpbmVEZWx0YVg7XG5cbiAgaWYgKHR4TWluID4gdHhNYXgpIHtcbiAgICBbdHhNaW4sIHR4TWF4XSA9IFt0eE1heCwgdHhNaW5dO1xuICB9XG5cbiAgY29uc3QgbGluZURlbHRhWSA9IGxpbmUuZW5kLnkgLSBsaW5lLnN0YXJ0Lnk7XG4gIGxldCB0eU1pbiA9IChpbnRlcnZhbC50b3AgLSBsaW5lLnN0YXJ0LnkpIC8gbGluZURlbHRhWTtcbiAgbGV0IHR5TWF4ID0gKGludGVydmFsLmJvdHRvbSAtIGxpbmUuc3RhcnQueSkgLyBsaW5lRGVsdGFZO1xuXG4gIGlmICh0eU1pbiA+IHR5TWF4KSB7XG4gICAgW3R5TWluLCB0eU1heF0gPSBbdHlNYXgsIHR5TWluXTtcbiAgfVxuXG4gIC8vIENoZWNrIGlmIGludGVydmFscyBvdmVybGFwXG4gIGlmICh0eE1pbiA+IHR5TWF4IHx8IHR5TWluID4gdHhNYXgpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIC8vIEZpbmQgdGhlIGVhcmxpZXN0IGludGVyc2VjdGlvbiBwb2ludFxuICBjb25zdCB0TWluID0gTWF0aC5tYXgodHhNaW4sIHR5TWluKTtcbiAgY29uc3QgdE1heCA9IE1hdGgubWluKHR4TWF4LCB0eU1heCk7XG5cbiAgaWYgKHRNaW4gPiAxIHx8IHRNYXggPCAwKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBjb25zdCB0ID0gdE1pbiA8IDAgPyB0TWF4IDogdE1pbjtcbiAgaWYgKHQgPCAwIHx8IHQgPiAxKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHg6IGxpbmUuc3RhcnQueCArIHQgKiBsaW5lRGVsdGFYLFxuICAgIHk6IGxpbmUuc3RhcnQueSArIHQgKiBsaW5lRGVsdGFZLFxuICB9O1xufVxuXG4vKipcbiAqIENoZWNrIGlmIGEgbGluZSBpbnRlcnNlY3RzIGFuIEFBQkIgcmVjdGFuZ2xlIGFuZCByZXR1cm4gdGhlIGVhcmxpZXN0IHBvaW50XG4gKiBvZiBpbnRlcnNlY3Rpb25cbiAqXG4gKiBJZiB0aGUgbGluZSBzZWdtZW50IGRvZXMgbm90IGludGVyc2VjdCB0aGUgcmVjdGFuZ2xlLCByZXR1cm4gbnVsbFxuICpcbiAqIElmIHRoZSBsaW5lIGJlZ2lucyBpbnNpZGUgdGhlIHJlY3RhbmdsZSwgcmV0dXJuIG51bGxcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGxpbmVJblJlY3RhbmdsZShsaW5lOiBMaW5lLCByZWN0YW5nbGU6IFJlY3RhbmdsZSk6IHZlYyB8IG51bGwge1xuICByZXR1cm4gbGluZUluSW50ZXJ2YWwobGluZSwgcmVjdGFuZ2xlVG9JbnRlcnZhbChyZWN0YW5nbGUpKTtcbn1cblxuLyoqXG4gKiBDYWxjdWxhdGUgdGhlIHggcG9zaXRpb24gb2YgYSBsaW5lIHdoZXJlIGl0IGludGVyY2VwdHMgYSBnaXZlbiB5XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBsaW5lWUludGVyY2VwdChsaW5lOiBMaW5lLCB5OiBudW1iZXIpOiBudW1iZXIgfCBudWxsIHtcbiAgaWYgKGZsb2F0RXF1YWxzKGxpbmUuc3RhcnQueSwgbGluZS5lbmQueSkpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGNvbnN0IHQgPSAoeSAtIGxpbmUuc3RhcnQueSkgLyAobGluZS5lbmQueSAtIGxpbmUuc3RhcnQueSk7XG5cbiAgcmV0dXJuIGxpbmUuc3RhcnQueCArIHQgKiAobGluZS5lbmQueCAtIGxpbmUuc3RhcnQueCk7XG59XG5cbi8qKlxuICogR2V0IHRoZSBsZW5ndGggb2YgYW4gaW50ZXJ2YWxcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGludGVydmFsTGVuZ3RoKGludGVydmFsOiBJbnRlcnZhbDFkKTogbnVtYmVyIHtcbiAgcmV0dXJuIGludGVydmFsLmVuZCAtIGludGVydmFsLnN0YXJ0O1xufVxuXG4vKipcbiAqIENvbnZlcnQgYSAyZCBpbnRlcnZhbCB0byBhIHJlY3RhbmdsZVxuICovXG5leHBvcnQgZnVuY3Rpb24gaW50ZXJ2YWxUb1JlY3RhbmdsZShpbnRlcnZhbDogSW50ZXJ2YWwyZCk6IFJlY3RhbmdsZSB7XG4gIHJldHVybiB7XG4gICAgcG9zaXRpb246IHZlYyhpbnRlcnZhbC5sZWZ0LCBpbnRlcnZhbC50b3ApLFxuICAgIHNpemU6IHZlYyhpbnRlcnZhbC5yaWdodCAtIGludGVydmFsLmxlZnQsIGludGVydmFsLmJvdHRvbSAtIGludGVydmFsLnRvcCksXG4gIH07XG59XG5cbi8qKlxuICogQ29udmVydCBhIHJlY3RhbmdsZSB0byBhIDJkIGludGVydmFsXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZWN0YW5nbGVUb0ludGVydmFsKHJlY3RhbmdsZTogUmVjdGFuZ2xlKTogSW50ZXJ2YWwyZCB7XG4gIHJldHVybiB7XG4gICAgbGVmdDogcmVjdGFuZ2xlLnBvc2l0aW9uLngsXG4gICAgcmlnaHQ6IHJlY3RhbmdsZS5wb3NpdGlvbi54ICsgcmVjdGFuZ2xlLnNpemUueCxcbiAgICB0b3A6IHJlY3RhbmdsZS5wb3NpdGlvbi55LFxuICAgIGJvdHRvbTogcmVjdGFuZ2xlLnBvc2l0aW9uLnkgKyByZWN0YW5nbGUuc2l6ZS55LFxuICB9O1xufVxuXG4vKipcbiAqIEZpbmQgdGhlIG92ZXJsYXAgYmV0d2VlbiAyIDFkIGludGVydmFsc1xuICpcbiAqIElmIHRoZXJlIGlzIG5vIG92ZXJsYXAsIHJldHVybiBudWxsXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBvdmVybGFwMWQoYTogSW50ZXJ2YWwxZCwgYjogSW50ZXJ2YWwxZCk6IEludGVydmFsMWQgfCBudWxsIHtcbiAgaWYgKGEuZW5kIDwgYi5zdGFydCB8fCBhLnN0YXJ0ID4gYi5lbmQpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgc3RhcnQ6IE1hdGgubWF4KGEuc3RhcnQsIGIuc3RhcnQpLFxuICAgIGVuZDogTWF0aC5taW4oYS5lbmQsIGIuZW5kKSxcbiAgfTtcbn1cblxuLyoqXG4gKiBGaW5kIHRoZSBvdmVybGFwIGJldHdlZW4gMiAyZCBpbnRlcnZhbHNcbiAqXG4gKiBJZiB0aGVyZSBpcyBubyBvdmVybGFwLCByZXR1cm4gbnVsbFxuICovXG5leHBvcnQgZnVuY3Rpb24gb3ZlcmxhcDJkKGE6IEludGVydmFsMmQsIGI6IEludGVydmFsMmQpOiBJbnRlcnZhbDJkIHwgbnVsbCB7XG4gIGNvbnN0IHhPdmVybGFwID0gdGhpcy5vdmVybGFwMWQoYS5sZWZ0LCBhLnJpZ2h0LCBiLmxlZnQsIGIucmlnaHQpO1xuICBjb25zdCB5T3ZlcmxhcCA9IHRoaXMub3ZlcmxhcDFkKGEudG9wLCBhLmJvdHRvbSwgYi50b3AsIGIuYm90dG9tKTtcblxuICBpZiAoeE92ZXJsYXAgJiYgeU92ZXJsYXApIHtcbiAgICByZXR1cm4ge1xuICAgICAgbGVmdDogeE92ZXJsYXAuc3RhcnQsXG4gICAgICByaWdodDogeE92ZXJsYXAuZW5kLFxuICAgICAgdG9wOiB5T3ZlcmxhcC5zdGFydCxcbiAgICAgIGJvdHRvbTogeU92ZXJsYXAuZW5kLFxuICAgIH07XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cblxuLyoqXG4gKiBDaGVjayBpZiAyIEFBQkJzIGludGVyc2VjdFxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVjdGFuZ2xlc0ludGVyc2VjdChhOiBSZWN0YW5nbGUsIGI6IFJlY3RhbmdsZSk6IGJvb2xlYW4ge1xuICBjb25zdCB0bDEgPSBhLnBvc2l0aW9uO1xuICBjb25zdCBicjEgPSB2ZWMuYWRkKGEucG9zaXRpb24sIGEuc2l6ZSk7XG4gIGNvbnN0IHRsMiA9IGIucG9zaXRpb247XG4gIGNvbnN0IGJyMiA9IHZlYy5hZGQoYi5wb3NpdGlvbiwgYi5zaXplKTtcblxuICByZXR1cm4gdGwxLnggPD0gYnIyLnggJiYgYnIxLnggPj0gdGwyLnggJiYgdGwxLnkgPD0gYnIyLnkgJiYgYnIxLnkgPj0gdGwyLnk7XG59XG5cbi8qKlxuICogR2V0IGFuIGFycmF5IG9mIHZlcnRpY2VzIGZvciBhIHJlY3RhbmdsZSBpbiBDVyB3aW5kaW5nIG9yZGVyXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZWN0YW5nbGVWZXJ0aWNlcyhyZWN0YW5nbGU6IFJlY3RhbmdsZSk6IHZlY1tdIHtcbiAgY29uc3QgdGwgPSByZWN0YW5nbGUucG9zaXRpb247XG4gIGNvbnN0IGJyID0gdmVjLmFkZChyZWN0YW5nbGUucG9zaXRpb24sIHJlY3RhbmdsZS5zaXplKTtcblxuICByZXR1cm4gW3JlY3RhbmdsZS5wb3NpdGlvbiwgdmVjKGJyLngsIHRsLnkpLCBiciwgdmVjKHRsLngsIGJyLnkpXTtcbn1cblxuLyoqXG4gKiBDcmVhdGUgYSBwb2x5Z29uIHBhdGggb24gYSBjYW52YXMgY29udGV4dFxuICovXG5leHBvcnQgZnVuY3Rpb24gcG9seWdvbihcbiAgY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELFxuICAuLi52ZXJ0aWNlczogUG9seWdvblZlcnRpY2VzXG4pIHtcbiAgaWYgKHZlcnRpY2VzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnRleHQuYmVnaW5QYXRoKCk7XG4gIGlmICh0eXBlb2YgdmVydGljZXNbMF0gPT09ICdmdW5jdGlvbicpIHtcbiAgICB2ZXJ0aWNlc1swXShjb250ZXh0KTtcbiAgfSBlbHNlIHtcbiAgICBjb250ZXh0Lm1vdmVUbyh2ZXJ0aWNlc1swXS54LCB2ZXJ0aWNlc1swXS55KTtcbiAgfVxuICBmb3IgKGxldCBpID0gMTsgaSA8IHZlcnRpY2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHR5cGVvZiB2ZXJ0aWNlc1tpXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgKHZlcnRpY2VzW2ldIGFzIEZ1bmN0aW9uKShjb250ZXh0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29udGV4dC5saW5lVG8oKHZlcnRpY2VzW2ldIGFzIHZlYykueCwgKHZlcnRpY2VzW2ldIGFzIHZlYykueSk7XG4gICAgfVxuICB9XG4gIGNvbnRleHQuY2xvc2VQYXRoKCk7XG59XG5cbi8qKlxuICogR2V0IHRoZSBzZWN0b3Igb2YgYSBwb2ludCByZWxhdGl2ZSB0byBhIDFkIGludGVydmFsXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZWN0b3IxZChuOiBudW1iZXIsIGludGVydmFsOiBJbnRlcnZhbDFkKTogU2VjdG9yMWQge1xuICBpZiAobiA8PSBpbnRlcnZhbC5zdGFydCkge1xuICAgIHJldHVybiBTZWN0b3IxZC5CZWZvcmU7XG4gIH1cblxuICBpZiAobiA+PSBpbnRlcnZhbC5lbmQpIHtcbiAgICByZXR1cm4gU2VjdG9yMWQuQWZ0ZXI7XG4gIH1cblxuICByZXR1cm4gU2VjdG9yMWQuSW5zaWRlO1xufVxuXG4vKipcbiAqIEdldCB0aGUgc2VjdG9yIG9mIGEgcG9pbnQgcmVsYXRpdmUgdG8gYSAyZCBpbnRlcnZhbFxuICovXG5leHBvcnQgZnVuY3Rpb24gc2VjdG9yMmQocG9pbnQ6IHZlYywgaW50ZXJ2YWw6IEludGVydmFsMmQpOiBTZWN0b3IyZCB7XG4gIGNvbnN0IHggPSBzZWN0b3IxZChwb2ludC54LCB7IHN0YXJ0OiBpbnRlcnZhbC5sZWZ0LCBlbmQ6IGludGVydmFsLnJpZ2h0IH0pO1xuICBjb25zdCB5ID0gc2VjdG9yMWQocG9pbnQueSwgeyBzdGFydDogaW50ZXJ2YWwudG9wLCBlbmQ6IGludGVydmFsLmJvdHRvbSB9KTtcblxuICByZXR1cm4ge1xuICAgIFtTZWN0b3IxZC5CZWZvcmVdOiB7XG4gICAgICBbU2VjdG9yMWQuQmVmb3JlXTogU2VjdG9yMmQuVG9wTGVmdCxcbiAgICAgIFtTZWN0b3IxZC5JbnNpZGVdOiBTZWN0b3IyZC5MZWZ0LFxuICAgICAgW1NlY3RvcjFkLkFmdGVyXTogU2VjdG9yMmQuQm90dG9tTGVmdCxcbiAgICB9LFxuICAgIFtTZWN0b3IxZC5JbnNpZGVdOiB7XG4gICAgICBbU2VjdG9yMWQuQmVmb3JlXTogU2VjdG9yMmQuVG9wLFxuICAgICAgW1NlY3RvcjFkLkluc2lkZV06IFNlY3RvcjJkLkluc2lkZSxcbiAgICAgIFtTZWN0b3IxZC5BZnRlcl06IFNlY3RvcjJkLkJvdHRvbSxcbiAgICB9LFxuICAgIFtTZWN0b3IxZC5BZnRlcl06IHtcbiAgICAgIFtTZWN0b3IxZC5CZWZvcmVdOiBTZWN0b3IyZC5Ub3BSaWdodCxcbiAgICAgIFtTZWN0b3IxZC5JbnNpZGVdOiBTZWN0b3IyZC5SaWdodCxcbiAgICAgIFtTZWN0b3IxZC5BZnRlcl06IFNlY3RvcjJkLkJvdHRvbVJpZ2h0LFxuICAgIH0sXG4gIH1beF1beV07XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIk1BWFwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfbWF4LmRlZmF1bHQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiTklMXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9uaWwuZGVmYXVsdDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJwYXJzZVwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfcGFyc2UuZGVmYXVsdDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJzdHJpbmdpZnlcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX3N0cmluZ2lmeS5kZWZhdWx0O1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcInYxXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF92LmRlZmF1bHQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwidjFUb1Y2XCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF92MVRvVi5kZWZhdWx0O1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcInYzXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF92Mi5kZWZhdWx0O1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcInY0XCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF92My5kZWZhdWx0O1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcInY1XCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF92NC5kZWZhdWx0O1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcInY2XCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF92NS5kZWZhdWx0O1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcInY2VG9WMVwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfdjZUb1YuZGVmYXVsdDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJ2N1wiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfdjYuZGVmYXVsdDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJ2YWxpZGF0ZVwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfdmFsaWRhdGUuZGVmYXVsdDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJ2ZXJzaW9uXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF92ZXJzaW9uLmRlZmF1bHQ7XG4gIH1cbn0pO1xudmFyIF9tYXggPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL21heC5qc1wiKSk7XG52YXIgX25pbCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vbmlsLmpzXCIpKTtcbnZhciBfcGFyc2UgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3BhcnNlLmpzXCIpKTtcbnZhciBfc3RyaW5naWZ5ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9zdHJpbmdpZnkuanNcIikpO1xudmFyIF92ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi92MS5qc1wiKSk7XG52YXIgX3YxVG9WID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi92MVRvVjYuanNcIikpO1xudmFyIF92MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdjMuanNcIikpO1xudmFyIF92MyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdjQuanNcIikpO1xudmFyIF92NCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdjUuanNcIikpO1xudmFyIF92NSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdjYuanNcIikpO1xudmFyIF92NlRvViA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdjZUb1YxLmpzXCIpKTtcbnZhciBfdjYgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3Y3LmpzXCIpKTtcbnZhciBfdmFsaWRhdGUgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3ZhbGlkYXRlLmpzXCIpKTtcbnZhciBfdmVyc2lvbiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdmVyc2lvbi5qc1wiKSk7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KGUpIHsgcmV0dXJuIGUgJiYgZS5fX2VzTW9kdWxlID8gZSA6IHsgZGVmYXVsdDogZSB9OyB9IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgX2RlZmF1bHQgPSBleHBvcnRzLmRlZmF1bHQgPSAnZmZmZmZmZmYtZmZmZi1mZmZmLWZmZmYtZmZmZmZmZmZmZmZmJzsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbi8qXG4gKiBCcm93c2VyLWNvbXBhdGlibGUgSmF2YVNjcmlwdCBNRDVcbiAqXG4gKiBNb2RpZmljYXRpb24gb2YgSmF2YVNjcmlwdCBNRDVcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9ibHVlaW1wL0phdmFTY3JpcHQtTUQ1XG4gKlxuICogQ29weXJpZ2h0IDIwMTEsIFNlYmFzdGlhbiBUc2NoYW5cbiAqIGh0dHBzOi8vYmx1ZWltcC5uZXRcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2U6XG4gKiBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuICpcbiAqIEJhc2VkIG9uXG4gKiBBIEphdmFTY3JpcHQgaW1wbGVtZW50YXRpb24gb2YgdGhlIFJTQSBEYXRhIFNlY3VyaXR5LCBJbmMuIE1ENSBNZXNzYWdlXG4gKiBEaWdlc3QgQWxnb3JpdGhtLCBhcyBkZWZpbmVkIGluIFJGQyAxMzIxLlxuICogVmVyc2lvbiAyLjIgQ29weXJpZ2h0IChDKSBQYXVsIEpvaG5zdG9uIDE5OTkgLSAyMDA5XG4gKiBPdGhlciBjb250cmlidXRvcnM6IEdyZWcgSG9sdCwgQW5kcmV3IEtlcGVydCwgWWRuYXIsIExvc3RpbmV0XG4gKiBEaXN0cmlidXRlZCB1bmRlciB0aGUgQlNEIExpY2Vuc2VcbiAqIFNlZSBodHRwOi8vcGFqaG9tZS5vcmcudWsvY3J5cHQvbWQ1IGZvciBtb3JlIGluZm8uXG4gKi9cbmZ1bmN0aW9uIG1kNShieXRlcykge1xuICBpZiAodHlwZW9mIGJ5dGVzID09PSAnc3RyaW5nJykge1xuICAgIHZhciBtc2cgPSB1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoYnl0ZXMpKTsgLy8gVVRGOCBlc2NhcGVcblxuICAgIGJ5dGVzID0gbmV3IFVpbnQ4QXJyYXkobXNnLmxlbmd0aCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtc2cubGVuZ3RoOyArK2kpIHtcbiAgICAgIGJ5dGVzW2ldID0gbXNnLmNoYXJDb2RlQXQoaSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBtZDVUb0hleEVuY29kZWRBcnJheSh3b3Jkc1RvTWQ1KGJ5dGVzVG9Xb3JkcyhieXRlcyksIGJ5dGVzLmxlbmd0aCAqIDgpKTtcbn1cblxuLypcbiAqIENvbnZlcnQgYW4gYXJyYXkgb2YgbGl0dGxlLWVuZGlhbiB3b3JkcyB0byBhbiBhcnJheSBvZiBieXRlc1xuICovXG5mdW5jdGlvbiBtZDVUb0hleEVuY29kZWRBcnJheShpbnB1dCkge1xuICB2YXIgb3V0cHV0ID0gW107XG4gIHZhciBsZW5ndGgzMiA9IGlucHV0Lmxlbmd0aCAqIDMyO1xuICB2YXIgaGV4VGFiID0gJzAxMjM0NTY3ODlhYmNkZWYnO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDMyOyBpICs9IDgpIHtcbiAgICB2YXIgeCA9IGlucHV0W2kgPj4gNV0gPj4+IGkgJSAzMiAmIDB4ZmY7XG4gICAgdmFyIGhleCA9IHBhcnNlSW50KGhleFRhYi5jaGFyQXQoeCA+Pj4gNCAmIDB4MGYpICsgaGV4VGFiLmNoYXJBdCh4ICYgMHgwZiksIDE2KTtcbiAgICBvdXRwdXQucHVzaChoZXgpO1xuICB9XG4gIHJldHVybiBvdXRwdXQ7XG59XG5cbi8qKlxuICogQ2FsY3VsYXRlIG91dHB1dCBsZW5ndGggd2l0aCBwYWRkaW5nIGFuZCBiaXQgbGVuZ3RoXG4gKi9cbmZ1bmN0aW9uIGdldE91dHB1dExlbmd0aChpbnB1dExlbmd0aDgpIHtcbiAgcmV0dXJuIChpbnB1dExlbmd0aDggKyA2NCA+Pj4gOSA8PCA0KSArIDE0ICsgMTtcbn1cblxuLypcbiAqIENhbGN1bGF0ZSB0aGUgTUQ1IG9mIGFuIGFycmF5IG9mIGxpdHRsZS1lbmRpYW4gd29yZHMsIGFuZCBhIGJpdCBsZW5ndGguXG4gKi9cbmZ1bmN0aW9uIHdvcmRzVG9NZDUoeCwgbGVuKSB7XG4gIC8qIGFwcGVuZCBwYWRkaW5nICovXG4gIHhbbGVuID4+IDVdIHw9IDB4ODAgPDwgbGVuICUgMzI7XG4gIHhbZ2V0T3V0cHV0TGVuZ3RoKGxlbikgLSAxXSA9IGxlbjtcbiAgdmFyIGEgPSAxNzMyNTg0MTkzO1xuICB2YXIgYiA9IC0yNzE3MzM4Nzk7XG4gIHZhciBjID0gLTE3MzI1ODQxOTQ7XG4gIHZhciBkID0gMjcxNzMzODc4O1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHgubGVuZ3RoOyBpICs9IDE2KSB7XG4gICAgdmFyIG9sZGEgPSBhO1xuICAgIHZhciBvbGRiID0gYjtcbiAgICB2YXIgb2xkYyA9IGM7XG4gICAgdmFyIG9sZGQgPSBkO1xuICAgIGEgPSBtZDVmZihhLCBiLCBjLCBkLCB4W2ldLCA3LCAtNjgwODc2OTM2KTtcbiAgICBkID0gbWQ1ZmYoZCwgYSwgYiwgYywgeFtpICsgMV0sIDEyLCAtMzg5NTY0NTg2KTtcbiAgICBjID0gbWQ1ZmYoYywgZCwgYSwgYiwgeFtpICsgMl0sIDE3LCA2MDYxMDU4MTkpO1xuICAgIGIgPSBtZDVmZihiLCBjLCBkLCBhLCB4W2kgKyAzXSwgMjIsIC0xMDQ0NTI1MzMwKTtcbiAgICBhID0gbWQ1ZmYoYSwgYiwgYywgZCwgeFtpICsgNF0sIDcsIC0xNzY0MTg4OTcpO1xuICAgIGQgPSBtZDVmZihkLCBhLCBiLCBjLCB4W2kgKyA1XSwgMTIsIDEyMDAwODA0MjYpO1xuICAgIGMgPSBtZDVmZihjLCBkLCBhLCBiLCB4W2kgKyA2XSwgMTcsIC0xNDczMjMxMzQxKTtcbiAgICBiID0gbWQ1ZmYoYiwgYywgZCwgYSwgeFtpICsgN10sIDIyLCAtNDU3MDU5ODMpO1xuICAgIGEgPSBtZDVmZihhLCBiLCBjLCBkLCB4W2kgKyA4XSwgNywgMTc3MDAzNTQxNik7XG4gICAgZCA9IG1kNWZmKGQsIGEsIGIsIGMsIHhbaSArIDldLCAxMiwgLTE5NTg0MTQ0MTcpO1xuICAgIGMgPSBtZDVmZihjLCBkLCBhLCBiLCB4W2kgKyAxMF0sIDE3LCAtNDIwNjMpO1xuICAgIGIgPSBtZDVmZihiLCBjLCBkLCBhLCB4W2kgKyAxMV0sIDIyLCAtMTk5MDQwNDE2Mik7XG4gICAgYSA9IG1kNWZmKGEsIGIsIGMsIGQsIHhbaSArIDEyXSwgNywgMTgwNDYwMzY4Mik7XG4gICAgZCA9IG1kNWZmKGQsIGEsIGIsIGMsIHhbaSArIDEzXSwgMTIsIC00MDM0MTEwMSk7XG4gICAgYyA9IG1kNWZmKGMsIGQsIGEsIGIsIHhbaSArIDE0XSwgMTcsIC0xNTAyMDAyMjkwKTtcbiAgICBiID0gbWQ1ZmYoYiwgYywgZCwgYSwgeFtpICsgMTVdLCAyMiwgMTIzNjUzNTMyOSk7XG4gICAgYSA9IG1kNWdnKGEsIGIsIGMsIGQsIHhbaSArIDFdLCA1LCAtMTY1Nzk2NTEwKTtcbiAgICBkID0gbWQ1Z2coZCwgYSwgYiwgYywgeFtpICsgNl0sIDksIC0xMDY5NTAxNjMyKTtcbiAgICBjID0gbWQ1Z2coYywgZCwgYSwgYiwgeFtpICsgMTFdLCAxNCwgNjQzNzE3NzEzKTtcbiAgICBiID0gbWQ1Z2coYiwgYywgZCwgYSwgeFtpXSwgMjAsIC0zNzM4OTczMDIpO1xuICAgIGEgPSBtZDVnZyhhLCBiLCBjLCBkLCB4W2kgKyA1XSwgNSwgLTcwMTU1ODY5MSk7XG4gICAgZCA9IG1kNWdnKGQsIGEsIGIsIGMsIHhbaSArIDEwXSwgOSwgMzgwMTYwODMpO1xuICAgIGMgPSBtZDVnZyhjLCBkLCBhLCBiLCB4W2kgKyAxNV0sIDE0LCAtNjYwNDc4MzM1KTtcbiAgICBiID0gbWQ1Z2coYiwgYywgZCwgYSwgeFtpICsgNF0sIDIwLCAtNDA1NTM3ODQ4KTtcbiAgICBhID0gbWQ1Z2coYSwgYiwgYywgZCwgeFtpICsgOV0sIDUsIDU2ODQ0NjQzOCk7XG4gICAgZCA9IG1kNWdnKGQsIGEsIGIsIGMsIHhbaSArIDE0XSwgOSwgLTEwMTk4MDM2OTApO1xuICAgIGMgPSBtZDVnZyhjLCBkLCBhLCBiLCB4W2kgKyAzXSwgMTQsIC0xODczNjM5NjEpO1xuICAgIGIgPSBtZDVnZyhiLCBjLCBkLCBhLCB4W2kgKyA4XSwgMjAsIDExNjM1MzE1MDEpO1xuICAgIGEgPSBtZDVnZyhhLCBiLCBjLCBkLCB4W2kgKyAxM10sIDUsIC0xNDQ0NjgxNDY3KTtcbiAgICBkID0gbWQ1Z2coZCwgYSwgYiwgYywgeFtpICsgMl0sIDksIC01MTQwMzc4NCk7XG4gICAgYyA9IG1kNWdnKGMsIGQsIGEsIGIsIHhbaSArIDddLCAxNCwgMTczNTMyODQ3Myk7XG4gICAgYiA9IG1kNWdnKGIsIGMsIGQsIGEsIHhbaSArIDEyXSwgMjAsIC0xOTI2NjA3NzM0KTtcbiAgICBhID0gbWQ1aGgoYSwgYiwgYywgZCwgeFtpICsgNV0sIDQsIC0zNzg1NTgpO1xuICAgIGQgPSBtZDVoaChkLCBhLCBiLCBjLCB4W2kgKyA4XSwgMTEsIC0yMDIyNTc0NDYzKTtcbiAgICBjID0gbWQ1aGgoYywgZCwgYSwgYiwgeFtpICsgMTFdLCAxNiwgMTgzOTAzMDU2Mik7XG4gICAgYiA9IG1kNWhoKGIsIGMsIGQsIGEsIHhbaSArIDE0XSwgMjMsIC0zNTMwOTU1Nik7XG4gICAgYSA9IG1kNWhoKGEsIGIsIGMsIGQsIHhbaSArIDFdLCA0LCAtMTUzMDk5MjA2MCk7XG4gICAgZCA9IG1kNWhoKGQsIGEsIGIsIGMsIHhbaSArIDRdLCAxMSwgMTI3Mjg5MzM1Myk7XG4gICAgYyA9IG1kNWhoKGMsIGQsIGEsIGIsIHhbaSArIDddLCAxNiwgLTE1NTQ5NzYzMik7XG4gICAgYiA9IG1kNWhoKGIsIGMsIGQsIGEsIHhbaSArIDEwXSwgMjMsIC0xMDk0NzMwNjQwKTtcbiAgICBhID0gbWQ1aGgoYSwgYiwgYywgZCwgeFtpICsgMTNdLCA0LCA2ODEyNzkxNzQpO1xuICAgIGQgPSBtZDVoaChkLCBhLCBiLCBjLCB4W2ldLCAxMSwgLTM1ODUzNzIyMik7XG4gICAgYyA9IG1kNWhoKGMsIGQsIGEsIGIsIHhbaSArIDNdLCAxNiwgLTcyMjUyMTk3OSk7XG4gICAgYiA9IG1kNWhoKGIsIGMsIGQsIGEsIHhbaSArIDZdLCAyMywgNzYwMjkxODkpO1xuICAgIGEgPSBtZDVoaChhLCBiLCBjLCBkLCB4W2kgKyA5XSwgNCwgLTY0MDM2NDQ4Nyk7XG4gICAgZCA9IG1kNWhoKGQsIGEsIGIsIGMsIHhbaSArIDEyXSwgMTEsIC00MjE4MTU4MzUpO1xuICAgIGMgPSBtZDVoaChjLCBkLCBhLCBiLCB4W2kgKyAxNV0sIDE2LCA1MzA3NDI1MjApO1xuICAgIGIgPSBtZDVoaChiLCBjLCBkLCBhLCB4W2kgKyAyXSwgMjMsIC05OTUzMzg2NTEpO1xuICAgIGEgPSBtZDVpaShhLCBiLCBjLCBkLCB4W2ldLCA2LCAtMTk4NjMwODQ0KTtcbiAgICBkID0gbWQ1aWkoZCwgYSwgYiwgYywgeFtpICsgN10sIDEwLCAxMTI2ODkxNDE1KTtcbiAgICBjID0gbWQ1aWkoYywgZCwgYSwgYiwgeFtpICsgMTRdLCAxNSwgLTE0MTYzNTQ5MDUpO1xuICAgIGIgPSBtZDVpaShiLCBjLCBkLCBhLCB4W2kgKyA1XSwgMjEsIC01NzQzNDA1NSk7XG4gICAgYSA9IG1kNWlpKGEsIGIsIGMsIGQsIHhbaSArIDEyXSwgNiwgMTcwMDQ4NTU3MSk7XG4gICAgZCA9IG1kNWlpKGQsIGEsIGIsIGMsIHhbaSArIDNdLCAxMCwgLTE4OTQ5ODY2MDYpO1xuICAgIGMgPSBtZDVpaShjLCBkLCBhLCBiLCB4W2kgKyAxMF0sIDE1LCAtMTA1MTUyMyk7XG4gICAgYiA9IG1kNWlpKGIsIGMsIGQsIGEsIHhbaSArIDFdLCAyMSwgLTIwNTQ5MjI3OTkpO1xuICAgIGEgPSBtZDVpaShhLCBiLCBjLCBkLCB4W2kgKyA4XSwgNiwgMTg3MzMxMzM1OSk7XG4gICAgZCA9IG1kNWlpKGQsIGEsIGIsIGMsIHhbaSArIDE1XSwgMTAsIC0zMDYxMTc0NCk7XG4gICAgYyA9IG1kNWlpKGMsIGQsIGEsIGIsIHhbaSArIDZdLCAxNSwgLTE1NjAxOTgzODApO1xuICAgIGIgPSBtZDVpaShiLCBjLCBkLCBhLCB4W2kgKyAxM10sIDIxLCAxMzA5MTUxNjQ5KTtcbiAgICBhID0gbWQ1aWkoYSwgYiwgYywgZCwgeFtpICsgNF0sIDYsIC0xNDU1MjMwNzApO1xuICAgIGQgPSBtZDVpaShkLCBhLCBiLCBjLCB4W2kgKyAxMV0sIDEwLCAtMTEyMDIxMDM3OSk7XG4gICAgYyA9IG1kNWlpKGMsIGQsIGEsIGIsIHhbaSArIDJdLCAxNSwgNzE4Nzg3MjU5KTtcbiAgICBiID0gbWQ1aWkoYiwgYywgZCwgYSwgeFtpICsgOV0sIDIxLCAtMzQzNDg1NTUxKTtcbiAgICBhID0gc2FmZUFkZChhLCBvbGRhKTtcbiAgICBiID0gc2FmZUFkZChiLCBvbGRiKTtcbiAgICBjID0gc2FmZUFkZChjLCBvbGRjKTtcbiAgICBkID0gc2FmZUFkZChkLCBvbGRkKTtcbiAgfVxuICByZXR1cm4gW2EsIGIsIGMsIGRdO1xufVxuXG4vKlxuICogQ29udmVydCBhbiBhcnJheSBieXRlcyB0byBhbiBhcnJheSBvZiBsaXR0bGUtZW5kaWFuIHdvcmRzXG4gKiBDaGFyYWN0ZXJzID4yNTUgaGF2ZSB0aGVpciBoaWdoLWJ5dGUgc2lsZW50bHkgaWdub3JlZC5cbiAqL1xuZnVuY3Rpb24gYnl0ZXNUb1dvcmRzKGlucHV0KSB7XG4gIGlmIChpbnB1dC5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gW107XG4gIH1cbiAgdmFyIGxlbmd0aDggPSBpbnB1dC5sZW5ndGggKiA4O1xuICB2YXIgb3V0cHV0ID0gbmV3IFVpbnQzMkFycmF5KGdldE91dHB1dExlbmd0aChsZW5ndGg4KSk7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoODsgaSArPSA4KSB7XG4gICAgb3V0cHV0W2kgPj4gNV0gfD0gKGlucHV0W2kgLyA4XSAmIDB4ZmYpIDw8IGkgJSAzMjtcbiAgfVxuICByZXR1cm4gb3V0cHV0O1xufVxuXG4vKlxuICogQWRkIGludGVnZXJzLCB3cmFwcGluZyBhdCAyXjMyLiBUaGlzIHVzZXMgMTYtYml0IG9wZXJhdGlvbnMgaW50ZXJuYWxseVxuICogdG8gd29yayBhcm91bmQgYnVncyBpbiBzb21lIEpTIGludGVycHJldGVycy5cbiAqL1xuZnVuY3Rpb24gc2FmZUFkZCh4LCB5KSB7XG4gIHZhciBsc3cgPSAoeCAmIDB4ZmZmZikgKyAoeSAmIDB4ZmZmZik7XG4gIHZhciBtc3cgPSAoeCA+PiAxNikgKyAoeSA+PiAxNikgKyAobHN3ID4+IDE2KTtcbiAgcmV0dXJuIG1zdyA8PCAxNiB8IGxzdyAmIDB4ZmZmZjtcbn1cblxuLypcbiAqIEJpdHdpc2Ugcm90YXRlIGEgMzItYml0IG51bWJlciB0byB0aGUgbGVmdC5cbiAqL1xuZnVuY3Rpb24gYml0Um90YXRlTGVmdChudW0sIGNudCkge1xuICByZXR1cm4gbnVtIDw8IGNudCB8IG51bSA+Pj4gMzIgLSBjbnQ7XG59XG5cbi8qXG4gKiBUaGVzZSBmdW5jdGlvbnMgaW1wbGVtZW50IHRoZSBmb3VyIGJhc2ljIG9wZXJhdGlvbnMgdGhlIGFsZ29yaXRobSB1c2VzLlxuICovXG5mdW5jdGlvbiBtZDVjbW4ocSwgYSwgYiwgeCwgcywgdCkge1xuICByZXR1cm4gc2FmZUFkZChiaXRSb3RhdGVMZWZ0KHNhZmVBZGQoc2FmZUFkZChhLCBxKSwgc2FmZUFkZCh4LCB0KSksIHMpLCBiKTtcbn1cbmZ1bmN0aW9uIG1kNWZmKGEsIGIsIGMsIGQsIHgsIHMsIHQpIHtcbiAgcmV0dXJuIG1kNWNtbihiICYgYyB8IH5iICYgZCwgYSwgYiwgeCwgcywgdCk7XG59XG5mdW5jdGlvbiBtZDVnZyhhLCBiLCBjLCBkLCB4LCBzLCB0KSB7XG4gIHJldHVybiBtZDVjbW4oYiAmIGQgfCBjICYgfmQsIGEsIGIsIHgsIHMsIHQpO1xufVxuZnVuY3Rpb24gbWQ1aGgoYSwgYiwgYywgZCwgeCwgcywgdCkge1xuICByZXR1cm4gbWQ1Y21uKGIgXiBjIF4gZCwgYSwgYiwgeCwgcywgdCk7XG59XG5mdW5jdGlvbiBtZDVpaShhLCBiLCBjLCBkLCB4LCBzLCB0KSB7XG4gIHJldHVybiBtZDVjbW4oYyBeIChiIHwgfmQpLCBhLCBiLCB4LCBzLCB0KTtcbn1cbnZhciBfZGVmYXVsdCA9IGV4cG9ydHMuZGVmYXVsdCA9IG1kNTsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciByYW5kb21VVUlEID0gdHlwZW9mIGNyeXB0byAhPT0gJ3VuZGVmaW5lZCcgJiYgY3J5cHRvLnJhbmRvbVVVSUQgJiYgY3J5cHRvLnJhbmRvbVVVSUQuYmluZChjcnlwdG8pO1xudmFyIF9kZWZhdWx0ID0gZXhwb3J0cy5kZWZhdWx0ID0ge1xuICByYW5kb21VVUlEXG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIF9kZWZhdWx0ID0gZXhwb3J0cy5kZWZhdWx0ID0gJzAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMCc7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgX3ZhbGlkYXRlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi92YWxpZGF0ZS5qc1wiKSk7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KGUpIHsgcmV0dXJuIGUgJiYgZS5fX2VzTW9kdWxlID8gZSA6IHsgZGVmYXVsdDogZSB9OyB9XG5mdW5jdGlvbiBwYXJzZSh1dWlkKSB7XG4gIGlmICghKDAsIF92YWxpZGF0ZS5kZWZhdWx0KSh1dWlkKSkge1xuICAgIHRocm93IFR5cGVFcnJvcignSW52YWxpZCBVVUlEJyk7XG4gIH1cbiAgdmFyIHY7XG4gIHZhciBhcnIgPSBuZXcgVWludDhBcnJheSgxNik7XG5cbiAgLy8gUGFyc2UgIyMjIyMjIyMtLi4uLi0uLi4uLS4uLi4tLi4uLi4uLi4uLi4uXG4gIGFyclswXSA9ICh2ID0gcGFyc2VJbnQodXVpZC5zbGljZSgwLCA4KSwgMTYpKSA+Pj4gMjQ7XG4gIGFyclsxXSA9IHYgPj4+IDE2ICYgMHhmZjtcbiAgYXJyWzJdID0gdiA+Pj4gOCAmIDB4ZmY7XG4gIGFyclszXSA9IHYgJiAweGZmO1xuXG4gIC8vIFBhcnNlIC4uLi4uLi4uLSMjIyMtLi4uLi0uLi4uLS4uLi4uLi4uLi4uLlxuICBhcnJbNF0gPSAodiA9IHBhcnNlSW50KHV1aWQuc2xpY2UoOSwgMTMpLCAxNikpID4+PiA4O1xuICBhcnJbNV0gPSB2ICYgMHhmZjtcblxuICAvLyBQYXJzZSAuLi4uLi4uLi0uLi4uLSMjIyMtLi4uLi0uLi4uLi4uLi4uLi5cbiAgYXJyWzZdID0gKHYgPSBwYXJzZUludCh1dWlkLnNsaWNlKDE0LCAxOCksIDE2KSkgPj4+IDg7XG4gIGFycls3XSA9IHYgJiAweGZmO1xuXG4gIC8vIFBhcnNlIC4uLi4uLi4uLS4uLi4tLi4uLi0jIyMjLS4uLi4uLi4uLi4uLlxuICBhcnJbOF0gPSAodiA9IHBhcnNlSW50KHV1aWQuc2xpY2UoMTksIDIzKSwgMTYpKSA+Pj4gODtcbiAgYXJyWzldID0gdiAmIDB4ZmY7XG5cbiAgLy8gUGFyc2UgLi4uLi4uLi4tLi4uLi0uLi4uLS4uLi4tIyMjIyMjIyMjIyMjXG4gIC8vIChVc2UgXCIvXCIgdG8gYXZvaWQgMzItYml0IHRydW5jYXRpb24gd2hlbiBiaXQtc2hpZnRpbmcgaGlnaC1vcmRlciBieXRlcylcbiAgYXJyWzEwXSA9ICh2ID0gcGFyc2VJbnQodXVpZC5zbGljZSgyNCwgMzYpLCAxNikpIC8gMHgxMDAwMDAwMDAwMCAmIDB4ZmY7XG4gIGFyclsxMV0gPSB2IC8gMHgxMDAwMDAwMDAgJiAweGZmO1xuICBhcnJbMTJdID0gdiA+Pj4gMjQgJiAweGZmO1xuICBhcnJbMTNdID0gdiA+Pj4gMTYgJiAweGZmO1xuICBhcnJbMTRdID0gdiA+Pj4gOCAmIDB4ZmY7XG4gIGFyclsxNV0gPSB2ICYgMHhmZjtcbiAgcmV0dXJuIGFycjtcbn1cbnZhciBfZGVmYXVsdCA9IGV4cG9ydHMuZGVmYXVsdCA9IHBhcnNlOyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIF9kZWZhdWx0ID0gZXhwb3J0cy5kZWZhdWx0ID0gL14oPzpbMC05YS1mXXs4fS1bMC05YS1mXXs0fS1bMS04XVswLTlhLWZdezN9LVs4OWFiXVswLTlhLWZdezN9LVswLTlhLWZdezEyfXwwMDAwMDAwMC0wMDAwLTAwMDAtMDAwMC0wMDAwMDAwMDAwMDB8ZmZmZmZmZmYtZmZmZi1mZmZmLWZmZmYtZmZmZmZmZmZmZmZmKSQvaTsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHJuZztcbi8vIFVuaXF1ZSBJRCBjcmVhdGlvbiByZXF1aXJlcyBhIGhpZ2ggcXVhbGl0eSByYW5kb20gIyBnZW5lcmF0b3IuIEluIHRoZSBicm93c2VyIHdlIHRoZXJlZm9yZVxuLy8gcmVxdWlyZSB0aGUgY3J5cHRvIEFQSSBhbmQgZG8gbm90IHN1cHBvcnQgYnVpbHQtaW4gZmFsbGJhY2sgdG8gbG93ZXIgcXVhbGl0eSByYW5kb20gbnVtYmVyXG4vLyBnZW5lcmF0b3JzIChsaWtlIE1hdGgucmFuZG9tKCkpLlxuXG52YXIgZ2V0UmFuZG9tVmFsdWVzO1xudmFyIHJuZHM4ID0gbmV3IFVpbnQ4QXJyYXkoMTYpO1xuZnVuY3Rpb24gcm5nKCkge1xuICAvLyBsYXp5IGxvYWQgc28gdGhhdCBlbnZpcm9ubWVudHMgdGhhdCBuZWVkIHRvIHBvbHlmaWxsIGhhdmUgYSBjaGFuY2UgdG8gZG8gc29cbiAgaWYgKCFnZXRSYW5kb21WYWx1ZXMpIHtcbiAgICAvLyBnZXRSYW5kb21WYWx1ZXMgbmVlZHMgdG8gYmUgaW52b2tlZCBpbiBhIGNvbnRleHQgd2hlcmUgXCJ0aGlzXCIgaXMgYSBDcnlwdG8gaW1wbGVtZW50YXRpb24uXG4gICAgZ2V0UmFuZG9tVmFsdWVzID0gdHlwZW9mIGNyeXB0byAhPT0gJ3VuZGVmaW5lZCcgJiYgY3J5cHRvLmdldFJhbmRvbVZhbHVlcyAmJiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzLmJpbmQoY3J5cHRvKTtcbiAgICBpZiAoIWdldFJhbmRvbVZhbHVlcykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKCkgbm90IHN1cHBvcnRlZC4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS91dWlkanMvdXVpZCNnZXRyYW5kb212YWx1ZXMtbm90LXN1cHBvcnRlZCcpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZ2V0UmFuZG9tVmFsdWVzKHJuZHM4KTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbi8vIEFkYXB0ZWQgZnJvbSBDaHJpcyBWZW5lc3MnIFNIQTEgY29kZSBhdFxuLy8gaHR0cDovL3d3dy5tb3ZhYmxlLXR5cGUuY28udWsvc2NyaXB0cy9zaGExLmh0bWxcbmZ1bmN0aW9uIGYocywgeCwgeSwgeikge1xuICBzd2l0Y2ggKHMpIHtcbiAgICBjYXNlIDA6XG4gICAgICByZXR1cm4geCAmIHkgXiB+eCAmIHo7XG4gICAgY2FzZSAxOlxuICAgICAgcmV0dXJuIHggXiB5IF4gejtcbiAgICBjYXNlIDI6XG4gICAgICByZXR1cm4geCAmIHkgXiB4ICYgeiBeIHkgJiB6O1xuICAgIGNhc2UgMzpcbiAgICAgIHJldHVybiB4IF4geSBeIHo7XG4gIH1cbn1cbmZ1bmN0aW9uIFJPVEwoeCwgbikge1xuICByZXR1cm4geCA8PCBuIHwgeCA+Pj4gMzIgLSBuO1xufVxuZnVuY3Rpb24gc2hhMShieXRlcykge1xuICB2YXIgSyA9IFsweDVhODI3OTk5LCAweDZlZDllYmExLCAweDhmMWJiY2RjLCAweGNhNjJjMWQ2XTtcbiAgdmFyIEggPSBbMHg2NzQ1MjMwMSwgMHhlZmNkYWI4OSwgMHg5OGJhZGNmZSwgMHgxMDMyNTQ3NiwgMHhjM2QyZTFmMF07XG4gIGlmICh0eXBlb2YgYnl0ZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgdmFyIG1zZyA9IHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChieXRlcykpOyAvLyBVVEY4IGVzY2FwZVxuXG4gICAgYnl0ZXMgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG1zZy5sZW5ndGg7ICsraSkge1xuICAgICAgYnl0ZXMucHVzaChtc2cuY2hhckNvZGVBdChpKSk7XG4gICAgfVxuICB9IGVsc2UgaWYgKCFBcnJheS5pc0FycmF5KGJ5dGVzKSkge1xuICAgIC8vIENvbnZlcnQgQXJyYXktbGlrZSB0byBBcnJheVxuICAgIGJ5dGVzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYnl0ZXMpO1xuICB9XG4gIGJ5dGVzLnB1c2goMHg4MCk7XG4gIHZhciBsID0gYnl0ZXMubGVuZ3RoIC8gNCArIDI7XG4gIHZhciBOID0gTWF0aC5jZWlsKGwgLyAxNik7XG4gIHZhciBNID0gbmV3IEFycmF5KE4pO1xuICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgTjsgKytfaSkge1xuICAgIHZhciBhcnIgPSBuZXcgVWludDMyQXJyYXkoMTYpO1xuICAgIGZvciAodmFyIGogPSAwOyBqIDwgMTY7ICsraikge1xuICAgICAgYXJyW2pdID0gYnl0ZXNbX2kgKiA2NCArIGogKiA0XSA8PCAyNCB8IGJ5dGVzW19pICogNjQgKyBqICogNCArIDFdIDw8IDE2IHwgYnl0ZXNbX2kgKiA2NCArIGogKiA0ICsgMl0gPDwgOCB8IGJ5dGVzW19pICogNjQgKyBqICogNCArIDNdO1xuICAgIH1cbiAgICBNW19pXSA9IGFycjtcbiAgfVxuICBNW04gLSAxXVsxNF0gPSAoYnl0ZXMubGVuZ3RoIC0gMSkgKiA4IC8gTWF0aC5wb3coMiwgMzIpO1xuICBNW04gLSAxXVsxNF0gPSBNYXRoLmZsb29yKE1bTiAtIDFdWzE0XSk7XG4gIE1bTiAtIDFdWzE1XSA9IChieXRlcy5sZW5ndGggLSAxKSAqIDggJiAweGZmZmZmZmZmO1xuICBmb3IgKHZhciBfaTIgPSAwOyBfaTIgPCBOOyArK19pMikge1xuICAgIHZhciBXID0gbmV3IFVpbnQzMkFycmF5KDgwKTtcbiAgICBmb3IgKHZhciB0ID0gMDsgdCA8IDE2OyArK3QpIHtcbiAgICAgIFdbdF0gPSBNW19pMl1bdF07XG4gICAgfVxuICAgIGZvciAodmFyIF90ID0gMTY7IF90IDwgODA7ICsrX3QpIHtcbiAgICAgIFdbX3RdID0gUk9UTChXW190IC0gM10gXiBXW190IC0gOF0gXiBXW190IC0gMTRdIF4gV1tfdCAtIDE2XSwgMSk7XG4gICAgfVxuICAgIHZhciBhID0gSFswXTtcbiAgICB2YXIgYiA9IEhbMV07XG4gICAgdmFyIGMgPSBIWzJdO1xuICAgIHZhciBkID0gSFszXTtcbiAgICB2YXIgZSA9IEhbNF07XG4gICAgZm9yICh2YXIgX3QyID0gMDsgX3QyIDwgODA7ICsrX3QyKSB7XG4gICAgICB2YXIgcyA9IE1hdGguZmxvb3IoX3QyIC8gMjApO1xuICAgICAgdmFyIFQgPSBST1RMKGEsIDUpICsgZihzLCBiLCBjLCBkKSArIGUgKyBLW3NdICsgV1tfdDJdID4+PiAwO1xuICAgICAgZSA9IGQ7XG4gICAgICBkID0gYztcbiAgICAgIGMgPSBST1RMKGIsIDMwKSA+Pj4gMDtcbiAgICAgIGIgPSBhO1xuICAgICAgYSA9IFQ7XG4gICAgfVxuICAgIEhbMF0gPSBIWzBdICsgYSA+Pj4gMDtcbiAgICBIWzFdID0gSFsxXSArIGIgPj4+IDA7XG4gICAgSFsyXSA9IEhbMl0gKyBjID4+PiAwO1xuICAgIEhbM10gPSBIWzNdICsgZCA+Pj4gMDtcbiAgICBIWzRdID0gSFs0XSArIGUgPj4+IDA7XG4gIH1cbiAgcmV0dXJuIFtIWzBdID4+IDI0ICYgMHhmZiwgSFswXSA+PiAxNiAmIDB4ZmYsIEhbMF0gPj4gOCAmIDB4ZmYsIEhbMF0gJiAweGZmLCBIWzFdID4+IDI0ICYgMHhmZiwgSFsxXSA+PiAxNiAmIDB4ZmYsIEhbMV0gPj4gOCAmIDB4ZmYsIEhbMV0gJiAweGZmLCBIWzJdID4+IDI0ICYgMHhmZiwgSFsyXSA+PiAxNiAmIDB4ZmYsIEhbMl0gPj4gOCAmIDB4ZmYsIEhbMl0gJiAweGZmLCBIWzNdID4+IDI0ICYgMHhmZiwgSFszXSA+PiAxNiAmIDB4ZmYsIEhbM10gPj4gOCAmIDB4ZmYsIEhbM10gJiAweGZmLCBIWzRdID4+IDI0ICYgMHhmZiwgSFs0XSA+PiAxNiAmIDB4ZmYsIEhbNF0gPj4gOCAmIDB4ZmYsIEhbNF0gJiAweGZmXTtcbn1cbnZhciBfZGVmYXVsdCA9IGV4cG9ydHMuZGVmYXVsdCA9IHNoYTE7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5leHBvcnRzLnVuc2FmZVN0cmluZ2lmeSA9IHVuc2FmZVN0cmluZ2lmeTtcbnZhciBfdmFsaWRhdGUgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3ZhbGlkYXRlLmpzXCIpKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoZSkgeyByZXR1cm4gZSAmJiBlLl9fZXNNb2R1bGUgPyBlIDogeyBkZWZhdWx0OiBlIH07IH1cbi8qKlxuICogQ29udmVydCBhcnJheSBvZiAxNiBieXRlIHZhbHVlcyB0byBVVUlEIHN0cmluZyBmb3JtYXQgb2YgdGhlIGZvcm06XG4gKiBYWFhYWFhYWC1YWFhYLVhYWFgtWFhYWC1YWFhYWFhYWFhYWFhcbiAqL1xudmFyIGJ5dGVUb0hleCA9IFtdO1xuZm9yICh2YXIgaSA9IDA7IGkgPCAyNTY7ICsraSkge1xuICBieXRlVG9IZXgucHVzaCgoaSArIDB4MTAwKS50b1N0cmluZygxNikuc2xpY2UoMSkpO1xufVxuZnVuY3Rpb24gdW5zYWZlU3RyaW5naWZ5KGFyciwgb2Zmc2V0ID0gMCkge1xuICAvLyBOb3RlOiBCZSBjYXJlZnVsIGVkaXRpbmcgdGhpcyBjb2RlISAgSXQncyBiZWVuIHR1bmVkIGZvciBwZXJmb3JtYW5jZVxuICAvLyBhbmQgd29ya3MgaW4gd2F5cyB5b3UgbWF5IG5vdCBleHBlY3QuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdXVpZGpzL3V1aWQvcHVsbC80MzRcbiAgLy9cbiAgLy8gTm90ZSB0byBmdXR1cmUtc2VsZjogTm8sIHlvdSBjYW4ndCByZW1vdmUgdGhlIGB0b0xvd2VyQ2FzZSgpYCBjYWxsLlxuICAvLyBSRUY6IGh0dHBzOi8vZ2l0aHViLmNvbS91dWlkanMvdXVpZC9wdWxsLzY3NyNpc3N1ZWNvbW1lbnQtMTc1NzM1MTM1MVxuICByZXR1cm4gKGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDJdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgM11dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA0XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDVdXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNl1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA3XV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDhdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgOV1dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMV1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMl1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxM11dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxNF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxNV1dKS50b0xvd2VyQ2FzZSgpO1xufVxuZnVuY3Rpb24gc3RyaW5naWZ5KGFyciwgb2Zmc2V0ID0gMCkge1xuICB2YXIgdXVpZCA9IHVuc2FmZVN0cmluZ2lmeShhcnIsIG9mZnNldCk7XG4gIC8vIENvbnNpc3RlbmN5IGNoZWNrIGZvciB2YWxpZCBVVUlELiAgSWYgdGhpcyB0aHJvd3MsIGl0J3MgbGlrZWx5IGR1ZSB0byBvbmVcbiAgLy8gb2YgdGhlIGZvbGxvd2luZzpcbiAgLy8gLSBPbmUgb3IgbW9yZSBpbnB1dCBhcnJheSB2YWx1ZXMgZG9uJ3QgbWFwIHRvIGEgaGV4IG9jdGV0IChsZWFkaW5nIHRvXG4gIC8vIFwidW5kZWZpbmVkXCIgaW4gdGhlIHV1aWQpXG4gIC8vIC0gSW52YWxpZCBpbnB1dCB2YWx1ZXMgZm9yIHRoZSBSRkMgYHZlcnNpb25gIG9yIGB2YXJpYW50YCBmaWVsZHNcbiAgaWYgKCEoMCwgX3ZhbGlkYXRlLmRlZmF1bHQpKHV1aWQpKSB7XG4gICAgdGhyb3cgVHlwZUVycm9yKCdTdHJpbmdpZmllZCBVVUlEIGlzIGludmFsaWQnKTtcbiAgfVxuICByZXR1cm4gdXVpZDtcbn1cbnZhciBfZGVmYXVsdCA9IGV4cG9ydHMuZGVmYXVsdCA9IHN0cmluZ2lmeTsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfcm5nID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9ybmcuanNcIikpO1xudmFyIF9zdHJpbmdpZnkgPSByZXF1aXJlKFwiLi9zdHJpbmdpZnkuanNcIik7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KGUpIHsgcmV0dXJuIGUgJiYgZS5fX2VzTW9kdWxlID8gZSA6IHsgZGVmYXVsdDogZSB9OyB9XG4vLyAqKmB2MSgpYCAtIEdlbmVyYXRlIHRpbWUtYmFzZWQgVVVJRCoqXG4vL1xuLy8gSW5zcGlyZWQgYnkgaHR0cHM6Ly9naXRodWIuY29tL0xpb3NLL1VVSUQuanNcbi8vIGFuZCBodHRwOi8vZG9jcy5weXRob24ub3JnL2xpYnJhcnkvdXVpZC5odG1sXG5cbnZhciBfbm9kZUlkO1xudmFyIF9jbG9ja3NlcTtcblxuLy8gUHJldmlvdXMgdXVpZCBjcmVhdGlvbiB0aW1lXG52YXIgX2xhc3RNU2VjcyA9IDA7XG52YXIgX2xhc3ROU2VjcyA9IDA7XG5cbi8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdXVpZGpzL3V1aWQgZm9yIEFQSSBkZXRhaWxzXG5mdW5jdGlvbiB2MShvcHRpb25zLCBidWYsIG9mZnNldCkge1xuICB2YXIgaSA9IGJ1ZiAmJiBvZmZzZXQgfHwgMDtcbiAgdmFyIGIgPSBidWYgfHwgbmV3IEFycmF5KDE2KTtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIHZhciBub2RlID0gb3B0aW9ucy5ub2RlO1xuICB2YXIgY2xvY2tzZXEgPSBvcHRpb25zLmNsb2Nrc2VxO1xuXG4gIC8vIHYxIG9ubHk6IFVzZSBjYWNoZWQgYG5vZGVgIGFuZCBgY2xvY2tzZXFgIHZhbHVlc1xuICBpZiAoIW9wdGlvbnMuX3Y2KSB7XG4gICAgaWYgKCFub2RlKSB7XG4gICAgICBub2RlID0gX25vZGVJZDtcbiAgICB9XG4gICAgaWYgKGNsb2Nrc2VxID09IG51bGwpIHtcbiAgICAgIGNsb2Nrc2VxID0gX2Nsb2Nrc2VxO1xuICAgIH1cbiAgfVxuXG4gIC8vIEhhbmRsZSBjYXNlcyB3aGVyZSB3ZSBuZWVkIGVudHJvcHkuICBXZSBkbyB0aGlzIGxhemlseSB0byBtaW5pbWl6ZSBpc3N1ZXNcbiAgLy8gcmVsYXRlZCB0byBpbnN1ZmZpY2llbnQgc3lzdGVtIGVudHJvcHkuICBTZWUgIzE4OVxuICBpZiAobm9kZSA9PSBudWxsIHx8IGNsb2Nrc2VxID09IG51bGwpIHtcbiAgICB2YXIgc2VlZEJ5dGVzID0gb3B0aW9ucy5yYW5kb20gfHwgKG9wdGlvbnMucm5nIHx8IF9ybmcuZGVmYXVsdCkoKTtcblxuICAgIC8vIFJhbmRvbWl6ZSBub2RlXG4gICAgaWYgKG5vZGUgPT0gbnVsbCkge1xuICAgICAgbm9kZSA9IFtzZWVkQnl0ZXNbMF0sIHNlZWRCeXRlc1sxXSwgc2VlZEJ5dGVzWzJdLCBzZWVkQnl0ZXNbM10sIHNlZWRCeXRlc1s0XSwgc2VlZEJ5dGVzWzVdXTtcblxuICAgICAgLy8gdjEgb25seTogY2FjaGUgbm9kZSB2YWx1ZSBmb3IgcmV1c2VcbiAgICAgIGlmICghX25vZGVJZCAmJiAhb3B0aW9ucy5fdjYpIHtcbiAgICAgICAgLy8gcGVyIFJGQzQxMjIgNC41OiBTZXQgTUFDIG11bHRpY2FzdCBiaXQgKHYxIG9ubHkpXG4gICAgICAgIG5vZGVbMF0gfD0gMHgwMTsgLy8gU2V0IG11bHRpY2FzdCBiaXRcblxuICAgICAgICBfbm9kZUlkID0gbm9kZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSYW5kb21pemUgY2xvY2tzZXFcbiAgICBpZiAoY2xvY2tzZXEgPT0gbnVsbCkge1xuICAgICAgLy8gUGVyIDQuMi4yLCByYW5kb21pemUgKDE0IGJpdCkgY2xvY2tzZXFcbiAgICAgIGNsb2Nrc2VxID0gKHNlZWRCeXRlc1s2XSA8PCA4IHwgc2VlZEJ5dGVzWzddKSAmIDB4M2ZmZjtcbiAgICAgIGlmIChfY2xvY2tzZXEgPT09IHVuZGVmaW5lZCAmJiAhb3B0aW9ucy5fdjYpIHtcbiAgICAgICAgX2Nsb2Nrc2VxID0gY2xvY2tzZXE7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gdjEgJiB2NiB0aW1lc3RhbXBzIGFyZSAxMDAgbmFuby1zZWNvbmQgdW5pdHMgc2luY2UgdGhlIEdyZWdvcmlhbiBlcG9jaCxcbiAgLy8gKDE1ODItMTAtMTUgMDA6MDApLiAgSlNOdW1iZXJzIGFyZW4ndCBwcmVjaXNlIGVub3VnaCBmb3IgdGhpcywgc28gdGltZSBpc1xuICAvLyBoYW5kbGVkIGludGVybmFsbHkgYXMgJ21zZWNzJyAoaW50ZWdlciBtaWxsaXNlY29uZHMpIGFuZCAnbnNlY3MnXG4gIC8vICgxMDAtbmFub3NlY29uZHMgb2Zmc2V0IGZyb20gbXNlY3MpIHNpbmNlIHVuaXggZXBvY2gsIDE5NzAtMDEtMDEgMDA6MDAuXG4gIHZhciBtc2VjcyA9IG9wdGlvbnMubXNlY3MgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMubXNlY3MgOiBEYXRlLm5vdygpO1xuXG4gIC8vIFBlciA0LjIuMS4yLCB1c2UgY291bnQgb2YgdXVpZCdzIGdlbmVyYXRlZCBkdXJpbmcgdGhlIGN1cnJlbnQgY2xvY2tcbiAgLy8gY3ljbGUgdG8gc2ltdWxhdGUgaGlnaGVyIHJlc29sdXRpb24gY2xvY2tcbiAgdmFyIG5zZWNzID0gb3B0aW9ucy5uc2VjcyAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy5uc2VjcyA6IF9sYXN0TlNlY3MgKyAxO1xuXG4gIC8vIFRpbWUgc2luY2UgbGFzdCB1dWlkIGNyZWF0aW9uIChpbiBtc2VjcylcbiAgdmFyIGR0ID0gbXNlY3MgLSBfbGFzdE1TZWNzICsgKG5zZWNzIC0gX2xhc3ROU2VjcykgLyAxMDAwMDtcblxuICAvLyBQZXIgNC4yLjEuMiwgQnVtcCBjbG9ja3NlcSBvbiBjbG9jayByZWdyZXNzaW9uXG4gIGlmIChkdCA8IDAgJiYgb3B0aW9ucy5jbG9ja3NlcSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgY2xvY2tzZXEgPSBjbG9ja3NlcSArIDEgJiAweDNmZmY7XG4gIH1cblxuICAvLyBSZXNldCBuc2VjcyBpZiBjbG9jayByZWdyZXNzZXMgKG5ldyBjbG9ja3NlcSkgb3Igd2UndmUgbW92ZWQgb250byBhIG5ld1xuICAvLyB0aW1lIGludGVydmFsXG4gIGlmICgoZHQgPCAwIHx8IG1zZWNzID4gX2xhc3RNU2VjcykgJiYgb3B0aW9ucy5uc2VjcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgbnNlY3MgPSAwO1xuICB9XG5cbiAgLy8gUGVyIDQuMi4xLjIgVGhyb3cgZXJyb3IgaWYgdG9vIG1hbnkgdXVpZHMgYXJlIHJlcXVlc3RlZFxuICBpZiAobnNlY3MgPj0gMTAwMDApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJ1dWlkLnYxKCk6IENhbid0IGNyZWF0ZSBtb3JlIHRoYW4gMTBNIHV1aWRzL3NlY1wiKTtcbiAgfVxuICBfbGFzdE1TZWNzID0gbXNlY3M7XG4gIF9sYXN0TlNlY3MgPSBuc2VjcztcbiAgX2Nsb2Nrc2VxID0gY2xvY2tzZXE7XG5cbiAgLy8gUGVyIDQuMS40IC0gQ29udmVydCBmcm9tIHVuaXggZXBvY2ggdG8gR3JlZ29yaWFuIGVwb2NoXG4gIG1zZWNzICs9IDEyMjE5MjkyODAwMDAwO1xuXG4gIC8vIGB0aW1lX2xvd2BcbiAgdmFyIHRsID0gKChtc2VjcyAmIDB4ZmZmZmZmZikgKiAxMDAwMCArIG5zZWNzKSAlIDB4MTAwMDAwMDAwO1xuICBiW2krK10gPSB0bCA+Pj4gMjQgJiAweGZmO1xuICBiW2krK10gPSB0bCA+Pj4gMTYgJiAweGZmO1xuICBiW2krK10gPSB0bCA+Pj4gOCAmIDB4ZmY7XG4gIGJbaSsrXSA9IHRsICYgMHhmZjtcblxuICAvLyBgdGltZV9taWRgXG4gIHZhciB0bWggPSBtc2VjcyAvIDB4MTAwMDAwMDAwICogMTAwMDAgJiAweGZmZmZmZmY7XG4gIGJbaSsrXSA9IHRtaCA+Pj4gOCAmIDB4ZmY7XG4gIGJbaSsrXSA9IHRtaCAmIDB4ZmY7XG5cbiAgLy8gYHRpbWVfaGlnaF9hbmRfdmVyc2lvbmBcbiAgYltpKytdID0gdG1oID4+PiAyNCAmIDB4ZiB8IDB4MTA7IC8vIGluY2x1ZGUgdmVyc2lvblxuICBiW2krK10gPSB0bWggPj4+IDE2ICYgMHhmZjtcblxuICAvLyBgY2xvY2tfc2VxX2hpX2FuZF9yZXNlcnZlZGAgKFBlciA0LjIuMiAtIGluY2x1ZGUgdmFyaWFudClcbiAgYltpKytdID0gY2xvY2tzZXEgPj4+IDggfCAweDgwO1xuXG4gIC8vIGBjbG9ja19zZXFfbG93YFxuICBiW2krK10gPSBjbG9ja3NlcSAmIDB4ZmY7XG5cbiAgLy8gYG5vZGVgXG4gIGZvciAodmFyIG4gPSAwOyBuIDwgNjsgKytuKSB7XG4gICAgYltpICsgbl0gPSBub2RlW25dO1xuICB9XG4gIHJldHVybiBidWYgfHwgKDAsIF9zdHJpbmdpZnkudW5zYWZlU3RyaW5naWZ5KShiKTtcbn1cbnZhciBfZGVmYXVsdCA9IGV4cG9ydHMuZGVmYXVsdCA9IHYxOyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdjFUb1Y2O1xudmFyIF9wYXJzZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vcGFyc2UuanNcIikpO1xudmFyIF9zdHJpbmdpZnkgPSByZXF1aXJlKFwiLi9zdHJpbmdpZnkuanNcIik7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KGUpIHsgcmV0dXJuIGUgJiYgZS5fX2VzTW9kdWxlID8gZSA6IHsgZGVmYXVsdDogZSB9OyB9XG4vKipcbiAqIENvbnZlcnQgYSB2MSBVVUlEIHRvIGEgdjYgVVVJRFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfFVpbnQ4QXJyYXl9IHV1aWQgLSBUaGUgdjEgVVVJRCB0byBjb252ZXJ0IHRvIHY2XG4gKiBAcmV0dXJucyB7c3RyaW5nfFVpbnQ4QXJyYXl9IFRoZSB2NiBVVUlEIGFzIHRoZSBzYW1lIHR5cGUgYXMgdGhlIGB1dWlkYCBhcmdcbiAqIChzdHJpbmcgb3IgVWludDhBcnJheSlcbiAqL1xuZnVuY3Rpb24gdjFUb1Y2KHV1aWQpIHtcbiAgdmFyIHYxQnl0ZXMgPSB0eXBlb2YgdXVpZCA9PT0gJ3N0cmluZycgPyAoMCwgX3BhcnNlLmRlZmF1bHQpKHV1aWQpIDogdXVpZDtcbiAgdmFyIHY2Qnl0ZXMgPSBfdjFUb1Y2KHYxQnl0ZXMpO1xuICByZXR1cm4gdHlwZW9mIHV1aWQgPT09ICdzdHJpbmcnID8gKDAsIF9zdHJpbmdpZnkudW5zYWZlU3RyaW5naWZ5KSh2NkJ5dGVzKSA6IHY2Qnl0ZXM7XG59XG5cbi8vIERvIHRoZSBmaWVsZCB0cmFuc2Zvcm1hdGlvbiBuZWVkZWQgZm9yIHYxIC0+IHY2XG5mdW5jdGlvbiBfdjFUb1Y2KHYxQnl0ZXMsIHJhbmRvbWl6ZSA9IGZhbHNlKSB7XG4gIHJldHVybiBVaW50OEFycmF5Lm9mKCh2MUJ5dGVzWzZdICYgMHgwZikgPDwgNCB8IHYxQnl0ZXNbN10gPj4gNCAmIDB4MGYsICh2MUJ5dGVzWzddICYgMHgwZikgPDwgNCB8ICh2MUJ5dGVzWzRdICYgMHhmMCkgPj4gNCwgKHYxQnl0ZXNbNF0gJiAweDBmKSA8PCA0IHwgKHYxQnl0ZXNbNV0gJiAweGYwKSA+PiA0LCAodjFCeXRlc1s1XSAmIDB4MGYpIDw8IDQgfCAodjFCeXRlc1swXSAmIDB4ZjApID4+IDQsICh2MUJ5dGVzWzBdICYgMHgwZikgPDwgNCB8ICh2MUJ5dGVzWzFdICYgMHhmMCkgPj4gNCwgKHYxQnl0ZXNbMV0gJiAweDBmKSA8PCA0IHwgKHYxQnl0ZXNbMl0gJiAweGYwKSA+PiA0LCAweDYwIHwgdjFCeXRlc1syXSAmIDB4MGYsIHYxQnl0ZXNbM10sIHYxQnl0ZXNbOF0sIHYxQnl0ZXNbOV0sIHYxQnl0ZXNbMTBdLCB2MUJ5dGVzWzExXSwgdjFCeXRlc1sxMl0sIHYxQnl0ZXNbMTNdLCB2MUJ5dGVzWzE0XSwgdjFCeXRlc1sxNV0pO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIF92ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi92MzUuanNcIikpO1xudmFyIF9tZCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vbWQ1LmpzXCIpKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoZSkgeyByZXR1cm4gZSAmJiBlLl9fZXNNb2R1bGUgPyBlIDogeyBkZWZhdWx0OiBlIH07IH1cbnZhciB2MyA9ICgwLCBfdi5kZWZhdWx0KSgndjMnLCAweDMwLCBfbWQuZGVmYXVsdCk7XG52YXIgX2RlZmF1bHQgPSBleHBvcnRzLmRlZmF1bHQgPSB2MzsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuVVJMID0gZXhwb3J0cy5ETlMgPSB2b2lkIDA7XG5leHBvcnRzLmRlZmF1bHQgPSB2MzU7XG52YXIgX3N0cmluZ2lmeSA9IHJlcXVpcmUoXCIuL3N0cmluZ2lmeS5qc1wiKTtcbnZhciBfcGFyc2UgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3BhcnNlLmpzXCIpKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoZSkgeyByZXR1cm4gZSAmJiBlLl9fZXNNb2R1bGUgPyBlIDogeyBkZWZhdWx0OiBlIH07IH1cbmZ1bmN0aW9uIHN0cmluZ1RvQnl0ZXMoc3RyKSB7XG4gIHN0ciA9IHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChzdHIpKTsgLy8gVVRGOCBlc2NhcGVcblxuICB2YXIgYnl0ZXMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyArK2kpIHtcbiAgICBieXRlcy5wdXNoKHN0ci5jaGFyQ29kZUF0KGkpKTtcbiAgfVxuICByZXR1cm4gYnl0ZXM7XG59XG52YXIgRE5TID0gZXhwb3J0cy5ETlMgPSAnNmJhN2I4MTAtOWRhZC0xMWQxLTgwYjQtMDBjMDRmZDQzMGM4JztcbnZhciBVUkwgPSBleHBvcnRzLlVSTCA9ICc2YmE3YjgxMS05ZGFkLTExZDEtODBiNC0wMGMwNGZkNDMwYzgnO1xuZnVuY3Rpb24gdjM1KG5hbWUsIHZlcnNpb24sIGhhc2hmdW5jKSB7XG4gIGZ1bmN0aW9uIGdlbmVyYXRlVVVJRCh2YWx1ZSwgbmFtZXNwYWNlLCBidWYsIG9mZnNldCkge1xuICAgIHZhciBfbmFtZXNwYWNlO1xuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICB2YWx1ZSA9IHN0cmluZ1RvQnl0ZXModmFsdWUpO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIG5hbWVzcGFjZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIG5hbWVzcGFjZSA9ICgwLCBfcGFyc2UuZGVmYXVsdCkobmFtZXNwYWNlKTtcbiAgICB9XG4gICAgaWYgKCgoX25hbWVzcGFjZSA9IG5hbWVzcGFjZSkgPT09IG51bGwgfHwgX25hbWVzcGFjZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX25hbWVzcGFjZS5sZW5ndGgpICE9PSAxNikge1xuICAgICAgdGhyb3cgVHlwZUVycm9yKCdOYW1lc3BhY2UgbXVzdCBiZSBhcnJheS1saWtlICgxNiBpdGVyYWJsZSBpbnRlZ2VyIHZhbHVlcywgMC0yNTUpJyk7XG4gICAgfVxuXG4gICAgLy8gQ29tcHV0ZSBoYXNoIG9mIG5hbWVzcGFjZSBhbmQgdmFsdWUsIFBlciA0LjNcbiAgICAvLyBGdXR1cmU6IFVzZSBzcHJlYWQgc3ludGF4IHdoZW4gc3VwcG9ydGVkIG9uIGFsbCBwbGF0Zm9ybXMsIGUuZy4gYGJ5dGVzID1cbiAgICAvLyBoYXNoZnVuYyhbLi4ubmFtZXNwYWNlLCAuLi4gdmFsdWVdKWBcbiAgICB2YXIgYnl0ZXMgPSBuZXcgVWludDhBcnJheSgxNiArIHZhbHVlLmxlbmd0aCk7XG4gICAgYnl0ZXMuc2V0KG5hbWVzcGFjZSk7XG4gICAgYnl0ZXMuc2V0KHZhbHVlLCBuYW1lc3BhY2UubGVuZ3RoKTtcbiAgICBieXRlcyA9IGhhc2hmdW5jKGJ5dGVzKTtcbiAgICBieXRlc1s2XSA9IGJ5dGVzWzZdICYgMHgwZiB8IHZlcnNpb247XG4gICAgYnl0ZXNbOF0gPSBieXRlc1s4XSAmIDB4M2YgfCAweDgwO1xuICAgIGlmIChidWYpIHtcbiAgICAgIG9mZnNldCA9IG9mZnNldCB8fCAwO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCAxNjsgKytpKSB7XG4gICAgICAgIGJ1ZltvZmZzZXQgKyBpXSA9IGJ5dGVzW2ldO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGJ1ZjtcbiAgICB9XG4gICAgcmV0dXJuICgwLCBfc3RyaW5naWZ5LnVuc2FmZVN0cmluZ2lmeSkoYnl0ZXMpO1xuICB9XG5cbiAgLy8gRnVuY3Rpb24jbmFtZSBpcyBub3Qgc2V0dGFibGUgb24gc29tZSBwbGF0Zm9ybXMgKCMyNzApXG4gIHRyeSB7XG4gICAgZ2VuZXJhdGVVVUlELm5hbWUgPSBuYW1lO1xuICB9IGNhdGNoIChlcnIpIHt9XG5cbiAgLy8gRm9yIENvbW1vbkpTIGRlZmF1bHQgZXhwb3J0IHN1cHBvcnRcbiAgZ2VuZXJhdGVVVUlELkROUyA9IEROUztcbiAgZ2VuZXJhdGVVVUlELlVSTCA9IFVSTDtcbiAgcmV0dXJuIGdlbmVyYXRlVVVJRDtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfbmF0aXZlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9uYXRpdmUuanNcIikpO1xudmFyIF9ybmcgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3JuZy5qc1wiKSk7XG52YXIgX3N0cmluZ2lmeSA9IHJlcXVpcmUoXCIuL3N0cmluZ2lmeS5qc1wiKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoZSkgeyByZXR1cm4gZSAmJiBlLl9fZXNNb2R1bGUgPyBlIDogeyBkZWZhdWx0OiBlIH07IH1cbmZ1bmN0aW9uIHY0KG9wdGlvbnMsIGJ1Ziwgb2Zmc2V0KSB7XG4gIGlmIChfbmF0aXZlLmRlZmF1bHQucmFuZG9tVVVJRCAmJiAhYnVmICYmICFvcHRpb25zKSB7XG4gICAgcmV0dXJuIF9uYXRpdmUuZGVmYXVsdC5yYW5kb21VVUlEKCk7XG4gIH1cbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIHZhciBybmRzID0gb3B0aW9ucy5yYW5kb20gfHwgKG9wdGlvbnMucm5nIHx8IF9ybmcuZGVmYXVsdCkoKTtcblxuICAvLyBQZXIgNC40LCBzZXQgYml0cyBmb3IgdmVyc2lvbiBhbmQgYGNsb2NrX3NlcV9oaV9hbmRfcmVzZXJ2ZWRgXG4gIHJuZHNbNl0gPSBybmRzWzZdICYgMHgwZiB8IDB4NDA7XG4gIHJuZHNbOF0gPSBybmRzWzhdICYgMHgzZiB8IDB4ODA7XG5cbiAgLy8gQ29weSBieXRlcyB0byBidWZmZXIsIGlmIHByb3ZpZGVkXG4gIGlmIChidWYpIHtcbiAgICBvZmZzZXQgPSBvZmZzZXQgfHwgMDtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IDE2OyArK2kpIHtcbiAgICAgIGJ1ZltvZmZzZXQgKyBpXSA9IHJuZHNbaV07XG4gICAgfVxuICAgIHJldHVybiBidWY7XG4gIH1cbiAgcmV0dXJuICgwLCBfc3RyaW5naWZ5LnVuc2FmZVN0cmluZ2lmeSkocm5kcyk7XG59XG52YXIgX2RlZmF1bHQgPSBleHBvcnRzLmRlZmF1bHQgPSB2NDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfdiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdjM1LmpzXCIpKTtcbnZhciBfc2hhID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9zaGExLmpzXCIpKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoZSkgeyByZXR1cm4gZSAmJiBlLl9fZXNNb2R1bGUgPyBlIDogeyBkZWZhdWx0OiBlIH07IH1cbnZhciB2NSA9ICgwLCBfdi5kZWZhdWx0KSgndjUnLCAweDUwLCBfc2hhLmRlZmF1bHQpO1xudmFyIF9kZWZhdWx0ID0gZXhwb3J0cy5kZWZhdWx0ID0gdjU7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2NjtcbnZhciBfc3RyaW5naWZ5ID0gcmVxdWlyZShcIi4vc3RyaW5naWZ5LmpzXCIpO1xudmFyIF92ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi92MS5qc1wiKSk7XG52YXIgX3YxVG9WID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi92MVRvVjYuanNcIikpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChlKSB7IHJldHVybiBlICYmIGUuX19lc01vZHVsZSA/IGUgOiB7IGRlZmF1bHQ6IGUgfTsgfVxuZnVuY3Rpb24gb3duS2V5cyhlLCByKSB7IHZhciB0ID0gT2JqZWN0LmtleXMoZSk7IGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7IHZhciBvID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhlKTsgciAmJiAobyA9IG8uZmlsdGVyKGZ1bmN0aW9uIChyKSB7IHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGUsIHIpLmVudW1lcmFibGU7IH0pKSwgdC5wdXNoLmFwcGx5KHQsIG8pOyB9IHJldHVybiB0OyB9XG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkKGUpIHsgZm9yICh2YXIgciA9IDE7IHIgPCBhcmd1bWVudHMubGVuZ3RoOyByKyspIHsgdmFyIHQgPSBudWxsICE9IGFyZ3VtZW50c1tyXSA/IGFyZ3VtZW50c1tyXSA6IHt9OyByICUgMiA/IG93bktleXMoT2JqZWN0KHQpLCAhMCkuZm9yRWFjaChmdW5jdGlvbiAocikgeyBfZGVmaW5lUHJvcGVydHkoZSwgciwgdFtyXSk7IH0pIDogT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMgPyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhlLCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyh0KSkgOiBvd25LZXlzKE9iamVjdCh0KSkuZm9yRWFjaChmdW5jdGlvbiAocikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoZSwgciwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0LCByKSk7IH0pOyB9IHJldHVybiBlOyB9XG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkoZSwgciwgdCkgeyByZXR1cm4gKHIgPSBfdG9Qcm9wZXJ0eUtleShyKSkgaW4gZSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLCByLCB7IHZhbHVlOiB0LCBlbnVtZXJhYmxlOiAhMCwgY29uZmlndXJhYmxlOiAhMCwgd3JpdGFibGU6ICEwIH0pIDogZVtyXSA9IHQsIGU7IH1cbmZ1bmN0aW9uIF90b1Byb3BlcnR5S2V5KHQpIHsgdmFyIGkgPSBfdG9QcmltaXRpdmUodCwgXCJzdHJpbmdcIik7IHJldHVybiBcInN5bWJvbFwiID09IHR5cGVvZiBpID8gaSA6IGkgKyBcIlwiOyB9XG5mdW5jdGlvbiBfdG9QcmltaXRpdmUodCwgcikgeyBpZiAoXCJvYmplY3RcIiAhPSB0eXBlb2YgdCB8fCAhdCkgcmV0dXJuIHQ7IHZhciBlID0gdFtTeW1ib2wudG9QcmltaXRpdmVdOyBpZiAodm9pZCAwICE9PSBlKSB7IHZhciBpID0gZS5jYWxsKHQsIHIgfHwgXCJkZWZhdWx0XCIpOyBpZiAoXCJvYmplY3RcIiAhPSB0eXBlb2YgaSkgcmV0dXJuIGk7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJAQHRvUHJpbWl0aXZlIG11c3QgcmV0dXJuIGEgcHJpbWl0aXZlIHZhbHVlLlwiKTsgfSByZXR1cm4gKFwic3RyaW5nXCIgPT09IHIgPyBTdHJpbmcgOiBOdW1iZXIpKHQpOyB9XG4vKipcbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gb3B0aW9uc1xuICogQHBhcmFtIHtVaW50OEFycmF5PX0gYnVmXG4gKiBAcGFyYW0ge251bWJlcj19IG9mZnNldFxuICogQHJldHVybnNcbiAqL1xuZnVuY3Rpb24gdjYob3B0aW9ucyA9IHt9LCBidWYsIG9mZnNldCA9IDApIHtcbiAgLy8gdjYgaXMgdjEgd2l0aCBkaWZmZXJlbnQgZmllbGQgbGF5b3V0LCBzbyB3ZSBzdGFydCB3aXRoIGEgdjEgVVVJRCwgYWxiZWl0XG4gIC8vIHdpdGggc2xpZ2h0bHkgZGlmZmVyZW50IGJlaGF2aW9yIGFyb3VuZCBob3cgdGhlIGNsb2NrX3NlcSBhbmQgbm9kZSBmaWVsZHNcbiAgLy8gYXJlIHJhbmRvbWl6ZWQsIHdoaWNoIGlzIHdoeSB3ZSBjYWxsIHYxIHdpdGggX3Y2OiB0cnVlLlxuICB2YXIgYnl0ZXMgPSAoMCwgX3YuZGVmYXVsdCkoX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCBvcHRpb25zKSwge30sIHtcbiAgICBfdjY6IHRydWVcbiAgfSksIG5ldyBVaW50OEFycmF5KDE2KSk7XG5cbiAgLy8gUmVvcmRlciB0aGUgZmllbGRzIHRvIHY2IGxheW91dC5cbiAgYnl0ZXMgPSAoMCwgX3YxVG9WLmRlZmF1bHQpKGJ5dGVzKTtcblxuICAvLyBSZXR1cm4gYXMgYSBieXRlIGFycmF5IGlmIHJlcXVlc3RlZFxuICBpZiAoYnVmKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCAxNjsgaSsrKSB7XG4gICAgICBidWZbb2Zmc2V0ICsgaV0gPSBieXRlc1tpXTtcbiAgICB9XG4gICAgcmV0dXJuIGJ1ZjtcbiAgfVxuICByZXR1cm4gKDAsIF9zdHJpbmdpZnkudW5zYWZlU3RyaW5naWZ5KShieXRlcyk7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2NlRvVjE7XG52YXIgX3BhcnNlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9wYXJzZS5qc1wiKSk7XG52YXIgX3N0cmluZ2lmeSA9IHJlcXVpcmUoXCIuL3N0cmluZ2lmeS5qc1wiKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoZSkgeyByZXR1cm4gZSAmJiBlLl9fZXNNb2R1bGUgPyBlIDogeyBkZWZhdWx0OiBlIH07IH1cbi8qKlxuICogQ29udmVydCBhIHY2IFVVSUQgdG8gYSB2MSBVVUlEXG4gKlxuICogQHBhcmFtIHtzdHJpbmd8VWludDhBcnJheX0gdXVpZCAtIFRoZSB2NiBVVUlEIHRvIGNvbnZlcnQgdG8gdjZcbiAqIEByZXR1cm5zIHtzdHJpbmd8VWludDhBcnJheX0gVGhlIHYxIFVVSUQgYXMgdGhlIHNhbWUgdHlwZSBhcyB0aGUgYHV1aWRgIGFyZ1xuICogKHN0cmluZyBvciBVaW50OEFycmF5KVxuICovXG5mdW5jdGlvbiB2NlRvVjEodXVpZCkge1xuICB2YXIgdjZCeXRlcyA9IHR5cGVvZiB1dWlkID09PSAnc3RyaW5nJyA/ICgwLCBfcGFyc2UuZGVmYXVsdCkodXVpZCkgOiB1dWlkO1xuICB2YXIgdjFCeXRlcyA9IF92NlRvVjEodjZCeXRlcyk7XG4gIHJldHVybiB0eXBlb2YgdXVpZCA9PT0gJ3N0cmluZycgPyAoMCwgX3N0cmluZ2lmeS51bnNhZmVTdHJpbmdpZnkpKHYxQnl0ZXMpIDogdjFCeXRlcztcbn1cblxuLy8gRG8gdGhlIGZpZWxkIHRyYW5zZm9ybWF0aW9uIG5lZWRlZCBmb3IgdjYgLT4gdjFcbmZ1bmN0aW9uIF92NlRvVjEodjZCeXRlcykge1xuICByZXR1cm4gVWludDhBcnJheS5vZigodjZCeXRlc1szXSAmIDB4MGYpIDw8IDQgfCB2NkJ5dGVzWzRdID4+IDQgJiAweDBmLCAodjZCeXRlc1s0XSAmIDB4MGYpIDw8IDQgfCAodjZCeXRlc1s1XSAmIDB4ZjApID4+IDQsICh2NkJ5dGVzWzVdICYgMHgwZikgPDwgNCB8IHY2Qnl0ZXNbNl0gJiAweDBmLCB2NkJ5dGVzWzddLCAodjZCeXRlc1sxXSAmIDB4MGYpIDw8IDQgfCAodjZCeXRlc1syXSAmIDB4ZjApID4+IDQsICh2NkJ5dGVzWzJdICYgMHgwZikgPDwgNCB8ICh2NkJ5dGVzWzNdICYgMHhmMCkgPj4gNCwgMHgxMCB8ICh2NkJ5dGVzWzBdICYgMHhmMCkgPj4gNCwgKHY2Qnl0ZXNbMF0gJiAweDBmKSA8PCA0IHwgKHY2Qnl0ZXNbMV0gJiAweGYwKSA+PiA0LCB2NkJ5dGVzWzhdLCB2NkJ5dGVzWzldLCB2NkJ5dGVzWzEwXSwgdjZCeXRlc1sxMV0sIHY2Qnl0ZXNbMTJdLCB2NkJ5dGVzWzEzXSwgdjZCeXRlc1sxNF0sIHY2Qnl0ZXNbMTVdKTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfcm5nID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9ybmcuanNcIikpO1xudmFyIF9zdHJpbmdpZnkgPSByZXF1aXJlKFwiLi9zdHJpbmdpZnkuanNcIik7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KGUpIHsgcmV0dXJuIGUgJiYgZS5fX2VzTW9kdWxlID8gZSA6IHsgZGVmYXVsdDogZSB9OyB9XG4vKipcbiAqIFVVSUQgVjcgLSBVbml4IEVwb2NoIHRpbWUtYmFzZWQgVVVJRFxuICpcbiAqIFRoZSBJRVRGIGhhcyBwdWJsaXNoZWQgUkZDOTU2MiwgaW50cm9kdWNpbmcgMyBuZXcgVVVJRCB2ZXJzaW9ucyAoNiw3LDgpLiBUaGlzXG4gKiBpbXBsZW1lbnRhdGlvbiBvZiBWNyBpcyBiYXNlZCBvbiB0aGUgYWNjZXB0ZWQsIHRob3VnaCBub3QgeWV0IGFwcHJvdmVkLFxuICogcmV2aXNpb25zLlxuICpcbiAqIFJGQyA5NTYyOmh0dHBzOi8vd3d3LnJmYy1lZGl0b3Iub3JnL3JmYy9yZmM5NTYyLmh0bWwgVW5pdmVyc2FsbHkgVW5pcXVlXG4gKiBJRGVudGlmaWVycyAoVVVJRHMpXG5cbiAqXG4gKiBTYW1wbGUgVjcgdmFsdWU6XG4gKiBodHRwczovL3d3dy5yZmMtZWRpdG9yLm9yZy9yZmMvcmZjOTU2Mi5odG1sI25hbWUtZXhhbXBsZS1vZi1hLXV1aWR2Ny12YWx1ZVxuICpcbiAqIE1vbm90b25pYyBCaXQgTGF5b3V0OiBSRkMgcmZjOTU2Mi42LjIgTWV0aG9kIDEsIERlZGljYXRlZCBDb3VudGVyIEJpdHMgcmVmOlxuICogICAgIGh0dHBzOi8vd3d3LnJmYy1lZGl0b3Iub3JnL3JmYy9yZmM5NTYyLmh0bWwjc2VjdGlvbi02LjItNS4xXG4gKlxuICogICAwICAgICAgICAgICAgICAgICAgIDEgICAgICAgICAgICAgICAgICAgMiAgICAgICAgICAgICAgICAgICAzIDAgMSAyIDMgNCA1IDZcbiAqICAgNyA4IDkgMCAxIDIgMyA0IDUgNiA3IDggOSAwIDEgMiAzIDQgNSA2IDcgOCA5IDAgMVxuICogICstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rXG4gKiAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgdW5peF90c19tcyAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqICArLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstK1xuICogIHwgICAgICAgICAgdW5peF90c19tcyAgICAgICAgICAgfCAgdmVyICB8ICAgICAgICBzZXFfaGkgICAgICAgICB8XG4gKiAgKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLStcbiAqICB8dmFyfCAgICAgICAgICAgICAgIHNlcV9sb3cgICAgICAgICAgICAgICB8ICAgICAgICByYW5kICAgICAgICAgfFxuICogICstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rXG4gKiAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmFuZCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqICArLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstK1xuICpcbiAqIHNlcSBpcyBhIDMxIGJpdCBzZXJpYWxpemVkIGNvdW50ZXI7IGNvbXByaXNlZCBvZiAxMiBiaXQgc2VxX2hpIGFuZCAxOSBiaXRcbiAqIHNlcV9sb3csIGFuZCByYW5kb21seSBpbml0aWFsaXplZCB1cG9uIHRpbWVzdGFtcCBjaGFuZ2UuIDMxIGJpdCBjb3VudGVyIHNpemVcbiAqIHdhcyBzZWxlY3RlZCBhcyBhbnkgYml0d2lzZSBvcGVyYXRpb25zIGluIG5vZGUgYXJlIGRvbmUgYXMgX3NpZ25lZF8gMzIgYml0XG4gKiBpbnRzLiB3ZSBleGNsdWRlIHRoZSBzaWduIGJpdC5cbiAqL1xuXG52YXIgX3NlcUxvdyA9IG51bGw7XG52YXIgX3NlcUhpZ2ggPSBudWxsO1xudmFyIF9tc2VjcyA9IDA7XG5mdW5jdGlvbiB2NyhvcHRpb25zLCBidWYsIG9mZnNldCkge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICAvLyBpbml0aWFsaXplIGJ1ZmZlciBhbmQgcG9pbnRlclxuICB2YXIgaSA9IGJ1ZiAmJiBvZmZzZXQgfHwgMDtcbiAgdmFyIGIgPSBidWYgfHwgbmV3IFVpbnQ4QXJyYXkoMTYpO1xuXG4gIC8vIHJuZHMgaXMgVWludDhBcnJheSgxNikgZmlsbGVkIHdpdGggcmFuZG9tIGJ5dGVzXG4gIHZhciBybmRzID0gb3B0aW9ucy5yYW5kb20gfHwgKG9wdGlvbnMucm5nIHx8IF9ybmcuZGVmYXVsdCkoKTtcblxuICAvLyBtaWxsaXNlY29uZHMgc2luY2UgdW5peCBlcG9jaCwgMTk3MC0wMS0wMSAwMDowMFxuICB2YXIgbXNlY3MgPSBvcHRpb25zLm1zZWNzICE9PSB1bmRlZmluZWQgPyBvcHRpb25zLm1zZWNzIDogRGF0ZS5ub3coKTtcblxuICAvLyBzZXEgaXMgdXNlciBwcm92aWRlZCAzMSBiaXQgY291bnRlclxuICB2YXIgc2VxID0gb3B0aW9ucy5zZXEgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMuc2VxIDogbnVsbDtcblxuICAvLyBpbml0aWFsaXplIGxvY2FsIHNlcSBoaWdoL2xvdyBwYXJ0c1xuICB2YXIgc2VxSGlnaCA9IF9zZXFIaWdoO1xuICB2YXIgc2VxTG93ID0gX3NlcUxvdztcblxuICAvLyBjaGVjayBpZiBjbG9jayBoYXMgYWR2YW5jZWQgYW5kIHVzZXIgaGFzIG5vdCBwcm92aWRlZCBtc2Vjc1xuICBpZiAobXNlY3MgPiBfbXNlY3MgJiYgb3B0aW9ucy5tc2VjcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgX21zZWNzID0gbXNlY3M7XG5cbiAgICAvLyB1bmxlc3MgdXNlciBwcm92aWRlZCBzZXEsIHJlc2V0IHNlcSBwYXJ0c1xuICAgIGlmIChzZXEgIT09IG51bGwpIHtcbiAgICAgIHNlcUhpZ2ggPSBudWxsO1xuICAgICAgc2VxTG93ID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICAvLyBpZiB3ZSBoYXZlIGEgdXNlciBwcm92aWRlZCBzZXFcbiAgaWYgKHNlcSAhPT0gbnVsbCkge1xuICAgIC8vIHRyaW0gcHJvdmlkZWQgc2VxIHRvIDMxIGJpdHMgb2YgdmFsdWUsIGF2b2lkaW5nIG92ZXJmbG93XG4gICAgaWYgKHNlcSA+IDB4N2ZmZmZmZmYpIHtcbiAgICAgIHNlcSA9IDB4N2ZmZmZmZmY7XG4gICAgfVxuXG4gICAgLy8gc3BsaXQgcHJvdmlkZWQgc2VxIGludG8gaGlnaC9sb3cgcGFydHNcbiAgICBzZXFIaWdoID0gc2VxID4+PiAxOSAmIDB4ZmZmO1xuICAgIHNlcUxvdyA9IHNlcSAmIDB4N2ZmZmY7XG4gIH1cblxuICAvLyByYW5kb21seSBpbml0aWFsaXplIHNlcVxuICBpZiAoc2VxSGlnaCA9PT0gbnVsbCB8fCBzZXFMb3cgPT09IG51bGwpIHtcbiAgICBzZXFIaWdoID0gcm5kc1s2XSAmIDB4N2Y7XG4gICAgc2VxSGlnaCA9IHNlcUhpZ2ggPDwgOCB8IHJuZHNbN107XG4gICAgc2VxTG93ID0gcm5kc1s4XSAmIDB4M2Y7IC8vIHBhZCBmb3IgdmFyXG4gICAgc2VxTG93ID0gc2VxTG93IDw8IDggfCBybmRzWzldO1xuICAgIHNlcUxvdyA9IHNlcUxvdyA8PCA1IHwgcm5kc1sxMF0gPj4+IDM7XG4gIH1cblxuICAvLyBpbmNyZW1lbnQgc2VxIGlmIHdpdGhpbiBtc2VjcyB3aW5kb3dcbiAgaWYgKG1zZWNzICsgMTAwMDAgPiBfbXNlY3MgJiYgc2VxID09PSBudWxsKSB7XG4gICAgaWYgKCsrc2VxTG93ID4gMHg3ZmZmZikge1xuICAgICAgc2VxTG93ID0gMDtcbiAgICAgIGlmICgrK3NlcUhpZ2ggPiAweGZmZikge1xuICAgICAgICBzZXFIaWdoID0gMDtcblxuICAgICAgICAvLyBpbmNyZW1lbnQgaW50ZXJuYWwgX21zZWNzLiB0aGlzIGFsbG93cyB1cyB0byBjb250aW51ZSBpbmNyZW1lbnRpbmdcbiAgICAgICAgLy8gd2hpbGUgc3RheWluZyBtb25vdG9uaWMuIE5vdGUsIG9uY2Ugd2UgaGl0IDEwayBtaWxsaXNlY29uZHMgYmV5b25kIHN5c3RlbVxuICAgICAgICAvLyBjbG9jaywgd2Ugd2lsbCByZXNldCBicmVha2luZyBtb25vdG9uaWNpdHkgKGFmdGVyICgyXjMxKSoxMDAwMCBnZW5lcmF0aW9ucylcbiAgICAgICAgX21zZWNzKys7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIC8vIHJlc2V0dGluZzsgd2UgaGF2ZSBhZHZhbmNlZCBtb3JlIHRoYW5cbiAgICAvLyAxMGsgbWlsbGlzZWNvbmRzIGJleW9uZCBzeXN0ZW0gY2xvY2tcbiAgICBfbXNlY3MgPSBtc2VjcztcbiAgfVxuICBfc2VxSGlnaCA9IHNlcUhpZ2g7XG4gIF9zZXFMb3cgPSBzZXFMb3c7XG5cbiAgLy8gW2J5dGVzIDAtNV0gNDggYml0cyBvZiBsb2NhbCB0aW1lc3RhbXBcbiAgYltpKytdID0gX21zZWNzIC8gMHgxMDAwMDAwMDAwMCAmIDB4ZmY7XG4gIGJbaSsrXSA9IF9tc2VjcyAvIDB4MTAwMDAwMDAwICYgMHhmZjtcbiAgYltpKytdID0gX21zZWNzIC8gMHgxMDAwMDAwICYgMHhmZjtcbiAgYltpKytdID0gX21zZWNzIC8gMHgxMDAwMCAmIDB4ZmY7XG4gIGJbaSsrXSA9IF9tc2VjcyAvIDB4MTAwICYgMHhmZjtcbiAgYltpKytdID0gX21zZWNzICYgMHhmZjtcblxuICAvLyBbYnl0ZSA2XSAtIHNldCA0IGJpdHMgb2YgdmVyc2lvbiAoNykgd2l0aCBmaXJzdCA0IGJpdHMgc2VxX2hpXG4gIGJbaSsrXSA9IHNlcUhpZ2ggPj4+IDQgJiAweDBmIHwgMHg3MDtcblxuICAvLyBbYnl0ZSA3XSByZW1haW5pbmcgOCBiaXRzIG9mIHNlcV9oaVxuICBiW2krK10gPSBzZXFIaWdoICYgMHhmZjtcblxuICAvLyBbYnl0ZSA4XSAtIHZhcmlhbnQgKDIgYml0cyksIGZpcnN0IDYgYml0cyBzZXFfbG93XG4gIGJbaSsrXSA9IHNlcUxvdyA+Pj4gMTMgJiAweDNmIHwgMHg4MDtcblxuICAvLyBbYnl0ZSA5XSA4IGJpdHMgc2VxX2xvd1xuICBiW2krK10gPSBzZXFMb3cgPj4+IDUgJiAweGZmO1xuXG4gIC8vIFtieXRlIDEwXSByZW1haW5pbmcgNSBiaXRzIHNlcV9sb3csIDMgYml0cyByYW5kb21cbiAgYltpKytdID0gc2VxTG93IDw8IDMgJiAweGZmIHwgcm5kc1sxMF0gJiAweDA3O1xuXG4gIC8vIFtieXRlcyAxMS0xNV0gYWx3YXlzIHJhbmRvbVxuICBiW2krK10gPSBybmRzWzExXTtcbiAgYltpKytdID0gcm5kc1sxMl07XG4gIGJbaSsrXSA9IHJuZHNbMTNdO1xuICBiW2krK10gPSBybmRzWzE0XTtcbiAgYltpKytdID0gcm5kc1sxNV07XG4gIHJldHVybiBidWYgfHwgKDAsIF9zdHJpbmdpZnkudW5zYWZlU3RyaW5naWZ5KShiKTtcbn1cbnZhciBfZGVmYXVsdCA9IGV4cG9ydHMuZGVmYXVsdCA9IHY3OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIF9yZWdleCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vcmVnZXguanNcIikpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChlKSB7IHJldHVybiBlICYmIGUuX19lc01vZHVsZSA/IGUgOiB7IGRlZmF1bHQ6IGUgfTsgfVxuZnVuY3Rpb24gdmFsaWRhdGUodXVpZCkge1xuICByZXR1cm4gdHlwZW9mIHV1aWQgPT09ICdzdHJpbmcnICYmIF9yZWdleC5kZWZhdWx0LnRlc3QodXVpZCk7XG59XG52YXIgX2RlZmF1bHQgPSBleHBvcnRzLmRlZmF1bHQgPSB2YWxpZGF0ZTsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfdmFsaWRhdGUgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3ZhbGlkYXRlLmpzXCIpKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoZSkgeyByZXR1cm4gZSAmJiBlLl9fZXNNb2R1bGUgPyBlIDogeyBkZWZhdWx0OiBlIH07IH1cbmZ1bmN0aW9uIHZlcnNpb24odXVpZCkge1xuICBpZiAoISgwLCBfdmFsaWRhdGUuZGVmYXVsdCkodXVpZCkpIHtcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ0ludmFsaWQgVVVJRCcpO1xuICB9XG4gIHJldHVybiBwYXJzZUludCh1dWlkLnNsaWNlKDE0LCAxNSksIDE2KTtcbn1cbnZhciBfZGVmYXVsdCA9IGV4cG9ydHMuZGVmYXVsdCA9IHZlcnNpb247IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgR2FtZSBmcm9tICcuL0dhbWUnO1xuXG53aW5kb3cub25sb2FkID0gKCkgPT4ge1xuICBjb25zdCBnYW1lID0gbmV3IEdhbWUoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2dhbWUnKSk7XG4gIGdhbWUuaW5pdGlhbGlzZSgpO1xufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
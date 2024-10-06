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
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst vec_1 = __webpack_require__(/*! @basementuniverse/vec */ \"./node_modules/@basementuniverse/vec/vec.js\");\nclass Debug {\n    constructor(options) {\n        if (options === null || options === void 0 ? void 0 : options.defaultValue) {\n            options.defaultValue = Object.assign({}, Debug.defaultOptions.defaultValue, options.defaultValue);\n        }\n        if (options === null || options === void 0 ? void 0 : options.defaultChart) {\n            options.defaultChart = Object.assign({}, Debug.defaultOptions.defaultChart, options.defaultChart);\n        }\n        if (options === null || options === void 0 ? void 0 : options.defaultMarker) {\n            options.defaultMarker = Object.assign({}, Debug.defaultOptions.defaultMarker, options.defaultMarker);\n        }\n        if (options === null || options === void 0 ? void 0 : options.defaultBorder) {\n            options.defaultBorder = Object.assign({}, Debug.defaultOptions.defaultBorder, options.defaultBorder);\n        }\n        this.options = Object.assign({}, Debug.defaultOptions, options !== null && options !== void 0 ? options : {});\n        this.values = new Map();\n        this.charts = new Map();\n        this.markers = new Map();\n        this.borders = new Map();\n    }\n    /**\n     * Initialise the debug renderer for displaying values and markers\n     */\n    static initialise(options = {}) {\n        if (Debug.instance !== undefined) {\n            throw new Error('Debug has already been initialised');\n        }\n        Debug.instance = new Debug(options);\n    }\n    static getInstance() {\n        if (Debug.instance === undefined) {\n            throw new Error('Debug not properly initialised');\n        }\n        return Debug.instance;\n    }\n    /**\n     * Show a debug value\n     */\n    static value(label, value, options) {\n        var _a;\n        const instance = Debug.getInstance();\n        instance.values.set(label, Object.assign({}, instance.options.defaultValue, (_a = instance.values.get(label)) !== null && _a !== void 0 ? _a : {}, options !== null && options !== void 0 ? options : {}, { label, value }));\n    }\n    /**\n     * Show a debug chart\n     */\n    static chart(label, value, options) {\n        var _a, _b;\n        const instance = Debug.getInstance();\n        const currentChart = instance.charts.get(label);\n        instance.charts.set(label, Object.assign({}, instance.options.defaultChart, currentChart !== null && currentChart !== void 0 ? currentChart : {}, options !== null && options !== void 0 ? options : {}, {\n            label,\n            values: [...(_a = currentChart === null || currentChart === void 0 ? void 0 : currentChart.values) !== null && _a !== void 0 ? _a : [], value].slice(-((_b = options === null || options === void 0 ? void 0 : options.valueBufferSize) !== null && _b !== void 0 ? _b : instance.options.defaultChart.valueBufferSize)),\n        }));\n    }\n    /**\n     * Remove a debug chart\n     */\n    static removeChart(label) {\n        const instance = Debug.getInstance();\n        instance.charts.delete(label);\n    }\n    /**\n     * Show a marker in world or screen space\n     */\n    static marker(label, value, position, options) {\n        var _a;\n        const instance = Debug.getInstance();\n        instance.markers.set(label, Object.assign({}, instance.options.defaultMarker, (_a = instance.markers.get(label)) !== null && _a !== void 0 ? _a : {}, options !== null && options !== void 0 ? options : {}, { label, value, position }));\n    }\n    /**\n     * Show a border in world or screen space\n     */\n    static border(label, value, position, options) {\n        var _a;\n        if ((options === null || options === void 0 ? void 0 : options.borderShape) === 'circle' && (options === null || options === void 0 ? void 0 : options.radius) === undefined) {\n            // Don't add the border if it's circular but we don't have a radius\n            return;\n        }\n        if ((options === null || options === void 0 ? void 0 : options.borderShape) !== 'circle' && (options === null || options === void 0 ? void 0 : options.size) === undefined) {\n            // Don't add the border if it's rectangular (default is rectangular) but\n            // we don't have a size\n            return;\n        }\n        const instance = Debug.getInstance();\n        instance.borders.set(label, Object.assign({}, instance.options.defaultBorder, (_a = instance.borders.get(label)) !== null && _a !== void 0 ? _a : {}, options !== null && options !== void 0 ? options : {}, { label, value, position }));\n    }\n    /**\n     * Render the debug values and markers onto a canvas\n     */\n    static draw(context, level = 0) {\n        const instance = Debug.getInstance();\n        // Draw world-space markers & borders\n        context.save();\n        instance.markers.forEach(marker => {\n            if (marker.level !== undefined && marker.level < level) {\n                return;\n            }\n            if (marker.space === 'world') {\n                instance.drawMarker(context, marker);\n            }\n        });\n        instance.borders.forEach(border => {\n            if (border.level !== undefined && border.level < level) {\n                return;\n            }\n            if (border.space === 'world') {\n                instance.drawBorder(context, border);\n            }\n        });\n        context.restore();\n        // Draw values, charts and screen-space markers & borders\n        context.save();\n        context.setTransform(1, 0, 0, 1, 0, 0);\n        let position;\n        let leftY = instance.options.margin;\n        let rightY = instance.options.margin;\n        const lineHeight = (instance.options.lineHeight +\n            instance.options.padding * 2);\n        instance.values.forEach(value => {\n            var _a, _b, _c, _d, _e, _f;\n            if (value.level !== undefined && value.level < level) {\n                return;\n            }\n            switch (value.align) {\n                case 'left':\n                    position = (0, vec_1.vec)(instance.options.margin, leftY);\n                    leftY += lineHeight + instance.options.lineMargin;\n                    break;\n                case 'right':\n                    position = (0, vec_1.vec)(context.canvas.clientWidth - instance.options.margin, rightY);\n                    rightY += lineHeight + instance.options.lineMargin;\n                    break;\n            }\n            instance.drawLabel(context, Debug.prepareLabel((_a = value.label) !== null && _a !== void 0 ? _a : '', (_b = value.value) !== null && _b !== void 0 ? _b : '', value.showLabel, true), position, value.align, (_c = value.padding) !== null && _c !== void 0 ? _c : instance.options.padding, (_d = value.font) !== null && _d !== void 0 ? _d : instance.options.font, (_e = value.foregroundColour) !== null && _e !== void 0 ? _e : instance.options.foregroundColour, (_f = value.backgroundColour) !== null && _f !== void 0 ? _f : instance.options.backgroundColour);\n        });\n        instance.charts.forEach(chart => {\n            var _a, _b, _c, _d, _e;\n            if (chart.level !== undefined && chart.level < level) {\n                return;\n            }\n            switch (chart.align) {\n                case 'left':\n                    position = (0, vec_1.vec)(instance.options.margin, leftY);\n                    leftY += lineHeight + instance.options.lineMargin;\n                    break;\n                case 'right':\n                    position = (0, vec_1.vec)(context.canvas.clientWidth - instance.options.margin, rightY);\n                    rightY += lineHeight + instance.options.lineMargin;\n                    break;\n            }\n            instance.drawChart(context, Debug.prepareLabel((_a = chart.label) !== null && _a !== void 0 ? _a : '', '', chart.showLabel, false), position, chart.align, (_b = chart.padding) !== null && _b !== void 0 ? _b : instance.options.padding, (_c = chart.font) !== null && _c !== void 0 ? _c : instance.options.font, (_d = chart.foregroundColour) !== null && _d !== void 0 ? _d : instance.options.foregroundColour, (_e = chart.backgroundColour) !== null && _e !== void 0 ? _e : instance.options.backgroundColour, chart.chartBackgroundColour, chart.values, chart.valueBufferSize, chart.valueBufferStride, chart.minValue, chart.maxValue, chart.barWidth, chart.barColours);\n        });\n        instance.markers.forEach(marker => {\n            if (marker.level !== undefined && marker.level < level) {\n                return;\n            }\n            if (marker.space === 'screen') {\n                instance.drawMarker(context, marker);\n            }\n        });\n        instance.borders.forEach(border => {\n            if (border.level !== undefined && border.level < level) {\n                return;\n            }\n            if (border.space === 'screen') {\n                instance.drawBorder(context, border);\n            }\n        });\n        context.restore();\n        // Clear values, markers & borders ready for next frame\n        instance.values.clear();\n        instance.markers.clear();\n        instance.borders.clear();\n    }\n    static prepareLabel(label, value, showLabel, showValue) {\n        const actualLabel = (showLabel && label) ? label : '';\n        const actualValue = (!!showValue && value !== '') ? value.toString() : '';\n        const separator = (actualLabel && actualValue) ? ': ' : '';\n        return `${actualLabel}${separator}${actualValue}`;\n    }\n    drawLabel(context, text, position, align, padding, font, foregroundColour, backgroundColour) {\n        context.save();\n        context.font = font;\n        context.textBaseline = 'top';\n        const backgroundSize = {\n            width: context.measureText(text).width + padding * 2,\n            height: this.options.lineHeight + padding * 2,\n        };\n        const x = align === 'right'\n            ? (position.x - backgroundSize.width)\n            : position.x;\n        // Draw background\n        context.fillStyle = backgroundColour;\n        context.fillRect(x - padding, position.y - padding, backgroundSize.width, backgroundSize.height);\n        // Draw text\n        context.fillStyle = foregroundColour;\n        context.fillText(text, x, position.y);\n        context.restore();\n    }\n    drawChart(context, label, position, align, padding, font, foregroundColour, backgroundColour, chartBackgroundColour, values, valueBufferSize, valueBufferStride, minValue, maxValue, barWidth, barColours) {\n        var _a, _b;\n        context.save();\n        context.font = font;\n        context.textBaseline = 'top';\n        const chartSize = {\n            width: barWidth * Math.ceil(valueBufferSize / Math.max(valueBufferStride, 1)),\n            height: this.options.lineHeight + padding * 2,\n        };\n        const labelSize = {\n            width: context.measureText(label).width,\n            height: this.options.lineHeight,\n        };\n        const backgroundSize = {\n            width: (labelSize.width +\n                padding +\n                chartSize.width) + padding * 2,\n            height: this.options.lineHeight + padding * 2,\n        };\n        const x = align === 'right'\n            ? (position.x - backgroundSize.width)\n            : position.x;\n        // Draw background\n        context.fillStyle = backgroundColour;\n        context.fillRect(x - padding, position.y - padding, backgroundSize.width, backgroundSize.height);\n        // Draw label\n        if (label) {\n            context.fillStyle = foregroundColour;\n            context.fillText(label, x, position.y);\n        }\n        // Draw chart\n        if (chartBackgroundColour) {\n            context.fillStyle = chartBackgroundColour;\n            context.fillRect(x + padding + labelSize.width + padding, position.y - padding, chartSize.width, chartSize.height);\n        }\n        const range = maxValue - minValue;\n        const barOffset = (0, vec_1.vec)(x + padding + labelSize.width + padding, position.y - padding);\n        for (let i = 0; i < Math.ceil(values.length / Math.max(valueBufferStride, 1)); i++) {\n            let value;\n            if (valueBufferStride <= 1) {\n                value = values[i];\n            }\n            else {\n                value = values\n                    .slice(i * valueBufferStride, (i + 1) * valueBufferStride)\n                    .reduce((a, b) => a + b, 0) / valueBufferStride;\n            }\n            const barSize = (0, vec_1.vec)(barWidth, Math.round(chartSize.height * (value - minValue) / range));\n            const barPosition = vec_1.vec.add(barOffset, (0, vec_1.vec)((values.length < valueBufferSize\n                ? Math.ceil((valueBufferSize - values.length) / valueBufferStride) * barWidth\n                : 0) + i * barWidth, chartSize.height - barSize.y));\n            const barColour = (_b = (barColours\n                ? (_a = [...barColours].reverse().find(c => values[i] >= c.offset)) === null || _a === void 0 ? void 0 : _a.colour\n                : undefined)) !== null && _b !== void 0 ? _b : foregroundColour;\n            context.fillStyle = barColour;\n            context.fillRect(barPosition.x, barPosition.y, barSize.x, barSize.y);\n        }\n        context.restore();\n    }\n    drawMarker(context, marker) {\n        var _a, _b, _c, _d, _e, _f, _g;\n        context.save();\n        const position = (_a = marker.position) !== null && _a !== void 0 ? _a : (0, vec_1.vec)();\n        if (marker.showLabel || marker.showValue) {\n            this.drawLabel(context, Debug.prepareLabel((_b = marker.label) !== null && _b !== void 0 ? _b : '', (_c = marker.value) !== null && _c !== void 0 ? _c : '', marker.showLabel, marker.showValue), vec_1.vec.add(position !== null && position !== void 0 ? position : (0, vec_1.vec)(), marker.labelOffset), 'left', (_d = marker.padding) !== null && _d !== void 0 ? _d : this.options.padding, (_e = marker.font) !== null && _e !== void 0 ? _e : this.options.font, (_f = marker.foregroundColour) !== null && _f !== void 0 ? _f : this.options.foregroundColour, (_g = marker.backgroundColour) !== null && _g !== void 0 ? _g : this.options.backgroundColour);\n        }\n        if (marker.showMarker) {\n            context.lineWidth = 2;\n            context.strokeStyle = context.fillStyle = marker.markerColour;\n            switch (marker.markerStyle) {\n                case 'x':\n                    this.drawCross(context, position, marker.markerSize);\n                    break;\n                case '+':\n                    this.drawPlus(context, position, marker.markerSize);\n                    break;\n                case '.':\n                    this.drawDot(context, position, marker.markerSize);\n                    break;\n            }\n        }\n        context.restore();\n    }\n    drawCross(context, position, size) {\n        context.beginPath();\n        const halfSize = size / 2;\n        context.moveTo(position.x - halfSize, position.y - halfSize);\n        context.lineTo(position.x + halfSize, position.y + halfSize);\n        context.moveTo(position.x - halfSize, position.y + halfSize);\n        context.lineTo(position.x + halfSize, position.y - halfSize);\n        context.stroke();\n    }\n    drawPlus(context, position, size) {\n        context.beginPath();\n        const halfSize = size / 2;\n        context.moveTo(position.x, position.y - halfSize);\n        context.lineTo(position.x, position.y + halfSize);\n        context.moveTo(position.x - halfSize, position.y);\n        context.lineTo(position.x + halfSize, position.y);\n        context.stroke();\n    }\n    drawDot(context, position, size) {\n        context.beginPath();\n        context.arc(position.x, position.y, size / 2, 0, Math.PI * 2);\n        context.fill();\n    }\n    drawBorder(context, border) {\n        var _a, _b, _c, _d, _e, _f, _g;\n        context.save();\n        const position = (_a = border.position) !== null && _a !== void 0 ? _a : (0, vec_1.vec)();\n        if (border.showLabel || border.showValue) {\n            this.drawLabel(context, Debug.prepareLabel((_b = border.label) !== null && _b !== void 0 ? _b : '', (_c = border.value) !== null && _c !== void 0 ? _c : '', border.showLabel, border.showValue), vec_1.vec.add(position !== null && position !== void 0 ? position : (0, vec_1.vec)(), border.labelOffset), 'left', (_d = border.padding) !== null && _d !== void 0 ? _d : this.options.padding, (_e = border.font) !== null && _e !== void 0 ? _e : this.options.font, (_f = border.foregroundColour) !== null && _f !== void 0 ? _f : this.options.foregroundColour, (_g = border.backgroundColour) !== null && _g !== void 0 ? _g : this.options.backgroundColour);\n        }\n        if (border.showBorder) {\n            context.lineWidth = border.borderWidth;\n            context.strokeStyle = context.fillStyle = border.borderColour;\n            switch (border.borderStyle) {\n                case 'solid':\n                    context.setLineDash([]);\n                    break;\n                case 'dashed':\n                    context.setLineDash([border.borderDashSize, border.borderDashSize]);\n                    break;\n                case 'dotted':\n                    context.setLineDash([border.borderWidth, border.borderWidth]);\n                    break;\n            }\n            switch (border.borderShape) {\n                case 'rectangle':\n                    if (border.size) {\n                        this.drawRectangle(context, position, border.size);\n                    }\n                    break;\n                case 'circle':\n                    if (border.radius) {\n                        this.drawCircle(context, position, border.radius);\n                    }\n                    break;\n            }\n        }\n        context.restore();\n    }\n    drawRectangle(context, position, size) {\n        context.beginPath();\n        context.rect(position.x, position.y, size.x, size.y);\n        context.stroke();\n    }\n    drawCircle(context, position, radius) {\n        context.beginPath();\n        context.arc(position.x, position.y, radius, 0, Math.PI * 2);\n        context.stroke();\n    }\n}\nexports[\"default\"] = Debug;\nDebug.defaultOptions = {\n    margin: 10,\n    padding: 4,\n    font: '10pt Lucida Console, monospace',\n    lineHeight: 12,\n    lineMargin: 0,\n    foregroundColour: '#fff',\n    backgroundColour: '#333',\n    defaultValue: {\n        align: 'left',\n        showLabel: true,\n    },\n    defaultChart: {\n        values: [],\n        valueBufferSize: 60,\n        valueBufferStride: 1,\n        minValue: 0,\n        maxValue: 100,\n        barWidth: 2,\n        align: 'left',\n        showLabel: true,\n        chartBackgroundColour: '#222',\n    },\n    defaultMarker: {\n        showLabel: true,\n        showValue: true,\n        showMarker: true,\n        markerSize: 6,\n        markerStyle: 'x',\n        markerColour: '#ccc',\n        space: 'world',\n        labelOffset: (0, vec_1.vec)(10),\n    },\n    defaultBorder: {\n        showLabel: true,\n        showValue: true,\n        showBorder: true,\n        borderWidth: 1,\n        borderStyle: 'solid',\n        borderShape: 'rectangle',\n        borderColour: '#ccc',\n        borderDashSize: 5,\n        space: 'world',\n        labelOffset: (0, vec_1.vec)(10),\n    },\n};\n\n\n//# sourceURL=webpack://@basementuniverse/debug/./index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nested_webpack_require_41142__(moduleId) {
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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __nested_webpack_require_41142__);
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
/******/ 	var __nested_webpack_exports__ = __nested_webpack_require_41142__("./index.ts");
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
const LightingScene_1 = __webpack_require__(/*! ./LightingScene */ "./src/LightingScene.ts");
const utils_1 = __webpack_require__(/*! ./utils */ "./src/utils.ts");
class CircleShadowCaster {
    constructor(data = {}) {
        var _a;
        this.type = 'CircleShadowCaster';
        this.id = '';
        this.folder = null;
        this.position = (0, vec_1.vec)();
        this.size = CircleShadowCaster.DEFAULT_SIZE;
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
    }
    serialise() {
        return {
            type: this.type,
            id: this.id,
            position: this.position,
            size: this.size,
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
                let newSize = vec_1.vec.sub(input_manager_1.default.mousePosition, this.position);
                if (input_manager_1.default.keyDown('ShiftLeft')) {
                    newSize = (0, utils_1.quantizeVec)(newSize, LightingScene_1.LightingScene.GRID_SIZE);
                }
                this.size = (0, utils_1.clampVec)(newSize, CircleShadowCaster.MIN_SIZE, CircleShadowCaster.MAX_SIZE);
            }
            else {
                let newPosition = vec_1.vec.sub(input_manager_1.default.mousePosition, this.dragOffset);
                if (input_manager_1.default.keyDown('ShiftLeft')) {
                    newPosition = (0, utils_1.quantizeVec)(newPosition, LightingScene_1.LightingScene.GRID_SIZE);
                }
                this.position = newPosition;
            }
        }
        debug_1.default.border(`CircleShadowCaster ${this.id}`, '', this.position, {
            level: 1,
            showLabel: Game_1.default.DEBUG_MODES[Game_1.default.debugMode].labels,
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
        Game.gui = new dat.GUI({
            width: 300,
        });
        Game.gui
            .add({ debugMode: Game.debugMode }, 'debugMode', [
            'none',
            'borders',
            'all',
        ])
            .onChange(v => {
            Game.debugMode = v;
        });
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
        debug_1.default.draw(this.context, Game.DEBUG_MODES[Game.debugMode].debugLevel);
    }
}
exports["default"] = Game;
Game.DEBUG_MODES = {
    none: {
        debugLevel: 2,
        labels: false,
    },
    borders: {
        debugLevel: 0,
        labels: false,
    },
    all: {
        debugLevel: 0,
        labels: true,
    },
};
Game.debugMode = 'borders';


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
const LightingScene_1 = __webpack_require__(/*! ./LightingScene */ "./src/LightingScene.ts");
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
                let newSize = vec_1.vec.sub(input_manager_1.default.mousePosition, this.position);
                if (input_manager_1.default.keyDown('ShiftLeft')) {
                    newSize = (0, utils_1.quantizeVec)(newSize, LightingScene_1.LightingScene.GRID_SIZE);
                }
                this.size = (0, utils_1.clampVec)(newSize, GroundShadowReceiver.MIN_SIZE, GroundShadowReceiver.MAX_SIZE);
            }
            else {
                let newPosition = vec_1.vec.sub(input_manager_1.default.mousePosition, this.dragOffset);
                if (input_manager_1.default.keyDown('ShiftLeft')) {
                    newPosition = (0, utils_1.quantizeVec)(newPosition, LightingScene_1.LightingScene.GRID_SIZE);
                }
                this.position = newPosition;
            }
        }
        debug_1.default.border(`GroundShadowReceiver ${this.id}`, '', this.position, {
            level: 1,
            showLabel: Game_1.default.DEBUG_MODES[Game_1.default.debugMode].labels,
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
GroundShadowReceiver.MAX_SIZE = (0, vec_1.vec)(1000, 1000);


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
            level: 1,
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
            level: 1,
            showLabel: Game_1.default.DEBUG_MODES[Game_1.default.debugMode].labels,
            showValue: false,
            markerColour: this.hovered || this.dragging
                ? Light.DEBUG_HOVER_COLOUR
                : Light.DEBUG_COLOUR,
        });
    }
    prepare(groundShadowReceivers, wallShadowReceivers, regionShadowCasters, spriteShadowCasters, circleShadowCasters) {
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
                if (!wall.receiveLight) {
                    this.wallLightContext.fillRect(wallRectangle.position.x, wallRectangle.position.y, wallRectangle.size.x, wallRectangle.size.y);
                    continue;
                }
                if (this.position.y < wallInterval.bottom) {
                    this.wallLightContext.save();
                    this.wallLightContext.globalAlpha = (0, utils_1.clamp)((0, utils_1.remap)(wallInterval.bottom - this.position.y, 0, Light.WALL_LIGHT_CUTOFF_DISTANCE, 0, 1), 0, 1);
                    this.wallLightContext.fillRect(wallRectangle.position.x, wallRectangle.position.y, wallRectangle.size.x, wallRectangle.size.y);
                    this.wallLightContext.restore();
                }
                for (const shadow of shadows) {
                    const shadowCasterRectangle = {
                        position: shadow.caster.position,
                        size: shadow.caster.size,
                    };
                    const shadowCasterInterval = (0, utils_2.rectangleToInterval)(shadowCasterRectangle);
                    if ((0, utils_2.rectanglesIntersect)(wallRectangle, shadowCasterRectangle)) {
                        continue;
                    }
                    if (shadow.leftEdge === null && shadow.rightEdge === null) {
                        continue;
                    }
                    if (shadow.leftEdge &&
                        shadow.leftEdge.start.y <= shadow.leftEdge.end.y &&
                        shadow.rightEdge &&
                        shadow.rightEdge.start.y <= shadow.rightEdge.end.y) {
                        continue;
                    }
                    if (wallInterval.bottom > shadowCasterInterval.bottom) {
                        continue;
                    }
                    if (shadowCasterInterval.top <= wallInterval.bottom &&
                        shadowCasterInterval.bottom >= wallInterval.bottom) {
                        if (shadowCasterInterval.right <= wallInterval.left) {
                            if ((shadow.rightEdge === null ||
                                shadow.rightEdge.start.x >= shadow.rightEdge.end.x) &&
                                (shadow.leftEdge === null ||
                                    shadow.leftEdge.start.x >= shadow.leftEdge.end.x)) {
                                continue;
                            }
                        }
                        if (shadowCasterInterval.left >= wallInterval.right) {
                            if ((shadow.rightEdge === null ||
                                shadow.rightEdge.start.x <= shadow.rightEdge.end.x) &&
                                (shadow.leftEdge === null ||
                                    shadow.leftEdge.start.x <= shadow.leftEdge.end.x)) {
                                continue;
                            }
                        }
                    }
                    if (wallInterval.bottom === shadowCasterInterval.bottom &&
                        !regionShadowCasters.some(c => {
                            const casterInterval = (0, utils_2.rectangleToInterval)({
                                position: c.position,
                                size: c.size,
                            });
                            return (casterInterval.top === shadowCasterInterval.bottom &&
                                (0, utils_2.overlap1d)({
                                    start: casterInterval.left,
                                    end: casterInterval.right,
                                }, {
                                    start: shadowCasterInterval.left,
                                    end: shadowCasterInterval.right,
                                }) !== null);
                        })) {
                        continue;
                    }
                    let leftIntercept = null;
                    if (shadow.leftEdge) {
                        leftIntercept = (0, utils_2.lineYIntercept)(shadow.leftEdge, wallInterval.bottom);
                        if (shadow.leftEdge.start.y < shadow.leftEdge.end.y) {
                            leftIntercept = wallInterval.left;
                        }
                    }
                    let rightIntercept = null;
                    if (shadow.rightEdge) {
                        rightIntercept = (0, utils_2.lineYIntercept)(shadow.rightEdge, wallInterval.bottom);
                        if (shadow.rightEdge.start.y < shadow.rightEdge.end.y) {
                            rightIntercept = wallInterval.right;
                        }
                    }
                    const min = Math.max(wallInterval.left, leftIntercept !== null && leftIntercept !== void 0 ? leftIntercept : -Infinity);
                    const max = Math.min(wallInterval.right, rightIntercept !== null && rightIntercept !== void 0 ? rightIntercept : Infinity);
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
                leftEdge = shadowEdges[0];
                rightEdge = shadowEdges[3];
                shadowPolygon.push(shadowEdges[0].start, shadowEdges[0].end, (0, vec_1.vec)(shadowEdges[0].end.x, shadowEdges[3].end.y), shadowEdges[3].end, shadowEdges[3].start, shadowEdges[2].start);
                break;
            case types_1.Sector2d.Top:
                if (shadowEdges.length !== 6) {
                    break;
                }
                leftEdge = shadowEdges[2];
                rightEdge = shadowEdges[1];
                shadowPolygon.push(shadowEdges[2].start, shadowEdges[2].end, (context) => {
                    context.arc(lightPosition.x, lightPosition.y, lightRadius + Light.SHADOW_BUFFER, vec_1.vec.rad(vec_1.vec.sub(shadowEdges[2].end, shadowEdges[2].start)), vec_1.vec.rad(vec_1.vec.sub(shadowEdges[1].end, shadowEdges[1].start)), false);
                }, shadowEdges[1].start, shadowEdges[5].start, shadowEdges[4].start);
                break;
            case types_1.Sector2d.TopRight:
                if (shadowEdges.length !== 4) {
                    break;
                }
                leftEdge = shadowEdges[2];
                rightEdge = shadowEdges[1];
                shadowPolygon.push(shadowEdges[2].start, shadowEdges[2].end, (0, vec_1.vec)(shadowEdges[1].end.x, shadowEdges[2].end.y), shadowEdges[1].end, shadowEdges[1].start, shadowEdges[3].start);
                break;
            case types_1.Sector2d.Left:
                if (shadowEdges.length !== 6) {
                    break;
                }
                leftEdge = shadowEdges[0];
                rightEdge = shadowEdges[5];
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
                leftEdge = shadowEdges[4];
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
Light.WALL_LIGHT_CUTOFF_DISTANCE = 20;


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
const utils_1 = __webpack_require__(/*! @basementuniverse/utils */ "./node_modules/@basementuniverse/utils/utils.js");
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
        this.showDebug = true;
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
        Game_1.default.gui
            .add({ click: () => this.store() }, 'click')
            .name('Save to local storage');
        Game_1.default.gui
            .add({ click: () => this.retrieve() }, 'click')
            .name('Load from local storage');
        Game_1.default.gui
            .add({ click: () => this.export() }, 'click')
            .name('Export state to JSON');
        Game_1.default.gui
            .add({ click: () => this.import() }, 'click')
            .name('Import state from JSON');
        Game_1.default.gui
            .add(this, 'mode', [
            'nolighting',
            'normal',
            'groundmask',
            'wallmask',
            'groundmaskedlightmap',
            'wallmaskedlightmap',
            'lightmap',
        ])
            .name('Mode');
        Game_1.default.gui
            .add({
            click: () => {
                this.wallShadowReceivers = LightingSystem_1.LightingSystem.mergeWallShadowReceivers(this.wallShadowReceivers);
                this.regionShadowCasters = LightingSystem_1.LightingSystem.mergeRegionShadowCasters(this.regionShadowCasters);
            },
        }, 'click')
            .name('Optimise');
        Game_1.default.gui.add(this.lightingSystem, 'ambientLightColour').listen();
    }
    store() {
        localStorage.setItem('lighting_demo_test_state', this.save());
    }
    retrieve() {
        const data = localStorage.getItem('lighting_demo_test_state');
        if (!data) {
            return;
        }
        this.load(data);
    }
    export() {
        console.log(this.save());
    }
    import() {
        const data = prompt('Paste state data here:');
        if (data) {
            this.load(data);
        }
    }
    save() {
        return JSON.stringify({
            ambientLightColour: this.lightingSystem.ambientLightColour,
            groundShadowReceivers: this.groundShadowReceivers.map(g => g.serialise()),
            wallShadowReceivers: this.wallShadowReceivers.map(w => w.serialise()),
            regionShadowCasters: this.regionShadowCasters.map(r => r.serialise()),
            spriteShadowCasters: this.spriteShadowCasters.map(s => s.serialise()),
            circleShadowCasters: this.circleShadowCasters.map(c => c.serialise()),
            lights: this.lightingSystem.lights.map(l => l.serialise()),
        });
    }
    load(data) {
        let state;
        try {
            state = JSON.parse(data);
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
        debug_1.default.value('Press D to duplicate selected', '');
        debug_1.default.value('CTRL-drag to resize', '');
        debug_1.default.value('Hold SHIFT while moving or resizing to snap to grid', '');
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
        if (input_manager_1.default.keyPressed('KeyD') && this.selected) {
            switch (this.selected.type) {
                case 'GroundShadowReceiver':
                    this.groundShadowReceivers.push(GroundShadowReceiver_1.GroundShadowReceiver.deserialise({
                        ...(0, utils_1.exclude)(this.selected.serialise(), 'id', 'position'),
                        position: vec_1.vec.cpy(input_manager_1.default.mousePosition),
                    }));
                    break;
                case 'WallShadowReceiver':
                    this.wallShadowReceivers.push(WallShadowReceiver_1.WallShadowReceiver.deserialise({
                        ...(0, utils_1.exclude)(this.selected.serialise(), 'id', 'position'),
                        position: vec_1.vec.cpy(input_manager_1.default.mousePosition),
                    }));
                    break;
                case 'RegionShadowCaster':
                    this.regionShadowCasters.push(RegionShadowCaster_1.RegionShadowCaster.deserialise({
                        ...(0, utils_1.exclude)(this.selected.serialise(), 'id', 'position'),
                        position: vec_1.vec.cpy(input_manager_1.default.mousePosition),
                    }));
                    break;
                case 'SpriteShadowCaster':
                    this.spriteShadowCasters.push(SpriteShadowCaster_1.SpriteShadowCaster.deserialise({
                        ...(0, utils_1.exclude)(this.selected.serialise(), 'id', 'position'),
                        position: vec_1.vec.cpy(input_manager_1.default.mousePosition),
                    }));
                    break;
                case 'CircleShadowCaster':
                    this.circleShadowCasters.push(CircleShadowCaster_1.CircleShadowCaster.deserialise({
                        ...(0, utils_1.exclude)(this.selected.serialise(), 'id', 'position'),
                        position: vec_1.vec.cpy(input_manager_1.default.mousePosition),
                    }));
                    break;
                case 'Light':
                    this.lightingSystem.lights.push(Light_1.Light.deserialise({
                        ...(0, utils_1.exclude)(this.selected.serialise(), 'id', 'position'),
                        position: vec_1.vec.cpy(input_manager_1.default.mousePosition),
                    }));
                    break;
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
LightingScene.GRID_SIZE = 20;


/***/ }),

/***/ "./src/LightingSystem.ts":
/*!*******************************!*\
  !*** ./src/LightingSystem.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LightingSystem = void 0;
const utils_1 = __webpack_require__(/*! @basementuniverse/utils */ "./node_modules/@basementuniverse/utils/utils.js");
const Game_1 = __webpack_require__(/*! ./Game */ "./src/Game.ts");
const types_1 = __webpack_require__(/*! ./types */ "./src/types.ts");
const utils_2 = __webpack_require__(/*! ./utils */ "./src/utils.ts");
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
    static mergeRegionShadowCasters(casters) {
        let result = [...casters].sort((a, b) => {
            if (a.position.y === b.position.y) {
                return a.position.x - b.position.x;
            }
            return a.position.y - b.position.y;
        });
        let i = 0;
        let merges;
        while ((merges = LightingSystem.findMerges(result)).length > 0 &&
            i++ < LightingSystem.MERGE_MAX_ITERATIONS) {
            merges.sort((a, b) => LightingSystem.MERGE_ORDER.indexOf(a[2]) -
                LightingSystem.MERGE_ORDER.indexOf(b[2]));
            for (const merge of merges) {
                const a = result.find(caster => caster.id === merge[0].id);
                const b = result.find(caster => caster.id === merge[1].id);
                const side = merge[2];
                if (a === undefined || b === undefined) {
                    continue;
                }
                if (side === 'duplicate') {
                    result = result.filter(caster => caster.id !== b.id);
                    continue;
                }
                result = result.filter(caster => ![a.id, b.id].includes(caster.id));
                result.push(a.merge(b));
                a.destroy();
                b.destroy();
            }
        }
        return result;
    }
    static mergeWallShadowReceivers(receivers) {
        let result = [...receivers].sort((a, b) => {
            if (a.position.y === b.position.y) {
                return a.position.x - b.position.x;
            }
            return a.position.y - b.position.y;
        });
        let i = 0;
        let merges;
        while ((merges = LightingSystem.findMerges(result, (a, b) => a.colour === b.colour && a.receiveLight === b.receiveLight)).length > 0 &&
            i++ < LightingSystem.MERGE_MAX_ITERATIONS) {
            merges.sort((a, b) => LightingSystem.MERGE_ORDER.indexOf(a[2]) -
                LightingSystem.MERGE_ORDER.indexOf(b[2]));
            for (const merge of merges) {
                const a = result.find(receiver => receiver.id === merge[0].id);
                const b = result.find(receiver => receiver.id === merge[1].id);
                const side = merge[2];
                if (a === undefined || b === undefined) {
                    continue;
                }
                if (side === 'duplicate') {
                    result = result.filter(receiver => receiver.id !== b.id);
                    continue;
                }
                result = result.filter(receiver => ![a.id, b.id].includes(receiver.id));
                result.push(a.merge(b));
                a.destroy();
                b.destroy();
            }
        }
        return result;
    }
    static findMerges(items, extraComparison) {
        var _a, _b, _c, _d, _e;
        const result = [];
        for (let i = 0; i < items.length; i++) {
            const a = (0, utils_2.rectangleToInterval)((0, utils_1.pluck)(items[i], 'position', 'size'));
            for (let j = i + 1; j < items.length; j++) {
                const b = (0, utils_2.rectangleToInterval)((0, utils_1.pluck)(items[j], 'position', 'size'));
                if (a.top === b.top &&
                    a.bottom === b.bottom &&
                    a.left === b.left &&
                    a.right === b.right &&
                    ((_a = extraComparison === null || extraComparison === void 0 ? void 0 : extraComparison(items[i], items[j])) !== null && _a !== void 0 ? _a : true)) {
                    result.push([items[i], items[j], 'duplicate']);
                    continue;
                }
                if (a.bottom === b.top &&
                    a.left === b.left &&
                    a.right === b.right &&
                    ((_b = extraComparison === null || extraComparison === void 0 ? void 0 : extraComparison(items[i], items[j])) !== null && _b !== void 0 ? _b : true)) {
                    result.push([items[i], items[j], types_1.Side.Bottom]);
                }
                if (a.top === b.bottom &&
                    a.left === b.left &&
                    a.right === b.right &&
                    ((_c = extraComparison === null || extraComparison === void 0 ? void 0 : extraComparison(items[i], items[j])) !== null && _c !== void 0 ? _c : true)) {
                    result.push([items[i], items[j], types_1.Side.Top]);
                }
                if (a.right === b.left &&
                    a.top === b.top &&
                    a.bottom === b.bottom &&
                    ((_d = extraComparison === null || extraComparison === void 0 ? void 0 : extraComparison(items[i], items[j])) !== null && _d !== void 0 ? _d : true)) {
                    result.push([items[i], items[j], types_1.Side.Right]);
                }
                if (a.left === b.right &&
                    a.top === b.top &&
                    a.bottom === b.bottom &&
                    ((_e = extraComparison === null || extraComparison === void 0 ? void 0 : extraComparison(items[i], items[j])) !== null && _e !== void 0 ? _e : true)) {
                    result.push([items[i], items[j], types_1.Side.Left]);
                }
            }
        }
        return result;
    }
}
exports.LightingSystem = LightingSystem;
LightingSystem.WALL_LIGHTING_Y_OFFSET = -30;
LightingSystem.MERGE_MAX_ITERATIONS = 100;
LightingSystem.MERGE_ORDER = [
    'duplicate',
    types_1.Side.Bottom,
    types_1.Side.Right,
    types_1.Side.Top,
    types_1.Side.Left,
];


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
const LightingScene_1 = __webpack_require__(/*! ./LightingScene */ "./src/LightingScene.ts");
const utils_1 = __webpack_require__(/*! ./utils */ "./src/utils.ts");
class RegionShadowCaster {
    constructor(data = {}) {
        var _a;
        this.type = 'RegionShadowCaster';
        this.id = '';
        this.folder = null;
        this.position = (0, vec_1.vec)();
        this.size = RegionShadowCaster.DEFAULT_SIZE;
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
    }
    serialise() {
        return {
            type: this.type,
            id: this.id,
            position: this.position,
            size: this.size,
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
    merge(b) {
        const position = (0, utils_1.minVec)(this.position, b.position);
        const br = (0, utils_1.maxVec)(vec_1.vec.add(this.position, this.size), vec_1.vec.add(b.position, b.size));
        return new RegionShadowCaster({
            position,
            size: vec_1.vec.sub(br, position),
        });
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
                let newSize = vec_1.vec.sub(input_manager_1.default.mousePosition, this.position);
                if (input_manager_1.default.keyDown('ShiftLeft')) {
                    newSize = (0, utils_1.quantizeVec)(newSize, LightingScene_1.LightingScene.GRID_SIZE);
                }
                this.size = (0, utils_1.clampVec)(newSize, RegionShadowCaster.MIN_SIZE, RegionShadowCaster.MAX_SIZE);
            }
            else {
                let newPosition = vec_1.vec.sub(input_manager_1.default.mousePosition, this.dragOffset);
                if (input_manager_1.default.keyDown('ShiftLeft')) {
                    newPosition = (0, utils_1.quantizeVec)(newPosition, LightingScene_1.LightingScene.GRID_SIZE);
                }
                this.position = newPosition;
            }
        }
        debug_1.default.border(`RegionShadowCaster ${this.id}`, '', this.position, {
            level: 1,
            showLabel: Game_1.default.DEBUG_MODES[Game_1.default.debugMode].labels,
            showValue: false,
            labelOffset: (0, vec_1.vec)(10, 50),
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
const LightingScene_1 = __webpack_require__(/*! ./LightingScene */ "./src/LightingScene.ts");
const utils_1 = __webpack_require__(/*! ./utils */ "./src/utils.ts");
class SpriteShadowCaster {
    constructor(data = {}) {
        var _a;
        this.type = 'SpriteShadowCaster';
        this.id = '';
        this.folder = null;
        this.position = (0, vec_1.vec)();
        this.size = SpriteShadowCaster.DEFAULT_SIZE;
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
        this.folder.add(this, 'spriteName');
    }
    serialise() {
        return {
            type: this.type,
            id: this.id,
            position: this.position,
            size: this.size,
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
                let newSize = vec_1.vec.sub(input_manager_1.default.mousePosition, this.position);
                if (input_manager_1.default.keyDown('ShiftLeft')) {
                    newSize = (0, utils_1.quantizeVec)(newSize, LightingScene_1.LightingScene.GRID_SIZE);
                }
                this.size = (0, utils_1.clampVec)(newSize, SpriteShadowCaster.MIN_SIZE, SpriteShadowCaster.MAX_SIZE);
            }
            else {
                let newPosition = vec_1.vec.sub(input_manager_1.default.mousePosition, this.dragOffset);
                if (input_manager_1.default.keyDown('ShiftLeft')) {
                    newPosition = (0, utils_1.quantizeVec)(newPosition, LightingScene_1.LightingScene.GRID_SIZE);
                }
                this.position = newPosition;
            }
        }
        debug_1.default.border(`SpriteShadowCaster ${this.id}`, '', this.position, {
            level: 1,
            showLabel: Game_1.default.DEBUG_MODES[Game_1.default.debugMode].labels,
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
const LightingScene_1 = __webpack_require__(/*! ./LightingScene */ "./src/LightingScene.ts");
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
        this.receiveLight = true;
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
        this.folder.add(this, 'receiveLight');
    }
    serialise() {
        return {
            type: this.type,
            id: this.id,
            position: this.position,
            size: this.size,
            colour: this.colour,
            receiveLight: this.receiveLight,
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
    merge(b) {
        const position = (0, utils_1.minVec)(this.position, b.position);
        const br = (0, utils_1.maxVec)(vec_1.vec.add(this.position, this.size), vec_1.vec.add(b.position, b.size));
        return new WallShadowReceiver({
            position,
            size: vec_1.vec.sub(br, position),
            colour: this.colour,
            receiveLight: this.receiveLight,
        });
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
                let newSize = vec_1.vec.sub(input_manager_1.default.mousePosition, this.position);
                if (input_manager_1.default.keyDown('ShiftLeft')) {
                    newSize = (0, utils_1.quantizeVec)(newSize, LightingScene_1.LightingScene.GRID_SIZE);
                }
                this.size = (0, utils_1.clampVec)(newSize, WallShadowReceiver.MIN_SIZE, WallShadowReceiver.MAX_SIZE);
            }
            else {
                let newPosition = vec_1.vec.sub(input_manager_1.default.mousePosition, this.dragOffset);
                if (input_manager_1.default.keyDown('ShiftLeft')) {
                    newPosition = (0, utils_1.quantizeVec)(newPosition, LightingScene_1.LightingScene.GRID_SIZE);
                }
                this.position = newPosition;
            }
        }
        debug_1.default.border(`WallShadowReceiver ${this.id}`, '', this.position, {
            level: 1,
            showLabel: Game_1.default.DEBUG_MODES[Game_1.default.debugMode].labels,
            showValue: false,
            labelOffset: (0, vec_1.vec)(10, 30),
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
exports.Side = exports.Sector2d = exports.Sector1d = void 0;
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
var Side;
(function (Side) {
    Side["Top"] = "top";
    Side["Right"] = "right";
    Side["Bottom"] = "bottom";
    Side["Left"] = "left";
})(Side = exports.Side || (exports.Side = {}));


/***/ }),

/***/ "./src/utils.ts":
/*!**********************!*\
  !*** ./src/utils.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.sector2d = exports.sector1d = exports.polygon = exports.rectangleVertices = exports.rectanglesIntersect = exports.overlap2d = exports.overlap1d = exports.rectangleToInterval = exports.intervalToRectangle = exports.intervalLength = exports.lineYIntercept = exports.lineInRectangle = exports.lineInInterval = exports.pointInRectangle = exports.pointInInterval = exports.colourToString = exports.quantizeVec = exports.clampVec = exports.maxVec = exports.minVec = void 0;
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
function quantizeVec(v, quant) {
    return vec_1.vec.map(v, n => Math.round(n / quant) * quant);
}
exports.quantizeVec = quantizeVec;
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
function lineYIntercept(line, y, allowBefore = true, allowAfter = true) {
    if ((0, utils_1.floatEquals)(line.start.y, line.end.y)) {
        return null;
    }
    const t = (y - line.start.y) / (line.end.y - line.start.y);
    if (t < 0 && !allowBefore) {
        return null;
    }
    if (t > 1 && !allowAfter) {
        return null;
    }
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
    return tl1.x < br2.x && br1.x > tl2.x && tl1.y < br2.y && br1.y > tl2.y;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYywwQkFBbUIsR0FBRyxnQ0FBbUI7QUFDdkQ7QUFDQSxpQkFBaUIsMEJBQW1CO0FBQ3BDLFVBQVU7QUFDVjtBQUNBLENBQUM7Ozs7Ozs7Ozs7QUN4RkQ7QUFDQTtBQUNBLHNEQUFzRDtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsK0NBQStDLEVBQUU7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7Ozs7Ozs7Ozs7O0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0JBQW9CLGtCQUFrQjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7QUFRRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOzs7Ozs7Ozs7Ozs7QUFZQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9LQUFvSyxnQ0FBZ0M7QUFDcE07QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QUFDTDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLGdGQUFnRix1RUFBdUU7QUFDdko7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsSUFBSTtBQUNKO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLG9DQUFvQztBQUM1RDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNB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QUFDQTtBQUNBO0FBQ0EsZUFBZSxrQkFBZTs7Ozs7Ozs7Ozs7QUN2SmpCOztBQUViLDhDQUE2QztBQUM3QztBQUNBLENBQUMsRUFBQztBQUNGLGtCQUFlO0FBQ2Ysb0NBQW9DLG1CQUFPLENBQUMsc0VBQVk7QUFDeEQscUNBQXFDLGlDQUFpQztBQUN0RTtBQUNBO0FBQ0E7QUFDQSxlQUFlLGtCQUFlOzs7Ozs7Ozs7OztBQ1hqQjs7QUFFYiw4Q0FBNkM7QUFDN0M7QUFDQSxDQUFDLEVBQUM7QUFDRixrQkFBZTtBQUNmLHVDQUF1QyxtQkFBTyxDQUFDLDRFQUFlO0FBQzlELHFDQUFxQyxpQ0FBaUM7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxrQkFBZTs7Ozs7O1VDZDlCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ05BLGtFQUEwQjtBQUUxQixNQUFNLENBQUMsTUFBTSxHQUFHLEdBQUcsRUFBRTtJQUNuQixNQUFNLElBQUksR0FBRyxJQUFJLGNBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDdkQsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0FBQ3BCLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2xpZ2h0aW5nLTIuNWQvLi9ub2RlX21vZHVsZXMvQGJhc2VtZW50dW5pdmVyc2UvZGVidWcvYnVpbGQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbGlnaHRpbmctMi41ZC8uL25vZGVfbW9kdWxlcy9AYmFzZW1lbnR1bml2ZXJzZS9pbnB1dC1tYW5hZ2VyL2J1aWxkL2luZGV4LmpzIiwid2VicGFjazovL2xpZ2h0aW5nLTIuNWQvLi9ub2RlX21vZHVsZXMvQGJhc2VtZW50dW5pdmVyc2UvcGFyc2Vjb2xvci9wYXJzZWNvbG9yLmpzIiwid2VicGFjazovL2xpZ2h0aW5nLTIuNWQvLi9ub2RlX21vZHVsZXMvQGJhc2VtZW50dW5pdmVyc2UvdXRpbHMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vbGlnaHRpbmctMi41ZC8uL25vZGVfbW9kdWxlcy9AYmFzZW1lbnR1bml2ZXJzZS92ZWMvdmVjLmpzIiwid2VicGFjazovL2xpZ2h0aW5nLTIuNWQvLi9ub2RlX21vZHVsZXMvZGF0Lmd1aS9idWlsZC9kYXQuZ3VpLm1vZHVsZS5qcyIsIndlYnBhY2s6Ly9saWdodGluZy0yLjVkLy4vc3JjL0NpcmNsZVNoYWRvd0Nhc3Rlci50cyIsIndlYnBhY2s6Ly9saWdodGluZy0yLjVkLy4vc3JjL0dhbWUudHMiLCJ3ZWJwYWNrOi8vbGlnaHRpbmctMi41ZC8uL3NyYy9Hcm91bmRTaGFkb3dSZWNlaXZlci50cyIsIndlYnBhY2s6Ly9saWdodGluZy0yLjVkLy4vc3JjL0xpZ2h0LnRzIiwid2VicGFjazovL2xpZ2h0aW5nLTIuNWQvLi9zcmMvTGlnaHRpbmdTY2VuZS50cyIsIndlYnBhY2s6Ly9saWdodGluZy0yLjVkLy4vc3JjL0xpZ2h0aW5nU3lzdGVtLnRzIiwid2VicGFjazovL2xpZ2h0aW5nLTIuNWQvLi9zcmMvUmVnaW9uU2hhZG93Q2FzdGVyLnRzIiwid2VicGFjazovL2xpZ2h0aW5nLTIuNWQvLi9zcmMvU3ByaXRlU2hhZG93Q2FzdGVyLnRzIiwid2VicGFjazovL2xpZ2h0aW5nLTIuNWQvLi9zcmMvV2FsbFNoYWRvd1JlY2VpdmVyLnRzIiwid2VicGFjazovL2xpZ2h0aW5nLTIuNWQvLi9zcmMvY29uc3RhbnRzLnRzIiwid2VicGFjazovL2xpZ2h0aW5nLTIuNWQvLi9zcmMvdHlwZXMudHMiLCJ3ZWJwYWNrOi8vbGlnaHRpbmctMi41ZC8uL3NyYy91dGlscy50cyIsIndlYnBhY2s6Ly9saWdodGluZy0yLjVkLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9jb21tb25qcy1icm93c2VyL2luZGV4LmpzIiwid2VicGFjazovL2xpZ2h0aW5nLTIuNWQvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2NvbW1vbmpzLWJyb3dzZXIvbWF4LmpzIiwid2VicGFjazovL2xpZ2h0aW5nLTIuNWQvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2NvbW1vbmpzLWJyb3dzZXIvbWQ1LmpzIiwid2VicGFjazovL2xpZ2h0aW5nLTIuNWQvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2NvbW1vbmpzLWJyb3dzZXIvbmF0aXZlLmpzIiwid2VicGFjazovL2xpZ2h0aW5nLTIuNWQvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2NvbW1vbmpzLWJyb3dzZXIvbmlsLmpzIiwid2VicGFjazovL2xpZ2h0aW5nLTIuNWQvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2NvbW1vbmpzLWJyb3dzZXIvcGFyc2UuanMiLCJ3ZWJwYWNrOi8vbGlnaHRpbmctMi41ZC8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvY29tbW9uanMtYnJvd3Nlci9yZWdleC5qcyIsIndlYnBhY2s6Ly9saWdodGluZy0yLjVkLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9jb21tb25qcy1icm93c2VyL3JuZy5qcyIsIndlYnBhY2s6Ly9saWdodGluZy0yLjVkLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9jb21tb25qcy1icm93c2VyL3NoYTEuanMiLCJ3ZWJwYWNrOi8vbGlnaHRpbmctMi41ZC8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvY29tbW9uanMtYnJvd3Nlci9zdHJpbmdpZnkuanMiLCJ3ZWJwYWNrOi8vbGlnaHRpbmctMi41ZC8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvY29tbW9uanMtYnJvd3Nlci92MS5qcyIsIndlYnBhY2s6Ly9saWdodGluZy0yLjVkLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9jb21tb25qcy1icm93c2VyL3YxVG9WNi5qcyIsIndlYnBhY2s6Ly9saWdodGluZy0yLjVkLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9jb21tb25qcy1icm93c2VyL3YzLmpzIiwid2VicGFjazovL2xpZ2h0aW5nLTIuNWQvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2NvbW1vbmpzLWJyb3dzZXIvdjM1LmpzIiwid2VicGFjazovL2xpZ2h0aW5nLTIuNWQvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2NvbW1vbmpzLWJyb3dzZXIvdjQuanMiLCJ3ZWJwYWNrOi8vbGlnaHRpbmctMi41ZC8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvY29tbW9uanMtYnJvd3Nlci92NS5qcyIsIndlYnBhY2s6Ly9saWdodGluZy0yLjVkLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9jb21tb25qcy1icm93c2VyL3Y2LmpzIiwid2VicGFjazovL2xpZ2h0aW5nLTIuNWQvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2NvbW1vbmpzLWJyb3dzZXIvdjZUb1YxLmpzIiwid2VicGFjazovL2xpZ2h0aW5nLTIuNWQvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2NvbW1vbmpzLWJyb3dzZXIvdjcuanMiLCJ3ZWJwYWNrOi8vbGlnaHRpbmctMi41ZC8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvY29tbW9uanMtYnJvd3Nlci92YWxpZGF0ZS5qcyIsIndlYnBhY2s6Ly9saWdodGluZy0yLjVkLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9jb21tb25qcy1icm93c2VyL3ZlcnNpb24uanMiLCJ3ZWJwYWNrOi8vbGlnaHRpbmctMi41ZC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9saWdodGluZy0yLjVkL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9saWdodGluZy0yLjVkL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbGlnaHRpbmctMi41ZC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2xpZ2h0aW5nLTIuNWQvLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIEFUVEVOVElPTjogVGhlIFwiZXZhbFwiIGRldnRvb2wgaGFzIGJlZW4gdXNlZCAobWF5YmUgYnkgZGVmYXVsdCBpbiBtb2RlOiBcImRldmVsb3BtZW50XCIpLlxuICogVGhpcyBkZXZ0b29sIGlzIG5laXRoZXIgbWFkZSBmb3IgcHJvZHVjdGlvbiBub3IgZm9yIHJlYWRhYmxlIG91dHB1dCBmaWxlcy5cbiAqIEl0IHVzZXMgXCJldmFsKClcIiBjYWxscyB0byBjcmVhdGUgYSBzZXBhcmF0ZSBzb3VyY2UgZmlsZSBpbiB0aGUgYnJvd3NlciBkZXZ0b29scy5cbiAqIElmIHlvdSBhcmUgdHJ5aW5nIHRvIHJlYWQgdGhlIG91dHB1dCBmaWxlLCBzZWxlY3QgYSBkaWZmZXJlbnQgZGV2dG9vbCAoaHR0cHM6Ly93ZWJwYWNrLmpzLm9yZy9jb25maWd1cmF0aW9uL2RldnRvb2wvKVxuICogb3IgZGlzYWJsZSB0aGUgZGVmYXVsdCBkZXZ0b29sIHdpdGggXCJkZXZ0b29sOiBmYWxzZVwiLlxuICogSWYgeW91IGFyZSBsb29raW5nIGZvciBwcm9kdWN0aW9uLXJlYWR5IG91dHB1dCBmaWxlcywgc2VlIG1vZGU6IFwicHJvZHVjdGlvblwiIChodHRwczovL3dlYnBhY2suanMub3JnL2NvbmZpZ3VyYXRpb24vbW9kZS8pLlxuICovXG4oZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2Uge1xuXHRcdHZhciBhID0gZmFjdG9yeSgpO1xuXHRcdGZvcih2YXIgaSBpbiBhKSAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnID8gZXhwb3J0cyA6IHJvb3QpW2ldID0gYVtpXTtcblx0fVxufSkoc2VsZiwgKCkgPT4ge1xucmV0dXJuIC8qKioqKiovICgoKSA9PiB7IC8vIHdlYnBhY2tCb290c3RyYXBcbi8qKioqKiovIFx0dmFyIF9fd2VicGFja19tb2R1bGVzX18gPSAoe1xuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL0BiYXNlbWVudHVuaXZlcnNlL3V0aWxzL3V0aWxzLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL0BiYXNlbWVudHVuaXZlcnNlL3V0aWxzL3V0aWxzLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKi8gKChtb2R1bGUpID0+IHtcblxuZXZhbChcIi8qKlxcbiAqIEBvdmVydmlldyBBIGxpYnJhcnkgb2YgdXNlZnVsIGZ1bmN0aW9uc1xcbiAqIEBhdXRob3IgR29yZG9uIExhcnJpZ2FuXFxuICovXFxuXFxuLyoqXFxuICogQ2hlY2sgaWYgdHdvIG51bWJlcnMgYXJlIGFwcHJveGltYXRlbHkgZXF1YWxcXG4gKiBAcGFyYW0ge251bWJlcn0gYSBOdW1iZXIgYVxcbiAqIEBwYXJhbSB7bnVtYmVyfSBiIE51bWJlciBiXFxuICogQHBhcmFtIHtudW1iZXJ9IFtwPU51bWJlci5FUFNJTE9OXSBUaGUgcHJlY2lzaW9uIHZhbHVlXFxuICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiBudW1iZXJzIGEgYW5kIGIgYXJlIGFwcHJveGltYXRlbHkgZXF1YWxcXG4gKi9cXG5jb25zdCBmbG9hdEVxdWFscyA9IChhLCBiLCBwID0gTnVtYmVyLkVQU0lMT04pID0+IE1hdGguYWJzKGEgLSBiKSA8IHA7XFxuXFxuLyoqXFxuICogQ2xhbXAgYSBudW1iZXIgYmV0d2VlbiBtaW4gYW5kIG1heFxcbiAqIEBwYXJhbSB7bnVtYmVyfSBhIFRoZSBudW1iZXIgdG8gY2xhbXBcXG4gKiBAcGFyYW0ge251bWJlcn0gW21pbj0wXSBUaGUgbWluaW11bSB2YWx1ZVxcbiAqIEBwYXJhbSB7bnVtYmVyfSBbbWF4PTFdIFRoZSBtYXhpbXVtIHZhbHVlXFxuICogQHJldHVybiB7bnVtYmVyfSBBIGNsYW1wZWQgbnVtYmVyXFxuICovXFxuY29uc3QgY2xhbXAgPSAoYSwgbWluID0gMCwgbWF4ID0gMSkgPT4gYSA8IG1pbiA/IG1pbiA6IChhID4gbWF4ID8gbWF4IDogYSk7XFxuXFxuLyoqXFxuICogR2V0IHRoZSBmcmFjdGlvbmFsIHBhcnQgb2YgYSBudW1iZXJcXG4gKiBAcGFyYW0ge251bWJlcn0gYSBUaGUgbnVtYmVyIGZyb20gd2hpY2ggdG8gZ2V0IHRoZSBmcmFjdGlvbmFsIHBhcnRcXG4gKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBmcmFjdGlvbmFsIHBhcnQgb2YgdGhlIG51bWJlclxcbiAqL1xcbmNvbnN0IGZyYWMgPSBhID0+IGEgPj0gMCA/IGEgLSBNYXRoLmZsb29yKGEpIDogYSAtIE1hdGguY2VpbChhKTtcXG5cXG4vKipcXG4gKiBEbyBhIGxpbmVhciBpbnRlcnBvbGF0aW9uIGJldHdlZW4gYSBhbmQgYlxcbiAqIEBwYXJhbSB7bnVtYmVyfSBhIFRoZSBtaW5pbXVtIG51bWJlclxcbiAqIEBwYXJhbSB7bnVtYmVyfSBiIFRoZSBtYXhpbXVtIG51bWJlclxcbiAqIEBwYXJhbSB7bnVtYmVyfSBpIFRoZSBpbnRlcnBvbGF0aW9uIHZhbHVlLCBzaG91bGQgYmUgaW4gdGhlIGludGVydmFsIFswLCAxXVxcbiAqIEByZXR1cm4ge251bWJlcn0gQW4gaW50ZXJwb2xhdGVkIHZhbHVlIGluIHRoZSBpbnRlcnZhbCBbYSwgYl1cXG4gKi9cXG5jb25zdCBsZXJwID0gKGEsIGIsIGkpID0+IGEgKyAoYiAtIGEpICogaTtcXG5cXG4vKipcXG4gKiBHZXQgdGhlIHBvc2l0aW9uIG9mIGkgYmV0d2VlbiBhIGFuZCBiXFxuICogQHBhcmFtIHtudW1iZXJ9IGEgVGhlIG1pbmltdW0gbnVtYmVyXFxuICogQHBhcmFtIHtudW1iZXJ9IGIgVGhlIG1heGltdW0gbnVtYmVyXFxuICogQHBhcmFtIHtudW1iZXJ9IGkgVGhlIGludGVycG9sYXRlZCB2YWx1ZSBpbiB0aGUgaW50ZXJ2YWwgW2EsIGJdXFxuICogQHJldHVybiB7bnVtYmVyfSBUaGUgcG9zaXRpb24gb2YgaSBiZXR3ZWVuIGEgYW5kIGJcXG4gKi9cXG5jb25zdCB1bmxlcnAgPSAoYSwgYiwgaSkgPT4gKGkgLSBhKSAvIChiIC0gYSk7XFxuXFxuLyoqXFxuICogRG8gYSBiaWxpbmVhciBpbnRlcnBvbGF0aW9uXFxuICogQHBhcmFtIHtudW1iZXJ9IGMwMCBUb3AtbGVmdCB2YWx1ZVxcbiAqIEBwYXJhbSB7bnVtYmVyfSBjMTAgVG9wLXJpZ2h0IHZhbHVlXFxuICogQHBhcmFtIHtudW1iZXJ9IGMwMSBCb3R0b20tbGVmdCB2YWx1ZVxcbiAqIEBwYXJhbSB7bnVtYmVyfSBjMTEgQm90dG9tLXJpZ2h0IHZhbHVlXFxuICogQHBhcmFtIHtudW1iZXJ9IGl4IEludGVycG9sYXRpb24gdmFsdWUgYWxvbmcgeFxcbiAqIEBwYXJhbSB7bnVtYmVyfSBpeSBJbnRlcnBvbGF0aW9uIHZhbHVlIGFsb25nIHlcXG4gKiBAcmV0dXJuIHtudW1iZXJ9IEEgYmlsaW5lYXIgaW50ZXJwb2xhdGVkIHZhbHVlXFxuICovXFxuY29uc3QgYmxlcnAgPSAoYzAwLCBjMTAsIGMwMSwgYzExLCBpeCwgaXkpID0+IGxlcnAobGVycChjMDAsIGMxMCwgaXgpLCBsZXJwKGMwMSwgYzExLCBpeCksIGl5KTtcXG5cXG4vKipcXG4gKiBSZS1tYXAgYSBudW1iZXIgaSBmcm9tIHJhbmdlIGExLi4uYTIgdG8gYjEuLi5iMlxcbiAqIEBwYXJhbSB7bnVtYmVyfSBpIFRoZSBudW1iZXIgdG8gcmUtbWFwXFxuICogQHBhcmFtIHtudW1iZXJ9IGExXFxuICogQHBhcmFtIHtudW1iZXJ9IGEyXFxuICogQHBhcmFtIHtudW1iZXJ9IGIxXFxuICogQHBhcmFtIHtudW1iZXJ9IGIyXFxuICogQHJldHVybiB7bnVtYmVyfVxcbiAqL1xcbmNvbnN0IHJlbWFwID0gKGksIGExLCBhMiwgYjEsIGIyKSA9PiBiMSArIChpIC0gYTEpICogKGIyIC0gYjEpIC8gKGEyIC0gYTEpO1xcblxcbi8qKlxcbiAqIERvIGEgc21vb3RoIGludGVycG9sYXRpb24gYmV0d2VlbiBhIGFuZCBiXFxuICogQHBhcmFtIHtudW1iZXJ9IGEgVGhlIG1pbmltdW0gbnVtYmVyXFxuICogQHBhcmFtIHtudW1iZXJ9IGIgVGhlIG1heGltdW0gbnVtYmVyXFxuICogQHBhcmFtIHtudW1iZXJ9IGkgVGhlIGludGVycG9sYXRpb24gdmFsdWVcXG4gKiBAcmV0dXJuIHtudW1iZXJ9IEFuIGludGVycG9sYXRlZCB2YWx1ZSBpbiB0aGUgaW50ZXJ2YWwgW2EsIGJdXFxuICovXFxuY29uc3Qgc21vb3Roc3RlcCA9IChhLCBiLCBpKSA9PiBsZXJwKGEsIGIsIDMgKiBNYXRoLnBvdyhpLCAyKSAtIDIgKiBNYXRoLnBvdyhpLCAzKSk7XFxuXFxuLyoqXFxuICogR2V0IGFuIGFuZ2xlIGluIHJhZGlhbnNcXG4gKiBAcGFyYW0ge251bWJlcn0gZGVncmVlcyBUaGUgYW5nbGUgaW4gZGVncmVlc1xcbiAqIEByZXR1cm4ge251bWJlcn0gVGhlIGFuZ2xlIGluIHJhZGlhbnNcXG4gKi9cXG5jb25zdCByYWRpYW5zID0gZGVncmVlcyA9PiAoTWF0aC5QSSAvIDE4MCkgKiBkZWdyZWVzO1xcblxcbi8qKlxcbiAqIEdldCBhbiBhbmdsZSBpbiBkZWdyZWVzXFxuICogQHBhcmFtIHtudW1iZXJ9IHJhZGlhbnMgVGhlIGFuZ2xlIGluIHJhZGlhbnNcXG4gKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBhbmdsZSBpbiBkZWdyZWVzXFxuICovXFxuY29uc3QgZGVncmVlcyA9IHJhZGlhbnMgPT4gKDE4MCAvIE1hdGguUEkpICogcmFkaWFucztcXG5cXG4vKipcXG4gKiBHZXQgYSByYW5kb20gZmxvYXQgaW4gdGhlIGludGVydmFsIFttaW4sIG1heClcXG4gKiBAcGFyYW0ge251bWJlcn0gbWluIEluY2x1c2l2ZSBtaW5cXG4gKiBAcGFyYW0ge251bWJlcn0gbWF4IEV4Y2x1c2l2ZSBtYXhcXG4gKiBAcmV0dXJuIHtudW1iZXJ9IEEgcmFuZG9tIGZsb2F0IGluIHRoZSBpbnRlcnZhbCBbbWluLCBtYXgpXFxuICovXFxuY29uc3QgcmFuZG9tQmV0d2VlbiA9IChtaW4sIG1heCkgPT4gTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pICsgbWluO1xcblxcbi8qKlxcbiAqIEdldCBhIHJhbmRvbSBpbnRlZ2VyIGluIHRoZSBpbnRlcnZhbCBbbWluLCBtYXhdXFxuICogQHBhcmFtIHtudW1iZXJ9IG1pbiBJbmNsdXNpdmUgbWluXFxuICogQHBhcmFtIHtudW1iZXJ9IG1heCBJbmNsdXNpdmUgbWF4XFxuICogQHJldHVybiB7bnVtYmVyfSBBIHJhbmRvbSBpbnRlZ2VyIGluIHRoZSBpbnRlcnZhbCBbbWluLCBtYXhdXFxuICovXFxuY29uc3QgcmFuZG9tSW50QmV0d2VlbiA9IChtaW4sIG1heCkgPT4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpKSArIG1pbjtcXG5cXG4vKipcXG4gKiBHZXQgYSBub3JtYWxseS1kaXN0cmlidXRlZCByYW5kb20gbnVtYmVyXFxuICogQHBhcmFtIHtudW1iZXJ9IFttdT0wLjVdIFRoZSBtZWFuIHZhbHVlXFxuICogQHBhcmFtIHtudW1iZXJ9IFtzaWdtYT0wLjVdIFRoZSBzdGFuZGFyZCBkZXZpYXRpb25cXG4gKiBAcGFyYW0ge251bWJlcn0gW3NhbXBsZXM9Ml0gVGhlIG51bWJlciBvZiBzYW1wbGVzXFxuICogQHJldHVybiB7bnVtYmVyfSBBIG5vcm1hbGx5LWRpc3RyaWJ1dGVkIHJhbmRvbSBudW1iZXJcXG4gKi9cXG5jb25zdCBjbHRSYW5kb20gPSAobXUgPSAwLjUsIHNpZ21hID0gMC41LCBzYW1wbGVzID0gMikgPT4ge1xcbiAgbGV0IHRvdGFsID0gMDtcXG4gIGZvciAobGV0IGkgPSBzYW1wbGVzOyBpLS07KSB7XFxuICAgIHRvdGFsICs9IE1hdGgucmFuZG9tKCk7XFxuICB9XFxuICByZXR1cm4gbXUgKyAodG90YWwgLSBzYW1wbGVzIC8gMikgLyAoc2FtcGxlcyAvIDIpICogc2lnbWE7XFxufTtcXG5cXG4vKipcXG4gKiBHZXQgYSBub3JtYWxseS1kaXN0cmlidXRlZCByYW5kb20gaW50ZWdlciBpbiB0aGUgaW50ZXJ2YWwgW21pbiwgbWF4XVxcbiAqIEBwYXJhbSB7bnVtYmVyfSBtaW4gSW5jbHVzaXZlIG1pblxcbiAqIEBwYXJhbSB7bnVtYmVyfSBtYXggSW5jbHVzaXZlIG1heFxcbiAqIEByZXR1cm4ge251bWJlcn0gQSBub3JtYWxseS1kaXN0cmlidXRlZCByYW5kb20gaW50ZWdlclxcbiAqL1xcbmNvbnN0IGNsdFJhbmRvbUludCA9IChtaW4sIG1heCkgPT4gTWF0aC5mbG9vcihtaW4gKyBjbHRSYW5kb20oMC41LCAwLjUsIDIpICogKG1heCArIDEgLSBtaW4pKTtcXG5cXG4vKipcXG4gKiBSZXR1cm4gYSB3ZWlnaHRlZCByYW5kb20gaW50ZWdlclxcbiAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0gdyBBbiBhcnJheSBvZiB3ZWlnaHRzXFxuICogQHJldHVybiB7bnVtYmVyfSBBbiBpbmRleCBmcm9tIHdcXG4gKi9cXG5jb25zdCB3ZWlnaHRlZFJhbmRvbSA9IHcgPT4ge1xcbiAgbGV0IHRvdGFsID0gdy5yZWR1Y2UoKGEsIGkpID0+IGEgKyBpLCAwKSwgbiA9IDA7XFxuICBjb25zdCByID0gTWF0aC5yYW5kb20oKSAqIHRvdGFsO1xcbiAgd2hpbGUgKHRvdGFsID4gcikge1xcbiAgICB0b3RhbCAtPSB3W24rK107XFxuICB9XFxuICByZXR1cm4gbiAtIDE7XFxufTtcXG5cXG4vKipcXG4gKiBBbiBpbnRlcnBvbGF0aW9uIGZ1bmN0aW9uXFxuICogQGNhbGxiYWNrIGludGVycG9sYXRpb25DYWxsYmFja1xcbiAqIEBwYXJhbSB7bnVtYmVyfSBhIFRoZSBtaW5pbXVtIG51bWJlclxcbiAqIEBwYXJhbSB7bnVtYmVyfSBiIFRoZSBtYXhpbXVtIG51bWJlclxcbiAqIEBwYXJhbSB7bnVtYmVyfSBpIFRoZSBpbnRlcnBvbGF0aW9uIHZhbHVlLCBzaG91bGQgYmUgaW4gdGhlIGludGVydmFsIFswLCAxXVxcbiAqIEByZXR1cm4ge251bWJlcn0gVGhlIGludGVycG9sYXRlZCB2YWx1ZSBpbiB0aGUgaW50ZXJ2YWwgW2EsIGJdXFxuICovXFxuXFxuLyoqXFxuICogUmV0dXJuIGFuIGludGVycG9sYXRlZCB2YWx1ZSBmcm9tIGFuIGFycmF5XFxuICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSBhIEFuIGFycmF5IG9mIHZhbHVlcyBpbnRlcnBvbGF0ZVxcbiAqIEBwYXJhbSB7bnVtYmVyfSBpIEEgbnVtYmVyIGluIHRoZSBpbnRlcnZhbCBbMCwgMV1cXG4gKiBAcGFyYW0ge2ludGVycG9sYXRpb25DYWxsYmFja30gW2Y9TWF0aC5sZXJwXSBUaGUgaW50ZXJwb2xhdGlvbiBmdW5jdGlvbiB0byB1c2VcXG4gKiBAcmV0dXJuIHtudW1iZXJ9IEFuIGludGVycG9sYXRlZCB2YWx1ZSBpbiB0aGUgaW50ZXJ2YWwgW21pbihhKSwgbWF4KGEpXVxcbiAqL1xcbmNvbnN0IGxlcnBBcnJheSA9IChhLCBpLCBmID0gbGVycCkgPT4ge1xcbiAgY29uc3QgcyA9IGkgKiAoYS5sZW5ndGggLSAxKTtcXG4gIGNvbnN0IHAgPSBjbGFtcChNYXRoLnRydW5jKHMpLCAwLCBhLmxlbmd0aCAtIDEpO1xcbiAgcmV0dXJuIGYoYVtwXSB8fCAwLCBhW3AgKyAxXSB8fCAwLCBmcmFjKHMpKTtcXG59O1xcblxcbi8qKlxcbiAqIEdldCB0aGUgZG90IHByb2R1Y3Qgb2YgdHdvIHZlY3RvcnNcXG4gKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IGEgVmVjdG9yIGFcXG4gKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IGIgVmVjdG9yIGJcXG4gKiBAcmV0dXJuIHtudW1iZXJ9IGEg4oiZIGJcXG4gKi9cXG5jb25zdCBkb3QgPSAoYSwgYikgPT4gYS5yZWR1Y2UoKG4sIHYsIGkpID0+IG4gKyB2ICogYltpXSwgMCk7XFxuXFxuLyoqXFxuICogR2V0IHRoZSBmYWN0b3JpYWwgb2YgYSBudW1iZXJcXG4gKiBAcGFyYW0ge251bWJlcn0gYVxcbiAqIEByZXR1cm4ge251bWJlcn0gYSFcXG4gKi9cXG5jb25zdCBmYWN0b3JpYWwgPSBhID0+IHtcXG4gIGxldCByZXN1bHQgPSAxO1xcbiAgZm9yIChsZXQgaSA9IDI7IGkgPD0gYTsgaSsrKSB7XFxuICAgIHJlc3VsdCAqPSBpO1xcbiAgfVxcbiAgcmV0dXJuIHJlc3VsdDtcXG59O1xcblxcbi8qKlxcbiAqIEdldCB0aGUgbnVtYmVyIG9mIHBlcm11dGF0aW9ucyBvZiByIGVsZW1lbnRzIGZyb20gYSBzZXQgb2YgbiBlbGVtZW50c1xcbiAqIEBwYXJhbSB7bnVtYmVyfSBuXFxuICogQHBhcmFtIHtudW1iZXJ9IHJcXG4gKiBAcmV0dXJuIHtudW1iZXJ9IG5QclxcbiAqL1xcbmNvbnN0IHBlcm11dGF0aW9uID0gKG4sIHIpID0+IGZhY3RvcmlhbChuKSAvIGZhY3RvcmlhbChuIC0gcik7XFxuXFxuLyoqXFxuICogR2V0IHRoZSBudW1iZXIgb2YgY29tYmluYXRpb25zIG9mIHIgZWxlbWVudHMgZnJvbSBhIHNldCBvZiBuIGVsZW1lbnRzXFxuICogQHBhcmFtIHtudW1iZXJ9IG5cXG4gKiBAcGFyYW0ge251bWJlcn0gclxcbiAqIEByZXR1cm4ge251bWJlcn0gbkNyXFxuICovXFxuY29uc3QgY29tYmluYXRpb24gPSAobiwgcikgPT4gZmFjdG9yaWFsKG4pIC8gKGZhY3RvcmlhbChyKSAqIGZhY3RvcmlhbChuIC0gcikpO1xcblxcbi8qKlxcbiAqIEEgZnVuY3Rpb24gZm9yIGdlbmVyYXRpbmcgYXJyYXkgdmFsdWVzXFxuICogQGNhbGxiYWNrIHRpbWVzQ2FsbGJhY2tcXG4gKiBAcGFyYW0ge251bWJlcn0gaSBUaGUgYXJyYXkgaW5kZXhcXG4gKiBAcmV0dXJuIHsqfSBUaGUgYXJyYXkgdmFsdWVcXG4gKi9cXG5cXG4vKipcXG4gKiBSZXR1cm4gYSBuZXcgYXJyYXkgd2l0aCBsZW5ndGggbiBieSBjYWxsaW5nIGZ1bmN0aW9uIGYoaSkgb24gZWFjaCBlbGVtZW50XFxuICogQHBhcmFtIHt0aW1lc0NhbGxiYWNrfSBmXFxuICogQHBhcmFtIHtudW1iZXJ9IG4gVGhlIHNpemUgb2YgdGhlIGFycmF5XFxuICogQHJldHVybiB7QXJyYXk8Kj59XFxuICovXFxuY29uc3QgdGltZXMgPSAoZiwgbikgPT4gQXJyYXkobikuZmlsbCgwKS5tYXAoKF8sIGkpID0+IGYoaSkpO1xcblxcbi8qKlxcbiAqIFJldHVybiBhbiBhcnJheSBjb250YWluaW5nIG51bWJlcnMgMC0+KG4gLSAxKVxcbiAqIEBwYXJhbSB7bnVtYmVyfSBuIFRoZSBzaXplIG9mIHRoZSBhcnJheVxcbiAqIEByZXR1cm4ge0FycmF5PG51bWJlcj59IEFuIGFycmF5IG9mIGludGVnZXJzIDAtPihuIC0gMSlcXG4gKi9cXG5jb25zdCByYW5nZSA9IG4gPT4gdGltZXMoaSA9PiBpLCBuKTtcXG5cXG4vKipcXG4gKiBaaXAgMiBhcnJheXMgdG9nZXRoZXIsIGkuZS4gKFsxLCAyLCAzXSwgW2EsIGIsIGNdKSA9PiBbWzEsIGFdLCBbMiwgYl0sIFszLCBjXV1cXG4gKiBAcGFyYW0ge0FycmF5PCo+fSBhXFxuICogQHBhcmFtIHtBcnJheTwqPn0gYlxcbiAqIEByZXR1cm4ge0FycmF5PEFycmF5PCo+Pn1cXG4gKi9cXG5jb25zdCB6aXAgPSAoYSwgYikgPT4gYS5tYXAoKGssIGkpID0+IFtrLCBiW2ldXSk7XFxuXFxuLyoqXFxuICogUmV0dXJuIGFycmF5W2ldIHdpdGggcG9zaXRpdmUgYW5kIG5lZ2F0aXZlIHdyYXBwaW5nXFxuICogQHBhcmFtIHtBcnJheTwqPn0gYVxcbiAqIEBwYXJhbSB7bnVtYmVyfSBpIFRoZSBwb3NpdGl2ZWx5L25lZ2F0aXZlbHkgd3JhcHBlZCBhcnJheSBpbmRleFxcbiAqIEByZXR1cm4geyp9IEFuIGVsZW1lbnQgZnJvbSB0aGUgYXJyYXlcXG4gKi9cXG5jb25zdCBhdCA9IChhLCBpKSA9PiBhW2kgPCAwID8gYS5sZW5ndGggLSAoTWF0aC5hYnMoaSArIDEpICUgYS5sZW5ndGgpIC0gMSA6IGkgJSBhLmxlbmd0aF07XFxuXFxuLyoqXFxuICogQ2hvcCBhbiBhcnJheSBpbnRvIGNodW5rcyBvZiBzaXplIG5cXG4gKiBAcGFyYW0ge0FycmF5PCo+fSBhXFxuICogQHBhcmFtIHtudW1iZXJ9IG4gVGhlIGNodW5rIHNpemVcXG4gKiBAcmV0dXJuIHtBcnJheTxBcnJheTwqPj59IEFuIGFycmF5IG9mIGFycmF5IGNodW5rc1xcbiAqL1xcbmNvbnN0IGNodW5rID0gKGEsIG4pID0+IHRpbWVzKGkgPT4gYS5zbGljZShpICogbiwgaSAqIG4gKyBuKSwgTWF0aC5jZWlsKGEubGVuZ3RoIC8gbikpO1xcblxcbi8qKlxcbiAqIFJhbmRvbWx5IHNodWZmbGUgYSBzaGFsbG93IGNvcHkgb2YgYW4gYXJyYXlcXG4gKiBAcGFyYW0ge0FycmF5PCo+fSBhXFxuICogQHJldHVybiB7QXJyYXk8Kj59IFRoZSBzaHVmZmxlZCBhcnJheVxcbiAqL1xcbmNvbnN0IHNodWZmbGUgPSBhID0+IGEuc2xpY2UoKS5zb3J0KCgpID0+IE1hdGgucmFuZG9tKCkgLSAwLjUpO1xcblxcbmlmICh0cnVlKSB7XFxuICBtb2R1bGUuZXhwb3J0cyA9IHtcXG4gICAgZmxvYXRFcXVhbHMsXFxuICAgIGNsYW1wLFxcbiAgICBmcmFjLFxcbiAgICBsZXJwLFxcbiAgICB1bmxlcnAsXFxuICAgIGJsZXJwLFxcbiAgICByZW1hcCxcXG4gICAgc21vb3Roc3RlcCxcXG4gICAgcmFkaWFucyxcXG4gICAgZGVncmVlcyxcXG4gICAgcmFuZG9tQmV0d2VlbixcXG4gICAgcmFuZG9tSW50QmV0d2VlbixcXG4gICAgY2x0UmFuZG9tLFxcbiAgICBjbHRSYW5kb21JbnQsXFxuICAgIHdlaWdodGVkUmFuZG9tLFxcbiAgICBsZXJwQXJyYXksXFxuICAgIGRvdCxcXG4gICAgZmFjdG9yaWFsLFxcbiAgICBwZXJtdXRhdGlvbixcXG4gICAgY29tYmluYXRpb24sXFxuICAgIHRpbWVzLFxcbiAgICByYW5nZSxcXG4gICAgemlwLFxcbiAgICBhdCxcXG4gICAgY2h1bmssXFxuICAgIHNodWZmbGUsXFxuICB9O1xcbn1cXG5cXG5cXG4vLyMgc291cmNlVVJMPXdlYnBhY2s6Ly9AYmFzZW1lbnR1bml2ZXJzZS9kZWJ1Zy8uL25vZGVfbW9kdWxlcy9AYmFzZW1lbnR1bml2ZXJzZS91dGlscy91dGlscy5qcz9cIik7XG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL0BiYXNlbWVudHVuaXZlcnNlL3ZlYy92ZWMuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9AYmFzZW1lbnR1bml2ZXJzZS92ZWMvdmVjLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqLyAoKG1vZHVsZSwgX191bnVzZWRfd2VicGFja19leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSA9PiB7XG5cbmV2YWwoXCJjb25zdCB7IHRpbWVzLCBjaHVuaywgZG90IH0gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBAYmFzZW1lbnR1bml2ZXJzZS91dGlscyAqLyBcXFwiLi9ub2RlX21vZHVsZXMvQGJhc2VtZW50dW5pdmVyc2UvdXRpbHMvdXRpbHMuanNcXFwiKTtcXG5cXG4vKipcXG4gKiBAb3ZlcnZpZXcgQSBsaWJyYXJ5IG9mIHVzZWZ1bCBmdW5jdGlvbnNcXG4gKiBAYXV0aG9yIEdvcmRvbiBMYXJyaWdhblxcbiAqL1xcblxcbi8qKlxcbiAqIEEgMmQgdmVjdG9yXFxuICogQHR5cGVkZWYge09iamVjdH0gdmVjXFxuICogQHByb3BlcnR5IHtudW1iZXJ9IHggVGhlIHggY29tcG9uZW50IG9mIHRoZSB2ZWN0b3JcXG4gKiBAcHJvcGVydHkge251bWJlcn0geSBUaGUgeSBjb21wb25lbnQgb2YgdGhlIHZlY3RvclxcbiAqL1xcblxcbi8qKlxcbiAqIENyZWF0ZSBhIG5ldyB2ZWN0b3JcXG4gKiBAcGFyYW0ge251bWJlcnx2ZWN9IFt4XSBUaGUgeCBjb21wb25lbnQgb2YgdGhlIHZlY3Rvciwgb3IgYSB2ZWN0b3IgdG8gY29weVxcbiAqIEBwYXJhbSB7bnVtYmVyfSBbeV0gVGhlIHkgY29tcG9uZW50IG9mIHRoZSB2ZWN0b3JcXG4gKiBAcmV0dXJuIHt2ZWN9IEEgbmV3IHZlY3RvclxcbiAqIEBleGFtcGxlIDxjYXB0aW9uPlZhcmlvdXMgd2F5cyB0byBpbml0aWFsaXNlIGEgdmVjdG9yPC9jYXB0aW9uPlxcbiAqIGxldCBhID0gdmVjKDMsIDIpOyAgLy8gKDMsIDIpXFxuICogbGV0IGIgPSB2ZWMoNCk7ICAgICAvLyAoNCwgNClcXG4gKiBsZXQgYyA9IHZlYyhhKTsgICAgIC8vICgzLCAyKVxcbiAqIGxldCBkID0gdmVjKCk7ICAgICAgLy8gKDAsIDApXFxuICovXFxuY29uc3QgdmVjID0gKHgsIHkpID0+ICgheCAmJiAheSA/XFxuICB7IHg6IDAsIHk6IDAgfSA6ICh0eXBlb2YgeCA9PT0gJ29iamVjdCcgP1xcbiAgICB7IHg6IHgueCB8fCAwLCB5OiB4LnkgfHwgMCB9IDogKHkgPT09IG51bGwgfHwgeSA9PT0gdW5kZWZpbmVkID9cXG4gICAgICB7IHg6IHgsIHk6IHggfSA6IHsgeDogeCwgeTogeSB9KVxcbiAgKVxcbik7XFxuXFxuLyoqXFxuICogR2V0IHRoZSBjb21wb25lbnRzIG9mIGEgdmVjdG9yIGFzIGFuIGFycmF5XFxuICogQHBhcmFtIHt2ZWN9IGEgVGhlIHZlY3RvciB0byBnZXQgY29tcG9uZW50cyBmcm9tXFxuICogQHJldHVybiB7QXJyYXk8bnVtYmVyPn0gVGhlIHZlY3RvciBjb21wb25lbnRzIGFzIGFuIGFycmF5XFxuICovXFxudmVjLmNvbXBvbmVudHMgPSBhID0+IFthLngsIGEueV07XFxuXFxuLyoqXFxuICogUmV0dXJuIGEgdW5pdCB2ZWN0b3IgKDEsIDApXFxuICogQHJldHVybiB7dmVjfSBBIHVuaXQgdmVjdG9yICgxLCAwKVxcbiAqL1xcbnZlYy51eCA9ICgpID0+IHZlYygxLCAwKTtcXG5cXG4vKipcXG4gKiBSZXR1cm4gYSB1bml0IHZlY3RvciAoMCwgMSlcXG4gKiBAcmV0dXJuIHt2ZWN9IEEgdW5pdCB2ZWN0b3IgKDAsIDEpXFxuICovXFxudmVjLnV5ID0gKCkgPT4gdmVjKDAsIDEpO1xcblxcbi8qKlxcbiAqIEFkZCB2ZWN0b3JzXFxuICogQHBhcmFtIHt2ZWN9IGEgVmVjdG9yIGFcXG4gKiBAcGFyYW0ge3ZlY30gYiBWZWN0b3IgYlxcbiAqIEByZXR1cm4ge3ZlY30gYSArIGJcXG4gKi9cXG52ZWMuYWRkID0gKGEsIGIpID0+ICh7IHg6IGEueCArIGIueCwgeTogYS55ICsgYi55IH0pO1xcblxcbi8qKlxcbiAqIFNjYWxlIGEgdmVjdG9yXFxuICogQHBhcmFtIHt2ZWN9IGEgVmVjdG9yIGFcXG4gKiBAcGFyYW0ge251bWJlcn0gYiBTY2FsYXIgYlxcbiAqIEByZXR1cm4ge3ZlY30gYSAqIGJcXG4gKi9cXG52ZWMubXVsID0gKGEsIGIpID0+ICh7IHg6IGEueCAqIGIsIHk6IGEueSAqIGIgfSk7XFxuXFxuLyoqXFxuICogU3VidHJhY3QgdmVjdG9yc1xcbiAqIEBwYXJhbSB7dmVjfSBhIFZlY3RvciBhXFxuICogQHBhcmFtIHt2ZWN9IGIgVmVjdG9yIGJcXG4gKiBAcmV0dXJuIHt2ZWN9IGEgLSBiXFxuICovXFxudmVjLnN1YiA9IChhLCBiKSA9PiAoeyB4OiBhLnggLSBiLngsIHk6IGEueSAtIGIueSB9KTtcXG5cXG4vKipcXG4gKiBHZXQgdGhlIGxlbmd0aCBvZiBhIHZlY3RvclxcbiAqIEBwYXJhbSB7dmVjfSBhIFZlY3RvciBhXFxuICogQHJldHVybiB7bnVtYmVyfSB8YXxcXG4gKi9cXG52ZWMubGVuID0gYSA9PiBNYXRoLnNxcnQoYS54ICogYS54ICsgYS55ICogYS55KTtcXG5cXG4vKipcXG4gKiBHZXQgdGhlIGxlbmd0aCBvZiBhIHZlY3RvciB1c2luZyB0YXhpY2FiIGdlb21ldHJ5XFxuICogQHBhcmFtIHt2ZWN9IGEgVmVjdG9yIGFcXG4gKiBAcmV0dXJuIHtudW1iZXJ9IHxhfFxcbiAqL1xcbnZlYy5tYW5oYXR0YW4gPSBhID0+IE1hdGguYWJzKGEueCkgKyBNYXRoLmFicyhhLnkpO1xcblxcbi8qKlxcbiAqIE5vcm1hbGlzZSBhIHZlY3RvclxcbiAqIEBwYXJhbSB7dmVjfSBhIFRoZSB2ZWN0b3IgdG8gbm9ybWFsaXNlXFxuICogQHJldHVybiB7dmVjfSBeYVxcbiAqL1xcbnZlYy5ub3IgPSBhID0+IHtcXG4gIGxldCBsZW4gPSB2ZWMubGVuKGEpO1xcbiAgcmV0dXJuIGxlbiA/IHsgeDogYS54IC8gbGVuLCB5OiBhLnkgLyBsZW4gfSA6IHZlYygpO1xcbn07XFxuXFxuLyoqXFxuICogR2V0IGEgZG90IHByb2R1Y3Qgb2YgdmVjdG9yc1xcbiAqIEBwYXJhbSB7dmVjfSBhIFZlY3RvciBhXFxuICogQHBhcmFtIHt2ZWN9IGIgVmVjdG9yIGJcXG4gKiBAcmV0dXJuIHtudW1iZXJ9IGEg4oiZIGJcXG4gKi9cXG52ZWMuZG90ID0gKGEsIGIpID0+IGEueCAqIGIueCArIGEueSAqIGIueTtcXG5cXG4vKipcXG4gKiBSb3RhdGUgYSB2ZWN0b3IgYnkgciByYWRpYW5zXFxuICogQHBhcmFtIHt2ZWN9IGEgVGhlIHZlY3RvciB0byByb3RhdGVcXG4gKiBAcGFyYW0ge251bWJlcn0gciBUaGUgYW5nbGUgdG8gcm90YXRlIGJ5LCBtZWFzdXJlZCBpbiByYWRpYW5zXFxuICogQHJldHVybiB7dmVjfSBBIHJvdGF0ZWQgdmVjdG9yXFxuICovXFxudmVjLnJvdCA9IChhLCByKSA9PiB7XFxuICBsZXQgcyA9IE1hdGguc2luKHIpLFxcbiAgICBjID0gTWF0aC5jb3Mocik7XFxuICByZXR1cm4geyB4OiBjICogYS54IC0gcyAqIGEueSwgeTogcyAqIGEueCArIGMgKiBhLnkgfTtcXG59XFxuXFxuLyoqXFxuICogQ2hlY2sgaWYgdHdvIHZlY3RvcnMgYXJlIGVxdWFsXFxuICogQHBhcmFtIHt2ZWN9IGEgVmVjdG9yIGFcXG4gKiBAcGFyYW0ge3ZlY30gYiBWZWN0b3IgYlxcbiAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgdmVjdG9ycyBhIGFuZCBiIGFyZSBlcXVhbCwgZmFsc2Ugb3RoZXJ3aXNlXFxuICovXFxudmVjLmVxID0gKGEsIGIpID0+IGEueCA9PT0gYi54ICYmIGEueSA9PT0gYi55O1xcblxcbi8qKlxcbiAqIEdldCB0aGUgYW5nbGUgb2YgYSB2ZWN0b3JcXG4gKiBAcGFyYW0ge3ZlY30gYSBWZWN0b3IgYVxcbiAqIEByZXR1cm4ge251bWJlcn0gVGhlIGFuZ2xlIG9mIHZlY3RvciBhIGluIHJhZGlhbnNcXG4gKi9cXG52ZWMucmFkID0gYSA9PiBNYXRoLmF0YW4yKGEueSwgYS54KTtcXG5cXG4vKipcXG4gKiBDb3B5IGEgdmVjdG9yXFxuICogQHBhcmFtIHt2ZWN9IGEgVGhlIHZlY3RvciB0byBjb3B5XFxuICogQHJldHVybiB7dmVjfSBBIGNvcHkgb2YgdmVjdG9yIGFcXG4gKi9cXG52ZWMuY3B5ID0gYSA9PiB2ZWMoYSk7XFxuXFxuLyoqXFxuICogQSBmdW5jdGlvbiB0byBjYWxsIG9uIGVhY2ggY29tcG9uZW50IG9mIGEgdmVjdG9yXFxuICogQGNhbGxiYWNrIHZlY3Rvck1hcENhbGxiYWNrXFxuICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlIFRoZSBjb21wb25lbnQgdmFsdWVcXG4gKiBAcGFyYW0geyd4JyB8ICd5J30gbGFiZWwgVGhlIGNvbXBvbmVudCBsYWJlbCAoeCBvciB5KVxcbiAqIEByZXR1cm4ge251bWJlcn0gVGhlIG1hcHBlZCBjb21wb25lbnRcXG4gKi9cXG5cXG4vKipcXG4gKiBDYWxsIGEgZnVuY3Rpb24gb24gZWFjaCBjb21wb25lbnQgb2YgYSB2ZWN0b3IgYW5kIGJ1aWxkIGEgbmV3IHZlY3RvciBmcm9tIHRoZSByZXN1bHRzXFxuICogQHBhcmFtIHt2ZWN9IGEgVmVjdG9yIGFcXG4gKiBAcGFyYW0ge3ZlY3Rvck1hcENhbGxiYWNrfSBmIFRoZSBmdW5jdGlvbiB0byBjYWxsIG9uIGVhY2ggY29tcG9uZW50IG9mIHRoZSB2ZWN0b3JcXG4gKiBAcmV0dXJuIHt2ZWN9IFZlY3RvciBhIG1hcHBlZCB0aHJvdWdoIGZcXG4gKi9cXG52ZWMubWFwID0gKGEsIGYpID0+ICh7IHg6IGYoYS54LCAneCcpLCB5OiBmKGEueSwgJ3knKSB9KTtcXG5cXG4vKipcXG4gKiBDb252ZXJ0IGEgdmVjdG9yIGludG8gYSBzdHJpbmdcXG4gKiBAcGFyYW0ge3ZlY30gYSBUaGUgdmVjdG9yIHRvIGNvbnZlcnRcXG4gKiBAcGFyYW0ge3N0cmluZ30gW3M9JywgJ10gVGhlIHNlcGFyYXRvciBzdHJpbmdcXG4gKiBAcmV0dXJuIHtzdHJpbmd9IEEgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSB2ZWN0b3JcXG4gKi9cXG52ZWMuc3RyID0gKGEsIHMgPSAnLCAnKSA9PiBgJHthLnh9JHtzfSR7YS55fWA7XFxuXFxuLyoqXFxuICogQSBtYXRyaXhcXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBtYXRcXG4gKiBAcHJvcGVydHkge251bWJlcn0gbSBUaGUgbnVtYmVyIG9mIHJvd3MgaW4gdGhlIG1hdHJpeFxcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBuIFRoZSBudW1iZXIgb2YgY29sdW1ucyBpbiB0aGUgbWF0cml4XFxuICogQHByb3BlcnR5IHtBcnJheTxudW1iZXI+fSBlbnRyaWVzIFRoZSBtYXRyaXggdmFsdWVzXFxuICovXFxuXFxuLyoqXFxuICogQ3JlYXRlIGEgbmV3IG1hdHJpeFxcbiAqIEBwYXJhbSB7bnVtYmVyfSBbbT00XSBUaGUgbnVtYmVyIG9mIHJvd3NcXG4gKiBAcGFyYW0ge251bWJlcn0gW249NF0gVGhlIG51bWJlciBvZiBjb2x1bW5zXFxuICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSBbZW50cmllcz1bXV0gTWF0cml4IHZhbHVlcyBpbiByZWFkaW5nIG9yZGVyXFxuICogQHJldHVybiB7bWF0fSBBIG5ldyBtYXRyaXhcXG4gKi9cXG5jb25zdCBtYXQgPSAobSA9IDQsIG4gPSA0LCBlbnRyaWVzID0gW10pID0+ICh7XFxuICBtLCBuLFxcbiAgZW50cmllczogZW50cmllcy5jb25jYXQoQXJyYXkobSAqIG4pLmZpbGwoMCkpLnNsaWNlKDAsIG0gKiBuKVxcbn0pO1xcblxcbi8qKlxcbiAqIEdldCBhbiBpZGVudGl0eSBtYXRyaXggb2Ygc2l6ZSBuXFxuICogQHBhcmFtIHtudW1iZXJ9IG4gVGhlIHNpemUgb2YgdGhlIG1hdHJpeFxcbiAqIEByZXR1cm4ge21hdH0gQW4gaWRlbnRpdHkgbWF0cml4XFxuICovXFxubWF0LmlkZW50aXR5ID0gbiA9PiBtYXQobiwgbiwgQXJyYXkobiAqIG4pLmZpbGwoMCkubWFwKCh2LCBpKSA9PiArKE1hdGguZmxvb3IoaSAvIG4pID09PSBpICUgbikpKTtcXG5cXG4vKipcXG4gKiBHZXQgYW4gZW50cnkgZnJvbSBhIG1hdHJpeFxcbiAqIEBwYXJhbSB7bWF0fSBhIE1hdHJpeCBhXFxuICogQHBhcmFtIHtudW1iZXJ9IGkgVGhlIHJvdyBvZmZzZXRcXG4gKiBAcGFyYW0ge251bWJlcn0gaiBUaGUgY29sdW1uIG9mZnNldFxcbiAqIEByZXR1cm4ge251bWJlcn0gVGhlIHZhbHVlIGF0IHBvc2l0aW9uIChpLCBqKSBpbiBtYXRyaXggYVxcbiAqL1xcbm1hdC5nZXQgPSAoYSwgaSwgaikgPT4gYS5lbnRyaWVzWyhqIC0gMSkgKyAoaSAtIDEpICogYS5uXTtcXG5cXG4vKipcXG4gKiBTZXQgYW4gZW50cnkgb2YgYSBtYXRyaXhcXG4gKiBAcGFyYW0ge21hdH0gYSBNYXRyaXggYVxcbiAqIEBwYXJhbSB7bnVtYmVyfSBpIFRoZSByb3cgb2Zmc2V0XFxuICogQHBhcmFtIHtudW1iZXJ9IGogVGhlIGNvbHVtbiBvZmZzZXRcXG4gKiBAcGFyYW0ge251bWJlcn0gdiBUaGUgdmFsdWUgdG8gc2V0IGluIG1hdHJpeCBhXFxuICovXFxubWF0LnNldCA9IChhLCBpLCBqLCB2KSA9PiB7IGEuZW50cmllc1soaiAtIDEpICsgKGkgLSAxKSAqIGEubl0gPSB2OyB9O1xcblxcbi8qKlxcbiAqIEdldCBhIHJvdyBmcm9tIGEgbWF0cml4IGFzIGFuIGFycmF5XFxuICogQHBhcmFtIHttYXR9IGEgTWF0cml4IGFcXG4gKiBAcGFyYW0ge251bWJlcn0gbSBUaGUgcm93IG9mZnNldFxcbiAqIEByZXR1cm4ge0FycmF5PG51bWJlcj59IFJvdyBtIGZyb20gbWF0cml4IGFcXG4gKi9cXG5tYXQucm93ID0gKGEsIG0pID0+IHtcXG4gIGNvbnN0IHMgPSAobSAtIDEpICogYS5uO1xcbiAgcmV0dXJuIGEuZW50cmllcy5zbGljZShzLCBzICsgYS5uKTtcXG59O1xcblxcbi8qKlxcbiAqIEdldCBhIGNvbHVtbiBmcm9tIGEgbWF0cml4IGFzIGFuIGFycmF5XFxuICogQHBhcmFtIHttYXR9IGEgTWF0cml4IGFcXG4gKiBAcGFyYW0ge251bWJlcn0gbiBUaGUgY29sdW1uIG9mZnNldFxcbiAqIEByZXR1cm4ge0FycmF5PG51bWJlcj59IENvbHVtbiBuIGZyb20gbWF0cml4IGFcXG4gKi9cXG5tYXQuY29sID0gKGEsIG4pID0+IHRpbWVzKGkgPT4gbWF0LmdldChhLCAoaSArIDEpLCBuKSwgYS5tKTtcXG5cXG4vKipcXG4gKiBBZGQgbWF0cmljZXNcXG4gKiBAcGFyYW0ge21hdH0gYSBNYXRyaXggYVxcbiAqIEBwYXJhbSB7bWF0fSBiIE1hdHJpeCBiXFxuICogQHJldHVybiB7bWF0fSBhICsgYlxcbiAqL1xcbm1hdC5hZGQgPSAoYSwgYikgPT4gYS5tID09PSBiLm0gJiYgYS5uID09PSBiLm4gJiYgbWF0Lm1hcChhLCAodiwgaSkgPT4gdiArIGIuZW50cmllc1tpXSk7XFxuXFxuLyoqXFxuICogU3VidHJhY3QgbWF0cmljZXNcXG4gKiBAcGFyYW0ge21hdH0gYSBNYXRyaXggYVxcbiAqIEBwYXJhbSB7bWF0fSBiIE1hdHJpeCBiXFxuICogQHJldHVybiB7bWF0fSBhIC0gYlxcbiAqL1xcbm1hdC5zdWIgPSAoYSwgYikgPT4gYS5tID09PSBiLm0gJiYgYS5uID09PSBiLm4gJiYgbWF0Lm1hcChhLCAodiwgaSkgPT4gdiAtIGIuZW50cmllc1tpXSk7XFxuXFxuLyoqXFxuICogTXVsdGlwbHkgbWF0cmljZXNcXG4gKiBAcGFyYW0ge21hdH0gYSBNYXRyaXggYVxcbiAqIEBwYXJhbSB7bWF0fSBiIE1hdHJpeCBiXFxuICogQHJldHVybiB7bWF0fGJvb2xlYW59IGFiIG9yIGZhbHNlIGlmIHRoZSBtYXRyaWNlcyBjYW5ub3QgYmUgbXVsdGlwbGllZFxcbiAqL1xcbm1hdC5tdWwgPSAoYSwgYikgPT4ge1xcbiAgaWYgKGEubiAhPT0gYi5tKSB7IHJldHVybiBmYWxzZTsgfVxcbiAgY29uc3QgcmVzdWx0ID0gbWF0KGEubSwgYi5uKTtcXG4gIGZvciAobGV0IGkgPSAxOyBpIDw9IGEubTsgaSsrKSB7XFxuICAgIGZvciAobGV0IGogPSAxOyBqIDw9IGIubjsgaisrKSB7XFxuICAgICAgbWF0LnNldChyZXN1bHQsIGksIGosIGRvdChtYXQucm93KGEsIGkpLCBtYXQuY29sKGIsIGopKSk7XFxuICAgIH1cXG4gIH1cXG4gIHJldHVybiByZXN1bHQ7XFxufTtcXG5cXG4vKipcXG4gKiBTY2FsZSBhIG1hdHJpeFxcbiAqIEBwYXJhbSB7bWF0fSBhIE1hdHJpeCBhXFxuICogQHBhcmFtIHtudW1iZXJ9IGIgU2NhbGFyIGJcXG4gKiBAcmV0dXJuIHttYXR9IGEgKiBiXFxuICovXFxubWF0LnNjYWxlID0gKGEsIGIpID0+IG1hdC5tYXAoYSwgdiA9PiB2ICogYik7XFxuXFxuLyoqXFxuICogVHJhbnNwb3NlIGEgbWF0cml4XFxuICogQHBhcmFtIHttYXR9IGEgVGhlIG1hdHJpeCB0byB0cmFuc3Bvc2VcXG4gKiBAcmV0dXJuIHttYXR9IEEgdHJhbnNwb3NlZCBtYXRyaXhcXG4gKi9cXG5tYXQudHJhbnMgPSBhID0+IG1hdChhLm4sIGEubSwgdGltZXMoaSA9PiBtYXQuY29sKGEsIChpICsgMSkpLCBhLm4pLmZsYXQoKSk7XFxuXFxuLyoqXFxuICogR2V0IHRoZSBtaW5vciBvZiBhIG1hdHJpeFxcbiAqIEBwYXJhbSB7bWF0fSBhIE1hdHJpeCBhXFxuICogQHBhcmFtIHtudW1iZXJ9IGkgVGhlIHJvdyBvZmZzZXRcXG4gKiBAcGFyYW0ge251bWJlcn0gaiBUaGUgY29sdW1uIG9mZnNldFxcbiAqIEByZXR1cm4ge21hdHxib29sZWFufSBUaGUgKGksIGopIG1pbm9yIG9mIG1hdHJpeCBhIG9yIGZhbHNlIGlmIHRoZSBtYXRyaXggaXMgbm90IHNxdWFyZVxcbiAqL1xcbm1hdC5taW5vciA9IChhLCBpLCBqKSA9PiB7XFxuICBpZiAoYS5tICE9PSBhLm4pIHsgcmV0dXJuIGZhbHNlOyB9XFxuICBjb25zdCBlbnRyaWVzID0gW107XFxuICBmb3IgKGxldCBpaSA9IDE7IGlpIDw9IGEubTsgaWkrKykge1xcbiAgICBpZiAoaWkgPT09IGkpIHsgY29udGludWU7IH1cXG4gICAgZm9yIChsZXQgamogPSAxOyBqaiA8PSBhLm47IGpqKyspIHtcXG4gICAgICBpZiAoamogPT09IGopIHsgY29udGludWU7IH1cXG4gICAgICBlbnRyaWVzLnB1c2gobWF0LmdldChhLCBpaSwgamopKTtcXG4gICAgfVxcbiAgfVxcbiAgcmV0dXJuIG1hdChhLm0gLSAxLCBhLm4gLSAxLCBlbnRyaWVzKTtcXG59O1xcblxcbi8qKlxcbiAqIEdldCB0aGUgZGV0ZXJtaW5hbnQgb2YgYSBtYXRyaXhcXG4gKiBAcGFyYW0ge21hdH0gYSBNYXRyaXggYVxcbiAqIEByZXR1cm4ge251bWJlcnxib29sZWFufSB8YXwgb3IgZmFsc2UgaWYgdGhlIG1hdHJpeCBpcyBub3Qgc3F1YXJlXFxuICovXFxubWF0LmRldCA9IGEgPT4ge1xcbiAgaWYgKGEubSAhPT0gYS5uKSB7IHJldHVybiBmYWxzZTsgfVxcbiAgaWYgKGEubSA9PT0gMSkge1xcbiAgICByZXR1cm4gYS5lbnRyaWVzWzBdO1xcbiAgfVxcbiAgaWYgKGEubSA9PT0gMikge1xcbiAgICByZXR1cm4gYS5lbnRyaWVzWzBdICogYS5lbnRyaWVzWzNdIC0gYS5lbnRyaWVzWzFdICogYS5lbnRyaWVzWzJdO1xcbiAgfVxcbiAgbGV0IHRvdGFsID0gMCwgc2lnbiA9IDE7XFxuICBmb3IgKGxldCBqID0gMTsgaiA8PSBhLm47IGorKykge1xcbiAgICB0b3RhbCArPSBzaWduICogYS5lbnRyaWVzW2ogLSAxXSAqIG1hdC5kZXQobWF0Lm1pbm9yKGEsIDEsIGopKTtcXG4gICAgc2lnbiAqPSAtMTtcXG4gIH1cXG4gIHJldHVybiB0b3RhbDtcXG59O1xcblxcbi8qKlxcbiAqIE5vcm1hbGlzZSBhIG1hdHJpeFxcbiAqIEBwYXJhbSB7bWF0fSBhIFRoZSBtYXRyaXggdG8gbm9ybWFsaXNlXFxuICogQHJldHVybiB7bWF0fGJvb2xlYW59IF5hIG9yIGZhbHNlIGlmIHRoZSBtYXRyaXggaXMgbm90IHNxdWFyZVxcbiAqL1xcbm1hdC5ub3IgPSBhID0+IHtcXG4gIGlmIChhLm0gIT09IGEubikgeyByZXR1cm4gZmFsc2U7IH1cXG4gIGNvbnN0IGQgPSBtYXQuZGV0KGEpO1xcbiAgcmV0dXJuIG1hdC5tYXAoYSwgaSA9PiBpICogZCk7XFxufTtcXG5cXG4vKipcXG4gKiBHZXQgdGhlIGFkanVnYXRlIG9mIGEgbWF0cml4XFxuICogQHBhcmFtIHttYXR9IGEgVGhlIG1hdHJpeCBmcm9tIHdoaWNoIHRvIGdldCB0aGUgYWRqdWdhdGVcXG4gKiBAcmV0dXJuIHttYXR9IFRoZSBhZGp1Z2F0ZSBvZiBhXFxuICovXFxubWF0LmFkaiA9IGEgPT4ge1xcbiAgY29uc3QgbWlub3JzID0gbWF0KGEubSwgYS5uKTtcXG4gIGZvciAobGV0IGkgPSAxOyBpIDw9IGEubTsgaSsrKSB7XFxuICAgIGZvciAobGV0IGogPSAxOyBqIDw9IGEubjsgaisrKSB7XFxuICAgICAgbWF0LnNldChtaW5vcnMsIGksIGosIG1hdC5kZXQobWF0Lm1pbm9yKGEsIGksIGopKSk7XFxuICAgIH1cXG4gIH1cXG4gIGNvbnN0IGNvZmFjdG9ycyA9IG1hdC5tYXAobWlub3JzLCAodiwgaSkgPT4gdiAqIChpICUgMiA/IC0xIDogMSkpO1xcbiAgcmV0dXJuIG1hdC50cmFucyhjb2ZhY3RvcnMpO1xcbn07XFxuXFxuLyoqXFxuICogR2V0IHRoZSBpbnZlcnNlIG9mIGEgbWF0cml4XFxuICogQHBhcmFtIHttYXR9IGEgVGhlIG1hdHJpeCB0byBpbnZlcnRcXG4gKiBAcmV0dXJuIHttYXR8Ym9vbGVhbn0gYV4tMSBvciBmYWxzZSBpZiB0aGUgbWF0cml4IGhhcyBubyBpbnZlcnNlXFxuICovXFxubWF0LmludiA9IGEgPT4ge1xcbiAgaWYgKGEubSAhPT0gYS5uKSB7IHJldHVybiBmYWxzZTsgfVxcbiAgY29uc3QgZCA9IG1hdC5kZXQoYSk7XFxuICBpZiAoZCA9PT0gMCkgeyByZXR1cm4gZmFsc2U7IH1cXG4gIHJldHVybiBtYXQuc2NhbGUobWF0LmFkaihhKSwgMSAvIGQpO1xcbn07XFxuXFxuLyoqXFxuICogQ2hlY2sgaWYgdHdvIG1hdHJpY2VzIGFyZSBlcXVhbFxcbiAqIEBwYXJhbSB7bWF0fSBhIE1hdHJpeCBhXFxuICogQHBhcmFtIHttYXR9IGIgTWF0cml4IGJcXG4gKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIG1hdHJpY2VzIGEgYW5kIGIgYXJlIGlkZW50aWNhbCwgZmFsc2Ugb3RoZXJ3aXNlXFxuICovXFxubWF0LmVxID0gKGEsIGIpID0+IGEubSA9PT0gYi5tICYmIGEubiA9PT0gYi5uICYmIG1hdC5zdHIoYSkgPT09IG1hdC5zdHIoYik7XFxuXFxuLyoqXFxuICogQ29weSBhIG1hdHJpeFxcbiAqIEBwYXJhbSB7bWF0fSBhIFRoZSBtYXRyaXggdG8gY29weVxcbiAqIEByZXR1cm4ge21hdH0gQSBjb3B5IG9mIG1hdHJpeCBhXFxuICovXFxubWF0LmNweSA9IGEgPT4gbWF0KGEubSwgYS5uLCBbLi4uYS5lbnRyaWVzXSk7XFxuXFxuLyoqXFxuICogQSBmdW5jdGlvbiB0byBjYWxsIG9uIGVhY2ggZW50cnkgb2YgYSBtYXRyaXhcXG4gKiBAY2FsbGJhY2sgbWF0cml4TWFwQ2FsbGJhY2tcXG4gKiBAcGFyYW0ge251bWJlcn0gdmFsdWUgVGhlIGVudHJ5IHZhbHVlXFxuICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IFRoZSBlbnRyeSBpbmRleFxcbiAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0gZW50cmllcyBUaGUgYXJyYXkgb2YgbWF0cml4IGVudHJpZXNcXG4gKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBtYXBwZWQgZW50cnlcXG4gKi9cXG5cXG4vKipcXG4gKiBDYWxsIGEgZnVuY3Rpb24gb24gZWFjaCBlbnRyeSBvZiBhIG1hdHJpeCBhbmQgYnVpbGQgYSBuZXcgbWF0cml4IGZyb20gdGhlIHJlc3VsdHNcXG4gKiBAcGFyYW0ge21hdH0gYSBNYXRyaXggYVxcbiAqIEBwYXJhbSB7bWF0cml4TWFwQ2FsbGJhY2t9IGYgVGhlIGZ1bmN0aW9uIHRvIGNhbGwgb24gZWFjaCBlbnRyeSBvZiB0aGUgbWF0cml4XFxuICogQHJldHVybiB7bWF0fSBNYXRyaXggYSBtYXBwZWQgdGhyb3VnaCBmXFxuICovXFxubWF0Lm1hcCA9IChhLCBmKSA9PiBtYXQoYS5tLCBhLm4sIGEuZW50cmllcy5tYXAoZikpO1xcblxcbi8qKlxcbiAqIENvbnZlcnQgYSBtYXRyaXggaW50byBhIHN0cmluZ1xcbiAqIEBwYXJhbSB7bWF0fSBhIFRoZSBtYXRyaXggdG8gY29udmVydFxcbiAqIEBwYXJhbSB7c3RyaW5nfSBbbXM9JywgJ10gVGhlIHNlcGFyYXRvciBzdHJpbmcgZm9yIGNvbHVtbnNcXG4gKiBAcGFyYW0ge3N0cmluZ30gW25zPSdcXFxcbiddIFRoZSBzZXBhcmF0b3Igc3RyaW5nIGZvciByb3dzXFxuICogQHJldHVybiB7c3RyaW5nfSBBIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgbWF0cml4XFxuICovXFxubWF0LnN0ciA9IChhLCBtcyA9ICcsICcsIG5zID0gJ1xcXFxuJykgPT4gY2h1bmsoYS5lbnRyaWVzLCBhLm4pLm1hcChyID0+IHIuam9pbihtcykpLmpvaW4obnMpO1xcblxcbmlmICh0cnVlKSB7XFxuICBtb2R1bGUuZXhwb3J0cyA9IHsgdmVjLCBtYXQgfTtcXG59XFxuXFxuXFxuLy8jIHNvdXJjZVVSTD13ZWJwYWNrOi8vQGJhc2VtZW50dW5pdmVyc2UvZGVidWcvLi9ub2RlX21vZHVsZXMvQGJhc2VtZW50dW5pdmVyc2UvdmVjL3ZlYy5qcz9cIik7XG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vaW5kZXgudHNcIjpcbi8qISoqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL2luZGV4LnRzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKiovXG4vKioqLyAoKF9fdW51c2VkX3dlYnBhY2tfbW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSA9PiB7XG5cblwidXNlIHN0cmljdFwiO1xuZXZhbChcIlxcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcXFwiX19lc01vZHVsZVxcXCIsICh7IHZhbHVlOiB0cnVlIH0pKTtcXG5jb25zdCB2ZWNfMSA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIEBiYXNlbWVudHVuaXZlcnNlL3ZlYyAqLyBcXFwiLi9ub2RlX21vZHVsZXMvQGJhc2VtZW50dW5pdmVyc2UvdmVjL3ZlYy5qc1xcXCIpO1xcbmNsYXNzIERlYnVnIHtcXG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xcbiAgICAgICAgaWYgKG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5kZWZhdWx0VmFsdWUpIHtcXG4gICAgICAgICAgICBvcHRpb25zLmRlZmF1bHRWYWx1ZSA9IE9iamVjdC5hc3NpZ24oe30sIERlYnVnLmRlZmF1bHRPcHRpb25zLmRlZmF1bHRWYWx1ZSwgb3B0aW9ucy5kZWZhdWx0VmFsdWUpO1xcbiAgICAgICAgfVxcbiAgICAgICAgaWYgKG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5kZWZhdWx0Q2hhcnQpIHtcXG4gICAgICAgICAgICBvcHRpb25zLmRlZmF1bHRDaGFydCA9IE9iamVjdC5hc3NpZ24oe30sIERlYnVnLmRlZmF1bHRPcHRpb25zLmRlZmF1bHRDaGFydCwgb3B0aW9ucy5kZWZhdWx0Q2hhcnQpO1xcbiAgICAgICAgfVxcbiAgICAgICAgaWYgKG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5kZWZhdWx0TWFya2VyKSB7XFxuICAgICAgICAgICAgb3B0aW9ucy5kZWZhdWx0TWFya2VyID0gT2JqZWN0LmFzc2lnbih7fSwgRGVidWcuZGVmYXVsdE9wdGlvbnMuZGVmYXVsdE1hcmtlciwgb3B0aW9ucy5kZWZhdWx0TWFya2VyKTtcXG4gICAgICAgIH1cXG4gICAgICAgIGlmIChvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuZGVmYXVsdEJvcmRlcikge1xcbiAgICAgICAgICAgIG9wdGlvbnMuZGVmYXVsdEJvcmRlciA9IE9iamVjdC5hc3NpZ24oe30sIERlYnVnLmRlZmF1bHRPcHRpb25zLmRlZmF1bHRCb3JkZXIsIG9wdGlvbnMuZGVmYXVsdEJvcmRlcik7XFxuICAgICAgICB9XFxuICAgICAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCBEZWJ1Zy5kZWZhdWx0T3B0aW9ucywgb3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgPyBvcHRpb25zIDoge30pO1xcbiAgICAgICAgdGhpcy52YWx1ZXMgPSBuZXcgTWFwKCk7XFxuICAgICAgICB0aGlzLmNoYXJ0cyA9IG5ldyBNYXAoKTtcXG4gICAgICAgIHRoaXMubWFya2VycyA9IG5ldyBNYXAoKTtcXG4gICAgICAgIHRoaXMuYm9yZGVycyA9IG5ldyBNYXAoKTtcXG4gICAgfVxcbiAgICAvKipcXG4gICAgICogSW5pdGlhbGlzZSB0aGUgZGVidWcgcmVuZGVyZXIgZm9yIGRpc3BsYXlpbmcgdmFsdWVzIGFuZCBtYXJrZXJzXFxuICAgICAqL1xcbiAgICBzdGF0aWMgaW5pdGlhbGlzZShvcHRpb25zID0ge30pIHtcXG4gICAgICAgIGlmIChEZWJ1Zy5pbnN0YW5jZSAhPT0gdW5kZWZpbmVkKSB7XFxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdEZWJ1ZyBoYXMgYWxyZWFkeSBiZWVuIGluaXRpYWxpc2VkJyk7XFxuICAgICAgICB9XFxuICAgICAgICBEZWJ1Zy5pbnN0YW5jZSA9IG5ldyBEZWJ1ZyhvcHRpb25zKTtcXG4gICAgfVxcbiAgICBzdGF0aWMgZ2V0SW5zdGFuY2UoKSB7XFxuICAgICAgICBpZiAoRGVidWcuaW5zdGFuY2UgPT09IHVuZGVmaW5lZCkge1xcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignRGVidWcgbm90IHByb3Blcmx5IGluaXRpYWxpc2VkJyk7XFxuICAgICAgICB9XFxuICAgICAgICByZXR1cm4gRGVidWcuaW5zdGFuY2U7XFxuICAgIH1cXG4gICAgLyoqXFxuICAgICAqIFNob3cgYSBkZWJ1ZyB2YWx1ZVxcbiAgICAgKi9cXG4gICAgc3RhdGljIHZhbHVlKGxhYmVsLCB2YWx1ZSwgb3B0aW9ucykge1xcbiAgICAgICAgdmFyIF9hO1xcbiAgICAgICAgY29uc3QgaW5zdGFuY2UgPSBEZWJ1Zy5nZXRJbnN0YW5jZSgpO1xcbiAgICAgICAgaW5zdGFuY2UudmFsdWVzLnNldChsYWJlbCwgT2JqZWN0LmFzc2lnbih7fSwgaW5zdGFuY2Uub3B0aW9ucy5kZWZhdWx0VmFsdWUsIChfYSA9IGluc3RhbmNlLnZhbHVlcy5nZXQobGFiZWwpKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiB7fSwgb3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgPyBvcHRpb25zIDoge30sIHsgbGFiZWwsIHZhbHVlIH0pKTtcXG4gICAgfVxcbiAgICAvKipcXG4gICAgICogU2hvdyBhIGRlYnVnIGNoYXJ0XFxuICAgICAqL1xcbiAgICBzdGF0aWMgY2hhcnQobGFiZWwsIHZhbHVlLCBvcHRpb25zKSB7XFxuICAgICAgICB2YXIgX2EsIF9iO1xcbiAgICAgICAgY29uc3QgaW5zdGFuY2UgPSBEZWJ1Zy5nZXRJbnN0YW5jZSgpO1xcbiAgICAgICAgY29uc3QgY3VycmVudENoYXJ0ID0gaW5zdGFuY2UuY2hhcnRzLmdldChsYWJlbCk7XFxuICAgICAgICBpbnN0YW5jZS5jaGFydHMuc2V0KGxhYmVsLCBPYmplY3QuYXNzaWduKHt9LCBpbnN0YW5jZS5vcHRpb25zLmRlZmF1bHRDaGFydCwgY3VycmVudENoYXJ0ICE9PSBudWxsICYmIGN1cnJlbnRDaGFydCAhPT0gdm9pZCAwID8gY3VycmVudENoYXJ0IDoge30sIG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwID8gb3B0aW9ucyA6IHt9LCB7XFxuICAgICAgICAgICAgbGFiZWwsXFxuICAgICAgICAgICAgdmFsdWVzOiBbLi4uKF9hID0gY3VycmVudENoYXJ0ID09PSBudWxsIHx8IGN1cnJlbnRDaGFydCA9PT0gdm9pZCAwID8gdm9pZCAwIDogY3VycmVudENoYXJ0LnZhbHVlcykgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogW10sIHZhbHVlXS5zbGljZSgtKChfYiA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy52YWx1ZUJ1ZmZlclNpemUpICE9PSBudWxsICYmIF9iICE9PSB2b2lkIDAgPyBfYiA6IGluc3RhbmNlLm9wdGlvbnMuZGVmYXVsdENoYXJ0LnZhbHVlQnVmZmVyU2l6ZSkpLFxcbiAgICAgICAgfSkpO1xcbiAgICB9XFxuICAgIC8qKlxcbiAgICAgKiBSZW1vdmUgYSBkZWJ1ZyBjaGFydFxcbiAgICAgKi9cXG4gICAgc3RhdGljIHJlbW92ZUNoYXJ0KGxhYmVsKSB7XFxuICAgICAgICBjb25zdCBpbnN0YW5jZSA9IERlYnVnLmdldEluc3RhbmNlKCk7XFxuICAgICAgICBpbnN0YW5jZS5jaGFydHMuZGVsZXRlKGxhYmVsKTtcXG4gICAgfVxcbiAgICAvKipcXG4gICAgICogU2hvdyBhIG1hcmtlciBpbiB3b3JsZCBvciBzY3JlZW4gc3BhY2VcXG4gICAgICovXFxuICAgIHN0YXRpYyBtYXJrZXIobGFiZWwsIHZhbHVlLCBwb3NpdGlvbiwgb3B0aW9ucykge1xcbiAgICAgICAgdmFyIF9hO1xcbiAgICAgICAgY29uc3QgaW5zdGFuY2UgPSBEZWJ1Zy5nZXRJbnN0YW5jZSgpO1xcbiAgICAgICAgaW5zdGFuY2UubWFya2Vycy5zZXQobGFiZWwsIE9iamVjdC5hc3NpZ24oe30sIGluc3RhbmNlLm9wdGlvbnMuZGVmYXVsdE1hcmtlciwgKF9hID0gaW5zdGFuY2UubWFya2Vycy5nZXQobGFiZWwpKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiB7fSwgb3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgPyBvcHRpb25zIDoge30sIHsgbGFiZWwsIHZhbHVlLCBwb3NpdGlvbiB9KSk7XFxuICAgIH1cXG4gICAgLyoqXFxuICAgICAqIFNob3cgYSBib3JkZXIgaW4gd29ybGQgb3Igc2NyZWVuIHNwYWNlXFxuICAgICAqL1xcbiAgICBzdGF0aWMgYm9yZGVyKGxhYmVsLCB2YWx1ZSwgcG9zaXRpb24sIG9wdGlvbnMpIHtcXG4gICAgICAgIHZhciBfYTtcXG4gICAgICAgIGlmICgob3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmJvcmRlclNoYXBlKSA9PT0gJ2NpcmNsZScgJiYgKG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5yYWRpdXMpID09PSB1bmRlZmluZWQpIHtcXG4gICAgICAgICAgICAvLyBEb24ndCBhZGQgdGhlIGJvcmRlciBpZiBpdCdzIGNpcmN1bGFyIGJ1dCB3ZSBkb24ndCBoYXZlIGEgcmFkaXVzXFxuICAgICAgICAgICAgcmV0dXJuO1xcbiAgICAgICAgfVxcbiAgICAgICAgaWYgKChvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuYm9yZGVyU2hhcGUpICE9PSAnY2lyY2xlJyAmJiAob3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLnNpemUpID09PSB1bmRlZmluZWQpIHtcXG4gICAgICAgICAgICAvLyBEb24ndCBhZGQgdGhlIGJvcmRlciBpZiBpdCdzIHJlY3Rhbmd1bGFyIChkZWZhdWx0IGlzIHJlY3Rhbmd1bGFyKSBidXRcXG4gICAgICAgICAgICAvLyB3ZSBkb24ndCBoYXZlIGEgc2l6ZVxcbiAgICAgICAgICAgIHJldHVybjtcXG4gICAgICAgIH1cXG4gICAgICAgIGNvbnN0IGluc3RhbmNlID0gRGVidWcuZ2V0SW5zdGFuY2UoKTtcXG4gICAgICAgIGluc3RhbmNlLmJvcmRlcnMuc2V0KGxhYmVsLCBPYmplY3QuYXNzaWduKHt9LCBpbnN0YW5jZS5vcHRpb25zLmRlZmF1bHRCb3JkZXIsIChfYSA9IGluc3RhbmNlLmJvcmRlcnMuZ2V0KGxhYmVsKSkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDoge30sIG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwID8gb3B0aW9ucyA6IHt9LCB7IGxhYmVsLCB2YWx1ZSwgcG9zaXRpb24gfSkpO1xcbiAgICB9XFxuICAgIC8qKlxcbiAgICAgKiBSZW5kZXIgdGhlIGRlYnVnIHZhbHVlcyBhbmQgbWFya2VycyBvbnRvIGEgY2FudmFzXFxuICAgICAqL1xcbiAgICBzdGF0aWMgZHJhdyhjb250ZXh0LCBsZXZlbCA9IDApIHtcXG4gICAgICAgIGNvbnN0IGluc3RhbmNlID0gRGVidWcuZ2V0SW5zdGFuY2UoKTtcXG4gICAgICAgIC8vIERyYXcgd29ybGQtc3BhY2UgbWFya2VycyAmIGJvcmRlcnNcXG4gICAgICAgIGNvbnRleHQuc2F2ZSgpO1xcbiAgICAgICAgaW5zdGFuY2UubWFya2Vycy5mb3JFYWNoKG1hcmtlciA9PiB7XFxuICAgICAgICAgICAgaWYgKG1hcmtlci5sZXZlbCAhPT0gdW5kZWZpbmVkICYmIG1hcmtlci5sZXZlbCA8IGxldmVsKSB7XFxuICAgICAgICAgICAgICAgIHJldHVybjtcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgaWYgKG1hcmtlci5zcGFjZSA9PT0gJ3dvcmxkJykge1xcbiAgICAgICAgICAgICAgICBpbnN0YW5jZS5kcmF3TWFya2VyKGNvbnRleHQsIG1hcmtlcik7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfSk7XFxuICAgICAgICBpbnN0YW5jZS5ib3JkZXJzLmZvckVhY2goYm9yZGVyID0+IHtcXG4gICAgICAgICAgICBpZiAoYm9yZGVyLmxldmVsICE9PSB1bmRlZmluZWQgJiYgYm9yZGVyLmxldmVsIDwgbGV2ZWwpIHtcXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICBpZiAoYm9yZGVyLnNwYWNlID09PSAnd29ybGQnKSB7XFxuICAgICAgICAgICAgICAgIGluc3RhbmNlLmRyYXdCb3JkZXIoY29udGV4dCwgYm9yZGVyKTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9KTtcXG4gICAgICAgIGNvbnRleHQucmVzdG9yZSgpO1xcbiAgICAgICAgLy8gRHJhdyB2YWx1ZXMsIGNoYXJ0cyBhbmQgc2NyZWVuLXNwYWNlIG1hcmtlcnMgJiBib3JkZXJzXFxuICAgICAgICBjb250ZXh0LnNhdmUoKTtcXG4gICAgICAgIGNvbnRleHQuc2V0VHJhbnNmb3JtKDEsIDAsIDAsIDEsIDAsIDApO1xcbiAgICAgICAgbGV0IHBvc2l0aW9uO1xcbiAgICAgICAgbGV0IGxlZnRZID0gaW5zdGFuY2Uub3B0aW9ucy5tYXJnaW47XFxuICAgICAgICBsZXQgcmlnaHRZID0gaW5zdGFuY2Uub3B0aW9ucy5tYXJnaW47XFxuICAgICAgICBjb25zdCBsaW5lSGVpZ2h0ID0gKGluc3RhbmNlLm9wdGlvbnMubGluZUhlaWdodCArXFxuICAgICAgICAgICAgaW5zdGFuY2Uub3B0aW9ucy5wYWRkaW5nICogMik7XFxuICAgICAgICBpbnN0YW5jZS52YWx1ZXMuZm9yRWFjaCh2YWx1ZSA9PiB7XFxuICAgICAgICAgICAgdmFyIF9hLCBfYiwgX2MsIF9kLCBfZSwgX2Y7XFxuICAgICAgICAgICAgaWYgKHZhbHVlLmxldmVsICE9PSB1bmRlZmluZWQgJiYgdmFsdWUubGV2ZWwgPCBsZXZlbCkge1xcbiAgICAgICAgICAgICAgICByZXR1cm47XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIHN3aXRjaCAodmFsdWUuYWxpZ24pIHtcXG4gICAgICAgICAgICAgICAgY2FzZSAnbGVmdCc6XFxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbiA9ICgwLCB2ZWNfMS52ZWMpKGluc3RhbmNlLm9wdGlvbnMubWFyZ2luLCBsZWZ0WSk7XFxuICAgICAgICAgICAgICAgICAgICBsZWZ0WSArPSBsaW5lSGVpZ2h0ICsgaW5zdGFuY2Uub3B0aW9ucy5saW5lTWFyZ2luO1xcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XFxuICAgICAgICAgICAgICAgIGNhc2UgJ3JpZ2h0JzpcXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uID0gKDAsIHZlY18xLnZlYykoY29udGV4dC5jYW52YXMuY2xpZW50V2lkdGggLSBpbnN0YW5jZS5vcHRpb25zLm1hcmdpbiwgcmlnaHRZKTtcXG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0WSArPSBsaW5lSGVpZ2h0ICsgaW5zdGFuY2Uub3B0aW9ucy5saW5lTWFyZ2luO1xcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIGluc3RhbmNlLmRyYXdMYWJlbChjb250ZXh0LCBEZWJ1Zy5wcmVwYXJlTGFiZWwoKF9hID0gdmFsdWUubGFiZWwpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6ICcnLCAoX2IgPSB2YWx1ZS52YWx1ZSkgIT09IG51bGwgJiYgX2IgIT09IHZvaWQgMCA/IF9iIDogJycsIHZhbHVlLnNob3dMYWJlbCwgdHJ1ZSksIHBvc2l0aW9uLCB2YWx1ZS5hbGlnbiwgKF9jID0gdmFsdWUucGFkZGluZykgIT09IG51bGwgJiYgX2MgIT09IHZvaWQgMCA/IF9jIDogaW5zdGFuY2Uub3B0aW9ucy5wYWRkaW5nLCAoX2QgPSB2YWx1ZS5mb250KSAhPT0gbnVsbCAmJiBfZCAhPT0gdm9pZCAwID8gX2QgOiBpbnN0YW5jZS5vcHRpb25zLmZvbnQsIChfZSA9IHZhbHVlLmZvcmVncm91bmRDb2xvdXIpICE9PSBudWxsICYmIF9lICE9PSB2b2lkIDAgPyBfZSA6IGluc3RhbmNlLm9wdGlvbnMuZm9yZWdyb3VuZENvbG91ciwgKF9mID0gdmFsdWUuYmFja2dyb3VuZENvbG91cikgIT09IG51bGwgJiYgX2YgIT09IHZvaWQgMCA/IF9mIDogaW5zdGFuY2Uub3B0aW9ucy5iYWNrZ3JvdW5kQ29sb3VyKTtcXG4gICAgICAgIH0pO1xcbiAgICAgICAgaW5zdGFuY2UuY2hhcnRzLmZvckVhY2goY2hhcnQgPT4ge1xcbiAgICAgICAgICAgIHZhciBfYSwgX2IsIF9jLCBfZCwgX2U7XFxuICAgICAgICAgICAgaWYgKGNoYXJ0LmxldmVsICE9PSB1bmRlZmluZWQgJiYgY2hhcnQubGV2ZWwgPCBsZXZlbCkge1xcbiAgICAgICAgICAgICAgICByZXR1cm47XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIHN3aXRjaCAoY2hhcnQuYWxpZ24pIHtcXG4gICAgICAgICAgICAgICAgY2FzZSAnbGVmdCc6XFxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbiA9ICgwLCB2ZWNfMS52ZWMpKGluc3RhbmNlLm9wdGlvbnMubWFyZ2luLCBsZWZ0WSk7XFxuICAgICAgICAgICAgICAgICAgICBsZWZ0WSArPSBsaW5lSGVpZ2h0ICsgaW5zdGFuY2Uub3B0aW9ucy5saW5lTWFyZ2luO1xcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XFxuICAgICAgICAgICAgICAgIGNhc2UgJ3JpZ2h0JzpcXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uID0gKDAsIHZlY18xLnZlYykoY29udGV4dC5jYW52YXMuY2xpZW50V2lkdGggLSBpbnN0YW5jZS5vcHRpb25zLm1hcmdpbiwgcmlnaHRZKTtcXG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0WSArPSBsaW5lSGVpZ2h0ICsgaW5zdGFuY2Uub3B0aW9ucy5saW5lTWFyZ2luO1xcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIGluc3RhbmNlLmRyYXdDaGFydChjb250ZXh0LCBEZWJ1Zy5wcmVwYXJlTGFiZWwoKF9hID0gY2hhcnQubGFiZWwpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6ICcnLCAnJywgY2hhcnQuc2hvd0xhYmVsLCBmYWxzZSksIHBvc2l0aW9uLCBjaGFydC5hbGlnbiwgKF9iID0gY2hhcnQucGFkZGluZykgIT09IG51bGwgJiYgX2IgIT09IHZvaWQgMCA/IF9iIDogaW5zdGFuY2Uub3B0aW9ucy5wYWRkaW5nLCAoX2MgPSBjaGFydC5mb250KSAhPT0gbnVsbCAmJiBfYyAhPT0gdm9pZCAwID8gX2MgOiBpbnN0YW5jZS5vcHRpb25zLmZvbnQsIChfZCA9IGNoYXJ0LmZvcmVncm91bmRDb2xvdXIpICE9PSBudWxsICYmIF9kICE9PSB2b2lkIDAgPyBfZCA6IGluc3RhbmNlLm9wdGlvbnMuZm9yZWdyb3VuZENvbG91ciwgKF9lID0gY2hhcnQuYmFja2dyb3VuZENvbG91cikgIT09IG51bGwgJiYgX2UgIT09IHZvaWQgMCA/IF9lIDogaW5zdGFuY2Uub3B0aW9ucy5iYWNrZ3JvdW5kQ29sb3VyLCBjaGFydC5jaGFydEJhY2tncm91bmRDb2xvdXIsIGNoYXJ0LnZhbHVlcywgY2hhcnQudmFsdWVCdWZmZXJTaXplLCBjaGFydC52YWx1ZUJ1ZmZlclN0cmlkZSwgY2hhcnQubWluVmFsdWUsIGNoYXJ0Lm1heFZhbHVlLCBjaGFydC5iYXJXaWR0aCwgY2hhcnQuYmFyQ29sb3Vycyk7XFxuICAgICAgICB9KTtcXG4gICAgICAgIGluc3RhbmNlLm1hcmtlcnMuZm9yRWFjaChtYXJrZXIgPT4ge1xcbiAgICAgICAgICAgIGlmIChtYXJrZXIubGV2ZWwgIT09IHVuZGVmaW5lZCAmJiBtYXJrZXIubGV2ZWwgPCBsZXZlbCkge1xcbiAgICAgICAgICAgICAgICByZXR1cm47XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIGlmIChtYXJrZXIuc3BhY2UgPT09ICdzY3JlZW4nKSB7XFxuICAgICAgICAgICAgICAgIGluc3RhbmNlLmRyYXdNYXJrZXIoY29udGV4dCwgbWFya2VyKTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9KTtcXG4gICAgICAgIGluc3RhbmNlLmJvcmRlcnMuZm9yRWFjaChib3JkZXIgPT4ge1xcbiAgICAgICAgICAgIGlmIChib3JkZXIubGV2ZWwgIT09IHVuZGVmaW5lZCAmJiBib3JkZXIubGV2ZWwgPCBsZXZlbCkge1xcbiAgICAgICAgICAgICAgICByZXR1cm47XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIGlmIChib3JkZXIuc3BhY2UgPT09ICdzY3JlZW4nKSB7XFxuICAgICAgICAgICAgICAgIGluc3RhbmNlLmRyYXdCb3JkZXIoY29udGV4dCwgYm9yZGVyKTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9KTtcXG4gICAgICAgIGNvbnRleHQucmVzdG9yZSgpO1xcbiAgICAgICAgLy8gQ2xlYXIgdmFsdWVzLCBtYXJrZXJzICYgYm9yZGVycyByZWFkeSBmb3IgbmV4dCBmcmFtZVxcbiAgICAgICAgaW5zdGFuY2UudmFsdWVzLmNsZWFyKCk7XFxuICAgICAgICBpbnN0YW5jZS5tYXJrZXJzLmNsZWFyKCk7XFxuICAgICAgICBpbnN0YW5jZS5ib3JkZXJzLmNsZWFyKCk7XFxuICAgIH1cXG4gICAgc3RhdGljIHByZXBhcmVMYWJlbChsYWJlbCwgdmFsdWUsIHNob3dMYWJlbCwgc2hvd1ZhbHVlKSB7XFxuICAgICAgICBjb25zdCBhY3R1YWxMYWJlbCA9IChzaG93TGFiZWwgJiYgbGFiZWwpID8gbGFiZWwgOiAnJztcXG4gICAgICAgIGNvbnN0IGFjdHVhbFZhbHVlID0gKCEhc2hvd1ZhbHVlICYmIHZhbHVlICE9PSAnJykgPyB2YWx1ZS50b1N0cmluZygpIDogJyc7XFxuICAgICAgICBjb25zdCBzZXBhcmF0b3IgPSAoYWN0dWFsTGFiZWwgJiYgYWN0dWFsVmFsdWUpID8gJzogJyA6ICcnO1xcbiAgICAgICAgcmV0dXJuIGAke2FjdHVhbExhYmVsfSR7c2VwYXJhdG9yfSR7YWN0dWFsVmFsdWV9YDtcXG4gICAgfVxcbiAgICBkcmF3TGFiZWwoY29udGV4dCwgdGV4dCwgcG9zaXRpb24sIGFsaWduLCBwYWRkaW5nLCBmb250LCBmb3JlZ3JvdW5kQ29sb3VyLCBiYWNrZ3JvdW5kQ29sb3VyKSB7XFxuICAgICAgICBjb250ZXh0LnNhdmUoKTtcXG4gICAgICAgIGNvbnRleHQuZm9udCA9IGZvbnQ7XFxuICAgICAgICBjb250ZXh0LnRleHRCYXNlbGluZSA9ICd0b3AnO1xcbiAgICAgICAgY29uc3QgYmFja2dyb3VuZFNpemUgPSB7XFxuICAgICAgICAgICAgd2lkdGg6IGNvbnRleHQubWVhc3VyZVRleHQodGV4dCkud2lkdGggKyBwYWRkaW5nICogMixcXG4gICAgICAgICAgICBoZWlnaHQ6IHRoaXMub3B0aW9ucy5saW5lSGVpZ2h0ICsgcGFkZGluZyAqIDIsXFxuICAgICAgICB9O1xcbiAgICAgICAgY29uc3QgeCA9IGFsaWduID09PSAncmlnaHQnXFxuICAgICAgICAgICAgPyAocG9zaXRpb24ueCAtIGJhY2tncm91bmRTaXplLndpZHRoKVxcbiAgICAgICAgICAgIDogcG9zaXRpb24ueDtcXG4gICAgICAgIC8vIERyYXcgYmFja2dyb3VuZFxcbiAgICAgICAgY29udGV4dC5maWxsU3R5bGUgPSBiYWNrZ3JvdW5kQ29sb3VyO1xcbiAgICAgICAgY29udGV4dC5maWxsUmVjdCh4IC0gcGFkZGluZywgcG9zaXRpb24ueSAtIHBhZGRpbmcsIGJhY2tncm91bmRTaXplLndpZHRoLCBiYWNrZ3JvdW5kU2l6ZS5oZWlnaHQpO1xcbiAgICAgICAgLy8gRHJhdyB0ZXh0XFxuICAgICAgICBjb250ZXh0LmZpbGxTdHlsZSA9IGZvcmVncm91bmRDb2xvdXI7XFxuICAgICAgICBjb250ZXh0LmZpbGxUZXh0KHRleHQsIHgsIHBvc2l0aW9uLnkpO1xcbiAgICAgICAgY29udGV4dC5yZXN0b3JlKCk7XFxuICAgIH1cXG4gICAgZHJhd0NoYXJ0KGNvbnRleHQsIGxhYmVsLCBwb3NpdGlvbiwgYWxpZ24sIHBhZGRpbmcsIGZvbnQsIGZvcmVncm91bmRDb2xvdXIsIGJhY2tncm91bmRDb2xvdXIsIGNoYXJ0QmFja2dyb3VuZENvbG91ciwgdmFsdWVzLCB2YWx1ZUJ1ZmZlclNpemUsIHZhbHVlQnVmZmVyU3RyaWRlLCBtaW5WYWx1ZSwgbWF4VmFsdWUsIGJhcldpZHRoLCBiYXJDb2xvdXJzKSB7XFxuICAgICAgICB2YXIgX2EsIF9iO1xcbiAgICAgICAgY29udGV4dC5zYXZlKCk7XFxuICAgICAgICBjb250ZXh0LmZvbnQgPSBmb250O1xcbiAgICAgICAgY29udGV4dC50ZXh0QmFzZWxpbmUgPSAndG9wJztcXG4gICAgICAgIGNvbnN0IGNoYXJ0U2l6ZSA9IHtcXG4gICAgICAgICAgICB3aWR0aDogYmFyV2lkdGggKiBNYXRoLmNlaWwodmFsdWVCdWZmZXJTaXplIC8gTWF0aC5tYXgodmFsdWVCdWZmZXJTdHJpZGUsIDEpKSxcXG4gICAgICAgICAgICBoZWlnaHQ6IHRoaXMub3B0aW9ucy5saW5lSGVpZ2h0ICsgcGFkZGluZyAqIDIsXFxuICAgICAgICB9O1xcbiAgICAgICAgY29uc3QgbGFiZWxTaXplID0ge1xcbiAgICAgICAgICAgIHdpZHRoOiBjb250ZXh0Lm1lYXN1cmVUZXh0KGxhYmVsKS53aWR0aCxcXG4gICAgICAgICAgICBoZWlnaHQ6IHRoaXMub3B0aW9ucy5saW5lSGVpZ2h0LFxcbiAgICAgICAgfTtcXG4gICAgICAgIGNvbnN0IGJhY2tncm91bmRTaXplID0ge1xcbiAgICAgICAgICAgIHdpZHRoOiAobGFiZWxTaXplLndpZHRoICtcXG4gICAgICAgICAgICAgICAgcGFkZGluZyArXFxuICAgICAgICAgICAgICAgIGNoYXJ0U2l6ZS53aWR0aCkgKyBwYWRkaW5nICogMixcXG4gICAgICAgICAgICBoZWlnaHQ6IHRoaXMub3B0aW9ucy5saW5lSGVpZ2h0ICsgcGFkZGluZyAqIDIsXFxuICAgICAgICB9O1xcbiAgICAgICAgY29uc3QgeCA9IGFsaWduID09PSAncmlnaHQnXFxuICAgICAgICAgICAgPyAocG9zaXRpb24ueCAtIGJhY2tncm91bmRTaXplLndpZHRoKVxcbiAgICAgICAgICAgIDogcG9zaXRpb24ueDtcXG4gICAgICAgIC8vIERyYXcgYmFja2dyb3VuZFxcbiAgICAgICAgY29udGV4dC5maWxsU3R5bGUgPSBiYWNrZ3JvdW5kQ29sb3VyO1xcbiAgICAgICAgY29udGV4dC5maWxsUmVjdCh4IC0gcGFkZGluZywgcG9zaXRpb24ueSAtIHBhZGRpbmcsIGJhY2tncm91bmRTaXplLndpZHRoLCBiYWNrZ3JvdW5kU2l6ZS5oZWlnaHQpO1xcbiAgICAgICAgLy8gRHJhdyBsYWJlbFxcbiAgICAgICAgaWYgKGxhYmVsKSB7XFxuICAgICAgICAgICAgY29udGV4dC5maWxsU3R5bGUgPSBmb3JlZ3JvdW5kQ29sb3VyO1xcbiAgICAgICAgICAgIGNvbnRleHQuZmlsbFRleHQobGFiZWwsIHgsIHBvc2l0aW9uLnkpO1xcbiAgICAgICAgfVxcbiAgICAgICAgLy8gRHJhdyBjaGFydFxcbiAgICAgICAgaWYgKGNoYXJ0QmFja2dyb3VuZENvbG91cikge1xcbiAgICAgICAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gY2hhcnRCYWNrZ3JvdW5kQ29sb3VyO1xcbiAgICAgICAgICAgIGNvbnRleHQuZmlsbFJlY3QoeCArIHBhZGRpbmcgKyBsYWJlbFNpemUud2lkdGggKyBwYWRkaW5nLCBwb3NpdGlvbi55IC0gcGFkZGluZywgY2hhcnRTaXplLndpZHRoLCBjaGFydFNpemUuaGVpZ2h0KTtcXG4gICAgICAgIH1cXG4gICAgICAgIGNvbnN0IHJhbmdlID0gbWF4VmFsdWUgLSBtaW5WYWx1ZTtcXG4gICAgICAgIGNvbnN0IGJhck9mZnNldCA9ICgwLCB2ZWNfMS52ZWMpKHggKyBwYWRkaW5nICsgbGFiZWxTaXplLndpZHRoICsgcGFkZGluZywgcG9zaXRpb24ueSAtIHBhZGRpbmcpO1xcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBNYXRoLmNlaWwodmFsdWVzLmxlbmd0aCAvIE1hdGgubWF4KHZhbHVlQnVmZmVyU3RyaWRlLCAxKSk7IGkrKykge1xcbiAgICAgICAgICAgIGxldCB2YWx1ZTtcXG4gICAgICAgICAgICBpZiAodmFsdWVCdWZmZXJTdHJpZGUgPD0gMSkge1xcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHZhbHVlc1tpXTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgZWxzZSB7XFxuICAgICAgICAgICAgICAgIHZhbHVlID0gdmFsdWVzXFxuICAgICAgICAgICAgICAgICAgICAuc2xpY2UoaSAqIHZhbHVlQnVmZmVyU3RyaWRlLCAoaSArIDEpICogdmFsdWVCdWZmZXJTdHJpZGUpXFxuICAgICAgICAgICAgICAgICAgICAucmVkdWNlKChhLCBiKSA9PiBhICsgYiwgMCkgLyB2YWx1ZUJ1ZmZlclN0cmlkZTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgY29uc3QgYmFyU2l6ZSA9ICgwLCB2ZWNfMS52ZWMpKGJhcldpZHRoLCBNYXRoLnJvdW5kKGNoYXJ0U2l6ZS5oZWlnaHQgKiAodmFsdWUgLSBtaW5WYWx1ZSkgLyByYW5nZSkpO1xcbiAgICAgICAgICAgIGNvbnN0IGJhclBvc2l0aW9uID0gdmVjXzEudmVjLmFkZChiYXJPZmZzZXQsICgwLCB2ZWNfMS52ZWMpKCh2YWx1ZXMubGVuZ3RoIDwgdmFsdWVCdWZmZXJTaXplXFxuICAgICAgICAgICAgICAgID8gTWF0aC5jZWlsKCh2YWx1ZUJ1ZmZlclNpemUgLSB2YWx1ZXMubGVuZ3RoKSAvIHZhbHVlQnVmZmVyU3RyaWRlKSAqIGJhcldpZHRoXFxuICAgICAgICAgICAgICAgIDogMCkgKyBpICogYmFyV2lkdGgsIGNoYXJ0U2l6ZS5oZWlnaHQgLSBiYXJTaXplLnkpKTtcXG4gICAgICAgICAgICBjb25zdCBiYXJDb2xvdXIgPSAoX2IgPSAoYmFyQ29sb3Vyc1xcbiAgICAgICAgICAgICAgICA/IChfYSA9IFsuLi5iYXJDb2xvdXJzXS5yZXZlcnNlKCkuZmluZChjID0+IHZhbHVlc1tpXSA+PSBjLm9mZnNldCkpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5jb2xvdXJcXG4gICAgICAgICAgICAgICAgOiB1bmRlZmluZWQpKSAhPT0gbnVsbCAmJiBfYiAhPT0gdm9pZCAwID8gX2IgOiBmb3JlZ3JvdW5kQ29sb3VyO1xcbiAgICAgICAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gYmFyQ29sb3VyO1xcbiAgICAgICAgICAgIGNvbnRleHQuZmlsbFJlY3QoYmFyUG9zaXRpb24ueCwgYmFyUG9zaXRpb24ueSwgYmFyU2l6ZS54LCBiYXJTaXplLnkpO1xcbiAgICAgICAgfVxcbiAgICAgICAgY29udGV4dC5yZXN0b3JlKCk7XFxuICAgIH1cXG4gICAgZHJhd01hcmtlcihjb250ZXh0LCBtYXJrZXIpIHtcXG4gICAgICAgIHZhciBfYSwgX2IsIF9jLCBfZCwgX2UsIF9mLCBfZztcXG4gICAgICAgIGNvbnRleHQuc2F2ZSgpO1xcbiAgICAgICAgY29uc3QgcG9zaXRpb24gPSAoX2EgPSBtYXJrZXIucG9zaXRpb24pICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6ICgwLCB2ZWNfMS52ZWMpKCk7XFxuICAgICAgICBpZiAobWFya2VyLnNob3dMYWJlbCB8fCBtYXJrZXIuc2hvd1ZhbHVlKSB7XFxuICAgICAgICAgICAgdGhpcy5kcmF3TGFiZWwoY29udGV4dCwgRGVidWcucHJlcGFyZUxhYmVsKChfYiA9IG1hcmtlci5sYWJlbCkgIT09IG51bGwgJiYgX2IgIT09IHZvaWQgMCA/IF9iIDogJycsIChfYyA9IG1hcmtlci52YWx1ZSkgIT09IG51bGwgJiYgX2MgIT09IHZvaWQgMCA/IF9jIDogJycsIG1hcmtlci5zaG93TGFiZWwsIG1hcmtlci5zaG93VmFsdWUpLCB2ZWNfMS52ZWMuYWRkKHBvc2l0aW9uICE9PSBudWxsICYmIHBvc2l0aW9uICE9PSB2b2lkIDAgPyBwb3NpdGlvbiA6ICgwLCB2ZWNfMS52ZWMpKCksIG1hcmtlci5sYWJlbE9mZnNldCksICdsZWZ0JywgKF9kID0gbWFya2VyLnBhZGRpbmcpICE9PSBudWxsICYmIF9kICE9PSB2b2lkIDAgPyBfZCA6IHRoaXMub3B0aW9ucy5wYWRkaW5nLCAoX2UgPSBtYXJrZXIuZm9udCkgIT09IG51bGwgJiYgX2UgIT09IHZvaWQgMCA/IF9lIDogdGhpcy5vcHRpb25zLmZvbnQsIChfZiA9IG1hcmtlci5mb3JlZ3JvdW5kQ29sb3VyKSAhPT0gbnVsbCAmJiBfZiAhPT0gdm9pZCAwID8gX2YgOiB0aGlzLm9wdGlvbnMuZm9yZWdyb3VuZENvbG91ciwgKF9nID0gbWFya2VyLmJhY2tncm91bmRDb2xvdXIpICE9PSBudWxsICYmIF9nICE9PSB2b2lkIDAgPyBfZyA6IHRoaXMub3B0aW9ucy5iYWNrZ3JvdW5kQ29sb3VyKTtcXG4gICAgICAgIH1cXG4gICAgICAgIGlmIChtYXJrZXIuc2hvd01hcmtlcikge1xcbiAgICAgICAgICAgIGNvbnRleHQubGluZVdpZHRoID0gMjtcXG4gICAgICAgICAgICBjb250ZXh0LnN0cm9rZVN0eWxlID0gY29udGV4dC5maWxsU3R5bGUgPSBtYXJrZXIubWFya2VyQ29sb3VyO1xcbiAgICAgICAgICAgIHN3aXRjaCAobWFya2VyLm1hcmtlclN0eWxlKSB7XFxuICAgICAgICAgICAgICAgIGNhc2UgJ3gnOlxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kcmF3Q3Jvc3MoY29udGV4dCwgcG9zaXRpb24sIG1hcmtlci5tYXJrZXJTaXplKTtcXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xcbiAgICAgICAgICAgICAgICBjYXNlICcrJzpcXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZHJhd1BsdXMoY29udGV4dCwgcG9zaXRpb24sIG1hcmtlci5tYXJrZXJTaXplKTtcXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xcbiAgICAgICAgICAgICAgICBjYXNlICcuJzpcXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZHJhd0RvdChjb250ZXh0LCBwb3NpdGlvbiwgbWFya2VyLm1hcmtlclNpemUpO1xcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICAgICAgY29udGV4dC5yZXN0b3JlKCk7XFxuICAgIH1cXG4gICAgZHJhd0Nyb3NzKGNvbnRleHQsIHBvc2l0aW9uLCBzaXplKSB7XFxuICAgICAgICBjb250ZXh0LmJlZ2luUGF0aCgpO1xcbiAgICAgICAgY29uc3QgaGFsZlNpemUgPSBzaXplIC8gMjtcXG4gICAgICAgIGNvbnRleHQubW92ZVRvKHBvc2l0aW9uLnggLSBoYWxmU2l6ZSwgcG9zaXRpb24ueSAtIGhhbGZTaXplKTtcXG4gICAgICAgIGNvbnRleHQubGluZVRvKHBvc2l0aW9uLnggKyBoYWxmU2l6ZSwgcG9zaXRpb24ueSArIGhhbGZTaXplKTtcXG4gICAgICAgIGNvbnRleHQubW92ZVRvKHBvc2l0aW9uLnggLSBoYWxmU2l6ZSwgcG9zaXRpb24ueSArIGhhbGZTaXplKTtcXG4gICAgICAgIGNvbnRleHQubGluZVRvKHBvc2l0aW9uLnggKyBoYWxmU2l6ZSwgcG9zaXRpb24ueSAtIGhhbGZTaXplKTtcXG4gICAgICAgIGNvbnRleHQuc3Ryb2tlKCk7XFxuICAgIH1cXG4gICAgZHJhd1BsdXMoY29udGV4dCwgcG9zaXRpb24sIHNpemUpIHtcXG4gICAgICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XFxuICAgICAgICBjb25zdCBoYWxmU2l6ZSA9IHNpemUgLyAyO1xcbiAgICAgICAgY29udGV4dC5tb3ZlVG8ocG9zaXRpb24ueCwgcG9zaXRpb24ueSAtIGhhbGZTaXplKTtcXG4gICAgICAgIGNvbnRleHQubGluZVRvKHBvc2l0aW9uLngsIHBvc2l0aW9uLnkgKyBoYWxmU2l6ZSk7XFxuICAgICAgICBjb250ZXh0Lm1vdmVUbyhwb3NpdGlvbi54IC0gaGFsZlNpemUsIHBvc2l0aW9uLnkpO1xcbiAgICAgICAgY29udGV4dC5saW5lVG8ocG9zaXRpb24ueCArIGhhbGZTaXplLCBwb3NpdGlvbi55KTtcXG4gICAgICAgIGNvbnRleHQuc3Ryb2tlKCk7XFxuICAgIH1cXG4gICAgZHJhd0RvdChjb250ZXh0LCBwb3NpdGlvbiwgc2l6ZSkge1xcbiAgICAgICAgY29udGV4dC5iZWdpblBhdGgoKTtcXG4gICAgICAgIGNvbnRleHQuYXJjKHBvc2l0aW9uLngsIHBvc2l0aW9uLnksIHNpemUgLyAyLCAwLCBNYXRoLlBJICogMik7XFxuICAgICAgICBjb250ZXh0LmZpbGwoKTtcXG4gICAgfVxcbiAgICBkcmF3Qm9yZGVyKGNvbnRleHQsIGJvcmRlcikge1xcbiAgICAgICAgdmFyIF9hLCBfYiwgX2MsIF9kLCBfZSwgX2YsIF9nO1xcbiAgICAgICAgY29udGV4dC5zYXZlKCk7XFxuICAgICAgICBjb25zdCBwb3NpdGlvbiA9IChfYSA9IGJvcmRlci5wb3NpdGlvbikgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogKDAsIHZlY18xLnZlYykoKTtcXG4gICAgICAgIGlmIChib3JkZXIuc2hvd0xhYmVsIHx8IGJvcmRlci5zaG93VmFsdWUpIHtcXG4gICAgICAgICAgICB0aGlzLmRyYXdMYWJlbChjb250ZXh0LCBEZWJ1Zy5wcmVwYXJlTGFiZWwoKF9iID0gYm9yZGVyLmxhYmVsKSAhPT0gbnVsbCAmJiBfYiAhPT0gdm9pZCAwID8gX2IgOiAnJywgKF9jID0gYm9yZGVyLnZhbHVlKSAhPT0gbnVsbCAmJiBfYyAhPT0gdm9pZCAwID8gX2MgOiAnJywgYm9yZGVyLnNob3dMYWJlbCwgYm9yZGVyLnNob3dWYWx1ZSksIHZlY18xLnZlYy5hZGQocG9zaXRpb24gIT09IG51bGwgJiYgcG9zaXRpb24gIT09IHZvaWQgMCA/IHBvc2l0aW9uIDogKDAsIHZlY18xLnZlYykoKSwgYm9yZGVyLmxhYmVsT2Zmc2V0KSwgJ2xlZnQnLCAoX2QgPSBib3JkZXIucGFkZGluZykgIT09IG51bGwgJiYgX2QgIT09IHZvaWQgMCA/IF9kIDogdGhpcy5vcHRpb25zLnBhZGRpbmcsIChfZSA9IGJvcmRlci5mb250KSAhPT0gbnVsbCAmJiBfZSAhPT0gdm9pZCAwID8gX2UgOiB0aGlzLm9wdGlvbnMuZm9udCwgKF9mID0gYm9yZGVyLmZvcmVncm91bmRDb2xvdXIpICE9PSBudWxsICYmIF9mICE9PSB2b2lkIDAgPyBfZiA6IHRoaXMub3B0aW9ucy5mb3JlZ3JvdW5kQ29sb3VyLCAoX2cgPSBib3JkZXIuYmFja2dyb3VuZENvbG91cikgIT09IG51bGwgJiYgX2cgIT09IHZvaWQgMCA/IF9nIDogdGhpcy5vcHRpb25zLmJhY2tncm91bmRDb2xvdXIpO1xcbiAgICAgICAgfVxcbiAgICAgICAgaWYgKGJvcmRlci5zaG93Qm9yZGVyKSB7XFxuICAgICAgICAgICAgY29udGV4dC5saW5lV2lkdGggPSBib3JkZXIuYm9yZGVyV2lkdGg7XFxuICAgICAgICAgICAgY29udGV4dC5zdHJva2VTdHlsZSA9IGNvbnRleHQuZmlsbFN0eWxlID0gYm9yZGVyLmJvcmRlckNvbG91cjtcXG4gICAgICAgICAgICBzd2l0Y2ggKGJvcmRlci5ib3JkZXJTdHlsZSkge1xcbiAgICAgICAgICAgICAgICBjYXNlICdzb2xpZCc6XFxuICAgICAgICAgICAgICAgICAgICBjb250ZXh0LnNldExpbmVEYXNoKFtdKTtcXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xcbiAgICAgICAgICAgICAgICBjYXNlICdkYXNoZWQnOlxcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dC5zZXRMaW5lRGFzaChbYm9yZGVyLmJvcmRlckRhc2hTaXplLCBib3JkZXIuYm9yZGVyRGFzaFNpemVdKTtcXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xcbiAgICAgICAgICAgICAgICBjYXNlICdkb3R0ZWQnOlxcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dC5zZXRMaW5lRGFzaChbYm9yZGVyLmJvcmRlcldpZHRoLCBib3JkZXIuYm9yZGVyV2lkdGhdKTtcXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICBzd2l0Y2ggKGJvcmRlci5ib3JkZXJTaGFwZSkge1xcbiAgICAgICAgICAgICAgICBjYXNlICdyZWN0YW5nbGUnOlxcbiAgICAgICAgICAgICAgICAgICAgaWYgKGJvcmRlci5zaXplKSB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kcmF3UmVjdGFuZ2xlKGNvbnRleHQsIHBvc2l0aW9uLCBib3JkZXIuc2l6ZSk7XFxuICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgICAgICBicmVhaztcXG4gICAgICAgICAgICAgICAgY2FzZSAnY2lyY2xlJzpcXG4gICAgICAgICAgICAgICAgICAgIGlmIChib3JkZXIucmFkaXVzKSB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kcmF3Q2lyY2xlKGNvbnRleHQsIHBvc2l0aW9uLCBib3JkZXIucmFkaXVzKTtcXG4gICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgICAgIGNvbnRleHQucmVzdG9yZSgpO1xcbiAgICB9XFxuICAgIGRyYXdSZWN0YW5nbGUoY29udGV4dCwgcG9zaXRpb24sIHNpemUpIHtcXG4gICAgICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XFxuICAgICAgICBjb250ZXh0LnJlY3QocG9zaXRpb24ueCwgcG9zaXRpb24ueSwgc2l6ZS54LCBzaXplLnkpO1xcbiAgICAgICAgY29udGV4dC5zdHJva2UoKTtcXG4gICAgfVxcbiAgICBkcmF3Q2lyY2xlKGNvbnRleHQsIHBvc2l0aW9uLCByYWRpdXMpIHtcXG4gICAgICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XFxuICAgICAgICBjb250ZXh0LmFyYyhwb3NpdGlvbi54LCBwb3NpdGlvbi55LCByYWRpdXMsIDAsIE1hdGguUEkgKiAyKTtcXG4gICAgICAgIGNvbnRleHQuc3Ryb2tlKCk7XFxuICAgIH1cXG59XFxuZXhwb3J0c1tcXFwiZGVmYXVsdFxcXCJdID0gRGVidWc7XFxuRGVidWcuZGVmYXVsdE9wdGlvbnMgPSB7XFxuICAgIG1hcmdpbjogMTAsXFxuICAgIHBhZGRpbmc6IDQsXFxuICAgIGZvbnQ6ICcxMHB0IEx1Y2lkYSBDb25zb2xlLCBtb25vc3BhY2UnLFxcbiAgICBsaW5lSGVpZ2h0OiAxMixcXG4gICAgbGluZU1hcmdpbjogMCxcXG4gICAgZm9yZWdyb3VuZENvbG91cjogJyNmZmYnLFxcbiAgICBiYWNrZ3JvdW5kQ29sb3VyOiAnIzMzMycsXFxuICAgIGRlZmF1bHRWYWx1ZToge1xcbiAgICAgICAgYWxpZ246ICdsZWZ0JyxcXG4gICAgICAgIHNob3dMYWJlbDogdHJ1ZSxcXG4gICAgfSxcXG4gICAgZGVmYXVsdENoYXJ0OiB7XFxuICAgICAgICB2YWx1ZXM6IFtdLFxcbiAgICAgICAgdmFsdWVCdWZmZXJTaXplOiA2MCxcXG4gICAgICAgIHZhbHVlQnVmZmVyU3RyaWRlOiAxLFxcbiAgICAgICAgbWluVmFsdWU6IDAsXFxuICAgICAgICBtYXhWYWx1ZTogMTAwLFxcbiAgICAgICAgYmFyV2lkdGg6IDIsXFxuICAgICAgICBhbGlnbjogJ2xlZnQnLFxcbiAgICAgICAgc2hvd0xhYmVsOiB0cnVlLFxcbiAgICAgICAgY2hhcnRCYWNrZ3JvdW5kQ29sb3VyOiAnIzIyMicsXFxuICAgIH0sXFxuICAgIGRlZmF1bHRNYXJrZXI6IHtcXG4gICAgICAgIHNob3dMYWJlbDogdHJ1ZSxcXG4gICAgICAgIHNob3dWYWx1ZTogdHJ1ZSxcXG4gICAgICAgIHNob3dNYXJrZXI6IHRydWUsXFxuICAgICAgICBtYXJrZXJTaXplOiA2LFxcbiAgICAgICAgbWFya2VyU3R5bGU6ICd4JyxcXG4gICAgICAgIG1hcmtlckNvbG91cjogJyNjY2MnLFxcbiAgICAgICAgc3BhY2U6ICd3b3JsZCcsXFxuICAgICAgICBsYWJlbE9mZnNldDogKDAsIHZlY18xLnZlYykoMTApLFxcbiAgICB9LFxcbiAgICBkZWZhdWx0Qm9yZGVyOiB7XFxuICAgICAgICBzaG93TGFiZWw6IHRydWUsXFxuICAgICAgICBzaG93VmFsdWU6IHRydWUsXFxuICAgICAgICBzaG93Qm9yZGVyOiB0cnVlLFxcbiAgICAgICAgYm9yZGVyV2lkdGg6IDEsXFxuICAgICAgICBib3JkZXJTdHlsZTogJ3NvbGlkJyxcXG4gICAgICAgIGJvcmRlclNoYXBlOiAncmVjdGFuZ2xlJyxcXG4gICAgICAgIGJvcmRlckNvbG91cjogJyNjY2MnLFxcbiAgICAgICAgYm9yZGVyRGFzaFNpemU6IDUsXFxuICAgICAgICBzcGFjZTogJ3dvcmxkJyxcXG4gICAgICAgIGxhYmVsT2Zmc2V0OiAoMCwgdmVjXzEudmVjKSgxMCksXFxuICAgIH0sXFxufTtcXG5cXG5cXG4vLyMgc291cmNlVVJMPXdlYnBhY2s6Ly9AYmFzZW1lbnR1bml2ZXJzZS9kZWJ1Zy8uL2luZGV4LnRzP1wiKTtcblxuLyoqKi8gfSlcblxuLyoqKioqKi8gXHR9KTtcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqLyBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0dmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuLyoqKioqKi8gXHRcbi8qKioqKiovIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbi8qKioqKiovIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuLyoqKioqKi8gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuLyoqKioqKi8gXHRcdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuLyoqKioqKi8gXHRcdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuLyoqKioqKi8gXHRcdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuLyoqKioqKi8gXHRcdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuLyoqKioqKi8gXHRcdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuLyoqKioqKi8gXHRcdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcbi8qKioqKiovIFx0XHRcdGV4cG9ydHM6IHt9XG4vKioqKioqLyBcdFx0fTtcbi8qKioqKiovIFx0XG4vKioqKioqLyBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4vKioqKioqLyBcdFx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4vKioqKioqLyBcdFxuLyoqKioqKi8gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4vKioqKioqLyBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuLyoqKioqKi8gXHR9XG4vKioqKioqLyBcdFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKiovIFx0XG4vKioqKioqLyBcdC8vIHN0YXJ0dXBcbi8qKioqKiovIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vKioqKioqLyBcdC8vIFRoaXMgZW50cnkgbW9kdWxlIGNhbid0IGJlIGlubGluZWQgYmVjYXVzZSB0aGUgZXZhbCBkZXZ0b29sIGlzIHVzZWQuXG4vKioqKioqLyBcdHZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vaW5kZXgudHNcIik7XG4vKioqKioqLyBcdFxuLyoqKioqKi8gXHRyZXR1cm4gX193ZWJwYWNrX2V4cG9ydHNfXztcbi8qKioqKiovIH0pKClcbjtcbn0pOyIsIi8qXG4gKiBBVFRFTlRJT046IFRoZSBcImV2YWxcIiBkZXZ0b29sIGhhcyBiZWVuIHVzZWQgKG1heWJlIGJ5IGRlZmF1bHQgaW4gbW9kZTogXCJkZXZlbG9wbWVudFwiKS5cbiAqIFRoaXMgZGV2dG9vbCBpcyBuZWl0aGVyIG1hZGUgZm9yIHByb2R1Y3Rpb24gbm9yIGZvciByZWFkYWJsZSBvdXRwdXQgZmlsZXMuXG4gKiBJdCB1c2VzIFwiZXZhbCgpXCIgY2FsbHMgdG8gY3JlYXRlIGEgc2VwYXJhdGUgc291cmNlIGZpbGUgaW4gdGhlIGJyb3dzZXIgZGV2dG9vbHMuXG4gKiBJZiB5b3UgYXJlIHRyeWluZyB0byByZWFkIHRoZSBvdXRwdXQgZmlsZSwgc2VsZWN0IGEgZGlmZmVyZW50IGRldnRvb2wgKGh0dHBzOi8vd2VicGFjay5qcy5vcmcvY29uZmlndXJhdGlvbi9kZXZ0b29sLylcbiAqIG9yIGRpc2FibGUgdGhlIGRlZmF1bHQgZGV2dG9vbCB3aXRoIFwiZGV2dG9vbDogZmFsc2VcIi5cbiAqIElmIHlvdSBhcmUgbG9va2luZyBmb3IgcHJvZHVjdGlvbi1yZWFkeSBvdXRwdXQgZmlsZXMsIHNlZSBtb2RlOiBcInByb2R1Y3Rpb25cIiAoaHR0cHM6Ly93ZWJwYWNrLmpzLm9yZy9jb25maWd1cmF0aW9uL21vZGUvKS5cbiAqL1xuKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIHtcblx0XHR2YXIgYSA9IGZhY3RvcnkoKTtcblx0XHRmb3IodmFyIGkgaW4gYSkgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyA/IGV4cG9ydHMgOiByb290KVtpXSA9IGFbaV07XG5cdH1cbn0pKHNlbGYsICgpID0+IHtcbnJldHVybiAvKioqKioqLyAoKCkgPT4geyAvLyB3ZWJwYWNrQm9vdHN0cmFwXG4vKioqKioqLyBcdHZhciBfX3dlYnBhY2tfbW9kdWxlc19fID0gKHtcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9AYmFzZW1lbnR1bml2ZXJzZS91dGlscy91dGlscy5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9AYmFzZW1lbnR1bml2ZXJzZS91dGlscy91dGlscy5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKiovICgobW9kdWxlKSA9PiB7XG5cbmV2YWwoXCIvKipcXG4gKiBAb3ZlcnZpZXcgQSBsaWJyYXJ5IG9mIHVzZWZ1bCBmdW5jdGlvbnNcXG4gKiBAYXV0aG9yIEdvcmRvbiBMYXJyaWdhblxcbiAqL1xcblxcbi8qKlxcbiAqIENoZWNrIGlmIHR3byBudW1iZXJzIGFyZSBhcHByb3hpbWF0ZWx5IGVxdWFsXFxuICogQHBhcmFtIHtudW1iZXJ9IGEgTnVtYmVyIGFcXG4gKiBAcGFyYW0ge251bWJlcn0gYiBOdW1iZXIgYlxcbiAqIEBwYXJhbSB7bnVtYmVyfSBbcD1OdW1iZXIuRVBTSUxPTl0gVGhlIHByZWNpc2lvbiB2YWx1ZVxcbiAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgbnVtYmVycyBhIGFuZCBiIGFyZSBhcHByb3hpbWF0ZWx5IGVxdWFsXFxuICovXFxuY29uc3QgZmxvYXRFcXVhbHMgPSAoYSwgYiwgcCA9IE51bWJlci5FUFNJTE9OKSA9PiBNYXRoLmFicyhhIC0gYikgPCBwO1xcblxcbi8qKlxcbiAqIENsYW1wIGEgbnVtYmVyIGJldHdlZW4gbWluIGFuZCBtYXhcXG4gKiBAcGFyYW0ge251bWJlcn0gYSBUaGUgbnVtYmVyIHRvIGNsYW1wXFxuICogQHBhcmFtIHtudW1iZXJ9IFttaW49MF0gVGhlIG1pbmltdW0gdmFsdWVcXG4gKiBAcGFyYW0ge251bWJlcn0gW21heD0xXSBUaGUgbWF4aW11bSB2YWx1ZVxcbiAqIEByZXR1cm4ge251bWJlcn0gQSBjbGFtcGVkIG51bWJlclxcbiAqL1xcbmNvbnN0IGNsYW1wID0gKGEsIG1pbiA9IDAsIG1heCA9IDEpID0+IGEgPCBtaW4gPyBtaW4gOiAoYSA+IG1heCA/IG1heCA6IGEpO1xcblxcbi8qKlxcbiAqIEdldCB0aGUgZnJhY3Rpb25hbCBwYXJ0IG9mIGEgbnVtYmVyXFxuICogQHBhcmFtIHtudW1iZXJ9IGEgVGhlIG51bWJlciBmcm9tIHdoaWNoIHRvIGdldCB0aGUgZnJhY3Rpb25hbCBwYXJ0XFxuICogQHJldHVybiB7bnVtYmVyfSBUaGUgZnJhY3Rpb25hbCBwYXJ0IG9mIHRoZSBudW1iZXJcXG4gKi9cXG5jb25zdCBmcmFjID0gYSA9PiBhID49IDAgPyBhIC0gTWF0aC5mbG9vcihhKSA6IGEgLSBNYXRoLmNlaWwoYSk7XFxuXFxuLyoqXFxuICogRG8gYSBsaW5lYXIgaW50ZXJwb2xhdGlvbiBiZXR3ZWVuIGEgYW5kIGJcXG4gKiBAcGFyYW0ge251bWJlcn0gYSBUaGUgbWluaW11bSBudW1iZXJcXG4gKiBAcGFyYW0ge251bWJlcn0gYiBUaGUgbWF4aW11bSBudW1iZXJcXG4gKiBAcGFyYW0ge251bWJlcn0gaSBUaGUgaW50ZXJwb2xhdGlvbiB2YWx1ZSwgc2hvdWxkIGJlIGluIHRoZSBpbnRlcnZhbCBbMCwgMV1cXG4gKiBAcmV0dXJuIHtudW1iZXJ9IEFuIGludGVycG9sYXRlZCB2YWx1ZSBpbiB0aGUgaW50ZXJ2YWwgW2EsIGJdXFxuICovXFxuY29uc3QgbGVycCA9IChhLCBiLCBpKSA9PiBhICsgKGIgLSBhKSAqIGk7XFxuXFxuLyoqXFxuICogR2V0IHRoZSBwb3NpdGlvbiBvZiBpIGJldHdlZW4gYSBhbmQgYlxcbiAqIEBwYXJhbSB7bnVtYmVyfSBhIFRoZSBtaW5pbXVtIG51bWJlclxcbiAqIEBwYXJhbSB7bnVtYmVyfSBiIFRoZSBtYXhpbXVtIG51bWJlclxcbiAqIEBwYXJhbSB7bnVtYmVyfSBpIFRoZSBpbnRlcnBvbGF0ZWQgdmFsdWUgaW4gdGhlIGludGVydmFsIFthLCBiXVxcbiAqIEByZXR1cm4ge251bWJlcn0gVGhlIHBvc2l0aW9uIG9mIGkgYmV0d2VlbiBhIGFuZCBiXFxuICovXFxuY29uc3QgdW5sZXJwID0gKGEsIGIsIGkpID0+IChpIC0gYSkgLyAoYiAtIGEpO1xcblxcbi8qKlxcbiAqIERvIGEgYmlsaW5lYXIgaW50ZXJwb2xhdGlvblxcbiAqIEBwYXJhbSB7bnVtYmVyfSBjMDAgVG9wLWxlZnQgdmFsdWVcXG4gKiBAcGFyYW0ge251bWJlcn0gYzEwIFRvcC1yaWdodCB2YWx1ZVxcbiAqIEBwYXJhbSB7bnVtYmVyfSBjMDEgQm90dG9tLWxlZnQgdmFsdWVcXG4gKiBAcGFyYW0ge251bWJlcn0gYzExIEJvdHRvbS1yaWdodCB2YWx1ZVxcbiAqIEBwYXJhbSB7bnVtYmVyfSBpeCBJbnRlcnBvbGF0aW9uIHZhbHVlIGFsb25nIHhcXG4gKiBAcGFyYW0ge251bWJlcn0gaXkgSW50ZXJwb2xhdGlvbiB2YWx1ZSBhbG9uZyB5XFxuICogQHJldHVybiB7bnVtYmVyfSBBIGJpbGluZWFyIGludGVycG9sYXRlZCB2YWx1ZVxcbiAqL1xcbmNvbnN0IGJsZXJwID0gKGMwMCwgYzEwLCBjMDEsIGMxMSwgaXgsIGl5KSA9PiBsZXJwKGxlcnAoYzAwLCBjMTAsIGl4KSwgbGVycChjMDEsIGMxMSwgaXgpLCBpeSk7XFxuXFxuLyoqXFxuICogUmUtbWFwIGEgbnVtYmVyIGkgZnJvbSByYW5nZSBhMS4uLmEyIHRvIGIxLi4uYjJcXG4gKiBAcGFyYW0ge251bWJlcn0gaSBUaGUgbnVtYmVyIHRvIHJlLW1hcFxcbiAqIEBwYXJhbSB7bnVtYmVyfSBhMVxcbiAqIEBwYXJhbSB7bnVtYmVyfSBhMlxcbiAqIEBwYXJhbSB7bnVtYmVyfSBiMVxcbiAqIEBwYXJhbSB7bnVtYmVyfSBiMlxcbiAqIEByZXR1cm4ge251bWJlcn1cXG4gKi9cXG5jb25zdCByZW1hcCA9IChpLCBhMSwgYTIsIGIxLCBiMikgPT4gYjEgKyAoaSAtIGExKSAqIChiMiAtIGIxKSAvIChhMiAtIGExKTtcXG5cXG4vKipcXG4gKiBEbyBhIHNtb290aCBpbnRlcnBvbGF0aW9uIGJldHdlZW4gYSBhbmQgYlxcbiAqIEBwYXJhbSB7bnVtYmVyfSBhIFRoZSBtaW5pbXVtIG51bWJlclxcbiAqIEBwYXJhbSB7bnVtYmVyfSBiIFRoZSBtYXhpbXVtIG51bWJlclxcbiAqIEBwYXJhbSB7bnVtYmVyfSBpIFRoZSBpbnRlcnBvbGF0aW9uIHZhbHVlXFxuICogQHJldHVybiB7bnVtYmVyfSBBbiBpbnRlcnBvbGF0ZWQgdmFsdWUgaW4gdGhlIGludGVydmFsIFthLCBiXVxcbiAqL1xcbmNvbnN0IHNtb290aHN0ZXAgPSAoYSwgYiwgaSkgPT4gbGVycChhLCBiLCAzICogTWF0aC5wb3coaSwgMikgLSAyICogTWF0aC5wb3coaSwgMykpO1xcblxcbi8qKlxcbiAqIEdldCBhbiBhbmdsZSBpbiByYWRpYW5zXFxuICogQHBhcmFtIHtudW1iZXJ9IGRlZ3JlZXMgVGhlIGFuZ2xlIGluIGRlZ3JlZXNcXG4gKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBhbmdsZSBpbiByYWRpYW5zXFxuICovXFxuY29uc3QgcmFkaWFucyA9IGRlZ3JlZXMgPT4gKE1hdGguUEkgLyAxODApICogZGVncmVlcztcXG5cXG4vKipcXG4gKiBHZXQgYW4gYW5nbGUgaW4gZGVncmVlc1xcbiAqIEBwYXJhbSB7bnVtYmVyfSByYWRpYW5zIFRoZSBhbmdsZSBpbiByYWRpYW5zXFxuICogQHJldHVybiB7bnVtYmVyfSBUaGUgYW5nbGUgaW4gZGVncmVlc1xcbiAqL1xcbmNvbnN0IGRlZ3JlZXMgPSByYWRpYW5zID0+ICgxODAgLyBNYXRoLlBJKSAqIHJhZGlhbnM7XFxuXFxuLyoqXFxuICogR2V0IGEgcmFuZG9tIGZsb2F0IGluIHRoZSBpbnRlcnZhbCBbbWluLCBtYXgpXFxuICogQHBhcmFtIHtudW1iZXJ9IG1pbiBJbmNsdXNpdmUgbWluXFxuICogQHBhcmFtIHtudW1iZXJ9IG1heCBFeGNsdXNpdmUgbWF4XFxuICogQHJldHVybiB7bnVtYmVyfSBBIHJhbmRvbSBmbG9hdCBpbiB0aGUgaW50ZXJ2YWwgW21pbiwgbWF4KVxcbiAqL1xcbmNvbnN0IHJhbmRvbUJldHdlZW4gPSAobWluLCBtYXgpID0+IE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSArIG1pbjtcXG5cXG4vKipcXG4gKiBHZXQgYSByYW5kb20gaW50ZWdlciBpbiB0aGUgaW50ZXJ2YWwgW21pbiwgbWF4XVxcbiAqIEBwYXJhbSB7bnVtYmVyfSBtaW4gSW5jbHVzaXZlIG1pblxcbiAqIEBwYXJhbSB7bnVtYmVyfSBtYXggSW5jbHVzaXZlIG1heFxcbiAqIEByZXR1cm4ge251bWJlcn0gQSByYW5kb20gaW50ZWdlciBpbiB0aGUgaW50ZXJ2YWwgW21pbiwgbWF4XVxcbiAqL1xcbmNvbnN0IHJhbmRvbUludEJldHdlZW4gPSAobWluLCBtYXgpID0+IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW47XFxuXFxuLyoqXFxuICogR2V0IGEgbm9ybWFsbHktZGlzdHJpYnV0ZWQgcmFuZG9tIG51bWJlclxcbiAqIEBwYXJhbSB7bnVtYmVyfSBbbXU9MC41XSBUaGUgbWVhbiB2YWx1ZVxcbiAqIEBwYXJhbSB7bnVtYmVyfSBbc2lnbWE9MC41XSBUaGUgc3RhbmRhcmQgZGV2aWF0aW9uXFxuICogQHBhcmFtIHtudW1iZXJ9IFtzYW1wbGVzPTJdIFRoZSBudW1iZXIgb2Ygc2FtcGxlc1xcbiAqIEByZXR1cm4ge251bWJlcn0gQSBub3JtYWxseS1kaXN0cmlidXRlZCByYW5kb20gbnVtYmVyXFxuICovXFxuY29uc3QgY2x0UmFuZG9tID0gKG11ID0gMC41LCBzaWdtYSA9IDAuNSwgc2FtcGxlcyA9IDIpID0+IHtcXG4gIGxldCB0b3RhbCA9IDA7XFxuICBmb3IgKGxldCBpID0gc2FtcGxlczsgaS0tOykge1xcbiAgICB0b3RhbCArPSBNYXRoLnJhbmRvbSgpO1xcbiAgfVxcbiAgcmV0dXJuIG11ICsgKHRvdGFsIC0gc2FtcGxlcyAvIDIpIC8gKHNhbXBsZXMgLyAyKSAqIHNpZ21hO1xcbn07XFxuXFxuLyoqXFxuICogR2V0IGEgbm9ybWFsbHktZGlzdHJpYnV0ZWQgcmFuZG9tIGludGVnZXIgaW4gdGhlIGludGVydmFsIFttaW4sIG1heF1cXG4gKiBAcGFyYW0ge251bWJlcn0gbWluIEluY2x1c2l2ZSBtaW5cXG4gKiBAcGFyYW0ge251bWJlcn0gbWF4IEluY2x1c2l2ZSBtYXhcXG4gKiBAcmV0dXJuIHtudW1iZXJ9IEEgbm9ybWFsbHktZGlzdHJpYnV0ZWQgcmFuZG9tIGludGVnZXJcXG4gKi9cXG5jb25zdCBjbHRSYW5kb21JbnQgPSAobWluLCBtYXgpID0+IE1hdGguZmxvb3IobWluICsgY2x0UmFuZG9tKDAuNSwgMC41LCAyKSAqIChtYXggKyAxIC0gbWluKSk7XFxuXFxuLyoqXFxuICogUmV0dXJuIGEgd2VpZ2h0ZWQgcmFuZG9tIGludGVnZXJcXG4gKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IHcgQW4gYXJyYXkgb2Ygd2VpZ2h0c1xcbiAqIEByZXR1cm4ge251bWJlcn0gQW4gaW5kZXggZnJvbSB3XFxuICovXFxuY29uc3Qgd2VpZ2h0ZWRSYW5kb20gPSB3ID0+IHtcXG4gIGxldCB0b3RhbCA9IHcucmVkdWNlKChhLCBpKSA9PiBhICsgaSwgMCksIG4gPSAwO1xcbiAgY29uc3QgciA9IE1hdGgucmFuZG9tKCkgKiB0b3RhbDtcXG4gIHdoaWxlICh0b3RhbCA+IHIpIHtcXG4gICAgdG90YWwgLT0gd1tuKytdO1xcbiAgfVxcbiAgcmV0dXJuIG4gLSAxO1xcbn07XFxuXFxuLyoqXFxuICogQW4gaW50ZXJwb2xhdGlvbiBmdW5jdGlvblxcbiAqIEBjYWxsYmFjayBpbnRlcnBvbGF0aW9uQ2FsbGJhY2tcXG4gKiBAcGFyYW0ge251bWJlcn0gYSBUaGUgbWluaW11bSBudW1iZXJcXG4gKiBAcGFyYW0ge251bWJlcn0gYiBUaGUgbWF4aW11bSBudW1iZXJcXG4gKiBAcGFyYW0ge251bWJlcn0gaSBUaGUgaW50ZXJwb2xhdGlvbiB2YWx1ZSwgc2hvdWxkIGJlIGluIHRoZSBpbnRlcnZhbCBbMCwgMV1cXG4gKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBpbnRlcnBvbGF0ZWQgdmFsdWUgaW4gdGhlIGludGVydmFsIFthLCBiXVxcbiAqL1xcblxcbi8qKlxcbiAqIFJldHVybiBhbiBpbnRlcnBvbGF0ZWQgdmFsdWUgZnJvbSBhbiBhcnJheVxcbiAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0gYSBBbiBhcnJheSBvZiB2YWx1ZXMgaW50ZXJwb2xhdGVcXG4gKiBAcGFyYW0ge251bWJlcn0gaSBBIG51bWJlciBpbiB0aGUgaW50ZXJ2YWwgWzAsIDFdXFxuICogQHBhcmFtIHtpbnRlcnBvbGF0aW9uQ2FsbGJhY2t9IFtmPU1hdGgubGVycF0gVGhlIGludGVycG9sYXRpb24gZnVuY3Rpb24gdG8gdXNlXFxuICogQHJldHVybiB7bnVtYmVyfSBBbiBpbnRlcnBvbGF0ZWQgdmFsdWUgaW4gdGhlIGludGVydmFsIFttaW4oYSksIG1heChhKV1cXG4gKi9cXG5jb25zdCBsZXJwQXJyYXkgPSAoYSwgaSwgZiA9IGxlcnApID0+IHtcXG4gIGNvbnN0IHMgPSBpICogKGEubGVuZ3RoIC0gMSk7XFxuICBjb25zdCBwID0gY2xhbXAoTWF0aC50cnVuYyhzKSwgMCwgYS5sZW5ndGggLSAxKTtcXG4gIHJldHVybiBmKGFbcF0gfHwgMCwgYVtwICsgMV0gfHwgMCwgZnJhYyhzKSk7XFxufTtcXG5cXG4vKipcXG4gKiBHZXQgdGhlIGRvdCBwcm9kdWN0IG9mIHR3byB2ZWN0b3JzXFxuICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSBhIFZlY3RvciBhXFxuICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSBiIFZlY3RvciBiXFxuICogQHJldHVybiB7bnVtYmVyfSBhIOKImSBiXFxuICovXFxuY29uc3QgZG90ID0gKGEsIGIpID0+IGEucmVkdWNlKChuLCB2LCBpKSA9PiBuICsgdiAqIGJbaV0sIDApO1xcblxcbi8qKlxcbiAqIEdldCB0aGUgZmFjdG9yaWFsIG9mIGEgbnVtYmVyXFxuICogQHBhcmFtIHtudW1iZXJ9IGFcXG4gKiBAcmV0dXJuIHtudW1iZXJ9IGEhXFxuICovXFxuY29uc3QgZmFjdG9yaWFsID0gYSA9PiB7XFxuICBsZXQgcmVzdWx0ID0gMTtcXG4gIGZvciAobGV0IGkgPSAyOyBpIDw9IGE7IGkrKykge1xcbiAgICByZXN1bHQgKj0gaTtcXG4gIH1cXG4gIHJldHVybiByZXN1bHQ7XFxufTtcXG5cXG4vKipcXG4gKiBHZXQgdGhlIG51bWJlciBvZiBwZXJtdXRhdGlvbnMgb2YgciBlbGVtZW50cyBmcm9tIGEgc2V0IG9mIG4gZWxlbWVudHNcXG4gKiBAcGFyYW0ge251bWJlcn0gblxcbiAqIEBwYXJhbSB7bnVtYmVyfSByXFxuICogQHJldHVybiB7bnVtYmVyfSBuUHJcXG4gKi9cXG5jb25zdCBwZXJtdXRhdGlvbiA9IChuLCByKSA9PiBmYWN0b3JpYWwobikgLyBmYWN0b3JpYWwobiAtIHIpO1xcblxcbi8qKlxcbiAqIEdldCB0aGUgbnVtYmVyIG9mIGNvbWJpbmF0aW9ucyBvZiByIGVsZW1lbnRzIGZyb20gYSBzZXQgb2YgbiBlbGVtZW50c1xcbiAqIEBwYXJhbSB7bnVtYmVyfSBuXFxuICogQHBhcmFtIHtudW1iZXJ9IHJcXG4gKiBAcmV0dXJuIHtudW1iZXJ9IG5DclxcbiAqL1xcbmNvbnN0IGNvbWJpbmF0aW9uID0gKG4sIHIpID0+IGZhY3RvcmlhbChuKSAvIChmYWN0b3JpYWwocikgKiBmYWN0b3JpYWwobiAtIHIpKTtcXG5cXG4vKipcXG4gKiBBIGZ1bmN0aW9uIGZvciBnZW5lcmF0aW5nIGFycmF5IHZhbHVlc1xcbiAqIEBjYWxsYmFjayB0aW1lc0NhbGxiYWNrXFxuICogQHBhcmFtIHtudW1iZXJ9IGkgVGhlIGFycmF5IGluZGV4XFxuICogQHJldHVybiB7Kn0gVGhlIGFycmF5IHZhbHVlXFxuICovXFxuXFxuLyoqXFxuICogUmV0dXJuIGEgbmV3IGFycmF5IHdpdGggbGVuZ3RoIG4gYnkgY2FsbGluZyBmdW5jdGlvbiBmKGkpIG9uIGVhY2ggZWxlbWVudFxcbiAqIEBwYXJhbSB7dGltZXNDYWxsYmFja30gZlxcbiAqIEBwYXJhbSB7bnVtYmVyfSBuIFRoZSBzaXplIG9mIHRoZSBhcnJheVxcbiAqIEByZXR1cm4ge0FycmF5PCo+fVxcbiAqL1xcbmNvbnN0IHRpbWVzID0gKGYsIG4pID0+IEFycmF5KG4pLmZpbGwoMCkubWFwKChfLCBpKSA9PiBmKGkpKTtcXG5cXG4vKipcXG4gKiBSZXR1cm4gYW4gYXJyYXkgY29udGFpbmluZyBudW1iZXJzIDAtPihuIC0gMSlcXG4gKiBAcGFyYW0ge251bWJlcn0gbiBUaGUgc2l6ZSBvZiB0aGUgYXJyYXlcXG4gKiBAcmV0dXJuIHtBcnJheTxudW1iZXI+fSBBbiBhcnJheSBvZiBpbnRlZ2VycyAwLT4obiAtIDEpXFxuICovXFxuY29uc3QgcmFuZ2UgPSBuID0+IHRpbWVzKGkgPT4gaSwgbik7XFxuXFxuLyoqXFxuICogWmlwIDIgYXJyYXlzIHRvZ2V0aGVyLCBpLmUuIChbMSwgMiwgM10sIFthLCBiLCBjXSkgPT4gW1sxLCBhXSwgWzIsIGJdLCBbMywgY11dXFxuICogQHBhcmFtIHtBcnJheTwqPn0gYVxcbiAqIEBwYXJhbSB7QXJyYXk8Kj59IGJcXG4gKiBAcmV0dXJuIHtBcnJheTxBcnJheTwqPj59XFxuICovXFxuY29uc3QgemlwID0gKGEsIGIpID0+IGEubWFwKChrLCBpKSA9PiBbaywgYltpXV0pO1xcblxcbi8qKlxcbiAqIFJldHVybiBhcnJheVtpXSB3aXRoIHBvc2l0aXZlIGFuZCBuZWdhdGl2ZSB3cmFwcGluZ1xcbiAqIEBwYXJhbSB7QXJyYXk8Kj59IGFcXG4gKiBAcGFyYW0ge251bWJlcn0gaSBUaGUgcG9zaXRpdmVseS9uZWdhdGl2ZWx5IHdyYXBwZWQgYXJyYXkgaW5kZXhcXG4gKiBAcmV0dXJuIHsqfSBBbiBlbGVtZW50IGZyb20gdGhlIGFycmF5XFxuICovXFxuY29uc3QgYXQgPSAoYSwgaSkgPT4gYVtpIDwgMCA/IGEubGVuZ3RoIC0gKE1hdGguYWJzKGkgKyAxKSAlIGEubGVuZ3RoKSAtIDEgOiBpICUgYS5sZW5ndGhdO1xcblxcbi8qKlxcbiAqIENob3AgYW4gYXJyYXkgaW50byBjaHVua3Mgb2Ygc2l6ZSBuXFxuICogQHBhcmFtIHtBcnJheTwqPn0gYVxcbiAqIEBwYXJhbSB7bnVtYmVyfSBuIFRoZSBjaHVuayBzaXplXFxuICogQHJldHVybiB7QXJyYXk8QXJyYXk8Kj4+fSBBbiBhcnJheSBvZiBhcnJheSBjaHVua3NcXG4gKi9cXG5jb25zdCBjaHVuayA9IChhLCBuKSA9PiB0aW1lcyhpID0+IGEuc2xpY2UoaSAqIG4sIGkgKiBuICsgbiksIE1hdGguY2VpbChhLmxlbmd0aCAvIG4pKTtcXG5cXG4vKipcXG4gKiBSYW5kb21seSBzaHVmZmxlIGEgc2hhbGxvdyBjb3B5IG9mIGFuIGFycmF5XFxuICogQHBhcmFtIHtBcnJheTwqPn0gYVxcbiAqIEByZXR1cm4ge0FycmF5PCo+fSBUaGUgc2h1ZmZsZWQgYXJyYXlcXG4gKi9cXG5jb25zdCBzaHVmZmxlID0gYSA9PiBhLnNsaWNlKCkuc29ydCgoKSA9PiBNYXRoLnJhbmRvbSgpIC0gMC41KTtcXG5cXG5pZiAodHJ1ZSkge1xcbiAgbW9kdWxlLmV4cG9ydHMgPSB7XFxuICAgIGZsb2F0RXF1YWxzLFxcbiAgICBjbGFtcCxcXG4gICAgZnJhYyxcXG4gICAgbGVycCxcXG4gICAgdW5sZXJwLFxcbiAgICBibGVycCxcXG4gICAgcmVtYXAsXFxuICAgIHNtb290aHN0ZXAsXFxuICAgIHJhZGlhbnMsXFxuICAgIGRlZ3JlZXMsXFxuICAgIHJhbmRvbUJldHdlZW4sXFxuICAgIHJhbmRvbUludEJldHdlZW4sXFxuICAgIGNsdFJhbmRvbSxcXG4gICAgY2x0UmFuZG9tSW50LFxcbiAgICB3ZWlnaHRlZFJhbmRvbSxcXG4gICAgbGVycEFycmF5LFxcbiAgICBkb3QsXFxuICAgIGZhY3RvcmlhbCxcXG4gICAgcGVybXV0YXRpb24sXFxuICAgIGNvbWJpbmF0aW9uLFxcbiAgICB0aW1lcyxcXG4gICAgcmFuZ2UsXFxuICAgIHppcCxcXG4gICAgYXQsXFxuICAgIGNodW5rLFxcbiAgICBzaHVmZmxlLFxcbiAgfTtcXG59XFxuXFxuXFxuLy8jIHNvdXJjZVVSTD13ZWJwYWNrOi8vQGJhc2VtZW50dW5pdmVyc2UvaW5wdXQtbWFuYWdlci8uL25vZGVfbW9kdWxlcy9AYmFzZW1lbnR1bml2ZXJzZS91dGlscy91dGlscy5qcz9cIik7XG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL0BiYXNlbWVudHVuaXZlcnNlL3ZlYy92ZWMuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9AYmFzZW1lbnR1bml2ZXJzZS92ZWMvdmVjLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqLyAoKG1vZHVsZSwgX191bnVzZWRfd2VicGFja19leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSA9PiB7XG5cbmV2YWwoXCJjb25zdCB7IHRpbWVzLCBjaHVuaywgZG90IH0gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBAYmFzZW1lbnR1bml2ZXJzZS91dGlscyAqLyBcXFwiLi9ub2RlX21vZHVsZXMvQGJhc2VtZW50dW5pdmVyc2UvdXRpbHMvdXRpbHMuanNcXFwiKTtcXG5cXG4vKipcXG4gKiBAb3ZlcnZpZXcgQSBsaWJyYXJ5IG9mIHVzZWZ1bCBmdW5jdGlvbnNcXG4gKiBAYXV0aG9yIEdvcmRvbiBMYXJyaWdhblxcbiAqL1xcblxcbi8qKlxcbiAqIEEgMmQgdmVjdG9yXFxuICogQHR5cGVkZWYge09iamVjdH0gdmVjXFxuICogQHByb3BlcnR5IHtudW1iZXJ9IHggVGhlIHggY29tcG9uZW50IG9mIHRoZSB2ZWN0b3JcXG4gKiBAcHJvcGVydHkge251bWJlcn0geSBUaGUgeSBjb21wb25lbnQgb2YgdGhlIHZlY3RvclxcbiAqL1xcblxcbi8qKlxcbiAqIENyZWF0ZSBhIG5ldyB2ZWN0b3JcXG4gKiBAcGFyYW0ge251bWJlcnx2ZWN9IFt4XSBUaGUgeCBjb21wb25lbnQgb2YgdGhlIHZlY3Rvciwgb3IgYSB2ZWN0b3IgdG8gY29weVxcbiAqIEBwYXJhbSB7bnVtYmVyfSBbeV0gVGhlIHkgY29tcG9uZW50IG9mIHRoZSB2ZWN0b3JcXG4gKiBAcmV0dXJuIHt2ZWN9IEEgbmV3IHZlY3RvclxcbiAqIEBleGFtcGxlIDxjYXB0aW9uPlZhcmlvdXMgd2F5cyB0byBpbml0aWFsaXNlIGEgdmVjdG9yPC9jYXB0aW9uPlxcbiAqIGxldCBhID0gdmVjKDMsIDIpOyAgLy8gKDMsIDIpXFxuICogbGV0IGIgPSB2ZWMoNCk7ICAgICAvLyAoNCwgNClcXG4gKiBsZXQgYyA9IHZlYyhhKTsgICAgIC8vICgzLCAyKVxcbiAqIGxldCBkID0gdmVjKCk7ICAgICAgLy8gKDAsIDApXFxuICovXFxuY29uc3QgdmVjID0gKHgsIHkpID0+ICgheCAmJiAheSA/XFxuICB7IHg6IDAsIHk6IDAgfSA6ICh0eXBlb2YgeCA9PT0gJ29iamVjdCcgP1xcbiAgICB7IHg6IHgueCB8fCAwLCB5OiB4LnkgfHwgMCB9IDogKHkgPT09IG51bGwgfHwgeSA9PT0gdW5kZWZpbmVkID9cXG4gICAgICB7IHg6IHgsIHk6IHggfSA6IHsgeDogeCwgeTogeSB9KVxcbiAgKVxcbik7XFxuXFxuLyoqXFxuICogR2V0IHRoZSBjb21wb25lbnRzIG9mIGEgdmVjdG9yIGFzIGFuIGFycmF5XFxuICogQHBhcmFtIHt2ZWN9IGEgVGhlIHZlY3RvciB0byBnZXQgY29tcG9uZW50cyBmcm9tXFxuICogQHJldHVybiB7QXJyYXk8bnVtYmVyPn0gVGhlIHZlY3RvciBjb21wb25lbnRzIGFzIGFuIGFycmF5XFxuICovXFxudmVjLmNvbXBvbmVudHMgPSBhID0+IFthLngsIGEueV07XFxuXFxuLyoqXFxuICogUmV0dXJuIGEgdW5pdCB2ZWN0b3IgKDEsIDApXFxuICogQHJldHVybiB7dmVjfSBBIHVuaXQgdmVjdG9yICgxLCAwKVxcbiAqL1xcbnZlYy51eCA9ICgpID0+IHZlYygxLCAwKTtcXG5cXG4vKipcXG4gKiBSZXR1cm4gYSB1bml0IHZlY3RvciAoMCwgMSlcXG4gKiBAcmV0dXJuIHt2ZWN9IEEgdW5pdCB2ZWN0b3IgKDAsIDEpXFxuICovXFxudmVjLnV5ID0gKCkgPT4gdmVjKDAsIDEpO1xcblxcbi8qKlxcbiAqIEFkZCB2ZWN0b3JzXFxuICogQHBhcmFtIHt2ZWN9IGEgVmVjdG9yIGFcXG4gKiBAcGFyYW0ge3ZlY30gYiBWZWN0b3IgYlxcbiAqIEByZXR1cm4ge3ZlY30gYSArIGJcXG4gKi9cXG52ZWMuYWRkID0gKGEsIGIpID0+ICh7IHg6IGEueCArIGIueCwgeTogYS55ICsgYi55IH0pO1xcblxcbi8qKlxcbiAqIFNjYWxlIGEgdmVjdG9yXFxuICogQHBhcmFtIHt2ZWN9IGEgVmVjdG9yIGFcXG4gKiBAcGFyYW0ge251bWJlcn0gYiBTY2FsYXIgYlxcbiAqIEByZXR1cm4ge3ZlY30gYSAqIGJcXG4gKi9cXG52ZWMubXVsID0gKGEsIGIpID0+ICh7IHg6IGEueCAqIGIsIHk6IGEueSAqIGIgfSk7XFxuXFxuLyoqXFxuICogU3VidHJhY3QgdmVjdG9yc1xcbiAqIEBwYXJhbSB7dmVjfSBhIFZlY3RvciBhXFxuICogQHBhcmFtIHt2ZWN9IGIgVmVjdG9yIGJcXG4gKiBAcmV0dXJuIHt2ZWN9IGEgLSBiXFxuICovXFxudmVjLnN1YiA9IChhLCBiKSA9PiAoeyB4OiBhLnggLSBiLngsIHk6IGEueSAtIGIueSB9KTtcXG5cXG4vKipcXG4gKiBHZXQgdGhlIGxlbmd0aCBvZiBhIHZlY3RvclxcbiAqIEBwYXJhbSB7dmVjfSBhIFZlY3RvciBhXFxuICogQHJldHVybiB7bnVtYmVyfSB8YXxcXG4gKi9cXG52ZWMubGVuID0gYSA9PiBNYXRoLnNxcnQoYS54ICogYS54ICsgYS55ICogYS55KTtcXG5cXG4vKipcXG4gKiBHZXQgdGhlIGxlbmd0aCBvZiBhIHZlY3RvciB1c2luZyB0YXhpY2FiIGdlb21ldHJ5XFxuICogQHBhcmFtIHt2ZWN9IGEgVmVjdG9yIGFcXG4gKiBAcmV0dXJuIHtudW1iZXJ9IHxhfFxcbiAqL1xcbnZlYy5tYW5oYXR0YW4gPSBhID0+IE1hdGguYWJzKGEueCkgKyBNYXRoLmFicyhhLnkpO1xcblxcbi8qKlxcbiAqIE5vcm1hbGlzZSBhIHZlY3RvclxcbiAqIEBwYXJhbSB7dmVjfSBhIFRoZSB2ZWN0b3IgdG8gbm9ybWFsaXNlXFxuICogQHJldHVybiB7dmVjfSBeYVxcbiAqL1xcbnZlYy5ub3IgPSBhID0+IHtcXG4gIGxldCBsZW4gPSB2ZWMubGVuKGEpO1xcbiAgcmV0dXJuIGxlbiA/IHsgeDogYS54IC8gbGVuLCB5OiBhLnkgLyBsZW4gfSA6IHZlYygpO1xcbn07XFxuXFxuLyoqXFxuICogR2V0IGEgZG90IHByb2R1Y3Qgb2YgdmVjdG9yc1xcbiAqIEBwYXJhbSB7dmVjfSBhIFZlY3RvciBhXFxuICogQHBhcmFtIHt2ZWN9IGIgVmVjdG9yIGJcXG4gKiBAcmV0dXJuIHtudW1iZXJ9IGEg4oiZIGJcXG4gKi9cXG52ZWMuZG90ID0gKGEsIGIpID0+IGEueCAqIGIueCArIGEueSAqIGIueTtcXG5cXG4vKipcXG4gKiBSb3RhdGUgYSB2ZWN0b3IgYnkgciByYWRpYW5zXFxuICogQHBhcmFtIHt2ZWN9IGEgVGhlIHZlY3RvciB0byByb3RhdGVcXG4gKiBAcGFyYW0ge251bWJlcn0gciBUaGUgYW5nbGUgdG8gcm90YXRlIGJ5LCBtZWFzdXJlZCBpbiByYWRpYW5zXFxuICogQHJldHVybiB7dmVjfSBBIHJvdGF0ZWQgdmVjdG9yXFxuICovXFxudmVjLnJvdCA9IChhLCByKSA9PiB7XFxuICBsZXQgcyA9IE1hdGguc2luKHIpLFxcbiAgICBjID0gTWF0aC5jb3Mocik7XFxuICByZXR1cm4geyB4OiBjICogYS54IC0gcyAqIGEueSwgeTogcyAqIGEueCArIGMgKiBhLnkgfTtcXG59XFxuXFxuLyoqXFxuICogQ2hlY2sgaWYgdHdvIHZlY3RvcnMgYXJlIGVxdWFsXFxuICogQHBhcmFtIHt2ZWN9IGEgVmVjdG9yIGFcXG4gKiBAcGFyYW0ge3ZlY30gYiBWZWN0b3IgYlxcbiAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgdmVjdG9ycyBhIGFuZCBiIGFyZSBlcXVhbCwgZmFsc2Ugb3RoZXJ3aXNlXFxuICovXFxudmVjLmVxID0gKGEsIGIpID0+IGEueCA9PT0gYi54ICYmIGEueSA9PT0gYi55O1xcblxcbi8qKlxcbiAqIEdldCB0aGUgYW5nbGUgb2YgYSB2ZWN0b3JcXG4gKiBAcGFyYW0ge3ZlY30gYSBWZWN0b3IgYVxcbiAqIEByZXR1cm4ge251bWJlcn0gVGhlIGFuZ2xlIG9mIHZlY3RvciBhIGluIHJhZGlhbnNcXG4gKi9cXG52ZWMucmFkID0gYSA9PiBNYXRoLmF0YW4yKGEueSwgYS54KTtcXG5cXG4vKipcXG4gKiBDb3B5IGEgdmVjdG9yXFxuICogQHBhcmFtIHt2ZWN9IGEgVGhlIHZlY3RvciB0byBjb3B5XFxuICogQHJldHVybiB7dmVjfSBBIGNvcHkgb2YgdmVjdG9yIGFcXG4gKi9cXG52ZWMuY3B5ID0gYSA9PiB2ZWMoYSk7XFxuXFxuLyoqXFxuICogQSBmdW5jdGlvbiB0byBjYWxsIG9uIGVhY2ggY29tcG9uZW50IG9mIGEgdmVjdG9yXFxuICogQGNhbGxiYWNrIHZlY3Rvck1hcENhbGxiYWNrXFxuICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlIFRoZSBjb21wb25lbnQgdmFsdWVcXG4gKiBAcGFyYW0geyd4JyB8ICd5J30gbGFiZWwgVGhlIGNvbXBvbmVudCBsYWJlbCAoeCBvciB5KVxcbiAqIEByZXR1cm4ge251bWJlcn0gVGhlIG1hcHBlZCBjb21wb25lbnRcXG4gKi9cXG5cXG4vKipcXG4gKiBDYWxsIGEgZnVuY3Rpb24gb24gZWFjaCBjb21wb25lbnQgb2YgYSB2ZWN0b3IgYW5kIGJ1aWxkIGEgbmV3IHZlY3RvciBmcm9tIHRoZSByZXN1bHRzXFxuICogQHBhcmFtIHt2ZWN9IGEgVmVjdG9yIGFcXG4gKiBAcGFyYW0ge3ZlY3Rvck1hcENhbGxiYWNrfSBmIFRoZSBmdW5jdGlvbiB0byBjYWxsIG9uIGVhY2ggY29tcG9uZW50IG9mIHRoZSB2ZWN0b3JcXG4gKiBAcmV0dXJuIHt2ZWN9IFZlY3RvciBhIG1hcHBlZCB0aHJvdWdoIGZcXG4gKi9cXG52ZWMubWFwID0gKGEsIGYpID0+ICh7IHg6IGYoYS54LCAneCcpLCB5OiBmKGEueSwgJ3knKSB9KTtcXG5cXG4vKipcXG4gKiBDb252ZXJ0IGEgdmVjdG9yIGludG8gYSBzdHJpbmdcXG4gKiBAcGFyYW0ge3ZlY30gYSBUaGUgdmVjdG9yIHRvIGNvbnZlcnRcXG4gKiBAcGFyYW0ge3N0cmluZ30gW3M9JywgJ10gVGhlIHNlcGFyYXRvciBzdHJpbmdcXG4gKiBAcmV0dXJuIHtzdHJpbmd9IEEgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSB2ZWN0b3JcXG4gKi9cXG52ZWMuc3RyID0gKGEsIHMgPSAnLCAnKSA9PiBgJHthLnh9JHtzfSR7YS55fWA7XFxuXFxuLyoqXFxuICogQSBtYXRyaXhcXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBtYXRcXG4gKiBAcHJvcGVydHkge251bWJlcn0gbSBUaGUgbnVtYmVyIG9mIHJvd3MgaW4gdGhlIG1hdHJpeFxcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBuIFRoZSBudW1iZXIgb2YgY29sdW1ucyBpbiB0aGUgbWF0cml4XFxuICogQHByb3BlcnR5IHtBcnJheTxudW1iZXI+fSBlbnRyaWVzIFRoZSBtYXRyaXggdmFsdWVzXFxuICovXFxuXFxuLyoqXFxuICogQ3JlYXRlIGEgbmV3IG1hdHJpeFxcbiAqIEBwYXJhbSB7bnVtYmVyfSBbbT00XSBUaGUgbnVtYmVyIG9mIHJvd3NcXG4gKiBAcGFyYW0ge251bWJlcn0gW249NF0gVGhlIG51bWJlciBvZiBjb2x1bW5zXFxuICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSBbZW50cmllcz1bXV0gTWF0cml4IHZhbHVlcyBpbiByZWFkaW5nIG9yZGVyXFxuICogQHJldHVybiB7bWF0fSBBIG5ldyBtYXRyaXhcXG4gKi9cXG5jb25zdCBtYXQgPSAobSA9IDQsIG4gPSA0LCBlbnRyaWVzID0gW10pID0+ICh7XFxuICBtLCBuLFxcbiAgZW50cmllczogZW50cmllcy5jb25jYXQoQXJyYXkobSAqIG4pLmZpbGwoMCkpLnNsaWNlKDAsIG0gKiBuKVxcbn0pO1xcblxcbi8qKlxcbiAqIEdldCBhbiBpZGVudGl0eSBtYXRyaXggb2Ygc2l6ZSBuXFxuICogQHBhcmFtIHtudW1iZXJ9IG4gVGhlIHNpemUgb2YgdGhlIG1hdHJpeFxcbiAqIEByZXR1cm4ge21hdH0gQW4gaWRlbnRpdHkgbWF0cml4XFxuICovXFxubWF0LmlkZW50aXR5ID0gbiA9PiBtYXQobiwgbiwgQXJyYXkobiAqIG4pLmZpbGwoMCkubWFwKCh2LCBpKSA9PiArKE1hdGguZmxvb3IoaSAvIG4pID09PSBpICUgbikpKTtcXG5cXG4vKipcXG4gKiBHZXQgYW4gZW50cnkgZnJvbSBhIG1hdHJpeFxcbiAqIEBwYXJhbSB7bWF0fSBhIE1hdHJpeCBhXFxuICogQHBhcmFtIHtudW1iZXJ9IGkgVGhlIHJvdyBvZmZzZXRcXG4gKiBAcGFyYW0ge251bWJlcn0gaiBUaGUgY29sdW1uIG9mZnNldFxcbiAqIEByZXR1cm4ge251bWJlcn0gVGhlIHZhbHVlIGF0IHBvc2l0aW9uIChpLCBqKSBpbiBtYXRyaXggYVxcbiAqL1xcbm1hdC5nZXQgPSAoYSwgaSwgaikgPT4gYS5lbnRyaWVzWyhqIC0gMSkgKyAoaSAtIDEpICogYS5uXTtcXG5cXG4vKipcXG4gKiBTZXQgYW4gZW50cnkgb2YgYSBtYXRyaXhcXG4gKiBAcGFyYW0ge21hdH0gYSBNYXRyaXggYVxcbiAqIEBwYXJhbSB7bnVtYmVyfSBpIFRoZSByb3cgb2Zmc2V0XFxuICogQHBhcmFtIHtudW1iZXJ9IGogVGhlIGNvbHVtbiBvZmZzZXRcXG4gKiBAcGFyYW0ge251bWJlcn0gdiBUaGUgdmFsdWUgdG8gc2V0IGluIG1hdHJpeCBhXFxuICovXFxubWF0LnNldCA9IChhLCBpLCBqLCB2KSA9PiB7IGEuZW50cmllc1soaiAtIDEpICsgKGkgLSAxKSAqIGEubl0gPSB2OyB9O1xcblxcbi8qKlxcbiAqIEdldCBhIHJvdyBmcm9tIGEgbWF0cml4IGFzIGFuIGFycmF5XFxuICogQHBhcmFtIHttYXR9IGEgTWF0cml4IGFcXG4gKiBAcGFyYW0ge251bWJlcn0gbSBUaGUgcm93IG9mZnNldFxcbiAqIEByZXR1cm4ge0FycmF5PG51bWJlcj59IFJvdyBtIGZyb20gbWF0cml4IGFcXG4gKi9cXG5tYXQucm93ID0gKGEsIG0pID0+IHtcXG4gIGNvbnN0IHMgPSAobSAtIDEpICogYS5uO1xcbiAgcmV0dXJuIGEuZW50cmllcy5zbGljZShzLCBzICsgYS5uKTtcXG59O1xcblxcbi8qKlxcbiAqIEdldCBhIGNvbHVtbiBmcm9tIGEgbWF0cml4IGFzIGFuIGFycmF5XFxuICogQHBhcmFtIHttYXR9IGEgTWF0cml4IGFcXG4gKiBAcGFyYW0ge251bWJlcn0gbiBUaGUgY29sdW1uIG9mZnNldFxcbiAqIEByZXR1cm4ge0FycmF5PG51bWJlcj59IENvbHVtbiBuIGZyb20gbWF0cml4IGFcXG4gKi9cXG5tYXQuY29sID0gKGEsIG4pID0+IHRpbWVzKGkgPT4gbWF0LmdldChhLCAoaSArIDEpLCBuKSwgYS5tKTtcXG5cXG4vKipcXG4gKiBBZGQgbWF0cmljZXNcXG4gKiBAcGFyYW0ge21hdH0gYSBNYXRyaXggYVxcbiAqIEBwYXJhbSB7bWF0fSBiIE1hdHJpeCBiXFxuICogQHJldHVybiB7bWF0fSBhICsgYlxcbiAqL1xcbm1hdC5hZGQgPSAoYSwgYikgPT4gYS5tID09PSBiLm0gJiYgYS5uID09PSBiLm4gJiYgbWF0Lm1hcChhLCAodiwgaSkgPT4gdiArIGIuZW50cmllc1tpXSk7XFxuXFxuLyoqXFxuICogU3VidHJhY3QgbWF0cmljZXNcXG4gKiBAcGFyYW0ge21hdH0gYSBNYXRyaXggYVxcbiAqIEBwYXJhbSB7bWF0fSBiIE1hdHJpeCBiXFxuICogQHJldHVybiB7bWF0fSBhIC0gYlxcbiAqL1xcbm1hdC5zdWIgPSAoYSwgYikgPT4gYS5tID09PSBiLm0gJiYgYS5uID09PSBiLm4gJiYgbWF0Lm1hcChhLCAodiwgaSkgPT4gdiAtIGIuZW50cmllc1tpXSk7XFxuXFxuLyoqXFxuICogTXVsdGlwbHkgbWF0cmljZXNcXG4gKiBAcGFyYW0ge21hdH0gYSBNYXRyaXggYVxcbiAqIEBwYXJhbSB7bWF0fSBiIE1hdHJpeCBiXFxuICogQHJldHVybiB7bWF0fGJvb2xlYW59IGFiIG9yIGZhbHNlIGlmIHRoZSBtYXRyaWNlcyBjYW5ub3QgYmUgbXVsdGlwbGllZFxcbiAqL1xcbm1hdC5tdWwgPSAoYSwgYikgPT4ge1xcbiAgaWYgKGEubiAhPT0gYi5tKSB7IHJldHVybiBmYWxzZTsgfVxcbiAgY29uc3QgcmVzdWx0ID0gbWF0KGEubSwgYi5uKTtcXG4gIGZvciAobGV0IGkgPSAxOyBpIDw9IGEubTsgaSsrKSB7XFxuICAgIGZvciAobGV0IGogPSAxOyBqIDw9IGIubjsgaisrKSB7XFxuICAgICAgbWF0LnNldChyZXN1bHQsIGksIGosIGRvdChtYXQucm93KGEsIGkpLCBtYXQuY29sKGIsIGopKSk7XFxuICAgIH1cXG4gIH1cXG4gIHJldHVybiByZXN1bHQ7XFxufTtcXG5cXG4vKipcXG4gKiBTY2FsZSBhIG1hdHJpeFxcbiAqIEBwYXJhbSB7bWF0fSBhIE1hdHJpeCBhXFxuICogQHBhcmFtIHtudW1iZXJ9IGIgU2NhbGFyIGJcXG4gKiBAcmV0dXJuIHttYXR9IGEgKiBiXFxuICovXFxubWF0LnNjYWxlID0gKGEsIGIpID0+IG1hdC5tYXAoYSwgdiA9PiB2ICogYik7XFxuXFxuLyoqXFxuICogVHJhbnNwb3NlIGEgbWF0cml4XFxuICogQHBhcmFtIHttYXR9IGEgVGhlIG1hdHJpeCB0byB0cmFuc3Bvc2VcXG4gKiBAcmV0dXJuIHttYXR9IEEgdHJhbnNwb3NlZCBtYXRyaXhcXG4gKi9cXG5tYXQudHJhbnMgPSBhID0+IG1hdChhLm4sIGEubSwgdGltZXMoaSA9PiBtYXQuY29sKGEsIChpICsgMSkpLCBhLm4pLmZsYXQoKSk7XFxuXFxuLyoqXFxuICogR2V0IHRoZSBtaW5vciBvZiBhIG1hdHJpeFxcbiAqIEBwYXJhbSB7bWF0fSBhIE1hdHJpeCBhXFxuICogQHBhcmFtIHtudW1iZXJ9IGkgVGhlIHJvdyBvZmZzZXRcXG4gKiBAcGFyYW0ge251bWJlcn0gaiBUaGUgY29sdW1uIG9mZnNldFxcbiAqIEByZXR1cm4ge21hdHxib29sZWFufSBUaGUgKGksIGopIG1pbm9yIG9mIG1hdHJpeCBhIG9yIGZhbHNlIGlmIHRoZSBtYXRyaXggaXMgbm90IHNxdWFyZVxcbiAqL1xcbm1hdC5taW5vciA9IChhLCBpLCBqKSA9PiB7XFxuICBpZiAoYS5tICE9PSBhLm4pIHsgcmV0dXJuIGZhbHNlOyB9XFxuICBjb25zdCBlbnRyaWVzID0gW107XFxuICBmb3IgKGxldCBpaSA9IDE7IGlpIDw9IGEubTsgaWkrKykge1xcbiAgICBpZiAoaWkgPT09IGkpIHsgY29udGludWU7IH1cXG4gICAgZm9yIChsZXQgamogPSAxOyBqaiA8PSBhLm47IGpqKyspIHtcXG4gICAgICBpZiAoamogPT09IGopIHsgY29udGludWU7IH1cXG4gICAgICBlbnRyaWVzLnB1c2gobWF0LmdldChhLCBpaSwgamopKTtcXG4gICAgfVxcbiAgfVxcbiAgcmV0dXJuIG1hdChhLm0gLSAxLCBhLm4gLSAxLCBlbnRyaWVzKTtcXG59O1xcblxcbi8qKlxcbiAqIEdldCB0aGUgZGV0ZXJtaW5hbnQgb2YgYSBtYXRyaXhcXG4gKiBAcGFyYW0ge21hdH0gYSBNYXRyaXggYVxcbiAqIEByZXR1cm4ge251bWJlcnxib29sZWFufSB8YXwgb3IgZmFsc2UgaWYgdGhlIG1hdHJpeCBpcyBub3Qgc3F1YXJlXFxuICovXFxubWF0LmRldCA9IGEgPT4ge1xcbiAgaWYgKGEubSAhPT0gYS5uKSB7IHJldHVybiBmYWxzZTsgfVxcbiAgaWYgKGEubSA9PT0gMSkge1xcbiAgICByZXR1cm4gYS5lbnRyaWVzWzBdO1xcbiAgfVxcbiAgaWYgKGEubSA9PT0gMikge1xcbiAgICByZXR1cm4gYS5lbnRyaWVzWzBdICogYS5lbnRyaWVzWzNdIC0gYS5lbnRyaWVzWzFdICogYS5lbnRyaWVzWzJdO1xcbiAgfVxcbiAgbGV0IHRvdGFsID0gMCwgc2lnbiA9IDE7XFxuICBmb3IgKGxldCBqID0gMTsgaiA8PSBhLm47IGorKykge1xcbiAgICB0b3RhbCArPSBzaWduICogYS5lbnRyaWVzW2ogLSAxXSAqIG1hdC5kZXQobWF0Lm1pbm9yKGEsIDEsIGopKTtcXG4gICAgc2lnbiAqPSAtMTtcXG4gIH1cXG4gIHJldHVybiB0b3RhbDtcXG59O1xcblxcbi8qKlxcbiAqIE5vcm1hbGlzZSBhIG1hdHJpeFxcbiAqIEBwYXJhbSB7bWF0fSBhIFRoZSBtYXRyaXggdG8gbm9ybWFsaXNlXFxuICogQHJldHVybiB7bWF0fGJvb2xlYW59IF5hIG9yIGZhbHNlIGlmIHRoZSBtYXRyaXggaXMgbm90IHNxdWFyZVxcbiAqL1xcbm1hdC5ub3IgPSBhID0+IHtcXG4gIGlmIChhLm0gIT09IGEubikgeyByZXR1cm4gZmFsc2U7IH1cXG4gIGNvbnN0IGQgPSBtYXQuZGV0KGEpO1xcbiAgcmV0dXJuIG1hdC5tYXAoYSwgaSA9PiBpICogZCk7XFxufTtcXG5cXG4vKipcXG4gKiBHZXQgdGhlIGFkanVnYXRlIG9mIGEgbWF0cml4XFxuICogQHBhcmFtIHttYXR9IGEgVGhlIG1hdHJpeCBmcm9tIHdoaWNoIHRvIGdldCB0aGUgYWRqdWdhdGVcXG4gKiBAcmV0dXJuIHttYXR9IFRoZSBhZGp1Z2F0ZSBvZiBhXFxuICovXFxubWF0LmFkaiA9IGEgPT4ge1xcbiAgY29uc3QgbWlub3JzID0gbWF0KGEubSwgYS5uKTtcXG4gIGZvciAobGV0IGkgPSAxOyBpIDw9IGEubTsgaSsrKSB7XFxuICAgIGZvciAobGV0IGogPSAxOyBqIDw9IGEubjsgaisrKSB7XFxuICAgICAgbWF0LnNldChtaW5vcnMsIGksIGosIG1hdC5kZXQobWF0Lm1pbm9yKGEsIGksIGopKSk7XFxuICAgIH1cXG4gIH1cXG4gIGNvbnN0IGNvZmFjdG9ycyA9IG1hdC5tYXAobWlub3JzLCAodiwgaSkgPT4gdiAqIChpICUgMiA/IC0xIDogMSkpO1xcbiAgcmV0dXJuIG1hdC50cmFucyhjb2ZhY3RvcnMpO1xcbn07XFxuXFxuLyoqXFxuICogR2V0IHRoZSBpbnZlcnNlIG9mIGEgbWF0cml4XFxuICogQHBhcmFtIHttYXR9IGEgVGhlIG1hdHJpeCB0byBpbnZlcnRcXG4gKiBAcmV0dXJuIHttYXR8Ym9vbGVhbn0gYV4tMSBvciBmYWxzZSBpZiB0aGUgbWF0cml4IGhhcyBubyBpbnZlcnNlXFxuICovXFxubWF0LmludiA9IGEgPT4ge1xcbiAgaWYgKGEubSAhPT0gYS5uKSB7IHJldHVybiBmYWxzZTsgfVxcbiAgY29uc3QgZCA9IG1hdC5kZXQoYSk7XFxuICBpZiAoZCA9PT0gMCkgeyByZXR1cm4gZmFsc2U7IH1cXG4gIHJldHVybiBtYXQuc2NhbGUobWF0LmFkaihhKSwgMSAvIGQpO1xcbn07XFxuXFxuLyoqXFxuICogQ2hlY2sgaWYgdHdvIG1hdHJpY2VzIGFyZSBlcXVhbFxcbiAqIEBwYXJhbSB7bWF0fSBhIE1hdHJpeCBhXFxuICogQHBhcmFtIHttYXR9IGIgTWF0cml4IGJcXG4gKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIG1hdHJpY2VzIGEgYW5kIGIgYXJlIGlkZW50aWNhbCwgZmFsc2Ugb3RoZXJ3aXNlXFxuICovXFxubWF0LmVxID0gKGEsIGIpID0+IGEubSA9PT0gYi5tICYmIGEubiA9PT0gYi5uICYmIG1hdC5zdHIoYSkgPT09IG1hdC5zdHIoYik7XFxuXFxuLyoqXFxuICogQ29weSBhIG1hdHJpeFxcbiAqIEBwYXJhbSB7bWF0fSBhIFRoZSBtYXRyaXggdG8gY29weVxcbiAqIEByZXR1cm4ge21hdH0gQSBjb3B5IG9mIG1hdHJpeCBhXFxuICovXFxubWF0LmNweSA9IGEgPT4gbWF0KGEubSwgYS5uLCBbLi4uYS5lbnRyaWVzXSk7XFxuXFxuLyoqXFxuICogQSBmdW5jdGlvbiB0byBjYWxsIG9uIGVhY2ggZW50cnkgb2YgYSBtYXRyaXhcXG4gKiBAY2FsbGJhY2sgbWF0cml4TWFwQ2FsbGJhY2tcXG4gKiBAcGFyYW0ge251bWJlcn0gdmFsdWUgVGhlIGVudHJ5IHZhbHVlXFxuICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IFRoZSBlbnRyeSBpbmRleFxcbiAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0gZW50cmllcyBUaGUgYXJyYXkgb2YgbWF0cml4IGVudHJpZXNcXG4gKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBtYXBwZWQgZW50cnlcXG4gKi9cXG5cXG4vKipcXG4gKiBDYWxsIGEgZnVuY3Rpb24gb24gZWFjaCBlbnRyeSBvZiBhIG1hdHJpeCBhbmQgYnVpbGQgYSBuZXcgbWF0cml4IGZyb20gdGhlIHJlc3VsdHNcXG4gKiBAcGFyYW0ge21hdH0gYSBNYXRyaXggYVxcbiAqIEBwYXJhbSB7bWF0cml4TWFwQ2FsbGJhY2t9IGYgVGhlIGZ1bmN0aW9uIHRvIGNhbGwgb24gZWFjaCBlbnRyeSBvZiB0aGUgbWF0cml4XFxuICogQHJldHVybiB7bWF0fSBNYXRyaXggYSBtYXBwZWQgdGhyb3VnaCBmXFxuICovXFxubWF0Lm1hcCA9IChhLCBmKSA9PiBtYXQoYS5tLCBhLm4sIGEuZW50cmllcy5tYXAoZikpO1xcblxcbi8qKlxcbiAqIENvbnZlcnQgYSBtYXRyaXggaW50byBhIHN0cmluZ1xcbiAqIEBwYXJhbSB7bWF0fSBhIFRoZSBtYXRyaXggdG8gY29udmVydFxcbiAqIEBwYXJhbSB7c3RyaW5nfSBbbXM9JywgJ10gVGhlIHNlcGFyYXRvciBzdHJpbmcgZm9yIGNvbHVtbnNcXG4gKiBAcGFyYW0ge3N0cmluZ30gW25zPSdcXFxcbiddIFRoZSBzZXBhcmF0b3Igc3RyaW5nIGZvciByb3dzXFxuICogQHJldHVybiB7c3RyaW5nfSBBIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgbWF0cml4XFxuICovXFxubWF0LnN0ciA9IChhLCBtcyA9ICcsICcsIG5zID0gJ1xcXFxuJykgPT4gY2h1bmsoYS5lbnRyaWVzLCBhLm4pLm1hcChyID0+IHIuam9pbihtcykpLmpvaW4obnMpO1xcblxcbmlmICh0cnVlKSB7XFxuICBtb2R1bGUuZXhwb3J0cyA9IHsgdmVjLCBtYXQgfTtcXG59XFxuXFxuXFxuLy8jIHNvdXJjZVVSTD13ZWJwYWNrOi8vQGJhc2VtZW50dW5pdmVyc2UvaW5wdXQtbWFuYWdlci8uL25vZGVfbW9kdWxlcy9AYmFzZW1lbnR1bml2ZXJzZS92ZWMvdmVjLmpzP1wiKTtcblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9pbmRleC50c1wiOlxuLyohKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vaW5kZXgudHMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKi9cbi8qKiovICgoX191bnVzZWRfd2VicGFja19tb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pID0+IHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5ldmFsKFwiXFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFxcXCJfX2VzTW9kdWxlXFxcIiwgKHsgdmFsdWU6IHRydWUgfSkpO1xcbmNvbnN0IHZlY18xID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgQGJhc2VtZW50dW5pdmVyc2UvdmVjICovIFxcXCIuL25vZGVfbW9kdWxlcy9AYmFzZW1lbnR1bml2ZXJzZS92ZWMvdmVjLmpzXFxcIik7XFxuY2xhc3MgSW5wdXRNYW5hZ2VyIHtcXG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xcbiAgICAgICAgdGhpcy5rZXlib2FyZFN0YXRlID0ge307XFxuICAgICAgICB0aGlzLnByZXZpb3VzS2V5Ym9hcmRTdGF0ZSA9IHt9O1xcbiAgICAgICAgdGhpcy5tb3VzZVN0YXRlID0geyBidXR0b246IGZhbHNlLCBwb3NpdGlvbjogKDAsIHZlY18xLnZlYykoKSwgd2hlZWw6IDAgfTtcXG4gICAgICAgIHRoaXMucHJldmlvdXNNb3VzZVN0YXRlID0geyBidXR0b246IGZhbHNlLCBwb3NpdGlvbjogKDAsIHZlY18xLnZlYykoKSwgd2hlZWw6IDAgfTtcXG4gICAgICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIElucHV0TWFuYWdlci5kZWZhdWx0T3B0aW9ucywgb3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgPyBvcHRpb25zIDoge30pO1xcbiAgICAgICAgLy8gU2V0IHVwIGV2ZW50IGhhbmRsZXJzXFxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLm1vdXNlKSB7XFxuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsICgpID0+IHtcXG4gICAgICAgICAgICAgICAgdGhpcy5tb3VzZVN0YXRlLmJ1dHRvbiA9IHRydWU7XFxuICAgICAgICAgICAgfSk7XFxuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCAoKSA9PiB7XFxuICAgICAgICAgICAgICAgIHRoaXMubW91c2VTdGF0ZS5idXR0b24gPSBmYWxzZTtcXG4gICAgICAgICAgICB9KTtcXG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsICgpID0+IHtcXG4gICAgICAgICAgICAgICAgdGhpcy5tb3VzZVN0YXRlLmJ1dHRvbiA9IHRydWU7XFxuICAgICAgICAgICAgfSk7XFxuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgKCkgPT4ge1xcbiAgICAgICAgICAgICAgICB0aGlzLm1vdXNlU3RhdGUuYnV0dG9uID0gZmFsc2U7XFxuICAgICAgICAgICAgfSk7XFxuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGUgPT4ge1xcbiAgICAgICAgICAgICAgICB0aGlzLm1vdXNlU3RhdGUucG9zaXRpb24ueCA9IGUub2Zmc2V0WDtcXG4gICAgICAgICAgICAgICAgdGhpcy5tb3VzZVN0YXRlLnBvc2l0aW9uLnkgPSBlLm9mZnNldFk7XFxuICAgICAgICAgICAgfSk7XFxuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5tb3VzZVdoZWVsKSB7XFxuICAgICAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd3aGVlbCcsIGUgPT4ge1xcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3VzZVN0YXRlLndoZWVsID0gZS5kZWx0YVkgPiAwID8gMSA6IC0xO1xcbiAgICAgICAgICAgICAgICB9KTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmtleWJvYXJkKSB7XFxuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBlID0+IHtcXG4gICAgICAgICAgICAgICAgdGhpcy5rZXlib2FyZFN0YXRlW2UuY29kZV0gPSB0cnVlO1xcbiAgICAgICAgICAgIH0pO1xcbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGUgPT4ge1xcbiAgICAgICAgICAgICAgICB0aGlzLmtleWJvYXJkU3RhdGVbZS5jb2RlXSA9IGZhbHNlO1xcbiAgICAgICAgICAgIH0pO1xcbiAgICAgICAgfVxcbiAgICB9XFxuICAgIC8qKlxcbiAgICAgKiBJbml0aWFsaXNlIHRoZSBpbnB1dCBtYW5hZ2VyIGZvciBtYW5hZ2luZyBtb3VzZSBhbmQga2V5Ym9hcmQgaW5wdXRcXG4gICAgICovXFxuICAgIHN0YXRpYyBpbml0aWFsaXNlKG9wdGlvbnMpIHtcXG4gICAgICAgIGlmIChJbnB1dE1hbmFnZXIuaW5zdGFuY2UgIT09IHVuZGVmaW5lZCkge1xcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW5wdXQgbWFuYWdlciBhbHJlYWR5IGluaXRpYWxpc2VkJyk7XFxuICAgICAgICB9XFxuICAgICAgICBJbnB1dE1hbmFnZXIuaW5zdGFuY2UgPSBuZXcgSW5wdXRNYW5hZ2VyKG9wdGlvbnMpO1xcbiAgICB9XFxuICAgIHN0YXRpYyBnZXRJbnN0YW5jZSgpIHtcXG4gICAgICAgIGlmIChJbnB1dE1hbmFnZXIuaW5zdGFuY2UgPT09IHVuZGVmaW5lZCkge1xcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW5wdXQgbWFuYWdlciBub3QgcHJvcGVybHkgaW5pdGlhbGlzZWQnKTtcXG4gICAgICAgIH1cXG4gICAgICAgIHJldHVybiBJbnB1dE1hbmFnZXIuaW5zdGFuY2U7XFxuICAgIH1cXG4gICAgLyoqXFxuICAgICAqIFVwZGF0ZSB0aGUgc3RhdGUgb2YgdGhlIGlucHV0IGRldmljZXNcXG4gICAgICovXFxuICAgIHN0YXRpYyB1cGRhdGUoKSB7XFxuICAgICAgICBjb25zdCBpbnN0YW5jZSA9IElucHV0TWFuYWdlci5nZXRJbnN0YW5jZSgpO1xcbiAgICAgICAgaW5zdGFuY2UucHJldmlvdXNLZXlib2FyZFN0YXRlID0gT2JqZWN0LmFzc2lnbih7fSwgaW5zdGFuY2Uua2V5Ym9hcmRTdGF0ZSk7XFxuICAgICAgICBpbnN0YW5jZS5wcmV2aW91c01vdXNlU3RhdGUgPSB7XFxuICAgICAgICAgICAgLi4uaW5zdGFuY2UubW91c2VTdGF0ZSxcXG4gICAgICAgICAgICBwb3NpdGlvbjogdmVjXzEudmVjLmNweShpbnN0YW5jZS5tb3VzZVN0YXRlLnBvc2l0aW9uKSxcXG4gICAgICAgIH07XFxuICAgICAgICBpbnN0YW5jZS5tb3VzZVN0YXRlLndoZWVsID0gMDtcXG4gICAgfVxcbiAgICAvKipcXG4gICAgICogQ2hlY2sgaWYgYSBrZXkgaXMgY3VycmVudGx5IHByZXNzZWQgZG93blxcbiAgICAgKi9cXG4gICAgc3RhdGljIGtleURvd24oY29kZSkge1xcbiAgICAgICAgY29uc3QgaW5zdGFuY2UgPSBJbnB1dE1hbmFnZXIuZ2V0SW5zdGFuY2UoKTtcXG4gICAgICAgIC8vIENoZWNrIGlmIGFueSBrZXkgaXMgZG93blxcbiAgICAgICAgaWYgKCFjb2RlKSB7XFxuICAgICAgICAgICAgZm9yIChjb25zdCBrIGluIGluc3RhbmNlLmtleWJvYXJkU3RhdGUpIHtcXG4gICAgICAgICAgICAgICAgaWYgKGluc3RhbmNlLmtleWJvYXJkU3RhdGVba10pIHtcXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcXG4gICAgICAgIH1cXG4gICAgICAgIHJldHVybiAhIWluc3RhbmNlLmtleWJvYXJkU3RhdGVbY29kZV07XFxuICAgIH1cXG4gICAgLyoqXFxuICAgICAqIENoZWNrIGlmIGEga2V5IGhhcyBiZWVuIHByZXNzZWQgc2luY2UgdGhlIGxhc3QgZnJhbWVcXG4gICAgICovXFxuICAgIHN0YXRpYyBrZXlQcmVzc2VkKGNvZGUpIHtcXG4gICAgICAgIGNvbnN0IGluc3RhbmNlID0gSW5wdXRNYW5hZ2VyLmdldEluc3RhbmNlKCk7XFxuICAgICAgICAvLyBDaGVjayBpZiBhbnkga2V5IHdhcyBwcmVzc2VkXFxuICAgICAgICBpZiAoIWNvZGUpIHtcXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGsgaW4gaW5zdGFuY2Uua2V5Ym9hcmRTdGF0ZSkge1xcbiAgICAgICAgICAgICAgICBpZiAoaW5zdGFuY2Uua2V5Ym9hcmRTdGF0ZVtrXSAmJlxcbiAgICAgICAgICAgICAgICAgICAgKCEoayBpbiBpbnN0YW5jZS5wcmV2aW91c0tleWJvYXJkU3RhdGUpIHx8XFxuICAgICAgICAgICAgICAgICAgICAgICAgIWluc3RhbmNlLnByZXZpb3VzS2V5Ym9hcmRTdGF0ZVtrXSkpIHtcXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcXG4gICAgICAgIH1cXG4gICAgICAgIHJldHVybiAhIWluc3RhbmNlLmtleWJvYXJkU3RhdGVbY29kZV0gJiYgIWluc3RhbmNlLnByZXZpb3VzS2V5Ym9hcmRTdGF0ZVtjb2RlXTtcXG4gICAgfVxcbiAgICAvKipcXG4gICAgICogQ2hlY2sgaWYgYSBrZXkgaGFzIGJlZW4gcmVsZWFzZWQgc2luY2UgdGhlIGxhc3QgZnJhbWVcXG4gICAgICovXFxuICAgIHN0YXRpYyBrZXlSZWxlYXNlZChjb2RlKSB7XFxuICAgICAgICBjb25zdCBpbnN0YW5jZSA9IElucHV0TWFuYWdlci5nZXRJbnN0YW5jZSgpO1xcbiAgICAgICAgLy8gQ2hlY2sgaWYgYW55IGtleSB3YXMgcmVsZWFzZWRcXG4gICAgICAgIGlmICghY29kZSkge1xcbiAgICAgICAgICAgIGZvciAoY29uc3QgayBpbiBpbnN0YW5jZS5rZXlib2FyZFN0YXRlKSB7XFxuICAgICAgICAgICAgICAgIGlmICghaW5zdGFuY2Uua2V5Ym9hcmRTdGF0ZVtrXSAmJlxcbiAgICAgICAgICAgICAgICAgICAgISFpbnN0YW5jZS5wcmV2aW91c0tleWJvYXJkU3RhdGVba10pIHtcXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcXG4gICAgICAgIH1cXG4gICAgICAgIHJldHVybiAhaW5zdGFuY2Uua2V5Ym9hcmRTdGF0ZVtjb2RlXSAmJiAhIWluc3RhbmNlLnByZXZpb3VzS2V5Ym9hcmRTdGF0ZVtjb2RlXTtcXG4gICAgfVxcbiAgICAvKipcXG4gICAgICogQ2hlY2sgaWYgYSBtb3VzZSBidXR0b24gaXMgY3VycmVudGx5IHByZXNzZWQgZG93blxcbiAgICAgKi9cXG4gICAgc3RhdGljIG1vdXNlRG93bigpIHtcXG4gICAgICAgIGNvbnN0IGluc3RhbmNlID0gSW5wdXRNYW5hZ2VyLmdldEluc3RhbmNlKCk7XFxuICAgICAgICByZXR1cm4gISFpbnN0YW5jZS5tb3VzZVN0YXRlLmJ1dHRvbjtcXG4gICAgfVxcbiAgICAvKipcXG4gICAgICogQ2hlY2sgaWYgYSBtb3VzZSBidXR0b24gaGFzIGJlZW4gcHJlc3NlZCBzaW5jZSB0aGUgbGFzdCBmcmFtZVxcbiAgICAgKi9cXG4gICAgc3RhdGljIG1vdXNlUHJlc3NlZCgpIHtcXG4gICAgICAgIGNvbnN0IGluc3RhbmNlID0gSW5wdXRNYW5hZ2VyLmdldEluc3RhbmNlKCk7XFxuICAgICAgICByZXR1cm4gISFpbnN0YW5jZS5tb3VzZVN0YXRlLmJ1dHRvbiAmJiAhaW5zdGFuY2UucHJldmlvdXNNb3VzZVN0YXRlLmJ1dHRvbjtcXG4gICAgfVxcbiAgICAvKipcXG4gICAgICogQ2hlY2sgaWYgYSBtb3VzZSBidXR0b24gaGFzIGJlZW4gcmVsZWFzZWQgc2luY2UgdGhlIGxhc3QgZnJhbWVcXG4gICAgICovXFxuICAgIHN0YXRpYyBtb3VzZVJlbGVhc2VkKCkge1xcbiAgICAgICAgY29uc3QgaW5zdGFuY2UgPSBJbnB1dE1hbmFnZXIuZ2V0SW5zdGFuY2UoKTtcXG4gICAgICAgIHJldHVybiAhaW5zdGFuY2UubW91c2VTdGF0ZS5idXR0b24gJiYgISFpbnN0YW5jZS5wcmV2aW91c01vdXNlU3RhdGUuYnV0dG9uO1xcbiAgICB9XFxuICAgIC8qKlxcbiAgICAgKiBDaGVjayBpZiB0aGUgbW91c2V3aGVlbCBpcyBzY3JvbGxpbmcgdXBcXG4gICAgICovXFxuICAgIHN0YXRpYyBtb3VzZVdoZWVsVXAoKSB7XFxuICAgICAgICBjb25zdCBpbnN0YW5jZSA9IElucHV0TWFuYWdlci5nZXRJbnN0YW5jZSgpO1xcbiAgICAgICAgcmV0dXJuIGluc3RhbmNlLm1vdXNlU3RhdGUud2hlZWwgPiAwO1xcbiAgICB9XFxuICAgIC8qKlxcbiAgICAgKiBDaGVjayBpZiB0aGUgbW91c2V3aGVlbCBpcyBzY3JvbGxpbmcgZG93blxcbiAgICAgKi9cXG4gICAgc3RhdGljIG1vdXNlV2hlZWxEb3duKCkge1xcbiAgICAgICAgY29uc3QgaW5zdGFuY2UgPSBJbnB1dE1hbmFnZXIuZ2V0SW5zdGFuY2UoKTtcXG4gICAgICAgIHJldHVybiBpbnN0YW5jZS5tb3VzZVN0YXRlLndoZWVsIDwgMDtcXG4gICAgfVxcbiAgICAvKipcXG4gICAgICogR2V0IHRoZSBjdXJyZW50IG1vdXNlIHBvc2l0aW9uIGluIHNjcmVlbi1zcGFjZVxcbiAgICAgKi9cXG4gICAgc3RhdGljIGdldCBtb3VzZVBvc2l0aW9uKCkge1xcbiAgICAgICAgY29uc3QgaW5zdGFuY2UgPSBJbnB1dE1hbmFnZXIuZ2V0SW5zdGFuY2UoKTtcXG4gICAgICAgIHJldHVybiBpbnN0YW5jZS5tb3VzZVN0YXRlLnBvc2l0aW9uO1xcbiAgICB9XFxufVxcbmV4cG9ydHNbXFxcImRlZmF1bHRcXFwiXSA9IElucHV0TWFuYWdlcjtcXG5JbnB1dE1hbmFnZXIuZGVmYXVsdE9wdGlvbnMgPSB7XFxuICAgIG1vdXNlOiB0cnVlLFxcbiAgICBtb3VzZVdoZWVsOiB0cnVlLFxcbiAgICBrZXlib2FyZDogdHJ1ZSxcXG59O1xcblxcblxcbi8vIyBzb3VyY2VVUkw9d2VicGFjazovL0BiYXNlbWVudHVuaXZlcnNlL2lucHV0LW1hbmFnZXIvLi9pbmRleC50cz9cIik7XG5cbi8qKiovIH0pXG5cbi8qKioqKiovIFx0fSk7XG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKi8gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdHZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcbi8qKioqKiovIFx0XG4vKioqKioqLyBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4vKioqKioqLyBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcbi8qKioqKiovIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbi8qKioqKiovIFx0XHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcbi8qKioqKiovIFx0XHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcbi8qKioqKiovIFx0XHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbi8qKioqKiovIFx0XHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcbi8qKioqKiovIFx0XHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcbi8qKioqKiovIFx0XHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG4vKioqKioqLyBcdFx0XHRleHBvcnRzOiB7fVxuLyoqKioqKi8gXHRcdH07XG4vKioqKioqLyBcdFxuLyoqKioqKi8gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuLyoqKioqKi8gXHRcdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuLyoqKioqKi8gXHRcbi8qKioqKiovIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuLyoqKioqKi8gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbi8qKioqKiovIFx0fVxuLyoqKioqKi8gXHRcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqLyBcdFxuLyoqKioqKi8gXHQvLyBzdGFydHVwXG4vKioqKioqLyBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLyoqKioqKi8gXHQvLyBUaGlzIGVudHJ5IG1vZHVsZSBjYW4ndCBiZSBpbmxpbmVkIGJlY2F1c2UgdGhlIGV2YWwgZGV2dG9vbCBpcyB1c2VkLlxuLyoqKioqKi8gXHR2YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL2luZGV4LnRzXCIpO1xuLyoqKioqKi8gXHRcbi8qKioqKiovIFx0cmV0dXJuIF9fd2VicGFja19leHBvcnRzX187XG4vKioqKioqLyB9KSgpXG47XG59KTsiLCIvKlxyXG5cclxuUGFyc2UgYSB2YWxpZCBDU1MgY29sb3Igc3RyaW5nIGludG8gYW4gb2JqZWN0IGxpa2U6IHsgciwgZywgYiwgYSB9XHJcblByb3BlcnRpZXMgd2lsbCBoYXZlIHRoZSBjb3JyZWN0IGludGVydmFsIGFuZCBwcmVjaXNpb24uXHJcblZhbGlkIGlucHV0IGV4YW1wbGVzOlxyXG5cclxucmVkXHJcbiNmMDBcclxuI2ZmMDAwMFxyXG4jZmYwMDAwZmZcclxucmdiKDI1NSwgMCwgMClcclxucmdiKDEwMCUsIDAlLCAwJSlcclxucmdiYSgyNTUsIDAsIDAsIDEpXHJcbnJnYmEoMTAwJSwgMCUsIDAlLCAxKVxyXG5oc2woMCwgMTAwJSwgNTAlKVxyXG5oc2xhKDAsIDEwMCUsIDUwJSwgMSlcclxuXHJcbiovXHJcbmNvbnN0IHBhcnNlQ29sb3IgPSAoZnVuY3Rpb24oKSB7XHJcblx0Y29uc3QgbmFtZXMgPSB7XHJcblx0XHRcImFsaWNlYmx1ZVwiOiBcImYwZjhmZlwiLFxyXG5cdFx0XCJhbnRpcXVld2hpdGVcIjogXCJmYWViZDdcIixcclxuXHRcdFwiYXF1YVwiOiBcIjBmZlwiLFxyXG5cdFx0XCJhcXVhbWFyaW5lXCI6IFwiN2ZmZmQ0XCIsXHJcblx0XHRcImF6dXJlXCI6IFwiZjBmZmZmXCIsXHJcblx0XHRcImJlaWdlXCI6IFwiZjVmNWRjXCIsXHJcblx0XHRcImJpc3F1ZVwiOiBcImZmZTRjNFwiLFxyXG5cdFx0XCJibGFja1wiOiBcIjAwMFwiLFxyXG5cdFx0XCJibGFuY2hlZGFsbW9uZFwiOiBcImZmZWJjZFwiLFxyXG5cdFx0XCJibHVlXCI6IFwiMDBmXCIsXHJcblx0XHRcImJsdWV2aW9sZXRcIjogXCI4YTJiZTJcIixcclxuXHRcdFwiYnJvd25cIjogXCJhNTJhMmFcIixcclxuXHRcdFwiYnVybHl3b29kXCI6IFwiZGViODg3XCIsXHJcblx0XHRcImNhZGV0Ymx1ZVwiOiBcIjVmOWVhMFwiLFxyXG5cdFx0XCJjaGFydHJldXNlXCI6IFwiN2ZmZjAwXCIsXHJcblx0XHRcImNob2NvbGF0ZVwiOiBcImQyNjkxZVwiLFxyXG5cdFx0XCJjb3JhbFwiOiBcImZmN2Y1MFwiLFxyXG5cdFx0XCJjb3JuZmxvd2VyYmx1ZVwiOiBcIjY0OTVlZFwiLFxyXG5cdFx0XCJjb3Juc2lsa1wiOiBcImZmZjhkY1wiLFxyXG5cdFx0XCJjcmltc29uXCI6IFwiZGMxNDNjXCIsXHJcblx0XHRcImN5YW5cIjogXCIwZmZcIixcclxuXHRcdFwiZGFya2JsdWVcIjogXCIwMDAwOGJcIixcclxuXHRcdFwiZGFya2N5YW5cIjogXCIwMDhiOGJcIixcclxuXHRcdFwiZGFya2dvbGRlbnJvZFwiOiBcImI4ODYwYlwiLFxyXG5cdFx0XCJkYXJrZ3JheVwiOiBcImE5YTlhOVwiLFxyXG5cdFx0XCJkYXJrZ3JlZW5cIjogXCIwMDY0MDBcIixcclxuXHRcdFwiZGFya2dyZXlcIjogXCJhOWE5YTlcIixcclxuXHRcdFwiZGFya2toYWtpXCI6IFwiYmRiNzZiXCIsXHJcblx0XHRcImRhcmttYWdlbnRhXCI6IFwiOGIwMDhiXCIsXHJcblx0XHRcImRhcmtvbGl2ZWdyZWVuXCI6IFwiNTU2YjJmXCIsXHJcblx0XHRcImRhcmtvcmFuZ2VcIjogXCJmZjhjMDBcIixcclxuXHRcdFwiZGFya29yY2hpZFwiOiBcIjk5MzJjY1wiLFxyXG5cdFx0XCJkYXJrcmVkXCI6IFwiOGIwMDAwXCIsXHJcblx0XHRcImRhcmtzYWxtb25cIjogXCJlOTk2N2FcIixcclxuXHRcdFwiZGFya3NlYWdyZWVuXCI6IFwiOGZiYzhmXCIsXHJcblx0XHRcImRhcmtzbGF0ZWJsdWVcIjogXCI0ODNkOGJcIixcclxuXHRcdFwiZGFya3NsYXRlZ3JheVwiOiBcIjJmNGY0ZlwiLFxyXG5cdFx0XCJkYXJrc2xhdGVncmV5XCI6IFwiMmY0ZjRmXCIsXHJcblx0XHRcImRhcmt0dXJxdW9pc2VcIjogXCIwMGNlZDFcIixcclxuXHRcdFwiZGFya3Zpb2xldFwiOiBcIjk0MDBkM1wiLFxyXG5cdFx0XCJkZWVwcGlua1wiOiBcImZmMTQ5M1wiLFxyXG5cdFx0XCJkZWVwc2t5Ymx1ZVwiOiBcIjAwYmZmZlwiLFxyXG5cdFx0XCJkaW1ncmF5XCI6IFwiNjk2OTY5XCIsXHJcblx0XHRcImRpbWdyZXlcIjogXCI2OTY5NjlcIixcclxuXHRcdFwiZG9kZ2VyYmx1ZVwiOiBcIjFlOTBmZlwiLFxyXG5cdFx0XCJmaXJlYnJpY2tcIjogXCJiMjIyMjJcIixcclxuXHRcdFwiZmxvcmFsd2hpdGVcIjogXCJmZmZhZjBcIixcclxuXHRcdFwiZm9yZXN0Z3JlZW5cIjogXCIyMjhiMjJcIixcclxuXHRcdFwiZnVjaHNpYVwiOiBcImYwZlwiLFxyXG5cdFx0XCJnYWluc2Jvcm9cIjogXCJkY2RjZGNcIixcclxuXHRcdFwiZ2hvc3R3aGl0ZVwiOiBcImY4ZjhmZlwiLFxyXG5cdFx0XCJnb2xkXCI6IFwiZmZkNzAwXCIsXHJcblx0XHRcImdvbGRlbnJvZFwiOiBcImRhYTUyMFwiLFxyXG5cdFx0XCJncmF5XCI6IFwiODA4MDgwXCIsXHJcblx0XHRcImdyZWVuXCI6IFwiMDA4MDAwXCIsXHJcblx0XHRcImdyZWVueWVsbG93XCI6IFwiYWRmZjJmXCIsXHJcblx0XHRcImdyZXlcIjogXCI4MDgwODBcIixcclxuXHRcdFwiaG9uZXlkZXdcIjogXCJmMGZmZjBcIixcclxuXHRcdFwiaG90cGlua1wiOiBcImZmNjliNFwiLFxyXG5cdFx0XCJpbmRpYW5yZWRcIjogXCJjZDVjNWNcIixcclxuXHRcdFwiaW5kaWdvXCI6IFwiNGIwMDgyXCIsXHJcblx0XHRcIml2b3J5XCI6IFwiZmZmZmYwXCIsXHJcblx0XHRcImtoYWtpXCI6IFwiZjBlNjhjXCIsXHJcblx0XHRcImxhdmVuZGVyXCI6IFwiZTZlNmZhXCIsXHJcblx0XHRcImxhdmVuZGVyYmx1c2hcIjogXCJmZmYwZjVcIixcclxuXHRcdFwibGF3bmdyZWVuXCI6IFwiN2NmYzAwXCIsXHJcblx0XHRcImxlbW9uY2hpZmZvblwiOiBcImZmZmFjZFwiLFxyXG5cdFx0XCJsaWdodGJsdWVcIjogXCJhZGQ4ZTZcIixcclxuXHRcdFwibGlnaHRjb3JhbFwiOiBcImYwODA4MFwiLFxyXG5cdFx0XCJsaWdodGN5YW5cIjogXCJlMGZmZmZcIixcclxuXHRcdFwibGlnaHRnb2xkZW5yb2R5ZWxsb3dcIjogXCJmYWZhZDJcIixcclxuXHRcdFwibGlnaHRncmF5XCI6IFwiZDNkM2QzXCIsXHJcblx0XHRcImxpZ2h0Z3JlZW5cIjogXCI5MGVlOTBcIixcclxuXHRcdFwibGlnaHRncmV5XCI6IFwiZDNkM2QzXCIsXHJcblx0XHRcImxpZ2h0cGlua1wiOiBcImZmYjZjMVwiLFxyXG5cdFx0XCJsaWdodHNhbG1vblwiOiBcImZmYTA3YVwiLFxyXG5cdFx0XCJsaWdodHNlYWdyZWVuXCI6IFwiMjBiMmFhXCIsXHJcblx0XHRcImxpZ2h0c2t5Ymx1ZVwiOiBcIjg3Y2VmYVwiLFxyXG5cdFx0XCJsaWdodHNsYXRlZ3JheVwiOiBcIjc4OVwiLFxyXG5cdFx0XCJsaWdodHNsYXRlZ3JleVwiOiBcIjc4OVwiLFxyXG5cdFx0XCJsaWdodHN0ZWVsYmx1ZVwiOiBcImIwYzRkZVwiLFxyXG5cdFx0XCJsaWdodHllbGxvd1wiOiBcImZmZmZlMFwiLFxyXG5cdFx0XCJsaW1lXCI6IFwiMGYwXCIsXHJcblx0XHRcImxpbWVncmVlblwiOiBcIjMyY2QzMlwiLFxyXG5cdFx0XCJsaW5lblwiOiBcImZhZjBlNlwiLFxyXG5cdFx0XCJtYWdlbnRhXCI6IFwiZjBmXCIsXHJcblx0XHRcIm1hcm9vblwiOiBcIjgwMDAwMFwiLFxyXG5cdFx0XCJtZWRpdW1hcXVhbWFyaW5lXCI6IFwiNjZjZGFhXCIsXHJcblx0XHRcIm1lZGl1bWJsdWVcIjogXCIwMDAwY2RcIixcclxuXHRcdFwibWVkaXVtb3JjaGlkXCI6IFwiYmE1NWQzXCIsXHJcblx0XHRcIm1lZGl1bXB1cnBsZVwiOiBcIjkzNzBkYlwiLFxyXG5cdFx0XCJtZWRpdW1zZWFncmVlblwiOiBcIjNjYjM3MVwiLFxyXG5cdFx0XCJtZWRpdW1zbGF0ZWJsdWVcIjogXCI3YjY4ZWVcIixcclxuXHRcdFwibWVkaXVtc3ByaW5nZ3JlZW5cIjogXCIwMGZhOWFcIixcclxuXHRcdFwibWVkaXVtdHVycXVvaXNlXCI6IFwiNDhkMWNjXCIsXHJcblx0XHRcIm1lZGl1bXZpb2xldHJlZFwiOiBcImM3MTU4NVwiLFxyXG5cdFx0XCJtaWRuaWdodGJsdWVcIjogXCIxOTE5NzBcIixcclxuXHRcdFwibWludGNyZWFtXCI6IFwiZjVmZmZhXCIsXHJcblx0XHRcIm1pc3R5cm9zZVwiOiBcImZmZTRlMVwiLFxyXG5cdFx0XCJtb2NjYXNpblwiOiBcImZmZTRiNVwiLFxyXG5cdFx0XCJuYXZham93aGl0ZVwiOiBcImZmZGVhZFwiLFxyXG5cdFx0XCJuYXZ5XCI6IFwiMDAwMDgwXCIsXHJcblx0XHRcIm9sZGxhY2VcIjogXCJmZGY1ZTZcIixcclxuXHRcdFwib2xpdmVcIjogXCI4MDgwMDBcIixcclxuXHRcdFwib2xpdmVkcmFiXCI6IFwiNmI4ZTIzXCIsXHJcblx0XHRcIm9yYW5nZVwiOiBcImZmYTUwMFwiLFxyXG5cdFx0XCJvcmFuZ2VyZWRcIjogXCJmZjQ1MDBcIixcclxuXHRcdFwib3JjaGlkXCI6IFwiZGE3MGQ2XCIsXHJcblx0XHRcInBhbGVnb2xkZW5yb2RcIjogXCJlZWU4YWFcIixcclxuXHRcdFwicGFsZWdyZWVuXCI6IFwiOThmYjk4XCIsXHJcblx0XHRcInBhbGV0dXJxdW9pc2VcIjogXCJhZmVlZWVcIixcclxuXHRcdFwicGFsZXZpb2xldHJlZFwiOiBcImRiNzA5M1wiLFxyXG5cdFx0XCJwYXBheWF3aGlwXCI6IFwiZmZlZmQ1XCIsXHJcblx0XHRcInBlYWNocHVmZlwiOiBcImZmZGFiOVwiLFxyXG5cdFx0XCJwZXJ1XCI6IFwiY2Q4NTNmXCIsXHJcblx0XHRcInBpbmtcIjogXCJmZmMwY2JcIixcclxuXHRcdFwicGx1bVwiOiBcImRkYTBkZFwiLFxyXG5cdFx0XCJwb3dkZXJibHVlXCI6IFwiYjBlMGU2XCIsXHJcblx0XHRcInB1cnBsZVwiOiBcIjgwMDA4MFwiLFxyXG5cdFx0XCJyZWJlY2NhcHVycGxlXCI6IFwiNjM5XCIsXHJcblx0XHRcInJlZFwiOiBcImYwMFwiLFxyXG5cdFx0XCJyb3N5YnJvd25cIjogXCJiYzhmOGZcIixcclxuXHRcdFwicm95YWxibHVlXCI6IFwiNDE2OWUxXCIsXHJcblx0XHRcInNhZGRsZWJyb3duXCI6IFwiOGI0NTEzXCIsXHJcblx0XHRcInNhbG1vblwiOiBcImZhODA3MlwiLFxyXG5cdFx0XCJzYW5keWJyb3duXCI6IFwiZjRhNDYwXCIsXHJcblx0XHRcInNlYWdyZWVuXCI6IFwiMmU4YjU3XCIsXHJcblx0XHRcInNlYXNoZWxsXCI6IFwiZmZmNWVlXCIsXHJcblx0XHRcInNpZW5uYVwiOiBcImEwNTIyZFwiLFxyXG5cdFx0XCJzaWx2ZXJcIjogXCJjMGMwYzBcIixcclxuXHRcdFwic2t5Ymx1ZVwiOiBcIjg3Y2VlYlwiLFxyXG5cdFx0XCJzbGF0ZWJsdWVcIjogXCI2YTVhY2RcIixcclxuXHRcdFwic2xhdGVncmF5XCI6IFwiNzA4MDkwXCIsXHJcblx0XHRcInNsYXRlZ3JleVwiOiBcIjcwODA5MFwiLFxyXG5cdFx0XCJzbm93XCI6IFwiZmZmYWZhXCIsXHJcblx0XHRcInNwcmluZ2dyZWVuXCI6IFwiMDBmZjdmXCIsXHJcblx0XHRcInN0ZWVsYmx1ZVwiOiBcIjQ2ODJiNFwiLFxyXG5cdFx0XCJ0YW5cIjogXCJkMmI0OGNcIixcclxuXHRcdFwidGVhbFwiOiBcIjAwODA4MFwiLFxyXG5cdFx0XCJ0aGlzdGxlXCI6IFwiZDhiZmQ4XCIsXHJcblx0XHRcInRvbWF0b1wiOiBcImZmNjM0N1wiLFxyXG5cdFx0XCJ0dXJxdW9pc2VcIjogXCI0MGUwZDBcIixcclxuXHRcdFwidmlvbGV0XCI6IFwiZWU4MmVlXCIsXHJcblx0XHRcIndoZWF0XCI6IFwiZjVkZWIzXCIsXHJcblx0XHRcIndoaXRlXCI6IFwiZmZmXCIsXHJcblx0XHRcIndoaXRlc21va2VcIjogXCJmNWY1ZjVcIixcclxuXHRcdFwieWVsbG93XCI6IFwiZmYwXCIsXHJcblx0XHRcInllbGxvd2dyZWVuXCI6IFwiOWFjZDMyXCIsXHJcblx0XHRcInRyYW5zcGFyZW50XCI6IFwiMDAwMDAwMDBcIlxyXG5cdH07XHJcblx0XHJcblx0Y29uc3QgY2xhbXAgPSAobiwgYSwgYikgPT4gbiA8IGEgPyBhIDogKG4gPiBiID8gYiA6IG4pLFx0Ly8gQ2xhbXAgbiBpbiBpbnRlcnZhbCBbYSwgYl1cclxuXHRcdHJvdW5kID0gKG4sIGQpID0+IHtcdC8vIFJvdW5kIG4gdG8gbmVhcmVzdCBpbnRlZ2VyLCBvciB0byBkIGRlY2ltYWwgcGxhY2VzIChpZiBkIGlzIGRlZmluZWQpXHJcblx0XHRcdHZhciBwID0gTWF0aC5wb3coMTAsIGQgfHwgMCk7XHJcblx0XHRcdHJldHVybiBNYXRoLnJvdW5kKG4gKiBwKSAvIHA7XHJcblx0XHR9LFxyXG5cdFx0aGkgPSBuID0+IGNsYW1wKHBhcnNlSW50KG4sIDE2KSwgMCwgMjU1KSxcdC8vIENvbnZlcnQgMi1kaWdpdCBoZXggdG8gaW50IGluIGludGVydmFsIFswLCAyNTVdXHJcblx0XHRoZiA9IG4gPT4gY2xhbXAocm91bmQocGFyc2VJbnQobiwgMTYpIC8gMjU1LCAyKSwgMCwgMSksXHQvLyBDb252ZXJ0IDItZGlnaXQgaGV4IHRvIGZsb2F0IHdpdGggMiBkZWNpbWFsIHBsYWNlcyBpbiBpbnRlcnZhbCBbMCwgMV1cclxuXHRcdHNpID0gbiA9PiBjbGFtcChyb3VuZChwYXJzZUZsb2F0KG4pKSwgMCwgMjU1KSxcdC8vIENvbnZlcnQgc3RyaW5nIHRvIGludCBpbiBpbnRlcnZhbCBbMCwgMjU1XVxyXG5cdFx0c2YgPSBuID0+IGNsYW1wKHJvdW5kKHBhcnNlRmxvYXQobiksIDIpLCAwLCAxKSxcdC8vIENvbnZlcnQgc3RyaW5nIHRvIGZsb2F0IHdpdGggMiBkZWNpbWFsIHBsYWNlcyBpbiBpbnRlcnZhbCBbMCwgMV1cclxuXHRcdHBpID0gbiA9PiBjbGFtcChyb3VuZChwYXJzZUZsb2F0KG4pIC8gMTAwICogMjU1KSwgMCwgMjU1KSxcdC8vIENvbnZlcnQgcGVyY2VudGFnZSBzdHJpbmcgdG8gaW50IGluIGludGVydmFsIFswLCAyNTVdXHJcblx0XHR1ZiA9IG4gPT4gY2xhbXAocGFyc2VGbG9hdChuKSAvIDM2MCwgMCwgMSksXHQvLyBDb252ZXJ0IGh1ZSBzdHJpbmcgdG8gZmxvYXQgaW4gaW50ZXJ2YWwgWzAsIDFdXHJcblx0XHRwZiA9IG4gPT4gY2xhbXAocGFyc2VGbG9hdChuKSAvIDEwMCwgMCwgMSk7XHQvLyBDb252ZXJ0IHBlcmNlbnRhZ2Ugc3RyaW5nIHRvIGZsb2F0IGluIGludGVydmFsIFswLCAxXVxyXG5cdFxyXG5cdC8vIENvbnZlcnQgaHNsIHRvIHJnYiwgYWxwaGEgdmFsdWUgZ2V0cyBwYXNzZWQgc3RyYWlnaHQgdGhyb3VnaFxyXG5cdC8vIGgsIHMsIGwgdmFsdWVzIGFyZSBhc3N1bWVkIHRvIGJlIGluIGludGVydmFsIFswLCAxXVxyXG5cdC8vIFJldHVybnMgYW4gb2JqZWN0IGxpa2UgeyByLCBnLCBiLCBhIH1cclxuXHQvLyBodHRwOi8vYXhvbmZsdXguY29tL2hhbmR5LXJnYi10by1oc2wtYW5kLXJnYi10by1oc3YtY29sb3ItbW9kZWwtY1xyXG5cdGZ1bmN0aW9uIGhzbFRvUmdiKGgsIHMsIGwsIGEpIHtcclxuXHRcdHZhciByLCBnLCBiLFxyXG5cdFx0XHRodWUgPSBmdW5jdGlvbihwLCBxLCB0KSB7XHJcblx0XHRcdFx0aWYgKHQgPCAwKSB7IHQgKz0gMTsgfVxyXG5cdFx0XHRcdGlmICh0ID4gMSkgeyB0IC09IDE7IH1cclxuXHRcdFx0XHRpZiAodCA8IDEgLyA2KSB7IHJldHVybiBwICsgKHEgLSBwKSAqIDYgKiB0IH07XHJcblx0XHRcdFx0aWYgKHQgPCAxIC8gMikgeyByZXR1cm4gcTsgfVxyXG5cdFx0XHRcdGlmICh0IDwgMiAvIDMpIHsgcmV0dXJuIHAgKyAocSAtIHApICogKDIgLyAzIC0gdCkgKiA2IH07XHJcblx0XHRcdFx0cmV0dXJuIHA7XHJcblx0XHRcdH07XHJcblx0XHRpZiAocyA9PSAwKSB7XHJcblx0XHRcdHIgPSBnID0gYiA9IGw7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR2YXIgcSA9IGwgPCAwLjUgPyBsICogKDEgKyBzKSA6IGwgKyBzIC0gbCAqIHMsXHJcblx0XHRcdFx0cCA9IDIgKiBsIC0gcTtcclxuXHRcdFx0ciA9IGh1ZShwLCBxLCBoICsgMSAvIDMpO1xyXG5cdFx0XHRnID0gaHVlKHAsIHEsIGgpO1xyXG5cdFx0XHRiID0gaHVlKHAsIHEsIGggLSAxIC8gMyk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4geyByOiByb3VuZChyICogMjU1KSwgZzogcm91bmQoZyAqIDI1NSksIGI6IHJvdW5kKGIgKiAyNTUpLCBhOiBhIH07XHJcblx0fVxyXG5cdHJldHVybiBmdW5jdGlvbihjKSB7XHJcblx0XHR2YXIgbyA9IHsgcjogMCwgZzogMCwgYjogMCwgYTogMCB9LCBtID0gbnVsbDtcclxuXHRcdGlmICh0eXBlb2YgYyA9PSBcInN0cmluZ1wiKSB7XHJcblx0XHRcdGlmIChjIGluIG5hbWVzKSB7IGMgPSBcIiNcIiArIG5hbWVzW2NdOyB9XHJcblx0XHRcdGlmICgobSA9IGMubWF0Y2goLyMoW2EtZjAtOV0pKFthLWYwLTldKShbYS1mMC05XSkkL2kpKSAhPT0gbnVsbCkge1xyXG5cdFx0XHRcdG8gPSB7IHI6IGhpKG1bMV0gKyBtWzFdKSwgZzogaGkobVsyXSArIG1bMl0pLCBiOiBoaShtWzNdICsgbVszXSksIGE6IDEgfTtcclxuXHRcdFx0fSBlbHNlIGlmICgobSA9IGMubWF0Y2goLyMoW2EtZjAtOV17Mn0pKFthLWYwLTldezJ9KShbYS1mMC05XXsyfSkkL2kpKSAhPT0gbnVsbCkge1xyXG5cdFx0XHRcdG8gPSB7IHI6IGhpKG1bMV0pLCBnOiBoaShtWzJdKSwgYjogaGkobVszXSksIGE6IDEgfTtcclxuXHRcdFx0fSBlbHNlIGlmICgobSA9IGMubWF0Y2goLyMoW2EtZjAtOV17Mn0pKFthLWYwLTldezJ9KShbYS1mMC05XXsyfSkoW2EtZjAtOV17Mn0pJC9pKSkgIT09IG51bGwpIHtcclxuXHRcdFx0XHRvID0geyByOiBoaShtWzFdKSwgZzogaGkobVsyXSksIGI6IGhpKG1bM10pLCBhOiBoZihtWzRdKSB9O1xyXG5cdFx0XHR9IGVsc2UgaWYgKChtID0gYy5tYXRjaCgvcmdiXFwoXFxzKihcXGR7MSwzfSlcXHMqLFxccyooXFxkezEsM30pXFxzKixcXHMqKFxcZHsxLDN9KVxccypcXCkvKSkgIT09IG51bGwpIHtcclxuXHRcdFx0XHRvID0geyByOiBzaShtWzFdKSwgZzogc2kobVsyXSksIGI6IHNpKG1bM10pLCBhOiAxIH07XHJcblx0XHRcdH0gZWxzZSBpZiAoKG0gPSBjLm1hdGNoKC9yZ2JcXChcXHMqKFxcZHsxLDN9XFwuP1xcZD8lKVxccyosXFxzKihcXGR7MSwzfVxcLj9cXGQ/JSlcXHMqLFxccyooXFxkezEsM31cXC4/XFxkPyUpXFxzKlxcKS8pKSAhPT0gbnVsbCkge1xyXG5cdFx0XHRcdG8gPSB7IHI6IHBpKG1bMV0pLCBnOiBwaShtWzJdKSwgYjogcGkobVszXSksIGE6IDEgfTtcclxuXHRcdFx0fSBlbHNlIGlmICgobSA9IGMubWF0Y2goL3JnYmFcXChcXHMqKFxcZHsxLDN9KVxccyosXFxzKihcXGR7MSwzfSlcXHMqLFxccyooXFxkezEsM30pXFxzKixcXHMqKFxcZD9cXC4/XFxkKj8pP1xccypcXCkvKSkgIT09IG51bGwpIHtcclxuXHRcdFx0XHRvID0geyByOiBzaShtWzFdKSwgZzogc2kobVsyXSksIGI6IHNpKG1bM10pLCBhOiBzZihtWzRdKSB9O1xyXG5cdFx0XHR9IGVsc2UgaWYgKChtID0gYy5tYXRjaCgvcmdiYVxcKFxccyooXFxkezEsM31cXC4/XFxkPyUpXFxzKixcXHMqKFxcZHsxLDN9XFwuP1xcZD8lKVxccyosXFxzKihcXGR7MSwzfVxcLj9cXGQ/JSlcXHMqLFxccyooXFxkP1xcLj9cXGQqPyk/XFxzKlxcKS8pKSAhPT0gbnVsbCkge1xyXG5cdFx0XHRcdG8gPSB7IHI6IHBpKG1bMV0pLCBnOiBwaShtWzJdKSwgYjogcGkobVszXSksIGE6IHNmKG1bNF0pIH07XHJcblx0XHRcdH0gZWxzZSBpZiAoKG0gPSBjLm1hdGNoKC9oc2xcXChcXHMqKFxcZHsxLDN9XFwuP1xcZD8pXFxzKixcXHMqKFxcZHsxLDN9XFwuP1xcZD8lKVxccyosXFxzKihcXGR7MSwzfVxcLj9cXGQ/JSlcXHMqXFwpLykpICE9PSBudWxsKSB7XHJcblx0XHRcdFx0byA9IGhzbFRvUmdiKHVmKG1bMV0pLCBwZihtWzJdKSwgcGYobVszXSksIDEpO1xyXG5cdFx0XHR9IGVsc2UgaWYgKChtID0gYy5tYXRjaCgvaHNsYVxcKFxccyooXFxkezEsM31cXC4/XFxkPylcXHMqLFxccyooXFxkezEsM31cXC4/XFxkPyUpXFxzKixcXHMqKFxcZHsxLDN9XFwuP1xcZD8lKVxccyosXFxzKihcXGQ/XFwuP1xcZCo/KT9cXHMqXFwpLykpICE9PSBudWxsKSB7XHJcblx0XHRcdFx0byA9IGhzbFRvUmdiKHVmKG1bMV0pLCBwZihtWzJdKSwgcGYobVszXSksIHNmKG1bNF0pKTtcclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIGlmICh0eXBlb2YgYyA9PSBcIm9iamVjdFwiKSB7XHJcblx0XHRcdGlmIChjLnIgIT09IHVuZGVmaW5lZCAmJiBjLmcgIT0gdW5kZWZpbmVkICYmIGMuYiAhPT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdFx0byA9IHsgcjogc2koYy5yKSwgZzogc2koYy5nKSwgYjogc2koYy5iKSwgYTogc2YoYy5hIHx8IDEpIH07XHJcblx0XHRcdH0gZWxzZSBpZiAoYy5oICE9PSB1bmRlZmluZWQgJiYgYy5zICE9PSB1bmRlZmluZWQgJiYgYy5sICE9PSB1bmRlZmluZWQpIHtcclxuXHRcdFx0XHRvID0gaHNsVG9SZ2IodWYoYy5oKSwgcGYoYy5zKSwgcGYoYy5sKSwgc2YoYy5hIHx8IDEpKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIG87XHJcblx0fTtcclxufSgpKTtcclxuXHJcbmlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJykge1xyXG4gIG1vZHVsZS5leHBvcnRzID0geyBwYXJzZUNvbG9yIH07XHJcbn1cclxuIiwiLyoqXG4gKiBAb3ZlcnZpZXcgQSBsaWJyYXJ5IG9mIHVzZWZ1bCBmdW5jdGlvbnNcbiAqIEBhdXRob3IgR29yZG9uIExhcnJpZ2FuXG4gKi9cblxuLyoqXG4gKiBDaGVjayBpZiB0d28gbnVtYmVycyBhcmUgYXBwcm94aW1hdGVseSBlcXVhbFxuICogQHBhcmFtIHtudW1iZXJ9IGEgTnVtYmVyIGFcbiAqIEBwYXJhbSB7bnVtYmVyfSBiIE51bWJlciBiXG4gKiBAcGFyYW0ge251bWJlcn0gW3A9TnVtYmVyLkVQU0lMT05dIFRoZSBwcmVjaXNpb24gdmFsdWVcbiAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgbnVtYmVycyBhIGFuZCBiIGFyZSBhcHByb3hpbWF0ZWx5IGVxdWFsXG4gKi9cbmNvbnN0IGZsb2F0RXF1YWxzID0gKGEsIGIsIHAgPSBOdW1iZXIuRVBTSUxPTikgPT4gTWF0aC5hYnMoYSAtIGIpIDwgcDtcblxuLyoqXG4gKiBDbGFtcCBhIG51bWJlciBiZXR3ZWVuIG1pbiBhbmQgbWF4XG4gKiBAcGFyYW0ge251bWJlcn0gYSBUaGUgbnVtYmVyIHRvIGNsYW1wXG4gKiBAcGFyYW0ge251bWJlcn0gW21pbj0wXSBUaGUgbWluaW11bSB2YWx1ZVxuICogQHBhcmFtIHtudW1iZXJ9IFttYXg9MV0gVGhlIG1heGltdW0gdmFsdWVcbiAqIEByZXR1cm4ge251bWJlcn0gQSBjbGFtcGVkIG51bWJlclxuICovXG5jb25zdCBjbGFtcCA9IChhLCBtaW4gPSAwLCBtYXggPSAxKSA9PiBhIDwgbWluID8gbWluIDogKGEgPiBtYXggPyBtYXggOiBhKTtcblxuLyoqXG4gKiBHZXQgdGhlIGZyYWN0aW9uYWwgcGFydCBvZiBhIG51bWJlclxuICogQHBhcmFtIHtudW1iZXJ9IGEgVGhlIG51bWJlciBmcm9tIHdoaWNoIHRvIGdldCB0aGUgZnJhY3Rpb25hbCBwYXJ0XG4gKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBmcmFjdGlvbmFsIHBhcnQgb2YgdGhlIG51bWJlclxuICovXG5jb25zdCBmcmFjID0gYSA9PiBhID49IDAgPyBhIC0gTWF0aC5mbG9vcihhKSA6IGEgLSBNYXRoLmNlaWwoYSk7XG5cbi8qKlxuICogUm91bmQgbiB0byBkIGRlY2ltYWwgcGxhY2VzXG4gKiBAcGFyYW0ge251bWJlcn0gbiBUaGUgbnVtYmVyIHRvIHJvdW5kXG4gKiBAcGFyYW0ge251bWJlcn0gW2Q9MF0gVGhlIG51bWJlciBvZiBkZWNpbWFsIHBsYWNlcyB0byByb3VuZCB0b1xuICogQHJldHVybiB7bnVtYmVyfSBBIHJvdW5kZWQgbnVtYmVyXG4gKi9cbmNvbnN0IHJvdW5kID0gKG4sIGQgPSAwKSA9PiB7XG4gIGNvbnN0IHAgPSBNYXRoLnBvdygxMCwgZCk7XG4gIHJldHVybiBNYXRoLnJvdW5kKG4gKiBwICsgTnVtYmVyLkVQU0lMT04pIC8gcDtcbn1cblxuLyoqXG4gKiBEbyBhIGxpbmVhciBpbnRlcnBvbGF0aW9uIGJldHdlZW4gYSBhbmQgYlxuICogQHBhcmFtIHtudW1iZXJ9IGEgVGhlIG1pbmltdW0gbnVtYmVyXG4gKiBAcGFyYW0ge251bWJlcn0gYiBUaGUgbWF4aW11bSBudW1iZXJcbiAqIEBwYXJhbSB7bnVtYmVyfSBpIFRoZSBpbnRlcnBvbGF0aW9uIHZhbHVlLCBzaG91bGQgYmUgaW4gdGhlIGludGVydmFsIFswLCAxXVxuICogQHJldHVybiB7bnVtYmVyfSBBbiBpbnRlcnBvbGF0ZWQgdmFsdWUgaW4gdGhlIGludGVydmFsIFthLCBiXVxuICovXG5jb25zdCBsZXJwID0gKGEsIGIsIGkpID0+IGEgKyAoYiAtIGEpICogaTtcblxuLyoqXG4gKiBHZXQgdGhlIHBvc2l0aW9uIG9mIGkgYmV0d2VlbiBhIGFuZCBiXG4gKiBAcGFyYW0ge251bWJlcn0gYSBUaGUgbWluaW11bSBudW1iZXJcbiAqIEBwYXJhbSB7bnVtYmVyfSBiIFRoZSBtYXhpbXVtIG51bWJlclxuICogQHBhcmFtIHtudW1iZXJ9IGkgVGhlIGludGVycG9sYXRlZCB2YWx1ZSBpbiB0aGUgaW50ZXJ2YWwgW2EsIGJdXG4gKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBwb3NpdGlvbiBvZiBpIGJldHdlZW4gYSBhbmQgYlxuICovXG5jb25zdCB1bmxlcnAgPSAoYSwgYiwgaSkgPT4gKGkgLSBhKSAvIChiIC0gYSk7XG5cbi8qKlxuICogRG8gYSBiaWxpbmVhciBpbnRlcnBvbGF0aW9uXG4gKiBAcGFyYW0ge251bWJlcn0gYzAwIFRvcC1sZWZ0IHZhbHVlXG4gKiBAcGFyYW0ge251bWJlcn0gYzEwIFRvcC1yaWdodCB2YWx1ZVxuICogQHBhcmFtIHtudW1iZXJ9IGMwMSBCb3R0b20tbGVmdCB2YWx1ZVxuICogQHBhcmFtIHtudW1iZXJ9IGMxMSBCb3R0b20tcmlnaHQgdmFsdWVcbiAqIEBwYXJhbSB7bnVtYmVyfSBpeCBJbnRlcnBvbGF0aW9uIHZhbHVlIGFsb25nIHhcbiAqIEBwYXJhbSB7bnVtYmVyfSBpeSBJbnRlcnBvbGF0aW9uIHZhbHVlIGFsb25nIHlcbiAqIEByZXR1cm4ge251bWJlcn0gQSBiaWxpbmVhciBpbnRlcnBvbGF0ZWQgdmFsdWVcbiAqL1xuY29uc3QgYmxlcnAgPSAoYzAwLCBjMTAsIGMwMSwgYzExLCBpeCwgaXkpID0+IGxlcnAobGVycChjMDAsIGMxMCwgaXgpLCBsZXJwKGMwMSwgYzExLCBpeCksIGl5KTtcblxuLyoqXG4gKiBSZS1tYXAgYSBudW1iZXIgaSBmcm9tIHJhbmdlIGExLi4uYTIgdG8gYjEuLi5iMlxuICogQHBhcmFtIHtudW1iZXJ9IGkgVGhlIG51bWJlciB0byByZS1tYXBcbiAqIEBwYXJhbSB7bnVtYmVyfSBhMVxuICogQHBhcmFtIHtudW1iZXJ9IGEyXG4gKiBAcGFyYW0ge251bWJlcn0gYjFcbiAqIEBwYXJhbSB7bnVtYmVyfSBiMlxuICogQHJldHVybiB7bnVtYmVyfVxuICovXG5jb25zdCByZW1hcCA9IChpLCBhMSwgYTIsIGIxLCBiMikgPT4gYjEgKyAoaSAtIGExKSAqIChiMiAtIGIxKSAvIChhMiAtIGExKTtcblxuLyoqXG4gKiBEbyBhIHNtb290aCBpbnRlcnBvbGF0aW9uIGJldHdlZW4gYSBhbmQgYlxuICogQHBhcmFtIHtudW1iZXJ9IGEgVGhlIG1pbmltdW0gbnVtYmVyXG4gKiBAcGFyYW0ge251bWJlcn0gYiBUaGUgbWF4aW11bSBudW1iZXJcbiAqIEBwYXJhbSB7bnVtYmVyfSBpIFRoZSBpbnRlcnBvbGF0aW9uIHZhbHVlXG4gKiBAcmV0dXJuIHtudW1iZXJ9IEFuIGludGVycG9sYXRlZCB2YWx1ZSBpbiB0aGUgaW50ZXJ2YWwgW2EsIGJdXG4gKi9cbmNvbnN0IHNtb290aHN0ZXAgPSAoYSwgYiwgaSkgPT4gbGVycChhLCBiLCAzICogTWF0aC5wb3coaSwgMikgLSAyICogTWF0aC5wb3coaSwgMykpO1xuXG4vKipcbiAqIEdldCBhbiBhbmdsZSBpbiByYWRpYW5zXG4gKiBAcGFyYW0ge251bWJlcn0gZGVncmVlcyBUaGUgYW5nbGUgaW4gZGVncmVlc1xuICogQHJldHVybiB7bnVtYmVyfSBUaGUgYW5nbGUgaW4gcmFkaWFuc1xuICovXG5jb25zdCByYWRpYW5zID0gZGVncmVlcyA9PiAoTWF0aC5QSSAvIDE4MCkgKiBkZWdyZWVzO1xuXG4vKipcbiAqIEdldCBhbiBhbmdsZSBpbiBkZWdyZWVzXG4gKiBAcGFyYW0ge251bWJlcn0gcmFkaWFucyBUaGUgYW5nbGUgaW4gcmFkaWFuc1xuICogQHJldHVybiB7bnVtYmVyfSBUaGUgYW5nbGUgaW4gZGVncmVlc1xuICovXG5jb25zdCBkZWdyZWVzID0gcmFkaWFucyA9PiAoMTgwIC8gTWF0aC5QSSkgKiByYWRpYW5zO1xuXG4vKipcbiAqIEdldCBhIHJhbmRvbSBmbG9hdCBpbiB0aGUgaW50ZXJ2YWwgW21pbiwgbWF4KVxuICogQHBhcmFtIHtudW1iZXJ9IG1pbiBJbmNsdXNpdmUgbWluXG4gKiBAcGFyYW0ge251bWJlcn0gbWF4IEV4Y2x1c2l2ZSBtYXhcbiAqIEByZXR1cm4ge251bWJlcn0gQSByYW5kb20gZmxvYXQgaW4gdGhlIGludGVydmFsIFttaW4sIG1heClcbiAqL1xuY29uc3QgcmFuZG9tQmV0d2VlbiA9IChtaW4sIG1heCkgPT4gTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pICsgbWluO1xuXG4vKipcbiAqIEdldCBhIHJhbmRvbSBpbnRlZ2VyIGluIHRoZSBpbnRlcnZhbCBbbWluLCBtYXhdXG4gKiBAcGFyYW0ge251bWJlcn0gbWluIEluY2x1c2l2ZSBtaW5cbiAqIEBwYXJhbSB7bnVtYmVyfSBtYXggSW5jbHVzaXZlIG1heFxuICogQHJldHVybiB7bnVtYmVyfSBBIHJhbmRvbSBpbnRlZ2VyIGluIHRoZSBpbnRlcnZhbCBbbWluLCBtYXhdXG4gKi9cbmNvbnN0IHJhbmRvbUludEJldHdlZW4gPSAobWluLCBtYXgpID0+IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW47XG5cbi8qKlxuICogR2V0IGEgbm9ybWFsbHktZGlzdHJpYnV0ZWQgcmFuZG9tIG51bWJlclxuICogQHBhcmFtIHtudW1iZXJ9IFttdT0wLjVdIFRoZSBtZWFuIHZhbHVlXG4gKiBAcGFyYW0ge251bWJlcn0gW3NpZ21hPTAuNV0gVGhlIHN0YW5kYXJkIGRldmlhdGlvblxuICogQHBhcmFtIHtudW1iZXJ9IFtzYW1wbGVzPTJdIFRoZSBudW1iZXIgb2Ygc2FtcGxlc1xuICogQHJldHVybiB7bnVtYmVyfSBBIG5vcm1hbGx5LWRpc3RyaWJ1dGVkIHJhbmRvbSBudW1iZXJcbiAqL1xuY29uc3QgY2x0UmFuZG9tID0gKG11ID0gMC41LCBzaWdtYSA9IDAuNSwgc2FtcGxlcyA9IDIpID0+IHtcbiAgbGV0IHRvdGFsID0gMDtcbiAgZm9yIChsZXQgaSA9IHNhbXBsZXM7IGktLTspIHtcbiAgICB0b3RhbCArPSBNYXRoLnJhbmRvbSgpO1xuICB9XG4gIHJldHVybiBtdSArICh0b3RhbCAtIHNhbXBsZXMgLyAyKSAvIChzYW1wbGVzIC8gMikgKiBzaWdtYTtcbn07XG5cbi8qKlxuICogR2V0IGEgbm9ybWFsbHktZGlzdHJpYnV0ZWQgcmFuZG9tIGludGVnZXIgaW4gdGhlIGludGVydmFsIFttaW4sIG1heF1cbiAqIEBwYXJhbSB7bnVtYmVyfSBtaW4gSW5jbHVzaXZlIG1pblxuICogQHBhcmFtIHtudW1iZXJ9IG1heCBJbmNsdXNpdmUgbWF4XG4gKiBAcmV0dXJuIHtudW1iZXJ9IEEgbm9ybWFsbHktZGlzdHJpYnV0ZWQgcmFuZG9tIGludGVnZXJcbiAqL1xuY29uc3QgY2x0UmFuZG9tSW50ID0gKG1pbiwgbWF4KSA9PiBNYXRoLmZsb29yKG1pbiArIGNsdFJhbmRvbSgwLjUsIDAuNSwgMikgKiAobWF4ICsgMSAtIG1pbikpO1xuXG4vKipcbiAqIFJldHVybiBhIHdlaWdodGVkIHJhbmRvbSBpbnRlZ2VyXG4gKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IHcgQW4gYXJyYXkgb2Ygd2VpZ2h0c1xuICogQHJldHVybiB7bnVtYmVyfSBBbiBpbmRleCBmcm9tIHdcbiAqL1xuY29uc3Qgd2VpZ2h0ZWRSYW5kb20gPSB3ID0+IHtcbiAgbGV0IHRvdGFsID0gdy5yZWR1Y2UoKGEsIGkpID0+IGEgKyBpLCAwKSwgbiA9IDA7XG4gIGNvbnN0IHIgPSBNYXRoLnJhbmRvbSgpICogdG90YWw7XG4gIHdoaWxlICh0b3RhbCA+IHIpIHtcbiAgICB0b3RhbCAtPSB3W24rK107XG4gIH1cbiAgcmV0dXJuIG4gLSAxO1xufTtcblxuLyoqXG4gKiBBbiBpbnRlcnBvbGF0aW9uIGZ1bmN0aW9uXG4gKiBAY2FsbGJhY2sgSW50ZXJwb2xhdGlvbkZ1bmN0aW9uXG4gKiBAcGFyYW0ge251bWJlcn0gYSBUaGUgbWluaW11bSBudW1iZXJcbiAqIEBwYXJhbSB7bnVtYmVyfSBiIFRoZSBtYXhpbXVtIG51bWJlclxuICogQHBhcmFtIHtudW1iZXJ9IGkgVGhlIGludGVycG9sYXRpb24gdmFsdWUsIHNob3VsZCBiZSBpbiB0aGUgaW50ZXJ2YWwgWzAsIDFdXG4gKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBpbnRlcnBvbGF0ZWQgdmFsdWUgaW4gdGhlIGludGVydmFsIFthLCBiXVxuICovXG5cbi8qKlxuICogUmV0dXJuIGFuIGludGVycG9sYXRlZCB2YWx1ZSBmcm9tIGFuIGFycmF5XG4gKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IGEgQW4gYXJyYXkgb2YgdmFsdWVzIGludGVycG9sYXRlXG4gKiBAcGFyYW0ge251bWJlcn0gaSBBIG51bWJlciBpbiB0aGUgaW50ZXJ2YWwgWzAsIDFdXG4gKiBAcGFyYW0ge0ludGVycG9sYXRpb25GdW5jdGlvbn0gW2Y9TWF0aC5sZXJwXSBUaGUgaW50ZXJwb2xhdGlvbiBmdW5jdGlvbiB0byB1c2VcbiAqIEByZXR1cm4ge251bWJlcn0gQW4gaW50ZXJwb2xhdGVkIHZhbHVlIGluIHRoZSBpbnRlcnZhbCBbbWluKGEpLCBtYXgoYSldXG4gKi9cbmNvbnN0IGxlcnBBcnJheSA9IChhLCBpLCBmID0gbGVycCkgPT4ge1xuICBjb25zdCBzID0gaSAqIChhLmxlbmd0aCAtIDEpO1xuICBjb25zdCBwID0gY2xhbXAoTWF0aC50cnVuYyhzKSwgMCwgYS5sZW5ndGggLSAxKTtcbiAgcmV0dXJuIGYoYVtwXSB8fCAwLCBhW3AgKyAxXSB8fCAwLCBmcmFjKHMpKTtcbn07XG5cbi8qKlxuICogR2V0IHRoZSBkb3QgcHJvZHVjdCBvZiB0d28gdmVjdG9yc1xuICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSBhIFZlY3RvciBhXG4gKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IGIgVmVjdG9yIGJcbiAqIEByZXR1cm4ge251bWJlcn0gYSDiiJkgYlxuICovXG5jb25zdCBkb3QgPSAoYSwgYikgPT4gYS5yZWR1Y2UoKG4sIHYsIGkpID0+IG4gKyB2ICogYltpXSwgMCk7XG5cbi8qKlxuICogR2V0IHRoZSBmYWN0b3JpYWwgb2YgYSBudW1iZXJcbiAqIEBwYXJhbSB7bnVtYmVyfSBhXG4gKiBAcmV0dXJuIHtudW1iZXJ9IGEhXG4gKi9cbmNvbnN0IGZhY3RvcmlhbCA9IGEgPT4ge1xuICBsZXQgcmVzdWx0ID0gMTtcbiAgZm9yIChsZXQgaSA9IDI7IGkgPD0gYTsgaSsrKSB7XG4gICAgcmVzdWx0ICo9IGk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbi8qKlxuICogR2V0IHRoZSBudW1iZXIgb2YgcGVybXV0YXRpb25zIG9mIHIgZWxlbWVudHMgZnJvbSBhIHNldCBvZiBuIGVsZW1lbnRzXG4gKiBAcGFyYW0ge251bWJlcn0gblxuICogQHBhcmFtIHtudW1iZXJ9IHJcbiAqIEByZXR1cm4ge251bWJlcn0gblByXG4gKi9cbmNvbnN0IG5wciA9IChuLCByKSA9PiBmYWN0b3JpYWwobikgLyBmYWN0b3JpYWwobiAtIHIpO1xuXG4vKipcbiAqIEdldCB0aGUgbnVtYmVyIG9mIGNvbWJpbmF0aW9ucyBvZiByIGVsZW1lbnRzIGZyb20gYSBzZXQgb2YgbiBlbGVtZW50c1xuICogQHBhcmFtIHtudW1iZXJ9IG5cbiAqIEBwYXJhbSB7bnVtYmVyfSByXG4gKiBAcmV0dXJuIHtudW1iZXJ9IG5DclxuICovXG5jb25zdCBuY3IgPSAobiwgcikgPT4gZmFjdG9yaWFsKG4pIC8gKGZhY3RvcmlhbChyKSAqIGZhY3RvcmlhbChuIC0gcikpO1xuXG4vKipcbiAqIEdlbmVyYXRlIGFsbCBjb21iaW5hdGlvbnMgb2YgciBlbGVtZW50cyBmcm9tIGFuIGFycmF5XG4gKlxuICogQGV4YW1wbGVcbiAqIGBgYGpzXG4gKiBjb21iaW5hdGlvbnMoWzEsIDIsIDNdLCAyKTtcbiAqIGBgYFxuICpcbiAqIE91dHB1dDpcbiAqIGBgYGpzb25cbiAqIFtcbiAqICAgWzEsIDJdLFxuICogICBbMSwgM10sXG4gKiAgIFsyLCAzXVxuICogXVxuICogYGBgXG4gKiBAcGFyYW0ge0FycmF5PCo+fSBhXG4gKiBAcGFyYW0ge251bWJlcn0gciBUaGUgbnVtYmVyIG9mIGVsZW1lbnRzIHRvIGNob29zZSBpbiBlYWNoIGNvbWJpbmF0aW9uXG4gKiBAcmV0dXJuIHtBcnJheTxBcnJheTwqPj59IEFuIGFycmF5IG9mIGNvbWJpbmF0aW9uIGFycmF5c1xuICovXG5jb25zdCBjb21iaW5hdGlvbnMgPSAoYSwgcikgPT4ge1xuICBpZiAociA9PT0gMSkge1xuICAgIHJldHVybiBhLm1hcChpdGVtID0+IFtpdGVtXSk7XG4gIH1cblxuICByZXR1cm4gYS5yZWR1Y2UoXG4gICAgKGFjYywgaXRlbSwgaSkgPT4gW1xuICAgICAgLi4uYWNjLFxuICAgICAgLi4uY29tYmluYXRpb25zKGEuc2xpY2UoaSArIDEpLCByIC0gMSkubWFwKGMgPT4gW2l0ZW0sIC4uLmNdKSxcbiAgICBdLFxuICAgIFtdXG4gICk7XG59O1xuXG4vKipcbiAqIEdldCBhIGNhcnRlc2lhbiBwcm9kdWN0IG9mIGFycmF5c1xuICpcbiAqIEBleGFtcGxlXG4gKiBgYGBqc1xuICogY2FydGVzaWFuKFsxLCAyLCAzXSwgWydhJywgJ2InXSk7XG4gKiBgYGBcbiAqXG4gKiBPdXRwdXQ6XG4gKiBgYGBqc29uXG4gKiBbXG4gKiAgIFsxLCBcImFcIl0sXG4gKiAgIFsxLCBcImJcIl0sXG4gKiAgIFsyLCBcImFcIl0sXG4gKiAgIFsyLCBcImJcIl0sXG4gKiAgIFszLCBcImFcIl0sXG4gKiAgIFszLCBcImJcIl1cbiAqIF1cbiAqIGBgYFxuICovXG5jb25zdCBjYXJ0ZXNpYW4gPSAoLi4uYXJyKSA9PlxuICBhcnIucmVkdWNlKFxuICAgIChhLCBiKSA9PiBhLmZsYXRNYXAoYyA9PiBiLm1hcChkID0+IFsuLi5jLCBkXSkpLFxuICAgIFtbXV1cbiAgKTtcblxuLyoqXG4gKiBBIGZ1bmN0aW9uIGZvciBnZW5lcmF0aW5nIGFycmF5IHZhbHVlc1xuICogQGNhbGxiYWNrIFRpbWVzRnVuY3Rpb25cbiAqIEBwYXJhbSB7bnVtYmVyfSBpIFRoZSBhcnJheSBpbmRleFxuICogQHJldHVybiB7Kn0gVGhlIGFycmF5IHZhbHVlXG4gKi9cblxuLyoqXG4gKiBSZXR1cm4gYSBuZXcgYXJyYXkgd2l0aCBsZW5ndGggbiBieSBjYWxsaW5nIGZ1bmN0aW9uIGYoaSkgb24gZWFjaCBlbGVtZW50XG4gKiBAcGFyYW0ge1RpbWVzRnVuY3Rpb259IGZcbiAqIEBwYXJhbSB7bnVtYmVyfSBuIFRoZSBzaXplIG9mIHRoZSBhcnJheVxuICogQHJldHVybiB7QXJyYXk8Kj59XG4gKi9cbmNvbnN0IHRpbWVzID0gKGYsIG4pID0+IEFycmF5KG4pLmZpbGwoMCkubWFwKChfLCBpKSA9PiBmKGkpKTtcblxuLyoqXG4gKiBSZXR1cm4gYW4gYXJyYXkgY29udGFpbmluZyBudW1iZXJzIDAtPihuIC0gMSlcbiAqIEBwYXJhbSB7bnVtYmVyfSBuIFRoZSBzaXplIG9mIHRoZSBhcnJheVxuICogQHJldHVybiB7QXJyYXk8bnVtYmVyPn0gQW4gYXJyYXkgb2YgaW50ZWdlcnMgMC0+KG4gLSAxKVxuICovXG5jb25zdCByYW5nZSA9IG4gPT4gdGltZXMoaSA9PiBpLCBuKTtcblxuLyoqXG4gKiBaaXAgMiBhcnJheXMgdG9nZXRoZXIsIGkuZS4gKFsxLCAyLCAzXSwgW2EsIGIsIGNdKSA9PiBbWzEsIGFdLCBbMiwgYl0sIFszLCBjXV1cbiAqIEBwYXJhbSB7QXJyYXk8Kj59IGFcbiAqIEBwYXJhbSB7QXJyYXk8Kj59IGJcbiAqIEByZXR1cm4ge0FycmF5PEFycmF5PCo+Pn1cbiAqL1xuY29uc3QgemlwID0gKGEsIGIpID0+IGEubWFwKChrLCBpKSA9PiBbaywgYltpXV0pO1xuXG4vKipcbiAqIFJldHVybiBhcnJheVtpXSB3aXRoIHBvc2l0aXZlIGFuZCBuZWdhdGl2ZSB3cmFwcGluZ1xuICogQHBhcmFtIHtBcnJheTwqPn0gYVxuICogQHBhcmFtIHtudW1iZXJ9IGkgVGhlIHBvc2l0aXZlbHkvbmVnYXRpdmVseSB3cmFwcGVkIGFycmF5IGluZGV4XG4gKiBAcmV0dXJuIHsqfSBBbiBlbGVtZW50IGZyb20gdGhlIGFycmF5XG4gKi9cbmNvbnN0IGF0ID0gKGEsIGkpID0+IGFbaSA8IDAgPyBhLmxlbmd0aCAtIChNYXRoLmFicyhpICsgMSkgJSBhLmxlbmd0aCkgLSAxIDogaSAlIGEubGVuZ3RoXTtcblxuLyoqXG4gKiBSZXR1cm4gdGhlIGxhc3QgZWxlbWVudCBvZiBhbiBhcnJheSB3aXRob3V0IHJlbW92aW5nIGl0XG4gKiBAcGFyYW0ge0FycmF5PCo+fSBhXG4gKiBAcmV0dXJuIHsqfSBUaGUgbGFzdCBlbGVtZW50IGZyb20gdGhlIGFycmF5XG4gKi9cbmNvbnN0IHBlZWsgPSAoYSkgPT4ge1xuICBpZiAoIWEubGVuZ3RoKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuXG4gIHJldHVybiBhW2EubGVuZ3RoIC0gMV07XG59O1xuXG4vKipcbiAqIENob3AgYW4gYXJyYXkgaW50byBjaHVua3Mgb2Ygc2l6ZSBuXG4gKiBAcGFyYW0ge0FycmF5PCo+fSBhXG4gKiBAcGFyYW0ge251bWJlcn0gbiBUaGUgY2h1bmsgc2l6ZVxuICogQHJldHVybiB7QXJyYXk8QXJyYXk8Kj4+fSBBbiBhcnJheSBvZiBhcnJheSBjaHVua3NcbiAqL1xuY29uc3QgY2h1bmsgPSAoYSwgbikgPT4gdGltZXMoaSA9PiBhLnNsaWNlKGkgKiBuLCBpICogbiArIG4pLCBNYXRoLmNlaWwoYS5sZW5ndGggLyBuKSk7XG5cbi8qKlxuICogUmFuZG9tbHkgc2h1ZmZsZSBhIHNoYWxsb3cgY29weSBvZiBhbiBhcnJheVxuICogQHBhcmFtIHtBcnJheTwqPn0gYVxuICogQHJldHVybiB7QXJyYXk8Kj59IFRoZSBzaHVmZmxlZCBhcnJheVxuICovXG5jb25zdCBzaHVmZmxlID0gYSA9PiBhLnNsaWNlKCkuc29ydCgoKSA9PiBNYXRoLnJhbmRvbSgpIC0gMC41KTtcblxuLyoqXG4gKiBGbGF0dGVuIGFuIG9iamVjdFxuICogQHBhcmFtIHtvYmplY3R9IG9cbiAqIEBwYXJhbSB7c3RyaW5nfSBjb25jYXRlbmF0b3IgVGhlIHN0cmluZyB0byB1c2UgZm9yIGNvbmNhdGVuYXRpbmcga2V5c1xuICogQHJldHVybiB7b2JqZWN0fSBBIGZsYXR0ZW5lZCBvYmplY3RcbiAqL1xuY29uc3QgZmxhdCA9IChvLCBjb25jYXRlbmF0b3IgPSAnLicpID0+IHtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKG8pLnJlZHVjZSgoYWNjLCBrZXkpID0+IHtcbiAgICBpZiAob1trZXldIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uYWNjLFxuICAgICAgICBba2V5XTogb1trZXldLnRvSVNPU3RyaW5nKCksXG4gICAgICB9O1xuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygb1trZXldICE9PSAnb2JqZWN0JyB8fCAhb1trZXldKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5hY2MsXG4gICAgICAgIFtrZXldOiBvW2tleV0sXG4gICAgICB9O1xuICAgIH1cbiAgICBjb25zdCBmbGF0dGVuZWQgPSBmbGF0KG9ba2V5XSwgY29uY2F0ZW5hdG9yKTtcblxuICAgIHJldHVybiB7XG4gICAgICAuLi5hY2MsXG4gICAgICAuLi5PYmplY3Qua2V5cyhmbGF0dGVuZWQpLnJlZHVjZShcbiAgICAgICAgKGNoaWxkQWNjLCBjaGlsZEtleSkgPT4gKHtcbiAgICAgICAgICAuLi5jaGlsZEFjYyxcbiAgICAgICAgICBbYCR7a2V5fSR7Y29uY2F0ZW5hdG9yfSR7Y2hpbGRLZXl9YF06IGZsYXR0ZW5lZFtjaGlsZEtleV0sXG4gICAgICAgIH0pLFxuICAgICAgICB7fVxuICAgICAgKSxcbiAgICB9O1xuICB9LCB7fSk7XG59O1xuXG4vKipcbiAqIFVuZmxhdHRlbiBhbiBvYmplY3RcbiAqIEBwYXJhbSB7b2JqZWN0fSBvXG4gKiBAcGFyYW0ge3N0cmluZ30gY29uY2F0ZW5hdG9yIFRoZSBzdHJpbmcgdG8gY2hlY2sgZm9yIGluIGNvbmNhdGVuYXRlZCBrZXlzXG4gKiBAcmV0dXJuIHtvYmplY3R9IEFuIHVuLWZsYXR0ZW5lZCBvYmplY3RcbiAqL1xuY29uc3QgdW5mbGF0ID0gKG8sIGNvbmNhdGVuYXRvciA9ICcuJykgPT4ge1xuICBsZXQgcmVzdWx0ID0ge30sIHRlbXAsIHN1YnN0cmluZ3MsIHByb3BlcnR5LCBpO1xuXG4gIGZvciAocHJvcGVydHkgaW4gbykge1xuICAgIHN1YnN0cmluZ3MgPSBwcm9wZXJ0eS5zcGxpdChjb25jYXRlbmF0b3IpO1xuICAgIHRlbXAgPSByZXN1bHQ7XG4gICAgZm9yIChpID0gMDsgaSA8IHN1YnN0cmluZ3MubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgICBpZiAoIShzdWJzdHJpbmdzW2ldIGluIHRlbXApKSB7XG4gICAgICAgIGlmIChpc0Zpbml0ZShzdWJzdHJpbmdzW2kgKyAxXSkpIHtcbiAgICAgICAgICB0ZW1wW3N1YnN0cmluZ3NbaV1dID0gW107XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGVtcFtzdWJzdHJpbmdzW2ldXSA9IHt9O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0ZW1wID0gdGVtcFtzdWJzdHJpbmdzW2ldXTtcbiAgICB9XG4gICAgdGVtcFtzdWJzdHJpbmdzW3N1YnN0cmluZ3MubGVuZ3RoIC0gMV1dID0gb1twcm9wZXJ0eV07XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuLyoqXG4gKiBBIHNwbGl0IHByZWRpY2F0ZVxuICogQGNhbGxiYWNrIFNwbGl0UHJlZGljYXRlXG4gKiBAcGFyYW0ge2FueX0gdmFsdWUgVGhlIGN1cnJlbnQgdmFsdWVcbiAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgdGhlIGFycmF5IHNob3VsZCBzcGxpdCBhdCB0aGlzIGluZGV4XG4gKi9cblxuLyoqXG4gKiBTcGxpdCBhbiBhcnJheSBpbnRvIHN1Yi1hcnJheXMgYmFzZWQgb24gYSBwcmVkaWNhdGVcbiAqIEBwYXJhbSB7QXJyYXk8Kj59IGFycmF5XG4gKiBAcGFyYW0ge1NwbGl0UHJlZGljYXRlfSBwcmVkaWNhdGVcbiAqIEByZXR1cm4ge0FycmF5PEFycmF5PCo+Pn0gQW4gYXJyYXkgb2YgYXJyYXlzXG4gKi9cbmNvbnN0IHNwbGl0ID0gKGFycmF5LCBwcmVkaWNhdGUpID0+IHtcbiAgY29uc3QgcmVzdWx0ID0gW107XG4gIGxldCBjdXJyZW50ID0gW107XG4gIGZvciAoY29uc3QgdmFsdWUgb2YgYXJyYXkpIHtcbiAgICBpZiAocHJlZGljYXRlKHZhbHVlKSkge1xuICAgICAgaWYgKGN1cnJlbnQubGVuZ3RoKSB7XG4gICAgICAgIHJlc3VsdC5wdXNoKGN1cnJlbnQpO1xuICAgICAgfVxuICAgICAgY3VycmVudCA9IFt2YWx1ZV07XG4gICAgfSBlbHNlIHtcbiAgICAgIGN1cnJlbnQucHVzaCh2YWx1ZSk7XG4gICAgfVxuICB9XG4gIHJlc3VsdC5wdXNoKGN1cnJlbnQpO1xuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG4vKipcbiAqIFBsdWNrIGtleXMgZnJvbSBhbiBvYmplY3RcbiAqIEBwYXJhbSB7b2JqZWN0fSBvXG4gKiBAcGFyYW0gey4uLnN0cmluZ30ga2V5cyBUaGUga2V5cyB0byBwbHVjayBmcm9tIHRoZSBvYmplY3RcbiAqIEByZXR1cm4ge29iamVjdH0gQW4gb2JqZWN0IGNvbnRhaW5pbmcgdGhlIHBsdWNrZWQga2V5c1xuICovXG5jb25zdCBwbHVjayA9IChvLCAuLi5rZXlzKSA9PiB7XG4gIHJldHVybiBrZXlzLnJlZHVjZShcbiAgICAocmVzdWx0LCBrZXkpID0+IE9iamVjdC5hc3NpZ24ocmVzdWx0LCB7IFtrZXldOiBvW2tleV0gfSksXG4gICAge31cbiAgKTtcbn07XG5cbi8qKlxuICogRXhjbHVkZSBrZXlzIGZyb20gYW4gb2JqZWN0XG4gKiBAcGFyYW0ge29iamVjdH0gb1xuICogQHBhcmFtIHsuLi5zdHJpbmd9IGtleXMgVGhlIGtleXMgdG8gZXhjbHVkZSBmcm9tIHRoZSBvYmplY3RcbiAqIEByZXR1cm4ge29iamVjdH0gQW4gb2JqZWN0IGNvbnRhaW5pbmcgYWxsIGtleXMgZXhjZXB0IGV4Y2x1ZGVkIGtleXNcbiAqL1xuY29uc3QgZXhjbHVkZSA9IChvLCAuLi5rZXlzKSA9PiB7XG4gIHJldHVybiBPYmplY3QuZnJvbUVudHJpZXMoXG4gICAgT2JqZWN0LmVudHJpZXMobykuZmlsdGVyKChba2V5XSkgPT4gIWtleXMuaW5jbHVkZXMoa2V5KSlcbiAgKTtcbn07XG5cbmlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBmbG9hdEVxdWFscyxcbiAgICBjbGFtcCxcbiAgICBmcmFjLFxuICAgIHJvdW5kLFxuICAgIGxlcnAsXG4gICAgdW5sZXJwLFxuICAgIGJsZXJwLFxuICAgIHJlbWFwLFxuICAgIHNtb290aHN0ZXAsXG4gICAgcmFkaWFucyxcbiAgICBkZWdyZWVzLFxuICAgIHJhbmRvbUJldHdlZW4sXG4gICAgcmFuZG9tSW50QmV0d2VlbixcbiAgICBjbHRSYW5kb20sXG4gICAgY2x0UmFuZG9tSW50LFxuICAgIHdlaWdodGVkUmFuZG9tLFxuICAgIGxlcnBBcnJheSxcbiAgICBkb3QsXG4gICAgZmFjdG9yaWFsLFxuICAgIG5wcixcbiAgICBuY3IsXG4gICAgY29tYmluYXRpb25zLFxuICAgIGNhcnRlc2lhbixcbiAgICB0aW1lcyxcbiAgICByYW5nZSxcbiAgICB6aXAsXG4gICAgYXQsXG4gICAgcGVlayxcbiAgICBjaHVuayxcbiAgICBzaHVmZmxlLFxuICAgIGZsYXQsXG4gICAgdW5mbGF0LFxuICAgIHNwbGl0LFxuICAgIHBsdWNrLFxuICAgIGV4Y2x1ZGUsXG4gIH07XG59XG4iLCJjb25zdCB7IHRpbWVzLCBjaHVuaywgZG90IH0gPSByZXF1aXJlKCdAYmFzZW1lbnR1bml2ZXJzZS91dGlscycpO1xuXG4vKipcbiAqIEBvdmVydmlldyBBIHNtYWxsIHZlY3RvciBhbmQgbWF0cml4IGxpYnJhcnlcbiAqIEBhdXRob3IgR29yZG9uIExhcnJpZ2FuXG4gKi9cblxuLyoqXG4gKiBBIDJkIHZlY3RvclxuICogQHR5cGVkZWYge09iamVjdH0gdmVjXG4gKiBAcHJvcGVydHkge251bWJlcn0geCBUaGUgeCBjb21wb25lbnQgb2YgdGhlIHZlY3RvclxuICogQHByb3BlcnR5IHtudW1iZXJ9IHkgVGhlIHkgY29tcG9uZW50IG9mIHRoZSB2ZWN0b3JcbiAqL1xuXG4vKipcbiAqIENyZWF0ZSBhIG5ldyB2ZWN0b3JcbiAqIEBwYXJhbSB7bnVtYmVyfHZlY30gW3hdIFRoZSB4IGNvbXBvbmVudCBvZiB0aGUgdmVjdG9yLCBvciBhIHZlY3RvciB0byBjb3B5XG4gKiBAcGFyYW0ge251bWJlcn0gW3ldIFRoZSB5IGNvbXBvbmVudCBvZiB0aGUgdmVjdG9yXG4gKiBAcmV0dXJuIHt2ZWN9IEEgbmV3IHZlY3RvclxuICogQGV4YW1wbGUgPGNhcHRpb24+VmFyaW91cyB3YXlzIHRvIGluaXRpYWxpc2UgYSB2ZWN0b3I8L2NhcHRpb24+XG4gKiBsZXQgYSA9IHZlYygzLCAyKTsgIC8vICgzLCAyKVxuICogbGV0IGIgPSB2ZWMoNCk7ICAgICAvLyAoNCwgNClcbiAqIGxldCBjID0gdmVjKGEpOyAgICAgLy8gKDMsIDIpXG4gKiBsZXQgZCA9IHZlYygpOyAgICAgIC8vICgwLCAwKVxuICovXG5jb25zdCB2ZWMgPSAoeCwgeSkgPT4gKCF4ICYmICF5ID9cbiAgeyB4OiAwLCB5OiAwIH0gOiAodHlwZW9mIHggPT09ICdvYmplY3QnID9cbiAgICB7IHg6IHgueCB8fCAwLCB5OiB4LnkgfHwgMCB9IDogKHkgPT09IG51bGwgfHwgeSA9PT0gdW5kZWZpbmVkID9cbiAgICAgIHsgeDogeCwgeTogeCB9IDogeyB4OiB4LCB5OiB5IH0pXG4gIClcbik7XG5cbi8qKlxuICogR2V0IHRoZSBjb21wb25lbnRzIG9mIGEgdmVjdG9yIGFzIGFuIGFycmF5XG4gKiBAcGFyYW0ge3ZlY30gYSBUaGUgdmVjdG9yIHRvIGdldCBjb21wb25lbnRzIGZyb21cbiAqIEByZXR1cm4ge0FycmF5PG51bWJlcj59IFRoZSB2ZWN0b3IgY29tcG9uZW50cyBhcyBhbiBhcnJheVxuICovXG52ZWMuY29tcG9uZW50cyA9IGEgPT4gW2EueCwgYS55XTtcblxuLyoqXG4gKiBSZXR1cm4gYSB1bml0IHZlY3RvciAoMSwgMClcbiAqIEByZXR1cm4ge3ZlY30gQSB1bml0IHZlY3RvciAoMSwgMClcbiAqL1xudmVjLnV4ID0gKCkgPT4gdmVjKDEsIDApO1xuXG4vKipcbiAqIFJldHVybiBhIHVuaXQgdmVjdG9yICgwLCAxKVxuICogQHJldHVybiB7dmVjfSBBIHVuaXQgdmVjdG9yICgwLCAxKVxuICovXG52ZWMudXkgPSAoKSA9PiB2ZWMoMCwgMSk7XG5cbi8qKlxuICogQWRkIHZlY3RvcnNcbiAqIEBwYXJhbSB7dmVjfSBhIFZlY3RvciBhXG4gKiBAcGFyYW0ge3ZlY30gYiBWZWN0b3IgYlxuICogQHJldHVybiB7dmVjfSBhICsgYlxuICovXG52ZWMuYWRkID0gKGEsIGIpID0+ICh7IHg6IGEueCArIGIueCwgeTogYS55ICsgYi55IH0pO1xuXG4vKipcbiAqIFNjYWxlIGEgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlY30gYSBWZWN0b3IgYVxuICogQHBhcmFtIHtudW1iZXJ9IGIgU2NhbGFyIGJcbiAqIEByZXR1cm4ge3ZlY30gYSAqIGJcbiAqL1xudmVjLm11bCA9IChhLCBiKSA9PiAoeyB4OiBhLnggKiBiLCB5OiBhLnkgKiBiIH0pO1xuXG4vKipcbiAqIFN1YnRyYWN0IHZlY3RvcnNcbiAqIEBwYXJhbSB7dmVjfSBhIFZlY3RvciBhXG4gKiBAcGFyYW0ge3ZlY30gYiBWZWN0b3IgYlxuICogQHJldHVybiB7dmVjfSBhIC0gYlxuICovXG52ZWMuc3ViID0gKGEsIGIpID0+ICh7IHg6IGEueCAtIGIueCwgeTogYS55IC0gYi55IH0pO1xuXG4vKipcbiAqIEdldCB0aGUgbGVuZ3RoIG9mIGEgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlY30gYSBWZWN0b3IgYVxuICogQHJldHVybiB7bnVtYmVyfSB8YXxcbiAqL1xudmVjLmxlbiA9IGEgPT4gTWF0aC5zcXJ0KGEueCAqIGEueCArIGEueSAqIGEueSk7XG5cbi8qKlxuICogR2V0IHRoZSBsZW5ndGggb2YgYSB2ZWN0b3IgdXNpbmcgdGF4aWNhYiBnZW9tZXRyeVxuICogQHBhcmFtIHt2ZWN9IGEgVmVjdG9yIGFcbiAqIEByZXR1cm4ge251bWJlcn0gfGF8XG4gKi9cbnZlYy5tYW5oYXR0YW4gPSBhID0+IE1hdGguYWJzKGEueCkgKyBNYXRoLmFicyhhLnkpO1xuXG4vKipcbiAqIE5vcm1hbGlzZSBhIHZlY3RvclxuICogQHBhcmFtIHt2ZWN9IGEgVGhlIHZlY3RvciB0byBub3JtYWxpc2VcbiAqIEByZXR1cm4ge3ZlY30gXmFcbiAqL1xudmVjLm5vciA9IGEgPT4ge1xuICBsZXQgbGVuID0gdmVjLmxlbihhKTtcbiAgcmV0dXJuIGxlbiA/IHsgeDogYS54IC8gbGVuLCB5OiBhLnkgLyBsZW4gfSA6IHZlYygpO1xufTtcblxuLyoqXG4gKiBHZXQgYSBkb3QgcHJvZHVjdCBvZiB2ZWN0b3JzXG4gKiBAcGFyYW0ge3ZlY30gYSBWZWN0b3IgYVxuICogQHBhcmFtIHt2ZWN9IGIgVmVjdG9yIGJcbiAqIEByZXR1cm4ge251bWJlcn0gYSDiiJkgYlxuICovXG52ZWMuZG90ID0gKGEsIGIpID0+IGEueCAqIGIueCArIGEueSAqIGIueTtcblxuLyoqXG4gKiBSb3RhdGUgYSB2ZWN0b3IgYnkgciByYWRpYW5zXG4gKiBAcGFyYW0ge3ZlY30gYSBUaGUgdmVjdG9yIHRvIHJvdGF0ZVxuICogQHBhcmFtIHtudW1iZXJ9IHIgVGhlIGFuZ2xlIHRvIHJvdGF0ZSBieSwgbWVhc3VyZWQgaW4gcmFkaWFuc1xuICogQHJldHVybiB7dmVjfSBBIHJvdGF0ZWQgdmVjdG9yXG4gKi9cbnZlYy5yb3QgPSAoYSwgcikgPT4ge1xuICBsZXQgcyA9IE1hdGguc2luKHIpLFxuICAgIGMgPSBNYXRoLmNvcyhyKTtcbiAgcmV0dXJuIHsgeDogYyAqIGEueCAtIHMgKiBhLnksIHk6IHMgKiBhLnggKyBjICogYS55IH07XG59XG5cbi8qKlxuICogQ2hlY2sgaWYgdHdvIHZlY3RvcnMgYXJlIGVxdWFsXG4gKiBAcGFyYW0ge3ZlY30gYSBWZWN0b3IgYVxuICogQHBhcmFtIHt2ZWN9IGIgVmVjdG9yIGJcbiAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgdmVjdG9ycyBhIGFuZCBiIGFyZSBlcXVhbCwgZmFsc2Ugb3RoZXJ3aXNlXG4gKi9cbnZlYy5lcSA9IChhLCBiKSA9PiBhLnggPT09IGIueCAmJiBhLnkgPT09IGIueTtcblxuLyoqXG4gKiBHZXQgdGhlIGFuZ2xlIG9mIGEgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlY30gYSBWZWN0b3IgYVxuICogQHJldHVybiB7bnVtYmVyfSBUaGUgYW5nbGUgb2YgdmVjdG9yIGEgaW4gcmFkaWFuc1xuICovXG52ZWMucmFkID0gYSA9PiBNYXRoLmF0YW4yKGEueSwgYS54KTtcblxuLyoqXG4gKiBDb3B5IGEgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlY30gYSBUaGUgdmVjdG9yIHRvIGNvcHlcbiAqIEByZXR1cm4ge3ZlY30gQSBjb3B5IG9mIHZlY3RvciBhXG4gKi9cbnZlYy5jcHkgPSBhID0+IHZlYyhhKTtcblxuLyoqXG4gKiBBIGZ1bmN0aW9uIHRvIGNhbGwgb24gZWFjaCBjb21wb25lbnQgb2YgYSB2ZWN0b3JcbiAqIEBjYWxsYmFjayB2ZWN0b3JNYXBDYWxsYmFja1xuICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlIFRoZSBjb21wb25lbnQgdmFsdWVcbiAqIEBwYXJhbSB7J3gnIHwgJ3knfSBsYWJlbCBUaGUgY29tcG9uZW50IGxhYmVsICh4IG9yIHkpXG4gKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBtYXBwZWQgY29tcG9uZW50XG4gKi9cblxuLyoqXG4gKiBDYWxsIGEgZnVuY3Rpb24gb24gZWFjaCBjb21wb25lbnQgb2YgYSB2ZWN0b3IgYW5kIGJ1aWxkIGEgbmV3IHZlY3RvciBmcm9tIHRoZSByZXN1bHRzXG4gKiBAcGFyYW0ge3ZlY30gYSBWZWN0b3IgYVxuICogQHBhcmFtIHt2ZWN0b3JNYXBDYWxsYmFja30gZiBUaGUgZnVuY3Rpb24gdG8gY2FsbCBvbiBlYWNoIGNvbXBvbmVudCBvZiB0aGUgdmVjdG9yXG4gKiBAcmV0dXJuIHt2ZWN9IFZlY3RvciBhIG1hcHBlZCB0aHJvdWdoIGZcbiAqL1xudmVjLm1hcCA9IChhLCBmKSA9PiAoeyB4OiBmKGEueCwgJ3gnKSwgeTogZihhLnksICd5JykgfSk7XG5cbi8qKlxuICogQ29udmVydCBhIHZlY3RvciBpbnRvIGEgc3RyaW5nXG4gKiBAcGFyYW0ge3ZlY30gYSBUaGUgdmVjdG9yIHRvIGNvbnZlcnRcbiAqIEBwYXJhbSB7c3RyaW5nfSBbcz0nLCAnXSBUaGUgc2VwYXJhdG9yIHN0cmluZ1xuICogQHJldHVybiB7c3RyaW5nfSBBIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgdmVjdG9yXG4gKi9cbnZlYy5zdHIgPSAoYSwgcyA9ICcsICcpID0+IGAke2EueH0ke3N9JHthLnl9YDtcblxuLyoqXG4gKiBBIG1hdHJpeFxuICogQHR5cGVkZWYge09iamVjdH0gbWF0XG4gKiBAcHJvcGVydHkge251bWJlcn0gbSBUaGUgbnVtYmVyIG9mIHJvd3MgaW4gdGhlIG1hdHJpeFxuICogQHByb3BlcnR5IHtudW1iZXJ9IG4gVGhlIG51bWJlciBvZiBjb2x1bW5zIGluIHRoZSBtYXRyaXhcbiAqIEBwcm9wZXJ0eSB7QXJyYXk8bnVtYmVyPn0gZW50cmllcyBUaGUgbWF0cml4IHZhbHVlc1xuICovXG5cbi8qKlxuICogQ3JlYXRlIGEgbmV3IG1hdHJpeFxuICogQHBhcmFtIHtudW1iZXJ9IFttPTRdIFRoZSBudW1iZXIgb2Ygcm93c1xuICogQHBhcmFtIHtudW1iZXJ9IFtuPTRdIFRoZSBudW1iZXIgb2YgY29sdW1uc1xuICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSBbZW50cmllcz1bXV0gTWF0cml4IHZhbHVlcyBpbiByZWFkaW5nIG9yZGVyXG4gKiBAcmV0dXJuIHttYXR9IEEgbmV3IG1hdHJpeFxuICovXG5jb25zdCBtYXQgPSAobSA9IDQsIG4gPSA0LCBlbnRyaWVzID0gW10pID0+ICh7XG4gIG0sIG4sXG4gIGVudHJpZXM6IGVudHJpZXMuY29uY2F0KEFycmF5KG0gKiBuKS5maWxsKDApKS5zbGljZSgwLCBtICogbilcbn0pO1xuXG4vKipcbiAqIEdldCBhbiBpZGVudGl0eSBtYXRyaXggb2Ygc2l6ZSBuXG4gKiBAcGFyYW0ge251bWJlcn0gbiBUaGUgc2l6ZSBvZiB0aGUgbWF0cml4XG4gKiBAcmV0dXJuIHttYXR9IEFuIGlkZW50aXR5IG1hdHJpeFxuICovXG5tYXQuaWRlbnRpdHkgPSBuID0+IG1hdChuLCBuLCBBcnJheShuICogbikuZmlsbCgwKS5tYXAoKHYsIGkpID0+ICsoTWF0aC5mbG9vcihpIC8gbikgPT09IGkgJSBuKSkpO1xuXG4vKipcbiAqIEdldCBhbiBlbnRyeSBmcm9tIGEgbWF0cml4XG4gKiBAcGFyYW0ge21hdH0gYSBNYXRyaXggYVxuICogQHBhcmFtIHtudW1iZXJ9IGkgVGhlIHJvdyBvZmZzZXRcbiAqIEBwYXJhbSB7bnVtYmVyfSBqIFRoZSBjb2x1bW4gb2Zmc2V0XG4gKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSB2YWx1ZSBhdCBwb3NpdGlvbiAoaSwgaikgaW4gbWF0cml4IGFcbiAqL1xubWF0LmdldCA9IChhLCBpLCBqKSA9PiBhLmVudHJpZXNbKGogLSAxKSArIChpIC0gMSkgKiBhLm5dO1xuXG4vKipcbiAqIFNldCBhbiBlbnRyeSBvZiBhIG1hdHJpeFxuICogQHBhcmFtIHttYXR9IGEgTWF0cml4IGFcbiAqIEBwYXJhbSB7bnVtYmVyfSBpIFRoZSByb3cgb2Zmc2V0XG4gKiBAcGFyYW0ge251bWJlcn0gaiBUaGUgY29sdW1uIG9mZnNldFxuICogQHBhcmFtIHtudW1iZXJ9IHYgVGhlIHZhbHVlIHRvIHNldCBpbiBtYXRyaXggYVxuICovXG5tYXQuc2V0ID0gKGEsIGksIGosIHYpID0+IHsgYS5lbnRyaWVzWyhqIC0gMSkgKyAoaSAtIDEpICogYS5uXSA9IHY7IH07XG5cbi8qKlxuICogR2V0IGEgcm93IGZyb20gYSBtYXRyaXggYXMgYW4gYXJyYXlcbiAqIEBwYXJhbSB7bWF0fSBhIE1hdHJpeCBhXG4gKiBAcGFyYW0ge251bWJlcn0gbSBUaGUgcm93IG9mZnNldFxuICogQHJldHVybiB7QXJyYXk8bnVtYmVyPn0gUm93IG0gZnJvbSBtYXRyaXggYVxuICovXG5tYXQucm93ID0gKGEsIG0pID0+IHtcbiAgY29uc3QgcyA9IChtIC0gMSkgKiBhLm47XG4gIHJldHVybiBhLmVudHJpZXMuc2xpY2UocywgcyArIGEubik7XG59O1xuXG4vKipcbiAqIEdldCBhIGNvbHVtbiBmcm9tIGEgbWF0cml4IGFzIGFuIGFycmF5XG4gKiBAcGFyYW0ge21hdH0gYSBNYXRyaXggYVxuICogQHBhcmFtIHtudW1iZXJ9IG4gVGhlIGNvbHVtbiBvZmZzZXRcbiAqIEByZXR1cm4ge0FycmF5PG51bWJlcj59IENvbHVtbiBuIGZyb20gbWF0cml4IGFcbiAqL1xubWF0LmNvbCA9IChhLCBuKSA9PiB0aW1lcyhpID0+IG1hdC5nZXQoYSwgKGkgKyAxKSwgbiksIGEubSk7XG5cbi8qKlxuICogQWRkIG1hdHJpY2VzXG4gKiBAcGFyYW0ge21hdH0gYSBNYXRyaXggYVxuICogQHBhcmFtIHttYXR9IGIgTWF0cml4IGJcbiAqIEByZXR1cm4ge21hdH0gYSArIGJcbiAqL1xubWF0LmFkZCA9IChhLCBiKSA9PiBhLm0gPT09IGIubSAmJiBhLm4gPT09IGIubiAmJiBtYXQubWFwKGEsICh2LCBpKSA9PiB2ICsgYi5lbnRyaWVzW2ldKTtcblxuLyoqXG4gKiBTdWJ0cmFjdCBtYXRyaWNlc1xuICogQHBhcmFtIHttYXR9IGEgTWF0cml4IGFcbiAqIEBwYXJhbSB7bWF0fSBiIE1hdHJpeCBiXG4gKiBAcmV0dXJuIHttYXR9IGEgLSBiXG4gKi9cbm1hdC5zdWIgPSAoYSwgYikgPT4gYS5tID09PSBiLm0gJiYgYS5uID09PSBiLm4gJiYgbWF0Lm1hcChhLCAodiwgaSkgPT4gdiAtIGIuZW50cmllc1tpXSk7XG5cbi8qKlxuICogTXVsdGlwbHkgbWF0cmljZXNcbiAqIEBwYXJhbSB7bWF0fSBhIE1hdHJpeCBhXG4gKiBAcGFyYW0ge21hdH0gYiBNYXRyaXggYlxuICogQHJldHVybiB7bWF0fGJvb2xlYW59IGFiIG9yIGZhbHNlIGlmIHRoZSBtYXRyaWNlcyBjYW5ub3QgYmUgbXVsdGlwbGllZFxuICovXG5tYXQubXVsID0gKGEsIGIpID0+IHtcbiAgaWYgKGEubiAhPT0gYi5tKSB7IHJldHVybiBmYWxzZTsgfVxuICBjb25zdCByZXN1bHQgPSBtYXQoYS5tLCBiLm4pO1xuICBmb3IgKGxldCBpID0gMTsgaSA8PSBhLm07IGkrKykge1xuICAgIGZvciAobGV0IGogPSAxOyBqIDw9IGIubjsgaisrKSB7XG4gICAgICBtYXQuc2V0KHJlc3VsdCwgaSwgaiwgZG90KG1hdC5yb3coYSwgaSksIG1hdC5jb2woYiwgaikpKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbi8qKlxuICogU2NhbGUgYSBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0fSBhIE1hdHJpeCBhXG4gKiBAcGFyYW0ge251bWJlcn0gYiBTY2FsYXIgYlxuICogQHJldHVybiB7bWF0fSBhICogYlxuICovXG5tYXQuc2NhbGUgPSAoYSwgYikgPT4gbWF0Lm1hcChhLCB2ID0+IHYgKiBiKTtcblxuLyoqXG4gKiBUcmFuc3Bvc2UgYSBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0fSBhIFRoZSBtYXRyaXggdG8gdHJhbnNwb3NlXG4gKiBAcmV0dXJuIHttYXR9IEEgdHJhbnNwb3NlZCBtYXRyaXhcbiAqL1xubWF0LnRyYW5zID0gYSA9PiBtYXQoYS5uLCBhLm0sIHRpbWVzKGkgPT4gbWF0LmNvbChhLCAoaSArIDEpKSwgYS5uKS5mbGF0KCkpO1xuXG4vKipcbiAqIEdldCB0aGUgbWlub3Igb2YgYSBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0fSBhIE1hdHJpeCBhXG4gKiBAcGFyYW0ge251bWJlcn0gaSBUaGUgcm93IG9mZnNldFxuICogQHBhcmFtIHtudW1iZXJ9IGogVGhlIGNvbHVtbiBvZmZzZXRcbiAqIEByZXR1cm4ge21hdHxib29sZWFufSBUaGUgKGksIGopIG1pbm9yIG9mIG1hdHJpeCBhIG9yIGZhbHNlIGlmIHRoZSBtYXRyaXggaXMgbm90IHNxdWFyZVxuICovXG5tYXQubWlub3IgPSAoYSwgaSwgaikgPT4ge1xuICBpZiAoYS5tICE9PSBhLm4pIHsgcmV0dXJuIGZhbHNlOyB9XG4gIGNvbnN0IGVudHJpZXMgPSBbXTtcbiAgZm9yIChsZXQgaWkgPSAxOyBpaSA8PSBhLm07IGlpKyspIHtcbiAgICBpZiAoaWkgPT09IGkpIHsgY29udGludWU7IH1cbiAgICBmb3IgKGxldCBqaiA9IDE7IGpqIDw9IGEubjsgamorKykge1xuICAgICAgaWYgKGpqID09PSBqKSB7IGNvbnRpbnVlOyB9XG4gICAgICBlbnRyaWVzLnB1c2gobWF0LmdldChhLCBpaSwgamopKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG1hdChhLm0gLSAxLCBhLm4gLSAxLCBlbnRyaWVzKTtcbn07XG5cbi8qKlxuICogR2V0IHRoZSBkZXRlcm1pbmFudCBvZiBhIG1hdHJpeFxuICogQHBhcmFtIHttYXR9IGEgTWF0cml4IGFcbiAqIEByZXR1cm4ge251bWJlcnxib29sZWFufSB8YXwgb3IgZmFsc2UgaWYgdGhlIG1hdHJpeCBpcyBub3Qgc3F1YXJlXG4gKi9cbm1hdC5kZXQgPSBhID0+IHtcbiAgaWYgKGEubSAhPT0gYS5uKSB7IHJldHVybiBmYWxzZTsgfVxuICBpZiAoYS5tID09PSAxKSB7XG4gICAgcmV0dXJuIGEuZW50cmllc1swXTtcbiAgfVxuICBpZiAoYS5tID09PSAyKSB7XG4gICAgcmV0dXJuIGEuZW50cmllc1swXSAqIGEuZW50cmllc1szXSAtIGEuZW50cmllc1sxXSAqIGEuZW50cmllc1syXTtcbiAgfVxuICBsZXQgdG90YWwgPSAwLCBzaWduID0gMTtcbiAgZm9yIChsZXQgaiA9IDE7IGogPD0gYS5uOyBqKyspIHtcbiAgICB0b3RhbCArPSBzaWduICogYS5lbnRyaWVzW2ogLSAxXSAqIG1hdC5kZXQobWF0Lm1pbm9yKGEsIDEsIGopKTtcbiAgICBzaWduICo9IC0xO1xuICB9XG4gIHJldHVybiB0b3RhbDtcbn07XG5cbi8qKlxuICogTm9ybWFsaXNlIGEgbWF0cml4XG4gKiBAcGFyYW0ge21hdH0gYSBUaGUgbWF0cml4IHRvIG5vcm1hbGlzZVxuICogQHJldHVybiB7bWF0fGJvb2xlYW59IF5hIG9yIGZhbHNlIGlmIHRoZSBtYXRyaXggaXMgbm90IHNxdWFyZVxuICovXG5tYXQubm9yID0gYSA9PiB7XG4gIGlmIChhLm0gIT09IGEubikgeyByZXR1cm4gZmFsc2U7IH1cbiAgY29uc3QgZCA9IG1hdC5kZXQoYSk7XG4gIHJldHVybiBtYXQubWFwKGEsIGkgPT4gaSAqIGQpO1xufTtcblxuLyoqXG4gKiBHZXQgdGhlIGFkanVnYXRlIG9mIGEgbWF0cml4XG4gKiBAcGFyYW0ge21hdH0gYSBUaGUgbWF0cml4IGZyb20gd2hpY2ggdG8gZ2V0IHRoZSBhZGp1Z2F0ZVxuICogQHJldHVybiB7bWF0fSBUaGUgYWRqdWdhdGUgb2YgYVxuICovXG5tYXQuYWRqID0gYSA9PiB7XG4gIGNvbnN0IG1pbm9ycyA9IG1hdChhLm0sIGEubik7XG4gIGZvciAobGV0IGkgPSAxOyBpIDw9IGEubTsgaSsrKSB7XG4gICAgZm9yIChsZXQgaiA9IDE7IGogPD0gYS5uOyBqKyspIHtcbiAgICAgIG1hdC5zZXQobWlub3JzLCBpLCBqLCBtYXQuZGV0KG1hdC5taW5vcihhLCBpLCBqKSkpO1xuICAgIH1cbiAgfVxuICBjb25zdCBjb2ZhY3RvcnMgPSBtYXQubWFwKG1pbm9ycywgKHYsIGkpID0+IHYgKiAoaSAlIDIgPyAtMSA6IDEpKTtcbiAgcmV0dXJuIG1hdC50cmFucyhjb2ZhY3RvcnMpO1xufTtcblxuLyoqXG4gKiBHZXQgdGhlIGludmVyc2Ugb2YgYSBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0fSBhIFRoZSBtYXRyaXggdG8gaW52ZXJ0XG4gKiBAcmV0dXJuIHttYXR8Ym9vbGVhbn0gYV4tMSBvciBmYWxzZSBpZiB0aGUgbWF0cml4IGhhcyBubyBpbnZlcnNlXG4gKi9cbm1hdC5pbnYgPSBhID0+IHtcbiAgaWYgKGEubSAhPT0gYS5uKSB7IHJldHVybiBmYWxzZTsgfVxuICBjb25zdCBkID0gbWF0LmRldChhKTtcbiAgaWYgKGQgPT09IDApIHsgcmV0dXJuIGZhbHNlOyB9XG4gIHJldHVybiBtYXQuc2NhbGUobWF0LmFkaihhKSwgMSAvIGQpO1xufTtcblxuLyoqXG4gKiBDaGVjayBpZiB0d28gbWF0cmljZXMgYXJlIGVxdWFsXG4gKiBAcGFyYW0ge21hdH0gYSBNYXRyaXggYVxuICogQHBhcmFtIHttYXR9IGIgTWF0cml4IGJcbiAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgbWF0cmljZXMgYSBhbmQgYiBhcmUgaWRlbnRpY2FsLCBmYWxzZSBvdGhlcndpc2VcbiAqL1xubWF0LmVxID0gKGEsIGIpID0+IGEubSA9PT0gYi5tICYmIGEubiA9PT0gYi5uICYmIG1hdC5zdHIoYSkgPT09IG1hdC5zdHIoYik7XG5cbi8qKlxuICogQ29weSBhIG1hdHJpeFxuICogQHBhcmFtIHttYXR9IGEgVGhlIG1hdHJpeCB0byBjb3B5XG4gKiBAcmV0dXJuIHttYXR9IEEgY29weSBvZiBtYXRyaXggYVxuICovXG5tYXQuY3B5ID0gYSA9PiBtYXQoYS5tLCBhLm4sIFsuLi5hLmVudHJpZXNdKTtcblxuLyoqXG4gKiBBIGZ1bmN0aW9uIHRvIGNhbGwgb24gZWFjaCBlbnRyeSBvZiBhIG1hdHJpeFxuICogQGNhbGxiYWNrIG1hdHJpeE1hcENhbGxiYWNrXG4gKiBAcGFyYW0ge251bWJlcn0gdmFsdWUgVGhlIGVudHJ5IHZhbHVlXG4gKiBAcGFyYW0ge251bWJlcn0gaW5kZXggVGhlIGVudHJ5IGluZGV4XG4gKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IGVudHJpZXMgVGhlIGFycmF5IG9mIG1hdHJpeCBlbnRyaWVzXG4gKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBtYXBwZWQgZW50cnlcbiAqL1xuXG4vKipcbiAqIENhbGwgYSBmdW5jdGlvbiBvbiBlYWNoIGVudHJ5IG9mIGEgbWF0cml4IGFuZCBidWlsZCBhIG5ldyBtYXRyaXggZnJvbSB0aGUgcmVzdWx0c1xuICogQHBhcmFtIHttYXR9IGEgTWF0cml4IGFcbiAqIEBwYXJhbSB7bWF0cml4TWFwQ2FsbGJhY2t9IGYgVGhlIGZ1bmN0aW9uIHRvIGNhbGwgb24gZWFjaCBlbnRyeSBvZiB0aGUgbWF0cml4XG4gKiBAcmV0dXJuIHttYXR9IE1hdHJpeCBhIG1hcHBlZCB0aHJvdWdoIGZcbiAqL1xubWF0Lm1hcCA9IChhLCBmKSA9PiBtYXQoYS5tLCBhLm4sIGEuZW50cmllcy5tYXAoZikpO1xuXG4vKipcbiAqIENvbnZlcnQgYSBtYXRyaXggaW50byBhIHN0cmluZ1xuICogQHBhcmFtIHttYXR9IGEgVGhlIG1hdHJpeCB0byBjb252ZXJ0XG4gKiBAcGFyYW0ge3N0cmluZ30gW21zPScsICddIFRoZSBzZXBhcmF0b3Igc3RyaW5nIGZvciBjb2x1bW5zXG4gKiBAcGFyYW0ge3N0cmluZ30gW25zPSdcXG4nXSBUaGUgc2VwYXJhdG9yIHN0cmluZyBmb3Igcm93c1xuICogQHJldHVybiB7c3RyaW5nfSBBIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgbWF0cml4XG4gKi9cbm1hdC5zdHIgPSAoYSwgbXMgPSAnLCAnLCBucyA9ICdcXG4nKSA9PiBjaHVuayhhLmVudHJpZXMsIGEubikubWFwKHIgPT4gci5qb2luKG1zKSkuam9pbihucyk7XG5cbmlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHsgdmVjLCBtYXQgfTtcbn1cbiIsIi8qKlxuICogZGF0LWd1aSBKYXZhU2NyaXB0IENvbnRyb2xsZXIgTGlicmFyeVxuICogaHR0cHM6Ly9naXRodWIuY29tL2RhdGFhcnRzL2RhdC5ndWlcbiAqXG4gKiBDb3B5cmlnaHQgMjAxMSBEYXRhIEFydHMgVGVhbSwgR29vZ2xlIENyZWF0aXZlIExhYlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqL1xuXG5mdW5jdGlvbiBfX18kaW5zZXJ0U3R5bGUoY3NzKSB7XG4gIGlmICghY3NzKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG5cbiAgc3R5bGUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQvY3NzJyk7XG4gIHN0eWxlLmlubmVySFRNTCA9IGNzcztcbiAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cbiAgcmV0dXJuIGNzcztcbn1cblxuZnVuY3Rpb24gY29sb3JUb1N0cmluZyAoY29sb3IsIGZvcmNlQ1NTSGV4KSB7XG4gIHZhciBjb2xvckZvcm1hdCA9IGNvbG9yLl9fc3RhdGUuY29udmVyc2lvbk5hbWUudG9TdHJpbmcoKTtcbiAgdmFyIHIgPSBNYXRoLnJvdW5kKGNvbG9yLnIpO1xuICB2YXIgZyA9IE1hdGgucm91bmQoY29sb3IuZyk7XG4gIHZhciBiID0gTWF0aC5yb3VuZChjb2xvci5iKTtcbiAgdmFyIGEgPSBjb2xvci5hO1xuICB2YXIgaCA9IE1hdGgucm91bmQoY29sb3IuaCk7XG4gIHZhciBzID0gY29sb3Iucy50b0ZpeGVkKDEpO1xuICB2YXIgdiA9IGNvbG9yLnYudG9GaXhlZCgxKTtcbiAgaWYgKGZvcmNlQ1NTSGV4IHx8IGNvbG9yRm9ybWF0ID09PSAnVEhSRUVfQ0hBUl9IRVgnIHx8IGNvbG9yRm9ybWF0ID09PSAnU0lYX0NIQVJfSEVYJykge1xuICAgIHZhciBzdHIgPSBjb2xvci5oZXgudG9TdHJpbmcoMTYpO1xuICAgIHdoaWxlIChzdHIubGVuZ3RoIDwgNikge1xuICAgICAgc3RyID0gJzAnICsgc3RyO1xuICAgIH1cbiAgICByZXR1cm4gJyMnICsgc3RyO1xuICB9IGVsc2UgaWYgKGNvbG9yRm9ybWF0ID09PSAnQ1NTX1JHQicpIHtcbiAgICByZXR1cm4gJ3JnYignICsgciArICcsJyArIGcgKyAnLCcgKyBiICsgJyknO1xuICB9IGVsc2UgaWYgKGNvbG9yRm9ybWF0ID09PSAnQ1NTX1JHQkEnKSB7XG4gICAgcmV0dXJuICdyZ2JhKCcgKyByICsgJywnICsgZyArICcsJyArIGIgKyAnLCcgKyBhICsgJyknO1xuICB9IGVsc2UgaWYgKGNvbG9yRm9ybWF0ID09PSAnSEVYJykge1xuICAgIHJldHVybiAnMHgnICsgY29sb3IuaGV4LnRvU3RyaW5nKDE2KTtcbiAgfSBlbHNlIGlmIChjb2xvckZvcm1hdCA9PT0gJ1JHQl9BUlJBWScpIHtcbiAgICByZXR1cm4gJ1snICsgciArICcsJyArIGcgKyAnLCcgKyBiICsgJ10nO1xuICB9IGVsc2UgaWYgKGNvbG9yRm9ybWF0ID09PSAnUkdCQV9BUlJBWScpIHtcbiAgICByZXR1cm4gJ1snICsgciArICcsJyArIGcgKyAnLCcgKyBiICsgJywnICsgYSArICddJztcbiAgfSBlbHNlIGlmIChjb2xvckZvcm1hdCA9PT0gJ1JHQl9PQkonKSB7XG4gICAgcmV0dXJuICd7cjonICsgciArICcsZzonICsgZyArICcsYjonICsgYiArICd9JztcbiAgfSBlbHNlIGlmIChjb2xvckZvcm1hdCA9PT0gJ1JHQkFfT0JKJykge1xuICAgIHJldHVybiAne3I6JyArIHIgKyAnLGc6JyArIGcgKyAnLGI6JyArIGIgKyAnLGE6JyArIGEgKyAnfSc7XG4gIH0gZWxzZSBpZiAoY29sb3JGb3JtYXQgPT09ICdIU1ZfT0JKJykge1xuICAgIHJldHVybiAne2g6JyArIGggKyAnLHM6JyArIHMgKyAnLHY6JyArIHYgKyAnfSc7XG4gIH0gZWxzZSBpZiAoY29sb3JGb3JtYXQgPT09ICdIU1ZBX09CSicpIHtcbiAgICByZXR1cm4gJ3toOicgKyBoICsgJyxzOicgKyBzICsgJyx2OicgKyB2ICsgJyxhOicgKyBhICsgJ30nO1xuICB9XG4gIHJldHVybiAndW5rbm93biBmb3JtYXQnO1xufVxuXG52YXIgQVJSX0VBQ0ggPSBBcnJheS5wcm90b3R5cGUuZm9yRWFjaDtcbnZhciBBUlJfU0xJQ0UgPSBBcnJheS5wcm90b3R5cGUuc2xpY2U7XG52YXIgQ29tbW9uID0ge1xuICBCUkVBSzoge30sXG4gIGV4dGVuZDogZnVuY3Rpb24gZXh0ZW5kKHRhcmdldCkge1xuICAgIHRoaXMuZWFjaChBUlJfU0xJQ0UuY2FsbChhcmd1bWVudHMsIDEpLCBmdW5jdGlvbiAob2JqKSB7XG4gICAgICB2YXIga2V5cyA9IHRoaXMuaXNPYmplY3Qob2JqKSA/IE9iamVjdC5rZXlzKG9iaikgOiBbXTtcbiAgICAgIGtleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIGlmICghdGhpcy5pc1VuZGVmaW5lZChvYmpba2V5XSkpIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IG9ialtrZXldO1xuICAgICAgICB9XG4gICAgICB9LmJpbmQodGhpcykpO1xuICAgIH0sIHRoaXMpO1xuICAgIHJldHVybiB0YXJnZXQ7XG4gIH0sXG4gIGRlZmF1bHRzOiBmdW5jdGlvbiBkZWZhdWx0cyh0YXJnZXQpIHtcbiAgICB0aGlzLmVhY2goQVJSX1NMSUNFLmNhbGwoYXJndW1lbnRzLCAxKSwgZnVuY3Rpb24gKG9iaikge1xuICAgICAgdmFyIGtleXMgPSB0aGlzLmlzT2JqZWN0KG9iaikgPyBPYmplY3Qua2V5cyhvYmopIDogW107XG4gICAgICBrZXlzLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICBpZiAodGhpcy5pc1VuZGVmaW5lZCh0YXJnZXRba2V5XSkpIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IG9ialtrZXldO1xuICAgICAgICB9XG4gICAgICB9LmJpbmQodGhpcykpO1xuICAgIH0sIHRoaXMpO1xuICAgIHJldHVybiB0YXJnZXQ7XG4gIH0sXG4gIGNvbXBvc2U6IGZ1bmN0aW9uIGNvbXBvc2UoKSB7XG4gICAgdmFyIHRvQ2FsbCA9IEFSUl9TTElDRS5jYWxsKGFyZ3VtZW50cyk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBhcmdzID0gQVJSX1NMSUNFLmNhbGwoYXJndW1lbnRzKTtcbiAgICAgIGZvciAodmFyIGkgPSB0b0NhbGwubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgYXJncyA9IFt0b0NhbGxbaV0uYXBwbHkodGhpcywgYXJncyldO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGFyZ3NbMF07XG4gICAgfTtcbiAgfSxcbiAgZWFjaDogZnVuY3Rpb24gZWFjaChvYmosIGl0ciwgc2NvcGUpIHtcbiAgICBpZiAoIW9iaikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoQVJSX0VBQ0ggJiYgb2JqLmZvckVhY2ggJiYgb2JqLmZvckVhY2ggPT09IEFSUl9FQUNIKSB7XG4gICAgICBvYmouZm9yRWFjaChpdHIsIHNjb3BlKTtcbiAgICB9IGVsc2UgaWYgKG9iai5sZW5ndGggPT09IG9iai5sZW5ndGggKyAwKSB7XG4gICAgICB2YXIga2V5ID0gdm9pZCAwO1xuICAgICAgdmFyIGwgPSB2b2lkIDA7XG4gICAgICBmb3IgKGtleSA9IDAsIGwgPSBvYmoubGVuZ3RoOyBrZXkgPCBsOyBrZXkrKykge1xuICAgICAgICBpZiAoa2V5IGluIG9iaiAmJiBpdHIuY2FsbChzY29wZSwgb2JqW2tleV0sIGtleSkgPT09IHRoaXMuQlJFQUspIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZm9yICh2YXIgX2tleSBpbiBvYmopIHtcbiAgICAgICAgaWYgKGl0ci5jYWxsKHNjb3BlLCBvYmpbX2tleV0sIF9rZXkpID09PSB0aGlzLkJSRUFLKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9LFxuICBkZWZlcjogZnVuY3Rpb24gZGVmZXIoZm5jKSB7XG4gICAgc2V0VGltZW91dChmbmMsIDApO1xuICB9LFxuICBkZWJvdW5jZTogZnVuY3Rpb24gZGVib3VuY2UoZnVuYywgdGhyZXNob2xkLCBjYWxsSW1tZWRpYXRlbHkpIHtcbiAgICB2YXIgdGltZW91dCA9IHZvaWQgMDtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIG9iaiA9IHRoaXM7XG4gICAgICB2YXIgYXJncyA9IGFyZ3VtZW50cztcbiAgICAgIGZ1bmN0aW9uIGRlbGF5ZWQoKSB7XG4gICAgICAgIHRpbWVvdXQgPSBudWxsO1xuICAgICAgICBpZiAoIWNhbGxJbW1lZGlhdGVseSkgZnVuYy5hcHBseShvYmosIGFyZ3MpO1xuICAgICAgfVxuICAgICAgdmFyIGNhbGxOb3cgPSBjYWxsSW1tZWRpYXRlbHkgfHwgIXRpbWVvdXQ7XG4gICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgICB0aW1lb3V0ID0gc2V0VGltZW91dChkZWxheWVkLCB0aHJlc2hvbGQpO1xuICAgICAgaWYgKGNhbGxOb3cpIHtcbiAgICAgICAgZnVuYy5hcHBseShvYmosIGFyZ3MpO1xuICAgICAgfVxuICAgIH07XG4gIH0sXG4gIHRvQXJyYXk6IGZ1bmN0aW9uIHRvQXJyYXkob2JqKSB7XG4gICAgaWYgKG9iai50b0FycmF5KSByZXR1cm4gb2JqLnRvQXJyYXkoKTtcbiAgICByZXR1cm4gQVJSX1NMSUNFLmNhbGwob2JqKTtcbiAgfSxcbiAgaXNVbmRlZmluZWQ6IGZ1bmN0aW9uIGlzVW5kZWZpbmVkKG9iaikge1xuICAgIHJldHVybiBvYmogPT09IHVuZGVmaW5lZDtcbiAgfSxcbiAgaXNOdWxsOiBmdW5jdGlvbiBpc051bGwob2JqKSB7XG4gICAgcmV0dXJuIG9iaiA9PT0gbnVsbDtcbiAgfSxcbiAgaXNOYU46IGZ1bmN0aW9uIChfaXNOYU4pIHtcbiAgICBmdW5jdGlvbiBpc05hTihfeCkge1xuICAgICAgcmV0dXJuIF9pc05hTi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgICBpc05hTi50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBfaXNOYU4udG9TdHJpbmcoKTtcbiAgICB9O1xuICAgIHJldHVybiBpc05hTjtcbiAgfShmdW5jdGlvbiAob2JqKSB7XG4gICAgcmV0dXJuIGlzTmFOKG9iaik7XG4gIH0pLFxuICBpc0FycmF5OiBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gb2JqLmNvbnN0cnVjdG9yID09PSBBcnJheTtcbiAgfSxcbiAgaXNPYmplY3Q6IGZ1bmN0aW9uIGlzT2JqZWN0KG9iaikge1xuICAgIHJldHVybiBvYmogPT09IE9iamVjdChvYmopO1xuICB9LFxuICBpc051bWJlcjogZnVuY3Rpb24gaXNOdW1iZXIob2JqKSB7XG4gICAgcmV0dXJuIG9iaiA9PT0gb2JqICsgMDtcbiAgfSxcbiAgaXNTdHJpbmc6IGZ1bmN0aW9uIGlzU3RyaW5nKG9iaikge1xuICAgIHJldHVybiBvYmogPT09IG9iaiArICcnO1xuICB9LFxuICBpc0Jvb2xlYW46IGZ1bmN0aW9uIGlzQm9vbGVhbihvYmopIHtcbiAgICByZXR1cm4gb2JqID09PSBmYWxzZSB8fCBvYmogPT09IHRydWU7XG4gIH0sXG4gIGlzRnVuY3Rpb246IGZ1bmN0aW9uIGlzRnVuY3Rpb24ob2JqKSB7XG4gICAgcmV0dXJuIG9iaiBpbnN0YW5jZW9mIEZ1bmN0aW9uO1xuICB9XG59O1xuXG52YXIgSU5URVJQUkVUQVRJT05TID0gW1xue1xuICBsaXRtdXM6IENvbW1vbi5pc1N0cmluZyxcbiAgY29udmVyc2lvbnM6IHtcbiAgICBUSFJFRV9DSEFSX0hFWDoge1xuICAgICAgcmVhZDogZnVuY3Rpb24gcmVhZChvcmlnaW5hbCkge1xuICAgICAgICB2YXIgdGVzdCA9IG9yaWdpbmFsLm1hdGNoKC9eIyhbQS1GMC05XSkoW0EtRjAtOV0pKFtBLUYwLTldKSQvaSk7XG4gICAgICAgIGlmICh0ZXN0ID09PSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgc3BhY2U6ICdIRVgnLFxuICAgICAgICAgIGhleDogcGFyc2VJbnQoJzB4JyArIHRlc3RbMV0udG9TdHJpbmcoKSArIHRlc3RbMV0udG9TdHJpbmcoKSArIHRlc3RbMl0udG9TdHJpbmcoKSArIHRlc3RbMl0udG9TdHJpbmcoKSArIHRlc3RbM10udG9TdHJpbmcoKSArIHRlc3RbM10udG9TdHJpbmcoKSwgMClcbiAgICAgICAgfTtcbiAgICAgIH0sXG4gICAgICB3cml0ZTogY29sb3JUb1N0cmluZ1xuICAgIH0sXG4gICAgU0lYX0NIQVJfSEVYOiB7XG4gICAgICByZWFkOiBmdW5jdGlvbiByZWFkKG9yaWdpbmFsKSB7XG4gICAgICAgIHZhciB0ZXN0ID0gb3JpZ2luYWwubWF0Y2goL14jKFtBLUYwLTldezZ9KSQvaSk7XG4gICAgICAgIGlmICh0ZXN0ID09PSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgc3BhY2U6ICdIRVgnLFxuICAgICAgICAgIGhleDogcGFyc2VJbnQoJzB4JyArIHRlc3RbMV0udG9TdHJpbmcoKSwgMClcbiAgICAgICAgfTtcbiAgICAgIH0sXG4gICAgICB3cml0ZTogY29sb3JUb1N0cmluZ1xuICAgIH0sXG4gICAgQ1NTX1JHQjoge1xuICAgICAgcmVhZDogZnVuY3Rpb24gcmVhZChvcmlnaW5hbCkge1xuICAgICAgICB2YXIgdGVzdCA9IG9yaWdpbmFsLm1hdGNoKC9ecmdiXFwoXFxzKihcXFMrKVxccyosXFxzKihcXFMrKVxccyosXFxzKihcXFMrKVxccypcXCkvKTtcbiAgICAgICAgaWYgKHRlc3QgPT09IG51bGwpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBzcGFjZTogJ1JHQicsXG4gICAgICAgICAgcjogcGFyc2VGbG9hdCh0ZXN0WzFdKSxcbiAgICAgICAgICBnOiBwYXJzZUZsb2F0KHRlc3RbMl0pLFxuICAgICAgICAgIGI6IHBhcnNlRmxvYXQodGVzdFszXSlcbiAgICAgICAgfTtcbiAgICAgIH0sXG4gICAgICB3cml0ZTogY29sb3JUb1N0cmluZ1xuICAgIH0sXG4gICAgQ1NTX1JHQkE6IHtcbiAgICAgIHJlYWQ6IGZ1bmN0aW9uIHJlYWQob3JpZ2luYWwpIHtcbiAgICAgICAgdmFyIHRlc3QgPSBvcmlnaW5hbC5tYXRjaCgvXnJnYmFcXChcXHMqKFxcUyspXFxzKixcXHMqKFxcUyspXFxzKixcXHMqKFxcUyspXFxzKixcXHMqKFxcUyspXFxzKlxcKS8pO1xuICAgICAgICBpZiAodGVzdCA9PT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHNwYWNlOiAnUkdCJyxcbiAgICAgICAgICByOiBwYXJzZUZsb2F0KHRlc3RbMV0pLFxuICAgICAgICAgIGc6IHBhcnNlRmxvYXQodGVzdFsyXSksXG4gICAgICAgICAgYjogcGFyc2VGbG9hdCh0ZXN0WzNdKSxcbiAgICAgICAgICBhOiBwYXJzZUZsb2F0KHRlc3RbNF0pXG4gICAgICAgIH07XG4gICAgICB9LFxuICAgICAgd3JpdGU6IGNvbG9yVG9TdHJpbmdcbiAgICB9XG4gIH1cbn0sXG57XG4gIGxpdG11czogQ29tbW9uLmlzTnVtYmVyLFxuICBjb252ZXJzaW9uczoge1xuICAgIEhFWDoge1xuICAgICAgcmVhZDogZnVuY3Rpb24gcmVhZChvcmlnaW5hbCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHNwYWNlOiAnSEVYJyxcbiAgICAgICAgICBoZXg6IG9yaWdpbmFsLFxuICAgICAgICAgIGNvbnZlcnNpb25OYW1lOiAnSEVYJ1xuICAgICAgICB9O1xuICAgICAgfSxcbiAgICAgIHdyaXRlOiBmdW5jdGlvbiB3cml0ZShjb2xvcikge1xuICAgICAgICByZXR1cm4gY29sb3IuaGV4O1xuICAgICAgfVxuICAgIH1cbiAgfVxufSxcbntcbiAgbGl0bXVzOiBDb21tb24uaXNBcnJheSxcbiAgY29udmVyc2lvbnM6IHtcbiAgICBSR0JfQVJSQVk6IHtcbiAgICAgIHJlYWQ6IGZ1bmN0aW9uIHJlYWQob3JpZ2luYWwpIHtcbiAgICAgICAgaWYgKG9yaWdpbmFsLmxlbmd0aCAhPT0gMykge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHNwYWNlOiAnUkdCJyxcbiAgICAgICAgICByOiBvcmlnaW5hbFswXSxcbiAgICAgICAgICBnOiBvcmlnaW5hbFsxXSxcbiAgICAgICAgICBiOiBvcmlnaW5hbFsyXVxuICAgICAgICB9O1xuICAgICAgfSxcbiAgICAgIHdyaXRlOiBmdW5jdGlvbiB3cml0ZShjb2xvcikge1xuICAgICAgICByZXR1cm4gW2NvbG9yLnIsIGNvbG9yLmcsIGNvbG9yLmJdO1xuICAgICAgfVxuICAgIH0sXG4gICAgUkdCQV9BUlJBWToge1xuICAgICAgcmVhZDogZnVuY3Rpb24gcmVhZChvcmlnaW5hbCkge1xuICAgICAgICBpZiAob3JpZ2luYWwubGVuZ3RoICE9PSA0KSByZXR1cm4gZmFsc2U7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgc3BhY2U6ICdSR0InLFxuICAgICAgICAgIHI6IG9yaWdpbmFsWzBdLFxuICAgICAgICAgIGc6IG9yaWdpbmFsWzFdLFxuICAgICAgICAgIGI6IG9yaWdpbmFsWzJdLFxuICAgICAgICAgIGE6IG9yaWdpbmFsWzNdXG4gICAgICAgIH07XG4gICAgICB9LFxuICAgICAgd3JpdGU6IGZ1bmN0aW9uIHdyaXRlKGNvbG9yKSB7XG4gICAgICAgIHJldHVybiBbY29sb3IuciwgY29sb3IuZywgY29sb3IuYiwgY29sb3IuYV07XG4gICAgICB9XG4gICAgfVxuICB9XG59LFxue1xuICBsaXRtdXM6IENvbW1vbi5pc09iamVjdCxcbiAgY29udmVyc2lvbnM6IHtcbiAgICBSR0JBX09CSjoge1xuICAgICAgcmVhZDogZnVuY3Rpb24gcmVhZChvcmlnaW5hbCkge1xuICAgICAgICBpZiAoQ29tbW9uLmlzTnVtYmVyKG9yaWdpbmFsLnIpICYmIENvbW1vbi5pc051bWJlcihvcmlnaW5hbC5nKSAmJiBDb21tb24uaXNOdW1iZXIob3JpZ2luYWwuYikgJiYgQ29tbW9uLmlzTnVtYmVyKG9yaWdpbmFsLmEpKSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHNwYWNlOiAnUkdCJyxcbiAgICAgICAgICAgIHI6IG9yaWdpbmFsLnIsXG4gICAgICAgICAgICBnOiBvcmlnaW5hbC5nLFxuICAgICAgICAgICAgYjogb3JpZ2luYWwuYixcbiAgICAgICAgICAgIGE6IG9yaWdpbmFsLmFcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH0sXG4gICAgICB3cml0ZTogZnVuY3Rpb24gd3JpdGUoY29sb3IpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICByOiBjb2xvci5yLFxuICAgICAgICAgIGc6IGNvbG9yLmcsXG4gICAgICAgICAgYjogY29sb3IuYixcbiAgICAgICAgICBhOiBjb2xvci5hXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfSxcbiAgICBSR0JfT0JKOiB7XG4gICAgICByZWFkOiBmdW5jdGlvbiByZWFkKG9yaWdpbmFsKSB7XG4gICAgICAgIGlmIChDb21tb24uaXNOdW1iZXIob3JpZ2luYWwucikgJiYgQ29tbW9uLmlzTnVtYmVyKG9yaWdpbmFsLmcpICYmIENvbW1vbi5pc051bWJlcihvcmlnaW5hbC5iKSkge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzcGFjZTogJ1JHQicsXG4gICAgICAgICAgICByOiBvcmlnaW5hbC5yLFxuICAgICAgICAgICAgZzogb3JpZ2luYWwuZyxcbiAgICAgICAgICAgIGI6IG9yaWdpbmFsLmJcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH0sXG4gICAgICB3cml0ZTogZnVuY3Rpb24gd3JpdGUoY29sb3IpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICByOiBjb2xvci5yLFxuICAgICAgICAgIGc6IGNvbG9yLmcsXG4gICAgICAgICAgYjogY29sb3IuYlxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH0sXG4gICAgSFNWQV9PQko6IHtcbiAgICAgIHJlYWQ6IGZ1bmN0aW9uIHJlYWQob3JpZ2luYWwpIHtcbiAgICAgICAgaWYgKENvbW1vbi5pc051bWJlcihvcmlnaW5hbC5oKSAmJiBDb21tb24uaXNOdW1iZXIob3JpZ2luYWwucykgJiYgQ29tbW9uLmlzTnVtYmVyKG9yaWdpbmFsLnYpICYmIENvbW1vbi5pc051bWJlcihvcmlnaW5hbC5hKSkge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzcGFjZTogJ0hTVicsXG4gICAgICAgICAgICBoOiBvcmlnaW5hbC5oLFxuICAgICAgICAgICAgczogb3JpZ2luYWwucyxcbiAgICAgICAgICAgIHY6IG9yaWdpbmFsLnYsXG4gICAgICAgICAgICBhOiBvcmlnaW5hbC5hXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9LFxuICAgICAgd3JpdGU6IGZ1bmN0aW9uIHdyaXRlKGNvbG9yKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgaDogY29sb3IuaCxcbiAgICAgICAgICBzOiBjb2xvci5zLFxuICAgICAgICAgIHY6IGNvbG9yLnYsXG4gICAgICAgICAgYTogY29sb3IuYVxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH0sXG4gICAgSFNWX09CSjoge1xuICAgICAgcmVhZDogZnVuY3Rpb24gcmVhZChvcmlnaW5hbCkge1xuICAgICAgICBpZiAoQ29tbW9uLmlzTnVtYmVyKG9yaWdpbmFsLmgpICYmIENvbW1vbi5pc051bWJlcihvcmlnaW5hbC5zKSAmJiBDb21tb24uaXNOdW1iZXIob3JpZ2luYWwudikpIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc3BhY2U6ICdIU1YnLFxuICAgICAgICAgICAgaDogb3JpZ2luYWwuaCxcbiAgICAgICAgICAgIHM6IG9yaWdpbmFsLnMsXG4gICAgICAgICAgICB2OiBvcmlnaW5hbC52XG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9LFxuICAgICAgd3JpdGU6IGZ1bmN0aW9uIHdyaXRlKGNvbG9yKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgaDogY29sb3IuaCxcbiAgICAgICAgICBzOiBjb2xvci5zLFxuICAgICAgICAgIHY6IGNvbG9yLnZcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1dO1xudmFyIHJlc3VsdCA9IHZvaWQgMDtcbnZhciB0b1JldHVybiA9IHZvaWQgMDtcbnZhciBpbnRlcnByZXQgPSBmdW5jdGlvbiBpbnRlcnByZXQoKSB7XG4gIHRvUmV0dXJuID0gZmFsc2U7XG4gIHZhciBvcmlnaW5hbCA9IGFyZ3VtZW50cy5sZW5ndGggPiAxID8gQ29tbW9uLnRvQXJyYXkoYXJndW1lbnRzKSA6IGFyZ3VtZW50c1swXTtcbiAgQ29tbW9uLmVhY2goSU5URVJQUkVUQVRJT05TLCBmdW5jdGlvbiAoZmFtaWx5KSB7XG4gICAgaWYgKGZhbWlseS5saXRtdXMob3JpZ2luYWwpKSB7XG4gICAgICBDb21tb24uZWFjaChmYW1pbHkuY29udmVyc2lvbnMsIGZ1bmN0aW9uIChjb252ZXJzaW9uLCBjb252ZXJzaW9uTmFtZSkge1xuICAgICAgICByZXN1bHQgPSBjb252ZXJzaW9uLnJlYWQob3JpZ2luYWwpO1xuICAgICAgICBpZiAodG9SZXR1cm4gPT09IGZhbHNlICYmIHJlc3VsdCAhPT0gZmFsc2UpIHtcbiAgICAgICAgICB0b1JldHVybiA9IHJlc3VsdDtcbiAgICAgICAgICByZXN1bHQuY29udmVyc2lvbk5hbWUgPSBjb252ZXJzaW9uTmFtZTtcbiAgICAgICAgICByZXN1bHQuY29udmVyc2lvbiA9IGNvbnZlcnNpb247XG4gICAgICAgICAgcmV0dXJuIENvbW1vbi5CUkVBSztcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gQ29tbW9uLkJSRUFLO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiB0b1JldHVybjtcbn07XG5cbnZhciB0bXBDb21wb25lbnQgPSB2b2lkIDA7XG52YXIgQ29sb3JNYXRoID0ge1xuICBoc3ZfdG9fcmdiOiBmdW5jdGlvbiBoc3ZfdG9fcmdiKGgsIHMsIHYpIHtcbiAgICB2YXIgaGkgPSBNYXRoLmZsb29yKGggLyA2MCkgJSA2O1xuICAgIHZhciBmID0gaCAvIDYwIC0gTWF0aC5mbG9vcihoIC8gNjApO1xuICAgIHZhciBwID0gdiAqICgxLjAgLSBzKTtcbiAgICB2YXIgcSA9IHYgKiAoMS4wIC0gZiAqIHMpO1xuICAgIHZhciB0ID0gdiAqICgxLjAgLSAoMS4wIC0gZikgKiBzKTtcbiAgICB2YXIgYyA9IFtbdiwgdCwgcF0sIFtxLCB2LCBwXSwgW3AsIHYsIHRdLCBbcCwgcSwgdl0sIFt0LCBwLCB2XSwgW3YsIHAsIHFdXVtoaV07XG4gICAgcmV0dXJuIHtcbiAgICAgIHI6IGNbMF0gKiAyNTUsXG4gICAgICBnOiBjWzFdICogMjU1LFxuICAgICAgYjogY1syXSAqIDI1NVxuICAgIH07XG4gIH0sXG4gIHJnYl90b19oc3Y6IGZ1bmN0aW9uIHJnYl90b19oc3YociwgZywgYikge1xuICAgIHZhciBtaW4gPSBNYXRoLm1pbihyLCBnLCBiKTtcbiAgICB2YXIgbWF4ID0gTWF0aC5tYXgociwgZywgYik7XG4gICAgdmFyIGRlbHRhID0gbWF4IC0gbWluO1xuICAgIHZhciBoID0gdm9pZCAwO1xuICAgIHZhciBzID0gdm9pZCAwO1xuICAgIGlmIChtYXggIT09IDApIHtcbiAgICAgIHMgPSBkZWx0YSAvIG1heDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaDogTmFOLFxuICAgICAgICBzOiAwLFxuICAgICAgICB2OiAwXG4gICAgICB9O1xuICAgIH1cbiAgICBpZiAociA9PT0gbWF4KSB7XG4gICAgICBoID0gKGcgLSBiKSAvIGRlbHRhO1xuICAgIH0gZWxzZSBpZiAoZyA9PT0gbWF4KSB7XG4gICAgICBoID0gMiArIChiIC0gcikgLyBkZWx0YTtcbiAgICB9IGVsc2Uge1xuICAgICAgaCA9IDQgKyAociAtIGcpIC8gZGVsdGE7XG4gICAgfVxuICAgIGggLz0gNjtcbiAgICBpZiAoaCA8IDApIHtcbiAgICAgIGggKz0gMTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIGg6IGggKiAzNjAsXG4gICAgICBzOiBzLFxuICAgICAgdjogbWF4IC8gMjU1XG4gICAgfTtcbiAgfSxcbiAgcmdiX3RvX2hleDogZnVuY3Rpb24gcmdiX3RvX2hleChyLCBnLCBiKSB7XG4gICAgdmFyIGhleCA9IHRoaXMuaGV4X3dpdGhfY29tcG9uZW50KDAsIDIsIHIpO1xuICAgIGhleCA9IHRoaXMuaGV4X3dpdGhfY29tcG9uZW50KGhleCwgMSwgZyk7XG4gICAgaGV4ID0gdGhpcy5oZXhfd2l0aF9jb21wb25lbnQoaGV4LCAwLCBiKTtcbiAgICByZXR1cm4gaGV4O1xuICB9LFxuICBjb21wb25lbnRfZnJvbV9oZXg6IGZ1bmN0aW9uIGNvbXBvbmVudF9mcm9tX2hleChoZXgsIGNvbXBvbmVudEluZGV4KSB7XG4gICAgcmV0dXJuIGhleCA+PiBjb21wb25lbnRJbmRleCAqIDggJiAweEZGO1xuICB9LFxuICBoZXhfd2l0aF9jb21wb25lbnQ6IGZ1bmN0aW9uIGhleF93aXRoX2NvbXBvbmVudChoZXgsIGNvbXBvbmVudEluZGV4LCB2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSA8PCAodG1wQ29tcG9uZW50ID0gY29tcG9uZW50SW5kZXggKiA4KSB8IGhleCAmIH4oMHhGRiA8PCB0bXBDb21wb25lbnQpO1xuICB9XG59O1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gdHlwZW9mIG9iajtcbn0gOiBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xufTtcblxuXG5cblxuXG5cblxuXG5cblxuXG52YXIgY2xhc3NDYWxsQ2hlY2sgPSBmdW5jdGlvbiAoaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufTtcblxudmFyIGNyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICAgIGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gICAgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gICAgcmV0dXJuIENvbnN0cnVjdG9yO1xuICB9O1xufSgpO1xuXG5cblxuXG5cblxuXG52YXIgZ2V0ID0gZnVuY3Rpb24gZ2V0KG9iamVjdCwgcHJvcGVydHksIHJlY2VpdmVyKSB7XG4gIGlmIChvYmplY3QgPT09IG51bGwpIG9iamVjdCA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcbiAgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgcHJvcGVydHkpO1xuXG4gIGlmIChkZXNjID09PSB1bmRlZmluZWQpIHtcbiAgICB2YXIgcGFyZW50ID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKG9iamVjdCk7XG5cbiAgICBpZiAocGFyZW50ID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZ2V0KHBhcmVudCwgcHJvcGVydHksIHJlY2VpdmVyKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoXCJ2YWx1ZVwiIGluIGRlc2MpIHtcbiAgICByZXR1cm4gZGVzYy52YWx1ZTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgZ2V0dGVyID0gZGVzYy5nZXQ7XG5cbiAgICBpZiAoZ2V0dGVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIGdldHRlci5jYWxsKHJlY2VpdmVyKTtcbiAgfVxufTtcblxudmFyIGluaGVyaXRzID0gZnVuY3Rpb24gKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gIGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTtcbiAgfVxuXG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwge1xuICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICB2YWx1ZTogc3ViQ2xhc3MsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfVxuICB9KTtcbiAgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzO1xufTtcblxuXG5cblxuXG5cblxuXG5cblxuXG52YXIgcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiA9IGZ1bmN0aW9uIChzZWxmLCBjYWxsKSB7XG4gIGlmICghc2VsZikge1xuICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtcbiAgfVxuXG4gIHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmO1xufTtcblxudmFyIENvbG9yID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBDb2xvcigpIHtcbiAgICBjbGFzc0NhbGxDaGVjayh0aGlzLCBDb2xvcik7XG4gICAgdGhpcy5fX3N0YXRlID0gaW50ZXJwcmV0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgaWYgKHRoaXMuX19zdGF0ZSA9PT0gZmFsc2UpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignRmFpbGVkIHRvIGludGVycHJldCBjb2xvciBhcmd1bWVudHMnKTtcbiAgICB9XG4gICAgdGhpcy5fX3N0YXRlLmEgPSB0aGlzLl9fc3RhdGUuYSB8fCAxO1xuICB9XG4gIGNyZWF0ZUNsYXNzKENvbG9yLCBbe1xuICAgIGtleTogJ3RvU3RyaW5nJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgICByZXR1cm4gY29sb3JUb1N0cmluZyh0aGlzKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICd0b0hleFN0cmluZycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHRvSGV4U3RyaW5nKCkge1xuICAgICAgcmV0dXJuIGNvbG9yVG9TdHJpbmcodGhpcywgdHJ1ZSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAndG9PcmlnaW5hbCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHRvT3JpZ2luYWwoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fX3N0YXRlLmNvbnZlcnNpb24ud3JpdGUodGhpcyk7XG4gICAgfVxuICB9XSk7XG4gIHJldHVybiBDb2xvcjtcbn0oKTtcbmZ1bmN0aW9uIGRlZmluZVJHQkNvbXBvbmVudCh0YXJnZXQsIGNvbXBvbmVudCwgY29tcG9uZW50SGV4SW5kZXgpIHtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgY29tcG9uZW50LCB7XG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQkJDEoKSB7XG4gICAgICBpZiAodGhpcy5fX3N0YXRlLnNwYWNlID09PSAnUkdCJykge1xuICAgICAgICByZXR1cm4gdGhpcy5fX3N0YXRlW2NvbXBvbmVudF07XG4gICAgICB9XG4gICAgICBDb2xvci5yZWNhbGN1bGF0ZVJHQih0aGlzLCBjb21wb25lbnQsIGNvbXBvbmVudEhleEluZGV4KTtcbiAgICAgIHJldHVybiB0aGlzLl9fc3RhdGVbY29tcG9uZW50XTtcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24gc2V0JCQxKHYpIHtcbiAgICAgIGlmICh0aGlzLl9fc3RhdGUuc3BhY2UgIT09ICdSR0InKSB7XG4gICAgICAgIENvbG9yLnJlY2FsY3VsYXRlUkdCKHRoaXMsIGNvbXBvbmVudCwgY29tcG9uZW50SGV4SW5kZXgpO1xuICAgICAgICB0aGlzLl9fc3RhdGUuc3BhY2UgPSAnUkdCJztcbiAgICAgIH1cbiAgICAgIHRoaXMuX19zdGF0ZVtjb21wb25lbnRdID0gdjtcbiAgICB9XG4gIH0pO1xufVxuZnVuY3Rpb24gZGVmaW5lSFNWQ29tcG9uZW50KHRhcmdldCwgY29tcG9uZW50KSB7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGNvbXBvbmVudCwge1xuICAgIGdldDogZnVuY3Rpb24gZ2V0JCQxKCkge1xuICAgICAgaWYgKHRoaXMuX19zdGF0ZS5zcGFjZSA9PT0gJ0hTVicpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX19zdGF0ZVtjb21wb25lbnRdO1xuICAgICAgfVxuICAgICAgQ29sb3IucmVjYWxjdWxhdGVIU1YodGhpcyk7XG4gICAgICByZXR1cm4gdGhpcy5fX3N0YXRlW2NvbXBvbmVudF07XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldCQkMSh2KSB7XG4gICAgICBpZiAodGhpcy5fX3N0YXRlLnNwYWNlICE9PSAnSFNWJykge1xuICAgICAgICBDb2xvci5yZWNhbGN1bGF0ZUhTVih0aGlzKTtcbiAgICAgICAgdGhpcy5fX3N0YXRlLnNwYWNlID0gJ0hTVic7XG4gICAgICB9XG4gICAgICB0aGlzLl9fc3RhdGVbY29tcG9uZW50XSA9IHY7XG4gICAgfVxuICB9KTtcbn1cbkNvbG9yLnJlY2FsY3VsYXRlUkdCID0gZnVuY3Rpb24gKGNvbG9yLCBjb21wb25lbnQsIGNvbXBvbmVudEhleEluZGV4KSB7XG4gIGlmIChjb2xvci5fX3N0YXRlLnNwYWNlID09PSAnSEVYJykge1xuICAgIGNvbG9yLl9fc3RhdGVbY29tcG9uZW50XSA9IENvbG9yTWF0aC5jb21wb25lbnRfZnJvbV9oZXgoY29sb3IuX19zdGF0ZS5oZXgsIGNvbXBvbmVudEhleEluZGV4KTtcbiAgfSBlbHNlIGlmIChjb2xvci5fX3N0YXRlLnNwYWNlID09PSAnSFNWJykge1xuICAgIENvbW1vbi5leHRlbmQoY29sb3IuX19zdGF0ZSwgQ29sb3JNYXRoLmhzdl90b19yZ2IoY29sb3IuX19zdGF0ZS5oLCBjb2xvci5fX3N0YXRlLnMsIGNvbG9yLl9fc3RhdGUudikpO1xuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBFcnJvcignQ29ycnVwdGVkIGNvbG9yIHN0YXRlJyk7XG4gIH1cbn07XG5Db2xvci5yZWNhbGN1bGF0ZUhTViA9IGZ1bmN0aW9uIChjb2xvcikge1xuICB2YXIgcmVzdWx0ID0gQ29sb3JNYXRoLnJnYl90b19oc3YoY29sb3IuciwgY29sb3IuZywgY29sb3IuYik7XG4gIENvbW1vbi5leHRlbmQoY29sb3IuX19zdGF0ZSwge1xuICAgIHM6IHJlc3VsdC5zLFxuICAgIHY6IHJlc3VsdC52XG4gIH0pO1xuICBpZiAoIUNvbW1vbi5pc05hTihyZXN1bHQuaCkpIHtcbiAgICBjb2xvci5fX3N0YXRlLmggPSByZXN1bHQuaDtcbiAgfSBlbHNlIGlmIChDb21tb24uaXNVbmRlZmluZWQoY29sb3IuX19zdGF0ZS5oKSkge1xuICAgIGNvbG9yLl9fc3RhdGUuaCA9IDA7XG4gIH1cbn07XG5Db2xvci5DT01QT05FTlRTID0gWydyJywgJ2cnLCAnYicsICdoJywgJ3MnLCAndicsICdoZXgnLCAnYSddO1xuZGVmaW5lUkdCQ29tcG9uZW50KENvbG9yLnByb3RvdHlwZSwgJ3InLCAyKTtcbmRlZmluZVJHQkNvbXBvbmVudChDb2xvci5wcm90b3R5cGUsICdnJywgMSk7XG5kZWZpbmVSR0JDb21wb25lbnQoQ29sb3IucHJvdG90eXBlLCAnYicsIDApO1xuZGVmaW5lSFNWQ29tcG9uZW50KENvbG9yLnByb3RvdHlwZSwgJ2gnKTtcbmRlZmluZUhTVkNvbXBvbmVudChDb2xvci5wcm90b3R5cGUsICdzJyk7XG5kZWZpbmVIU1ZDb21wb25lbnQoQ29sb3IucHJvdG90eXBlLCAndicpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbG9yLnByb3RvdHlwZSwgJ2EnLCB7XG4gIGdldDogZnVuY3Rpb24gZ2V0JCQxKCkge1xuICAgIHJldHVybiB0aGlzLl9fc3RhdGUuYTtcbiAgfSxcbiAgc2V0OiBmdW5jdGlvbiBzZXQkJDEodikge1xuICAgIHRoaXMuX19zdGF0ZS5hID0gdjtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoQ29sb3IucHJvdG90eXBlLCAnaGV4Jywge1xuICBnZXQ6IGZ1bmN0aW9uIGdldCQkMSgpIHtcbiAgICBpZiAodGhpcy5fX3N0YXRlLnNwYWNlICE9PSAnSEVYJykge1xuICAgICAgdGhpcy5fX3N0YXRlLmhleCA9IENvbG9yTWF0aC5yZ2JfdG9faGV4KHRoaXMuciwgdGhpcy5nLCB0aGlzLmIpO1xuICAgICAgdGhpcy5fX3N0YXRlLnNwYWNlID0gJ0hFWCc7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9fc3RhdGUuaGV4O1xuICB9LFxuICBzZXQ6IGZ1bmN0aW9uIHNldCQkMSh2KSB7XG4gICAgdGhpcy5fX3N0YXRlLnNwYWNlID0gJ0hFWCc7XG4gICAgdGhpcy5fX3N0YXRlLmhleCA9IHY7XG4gIH1cbn0pO1xuXG52YXIgQ29udHJvbGxlciA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gQ29udHJvbGxlcihvYmplY3QsIHByb3BlcnR5KSB7XG4gICAgY2xhc3NDYWxsQ2hlY2sodGhpcywgQ29udHJvbGxlcik7XG4gICAgdGhpcy5pbml0aWFsVmFsdWUgPSBvYmplY3RbcHJvcGVydHldO1xuICAgIHRoaXMuZG9tRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRoaXMub2JqZWN0ID0gb2JqZWN0O1xuICAgIHRoaXMucHJvcGVydHkgPSBwcm9wZXJ0eTtcbiAgICB0aGlzLl9fb25DaGFuZ2UgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5fX29uRmluaXNoQ2hhbmdlID0gdW5kZWZpbmVkO1xuICB9XG4gIGNyZWF0ZUNsYXNzKENvbnRyb2xsZXIsIFt7XG4gICAga2V5OiAnb25DaGFuZ2UnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvbkNoYW5nZShmbmMpIHtcbiAgICAgIHRoaXMuX19vbkNoYW5nZSA9IGZuYztcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ29uRmluaXNoQ2hhbmdlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gb25GaW5pc2hDaGFuZ2UoZm5jKSB7XG4gICAgICB0aGlzLl9fb25GaW5pc2hDaGFuZ2UgPSBmbmM7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdzZXRWYWx1ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldFZhbHVlKG5ld1ZhbHVlKSB7XG4gICAgICB0aGlzLm9iamVjdFt0aGlzLnByb3BlcnR5XSA9IG5ld1ZhbHVlO1xuICAgICAgaWYgKHRoaXMuX19vbkNoYW5nZSkge1xuICAgICAgICB0aGlzLl9fb25DaGFuZ2UuY2FsbCh0aGlzLCBuZXdWYWx1ZSk7XG4gICAgICB9XG4gICAgICB0aGlzLnVwZGF0ZURpc3BsYXkoKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2dldFZhbHVlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0VmFsdWUoKSB7XG4gICAgICByZXR1cm4gdGhpcy5vYmplY3RbdGhpcy5wcm9wZXJ0eV07XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAndXBkYXRlRGlzcGxheScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHVwZGF0ZURpc3BsYXkoKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdpc01vZGlmaWVkJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gaXNNb2RpZmllZCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmluaXRpYWxWYWx1ZSAhPT0gdGhpcy5nZXRWYWx1ZSgpO1xuICAgIH1cbiAgfV0pO1xuICByZXR1cm4gQ29udHJvbGxlcjtcbn0oKTtcblxudmFyIEVWRU5UX01BUCA9IHtcbiAgSFRNTEV2ZW50czogWydjaGFuZ2UnXSxcbiAgTW91c2VFdmVudHM6IFsnY2xpY2snLCAnbW91c2Vtb3ZlJywgJ21vdXNlZG93bicsICdtb3VzZXVwJywgJ21vdXNlb3ZlciddLFxuICBLZXlib2FyZEV2ZW50czogWydrZXlkb3duJ11cbn07XG52YXIgRVZFTlRfTUFQX0lOViA9IHt9O1xuQ29tbW9uLmVhY2goRVZFTlRfTUFQLCBmdW5jdGlvbiAodiwgaykge1xuICBDb21tb24uZWFjaCh2LCBmdW5jdGlvbiAoZSkge1xuICAgIEVWRU5UX01BUF9JTlZbZV0gPSBrO1xuICB9KTtcbn0pO1xudmFyIENTU19WQUxVRV9QSVhFTFMgPSAvKFxcZCsoXFwuXFxkKyk/KXB4LztcbmZ1bmN0aW9uIGNzc1ZhbHVlVG9QaXhlbHModmFsKSB7XG4gIGlmICh2YWwgPT09ICcwJyB8fCBDb21tb24uaXNVbmRlZmluZWQodmFsKSkge1xuICAgIHJldHVybiAwO1xuICB9XG4gIHZhciBtYXRjaCA9IHZhbC5tYXRjaChDU1NfVkFMVUVfUElYRUxTKTtcbiAgaWYgKCFDb21tb24uaXNOdWxsKG1hdGNoKSkge1xuICAgIHJldHVybiBwYXJzZUZsb2F0KG1hdGNoWzFdKTtcbiAgfVxuICByZXR1cm4gMDtcbn1cbnZhciBkb20gPSB7XG4gIG1ha2VTZWxlY3RhYmxlOiBmdW5jdGlvbiBtYWtlU2VsZWN0YWJsZShlbGVtLCBzZWxlY3RhYmxlKSB7XG4gICAgaWYgKGVsZW0gPT09IHVuZGVmaW5lZCB8fCBlbGVtLnN0eWxlID09PSB1bmRlZmluZWQpIHJldHVybjtcbiAgICBlbGVtLm9uc2VsZWN0c3RhcnQgPSBzZWxlY3RhYmxlID8gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gOiBmdW5jdGlvbiAoKSB7fTtcbiAgICBlbGVtLnN0eWxlLk1velVzZXJTZWxlY3QgPSBzZWxlY3RhYmxlID8gJ2F1dG8nIDogJ25vbmUnO1xuICAgIGVsZW0uc3R5bGUuS2h0bWxVc2VyU2VsZWN0ID0gc2VsZWN0YWJsZSA/ICdhdXRvJyA6ICdub25lJztcbiAgICBlbGVtLnVuc2VsZWN0YWJsZSA9IHNlbGVjdGFibGUgPyAnb24nIDogJ29mZic7XG4gIH0sXG4gIG1ha2VGdWxsc2NyZWVuOiBmdW5jdGlvbiBtYWtlRnVsbHNjcmVlbihlbGVtLCBob3IsIHZlcnQpIHtcbiAgICB2YXIgdmVydGljYWwgPSB2ZXJ0O1xuICAgIHZhciBob3Jpem9udGFsID0gaG9yO1xuICAgIGlmIChDb21tb24uaXNVbmRlZmluZWQoaG9yaXpvbnRhbCkpIHtcbiAgICAgIGhvcml6b250YWwgPSB0cnVlO1xuICAgIH1cbiAgICBpZiAoQ29tbW9uLmlzVW5kZWZpbmVkKHZlcnRpY2FsKSkge1xuICAgICAgdmVydGljYWwgPSB0cnVlO1xuICAgIH1cbiAgICBlbGVtLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICBpZiAoaG9yaXpvbnRhbCkge1xuICAgICAgZWxlbS5zdHlsZS5sZWZ0ID0gMDtcbiAgICAgIGVsZW0uc3R5bGUucmlnaHQgPSAwO1xuICAgIH1cbiAgICBpZiAodmVydGljYWwpIHtcbiAgICAgIGVsZW0uc3R5bGUudG9wID0gMDtcbiAgICAgIGVsZW0uc3R5bGUuYm90dG9tID0gMDtcbiAgICB9XG4gIH0sXG4gIGZha2VFdmVudDogZnVuY3Rpb24gZmFrZUV2ZW50KGVsZW0sIGV2ZW50VHlwZSwgcGFycywgYXV4KSB7XG4gICAgdmFyIHBhcmFtcyA9IHBhcnMgfHwge307XG4gICAgdmFyIGNsYXNzTmFtZSA9IEVWRU5UX01BUF9JTlZbZXZlbnRUeXBlXTtcbiAgICBpZiAoIWNsYXNzTmFtZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdFdmVudCB0eXBlICcgKyBldmVudFR5cGUgKyAnIG5vdCBzdXBwb3J0ZWQuJyk7XG4gICAgfVxuICAgIHZhciBldnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudChjbGFzc05hbWUpO1xuICAgIHN3aXRjaCAoY2xhc3NOYW1lKSB7XG4gICAgICBjYXNlICdNb3VzZUV2ZW50cyc6XG4gICAgICAgIHtcbiAgICAgICAgICB2YXIgY2xpZW50WCA9IHBhcmFtcy54IHx8IHBhcmFtcy5jbGllbnRYIHx8IDA7XG4gICAgICAgICAgdmFyIGNsaWVudFkgPSBwYXJhbXMueSB8fCBwYXJhbXMuY2xpZW50WSB8fCAwO1xuICAgICAgICAgIGV2dC5pbml0TW91c2VFdmVudChldmVudFR5cGUsIHBhcmFtcy5idWJibGVzIHx8IGZhbHNlLCBwYXJhbXMuY2FuY2VsYWJsZSB8fCB0cnVlLCB3aW5kb3csIHBhcmFtcy5jbGlja0NvdW50IHx8IDEsIDAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICBjbGllbnRYLFxuICAgICAgICAgIGNsaWVudFksXG4gICAgICAgICAgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIDAsIG51bGwpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICBjYXNlICdLZXlib2FyZEV2ZW50cyc6XG4gICAgICAgIHtcbiAgICAgICAgICB2YXIgaW5pdCA9IGV2dC5pbml0S2V5Ym9hcmRFdmVudCB8fCBldnQuaW5pdEtleUV2ZW50O1xuICAgICAgICAgIENvbW1vbi5kZWZhdWx0cyhwYXJhbXMsIHtcbiAgICAgICAgICAgIGNhbmNlbGFibGU6IHRydWUsXG4gICAgICAgICAgICBjdHJsS2V5OiBmYWxzZSxcbiAgICAgICAgICAgIGFsdEtleTogZmFsc2UsXG4gICAgICAgICAgICBzaGlmdEtleTogZmFsc2UsXG4gICAgICAgICAgICBtZXRhS2V5OiBmYWxzZSxcbiAgICAgICAgICAgIGtleUNvZGU6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIGNoYXJDb2RlOiB1bmRlZmluZWRcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBpbml0KGV2ZW50VHlwZSwgcGFyYW1zLmJ1YmJsZXMgfHwgZmFsc2UsIHBhcmFtcy5jYW5jZWxhYmxlLCB3aW5kb3csIHBhcmFtcy5jdHJsS2V5LCBwYXJhbXMuYWx0S2V5LCBwYXJhbXMuc2hpZnRLZXksIHBhcmFtcy5tZXRhS2V5LCBwYXJhbXMua2V5Q29kZSwgcGFyYW1zLmNoYXJDb2RlKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgZGVmYXVsdDpcbiAgICAgICAge1xuICAgICAgICAgIGV2dC5pbml0RXZlbnQoZXZlbnRUeXBlLCBwYXJhbXMuYnViYmxlcyB8fCBmYWxzZSwgcGFyYW1zLmNhbmNlbGFibGUgfHwgdHJ1ZSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG4gICAgQ29tbW9uLmRlZmF1bHRzKGV2dCwgYXV4KTtcbiAgICBlbGVtLmRpc3BhdGNoRXZlbnQoZXZ0KTtcbiAgfSxcbiAgYmluZDogZnVuY3Rpb24gYmluZChlbGVtLCBldmVudCwgZnVuYywgbmV3Qm9vbCkge1xuICAgIHZhciBib29sID0gbmV3Qm9vbCB8fCBmYWxzZTtcbiAgICBpZiAoZWxlbS5hZGRFdmVudExpc3RlbmVyKSB7XG4gICAgICBlbGVtLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGZ1bmMsIGJvb2wpO1xuICAgIH0gZWxzZSBpZiAoZWxlbS5hdHRhY2hFdmVudCkge1xuICAgICAgZWxlbS5hdHRhY2hFdmVudCgnb24nICsgZXZlbnQsIGZ1bmMpO1xuICAgIH1cbiAgICByZXR1cm4gZG9tO1xuICB9LFxuICB1bmJpbmQ6IGZ1bmN0aW9uIHVuYmluZChlbGVtLCBldmVudCwgZnVuYywgbmV3Qm9vbCkge1xuICAgIHZhciBib29sID0gbmV3Qm9vbCB8fCBmYWxzZTtcbiAgICBpZiAoZWxlbS5yZW1vdmVFdmVudExpc3RlbmVyKSB7XG4gICAgICBlbGVtLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIGZ1bmMsIGJvb2wpO1xuICAgIH0gZWxzZSBpZiAoZWxlbS5kZXRhY2hFdmVudCkge1xuICAgICAgZWxlbS5kZXRhY2hFdmVudCgnb24nICsgZXZlbnQsIGZ1bmMpO1xuICAgIH1cbiAgICByZXR1cm4gZG9tO1xuICB9LFxuICBhZGRDbGFzczogZnVuY3Rpb24gYWRkQ2xhc3MoZWxlbSwgY2xhc3NOYW1lKSB7XG4gICAgaWYgKGVsZW0uY2xhc3NOYW1lID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGVsZW0uY2xhc3NOYW1lID0gY2xhc3NOYW1lO1xuICAgIH0gZWxzZSBpZiAoZWxlbS5jbGFzc05hbWUgIT09IGNsYXNzTmFtZSkge1xuICAgICAgdmFyIGNsYXNzZXMgPSBlbGVtLmNsYXNzTmFtZS5zcGxpdCgvICsvKTtcbiAgICAgIGlmIChjbGFzc2VzLmluZGV4T2YoY2xhc3NOYW1lKSA9PT0gLTEpIHtcbiAgICAgICAgY2xhc3Nlcy5wdXNoKGNsYXNzTmFtZSk7XG4gICAgICAgIGVsZW0uY2xhc3NOYW1lID0gY2xhc3Nlcy5qb2luKCcgJykucmVwbGFjZSgvXlxccysvLCAnJykucmVwbGFjZSgvXFxzKyQvLCAnJyk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBkb207XG4gIH0sXG4gIHJlbW92ZUNsYXNzOiBmdW5jdGlvbiByZW1vdmVDbGFzcyhlbGVtLCBjbGFzc05hbWUpIHtcbiAgICBpZiAoY2xhc3NOYW1lKSB7XG4gICAgICBpZiAoZWxlbS5jbGFzc05hbWUgPT09IGNsYXNzTmFtZSkge1xuICAgICAgICBlbGVtLnJlbW92ZUF0dHJpYnV0ZSgnY2xhc3MnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBjbGFzc2VzID0gZWxlbS5jbGFzc05hbWUuc3BsaXQoLyArLyk7XG4gICAgICAgIHZhciBpbmRleCA9IGNsYXNzZXMuaW5kZXhPZihjbGFzc05hbWUpO1xuICAgICAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgY2xhc3Nlcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgIGVsZW0uY2xhc3NOYW1lID0gY2xhc3Nlcy5qb2luKCcgJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZWxlbS5jbGFzc05hbWUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIHJldHVybiBkb207XG4gIH0sXG4gIGhhc0NsYXNzOiBmdW5jdGlvbiBoYXNDbGFzcyhlbGVtLCBjbGFzc05hbWUpIHtcbiAgICByZXR1cm4gbmV3IFJlZ0V4cCgnKD86XnxcXFxccyspJyArIGNsYXNzTmFtZSArICcoPzpcXFxccyt8JCknKS50ZXN0KGVsZW0uY2xhc3NOYW1lKSB8fCBmYWxzZTtcbiAgfSxcbiAgZ2V0V2lkdGg6IGZ1bmN0aW9uIGdldFdpZHRoKGVsZW0pIHtcbiAgICB2YXIgc3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKGVsZW0pO1xuICAgIHJldHVybiBjc3NWYWx1ZVRvUGl4ZWxzKHN0eWxlWydib3JkZXItbGVmdC13aWR0aCddKSArIGNzc1ZhbHVlVG9QaXhlbHMoc3R5bGVbJ2JvcmRlci1yaWdodC13aWR0aCddKSArIGNzc1ZhbHVlVG9QaXhlbHMoc3R5bGVbJ3BhZGRpbmctbGVmdCddKSArIGNzc1ZhbHVlVG9QaXhlbHMoc3R5bGVbJ3BhZGRpbmctcmlnaHQnXSkgKyBjc3NWYWx1ZVRvUGl4ZWxzKHN0eWxlLndpZHRoKTtcbiAgfSxcbiAgZ2V0SGVpZ2h0OiBmdW5jdGlvbiBnZXRIZWlnaHQoZWxlbSkge1xuICAgIHZhciBzdHlsZSA9IGdldENvbXB1dGVkU3R5bGUoZWxlbSk7XG4gICAgcmV0dXJuIGNzc1ZhbHVlVG9QaXhlbHMoc3R5bGVbJ2JvcmRlci10b3Atd2lkdGgnXSkgKyBjc3NWYWx1ZVRvUGl4ZWxzKHN0eWxlWydib3JkZXItYm90dG9tLXdpZHRoJ10pICsgY3NzVmFsdWVUb1BpeGVscyhzdHlsZVsncGFkZGluZy10b3AnXSkgKyBjc3NWYWx1ZVRvUGl4ZWxzKHN0eWxlWydwYWRkaW5nLWJvdHRvbSddKSArIGNzc1ZhbHVlVG9QaXhlbHMoc3R5bGUuaGVpZ2h0KTtcbiAgfSxcbiAgZ2V0T2Zmc2V0OiBmdW5jdGlvbiBnZXRPZmZzZXQoZWwpIHtcbiAgICB2YXIgZWxlbSA9IGVsO1xuICAgIHZhciBvZmZzZXQgPSB7IGxlZnQ6IDAsIHRvcDogMCB9O1xuICAgIGlmIChlbGVtLm9mZnNldFBhcmVudCkge1xuICAgICAgZG8ge1xuICAgICAgICBvZmZzZXQubGVmdCArPSBlbGVtLm9mZnNldExlZnQ7XG4gICAgICAgIG9mZnNldC50b3AgKz0gZWxlbS5vZmZzZXRUb3A7XG4gICAgICAgIGVsZW0gPSBlbGVtLm9mZnNldFBhcmVudDtcbiAgICAgIH0gd2hpbGUgKGVsZW0pO1xuICAgIH1cbiAgICByZXR1cm4gb2Zmc2V0O1xuICB9LFxuICBpc0FjdGl2ZTogZnVuY3Rpb24gaXNBY3RpdmUoZWxlbSkge1xuICAgIHJldHVybiBlbGVtID09PSBkb2N1bWVudC5hY3RpdmVFbGVtZW50ICYmIChlbGVtLnR5cGUgfHwgZWxlbS5ocmVmKTtcbiAgfVxufTtcblxudmFyIEJvb2xlYW5Db250cm9sbGVyID0gZnVuY3Rpb24gKF9Db250cm9sbGVyKSB7XG4gIGluaGVyaXRzKEJvb2xlYW5Db250cm9sbGVyLCBfQ29udHJvbGxlcik7XG4gIGZ1bmN0aW9uIEJvb2xlYW5Db250cm9sbGVyKG9iamVjdCwgcHJvcGVydHkpIHtcbiAgICBjbGFzc0NhbGxDaGVjayh0aGlzLCBCb29sZWFuQ29udHJvbGxlcik7XG4gICAgdmFyIF90aGlzMiA9IHBvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKEJvb2xlYW5Db250cm9sbGVyLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoQm9vbGVhbkNvbnRyb2xsZXIpKS5jYWxsKHRoaXMsIG9iamVjdCwgcHJvcGVydHkpKTtcbiAgICB2YXIgX3RoaXMgPSBfdGhpczI7XG4gICAgX3RoaXMyLl9fcHJldiA9IF90aGlzMi5nZXRWYWx1ZSgpO1xuICAgIF90aGlzMi5fX2NoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBfdGhpczIuX19jaGVja2JveC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2hlY2tib3gnKTtcbiAgICBmdW5jdGlvbiBvbkNoYW5nZSgpIHtcbiAgICAgIF90aGlzLnNldFZhbHVlKCFfdGhpcy5fX3ByZXYpO1xuICAgIH1cbiAgICBkb20uYmluZChfdGhpczIuX19jaGVja2JveCwgJ2NoYW5nZScsIG9uQ2hhbmdlLCBmYWxzZSk7XG4gICAgX3RoaXMyLmRvbUVsZW1lbnQuYXBwZW5kQ2hpbGQoX3RoaXMyLl9fY2hlY2tib3gpO1xuICAgIF90aGlzMi51cGRhdGVEaXNwbGF5KCk7XG4gICAgcmV0dXJuIF90aGlzMjtcbiAgfVxuICBjcmVhdGVDbGFzcyhCb29sZWFuQ29udHJvbGxlciwgW3tcbiAgICBrZXk6ICdzZXRWYWx1ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldFZhbHVlKHYpIHtcbiAgICAgIHZhciB0b1JldHVybiA9IGdldChCb29sZWFuQ29udHJvbGxlci5wcm90b3R5cGUuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihCb29sZWFuQ29udHJvbGxlci5wcm90b3R5cGUpLCAnc2V0VmFsdWUnLCB0aGlzKS5jYWxsKHRoaXMsIHYpO1xuICAgICAgaWYgKHRoaXMuX19vbkZpbmlzaENoYW5nZSkge1xuICAgICAgICB0aGlzLl9fb25GaW5pc2hDaGFuZ2UuY2FsbCh0aGlzLCB0aGlzLmdldFZhbHVlKCkpO1xuICAgICAgfVxuICAgICAgdGhpcy5fX3ByZXYgPSB0aGlzLmdldFZhbHVlKCk7XG4gICAgICByZXR1cm4gdG9SZXR1cm47XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAndXBkYXRlRGlzcGxheScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHVwZGF0ZURpc3BsYXkoKSB7XG4gICAgICBpZiAodGhpcy5nZXRWYWx1ZSgpID09PSB0cnVlKSB7XG4gICAgICAgIHRoaXMuX19jaGVja2JveC5zZXRBdHRyaWJ1dGUoJ2NoZWNrZWQnLCAnY2hlY2tlZCcpO1xuICAgICAgICB0aGlzLl9fY2hlY2tib3guY2hlY2tlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuX19wcmV2ID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX19jaGVja2JveC5jaGVja2VkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX19wcmV2ID0gZmFsc2U7XG4gICAgICB9XG4gICAgICByZXR1cm4gZ2V0KEJvb2xlYW5Db250cm9sbGVyLnByb3RvdHlwZS5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKEJvb2xlYW5Db250cm9sbGVyLnByb3RvdHlwZSksICd1cGRhdGVEaXNwbGF5JywgdGhpcykuY2FsbCh0aGlzKTtcbiAgICB9XG4gIH1dKTtcbiAgcmV0dXJuIEJvb2xlYW5Db250cm9sbGVyO1xufShDb250cm9sbGVyKTtcblxudmFyIE9wdGlvbkNvbnRyb2xsZXIgPSBmdW5jdGlvbiAoX0NvbnRyb2xsZXIpIHtcbiAgaW5oZXJpdHMoT3B0aW9uQ29udHJvbGxlciwgX0NvbnRyb2xsZXIpO1xuICBmdW5jdGlvbiBPcHRpb25Db250cm9sbGVyKG9iamVjdCwgcHJvcGVydHksIG9wdHMpIHtcbiAgICBjbGFzc0NhbGxDaGVjayh0aGlzLCBPcHRpb25Db250cm9sbGVyKTtcbiAgICB2YXIgX3RoaXMyID0gcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoT3B0aW9uQ29udHJvbGxlci5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKE9wdGlvbkNvbnRyb2xsZXIpKS5jYWxsKHRoaXMsIG9iamVjdCwgcHJvcGVydHkpKTtcbiAgICB2YXIgb3B0aW9ucyA9IG9wdHM7XG4gICAgdmFyIF90aGlzID0gX3RoaXMyO1xuICAgIF90aGlzMi5fX3NlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgIGlmIChDb21tb24uaXNBcnJheShvcHRpb25zKSkge1xuICAgICAgdmFyIG1hcCA9IHt9O1xuICAgICAgQ29tbW9uLmVhY2gob3B0aW9ucywgZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgbWFwW2VsZW1lbnRdID0gZWxlbWVudDtcbiAgICAgIH0pO1xuICAgICAgb3B0aW9ucyA9IG1hcDtcbiAgICB9XG4gICAgQ29tbW9uLmVhY2gob3B0aW9ucywgZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcbiAgICAgIHZhciBvcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgIG9wdC5pbm5lckhUTUwgPSBrZXk7XG4gICAgICBvcHQuc2V0QXR0cmlidXRlKCd2YWx1ZScsIHZhbHVlKTtcbiAgICAgIF90aGlzLl9fc2VsZWN0LmFwcGVuZENoaWxkKG9wdCk7XG4gICAgfSk7XG4gICAgX3RoaXMyLnVwZGF0ZURpc3BsYXkoKTtcbiAgICBkb20uYmluZChfdGhpczIuX19zZWxlY3QsICdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgZGVzaXJlZFZhbHVlID0gdGhpcy5vcHRpb25zW3RoaXMuc2VsZWN0ZWRJbmRleF0udmFsdWU7XG4gICAgICBfdGhpcy5zZXRWYWx1ZShkZXNpcmVkVmFsdWUpO1xuICAgIH0pO1xuICAgIF90aGlzMi5kb21FbGVtZW50LmFwcGVuZENoaWxkKF90aGlzMi5fX3NlbGVjdCk7XG4gICAgcmV0dXJuIF90aGlzMjtcbiAgfVxuICBjcmVhdGVDbGFzcyhPcHRpb25Db250cm9sbGVyLCBbe1xuICAgIGtleTogJ3NldFZhbHVlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0VmFsdWUodikge1xuICAgICAgdmFyIHRvUmV0dXJuID0gZ2V0KE9wdGlvbkNvbnRyb2xsZXIucHJvdG90eXBlLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoT3B0aW9uQ29udHJvbGxlci5wcm90b3R5cGUpLCAnc2V0VmFsdWUnLCB0aGlzKS5jYWxsKHRoaXMsIHYpO1xuICAgICAgaWYgKHRoaXMuX19vbkZpbmlzaENoYW5nZSkge1xuICAgICAgICB0aGlzLl9fb25GaW5pc2hDaGFuZ2UuY2FsbCh0aGlzLCB0aGlzLmdldFZhbHVlKCkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRvUmV0dXJuO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3VwZGF0ZURpc3BsYXknLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB1cGRhdGVEaXNwbGF5KCkge1xuICAgICAgaWYgKGRvbS5pc0FjdGl2ZSh0aGlzLl9fc2VsZWN0KSkgcmV0dXJuIHRoaXM7XG4gICAgICB0aGlzLl9fc2VsZWN0LnZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpO1xuICAgICAgcmV0dXJuIGdldChPcHRpb25Db250cm9sbGVyLnByb3RvdHlwZS5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKE9wdGlvbkNvbnRyb2xsZXIucHJvdG90eXBlKSwgJ3VwZGF0ZURpc3BsYXknLCB0aGlzKS5jYWxsKHRoaXMpO1xuICAgIH1cbiAgfV0pO1xuICByZXR1cm4gT3B0aW9uQ29udHJvbGxlcjtcbn0oQ29udHJvbGxlcik7XG5cbnZhciBTdHJpbmdDb250cm9sbGVyID0gZnVuY3Rpb24gKF9Db250cm9sbGVyKSB7XG4gIGluaGVyaXRzKFN0cmluZ0NvbnRyb2xsZXIsIF9Db250cm9sbGVyKTtcbiAgZnVuY3Rpb24gU3RyaW5nQ29udHJvbGxlcihvYmplY3QsIHByb3BlcnR5KSB7XG4gICAgY2xhc3NDYWxsQ2hlY2sodGhpcywgU3RyaW5nQ29udHJvbGxlcik7XG4gICAgdmFyIF90aGlzMiA9IHBvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKFN0cmluZ0NvbnRyb2xsZXIuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihTdHJpbmdDb250cm9sbGVyKSkuY2FsbCh0aGlzLCBvYmplY3QsIHByb3BlcnR5KSk7XG4gICAgdmFyIF90aGlzID0gX3RoaXMyO1xuICAgIGZ1bmN0aW9uIG9uQ2hhbmdlKCkge1xuICAgICAgX3RoaXMuc2V0VmFsdWUoX3RoaXMuX19pbnB1dC52YWx1ZSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIG9uQmx1cigpIHtcbiAgICAgIGlmIChfdGhpcy5fX29uRmluaXNoQ2hhbmdlKSB7XG4gICAgICAgIF90aGlzLl9fb25GaW5pc2hDaGFuZ2UuY2FsbChfdGhpcywgX3RoaXMuZ2V0VmFsdWUoKSk7XG4gICAgICB9XG4gICAgfVxuICAgIF90aGlzMi5fX2lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBfdGhpczIuX19pbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICAgIGRvbS5iaW5kKF90aGlzMi5fX2lucHV0LCAna2V5dXAnLCBvbkNoYW5nZSk7XG4gICAgZG9tLmJpbmQoX3RoaXMyLl9faW5wdXQsICdjaGFuZ2UnLCBvbkNoYW5nZSk7XG4gICAgZG9tLmJpbmQoX3RoaXMyLl9faW5wdXQsICdibHVyJywgb25CbHVyKTtcbiAgICBkb20uYmluZChfdGhpczIuX19pbnB1dCwgJ2tleWRvd24nLCBmdW5jdGlvbiAoZSkge1xuICAgICAgaWYgKGUua2V5Q29kZSA9PT0gMTMpIHtcbiAgICAgICAgdGhpcy5ibHVyKCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgX3RoaXMyLnVwZGF0ZURpc3BsYXkoKTtcbiAgICBfdGhpczIuZG9tRWxlbWVudC5hcHBlbmRDaGlsZChfdGhpczIuX19pbnB1dCk7XG4gICAgcmV0dXJuIF90aGlzMjtcbiAgfVxuICBjcmVhdGVDbGFzcyhTdHJpbmdDb250cm9sbGVyLCBbe1xuICAgIGtleTogJ3VwZGF0ZURpc3BsYXknLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB1cGRhdGVEaXNwbGF5KCkge1xuICAgICAgaWYgKCFkb20uaXNBY3RpdmUodGhpcy5fX2lucHV0KSkge1xuICAgICAgICB0aGlzLl9faW5wdXQudmFsdWUgPSB0aGlzLmdldFZhbHVlKCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gZ2V0KFN0cmluZ0NvbnRyb2xsZXIucHJvdG90eXBlLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoU3RyaW5nQ29udHJvbGxlci5wcm90b3R5cGUpLCAndXBkYXRlRGlzcGxheScsIHRoaXMpLmNhbGwodGhpcyk7XG4gICAgfVxuICB9XSk7XG4gIHJldHVybiBTdHJpbmdDb250cm9sbGVyO1xufShDb250cm9sbGVyKTtcblxuZnVuY3Rpb24gbnVtRGVjaW1hbHMoeCkge1xuICB2YXIgX3ggPSB4LnRvU3RyaW5nKCk7XG4gIGlmIChfeC5pbmRleE9mKCcuJykgPiAtMSkge1xuICAgIHJldHVybiBfeC5sZW5ndGggLSBfeC5pbmRleE9mKCcuJykgLSAxO1xuICB9XG4gIHJldHVybiAwO1xufVxudmFyIE51bWJlckNvbnRyb2xsZXIgPSBmdW5jdGlvbiAoX0NvbnRyb2xsZXIpIHtcbiAgaW5oZXJpdHMoTnVtYmVyQ29udHJvbGxlciwgX0NvbnRyb2xsZXIpO1xuICBmdW5jdGlvbiBOdW1iZXJDb250cm9sbGVyKG9iamVjdCwgcHJvcGVydHksIHBhcmFtcykge1xuICAgIGNsYXNzQ2FsbENoZWNrKHRoaXMsIE51bWJlckNvbnRyb2xsZXIpO1xuICAgIHZhciBfdGhpcyA9IHBvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKE51bWJlckNvbnRyb2xsZXIuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihOdW1iZXJDb250cm9sbGVyKSkuY2FsbCh0aGlzLCBvYmplY3QsIHByb3BlcnR5KSk7XG4gICAgdmFyIF9wYXJhbXMgPSBwYXJhbXMgfHwge307XG4gICAgX3RoaXMuX19taW4gPSBfcGFyYW1zLm1pbjtcbiAgICBfdGhpcy5fX21heCA9IF9wYXJhbXMubWF4O1xuICAgIF90aGlzLl9fc3RlcCA9IF9wYXJhbXMuc3RlcDtcbiAgICBpZiAoQ29tbW9uLmlzVW5kZWZpbmVkKF90aGlzLl9fc3RlcCkpIHtcbiAgICAgIGlmIChfdGhpcy5pbml0aWFsVmFsdWUgPT09IDApIHtcbiAgICAgICAgX3RoaXMuX19pbXBsaWVkU3RlcCA9IDE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBfdGhpcy5fX2ltcGxpZWRTdGVwID0gTWF0aC5wb3coMTAsIE1hdGguZmxvb3IoTWF0aC5sb2coTWF0aC5hYnMoX3RoaXMuaW5pdGlhbFZhbHVlKSkgLyBNYXRoLkxOMTApKSAvIDEwO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBfdGhpcy5fX2ltcGxpZWRTdGVwID0gX3RoaXMuX19zdGVwO1xuICAgIH1cbiAgICBfdGhpcy5fX3ByZWNpc2lvbiA9IG51bURlY2ltYWxzKF90aGlzLl9faW1wbGllZFN0ZXApO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuICBjcmVhdGVDbGFzcyhOdW1iZXJDb250cm9sbGVyLCBbe1xuICAgIGtleTogJ3NldFZhbHVlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0VmFsdWUodikge1xuICAgICAgdmFyIF92ID0gdjtcbiAgICAgIGlmICh0aGlzLl9fbWluICE9PSB1bmRlZmluZWQgJiYgX3YgPCB0aGlzLl9fbWluKSB7XG4gICAgICAgIF92ID0gdGhpcy5fX21pbjtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5fX21heCAhPT0gdW5kZWZpbmVkICYmIF92ID4gdGhpcy5fX21heCkge1xuICAgICAgICBfdiA9IHRoaXMuX19tYXg7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5fX3N0ZXAgIT09IHVuZGVmaW5lZCAmJiBfdiAlIHRoaXMuX19zdGVwICE9PSAwKSB7XG4gICAgICAgIF92ID0gTWF0aC5yb3VuZChfdiAvIHRoaXMuX19zdGVwKSAqIHRoaXMuX19zdGVwO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGdldChOdW1iZXJDb250cm9sbGVyLnByb3RvdHlwZS5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKE51bWJlckNvbnRyb2xsZXIucHJvdG90eXBlKSwgJ3NldFZhbHVlJywgdGhpcykuY2FsbCh0aGlzLCBfdik7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnbWluJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gbWluKG1pblZhbHVlKSB7XG4gICAgICB0aGlzLl9fbWluID0gbWluVmFsdWU7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdtYXgnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBtYXgobWF4VmFsdWUpIHtcbiAgICAgIHRoaXMuX19tYXggPSBtYXhWYWx1ZTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3N0ZXAnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzdGVwKHN0ZXBWYWx1ZSkge1xuICAgICAgdGhpcy5fX3N0ZXAgPSBzdGVwVmFsdWU7XG4gICAgICB0aGlzLl9faW1wbGllZFN0ZXAgPSBzdGVwVmFsdWU7XG4gICAgICB0aGlzLl9fcHJlY2lzaW9uID0gbnVtRGVjaW1hbHMoc3RlcFZhbHVlKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgfV0pO1xuICByZXR1cm4gTnVtYmVyQ29udHJvbGxlcjtcbn0oQ29udHJvbGxlcik7XG5cbmZ1bmN0aW9uIHJvdW5kVG9EZWNpbWFsKHZhbHVlLCBkZWNpbWFscykge1xuICB2YXIgdGVuVG8gPSBNYXRoLnBvdygxMCwgZGVjaW1hbHMpO1xuICByZXR1cm4gTWF0aC5yb3VuZCh2YWx1ZSAqIHRlblRvKSAvIHRlblRvO1xufVxudmFyIE51bWJlckNvbnRyb2xsZXJCb3ggPSBmdW5jdGlvbiAoX051bWJlckNvbnRyb2xsZXIpIHtcbiAgaW5oZXJpdHMoTnVtYmVyQ29udHJvbGxlckJveCwgX051bWJlckNvbnRyb2xsZXIpO1xuICBmdW5jdGlvbiBOdW1iZXJDb250cm9sbGVyQm94KG9iamVjdCwgcHJvcGVydHksIHBhcmFtcykge1xuICAgIGNsYXNzQ2FsbENoZWNrKHRoaXMsIE51bWJlckNvbnRyb2xsZXJCb3gpO1xuICAgIHZhciBfdGhpczIgPSBwb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChOdW1iZXJDb250cm9sbGVyQm94Ll9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoTnVtYmVyQ29udHJvbGxlckJveCkpLmNhbGwodGhpcywgb2JqZWN0LCBwcm9wZXJ0eSwgcGFyYW1zKSk7XG4gICAgX3RoaXMyLl9fdHJ1bmNhdGlvblN1c3BlbmRlZCA9IGZhbHNlO1xuICAgIHZhciBfdGhpcyA9IF90aGlzMjtcbiAgICB2YXIgcHJldlkgPSB2b2lkIDA7XG4gICAgZnVuY3Rpb24gb25DaGFuZ2UoKSB7XG4gICAgICB2YXIgYXR0ZW1wdGVkID0gcGFyc2VGbG9hdChfdGhpcy5fX2lucHV0LnZhbHVlKTtcbiAgICAgIGlmICghQ29tbW9uLmlzTmFOKGF0dGVtcHRlZCkpIHtcbiAgICAgICAgX3RoaXMuc2V0VmFsdWUoYXR0ZW1wdGVkKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gb25GaW5pc2goKSB7XG4gICAgICBpZiAoX3RoaXMuX19vbkZpbmlzaENoYW5nZSkge1xuICAgICAgICBfdGhpcy5fX29uRmluaXNoQ2hhbmdlLmNhbGwoX3RoaXMsIF90aGlzLmdldFZhbHVlKCkpO1xuICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBvbkJsdXIoKSB7XG4gICAgICBvbkZpbmlzaCgpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBvbk1vdXNlRHJhZyhlKSB7XG4gICAgICB2YXIgZGlmZiA9IHByZXZZIC0gZS5jbGllbnRZO1xuICAgICAgX3RoaXMuc2V0VmFsdWUoX3RoaXMuZ2V0VmFsdWUoKSArIGRpZmYgKiBfdGhpcy5fX2ltcGxpZWRTdGVwKTtcbiAgICAgIHByZXZZID0gZS5jbGllbnRZO1xuICAgIH1cbiAgICBmdW5jdGlvbiBvbk1vdXNlVXAoKSB7XG4gICAgICBkb20udW5iaW5kKHdpbmRvdywgJ21vdXNlbW92ZScsIG9uTW91c2VEcmFnKTtcbiAgICAgIGRvbS51bmJpbmQod2luZG93LCAnbW91c2V1cCcsIG9uTW91c2VVcCk7XG4gICAgICBvbkZpbmlzaCgpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBvbk1vdXNlRG93bihlKSB7XG4gICAgICBkb20uYmluZCh3aW5kb3csICdtb3VzZW1vdmUnLCBvbk1vdXNlRHJhZyk7XG4gICAgICBkb20uYmluZCh3aW5kb3csICdtb3VzZXVwJywgb25Nb3VzZVVwKTtcbiAgICAgIHByZXZZID0gZS5jbGllbnRZO1xuICAgIH1cbiAgICBfdGhpczIuX19pbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgX3RoaXMyLl9faW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgICBkb20uYmluZChfdGhpczIuX19pbnB1dCwgJ2NoYW5nZScsIG9uQ2hhbmdlKTtcbiAgICBkb20uYmluZChfdGhpczIuX19pbnB1dCwgJ2JsdXInLCBvbkJsdXIpO1xuICAgIGRvbS5iaW5kKF90aGlzMi5fX2lucHV0LCAnbW91c2Vkb3duJywgb25Nb3VzZURvd24pO1xuICAgIGRvbS5iaW5kKF90aGlzMi5fX2lucHV0LCAna2V5ZG93bicsIGZ1bmN0aW9uIChlKSB7XG4gICAgICBpZiAoZS5rZXlDb2RlID09PSAxMykge1xuICAgICAgICBfdGhpcy5fX3RydW5jYXRpb25TdXNwZW5kZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLmJsdXIoKTtcbiAgICAgICAgX3RoaXMuX190cnVuY2F0aW9uU3VzcGVuZGVkID0gZmFsc2U7XG4gICAgICAgIG9uRmluaXNoKCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgX3RoaXMyLnVwZGF0ZURpc3BsYXkoKTtcbiAgICBfdGhpczIuZG9tRWxlbWVudC5hcHBlbmRDaGlsZChfdGhpczIuX19pbnB1dCk7XG4gICAgcmV0dXJuIF90aGlzMjtcbiAgfVxuICBjcmVhdGVDbGFzcyhOdW1iZXJDb250cm9sbGVyQm94LCBbe1xuICAgIGtleTogJ3VwZGF0ZURpc3BsYXknLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB1cGRhdGVEaXNwbGF5KCkge1xuICAgICAgdGhpcy5fX2lucHV0LnZhbHVlID0gdGhpcy5fX3RydW5jYXRpb25TdXNwZW5kZWQgPyB0aGlzLmdldFZhbHVlKCkgOiByb3VuZFRvRGVjaW1hbCh0aGlzLmdldFZhbHVlKCksIHRoaXMuX19wcmVjaXNpb24pO1xuICAgICAgcmV0dXJuIGdldChOdW1iZXJDb250cm9sbGVyQm94LnByb3RvdHlwZS5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKE51bWJlckNvbnRyb2xsZXJCb3gucHJvdG90eXBlKSwgJ3VwZGF0ZURpc3BsYXknLCB0aGlzKS5jYWxsKHRoaXMpO1xuICAgIH1cbiAgfV0pO1xuICByZXR1cm4gTnVtYmVyQ29udHJvbGxlckJveDtcbn0oTnVtYmVyQ29udHJvbGxlcik7XG5cbmZ1bmN0aW9uIG1hcCh2LCBpMSwgaTIsIG8xLCBvMikge1xuICByZXR1cm4gbzEgKyAobzIgLSBvMSkgKiAoKHYgLSBpMSkgLyAoaTIgLSBpMSkpO1xufVxudmFyIE51bWJlckNvbnRyb2xsZXJTbGlkZXIgPSBmdW5jdGlvbiAoX051bWJlckNvbnRyb2xsZXIpIHtcbiAgaW5oZXJpdHMoTnVtYmVyQ29udHJvbGxlclNsaWRlciwgX051bWJlckNvbnRyb2xsZXIpO1xuICBmdW5jdGlvbiBOdW1iZXJDb250cm9sbGVyU2xpZGVyKG9iamVjdCwgcHJvcGVydHksIG1pbiwgbWF4LCBzdGVwKSB7XG4gICAgY2xhc3NDYWxsQ2hlY2sodGhpcywgTnVtYmVyQ29udHJvbGxlclNsaWRlcik7XG4gICAgdmFyIF90aGlzMiA9IHBvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKE51bWJlckNvbnRyb2xsZXJTbGlkZXIuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihOdW1iZXJDb250cm9sbGVyU2xpZGVyKSkuY2FsbCh0aGlzLCBvYmplY3QsIHByb3BlcnR5LCB7IG1pbjogbWluLCBtYXg6IG1heCwgc3RlcDogc3RlcCB9KSk7XG4gICAgdmFyIF90aGlzID0gX3RoaXMyO1xuICAgIF90aGlzMi5fX2JhY2tncm91bmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBfdGhpczIuX19mb3JlZ3JvdW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZG9tLmJpbmQoX3RoaXMyLl9fYmFja2dyb3VuZCwgJ21vdXNlZG93bicsIG9uTW91c2VEb3duKTtcbiAgICBkb20uYmluZChfdGhpczIuX19iYWNrZ3JvdW5kLCAndG91Y2hzdGFydCcsIG9uVG91Y2hTdGFydCk7XG4gICAgZG9tLmFkZENsYXNzKF90aGlzMi5fX2JhY2tncm91bmQsICdzbGlkZXInKTtcbiAgICBkb20uYWRkQ2xhc3MoX3RoaXMyLl9fZm9yZWdyb3VuZCwgJ3NsaWRlci1mZycpO1xuICAgIGZ1bmN0aW9uIG9uTW91c2VEb3duKGUpIHtcbiAgICAgIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQuYmx1cigpO1xuICAgICAgZG9tLmJpbmQod2luZG93LCAnbW91c2Vtb3ZlJywgb25Nb3VzZURyYWcpO1xuICAgICAgZG9tLmJpbmQod2luZG93LCAnbW91c2V1cCcsIG9uTW91c2VVcCk7XG4gICAgICBvbk1vdXNlRHJhZyhlKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gb25Nb3VzZURyYWcoZSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdmFyIGJnUmVjdCA9IF90aGlzLl9fYmFja2dyb3VuZC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgIF90aGlzLnNldFZhbHVlKG1hcChlLmNsaWVudFgsIGJnUmVjdC5sZWZ0LCBiZ1JlY3QucmlnaHQsIF90aGlzLl9fbWluLCBfdGhpcy5fX21heCkpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBmdW5jdGlvbiBvbk1vdXNlVXAoKSB7XG4gICAgICBkb20udW5iaW5kKHdpbmRvdywgJ21vdXNlbW92ZScsIG9uTW91c2VEcmFnKTtcbiAgICAgIGRvbS51bmJpbmQod2luZG93LCAnbW91c2V1cCcsIG9uTW91c2VVcCk7XG4gICAgICBpZiAoX3RoaXMuX19vbkZpbmlzaENoYW5nZSkge1xuICAgICAgICBfdGhpcy5fX29uRmluaXNoQ2hhbmdlLmNhbGwoX3RoaXMsIF90aGlzLmdldFZhbHVlKCkpO1xuICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBvblRvdWNoU3RhcnQoZSkge1xuICAgICAgaWYgKGUudG91Y2hlcy5sZW5ndGggIT09IDEpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgZG9tLmJpbmQod2luZG93LCAndG91Y2htb3ZlJywgb25Ub3VjaE1vdmUpO1xuICAgICAgZG9tLmJpbmQod2luZG93LCAndG91Y2hlbmQnLCBvblRvdWNoRW5kKTtcbiAgICAgIG9uVG91Y2hNb3ZlKGUpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBvblRvdWNoTW92ZShlKSB7XG4gICAgICB2YXIgY2xpZW50WCA9IGUudG91Y2hlc1swXS5jbGllbnRYO1xuICAgICAgdmFyIGJnUmVjdCA9IF90aGlzLl9fYmFja2dyb3VuZC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgIF90aGlzLnNldFZhbHVlKG1hcChjbGllbnRYLCBiZ1JlY3QubGVmdCwgYmdSZWN0LnJpZ2h0LCBfdGhpcy5fX21pbiwgX3RoaXMuX19tYXgpKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gb25Ub3VjaEVuZCgpIHtcbiAgICAgIGRvbS51bmJpbmQod2luZG93LCAndG91Y2htb3ZlJywgb25Ub3VjaE1vdmUpO1xuICAgICAgZG9tLnVuYmluZCh3aW5kb3csICd0b3VjaGVuZCcsIG9uVG91Y2hFbmQpO1xuICAgICAgaWYgKF90aGlzLl9fb25GaW5pc2hDaGFuZ2UpIHtcbiAgICAgICAgX3RoaXMuX19vbkZpbmlzaENoYW5nZS5jYWxsKF90aGlzLCBfdGhpcy5nZXRWYWx1ZSgpKTtcbiAgICAgIH1cbiAgICB9XG4gICAgX3RoaXMyLnVwZGF0ZURpc3BsYXkoKTtcbiAgICBfdGhpczIuX19iYWNrZ3JvdW5kLmFwcGVuZENoaWxkKF90aGlzMi5fX2ZvcmVncm91bmQpO1xuICAgIF90aGlzMi5kb21FbGVtZW50LmFwcGVuZENoaWxkKF90aGlzMi5fX2JhY2tncm91bmQpO1xuICAgIHJldHVybiBfdGhpczI7XG4gIH1cbiAgY3JlYXRlQ2xhc3MoTnVtYmVyQ29udHJvbGxlclNsaWRlciwgW3tcbiAgICBrZXk6ICd1cGRhdGVEaXNwbGF5JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gdXBkYXRlRGlzcGxheSgpIHtcbiAgICAgIHZhciBwY3QgPSAodGhpcy5nZXRWYWx1ZSgpIC0gdGhpcy5fX21pbikgLyAodGhpcy5fX21heCAtIHRoaXMuX19taW4pO1xuICAgICAgdGhpcy5fX2ZvcmVncm91bmQuc3R5bGUud2lkdGggPSBwY3QgKiAxMDAgKyAnJSc7XG4gICAgICByZXR1cm4gZ2V0KE51bWJlckNvbnRyb2xsZXJTbGlkZXIucHJvdG90eXBlLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoTnVtYmVyQ29udHJvbGxlclNsaWRlci5wcm90b3R5cGUpLCAndXBkYXRlRGlzcGxheScsIHRoaXMpLmNhbGwodGhpcyk7XG4gICAgfVxuICB9XSk7XG4gIHJldHVybiBOdW1iZXJDb250cm9sbGVyU2xpZGVyO1xufShOdW1iZXJDb250cm9sbGVyKTtcblxudmFyIEZ1bmN0aW9uQ29udHJvbGxlciA9IGZ1bmN0aW9uIChfQ29udHJvbGxlcikge1xuICBpbmhlcml0cyhGdW5jdGlvbkNvbnRyb2xsZXIsIF9Db250cm9sbGVyKTtcbiAgZnVuY3Rpb24gRnVuY3Rpb25Db250cm9sbGVyKG9iamVjdCwgcHJvcGVydHksIHRleHQpIHtcbiAgICBjbGFzc0NhbGxDaGVjayh0aGlzLCBGdW5jdGlvbkNvbnRyb2xsZXIpO1xuICAgIHZhciBfdGhpczIgPSBwb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChGdW5jdGlvbkNvbnRyb2xsZXIuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihGdW5jdGlvbkNvbnRyb2xsZXIpKS5jYWxsKHRoaXMsIG9iamVjdCwgcHJvcGVydHkpKTtcbiAgICB2YXIgX3RoaXMgPSBfdGhpczI7XG4gICAgX3RoaXMyLl9fYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgX3RoaXMyLl9fYnV0dG9uLmlubmVySFRNTCA9IHRleHQgPT09IHVuZGVmaW5lZCA/ICdGaXJlJyA6IHRleHQ7XG4gICAgZG9tLmJpbmQoX3RoaXMyLl9fYnV0dG9uLCAnY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgX3RoaXMuZmlyZSgpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pO1xuICAgIGRvbS5hZGRDbGFzcyhfdGhpczIuX19idXR0b24sICdidXR0b24nKTtcbiAgICBfdGhpczIuZG9tRWxlbWVudC5hcHBlbmRDaGlsZChfdGhpczIuX19idXR0b24pO1xuICAgIHJldHVybiBfdGhpczI7XG4gIH1cbiAgY3JlYXRlQ2xhc3MoRnVuY3Rpb25Db250cm9sbGVyLCBbe1xuICAgIGtleTogJ2ZpcmUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBmaXJlKCkge1xuICAgICAgaWYgKHRoaXMuX19vbkNoYW5nZSkge1xuICAgICAgICB0aGlzLl9fb25DaGFuZ2UuY2FsbCh0aGlzKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuZ2V0VmFsdWUoKS5jYWxsKHRoaXMub2JqZWN0KTtcbiAgICAgIGlmICh0aGlzLl9fb25GaW5pc2hDaGFuZ2UpIHtcbiAgICAgICAgdGhpcy5fX29uRmluaXNoQ2hhbmdlLmNhbGwodGhpcywgdGhpcy5nZXRWYWx1ZSgpKTtcbiAgICAgIH1cbiAgICB9XG4gIH1dKTtcbiAgcmV0dXJuIEZ1bmN0aW9uQ29udHJvbGxlcjtcbn0oQ29udHJvbGxlcik7XG5cbnZhciBDb2xvckNvbnRyb2xsZXIgPSBmdW5jdGlvbiAoX0NvbnRyb2xsZXIpIHtcbiAgaW5oZXJpdHMoQ29sb3JDb250cm9sbGVyLCBfQ29udHJvbGxlcik7XG4gIGZ1bmN0aW9uIENvbG9yQ29udHJvbGxlcihvYmplY3QsIHByb3BlcnR5KSB7XG4gICAgY2xhc3NDYWxsQ2hlY2sodGhpcywgQ29sb3JDb250cm9sbGVyKTtcbiAgICB2YXIgX3RoaXMyID0gcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoQ29sb3JDb250cm9sbGVyLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoQ29sb3JDb250cm9sbGVyKSkuY2FsbCh0aGlzLCBvYmplY3QsIHByb3BlcnR5KSk7XG4gICAgX3RoaXMyLl9fY29sb3IgPSBuZXcgQ29sb3IoX3RoaXMyLmdldFZhbHVlKCkpO1xuICAgIF90aGlzMi5fX3RlbXAgPSBuZXcgQ29sb3IoMCk7XG4gICAgdmFyIF90aGlzID0gX3RoaXMyO1xuICAgIF90aGlzMi5kb21FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZG9tLm1ha2VTZWxlY3RhYmxlKF90aGlzMi5kb21FbGVtZW50LCBmYWxzZSk7XG4gICAgX3RoaXMyLl9fc2VsZWN0b3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBfdGhpczIuX19zZWxlY3Rvci5jbGFzc05hbWUgPSAnc2VsZWN0b3InO1xuICAgIF90aGlzMi5fX3NhdHVyYXRpb25fZmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBfdGhpczIuX19zYXR1cmF0aW9uX2ZpZWxkLmNsYXNzTmFtZSA9ICdzYXR1cmF0aW9uLWZpZWxkJztcbiAgICBfdGhpczIuX19maWVsZF9rbm9iID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgX3RoaXMyLl9fZmllbGRfa25vYi5jbGFzc05hbWUgPSAnZmllbGQta25vYic7XG4gICAgX3RoaXMyLl9fZmllbGRfa25vYl9ib3JkZXIgPSAnMnB4IHNvbGlkICc7XG4gICAgX3RoaXMyLl9faHVlX2tub2IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBfdGhpczIuX19odWVfa25vYi5jbGFzc05hbWUgPSAnaHVlLWtub2InO1xuICAgIF90aGlzMi5fX2h1ZV9maWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIF90aGlzMi5fX2h1ZV9maWVsZC5jbGFzc05hbWUgPSAnaHVlLWZpZWxkJztcbiAgICBfdGhpczIuX19pbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgX3RoaXMyLl9faW5wdXQudHlwZSA9ICd0ZXh0JztcbiAgICBfdGhpczIuX19pbnB1dF90ZXh0U2hhZG93ID0gJzAgMXB4IDFweCAnO1xuICAgIGRvbS5iaW5kKF90aGlzMi5fX2lucHV0LCAna2V5ZG93bicsIGZ1bmN0aW9uIChlKSB7XG4gICAgICBpZiAoZS5rZXlDb2RlID09PSAxMykge1xuICAgICAgICBvbkJsdXIuY2FsbCh0aGlzKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBkb20uYmluZChfdGhpczIuX19pbnB1dCwgJ2JsdXInLCBvbkJsdXIpO1xuICAgIGRvbS5iaW5kKF90aGlzMi5fX3NlbGVjdG9yLCAnbW91c2Vkb3duJywgZnVuY3Rpb24gKCkge1xuICAgICAgZG9tLmFkZENsYXNzKHRoaXMsICdkcmFnJykuYmluZCh3aW5kb3csICdtb3VzZXVwJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBkb20ucmVtb3ZlQ2xhc3MoX3RoaXMuX19zZWxlY3RvciwgJ2RyYWcnKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIGRvbS5iaW5kKF90aGlzMi5fX3NlbGVjdG9yLCAndG91Y2hzdGFydCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGRvbS5hZGRDbGFzcyh0aGlzLCAnZHJhZycpLmJpbmQod2luZG93LCAndG91Y2hlbmQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGRvbS5yZW1vdmVDbGFzcyhfdGhpcy5fX3NlbGVjdG9yLCAnZHJhZycpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgdmFyIHZhbHVlRmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBDb21tb24uZXh0ZW5kKF90aGlzMi5fX3NlbGVjdG9yLnN0eWxlLCB7XG4gICAgICB3aWR0aDogJzEyMnB4JyxcbiAgICAgIGhlaWdodDogJzEwMnB4JyxcbiAgICAgIHBhZGRpbmc6ICczcHgnLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzIyMicsXG4gICAgICBib3hTaGFkb3c6ICcwcHggMXB4IDNweCByZ2JhKDAsMCwwLDAuMyknXG4gICAgfSk7XG4gICAgQ29tbW9uLmV4dGVuZChfdGhpczIuX19maWVsZF9rbm9iLnN0eWxlLCB7XG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIHdpZHRoOiAnMTJweCcsXG4gICAgICBoZWlnaHQ6ICcxMnB4JyxcbiAgICAgIGJvcmRlcjogX3RoaXMyLl9fZmllbGRfa25vYl9ib3JkZXIgKyAoX3RoaXMyLl9fY29sb3IudiA8IDAuNSA/ICcjZmZmJyA6ICcjMDAwJyksXG4gICAgICBib3hTaGFkb3c6ICcwcHggMXB4IDNweCByZ2JhKDAsMCwwLDAuNSknLFxuICAgICAgYm9yZGVyUmFkaXVzOiAnMTJweCcsXG4gICAgICB6SW5kZXg6IDFcbiAgICB9KTtcbiAgICBDb21tb24uZXh0ZW5kKF90aGlzMi5fX2h1ZV9rbm9iLnN0eWxlLCB7XG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIHdpZHRoOiAnMTVweCcsXG4gICAgICBoZWlnaHQ6ICcycHgnLFxuICAgICAgYm9yZGVyUmlnaHQ6ICc0cHggc29saWQgI2ZmZicsXG4gICAgICB6SW5kZXg6IDFcbiAgICB9KTtcbiAgICBDb21tb24uZXh0ZW5kKF90aGlzMi5fX3NhdHVyYXRpb25fZmllbGQuc3R5bGUsIHtcbiAgICAgIHdpZHRoOiAnMTAwcHgnLFxuICAgICAgaGVpZ2h0OiAnMTAwcHgnLFxuICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkICM1NTUnLFxuICAgICAgbWFyZ2luUmlnaHQ6ICczcHgnLFxuICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICBjdXJzb3I6ICdwb2ludGVyJ1xuICAgIH0pO1xuICAgIENvbW1vbi5leHRlbmQodmFsdWVGaWVsZC5zdHlsZSwge1xuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgYmFja2dyb3VuZDogJ25vbmUnXG4gICAgfSk7XG4gICAgbGluZWFyR3JhZGllbnQodmFsdWVGaWVsZCwgJ3RvcCcsICdyZ2JhKDAsMCwwLDApJywgJyMwMDAnKTtcbiAgICBDb21tb24uZXh0ZW5kKF90aGlzMi5fX2h1ZV9maWVsZC5zdHlsZSwge1xuICAgICAgd2lkdGg6ICcxNXB4JyxcbiAgICAgIGhlaWdodDogJzEwMHB4JyxcbiAgICAgIGJvcmRlcjogJzFweCBzb2xpZCAjNTU1JyxcbiAgICAgIGN1cnNvcjogJ25zLXJlc2l6ZScsXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIHRvcDogJzNweCcsXG4gICAgICByaWdodDogJzNweCdcbiAgICB9KTtcbiAgICBodWVHcmFkaWVudChfdGhpczIuX19odWVfZmllbGQpO1xuICAgIENvbW1vbi5leHRlbmQoX3RoaXMyLl9faW5wdXQuc3R5bGUsIHtcbiAgICAgIG91dGxpbmU6ICdub25lJyxcbiAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICBjb2xvcjogJyNmZmYnLFxuICAgICAgYm9yZGVyOiAwLFxuICAgICAgZm9udFdlaWdodDogJ2JvbGQnLFxuICAgICAgdGV4dFNoYWRvdzogX3RoaXMyLl9faW5wdXRfdGV4dFNoYWRvdyArICdyZ2JhKDAsMCwwLDAuNyknXG4gICAgfSk7XG4gICAgZG9tLmJpbmQoX3RoaXMyLl9fc2F0dXJhdGlvbl9maWVsZCwgJ21vdXNlZG93bicsIGZpZWxkRG93bik7XG4gICAgZG9tLmJpbmQoX3RoaXMyLl9fc2F0dXJhdGlvbl9maWVsZCwgJ3RvdWNoc3RhcnQnLCBmaWVsZERvd24pO1xuICAgIGRvbS5iaW5kKF90aGlzMi5fX2ZpZWxkX2tub2IsICdtb3VzZWRvd24nLCBmaWVsZERvd24pO1xuICAgIGRvbS5iaW5kKF90aGlzMi5fX2ZpZWxkX2tub2IsICd0b3VjaHN0YXJ0JywgZmllbGREb3duKTtcbiAgICBkb20uYmluZChfdGhpczIuX19odWVfZmllbGQsICdtb3VzZWRvd24nLCBmaWVsZERvd25IKTtcbiAgICBkb20uYmluZChfdGhpczIuX19odWVfZmllbGQsICd0b3VjaHN0YXJ0JywgZmllbGREb3duSCk7XG4gICAgZnVuY3Rpb24gZmllbGREb3duKGUpIHtcbiAgICAgIHNldFNWKGUpO1xuICAgICAgZG9tLmJpbmQod2luZG93LCAnbW91c2Vtb3ZlJywgc2V0U1YpO1xuICAgICAgZG9tLmJpbmQod2luZG93LCAndG91Y2htb3ZlJywgc2V0U1YpO1xuICAgICAgZG9tLmJpbmQod2luZG93LCAnbW91c2V1cCcsIGZpZWxkVXBTVik7XG4gICAgICBkb20uYmluZCh3aW5kb3csICd0b3VjaGVuZCcsIGZpZWxkVXBTVik7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGZpZWxkRG93bkgoZSkge1xuICAgICAgc2V0SChlKTtcbiAgICAgIGRvbS5iaW5kKHdpbmRvdywgJ21vdXNlbW92ZScsIHNldEgpO1xuICAgICAgZG9tLmJpbmQod2luZG93LCAndG91Y2htb3ZlJywgc2V0SCk7XG4gICAgICBkb20uYmluZCh3aW5kb3csICdtb3VzZXVwJywgZmllbGRVcEgpO1xuICAgICAgZG9tLmJpbmQod2luZG93LCAndG91Y2hlbmQnLCBmaWVsZFVwSCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGZpZWxkVXBTVigpIHtcbiAgICAgIGRvbS51bmJpbmQod2luZG93LCAnbW91c2Vtb3ZlJywgc2V0U1YpO1xuICAgICAgZG9tLnVuYmluZCh3aW5kb3csICd0b3VjaG1vdmUnLCBzZXRTVik7XG4gICAgICBkb20udW5iaW5kKHdpbmRvdywgJ21vdXNldXAnLCBmaWVsZFVwU1YpO1xuICAgICAgZG9tLnVuYmluZCh3aW5kb3csICd0b3VjaGVuZCcsIGZpZWxkVXBTVik7XG4gICAgICBvbkZpbmlzaCgpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBmaWVsZFVwSCgpIHtcbiAgICAgIGRvbS51bmJpbmQod2luZG93LCAnbW91c2Vtb3ZlJywgc2V0SCk7XG4gICAgICBkb20udW5iaW5kKHdpbmRvdywgJ3RvdWNobW92ZScsIHNldEgpO1xuICAgICAgZG9tLnVuYmluZCh3aW5kb3csICdtb3VzZXVwJywgZmllbGRVcEgpO1xuICAgICAgZG9tLnVuYmluZCh3aW5kb3csICd0b3VjaGVuZCcsIGZpZWxkVXBIKTtcbiAgICAgIG9uRmluaXNoKCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIG9uQmx1cigpIHtcbiAgICAgIHZhciBpID0gaW50ZXJwcmV0KHRoaXMudmFsdWUpO1xuICAgICAgaWYgKGkgIT09IGZhbHNlKSB7XG4gICAgICAgIF90aGlzLl9fY29sb3IuX19zdGF0ZSA9IGk7XG4gICAgICAgIF90aGlzLnNldFZhbHVlKF90aGlzLl9fY29sb3IudG9PcmlnaW5hbCgpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMudmFsdWUgPSBfdGhpcy5fX2NvbG9yLnRvU3RyaW5nKCk7XG4gICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIG9uRmluaXNoKCkge1xuICAgICAgaWYgKF90aGlzLl9fb25GaW5pc2hDaGFuZ2UpIHtcbiAgICAgICAgX3RoaXMuX19vbkZpbmlzaENoYW5nZS5jYWxsKF90aGlzLCBfdGhpcy5fX2NvbG9yLnRvT3JpZ2luYWwoKSk7XG4gICAgICB9XG4gICAgfVxuICAgIF90aGlzMi5fX3NhdHVyYXRpb25fZmllbGQuYXBwZW5kQ2hpbGQodmFsdWVGaWVsZCk7XG4gICAgX3RoaXMyLl9fc2VsZWN0b3IuYXBwZW5kQ2hpbGQoX3RoaXMyLl9fZmllbGRfa25vYik7XG4gICAgX3RoaXMyLl9fc2VsZWN0b3IuYXBwZW5kQ2hpbGQoX3RoaXMyLl9fc2F0dXJhdGlvbl9maWVsZCk7XG4gICAgX3RoaXMyLl9fc2VsZWN0b3IuYXBwZW5kQ2hpbGQoX3RoaXMyLl9faHVlX2ZpZWxkKTtcbiAgICBfdGhpczIuX19odWVfZmllbGQuYXBwZW5kQ2hpbGQoX3RoaXMyLl9faHVlX2tub2IpO1xuICAgIF90aGlzMi5kb21FbGVtZW50LmFwcGVuZENoaWxkKF90aGlzMi5fX2lucHV0KTtcbiAgICBfdGhpczIuZG9tRWxlbWVudC5hcHBlbmRDaGlsZChfdGhpczIuX19zZWxlY3Rvcik7XG4gICAgX3RoaXMyLnVwZGF0ZURpc3BsYXkoKTtcbiAgICBmdW5jdGlvbiBzZXRTVihlKSB7XG4gICAgICBpZiAoZS50eXBlLmluZGV4T2YoJ3RvdWNoJykgPT09IC0xKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH1cbiAgICAgIHZhciBmaWVsZFJlY3QgPSBfdGhpcy5fX3NhdHVyYXRpb25fZmllbGQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICB2YXIgX3JlZiA9IGUudG91Y2hlcyAmJiBlLnRvdWNoZXNbMF0gfHwgZSxcbiAgICAgICAgICBjbGllbnRYID0gX3JlZi5jbGllbnRYLFxuICAgICAgICAgIGNsaWVudFkgPSBfcmVmLmNsaWVudFk7XG4gICAgICB2YXIgcyA9IChjbGllbnRYIC0gZmllbGRSZWN0LmxlZnQpIC8gKGZpZWxkUmVjdC5yaWdodCAtIGZpZWxkUmVjdC5sZWZ0KTtcbiAgICAgIHZhciB2ID0gMSAtIChjbGllbnRZIC0gZmllbGRSZWN0LnRvcCkgLyAoZmllbGRSZWN0LmJvdHRvbSAtIGZpZWxkUmVjdC50b3ApO1xuICAgICAgaWYgKHYgPiAxKSB7XG4gICAgICAgIHYgPSAxO1xuICAgICAgfSBlbHNlIGlmICh2IDwgMCkge1xuICAgICAgICB2ID0gMDtcbiAgICAgIH1cbiAgICAgIGlmIChzID4gMSkge1xuICAgICAgICBzID0gMTtcbiAgICAgIH0gZWxzZSBpZiAocyA8IDApIHtcbiAgICAgICAgcyA9IDA7XG4gICAgICB9XG4gICAgICBfdGhpcy5fX2NvbG9yLnYgPSB2O1xuICAgICAgX3RoaXMuX19jb2xvci5zID0gcztcbiAgICAgIF90aGlzLnNldFZhbHVlKF90aGlzLl9fY29sb3IudG9PcmlnaW5hbCgpKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgZnVuY3Rpb24gc2V0SChlKSB7XG4gICAgICBpZiAoZS50eXBlLmluZGV4T2YoJ3RvdWNoJykgPT09IC0xKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH1cbiAgICAgIHZhciBmaWVsZFJlY3QgPSBfdGhpcy5fX2h1ZV9maWVsZC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgIHZhciBfcmVmMiA9IGUudG91Y2hlcyAmJiBlLnRvdWNoZXNbMF0gfHwgZSxcbiAgICAgICAgICBjbGllbnRZID0gX3JlZjIuY2xpZW50WTtcbiAgICAgIHZhciBoID0gMSAtIChjbGllbnRZIC0gZmllbGRSZWN0LnRvcCkgLyAoZmllbGRSZWN0LmJvdHRvbSAtIGZpZWxkUmVjdC50b3ApO1xuICAgICAgaWYgKGggPiAxKSB7XG4gICAgICAgIGggPSAxO1xuICAgICAgfSBlbHNlIGlmIChoIDwgMCkge1xuICAgICAgICBoID0gMDtcbiAgICAgIH1cbiAgICAgIF90aGlzLl9fY29sb3IuaCA9IGggKiAzNjA7XG4gICAgICBfdGhpcy5zZXRWYWx1ZShfdGhpcy5fX2NvbG9yLnRvT3JpZ2luYWwoKSk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiBfdGhpczI7XG4gIH1cbiAgY3JlYXRlQ2xhc3MoQ29sb3JDb250cm9sbGVyLCBbe1xuICAgIGtleTogJ3VwZGF0ZURpc3BsYXknLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB1cGRhdGVEaXNwbGF5KCkge1xuICAgICAgdmFyIGkgPSBpbnRlcnByZXQodGhpcy5nZXRWYWx1ZSgpKTtcbiAgICAgIGlmIChpICE9PSBmYWxzZSkge1xuICAgICAgICB2YXIgbWlzbWF0Y2ggPSBmYWxzZTtcbiAgICAgICAgQ29tbW9uLmVhY2goQ29sb3IuQ09NUE9ORU5UUywgZnVuY3Rpb24gKGNvbXBvbmVudCkge1xuICAgICAgICAgIGlmICghQ29tbW9uLmlzVW5kZWZpbmVkKGlbY29tcG9uZW50XSkgJiYgIUNvbW1vbi5pc1VuZGVmaW5lZCh0aGlzLl9fY29sb3IuX19zdGF0ZVtjb21wb25lbnRdKSAmJiBpW2NvbXBvbmVudF0gIT09IHRoaXMuX19jb2xvci5fX3N0YXRlW2NvbXBvbmVudF0pIHtcbiAgICAgICAgICAgIG1pc21hdGNoID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybiB7fTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIHRoaXMpO1xuICAgICAgICBpZiAobWlzbWF0Y2gpIHtcbiAgICAgICAgICBDb21tb24uZXh0ZW5kKHRoaXMuX19jb2xvci5fX3N0YXRlLCBpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgQ29tbW9uLmV4dGVuZCh0aGlzLl9fdGVtcC5fX3N0YXRlLCB0aGlzLl9fY29sb3IuX19zdGF0ZSk7XG4gICAgICB0aGlzLl9fdGVtcC5hID0gMTtcbiAgICAgIHZhciBmbGlwID0gdGhpcy5fX2NvbG9yLnYgPCAwLjUgfHwgdGhpcy5fX2NvbG9yLnMgPiAwLjUgPyAyNTUgOiAwO1xuICAgICAgdmFyIF9mbGlwID0gMjU1IC0gZmxpcDtcbiAgICAgIENvbW1vbi5leHRlbmQodGhpcy5fX2ZpZWxkX2tub2Iuc3R5bGUsIHtcbiAgICAgICAgbWFyZ2luTGVmdDogMTAwICogdGhpcy5fX2NvbG9yLnMgLSA3ICsgJ3B4JyxcbiAgICAgICAgbWFyZ2luVG9wOiAxMDAgKiAoMSAtIHRoaXMuX19jb2xvci52KSAtIDcgKyAncHgnLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuX190ZW1wLnRvSGV4U3RyaW5nKCksXG4gICAgICAgIGJvcmRlcjogdGhpcy5fX2ZpZWxkX2tub2JfYm9yZGVyICsgJ3JnYignICsgZmxpcCArICcsJyArIGZsaXAgKyAnLCcgKyBmbGlwICsgJyknXG4gICAgICB9KTtcbiAgICAgIHRoaXMuX19odWVfa25vYi5zdHlsZS5tYXJnaW5Ub3AgPSAoMSAtIHRoaXMuX19jb2xvci5oIC8gMzYwKSAqIDEwMCArICdweCc7XG4gICAgICB0aGlzLl9fdGVtcC5zID0gMTtcbiAgICAgIHRoaXMuX190ZW1wLnYgPSAxO1xuICAgICAgbGluZWFyR3JhZGllbnQodGhpcy5fX3NhdHVyYXRpb25fZmllbGQsICdsZWZ0JywgJyNmZmYnLCB0aGlzLl9fdGVtcC50b0hleFN0cmluZygpKTtcbiAgICAgIHRoaXMuX19pbnB1dC52YWx1ZSA9IHRoaXMuX19jb2xvci50b1N0cmluZygpO1xuICAgICAgQ29tbW9uLmV4dGVuZCh0aGlzLl9faW5wdXQuc3R5bGUsIHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGlzLl9fY29sb3IudG9IZXhTdHJpbmcoKSxcbiAgICAgICAgY29sb3I6ICdyZ2IoJyArIGZsaXAgKyAnLCcgKyBmbGlwICsgJywnICsgZmxpcCArICcpJyxcbiAgICAgICAgdGV4dFNoYWRvdzogdGhpcy5fX2lucHV0X3RleHRTaGFkb3cgKyAncmdiYSgnICsgX2ZsaXAgKyAnLCcgKyBfZmxpcCArICcsJyArIF9mbGlwICsgJywuNyknXG4gICAgICB9KTtcbiAgICB9XG4gIH1dKTtcbiAgcmV0dXJuIENvbG9yQ29udHJvbGxlcjtcbn0oQ29udHJvbGxlcik7XG52YXIgdmVuZG9ycyA9IFsnLW1vei0nLCAnLW8tJywgJy13ZWJraXQtJywgJy1tcy0nLCAnJ107XG5mdW5jdGlvbiBsaW5lYXJHcmFkaWVudChlbGVtLCB4LCBhLCBiKSB7XG4gIGVsZW0uc3R5bGUuYmFja2dyb3VuZCA9ICcnO1xuICBDb21tb24uZWFjaCh2ZW5kb3JzLCBmdW5jdGlvbiAodmVuZG9yKSB7XG4gICAgZWxlbS5zdHlsZS5jc3NUZXh0ICs9ICdiYWNrZ3JvdW5kOiAnICsgdmVuZG9yICsgJ2xpbmVhci1ncmFkaWVudCgnICsgeCArICcsICcgKyBhICsgJyAwJSwgJyArIGIgKyAnIDEwMCUpOyAnO1xuICB9KTtcbn1cbmZ1bmN0aW9uIGh1ZUdyYWRpZW50KGVsZW0pIHtcbiAgZWxlbS5zdHlsZS5iYWNrZ3JvdW5kID0gJyc7XG4gIGVsZW0uc3R5bGUuY3NzVGV4dCArPSAnYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQodG9wLCAgI2ZmMDAwMCAwJSwgI2ZmMDBmZiAxNyUsICMwMDAwZmYgMzQlLCAjMDBmZmZmIDUwJSwgIzAwZmYwMCA2NyUsICNmZmZmMDAgODQlLCAjZmYwMDAwIDEwMCUpOyc7XG4gIGVsZW0uc3R5bGUuY3NzVGV4dCArPSAnYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCAgI2ZmMDAwMCAwJSwjZmYwMGZmIDE3JSwjMDAwMGZmIDM0JSwjMDBmZmZmIDUwJSwjMDBmZjAwIDY3JSwjZmZmZjAwIDg0JSwjZmYwMDAwIDEwMCUpOyc7XG4gIGVsZW0uc3R5bGUuY3NzVGV4dCArPSAnYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KHRvcCwgICNmZjAwMDAgMCUsI2ZmMDBmZiAxNyUsIzAwMDBmZiAzNCUsIzAwZmZmZiA1MCUsIzAwZmYwMCA2NyUsI2ZmZmYwMCA4NCUsI2ZmMDAwMCAxMDAlKTsnO1xuICBlbGVtLnN0eWxlLmNzc1RleHQgKz0gJ2JhY2tncm91bmQ6IC1tcy1saW5lYXItZ3JhZGllbnQodG9wLCAgI2ZmMDAwMCAwJSwjZmYwMGZmIDE3JSwjMDAwMGZmIDM0JSwjMDBmZmZmIDUwJSwjMDBmZjAwIDY3JSwjZmZmZjAwIDg0JSwjZmYwMDAwIDEwMCUpOyc7XG4gIGVsZW0uc3R5bGUuY3NzVGV4dCArPSAnYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvcCwgICNmZjAwMDAgMCUsI2ZmMDBmZiAxNyUsIzAwMDBmZiAzNCUsIzAwZmZmZiA1MCUsIzAwZmYwMCA2NyUsI2ZmZmYwMCA4NCUsI2ZmMDAwMCAxMDAlKTsnO1xufVxuXG52YXIgY3NzID0ge1xuICBsb2FkOiBmdW5jdGlvbiBsb2FkKHVybCwgaW5kb2MpIHtcbiAgICB2YXIgZG9jID0gaW5kb2MgfHwgZG9jdW1lbnQ7XG4gICAgdmFyIGxpbmsgPSBkb2MuY3JlYXRlRWxlbWVudCgnbGluaycpO1xuICAgIGxpbmsudHlwZSA9ICd0ZXh0L2Nzcyc7XG4gICAgbGluay5yZWwgPSAnc3R5bGVzaGVldCc7XG4gICAgbGluay5ocmVmID0gdXJsO1xuICAgIGRvYy5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdLmFwcGVuZENoaWxkKGxpbmspO1xuICB9LFxuICBpbmplY3Q6IGZ1bmN0aW9uIGluamVjdChjc3NDb250ZW50LCBpbmRvYykge1xuICAgIHZhciBkb2MgPSBpbmRvYyB8fCBkb2N1bWVudDtcbiAgICB2YXIgaW5qZWN0ZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgIGluamVjdGVkLnR5cGUgPSAndGV4dC9jc3MnO1xuICAgIGluamVjdGVkLmlubmVySFRNTCA9IGNzc0NvbnRlbnQ7XG4gICAgdmFyIGhlYWQgPSBkb2MuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXTtcbiAgICB0cnkge1xuICAgICAgaGVhZC5hcHBlbmRDaGlsZChpbmplY3RlZCk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgIH1cbiAgfVxufTtcblxudmFyIHNhdmVEaWFsb2dDb250ZW50cyA9IFwiPGRpdiBpZD1cXFwiZGctc2F2ZVxcXCIgY2xhc3M9XFxcImRnIGRpYWxvZ3VlXFxcIj5cXG5cXG4gIEhlcmUncyB0aGUgbmV3IGxvYWQgcGFyYW1ldGVyIGZvciB5b3VyIDxjb2RlPkdVSTwvY29kZT4ncyBjb25zdHJ1Y3RvcjpcXG5cXG4gIDx0ZXh0YXJlYSBpZD1cXFwiZGctbmV3LWNvbnN0cnVjdG9yXFxcIj48L3RleHRhcmVhPlxcblxcbiAgPGRpdiBpZD1cXFwiZGctc2F2ZS1sb2NhbGx5XFxcIj5cXG5cXG4gICAgPGlucHV0IGlkPVxcXCJkZy1sb2NhbC1zdG9yYWdlXFxcIiB0eXBlPVxcXCJjaGVja2JveFxcXCIvPiBBdXRvbWF0aWNhbGx5IHNhdmVcXG4gICAgdmFsdWVzIHRvIDxjb2RlPmxvY2FsU3RvcmFnZTwvY29kZT4gb24gZXhpdC5cXG5cXG4gICAgPGRpdiBpZD1cXFwiZGctbG9jYWwtZXhwbGFpblxcXCI+VGhlIHZhbHVlcyBzYXZlZCB0byA8Y29kZT5sb2NhbFN0b3JhZ2U8L2NvZGU+IHdpbGxcXG4gICAgICBvdmVycmlkZSB0aG9zZSBwYXNzZWQgdG8gPGNvZGU+ZGF0LkdVSTwvY29kZT4ncyBjb25zdHJ1Y3Rvci4gVGhpcyBtYWtlcyBpdFxcbiAgICAgIGVhc2llciB0byB3b3JrIGluY3JlbWVudGFsbHksIGJ1dCA8Y29kZT5sb2NhbFN0b3JhZ2U8L2NvZGU+IGlzIGZyYWdpbGUsXFxuICAgICAgYW5kIHlvdXIgZnJpZW5kcyBtYXkgbm90IHNlZSB0aGUgc2FtZSB2YWx1ZXMgeW91IGRvLlxcblxcbiAgICA8L2Rpdj5cXG5cXG4gIDwvZGl2PlxcblxcbjwvZGl2PlwiO1xuXG52YXIgQ29udHJvbGxlckZhY3RvcnkgPSBmdW5jdGlvbiBDb250cm9sbGVyRmFjdG9yeShvYmplY3QsIHByb3BlcnR5KSB7XG4gIHZhciBpbml0aWFsVmFsdWUgPSBvYmplY3RbcHJvcGVydHldO1xuICBpZiAoQ29tbW9uLmlzQXJyYXkoYXJndW1lbnRzWzJdKSB8fCBDb21tb24uaXNPYmplY3QoYXJndW1lbnRzWzJdKSkge1xuICAgIHJldHVybiBuZXcgT3B0aW9uQ29udHJvbGxlcihvYmplY3QsIHByb3BlcnR5LCBhcmd1bWVudHNbMl0pO1xuICB9XG4gIGlmIChDb21tb24uaXNOdW1iZXIoaW5pdGlhbFZhbHVlKSkge1xuICAgIGlmIChDb21tb24uaXNOdW1iZXIoYXJndW1lbnRzWzJdKSAmJiBDb21tb24uaXNOdW1iZXIoYXJndW1lbnRzWzNdKSkge1xuICAgICAgaWYgKENvbW1vbi5pc051bWJlcihhcmd1bWVudHNbNF0pKSB7XG4gICAgICAgIHJldHVybiBuZXcgTnVtYmVyQ29udHJvbGxlclNsaWRlcihvYmplY3QsIHByb3BlcnR5LCBhcmd1bWVudHNbMl0sIGFyZ3VtZW50c1szXSwgYXJndW1lbnRzWzRdKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBuZXcgTnVtYmVyQ29udHJvbGxlclNsaWRlcihvYmplY3QsIHByb3BlcnR5LCBhcmd1bWVudHNbMl0sIGFyZ3VtZW50c1szXSk7XG4gICAgfVxuICAgIGlmIChDb21tb24uaXNOdW1iZXIoYXJndW1lbnRzWzRdKSkge1xuICAgICAgcmV0dXJuIG5ldyBOdW1iZXJDb250cm9sbGVyQm94KG9iamVjdCwgcHJvcGVydHksIHsgbWluOiBhcmd1bWVudHNbMl0sIG1heDogYXJndW1lbnRzWzNdLCBzdGVwOiBhcmd1bWVudHNbNF0gfSk7XG4gICAgfVxuICAgIHJldHVybiBuZXcgTnVtYmVyQ29udHJvbGxlckJveChvYmplY3QsIHByb3BlcnR5LCB7IG1pbjogYXJndW1lbnRzWzJdLCBtYXg6IGFyZ3VtZW50c1szXSB9KTtcbiAgfVxuICBpZiAoQ29tbW9uLmlzU3RyaW5nKGluaXRpYWxWYWx1ZSkpIHtcbiAgICByZXR1cm4gbmV3IFN0cmluZ0NvbnRyb2xsZXIob2JqZWN0LCBwcm9wZXJ0eSk7XG4gIH1cbiAgaWYgKENvbW1vbi5pc0Z1bmN0aW9uKGluaXRpYWxWYWx1ZSkpIHtcbiAgICByZXR1cm4gbmV3IEZ1bmN0aW9uQ29udHJvbGxlcihvYmplY3QsIHByb3BlcnR5LCAnJyk7XG4gIH1cbiAgaWYgKENvbW1vbi5pc0Jvb2xlYW4oaW5pdGlhbFZhbHVlKSkge1xuICAgIHJldHVybiBuZXcgQm9vbGVhbkNvbnRyb2xsZXIob2JqZWN0LCBwcm9wZXJ0eSk7XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59O1xuXG5mdW5jdGlvbiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoY2FsbGJhY2spIHtcbiAgc2V0VGltZW91dChjYWxsYmFjaywgMTAwMCAvIDYwKTtcbn1cbnZhciByZXF1ZXN0QW5pbWF0aW9uRnJhbWUkMSA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgd2luZG93LndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSB8fCB3aW5kb3cubW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IHdpbmRvdy5vUmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IHdpbmRvdy5tc1JlcXVlc3RBbmltYXRpb25GcmFtZSB8fCByZXF1ZXN0QW5pbWF0aW9uRnJhbWU7XG5cbnZhciBDZW50ZXJlZERpdiA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gQ2VudGVyZWREaXYoKSB7XG4gICAgY2xhc3NDYWxsQ2hlY2sodGhpcywgQ2VudGVyZWREaXYpO1xuICAgIHRoaXMuYmFja2dyb3VuZEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBDb21tb24uZXh0ZW5kKHRoaXMuYmFja2dyb3VuZEVsZW1lbnQuc3R5bGUsIHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMCwwLDAsMC44KScsXG4gICAgICB0b3A6IDAsXG4gICAgICBsZWZ0OiAwLFxuICAgICAgZGlzcGxheTogJ25vbmUnLFxuICAgICAgekluZGV4OiAnMTAwMCcsXG4gICAgICBvcGFjaXR5OiAwLFxuICAgICAgV2Via2l0VHJhbnNpdGlvbjogJ29wYWNpdHkgMC4ycyBsaW5lYXInLFxuICAgICAgdHJhbnNpdGlvbjogJ29wYWNpdHkgMC4ycyBsaW5lYXInXG4gICAgfSk7XG4gICAgZG9tLm1ha2VGdWxsc2NyZWVuKHRoaXMuYmFja2dyb3VuZEVsZW1lbnQpO1xuICAgIHRoaXMuYmFja2dyb3VuZEVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAnZml4ZWQnO1xuICAgIHRoaXMuZG9tRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIENvbW1vbi5leHRlbmQodGhpcy5kb21FbGVtZW50LnN0eWxlLCB7XG4gICAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICAgIGRpc3BsYXk6ICdub25lJyxcbiAgICAgIHpJbmRleDogJzEwMDEnLFxuICAgICAgb3BhY2l0eTogMCxcbiAgICAgIFdlYmtpdFRyYW5zaXRpb246ICctd2Via2l0LXRyYW5zZm9ybSAwLjJzIGVhc2Utb3V0LCBvcGFjaXR5IDAuMnMgbGluZWFyJyxcbiAgICAgIHRyYW5zaXRpb246ICd0cmFuc2Zvcm0gMC4ycyBlYXNlLW91dCwgb3BhY2l0eSAwLjJzIGxpbmVhcidcbiAgICB9KTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuYmFja2dyb3VuZEVsZW1lbnQpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5kb21FbGVtZW50KTtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgIGRvbS5iaW5kKHRoaXMuYmFja2dyb3VuZEVsZW1lbnQsICdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzLmhpZGUoKTtcbiAgICB9KTtcbiAgfVxuICBjcmVhdGVDbGFzcyhDZW50ZXJlZERpdiwgW3tcbiAgICBrZXk6ICdzaG93JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2hvdygpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICB0aGlzLmJhY2tncm91bmRFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgdGhpcy5kb21FbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgdGhpcy5kb21FbGVtZW50LnN0eWxlLm9wYWNpdHkgPSAwO1xuICAgICAgdGhpcy5kb21FbGVtZW50LnN0eWxlLndlYmtpdFRyYW5zZm9ybSA9ICdzY2FsZSgxLjEpJztcbiAgICAgIHRoaXMubGF5b3V0KCk7XG4gICAgICBDb21tb24uZGVmZXIoZnVuY3Rpb24gKCkge1xuICAgICAgICBfdGhpcy5iYWNrZ3JvdW5kRWxlbWVudC5zdHlsZS5vcGFjaXR5ID0gMTtcbiAgICAgICAgX3RoaXMuZG9tRWxlbWVudC5zdHlsZS5vcGFjaXR5ID0gMTtcbiAgICAgICAgX3RoaXMuZG9tRWxlbWVudC5zdHlsZS53ZWJraXRUcmFuc2Zvcm0gPSAnc2NhbGUoMSknO1xuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnaGlkZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGhpZGUoKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgdmFyIGhpZGUgPSBmdW5jdGlvbiBoaWRlKCkge1xuICAgICAgICBfdGhpcy5kb21FbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIF90aGlzLmJhY2tncm91bmRFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIGRvbS51bmJpbmQoX3RoaXMuZG9tRWxlbWVudCwgJ3dlYmtpdFRyYW5zaXRpb25FbmQnLCBoaWRlKTtcbiAgICAgICAgZG9tLnVuYmluZChfdGhpcy5kb21FbGVtZW50LCAndHJhbnNpdGlvbmVuZCcsIGhpZGUpO1xuICAgICAgICBkb20udW5iaW5kKF90aGlzLmRvbUVsZW1lbnQsICdvVHJhbnNpdGlvbkVuZCcsIGhpZGUpO1xuICAgICAgfTtcbiAgICAgIGRvbS5iaW5kKHRoaXMuZG9tRWxlbWVudCwgJ3dlYmtpdFRyYW5zaXRpb25FbmQnLCBoaWRlKTtcbiAgICAgIGRvbS5iaW5kKHRoaXMuZG9tRWxlbWVudCwgJ3RyYW5zaXRpb25lbmQnLCBoaWRlKTtcbiAgICAgIGRvbS5iaW5kKHRoaXMuZG9tRWxlbWVudCwgJ29UcmFuc2l0aW9uRW5kJywgaGlkZSk7XG4gICAgICB0aGlzLmJhY2tncm91bmRFbGVtZW50LnN0eWxlLm9wYWNpdHkgPSAwO1xuICAgICAgdGhpcy5kb21FbGVtZW50LnN0eWxlLm9wYWNpdHkgPSAwO1xuICAgICAgdGhpcy5kb21FbGVtZW50LnN0eWxlLndlYmtpdFRyYW5zZm9ybSA9ICdzY2FsZSgxLjEpJztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdsYXlvdXQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBsYXlvdXQoKSB7XG4gICAgICB0aGlzLmRvbUVsZW1lbnQuc3R5bGUubGVmdCA9IHdpbmRvdy5pbm5lcldpZHRoIC8gMiAtIGRvbS5nZXRXaWR0aCh0aGlzLmRvbUVsZW1lbnQpIC8gMiArICdweCc7XG4gICAgICB0aGlzLmRvbUVsZW1lbnQuc3R5bGUudG9wID0gd2luZG93LmlubmVySGVpZ2h0IC8gMiAtIGRvbS5nZXRIZWlnaHQodGhpcy5kb21FbGVtZW50KSAvIDIgKyAncHgnO1xuICAgIH1cbiAgfV0pO1xuICByZXR1cm4gQ2VudGVyZWREaXY7XG59KCk7XG5cbnZhciBzdHlsZVNoZWV0ID0gX19fJGluc2VydFN0eWxlKFwiLmRnIHVse2xpc3Qtc3R5bGU6bm9uZTttYXJnaW46MDtwYWRkaW5nOjA7d2lkdGg6MTAwJTtjbGVhcjpib3RofS5kZy5hY3twb3NpdGlvbjpmaXhlZDt0b3A6MDtsZWZ0OjA7cmlnaHQ6MDtoZWlnaHQ6MDt6LWluZGV4OjB9LmRnOm5vdCguYWMpIC5tYWlue292ZXJmbG93OmhpZGRlbn0uZGcubWFpbnstd2Via2l0LXRyYW5zaXRpb246b3BhY2l0eSAuMXMgbGluZWFyOy1vLXRyYW5zaXRpb246b3BhY2l0eSAuMXMgbGluZWFyOy1tb3otdHJhbnNpdGlvbjpvcGFjaXR5IC4xcyBsaW5lYXI7dHJhbnNpdGlvbjpvcGFjaXR5IC4xcyBsaW5lYXJ9LmRnLm1haW4udGFsbGVyLXRoYW4td2luZG93e292ZXJmbG93LXk6YXV0b30uZGcubWFpbi50YWxsZXItdGhhbi13aW5kb3cgLmNsb3NlLWJ1dHRvbntvcGFjaXR5OjE7bWFyZ2luLXRvcDotMXB4O2JvcmRlci10b3A6MXB4IHNvbGlkICMyYzJjMmN9LmRnLm1haW4gdWwuY2xvc2VkIC5jbG9zZS1idXR0b257b3BhY2l0eToxICFpbXBvcnRhbnR9LmRnLm1haW46aG92ZXIgLmNsb3NlLWJ1dHRvbiwuZGcubWFpbiAuY2xvc2UtYnV0dG9uLmRyYWd7b3BhY2l0eToxfS5kZy5tYWluIC5jbG9zZS1idXR0b257LXdlYmtpdC10cmFuc2l0aW9uOm9wYWNpdHkgLjFzIGxpbmVhcjstby10cmFuc2l0aW9uOm9wYWNpdHkgLjFzIGxpbmVhcjstbW96LXRyYW5zaXRpb246b3BhY2l0eSAuMXMgbGluZWFyO3RyYW5zaXRpb246b3BhY2l0eSAuMXMgbGluZWFyO2JvcmRlcjowO2xpbmUtaGVpZ2h0OjE5cHg7aGVpZ2h0OjIwcHg7Y3Vyc29yOnBvaW50ZXI7dGV4dC1hbGlnbjpjZW50ZXI7YmFja2dyb3VuZC1jb2xvcjojMDAwfS5kZy5tYWluIC5jbG9zZS1idXR0b24uY2xvc2UtdG9we3Bvc2l0aW9uOnJlbGF0aXZlfS5kZy5tYWluIC5jbG9zZS1idXR0b24uY2xvc2UtYm90dG9te3Bvc2l0aW9uOmFic29sdXRlfS5kZy5tYWluIC5jbG9zZS1idXR0b246aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojMTExfS5kZy5he2Zsb2F0OnJpZ2h0O21hcmdpbi1yaWdodDoxNXB4O292ZXJmbG93LXk6dmlzaWJsZX0uZGcuYS5oYXMtc2F2ZT51bC5jbG9zZS10b3B7bWFyZ2luLXRvcDowfS5kZy5hLmhhcy1zYXZlPnVsLmNsb3NlLWJvdHRvbXttYXJnaW4tdG9wOjI3cHh9LmRnLmEuaGFzLXNhdmU+dWwuY2xvc2Vke21hcmdpbi10b3A6MH0uZGcuYSAuc2F2ZS1yb3d7dG9wOjA7ei1pbmRleDoxMDAyfS5kZy5hIC5zYXZlLXJvdy5jbG9zZS10b3B7cG9zaXRpb246cmVsYXRpdmV9LmRnLmEgLnNhdmUtcm93LmNsb3NlLWJvdHRvbXtwb3NpdGlvbjpmaXhlZH0uZGcgbGl7LXdlYmtpdC10cmFuc2l0aW9uOmhlaWdodCAuMXMgZWFzZS1vdXQ7LW8tdHJhbnNpdGlvbjpoZWlnaHQgLjFzIGVhc2Utb3V0Oy1tb3otdHJhbnNpdGlvbjpoZWlnaHQgLjFzIGVhc2Utb3V0O3RyYW5zaXRpb246aGVpZ2h0IC4xcyBlYXNlLW91dDstd2Via2l0LXRyYW5zaXRpb246b3ZlcmZsb3cgLjFzIGxpbmVhcjstby10cmFuc2l0aW9uOm92ZXJmbG93IC4xcyBsaW5lYXI7LW1vei10cmFuc2l0aW9uOm92ZXJmbG93IC4xcyBsaW5lYXI7dHJhbnNpdGlvbjpvdmVyZmxvdyAuMXMgbGluZWFyfS5kZyBsaTpub3QoLmZvbGRlcil7Y3Vyc29yOmF1dG87aGVpZ2h0OjI3cHg7bGluZS1oZWlnaHQ6MjdweDtwYWRkaW5nOjAgNHB4IDAgNXB4fS5kZyBsaS5mb2xkZXJ7cGFkZGluZzowO2JvcmRlci1sZWZ0OjRweCBzb2xpZCByZ2JhKDAsMCwwLDApfS5kZyBsaS50aXRsZXtjdXJzb3I6cG9pbnRlcjttYXJnaW4tbGVmdDotNHB4fS5kZyAuY2xvc2VkIGxpOm5vdCgudGl0bGUpLC5kZyAuY2xvc2VkIHVsIGxpLC5kZyAuY2xvc2VkIHVsIGxpPip7aGVpZ2h0OjA7b3ZlcmZsb3c6aGlkZGVuO2JvcmRlcjowfS5kZyAuY3J7Y2xlYXI6Ym90aDtwYWRkaW5nLWxlZnQ6M3B4O2hlaWdodDoyN3B4O292ZXJmbG93OmhpZGRlbn0uZGcgLnByb3BlcnR5LW5hbWV7Y3Vyc29yOmRlZmF1bHQ7ZmxvYXQ6bGVmdDtjbGVhcjpsZWZ0O3dpZHRoOjQwJTtvdmVyZmxvdzpoaWRkZW47dGV4dC1vdmVyZmxvdzplbGxpcHNpc30uZGcgLmNyLmZ1bmN0aW9uIC5wcm9wZXJ0eS1uYW1le3dpZHRoOjEwMCV9LmRnIC5je2Zsb2F0OmxlZnQ7d2lkdGg6NjAlO3Bvc2l0aW9uOnJlbGF0aXZlfS5kZyAuYyBpbnB1dFt0eXBlPXRleHRde2JvcmRlcjowO21hcmdpbi10b3A6NHB4O3BhZGRpbmc6M3B4O3dpZHRoOjEwMCU7ZmxvYXQ6cmlnaHR9LmRnIC5oYXMtc2xpZGVyIGlucHV0W3R5cGU9dGV4dF17d2lkdGg6MzAlO21hcmdpbi1sZWZ0OjB9LmRnIC5zbGlkZXJ7ZmxvYXQ6bGVmdDt3aWR0aDo2NiU7bWFyZ2luLWxlZnQ6LTVweDttYXJnaW4tcmlnaHQ6MDtoZWlnaHQ6MTlweDttYXJnaW4tdG9wOjRweH0uZGcgLnNsaWRlci1mZ3toZWlnaHQ6MTAwJX0uZGcgLmMgaW5wdXRbdHlwZT1jaGVja2JveF17bWFyZ2luLXRvcDo3cHh9LmRnIC5jIHNlbGVjdHttYXJnaW4tdG9wOjVweH0uZGcgLmNyLmZ1bmN0aW9uLC5kZyAuY3IuZnVuY3Rpb24gLnByb3BlcnR5LW5hbWUsLmRnIC5jci5mdW5jdGlvbiAqLC5kZyAuY3IuYm9vbGVhbiwuZGcgLmNyLmJvb2xlYW4gKntjdXJzb3I6cG9pbnRlcn0uZGcgLmNyLmNvbG9ye292ZXJmbG93OnZpc2libGV9LmRnIC5zZWxlY3RvcntkaXNwbGF5Om5vbmU7cG9zaXRpb246YWJzb2x1dGU7bWFyZ2luLWxlZnQ6LTlweDttYXJnaW4tdG9wOjIzcHg7ei1pbmRleDoxMH0uZGcgLmM6aG92ZXIgLnNlbGVjdG9yLC5kZyAuc2VsZWN0b3IuZHJhZ3tkaXNwbGF5OmJsb2NrfS5kZyBsaS5zYXZlLXJvd3twYWRkaW5nOjB9LmRnIGxpLnNhdmUtcm93IC5idXR0b257ZGlzcGxheTppbmxpbmUtYmxvY2s7cGFkZGluZzowcHggNnB4fS5kZy5kaWFsb2d1ZXtiYWNrZ3JvdW5kLWNvbG9yOiMyMjI7d2lkdGg6NDYwcHg7cGFkZGluZzoxNXB4O2ZvbnQtc2l6ZToxM3B4O2xpbmUtaGVpZ2h0OjE1cHh9I2RnLW5ldy1jb25zdHJ1Y3RvcntwYWRkaW5nOjEwcHg7Y29sb3I6IzIyMjtmb250LWZhbWlseTpNb25hY28sIG1vbm9zcGFjZTtmb250LXNpemU6MTBweDtib3JkZXI6MDtyZXNpemU6bm9uZTtib3gtc2hhZG93Omluc2V0IDFweCAxcHggMXB4ICM4ODg7d29yZC13cmFwOmJyZWFrLXdvcmQ7bWFyZ2luOjEycHggMDtkaXNwbGF5OmJsb2NrO3dpZHRoOjQ0MHB4O292ZXJmbG93LXk6c2Nyb2xsO2hlaWdodDoxMDBweDtwb3NpdGlvbjpyZWxhdGl2ZX0jZGctbG9jYWwtZXhwbGFpbntkaXNwbGF5Om5vbmU7Zm9udC1zaXplOjExcHg7bGluZS1oZWlnaHQ6MTdweDtib3JkZXItcmFkaXVzOjNweDtiYWNrZ3JvdW5kLWNvbG9yOiMzMzM7cGFkZGluZzo4cHg7bWFyZ2luLXRvcDoxMHB4fSNkZy1sb2NhbC1leHBsYWluIGNvZGV7Zm9udC1zaXplOjEwcHh9I2RhdC1ndWktc2F2ZS1sb2NhbGx5e2Rpc3BsYXk6bm9uZX0uZGd7Y29sb3I6I2VlZTtmb250OjExcHggJ0x1Y2lkYSBHcmFuZGUnLCBzYW5zLXNlcmlmO3RleHQtc2hhZG93OjAgLTFweCAwICMxMTF9LmRnLm1haW46Oi13ZWJraXQtc2Nyb2xsYmFye3dpZHRoOjVweDtiYWNrZ3JvdW5kOiMxYTFhMWF9LmRnLm1haW46Oi13ZWJraXQtc2Nyb2xsYmFyLWNvcm5lcntoZWlnaHQ6MDtkaXNwbGF5Om5vbmV9LmRnLm1haW46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1ie2JvcmRlci1yYWRpdXM6NXB4O2JhY2tncm91bmQ6IzY3Njc2N30uZGcgbGk6bm90KC5mb2xkZXIpe2JhY2tncm91bmQ6IzFhMWExYTtib3JkZXItYm90dG9tOjFweCBzb2xpZCAjMmMyYzJjfS5kZyBsaS5zYXZlLXJvd3tsaW5lLWhlaWdodDoyNXB4O2JhY2tncm91bmQ6I2RhZDVjYjtib3JkZXI6MH0uZGcgbGkuc2F2ZS1yb3cgc2VsZWN0e21hcmdpbi1sZWZ0OjVweDt3aWR0aDoxMDhweH0uZGcgbGkuc2F2ZS1yb3cgLmJ1dHRvbnttYXJnaW4tbGVmdDo1cHg7bWFyZ2luLXRvcDoxcHg7Ym9yZGVyLXJhZGl1czoycHg7Zm9udC1zaXplOjlweDtsaW5lLWhlaWdodDo3cHg7cGFkZGluZzo0cHggNHB4IDVweCA0cHg7YmFja2dyb3VuZDojYzViZGFkO2NvbG9yOiNmZmY7dGV4dC1zaGFkb3c6MCAxcHggMCAjYjBhNThmO2JveC1zaGFkb3c6MCAtMXB4IDAgI2IwYTU4ZjtjdXJzb3I6cG9pbnRlcn0uZGcgbGkuc2F2ZS1yb3cgLmJ1dHRvbi5nZWFyc3tiYWNrZ3JvdW5kOiNjNWJkYWQgdXJsKGRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQXNBQUFBTkNBWUFBQUIvOVpRN0FBQUFHWFJGV0hSVGIyWjBkMkZ5WlFCQlpHOWlaU0JKYldGblpWSmxZV1I1Y2NsbFBBQUFBUUpKUkVGVWVOcGlZS0FVL1AvL1B3R0lDL0FwQ0FCaUJTQVcrSThBQ2xBY2dLeFE0VDlob01BRVVyeHgyUVNHTjYrZWdEWCsvdldUNGU3TjgyQU1Zb1BBeC9ldndXb1lvU1liQUNYMnM3S3hDeHpjc2V6RGgzZXZGb0RFQllURUVxeWNnZ1dBekE5QXVVU1FRZ2VZUGE5ZlB2Ni9ZV20vQWN4NUlQYjd0eS9mdytRWmJsdzY3dkRzOFIwWUh5UWhnT2J4K3lBSmtCcW1HNWRQUERoMWFQT0dSL2V1Z1cwRzR2bElvVElmeUZjQStRZWtoaEhKaFBkUXhiaUFJZ3VNQlRRWnJQRDcxMDhNNnJvV1lERlFpSUFBdjZBb3cvMWJGd1hnaXMrZjJMVUF5bndvSWFOY3o4WE54M0RsN01FSlVER1FweDlndFE4WUN1ZUIrRDI2T0VDQUFRRGFkdDdlNDZENDJRQUFBQUJKUlU1RXJrSmdnZz09KSAycHggMXB4IG5vLXJlcGVhdDtoZWlnaHQ6N3B4O3dpZHRoOjhweH0uZGcgbGkuc2F2ZS1yb3cgLmJ1dHRvbjpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiNiYWIxOWU7Ym94LXNoYWRvdzowIC0xcHggMCAjYjBhNThmfS5kZyBsaS5mb2xkZXJ7Ym9yZGVyLWJvdHRvbTowfS5kZyBsaS50aXRsZXtwYWRkaW5nLWxlZnQ6MTZweDtiYWNrZ3JvdW5kOiMwMDAgdXJsKGRhdGE6aW1hZ2UvZ2lmO2Jhc2U2NCxSMGxHT0RsaEJRQUZBSkVBQVAvLy8vUHo4Ly8vLy8vLy95SDVCQUVBQUFJQUxBQUFBQUFGQUFVQUFBSUlsSStoS2dGeG9DZ0FPdz09KSA2cHggMTBweCBuby1yZXBlYXQ7Y3Vyc29yOnBvaW50ZXI7Ym9yZGVyLWJvdHRvbToxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwLjIpfS5kZyAuY2xvc2VkIGxpLnRpdGxle2JhY2tncm91bmQtaW1hZ2U6dXJsKGRhdGE6aW1hZ2UvZ2lmO2Jhc2U2NCxSMGxHT0RsaEJRQUZBSkVBQVAvLy8vUHo4Ly8vLy8vLy95SDVCQUVBQUFJQUxBQUFBQUFGQUFVQUFBSUlsR0lXcU1DYldBRUFPdz09KX0uZGcgLmNyLmJvb2xlYW57Ym9yZGVyLWxlZnQ6M3B4IHNvbGlkICM4MDY3ODd9LmRnIC5jci5jb2xvcntib3JkZXItbGVmdDozcHggc29saWR9LmRnIC5jci5mdW5jdGlvbntib3JkZXItbGVmdDozcHggc29saWQgI2U2MWQ1Zn0uZGcgLmNyLm51bWJlcntib3JkZXItbGVmdDozcHggc29saWQgIzJGQTFENn0uZGcgLmNyLm51bWJlciBpbnB1dFt0eXBlPXRleHRde2NvbG9yOiMyRkExRDZ9LmRnIC5jci5zdHJpbmd7Ym9yZGVyLWxlZnQ6M3B4IHNvbGlkICMxZWQzNmZ9LmRnIC5jci5zdHJpbmcgaW5wdXRbdHlwZT10ZXh0XXtjb2xvcjojMWVkMzZmfS5kZyAuY3IuZnVuY3Rpb246aG92ZXIsLmRnIC5jci5ib29sZWFuOmhvdmVye2JhY2tncm91bmQ6IzExMX0uZGcgLmMgaW5wdXRbdHlwZT10ZXh0XXtiYWNrZ3JvdW5kOiMzMDMwMzA7b3V0bGluZTpub25lfS5kZyAuYyBpbnB1dFt0eXBlPXRleHRdOmhvdmVye2JhY2tncm91bmQ6IzNjM2MzY30uZGcgLmMgaW5wdXRbdHlwZT10ZXh0XTpmb2N1c3tiYWNrZ3JvdW5kOiM0OTQ5NDk7Y29sb3I6I2ZmZn0uZGcgLmMgLnNsaWRlcntiYWNrZ3JvdW5kOiMzMDMwMzA7Y3Vyc29yOmV3LXJlc2l6ZX0uZGcgLmMgLnNsaWRlci1mZ3tiYWNrZ3JvdW5kOiMyRkExRDY7bWF4LXdpZHRoOjEwMCV9LmRnIC5jIC5zbGlkZXI6aG92ZXJ7YmFja2dyb3VuZDojM2MzYzNjfS5kZyAuYyAuc2xpZGVyOmhvdmVyIC5zbGlkZXItZmd7YmFja2dyb3VuZDojNDRhYmRhfVxcblwiKTtcblxuY3NzLmluamVjdChzdHlsZVNoZWV0KTtcbnZhciBDU1NfTkFNRVNQQUNFID0gJ2RnJztcbnZhciBISURFX0tFWV9DT0RFID0gNzI7XG52YXIgQ0xPU0VfQlVUVE9OX0hFSUdIVCA9IDIwO1xudmFyIERFRkFVTFRfREVGQVVMVF9QUkVTRVRfTkFNRSA9ICdEZWZhdWx0JztcbnZhciBTVVBQT1JUU19MT0NBTF9TVE9SQUdFID0gZnVuY3Rpb24gKCkge1xuICB0cnkge1xuICAgIHJldHVybiAhIXdpbmRvdy5sb2NhbFN0b3JhZ2U7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn0oKTtcbnZhciBTQVZFX0RJQUxPR1VFID0gdm9pZCAwO1xudmFyIGF1dG9QbGFjZVZpcmdpbiA9IHRydWU7XG52YXIgYXV0b1BsYWNlQ29udGFpbmVyID0gdm9pZCAwO1xudmFyIGhpZGUgPSBmYWxzZTtcbnZhciBoaWRlYWJsZUd1aXMgPSBbXTtcbnZhciBHVUkgPSBmdW5jdGlvbiBHVUkocGFycykge1xuICB2YXIgX3RoaXMgPSB0aGlzO1xuICB2YXIgcGFyYW1zID0gcGFycyB8fCB7fTtcbiAgdGhpcy5kb21FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRoaXMuX191bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gIHRoaXMuZG9tRWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLl9fdWwpO1xuICBkb20uYWRkQ2xhc3ModGhpcy5kb21FbGVtZW50LCBDU1NfTkFNRVNQQUNFKTtcbiAgdGhpcy5fX2ZvbGRlcnMgPSB7fTtcbiAgdGhpcy5fX2NvbnRyb2xsZXJzID0gW107XG4gIHRoaXMuX19yZW1lbWJlcmVkT2JqZWN0cyA9IFtdO1xuICB0aGlzLl9fcmVtZW1iZXJlZE9iamVjdEluZGVjZXNUb0NvbnRyb2xsZXJzID0gW107XG4gIHRoaXMuX19saXN0ZW5pbmcgPSBbXTtcbiAgcGFyYW1zID0gQ29tbW9uLmRlZmF1bHRzKHBhcmFtcywge1xuICAgIGNsb3NlT25Ub3A6IGZhbHNlLFxuICAgIGF1dG9QbGFjZTogdHJ1ZSxcbiAgICB3aWR0aDogR1VJLkRFRkFVTFRfV0lEVEhcbiAgfSk7XG4gIHBhcmFtcyA9IENvbW1vbi5kZWZhdWx0cyhwYXJhbXMsIHtcbiAgICByZXNpemFibGU6IHBhcmFtcy5hdXRvUGxhY2UsXG4gICAgaGlkZWFibGU6IHBhcmFtcy5hdXRvUGxhY2VcbiAgfSk7XG4gIGlmICghQ29tbW9uLmlzVW5kZWZpbmVkKHBhcmFtcy5sb2FkKSkge1xuICAgIGlmIChwYXJhbXMucHJlc2V0KSB7XG4gICAgICBwYXJhbXMubG9hZC5wcmVzZXQgPSBwYXJhbXMucHJlc2V0O1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBwYXJhbXMubG9hZCA9IHsgcHJlc2V0OiBERUZBVUxUX0RFRkFVTFRfUFJFU0VUX05BTUUgfTtcbiAgfVxuICBpZiAoQ29tbW9uLmlzVW5kZWZpbmVkKHBhcmFtcy5wYXJlbnQpICYmIHBhcmFtcy5oaWRlYWJsZSkge1xuICAgIGhpZGVhYmxlR3Vpcy5wdXNoKHRoaXMpO1xuICB9XG4gIHBhcmFtcy5yZXNpemFibGUgPSBDb21tb24uaXNVbmRlZmluZWQocGFyYW1zLnBhcmVudCkgJiYgcGFyYW1zLnJlc2l6YWJsZTtcbiAgaWYgKHBhcmFtcy5hdXRvUGxhY2UgJiYgQ29tbW9uLmlzVW5kZWZpbmVkKHBhcmFtcy5zY3JvbGxhYmxlKSkge1xuICAgIHBhcmFtcy5zY3JvbGxhYmxlID0gdHJ1ZTtcbiAgfVxuICB2YXIgdXNlTG9jYWxTdG9yYWdlID0gU1VQUE9SVFNfTE9DQUxfU1RPUkFHRSAmJiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShnZXRMb2NhbFN0b3JhZ2VIYXNoKHRoaXMsICdpc0xvY2FsJykpID09PSAndHJ1ZSc7XG4gIHZhciBzYXZlVG9Mb2NhbFN0b3JhZ2UgPSB2b2lkIDA7XG4gIHZhciB0aXRsZVJvdyA9IHZvaWQgMDtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcyxcbiAge1xuICAgIHBhcmVudDoge1xuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQkJDEoKSB7XG4gICAgICAgIHJldHVybiBwYXJhbXMucGFyZW50O1xuICAgICAgfVxuICAgIH0sXG4gICAgc2Nyb2xsYWJsZToge1xuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQkJDEoKSB7XG4gICAgICAgIHJldHVybiBwYXJhbXMuc2Nyb2xsYWJsZTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGF1dG9QbGFjZToge1xuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQkJDEoKSB7XG4gICAgICAgIHJldHVybiBwYXJhbXMuYXV0b1BsYWNlO1xuICAgICAgfVxuICAgIH0sXG4gICAgY2xvc2VPblRvcDoge1xuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQkJDEoKSB7XG4gICAgICAgIHJldHVybiBwYXJhbXMuY2xvc2VPblRvcDtcbiAgICAgIH1cbiAgICB9LFxuICAgIHByZXNldDoge1xuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQkJDEoKSB7XG4gICAgICAgIGlmIChfdGhpcy5wYXJlbnQpIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXMuZ2V0Um9vdCgpLnByZXNldDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcGFyYW1zLmxvYWQucHJlc2V0O1xuICAgICAgfSxcbiAgICAgIHNldDogZnVuY3Rpb24gc2V0JCQxKHYpIHtcbiAgICAgICAgaWYgKF90aGlzLnBhcmVudCkge1xuICAgICAgICAgIF90aGlzLmdldFJvb3QoKS5wcmVzZXQgPSB2O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHBhcmFtcy5sb2FkLnByZXNldCA9IHY7XG4gICAgICAgIH1cbiAgICAgICAgc2V0UHJlc2V0U2VsZWN0SW5kZXgodGhpcyk7XG4gICAgICAgIF90aGlzLnJldmVydCgpO1xuICAgICAgfVxuICAgIH0sXG4gICAgd2lkdGg6IHtcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0JCQxKCkge1xuICAgICAgICByZXR1cm4gcGFyYW1zLndpZHRoO1xuICAgICAgfSxcbiAgICAgIHNldDogZnVuY3Rpb24gc2V0JCQxKHYpIHtcbiAgICAgICAgcGFyYW1zLndpZHRoID0gdjtcbiAgICAgICAgc2V0V2lkdGgoX3RoaXMsIHYpO1xuICAgICAgfVxuICAgIH0sXG4gICAgbmFtZToge1xuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQkJDEoKSB7XG4gICAgICAgIHJldHVybiBwYXJhbXMubmFtZTtcbiAgICAgIH0sXG4gICAgICBzZXQ6IGZ1bmN0aW9uIHNldCQkMSh2KSB7XG4gICAgICAgIHBhcmFtcy5uYW1lID0gdjtcbiAgICAgICAgaWYgKHRpdGxlUm93KSB7XG4gICAgICAgICAgdGl0bGVSb3cuaW5uZXJIVE1MID0gcGFyYW1zLm5hbWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIGNsb3NlZDoge1xuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQkJDEoKSB7XG4gICAgICAgIHJldHVybiBwYXJhbXMuY2xvc2VkO1xuICAgICAgfSxcbiAgICAgIHNldDogZnVuY3Rpb24gc2V0JCQxKHYpIHtcbiAgICAgICAgcGFyYW1zLmNsb3NlZCA9IHY7XG4gICAgICAgIGlmIChwYXJhbXMuY2xvc2VkKSB7XG4gICAgICAgICAgZG9tLmFkZENsYXNzKF90aGlzLl9fdWwsIEdVSS5DTEFTU19DTE9TRUQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRvbS5yZW1vdmVDbGFzcyhfdGhpcy5fX3VsLCBHVUkuQ0xBU1NfQ0xPU0VEKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm9uUmVzaXplKCk7XG4gICAgICAgIGlmIChfdGhpcy5fX2Nsb3NlQnV0dG9uKSB7XG4gICAgICAgICAgX3RoaXMuX19jbG9zZUJ1dHRvbi5pbm5lckhUTUwgPSB2ID8gR1VJLlRFWFRfT1BFTiA6IEdVSS5URVhUX0NMT1NFRDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgbG9hZDoge1xuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQkJDEoKSB7XG4gICAgICAgIHJldHVybiBwYXJhbXMubG9hZDtcbiAgICAgIH1cbiAgICB9LFxuICAgIHVzZUxvY2FsU3RvcmFnZToge1xuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQkJDEoKSB7XG4gICAgICAgIHJldHVybiB1c2VMb2NhbFN0b3JhZ2U7XG4gICAgICB9LFxuICAgICAgc2V0OiBmdW5jdGlvbiBzZXQkJDEoYm9vbCkge1xuICAgICAgICBpZiAoU1VQUE9SVFNfTE9DQUxfU1RPUkFHRSkge1xuICAgICAgICAgIHVzZUxvY2FsU3RvcmFnZSA9IGJvb2w7XG4gICAgICAgICAgaWYgKGJvb2wpIHtcbiAgICAgICAgICAgIGRvbS5iaW5kKHdpbmRvdywgJ3VubG9hZCcsIHNhdmVUb0xvY2FsU3RvcmFnZSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRvbS51bmJpbmQod2luZG93LCAndW5sb2FkJywgc2F2ZVRvTG9jYWxTdG9yYWdlKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oZ2V0TG9jYWxTdG9yYWdlSGFzaChfdGhpcywgJ2lzTG9jYWwnKSwgYm9vbCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuICBpZiAoQ29tbW9uLmlzVW5kZWZpbmVkKHBhcmFtcy5wYXJlbnQpKSB7XG4gICAgdGhpcy5jbG9zZWQgPSBwYXJhbXMuY2xvc2VkIHx8IGZhbHNlO1xuICAgIGRvbS5hZGRDbGFzcyh0aGlzLmRvbUVsZW1lbnQsIEdVSS5DTEFTU19NQUlOKTtcbiAgICBkb20ubWFrZVNlbGVjdGFibGUodGhpcy5kb21FbGVtZW50LCBmYWxzZSk7XG4gICAgaWYgKFNVUFBPUlRTX0xPQ0FMX1NUT1JBR0UpIHtcbiAgICAgIGlmICh1c2VMb2NhbFN0b3JhZ2UpIHtcbiAgICAgICAgX3RoaXMudXNlTG9jYWxTdG9yYWdlID0gdHJ1ZTtcbiAgICAgICAgdmFyIHNhdmVkR3VpID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oZ2V0TG9jYWxTdG9yYWdlSGFzaCh0aGlzLCAnZ3VpJykpO1xuICAgICAgICBpZiAoc2F2ZWRHdWkpIHtcbiAgICAgICAgICBwYXJhbXMubG9hZCA9IEpTT04ucGFyc2Uoc2F2ZWRHdWkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuX19jbG9zZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRoaXMuX19jbG9zZUJ1dHRvbi5pbm5lckhUTUwgPSBHVUkuVEVYVF9DTE9TRUQ7XG4gICAgZG9tLmFkZENsYXNzKHRoaXMuX19jbG9zZUJ1dHRvbiwgR1VJLkNMQVNTX0NMT1NFX0JVVFRPTik7XG4gICAgaWYgKHBhcmFtcy5jbG9zZU9uVG9wKSB7XG4gICAgICBkb20uYWRkQ2xhc3ModGhpcy5fX2Nsb3NlQnV0dG9uLCBHVUkuQ0xBU1NfQ0xPU0VfVE9QKTtcbiAgICAgIHRoaXMuZG9tRWxlbWVudC5pbnNlcnRCZWZvcmUodGhpcy5fX2Nsb3NlQnV0dG9uLCB0aGlzLmRvbUVsZW1lbnQuY2hpbGROb2Rlc1swXSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRvbS5hZGRDbGFzcyh0aGlzLl9fY2xvc2VCdXR0b24sIEdVSS5DTEFTU19DTE9TRV9CT1RUT00pO1xuICAgICAgdGhpcy5kb21FbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuX19jbG9zZUJ1dHRvbik7XG4gICAgfVxuICAgIGRvbS5iaW5kKHRoaXMuX19jbG9zZUJ1dHRvbiwgJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXMuY2xvc2VkID0gIV90aGlzLmNsb3NlZDtcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBpZiAocGFyYW1zLmNsb3NlZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBwYXJhbXMuY2xvc2VkID0gdHJ1ZTtcbiAgICB9XG4gICAgdmFyIHRpdGxlUm93TmFtZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHBhcmFtcy5uYW1lKTtcbiAgICBkb20uYWRkQ2xhc3ModGl0bGVSb3dOYW1lLCAnY29udHJvbGxlci1uYW1lJyk7XG4gICAgdGl0bGVSb3cgPSBhZGRSb3coX3RoaXMsIHRpdGxlUm93TmFtZSk7XG4gICAgdmFyIG9uQ2xpY2tUaXRsZSA9IGZ1bmN0aW9uIG9uQ2xpY2tUaXRsZShlKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBfdGhpcy5jbG9zZWQgPSAhX3RoaXMuY2xvc2VkO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH07XG4gICAgZG9tLmFkZENsYXNzKHRoaXMuX191bCwgR1VJLkNMQVNTX0NMT1NFRCk7XG4gICAgZG9tLmFkZENsYXNzKHRpdGxlUm93LCAndGl0bGUnKTtcbiAgICBkb20uYmluZCh0aXRsZVJvdywgJ2NsaWNrJywgb25DbGlja1RpdGxlKTtcbiAgICBpZiAoIXBhcmFtcy5jbG9zZWQpIHtcbiAgICAgIHRoaXMuY2xvc2VkID0gZmFsc2U7XG4gICAgfVxuICB9XG4gIGlmIChwYXJhbXMuYXV0b1BsYWNlKSB7XG4gICAgaWYgKENvbW1vbi5pc1VuZGVmaW5lZChwYXJhbXMucGFyZW50KSkge1xuICAgICAgaWYgKGF1dG9QbGFjZVZpcmdpbikge1xuICAgICAgICBhdXRvUGxhY2VDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZG9tLmFkZENsYXNzKGF1dG9QbGFjZUNvbnRhaW5lciwgQ1NTX05BTUVTUEFDRSk7XG4gICAgICAgIGRvbS5hZGRDbGFzcyhhdXRvUGxhY2VDb250YWluZXIsIEdVSS5DTEFTU19BVVRPX1BMQUNFX0NPTlRBSU5FUik7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYXV0b1BsYWNlQ29udGFpbmVyKTtcbiAgICAgICAgYXV0b1BsYWNlVmlyZ2luID0gZmFsc2U7XG4gICAgICB9XG4gICAgICBhdXRvUGxhY2VDb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5kb21FbGVtZW50KTtcbiAgICAgIGRvbS5hZGRDbGFzcyh0aGlzLmRvbUVsZW1lbnQsIEdVSS5DTEFTU19BVVRPX1BMQUNFKTtcbiAgICB9XG4gICAgaWYgKCF0aGlzLnBhcmVudCkge1xuICAgICAgc2V0V2lkdGgoX3RoaXMsIHBhcmFtcy53aWR0aCk7XG4gICAgfVxuICB9XG4gIHRoaXMuX19yZXNpemVIYW5kbGVyID0gZnVuY3Rpb24gKCkge1xuICAgIF90aGlzLm9uUmVzaXplRGVib3VuY2VkKCk7XG4gIH07XG4gIGRvbS5iaW5kKHdpbmRvdywgJ3Jlc2l6ZScsIHRoaXMuX19yZXNpemVIYW5kbGVyKTtcbiAgZG9tLmJpbmQodGhpcy5fX3VsLCAnd2Via2l0VHJhbnNpdGlvbkVuZCcsIHRoaXMuX19yZXNpemVIYW5kbGVyKTtcbiAgZG9tLmJpbmQodGhpcy5fX3VsLCAndHJhbnNpdGlvbmVuZCcsIHRoaXMuX19yZXNpemVIYW5kbGVyKTtcbiAgZG9tLmJpbmQodGhpcy5fX3VsLCAnb1RyYW5zaXRpb25FbmQnLCB0aGlzLl9fcmVzaXplSGFuZGxlcik7XG4gIHRoaXMub25SZXNpemUoKTtcbiAgaWYgKHBhcmFtcy5yZXNpemFibGUpIHtcbiAgICBhZGRSZXNpemVIYW5kbGUodGhpcyk7XG4gIH1cbiAgc2F2ZVRvTG9jYWxTdG9yYWdlID0gZnVuY3Rpb24gc2F2ZVRvTG9jYWxTdG9yYWdlKCkge1xuICAgIGlmIChTVVBQT1JUU19MT0NBTF9TVE9SQUdFICYmIGxvY2FsU3RvcmFnZS5nZXRJdGVtKGdldExvY2FsU3RvcmFnZUhhc2goX3RoaXMsICdpc0xvY2FsJykpID09PSAndHJ1ZScpIHtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGdldExvY2FsU3RvcmFnZUhhc2goX3RoaXMsICdndWknKSwgSlNPTi5zdHJpbmdpZnkoX3RoaXMuZ2V0U2F2ZU9iamVjdCgpKSk7XG4gICAgfVxuICB9O1xuICB0aGlzLnNhdmVUb0xvY2FsU3RvcmFnZUlmUG9zc2libGUgPSBzYXZlVG9Mb2NhbFN0b3JhZ2U7XG4gIGZ1bmN0aW9uIHJlc2V0V2lkdGgoKSB7XG4gICAgdmFyIHJvb3QgPSBfdGhpcy5nZXRSb290KCk7XG4gICAgcm9vdC53aWR0aCArPSAxO1xuICAgIENvbW1vbi5kZWZlcihmdW5jdGlvbiAoKSB7XG4gICAgICByb290LndpZHRoIC09IDE7XG4gICAgfSk7XG4gIH1cbiAgaWYgKCFwYXJhbXMucGFyZW50KSB7XG4gICAgcmVzZXRXaWR0aCgpO1xuICB9XG59O1xuR1VJLnRvZ2dsZUhpZGUgPSBmdW5jdGlvbiAoKSB7XG4gIGhpZGUgPSAhaGlkZTtcbiAgQ29tbW9uLmVhY2goaGlkZWFibGVHdWlzLCBmdW5jdGlvbiAoZ3VpKSB7XG4gICAgZ3VpLmRvbUVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IGhpZGUgPyAnbm9uZScgOiAnJztcbiAgfSk7XG59O1xuR1VJLkNMQVNTX0FVVE9fUExBQ0UgPSAnYSc7XG5HVUkuQ0xBU1NfQVVUT19QTEFDRV9DT05UQUlORVIgPSAnYWMnO1xuR1VJLkNMQVNTX01BSU4gPSAnbWFpbic7XG5HVUkuQ0xBU1NfQ09OVFJPTExFUl9ST1cgPSAnY3InO1xuR1VJLkNMQVNTX1RPT19UQUxMID0gJ3RhbGxlci10aGFuLXdpbmRvdyc7XG5HVUkuQ0xBU1NfQ0xPU0VEID0gJ2Nsb3NlZCc7XG5HVUkuQ0xBU1NfQ0xPU0VfQlVUVE9OID0gJ2Nsb3NlLWJ1dHRvbic7XG5HVUkuQ0xBU1NfQ0xPU0VfVE9QID0gJ2Nsb3NlLXRvcCc7XG5HVUkuQ0xBU1NfQ0xPU0VfQk9UVE9NID0gJ2Nsb3NlLWJvdHRvbSc7XG5HVUkuQ0xBU1NfRFJBRyA9ICdkcmFnJztcbkdVSS5ERUZBVUxUX1dJRFRIID0gMjQ1O1xuR1VJLlRFWFRfQ0xPU0VEID0gJ0Nsb3NlIENvbnRyb2xzJztcbkdVSS5URVhUX09QRU4gPSAnT3BlbiBDb250cm9scyc7XG5HVUkuX2tleWRvd25IYW5kbGVyID0gZnVuY3Rpb24gKGUpIHtcbiAgaWYgKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQudHlwZSAhPT0gJ3RleHQnICYmIChlLndoaWNoID09PSBISURFX0tFWV9DT0RFIHx8IGUua2V5Q29kZSA9PT0gSElERV9LRVlfQ09ERSkpIHtcbiAgICBHVUkudG9nZ2xlSGlkZSgpO1xuICB9XG59O1xuZG9tLmJpbmQod2luZG93LCAna2V5ZG93bicsIEdVSS5fa2V5ZG93bkhhbmRsZXIsIGZhbHNlKTtcbkNvbW1vbi5leHRlbmQoR1VJLnByb3RvdHlwZSxcbntcbiAgYWRkOiBmdW5jdGlvbiBhZGQob2JqZWN0LCBwcm9wZXJ0eSkge1xuICAgIHJldHVybiBfYWRkKHRoaXMsIG9iamVjdCwgcHJvcGVydHksIHtcbiAgICAgIGZhY3RvcnlBcmdzOiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDIpXG4gICAgfSk7XG4gIH0sXG4gIGFkZENvbG9yOiBmdW5jdGlvbiBhZGRDb2xvcihvYmplY3QsIHByb3BlcnR5KSB7XG4gICAgcmV0dXJuIF9hZGQodGhpcywgb2JqZWN0LCBwcm9wZXJ0eSwge1xuICAgICAgY29sb3I6IHRydWVcbiAgICB9KTtcbiAgfSxcbiAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoY29udHJvbGxlcikge1xuICAgIHRoaXMuX191bC5yZW1vdmVDaGlsZChjb250cm9sbGVyLl9fbGkpO1xuICAgIHRoaXMuX19jb250cm9sbGVycy5zcGxpY2UodGhpcy5fX2NvbnRyb2xsZXJzLmluZGV4T2YoY29udHJvbGxlciksIDEpO1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgQ29tbW9uLmRlZmVyKGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzLm9uUmVzaXplKCk7XG4gICAgfSk7XG4gIH0sXG4gIGRlc3Ryb3k6IGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMucGFyZW50KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ09ubHkgdGhlIHJvb3QgR1VJIHNob3VsZCBiZSByZW1vdmVkIHdpdGggLmRlc3Ryb3koKS4gJyArICdGb3Igc3ViZm9sZGVycywgdXNlIGd1aS5yZW1vdmVGb2xkZXIoZm9sZGVyKSBpbnN0ZWFkLicpO1xuICAgIH1cbiAgICBpZiAodGhpcy5hdXRvUGxhY2UpIHtcbiAgICAgIGF1dG9QbGFjZUNvbnRhaW5lci5yZW1vdmVDaGlsZCh0aGlzLmRvbUVsZW1lbnQpO1xuICAgIH1cbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgIENvbW1vbi5lYWNoKHRoaXMuX19mb2xkZXJzLCBmdW5jdGlvbiAoc3ViZm9sZGVyKSB7XG4gICAgICBfdGhpcy5yZW1vdmVGb2xkZXIoc3ViZm9sZGVyKTtcbiAgICB9KTtcbiAgICBkb20udW5iaW5kKHdpbmRvdywgJ2tleWRvd24nLCBHVUkuX2tleWRvd25IYW5kbGVyLCBmYWxzZSk7XG4gICAgcmVtb3ZlTGlzdGVuZXJzKHRoaXMpO1xuICB9LFxuICBhZGRGb2xkZXI6IGZ1bmN0aW9uIGFkZEZvbGRlcihuYW1lKSB7XG4gICAgaWYgKHRoaXMuX19mb2xkZXJzW25hbWVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignWW91IGFscmVhZHkgaGF2ZSBhIGZvbGRlciBpbiB0aGlzIEdVSSBieSB0aGUnICsgJyBuYW1lIFwiJyArIG5hbWUgKyAnXCInKTtcbiAgICB9XG4gICAgdmFyIG5ld0d1aVBhcmFtcyA9IHsgbmFtZTogbmFtZSwgcGFyZW50OiB0aGlzIH07XG4gICAgbmV3R3VpUGFyYW1zLmF1dG9QbGFjZSA9IHRoaXMuYXV0b1BsYWNlO1xuICAgIGlmICh0aGlzLmxvYWQgJiZcbiAgICB0aGlzLmxvYWQuZm9sZGVycyAmJlxuICAgIHRoaXMubG9hZC5mb2xkZXJzW25hbWVdKSB7XG4gICAgICBuZXdHdWlQYXJhbXMuY2xvc2VkID0gdGhpcy5sb2FkLmZvbGRlcnNbbmFtZV0uY2xvc2VkO1xuICAgICAgbmV3R3VpUGFyYW1zLmxvYWQgPSB0aGlzLmxvYWQuZm9sZGVyc1tuYW1lXTtcbiAgICB9XG4gICAgdmFyIGd1aSA9IG5ldyBHVUkobmV3R3VpUGFyYW1zKTtcbiAgICB0aGlzLl9fZm9sZGVyc1tuYW1lXSA9IGd1aTtcbiAgICB2YXIgbGkgPSBhZGRSb3codGhpcywgZ3VpLmRvbUVsZW1lbnQpO1xuICAgIGRvbS5hZGRDbGFzcyhsaSwgJ2ZvbGRlcicpO1xuICAgIHJldHVybiBndWk7XG4gIH0sXG4gIHJlbW92ZUZvbGRlcjogZnVuY3Rpb24gcmVtb3ZlRm9sZGVyKGZvbGRlcikge1xuICAgIHRoaXMuX191bC5yZW1vdmVDaGlsZChmb2xkZXIuZG9tRWxlbWVudC5wYXJlbnRFbGVtZW50KTtcbiAgICBkZWxldGUgdGhpcy5fX2ZvbGRlcnNbZm9sZGVyLm5hbWVdO1xuICAgIGlmICh0aGlzLmxvYWQgJiZcbiAgICB0aGlzLmxvYWQuZm9sZGVycyAmJlxuICAgIHRoaXMubG9hZC5mb2xkZXJzW2ZvbGRlci5uYW1lXSkge1xuICAgICAgZGVsZXRlIHRoaXMubG9hZC5mb2xkZXJzW2ZvbGRlci5uYW1lXTtcbiAgICB9XG4gICAgcmVtb3ZlTGlzdGVuZXJzKGZvbGRlcik7XG4gICAgdmFyIF90aGlzID0gdGhpcztcbiAgICBDb21tb24uZWFjaChmb2xkZXIuX19mb2xkZXJzLCBmdW5jdGlvbiAoc3ViZm9sZGVyKSB7XG4gICAgICBmb2xkZXIucmVtb3ZlRm9sZGVyKHN1YmZvbGRlcik7XG4gICAgfSk7XG4gICAgQ29tbW9uLmRlZmVyKGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzLm9uUmVzaXplKCk7XG4gICAgfSk7XG4gIH0sXG4gIG9wZW46IGZ1bmN0aW9uIG9wZW4oKSB7XG4gICAgdGhpcy5jbG9zZWQgPSBmYWxzZTtcbiAgfSxcbiAgY2xvc2U6IGZ1bmN0aW9uIGNsb3NlKCkge1xuICAgIHRoaXMuY2xvc2VkID0gdHJ1ZTtcbiAgfSxcbiAgaGlkZTogZnVuY3Rpb24gaGlkZSgpIHtcbiAgICB0aGlzLmRvbUVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgfSxcbiAgc2hvdzogZnVuY3Rpb24gc2hvdygpIHtcbiAgICB0aGlzLmRvbUVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICcnO1xuICB9LFxuICBvblJlc2l6ZTogZnVuY3Rpb24gb25SZXNpemUoKSB7XG4gICAgdmFyIHJvb3QgPSB0aGlzLmdldFJvb3QoKTtcbiAgICBpZiAocm9vdC5zY3JvbGxhYmxlKSB7XG4gICAgICB2YXIgdG9wID0gZG9tLmdldE9mZnNldChyb290Ll9fdWwpLnRvcDtcbiAgICAgIHZhciBoID0gMDtcbiAgICAgIENvbW1vbi5lYWNoKHJvb3QuX191bC5jaGlsZE5vZGVzLCBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICBpZiAoIShyb290LmF1dG9QbGFjZSAmJiBub2RlID09PSByb290Ll9fc2F2ZV9yb3cpKSB7XG4gICAgICAgICAgaCArPSBkb20uZ2V0SGVpZ2h0KG5vZGUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGlmICh3aW5kb3cuaW5uZXJIZWlnaHQgLSB0b3AgLSBDTE9TRV9CVVRUT05fSEVJR0hUIDwgaCkge1xuICAgICAgICBkb20uYWRkQ2xhc3Mocm9vdC5kb21FbGVtZW50LCBHVUkuQ0xBU1NfVE9PX1RBTEwpO1xuICAgICAgICByb290Ll9fdWwuc3R5bGUuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0IC0gdG9wIC0gQ0xPU0VfQlVUVE9OX0hFSUdIVCArICdweCc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkb20ucmVtb3ZlQ2xhc3Mocm9vdC5kb21FbGVtZW50LCBHVUkuQ0xBU1NfVE9PX1RBTEwpO1xuICAgICAgICByb290Ll9fdWwuc3R5bGUuaGVpZ2h0ID0gJ2F1dG8nO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAocm9vdC5fX3Jlc2l6ZV9oYW5kbGUpIHtcbiAgICAgIENvbW1vbi5kZWZlcihmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJvb3QuX19yZXNpemVfaGFuZGxlLnN0eWxlLmhlaWdodCA9IHJvb3QuX191bC5vZmZzZXRIZWlnaHQgKyAncHgnO1xuICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChyb290Ll9fY2xvc2VCdXR0b24pIHtcbiAgICAgIHJvb3QuX19jbG9zZUJ1dHRvbi5zdHlsZS53aWR0aCA9IHJvb3Qud2lkdGggKyAncHgnO1xuICAgIH1cbiAgfSxcbiAgb25SZXNpemVEZWJvdW5jZWQ6IENvbW1vbi5kZWJvdW5jZShmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5vblJlc2l6ZSgpO1xuICB9LCA1MCksXG4gIHJlbWVtYmVyOiBmdW5jdGlvbiByZW1lbWJlcigpIHtcbiAgICBpZiAoQ29tbW9uLmlzVW5kZWZpbmVkKFNBVkVfRElBTE9HVUUpKSB7XG4gICAgICBTQVZFX0RJQUxPR1VFID0gbmV3IENlbnRlcmVkRGl2KCk7XG4gICAgICBTQVZFX0RJQUxPR1VFLmRvbUVsZW1lbnQuaW5uZXJIVE1MID0gc2F2ZURpYWxvZ0NvbnRlbnRzO1xuICAgIH1cbiAgICBpZiAodGhpcy5wYXJlbnQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignWW91IGNhbiBvbmx5IGNhbGwgcmVtZW1iZXIgb24gYSB0b3AgbGV2ZWwgR1VJLicpO1xuICAgIH1cbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgIENvbW1vbi5lYWNoKEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cyksIGZ1bmN0aW9uIChvYmplY3QpIHtcbiAgICAgIGlmIChfdGhpcy5fX3JlbWVtYmVyZWRPYmplY3RzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBhZGRTYXZlTWVudShfdGhpcyk7XG4gICAgICB9XG4gICAgICBpZiAoX3RoaXMuX19yZW1lbWJlcmVkT2JqZWN0cy5pbmRleE9mKG9iamVjdCkgPT09IC0xKSB7XG4gICAgICAgIF90aGlzLl9fcmVtZW1iZXJlZE9iamVjdHMucHVzaChvYmplY3QpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGlmICh0aGlzLmF1dG9QbGFjZSkge1xuICAgICAgc2V0V2lkdGgodGhpcywgdGhpcy53aWR0aCk7XG4gICAgfVxuICB9LFxuICBnZXRSb290OiBmdW5jdGlvbiBnZXRSb290KCkge1xuICAgIHZhciBndWkgPSB0aGlzO1xuICAgIHdoaWxlIChndWkucGFyZW50KSB7XG4gICAgICBndWkgPSBndWkucGFyZW50O1xuICAgIH1cbiAgICByZXR1cm4gZ3VpO1xuICB9LFxuICBnZXRTYXZlT2JqZWN0OiBmdW5jdGlvbiBnZXRTYXZlT2JqZWN0KCkge1xuICAgIHZhciB0b1JldHVybiA9IHRoaXMubG9hZDtcbiAgICB0b1JldHVybi5jbG9zZWQgPSB0aGlzLmNsb3NlZDtcbiAgICBpZiAodGhpcy5fX3JlbWVtYmVyZWRPYmplY3RzLmxlbmd0aCA+IDApIHtcbiAgICAgIHRvUmV0dXJuLnByZXNldCA9IHRoaXMucHJlc2V0O1xuICAgICAgaWYgKCF0b1JldHVybi5yZW1lbWJlcmVkKSB7XG4gICAgICAgIHRvUmV0dXJuLnJlbWVtYmVyZWQgPSB7fTtcbiAgICAgIH1cbiAgICAgIHRvUmV0dXJuLnJlbWVtYmVyZWRbdGhpcy5wcmVzZXRdID0gZ2V0Q3VycmVudFByZXNldCh0aGlzKTtcbiAgICB9XG4gICAgdG9SZXR1cm4uZm9sZGVycyA9IHt9O1xuICAgIENvbW1vbi5lYWNoKHRoaXMuX19mb2xkZXJzLCBmdW5jdGlvbiAoZWxlbWVudCwga2V5KSB7XG4gICAgICB0b1JldHVybi5mb2xkZXJzW2tleV0gPSBlbGVtZW50LmdldFNhdmVPYmplY3QoKTtcbiAgICB9KTtcbiAgICByZXR1cm4gdG9SZXR1cm47XG4gIH0sXG4gIHNhdmU6IGZ1bmN0aW9uIHNhdmUoKSB7XG4gICAgaWYgKCF0aGlzLmxvYWQucmVtZW1iZXJlZCkge1xuICAgICAgdGhpcy5sb2FkLnJlbWVtYmVyZWQgPSB7fTtcbiAgICB9XG4gICAgdGhpcy5sb2FkLnJlbWVtYmVyZWRbdGhpcy5wcmVzZXRdID0gZ2V0Q3VycmVudFByZXNldCh0aGlzKTtcbiAgICBtYXJrUHJlc2V0TW9kaWZpZWQodGhpcywgZmFsc2UpO1xuICAgIHRoaXMuc2F2ZVRvTG9jYWxTdG9yYWdlSWZQb3NzaWJsZSgpO1xuICB9LFxuICBzYXZlQXM6IGZ1bmN0aW9uIHNhdmVBcyhwcmVzZXROYW1lKSB7XG4gICAgaWYgKCF0aGlzLmxvYWQucmVtZW1iZXJlZCkge1xuICAgICAgdGhpcy5sb2FkLnJlbWVtYmVyZWQgPSB7fTtcbiAgICAgIHRoaXMubG9hZC5yZW1lbWJlcmVkW0RFRkFVTFRfREVGQVVMVF9QUkVTRVRfTkFNRV0gPSBnZXRDdXJyZW50UHJlc2V0KHRoaXMsIHRydWUpO1xuICAgIH1cbiAgICB0aGlzLmxvYWQucmVtZW1iZXJlZFtwcmVzZXROYW1lXSA9IGdldEN1cnJlbnRQcmVzZXQodGhpcyk7XG4gICAgdGhpcy5wcmVzZXQgPSBwcmVzZXROYW1lO1xuICAgIGFkZFByZXNldE9wdGlvbih0aGlzLCBwcmVzZXROYW1lLCB0cnVlKTtcbiAgICB0aGlzLnNhdmVUb0xvY2FsU3RvcmFnZUlmUG9zc2libGUoKTtcbiAgfSxcbiAgcmV2ZXJ0OiBmdW5jdGlvbiByZXZlcnQoZ3VpKSB7XG4gICAgQ29tbW9uLmVhY2godGhpcy5fX2NvbnRyb2xsZXJzLCBmdW5jdGlvbiAoY29udHJvbGxlcikge1xuICAgICAgaWYgKCF0aGlzLmdldFJvb3QoKS5sb2FkLnJlbWVtYmVyZWQpIHtcbiAgICAgICAgY29udHJvbGxlci5zZXRWYWx1ZShjb250cm9sbGVyLmluaXRpYWxWYWx1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZWNhbGxTYXZlZFZhbHVlKGd1aSB8fCB0aGlzLmdldFJvb3QoKSwgY29udHJvbGxlcik7XG4gICAgICB9XG4gICAgICBpZiAoY29udHJvbGxlci5fX29uRmluaXNoQ2hhbmdlKSB7XG4gICAgICAgIGNvbnRyb2xsZXIuX19vbkZpbmlzaENoYW5nZS5jYWxsKGNvbnRyb2xsZXIsIGNvbnRyb2xsZXIuZ2V0VmFsdWUoKSk7XG4gICAgICB9XG4gICAgfSwgdGhpcyk7XG4gICAgQ29tbW9uLmVhY2godGhpcy5fX2ZvbGRlcnMsIGZ1bmN0aW9uIChmb2xkZXIpIHtcbiAgICAgIGZvbGRlci5yZXZlcnQoZm9sZGVyKTtcbiAgICB9KTtcbiAgICBpZiAoIWd1aSkge1xuICAgICAgbWFya1ByZXNldE1vZGlmaWVkKHRoaXMuZ2V0Um9vdCgpLCBmYWxzZSk7XG4gICAgfVxuICB9LFxuICBsaXN0ZW46IGZ1bmN0aW9uIGxpc3Rlbihjb250cm9sbGVyKSB7XG4gICAgdmFyIGluaXQgPSB0aGlzLl9fbGlzdGVuaW5nLmxlbmd0aCA9PT0gMDtcbiAgICB0aGlzLl9fbGlzdGVuaW5nLnB1c2goY29udHJvbGxlcik7XG4gICAgaWYgKGluaXQpIHtcbiAgICAgIHVwZGF0ZURpc3BsYXlzKHRoaXMuX19saXN0ZW5pbmcpO1xuICAgIH1cbiAgfSxcbiAgdXBkYXRlRGlzcGxheTogZnVuY3Rpb24gdXBkYXRlRGlzcGxheSgpIHtcbiAgICBDb21tb24uZWFjaCh0aGlzLl9fY29udHJvbGxlcnMsIGZ1bmN0aW9uIChjb250cm9sbGVyKSB7XG4gICAgICBjb250cm9sbGVyLnVwZGF0ZURpc3BsYXkoKTtcbiAgICB9KTtcbiAgICBDb21tb24uZWFjaCh0aGlzLl9fZm9sZGVycywgZnVuY3Rpb24gKGZvbGRlcikge1xuICAgICAgZm9sZGVyLnVwZGF0ZURpc3BsYXkoKTtcbiAgICB9KTtcbiAgfVxufSk7XG5mdW5jdGlvbiBhZGRSb3coZ3VpLCBuZXdEb20sIGxpQmVmb3JlKSB7XG4gIHZhciBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIGlmIChuZXdEb20pIHtcbiAgICBsaS5hcHBlbmRDaGlsZChuZXdEb20pO1xuICB9XG4gIGlmIChsaUJlZm9yZSkge1xuICAgIGd1aS5fX3VsLmluc2VydEJlZm9yZShsaSwgbGlCZWZvcmUpO1xuICB9IGVsc2Uge1xuICAgIGd1aS5fX3VsLmFwcGVuZENoaWxkKGxpKTtcbiAgfVxuICBndWkub25SZXNpemUoKTtcbiAgcmV0dXJuIGxpO1xufVxuZnVuY3Rpb24gcmVtb3ZlTGlzdGVuZXJzKGd1aSkge1xuICBkb20udW5iaW5kKHdpbmRvdywgJ3Jlc2l6ZScsIGd1aS5fX3Jlc2l6ZUhhbmRsZXIpO1xuICBpZiAoZ3VpLnNhdmVUb0xvY2FsU3RvcmFnZUlmUG9zc2libGUpIHtcbiAgICBkb20udW5iaW5kKHdpbmRvdywgJ3VubG9hZCcsIGd1aS5zYXZlVG9Mb2NhbFN0b3JhZ2VJZlBvc3NpYmxlKTtcbiAgfVxufVxuZnVuY3Rpb24gbWFya1ByZXNldE1vZGlmaWVkKGd1aSwgbW9kaWZpZWQpIHtcbiAgdmFyIG9wdCA9IGd1aS5fX3ByZXNldF9zZWxlY3RbZ3VpLl9fcHJlc2V0X3NlbGVjdC5zZWxlY3RlZEluZGV4XTtcbiAgaWYgKG1vZGlmaWVkKSB7XG4gICAgb3B0LmlubmVySFRNTCA9IG9wdC52YWx1ZSArICcqJztcbiAgfSBlbHNlIHtcbiAgICBvcHQuaW5uZXJIVE1MID0gb3B0LnZhbHVlO1xuICB9XG59XG5mdW5jdGlvbiBhdWdtZW50Q29udHJvbGxlcihndWksIGxpLCBjb250cm9sbGVyKSB7XG4gIGNvbnRyb2xsZXIuX19saSA9IGxpO1xuICBjb250cm9sbGVyLl9fZ3VpID0gZ3VpO1xuICBDb21tb24uZXh0ZW5kKGNvbnRyb2xsZXIsIHtcbiAgICBvcHRpb25zOiBmdW5jdGlvbiBvcHRpb25zKF9vcHRpb25zKSB7XG4gICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgdmFyIG5leHRTaWJsaW5nID0gY29udHJvbGxlci5fX2xpLm5leHRFbGVtZW50U2libGluZztcbiAgICAgICAgY29udHJvbGxlci5yZW1vdmUoKTtcbiAgICAgICAgcmV0dXJuIF9hZGQoZ3VpLCBjb250cm9sbGVyLm9iamVjdCwgY29udHJvbGxlci5wcm9wZXJ0eSwge1xuICAgICAgICAgIGJlZm9yZTogbmV4dFNpYmxpbmcsXG4gICAgICAgICAgZmFjdG9yeUFyZ3M6IFtDb21tb24udG9BcnJheShhcmd1bWVudHMpXVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGlmIChDb21tb24uaXNBcnJheShfb3B0aW9ucykgfHwgQ29tbW9uLmlzT2JqZWN0KF9vcHRpb25zKSkge1xuICAgICAgICB2YXIgX25leHRTaWJsaW5nID0gY29udHJvbGxlci5fX2xpLm5leHRFbGVtZW50U2libGluZztcbiAgICAgICAgY29udHJvbGxlci5yZW1vdmUoKTtcbiAgICAgICAgcmV0dXJuIF9hZGQoZ3VpLCBjb250cm9sbGVyLm9iamVjdCwgY29udHJvbGxlci5wcm9wZXJ0eSwge1xuICAgICAgICAgIGJlZm9yZTogX25leHRTaWJsaW5nLFxuICAgICAgICAgIGZhY3RvcnlBcmdzOiBbX29wdGlvbnNdXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sXG4gICAgbmFtZTogZnVuY3Rpb24gbmFtZShfbmFtZSkge1xuICAgICAgY29udHJvbGxlci5fX2xpLmZpcnN0RWxlbWVudENoaWxkLmZpcnN0RWxlbWVudENoaWxkLmlubmVySFRNTCA9IF9uYW1lO1xuICAgICAgcmV0dXJuIGNvbnRyb2xsZXI7XG4gICAgfSxcbiAgICBsaXN0ZW46IGZ1bmN0aW9uIGxpc3RlbigpIHtcbiAgICAgIGNvbnRyb2xsZXIuX19ndWkubGlzdGVuKGNvbnRyb2xsZXIpO1xuICAgICAgcmV0dXJuIGNvbnRyb2xsZXI7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIGNvbnRyb2xsZXIuX19ndWkucmVtb3ZlKGNvbnRyb2xsZXIpO1xuICAgICAgcmV0dXJuIGNvbnRyb2xsZXI7XG4gICAgfVxuICB9KTtcbiAgaWYgKGNvbnRyb2xsZXIgaW5zdGFuY2VvZiBOdW1iZXJDb250cm9sbGVyU2xpZGVyKSB7XG4gICAgdmFyIGJveCA9IG5ldyBOdW1iZXJDb250cm9sbGVyQm94KGNvbnRyb2xsZXIub2JqZWN0LCBjb250cm9sbGVyLnByb3BlcnR5LCB7IG1pbjogY29udHJvbGxlci5fX21pbiwgbWF4OiBjb250cm9sbGVyLl9fbWF4LCBzdGVwOiBjb250cm9sbGVyLl9fc3RlcCB9KTtcbiAgICBDb21tb24uZWFjaChbJ3VwZGF0ZURpc3BsYXknLCAnb25DaGFuZ2UnLCAnb25GaW5pc2hDaGFuZ2UnLCAnc3RlcCcsICdtaW4nLCAnbWF4J10sIGZ1bmN0aW9uIChtZXRob2QpIHtcbiAgICAgIHZhciBwYyA9IGNvbnRyb2xsZXJbbWV0aG9kXTtcbiAgICAgIHZhciBwYiA9IGJveFttZXRob2RdO1xuICAgICAgY29udHJvbGxlclttZXRob2RdID0gYm94W21ldGhvZF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcbiAgICAgICAgcGIuYXBwbHkoYm94LCBhcmdzKTtcbiAgICAgICAgcmV0dXJuIHBjLmFwcGx5KGNvbnRyb2xsZXIsIGFyZ3MpO1xuICAgICAgfTtcbiAgICB9KTtcbiAgICBkb20uYWRkQ2xhc3MobGksICdoYXMtc2xpZGVyJyk7XG4gICAgY29udHJvbGxlci5kb21FbGVtZW50Lmluc2VydEJlZm9yZShib3guZG9tRWxlbWVudCwgY29udHJvbGxlci5kb21FbGVtZW50LmZpcnN0RWxlbWVudENoaWxkKTtcbiAgfSBlbHNlIGlmIChjb250cm9sbGVyIGluc3RhbmNlb2YgTnVtYmVyQ29udHJvbGxlckJveCkge1xuICAgIHZhciByID0gZnVuY3Rpb24gcihyZXR1cm5lZCkge1xuICAgICAgaWYgKENvbW1vbi5pc051bWJlcihjb250cm9sbGVyLl9fbWluKSAmJiBDb21tb24uaXNOdW1iZXIoY29udHJvbGxlci5fX21heCkpIHtcbiAgICAgICAgdmFyIG9sZE5hbWUgPSBjb250cm9sbGVyLl9fbGkuZmlyc3RFbGVtZW50Q2hpbGQuZmlyc3RFbGVtZW50Q2hpbGQuaW5uZXJIVE1MO1xuICAgICAgICB2YXIgd2FzTGlzdGVuaW5nID0gY29udHJvbGxlci5fX2d1aS5fX2xpc3RlbmluZy5pbmRleE9mKGNvbnRyb2xsZXIpID4gLTE7XG4gICAgICAgIGNvbnRyb2xsZXIucmVtb3ZlKCk7XG4gICAgICAgIHZhciBuZXdDb250cm9sbGVyID0gX2FkZChndWksIGNvbnRyb2xsZXIub2JqZWN0LCBjb250cm9sbGVyLnByb3BlcnR5LCB7XG4gICAgICAgICAgYmVmb3JlOiBjb250cm9sbGVyLl9fbGkubmV4dEVsZW1lbnRTaWJsaW5nLFxuICAgICAgICAgIGZhY3RvcnlBcmdzOiBbY29udHJvbGxlci5fX21pbiwgY29udHJvbGxlci5fX21heCwgY29udHJvbGxlci5fX3N0ZXBdXG4gICAgICAgIH0pO1xuICAgICAgICBuZXdDb250cm9sbGVyLm5hbWUob2xkTmFtZSk7XG4gICAgICAgIGlmICh3YXNMaXN0ZW5pbmcpIG5ld0NvbnRyb2xsZXIubGlzdGVuKCk7XG4gICAgICAgIHJldHVybiBuZXdDb250cm9sbGVyO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJldHVybmVkO1xuICAgIH07XG4gICAgY29udHJvbGxlci5taW4gPSBDb21tb24uY29tcG9zZShyLCBjb250cm9sbGVyLm1pbik7XG4gICAgY29udHJvbGxlci5tYXggPSBDb21tb24uY29tcG9zZShyLCBjb250cm9sbGVyLm1heCk7XG4gIH0gZWxzZSBpZiAoY29udHJvbGxlciBpbnN0YW5jZW9mIEJvb2xlYW5Db250cm9sbGVyKSB7XG4gICAgZG9tLmJpbmQobGksICdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGRvbS5mYWtlRXZlbnQoY29udHJvbGxlci5fX2NoZWNrYm94LCAnY2xpY2snKTtcbiAgICB9KTtcbiAgICBkb20uYmluZChjb250cm9sbGVyLl9fY2hlY2tib3gsICdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH0pO1xuICB9IGVsc2UgaWYgKGNvbnRyb2xsZXIgaW5zdGFuY2VvZiBGdW5jdGlvbkNvbnRyb2xsZXIpIHtcbiAgICBkb20uYmluZChsaSwgJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgZG9tLmZha2VFdmVudChjb250cm9sbGVyLl9fYnV0dG9uLCAnY2xpY2snKTtcbiAgICB9KTtcbiAgICBkb20uYmluZChsaSwgJ21vdXNlb3ZlcicsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGRvbS5hZGRDbGFzcyhjb250cm9sbGVyLl9fYnV0dG9uLCAnaG92ZXInKTtcbiAgICB9KTtcbiAgICBkb20uYmluZChsaSwgJ21vdXNlb3V0JywgZnVuY3Rpb24gKCkge1xuICAgICAgZG9tLnJlbW92ZUNsYXNzKGNvbnRyb2xsZXIuX19idXR0b24sICdob3ZlcicpO1xuICAgIH0pO1xuICB9IGVsc2UgaWYgKGNvbnRyb2xsZXIgaW5zdGFuY2VvZiBDb2xvckNvbnRyb2xsZXIpIHtcbiAgICBkb20uYWRkQ2xhc3MobGksICdjb2xvcicpO1xuICAgIGNvbnRyb2xsZXIudXBkYXRlRGlzcGxheSA9IENvbW1vbi5jb21wb3NlKGZ1bmN0aW9uICh2YWwpIHtcbiAgICAgIGxpLnN0eWxlLmJvcmRlckxlZnRDb2xvciA9IGNvbnRyb2xsZXIuX19jb2xvci50b1N0cmluZygpO1xuICAgICAgcmV0dXJuIHZhbDtcbiAgICB9LCBjb250cm9sbGVyLnVwZGF0ZURpc3BsYXkpO1xuICAgIGNvbnRyb2xsZXIudXBkYXRlRGlzcGxheSgpO1xuICB9XG4gIGNvbnRyb2xsZXIuc2V0VmFsdWUgPSBDb21tb24uY29tcG9zZShmdW5jdGlvbiAodmFsKSB7XG4gICAgaWYgKGd1aS5nZXRSb290KCkuX19wcmVzZXRfc2VsZWN0ICYmIGNvbnRyb2xsZXIuaXNNb2RpZmllZCgpKSB7XG4gICAgICBtYXJrUHJlc2V0TW9kaWZpZWQoZ3VpLmdldFJvb3QoKSwgdHJ1ZSk7XG4gICAgfVxuICAgIHJldHVybiB2YWw7XG4gIH0sIGNvbnRyb2xsZXIuc2V0VmFsdWUpO1xufVxuZnVuY3Rpb24gcmVjYWxsU2F2ZWRWYWx1ZShndWksIGNvbnRyb2xsZXIpIHtcbiAgdmFyIHJvb3QgPSBndWkuZ2V0Um9vdCgpO1xuICB2YXIgbWF0Y2hlZEluZGV4ID0gcm9vdC5fX3JlbWVtYmVyZWRPYmplY3RzLmluZGV4T2YoY29udHJvbGxlci5vYmplY3QpO1xuICBpZiAobWF0Y2hlZEluZGV4ICE9PSAtMSkge1xuICAgIHZhciBjb250cm9sbGVyTWFwID0gcm9vdC5fX3JlbWVtYmVyZWRPYmplY3RJbmRlY2VzVG9Db250cm9sbGVyc1ttYXRjaGVkSW5kZXhdO1xuICAgIGlmIChjb250cm9sbGVyTWFwID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnRyb2xsZXJNYXAgPSB7fTtcbiAgICAgIHJvb3QuX19yZW1lbWJlcmVkT2JqZWN0SW5kZWNlc1RvQ29udHJvbGxlcnNbbWF0Y2hlZEluZGV4XSA9IGNvbnRyb2xsZXJNYXA7XG4gICAgfVxuICAgIGNvbnRyb2xsZXJNYXBbY29udHJvbGxlci5wcm9wZXJ0eV0gPSBjb250cm9sbGVyO1xuICAgIGlmIChyb290LmxvYWQgJiYgcm9vdC5sb2FkLnJlbWVtYmVyZWQpIHtcbiAgICAgIHZhciBwcmVzZXRNYXAgPSByb290LmxvYWQucmVtZW1iZXJlZDtcbiAgICAgIHZhciBwcmVzZXQgPSB2b2lkIDA7XG4gICAgICBpZiAocHJlc2V0TWFwW2d1aS5wcmVzZXRdKSB7XG4gICAgICAgIHByZXNldCA9IHByZXNldE1hcFtndWkucHJlc2V0XTtcbiAgICAgIH0gZWxzZSBpZiAocHJlc2V0TWFwW0RFRkFVTFRfREVGQVVMVF9QUkVTRVRfTkFNRV0pIHtcbiAgICAgICAgcHJlc2V0ID0gcHJlc2V0TWFwW0RFRkFVTFRfREVGQVVMVF9QUkVTRVRfTkFNRV07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAocHJlc2V0W21hdGNoZWRJbmRleF0gJiYgcHJlc2V0W21hdGNoZWRJbmRleF1bY29udHJvbGxlci5wcm9wZXJ0eV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICB2YXIgdmFsdWUgPSBwcmVzZXRbbWF0Y2hlZEluZGV4XVtjb250cm9sbGVyLnByb3BlcnR5XTtcbiAgICAgICAgY29udHJvbGxlci5pbml0aWFsVmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgY29udHJvbGxlci5zZXRWYWx1ZSh2YWx1ZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5mdW5jdGlvbiBfYWRkKGd1aSwgb2JqZWN0LCBwcm9wZXJ0eSwgcGFyYW1zKSB7XG4gIGlmIChvYmplY3RbcHJvcGVydHldID09PSB1bmRlZmluZWQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ09iamVjdCBcIicgKyBvYmplY3QgKyAnXCIgaGFzIG5vIHByb3BlcnR5IFwiJyArIHByb3BlcnR5ICsgJ1wiJyk7XG4gIH1cbiAgdmFyIGNvbnRyb2xsZXIgPSB2b2lkIDA7XG4gIGlmIChwYXJhbXMuY29sb3IpIHtcbiAgICBjb250cm9sbGVyID0gbmV3IENvbG9yQ29udHJvbGxlcihvYmplY3QsIHByb3BlcnR5KTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgZmFjdG9yeUFyZ3MgPSBbb2JqZWN0LCBwcm9wZXJ0eV0uY29uY2F0KHBhcmFtcy5mYWN0b3J5QXJncyk7XG4gICAgY29udHJvbGxlciA9IENvbnRyb2xsZXJGYWN0b3J5LmFwcGx5KGd1aSwgZmFjdG9yeUFyZ3MpO1xuICB9XG4gIGlmIChwYXJhbXMuYmVmb3JlIGluc3RhbmNlb2YgQ29udHJvbGxlcikge1xuICAgIHBhcmFtcy5iZWZvcmUgPSBwYXJhbXMuYmVmb3JlLl9fbGk7XG4gIH1cbiAgcmVjYWxsU2F2ZWRWYWx1ZShndWksIGNvbnRyb2xsZXIpO1xuICBkb20uYWRkQ2xhc3MoY29udHJvbGxlci5kb21FbGVtZW50LCAnYycpO1xuICB2YXIgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgZG9tLmFkZENsYXNzKG5hbWUsICdwcm9wZXJ0eS1uYW1lJyk7XG4gIG5hbWUuaW5uZXJIVE1MID0gY29udHJvbGxlci5wcm9wZXJ0eTtcbiAgdmFyIGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQobmFtZSk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjb250cm9sbGVyLmRvbUVsZW1lbnQpO1xuICB2YXIgbGkgPSBhZGRSb3coZ3VpLCBjb250YWluZXIsIHBhcmFtcy5iZWZvcmUpO1xuICBkb20uYWRkQ2xhc3MobGksIEdVSS5DTEFTU19DT05UUk9MTEVSX1JPVyk7XG4gIGlmIChjb250cm9sbGVyIGluc3RhbmNlb2YgQ29sb3JDb250cm9sbGVyKSB7XG4gICAgZG9tLmFkZENsYXNzKGxpLCAnY29sb3InKTtcbiAgfSBlbHNlIHtcbiAgICBkb20uYWRkQ2xhc3MobGksIF90eXBlb2YoY29udHJvbGxlci5nZXRWYWx1ZSgpKSk7XG4gIH1cbiAgYXVnbWVudENvbnRyb2xsZXIoZ3VpLCBsaSwgY29udHJvbGxlcik7XG4gIGd1aS5fX2NvbnRyb2xsZXJzLnB1c2goY29udHJvbGxlcik7XG4gIHJldHVybiBjb250cm9sbGVyO1xufVxuZnVuY3Rpb24gZ2V0TG9jYWxTdG9yYWdlSGFzaChndWksIGtleSkge1xuICByZXR1cm4gZG9jdW1lbnQubG9jYXRpb24uaHJlZiArICcuJyArIGtleTtcbn1cbmZ1bmN0aW9uIGFkZFByZXNldE9wdGlvbihndWksIG5hbWUsIHNldFNlbGVjdGVkKSB7XG4gIHZhciBvcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgb3B0LmlubmVySFRNTCA9IG5hbWU7XG4gIG9wdC52YWx1ZSA9IG5hbWU7XG4gIGd1aS5fX3ByZXNldF9zZWxlY3QuYXBwZW5kQ2hpbGQob3B0KTtcbiAgaWYgKHNldFNlbGVjdGVkKSB7XG4gICAgZ3VpLl9fcHJlc2V0X3NlbGVjdC5zZWxlY3RlZEluZGV4ID0gZ3VpLl9fcHJlc2V0X3NlbGVjdC5sZW5ndGggLSAxO1xuICB9XG59XG5mdW5jdGlvbiBzaG93SGlkZUV4cGxhaW4oZ3VpLCBleHBsYWluKSB7XG4gIGV4cGxhaW4uc3R5bGUuZGlzcGxheSA9IGd1aS51c2VMb2NhbFN0b3JhZ2UgPyAnYmxvY2snIDogJ25vbmUnO1xufVxuZnVuY3Rpb24gYWRkU2F2ZU1lbnUoZ3VpKSB7XG4gIHZhciBkaXYgPSBndWkuX19zYXZlX3JvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIGRvbS5hZGRDbGFzcyhndWkuZG9tRWxlbWVudCwgJ2hhcy1zYXZlJyk7XG4gIGd1aS5fX3VsLmluc2VydEJlZm9yZShkaXYsIGd1aS5fX3VsLmZpcnN0Q2hpbGQpO1xuICBkb20uYWRkQ2xhc3MoZGl2LCAnc2F2ZS1yb3cnKTtcbiAgdmFyIGdlYXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBnZWFycy5pbm5lckhUTUwgPSAnJm5ic3A7JztcbiAgZG9tLmFkZENsYXNzKGdlYXJzLCAnYnV0dG9uIGdlYXJzJyk7XG4gIHZhciBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIGJ1dHRvbi5pbm5lckhUTUwgPSAnU2F2ZSc7XG4gIGRvbS5hZGRDbGFzcyhidXR0b24sICdidXR0b24nKTtcbiAgZG9tLmFkZENsYXNzKGJ1dHRvbiwgJ3NhdmUnKTtcbiAgdmFyIGJ1dHRvbjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIGJ1dHRvbjIuaW5uZXJIVE1MID0gJ05ldyc7XG4gIGRvbS5hZGRDbGFzcyhidXR0b24yLCAnYnV0dG9uJyk7XG4gIGRvbS5hZGRDbGFzcyhidXR0b24yLCAnc2F2ZS1hcycpO1xuICB2YXIgYnV0dG9uMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgYnV0dG9uMy5pbm5lckhUTUwgPSAnUmV2ZXJ0JztcbiAgZG9tLmFkZENsYXNzKGJ1dHRvbjMsICdidXR0b24nKTtcbiAgZG9tLmFkZENsYXNzKGJ1dHRvbjMsICdyZXZlcnQnKTtcbiAgdmFyIHNlbGVjdCA9IGd1aS5fX3ByZXNldF9zZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgaWYgKGd1aS5sb2FkICYmIGd1aS5sb2FkLnJlbWVtYmVyZWQpIHtcbiAgICBDb21tb24uZWFjaChndWkubG9hZC5yZW1lbWJlcmVkLCBmdW5jdGlvbiAodmFsdWUsIGtleSkge1xuICAgICAgYWRkUHJlc2V0T3B0aW9uKGd1aSwga2V5LCBrZXkgPT09IGd1aS5wcmVzZXQpO1xuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIGFkZFByZXNldE9wdGlvbihndWksIERFRkFVTFRfREVGQVVMVF9QUkVTRVRfTkFNRSwgZmFsc2UpO1xuICB9XG4gIGRvbS5iaW5kKHNlbGVjdCwgJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcbiAgICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgZ3VpLl9fcHJlc2V0X3NlbGVjdC5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgIGd1aS5fX3ByZXNldF9zZWxlY3RbaW5kZXhdLmlubmVySFRNTCA9IGd1aS5fX3ByZXNldF9zZWxlY3RbaW5kZXhdLnZhbHVlO1xuICAgIH1cbiAgICBndWkucHJlc2V0ID0gdGhpcy52YWx1ZTtcbiAgfSk7XG4gIGRpdi5hcHBlbmRDaGlsZChzZWxlY3QpO1xuICBkaXYuYXBwZW5kQ2hpbGQoZ2VhcnMpO1xuICBkaXYuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbiAgZGl2LmFwcGVuZENoaWxkKGJ1dHRvbjIpO1xuICBkaXYuYXBwZW5kQ2hpbGQoYnV0dG9uMyk7XG4gIGlmIChTVVBQT1JUU19MT0NBTF9TVE9SQUdFKSB7XG4gICAgdmFyIGV4cGxhaW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGctbG9jYWwtZXhwbGFpbicpO1xuICAgIHZhciBsb2NhbFN0b3JhZ2VDaGVja0JveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZy1sb2NhbC1zdG9yYWdlJyk7XG4gICAgdmFyIHNhdmVMb2NhbGx5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RnLXNhdmUtbG9jYWxseScpO1xuICAgIHNhdmVMb2NhbGx5LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShnZXRMb2NhbFN0b3JhZ2VIYXNoKGd1aSwgJ2lzTG9jYWwnKSkgPT09ICd0cnVlJykge1xuICAgICAgbG9jYWxTdG9yYWdlQ2hlY2tCb3guc2V0QXR0cmlidXRlKCdjaGVja2VkJywgJ2NoZWNrZWQnKTtcbiAgICB9XG4gICAgc2hvd0hpZGVFeHBsYWluKGd1aSwgZXhwbGFpbik7XG4gICAgZG9tLmJpbmQobG9jYWxTdG9yYWdlQ2hlY2tCb3gsICdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XG4gICAgICBndWkudXNlTG9jYWxTdG9yYWdlID0gIWd1aS51c2VMb2NhbFN0b3JhZ2U7XG4gICAgICBzaG93SGlkZUV4cGxhaW4oZ3VpLCBleHBsYWluKTtcbiAgICB9KTtcbiAgfVxuICB2YXIgbmV3Q29uc3RydWN0b3JUZXh0QXJlYSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZy1uZXctY29uc3RydWN0b3InKTtcbiAgZG9tLmJpbmQobmV3Q29uc3RydWN0b3JUZXh0QXJlYSwgJ2tleWRvd24nLCBmdW5jdGlvbiAoZSkge1xuICAgIGlmIChlLm1ldGFLZXkgJiYgKGUud2hpY2ggPT09IDY3IHx8IGUua2V5Q29kZSA9PT0gNjcpKSB7XG4gICAgICBTQVZFX0RJQUxPR1VFLmhpZGUoKTtcbiAgICB9XG4gIH0pO1xuICBkb20uYmluZChnZWFycywgJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgIG5ld0NvbnN0cnVjdG9yVGV4dEFyZWEuaW5uZXJIVE1MID0gSlNPTi5zdHJpbmdpZnkoZ3VpLmdldFNhdmVPYmplY3QoKSwgdW5kZWZpbmVkLCAyKTtcbiAgICBTQVZFX0RJQUxPR1VFLnNob3coKTtcbiAgICBuZXdDb25zdHJ1Y3RvclRleHRBcmVhLmZvY3VzKCk7XG4gICAgbmV3Q29uc3RydWN0b3JUZXh0QXJlYS5zZWxlY3QoKTtcbiAgfSk7XG4gIGRvbS5iaW5kKGJ1dHRvbiwgJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgIGd1aS5zYXZlKCk7XG4gIH0pO1xuICBkb20uYmluZChidXR0b24yLCAnY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHByZXNldE5hbWUgPSBwcm9tcHQoJ0VudGVyIGEgbmV3IHByZXNldCBuYW1lLicpO1xuICAgIGlmIChwcmVzZXROYW1lKSB7XG4gICAgICBndWkuc2F2ZUFzKHByZXNldE5hbWUpO1xuICAgIH1cbiAgfSk7XG4gIGRvbS5iaW5kKGJ1dHRvbjMsICdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICBndWkucmV2ZXJ0KCk7XG4gIH0pO1xufVxuZnVuY3Rpb24gYWRkUmVzaXplSGFuZGxlKGd1aSkge1xuICB2YXIgcG1vdXNlWCA9IHZvaWQgMDtcbiAgZ3VpLl9fcmVzaXplX2hhbmRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBDb21tb24uZXh0ZW5kKGd1aS5fX3Jlc2l6ZV9oYW5kbGUuc3R5bGUsIHtcbiAgICB3aWR0aDogJzZweCcsXG4gICAgbWFyZ2luTGVmdDogJy0zcHgnLFxuICAgIGhlaWdodDogJzIwMHB4JyxcbiAgICBjdXJzb3I6ICdldy1yZXNpemUnLFxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnXG4gIH0pO1xuICBmdW5jdGlvbiBkcmFnKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZ3VpLndpZHRoICs9IHBtb3VzZVggLSBlLmNsaWVudFg7XG4gICAgZ3VpLm9uUmVzaXplKCk7XG4gICAgcG1vdXNlWCA9IGUuY2xpZW50WDtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgZnVuY3Rpb24gZHJhZ1N0b3AoKSB7XG4gICAgZG9tLnJlbW92ZUNsYXNzKGd1aS5fX2Nsb3NlQnV0dG9uLCBHVUkuQ0xBU1NfRFJBRyk7XG4gICAgZG9tLnVuYmluZCh3aW5kb3csICdtb3VzZW1vdmUnLCBkcmFnKTtcbiAgICBkb20udW5iaW5kKHdpbmRvdywgJ21vdXNldXAnLCBkcmFnU3RvcCk7XG4gIH1cbiAgZnVuY3Rpb24gZHJhZ1N0YXJ0KGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgcG1vdXNlWCA9IGUuY2xpZW50WDtcbiAgICBkb20uYWRkQ2xhc3MoZ3VpLl9fY2xvc2VCdXR0b24sIEdVSS5DTEFTU19EUkFHKTtcbiAgICBkb20uYmluZCh3aW5kb3csICdtb3VzZW1vdmUnLCBkcmFnKTtcbiAgICBkb20uYmluZCh3aW5kb3csICdtb3VzZXVwJywgZHJhZ1N0b3ApO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBkb20uYmluZChndWkuX19yZXNpemVfaGFuZGxlLCAnbW91c2Vkb3duJywgZHJhZ1N0YXJ0KTtcbiAgZG9tLmJpbmQoZ3VpLl9fY2xvc2VCdXR0b24sICdtb3VzZWRvd24nLCBkcmFnU3RhcnQpO1xuICBndWkuZG9tRWxlbWVudC5pbnNlcnRCZWZvcmUoZ3VpLl9fcmVzaXplX2hhbmRsZSwgZ3VpLmRvbUVsZW1lbnQuZmlyc3RFbGVtZW50Q2hpbGQpO1xufVxuZnVuY3Rpb24gc2V0V2lkdGgoZ3VpLCB3KSB7XG4gIGd1aS5kb21FbGVtZW50LnN0eWxlLndpZHRoID0gdyArICdweCc7XG4gIGlmIChndWkuX19zYXZlX3JvdyAmJiBndWkuYXV0b1BsYWNlKSB7XG4gICAgZ3VpLl9fc2F2ZV9yb3cuc3R5bGUud2lkdGggPSB3ICsgJ3B4JztcbiAgfVxuICBpZiAoZ3VpLl9fY2xvc2VCdXR0b24pIHtcbiAgICBndWkuX19jbG9zZUJ1dHRvbi5zdHlsZS53aWR0aCA9IHcgKyAncHgnO1xuICB9XG59XG5mdW5jdGlvbiBnZXRDdXJyZW50UHJlc2V0KGd1aSwgdXNlSW5pdGlhbFZhbHVlcykge1xuICB2YXIgdG9SZXR1cm4gPSB7fTtcbiAgQ29tbW9uLmVhY2goZ3VpLl9fcmVtZW1iZXJlZE9iamVjdHMsIGZ1bmN0aW9uICh2YWwsIGluZGV4KSB7XG4gICAgdmFyIHNhdmVkVmFsdWVzID0ge307XG4gICAgdmFyIGNvbnRyb2xsZXJNYXAgPSBndWkuX19yZW1lbWJlcmVkT2JqZWN0SW5kZWNlc1RvQ29udHJvbGxlcnNbaW5kZXhdO1xuICAgIENvbW1vbi5lYWNoKGNvbnRyb2xsZXJNYXAsIGZ1bmN0aW9uIChjb250cm9sbGVyLCBwcm9wZXJ0eSkge1xuICAgICAgc2F2ZWRWYWx1ZXNbcHJvcGVydHldID0gdXNlSW5pdGlhbFZhbHVlcyA/IGNvbnRyb2xsZXIuaW5pdGlhbFZhbHVlIDogY29udHJvbGxlci5nZXRWYWx1ZSgpO1xuICAgIH0pO1xuICAgIHRvUmV0dXJuW2luZGV4XSA9IHNhdmVkVmFsdWVzO1xuICB9KTtcbiAgcmV0dXJuIHRvUmV0dXJuO1xufVxuZnVuY3Rpb24gc2V0UHJlc2V0U2VsZWN0SW5kZXgoZ3VpKSB7XG4gIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCBndWkuX19wcmVzZXRfc2VsZWN0Lmxlbmd0aDsgaW5kZXgrKykge1xuICAgIGlmIChndWkuX19wcmVzZXRfc2VsZWN0W2luZGV4XS52YWx1ZSA9PT0gZ3VpLnByZXNldCkge1xuICAgICAgZ3VpLl9fcHJlc2V0X3NlbGVjdC5zZWxlY3RlZEluZGV4ID0gaW5kZXg7XG4gICAgfVxuICB9XG59XG5mdW5jdGlvbiB1cGRhdGVEaXNwbGF5cyhjb250cm9sbGVyQXJyYXkpIHtcbiAgaWYgKGNvbnRyb2xsZXJBcnJheS5sZW5ndGggIT09IDApIHtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUkMS5jYWxsKHdpbmRvdywgZnVuY3Rpb24gKCkge1xuICAgICAgdXBkYXRlRGlzcGxheXMoY29udHJvbGxlckFycmF5KTtcbiAgICB9KTtcbiAgfVxuICBDb21tb24uZWFjaChjb250cm9sbGVyQXJyYXksIGZ1bmN0aW9uIChjKSB7XG4gICAgYy51cGRhdGVEaXNwbGF5KCk7XG4gIH0pO1xufVxuXG52YXIgY29sb3IgPSB7XG4gIENvbG9yOiBDb2xvcixcbiAgbWF0aDogQ29sb3JNYXRoLFxuICBpbnRlcnByZXQ6IGludGVycHJldFxufTtcbnZhciBjb250cm9sbGVycyA9IHtcbiAgQ29udHJvbGxlcjogQ29udHJvbGxlcixcbiAgQm9vbGVhbkNvbnRyb2xsZXI6IEJvb2xlYW5Db250cm9sbGVyLFxuICBPcHRpb25Db250cm9sbGVyOiBPcHRpb25Db250cm9sbGVyLFxuICBTdHJpbmdDb250cm9sbGVyOiBTdHJpbmdDb250cm9sbGVyLFxuICBOdW1iZXJDb250cm9sbGVyOiBOdW1iZXJDb250cm9sbGVyLFxuICBOdW1iZXJDb250cm9sbGVyQm94OiBOdW1iZXJDb250cm9sbGVyQm94LFxuICBOdW1iZXJDb250cm9sbGVyU2xpZGVyOiBOdW1iZXJDb250cm9sbGVyU2xpZGVyLFxuICBGdW5jdGlvbkNvbnRyb2xsZXI6IEZ1bmN0aW9uQ29udHJvbGxlcixcbiAgQ29sb3JDb250cm9sbGVyOiBDb2xvckNvbnRyb2xsZXJcbn07XG52YXIgZG9tJDEgPSB7IGRvbTogZG9tIH07XG52YXIgZ3VpID0geyBHVUk6IEdVSSB9O1xudmFyIEdVSSQxID0gR1VJO1xudmFyIGluZGV4ID0ge1xuICBjb2xvcjogY29sb3IsXG4gIGNvbnRyb2xsZXJzOiBjb250cm9sbGVycyxcbiAgZG9tOiBkb20kMSxcbiAgZ3VpOiBndWksXG4gIEdVSTogR1VJJDFcbn07XG5cbmV4cG9ydCB7IGNvbG9yLCBjb250cm9sbGVycywgZG9tJDEgYXMgZG9tLCBndWksIEdVSSQxIGFzIEdVSSB9O1xuZXhwb3J0IGRlZmF1bHQgaW5kZXg7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXQuZ3VpLm1vZHVsZS5qcy5tYXBcbiIsImltcG9ydCBEZWJ1ZyBmcm9tICdAYmFzZW1lbnR1bml2ZXJzZS9kZWJ1Zyc7XG5pbXBvcnQgSW5wdXRNYW5hZ2VyIGZyb20gJ0BiYXNlbWVudHVuaXZlcnNlL2lucHV0LW1hbmFnZXInO1xuaW1wb3J0IHsgdmVjIH0gZnJvbSAnQGJhc2VtZW50dW5pdmVyc2UvdmVjJztcbmltcG9ydCB7IHY0IGFzIHV1aWQgfSBmcm9tICd1dWlkJztcbmltcG9ydCBHYW1lIGZyb20gJy4vR2FtZSc7XG5pbXBvcnQgeyBMaWdodGluZ1NjZW5lIH0gZnJvbSAnLi9MaWdodGluZ1NjZW5lJztcbmltcG9ydCBTaGFkb3dDYXN0ZXIgZnJvbSAnLi9TaGFkb3dDYXN0ZXInO1xuaW1wb3J0IHsgY2xhbXBWZWMsIHBvaW50SW5SZWN0YW5nbGUsIHF1YW50aXplVmVjIH0gZnJvbSAnLi91dGlscyc7XG5cbmV4cG9ydCBjbGFzcyBDaXJjbGVTaGFkb3dDYXN0ZXIgaW1wbGVtZW50cyBTaGFkb3dDYXN0ZXIge1xuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBERUZBVUxUX1NJWkUgPSB2ZWMoMTAwLCAxMDApO1xuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBERUJVR19DT0xPVVIgPSAnI2IwNSc7XG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IERFQlVHX0hPVkVSX0NPTE9VUiA9ICcjZDI3JztcbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgTUlOX1NJWkUgPSB2ZWMoMjAsIDIwKTtcbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgTUFYX1NJWkUgPSB2ZWMoMjAwLCAyMDApO1xuXG4gIHB1YmxpYyByZWFkb25seSB0eXBlID0gJ0NpcmNsZVNoYWRvd0Nhc3Rlcic7XG5cbiAgcHVibGljIGlkOiBzdHJpbmcgPSAnJztcbiAgcHVibGljIGZvbGRlcjogZGF0LkdVSSB8IG51bGwgPSBudWxsO1xuXG4gIHB1YmxpYyBwb3NpdGlvbjogdmVjID0gdmVjKCk7XG4gIHB1YmxpYyBzaXplOiB2ZWMgPSBDaXJjbGVTaGFkb3dDYXN0ZXIuREVGQVVMVF9TSVpFO1xuXG4gIHB1YmxpYyBob3ZlcmVkID0gZmFsc2U7XG4gIHB1YmxpYyBzZWxlY3RlZCA9IGZhbHNlO1xuICBwcml2YXRlIGRyYWdnaW5nID0gZmFsc2U7XG4gIHByaXZhdGUgZHJhZ09mZnNldDogdmVjIHwgbnVsbCA9IG51bGw7XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKGRhdGE6IFBhcnRpYWw8Q2lyY2xlU2hhZG93Q2FzdGVyPiA9IHt9KSB7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBkYXRhLCB7XG4gICAgICBpZDogZGF0YS5pZCA/PyB1dWlkKCkuc3BsaXQoJy0nKVswXSxcbiAgICB9KTtcblxuICAgIHRoaXMuZm9sZGVyID0gR2FtZS5ndWkuYWRkRm9sZGVyKGBDaXJjbGVTaGFkb3dDYXN0ZXIgJHt0aGlzLmlkfWApO1xuICAgIHRoaXMuZm9sZGVyLmFkZCh0aGlzLnBvc2l0aW9uLCAneCcpO1xuICAgIHRoaXMuZm9sZGVyLmFkZCh0aGlzLnBvc2l0aW9uLCAneScpO1xuICAgIHRoaXMuZm9sZGVyXG4gICAgICAuYWRkKFxuICAgICAgICB0aGlzLnNpemUsXG4gICAgICAgICd4JyxcbiAgICAgICAgQ2lyY2xlU2hhZG93Q2FzdGVyLk1JTl9TSVpFLngsXG4gICAgICAgIENpcmNsZVNoYWRvd0Nhc3Rlci5NQVhfU0laRS54XG4gICAgICApXG4gICAgICAubmFtZSgnd2lkdGgnKTtcbiAgICB0aGlzLmZvbGRlclxuICAgICAgLmFkZChcbiAgICAgICAgdGhpcy5zaXplLFxuICAgICAgICAneScsXG4gICAgICAgIENpcmNsZVNoYWRvd0Nhc3Rlci5NSU5fU0laRS55LFxuICAgICAgICBDaXJjbGVTaGFkb3dDYXN0ZXIuTUFYX1NJWkUueVxuICAgICAgKVxuICAgICAgLm5hbWUoJ2hlaWdodCcpO1xuICB9XG5cbiAgcHVibGljIHNlcmlhbGlzZSgpOiBhbnkge1xuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiB0aGlzLnR5cGUsXG4gICAgICBpZDogdGhpcy5pZCxcbiAgICAgIHBvc2l0aW9uOiB0aGlzLnBvc2l0aW9uLFxuICAgICAgc2l6ZTogdGhpcy5zaXplLFxuICAgIH07XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGRlc2VyaWFsaXNlKGRhdGE6IGFueSk6IENpcmNsZVNoYWRvd0Nhc3RlciB7XG4gICAgcmV0dXJuIG5ldyBDaXJjbGVTaGFkb3dDYXN0ZXIoZGF0YSk7XG4gIH1cblxuICBwdWJsaWMgZGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy5mb2xkZXIpIHtcbiAgICAgIEdhbWUuZ3VpLnJlbW92ZUZvbGRlcih0aGlzLmZvbGRlcik7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHVwZGF0ZShkdDogbnVtYmVyKSB7XG4gICAgdGhpcy5ob3ZlcmVkID0gcG9pbnRJblJlY3RhbmdsZShJbnB1dE1hbmFnZXIubW91c2VQb3NpdGlvbiwge1xuICAgICAgcG9zaXRpb246IHRoaXMucG9zaXRpb24sXG4gICAgICBzaXplOiB0aGlzLnNpemUsXG4gICAgfSk7XG5cbiAgICBpZiAoSW5wdXRNYW5hZ2VyLm1vdXNlRG93bigpICYmIHRoaXMuc2VsZWN0ZWQgJiYgIXRoaXMuZHJhZ2dpbmcpIHtcbiAgICAgIHRoaXMuZHJhZ2dpbmcgPSB0cnVlO1xuICAgICAgdGhpcy5kcmFnT2Zmc2V0ID0gdmVjLnN1YihJbnB1dE1hbmFnZXIubW91c2VQb3NpdGlvbiwgdGhpcy5wb3NpdGlvbik7XG4gICAgfVxuXG4gICAgaWYgKCFJbnB1dE1hbmFnZXIubW91c2VEb3duKCkpIHtcbiAgICAgIHRoaXMuZHJhZ2dpbmcgPSBmYWxzZTtcbiAgICAgIHRoaXMuZHJhZ09mZnNldCA9IG51bGw7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuc2VsZWN0ZWQgJiYgdGhpcy5kcmFnZ2luZyAmJiB0aGlzLmRyYWdPZmZzZXQpIHtcbiAgICAgIGlmIChJbnB1dE1hbmFnZXIua2V5RG93bignQ29udHJvbExlZnQnKSkge1xuICAgICAgICBsZXQgbmV3U2l6ZSA9IHZlYy5zdWIoSW5wdXRNYW5hZ2VyLm1vdXNlUG9zaXRpb24sIHRoaXMucG9zaXRpb24pO1xuICAgICAgICBpZiAoSW5wdXRNYW5hZ2VyLmtleURvd24oJ1NoaWZ0TGVmdCcpKSB7XG4gICAgICAgICAgbmV3U2l6ZSA9IHF1YW50aXplVmVjKG5ld1NpemUsIExpZ2h0aW5nU2NlbmUuR1JJRF9TSVpFKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNpemUgPSBjbGFtcFZlYyhcbiAgICAgICAgICBuZXdTaXplLFxuICAgICAgICAgIENpcmNsZVNoYWRvd0Nhc3Rlci5NSU5fU0laRSxcbiAgICAgICAgICBDaXJjbGVTaGFkb3dDYXN0ZXIuTUFYX1NJWkVcbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCBuZXdQb3NpdGlvbiA9IHZlYy5zdWIoSW5wdXRNYW5hZ2VyLm1vdXNlUG9zaXRpb24sIHRoaXMuZHJhZ09mZnNldCk7XG4gICAgICAgIGlmIChJbnB1dE1hbmFnZXIua2V5RG93bignU2hpZnRMZWZ0JykpIHtcbiAgICAgICAgICBuZXdQb3NpdGlvbiA9IHF1YW50aXplVmVjKG5ld1Bvc2l0aW9uLCBMaWdodGluZ1NjZW5lLkdSSURfU0laRSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IG5ld1Bvc2l0aW9uO1xuICAgICAgfVxuICAgIH1cblxuICAgIERlYnVnLmJvcmRlcihgQ2lyY2xlU2hhZG93Q2FzdGVyICR7dGhpcy5pZH1gLCAnJywgdGhpcy5wb3NpdGlvbiwge1xuICAgICAgbGV2ZWw6IDEsXG4gICAgICBzaG93TGFiZWw6IEdhbWUuREVCVUdfTU9ERVNbR2FtZS5kZWJ1Z01vZGVdLmxhYmVscyxcbiAgICAgIHNob3dWYWx1ZTogZmFsc2UsXG4gICAgICBzaXplOiB0aGlzLnNpemUsXG4gICAgICBib3JkZXJDb2xvdXI6XG4gICAgICAgIHRoaXMuaG92ZXJlZCB8fCB0aGlzLmRyYWdnaW5nXG4gICAgICAgICAgPyBDaXJjbGVTaGFkb3dDYXN0ZXIuREVCVUdfSE9WRVJfQ09MT1VSXG4gICAgICAgICAgOiBDaXJjbGVTaGFkb3dDYXN0ZXIuREVCVUdfQ09MT1VSLFxuICAgICAgYm9yZGVyU3R5bGU6IHRoaXMuc2VsZWN0ZWQgPyAnc29saWQnIDogJ2Rhc2hlZCcsXG4gICAgfSk7XG4gIH1cbn1cbiIsImltcG9ydCBEZWJ1ZyBmcm9tICdAYmFzZW1lbnR1bml2ZXJzZS9kZWJ1Zyc7XG5pbXBvcnQgSW5wdXRNYW5hZ2VyIGZyb20gJ0BiYXNlbWVudHVuaXZlcnNlL2lucHV0LW1hbmFnZXInO1xuaW1wb3J0IHsgdmVjIH0gZnJvbSAnQGJhc2VtZW50dW5pdmVyc2UvdmVjJztcbmltcG9ydCAqIGFzIGRhdCBmcm9tICdkYXQuZ3VpJztcbmltcG9ydCAqIGFzIGNvbnN0YW50cyBmcm9tICcuL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBMaWdodGluZ1NjZW5lIH0gZnJvbSAnLi9MaWdodGluZ1NjZW5lJztcbmltcG9ydCB7IFRlc3RTY2VuZSB9IGZyb20gJy4vVGVzdFNjZW5lJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZSB7XG4gIHB1YmxpYyBzdGF0aWMgREVCVUdfTU9ERVMgPSB7XG4gICAgbm9uZToge1xuICAgICAgZGVidWdMZXZlbDogMixcbiAgICAgIGxhYmVsczogZmFsc2UsXG4gICAgfSxcbiAgICBib3JkZXJzOiB7XG4gICAgICBkZWJ1Z0xldmVsOiAwLFxuICAgICAgbGFiZWxzOiBmYWxzZSxcbiAgICB9LFxuICAgIGFsbDoge1xuICAgICAgZGVidWdMZXZlbDogMCxcbiAgICAgIGxhYmVsczogdHJ1ZSxcbiAgICB9LFxuICB9O1xuICBwdWJsaWMgc3RhdGljIGRlYnVnTW9kZTogJ25vbmUnIHwgJ2JvcmRlcnMnIHwgJ2FsbCcgPSAnYm9yZGVycyc7XG5cbiAgcHJpdmF0ZSBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xuICBwcml2YXRlIGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcblxuICBwcml2YXRlIGxhc3RGcmFtZVRpbWU6IG51bWJlcjtcbiAgcHJpdmF0ZSBsYXN0RnJhbWVDb3VudFRpbWU6IG51bWJlcjtcbiAgcHJpdmF0ZSBmcmFtZVJhdGU6IG51bWJlciA9IDA7XG4gIHByaXZhdGUgZnJhbWVDb3VudDogbnVtYmVyID0gMDtcblxuICBwcml2YXRlIHNjZW5lOiBUZXN0U2NlbmUgfCBMaWdodGluZ1NjZW5lIHwgbnVsbCA9IG51bGw7XG5cbiAgcHVibGljIHN0YXRpYyBzY3JlZW46IHZlYztcbiAgcHVibGljIHN0YXRpYyBndWk6IGRhdC5HVUk7XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogSFRNTEVsZW1lbnQgfCBudWxsKSB7XG4gICAgaWYgKGNvbnRhaW5lciA9PT0gbnVsbCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdBIHZhbGlkIGNvbnRhaW5lciBlbGVtZW50IG11c3QgYmUgc3BlY2lmaWVkLicpO1xuICAgIH1cbiAgICBpZiAoY29udGFpbmVyLnRhZ05hbWUudG9Mb3dlckNhc2UoKSAhPT0gJ2NhbnZhcycpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQ29udGFpbmVyIGVsZW1lbnQgbXVzdCBiZSBhIGNhbnZhcy4nKTtcbiAgICB9XG4gICAgdGhpcy5jYW52YXMgPSBjb250YWluZXIgYXMgSFRNTENhbnZhc0VsZW1lbnQ7XG5cbiAgICAvLyBHZXQgYSAyZCBjb250ZXh0XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgaWYgKGNvbnRleHQgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGdldCBhIDJkIGNvbnRleHQuXCIpO1xuICAgIH1cblxuICAgIC8vIEhhbmRsZSByZXNpemVcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5yZXNpemUuYmluZCh0aGlzKSwgZmFsc2UpO1xuICAgIHRoaXMucmVzaXplKCk7XG4gIH1cblxuICBwcml2YXRlIHJlc2l6ZSgpIHtcbiAgICB0aGlzLmNhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgfVxuXG4gIHB1YmxpYyBpbml0aWFsaXNlKCkge1xuICAgIC8vIEluaXRpYWxpc2Ugc3Vic3lzdGVtc1xuICAgIERlYnVnLmluaXRpYWxpc2UoKTtcbiAgICBJbnB1dE1hbmFnZXIuaW5pdGlhbGlzZSgpO1xuICAgIEdhbWUuZ3VpID0gbmV3IGRhdC5HVUkoe1xuICAgICAgd2lkdGg6IDMwMCxcbiAgICB9KTtcblxuICAgIEdhbWUuZ3VpXG4gICAgICAuYWRkKHsgZGVidWdNb2RlOiBHYW1lLmRlYnVnTW9kZSB9LCAnZGVidWdNb2RlJywgW1xuICAgICAgICAnbm9uZScsXG4gICAgICAgICdib3JkZXJzJyxcbiAgICAgICAgJ2FsbCcsXG4gICAgICBdKVxuICAgICAgLm9uQ2hhbmdlKHYgPT4ge1xuICAgICAgICBHYW1lLmRlYnVnTW9kZSA9IHY7XG4gICAgICB9KTtcblxuICAgIC8vIFN0YXJ0IGdhbWUgbG9vcFxuICAgIHRoaXMubGFzdEZyYW1lVGltZSA9IHRoaXMubGFzdEZyYW1lQ291bnRUaW1lID0gcGVyZm9ybWFuY2Uubm93KCk7XG4gICAgdGhpcy5sb29wKCk7XG5cbiAgICAvLyBJbml0aWFsaXNlIHNjZW5lXG4gICAgdGhpcy5zY2VuZSA9IG5ldyBMaWdodGluZ1NjZW5lKCk7XG4gICAgLy8gdGhpcy5zY2VuZSA9IG5ldyBUZXN0U2NlbmUoKTtcbiAgICB0aGlzLnNjZW5lLmluaXRpYWxpc2UoKTtcbiAgfVxuXG4gIHByaXZhdGUgbG9vcCgpIHtcbiAgICBjb25zdCBub3cgPSBwZXJmb3JtYW5jZS5ub3coKTtcbiAgICBjb25zdCBlbGFwc2VkVGltZSA9IE1hdGgubWluKG5vdyAtIHRoaXMubGFzdEZyYW1lVGltZSwgY29uc3RhbnRzLkZQU19NSU4pO1xuXG4gICAgLy8gQ2FsY3VsYXRlIGZyYW1lcmF0ZVxuICAgIGlmIChub3cgLSB0aGlzLmxhc3RGcmFtZUNvdW50VGltZSA+PSAxMDAwKSB7XG4gICAgICB0aGlzLmxhc3RGcmFtZUNvdW50VGltZSA9IG5vdztcbiAgICAgIHRoaXMuZnJhbWVSYXRlID0gdGhpcy5mcmFtZUNvdW50O1xuICAgICAgdGhpcy5mcmFtZUNvdW50ID0gMDtcbiAgICB9XG4gICAgdGhpcy5mcmFtZUNvdW50Kys7XG4gICAgdGhpcy5sYXN0RnJhbWVUaW1lID0gbm93O1xuXG4gICAgRGVidWcudmFsdWUoJ0ZQUycsIHRoaXMuZnJhbWVSYXRlKTtcblxuICAgIC8vIERvIGdhbWUgbG9vcFxuICAgIHRoaXMudXBkYXRlKGVsYXBzZWRUaW1lKTtcbiAgICB0aGlzLmRyYXcoKTtcbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMubG9vcC5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIHVwZGF0ZShkdDogbnVtYmVyKSB7XG4gICAgR2FtZS5zY3JlZW4gPSB2ZWModGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG5cbiAgICBpZiAodGhpcy5zY2VuZSkge1xuICAgICAgdGhpcy5zY2VuZS51cGRhdGUoZHQpO1xuICAgIH1cblxuICAgIElucHV0TWFuYWdlci51cGRhdGUoKTsgLy8gSW5wdXQgbWFuYWdlciBzaG91bGQgYmUgdXBkYXRlZCBsYXN0XG4gIH1cblxuICBkcmF3KCkge1xuICAgIHRoaXMuY29udGV4dC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG5cbiAgICBpZiAodGhpcy5zY2VuZSkge1xuICAgICAgdGhpcy5zY2VuZS5kcmF3KHRoaXMuY29udGV4dCk7XG4gICAgfVxuXG4gICAgRGVidWcuZHJhdyh0aGlzLmNvbnRleHQsIEdhbWUuREVCVUdfTU9ERVNbR2FtZS5kZWJ1Z01vZGVdLmRlYnVnTGV2ZWwpO1xuICB9XG59XG4iLCJpbXBvcnQgRGVidWcgZnJvbSAnQGJhc2VtZW50dW5pdmVyc2UvZGVidWcnO1xuaW1wb3J0IElucHV0TWFuYWdlciBmcm9tICdAYmFzZW1lbnR1bml2ZXJzZS9pbnB1dC1tYW5hZ2VyJztcbmltcG9ydCB7IHZlYyB9IGZyb20gJ0BiYXNlbWVudHVuaXZlcnNlL3ZlYyc7XG5pbXBvcnQgeyB2NCBhcyB1dWlkIH0gZnJvbSAndXVpZCc7XG5pbXBvcnQgR2FtZSBmcm9tICcuL0dhbWUnO1xuaW1wb3J0IHsgTGlnaHRpbmdTY2VuZSB9IGZyb20gJy4vTGlnaHRpbmdTY2VuZSc7XG5pbXBvcnQgeyBjbGFtcFZlYywgcG9pbnRJblJlY3RhbmdsZSwgcXVhbnRpemVWZWMgfSBmcm9tICcuL3V0aWxzJztcblxuZXhwb3J0IGNsYXNzIEdyb3VuZFNoYWRvd1JlY2VpdmVyIHtcbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgREVGQVVMVF9TSVpFID0gdmVjKDIwMCwgMjAwKTtcbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgREVGQVVMVF9DT0xPVVIgPSAnI2RkZCc7XG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IERFQlVHX0NPTE9VUiA9ICcjMDViJztcbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgREVCVUdfSE9WRVJfQ09MT1VSID0gJyMzOGYnO1xuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBNSU5fU0laRSA9IHZlYygyMCwgMjApO1xuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBNQVhfU0laRSA9IHZlYygxMDAwLCAxMDAwKTtcblxuICBwdWJsaWMgcmVhZG9ubHkgdHlwZSA9ICdHcm91bmRTaGFkb3dSZWNlaXZlcic7XG5cbiAgcHVibGljIGlkOiBzdHJpbmcgPSAnJztcbiAgcHVibGljIGZvbGRlcjogZGF0LkdVSSB8IG51bGwgPSBudWxsO1xuXG4gIHB1YmxpYyBwb3NpdGlvbjogdmVjID0gdmVjKCk7XG4gIHB1YmxpYyBzaXplOiB2ZWMgPSBHcm91bmRTaGFkb3dSZWNlaXZlci5ERUZBVUxUX1NJWkU7XG4gIHB1YmxpYyBjb2xvdXI6IHN0cmluZyA9IEdyb3VuZFNoYWRvd1JlY2VpdmVyLkRFRkFVTFRfQ09MT1VSO1xuXG4gIHB1YmxpYyBob3ZlcmVkID0gZmFsc2U7XG4gIHB1YmxpYyBzZWxlY3RlZCA9IGZhbHNlO1xuICBwcml2YXRlIGRyYWdnaW5nID0gZmFsc2U7XG4gIHByaXZhdGUgZHJhZ09mZnNldDogdmVjIHwgbnVsbCA9IG51bGw7XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKGRhdGE6IFBhcnRpYWw8R3JvdW5kU2hhZG93UmVjZWl2ZXI+ID0ge30pIHtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGRhdGEsIHtcbiAgICAgIGlkOiBkYXRhLmlkID8/IHV1aWQoKS5zcGxpdCgnLScpWzBdLFxuICAgIH0pO1xuXG4gICAgdGhpcy5mb2xkZXIgPSBHYW1lLmd1aS5hZGRGb2xkZXIoYEdyb3VuZFNoYWRvd1JlY2VpdmVyICR7dGhpcy5pZH1gKTtcbiAgICB0aGlzLmZvbGRlci5hZGQodGhpcy5wb3NpdGlvbiwgJ3gnKTtcbiAgICB0aGlzLmZvbGRlci5hZGQodGhpcy5wb3NpdGlvbiwgJ3knKTtcbiAgICB0aGlzLmZvbGRlclxuICAgICAgLmFkZChcbiAgICAgICAgdGhpcy5zaXplLFxuICAgICAgICAneCcsXG4gICAgICAgIEdyb3VuZFNoYWRvd1JlY2VpdmVyLk1JTl9TSVpFLngsXG4gICAgICAgIEdyb3VuZFNoYWRvd1JlY2VpdmVyLk1BWF9TSVpFLnhcbiAgICAgIClcbiAgICAgIC5uYW1lKCd3aWR0aCcpO1xuICAgIHRoaXMuZm9sZGVyXG4gICAgICAuYWRkKFxuICAgICAgICB0aGlzLnNpemUsXG4gICAgICAgICd5JyxcbiAgICAgICAgR3JvdW5kU2hhZG93UmVjZWl2ZXIuTUlOX1NJWkUueSxcbiAgICAgICAgR3JvdW5kU2hhZG93UmVjZWl2ZXIuTUFYX1NJWkUueVxuICAgICAgKVxuICAgICAgLm5hbWUoJ2hlaWdodCcpO1xuICAgIHRoaXMuZm9sZGVyLmFkZCh0aGlzLCAnY29sb3VyJyk7XG4gIH1cblxuICBwdWJsaWMgc2VyaWFsaXNlKCk6IGFueSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6IHRoaXMudHlwZSxcbiAgICAgIGlkOiB0aGlzLmlkLFxuICAgICAgcG9zaXRpb246IHRoaXMucG9zaXRpb24sXG4gICAgICBzaXplOiB0aGlzLnNpemUsXG4gICAgICBjb2xvdXI6IHRoaXMuY29sb3VyLFxuICAgIH07XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGRlc2VyaWFsaXNlKGRhdGE6IGFueSk6IEdyb3VuZFNoYWRvd1JlY2VpdmVyIHtcbiAgICByZXR1cm4gbmV3IEdyb3VuZFNoYWRvd1JlY2VpdmVyKGRhdGEpO1xuICB9XG5cbiAgcHVibGljIGRlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMuZm9sZGVyKSB7XG4gICAgICBHYW1lLmd1aS5yZW1vdmVGb2xkZXIodGhpcy5mb2xkZXIpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyB1cGRhdGUoZHQ6IG51bWJlcikge1xuICAgIHRoaXMuaG92ZXJlZCA9IHBvaW50SW5SZWN0YW5nbGUoSW5wdXRNYW5hZ2VyLm1vdXNlUG9zaXRpb24sIHtcbiAgICAgIHBvc2l0aW9uOiB0aGlzLnBvc2l0aW9uLFxuICAgICAgc2l6ZTogdGhpcy5zaXplLFxuICAgIH0pO1xuXG4gICAgaWYgKElucHV0TWFuYWdlci5tb3VzZURvd24oKSAmJiB0aGlzLnNlbGVjdGVkICYmICF0aGlzLmRyYWdnaW5nKSB7XG4gICAgICB0aGlzLmRyYWdnaW5nID0gdHJ1ZTtcbiAgICAgIHRoaXMuZHJhZ09mZnNldCA9IHZlYy5zdWIoSW5wdXRNYW5hZ2VyLm1vdXNlUG9zaXRpb24sIHRoaXMucG9zaXRpb24pO1xuICAgIH1cblxuICAgIGlmICghSW5wdXRNYW5hZ2VyLm1vdXNlRG93bigpKSB7XG4gICAgICB0aGlzLmRyYWdnaW5nID0gZmFsc2U7XG4gICAgICB0aGlzLmRyYWdPZmZzZXQgPSBudWxsO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnNlbGVjdGVkICYmIHRoaXMuZHJhZ2dpbmcgJiYgdGhpcy5kcmFnT2Zmc2V0KSB7XG4gICAgICBpZiAoSW5wdXRNYW5hZ2VyLmtleURvd24oJ0NvbnRyb2xMZWZ0JykpIHtcbiAgICAgICAgbGV0IG5ld1NpemUgPSB2ZWMuc3ViKElucHV0TWFuYWdlci5tb3VzZVBvc2l0aW9uLCB0aGlzLnBvc2l0aW9uKTtcbiAgICAgICAgaWYgKElucHV0TWFuYWdlci5rZXlEb3duKCdTaGlmdExlZnQnKSkge1xuICAgICAgICAgIG5ld1NpemUgPSBxdWFudGl6ZVZlYyhuZXdTaXplLCBMaWdodGluZ1NjZW5lLkdSSURfU0laRSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zaXplID0gY2xhbXBWZWMoXG4gICAgICAgICAgbmV3U2l6ZSxcbiAgICAgICAgICBHcm91bmRTaGFkb3dSZWNlaXZlci5NSU5fU0laRSxcbiAgICAgICAgICBHcm91bmRTaGFkb3dSZWNlaXZlci5NQVhfU0laRVxuICAgICAgICApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IG5ld1Bvc2l0aW9uID0gdmVjLnN1YihJbnB1dE1hbmFnZXIubW91c2VQb3NpdGlvbiwgdGhpcy5kcmFnT2Zmc2V0KTtcbiAgICAgICAgaWYgKElucHV0TWFuYWdlci5rZXlEb3duKCdTaGlmdExlZnQnKSkge1xuICAgICAgICAgIG5ld1Bvc2l0aW9uID0gcXVhbnRpemVWZWMobmV3UG9zaXRpb24sIExpZ2h0aW5nU2NlbmUuR1JJRF9TSVpFKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnBvc2l0aW9uID0gbmV3UG9zaXRpb247XG4gICAgICB9XG4gICAgfVxuXG4gICAgRGVidWcuYm9yZGVyKGBHcm91bmRTaGFkb3dSZWNlaXZlciAke3RoaXMuaWR9YCwgJycsIHRoaXMucG9zaXRpb24sIHtcbiAgICAgIGxldmVsOiAxLFxuICAgICAgc2hvd0xhYmVsOiBHYW1lLkRFQlVHX01PREVTW0dhbWUuZGVidWdNb2RlXS5sYWJlbHMsXG4gICAgICBzaG93VmFsdWU6IGZhbHNlLFxuICAgICAgc2l6ZTogdGhpcy5zaXplLFxuICAgICAgYm9yZGVyQ29sb3VyOlxuICAgICAgICB0aGlzLmhvdmVyZWQgfHwgdGhpcy5kcmFnZ2luZ1xuICAgICAgICAgID8gR3JvdW5kU2hhZG93UmVjZWl2ZXIuREVCVUdfSE9WRVJfQ09MT1VSXG4gICAgICAgICAgOiBHcm91bmRTaGFkb3dSZWNlaXZlci5ERUJVR19DT0xPVVIsXG4gICAgICBib3JkZXJTdHlsZTogdGhpcy5zZWxlY3RlZCA/ICdzb2xpZCcgOiAnZGFzaGVkJyxcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBkcmF3KGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkge1xuICAgIGNvbnRleHQuc2F2ZSgpO1xuXG4gICAgY29udGV4dC5maWxsU3R5bGUgPSB0aGlzLmNvbG91cjtcbiAgICBjb250ZXh0LmZpbGxSZWN0KFxuICAgICAgdGhpcy5wb3NpdGlvbi54LFxuICAgICAgdGhpcy5wb3NpdGlvbi55LFxuICAgICAgdGhpcy5zaXplLngsXG4gICAgICB0aGlzLnNpemUueVxuICAgICk7XG5cbiAgICBjb250ZXh0LnJlc3RvcmUoKTtcbiAgfVxuXG4gIHB1YmxpYyBkcmF3TWFzayhjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpIHtcbiAgICBjb250ZXh0LnNhdmUoKTtcblxuICAgIGNvbnRleHQuZmlsbFN0eWxlID0gJ2JsYWNrJztcbiAgICBjb250ZXh0LmZpbGxSZWN0KFxuICAgICAgdGhpcy5wb3NpdGlvbi54LFxuICAgICAgdGhpcy5wb3NpdGlvbi55LFxuICAgICAgdGhpcy5zaXplLngsXG4gICAgICB0aGlzLnNpemUueVxuICAgICk7XG5cbiAgICBjb250ZXh0LnJlc3RvcmUoKTtcbiAgfVxufVxuIiwiaW1wb3J0IERlYnVnIGZyb20gJ0BiYXNlbWVudHVuaXZlcnNlL2RlYnVnJztcbmltcG9ydCBJbnB1dE1hbmFnZXIgZnJvbSAnQGJhc2VtZW50dW5pdmVyc2UvaW5wdXQtbWFuYWdlcic7XG5pbXBvcnQgeyBwYXJzZUNvbG9yIH0gZnJvbSAnQGJhc2VtZW50dW5pdmVyc2UvcGFyc2Vjb2xvcic7XG5pbXBvcnQgeyBhdCwgY2xhbXAsIGV4Y2x1ZGUsIHJlbWFwIH0gZnJvbSAnQGJhc2VtZW50dW5pdmVyc2UvdXRpbHMnO1xuaW1wb3J0IHsgdmVjIH0gZnJvbSAnQGJhc2VtZW50dW5pdmVyc2UvdmVjJztcbmltcG9ydCB7IHY0IGFzIHV1aWQgfSBmcm9tICd1dWlkJztcbmltcG9ydCB7IENpcmNsZVNoYWRvd0Nhc3RlciB9IGZyb20gJy4vQ2lyY2xlU2hhZG93Q2FzdGVyJztcbmltcG9ydCBHYW1lIGZyb20gJy4vR2FtZSc7XG5pbXBvcnQgeyBHcm91bmRTaGFkb3dSZWNlaXZlciB9IGZyb20gJy4vR3JvdW5kU2hhZG93UmVjZWl2ZXInO1xuaW1wb3J0IHsgTGlnaHRpbmdTeXN0ZW0gfSBmcm9tICcuL0xpZ2h0aW5nU3lzdGVtJztcbmltcG9ydCB7IFJlZ2lvblNoYWRvd0Nhc3RlciB9IGZyb20gJy4vUmVnaW9uU2hhZG93Q2FzdGVyJztcbmltcG9ydCBTaGFkb3dDYXN0ZXIgZnJvbSAnLi9TaGFkb3dDYXN0ZXInO1xuaW1wb3J0IHsgU3ByaXRlU2hhZG93Q2FzdGVyIH0gZnJvbSAnLi9TcHJpdGVTaGFkb3dDYXN0ZXInO1xuaW1wb3J0IHtcbiAgQ29sb3VyLFxuICBJbnRlcnZhbDJkLFxuICBMaW5lLFxuICBQb2x5Z29uVmVydGljZXMsXG4gIFJlY3RhbmdsZSxcbiAgU2VjdG9yMmQsXG59IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHtcbiAgY29sb3VyVG9TdHJpbmcsXG4gIGxpbmVZSW50ZXJjZXB0LFxuICBvdmVybGFwMWQsXG4gIHBvbHlnb24sXG4gIHJlY3RhbmdsZXNJbnRlcnNlY3QsXG4gIHJlY3RhbmdsZVRvSW50ZXJ2YWwsXG4gIHJlY3RhbmdsZVZlcnRpY2VzLFxuICBzZWN0b3IyZCxcbn0gZnJvbSAnLi91dGlscyc7XG5pbXBvcnQgeyBXYWxsU2hhZG93UmVjZWl2ZXIgfSBmcm9tICcuL1dhbGxTaGFkb3dSZWNlaXZlcic7XG5cbmV4cG9ydCBjbGFzcyBMaWdodCB7XG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IERFRkFVTFRfUkFESVVTID0gMTAwO1xuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBERUZBVUxUX0NPTE9VUiA9ICd3aGl0ZSc7XG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IERFRkFVTFRfSU5URU5TSVRZID0gMC4yO1xuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBIT1ZFUl9SQURJVVMgPSAyMDtcbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgREVCVUdfQ09MT1VSID0gJyNmNTAnO1xuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBERUJVR19IT1ZFUl9DT0xPVVIgPSAnI2Y5MCc7XG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IE1JTl9SQURJVVMgPSAxMDtcbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgTUFYX1JBRElVUyA9IDQwMDtcbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgU0hBRE9XX0JVRkZFUiA9IDIwO1xuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBXQUxMX0xJR0hUX0NVVE9GRl9ESVNUQU5DRSA9IDIwO1xuXG4gIHB1YmxpYyByZWFkb25seSB0eXBlID0gJ0xpZ2h0JztcblxuICBwdWJsaWMgaWQ6IHN0cmluZyA9ICcnO1xuICBwdWJsaWMgZm9sZGVyOiBkYXQuR1VJIHwgbnVsbCA9IG51bGw7XG5cbiAgcHVibGljIHBvc2l0aW9uOiB2ZWMgPSB2ZWMoKTtcbiAgcHJpdmF0ZSBfcmFkaXVzOiBudW1iZXIgPSBMaWdodC5ERUZBVUxUX1JBRElVUztcbiAgcHJpdmF0ZSBfY29sb3VyOiBzdHJpbmcgPSBMaWdodC5ERUZBVUxUX0NPTE9VUjtcbiAgcHVibGljIGNvbG91ck9iamVjdDogQ29sb3VyO1xuICBwcml2YXRlIF9pbnRlbnNpdHk6IG51bWJlciA9IExpZ2h0LkRFRkFVTFRfSU5URU5TSVRZO1xuXG4gIHB1YmxpYyBob3ZlcmVkID0gZmFsc2U7XG4gIHB1YmxpYyBzZWxlY3RlZCA9IGZhbHNlO1xuICBwcml2YXRlIGRyYWdnaW5nID0gZmFsc2U7XG4gIHByaXZhdGUgZHJhZ09mZnNldDogdmVjIHwgbnVsbCA9IG51bGw7XG5cbiAgcHVibGljIGxpZ2h0Q2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudDtcbiAgcHJpdmF0ZSBsaWdodENvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcblxuICBwdWJsaWMgZ3JvdW5kTGlnaHRDYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xuICBwcml2YXRlIGdyb3VuZExpZ2h0Q29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xuXG4gIHB1YmxpYyB3YWxsTGlnaHRDYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xuICBwcml2YXRlIHdhbGxMaWdodENvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcblxuICBwcml2YXRlIGRpcnR5ID0gdHJ1ZTtcblxuICBwdWJsaWMgY29uc3RydWN0b3IoZGF0YTogUGFydGlhbDxMaWdodD4gPSB7fSkge1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywgZXhjbHVkZShkYXRhLCAncmFkaXVzJywgJ2NvbG91cicsICdpbnRlbnNpdHknKSwge1xuICAgICAgaWQ6IGRhdGEuaWQgPz8gdXVpZCgpLnNwbGl0KCctJylbMF0sXG4gICAgICBfcmFkaXVzOiBkYXRhLnJhZGl1cyA/PyBMaWdodC5ERUZBVUxUX1JBRElVUyxcbiAgICAgIF9jb2xvdXI6IGRhdGEuY29sb3VyID8/IExpZ2h0LkRFRkFVTFRfQ09MT1VSLFxuICAgICAgX2ludGVuc2l0eTogZGF0YS5pbnRlbnNpdHkgPz8gTGlnaHQuREVGQVVMVF9JTlRFTlNJVFksXG4gICAgfSk7XG5cbiAgICB0aGlzLmZvbGRlciA9IEdhbWUuZ3VpLmFkZEZvbGRlcihgTGlnaHQgJHt0aGlzLmlkfWApO1xuICAgIHRoaXMuZm9sZGVyLmFkZCh0aGlzLnBvc2l0aW9uLCAneCcpO1xuICAgIHRoaXMuZm9sZGVyLmFkZCh0aGlzLnBvc2l0aW9uLCAneScpO1xuICAgIHRoaXMuZm9sZGVyLmFkZCh0aGlzLCAncmFkaXVzJywgTGlnaHQuTUlOX1JBRElVUywgTGlnaHQuTUFYX1JBRElVUyk7XG4gICAgdGhpcy5mb2xkZXIuYWRkKHRoaXMsICdjb2xvdXInKTtcbiAgICB0aGlzLmZvbGRlci5hZGQodGhpcywgJ2ludGVuc2l0eScsIDAsIDEpO1xuXG4gICAgdGhpcy5jb2xvdXJPYmplY3QgPSBwYXJzZUNvbG9yKHRoaXMuX2NvbG91cik7XG5cbiAgICB0aGlzLmxpZ2h0Q2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgdGhpcy5saWdodENhbnZhcy53aWR0aCA9IHRoaXMubGlnaHRDYW52YXMuaGVpZ2h0ID0gdGhpcy5fcmFkaXVzICogMjtcbiAgICB0aGlzLmxpZ2h0Q29udGV4dCA9IHRoaXMubGlnaHRDYW52YXMuZ2V0Q29udGV4dCgnMmQnKSE7XG5cbiAgICB0aGlzLmdyb3VuZExpZ2h0Q2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgdGhpcy5ncm91bmRMaWdodENhbnZhcy53aWR0aCA9IHRoaXMuZ3JvdW5kTGlnaHRDYW52YXMuaGVpZ2h0ID1cbiAgICAgIHRoaXMuX3JhZGl1cyAqIDI7XG4gICAgdGhpcy5ncm91bmRMaWdodENvbnRleHQgPSB0aGlzLmdyb3VuZExpZ2h0Q2FudmFzLmdldENvbnRleHQoJzJkJykhO1xuXG4gICAgdGhpcy53YWxsTGlnaHRDYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICB0aGlzLndhbGxMaWdodENhbnZhcy53aWR0aCA9IHRoaXMud2FsbExpZ2h0Q2FudmFzLmhlaWdodCA9IHRoaXMuX3JhZGl1cyAqIDI7XG4gICAgdGhpcy53YWxsTGlnaHRDb250ZXh0ID0gdGhpcy53YWxsTGlnaHRDYW52YXMuZ2V0Q29udGV4dCgnMmQnKSE7XG4gIH1cblxuICBwdWJsaWMgZ2V0IHJhZGl1cygpIHtcbiAgICByZXR1cm4gdGhpcy5fcmFkaXVzO1xuICB9XG5cbiAgcHVibGljIHNldCByYWRpdXModmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX3JhZGl1cyA9IHZhbHVlO1xuICAgIHRoaXMuZGlydHkgPSB0cnVlO1xuICB9XG5cbiAgcHVibGljIGdldCBjb2xvdXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbG91cjtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgY29sb3VyKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9jb2xvdXIgPSB2YWx1ZTtcbiAgICB0aGlzLmNvbG91ck9iamVjdCA9IHBhcnNlQ29sb3IodmFsdWUpO1xuICAgIHRoaXMuZGlydHkgPSB0cnVlO1xuICB9XG5cbiAgcHVibGljIGdldCBpbnRlbnNpdHkoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ludGVuc2l0eTtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaW50ZW5zaXR5KHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9pbnRlbnNpdHkgPSB2YWx1ZTtcbiAgICB0aGlzLmRpcnR5ID0gdHJ1ZTtcbiAgfVxuXG4gIHB1YmxpYyBzZXJpYWxpc2UoKTogYW55IHtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogdGhpcy50eXBlLFxuICAgICAgaWQ6IHRoaXMuaWQsXG4gICAgICBwb3NpdGlvbjogdGhpcy5wb3NpdGlvbixcbiAgICAgIHJhZGl1czogdGhpcy5fcmFkaXVzLFxuICAgICAgY29sb3VyOiB0aGlzLl9jb2xvdXIsXG4gICAgICBpbnRlbnNpdHk6IHRoaXMuX2ludGVuc2l0eSxcbiAgICB9O1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBkZXNlcmlhbGlzZShkYXRhOiBhbnkpOiBMaWdodCB7XG4gICAgcmV0dXJuIG5ldyBMaWdodChkYXRhKTtcbiAgfVxuXG4gIHB1YmxpYyBkZXN0cm95KCkge1xuICAgIGlmICh0aGlzLmZvbGRlcikge1xuICAgICAgR2FtZS5ndWkucmVtb3ZlRm9sZGVyKHRoaXMuZm9sZGVyKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgdXBkYXRlKGR0OiBudW1iZXIpIHtcbiAgICB0aGlzLmhvdmVyZWQgPVxuICAgICAgdmVjLmxlbih2ZWMuc3ViKElucHV0TWFuYWdlci5tb3VzZVBvc2l0aW9uLCB0aGlzLnBvc2l0aW9uKSkgPFxuICAgICAgTGlnaHQuSE9WRVJfUkFESVVTO1xuXG4gICAgaWYgKElucHV0TWFuYWdlci5tb3VzZURvd24oKSAmJiB0aGlzLnNlbGVjdGVkICYmICF0aGlzLmRyYWdnaW5nKSB7XG4gICAgICB0aGlzLmRyYWdnaW5nID0gdHJ1ZTtcbiAgICAgIHRoaXMuZHJhZ09mZnNldCA9IHZlYy5zdWIoSW5wdXRNYW5hZ2VyLm1vdXNlUG9zaXRpb24sIHRoaXMucG9zaXRpb24pO1xuICAgIH1cblxuICAgIGlmICghSW5wdXRNYW5hZ2VyLm1vdXNlRG93bigpKSB7XG4gICAgICB0aGlzLmRyYWdnaW5nID0gZmFsc2U7XG4gICAgICB0aGlzLmRyYWdPZmZzZXQgPSBudWxsO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnNlbGVjdGVkICYmIHRoaXMuZHJhZ2dpbmcgJiYgdGhpcy5kcmFnT2Zmc2V0KSB7XG4gICAgICBpZiAoSW5wdXRNYW5hZ2VyLmtleURvd24oJ0NvbnRyb2xMZWZ0JykpIHtcbiAgICAgICAgdGhpcy5yYWRpdXMgPSBjbGFtcChcbiAgICAgICAgICB2ZWMubGVuKHZlYy5zdWIoSW5wdXRNYW5hZ2VyLm1vdXNlUG9zaXRpb24sIHRoaXMucG9zaXRpb24pKSxcbiAgICAgICAgICBMaWdodC5NSU5fUkFESVVTLFxuICAgICAgICAgIExpZ2h0Lk1BWF9SQURJVVNcbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucG9zaXRpb24gPSB2ZWMuc3ViKElucHV0TWFuYWdlci5tb3VzZVBvc2l0aW9uLCB0aGlzLmRyYWdPZmZzZXQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIERlYnVnLmJvcmRlcihgTGlnaHQgJHt0aGlzLmlkfSBib3JkZXJgLCAnJywgdGhpcy5wb3NpdGlvbiwge1xuICAgICAgbGV2ZWw6IDEsXG4gICAgICBzaG93TGFiZWw6IGZhbHNlLFxuICAgICAgc2hvd1ZhbHVlOiBmYWxzZSxcbiAgICAgIGJvcmRlclNoYXBlOiAnY2lyY2xlJyxcbiAgICAgIHJhZGl1czogdGhpcy5yYWRpdXMsXG4gICAgICBib3JkZXJDb2xvdXI6XG4gICAgICAgIHRoaXMuaG92ZXJlZCB8fCB0aGlzLmRyYWdnaW5nXG4gICAgICAgICAgPyBMaWdodC5ERUJVR19IT1ZFUl9DT0xPVVJcbiAgICAgICAgICA6IExpZ2h0LkRFQlVHX0NPTE9VUixcbiAgICAgIGJvcmRlclN0eWxlOiB0aGlzLnNlbGVjdGVkID8gJ3NvbGlkJyA6ICdkYXNoZWQnLFxuICAgIH0pO1xuICAgIERlYnVnLm1hcmtlcihgTGlnaHQgJHt0aGlzLmlkfWAsIHRoaXMuaWQsIHRoaXMucG9zaXRpb24sIHtcbiAgICAgIGxldmVsOiAxLFxuICAgICAgc2hvd0xhYmVsOiBHYW1lLkRFQlVHX01PREVTW0dhbWUuZGVidWdNb2RlXS5sYWJlbHMsXG4gICAgICBzaG93VmFsdWU6IGZhbHNlLFxuICAgICAgbWFya2VyQ29sb3VyOlxuICAgICAgICB0aGlzLmhvdmVyZWQgfHwgdGhpcy5kcmFnZ2luZ1xuICAgICAgICAgID8gTGlnaHQuREVCVUdfSE9WRVJfQ09MT1VSXG4gICAgICAgICAgOiBMaWdodC5ERUJVR19DT0xPVVIsXG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgcHJlcGFyZShcbiAgICBncm91bmRTaGFkb3dSZWNlaXZlcnM6IEdyb3VuZFNoYWRvd1JlY2VpdmVyW10sXG4gICAgd2FsbFNoYWRvd1JlY2VpdmVyczogV2FsbFNoYWRvd1JlY2VpdmVyW10sXG4gICAgcmVnaW9uU2hhZG93Q2FzdGVyczogUmVnaW9uU2hhZG93Q2FzdGVyW10sXG4gICAgc3ByaXRlU2hhZG93Q2FzdGVyczogU3ByaXRlU2hhZG93Q2FzdGVyW10sXG4gICAgY2lyY2xlU2hhZG93Q2FzdGVyczogQ2lyY2xlU2hhZG93Q2FzdGVyW11cbiAgKSB7XG4gICAgLy8gSWYgdGhlIGxpZ2h0IHNldHRpbmdzIGhhdmUgY2hhbmdlZCwgd2UgbmVlZCB0byByZWRyYXcgdGhlIGJhc2UgbGlnaHRtYXBcbiAgICBpZiAodGhpcy5kaXJ0eSkge1xuICAgICAgdGhpcy5saWdodENhbnZhcy53aWR0aCA9IHRoaXMubGlnaHRDYW52YXMuaGVpZ2h0ID0gdGhpcy5fcmFkaXVzICogMjtcblxuICAgICAgdGhpcy5saWdodENvbnRleHQuc2F2ZSgpO1xuICAgICAgdGhpcy5saWdodENvbnRleHQuZmlsbFN0eWxlID0gJ2JsYWNrJztcbiAgICAgIHRoaXMubGlnaHRDb250ZXh0LmZpbGxSZWN0KFxuICAgICAgICAwLFxuICAgICAgICAwLFxuICAgICAgICB0aGlzLmxpZ2h0Q2FudmFzLndpZHRoLFxuICAgICAgICB0aGlzLmxpZ2h0Q2FudmFzLmhlaWdodFxuICAgICAgKTtcblxuICAgICAgY29uc3QgZ3JhZGllbnQgPSB0aGlzLmxpZ2h0Q29udGV4dC5jcmVhdGVSYWRpYWxHcmFkaWVudChcbiAgICAgICAgdGhpcy5fcmFkaXVzLFxuICAgICAgICB0aGlzLl9yYWRpdXMsXG4gICAgICAgIHRoaXMuX3JhZGl1cyAqIHRoaXMuX2ludGVuc2l0eSxcbiAgICAgICAgdGhpcy5fcmFkaXVzLFxuICAgICAgICB0aGlzLl9yYWRpdXMsXG4gICAgICAgIHRoaXMuX3JhZGl1c1xuICAgICAgKTtcbiAgICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcCgwLCBjb2xvdXJUb1N0cmluZyh0aGlzLmNvbG91ck9iamVjdCkpO1xuICAgICAgZ3JhZGllbnQuYWRkQ29sb3JTdG9wKDEsICdibGFjaycpO1xuXG4gICAgICB0aGlzLmxpZ2h0Q29udGV4dC5maWxsU3R5bGUgPSBncmFkaWVudDtcbiAgICAgIHRoaXMubGlnaHRDb250ZXh0LmJlZ2luUGF0aCgpO1xuICAgICAgdGhpcy5saWdodENvbnRleHQuYXJjKFxuICAgICAgICB0aGlzLl9yYWRpdXMsXG4gICAgICAgIHRoaXMuX3JhZGl1cyxcbiAgICAgICAgdGhpcy5fcmFkaXVzLFxuICAgICAgICAwLFxuICAgICAgICBNYXRoLlBJICogMlxuICAgICAgKTtcbiAgICAgIHRoaXMubGlnaHRDb250ZXh0LmZpbGwoKTtcblxuICAgICAgdGhpcy5saWdodENvbnRleHQucmVzdG9yZSgpO1xuICAgIH1cblxuICAgIC8vIFJlbmRlciBsaWdodCBvbnRvIGdyb3VuZCBsaWdodCBjYW52YXNcbiAgICB0aGlzLmdyb3VuZExpZ2h0Q2FudmFzLndpZHRoID0gdGhpcy5ncm91bmRMaWdodENhbnZhcy5oZWlnaHQgPVxuICAgICAgdGhpcy5fcmFkaXVzICogMjtcbiAgICB0aGlzLmdyb3VuZExpZ2h0Q29udGV4dC5zYXZlKCk7XG4gICAgdGhpcy5ncm91bmRMaWdodENvbnRleHQuZHJhd0ltYWdlKHRoaXMubGlnaHRDYW52YXMsIDAsIDApO1xuXG4gICAgLy8gU3VidHJhY3Qgc2hhZG93cyBmcm9tIGdyb3VuZCBsaWdodG1hcFxuICAgIHRoaXMuZ3JvdW5kTGlnaHRDb250ZXh0LmZpbGxTdHlsZSA9ICdibGFjayc7XG4gICAgdGhpcy5ncm91bmRMaWdodENvbnRleHQudHJhbnNsYXRlKFxuICAgICAgLXRoaXMucG9zaXRpb24ueCArIHRoaXMuX3JhZGl1cyxcbiAgICAgIC10aGlzLnBvc2l0aW9uLnkgKyB0aGlzLl9yYWRpdXNcbiAgICApO1xuXG4gICAgLy8gQm91bmRpbmcgYm94IGZvciB0aGlzIGxpZ2h0XG4gICAgY29uc3QgbGlnaHRSZWN0YW5nbGUgPSB7XG4gICAgICBwb3NpdGlvbjogdmVjLnN1Yih0aGlzLnBvc2l0aW9uLCB2ZWModGhpcy5fcmFkaXVzKSksXG4gICAgICBzaXplOiB2ZWModGhpcy5fcmFkaXVzICogMiksXG4gICAgfTtcblxuICAgIC8vIFNoYWRvdyBtZXRhZGF0YSBmb3IgZWFjaCBzaGFkb3dcbiAgICBjb25zdCBzaGFkb3dzOiB7XG4gICAgICAvLyBUaGUgZW50aXR5IHRoYXQgaXMgY2FzdGluZyB0aGlzIHNoYWRvd1xuICAgICAgY2FzdGVyOiBTaGFkb3dDYXN0ZXI7XG5cbiAgICAgIC8vIFRoZSBsZWZ0bW9zdCBlZGdlIG9mIHRoZSBzaGFkb3cgKHdoZW4gcG9pbnRpbmcgdXB3YXJkcylcbiAgICAgIGxlZnRFZGdlOiBMaW5lIHwgbnVsbDtcblxuICAgICAgLy8gVGhlIHJpZ2h0bW9zdCBlZGdlIG9mIHRoZSBzaGFkb3cgKHdoZW4gcG9pbnRpbmcgdXB3YXJkcylcbiAgICAgIHJpZ2h0RWRnZTogTGluZSB8IG51bGw7XG4gICAgfVtdID0gW107XG4gICAgZm9yIChjb25zdCBjYXN0ZXIgb2YgcmVnaW9uU2hhZG93Q2FzdGVycykge1xuICAgICAgY29uc3QgY2FzdGVyUmVjdGFuZ2xlID0ge1xuICAgICAgICBwb3NpdGlvbjogY2FzdGVyLnBvc2l0aW9uLFxuICAgICAgICBzaXplOiBjYXN0ZXIuc2l6ZSxcbiAgICAgIH07XG5cbiAgICAgIC8vIENoZWNrIGlmIHRoaXMgd2FsbCBpcyBpbiByYW5nZSBvZiB0aGUgbGlnaHRcbiAgICAgIGlmIChyZWN0YW5nbGVzSW50ZXJzZWN0KGxpZ2h0UmVjdGFuZ2xlLCBjYXN0ZXJSZWN0YW5nbGUpKSB7XG4gICAgICAgIGNvbnN0IHNoYWRvdyA9IHtcbiAgICAgICAgICBjYXN0ZXIsXG4gICAgICAgICAgLi4udGhpcy5wcmVwYXJlUmVnaW9uU2hhZG93KGNhc3RlclJlY3RhbmdsZSksXG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gU2F2ZSBzaGFkb3cgbWV0YWRhdGEgZm9yIHVzZSBsYXRlciB3aGVuIHJlbmRlcmluZyB3YWxsIHNoYWRvd3NcbiAgICAgICAgc2hhZG93cy5wdXNoKGV4Y2x1ZGUoc2hhZG93LCAndmVydGljZXMnKSk7XG5cbiAgICAgICAgLy8gUmVuZGVyIHRoZSBncm91bmQgc2hhZG93IHBvbHlnb24gb250byB0aGUgbGlnaHRtYXBcbiAgICAgICAgcG9seWdvbih0aGlzLmdyb3VuZExpZ2h0Q29udGV4dCwgLi4uc2hhZG93LnZlcnRpY2VzKTtcbiAgICAgICAgdGhpcy5ncm91bmRMaWdodENvbnRleHQuZmlsbCgpO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmdyb3VuZExpZ2h0Q29udGV4dC5yZXN0b3JlKCk7XG5cbiAgICAvLyBSZW5kZXIgbGlnaHQgb250byB3YWxsIGxpZ2h0IGNhbnZhc1xuICAgIHRoaXMud2FsbExpZ2h0Q2FudmFzLndpZHRoID0gdGhpcy53YWxsTGlnaHRDYW52YXMuaGVpZ2h0ID0gdGhpcy5fcmFkaXVzICogMjtcbiAgICB0aGlzLndhbGxMaWdodENvbnRleHQuc2F2ZSgpO1xuICAgIHRoaXMud2FsbExpZ2h0Q29udGV4dC5kcmF3SW1hZ2UodGhpcy5saWdodENhbnZhcywgMCwgMCk7XG5cbiAgICAvLyBTdWJ0cmFjdCBzaGFkb3dzIGZyb20gd2FsbCBsaWdodG1hcFxuICAgIHRoaXMud2FsbExpZ2h0Q29udGV4dC5maWxsU3R5bGUgPSAnYmxhY2snO1xuICAgIHRoaXMud2FsbExpZ2h0Q29udGV4dC50cmFuc2xhdGUoXG4gICAgICAtdGhpcy5wb3NpdGlvbi54ICsgdGhpcy5fcmFkaXVzLFxuICAgICAgLXRoaXMucG9zaXRpb24ueSArIHRoaXMuX3JhZGl1cyAtIExpZ2h0aW5nU3lzdGVtLldBTExfTElHSFRJTkdfWV9PRkZTRVRcbiAgICApO1xuXG4gICAgZm9yIChjb25zdCB3YWxsIG9mIHdhbGxTaGFkb3dSZWNlaXZlcnMpIHtcbiAgICAgIGNvbnN0IHdhbGxSZWN0YW5nbGUgPSB7XG4gICAgICAgIHBvc2l0aW9uOiB3YWxsLnBvc2l0aW9uLFxuICAgICAgICBzaXplOiB3YWxsLnNpemUsXG4gICAgICB9O1xuICAgICAgY29uc3Qgd2FsbEludGVydmFsID0gcmVjdGFuZ2xlVG9JbnRlcnZhbCh3YWxsUmVjdGFuZ2xlKTtcblxuICAgICAgLy8gQ2hlY2sgaWYgdGhpcyB3YWxsIHNoYWRvdyByZWNlaXZlciBpcyBpbiByYW5nZSBvZiB0aGUgbGlnaHRcbiAgICAgIGlmIChyZWN0YW5nbGVzSW50ZXJzZWN0KGxpZ2h0UmVjdGFuZ2xlLCB3YWxsUmVjdGFuZ2xlKSkge1xuICAgICAgICAvLyBJZiB0aGUgd2FsbCBkb2Vzbid0IHJlY2VpdmUgbGlnaHQsIGl0IGlzIGluIGZ1bGwgc2hhZG93XG4gICAgICAgIGlmICghd2FsbC5yZWNlaXZlTGlnaHQpIHtcbiAgICAgICAgICB0aGlzLndhbGxMaWdodENvbnRleHQuZmlsbFJlY3QoXG4gICAgICAgICAgICB3YWxsUmVjdGFuZ2xlLnBvc2l0aW9uLngsXG4gICAgICAgICAgICB3YWxsUmVjdGFuZ2xlLnBvc2l0aW9uLnksXG4gICAgICAgICAgICB3YWxsUmVjdGFuZ2xlLnNpemUueCxcbiAgICAgICAgICAgIHdhbGxSZWN0YW5nbGUuc2l6ZS55XG4gICAgICAgICAgKTtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFRoZSB3YWxsIGlzIG9ubHkgbGl0IGJ5IHRoaXMgbGlnaHQgaWYgaXQncyBhYm92ZSB0aGUgbGlnaHRcbiAgICAgICAgaWYgKHRoaXMucG9zaXRpb24ueSA8IHdhbGxJbnRlcnZhbC5ib3R0b20pIHtcbiAgICAgICAgICB0aGlzLndhbGxMaWdodENvbnRleHQuc2F2ZSgpO1xuICAgICAgICAgIHRoaXMud2FsbExpZ2h0Q29udGV4dC5nbG9iYWxBbHBoYSA9IGNsYW1wKFxuICAgICAgICAgICAgcmVtYXAoXG4gICAgICAgICAgICAgIHdhbGxJbnRlcnZhbC5ib3R0b20gLSB0aGlzLnBvc2l0aW9uLnksXG4gICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgIExpZ2h0LldBTExfTElHSFRfQ1VUT0ZGX0RJU1RBTkNFLFxuICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAxXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApO1xuICAgICAgICAgIHRoaXMud2FsbExpZ2h0Q29udGV4dC5maWxsUmVjdChcbiAgICAgICAgICAgIHdhbGxSZWN0YW5nbGUucG9zaXRpb24ueCxcbiAgICAgICAgICAgIHdhbGxSZWN0YW5nbGUucG9zaXRpb24ueSxcbiAgICAgICAgICAgIHdhbGxSZWN0YW5nbGUuc2l6ZS54LFxuICAgICAgICAgICAgd2FsbFJlY3RhbmdsZS5zaXplLnlcbiAgICAgICAgICApO1xuICAgICAgICAgIHRoaXMud2FsbExpZ2h0Q29udGV4dC5yZXN0b3JlKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBDaGVjayBlYWNoIHNoYWRvdyB0byBzZWUgaWYgaXQgZnVsbHkgb3IgcGFydGlhbGx5IHNoYWRvd3MgdGhpcyB3YWxsXG4gICAgICAgIGZvciAoY29uc3Qgc2hhZG93IG9mIHNoYWRvd3MpIHtcbiAgICAgICAgICBjb25zdCBzaGFkb3dDYXN0ZXJSZWN0YW5nbGUgPSB7XG4gICAgICAgICAgICBwb3NpdGlvbjogc2hhZG93LmNhc3Rlci5wb3NpdGlvbixcbiAgICAgICAgICAgIHNpemU6IHNoYWRvdy5jYXN0ZXIuc2l6ZSxcbiAgICAgICAgICB9O1xuICAgICAgICAgIGNvbnN0IHNoYWRvd0Nhc3RlckludGVydmFsID0gcmVjdGFuZ2xlVG9JbnRlcnZhbChcbiAgICAgICAgICAgIHNoYWRvd0Nhc3RlclJlY3RhbmdsZVxuICAgICAgICAgICk7XG5cbiAgICAgICAgICAvLyBBIHNoYWRvdyBjYXN0ZXIgZG9lc24ndCBjYXN0IGEgc2hhZG93IG9udG8gYSByZWNlaXZlciB0aGF0XG4gICAgICAgICAgLy8gb3ZlcmxhcHMgaXRcbiAgICAgICAgICBpZiAocmVjdGFuZ2xlc0ludGVyc2VjdCh3YWxsUmVjdGFuZ2xlLCBzaGFkb3dDYXN0ZXJSZWN0YW5nbGUpKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBDaGVjayBpZiB0aGlzIHNoYWRvdyBoYXMgbm8gZWRnZXMgKHRoaXMgbWVhbnMgdGhlIGxpZ2h0IGlzIGluc2lkZVxuICAgICAgICAgIC8vIHRoZSBzaGFkb3cgY2FzdGVyIHJlZ2lvbiwgYW5kIGFzIHN1Y2ggaXQgZG9lc24ndCBjYXN0IGEgc2hhZG93KVxuICAgICAgICAgIGlmIChzaGFkb3cubGVmdEVkZ2UgPT09IG51bGwgJiYgc2hhZG93LnJpZ2h0RWRnZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gSWYgYm90aCBzaGFkb3cgZWRnZXMgYXJlIG5vdCBwb2ludGluZyB1cCB0aGVuIHRoaXMgc2hhZG93IGRvZXNuJ3RcbiAgICAgICAgICAvLyBjYXN0IG9uIHRoaXMgd2FsbFxuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIHNoYWRvdy5sZWZ0RWRnZSAmJlxuICAgICAgICAgICAgc2hhZG93LmxlZnRFZGdlLnN0YXJ0LnkgPD0gc2hhZG93LmxlZnRFZGdlLmVuZC55ICYmXG4gICAgICAgICAgICBzaGFkb3cucmlnaHRFZGdlICYmXG4gICAgICAgICAgICBzaGFkb3cucmlnaHRFZGdlLnN0YXJ0LnkgPD0gc2hhZG93LnJpZ2h0RWRnZS5lbmQueVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gQ2hlY2sgaWYgdGhpcyB3YWxsJ3MgbG93ZXIgZWRnZSBpcyBiZWxvdyB0aGUgc2hhZG93IGNhc3RlcidzXG4gICAgICAgICAgLy8gbG93ZXIgZWRnZS4gSWYgc28sIHRoZSBjYXN0ZXIgZG9lc24ndCBjYXN0IGEgc2hhZG93IG9uIHRoaXMgd2FsbFxuICAgICAgICAgIGlmICh3YWxsSW50ZXJ2YWwuYm90dG9tID4gc2hhZG93Q2FzdGVySW50ZXJ2YWwuYm90dG9tKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBFZGdlIGNhc2U6IGlmIHRoZSBjYXN0ZXIgaXMgcGFydGlhbGx5IGFib3ZlIGFuZCBiZWxvdyB0aGUgd2FsbCdzXG4gICAgICAgICAgLy8gbG93ZXIgZWRnZSBhbmQgdGhlIHNoYWRvdyBpcyBwb2ludGluZyBhd2F5IGZyb20gdGhlIHdhbGwsIHdlIGRvbid0XG4gICAgICAgICAgLy8gY2FzdCBhIHNoYWRvd1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIHNoYWRvd0Nhc3RlckludGVydmFsLnRvcCA8PSB3YWxsSW50ZXJ2YWwuYm90dG9tICYmXG4gICAgICAgICAgICBzaGFkb3dDYXN0ZXJJbnRlcnZhbC5ib3R0b20gPj0gd2FsbEludGVydmFsLmJvdHRvbVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgLy8gU2hhZG93IGNhc3RlciBpcyB0byB0aGUgbGVmdCBvZiBzaGFkb3cgcmVjZWl2ZXJcbiAgICAgICAgICAgIGlmIChzaGFkb3dDYXN0ZXJJbnRlcnZhbC5yaWdodCA8PSB3YWxsSW50ZXJ2YWwubGVmdCkge1xuICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgKHNoYWRvdy5yaWdodEVkZ2UgPT09IG51bGwgfHxcbiAgICAgICAgICAgICAgICAgIHNoYWRvdy5yaWdodEVkZ2Uuc3RhcnQueCA+PSBzaGFkb3cucmlnaHRFZGdlLmVuZC54KSAmJlxuICAgICAgICAgICAgICAgIChzaGFkb3cubGVmdEVkZ2UgPT09IG51bGwgfHxcbiAgICAgICAgICAgICAgICAgIHNoYWRvdy5sZWZ0RWRnZS5zdGFydC54ID49IHNoYWRvdy5sZWZ0RWRnZS5lbmQueClcbiAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gU2hhZG93IGNhc3RlciBpcyB0byB0aGUgcmlnaHQgb2Ygc2hhZG93IHJlY2VpdmVyXG4gICAgICAgICAgICBpZiAoc2hhZG93Q2FzdGVySW50ZXJ2YWwubGVmdCA+PSB3YWxsSW50ZXJ2YWwucmlnaHQpIHtcbiAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIChzaGFkb3cucmlnaHRFZGdlID09PSBudWxsIHx8XG4gICAgICAgICAgICAgICAgICBzaGFkb3cucmlnaHRFZGdlLnN0YXJ0LnggPD0gc2hhZG93LnJpZ2h0RWRnZS5lbmQueCkgJiZcbiAgICAgICAgICAgICAgICAoc2hhZG93LmxlZnRFZGdlID09PSBudWxsIHx8XG4gICAgICAgICAgICAgICAgICBzaGFkb3cubGVmdEVkZ2Uuc3RhcnQueCA8PSBzaGFkb3cubGVmdEVkZ2UuZW5kLngpXG4gICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gQ2hlY2sgaWYgdGhpcyB3YWxsJ3MgbG93ZXIgZWRnZSBpcyBjb2xpbmVhciB3aXRoIHRoZSBzaGFkb3dcbiAgICAgICAgICAvLyBjYXN0ZXIncyBsb3dlciBlZGdlLiBJZiBzbywgd2UgYWxsb3cgbGlnaHQgdG8gcGFzcyAoaW4gbW9zdCBjYXNlcylcbiAgICAgICAgICAvLyBFZGdlIGNhc2U6IGlmIHRoZXJlJ3MgYW5vdGhlciBzaGFkb3cgY2FzdGVyIGRpcmVjdGx5IGJlbG93IHRoZVxuICAgICAgICAgIC8vIGN1cnJlbnQgb25lLCB0aGVuIGl0IG1pZ2h0IGNyZWF0ZSBhIHNoYWRvd1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIHdhbGxJbnRlcnZhbC5ib3R0b20gPT09IHNoYWRvd0Nhc3RlckludGVydmFsLmJvdHRvbSAmJlxuICAgICAgICAgICAgIXJlZ2lvblNoYWRvd0Nhc3RlcnMuc29tZShjID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgY2FzdGVySW50ZXJ2YWwgPSByZWN0YW5nbGVUb0ludGVydmFsKHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYy5wb3NpdGlvbixcbiAgICAgICAgICAgICAgICBzaXplOiBjLnNpemUsXG4gICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgY2FzdGVySW50ZXJ2YWwudG9wID09PSBzaGFkb3dDYXN0ZXJJbnRlcnZhbC5ib3R0b20gJiZcbiAgICAgICAgICAgICAgICBvdmVybGFwMWQoXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0OiBjYXN0ZXJJbnRlcnZhbC5sZWZ0LFxuICAgICAgICAgICAgICAgICAgICBlbmQ6IGNhc3RlckludGVydmFsLnJpZ2h0LFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhcnQ6IHNoYWRvd0Nhc3RlckludGVydmFsLmxlZnQsXG4gICAgICAgICAgICAgICAgICAgIGVuZDogc2hhZG93Q2FzdGVySW50ZXJ2YWwucmlnaHQsXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgKSAhPT0gbnVsbFxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGxldCBsZWZ0SW50ZXJjZXB0OiBudW1iZXIgfCBudWxsID0gbnVsbDtcbiAgICAgICAgICBpZiAoc2hhZG93LmxlZnRFZGdlKSB7XG4gICAgICAgICAgICBsZWZ0SW50ZXJjZXB0ID0gbGluZVlJbnRlcmNlcHQoXG4gICAgICAgICAgICAgIHNoYWRvdy5sZWZ0RWRnZSxcbiAgICAgICAgICAgICAgd2FsbEludGVydmFsLmJvdHRvbVxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgaWYgKHNoYWRvdy5sZWZ0RWRnZS5zdGFydC55IDwgc2hhZG93LmxlZnRFZGdlLmVuZC55KSB7XG4gICAgICAgICAgICAgIGxlZnRJbnRlcmNlcHQgPSB3YWxsSW50ZXJ2YWwubGVmdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBsZXQgcmlnaHRJbnRlcmNlcHQ6IG51bWJlciB8IG51bGwgPSBudWxsO1xuICAgICAgICAgIGlmIChzaGFkb3cucmlnaHRFZGdlKSB7XG4gICAgICAgICAgICByaWdodEludGVyY2VwdCA9IGxpbmVZSW50ZXJjZXB0KFxuICAgICAgICAgICAgICBzaGFkb3cucmlnaHRFZGdlLFxuICAgICAgICAgICAgICB3YWxsSW50ZXJ2YWwuYm90dG9tXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICBpZiAoc2hhZG93LnJpZ2h0RWRnZS5zdGFydC55IDwgc2hhZG93LnJpZ2h0RWRnZS5lbmQueSkge1xuICAgICAgICAgICAgICByaWdodEludGVyY2VwdCA9IHdhbGxJbnRlcnZhbC5yaWdodDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCBtaW4gPSBNYXRoLm1heCh3YWxsSW50ZXJ2YWwubGVmdCwgbGVmdEludGVyY2VwdCA/PyAtSW5maW5pdHkpO1xuICAgICAgICAgIGNvbnN0IG1heCA9IE1hdGgubWluKHdhbGxJbnRlcnZhbC5yaWdodCwgcmlnaHRJbnRlcmNlcHQgPz8gSW5maW5pdHkpO1xuXG4gICAgICAgICAgLy8gRG9uJ3QgcmVuZGVyIHRoZSBzaGFkb3cgaWYgaXQncyBnb3QgbmVnYXRpdmUgd2lkdGhcbiAgICAgICAgICBpZiAobWluID49IG1heCkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gRG9uJ3QgcmVuZGVyIHRoZSBzaGFkb3cgaWYgaXQncyBvdXRzaWRlIHRoZSB3YWxsIGJvdW5kYXJpZXNcbiAgICAgICAgICBpZiAobWluID4gd2FsbEludGVydmFsLnJpZ2h0IHx8IG1heCA8IHdhbGxJbnRlcnZhbC5sZWZ0KSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICBvdmVybGFwMWQoXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGFydDogbWluLFxuICAgICAgICAgICAgICAgIGVuZDogbWF4LFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhcnQ6IHdhbGxJbnRlcnZhbC5sZWZ0LFxuICAgICAgICAgICAgICAgIGVuZDogd2FsbEludGVydmFsLnJpZ2h0LFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICB0aGlzLndhbGxMaWdodENvbnRleHQuZmlsbFJlY3QoXG4gICAgICAgICAgICAgIG1pbixcbiAgICAgICAgICAgICAgd2FsbEludGVydmFsLnRvcCxcbiAgICAgICAgICAgICAgbWF4IC0gbWluLFxuICAgICAgICAgICAgICB3YWxsLnNpemUueVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy53YWxsTGlnaHRDb250ZXh0LnJlc3RvcmUoKTtcbiAgfVxuXG4gIHByaXZhdGUgbGluZUlzRmFjaW5nKGxpbmU6IExpbmUpOiBib29sZWFuIHtcbiAgICBjb25zdCBlZGdlID0gdmVjLm5vcih2ZWMuc3ViKGxpbmUuZW5kLCBsaW5lLnN0YXJ0KSk7XG4gICAgY29uc3QgZWRnZU5vcm1hbCA9IHZlYyhlZGdlLnksIC1lZGdlLngpO1xuICAgIGNvbnN0IGxpZ2h0Tm9ybWFsID0gdmVjLm5vcihcbiAgICAgIHZlYy5zdWIodmVjLm11bCh2ZWMuYWRkKGxpbmUuc3RhcnQsIGxpbmUuZW5kKSwgMC41KSwgdGhpcy5wb3NpdGlvbilcbiAgICApO1xuXG4gICAgcmV0dXJuIHZlYy5kb3QobGlnaHROb3JtYWwsIGVkZ2VOb3JtYWwpIDw9IDA7XG4gIH1cblxuICBwcml2YXRlIHByZXBhcmVSZWdpb25TaGFkb3coc2hhZG93Q2FzdGVyUmVjdGFuZ2xlOiBSZWN0YW5nbGUpOiB7XG4gICAgc2hhZG93Q2FzdGVySW50ZXJ2YWw6IEludGVydmFsMmQ7XG4gICAgbGVmdEVkZ2U6IExpbmUgfCBudWxsO1xuICAgIHJpZ2h0RWRnZTogTGluZSB8IG51bGw7XG4gICAgdmVydGljZXM6IFBvbHlnb25WZXJ0aWNlcztcbiAgfSB7XG4gICAgY29uc3QgbGlnaHRQb3NpdGlvbiA9IHZlYy5jcHkodGhpcy5wb3NpdGlvbik7XG4gICAgY29uc3QgbGlnaHRSYWRpdXMgPSB0aGlzLl9yYWRpdXM7XG4gICAgY29uc3Qgc2hhZG93Q2FzdGVySW50ZXJ2YWwgPSByZWN0YW5nbGVUb0ludGVydmFsKHNoYWRvd0Nhc3RlclJlY3RhbmdsZSk7XG4gICAgY29uc3Qgc2hhZG93Q2FzdGVyVmVydGljZXMgPSByZWN0YW5nbGVWZXJ0aWNlcyhzaGFkb3dDYXN0ZXJSZWN0YW5nbGUpO1xuICAgIGNvbnN0IHNoYWRvd0VkZ2VzOiBMaW5lW10gPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hhZG93Q2FzdGVyVmVydGljZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHByZXZpb3VzID0gYXQoc2hhZG93Q2FzdGVyVmVydGljZXMsIGkgLSAxKTtcbiAgICAgIGNvbnN0IGN1cnJlbnQgPSBzaGFkb3dDYXN0ZXJWZXJ0aWNlc1tpXTtcblxuICAgICAgaWYgKCF0aGlzLmxpbmVJc0ZhY2luZyh7IHN0YXJ0OiBwcmV2aW91cywgZW5kOiBjdXJyZW50IH0pKSB7XG4gICAgICAgIGNvbnN0IHZlcnRleDEgPSB2ZWMuc3ViKHByZXZpb3VzLCBsaWdodFBvc2l0aW9uKTtcbiAgICAgICAgY29uc3QgdmVydGV4MiA9IHZlYy5zdWIoY3VycmVudCwgbGlnaHRQb3NpdGlvbik7XG4gICAgICAgIHNoYWRvd0VkZ2VzLnB1c2goXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3RhcnQ6IHByZXZpb3VzLFxuICAgICAgICAgICAgZW5kOiB2ZWMuYWRkKFxuICAgICAgICAgICAgICBwcmV2aW91cyxcbiAgICAgICAgICAgICAgdmVjLm11bChcbiAgICAgICAgICAgICAgICB2ZWMubm9yKHZlcnRleDEpLFxuICAgICAgICAgICAgICAgIE1hdGgubWF4KFxuICAgICAgICAgICAgICAgICAgTGlnaHQuU0hBRE9XX0JVRkZFUixcbiAgICAgICAgICAgICAgICAgIGxpZ2h0UmFkaXVzICsgTGlnaHQuU0hBRE9XX0JVRkZFUiAtIHZlYy5sZW4odmVydGV4MSlcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICksXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzdGFydDogY3VycmVudCxcbiAgICAgICAgICAgIGVuZDogdmVjLmFkZChcbiAgICAgICAgICAgICAgY3VycmVudCxcbiAgICAgICAgICAgICAgdmVjLm11bChcbiAgICAgICAgICAgICAgICB2ZWMubm9yKHZlcnRleDIpLFxuICAgICAgICAgICAgICAgIE1hdGgubWF4KFxuICAgICAgICAgICAgICAgICAgTGlnaHQuU0hBRE9XX0JVRkZFUixcbiAgICAgICAgICAgICAgICAgIGxpZ2h0UmFkaXVzICsgTGlnaHQuU0hBRE9XX0JVRkZFUiAtIHZlYy5sZW4odmVydGV4MilcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICksXG4gICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxldCBsZWZ0RWRnZTogTGluZSB8IG51bGwgPSBudWxsO1xuICAgIGxldCByaWdodEVkZ2U6IExpbmUgfCBudWxsID0gbnVsbDtcbiAgICBjb25zdCBzaGFkb3dQb2x5Z29uOiBQb2x5Z29uVmVydGljZXMgPSBbXTtcbiAgICBzd2l0Y2ggKHNlY3RvcjJkKHRoaXMucG9zaXRpb24sIHNoYWRvd0Nhc3RlckludGVydmFsKSkge1xuICAgICAgY2FzZSBTZWN0b3IyZC5Ub3BMZWZ0OlxuICAgICAgICBpZiAoc2hhZG93RWRnZXMubGVuZ3RoICE9PSA0KSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBsZWZ0RWRnZSA9IHNoYWRvd0VkZ2VzWzBdO1xuICAgICAgICByaWdodEVkZ2UgPSBzaGFkb3dFZGdlc1szXTtcbiAgICAgICAgc2hhZG93UG9seWdvbi5wdXNoKFxuICAgICAgICAgIHNoYWRvd0VkZ2VzWzBdLnN0YXJ0LFxuICAgICAgICAgIHNoYWRvd0VkZ2VzWzBdLmVuZCxcbiAgICAgICAgICB2ZWMoc2hhZG93RWRnZXNbMF0uZW5kLngsIHNoYWRvd0VkZ2VzWzNdLmVuZC55KSxcbiAgICAgICAgICBzaGFkb3dFZGdlc1szXS5lbmQsXG4gICAgICAgICAgc2hhZG93RWRnZXNbM10uc3RhcnQsXG4gICAgICAgICAgc2hhZG93RWRnZXNbMl0uc3RhcnRcbiAgICAgICAgKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgU2VjdG9yMmQuVG9wOlxuICAgICAgICBpZiAoc2hhZG93RWRnZXMubGVuZ3RoICE9PSA2KSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBsZWZ0RWRnZSA9IHNoYWRvd0VkZ2VzWzJdO1xuICAgICAgICByaWdodEVkZ2UgPSBzaGFkb3dFZGdlc1sxXTtcbiAgICAgICAgc2hhZG93UG9seWdvbi5wdXNoKFxuICAgICAgICAgIHNoYWRvd0VkZ2VzWzJdLnN0YXJ0LFxuICAgICAgICAgIHNoYWRvd0VkZ2VzWzJdLmVuZCxcbiAgICAgICAgICAoY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSA9PiB7XG4gICAgICAgICAgICBjb250ZXh0LmFyYyhcbiAgICAgICAgICAgICAgbGlnaHRQb3NpdGlvbi54LFxuICAgICAgICAgICAgICBsaWdodFBvc2l0aW9uLnksXG4gICAgICAgICAgICAgIGxpZ2h0UmFkaXVzICsgTGlnaHQuU0hBRE9XX0JVRkZFUixcbiAgICAgICAgICAgICAgdmVjLnJhZCh2ZWMuc3ViKHNoYWRvd0VkZ2VzWzJdLmVuZCwgc2hhZG93RWRnZXNbMl0uc3RhcnQpKSxcbiAgICAgICAgICAgICAgdmVjLnJhZCh2ZWMuc3ViKHNoYWRvd0VkZ2VzWzFdLmVuZCwgc2hhZG93RWRnZXNbMV0uc3RhcnQpKSxcbiAgICAgICAgICAgICAgZmFsc2VcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBzaGFkb3dFZGdlc1sxXS5zdGFydCxcbiAgICAgICAgICBzaGFkb3dFZGdlc1s1XS5zdGFydCxcbiAgICAgICAgICBzaGFkb3dFZGdlc1s0XS5zdGFydFxuICAgICAgICApO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBTZWN0b3IyZC5Ub3BSaWdodDpcbiAgICAgICAgaWYgKHNoYWRvd0VkZ2VzLmxlbmd0aCAhPT0gNCkge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgbGVmdEVkZ2UgPSBzaGFkb3dFZGdlc1syXTtcbiAgICAgICAgcmlnaHRFZGdlID0gc2hhZG93RWRnZXNbMV07XG4gICAgICAgIHNoYWRvd1BvbHlnb24ucHVzaChcbiAgICAgICAgICBzaGFkb3dFZGdlc1syXS5zdGFydCxcbiAgICAgICAgICBzaGFkb3dFZGdlc1syXS5lbmQsXG4gICAgICAgICAgdmVjKHNoYWRvd0VkZ2VzWzFdLmVuZC54LCBzaGFkb3dFZGdlc1syXS5lbmQueSksXG4gICAgICAgICAgc2hhZG93RWRnZXNbMV0uZW5kLFxuICAgICAgICAgIHNoYWRvd0VkZ2VzWzFdLnN0YXJ0LFxuICAgICAgICAgIHNoYWRvd0VkZ2VzWzNdLnN0YXJ0XG4gICAgICAgICk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIFNlY3RvcjJkLkxlZnQ6XG4gICAgICAgIGlmIChzaGFkb3dFZGdlcy5sZW5ndGggIT09IDYpIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGxlZnRFZGdlID0gc2hhZG93RWRnZXNbMF07XG4gICAgICAgIHJpZ2h0RWRnZSA9IHNoYWRvd0VkZ2VzWzVdO1xuICAgICAgICBzaGFkb3dQb2x5Z29uLnB1c2goXG4gICAgICAgICAgc2hhZG93RWRnZXNbMF0uc3RhcnQsXG4gICAgICAgICAgc2hhZG93RWRnZXNbMF0uZW5kLFxuICAgICAgICAgIChjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpID0+IHtcbiAgICAgICAgICAgIGNvbnRleHQuYXJjKFxuICAgICAgICAgICAgICBsaWdodFBvc2l0aW9uLngsXG4gICAgICAgICAgICAgIGxpZ2h0UG9zaXRpb24ueSxcbiAgICAgICAgICAgICAgbGlnaHRSYWRpdXMgKyBMaWdodC5TSEFET1dfQlVGRkVSLFxuICAgICAgICAgICAgICB2ZWMucmFkKHZlYy5zdWIoc2hhZG93RWRnZXNbMF0uZW5kLCBzaGFkb3dFZGdlc1swXS5zdGFydCkpLFxuICAgICAgICAgICAgICB2ZWMucmFkKHZlYy5zdWIoc2hhZG93RWRnZXNbNV0uZW5kLCBzaGFkb3dFZGdlc1s1XS5zdGFydCkpLFxuICAgICAgICAgICAgICBmYWxzZVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIHNoYWRvd0VkZ2VzWzVdLnN0YXJ0LFxuICAgICAgICAgIHNoYWRvd0VkZ2VzWzRdLnN0YXJ0LFxuICAgICAgICAgIHNoYWRvd0VkZ2VzWzJdLnN0YXJ0XG4gICAgICAgICk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIFNlY3RvcjJkLkluc2lkZTpcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgU2VjdG9yMmQuUmlnaHQ6XG4gICAgICAgIGlmIChzaGFkb3dFZGdlcy5sZW5ndGggIT09IDYpIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGxlZnRFZGdlID0gc2hhZG93RWRnZXNbNF07XG4gICAgICAgIHJpZ2h0RWRnZSA9IHNoYWRvd0VkZ2VzWzNdO1xuICAgICAgICBzaGFkb3dQb2x5Z29uLnB1c2goXG4gICAgICAgICAgc2hhZG93RWRnZXNbNF0uc3RhcnQsXG4gICAgICAgICAgc2hhZG93RWRnZXNbNF0uZW5kLFxuICAgICAgICAgIChjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpID0+IHtcbiAgICAgICAgICAgIGNvbnRleHQuYXJjKFxuICAgICAgICAgICAgICBsaWdodFBvc2l0aW9uLngsXG4gICAgICAgICAgICAgIGxpZ2h0UG9zaXRpb24ueSxcbiAgICAgICAgICAgICAgbGlnaHRSYWRpdXMgKyBMaWdodC5TSEFET1dfQlVGRkVSLFxuICAgICAgICAgICAgICB2ZWMucmFkKHZlYy5zdWIoc2hhZG93RWRnZXNbNF0uZW5kLCBzaGFkb3dFZGdlc1s0XS5zdGFydCkpLFxuICAgICAgICAgICAgICB2ZWMucmFkKHZlYy5zdWIoc2hhZG93RWRnZXNbM10uZW5kLCBzaGFkb3dFZGdlc1szXS5zdGFydCkpLFxuICAgICAgICAgICAgICBmYWxzZVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIHNoYWRvd0VkZ2VzWzNdLnN0YXJ0LFxuICAgICAgICAgIHNoYWRvd0VkZ2VzWzJdLnN0YXJ0LFxuICAgICAgICAgIHNoYWRvd0VkZ2VzWzVdLnN0YXJ0XG4gICAgICAgICk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIFNlY3RvcjJkLkJvdHRvbUxlZnQ6XG4gICAgICAgIGlmIChzaGFkb3dFZGdlcy5sZW5ndGggIT09IDQpIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGxlZnRFZGdlID0gc2hhZG93RWRnZXNbMF07XG4gICAgICAgIHJpZ2h0RWRnZSA9IHNoYWRvd0VkZ2VzWzNdO1xuICAgICAgICBzaGFkb3dQb2x5Z29uLnB1c2goXG4gICAgICAgICAgc2hhZG93RWRnZXNbMF0uc3RhcnQsXG4gICAgICAgICAgc2hhZG93RWRnZXNbMF0uZW5kLFxuICAgICAgICAgIHZlYyhzaGFkb3dFZGdlc1szXS5lbmQueCwgc2hhZG93RWRnZXNbMF0uZW5kLnkpLFxuICAgICAgICAgIHNoYWRvd0VkZ2VzWzNdLmVuZCxcbiAgICAgICAgICBzaGFkb3dFZGdlc1szXS5zdGFydCxcbiAgICAgICAgICBzaGFkb3dFZGdlc1syXS5zdGFydFxuICAgICAgICApO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBTZWN0b3IyZC5Cb3R0b206XG4gICAgICAgIGlmIChzaGFkb3dFZGdlcy5sZW5ndGggIT09IDYpIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGxlZnRFZGdlID0gc2hhZG93RWRnZXNbMF07XG4gICAgICAgIHJpZ2h0RWRnZSA9IHNoYWRvd0VkZ2VzWzVdO1xuICAgICAgICBzaGFkb3dQb2x5Z29uLnB1c2goXG4gICAgICAgICAgc2hhZG93RWRnZXNbMF0uc3RhcnQsXG4gICAgICAgICAgc2hhZG93RWRnZXNbMF0uZW5kLFxuICAgICAgICAgIChjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpID0+IHtcbiAgICAgICAgICAgIGNvbnRleHQuYXJjKFxuICAgICAgICAgICAgICBsaWdodFBvc2l0aW9uLngsXG4gICAgICAgICAgICAgIGxpZ2h0UG9zaXRpb24ueSxcbiAgICAgICAgICAgICAgbGlnaHRSYWRpdXMgKyBMaWdodC5TSEFET1dfQlVGRkVSLFxuICAgICAgICAgICAgICB2ZWMucmFkKHZlYy5zdWIoc2hhZG93RWRnZXNbMF0uZW5kLCBzaGFkb3dFZGdlc1swXS5zdGFydCkpLFxuICAgICAgICAgICAgICB2ZWMucmFkKHZlYy5zdWIoc2hhZG93RWRnZXNbNV0uZW5kLCBzaGFkb3dFZGdlc1s1XS5zdGFydCkpLFxuICAgICAgICAgICAgICBmYWxzZVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIHNoYWRvd0VkZ2VzWzVdLnN0YXJ0LFxuICAgICAgICAgIHNoYWRvd0VkZ2VzWzRdLnN0YXJ0LFxuICAgICAgICAgIHNoYWRvd0VkZ2VzWzJdLnN0YXJ0XG4gICAgICAgICk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIFNlY3RvcjJkLkJvdHRvbVJpZ2h0OlxuICAgICAgICBpZiAoc2hhZG93RWRnZXMubGVuZ3RoICE9PSA0KSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBsZWZ0RWRnZSA9IHNoYWRvd0VkZ2VzWzBdO1xuICAgICAgICByaWdodEVkZ2UgPSBzaGFkb3dFZGdlc1szXTtcbiAgICAgICAgc2hhZG93UG9seWdvbi5wdXNoKFxuICAgICAgICAgIHNoYWRvd0VkZ2VzWzBdLnN0YXJ0LFxuICAgICAgICAgIHNoYWRvd0VkZ2VzWzBdLmVuZCxcbiAgICAgICAgICB2ZWMoc2hhZG93RWRnZXNbMF0uZW5kLngsIHNoYWRvd0VkZ2VzWzNdLmVuZC55KSxcbiAgICAgICAgICBzaGFkb3dFZGdlc1szXS5lbmQsXG4gICAgICAgICAgc2hhZG93RWRnZXNbM10uc3RhcnQsXG4gICAgICAgICAgc2hhZG93RWRnZXNbMl0uc3RhcnRcbiAgICAgICAgKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHNoYWRvd0Nhc3RlckludGVydmFsLFxuICAgICAgbGVmdEVkZ2UsXG4gICAgICByaWdodEVkZ2UsXG4gICAgICB2ZXJ0aWNlczogc2hhZG93UG9seWdvbixcbiAgICB9O1xuICB9XG59XG4iLCJpbXBvcnQgRGVidWcgZnJvbSAnQGJhc2VtZW50dW5pdmVyc2UvZGVidWcnO1xuaW1wb3J0IElucHV0TWFuYWdlciBmcm9tICdAYmFzZW1lbnR1bml2ZXJzZS9pbnB1dC1tYW5hZ2VyJztcbmltcG9ydCB7IGV4Y2x1ZGUgfSBmcm9tICdAYmFzZW1lbnR1bml2ZXJzZS91dGlscyc7XG5pbXBvcnQgeyB2ZWMgfSBmcm9tICdAYmFzZW1lbnR1bml2ZXJzZS92ZWMnO1xuaW1wb3J0IHsgQ2lyY2xlU2hhZG93Q2FzdGVyIH0gZnJvbSAnLi9DaXJjbGVTaGFkb3dDYXN0ZXInO1xuaW1wb3J0IEdhbWUgZnJvbSAnLi9HYW1lJztcbmltcG9ydCB7IEdyb3VuZFNoYWRvd1JlY2VpdmVyIH0gZnJvbSAnLi9Hcm91bmRTaGFkb3dSZWNlaXZlcic7XG5pbXBvcnQgeyBMaWdodCB9IGZyb20gJy4vTGlnaHQnO1xuaW1wb3J0IHsgTGlnaHRpbmdTeXN0ZW0gfSBmcm9tICcuL0xpZ2h0aW5nU3lzdGVtJztcbmltcG9ydCB7IFJlZ2lvblNoYWRvd0Nhc3RlciB9IGZyb20gJy4vUmVnaW9uU2hhZG93Q2FzdGVyJztcbmltcG9ydCB7IFNwcml0ZVNoYWRvd0Nhc3RlciB9IGZyb20gJy4vU3ByaXRlU2hhZG93Q2FzdGVyJztcbmltcG9ydCB7IFdhbGxTaGFkb3dSZWNlaXZlciB9IGZyb20gJy4vV2FsbFNoYWRvd1JlY2VpdmVyJztcblxuZXhwb3J0IGNsYXNzIExpZ2h0aW5nU2NlbmUge1xuICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEdSSURfU0laRSA9IDIwO1xuXG4gIHByaXZhdGUgc2hvd0RlYnVnID0gdHJ1ZTtcbiAgcHVibGljIGxpZ2h0aW5nU3lzdGVtOiBMaWdodGluZ1N5c3RlbTtcblxuICBwcml2YXRlIGdyb3VuZFNoYWRvd1JlY2VpdmVyczogR3JvdW5kU2hhZG93UmVjZWl2ZXJbXSA9IFtdO1xuICBwcml2YXRlIHdhbGxTaGFkb3dSZWNlaXZlcnM6IFdhbGxTaGFkb3dSZWNlaXZlcltdID0gW107XG4gIHByaXZhdGUgcmVnaW9uU2hhZG93Q2FzdGVyczogUmVnaW9uU2hhZG93Q2FzdGVyW10gPSBbXTtcbiAgcHJpdmF0ZSBzcHJpdGVTaGFkb3dDYXN0ZXJzOiBTcHJpdGVTaGFkb3dDYXN0ZXJbXSA9IFtdO1xuICBwcml2YXRlIGNpcmNsZVNoYWRvd0Nhc3RlcnM6IENpcmNsZVNoYWRvd0Nhc3RlcltdID0gW107XG5cbiAgcHJpdmF0ZSBzZWxlY3RlZDpcbiAgICB8IEdyb3VuZFNoYWRvd1JlY2VpdmVyXG4gICAgfCBXYWxsU2hhZG93UmVjZWl2ZXJcbiAgICB8IFJlZ2lvblNoYWRvd0Nhc3RlclxuICAgIHwgU3ByaXRlU2hhZG93Q2FzdGVyXG4gICAgfCBDaXJjbGVTaGFkb3dDYXN0ZXJcbiAgICB8IExpZ2h0XG4gICAgfCBudWxsID0gbnVsbDtcblxuICBwdWJsaWMgbW9kZTpcbiAgICB8ICdub2xpZ2h0aW5nJ1xuICAgIHwgJ25vcm1hbCdcbiAgICB8ICdncm91bmRtYXNrJ1xuICAgIHwgJ3dhbGxtYXNrJ1xuICAgIHwgJ2dyb3VuZG1hc2tlZGxpZ2h0bWFwJ1xuICAgIHwgJ3dhbGxtYXNrZWRsaWdodG1hcCdcbiAgICB8ICdsaWdodG1hcCcgPSAnbm9ybWFsJztcblxuICBwdWJsaWMgaW5pdGlhbGlzZSgpIHtcbiAgICB0aGlzLmxpZ2h0aW5nU3lzdGVtID0gbmV3IExpZ2h0aW5nU3lzdGVtKCk7XG4gICAgdGhpcy5saWdodGluZ1N5c3RlbS5pbml0aWFsaXNlKCk7XG5cbiAgICBHYW1lLmd1aVxuICAgICAgLmFkZCh7IGNsaWNrOiAoKSA9PiB0aGlzLnN0b3JlKCkgfSwgJ2NsaWNrJylcbiAgICAgIC5uYW1lKCdTYXZlIHRvIGxvY2FsIHN0b3JhZ2UnKTtcbiAgICBHYW1lLmd1aVxuICAgICAgLmFkZCh7IGNsaWNrOiAoKSA9PiB0aGlzLnJldHJpZXZlKCkgfSwgJ2NsaWNrJylcbiAgICAgIC5uYW1lKCdMb2FkIGZyb20gbG9jYWwgc3RvcmFnZScpO1xuICAgIEdhbWUuZ3VpXG4gICAgICAuYWRkKHsgY2xpY2s6ICgpID0+IHRoaXMuZXhwb3J0KCkgfSwgJ2NsaWNrJylcbiAgICAgIC5uYW1lKCdFeHBvcnQgc3RhdGUgdG8gSlNPTicpO1xuICAgIEdhbWUuZ3VpXG4gICAgICAuYWRkKHsgY2xpY2s6ICgpID0+IHRoaXMuaW1wb3J0KCkgfSwgJ2NsaWNrJylcbiAgICAgIC5uYW1lKCdJbXBvcnQgc3RhdGUgZnJvbSBKU09OJyk7XG4gICAgR2FtZS5ndWlcbiAgICAgIC5hZGQodGhpcywgJ21vZGUnLCBbXG4gICAgICAgICdub2xpZ2h0aW5nJyxcbiAgICAgICAgJ25vcm1hbCcsXG4gICAgICAgICdncm91bmRtYXNrJyxcbiAgICAgICAgJ3dhbGxtYXNrJyxcbiAgICAgICAgJ2dyb3VuZG1hc2tlZGxpZ2h0bWFwJyxcbiAgICAgICAgJ3dhbGxtYXNrZWRsaWdodG1hcCcsXG4gICAgICAgICdsaWdodG1hcCcsXG4gICAgICBdKVxuICAgICAgLm5hbWUoJ01vZGUnKTtcbiAgICBHYW1lLmd1aVxuICAgICAgLmFkZChcbiAgICAgICAge1xuICAgICAgICAgIGNsaWNrOiAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLndhbGxTaGFkb3dSZWNlaXZlcnMgPSBMaWdodGluZ1N5c3RlbS5tZXJnZVdhbGxTaGFkb3dSZWNlaXZlcnMoXG4gICAgICAgICAgICAgIHRoaXMud2FsbFNoYWRvd1JlY2VpdmVyc1xuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgdGhpcy5yZWdpb25TaGFkb3dDYXN0ZXJzID0gTGlnaHRpbmdTeXN0ZW0ubWVyZ2VSZWdpb25TaGFkb3dDYXN0ZXJzKFxuICAgICAgICAgICAgICB0aGlzLnJlZ2lvblNoYWRvd0Nhc3RlcnNcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgJ2NsaWNrJ1xuICAgICAgKVxuICAgICAgLm5hbWUoJ09wdGltaXNlJyk7XG4gICAgR2FtZS5ndWkuYWRkKHRoaXMubGlnaHRpbmdTeXN0ZW0sICdhbWJpZW50TGlnaHRDb2xvdXInKS5saXN0ZW4oKTtcbiAgfVxuXG4gIHByaXZhdGUgc3RvcmUoKSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2xpZ2h0aW5nX2RlbW9fdGVzdF9zdGF0ZScsIHRoaXMuc2F2ZSgpKTtcbiAgfVxuXG4gIHByaXZhdGUgcmV0cmlldmUoKSB7XG4gICAgY29uc3QgZGF0YSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdsaWdodGluZ19kZW1vX3Rlc3Rfc3RhdGUnKTtcbiAgICBpZiAoIWRhdGEpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmxvYWQoZGF0YSk7XG4gIH1cblxuICBwcml2YXRlIGV4cG9ydCgpIHtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnNhdmUoKSk7XG4gIH1cblxuICBwcml2YXRlIGltcG9ydCgpIHtcbiAgICBjb25zdCBkYXRhID0gcHJvbXB0KCdQYXN0ZSBzdGF0ZSBkYXRhIGhlcmU6Jyk7XG4gICAgaWYgKGRhdGEpIHtcbiAgICAgIHRoaXMubG9hZChkYXRhKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHNhdmUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgYW1iaWVudExpZ2h0Q29sb3VyOiB0aGlzLmxpZ2h0aW5nU3lzdGVtLmFtYmllbnRMaWdodENvbG91cixcbiAgICAgIGdyb3VuZFNoYWRvd1JlY2VpdmVyczogdGhpcy5ncm91bmRTaGFkb3dSZWNlaXZlcnMubWFwKGcgPT4gZy5zZXJpYWxpc2UoKSksXG4gICAgICB3YWxsU2hhZG93UmVjZWl2ZXJzOiB0aGlzLndhbGxTaGFkb3dSZWNlaXZlcnMubWFwKHcgPT4gdy5zZXJpYWxpc2UoKSksXG4gICAgICByZWdpb25TaGFkb3dDYXN0ZXJzOiB0aGlzLnJlZ2lvblNoYWRvd0Nhc3RlcnMubWFwKHIgPT4gci5zZXJpYWxpc2UoKSksXG4gICAgICBzcHJpdGVTaGFkb3dDYXN0ZXJzOiB0aGlzLnNwcml0ZVNoYWRvd0Nhc3RlcnMubWFwKHMgPT4gcy5zZXJpYWxpc2UoKSksXG4gICAgICBjaXJjbGVTaGFkb3dDYXN0ZXJzOiB0aGlzLmNpcmNsZVNoYWRvd0Nhc3RlcnMubWFwKGMgPT4gYy5zZXJpYWxpc2UoKSksXG4gICAgICBsaWdodHM6IHRoaXMubGlnaHRpbmdTeXN0ZW0ubGlnaHRzLm1hcChsID0+IGwuc2VyaWFsaXNlKCkpLFxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBsb2FkKGRhdGE6IHN0cmluZykge1xuICAgIGxldCBzdGF0ZTtcbiAgICB0cnkge1xuICAgICAgc3RhdGUgPSBKU09OLnBhcnNlKGRhdGEpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1N0YXRlIGRhdGEgaXMgaW52YWxpZCcpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMubGlnaHRpbmdTeXN0ZW0uYW1iaWVudExpZ2h0Q29sb3VyID0gc3RhdGUuYW1iaWVudExpZ2h0Q29sb3VyO1xuXG4gICAgdGhpcy5ncm91bmRTaGFkb3dSZWNlaXZlcnMuZm9yRWFjaChnID0+IGcuZGVzdHJveSgpKTtcbiAgICB0aGlzLmdyb3VuZFNoYWRvd1JlY2VpdmVycyA9IHN0YXRlLmdyb3VuZFNoYWRvd1JlY2VpdmVycy5tYXAoKGc6IGFueSkgPT5cbiAgICAgIEdyb3VuZFNoYWRvd1JlY2VpdmVyLmRlc2VyaWFsaXNlKGcpXG4gICAgKTtcblxuICAgIHRoaXMud2FsbFNoYWRvd1JlY2VpdmVycy5mb3JFYWNoKHcgPT4gdy5kZXN0cm95KCkpO1xuICAgIHRoaXMud2FsbFNoYWRvd1JlY2VpdmVycyA9IHN0YXRlLndhbGxTaGFkb3dSZWNlaXZlcnMubWFwKCh3OiBhbnkpID0+XG4gICAgICBXYWxsU2hhZG93UmVjZWl2ZXIuZGVzZXJpYWxpc2UodylcbiAgICApO1xuXG4gICAgdGhpcy5yZWdpb25TaGFkb3dDYXN0ZXJzLmZvckVhY2gociA9PiByLmRlc3Ryb3koKSk7XG4gICAgdGhpcy5yZWdpb25TaGFkb3dDYXN0ZXJzID0gc3RhdGUucmVnaW9uU2hhZG93Q2FzdGVycy5tYXAoKHI6IGFueSkgPT5cbiAgICAgIFJlZ2lvblNoYWRvd0Nhc3Rlci5kZXNlcmlhbGlzZShyKVxuICAgICk7XG5cbiAgICB0aGlzLnNwcml0ZVNoYWRvd0Nhc3RlcnMuZm9yRWFjaChzID0+IHMuZGVzdHJveSgpKTtcbiAgICB0aGlzLnNwcml0ZVNoYWRvd0Nhc3RlcnMgPSBzdGF0ZS5zcHJpdGVTaGFkb3dDYXN0ZXJzLm1hcCgoczogYW55KSA9PlxuICAgICAgU3ByaXRlU2hhZG93Q2FzdGVyLmRlc2VyaWFsaXNlKHMpXG4gICAgKTtcblxuICAgIHRoaXMuY2lyY2xlU2hhZG93Q2FzdGVycy5mb3JFYWNoKGMgPT4gYy5kZXN0cm95KCkpO1xuICAgIHRoaXMuY2lyY2xlU2hhZG93Q2FzdGVycyA9IHN0YXRlLmNpcmNsZVNoYWRvd0Nhc3RlcnMubWFwKChjOiBhbnkpID0+XG4gICAgICBDaXJjbGVTaGFkb3dDYXN0ZXIuZGVzZXJpYWxpc2UoYylcbiAgICApO1xuXG4gICAgdGhpcy5saWdodGluZ1N5c3RlbS5saWdodHMuZm9yRWFjaChsaWdodCA9PiBsaWdodC5kZXN0cm95KCkpO1xuICAgIHRoaXMubGlnaHRpbmdTeXN0ZW0ubGlnaHRzID0gc3RhdGUubGlnaHRzLm1hcCgobGlnaHQ6IGFueSkgPT5cbiAgICAgIExpZ2h0LmRlc2VyaWFsaXNlKGxpZ2h0KVxuICAgICk7XG4gIH1cblxuICBwdWJsaWMgdXBkYXRlKGR0OiBudW1iZXIpIHtcbiAgICBEZWJ1Zy52YWx1ZSgnUHJlc3MgU0hJRlQtTCB0byBjcmVhdGUgYSBuZXcgTGlnaHQnLCAnJyk7XG4gICAgRGVidWcudmFsdWUoJ1ByZXNzIFNISUZULUcgdG8gY3JlYXRlIGEgbmV3IEdyb3VuZFNoYWRvd1JlY2VpdmVyJywgJycpO1xuICAgIERlYnVnLnZhbHVlKCdQcmVzcyBTSElGVC1XIHRvIGNyZWF0ZSBhIG5ldyBXYWxsU2hhZG93UmVjZWl2ZXInLCAnJyk7XG4gICAgRGVidWcudmFsdWUoJ1ByZXNzIFNISUZULVIgdG8gY3JlYXRlIGEgbmV3IFJlZ2lvblNoYWRvd0Nhc3RlcicsICcnKTtcbiAgICBEZWJ1Zy52YWx1ZSgnUHJlc3MgU0hJRlQtUyB0byBjcmVhdGUgYSBuZXcgU3ByaXRlU2hhZG93Q2FzdGVyJywgJycpO1xuICAgIERlYnVnLnZhbHVlKCdQcmVzcyBTSElGVC1DIHRvIGNyZWF0ZSBhIG5ldyBDaXJjbGVTaGFkb3dDYXN0ZXInLCAnJyk7XG4gICAgRGVidWcudmFsdWUoJ1ByZXNzIEQgdG8gZHVwbGljYXRlIHNlbGVjdGVkJywgJycpO1xuICAgIERlYnVnLnZhbHVlKCdDVFJMLWRyYWcgdG8gcmVzaXplJywgJycpO1xuICAgIERlYnVnLnZhbHVlKCdIb2xkIFNISUZUIHdoaWxlIG1vdmluZyBvciByZXNpemluZyB0byBzbmFwIHRvIGdyaWQnLCAnJyk7XG5cbiAgICB0aGlzLmdyb3VuZFNoYWRvd1JlY2VpdmVycy5mb3JFYWNoKGdyb3VuZCA9PiBncm91bmQudXBkYXRlKGR0KSk7XG4gICAgdGhpcy53YWxsU2hhZG93UmVjZWl2ZXJzLmZvckVhY2god2FsbCA9PiB3YWxsLnVwZGF0ZShkdCkpO1xuXG4gICAgdGhpcy5yZWdpb25TaGFkb3dDYXN0ZXJzLmZvckVhY2gocmVnaW9uID0+IHJlZ2lvbi51cGRhdGUoZHQpKTtcbiAgICB0aGlzLnNwcml0ZVNoYWRvd0Nhc3RlcnMuZm9yRWFjaChzcHJpdGUgPT4gc3ByaXRlLnVwZGF0ZShkdCkpO1xuICAgIHRoaXMuY2lyY2xlU2hhZG93Q2FzdGVycy5mb3JFYWNoKGNpcmNsZSA9PiBjaXJjbGUudXBkYXRlKGR0KSk7XG5cbiAgICB0aGlzLmxpZ2h0aW5nU3lzdGVtLnVwZGF0ZShkdCk7XG5cbiAgICAvLyB5LXNvcnRpbmdcbiAgICB0aGlzLmdyb3VuZFNoYWRvd1JlY2VpdmVycyA9IHRoaXMuZ3JvdW5kU2hhZG93UmVjZWl2ZXJzLnNvcnQoXG4gICAgICAoYSwgYikgPT4gYS5wb3NpdGlvbi55ICsgYS5zaXplLnkgLSAoYi5wb3NpdGlvbi55ICsgYi5zaXplLnkpXG4gICAgKTtcbiAgICB0aGlzLndhbGxTaGFkb3dSZWNlaXZlcnMgPSB0aGlzLndhbGxTaGFkb3dSZWNlaXZlcnMuc29ydChcbiAgICAgIChhLCBiKSA9PiBhLnBvc2l0aW9uLnkgKyBhLnNpemUueSAtIChiLnBvc2l0aW9uLnkgKyBiLnNpemUueSlcbiAgICApO1xuXG4gICAgLy8gSGFuZGxlIGl0ZW0gc2VsZWN0XG4gICAgaWYgKElucHV0TWFuYWdlci5tb3VzZVByZXNzZWQoKSkge1xuICAgICAgbGV0IHNlbGVjdGVkR3JvdW5kU2hhZG93UmVjZWl2ZXIgPVxuICAgICAgICB0aGlzLmdyb3VuZFNoYWRvd1JlY2VpdmVycy5maW5kKGcgPT4gZy5ob3ZlcmVkKSB8fCBudWxsO1xuICAgICAgbGV0IHNlbGVjdGVkV2FsbFNoYWRvd1JlY2VpdmVyID1cbiAgICAgICAgdGhpcy53YWxsU2hhZG93UmVjZWl2ZXJzLmZpbmQodyA9PiB3LmhvdmVyZWQpIHx8IG51bGw7XG4gICAgICBsZXQgc2VsZWN0ZWRSZWdpb25TaGFkb3dDYXN0ZXIgPVxuICAgICAgICB0aGlzLnJlZ2lvblNoYWRvd0Nhc3RlcnMuZmluZChyID0+IHIuaG92ZXJlZCkgfHwgbnVsbDtcbiAgICAgIGxldCBzZWxlY3RlZFNwcml0ZVNoYWRvd0Nhc3RlciA9XG4gICAgICAgIHRoaXMuc3ByaXRlU2hhZG93Q2FzdGVycy5maW5kKHMgPT4gcy5ob3ZlcmVkKSB8fCBudWxsO1xuICAgICAgbGV0IHNlbGVjdGVkQ2lyY2xlU2hhZG93Q2FzdGVyID1cbiAgICAgICAgdGhpcy5jaXJjbGVTaGFkb3dDYXN0ZXJzLmZpbmQoYyA9PiBjLmhvdmVyZWQpIHx8IG51bGw7XG4gICAgICBsZXQgc2VsZWN0ZWRMaWdodCA9XG4gICAgICAgIHRoaXMubGlnaHRpbmdTeXN0ZW0ubGlnaHRzLmZpbmQobGlnaHQgPT4gbGlnaHQuaG92ZXJlZCkgfHwgbnVsbDtcblxuICAgICAgdGhpcy5zZWxlY3RlZCA9XG4gICAgICAgIHNlbGVjdGVkTGlnaHQgfHxcbiAgICAgICAgc2VsZWN0ZWRXYWxsU2hhZG93UmVjZWl2ZXIgfHxcbiAgICAgICAgc2VsZWN0ZWRSZWdpb25TaGFkb3dDYXN0ZXIgfHxcbiAgICAgICAgc2VsZWN0ZWRTcHJpdGVTaGFkb3dDYXN0ZXIgfHxcbiAgICAgICAgc2VsZWN0ZWRDaXJjbGVTaGFkb3dDYXN0ZXIgfHxcbiAgICAgICAgc2VsZWN0ZWRHcm91bmRTaGFkb3dSZWNlaXZlciB8fFxuICAgICAgICBudWxsO1xuXG4gICAgICB0aGlzLmdyb3VuZFNoYWRvd1JlY2VpdmVycy5mb3JFYWNoKGcgPT4ge1xuICAgICAgICBnLnNlbGVjdGVkID0gZmFsc2U7XG4gICAgICB9KTtcbiAgICAgIHRoaXMud2FsbFNoYWRvd1JlY2VpdmVycy5mb3JFYWNoKHcgPT4ge1xuICAgICAgICB3LnNlbGVjdGVkID0gZmFsc2U7XG4gICAgICB9KTtcbiAgICAgIHRoaXMucmVnaW9uU2hhZG93Q2FzdGVycy5mb3JFYWNoKHIgPT4ge1xuICAgICAgICByLnNlbGVjdGVkID0gZmFsc2U7XG4gICAgICB9KTtcbiAgICAgIHRoaXMuc3ByaXRlU2hhZG93Q2FzdGVycy5mb3JFYWNoKHMgPT4ge1xuICAgICAgICBzLnNlbGVjdGVkID0gZmFsc2U7XG4gICAgICB9KTtcbiAgICAgIHRoaXMuY2lyY2xlU2hhZG93Q2FzdGVycy5mb3JFYWNoKGMgPT4ge1xuICAgICAgICBjLnNlbGVjdGVkID0gZmFsc2U7XG4gICAgICB9KTtcbiAgICAgIHRoaXMubGlnaHRpbmdTeXN0ZW0ubGlnaHRzLmZvckVhY2gobGlnaHQgPT4ge1xuICAgICAgICBsaWdodC5zZWxlY3RlZCA9IGZhbHNlO1xuICAgICAgfSk7XG5cbiAgICAgIGlmICh0aGlzLnNlbGVjdGVkKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWQuc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEhhbmRsZSBpdGVtIGNyZWF0ZVxuICAgIGlmIChJbnB1dE1hbmFnZXIua2V5RG93bignU2hpZnRMZWZ0JykpIHtcbiAgICAgIC8vIENyZWF0ZSBHcm91bmRTaGFkb3dSZWNlaXZlclxuICAgICAgaWYgKElucHV0TWFuYWdlci5rZXlQcmVzc2VkKCdLZXlHJykpIHtcbiAgICAgICAgdGhpcy5ncm91bmRTaGFkb3dSZWNlaXZlcnMucHVzaChcbiAgICAgICAgICBuZXcgR3JvdW5kU2hhZG93UmVjZWl2ZXIoe1xuICAgICAgICAgICAgcG9zaXRpb246IHZlYy5jcHkoSW5wdXRNYW5hZ2VyLm1vdXNlUG9zaXRpb24pLFxuICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIC8vIENyZWF0ZSBXYWxsU2hhZG93UmVjZWl2ZXJcbiAgICAgIGlmIChJbnB1dE1hbmFnZXIua2V5UHJlc3NlZCgnS2V5VycpKSB7XG4gICAgICAgIHRoaXMud2FsbFNoYWRvd1JlY2VpdmVycy5wdXNoKFxuICAgICAgICAgIG5ldyBXYWxsU2hhZG93UmVjZWl2ZXIoe1xuICAgICAgICAgICAgcG9zaXRpb246IHZlYy5jcHkoSW5wdXRNYW5hZ2VyLm1vdXNlUG9zaXRpb24pLFxuICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIC8vIENyZWF0ZSBXYWxsU2hhZG93UmVjZWl2ZXJcbiAgICAgIGlmIChJbnB1dE1hbmFnZXIua2V5UHJlc3NlZCgnS2V5UicpKSB7XG4gICAgICAgIHRoaXMucmVnaW9uU2hhZG93Q2FzdGVycy5wdXNoKFxuICAgICAgICAgIG5ldyBSZWdpb25TaGFkb3dDYXN0ZXIoe1xuICAgICAgICAgICAgcG9zaXRpb246IHZlYy5jcHkoSW5wdXRNYW5hZ2VyLm1vdXNlUG9zaXRpb24pLFxuICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIC8vIENyZWF0ZSBXYWxsU2hhZG93UmVjZWl2ZXJcbiAgICAgIGlmIChJbnB1dE1hbmFnZXIua2V5UHJlc3NlZCgnS2V5UycpKSB7XG4gICAgICAgIHRoaXMuc3ByaXRlU2hhZG93Q2FzdGVycy5wdXNoKFxuICAgICAgICAgIG5ldyBTcHJpdGVTaGFkb3dDYXN0ZXIoe1xuICAgICAgICAgICAgcG9zaXRpb246IHZlYy5jcHkoSW5wdXRNYW5hZ2VyLm1vdXNlUG9zaXRpb24pLFxuICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIC8vIENyZWF0ZSBXYWxsU2hhZG93UmVjZWl2ZXJcbiAgICAgIGlmIChJbnB1dE1hbmFnZXIua2V5UHJlc3NlZCgnS2V5QycpKSB7XG4gICAgICAgIHRoaXMuY2lyY2xlU2hhZG93Q2FzdGVycy5wdXNoKFxuICAgICAgICAgIG5ldyBDaXJjbGVTaGFkb3dDYXN0ZXIoe1xuICAgICAgICAgICAgcG9zaXRpb246IHZlYy5jcHkoSW5wdXRNYW5hZ2VyLm1vdXNlUG9zaXRpb24pLFxuICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIC8vIENyZWF0ZSBsaWdodFxuICAgICAgaWYgKElucHV0TWFuYWdlci5rZXlQcmVzc2VkKCdLZXlMJykpIHtcbiAgICAgICAgdGhpcy5saWdodGluZ1N5c3RlbS5saWdodHMucHVzaChcbiAgICAgICAgICBuZXcgTGlnaHQoe1xuICAgICAgICAgICAgcG9zaXRpb246IHZlYy5jcHkoSW5wdXRNYW5hZ2VyLm1vdXNlUG9zaXRpb24pLFxuICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gSGFuZGxlIGl0ZW0gZHVwbGljYXRlXG4gICAgaWYgKElucHV0TWFuYWdlci5rZXlQcmVzc2VkKCdLZXlEJykgJiYgdGhpcy5zZWxlY3RlZCkge1xuICAgICAgc3dpdGNoICh0aGlzLnNlbGVjdGVkLnR5cGUpIHtcbiAgICAgICAgY2FzZSAnR3JvdW5kU2hhZG93UmVjZWl2ZXInOlxuICAgICAgICAgIHRoaXMuZ3JvdW5kU2hhZG93UmVjZWl2ZXJzLnB1c2goXG4gICAgICAgICAgICBHcm91bmRTaGFkb3dSZWNlaXZlci5kZXNlcmlhbGlzZSh7XG4gICAgICAgICAgICAgIC4uLmV4Y2x1ZGUodGhpcy5zZWxlY3RlZC5zZXJpYWxpc2UoKSwgJ2lkJywgJ3Bvc2l0aW9uJyksXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiB2ZWMuY3B5KElucHV0TWFuYWdlci5tb3VzZVBvc2l0aW9uKSxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdXYWxsU2hhZG93UmVjZWl2ZXInOlxuICAgICAgICAgIHRoaXMud2FsbFNoYWRvd1JlY2VpdmVycy5wdXNoKFxuICAgICAgICAgICAgV2FsbFNoYWRvd1JlY2VpdmVyLmRlc2VyaWFsaXNlKHtcbiAgICAgICAgICAgICAgLi4uZXhjbHVkZSh0aGlzLnNlbGVjdGVkLnNlcmlhbGlzZSgpLCAnaWQnLCAncG9zaXRpb24nKSxcbiAgICAgICAgICAgICAgcG9zaXRpb246IHZlYy5jcHkoSW5wdXRNYW5hZ2VyLm1vdXNlUG9zaXRpb24pLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ1JlZ2lvblNoYWRvd0Nhc3Rlcic6XG4gICAgICAgICAgdGhpcy5yZWdpb25TaGFkb3dDYXN0ZXJzLnB1c2goXG4gICAgICAgICAgICBSZWdpb25TaGFkb3dDYXN0ZXIuZGVzZXJpYWxpc2Uoe1xuICAgICAgICAgICAgICAuLi5leGNsdWRlKHRoaXMuc2VsZWN0ZWQuc2VyaWFsaXNlKCksICdpZCcsICdwb3NpdGlvbicpLFxuICAgICAgICAgICAgICBwb3NpdGlvbjogdmVjLmNweShJbnB1dE1hbmFnZXIubW91c2VQb3NpdGlvbiksXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnU3ByaXRlU2hhZG93Q2FzdGVyJzpcbiAgICAgICAgICB0aGlzLnNwcml0ZVNoYWRvd0Nhc3RlcnMucHVzaChcbiAgICAgICAgICAgIFNwcml0ZVNoYWRvd0Nhc3Rlci5kZXNlcmlhbGlzZSh7XG4gICAgICAgICAgICAgIC4uLmV4Y2x1ZGUodGhpcy5zZWxlY3RlZC5zZXJpYWxpc2UoKSwgJ2lkJywgJ3Bvc2l0aW9uJyksXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiB2ZWMuY3B5KElucHV0TWFuYWdlci5tb3VzZVBvc2l0aW9uKSxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdDaXJjbGVTaGFkb3dDYXN0ZXInOlxuICAgICAgICAgIHRoaXMuY2lyY2xlU2hhZG93Q2FzdGVycy5wdXNoKFxuICAgICAgICAgICAgQ2lyY2xlU2hhZG93Q2FzdGVyLmRlc2VyaWFsaXNlKHtcbiAgICAgICAgICAgICAgLi4uZXhjbHVkZSh0aGlzLnNlbGVjdGVkLnNlcmlhbGlzZSgpLCAnaWQnLCAncG9zaXRpb24nKSxcbiAgICAgICAgICAgICAgcG9zaXRpb246IHZlYy5jcHkoSW5wdXRNYW5hZ2VyLm1vdXNlUG9zaXRpb24pLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ0xpZ2h0JzpcbiAgICAgICAgICB0aGlzLmxpZ2h0aW5nU3lzdGVtLmxpZ2h0cy5wdXNoKFxuICAgICAgICAgICAgTGlnaHQuZGVzZXJpYWxpc2Uoe1xuICAgICAgICAgICAgICAuLi5leGNsdWRlKHRoaXMuc2VsZWN0ZWQuc2VyaWFsaXNlKCksICdpZCcsICdwb3NpdGlvbicpLFxuICAgICAgICAgICAgICBwb3NpdGlvbjogdmVjLmNweShJbnB1dE1hbmFnZXIubW91c2VQb3NpdGlvbiksXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gSGFuZGxlIGl0ZW0gZGVsZXRlXG4gICAgaWYgKElucHV0TWFuYWdlci5rZXlQcmVzc2VkKCdEZWxldGUnKSAmJiB0aGlzLnNlbGVjdGVkKSB7XG4gICAgICBzd2l0Y2ggKHRoaXMuc2VsZWN0ZWQudHlwZSkge1xuICAgICAgICBjYXNlICdHcm91bmRTaGFkb3dSZWNlaXZlcic6XG4gICAgICAgICAgdGhpcy5ncm91bmRTaGFkb3dSZWNlaXZlcnMgPSB0aGlzLmdyb3VuZFNoYWRvd1JlY2VpdmVycy5maWx0ZXIoXG4gICAgICAgICAgICBnID0+IGcuaWQgIT09IHRoaXMuc2VsZWN0ZWQhLmlkXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdXYWxsU2hhZG93UmVjZWl2ZXInOlxuICAgICAgICAgIHRoaXMud2FsbFNoYWRvd1JlY2VpdmVycyA9IHRoaXMud2FsbFNoYWRvd1JlY2VpdmVycy5maWx0ZXIoXG4gICAgICAgICAgICB3ID0+IHcuaWQgIT09IHRoaXMuc2VsZWN0ZWQhLmlkXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdSZWdpb25TaGFkb3dDYXN0ZXInOlxuICAgICAgICAgIHRoaXMucmVnaW9uU2hhZG93Q2FzdGVycyA9IHRoaXMucmVnaW9uU2hhZG93Q2FzdGVycy5maWx0ZXIoXG4gICAgICAgICAgICByID0+IHIuaWQgIT09IHRoaXMuc2VsZWN0ZWQhLmlkXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdTcHJpdGVTaGFkb3dDYXN0ZXInOlxuICAgICAgICAgIHRoaXMuc3ByaXRlU2hhZG93Q2FzdGVycyA9IHRoaXMuc3ByaXRlU2hhZG93Q2FzdGVycy5maWx0ZXIoXG4gICAgICAgICAgICBzID0+IHMuaWQgIT09IHRoaXMuc2VsZWN0ZWQhLmlkXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdDaXJjbGVTaGFkb3dDYXN0ZXInOlxuICAgICAgICAgIHRoaXMuY2lyY2xlU2hhZG93Q2FzdGVycyA9IHRoaXMuY2lyY2xlU2hhZG93Q2FzdGVycy5maWx0ZXIoXG4gICAgICAgICAgICBjID0+IGMuaWQgIT09IHRoaXMuc2VsZWN0ZWQhLmlkXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdMaWdodCc6XG4gICAgICAgICAgdGhpcy5saWdodGluZ1N5c3RlbS5saWdodHMgPSB0aGlzLmxpZ2h0aW5nU3lzdGVtLmxpZ2h0cy5maWx0ZXIoXG4gICAgICAgICAgICBsaWdodCA9PiBsaWdodC5pZCAhPT0gdGhpcy5zZWxlY3RlZCEuaWRcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgdGhpcy5zZWxlY3RlZC5kZXN0cm95KCk7XG4gICAgICB0aGlzLnNlbGVjdGVkID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZHJhdyhjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpIHtcbiAgICBjb250ZXh0LnNhdmUoKTtcblxuICAgIHN3aXRjaCAodGhpcy5tb2RlKSB7XG4gICAgICBjYXNlICdub2xpZ2h0aW5nJzpcbiAgICAgICAgdGhpcy5ncm91bmRTaGFkb3dSZWNlaXZlcnMuZm9yRWFjaChnID0+IGcuZHJhdyhjb250ZXh0KSk7XG4gICAgICAgIHRoaXMud2FsbFNoYWRvd1JlY2VpdmVycy5mb3JFYWNoKHcgPT4gdy5kcmF3KGNvbnRleHQpKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ25vcm1hbCc6XG4gICAgICAgIHRoaXMuZ3JvdW5kU2hhZG93UmVjZWl2ZXJzLmZvckVhY2goZyA9PiBnLmRyYXcoY29udGV4dCkpO1xuICAgICAgICB0aGlzLndhbGxTaGFkb3dSZWNlaXZlcnMuZm9yRWFjaCh3ID0+IHcuZHJhdyhjb250ZXh0KSk7XG5cbiAgICAgICAgdGhpcy5saWdodGluZ1N5c3RlbS5wcmVwYXJlKFxuICAgICAgICAgIHRoaXMuZ3JvdW5kU2hhZG93UmVjZWl2ZXJzLFxuICAgICAgICAgIHRoaXMud2FsbFNoYWRvd1JlY2VpdmVycyxcbiAgICAgICAgICB0aGlzLnJlZ2lvblNoYWRvd0Nhc3RlcnMsXG4gICAgICAgICAgdGhpcy5zcHJpdGVTaGFkb3dDYXN0ZXJzLFxuICAgICAgICAgIHRoaXMuY2lyY2xlU2hhZG93Q2FzdGVyc1xuICAgICAgICApO1xuICAgICAgICB0aGlzLmxpZ2h0aW5nU3lzdGVtLmRyYXcoY29udGV4dCk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdncm91bmRtYXNrJzpcbiAgICAgICAgdGhpcy5saWdodGluZ1N5c3RlbS5wcmVwYXJlKFxuICAgICAgICAgIHRoaXMuZ3JvdW5kU2hhZG93UmVjZWl2ZXJzLFxuICAgICAgICAgIHRoaXMud2FsbFNoYWRvd1JlY2VpdmVycyxcbiAgICAgICAgICB0aGlzLnJlZ2lvblNoYWRvd0Nhc3RlcnMsXG4gICAgICAgICAgdGhpcy5zcHJpdGVTaGFkb3dDYXN0ZXJzLFxuICAgICAgICAgIHRoaXMuY2lyY2xlU2hhZG93Q2FzdGVyc1xuICAgICAgICApO1xuICAgICAgICBjb250ZXh0LmRyYXdJbWFnZSh0aGlzLmxpZ2h0aW5nU3lzdGVtLmdyb3VuZE1hc2tDYW52YXMsIDAsIDApO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnd2FsbG1hc2snOlxuICAgICAgICB0aGlzLmxpZ2h0aW5nU3lzdGVtLnByZXBhcmUoXG4gICAgICAgICAgdGhpcy5ncm91bmRTaGFkb3dSZWNlaXZlcnMsXG4gICAgICAgICAgdGhpcy53YWxsU2hhZG93UmVjZWl2ZXJzLFxuICAgICAgICAgIHRoaXMucmVnaW9uU2hhZG93Q2FzdGVycyxcbiAgICAgICAgICB0aGlzLnNwcml0ZVNoYWRvd0Nhc3RlcnMsXG4gICAgICAgICAgdGhpcy5jaXJjbGVTaGFkb3dDYXN0ZXJzXG4gICAgICAgICk7XG4gICAgICAgIGNvbnRleHQuZHJhd0ltYWdlKHRoaXMubGlnaHRpbmdTeXN0ZW0ud2FsbE1hc2tDYW52YXMsIDAsIDApO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnZ3JvdW5kbWFza2VkbGlnaHRtYXAnOlxuICAgICAgICB0aGlzLmxpZ2h0aW5nU3lzdGVtLnByZXBhcmUoXG4gICAgICAgICAgdGhpcy5ncm91bmRTaGFkb3dSZWNlaXZlcnMsXG4gICAgICAgICAgdGhpcy53YWxsU2hhZG93UmVjZWl2ZXJzLFxuICAgICAgICAgIHRoaXMucmVnaW9uU2hhZG93Q2FzdGVycyxcbiAgICAgICAgICB0aGlzLnNwcml0ZVNoYWRvd0Nhc3RlcnMsXG4gICAgICAgICAgdGhpcy5jaXJjbGVTaGFkb3dDYXN0ZXJzXG4gICAgICAgICk7XG4gICAgICAgIGNvbnRleHQuZHJhd0ltYWdlKHRoaXMubGlnaHRpbmdTeXN0ZW0uZ3JvdW5kTWFza2VkTGlnaHRNYXBDYW52YXMsIDAsIDApO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnd2FsbG1hc2tlZGxpZ2h0bWFwJzpcbiAgICAgICAgdGhpcy5saWdodGluZ1N5c3RlbS5wcmVwYXJlKFxuICAgICAgICAgIHRoaXMuZ3JvdW5kU2hhZG93UmVjZWl2ZXJzLFxuICAgICAgICAgIHRoaXMud2FsbFNoYWRvd1JlY2VpdmVycyxcbiAgICAgICAgICB0aGlzLnJlZ2lvblNoYWRvd0Nhc3RlcnMsXG4gICAgICAgICAgdGhpcy5zcHJpdGVTaGFkb3dDYXN0ZXJzLFxuICAgICAgICAgIHRoaXMuY2lyY2xlU2hhZG93Q2FzdGVyc1xuICAgICAgICApO1xuICAgICAgICBjb250ZXh0LmRyYXdJbWFnZSh0aGlzLmxpZ2h0aW5nU3lzdGVtLndhbGxNYXNrZWRMaWdodE1hcENhbnZhcywgMCwgMCk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdsaWdodG1hcCc6XG4gICAgICAgIHRoaXMubGlnaHRpbmdTeXN0ZW0ucHJlcGFyZShcbiAgICAgICAgICB0aGlzLmdyb3VuZFNoYWRvd1JlY2VpdmVycyxcbiAgICAgICAgICB0aGlzLndhbGxTaGFkb3dSZWNlaXZlcnMsXG4gICAgICAgICAgdGhpcy5yZWdpb25TaGFkb3dDYXN0ZXJzLFxuICAgICAgICAgIHRoaXMuc3ByaXRlU2hhZG93Q2FzdGVycyxcbiAgICAgICAgICB0aGlzLmNpcmNsZVNoYWRvd0Nhc3RlcnNcbiAgICAgICAgKTtcbiAgICAgICAgY29udGV4dC5kcmF3SW1hZ2UodGhpcy5saWdodGluZ1N5c3RlbS5ncm91bmRNYXNrZWRMaWdodE1hcENhbnZhcywgMCwgMCk7XG4gICAgICAgIGNvbnRleHQuZHJhd0ltYWdlKHRoaXMubGlnaHRpbmdTeXN0ZW0ud2FsbE1hc2tlZExpZ2h0TWFwQ2FudmFzLCAwLCAwKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgY29udGV4dC5yZXN0b3JlKCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IHBsdWNrIH0gZnJvbSAnQGJhc2VtZW50dW5pdmVyc2UvdXRpbHMnO1xuaW1wb3J0IHsgdmVjIH0gZnJvbSAnQGJhc2VtZW50dW5pdmVyc2UvdmVjJztcbmltcG9ydCB7IENpcmNsZVNoYWRvd0Nhc3RlciB9IGZyb20gJy4vQ2lyY2xlU2hhZG93Q2FzdGVyJztcbmltcG9ydCBHYW1lIGZyb20gJy4vR2FtZSc7XG5pbXBvcnQgeyBHcm91bmRTaGFkb3dSZWNlaXZlciB9IGZyb20gJy4vR3JvdW5kU2hhZG93UmVjZWl2ZXInO1xuaW1wb3J0IHsgTGlnaHQgfSBmcm9tICcuL0xpZ2h0JztcbmltcG9ydCB7IFJlZ2lvblNoYWRvd0Nhc3RlciB9IGZyb20gJy4vUmVnaW9uU2hhZG93Q2FzdGVyJztcbmltcG9ydCB7IFNwcml0ZVNoYWRvd0Nhc3RlciB9IGZyb20gJy4vU3ByaXRlU2hhZG93Q2FzdGVyJztcbmltcG9ydCB7IFNpZGUgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7IHJlY3RhbmdsZVRvSW50ZXJ2YWwgfSBmcm9tICcuL3V0aWxzJztcbmltcG9ydCB7IFdhbGxTaGFkb3dSZWNlaXZlciB9IGZyb20gJy4vV2FsbFNoYWRvd1JlY2VpdmVyJztcblxuZXhwb3J0IGNsYXNzIExpZ2h0aW5nU3lzdGVtIHtcbiAgcHVibGljIHN0YXRpYyByZWFkb25seSBXQUxMX0xJR0hUSU5HX1lfT0ZGU0VUID0gLTMwO1xuICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IE1FUkdFX01BWF9JVEVSQVRJT05TID0gMTAwO1xuICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IE1FUkdFX09SREVSID0gW1xuICAgICdkdXBsaWNhdGUnLFxuICAgIFNpZGUuQm90dG9tLFxuICAgIFNpZGUuUmlnaHQsXG4gICAgU2lkZS5Ub3AsXG4gICAgU2lkZS5MZWZ0LFxuICBdO1xuXG4gIHB1YmxpYyBhbWJpZW50TGlnaHRDb2xvdXIgPSAnYmxhY2snO1xuICBwdWJsaWMgbGlnaHRzOiBMaWdodFtdID0gW107XG5cbiAgcHVibGljIGdyb3VuZE1hc2tDYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xuICBwcml2YXRlIGdyb3VuZE1hc2tDb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XG5cbiAgcHVibGljIHdhbGxNYXNrQ2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudDtcbiAgcHJpdmF0ZSB3YWxsTWFza0NvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcblxuICBwdWJsaWMgd2FsbE1hc2tlZExpZ2h0TWFwQ2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudDtcbiAgcHJpdmF0ZSB3YWxsTWFza2VkTGlnaHRNYXBDb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XG5cbiAgcHVibGljIGdyb3VuZE1hc2tlZExpZ2h0TWFwQ2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudDtcbiAgcHJpdmF0ZSBncm91bmRNYXNrZWRMaWdodE1hcENvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcblxuICBwdWJsaWMgaW5pdGlhbGlzZSgpIHtcbiAgICB0aGlzLmdyb3VuZE1hc2tDYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICB0aGlzLmdyb3VuZE1hc2tDYW52YXMud2lkdGggPSBHYW1lLnNjcmVlbi54O1xuICAgIHRoaXMuZ3JvdW5kTWFza0NhbnZhcy5oZWlnaHQgPSBHYW1lLnNjcmVlbi55O1xuICAgIHRoaXMuZ3JvdW5kTWFza0NvbnRleHQgPSB0aGlzLmdyb3VuZE1hc2tDYW52YXMuZ2V0Q29udGV4dCgnMmQnKSE7XG5cbiAgICB0aGlzLndhbGxNYXNrQ2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgdGhpcy53YWxsTWFza0NhbnZhcy53aWR0aCA9IEdhbWUuc2NyZWVuLng7XG4gICAgdGhpcy53YWxsTWFza0NhbnZhcy5oZWlnaHQgPSBHYW1lLnNjcmVlbi55O1xuICAgIHRoaXMud2FsbE1hc2tDb250ZXh0ID0gdGhpcy53YWxsTWFza0NhbnZhcy5nZXRDb250ZXh0KCcyZCcpITtcblxuICAgIHRoaXMud2FsbE1hc2tlZExpZ2h0TWFwQ2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgdGhpcy53YWxsTWFza2VkTGlnaHRNYXBDYW52YXMud2lkdGggPSBHYW1lLnNjcmVlbi54O1xuICAgIHRoaXMud2FsbE1hc2tlZExpZ2h0TWFwQ2FudmFzLmhlaWdodCA9IEdhbWUuc2NyZWVuLnk7XG4gICAgdGhpcy53YWxsTWFza2VkTGlnaHRNYXBDb250ZXh0ID1cbiAgICAgIHRoaXMud2FsbE1hc2tlZExpZ2h0TWFwQ2FudmFzLmdldENvbnRleHQoJzJkJykhO1xuXG4gICAgdGhpcy5ncm91bmRNYXNrZWRMaWdodE1hcENhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgIHRoaXMuZ3JvdW5kTWFza2VkTGlnaHRNYXBDYW52YXMud2lkdGggPSBHYW1lLnNjcmVlbi54O1xuICAgIHRoaXMuZ3JvdW5kTWFza2VkTGlnaHRNYXBDYW52YXMuaGVpZ2h0ID0gR2FtZS5zY3JlZW4ueTtcbiAgICB0aGlzLmdyb3VuZE1hc2tlZExpZ2h0TWFwQ29udGV4dCA9XG4gICAgICB0aGlzLmdyb3VuZE1hc2tlZExpZ2h0TWFwQ2FudmFzLmdldENvbnRleHQoJzJkJykhO1xuICB9XG5cbiAgcHVibGljIHVwZGF0ZShkdDogbnVtYmVyKSB7XG4gICAgdGhpcy5saWdodHMuZm9yRWFjaChsaWdodCA9PiBsaWdodC51cGRhdGUoZHQpKTtcbiAgfVxuXG4gIHB1YmxpYyBwcmVwYXJlKFxuICAgIGdyb3VuZFNoYWRvd1JlY2VpdmVyczogR3JvdW5kU2hhZG93UmVjZWl2ZXJbXSxcbiAgICB3YWxsU2hhZG93UmVjZWl2ZXJzOiBXYWxsU2hhZG93UmVjZWl2ZXJbXSxcbiAgICByZWdpb25TaGFkb3dDYXN0ZXJzOiBSZWdpb25TaGFkb3dDYXN0ZXJbXSxcbiAgICBzcHJpdGVTaGFkb3dDYXN0ZXJzOiBTcHJpdGVTaGFkb3dDYXN0ZXJbXSxcbiAgICBjaXJjbGVTaGFkb3dDYXN0ZXJzOiBDaXJjbGVTaGFkb3dDYXN0ZXJbXVxuICApIHtcbiAgICB0aGlzLmxpZ2h0cy5mb3JFYWNoKGxpZ2h0ID0+XG4gICAgICBsaWdodC5wcmVwYXJlKFxuICAgICAgICBncm91bmRTaGFkb3dSZWNlaXZlcnMsXG4gICAgICAgIHdhbGxTaGFkb3dSZWNlaXZlcnMsXG4gICAgICAgIHJlZ2lvblNoYWRvd0Nhc3RlcnMsXG4gICAgICAgIHNwcml0ZVNoYWRvd0Nhc3RlcnMsXG4gICAgICAgIGNpcmNsZVNoYWRvd0Nhc3RlcnNcbiAgICAgIClcbiAgICApO1xuXG4gICAgLy8gUHJlcGFyZSBncm91bmQgbWFza1xuICAgIHRoaXMuZ3JvdW5kTWFza0NhbnZhcy53aWR0aCA9IEdhbWUuc2NyZWVuLng7XG4gICAgdGhpcy5ncm91bmRNYXNrQ2FudmFzLmhlaWdodCA9IEdhbWUuc2NyZWVuLnk7XG4gICAgdGhpcy5ncm91bmRNYXNrQ29udGV4dC5zYXZlKCk7XG5cbiAgICBncm91bmRTaGFkb3dSZWNlaXZlcnMuZm9yRWFjaChncm91bmQgPT4ge1xuICAgICAgZ3JvdW5kLmRyYXdNYXNrKHRoaXMuZ3JvdW5kTWFza0NvbnRleHQpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5ncm91bmRNYXNrQ29udGV4dC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnZGVzdGluYXRpb24tb3V0JztcblxuICAgIHdhbGxTaGFkb3dSZWNlaXZlcnMuZm9yRWFjaCh3YWxsID0+IHtcbiAgICAgIHdhbGwuZHJhd01hc2sodGhpcy5ncm91bmRNYXNrQ29udGV4dCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmdyb3VuZE1hc2tDb250ZXh0LnJlc3RvcmUoKTtcblxuICAgIC8vIFByZXBhcmUgd2FsbCBtYXNrXG4gICAgdGhpcy53YWxsTWFza0NhbnZhcy53aWR0aCA9IEdhbWUuc2NyZWVuLng7XG4gICAgdGhpcy53YWxsTWFza0NhbnZhcy5oZWlnaHQgPSBHYW1lLnNjcmVlbi55O1xuICAgIHRoaXMud2FsbE1hc2tDb250ZXh0LnNhdmUoKTtcblxuICAgIHdhbGxTaGFkb3dSZWNlaXZlcnMuZm9yRWFjaCh3YWxsID0+IHtcbiAgICAgIHdhbGwuZHJhd01hc2sodGhpcy53YWxsTWFza0NvbnRleHQpO1xuICAgIH0pO1xuXG4gICAgdGhpcy53YWxsTWFza0NvbnRleHQucmVzdG9yZSgpO1xuXG4gICAgLy8gUHJlcGFyZSBncm91bmQtbWFzayBsaWdodG1hcCBjYW52YXNcbiAgICB0aGlzLmdyb3VuZE1hc2tlZExpZ2h0TWFwQ2FudmFzLndpZHRoID0gR2FtZS5zY3JlZW4ueDtcbiAgICB0aGlzLmdyb3VuZE1hc2tlZExpZ2h0TWFwQ2FudmFzLmhlaWdodCA9IEdhbWUuc2NyZWVuLnk7XG4gICAgdGhpcy5ncm91bmRNYXNrZWRMaWdodE1hcENvbnRleHQuc2F2ZSgpO1xuXG4gICAgdGhpcy5ncm91bmRNYXNrZWRMaWdodE1hcENvbnRleHQuZmlsbFN0eWxlID0gdGhpcy5hbWJpZW50TGlnaHRDb2xvdXI7XG4gICAgdGhpcy5ncm91bmRNYXNrZWRMaWdodE1hcENvbnRleHQuZmlsbFJlY3QoXG4gICAgICAwLFxuICAgICAgMCxcbiAgICAgIEdhbWUuc2NyZWVuLngsXG4gICAgICBHYW1lLnNjcmVlbi55XG4gICAgKTtcblxuICAgIC8vIERyYXcgbGlnaHRzXG4gICAgdGhpcy5ncm91bmRNYXNrZWRMaWdodE1hcENvbnRleHQuZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ3NjcmVlbic7XG4gICAgdGhpcy5saWdodHMuZm9yRWFjaChsaWdodCA9PiB7XG4gICAgICB0aGlzLmdyb3VuZE1hc2tlZExpZ2h0TWFwQ29udGV4dC5kcmF3SW1hZ2UoXG4gICAgICAgIGxpZ2h0Lmdyb3VuZExpZ2h0Q2FudmFzLFxuICAgICAgICBsaWdodC5wb3NpdGlvbi54IC0gbGlnaHQucmFkaXVzLFxuICAgICAgICBsaWdodC5wb3NpdGlvbi55IC0gbGlnaHQucmFkaXVzXG4gICAgICApO1xuICAgIH0pO1xuXG4gICAgLy8gTWFzayBncm91bmRcbiAgICB0aGlzLmdyb3VuZE1hc2tlZExpZ2h0TWFwQ29udGV4dC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPVxuICAgICAgJ2Rlc3RpbmF0aW9uLWF0b3AnO1xuICAgIHRoaXMuZ3JvdW5kTWFza2VkTGlnaHRNYXBDb250ZXh0LmRyYXdJbWFnZSh0aGlzLmdyb3VuZE1hc2tDYW52YXMsIDAsIDApO1xuXG4gICAgLy8gUHJlcGFyZSB3YWxsLW1hc2sgbGlnaHRtYXAgY2FudmFzXG4gICAgdGhpcy53YWxsTWFza2VkTGlnaHRNYXBDYW52YXMud2lkdGggPSBHYW1lLnNjcmVlbi54O1xuICAgIHRoaXMud2FsbE1hc2tlZExpZ2h0TWFwQ2FudmFzLmhlaWdodCA9IEdhbWUuc2NyZWVuLnk7XG4gICAgdGhpcy53YWxsTWFza2VkTGlnaHRNYXBDb250ZXh0LnNhdmUoKTtcblxuICAgIHRoaXMud2FsbE1hc2tlZExpZ2h0TWFwQ29udGV4dC5maWxsU3R5bGUgPSB0aGlzLmFtYmllbnRMaWdodENvbG91cjtcbiAgICB0aGlzLndhbGxNYXNrZWRMaWdodE1hcENvbnRleHQuZmlsbFJlY3QoMCwgMCwgR2FtZS5zY3JlZW4ueCwgR2FtZS5zY3JlZW4ueSk7XG5cbiAgICAvLyBEcmF3IGxpZ2h0c1xuICAgIHRoaXMud2FsbE1hc2tlZExpZ2h0TWFwQ29udGV4dC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnc2NyZWVuJztcbiAgICB0aGlzLmxpZ2h0cy5mb3JFYWNoKGxpZ2h0ID0+IHtcbiAgICAgIHRoaXMud2FsbE1hc2tlZExpZ2h0TWFwQ29udGV4dC5kcmF3SW1hZ2UoXG4gICAgICAgIGxpZ2h0LndhbGxMaWdodENhbnZhcyxcbiAgICAgICAgbGlnaHQucG9zaXRpb24ueCAtIGxpZ2h0LnJhZGl1cyxcbiAgICAgICAgbGlnaHQucG9zaXRpb24ueSAtIGxpZ2h0LnJhZGl1cyArIExpZ2h0aW5nU3lzdGVtLldBTExfTElHSFRJTkdfWV9PRkZTRVRcbiAgICAgICk7XG4gICAgfSk7XG5cbiAgICAvLyBNYXNrIHdhbGxcbiAgICB0aGlzLndhbGxNYXNrZWRMaWdodE1hcENvbnRleHQuZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID1cbiAgICAgICdkZXN0aW5hdGlvbi1hdG9wJztcbiAgICB0aGlzLndhbGxNYXNrZWRMaWdodE1hcENvbnRleHQuZHJhd0ltYWdlKHRoaXMud2FsbE1hc2tDYW52YXMsIDAsIDApO1xuICB9XG5cbiAgcHVibGljIGRyYXcoY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSB7XG4gICAgY29udGV4dC5zYXZlKCk7XG5cbiAgICBjb250ZXh0Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdtdWx0aXBseSc7XG4gICAgY29udGV4dC5kcmF3SW1hZ2UodGhpcy5ncm91bmRNYXNrZWRMaWdodE1hcENhbnZhcywgMCwgMCk7XG4gICAgY29udGV4dC5kcmF3SW1hZ2UodGhpcy53YWxsTWFza2VkTGlnaHRNYXBDYW52YXMsIDAsIDApO1xuXG4gICAgY29udGV4dC5yZXN0b3JlKCk7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIG1lcmdlUmVnaW9uU2hhZG93Q2FzdGVycyhcbiAgICBjYXN0ZXJzOiBSZWdpb25TaGFkb3dDYXN0ZXJbXVxuICApOiBSZWdpb25TaGFkb3dDYXN0ZXJbXSB7XG4gICAgbGV0IHJlc3VsdCA9IFsuLi5jYXN0ZXJzXS5zb3J0KChhLCBiKSA9PiB7XG4gICAgICBpZiAoYS5wb3NpdGlvbi55ID09PSBiLnBvc2l0aW9uLnkpIHtcbiAgICAgICAgcmV0dXJuIGEucG9zaXRpb24ueCAtIGIucG9zaXRpb24ueDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGEucG9zaXRpb24ueSAtIGIucG9zaXRpb24ueTtcbiAgICB9KTtcblxuICAgIGxldCBpID0gMDtcbiAgICBsZXQgbWVyZ2VzOiBbUmVnaW9uU2hhZG93Q2FzdGVyLCBSZWdpb25TaGFkb3dDYXN0ZXIsIFNpZGUgfCAnZHVwbGljYXRlJ11bXTtcbiAgICB3aGlsZSAoXG4gICAgICAobWVyZ2VzID0gTGlnaHRpbmdTeXN0ZW0uZmluZE1lcmdlcyhyZXN1bHQpKS5sZW5ndGggPiAwICYmXG4gICAgICBpKysgPCBMaWdodGluZ1N5c3RlbS5NRVJHRV9NQVhfSVRFUkFUSU9OU1xuICAgICkge1xuICAgICAgbWVyZ2VzLnNvcnQoXG4gICAgICAgIChhLCBiKSA9PlxuICAgICAgICAgIExpZ2h0aW5nU3lzdGVtLk1FUkdFX09SREVSLmluZGV4T2YoYVsyXSkgLVxuICAgICAgICAgIExpZ2h0aW5nU3lzdGVtLk1FUkdFX09SREVSLmluZGV4T2YoYlsyXSlcbiAgICAgICk7XG4gICAgICBmb3IgKGNvbnN0IG1lcmdlIG9mIG1lcmdlcykge1xuICAgICAgICBjb25zdCBhID0gcmVzdWx0LmZpbmQoY2FzdGVyID0+IGNhc3Rlci5pZCA9PT0gbWVyZ2VbMF0uaWQpO1xuICAgICAgICBjb25zdCBiID0gcmVzdWx0LmZpbmQoY2FzdGVyID0+IGNhc3Rlci5pZCA9PT0gbWVyZ2VbMV0uaWQpO1xuICAgICAgICBjb25zdCBzaWRlID0gbWVyZ2VbMl07XG5cbiAgICAgICAgaWYgKGEgPT09IHVuZGVmaW5lZCB8fCBiID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzaWRlID09PSAnZHVwbGljYXRlJykge1xuICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdC5maWx0ZXIoY2FzdGVyID0+IGNhc3Rlci5pZCAhPT0gYi5pZCk7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXN1bHQgPSByZXN1bHQuZmlsdGVyKGNhc3RlciA9PiAhW2EuaWQsIGIuaWRdLmluY2x1ZGVzKGNhc3Rlci5pZCkpO1xuICAgICAgICByZXN1bHQucHVzaChhLm1lcmdlKGIpKTtcbiAgICAgICAgYS5kZXN0cm95KCk7XG4gICAgICAgIGIuZGVzdHJveSgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIG1lcmdlV2FsbFNoYWRvd1JlY2VpdmVycyhcbiAgICByZWNlaXZlcnM6IFdhbGxTaGFkb3dSZWNlaXZlcltdXG4gICk6IFdhbGxTaGFkb3dSZWNlaXZlcltdIHtcbiAgICBsZXQgcmVzdWx0ID0gWy4uLnJlY2VpdmVyc10uc29ydCgoYSwgYikgPT4ge1xuICAgICAgaWYgKGEucG9zaXRpb24ueSA9PT0gYi5wb3NpdGlvbi55KSB7XG4gICAgICAgIHJldHVybiBhLnBvc2l0aW9uLnggLSBiLnBvc2l0aW9uLng7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBhLnBvc2l0aW9uLnkgLSBiLnBvc2l0aW9uLnk7XG4gICAgfSk7XG5cbiAgICBsZXQgaSA9IDA7XG4gICAgbGV0IG1lcmdlczogW1dhbGxTaGFkb3dSZWNlaXZlciwgV2FsbFNoYWRvd1JlY2VpdmVyLCBTaWRlIHwgJ2R1cGxpY2F0ZSddW107XG4gICAgd2hpbGUgKFxuICAgICAgKG1lcmdlcyA9IExpZ2h0aW5nU3lzdGVtLmZpbmRNZXJnZXMoXG4gICAgICAgIHJlc3VsdCxcbiAgICAgICAgKGEsIGIpID0+IGEuY29sb3VyID09PSBiLmNvbG91ciAmJiBhLnJlY2VpdmVMaWdodCA9PT0gYi5yZWNlaXZlTGlnaHRcbiAgICAgICkpLmxlbmd0aCA+IDAgJiZcbiAgICAgIGkrKyA8IExpZ2h0aW5nU3lzdGVtLk1FUkdFX01BWF9JVEVSQVRJT05TXG4gICAgKSB7XG4gICAgICBtZXJnZXMuc29ydChcbiAgICAgICAgKGEsIGIpID0+XG4gICAgICAgICAgTGlnaHRpbmdTeXN0ZW0uTUVSR0VfT1JERVIuaW5kZXhPZihhWzJdKSAtXG4gICAgICAgICAgTGlnaHRpbmdTeXN0ZW0uTUVSR0VfT1JERVIuaW5kZXhPZihiWzJdKVxuICAgICAgKTtcbiAgICAgIGZvciAoY29uc3QgbWVyZ2Ugb2YgbWVyZ2VzKSB7XG4gICAgICAgIGNvbnN0IGEgPSByZXN1bHQuZmluZChyZWNlaXZlciA9PiByZWNlaXZlci5pZCA9PT0gbWVyZ2VbMF0uaWQpO1xuICAgICAgICBjb25zdCBiID0gcmVzdWx0LmZpbmQocmVjZWl2ZXIgPT4gcmVjZWl2ZXIuaWQgPT09IG1lcmdlWzFdLmlkKTtcbiAgICAgICAgY29uc3Qgc2lkZSA9IG1lcmdlWzJdO1xuXG4gICAgICAgIGlmIChhID09PSB1bmRlZmluZWQgfHwgYiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2lkZSA9PT0gJ2R1cGxpY2F0ZScpIHtcbiAgICAgICAgICByZXN1bHQgPSByZXN1bHQuZmlsdGVyKHJlY2VpdmVyID0+IHJlY2VpdmVyLmlkICE9PSBiLmlkKTtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlc3VsdCA9IHJlc3VsdC5maWx0ZXIocmVjZWl2ZXIgPT4gIVthLmlkLCBiLmlkXS5pbmNsdWRlcyhyZWNlaXZlci5pZCkpO1xuICAgICAgICByZXN1bHQucHVzaChhLm1lcmdlKGIpKTtcbiAgICAgICAgYS5kZXN0cm95KCk7XG4gICAgICAgIGIuZGVzdHJveSgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBwcml2YXRlIHN0YXRpYyBmaW5kTWVyZ2VzPFQgZXh0ZW5kcyB7IHBvc2l0aW9uOiB2ZWM7IHNpemU6IHZlYyB9PihcbiAgICBpdGVtczogVFtdLFxuICAgIGV4dHJhQ29tcGFyaXNvbj86IChhOiBULCBiOiBUKSA9PiBib29sZWFuXG4gICk6IFtULCBULCBTaWRlIHwgJ2R1cGxpY2F0ZSddW10ge1xuICAgIGNvbnN0IHJlc3VsdDogW1QsIFQsIFNpZGUgfCAnZHVwbGljYXRlJ11bXSA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgYSA9IHJlY3RhbmdsZVRvSW50ZXJ2YWwocGx1Y2soaXRlbXNbaV0sICdwb3NpdGlvbicsICdzaXplJykpO1xuXG4gICAgICBmb3IgKGxldCBqID0gaSArIDE7IGogPCBpdGVtcy5sZW5ndGg7IGorKykge1xuICAgICAgICBjb25zdCBiID0gcmVjdGFuZ2xlVG9JbnRlcnZhbChwbHVjayhpdGVtc1tqXSwgJ3Bvc2l0aW9uJywgJ3NpemUnKSk7XG5cbiAgICAgICAgLy8gQSBhbmQgQiBhcmUgdGhlIHNhbWVcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGEudG9wID09PSBiLnRvcCAmJlxuICAgICAgICAgIGEuYm90dG9tID09PSBiLmJvdHRvbSAmJlxuICAgICAgICAgIGEubGVmdCA9PT0gYi5sZWZ0ICYmXG4gICAgICAgICAgYS5yaWdodCA9PT0gYi5yaWdodCAmJlxuICAgICAgICAgIChleHRyYUNvbXBhcmlzb24/LihpdGVtc1tpXSwgaXRlbXNbal0pID8/IHRydWUpXG4gICAgICAgICkge1xuICAgICAgICAgIHJlc3VsdC5wdXNoKFtpdGVtc1tpXSwgaXRlbXNbal0sICdkdXBsaWNhdGUnXSk7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBCIGlzIGNvbm5lY3RlZCB0byB0aGUgYm90dG9tIGVkZ2Ugb2YgQVxuICAgICAgICBpZiAoXG4gICAgICAgICAgYS5ib3R0b20gPT09IGIudG9wICYmXG4gICAgICAgICAgYS5sZWZ0ID09PSBiLmxlZnQgJiZcbiAgICAgICAgICBhLnJpZ2h0ID09PSBiLnJpZ2h0ICYmXG4gICAgICAgICAgKGV4dHJhQ29tcGFyaXNvbj8uKGl0ZW1zW2ldLCBpdGVtc1tqXSkgPz8gdHJ1ZSlcbiAgICAgICAgKSB7XG4gICAgICAgICAgcmVzdWx0LnB1c2goW2l0ZW1zW2ldLCBpdGVtc1tqXSwgU2lkZS5Cb3R0b21dKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEIgaXMgY29ubmVjdGVkIHRvIHRoZSB0b3AgZWRnZSBvZiBBXG4gICAgICAgIGlmIChcbiAgICAgICAgICBhLnRvcCA9PT0gYi5ib3R0b20gJiZcbiAgICAgICAgICBhLmxlZnQgPT09IGIubGVmdCAmJlxuICAgICAgICAgIGEucmlnaHQgPT09IGIucmlnaHQgJiZcbiAgICAgICAgICAoZXh0cmFDb21wYXJpc29uPy4oaXRlbXNbaV0sIGl0ZW1zW2pdKSA/PyB0cnVlKVxuICAgICAgICApIHtcbiAgICAgICAgICByZXN1bHQucHVzaChbaXRlbXNbaV0sIGl0ZW1zW2pdLCBTaWRlLlRvcF0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQiBpcyBjb25uZWN0ZWQgdG8gdGhlIHJpZ2h0IGVkZ2Ugb2YgQVxuICAgICAgICBpZiAoXG4gICAgICAgICAgYS5yaWdodCA9PT0gYi5sZWZ0ICYmXG4gICAgICAgICAgYS50b3AgPT09IGIudG9wICYmXG4gICAgICAgICAgYS5ib3R0b20gPT09IGIuYm90dG9tICYmXG4gICAgICAgICAgKGV4dHJhQ29tcGFyaXNvbj8uKGl0ZW1zW2ldLCBpdGVtc1tqXSkgPz8gdHJ1ZSlcbiAgICAgICAgKSB7XG4gICAgICAgICAgcmVzdWx0LnB1c2goW2l0ZW1zW2ldLCBpdGVtc1tqXSwgU2lkZS5SaWdodF0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQiBpcyBjb25uZWN0ZWQgdG8gdGhlIGxlZnQgZWRnZSBvZiBBXG4gICAgICAgIGlmIChcbiAgICAgICAgICBhLmxlZnQgPT09IGIucmlnaHQgJiZcbiAgICAgICAgICBhLnRvcCA9PT0gYi50b3AgJiZcbiAgICAgICAgICBhLmJvdHRvbSA9PT0gYi5ib3R0b20gJiZcbiAgICAgICAgICAoZXh0cmFDb21wYXJpc29uPy4oaXRlbXNbaV0sIGl0ZW1zW2pdKSA/PyB0cnVlKVxuICAgICAgICApIHtcbiAgICAgICAgICByZXN1bHQucHVzaChbaXRlbXNbaV0sIGl0ZW1zW2pdLCBTaWRlLkxlZnRdKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbn1cbiIsImltcG9ydCBEZWJ1ZyBmcm9tICdAYmFzZW1lbnR1bml2ZXJzZS9kZWJ1Zyc7XG5pbXBvcnQgSW5wdXRNYW5hZ2VyIGZyb20gJ0BiYXNlbWVudHVuaXZlcnNlL2lucHV0LW1hbmFnZXInO1xuaW1wb3J0IHsgdmVjIH0gZnJvbSAnQGJhc2VtZW50dW5pdmVyc2UvdmVjJztcbmltcG9ydCB7IHY0IGFzIHV1aWQgfSBmcm9tICd1dWlkJztcbmltcG9ydCBHYW1lIGZyb20gJy4vR2FtZSc7XG5pbXBvcnQgeyBMaWdodGluZ1NjZW5lIH0gZnJvbSAnLi9MaWdodGluZ1NjZW5lJztcbmltcG9ydCBTaGFkb3dDYXN0ZXIgZnJvbSAnLi9TaGFkb3dDYXN0ZXInO1xuaW1wb3J0IHtcbiAgY2xhbXBWZWMsXG4gIG1heFZlYyxcbiAgbWluVmVjLFxuICBwb2ludEluUmVjdGFuZ2xlLFxuICBxdWFudGl6ZVZlYyxcbn0gZnJvbSAnLi91dGlscyc7XG5cbmV4cG9ydCBjbGFzcyBSZWdpb25TaGFkb3dDYXN0ZXIgaW1wbGVtZW50cyBTaGFkb3dDYXN0ZXIge1xuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBERUZBVUxUX1NJWkUgPSB2ZWMoMTAwLCAxMDApO1xuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBERUJVR19DT0xPVVIgPSAnI2IwNSc7XG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IERFQlVHX0hPVkVSX0NPTE9VUiA9ICcjZDI3JztcbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgTUlOX1NJWkUgPSB2ZWMoMjAsIDIwKTtcbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgTUFYX1NJWkUgPSB2ZWMoMjAwLCAyMDApO1xuXG4gIHB1YmxpYyByZWFkb25seSB0eXBlID0gJ1JlZ2lvblNoYWRvd0Nhc3Rlcic7XG5cbiAgcHVibGljIGlkOiBzdHJpbmcgPSAnJztcbiAgcHVibGljIGZvbGRlcjogZGF0LkdVSSB8IG51bGwgPSBudWxsO1xuXG4gIHB1YmxpYyBwb3NpdGlvbjogdmVjID0gdmVjKCk7XG4gIHB1YmxpYyBzaXplOiB2ZWMgPSBSZWdpb25TaGFkb3dDYXN0ZXIuREVGQVVMVF9TSVpFO1xuXG4gIHB1YmxpYyBob3ZlcmVkID0gZmFsc2U7XG4gIHB1YmxpYyBzZWxlY3RlZCA9IGZhbHNlO1xuICBwcml2YXRlIGRyYWdnaW5nID0gZmFsc2U7XG4gIHByaXZhdGUgZHJhZ09mZnNldDogdmVjIHwgbnVsbCA9IG51bGw7XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKGRhdGE6IFBhcnRpYWw8UmVnaW9uU2hhZG93Q2FzdGVyPiA9IHt9KSB7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBkYXRhLCB7XG4gICAgICBpZDogZGF0YS5pZCA/PyB1dWlkKCkuc3BsaXQoJy0nKVswXSxcbiAgICB9KTtcblxuICAgIHRoaXMuZm9sZGVyID0gR2FtZS5ndWkuYWRkRm9sZGVyKGBSZWdpb25TaGFkb3dDYXN0ZXIgJHt0aGlzLmlkfWApO1xuICAgIHRoaXMuZm9sZGVyLmFkZCh0aGlzLnBvc2l0aW9uLCAneCcpO1xuICAgIHRoaXMuZm9sZGVyLmFkZCh0aGlzLnBvc2l0aW9uLCAneScpO1xuICAgIHRoaXMuZm9sZGVyXG4gICAgICAuYWRkKFxuICAgICAgICB0aGlzLnNpemUsXG4gICAgICAgICd4JyxcbiAgICAgICAgUmVnaW9uU2hhZG93Q2FzdGVyLk1JTl9TSVpFLngsXG4gICAgICAgIFJlZ2lvblNoYWRvd0Nhc3Rlci5NQVhfU0laRS54XG4gICAgICApXG4gICAgICAubmFtZSgnd2lkdGgnKTtcbiAgICB0aGlzLmZvbGRlclxuICAgICAgLmFkZChcbiAgICAgICAgdGhpcy5zaXplLFxuICAgICAgICAneScsXG4gICAgICAgIFJlZ2lvblNoYWRvd0Nhc3Rlci5NSU5fU0laRS55LFxuICAgICAgICBSZWdpb25TaGFkb3dDYXN0ZXIuTUFYX1NJWkUueVxuICAgICAgKVxuICAgICAgLm5hbWUoJ2hlaWdodCcpO1xuICB9XG5cbiAgcHVibGljIHNlcmlhbGlzZSgpOiBhbnkge1xuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiB0aGlzLnR5cGUsXG4gICAgICBpZDogdGhpcy5pZCxcbiAgICAgIHBvc2l0aW9uOiB0aGlzLnBvc2l0aW9uLFxuICAgICAgc2l6ZTogdGhpcy5zaXplLFxuICAgIH07XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGRlc2VyaWFsaXNlKGRhdGE6IGFueSk6IFJlZ2lvblNoYWRvd0Nhc3RlciB7XG4gICAgcmV0dXJuIG5ldyBSZWdpb25TaGFkb3dDYXN0ZXIoZGF0YSk7XG4gIH1cblxuICBwdWJsaWMgZGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy5mb2xkZXIpIHtcbiAgICAgIEdhbWUuZ3VpLnJlbW92ZUZvbGRlcih0aGlzLmZvbGRlcik7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIG1lcmdlKGI6IFJlZ2lvblNoYWRvd0Nhc3Rlcik6IFJlZ2lvblNoYWRvd0Nhc3RlciB7XG4gICAgY29uc3QgcG9zaXRpb24gPSBtaW5WZWModGhpcy5wb3NpdGlvbiwgYi5wb3NpdGlvbik7XG4gICAgY29uc3QgYnIgPSBtYXhWZWMoXG4gICAgICB2ZWMuYWRkKHRoaXMucG9zaXRpb24sIHRoaXMuc2l6ZSksXG4gICAgICB2ZWMuYWRkKGIucG9zaXRpb24sIGIuc2l6ZSlcbiAgICApO1xuXG4gICAgcmV0dXJuIG5ldyBSZWdpb25TaGFkb3dDYXN0ZXIoe1xuICAgICAgcG9zaXRpb24sXG4gICAgICBzaXplOiB2ZWMuc3ViKGJyLCBwb3NpdGlvbiksXG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgdXBkYXRlKGR0OiBudW1iZXIpIHtcbiAgICB0aGlzLmhvdmVyZWQgPSBwb2ludEluUmVjdGFuZ2xlKElucHV0TWFuYWdlci5tb3VzZVBvc2l0aW9uLCB7XG4gICAgICBwb3NpdGlvbjogdGhpcy5wb3NpdGlvbixcbiAgICAgIHNpemU6IHRoaXMuc2l6ZSxcbiAgICB9KTtcblxuICAgIGlmIChJbnB1dE1hbmFnZXIubW91c2VEb3duKCkgJiYgdGhpcy5zZWxlY3RlZCAmJiAhdGhpcy5kcmFnZ2luZykge1xuICAgICAgdGhpcy5kcmFnZ2luZyA9IHRydWU7XG4gICAgICB0aGlzLmRyYWdPZmZzZXQgPSB2ZWMuc3ViKElucHV0TWFuYWdlci5tb3VzZVBvc2l0aW9uLCB0aGlzLnBvc2l0aW9uKTtcbiAgICB9XG5cbiAgICBpZiAoIUlucHV0TWFuYWdlci5tb3VzZURvd24oKSkge1xuICAgICAgdGhpcy5kcmFnZ2luZyA9IGZhbHNlO1xuICAgICAgdGhpcy5kcmFnT2Zmc2V0ID0gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5zZWxlY3RlZCAmJiB0aGlzLmRyYWdnaW5nICYmIHRoaXMuZHJhZ09mZnNldCkge1xuICAgICAgaWYgKElucHV0TWFuYWdlci5rZXlEb3duKCdDb250cm9sTGVmdCcpKSB7XG4gICAgICAgIGxldCBuZXdTaXplID0gdmVjLnN1YihJbnB1dE1hbmFnZXIubW91c2VQb3NpdGlvbiwgdGhpcy5wb3NpdGlvbik7XG4gICAgICAgIGlmIChJbnB1dE1hbmFnZXIua2V5RG93bignU2hpZnRMZWZ0JykpIHtcbiAgICAgICAgICBuZXdTaXplID0gcXVhbnRpemVWZWMobmV3U2l6ZSwgTGlnaHRpbmdTY2VuZS5HUklEX1NJWkUpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2l6ZSA9IGNsYW1wVmVjKFxuICAgICAgICAgIG5ld1NpemUsXG4gICAgICAgICAgUmVnaW9uU2hhZG93Q2FzdGVyLk1JTl9TSVpFLFxuICAgICAgICAgIFJlZ2lvblNoYWRvd0Nhc3Rlci5NQVhfU0laRVxuICAgICAgICApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IG5ld1Bvc2l0aW9uID0gdmVjLnN1YihJbnB1dE1hbmFnZXIubW91c2VQb3NpdGlvbiwgdGhpcy5kcmFnT2Zmc2V0KTtcbiAgICAgICAgaWYgKElucHV0TWFuYWdlci5rZXlEb3duKCdTaGlmdExlZnQnKSkge1xuICAgICAgICAgIG5ld1Bvc2l0aW9uID0gcXVhbnRpemVWZWMobmV3UG9zaXRpb24sIExpZ2h0aW5nU2NlbmUuR1JJRF9TSVpFKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnBvc2l0aW9uID0gbmV3UG9zaXRpb247XG4gICAgICB9XG4gICAgfVxuXG4gICAgRGVidWcuYm9yZGVyKGBSZWdpb25TaGFkb3dDYXN0ZXIgJHt0aGlzLmlkfWAsICcnLCB0aGlzLnBvc2l0aW9uLCB7XG4gICAgICBsZXZlbDogMSxcbiAgICAgIHNob3dMYWJlbDogR2FtZS5ERUJVR19NT0RFU1tHYW1lLmRlYnVnTW9kZV0ubGFiZWxzLFxuICAgICAgc2hvd1ZhbHVlOiBmYWxzZSxcbiAgICAgIGxhYmVsT2Zmc2V0OiB2ZWMoMTAsIDUwKSxcbiAgICAgIHNpemU6IHRoaXMuc2l6ZSxcbiAgICAgIGJvcmRlckNvbG91cjpcbiAgICAgICAgdGhpcy5ob3ZlcmVkIHx8IHRoaXMuZHJhZ2dpbmdcbiAgICAgICAgICA/IFJlZ2lvblNoYWRvd0Nhc3Rlci5ERUJVR19IT1ZFUl9DT0xPVVJcbiAgICAgICAgICA6IFJlZ2lvblNoYWRvd0Nhc3Rlci5ERUJVR19DT0xPVVIsXG4gICAgICBib3JkZXJTdHlsZTogdGhpcy5zZWxlY3RlZCA/ICdzb2xpZCcgOiAnZGFzaGVkJyxcbiAgICB9KTtcbiAgfVxufVxuIiwiaW1wb3J0IERlYnVnIGZyb20gJ0BiYXNlbWVudHVuaXZlcnNlL2RlYnVnJztcbmltcG9ydCBJbnB1dE1hbmFnZXIgZnJvbSAnQGJhc2VtZW50dW5pdmVyc2UvaW5wdXQtbWFuYWdlcic7XG5pbXBvcnQgeyB2ZWMgfSBmcm9tICdAYmFzZW1lbnR1bml2ZXJzZS92ZWMnO1xuaW1wb3J0IHsgdjQgYXMgdXVpZCB9IGZyb20gJ3V1aWQnO1xuaW1wb3J0IEdhbWUgZnJvbSAnLi9HYW1lJztcbmltcG9ydCB7IExpZ2h0aW5nU2NlbmUgfSBmcm9tICcuL0xpZ2h0aW5nU2NlbmUnO1xuaW1wb3J0IFNoYWRvd0Nhc3RlciBmcm9tICcuL1NoYWRvd0Nhc3Rlcic7XG5pbXBvcnQgeyBjbGFtcFZlYywgcG9pbnRJblJlY3RhbmdsZSwgcXVhbnRpemVWZWMgfSBmcm9tICcuL3V0aWxzJztcblxuZXhwb3J0IGNsYXNzIFNwcml0ZVNoYWRvd0Nhc3RlciBpbXBsZW1lbnRzIFNoYWRvd0Nhc3RlciB7XG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IERFRkFVTFRfU0laRSA9IHZlYygxMDAsIDEwMCk7XG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IERFQlVHX0NPTE9VUiA9ICcjYjA1JztcbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgREVCVUdfSE9WRVJfQ09MT1VSID0gJyNkMjcnO1xuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBNSU5fU0laRSA9IHZlYygyMCwgMjApO1xuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBNQVhfU0laRSA9IHZlYygyMDAsIDIwMCk7XG5cbiAgcHVibGljIHJlYWRvbmx5IHR5cGUgPSAnU3ByaXRlU2hhZG93Q2FzdGVyJztcblxuICBwdWJsaWMgaWQ6IHN0cmluZyA9ICcnO1xuICBwdWJsaWMgZm9sZGVyOiBkYXQuR1VJIHwgbnVsbCA9IG51bGw7XG5cbiAgcHVibGljIHBvc2l0aW9uOiB2ZWMgPSB2ZWMoKTtcbiAgcHVibGljIHNpemU6IHZlYyA9IFNwcml0ZVNoYWRvd0Nhc3Rlci5ERUZBVUxUX1NJWkU7XG4gIHB1YmxpYyBzcHJpdGVOYW1lOiBzdHJpbmcgPSAnJztcblxuICBwdWJsaWMgaG92ZXJlZCA9IGZhbHNlO1xuICBwdWJsaWMgc2VsZWN0ZWQgPSBmYWxzZTtcbiAgcHJpdmF0ZSBkcmFnZ2luZyA9IGZhbHNlO1xuICBwcml2YXRlIGRyYWdPZmZzZXQ6IHZlYyB8IG51bGwgPSBudWxsO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihkYXRhOiBQYXJ0aWFsPFNwcml0ZVNoYWRvd0Nhc3Rlcj4gPSB7fSkge1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywgZGF0YSwge1xuICAgICAgaWQ6IGRhdGEuaWQgPz8gdXVpZCgpLnNwbGl0KCctJylbMF0sXG4gICAgfSk7XG5cbiAgICB0aGlzLmZvbGRlciA9IEdhbWUuZ3VpLmFkZEZvbGRlcihgU3ByaXRlU2hhZG93Q2FzdGVyICR7dGhpcy5pZH1gKTtcbiAgICB0aGlzLmZvbGRlci5hZGQodGhpcy5wb3NpdGlvbiwgJ3gnKTtcbiAgICB0aGlzLmZvbGRlci5hZGQodGhpcy5wb3NpdGlvbiwgJ3knKTtcbiAgICB0aGlzLmZvbGRlclxuICAgICAgLmFkZChcbiAgICAgICAgdGhpcy5zaXplLFxuICAgICAgICAneCcsXG4gICAgICAgIFNwcml0ZVNoYWRvd0Nhc3Rlci5NSU5fU0laRS54LFxuICAgICAgICBTcHJpdGVTaGFkb3dDYXN0ZXIuTUFYX1NJWkUueFxuICAgICAgKVxuICAgICAgLm5hbWUoJ3dpZHRoJyk7XG4gICAgdGhpcy5mb2xkZXJcbiAgICAgIC5hZGQoXG4gICAgICAgIHRoaXMuc2l6ZSxcbiAgICAgICAgJ3knLFxuICAgICAgICBTcHJpdGVTaGFkb3dDYXN0ZXIuTUlOX1NJWkUueSxcbiAgICAgICAgU3ByaXRlU2hhZG93Q2FzdGVyLk1BWF9TSVpFLnlcbiAgICAgIClcbiAgICAgIC5uYW1lKCdoZWlnaHQnKTtcbiAgICB0aGlzLmZvbGRlci5hZGQodGhpcywgJ3Nwcml0ZU5hbWUnKTtcbiAgfVxuXG4gIHB1YmxpYyBzZXJpYWxpc2UoKTogYW55IHtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogdGhpcy50eXBlLFxuICAgICAgaWQ6IHRoaXMuaWQsXG4gICAgICBwb3NpdGlvbjogdGhpcy5wb3NpdGlvbixcbiAgICAgIHNpemU6IHRoaXMuc2l6ZSxcbiAgICAgIHNwcml0ZU5hbWU6IHRoaXMuc3ByaXRlTmFtZSxcbiAgICB9O1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBkZXNlcmlhbGlzZShkYXRhOiBhbnkpOiBTcHJpdGVTaGFkb3dDYXN0ZXIge1xuICAgIHJldHVybiBuZXcgU3ByaXRlU2hhZG93Q2FzdGVyKGRhdGEpO1xuICB9XG5cbiAgcHVibGljIGRlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMuZm9sZGVyKSB7XG4gICAgICBHYW1lLmd1aS5yZW1vdmVGb2xkZXIodGhpcy5mb2xkZXIpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyB1cGRhdGUoZHQ6IG51bWJlcikge1xuICAgIHRoaXMuaG92ZXJlZCA9IHBvaW50SW5SZWN0YW5nbGUoSW5wdXRNYW5hZ2VyLm1vdXNlUG9zaXRpb24sIHtcbiAgICAgIHBvc2l0aW9uOiB0aGlzLnBvc2l0aW9uLFxuICAgICAgc2l6ZTogdGhpcy5zaXplLFxuICAgIH0pO1xuXG4gICAgaWYgKElucHV0TWFuYWdlci5tb3VzZURvd24oKSAmJiB0aGlzLnNlbGVjdGVkICYmICF0aGlzLmRyYWdnaW5nKSB7XG4gICAgICB0aGlzLmRyYWdnaW5nID0gdHJ1ZTtcbiAgICAgIHRoaXMuZHJhZ09mZnNldCA9IHZlYy5zdWIoSW5wdXRNYW5hZ2VyLm1vdXNlUG9zaXRpb24sIHRoaXMucG9zaXRpb24pO1xuICAgIH1cblxuICAgIGlmICghSW5wdXRNYW5hZ2VyLm1vdXNlRG93bigpKSB7XG4gICAgICB0aGlzLmRyYWdnaW5nID0gZmFsc2U7XG4gICAgICB0aGlzLmRyYWdPZmZzZXQgPSBudWxsO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnNlbGVjdGVkICYmIHRoaXMuZHJhZ2dpbmcgJiYgdGhpcy5kcmFnT2Zmc2V0KSB7XG4gICAgICBpZiAoSW5wdXRNYW5hZ2VyLmtleURvd24oJ0NvbnRyb2xMZWZ0JykpIHtcbiAgICAgICAgbGV0IG5ld1NpemUgPSB2ZWMuc3ViKElucHV0TWFuYWdlci5tb3VzZVBvc2l0aW9uLCB0aGlzLnBvc2l0aW9uKTtcbiAgICAgICAgaWYgKElucHV0TWFuYWdlci5rZXlEb3duKCdTaGlmdExlZnQnKSkge1xuICAgICAgICAgIG5ld1NpemUgPSBxdWFudGl6ZVZlYyhuZXdTaXplLCBMaWdodGluZ1NjZW5lLkdSSURfU0laRSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zaXplID0gY2xhbXBWZWMoXG4gICAgICAgICAgbmV3U2l6ZSxcbiAgICAgICAgICBTcHJpdGVTaGFkb3dDYXN0ZXIuTUlOX1NJWkUsXG4gICAgICAgICAgU3ByaXRlU2hhZG93Q2FzdGVyLk1BWF9TSVpFXG4gICAgICAgICk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgbmV3UG9zaXRpb24gPSB2ZWMuc3ViKElucHV0TWFuYWdlci5tb3VzZVBvc2l0aW9uLCB0aGlzLmRyYWdPZmZzZXQpO1xuICAgICAgICBpZiAoSW5wdXRNYW5hZ2VyLmtleURvd24oJ1NoaWZ0TGVmdCcpKSB7XG4gICAgICAgICAgbmV3UG9zaXRpb24gPSBxdWFudGl6ZVZlYyhuZXdQb3NpdGlvbiwgTGlnaHRpbmdTY2VuZS5HUklEX1NJWkUpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucG9zaXRpb24gPSBuZXdQb3NpdGlvbjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBEZWJ1Zy5ib3JkZXIoYFNwcml0ZVNoYWRvd0Nhc3RlciAke3RoaXMuaWR9YCwgJycsIHRoaXMucG9zaXRpb24sIHtcbiAgICAgIGxldmVsOiAxLFxuICAgICAgc2hvd0xhYmVsOiBHYW1lLkRFQlVHX01PREVTW0dhbWUuZGVidWdNb2RlXS5sYWJlbHMsXG4gICAgICBzaG93VmFsdWU6IGZhbHNlLFxuICAgICAgc2l6ZTogdGhpcy5zaXplLFxuICAgICAgYm9yZGVyQ29sb3VyOlxuICAgICAgICB0aGlzLmhvdmVyZWQgfHwgdGhpcy5kcmFnZ2luZ1xuICAgICAgICAgID8gU3ByaXRlU2hhZG93Q2FzdGVyLkRFQlVHX0hPVkVSX0NPTE9VUlxuICAgICAgICAgIDogU3ByaXRlU2hhZG93Q2FzdGVyLkRFQlVHX0NPTE9VUixcbiAgICAgIGJvcmRlclN0eWxlOiB0aGlzLnNlbGVjdGVkID8gJ3NvbGlkJyA6ICdkYXNoZWQnLFxuICAgIH0pO1xuICB9XG59XG4iLCJpbXBvcnQgRGVidWcgZnJvbSAnQGJhc2VtZW50dW5pdmVyc2UvZGVidWcnO1xuaW1wb3J0IElucHV0TWFuYWdlciBmcm9tICdAYmFzZW1lbnR1bml2ZXJzZS9pbnB1dC1tYW5hZ2VyJztcbmltcG9ydCB7IHZlYyB9IGZyb20gJ0BiYXNlbWVudHVuaXZlcnNlL3ZlYyc7XG5pbXBvcnQgeyB2NCBhcyB1dWlkIH0gZnJvbSAndXVpZCc7XG5pbXBvcnQgR2FtZSBmcm9tICcuL0dhbWUnO1xuaW1wb3J0IHsgTGlnaHRpbmdTY2VuZSB9IGZyb20gJy4vTGlnaHRpbmdTY2VuZSc7XG5pbXBvcnQge1xuICBjbGFtcFZlYyxcbiAgbWF4VmVjLFxuICBtaW5WZWMsXG4gIHBvaW50SW5SZWN0YW5nbGUsXG4gIHF1YW50aXplVmVjLFxufSBmcm9tICcuL3V0aWxzJztcblxuZXhwb3J0IGNsYXNzIFdhbGxTaGFkb3dSZWNlaXZlciB7XG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IERFRkFVTFRfU0laRSA9IHZlYygyMDAsIDIwMCk7XG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IERFRkFVTFRfQ09MT1VSID0gJyNkZGQnO1xuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBERUJVR19DT0xPVVIgPSAnIzA1Yic7XG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IERFQlVHX0hPVkVSX0NPTE9VUiA9ICcjMzhmJztcbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgTUlOX1NJWkUgPSB2ZWMoMjAsIDIwKTtcbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgTUFYX1NJWkUgPSB2ZWMoNjAwLCA2MDApO1xuXG4gIHB1YmxpYyByZWFkb25seSB0eXBlID0gJ1dhbGxTaGFkb3dSZWNlaXZlcic7XG5cbiAgcHVibGljIGlkOiBzdHJpbmcgPSAnJztcbiAgcHVibGljIGZvbGRlcjogZGF0LkdVSSB8IG51bGwgPSBudWxsO1xuXG4gIHB1YmxpYyBwb3NpdGlvbjogdmVjID0gdmVjKCk7XG4gIHB1YmxpYyBzaXplOiB2ZWMgPSBXYWxsU2hhZG93UmVjZWl2ZXIuREVGQVVMVF9TSVpFO1xuICBwdWJsaWMgY29sb3VyOiBzdHJpbmcgPSBXYWxsU2hhZG93UmVjZWl2ZXIuREVGQVVMVF9DT0xPVVI7XG4gIHB1YmxpYyByZWNlaXZlTGlnaHQ6IGJvb2xlYW4gPSB0cnVlO1xuXG4gIHB1YmxpYyBob3ZlcmVkID0gZmFsc2U7XG4gIHB1YmxpYyBzZWxlY3RlZCA9IGZhbHNlO1xuICBwcml2YXRlIGRyYWdnaW5nID0gZmFsc2U7XG4gIHByaXZhdGUgZHJhZ09mZnNldDogdmVjIHwgbnVsbCA9IG51bGw7XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKGRhdGE6IFBhcnRpYWw8V2FsbFNoYWRvd1JlY2VpdmVyPiA9IHt9KSB7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBkYXRhLCB7XG4gICAgICBpZDogZGF0YS5pZCA/PyB1dWlkKCkuc3BsaXQoJy0nKVswXSxcbiAgICB9KTtcblxuICAgIHRoaXMuZm9sZGVyID0gR2FtZS5ndWkuYWRkRm9sZGVyKGBXYWxsU2hhZG93UmVjZWl2ZXIgJHt0aGlzLmlkfWApO1xuICAgIHRoaXMuZm9sZGVyLmFkZCh0aGlzLnBvc2l0aW9uLCAneCcpO1xuICAgIHRoaXMuZm9sZGVyLmFkZCh0aGlzLnBvc2l0aW9uLCAneScpO1xuICAgIHRoaXMuZm9sZGVyXG4gICAgICAuYWRkKFxuICAgICAgICB0aGlzLnNpemUsXG4gICAgICAgICd4JyxcbiAgICAgICAgV2FsbFNoYWRvd1JlY2VpdmVyLk1JTl9TSVpFLngsXG4gICAgICAgIFdhbGxTaGFkb3dSZWNlaXZlci5NQVhfU0laRS54XG4gICAgICApXG4gICAgICAubmFtZSgnd2lkdGgnKTtcbiAgICB0aGlzLmZvbGRlclxuICAgICAgLmFkZChcbiAgICAgICAgdGhpcy5zaXplLFxuICAgICAgICAneScsXG4gICAgICAgIFdhbGxTaGFkb3dSZWNlaXZlci5NSU5fU0laRS55LFxuICAgICAgICBXYWxsU2hhZG93UmVjZWl2ZXIuTUFYX1NJWkUueVxuICAgICAgKVxuICAgICAgLm5hbWUoJ2hlaWdodCcpO1xuICAgIHRoaXMuZm9sZGVyLmFkZCh0aGlzLCAnY29sb3VyJyk7XG4gICAgdGhpcy5mb2xkZXIuYWRkKHRoaXMsICdyZWNlaXZlTGlnaHQnKTtcbiAgfVxuXG4gIHB1YmxpYyBzZXJpYWxpc2UoKTogYW55IHtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogdGhpcy50eXBlLFxuICAgICAgaWQ6IHRoaXMuaWQsXG4gICAgICBwb3NpdGlvbjogdGhpcy5wb3NpdGlvbixcbiAgICAgIHNpemU6IHRoaXMuc2l6ZSxcbiAgICAgIGNvbG91cjogdGhpcy5jb2xvdXIsXG4gICAgICByZWNlaXZlTGlnaHQ6IHRoaXMucmVjZWl2ZUxpZ2h0LFxuICAgIH07XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGRlc2VyaWFsaXNlKGRhdGE6IGFueSk6IFdhbGxTaGFkb3dSZWNlaXZlciB7XG4gICAgcmV0dXJuIG5ldyBXYWxsU2hhZG93UmVjZWl2ZXIoZGF0YSk7XG4gIH1cblxuICBwdWJsaWMgZGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy5mb2xkZXIpIHtcbiAgICAgIEdhbWUuZ3VpLnJlbW92ZUZvbGRlcih0aGlzLmZvbGRlcik7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIG1lcmdlKGI6IFdhbGxTaGFkb3dSZWNlaXZlcik6IFdhbGxTaGFkb3dSZWNlaXZlciB7XG4gICAgY29uc3QgcG9zaXRpb24gPSBtaW5WZWModGhpcy5wb3NpdGlvbiwgYi5wb3NpdGlvbik7XG4gICAgY29uc3QgYnIgPSBtYXhWZWMoXG4gICAgICB2ZWMuYWRkKHRoaXMucG9zaXRpb24sIHRoaXMuc2l6ZSksXG4gICAgICB2ZWMuYWRkKGIucG9zaXRpb24sIGIuc2l6ZSlcbiAgICApO1xuXG4gICAgcmV0dXJuIG5ldyBXYWxsU2hhZG93UmVjZWl2ZXIoe1xuICAgICAgcG9zaXRpb24sXG4gICAgICBzaXplOiB2ZWMuc3ViKGJyLCBwb3NpdGlvbiksXG4gICAgICBjb2xvdXI6IHRoaXMuY29sb3VyLFxuICAgICAgcmVjZWl2ZUxpZ2h0OiB0aGlzLnJlY2VpdmVMaWdodCxcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyB1cGRhdGUoZHQ6IG51bWJlcikge1xuICAgIHRoaXMuaG92ZXJlZCA9IHBvaW50SW5SZWN0YW5nbGUoSW5wdXRNYW5hZ2VyLm1vdXNlUG9zaXRpb24sIHtcbiAgICAgIHBvc2l0aW9uOiB0aGlzLnBvc2l0aW9uLFxuICAgICAgc2l6ZTogdGhpcy5zaXplLFxuICAgIH0pO1xuXG4gICAgaWYgKElucHV0TWFuYWdlci5tb3VzZURvd24oKSAmJiB0aGlzLnNlbGVjdGVkICYmICF0aGlzLmRyYWdnaW5nKSB7XG4gICAgICB0aGlzLmRyYWdnaW5nID0gdHJ1ZTtcbiAgICAgIHRoaXMuZHJhZ09mZnNldCA9IHZlYy5zdWIoSW5wdXRNYW5hZ2VyLm1vdXNlUG9zaXRpb24sIHRoaXMucG9zaXRpb24pO1xuICAgIH1cblxuICAgIGlmICghSW5wdXRNYW5hZ2VyLm1vdXNlRG93bigpKSB7XG4gICAgICB0aGlzLmRyYWdnaW5nID0gZmFsc2U7XG4gICAgICB0aGlzLmRyYWdPZmZzZXQgPSBudWxsO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnNlbGVjdGVkICYmIHRoaXMuZHJhZ2dpbmcgJiYgdGhpcy5kcmFnT2Zmc2V0KSB7XG4gICAgICBpZiAoSW5wdXRNYW5hZ2VyLmtleURvd24oJ0NvbnRyb2xMZWZ0JykpIHtcbiAgICAgICAgbGV0IG5ld1NpemUgPSB2ZWMuc3ViKElucHV0TWFuYWdlci5tb3VzZVBvc2l0aW9uLCB0aGlzLnBvc2l0aW9uKTtcbiAgICAgICAgaWYgKElucHV0TWFuYWdlci5rZXlEb3duKCdTaGlmdExlZnQnKSkge1xuICAgICAgICAgIG5ld1NpemUgPSBxdWFudGl6ZVZlYyhuZXdTaXplLCBMaWdodGluZ1NjZW5lLkdSSURfU0laRSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zaXplID0gY2xhbXBWZWMoXG4gICAgICAgICAgbmV3U2l6ZSxcbiAgICAgICAgICBXYWxsU2hhZG93UmVjZWl2ZXIuTUlOX1NJWkUsXG4gICAgICAgICAgV2FsbFNoYWRvd1JlY2VpdmVyLk1BWF9TSVpFXG4gICAgICAgICk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgbmV3UG9zaXRpb24gPSB2ZWMuc3ViKElucHV0TWFuYWdlci5tb3VzZVBvc2l0aW9uLCB0aGlzLmRyYWdPZmZzZXQpO1xuICAgICAgICBpZiAoSW5wdXRNYW5hZ2VyLmtleURvd24oJ1NoaWZ0TGVmdCcpKSB7XG4gICAgICAgICAgbmV3UG9zaXRpb24gPSBxdWFudGl6ZVZlYyhuZXdQb3NpdGlvbiwgTGlnaHRpbmdTY2VuZS5HUklEX1NJWkUpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucG9zaXRpb24gPSBuZXdQb3NpdGlvbjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBEZWJ1Zy5ib3JkZXIoYFdhbGxTaGFkb3dSZWNlaXZlciAke3RoaXMuaWR9YCwgJycsIHRoaXMucG9zaXRpb24sIHtcbiAgICAgIGxldmVsOiAxLFxuICAgICAgc2hvd0xhYmVsOiBHYW1lLkRFQlVHX01PREVTW0dhbWUuZGVidWdNb2RlXS5sYWJlbHMsXG4gICAgICBzaG93VmFsdWU6IGZhbHNlLFxuICAgICAgbGFiZWxPZmZzZXQ6IHZlYygxMCwgMzApLFxuICAgICAgc2l6ZTogdGhpcy5zaXplLFxuICAgICAgYm9yZGVyQ29sb3VyOlxuICAgICAgICB0aGlzLmhvdmVyZWQgfHwgdGhpcy5kcmFnZ2luZ1xuICAgICAgICAgID8gV2FsbFNoYWRvd1JlY2VpdmVyLkRFQlVHX0hPVkVSX0NPTE9VUlxuICAgICAgICAgIDogV2FsbFNoYWRvd1JlY2VpdmVyLkRFQlVHX0NPTE9VUixcbiAgICAgIGJvcmRlclN0eWxlOiB0aGlzLnNlbGVjdGVkID8gJ3NvbGlkJyA6ICdkYXNoZWQnLFxuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGRyYXcoY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSB7XG4gICAgY29udGV4dC5zYXZlKCk7XG5cbiAgICBjb250ZXh0LmZpbGxTdHlsZSA9IHRoaXMuY29sb3VyO1xuICAgIGNvbnRleHQuZmlsbFJlY3QoXG4gICAgICB0aGlzLnBvc2l0aW9uLngsXG4gICAgICB0aGlzLnBvc2l0aW9uLnksXG4gICAgICB0aGlzLnNpemUueCxcbiAgICAgIHRoaXMuc2l6ZS55XG4gICAgKTtcblxuICAgIGNvbnRleHQucmVzdG9yZSgpO1xuICB9XG5cbiAgcHVibGljIGRyYXdNYXNrKGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkge1xuICAgIGNvbnRleHQuc2F2ZSgpO1xuXG4gICAgY29udGV4dC5maWxsU3R5bGUgPSAnYmxhY2snO1xuICAgIGNvbnRleHQuZmlsbFJlY3QoXG4gICAgICB0aGlzLnBvc2l0aW9uLngsXG4gICAgICB0aGlzLnBvc2l0aW9uLnksXG4gICAgICB0aGlzLnNpemUueCxcbiAgICAgIHRoaXMuc2l6ZS55XG4gICAgKTtcblxuICAgIGNvbnRleHQucmVzdG9yZSgpO1xuICB9XG59XG4iLCJleHBvcnQgY29uc3QgRlBTX01JTiA9IDEgLyAzMDtcbiIsImltcG9ydCB7IHZlYyB9IGZyb20gJ0BiYXNlbWVudHVuaXZlcnNlL3ZlYyc7XG5cbmV4cG9ydCB0eXBlIENvbG91ciA9IHtcbiAgcjogbnVtYmVyO1xuICBnOiBudW1iZXI7XG4gIGI6IG51bWJlcjtcbiAgYTogbnVtYmVyO1xufTtcblxuZXhwb3J0IHR5cGUgTGluZSA9IHtcbiAgc3RhcnQ6IHZlYztcbiAgZW5kOiB2ZWM7XG59O1xuXG5leHBvcnQgdHlwZSBJbnRlcnZhbDFkID0ge1xuICBzdGFydDogbnVtYmVyO1xuICBlbmQ6IG51bWJlcjtcbn07XG5cbmV4cG9ydCB0eXBlIEludGVydmFsMmQgPSB7XG4gIHRvcDogbnVtYmVyO1xuICBib3R0b206IG51bWJlcjtcbiAgcmlnaHQ6IG51bWJlcjtcbiAgbGVmdDogbnVtYmVyO1xufTtcblxuZXhwb3J0IGVudW0gU2VjdG9yMWQge1xuICBCZWZvcmUgPSAnYmVmb3JlJyxcbiAgSW5zaWRlID0gJ2luc2lkZScsXG4gIEFmdGVyID0gJ2FmdGVyJyxcbn1cblxuZXhwb3J0IGVudW0gU2VjdG9yMmQge1xuICBUb3BMZWZ0ID0gJ3RvcC1sZWZ0JyxcbiAgVG9wID0gJ3RvcCcsXG4gIFRvcFJpZ2h0ID0gJ3RvcC1yaWdodCcsXG4gIExlZnQgPSAnbGVmdCcsXG4gIEluc2lkZSA9ICdpbnNpZGUnLFxuICBSaWdodCA9ICdyaWdodCcsXG4gIEJvdHRvbUxlZnQgPSAnYm90dG9tLWxlZnQnLFxuICBCb3R0b20gPSAnYm90dG9tJyxcbiAgQm90dG9tUmlnaHQgPSAnYm90dG9tLXJpZ2h0Jyxcbn1cblxuZXhwb3J0IHR5cGUgUmVjdGFuZ2xlID0ge1xuICBwb3NpdGlvbjogdmVjO1xuICBzaXplOiB2ZWM7XG59O1xuXG5leHBvcnQgdHlwZSBQb2x5Z29uVmVydGljZXMgPSAoXG4gIHwgdmVjXG4gIHwgKChjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpID0+IHZvaWQpXG4pW107XG5cbmV4cG9ydCBlbnVtIFNpZGUge1xuICBUb3AgPSAndG9wJyxcbiAgUmlnaHQgPSAncmlnaHQnLFxuICBCb3R0b20gPSAnYm90dG9tJyxcbiAgTGVmdCA9ICdsZWZ0Jyxcbn1cbiIsImltcG9ydCB7IGNsYW1wLCBmbG9hdEVxdWFscyB9IGZyb20gJ0BiYXNlbWVudHVuaXZlcnNlL3V0aWxzJztcbmltcG9ydCB7IHZlYyB9IGZyb20gJ0BiYXNlbWVudHVuaXZlcnNlL3ZlYyc7XG5pbXBvcnQge1xuICBDb2xvdXIsXG4gIEludGVydmFsMWQsXG4gIEludGVydmFsMmQsXG4gIExpbmUsXG4gIFBvbHlnb25WZXJ0aWNlcyxcbiAgUmVjdGFuZ2xlLFxuICBTZWN0b3IxZCxcbiAgU2VjdG9yMmQsXG59IGZyb20gJy4vdHlwZXMnO1xuXG4vKipcbiAqIEdldCB0aGUgbWluaW11bSBvZiBhIHNldCBvZiB2ZWN0b3JzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtaW5WZWMoLi4udmVjdG9yczogdmVjW10pOiB2ZWMge1xuICByZXR1cm4gdmVjdG9ycy5yZWR1Y2UoXG4gICAgKG1pbiwgdikgPT4gdmVjKE1hdGgubWluKG1pbi54LCB2LngpLCBNYXRoLm1pbihtaW4ueSwgdi55KSksXG4gICAgdmVjKEluZmluaXR5LCBJbmZpbml0eSlcbiAgKTtcbn1cblxuLyoqXG4gKiBHZXQgdGhlIG1heGltdW0gb2YgYSBzZXQgb2YgdmVjdG9yc1xuICovXG5leHBvcnQgZnVuY3Rpb24gbWF4VmVjKC4uLnZlY3RvcnM6IHZlY1tdKTogdmVjIHtcbiAgcmV0dXJuIHZlY3RvcnMucmVkdWNlKFxuICAgIChtYXgsIHYpID0+IHZlYyhNYXRoLm1heChtYXgueCwgdi54KSwgTWF0aC5tYXgobWF4LnksIHYueSkpLFxuICAgIHZlYygtSW5maW5pdHksIC1JbmZpbml0eSlcbiAgKTtcbn1cblxuLyoqXG4gKiBDbGFtcCBhIHZlY3RvciBiZXR3ZWVuIG1pbiBhbmQgbWF4XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjbGFtcFZlYyh2OiB2ZWMsIG1pbjogdmVjLCBtYXg6IHZlYyk6IHZlYyB7XG4gIHJldHVybiB2ZWMoY2xhbXAodi54LCBtaW4ueCwgbWF4LngpLCBjbGFtcCh2LnksIG1pbi55LCBtYXgueSkpO1xufVxuXG4vKipcbiAqIFF1YW50aXplIGEgdmVjdG9yIHRvIGEgZ3JpZFxuICovXG5leHBvcnQgZnVuY3Rpb24gcXVhbnRpemVWZWModjogdmVjLCBxdWFudDogbnVtYmVyKTogdmVjIHtcbiAgcmV0dXJuIHZlYy5tYXAodiwgbiA9PiBNYXRoLnJvdW5kKG4gLyBxdWFudCkgKiBxdWFudCk7XG59XG5cbi8qKlxuICogQ29udmVydCBhIGNvbG91ciBvYmplY3QgdG8gYSBDU1Mgc3RyaW5nXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb2xvdXJUb1N0cmluZyhjb2xvdXI6IENvbG91cik6IHN0cmluZyB7XG4gIHJldHVybiBgcmdiYSgke2NvbG91ci5yfSwgJHtjb2xvdXIuZ30sICR7Y29sb3VyLmJ9LCAke2NvbG91ci5hfSlgO1xufVxuXG4vKipcbiAqIENoZWNrIGlmIGEgcG9pbnQgaXMgaW5zaWRlIGEgMmQgaW50ZXJ2YWxcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBvaW50SW5JbnRlcnZhbChwb2ludDogdmVjLCBpbnRlcnZhbDogSW50ZXJ2YWwyZCk6IGJvb2xlYW4ge1xuICByZXR1cm4gKFxuICAgIHBvaW50LnggPj0gaW50ZXJ2YWwubGVmdCAmJlxuICAgIHBvaW50LnggPD0gaW50ZXJ2YWwucmlnaHQgJiZcbiAgICBwb2ludC55ID49IGludGVydmFsLnRvcCAmJlxuICAgIHBvaW50LnkgPD0gaW50ZXJ2YWwuYm90dG9tXG4gICk7XG59XG5cbi8qKlxuICogQ2hlY2sgaWYgYSBwb2ludCBpcyBpbnNpZGUgYW4gQUFCQiByZWN0YW5nbGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBvaW50SW5SZWN0YW5nbGUocG9pbnQ6IHZlYywgcmVjdGFuZ2xlOiBSZWN0YW5nbGUpOiBib29sZWFuIHtcbiAgcmV0dXJuIHBvaW50SW5JbnRlcnZhbChwb2ludCwgcmVjdGFuZ2xlVG9JbnRlcnZhbChyZWN0YW5nbGUpKTtcbn1cblxuLyoqXG4gKiBDaGVjayBpZiBhIGxpbmUgaW50ZXJzZWN0cyBhIDJkIGludGVydmFsIGFuZCByZXR1cm4gdGhlIGVhcmxpZXN0IHBvaW50IG9mXG4gKiBpbnRlcnNlY3Rpb25cbiAqXG4gKiBJZiB0aGUgbGluZSBzZWdtZW50IGRvZXMgbm90IGludGVyc2VjdCB0aGUgaW50ZXJ2YWwsIHJldHVybiBudWxsXG4gKlxuICogSWYgdGhlIGxpbmUgYmVnaW5zIGluc2lkZSB0aGUgaW50ZXJ2YWwsIHJldHVybiBudWxsXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBsaW5lSW5JbnRlcnZhbChsaW5lOiBMaW5lLCBpbnRlcnZhbDogSW50ZXJ2YWwyZCk6IHZlYyB8IG51bGwge1xuICBpZiAodmVjLmVxKGxpbmUuc3RhcnQsIGxpbmUuZW5kKSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgaWYgKFxuICAgIGxpbmUuc3RhcnQueCA+PSBpbnRlcnZhbC5sZWZ0ICYmXG4gICAgbGluZS5zdGFydC54IDw9IGludGVydmFsLnJpZ2h0ICYmXG4gICAgbGluZS5zdGFydC55ID49IGludGVydmFsLnRvcCAmJlxuICAgIGxpbmUuc3RhcnQueSA8PSBpbnRlcnZhbC5ib3R0b21cbiAgKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBjb25zdCBsaW5lRGVsdGFYID0gbGluZS5lbmQueCAtIGxpbmUuc3RhcnQueDtcbiAgbGV0IHR4TWluID0gKGludGVydmFsLmxlZnQgLSBsaW5lLnN0YXJ0LngpIC8gbGluZURlbHRhWDtcbiAgbGV0IHR4TWF4ID0gKGludGVydmFsLnJpZ2h0IC0gbGluZS5zdGFydC54KSAvIGxpbmVEZWx0YVg7XG5cbiAgaWYgKHR4TWluID4gdHhNYXgpIHtcbiAgICBbdHhNaW4sIHR4TWF4XSA9IFt0eE1heCwgdHhNaW5dO1xuICB9XG5cbiAgY29uc3QgbGluZURlbHRhWSA9IGxpbmUuZW5kLnkgLSBsaW5lLnN0YXJ0Lnk7XG4gIGxldCB0eU1pbiA9IChpbnRlcnZhbC50b3AgLSBsaW5lLnN0YXJ0LnkpIC8gbGluZURlbHRhWTtcbiAgbGV0IHR5TWF4ID0gKGludGVydmFsLmJvdHRvbSAtIGxpbmUuc3RhcnQueSkgLyBsaW5lRGVsdGFZO1xuXG4gIGlmICh0eU1pbiA+IHR5TWF4KSB7XG4gICAgW3R5TWluLCB0eU1heF0gPSBbdHlNYXgsIHR5TWluXTtcbiAgfVxuXG4gIC8vIENoZWNrIGlmIGludGVydmFscyBvdmVybGFwXG4gIGlmICh0eE1pbiA+IHR5TWF4IHx8IHR5TWluID4gdHhNYXgpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIC8vIEZpbmQgdGhlIGVhcmxpZXN0IGludGVyc2VjdGlvbiBwb2ludFxuICBjb25zdCB0TWluID0gTWF0aC5tYXgodHhNaW4sIHR5TWluKTtcbiAgY29uc3QgdE1heCA9IE1hdGgubWluKHR4TWF4LCB0eU1heCk7XG5cbiAgaWYgKHRNaW4gPiAxIHx8IHRNYXggPCAwKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBjb25zdCB0ID0gdE1pbiA8IDAgPyB0TWF4IDogdE1pbjtcbiAgaWYgKHQgPCAwIHx8IHQgPiAxKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHg6IGxpbmUuc3RhcnQueCArIHQgKiBsaW5lRGVsdGFYLFxuICAgIHk6IGxpbmUuc3RhcnQueSArIHQgKiBsaW5lRGVsdGFZLFxuICB9O1xufVxuXG4vKipcbiAqIENoZWNrIGlmIGEgbGluZSBpbnRlcnNlY3RzIGFuIEFBQkIgcmVjdGFuZ2xlIGFuZCByZXR1cm4gdGhlIGVhcmxpZXN0IHBvaW50XG4gKiBvZiBpbnRlcnNlY3Rpb25cbiAqXG4gKiBJZiB0aGUgbGluZSBzZWdtZW50IGRvZXMgbm90IGludGVyc2VjdCB0aGUgcmVjdGFuZ2xlLCByZXR1cm4gbnVsbFxuICpcbiAqIElmIHRoZSBsaW5lIGJlZ2lucyBpbnNpZGUgdGhlIHJlY3RhbmdsZSwgcmV0dXJuIG51bGxcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGxpbmVJblJlY3RhbmdsZShsaW5lOiBMaW5lLCByZWN0YW5nbGU6IFJlY3RhbmdsZSk6IHZlYyB8IG51bGwge1xuICByZXR1cm4gbGluZUluSW50ZXJ2YWwobGluZSwgcmVjdGFuZ2xlVG9JbnRlcnZhbChyZWN0YW5nbGUpKTtcbn1cblxuLyoqXG4gKiBDYWxjdWxhdGUgdGhlIHggcG9zaXRpb24gb2YgYSBsaW5lIHdoZXJlIGl0IGludGVyY2VwdHMgYSBnaXZlbiB5XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBsaW5lWUludGVyY2VwdChcbiAgbGluZTogTGluZSxcbiAgeTogbnVtYmVyLFxuICBhbGxvd0JlZm9yZTogYm9vbGVhbiA9IHRydWUsXG4gIGFsbG93QWZ0ZXI6IGJvb2xlYW4gPSB0cnVlXG4pOiBudW1iZXIgfCBudWxsIHtcbiAgaWYgKGZsb2F0RXF1YWxzKGxpbmUuc3RhcnQueSwgbGluZS5lbmQueSkpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGNvbnN0IHQgPSAoeSAtIGxpbmUuc3RhcnQueSkgLyAobGluZS5lbmQueSAtIGxpbmUuc3RhcnQueSk7XG4gIGlmICh0IDwgMCAmJiAhYWxsb3dCZWZvcmUpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBpZiAodCA+IDEgJiYgIWFsbG93QWZ0ZXIpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiBsaW5lLnN0YXJ0LnggKyB0ICogKGxpbmUuZW5kLnggLSBsaW5lLnN0YXJ0LngpO1xufVxuXG4vKipcbiAqIEdldCB0aGUgbGVuZ3RoIG9mIGFuIGludGVydmFsXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpbnRlcnZhbExlbmd0aChpbnRlcnZhbDogSW50ZXJ2YWwxZCk6IG51bWJlciB7XG4gIHJldHVybiBpbnRlcnZhbC5lbmQgLSBpbnRlcnZhbC5zdGFydDtcbn1cblxuLyoqXG4gKiBDb252ZXJ0IGEgMmQgaW50ZXJ2YWwgdG8gYSByZWN0YW5nbGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGludGVydmFsVG9SZWN0YW5nbGUoaW50ZXJ2YWw6IEludGVydmFsMmQpOiBSZWN0YW5nbGUge1xuICByZXR1cm4ge1xuICAgIHBvc2l0aW9uOiB2ZWMoaW50ZXJ2YWwubGVmdCwgaW50ZXJ2YWwudG9wKSxcbiAgICBzaXplOiB2ZWMoaW50ZXJ2YWwucmlnaHQgLSBpbnRlcnZhbC5sZWZ0LCBpbnRlcnZhbC5ib3R0b20gLSBpbnRlcnZhbC50b3ApLFxuICB9O1xufVxuXG4vKipcbiAqIENvbnZlcnQgYSByZWN0YW5nbGUgdG8gYSAyZCBpbnRlcnZhbFxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVjdGFuZ2xlVG9JbnRlcnZhbChyZWN0YW5nbGU6IFJlY3RhbmdsZSk6IEludGVydmFsMmQge1xuICByZXR1cm4ge1xuICAgIGxlZnQ6IHJlY3RhbmdsZS5wb3NpdGlvbi54LFxuICAgIHJpZ2h0OiByZWN0YW5nbGUucG9zaXRpb24ueCArIHJlY3RhbmdsZS5zaXplLngsXG4gICAgdG9wOiByZWN0YW5nbGUucG9zaXRpb24ueSxcbiAgICBib3R0b206IHJlY3RhbmdsZS5wb3NpdGlvbi55ICsgcmVjdGFuZ2xlLnNpemUueSxcbiAgfTtcbn1cblxuLyoqXG4gKiBGaW5kIHRoZSBvdmVybGFwIGJldHdlZW4gMiAxZCBpbnRlcnZhbHNcbiAqXG4gKiBJZiB0aGVyZSBpcyBubyBvdmVybGFwLCByZXR1cm4gbnVsbFxuICovXG5leHBvcnQgZnVuY3Rpb24gb3ZlcmxhcDFkKGE6IEludGVydmFsMWQsIGI6IEludGVydmFsMWQpOiBJbnRlcnZhbDFkIHwgbnVsbCB7XG4gIGlmIChhLmVuZCA8IGIuc3RhcnQgfHwgYS5zdGFydCA+IGIuZW5kKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHN0YXJ0OiBNYXRoLm1heChhLnN0YXJ0LCBiLnN0YXJ0KSxcbiAgICBlbmQ6IE1hdGgubWluKGEuZW5kLCBiLmVuZCksXG4gIH07XG59XG5cbi8qKlxuICogRmluZCB0aGUgb3ZlcmxhcCBiZXR3ZWVuIDIgMmQgaW50ZXJ2YWxzXG4gKlxuICogSWYgdGhlcmUgaXMgbm8gb3ZlcmxhcCwgcmV0dXJuIG51bGxcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG92ZXJsYXAyZChhOiBJbnRlcnZhbDJkLCBiOiBJbnRlcnZhbDJkKTogSW50ZXJ2YWwyZCB8IG51bGwge1xuICBjb25zdCB4T3ZlcmxhcCA9IHRoaXMub3ZlcmxhcDFkKGEubGVmdCwgYS5yaWdodCwgYi5sZWZ0LCBiLnJpZ2h0KTtcbiAgY29uc3QgeU92ZXJsYXAgPSB0aGlzLm92ZXJsYXAxZChhLnRvcCwgYS5ib3R0b20sIGIudG9wLCBiLmJvdHRvbSk7XG5cbiAgaWYgKHhPdmVybGFwICYmIHlPdmVybGFwKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGxlZnQ6IHhPdmVybGFwLnN0YXJ0LFxuICAgICAgcmlnaHQ6IHhPdmVybGFwLmVuZCxcbiAgICAgIHRvcDogeU92ZXJsYXAuc3RhcnQsXG4gICAgICBib3R0b206IHlPdmVybGFwLmVuZCxcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbi8qKlxuICogQ2hlY2sgaWYgMiBBQUJCcyBpbnRlcnNlY3RcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlY3RhbmdsZXNJbnRlcnNlY3QoYTogUmVjdGFuZ2xlLCBiOiBSZWN0YW5nbGUpOiBib29sZWFuIHtcbiAgY29uc3QgdGwxID0gYS5wb3NpdGlvbjtcbiAgY29uc3QgYnIxID0gdmVjLmFkZChhLnBvc2l0aW9uLCBhLnNpemUpO1xuICBjb25zdCB0bDIgPSBiLnBvc2l0aW9uO1xuICBjb25zdCBicjIgPSB2ZWMuYWRkKGIucG9zaXRpb24sIGIuc2l6ZSk7XG5cbiAgcmV0dXJuIHRsMS54IDwgYnIyLnggJiYgYnIxLnggPiB0bDIueCAmJiB0bDEueSA8IGJyMi55ICYmIGJyMS55ID4gdGwyLnk7XG59XG5cbi8qKlxuICogR2V0IGFuIGFycmF5IG9mIHZlcnRpY2VzIGZvciBhIHJlY3RhbmdsZSBpbiBDVyB3aW5kaW5nIG9yZGVyXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZWN0YW5nbGVWZXJ0aWNlcyhyZWN0YW5nbGU6IFJlY3RhbmdsZSk6IHZlY1tdIHtcbiAgY29uc3QgdGwgPSByZWN0YW5nbGUucG9zaXRpb247XG4gIGNvbnN0IGJyID0gdmVjLmFkZChyZWN0YW5nbGUucG9zaXRpb24sIHJlY3RhbmdsZS5zaXplKTtcblxuICByZXR1cm4gW3JlY3RhbmdsZS5wb3NpdGlvbiwgdmVjKGJyLngsIHRsLnkpLCBiciwgdmVjKHRsLngsIGJyLnkpXTtcbn1cblxuLyoqXG4gKiBDcmVhdGUgYSBwb2x5Z29uIHBhdGggb24gYSBjYW52YXMgY29udGV4dFxuICovXG5leHBvcnQgZnVuY3Rpb24gcG9seWdvbihcbiAgY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELFxuICAuLi52ZXJ0aWNlczogUG9seWdvblZlcnRpY2VzXG4pIHtcbiAgaWYgKHZlcnRpY2VzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnRleHQuYmVnaW5QYXRoKCk7XG4gIGlmICh0eXBlb2YgdmVydGljZXNbMF0gPT09ICdmdW5jdGlvbicpIHtcbiAgICB2ZXJ0aWNlc1swXShjb250ZXh0KTtcbiAgfSBlbHNlIHtcbiAgICBjb250ZXh0Lm1vdmVUbyh2ZXJ0aWNlc1swXS54LCB2ZXJ0aWNlc1swXS55KTtcbiAgfVxuICBmb3IgKGxldCBpID0gMTsgaSA8IHZlcnRpY2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHR5cGVvZiB2ZXJ0aWNlc1tpXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgKHZlcnRpY2VzW2ldIGFzIEZ1bmN0aW9uKShjb250ZXh0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29udGV4dC5saW5lVG8oKHZlcnRpY2VzW2ldIGFzIHZlYykueCwgKHZlcnRpY2VzW2ldIGFzIHZlYykueSk7XG4gICAgfVxuICB9XG4gIGNvbnRleHQuY2xvc2VQYXRoKCk7XG59XG5cbi8qKlxuICogR2V0IHRoZSBzZWN0b3Igb2YgYSBwb2ludCByZWxhdGl2ZSB0byBhIDFkIGludGVydmFsXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZWN0b3IxZChuOiBudW1iZXIsIGludGVydmFsOiBJbnRlcnZhbDFkKTogU2VjdG9yMWQge1xuICBpZiAobiA8PSBpbnRlcnZhbC5zdGFydCkge1xuICAgIHJldHVybiBTZWN0b3IxZC5CZWZvcmU7XG4gIH1cblxuICBpZiAobiA+PSBpbnRlcnZhbC5lbmQpIHtcbiAgICByZXR1cm4gU2VjdG9yMWQuQWZ0ZXI7XG4gIH1cblxuICByZXR1cm4gU2VjdG9yMWQuSW5zaWRlO1xufVxuXG4vKipcbiAqIEdldCB0aGUgc2VjdG9yIG9mIGEgcG9pbnQgcmVsYXRpdmUgdG8gYSAyZCBpbnRlcnZhbFxuICovXG5leHBvcnQgZnVuY3Rpb24gc2VjdG9yMmQocG9pbnQ6IHZlYywgaW50ZXJ2YWw6IEludGVydmFsMmQpOiBTZWN0b3IyZCB7XG4gIGNvbnN0IHggPSBzZWN0b3IxZChwb2ludC54LCB7IHN0YXJ0OiBpbnRlcnZhbC5sZWZ0LCBlbmQ6IGludGVydmFsLnJpZ2h0IH0pO1xuICBjb25zdCB5ID0gc2VjdG9yMWQocG9pbnQueSwgeyBzdGFydDogaW50ZXJ2YWwudG9wLCBlbmQ6IGludGVydmFsLmJvdHRvbSB9KTtcblxuICByZXR1cm4ge1xuICAgIFtTZWN0b3IxZC5CZWZvcmVdOiB7XG4gICAgICBbU2VjdG9yMWQuQmVmb3JlXTogU2VjdG9yMmQuVG9wTGVmdCxcbiAgICAgIFtTZWN0b3IxZC5JbnNpZGVdOiBTZWN0b3IyZC5MZWZ0LFxuICAgICAgW1NlY3RvcjFkLkFmdGVyXTogU2VjdG9yMmQuQm90dG9tTGVmdCxcbiAgICB9LFxuICAgIFtTZWN0b3IxZC5JbnNpZGVdOiB7XG4gICAgICBbU2VjdG9yMWQuQmVmb3JlXTogU2VjdG9yMmQuVG9wLFxuICAgICAgW1NlY3RvcjFkLkluc2lkZV06IFNlY3RvcjJkLkluc2lkZSxcbiAgICAgIFtTZWN0b3IxZC5BZnRlcl06IFNlY3RvcjJkLkJvdHRvbSxcbiAgICB9LFxuICAgIFtTZWN0b3IxZC5BZnRlcl06IHtcbiAgICAgIFtTZWN0b3IxZC5CZWZvcmVdOiBTZWN0b3IyZC5Ub3BSaWdodCxcbiAgICAgIFtTZWN0b3IxZC5JbnNpZGVdOiBTZWN0b3IyZC5SaWdodCxcbiAgICAgIFtTZWN0b3IxZC5BZnRlcl06IFNlY3RvcjJkLkJvdHRvbVJpZ2h0LFxuICAgIH0sXG4gIH1beF1beV07XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIk1BWFwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfbWF4LmRlZmF1bHQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiTklMXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9uaWwuZGVmYXVsdDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJwYXJzZVwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfcGFyc2UuZGVmYXVsdDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJzdHJpbmdpZnlcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX3N0cmluZ2lmeS5kZWZhdWx0O1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcInYxXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF92LmRlZmF1bHQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwidjFUb1Y2XCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF92MVRvVi5kZWZhdWx0O1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcInYzXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF92Mi5kZWZhdWx0O1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcInY0XCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF92My5kZWZhdWx0O1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcInY1XCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF92NC5kZWZhdWx0O1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcInY2XCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF92NS5kZWZhdWx0O1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcInY2VG9WMVwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfdjZUb1YuZGVmYXVsdDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJ2N1wiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfdjYuZGVmYXVsdDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJ2YWxpZGF0ZVwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfdmFsaWRhdGUuZGVmYXVsdDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJ2ZXJzaW9uXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF92ZXJzaW9uLmRlZmF1bHQ7XG4gIH1cbn0pO1xudmFyIF9tYXggPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL21heC5qc1wiKSk7XG52YXIgX25pbCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vbmlsLmpzXCIpKTtcbnZhciBfcGFyc2UgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3BhcnNlLmpzXCIpKTtcbnZhciBfc3RyaW5naWZ5ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9zdHJpbmdpZnkuanNcIikpO1xudmFyIF92ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi92MS5qc1wiKSk7XG52YXIgX3YxVG9WID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi92MVRvVjYuanNcIikpO1xudmFyIF92MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdjMuanNcIikpO1xudmFyIF92MyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdjQuanNcIikpO1xudmFyIF92NCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdjUuanNcIikpO1xudmFyIF92NSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdjYuanNcIikpO1xudmFyIF92NlRvViA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdjZUb1YxLmpzXCIpKTtcbnZhciBfdjYgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3Y3LmpzXCIpKTtcbnZhciBfdmFsaWRhdGUgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3ZhbGlkYXRlLmpzXCIpKTtcbnZhciBfdmVyc2lvbiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdmVyc2lvbi5qc1wiKSk7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KGUpIHsgcmV0dXJuIGUgJiYgZS5fX2VzTW9kdWxlID8gZSA6IHsgZGVmYXVsdDogZSB9OyB9IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgX2RlZmF1bHQgPSBleHBvcnRzLmRlZmF1bHQgPSAnZmZmZmZmZmYtZmZmZi1mZmZmLWZmZmYtZmZmZmZmZmZmZmZmJzsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbi8qXG4gKiBCcm93c2VyLWNvbXBhdGlibGUgSmF2YVNjcmlwdCBNRDVcbiAqXG4gKiBNb2RpZmljYXRpb24gb2YgSmF2YVNjcmlwdCBNRDVcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9ibHVlaW1wL0phdmFTY3JpcHQtTUQ1XG4gKlxuICogQ29weXJpZ2h0IDIwMTEsIFNlYmFzdGlhbiBUc2NoYW5cbiAqIGh0dHBzOi8vYmx1ZWltcC5uZXRcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2U6XG4gKiBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuICpcbiAqIEJhc2VkIG9uXG4gKiBBIEphdmFTY3JpcHQgaW1wbGVtZW50YXRpb24gb2YgdGhlIFJTQSBEYXRhIFNlY3VyaXR5LCBJbmMuIE1ENSBNZXNzYWdlXG4gKiBEaWdlc3QgQWxnb3JpdGhtLCBhcyBkZWZpbmVkIGluIFJGQyAxMzIxLlxuICogVmVyc2lvbiAyLjIgQ29weXJpZ2h0IChDKSBQYXVsIEpvaG5zdG9uIDE5OTkgLSAyMDA5XG4gKiBPdGhlciBjb250cmlidXRvcnM6IEdyZWcgSG9sdCwgQW5kcmV3IEtlcGVydCwgWWRuYXIsIExvc3RpbmV0XG4gKiBEaXN0cmlidXRlZCB1bmRlciB0aGUgQlNEIExpY2Vuc2VcbiAqIFNlZSBodHRwOi8vcGFqaG9tZS5vcmcudWsvY3J5cHQvbWQ1IGZvciBtb3JlIGluZm8uXG4gKi9cbmZ1bmN0aW9uIG1kNShieXRlcykge1xuICBpZiAodHlwZW9mIGJ5dGVzID09PSAnc3RyaW5nJykge1xuICAgIHZhciBtc2cgPSB1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoYnl0ZXMpKTsgLy8gVVRGOCBlc2NhcGVcblxuICAgIGJ5dGVzID0gbmV3IFVpbnQ4QXJyYXkobXNnLmxlbmd0aCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtc2cubGVuZ3RoOyArK2kpIHtcbiAgICAgIGJ5dGVzW2ldID0gbXNnLmNoYXJDb2RlQXQoaSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBtZDVUb0hleEVuY29kZWRBcnJheSh3b3Jkc1RvTWQ1KGJ5dGVzVG9Xb3JkcyhieXRlcyksIGJ5dGVzLmxlbmd0aCAqIDgpKTtcbn1cblxuLypcbiAqIENvbnZlcnQgYW4gYXJyYXkgb2YgbGl0dGxlLWVuZGlhbiB3b3JkcyB0byBhbiBhcnJheSBvZiBieXRlc1xuICovXG5mdW5jdGlvbiBtZDVUb0hleEVuY29kZWRBcnJheShpbnB1dCkge1xuICB2YXIgb3V0cHV0ID0gW107XG4gIHZhciBsZW5ndGgzMiA9IGlucHV0Lmxlbmd0aCAqIDMyO1xuICB2YXIgaGV4VGFiID0gJzAxMjM0NTY3ODlhYmNkZWYnO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDMyOyBpICs9IDgpIHtcbiAgICB2YXIgeCA9IGlucHV0W2kgPj4gNV0gPj4+IGkgJSAzMiAmIDB4ZmY7XG4gICAgdmFyIGhleCA9IHBhcnNlSW50KGhleFRhYi5jaGFyQXQoeCA+Pj4gNCAmIDB4MGYpICsgaGV4VGFiLmNoYXJBdCh4ICYgMHgwZiksIDE2KTtcbiAgICBvdXRwdXQucHVzaChoZXgpO1xuICB9XG4gIHJldHVybiBvdXRwdXQ7XG59XG5cbi8qKlxuICogQ2FsY3VsYXRlIG91dHB1dCBsZW5ndGggd2l0aCBwYWRkaW5nIGFuZCBiaXQgbGVuZ3RoXG4gKi9cbmZ1bmN0aW9uIGdldE91dHB1dExlbmd0aChpbnB1dExlbmd0aDgpIHtcbiAgcmV0dXJuIChpbnB1dExlbmd0aDggKyA2NCA+Pj4gOSA8PCA0KSArIDE0ICsgMTtcbn1cblxuLypcbiAqIENhbGN1bGF0ZSB0aGUgTUQ1IG9mIGFuIGFycmF5IG9mIGxpdHRsZS1lbmRpYW4gd29yZHMsIGFuZCBhIGJpdCBsZW5ndGguXG4gKi9cbmZ1bmN0aW9uIHdvcmRzVG9NZDUoeCwgbGVuKSB7XG4gIC8qIGFwcGVuZCBwYWRkaW5nICovXG4gIHhbbGVuID4+IDVdIHw9IDB4ODAgPDwgbGVuICUgMzI7XG4gIHhbZ2V0T3V0cHV0TGVuZ3RoKGxlbikgLSAxXSA9IGxlbjtcbiAgdmFyIGEgPSAxNzMyNTg0MTkzO1xuICB2YXIgYiA9IC0yNzE3MzM4Nzk7XG4gIHZhciBjID0gLTE3MzI1ODQxOTQ7XG4gIHZhciBkID0gMjcxNzMzODc4O1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHgubGVuZ3RoOyBpICs9IDE2KSB7XG4gICAgdmFyIG9sZGEgPSBhO1xuICAgIHZhciBvbGRiID0gYjtcbiAgICB2YXIgb2xkYyA9IGM7XG4gICAgdmFyIG9sZGQgPSBkO1xuICAgIGEgPSBtZDVmZihhLCBiLCBjLCBkLCB4W2ldLCA3LCAtNjgwODc2OTM2KTtcbiAgICBkID0gbWQ1ZmYoZCwgYSwgYiwgYywgeFtpICsgMV0sIDEyLCAtMzg5NTY0NTg2KTtcbiAgICBjID0gbWQ1ZmYoYywgZCwgYSwgYiwgeFtpICsgMl0sIDE3LCA2MDYxMDU4MTkpO1xuICAgIGIgPSBtZDVmZihiLCBjLCBkLCBhLCB4W2kgKyAzXSwgMjIsIC0xMDQ0NTI1MzMwKTtcbiAgICBhID0gbWQ1ZmYoYSwgYiwgYywgZCwgeFtpICsgNF0sIDcsIC0xNzY0MTg4OTcpO1xuICAgIGQgPSBtZDVmZihkLCBhLCBiLCBjLCB4W2kgKyA1XSwgMTIsIDEyMDAwODA0MjYpO1xuICAgIGMgPSBtZDVmZihjLCBkLCBhLCBiLCB4W2kgKyA2XSwgMTcsIC0xNDczMjMxMzQxKTtcbiAgICBiID0gbWQ1ZmYoYiwgYywgZCwgYSwgeFtpICsgN10sIDIyLCAtNDU3MDU5ODMpO1xuICAgIGEgPSBtZDVmZihhLCBiLCBjLCBkLCB4W2kgKyA4XSwgNywgMTc3MDAzNTQxNik7XG4gICAgZCA9IG1kNWZmKGQsIGEsIGIsIGMsIHhbaSArIDldLCAxMiwgLTE5NTg0MTQ0MTcpO1xuICAgIGMgPSBtZDVmZihjLCBkLCBhLCBiLCB4W2kgKyAxMF0sIDE3LCAtNDIwNjMpO1xuICAgIGIgPSBtZDVmZihiLCBjLCBkLCBhLCB4W2kgKyAxMV0sIDIyLCAtMTk5MDQwNDE2Mik7XG4gICAgYSA9IG1kNWZmKGEsIGIsIGMsIGQsIHhbaSArIDEyXSwgNywgMTgwNDYwMzY4Mik7XG4gICAgZCA9IG1kNWZmKGQsIGEsIGIsIGMsIHhbaSArIDEzXSwgMTIsIC00MDM0MTEwMSk7XG4gICAgYyA9IG1kNWZmKGMsIGQsIGEsIGIsIHhbaSArIDE0XSwgMTcsIC0xNTAyMDAyMjkwKTtcbiAgICBiID0gbWQ1ZmYoYiwgYywgZCwgYSwgeFtpICsgMTVdLCAyMiwgMTIzNjUzNTMyOSk7XG4gICAgYSA9IG1kNWdnKGEsIGIsIGMsIGQsIHhbaSArIDFdLCA1LCAtMTY1Nzk2NTEwKTtcbiAgICBkID0gbWQ1Z2coZCwgYSwgYiwgYywgeFtpICsgNl0sIDksIC0xMDY5NTAxNjMyKTtcbiAgICBjID0gbWQ1Z2coYywgZCwgYSwgYiwgeFtpICsgMTFdLCAxNCwgNjQzNzE3NzEzKTtcbiAgICBiID0gbWQ1Z2coYiwgYywgZCwgYSwgeFtpXSwgMjAsIC0zNzM4OTczMDIpO1xuICAgIGEgPSBtZDVnZyhhLCBiLCBjLCBkLCB4W2kgKyA1XSwgNSwgLTcwMTU1ODY5MSk7XG4gICAgZCA9IG1kNWdnKGQsIGEsIGIsIGMsIHhbaSArIDEwXSwgOSwgMzgwMTYwODMpO1xuICAgIGMgPSBtZDVnZyhjLCBkLCBhLCBiLCB4W2kgKyAxNV0sIDE0LCAtNjYwNDc4MzM1KTtcbiAgICBiID0gbWQ1Z2coYiwgYywgZCwgYSwgeFtpICsgNF0sIDIwLCAtNDA1NTM3ODQ4KTtcbiAgICBhID0gbWQ1Z2coYSwgYiwgYywgZCwgeFtpICsgOV0sIDUsIDU2ODQ0NjQzOCk7XG4gICAgZCA9IG1kNWdnKGQsIGEsIGIsIGMsIHhbaSArIDE0XSwgOSwgLTEwMTk4MDM2OTApO1xuICAgIGMgPSBtZDVnZyhjLCBkLCBhLCBiLCB4W2kgKyAzXSwgMTQsIC0xODczNjM5NjEpO1xuICAgIGIgPSBtZDVnZyhiLCBjLCBkLCBhLCB4W2kgKyA4XSwgMjAsIDExNjM1MzE1MDEpO1xuICAgIGEgPSBtZDVnZyhhLCBiLCBjLCBkLCB4W2kgKyAxM10sIDUsIC0xNDQ0NjgxNDY3KTtcbiAgICBkID0gbWQ1Z2coZCwgYSwgYiwgYywgeFtpICsgMl0sIDksIC01MTQwMzc4NCk7XG4gICAgYyA9IG1kNWdnKGMsIGQsIGEsIGIsIHhbaSArIDddLCAxNCwgMTczNTMyODQ3Myk7XG4gICAgYiA9IG1kNWdnKGIsIGMsIGQsIGEsIHhbaSArIDEyXSwgMjAsIC0xOTI2NjA3NzM0KTtcbiAgICBhID0gbWQ1aGgoYSwgYiwgYywgZCwgeFtpICsgNV0sIDQsIC0zNzg1NTgpO1xuICAgIGQgPSBtZDVoaChkLCBhLCBiLCBjLCB4W2kgKyA4XSwgMTEsIC0yMDIyNTc0NDYzKTtcbiAgICBjID0gbWQ1aGgoYywgZCwgYSwgYiwgeFtpICsgMTFdLCAxNiwgMTgzOTAzMDU2Mik7XG4gICAgYiA9IG1kNWhoKGIsIGMsIGQsIGEsIHhbaSArIDE0XSwgMjMsIC0zNTMwOTU1Nik7XG4gICAgYSA9IG1kNWhoKGEsIGIsIGMsIGQsIHhbaSArIDFdLCA0LCAtMTUzMDk5MjA2MCk7XG4gICAgZCA9IG1kNWhoKGQsIGEsIGIsIGMsIHhbaSArIDRdLCAxMSwgMTI3Mjg5MzM1Myk7XG4gICAgYyA9IG1kNWhoKGMsIGQsIGEsIGIsIHhbaSArIDddLCAxNiwgLTE1NTQ5NzYzMik7XG4gICAgYiA9IG1kNWhoKGIsIGMsIGQsIGEsIHhbaSArIDEwXSwgMjMsIC0xMDk0NzMwNjQwKTtcbiAgICBhID0gbWQ1aGgoYSwgYiwgYywgZCwgeFtpICsgMTNdLCA0LCA2ODEyNzkxNzQpO1xuICAgIGQgPSBtZDVoaChkLCBhLCBiLCBjLCB4W2ldLCAxMSwgLTM1ODUzNzIyMik7XG4gICAgYyA9IG1kNWhoKGMsIGQsIGEsIGIsIHhbaSArIDNdLCAxNiwgLTcyMjUyMTk3OSk7XG4gICAgYiA9IG1kNWhoKGIsIGMsIGQsIGEsIHhbaSArIDZdLCAyMywgNzYwMjkxODkpO1xuICAgIGEgPSBtZDVoaChhLCBiLCBjLCBkLCB4W2kgKyA5XSwgNCwgLTY0MDM2NDQ4Nyk7XG4gICAgZCA9IG1kNWhoKGQsIGEsIGIsIGMsIHhbaSArIDEyXSwgMTEsIC00MjE4MTU4MzUpO1xuICAgIGMgPSBtZDVoaChjLCBkLCBhLCBiLCB4W2kgKyAxNV0sIDE2LCA1MzA3NDI1MjApO1xuICAgIGIgPSBtZDVoaChiLCBjLCBkLCBhLCB4W2kgKyAyXSwgMjMsIC05OTUzMzg2NTEpO1xuICAgIGEgPSBtZDVpaShhLCBiLCBjLCBkLCB4W2ldLCA2LCAtMTk4NjMwODQ0KTtcbiAgICBkID0gbWQ1aWkoZCwgYSwgYiwgYywgeFtpICsgN10sIDEwLCAxMTI2ODkxNDE1KTtcbiAgICBjID0gbWQ1aWkoYywgZCwgYSwgYiwgeFtpICsgMTRdLCAxNSwgLTE0MTYzNTQ5MDUpO1xuICAgIGIgPSBtZDVpaShiLCBjLCBkLCBhLCB4W2kgKyA1XSwgMjEsIC01NzQzNDA1NSk7XG4gICAgYSA9IG1kNWlpKGEsIGIsIGMsIGQsIHhbaSArIDEyXSwgNiwgMTcwMDQ4NTU3MSk7XG4gICAgZCA9IG1kNWlpKGQsIGEsIGIsIGMsIHhbaSArIDNdLCAxMCwgLTE4OTQ5ODY2MDYpO1xuICAgIGMgPSBtZDVpaShjLCBkLCBhLCBiLCB4W2kgKyAxMF0sIDE1LCAtMTA1MTUyMyk7XG4gICAgYiA9IG1kNWlpKGIsIGMsIGQsIGEsIHhbaSArIDFdLCAyMSwgLTIwNTQ5MjI3OTkpO1xuICAgIGEgPSBtZDVpaShhLCBiLCBjLCBkLCB4W2kgKyA4XSwgNiwgMTg3MzMxMzM1OSk7XG4gICAgZCA9IG1kNWlpKGQsIGEsIGIsIGMsIHhbaSArIDE1XSwgMTAsIC0zMDYxMTc0NCk7XG4gICAgYyA9IG1kNWlpKGMsIGQsIGEsIGIsIHhbaSArIDZdLCAxNSwgLTE1NjAxOTgzODApO1xuICAgIGIgPSBtZDVpaShiLCBjLCBkLCBhLCB4W2kgKyAxM10sIDIxLCAxMzA5MTUxNjQ5KTtcbiAgICBhID0gbWQ1aWkoYSwgYiwgYywgZCwgeFtpICsgNF0sIDYsIC0xNDU1MjMwNzApO1xuICAgIGQgPSBtZDVpaShkLCBhLCBiLCBjLCB4W2kgKyAxMV0sIDEwLCAtMTEyMDIxMDM3OSk7XG4gICAgYyA9IG1kNWlpKGMsIGQsIGEsIGIsIHhbaSArIDJdLCAxNSwgNzE4Nzg3MjU5KTtcbiAgICBiID0gbWQ1aWkoYiwgYywgZCwgYSwgeFtpICsgOV0sIDIxLCAtMzQzNDg1NTUxKTtcbiAgICBhID0gc2FmZUFkZChhLCBvbGRhKTtcbiAgICBiID0gc2FmZUFkZChiLCBvbGRiKTtcbiAgICBjID0gc2FmZUFkZChjLCBvbGRjKTtcbiAgICBkID0gc2FmZUFkZChkLCBvbGRkKTtcbiAgfVxuICByZXR1cm4gW2EsIGIsIGMsIGRdO1xufVxuXG4vKlxuICogQ29udmVydCBhbiBhcnJheSBieXRlcyB0byBhbiBhcnJheSBvZiBsaXR0bGUtZW5kaWFuIHdvcmRzXG4gKiBDaGFyYWN0ZXJzID4yNTUgaGF2ZSB0aGVpciBoaWdoLWJ5dGUgc2lsZW50bHkgaWdub3JlZC5cbiAqL1xuZnVuY3Rpb24gYnl0ZXNUb1dvcmRzKGlucHV0KSB7XG4gIGlmIChpbnB1dC5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gW107XG4gIH1cbiAgdmFyIGxlbmd0aDggPSBpbnB1dC5sZW5ndGggKiA4O1xuICB2YXIgb3V0cHV0ID0gbmV3IFVpbnQzMkFycmF5KGdldE91dHB1dExlbmd0aChsZW5ndGg4KSk7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoODsgaSArPSA4KSB7XG4gICAgb3V0cHV0W2kgPj4gNV0gfD0gKGlucHV0W2kgLyA4XSAmIDB4ZmYpIDw8IGkgJSAzMjtcbiAgfVxuICByZXR1cm4gb3V0cHV0O1xufVxuXG4vKlxuICogQWRkIGludGVnZXJzLCB3cmFwcGluZyBhdCAyXjMyLiBUaGlzIHVzZXMgMTYtYml0IG9wZXJhdGlvbnMgaW50ZXJuYWxseVxuICogdG8gd29yayBhcm91bmQgYnVncyBpbiBzb21lIEpTIGludGVycHJldGVycy5cbiAqL1xuZnVuY3Rpb24gc2FmZUFkZCh4LCB5KSB7XG4gIHZhciBsc3cgPSAoeCAmIDB4ZmZmZikgKyAoeSAmIDB4ZmZmZik7XG4gIHZhciBtc3cgPSAoeCA+PiAxNikgKyAoeSA+PiAxNikgKyAobHN3ID4+IDE2KTtcbiAgcmV0dXJuIG1zdyA8PCAxNiB8IGxzdyAmIDB4ZmZmZjtcbn1cblxuLypcbiAqIEJpdHdpc2Ugcm90YXRlIGEgMzItYml0IG51bWJlciB0byB0aGUgbGVmdC5cbiAqL1xuZnVuY3Rpb24gYml0Um90YXRlTGVmdChudW0sIGNudCkge1xuICByZXR1cm4gbnVtIDw8IGNudCB8IG51bSA+Pj4gMzIgLSBjbnQ7XG59XG5cbi8qXG4gKiBUaGVzZSBmdW5jdGlvbnMgaW1wbGVtZW50IHRoZSBmb3VyIGJhc2ljIG9wZXJhdGlvbnMgdGhlIGFsZ29yaXRobSB1c2VzLlxuICovXG5mdW5jdGlvbiBtZDVjbW4ocSwgYSwgYiwgeCwgcywgdCkge1xuICByZXR1cm4gc2FmZUFkZChiaXRSb3RhdGVMZWZ0KHNhZmVBZGQoc2FmZUFkZChhLCBxKSwgc2FmZUFkZCh4LCB0KSksIHMpLCBiKTtcbn1cbmZ1bmN0aW9uIG1kNWZmKGEsIGIsIGMsIGQsIHgsIHMsIHQpIHtcbiAgcmV0dXJuIG1kNWNtbihiICYgYyB8IH5iICYgZCwgYSwgYiwgeCwgcywgdCk7XG59XG5mdW5jdGlvbiBtZDVnZyhhLCBiLCBjLCBkLCB4LCBzLCB0KSB7XG4gIHJldHVybiBtZDVjbW4oYiAmIGQgfCBjICYgfmQsIGEsIGIsIHgsIHMsIHQpO1xufVxuZnVuY3Rpb24gbWQ1aGgoYSwgYiwgYywgZCwgeCwgcywgdCkge1xuICByZXR1cm4gbWQ1Y21uKGIgXiBjIF4gZCwgYSwgYiwgeCwgcywgdCk7XG59XG5mdW5jdGlvbiBtZDVpaShhLCBiLCBjLCBkLCB4LCBzLCB0KSB7XG4gIHJldHVybiBtZDVjbW4oYyBeIChiIHwgfmQpLCBhLCBiLCB4LCBzLCB0KTtcbn1cbnZhciBfZGVmYXVsdCA9IGV4cG9ydHMuZGVmYXVsdCA9IG1kNTsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciByYW5kb21VVUlEID0gdHlwZW9mIGNyeXB0byAhPT0gJ3VuZGVmaW5lZCcgJiYgY3J5cHRvLnJhbmRvbVVVSUQgJiYgY3J5cHRvLnJhbmRvbVVVSUQuYmluZChjcnlwdG8pO1xudmFyIF9kZWZhdWx0ID0gZXhwb3J0cy5kZWZhdWx0ID0ge1xuICByYW5kb21VVUlEXG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIF9kZWZhdWx0ID0gZXhwb3J0cy5kZWZhdWx0ID0gJzAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMCc7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgX3ZhbGlkYXRlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi92YWxpZGF0ZS5qc1wiKSk7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KGUpIHsgcmV0dXJuIGUgJiYgZS5fX2VzTW9kdWxlID8gZSA6IHsgZGVmYXVsdDogZSB9OyB9XG5mdW5jdGlvbiBwYXJzZSh1dWlkKSB7XG4gIGlmICghKDAsIF92YWxpZGF0ZS5kZWZhdWx0KSh1dWlkKSkge1xuICAgIHRocm93IFR5cGVFcnJvcignSW52YWxpZCBVVUlEJyk7XG4gIH1cbiAgdmFyIHY7XG4gIHZhciBhcnIgPSBuZXcgVWludDhBcnJheSgxNik7XG5cbiAgLy8gUGFyc2UgIyMjIyMjIyMtLi4uLi0uLi4uLS4uLi4tLi4uLi4uLi4uLi4uXG4gIGFyclswXSA9ICh2ID0gcGFyc2VJbnQodXVpZC5zbGljZSgwLCA4KSwgMTYpKSA+Pj4gMjQ7XG4gIGFyclsxXSA9IHYgPj4+IDE2ICYgMHhmZjtcbiAgYXJyWzJdID0gdiA+Pj4gOCAmIDB4ZmY7XG4gIGFyclszXSA9IHYgJiAweGZmO1xuXG4gIC8vIFBhcnNlIC4uLi4uLi4uLSMjIyMtLi4uLi0uLi4uLS4uLi4uLi4uLi4uLlxuICBhcnJbNF0gPSAodiA9IHBhcnNlSW50KHV1aWQuc2xpY2UoOSwgMTMpLCAxNikpID4+PiA4O1xuICBhcnJbNV0gPSB2ICYgMHhmZjtcblxuICAvLyBQYXJzZSAuLi4uLi4uLi0uLi4uLSMjIyMtLi4uLi0uLi4uLi4uLi4uLi5cbiAgYXJyWzZdID0gKHYgPSBwYXJzZUludCh1dWlkLnNsaWNlKDE0LCAxOCksIDE2KSkgPj4+IDg7XG4gIGFycls3XSA9IHYgJiAweGZmO1xuXG4gIC8vIFBhcnNlIC4uLi4uLi4uLS4uLi4tLi4uLi0jIyMjLS4uLi4uLi4uLi4uLlxuICBhcnJbOF0gPSAodiA9IHBhcnNlSW50KHV1aWQuc2xpY2UoMTksIDIzKSwgMTYpKSA+Pj4gODtcbiAgYXJyWzldID0gdiAmIDB4ZmY7XG5cbiAgLy8gUGFyc2UgLi4uLi4uLi4tLi4uLi0uLi4uLS4uLi4tIyMjIyMjIyMjIyMjXG4gIC8vIChVc2UgXCIvXCIgdG8gYXZvaWQgMzItYml0IHRydW5jYXRpb24gd2hlbiBiaXQtc2hpZnRpbmcgaGlnaC1vcmRlciBieXRlcylcbiAgYXJyWzEwXSA9ICh2ID0gcGFyc2VJbnQodXVpZC5zbGljZSgyNCwgMzYpLCAxNikpIC8gMHgxMDAwMDAwMDAwMCAmIDB4ZmY7XG4gIGFyclsxMV0gPSB2IC8gMHgxMDAwMDAwMDAgJiAweGZmO1xuICBhcnJbMTJdID0gdiA+Pj4gMjQgJiAweGZmO1xuICBhcnJbMTNdID0gdiA+Pj4gMTYgJiAweGZmO1xuICBhcnJbMTRdID0gdiA+Pj4gOCAmIDB4ZmY7XG4gIGFyclsxNV0gPSB2ICYgMHhmZjtcbiAgcmV0dXJuIGFycjtcbn1cbnZhciBfZGVmYXVsdCA9IGV4cG9ydHMuZGVmYXVsdCA9IHBhcnNlOyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIF9kZWZhdWx0ID0gZXhwb3J0cy5kZWZhdWx0ID0gL14oPzpbMC05YS1mXXs4fS1bMC05YS1mXXs0fS1bMS04XVswLTlhLWZdezN9LVs4OWFiXVswLTlhLWZdezN9LVswLTlhLWZdezEyfXwwMDAwMDAwMC0wMDAwLTAwMDAtMDAwMC0wMDAwMDAwMDAwMDB8ZmZmZmZmZmYtZmZmZi1mZmZmLWZmZmYtZmZmZmZmZmZmZmZmKSQvaTsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHJuZztcbi8vIFVuaXF1ZSBJRCBjcmVhdGlvbiByZXF1aXJlcyBhIGhpZ2ggcXVhbGl0eSByYW5kb20gIyBnZW5lcmF0b3IuIEluIHRoZSBicm93c2VyIHdlIHRoZXJlZm9yZVxuLy8gcmVxdWlyZSB0aGUgY3J5cHRvIEFQSSBhbmQgZG8gbm90IHN1cHBvcnQgYnVpbHQtaW4gZmFsbGJhY2sgdG8gbG93ZXIgcXVhbGl0eSByYW5kb20gbnVtYmVyXG4vLyBnZW5lcmF0b3JzIChsaWtlIE1hdGgucmFuZG9tKCkpLlxuXG52YXIgZ2V0UmFuZG9tVmFsdWVzO1xudmFyIHJuZHM4ID0gbmV3IFVpbnQ4QXJyYXkoMTYpO1xuZnVuY3Rpb24gcm5nKCkge1xuICAvLyBsYXp5IGxvYWQgc28gdGhhdCBlbnZpcm9ubWVudHMgdGhhdCBuZWVkIHRvIHBvbHlmaWxsIGhhdmUgYSBjaGFuY2UgdG8gZG8gc29cbiAgaWYgKCFnZXRSYW5kb21WYWx1ZXMpIHtcbiAgICAvLyBnZXRSYW5kb21WYWx1ZXMgbmVlZHMgdG8gYmUgaW52b2tlZCBpbiBhIGNvbnRleHQgd2hlcmUgXCJ0aGlzXCIgaXMgYSBDcnlwdG8gaW1wbGVtZW50YXRpb24uXG4gICAgZ2V0UmFuZG9tVmFsdWVzID0gdHlwZW9mIGNyeXB0byAhPT0gJ3VuZGVmaW5lZCcgJiYgY3J5cHRvLmdldFJhbmRvbVZhbHVlcyAmJiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzLmJpbmQoY3J5cHRvKTtcbiAgICBpZiAoIWdldFJhbmRvbVZhbHVlcykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKCkgbm90IHN1cHBvcnRlZC4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS91dWlkanMvdXVpZCNnZXRyYW5kb212YWx1ZXMtbm90LXN1cHBvcnRlZCcpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZ2V0UmFuZG9tVmFsdWVzKHJuZHM4KTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbi8vIEFkYXB0ZWQgZnJvbSBDaHJpcyBWZW5lc3MnIFNIQTEgY29kZSBhdFxuLy8gaHR0cDovL3d3dy5tb3ZhYmxlLXR5cGUuY28udWsvc2NyaXB0cy9zaGExLmh0bWxcbmZ1bmN0aW9uIGYocywgeCwgeSwgeikge1xuICBzd2l0Y2ggKHMpIHtcbiAgICBjYXNlIDA6XG4gICAgICByZXR1cm4geCAmIHkgXiB+eCAmIHo7XG4gICAgY2FzZSAxOlxuICAgICAgcmV0dXJuIHggXiB5IF4gejtcbiAgICBjYXNlIDI6XG4gICAgICByZXR1cm4geCAmIHkgXiB4ICYgeiBeIHkgJiB6O1xuICAgIGNhc2UgMzpcbiAgICAgIHJldHVybiB4IF4geSBeIHo7XG4gIH1cbn1cbmZ1bmN0aW9uIFJPVEwoeCwgbikge1xuICByZXR1cm4geCA8PCBuIHwgeCA+Pj4gMzIgLSBuO1xufVxuZnVuY3Rpb24gc2hhMShieXRlcykge1xuICB2YXIgSyA9IFsweDVhODI3OTk5LCAweDZlZDllYmExLCAweDhmMWJiY2RjLCAweGNhNjJjMWQ2XTtcbiAgdmFyIEggPSBbMHg2NzQ1MjMwMSwgMHhlZmNkYWI4OSwgMHg5OGJhZGNmZSwgMHgxMDMyNTQ3NiwgMHhjM2QyZTFmMF07XG4gIGlmICh0eXBlb2YgYnl0ZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgdmFyIG1zZyA9IHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChieXRlcykpOyAvLyBVVEY4IGVzY2FwZVxuXG4gICAgYnl0ZXMgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG1zZy5sZW5ndGg7ICsraSkge1xuICAgICAgYnl0ZXMucHVzaChtc2cuY2hhckNvZGVBdChpKSk7XG4gICAgfVxuICB9IGVsc2UgaWYgKCFBcnJheS5pc0FycmF5KGJ5dGVzKSkge1xuICAgIC8vIENvbnZlcnQgQXJyYXktbGlrZSB0byBBcnJheVxuICAgIGJ5dGVzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYnl0ZXMpO1xuICB9XG4gIGJ5dGVzLnB1c2goMHg4MCk7XG4gIHZhciBsID0gYnl0ZXMubGVuZ3RoIC8gNCArIDI7XG4gIHZhciBOID0gTWF0aC5jZWlsKGwgLyAxNik7XG4gIHZhciBNID0gbmV3IEFycmF5KE4pO1xuICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgTjsgKytfaSkge1xuICAgIHZhciBhcnIgPSBuZXcgVWludDMyQXJyYXkoMTYpO1xuICAgIGZvciAodmFyIGogPSAwOyBqIDwgMTY7ICsraikge1xuICAgICAgYXJyW2pdID0gYnl0ZXNbX2kgKiA2NCArIGogKiA0XSA8PCAyNCB8IGJ5dGVzW19pICogNjQgKyBqICogNCArIDFdIDw8IDE2IHwgYnl0ZXNbX2kgKiA2NCArIGogKiA0ICsgMl0gPDwgOCB8IGJ5dGVzW19pICogNjQgKyBqICogNCArIDNdO1xuICAgIH1cbiAgICBNW19pXSA9IGFycjtcbiAgfVxuICBNW04gLSAxXVsxNF0gPSAoYnl0ZXMubGVuZ3RoIC0gMSkgKiA4IC8gTWF0aC5wb3coMiwgMzIpO1xuICBNW04gLSAxXVsxNF0gPSBNYXRoLmZsb29yKE1bTiAtIDFdWzE0XSk7XG4gIE1bTiAtIDFdWzE1XSA9IChieXRlcy5sZW5ndGggLSAxKSAqIDggJiAweGZmZmZmZmZmO1xuICBmb3IgKHZhciBfaTIgPSAwOyBfaTIgPCBOOyArK19pMikge1xuICAgIHZhciBXID0gbmV3IFVpbnQzMkFycmF5KDgwKTtcbiAgICBmb3IgKHZhciB0ID0gMDsgdCA8IDE2OyArK3QpIHtcbiAgICAgIFdbdF0gPSBNW19pMl1bdF07XG4gICAgfVxuICAgIGZvciAodmFyIF90ID0gMTY7IF90IDwgODA7ICsrX3QpIHtcbiAgICAgIFdbX3RdID0gUk9UTChXW190IC0gM10gXiBXW190IC0gOF0gXiBXW190IC0gMTRdIF4gV1tfdCAtIDE2XSwgMSk7XG4gICAgfVxuICAgIHZhciBhID0gSFswXTtcbiAgICB2YXIgYiA9IEhbMV07XG4gICAgdmFyIGMgPSBIWzJdO1xuICAgIHZhciBkID0gSFszXTtcbiAgICB2YXIgZSA9IEhbNF07XG4gICAgZm9yICh2YXIgX3QyID0gMDsgX3QyIDwgODA7ICsrX3QyKSB7XG4gICAgICB2YXIgcyA9IE1hdGguZmxvb3IoX3QyIC8gMjApO1xuICAgICAgdmFyIFQgPSBST1RMKGEsIDUpICsgZihzLCBiLCBjLCBkKSArIGUgKyBLW3NdICsgV1tfdDJdID4+PiAwO1xuICAgICAgZSA9IGQ7XG4gICAgICBkID0gYztcbiAgICAgIGMgPSBST1RMKGIsIDMwKSA+Pj4gMDtcbiAgICAgIGIgPSBhO1xuICAgICAgYSA9IFQ7XG4gICAgfVxuICAgIEhbMF0gPSBIWzBdICsgYSA+Pj4gMDtcbiAgICBIWzFdID0gSFsxXSArIGIgPj4+IDA7XG4gICAgSFsyXSA9IEhbMl0gKyBjID4+PiAwO1xuICAgIEhbM10gPSBIWzNdICsgZCA+Pj4gMDtcbiAgICBIWzRdID0gSFs0XSArIGUgPj4+IDA7XG4gIH1cbiAgcmV0dXJuIFtIWzBdID4+IDI0ICYgMHhmZiwgSFswXSA+PiAxNiAmIDB4ZmYsIEhbMF0gPj4gOCAmIDB4ZmYsIEhbMF0gJiAweGZmLCBIWzFdID4+IDI0ICYgMHhmZiwgSFsxXSA+PiAxNiAmIDB4ZmYsIEhbMV0gPj4gOCAmIDB4ZmYsIEhbMV0gJiAweGZmLCBIWzJdID4+IDI0ICYgMHhmZiwgSFsyXSA+PiAxNiAmIDB4ZmYsIEhbMl0gPj4gOCAmIDB4ZmYsIEhbMl0gJiAweGZmLCBIWzNdID4+IDI0ICYgMHhmZiwgSFszXSA+PiAxNiAmIDB4ZmYsIEhbM10gPj4gOCAmIDB4ZmYsIEhbM10gJiAweGZmLCBIWzRdID4+IDI0ICYgMHhmZiwgSFs0XSA+PiAxNiAmIDB4ZmYsIEhbNF0gPj4gOCAmIDB4ZmYsIEhbNF0gJiAweGZmXTtcbn1cbnZhciBfZGVmYXVsdCA9IGV4cG9ydHMuZGVmYXVsdCA9IHNoYTE7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5leHBvcnRzLnVuc2FmZVN0cmluZ2lmeSA9IHVuc2FmZVN0cmluZ2lmeTtcbnZhciBfdmFsaWRhdGUgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3ZhbGlkYXRlLmpzXCIpKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoZSkgeyByZXR1cm4gZSAmJiBlLl9fZXNNb2R1bGUgPyBlIDogeyBkZWZhdWx0OiBlIH07IH1cbi8qKlxuICogQ29udmVydCBhcnJheSBvZiAxNiBieXRlIHZhbHVlcyB0byBVVUlEIHN0cmluZyBmb3JtYXQgb2YgdGhlIGZvcm06XG4gKiBYWFhYWFhYWC1YWFhYLVhYWFgtWFhYWC1YWFhYWFhYWFhYWFhcbiAqL1xudmFyIGJ5dGVUb0hleCA9IFtdO1xuZm9yICh2YXIgaSA9IDA7IGkgPCAyNTY7ICsraSkge1xuICBieXRlVG9IZXgucHVzaCgoaSArIDB4MTAwKS50b1N0cmluZygxNikuc2xpY2UoMSkpO1xufVxuZnVuY3Rpb24gdW5zYWZlU3RyaW5naWZ5KGFyciwgb2Zmc2V0ID0gMCkge1xuICAvLyBOb3RlOiBCZSBjYXJlZnVsIGVkaXRpbmcgdGhpcyBjb2RlISAgSXQncyBiZWVuIHR1bmVkIGZvciBwZXJmb3JtYW5jZVxuICAvLyBhbmQgd29ya3MgaW4gd2F5cyB5b3UgbWF5IG5vdCBleHBlY3QuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdXVpZGpzL3V1aWQvcHVsbC80MzRcbiAgLy9cbiAgLy8gTm90ZSB0byBmdXR1cmUtc2VsZjogTm8sIHlvdSBjYW4ndCByZW1vdmUgdGhlIGB0b0xvd2VyQ2FzZSgpYCBjYWxsLlxuICAvLyBSRUY6IGh0dHBzOi8vZ2l0aHViLmNvbS91dWlkanMvdXVpZC9wdWxsLzY3NyNpc3N1ZWNvbW1lbnQtMTc1NzM1MTM1MVxuICByZXR1cm4gKGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDJdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgM11dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA0XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDVdXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNl1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA3XV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDhdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgOV1dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMV1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMl1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxM11dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxNF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxNV1dKS50b0xvd2VyQ2FzZSgpO1xufVxuZnVuY3Rpb24gc3RyaW5naWZ5KGFyciwgb2Zmc2V0ID0gMCkge1xuICB2YXIgdXVpZCA9IHVuc2FmZVN0cmluZ2lmeShhcnIsIG9mZnNldCk7XG4gIC8vIENvbnNpc3RlbmN5IGNoZWNrIGZvciB2YWxpZCBVVUlELiAgSWYgdGhpcyB0aHJvd3MsIGl0J3MgbGlrZWx5IGR1ZSB0byBvbmVcbiAgLy8gb2YgdGhlIGZvbGxvd2luZzpcbiAgLy8gLSBPbmUgb3IgbW9yZSBpbnB1dCBhcnJheSB2YWx1ZXMgZG9uJ3QgbWFwIHRvIGEgaGV4IG9jdGV0IChsZWFkaW5nIHRvXG4gIC8vIFwidW5kZWZpbmVkXCIgaW4gdGhlIHV1aWQpXG4gIC8vIC0gSW52YWxpZCBpbnB1dCB2YWx1ZXMgZm9yIHRoZSBSRkMgYHZlcnNpb25gIG9yIGB2YXJpYW50YCBmaWVsZHNcbiAgaWYgKCEoMCwgX3ZhbGlkYXRlLmRlZmF1bHQpKHV1aWQpKSB7XG4gICAgdGhyb3cgVHlwZUVycm9yKCdTdHJpbmdpZmllZCBVVUlEIGlzIGludmFsaWQnKTtcbiAgfVxuICByZXR1cm4gdXVpZDtcbn1cbnZhciBfZGVmYXVsdCA9IGV4cG9ydHMuZGVmYXVsdCA9IHN0cmluZ2lmeTsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfcm5nID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9ybmcuanNcIikpO1xudmFyIF9zdHJpbmdpZnkgPSByZXF1aXJlKFwiLi9zdHJpbmdpZnkuanNcIik7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KGUpIHsgcmV0dXJuIGUgJiYgZS5fX2VzTW9kdWxlID8gZSA6IHsgZGVmYXVsdDogZSB9OyB9XG4vLyAqKmB2MSgpYCAtIEdlbmVyYXRlIHRpbWUtYmFzZWQgVVVJRCoqXG4vL1xuLy8gSW5zcGlyZWQgYnkgaHR0cHM6Ly9naXRodWIuY29tL0xpb3NLL1VVSUQuanNcbi8vIGFuZCBodHRwOi8vZG9jcy5weXRob24ub3JnL2xpYnJhcnkvdXVpZC5odG1sXG5cbnZhciBfbm9kZUlkO1xudmFyIF9jbG9ja3NlcTtcblxuLy8gUHJldmlvdXMgdXVpZCBjcmVhdGlvbiB0aW1lXG52YXIgX2xhc3RNU2VjcyA9IDA7XG52YXIgX2xhc3ROU2VjcyA9IDA7XG5cbi8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdXVpZGpzL3V1aWQgZm9yIEFQSSBkZXRhaWxzXG5mdW5jdGlvbiB2MShvcHRpb25zLCBidWYsIG9mZnNldCkge1xuICB2YXIgaSA9IGJ1ZiAmJiBvZmZzZXQgfHwgMDtcbiAgdmFyIGIgPSBidWYgfHwgbmV3IEFycmF5KDE2KTtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIHZhciBub2RlID0gb3B0aW9ucy5ub2RlO1xuICB2YXIgY2xvY2tzZXEgPSBvcHRpb25zLmNsb2Nrc2VxO1xuXG4gIC8vIHYxIG9ubHk6IFVzZSBjYWNoZWQgYG5vZGVgIGFuZCBgY2xvY2tzZXFgIHZhbHVlc1xuICBpZiAoIW9wdGlvbnMuX3Y2KSB7XG4gICAgaWYgKCFub2RlKSB7XG4gICAgICBub2RlID0gX25vZGVJZDtcbiAgICB9XG4gICAgaWYgKGNsb2Nrc2VxID09IG51bGwpIHtcbiAgICAgIGNsb2Nrc2VxID0gX2Nsb2Nrc2VxO1xuICAgIH1cbiAgfVxuXG4gIC8vIEhhbmRsZSBjYXNlcyB3aGVyZSB3ZSBuZWVkIGVudHJvcHkuICBXZSBkbyB0aGlzIGxhemlseSB0byBtaW5pbWl6ZSBpc3N1ZXNcbiAgLy8gcmVsYXRlZCB0byBpbnN1ZmZpY2llbnQgc3lzdGVtIGVudHJvcHkuICBTZWUgIzE4OVxuICBpZiAobm9kZSA9PSBudWxsIHx8IGNsb2Nrc2VxID09IG51bGwpIHtcbiAgICB2YXIgc2VlZEJ5dGVzID0gb3B0aW9ucy5yYW5kb20gfHwgKG9wdGlvbnMucm5nIHx8IF9ybmcuZGVmYXVsdCkoKTtcblxuICAgIC8vIFJhbmRvbWl6ZSBub2RlXG4gICAgaWYgKG5vZGUgPT0gbnVsbCkge1xuICAgICAgbm9kZSA9IFtzZWVkQnl0ZXNbMF0sIHNlZWRCeXRlc1sxXSwgc2VlZEJ5dGVzWzJdLCBzZWVkQnl0ZXNbM10sIHNlZWRCeXRlc1s0XSwgc2VlZEJ5dGVzWzVdXTtcblxuICAgICAgLy8gdjEgb25seTogY2FjaGUgbm9kZSB2YWx1ZSBmb3IgcmV1c2VcbiAgICAgIGlmICghX25vZGVJZCAmJiAhb3B0aW9ucy5fdjYpIHtcbiAgICAgICAgLy8gcGVyIFJGQzQxMjIgNC41OiBTZXQgTUFDIG11bHRpY2FzdCBiaXQgKHYxIG9ubHkpXG4gICAgICAgIG5vZGVbMF0gfD0gMHgwMTsgLy8gU2V0IG11bHRpY2FzdCBiaXRcblxuICAgICAgICBfbm9kZUlkID0gbm9kZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSYW5kb21pemUgY2xvY2tzZXFcbiAgICBpZiAoY2xvY2tzZXEgPT0gbnVsbCkge1xuICAgICAgLy8gUGVyIDQuMi4yLCByYW5kb21pemUgKDE0IGJpdCkgY2xvY2tzZXFcbiAgICAgIGNsb2Nrc2VxID0gKHNlZWRCeXRlc1s2XSA8PCA4IHwgc2VlZEJ5dGVzWzddKSAmIDB4M2ZmZjtcbiAgICAgIGlmIChfY2xvY2tzZXEgPT09IHVuZGVmaW5lZCAmJiAhb3B0aW9ucy5fdjYpIHtcbiAgICAgICAgX2Nsb2Nrc2VxID0gY2xvY2tzZXE7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gdjEgJiB2NiB0aW1lc3RhbXBzIGFyZSAxMDAgbmFuby1zZWNvbmQgdW5pdHMgc2luY2UgdGhlIEdyZWdvcmlhbiBlcG9jaCxcbiAgLy8gKDE1ODItMTAtMTUgMDA6MDApLiAgSlNOdW1iZXJzIGFyZW4ndCBwcmVjaXNlIGVub3VnaCBmb3IgdGhpcywgc28gdGltZSBpc1xuICAvLyBoYW5kbGVkIGludGVybmFsbHkgYXMgJ21zZWNzJyAoaW50ZWdlciBtaWxsaXNlY29uZHMpIGFuZCAnbnNlY3MnXG4gIC8vICgxMDAtbmFub3NlY29uZHMgb2Zmc2V0IGZyb20gbXNlY3MpIHNpbmNlIHVuaXggZXBvY2gsIDE5NzAtMDEtMDEgMDA6MDAuXG4gIHZhciBtc2VjcyA9IG9wdGlvbnMubXNlY3MgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMubXNlY3MgOiBEYXRlLm5vdygpO1xuXG4gIC8vIFBlciA0LjIuMS4yLCB1c2UgY291bnQgb2YgdXVpZCdzIGdlbmVyYXRlZCBkdXJpbmcgdGhlIGN1cnJlbnQgY2xvY2tcbiAgLy8gY3ljbGUgdG8gc2ltdWxhdGUgaGlnaGVyIHJlc29sdXRpb24gY2xvY2tcbiAgdmFyIG5zZWNzID0gb3B0aW9ucy5uc2VjcyAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy5uc2VjcyA6IF9sYXN0TlNlY3MgKyAxO1xuXG4gIC8vIFRpbWUgc2luY2UgbGFzdCB1dWlkIGNyZWF0aW9uIChpbiBtc2VjcylcbiAgdmFyIGR0ID0gbXNlY3MgLSBfbGFzdE1TZWNzICsgKG5zZWNzIC0gX2xhc3ROU2VjcykgLyAxMDAwMDtcblxuICAvLyBQZXIgNC4yLjEuMiwgQnVtcCBjbG9ja3NlcSBvbiBjbG9jayByZWdyZXNzaW9uXG4gIGlmIChkdCA8IDAgJiYgb3B0aW9ucy5jbG9ja3NlcSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgY2xvY2tzZXEgPSBjbG9ja3NlcSArIDEgJiAweDNmZmY7XG4gIH1cblxuICAvLyBSZXNldCBuc2VjcyBpZiBjbG9jayByZWdyZXNzZXMgKG5ldyBjbG9ja3NlcSkgb3Igd2UndmUgbW92ZWQgb250byBhIG5ld1xuICAvLyB0aW1lIGludGVydmFsXG4gIGlmICgoZHQgPCAwIHx8IG1zZWNzID4gX2xhc3RNU2VjcykgJiYgb3B0aW9ucy5uc2VjcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgbnNlY3MgPSAwO1xuICB9XG5cbiAgLy8gUGVyIDQuMi4xLjIgVGhyb3cgZXJyb3IgaWYgdG9vIG1hbnkgdXVpZHMgYXJlIHJlcXVlc3RlZFxuICBpZiAobnNlY3MgPj0gMTAwMDApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJ1dWlkLnYxKCk6IENhbid0IGNyZWF0ZSBtb3JlIHRoYW4gMTBNIHV1aWRzL3NlY1wiKTtcbiAgfVxuICBfbGFzdE1TZWNzID0gbXNlY3M7XG4gIF9sYXN0TlNlY3MgPSBuc2VjcztcbiAgX2Nsb2Nrc2VxID0gY2xvY2tzZXE7XG5cbiAgLy8gUGVyIDQuMS40IC0gQ29udmVydCBmcm9tIHVuaXggZXBvY2ggdG8gR3JlZ29yaWFuIGVwb2NoXG4gIG1zZWNzICs9IDEyMjE5MjkyODAwMDAwO1xuXG4gIC8vIGB0aW1lX2xvd2BcbiAgdmFyIHRsID0gKChtc2VjcyAmIDB4ZmZmZmZmZikgKiAxMDAwMCArIG5zZWNzKSAlIDB4MTAwMDAwMDAwO1xuICBiW2krK10gPSB0bCA+Pj4gMjQgJiAweGZmO1xuICBiW2krK10gPSB0bCA+Pj4gMTYgJiAweGZmO1xuICBiW2krK10gPSB0bCA+Pj4gOCAmIDB4ZmY7XG4gIGJbaSsrXSA9IHRsICYgMHhmZjtcblxuICAvLyBgdGltZV9taWRgXG4gIHZhciB0bWggPSBtc2VjcyAvIDB4MTAwMDAwMDAwICogMTAwMDAgJiAweGZmZmZmZmY7XG4gIGJbaSsrXSA9IHRtaCA+Pj4gOCAmIDB4ZmY7XG4gIGJbaSsrXSA9IHRtaCAmIDB4ZmY7XG5cbiAgLy8gYHRpbWVfaGlnaF9hbmRfdmVyc2lvbmBcbiAgYltpKytdID0gdG1oID4+PiAyNCAmIDB4ZiB8IDB4MTA7IC8vIGluY2x1ZGUgdmVyc2lvblxuICBiW2krK10gPSB0bWggPj4+IDE2ICYgMHhmZjtcblxuICAvLyBgY2xvY2tfc2VxX2hpX2FuZF9yZXNlcnZlZGAgKFBlciA0LjIuMiAtIGluY2x1ZGUgdmFyaWFudClcbiAgYltpKytdID0gY2xvY2tzZXEgPj4+IDggfCAweDgwO1xuXG4gIC8vIGBjbG9ja19zZXFfbG93YFxuICBiW2krK10gPSBjbG9ja3NlcSAmIDB4ZmY7XG5cbiAgLy8gYG5vZGVgXG4gIGZvciAodmFyIG4gPSAwOyBuIDwgNjsgKytuKSB7XG4gICAgYltpICsgbl0gPSBub2RlW25dO1xuICB9XG4gIHJldHVybiBidWYgfHwgKDAsIF9zdHJpbmdpZnkudW5zYWZlU3RyaW5naWZ5KShiKTtcbn1cbnZhciBfZGVmYXVsdCA9IGV4cG9ydHMuZGVmYXVsdCA9IHYxOyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdjFUb1Y2O1xudmFyIF9wYXJzZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vcGFyc2UuanNcIikpO1xudmFyIF9zdHJpbmdpZnkgPSByZXF1aXJlKFwiLi9zdHJpbmdpZnkuanNcIik7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KGUpIHsgcmV0dXJuIGUgJiYgZS5fX2VzTW9kdWxlID8gZSA6IHsgZGVmYXVsdDogZSB9OyB9XG4vKipcbiAqIENvbnZlcnQgYSB2MSBVVUlEIHRvIGEgdjYgVVVJRFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfFVpbnQ4QXJyYXl9IHV1aWQgLSBUaGUgdjEgVVVJRCB0byBjb252ZXJ0IHRvIHY2XG4gKiBAcmV0dXJucyB7c3RyaW5nfFVpbnQ4QXJyYXl9IFRoZSB2NiBVVUlEIGFzIHRoZSBzYW1lIHR5cGUgYXMgdGhlIGB1dWlkYCBhcmdcbiAqIChzdHJpbmcgb3IgVWludDhBcnJheSlcbiAqL1xuZnVuY3Rpb24gdjFUb1Y2KHV1aWQpIHtcbiAgdmFyIHYxQnl0ZXMgPSB0eXBlb2YgdXVpZCA9PT0gJ3N0cmluZycgPyAoMCwgX3BhcnNlLmRlZmF1bHQpKHV1aWQpIDogdXVpZDtcbiAgdmFyIHY2Qnl0ZXMgPSBfdjFUb1Y2KHYxQnl0ZXMpO1xuICByZXR1cm4gdHlwZW9mIHV1aWQgPT09ICdzdHJpbmcnID8gKDAsIF9zdHJpbmdpZnkudW5zYWZlU3RyaW5naWZ5KSh2NkJ5dGVzKSA6IHY2Qnl0ZXM7XG59XG5cbi8vIERvIHRoZSBmaWVsZCB0cmFuc2Zvcm1hdGlvbiBuZWVkZWQgZm9yIHYxIC0+IHY2XG5mdW5jdGlvbiBfdjFUb1Y2KHYxQnl0ZXMsIHJhbmRvbWl6ZSA9IGZhbHNlKSB7XG4gIHJldHVybiBVaW50OEFycmF5Lm9mKCh2MUJ5dGVzWzZdICYgMHgwZikgPDwgNCB8IHYxQnl0ZXNbN10gPj4gNCAmIDB4MGYsICh2MUJ5dGVzWzddICYgMHgwZikgPDwgNCB8ICh2MUJ5dGVzWzRdICYgMHhmMCkgPj4gNCwgKHYxQnl0ZXNbNF0gJiAweDBmKSA8PCA0IHwgKHYxQnl0ZXNbNV0gJiAweGYwKSA+PiA0LCAodjFCeXRlc1s1XSAmIDB4MGYpIDw8IDQgfCAodjFCeXRlc1swXSAmIDB4ZjApID4+IDQsICh2MUJ5dGVzWzBdICYgMHgwZikgPDwgNCB8ICh2MUJ5dGVzWzFdICYgMHhmMCkgPj4gNCwgKHYxQnl0ZXNbMV0gJiAweDBmKSA8PCA0IHwgKHYxQnl0ZXNbMl0gJiAweGYwKSA+PiA0LCAweDYwIHwgdjFCeXRlc1syXSAmIDB4MGYsIHYxQnl0ZXNbM10sIHYxQnl0ZXNbOF0sIHYxQnl0ZXNbOV0sIHYxQnl0ZXNbMTBdLCB2MUJ5dGVzWzExXSwgdjFCeXRlc1sxMl0sIHYxQnl0ZXNbMTNdLCB2MUJ5dGVzWzE0XSwgdjFCeXRlc1sxNV0pO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIF92ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi92MzUuanNcIikpO1xudmFyIF9tZCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vbWQ1LmpzXCIpKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoZSkgeyByZXR1cm4gZSAmJiBlLl9fZXNNb2R1bGUgPyBlIDogeyBkZWZhdWx0OiBlIH07IH1cbnZhciB2MyA9ICgwLCBfdi5kZWZhdWx0KSgndjMnLCAweDMwLCBfbWQuZGVmYXVsdCk7XG52YXIgX2RlZmF1bHQgPSBleHBvcnRzLmRlZmF1bHQgPSB2MzsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuVVJMID0gZXhwb3J0cy5ETlMgPSB2b2lkIDA7XG5leHBvcnRzLmRlZmF1bHQgPSB2MzU7XG52YXIgX3N0cmluZ2lmeSA9IHJlcXVpcmUoXCIuL3N0cmluZ2lmeS5qc1wiKTtcbnZhciBfcGFyc2UgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3BhcnNlLmpzXCIpKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoZSkgeyByZXR1cm4gZSAmJiBlLl9fZXNNb2R1bGUgPyBlIDogeyBkZWZhdWx0OiBlIH07IH1cbmZ1bmN0aW9uIHN0cmluZ1RvQnl0ZXMoc3RyKSB7XG4gIHN0ciA9IHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChzdHIpKTsgLy8gVVRGOCBlc2NhcGVcblxuICB2YXIgYnl0ZXMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyArK2kpIHtcbiAgICBieXRlcy5wdXNoKHN0ci5jaGFyQ29kZUF0KGkpKTtcbiAgfVxuICByZXR1cm4gYnl0ZXM7XG59XG52YXIgRE5TID0gZXhwb3J0cy5ETlMgPSAnNmJhN2I4MTAtOWRhZC0xMWQxLTgwYjQtMDBjMDRmZDQzMGM4JztcbnZhciBVUkwgPSBleHBvcnRzLlVSTCA9ICc2YmE3YjgxMS05ZGFkLTExZDEtODBiNC0wMGMwNGZkNDMwYzgnO1xuZnVuY3Rpb24gdjM1KG5hbWUsIHZlcnNpb24sIGhhc2hmdW5jKSB7XG4gIGZ1bmN0aW9uIGdlbmVyYXRlVVVJRCh2YWx1ZSwgbmFtZXNwYWNlLCBidWYsIG9mZnNldCkge1xuICAgIHZhciBfbmFtZXNwYWNlO1xuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICB2YWx1ZSA9IHN0cmluZ1RvQnl0ZXModmFsdWUpO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIG5hbWVzcGFjZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIG5hbWVzcGFjZSA9ICgwLCBfcGFyc2UuZGVmYXVsdCkobmFtZXNwYWNlKTtcbiAgICB9XG4gICAgaWYgKCgoX25hbWVzcGFjZSA9IG5hbWVzcGFjZSkgPT09IG51bGwgfHwgX25hbWVzcGFjZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX25hbWVzcGFjZS5sZW5ndGgpICE9PSAxNikge1xuICAgICAgdGhyb3cgVHlwZUVycm9yKCdOYW1lc3BhY2UgbXVzdCBiZSBhcnJheS1saWtlICgxNiBpdGVyYWJsZSBpbnRlZ2VyIHZhbHVlcywgMC0yNTUpJyk7XG4gICAgfVxuXG4gICAgLy8gQ29tcHV0ZSBoYXNoIG9mIG5hbWVzcGFjZSBhbmQgdmFsdWUsIFBlciA0LjNcbiAgICAvLyBGdXR1cmU6IFVzZSBzcHJlYWQgc3ludGF4IHdoZW4gc3VwcG9ydGVkIG9uIGFsbCBwbGF0Zm9ybXMsIGUuZy4gYGJ5dGVzID1cbiAgICAvLyBoYXNoZnVuYyhbLi4ubmFtZXNwYWNlLCAuLi4gdmFsdWVdKWBcbiAgICB2YXIgYnl0ZXMgPSBuZXcgVWludDhBcnJheSgxNiArIHZhbHVlLmxlbmd0aCk7XG4gICAgYnl0ZXMuc2V0KG5hbWVzcGFjZSk7XG4gICAgYnl0ZXMuc2V0KHZhbHVlLCBuYW1lc3BhY2UubGVuZ3RoKTtcbiAgICBieXRlcyA9IGhhc2hmdW5jKGJ5dGVzKTtcbiAgICBieXRlc1s2XSA9IGJ5dGVzWzZdICYgMHgwZiB8IHZlcnNpb247XG4gICAgYnl0ZXNbOF0gPSBieXRlc1s4XSAmIDB4M2YgfCAweDgwO1xuICAgIGlmIChidWYpIHtcbiAgICAgIG9mZnNldCA9IG9mZnNldCB8fCAwO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCAxNjsgKytpKSB7XG4gICAgICAgIGJ1ZltvZmZzZXQgKyBpXSA9IGJ5dGVzW2ldO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGJ1ZjtcbiAgICB9XG4gICAgcmV0dXJuICgwLCBfc3RyaW5naWZ5LnVuc2FmZVN0cmluZ2lmeSkoYnl0ZXMpO1xuICB9XG5cbiAgLy8gRnVuY3Rpb24jbmFtZSBpcyBub3Qgc2V0dGFibGUgb24gc29tZSBwbGF0Zm9ybXMgKCMyNzApXG4gIHRyeSB7XG4gICAgZ2VuZXJhdGVVVUlELm5hbWUgPSBuYW1lO1xuICB9IGNhdGNoIChlcnIpIHt9XG5cbiAgLy8gRm9yIENvbW1vbkpTIGRlZmF1bHQgZXhwb3J0IHN1cHBvcnRcbiAgZ2VuZXJhdGVVVUlELkROUyA9IEROUztcbiAgZ2VuZXJhdGVVVUlELlVSTCA9IFVSTDtcbiAgcmV0dXJuIGdlbmVyYXRlVVVJRDtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfbmF0aXZlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9uYXRpdmUuanNcIikpO1xudmFyIF9ybmcgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3JuZy5qc1wiKSk7XG52YXIgX3N0cmluZ2lmeSA9IHJlcXVpcmUoXCIuL3N0cmluZ2lmeS5qc1wiKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoZSkgeyByZXR1cm4gZSAmJiBlLl9fZXNNb2R1bGUgPyBlIDogeyBkZWZhdWx0OiBlIH07IH1cbmZ1bmN0aW9uIHY0KG9wdGlvbnMsIGJ1Ziwgb2Zmc2V0KSB7XG4gIGlmIChfbmF0aXZlLmRlZmF1bHQucmFuZG9tVVVJRCAmJiAhYnVmICYmICFvcHRpb25zKSB7XG4gICAgcmV0dXJuIF9uYXRpdmUuZGVmYXVsdC5yYW5kb21VVUlEKCk7XG4gIH1cbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIHZhciBybmRzID0gb3B0aW9ucy5yYW5kb20gfHwgKG9wdGlvbnMucm5nIHx8IF9ybmcuZGVmYXVsdCkoKTtcblxuICAvLyBQZXIgNC40LCBzZXQgYml0cyBmb3IgdmVyc2lvbiBhbmQgYGNsb2NrX3NlcV9oaV9hbmRfcmVzZXJ2ZWRgXG4gIHJuZHNbNl0gPSBybmRzWzZdICYgMHgwZiB8IDB4NDA7XG4gIHJuZHNbOF0gPSBybmRzWzhdICYgMHgzZiB8IDB4ODA7XG5cbiAgLy8gQ29weSBieXRlcyB0byBidWZmZXIsIGlmIHByb3ZpZGVkXG4gIGlmIChidWYpIHtcbiAgICBvZmZzZXQgPSBvZmZzZXQgfHwgMDtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IDE2OyArK2kpIHtcbiAgICAgIGJ1ZltvZmZzZXQgKyBpXSA9IHJuZHNbaV07XG4gICAgfVxuICAgIHJldHVybiBidWY7XG4gIH1cbiAgcmV0dXJuICgwLCBfc3RyaW5naWZ5LnVuc2FmZVN0cmluZ2lmeSkocm5kcyk7XG59XG52YXIgX2RlZmF1bHQgPSBleHBvcnRzLmRlZmF1bHQgPSB2NDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfdiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdjM1LmpzXCIpKTtcbnZhciBfc2hhID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9zaGExLmpzXCIpKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoZSkgeyByZXR1cm4gZSAmJiBlLl9fZXNNb2R1bGUgPyBlIDogeyBkZWZhdWx0OiBlIH07IH1cbnZhciB2NSA9ICgwLCBfdi5kZWZhdWx0KSgndjUnLCAweDUwLCBfc2hhLmRlZmF1bHQpO1xudmFyIF9kZWZhdWx0ID0gZXhwb3J0cy5kZWZhdWx0ID0gdjU7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2NjtcbnZhciBfc3RyaW5naWZ5ID0gcmVxdWlyZShcIi4vc3RyaW5naWZ5LmpzXCIpO1xudmFyIF92ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi92MS5qc1wiKSk7XG52YXIgX3YxVG9WID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi92MVRvVjYuanNcIikpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChlKSB7IHJldHVybiBlICYmIGUuX19lc01vZHVsZSA/IGUgOiB7IGRlZmF1bHQ6IGUgfTsgfVxuZnVuY3Rpb24gb3duS2V5cyhlLCByKSB7IHZhciB0ID0gT2JqZWN0LmtleXMoZSk7IGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7IHZhciBvID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhlKTsgciAmJiAobyA9IG8uZmlsdGVyKGZ1bmN0aW9uIChyKSB7IHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGUsIHIpLmVudW1lcmFibGU7IH0pKSwgdC5wdXNoLmFwcGx5KHQsIG8pOyB9IHJldHVybiB0OyB9XG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkKGUpIHsgZm9yICh2YXIgciA9IDE7IHIgPCBhcmd1bWVudHMubGVuZ3RoOyByKyspIHsgdmFyIHQgPSBudWxsICE9IGFyZ3VtZW50c1tyXSA/IGFyZ3VtZW50c1tyXSA6IHt9OyByICUgMiA/IG93bktleXMoT2JqZWN0KHQpLCAhMCkuZm9yRWFjaChmdW5jdGlvbiAocikgeyBfZGVmaW5lUHJvcGVydHkoZSwgciwgdFtyXSk7IH0pIDogT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMgPyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhlLCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyh0KSkgOiBvd25LZXlzKE9iamVjdCh0KSkuZm9yRWFjaChmdW5jdGlvbiAocikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoZSwgciwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0LCByKSk7IH0pOyB9IHJldHVybiBlOyB9XG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkoZSwgciwgdCkgeyByZXR1cm4gKHIgPSBfdG9Qcm9wZXJ0eUtleShyKSkgaW4gZSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLCByLCB7IHZhbHVlOiB0LCBlbnVtZXJhYmxlOiAhMCwgY29uZmlndXJhYmxlOiAhMCwgd3JpdGFibGU6ICEwIH0pIDogZVtyXSA9IHQsIGU7IH1cbmZ1bmN0aW9uIF90b1Byb3BlcnR5S2V5KHQpIHsgdmFyIGkgPSBfdG9QcmltaXRpdmUodCwgXCJzdHJpbmdcIik7IHJldHVybiBcInN5bWJvbFwiID09IHR5cGVvZiBpID8gaSA6IGkgKyBcIlwiOyB9XG5mdW5jdGlvbiBfdG9QcmltaXRpdmUodCwgcikgeyBpZiAoXCJvYmplY3RcIiAhPSB0eXBlb2YgdCB8fCAhdCkgcmV0dXJuIHQ7IHZhciBlID0gdFtTeW1ib2wudG9QcmltaXRpdmVdOyBpZiAodm9pZCAwICE9PSBlKSB7IHZhciBpID0gZS5jYWxsKHQsIHIgfHwgXCJkZWZhdWx0XCIpOyBpZiAoXCJvYmplY3RcIiAhPSB0eXBlb2YgaSkgcmV0dXJuIGk7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJAQHRvUHJpbWl0aXZlIG11c3QgcmV0dXJuIGEgcHJpbWl0aXZlIHZhbHVlLlwiKTsgfSByZXR1cm4gKFwic3RyaW5nXCIgPT09IHIgPyBTdHJpbmcgOiBOdW1iZXIpKHQpOyB9XG4vKipcbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gb3B0aW9uc1xuICogQHBhcmFtIHtVaW50OEFycmF5PX0gYnVmXG4gKiBAcGFyYW0ge251bWJlcj19IG9mZnNldFxuICogQHJldHVybnNcbiAqL1xuZnVuY3Rpb24gdjYob3B0aW9ucyA9IHt9LCBidWYsIG9mZnNldCA9IDApIHtcbiAgLy8gdjYgaXMgdjEgd2l0aCBkaWZmZXJlbnQgZmllbGQgbGF5b3V0LCBzbyB3ZSBzdGFydCB3aXRoIGEgdjEgVVVJRCwgYWxiZWl0XG4gIC8vIHdpdGggc2xpZ2h0bHkgZGlmZmVyZW50IGJlaGF2aW9yIGFyb3VuZCBob3cgdGhlIGNsb2NrX3NlcSBhbmQgbm9kZSBmaWVsZHNcbiAgLy8gYXJlIHJhbmRvbWl6ZWQsIHdoaWNoIGlzIHdoeSB3ZSBjYWxsIHYxIHdpdGggX3Y2OiB0cnVlLlxuICB2YXIgYnl0ZXMgPSAoMCwgX3YuZGVmYXVsdCkoX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCBvcHRpb25zKSwge30sIHtcbiAgICBfdjY6IHRydWVcbiAgfSksIG5ldyBVaW50OEFycmF5KDE2KSk7XG5cbiAgLy8gUmVvcmRlciB0aGUgZmllbGRzIHRvIHY2IGxheW91dC5cbiAgYnl0ZXMgPSAoMCwgX3YxVG9WLmRlZmF1bHQpKGJ5dGVzKTtcblxuICAvLyBSZXR1cm4gYXMgYSBieXRlIGFycmF5IGlmIHJlcXVlc3RlZFxuICBpZiAoYnVmKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCAxNjsgaSsrKSB7XG4gICAgICBidWZbb2Zmc2V0ICsgaV0gPSBieXRlc1tpXTtcbiAgICB9XG4gICAgcmV0dXJuIGJ1ZjtcbiAgfVxuICByZXR1cm4gKDAsIF9zdHJpbmdpZnkudW5zYWZlU3RyaW5naWZ5KShieXRlcyk7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2NlRvVjE7XG52YXIgX3BhcnNlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9wYXJzZS5qc1wiKSk7XG52YXIgX3N0cmluZ2lmeSA9IHJlcXVpcmUoXCIuL3N0cmluZ2lmeS5qc1wiKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoZSkgeyByZXR1cm4gZSAmJiBlLl9fZXNNb2R1bGUgPyBlIDogeyBkZWZhdWx0OiBlIH07IH1cbi8qKlxuICogQ29udmVydCBhIHY2IFVVSUQgdG8gYSB2MSBVVUlEXG4gKlxuICogQHBhcmFtIHtzdHJpbmd8VWludDhBcnJheX0gdXVpZCAtIFRoZSB2NiBVVUlEIHRvIGNvbnZlcnQgdG8gdjZcbiAqIEByZXR1cm5zIHtzdHJpbmd8VWludDhBcnJheX0gVGhlIHYxIFVVSUQgYXMgdGhlIHNhbWUgdHlwZSBhcyB0aGUgYHV1aWRgIGFyZ1xuICogKHN0cmluZyBvciBVaW50OEFycmF5KVxuICovXG5mdW5jdGlvbiB2NlRvVjEodXVpZCkge1xuICB2YXIgdjZCeXRlcyA9IHR5cGVvZiB1dWlkID09PSAnc3RyaW5nJyA/ICgwLCBfcGFyc2UuZGVmYXVsdCkodXVpZCkgOiB1dWlkO1xuICB2YXIgdjFCeXRlcyA9IF92NlRvVjEodjZCeXRlcyk7XG4gIHJldHVybiB0eXBlb2YgdXVpZCA9PT0gJ3N0cmluZycgPyAoMCwgX3N0cmluZ2lmeS51bnNhZmVTdHJpbmdpZnkpKHYxQnl0ZXMpIDogdjFCeXRlcztcbn1cblxuLy8gRG8gdGhlIGZpZWxkIHRyYW5zZm9ybWF0aW9uIG5lZWRlZCBmb3IgdjYgLT4gdjFcbmZ1bmN0aW9uIF92NlRvVjEodjZCeXRlcykge1xuICByZXR1cm4gVWludDhBcnJheS5vZigodjZCeXRlc1szXSAmIDB4MGYpIDw8IDQgfCB2NkJ5dGVzWzRdID4+IDQgJiAweDBmLCAodjZCeXRlc1s0XSAmIDB4MGYpIDw8IDQgfCAodjZCeXRlc1s1XSAmIDB4ZjApID4+IDQsICh2NkJ5dGVzWzVdICYgMHgwZikgPDwgNCB8IHY2Qnl0ZXNbNl0gJiAweDBmLCB2NkJ5dGVzWzddLCAodjZCeXRlc1sxXSAmIDB4MGYpIDw8IDQgfCAodjZCeXRlc1syXSAmIDB4ZjApID4+IDQsICh2NkJ5dGVzWzJdICYgMHgwZikgPDwgNCB8ICh2NkJ5dGVzWzNdICYgMHhmMCkgPj4gNCwgMHgxMCB8ICh2NkJ5dGVzWzBdICYgMHhmMCkgPj4gNCwgKHY2Qnl0ZXNbMF0gJiAweDBmKSA8PCA0IHwgKHY2Qnl0ZXNbMV0gJiAweGYwKSA+PiA0LCB2NkJ5dGVzWzhdLCB2NkJ5dGVzWzldLCB2NkJ5dGVzWzEwXSwgdjZCeXRlc1sxMV0sIHY2Qnl0ZXNbMTJdLCB2NkJ5dGVzWzEzXSwgdjZCeXRlc1sxNF0sIHY2Qnl0ZXNbMTVdKTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfcm5nID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9ybmcuanNcIikpO1xudmFyIF9zdHJpbmdpZnkgPSByZXF1aXJlKFwiLi9zdHJpbmdpZnkuanNcIik7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KGUpIHsgcmV0dXJuIGUgJiYgZS5fX2VzTW9kdWxlID8gZSA6IHsgZGVmYXVsdDogZSB9OyB9XG4vKipcbiAqIFVVSUQgVjcgLSBVbml4IEVwb2NoIHRpbWUtYmFzZWQgVVVJRFxuICpcbiAqIFRoZSBJRVRGIGhhcyBwdWJsaXNoZWQgUkZDOTU2MiwgaW50cm9kdWNpbmcgMyBuZXcgVVVJRCB2ZXJzaW9ucyAoNiw3LDgpLiBUaGlzXG4gKiBpbXBsZW1lbnRhdGlvbiBvZiBWNyBpcyBiYXNlZCBvbiB0aGUgYWNjZXB0ZWQsIHRob3VnaCBub3QgeWV0IGFwcHJvdmVkLFxuICogcmV2aXNpb25zLlxuICpcbiAqIFJGQyA5NTYyOmh0dHBzOi8vd3d3LnJmYy1lZGl0b3Iub3JnL3JmYy9yZmM5NTYyLmh0bWwgVW5pdmVyc2FsbHkgVW5pcXVlXG4gKiBJRGVudGlmaWVycyAoVVVJRHMpXG5cbiAqXG4gKiBTYW1wbGUgVjcgdmFsdWU6XG4gKiBodHRwczovL3d3dy5yZmMtZWRpdG9yLm9yZy9yZmMvcmZjOTU2Mi5odG1sI25hbWUtZXhhbXBsZS1vZi1hLXV1aWR2Ny12YWx1ZVxuICpcbiAqIE1vbm90b25pYyBCaXQgTGF5b3V0OiBSRkMgcmZjOTU2Mi42LjIgTWV0aG9kIDEsIERlZGljYXRlZCBDb3VudGVyIEJpdHMgcmVmOlxuICogICAgIGh0dHBzOi8vd3d3LnJmYy1lZGl0b3Iub3JnL3JmYy9yZmM5NTYyLmh0bWwjc2VjdGlvbi02LjItNS4xXG4gKlxuICogICAwICAgICAgICAgICAgICAgICAgIDEgICAgICAgICAgICAgICAgICAgMiAgICAgICAgICAgICAgICAgICAzIDAgMSAyIDMgNCA1IDZcbiAqICAgNyA4IDkgMCAxIDIgMyA0IDUgNiA3IDggOSAwIDEgMiAzIDQgNSA2IDcgOCA5IDAgMVxuICogICstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rXG4gKiAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgdW5peF90c19tcyAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqICArLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstK1xuICogIHwgICAgICAgICAgdW5peF90c19tcyAgICAgICAgICAgfCAgdmVyICB8ICAgICAgICBzZXFfaGkgICAgICAgICB8XG4gKiAgKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLStcbiAqICB8dmFyfCAgICAgICAgICAgICAgIHNlcV9sb3cgICAgICAgICAgICAgICB8ICAgICAgICByYW5kICAgICAgICAgfFxuICogICstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rXG4gKiAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmFuZCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqICArLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstK1xuICpcbiAqIHNlcSBpcyBhIDMxIGJpdCBzZXJpYWxpemVkIGNvdW50ZXI7IGNvbXByaXNlZCBvZiAxMiBiaXQgc2VxX2hpIGFuZCAxOSBiaXRcbiAqIHNlcV9sb3csIGFuZCByYW5kb21seSBpbml0aWFsaXplZCB1cG9uIHRpbWVzdGFtcCBjaGFuZ2UuIDMxIGJpdCBjb3VudGVyIHNpemVcbiAqIHdhcyBzZWxlY3RlZCBhcyBhbnkgYml0d2lzZSBvcGVyYXRpb25zIGluIG5vZGUgYXJlIGRvbmUgYXMgX3NpZ25lZF8gMzIgYml0XG4gKiBpbnRzLiB3ZSBleGNsdWRlIHRoZSBzaWduIGJpdC5cbiAqL1xuXG52YXIgX3NlcUxvdyA9IG51bGw7XG52YXIgX3NlcUhpZ2ggPSBudWxsO1xudmFyIF9tc2VjcyA9IDA7XG5mdW5jdGlvbiB2NyhvcHRpb25zLCBidWYsIG9mZnNldCkge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICAvLyBpbml0aWFsaXplIGJ1ZmZlciBhbmQgcG9pbnRlclxuICB2YXIgaSA9IGJ1ZiAmJiBvZmZzZXQgfHwgMDtcbiAgdmFyIGIgPSBidWYgfHwgbmV3IFVpbnQ4QXJyYXkoMTYpO1xuXG4gIC8vIHJuZHMgaXMgVWludDhBcnJheSgxNikgZmlsbGVkIHdpdGggcmFuZG9tIGJ5dGVzXG4gIHZhciBybmRzID0gb3B0aW9ucy5yYW5kb20gfHwgKG9wdGlvbnMucm5nIHx8IF9ybmcuZGVmYXVsdCkoKTtcblxuICAvLyBtaWxsaXNlY29uZHMgc2luY2UgdW5peCBlcG9jaCwgMTk3MC0wMS0wMSAwMDowMFxuICB2YXIgbXNlY3MgPSBvcHRpb25zLm1zZWNzICE9PSB1bmRlZmluZWQgPyBvcHRpb25zLm1zZWNzIDogRGF0ZS5ub3coKTtcblxuICAvLyBzZXEgaXMgdXNlciBwcm92aWRlZCAzMSBiaXQgY291bnRlclxuICB2YXIgc2VxID0gb3B0aW9ucy5zZXEgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMuc2VxIDogbnVsbDtcblxuICAvLyBpbml0aWFsaXplIGxvY2FsIHNlcSBoaWdoL2xvdyBwYXJ0c1xuICB2YXIgc2VxSGlnaCA9IF9zZXFIaWdoO1xuICB2YXIgc2VxTG93ID0gX3NlcUxvdztcblxuICAvLyBjaGVjayBpZiBjbG9jayBoYXMgYWR2YW5jZWQgYW5kIHVzZXIgaGFzIG5vdCBwcm92aWRlZCBtc2Vjc1xuICBpZiAobXNlY3MgPiBfbXNlY3MgJiYgb3B0aW9ucy5tc2VjcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgX21zZWNzID0gbXNlY3M7XG5cbiAgICAvLyB1bmxlc3MgdXNlciBwcm92aWRlZCBzZXEsIHJlc2V0IHNlcSBwYXJ0c1xuICAgIGlmIChzZXEgIT09IG51bGwpIHtcbiAgICAgIHNlcUhpZ2ggPSBudWxsO1xuICAgICAgc2VxTG93ID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICAvLyBpZiB3ZSBoYXZlIGEgdXNlciBwcm92aWRlZCBzZXFcbiAgaWYgKHNlcSAhPT0gbnVsbCkge1xuICAgIC8vIHRyaW0gcHJvdmlkZWQgc2VxIHRvIDMxIGJpdHMgb2YgdmFsdWUsIGF2b2lkaW5nIG92ZXJmbG93XG4gICAgaWYgKHNlcSA+IDB4N2ZmZmZmZmYpIHtcbiAgICAgIHNlcSA9IDB4N2ZmZmZmZmY7XG4gICAgfVxuXG4gICAgLy8gc3BsaXQgcHJvdmlkZWQgc2VxIGludG8gaGlnaC9sb3cgcGFydHNcbiAgICBzZXFIaWdoID0gc2VxID4+PiAxOSAmIDB4ZmZmO1xuICAgIHNlcUxvdyA9IHNlcSAmIDB4N2ZmZmY7XG4gIH1cblxuICAvLyByYW5kb21seSBpbml0aWFsaXplIHNlcVxuICBpZiAoc2VxSGlnaCA9PT0gbnVsbCB8fCBzZXFMb3cgPT09IG51bGwpIHtcbiAgICBzZXFIaWdoID0gcm5kc1s2XSAmIDB4N2Y7XG4gICAgc2VxSGlnaCA9IHNlcUhpZ2ggPDwgOCB8IHJuZHNbN107XG4gICAgc2VxTG93ID0gcm5kc1s4XSAmIDB4M2Y7IC8vIHBhZCBmb3IgdmFyXG4gICAgc2VxTG93ID0gc2VxTG93IDw8IDggfCBybmRzWzldO1xuICAgIHNlcUxvdyA9IHNlcUxvdyA8PCA1IHwgcm5kc1sxMF0gPj4+IDM7XG4gIH1cblxuICAvLyBpbmNyZW1lbnQgc2VxIGlmIHdpdGhpbiBtc2VjcyB3aW5kb3dcbiAgaWYgKG1zZWNzICsgMTAwMDAgPiBfbXNlY3MgJiYgc2VxID09PSBudWxsKSB7XG4gICAgaWYgKCsrc2VxTG93ID4gMHg3ZmZmZikge1xuICAgICAgc2VxTG93ID0gMDtcbiAgICAgIGlmICgrK3NlcUhpZ2ggPiAweGZmZikge1xuICAgICAgICBzZXFIaWdoID0gMDtcblxuICAgICAgICAvLyBpbmNyZW1lbnQgaW50ZXJuYWwgX21zZWNzLiB0aGlzIGFsbG93cyB1cyB0byBjb250aW51ZSBpbmNyZW1lbnRpbmdcbiAgICAgICAgLy8gd2hpbGUgc3RheWluZyBtb25vdG9uaWMuIE5vdGUsIG9uY2Ugd2UgaGl0IDEwayBtaWxsaXNlY29uZHMgYmV5b25kIHN5c3RlbVxuICAgICAgICAvLyBjbG9jaywgd2Ugd2lsbCByZXNldCBicmVha2luZyBtb25vdG9uaWNpdHkgKGFmdGVyICgyXjMxKSoxMDAwMCBnZW5lcmF0aW9ucylcbiAgICAgICAgX21zZWNzKys7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIC8vIHJlc2V0dGluZzsgd2UgaGF2ZSBhZHZhbmNlZCBtb3JlIHRoYW5cbiAgICAvLyAxMGsgbWlsbGlzZWNvbmRzIGJleW9uZCBzeXN0ZW0gY2xvY2tcbiAgICBfbXNlY3MgPSBtc2VjcztcbiAgfVxuICBfc2VxSGlnaCA9IHNlcUhpZ2g7XG4gIF9zZXFMb3cgPSBzZXFMb3c7XG5cbiAgLy8gW2J5dGVzIDAtNV0gNDggYml0cyBvZiBsb2NhbCB0aW1lc3RhbXBcbiAgYltpKytdID0gX21zZWNzIC8gMHgxMDAwMDAwMDAwMCAmIDB4ZmY7XG4gIGJbaSsrXSA9IF9tc2VjcyAvIDB4MTAwMDAwMDAwICYgMHhmZjtcbiAgYltpKytdID0gX21zZWNzIC8gMHgxMDAwMDAwICYgMHhmZjtcbiAgYltpKytdID0gX21zZWNzIC8gMHgxMDAwMCAmIDB4ZmY7XG4gIGJbaSsrXSA9IF9tc2VjcyAvIDB4MTAwICYgMHhmZjtcbiAgYltpKytdID0gX21zZWNzICYgMHhmZjtcblxuICAvLyBbYnl0ZSA2XSAtIHNldCA0IGJpdHMgb2YgdmVyc2lvbiAoNykgd2l0aCBmaXJzdCA0IGJpdHMgc2VxX2hpXG4gIGJbaSsrXSA9IHNlcUhpZ2ggPj4+IDQgJiAweDBmIHwgMHg3MDtcblxuICAvLyBbYnl0ZSA3XSByZW1haW5pbmcgOCBiaXRzIG9mIHNlcV9oaVxuICBiW2krK10gPSBzZXFIaWdoICYgMHhmZjtcblxuICAvLyBbYnl0ZSA4XSAtIHZhcmlhbnQgKDIgYml0cyksIGZpcnN0IDYgYml0cyBzZXFfbG93XG4gIGJbaSsrXSA9IHNlcUxvdyA+Pj4gMTMgJiAweDNmIHwgMHg4MDtcblxuICAvLyBbYnl0ZSA5XSA4IGJpdHMgc2VxX2xvd1xuICBiW2krK10gPSBzZXFMb3cgPj4+IDUgJiAweGZmO1xuXG4gIC8vIFtieXRlIDEwXSByZW1haW5pbmcgNSBiaXRzIHNlcV9sb3csIDMgYml0cyByYW5kb21cbiAgYltpKytdID0gc2VxTG93IDw8IDMgJiAweGZmIHwgcm5kc1sxMF0gJiAweDA3O1xuXG4gIC8vIFtieXRlcyAxMS0xNV0gYWx3YXlzIHJhbmRvbVxuICBiW2krK10gPSBybmRzWzExXTtcbiAgYltpKytdID0gcm5kc1sxMl07XG4gIGJbaSsrXSA9IHJuZHNbMTNdO1xuICBiW2krK10gPSBybmRzWzE0XTtcbiAgYltpKytdID0gcm5kc1sxNV07XG4gIHJldHVybiBidWYgfHwgKDAsIF9zdHJpbmdpZnkudW5zYWZlU3RyaW5naWZ5KShiKTtcbn1cbnZhciBfZGVmYXVsdCA9IGV4cG9ydHMuZGVmYXVsdCA9IHY3OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIF9yZWdleCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vcmVnZXguanNcIikpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChlKSB7IHJldHVybiBlICYmIGUuX19lc01vZHVsZSA/IGUgOiB7IGRlZmF1bHQ6IGUgfTsgfVxuZnVuY3Rpb24gdmFsaWRhdGUodXVpZCkge1xuICByZXR1cm4gdHlwZW9mIHV1aWQgPT09ICdzdHJpbmcnICYmIF9yZWdleC5kZWZhdWx0LnRlc3QodXVpZCk7XG59XG52YXIgX2RlZmF1bHQgPSBleHBvcnRzLmRlZmF1bHQgPSB2YWxpZGF0ZTsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfdmFsaWRhdGUgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3ZhbGlkYXRlLmpzXCIpKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoZSkgeyByZXR1cm4gZSAmJiBlLl9fZXNNb2R1bGUgPyBlIDogeyBkZWZhdWx0OiBlIH07IH1cbmZ1bmN0aW9uIHZlcnNpb24odXVpZCkge1xuICBpZiAoISgwLCBfdmFsaWRhdGUuZGVmYXVsdCkodXVpZCkpIHtcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ0ludmFsaWQgVVVJRCcpO1xuICB9XG4gIHJldHVybiBwYXJzZUludCh1dWlkLnNsaWNlKDE0LCAxNSksIDE2KTtcbn1cbnZhciBfZGVmYXVsdCA9IGV4cG9ydHMuZGVmYXVsdCA9IHZlcnNpb247IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgR2FtZSBmcm9tICcuL0dhbWUnO1xuXG53aW5kb3cub25sb2FkID0gKCkgPT4ge1xuICBjb25zdCBnYW1lID0gbmV3IEdhbWUoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2dhbWUnKSk7XG4gIGdhbWUuaW5pdGlhbGlzZSgpO1xufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
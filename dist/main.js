/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("function knightMoves(start, end) {\n  const moves = [[1, 2], [-1, 2], [1, -2], [-1, -2], [2, 1], [-2, 1], [2, -1], [-2, -2]];\n  function isLegalMove(position) {\n    const [x, y] = position;\n    return x >= 0 && x < 8 && y >= 0 && y < 8;\n  }\n  const queue = [[start]];\n  const visited = new Set();\n  visited.add(start.join(','));\n  while (queue.length > 0) {\n    const path = queue.shift();\n    const currentPosition = path[path.length - 1];\n    if (currentPosition[0] === end[0] && currentPosition[1] === end[1]) {\n      return {\n        moves: path.length - 1,\n        path\n      };\n    }\n\n    // Generate possible moves from the current position\n    moves.forEach(_ref => {\n      let [dx, dy] = _ref;\n      const newPosition = [currentPosition[0] + dx, currentPosition[1] + dy];\n      if (isLegalMove(newPosition) && !visited.has(newPosition.join(','))) {\n        const newPath = path.concat([newPosition]);\n        queue.push(newPath);\n        visited.add(newPosition.join(','));\n      }\n    });\n  }\n  return null;\n}\n\n// Test the function\nconst result = knightMoves([3, 1], [7, 7]);\nif (result) {\n  console.log(`You made it in ${result.moves} moves! Here's your path:`);\n  result.path.forEach(position => console.log(position));\n} else {\n  console.log(\"No valid path found.\");\n}\n\n//# sourceURL=webpack://knights_travails/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;
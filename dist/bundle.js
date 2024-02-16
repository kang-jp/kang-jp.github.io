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

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/***/ (() => {

eval("function getUnitTime() {\n    var r = Math.random();\n    if (r < (1 / 4)) {\n        return 1000 * 0;\n    }\n    else if (r < (3 / 4)) {\n        return 1000 * 1;\n    }\n    else {\n        return 1000 * 2;\n    }\n}\nfunction advanceClock(date) {\n    var twoDigit = function (num) {\n        var digit;\n        if (num < 10) {\n            digit = \"0\" + num;\n        }\n        else {\n            digit = num;\n        }\n        return digit;\n    };\n    date.setTime(date.getTime() + getUnitTime());\n    var hour = twoDigit(date.getHours());\n    var minute = twoDigit(date.getMinutes());\n    var second = twoDigit(date.getSeconds());\n    document.getElementById(\"strange_clock_time\").textContent = hour + \":\" + minute + \":\" + second;\n}\nvar strange_date = new Date();\nsetInterval(advanceClock, 1000, strange_date);\n\n\n//# sourceURL=webpack://kang-jp.github.io/./src/app.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/app.ts"]();
/******/ 	
/******/ })()
;
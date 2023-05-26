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

/***/ "./src/js/web.js":
/*!***********************!*\
  !*** ./src/js/web.js ***!
  \***********************/
/***/ (() => {

eval("console.log('hello from web.js');\n\n// Logic for expandable cards\nvar webCards = document.querySelectorAll('#web-project-card');\nwebCards.forEach(function (card) {\n  var downArrow = card.querySelector('#down-arrow');\n  downArrow.addEventListener('click', function (event) {\n    event.preventDefault();\n    var projectInfo = card.querySelector('#project-info');\n    var downArrow = card.querySelector('#down-arrow');\n    if (projectInfo.classList.contains('hidden')) {\n      projectInfo.classList.remove('hidden');\n      downArrow.remove();\n      // const upArrow = `<svg id=\"down-arrow\" class=\"cursor-pointer\" width=\"20\" height=\"20\" viewBox=\"0 0 20 23\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n      // <path d=\"M9.98453 0.916607L19.4978 10.4033L17.2842 12.6231L9.99077 5.38952L2.71755 12.6434L0.497795 10.4299L9.98453 0.916607ZM9.99779 10.4166L19.511 19.9033L17.2975 22.1231L10.004 14.8895L2.73081 22.1434L0.511054 19.9298L9.99779 10.4166Z\" fill=\"#009486\"/>\n      // </svg>`\n      // downArrow.innerHTML = upArrow\n    }\n  });\n});\n\n//# sourceURL=webpack://my-portfolio/./src/js/web.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/web.js"]();
/******/ 	
/******/ })()
;
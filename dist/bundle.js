/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_render_tasks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/render-tasks */ \"./src/modules/render-tasks.js\");\n/* harmony import */ var _modules_tasks_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/tasks-class */ \"./src/modules/tasks-class.js\");\n\r\n\r\n\r\n\r\n\r\nconst tasksDisplayTab = document.querySelector(\".tasks-display\")\r\nconst addBtnForm = document.getElementById(\"formBtn\")\r\nconst navSwitchBtns = document.querySelectorAll(\"[data-nav-switch]\")\r\n\r\nconst tasks = []\r\n\r\n\r\naddBtnForm.addEventListener(\"click\", (e) => {\r\n    e.preventDefault\r\n    const movie = new _modules_tasks_class__WEBPACK_IMPORTED_MODULE_1__[\"default\"](document.getElementById(\"taskTitle\").value, document.getElementById(\"taskDescription\").value, tasksDisplayTab.classList[1])\r\n    tasks.push(movie)\r\n    document.querySelector(\"form\").reset()\r\n\r\n    ;(0,_modules_render_tasks__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(tasksDisplayTab, tasks)\r\n})\r\n\r\nnavSwitchBtns.forEach(btn => {\r\n    btn.addEventListener(\"click\", () => {\r\n        tasksDisplayTab.className = \"tasks-display\"\r\n        tasksDisplayTab.classList.add(btn.innerHTML.replace(/ /g,\"-\"))\r\n\r\n        ;(0,_modules_render_tasks__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(tasksDisplayTab, tasks)\r\n    })\r\n})\r\n\r\n\r\n;(0,_modules_render_tasks__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(tasksDisplayTab, tasks)\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/modules/html-elements-factory.js":
/*!**********************************************!*\
  !*** ./src/modules/html-elements-factory.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((html) => {\r\n    const template = document.createElement(\"template\")\r\n\r\n    template.innerHTML = html.trim()\r\n\r\n    return template.content.firstElementChild\r\n});\n\n//# sourceURL=webpack://todo-list/./src/modules/html-elements-factory.js?");

/***/ }),

/***/ "./src/modules/render-tasks.js":
/*!*************************************!*\
  !*** ./src/modules/render-tasks.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _html_elements_factory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./html-elements-factory */ \"./src/modules/html-elements-factory.js\");\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((displayTab, tasksArr) => {\r\n    const form = displayTab.firstElementChild\r\n    displayTab.innerHTML = \"\"\r\n    displayTab.appendChild(form)\r\n\r\n    tasksArr.forEach(task => {\r\n        displayTab.appendChild((0,_html_elements_factory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(`\r\n        <div class=\"task ${task.cssClass}\">\r\n            <div class=\"task-title\">\r\n            ${task.title}\r\n            </div>\r\n            <div class=\"task-description\">\r\n            ${task.description}\r\n            </div>\r\n        </div>\r\n        `))\r\n    })\r\n    if (displayTab.classList[1] == \"Inbox\") return\r\n    document.querySelectorAll(`.task`).forEach(task => {\r\n        task.style.display = \"none\"\r\n    })\r\n    document.querySelectorAll(`.${displayTab.classList[1]}`).forEach(task => {\r\n         task.style.display = \"block\"\r\n    })\r\n});\r\n\r\n// Make tasks appear depending on the tab\n\n//# sourceURL=webpack://todo-list/./src/modules/render-tasks.js?");

/***/ }),

/***/ "./src/modules/tasks-class.js":
/*!************************************!*\
  !*** ./src/modules/tasks-class.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (class {\r\n    constructor(title, description, cssClass) {\r\n        this.title = title\r\n        this.description = description\r\n        this.cssClass = cssClass\r\n        this.dueDate\r\n        this.priority\r\n    }\r\n\r\n    addDueDate(dueDate) {\r\n        this.dueDate = dueDate\r\n    }\r\n\r\n    addPriority(priority) {\r\n        this.priority = priority\r\n    }\r\n});\n\n//# sourceURL=webpack://todo-list/./src/modules/tasks-class.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
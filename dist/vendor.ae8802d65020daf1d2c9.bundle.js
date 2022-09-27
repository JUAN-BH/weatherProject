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

/***/ "./src/navigation.js":
/*!***************************!*\
  !*** ./src/navigation.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_nodes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/nodes.js */ \"./src/utils/nodes.js\");\n\nvar sections = _utils_nodes_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].sections,\n    elements = _utils_nodes_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].elements,\n    modals = _utils_nodes_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].modals;\nwindow.addEventListener(\"DOMContentLoaded\", navigation, false);\nwindow.addEventListener(\"hashchange\", navigation, false);\nwindow.addEventListener(\"resize\", function () {\n  if (window.screen.width > 1024) {\n    renderDashBoard();\n  } else {\n    renderMainMobile();\n  }\n});\n\nfunction renderSearchMobile() {\n  sections.mainHeaderMobile.classList.add(\"hidden\");\n  sections.savedCitiesHeaderMobile.classList.add(\"hidden\");\n  sections.nextDaysHeaderMobile.classList.add(\"hidden\");\n  sections.searchHeaderMobile.classList.remove(\"hidden\");\n  sections.mainWeather.classList.add(\"hidden\");\n  sections.weatherPerHours.classList.add(\"hidden\");\n  sections.savedCities.classList.add(\"hidden\");\n\n  if (window.screen.width > 1024) {\n    sections.mainNext2DaysContent.style.display = \"flex\";\n  } else {\n    sections.mainNext2DaysContent.style.display = \"none\";\n  }\n\n  sections.mainSearchMobile.classList.remove(\"hidden\");\n  elements.searchCityInput.focus();\n  sections.mobileNav.classList.add(\"mobileNav_Hidden\");\n}\n\nfunction renderSaveCitiesMobile() {\n  sections.mainHeaderMobile.classList.add(\"hidden\");\n  sections.searchHeaderMobile.classList.add(\"hidden\");\n  sections.savedCitiesHeaderMobile.classList.remove(\"hidden\");\n  sections.nextDaysHeaderMobile.classList.add(\"hidden\");\n  sections.mainWeather.classList.add(\"hidden\");\n  sections.weatherPerHours.classList.add(\"hidden\");\n  sections.mainSearchMobile.classList.add(\"hidden\");\n\n  if (window.screen.width > 1024) {\n    sections.mainNext2DaysContent.style.display = \"flex\";\n  } else {\n    sections.mainNext2DaysContent.style.display = \"none\";\n  }\n\n  sections.savedCities.classList.remove(\"hidden\");\n  sections.mobileNav.classList.add(\"mobileNav_Hidden\");\n}\n\nfunction renderMainMobile() {\n  sections.searchHeaderMobile.classList.add(\"hidden\");\n  sections.savedCitiesHeaderMobile.classList.add(\"hidden\");\n  sections.nextDaysHeaderMobile.classList.add(\"hidden\");\n  sections.mainHeaderMobile.classList.remove(\"hidden\");\n  sections.mainSearchMobile.classList.add(\"hidden\");\n  sections.savedCities.classList.add(\"hidden\");\n\n  if (window.screen.width > 1024) {\n    sections.mainNext2DaysContent.style.display = \"flex\";\n  } else {\n    sections.mainNext2DaysContent.style.display = \"none\";\n  }\n\n  sections.mainWeather.classList.remove(\"hidden\");\n  sections.weatherPerHours.classList.remove(\"hidden\");\n  sections.mobileNav.classList.add(\"mobileNav_Hidden\");\n}\n\nfunction renderNextDays() {\n  sections.mainHeaderMobile.classList.add(\"hidden\");\n  sections.savedCitiesHeaderMobile.classList.add(\"hidden\");\n  sections.searchHeaderMobile.classList.add(\"hidden\");\n  sections.nextDaysHeaderMobile.classList.remove(\"hidden\");\n  sections.mainWeather.classList.add(\"hidden\");\n  sections.weatherPerHours.classList.add(\"hidden\");\n  sections.savedCities.classList.add(\"hidden\");\n  sections.mainSearchMobile.classList.add(\"hidden\");\n\n  if (window.screen.width > 1024) {\n    sections.mainNext2DaysContent.style.display = \"flex\";\n  } else {\n    sections.mainNext2DaysContent.style.display = \"flex\";\n  }\n\n  sections.mobileNav.classList.add(\"mobileNav_Hidden\");\n}\n\nfunction renderSavedCitiesDesktop() {\n  sections.mainInfo.classList.add(\"hidden\"); // console.log(mainNext2Days);\n\n  sections.mainNext2Days.style.display = \"none\";\n  sections.savedCities.classList.remove(\"hidden\");\n  elements.dashBoardBtn.classList.remove(\"btnActiveNavDesktop\");\n  elements.savedCitiesBtn.classList.add(\"btnActiveNavDesktop\");\n}\n\nfunction renderDashBoard() {\n  sections.mainInfo.classList.remove(\"hidden\");\n  sections.mainWeather.classList.remove(\"hidden\");\n  sections.weatherPerHours.classList.remove(\"hidden\");\n  sections.mainNext2Days.style.display = \"flex\";\n  sections.savedCities.classList.add(\"hidden\");\n  elements.savedCitiesBtn.classList.remove(\"btnActiveNavDesktop\");\n  elements.dashBoardBtn.classList.add(\"btnActiveNavDesktop\");\n  sections.mainNext2DaysContent.style.display = \"flex\";\n}\n\nfunction navigation() {\n  if (location.hash.startsWith(\"city=\")) {\n    renderMainMobile();\n    renderDashBoard();\n  } else {\n    renderMainMobile();\n    renderDashBoard();\n  }\n}\n\nelements.twoDaysMore.addEventListener(\"click\", renderNextDays);\nelements.arroBackNextDays.addEventListener(\"click\", renderMainMobile);\nelements.menuIconMobile.forEach(function (e) {\n  e.addEventListener(\"click\", function () {\n    sections.mobileNav.classList.remove(\"mobileNav_Hidden\");\n  });\n});\nelements.closeNavMobile.addEventListener(\"click\", function () {\n  sections.mobileNav.classList.add(\"mobileNav_Hidden\");\n});\nelements.mobileMainBtn.addEventListener(\"click\", renderMainMobile);\nelements.mobileSearchBtn.addEventListener(\"click\", renderSearchMobile);\nelements.mobileSavedCitiesBtn.addEventListener(\"click\", renderSaveCitiesMobile);\nelements.dashBoardBtn.addEventListener(\"click\", renderDashBoard);\nelements.savedCitiesBtn.addEventListener(\"click\", renderSavedCitiesDesktop);\n\n//# sourceURL=webpack://weatherpage/./src/navigation.js?");

/***/ }),

/***/ "./src/utils/nodes.js":
/*!****************************!*\
  !*** ./src/utils/nodes.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar $ = function $(element) {\n  return document.querySelector(element);\n};\n\nvar $$ = function $$(element) {\n  return document.querySelectorAll(element);\n};\n\nvar nodes = {\n  sections: {\n    mainHeaderMobile: $(\".headerMobileMain\"),\n    searchHeaderMobile: $(\".headerMobileSearch\"),\n    savedCitiesHeaderMobile: $(\".headerMobileSaved\"),\n    nextDaysHeaderMobile: $(\".headerMobileNextDays\"),\n    mobileNav: $(\".mobileNav\"),\n    mainWeather: $(\".mainWeather\"),\n    weatherPerHours: $(\".weatherPerHours\"),\n    weatherPerHoursSlider: $(\".weatherPerHours__sliderWeatherHours\"),\n    mainSearchMobile: $(\".mainSearchMobile\"),\n    savedCities: $(\".savedCities\"),\n    mainInfo: $(\".mainDesktop\"),\n    mainHeaderDesktop: $(\".mainDesktop__header\"),\n    mainNext2Days: $(\".mainNext2Days\"),\n    mainNext2DaysContent: $(\".mainNext2Days__content\")\n  },\n  elements: {\n    arroBackNextDays: $(\".headerMobileNextDays__arrowBack\"),\n    menuIconMobile: $$(\".menuIconMobile\"),\n    closeNavMobile: $(\".mobileNav__closeMobileNav\"),\n    mobileMainBtn: $(\".mobileNav__main\"),\n    mobileSearchBtn: $(\".mobileNav__search\"),\n    mobileSavedCitiesBtn: $(\".mobileNav__saved\"),\n    darkModeBtn: $$(\".darkModeBtn\"),\n    cityNameHeader: $(\".headerMobileMain__cityName\"),\n    saveCityBtn: $(\".saveCityBtn\"),\n    searchCityInput: $(\".searchCityInput\"),\n    sunriseInfo: $(\".sunriseInfo\"),\n    sunsetInfo: $(\".sunsetInfo\"),\n    dateInfo: $(\".dateInfo\"),\n    hourInfo: $(\".hourInfo\"),\n    temperature: $(\".tempInfo\"),\n    typeWeatherInfo: $(\".typeWeatherInfo\"),\n    pressure: $(\".pressureInfo\"),\n    humadity: $(\".humadityInfo\"),\n    windSpeed: $(\".windSpeedInfo\"),\n    twoDaysMore: $(\".twoDaysMore\"),\n    daymoreInfo: $(\".content__city\"),\n    //*Elements desktop\n    searchCityDesktop: $(\".searchCityDesktop\"),\n    titleCityDesktop: $(\".titleCityDesktop__title\"),\n    dashBoardBtn: $(\".navDesktop__dashBoardBtn\"),\n    savedCitiesBtn: $(\".navDesktop__saveCityBtn\")\n  },\n  modals: {\n    modalLoading: $(\".modalLoading\"),\n    modalFirstLoading: $(\".modalFirstLoading\"),\n    modalFail: $(\".modalFail\"),\n    modalExceedPetitions: $(\".modalExceedPetitions\"),\n    errorMessage: $(\".citySearched\"),\n    closeModalFailed: $(\".closeModalFail\")\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (nodes);\n\n//# sourceURL=webpack://weatherpage/./src/utils/nodes.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/navigation.js");
/******/ 	
/******/ })()
;
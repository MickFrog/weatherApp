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

/***/ "./src/modules/domBusiness.js":
/*!************************************!*\
  !*** ./src/modules/domBusiness.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ displayWeather)\n/* harmony export */ });\n//get elements\nconst location = document.querySelector('.city');\nconst weatherCondition = document.getElementById('weatherCondition');\nconst temperature = document.getElementById('temp');\nconst feel = document.getElementById('feels');\nconst wind = document.getElementById('wind');\nconst humidity = document.getElementById('humid');\nconst bodyElement = document.body;\n\nlet prevWeather = '';\n\nfunction capitalize(myStr) {\n    const words = myStr.split(\" \");\n\n    for (let i = 0; i < words.length; i++) {\n        words[i] = words[i][0].toUpperCase() + words[i].substr(1);\n    }\n\n    return words.join(\" \");\n}\n\nfunction displayLocation(locationStr) {\n    location.textContent = locationStr;\n}\n\nfunction displayMainWeather(desc, tempInt) {\n    desc = capitalize(desc);\n    weatherCondition.textContent = desc;\n    temperature.innerHTML = tempInt + '\\u2103';\n}\n\nfunction displayOtherStats(feelInt, windInt, humidInt) {\n    feel.textContent = feelInt + '\\u2103';\n    wind.textContent = windInt + ' m/s';\n    humidity.textContent = humidInt + '%';\n}\n\nfunction bgStyles(bg) {\n    bodyElement.style.backgroundImage = `url(./images/weatherBg/${bg}.svg)`;\n}\n\nfunction changeBg(currWeather) {\n    if (prevWeather == currWeather) return; //prevent changing bg to similar bg\n    prevWeather = currWeather;\n\n    switch (currWeather) {\n        case 'Clear':\n            bgStyles('clear');\n            break;\n        case 'Rain':\n            bgStyles('rainy');\n            break;\n        case 'Clouds':\n            bgStyles('Cloudy');\n            break;\n        case 'Snow':\n            bgStyles('snow');\n            break;\n        case 'Sunny':\n            bgStyles('sunny');\n            break;\n        default:\n            bgStyles('clear');\n            break;\n    }\n}\n\nfunction displayWeather(myWeatherObj) {\n    if (myWeatherObj == null) return; //prevent trying display of invalid locations\n    displayLocation(myWeatherObj.location);\n    displayMainWeather(myWeatherObj.weatherDesc, myWeatherObj.cityTemp);\n    displayOtherStats(myWeatherObj.tempFeel, myWeatherObj.windSpeed, myWeatherObj.humidity);\n\n    changeBg(myWeatherObj.mainWeather);\n}\n\n//# sourceURL=webpack://weatherapp/./src/modules/domBusiness.js?");

/***/ }),

/***/ "./src/modules/weather.js":
/*!********************************!*\
  !*** ./src/modules/weather.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getCityWeather)\n/* harmony export */ });\nasync function getWeatherData(city) {\n    try { //make API call and return response Object\n        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3cdd9a839ee1a7573b2f830649b4f7af&units=metric`);\n        if (!response.ok) throw new Error(`No city named ${city}.`);\n\n        const responseObject = await response.json();\n        return responseObject;\n    } catch (error) {\n        alert(error.message);\n        return null;\n    }\n}\n\nasync function processData(dataObj) {\n    if (dataObj == null) return; //prevent unrecognised locations\n\n    let location = dataObj.name + \", \" + dataObj.sys.country;\n    let mainWeather = dataObj.weather[0].main;\n    let weatherDesc = dataObj.weather[0].description;\n    let cityTemp = dataObj.main.temp;\n    let tempFeel = dataObj.main.feels_like;\n    let windSpeed = dataObj.wind.speed;\n    let humidity = dataObj.main.humidity;\n\n    return {location, mainWeather, weatherDesc, cityTemp, tempFeel, windSpeed, humidity};\n}\n\nasync function getCityWeather(city) {\n    let FullWeatherObj = await getWeatherData(city);\n    let filteredWeatherObj = processData(FullWeatherObj);\n    \n    return filteredWeatherObj;\n}\n\n\n//# sourceURL=webpack://weatherapp/./src/modules/weather.js?");

/***/ }),

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_weather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/weather */ \"./src/modules/weather.js\");\n/* harmony import */ var _modules_domBusiness__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/domBusiness */ \"./src/modules/domBusiness.js\");\n\n\n\nconst searchBar = document.getElementById('searchTarget');\nconst searchForm = document.getElementById('searchForm');\n\nsearchForm.addEventListener('submit', async (event) => {\n    event.preventDefault();\n    if (searchBar.value == \"\") return;\n\n    let weatherObj = await (0,_modules_weather__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(searchBar.value);\n    (0,_modules_domBusiness__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(weatherObj);\n\n    searchForm.reset();\n})\n\nfunction initPage() {\n    searchBar.value = 'London';\n    searchForm.dispatchEvent(new Event('submit'));\n}\n\ninitPage();\n\n//# sourceURL=webpack://weatherapp/./src/script.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/script.js");
/******/ 	
/******/ })()
;
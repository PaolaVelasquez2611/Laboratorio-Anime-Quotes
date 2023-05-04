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

/***/ "./src/components/Favorites/favorites.css":
/*!************************************************!*\
  !*** ./src/components/Favorites/favorites.css ***!
  \************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"#title {\\n    \\n    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\\n    display: flex;\\n    flex-direction: row;\\n    align-items: center;\\n    justify-content: center;\\n    color: aliceblue;\\n}\\n\\n#character {\\n    font-family: Arial, Helvetica, sans-serif; \\n    display: flex;\\n    flex-direction: row;\\n    align-items: center;\\n    justify-content: center;\\n    color: aliceblue;\\n}\\n\\n.section {\\n    background-color: rgb(176, 228, 243);\\n    border-radius: 30px ;\\n    padding: 20px;\\n    margin: 7px;\\n    background-image: url(https://free4kwallpapers.com/uploads/originals/2022/03/28/anime-landscape-for-desktop-scenery-clouds-stars-buildings-wallpaper.jpg);\\n    background-repeat: no-repeat;\\n    background-size: cover;\\n    background-blend-mode: multiply;\\n\\n}\\n\\n#quote {\\n    font-family: Arial, Helvetica, sans-serif; \\n    display: flex;\\n    flex-direction: row;\\n    align-items: center;\\n    justify-content: center;\\n    color: aliceblue;\\n    margin: 2px;\\n    margin-top: 20px;\\n}\\n\\nbutton {\\n    background-color: rgb(250, 89, 151);\\n    border: none;\\n    border-radius: 20px;\\n    height: 30px;\\n    flex-direction: row;\\n    margin-left: 93%;\\n    margin-bottom: 2px;\\n  \\n    \\n}\\n\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/components/Favorites/favorites.css?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://dca_scoffolding/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://dca_scoffolding/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/Utils/storage.ts":
/*!******************************!*\
  !*** ./src/Utils/storage.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PersistanceKeys\": () => (/* binding */ PersistanceKeys),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar PersistanceKeys;\n(function (PersistanceKeys) {\n    PersistanceKeys[\"STORE\"] = \"STORE\";\n})(PersistanceKeys || (PersistanceKeys = {}));\nconst get = ({ key, defaultValue, }) => {\n    const value = localStorage.getItem(key) || sessionStorage.getItem(key);\n    return value ? JSON.parse(value) : defaultValue;\n};\nconst set = ({ key, value, session = false, }) => {\n    const storage = session ? sessionStorage : localStorage;\n    const parsed = JSON.stringify(value);\n    storage.setItem(key, parsed);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n    get,\n    set,\n});\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/Utils/storage.ts?");

/***/ }),

/***/ "./src/components/Favorites/favorites.ts":
/*!***********************************************!*\
  !*** ./src/components/Favorites/favorites.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Attributes\": () => (/* binding */ Attributes),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../store/actions */ \"./src/store/actions.ts\");\n/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../store/index */ \"./src/store/index.ts\");\n/* harmony import */ var _favorites_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./favorites.css */ \"./src/components/Favorites/favorites.css\");\n\n\n\nvar Attributes;\n(function (Attributes) {\n    Attributes[\"anime\"] = \"anime\";\n    Attributes[\"character\"] = \"character\";\n    Attributes[\"quote\"] = \"quote\";\n    Attributes[\"favorite\"] = \"favorite\";\n})(Attributes || (Attributes = {}));\nclass Animes extends HTMLElement {\n    static get observedAttributes() {\n        const attributes = {\n            anime: null,\n            character: null,\n            quote: null,\n            favorite: null,\n        };\n        return Object.keys(attributes);\n    }\n    constructor() {\n        super();\n        this.attachShadow({ mode: \"open\" });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    attributeChangedCallback(propName, oldValue, newValue) {\n        switch (propName) {\n            default:\n                this[propName] = newValue;\n                break;\n        }\n        this.render();\n    }\n    render() {\n        var _a;\n        if (this.shadowRoot) {\n            this.shadowRoot.innerHTML = ``;\n            this.shadowRoot.innerHTML += `\n        <style>${_favorites_css__WEBPACK_IMPORTED_MODULE_2__[\"default\"].toString()}</style>\n        <section class=\"section\">\n        <h3 id=\"quote\">${this.quote}</h3>\n        <p id=\"character\"> by ${this.character}</p>\n        <p id=\"title\">${this.anime}</p>\n        <button>Add Favorite</button>\n        </section>\n        \n        `;\n            const button = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector(\"button\");\n            button === null || button === void 0 ? void 0 : button.addEventListener(\"click\", () => {\n                (0,_store_index__WEBPACK_IMPORTED_MODULE_1__.dispatch)((0,_store_actions__WEBPACK_IMPORTED_MODULE_0__.addFavorite)({\n                    payload: {\n                        quote: String(this.quote),\n                        character: String(this.character),\n                        anime: String(this.anime),\n                    }\n                }));\n            });\n        }\n    }\n}\ncustomElements.define(\"anime-categorias\", Animes);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Animes);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/components/Favorites/favorites.ts?");

/***/ }),

/***/ "./src/components/data.ts":
/*!********************************!*\
  !*** ./src/components/data.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getApi\": () => (/* binding */ getApi)\n/* harmony export */ });\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nfunction getApi() {\n    return __awaiter(this, void 0, void 0, function* () {\n        try {\n            const dataanime = yield fetch(\"https://animechan.vercel.app/api/quotes\");\n            const response = yield dataanime.json();\n            console.log(response);\n            return response;\n        }\n        catch (error) {\n            console.log(\"no sirve el api\");\n        }\n    });\n}\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/components/data.ts?");

/***/ }),

/***/ "./src/components/export.ts":
/*!**********************************!*\
  !*** ./src/components/export.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Animes\": () => (/* reexport safe */ _Favorites_favorites__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _Favorites_favorites__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Favorites/favorites */ \"./src/components/Favorites/favorites.ts\");\n\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/components/export.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/data */ \"./src/components/data.ts\");\n/* harmony import */ var _components_export__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/export */ \"./src/components/export.ts\");\n/* harmony import */ var _components_Favorites_favorites__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Favorites/favorites */ \"./src/components/Favorites/favorites.ts\");\n/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store/index */ \"./src/store/index.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\n\n\n\n\nclass AppContainer extends HTMLElement {\n    constructor() {\n        super();\n        this.animequote = [];\n        this.attachShadow({ mode: \"open\" });\n    }\n    connectedCallback() {\n        return __awaiter(this, void 0, void 0, function* () {\n            const data = yield (0,_components_data__WEBPACK_IMPORTED_MODULE_0__.getApi)();\n            if (_store_index__WEBPACK_IMPORTED_MODULE_3__.app.favorites.length === 0) {\n                const action = yield (0,_components_data__WEBPACK_IMPORTED_MODULE_0__.getApi)();\n                (0,_store_index__WEBPACK_IMPORTED_MODULE_3__.dispatch)(action);\n            }\n            else {\n                this.render(data);\n            }\n        });\n    }\n    addTofav() {\n        console.log(\"wuwu\");\n    }\n    render(data) {\n        var _a;\n        data.forEach((anime) => {\n            const quotesAnime = this.ownerDocument.createElement('anime-categorias');\n            quotesAnime.setAttribute(_components_Favorites_favorites__WEBPACK_IMPORTED_MODULE_2__.Attributes.anime, anime.anime);\n            quotesAnime.setAttribute(_components_Favorites_favorites__WEBPACK_IMPORTED_MODULE_2__.Attributes.character, anime.character);\n            quotesAnime.setAttribute(_components_Favorites_favorites__WEBPACK_IMPORTED_MODULE_2__.Attributes.quote, anime.quote);\n            quotesAnime.setAttribute(_components_Favorites_favorites__WEBPACK_IMPORTED_MODULE_2__.Attributes.favorite, \"normal\");\n            this.animequote.push(quotesAnime);\n        });\n        if (this.shadowRoot)\n            this.shadowRoot.innerHTML = `\n            <link rel=\"stylesheet\" href=\"../src/index.css\">\n            <h1 id=\"title\">  -- Random Anime Quotes -- </h1>\n            <p id=\"title\"> Choose the ones you like </p>\n            `;\n        this.animequote.forEach((animequote) => {\n            var _a;\n            (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(animequote);\n        });\n        const section = this.ownerDocument.createElement(\"section\");\n        const Title2 = this.ownerDocument.createElement(\"h1\");\n        Title2.innerText = \"-- Your Favorites --\";\n        Title2.id = \"title\";\n        section.appendChild(Title2);\n        _store_index__WEBPACK_IMPORTED_MODULE_3__.app.favorites.forEach((card, i) => {\n            const favquotesAnime = this.ownerDocument.createElement('anime-categorias');\n            favquotesAnime.setAttribute(_components_Favorites_favorites__WEBPACK_IMPORTED_MODULE_2__.Attributes.anime, card.anime);\n            favquotesAnime.setAttribute(_components_Favorites_favorites__WEBPACK_IMPORTED_MODULE_2__.Attributes.character, card.character);\n            favquotesAnime.setAttribute(_components_Favorites_favorites__WEBPACK_IMPORTED_MODULE_2__.Attributes.quote, card.quote);\n            section.appendChild(favquotesAnime);\n        });\n        (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(section);\n    }\n}\ncustomElements.define('app-container', AppContainer);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/index.ts?");

/***/ }),

/***/ "./src/store/actions.ts":
/*!******************************!*\
  !*** ./src/store/actions.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Get\": () => (/* binding */ Get),\n/* harmony export */   \"addFavorite\": () => (/* binding */ addFavorite)\n/* harmony export */ });\n/* harmony import */ var _components_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/data */ \"./src/components/data.ts\");\n/* harmony import */ var _types_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types/store */ \"./src/types/store.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\n\n\nconst addFavorite = ({ payload }) => {\n    return {\n        action: _types_store__WEBPACK_IMPORTED_MODULE_1__.QuoteActions.ADD,\n        payload\n    };\n};\nconst Get = () => __awaiter(void 0, void 0, void 0, function* () {\n    const cards = (0,_components_data__WEBPACK_IMPORTED_MODULE_0__.getApi)();\n    return {\n        action: _types_store__WEBPACK_IMPORTED_MODULE_1__.QuoteActions.GET,\n        payload: []\n    };\n});\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/store/actions.ts?");

/***/ }),

/***/ "./src/store/index.ts":
/*!****************************!*\
  !*** ./src/store/index.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addObserver\": () => (/* binding */ addObserver),\n/* harmony export */   \"app\": () => (/* binding */ app),\n/* harmony export */   \"dispatch\": () => (/* binding */ dispatch)\n/* harmony export */ });\n/* harmony import */ var _Utils_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Utils/storage */ \"./src/Utils/storage.ts\");\n/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducer */ \"./src/store/reducer.ts\");\n\n\nconst emptyFavorites = {\n    favorites: [],\n};\nlet app = _Utils_storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get({\n    key: _Utils_storage__WEBPACK_IMPORTED_MODULE_0__.PersistanceKeys.STORE,\n    defaultValue: emptyFavorites\n});\nlet Observers = [];\nconst saveStore = (state) => {\n    _Utils_storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].set({ key: _Utils_storage__WEBPACK_IMPORTED_MODULE_0__.PersistanceKeys.STORE, value: state });\n};\nconst notifyObservers = () => { Observers.forEach((a) => a.render()); };\nconst dispatch = (action) => {\n    const copy = JSON.parse(JSON.stringify(app));\n    const newApp = (0,_reducer__WEBPACK_IMPORTED_MODULE_1__.reducer)(action, copy);\n    app = newApp;\n    saveStore(newApp);\n    notifyObservers();\n};\nconst addObserver = (ref) => {\n    Observers = [...Observers, ref];\n};\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/store/index.ts?");

/***/ }),

/***/ "./src/store/reducer.ts":
/*!******************************!*\
  !*** ./src/store/reducer.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"reducer\": () => (/* binding */ reducer)\n/* harmony export */ });\n/* harmony import */ var _types_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types/store */ \"./src/types/store.ts\");\n\nconst reducer = (currentAction, currentState) => {\n    const { action, payload } = currentAction;\n    switch (action) {\n        case _types_store__WEBPACK_IMPORTED_MODULE_0__.QuoteActions.ADD:\n            return Object.assign(Object.assign({}, currentState), { favorites: [\n                    payload,\n                    ...currentState.favorites,\n                ] });\n        case _types_store__WEBPACK_IMPORTED_MODULE_0__.QuoteActions.GET:\n            return Object.assign(Object.assign({}, currentState), { favorites: payload });\n        default:\n            return currentState;\n    }\n};\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/store/reducer.ts?");

/***/ }),

/***/ "./src/types/store.ts":
/*!****************************!*\
  !*** ./src/types/store.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"QuoteActions\": () => (/* binding */ QuoteActions)\n/* harmony export */ });\nvar QuoteActions;\n(function (QuoteActions) {\n    QuoteActions[\"ADD\"] = \"ADD\";\n    QuoteActions[\"GET\"] = \"GET\";\n})(QuoteActions || (QuoteActions = {}));\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/types/store.ts?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;
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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/desktop.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/desktop.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../images/league.jpg */ \"./images/league.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@media (min-width: 768px) {\\r\\n  .nav-bar {\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    justify-content: space-between;\\r\\n  }\\r\\n\\r\\n  .nav-bar ul {\\r\\n    position: relative;\\r\\n    display: flex;\\r\\n    flex-direction: row;\\r\\n    align-items: center;\\r\\n    justify-content: space-between;\\r\\n    gap: 2rem;\\r\\n    top: 0;\\r\\n    left: 0;\\r\\n    padding: 0;\\r\\n    width: fit-content;\\r\\n    height: auto;\\r\\n    transition: 0s;\\r\\n  }\\r\\n\\r\\n  .menu {\\r\\n    display: none;\\r\\n  }\\r\\n\\r\\n  .banner {\\r\\n    background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\r\\n    height: 72vh;\\r\\n    background-position: center;\\r\\n    background-repeat: no-repeat;\\r\\n    background-size: cover;\\r\\n    padding: 1rem 3rem;\\r\\n    display: flex;\\r\\n  }\\r\\n\\r\\n  .left {\\r\\n    width: 60%;\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    gap: 1rem;\\r\\n    justify-content: center;\\r\\n  }\\r\\n\\r\\n  .left h1 {\\r\\n    font-size: 2rem;\\r\\n    width: 80%;\\r\\n  }\\r\\n\\r\\n  .left p {\\r\\n    width: 70%;\\r\\n  }\\r\\n\\r\\n  .left button {\\r\\n    width: fit-content;\\r\\n    padding: 0.3rem 2rem;\\r\\n    border: none;\\r\\n    border-radius: 0.3rem;\\r\\n    background-color: #00ef00;\\r\\n  }\\r\\n\\r\\n  /* section-card */\\r\\n  .card-container {\\r\\n    display: grid;\\r\\n    grid-template-columns: 1fr  1fr 1fr 1fr;\\r\\n    gap: 2rem 1.5rem;\\r\\n    padding: 1rem;\\r\\n  }\\r\\n\\r\\n  .box-card {\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    gap: 1rem;\\r\\n    border-radius: 0.5em;\\r\\n  }\\r\\n\\r\\n  .img-box img {\\r\\n    width: 100%;\\r\\n    height: 100%;\\r\\n    object-fit: cover;\\r\\n    border-radius: 0.5rem 0.5rem 0 0;\\r\\n  }\\r\\n\\r\\n  .img-box {\\r\\n    height: 40%;\\r\\n  }\\r\\n\\r\\n  .btn-comment {\\r\\n    background-color: #363a4152;\\r\\n    padding: 0.1rem;\\r\\n    font-size: 0.8rem;\\r\\n    border-radius: 0.3rem;\\r\\n    color: var(--clr-fontcolor);\\r\\n    border: none;\\r\\n  }\\r\\n\\r\\n  .btn-reservation {\\r\\n    background-color: #363a414c;\\r\\n    padding: 0.1rem;\\r\\n    font-size: 0.8rem;\\r\\n    border-radius: 0.3rem;\\r\\n    color: var(--clr-fontcolor);\\r\\n    border: none;\\r\\n    transition: background-color 0.5s;\\r\\n  }\\r\\n\\r\\n  .btn-reservation:hover {\\r\\n    background-color: #00ef00;\\r\\n\\r\\n    /* color: var(--clr-primary) ; */\\r\\n  }\\r\\n\\r\\n  footer {\\r\\n    margin: 0;\\r\\n  }\\r\\n\\r\\n  #Btn {\\r\\n    display: none;\\r\\n    position: fixed;\\r\\n    bottom: 5em;\\r\\n    background: transparent;\\r\\n    border-radius: 10em;\\r\\n    border: none;\\r\\n    right: 5em;\\r\\n    z-index: 99;\\r\\n    color: var(--clr-fontcolor);\\r\\n    cursor: pointer;\\r\\n  }\\r\\n\\r\\n  #Btn .bx {\\r\\n    font-size: 1.5em;\\r\\n    padding: 0 0.1em;\\r\\n  }\\r\\n\\r\\n  .logo2 span {\\r\\n    font-size: 1.2em;\\r\\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\\r\\n  }\\r\\n\\r\\n  .comment-child {\\r\\n    background-color: rgba(19, 22, 25, 0.966);\\r\\n    position: relative;\\r\\n    display: flex;\\r\\n    top: 5%;\\r\\n    margin: 0 auto;\\r\\n    overflow-y: scroll;\\r\\n    overflow-x: hidden;\\r\\n    flex-direction: column;\\r\\n    width: 400px;\\r\\n    border-radius: 1em;\\r\\n    gap: 10px;\\r\\n  }\\r\\n\\r\\n  .detail {\\r\\n    font-size: 1em;\\r\\n  }\\r\\n\\r\\n  .copyright {\\r\\n    color: var(--clr-fontcolor);\\r\\n    font-size: 0.9em;\\r\\n    font-family: 'Montserrat', sans-serif;\\r\\n  }\\r\\n\\r\\n  .box-description span {\\r\\n    font-size: 1rem;\\r\\n    font-weight: 500;\\r\\n  }\\r\\n\\r\\n  .like-text {\\r\\n    font-size: 0.7rem;\\r\\n  }\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://kanban-board/./src/css/desktop.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/main.css":
/*!****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/main.css ***!
  \****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../images/league.jpg */ \"./images/league.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"\\r\\n::-webkit-scrollbar {\\r\\n  width: 5px;\\r\\n  margin-left: -2em;\\r\\n}\\r\\n\\r\\n::-webkit-scrollbar-thumb {\\r\\n  background-color: var(--clr-primary);\\r\\n  border-radius: 20px;\\r\\n}\\r\\n\\r\\n* {\\r\\n  padding: 0;\\r\\n  margin: 0;\\r\\n  box-sizing: border-box;\\r\\n  text-decoration: none;\\r\\n}\\r\\n\\r\\nul li {\\r\\n  list-style: none;\\r\\n}\\r\\n\\r\\n:root {\\r\\n  --clr-primary: #353940;\\r\\n  --clr-background: #131619;\\r\\n  --clr-fontcolor: #ecf6ff;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  background-color: var(--clr-background);\\r\\n  color: var(--clr-fontcolor);\\r\\n  font-family: 'Montserrat', sans-serif;\\r\\n}\\r\\n\\r\\n/*  header */\\r\\n\\r\\nheader {\\r\\n  background-color: var(--clr-primary);\\r\\n  height: 70px;\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.logo {\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\nnav {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n}\\r\\n\\r\\na {\\r\\n  cursor: pointer !important;\\r\\n  text-decoration: none;\\r\\n}\\r\\n\\r\\nnav a {\\r\\n  transition: color 0.3s !important;\\r\\n  color: white !important;\\r\\n}\\r\\n\\r\\nnav a:hover {\\r\\n  cursor: pointer;\\r\\n  color: #00ef00 !important;\\r\\n}\\r\\n\\r\\n#games:hover {\\r\\n  cursor: pointer;\\r\\n  color: #00ef00 !important;\\r\\n}\\r\\n\\r\\n.icon {\\r\\n  width: 25px;\\r\\n  height: 25px;\\r\\n}\\r\\n\\r\\n.nav-ul {\\r\\n  position: absolute;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  gap: 3rem;\\r\\n  left: -100%;\\r\\n  background-color: var(--clr-primary);\\r\\n  width: 100%;\\r\\n  height: 100vh;\\r\\n  padding: 1rem;\\r\\n  top: 70px;\\r\\n  margin: 0 !important;\\r\\n  transition: left 0.5s;\\r\\n}\\r\\n\\r\\n.ul-toggle {\\r\\n  left: 0;\\r\\n  top: 70px;\\r\\n}\\r\\n\\r\\n/* banner */\\r\\n\\r\\n.banner {\\r\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\r\\n  height: auto;\\r\\n  background-position: center;\\r\\n  background-repeat: no-repeat;\\r\\n  background-size: cover;\\r\\n  padding: 1rem 1rem;\\r\\n  display: flex;\\r\\n}\\r\\n\\r\\n.left {\\r\\n  width: auto;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  gap: 0.5rem;\\r\\n}\\r\\n\\r\\n.left h1 {\\r\\n  font-size: 2rem;\\r\\n  width: 80%;\\r\\n}\\r\\n\\r\\n.left button {\\r\\n  width: fit-content;\\r\\n  padding: 0.3rem 2rem;\\r\\n  border: none;\\r\\n  border-radius: 0.3rem;\\r\\n  background-color: #00ef00;\\r\\n}\\r\\n\\r\\n/* section-card */\\r\\n.card-container {\\r\\n  display: grid;\\r\\n  grid-template-columns: 1fr;\\r\\n  row-gap: 1rem;\\r\\n  padding: 1rem;\\r\\n  border-radius: 0.3rem;\\r\\n}\\r\\n\\r\\n.box-card {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  gap: 3rem;\\r\\n  background-color: rgba(0, 0, 0, 0.119);\\r\\n  box-shadow: 4px 4px 25px #ecf6ff5f;\\r\\n  transition: box-shadow 0.3s;\\r\\n  border-radius: 0.5rem;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.box-card:hover {\\r\\n  box-shadow: 0 2px 2px #ecf6ff37;\\r\\n}\\r\\n\\r\\n.btn-comment {\\r\\n  background-color: #363a4152;\\r\\n  padding: 0.1rem;\\r\\n  border-radius: 0.3rem;\\r\\n  color: var(--clr-fontcolor);\\r\\n  border: none;\\r\\n}\\r\\n\\r\\n.btn-reservation {\\r\\n  background-color: #363a414c;\\r\\n  padding: 0.1rem;\\r\\n  border-radius: 0.3rem;\\r\\n  color: var(--clr-fontcolor);\\r\\n  border: none;\\r\\n  transition: background-color 0.5s;\\r\\n  margin-bottom: 1rem;\\r\\n}\\r\\n\\r\\n.btn-reservation:hover {\\r\\n  background-color: #00ef00;\\r\\n}\\r\\n\\r\\n.img-box img {\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n  object-fit: cover;\\r\\n  border-radius: 0.5rem 0.5rem 0 0;\\r\\n}\\r\\n\\r\\n.box-description {\\r\\n  display: flex;\\r\\n  gap: 1rem;\\r\\n  flex-direction: column;\\r\\n  padding-left: 1rem;\\r\\n}\\r\\n\\r\\n.box-icon {\\r\\n  display: flex;\\r\\n  gap: 1rem;\\r\\n  align-items: center;\\r\\n  justify-content: space-between;\\r\\n  padding: 0.6rem;\\r\\n}\\r\\n\\r\\n.material-symbols-outlined {\\r\\n  color: #00ef00;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n/* comments */\\r\\n\\r\\n.comments-popup {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n.comment-popup {\\r\\n  position: fixed;\\r\\n  top: 0;\\r\\n  left: 0;\\r\\n  margin: 0 auto;\\r\\n  backdrop-filter: blur(5px);\\r\\n  background-color: rgba(53, 57, 64, 0.26);\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  z-index: 500;\\r\\n  height: 100vh;\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n.comment-close {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n.comment-child {\\r\\n  background-color: rgba(19, 22, 25, 0.966);\\r\\n  display: flex;\\r\\n  margin: 0 auto;\\r\\n  margin-top: 25%;\\r\\n  flex-direction: column;\\r\\n  width: 350px;\\r\\n  height: 90%;\\r\\n  padding: 1em 0.4em;\\r\\n  overflow-y: scroll;\\r\\n  border-radius: 1em;\\r\\n  gap: 10px;\\r\\n}\\r\\n\\r\\n.popupCard {\\r\\n  padding: 4%;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  justify-content: center;\\r\\n}\\r\\n\\r\\n.imagePopBox {\\r\\n  height: 50%;\\r\\n  gap: 10px;\\r\\n  padding: 1em 1em;\\r\\n  justify-content: center;\\r\\n  display: flex;\\r\\n}\\r\\n\\r\\n.imagePopBox img {\\r\\n  width: 95%;\\r\\n  padding: 1em 0;\\r\\n  height: 100%;\\r\\n  object-fit: cover;\\r\\n}\\r\\n\\r\\n.popClose {\\r\\n  position: relative;\\r\\n  bottom: 97%;\\r\\n  left: 95%;\\r\\n}\\r\\n\\r\\n.popClose .bx-x-circle {\\r\\n  font-size: 30px;\\r\\n  color: var(--clr-fontcolor);\\r\\n}\\r\\n\\r\\n.titlePop {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  font-size: 1.2em;\\r\\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\\r\\n}\\r\\n\\r\\n.details {\\r\\n  display: flex;\\r\\n  align-content: flex-start;\\r\\n}\\r\\n\\r\\n.detail {\\r\\n  display: grid;\\r\\n  margin-left: -1.4em;\\r\\n  grid-template-rows: 1fr 1fr;\\r\\n  row-gap: 10px;\\r\\n  color: rgb(0, 239, 0);\\r\\n  font-size: 0.8em;\\r\\n}\\r\\n\\r\\n.comCard {\\r\\n  padding: 0.1em 0.7em;\\r\\n}\\r\\n\\r\\n.comShow {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  width: 100%;\\r\\n  overflow-y: scroll;\\r\\n  height: 300px;\\r\\n  padding: 0.1em 0.6em;\\r\\n  margin-bottom: 2em;\\r\\n  border: rgba(0, 239, 0, 0.452) 0.1em solid;\\r\\n}\\r\\n\\r\\n.commentsDiv {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  height: 100%;\\r\\n  gap: 0.1em;\\r\\n  font-size: 1em;\\r\\n  font-family: 'Montserrat', sans-serif;\\r\\n  border-bottom: rgba(0, 239, 0, 0.692) 0.1em solid;\\r\\n}\\r\\n\\r\\n.commentsDiv:last-child {\\r\\n  border-bottom: none;\\r\\n}\\r\\n\\r\\n.font {\\r\\n  font-size: 0.9em;\\r\\n  color: rgba(236, 246, 255, 0.767);\\r\\n}\\r\\n\\r\\n.date {\\r\\n  font-size: 0.9em;\\r\\n  color: rgba(236, 246, 255, 0.767);\\r\\n}\\r\\n\\r\\nform {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  gap: 9px;\\r\\n}\\r\\n\\r\\ninput {\\r\\n  background: transparent;\\r\\n  outline: none;\\r\\n  border: 1px solid #353940;\\r\\n  padding: 0.5em 0;\\r\\n  color: var(--clr-fontcolor);\\r\\n}\\r\\n\\r\\ntextarea {\\r\\n  background: transparent;\\r\\n  padding: 0.2em 0;\\r\\n  outline: none;\\r\\n  color: var(--clr-fontcolor);\\r\\n}\\r\\n\\r\\n.submit {\\r\\n  background-color: var(--clr-primary);\\r\\n  padding: 0.5em 0;\\r\\n  color: var(--clr-fontcolor);\\r\\n  border-radius: 0.3em;\\r\\n}\\r\\n\\r\\n.CloseBtn {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n/* footer */\\r\\nfooter {\\r\\n  max-width: 100%;\\r\\n  height: 6em;\\r\\n  padding: 2em 0.5em;\\r\\n  font-family: 'Montserrat', sans-serif;\\r\\n  background-color: var(--clr-primary);\\r\\n  color: var(--clr-fontcolor);\\r\\n}\\r\\n\\r\\n.wrap {\\r\\n  display: flex;\\r\\n  justify-content: space-around;\\r\\n  gap: 1em;\\r\\n  align-items: center;\\r\\n  padding: 0 1em;\\r\\n}\\r\\n\\r\\n.logo2 span {\\r\\n  font-size: 0.8em;\\r\\n  color: var(--clr-fontcolor);\\r\\n  font-weight: 600;\\r\\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\\r\\n}\\r\\n\\r\\n.top:hover {\\r\\n  text-decoration: none;\\r\\n}\\r\\n\\r\\n#Btn {\\r\\n  display: none;\\r\\n  position: fixed;\\r\\n  bottom: 5px;\\r\\n  background: transparent;\\r\\n  border-radius: 10em;\\r\\n  border: none;\\r\\n  right: 30px;\\r\\n  z-index: 99;\\r\\n  color: var(--clr-fontcolor);\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n#Btn .bx {\\r\\n  color: var(--clr-fontcolor);\\r\\n  font-size: 2em;\\r\\n  padding: 0 0.1em;\\r\\n}\\r\\n\\r\\n.copyright {\\r\\n  color: var(--clr-fontcolor);\\r\\n  font-size: 0.6em;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://kanban-board/./src/css/main.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://kanban-board/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://kanban-board/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://kanban-board/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/css/desktop.css":
/*!*****************************!*\
  !*** ./src/css/desktop.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_desktop_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./desktop.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/desktop.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_desktop_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_desktop_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_desktop_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_desktop_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://kanban-board/./src/css/desktop.css?");

/***/ }),

/***/ "./src/css/main.css":
/*!**************************!*\
  !*** ./src/css/main.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./main.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/main.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://kanban-board/./src/css/main.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://kanban-board/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://kanban-board/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://kanban-board/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://kanban-board/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://kanban-board/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://kanban-board/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/main.css */ \"./src/css/main.css\");\n/* harmony import */ var _css_desktop_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/desktop.css */ \"./src/css/desktop.css\");\n/* harmony import */ var _modules_menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/menu.js */ \"./src/modules/menu.js\");\n/* harmony import */ var _modules_menu_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modules_menu_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _modules_render_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/render.js */ \"./src/modules/render.js\");\n/* harmony import */ var _modules_itemCounter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/itemCounter.js */ \"./src/modules/itemCounter.js\");\n\n\n\n\n\n\n(0,_modules_render_js__WEBPACK_IMPORTED_MODULE_3__.loadCard)();\n(0,_modules_itemCounter_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\nconst myButton = document.getElementById('Btn');\n\nfunction scrollFunction() {\n  if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {\n    myButton.style.display = 'block';\n  } else {\n    myButton.style.display = 'none';\n  }\n}\n\nwindow.onscroll = function () {\n  scrollFunction();\n};\n\nmyButton.addEventListener('click', () => {\n  document.body.scrollTop = 0;\n  document.documentElement.scrollTop = 0;\n});\n\n\n//# sourceURL=webpack://kanban-board/./src/index.js?");

/***/ }),

/***/ "./src/modules/api.js":
/*!****************************!*\
  !*** ./src/modules/api.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getGame\": () => (/* binding */ getGame),\n/* harmony export */   \"getLikes\": () => (/* binding */ getLikes),\n/* harmony export */   \"postLikes\": () => (/* binding */ postLikes)\n/* harmony export */ });\nconst key = 'https://api.rawg.io/api/games?key=2525d548c34d45f18dd11454eed1df14';\n\nconst getGame = async () => {\n  const res = await fetch(key);\n  const jsonData = await res.json();\n  const gameData = jsonData.results;\n  // loadCard(gameData);\n  return gameData;\n};\n\n// new identifier\nconst id = 'AFFSRiO8tq3BNoRoizLk';\nconst url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${id}/likes/`;\n\n// post likes\nconst postLikes = async (array) => {\n  const res = await fetch(url, {\n    method: 'Post',\n    body: JSON.stringify(array),\n    headers: {\n      Accept: 'application/json',\n      'Content-Type': 'application/json',\n      'Access-Control-Allow-Origin': '*',\n    },\n  });\n  const storage = await res.json();\n  return storage;\n};\n\n// get likes\n\nconst getLikes = async () => {\n  const res = await fetch(url);\n  const storage = await res.json();\n  return storage;\n};\n\n\n\n\n//# sourceURL=webpack://kanban-board/./src/modules/api.js?");

/***/ }),

/***/ "./src/modules/itemCounter.js":
/*!************************************!*\
  !*** ./src/modules/itemCounter.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ gamecount)\n/* harmony export */ });\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.js */ \"./src/modules/api.js\");\n\n\nconst gameCounter = document.getElementById('games');\n\nasync function gamecount() {\n  const data = await (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.getGame)();\n  const count = data.length;\n  gameCounter.textContent = `Games(${count})`;\n}\n\n\n//# sourceURL=webpack://kanban-board/./src/modules/itemCounter.js?");

/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ (() => {

eval("const menuIcon = document.getElementById('menu');\nconst navUl = document.getElementById('nav-ul');\n\nmenuIcon.addEventListener('click', (e) => {\n  e.preventDefault();\n  navUl.classList.toggle('ul-toggle');\n});\n\n\n//# sourceURL=webpack://kanban-board/./src/modules/menu.js?");

/***/ }),

/***/ "./src/modules/postComment.js":
/*!************************************!*\
  !*** ./src/modules/postComment.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst api = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/AFFSRiO8tq3BNoRoizLk/comments';\n\nconst PostComment = async (data) => {\n  await fetch(api, {\n    method: 'POST',\n    headers: {\n      'content-Type': 'application/json',\n    },\n    body: JSON.stringify(data),\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PostComment);\n\n//# sourceURL=webpack://kanban-board/./src/modules/postComment.js?");

/***/ }),

/***/ "./src/modules/render.js":
/*!*******************************!*\
  !*** ./src/modules/render.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"container\": () => (/* binding */ container),\n/* harmony export */   \"loadCard\": () => (/* binding */ loadCard)\n/* harmony export */ });\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.js */ \"./src/modules/api.js\");\n/* harmony import */ var _postComment_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./postComment.js */ \"./src/modules/postComment.js\");\n\n\n\nconst container = document.getElementById('card-container');\n\nlet count = 0;\n\n// getComment();\nconst loadCard = () => {\n  // initialize id for everyCard\n\n  const getGameData = async () => {\n    const games = await (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.getGame)();\n    // render every game\n    games.forEach((game, gameId) => {\n      const div = document.createElement('div');\n      div.classList.add('box-card');\n\n      const divImg = document.createElement('div');\n      divImg.classList.add('img-box');\n\n      const image = document.createElement('img');\n      image.setAttribute('src', `${game.background_image}`);\n\n      divImg.appendChild(image);\n\n      const box = document.createElement('div');\n      box.classList.add('box-description', 'text-wrap');\n\n      const boxIcon = document.createElement('div');\n      boxIcon.classList.add('box-icon');\n\n      const h3 = document.createElement('span');\n      h3.textContent = `${game.name}`;\n\n      const iconLike = document.createElement('span');\n      iconLike.classList.add('material-symbols-outlined');\n      iconLike.innerHTML = '&#10084;';\n\n      const span = document.createElement('span');\n      span.classList.add('like-text');\n\n      const displaysLikes = async () => {\n        const storage = await (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.getLikes)();\n\n        storage.filter((item) => {\n          const game = `game${gameId}`;\n          if (item.item_id === game) {\n            span.textContent = `${item.likes} likes`;\n          }\n\n          return item.likes;\n        });\n      };\n      displaysLikes();\n\n      boxIcon.append(iconLike, span);\n\n      box.append(h3);\n\n      const comments = document.createElement('button');\n      comments.classList.add('btn-comment', 'mx-1');\n      comments.textContent = 'Comments';\n\n      const reservations = document.createElement('button');\n      reservations.classList.add('btn-reservation', 'mx-1');\n      reservations.textContent = 'Reservations';\n\n      div.append(divImg, box, boxIcon, comments, reservations);\n\n      container.appendChild(div);\n      gameId += 1;\n\n      // function click likes buttom\n\n      iconLike.addEventListener(\n        'click',\n        () => {\n          iconLike.style.color = '#fff';\n          // e.preventDefault();\n          (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.postLikes)({\n            item_id: `game${gameId}`,\n          });\n          // Async that get likes from API\n          const displaysLikes = async () => {\n            const storage = await (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.getLikes)();\n            // console.log(storage);\n\n            storage.filter((item) => {\n              const game = `game${gameId}`;\n              if (item.item_id === game) {\n                span.textContent = `${item.likes + 1} likes`;\n              }\n\n              return item.likes + 1;\n            });\n          };\n\n          displaysLikes();\n        },\n        { once: true },\n      );\n\n      // comment\n      comments.addEventListener('click', (e) => {\n        e.preventDefault();\n        const main = document.querySelector('main');\n        main.style.position = 'fixed';\n        const commentsPop = document.querySelector('.comments-pop');\n        commentsPop.style.display = 'block';\n        const popup = document.createElement('div');\n        popup.classList.add('comment-popup');\n\n        const popupChild = document.createElement('div');\n        popupChild.classList.add('comment-child');\n\n        const popupCard = document.createElement('div');\n        popupCard.classList.add('popupCard');\n\n        const ImageDiv = document.createElement('div');\n        ImageDiv.classList.add('imagePopBox');\n\n        const popClose = document.createElement('div');\n        popClose.classList.add('popClose');\n        popClose.innerHTML = `\n     <i class='bx bx-x-circle bx-tad'></i>\n    `;\n\n        const imagePop = document.createElement('img');\n        imagePop.setAttribute('src', `${game.background_image}`);\n\n        popClose.addEventListener('click', () => {\n          commentsPop.style.display = 'none';\n          main.style.position = 'initial';\n        });\n\n        const title = document.createElement('span');\n        title.classList.add('titlePop');\n        title.innerText = `${game.name}`;\n\n        const details = document.createElement('div');\n        details.classList.add('details');\n        const detail = document.createElement('ul');\n        detail.classList.add('detail');\n        detail.innerHTML = `<li>Released date: ${game.released}</li>\n    <li>Playtime: ${game.playtime}</li>\n    <li>Rating: ${game.rating}</li>\n    <li>Updated: ${game.updated}</li>`;\n\n        details.append(detail);\n\n        const commentsCard = document.createElement('div');\n        commentsCard.classList.add('comCard');\n        const comTitle = document.createElement('span');\n        comTitle.textContent = 'Comments';\n        const commentsShow = document.createElement('div');\n        commentsShow.classList.add('comShow');\n\n        const getComment = async (gameId) => {\n          const getApi = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/AFFSRiO8tq3BNoRoizLk/comments?item_id=${gameId}`;\n          const request = new Request(getApi);\n          const response = await fetch(request);\n          const data = await response.json();\n          count = data.length;\n          commentsShow.innerHTML = `\n          <p id=\"comment\">Comment(${!count ? 0 : count})</p> \n          `;\n          // display comment on\n          // eslint-disable-next-line no-plusplus\n          for (let i = 0; i < data.length; i++) {\n            if (count > 0 && data.length > 0) {\n              const CommentsDiv = document.createElement('div');\n              CommentsDiv.classList.add('commentsDiv');\n              const nameDiv = document.createElement('span');\n              const commentDiv = document.createElement('span');\n              const date = document.createElement('p');\n              nameDiv.classList.add('font');\n              commentDiv.classList.add('font');\n              date.classList.add('date');\n              // eslint-disable-next-line no-template-curly-in-string\n              nameDiv.textContent = `Username: ${data[i].username}`;\n              commentDiv.textContent = `Comment: ${data[i].comment}`;\n              date.textContent = `Creation_date: ${data[i].creation_date}`;\n              CommentsDiv.append(nameDiv, commentDiv, date);\n              commentsShow.append(CommentsDiv);\n            }\n          }\n        };\n        getComment(gameId);\n\n        const addComment = document.createElement('div');\n        addComment.classList.add('addCom');\n\n        const addComTitle = document.createElement('span');\n        addComTitle.textContent = 'Add your comments';\n\n        //  creation of forms\n        const form = document.createElement('form');\n\n        const i = document.createElement('input');\n        i.setAttribute('type', 'text');\n        i.setAttribute('name', 'username');\n\n        const text = document.createElement('textarea');\n        text.setAttribute('type', 'text');\n        text.setAttribute('value', 'input comment');\n\n        const submit = document.createElement('input');\n        submit.classList.add('submit');\n        submit.setAttribute('type', 'submit');\n        submit.setAttribute('value', 'Submit');\n\n        form.addEventListener('submit', async (e) => {\n          e.preventDefault();\n          if (text.value && i.value === '');\n          const data = {\n            item_id: gameId,\n            username: i.value,\n            comment: text.value,\n          };\n          await (0,_postComment_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(data);\n          commentsShow.innerHTML = '';\n          // eslint-disable-next-line no-restricted-globals\n          getComment(gameId);\n          form.reset();\n        });\n        form.append(i, text, submit);\n        addComment.append(addComTitle, form);\n        // commentsShow.append(CommentDiv);\n        commentsCard.append(comTitle, commentsShow, addComment);\n        ImageDiv.append(imagePop);\n        popupCard.append(ImageDiv, title, details, commentsCard, popClose);\n        popupChild.appendChild(popupCard);\n        popup.appendChild(popupChild);\n        commentsPop.appendChild(popup);\n      });\n    });\n  };\n  getGameData();\n};\n\n\n\n\n//# sourceURL=webpack://kanban-board/./src/modules/render.js?");

/***/ }),

/***/ "./images/league.jpg":
/*!***************************!*\
  !*** ./images/league.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"07fe4437cef1a0a28628.jpg\";\n\n//# sourceURL=webpack://kanban-board/./images/league.jpg?");

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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
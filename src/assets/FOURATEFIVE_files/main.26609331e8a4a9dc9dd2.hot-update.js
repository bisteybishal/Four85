webpackHotUpdate("main",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/sass/App.scss":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!./node_modules/postcss-loader/src??postcss!./node_modules/resolve-url-loader??ref--6-oneOf-5-3!./node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-5-4!./src/sass/App.scss ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ../assets/homepage.jpeg */ "./src/assets/homepage.jpeg");
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
exports.push([module.i, ".navbar {\n  display: flex;\n  margin: 0 auto;\n  justify-content: space-between;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.7);\n  color: #ffffff;\n  padding: 10px;\n  position: fixed;\n  top: 0;\n  z-index: 2;\n  min-width: 100vw;\n  /* Hamburger Lines - Top & Bottom */\n  /* Moves Line Down */\n  /* Turns Lines Into X */ }\n  .navbar__brand-title {\n    font-weight: 400;\n    letter-spacing: 0;\n    padding-left: 20px;\n    font-size: calc(24px + 1 * ((100vw - 320px) / 680));\n    line-height: calc(40px + 6 * ((100vw - 320px) / 680));\n    text-align: left;\n    text-transform: uppercase; }\n  .navbar__links {\n    font-weight: 200;\n    font-size: calc(16px + 1 * ((100vw - 320px) / 680));\n    line-height: calc(40px + 6 * ((100vw - 320px) / 680));\n    text-align: left;\n    padding-right: 20px; }\n  .navbar__list {\n    display: flex;\n    margin: 0;\n    padding: 0; }\n  .navbar__link {\n    list-style: none;\n    display: block;\n    text-decoration: none;\n    color: #ffffff;\n    padding: 0.2rem 25px; }\n  .navbar .linkActive {\n    border: 2px solid #6969f6;\n    border-radius: 20px; }\n  .navbar__current {\n    border-bottom: 4px solid grey; }\n  .navbar .toggler {\n    position: absolute;\n    top: 0.2rem;\n    right: 1.5rem;\n    z-index: 2;\n    width: 50px;\n    height: 50px;\n    opacity: 0; }\n  .navbar .hamburger {\n    position: absolute;\n    right: 1.5rem;\n    z-index: 1;\n    width: 60px;\n    height: 60px;\n    padding: 0.5rem;\n    display: none;\n    align-items: center;\n    justify-content: center;\n    cursor: pointer; }\n  .navbar .hamburger > div {\n    position: relative;\n    flex: none;\n    width: 100%;\n    height: 2px;\n    background: #ffffff;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    transition: all 0.4s ease; }\n  .navbar .hamburger > div:before,\n  .navbar .hamburger > div:after {\n    content: \"\";\n    position: absolute;\n    z-index: 1;\n    top: -10px;\n    width: 100%;\n    height: 2px;\n    background: inherit; }\n  .navbar .hamburger > div::after {\n    top: 10px; }\n  .navbar input[type=\"checkbox\"]:checked + .hamburger > div {\n    transform: rotate(135deg); }\n  .navbar .toggler:checked + .hamburger > div:before,\n  .navbar .toggler:checked + .hamburger > div:after {\n    top: 0;\n    transform: rotate(90deg); }\n  .navbar .toggler:checked ~ .navbar__links {\n    display: flex; }\n\n@media screen and (max-width: 850px) {\n  .navbar {\n    flex-direction: column;\n    align-items: flex-start;\n    background-color: rgba(0, 0, 0, 0.6); }\n    .navbar .hamburger {\n      display: flex;\n      padding-bottom: 20px;\n      padding-top: 20px; }\n    .navbar__brand-title {\n      font-size: calc(22px + 6 * ((100vw - 320px) / 680));\n      line-height: calc(22px + 6 * ((100vw - 320px) / 680));\n      padding-bottom: 20px;\n      padding-top: 20px; }\n      .navbar__brand-title img {\n        max-width: 90%; }\n    .navbar__links {\n      display: none;\n      width: 100%;\n      font-size: calc(16px + 6 * ((100vw - 320px) / 680));\n      line-height: calc(32px + 6 * ((100vw - 320px) / 680)); }\n    .navbar__list {\n      width: 100%;\n      flex-direction: column; }\n    .navbar__link {\n      text-align: left;\n      padding: 20px;\n      border-top: 2px solid #858585 !important;\n      border-radius: unset; }\n    .navbar .linkActive {\n      border: unset;\n      border-top: 2px solid #858585 !important;\n      border-radius: unset !important; }\n    .navbar__link:hover {\n      border: unset;\n      border-radius: unset; } }\n\n.home {\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat center center/cover; }\n  .home__socialMedia {\n    padding-top: 30px; }\n  .home .socialMediaIcon {\n    color: #6969f6;\n    font-size: calc(30px + 1 * ((100vw - 320px) / 680));\n    line-height: calc(32px + 6 * ((100vw - 320px) / 680)); }\n  .home .info-text {\n    padding: 20px 20px 20px 0;\n    text-align: center; }\n  .home .item {\n    align-items: center;\n    justify-content: center;\n    max-width: 100vw;\n    margin: 0 auto;\n    padding: 0 40px;\n    color: #ffffff; }\n  .home h1 {\n    padding-top: 35px;\n    padding-bottom: 10px;\n    font-weight: bolder;\n    font-size: calc(35px + 1 * ((100vw - 320px) / 680));\n    line-height: calc(35px + 1 * ((100vw - 320px) / 680)); }\n  .home h2 {\n    padding-top: 15px;\n    padding-bottom: 10px;\n    font-weight: 600;\n    font-size: calc(15px + 1 * ((100vw - 320px) / 680));\n    line-height: calc(35px + 1 * ((100vw - 320px) / 680)); }\n  .home p {\n    padding-top: 25px;\n    padding-bottom: 25px;\n    font-size: calc(15px + 1 * ((100vw - 320px) / 680));\n    line-height: calc(25px + 1 * ((100vw - 320px) / 680)); }\n  .home img {\n    margin: 30px 90px;\n    max-width: 500px; }\n\n.cardContainer {\n  margin: 120px; }\n\n@media screen and (max-width: 500px) {\n  .home img {\n    margin-left: 0 !important;\n    max-width: 300px; }\n  .home .item {\n    max-width: 90vw;\n    padding-left: 20px; }\n  .home h2 {\n    font-size: calc(16px + 1 * ((100vw - 320px) / 680));\n    line-height: calc(22px + 1 * ((100vw - 320px) / 680)); }\n  .home p {\n    margin-top: 0 !important; }\n  .home img {\n    max-width: 90%; } }\n\n@keyframes up-down {\n  0% {\n    transform: translateY(5px); }\n  100% {\n    transform: translateY(-5px); } }\n\n@media screen and (min-width: 550px) and (max-width: 768px) {\n  .home img {\n    margin-left: 0 !important; }\n  .home .item {\n    padding-bottom: 35px; } }\n\n@media screen and (min-width: 769px) and (max-width: 1024px) {\n  .home img {\n    max-width: 100%; } }\n\n*,\n*::after,\n*::before {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box; }\n\nhtml {\n  font-size: 62.5%; }\n\nbody {\n  font-family: Arial, Helvetica, sans-serif;\n  background: #f1f1f1;\n  color: #fff;\n  height: 100vh; }\n\nsection {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  width: 100%;\n  height: 100vh; }\n\n#app {\n  width: 100%;\n  height: 100%; }\n\n.root {\n  min-width: 300px; }\n\n.about {\n  height: auto;\n  color: #1c1c1c;\n  background: #ffffff;\n  padding: 20px; }\n  .about .topography {\n    color: #1c1c1c;\n    padding: 20px;\n    text-align: left;\n    font-weight: 500;\n    letter-spacing: 1;\n    font-size: calc(52px + 1 * ((100vw - 320px) / 680));\n    line-height: calc(40px + 6 * ((100vw - 320px) / 680)); }\n  .about .card {\n    background-color: #d9d9d9;\n    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.1);\n    transition: 0.3s;\n    width: 100%;\n    margin: 40px; }\n  .about .item {\n    display: flex;\n    align-items: center;\n    justify-content: left;\n    max-width: 1100px;\n    margin: 10px auto;\n    color: #1c1c1c;\n    margin-bottom: 2vh; }\n  .about img {\n    margin: 50px 50px 50px 0;\n    padding-left: 40px;\n    max-width: 80%; }\n  .about .info-text {\n    padding: 20px 20px 20px 0;\n    padding-left: 40px;\n    text-align: center;\n    color: #1c1c1c; }\n  .about h1 {\n    padding-top: 35px;\n    padding-bottom: 10px;\n    font-size: calc(25px + 1 * ((100vw - 320px) / 680));\n    line-height: calc(25px + 1 * ((100vw - 320px) / 680)); }\n  .about h2 {\n    padding-top: 15px;\n    padding-bottom: 10px;\n    font-size: calc(20px + 1 * ((100vw - 320px) / 680));\n    line-height: calc(25px + 1 * ((100vw - 320px) / 680)); }\n  .about p {\n    padding-top: 25px;\n    padding-bottom: 25px;\n    font-size: calc(15px + 1 * ((100vw - 320px) / 680));\n    line-height: calc(25px + 1 * ((100vw - 320px) / 680)); }\n\n@media screen and (max-width: 900px) {\n  .about .container {\n    flex-direction: column;\n    align-content: space-between;\n    justify-items: center;\n    text-align: left; }\n  .about .info-text {\n    text-align: left; }\n  .about .img {\n    max-width: 200px !important;\n    margin-bottom: 20px; } }\n\n.contact {\n  height: auto;\n  color: #1c1c1c;\n  background: #ffffff;\n  padding: 20px; }\n  .contact .topography {\n    color: #1c1c1c;\n    padding: 20px;\n    text-align: left;\n    font-weight: 500;\n    letter-spacing: 1;\n    font-size: calc(52px + 1 * ((100vw - 320px) / 680));\n    line-height: calc(40px + 6 * ((100vw - 320px) / 680)); }\n  .contact .card {\n    background-color: #d9d9d9;\n    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.1);\n    transition: 0.3s;\n    width: 100%;\n    margin: 40px; }\n  .contact .item {\n    display: flex;\n    align-items: center;\n    justify-content: left;\n    max-width: 1100px;\n    margin: 10px auto;\n    color: #1c1c1c;\n    margin-bottom: 2vh; }\n  .contact img {\n    margin: 50px 50px 50px 0;\n    padding-left: 40px;\n    max-width: 80%; }\n  .contact .info-text {\n    padding: 20px 20px 20px 0;\n    padding-left: 40px;\n    text-align: center;\n    color: #1c1c1c; }\n  .contact h1 {\n    padding-top: 35px;\n    padding-bottom: 10px;\n    font-size: calc(25px + 1 * ((100vw - 320px) / 680));\n    line-height: calc(25px + 1 * ((100vw - 320px) / 680)); }\n  .contact h2 {\n    padding-top: 15px;\n    padding-bottom: 10px;\n    font-size: calc(20px + 1 * ((100vw - 320px) / 680));\n    line-height: calc(25px + 1 * ((100vw - 320px) / 680)); }\n  .contact p {\n    padding-top: 25px;\n    padding-bottom: 25px;\n    font-size: calc(15px + 1 * ((100vw - 320px) / 680));\n    line-height: calc(25px + 1 * ((100vw - 320px) / 680)); }\n\n@media screen and (max-width: 900px) {\n  .contact .container {\n    flex-direction: column;\n    align-content: space-between;\n    justify-items: center;\n    text-align: left; }\n  .contact .info-text {\n    text-align: left; }\n  .contact .img {\n    max-width: 200px !important;\n    margin-bottom: 20px; } }\n\n.menu {\n  height: auto;\n  color: #1c1c1c;\n  background: red;\n  padding: 20px; }\n  .menu .topography {\n    color: #1c1c1c;\n    padding: 20px;\n    text-align: left;\n    font-weight: 500;\n    letter-spacing: 1;\n    font-size: calc(52px + 1 * ((100vw - 320px) / 680));\n    line-height: calc(40px + 6 * ((100vw - 320px) / 680)); }\n  .menu .card {\n    background-color: #d9d9d9;\n    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.1);\n    transition: 0.3s;\n    width: 100%;\n    margin: 40px; }\n  .menu .item {\n    display: flex;\n    align-items: center;\n    justify-content: left;\n    max-width: 1100px;\n    margin: 10px auto;\n    color: #1c1c1c;\n    margin-bottom: 2vh; }\n  .menu img {\n    margin: 50px 50px 50px 0;\n    padding-left: 40px;\n    max-width: 80%; }\n  .menu .info-text {\n    padding: 20px 20px 20px 0;\n    padding-left: 40px;\n    text-align: center;\n    color: #1c1c1c; }\n  .menu h1 {\n    padding-top: 35px;\n    padding-bottom: 10px;\n    font-size: calc(25px + 1 * ((100vw - 320px) / 680));\n    line-height: calc(25px + 1 * ((100vw - 320px) / 680)); }\n  .menu h2 {\n    padding-top: 15px;\n    padding-bottom: 10px;\n    font-size: calc(20px + 1 * ((100vw - 320px) / 680));\n    line-height: calc(25px + 1 * ((100vw - 320px) / 680)); }\n  .menu p {\n    padding-top: 25px;\n    padding-bottom: 25px;\n    font-size: calc(15px + 1 * ((100vw - 320px) / 680));\n    line-height: calc(25px + 1 * ((100vw - 320px) / 680)); }\n\n@media screen and (max-width: 900px) {\n  .menu .container {\n    flex-direction: column;\n    align-content: space-between;\n    justify-items: center;\n    text-align: left; }\n  .menu .info-text {\n    text-align: left; }\n  .menu .img {\n    max-width: 200px !important;\n    margin-bottom: 20px; } }\n\n.footer {\n  background-color: rgba(0, 0, 0, 0.9);\n  height: 25vh;\n  margin: 20px;\n  padding: 35px; }\n  .footer h1 {\n    font-size: calc(25px + 1 * ((100vw - 320px) / 680));\n    line-height: calc(25px + 1 * ((100vw - 320px) / 680)); }\n  .footer h2 {\n    font-size: calc(20px + 1 * ((100vw - 320px) / 680));\n    line-height: calc(25px + 1 * ((100vw - 320px) / 680)); }\n  .footer p {\n    font-size: calc(15px + 1 * ((100vw - 320px) / 680));\n    line-height: calc(25px + 1 * ((100vw - 320px) / 680)); }\n  .footer .socialMediaIcon {\n    font-size: calc(30px + 1 * ((100vw - 320px) / 680));\n    line-height: calc(25px + 6 * ((100vw - 320px) / 680)); }\n", ""]);
// Exports
module.exports = exports;


/***/ })

})
//# sourceMappingURL=main.26609331e8a4a9dc9dd2.hot-update.js.map
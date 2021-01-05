(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/gl-ionic-background-video/dist/esm/es5/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/gl-ionic-background-video/dist/esm/es5/index.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// GlBackgroundVideo: ES Module

/***/ }),

/***/ "./node_modules/gl-ionic-background-video/dist/esm/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/gl-ionic-background-video/dist/esm/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _es5_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./es5/index.js */ "./node_modules/gl-ionic-background-video/dist/esm/es5/index.js");
/* harmony import */ var _es5_index_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_es5_index_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _es5_index_js__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _es5_index_js__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");
/* harmony import */ var gl_ionic_background_video__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! gl-ionic-background-video */ "./node_modules/gl-ionic-background-video/dist/esm/index.js");








var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"] }])
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/home/home.page.html":
/*!*************************************!*\
  !*** ./src/app/home/home.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar >\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n   \r\n    <ion-button  *ngIf=\"!checkAuth\" slot=\"end\" style=\"margin-top: 3%;\"color=\"danger\"size=\"small\"routerLink=\"/menu/login\" ><ion-icon name=\"log-in\"></ion-icon>Login</ion-button>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n \r\n  <ion-fab vertical=\"top\" horizontal=\"end\">\r\n    <ion-button color=\"danger\" (click)=\"openCart()\">\r\n      <ion-badge  *ngIf=\"cart.length > 0\">{{ cart.length }}</ion-badge>\r\n      <ion-icon name=\"cart\" slot=\"icon-only\"></ion-icon>\r\n    </ion-button>\r\n  </ion-fab>\r\n        <div class=\"navigation-menu\">\r\n            <ion-grid>\r\n              <ion-row>\r\n              <!-- <ion-col size-sm=\"4\" size-md=\"4\" size-lg=\"4\"><img src=\"/assets/preetiLogo1.png\" style=\"height:100px; width: 100px\" /></ion-col> -->\r\n              <ion-col size-sm=\"12\" size-md=\"12\" size-lg=\"12\" style=\"background: #fff; color: grey;height: 50px;width: 80%;padding-top:10px;\">\r\n                <div class=\"round-border\">\r\n                <ion-col size-sm=\"2\" tappable routerLink=\"/menu/home\" style=\"color: #000;font-weight: bold;\"></ion-col>\r\n                <ion-col size-sm=\"2\" tappable routerLink=\"/menu/accountslanding\"style=\"color: #000;font-weight: bold;\"><i>Account </i></ion-col>\r\n                <ion-col size-sm=\"2\"tappable routerLink=\"/menu/media\" style=\"color: rgb(68, 49, 49);font-weight: bold;\"><i>Shop </i></ion-col>\r\n                <ion-col size-sm=\"2\" tappable style=\"color: #000; font-weight: bold;\"><i>Orders </i></ion-col> \r\n                <ion-col size-sm=\"2\" tappable routerLink=\"/menu/contact\" style=\"color: #000; font-weight: bold;\"><i>Contact Us </i></ion-col>\r\n\r\n                <!-- <ion-col size-sm=\"3\" tappable routerLink=\"/menu/media\" style=\"font-weight: bold;\">Media</ion-col> -->\r\n              </div>\r\n                <!-- <ion-col size-sm=\"4\"><ion-icon name=\"call\"></ion-icon>Call us 0719000112</ion-col> -->\r\n              </ion-col>\r\n            </ion-row>\r\n              </ion-grid>\r\n              <!-- <ion-card class=\"intro-card\"class=\"background\"> -->\r\n                <!-- <div class=\"simple-ss\"></div> -->\r\n                <div class=\"background\">\r\n                <ion-slides [options]=\"slidesConfig\">\r\n                  <ion-slide>\r\n                    <div class=\"content\"></div>\r\n                       <img class=\"landing-page\" src=\"/assets/girl_dress.jpeg\" /> \r\n                     <p class=\"text-slide\" style=\"font-family: Open Sans;\"><i>Dress selections</i><br>\r\n                    <ion-button color=\"danger\"  size=\"small\" style=\"color: #fff; font-family: Open Sans ;\" routerLink=\"/menu/media\">View</ion-button>\r\n                    </p> \r\n                  </ion-slide>\r\n                  <ion-slide>\r\n                       <img class=\"landing-page\" src=\"/assets/men_suit.jpeg\" /><br>\r\n                    <p class=\"text-slide\" style=\"font-family:Open Sans;\"><i>Men's Casual Wear</i><br>\r\n                      <ion-button color=\"danger\" size=\"small\" style=\"color: #fff; font-family: Open Sans;\" routerLink=\"/menu/media\">View</ion-button>\r\n                    </p>\r\n                  </ion-slide>\r\n                  <ion-slide>\r\n                    <img class=\"landing-page\" src=\"/assets/kalu.jpg\" /><br>\r\n                 <p class=\"text-slide\" style=\"font-family:Open Sans;\"><i>Shoes and Footwear </i><br>\r\n                   <ion-button color=\"danger\" size=\"small\" style=\"color: #fff; font-family: Open Sans;\" routerLink=\"/menu/media\">View</ion-button>\r\n                 </p>\r\n               </ion-slide>\r\n                  <ion-slide>\r\n                      <img class=\"landing-page\" src=\"/assets/lhbag.jpg\" />\r\n                    <p class=\"text-slide\" style=\"font-family: Open Sans;\"><i>Accessories and Others</i><br>\r\n                      <ion-button color=\"danger\" size=\"small\" style=\"color: #fff; font-family: Open Sans;\"routerLink=\"/menu/media\">View</ion-button>\r\n                    </p>\r\n                  </ion-slide>\r\n                </ion-slides>\r\n        </div>\r\n      <ion-grid fixed>\r\n    <ion-row>\r\n      <ion-col class=\"slanted-corner\" size=\"12\">\r\n        <h1 text-center style=\"font-family: Impact;color:#000\"><i>Welcome to..</i></h1>\r\n        <section text-center margin-bottom>\r\n          <img src=\"/assets/PreetiLogo.png\" style=\"height:100px; width: 100px\" />\r\n        </section>\r\n      </ion-col>\r\n    </ion-row>\r\n   \r\n  </ion-grid>\r\n  <ion-card>\r\n    <ion-grid fixed>\r\n      <ion-row>\r\n        <ion-col size-sm=\"2\" size-md=\"6\">\r\n          <video class=\"video\" webkit-playsinline playsinline autoplay loop>\r\n            <source src=\"assets/home-video2.mp4\" type=\"video/mp4\">\r\n          </video>\r\n        </ion-col>\r\n        <ion-col size-sm=\"2\" size=\"6\">\r\n          <video class=\"video\" webkit-playsinline playsinline autoplay loop>\r\n            <source src=\"assets/home-video3.mp4\" type=\"video/mp4\">\r\n          </video>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-card>\r\n  \r\n  <ion-card>\r\n    <ion-card-content>\r\n      <div class=\"textv\">\r\n        <p text-center style=\"font-weight: bold; \">Get to know us better</p>\r\n        <a href=\"https://web.facebook.com/preetifashions\" target=\"_blank\"> <ion-icon name=\"logo-facebook\" style=\"font-size:5em; margin-right: 50%;\" ></ion-icon></a>\r\n        <a href=\"https://www.instagram.com/preetifashions_ke/\" target=\"_blank\"><ion-icon name=\"logo-instagram\" style=\"font-size: 5em;\" ></ion-icon></a>\r\n      </div>\r\n      <div class=\"routeit\"><a routerLink=\"/menu/contact\">Contact Us..</a></div>\r\n    </ion-card-content>\r\n  </ion-card>\r\n  <div class=\"primal\">\r\n    <ion-text color=\"light\">\r\n      <p style =\"font-weight: bold;background-color: #edf5e1;color: #000; font-family: Open Sans\" text-center>Top categories</p>\r\n    </ion-text>\r\n  </div>\r\n  <div class=\"back-color\">\r\n    <ion-grid fixed>\r\n      <ion-row>\r\n        <ion-col class=\"ion-align-self-start\" size-sm=\"3\" size-md=\"3\" style=\"font-family: Impact\">Dresses\r\n          <ion-thumbnail><img tappable routerLink=\"/menu/media\" src=\"/assets/slf2.jpg\" /></ion-thumbnail>\r\n        </ion-col>\r\n        <ion-col class=\"ion-align-self-start\" size-sm=\"3\" size-md=\"3\" style=\"font-family: Impact\">Tops\r\n          <ion-thumbnail><img tappable routerLink=\"/menu/media\" src=\"/assets/img3.jpg\" /></ion-thumbnail>\r\n        </ion-col>\r\n        <ion-col class=\"ion-align-self-center\" size-sm=\"3\" size-md=\"3\" style=\"font-family: Impact\">Shoes\r\n          <ion-thumbnail><img tappable src=\"/assets/oshoe3.jpg\" routerLink=\"/menu/media\" /></ion-thumbnail>\r\n        </ion-col>\r\n        <ion-col class=\"ion-align-self-center\" size-sm=\"3\" size-md=\"3\" style=\"font-family: Impact\">Suits\r\n          <ion-thumbnail><img tappable src=\"/assets/tsuit5.jpg\" routerLink=\"/menu/media\" /></ion-thumbnail>\r\n        </ion-col>\r\n        <ion-col class=\"ion-align-self-center\" size-sm=\"3\" size-md=\"3\" style=\"font-family: Impact\">Bags\r\n          <ion-thumbnail><img tappable src=\"/assets/hbag2.jpg\" routerLink=\"/menu/media\" /></ion-thumbnail>\r\n        </ion-col>\r\n        <ion-col class=\"ion-align-self-end\" size-sm=\"3\" size-md=\"3\" style=\"font-family: Impact\">Men\r\n          <ion-thumbnail><img tappable src=\"/assets/suit1.jpg\" routerLink=\"/menu/media\" /></ion-thumbnail>\r\n        </ion-col>\r\n      \r\n      </ion-row>\r\n    </ion-grid>\r\n  </div>\r\n  <div class=\"primal\">\r\n    <ion-text color=\"light\">\r\n      <h2> Our offer deals...</h2>\r\n    </ion-text>\r\n  </div>\r\n  <div class=\"redirect-login\">\r\n    <ion-button color=\"danger\" (click)=\"presentLogoutWithOptions()\" (click)=\"logout()\" routerLink=\"/menu/login\" [disabled]=\"!checkAuth\"><ion-icon slot=\"start\" name=\"log-out\"></ion-icon>Logout\r\n    </ion-button>\r\n  </div>\r\n  <ion-footer>\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col>\r\n          <h3 class=\"footer-styling\"><ion-icon name=\"navigate\"></ion-icon>OUR LOCATION</h3>\r\n          <p class=\"footer-styling\">Moktar Daddar Street</p>\r\n        </ion-col>\r\n        <ion-col>\r\n          <h3 class=\"footer-styling\"><ion-icon name=\"time\"></ion-icon>WORKING HOURS</h3>\r\n          <p class=\"footer-styling\"><span>Mon-Sat:</span> Open from 8:30AM - 7:00PM</p><br>\r\n        \r\n        </ion-col>\r\n        <ion-col>\r\n          <h3 class=\"footer-styling\"><ion-icon name=\"call\"></ion-icon>CONTACT US</h3>\r\n          <p class=\"footer-styling\"><ion-icon name=\"logo-whatsapp\"></ion-icon>+254721397580</p><br>\r\n          <p class=\"footer-styling\">preetifashions90@gmail.com</p>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-footer>\r\n<!-- </ion-content> -->"

/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".intro-card {\n  background-color: #f0ebf4;\n  color: azure;\n  height: 16em;\n  position: relative; }\n\n.simple-ss {\n  height: 250px;\n  background-color: #eeeeee;\n  margin: auto;\n  background: url(\"/assets/sample1.jpg\");\n  background-size: cover;\n  -webkit-animation-name: slide;\n          animation-name: slide;\n  -webkit-animation-duration: 10s;\n          animation-duration: 10s;\n  -webkit-animation-direction: normal;\n          animation-direction: normal;\n  -webkit-animation-timing-function: ease;\n          animation-timing-function: ease;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite; }\n\n@-webkit-keyframes slide {\n  0% {\n    background-position: 0 0; }\n  16.66% {\n    background-position: 0 0; }\n  33.32% {\n    background-position: -800px 0; }\n  49.98% {\n    background-position: -800px 0; }\n  66.64% {\n    background-position: -1600px 0; }\n  83.30% {\n    background-position: -1600px 0; }\n  100% {\n    background-position: 0 0; } }\n\n@keyframes slide {\n  0% {\n    background-position: 0 0; }\n  16.66% {\n    background-position: 0 0; }\n  33.32% {\n    background-position: -800px 0; }\n  49.98% {\n    background-position: -800px 0; }\n  66.64% {\n    background-position: -1600px 0; }\n  83.30% {\n    background-position: -1600px 0; }\n  100% {\n    background-position: 0 0; } }\n\n.contacts {\n  -webkit-margin-after: auto;\n          margin-block-end: auto; }\n\n.round-border {\n  border-radius: 0.75em;\n  margin-top: 1%;\n  margin-bottom: 10%;\n  font-family: Open Sans; }\n\nion-fab-button {\n  height: 50px;\n  width: 70px; }\n\n.cart-length {\n  color: var(--ion-color-primary);\n  position: absolute;\n  top: 18px;\n  left: 25px;\n  font-weight: 600;\n  font-size: 1.2em;\n  min-width: 25px;\n  z-index: 10; }\n\n.cart-icon {\n  font-size: 50px; }\n\n.background {\n  height: 200px;\n  background-size: cover; }\n\n.landing-page {\n  background-size: cover;\n  background-repeat: repeat;\n  height: 12.5em;\n  margin-top: 8px;\n  vertical-align: middle;\n  width: 100%; }\n\n.content {\n  background-image: url(\"/assets/sample1.jpg\"); }\n\n.text-slide {\n  position: absolute;\n  bottom: 20px;\n  right: 20px;\n  background-color: white;\n  color: #000;\n  padding-left: 20px;\n  padding-right: 20px; }\n\n.slidesk {\n  background-image: url(\"/assets/sample1.jpg\"); }\n\n.bg {\n  --background: #ffff url('/assets/p11.jpg') no-repeat center center / contain; }\n\n.slanted-corner {\n  margin-top: 30px;\n  height: 200px;\n  background: whitesmoke;\n  position: relative; }\n\n.slanted-corner:before {\n  content: '';\n  position: absolute;\n  top: 0;\n  right: 0;\n  border-top: 80px solid white;\n  border-left: 80px solid red;\n  width: 0; }\n\n.align-middle {\n  width: 300px; }\n\nion-footer {\n  background-color: #000; }\n\n.textv {\n  background-color: #edf5e1;\n  font-weight: 500; }\n\n.video {\n  width: 31.25em;\n  height: 21.875em; }\n\n.primal {\n  background-color: #fff;\n  color: #ffff; }\n\n.back-color {\n  background-color: #ffff; }\n\nion-content {\n  margin-top: 0px;\n  padding-top: 0px; }\n\n.redirect-login {\n  width: 18.75em;\n  margin-left: auto;\n  margin-right: auto; }\n\n.card-resize {\n  width: 9.375em;\n  height: 9.375em;\n  display: flex;\n  flex-direction: column; }\n\n.display-product {\n  background-size: cover; }\n\n.slide-container {\n  position: relative; }\n\n.footer-styling {\n  color: #fff;\n  font-family: Open Sans; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcVXNlcnNcXEF0dGFpblxcZGVza3RvcFxccHJvamVjdHNcXGFwXFxhcHBhcmVsLWVjb21tZXJjZS9zcmNcXGFwcFxcaG9tZVxcaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUFDSSx5QkFBeUI7RUFDekIsWUFBWTtFQUdaLFlBQVk7RUFFWixrQkFBa0IsRUFBQTs7QUFFdEI7RUFDSSxhQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLFlBQVc7RUFDWCxzQ0FBc0M7RUFDdEMsc0JBQXVCO0VBQ3ZCLDZCQUFxQjtVQUFyQixxQkFBcUI7RUFDckIsK0JBQXVCO1VBQXZCLHVCQUF1QjtFQUN2QixtQ0FBMkI7VUFBM0IsMkJBQTJCO0VBQzNCLHVDQUErQjtVQUEvQiwrQkFBK0I7RUFDL0IsMkNBQW1DO1VBQW5DLG1DQUFtQyxFQUFBOztBQUVuQztFQUNBO0lBQUksd0JBQXVCLEVBQUE7RUFDM0I7SUFBUSx3QkFBdUIsRUFBQTtFQUMvQjtJQUFRLDZCQUE0QixFQUFBO0VBQ3BDO0lBQVEsNkJBQTRCLEVBQUE7RUFDcEM7SUFBUSw4QkFBNkIsRUFBQTtFQUNyQztJQUFRLDhCQUE2QixFQUFBO0VBQ3JDO0lBQU0sd0JBQXVCLEVBQUEsRUFBQTs7QUFQN0I7RUFDQTtJQUFJLHdCQUF1QixFQUFBO0VBQzNCO0lBQVEsd0JBQXVCLEVBQUE7RUFDL0I7SUFBUSw2QkFBNEIsRUFBQTtFQUNwQztJQUFRLDZCQUE0QixFQUFBO0VBQ3BDO0lBQVEsOEJBQTZCLEVBQUE7RUFDckM7SUFBUSw4QkFBNkIsRUFBQTtFQUNyQztJQUFNLHdCQUF1QixFQUFBLEVBQUE7O0FBRWpDO0VBQ0ksMEJBQXNCO1VBQXRCLHNCQUFzQixFQUFBOztBQUUxQjtFQUVJLHFCQUFxQjtFQUNyQixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLHNCQUFzQixFQUFBOztBQUUxQjtFQUNJLFlBQVk7RUFDWixXQUFXLEVBQUE7O0FBRWY7RUFDSSwrQkFBK0I7RUFDL0Isa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsV0FBVyxFQUFBOztBQUViO0VBQ0UsZUFBZSxFQUFBOztBQUVuQjtFQUlJLGFBQWE7RUFDYixzQkFBc0IsRUFBQTs7QUFJMUI7RUFDSSxzQkFBc0I7RUFDdEIseUJBQXdCO0VBQ3hCLGNBQWE7RUFHYixlQUFlO0VBQ2Ysc0JBQXNCO0VBQ3RCLFdBQVcsRUFBQTs7QUFFZjtFQUNJLDRDQUE0QyxFQUFBOztBQUVoRDtFQUNJLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osV0FBVztFQUNYLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLG1CQUFtQixFQUFBOztBQUVyQjtFQUNFLDRDQUE0QyxFQUFBOztBQUVoRDtFQUNJLDRFQUFhLEVBQUE7O0FBRWpCO0VBQ0ksZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixzQkFBcUI7RUFDckIsa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksV0FBVztFQUNYLGtCQUFrQjtFQUNsQixNQUFNO0VBQUUsUUFBUTtFQUNoQiw0QkFBNEI7RUFDNUIsMkJBQTJCO0VBQzNCLFFBQVEsRUFBQTs7QUFFWjtFQUNJLFlBQVksRUFBQTs7QUFFaEI7RUFDSSxzQkFBc0IsRUFBQTs7QUFFMUI7RUFDSSx5QkFBeUI7RUFFekIsZ0JBQWdCLEVBQUE7O0FBRXBCO0VBQ0ksY0FBYztFQUNkLGdCQUFnQixFQUFBOztBQUVwQjtFQUNJLHNCQUFzQjtFQUN0QixZQUFZLEVBQUE7O0FBS2hCO0VBQ0ksdUJBQXVCLEVBQUE7O0FBUzNCO0VBQ0ksZUFBZTtFQUNmLGdCQUFnQixFQUFBOztBQUVwQjtFQUNJLGNBQWM7RUFDZCxpQkFBZ0I7RUFDaEIsa0JBQWtCLEVBQUE7O0FBRXRCO0VBQ0ksY0FBYztFQUNkLGVBQWU7RUFDZixhQUFhO0VBQ2Isc0JBQXNCLEVBQUE7O0FBRTFCO0VBQ0ksc0JBQXNCLEVBQUE7O0FBRTFCO0VBQ0ksa0JBQWtCLEVBQUE7O0FBRXRCO0VBQ0ksV0FBVztFQUNYLHNCQUFzQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGlvbi1jb250ZW50e1xyXG5cclxuLy8gICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICNERUQyQTg7XHJcbi8vIH1cclxuLmludHJvLWNhcmQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YwZWJmNDtcclxuICAgIGNvbG9yOiBhenVyZTtcclxuICAgIC8vIG1hcmdpbi1sZWZ0OmF1dG87IFxyXG4gICAgLy8gbWFyZ2luLXJpZ2h0OiBhdXRvOyBcclxuICAgIGhlaWdodDogMTZlbTtcclxuICAgIC8vb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4uc2ltcGxlLXNzIHtcclxuICAgIGhlaWdodDoyNTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWVlZWU7XHJcbiAgICBtYXJnaW46YXV0bztcclxuICAgIGJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvc2FtcGxlMS5qcGdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyIDtcclxuICAgIGFuaW1hdGlvbi1uYW1lOiBzbGlkZTtcclxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMTBzO1xyXG4gICAgYW5pbWF0aW9uLWRpcmVjdGlvbjogbm9ybWFsO1xyXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZTtcclxuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xyXG4gICAgfVxyXG4gICAgQGtleWZyYW1lcyBzbGlkZSB7XHJcbiAgICAwJSB7YmFja2dyb3VuZC1wb3NpdGlvbjowIDA7fVxyXG4gICAgMTYuNjYlIHtiYWNrZ3JvdW5kLXBvc2l0aW9uOjAgMDt9XHJcbiAgICAzMy4zMiUge2JhY2tncm91bmQtcG9zaXRpb246LTgwMHB4IDA7fVxyXG4gICAgNDkuOTglIHtiYWNrZ3JvdW5kLXBvc2l0aW9uOi04MDBweCAwO31cclxuICAgIDY2LjY0JSB7YmFja2dyb3VuZC1wb3NpdGlvbjotMTYwMHB4IDA7fVxyXG4gICAgODMuMzAlIHtiYWNrZ3JvdW5kLXBvc2l0aW9uOi0xNjAwcHggMDt9XHJcbiAgICAxMDAlIHtiYWNrZ3JvdW5kLXBvc2l0aW9uOjAgMDt9XHJcbiAgICB9XHJcbi5jb250YWN0c3tcclxuICAgIG1hcmdpbi1ibG9jay1lbmQ6IGF1dG87XHJcbn1cclxuLnJvdW5kLWJvcmRlcntcclxuICAgIC8vYm9yZGVyOiAycHggc29saWQgcmVkO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC43NWVtO1xyXG4gICAgbWFyZ2luLXRvcDogMSU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMCU7XHJcbiAgICBmb250LWZhbWlseTogT3BlbiBTYW5zO1xyXG59XHJcbmlvbi1mYWItYnV0dG9uIHtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIHdpZHRoOiA3MHB4O1xyXG4gIH1cclxuLmNhcnQtbGVuZ3RoIHtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDE4cHg7XHJcbiAgICBsZWZ0OiAyNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgICBtaW4td2lkdGg6IDI1cHg7XHJcbiAgICB6LWluZGV4OiAxMDtcclxuICB9XHJcbiAgLmNhcnQtaWNvbiB7XHJcbiAgICBmb250LXNpemU6IDUwcHg7XHJcbiAgfVxyXG4uYmFja2dyb3VuZHtcclxuICAgIC8vIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvc2FtcGxlMS5qcGdcIik7XHJcbiAgICAvL2JhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIFxyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAvLyAgZmlsdGVyOiBibHVyKDhweCk7XHJcbiAgICAvLyAtd2Via2l0LWZpbHRlcjogYmx1cig4cHgpO1xyXG59XHJcbi5sYW5kaW5nLXBhZ2V7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyBcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OnJlcGVhdDtcclxuICAgIGhlaWdodDoxMi41ZW07IFxyXG4gICAgLy8gd2lkdGg6NjIuNWVtO1xyXG4gICAgLy8gb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmNvbnRlbnR7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL3NhbXBsZTEuanBnXCIpO1xyXG59XHJcbi50ZXh0LXNsaWRlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMjBweDtcclxuICAgIHJpZ2h0OiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbiAgfVxyXG4gIC5zbGlkZXNre1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9zYW1wbGUxLmpwZ1wiKTtcclxuICB9XHJcbi5iZyB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNmZmZmIHVybCgnL2Fzc2V0cy9wMTEuanBnJykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgLyBjb250YWluO1xyXG59XHJcbi5zbGFudGVkLWNvcm5lciB7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIGJhY2tncm91bmQ6d2hpdGVzbW9rZTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLnNsYW50ZWQtY29ybmVyOmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDsgcmlnaHQ6IDA7XHJcbiAgICBib3JkZXItdG9wOiA4MHB4IHNvbGlkIHdoaXRlO1xyXG4gICAgYm9yZGVyLWxlZnQ6IDgwcHggc29saWQgcmVkO1xyXG4gICAgd2lkdGg6IDA7XHJcbn1cclxuLmFsaWduLW1pZGRsZSB7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbn1cclxuaW9uLWZvb3RlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XHJcbn1cclxuLnRleHR2IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZGY1ZTE7XHJcbiAgICAvLyBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmb250LXdlaWdodDogNTAwOyAgXHJcbn1cclxuLnZpZGVvIHtcclxuICAgIHdpZHRoOiAzMS4yNWVtO1xyXG4gICAgaGVpZ2h0OiAyMS44NzVlbTtcclxufVxyXG4ucHJpbWFsIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBjb2xvcjogI2ZmZmY7XHJcbiAgIFxyXG5cclxuXHJcbn1cclxuLmJhY2stY29sb3Ige1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmY7XHJcbiAgICAvLyBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAvLyB0b3A6IDE5MHB4O1xyXG4gICAgLy8gbGVmdDogMHB4O1xyXG4gICAgLy8gcmlnaHQ6IDBweDtcclxuICAgIC8vIGhlaWdodDogNTBweDtcclxuICAgXHJcblxyXG59XHJcbmlvbi1jb250ZW50IHtcclxuICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgIHBhZGRpbmctdG9wOiAwcHg7IFxyXG59XHJcbi5yZWRpcmVjdC1sb2dpbiB7XHJcbiAgICB3aWR0aDogMTguNzVlbTsgXHJcbiAgICBtYXJnaW4tbGVmdDphdXRvOyBcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxufVxyXG4uY2FyZC1yZXNpemUge1xyXG4gICAgd2lkdGg6IDkuMzc1ZW07XHJcbiAgICBoZWlnaHQ6IDkuMzc1ZW07XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG4uZGlzcGxheS1wcm9kdWN0IHtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuLnNsaWRlLWNvbnRhaW5lciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG4uZm9vdGVyLXN0eWxpbmd7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnM7XHJcbn1cclxuJGNvbG9yczooXHJcbiAgICBkYW5nZXI6ICNlYzVhNWEsXHJcbiAgICBwcmltYXJ5OiBibHVlLFxyXG4gICAgZGFyazogd2hpdGVcclxuKVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shoppers_cart_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shoppers-cart.service */ "./src/app/shoppers-cart.service.ts");
/* harmony import */ var _shoppers_cart_shoppers_cart_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shoppers-cart/shoppers-cart.page */ "./src/app/shoppers-cart/shoppers-cart.page.ts");








var HomePage = /** @class */ (function () {
    function HomePage(authService, modalCtrl, cartService, nav, router, loadingController, storage, activatedRoute) {
        this.authService = authService;
        this.modalCtrl = modalCtrl;
        this.cartService = cartService;
        this.nav = nav;
        this.router = router;
        this.loadingController = loadingController;
        this.storage = storage;
        this.activatedRoute = activatedRoute;
        this.data = '';
        this.user_id = null;
        this.users = null;
        this.cart = [];
        this.slidesConfig = {
            autoplay: true,
            centeredSlides: true,
            speed: 5000,
            pager: true,
            slidesPerView: 1
        };
    }
    HomePage.prototype.ngOnInit = function () {
        this.checkAuth = this.authService.authenticationState.value;
        this.cartItemCount = this.cartService.getCartItemCount();
        this.cart = this.cartService.getCart();
        //  loadSpecialInfo() {
        //  this.authService.getSpecialData().subscribe(res => {
        //    this.data = res['msg'];
        //    this.user_id = res['id'];
        //  this.users = this.user_id;
        //  });
    };
    HomePage.prototype.logout = function () {
        this.authService.logout();
    };
    HomePage.prototype.openCart = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            component: _shoppers_cart_shoppers_cart_page__WEBPACK_IMPORTED_MODULE_7__["ShoppersCartPage"],
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.pushUser = function () {
        this.nav.navigateForward("menu/history" + this.users);
    };
    HomePage.prototype.presentLogoutWithOptions = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            spinner: "bubbles",
                            duration: 500,
                            message: 'Thank you :-)',
                            translucent: true,
                            cssClass: 'custom-class custom-loading'
                        })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.page.html */ "./src/app/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"], _shoppers_cart_service__WEBPACK_IMPORTED_MODULE_6__["ShoppersCartService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"], _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map
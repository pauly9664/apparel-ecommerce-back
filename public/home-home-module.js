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

module.exports = "<ion-header>\r\n  <ion-toolbar >\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <!-- <img src=\"/assets/preetiLogo1.png\" style=\"height:70px; width: 100px; margin-left: 40%;\"/> -->\r\n    <!-- <ion-buttons slot=\"end\">\r\n      <ion-button (click)=\"openCart()\">\r\n        <ion-badge *ngIf=\"cart.length > 0\">{{ cart.length }}</ion-badge>\r\n        <ion-icon name=\"cart\" slot=\"icon-only\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons> -->\r\n    <ion-button  *ngIf=\"!checkAuth\" slot=\"end\" style=\"margin-top: 3%;\"color=\"danger\"size=\"small\"routerLink=\"/menu/login\" ><ion-icon name=\"log-in\"></ion-icon>Login</ion-button>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n \r\n  <ion-fab vertical=\"top\" horizontal=\"end\">\r\n    <ion-button color=\"danger\" (click)=\"openCart()\">\r\n      <ion-badge  *ngIf=\"cart.length > 0\">{{ cart.length }}</ion-badge>\r\n      <ion-icon name=\"cart\" slot=\"icon-only\"></ion-icon>\r\n    </ion-button>\r\n  </ion-fab>\r\n        <div class=\"navigation-menu\">\r\n            <ion-grid>\r\n              <ion-row>\r\n              <!-- <ion-col size-sm=\"4\" size-md=\"4\" size-lg=\"4\"><img src=\"/assets/preetiLogo1.png\" style=\"height:100px; width: 100px\" /></ion-col> -->\r\n              <ion-col size-sm=\"12\" size-md=\"12\" size-lg=\"12\" style=\"background: #fff; color: grey;height: 50px;width: 80%;padding-top:10px;\">\r\n                <div class=\"round-border\">\r\n                <ion-col size-sm=\"2\" tappable routerLink=\"/menu/home\" style=\"color: #000;font-weight: bold;\"></ion-col>\r\n                <ion-col size-sm=\"2\" tappable routerLink=\"/menu/accountslanding\"style=\"color: #000;font-weight: bold;\"><i>Account </i></ion-col>\r\n                <ion-col size-sm=\"2\"tappable routerLink=\"/menu/media\" style=\"color: rgb(68, 49, 49);font-weight: bold;\"><i>Shop </i></ion-col>\r\n                <ion-col size-sm=\"2\" tappable routerLink=\"/menu/history\" style=\"color: #000; font-weight: bold;\"><i>Orders </i></ion-col> \r\n                <ion-col size-sm=\"2\" tappable routerLink=\"/menu/contact\" style=\"color: #000; font-weight: bold;\"><i>Contact Us </i></ion-col>\r\n\r\n                <!-- <ion-col size-sm=\"3\" tappable routerLink=\"/menu/media\" style=\"font-weight: bold;\">Media</ion-col> -->\r\n              </div>\r\n                <!-- <ion-col size-sm=\"4\"><ion-icon name=\"call\"></ion-icon>Call us 0719000112</ion-col> -->\r\n              </ion-col>\r\n            </ion-row>\r\n              </ion-grid>\r\n              <!-- <ion-card class=\"intro-card\"class=\"background\"> -->\r\n                <!-- <div class=\"simple-ss\"></div> -->\r\n                <div class=\"background\">\r\n                <ion-slides [options]=\"slidesConfig\">\r\n                  <ion-slide>\r\n                    <div class=\"content\"></div>\r\n                       <img class=\"landing-page\" src=\"/assets/dress2.jpg\" /> \r\n                     <p class=\"text-slide\" style=\"font-family: Open Sans;\"><i>Dress selections</i><br>\r\n                    <ion-button color=\"danger\"  size=\"small\" style=\"color: #fff; font-family: Open Sans ;\" routerLink=\"/menu/media\">View</ion-button>\r\n                    </p> \r\n                  </ion-slide>\r\n                  <ion-slide>\r\n                       <img class=\"landing-page\" src=\"/assets/sample6.jpg\" /><br>\r\n                    <p class=\"text-slide\" style=\"font-family:Open Sans;\"><i>Men's Casual Wear</i><br>\r\n                      <ion-button color=\"danger\" size=\"small\" style=\"color: #fff; font-family: Open Sans;\" routerLink=\"/menu/media\">View</ion-button>\r\n                    </p>\r\n                  </ion-slide>\r\n                  <ion-slide>\r\n                    <img class=\"landing-page\" src=\"/assets/sample3.jpg\" /><br>\r\n                 <p class=\"text-slide\" style=\"font-family:Open Sans;\"><i>Shoes and Footwear </i><br>\r\n                   <ion-button color=\"danger\" size=\"small\" style=\"color: #fff; font-family: Open Sans;\" routerLink=\"/menu/media\">View</ion-button>\r\n                 </p>\r\n               </ion-slide>\r\n                  <ion-slide>\r\n                      <img class=\"landing-page\" src=\"/assets/lhbag.jpg\" />\r\n                    <p class=\"text-slide\" style=\"font-family: Open Sans;\"><i>Accessories </i><br>\r\n                      <ion-button color=\"danger\" size=\"small\" style=\"color: #fff; font-family: Open Sans;\"routerLink=\"/menu/media\">View</ion-button>\r\n                    </p>\r\n                  </ion-slide>\r\n                </ion-slides>\r\n              <!-- </ion-card> -->\r\n              <!-- <ion-col size-sm=\"6\" size-md=\"6\" size-lg=\"6\" class=\"contacts\"></ion-col> -->\r\n          \r\n        </div>\r\n      <ion-grid fixed>\r\n    <ion-row>\r\n      <ion-col class=\"slanted-corner\" size=\"12\">\r\n        <h1 text-center style=\"font-family: Impact;color:#000\"><i>Welcome to..</i></h1>\r\n        <section text-center margin-bottom>\r\n          <img src=\"/assets/PreetiLogo.png\" style=\"height:100px; width: 100px\" />\r\n        </section>\r\n      </ion-col>\r\n    </ion-row>\r\n   \r\n  </ion-grid>\r\n  <ion-card>\r\n    <ion-grid fixed>\r\n      <ion-row>\r\n        <ion-col size-sm=\"2\" size-md=\"6\">\r\n          <video class=\"video\" webkit-playsinline playsinline autoplay loop>\r\n            <source src=\"assets/home-video2.mp4\" type=\"video/mp4\">\r\n          </video>\r\n        </ion-col>\r\n        <ion-col size-sm=\"2\" size=\"6\">\r\n          <video class=\"video\" webkit-playsinline playsinline autoplay loop>\r\n            <source src=\"assets/home-video3.mp4\" type=\"video/mp4\">\r\n          </video>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-card>\r\n  <!-- <ion-card class=\"intro-card\">\r\n    <ion-slides [options]=\"slidesConfig\">\r\n      <ion-slide>\r\n        <ion-avatar>\r\n          <img width=\"100%\" height=\"100%\" src=\"/assets/afro1.jpg\" /><br>\r\n        </ion-avatar>\r\n        <p style=\"font-family: Geneva; color: black\" text-center> From casual dresses to official suits </p>\r\n      </ion-slide>\r\n      <ion-slide>\r\n        <ion-avatar>\r\n          <img width=\"100%\" height=\"100%\" src=\"/assets/kaunda.jpg\" /><br>\r\n        </ion-avatar>\r\n        <p style=\"font-family: Geneva; color: black\"> To mens variable selections </p>\r\n      </ion-slide>\r\n      <ion-slide>\r\n        <ion-avatar>\r\n          <img width=\"100%\" height=\"100%\" src=\"/assets/african1.jpg\" />\r\n        </ion-avatar>\r\n        <p style=\"font-family: Geneva; color: black\"> Other items (accessories, bags, perfumes) etc.</p>\r\n      </ion-slide>\r\n    </ion-slides>\r\n  </ion-card> -->\r\n  <ion-card>\r\n    <ion-card-content>\r\n      <div class=\"textv\">\r\n        <p text-center style=\"font-weight: bold; \">Get to know us better</p>\r\n        <a href=\"https://web.facebook.com/preetifashions\" target=\"_blank\"> <ion-icon name=\"logo-facebook\" style=\"font-size:5em; margin-right: 30%;\" ></ion-icon></a>\r\n        <a href=\"https://www.instagram.com/preetifashions_ke/\" target=\"_blank\"><ion-icon name=\"logo-instagram\" style=\"font-size: 5em; margin-right: 30%;\" ></ion-icon></a>\r\n        <ion-icon name=\"logo-whatsapp\" style=\"font-size: 5em\" ></ion-icon>\r\n      </div>\r\n      <div class=\"routeit\"><a routerLink=\"/menu/contact\">Contact Us..</a></div>\r\n    </ion-card-content>\r\n  </ion-card>\r\n  <div class=\"primal\">\r\n    <ion-text color=\"light\">\r\n      <p style =\"font-weight: bold;background-color: #edf5e1;color: #000\" text-center>Top categories</p>\r\n    </ion-text>\r\n  </div>\r\n  <div class=\"back-color\">\r\n    <ion-grid fixed>\r\n      <ion-row>\r\n        <ion-col class=\"ion-align-self-start\" size-sm=\"3\" size-md=\"3\" style=\"font-family: Impact\">Dresses\r\n          <ion-thumbnail><img tappable routerLink=\"/menu/media\" src=\"/assets/slf2.jpg\" /></ion-thumbnail>\r\n        </ion-col>\r\n        <ion-col class=\"ion-align-self-start\" size-sm=\"3\" size-md=\"3\" style=\"font-family: Impact\">Tops\r\n          <ion-thumbnail><img tappable routerLink=\"/menu/media\" src=\"/assets/img3.jpg\" /></ion-thumbnail>\r\n        </ion-col>\r\n        <ion-col class=\"ion-align-self-center\" size-sm=\"3\" size-md=\"3\" style=\"font-family: Impact\">Shoes\r\n          <ion-thumbnail><img tappable src=\"/assets/oshoe3.jpg\" routerLink=\"/menu/media\" /></ion-thumbnail>\r\n        </ion-col>\r\n        <ion-col class=\"ion-align-self-center\" size-sm=\"3\" size-md=\"3\" style=\"font-family: Impact\">Suits\r\n          <ion-thumbnail><img tappable src=\"/assets/tsuit5.jpg\" routerLink=\"/menu/media\" /></ion-thumbnail>\r\n        </ion-col>\r\n        <ion-col class=\"ion-align-self-center\" size-sm=\"3\" size-md=\"3\" style=\"font-family: Impact\">Bags\r\n          <ion-thumbnail><img tappable src=\"/assets/hbag2.jpg\" routerLink=\"/menu/media\" /></ion-thumbnail>\r\n        </ion-col>\r\n        <ion-col class=\"ion-align-self-end\" size-sm=\"3\" size-md=\"3\" style=\"font-family: Impact\">Men\r\n          <ion-thumbnail><img tappable src=\"/assets/suit1.jpg\" routerLink=\"/menu/media\" /></ion-thumbnail>\r\n        </ion-col>\r\n        <ion-col class=\"ion-align-self-end\" size-sm=\"3\" size-md=\"3\" style=\"font-family: Impact\">Others\r\n          <ion-thumbnail><img tappable src=\"/assets/PRETSAL.png\" routerLink=\"/menu/media\" /></ion-thumbnail>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </div>\r\n  <div class=\"primal\">\r\n    <ion-text color=\"light\">\r\n      <h2> Our offer deals...</h2>\r\n    </ion-text>\r\n  </div>\r\n  <div class=\"redirect-login\">\r\n    <ion-button color=\"danger\" (click)=\"presentLogoutWithOptions()\" (click)=\"logout()\" routerLink=\"/menu/login\" [disabled]=\"!checkAuth\"><ion-icon slot=\"start\" name=\"log-out\"></ion-icon>Logout\r\n    </ion-button>\r\n  </div>\r\n<!-- </ion-content> -->"

/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".intro-card {\n  background-color: #f0ebf4;\n  color: azure;\n  height: 16em;\n  position: relative; }\n\n.simple-ss {\n  height: 250px;\n  background-color: #eeeeee;\n  margin: auto;\n  background: url(\"/assets/sample1.jpg\");\n  background-size: cover;\n  -webkit-animation-name: slide;\n          animation-name: slide;\n  -webkit-animation-duration: 10s;\n          animation-duration: 10s;\n  -webkit-animation-direction: normal;\n          animation-direction: normal;\n  -webkit-animation-timing-function: ease;\n          animation-timing-function: ease;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite; }\n\n@-webkit-keyframes slide {\n  0% {\n    background-position: 0 0; }\n  16.66% {\n    background-position: 0 0; }\n  33.32% {\n    background-position: -800px 0; }\n  49.98% {\n    background-position: -800px 0; }\n  66.64% {\n    background-position: -1600px 0; }\n  83.30% {\n    background-position: -1600px 0; }\n  100% {\n    background-position: 0 0; } }\n\n@keyframes slide {\n  0% {\n    background-position: 0 0; }\n  16.66% {\n    background-position: 0 0; }\n  33.32% {\n    background-position: -800px 0; }\n  49.98% {\n    background-position: -800px 0; }\n  66.64% {\n    background-position: -1600px 0; }\n  83.30% {\n    background-position: -1600px 0; }\n  100% {\n    background-position: 0 0; } }\n\n.contacts {\n  -webkit-margin-after: auto;\n          margin-block-end: auto; }\n\n.round-border {\n  border-radius: 0.75em;\n  margin-top: 1%;\n  margin-bottom: 10%;\n  font-family: Open Sans; }\n\nion-fab-button {\n  height: 50px;\n  width: 70px; }\n\n.cart-length {\n  color: var(--ion-color-primary);\n  position: absolute;\n  top: 18px;\n  left: 25px;\n  font-weight: 600;\n  font-size: 1.2em;\n  min-width: 25px;\n  z-index: 10; }\n\n.cart-icon {\n  font-size: 50px; }\n\n.background {\n  height: 200px;\n  background-size: cover; }\n\n.landing-page {\n  background-size: cover;\n  background-repeat: repeat;\n  height: 12.5em;\n  margin-top: 8px;\n  vertical-align: middle;\n  width: 100%; }\n\n.content {\n  background-image: url(\"/assets/sample1.jpg\"); }\n\n.text-slide {\n  position: absolute;\n  bottom: 20px;\n  right: 20px;\n  background-color: white;\n  color: #000;\n  padding-left: 20px;\n  padding-right: 20px; }\n\n.slidesk {\n  background-image: url(\"/assets/sample1.jpg\"); }\n\n.bg {\n  --background: #ffff url('/assets/p11.jpg') no-repeat center center / contain; }\n\n.slanted-corner {\n  margin-top: 30px;\n  height: 200px;\n  background: whitesmoke;\n  position: relative; }\n\n.slanted-corner:before {\n  content: '';\n  position: absolute;\n  top: 0;\n  right: 0;\n  border-top: 80px solid white;\n  border-left: 80px solid red;\n  width: 0; }\n\n.align-middle {\n  width: 300px; }\n\n.textv {\n  background-color: #edf5e1;\n  font-weight: 500; }\n\n.video {\n  width: 31.25em;\n  height: 21.875em; }\n\n.primal {\n  background-color: #fff;\n  color: #ffff; }\n\n.back-color {\n  background-color: #ffff; }\n\nion-content {\n  margin-top: 0px;\n  padding-top: 0px; }\n\n.redirect-login {\n  width: 18.75em;\n  margin-left: auto;\n  margin-right: auto; }\n\n.card-resize {\n  width: 9.375em;\n  height: 9.375em;\n  display: flex;\n  flex-direction: column; }\n\n.display-product {\n  background-size: cover; }\n\n.slide-container {\n  position: relative; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcVXNlcnNcXEF0dGFpblxcZGVza3RvcFxccHJvamVjdHNcXGFwXFxhcHBhcmVsLWVjb21tZXJjZS9zcmNcXGFwcFxcaG9tZVxcaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUFDSSx5QkFBeUI7RUFDekIsWUFBWTtFQUdaLFlBQVk7RUFFWixrQkFBa0IsRUFBQTs7QUFFdEI7RUFDSSxhQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLFlBQVc7RUFDWCxzQ0FBc0M7RUFDdEMsc0JBQXVCO0VBQ3ZCLDZCQUFxQjtVQUFyQixxQkFBcUI7RUFDckIsK0JBQXVCO1VBQXZCLHVCQUF1QjtFQUN2QixtQ0FBMkI7VUFBM0IsMkJBQTJCO0VBQzNCLHVDQUErQjtVQUEvQiwrQkFBK0I7RUFDL0IsMkNBQW1DO1VBQW5DLG1DQUFtQyxFQUFBOztBQUVuQztFQUNBO0lBQUksd0JBQXVCLEVBQUE7RUFDM0I7SUFBUSx3QkFBdUIsRUFBQTtFQUMvQjtJQUFRLDZCQUE0QixFQUFBO0VBQ3BDO0lBQVEsNkJBQTRCLEVBQUE7RUFDcEM7SUFBUSw4QkFBNkIsRUFBQTtFQUNyQztJQUFRLDhCQUE2QixFQUFBO0VBQ3JDO0lBQU0sd0JBQXVCLEVBQUEsRUFBQTs7QUFQN0I7RUFDQTtJQUFJLHdCQUF1QixFQUFBO0VBQzNCO0lBQVEsd0JBQXVCLEVBQUE7RUFDL0I7SUFBUSw2QkFBNEIsRUFBQTtFQUNwQztJQUFRLDZCQUE0QixFQUFBO0VBQ3BDO0lBQVEsOEJBQTZCLEVBQUE7RUFDckM7SUFBUSw4QkFBNkIsRUFBQTtFQUNyQztJQUFNLHdCQUF1QixFQUFBLEVBQUE7O0FBRWpDO0VBQ0ksMEJBQXNCO1VBQXRCLHNCQUFzQixFQUFBOztBQUUxQjtFQUVJLHFCQUFxQjtFQUNyQixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLHNCQUFzQixFQUFBOztBQUUxQjtFQUNJLFlBQVk7RUFDWixXQUFXLEVBQUE7O0FBRWY7RUFDSSwrQkFBK0I7RUFDL0Isa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsV0FBVyxFQUFBOztBQUViO0VBQ0UsZUFBZSxFQUFBOztBQUVuQjtFQUlJLGFBQWE7RUFDYixzQkFBc0IsRUFBQTs7QUFJMUI7RUFDSSxzQkFBc0I7RUFDdEIseUJBQXdCO0VBQ3hCLGNBQWE7RUFHYixlQUFlO0VBQ2Ysc0JBQXNCO0VBQ3RCLFdBQVcsRUFBQTs7QUFFZjtFQUNJLDRDQUE0QyxFQUFBOztBQUVoRDtFQUNJLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osV0FBVztFQUNYLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLG1CQUFtQixFQUFBOztBQUVyQjtFQUNFLDRDQUE0QyxFQUFBOztBQUVoRDtFQUNJLDRFQUFhLEVBQUE7O0FBRWpCO0VBQ0ksZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixzQkFBcUI7RUFDckIsa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksV0FBVztFQUNYLGtCQUFrQjtFQUNsQixNQUFNO0VBQUUsUUFBUTtFQUNoQiw0QkFBNEI7RUFDNUIsMkJBQTJCO0VBQzNCLFFBQVEsRUFBQTs7QUFFWjtFQUNJLFlBQVksRUFBQTs7QUFHaEI7RUFDSSx5QkFBeUI7RUFFekIsZ0JBQWdCLEVBQUE7O0FBRXBCO0VBQ0ksY0FBYztFQUNkLGdCQUFnQixFQUFBOztBQUVwQjtFQUNJLHNCQUFzQjtFQUN0QixZQUFZLEVBQUE7O0FBS2hCO0VBQ0ksdUJBQXVCLEVBQUE7O0FBUzNCO0VBQ0ksZUFBZTtFQUNmLGdCQUFnQixFQUFBOztBQUVwQjtFQUNJLGNBQWM7RUFDZCxpQkFBZ0I7RUFDaEIsa0JBQWtCLEVBQUE7O0FBRXRCO0VBQ0ksY0FBYztFQUNkLGVBQWU7RUFDZixhQUFhO0VBQ2Isc0JBQXNCLEVBQUE7O0FBRTFCO0VBQ0ksc0JBQXNCLEVBQUE7O0FBRTFCO0VBQ0ksa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW9uLWNvbnRlbnR7XHJcblxyXG4vLyAgICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogI0RFRDJBODtcclxuLy8gfVxyXG4uaW50cm8tY2FyZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBlYmY0O1xyXG4gICAgY29sb3I6IGF6dXJlO1xyXG4gICAgLy8gbWFyZ2luLWxlZnQ6YXV0bzsgXHJcbiAgICAvLyBtYXJnaW4tcmlnaHQ6IGF1dG87IFxyXG4gICAgaGVpZ2h0OiAxNmVtO1xyXG4gICAgLy9vdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5zaW1wbGUtc3Mge1xyXG4gICAgaGVpZ2h0OjI1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZWVlZTtcclxuICAgIG1hcmdpbjphdXRvO1xyXG4gICAgYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy9zYW1wbGUxLmpwZ1wiKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXIgO1xyXG4gICAgYW5pbWF0aW9uLW5hbWU6IHNsaWRlO1xyXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxMHM7XHJcbiAgICBhbmltYXRpb24tZGlyZWN0aW9uOiBub3JtYWw7XHJcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlO1xyXG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XHJcbiAgICB9XHJcbiAgICBAa2V5ZnJhbWVzIHNsaWRlIHtcclxuICAgIDAlIHtiYWNrZ3JvdW5kLXBvc2l0aW9uOjAgMDt9XHJcbiAgICAxNi42NiUge2JhY2tncm91bmQtcG9zaXRpb246MCAwO31cclxuICAgIDMzLjMyJSB7YmFja2dyb3VuZC1wb3NpdGlvbjotODAwcHggMDt9XHJcbiAgICA0OS45OCUge2JhY2tncm91bmQtcG9zaXRpb246LTgwMHB4IDA7fVxyXG4gICAgNjYuNjQlIHtiYWNrZ3JvdW5kLXBvc2l0aW9uOi0xNjAwcHggMDt9XHJcbiAgICA4My4zMCUge2JhY2tncm91bmQtcG9zaXRpb246LTE2MDBweCAwO31cclxuICAgIDEwMCUge2JhY2tncm91bmQtcG9zaXRpb246MCAwO31cclxuICAgIH1cclxuLmNvbnRhY3Rze1xyXG4gICAgbWFyZ2luLWJsb2NrLWVuZDogYXV0bztcclxufVxyXG4ucm91bmQtYm9yZGVye1xyXG4gICAgLy9ib3JkZXI6IDJweCBzb2xpZCByZWQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjc1ZW07XHJcbiAgICBtYXJnaW4tdG9wOiAxJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwJTtcclxuICAgIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnM7XHJcbn1cclxuaW9uLWZhYi1idXR0b24ge1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgd2lkdGg6IDcwcHg7XHJcbiAgfVxyXG4uY2FydC1sZW5ndGgge1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMThweDtcclxuICAgIGxlZnQ6IDI1cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zaXplOiAxLjJlbTtcclxuICAgIG1pbi13aWR0aDogMjVweDtcclxuICAgIHotaW5kZXg6IDEwO1xyXG4gIH1cclxuICAuY2FydC1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogNTBweDtcclxuICB9XHJcbi5iYWNrZ3JvdW5ke1xyXG4gICAgLy8gYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9zYW1wbGUxLmpwZ1wiKTtcclxuICAgIC8vYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgXHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIC8vICBmaWx0ZXI6IGJsdXIoOHB4KTtcclxuICAgIC8vIC13ZWJraXQtZmlsdGVyOiBibHVyKDhweCk7XHJcbn1cclxuLmxhbmRpbmctcGFnZXtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7IFxyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6cmVwZWF0O1xyXG4gICAgaGVpZ2h0OjEyLjVlbTsgXHJcbiAgICAvLyB3aWR0aDo2Mi41ZW07XHJcbiAgICAvLyBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgIG1hcmdpbi10b3A6IDhweDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4uY29udGVudHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvc2FtcGxlMS5qcGdcIik7XHJcbn1cclxuLnRleHQtc2xpZGUge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAyMHB4O1xyXG4gICAgcmlnaHQ6IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcclxuICB9XHJcbiAgLnNsaWRlc2t7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL3NhbXBsZTEuanBnXCIpO1xyXG4gIH1cclxuLmJnIHtcclxuICAgIC0tYmFja2dyb3VuZDogI2ZmZmYgdXJsKCcvYXNzZXRzL3AxMS5qcGcnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciAvIGNvbnRhaW47XHJcbn1cclxuLnNsYW50ZWQtY29ybmVyIHtcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgYmFja2dyb3VuZDp3aGl0ZXNtb2tlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uc2xhbnRlZC1jb3JuZXI6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwOyByaWdodDogMDtcclxuICAgIGJvcmRlci10b3A6IDgwcHggc29saWQgd2hpdGU7XHJcbiAgICBib3JkZXItbGVmdDogODBweCBzb2xpZCByZWQ7XHJcbiAgICB3aWR0aDogMDtcclxufVxyXG4uYWxpZ24tbWlkZGxlIHtcclxuICAgIHdpZHRoOiAzMDBweDtcclxufVxyXG5cclxuLnRleHR2IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZGY1ZTE7XHJcbiAgICAvLyBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmb250LXdlaWdodDogNTAwOyAgXHJcbn1cclxuLnZpZGVvIHtcclxuICAgIHdpZHRoOiAzMS4yNWVtO1xyXG4gICAgaGVpZ2h0OiAyMS44NzVlbTtcclxufVxyXG4ucHJpbWFsIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBjb2xvcjogI2ZmZmY7XHJcbiAgIFxyXG5cclxuXHJcbn1cclxuLmJhY2stY29sb3Ige1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmY7XHJcbiAgICAvLyBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAvLyB0b3A6IDE5MHB4O1xyXG4gICAgLy8gbGVmdDogMHB4O1xyXG4gICAgLy8gcmlnaHQ6IDBweDtcclxuICAgIC8vIGhlaWdodDogNTBweDtcclxuICAgXHJcblxyXG59XHJcbmlvbi1jb250ZW50IHtcclxuICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgIHBhZGRpbmctdG9wOiAwcHg7IFxyXG59XHJcbi5yZWRpcmVjdC1sb2dpbiB7XHJcbiAgICB3aWR0aDogMTguNzVlbTsgXHJcbiAgICBtYXJnaW4tbGVmdDphdXRvOyBcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxufVxyXG4uY2FyZC1yZXNpemUge1xyXG4gICAgd2lkdGg6IDkuMzc1ZW07XHJcbiAgICBoZWlnaHQ6IDkuMzc1ZW07XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG4uZGlzcGxheS1wcm9kdWN0IHtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuLnNsaWRlLWNvbnRhaW5lciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG5cclxuJGNvbG9yczooXHJcbiAgICBkYW5nZXI6ICNlYzVhNWEsXHJcbiAgICBwcmltYXJ5OiBibHVlLFxyXG4gICAgZGFyazogd2hpdGVcclxuKVxyXG4iXX0= */"

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
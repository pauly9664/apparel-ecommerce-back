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

module.exports = "<ion-header>\r\n  <ion-toolbar >\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-fab vertical=\"top\" horizontal=\"end\">\r\n      <ion-button color=\"dark\" (click)=\"openCart()\">\r\n        <ion-badge  *ngIf=\"cart.length > 0\">{{ cart.length }}</ion-badge>\r\n        <ion-icon name=\"cart\" slot=\"icon-only\"></ion-icon>\r\n      </ion-button>\r\n    </ion-fab>\r\n    <!-- <ion-button  *ngIf=\"!checkAuth\" slot=\"end\" style=\"margin-top: 3%;\"color=\"danger\"size=\"small\"routerLink=\"/menu/login\" ><ion-icon name=\"log-in\"></ion-icon>Login</ion-button> -->\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content class=\"card-background-page\" >\r\n \r\n\r\n  <img src=\"/assets/PreetiLogo.png\" style=\"margin-left: 35%; height:7.5em; width: 9.375em\" />\r\n  <!-- <ion-card>\r\n    <ion-card-title routerLink=\"/menu/main-shop\" style=\"font-weight: bold; font-family: Open Sans;\">New Arrivals</ion-card-title> -->\r\n    <div class=\"categoryblock\">\r\n        <h3 text-center style=\"font-weight: bold;\">New Arrivals</h3>\r\n    <ion-slides [options]=\"slidesConfig\">\r\n    \r\n      <ion-slide *ngFor=\"let img of item\">\r\n        <!-- <div *ngIf=\"cat.expanded\"> -->\r\n                <ion-card class=\"new-card\">\r\n                  <ion-card-header>\r\n                    <ion-card-title style=\"font-family: fantasy\">\r\n                      <p style=\"font-size: small;\">{{img.description }} - {{ img.price }}</p>\r\n                    </ion-card-title>\r\n                    <p (click)=\"openImage(img)\" tappable style=\"font-family: Fantasy; color:burlywood\" click=\"getMarketplaceItems()\">VIEW PRODUCT</p>\r\n                  </ion-card-header>\r\n                  <ion-card-content>\r\n                      <div class=\"display-items\"><img tappable class=\"landing-page\" (click)=\"openImage(img)\" [src]='img.url' /></div> \r\n                  </ion-card-content>\r\n                  </ion-card>       \r\n        <!-- </div> -->\r\n      </ion-slide>\r\n   \r\n    </ion-slides> \r\n  </div>\r\n  <!-- </ion-card> -->\r\n  <div *ngIf=\"isWebLayout\">\r\n  <ion-grid>\r\n    <ion-row>\r\n    <ion-col  size-lg=\"4\" >\r\n      <ion-card routerLink=\"/menu/media\">\r\n        <img class=\"bg-image\" src=\"assets/jeans_dress.jpeg\"/>\r\n        <div routerLink=\"/menu/media\" class=\"card-title\">Dresses</div>\r\n        <div class=\"card-subtitle\">Selections from Turkey & US</div>\r\n        \r\n      </ion-card>\r\n    </ion-col>\r\n    <ion-col size-lg=\"4\" >\r\n      <ion-card routerLink=\"/menu/media\">\r\n        <img class=\"bg-image\" src=\"assets/casual_green.jpeg\"/>\r\n        <div routerLink=\"/menu/media\" class=\"card-title\">Casual Suits</div>\r\n        <div class=\"card-subtitle\">Selections from Turkey & US</div>\r\n      </ion-card>\r\n    </ion-col>\r\n    <ion-col size-sm=\"12\" size-lg=\"4\" size-md=\"4\">\r\n      <ion-card routerLink=\"/menu/media\">\r\n        <img class=\"bg-image\" src=\"assets/skirt_suit.jpeg\"/>\r\n        <div routerLink=\"/menu/media\" class=\"card-title\">Skirt Suits</div>\r\n        <div class=\"card-subtitle\">Official Wear </div>\r\n      </ion-card>\r\n    </ion-col>\r\n  </ion-row>\r\n  <ion-row>\r\n    <ion-col size-lg=\"4\" >\r\n      <ion-card routerLink=\"/menu/media\">\r\n        <img class=\"bg-image\" src=\"assets/sweater_mustard.jpeg\"/>\r\n        <div routerLink=\"/menu/media\" class=\"card-title\">Sweaters</div>\r\n        <div class=\"card-subtitle\">Warm & Cozy</div>\r\n      </ion-card>\r\n    </ion-col>\r\n    <ion-col  size-lg=\"4\">\r\n      <ion-card routerLink=\"/menu/media\">\r\n        <img class=\"bg-image\" src=\"assets/sweater_tribal.jpeg\"/>\r\n        <div routerLink=\"/menu/media\" class=\"card-title\">Jackets</div>\r\n        <div class=\"card-subtitle\">Get that swag on</div>\r\n      </ion-card>\r\n    </ion-col>\r\n    <ion-col size-lg=\"4\" >\r\n      <ion-card routerLink=\"/menu/media\">\r\n        <img class=\"bg-image\" src=\"assets/suit1.jpg\"/>\r\n        <div routerLink=\"/menu/media\" class=\"card-title\">Men's Stuff</div>\r\n        <div class=\"card-subtitle\">Official, Casual etc...</div>\r\n      </ion-card>\r\n    </ion-col>\r\n  </ion-row>\r\n  </ion-grid>\r\n</div>\r\n  <div *ngIf=\"isMobileLayout\">\r\n    <ion-card routerLink=\"/menu/media\">\r\n      <img class=\"bg-image\" src=\"assets/jeans_dress.jpeg\"/>\r\n      <div routerLink=\"/menu/media\" class=\"card-title\">Dresses</div>\r\n      <div class=\"card-subtitle\">Selections from Turkey & US</div>\r\n    </ion-card>\r\n  <ion-card routerLink=\"/menu/media\">\r\n    <img class=\"bg-image\" src=\"assets/casual_green.jpeg\"/>\r\n    <div routerLink=\"/menu/media\" class=\"card-title\">Casual Suits</div>\r\n    <div class=\"card-subtitle\">Selections from Turkey & US</div>\r\n  </ion-card>\r\n  <ion-card routerLink=\"/menu/media\">\r\n    <img class=\"bg-image\" src=\"assets/skirt_suit.jpeg\"/>\r\n    <div routerLink=\"/menu/media\" class=\"card-title\">Skirt Suits</div>\r\n    <div class=\"card-subtitle\">Official Wear </div>\r\n  </ion-card>\r\n  <ion-card routerLink=\"/menu/media\">\r\n    <img class=\"bg-image\" src=\"assets/sweater_mustard.jpeg\"/>\r\n    <div routerLink=\"/menu/media\" class=\"card-title\">Sweaters</div>\r\n    <div class=\"card-subtitle\">Warm & Cozy</div>\r\n  </ion-card>\r\n  <ion-card routerLink=\"/menu/media\">\r\n    <img class=\"bg-image\" src=\"assets/sweater_tribal.jpeg\"/>\r\n    <div routerLink=\"/menu/media\" class=\"card-title\">Jackets</div>\r\n    <div class=\"card-subtitle\">Get that swag on</div>\r\n  </ion-card>\r\n  <ion-card routerLink=\"/menu/media\">\r\n    <img class=\"bg-image\" src=\"assets/suit1.jpg\"/>\r\n    <div routerLink=\"/menu/media\" class=\"card-title\">Men's Stuff</div>\r\n    <div class=\"card-subtitle\">Official, Casual etc...</div>\r\n  </ion-card>\r\n</div>\r\n            <!-- <ion-grid>\r\n              <ion-row>\r\n              <ion-col size-sm=\"12\" size-md=\"12\" size-lg=\"12\" style=\"background: #fff; color: grey;height: 50px;width: 80%;padding-top:10px;\">\r\n                <div class=\"round-border\">\r\n                <ion-col size-sm=\"2\" tappable routerLink=\"/menu/home\" style=\"color: #000;font-weight: bold;\"></ion-col>\r\n                <ion-col size-sm=\"2\" tappable routerLink=\"/menu/accountslanding\"style=\"color: #000;font-weight: bold;\"><i>Account </i></ion-col>\r\n                <ion-col size-sm=\"2\"tappable routerLink=\"/menu/media\" style=\"color: rgb(68, 49, 49);font-weight: bold;\"><i>Shop </i></ion-col>\r\n                <ion-col size-sm=\"2\" tappable style=\"color: #000; font-weight: bold;\"><i>Orders </i></ion-col> \r\n                <ion-col size-sm=\"2\" tappable routerLink=\"/menu/contact\" style=\"color: #000; font-weight: bold;\"><i>Contact Us </i></ion-col> -->\r\n\r\n             \r\n              <!-- </div> -->\r\n              \r\n            \r\n            <!-- </ion-row>\r\n              </ion-grid>  -->\r\n              <!-- <ion-card class=\"intro-card\"class=\"background\"> -->\r\n                <!-- <div class=\"simple-ss\"></div> -->\r\n                <!-- <div class=\"background\">\r\n                <ion-slides [options]=\"slidesConfig\">\r\n                  <ion-slide>\r\n                    <div class=\"content\"></div>\r\n                       <img class=\"landing-page\" src=\"/assets/girl_dress.jpeg\" /> \r\n                     <p class=\"text-slide\" style=\"font-family: Open Sans;\"><i>Dress selections</i><br>\r\n                    <ion-button color=\"danger\"  size=\"small\" style=\"color: #fff; font-family: Open Sans ;\" routerLink=\"/menu/media\">View</ion-button>\r\n                    </p> \r\n                  </ion-slide>\r\n                  <ion-slide>\r\n                       <img class=\"landing-page\" src=\"/assets/men_suit.jpeg\" /><br>\r\n                    <p class=\"text-slide\" style=\"font-family:Open Sans;\"><i>Men's Casual Wear</i><br>\r\n                      <ion-button color=\"danger\" size=\"small\" style=\"color: #fff; font-family: Open Sans;\" routerLink=\"/menu/media\">View</ion-button>\r\n                    </p>\r\n                  </ion-slide>\r\n                  <ion-slide>\r\n                    <img class=\"landing-page\" src=\"/assets/kalu.jpg\" /><br>\r\n                 <p class=\"text-slide\" style=\"font-family:Open Sans;\"><i>Shoes and Footwear </i><br>\r\n                   <ion-button color=\"danger\" size=\"small\" style=\"color: #fff; font-family: Open Sans;\" routerLink=\"/menu/media\">View</ion-button>\r\n                 </p>\r\n               </ion-slide>\r\n                  <ion-slide>\r\n                      <img class=\"landing-page\" src=\"/assets/lhbag.jpg\" />\r\n                    <p class=\"text-slide\" style=\"font-family: Open Sans;\"><i>Accessories and Others</i><br>\r\n                      <ion-button color=\"danger\" size=\"small\" style=\"color: #fff; font-family: Open Sans;\"routerLink=\"/menu/media\">View</ion-button>\r\n                    </p>\r\n                  </ion-slide>\r\n                </ion-slides>\r\n        </div> -->\r\n        <!-- <ion-tabs>\r\n          <ion-tab-bar slot=\"bottom\">\r\n            <ion-tab-button tab=\"shop\">\r\n              <ion-icon color=\"danger\" name=\"flame\"></ion-icon>\r\n              <ion-label style=\"font-weight:bold\">Shop Now</ion-label>\r\n              <ion-badge color=\"danger\">6</ion-badge>\r\n            </ion-tab-button>\r\n            <ion-tab-button tab=\"about\">\r\n              <ion-icon color=\"primary\" name=\"information-circle\"></ion-icon>\r\n              <ion-label style=\"font-weight:bold\">About</ion-label>\r\n            </ion-tab-button>\r\n            <ion-tab-button tab=\"map\">\r\n              <ion-icon  name=\"paper-plane\"></ion-icon>\r\n              <ion-label style=\"font-weight:bold\">Contact</ion-label>\r\n            </ion-tab-button>\r\n        \r\n          \r\n          </ion-tab-bar>\r\n        </ion-tabs> -->\r\n      <!-- <ion-grid fixed> -->\r\n    <!-- <ion-row>\r\n      <ion-col class=\"slanted-corner\" size=\"12\">\r\n        <h1 text-center style=\"font-family: Impact;color:#000\"><i>Welcome to..</i></h1>\r\n        <section text-center margin-bottom>\r\n         \r\n        </section>\r\n      </ion-col>\r\n    </ion-row> -->\r\n   \r\n  <!-- </ion-grid> -->\r\n  <!-- <ion-card>\r\n    <ion-grid fixed>\r\n      <ion-row>\r\n        <ion-col size-sm=\"2\" size-md=\"6\">\r\n          <video class=\"video\" webkit-playsinline playsinline autoplay loop>\r\n            <source src=\"assets/home-video2.mp4\" type=\"video/mp4\">\r\n          </video>\r\n        </ion-col>\r\n        <ion-col size-sm=\"2\" size=\"6\">\r\n          <video class=\"video\" webkit-playsinline playsinline autoplay loop>\r\n            <source src=\"assets/home-video3.mp4\" type=\"video/mp4\">\r\n          </video>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-card> -->\r\n  \r\n  <!-- <ion-card>\r\n    <ion-card-content>\r\n      <div class=\"textv\">\r\n        <p text-center style=\"font-weight: bold; \">Get to know us better</p>\r\n        <a href=\"https://web.facebook.com/preetifashions\" target=\"_blank\"> <ion-icon name=\"logo-facebook\" style=\"font-size:5em; margin-right: 50%;\" ></ion-icon></a>\r\n        <a href=\"https://www.instagram.com/preetifashions_ke/\" target=\"_blank\"><ion-icon name=\"logo-instagram\" style=\"font-size: 5em;\" ></ion-icon></a>\r\n      </div>\r\n      <div class=\"routeit\"><a routerLink=\"/menu/contact\">Contact Us..</a></div>\r\n    </ion-card-content>\r\n  </ion-card> -->\r\n  <!-- <div class=\"primal\">\r\n    <ion-text color=\"light\">\r\n      <p style =\"font-weight: bold;background-color: #edf5e1;color: #000; font-family: Open Sans\" text-center>Top categories</p>\r\n    </ion-text>\r\n  </div> -->\r\n  <!-- <div class=\"back-color\">\r\n    <ion-grid fixed>\r\n      <ion-row>\r\n        <ion-col class=\"ion-align-self-start\" size-sm=\"3\" size-md=\"3\" style=\"font-family: Impact\">Dresses\r\n          <ion-thumbnail><img tappable routerLink=\"/menu/media\" src=\"/assets/slf2.jpg\" /></ion-thumbnail>\r\n        </ion-col>\r\n        <ion-col class=\"ion-align-self-start\" size-sm=\"3\" size-md=\"3\" style=\"font-family: Impact\">Tops\r\n          <ion-thumbnail><img tappable routerLink=\"/menu/media\" src=\"/assets/img3.jpg\" /></ion-thumbnail>\r\n        </ion-col>\r\n        <ion-col class=\"ion-align-self-center\" size-sm=\"3\" size-md=\"3\" style=\"font-family: Impact\">Shoes\r\n          <ion-thumbnail><img tappable src=\"/assets/oshoe3.jpg\" routerLink=\"/menu/media\" /></ion-thumbnail>\r\n        </ion-col>\r\n        <ion-col class=\"ion-align-self-center\" size-sm=\"3\" size-md=\"3\" style=\"font-family: Impact\">Suits\r\n          <ion-thumbnail><img tappable src=\"/assets/tsuit5.jpg\" routerLink=\"/menu/media\" /></ion-thumbnail>\r\n        </ion-col>\r\n        <ion-col class=\"ion-align-self-center\" size-sm=\"3\" size-md=\"3\" style=\"font-family: Impact\">Bags\r\n          <ion-thumbnail><img tappable src=\"/assets/hbag2.jpg\" routerLink=\"/menu/media\" /></ion-thumbnail>\r\n        </ion-col>\r\n        <ion-col class=\"ion-align-self-end\" size-sm=\"3\" size-md=\"3\" style=\"font-family: Impact\">Men\r\n          <ion-thumbnail><img tappable src=\"/assets/suit1.jpg\" routerLink=\"/menu/media\" /></ion-thumbnail>\r\n        </ion-col>\r\n      \r\n      </ion-row>\r\n    </ion-grid>\r\n  </div> -->\r\n  <!-- <div class=\"primal\">\r\n    <ion-text color=\"light\">\r\n      <h2> Our offer deals...</h2>\r\n    </ion-text>\r\n  </div> -->\r\n  <!-- <div class=\"redirect-login\">\r\n    <ion-button color=\"danger\" (click)=\"presentLogoutWithOptions()\" (click)=\"logout()\" routerLink=\"/menu/login\" [disabled]=\"!checkAuth\"><ion-icon slot=\"start\" name=\"log-out\"></ion-icon>Logout\r\n    </ion-button>\r\n  </div> -->\r\n  <!-- <ion-footer>\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col>\r\n          <h3 class=\"footer-styling\"><ion-icon name=\"navigate\"></ion-icon>OUR LOCATION</h3>\r\n          <p class=\"footer-styling\">Moktar Daddar Street</p>\r\n        </ion-col>\r\n        <ion-col>\r\n          <h3 class=\"footer-styling\"><ion-icon name=\"time\"></ion-icon>WORKING HOURS</h3>\r\n          <p class=\"footer-styling\"><span>Mon-Sat:</span> Open from 8:30AM - 7:00PM</p><br>\r\n        \r\n        </ion-col>\r\n        <ion-col>\r\n          <h3 class=\"footer-styling\"><ion-icon name=\"call\"></ion-icon>CONTACT US</h3>\r\n          <p class=\"footer-styling\"><ion-icon name=\"logo-whatsapp\"></ion-icon>+254721397580</p><br>\r\n          <p class=\"footer-styling\">preetifashions90@gmail.com</p>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-footer> -->\r\n<!-- </ion-content> -->"

/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".intro-card {\n  background-color: #f0ebf4;\n  color: azure;\n  height: 16em;\n  position: relative; }\n\n.simple-ss {\n  height: 250px;\n  background-color: #eeeeee;\n  margin: auto;\n  background: url(\"/assets/sample1.jpg\");\n  background-size: cover;\n  -webkit-animation-name: slide;\n          animation-name: slide;\n  -webkit-animation-duration: 10s;\n          animation-duration: 10s;\n  -webkit-animation-direction: normal;\n          animation-direction: normal;\n  -webkit-animation-timing-function: ease;\n          animation-timing-function: ease;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite; }\n\n@-webkit-keyframes slide {\n  0% {\n    background-position: 0 0; }\n  16.66% {\n    background-position: 0 0; }\n  33.32% {\n    background-position: -800px 0; }\n  49.98% {\n    background-position: -800px 0; }\n  66.64% {\n    background-position: -1600px 0; }\n  83.30% {\n    background-position: -1600px 0; }\n  100% {\n    background-position: 0 0; } }\n\n@keyframes slide {\n  0% {\n    background-position: 0 0; }\n  16.66% {\n    background-position: 0 0; }\n  33.32% {\n    background-position: -800px 0; }\n  49.98% {\n    background-position: -800px 0; }\n  66.64% {\n    background-position: -1600px 0; }\n  83.30% {\n    background-position: -1600px 0; }\n  100% {\n    background-position: 0 0; } }\n\n.contacts {\n  -webkit-margin-after: auto;\n          margin-block-end: auto; }\n\n.round-border {\n  border-radius: 0.75em;\n  margin-top: 1%;\n  margin-bottom: 10%;\n  font-family: Open Sans; }\n\nion-fab-button {\n  height: 50px;\n  width: 70px; }\n\n.cart-length {\n  color: var(--ion-color-primary);\n  position: absolute;\n  top: 18px;\n  left: 25px;\n  font-weight: 600;\n  font-size: 1.2em;\n  min-width: 25px;\n  z-index: 10; }\n\n.cart-icon {\n  font-size: 50px; }\n\n.background {\n  height: 200px;\n  background-size: cover; }\n\n.new-card {\n  width: 190px;\n  height: 450px; }\n\n.category-block {\n  margin-bottom: 5px;\n  margin-left: 50px;\n  margin-right: 50px;\n  margin-top: 5px; }\n\n.landing-page {\n  background-size: cover;\n  background-repeat: repeat;\n  height: 100%;\n  vertical-align: middle;\n  width: 100%; }\n\n.content {\n  background-image: url(\"/assets/sample1.jpg\"); }\n\n.text-slide {\n  position: absolute;\n  bottom: 20px;\n  right: 20px;\n  background-color: white;\n  color: #000;\n  padding-left: 20px;\n  padding-right: 20px; }\n\n.slidesk {\n  background-image: url(\"/assets/sample1.jpg\"); }\n\n.bg {\n  --background: #ffff url('/assets/p11.jpg') no-repeat center center / contain; }\n\n.slanted-corner {\n  margin-top: 30px;\n  height: 200px;\n  background: whitesmoke;\n  position: relative; }\n\n.slanted-corner:before {\n  content: '';\n  position: absolute;\n  top: 0;\n  right: 0;\n  border-top: 80px solid white;\n  border-left: 80px solid red;\n  width: 0; }\n\n.align-middle {\n  width: 300px; }\n\nion-footer {\n  background-color: #000; }\n\n.textv {\n  background-color: #edf5e1;\n  font-weight: 500; }\n\n.video {\n  width: 31.25em;\n  height: 21.875em; }\n\n.primal {\n  background-color: #fff;\n  color: #ffff; }\n\n.back-color {\n  background-color: #ffff; }\n\nion-content {\n  margin-top: 0px;\n  padding-top: 0px; }\n\n.redirect-login {\n  width: 18.75em;\n  margin-left: auto;\n  margin-right: auto; }\n\n.card-resize {\n  width: 9.375em;\n  height: 9.375em;\n  display: flex;\n  flex-direction: column; }\n\n.display-product {\n  background-size: cover; }\n\n.slide-container {\n  position: relative; }\n\n.footer-styling {\n  color: #fff;\n  font-family: Open Sans; }\n\n.card-background-page ion-card {\n  position: relative;\n  text-align: center;\n  height: 21.875em; }\n\n.card-background-page .card-title {\n  position: absolute;\n  top: 36%;\n  font-size: 2.0em;\n  width: 100%;\n  font-weight: bold;\n  color: #000;\n  font-family: Open Sans;\n  background-color: #fff; }\n\n.card-background-page .card-subtitle {\n  font-size: 1.0em;\n  position: absolute;\n  top: 52%;\n  width: 100%;\n  color: #000;\n  background-color: #fff;\n  font-family: Open Sans; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcVXNlcnNcXEF0dGFpblxcZGVza3RvcFxccHJvamVjdHNcXGFwcGFyZWwtZWNvbW1lcmNlL3NyY1xcYXBwXFxob21lXFxob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUNJLHlCQUF5QjtFQUN6QixZQUFZO0VBR1osWUFBWTtFQUVaLGtCQUFrQixFQUFBOztBQUV0QjtFQUNJLGFBQVk7RUFDWix5QkFBeUI7RUFDekIsWUFBVztFQUNYLHNDQUFzQztFQUN0QyxzQkFBdUI7RUFDdkIsNkJBQXFCO1VBQXJCLHFCQUFxQjtFQUNyQiwrQkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3ZCLG1DQUEyQjtVQUEzQiwyQkFBMkI7RUFDM0IsdUNBQStCO1VBQS9CLCtCQUErQjtFQUMvQiwyQ0FBbUM7VUFBbkMsbUNBQW1DLEVBQUE7O0FBRW5DO0VBQ0E7SUFBSSx3QkFBdUIsRUFBQTtFQUMzQjtJQUFRLHdCQUF1QixFQUFBO0VBQy9CO0lBQVEsNkJBQTRCLEVBQUE7RUFDcEM7SUFBUSw2QkFBNEIsRUFBQTtFQUNwQztJQUFRLDhCQUE2QixFQUFBO0VBQ3JDO0lBQVEsOEJBQTZCLEVBQUE7RUFDckM7SUFBTSx3QkFBdUIsRUFBQSxFQUFBOztBQVA3QjtFQUNBO0lBQUksd0JBQXVCLEVBQUE7RUFDM0I7SUFBUSx3QkFBdUIsRUFBQTtFQUMvQjtJQUFRLDZCQUE0QixFQUFBO0VBQ3BDO0lBQVEsNkJBQTRCLEVBQUE7RUFDcEM7SUFBUSw4QkFBNkIsRUFBQTtFQUNyQztJQUFRLDhCQUE2QixFQUFBO0VBQ3JDO0lBQU0sd0JBQXVCLEVBQUEsRUFBQTs7QUFFakM7RUFDSSwwQkFBc0I7VUFBdEIsc0JBQXNCLEVBQUE7O0FBRTFCO0VBRUkscUJBQXFCO0VBQ3JCLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsc0JBQXNCLEVBQUE7O0FBRTFCO0VBQ0ksWUFBWTtFQUNaLFdBQVcsRUFBQTs7QUFFZjtFQUNJLCtCQUErQjtFQUMvQixrQkFBa0I7RUFDbEIsU0FBUztFQUNULFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixXQUFXLEVBQUE7O0FBRWI7RUFDRSxlQUFlLEVBQUE7O0FBRW5CO0VBSUksYUFBYTtFQUNiLHNCQUFzQixFQUFBOztBQUkxQjtFQUdJLFlBQVk7RUFDWixhQUFhLEVBQUE7O0FBRWpCO0VBQ0ksa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixrQkFBaUI7RUFDakIsZUFBZSxFQUFBOztBQUVuQjtFQUNJLHNCQUFzQjtFQUN0Qix5QkFBd0I7RUFFeEIsWUFBWTtFQUlaLHNCQUFzQjtFQUN0QixXQUFXLEVBQUE7O0FBR2Y7RUFDSSw0Q0FBNEMsRUFBQTs7QUFFaEQ7RUFDSSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFdBQVc7RUFDWCx1QkFBdUI7RUFDdkIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixtQkFBbUIsRUFBQTs7QUFFckI7RUFDRSw0Q0FBNEMsRUFBQTs7QUFFaEQ7RUFDSSw0RUFBYSxFQUFBOztBQUVqQjtFQUNJLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2Isc0JBQXFCO0VBQ3JCLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsTUFBTTtFQUFFLFFBQVE7RUFDaEIsNEJBQTRCO0VBQzVCLDJCQUEyQjtFQUMzQixRQUFRLEVBQUE7O0FBRVo7RUFDSSxZQUFZLEVBQUE7O0FBRWhCO0VBQ0ksc0JBQXNCLEVBQUE7O0FBRTFCO0VBQ0kseUJBQXlCO0VBRXpCLGdCQUFnQixFQUFBOztBQUVwQjtFQUNJLGNBQWM7RUFDZCxnQkFBZ0IsRUFBQTs7QUFFcEI7RUFDSSxzQkFBc0I7RUFDdEIsWUFBWSxFQUFBOztBQUtoQjtFQUNJLHVCQUF1QixFQUFBOztBQVMzQjtFQUNJLGVBQWU7RUFDZixnQkFBZ0IsRUFBQTs7QUFFcEI7RUFDSSxjQUFjO0VBQ2QsaUJBQWdCO0VBQ2hCLGtCQUFrQixFQUFBOztBQUV0QjtFQUNJLGNBQWM7RUFDZCxlQUFlO0VBQ2YsYUFBYTtFQUNiLHNCQUFzQixFQUFBOztBQUUxQjtFQUNJLHNCQUFzQixFQUFBOztBQUUxQjtFQUNJLGtCQUFrQixFQUFBOztBQUV0QjtFQUNJLFdBQVc7RUFDWCxzQkFBc0IsRUFBQTs7QUFNdEI7RUFFUSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGdCQUFnQixFQUFBOztBQUp4QjtFQU9RLGtCQUFrQjtFQUNsQixRQUFPO0VBQ1AsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsV0FBVztFQUNYLHNCQUFzQjtFQUN0QixzQkFDSixFQUFBOztBQWZKO0VBaUJRLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFdBQVc7RUFDWCxXQUFXO0VBQ1gsc0JBQXNCO0VBQ3RCLHNCQUFzQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGlvbi1jb250ZW50e1xyXG5cclxuLy8gICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICNERUQyQTg7XHJcbi8vIH1cclxuLmludHJvLWNhcmQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YwZWJmNDtcclxuICAgIGNvbG9yOiBhenVyZTtcclxuICAgIC8vIG1hcmdpbi1sZWZ0OmF1dG87IFxyXG4gICAgLy8gbWFyZ2luLXJpZ2h0OiBhdXRvOyBcclxuICAgIGhlaWdodDogMTZlbTtcclxuICAgIC8vb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4uc2ltcGxlLXNzIHtcclxuICAgIGhlaWdodDoyNTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWVlZWU7XHJcbiAgICBtYXJnaW46YXV0bztcclxuICAgIGJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvc2FtcGxlMS5qcGdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyIDtcclxuICAgIGFuaW1hdGlvbi1uYW1lOiBzbGlkZTtcclxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMTBzO1xyXG4gICAgYW5pbWF0aW9uLWRpcmVjdGlvbjogbm9ybWFsO1xyXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZTtcclxuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xyXG4gICAgfVxyXG4gICAgQGtleWZyYW1lcyBzbGlkZSB7XHJcbiAgICAwJSB7YmFja2dyb3VuZC1wb3NpdGlvbjowIDA7fVxyXG4gICAgMTYuNjYlIHtiYWNrZ3JvdW5kLXBvc2l0aW9uOjAgMDt9XHJcbiAgICAzMy4zMiUge2JhY2tncm91bmQtcG9zaXRpb246LTgwMHB4IDA7fVxyXG4gICAgNDkuOTglIHtiYWNrZ3JvdW5kLXBvc2l0aW9uOi04MDBweCAwO31cclxuICAgIDY2LjY0JSB7YmFja2dyb3VuZC1wb3NpdGlvbjotMTYwMHB4IDA7fVxyXG4gICAgODMuMzAlIHtiYWNrZ3JvdW5kLXBvc2l0aW9uOi0xNjAwcHggMDt9XHJcbiAgICAxMDAlIHtiYWNrZ3JvdW5kLXBvc2l0aW9uOjAgMDt9XHJcbiAgICB9XHJcbi5jb250YWN0c3tcclxuICAgIG1hcmdpbi1ibG9jay1lbmQ6IGF1dG87XHJcbn1cclxuLnJvdW5kLWJvcmRlcntcclxuICAgIC8vYm9yZGVyOiAycHggc29saWQgcmVkO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC43NWVtO1xyXG4gICAgbWFyZ2luLXRvcDogMSU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMCU7XHJcbiAgICBmb250LWZhbWlseTogT3BlbiBTYW5zO1xyXG59XHJcbmlvbi1mYWItYnV0dG9uIHtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIHdpZHRoOiA3MHB4O1xyXG4gIH1cclxuLmNhcnQtbGVuZ3RoIHtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDE4cHg7XHJcbiAgICBsZWZ0OiAyNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgICBtaW4td2lkdGg6IDI1cHg7XHJcbiAgICB6LWluZGV4OiAxMDtcclxuICB9XHJcbiAgLmNhcnQtaWNvbiB7XHJcbiAgICBmb250LXNpemU6IDUwcHg7XHJcbiAgfVxyXG4uYmFja2dyb3VuZHtcclxuICAgIC8vIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvc2FtcGxlMS5qcGdcIik7XHJcbiAgICAvL2JhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIFxyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAvLyAgZmlsdGVyOiBibHVyKDhweCk7XHJcbiAgICAvLyAtd2Via2l0LWZpbHRlcjogYmx1cig4cHgpO1xyXG59XHJcbi5uZXctY2FyZHtcclxuICAgIC8vIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAvLyBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgd2lkdGg6IDE5MHB4O1xyXG4gICAgaGVpZ2h0OiA0NTBweDtcclxufVxyXG4uY2F0ZWdvcnktYmxvY2sge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6NTBweDtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxufVxyXG4ubGFuZGluZy1wYWdle1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgXHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDpyZXBlYXQ7XHJcbiAgICAvLyBoZWlnaHQ6MTIuNWVtO1xyXG4gICAgaGVpZ2h0OiAxMDAlOyBcclxuICAgIC8vIHdpZHRoOjYyLjVlbTtcclxuICAgIC8vIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgLy8gbWFyZ2luLXRvcDogOHB4O1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uY29udGVudHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvc2FtcGxlMS5qcGdcIik7XHJcbn1cclxuLnRleHQtc2xpZGUge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAyMHB4O1xyXG4gICAgcmlnaHQ6IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcclxuICB9XHJcbiAgLnNsaWRlc2t7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL3NhbXBsZTEuanBnXCIpO1xyXG4gIH1cclxuLmJnIHtcclxuICAgIC0tYmFja2dyb3VuZDogI2ZmZmYgdXJsKCcvYXNzZXRzL3AxMS5qcGcnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciAvIGNvbnRhaW47XHJcbn1cclxuLnNsYW50ZWQtY29ybmVyIHtcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgYmFja2dyb3VuZDp3aGl0ZXNtb2tlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uc2xhbnRlZC1jb3JuZXI6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwOyByaWdodDogMDtcclxuICAgIGJvcmRlci10b3A6IDgwcHggc29saWQgd2hpdGU7XHJcbiAgICBib3JkZXItbGVmdDogODBweCBzb2xpZCByZWQ7XHJcbiAgICB3aWR0aDogMDtcclxufVxyXG4uYWxpZ24tbWlkZGxlIHtcclxuICAgIHdpZHRoOiAzMDBweDtcclxufVxyXG5pb24tZm9vdGVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcclxufVxyXG4udGV4dHYge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VkZjVlMTtcclxuICAgIC8vIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7ICBcclxufVxyXG4udmlkZW8ge1xyXG4gICAgd2lkdGg6IDMxLjI1ZW07XHJcbiAgICBoZWlnaHQ6IDIxLjg3NWVtO1xyXG59XHJcbi5wcmltYWwge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGNvbG9yOiAjZmZmZjtcclxuICAgXHJcblxyXG5cclxufVxyXG4uYmFjay1jb2xvciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZjtcclxuICAgIC8vIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIC8vIHRvcDogMTkwcHg7XHJcbiAgICAvLyBsZWZ0OiAwcHg7XHJcbiAgICAvLyByaWdodDogMHB4O1xyXG4gICAgLy8gaGVpZ2h0OiA1MHB4O1xyXG4gICBcclxuXHJcbn1cclxuaW9uLWNvbnRlbnQge1xyXG4gICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDBweDsgXHJcbn1cclxuLnJlZGlyZWN0LWxvZ2luIHtcclxuICAgIHdpZHRoOiAxOC43NWVtOyBcclxuICAgIG1hcmdpbi1sZWZ0OmF1dG87IFxyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG59XHJcbi5jYXJkLXJlc2l6ZSB7XHJcbiAgICB3aWR0aDogOS4zNzVlbTtcclxuICAgIGhlaWdodDogOS4zNzVlbTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcbi5kaXNwbGF5LXByb2R1Y3Qge1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG4uc2xpZGUtY29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcbi5mb290ZXItc3R5bGluZ3tcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1mYW1pbHk6IE9wZW4gU2FucztcclxufVxyXG4vLyAuYmctaW1hZ2V7XHJcbi8vICAgICBmaWx0ZXI6IGJsdXIoOHB4KTtcclxuLy8gICAgIC13ZWJraXQtZmlsdGVyOiBibHVyKDhweCk7XHJcbi8vIH1cclxuICAgIC5jYXJkLWJhY2tncm91bmQtcGFnZSB7XHJcbiAgICAgICAgaW9uLWNhcmQge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyMS44NzVlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNhcmQtdGl0bGV7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgdG9wOjM2JTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyLjBlbTtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IE9wZW4gU2FucztcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZlxyXG4gICAgICAgIH1cclxuICAgICAgICAuY2FyZC1zdWJ0aXRsZXtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjBlbTtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB0b3A6IDUyJTtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogT3BlbiBTYW5zO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuJGNvbG9yczooXHJcbiAgICBkYW5nZXI6ICNlYzVhNWEsXHJcbiAgICBwcmltYXJ5OiBibHVlLFxyXG4gICAgZGFyazogd2hpdGVcclxuKVxyXG5cclxuIl19 */"

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
/* harmony import */ var _view_product_view_product_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../view-product/view-product.page */ "./src/app/view-product/view-product.page.ts");









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
        this.isMobileLayout = false;
        this.isWebLayout = false;
        this.slidesConfig = {
            autoplay: true,
            centeredSlides: true,
            speed: 5000,
            pager: true,
            slidesPerView: 1,
        };
    }
    HomePage.prototype.ngOnInit = function () {
        if (window.screen.width > 767) { // 768px portrait
            this.isWebLayout = true;
        }
        if (window.screen.width < 768) {
            this.isMobileLayout = true;
        }
        // window.onresize = () => this.isMobileLayout = window.innerWidth <= 500;
        // window.onresize = () => this.isWebLayout = window.innerWidth >= 772;
        this.presentLoadingWithOptions();
        this.reloadImages();
        //  this.checkAuth = this.authService.authenticationState.value;
        this.cartItemCount = this.cartService.getCartItemCount();
        this.cart = this.cartService.getCart();
        //  loadSpecialInfo() {
        //  this.authService.getSpecialData().subscribe(res => {
        //    this.data = res['msg'];
        //    this.user_id = res['id'];
        //  this.users = this.user_id;
        //  });
    };
    HomePage.prototype.openImage = function (img) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(img);
                        return [4 /*yield*/, this.modalCtrl.create({
                                component: _view_product_view_product_page__WEBPACK_IMPORTED_MODULE_8__["ViewProductPage"],
                                componentProps: {
                                    img: img,
                                }
                            })];
                    case 1:
                        modal = _a.sent();
                        modal.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.moveShop = function () {
        this.router.navigate(['/menu/media']);
    };
    HomePage.prototype.logout = function () {
        this.authService.logout();
    };
    HomePage.prototype.presentLoadingWithOptions = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            spinner: "crescent",
                            duration: 500,
                            message: 'LOADING...',
                            // translucent: true,
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
    HomePage.prototype.reloadImages = function () {
        var _this = this;
        this.cartService.getImages().subscribe(function (data) {
            _this.item = data;
            console.log("cheki ii kwanza", _this.item);
            _this.item.sort(function (a, b) { return new Date(b.created_at).getTime() - new Date(a.created_at).getTime(); });
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
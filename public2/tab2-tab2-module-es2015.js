(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab2-tab2-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/tab2.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/tab2.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <ion-header [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <ion-title>\r\n      Tab 2\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header> -->\r\n\r\n<ion-content [fullscreen]=\"true\" >\r\n  <ion-header collapse=\"condense\">\r\n    <ion-toolbar>\r\n      <ion-title size=\"large\">Communications</ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  <ion-grid>\r\n    <ion-row>\r\n      <img src=\"/assets/PreetiLogo.png\" style=\"height:140px; width: 140px; margin-left: 40%\" />\r\n      <!-- <h2 text center style=\"font-family: Open Sans;\">App Center</h2> -->\r\n    </ion-row>\r\n    <ion-row >\r\n      <ion-col class=\"cell-class\" size-sm=\"6\" size-md=\"6\" size-lg=\"6\" style=\"margin-top: 5%;\">\r\n        <ion-icon style=\"font-size: 50px; color: pink\" tappable name=\"chatbox-outline\"  routerLink=\"/tabs/tab1\"></ion-icon>\r\n        <ion-label style=\"font-family: Open Sans; color:#000; font-weight: bold\">Items List</ion-label>\r\n      </ion-col>\r\n      <ion-col class=\"cell-class\" size-sm=\"6\" size-md=\"6\" size-lg=\"6\" style=\"margin-top: 5%;\">\r\n        <ion-icon style=\"font-size: 50px;  color:blue\" tappable name=\"camera\" routerLink=\"/products-upload\"></ion-icon>\r\n        <ion-label style=\"font-family: Open Sans; color:#000; font-weight: bold\">Products Upload</ion-label>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col class=\"cell-class\" size-sm=\"6\" size-md=\"6\" size-lg=\"6\">\r\n        <ion-icon style=\"font-size: 50px; color: yellow\" tappable name=\"wallet-outline\"  routerLink=\"/tabs/tab3\"></ion-icon>\r\n        <ion-label style=\"font-family: Open Sans; color:#000; font-weight: bold\">All Orders</ion-label>\r\n      </ion-col>\r\n      <ion-col  class=\"cell-class\" size-sm=\"6\" size-md=\"6\" size-lg=\"6\">\r\n        <ion-icon style=\"font-size: 50px;  color:green\" tappable name=\"basket-outline\"  routerLink=\"/new-orders\"></ion-icon>\r\n        <ion-label  routerLink=\"/new-orders\" style=\"font-family: Open Sans; color:#000; font-weight: bold\">New Orders <ion-badge color=\"success\" >{{news}}</ion-badge></ion-label>\r\n      </ion-col>\r\n    </ion-row>\r\n    \r\n  </ion-grid>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/tab2/tab2.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.module.ts ***!
  \*************************************/
/*! exports provided: Tab2PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2PageModule", function() { return Tab2PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab2.page */ "./src/app/tab2/tab2.page.ts");
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../explore-container/explore-container.module */ "./src/app/explore-container/explore-container.module.ts");








let Tab2PageModule = class Tab2PageModule {
};
Tab2PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__["ExploreContainerComponentModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab2_page__WEBPACK_IMPORTED_MODULE_6__["Tab2Page"] }])
        ],
        declarations: [_tab2_page__WEBPACK_IMPORTED_MODULE_6__["Tab2Page"]]
    })
], Tab2PageModule);



/***/ }),

/***/ "./src/app/tab2/tab2.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content ion-toolbar {\n  --background: translucent;\n}\n\n.cell-class {\n  border-color: black;\n  margin-bottom: 10%;\n}\n\n.bg-image {\n  background-image: url(\"/assets/wall_back.jpg\");\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMi9DOlxcVXNlcnNcXEF0dGFpblxcZGVza3RvcFxccHJvamVjdHNcXHByZXRzYWwtYWRtaW5cXGFwcGFyZWwtZWNvbW1lcmNlLWFkbWluL3NyY1xcYXBwXFx0YWIyXFx0YWIyLnBhZ2Uuc2NzcyIsInNyYy9hcHAvdGFiMi90YWIyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxtQkFBQTtFQUdDLGtCQUFBO0FDQUg7O0FER0E7RUFDRSw4Q0FBQTtBQ0FGIiwiZmlsZSI6InNyYy9hcHAvdGFiMi90YWIyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IGlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc2x1Y2VudDtcbn1cbi5jZWxsLWNsYXNzIHtcbiAgYm9yZGVyLWNvbG9yOiBibGFjazsgXG4gIC8vIGJvcmRlci13aWR0aDogLjAxZW07IFxuICAvLyBib3JkZXItc3R5bGU6c29saWQ7IFxuICAgbWFyZ2luLWJvdHRvbSA6IDEwJTtcblxufVxuLmJnLWltYWdle1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL3dhbGxfYmFjay5qcGdcIik7XG59IiwiaW9uLWNvbnRlbnQgaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zbHVjZW50O1xufVxuXG4uY2VsbC1jbGFzcyB7XG4gIGJvcmRlci1jb2xvcjogYmxhY2s7XG4gIG1hcmdpbi1ib3R0b206IDEwJTtcbn1cblxuLmJnLWltYWdlIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy93YWxsX2JhY2suanBnXCIpO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/tab2/tab2.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab2/tab2.page.ts ***!
  \***********************************/
/*! exports provided: Tab2Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2Page", function() { return Tab2Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _products_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../products.service */ "./src/app/products.service.ts");



let Tab2Page = class Tab2Page {
    constructor(textProvider) {
        this.textProvider = textProvider;
        this.news = [];
        this.getOrdersCount();
    }
    getOrdersCount() {
        this.textProvider.getNewOrders().subscribe(res => {
            this.news = res;
            console.log("Count", this.news);
        });
    }
};
Tab2Page.ctorParameters = () => [
    { type: _products_service__WEBPACK_IMPORTED_MODULE_2__["ProductsService"] }
];
Tab2Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab2',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tab2.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/tab2.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tab2.page.scss */ "./src/app/tab2/tab2.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_products_service__WEBPACK_IMPORTED_MODULE_2__["ProductsService"]])
], Tab2Page);



/***/ })

}]);
//# sourceMappingURL=tab2-tab2-module-es2015.js.map
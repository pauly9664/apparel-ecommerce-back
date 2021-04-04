(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["suits-suits-module"],{

/***/ "./src/app/suits/suits.module.ts":
/*!***************************************!*\
  !*** ./src/app/suits/suits.module.ts ***!
  \***************************************/
/*! exports provided: SuitsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuitsPageModule", function() { return SuitsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _suits_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./suits.page */ "./src/app/suits/suits.page.ts");







var routes = [
    {
        path: '',
        component: _suits_page__WEBPACK_IMPORTED_MODULE_6__["SuitsPage"]
    }
];
var SuitsPageModule = /** @class */ (function () {
    function SuitsPageModule() {
    }
    SuitsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_suits_page__WEBPACK_IMPORTED_MODULE_6__["SuitsPage"]]
        })
    ], SuitsPageModule);
    return SuitsPageModule;
}());



/***/ }),

/***/ "./src/app/suits/suits.page.html":
/*!***************************************!*\
  !*** ./src/app/suits/suits.page.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button defaultHref=\"/\"></ion-back-button>\r\n          </ion-buttons>\r\n      <ion-title text-center>\r\n        Shop\r\n      </ion-title>\r\n      <ion-buttons slot=\"end\">\r\n        <ion-button (click)=\"openCart()\">\r\n          <ion-badge *ngIf=\"cart.length > 0\">{{ cart.length }}</ion-badge>\r\n          <ion-icon name=\"cart\" slot=\"icon-only\"></ion-icon>\r\n        </ion-button>\r\n      </ion-buttons>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  \r\n  <ion-content>\r\n    <div *ngFor=\"let cat of suits\" class=\"category-block\">\r\n  \r\n      <ion-row no-padding class=\"category-banner\">\r\n        <ion-col text-left button tappable (click)=\"cat.expanded =!cat.expanded\" align-self-center>\r\n          {{cat.category }}\r\n        </ion-col>\r\n      </ion-row>\r\n  \r\n    <ion-slides [options]=\"sliderConfig\">\r\n      <ion-slide *ngFor=\"let product of cat.products\">\r\n        <div *ngIf=\"cat.expanded\">\r\n      <ion-card class=\"new-card\">\r\n        <ion-card-header>\r\n          <ion-card-title>\r\n            {{product.name }} - ${{ product.price }}\r\n          </ion-card-title>\r\n          <ion-card-content>\r\n          <div class=\"display-items\"> <img [src]  = 'product.url' /></div>\r\n            <ion-button expand=\"full\" (click)=\"addToCart(product)\">+ item in Cart</ion-button>\r\n          </ion-card-content>\r\n        </ion-card-header>\r\n      </ion-card>\r\n    </div>\r\n    </ion-slide>\r\n    </ion-slides>\r\n    </div>\r\n  </ion-content>"

/***/ }),

/***/ "./src/app/suits/suits.page.scss":
/*!***************************************!*\
  !*** ./src/app/suits/suits.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-badge {\n  color: #ffffff;\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  border-radius: 100%; }\n\n.category-block {\n  margin-bottom: 4px; }\n\n.category-banner {\n  border-left: 8px solid var(--ion-color-secondary);\n  background: var(--ion-color-light);\n  height: 40px;\n  padding: 10px;\n  font-weight: 500; }\n\n.new-card {\n  display: flex;\n  flex-direction: column;\n  width: 500px;\n  height: 500px; }\n\n.display-items {\n  background-size: cover;\n  height: 350px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3VpdHMvQzpcXFVzZXJzXFxBdHRhaW5cXGRlc2t0b3BcXHByb2plY3RzXFxhcHBhcmVsLWVjb21tZXJjZS9zcmNcXGFwcFxcc3VpdHNcXHN1aXRzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFVBQVU7RUFDVixtQkFBbUIsRUFBQTs7QUFFdkI7RUFDSSxrQkFBa0IsRUFBQTs7QUFFdEI7RUFDSSxpREFBaUQ7RUFDakQsa0NBQWtDO0VBQ2xDLFlBQVk7RUFDWixhQUFhO0VBQ2IsZ0JBQWdCLEVBQUE7O0FBRXBCO0VBQ0ksYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osYUFBYSxFQUFBOztBQUVqQjtFQUNJLHNCQUFzQjtFQUN0QixhQUFhLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zdWl0cy9zdWl0cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tYmFkZ2Uge1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDBweDtcclxuICAgIHJpZ2h0OiAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG59XHJcbi5jYXRlZ29yeS1ibG9jayB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0cHg7XHJcbn1cclxuLmNhdGVnb3J5LWJhbm5lciB7XHJcbiAgICBib3JkZXItbGVmdDogOHB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcbi5uZXctY2FyZCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHdpZHRoOiA1MDBweDtcclxuICAgIGhlaWdodDogNTAwcHg7XHJcbn1cclxuLmRpc3BsYXktaXRlbXMge1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGhlaWdodDogMzUwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/suits/suits.page.ts":
/*!*************************************!*\
  !*** ./src/app/suits/suits.page.ts ***!
  \*************************************/
/*! exports provided: SuitsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuitsPage", function() { return SuitsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _suits_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../suits-service.service */ "./src/app/suits-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var SuitsPage = /** @class */ (function () {
    function SuitsPage(suitsService, router) {
        this.suitsService = suitsService;
        this.router = router;
        this.cart = [];
        this.suits = [];
        this.sliderConfig = {
            spaceBetween: 10,
            centeredSlides: true,
            slidesPerView: 1.8
        };
    }
    SuitsPage.prototype.ngOnInit = function () {
        this.cart = this.suitsService.getCart();
        this.suits = this.suitsService.getProducts();
    };
    SuitsPage.prototype.addToCart = function (product) {
        this.suitsService.addProduct(product);
    };
    SuitsPage.prototype.openCart = function () {
        this.router.navigate(['shoppers-cart']);
    };
    SuitsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-suits',
            template: __webpack_require__(/*! ./suits.page.html */ "./src/app/suits/suits.page.html"),
            styles: [__webpack_require__(/*! ./suits.page.scss */ "./src/app/suits/suits.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_suits_service_service__WEBPACK_IMPORTED_MODULE_2__["SuitsServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], SuitsPage);
    return SuitsPage;
}());



/***/ })

}]);
//# sourceMappingURL=suits-suits-module.js.map
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["other-items-other-items-module"],{

/***/ "./src/app/other-items/other-items.module.ts":
/*!***************************************************!*\
  !*** ./src/app/other-items/other-items.module.ts ***!
  \***************************************************/
/*! exports provided: OtherItemsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtherItemsPageModule", function() { return OtherItemsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _other_items_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./other-items.page */ "./src/app/other-items/other-items.page.ts");







var routes = [
    {
        path: '',
        component: _other_items_page__WEBPACK_IMPORTED_MODULE_6__["OtherItemsPage"]
    }
];
var OtherItemsPageModule = /** @class */ (function () {
    function OtherItemsPageModule() {
    }
    OtherItemsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_other_items_page__WEBPACK_IMPORTED_MODULE_6__["OtherItemsPage"]]
        })
    ], OtherItemsPageModule);
    return OtherItemsPageModule;
}());



/***/ }),

/***/ "./src/app/other-items/other-items.page.html":
/*!***************************************************!*\
  !*** ./src/app/other-items/other-items.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button defaultHref=\"/\"></ion-back-button>\r\n          </ion-buttons>\r\n      <ion-title text-center>\r\n        Shop\r\n      </ion-title>\r\n      <ion-buttons slot=\"end\">\r\n        <ion-button (click)=\"openCart()\">\r\n          <ion-badge *ngIf=\"cart.length > 0\">{{ cart.length }}</ion-badge>\r\n          <ion-icon name=\"cart\" slot=\"icon-only\"></ion-icon>\r\n        </ion-button>\r\n      </ion-buttons>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  \r\n  <ion-content>\r\n    <div *ngFor=\"let cat of other\" class=\"category-block\">\r\n  \r\n      <ion-row no-padding class=\"category-banner\">\r\n        <ion-col text-left button tappable (click)=\"cat.expanded =!cat.expanded\" align-self-center>\r\n          {{cat.category }}\r\n        </ion-col>\r\n      </ion-row>\r\n  \r\n    <ion-slides [options]=\"sliderConfig\">\r\n      <ion-slide *ngFor=\"let product of cat.products\">\r\n        <div *ngIf=\"cat.expanded\">\r\n      <ion-card class=\"new-card\">\r\n        <ion-card-header>\r\n          <ion-card-title>\r\n            {{product.name }} - ${{ product.price }}\r\n          </ion-card-title>\r\n          <ion-card-content>\r\n          <div class=\"display-items\"> <img [src]  = 'product.url' /></div>\r\n            <ion-button expand=\"full\" (click)=\"addToCart(product)\">+ item in Cart</ion-button>\r\n          </ion-card-content>\r\n        </ion-card-header>\r\n      </ion-card>\r\n    </div>\r\n    </ion-slide>\r\n    </ion-slides>\r\n    </div>\r\n  </ion-content>"

/***/ }),

/***/ "./src/app/other-items/other-items.page.scss":
/*!***************************************************!*\
  !*** ./src/app/other-items/other-items.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-badge {\n  color: #ffffff;\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  border-radius: 100%; }\n\n.category-block {\n  margin-bottom: 4px; }\n\n.category-banner {\n  border-left: 8px solid var(--ion-color-secondary);\n  background: var(--ion-color-light);\n  height: 40px;\n  padding: 10px;\n  font-weight: 500; }\n\n.new-card {\n  display: flex;\n  flex-direction: column;\n  width: 500px;\n  height: 500px; }\n\n.display-items {\n  background-size: cover;\n  height: 350px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3RoZXItaXRlbXMvQzpcXFVzZXJzXFxBdHRhaW5cXGRlc2t0b3BcXHByb2plY3RzXFxhcFxcYXBwYXJlbC1lY29tbWVyY2Uvc3JjXFxhcHBcXG90aGVyLWl0ZW1zXFxvdGhlci1pdGVtcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixVQUFVO0VBQ1YsbUJBQW1CLEVBQUE7O0FBRXZCO0VBQ0ksa0JBQWtCLEVBQUE7O0FBRXRCO0VBQ0ksaURBQWlEO0VBQ2pELGtDQUFrQztFQUNsQyxZQUFZO0VBQ1osYUFBYTtFQUNiLGdCQUFnQixFQUFBOztBQUVwQjtFQUNJLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGFBQWEsRUFBQTs7QUFFakI7RUFDSSxzQkFBc0I7RUFDdEIsYUFBYSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvb3RoZXItaXRlbXMvb3RoZXItaXRlbXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWJhZGdlIHtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwcHg7XHJcbiAgICByaWdodDogMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxufVxyXG4uY2F0ZWdvcnktYmxvY2sge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNHB4O1xyXG59XHJcbi5jYXRlZ29yeS1iYW5uZXIge1xyXG4gICAgYm9yZGVyLWxlZnQ6IDhweCBzb2xpZCB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG4ubmV3LWNhcmQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB3aWR0aDogNTAwcHg7XHJcbiAgICBoZWlnaHQ6IDUwMHB4O1xyXG59XHJcbi5kaXNwbGF5LWl0ZW1zIHtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBoZWlnaHQ6IDM1MHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/other-items/other-items.page.ts":
/*!*************************************************!*\
  !*** ./src/app/other-items/other-items.page.ts ***!
  \*************************************************/
/*! exports provided: OtherItemsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtherItemsPage", function() { return OtherItemsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _etc_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../etc-service.service */ "./src/app/etc-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var OtherItemsPage = /** @class */ (function () {
    function OtherItemsPage(etcService, router) {
        this.etcService = etcService;
        this.router = router;
        this.cart = [];
        this.other = [];
        this.sliderConfig = {
            spaceBetween: 10,
            centeredSlides: true,
            slidesPerView: 1.8
        };
    }
    OtherItemsPage.prototype.ngOnInit = function () {
        this.cart = this.etcService.getCart();
        this.other = this.etcService.getProducts();
    };
    OtherItemsPage.prototype.addToCart = function (product) {
        this.etcService.addProduct(product);
    };
    OtherItemsPage.prototype.openCart = function () {
        this.router.navigate(['shoppers-cart']);
    };
    OtherItemsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-other-items',
            template: __webpack_require__(/*! ./other-items.page.html */ "./src/app/other-items/other-items.page.html"),
            styles: [__webpack_require__(/*! ./other-items.page.scss */ "./src/app/other-items/other-items.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_etc_service_service__WEBPACK_IMPORTED_MODULE_2__["EtcServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], OtherItemsPage);
    return OtherItemsPage;
}());



/***/ })

}]);
//# sourceMappingURL=other-items-other-items-module.js.map
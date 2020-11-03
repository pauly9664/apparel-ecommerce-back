(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["preview-media-preview-media-module"],{

/***/ "./src/app/preview-media/preview-media.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/preview-media/preview-media.module.ts ***!
  \*******************************************************/
/*! exports provided: PreviewMediaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreviewMediaPageModule", function() { return PreviewMediaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _preview_media_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./preview-media.page */ "./src/app/preview-media/preview-media.page.ts");







var routes = [
    {
        path: '',
        component: _preview_media_page__WEBPACK_IMPORTED_MODULE_6__["PreviewMediaPage"]
    }
];
var PreviewMediaPageModule = /** @class */ (function () {
    function PreviewMediaPageModule() {
    }
    PreviewMediaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_preview_media_page__WEBPACK_IMPORTED_MODULE_6__["PreviewMediaPage"]]
        })
    ], PreviewMediaPageModule);
    return PreviewMediaPageModule;
}());



/***/ }),

/***/ "./src/app/preview-media/preview-media.page.html":
/*!*******************************************************!*\
  !*** ./src/app/preview-media/preview-media.page.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button (click)=\"closePopover()\" defaultHref=\"/\"></ion-back-button>\r\n  </ion-buttons>\r\n    <!-- <ion-title>Order Deta</ion-title> -->\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n  <div class=\"back-im\">\r\n  <ion-card style=\"margin-top: 6%;\">\r\n    <ion-card-header style=\"margin-left: 40%;background-color: transparent;\" >\r\n      <span style=\"font-weight: bold; font-size: medium; font-family: Open Sans; color: #fff;\">Order Details</span> \r\n    </ion-card-header>\r\n    <ion-card-content>\r\n      <ion-button color=\"danger\" style=\"margin-left: 40%;\" (click)=\"getDetails()\" (click)=\"presentLoadingWithOptions()\" >View Details</ion-button>\r\n      <div *ngIf=\"orderDetail;\" style=\"background-color: transparent; font-weight: bold;\" >  \r\n    \r\n      <p class=\"details-styles\"><span class=\"detailsStyle\">Amount</span>: KES {{amount}}</p><br>    \r\n      <p class=\"details-styles\"><span class=\"detailsStyle\">Payment Option</span>: {{payment}}</p><br> \r\n      <p class=\"details-styles\"><span class=\"detailsStyle\">Delivery Option</span>:  {{delivery}}</p><br>\r\n      <p class=\"details-styles\"><span class=\"detailsStyle\">Order Date</span>: {{dday}}</p>\r\n  </div>\r\n\r\n    </ion-card-content> \r\n  </ion-card>\r\n</div>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/preview-media/preview-media.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/preview-media/preview-media.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".back-im {\n  background-image: url(\"/assets/wood.jpg\"); }\n\n.detailsStyle {\n  font-weight: bold;\n  font-family: Open Sans;\n  font-size: medium;\n  color: #fff; }\n\n.details-styles {\n  color: #fff; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJldmlldy1tZWRpYS9DOlxcVXNlcnNcXEF0dGFpblxcRGVza3RvcFxcUHJvamVjdHNcXGFwXFxhcHBhcmVsLWVjb21tZXJjZS9zcmNcXGFwcFxccHJldmlldy1tZWRpYVxccHJldmlldy1tZWRpYS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5Q0FBeUMsRUFBQTs7QUFFN0M7RUFDSSxpQkFBaUI7RUFDakIsc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQixXQUNKLEVBQUE7O0FBQ0E7RUFDSSxXQUFXLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wcmV2aWV3LW1lZGlhL3ByZXZpZXctbWVkaWEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2staW17XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL3dvb2QuanBnXCIpO1xyXG59XHJcbi5kZXRhaWxzU3R5bGV7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnM7XHJcbiAgICBmb250LXNpemU6IG1lZGl1bTtcclxuICAgIGNvbG9yOiAjZmZmXHJcbn1cclxuLmRldGFpbHMtc3R5bGVze1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/preview-media/preview-media.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/preview-media/preview-media.page.ts ***!
  \*****************************************************/
/*! exports provided: PreviewMediaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreviewMediaPage", function() { return PreviewMediaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





var PreviewMediaPage = /** @class */ (function () {
    function PreviewMediaPage(activatedRoute, orders, loadingController) {
        this.activatedRoute = activatedRoute;
        this.orders = orders;
        this.loadingController = loadingController;
        this.payment = [];
        this.delivery = [];
        this.dday = [];
        this.amount = [];
    }
    PreviewMediaPage.prototype.ngOnInit = function () {
        this.order = this.activatedRoute.snapshot.paramMap.get('id');
        this.getAllOrders();
    };
    PreviewMediaPage.prototype.getAllOrders = function () {
        var _this = this;
        this.orders.getSalesActivity().subscribe(function (res) {
            _this.orderDetails = res;
            console.log("These are all orders", _this.orderDetails);
        });
    };
    PreviewMediaPage.prototype.getDetails = function () {
        var _this = this;
        this.orderDetail = this.orderDetails.filter(function (orders) {
            return orders._id == _this.order;
            // console.log("This is the obj", orders);
        });
        // this.router.navigate(['/orderview/', this.order]);
        this.orderDetail.forEach((function (order) {
            _this.payment.push(order.payment_status);
            _this.delivery.push(order.delivery_status);
            _this.amount.push(order.amount);
            _this.dday.push(order.buying_date);
            console.log("Returned payment", _this.payment);
        }));
    };
    PreviewMediaPage.prototype.presentLoadingWithOptions = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            spinner: "circles",
                            duration: 500,
                            message: 'Fetching...',
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
    PreviewMediaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-preview-media',
            template: __webpack_require__(/*! ./preview-media.page.html */ "./src/app/preview-media/preview-media.page.html"),
            styles: [__webpack_require__(/*! ./preview-media.page.scss */ "./src/app/preview-media/preview-media.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]])
    ], PreviewMediaPage);
    return PreviewMediaPage;
}());



/***/ })

}]);
//# sourceMappingURL=preview-media-preview-media-module.js.map
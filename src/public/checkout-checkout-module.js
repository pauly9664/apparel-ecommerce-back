(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["checkout-checkout-module"],{

/***/ "./src/app/checkout/checkout.module.ts":
/*!*********************************************!*\
  !*** ./src/app/checkout/checkout.module.ts ***!
  \*********************************************/
/*! exports provided: CheckoutPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutPageModule", function() { return CheckoutPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _checkout_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./checkout.page */ "./src/app/checkout/checkout.page.ts");







var routes = [
    {
        path: '',
        component: _checkout_page__WEBPACK_IMPORTED_MODULE_6__["CheckoutPage"]
    }
];
var CheckoutPageModule = /** @class */ (function () {
    function CheckoutPageModule() {
    }
    CheckoutPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_checkout_page__WEBPACK_IMPORTED_MODULE_6__["CheckoutPage"]]
        })
    ], CheckoutPageModule);
    return CheckoutPageModule;
}());



/***/ }),

/***/ "./src/app/checkout/checkout.page.html":
/*!*********************************************!*\
  !*** ./src/app/checkout/checkout.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"dark\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button (click)=\"closePopover()\" defaultHref=\"/\"></ion-back-button>\r\n  </ion-buttons>\r\n    <!-- <ion-title>Checkout</ion-title> -->\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding>\r\n  <ion-card>\r\n    <ion-card-header>\r\n    <ion-card-subtitle text-center> Info</ion-card-subtitle>\r\n      <ion-card-title text-center style=\"font-family: Impact\">Delivery Details</ion-card-title>\r\n    </ion-card-header>\r\n    <ion-card-content>\r\n     <!-- <div class=\"details-button\"> <ion-button text-center style=\"margin-left: auto; margin-right: auto; width: 300px\" fill=\"outline\" size=\"small\" (click)=\"loadSpecialInfo()\">Customer Details</ion-button></div> -->\r\n     <p text-center>Customer Details</p>\r\n     <ion-avatar>\r\n      <img width=\"100%\" height=\"100%\" src=\"/assets/oshoe.jpg\" /><br>\r\n    </ion-avatar>\r\n     <p text-center> {{ data }}<br></p>\r\n    </ion-card-content>\r\n  </ion-card>\r\n  <ion-card>\r\n       <ion-card-header>\r\n      <div><ion-card-title text-center><ion-text color=\"dark\" style=\"font-family: Impact\">Delivery Method<br></ion-text><ion-icon name=\"car\" color=\"danger\"></ion-icon></ion-card-title></div>\r\n      <ion-card-content>\r\n        <!-- <ion-list>\r\n          <ion-item>\r\n            <ion-label>Pick-up station(CBD)</ion-label>\r\n            <ion-checkbox slot=\"start\"></ion-checkbox>\r\n          </ion-item>\r\n          <ion-item>\r\n            <ion-label>Delivery to office/home</ion-label>\r\n             <ion-checkbox slot=\"start\"></ion-checkbox>\r\n          </ion-item>\r\n        </ion-list> --> \r\n        <!-- <ion-list>\r\n          <ion-radio-group>\r\n          <ion-item>\r\n            <ion-label>Set pick-up station around CBD</ion-label>\r\n          <ion-radio slot=\"start\" value=\"Set pick-up station around CBD\"></ion-radio>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label>Deliver to station e.g office</ion-label>\r\n          <ion-radio slot=\"start\" value=\"Delivery to Station e.g office\"></ion-radio>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label>Set pick-up date</ion-label>\r\n          <ion-radio slot=\"start\" value=\"Set pick-up date\"></ion-radio>\r\n        </ion-item>       \r\n      </ion-radio-group>\r\n        </ion-list> -->\r\n        <article>\r\n        <!-- <select (change)=\"selectChangeHandler($event)\">\r\n          <option value=\"Monday\">Monday</option>\r\n          <option value=\"Tuesday\">Tuesday</option>\r\n          <option value=\"Wednesday\">Wednesday</option>\r\n          <option value=\"Thursday\">Thursday</option>\r\n          <option value=\"Friday\">Friday</option>\r\n      </select>\r\n      <p>{{selectedDay}}</p> -->\r\n      <div *ngFor=\"let options of delivery\">\r\n        <input\r\n        type=\"radio\"\r\n        name=\"deliveryMethod\"\r\n        value=\"{{options}}\"\r\n        (change)=\"selectChangeHandler($event)\">\r\n        <i>{{options}}</i> \r\n      </div>\r\n      <p style=\"font-weight:bolder\">Option selected: {{selectedDelivery}}</p>\r\n    </article>\r\n      </ion-card-content>\r\n    </ion-card-header>\r\n  </ion-card>\r\n  <ion-card>\r\n    <ion-card-header>\r\n      <div><ion-card-title text-center><ion-text color=\"dark\" style=\"font-family: Impact\">Payment Method<br></ion-text><ion-icon name=\"cash\" color=\"success\"></ion-icon></ion-card-title></div>\r\n      <ion-card-content>\r\n\r\n        <div *ngFor=\"let option of payment\">\r\n          <input\r\n          type=\"radio\"\r\n          name=\"paymentMethod\"\r\n          value=\"{{option}}\"\r\n          (change)=\"radioChangeHandler($event)\">\r\n          <i>{{option}}</i> \r\n        </div>\r\n            <span class=\"OptionPayment\"><p style=\"font-weight:bolder\"> Option selected: {{selectedPayment}}</p></span>\r\n      </ion-card-content>\r\n    </ion-card-header>\r\n  </ion-card>\r\n  <ion-button fill=\"outline\"(click)=\"openPopover($event)\">Continue</ion-button>\r\n  <ion-button routerLink= \"/menu/home\" fill=\"outline\">Back Home</ion-button>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/checkout/checkout.page.scss":
/*!*********************************************!*\
  !*** ./src/app/checkout/checkout.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".details-button {\n  width: 300px;\n  margin-left: auto;\n  margin-right: auto; }\n\n.banner1 {\n  background-color: goldenrod; }\n\n.OptionPayment {\n  margin-left: auto;\n  margin-right: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hlY2tvdXQvQzpcXFVzZXJzXFxBdHRhaW5cXERlc2t0b3BcXFByb2plY3RzXFxhcFxcYXBwYXJlbC1lY29tbWVyY2Uvc3JjXFxhcHBcXGNoZWNrb3V0XFxjaGVja291dC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGtCQUFrQixFQUFBOztBQUV0QjtFQUNJLDJCQUEyQixFQUFBOztBQUUvQjtFQUNJLGlCQUFpQjtFQUNqQixrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NoZWNrb3V0L2NoZWNrb3V0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kZXRhaWxzLWJ1dHRvbiB7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxufVxyXG4uYmFubmVyMXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGdvbGRlbnJvZDsgXHJcbn1cclxuLk9wdGlvblBheW1lbnR7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bzsgXHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/checkout/checkout.page.ts":
/*!*******************************************!*\
  !*** ./src/app/checkout/checkout.page.ts ***!
  \*******************************************/
/*! exports provided: CheckoutPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutPage", function() { return CheckoutPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _shoppers_cart_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shoppers-cart.service */ "./src/app/shoppers-cart.service.ts");
/* harmony import */ var _confirmation_popover_confirmation_popover_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../confirmation-popover/confirmation-popover.page */ "./src/app/confirmation-popover/confirmation-popover.page.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");








var CheckoutPage = /** @class */ (function () {
    function CheckoutPage(authService, storage, activatedRoute, router, authenticatedUser, modalController, cartserver, popoverController, nav) {
        this.authService = authService;
        this.storage = storage;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.authenticatedUser = authenticatedUser;
        this.modalController = modalController;
        this.cartserver = cartserver;
        this.popoverController = popoverController;
        this.nav = nav;
        // value = 2;
        this.loggedInUser = '';
        this.data = '';
        this.overallCost = '';
        this.selectedDelivery = '';
        this.delivery = [
            'Set pick-up station around CBD',
            'Deliver to station e.g office',
            'Set pick-up date'
        ];
        this.selectedPayment = '';
        this.payment = [
            'Lipa na Mpesa Online',
            'MPESA on Delivery',
            'Cash on Delivery'
        ];
    }
    CheckoutPage.prototype.selectChangeHandler = function (event) {
        //update the ui
        this.selectedDelivery = event.target.value;
    };
    CheckoutPage.prototype.radioChangeHandler = function (event) {
        this.selectedPayment = event.target.value;
    };
    CheckoutPage.prototype.ngOnInit = function () {
        var _this = this;
        // this.authenticatedUser.authenticationState.subscribe(state => {
        //   if(state) {
        //     this.router.navigate(['menu/checkout']);
        //   } else{
        //     this.router.navigate(['menu/login']);
        //   }   
        // })
        //this.totalCost = this.navParams.get('total_id');
        this.overallCost = this.activatedRoute.snapshot.paramMap.get('totals');
        //  loadSpecialInfo() {
        this.authService.getSpecialData().subscribe(function (res) {
            _this.data = res['name'];
            _this.loggedInUser = res['id'];
            //  return res;
            //console.log(this.data);
        });
    };
    // console.log(this.overallCost);
    CheckoutPage.prototype.openModal = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _confirmation_popover_confirmation_popover_page__WEBPACK_IMPORTED_MODULE_6__["ConfirmationPopoverPage"],
                            componentProps: {
                                custom_id: this.selectedDelivery
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
    CheckoutPage.prototype.openPopover = function (ev) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var popover;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popoverController.create({
                            component: _confirmation_popover_confirmation_popover_page__WEBPACK_IMPORTED_MODULE_6__["ConfirmationPopoverPage"],
                            componentProps: {
                                delivery_id: this.selectedDelivery,
                                payment_id: this.selectedPayment,
                                total_id: this.overallCost,
                                user_id: this.loggedInUser
                            }
                        })];
                    case 1:
                        popover = _a.sent();
                        popover.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    CheckoutPage.prototype.loadSpecialInfo = function () {
        var _this = this;
        this.authService.getSpecialData().subscribe(function (res) {
            _this.data = res['name'];
            return res;
            //console.log(this.data);
        });
    };
    CheckoutPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-checkout',
            template: __webpack_require__(/*! ./checkout.page.html */ "./src/app/checkout/checkout.page.html"),
            styles: [__webpack_require__(/*! ./checkout.page.scss */ "./src/app/checkout/checkout.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"], _shoppers_cart_service__WEBPACK_IMPORTED_MODULE_5__["ShoppersCartService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]])
    ], CheckoutPage);
    return CheckoutPage;
}());



/***/ })

}]);
//# sourceMappingURL=checkout-checkout-module.js.map
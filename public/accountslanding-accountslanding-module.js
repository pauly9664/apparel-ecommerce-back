(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["accountslanding-accountslanding-module"],{

/***/ "./src/app/accountslanding/accountslanding.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/accountslanding/accountslanding.module.ts ***!
  \***********************************************************/
/*! exports provided: AccountslandingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountslandingPageModule", function() { return AccountslandingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _accountslanding_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./accountslanding.page */ "./src/app/accountslanding/accountslanding.page.ts");







var routes = [
    {
        path: '',
        component: _accountslanding_page__WEBPACK_IMPORTED_MODULE_6__["AccountslandingPage"]
    }
];
var AccountslandingPageModule = /** @class */ (function () {
    function AccountslandingPageModule() {
    }
    AccountslandingPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_accountslanding_page__WEBPACK_IMPORTED_MODULE_6__["AccountslandingPage"]]
        })
    ], AccountslandingPageModule);
    return AccountslandingPageModule;
}());



/***/ }),

/***/ "./src/app/accountslanding/accountslanding.page.html":
/*!***********************************************************!*\
  !*** ./src/app/accountslanding/accountslanding.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-grid fixed>\r\n    <ion-row>\r\n      <ion-col size-sm=\"12\" size-md=\"12\">\r\n        \r\n        <ion-card>\r\n          <div class=\"back-im\">\r\n          <ion-card-header style=\"font-weight: bold;color:#000\">\r\n            <ion-icon name=\"apps\"></ion-icon> Account | Details\r\n          </ion-card-header>\r\n          <ion-card-content>\r\n            <ion-item  lines=\"none\" style=\"margin-left: auto; margin-right: auto;\">\r\n            <p><span class=\"account-details\">Name</span>: {{name}}<br></p>\r\n            </ion-item>\r\n            <ion-item  lines=\"none\">\r\n            <p> <span class=\"account-details\">Cell</span>: {{number}}<br></p>\r\n          </ion-item>\r\n          <ion-item lines=\"none\">\r\n           <p><span class=\"account-details\">Email</span> : {{email}}</p>\r\n          </ion-item>\r\n          </ion-card-content>\r\n        </div>\r\n        </ion-card>\r\n      \r\n      </ion-col>\r\n      <!-- <ion-col size-sm=\"6\" size-md=\"6\">\r\n        <ion-card>\r\n          <ion-card-header style=\"color: #fff;background-color: grey\">\r\n            <ion-icon name=\"document\"></ion-icon> Orders history\r\n          </ion-card-header>\r\n          <ion-card-content>\r\n            <ion-item lines=\"none\" *ngFor=\"let account of parsedAccount \" style=\"font-weight: bold\"> {{account.buying_date | date: 'short' }}<ion-button\r\n                fill=\"outline\" slot=\"end\" size=\"small\">\r\n                <ion-icon name=\"eye\" slot=\"start\"></ion-icon>VIEW\r\n              </ion-button>\r\n            </ion-item>\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </ion-col> -->\r\n    </ion-row>\r\n    <ion-row>\r\n      <!-- <ion-col size-sm=\"6\" size-md=\"6\">\r\n        <ion-card>\r\n\r\n          <ion-card-header style=\"color: #fff; background-color: grey\">\r\n            <ion-icon name=\"contact\"></ion-icon> Delivery Updates\r\n          </ion-card-header>\r\n          <ion-card-content>\r\n          </ion-card-content>\r\n        </ion-card>\r\n          </ion-col> -->\r\n      <!-- <ion-col size-sm=\"6\" size-md=\"6\">\r\n        <ion-card>\r\n          <ion-card-header style=\"color: #000;font-weight: bold;\">\r\n            <ion-icon name=\"basket\"></ion-icon> Bookings | Saved Items\r\n          </ion-card-header>\r\n          <ion-card-content>\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </ion-col> -->\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n<ion-footer>\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col>\r\n        <h3 class=\"footer-styling\"><ion-icon name=\"navigate\"></ion-icon>OUR LOCATION</h3>\r\n        <p class=\"footer-styling\"> Moktar Daddar Street</p>\r\n      </ion-col>\r\n      <ion-col>\r\n        <h3 class=\"footer-styling\"><ion-icon name=\"time\"></ion-icon>WORKING HOURS</h3>\r\n        <p class=\"footer-styling\"><span>Mon-Sat:</span> Open from 8:30AM - 7:00PM</p><br>\r\n      </ion-col>\r\n      <ion-col>\r\n        <h3 class=\"footer-styling\"><ion-icon name=\"call\"></ion-icon>CONTACT US</h3>\r\n        <p class=\"footer-styling\"><ion-icon name=\"logo-whatsapp\"></ion-icon> +254721397580</p>\r\n        <p class=\"footer-styling\">preetifashions90@gmail.com</p>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-footer>"

/***/ }),

/***/ "./src/app/accountslanding/accountslanding.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/accountslanding/accountslanding.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".account-details {\n  font-weight: bold; }\n\nion-item {\n  font-family: Open Sans; }\n\n.back-im {\n  background-image: url(\"/assets/wall_back.jpg\"); }\n\n.footer-styling {\n  color: #fff;\n  font-family: Open Sans; }\n\nion-footer {\n  background-color: #000; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNjb3VudHNsYW5kaW5nL0M6XFxVc2Vyc1xcQXR0YWluXFxkZXNrdG9wXFxwcm9qZWN0c1xcYXBwYXJlbC1lY29tbWVyY2Uvc3JjXFxhcHBcXGFjY291bnRzbGFuZGluZ1xcYWNjb3VudHNsYW5kaW5nLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFpQixFQUFBOztBQUVyQjtFQUNJLHNCQUFzQixFQUFBOztBQUUxQjtFQUNJLDhDQUE4QyxFQUFBOztBQUVsRDtFQUNJLFdBQVc7RUFDWCxzQkFBc0IsRUFBQTs7QUFFMUI7RUFDSSxzQkFBc0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2FjY291bnRzbGFuZGluZy9hY2NvdW50c2xhbmRpbmcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFjY291bnQtZGV0YWlsc3tcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbmlvbi1pdGVte1xyXG4gICAgZm9udC1mYW1pbHk6IE9wZW4gU2FucztcclxufVxyXG4uYmFjay1pbXtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvd2FsbF9iYWNrLmpwZ1wiKTtcclxufVxyXG4uZm9vdGVyLXN0eWxpbmd7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnM7XHJcbn1cclxuaW9uLWZvb3RlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/accountslanding/accountslanding.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/accountslanding/accountslanding.page.ts ***!
  \*********************************************************/
/*! exports provided: AccountslandingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountslandingPage", function() { return AccountslandingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");



var AccountslandingPage = /** @class */ (function () {
    function AccountslandingPage(authenticator) {
        this.authenticator = authenticator;
        this.name = '';
        this.number = '';
        this.email = undefined;
        this.accountsbyid = undefined;
        this.parsedAccount = undefined;
    }
    AccountslandingPage.prototype.ngOnInit = function () {
        var _this = this;
        // this.authenticator.getSalesActivities().subscribe(res => {
        //   // this.accountsbyid = JSON.stringify(res['accounts']);
        //   // let parsedData = JSON.parse(this.accountsbyid);
        //   // this.parsedAccount = parsedData;
        //   // this.accountsbyid[0].open = true;
        //   // let accountsarray = Object.keys(this.accountsbyid[0]);
        //   // console.log(this.accountsbyid[0]);
        // })
        this.authenticator.getSpecialData().subscribe(function (res) {
            _this.name = res['name'];
            _this.number = res['number'];
            _this.email = res['email'];
        });
    };
    AccountslandingPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-accountslanding',
            template: __webpack_require__(/*! ./accountslanding.page.html */ "./src/app/accountslanding/accountslanding.page.html"),
            styles: [__webpack_require__(/*! ./accountslanding.page.scss */ "./src/app/accountslanding/accountslanding.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], AccountslandingPage);
    return AccountslandingPage;
}());



/***/ })

}]);
//# sourceMappingURL=accountslanding-accountslanding-module.js.map
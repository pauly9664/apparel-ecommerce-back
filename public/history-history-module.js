(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["history-history-module"],{

/***/ "./src/app/history/history.module.ts":
/*!*******************************************!*\
  !*** ./src/app/history/history.module.ts ***!
  \*******************************************/
/*! exports provided: HistoryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryPageModule", function() { return HistoryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _history_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./history.page */ "./src/app/history/history.page.ts");







var routes = [
    {
        path: '',
        component: _history_page__WEBPACK_IMPORTED_MODULE_6__["HistoryPage"]
    }
];
var HistoryPageModule = /** @class */ (function () {
    function HistoryPageModule() {
    }
    HistoryPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes
                //   [
                //   {
                //     path: '',
                //     component: HistoryPage
                //   }
                // ]
                ),
            ],
            declarations: [_history_page__WEBPACK_IMPORTED_MODULE_6__["HistoryPage"]]
        })
    ], HistoryPageModule);
    return HistoryPageModule;
}());



/***/ }),

/***/ "./src/app/history/history.page.html":
/*!*******************************************!*\
  !*** ./src/app/history/history.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button (click)=\"closePopover()\" defaultHref=\"/\"></ion-back-button>\r\n  </ion-buttons>\r\n    <ion-title text-center>Orders History</ion-title>\r\n\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content >\r\n <ion-list>\r\n   <ion-card>\r\n     <ion-card-header style=\"font-weight: bold;color: #000\"><ion-icon name=\"flame\"></ion-icon> Order Date | Status | View </ion-card-header>\r\n     <ion-card-content>\r\n      \r\n  <ion-item lines=\"none\" *ngFor=\"let account of parsedAccount \" style=\"font-family: Open Sans;\">\r\n    <p style=\"max-width: 4.2em;margin-right: 20%;\"> {{account.buying_date | date }}</p>\r\n    <p style=\"font-family: Open Sans;\"><span style=\"color: red\"> Delivery ongoing</span></p>\r\n    <ion-button\r\n    fill=\"outline\" slot=\"end\" size=\"small\" (click)=\"orderDetails()\" [routerLink]=\"['/menu/preview-media', account._id]\">\r\n    <ion-icon name=\"eye\" slot=\"start\" ></ion-icon>VIEW\r\n  </ion-button>\r\n</ion-item>\r\n\r\n</ion-card-content>\r\n</ion-card>\r\n </ion-list>\r\n\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/history/history.page.scss":
/*!*******************************************!*\
  !*** ./src/app/history/history.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".accordion-list {\n  margin-bottom: 4px;\n  --ion-item-background: white; }\n  .accordion-list .section, .accordion-list .section-white {\n    --min-height: 58px; }\n  .section {\n  --ion-item-background: white;\n  --ion-item-color: #000; }\n  .section-active {\n  --ion-item-background: #ffc400;\n  --ion-item-color: #fff;\n  font-weight: 600; }\n  .section-active ion-icon {\n    color: #fff; }\n  .child-list {\n  padding: 0px;\n  margin: 0px; }\n  .child-list .child, .child-list .child-active {\n    margin-bottom: 2px; }\n  .child {\n  --ion-item-background: #e8e7e6;\n  --ion-item-color: #000; }\n  .child-active {\n  --ion-item-color: #fff;\n  --ion-item-background: pink; }\n  .child-active ion-icon {\n    color: #fff; }\n  products-list {\n  padding: 0px;\n  margin: 0px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGlzdG9yeS9DOlxcVXNlcnNcXEF0dGFpblxcZGVza3RvcFxccHJvamVjdHNcXGFwcGFyZWwtZWNvbW1lcmNlL3NyY1xcYXBwXFxoaXN0b3J5XFxoaXN0b3J5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFtQjtFQUNuQiw0QkFBc0IsRUFBQTtFQUYxQjtJQUlRLGtCQUFhLEVBQUE7RUFHckI7RUFDSSw0QkFBc0I7RUFDdEIsc0JBQWlCLEVBQUE7RUFFckI7RUFDSSw4QkFBc0I7RUFDdEIsc0JBQWlCO0VBQ2pCLGdCQUFnQixFQUFBO0VBSHBCO0lBTVEsV0FBVyxFQUFBO0VBSW5CO0VBQ0ksWUFBWTtFQUNaLFdBQVcsRUFBQTtFQUZmO0lBSVEsa0JBQWtCLEVBQUE7RUFHMUI7RUFDSSw4QkFBc0I7RUFDdEIsc0JBQWlCLEVBQUE7RUFHckI7RUFFSSxzQkFBaUI7RUFDakIsMkJBQXNCLEVBQUE7RUFIMUI7SUFNUSxXQUFXLEVBQUE7RUFHbkI7RUFDSSxZQUFZO0VBQ1osV0FBVyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvaGlzdG9yeS9oaXN0b3J5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hY2NvcmRpb24tbGlzdHtcclxuICAgIG1hcmdpbi1ib3R0b20gOiA0cHg7XHJcbiAgICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgLnNlY3Rpb24sIC5zZWN0aW9uLXdoaXRlIHtcclxuICAgICAgICAtLW1pbi1oZWlnaHQ6IDU4cHg7XHJcbiAgICB9XHJcbn1cclxuLnNlY3Rpb257XHJcbiAgICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgLS1pb24taXRlbS1jb2xvcjogIzAwMDtcclxufVxyXG4uc2VjdGlvbi1hY3RpdmV7XHJcbiAgICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6ICNmZmM0MDA7XHJcbiAgICAtLWlvbi1pdGVtLWNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuXHJcbiAgICBpb24taWNvbiB7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcblxyXG4gICAgfVxyXG59XHJcbi5jaGlsZC1saXN0e1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICAuY2hpbGQsIC5jaGlsZC1hY3RpdmV7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMnB4O1xyXG4gICAgfVxyXG59XHJcbi5jaGlsZHtcclxuICAgIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogI2U4ZTdlNjtcclxuICAgIC0taW9uLWl0ZW0tY29sb3I6ICMwMDA7XHJcbn1cclxuXHJcbi5jaGlsZC1hY3RpdmV7XHJcbiAgICAvLyAtLWlvbi1pdGVtLWJhY2tncm91bmQ6ICNmYWQ4NmI7XHJcbiAgICAtLWlvbi1pdGVtLWNvbG9yOiAjZmZmO1xyXG4gICAgLS1pb24taXRlbS1iYWNrZ3JvdW5kOiBwaW5rO1xyXG4gICAgXHJcbiAgICBpb24taWNvbntcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgIH1cclxufVxyXG5wcm9kdWN0cy1saXN0e1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/history/history.page.ts":
/*!*****************************************!*\
  !*** ./src/app/history/history.page.ts ***!
  \*****************************************/
/*! exports provided: HistoryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryPage", function() { return HistoryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





var HistoryPage = /** @class */ (function () {
    function HistoryPage(orders, activatedRoute, loadingController) {
        var _this = this;
        this.orders = orders;
        this.activatedRoute = activatedRoute;
        this.loadingController = loadingController;
        this.data = null;
        this.loggedInUser = '';
        this.autoClose = false;
        this.accountsbyid = undefined;
        this.parsedAccount = undefined;
        this.orders.getSalesActivities().subscribe(function (res) {
            _this.accountsbyid = res['accounts'];
            var parsedData = JSON.parse(_this.accountsbyid);
            _this.parsedAccount = parsedData;
            console.log("Parsed data", _this.parsedAccount);
            // this.accountsbyid[0].open = true;
            var accountsarray = Object.keys(_this.accountsbyid[0]);
            console.log(_this.accountsbyid[0]);
        });
    }
    HistoryPage.prototype.toggleSection = function (index) {
        this.accountsbyid[index].open = !this.accountsbyid[index].open;
        if (this.autoClose && this.accountsbyid[index].open) {
            this.accountsbyid.filter(function (item, itemIndex) { return itemIndex != index; }).map(function (item) { return item.open = false; });
        }
    };
    HistoryPage.prototype.orderDetail = function () {
        console.log('orders', this.parsedAccount);
        this.parsedAccount;
    };
    HistoryPage.prototype.toggleItem = function (index, childIndex) {
        this.accountsbyid[index].children[childIndex].open = !this.accountsbyid[index].children[childIndex].open;
    };
    HistoryPage.prototype.onChangePage = function (pageOfItems) {
        // update current page of items
        this.pageOfItems = pageOfItems;
    };
    HistoryPage.prototype.ngOnInit = function () {
        // this.loggedInUser = this.activatedRoute.snapshot.paramMap.get('user_id');
        // this.orders.getSalesActivities().subscribe(res => {
        //   this.accountsbyid = JSON.stringify(res['accounts']);
        //   let parsedData = JSON.parse(this.accountsbyid);
        //   this.parsedAccount = parsedData;
        //   console.log("Parsed data", this.parsedAccount)
        //   // this.accountsbyid[0].open = true;
        //   let accountsarray = Object.keys(this.accountsbyid[0]);
        //   console.log(this.accountsbyid[0]);
        // })
        // this.orderDetails()
    };
    HistoryPage.prototype.orderDetails = function () {
        var _this = this;
        this.orders.getSalesActivities().subscribe(function (res) {
            _this.accountsbyid = JSON.stringify(res);
            var parsedData = JSON.parse(_this.accountsbyid);
            _this.parsedAccount = parsedData;
            // this.accountsbyid[0].open = true;
            var accountsarray = Object.keys(_this.accountsbyid[0]);
            console.log(_this.accountsbyid[0]);
        });
    };
    HistoryPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-history',
            template: __webpack_require__(/*! ./history.page.html */ "./src/app/history/history.page.html"),
            styles: [__webpack_require__(/*! ./history.page.scss */ "./src/app/history/history.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]])
    ], HistoryPage);
    return HistoryPage;
}());



/***/ })

}]);
//# sourceMappingURL=history-history-module.js.map
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

module.exports = ".accordion-list {\n  margin-bottom: 4px;\n  --ion-item-background: white; }\n  .accordion-list .section, .accordion-list .section-white {\n    --min-height: 58px; }\n  .section {\n  --ion-item-background: white;\n  --ion-item-color: #000; }\n  .section-active {\n  --ion-item-background: #ffc400;\n  --ion-item-color: #fff;\n  font-weight: 600; }\n  .section-active ion-icon {\n    color: #fff; }\n  .child-list {\n  padding: 0px;\n  margin: 0px; }\n  .child-list .child, .child-list .child-active {\n    margin-bottom: 2px; }\n  .child {\n  --ion-item-background: #e8e7e6;\n  --ion-item-color: #000; }\n  .child-active {\n  --ion-item-color: #fff;\n  --ion-item-background: pink; }\n  .child-active ion-icon {\n    color: #fff; }\n  products-list {\n  padding: 0px;\n  margin: 0px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGlzdG9yeS9DOlxcVXNlcnNcXEF0dGFpblxcZGVza3RvcFxccHJvamVjdHNcXGFwXFxhcHBhcmVsLWVjb21tZXJjZS9zcmNcXGFwcFxcaGlzdG9yeVxcaGlzdG9yeS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBbUI7RUFDbkIsNEJBQXNCLEVBQUE7RUFGMUI7SUFJUSxrQkFBYSxFQUFBO0VBR3JCO0VBQ0ksNEJBQXNCO0VBQ3RCLHNCQUFpQixFQUFBO0VBRXJCO0VBQ0ksOEJBQXNCO0VBQ3RCLHNCQUFpQjtFQUNqQixnQkFBZ0IsRUFBQTtFQUhwQjtJQU1RLFdBQVcsRUFBQTtFQUluQjtFQUNJLFlBQVk7RUFDWixXQUFXLEVBQUE7RUFGZjtJQUlRLGtCQUFrQixFQUFBO0VBRzFCO0VBQ0ksOEJBQXNCO0VBQ3RCLHNCQUFpQixFQUFBO0VBR3JCO0VBRUksc0JBQWlCO0VBQ2pCLDJCQUFzQixFQUFBO0VBSDFCO0lBTVEsV0FBVyxFQUFBO0VBR25CO0VBQ0ksWUFBWTtFQUNaLFdBQVcsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2hpc3RvcnkvaGlzdG9yeS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWNjb3JkaW9uLWxpc3R7XHJcbiAgICBtYXJnaW4tYm90dG9tIDogNHB4O1xyXG4gICAgLS1pb24taXRlbS1iYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIC5zZWN0aW9uLCAuc2VjdGlvbi13aGl0ZSB7XHJcbiAgICAgICAgLS1taW4taGVpZ2h0OiA1OHB4O1xyXG4gICAgfVxyXG59XHJcbi5zZWN0aW9ue1xyXG4gICAgLS1pb24taXRlbS1iYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIC0taW9uLWl0ZW0tY29sb3I6ICMwMDA7XHJcbn1cclxuLnNlY3Rpb24tYWN0aXZle1xyXG4gICAgLS1pb24taXRlbS1iYWNrZ3JvdW5kOiAjZmZjNDAwO1xyXG4gICAgLS1pb24taXRlbS1jb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcblxyXG4gICAgaW9uLWljb24ge1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG5cclxuICAgIH1cclxufVxyXG4uY2hpbGQtbGlzdHtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgLmNoaWxkLCAuY2hpbGQtYWN0aXZle1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDJweDtcclxuICAgIH1cclxufVxyXG4uY2hpbGR7XHJcbiAgICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6ICNlOGU3ZTY7XHJcbiAgICAtLWlvbi1pdGVtLWNvbG9yOiAjMDAwO1xyXG59XHJcblxyXG4uY2hpbGQtYWN0aXZle1xyXG4gICAgLy8gLS1pb24taXRlbS1iYWNrZ3JvdW5kOiAjZmFkODZiO1xyXG4gICAgLS1pb24taXRlbS1jb2xvcjogI2ZmZjtcclxuICAgIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogcGluaztcclxuICAgIFxyXG4gICAgaW9uLWljb257XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICB9XHJcbn1cclxucHJvZHVjdHMtbGlzdHtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIG1hcmdpbjogMHB4O1xyXG59Il19 */"

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
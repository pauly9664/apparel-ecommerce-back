(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab3-tab3-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/tab3.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/tab3.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>\n    Orders\n    </ion-title>\n  </ion-toolbar>\n</ion-header> -->\n\n<ion-content [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">Orders Page</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-list>\n    <ion-card>\n      <ion-card-header style=\"font-weight: bold;color: #000\"><ion-icon name=\"flame\"></ion-icon> Order Date | Status | View </ion-card-header>\n      <ion-card-content>\n  <ion-item-sliding  *ngFor=\"let account of parsedAccount\">\n   <ion-item lines=\"none\" style=\"font-family: Open Sans;\" >\n     <p style=\"max-width: 4.2em;margin-right: 20%;\"> {{account.buying_date | date }}</p>\n     <p style=\"font-family: Open Sans;\"><span style=\"color: green; font-weight: bold\"><i> KES {{account.amount}}</i></span></p>\n     <!-- <p style=\"font-family: Open Sans;\" ><a href=\"{{account.url}}\" target=\"_blank\">{{account.url}}</a></p> -->\n     <ion-button\n     color=\"success\" style=\"margin-right: 45%;\"slot=\"end\" size=\"small\" (click)=\"confirmviewed(account._id)\"[routerLink]=\"['/orderview', account._id]\">\n     <ion-icon name=\"eye\" slot=\"start\" ></ion-icon> VIEW</ion-button>\n </ion-item>\n</ion-item-sliding>\n \n </ion-card-content>\n </ion-card>\n  </ion-list>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/tab3/tab3.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.module.ts ***!
  \*************************************/
/*! exports provided: Tab3PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3PageModule", function() { return Tab3PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab3.page */ "./src/app/tab3/tab3.page.ts");
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../explore-container/explore-container.module */ "./src/app/explore-container/explore-container.module.ts");








let Tab3PageModule = class Tab3PageModule {
};
Tab3PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__["ExploreContainerComponentModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"] }])
        ],
        declarations: [_tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"]]
    })
], Tab3PageModule);



/***/ }),

/***/ "./src/app/tab3/tab3.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content ion-toolbar {\n  --background: translucent;\n}\n\n.accordion-list {\n  margin-bottom: 4px;\n  --ion-item-background: white;\n}\n\n.accordion-list .section, .accordion-list .section-white {\n  --min-height: 58px;\n}\n\n.section {\n  --ion-item-background: white;\n  --ion-item-color: #000;\n}\n\n.section-active {\n  --ion-item-background: #ffc400;\n  --ion-item-color: #fff;\n  font-weight: 600;\n}\n\n.section-active ion-icon {\n  color: #fff;\n}\n\n.child-list {\n  padding: 0px;\n  margin: 0px;\n}\n\n.child-list .child, .child-list .child-active {\n  margin-bottom: 2px;\n}\n\n.child {\n  --ion-item-background: #e8e7e6;\n  --ion-item-color: #000;\n}\n\n.child-active {\n  --ion-item-color: #fff;\n  --ion-item-background: pink;\n}\n\n.child-active ion-icon {\n  color: #fff;\n}\n\nproducts-list {\n  padding: 0px;\n  margin: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMy9DOlxcVXNlcnNcXEF0dGFpblxcZGVza3RvcFxccHJvamVjdHNcXHByZXRzYWwtYWRtaW5cXGFwcGFyZWwtZWNvbW1lcmNlLWFkbWluL3NyY1xcYXBwXFx0YWIzXFx0YWIzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvdGFiMy90YWIzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxrQkFBQTtFQUNBLDRCQUFBO0FDRUY7O0FEREU7RUFDSSxrQkFBQTtBQ0dOOztBREFBO0VBQ0UsNEJBQUE7RUFDQSxzQkFBQTtBQ0dGOztBRERBO0VBQ0UsOEJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FDSUY7O0FERkU7RUFDSSxXQUFBO0FDSU47O0FEQUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtBQ0dGOztBREZFO0VBQ0ksa0JBQUE7QUNJTjs7QUREQTtFQUNFLDhCQUFBO0VBQ0Esc0JBQUE7QUNJRjs7QUREQTtFQUVFLHNCQUFBO0VBQ0EsMkJBQUE7QUNHRjs7QURERTtFQUNJLFdBQUE7QUNHTjs7QURBQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FDR0YiLCJmaWxlIjoic3JjL2FwcC90YWIzL3RhYjMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQgaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zbHVjZW50O1xufVxuLmFjY29yZGlvbi1saXN0e1xuICBtYXJnaW4tYm90dG9tIDogNHB4O1xuICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6IHdoaXRlO1xuICAuc2VjdGlvbiwgLnNlY3Rpb24td2hpdGUge1xuICAgICAgLS1taW4taGVpZ2h0OiA1OHB4O1xuICB9XG59XG4uc2VjdGlvbntcbiAgLS1pb24taXRlbS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgLS1pb24taXRlbS1jb2xvcjogIzAwMDtcbn1cbi5zZWN0aW9uLWFjdGl2ZXtcbiAgLS1pb24taXRlbS1iYWNrZ3JvdW5kOiAjZmZjNDAwO1xuICAtLWlvbi1pdGVtLWNvbG9yOiAjZmZmO1xuICBmb250LXdlaWdodDogNjAwO1xuXG4gIGlvbi1pY29uIHtcbiAgICAgIGNvbG9yOiAjZmZmO1xuXG4gIH1cbn1cbi5jaGlsZC1saXN0e1xuICBwYWRkaW5nOiAwcHg7XG4gIG1hcmdpbjogMHB4O1xuICAuY2hpbGQsIC5jaGlsZC1hY3RpdmV7XG4gICAgICBtYXJnaW4tYm90dG9tOiAycHg7XG4gIH1cbn1cbi5jaGlsZHtcbiAgLS1pb24taXRlbS1iYWNrZ3JvdW5kOiAjZThlN2U2O1xuICAtLWlvbi1pdGVtLWNvbG9yOiAjMDAwO1xufVxuXG4uY2hpbGQtYWN0aXZle1xuICAvLyAtLWlvbi1pdGVtLWJhY2tncm91bmQ6ICNmYWQ4NmI7XG4gIC0taW9uLWl0ZW0tY29sb3I6ICNmZmY7XG4gIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogcGluaztcbiAgXG4gIGlvbi1pY29ue1xuICAgICAgY29sb3I6ICNmZmY7XG4gIH1cbn1cbnByb2R1Y3RzLWxpc3R7XG4gIHBhZGRpbmc6IDBweDtcbiAgbWFyZ2luOiAwcHg7XG59IiwiaW9uLWNvbnRlbnQgaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zbHVjZW50O1xufVxuXG4uYWNjb3JkaW9uLWxpc3Qge1xuICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogd2hpdGU7XG59XG4uYWNjb3JkaW9uLWxpc3QgLnNlY3Rpb24sIC5hY2NvcmRpb24tbGlzdCAuc2VjdGlvbi13aGl0ZSB7XG4gIC0tbWluLWhlaWdodDogNThweDtcbn1cblxuLnNlY3Rpb24ge1xuICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6IHdoaXRlO1xuICAtLWlvbi1pdGVtLWNvbG9yOiAjMDAwO1xufVxuXG4uc2VjdGlvbi1hY3RpdmUge1xuICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6ICNmZmM0MDA7XG4gIC0taW9uLWl0ZW0tY29sb3I6ICNmZmY7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4uc2VjdGlvbi1hY3RpdmUgaW9uLWljb24ge1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmNoaWxkLWxpc3Qge1xuICBwYWRkaW5nOiAwcHg7XG4gIG1hcmdpbjogMHB4O1xufVxuLmNoaWxkLWxpc3QgLmNoaWxkLCAuY2hpbGQtbGlzdCAuY2hpbGQtYWN0aXZlIHtcbiAgbWFyZ2luLWJvdHRvbTogMnB4O1xufVxuXG4uY2hpbGQge1xuICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6ICNlOGU3ZTY7XG4gIC0taW9uLWl0ZW0tY29sb3I6ICMwMDA7XG59XG5cbi5jaGlsZC1hY3RpdmUge1xuICAtLWlvbi1pdGVtLWNvbG9yOiAjZmZmO1xuICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6IHBpbms7XG59XG4uY2hpbGQtYWN0aXZlIGlvbi1pY29uIHtcbiAgY29sb3I6ICNmZmY7XG59XG5cbnByb2R1Y3RzLWxpc3Qge1xuICBwYWRkaW5nOiAwcHg7XG4gIG1hcmdpbjogMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/tab3/tab3.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab3/tab3.page.ts ***!
  \***********************************/
/*! exports provided: Tab3Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3Page", function() { return Tab3Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _products_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../products.service */ "./src/app/products.service.ts");
/* harmony import */ var _orderview_orderview_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../orderview/orderview.page */ "./src/app/orderview/orderview.page.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");







let Tab3Page = class Tab3Page {
    constructor(orders, formBuilder, modalCtrl, activatedRoute, loadingController) {
        this.orders = orders;
        this.formBuilder = formBuilder;
        this.modalCtrl = modalCtrl;
        this.activatedRoute = activatedRoute;
        this.loadingController = loadingController;
        this.data = null;
        this.loggedInUser = '';
        this.autoClose = false;
        this.accountsbyid = undefined;
        this.parsedAccount = [];
        this.orderedOrders = [];
        this.viewership = 1;
        this.orderDetails();
    }
    ngOnInit() {
        this.order_form = this.formBuilder.group({
            order_id: [this.order_ids]
        });
        this.confirmView = this.formBuilder.group({
            view_status: [this.viewership],
            order_id: [this.order_ids],
        });
    }
    confirmviewed(id) {
        this.setval = this.confirmView.get('view_status').setValue(this.viewership);
        this.setval = this.confirmView.get('order_id').setValue(id);
        console.log("This the id", id);
        this.orders.confirmViewerShip(this.confirmView.value).subscribe();
    }
    orderDetails() {
        this.orders.getSalesActivities().subscribe(res => {
            this.parsedAccount = res;
            console.log('yeeees', this.parsedAccount);
        });
        // this.parsedAccount.sort((a,b)=>b.buying_date - a.buying_date)
    }
    openOrder(order) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            //   console.log("this is the order",order)
            let modal = yield this.modalCtrl.create({
                component: _orderview_orderview_page__WEBPACK_IMPORTED_MODULE_5__["OrderviewPage"],
                componentProps: {
                    order: order,
                }
            });
            modal.present();
            // console.log("This:", order)
            // console.log("We are the champions", this.order_ids)
        });
    }
};
Tab3Page.ctorParameters = () => [
    { type: _products_service__WEBPACK_IMPORTED_MODULE_4__["ProductsService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] }
];
Tab3Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab3',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tab3.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/tab3.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tab3.page.scss */ "./src/app/tab3/tab3.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_products_service__WEBPACK_IMPORTED_MODULE_4__["ProductsService"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]])
], Tab3Page);



/***/ })

}]);
//# sourceMappingURL=tab3-tab3-module-es2015.js.map
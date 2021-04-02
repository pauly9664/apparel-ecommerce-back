function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["new-orders-new-orders-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/new-orders/new-orders.page.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/new-orders/new-orders.page.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNewOrdersNewOrdersPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<ion-content>\n  <ion-list>\n    <ion-card>\n      <ion-card-header style=\"font-weight: bold;color: #000\"><ion-icon name=\"flame\"></ion-icon> Order Date | Status | View </ion-card-header>\n      <ion-card-content>\n  <ion-item-sliding  *ngFor=\"let account of filteredParsedAccount\">\n   <ion-item lines=\"none\" style=\"font-family: Open Sans;\" >\n     <p style=\"max-width: 4.2em;margin-right: 10%;\"> {{account.buying_date | date }}</p>\n     <p style=\"font-family: Open Sans;margin-right: 15%;\"><span style=\"color: blue\"><i> *New Order</i></span></p>\n     <p style=\"font-family: Open Sans;margin-left: 20%; font-weight: bold\" >KES {{account.amount}}</p>\n     <!-- <p style=\"font-family: Open Sans;\" ><a href=\"{{account.url}}\" target=\"_blank\">{{account.url}}</a></p> -->\n     <ion-button\n    color=\"success\" style=\"margin-right:45% ;\"slot=\"end\" size=\"small\" (click)=\"confirmviewed(account._id)\"[routerLink]=\"['/orderview', account._id]\">\n     <ion-icon name=\"eye\" slot=\"start\" ></ion-icon> VIEW</ion-button>\n </ion-item>\n</ion-item-sliding>\n \n </ion-card-content>\n </ion-card>\n  </ion-list>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/new-orders/new-orders.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/new-orders/new-orders.module.ts ***!
    \*************************************************/

  /*! exports provided: NewOrdersPageModule */

  /***/
  function srcAppNewOrdersNewOrdersModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewOrdersPageModule", function () {
      return NewOrdersPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _new_orders_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./new-orders.page */
    "./src/app/new-orders/new-orders.page.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var NewOrdersPageModule = function NewOrdersPageModule() {
      _classCallCheck(this, NewOrdersPageModule);
    };

    NewOrdersPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild([{
        path: '',
        component: _new_orders_page__WEBPACK_IMPORTED_MODULE_5__["NewOrdersPage"]
      }])],
      declarations: [_new_orders_page__WEBPACK_IMPORTED_MODULE_5__["NewOrdersPage"]]
    })], NewOrdersPageModule);
    /***/
  },

  /***/
  "./src/app/new-orders/new-orders.page.scss":
  /*!*************************************************!*\
    !*** ./src/app/new-orders/new-orders.page.scss ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppNewOrdersNewOrdersPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content ion-toolbar {\n  --background: translucent;\n}\n\n.accordion-list {\n  margin-bottom: 4px;\n  --ion-item-background: white;\n}\n\n.accordion-list .section, .accordion-list .section-white {\n  --min-height: 58px;\n}\n\n.section {\n  --ion-item-background: white;\n  --ion-item-color: #000;\n}\n\n.section-active {\n  --ion-item-background: #ffc400;\n  --ion-item-color: #fff;\n  font-weight: 600;\n}\n\n.section-active ion-icon {\n  color: #fff;\n}\n\n.child-list {\n  padding: 0px;\n  margin: 0px;\n}\n\n.child-list .child, .child-list .child-active {\n  margin-bottom: 2px;\n}\n\n.child {\n  --ion-item-background: #e8e7e6;\n  --ion-item-color: #000;\n}\n\n.child-active {\n  --ion-item-color: #fff;\n  --ion-item-background: pink;\n}\n\n.child-active ion-icon {\n  color: #fff;\n}\n\nproducts-list {\n  padding: 0px;\n  margin: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3LW9yZGVycy9DOlxcVXNlcnNcXEF0dGFpblxcRGVza3RvcFxcUHJvamVjdHNcXHByZXRzYWwtYWRtaW5cXGFwcGFyZWwtZWNvbW1lcmNlLWFkbWluL3NyY1xcYXBwXFxuZXctb3JkZXJzXFxuZXctb3JkZXJzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvbmV3LW9yZGVycy9uZXctb3JkZXJzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0FDQ0o7O0FEQ0U7RUFDRSxrQkFBQTtFQUNBLDRCQUFBO0FDRUo7O0FEREk7RUFDSSxrQkFBQTtBQ0dSOztBREFFO0VBQ0UsNEJBQUE7RUFDQSxzQkFBQTtBQ0dKOztBRERFO0VBQ0UsOEJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FDSUo7O0FERkk7RUFDSSxXQUFBO0FDSVI7O0FEQUU7RUFDRSxZQUFBO0VBQ0EsV0FBQTtBQ0dKOztBREZJO0VBQ0ksa0JBQUE7QUNJUjs7QURERTtFQUNFLDhCQUFBO0VBQ0Esc0JBQUE7QUNJSjs7QURERTtFQUVFLHNCQUFBO0VBQ0EsMkJBQUE7QUNHSjs7QURESTtFQUNJLFdBQUE7QUNHUjs7QURBRTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FDR0oiLCJmaWxlIjoic3JjL2FwcC9uZXctb3JkZXJzL25ldy1vcmRlcnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQgaW9uLXRvb2xiYXIge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc2x1Y2VudDtcclxuICB9XHJcbiAgLmFjY29yZGlvbi1saXN0e1xyXG4gICAgbWFyZ2luLWJvdHRvbSA6IDRweDtcclxuICAgIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAuc2VjdGlvbiwgLnNlY3Rpb24td2hpdGUge1xyXG4gICAgICAgIC0tbWluLWhlaWdodDogNThweDtcclxuICAgIH1cclxuICB9XHJcbiAgLnNlY3Rpb257XHJcbiAgICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgLS1pb24taXRlbS1jb2xvcjogIzAwMDtcclxuICB9XHJcbiAgLnNlY3Rpb24tYWN0aXZle1xyXG4gICAgLS1pb24taXRlbS1iYWNrZ3JvdW5kOiAjZmZjNDAwO1xyXG4gICAgLS1pb24taXRlbS1jb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgXHJcbiAgICBpb24taWNvbiB7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgXHJcbiAgICB9XHJcbiAgfVxyXG4gIC5jaGlsZC1saXN0e1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICAuY2hpbGQsIC5jaGlsZC1hY3RpdmV7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMnB4O1xyXG4gICAgfVxyXG4gIH1cclxuICAuY2hpbGR7XHJcbiAgICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6ICNlOGU3ZTY7XHJcbiAgICAtLWlvbi1pdGVtLWNvbG9yOiAjMDAwO1xyXG4gIH1cclxuICBcclxuICAuY2hpbGQtYWN0aXZle1xyXG4gICAgLy8gLS1pb24taXRlbS1iYWNrZ3JvdW5kOiAjZmFkODZiO1xyXG4gICAgLS1pb24taXRlbS1jb2xvcjogI2ZmZjtcclxuICAgIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogcGluaztcclxuICAgIFxyXG4gICAgaW9uLWljb257XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHByb2R1Y3RzLWxpc3R7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICB9IiwiaW9uLWNvbnRlbnQgaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zbHVjZW50O1xufVxuXG4uYWNjb3JkaW9uLWxpc3Qge1xuICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogd2hpdGU7XG59XG4uYWNjb3JkaW9uLWxpc3QgLnNlY3Rpb24sIC5hY2NvcmRpb24tbGlzdCAuc2VjdGlvbi13aGl0ZSB7XG4gIC0tbWluLWhlaWdodDogNThweDtcbn1cblxuLnNlY3Rpb24ge1xuICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6IHdoaXRlO1xuICAtLWlvbi1pdGVtLWNvbG9yOiAjMDAwO1xufVxuXG4uc2VjdGlvbi1hY3RpdmUge1xuICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6ICNmZmM0MDA7XG4gIC0taW9uLWl0ZW0tY29sb3I6ICNmZmY7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4uc2VjdGlvbi1hY3RpdmUgaW9uLWljb24ge1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmNoaWxkLWxpc3Qge1xuICBwYWRkaW5nOiAwcHg7XG4gIG1hcmdpbjogMHB4O1xufVxuLmNoaWxkLWxpc3QgLmNoaWxkLCAuY2hpbGQtbGlzdCAuY2hpbGQtYWN0aXZlIHtcbiAgbWFyZ2luLWJvdHRvbTogMnB4O1xufVxuXG4uY2hpbGQge1xuICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6ICNlOGU3ZTY7XG4gIC0taW9uLWl0ZW0tY29sb3I6ICMwMDA7XG59XG5cbi5jaGlsZC1hY3RpdmUge1xuICAtLWlvbi1pdGVtLWNvbG9yOiAjZmZmO1xuICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6IHBpbms7XG59XG4uY2hpbGQtYWN0aXZlIGlvbi1pY29uIHtcbiAgY29sb3I6ICNmZmY7XG59XG5cbnByb2R1Y3RzLWxpc3Qge1xuICBwYWRkaW5nOiAwcHg7XG4gIG1hcmdpbjogMHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/new-orders/new-orders.page.ts":
  /*!***********************************************!*\
    !*** ./src/app/new-orders/new-orders.page.ts ***!
    \***********************************************/

  /*! exports provided: NewOrdersPage */

  /***/
  function srcAppNewOrdersNewOrdersPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewOrdersPage", function () {
      return NewOrdersPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _products_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../products.service */
    "./src/app/products.service.ts");
    /* harmony import */


    var _orderview_orderview_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../orderview/orderview.page */
    "./src/app/orderview/orderview.page.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var NewOrdersPage = /*#__PURE__*/function () {
      function NewOrdersPage(orders, formBuilder, modalCtrl, activatedRoute, loadingController) {
        _classCallCheck(this, NewOrdersPage);

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
        this.filteredParsedAccount = [];
        this.orderDetails();
      }

      _createClass(NewOrdersPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.order_form = this.formBuilder.group({
            order_id: [this.order_ids]
          });
          this.confirmView = this.formBuilder.group({
            view_status: [this.viewership],
            order_id: [this.order_ids]
          });
        }
      }, {
        key: "confirmviewed",
        value: function confirmviewed(id) {
          this.setval = this.confirmView.get('view_status').setValue(this.viewership);
          this.setval = this.confirmView.get('order_id').setValue(id);
          console.log("This the id", id);
          this.orders.confirmViewerShip(this.confirmView.value).subscribe();
        }
      }, {
        key: "orderDetails",
        value: function orderDetails() {
          var _this = this;

          this.orders.getSalesActivities().subscribe(function (res) {
            _this.parsedAccount = res;
            _this.filteredParsedAccount = _this.parsedAccount.filter(function (order) {
              return order.viewed_status === 0;
            });
            console.log('yeeees', _this.parsedAccount);
          }); // this.parsedAccount.sort((a,b)=>b.buying_date - a.buying_date)
        }
      }, {
        key: "openOrder",
        value: function openOrder(order) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var modal;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.modalCtrl.create({
                      component: _orderview_orderview_page__WEBPACK_IMPORTED_MODULE_5__["OrderviewPage"],
                      componentProps: {
                        order: order
                      }
                    });

                  case 2:
                    modal = _context.sent;
                    modal.present(); // console.log("This:", order)
                    // console.log("We are the champions", this.order_ids)

                  case 4:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }]);

      return NewOrdersPage;
    }();

    NewOrdersPage.ctorParameters = function () {
      return [{
        type: _products_service__WEBPACK_IMPORTED_MODULE_4__["ProductsService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
      }];
    };

    NewOrdersPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-new-orders',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./new-orders.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/new-orders/new-orders.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./new-orders.page.scss */
      "./src/app/new-orders/new-orders.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_products_service__WEBPACK_IMPORTED_MODULE_4__["ProductsService"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]])], NewOrdersPage);
    /***/
  }
}]);
//# sourceMappingURL=new-orders-new-orders-module-es5.js.map
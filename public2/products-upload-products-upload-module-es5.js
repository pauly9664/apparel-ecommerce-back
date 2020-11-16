function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["products-upload-products-upload-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/products-upload/products-upload.page.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/products-upload/products-upload.page.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProductsUploadProductsUploadPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>products-upload</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>-->\r\n<ion-content > \r\n  <div class=\"bg-image\">\r\n  <ion-grid style=\"background-color: blanchedalmond;\" > \r\n    <ion-row>\r\n    <ion-col size-sm=\"12\" size-md=\"12\" size-lg=\"12\" style=\"background: #fff; color: grey;width: 80%;\">\r\n      <!-- <ion-col size-sm=\"2\" tappable routerLink=\"/menu/home\" style=\"color: #000;font-weight: bold;\"></ion-col> -->\r\n      <ion-col size-sm=\"2\" tappable routerLink=\"/tabs/tab1\"style=\"color: #000;font-weight: bold;\">Products List </ion-col>\r\n      <ion-col size-sm=\"2\"tappable routerLink=\"/tabs/tab2\" style=\"color: #000;font-weight: bold;\">App Center </ion-col>\r\n      <ion-col size-sm=\"2\" tappable routerLink=\"/tabs/tab3\" style=\"color: #000; font-weight: bold;\">Orders </ion-col> \r\n      <!-- <ion-col size-sm=\"2\" tappable routerLink=\"/menu/contact\" style=\"color: #000; font-weight: bold;\">Contact Us </ion-col> -->\r\n      <!-- <ion-col size-sm=\"4\"><ion-icon name=\"call\"></ion-icon>Call us 0719000112</ion-col> -->\r\n    </ion-col>\r\n  </ion-row>\r\n    </ion-grid>\r\n    <div class=\"align-form\">\r\n      <!-- <h1 text-center style=\"font-family: Open Sans ;background-color: blanchedalmond;\">Preeti Fashions<br></h1> -->\r\n      <img src=\"/assets/PreetiLogo.png\" style=\"height:100px; width: 100px;\" />\r\n      <h2 text-center style=\"font-size: 13pt\">Product Catalogue</h2>\r\n  <form [formGroup]=\"productsForm\" (ngSubmit)=\"uploadnow()\" enctype=\"multipart/form-data\" style=\"background-color: blanchedalmond;\">\r\n    <ion-list lines=\"none\"> \r\n    <ion-item >\r\n    <label position=\"floating\">Description</label>\r\n    <input type=\"text\" formControlName=\"description\"/>\r\n  </ion-item>\r\n  <ion-item >\r\n    <label position=\"floating\">Category</label>  \r\n    <select (change)=\"getCategory($event)\"><option *ngFor= \"let category of productCategory\">{{category}}</option></select>\r\n    <p>{{passedCategory}}</p>\r\n  </ion-item >\r\n  <ion-item >\r\n    <label position=\"floating\">Price</label>\r\n    <input type=\"number\" formControlName=\"price\"/>\r\n  </ion-item >\r\n  <ion-item>\r\n    <label position=\"floating\">Count</label>\r\n    <input type=\"number\" formControlName=\"count\"/>\r\n  </ion-item>\r\n  <ion-item>\r\n    <label position=\"floating\">Amount</label>\r\n    <input type=\"number\" formControlName=\"amount\"/>\r\n  </ion-item>\r\n  <ion-item >\r\n    <label position=\"floating\"></label>\r\n    <input type=\"file\" (change)=\"onFileSelected($event)\" />\r\n  </ion-item>\r\n  <ion-item >\r\n    <ion-button color=\"danger\"  (click)=\"uploadnow()\" type=\"button\" style=\"color: #fff\"size=\"default\">Upload now</ion-button>\r\n  </ion-item>\r\n</ion-list>\r\n  </form>\r\n</div>\r\n</div>\r\n\r\n   <!-- <form action=\"uploadnow()\" enctype=\"multipart/form-data\" method=\"POST\">  \r\n    <input type=\"file\" name=\"photo\" />\r\n    <input type=\"submit\" value=\"Upload Photo\"/>\r\n    <ion-button fill=\"outline\"  (click)=\"onReply()\" type=\"button\" style=\"color: white\"size=\"default\">Submit</ion-button>\r\n </form> -->\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/products-upload/products-upload-routing.module.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/products-upload/products-upload-routing.module.ts ***!
    \*******************************************************************/

  /*! exports provided: ProductsUploadPageRoutingModule */

  /***/
  function srcAppProductsUploadProductsUploadRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductsUploadPageRoutingModule", function () {
      return ProductsUploadPageRoutingModule;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _products_upload_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./products-upload.page */
    "./src/app/products-upload/products-upload.page.ts");

    var routes = [{
      path: '',
      component: _products_upload_page__WEBPACK_IMPORTED_MODULE_3__["ProductsUploadPage"]
    }];

    var ProductsUploadPageRoutingModule = function ProductsUploadPageRoutingModule() {
      _classCallCheck(this, ProductsUploadPageRoutingModule);
    };

    ProductsUploadPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ProductsUploadPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/products-upload/products-upload.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/products-upload/products-upload.module.ts ***!
    \***********************************************************/

  /*! exports provided: ProductsUploadPageModule */

  /***/
  function srcAppProductsUploadProductsUploadModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductsUploadPageModule", function () {
      return ProductsUploadPageModule;
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


    var _products_upload_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./products-upload-routing.module */
    "./src/app/products-upload/products-upload-routing.module.ts");
    /* harmony import */


    var _products_upload_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./products-upload.page */
    "./src/app/products-upload/products-upload.page.ts");

    var ProductsUploadPageModule = function ProductsUploadPageModule() {
      _classCallCheck(this, ProductsUploadPageModule);
    };

    ProductsUploadPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _products_upload_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProductsUploadPageRoutingModule"]],
      declarations: [_products_upload_page__WEBPACK_IMPORTED_MODULE_6__["ProductsUploadPage"]]
    })], ProductsUploadPageModule);
    /***/
  },

  /***/
  "./src/app/products-upload/products-upload.page.scss":
  /*!***********************************************************!*\
    !*** ./src/app/products-upload/products-upload.page.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProductsUploadProductsUploadPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".align-form {\n  text-align: center;\n  margin-left: auto;\n  margin-right: auto;\n  background-color: blanchedalmond;\n}\n\nlabel {\n  width: 100px;\n  display: inline-block;\n  color: #000;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdHMtdXBsb2FkL0M6XFxVc2Vyc1xcQXR0YWluXFxkZXNrdG9wXFxwcm9qZWN0c1xccHJldHNhbC1hZG1pblxcYXBwYXJlbC1lY29tbWVyY2UtYWRtaW4vc3JjXFxhcHBcXHByb2R1Y3RzLXVwbG9hZFxccHJvZHVjdHMtdXBsb2FkLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcHJvZHVjdHMtdXBsb2FkL3Byb2R1Y3RzLXVwbG9hZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQ0FBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wcm9kdWN0cy11cGxvYWQvcHJvZHVjdHMtdXBsb2FkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hbGlnbi1mb3Jte1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFuY2hlZGFsbW9uZDtcclxuICAgLy8gcGFkZGluZy10b3A6IDUlO1xyXG59XHJcbmxhYmVse1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgY29sb3I6IzAwMDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbiIsIi5hbGlnbi1mb3JtIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFuY2hlZGFsbW9uZDtcbn1cblxubGFiZWwge1xuICB3aWR0aDogMTAwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgY29sb3I6ICMwMDA7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/products-upload/products-upload.page.ts":
  /*!*********************************************************!*\
    !*** ./src/app/products-upload/products-upload.page.ts ***!
    \*********************************************************/

  /*! exports provided: ProductsUploadPage */

  /***/
  function srcAppProductsUploadProductsUploadPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductsUploadPage", function () {
      return ProductsUploadPage;
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


    var _products_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../products.service */
    "./src/app/products.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _authservice_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../authservice.service */
    "./src/app/authservice.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

    var ProductsUploadPage = /*#__PURE__*/function () {
      function ProductsUploadPage(uploads, alertController, productsService, formBuilder) {
        _classCallCheck(this, ProductsUploadPage);

        this.uploads = uploads;
        this.alertController = alertController;
        this.productsService = productsService;
        this.formBuilder = formBuilder;
        this.selectedFile = null;
        this.productCategory = [];
        this.product = [];
        this.filterAgain();
      }

      _createClass(ProductsUploadPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.productsForm = this.formBuilder.group({
            description: [''],
            category: [this.passedCategory],
            price: [''],
            count: [''],
            amount: ['']
          });
          this.setval = this.productsForm.get('category').setValue(this.passedCategory);
        }
      }, {
        key: "getCategory",
        value: function getCategory(ev) {
          this.passedCategory = ev.target.value;
          console.log('Changes', this.passedCategory);
        }
      }, {
        key: "onFileSelected",
        value: function onFileSelected(event) {
          this.selectedFile = event.target.files[0];
          console.log(event);
        }
      }, {
        key: "filterAgain",
        value: function filterAgain() {
          var _this = this;

          this.productsService.getCategories().subscribe(function (data) {
            _this.product = data;
            console.log('Cats:', _this.product);

            _this.product.forEach(function (item) {
              console.log("Categories", item.description); // if(item.category.indexOf(value) ==)

              _this.productCategory.push(item.description);
            });
          });
        }
      }, {
        key: "uploadnow",
        value: function uploadnow() {
          var _this2 = this;

          var productUpload = new FormData();
          productUpload.append('description', this.productsForm.get('description').value);
          productUpload.append('category', this.passedCategory);
          productUpload.append('price', this.productsForm.get('price').value); // productUpload.append('count', this.productsForm.get('count').value)

          productUpload.append('amount', this.productsForm.get('amount').value);
          productUpload.append('image', this.selectedFile, this.selectedFile.name); //const imagesDetails = this.productsForm.value;

          console.log("this is it", productUpload);
          return this.uploads.uploadProducts(productUpload).subscribe(function (res) {
            if (res) {
              _this2.showAlert("Success");
            }
          }); // console.log(res);
        }
      }, {
        key: "showAlert",
        value: function showAlert(msg) {
          var alert = this.alertController.create({
            message: msg,
            header: 'Image Uploaded Successfully',
            buttons: ['OK']
          });
          alert.then(function (alert) {
            return alert.present();
          });
        }
      }]);

      return ProductsUploadPage;
    }();

    ProductsUploadPage.ctorParameters = function () {
      return [{
        type: _products_service__WEBPACK_IMPORTED_MODULE_2__["ProductsService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]
      }, {
        type: _authservice_service__WEBPACK_IMPORTED_MODULE_4__["AuthserviceService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }];
    };

    ProductsUploadPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-products-upload',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./products-upload.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/products-upload/products-upload.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./products-upload.page.scss */
      "./src/app/products-upload/products-upload.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_products_service__WEBPACK_IMPORTED_MODULE_2__["ProductsService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"], _authservice_service__WEBPACK_IMPORTED_MODULE_4__["AuthserviceService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])], ProductsUploadPage);
    /***/
  }
}]);
//# sourceMappingURL=products-upload-products-upload-module-es5.js.map
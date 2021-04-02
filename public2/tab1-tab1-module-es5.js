function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab1-tab1-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTab1Tab1PageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n<ion-content >\r\n\r\n  <div class=\"bg-image\">\r\n  <img src=\"/assets/PreetiLogo.png\" style=\"height:140px; width: 140px; margin-left: 40%\" />\r\n  <h2 text center style=\"font-family: Open Sans; margin-left: 40%\">Products List</h2>\r\n  <ion-button color=\"danger\" size=\"small\"(click)=\"logout()\" routerLink=\"/login\" style=\"margin-top: -5%;margin-left: 80%\"><ion-icon slot=\"start\" name=\"log-out\"></ion-icon>Logout</ion-button>\r\n</div>\r\n <p style=\"font-weight: bold; font-family: Open Sans; margin-left: 40%; margin-bottom: -3%\"> Search by name</p> \r\n    <ion-searchbar style=\"max-width:50%; margin-left: 50%; margin-top: -1%;\" (ionChange)=\"FilterArrayObjects($event)\" (ionClear)=\" reloadImages()\"></ion-searchbar>  \r\n    <!-- <p style=\"font-family: Open Sans;font-weight: bold; margin-top: 5%\">Actions</p>  -->\r\n    <ion-icon  style=\"font-size: 30px; margin-top: -8%; margin-left: 7%;\"  (click)=\"presentActionSheet()\" name=\"camera\"></ion-icon>\r\n  <h3 [hidden]=\"images.length !== 0\" text-center>No Items found!</h3>\r\n\r\n  \r\n  <ion-list>\r\n    <ion-item-sliding  *ngFor=\"let img of images\">\r\n \r\n      <ion-item tappable (click)=\"openImage(img)\" lines=\"none\">\r\n        <ion-thumbnail item-start>\r\n          <img [src]=\"img.url\">\r\n        </ion-thumbnail>\r\n        <p class=\"styling\"><span style=\"font-weight:bold\">{{ img.description }}</span><br>\r\n        {{img.category}}<br>\r\n        <span style=\"color: green; font-weight: bold;\"><i>KES {{img.price}}</i></span></p>\r\n\r\n        <button ion-button clear icon-only item-end> <ion-icon name=\"arrow-forward\"></ion-icon></button>\r\n      </ion-item>\r\n \r\n      <ion-item-options slot=\"end\">\r\n        <button ion-button icon-only color=\"danger\" (click)=\"deleteImage(img)\">\r\n        <ion-icon name=\"cancel\"></ion-icon>\r\n      </button>\r\n      </ion-item-options>\r\n \r\n    </ion-item-sliding>\r\n  </ion-list>\r\n \r\n \r\n  <!-- <app-explore-container name=\"Tab 1 page\"></app-explore-container> -->\r\n </ion-content>";
    /***/
  },

  /***/
  "./src/app/tab1/tab1.module.ts":
  /*!*************************************!*\
    !*** ./src/app/tab1/tab1.module.ts ***!
    \*************************************/

  /*! exports provided: Tab1PageModule */

  /***/
  function srcAppTab1Tab1ModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function () {
      return Tab1PageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _tab1_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./tab1.page */
    "./src/app/tab1/tab1.page.ts");
    /* harmony import */


    var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../explore-container/explore-container.module */
    "./src/app/explore-container/explore-container.module.ts");

    var Tab1PageModule = function Tab1PageModule() {
      _classCallCheck(this, Tab1PageModule);
    };

    Tab1PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
      imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__["ExploreContainerComponentModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
        path: '',
        component: _tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"]
      }])],
      declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"]]
    })], Tab1PageModule);
    /***/
  },

  /***/
  "./src/app/tab1/tab1.page.scss":
  /*!*************************************!*\
    !*** ./src/app/tab1/tab1.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcAppTab1Tab1PageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content ion-toolbar {\n  --background: translucent;\n}\n\n.styling {\n  font-family: Open Sans;\n}\n\n.align-logo {\n  margin-left: auto;\n  margin-right: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMS9DOlxcVXNlcnNcXEF0dGFpblxcRGVza3RvcFxcUHJvamVjdHNcXHByZXRzYWwtYWRtaW5cXGFwcGFyZWwtZWNvbW1lcmNlLWFkbWluL3NyY1xcYXBwXFx0YWIxXFx0YWIxLnBhZ2Uuc2NzcyIsInNyYy9hcHAvdGFiMS90YWIxLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxzQkFBQTtBQ0VGOztBREFBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtBQ0dGIiwiZmlsZSI6InNyYy9hcHAvdGFiMS90YWIxLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IGlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc2x1Y2VudDtcbn1cbi5zdHlsaW5ne1xuICBmb250LWZhbWlseTogT3BlbiBTYW5zO1xufVxuLmFsaWduLWxvZ297XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG4vLyAuYmctaW1hZ2V7XG4vLyAgIGJhY2tncm91bmQtY29sb3I6IGJsYW5jaGVkYWxtb25kO1xuLy8gfSIsImlvbi1jb250ZW50IGlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc2x1Y2VudDtcbn1cblxuLnN0eWxpbmcge1xuICBmb250LWZhbWlseTogT3BlbiBTYW5zO1xufVxuXG4uYWxpZ24tbG9nbyB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/tab1/tab1.page.ts":
  /*!***********************************!*\
    !*** ./src/app/tab1/tab1.page.ts ***!
    \***********************************/

  /*! exports provided: Tab1Page */

  /***/
  function srcAppTab1Tab1PageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tab1Page", function () {
      return Tab1Page;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/camera/ngx */
    "./node_modules/@ionic-native/camera/ngx/index.js");
    /* harmony import */


    var _preview_modal_preview_modal_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../preview-modal/preview-modal.page */
    "./src/app/preview-modal/preview-modal.page.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _authservice_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../authservice.service */
    "./src/app/authservice.service.ts"); // import { UploadModalPage } from '../upload-modal/upload-modal.page';


    var Tab1Page = /*#__PURE__*/function () {
      function Tab1Page(navCtrl, authService, imagesProvider, router, camera, actionSheetCtrl, modalCtrl) {
        _classCallCheck(this, Tab1Page);

        this.navCtrl = navCtrl;
        this.authService = authService;
        this.imagesProvider = imagesProvider;
        this.router = router;
        this.camera = camera;
        this.actionSheetCtrl = actionSheetCtrl;
        this.modalCtrl = modalCtrl;
        this.images = [];
        this.reloadImages();
      }

      _createClass(Tab1Page, [{
        key: "FilterArrayObjects",
        value: function FilterArrayObjects(ev) {
          var _this = this;

          this.prods = ev.target.value;
          console.log("event data", this.prods);

          if (this.prods && this.prods.trim() != '') {
            this.images = this.images.filter(function (item) {
              // this.productCategory.push(item.category);
              return item.description.toLowerCase().indexOf(_this.prods.toLowerCase()) > -1;
            });
          }
        }
      }, {
        key: "reloadImages",
        value: function reloadImages() {
          var _this2 = this;

          this.imagesProvider.getImages().subscribe(function (data) {
            _this2.images = data;
            console.log(_this2.images);
          });
        }
      }, {
        key: "deleteImage",
        value: function deleteImage(img) {
          var _this3 = this;

          this.imagesProvider.deleteImage(img).subscribe(function (data) {
            _this3.reloadImages();
          });
        }
      }, {
        key: "openImage",
        value: function openImage(img) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var modal;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    console.log("This is the image", img);
                    _context.next = 3;
                    return this.modalCtrl.create({
                      component: _preview_modal_preview_modal_page__WEBPACK_IMPORTED_MODULE_5__["PreviewModalPage"],
                      componentProps: {
                        img: img
                      }
                    });

                  case 3:
                    modal = _context.sent;
                    modal.present();

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "logout",
        value: function logout() {
          this.authService.logout();
        }
      }, {
        key: "presentActionSheet",
        value: function presentActionSheet() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this4 = this;

            var actionSheet;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.actionSheetCtrl.create({
                      // title: 'Select Image Source',
                      buttons: [{
                        text: 'Upload new items',
                        handler: function handler() {
                          _this4.router.navigate(["/products-upload"]); //this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);

                        }
                      }, // {
                      //   text: 'Use Camera',
                      //   handler: () => {
                      //     this.takePicture(this.camera.PictureSourceType.CAMERA);
                      //   }
                      // },
                      {
                        text: 'Cancel',
                        role: 'cancel'
                      }]
                    });

                  case 2:
                    actionSheet = _context2.sent;
                    actionSheet.present();

                  case 4:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }]);

      return Tab1Page;
    }();

    Tab1Page.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
      }, {
        type: _authservice_service__WEBPACK_IMPORTED_MODULE_7__["AuthserviceService"]
      }, {
        type: _products_service__WEBPACK_IMPORTED_MODULE_2__["ProductsService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
      }, {
        type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_4__["Camera"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
      }];
    };

    Tab1Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-tab1',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./tab1.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./tab1.page.scss */
      "./src/app/tab1/tab1.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _authservice_service__WEBPACK_IMPORTED_MODULE_7__["AuthserviceService"], _products_service__WEBPACK_IMPORTED_MODULE_2__["ProductsService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_4__["Camera"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]])], Tab1Page);
    /***/
  }
}]);
//# sourceMappingURL=tab1-tab1-module-es5.js.map
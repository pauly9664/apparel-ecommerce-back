function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html":
  /*!*****************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLoginLoginPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <!-- <ion-toolbar color=\"dark\">\n    <ion-title text-center style=\"font-weight: bold;\">Login</ion-title>\n  </ion-toolbar> -->\n</ion-header>\n\n<ion-content >\n  <div class=\"bg-image\"></div>\n  <div class=\"bg-text\">\n  <div class = \"styleInput\">\n  <form [formGroup]=\"credentialsForm\" (ngSubmit)=\"onSubmit()\">\n    <img src=\"/assets/PreetiLogo.png\" style=\"height:100px; width: 100px\" />\n    <ion-item class = \"curved\" lines=\"none\">\n      <ion-label position=\"fixed\" style=\"font-weight: bold; font-family: Open Sans;\">Email</ion-label>\n      <input class=\"style-input\" type=\"email\" formControlName=\"email\" />\n    </ion-item>\n\n    <ion-item class = \"curved\" lines=\"none\">\n      <ion-label position=\"fixed\" style=\"font-weight: bold; font-family:Open Sans\">Password</ion-label>\n      <input class=\"style-input\" type=\"password\" formControlName=\"password\"/>\n    </ion-item>\n\n    <div class=\"loading-spinner\">\n      <ion-button size=\"small\" type=\"submit\" color=\"danger\"  (click)=\"presentLoadingWithOptions()\" [disabled]=\"!credentialsForm.valid\" style=\"color: #fff\">Login</ion-button>\n    \n    <!-- <ion-button expand=\"full\" type=\"button\"  (click)=\"presentLoadingWithOptions()\" fill=\"outline\" style=\"color: #000\">Register</ion-button> -->\n  </div>\n  </form>\n</div>\n<p style=\"color: #000; font-size: smaller; font-family: Open Sans\" tappable>Forgot Password?<br></p>\n<p style=\"color: blue;font-size: small; font-family: Open Sans\" tappable routerLink=\"/register\">REGISTER a new account now</p>\n</div>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/login/login-routing.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/login/login-routing.module.ts ***!
    \***********************************************/

  /*! exports provided: LoginPageRoutingModule */

  /***/
  function srcAppLoginLoginRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function () {
      return LoginPageRoutingModule;
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


    var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./login.page */
    "./src/app/login/login.page.ts");

    var routes = [{
      path: '',
      component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }];

    var LoginPageRoutingModule = function LoginPageRoutingModule() {
      _classCallCheck(this, LoginPageRoutingModule);
    };

    LoginPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], LoginPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/login/login.module.ts":
  /*!***************************************!*\
    !*** ./src/app/login/login.module.ts ***!
    \***************************************/

  /*! exports provided: LoginPageModule */

  /***/
  function srcAppLoginLoginModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPageModule", function () {
      return LoginPageModule;
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


    var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./login-routing.module */
    "./src/app/login/login-routing.module.ts");
    /* harmony import */


    var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./login.page */
    "./src/app/login/login.page.ts");

    var LoginPageModule = function LoginPageModule() {
      _classCallCheck(this, LoginPageModule);
    };

    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]],
      declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })], LoginPageModule);
    /***/
  },

  /***/
  "./src/app/login/login.page.scss":
  /*!***************************************!*\
    !*** ./src/app/login/login.page.scss ***!
    \***************************************/

  /*! exports provided: default */

  /***/
  function srcAppLoginLoginPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".curved {\n  width: 100%;\n  height: 6.25em;\n  border-radius: 0.625em;\n  margin-bottom: 0.625em;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.style-input {\n  max-width: 50%;\n}\n\n.bg-image {\n  /* The image used */\n  background-image: url(\"/assets/sample1.jpg\");\n  /* Add the blur effect */\n  filter: blur(8px);\n  -webkit-filter: blur(8px);\n  /* Full height */\n  height: 100%;\n  /* Center and scale the image nicely */\n  background-repeat: repeat;\n  background-size: cover;\n}\n\n.bg-text {\n  background-color: black;\n  /* Fallback color */\n  background-color: white;\n  /* Black w/opacity/see-through */\n  color: white;\n  font-weight: bold;\n  border: 3px solid #f1f1f1;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  width: 80%;\n  padding: 20px;\n  text-align: center;\n}\n\n.styleInput {\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.loading-spinner {\n  --spinner-color: gold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vQzpcXFVzZXJzXFxBdHRhaW5cXGRlc2t0b3BcXHByb2plY3RzXFxwcmV0c2FsLWFkbWluXFxhcHBhcmVsLWVjb21tZXJjZS1hZG1pbi9zcmNcXGFwcFxcbG9naW5cXGxvZ2luLnBhZ2Uuc2NzcyIsInNyYy9hcHAvbG9naW4vbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksV0FBQTtFQUNBLGNBQUE7RUFHQSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0FSOztBREdJO0VBQ0ksY0FBQTtBQ0FSOztBREVJO0VBQ0ksbUJBQUE7RUFDQSw0Q0FBQTtFQUVBLHdCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUVBLGdCQUFBO0VBQ0EsWUFBQTtFQUVBLHNDQUFBO0VBRUEseUJBQUE7RUFDQSxzQkFBQTtBQ0hSOztBREtJO0VBQ0ksdUJBQUE7RUFBOEIsbUJBQUE7RUFDOUIsdUJBQUE7RUFBeUMsZ0NBQUE7RUFDekMsWUFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0Esd0NBQUE7VUFBQSxnQ0FBQTtFQUVBLFVBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUNEUjs7QURHSTtFQUVJLGlCQUFBO0VBQ0Esa0JBQUE7QUNEUjs7QURHSTtFQUNJLHFCQUFBO0FDQVIiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICAgIC5jdXJ2ZWQge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogNi4yNWVtO1xyXG4gICAgICAgIC1tb3otYm9yZGVyLXJhZGl1czogMy4xMjVlbTtcclxuICAgICAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDMuMTI1ZW07XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMC42MjVlbTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjYyNWVtO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIFxyXG4gICAgfVxyXG4gICAgLnN0eWxlLWlucHV0e1xyXG4gICAgICAgIG1heC13aWR0aDogNTAlO1xyXG4gICAgICB9XHJcbiAgICAuYmctaW1hZ2Uge1xyXG4gICAgICAgIC8qIFRoZSBpbWFnZSB1c2VkICovXHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9zYW1wbGUxLmpwZ1wiKTtcclxuICAgICAgXHJcbiAgICAgICAgLyogQWRkIHRoZSBibHVyIGVmZmVjdCAqL1xyXG4gICAgICAgIGZpbHRlcjogYmx1cig4cHgpO1xyXG4gICAgICAgIC13ZWJraXQtZmlsdGVyOiBibHVyKDhweCk7XHJcbiAgICAgIFxyXG4gICAgICAgIC8qIEZ1bGwgaGVpZ2h0ICovXHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICBcclxuICAgICAgICAvKiBDZW50ZXIgYW5kIHNjYWxlIHRoZSBpbWFnZSBuaWNlbHkgKi9cclxuICAgICAgICAvL2JhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0O1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICB9XHJcbiAgICAuYmctdGV4dCB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsMCwwKTsgLyogRmFsbGJhY2sgY29sb3IgKi9cclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDI1NSk7IC8qIEJsYWNrIHcvb3BhY2l0eS9zZWUtdGhyb3VnaCAqL1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBib3JkZXI6IDNweCBzb2xpZCAjZjFmMWYxO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICAgICAgLy8gei1pbmRleDogMjtcclxuICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICB9XHJcbiAgICAuc3R5bGVJbnB1dCB7XHJcbiAgICAgICAgLy8gd2lkdGg6IDEwMCU7IFxyXG4gICAgICAgIG1hcmdpbi1sZWZ0OmF1dG87IFxyXG4gICAgICAgIG1hcmdpbi1yaWdodDogYXV0bzsgXHJcbiAgICB9XHJcbiAgICAubG9hZGluZy1zcGlubmVye1xyXG4gICAgICAgIC0tc3Bpbm5lci1jb2xvcjogZ29sZDtcclxuICAgIH1cclxuICAgICIsIi5jdXJ2ZWQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA2LjI1ZW07XG4gIC1tb3otYm9yZGVyLXJhZGl1czogMy4xMjVlbTtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAzLjEyNWVtO1xuICBib3JkZXItcmFkaXVzOiAwLjYyNWVtO1xuICBtYXJnaW4tYm90dG9tOiAwLjYyNWVtO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuXG4uc3R5bGUtaW5wdXQge1xuICBtYXgtd2lkdGg6IDUwJTtcbn1cblxuLmJnLWltYWdlIHtcbiAgLyogVGhlIGltYWdlIHVzZWQgKi9cbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9zYW1wbGUxLmpwZ1wiKTtcbiAgLyogQWRkIHRoZSBibHVyIGVmZmVjdCAqL1xuICBmaWx0ZXI6IGJsdXIoOHB4KTtcbiAgLXdlYmtpdC1maWx0ZXI6IGJsdXIoOHB4KTtcbiAgLyogRnVsbCBoZWlnaHQgKi9cbiAgaGVpZ2h0OiAxMDAlO1xuICAvKiBDZW50ZXIgYW5kIHNjYWxlIHRoZSBpbWFnZSBuaWNlbHkgKi9cbiAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLmJnLXRleHQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgLyogRmFsbGJhY2sgY29sb3IgKi9cbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIC8qIEJsYWNrIHcvb3BhY2l0eS9zZWUtdGhyb3VnaCAqL1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBib3JkZXI6IDNweCBzb2xpZCAjZjFmMWYxO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB3aWR0aDogODAlO1xuICBwYWRkaW5nOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5zdHlsZUlucHV0IHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cblxuLmxvYWRpbmctc3Bpbm5lciB7XG4gIC0tc3Bpbm5lci1jb2xvcjogZ29sZDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/login/login.page.ts":
  /*!*************************************!*\
    !*** ./src/app/login/login.page.ts ***!
    \*************************************/

  /*! exports provided: LoginPage */

  /***/
  function srcAppLoginLoginPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPage", function () {
      return LoginPage;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _authservice_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../authservice.service */
    "./src/app/authservice.service.ts");

    var LoginPage = /*#__PURE__*/function () {
      function LoginPage(nav, formBuilder, authService, loadingController) {
        _classCallCheck(this, LoginPage);

        this.nav = nav;
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.loadingController = loadingController;
        this.validation_messages = {
          'username': [{
            type: 'required',
            message: 'Username is required.'
          }, {
            type: 'minlength',
            message: 'Username must be at least 5 characters long.'
          }, {
            type: 'maxlength',
            message: 'Username cannot be more than 25 characters long.'
          }, {
            type: 'pattern',
            message: 'Your username must contain only numbers and letters.'
          }, {
            type: 'validUsername',
            message: 'Your username has already been taken.'
          }],
          'name': [{
            type: 'required',
            message: 'Name is required.'
          }]
        };
        this.data = null;
      }

      _createClass(LoginPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.credentialsForm = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6)]]
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          this.authService.login(this.credentialsForm.value).subscribe(); //   this.authService.getSpecialData().subscribe(res => {
          //     this.data = res['msg'];
          //     this.user_id = res['id'];
          // })
        }
      }, {
        key: "presentLoadingWithOptions",
        value: function presentLoadingWithOptions() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var loading;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.loadingController.create({
                      spinner: "bubbles",
                      duration: 800,
                      message: 'Please wait...',
                      translucent: true,
                      cssClass: 'custom-class custom-loading'
                    });

                  case 2:
                    loading = _context.sent;
                    _context.next = 5;
                    return loading.present();

                  case 5:
                    return _context.abrupt("return", _context.sent);

                  case 6:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }]);

      return LoginPage;
    }();

    LoginPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }, {
        type: _authservice_service__WEBPACK_IMPORTED_MODULE_4__["AuthserviceService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
      }];
    };

    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.page.scss */
      "./src/app/login/login.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _authservice_service__WEBPACK_IMPORTED_MODULE_4__["AuthserviceService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]])], LoginPage);
    /***/
  }
}]);
//# sourceMappingURL=login-login-module-es5.js.map
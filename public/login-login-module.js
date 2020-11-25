(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");







var routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
    }
];
var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/login/login.page.html":
/*!***************************************!*\
  !*** ./src/app/login/login.page.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <!-- <ion-toolbar>\r\n    <img src=\"/assets/preetiLogo1.png\" style=\"height:100px; width: 100px; margin-left: 45%\" />\r\n  </ion-toolbar> -->\r\n</ion-header>\r\n\r\n<ion-content >\r\n  <img src=\"/assets/PreetiLogo.png\" style=\"height:80px; width: 100px; margin-left: 40%\" />\r\n  <div class=\"bg-image\"></div>\r\n  <div class=\"bg-text\">\r\n  <div class = \"styleInput\">\r\n  <form [formGroup]=\"credentialsForm\" (ngSubmit)=\"onSubmit()\">\r\n    <div style=\"height: 100px;\"></div>\r\n    <ion-item class = \"curved\" lines=\"none\">\r\n      <ion-label position=\"fixed\" style=\"font-weight: bold; font-family: Open Sans;\">Email</ion-label>\r\n      <input class=\"style-input\" type=\"email\" formControlName=\"email\" />\r\n    </ion-item>\r\n\r\n    <ion-item class = \"curved\" lines=\"none\">\r\n      <ion-label position=\"fixed\" style=\"font-weight: bold; font-family:Open Sans\">Password</ion-label>\r\n      <input class=\"style-input\" type=\"password\" formControlName=\"password\"/>\r\n    </ion-item>\r\n\r\n    <div class=\"loading-spinner\">\r\n      <ion-button size=\"small\" type=\"submit\" color=\"danger\"  (click)=\"presentLoadingWithOptions()\" [disabled]=\"!credentialsForm.valid\" style=\"color: #fff\">Login</ion-button>\r\n    \r\n    <!-- <ion-button expand=\"full\" type=\"button\"  (click)=\"presentLoadingWithOptions()\" fill=\"outline\" style=\"color: #000\">Register</ion-button> -->\r\n  </div>\r\n  </form>\r\n</div>\r\n<p style=\"color: #fff; font-size: smaller; font-family: Open Sans\" tappable routerLink=\"/menu/reset-password\">Forgot Password? Click <br></p>\r\n<p style=\"color: #fff;font-size: small; font-family: Open Sans\" tappable routerLink=\"/menu/register\">REGISTER a new account now</p>\r\n</div>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/login/login.page.scss":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".curved {\n  width: 100%;\n  height: 6.25em;\n  border-radius: 0.625em;\n  margin-bottom: 0.625em;\n  margin-left: auto;\n  margin-right: auto; }\n\n.style-input {\n  max-width: 50%; }\n\n.bg-image {\n  /* The image used */\n  background-image: url(\"/assets/login.jpg\");\n  /* Add the blur effect */\n  filter: blur(8px);\n  -webkit-filter: blur(8px);\n  /* Full height */\n  height: 100%;\n  /* Center and scale the image nicely */\n  background-position: center;\n  background-repeat: repeat; }\n\n.bg-text {\n  background-color: black;\n  /* Fallback color */\n  background-color: rgba(0, 0, 0, 0.4);\n  /* Black w/opacity/see-through */\n  color: white;\n  font-weight: bold;\n  border: 3px solid #f1f1f1;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 80%;\n  padding: 20px;\n  text-align: center; }\n\n.styleInput {\n  margin-left: auto;\n  margin-right: auto; }\n\n.loading-spinner {\n  --spinner-color: gold; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vQzpcXFVzZXJzXFxBdHRhaW5cXGRlc2t0b3BcXHByb2plY3RzXFxhcFxcYXBwYXJlbC1lY29tbWVyY2Uvc3JjXFxhcHBcXGxvZ2luXFxsb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxXQUFXO0VBQ1gsY0FBYztFQUdkLHNCQUFzQjtFQUN0QixzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLGNBQWMsRUFBQTs7QUFFbEI7RUFDSSxtQkFBQTtFQUNBLDBDQUEwQztFQUUxQyx3QkFBQTtFQUNBLGlCQUFpQjtFQUNqQix5QkFBeUI7RUFFekIsZ0JBQUE7RUFDQSxZQUFZO0VBRVosc0NBQUE7RUFDQSwyQkFBMkI7RUFDM0IseUJBQXlCLEVBQUE7O0FBRzdCO0VBQ0ksdUJBQTRCO0VBQUUsbUJBQUE7RUFDOUIsb0NBQWlDO0VBQUUsZ0NBQUE7RUFDbkMsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1QsZ0NBQWdDO0VBRWhDLFVBQVU7RUFDVixhQUFhO0VBQ2Isa0JBQWtCLEVBQUE7O0FBRXRCO0VBRUksaUJBQWdCO0VBQ2hCLGtCQUFrQixFQUFBOztBQUV0QjtFQUNJLHFCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgICAuY3VydmVkIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDYuMjVlbTtcclxuICAgICAgICAtbW96LWJvcmRlci1yYWRpdXM6IDMuMTI1ZW07XHJcbiAgICAgICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAzLjEyNWVtO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDAuNjI1ZW07XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMC42MjVlbTtcclxuICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBcclxuICAgIH1cclxuICAgIC5zdHlsZS1pbnB1dHtcclxuICAgICAgICBtYXgtd2lkdGg6IDUwJTtcclxuICAgICAgfVxyXG4gICAgLmJnLWltYWdlIHtcclxuICAgICAgICAvKiBUaGUgaW1hZ2UgdXNlZCAqL1xyXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvbG9naW4uanBnXCIpO1xyXG4gICAgICBcclxuICAgICAgICAvKiBBZGQgdGhlIGJsdXIgZWZmZWN0ICovXHJcbiAgICAgICAgZmlsdGVyOiBibHVyKDhweCk7XHJcbiAgICAgICAgLXdlYmtpdC1maWx0ZXI6IGJsdXIoOHB4KTtcclxuICAgICAgXHJcbiAgICAgICAgLyogRnVsbCBoZWlnaHQgKi9cclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIFxyXG4gICAgICAgIC8qIENlbnRlciBhbmQgc2NhbGUgdGhlIGltYWdlIG5pY2VseSAqL1xyXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0O1xyXG4gICAgICAgIC8vIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICB9XHJcbiAgICAuYmctdGV4dCB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsMCwwKTsgLyogRmFsbGJhY2sgY29sb3IgKi9cclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNCk7IC8qIEJsYWNrIHcvb3BhY2l0eS9zZWUtdGhyb3VnaCAqL1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBib3JkZXI6IDNweCBzb2xpZCAjZjFmMWYxO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICAgICAgLy8gei1pbmRleDogMjtcclxuICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICB9XHJcbiAgICAuc3R5bGVJbnB1dCB7XHJcbiAgICAgICAgLy8gd2lkdGg6IDEwMCU7IFxyXG4gICAgICAgIG1hcmdpbi1sZWZ0OmF1dG87IFxyXG4gICAgICAgIG1hcmdpbi1yaWdodDogYXV0bzsgXHJcbiAgICB9XHJcbiAgICAubG9hZGluZy1zcGlubmVye1xyXG4gICAgICAgIC0tc3Bpbm5lci1jb2xvcjogZ29sZDtcclxuICAgIH1cclxuICAgICJdfQ== */"

/***/ }),

/***/ "./src/app/login/login.page.ts":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





var LoginPage = /** @class */ (function () {
    //contactForm: FormGroup;
    function LoginPage(nav, formBuilder, authService, loadingController) {
        this.nav = nav;
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.loadingController = loadingController;
        this.validation_messages = {
            'username': [
                { type: 'required', message: 'Username is required.' },
                { type: 'minlength', message: 'Username must be at least 5 characters long.' },
                { type: 'maxlength', message: 'Username cannot be more than 25 characters long.' },
                { type: 'pattern', message: 'Your username must contain only numbers and letters.' },
                { type: 'validUsername', message: 'Your username has already been taken.' }
            ],
            'name': [
                { type: 'required', message: 'Name is required.' }
            ],
        };
        this.data = null;
    }
    LoginPage.prototype.ngOnInit = function () {
        this.credentialsForm = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]]
        });
    };
    LoginPage.prototype.onSubmit = function () {
        this.authService.login(this.credentialsForm.value).subscribe();
        //   this.authService.getSpecialData().subscribe(res => {
        //     this.data = res['msg'];
        //     this.user_id = res['id'];
        // })
    };
    LoginPage.prototype.presentLoadingWithOptions = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            spinner: "bubbles",
                            duration: 800,
                            message: 'Please wait...',
                            translucent: true,
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
    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.page.html */ "./src/app/login/login.page.html"),
            styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/login/login.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=login-login-module.js.map
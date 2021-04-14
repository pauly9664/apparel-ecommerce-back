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

module.exports = ".curved {\n  width: 100%;\n  height: 6.25em;\n  border-radius: 0.625em;\n  margin-bottom: 0.625em;\n  margin-left: auto;\n  margin-right: auto; }\n\n.style-input {\n  max-width: 50%; }\n\n.bg-image {\n  /* The image used */\n  background-image: url(\"/assets/login.jpg\");\n  /* Add the blur effect */\n  filter: blur(8px);\n  -webkit-filter: blur(8px);\n  /* Full height */\n  height: 100%;\n  /* Center and scale the image nicely */\n  background-position: center;\n  background-repeat: repeat; }\n\n.bg-text {\n  background-color: black;\n  /* Fallback color */\n  background-color: rgba(0, 0, 0, 0.4);\n  /* Black w/opacity/see-through */\n  color: white;\n  font-weight: bold;\n  border: 3px solid #f1f1f1;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 80%;\n  padding: 20px;\n  text-align: center; }\n\n.styleInput {\n  margin-left: auto;\n  margin-right: auto; }\n\n.loading-spinner {\n  --spinner-color: gold; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vQzpcXFVzZXJzXFxBdHRhaW5cXERlc2t0b3BcXFByb2plY3RzXFxhcHBhcmVsLWVjb21tZXJjZS9zcmNcXGFwcFxcbG9naW5cXGxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLFdBQVc7RUFDWCxjQUFjO0VBR2Qsc0JBQXNCO0VBQ3RCLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksY0FBYyxFQUFBOztBQUVsQjtFQUNJLG1CQUFBO0VBQ0EsMENBQTBDO0VBRTFDLHdCQUFBO0VBQ0EsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUV6QixnQkFBQTtFQUNBLFlBQVk7RUFFWixzQ0FBQTtFQUNBLDJCQUEyQjtFQUMzQix5QkFBeUIsRUFBQTs7QUFHN0I7RUFDSSx1QkFBNEI7RUFBRSxtQkFBQTtFQUM5QixvQ0FBaUM7RUFBRSxnQ0FBQTtFQUNuQyxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCxnQ0FBZ0M7RUFFaEMsVUFBVTtFQUNWLGFBQWE7RUFDYixrQkFBa0IsRUFBQTs7QUFFdEI7RUFFSSxpQkFBZ0I7RUFDaEIsa0JBQWtCLEVBQUE7O0FBRXRCO0VBQ0kscUJBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICAgIC5jdXJ2ZWQge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogNi4yNWVtO1xyXG4gICAgICAgIC1tb3otYm9yZGVyLXJhZGl1czogMy4xMjVlbTtcclxuICAgICAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDMuMTI1ZW07XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMC42MjVlbTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjYyNWVtO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIFxyXG4gICAgfVxyXG4gICAgLnN0eWxlLWlucHV0e1xyXG4gICAgICAgIG1heC13aWR0aDogNTAlO1xyXG4gICAgICB9XHJcbiAgICAuYmctaW1hZ2Uge1xyXG4gICAgICAgIC8qIFRoZSBpbWFnZSB1c2VkICovXHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9sb2dpbi5qcGdcIik7XHJcbiAgICAgIFxyXG4gICAgICAgIC8qIEFkZCB0aGUgYmx1ciBlZmZlY3QgKi9cclxuICAgICAgICBmaWx0ZXI6IGJsdXIoOHB4KTtcclxuICAgICAgICAtd2Via2l0LWZpbHRlcjogYmx1cig4cHgpO1xyXG4gICAgICBcclxuICAgICAgICAvKiBGdWxsIGhlaWdodCAqL1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgXHJcbiAgICAgICAgLyogQ2VudGVyIGFuZCBzY2FsZSB0aGUgaW1hZ2UgbmljZWx5ICovXHJcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQ7XHJcbiAgICAgICAgLy8gYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIH1cclxuICAgIC5iZy10ZXh0IHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwwLDApOyAvKiBGYWxsYmFjayBjb2xvciAqL1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC40KTsgLyogQmxhY2sgdy9vcGFjaXR5L3NlZS10aHJvdWdoICovXHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGJvcmRlcjogM3B4IHNvbGlkICNmMWYxZjE7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgICAgICAvLyB6LWluZGV4OiAyO1xyXG4gICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgcGFkZGluZzogMjBweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIH1cclxuICAgIC5zdHlsZUlucHV0IHtcclxuICAgICAgICAvLyB3aWR0aDogMTAwJTsgXHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6YXV0bzsgXHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvOyBcclxuICAgIH1cclxuICAgIC5sb2FkaW5nLXNwaW5uZXJ7XHJcbiAgICAgICAgLS1zcGlubmVyLWNvbG9yOiBnb2xkO1xyXG4gICAgfVxyXG4gICAgIl19 */"

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
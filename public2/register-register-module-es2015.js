(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["register-register-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <ion-header>\n  <ion-toolbar>\n    <ion-title>register</ion-title>\n  </ion-toolbar>\n</ion-header> -->\n\n<ion-content>\n  <img src=\"/assets/PreetiLogo.png\" style=\"height:80px; width: 100px; margin-left: 40%;\" />\n  <div class=\"bg-image\"></div>\n  <div class=\"bg-text\">\n  <div class=\"styleInput\">\n    <form [formGroup]=\"credentialsForm\" (ngSubmit)=\"register()\" >\n      <ion-item class=\"curved\" lines=\"none\">\n        <ion-label position=\"fixed\" style=\"font-weight: bold;font-family: Open Sans\">Names</ion-label>\n        <input class=\"style-input\" type=\"text\" formControlName=\"names\" id=\"names\"/>    \n      </ion-item>\n      <ion-item *ngIf=\"!credentialsForm.controls.names.valid && credentialsForm.controls.number.dirty\" lines=\"none\">\n        <p style=\"font-size: 0.8em;color:red\">Please enter a valid Username.</p>\n    </ion-item>\n\n      <ion-item class=\"curved\" lines=\"none\">\n        <ion-label position=\"fixed\" style=\"font-weight: bold;font-family: Open Sans\">Phone Number <span style=\"font-size:0.8em\"></span>e.g<span style=\"color: pink; font-size:0.8em\"> 07XXXXXXXX</span>)</ion-label>\n        <input class=\"style-input\" type=\"tel\" formControlName=\"number\" [class.invalid]=\"!credentialsForm.controls.number.valid && credentialsForm.controls.number.dirty\"/>\n      </ion-item>\n      <ion-item lines=\"none\" *ngIf=\"!credentialsForm.controls.number.valid && credentialsForm.controls.number.dirty \">\n        <p style=\"font-size: 0.8em;color:red\">Please enter a valid phone number(Should be 10 characters)</p>\n    </ion-item>\n\n      <ion-item class=\"curved\" lines=\"none\">\n        <ion-label position=\"fixed\" style=\"font-weight: bold; font-family: Open Sans\">Email</ion-label>\n        <input class=\"style-input\" type=\"email\" formControlName=\"email\"/>\n      </ion-item>\n      <ion-item lines=\"none\" *ngIf=\"!credentialsForm.controls.email.valid && credentialsForm.controls.number.dirty \">\n        <p style=\"font-size: 0.8em;color:red\">Please enter a valid email address.</p>\n    </ion-item>\n\n      <ion-item class=\"curved\"lines=\"none\" >\n        <ion-label position=\"fixed\" style=\"font-weight: bold;font-family: Open Sans\">Password</ion-label>\n        <input class=\"style-input\" type=\"password\" formControlName=\"password\"/>\n      </ion-item>\n      <ion-item lines=\"none\" *ngIf=\"!credentialsForm.controls.password.valid && credentialsForm.controls.number.dirty \">\n        <p style=\"font-size: 0.8em;color:red\">Your password is too weak.</p>\n    </ion-item>\n\n      <ion-button size=\"small\" color=\"success\" style=\"color: #fff;\" [disabled]=\"!credentialsForm.valid\" (click)=\"register()\" >Register\n      </ion-button>\n    </form>\n  </div>\n  <p style=\"color: #fff;font-family: Open Sans; font-size: small;\" tappable routerLink=\"/menu/login\">Already have an account? LOGIN</p>\n</div>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/register/register-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/register/register-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: RegisterPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageRoutingModule", function() { return RegisterPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register.page */ "./src/app/register/register.page.ts");




const routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_3__["RegisterPage"]
    }
];
let RegisterPageRoutingModule = class RegisterPageRoutingModule {
};
RegisterPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RegisterPageRoutingModule);



/***/ }),

/***/ "./src/app/register/register.module.ts":
/*!*********************************************!*\
  !*** ./src/app/register/register.module.ts ***!
  \*********************************************/
/*! exports provided: RegisterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _register_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register-routing.module */ "./src/app/register/register-routing.module.ts");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register.page */ "./src/app/register/register.page.ts");







let RegisterPageModule = class RegisterPageModule {
};
RegisterPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _register_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegisterPageRoutingModule"]
        ],
        declarations: [_register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]]
    })
], RegisterPageModule);



/***/ }),

/***/ "./src/app/register/register.page.scss":
/*!*********************************************!*\
  !*** ./src/app/register/register.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".curved {\n  width: 100%;\n}\n\n.styleInput {\n  width: 100%;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.bg-image {\n  /* The image used */\n  /* Add the blur effect */\n  /* Full height */\n  height: 100%;\n  /* Center and scale the image nicely */\n  background-repeat: repeat;\n  background-size: cover;\n}\n\n.style-input {\n  max-width: 50%;\n}\n\n.bg-text {\n  background-color: black;\n  /* Fallback color */\n  background-color: rgba(0, 0, 0, 0.4);\n  /* Black w/opacity/see-through */\n  color: white;\n  font-weight: bold;\n  border: 3px solid #f1f1f1;\n  position: absolute;\n  top: 60%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  z-index: 2;\n  width: 80%;\n  padding: 20px;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvQzpcXFVzZXJzXFxBdHRhaW5cXERlc2t0b3BcXFByb2plY3RzXFxwcmV0c2FsLWFkbWluXFxhcHBhcmVsLWVjb21tZXJjZS1hZG1pbi9zcmNcXGFwcFxccmVnaXN0ZXJcXHJlZ2lzdGVyLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksV0FBQTtBQ0FSOztBRE9JO0VBQ0ksV0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNKUjs7QURNSTtFQUNJLG1CQUFBO0VBR0Esd0JBQUE7RUFJQSxnQkFBQTtFQUNBLFlBQUE7RUFFQSxzQ0FBQTtFQUVBLHlCQUFBO0VBQ0Esc0JBQUE7QUNWUjs7QURZSTtFQUNJLGNBQUE7QUNUUjs7QURXSTtFQUNJLHVCQUFBO0VBQThCLG1CQUFBO0VBQzlCLG9DQUFBO0VBQW1DLGdDQUFBO0VBQ25DLFlBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLHdDQUFBO1VBQUEsZ0NBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQ05SIiwiZmlsZSI6InNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgICAuY3VydmVkIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAvLyBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgICAgIC8vIC1tb3otYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgICAgICAvLyAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICAgICAgLy9ib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgLy8gICAgbWFyZ2luLWJvdHRvbTogMC42ZW07ICBcclxuICAgIH1cclxuICAgIC5zdHlsZUlucHV0IHtcclxuICAgICAgICB3aWR0aDogMTAwJTsgXHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6YXV0bzsgXHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvOyBcclxuICAgIH1cclxuICAgIC5iZy1pbWFnZSB7XHJcbiAgICAgICAgLyogVGhlIGltYWdlIHVzZWQgKi9cclxuICAgICAgICAvLyBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL3NhbXBsZTEuanBnXCIpO1xyXG4gICAgICBcclxuICAgICAgICAvKiBBZGQgdGhlIGJsdXIgZWZmZWN0ICovXHJcbiAgICAgICAgLy8gZmlsdGVyOiBibHVyKDhweCk7XHJcbiAgICAgICAgLy8gLXdlYmtpdC1maWx0ZXI6IGJsdXIoOHB4KTtcclxuICAgICAgXHJcbiAgICAgICAgLyogRnVsbCBoZWlnaHQgKi9cclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIFxyXG4gICAgICAgIC8qIENlbnRlciBhbmQgc2NhbGUgdGhlIGltYWdlIG5pY2VseSAqL1xyXG4gICAgICAgIC8vYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIH1cclxuICAgIC5zdHlsZS1pbnB1dHtcclxuICAgICAgICBtYXgtd2lkdGg6IDUwJTtcclxuICAgICAgfVxyXG4gICAgLmJnLXRleHQge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLDAsMCk7IC8qIEZhbGxiYWNrIGNvbG9yICovXHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjQpOyAvKiBCbGFjayB3L29wYWNpdHkvc2VlLXRocm91Z2ggKi9cclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgYm9yZGVyOiAzcHggc29saWQgI2YxZjFmMTtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiA2MCU7XHJcbiAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgICAgIHotaW5kZXg6IDI7XHJcbiAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgfVxyXG4gICAgIiwiLmN1cnZlZCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uc3R5bGVJbnB1dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuXG4uYmctaW1hZ2Uge1xuICAvKiBUaGUgaW1hZ2UgdXNlZCAqL1xuICAvKiBBZGQgdGhlIGJsdXIgZWZmZWN0ICovXG4gIC8qIEZ1bGwgaGVpZ2h0ICovXG4gIGhlaWdodDogMTAwJTtcbiAgLyogQ2VudGVyIGFuZCBzY2FsZSB0aGUgaW1hZ2UgbmljZWx5ICovXG4gIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbi5zdHlsZS1pbnB1dCB7XG4gIG1heC13aWR0aDogNTAlO1xufVxuXG4uYmctdGV4dCB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAvKiBGYWxsYmFjayBjb2xvciAqL1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gIC8qIEJsYWNrIHcvb3BhY2l0eS9zZWUtdGhyb3VnaCAqL1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBib3JkZXI6IDNweCBzb2xpZCAjZjFmMWYxO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNjAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB6LWluZGV4OiAyO1xuICB3aWR0aDogODAlO1xuICBwYWRkaW5nOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */");

/***/ }),

/***/ "./src/app/register/register.page.ts":
/*!*******************************************!*\
  !*** ./src/app/register/register.page.ts ***!
  \*******************************************/
/*! exports provided: RegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPage", function() { return RegisterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _authservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../authservice.service */ "./src/app/authservice.service.ts");




let RegisterPage = class RegisterPage {
    constructor(formBuilder, authService) {
        this.formBuilder = formBuilder;
        this.authService = authService;
    }
    ngOnInit() {
        this.credentialsForm = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]],
            names: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[a-zA-Z ]*')]],
            number: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(10)]]
        });
    }
    register() {
        this.authService.register(this.credentialsForm.value).subscribe(res => {
            //   //Call Login to automaticallyy login new user
            this.authService.login(this.credentialsForm.value).subscribe();
        });
    }
};
RegisterPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _authservice_service__WEBPACK_IMPORTED_MODULE_3__["AuthserviceService"] }
];
RegisterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./register.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./register.page.scss */ "./src/app/register/register.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _authservice_service__WEBPACK_IMPORTED_MODULE_3__["AuthserviceService"]])
], RegisterPage);



/***/ })

}]);
//# sourceMappingURL=register-register-module-es2015.js.map
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["register-register-module"],{

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register.page */ "./src/app/register/register.page.ts");







var routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]
    }
];
var RegisterPageModule = /** @class */ (function () {
    function RegisterPageModule() {
    }
    RegisterPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]]
        })
    ], RegisterPageModule);
    return RegisterPageModule;
}());



/***/ }),

/***/ "./src/app/register/register.page.html":
/*!*********************************************!*\
  !*** ./src/app/register/register.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <!-- <ion-toolbar color=\"dark\">\r\n    <ion-title text-center style=\"font-weight: bold;\">Register</ion-title>\r\n  </ion-toolbar> -->\r\n</ion-header>\r\n\r\n<ion-content padding>\r\n  <img src=\"/assets/PreetiLogo.png\" style=\"height:80px; width: 100px; margin-left: 40%;\" />\r\n  <div class=\"bg-image\"></div>\r\n  <div class=\"bg-text\">\r\n  <div class=\"styleInput\">\r\n    <form [formGroup]=\"credentialsForm\" (ngSubmit)=\"register()\" >\r\n      <ion-item class=\"curved\" lines=\"none\">\r\n        <ion-label position=\"fixed\" style=\"font-weight: bold;font-family: Open Sans\">Names</ion-label>\r\n        <input class=\"style-input\" type=\"text\" formControlName=\"names\" id=\"names\"/>    \r\n      </ion-item>\r\n      <ion-item *ngIf=\"!credentialsForm.controls.names.valid && credentialsForm.controls.number.dirty\" lines=\"none\">\r\n        <p style=\"font-size: 0.8em;color:red\">Please enter a valid Username.</p>\r\n    </ion-item>\r\n\r\n      <ion-item class=\"curved\" lines=\"none\">\r\n        <ion-label position=\"fixed\" style=\"font-weight: bold;font-family: Open Sans\">Phone Number <span style=\"font-size:0.8em\"></span>e.g<span style=\"color: pink; font-size:0.8em\"> 07XXXXXXXX</span>)</ion-label>\r\n        <input class=\"style-input\" type=\"tel\" formControlName=\"number\" [class.invalid]=\"!credentialsForm.controls.number.valid && credentialsForm.controls.number.dirty\"/>\r\n      </ion-item>\r\n      <ion-item lines=\"none\" *ngIf=\"!credentialsForm.controls.number.valid && credentialsForm.controls.number.dirty \">\r\n        <p style=\"font-size: 0.8em;color:red\">Please enter a valid phone number(Should be 10 characters)</p>\r\n    </ion-item>\r\n\r\n      <ion-item class=\"curved\" lines=\"none\">\r\n        <ion-label position=\"fixed\" style=\"font-weight: bold; font-family: Open Sans\">Email</ion-label>\r\n        <input class=\"style-input\" type=\"email\" formControlName=\"email\"/>\r\n      </ion-item>\r\n      <ion-item lines=\"none\" *ngIf=\"!credentialsForm.controls.email.valid && credentialsForm.controls.number.dirty \">\r\n        <p style=\"font-size: 0.8em;color:red\">Please enter a valid email address.</p>\r\n    </ion-item>\r\n\r\n      <ion-item class=\"curved\"lines=\"none\" >\r\n        <ion-label position=\"fixed\" style=\"font-weight: bold;font-family: Open Sans\">Password</ion-label>\r\n        <input class=\"style-input\" type=\"password\" formControlName=\"password\"/>\r\n      </ion-item>\r\n      <ion-item lines=\"none\" *ngIf=\"!credentialsForm.controls.password.valid && credentialsForm.controls.number.dirty \">\r\n        <p style=\"font-size: 0.8em;color:red\">Your password is too weak.</p>\r\n    </ion-item>\r\n\r\n      <ion-button size=\"small\" color=\"success\" style=\"color: #fff;\" [disabled]=\"!credentialsForm.valid\" (click)=\"register()\" >Register\r\n      </ion-button>\r\n    </form>\r\n  </div>\r\n  <p style=\"color: #fff;font-family: Open Sans; font-size: small;\" tappable routerLink=\"/menu/login\">Already have an account? LOGIN</p>\r\n</div>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/register/register.page.scss":
/*!*********************************************!*\
  !*** ./src/app/register/register.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".curved {\n  width: 100%; }\n\n.styleInput {\n  width: 100%;\n  margin-left: auto;\n  margin-right: auto; }\n\n.bg-image {\n  /* The image used */\n  background-image: url(\"/assets/register3.jpg\");\n  /* Add the blur effect */\n  filter: blur(8px);\n  -webkit-filter: blur(8px);\n  /* Full height */\n  height: 100%;\n  /* Center and scale the image nicely */\n  background-position: center; }\n\n.style-input {\n  max-width: 50%; }\n\n.bg-text {\n  background-color: black;\n  /* Fallback color */\n  background-color: rgba(0, 0, 0, 0.4);\n  /* Black w/opacity/see-through */\n  color: white;\n  font-weight: bold;\n  border: 3px solid #f1f1f1;\n  position: absolute;\n  top: 60%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 2;\n  width: 80%;\n  padding: 20px;\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvQzpcXFVzZXJzXFxBdHRhaW5cXGRlc2t0b3BcXHByb2plY3RzXFxhcFxcYXBwYXJlbC1lY29tbWVyY2Uvc3JjXFxhcHBcXHJlZ2lzdGVyXFxyZWdpc3Rlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxXQUFXLEVBQUE7O0FBT2Y7RUFDSSxXQUFXO0VBQ1gsaUJBQWdCO0VBQ2hCLGtCQUFrQixFQUFBOztBQUV0QjtFQUNJLG1CQUFBO0VBQ0EsOENBQThDO0VBRTlDLHdCQUFBO0VBQ0EsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUV6QixnQkFBQTtFQUNBLFlBQVk7RUFFWixzQ0FBQTtFQUNBLDJCQUEyQixFQUFBOztBQUkvQjtFQUNJLGNBQWMsRUFBQTs7QUFFbEI7RUFDSSx1QkFBNEI7RUFBRSxtQkFBQTtFQUM5QixvQ0FBaUM7RUFBRSxnQ0FBQTtFQUNuQyxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCxnQ0FBZ0M7RUFDaEMsVUFBVTtFQUNWLFVBQVU7RUFDVixhQUFhO0VBQ2Isa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9yZWdpc3Rlci9yZWdpc3Rlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICAgIC5jdXJ2ZWQge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIC8vIGhlaWdodDogMTAwcHg7XHJcbiAgICAgICAgLy8gLW1vei1ib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgICAgIC8vIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgICAgICAvL2JvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAvLyAgICBtYXJnaW4tYm90dG9tOiAwLjZlbTsgIFxyXG4gICAgfVxyXG4gICAgLnN0eWxlSW5wdXQge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlOyBcclxuICAgICAgICBtYXJnaW4tbGVmdDphdXRvOyBcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87IFxyXG4gICAgfVxyXG4gICAgLmJnLWltYWdlIHtcclxuICAgICAgICAvKiBUaGUgaW1hZ2UgdXNlZCAqL1xyXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvcmVnaXN0ZXIzLmpwZ1wiKTtcclxuICAgICAgXHJcbiAgICAgICAgLyogQWRkIHRoZSBibHVyIGVmZmVjdCAqL1xyXG4gICAgICAgIGZpbHRlcjogYmx1cig4cHgpO1xyXG4gICAgICAgIC13ZWJraXQtZmlsdGVyOiBibHVyKDhweCk7XHJcbiAgICAgIFxyXG4gICAgICAgIC8qIEZ1bGwgaGVpZ2h0ICovXHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICBcclxuICAgICAgICAvKiBDZW50ZXIgYW5kIHNjYWxlIHRoZSBpbWFnZSBuaWNlbHkgKi9cclxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICAgICAgLy8gYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdDtcclxuICAgICAgICAvLyBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgfVxyXG4gICAgLnN0eWxlLWlucHV0e1xyXG4gICAgICAgIG1heC13aWR0aDogNTAlO1xyXG4gICAgICB9XHJcbiAgICAuYmctdGV4dCB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsMCwwKTsgLyogRmFsbGJhY2sgY29sb3IgKi9cclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNCk7IC8qIEJsYWNrIHcvb3BhY2l0eS9zZWUtdGhyb3VnaCAqL1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBib3JkZXI6IDNweCBzb2xpZCAjZjFmMWYxO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDYwJTtcclxuICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICAgICAgei1pbmRleDogMjtcclxuICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICB9XHJcbiAgICAiXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _validators_Number__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../validators/Number */ "./src/app/validators/Number.ts");





var RegisterPage = /** @class */ (function () {
    function RegisterPage(formBuilder, authService) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.validation_messages = {
            'names': [
                { type: 'required', message: 'Username is required.' },
                { type: 'minlength', message: 'Username must be at least 5 characters long.' },
            ],
        };
    }
    RegisterPage.prototype.ngOnInit = function () {
        this.credentialsForm = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]],
            names: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[a-zA-Z ]*')]],
            number: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(10), _validators_Number__WEBPACK_IMPORTED_MODULE_4__["NumberValidator"].isValid]]
        });
    };
    RegisterPage.prototype.register = function () {
        var _this = this;
        this.authService.register(this.credentialsForm.value).subscribe(function (res) {
            //   //Call Login to automaticallyy login new user
            _this.authService.login(_this.credentialsForm.value).subscribe();
        });
    };
    RegisterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.page.html */ "./src/app/register/register.page.html"),
            styles: [__webpack_require__(/*! ./register.page.scss */ "./src/app/register/register.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], RegisterPage);
    return RegisterPage;
}());



/***/ }),

/***/ "./src/app/validators/Number.ts":
/*!**************************************!*\
  !*** ./src/app/validators/Number.ts ***!
  \**************************************/
/*! exports provided: NumberValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumberValidator", function() { return NumberValidator; });
var NumberValidator = /** @class */ (function () {
    function NumberValidator() {
    }
    NumberValidator.isValid = function (control) {
        if (isNaN(control.value)) {
            return {
                "not a number": true
            };
        }
    };
    return NumberValidator;
}());



/***/ })

}]);
//# sourceMappingURL=register-register-module.js.map
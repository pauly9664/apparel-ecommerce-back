(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["contact-contact-module"],{

/***/ "./src/app/contact.service.ts":
/*!************************************!*\
  !*** ./src/app/contact.service.ts ***!
  \************************************/
/*! exports provided: ContactService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactService", function() { return ContactService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");


//import { HttpClient } from 'selenium-webdriver/http';
//import { Injectable } from '@angular/core';





var ContactService = /** @class */ (function () {
    function ContactService(http, alertController, plt) {
        this.http = http;
        this.alertController = alertController;
        this.plt = plt;
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].url;
        this.authenticator = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"](false);
        this.contact = null;
    }
    // register(credentials) {
    //   return this.http.post(`${this.url}/api/register`, credentials).pipe(
    //     catchError(e => {
    //       this.showAlert(e.error.msg);
    //       throw new Error(e);
    //     })
    //   );
    // }
    // tokenizer(){
    //    this.authenticator.next(false);
    // }
    ContactService.prototype.saveFeedback = function (contact) {
        var _this = this;
        return this.http.post('/api/contact', contact)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (e) {
            _this.showAlert('Error');
            _this.authenticator.next(false);
            throw new Error(e);
        }));
    };
    ContactService.prototype.showAlert = function (msg) {
        var alert = this.alertController.create({
            message: msg,
            header: 'Error, Please try again',
            buttons: ['OK']
        });
        alert.then(function (alert) { return alert.present(); });
    };
    ContactService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]])
    ], ContactService);
    return ContactService;
}());



/***/ }),

/***/ "./src/app/contact/contact.module.ts":
/*!*******************************************!*\
  !*** ./src/app/contact/contact.module.ts ***!
  \*******************************************/
/*! exports provided: ContactPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactPageModule", function() { return ContactPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _contact_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contact.page */ "./src/app/contact/contact.page.ts");







var ContactPageModule = /** @class */ (function () {
    function ContactPageModule() {
    }
    ContactPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _contact_page__WEBPACK_IMPORTED_MODULE_6__["ContactPage"] }])
            ],
            declarations: [_contact_page__WEBPACK_IMPORTED_MODULE_6__["ContactPage"]]
        })
    ], ContactPageModule);
    return ContactPageModule;
}());



/***/ }),

/***/ "./src/app/contact/contact.page.html":
/*!*******************************************!*\
  !*** ./src/app/contact/contact.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title text-center>\r\n      Contact\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n    <div class=\"bg-image\"></div>\r\n    <div class=\"bg-text\">\r\n        <ion-grid fixed>\r\n            <ion-row>\r\n            <ion-col size-sm=\"6\" size-md=\"6\">\r\n                    <form [formGroup]=\"contactForm\" (ngSubmit)=\"onReply()\">\r\n                <div class= \"diagonal3\">\r\n                  <div class=\"inside\">\r\n                  <ion-list>\r\n                    <ion-item class=\"staythere\" lines=\"none\">\r\n                      <ion-label position=\"fixed\" style=\"font-family: Open Sans; font-weight: bold;\">Name...</ion-label>\r\n                      <input class=\"style-input\" type=\"text\" formControlName=\"name\"/>\r\n                    </ion-item>\r\n          \r\n                    <ion-item class=\"staythere\" lines=\"none\">\r\n                      <ion-label position=\"fixed\" style=\"font-family: Open Sans; font-weight: bold\">Number.. </ion-label>\r\n                      <input class=\"style-input\"type=\"tel\" formControlName=\"cell\"/>\r\n                    </ion-item>\r\n          \r\n                    <ion-item class=\"staythere\" lines=\"none\">\r\n                      <ion-label position=\"fixed\" style=\"font-family: Open Sans;font-weight: bold\">Feedback..</ion-label>\r\n                      <input class=\"style-input\" type=\"text\" formControlName=\"feedback\"/>\r\n                    </ion-item>\r\n                  </ion-list>\r\n                <ion-button color=\"danger\"  (click)=\"onReply()\" (click)=\"feedbackSent()\" type=\"button\" style=\"color: white\"size=\"default\">Submit</ion-button>\r\n              </div>\r\n            </div>\r\n              </form>\r\n            </ion-col>  \r\n           <ion-col size-md=\"6\" size-sm=\"6\">\r\n              <div class= \"diagonal3\">\r\n                  <div class=\"inside\">\r\n                  <!-- <div class=\"details\"> -->\r\n                  <!-- <h3 text-left style=\"padding-right: 28px;\">Contact us.. <br></h3> -->\r\n                <!-- </div> -->\r\n                  <div class=\"align-left\">\r\n                    <ion-icon name=\"logo-facebook\" style=\"font-size:2em\"></ion-icon>\r\n                    <ion-icon name=\"logo-instagram\" style=\"font-size: 2em\"></ion-icon>\r\n                    <ion-icon name=\"logo-pinterest\" style=\"font-size: 2em\"></ion-icon>\r\n                    \r\n                    <p> Telephone Lines: 0737200842, 0722932275</p>  \r\n                  </div>\r\n                  </div>\r\n                  </div>\r\n           </ion-col>\r\n         </ion-row> \r\n      </ion-grid>\r\n      </div>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/contact/contact.page.scss":
/*!*******************************************!*\
  !*** ./src/app/contact/contact.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".style-input {\n  max-width: 50%; }\n\n.bg-image {\n  /* The image used */\n  background-image: url(\"/assets/contact_us2.jpg\");\n  /* Add the blur effect */\n  filter: blur(8px);\n  -webkit-filter: blur(8px);\n  /* Full height */\n  height: 100%;\n  /* Center and scale the image nicely */ }\n\n.staythere {\n  color: #000; }\n\n/* Position text in the middle of the page/image */\n\n.bg-text {\n  background-color: black;\n  /* Fallback color */\n  background-color: rgba(0, 0, 0, 0.4);\n  /* Black w/opacity/see-through */\n  color: white;\n  font-weight: bold;\n  border: 3px solid #f1f1f1;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 2;\n  width: 80%;\n  padding: 20px;\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC9DOlxcVXNlcnNcXEF0dGFpblxcZGVza3RvcFxccHJvamVjdHNcXGFwXFxhcHBhcmVsLWVjb21tZXJjZS9zcmNcXGFwcFxcY29udGFjdFxcY29udGFjdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUhBO0VBQ0UsY0FBYyxFQUFBOztBQUVoQjtFQUNFLG1CQUFBO0VBQ0EsZ0RBQWdEO0VBRWhELHdCQUFBO0VBQ0EsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUV6QixnQkFBQTtFQUNBLFlBQVk7RUFFWixzQ0FBQSxFQUF1Qzs7QUFLekM7RUFDRSxXQUFXLEVBQUE7O0FBR2Isa0RBQUE7O0FBQ0E7RUFDRSx1QkFBNEI7RUFBRSxtQkFBQTtFQUM5QixvQ0FBa0M7RUFBRSxnQ0FBQTtFQUNwQyxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCxnQ0FBZ0M7RUFDaEMsVUFBVTtFQUNWLFVBQVU7RUFDVixhQUFhO0VBQ2Isa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb250YWN0L2NvbnRhY3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gLmNvbnRhaW5lcntcclxuLy8gICBvdmVyZmxvdzogZml4ZWQ7XHJcbi8vIH1cclxuXHJcbi8vIC5zdGF5dGhlcmUge1xyXG4vLyAgICAgd2lkdGg6IDEwMCU7XHJcbi8vICAgICBoZWlnaHQ6IDZlbTtcclxuLy8gICAgIC1tb3otYm9yZGVyLXJhZGl1czogM2VtO1xyXG4vLyAgICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAzZW07XHJcbi8vICAgICBib3JkZXItcmFkaXVzOiAxLjZlbTtcclxuLy8gICAgIG1hcmdpbi1ib3R0b206IDEuNmVtOyAgXHJcbi8vIH1cclxuLy8gLmFsaWduLWNlbnRlciB7XHJcbi8vICAgICB3aWR0aDogMTguNzVlbTtcclxuLy8gICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4vLyAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4vLyB9XHJcblxyXG4vLyAjZ3JleSB7XHJcbi8vICAgICB3aWR0aDogNjBlbTtcclxuLy8gICAgIGhlaWdodDogMTIuNWVtO1xyXG4vLyAgICAgYmFja2dyb3VuZDogI2NjYztcclxuLy8gICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuLy8gICAgIG1hcmdpbi10b3A6IDAuOGVtO1xyXG4vLyAgIH1cclxuICAvLyBkaXYuZGlhZ29uYWwzOmJlZm9yZSB7XHJcbiAgLy8gICBjb250ZW50OiAnJztcclxuICAvLyAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAvLyAgIHRvcDogMDtcclxuICAvLyAgIGxlZnQ6IDA7XHJcbiAgLy8gICBib3JkZXItdG9wOiA1ZW0gc29saWQgd2hpdGVzbW9rZTtcclxuICAvLyAgIGJvcmRlci1yaWdodDogNWVtIHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIC8vICAgd2lkdGg6IDA7XHJcbiAgLy8gICAgei1pbmRleDogMTtcclxuICAvLyB9XHJcbiAgLy8gZGl2LmRpYWdvbmFsIHtcclxuICAvLyAgIGJhY2tncm91bmQ6ICNkYTFkMDA7XHJcbiAgLy8gICBjb2xvcjogI2ZmZjtcclxuICAvLyAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gIC8vICAgd2lkdGg6IDMwMHB4O1xyXG4gIC8vICAgaGVpZ2h0OiAzMDBweDtcclxuICAvLyAgIHBhZGRpbmc6IDcwcHg7XHJcbiAgLy8gICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgLy8gICBtYXJnaW46IDMwcHg7XHJcbiAgLy8gICBmbG9hdDogbGVmdDtcclxuICAvLyB9XHJcbiAgXHJcbiAgLy8gZGl2LmRpYWdvbmFsMiB7XHJcbiAgLy8gICBiYWNrZ3JvdW5kOiAjZGExZDAwO1xyXG4gIC8vICAgY29sb3I6ICNmZmY7XHJcbiAgLy8gICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICAvLyAgIHdpZHRoOiAzMDBweDtcclxuICAvLyAgIGhlaWdodDogMzAwcHg7XHJcbiAgLy8gICBwYWRkaW5nOiA3MHB4O1xyXG4gIC8vICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIC8vICAgbWFyZ2luOiAzMHB4O1xyXG4gIC8vICAgYmFja2dyb3VuZDogI2RhMWQwMCB1cmwoaHR0cDovL3d3dy5yZW1jb2thbGYubmwvYmFja2dyb3VuZC5qcGcpIGxlZnQgdG9wO1xyXG4gIC8vICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAvLyAgIGZsb2F0OiBsZWZ0O1xyXG4gIC8vIH1cclxuICBcclxuICAvLyBkaXYuZGlhZ29uYWwzIHtcclxuICAvLyAgIGJhY2tncm91bmQ6IHdoaXRlc21va2U7XHJcbiAgLy8gICBjb2xvcjogI2RhMWQwMDtcclxuICAvLyAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gIC8vICAgd2lkdGg6IDIzZW07Ly8yN1xyXG4gIC8vICAgaGVpZ2h0OiAyN2VtOy8vMjdcclxuICAvLyAgIHBhZGRpbmc6IDAuMjVlbTtcclxuICAvLyAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAvLyAgIG1hcmdpbjogMS44NzVlbTtcclxuICAvLyAgIGZsb2F0OiBsZWZ0O1xyXG4gIC8vIH1cclxuICAvLyBpb24tYnV0dG9ue1xyXG4gIC8vICAgcGFkZGluZy1ib3R0b206IDEwJTtcclxuICAvLyB9XHJcbiAgXHJcbiAgLy8gZGl2Lmluc2lkZSB7XHJcbiAgLy8gICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIC8vICAgY29sb3I6ICNkYTFkMDA7XHJcbiAgLy8gICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICAvLyAgIHdpZHRoOiAxNi4yNWVtOy8vMTguMjVcclxuICAvLyAgIGhlaWdodDogMTguMjVlbTsvLzE4LjI1XHJcbiAgLy8gICBwYWRkaW5nOiA0LjM3NWVtO1xyXG4gIC8vICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIC8vIH1cclxuICAvLyBkaXYuaW5zaWRlOmJlZm9yZSB7XHJcbiAgLy8gICBjb250ZW50OiAnJztcclxuICAvLyAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAvLyAgIHRvcDogLTAuMjVlbTtcclxuICAvLyAgIGxlZnQ6IC0wLjI1ZW07XHJcbiAgLy8gICBib3JkZXItdG9wOiA0LjYyNWVtIHNvbGlkICNmZmY7XHJcbiAgLy8gICBib3JkZXItcmlnaHQ6IDQuNjI1ZW0gc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgLy8gICB3aWR0aDogMDtcclxuICAvLyAgIHotaW5kZXg6IDI7XHJcbiAgLy8gfVxyXG4gIC8vICNncmV5OmJlZm9yZSB7XHJcbiAgLy8gICBjb250ZW50OiAnJztcclxuICAvLyAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAvLyAgIHRvcDogMDtcclxuICAvLyAgIGxlZnQ6IDA7XHJcbiAgLy8gICBib3JkZXItdG9wOiA1ZW0gc29saWQgI2ZmZjtcclxuICAvLyAgIGJvcmRlci1yaWdodDogNWVtIHNvbGlkICNjY2M7XHJcbiAgLy8gICB3aWR0aDogMjVlbTtcclxuICAvLyB9XHJcbi8vIC5zdGF5T3V0IHtcclxuLy8gICAgIHdpZHRoOiAxOC43NWVtOyBcclxuLy8gICAgIG1hcmdpbi1sZWZ0OiAwJTsgXHJcbi8vICAgICBtYXJnaW4tcmlnaHQ6IDAlOyBcclxuLy8gfVxyXG4vLyAuYmFjay1ncm91bmQge1xyXG4vLyAgICAgIC0tYmFja2dyb3VuZDogIzAwMCB1cmwoJy9hc3NldHMvcDIwLmpwZycpIGNlbnRlciBjZW50ZXIvY29udGFpbjtcclxuLy8gICAgIC8vIC0tYmFja2dyb3VuZDogIzAwMDtcclxuXHJcbi8vIH1cclxuLy8gLmRldGFpbHMge1xyXG4vLyAgICAgdHJhbnNmb3JtLW9yaWdpbjogYm90dG9tLWxlZnQ7XHJcbi8vICAgICB0cmFuc2Zvcm06IHNrZXcoMTBkZWcsIDApO1xyXG4vLyAgICAgYmFja2dyb3VuZDogZ29sZDtcclxuLy8gICAgIG1hcmdpbi10b3A6IDUgZW07XHJcbi8vICAgICBtYXJnaW4tYm90dG9tOiA1ZW07XHJcbi8vIH1cclxuLnN0eWxlLWlucHV0e1xyXG4gIG1heC13aWR0aDogNTAlO1xyXG59XHJcbi5iZy1pbWFnZSB7XHJcbiAgLyogVGhlIGltYWdlIHVzZWQgKi9cclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2NvbnRhY3RfdXMyLmpwZ1wiKTtcclxuXHJcbiAgLyogQWRkIHRoZSBibHVyIGVmZmVjdCAqL1xyXG4gIGZpbHRlcjogYmx1cig4cHgpO1xyXG4gIC13ZWJraXQtZmlsdGVyOiBibHVyKDhweCk7XHJcblxyXG4gIC8qIEZ1bGwgaGVpZ2h0ICovXHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuICAvKiBDZW50ZXIgYW5kIHNjYWxlIHRoZSBpbWFnZSBuaWNlbHkgKi9cclxuICAvL2JhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAvLyBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0O1xyXG4gIC8vIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuLnN0YXl0aGVyZXtcclxuICBjb2xvcjogIzAwMDtcclxufVxyXG5cclxuLyogUG9zaXRpb24gdGV4dCBpbiB0aGUgbWlkZGxlIG9mIHRoZSBwYWdlL2ltYWdlICovXHJcbi5iZy10ZXh0IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwwLDApOyAvKiBGYWxsYmFjayBjb2xvciAqL1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsIDAuNCk7IC8qIEJsYWNrIHcvb3BhY2l0eS9zZWUtdGhyb3VnaCAqL1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBib3JkZXI6IDNweCBzb2xpZCAjZjFmMWYxO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDUwJTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgei1pbmRleDogMjtcclxuICB3aWR0aDogODAlO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIC8vIG1hcmdpbi1ib3R0b206IDgwJTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/contact/contact.page.ts":
/*!*****************************************!*\
  !*** ./src/app/contact/contact.page.ts ***!
  \*****************************************/
/*! exports provided: ContactPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactPage", function() { return ContactPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _contact_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contact.service */ "./src/app/contact.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");







var ContactPage = /** @class */ (function () {
    function ContactPage(formBuilder, alertCtrl, alertController, contactService, authService) {
        this.formBuilder = formBuilder;
        this.alertCtrl = alertCtrl;
        this.alertController = alertController;
        this.contactService = contactService;
        this.authService = authService;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].url;
    }
    ContactPage.prototype.ngOnInit = function () {
        this.contactForm = this.formBuilder.group({
            name: ['',],
            cell: ['',],
            feedback: ['',
            ]
        });
    };
    ContactPage.prototype.onReply = function () {
        console.log(this.contactForm.value);
        return this.contactService.saveFeedback(this.contactForm.value).subscribe();
    };
    ContactPage.prototype.feedbackSent = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: 'Thanks for your Feedback!',
                            message: 'Feedback sent',
                            buttons: ['OK']
                        })];
                    case 1:
                        alert = _a.sent();
                        alert.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    ContactPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.page.html */ "./src/app/contact/contact.page.html"),
            styles: [__webpack_require__(/*! ./contact.page.scss */ "./src/app/contact/contact.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"], _contact_service__WEBPACK_IMPORTED_MODULE_3__["ContactService"], _auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]])
    ], ContactPage);
    return ContactPage;
}());



/***/ })

}]);
//# sourceMappingURL=contact-contact-module.js.map
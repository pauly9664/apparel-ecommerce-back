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

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title text-center>\r\n      Contact\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n    <div class=\"bg-image\"></div>\r\n    <div class=\"bg-text\">\r\n        <ion-grid fixed>\r\n            <ion-row>\r\n            <ion-col size-sm=\"6\" size-md=\"6\">\r\n                    <form [formGroup]=\"contactForm\" (ngSubmit)=\"onReply()\">\r\n                <div class= \"diagonal3\">\r\n                  <div class=\"inside\">\r\n                  <ion-list>\r\n                    <ion-item class=\"staythere\" lines=\"none\">\r\n                      <ion-label position=\"fixed\" style=\"font-family: Open Sans; font-weight: bold;\">Name...</ion-label>\r\n                      <input class=\"style-input\" type=\"text\" formControlName=\"name\"/>\r\n                    </ion-item>\r\n          \r\n                    <ion-item class=\"staythere\" lines=\"none\">\r\n                      <ion-label position=\"fixed\" style=\"font-family: Open Sans; font-weight: bold\">Number.. </ion-label>\r\n                      <input class=\"style-input\"type=\"tel\" formControlName=\"cell\"/>\r\n                    </ion-item>\r\n          \r\n                    <ion-item class=\"staythere\" lines=\"none\">\r\n                      <ion-label position=\"fixed\" style=\"font-family: Open Sans;font-weight: bold\">Feedback..</ion-label>\r\n                      <input class=\"style-input\" type=\"text\" formControlName=\"feedback\"/>\r\n                    </ion-item>\r\n                  </ion-list>\r\n                <ion-button color=\"danger\"  (click)=\"onReply()\" (click)=\"feedbackSent()\" type=\"button\" style=\"color: white\"size=\"default\">Submit</ion-button>\r\n              </div>\r\n            </div>\r\n              </form>\r\n            </ion-col>  \r\n           <ion-col size-md=\"6\" size-sm=\"6\">\r\n              <div class= \"diagonal3\">\r\n                  <div class=\"inside\">\r\n                  <!-- <div class=\"details\"> -->\r\n                  <!-- <h3 text-left style=\"padding-right: 28px;\">Contact us.. <br></h3> -->\r\n                <!-- </div> -->\r\n                  <div class=\"align-left\">\r\n                    <ion-icon name=\"logo-facebook\" style=\"font-size:2em\"></ion-icon>\r\n                    <ion-icon name=\"logo-instagram\" style=\"font-size: 2em\"></ion-icon>\r\n                    <ion-icon name=\"logo-pinterest\" style=\"font-size: 2em\"></ion-icon>\r\n                    \r\n                    <p> Telephone Lines: 0737200842, 0722932275</p>  \r\n                  </div>\r\n                  </div>\r\n                  </div>\r\n           </ion-col>\r\n         </ion-row> \r\n      </ion-grid>\r\n      </div>\r\n</ion-content>\r\n<ion-footer style=\"height: 150px;\">\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col>\r\n        <h3 class=\"footer-styling\"><ion-icon name=\"navigate\"></ion-icon>OUR LOCATION</h3>\r\n        <p class=\"footer-styling\">Moktar Daddar Street</p>\r\n      </ion-col>\r\n      <ion-col>\r\n        <h3 class=\"footer-styling\"><ion-icon name=\"time\"></ion-icon>WORKING HOURS</h3>\r\n        <p class=\"footer-styling\"><span>Mon-Sat:</span> Open from 8:30AM - 7:00PM</p><br>\r\n      </ion-col>\r\n      <ion-col>\r\n        <h3 class=\"footer-styling\"><ion-icon name=\"call\"></ion-icon>CONTACT US</h3>\r\n        <p class=\"footer-styling\"><ion-icon name=\"logo-whatsapp\"></ion-icon>+254721397580</p>\r\n        <p class=\"footer-styling\">preetifashions90@gmail.com</p>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-footer>"

/***/ }),

/***/ "./src/app/contact/contact.page.scss":
/*!*******************************************!*\
  !*** ./src/app/contact/contact.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".style-input {\n  max-width: 50%; }\n\n.bg-image {\n  /* The image used */\n  background-image: url(\"/assets/contact_us2.jpg\");\n  /* Add the blur effect */\n  filter: blur(8px);\n  -webkit-filter: blur(8px);\n  /* Full height */\n  height: 100%;\n  /* Center and scale the image nicely */ }\n\n.staythere {\n  color: #000; }\n\n/* Position text in the middle of the page/image */\n\n.bg-text {\n  background-color: black;\n  /* Fallback color */\n  background-color: rgba(0, 0, 0, 0.4);\n  /* Black w/opacity/see-through */\n  color: white;\n  font-weight: bold;\n  border: 3px solid #f1f1f1;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 2;\n  width: 80%;\n  padding: 20px;\n  text-align: center; }\n\n.footer-styling {\n  color: #fff;\n  font-family: Open Sans; }\n\nion-footer {\n  background-color: #000; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC9DOlxcVXNlcnNcXEF0dGFpblxcZGVza3RvcFxccHJvamVjdHNcXGFwXFxhcHBhcmVsLWVjb21tZXJjZS9zcmNcXGFwcFxcY29udGFjdFxcY29udGFjdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUhBO0VBQ0UsY0FBYyxFQUFBOztBQUVoQjtFQUNFLG1CQUFBO0VBQ0EsZ0RBQWdEO0VBRWhELHdCQUFBO0VBQ0EsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUV6QixnQkFBQTtFQUNBLFlBQVk7RUFFWixzQ0FBQSxFQUF1Qzs7QUFLekM7RUFDRSxXQUFXLEVBQUE7O0FBR2Isa0RBQUE7O0FBQ0E7RUFDRSx1QkFBNEI7RUFBRSxtQkFBQTtFQUM5QixvQ0FBa0M7RUFBRSxnQ0FBQTtFQUNwQyxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCxnQ0FBZ0M7RUFDaEMsVUFBVTtFQUNWLFVBQVU7RUFDVixhQUFhO0VBQ2Isa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0UsV0FBVztFQUNYLHNCQUFzQixFQUFBOztBQUV4QjtFQUNFLHNCQUFzQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29udGFjdC9jb250YWN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIC5jb250YWluZXJ7XHJcbi8vICAgb3ZlcmZsb3c6IGZpeGVkO1xyXG4vLyB9XHJcblxyXG4vLyAuc3RheXRoZXJlIHtcclxuLy8gICAgIHdpZHRoOiAxMDAlO1xyXG4vLyAgICAgaGVpZ2h0OiA2ZW07XHJcbi8vICAgICAtbW96LWJvcmRlci1yYWRpdXM6IDNlbTtcclxuLy8gICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogM2VtO1xyXG4vLyAgICAgYm9yZGVyLXJhZGl1czogMS42ZW07XHJcbi8vICAgICBtYXJnaW4tYm90dG9tOiAxLjZlbTsgIFxyXG4vLyB9XHJcbi8vIC5hbGlnbi1jZW50ZXIge1xyXG4vLyAgICAgd2lkdGg6IDE4Ljc1ZW07XHJcbi8vICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuLy8gICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuLy8gfVxyXG5cclxuLy8gI2dyZXkge1xyXG4vLyAgICAgd2lkdGg6IDYwZW07XHJcbi8vICAgICBoZWlnaHQ6IDEyLjVlbTtcclxuLy8gICAgIGJhY2tncm91bmQ6ICNjY2M7XHJcbi8vICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbi8vICAgICBtYXJnaW4tdG9wOiAwLjhlbTtcclxuLy8gICB9XHJcbiAgLy8gZGl2LmRpYWdvbmFsMzpiZWZvcmUge1xyXG4gIC8vICAgY29udGVudDogJyc7XHJcbiAgLy8gICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgLy8gICB0b3A6IDA7XHJcbiAgLy8gICBsZWZ0OiAwO1xyXG4gIC8vICAgYm9yZGVyLXRvcDogNWVtIHNvbGlkIHdoaXRlc21va2U7XHJcbiAgLy8gICBib3JkZXItcmlnaHQ6IDVlbSBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAvLyAgIHdpZHRoOiAwO1xyXG4gIC8vICAgIHotaW5kZXg6IDE7XHJcbiAgLy8gfVxyXG4gIC8vIGRpdi5kaWFnb25hbCB7XHJcbiAgLy8gICBiYWNrZ3JvdW5kOiAjZGExZDAwO1xyXG4gIC8vICAgY29sb3I6ICNmZmY7XHJcbiAgLy8gICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICAvLyAgIHdpZHRoOiAzMDBweDtcclxuICAvLyAgIGhlaWdodDogMzAwcHg7XHJcbiAgLy8gICBwYWRkaW5nOiA3MHB4O1xyXG4gIC8vICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIC8vICAgbWFyZ2luOiAzMHB4O1xyXG4gIC8vICAgZmxvYXQ6IGxlZnQ7XHJcbiAgLy8gfVxyXG4gIFxyXG4gIC8vIGRpdi5kaWFnb25hbDIge1xyXG4gIC8vICAgYmFja2dyb3VuZDogI2RhMWQwMDtcclxuICAvLyAgIGNvbG9yOiAjZmZmO1xyXG4gIC8vICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgLy8gICB3aWR0aDogMzAwcHg7XHJcbiAgLy8gICBoZWlnaHQ6IDMwMHB4O1xyXG4gIC8vICAgcGFkZGluZzogNzBweDtcclxuICAvLyAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAvLyAgIG1hcmdpbjogMzBweDtcclxuICAvLyAgIGJhY2tncm91bmQ6ICNkYTFkMDAgdXJsKGh0dHA6Ly93d3cucmVtY29rYWxmLm5sL2JhY2tncm91bmQuanBnKSBsZWZ0IHRvcDtcclxuICAvLyAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgLy8gICBmbG9hdDogbGVmdDtcclxuICAvLyB9XHJcbiAgXHJcbiAgLy8gZGl2LmRpYWdvbmFsMyB7XHJcbiAgLy8gICBiYWNrZ3JvdW5kOiB3aGl0ZXNtb2tlO1xyXG4gIC8vICAgY29sb3I6ICNkYTFkMDA7XHJcbiAgLy8gICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICAvLyAgIHdpZHRoOiAyM2VtOy8vMjdcclxuICAvLyAgIGhlaWdodDogMjdlbTsvLzI3XHJcbiAgLy8gICBwYWRkaW5nOiAwLjI1ZW07XHJcbiAgLy8gICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgLy8gICBtYXJnaW46IDEuODc1ZW07XHJcbiAgLy8gICBmbG9hdDogbGVmdDtcclxuICAvLyB9XHJcbiAgLy8gaW9uLWJ1dHRvbntcclxuICAvLyAgIHBhZGRpbmctYm90dG9tOiAxMCU7XHJcbiAgLy8gfVxyXG4gIFxyXG4gIC8vIGRpdi5pbnNpZGUge1xyXG4gIC8vICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAvLyAgIGNvbG9yOiAjZGExZDAwO1xyXG4gIC8vICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgLy8gICB3aWR0aDogMTYuMjVlbTsvLzE4LjI1XHJcbiAgLy8gICBoZWlnaHQ6IDE4LjI1ZW07Ly8xOC4yNVxyXG4gIC8vICAgcGFkZGluZzogNC4zNzVlbTtcclxuICAvLyAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAvLyB9XHJcbiAgLy8gZGl2Lmluc2lkZTpiZWZvcmUge1xyXG4gIC8vICAgY29udGVudDogJyc7XHJcbiAgLy8gICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgLy8gICB0b3A6IC0wLjI1ZW07XHJcbiAgLy8gICBsZWZ0OiAtMC4yNWVtO1xyXG4gIC8vICAgYm9yZGVyLXRvcDogNC42MjVlbSBzb2xpZCAjZmZmO1xyXG4gIC8vICAgYm9yZGVyLXJpZ2h0OiA0LjYyNWVtIHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIC8vICAgd2lkdGg6IDA7XHJcbiAgLy8gICB6LWluZGV4OiAyO1xyXG4gIC8vIH1cclxuICAvLyAjZ3JleTpiZWZvcmUge1xyXG4gIC8vICAgY29udGVudDogJyc7XHJcbiAgLy8gICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgLy8gICB0b3A6IDA7XHJcbiAgLy8gICBsZWZ0OiAwO1xyXG4gIC8vICAgYm9yZGVyLXRvcDogNWVtIHNvbGlkICNmZmY7XHJcbiAgLy8gICBib3JkZXItcmlnaHQ6IDVlbSBzb2xpZCAjY2NjO1xyXG4gIC8vICAgd2lkdGg6IDI1ZW07XHJcbiAgLy8gfVxyXG4vLyAuc3RheU91dCB7XHJcbi8vICAgICB3aWR0aDogMTguNzVlbTsgXHJcbi8vICAgICBtYXJnaW4tbGVmdDogMCU7IFxyXG4vLyAgICAgbWFyZ2luLXJpZ2h0OiAwJTsgXHJcbi8vIH1cclxuLy8gLmJhY2stZ3JvdW5kIHtcclxuLy8gICAgICAtLWJhY2tncm91bmQ6ICMwMDAgdXJsKCcvYXNzZXRzL3AyMC5qcGcnKSBjZW50ZXIgY2VudGVyL2NvbnRhaW47XHJcbi8vICAgICAvLyAtLWJhY2tncm91bmQ6ICMwMDA7XHJcblxyXG4vLyB9XHJcbi8vIC5kZXRhaWxzIHtcclxuLy8gICAgIHRyYW5zZm9ybS1vcmlnaW46IGJvdHRvbS1sZWZ0O1xyXG4vLyAgICAgdHJhbnNmb3JtOiBza2V3KDEwZGVnLCAwKTtcclxuLy8gICAgIGJhY2tncm91bmQ6IGdvbGQ7XHJcbi8vICAgICBtYXJnaW4tdG9wOiA1IGVtO1xyXG4vLyAgICAgbWFyZ2luLWJvdHRvbTogNWVtO1xyXG4vLyB9XHJcbi5zdHlsZS1pbnB1dHtcclxuICBtYXgtd2lkdGg6IDUwJTtcclxufVxyXG4uYmctaW1hZ2Uge1xyXG4gIC8qIFRoZSBpbWFnZSB1c2VkICovXHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9jb250YWN0X3VzMi5qcGdcIik7XHJcblxyXG4gIC8qIEFkZCB0aGUgYmx1ciBlZmZlY3QgKi9cclxuICBmaWx0ZXI6IGJsdXIoOHB4KTtcclxuICAtd2Via2l0LWZpbHRlcjogYmx1cig4cHgpO1xyXG5cclxuICAvKiBGdWxsIGhlaWdodCAqL1xyXG4gIGhlaWdodDogMTAwJTtcclxuXHJcbiAgLyogQ2VudGVyIGFuZCBzY2FsZSB0aGUgaW1hZ2UgbmljZWx5ICovXHJcbiAgLy9iYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgLy8gYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdDtcclxuICAvLyBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcbi5zdGF5dGhlcmV7XHJcbiAgY29sb3I6ICMwMDA7XHJcbn1cclxuXHJcbi8qIFBvc2l0aW9uIHRleHQgaW4gdGhlIG1pZGRsZSBvZiB0aGUgcGFnZS9pbWFnZSAqL1xyXG4uYmctdGV4dCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsMCwwKTsgLyogRmFsbGJhY2sgY29sb3IgKi9cclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLCAwLjQpOyAvKiBCbGFjayB3L29wYWNpdHkvc2VlLXRocm91Z2ggKi9cclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgYm9yZGVyOiAzcHggc29saWQgI2YxZjFmMTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIHotaW5kZXg6IDI7XHJcbiAgd2lkdGg6IDgwJTtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAvLyBtYXJnaW4tYm90dG9tOiA4MCU7XHJcbn1cclxuLmZvb3Rlci1zdHlsaW5ne1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnM7XHJcbn1cclxuaW9uLWZvb3RlcntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xyXG59Il19 */"

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
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab1-tab1-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>\n      Tab 1\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <h3 [hidden]=\"images.length !== 0\" text-center>No Images found!</h3>\n \n  <ion-list>\n    <ion-item-sliding *ngFor=\"let img of images\">\n \n      <ion-item tappable (click)=\"openImage(img)\">\n        <ion-thumbnail item-start>\n          <img [src]=\"img.url\">\n        </ion-thumbnail>\n        <h2>{{ img.desc }}</h2>\n        <button ion-button clear icon-only item-end> <ion-icon name=\"arrow-forward\"></ion-icon></button>\n      </ion-item>\n \n      <ion-item-options slot=\"end\">\n        <button ion-button icon-only color=\"danger\" (click)=\"deleteImage(img)\">\n        <ion-icon name=\"trash\"></ion-icon>\n      </button>\n      </ion-item-options>\n \n    </ion-item-sliding>\n  </ion-list>\n \n  <ion-fab right bottom>\n    <button ion-fab (click)=\"presentActionSheet()\"><ion-icon name=\"camera\"></ion-icon></button>\n  </ion-fab>\n  <!-- <app-explore-container name=\"Tab 1 page\"></app-explore-container> -->\n </ion-content> -->");

/***/ }),

/***/ "./src/app/tab1/tab1.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.module.ts ***!
  \*************************************/
/*! exports provided: Tab1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function() { return Tab1PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab1.page */ "./src/app/tab1/tab1.page.ts");
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../explore-container/explore-container.module */ "./src/app/explore-container/explore-container.module.ts");








let Tab1PageModule = class Tab1PageModule {
};
Tab1PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__["ExploreContainerComponentModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"] }])
        ],
        declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"]]
    })
], Tab1PageModule);



/***/ }),

/***/ "./src/app/tab1/tab1.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content ion-toolbar {\n  --background: translucent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMS9DOlxcVXNlcnNcXEF0dGFpblxcRGVza3RvcFxcUHJvamVjdHNcXHByZXRzYWwtYWRtaW5cXGFwcGFyZWwtZWNvbW1lcmNlLWFkbWluL3NyY1xcYXBwXFx0YWIxXFx0YWIxLnBhZ2Uuc2NzcyIsInNyYy9hcHAvdGFiMS90YWIxLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC90YWIxL3RhYjEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQgaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zbHVjZW50O1xufSIsImlvbi1jb250ZW50IGlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc2x1Y2VudDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/tab1/tab1.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab1/tab1.page.ts ***!
  \***********************************/
/*! exports provided: Tab1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1Page", function() { return Tab1Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _products_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../products.service */ "./src/app/products.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _preview_modal_preview_modal_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../preview-modal/preview-modal.page */ "./src/app/preview-modal/preview-modal.page.ts");
/* harmony import */ var _upload_modal_upload_modal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../upload-modal/upload-modal.page */ "./src/app/upload-modal/upload-modal.page.ts");







let Tab1Page = class Tab1Page {
    constructor(navCtrl, imagesProvider, camera, actionSheetCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.imagesProvider = imagesProvider;
        this.camera = camera;
        this.actionSheetCtrl = actionSheetCtrl;
        this.modalCtrl = modalCtrl;
        this.images = [];
        this.reloadImages();
    }
    reloadImages() {
        this.imagesProvider.getImages().subscribe(data => {
            this.images = data;
        });
    }
    deleteImage(img) {
        this.imagesProvider.deleteImage(img).subscribe(data => {
            this.reloadImages();
        });
    }
    openImage(img) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let modal = yield this.modalCtrl.create({
                component: _preview_modal_preview_modal_page__WEBPACK_IMPORTED_MODULE_5__["PreviewModalPage"],
                componentProps: {
                    img: img,
                }
            });
            modal.present();
        });
    }
    presentActionSheet() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let actionSheet = yield this.actionSheetCtrl.create({
                // title: 'Select Image Source',
                buttons: [
                    {
                        text: 'Load from Library',
                        handler: () => {
                            this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
                        }
                    },
                    {
                        text: 'Use Camera',
                        handler: () => {
                            this.takePicture(this.camera.PictureSourceType.CAMERA);
                        }
                    },
                    {
                        text: 'Cancel',
                        role: 'cancel'
                    }
                ],
            });
            actionSheet.present();
        });
    }
    takePicture(sourceType) {
        // Create options for the Camera Dialog
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.FILE_URI,
            sourceType: sourceType,
            saveToPhotoAlbum: false,
            correctOrientation: true
        };
        // Get the data of an image
        this.camera.getPicture(options).then((imagePath) => {
            let modal = this.modalCtrl.create({
                component: _upload_modal_upload_modal_page__WEBPACK_IMPORTED_MODULE_6__["UploadModalPage"],
                componentProps: {
                    data: imagePath
                }
            });
            //modal.present();
            // modal.onDidDismiss(data => {
            //   if (data && data.reload) {
            //     this.reloadImages();
            //   }
            // });
        }, (err) => {
            console.log('Error: ', err);
        });
    }
};
Tab1Page.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _products_service__WEBPACK_IMPORTED_MODULE_2__["ProductsService"] },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_4__["Camera"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] }
];
Tab1Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab1',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tab1.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tab1.page.scss */ "./src/app/tab1/tab1.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _products_service__WEBPACK_IMPORTED_MODULE_2__["ProductsService"], _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_4__["Camera"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]])
], Tab1Page);



/***/ })

}]);
//# sourceMappingURL=tab1-tab1-module-es2015.js.map
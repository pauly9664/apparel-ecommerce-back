(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["media-media-module"],{

/***/ "./src/app/media/media.module.ts":
/*!***************************************!*\
  !*** ./src/app/media/media.module.ts ***!
  \***************************************/
/*! exports provided: MediaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaPageModule", function() { return MediaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _media_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./media.page */ "./src/app/media/media.page.ts");







var routes = [
    {
        path: '',
        component: _media_page__WEBPACK_IMPORTED_MODULE_6__["MediaPage"]
    }
];
var MediaPageModule = /** @class */ (function () {
    function MediaPageModule() {
    }
    MediaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_media_page__WEBPACK_IMPORTED_MODULE_6__["MediaPage"]]
        })
    ], MediaPageModule);
    return MediaPageModule;
}());



/***/ }),

/***/ "./src/app/media/media.page.html":
/*!***************************************!*\
  !*** ./src/app/media/media.page.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <!-- <ion-title text-center>Shop</ion-title> -->\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button (click)=\"closePopover()\" defaultHref=\"/\"></ion-back-button>\r\n  </ion-buttons>\r\n    <img src=\"/assets/PreetiLogo.png\" style=\"height:75px; width: 100px; margin-left: 40%;\"/>\r\n  </ion-toolbar>\r\n  <ion-fab vertical=\"top\" horizontal=\"end\">\r\n    <ion-button color=\"dark\" (click)=\"openCart()\">\r\n      <ion-badge  *ngIf=\"cart.length > 0\">{{ cart.length }}</ion-badge>\r\n      <ion-icon name=\"cart\" slot=\"icon-only\"></ion-icon>\r\n    </ion-button>\r\n  </ion-fab>\r\n</ion-header>\r\n\r\n<ion-content >\r\n  <!-- <p text-center style=\"color: skyblue;\"> Filter using Item name</p>  -->\r\n   <!-- <ion-searchbar [formControl]=\"searchControl\" style=\"max-width:50%\" (ionChange)=\"FilterArrayObjects($event)\"></ion-searchbar> -->\r\n <!-- <div>\r\n   <ion-list >\r\n     <ion-item (click)= \"selectedProduct(prods)\" *ngFor=\"let product of products\">{{product.description}}</ion-item>\r\n   </ion-list>\r\n </div> -->\r\n \r\n <!-- <div style=\"background-color: black;\"> -->\r\n  <ion-grid style=\"background-color: lightgrey;\">\r\n    <ion-row>\r\n<ion-col size-sm=\"6\" size-lg=\"6\" size-md=\"6\">\r\n  <ion-item lines=\"none\" >\r\n  <label style=\"font-weight: bold; font-size: 12px; color: #000\">Categories</label>\r\n  <select (change)=\"filterItems($event)\" type = \"text\"  style=\"max-width:100px; margin-left: 1%;\" ><option *ngFor=\"let category of productCategory\" [value]=\"category\">{{category}}</option></select>\r\n</ion-item>\r\n  <ion-item lines=\"none\">\r\n  <label style=\"font-size: 12px;font-weight:bold;color: #000\">Price Range</label> \r\n\r\n  <input id =\"price-range\" (input)=\"filterByPrice($event.target.value)\" type=\"range\" min=\"100\" max=\"25000\" style=\"margin-left: 1%;\" />\r\n  \r\n</ion-item>\r\n<ion-item>\r\n  <p style=\"font-weight: bold\" style=\"margin-left: 50%;font-size: 12px; color: #000\"><span style=\"font-size: 13px; font-weight: bolder;\"> Max Price Limit - </span> KES {{price}}</p>\r\n</ion-item>\r\n</ion-col>\r\n<ion-col size-sm=\"6\" size-lg=\"6\" size-md=\"6\">\r\n  <div class=\"row\">\r\n    <div *ngFor=\"let img of produce\" >\r\n      <img style=\"max-width: 200px;\" (click)=\"openImage(img)\" [src]='img.url'>\r\n        <div class=\"column\">\r\n        <p style=\"font-family: Open Sans; font-weight: bold\"> {{img.description}}<br></p>\r\n        <p><span style=\"background-color: #000;color: #fff; font-size: 13px;\"><i> KES {{img.price}} <span style=\"color: red;\">(All prices are negotiable)</span></i></span><br></p>\r\n        <ion-button size=\"small\" color=\"light\" style='color: #000;' (click)=\"openImage(img)\"><ion-icon  name=\"information\"></ion-icon>VIEW MORE</ion-button>  \r\n         \r\n      </div>\r\n</div>\r\n</div>\r\n</ion-col>\r\n</ion-row>\r\n</ion-grid> \r\n<!-- </div> -->\r\n<!-- <div class=\"row\">\r\n <div *ngFor=\"let img of produce\" >\r\n  <img style=\"max-width: 200px;\" (click)=\"openImage(img)\" [src]='img.url'>\r\n  <div class=\"column\">\r\n  <p style=\"font-family: Open Sans; font-weight: bold\"> {{img.description}}<br></p>\r\n        <img style=\"max-width: 200px;\" (click)=\"openImage(img)\" [src]='img.url'>\r\n        <div class=\"column\">\r\n        <p style=\"font-family: Open Sans; font-weight: bold\"> {{img.description}}<br></p>\r\n        <p><span style=\"background-color: #fff;color: #000; font-size: 13px;\"><i> KES {{img.price}} <span style=\"color: red;\">(All prices are negotiable)</span></i></span><br></p>\r\n        <ion-button size=\"small\" color=\"light\" style='color: #000;' (click)=\"openImage(img)\"><ion-icon  name=\"information\"></ion-icon>VIEW MORE</ion-button>  \r\n         \r\n      </div>\r\n</div>\r\n</div> -->\r\n\r\n</ion-content>"

/***/ }),

/***/ "./src/app/media/media.page.scss":
/*!***************************************!*\
  !*** ./src/app/media/media.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".styler {\n  font-weight: bold;\n  font-family: Open Sans; }\n\n.first_col {\n  position: fixed;\n  bottom: 10px;\n  background-color: #000; }\n\n/* Create four equal columns that sits next to each other */\n\n.column {\n  flex: 25%;\n  max-width: 50%;\n  padding: 0 4px;\n  margin-left: auto;\n  margin-right: auto; }\n\n/* Responsive layout - makes a two column-layout instead of four columns */\n\n.footer-styling {\n  color: #fff;\n  font-family: Open Sans; }\n\nion-footer {\n  background-color: #000; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVkaWEvQzpcXFVzZXJzXFxBdHRhaW5cXERlc2t0b3BcXFByb2plY3RzXFxhcHBhcmVsLWVjb21tZXJjZS9zcmNcXGFwcFxcbWVkaWFcXG1lZGlhLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFVRTtFQUNFLGlCQUFpQjtFQUNqQixzQkFBc0IsRUFBQTs7QUFFeEI7RUFDRSxlQUFlO0VBQ2YsWUFBWTtFQUNaLHNCQUFzQixFQUFBOztBQUd4QiwyREFBQTs7QUFDQTtFQUNFLFNBQVM7RUFDVCxjQUFjO0VBQ2QsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixrQkFBa0IsRUFBQTs7QUFVcEIsMEVBQUE7O0FBZUE7RUFDRSxXQUFXO0VBQ1gsc0JBQXNCLEVBQUE7O0FBRTFCO0VBQ0Usc0JBQXNCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tZWRpYS9tZWRpYS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLy8gaW9uLWNvbnRlbnR7XHJcblxyXG4vLyAgIC8vIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICNERUQyQTg7XHJcbi8vIH1cclxuICAvLyAucm93IHtcclxuICAvLyAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgLy8gICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgLy8gICBwYWRkaW5nOiAwIDRweDtcclxuICAvLyB9XHJcbiAgLnN0eWxlcntcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1mYW1pbHk6IE9wZW4gU2FucztcclxuICB9XHJcbiAgLmZpcnN0X2NvbHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJvdHRvbTogMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIENyZWF0ZSBmb3VyIGVxdWFsIGNvbHVtbnMgdGhhdCBzaXRzIG5leHQgdG8gZWFjaCBvdGhlciAqL1xyXG4gIC5jb2x1bW4ge1xyXG4gICAgZmxleDogMjUlO1xyXG4gICAgbWF4LXdpZHRoOiA1MCU7XHJcbiAgICBwYWRkaW5nOiAwIDRweDtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIH1cclxuICBcclxuICAvLyAuY29sdW1uIGltZyB7XHJcbiAgLy8gICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgLy8gICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIC8vICAgd2lkdGg6IDEwMCU7XHJcbiAgLy8gICAvLyBoZWlnaHQ6IDUwJTtcclxuICAvLyB9XHJcbiAgXHJcbiAgLyogUmVzcG9uc2l2ZSBsYXlvdXQgLSBtYWtlcyBhIHR3byBjb2x1bW4tbGF5b3V0IGluc3RlYWQgb2YgZm91ciBjb2x1bW5zICovXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcclxuICAvLyAgIC5jb2x1bW4ge1xyXG4gIC8vICAgICBmbGV4OiA1MCU7XHJcbiAgLy8gICAgIG1heC13aWR0aDogNTAlO1xyXG4gIC8vICAgfVxyXG4gIC8vIH1cclxuICBcclxuICAvLyAvKiBSZXNwb25zaXZlIGxheW91dCAtIG1ha2VzIHRoZSB0d28gY29sdW1ucyBzdGFjayBvbiB0b3Agb2YgZWFjaCBvdGhlciBpbnN0ZWFkIG9mIG5leHQgdG8gZWFjaCBvdGhlciAqL1xyXG4gIC8vIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgLy8gICAuY29sdW1uIHtcclxuICAvLyAgICAgZmxleDogMTAwJTtcclxuICAvLyAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIC8vICAgfVxyXG4gIH1cclxuICAuZm9vdGVyLXN0eWxpbmd7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnM7XHJcbn1cclxuaW9uLWZvb3RlcntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/media/media.page.ts":
/*!*************************************!*\
  !*** ./src/app/media/media.page.ts ***!
  \*************************************/
/*! exports provided: MediaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaPage", function() { return MediaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shoppers_cart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shoppers-cart.service */ "./src/app/shoppers-cart.service.ts");
/* harmony import */ var _view_product_view_product_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../view-product/view-product.page */ "./src/app/view-product/view-product.page.ts");
/* harmony import */ var _shoppers_cart_shoppers_cart_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shoppers-cart/shoppers-cart.page */ "./src/app/shoppers-cart/shoppers-cart.page.ts");








var MediaPage = /** @class */ (function () {
    function MediaPage(productsService, alertCtrl, cartService, modalCtrl, loadingController) {
        this.productsService = productsService;
        this.alertCtrl = alertCtrl;
        this.cartService = cartService;
        this.modalCtrl = modalCtrl;
        this.loadingController = loadingController;
        this.products = [];
        this.product = [];
        this.produce = [];
        this.productCategory = [];
        this.items = [];
        this.categorySelected = null;
        this.pricesCart = [];
        this.cart = [];
        //  this.queryProductsData();
        this.filterAgain();
        //  this.FilterArrayObjects(Event);
        this.searchControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]();
    }
    MediaPage.prototype.ngOnInit = function () {
        this.presentLoadingWithOptions2();
        this.cartItemCount = this.cartService.getCartItemCount();
        this.cart = this.cartService.getCart();
        // this.produce = this.products;
        this.queryOnBrowse();
        // this.mediaLaunch();
    };
    MediaPage.prototype.openCart = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            component: _shoppers_cart_shoppers_cart_page__WEBPACK_IMPORTED_MODULE_6__["ShoppersCartPage"],
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    MediaPage.prototype.FilterArrayObjects = function (ev) {
        var _this = this;
        this.prods = ev.target.value;
        console.log("event data", this.prods);
        if (this.prods && this.prods.trim() != '') {
            this.products = this.products.filter(function (item) {
                // this.productCategory.push(item.category);
                return (item.description.toLowerCase().indexOf(_this.prods.toLowerCase()) > -1);
            });
        }
    };
    MediaPage.prototype.filterItems = function (ev) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                // this.queryProductsData();
                // this.searchControl.valueChanges;
                this.categorySelected = ev.target.value;
                console.log("dropdown cat:", this.categorySelected);
                this.presentLoadingWithOptions();
                this.produce = this.products.filter(function (products) {
                    return products.category == _this.categorySelected;
                });
                // this.produce.push(this.products);
                console.log("this is iiiiiiit", this.produce);
                return [2 /*return*/];
            });
        });
    };
    MediaPage.prototype.queryOnBrowse = function () {
        var _this = this;
        this.productsService.getImages().subscribe(function (data) {
            _this.products = data;
            _this.produce = data;
            console.log("This produce", _this.produce);
        });
    };
    MediaPage.prototype.filterAgain = function () {
        var _this = this;
        this.productsService.getCategories().subscribe(function (data) {
            _this.product = data;
            console.log('Cats:', _this.product);
            _this.product.forEach(function (item) {
                console.log("Categories", item.description);
                // if(item.category.indexOf(value) ==)
                _this.productCategory.push(item.description);
            });
        });
    };
    MediaPage.prototype.openImage = function (img) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(img);
                        return [4 /*yield*/, this.modalCtrl.create({
                                component: _view_product_view_product_page__WEBPACK_IMPORTED_MODULE_5__["ViewProductPage"],
                                componentProps: {
                                    img: img,
                                }
                            })];
                    case 1:
                        modal = _a.sent();
                        modal.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    MediaPage.prototype.filterByPrice = function (ev) {
        var _this = this;
        //  this.price = ev.target.value;
        this.price = ev;
        this.presentLoadingWithOptions();
        this.produce = this.products.filter(function (item) {
            return item.price < _this.price;
        }
        // this.pricesCart.push(item); 
        );
        console.log("Price List", this.produce);
        // for(this.price = 0; this.price > this.products.price; this.price++){
        // }
        // this.products = this.products.filter((items)=>{
        //   items.price < this.price;
        // console.log('Built array', this.pricesCart)
        // })
        console.log("What the price", this.price);
    };
    MediaPage.prototype.queryProductsData = function () {
        // let categorySelected = ev.target.value;
        //this.filterItems(Event);
        // this.productsService.getCategories().subscribe(data => {
        //   this.product = data;
        //   console.log("Actual cat", this.product);
        var _this = this;
        this.products = this.products.filter(function (products) {
            return products.category == _this.categorySelected;
        });
        console.log('Getting there', this.categorySelected);
    };
    MediaPage.prototype.presentLoadingWithOptions = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            spinner: "circles",
                            duration: 500,
                            message: 'Fetching... ' + this.categorySelected,
                            // translucent: true,
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
    MediaPage.prototype.presentLoadingWithOptions2 = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            spinner: "crescent",
                            duration: 500,
                            message: 'LOADING...',
                            // translucent: true,
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
    MediaPage.prototype.mediaLaunch = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: 'Shopping Page',
                            message: 'Please select a category first or use the price range option to set max price limit',
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
    MediaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-media',
            template: __webpack_require__(/*! ./media.page.html */ "./src/app/media/media.page.html"),
            styles: [__webpack_require__(/*! ./media.page.scss */ "./src/app/media/media.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shoppers_cart_service__WEBPACK_IMPORTED_MODULE_4__["ShoppersCartService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _shoppers_cart_service__WEBPACK_IMPORTED_MODULE_4__["ShoppersCartService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]])
    ], MediaPage);
    return MediaPage;
}());



/***/ })

}]);
//# sourceMappingURL=media-media-module.js.map
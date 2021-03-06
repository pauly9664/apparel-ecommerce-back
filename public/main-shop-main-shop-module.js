(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main-shop-main-shop-module"],{

/***/ "./src/app/main-shop/main-shop.module.ts":
/*!***********************************************!*\
  !*** ./src/app/main-shop/main-shop.module.ts ***!
  \***********************************************/
/*! exports provided: MainShopPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainShopPageModule", function() { return MainShopPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _main_shop_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./main-shop.page */ "./src/app/main-shop/main-shop.page.ts");







var routes = [
    {
        path: '',
        component: _main_shop_page__WEBPACK_IMPORTED_MODULE_6__["MainShopPage"]
    }
];
var MainShopPageModule = /** @class */ (function () {
    function MainShopPageModule() {
    }
    MainShopPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_main_shop_page__WEBPACK_IMPORTED_MODULE_6__["MainShopPage"]]
        })
    ], MainShopPageModule);
    return MainShopPageModule;
}());



/***/ }),

/***/ "./src/app/main-shop/main-shop.page.html":
/*!***********************************************!*\
  !*** ./src/app/main-shop/main-shop.page.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"dark\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title text-center>\r\n      Shop\r\n    </ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button (click)=\"openCart()\">\r\n        <ion-badge *ngIf=\"cart.length > 0\">{{ cartItemCount | async}}</ion-badge>\r\n        <ion-icon name=\"cart\" slot=\"icon-only\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"padding\" scroll=\"true\">\r\n  <div *ngFor=\"let cat of item\" class=\"category-block\">\r\n\r\n    <ion-row no-padding class=\"category-banner\">\r\n      <ion-col  text-center  tappable id=\"filerCat\" align-self-center style=\" color: #fff;font-family: Open Sans\">\r\n       <a>{{cat.category }}</a> \r\n       <select   type = \"text\"  style=\"max-width:80px; margin-left:20%\" ><option *ngFor=\"let category of productCategory\" [value]=\"category\"><span style=\"color:#000\">{{category}}</span></option></select>\r\n      </ion-col>\r\n    </ion-row>   \r\n    <!-- <p *ngFor=\"let seefirst of item \" (click)=\"FilterByCategory($event)\" >{{seefirst.category}}</p> -->\r\n    <!-- <div style=\"position: absolute;top: 50%;left: 16px;font-size: 25px;z-index: 2;\" (click)=\"slidePrev()\">\r\n      <p class=\"navigation-arrows\">Previous</p>\r\n      <ion-icon name=\"arrow-back\"></ion-icon>\r\n    </div>\r\n    <div style=\"position: absolute;top: 50%;right: 16px;font-size: 25px;z-index: 2;\" (click)=\"slideNext()\">\r\n      <p class=\"navigation-arrows\"><span>Next</span></p>\r\n      <ion-icon name=\"arrow-forward\"></ion-icon>\r\n    </div> -->\r\n    <ion-slides [options]=\"sliderConfig\">\r\n      \r\n      <ion-slide *ngFor=\"let img of item  \">\r\n        \r\n        <div *ngIf=\"cat.expanded\">\r\n         \r\n                <ion-card class=\"new-card\">\r\n                  <ion-card-header>\r\n                    <ion-card-title style=\"font-family: fantasy\">\r\n                      <p style=\"font-size: small;\">{{img.description }} - {{ img.price }}</p>\r\n                    </ion-card-title>\r\n                    <p (click)=\"openImage(img)\"  tappable style=\"font-family: Fantasy; color:burlywood\" click=\"getMarketplaceItems()\">VIEW PRODUCT</p>\r\n                  </ion-card-header>\r\n                  <ion-card-content>\r\n                      <div class=\"display-items\"><img tappable [src]='img.url' /></div> \r\n                      \r\n                  </ion-card-content>\r\n                  </ion-card>       \r\n        </div>\r\n      </ion-slide>\r\n   \r\n    </ion-slides> \r\n  </div>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/main-shop/main-shop.page.scss":
/*!***********************************************!*\
  !*** ./src/app/main-shop/main-shop.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-badge {\n  color: #ffffff;\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  border-radius: 100%; }\n\n.category-block {\n  margin-bottom: 5px;\n  margin-left: 50px;\n  margin-right: 50px;\n  margin-top: 5px; }\n\nion-row {\n  background-image: linear-gradient(to right, #F18C8E, #F0B784); }\n\np.navigation-arrows {\n  border: 5px round;\n  font-size: small; }\n\n.category-banner {\n  --ion-background-color: var(--custom-menu);\n  height: 40px;\n  padding: 10px;\n  font-weight: 500; }\n\n.new-card {\n  display: flex;\n  flex-direction: column;\n  width: 190px;\n  height: 350px; }\n\n.display-items {\n  background-size: cover;\n  height: 400px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi1zaG9wL0M6XFxVc2Vyc1xcQXR0YWluXFxEZXNrdG9wXFxQcm9qZWN0c1xcYXBwYXJlbC1lY29tbWVyY2Uvc3JjXFxhcHBcXG1haW4tc2hvcFxcbWFpbi1zaG9wLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFVBQVU7RUFDVixtQkFBbUIsRUFBQTs7QUFFdkI7RUFDSSxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGtCQUFpQjtFQUNqQixlQUFlLEVBQUE7O0FBRW5CO0VBQ0ksNkRBQTZELEVBQUE7O0FBRWpFO0VBQ0ksaUJBQWlCO0VBRWpCLGdCQUFnQixFQUFBOztBQUdwQjtFQUVJLDBDQUF1QjtFQUN2QixZQUFZO0VBQ1osYUFBYTtFQUNiLGdCQUFnQixFQUFBOztBQUVwQjtFQUNJLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGFBQWEsRUFBQTs7QUFFakI7RUFDSSxzQkFBc0I7RUFDckIsYUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbWFpbi1zaG9wL21haW4tc2hvcC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tYmFkZ2Uge1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDBweDtcclxuICAgIHJpZ2h0OiAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG59XHJcbi5jYXRlZ29yeS1ibG9jayB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogNTBweDtcclxuICAgIG1hcmdpbi1yaWdodDo1MHB4O1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG59XHJcbmlvbi1yb3d7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNGMThDOEUsICNGMEI3ODQpO1xyXG59XHJcbnAubmF2aWdhdGlvbi1hcnJvd3N7XHJcbiAgICBib3JkZXI6IDVweCByb3VuZDtcclxuICAgIC8vYm9yZGVyLXdpZHRoOiAxNXB4O1xyXG4gICAgZm9udC1zaXplOiBzbWFsbDsgXHJcbiAgICAvL2NvbG9yOiAjZmZmO1xyXG59XHJcbi5jYXRlZ29yeS1iYW5uZXIge1xyXG4gICAgLy9ib3JkZXItbGVmdDogOHB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xyXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY3VzdG9tLW1lbnUpO1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuLm5ldy1jYXJkIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgd2lkdGg6IDE5MHB4O1xyXG4gICAgaGVpZ2h0OiAzNTBweDtcclxufVxyXG4uZGlzcGxheS1pdGVtcyB7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgIGhlaWdodDo0MDBweDtcclxuICAgIC8vIHdpZHRoOiAxODBweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/main-shop/main-shop.page.ts":
/*!*********************************************!*\
  !*** ./src/app/main-shop/main-shop.page.ts ***!
  \*********************************************/
/*! exports provided: MainShopPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainShopPage", function() { return MainShopPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shoppers_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shoppers-cart.service */ "./src/app/shoppers-cart.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _view_product_view_product_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../view-product/view-product.page */ "./src/app/view-product/view-product.page.ts");






//import {ViewChild} from '@ionic/angular';
var MainShopPage = /** @class */ (function () {
    function MainShopPage(cartService, modalCtrl, router) {
        this.cartService = cartService;
        this.modalCtrl = modalCtrl;
        this.router = router;
        this.cart = [];
        this.items = [];
        this.sliderConfig = {
            spaceBetween: 10,
            centeredSlides: true,
            slidesPerView: 1.5,
            watchSlidesProgress: true,
        };
        this.productCategory = [];
        this.reloadImages();
    }
    MainShopPage.prototype.ngOnInit = function () {
        this.queryProductsData();
        this.cart = this.cartService.getCart();
        this.cartItemCount = this.cartService.getCartItemCount();
        // this.items = this.cartService.getImages();
        // this.item.forEach((element, index, array) => {
        //   this.catchit = element.category;
        //   console.log("Kwendaaa",this.catchit)
        // });
        console.log("Reveal", this.catchit);
        // this.reloadImages()
        // this.items = this.reloadImages();
        // this.item = this.cartService.getImages();
        // console.log('Items', this.items);
        // this.item = this.reloadImages();
        // this.items = this.reloadImages();
        // console.log('Yooo', this.items);
        // this.sel = this.cartService.getSelect();
        // this.item = this.cartService.getProducts(); 
        // console.log(typeof this.item);
        // console.log(this.items);
        // console.log('Selected',this.sel)
    };
    MainShopPage.prototype.addToCart = function (product) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.cartService.addProduct(product);
                return [2 /*return*/];
            });
        });
    };
    MainShopPage.prototype.filterItems = function (ev) {
        var _this = this;
        // this.searchControl.valueChanges;
        this.categorySelected = ev.target.value;
        console.log("dropdown cat:", this.categorySelected);
        this.item = this.item.filter(function (products) {
            return products.category == _this.categorySelected;
        });
    };
    MainShopPage.prototype.queryProductsData = function () {
        var _this = this;
        // let categorySelected = ev.target.value;
        //this.filterItems(Event);
        this.cartService.getImages().subscribe(function (data) {
            _this.products = data;
            _this.products.forEach(function (item) {
                // console.log("Categories", item.category);
                // if(item.category.indexOf(value) ==)
                _this.productCategory.push(item.category);
                console.log("categories", item.category);
            });
        });
    };
    MainShopPage.prototype.reloadImages = function () {
        var _this = this;
        this.cartService.getImages().subscribe(function (data) {
            _this.item = data;
            console.log("cheki ii kwanza", _this.item);
        });
    };
    MainShopPage.prototype.openImage = function (img) {
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
    //   getMarketplaceItems() {
    //  this.item.filter(item => 
    //   this.items= item.category);   
    //   }
    MainShopPage.prototype.viewProduct = function (product) {
        this.cartService.addProduct(product);
    };
    MainShopPage.prototype.openCart = function () {
        this.router.navigate(['menu/shoppers-cart']);
    };
    // @ViewChild(Slides) slides: Slides;
    MainShopPage.prototype.slidePrev = function () {
        this.slides.slidePrev();
    };
    MainShopPage.prototype.slideNext = function () {
        this.slides.slideNext();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonSlides"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonSlides"])
    ], MainShopPage.prototype, "slides", void 0);
    MainShopPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-main-shop',
            template: __webpack_require__(/*! ./main-shop.page.html */ "./src/app/main-shop/main-shop.page.html"),
            styles: [__webpack_require__(/*! ./main-shop.page.scss */ "./src/app/main-shop/main-shop.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shoppers_cart_service__WEBPACK_IMPORTED_MODULE_2__["ShoppersCartService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], MainShopPage);
    return MainShopPage;
}());



/***/ })

}]);
//# sourceMappingURL=main-shop-main-shop-module.js.map
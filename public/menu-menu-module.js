(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["menu-menu-module"],{

/***/ "./src/app/auth-guard.service.ts":
/*!***************************************!*\
  !*** ./src/app/auth-guard.service.ts ***!
  \***************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");



var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(auth) {
        this.auth = auth;
    }
    AuthGuardService.prototype.canActivate = function () {
        return this.auth.isAuthenticated();
    };
    AuthGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "./src/app/menu/menu.module.ts":
/*!*************************************!*\
  !*** ./src/app/menu/menu.module.ts ***!
  \*************************************/
/*! exports provided: MenuPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPageModule", function() { return MenuPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _menu_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./menu.page */ "./src/app/menu/menu.page.ts");
/* harmony import */ var _auth_guard_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../auth-guard.service */ "./src/app/auth-guard.service.ts");








var routes = [
    {
        path: 'menu',
        component: _menu_page__WEBPACK_IMPORTED_MODULE_6__["MenuPage"],
        children: [
            //  { path: '', redirectTo: 'login', pathMatch: 'full' },
            { path: 'home', loadChildren: '../home/home.module#HomePageModule' },
            { path: 'login', loadChildren: '../login/login.module#LoginPageModule' },
            { path: 'contact', loadChildren: '../contact/contact.module#ContactPageModule' },
            { path: 'shoppers-cart', loadChildren: '../shoppers-cart/shoppers-cart.module#ShoppersCartPageModule' },
            { path: 'main-shop', loadChildren: '../main-shop/main-shop.module#MainShopPageModule' },
            { path: 'checkout/:totals', loadChildren: '../checkout/checkout.module#CheckoutPageModule', canActivate: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_7__["AuthGuardService"]]
            },
            { path: 'view-product', loadChildren: '../view-product/view-product.module#ViewProductPageModule' },
            { path: 'shoes', loadChildren: '../shoes/shoes.module#ShoesPageModule' },
            { path: 'suits', loadChildren: '../suits/suits.module#SuitsPageModule' },
            { path: 'bags', loadChildren: '../bags/bags.module#BagsPageModule' },
            { path: 'register', loadChildren: '../register/register.module#RegisterPageModule' },
            { path: 'other-items', loadChildren: '../other-items/other-items.module#OtherItemsPageModule' },
            { path: 'items', loadChildren: '../items/items.module#ItemsPageModule' },
            { path: 'history', loadChildren: '../history/history.module#HistoryPageModule' },
            { path: 'accountslanding', loadChildren: '../accountslanding/accountslanding.module#AccountslandingPageModule' },
            { path: 'media', loadChildren: '../media/media.module#MediaPageModule' },
            { path: 'reset-password', loadChildren: '../reset-password/reset-password.module#ResetPasswordPageModule' },
            { path: 'sendmail-reset/:id', loadChildren: '../sendmail-reset/sendmail-reset.module#SendmailResetPageModule' },
            { path: 'preview-media/:id', loadChildren: '../preview-media/preview-media.module#PreviewMediaPageModule' },
        ]
    },
    {
        path: '',
        redirectTo: '/menu/home'
    }
];
var MenuPageModule = /** @class */ (function () {
    function MenuPageModule() {
    }
    MenuPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_menu_page__WEBPACK_IMPORTED_MODULE_6__["MenuPage"]]
        })
    ], MenuPageModule);
    return MenuPageModule;
}());



/***/ }),

/***/ "./src/app/menu/menu.page.html":
/*!*************************************!*\
  !*** ./src/app/menu/menu.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-split-pane >\r\n  <ion-menu contentId=\"content\" style=\"max-width: 12.5em;\">\r\n    <ion-header no-border>\r\n      <ion-toolbar>\r\n        <ion-title style=\"color:white\">\r\n          MENU\r\n        </ion-title>\r\n      </ion-toolbar>\r\n    </ion-header>\r\n\r\n    <ion-content>\r\n      <p text-center></p>\r\n      <div class=\"menu-styles\">\r\n        <!-- <ion-icon style=\"font-size: 40px\" name=\"person\"></ion-icon> -->\r\n        <img src=\"/assets/PreetiLogo.png\" style=\"height:100px; width: 100px;\"/>\r\n        <p *ngIf=\"checkAuth\">{{name}}</p>\r\n    </div>\r\n            <ion-list lines=\"none\">\r\n        <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let p of pages \">\r\n            <ion-item [routerLink]=\"p.url\" routerDirection=\"root\" [class.active-item]=\"selectedPath === p.url\" no-lines>\r\n                <ion-icon style=\"margin-right: 10%\" item-start [name]=\"p.icon\"> </ion-icon>                       \r\n              {{p.title }}\r\n            </ion-item>\r\n        </ion-menu-toggle>\r\n      </ion-list>\r\n    </ion-content>\r\n    <ion-footer style =\"font-weight: bold;\">Preeti@2019</ion-footer>\r\n  </ion-menu>\r\n\r\n  <ion-router-outlet id=\"content\" main></ion-router-outlet>\r\n</ion-split-pane>"

/***/ }),

/***/ "./src/app/menu/menu.page.scss":
/*!*************************************!*\
  !*** ./src/app/menu/menu.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".active-item {\n  border-left: 8px solid var(--ion-color-dark); }\n\n.back-color {\n  background-color: black;\n  color: aliceblue; }\n\n.menu-styles {\n  max-width: 12em;\n  max-height: 150px;\n  margin-left: auto;\n  margin-right: auto; }\n\nion-toolbar {\n  --background: transparent; }\n\nion-list {\n  background: transparent;\n  font-weight: bold; }\n\nion-item {\n  font-family: Open Sans;\n  --background: transparent; }\n\nion-content {\n  --background: transparent; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudS9DOlxcVXNlcnNcXEF0dGFpblxcZGVza3RvcFxccHJvamVjdHNcXGFwXFxhcHBhcmVsLWVjb21tZXJjZS9zcmNcXGFwcFxcbWVudVxcbWVudS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw0Q0FBNEMsRUFBQTs7QUFHaEQ7RUFDSSx1QkFBdUI7RUFDdkIsZ0JBQWdCLEVBQUE7O0FBR3BCO0VBRUksZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsa0JBQWtCLEVBQUE7O0FBTWxCO0VBQ0kseUJBQWEsRUFBQTs7QUFHakI7RUFDSSx1QkFBdUI7RUFDdkIsaUJBQWlCLEVBQUE7O0FBR3JCO0VBR0ksc0JBQXVCO0VBQ3ZCLHlCQUFhLEVBQUE7O0FBR2pCO0VBQ0kseUJBQWEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21lbnUvbWVudS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWN0aXZlLWl0ZW0ge1xyXG4gICAgYm9yZGVyLWxlZnQ6IDhweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItZGFyayk7XHJcbiAgICBcclxufVxyXG4uYmFjay1jb2xvciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIGNvbG9yOiBhbGljZWJsdWU7IFxyXG59XHJcblxyXG4ubWVudS1zdHlsZXN7XHJcbiAgICAvL2JvcmRlcjogMC41ZW0gc29saWQgcmVkO1xyXG4gICAgbWF4LXdpZHRoOiAxMmVtOyBcclxuICAgIG1heC1oZWlnaHQ6IDE1MHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbn1cclxuLy8gaW9uLW1lbnUge1xyXG4vLyAgICAgLy8tLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jdXN0b20tbWVudSk7XHJcbi8vICAgICAvLyBtYXgtd2lkdGg6IDFlbTsgXHJcbi8vIH1cclxuICAgIGlvbi10b29sYmFyIHtcclxuICAgICAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgfVxyXG5cclxuICAgIGlvbi1saXN0IHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAvL2NvbG9yOiAjZmZmO1xyXG4gICAgfVxyXG4gICAgaW9uLWl0ZW0ge1xyXG4gICAgICAgIC8vIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICAgICAgLy9jb2xvcjogI2ZmZjtcclxuICAgICAgICBmb250LWZhbWlseTogT3BlbiBTYW5zIDtcclxuICAgICAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgaW9uLWNvbnRlbnQge1xyXG4gICAgICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICB9XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/menu/menu.page.ts":
/*!***********************************!*\
  !*** ./src/app/menu/menu.page.ts ***!
  \***********************************/
/*! exports provided: MenuPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPage", function() { return MenuPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");




var MenuPage = /** @class */ (function () {
    function MenuPage(router, authenticator) {
        var _this = this;
        this.router = router;
        this.authenticator = authenticator;
        this.pages = [
            {
                title: 'Home',
                url: '/menu/home',
                icon: 'home'
            },
            {
                title: 'Account',
                url: '/menu/accountslanding',
                icon: 'person'
            },
            {
                title: 'Shop',
                url: '/menu/media',
                icon: 'shirt'
            },
            {
                title: 'Cart',
                url: '/menu/shoppers-cart',
                icon: 'cart'
            },
            {
                title: 'Contact',
                url: '/menu/contact',
                icon: 'call'
            }
        ];
        this.selectedPath = '';
        this.router.events.subscribe(function (event) {
            _this.selectedPath = event.url;
        });
    }
    MenuPage.prototype.ngOnInit = function () {
        var _this = this;
        this.checkAuth = this.authenticator.authenticationState.value;
        this.authenticator.getSpecialData().subscribe(function (res) {
            _this.name = res['name'];
        });
    };
    MenuPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.page.html */ "./src/app/menu/menu.page.html"),
            styles: [__webpack_require__(/*! ./menu.page.scss */ "./src/app/menu/menu.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], MenuPage);
    return MenuPage;
}());



/***/ })

}]);
//# sourceMappingURL=menu-menu-module.js.map
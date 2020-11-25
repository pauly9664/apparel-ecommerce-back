(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["items-items-module"],{

/***/ "./src/app/items/items.module.ts":
/*!***************************************!*\
  !*** ./src/app/items/items.module.ts ***!
  \***************************************/
/*! exports provided: ItemsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemsPageModule", function() { return ItemsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _products_mod_products_mod_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../products-mod/products-mod.module */ "./src/app/products-mod/products-mod.module.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _items_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./items.page */ "./src/app/items/items.page.ts");








var routes = [
    {
        path: '',
        component: _items_page__WEBPACK_IMPORTED_MODULE_7__["ItemsPage"]
    }
];
var ItemsPageModule = /** @class */ (function () {
    function ItemsPageModule() {
    }
    ItemsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _items_page__WEBPACK_IMPORTED_MODULE_7__["ItemsPage"]
                    }
                ]),
                _products_mod_products_mod_module__WEBPACK_IMPORTED_MODULE_5__["ProductsModModule"]
            ],
            declarations: [_items_page__WEBPACK_IMPORTED_MODULE_7__["ItemsPage"]]
        })
    ], ItemsPageModule);
    return ItemsPageModule;
}());



/***/ }),

/***/ "./src/app/items/items.page.html":
/*!***************************************!*\
  !*** ./src/app/items/items.page.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"dark\">\r\n      <ion-buttons slot=\"start\">\r\n          <ion-back-button defaultHref=\"/\"></ion-back-button>\r\n        </ion-buttons>\r\n    <ion-title text-center> Our products ...</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button (click) =\"autoClose = !autoClose\">\r\n        <ion-icon slot=\"icon-only\" name=\"close\" *ngIf=\"autoClose\"></ion-icon>\r\n        <ion-icon slot=\"icon-only\" name=\"resize\" *ngIf=\"!autoClose\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<div class=\"poster-image\"></div>\r\n<ion-content [scrollEvents]=\"true\" class=\"poster-image\">\r\n  <h1 style=\"color: linear-gradient\" text-center> Select Item </h1>\r\n  <ion-list *ngFor = \"let item of produce; let i = index;\" class=\"accordion-list\" lines=\"none\" detail=\"false\" no-padding>\r\n   <ion-item tappable (click)=\"toggleSection(i)\" [ngClass]=\"{'section-active': item.open, 'section': !item.open}\">\r\n     <ion-icon slot=\"start\" name=\"add\" *ngIf=\"!item.open\"></ion-icon>\r\n     <ion-icon slot=\"end\" name=\"arrow-dropdown\" *ngIf=\"item.open\"></ion-icon>\r\n     <ion-label>\r\n       {{ item.name }}\r\n     </ion-label>\r\n   </ion-item>\r\n   <div *ngIf=\"item.children && item.open\">\r\n     <ion-list *ngFor=\"let child of item.children; let j = index;\" lines=\"none\" class=\"child-list\">\r\n        <ion-item tappable (click)=\"toggleItem(i, j)\" [ngClass]=\"{'child-active': child.open, 'child': !child.open}\">\r\n            <ion-label>\r\n             <p style=\"color: #000\" text-center>{{ child.name}}</p>\r\n            </ion-label>\r\n          </ion-item>\r\n          <app-products [products]=\"child\" *ngIf=\"!child.children\"></app-products>\r\n          <ion-list *ngIf=\"child.children && child.open\" class=\"products-list\" lines=\"none\">\r\n            <!-- <app-products [products] = \"products\" *ngFor=\"let products of child.children\"></app-products> -->\r\n          </ion-list>\r\n     </ion-list>\r\n   </div> \r\n\r\n   <p *ngIf=\"item.children.length == 0 && item.open\" text-center style=\"color: red\"> No items, items under this category have been depleted</p>\r\n  </ion-list>\r\n\r\n\r\n      \r\n\r\n"

/***/ }),

/***/ "./src/app/items/items.page.scss":
/*!***************************************!*\
  !*** ./src/app/items/items.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".staythere {\n  width: 100%;\n  height: 100px;\n  border-radius: 10px;\n  margin-bottom: 10px; }\n\n.align-center {\n  width: 300px;\n  margin-left: auto;\n  margin-right: auto; }\n\n.stayOut {\n  width: 300px;\n  margin-left: 0%;\n  margin-right: 0%; }\n\n.back-ground {\n  --background: #ffff url('/assets/p20.jpg') center center/contain; }\n\n.details {\n  background-color: crimson;\n  -webkit-text-fill-color: aliceblue;\n  padding-top: 1%;\n  padding-bottom: 2%;\n  padding-right: 1%; }\n\nion-content {\n  --background: var(--ion-color-light); }\n\n.accordion-list {\n  margin-bottom: 4px;\n  margin-left: auto;\n  margin-right: auto;\n  max-width: 300px;\n  --ion-item-background: white; }\n\n.accordion-list .section, .accordion-list .section-white {\n    --min-height: 28px;\n    font-weight: bold;\n    font-family: serif; }\n\n.section {\n  --ion-item-color: #000; }\n\n.section-active {\n  --ion-item-background:linear-gradient(to right, #F18C8E, #F0B784);\n  --ion-item-color: #fff;\n  font-weight: bold; }\n\n.section-active ion-icon {\n    color: #fff; }\n\n.poster-image {\n  background: url(\"/assets/afro1.jpg\"); }\n\n.child-list {\n  padding: 0px;\n  margin: 0px;\n  font-weight: bold; }\n\n.child-list .child, .child-list .child-active {\n    margin-bottom: 2px;\n    font-weight: bold; }\n\n.child {\n  --ion-item-color: #000; }\n\n.child-active {\n  --ion-item-color: #fff;\n  --ion-item-background: whitesmoke; }\n\n.child-active ion-icon {\n    color: #fff; }\n\nproducts-list {\n  padding: 0px;\n  margin: 0px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaXRlbXMvQzpcXFVzZXJzXFxBdHRhaW5cXGRlc2t0b3BcXHByb2plY3RzXFxhcFxcYXBwYXJlbC1lY29tbWVyY2Uvc3JjXFxhcHBcXGl0ZW1zXFxpdGVtcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFXO0VBQ1gsYUFBYTtFQUdiLG1CQUFtQjtFQUNuQixtQkFBbUIsRUFBQTs7QUFFdkI7RUFDSSxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGtCQUFrQixFQUFBOztBQUV0QjtFQUNJLFlBQVk7RUFDWixlQUFlO0VBQ2YsZ0JBQWdCLEVBQUE7O0FBRXBCO0VBQ0ksZ0VBQWEsRUFBQTs7QUFFakI7RUFDSSx5QkFBd0I7RUFDeEIsa0NBQWtDO0VBQ2xDLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0ksb0NBQWEsRUFBQTs7QUFFakI7RUFDSSxrQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsNEJBQXNCLEVBQUE7O0FBTDFCO0lBUVEsa0JBQWE7SUFFYixpQkFBaUI7SUFDakIsa0JBQWtCLEVBQUE7O0FBTTFCO0VBRUksc0JBQWlCLEVBQUE7O0FBR3JCO0VBQ0ksaUVBQXNCO0VBQ3RCLHNCQUFpQjtFQUNqQixpQkFBaUIsRUFBQTs7QUFIckI7SUFNUSxXQUFXLEVBQUE7O0FBSW5CO0VBQ0ksb0NBQW9DLEVBQUE7O0FBRXhDO0VBQ0ksWUFBWTtFQUNaLFdBQVc7RUFDWCxpQkFBaUIsRUFBQTs7QUFIckI7SUFLUSxrQkFBa0I7SUFDbEIsaUJBQWlCLEVBQUE7O0FBR3pCO0VBRUksc0JBQWlCLEVBQUE7O0FBR3JCO0VBRUksc0JBQWlCO0VBQ2pCLGlDQUFzQixFQUFBOztBQUgxQjtJQU1RLFdBQVcsRUFBQTs7QUFHbkI7RUFDSSxZQUFZO0VBQ1osV0FBVyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvaXRlbXMvaXRlbXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN0YXl0aGVyZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDsgIFxyXG59XHJcbi5hbGlnbi1jZW50ZXIge1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbn1cclxuLnN0YXlPdXQge1xyXG4gICAgd2lkdGg6IDMwMHB4OyBcclxuICAgIG1hcmdpbi1sZWZ0OiAwJTsgXHJcbiAgICBtYXJnaW4tcmlnaHQ6IDAlOyBcclxufVxyXG4uYmFjay1ncm91bmQge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjZmZmZiB1cmwoJy9hc3NldHMvcDIwLmpwZycpIGNlbnRlciBjZW50ZXIvY29udGFpbjtcclxufVxyXG4uZGV0YWlscyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOmNyaW1zb247XHJcbiAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogYWxpY2VibHVlO1xyXG4gICAgcGFkZGluZy10b3A6IDElO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDIlO1xyXG4gICAgcGFkZGluZy1yaWdodDogMSU7XHJcbn1cclxuXHJcbmlvbi1jb250ZW50e1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xyXG59XHJcbi5hY2NvcmRpb24tbGlzdHtcclxuICAgIG1hcmdpbi1ib3R0b20gOiA0cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIG1heC13aWR0aDogMzAwcHg7XHJcbiAgICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICBcclxuICAgIC5zZWN0aW9uLCAuc2VjdGlvbi13aGl0ZSB7XHJcbiAgICAgICAgLS1taW4taGVpZ2h0OiAyOHB4O1xyXG4gICAgXHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IHNlcmlmO1xyXG4gICAgfVxyXG59XHJcbi8vIGlvbi1saXN0e1xyXG4vLyAgICAvLyBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNGMThDOEUsICNGMEI3ODQpO1xyXG4vLyB9XHJcbi5zZWN0aW9ue1xyXG4gICAgLy8gLS1pb24taXRlbS1iYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIC0taW9uLWl0ZW0tY29sb3I6ICMwMDA7XHJcbiAgICBcclxufVxyXG4uc2VjdGlvbi1hY3RpdmV7XHJcbiAgICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjRjE4QzhFLCAjRjBCNzg0KTtcclxuICAgIC0taW9uLWl0ZW0tY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuXHJcbiAgICBpb24taWNvbiB7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcblxyXG4gICAgfVxyXG59XHJcbi5wb3N0ZXItaW1hZ2V7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvYWZybzEuanBnJyk7XHJcbn1cclxuLmNoaWxkLWxpc3R7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgLmNoaWxkLCAuY2hpbGQtYWN0aXZle1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDJweDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIH1cclxufVxyXG4uY2hpbGR7XHJcbiAgICAvLyAtLWlvbi1pdGVtLWJhY2tncm91bmQ6ICNlOGU3ZTY7XHJcbiAgICAtLWlvbi1pdGVtLWNvbG9yOiAjMDAwO1xyXG59XHJcblxyXG4uY2hpbGQtYWN0aXZle1xyXG4gICAgLy8gLS1pb24taXRlbS1iYWNrZ3JvdW5kOiAjZmFkODZiO1xyXG4gICAgLS1pb24taXRlbS1jb2xvcjogI2ZmZjtcclxuICAgIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogd2hpdGVzbW9rZTtcclxuICAgIFxyXG4gICAgaW9uLWljb257XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICB9XHJcbn1cclxucHJvZHVjdHMtbGlzdHtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIG1hcmdpbjogMHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/items/items.page.ts":
/*!*************************************!*\
  !*** ./src/app/items/items.page.ts ***!
  \*************************************/
/*! exports provided: ItemsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemsPage", function() { return ItemsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var ItemsPage = /** @class */ (function () {
    function ItemsPage(http) {
        var _this = this;
        this.http = http;
        this.it = null;
        this.autoClose = false;
        this.http.get('assets/products.json').subscribe(function (res) {
            _this.produce = res['products'];
            _this.produce[0].open = true;
        });
    }
    ItemsPage.prototype.toggleSection = function (index) {
        this.produce[index].open = !this.produce[index].open;
        if (this.autoClose && this.produce[index].open) {
            this.produce.filter(function (item, itemIndex) { return itemIndex != index; }).map(function (item) { return item.open = false; });
        }
    };
    ItemsPage.prototype.toggleItem = function (index, childIndex) {
        this.produce[index].children[childIndex].open = !this.produce[index].children[childIndex].open;
    };
    ItemsPage.prototype.ngOnInit = function () {
    };
    ItemsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-items',
            template: __webpack_require__(/*! ./items.page.html */ "./src/app/items/items.page.html"),
            styles: [__webpack_require__(/*! ./items.page.scss */ "./src/app/items/items.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ItemsPage);
    return ItemsPage;
}());



/***/ }),

/***/ "./src/app/products-mod/products-mod.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/products-mod/products-mod.module.ts ***!
  \*****************************************************/
/*! exports provided: ProductsModModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsModModule", function() { return ProductsModModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../products/products.component */ "./src/app/products/products.component.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





var ProductsModModule = /** @class */ (function () {
    function ProductsModModule() {
    }
    ProductsModModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_products_products_component__WEBPACK_IMPORTED_MODULE_3__["ProductsComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"]
            ],
            exports: [_products_products_component__WEBPACK_IMPORTED_MODULE_3__["ProductsComponent"]]
        })
    ], ProductsModModule);
    return ProductsModModule;
}());



/***/ }),

/***/ "./src/app/products/products.component.html":
/*!**************************************************!*\
  !*** ./src/app/products/products.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-item class =\"child-item\" text-wrap detail=\"false\" lines=\"none\">\n  <ion-row no-padding align-items-center>\n    <ion-col size=\"9\">\n      <ion-row no-padding>\n        <ion-col size=\"12\">\n          <!-- <h3> {{ products.name }} </h3> -->\n        </ion-col>\n        <ion-col size=\"12\">\n          <!-- <p text-lowercase color=\"medium\"> {{ products.information }}</p> -->\n        </ion-col>\n      </ion-row>\n    </ion-col>\n  </ion-row>\n</ion-item>"

/***/ }),

/***/ "./src/app/products/products.component.scss":
/*!**************************************************!*\
  !*** ./src/app/products/products.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".child-item {\n  --ion-item-background: white;\n  --padding-start: 8px;\n  --inner-padding-end: 8px;\n  margin-bottom: 2px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdHMvQzpcXFVzZXJzXFxBdHRhaW5cXGRlc2t0b3BcXHByb2plY3RzXFxhcFxcYXBwYXJlbC1lY29tbWVyY2Uvc3JjXFxhcHBcXHByb2R1Y3RzXFxwcm9kdWN0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDRCQUFzQjtFQUN0QixvQkFBZ0I7RUFDaEIsd0JBQW9CO0VBQ3BCLGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcHJvZHVjdHMvcHJvZHVjdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2hpbGQtaXRlbSB7XHJcbiAgICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiA4cHg7XHJcbiAgICAtLWlubmVyLXBhZGRpbmctZW5kOiA4cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAycHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/products/products.component.ts":
/*!************************************************!*\
  !*** ./src/app/products/products.component.ts ***!
  \************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var ProductsComponent = /** @class */ (function () {
    function ProductsComponent(toastCtrlr) {
        this.toastCtrlr = toastCtrlr;
    }
    ProductsComponent.prototype.ngOnInit = function () { };
    ProductsComponent.prototype.selectProduct = function (products) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastCtrlr.create({
                            message: "You have selected " + products.name
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('products'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ProductsComponent.prototype, "products", void 0);
    ProductsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-products',
            template: __webpack_require__(/*! ./products.component.html */ "./src/app/products/products.component.html"),
            styles: [__webpack_require__(/*! ./products.component.scss */ "./src/app/products/products.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]])
    ], ProductsComponent);
    return ProductsComponent;
}());



/***/ })

}]);
//# sourceMappingURL=items-items-module.js.map
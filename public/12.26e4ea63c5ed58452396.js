(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{WPSa:function(l,n,u){"use strict";u.r(n);var t=u("CcnG"),e=u("mrSG"),o=u("OleK"),r=u("ZZ/e"),i=u("9I/R"),c=function(){function l(l,n,u){this.cartService=l,this.modalCtrl=n,this.router=u,this.cart=[],this.items=[],this.sliderConfig={spaceBetween:10,centeredSlides:!0,slidesPerView:1.5,watchSlidesProgress:!0},this.productCategory=[],this.reloadImages()}return l.prototype.ngOnInit=function(){this.queryProductsData(),this.cart=this.cartService.getCart(),this.cartItemCount=this.cartService.getCartItemCount(),console.log("Reveal",this.catchit)},l.prototype.addToCart=function(l){return e.b(this,void 0,void 0,(function(){return e.e(this,(function(n){return this.cartService.addProduct(l),[2]}))}))},l.prototype.filterItems=function(l){var n=this;this.categorySelected=l.target.value,console.log("dropdown cat:",this.categorySelected),this.item=this.item.filter((function(l){return l.category==n.categorySelected}))},l.prototype.queryProductsData=function(){var l=this;this.cartService.getImages().subscribe((function(n){l.products=n,l.products.forEach((function(n){l.productCategory.push(n.category),console.log("categories",n.category)}))}))},l.prototype.reloadImages=function(){var l=this;this.cartService.getImages().subscribe((function(n){l.item=n,console.log("cheki ii kwanza",l.item)}))},l.prototype.openImage=function(l){return e.b(this,void 0,void 0,(function(){return e.e(this,(function(n){switch(n.label){case 0:return console.log(l),[4,this.modalCtrl.create({component:i.a,componentProps:{img:l}})];case 1:return n.sent().present(),[2]}}))}))},l.prototype.viewProduct=function(l){this.cartService.addProduct(l)},l.prototype.openCart=function(){this.router.navigate(["menu/shoppers-cart"])},l.prototype.slidePrev=function(){this.slides.slidePrev()},l.prototype.slideNext=function(){this.slides.slideNext()},l}(),a=function(){return function(){}}(),b=u("pMnS"),s=u("oBZk"),p=u("Ip0R"),d=u("gIcY"),f=u("ZYCi"),g=t.pb({encapsulation:0,styles:[["ion-badge[_ngcontent-%COMP%]{color:#fff;position:absolute;top:0;right:0;border-radius:100%}.category-block[_ngcontent-%COMP%]{margin:5px 50px}ion-row[_ngcontent-%COMP%]{background-image:linear-gradient(to right,#f18c8e,#f0b784)}p.navigation-arrows[_ngcontent-%COMP%]{border:5px round;font-size:small}.category-banner[_ngcontent-%COMP%]{--ion-background-color:var(--custom-menu);height:40px;padding:10px;font-weight:500}.new-card[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:190px;height:350px}.display-items[_ngcontent-%COMP%]{background-size:cover;height:400px}"]],data:{}});function h(l){return t.Lb(0,[(l()(),t.rb(0,0,null,null,3,"ion-badge",[],null,null,null,s.N,s.c)),t.qb(1,49152,null,0,r.j,[t.h,t.k,t.z],null,null),(l()(),t.Jb(2,0,["",""])),t.Db(131072,p.b,[t.h])],null,(function(l,n){var u=n.component;l(n,2,0,t.Kb(n,2,0,t.Bb(n,3).transform(u.cartItemCount)))}))}function m(l){return t.Lb(0,[(l()(),t.rb(0,0,null,null,4,"option",[],null,null,null,null,null)),t.qb(1,147456,null,0,d.n,[t.k,t.E,[8,null]],{value:[0,"value"]},null),t.qb(2,147456,null,0,d.u,[t.k,t.E,[8,null]],{value:[0,"value"]},null),(l()(),t.rb(3,0,null,null,1,"span",[["style","color:#000"]],null,null,null,null,null)),(l()(),t.Jb(4,null,["",""]))],(function(l,n){l(n,1,0,n.context.$implicit),l(n,2,0,n.context.$implicit)}),(function(l,n){l(n,4,0,n.context.$implicit)}))}function k(l){return t.Lb(0,[(l()(),t.rb(0,0,null,null,14,"div",[],null,null,null,null,null)),(l()(),t.rb(1,0,null,null,13,"ion-card",[["class","new-card"]],null,null,null,s.T,s.f)),t.qb(2,49152,null,0,r.m,[t.h,t.k,t.z],null,null),(l()(),t.rb(3,0,null,0,7,"ion-card-header",[],null,null,null,s.R,s.h)),t.qb(4,49152,null,0,r.o,[t.h,t.k,t.z],null,null),(l()(),t.rb(5,0,null,0,3,"ion-card-title",[["style","font-family: fantasy"]],null,null,null,s.S,s.i)),t.qb(6,49152,null,0,r.q,[t.h,t.k,t.z],null,null),(l()(),t.rb(7,0,null,0,1,"p",[["style","font-size: small;"]],null,null,null,null,null)),(l()(),t.Jb(8,null,[""," - ",""])),(l()(),t.rb(9,0,null,0,1,"p",[["click","getMarketplaceItems()"],["style","font-family: Fantasy; color:burlywood"],["tappable",""]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.openImage(l.parent.context.$implicit)&&t),t}),null,null)),(l()(),t.Jb(-1,null,["VIEW PRODUCT"])),(l()(),t.rb(11,0,null,0,3,"ion-card-content",[],null,null,null,s.Q,s.g)),t.qb(12,49152,null,0,r.n,[t.h,t.k,t.z],null,null),(l()(),t.rb(13,0,null,0,1,"div",[["class","display-items"]],null,null,null,null,null)),(l()(),t.rb(14,0,null,null,0,"img",[["tappable",""]],[[8,"src",4]],null,null,null,null))],null,(function(l,n){l(n,8,0,n.parent.context.$implicit.description,n.parent.context.$implicit.price),l(n,14,0,n.parent.context.$implicit.url)}))}function y(l){return t.Lb(0,[(l()(),t.rb(0,0,null,null,3,"ion-slide",[],null,null,null,s.nb,s.C)),t.qb(1,49152,null,0,r.qb,[t.h,t.k,t.z],null,null),(l()(),t.ib(16777216,null,0,1,null,k)),t.qb(3,16384,null,0,p.m,[t.Q,t.M],{ngIf:[0,"ngIf"]},null)],(function(l,n){l(n,3,0,n.parent.context.$implicit.expanded)}),null)}function v(l){return t.Lb(0,[(l()(),t.rb(0,0,null,null,15,"div",[["class","category-block"]],null,null,null,null,null)),(l()(),t.rb(1,0,null,null,10,"ion-row",[["class","category-banner"],["no-padding",""]],null,null,null,s.lb,s.A)),t.qb(2,49152,null,0,r.jb,[t.h,t.k,t.z],null,null),t.qb(3,16384,null,0,r.d,[t.k],null,null),(l()(),t.rb(4,0,null,0,7,"ion-col",[["align-self-center",""],["id","filerCat"],["style"," color: #fff;font-family: Open Sans"],["tappable",""],["text-center",""]],null,null,null,s.U,s.j)),t.qb(5,49152,null,0,r.t,[t.h,t.k,t.z],null,null),t.qb(6,16384,null,0,r.d,[t.k],null,null),(l()(),t.rb(7,0,null,0,1,"a",[],null,null,null,null,null)),(l()(),t.Jb(8,null,["",""])),(l()(),t.rb(9,0,null,0,2,"select",[["style","max-width:80px; margin-left:20%"],["type","text"]],null,null,null,null,null)),(l()(),t.ib(16777216,null,null,1,null,m)),t.qb(11,278528,null,0,p.l,[t.Q,t.M,t.s],{ngForOf:[0,"ngForOf"]},null),(l()(),t.rb(12,0,null,null,3,"ion-slides",[],null,null,null,s.ob,s.D)),t.qb(13,49152,[[1,4]],0,r.rb,[t.h,t.k,t.z],{options:[0,"options"]},null),(l()(),t.ib(16777216,null,0,1,null,y)),t.qb(15,278528,null,0,p.l,[t.Q,t.M,t.s],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){var u=n.component;l(n,11,0,u.productCategory),l(n,13,0,u.sliderConfig),l(n,15,0,u.item)}),(function(l,n){l(n,8,0,n.context.$implicit.category)}))}function q(l){return t.Lb(0,[t.Hb(671088640,1,{slides:0}),(l()(),t.rb(1,0,null,null,20,"ion-header",[],null,null,null,s.Z,s.o)),t.qb(2,49152,null,0,r.B,[t.h,t.k,t.z],null,null),(l()(),t.rb(3,0,null,0,18,"ion-toolbar",[["color","dark"]],null,null,null,s.ub,s.J)),t.qb(4,49152,null,0,r.Cb,[t.h,t.k,t.z],{color:[0,"color"]},null),(l()(),t.rb(5,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,s.P,s.e)),t.qb(6,49152,null,0,r.l,[t.h,t.k,t.z],null,null),(l()(),t.rb(7,0,null,0,2,"ion-back-button",[["defaultHref","/"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==t.Bb(l,9).onClick(u)&&e),e}),s.M,s.b)),t.qb(8,49152,null,0,r.g,[t.h,t.k,t.z],{defaultHref:[0,"defaultHref"]},null),t.qb(9,16384,null,0,r.h,[[2,r.ib],r.Ib],{defaultHref:[0,"defaultHref"]},null),(l()(),t.rb(10,0,null,0,3,"ion-title",[["text-center",""]],null,null,null,s.tb,s.I)),t.qb(11,49152,null,0,r.Ab,[t.h,t.k,t.z],null,null),t.qb(12,16384,null,0,r.d,[t.k],null,null),(l()(),t.Jb(-1,0,[" Shop "])),(l()(),t.rb(14,0,null,0,7,"ion-buttons",[["slot","end"]],null,null,null,s.P,s.e)),t.qb(15,49152,null,0,r.l,[t.h,t.k,t.z],null,null),(l()(),t.rb(16,0,null,0,5,"ion-button",[],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.openCart()&&t),t}),s.O,s.d)),t.qb(17,49152,null,0,r.k,[t.h,t.k,t.z],null,null),(l()(),t.ib(16777216,null,0,1,null,h)),t.qb(19,16384,null,0,p.m,[t.Q,t.M],{ngIf:[0,"ngIf"]},null),(l()(),t.rb(20,0,null,0,1,"ion-icon",[["name","cart"],["slot","icon-only"]],null,null,null,s.ab,s.p)),t.qb(21,49152,null,0,r.C,[t.h,t.k,t.z],{name:[0,"name"]},null),(l()(),t.rb(22,0,null,null,3,"ion-content",[["class","padding"],["scroll","true"]],null,null,null,s.V,s.k)),t.qb(23,49152,null,0,r.u,[t.h,t.k,t.z],null,null),(l()(),t.ib(16777216,null,0,1,null,v)),t.qb(25,278528,null,0,p.l,[t.Q,t.M,t.s],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){var u=n.component;l(n,4,0,"dark"),l(n,8,0,"/"),l(n,9,0,"/"),l(n,19,0,u.cart.length>0),l(n,21,0,"cart"),l(n,25,0,u.item)}),null)}function z(l){return t.Lb(0,[(l()(),t.rb(0,0,null,null,1,"app-main-shop",[],null,null,null,q,g)),t.qb(1,114688,null,0,c,[o.a,r.Hb,f.m],null,null)],(function(l,n){l(n,1,0)}),null)}var C=t.nb("app-main-shop",c,z,{},{},[]);u.d(n,"MainShopPageModuleNgFactory",(function(){return x}));var x=t.ob(a,[],(function(l){return t.yb([t.zb(512,t.j,t.db,[[8,[b.a,C]],[3,t.j],t.x]),t.zb(4608,p.o,p.n,[t.u,[2,p.w]]),t.zb(4608,d.s,d.s,[]),t.zb(4608,r.b,r.b,[t.z,t.g]),t.zb(4608,r.Hb,r.Hb,[r.b,t.j,t.q]),t.zb(4608,r.Lb,r.Lb,[r.b,t.j,t.q]),t.zb(1073742336,p.c,p.c,[]),t.zb(1073742336,d.q,d.q,[]),t.zb(1073742336,d.h,d.h,[]),t.zb(1073742336,r.Eb,r.Eb,[]),t.zb(1073742336,f.o,f.o,[[2,f.u],[2,f.m]]),t.zb(1073742336,a,a,[]),t.zb(1024,f.k,(function(){return[[{path:"",component:c}]]}),[])])}))}}]);
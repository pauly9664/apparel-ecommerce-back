(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{KdJP:function(l,n,u){"use strict";u.r(n);var t=u("CcnG"),o=u("gH9E"),i=function(){function l(l,n){this.bagService=l,this.router=n,this.cart=[],this.bags=[],this.sliderConfig={spaceBetween:10,centeredSlides:!0,slidesPerView:1.8}}return l.prototype.ngOnInit=function(){this.cart=this.bagService.getCart(),this.bags=this.bagService.getProducts()},l.prototype.addToCart=function(l){this.bagService.addProduct(l)},l.prototype.openCart=function(){this.router.navigate(["shoppers-cart"])},l}(),e=function(){return function(){}}(),r=u("pMnS"),b=u("oBZk"),c=u("ZZ/e"),a=u("Ip0R"),p=u("ZYCi"),d=t.pb({encapsulation:0,styles:[["ion-badge[_ngcontent-%COMP%]{color:#fff;position:absolute;top:0;right:0;border-radius:100%}.category-block[_ngcontent-%COMP%]{margin-bottom:4px}.category-banner[_ngcontent-%COMP%]{border-left:8px solid var(--ion-color-secondary);background:var(--ion-color-light);height:40px;padding:10px;font-weight:500}.new-card[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:500px;height:500px}.display-items[_ngcontent-%COMP%]{background-size:cover;height:350px}"]],data:{}});function s(l){return t.Lb(0,[(l()(),t.rb(0,0,null,null,2,"ion-badge",[],null,null,null,b.N,b.c)),t.qb(1,49152,null,0,c.j,[t.h,t.k,t.z],null,null),(l()(),t.Jb(2,0,["",""]))],null,(function(l,n){l(n,2,0,n.component.cart.length)}))}function f(l){return t.Lb(0,[(l()(),t.rb(0,0,null,null,14,"div",[],null,null,null,null,null)),(l()(),t.rb(1,0,null,null,13,"ion-card",[["class","new-card"]],null,null,null,b.T,b.f)),t.qb(2,49152,null,0,c.m,[t.h,t.k,t.z],null,null),(l()(),t.rb(3,0,null,0,11,"ion-card-header",[],null,null,null,b.R,b.h)),t.qb(4,49152,null,0,c.o,[t.h,t.k,t.z],null,null),(l()(),t.rb(5,0,null,0,2,"ion-card-title",[],null,null,null,b.S,b.i)),t.qb(6,49152,null,0,c.q,[t.h,t.k,t.z],null,null),(l()(),t.Jb(7,0,[" "," - $"," "])),(l()(),t.rb(8,0,null,0,6,"ion-card-content",[],null,null,null,b.Q,b.g)),t.qb(9,49152,null,0,c.n,[t.h,t.k,t.z],null,null),(l()(),t.rb(10,0,null,0,1,"div",[["class","display-items"]],null,null,null,null,null)),(l()(),t.rb(11,0,null,null,0,"img",[],[[8,"src",4]],null,null,null,null)),(l()(),t.rb(12,0,null,0,2,"ion-button",[["expand","full"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.addToCart(l.parent.context.$implicit)&&t),t}),b.O,b.d)),t.qb(13,49152,null,0,c.k,[t.h,t.k,t.z],{expand:[0,"expand"]},null),(l()(),t.Jb(-1,0,["+ item in Cart"]))],(function(l,n){l(n,13,0,"full")}),(function(l,n){l(n,7,0,n.parent.context.$implicit.name,n.parent.context.$implicit.price),l(n,11,0,n.parent.context.$implicit.url)}))}function g(l){return t.Lb(0,[(l()(),t.rb(0,0,null,null,3,"ion-slide",[],null,null,null,b.nb,b.C)),t.qb(1,49152,null,0,c.qb,[t.h,t.k,t.z],null,null),(l()(),t.ib(16777216,null,0,1,null,f)),t.qb(3,16384,null,0,a.m,[t.Q,t.M],{ngIf:[0,"ngIf"]},null)],(function(l,n){l(n,3,0,n.parent.context.$implicit.expanded)}),null)}function h(l){return t.Lb(0,[(l()(),t.rb(0,0,null,null,11,"div",[["class","category-block"]],null,null,null,null,null)),(l()(),t.rb(1,0,null,null,6,"ion-row",[["class","category-banner"],["no-padding",""]],null,null,null,b.lb,b.A)),t.qb(2,49152,null,0,c.jb,[t.h,t.k,t.z],null,null),t.qb(3,16384,null,0,c.d,[t.k],null,null),(l()(),t.rb(4,0,null,0,3,"ion-col",[["align-self-center",""],["button",""],["tappable",""],["text-left",""]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=0!=(l.context.$implicit.expanded=!l.context.$implicit.expanded)&&t),t}),b.U,b.j)),t.qb(5,49152,null,0,c.t,[t.h,t.k,t.z],null,null),t.qb(6,16384,null,0,c.d,[t.k],null,null),(l()(),t.Jb(7,0,[" "," "])),(l()(),t.rb(8,0,null,null,3,"ion-slides",[],null,null,null,b.ob,b.D)),t.qb(9,49152,null,0,c.rb,[t.h,t.k,t.z],{options:[0,"options"]},null),(l()(),t.ib(16777216,null,0,1,null,g)),t.qb(11,278528,null,0,a.l,[t.Q,t.M,t.s],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){l(n,9,0,n.component.sliderConfig),l(n,11,0,n.context.$implicit.products)}),(function(l,n){l(n,7,0,n.context.$implicit.category)}))}function k(l){return t.Lb(0,[(l()(),t.rb(0,0,null,null,20,"ion-header",[],null,null,null,b.Z,b.o)),t.qb(1,49152,null,0,c.B,[t.h,t.k,t.z],null,null),(l()(),t.rb(2,0,null,0,18,"ion-toolbar",[],null,null,null,b.ub,b.J)),t.qb(3,49152,null,0,c.Cb,[t.h,t.k,t.z],null,null),(l()(),t.rb(4,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,b.P,b.e)),t.qb(5,49152,null,0,c.l,[t.h,t.k,t.z],null,null),(l()(),t.rb(6,0,null,0,2,"ion-back-button",[["defaultHref","/"]],null,[[null,"click"]],(function(l,n,u){var o=!0;return"click"===n&&(o=!1!==t.Bb(l,8).onClick(u)&&o),o}),b.M,b.b)),t.qb(7,49152,null,0,c.g,[t.h,t.k,t.z],{defaultHref:[0,"defaultHref"]},null),t.qb(8,16384,null,0,c.h,[[2,c.ib],c.Ib],{defaultHref:[0,"defaultHref"]},null),(l()(),t.rb(9,0,null,0,3,"ion-title",[["text-center",""]],null,null,null,b.tb,b.I)),t.qb(10,49152,null,0,c.Ab,[t.h,t.k,t.z],null,null),t.qb(11,16384,null,0,c.d,[t.k],null,null),(l()(),t.Jb(-1,0,[" Shop "])),(l()(),t.rb(13,0,null,0,7,"ion-buttons",[["slot","end"]],null,null,null,b.P,b.e)),t.qb(14,49152,null,0,c.l,[t.h,t.k,t.z],null,null),(l()(),t.rb(15,0,null,0,5,"ion-button",[],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.openCart()&&t),t}),b.O,b.d)),t.qb(16,49152,null,0,c.k,[t.h,t.k,t.z],null,null),(l()(),t.ib(16777216,null,0,1,null,s)),t.qb(18,16384,null,0,a.m,[t.Q,t.M],{ngIf:[0,"ngIf"]},null),(l()(),t.rb(19,0,null,0,1,"ion-icon",[["name","cart"],["slot","icon-only"]],null,null,null,b.ab,b.p)),t.qb(20,49152,null,0,c.C,[t.h,t.k,t.z],{name:[0,"name"]},null),(l()(),t.rb(21,0,null,null,3,"ion-content",[],null,null,null,b.V,b.k)),t.qb(22,49152,null,0,c.u,[t.h,t.k,t.z],null,null),(l()(),t.ib(16777216,null,0,1,null,h)),t.qb(24,278528,null,0,a.l,[t.Q,t.M,t.s],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){var u=n.component;l(n,7,0,"/"),l(n,8,0,"/"),l(n,18,0,u.cart.length>0),l(n,20,0,"cart"),l(n,24,0,u.bags)}),null)}function q(l){return t.Lb(0,[(l()(),t.rb(0,0,null,null,1,"app-bags",[],null,null,null,k,d)),t.qb(1,114688,null,0,i,[o.a,p.m],null,null)],(function(l,n){l(n,1,0)}),null)}var z=t.nb("app-bags",i,q,{},{},[]),m=u("gIcY");u.d(n,"BagsPageModuleNgFactory",(function(){return x}));var x=t.ob(e,[],(function(l){return t.yb([t.zb(512,t.j,t.db,[[8,[r.a,z]],[3,t.j],t.x]),t.zb(4608,a.o,a.n,[t.u,[2,a.w]]),t.zb(4608,m.s,m.s,[]),t.zb(4608,c.b,c.b,[t.z,t.g]),t.zb(4608,c.Hb,c.Hb,[c.b,t.j,t.q]),t.zb(4608,c.Lb,c.Lb,[c.b,t.j,t.q]),t.zb(1073742336,a.c,a.c,[]),t.zb(1073742336,m.q,m.q,[]),t.zb(1073742336,m.h,m.h,[]),t.zb(1073742336,c.Eb,c.Eb,[]),t.zb(1073742336,p.o,p.o,[[2,p.u],[2,p.m]]),t.zb(1073742336,e,e,[]),t.zb(1024,p.k,(function(){return[[{path:"",component:i}]]}),[])])}))}}]);
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const platform_browser_1 = require("@angular/platform-browser");
const router_1 = require("@angular/router");
const angular_1 = require("@ionic/angular");
const ngx_1 = require("@ionic-native/splash-screen/ngx");
const ngx_2 = require("@ionic-native/status-bar/ngx");
const app_routing_module_1 = require("./app-routing.module");
const app_component_1 = require("./app.component");
const ngx_3 = require("@ionic-native/camera/ngx");
const storage_1 = require("@ionic/storage");
let AppModule = class AppModule {
};
AppModule = __decorate([
    core_1.NgModule({
        declarations: [app_component_1.AppComponent],
        entryComponents: [],
        imports: [platform_browser_1.BrowserModule, angular_1.IonicModule.forRoot(), app_routing_module_1.AppRoutingModule,
            storage_1.IonicStorageModule.forRoot()
        ],
        providers: [
            ngx_2.StatusBar,
            ngx_1.SplashScreen,
            ngx_3.Camera,
            { provide: router_1.RouteReuseStrategy, useClass: angular_1.IonicRouteStrategy }
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map
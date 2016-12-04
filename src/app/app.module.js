"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var angular_in_memory_web_api_1 = require('angular-in-memory-web-api');
var in_memory_data_service_1 = require('./hero/in-memory-data.service');
var app_component_1 = require("./app.component");
var hero_detail_component_1 = require('./herodetail/hero-detail.component');
var hero_service_1 = require("./hero/hero.service");
var dashboard_component_1 = require("./dashboard/dashboard.component");
var app_routing_module_1 = require("./app-routing.module");
require('./rxjs-extensions');
var hero_search_component_1 = require("./herosearch/hero-search.component");
require('../assets/css/styles.css');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                angular_in_memory_web_api_1.InMemoryWebApiModule.forRoot(in_memory_data_service_1.InMemoryDataService),
                app_routing_module_1.AppRoutingModule,
                H
            ],
            declarations: [
                app_component_1.AppComponent,
                hero_detail_component_1.HeroDetailComponent,
                dashboard_component_1.DashboardComponent,
                hero_search_component_1.HeroSearchComponent
            ],
            providers: [hero_service_1.HeroService],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map
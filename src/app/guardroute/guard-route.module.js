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
/**
 * Created by yitala on 2016/12/5.
 */
var core_1 = require("@angular/core");
var guard_center_component_1 = require("./guard-center.component");
var router_1 = require("@angular/router");
var auth_guard_service_1 = require("./auth-guard.service");
var relativeRoutes = [
    {
        path: '',
        component: guard_center_component_1.GuardCenterComponent,
        canActivate: [auth_guard_service_1.AuthGuard]
    }
];
var GuardRouteModule = (function () {
    function GuardRouteModule() {
    }
    GuardRouteModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forChild(relativeRoutes)
            ],
            declarations: [
                guard_center_component_1.GuardCenterComponent
            ],
            providers: [auth_guard_service_1.AuthGuard]
        }), 
        __metadata('design:paramtypes', [])
    ], GuardRouteModule);
    return GuardRouteModule;
}());
exports.GuardRouteModule = GuardRouteModule;
//# sourceMappingURL=guard-route.module.js.map
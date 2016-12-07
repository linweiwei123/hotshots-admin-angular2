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
var relative_center_component_1 = require("./relative-center.component");
var relative_a_component_1 = require("./relative-a.component");
var relative_b_component_1 = require("./relative-b.component");
var router_1 = require("@angular/router");
var relativeRoutes = [
    {
        path: '',
        component: relative_center_component_1.RelativeCenterComponent,
        children: [
            {
                path: '',
                component: relative_a_component_1.RelativeAComponent
            },
            {
                path: 'relativeB',
                component: relative_b_component_1.RelativeBComponent
            }
        ]
    }
];
var RelativeRouteModule = (function () {
    function RelativeRouteModule() {
    }
    RelativeRouteModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forChild(relativeRoutes)
            ],
            declarations: [
                relative_center_component_1.RelativeCenterComponent,
                relative_a_component_1.RelativeAComponent,
                relative_b_component_1.RelativeBComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], RelativeRouteModule);
    return RelativeRouteModule;
}());
exports.RelativeRouteModule = RelativeRouteModule;
//# sourceMappingURL=relative-route.module.js.map
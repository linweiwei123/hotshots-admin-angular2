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
var router_1 = require("@angular/router");
var RelativeAComponent = (function () {
    function RelativeAComponent(activatedRoute, router) {
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    ;
    RelativeAComponent.prototype.gotoPageB = function () {
        this.router.navigate(['relativeB'], { relativeTo: this.activatedRoute });
    };
    RelativeAComponent.prototype.gotoPageDashboard = function () {
        this.router.navigate(['../'], { relativeTo: this.activatedRoute });
    };
    RelativeAComponent.prototype.gotoPageHerolist = function () {
        this.router.navigate(['../heroes/list'], { relativeTo: this.activatedRoute });
    };
    RelativeAComponent = __decorate([
        core_1.Component({
            templateUrl: 'relative-a.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router])
    ], RelativeAComponent);
    return RelativeAComponent;
}());
exports.RelativeAComponent = RelativeAComponent;
//# sourceMappingURL=relative-a.component.js.map
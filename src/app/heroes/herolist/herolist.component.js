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
var router_1 = require('@angular/router');
var hero_service_1 = require("../hero/hero.service");
var HerolistComponent = (function () {
    function HerolistComponent(heroService, router, activatedRoute) {
        this.heroService = heroService;
        this.router = router;
        this.activatedRoute = activatedRoute;
    }
    HerolistComponent.prototype.getHeroes = function () {
        var _this = this;
        this.heroService.getHeroesSlowly().then(function (heroes) { return _this.heroes = heroes; });
    };
    HerolistComponent.prototype.onSelect = function (hero) {
        this.selectedHero = hero;
    };
    HerolistComponent.prototype.ngOnInit = function () {
        //此处可选参数失败，未知原因，还需要解决
        // this.activatedRoute.params.switchMap((params:Params)=>{
        //     this.selectId = +params['id'];
        //     console.log(this.selectId);
        // });
        this.getHeroes();
    };
    HerolistComponent.prototype.gotoDetail = function () {
        console.log(this.activatedRoute);
        //因为本级是第二级的导航，所以要获取上级的url path
        var parentPath = this.activatedRoute.parent.routeConfig.path;
        this.router.navigate([("/" + parentPath + "/heroDetail"), this.selectedHero.id]);
    };
    HerolistComponent.prototype.add = function (name) {
        var _this = this;
        name = name.trim();
        if (!name) {
            return;
        }
        this.heroService.create(name)
            .then(function (hero) {
            _this.heroes.push(hero);
            _this.selectedHero = null;
        });
    };
    HerolistComponent.prototype.delete = function (hero) {
        var _this = this;
        this.heroService.delete(hero.id)
            .then(function () {
            _this.heroes = _this.heroes.filter(function (h) { return h !== hero; });
            if (_this.selectedHero === hero) {
                _this.selectedHero = null;
            }
        });
    };
    HerolistComponent = __decorate([
        core_1.Component({
            selector: 'my-heroes',
            templateUrl: 'herolist.component.html',
            styleUrls: ['herolist.component.css']
        }), 
        __metadata('design:paramtypes', [hero_service_1.HeroService, router_1.Router, router_1.ActivatedRoute])
    ], HerolistComponent);
    return HerolistComponent;
}());
exports.HerolistComponent = HerolistComponent;
//# sourceMappingURL=herolist.component.js.map
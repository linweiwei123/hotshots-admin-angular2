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
 * Created by yitala on 2016/12/6.
 */
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var user_service_1 = require("../shared/service/user.service");
var LoginComponent = (function () {
    function LoginComponent(activatedRoute, router, userService, fb) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.userService = userService;
        this.fb = fb;
        this.errors = '';
        this.authForm = this.fb.group({
            'username': '',
            'password': ''
        });
    }
    LoginComponent.prototype.submitForm = function () {
        var user = this.authForm.value;
        var result = this.userService.getAuth(user);
        if (result) {
            this.router.navigate(['/dashboard']);
        }
        else {
            this.errors = '账号或者密码错误';
        }
    };
    LoginComponent = __decorate([
        core_1.Component({
            templateUrl: 'login.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, user_service_1.UserService, forms_1.FormBuilder])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map
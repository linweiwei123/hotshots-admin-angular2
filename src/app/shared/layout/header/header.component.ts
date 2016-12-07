/**
 * Created by yitala on 2016/12/4.
 */

import {Component} from "@angular/core";
import {UserService} from "../../service/user.service";
import {Router} from "@angular/router";
@Component({
    selector:'layout-header',
    templateUrl:'header.component.html'
})

export class HeaderComponent{

    constructor(
        private userService:UserService,
        private router:Router
    ){}

    logout(){
        this.userService.clearAuth();
        this.router.navigateByUrl('/login');
    }
}
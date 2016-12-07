/**
 * Created by Administrator on 2016/11/25.
 */
import {Component, OnInit} from '@angular/core';
import {UserService} from "./shared/service/user.service";

@Component({
    selector:'my-app',
    templateUrl:'app.component.html',
    styleUrls:[]
})

export class AppComponent implements OnInit{
    title = '英雄帖';

    isSingle:boolean;

    constructor(
        private userService:UserService
    ){}

    ngOnInit(): void {
        this.userService.populate();
        this.userService.isAuthenticated.subscribe(
            (isAuthenticated)=>{
                this.isSingle = !isAuthenticated;
            }
        )
    }


}
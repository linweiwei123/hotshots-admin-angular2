/**
 * Created by Administrator on 2016/11/25.
 */
import { Component } from '@angular/core';
import '../assets/css/styles.css';
@Component({
    selector:'my-app',
    template:`
        <h1>{{title}}</h1>
        <nav>
            <a routerLink="/dashboard" class="navbar">dashboard</a>
            <a routerLink="/herolist" class="navbar">herolist</a>
        </nav>
        <router-outlet></router-outlet>
    `,
    styleUrls:['./app.component.css']
})

export class AppComponent{
    title = '英雄帖';

}
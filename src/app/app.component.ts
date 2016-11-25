/**
 * Created by Administrator on 2016/11/25.
 */
import { Component } from '@angular/core';
import { HerolistComponent } from './herolist/herolist.component';

@Component({
    selector:'my-app',
    template:`
        <h1>{{title}}</h1>
        <my-heroes></my-heroes>
    `
})

export class AppComponent{
    title = '英雄帖';
}
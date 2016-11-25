/**
 * Created by Administrator on 2016/11/25.
 */
import { Component,Input } from '@angular/core';
import { Hero } from '../hero/Hero';

@Component({
    selector:'my-hero-detail',
    templateUrl:'./hero-detail.component.html'
})

export class HeroDetailComponent{
    @Input()
    hero:Hero;
}
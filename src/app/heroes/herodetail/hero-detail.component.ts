/**
 * Created by Administrator on 2016/11/25.
 */
import { Component,OnInit } from '@angular/core';
import { ActivatedRoute,Params} from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from '../hero/Hero';
import {HeroService} from "../hero/hero.service";

@Component({
    selector:'my-hero-detail',
    templateUrl:'hero-detail.component.html',
    styleUrls:['hero-detail.component.css']
})

export class HeroDetailComponent implements OnInit{

    constructor(
        private heroService:HeroService,
        private route:ActivatedRoute,
        private location:Location
    ){}

    hero:Hero;

    ngOnInit(): void {
        this.route.params
            .switchMap((params: Params) => this.heroService.getHero(+params['id']))
            .subscribe(hero => this.hero = hero);
    }

    goBack():void{
        this.location.back();
    }

    save():void{
        this.heroService.update(this.hero)
            .then(()=>this.goBack());
    }
}
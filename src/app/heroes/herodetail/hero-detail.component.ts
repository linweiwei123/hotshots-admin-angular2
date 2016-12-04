/**
 * Created by Administrator on 2016/11/25.
 */
import {Component, OnInit, Host, HostBinding, style, state, animate, transition, trigger} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';

import { Hero } from '../hero/Hero';
import {HeroService} from "../hero/hero.service";

@Component({
    selector:'my-hero-detail',
    templateUrl:'hero-detail.component.html',
    styleUrls:['hero-detail.component.css'],
    host:{
        '[@routeAnimation]': 'true',
        '[style.display]': "'block'",
        '[style.position]': "'absolute'"
    },
    animations: [
        trigger('routeAnimation', [
            state('*',
                style({
                    opacity: 1,
                    transform: 'translateX(0)'
                })
            ),
            transition(':enter', [
                style({
                    opacity: 0,
                    transform: 'translateX(-100%)'
                }),
                animate('0.2s ease-in')
            ]),
            transition(':leave', [
                animate('0.5s ease-out', style({
                    opacity: 0,
                    transform: 'translateY(100%)'
                }))
            ])
        ])
    ]
})

export class HeroDetailComponent implements OnInit{


    constructor(
        private heroService:HeroService,
        private route:ActivatedRoute,
        private router:Router
    ){}

    hero:Hero;

    ngOnInit(): void {
        this.route.params
            .switchMap((params: Params) => this.heroService.getHero(+params['id']))
            .subscribe(hero => this.hero = hero);
    }

    goBack():void{
        //获取父路由路径
        let parentPath = this.route.parent.routeConfig.path;
        let heroId = this.hero?this.hero.id:null;
        this.router.navigate([`/${parentPath}/list`,{id:heroId,name:'name'}]);
    }

    save():void{
        this.heroService.update(this.hero)
            .then(()=>this.goBack());
    }
}
import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {Hero} from '../hero/Hero'
import {HeroService} from "../hero/hero.service";


@Component({
    selector: 'my-heroes',
    templateUrl:'./herolist.component.html',
    styleUrls:['./herolist.component.css']
})

export class HerolistComponent implements OnInit{

    heroes:Hero[];
    selectedHero:Hero;

    constructor(
        private heroService:HeroService,
        private router:Router,
    ){}

    getHeroes():void{
        this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
    }


    onSelect(hero:Hero):void{
        this.selectedHero = hero;
    }

    ngOnInit():void{
        this.getHeroes();
    }

    gotoDetail():void{
        this.router.navigate(['/detail',this.selectedHero.id]);
    }

}
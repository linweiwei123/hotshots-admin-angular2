import { Component,OnInit } from '@angular/core';
import  '../../assets/css/styles.css';
import {Hero} from '../hero/Hero'
import {HeroService} from "../hero/hero.service";


@Component({
    selector: 'my-heroes',
    templateUrl:'./herolist.component.html',
    styleUrls:['./herolist.component.css']
})

export class HerolistComponent implements OnInit{

    constructor(private heroService:HeroService){

    }
    getHeroes():void{
        this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
    }

    heroes:Hero[];
    selectedHero:Hero;
    onSelect(hero:Hero):void{
        this.selectedHero = hero;
    }

    ngOnInit():void{
        this.getHeroes();
    }

}
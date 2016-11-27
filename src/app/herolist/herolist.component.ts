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

    add(name:string):void{
        name = name.trim();
        if(!name){
            return;
        }
        this.heroService.create(name)
            .then(hero=>{
                this.heroes.push(hero);
                this.selectedHero = null;
            })
    }

    delete(hero:Hero):void{
        this.heroService.delete(hero.id)
            .then(()=>{
                this.heroes = this.heroes.filter(h=>h!==hero);
                if(this.selectedHero===hero){
                    this.selectedHero=null;
                }
            })
    }
}
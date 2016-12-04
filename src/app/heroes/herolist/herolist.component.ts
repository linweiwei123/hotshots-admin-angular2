import { Component,OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

import {Hero} from '../hero/Hero'
import {HeroService} from "../hero/hero.service";


@Component({
    selector: 'my-heroes',
    templateUrl:'herolist.component.html',
    styleUrls:['herolist.component.css']
})

export class HerolistComponent implements OnInit{

    heroes:Hero[];
    selectedHero:Hero;

    constructor(
        private heroService:HeroService,
        private router:Router,
        private activatedRoute:ActivatedRoute
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
        console.log(this.activatedRoute);
        //因为本级是第二级的导航，所以要获取上级的url path
        let parentPath = this.activatedRoute.parent.routeConfig.path;
        this.router.navigate([`/${parentPath}/heroDetail`,this.selectedHero.id]);
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
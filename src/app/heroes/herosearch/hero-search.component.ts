/**
 * Created by yitala on 2016/11/27.
 */
import {Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { HeroService } from '../hero/hero.service';
import { Hero } from '../hero/Hero';

@Component({
    selector:'hero-search',
    templateUrl:'hero-search.component.html',
    styleUrls:['hero-search.component.css'],
    providers:[HeroService]
})

export class HeroSearchComponent implements OnInit{
    heroes:Observable<Hero[]>;
    private searchTerms = new Subject<string>();

    constructor(
        private heroService:HeroService,
        private router:Router
    ){}

    search(term:string):void{
        this.searchTerms.next(term);
    }

    ngOnInit(): void {
        this.heroes = this.searchTerms
            .debounceTime(300)
            .distinctUntilChanged()
            .switchMap(term => {
                console.log(term);
                if(term){
                    console.log(this.heroService.search(term));
                    return this.heroService.search(term);
                }
                else{
                    console.log("not result");
                    return Observable.of<Hero[]>([]);
                }
            })
            .catch(error => {
                // TODO: real error handling
                console.log(error);
                return Observable.of<Hero[]>([]);
            });

    }



    gotoDetail(hero:Hero):void{
        this.router.navigate(['/detail',hero.id]);
    }
}
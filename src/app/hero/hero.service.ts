/**
 * Created by Administrator on 2016/11/25.
 */
import {Injectable} from '@angular/core';
import {Hero} from "./Hero";
import {HEROES} from './mock-heroes';

@Injectable()
export class HeroService{
    getHeroes():Promise<Hero[]>{
        return Promise.resolve(HEROES);
    }

    getHeroesSlowly():Promise<Hero[]>{
        return new Promise<Hero[]>(resolve=>setTimeout(resolve,2000)).then(()=>this.getHeroes());
    }
}

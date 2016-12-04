/**
 * Created by Administrator on 2016/11/25.
 */
import {Injectable} from '@angular/core';
import {Headers, Http, Response} from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/toPromise';
import { Hero } from './Hero';

@Injectable()
export class HeroService{

    private heroesUrl = 'app/heroes';  // URL to web api
    private headers = new Headers({'Content-type':'application/json'});

    constructor(private http: Http) { }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    getHeroes(): Promise<Hero[]> {
        return this.http.get(this.heroesUrl)
            .toPromise()
            .then(response => response.json().data as Hero[])
            .catch(this.handleError);

    }


    getHeroesSlowly():Promise<Hero[]>{
        return new Promise<Hero[]>(resolve=>setTimeout(resolve,1000)).then(()=>this.getHeroes());
    }

    getHero(id:number):Promise<Hero>{
        return this.getHeroes()
                   .then(heroes=>heroes.find(hero=>hero.id===id));
    }


    update(hero:Hero):Promise<Hero>{
        const url = `${this.heroesUrl}/${hero.id}`;
        return this.http
            .put(url,JSON.stringify(hero),{headers:this.headers})
            .toPromise()
            .then(()=>hero)
            .catch(this.handleError);
    }

    create(name:string):Promise<Hero>{
        return this.http.post(this.heroesUrl,JSON.stringify({name:name}),{headers:this.headers})
            .toPromise()
            .then(res=>res.json().data)
            .catch(this.handleError)
    }

    delete(id:number):Promise<void>{
        const url = `${this.heroesUrl}/${id}`;
        return this.http.delete(url,{headers:this.headers})
            .toPromise()
            .then(()=>null)
            .catch(this.handleError);
    }

    search(term:string):Observable<Hero[]>{
        console.log(term);
        const url = `app/heroes/?name=${term}`;
        return this.http.get(url)
            .map((r:Response)=>r.json().data as Hero[]);
    }
}

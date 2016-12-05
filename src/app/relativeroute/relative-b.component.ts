/**
 * Created by yitala on 2016/12/5.
 */
import {Component} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
@Component({
    templateUrl:'relative-b.component.html'
})

export class RelativeBComponent{

    constructor(
        private activatedRoute:ActivatedRoute,
        private router:Router
    ){}

    gotoPageA():void{
        this.router.navigate(['../'],{relativeTo:this.activatedRoute})
    }
}
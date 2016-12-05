/**
 * Created by yitala on 2016/12/5.
 */
import {Component} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
@Component({
    templateUrl:'relative-a.component.html'
})

export class RelativeAComponent{

    constructor(
        private activatedRoute:ActivatedRoute,
        private router:Router
    ){};

    gotoPageB():void{
        this.router.navigate(['relativeB'],{relativeTo:this.activatedRoute})
    }

    gotoPageDashboard():void{
        this.router.navigate(['../'],{relativeTo:this.activatedRoute})
    }

    gotoPageHerolist():void{
        this.router.navigate(['../heroes/list'],{relativeTo:this.activatedRoute})
    }
}
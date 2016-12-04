/**
 * Created by yitala on 2016/12/4.
 */
import {Component} from "@angular/core";
import {Router} from "@angular/router";
@Component({
    selector:'page-no-found',
    templateUrl:'nofound.component.html',
    styleUrls:['nofound.component.css']
})

export class NoFoundComponent{

    constructor(
        private router:Router
    ){};

    gotoDashboard():void{
        this.router.navigate(['/dashboard']);
    }
}
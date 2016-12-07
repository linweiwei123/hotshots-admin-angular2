/**
 * Created by yitala on 2016/12/5.
 */
import {NgModule} from "@angular/core";
import {GuardCenterComponent} from "./guard-center.component";
import {Routes, RouterModule} from "@angular/router";
import {AuthGuard} from "./auth-guard.service";

const relativeRoutes:Routes = [
    {
        path:'',
        component:GuardCenterComponent,
        canActivate:[AuthGuard]
    }
]

@NgModule({
    imports:[
        RouterModule.forChild(relativeRoutes)
    ],
    declarations:[
        GuardCenterComponent
    ],
    providers:[AuthGuard]
})

export class GuardRouteModule{

}
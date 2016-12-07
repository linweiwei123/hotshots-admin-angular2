/**
 * Created by yitala on 2016/12/4.
 */

import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {HeroDetailComponent} from "./herodetail/hero-detail.component";
import {HerolistComponent} from "./herolist/herolist.component";
import {NeedAuthGuard} from "../login/no-auth-guard.service";

const heroesRoutes:Routes = [
    { path: 'list', component: HerolistComponent,canActivate:[NeedAuthGuard] },
    { path:'heroDetail/:id',component: HeroDetailComponent,canActivate:[NeedAuthGuard] },
    { path:'',component: HerolistComponent,canActivate:[NeedAuthGuard] }
];
@NgModule({
    imports:[
        RouterModule.forChild(heroesRoutes)
    ],
    exports:[
        RouterModule
    ]
})

export class HeroesRoutingModule{

}
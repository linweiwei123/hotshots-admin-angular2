/**
 * Created by yitala on 2016/12/4.
 */

import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {HeroDetailComponent} from "./herodetail/hero-detail.component";
import {HerolistComponent} from "./herolist/herolist.component";

const heroesRoutes:Routes = [
    { path: 'list', component: HerolistComponent },
    { path:'heroDetail/:id',component: HeroDetailComponent },
    { path:'',component: HerolistComponent }
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
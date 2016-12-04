/**
 * Created by yitala on 2016/12/4.
 */

import {NgModule} from "@angular/core";
import {HeroesRoutingModule} from "./heroes-routing.module";
import {HerolistComponent} from "./herolist/herolist.component";
import {HeroDetailComponent} from "./herodetail/hero-detail.component";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
@NgModule({
    imports:[
        CommonModule,
        FormsModule,
        HeroesRoutingModule
    ],
    declarations:[
        HerolistComponent,
        HeroDetailComponent
    ]
})

export class HeroesModule{

}
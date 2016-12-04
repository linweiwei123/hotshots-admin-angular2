/**
 * Created by yitala on 2016/12/4.
 */

import {NgModule} from "@angular/core";
import {NoFoundComponent} from "./nofound.component";
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";
@NgModule({
    imports:[
        CommonModule,
        RouterModule.forChild([
            {
                path:'',component:NoFoundComponent
            }
        ])
    ],
    declarations:[
        NoFoundComponent
    ]
})

export class NoFoundModule{

}
/**
 * Created by yitala on 2016/12/4.
 */

import {NgModule} from "@angular/core";
import {NoFoundComponent} from "./nofound.component";
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";
import {NeedAuthGuard} from "../login/no-auth-guard.service";
@NgModule({
    imports:[
        CommonModule,
        RouterModule.forChild([
            {
                path:'',component:NoFoundComponent,canActivate:[NeedAuthGuard]

            }
        ])
    ],
    declarations:[
        NoFoundComponent
    ]
})

export class NoFoundModule{

}
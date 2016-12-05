/**
 * Created by yitala on 2016/12/5.
 */
import {NgModule} from "@angular/core";
import {RelativeCenterComponent} from "./relative-center.component";
import {RelativeAComponent} from "./relative-a.component";
import {RelativeBComponent} from "./relative-b.component";
import {Routes, RouterModule} from "@angular/router";

const relativeRoutes:Routes = [
    {
        path:'',
        component:RelativeCenterComponent,
        children:[
            {
                path:'',
                component:RelativeAComponent
            },
            {
                path:'relativeB',
                component:RelativeBComponent
            }
        ]
    }
]

@NgModule({
    imports:[
        RouterModule.forChild(relativeRoutes)
    ],
    declarations:[
        RelativeCenterComponent,
        RelativeAComponent,
        RelativeBComponent
    ]
})

export class RelativeRouteModule{

}
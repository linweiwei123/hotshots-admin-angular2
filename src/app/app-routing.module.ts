import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';

import {DashboardComponent} from "./dashboard/dashboard.component";


const appRoutes: Routes = [

    {
        path:'heroes',loadChildren:'./heroes/heroes.module#HeroesModule'
    },
    {   path: 'dashboard', component: DashboardComponent},
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    //angular2 官网的404路由配置有错，通过下面2行修正
    {
        path:'nofound',loadChildren:'./nofound/nofound.module#NoFoundModule'
    },
    {
        path:'**',redirectTo:'/nofound'
    }
    // 方法一：
    // { path: 'herolist', loadChildren: () => new Promise(resolve => {
    //     (require as any).ensure([], (require: any) => {
    //         resolve(require('./herolist/herolist.module').HerolistModule);
    //     })
    // })
];


@NgModule({
    imports:[RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
})

export class AppRoutingModule{

}
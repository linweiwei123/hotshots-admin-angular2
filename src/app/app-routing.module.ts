import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';

import {DashboardComponent} from "./dashboard/dashboard.component";
import {LoginComponent} from "./login/login.component";
import {NeedAuthGuard} from "./login/no-auth-guard.service";


const appRoutes: Routes = [

    {
        path:'heroes',loadChildren:'./heroes/heroes.module#HeroesModule'
    },
    {   path: 'dashboard', component: DashboardComponent,canActivate:[NeedAuthGuard]},
    {
        path:'relativeRoute',loadChildren:'./relativeroute/relative-route.module#RelativeRouteModule'
    },
    {
        path:'guardRoute',loadChildren:'./guardroute/guard-route.module#GuardRouteModule'
    },
    {
        path:'login',component:LoginComponent
    },
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
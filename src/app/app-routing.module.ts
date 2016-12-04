import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';

import {HeroDetailComponent} from "./herodetail/hero-detail.component";
import {DashboardComponent} from "./dashboard/dashboard.component";


const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    // { path: 'herolist', loadChildren: () => new Promise(resolve => {
    //     (require as any).ensure([], (require: any) => {
    //         resolve(require('./herolist/herolist.module').HerolistModule);
    //     })
    // })
    {
     path:'herolist',loadChildren:'./herolist/herolist.module#HerolistModule'
    },
    { path: 'dashboard', component: DashboardComponent},
    {
        path:'detail/:id',
        component:HeroDetailComponent
    }
];


@NgModule({
    imports:[RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
})

export class AppRoutingModule{

}
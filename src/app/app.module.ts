import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from "./app.component";
import { HerolistComponent } from './herolist/herolist.component';
import { HeroDetailComponent} from './herodetail/hero-detail.component';
import { HeroService } from "./hero/hero.service";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {AppRoutingModule} from "./app-routing.module";



@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        HerolistComponent,
        HeroDetailComponent,
        DashboardComponent
    ],
    providers:[HeroService],
    bootstrap: [ AppComponent ]
})
export class AppModule { }

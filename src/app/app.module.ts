import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './hero/in-memory-data.service';

import { AppComponent } from "./app.component";
import { HeroDetailComponent} from './herodetail/hero-detail.component';
import { HeroService } from "./hero/hero.service";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {AppRoutingModule} from "./app-routing.module";
import './rxjs-extensions';
import {HeroSearchComponent} from "./herosearch/hero-search.component";
import '../assets/css/styles.css';
import {SharedModule} from "./shared/shared.module";
import {SidernavComponent} from "./shared/layout/sidernav/sidernav.component";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService),
        AppRoutingModule,
        SharedModule
    ],
    declarations: [
        AppComponent,
        HeroDetailComponent,
        DashboardComponent,
        HeroSearchComponent,
        SidernavComponent
    ],
    providers:[HeroService],
    bootstrap: [ AppComponent ]
})
export class AppModule { }

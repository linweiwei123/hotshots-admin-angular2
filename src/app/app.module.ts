import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './hero/in-memory-data.service';

import { AppComponent } from "./app.component";
import { HerolistComponent } from './herolist/herolist.component';
import { HeroDetailComponent} from './herodetail/hero-detail.component';
import { HeroService } from "./hero/hero.service";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {AppRoutingModule} from "./app-routing.module";
import './rxjs-extensions';
import {HeroSearchComponent} from "./herosearch/hero-search.component";


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService),
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        HerolistComponent,
        HeroDetailComponent,
        DashboardComponent,
        HeroSearchComponent
    ],
    providers:[HeroService],
    bootstrap: [ AppComponent ]
})
export class AppModule { }

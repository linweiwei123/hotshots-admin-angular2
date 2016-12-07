import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './heroes/hero/in-memory-data.service';

import { AppComponent } from "./app.component";
import { HeroService } from "./heroes/hero/hero.service";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {AppRoutingModule} from "./app-routing.module";
import './rxjs-extensions';
import {HeroSearchComponent} from "./heroes/herosearch/hero-search.component";
import '../assets/css/styles.css';
import {SharedModule} from "./shared/shared.module";
import {SidernavComponent} from "./shared/layout/sidernav/sidernav.component";
import {LoginComponent} from "./login/login.component";
import {NeedAuthGuard} from "./login/no-auth-guard.service";


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
        DashboardComponent,
        HeroSearchComponent,
        SidernavComponent,
        LoginComponent
    ],
    providers:[HeroService,NeedAuthGuard],
    bootstrap: [ AppComponent ]
})
export class AppModule { }

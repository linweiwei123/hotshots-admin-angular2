import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule,Routes } from '@angular/router';

import { AppComponent } from "./app.component";
import { HerolistComponent } from './herolist/herolist.component';
import { HeroDetailComponent} from './herodetail/hero-detail.component';
import { HeroService } from "./hero/hero.service";

const appRoutes: Routes = [{ path: 'herolist', component: HerolistComponent }];

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot(appRoutes)
    ],
    declarations: [
        AppComponent,
        HerolistComponent,
        HeroDetailComponent
    ],
    providers:[HeroService],
    bootstrap: [ AppComponent ]
})
export class AppModule { }

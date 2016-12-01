/**
 * Created by yitala on 2016/12/1.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HerolistComponent } from './herolist.component';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([
            { path: '', component: HerolistComponent }
        ])
    ],
    declarations: [HerolistComponent]
})
export class HerolistModule {}
/**
 * Created by yitala on 2016/12/4.
 */

import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {HeaderComponent} from "./layout/header/header.component";
import {ShowAuthedDirective} from "./directive/show-authed.directive";
import {UserService} from "./service/user.service";
import {JwtService} from "./service/jwt.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MessageComponent} from "./common/message/message.component";

@NgModule({
    imports:[
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations:[
        HeaderComponent,
        ShowAuthedDirective,
        MessageComponent
    ],
    providers:[
        UserService,
        JwtService
    ],
    exports:[
        HeaderComponent,
        MessageComponent,
        ShowAuthedDirective
    ]
})

export class SharedModule{

}
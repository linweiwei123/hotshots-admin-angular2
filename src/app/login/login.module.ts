// /**
//  * Created by yitala on 2016/12/6.
//  */
// import {NgModule} from "@angular/core";
// import {SharedModule} from "../shared/shared.module";
// import {RouterModule} from "@angular/router";
// import {LoginComponent} from "./login.component";
// import {NoAuthGuard} from "./no-auth-guard.service";
// @NgModule({
//     imports:[
//         SharedModule,
//         RouterModule.forChild([
//             {
//                 path:'',component:LoginComponent,canActivate:[NoAuthGuard]
//             }
//         ])
//     ],
//     declarations:[
//         LoginComponent
//     ],
//     providers:[
//         NoAuthGuard
//     ]
// })
//
// export class LoginModule{
//
// }
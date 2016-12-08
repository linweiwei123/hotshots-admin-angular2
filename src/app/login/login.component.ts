/**
 * Created by yitala on 2016/12/6.
 */
import {Component} from "@angular/core";
import {FormBuilder, Form, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../shared/service/user.service";
import {User} from "../shared/models/user.model";
@Component({
    templateUrl:'login.component.html',
    styleUrls:['login.component.css']
})

export class LoginComponent{

    model:any = {username:'',password:''};
    error:string;

    constructor(
        private router:Router,
        private userService:UserService
    ){

    }

    login(){
        let result = this.userService.getAuth(this.model as User);
        if(result){
            this.router.navigate(['/dashboard']);
        }
        else {
            this.error = '账号linweiwei，密码123'
        }
    }
}
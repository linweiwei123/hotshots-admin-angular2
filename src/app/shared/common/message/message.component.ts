/**
 * Created by yitala on 2016/12/23.
 */

import {Component, Input} from "@angular/core";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
@Component({
    selector:"alert-message",
    templateUrl:"message.component.html"
})
export class MessageComponent{
    @Input() msg:string;

    constructor(
        public activeModal:NgbActiveModal
    ){}
}

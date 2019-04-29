import {Component, OnInit} from '@angular/core';
import {LogInService} from "~/app/shared/services/log-in.service";

@Component({
    selector: 'ns-log-in',
    templateUrl: './log-in.component.html',
    styleUrls: ['./log-in.component.css'],
    moduleId: module.id,
})
export class LogInComponent implements OnInit {

    public strEmail: string = '';
    public strPassword: string = '';
    public boolEnableBtn = false;

    //------------------------------------------------------------------------------------------------------------------
    constructor(
        private _LogInService: LogInService
    ) {
    }

    //------------------------------------------------------------------------------------------------------------------
    ngOnInit() {
        this.boolEnableBtn = false;
    }
    //------------------------------------------------------------------------------------------------------------------
    onTextChange(
        //                                                  //Detects if a TextField is check to enable the submit
        //                                                  //      button
        args
    ) {
        if ( this.strEmail == '' || this.strPassword == '') {
            this.boolEnableBtn = false;
        } else if ( this.strEmail && this.strPassword ){
            this.boolEnableBtn = true;
        }
    }

    //------------------------------------------------------------------------------------------------------------------
    onSubmit() {

        //                                                  //Talk to the LogInService to verify the data of the user
        this._LogInService.LogIn(
            this.strEmail,
            this.strPassword
        );
    }

}

import { Injectable } from '@angular/core';
import {RouterExtensions} from "nativescript-angular";

@Injectable()
export class LogInService {
    //------------------------------------------------------------------------------------------------------------------
    constructor(
        private router: RouterExtensions
    ) { }
    //------------------------------------------------------------------------------------------------------------------
    LogIn(
        strEmail: string,
        strPassword: string
    ) {
        if(
            //                                              //If the user is a driver send it to the driver pages
            strEmail == 'driver') {
            this.router.navigate(
                ['/Driver'],
                {clearHistory: true}
            );
        } else if (
            //                                              //If the user is a passenger send it to the passenger pages
            strEmail == 'passenger'
        ) {
            this.router.navigate(
                ['/Passenger'],
                {clearHistory: true}
            );
        } else {
            alert('incorrect credentials');
        }
    }
}

import { Injectable } from '@angular/core';
import {RouterExtensions} from "nativescript-angular";
import * as dialogs from "tns-core-modules/ui/dialogs";
import { HttpClient } from "@angular/common/http";
import {TransporTecAPI} from "~/app/shared/config/TransportecAPI";
import {UserModel} from "~/app/shared/classes/User.model";
import {UserService} from "~/app/shared/services/User/user.service";

@Injectable()
export class LogInService {
    //------------------------------------------------------------------------------------------------------------------
    constructor(
        private router: RouterExtensions,
        private http: HttpClient,
        private userService: UserService
    ) { }
    //------------------------------------------------------------------------------------------------------------------
    LogIn(
        strEmail: string,
        strPassword: string
    ) {

        let strUrl: string = TransporTecAPI.LogInURL;

        this.http.post<object>(strUrl,
            {
                strCorreo: strEmail,
                strContraseña: strPassword
            }).subscribe(
            (data) => {
                this.userService.setUser(UserModel.fromJSON(data));

                if(
                    //                                              //If the user is a driver send it to the driver pages
                    this.userService.User.strType == 'Chofer') {
                    this.router.navigate(
                        ['/Driver'],
                        {clearHistory: true}
                    );
                } else if (
                    //                                              //If the user is a passenger send it to the passenger pages
                    this.userService.User.strType == 'Alumno' ||
                    this.userService.User.strType == 'Personal'
                ) {
                    this.router.navigate(
                        ['/Passenger'],
                        {clearHistory: true}
                    );
                }


            },
            (error) => {
                dialogs.alert({
                    title: "Incorrect Credentials",
                    message: "Check your email and password",
                    okButtonText: "Ok"
                })
            },
            () => {
                //                                          //Everything is completed!
            }
        );

    }
}

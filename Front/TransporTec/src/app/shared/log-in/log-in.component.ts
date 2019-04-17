import { Component, OnInit } from '@angular/core';
import {RouterExtensions} from "nativescript-angular";

@Component({
  selector: 'ns-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css'],
  moduleId: module.id,
})
export class LogInComponent implements OnInit {

    public strEmail: string = '';
    public strPassword: string = '';

    //------------------------------------------------------------------------------------------------------------------
    constructor(
        //                                                  //Use RouterExtensions from nativescript
        private router: RouterExtensions
    ) { }
    //------------------------------------------------------------------------------------------------------------------
    ngOnInit() {
    }
    //------------------------------------------------------------------------------------------------------------------
    onSubmit() {
        this.router.navigate(
            ['/Driver'],
            { clearHistory: true }
            );
    }

}

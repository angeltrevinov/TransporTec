import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'ns-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css'],
  moduleId: module.id,
})
export class LogInComponent implements OnInit {

    public strEmail: string = '';
    public strPassword: string = '';

    constructor(
        private router: Router
    ) { }

    ngOnInit() {
    }
    //------------------------------------------------------------------------------------------------------------------
    onSubmit() {
        this.router.navigate( ['/Driver'] );
    }

}

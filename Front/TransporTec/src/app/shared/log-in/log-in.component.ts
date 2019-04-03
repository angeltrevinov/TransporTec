import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ns-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css'],
  moduleId: module.id,
})
export class LogInComponent implements OnInit {

    public strEmail: string = '';
    public strPassword: string = '';

    constructor() { }

    ngOnInit() {
    }
    //------------------------------------------------------------------------------------------------------------------
    onSubmit() {
        alert('email: '+ this.strEmail + ' password: ' + this.strPassword );
    }

}

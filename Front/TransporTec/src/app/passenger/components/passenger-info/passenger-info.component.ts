import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {RouterExtensions} from "nativescript-angular";
import {UserModel} from "~/app/shared/classes/User.model";

@Component({
  selector: 'ns-passenger-info',
  templateUrl: './passenger-info.component.html',
  styleUrls: ['./passenger-info.component.css'],
  moduleId: module.id,
})
export class PassengerInfoComponent implements OnInit {

  //---------------- * Input Variables * -------------------
    @Input() User: UserModel;
  //---------------- * Output Variables * ------------------
  @Output() onMessageLogOut = new EventEmitter<string>();

  //--------------------------------------------------------------------------------------------------------------------
  constructor() { }
  //--------------------------------------------------------------------------------------------------------------------
  ngOnInit() {
      console.log(this.User);
  }
  //--------------------------------------------------------------------------------------------------------------------
  onTapLogOut() {
      this.onMessageLogOut.emit("Are you sure you want to log out?");
  }

}

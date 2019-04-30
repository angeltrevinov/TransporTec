import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {RouterExtensions} from "nativescript-angular";

@Component({
  selector: 'ns-passenger-info',
  templateUrl: './passenger-info.component.html',
  styleUrls: ['./passenger-info.component.css'],
  moduleId: module.id,
})
export class PassengerInfoComponent implements OnInit {

  @Output() onMessageLogOut = new EventEmitter<string>();

  //--------------------------------------------------------------------------------------------------------------------
  constructor() { }
  //--------------------------------------------------------------------------------------------------------------------
  ngOnInit() {
  }
  //--------------------------------------------------------------------------------------------------------------------
  onTapLogOut() {
      this.onMessageLogOut.emit("Are you sure you want to log out?");
  }

}

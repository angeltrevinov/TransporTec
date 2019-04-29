import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ns-main-screen',
  templateUrl: './main-screen.component.html',
  styleUrls: ['./main-screen.component.css'],
  moduleId: module.id,
})
export class MainScreenComponent implements OnInit {

    boolShowInfo: boolean = false;

  //--------------------------------------------------------------------------------------------------------------------
  constructor() { }
  //--------------------------------------------------------------------------------------------------------------------
  ngOnInit() {
      this.boolShowInfo = false;
  }
  onImageClick() {
      if(!this.boolShowInfo) {
          this.boolShowInfo = true;
      } else {
          this.boolShowInfo = false;
      }
  }

}

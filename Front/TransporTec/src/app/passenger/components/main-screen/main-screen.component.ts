import { Component, OnInit } from '@angular/core';
import * as dialogs from "tns-core-modules/ui/dialogs";
import {RouterExtensions} from "nativescript-angular";
import {UserService} from "~/app/shared/services/User/user.service";
import {RutasService} from "~/app/passenger/services/rutas.service";
import {RutaModel} from "~/app/shared/classes/Ruta.model";

@Component({
  selector: 'ns-main-screen',
  templateUrl: './main-screen.component.html',
  styleUrls: ['./main-screen.component.css'],
  moduleId: module.id,
})
export class MainScreenComponent implements OnInit {

    boolShowInfo: boolean = false;
    boolShowTicket: boolean = false;

  //--------------------------------------------------------------------------------------------------------------------
  constructor(
      private router: RouterExtensions,
      private userService: UserService,
      private rutasService: RutasService
      ) { }
  //--------------------------------------------------------------------------------------------------------------------
  ngOnInit() {
      this.rutasService.getRuta(
          this.userService.User.strIdRoute
      ).subscribe(
          (data) => {
              this.userService.setRuta( RutaModel.fromJSON(data) );
          },
          (error) => {
              dialogs.alert( {
                  title: 'Error',
                  message: "something went wrong",
                  okButtonText: "Ok"
              });
          },
          () => {
          }
      );
  }
  //--------------------------------------------------------------------------------------------------------------------
  onImageClick() {

      if(this.boolShowInfo == false) {
          this.boolShowInfo = true;
      } else {
          this.boolShowInfo = false;
      }
  }
  onTicketClick() {
      if(this.boolShowTicket == false ){
          this.boolShowTicket = true;
      } else {
          this.boolShowTicket = false;
      }
  }
  //--------------------------------------------------------------------------------------------------------------------
  onLogOut(strMessage: string) {

    dialogs.confirm({
            message: strMessage,
            okButtonText: "Ok",
            cancelButtonText: "Cancel text"
        }).then(result => {
        // result argument is boolean

        if(result){
            this.userService.eraseInfo();
            this.router.navigate([''], {clearHistory: true});
        }

    });


  }

}

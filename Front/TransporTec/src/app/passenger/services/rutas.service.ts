import { Injectable } from '@angular/core';
import {TransporTecAPI} from "~/app/shared/config/TransportecAPI";
import {HttpClient} from "@angular/common/http";
import * as dialogs from "tns-core-modules/ui/dialogs";
import {RutaModel} from "~/app/shared/classes/Ruta.model";


@Injectable()
export class RutasService {

  //--------------------------------------------------------------------------------------------------------------------
  constructor(
      private http: HttpClient
  ) { }
  //--------------------------------------------------------------------------------------------------------------------
  getRuta( strIdRuta: string ) {

      let strUrl: string = TransporTecAPI.RutasURL;

      this.http.get<object>(
          strUrl + '/' + strIdRuta
      ).subscribe(
          (data) => {
              console.log(RutaModel.fromJSON(data));
          },
          (error) => {
              dialogs.alert( {
                  title: 'Error',
                  message: "something went wrong",
                  okButtonText: "Ok"
              });
          },
          () => {
              //everything is ok
          }
      );

  }

}

import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {TransporTecAPI} from "~/app/shared/config/TransportecAPI";

@Injectable()
export class TicketsService {

  constructor(
      private http: HttpClient
  ) { }

  submit(
  ) {

      let strURL: string = TransporTecAPI.TicketsURL

      return this.http.post(strURL,
      {
          _id : 'A00821428',
          strNombreS: 'Nuevo Sur',
          strNombreB: 'TEC'
      },
          {responseType: 'text'});

  }
}

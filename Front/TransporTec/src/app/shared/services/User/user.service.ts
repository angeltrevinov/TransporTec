import { Injectable } from '@angular/core';
import {UserModel} from "~/app/shared/classes/User.model";
import {RutaModel} from "~/app/shared/classes/Ruta.model";

@Injectable()
export class UserService {

    private User_Z: UserModel = null;
    private userRutas_Z: RutaModel;

  //--------------------------------------------------------------------------------------------------------------------
  constructor() { }

  //--------------------------------------------------------------------------------------------------------------------
  setUser( user: UserModel) {
      this.User_Z = user;
  }
  //--------------------------------------------------------------------------------------------------------------------
  get User(): UserModel {
      return this.User_Z;
  }
  //--------------------------------------------------------------------------------------------------------------------
  eraseInfo() {
      this.User_Z = null;
      this.userRutas_Z = null;

  }

  setRuta( ruta: RutaModel ){
      this.userRutas_Z = ruta;
  }

  get Ruta(): RutaModel {
      return this.userRutas_Z;
  }
}

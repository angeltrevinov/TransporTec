import { Injectable } from '@angular/core';
import {UserModel} from "~/app/shared/classes/User.model";

@Injectable()
export class UserService {

    private User_Z: UserModel = null;

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
  eraseUser() {
      this.User_Z = null;
  }
}

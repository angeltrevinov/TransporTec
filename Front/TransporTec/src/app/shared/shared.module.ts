import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { LogInComponent } from './components/log-in/log-in.component';
import {NativeScriptFormsModule} from "nativescript-angular";
import { MapComponent } from './components/map/map.component';
import {LogInService} from "~/app/shared/services/LogIn/log-in.service";
import {NativeScriptHttpClientModule} from "nativescript-angular/http-client";
import {UserService} from "~/app/shared/services/User/user.service";

@NgModule({
  declarations: [
      LogInComponent,
      MapComponent
  ],
    imports: [
        NativeScriptCommonModule,
        NativeScriptFormsModule,
        NativeScriptHttpClientModule
    ],
  exports: [
      LogInComponent,
      MapComponent
  ],
    providers: [
        LogInService,
        UserService
    ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class SharedModule { }

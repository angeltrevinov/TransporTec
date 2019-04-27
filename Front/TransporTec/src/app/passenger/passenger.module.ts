import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import {PassengerRoutingModule} from "~/app/passenger/passenger-routing.module";
import { PassengerComponent } from './components/passenger.component';

@NgModule({
  declarations: [
      PassengerComponent
  ],
  imports: [
      NativeScriptCommonModule,
      PassengerRoutingModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class PassengerModule { }

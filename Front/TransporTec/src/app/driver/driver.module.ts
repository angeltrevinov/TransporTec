import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import {DriverRoutingModule} from "~/app/driver/driver-routing.module";
import { DriverComponent } from './components/driver.component';
import { RouteMapComponent } from './components/route-map/route-map.component';

@NgModule({
  declarations: [
      DriverComponent,
      RouteMapComponent
  ],
  imports: [
        NativeScriptCommonModule,
        DriverRoutingModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class DriverModule { }

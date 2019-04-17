import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import {DriverRoutingModule} from "~/app/driver/driver-routing.module";
import { DriverComponent } from './components/driver.component';
import { RouteMapComponent } from './components/route-map/route-map.component';
import { ReportSlidersComponent } from './components/report-sliders/report-sliders.component';
import {SharedModule} from "~/app/shared/shared.module";

@NgModule({
  declarations: [
      DriverComponent,
      RouteMapComponent,
      ReportSlidersComponent
  ],
  imports: [
        NativeScriptCommonModule,
        DriverRoutingModule,
        SharedModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class DriverModule { }

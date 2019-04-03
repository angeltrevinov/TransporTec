import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { LogInComponent } from './log-in/log-in.component';
import {NativeScriptFormsModule} from "nativescript-angular";

@NgModule({
  declarations: [
      LogInComponent
  ],
    imports: [
        NativeScriptCommonModule,
        NativeScriptFormsModule,
    ],
  exports: [
      LogInComponent
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class SharedModule { }

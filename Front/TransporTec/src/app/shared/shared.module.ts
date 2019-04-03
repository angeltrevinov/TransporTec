import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { LogInComponent } from './log-in/log-in.component';

@NgModule({
  declarations: [
      LogInComponent
  ],
  imports: [
    NativeScriptCommonModule,
  ],
  exports: [
      LogInComponent
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class SharedModule { }

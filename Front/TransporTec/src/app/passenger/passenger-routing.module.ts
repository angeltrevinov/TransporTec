import { NgModule } from '@angular/core';
import {Routes} from "@angular/router";
import {NativeScriptRouterModule} from "nativescript-angular";
import {PassengerComponent} from "~/app/passenger/components/passenger.component";


const PassengerRotes: Routes = [
    {
        path: 'Passenger',
        component: PassengerComponent,
        children: []
    }
];
@NgModule({
    imports: [
        NativeScriptRouterModule.forRoot(PassengerRotes)
    ],
    exports: [
        NativeScriptRouterModule
    ]
})
export class PassengerRoutingModule { }

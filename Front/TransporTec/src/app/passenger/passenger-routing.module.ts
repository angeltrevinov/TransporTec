import { NgModule } from '@angular/core';
import {Routes} from "@angular/router";
import {NativeScriptRouterModule} from "nativescript-angular";
import {PassengerComponent} from "~/app/passenger/components/passenger.component";
import {MainScreenComponent} from "~/app/passenger/components/main-screen/main-screen.component";


const PassengerRotes: Routes = [
    {
        path: 'Passenger',
        component: PassengerComponent,
        children: [
            {
                path: '',
                redirectTo: '/Passenger/MainWindow',
                pathMatch: 'full'
            },
            {
                path: 'MainWindow',
                component: MainScreenComponent
            }
        ]
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

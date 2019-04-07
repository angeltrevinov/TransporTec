import { NgModule } from '@angular/core';
import {NativeScriptRouterModule} from "nativescript-angular";
import {Routes} from "@angular/router";
import {DriverComponent} from "~/app/driver/components/driver.component";
import {RouteMapComponent} from "~/app/driver/components/route-map/route-map.component";

const DriverRoutes: Routes = [
    {
        path: 'Driver',
        component: DriverComponent,
        children: [
            {
                path: '',
                redirectTo: '/Driver/RouteMap',
                pathMatch: 'full'
            },
            {
                path: 'RouteMap',
                component: RouteMapComponent
            }
        ]

    }
];
@NgModule({
    imports: [
        NativeScriptRouterModule.forRoot(DriverRoutes)
    ],
    exports: [
        NativeScriptRouterModule
    ]
})
export class DriverRoutingModule { }

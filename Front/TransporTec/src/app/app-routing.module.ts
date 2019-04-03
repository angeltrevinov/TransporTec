import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";
import {LogInComponent} from "~/app/shared/log-in/log-in.component";

const routes: Routes = [
    { path: '', redirectTo: '/LogIn', pathMatch: 'full' },
    { path: 'LogIn', component: LogInComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }

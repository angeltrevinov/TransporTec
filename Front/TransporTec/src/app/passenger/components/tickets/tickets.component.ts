import {Component, Input, OnInit} from '@angular/core';
import {UserService} from "~/app/shared/services/User/user.service";
import {TicketsService} from "~/app/passenger/services/tickets.service";
import {error} from "tns-core-modules/trace";

@Component({
    selector: 'ns-tickets',
    templateUrl: './tickets.component.html',
    styleUrls: ['./tickets.component.css'],
    moduleId: module.id,
})
export class TicketsComponent implements OnInit {

    selectedSalida: string;
    selectedBajada: string;
    strNombreParadas: string[] = [];


    constructor(
        private userService: UserService,
        private ticketService: TicketsService
    ) {
    }

    ngOnInit() {
        if (this.userService.Ruta) {
            for (let parada of this.userService.Ruta.arrParadas) {
                this.strNombreParadas.push(parada.strName);
            }
        }
    }

    onSubmitTap(): void {

        this.ticketService.submit().
        subscribe(
            (data) => {
                console.log(data);

            },
            (error) => {
                alert('An error occured');
            }
        );

    }
}

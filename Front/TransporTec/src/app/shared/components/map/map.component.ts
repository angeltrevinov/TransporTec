import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {registerElement} from "nativescript-angular";
import {MapView, Marker, Position} from "nativescript-google-maps-sdk";
import {ParadaModel} from "~/app/shared/classes/Parada.model";

// Important - must register MapView plugin in order to use in Angular templates
registerElement('MapView', () => MapView);

@Component({
  selector: 'ns-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
  moduleId: module.id,
})
export class MapComponent {

   @Input() arrParadas: ParadaModel[];

    latitude =  25.651797;                                  //25.651797
    longitude = -100.289518;
    zoom = 15;
    minZoom = 0;
    maxZoom = 22;
    bearing = 0;
    tilt = 0;
    padding = [40, 40, 40, 40];
    mapView: MapView;

    lastCamera: String;

    constructor() {
    }


    //Map events
    onMapReady(event) {
        for(let parada of this.arrParadas) {
            this.mapView = event.object;
            var marker = new Marker();
            marker.position = Position.positionFromLatLng(parada.decLac, parada.decLon);
            marker.title = parada.strName;
            marker.snippet = parada.intMin + " Mins, every hour";
            marker.userData = {index: 1};
            this.mapView.addMarker(marker);
        }
    }

    onCoordinateTapped(args) {
    }

    onMarkerEvent(args) {

    }

    onCameraChanged(args) {
        this.lastCamera = JSON.stringify(args.camera);
    }

    onCameraMove(args) {
    }




}

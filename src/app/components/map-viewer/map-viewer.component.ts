import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-map-viewer',
  templateUrl: './map-viewer.component.html',
  styleUrls: ['./map-viewer.component.scss']
})
export class MapViewerComponent implements OnInit {

  markers :any[] = [];

  constructor() { }

  ngOnInit(): void {
    console.log(this.coord)
    this.center  = {
      lat: this.coord.lat,
      lng: this.coord.long
  };
  this.zoom = 12
  this.addMarker()
  }

  @Input() coord: any;

  display: any;
    center: google.maps.LatLngLiteral = {
        lat: 24,
        lng: 12
    };
    zoom = 4;
    moveMap(event: google.maps.MapMouseEvent) {
        if (event.latLng != null) this.center = (event.latLng.toJSON());
    }
    move(event: google.maps.MapMouseEvent) {
        if (event.latLng != null) this.display = event.latLng.toJSON();
    }

    addMarker() {
      this.markers.push({
        position: {
          lat: this.coord.lat,
          lng: this.coord.long
        },
        label: {
          color: 'red',
          text: '' ,
        },
        title: '',
        options: { animation: google.maps.Animation.BOUNCE },
      });
    }

}

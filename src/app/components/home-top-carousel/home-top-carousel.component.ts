import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-top-carousel',
  templateUrl: './home-top-carousel.component.html',
  styleUrls: ['./home-top-carousel.component.scss']
})
export class HomeTopCarouselComponent implements OnInit {

  images:any [] = [
    {
      "label": "",
      "url": "assets/work.png"
    },
    {
      "label": "",
      "url": "assets/rest.png"
    },
    {
      "label": "",
      "url": "assets/travel.png"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

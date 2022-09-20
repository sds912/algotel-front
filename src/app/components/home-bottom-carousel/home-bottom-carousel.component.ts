import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-bottom-carousel',
  templateUrl: './home-bottom-carousel.component.html',
  styleUrls: ['./home-bottom-carousel.component.scss']
})
export class HomeBottomCarouselComponent implements OnInit {

  images:any [] = [
    {
      "label": "",
      "url": "assets/img1.png"
    },
    {
      "label": "",
      "url": "assets/img2.png"
    },
    {
      "label": "",
      "url": "assets/img3.png"
    },
    {
      "label": "",
      "url": "assets/img4.png"
    }
  ]


  constructor() { }

  ngOnInit(): void {
  }

}

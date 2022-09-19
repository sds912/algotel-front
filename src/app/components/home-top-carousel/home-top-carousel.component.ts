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
      "url": "https://www.hakwood.com/images/gallery/71227/1574X1050/005%20HV2231%20-%20Maison%20de%20Lee%20-%20Vancouver%20Canada.jpg"
    },
    {
      "label": "",
      "url": "https://www.hakwood.com/images/gallery/71227/1574X1050/005%20HV2231%20-%20Maison%20de%20Lee%20-%20Vancouver%20Canada.jpg"
    },
    {
      "label": "",
      "url": "https://www.hakwood.com/images/gallery/71227/1574X1050/005%20HV2231%20-%20Maison%20de%20Lee%20-%20Vancouver%20Canada.jpg"
    },
    {
      "label": "",
      "url": "https://www.hakwood.com/images/gallery/71227/1574X1050/005%20HV2231%20-%20Maison%20de%20Lee%20-%20Vancouver%20Canada.jpg"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

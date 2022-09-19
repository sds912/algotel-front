import { Post } from './../../models/post';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  posts: Post[] = [
    {
      id: 3,
      label:  "Radisson Hotel Dakar Diamniadio",
      price:  50000,
      desc:   "desc",
      hours:  ["18:00","13:30"],
      images: [
        "https://www.hakwood.com/images/gallery/71227/1574X1050/005%20HV2231%20-%20Maison%20de%20Lee%20-%20Vancouver%20Canada.jpg",
        "https://www.hakwood.com/images/gallery/71227/1574X1050/005%20HV2231%20-%20Maison%20de%20Lee%20-%20Vancouver%20Canada.jpg",
        "https://www.hakwood.com/images/gallery/71227/1574X1050/005%20HV2231%20-%20Maison%20de%20Lee%20-%20Vancouver%20Canada.jpg"
      ]
    },
    {
      id: 4,
      label:  "Hotel Jardin Savana Dakar",
      price:  60000,
      desc:   "desc",
      hours:  ["16:00","14:30"],
      images: [
        "https://www.hakwood.com/images/gallery/71227/1574X1050/005%20HV2231%20-%20Maison%20de%20Lee%20-%20Vancouver%20Canada.jpg",
        "https://www.hakwood.com/images/gallery/71227/1574X1050/005%20HV2231%20-%20Maison%20de%20Lee%20-%20Vancouver%20Canada.jpg",
        "https://www.hakwood.com/images/gallery/71227/1574X1050/005%20HV2231%20-%20Maison%20de%20Lee%20-%20Vancouver%20Canada.jpg"
      ]
    },
    {
      id: 5,
      label:  "Terrou-Bi",
      price:  80000,
      desc:   "desc",
      hours:  ["12:00","15:30"],
      images: [
        "https://www.hakwood.com/images/gallery/71227/1574X1050/005%20HV2231%20-%20Maison%20de%20Lee%20-%20Vancouver%20Canada.jpg",
        "https://www.hakwood.com/images/gallery/71227/1574X1050/005%20HV2231%20-%20Maison%20de%20Lee%20-%20Vancouver%20Canada.jpg",
        "https://www.hakwood.com/images/gallery/71227/1574X1050/005%20HV2231%20-%20Maison%20de%20Lee%20-%20Vancouver%20Canada.jpg"
      ]
    },
    {
      id: 6,
      label:  "Yaas Hotel Dakar Almadies",
      price:  50000,
      desc:   "desc",
      hours:  ["18:00","13:30"],
      images: [
        "https://www.hakwood.com/images/gallery/71227/1574X1050/005%20HV2231%20-%20Maison%20de%20Lee%20-%20Vancouver%20Canada.jpg",
        "https://www.hakwood.com/images/gallery/71227/1574X1050/005%20HV2231%20-%20Maison%20de%20Lee%20-%20Vancouver%20Canada.jpg",
        "https://www.hakwood.com/images/gallery/71227/1574X1050/005%20HV2231%20-%20Maison%20de%20Lee%20-%20Vancouver%20Canada.jpg"
      ]
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

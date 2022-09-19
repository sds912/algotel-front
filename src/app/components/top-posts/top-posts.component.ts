import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-top-posts',
  templateUrl: './top-posts.component.html',
  styleUrls: ['./top-posts.component.scss']
})
export class TopPostsComponent implements OnInit {

  @Input() posts: any;

  constructor() { }

  ngOnInit(): void {
  }

}

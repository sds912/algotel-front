import { Post } from './../../models/post';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss']
})
export class PostCardComponent implements OnInit {

   @Input() post!: Post

   act: number = 1;

  constructor() { }

  ngOnInit(): void {

    setInterval(() => {
      if(this.act < this.post.images.length - 1){
      this.act ++
      }else{
       this.act = 0;
      }
     },5000);
  }

}

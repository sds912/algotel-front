import { LoaderService } from './../../services/loader.service';
import { PostsService } from './../../services/posts.service';
import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-home-bottom-carousel',
  templateUrl: './home-bottom-carousel.component.html',
  styleUrls: ['./home-bottom-carousel.component.scss']
})
export class HomeBottomCarouselComponent implements OnInit {

  posts:any [] = []
  act: number = 0;


  constructor(private postService: PostsService, private loaderService: LoaderService) {
    this.getBottomCarouselPost();
  }


  getBottomCarouselPost(){
    this.loaderService.show();
    this.postService.findBottomCarousel().subscribe(res => {
      res.docs.map(d => this.posts.push(d.data()));
      this.loaderService.hide();
    })
  }

  ngOnInit(): void {
    setInterval(() => {
     if(this.act < this.posts.length - 1){
     this.act ++
     }else{
      this.act = 0;
     }
    },5000);


  }



}

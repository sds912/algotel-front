import { HotelsService } from './../../services/hotels.service';
import { PostsService } from './../../services/posts.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  data: any;

  constructor(private httpClient: HttpClient,
    private hotelService: HotelsService,
    private postService:PostsService) {
    //hotelService.initHotel()
    //postService.initPost();
   }

  ngOnInit(): void {
    this.httpClient.get("assets/app-data.json").subscribe(data =>{
      this.data = data;
    })
  }

}

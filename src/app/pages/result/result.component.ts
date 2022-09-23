import { LoaderService } from './../../services/loader.service';
import { Search } from 'src/app/models/search';
import { PostsService } from './../../services/posts.service';
import { state } from '@angular/animations';
import { Post } from './../../models/post';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  posts: Post[] = [];

  constructor(private route: ActivatedRoute,
    private loaderService: LoaderService,
    private postService: PostsService) { }

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts(){
    this.loaderService.show()
    const routeParams: any = this.route.snapshot.paramMap;

    let param: Search = {
      label: routeParams.get("label"),
      address: routeParams.get("address"),
      date: routeParams.get("date")
    }

    this.postService.findByFilter(param).subscribe(res => {
      this.posts = res;
      this.loaderService.hide()
    })
  }

}

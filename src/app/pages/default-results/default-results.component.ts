import { filter } from 'rxjs';
import { LoaderService } from 'src/app/services/loader.service';
import { PostsService } from './../../services/posts.service';
import { Post } from './../../models/post';
import { Component, OnInit } from '@angular/core';
import { MatCalendarCellClassFunction } from '@angular/material/datepicker';

@Component({
  selector: 'app-default-results',
  templateUrl: './default-results.component.html',
  styleUrls: ['./default-results.component.scss']
})
export class DefaultResultsComponent implements OnInit {

  posts!: Post[];
  opened: boolean = false;
  selected!: Date ;

  filterOption: number = 0;

  constructor(
    private postService: PostsService,
    private loader: LoaderService
    ) { }

  ngOnInit(): void {
    this.getPosts();
  }


  getPosts(){
    this.loader.show();
    this.postService.findAllPosts()
    .subscribe((res: any) => {
       this.posts = res;
       this.loader.hide();
    })
  }

  getByDatePosts(date: string){
    this.posts = [];
    this.loader.show();
    this.postService.findFilterByDate(date)
    .subscribe((res: any) => {
       this.posts = res;
       this.loader.hide();
       this.opened = false;

    })
  }

  filter(n:number){

   let date = "";
   let d: Date = new Date();

   this.filterOption = n;

    if(n == 2){
      this.opened = true;
    }else{
      if(n == 0){

        date = d.toISOString().substring(0,10)
      }
      if(n == 1){
        d.setDate(d.getDate()+1)
        date = d.toISOString().substring(0,10)
      }
      this.getByDatePosts(date);
    }

  }

  onChange(d: Date){
    this.getByDatePosts(d.toISOString().substring(0,10));
  }

  getClass(type: any){
    let date: string[] = [
      "2022-09-21",
      "2022-09-25",
      "2022-09-27",
      "2022-09-30"];

  return date.includes(type.toISOString().substring(0,10)) ? "selectedCells": "unSelected"

  }

}

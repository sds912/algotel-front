import { HotelsService } from './../../services/hotels.service';
import { Hotel } from './../../models/hotel';
import { HostPort } from './../../../../node_modules/@grpc/grpc-js/build/src/uri-parser.d';
import { PostsService } from './../../services/posts.service';
import { Post } from './../../models/post';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Search } from 'src/app/models/search';
import { LoaderService } from 'src/app/services/loader.service';
import { state } from '@angular/animations';
import { MatCalendarCellCssClasses } from '@angular/material/datepicker';


@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  step: number = 0;
  selected?: Date;

  search: Search = {
    address:   "",
    date: ""
  };

  keyword = 'label';

  hotels:Hotel[] = [];


  selectEvent(item: Hotel) {
    this.search.address = item.address;
    this.search.label   = item.label;
    if(item != null){
      this.step ++;
    }

  }

  onChangeSearch(val: string) {

  }

  onFocused(e: any){
    // do something when input is focused
  }

  back(){
    if(this.step > 0){
      this.step --;
    }else{
      this.router.navigate([""])
    }

  }

  onSelect(v?: Date){
    this.loader.show();
    this.search.date = v!.toISOString().substring(0, 10);
    /*
    this.router.navigate(['results', {
      "label":   this.search.label,
      "address": this.search.address,
      "date":    this.search.date}])
*/

  }

  constructor(
    private router: Router,
    private hotelService: HotelsService,
    private loader: LoaderService) { }

  ngOnInit(): void {
    this.hotelService.findAllHotels().subscribe(res => {
      this.hotels = res;
    })
  }

  dateClass = (d: any): MatCalendarCellCssClasses => {
    const date = 6;
   console.log(d)
    // Highlight saturday and sunday.
    return 'highlight-dates';
  }

}

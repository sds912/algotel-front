import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-img-slider',
  templateUrl: './my-img-slider.component.html',
  styleUrls: ['./my-img-slider.component.scss']
})
export class MyImgSliderComponent implements OnInit {

  @Input() images: string[] = [];

  public index: number = 0;


  next(){
    if( this.index < this.images.length -1){
      this.index ++;
    }else{
      this.index = 0;
    }
  }

  prev(){
    if( this.index > 0){
      this.index --;
    }else{
    this.index = this.images.length -1;
    }
  }


  constructor() { }

  ngOnInit(): void {
  }

}

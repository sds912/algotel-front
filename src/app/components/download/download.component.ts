import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.scss']
})
export class DownloadComponent implements OnInit {

  @Input() text!:string;

  constructor() { }

  ngOnInit(): void {
  }

}

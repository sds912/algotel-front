import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-btn',
  templateUrl: './search-btn.component.html',
  styleUrls: ['./search-btn.component.scss']
})
export class SearchBtnComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigate(){
    this.router.navigate(['search'])
  }

}

import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SideMenuService {

  isOpened = new Subject<boolean>();


  constructor() {

   }

  open() {
    this.isOpened.next(true);
  }

  close() {
    this.isOpened.next(false);
  }
}

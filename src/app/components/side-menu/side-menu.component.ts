import { SideMenuService } from './../../services/side-menu.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {

  constructor(public sideMenuService: SideMenuService) { }

  isOpened: boolean = false;

  menus : any[] = [
    {
      label: "Acceuil",
      path: "",
      icon:"fa fa-home"
    },
    {
      label: "Mes reservations",
      path: "",
      icon:"fa fa-list-alt"
    },
    {
      label: "Mes favories",
      path: "",
      icon:"fa fa-heart"
    },
    {
      label: "Nous-contacter",
      path: "",
      icon:"fa fa-phone"
    },
    {
      label: "Assistance",
      path: "",
      icon:"fa fa-info-circle"
    }
  ]

  ngOnInit(): void {
    this.sideMenuService.isOpened.subscribe(v => this.isOpened = v);
  }

  close(){
    this.sideMenuService.close();
  }

}

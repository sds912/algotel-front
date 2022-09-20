import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Search } from 'src/app/models/search';
import { LoaderService } from 'src/app/services/loader.service';


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

  keyword = 'name';
  data = [
    {
      id: 1,
      name: 'Radisson Blu Hotel, Dakar Sea Plaza'
    },
     {
       id: 2,
       name: 'Hotel Lagon 2'
     },
     {
       id: 3,
       name: 'Radisson Hotel Dakar Diamniadio'
     },
     {
      id:4,
      name: "Hotel Jardin Savana Dakar"
     },
     {
      id:5,
      name: "Terrou-Bi"
     },
     {
      id:6,
      name: "Yaas Hotel Dakar Almadies"
     },
     {
      id:7,
      name: "Hotel L'Adresse Dakar"
     },
     {
      id:8,
      name: "Airport Hotel Casino du Cap-vert"
     },
     {
      id:9,
      name: "Hôtel Fleur de Lys Plateau "
     },
     {
      id:10,
      name: "Casa Mara Dakar"
     },
     {
      id:11,
      name: "Cher Cite Axa"
     },
     {
      id:12,
      name: "Penthouse Appartments in Almadies"
     },
     {
      id: 13,
      name: "BOMA LifeStyle Hotel"
     },
     {
      id:14,
      name: "Villa soleil du SénégalOpens"
     },
     {
      id:15,
      name: "Hotel L'Adresse DakarOpens"
     },{
      id:16,
      name: "Hotel Le Littoral Des AlmadiesOpens "
     },
     {
      id:17,
      name: "La Madrague-Surf Beach SeaOpens"
     },
     {
      id:18,
      name: "Yaas Hotel Dakar AlmadiesOpens"
     },
     {
      id:19,
      name: "Café de Rome"
     },
     {
      id:20,
      name: "Maison d'hôtes OpanoramicOpens"
     }
  ];


  selectEvent(item: any) {
    if(item != null){
      this.step ++;
    }

  }

  onChangeSearch(val: string) {
    // fetch remote data from here
    // And reassign the 'data' which is binded to 'data' property.
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
    this.search.date = v!.toISOString();
    this.router.navigate(['results',{data: this.search}])

  }

  constructor(private router: Router, private loader: LoaderService) { }

  ngOnInit(): void {

  }

}

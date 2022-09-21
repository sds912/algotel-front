import { Search } from 'src/app/models/search';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Hotel } from '../models/hotel';

const hotelPath: string = "hotels";


@Injectable({
  providedIn: 'root'
})
export class HotelsService {


  constructor(private firestore: AngularFirestore, private httpClient: HttpClient) {


  }

  initHotel(){
    this.httpClient.get("assets/hotel-init-data.json").subscribe((data: any) =>{
      data.map((d: any)  => {
         this.saveHotel(d);
      })
    })
  }


   saveHotel(hotel: Hotel){
    return this.firestore.collection(hotelPath).add(hotel).then(res => {
      res.update({"uid": res.id})
    });
   }

   updateHotel(hotel: Hotel){
     return this.firestore.collection(hotelPath).doc(hotel.uid).update(hotel);
    }



   findAllHotels(){
     var HotelCollection: AngularFirestoreCollection<Hotel> = this.firestore.collection<Hotel>(hotelPath);
     return HotelCollection.valueChanges();
   }

   findByFilter(param: Search){
    var HotelCollection: AngularFirestoreCollection<Hotel> = this.firestore.collection<Hotel>(hotelPath, ref => {
     if(param.address != null) ref.where('address', '==', param.address)
     if(param.date    != null) ref.where('from',    '==', param.date)
     if(param.label   != null) ref.where('label',   '==', param.label)
     if(param.label   != null) ref.where('label',   '==', param.label)
      return ref;
    });

    return HotelCollection.valueChanges();
   }


   delete(uid: string){
    return this.firestore.collection(hotelPath).doc(uid).delete();
   }



}

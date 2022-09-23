import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Injectable } from '@angular/core';
import { Order } from '../models/order';

const oderPath = "oders";

@Injectable({
  providedIn: 'root'
})
export class OrderService {



  constructor(private firestore: AngularFirestore) { }


  saveOrder(order: Order){
    return this.firestore.collection(oderPath).add(order);
  }

  findOrderById(uid:string){
    return this.firestore.collection(oderPath).doc(uid);
  }
}

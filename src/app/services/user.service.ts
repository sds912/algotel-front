import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Injectable } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { Register } from '../models/register';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private firestore: AngularFirestore) { }


  saveUserInfo(d: Register, uid: string){
    return this.firestore.collection("users").doc(uid).set(d);
  }

  findUserByUid(uid: string){
    return this.firestore.collection("users").doc(uid).get();
  }
}

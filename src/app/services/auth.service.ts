import { NavigationEnd, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Register } from '../models/register';
import { BehaviorSubject, filter } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

constructor(
  private auth: AngularFireAuth, private router: Router
) {

}

  login(email: string, password: string){
   return this.auth.signInWithEmailAndPassword(email, password);
  }

  register(d: Register){
    return this.auth.createUserWithEmailAndPassword(d.email, d.password);
   }
}

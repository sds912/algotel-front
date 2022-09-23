import { MyUser } from './../../models/my-user';
import { AuthService } from './../../services/auth.service';
import { UserService } from './../../services/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PayMode } from 'src/app/models/pay-mode';
import { Auth } from '@angular/fire/auth';

@Component({
  selector: 'app-paiement',
  templateUrl: './paiement.component.html',
  styleUrls: ['./paiement.component.scss']
})
export class PaiementComponent implements OnInit {

  step: number = 0;
  selectedMode?: PayMode;
  user!: MyUser;

  payMode: PayMode[] = [
    {
      label: "Orange Money",
      avalable: true,
      code: "OM",
      logo: "assets/om.png"
    },
    {
      label: "Wave",
      avalable: true,
      code: "WAVE",
      logo: "assets/wave.png"
    },
    {
      label: "Carte Bancaire",
      avalable: true,
      code: "CB",
      logo: "assets/credit-card.png"
    }
  ]

  constructor(
    private route: ActivatedRoute,
    private auth: Auth,
    private userService: UserService
    ) { }

  ngOnInit(): void {

  }

  getUserInfo(){
    if(this.auth.currentUser != null){
      console.log(this.auth.currentUser)
      this.userService.findUserByUid(this.auth.currentUser!.uid).subscribe(res => {
        let d: any = res.data();
        this.user = d;
      })
    }

  }



  onSelectMode(mode: PayMode){
    this.selectedMode = mode;
    this.step = 1;
    this.getUserInfo();
  }

  confirm(){
    if(this.user != null){
      this.route.params.subscribe( params => {
        console.log(params['id'])
     })
    }

  }

  onOtp(e:any){

  }

}

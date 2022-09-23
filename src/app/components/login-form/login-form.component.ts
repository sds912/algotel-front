import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  authForm!: FormGroup;
  errorMessage: string = "";
  @Input() redirectPath!: string ;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService) { }

  ngOnInit(): void {
    this.authForm = this.formBuilder.group({
      email:    ["", Validators.email],
      password: ["", Validators.minLength(6)]
    })
  }


  onSubmit(){
    this.authService.login(this.authForm.value.email, this.authForm.value.password)
    .then(res => {
      this.router.navigate([this.redirectPath])
    })
    .catch(err => {
       this.errorMessage = err;
    })
  }
}

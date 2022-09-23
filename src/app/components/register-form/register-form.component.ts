import { UserService } from './../../services/user.service';
import { AuthService } from './../../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {

  registerForm!: FormGroup;
  errorMessage: string = "";
  loading: boolean = false;
  @Input() redirectPath!: string;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private userService: UserService,
    private authService: AuthService) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      email:     ["", Validators.email],
      password:  ["", Validators.minLength(6)],
      firstName: ["", Validators.required],
      lastName:  ["", Validators.required],
      phone:     ["", Validators.required]
     })

  }

  onSubmit(){
    this.loading = true;
    this.authService.register(this.registerForm.value).then(res => {
      if(res.user != null){
        this.userService.saveUserInfo(this.registerForm.value, res.user!.uid)
        .then(res => {
          this.router.navigate([this.redirectPath])
        })}
      })
  }

}

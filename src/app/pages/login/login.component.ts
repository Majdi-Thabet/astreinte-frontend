import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
// import custom validator to validate that password and confirm password fields match
// import { MustMatch } from './must-match.validator';
import { UserService } from '../../services/user.service';
// import {ToastrService} from 'ngx-toastr';
import { Router } from '@angular/router';
import { User } from '../../models/user';
import { ToastrService } from 'ngx-toastr';
import { HttpBackend, HttpResponse } from '@angular/common/http';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  imageUrl = "assets/images/proxym.png"
  loginForm: FormGroup;
  submitted = false;


  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router,
    private toastr: ToastrService
    // private toastr:ToastrService



  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({

      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(4)]]

    }, {

    });



  }


  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }
    // wselet lel token 6.00 in video 23
    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.loginForm.value))
    let data: any = this.loginForm.value;

    let user = { "username": data.username, "password": data.password };

    console.log(user);
    this.userService.login(user).subscribe(
      res => {
        console.log(JSON.stringify(res.body.user));
        //  if(res.status===200){
        //   this.toastr.success('Login successfully', 'Connected');

        // }else{
        //   this.toastr.error('Login Failed', 'Not Connected');
        // }
        this.toastr.success('Login successfully', 'Connected');

        this.userService.getOneUserByUserName(user.username).subscribe(
          resultat => {
            console.log(resultat);
            localStorage.setItem('user', JSON.stringify(resultat));

          }
        )

        this.router.navigate(['/home']);




      },
      err => {
        console.log(err);
        this.toastr.error('Login Failed', 'Not Connected');

      }
    )
  }
}

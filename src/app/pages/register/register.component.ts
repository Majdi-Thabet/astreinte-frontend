import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
// import custom validator to validate that password and confirm password fields match
// import { MustMatch } from './must-match.validator';

import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { User } from '../../models/user';
import { ToastrService } from 'ngx-toastr';
import { HttpBackend, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  imageUrl = "assets/images/proxym.png"
  registerForm: FormGroup
  submitted = false;
  roles: any;
  departements: any;

  // roles = [
  //   {name: 'USER', id: '1'},
  //   {name: 'ADMIN', id: '2'}
  // ];


  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
  }

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router,
    private toastr: ToastrService) {

    let formControls = {
      nom: new FormControl('', [
        Validators.required,
        Validators.pattern("[a-z .'-]+"),
        Validators.minLength(2)
      ]),
      prenom: new FormControl('', [
        Validators.required,
        Validators.pattern("[a-z .'-]+"),
        Validators.minLength(2)
      ]),
      username: new FormControl('', [
        Validators.required

      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      role: new FormControl(''),
      sexe: new FormControl(''),
      departement: new FormControl(''),

      poste: new FormControl('', [
        Validators.required,
        Validators.pattern("[a-z .'-]+"),
        Validators.minLength(2)
      ]),

      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6)
      ]),
      repassword: new FormControl('', [
        Validators.required,
      ])
    }

    this.registerForm = this.fb.group(formControls)

  }




  ngOnInit(): void {
    this.userService.getAllRoles().subscribe(
      result => {
        this.roles = result
        console.log(result);

      },
      error => {
        console.log(error);

      }
    )

    this.userService.getAllDepartements().subscribe(
      result => {
        this.departements = result
        console.log(result);

      },
      error => {
        console.log(error);

      }
    )


  }

  get f() { return this.registerForm.controls; }




  register() {
    console.log(this.registerForm.value);
    let data = this.registerForm.value;
    // let user = new (data.nom,data.prenom,data.username,data.email,data.poste,data.password);


    this.userService.register(this.registerForm.value, this.registerForm.value.role, this.registerForm.value.departement).subscribe(
      res => {
        this.toastr.success(res.message);
        this.router.navigate(['/']);
      },
      err => {
        console.log(err);

      }
    )
  }

}



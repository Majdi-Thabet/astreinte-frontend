import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
// import { User } from '../user';
import { ToastrService } from 'ngx-toastr';
import { User } from '../models/user';
@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  updateUserForm: FormGroup

  constructor(
    private fb: FormBuilder,
    private route:ActivatedRoute,
    private userService:UserService,
    private router : Router,
    private toastr: ToastrService)
   { 
   
      let formControls = {
        nom : new FormControl('',[
          Validators.required,
          Validators.pattern("[a-z .'-]+"),
          Validators.minLength(2)
        ]),
        prenom : new FormControl('',[
          Validators.required,
          Validators.pattern("[a-z .'-]+"),
          Validators.minLength(2)
        ]),
        email:new FormControl('',[
          Validators.required,
          Validators.email
        ]),
        poste:new FormControl('',[
          Validators.required,
          Validators.pattern("[a-z .'-]+"),
          Validators.minLength(2)
        ])
  
      }
  
      this.updateUserForm = this.fb.group(formControls)
     }
  
     get nom(){return this.updateUserForm.get('nom')}
     get prenom(){return this.updateUserForm.get('prenom')}
     get email(){return this.updateUserForm.get('email')}
     get poste(){return this.updateUserForm.get('poste')}


    ngOnInit(): void {

      let idUser = this.route.snapshot.params['id'];
       console.log(this.route.snapshot.params['id']);
      this.userService.getOneUser(idUser).subscribe(
        res=>{
        let user = res;
        this.updateUserForm.patchValue({
          nom: user.nom,
          prenom: user.prenom,
          email: user.email,
          poste: user.poste,

        })

        },
        err=>{
          console.log(err);
          
        }
      )
      
    }

    get f() { return this.updateUserForm.controls; }

    updateUser(){
      // console.log(this.updateUserForm.value);
      let data = this.updateUserForm.value;
      
      console.log("data",data);
      this.userService.updateUser(data,this.route.snapshot.params['id']).subscribe(
        res=>{
          this.router.navigate(['/home/people-list']);

        },
        err=>{
          console.log(err);
          
        }
      )
      
    }
  
  }
  
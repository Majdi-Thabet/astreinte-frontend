import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
// import { User } from '../user';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-details-user',
  templateUrl: './details-user.component.html',
  styleUrls: ['./details-user.component.css']
})
export class DetailsUserComponent implements OnInit {
user:any;
  

  constructor(
   
    private route:ActivatedRoute,
    private userService:UserService,
    private router : Router,
    private toastr: ToastrService
  ) {
   
  }
  ngOnInit(): void {
    let idUser = this.route.snapshot.params['id'];
      console.log(idUser);
      this.userService.getOneUser(idUser).subscribe(
        res=>{
        this.user = res;
        
        },
        err=>{
          console.log(err);
          
        }
      )
      
  }
  
  



// updateUser() {
//   let data = this.updateUserForm.value;
//   let idUser = this.route.snapshot.params.id;
//   let user = new User(data.firstname,data.lastname,null,data.phone,null,idUser);

//   this.userService.updateUser(user).subscribe(
//     res=>{
//       this.toastr.warning(res.message);

//       this.router.navigate(['/people-list']);
//     },
//     err=>{
//       console.log(err);
//     }
//   )

// }



}


















// import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
// import { ActivatedRoute, Router } from '@angular/router';
// import { UserService } from '../user.service';
// // import { User } from '../user';
// import { ToastrService } from 'ngx-toastr';
// import { User } from '../models/user';


// @Component({
//   selector: 'app-details-user',
//   templateUrl: './details-user.component.html',
//   styleUrls: ['./details-user.component.css']
// })
// export class DetailsUserComponent implements OnInit {

//   detailsUserForm:FormGroup

//   constructor(
//     private fb: FormBuilder,
//     private route:ActivatedRoute,
//     private userService:UserService,
//     private router : Router,
//     private toastr: ToastrService
//   ) {
//     let formControls = {
//       nom : new FormControl('',[
//         Validators.required,
//         Validators.pattern("[a-z .'-]+"),
//         Validators.minLength(2)
//       ]),
//       prenom : new FormControl('',[
//         Validators.required,
//         Validators.pattern("[a-z .'-]+"),
//         Validators.minLength(2)
//       ]),
//       email:new FormControl('',[
//         Validators.required,
//         Validators.email
//       ]),
//       poste:new FormControl('',[
//         Validators.required,
//         Validators.pattern("[a-z .'-]+"),
//         Validators.minLength(2)
//       ])

//     }
//      this.detailsUserForm = this.fb.group(formControls)
//    }

//    get nom(){return this.detailsUserForm.get('nom')}
//      get prenom(){return this.detailsUserForm.get('prenom')}
//      get email(){return this.detailsUserForm.get('email')}
//      get poste(){return this.detailsUserForm.get('poste')}

//   ngOnInit(): void {
//     let idUser = this.route.snapshot.params['id'];
//       console.log(idUser);
//       this.userService.getOneUser(idUser).subscribe(
//         res=>{
//         let user = res;
//         this.detailsUserForm.patchValue({
//           nom: user.nom,
//           prenom: user.prenom,
//           email: user.email,
//           poste: user.poste,

//         })

//         },
//         err=>{
//           console.log(err);
          
//         }
//       )
      
//   }
  
//   get f() { return this.detailsUserForm.controls; }



// // updateUser() {
// //   let data = this.updateUserForm.value;
// //   let idUser = this.route.snapshot.params.id;
// //   let user = new User(data.firstname,data.lastname,null,data.phone,null,idUser);

// //   this.userService.updateUser(user).subscribe(
// //     res=>{
// //       this.toastr.warning(res.message);

// //       this.router.navigate(['/people-list']);
// //     },
// //     err=>{
// //       console.log(err);
// //     }
// //   )

// // }



// }
import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
// import {...} from '...';

import swal from 'sweetalert2'
import { User } from '../models/user';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css'],
})
export class PeopleListComponent implements OnInit {

  peopleList:any;
  user=new User();
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.getAll();
  }
getAll(){
  this.userService.getAllUsers().subscribe(
    result =>{
      this.peopleList = result
      console.log(result);
      
    },
    error =>{
      console.log(error);
      
    }
  )
}

recuper(id:any,nom:any,prenom:any,sexe:any,email:any,poste:any,department:any,role:any,username:any){
  console.log(this.user)
this.user.id=id;
this.user.nom=nom;
this.user.prenom=prenom;
this.user.sexe=sexe;
this.user.email=email;
this.user.poste=poste;
this.user.department=department;
this.user.role=role;
this.user.username=username;

}

  delete(id:any) {
    swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((res:any) => {
      if (res.isConfirmed) {
        this.userService.deleteUser(id).subscribe(

          res=>{
            console.log(res);
        this.getAll();
    
            
          },
          err => {
            console.log(err);
            
          }
    
          
        )
        swal.fire(
          'Deleted!',
          'Collaborateur has been deleted.',
          'success'
        )
      }
    })


    
  }


  

}

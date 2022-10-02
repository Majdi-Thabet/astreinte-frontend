import { Component, Injectable, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfigastreinteService } from '../services/configastreinte.service';
import { ToastrService } from 'ngx-toastr';
import swal from 'sweetalert2'
import { Configastreinte } from '../models/configastreinte';
import { UserService } from '../user.service';


import { User } from '../models/user';
@Component({
  selector: 'app-config-astreinte',
  templateUrl: './config-astreinte.component.html',
  styleUrls: ['./config-astreinte.component.css']
})

export class ConfigAstreinteComponent implements OnInit {

  updateConfigAstreinteForm: FormGroup
  addConfigAstreinteForm : FormGroup
  configastreinteList:any;
  astreinteListbyconfig:any;
  iduserconnected:any;
  inputsearch1:any;
  // user=new User();
  // collaborateurs:any;
  p1=1;
  public searchFilter1:any='';
  configastreinte=new Configastreinte();
  constructor(private configastreinteService:ConfigastreinteService,
    private fb: FormBuilder,
    private route:ActivatedRoute,
    private router : Router,
    private toastr: ToastrService) { 

      let formControls = {

        // dureeconfigastreinte : new FormControl('',[
        //   Validators.required,
         
        // ]),
        periodeastreinte : new FormControl('',[
          Validators.required,
          
        ]),
        nombrecollaborateurs : new FormControl('',[
          Validators.required,
         
        ]),
        // nombreastreintes : new FormControl('',[
        //   Validators.required,
         
        // ]),
        // astreintebycollaborateur:new FormControl('',[
        //   Validators.required,
          
        // ]),
        datedebutconfig:new FormControl('',[
          Validators.required,
          
        ]),
        datefinconfig:new FormControl('',[
          Validators.required
        ]),
      
    }
    let formControlsupdate = {

      // dureeconfigastreinte : new FormControl('',[
      //   Validators.required,
       
      // ]),
      periodeastreinte : new FormControl('',[
        Validators.required,
        
      ]),
      nombrecollaborateurs : new FormControl('',[
        Validators.required,
       
      ]),
      // nombreastreintes : new FormControl('',[
      //   Validators.required,
       
      // ]),
      // astreintebycollaborateur:new FormControl('',[
      //   Validators.required,
        
      // ]),
      datedebutconfig:new FormControl('',[
        Validators.required,
        
      ]),
      datefinconfig:new FormControl('',[
        Validators.required
      ]),
    
  }
    this.updateConfigAstreinteForm = this.fb.group(formControlsupdate)
    this.addConfigAstreinteForm = this.fb.group(formControls)
  }
 


  
  
  
  ngOnInit(): void {

this.iduserconnected=JSON.parse(localStorage.getItem("user")).id;

    // this.configastreinteService.getcollabwithroleuseranddepartment().subscribe(
      
      
    //   result =>{
    //     this.collaborateurs = result
    //     console.log("this.collaborateurs",result);
        
    //   },
    //   error =>{
    //     console.log(error);
        
    //   }
    // )
 

  

    this.getAll();


    }

    get f() { return this.updateConfigAstreinteForm.controls; }
    get m() { return this.addConfigAstreinteForm.controls; }
    
    updateConfigAstreinte(){
      // console.log(this.updateUserForm.value);
      // let data = this.updateAstreinteForm.value;
      let data = {
   
        // dureeconfigastreinte:this.updateConfigAstreinteForm.value.dureeconfigastreinte,
        periodeastreinte:this.updateConfigAstreinteForm.value.periodeastreinte,
        nombrecollaborateurs:this.updateConfigAstreinteForm.value.nombrecollaborateurs,
        // nombreastreintes:this.updateConfigAstreinteForm.value.nombreastreintes,
        // astreintebycollaborateur:this.updateConfigAstreinteForm.value.astreintebycollaborateur,
        datedebutconfig:this.updateConfigAstreinteForm.value.datedebutconfig,
        datefinconfig:this.updateConfigAstreinteForm.value.datefinconfig,
          
      
      }
        
      console.log("data",data);
      this.configastreinteService.updateConfigAstreinte(data,this.configastreinte.id).subscribe(
        res=>{
         this.getAll();

        },
        err=>{
          console.log(err);
          
        }
      )
      
    
  
    this.getAll();
  }



  addConfigAstreinte(){
    // console.log(this.updateUserForm.value);
    // let data = this.addAstreinteForm.value;
    let data = {
   
      // dureeconfigastreinte:this.addConfigAstreinteForm.value.dureeconfigastreinte,
      periodeastreinte:this.addConfigAstreinteForm.value.periodeastreinte,
      nombrecollaborateurs:this.addConfigAstreinteForm.value.nombrecollaborateurs,
      // nombreastreintes:this.addConfigAstreinteForm.value.nombreastreintes,
      // astreintebycollaborateur:this.addConfigAstreinteForm.value.astreintebycollaborateur,
      datedebutconfig:this.addConfigAstreinteForm.value.datedebutconfig,
      datefinconfig:this.addConfigAstreinteForm.value.datefinconfig,

    }
      
    console.log("data",data);

    // console.log("status",this.addAstreinteForm.value);
    this.configastreinteService.addConfigAstreinte(data,this.iduserconnected).subscribe(
      res=>{
       this.getAll();

      },
      err=>{
        console.log(err);
        
      }
    )
   
  

  // this.getAll();
}



  getAll(){
    this.configastreinteService.getAllConfigAstreintes().subscribe(
      result =>{
        this.configastreinteList = result
        console.log("this.configastreinteList",result);
        
      },
      error =>{
        console.log(error);
        
      }
    )
  }

  recuper(id:any,dureeconfigastreinte:any,periodeastreinte:any,nombrecollaborateurs:any,nombreastreintes:any,astreintebycollaborateur:any,datedebutconfig:any,datefinconfig:any){
   
  this.configastreinte.id=id;
  this.configastreinte.dureeconfigastreinte=dureeconfigastreinte;
  this.configastreinte.periodeastreinte=periodeastreinte;
  this.configastreinte.nombrecollaborateurs=nombrecollaborateurs;
  this.configastreinte.nombreastreintes=nombreastreintes;
  this.configastreinte.astreintebycollaborateur=astreintebycollaborateur;
  this.configastreinte.datedebutconfig=datedebutconfig;
  this.configastreinte.datefinconfig=datefinconfig;
  
  console.log(this.configastreinte)

  this.updateConfigAstreinteForm.patchValue({
    dureeconfigastreinte: this.configastreinte.dureeconfigastreinte,
    periodeastreinte: this.configastreinte.periodeastreinte,
    nombrecollaborateurs: this.configastreinte.nombrecollaborateurs,
    nombreastreintes: this.configastreinte.nombreastreintes,
    astreintebycollaborateur: this.configastreinte.astreintebycollaborateur,
    datedebutconfig: this.configastreinte.datedebutconfig,
    datefinconfig: this.configastreinte.datefinconfig,

  })
  
  }


  recuperer(astreinteListbyconfig:any){
   
     this.configastreinte.astreinteList=astreinteListbyconfig;


    console.log(this.configastreinte)
    
    }

  delete(id:any) {
    swal.fire({
      title: 'Etes-vous sûr?',
      text: "Vous ne pourrez pas revenir en arrière !",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Oui, supprimez-le!'
    }).then((res:any) => {
      if (res.isConfirmed) {
        this.configastreinteService.deleteConfigAstreinte(id).subscribe(

          res=>{
            console.log(res);
        this.getAll();
    
            
          },
          err => {
            console.log(err);
            
          }
    
          
        )
        swal.fire(
          'Supprimé!',
          'Config Astreinte a été supprimé.',
          'success'
        )
      }
    })


    
  }

}

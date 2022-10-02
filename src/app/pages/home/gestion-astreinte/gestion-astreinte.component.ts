import {
  Component, OnInit
} from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Astreinte } from 'src/app/models/astreinte';
import { AstreinteService } from 'src/app/services/astreinte.service';
import swal from 'sweetalert2'

@Component({
  selector: 'app-gestion-astreinte',
  templateUrl: './gestion-astreinte.component.html',
  styleUrls: ['./gestion-astreinte.component.css']

})
export class GestionAstreinteComponent implements OnInit {

  //astreinteListpagination: any[] = someArrayOfThings;  

  updateAstreinteForm: FormGroup
  addAstreinteForm: FormGroup
  astreinteList: any;
  inputsearch: any;
  collaborateurs: any;
  astreinte = new Astreinte();
  p = 1;
  public searchFilter: any = '';
  constructor(private astreinteService: AstreinteService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService) {

    let formControls = {

      collaborateur: new FormControl('', [
        Validators.required,

      ]),
      type: new FormControl('', [
        Validators.required,

      ]),
      datedebut: new FormControl('', [
        Validators.required,

      ]),
      datefin: new FormControl('', [
        Validators.required,

      ]),
      dureeastreinte: new FormControl('', [
        Validators.required,

      ]),
      intervention: new FormControl('', [
        Validators.required,

      ]),
      raison: new FormControl('', [
        Validators.required,

      ]),
      prime: new FormControl('', [
        Validators.required
      ]),
      status: new FormControl('', [
        Validators.required
      ]),
    }
    let formControlsupdate = {


      type: new FormControl('', [
        Validators.required,

      ]),
      datedebut: new FormControl('', [
        Validators.required,

      ]),
      datefin: new FormControl('', [
        Validators.required,

      ]),
      dureeastreinte: new FormControl('', [
        Validators.required,

      ]),
      intervention: new FormControl('', [
        Validators.required,

      ]),
      raison: new FormControl('', [
        Validators.required,

      ]),
      prime: new FormControl('', [
        Validators.required
      ]),
      status: new FormControl('', [
        Validators.required
      ]),
    }
    this.updateAstreinteForm = this.fb.group(formControlsupdate)
    this.addAstreinteForm = this.fb.group(formControls)
  }






  ngOnInit(): void {


    this.astreinteService.getcollabwithroleuseranddepartment().subscribe(


      result => {
        this.collaborateurs = result
        console.log("this.collaborateurs", result);

      },
      error => {
        console.log(error);

      }
    )


    // let idAstreinte = this.route.snapshot.params['id'];
    //    console.log(this.route.snapshot.params['id']);
    //   this.astreinteService.getOneAstreinte(idAstreinte).subscribe(
    //     res=>{
    //     let astreinte = res;
    //     this.updateAstreinteForm.patchValue({
    //       type: this.astreinte.type,
    //       datedebut: this.astreinte.datedebut,
    //       datefin: this.astreinte.datefin,
    //       dureeastreinte: this.astreinte.dureeastreinte,
    //       intervention: this.astreinte.intervention,
    //       raison: this.astreinte.raison,
    //       prime: this.astreinte.prime,
    //       status: this.astreinte.status,

    //     })

    //     },
    //     err=>{
    //       console.log(err);

    //     }
    //   )

    this.getAll();


  }

  get f() { return this.updateAstreinteForm.controls; }
  get m() { return this.addAstreinteForm.controls; }

  updateAstreinte() {
    console.log(this.updateAstreinteForm.value);
    console.log(this.updateAstreinteForm.value);



    console.log("data update", this.updateAstreinteForm.value);
    this.astreinteService.updateAstreinte(this.updateAstreinteForm.value, this.astreinte.id).subscribe(
      res => {
        this.getAll();

      },
      err => {
        console.log(err);

      }
    )



    // this.getAll();
  }



  addAstreinte() {
    // console.log(this.updateUserForm.value);
    // let data = this.addAstreinteForm.value;
    let data = {

      type: this.addAstreinteForm.value.type,
      datedebut: this.addAstreinteForm.value.datedebut,
      datefin: this.addAstreinteForm.value.datefin,
      dureeastreinte: this.addAstreinteForm.value.dureeastreinte,
      intervention: this.addAstreinteForm.value.intervention,
      prime: this.addAstreinteForm.value.prime,
      status: this.addAstreinteForm.value.status,
      raison: this.addAstreinteForm.value.raison,

    }

    console.log("data", data);
    // console.log("status",this.addAstreinteForm.value);
    this.astreinteService.addAstreinte(data, this.addAstreinteForm.value.collaborateur).subscribe(
      res => {
        this.getAll();

      },
      err => {
        console.log(err);

      }
    )



    // this.getAll();
  }



  getAll() {
    this.astreinteService.getAllAstreintes().subscribe(
      result => {
        this.astreinteList = result
        console.log("this.astreinteList", result);

      },
      error => {
        console.log(error);

      }
    )
  }

  recuper(id: any, type: any, datedebut: any, datefin: any, dureeastreinte: any, intervention: any, prime: any, status: any, raison: any) {

    this.astreinte.id = id;
    this.astreinte.type = type;
    this.astreinte.datedebut = datedebut;
    this.astreinte.datefin = datefin;
    this.astreinte.dureeastreinte = dureeastreinte;
    this.astreinte.intervention = intervention;
    this.astreinte.prime = prime;
    this.astreinte.status = status;
    this.astreinte.raison = raison;
    console.log(this.astreinte)
    this.updateAstreinteForm.patchValue({
      type: this.astreinte.type,
      datedebut: this.astreinte.datedebut,
      datefin: this.astreinte.datefin,
      dureeastreinte: this.astreinte.dureeastreinte,
      intervention: this.astreinte.intervention,
      raison: this.astreinte.raison,
      prime: this.astreinte.prime,
      status: this.astreinte.status,

    })
  }

  delete(id: any) {
    swal.fire({
      title: 'Etes-vous sûr?',
      text: "Vous ne pourrez pas revenir en arrière !",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Oui, supprimez-le!'
    }).then((res: any) => {
      if (res.isConfirmed) {
        this.astreinteService.deleteAstreinte(id).subscribe(

          res => {
            console.log(res);
            this.getAll();


          },
          err => {
            console.log(err);

          }


        )
        swal.fire(
          'Supprimé!',
          'Astreinte a été supprimé.',
          'success'
        )
      }
    })



  }

}

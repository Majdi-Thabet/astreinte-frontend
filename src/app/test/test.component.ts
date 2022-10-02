import { Component, OnInit } from '@angular/core';

import { FormGroup,FormControl,FormBuilder,Validators, UntypedFormGroup } from '@angular/forms';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

    
    myForm : FormGroup

  constructor(private fb:FormBuilder) {

    let formControls = {
      username : new FormControl('',[
        Validators.required,
        Validators.email
      ])
    }
    this.myForm = this.fb.group(formControls);
   }

   get username(){
    return this.myForm.get('username');
  }
// ngoninit hiya method mas2oula  3le tahthir component 9bal methodher 3le navigator

  ngOnInit(): void {
    
  }
  saveUser(){
    console.log(this.myForm.value);
    
  }


}

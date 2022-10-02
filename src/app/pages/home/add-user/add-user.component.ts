import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  addUserForm: FormGroup

  constructor(private fb: FormBuilder) {
    let formControls = {
      username: new FormControl('', [
        Validators.required,
        Validators.pattern("[a-z .'-]+"),
        Validators.minLength(2)
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      role: new FormControl('', [
        Validators.required,
        Validators.pattern("[a-z .'-]+"),
        Validators.minLength(2)
      ])

    }

    this.addUserForm = this.fb.group(formControls)
  }

  get username() { return this.addUserForm.get('username') }
  get email() { return this.addUserForm.get('email') }
  get role() { return this.addUserForm.get('role') }
  ngOnInit(): void {
  }
  addUser() {
    console.log(this.addUserForm.value);

  }

}

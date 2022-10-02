import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
user:any;
  constructor() { 
    this.user=JSON.parse(localStorage.getItem("user"));
  }

  ngOnInit(): void {
  }

}

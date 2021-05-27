import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  username="";
  password="";
  
  countries = ["India","U.S.A"];

  cities = {
    "India":["Hyderabad","Pune","Mumbai"],
    "USA":["Los Angeles","New York","Chicago"]
  }


  citySelected="";




  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(f:any){

       
      alert("Login Successful");
      
    
      
  }
}

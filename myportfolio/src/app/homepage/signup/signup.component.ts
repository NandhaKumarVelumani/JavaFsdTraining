import { Component, OnInit } from '@angular/core';

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"],
})
export class SignupComponent implements OnInit {
  email: string = "";
  password: string = "";
  constructor() {}

  ngOnInit() {}

  onSubmit(){
    const div =
      document.querySelector(".disp-msg").innerHTML =
        "registered successfully" +
      '<a class=" btn text-light" routerLink="/signin">login</a>';
    sessionStorage.setItem('email', this.email);
    sessionStorage.setItem('password', this.password);
    this.email ='';
    this.password ='';
  }
}

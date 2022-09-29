import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-signin",
  templateUrl: "./signin.component.html",
  styleUrls: ["./signin.component.css"],
})
export class SigninComponent implements OnInit {
  email: string = "";
  password: string = "";

  constructor() {}

  ngOnInit() {}

  onSubmit() {
    if (this.email == sessionStorage.getItem("email")) {
      const div = (document.querySelector(".disp-msg").innerHTML =
        "Logged in successfully");
      console.log("logged in");
    }
  }
}

import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SigninComponent } from "./homepage/signin/signin.component";
import { SignupComponent } from "./homepage/signup/signup.component";
import { HomepageComponent } from "./homepage/homepage.component";
import {FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    HomepageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule,FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

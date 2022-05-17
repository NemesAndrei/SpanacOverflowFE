import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../../shared/authentication.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: any;
  password: any;
  username: any;
  error:string;

  constructor(private authenticationService:AuthenticationService) { }

  ngOnInit(): void {
  }

  login(loginForm: any) {
    console.log(loginForm);
    this.authenticationService.login(loginForm.username, loginForm.password).then(r=>{
      console.log(r);
      if(r=="Invalid username or password" || r=="User is banned"){
        this.error = r;
      } else {
        this.error = "";
      }
    });
  }

}

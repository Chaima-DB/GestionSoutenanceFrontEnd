import { Component, OnInit } from '@angular/core';
import {LoginService} from "../../controller/service/login.service";
import {User} from "../../controller/model/user";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }
  get user(): User {
    return this.loginService.user;
  }
  accessToken(form) {

  }
  authenticate(user : User){
    this.loginService.authenticate(user);
  }
}

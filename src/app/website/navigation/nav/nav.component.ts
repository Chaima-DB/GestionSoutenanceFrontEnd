import { Component, OnInit } from '@angular/core';
import {JwtClientService} from "../../../controller/service/jwt-client.service";
import {LoginService} from "../../../controller/service/login.service";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private jwtClientService: JwtClientService,
              private loginService: LoginService) { }
  authority = this.jwtClientService.getAuthority().toString();
  ngOnInit(): void {
  }
  LoggedUser(): boolean {
    if (this.authority == "ROLE_USER" && this.loginService.isLoggedIn()) {
      return true;
    }else {
      return false;
    }
  }
  LoggedAdmin(): boolean {
    if ((this.authority == "ROLE_ADMIN" || this.authority == "ROLE_SUPER_ADMIN") && this.loginService.isLoggedIn() ) {
      return true;
    }else {
      return false;
    }
  }

  LoggedProf(): boolean {
    if (this.authority == "ROLE_PROF" && this.loginService.isLoggedIn()) {
      return true;
    }else {
      return false;
    }
  }
  NonLogged(): boolean {
    if ( this.loginService.isLoggedIn() ) {
      return false;
    }else {
      return true;
    }
  }
}

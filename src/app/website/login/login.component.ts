import { Component, OnInit } from '@angular/core';
import {LoginService} from "../../controller/service/login.service";
import {User} from "../../controller/model/user";
import {UserLogin} from "../../controller/model/user-login";
import {first} from "rxjs/operators";
import {Router} from "@angular/router";
import {JwtClientService} from "../../controller/service/jwt-client.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLoginFailed = false;
  role: string;
  constructor(private loginService: LoginService,
              private router: Router,
              private jwtClientService: JwtClientService ) { }
  ngOnInit(): void {
    console.log(this.jwtClientService.getAuthority().toString());
  }
  get user(): UserLogin {
    return this.loginService.user;
  }
  authenticate(){
    this.loginService.authenticate(new UserLogin(this.user.email,this.user.password)).pipe(
      first()).subscribe(data => {
        this.role = this.jwtClientService.getAuthority().toString()
      if ( this.role == "ROLE_SUPER_ADMIN" || this.role == "ROLE_ADMIN") {
              this.isLoginFailed = false;
              this.router.navigateByUrl('/dashboardAdmin');
      }else if (this.role == "ROLE_USER"){
              this.isLoginFailed = false;
              this.router.navigateByUrl('/dashboardUser');
      }else if (this.role = 'ROLE_PROF'){
        this.isLoginFailed = false;
        this.router.navigateByUrl('/');
      }else {
        this.isLoginFailed = false;
        this.router.navigateByUrl('/');
      }
      },
      error => {
        console.log(error);
        this.isLoginFailed = true;
      });
  }
}

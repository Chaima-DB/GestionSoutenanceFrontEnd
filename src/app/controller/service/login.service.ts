import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";
import {AuthService} from "./auth.service";
import {JwtResponse} from "../model/jwt-response";
import {map} from "rxjs/operators";
import {UserLogin} from "../model/user-login";
import {JwtClientService} from "./jwt-client.service";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private _userLogin : UserLogin ;
  private _baseUrl = 'http://localhost:8090/';
  private _url= this._baseUrl + 'user/authenticate';
  constructor(private http: HttpClient,
              private  router: Router,
              private authService: AuthService,
              private jwtClientService: JwtClientService) { }


  get user(): UserLogin {
    if (this._userLogin == null) {
      this._userLogin = new UserLogin("", "");
    }
    return this._userLogin;
  }

  set user(value: UserLogin) {
    this._userLogin = value;
  }

  public welcome(token) {
    let tokenStr = "Bearer "+ token;
    const headers = new HttpHeaders().set("Authorization",tokenStr);
    this.http.get(this._baseUrl+"user/welcome" ,{headers,responseType : 'text' as 'json'});
  }
  public authenticate(user: UserLogin) {
  return this.http.post<JwtResponse>(this._url,this.user, this.authService.httpHeader).pipe(map(
    data => {
      console.log(data);
      this.authService.saveData(data);
      return data;
    }));
  }
  public isLoggedIn() {
    return !!localStorage.getItem(this.jwtClientService.TOKEN_KEY);
  }
  public logOut() {
    return this.authService.removeData();
  }
}

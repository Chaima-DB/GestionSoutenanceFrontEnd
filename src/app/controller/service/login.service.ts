import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";
import {AuthService} from "./auth.service";
import {JwtResponse} from "../model/jwt-response";
import {map} from "rxjs/operators";
import {UserLogin} from "../model/user-login";
import {Doctorant} from "../model/doctorant.model";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private _userLogin : UserLogin ;
  private _baseUrl = 'http://localhost:8090/';
  private _url= this._baseUrl + 'user/authenticate';
  constructor(private http: HttpClient,
              private  router: Router,
              private authService: AuthService) { }


  get user(): UserLogin {
    if (this._userLogin == null) {
      this._userLogin = new UserLogin("", "");
    }
    return this._userLogin;
  }

  set user(value: UserLogin) {
    this._userLogin = value;
  }

  public generateToken(){
    this.http.post(this._url,{responseType : 'text' as 'json'}).subscribe(
      data => {
        console.log(data);
      },error => {
        console.log("A77 machakil"+ error);
      }
    );
  }
  public welcome(token){
    let tokenStr = "Bearer "+ token;
    const headers = new HttpHeaders().set("Authorization",tokenStr);
    this.http.get(this._baseUrl+"user/welcome" ,{headers,responseType : 'text' as 'json'});
  }
  public authenticate(user: UserLogin){
  return this.http.post<JwtResponse>(this._url,this.user, this.authService.httpHeader).pipe(map(
    data => {
      console.log(data);
      this.authService.saveData(data);
      return data;
    }));
  }

}

import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { User } from '../model/user';
import {Doctorant} from "../model/doctorant.model";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private _user : User ;
  private _baseUrl = 'http://localhost:8090/';
  private _url= this._baseUrl + 'user/authenticate';
  constructor(private http: HttpClient) { }

  get user(): User {
    if (this._user == null) {
      this._user = new User();
    }
    return this._user;
  }

  set user(value: User) {
    this._user = value;
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
  public authenticate(user: User){
  this.http.post<string>(this._url,this.user,{responseType : 'text' as 'json'}).subscribe(
    data => {
      console.log(data);
      localStorage.setItem("Autorization","Bearer "+data);
    },error => {
      console.log(error);
    }
  );
  }

}

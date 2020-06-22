import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class JwtClientService {

  TOKEN_KEY = "authToken";
  USERNAME_KEY = "autheUsername";
  AUTHORITY_KEY = "autheAuthority";
  role : string[] ;
  constructor(private http: HttpClient,) { }

  public saveToken(token: string){
    window.localStorage.removeItem(this.TOKEN_KEY);
    window.localStorage.setItem(this.TOKEN_KEY, token);
  }
  public  getToken(): string{
    return localStorage.getItem(this.TOKEN_KEY);
  }
  public saveUsername(username: string){
    window.localStorage.removeItem(this.USERNAME_KEY);
    window.localStorage.setItem(this.USERNAME_KEY, username);
  }
  public  getUsername(): string{
    return localStorage.getItem(this.USERNAME_KEY);
  }
  public saveAuthority(authority: string[]){
    window.localStorage.removeItem(this.AUTHORITY_KEY);
    window.localStorage.setItem(this.AUTHORITY_KEY,JSON.stringify(authority) );
  }
  public  getAuthority(): string[]{
    this.role = [];
    if (localStorage.getItem(this.TOKEN_KEY)){
    JSON.parse(localStorage.getItem(this.AUTHORITY_KEY)).forEach(authority => {
      this.role.push(authority.authority);
    });
    }
    return this.role;
  }

}

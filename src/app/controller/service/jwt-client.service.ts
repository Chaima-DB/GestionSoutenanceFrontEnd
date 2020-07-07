import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class JwtClientService {

  TOKEN_KEY = "authToken";
  EMAIL_KEY = "autheEmail";
  AUTHORITY_KEY = "autheAuthority";
  roles : string[] ;
  constructor(private http: HttpClient,) { }

  public saveToken(token: string){
    window.localStorage.removeItem(this.TOKEN_KEY);
    window.localStorage.setItem(this.TOKEN_KEY, token);
  }
  public  getToken(): string{
    return localStorage.getItem(this.TOKEN_KEY);
  }
  public saveEmail(email: string){
    window.localStorage.removeItem(this.EMAIL_KEY);
    window.localStorage.setItem(this.EMAIL_KEY, email);
  }
  public  getEmail(): string{
    return localStorage.getItem(this.EMAIL_KEY);
  }
  public saveAuthority(authority: string[]){
    window.localStorage.removeItem(this.AUTHORITY_KEY);
    window.localStorage.setItem(this.AUTHORITY_KEY, JSON.stringify(authority) );
  }
  public  getAuthority(): string[]{
    this.roles = [];
    if (localStorage.getItem(this.TOKEN_KEY)){
    JSON.parse(localStorage.getItem(this.AUTHORITY_KEY)).forEach(authority => {
      this.roles.push(authority.authority);
    });
    }
    return this.roles;
  }

}

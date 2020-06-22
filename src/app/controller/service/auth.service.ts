import { Injectable } from '@angular/core';
import {JwtClientService} from "./jwt-client.service";
import {JwtResponse} from "../model/jwt-response";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  data : JwtResponse;
  httpHeader = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };
  TOKEN_KEY = "authToken";
  private currentSubjectUser: BehaviorSubject<any>;
  private currentUser: Observable<any>;

  constructor(private jwtClientService: JwtClientService,
  private http: HttpClient) {
    this.currentSubjectUser = new BehaviorSubject<any>(localStorage.getItem(this.TOKEN_KEY));
    this.currentUser = this.currentSubjectUser.asObservable();
  }

  public  saveData(data : JwtResponse){
    this.jwtClientService.saveToken(data.token);
    this.jwtClientService.saveUsername(data.email);
    this.jwtClientService.saveAuthority(data.authority);
    this.currentSubjectUser.next(data.token);
  }

}

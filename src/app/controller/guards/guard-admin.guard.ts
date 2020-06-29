import { Injectable } from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {JwtClientService} from "../service/jwt-client.service";

@Injectable({
  providedIn: 'root'
})
export class GuardAdminGuard implements CanActivate {
  role : string;
  constructor(private router: Router,
              private jwtClientService: JwtClientService) {
  }
  canActivate() : boolean{
    this.role = this.jwtClientService.getAuthority().toString();
  if (this.role == "ROLE_SUPER_ADMIN" || this.role == "ROLE_ADMIN") {
  return true;
}else if (this.role == "ROLE_USER" ){
  this.router.navigate(['/dashboardUser']);
  return false;
}else if (this.role == "ROLE_PROF" ){
    this.router.navigate(['/dashboardProf']);
    return false;
  }

}

}

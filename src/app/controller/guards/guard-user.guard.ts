import { Injectable } from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {JwtClientService} from "../service/jwt-client.service";

@Injectable({
  providedIn: 'root'
})
export class GuardUserGuard implements CanActivate {
  role : string;
  constructor(private router: Router,
              private jwtClientService: JwtClientService) {
  }
  canActivate() : boolean {
    this.role = this.jwtClientService.getAuthority().toString();
    if (this.role == "ROLE_USER" ) {
      return true;
    } else if (this.role == "ROLE_SUPER_ADMIN" || this.role == "ROLE_ADMIN" ) {
      this.router.navigate(['/dashboardAdmin']);
      return false;
    } else if (this.role == "ROLE_PROF") {
      this.router.navigate(['/dashboardProf']);
      return false;
    }
  }

}

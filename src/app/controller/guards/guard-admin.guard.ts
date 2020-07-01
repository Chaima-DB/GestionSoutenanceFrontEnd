import { Injectable } from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {JwtClientService} from '../service/jwt-client.service';

@Injectable({
  providedIn: 'root'
})
export class GuardAdminGuard implements CanActivate {
  roles: string [];
  constructor(private router: Router,
              private jwtClientService: JwtClientService) {
  }
  canActivate(): boolean{
    this.jwtClientService.getAuthority().forEach(role => {
      this.roles.push(role);
    } )
    if (this.roles === ['ROLE_SUPER_ADMIN'] || this.roles === ['ROLE_ADMIN']) {
  return true;
}else if (this.roles === ['ROLE_USER'] ){
  this.router.navigate(['/dashboardUser']);
  return false;
}else if (this.roles === ['ROLE_PROF'] ){
    this.router.navigate(['/dashboardProf']);
    return false;
  }

}

}

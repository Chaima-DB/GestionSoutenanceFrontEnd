import { Injectable } from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {LoginService} from '../service/login.service';

@Injectable({
  providedIn: 'root'
})
export class GuardLoginGuard implements CanActivate {
  constructor(private loginService: LoginService,
              private router: Router) {
  }

  canActivate(): boolean {
    if (this.loginService.isLoggedIn()) {
      this.router.navigate(['/']);
      return false;
    } else {
      return true;
    }
  }

}

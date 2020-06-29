import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {LoginService} from '../../../controller/service/login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dashboard-prof-sidelist',
  templateUrl: './dashboard-prof-sidelist.component.html',
  styleUrls: ['./dashboard-prof-sidelist.component.css']
})
export class DashboardProfSidelistComponent implements OnInit {
  public menuIcon = true;
  @Output() public sideNavToggle = new EventEmitter();
  @Input() public showIcone;
  constructor(private loginService: LoginService,
              private router: Router,) { }

  ngOnInit(): void {
  }
  onToggleSidenav() {
    this.sideNavToggle.emit();
  }


  logOut() {
    this.loginService.logOut();
    this.router.navigate(['/']);
  }
}

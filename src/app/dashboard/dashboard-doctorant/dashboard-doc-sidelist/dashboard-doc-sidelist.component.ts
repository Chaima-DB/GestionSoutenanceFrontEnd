import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {LoginService} from "../../../controller/service/login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-dashboard-doc-sidelist',
  templateUrl: './dashboard-doc-sidelist.component.html',
  styleUrls: ['./dashboard-doc-sidelist.component.css']
})
export class DashboardDocSidelistComponent implements OnInit {
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

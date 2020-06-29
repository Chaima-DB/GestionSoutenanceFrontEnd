import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {LoginService} from "../../../controller/service/login.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-dashboard-doc-nav',
  templateUrl: './dashboard-doc-nav.component.html',
  styleUrls: ['./dashboard-doc-nav.component.css']
})
export class DashboardDocNavComponent implements OnInit {
  titre :String;
  public menuIcon = true;
  @Output() public sideNavToggle = new EventEmitter();
  @Input() public showIcone;
  constructor(private loginService: LoginService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.titre = this.route.snapshot.params.key;
    console.log(this.titre);
  }
  onToggleSidenav() {
    this.sideNavToggle.emit();
  }
  logOut() {
    this.loginService.logOut();
    this.router.navigate(['/']);
  }
}

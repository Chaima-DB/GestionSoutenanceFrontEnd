import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DoctorantService} from '../../../controller/service/doctorant.service';
import {LoginService} from "../../../controller/service/login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-dashborad-nav',
  templateUrl: './dashborad-nav.component.html',
  styleUrls: ['./dashborad-nav.component.css']
})
export class DashboradNavComponent implements OnInit {
  public menuIcon = true;
  @Output() public sideNavToggle = new EventEmitter();
  @Input() public showIcone;
  constructor(private doctorantService: DoctorantService,
              private loginService: LoginService,
              private router: Router) { }

  ngOnInit(): void {
  }
  onToggleSidenav() {
    this.sideNavToggle.emit();
  }
  get newDoctorant(){
    return this.doctorantService.newDoctorant;
  }
  get compteur(): number {
    return DoctorantService._compteur;
  }
  logOut() {
    this.loginService.logOut();
    this.router.navigate(['/']);
  }
}

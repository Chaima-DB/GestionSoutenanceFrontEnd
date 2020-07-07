import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {LoginService} from "../../../controller/service/login.service";
import {Router} from "@angular/router";
import {Doctorant} from '../../../controller/model/doctorant.model';
import {DoctorantService} from '../../../controller/service/doctorant.service';
import {JwtClientService} from '../../../controller/service/jwt-client.service';

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
              private router: Router, private doctorantService: DoctorantService,
              private jwtClientService: JwtClientService, ) { }

  get doctorant(): Doctorant {
    return this.doctorantService.doctorant;
  }
  Useremail = this.jwtClientService.getEmail();
  ngOnInit(): void {
    this.doctorantService.findByUserEmail(this.Useremail);
  }
  onToggleSidenav() {
    this.sideNavToggle.emit();
  }


  logOut() {
    this.loginService.logOut();
    this.router.navigate(['/']);
  }
}

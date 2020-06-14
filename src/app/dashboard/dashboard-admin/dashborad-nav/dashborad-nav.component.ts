import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DoctorantService} from '../../../controller/service/doctorant.service';

@Component({
  selector: 'app-dashborad-nav',
  templateUrl: './dashborad-nav.component.html',
  styleUrls: ['./dashborad-nav.component.css']
})
export class DashboradNavComponent implements OnInit {
  public menuIcon = true;
  @Output() public sideNavToggle = new EventEmitter();
  @Input() public showIcone;
  constructor(private doctorantService: DoctorantService) { }

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

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-doctorant',
  templateUrl: './dashboard-doctorant.component.html',
  styleUrls: ['./dashboard-doctorant.component.css']
})
export class DashboardDoctorantComponent implements OnInit {
  public close = false;
  constructor() { }

  ngOnInit(): void {
  }
  closeSideNav() {
    this.close = true;
  }

}

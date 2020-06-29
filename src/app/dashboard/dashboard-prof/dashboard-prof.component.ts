import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-prof',
  templateUrl: './dashboard-prof.component.html',
  styleUrls: ['./dashboard-prof.component.css']
})
export class DashboardProfComponent implements OnInit {
  public close = false;
  constructor() { }

  ngOnInit(): void {
  }
  closeSideNav() {
    this.close = true;
  }
}

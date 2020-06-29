import { Component, OnInit } from '@angular/core';
import {JwtClientService} from "../../../controller/service/jwt-client.service";


@Component({
  selector: 'app-dashborad-sidelist',
  templateUrl: './dashborad-sidelist.component.html',
  styleUrls: ['./dashborad-sidelist.component.css']
})
export class DashboradSidelistComponent implements OnInit {

  constructor(private jwtClientService: JwtClientService) { }

  ngOnInit(): void {
  }
}

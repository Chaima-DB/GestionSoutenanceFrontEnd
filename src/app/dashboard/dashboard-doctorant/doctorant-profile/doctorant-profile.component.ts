import { Component, OnInit } from '@angular/core';
import {DoctorantService} from "../../../controller/service/doctorant.service";
import {Doctorant} from "../../../controller/model/doctorant.model";
import {User} from "../../../controller/model/user";
import {first} from "rxjs/operators";
import {JwtClientService} from "../../../controller/service/jwt-client.service";

@Component({
  selector: 'app-doctorant-profile',
  templateUrl: './doctorant-profile.component.html',
  styleUrls: ['./doctorant-profile.component.css']
})
export class DoctorantProfileComponent implements OnInit {

  constructor(private doctorantService: DoctorantService,
              private jwtClientService: JwtClientService) { }

  get doctorant(): Doctorant {
    return this.doctorantService.doctorant;
  }
  get user(): User {
    return this.doctorantService.user;
  }
  Useremail = this.jwtClientService.getUsername();
  ngOnInit(): void {
    this.doctorantService.findByUserEmail(this.Useremail);

  }
  findByUserEmail(user : User){
    //this.doctorantService.findByUserEmail(user);
  }
}

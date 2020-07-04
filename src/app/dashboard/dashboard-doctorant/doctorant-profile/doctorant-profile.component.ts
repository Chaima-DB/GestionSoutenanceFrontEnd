import { Component, OnInit } from '@angular/core';
import {DoctorantService} from "../../../controller/service/doctorant.service";
import {Doctorant} from "../../../controller/model/doctorant.model";
import {User} from "../../../controller/model/user";
import {first} from "rxjs/operators";
import {JwtClientService} from "../../../controller/service/jwt-client.service";
import {DirecteurDeTheseService} from '../../../controller/service/directeur-de-these.service';
import {DirecteurDeThese} from '../../../controller/model/directeur-de-these.model';

@Component({
  selector: 'app-doctorant-profile',
  templateUrl: './doctorant-profile.component.html',
  styleUrls: ['./doctorant-profile.component.css']
})
export class DoctorantProfileComponent implements OnInit {

  constructor(private doctorantService: DoctorantService,
              private jwtClientService: JwtClientService,
              private directeurDeTheseService: DirecteurDeTheseService) { }

  get doctorant(): Doctorant {
    return this.doctorantService.doctorant;
  }
  get directeur(): DirecteurDeThese {
    return this.directeurDeTheseService.directeurDeThese;
  }
  get user(): User {
    return this.doctorantService.user;
  }
  Useremail = this.jwtClientService.getEmail();
  ngOnInit(): void {
    console.log(this.doctorant);
    this.doctorantService.findByUserEmail(this.Useremail);
    console.log(this.Useremail);
    this.directeurDeTheseService.findByDoctorantUserEmail(this.Useremail);
    console.log(this.directeur);

  }
  // findByUserEmail(user : User){
  // this.doctorantService.findByUserEmail(user);
  // }
}

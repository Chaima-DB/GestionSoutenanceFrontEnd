import { Component, OnInit } from '@angular/core';
import {DoctorantService} from '../../../controller/service/doctorant.service';
import {JwtClientService} from '../../../controller/service/jwt-client.service';
import {Doctorant} from '../../../controller/model/doctorant.model';
import {User} from '../../../controller/model/user';
import {Professeur} from '../../../controller/model/professeur.model';
import {ProfesseurService} from '../../../controller/service/professeur.service';

@Component({
  selector: 'app-prof-profil',
  templateUrl: './prof-profil.component.html',
  styleUrls: ['./prof-profil.component.css']
})
export class ProfProfilComponent implements OnInit {

  constructor(private professeurService: ProfesseurService,
              private jwtClientService: JwtClientService) { }

  get professeur(): Professeur {
    return this.professeurService.professeur;
  }
  get prof(): Professeur {
    return this.professeurService.prof;
  }
  get user(): User {
    return this.professeurService.user;
  }
  Useremail = this.jwtClientService.getUsername();
  ngOnInit(): void {
    this.professeurService.findByUserEmail(this.Useremail);

  }
}

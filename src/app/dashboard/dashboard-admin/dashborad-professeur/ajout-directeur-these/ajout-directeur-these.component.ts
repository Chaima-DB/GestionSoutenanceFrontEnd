import { Component, OnInit } from '@angular/core';
import {DoctorantService} from '../../../../controller/service/doctorant.service';
import {ProfesseurService} from '../../../../controller/service/professeur.service';
import {DirecteurDeTheseService} from '../../../../controller/service/directeur-de-these.service';
import {Doctorant} from '../../../../controller/model/doctorant.model';
import {Professeur} from '../../../../controller/model/professeur.model';
import {DirecteurDeThese} from '../../../../controller/model/directeur-de-these.model';

@Component({
  selector: 'app-ajout-directeur-these',
  templateUrl: './ajout-directeur-these.component.html',
  styleUrls: ['./ajout-directeur-these.component.css']
})
export class AjoutDirecteurTheseComponent implements OnInit {

  constructor(private doctorantService: DoctorantService,
              private professeurService: ProfesseurService,
              private directeurDeTheseService: DirecteurDeTheseService, ) { }

  ngOnInit(): void {
    this.professeurService.findAll();
    this.doctorantService.findDoctorants();
  }
  get inscrit(): Array<Doctorant>  {
    return this.doctorantService.inscrit;
  }
  get professeurs(): Array<Professeur> {
    return this.professeurService.professeurs;
  }
  get directeurDeThese(): DirecteurDeThese {
    return this.directeurDeTheseService.directeurDeThese;
  }
  get directeurs(): Array<DirecteurDeThese> {
    return this.directeurDeTheseService.directeurDeTheses;
  }
  public save() {
    this.directeurDeTheseService.save();
  }
}

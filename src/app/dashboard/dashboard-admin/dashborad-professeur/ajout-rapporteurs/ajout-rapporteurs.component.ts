import { Component, OnInit } from '@angular/core';
import {ProfesseurService} from '../../../../controller/service/professeur.service';
import {DoctorantService} from '../../../../controller/service/doctorant.service';
import {Doctorant} from '../../../../controller/model/doctorant.model';
import {Professeur} from '../../../../controller/model/professeur.model';
import {Rapporteur} from '../../../../controller/model/rapporteur.model';
import {RapporteurService} from '../../../../controller/service/rapporteur.service';

@Component({
  selector: 'app-ajout-rapporteurs',
  templateUrl: './ajout-rapporteurs.component.html',
  styleUrls: ['./ajout-rapporteurs.component.css']
})
export class AjoutRapporteursComponent implements OnInit {

  constructor( private professeurService: ProfesseurService,
               private doctorantService: DoctorantService,
               private rapporteurService: RapporteurService, ) { }

  ngOnInit(): void {
    this.professeurService.findAll();
    this.doctorantService.findAll();
  }
  get doctorants(): Array<Doctorant> {
    return this.doctorantService.doctorants;
  }
  get professeurs(): Array<Professeur> {
    return this.professeurService.professeurs;
  }
  get rapporteur(): Rapporteur {
    return this.rapporteurService.rapporteur;
  }
  get liste(): Array<Rapporteur> {
    return this.rapporteurService.liste;
  }
  get rapporteurs(): Array<Rapporteur> {
    return this.rapporteurService.rapporteurs;
  }
  public save() {
    this.rapporteurService.save();
  }
  public addRapporteur() {
    this.rapporteurService.addRapporteur();
  }
}

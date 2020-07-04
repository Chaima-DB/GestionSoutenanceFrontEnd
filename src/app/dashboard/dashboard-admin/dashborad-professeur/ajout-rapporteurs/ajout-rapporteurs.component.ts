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
    this.doctorantService.findDoctorants();
  }
  get inscrit(): Array<Doctorant>  {
    return this.doctorantService.inscrit;
  }
  get professeurs(): Array<Professeur> {
    return this.professeurService.professeurs;
  }
  get rapporteur(): Rapporteur {
    return this.rapporteurService.rapporteur;
  }
  get doctorant(): Doctorant {
    return this.rapporteurService.doctorant;
  }
  get liste(): Array<Rapporteur> {
    return this.rapporteurService.liste;
  }
  get rapporteurs(): Array<Rapporteur> {
    return this.rapporteurService.rapporteurs;
  }

  public addRapporteur() {
    this.rapporteurService.addRapporteur();
  }
  public updateaddRapporteur(doctorant: Doctorant, rapporteurs: Array<Rapporteur>) {
    this.doctorantService.updateAddRapporteurs( doctorant, rapporteurs );
  }
}

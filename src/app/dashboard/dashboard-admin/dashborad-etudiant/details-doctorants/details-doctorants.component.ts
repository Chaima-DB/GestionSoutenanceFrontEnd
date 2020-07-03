import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {DoctorantService} from '../../../../controller/service/doctorant.service';
import {Doctorant} from '../../../../controller/model/doctorant.model';
import {ProfesseurService} from '../../../../controller/service/professeur.service';
import {Professeur} from '../../../../controller/model/professeur.model';
import {SoutenanceService} from '../../../../controller/service/soutenance.service';
import {Soutenance} from '../../../../controller/model/soutenance.model';
import {Jury} from '../../../../controller/model/jury.model';
import {SpecialiteService} from '../../../../controller/service/specialite.service';
import {StructureDeRechercheService} from '../../../../controller/service/structure-de-recherche.service';
import {Specialite} from '../../../../controller/model/specialite.model';
import {StructureDeRecherche} from '../../../../controller/model/structure-de-recherche.model';
import {DirecteurDeTheseService} from '../../../../controller/service/directeur-de-these.service';
import {DirecteurDeThese} from '../../../../controller/model/directeur-de-these.model';
import {RapporteurService} from '../../../../controller/service/rapporteur.service';
import {Rapporteur} from '../../../../controller/model/rapporteur.model';

@Component({
  selector: 'app-details-doctorants',
  templateUrl: './details-doctorants.component.html',
  styleUrls: ['./details-doctorants.component.css']
})
export class DetailsDoctorantsComponent implements OnInit {
  constructor(public dialogBox: MatDialogRef<DetailsDoctorantsComponent>,
              private doctorantService: DoctorantService,
              private professeurService: ProfesseurService,
              private soutenanceService: SoutenanceService,
              private specialiteService: SpecialiteService,
              private structureDeRechercheService: StructureDeRechercheService,
              private directeurDeTheseService: DirecteurDeTheseService,
              private rapporteurService: RapporteurService) {
  }

  ngOnInit(): void {
    this.professeurService.findAll();
    this.specialiteService.findAll();
    this.structureDeRechercheService.findAll();
  }

  onClose() {
    this.dialogBox.close();
  }
  get rapporteurs(): Array<Rapporteur>  {
    return this.rapporteurService.rapporteurs;
  }
  get directeurDeThese(): DirecteurDeThese {
    return this.directeurDeTheseService.directeurDeThese;
  }
  get rapporteur(): Rapporteur {
    return this.rapporteurService.rapporteur;
  }
  get doctorants(): Array<Doctorant> {
    return this.doctorantService.doctorants;
  }
  get professeurs(): Array<Professeur> {
    return this.professeurService.professeurs;
  }

  get doctorant(): Doctorant {
    return this.doctorantService.doctorant;
  }

  public update(doctorant: Doctorant, id: number) {
    this.doctorantService.update(doctorant, id);
  }

  get professeur(): Professeur {
    return this.professeurService.professeur;
  }

  get soutenance(): Soutenance {
    return this.soutenanceService.soutenance;
  }

  get juryDetails(): Array<Jury> {
    return this.soutenanceService.juryDetails;
  }

  get specialites(): Array<Specialite> {
    return this.specialiteService.specialites;
  }

  get structures(): Array<StructureDeRecherche> {
    return this.structureDeRechercheService.structures;
  }

  get jury(): Jury {
    return this.soutenanceService.jury;
  }

  get jurys(): Array<Jury> {
    return this.soutenanceService.jurys;
  }

  public save() {
    this.soutenanceService.save();
  }
  public deleteByProfesseurCinAndDoctorantCin(rapporteur1: Rapporteur) {
    this.rapporteurService.deleteByProfesseurCinAndDoctorantCin(rapporteur1);
  }
  public updateOrSaveSoutenance(soutenance: Soutenance, id: number) {
    this.soutenanceService.update(soutenance, id);
  }

  public updateJury(jury: Jury, id: number) {
    this.soutenanceService.updateJury(jury, id);
  }

  public updateJurys(jurys: Array<Jury>) {
    this.soutenanceService.updateJurys(jurys);
  }
  public updateDoctorat(doctorant: Doctorant, id: number) {
  }
  public updateDirecteur(directeur: DirecteurDeThese, id: number) {
    this.directeurDeTheseService.update(directeur, id);
  }
  public addRapporteur() {
    this.liste.forEach(r => r.doctorant = this.doctorant );
    this.rapporteurService.addRapporteur();
  }
  get liste(): Array<Rapporteur> {
    return this.rapporteurService.liste;
  }
  public saveRapporteur() {
    this.liste.forEach(r => r.doctorant = this.doctorant );
    this.rapporteurService.save();
  }

}

import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {DoctorantService} from '../../../../controller/service/doctorant.service';
import {ProfesseurService} from '../../../../controller/service/professeur.service';
import {SoutenanceService} from '../../../../controller/service/soutenance.service';
import {SpecialiteService} from '../../../../controller/service/specialite.service';
import {StructureDeRechercheService} from '../../../../controller/service/structure-de-recherche.service';
import {DirecteurDeTheseService} from '../../../../controller/service/directeur-de-these.service';
import {DirecteurDeThese} from '../../../../controller/model/directeur-de-these.model';
import {Doctorant} from '../../../../controller/model/doctorant.model';
import {Professeur} from '../../../../controller/model/professeur.model';
import {Soutenance} from '../../../../controller/model/soutenance.model';
import {Jury} from '../../../../controller/model/jury.model';
import {Specialite} from '../../../../controller/model/specialite.model';
import {StructureDeRecherche} from '../../../../controller/model/structure-de-recherche.model';
import {Rapporteur} from '../../../../controller/model/rapporteur.model';
import {RapporteurService} from '../../../../controller/service/rapporteur.service';

@Component({
  selector: 'app-prof-doc-details',
  templateUrl: './prof-doc-details.component.html',
  styleUrls: ['./prof-doc-details.component.css']
})
export class ProfDocDetailsComponent implements OnInit {
  constructor(public dialogBox: MatDialogRef<ProfDocDetailsComponent>,
              private doctorantService: DoctorantService,
              private professeurService: ProfesseurService,
              private soutenanceService: SoutenanceService,
              private specialiteService: SpecialiteService,
              private structureDeRechercheService: StructureDeRechercheService,
              private directeurDeTheseService: DirecteurDeTheseService,
              private rapporteurService: RapporteurService) {
  }

  ngOnInit(): void {
  }
  onClose() {
    this.dialogBox.close();
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
  get professeur(): Professeur {
    return this.professeurService.professeur;
  }
  get soutenance(): Soutenance {
    return this.soutenanceService.soutenance;
  }
  get juryDetails(): Array<Jury> {
    return this.soutenanceService.juryDetails;
  }
  get jury(): Jury {
    return this.soutenanceService.jury;
  }
  get jurys(): Array<Jury> {
    return this.soutenanceService.jurys;
  }
  get rapporteurs(): Array<Rapporteur>  {
    return this.rapporteurService.rapporteurs;
  }

}

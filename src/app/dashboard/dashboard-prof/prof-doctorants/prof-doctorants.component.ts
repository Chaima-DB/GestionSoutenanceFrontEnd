import { Component, OnInit } from '@angular/core';
import {DoctorantService} from '../../../controller/service/doctorant.service';
import {SoutenanceService} from '../../../controller/service/soutenance.service';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {Doctorant} from '../../../controller/model/doctorant.model';
import {Soutenance} from '../../../controller/model/soutenance.model';
import {DetailsDoctorantsComponent} from '../../dashboard-admin/dashborad-etudiant/details-doctorants/details-doctorants.component';
import {DirecteurDeTheseService} from '../../../controller/service/directeur-de-these.service';
import {DirecteurDeThese} from '../../../controller/model/directeur-de-these.model';
import {JwtClientService} from '../../../controller/service/jwt-client.service';
import {ProfDocDetailsComponent} from './prof-doc-details/prof-doc-details.component';
import {RapporteurService} from '../../../controller/service/rapporteur.service';
import {Rapporteur} from '../../../controller/model/rapporteur.model';

@Component({
  selector: 'app-prof-doctorants',
  templateUrl: './prof-doctorants.component.html',
  styleUrls: ['./prof-doctorants.component.css']
})
export class ProfDoctorantsComponent implements OnInit {
  public page = 1;
  public  Tablesearch= "";
  public anne = new Date();

  constructor( private doctorantService: DoctorantService, private soutenanceService: SoutenanceService,
               private dialog: MatDialog, private directeurDeTheseService: DirecteurDeTheseService,
               private rapporteurService: RapporteurService, private jwtClientService: JwtClientService) {

  }
  Useremail = this.jwtClientService.getEmail();
  ngOnInit(): void {
    this.directeurDeTheseService.findByProfesseurUserEmail(this.Useremail);
    console.log(this.Useremail);
  }
  get doctorant(): Doctorant  {
    return this.doctorantService.doctorant;
  }
  get soutenance(): Soutenance {
    return this.soutenanceService.soutenance;
  }
  public deleteByCin(doctorant: Doctorant) {
    this.doctorantService.deleteByCin(doctorant);
  }
  public findByCin(doctorant: Doctorant) {
    this.doctorantService.findByCin(doctorant);
    const  dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = false;
    dialogConfig.width = ' 1000px ';
    dialogConfig.height = '1000px';
    this.dialog.open(ProfDocDetailsComponent, dialogConfig);
  }
  public findByDoctorantCin(doctorant: Doctorant) {
    this.soutenanceService.findByDoctorantCin(doctorant);
    this.rapporteurService.findByDoctorantCin(doctorant);
  }
  get directeurDeTheses(): Array<DirecteurDeThese>  {
    return this.directeurDeTheseService.directeurDeTheses;
  }
  get rapporteurs(): Array<Rapporteur>  {
    return this.rapporteurService.rapporteurs;
  }
}

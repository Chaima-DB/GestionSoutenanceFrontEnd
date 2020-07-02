import { Component, OnInit } from '@angular/core';
import {DoctorantService} from '../../../../controller/service/doctorant.service';
import {SoutenanceService} from '../../../../controller/service/soutenance.service';
import {RapporteurService} from '../../../../controller/service/rapporteur.service';
import {DirecteurDeTheseService} from '../../../../controller/service/directeur-de-these.service';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {Doctorant} from '../../../../controller/model/doctorant.model';
import {Soutenance} from '../../../../controller/model/soutenance.model';
import {DetailsDoctorantsComponent} from '../details-doctorants/details-doctorants.component';

@Component({
  selector: 'app-list-nv-inscrit',
  templateUrl: './list-nv-inscrit.component.html',
  styleUrls: ['./list-nv-inscrit.component.css']
})
export class ListNvInscritComponent implements OnInit {
  public page = 1;
  public  Tablesearch= "";

  constructor( private doctorantService: DoctorantService,
               private dialog: MatDialog) {

  }
  ngOnInit(): void {
    this.doctorantService.findNvInscrit();
  }
  get nouveaux(): Array<Doctorant>  {
    return this.doctorantService.nouveaux;
  }
  get doctorant(): Doctorant  {
    return this.doctorantService.doctorant;
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
    this.dialog.open(DetailsDoctorantsComponent, dialogConfig);
  }
  public update(doctorant: Doctorant, id: number) {
    this.doctorantService.updateInscription(doctorant, id);
  }
  public sendEmailToDoctorant(doctorant: Doctorant){
    this.doctorantService.sendEmailToDoctorant(doctorant);
  }
}

import { Component, OnInit } from '@angular/core';
import {DoctorantService} from '../../../../controller/service/doctorant.service';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {Doctorant} from '../../../../controller/model/doctorant.model';

import {DetailDoctorantEnAttenteComponent} from '../detail-doctorant-en-attente/detail-doctorant-en-attente.component';

@Component({
  selector: 'app-list-nv-inscrit',
  templateUrl: './list-nv-inscrit.component.html',
  styleUrls: ['./list-nv-inscrit.component.css']
})
export class ListNvInscritComponent implements OnInit {
  public page = 1;
  public  Tablesearch = '';
  public id;
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
    dialogConfig.height = '500px';
    this.dialog.open(DetailDoctorantEnAttenteComponent, dialogConfig);
  }
  public update(doctorant: Doctorant, id: number) {

    this.doctorantService.beforConfirmation(doctorant, id);
  }
  public sendEmailToDoctorant(doctorant: Doctorant){
    this.doctorantService.sendEmailToDoctorant(doctorant);
  }
}

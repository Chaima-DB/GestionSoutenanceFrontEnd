import { Component, OnInit } from '@angular/core';
import {DoctorantService} from '../../../../controller/service/doctorant.service';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {Doctorant} from '../../../../controller/model/doctorant.model';
import {DetailDoctorantEnAttenteComponent} from '../detail-doctorant-en-attente/detail-doctorant-en-attente.component';

@Component({
  selector: 'app-list-en-attente',
  templateUrl: './list-en-attente.component.html',
  styleUrls: ['./list-en-attente.component.css']
})
export class ListEnAttenteComponent implements OnInit {
  public page = 1;
  public  Tablesearch = '';
  constructor( private doctorantService: DoctorantService,
               private dialog: MatDialog) {

  }
  ngOnInit(): void {
    this.doctorantService.findEnattente();
  }
  get nouveaux(): Array<Doctorant>  {
    return this.doctorantService.attente;
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
}

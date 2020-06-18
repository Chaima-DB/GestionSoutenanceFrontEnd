import { Component, OnInit} from '@angular/core';
import {Doctorant} from '../../../../controller/model/doctorant.model';
import {DoctorantService} from '../../../../controller/service/doctorant.service';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {DetailsDoctorantsComponent} from '../details-doctorants/details-doctorants.component';
import {SoutenanceService} from '../../../../controller/service/soutenance.service';
import {Soutenance} from '../../../../controller/model/soutenance.model';



@Component({
  selector: 'app-liste-doctorant',
  templateUrl: './liste-doctorant.component.html',
  styleUrls: ['./liste-doctorant.component.css']
})
export class ListeDoctorantComponent implements OnInit {
  public page = 1;
  public  Tablesearch= "";

  constructor( private doctorantService: DoctorantService, private soutenanceService: SoutenanceService,
               private dialog: MatDialog) {

  }
  ngOnInit(): void {
    this.doctorantService.findAll();
  }

 get doctorants(): Array<Doctorant>  {
 return this.doctorantService.doctorants;
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
    this.dialog.open(DetailsDoctorantsComponent, dialogConfig);
  }
  public findByDoctorantCin(doctorant: Doctorant) {
    this.soutenanceService.findByDoctorantCin(doctorant);
  }

}

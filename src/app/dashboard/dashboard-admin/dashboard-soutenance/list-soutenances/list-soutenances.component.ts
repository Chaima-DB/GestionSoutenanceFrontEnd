import { Component, OnInit } from '@angular/core';
import {SoutenanceService} from '../../../../controller/service/soutenance.service';
import {Doctorant} from '../../../../controller/model/doctorant.model';
import {DoctorantService} from '../../../../controller/service/doctorant.service';
import {Soutenance} from '../../../../controller/model/soutenance.model';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {DetailsSoutenancesComponent} from '../details-soutenances/details-soutenances.component';

@Component({
  selector: 'app-list-soutenances',
  templateUrl: './list-soutenances.component.html',
  styleUrls: ['./list-soutenances.component.css']
})
export class ListSoutenancesComponent implements OnInit {

  public page = 1;
  public Tablesearch = '';

  constructor(
    private soutenanceService: SoutenanceService,
    private doctorantService: DoctorantService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.soutenanceService.findAll();
    this.doctorantService.findAll();
  }
  get doctorant(): Doctorant {
    return this.doctorantService.doctorant;
  }
  get doctorants(): Array<Doctorant> {
    return this.doctorantService.doctorants;
  }
  get soutenance(): Soutenance {
    return this.soutenanceService.soutenance;
  }
  get soutenances(): Array<Soutenance> {
    return this.soutenanceService.soutenances;
  }
  public deleteByReference(soutenance: Soutenance) {
    this.soutenanceService.deleteByReference(soutenance);
  }
  public findByReference(soutenance: Soutenance) {
    this.soutenanceService.findByReference(soutenance);
    const  dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = false;
    dialogConfig.width = ' 700px ';
    dialogConfig.height = '480px';
    this.dialog.open(DetailsSoutenancesComponent, dialogConfig);
  }
}

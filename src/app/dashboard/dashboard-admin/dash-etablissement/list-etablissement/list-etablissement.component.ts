import {Component, OnInit, ViewChild} from '@angular/core';
import {EtablissementService} from '../../../../controller/service/etablissement.service';
import {Etablissement} from '../../../../controller/model/etablissement.model';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-list-etablissement',
  templateUrl: './list-etablissement.component.html',
  styleUrls: ['./list-etablissement.component.css']
})
export class ListEtablissementComponent implements OnInit {
  public page: number = 1;
  public Tablesearch = "";

  // ======== Constructor
  constructor(private etablissementService: EtablissementService) {
  }

  ngOnInit(): void {
    this.etablissementService.findAll();
  }

  // -------- getter -----------------
  get etablissement(): Etablissement {
    return this.etablissementService.etablissement;
  }
  get etablissements(): Array<Etablissement> {
    return this.etablissementService.etablissements;
  }
  get ok(): string {
    return this.etablissementService.ok;
  }
  get no(): string {
    return this.etablissementService.no;
  }
  // -------------------------------------
  //
  //--------- Delete
  public deleteByReference(etablissement: Etablissement) {
    this.etablissementService.deleteByReference(etablissement);
  }


}

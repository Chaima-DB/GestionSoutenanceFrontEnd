import { Component, OnInit } from '@angular/core';
import {EtablissementService} from '../../../../controller/service/etablissement.service';
import {Etablissement} from '../../../../controller/model/etablissement.model';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-list-etablissement',
  templateUrl: './list-etablissement.component.html',
  styleUrls: ['./list-etablissement.component.css']
})
export class ListEtablissementComponent implements OnInit {
  displayedColumns = ['titre'];
  dataSource: MatTableDataSource<Etablissement>;
  constructor(private etablissementService: EtablissementService) {
    this.dataSource = new MatTableDataSource(this.etablissements);
  }

  ngOnInit(): void {
    this.etablissementService.findAll();
  }
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

  public save() {
    this.etablissementService.save();
  }
  public deleteByReference(etablissement: Etablissement) {
    this.etablissementService.deleteByReference(etablissement);
  }
}

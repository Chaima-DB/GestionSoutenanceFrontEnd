import {Component, OnInit, ViewChild} from '@angular/core';
import {EtablissementService} from '../../../../controller/service/etablissement.service';
import {Etablissement} from '../../../../controller/model/etablissement.model';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort, Sort} from "@angular/material/sort";
import {MatPaginator, MatPaginatorDefaultOptions} from "@angular/material/paginator";

@Component({
  selector: 'app-list-etablissement',
  templateUrl: './list-etablissement.component.html',
  styleUrls: ['./list-etablissement.component.css']
})
export class ListEtablissementComponent implements OnInit {
  displayedColumns = ['reference', 'etablissement', 'action'];
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  // @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

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
  get dataSource(): MatTableDataSource<Etablissement> {
    return this.etablissementService.dataSource;
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

  // ------- sorting -----------------
  sortData(sort: Sort) {
    this.dataSource.sort = this.sort;
  };

  // ------- Filter -----------------
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

  }

}

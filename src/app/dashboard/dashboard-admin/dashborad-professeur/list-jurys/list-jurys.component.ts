import { Component, OnInit } from '@angular/core';
import {SoutenanceService} from '../../../../controller/service/soutenance.service';
import {Jury} from '../../../../controller/model/jury.model';

@Component({
  selector: 'app-list-jurys',
  templateUrl: './list-jurys.component.html',
  styleUrls: ['./list-jurys.component.css']
})
export class ListJurysComponent implements OnInit {
  public page = 1;
  public Tablesearch = '';
  constructor(private soutenanceService: SoutenanceService) { }

  ngOnInit(): void {
    this.soutenanceService.findAllJurys();
  }
get jurys(): Array<Jury> {
    return this.soutenanceService.jurys;
}
}

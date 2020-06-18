import { Component, OnInit } from '@angular/core';
import {SoutenanceService} from '../../../../controller/service/soutenance.service';
import {Jury} from '../../../../controller/model/jury.model';
import {Soutenance} from '../../../../controller/model/soutenance.model';
import {Professeur} from '../../../../controller/model/professeur.model';

@Component({
  selector: 'app-details-soutenances',
  templateUrl: './details-soutenances.component.html',
  styleUrls: ['./details-soutenances.component.css']
})
export class DetailsSoutenancesComponent implements OnInit {

  constructor(private soutenanceService: SoutenanceService) { }

  ngOnInit(): void {

  }
  get juryDetails(): Array<Jury>{
    return this.soutenanceService.juryDetails;
  }
  get soutenance(): Soutenance {
    return this.soutenanceService.soutenance;
  }
  get soutenanceDetail(): Soutenance  {
    return this.soutenanceService.soutenanceDetail;
  }
}

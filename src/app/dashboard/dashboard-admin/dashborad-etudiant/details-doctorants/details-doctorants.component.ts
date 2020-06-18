import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {DoctorantService} from '../../../../controller/service/doctorant.service';
import {Doctorant} from '../../../../controller/model/doctorant.model';
import {BsDatepickerConfig} from 'ngx-bootstrap/datepicker';
import {ProfesseurService} from '../../../../controller/service/professeur.service';
import {Professeur} from '../../../../controller/model/professeur.model';
import {ServerBuilderOutput} from '@angular-devkit/build-angular';
import {SoutenanceService} from '../../../../controller/service/soutenance.service';
import {Soutenance} from '../../../../controller/model/soutenance.model';
import {Jury} from '../../../../controller/model/jury.model';

@Component({
  selector: 'app-details-doctorants',
  templateUrl: './details-doctorants.component.html',
  styleUrls: ['./details-doctorants.component.css']
})
export class DetailsDoctorantsComponent implements OnInit {
  constructor(public dialogBox: MatDialogRef<DetailsDoctorantsComponent>,
              private doctorantService: DoctorantService,
              private professeurService: ProfesseurService,
              private soutenanceService: SoutenanceService) {
  }

  ngOnInit(): void {
    this.professeurService.findAll();
  }
  onClose(){
  this.dialogBox.close();
  }
  get doctorants(): Array<Doctorant>  {
    return this.doctorantService.doctorants;
  }
  get doctorant(): Doctorant  {
    return this.doctorantService.doctorant;
  }
  public update(doctorant: Doctorant, id: number) {
    this.doctorantService.update(doctorant, id);
  }
  get professeur(): Professeur{
    return this.professeurService.professeur;
  }
  get soutenance(): Soutenance {
    return this.soutenanceService.soutenance;
  }
  get juryDetails(): Array<Jury>{
    return this.soutenanceService.juryDetails;
  }
public save() {
    this.soutenanceService.save();
}

}

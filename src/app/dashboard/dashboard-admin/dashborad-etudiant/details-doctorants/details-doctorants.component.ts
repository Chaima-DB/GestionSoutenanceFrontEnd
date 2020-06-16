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
datePickerConfig: Partial<BsDatepickerConfig>;
  constructor(public dialogBox: MatDialogRef<DetailsDoctorantsComponent>,
              private doctorantService: DoctorantService,
              private professeurService: ProfesseurService,
              private soutenanceService: SoutenanceService) {
    this.datePickerConfig = Object.assign({}, { containerClass: 'theme-dark-blue', dateInputFormat: 'yyyy-MM-dd'});
  }

  ngOnInit(): void {
    this.professeurService.findAll();
    console.log(this.jury);

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
  get professeurs(): Array<Professeur> {
    return this.professeurService.professeurs;
  }
  get professeur(): Professeur{
    return this.professeurService.professeur;
  }
  get soutenances(): Array<Soutenance> {
    return this.soutenanceService.soutenances;
  }
  get soutenance(): Soutenance {
    return this.soutenanceService.soutenance;
  }
  get jury(): Jury{
    return this.soutenanceService.jury;
  }
  get jurys(): Array<Jury>{
    return this.soutenanceService.jurys;
  }
  get juryDetails(): Array<Jury>{
    return this.soutenanceService.juryDetails;
  }
  public addjury(){
  this.soutenanceService.addJury();
}
  public findBySoutenanceReference(soutenance: Soutenance){
    return this.soutenanceService.findBySoutenanceReference(soutenance);
  }
public save() {
    this.soutenanceService.save();
}

}

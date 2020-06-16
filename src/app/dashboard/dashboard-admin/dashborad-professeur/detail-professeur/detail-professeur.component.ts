import { Component, OnInit } from '@angular/core';
import {BsDatepickerConfig} from 'ngx-bootstrap/datepicker';
import {MatDialogRef} from '@angular/material/dialog';
import {DoctorantService} from '../../../../controller/service/doctorant.service';
import {Doctorant} from '../../../../controller/model/doctorant.model';
import {ProfesseurService} from '../../../../controller/service/professeur.service';
import {Professeur} from '../../../../controller/model/professeur.model';

@Component({
  selector: 'app-detail-professeur',
  templateUrl: './detail-professeur.component.html',
  styleUrls: ['./detail-professeur.component.css']
})
export class DetailProfesseurComponent implements OnInit {

  constructor(public dialogBox: MatDialogRef<DetailProfesseurComponent>,
              private professeurService: ProfesseurService, ) {}

  ngOnInit(): void {
   console.log(this.professeurService.professeur);
  }
  onClose(){
    this.dialogBox.close();
  }
  get professeur(): Professeur  {
    return this.professeurService.professeur;
  }
  get professeurDetail(): Professeur  {
    return this.professeurService.professeurDetail;
  }
  public update(professeur: Professeur, id: number) {
    this.professeurService.update(professeur, id);
  }

}

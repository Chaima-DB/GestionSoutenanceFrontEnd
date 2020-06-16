import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {DetailsDoctorantsComponent} from '../../dashborad-etudiant/details-doctorants/details-doctorants.component';
import {ProfesseurService} from '../../../../controller/service/professeur.service';
import {Professeur} from '../../../../controller/model/professeur.model';
import {DetailProfesseurComponent} from '../detail-professeur/detail-professeur.component';

@Component({
  selector: 'app-list-professeurs',
  templateUrl: './list-professeurs.component.html',
  styleUrls: ['./list-professeurs.component.css']
})
export class ListProfesseursComponent implements OnInit {
  public page = 1;
  public  Tablesearch = '';

  constructor( private professeurService: ProfesseurService,
               private dialog: MatDialog) {

  }
  ngOnInit(): void {
    this.professeurService.findAll();
  }
  get professeurs(): Array<Professeur>  {
    return this.professeurService.professeurs;
  }
  get professeur(): Professeur  {
    return this.professeurService.professeur;
  }
  public deleteByCin(professeur: Professeur) {
    this.professeurService.deleteByCin(professeur);
  }
  public findByCin(professeur: Professeur) {
    this.professeurService.findByCin(professeur);
    const  dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = false;
    dialogConfig.width = ' 600px ';
    dialogConfig.height = '600px';
    this.dialog.open(DetailProfesseurComponent, dialogConfig);
  }

}

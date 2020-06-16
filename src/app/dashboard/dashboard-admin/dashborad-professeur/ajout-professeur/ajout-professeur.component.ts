import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {EtablissementService} from '../../../../controller/service/etablissement.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Etablissement} from '../../../../controller/model/etablissement.model';
import {Specialite} from '../../../../controller/model/specialite.model';
import {Professeur} from '../../../../controller/model/professeur.model';
import {ProfesseurService} from '../../../../controller/service/professeur.service';
import {SpecialiteService} from '../../../../controller/service/specialite.service';
import {BsDatepickerConfig} from 'ngx-bootstrap/datepicker';


@Component({
  selector: 'app-ajout-professeur',
  templateUrl: './ajout-professeur.component.html',
  styleUrls: ['./ajout-professeur.component.css']
})
export class AjoutProfesseurComponent implements OnInit {
  datePickerConfig: Partial<BsDatepickerConfig>;
  public professeurForm: FormGroup;
  private _isReset = true;

  constructor(private professeurService: ProfesseurService, private _snackBar: MatSnackBar,
              private specialiteService: SpecialiteService) {
    this._isReset = false;
    this.datePickerConfig = Object.assign({}, { containerClass: 'theme-dark-blue', dateInputFormat: 'yyyy-MM-dd'});
  }

  ngOnInit(): void {
    this.specialiteService.findAll();
    this.professeurForm = new FormGroup({
      cin: new FormControl('', [Validators.required, Validators.maxLength(60)]),
      nom: new FormControl('', [Validators.required, Validators.maxLength(100)]),
      prenom: new FormControl('', [Validators.required, Validators.maxLength(100)]),
      email: new FormControl('', [Validators.required, Validators.maxLength(100)]),
      sexe: new FormControl('', [Validators.required, Validators.maxLength(100)]),
      dateDernierePublication: new FormControl('', [Validators.required, Validators.maxLength(100)]),
      specialite: new FormControl('', [Validators.required, Validators.maxLength(100)]),
    });
  }

  // ----- Service -------
  get professeur(): Professeur {
    return this.professeurService.professeur;
  }
  get professeurs(): Array<Professeur> {
    return this.professeurService.professeurs;
  }
  get specialites(): Array<Specialite> {
    return this.specialiteService.specialites;
  }

  get isReset(): boolean {
    return this._isReset;
  }
  resetForm() {
    this._isReset = true;
    this.professeurService.professeur = null;
  }
  public save() {
    this.professeurService.save();
    this.professeurForm.reset();
  }


}

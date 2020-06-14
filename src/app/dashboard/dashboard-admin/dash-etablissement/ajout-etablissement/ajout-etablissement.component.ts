import { Component, OnInit } from '@angular/core';
import {EtablissementService} from '../../../../controller/service/etablissement.service';
import {Etablissement} from '../../../../controller/model/etablissement.model';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-ajout-etablissement',
  templateUrl: './ajout-etablissement.component.html',
  styleUrls: ['./ajout-etablissement.component.css']
})
export class AjoutEtablissementComponent implements OnInit {
  public etablissementForm: FormGroup;
  private _isReset: boolean = true;

  constructor(private etablissementService: EtablissementService, private _snackBar: MatSnackBar) {this._isReset = false;
  }

  requiredFormControlreference = new FormControl('',[
    Validators.required,
  ]);
  requiredFormControlnom = new FormControl('',[
    Validators.required,
  ]);

  ngOnInit(): void {
    this.etablissementForm = new FormGroup({
      reference: new FormControl('', [Validators.required, Validators.maxLength(60)]),
      nom: new FormControl('', [Validators.required, Validators.maxLength(100)])
    });
  }

  // ----- Service -------
  get etablissement(): Etablissement {
    return this.etablissementService.etablissement;
  }
  get etablissements(): Array<Etablissement> {
    return this.etablissementService.etablissements;
  }

  get isReset(): boolean {
    return this._isReset;
  }

  get result(): number {
    return this.etablissementService.result;
  }
  get status(): boolean {
    return this.etablissementService.status;
  }
  public deleteByReference(etablissement: Etablissement) {
    this.etablissementService.deleteByReference(etablissement);
  }
  resetForm() {
    this._isReset = true;
    this.etablissementService.etablissement = null;
  }
  public save() {
    this.etablissementService.save();
      this.etablissementForm.reset();
    }

}


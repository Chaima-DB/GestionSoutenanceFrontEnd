import { Component, OnInit } from '@angular/core';
import {EtablissementService} from '../../../../controller/service/etablissement.service';
import {Etablissement} from '../../../../controller/model/etablissement.model';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-ajout-etablissement',
  templateUrl: './ajout-etablissement.component.html',
  styleUrls: ['./ajout-etablissement.component.css']
})
export class AjoutEtablissementComponent implements OnInit {
  public etablissementForm: FormGroup;
  constructor(private etablissementService: EtablissementService) { }
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
  get result(): number {
    return this.etablissementService.result;
  }
  public save() {
    this.etablissementService.save();
    this.etablissementForm.reset();
  }
  public deleteByReference(etablissement: Etablissement) {
    this.etablissementService.deleteByReference(etablissement);
  }
}

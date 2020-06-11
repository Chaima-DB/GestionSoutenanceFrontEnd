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
  constructor(private etablissementService: EtablissementService, private location: Location) { }

  ngOnInit(): void {
    this.etablissementForm = new FormGroup({
      reference: new FormControl('', [Validators.required, Validators.maxLength(60)]),
      nom: new FormControl('', [Validators.required, Validators.maxLength(100)])
    });
  }


  public hasError = (controlName: string, errorName: string) => {
    return this.etablissementForm.controls[controlName].hasError(errorName);
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

  public save() {
    this.etablissementService.save();
  }
  public deleteByReference(etablissement: Etablissement) {
    this.etablissementService.deleteByReference(etablissement);
  }
}

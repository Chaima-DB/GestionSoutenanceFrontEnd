import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import validate = WebAssembly.validate;
import {StructureDeRechercheService} from '../../controller/service/structure-de-recherche.service';
import {StructureDeRecherche} from '../../controller/model/structure-de-recherche.model';
import {Etablissement} from '../../controller/model/etablissement.model';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  constructor(private structureDeRechercheService: StructureDeRechercheService) { }
  requiredFormControlnom = new FormControl('',[
    Validators.required,
  ]);
  requiredFormControlprenom = new FormControl('',[
    Validators.required,
  ]);
  requiredFormControlCin = new FormControl('',[
    Validators.required,
  ]);
  requiredFormControlCne = new FormControl('',[
    Validators.required,
  ]);
  requiredFormControlsujet = new FormControl('',[
    Validators.required,
  ]);
  requiredFormControldirecteur = new FormControl('',[
    Validators.required,
  ]);
  requiredFormControltel = new FormControl('',[
    Validators.required,
  ]);
  emailFormControl = new FormControl('',[
    Validators.email,
    Validators.required,
  ]
  );

  selected = new FormControl('valid', [
    Validators.required,
    Validators.pattern('valid'),
  ]);

  selectFormControl = new FormControl('valid', [
    Validators.required,
    Validators.pattern('valid'),
  ]);

  nativeSelectFormControl = new FormControl('valid', [
    Validators.required,
    Validators.pattern('valid'),
  ]);
  ngOnInit(): void {
    this.structureDeRechercheService.findAll();
  }

  get structures(): Array<StructureDeRecherche> {
    return this.structureDeRechercheService.structures;
  }
  get structure(): StructureDeRecherche {
    return this.structureDeRechercheService.structure;
  }
}

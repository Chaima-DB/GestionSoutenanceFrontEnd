import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import validate = WebAssembly.validate;
import {StructureDeRechercheService} from '../../controller/service/structure-de-recherche.service';
import {StructureDeRecherche} from '../../controller/model/structure-de-recherche.model';
import {Etablissement} from '../../controller/model/etablissement.model';
import {DoctorantService} from '../../controller/service/doctorant.service';
import {Doctorant} from '../../controller/model/doctorant.model';
import {SpecialiteService} from '../../controller/service/specialite.service';
import {SujetService} from '../../controller/service/sujet.service';
import {Sujet} from '../../controller/model/sujet.model';
import {Specialite} from '../../controller/model/specialite.model';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  isEditable = true;
  constructor(private structureDeRechercheService: StructureDeRechercheService,
              private doctorantService: DoctorantService,
              private specialiteService: SpecialiteService,
              private sujetService: SujetService,
              private _formBuilder: FormBuilder){ }
  requiredFormControlnom = new FormControl('', [
    Validators.required,
  ]);
  requiredFormControlprenom = new FormControl('', [
    Validators.required,
  ]);
  requiredFormControlCin = new FormControl('', [
    Validators.required,
  ]);
  requiredFormControlCne = new FormControl('', [
    Validators.required,
  ]);
  requiredFormControlsujet = new FormControl('', [
    Validators.required,
  ]);
  requiredFormControldirecteur = new FormControl('', [
    Validators.required,
  ]);
  requiredFormControltel = new FormControl('', [
    Validators.required,
  ]);
  emailFormControl = new FormControl('', [
    Validators.email,
    Validators.required,
  ]
  );

  selectedStructure = new FormControl('valid', [
    Validators.required,
  ]);
  selectedSpecialite = new FormControl('valid', [
    Validators.required,
  ]);
  // --------------------------------ngOnInit -----------------------------
  ngOnInit(): void {
    this.structureDeRechercheService.findAll();
    this.specialiteService.findAll();
    // for the stepper
    this.firstFormGroup = this._formBuilder.group({
      cneCtrl: ['', Validators.required],
      cinCtrl: ['', Validators.required],
      nomCtrl: ['', Validators.required],
      prenomCtrl: ['', Validators.required],
      telCtrl: ['', Validators.required],
      sexeCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      sujetCtrl: ['', Validators.required],
      specialiteCtrl: ['', Validators.required],
      structureCtrl: ['', Validators.required],
    });
    this.thirdFormGroup = this._formBuilder.group({
      emailCtrl: ['', Validators.required],
      passwordCtrl: ['', Validators.required],
    });
  }

  get structures(): Array<StructureDeRecherche> {
    return this.structureDeRechercheService.structures;
  }
  get structure(): StructureDeRecherche {
    return this.structureDeRechercheService.structure;
  }

  get doctorant(): Doctorant {
    return this.doctorantService.doctorant;
  }
  get sujet(): Sujet {
    return  this.sujetService.sujet;
  }
  get sujets(): Array<Sujet>{
    return  this.sujetService.sujets;
  }

  get specialite(): Specialite {
    return  this.specialiteService.specialite;
  }
  get specialites(): Array<Specialite>{
    return  this.specialiteService.specialites;
  }
  public saveDoctorant() {
    this.doctorantService.save();
  }
}

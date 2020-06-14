import { Component, OnInit } from '@angular/core';
import {StructureDeRechercheService} from '../../../../../controller/service/structure-de-recherche.service';
import {EtablissementService} from '../../../../../controller/service/etablissement.service';
import {StructureDeRecherche} from '../../../../../controller/model/structure-de-recherche.model';
import {Etablissement} from '../../../../../controller/model/etablissement.model';
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-ajout-structure',
  templateUrl: './ajout-structure.component.html',
  styleUrls: ['./ajout-structure.component.css']
})
export class AjoutStructureComponent implements OnInit {
private _i: number;
  public bool: boolean = true;
  constructor(
    private structureDeRechercheService: StructureDeRechercheService,
    private etablissementService: EtablissementService,
  ) { this._i = 1; }

  ngOnInit(): void {
    this.etablissementService.findAll();
  }

  get i(): number {
    return this._i;
  }


  set i(value: number) {
    this._i = value;
  }

  get structure(): StructureDeRecherche {
    return this.structureDeRechercheService.structure;
  }
  get etablissement(): Etablissement {
    return this.etablissementService.etablissement;
  }
  get etablissements(): Array<Etablissement> {
    return this.etablissementService.etablissements;
  }
  get status(): boolean {
    return this.structureDeRechercheService.status;
  }
  get ok(): string {
    return this.structureDeRechercheService.ok;
  }
  get no(): string {
    return this.structureDeRechercheService.no;
  }

  public save() {
    this.structureDeRechercheService.save();

  }
}

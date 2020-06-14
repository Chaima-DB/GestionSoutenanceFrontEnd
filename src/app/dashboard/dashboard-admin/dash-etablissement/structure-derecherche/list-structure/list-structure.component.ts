import { Component, OnInit } from '@angular/core';
import {StructureDeRecherche} from '../../../../../controller/model/structure-de-recherche.model';
import {Etablissement} from '../../../../../controller/model/etablissement.model';
import {EtablissementService} from '../../../../../controller/service/etablissement.service';
import {StructureDeRechercheService} from '../../../../../controller/service/structure-de-recherche.service';

@Component({
  selector: 'app-list-structure',
  templateUrl: './list-structure.component.html',
  styleUrls: ['./list-structure.component.css']
})
export class ListStructureComponent implements OnInit {
  public page = 1;
  public Tablesearch = "";

  constructor(
    private structureDeRechercheService: StructureDeRechercheService,
    private etablissementService: EtablissementService
  ) { }

  ngOnInit(): void {
    this.structureDeRechercheService.findAll();
    this.etablissementService.findAll();
  }
  get structure(): StructureDeRecherche {
    return this.structureDeRechercheService.structure;
  }
  get structures(): Array<StructureDeRecherche> {
    return this.structureDeRechercheService.structures;
  }
  get etablissement(): Etablissement {
    return this.etablissementService.etablissement;
  }
  get etablissements(): Array<Etablissement> {
    return this.etablissementService.etablissements;
  }

  get ok(): string {
    return this.structureDeRechercheService.ok;
  }
  get no(): string {
    return this.structureDeRechercheService.no;
  }

  public saveStructure() {
    this.structureDeRechercheService.save();
  }
  public deleteByReference(structure: StructureDeRecherche) {
    this.structureDeRechercheService.deleteByReference(structure);
  }
}

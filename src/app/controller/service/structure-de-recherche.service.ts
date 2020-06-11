import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {StructureDeRecherche} from '../model/structure-de-recherche.model';

@Injectable({
  providedIn: 'root'
})
export class StructureDeRechercheService {
  private _structure: StructureDeRecherche;
  private _structures: Array<StructureDeRecherche>;
  private _url = 'http://localhost:8090/api/v1/gestionDesSoutenances-api/structureDeRecherche/';
  private _ok: string;
  private _no: string;
  constructor(private http: HttpClient) { }


  get structures(): Array<StructureDeRecherche> {
    return this._structures;
  }

  set structures(value: Array<StructureDeRecherche>) {
    this._structures = value;
  }


  get structure(): StructureDeRecherche {
    return this._structure;
  }

  set structure(value: StructureDeRecherche) {
    this._structure = value;
  }

  public findAll() {
    this.http.get<Array<StructureDeRecherche>>(this._url).subscribe(
      data => {
        this.structures = data;
        console.log('done');
      }, error => {
        console.log('erreur will find all structures');
      }
    );
  }
}

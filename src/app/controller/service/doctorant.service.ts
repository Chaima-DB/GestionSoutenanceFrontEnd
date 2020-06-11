import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Doctorant} from '../model/doctorant.model';
import {StructureDeRecherche} from '../model/structure-de-recherche.model';

@Injectable({
  providedIn: 'root'
})
export class DoctorantService {
private _doctorants: Array<Doctorant>;
private _url= 'http://localhost:8090/api/v1/gestionDesSoutenances-api/doctorant/';
  constructor(private http: HttpClient) {}


  get doctorants(): Array<Doctorant> {
    if (this._doctorants == null) {
      this._doctorants = new Array<Doctorant>();
    }
    return this._doctorants;
  }

  set doctorants(value: Array<Doctorant>) {
    this._doctorants = value;
  }

  public findAll() {
    this.http.get<Array<Doctorant>>(this._url).subscribe(
      data => {
        this.doctorants = data;
      }, error => {
        console.log('erreur  find all structures');
      }
    );
  }

}

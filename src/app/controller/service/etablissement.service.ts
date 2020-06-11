import { Injectable } from '@angular/core';
import {Etablissement} from '../model/etablissement.model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EtablissementService {
  private _etablissement: Etablissement;
  private _etablissements: Array<Etablissement>;
  private _url = 'http://localhost:8090/api/v1/gestionDesSoutenances-api/etablissement/';
  private _ok: string;
  private _no: string;

  constructor(private http: HttpClient) {
  }
  get ok(): string {
    return this._ok;
  }

  get no(): string {
    return this._no;
  }

  get etablissement(): Etablissement {
    if (this._etablissement == null) {
      this._etablissement = new Etablissement();
    }
    return this._etablissement;
  }
  set etablissement(value: Etablissement) {
    this._etablissement = value;
  }

  get etablissements(): Array<Etablissement> {
    if (this._etablissements == null) {
      this._etablissements = new Array<Etablissement>();
    }
    return this._etablissements;
  }

  set etablissements(value: Array<Etablissement>) {
    this._etablissements = value;
  }

  public save() {
    this.http.post<number>(this._url, this.etablissement).subscribe(
      data => {
        if (data > 0) {
          this.etablissements.push(this.cloneEtablissement(this.etablissement));
          this.etablissement = null;
          this._ok = 'dash-etablissement enregistrer avec succes ';
        } else if (data === -1) {
          this._no = 'cette reference existe déjà';
        } else if (data === -2) {
          this._no = 'le champ reference ne peut pas être vide';
        }
      }, error => {
        console.log('erreur when saving');
      }
    );


  }

  private cloneEtablissement(etablissement: Etablissement) {
    const myClone = new Etablissement();
    myClone.reference = etablissement.reference;
    myClone.nom = etablissement.nom;
    return myClone;
  }

  public findAll() {
    this.http.get<Array<Etablissement>>(this._url).subscribe(
      data => {
        this.etablissements = data;
        console.log('done');
      }, error => {
        console.log('erreur will find all');
      }
    );
  }


  public deleteByRefFromView(etablissement: Etablissement) {
    const index = this.etablissements.findIndex(e => e.reference === etablissement.reference);
    if (index !== -1) {
      this.etablissements.splice(index, 1);
    }
  }
  public deleteByReference(etablissement: Etablissement) {
    console.log(this.etablissement);
    this.http.delete<number>(this._url + 'reference/' + etablissement.reference).subscribe(
      data => {
        this.deleteByRefFromView(etablissement);
      }, error => {
        console.log('erreur');
      }
    );
  }
}

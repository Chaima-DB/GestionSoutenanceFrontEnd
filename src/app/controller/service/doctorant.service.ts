import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Doctorant} from '../model/doctorant.model';


@Injectable({
  providedIn: 'root'
})
export class DoctorantService {
  private _doctorant: Doctorant;
  private _doctorants: Array<Doctorant>;
  private _baseUrl= 'http://localhost:8090/';
  private _url= this._baseUrl + 'api/v1/gestionDesSoutenances-api/doctorant/';
  private _ok: string;
  private _no: string;
  constructor(private http: HttpClient) {}


  get doctorant(): Doctorant {
    if (this._doctorant == null) {
      this._doctorant = new Doctorant();
    }
    return this._doctorant;
  }

  set doctorant(value: Doctorant) {
    this._doctorant = value;
  }

  get doctorants(): Array<Doctorant> {
    if (this._doctorants == null) {
      this._doctorants = new Array<Doctorant>();
    }
    return this._doctorants;
  }

  set doctorants(value: Array<Doctorant>) {
    this._doctorants = value;
  }

  get no(): string {
    return this._no;
  }

  set no(value: string) {
    this._no = value;
  }


  get ok(): string {
    return this._ok;
  }

  set ok(value: string) {
    this._ok = value;
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

  public save() {
    this.http.post<number>(this._url, this.doctorant).subscribe(
      data => {
        if (data > 0) {
          this.doctorants.push(this.cloneDoctorant(this.doctorant));
          this.doctorant = null;
          this._ok = ' enregistrer avec succes ';
        } else if (data === -1) {
          this._no = 'cette reference existe déjà';
        }
      }, error => {
        console.log('erreur when saving');
      }
    );


  }

  private cloneDoctorant(doctorant: Doctorant) {
    const myClone = new Doctorant();
    myClone.cin = doctorant.cin;
    myClone.cne = doctorant.cne;
    myClone.nom = doctorant.nom;
    myClone.prenom = doctorant.prenom;
    myClone.email = doctorant.email;
    myClone.password = doctorant.password;
    myClone.sexe = doctorant.sexe;
    myClone.tel = doctorant.tel;
    myClone.sujet.libelle = doctorant.sujet.libelle;
    myClone.specialite.libelle = doctorant.specialite.libelle;
    myClone.structureDeRecherche.title = doctorant.structureDeRecherche.title;
    return myClone;
  }




  public deleteByCinFromView(doctorant: Doctorant) {
    const index = this.doctorants.findIndex(d => d.cin === doctorant.cin);
    if (index !== -1) {
      this.doctorants.splice(index, 1);
    }
  }
  public deleteByCin(doctorant: Doctorant) {
    console.log(this.doctorant);
    this.http.delete<number>(this._url + 'cin/' + doctorant.cin).subscribe(
      data => {
        this.deleteByCinFromView(doctorant);
      }, error => {
        console.log('erreur');
      }
    );
  }

}

import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Sujet} from '../model/sujet.model';

@Injectable({
  providedIn: 'root'
})
export class SujetService {
  private _sujet: Sujet;
  private _sujets: Array<Sujet>;
  private _baseUrl= 'http://localhost:8090/';
  private _url= this._baseUrl + 'api/v1/gestionDesSoutenances-api/sujet/';
  private _ok: string;
  private _no: string;
  constructor(private http: HttpClient) { }


  get sujets(): Array<Sujet> {
    if (this._sujets == null) {
      this._sujets = new Array<Sujet>();
    }
    return this._sujets;
  }

  set sujets(value: Array<Sujet>) {
    this._sujets = value;
  }


  get sujet(): Sujet {
    if (this._sujet == null) {
      this._sujet = new Sujet();
    }
    return this._sujet;
  }

  set structure(value: Sujet) {
    this._sujet = value;
  }


  get ok(): string {
    return this._ok;
  }

  set ok(value: string) {
    this._ok = value;
  }

  get no(): string {
    return this._no;
  }

  set no(value: string) {
    this._no = value;
  }

  public findAll() {
    this.http.get<Array<Sujet>>(this._url).subscribe(
      data => {
        this.sujets = data;
        console.log('done');
      }, error => {
        console.log('erreur  find all Sujet');
      }
    );
  }


  public save() {
    this.http.post<number>(this._url, this._sujet).subscribe(
      data => {
        if (data > 0) {
          this._sujets.push(this.cloneSujet(this._sujet));
          this.structure = null;
          this._ok = 'Structure De Recherche enregistrer avec success ';
          console.log(data);
        } else if (data === -1) {
          this._no = 'cette reference est déjà utiliser ';
        }
      }, error => {
        console.log('erreur when saving');
      }
    );


  }

  private cloneSujet(sujet: Sujet) {
    const myClone = new Sujet();
    myClone.reference = sujet.reference;
    myClone.libelle = sujet.libelle;
    return myClone;
  }



  public deleteByRefFromView(sujet: Sujet) {
    const index = this.sujets.findIndex(s => s.reference === sujet.reference);
    if (index !== -1) {
      this.sujets.splice(index, 1);
    }
  }
  public deleteByReference(sujet: Sujet) {
    console.log(this.sujet);
    this.http.delete<number>(this._url + 'reference/' + sujet.reference).subscribe(
      data => {
        this.deleteByRefFromView(sujet);
      }, error => {
        console.log('erreur');
      }
    );
  }
}

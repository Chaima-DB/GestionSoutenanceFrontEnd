import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Specialite} from '../model/specialite.model';

@Injectable({
  providedIn: 'root'
})
export class SpecialiteService {
  private _specialite: Specialite;
  private _specialites: Array<Specialite>;
  private _baseUrl= 'http://localhost:8090/';
  private _url= this._baseUrl + 'api/v1/gestionDesSoutenances-api/specialite/';
  private _ok: string;
  private _no: string;
  constructor(private http: HttpClient) { }


  get specialites(): Array<Specialite> {
    if (this._specialites == null) {
      this._specialites = new Array<Specialite>();
    }
    return this._specialites;
  }

  set specialites(value: Array<Specialite>) {
    this._specialites = value;
  }


  get specialite(): Specialite {
    if (this._specialite == null) {
      this._specialite = new Specialite();
    }
    return this._specialite;
  }

  set structure(value: Specialite) {
    this._specialite = value;
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
    this.http.get<Array<Specialite>>(this._url).subscribe(
      data => {
        this.specialites = data;
        console.log('done');
      }, error => {
        console.log('erreur will find all structures');
      }
    );
  }


  public save() {
    this.http.post<number>(this._url, this._specialite).subscribe(
      data => {
        if (data > 0) {
          this._specialites.push(this.cloneSpecialite(this._specialite));
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

  private cloneSpecialite(specialite: Specialite) {
    const myClone = new Specialite();
    myClone.reference = specialite.reference;
    myClone.libelle = specialite.libelle;
    return myClone;
  }



  public deleteByRefFromView(specialite: Specialite) {
    const index = this.specialites.findIndex(s => s.reference === specialite.reference);
    if (index !== -1) {
      this.specialites.splice(index, 1);
    }
  }
  public deleteByReference(specialite: Specialite) {
    console.log(this.specialite);
    this.http.delete<number>(this._url + 'reference/' + specialite.reference).subscribe(
      data => {
        this.deleteByRefFromView(specialite);
      }, error => {
        console.log('erreur');
      }
    );
  }
}

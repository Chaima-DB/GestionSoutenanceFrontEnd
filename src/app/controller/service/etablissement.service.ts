import {Injectable} from '@angular/core';
import {Etablissement} from '../model/etablissement.model';
import {HttpClient} from '@angular/common/http';
import {MatSnackBar} from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class EtablissementService {
  private _etablissement: Etablissement;
  private _etablissements: Array<Etablissement>;
  private _baseUrl= 'http://localhost:8090/';
  private _url= this._baseUrl + 'api/v1/gestionDesSoutenances-api/etablissement/';
  private _ok: string;
  private _no: string;
  private _result: number;
  private _status: boolean;
  constructor(private http: HttpClient, private _snackBar: MatSnackBar) {
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

  get result(): number {
    return this._result;
  }

  set result(value: number) {
    this._result = value;
  }
  get status(): boolean {
    return this._status;
  }

  set status(value: boolean) {
    this._status = value;
  }

  public save() {
    this.http.post<number>(this._url, this.etablissement).subscribe(
      data => {
        if (data > 0) {
          this._result = data;
          this.etablissements.push(this.cloneEtablissement(this.etablissement));
          this.etablissement = null;
          this._snackBar.open('Enregistrer avec success ','',{
            duration: 5000,
          });
        } else if (data === -1) {
          this._snackBar.open('cette reference est déjà utiliser ','',{
            duration: 5000,
          });
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
        this._snackBar.open('Etablissement supprimer avec succes ','',{
          duration: 5000,
        });
      }, error => {
        console.log('erreur');
      }
    );
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
}

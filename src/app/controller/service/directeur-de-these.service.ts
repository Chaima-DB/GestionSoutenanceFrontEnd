import { Injectable } from '@angular/core';
import {DirecteurDeThese} from '../model/directeur-de-these.model';
import {Doctorant} from '../model/doctorant.model';
import {HttpClient} from '@angular/common/http';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Jury} from '../model/jury.model';
import {Professeur} from '../model/professeur.model';

@Injectable({
  providedIn: 'root'
})
export class DirecteurDeTheseService {
private _directeurDeThese: DirecteurDeThese;
private _directeurDeTheses: Array<DirecteurDeThese>;
private _baseUrl= 'http://localhost:8090/';
private _url= this._baseUrl + 'api/v1/gestionDesSoutenances-api/directeurThese/';
  constructor(private http: HttpClient, private _snackBar: MatSnackBar) { }

  get directeurDeTheses(): Array<DirecteurDeThese> {
    if ( this._directeurDeTheses == null) {
      this._directeurDeTheses = new Array<DirecteurDeThese>();
    }
    return this._directeurDeTheses;
  }
  set directeurDeTheses(value: Array<DirecteurDeThese>) {
    this._directeurDeTheses = value;
  }
  get directeurDeThese(): DirecteurDeThese {
    if (this._directeurDeThese == null) {
      this._directeurDeThese = new DirecteurDeThese();
    }
    return this._directeurDeThese;
  }
  set directeurDeThese(value: DirecteurDeThese) {
    this._directeurDeThese = value;
  }
  public findAll() {
    this.http.get<Array<DirecteurDeThese>>(this._url).subscribe(
      data => {
        this.directeurDeTheses = data;
      }, error => {
        console.log('erreur  find all directeurs Theses');
      }
    );
  }
  public save() {
    this.http.post<number>(this._url, this.directeurDeThese).subscribe(
      data => {
        if (data > 0) {
          this.directeurDeTheses.push(this.cloneDirecteur(this.directeurDeThese));
          this.directeurDeThese = null;
          this._snackBar.open('Enregistrer avec success ', '', {
            duration: 5000,
          });
        } else if (data === -1) {
          this._snackBar.open('Cet Doctorant à déjà un directeur De Thèse ', '', {
            duration: 5000,
          });
        }else if (data === -2) {
          this._snackBar.open('Le Doctorant et le directeur De Thèse ont des spécialités différentes  ', '', {
            duration: 5000,
          });
        }
      }, error => {
        console.log('erreur when saving');
      }
    );
  }

  private cloneDirecteur(directeurDeThese: DirecteurDeThese) {
    const myClone = new DirecteurDeThese();
    myClone.date = directeurDeThese.date;
    myClone.professeur = directeurDeThese.professeur;
    myClone.doctorant = directeurDeThese.doctorant;
    return myClone;
  }


  public deleteByDoctorantCinFromView(directeurDeThese: DirecteurDeThese) {
    const index = this.directeurDeTheses.findIndex(d => d.doctorant.cin === directeurDeThese.doctorant.cin);
    if (index !== -1) {
      this.directeurDeTheses.splice(index, 1);
    }
  }
  public deleteByDoctorantCin(directeurDeThese: DirecteurDeThese) {
    this.http.delete<number>(this._url + '/docCin/' + directeurDeThese.doctorant.cin).subscribe(
      data => {
        this.deleteByDoctorantCinFromView(directeurDeThese);
        this._snackBar.open('Supprimer avec success ', '', {
          duration: 5000,
        });
      }, error => {
        console.log('erreur');
      }
    );
  }
  public findByDoctorantCin(doctorant: Doctorant){
    this.http.get<DirecteurDeThese>(this._url + 'docCin/' + doctorant.cin).subscribe(
      data => {
        this._directeurDeThese = data;

      }, error => {
        console.log('error');
      }
    );
  }
  public findByProfesseurCin(professeur: Professeur){
    this.http.get<Array<DirecteurDeThese>>(this._url + 'profCin/' + professeur.cin).subscribe(
      data => {
        this._directeurDeTheses = data;

      }, error => {
        console.log('error');
      }
    );
  }
  public update(directeurDeThese: DirecteurDeThese, id: number) {
    this.http.put<number>(this._url + 'id/' + id, this.directeurDeThese).subscribe(data => {
      this._snackBar.open('Modifier avec success ', '', {
        duration: 5000,
      });
    }, error => {
      console.log('error');
    });
  }
}

import { Injectable } from '@angular/core';
import {Rapporteur} from '../model/rapporteur.model';
import {HttpClient} from '@angular/common/http';
import {MatSnackBar} from '@angular/material/snack-bar';
import {AuthService} from './auth.service';
import {Professeur} from '../model/professeur.model';
import {DirecteurDeThese} from '../model/directeur-de-these.model';
import {Doctorant} from '../model/doctorant.model';

@Injectable({
  providedIn: 'root'
})
export class RapporteurService {

  private _rapporteurs: Array<Rapporteur>;
  private _rapporteur: Rapporteur;
  private _baseUrl= 'http://localhost:8090/';
  private _url= this._baseUrl + 'api/v1/gestionDesSoutenances-api/rapporteur/';
  constructor(private http: HttpClient, private _snackBar: MatSnackBar,
              private authService: AuthService) { }


  get rapporteurs(): Array<Rapporteur> {
    if (this._rapporteurs == null){
      this._rapporteurs = new Array<Rapporteur>();
    }
    return this._rapporteurs;
  }

  set rapporteurs(value: Array<Rapporteur>) {
    this._rapporteurs = value;
  }

  get rapporteur(): Rapporteur {
    if(this._rapporteur == null){
      this._rapporteur = new Rapporteur();
    }
    return this._rapporteur;
  }

  set rapporteur(value: Rapporteur) {
    this._rapporteur = value;
  }
  public findAll() {
    this.http.get<Array<Rapporteur>>(this._url).subscribe(
      data => {
        this.rapporteurs = data;
        console.log('done  find rapporteurs');
      }, error => {
        console.log('erreur  find all rapporteurs');
      }
    );
  }
  public findByDoctorantCin(doctorant: Doctorant){
    this.http.get<Array<Rapporteur>>(this._url + 'cinDoc/' + doctorant.cin).subscribe(
      data => {
        this._rapporteurs = data;

      }, error => {
        console.log('error');
      }
    );
  }
  public save() {
    this.http.post<number>(this._url + 'save', this.rapporteur).subscribe(
      data => {
        if (data > 0) {
          this.rapporteurs.push(this.cloneRapporteur(this.rapporteur));
          this.rapporteur = null;
          this._snackBar.open('Enregistrer avec success ', '', {
            duration: 5000,
          });
        } else if (data === -2) {
          this._snackBar.open('Le Doctorant et le directeur De Thèse ont des spécialités différentes  ', '', {
            duration: 5000,
          });
        }
      }, error => {
        this._snackBar.open('une erreur est survenu!! résseyer plutard  ', '', {
          duration: 5000,
        });
      }
    );
  }

  private cloneRapporteur(rapporteur: Rapporteur) {
    const myClone = new Rapporteur();
    myClone.dateAffectation = rapporteur.dateAffectation;
    myClone.professeur = rapporteur.professeur;
    myClone.doctorant = rapporteur.doctorant;
    myClone.avis = rapporteur.avis;
    return myClone;
  }

}

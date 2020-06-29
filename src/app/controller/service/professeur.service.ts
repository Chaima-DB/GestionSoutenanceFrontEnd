import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Professeur} from '../model/professeur.model';
import {MatSnackBar} from '@angular/material/snack-bar';
import {User} from '../model/user';
import {Doctorant} from '../model/doctorant.model';
import {JwtResponse} from '../model/jwt-response';
import {Router} from '@angular/router';
import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ProfesseurService {
  private _professeur: Professeur;
  private _prof: Professeur;
  private _professeurs: Array<Professeur>;
  private _professeurDetail: Professeur;
  private _baseUrl= 'http://localhost:8090/';
  private _url= this._baseUrl + 'api/v1/gestionDesSoutenances-api/professeur/';
  private _user: User;
  private _ok: string;
  private _no: string;
  constructor(private http: HttpClient, private _snackBar: MatSnackBar,
              private authService: AuthService) {}

  get user(): User {
    if (this._user == null) {
      this._user = new User();
    }
    return this._user;
  }

  set user(value: User) {
    this._user = value;
  }
  get professeur(): Professeur {
    if (this._professeur == null) {
      this._professeur = new Professeur();
    }
    return this._professeur;
  }

  set professeur(value: Professeur) {
    this._professeur = value;
  }
  get prof(): Professeur {
    if (this._prof == null) {
      this._prof = new Professeur();
    }
    return this._prof;
  }

  set prof(value: Professeur) {
    this._prof = value;
  }

  get professeurs(): Array<Professeur> {
    if (this._professeurs == null) {
      this._professeurs = new Array<Professeur>();
    }
    return this._professeurs;
  }

  set professeurs(value: Array<Professeur>) {
    this._professeurs = value;
  }


  get professeurDetail(): Professeur {
    if (this._professeurDetail == null) {
      this._professeurDetail = new Professeur();
    }
    return this._professeurDetail;
  }

  set professeurDetail(value: Professeur) {
    this._professeurDetail = value;
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
    this.http.get<Array<Professeur>>(this._url).subscribe(
      data => {
        this._professeurs = data;
      }, error => {
        console.log('erreur  find all professeurs');
      }
    );
  }

  public save() {
    this.http.post<JwtResponse>(this._url, this.professeur, this.authService.httpHeader).subscribe(
      data => {
        if (data) {
          this.professeur.user.isEnable = true;
          this.professeur.user.role.titre = 'ROLE_PROF';
          this.professeurs.push(this.cloneProfesseur(this.professeur));
          this.professeur = null;
          this._snackBar.open('Enregistrer avec success ', '', {
            duration: 5000,
          });
        }
      }, error => {
        this._snackBar.open('Une erreur est survenu !! réessayer plutard  ', '', {
          duration: 5000,
        });
      }
    );
  }

  private cloneProfesseur(professeur: Professeur) {
    const myClone = new Professeur();
    myClone.cin = professeur.cin;
    myClone.nom = professeur.nom;
    myClone.prenom = professeur.prenom;
    myClone.email = professeur.email;
    myClone.sexe = professeur.sexe;
    myClone.tel = professeur.tel;
    myClone.specialite.libelle = professeur.specialite.libelle;
    myClone.dateDernierePublication = professeur.dateDernierePublication;
    myClone.user.email = professeur.user.email;
    myClone.user.password = professeur.user.password;
    myClone.user.role = professeur.user.role;
    return myClone;
  }




  public deleteByCinFromView(professeur: Professeur) {
    const index = this.professeurs.findIndex(p => p.cin === professeur.cin);
    if (index !== -1) {
      this.professeurs.splice(index, 1);
    }
  }
  public deleteByCin(professeur: Professeur) {
    console.log(this.professeur);
    this.http.delete<number>(this._url + 'cin/' + professeur.cin).subscribe(
      data => {
        this.deleteByCinFromView(professeur);
      }, error => {
        console.log('erreur');
      }
    );
  }

  public findByCin(professeur: Professeur){
    this.http.get<Professeur>(this._url + 'cin/' + professeur.cin).subscribe(
      data => {
        this._professeurDetail = data;
        console.log(this.professeur);
      }, error => {
        console.log('error');
      }
    );
  }
  public update(professeur: Professeur, id: number) {
    this.http.put<number>(this._url + 'id/' + id, this.professeur).subscribe(data => {
      console.log(data);
    }, error => {
      console.log('error');
    });
  }
  public findByUserEmail(email: string){
    this.http.get<Professeur>(this._url + 'email/' + email , this.authService.httpHeader)
      .subscribe(data => {
        this._prof = data;
      }, error => {
        console.log(error);
      });
  }
}

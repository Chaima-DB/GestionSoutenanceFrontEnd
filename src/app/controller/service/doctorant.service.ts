import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Doctorant} from '../model/doctorant.model';
import { JwtResponse } from '../model/jwt-response';
import {Router} from '@angular/router';
import {AuthService} from './auth.service';
import {User} from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class DoctorantService {
  public static _compteur: number;
  private _doctorant: Doctorant;
  private _user: User;
  private _doctorants: Array<Doctorant>;
  private _baseUrl = 'http://localhost:8090/';
  private _url = this._baseUrl + 'api/v1/gestionDesSoutenances-api/doctorant/';
  private _ok: string;
  private _no: string;
  private _newDoctorant = false;
  constructor(private http: HttpClient,
              private  router: Router,
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

  get newDoctorant(): boolean {
    DoctorantService._compteur++;
    return this._newDoctorant;
  }

  set newDoctorant(value: boolean) {
    this._newDoctorant = value;
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
    this.http.post<JwtResponse>(this._url, this.doctorant, this.authService.httpHeader).subscribe(
      data => {
        if (data) {
          this.doctorant.user.isEnable = true;
          this.doctorant.user.roles.push({id: 3, titre :"ROLE_USER"});
          this.doctorants.push(this.cloneDoctorant(this.doctorant));
          this.doctorant = null;
          this._ok = ' enregistrer avec succes ';
          this._newDoctorant = true;
        } else if (!data) {
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
    myClone.user.email = doctorant.user.email;
    myClone.user.password = doctorant.user.password;
    myClone.user.roles = doctorant.user.roles;
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

  public findByCin(doctorant: Doctorant){
    this.http.get<Doctorant>(this._url + 'cin/' + doctorant.cin).subscribe(
      data => {
        this._doctorant = data;

      }, error => {
        console.log('error');
      }
    );
  }
  public update(doctorant: Doctorant, id: number) {
    this.http.put<number>(this._url + 'id/' + id, this.doctorant).subscribe(data => {
      console.log(data);
      console.log(this.doctorant.dateInscription);
    }, error => {
      console.log('error');
      });
  }

  public findByUserEmail(email: string){
   this.http.get<Doctorant>(this._url + 'email/' + email , this.authService.httpHeader)
     .subscribe(data => {
    this._doctorant = data;
   }, error => {
     console.log(error);
   });
  }

}

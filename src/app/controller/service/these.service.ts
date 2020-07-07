import { Injectable } from '@angular/core';
import {These} from '../model/these.model';
import {HttpClient, HttpEvent, HttpRequest} from '@angular/common/http';
import {Article} from '../model/article.model';
import {AuthService} from './auth.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Observable} from 'rxjs';
import {Doctorant} from '../model/doctorant.model';
import {Rapporteur} from '../model/rapporteur.model';

@Injectable({
  providedIn: 'root'
})
export class TheseService {

  constructor(private http: HttpClient,
              private _snackBar: MatSnackBar) { }
  private _these: These;
  private _theses: Array<These>;
  private _thesesDoctorant: Array<These>;

  private _baseUrl= 'http://localhost:8090/';
  private _url= this._baseUrl + 'saveThese/reference/';
  private _urlCin= this._baseUrl + 'api/v1/gestionDesSoutenances-api/these/cin/';
  private _urlEmail= this._baseUrl + 'api/v1/gestionDesSoutenances-api/these/email/';



  get these(): These {
    if (this._these == null){
      this._these = new These();
    }
    return this._these;
  }

  set these(value: These) {
    this._these = value;
  }

  get theses(): Array<These> {
    if (this._theses == null){
      this._theses = new Array<These>();
    }
    return this._theses;
  }

  set theses(value: Array<These>) {
    this._theses = value;
  }

  get thesesDoctorant(): Array<These> {
    if (this._thesesDoctorant == null){
      this._thesesDoctorant = new Array<These>();
    }
    return this._thesesDoctorant;
  }

  set thesesDoctorant(value: Array<These>) {
    this._thesesDoctorant = value;
  }

  public findByDoctorantCin(doctorant: Doctorant){
    this.http.get<Array<These>>(this._urlCin + doctorant.cin).subscribe(
      data => {
        this.thesesDoctorant = data;
        console.log(data);

      }, error => {
        console.log('error');
      }
    );
  }
  public findByDoctorantUserEmail(email: string){
    this.http.get<Array<These>>(this._urlEmail + email).subscribe(
      data => {
        this.theses = data;
        console.log(data);

      }, error => {
        console.log('error');
      }
    );
  }
/*  public save() {
    this.http.post<any>(this._url + 'saveThese' , this.these).subscribe(
      data => {
        if (data > 0) {
          this.theses.push(this.cloneThese(this.these));
          this.these = null;
          this._snackBar.open('Enregistrer avec success ', '', {
            duration: 5000,
          });
        }
      }, error => {
        console.log(error);
        this._snackBar.open('une erreur est survenu!! résseyer plutard  ', '', {
          duration: 5000,
        });
      }
    );
  }*/
  saveFileThese(these: These, file: File): Observable<HttpEvent<{}>> {
    console.log(these);
    const data: FormData = new FormData();
    data.append('these', these.reference);
    data.append('titre', these.titre);
    data.append('file', file);
    const newRequest = new HttpRequest('POST', this._url + these.reference + '/titre/' + these.titre , data, {
      reportProgress: true,
      responseType: 'text'
    });
    return this.http.request(newRequest);
    console.log('error');
  }
  private cloneThese(these: These) {
    const myClone = new These();
    myClone.fileName = these.fileName;
    myClone.desciption = these.desciption;
    myClone.filepath = these.filepath;
    myClone.reference = these.reference;
    myClone.titre = these.titre;
    myClone.file = these.file;
    myClone.doctorant.user.email = these.doctorant.user.email;
    return myClone;
  }
}

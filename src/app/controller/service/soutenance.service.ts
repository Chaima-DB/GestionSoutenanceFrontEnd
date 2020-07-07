import { Injectable } from '@angular/core';
import {Soutenance} from '../model/soutenance.model';
import {Jury} from '../model/jury.model';
import {HttpClient} from '@angular/common/http';
import {Doctorant} from '../model/doctorant.model';
import {MatSnackBar} from '@angular/material/snack-bar';
import {of} from 'rxjs';
import {newArray} from '@angular/compiler/src/util';
import {DirecteurDeThese} from '../model/directeur-de-these.model';

@Injectable({
  providedIn: 'root'
})
export class SoutenanceService {
  private _soutenance: Soutenance;
  private _jury: Jury;
  private _jurys: Array<Jury>;
  private _lesJurys: Array<Jury>;
  private _doctorant: Doctorant;
  private _doctorants : Array<Doctorant>;
  private _juryDetails : Array<Jury>;
  private _soutenances : Array<Soutenance>;
  private _baseUrl= 'http://localhost:8090/';
  private _url= this._baseUrl + 'api/v1/gestionDesSoutenances-api/soutenance/';
  private _urlJury = this._baseUrl + 'api/v1/gestionDesSoutenances-api/jury/';
  private _ok: string;
  private _no: string;
  private _status: boolean;
  private _soutenanceDetail: Soutenance;




  constructor(private http: HttpClient, private _snackBar: MatSnackBar ) { }

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

  get status(): boolean {
    return this._status;
  }

  set status(value: boolean) {
    this._status = value;
  }

  get doctorant(): Doctorant {
    if (this._doctorant == null){
      this._doctorant = new Doctorant();
    }
    return this._doctorant;
  }

  set doctorant(value: Doctorant) {
    this._doctorant = value;
  }

  get doctorants(): Array<Doctorant> {
    return this._doctorants;
  }

  set doctorants(value: Array<Doctorant>) {
    if ( this._doctorants == null){
      this._doctorants = new Array<Doctorant>();
    }
    this._doctorants = value;
  }

  get juryDetails(): Array<Jury> {
    if ( this._juryDetails == null){
      this._juryDetails = new Array<Jury>();
    }
    return this._juryDetails;
  }

  set juryDetails(value: Array<Jury>) {
    this._juryDetails = value;
  }

  get jury(): Jury {
    if (this._jury == null){
      this._jury = new Jury();
    }
    return this._jury;
  }

  set jury(value: Jury) {
    this._jury = value;
  }


  get jurys(): Array<Jury> {
    if (this._jurys == null){
      this._jurys = new Array<Jury>();
    }
    return this._jurys;
  }

  set jurys(value: Array<Jury>) {
    this._jurys = value;
  }


  get lesJurys(): Array<Jury> {
    if (this._lesJurys == null) {
      this._lesJurys = new Array<Jury>();
    }
    return this._lesJurys;
  }

  set lesJurys(value: Array<Jury>) {
    this._lesJurys = value;
  }

  get soutenanceDetail(): Soutenance {
    if (this._soutenanceDetail == null) {
      this._soutenanceDetail = new Soutenance();
    }
    return this._soutenanceDetail;
  }

  set soutenanceDetail(value: Soutenance) {
    this._soutenanceDetail = value;
  }

  get soutenance(): Soutenance {
    if (this._soutenance == null){
      this._soutenance = new Soutenance();
    }
    return this._soutenance;
  }

  set soutenance(value: Soutenance) {
    this._soutenance = value;
  }

  get soutenances(): Array<Soutenance> {
    if (this._soutenances == null){
      this._soutenances = new Array<Soutenance>();
    }
    return this._soutenances;
  }

  set soutenances(value: Array<Soutenance>) {
    this._soutenances = value;
  }

  public addJury() {
    const index = this.soutenance.jurys.findIndex(j => j.professeur.cin === this.jury.professeur.cin);
    if (index < 0) {
      this.soutenance.jurys.push(this.cloneJury(this.jury));
      this.lesJurys.push(this.cloneJury(this.jury));
      this.jury = null;
    }else{
      this._snackBar.open(' jury déjà choisie ', '', {
        duration: 5000,
      });
    }
  }
  public validateSave(): boolean {
    return this.soutenance.reference != null;
  }
  public save(){
    console.log(this.soutenance);
    this.http.post<number>(this._url, this.soutenance).subscribe(
      data => {
        console.log(data);
        if (data > 0) {
          this.soutenances.push(this.cloneSoutenance(this.soutenance));
          this.jury = null;
          this.soutenance = null;
          this.jurys = null;
          this._snackBar.open('Enregistrer avec success ', '', {
            duration: 5000,
          });
        } else if (data === -1) {
          // this._no = 'cette reference est déjà utiliser ';
          this._snackBar.open('cette reference est déjà utiliser ', '', {
            duration: 5000,
          });
        }else if (data === -2) {
          // this._no = 'cette reference est déjà utiliser ';
          this._snackBar.open('veillez remplir le champ doctorant', '',{
            duration: 5000,
          });
        }else if (data === -3) {
          // this._no = 'cette reference est déjà utiliser ';
          this._snackBar.open('cet doctorant à déjà une soutenance ', '',{
            duration: 5000,
          });
        }else if (data === -4) {
          // this._no = 'cette reference est déjà utiliser ';
          this._snackBar.open('sauvegarde échouer! erreur dans le choix des jurys ', '',{
            duration: 5000,
          });
        }
      }, error => {
        console.log('erreur sauvgarde soutenance');

      }
    );
  }

  public deleteByReferenceFromView(soutenance: Soutenance){
    const index = this.soutenances.findIndex(s => s.reference === soutenance.reference)
    if (index !== -1){
      this.soutenances.splice(index,1);
    }
  }

  public deleteByReference(soutenance: Soutenance) {
    console.log(this.soutenance);
    this.http.delete<number>(this._url + 'reference/' + soutenance.reference).subscribe(
      data => {
        this.deleteByReferenceFromView(soutenance);
        this.jury = null;
      }, error => {
        console.log('erreur');
      }
    );
  }

  public findAllJurys() {
    this.http.get<Array<Jury>>(this._urlJury).subscribe(
      data => {
        this.jurys = data;
        console.log('findAll jurys done');
      }, error => {
        console.log('erreur');
      }
    );
  }
  public findAll() {
    this.http.get<Array<Soutenance>>(this._url).subscribe(
      data => {
        this.soutenances = data;
        console.log('find All soutenances done');
      }, error => {
        console.log('erreur');
      }
    );
  }
  public findBySoutenanceReference(soutenance: Soutenance){
    this.http.get<Array<Jury>>(this._urlJury + 'soutenance/reference/' + soutenance.reference).subscribe(
      data => {
        this._juryDetails = data;

      }, error => {
        console.log('error');
      }
    );
  }


  private cloneSoutenance(soutenance: Soutenance) {
    const myClone = new  Soutenance();
    myClone.reference = soutenance.reference;
    myClone.dateSoutenance = soutenance.dateSoutenance;
    myClone.doctorant.cin = soutenance.doctorant.cin;
    myClone.heureSoutenance = soutenance.heureSoutenance;
    myClone.resultatFinal = soutenance.resultatFinal;
    return myClone;
  }

  private cloneJury(jury: Jury) {
    const myClone = new  Jury();
    myClone.soutenance = jury.soutenance;
    myClone.professeur = jury.professeur;
    myClone.avis = jury.avis;
    return myClone;
  }


  public findByDoctorantCin(doctorant: Doctorant) {
    this.http.get<Soutenance>(this._url + 'doctorant/cin/' + doctorant.cin).subscribe(
      data => {
        this._soutenance = data;
        this.findBySoutenanceReference(data);
      }, error => {
        this._snackBar.open('une erreur est survenu!! réessayer plutard  ', '', {
          duration: 5000,
        });
        console.log('error to find soutenance by doctorant');
      }
    );
  }
  public findByReference(soutenance: Soutenance) {
    this.http.get<Soutenance>(this._url + 'reference/' + soutenance.reference).subscribe(
      data => {
        this._soutenanceDetail = data;
        this.findBySoutenanceReference(data);
      }, error => {
          this._snackBar.open('une erreur est survenu!! réessayer plutard  ', '', {
            duration: 5000,
          });
      });
  }
  public update(soutenance: Soutenance, id: number) {
    this.http.put<number>(this._url + 'id/' + id, this.soutenance).subscribe(data => {
      if (data === 1){
        this._snackBar.open('Modifier avec success ', '', {
        duration: 5000,
      });
      }else {
       this.save();
      }
    }, error => {
      this._snackBar.open('une erreur est survenu!! réessayer plutard  ', '', {
        duration: 5000,
      });
    });
  }
  public updateJury(jury: Jury , id: number) {
    this.http.put<number>(this._urlJury + 'id/' + id, jury).subscribe(data => {
      if (data === 1){
        this._snackBar.open('Modifier ', '', {
          duration: 5000,
        });
      }
    }, error => {
      this._snackBar.open('une erreur est survenu!! réessayer plutard  ', '', {
        duration: 5000,
      });
    });
  }
  public updateJurys(jurys: Array<Jury>){
    const index = this.juryDetails.findIndex(s => s.id === this.jury.id)
    if (index > 0 ){
      this.updateJury(this.jury, this.jury.id);
    }
  }
}

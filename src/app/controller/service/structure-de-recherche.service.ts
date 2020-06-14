import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {StructureDeRecherche} from '../model/structure-de-recherche.model';
import {MatSnackBar} from "@angular/material/snack-bar";


@Injectable({
  providedIn: 'root'
})
export class StructureDeRechercheService {
  private _structure: StructureDeRecherche;
  private _structures: Array<StructureDeRecherche>;
  private _baseUrl= 'http://localhost:8090/';
  private _url= this._baseUrl + 'api/v1/gestionDesSoutenances-api/structureDeRecherche/';
  private _ok: string;
  private _no: string;
  private _status: boolean;

  constructor(private http: HttpClient, private _snackBar: MatSnackBar) { }


  get structures(): Array<StructureDeRecherche> {
    if (this._structures == null) {
      this._structures = new Array<StructureDeRecherche>();
    }
    return this._structures;
  }

  set structures(value: Array<StructureDeRecherche>) {
    this._structures = value;
  }


  get structure(): StructureDeRecherche {
    if (this._structure == null) {
      this._structure = new StructureDeRecherche();
    }
    return this._structure;
  }

  set structure(value: StructureDeRecherche) {
    this._structure = value;
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

  get status(): boolean {
    return this._status;
  }

  set status(value: boolean) {
    this._status = value;
  }
  public findAll() {
    this.http.get<Array<StructureDeRecherche>>(this._url).subscribe(
      data => {
        this.structures = data;
        console.log('done');
      }, error => {
        console.log('erreur will find all structures');
      }
    );
  }


  public save() {
    this.http.post<number>(this._url, this._structure).subscribe(
      data => {
        if (data > 0) {
          this._structures.push(this.cloneStructure(this._structure));
          this.structure = null;
         // this._ok = 'Structure De Recherche enregistrer avec success ';
          this._snackBar.open('Enregistrer avec success ','',{
            duration: 5000,
          });
          console.log(data);
        } else if (data === -1) {
         // this._no = 'cette reference est déjà utiliser ';
          this._snackBar.open('cette reference est déjà utiliser ','',{
            duration: 5000,
          });
        }
      }, error => {
        console.log('erreur when saving');
      }
    );


  }

  private cloneStructure(structure: StructureDeRecherche) {
    const myClone = new StructureDeRecherche();
    myClone.reference = structure.reference;
    myClone.title = structure.title;
    myClone.emailRespo = structure.emailRespo;
    myClone.responsable = structure.responsable;
    myClone.etablissement.nom = structure.etablissement.nom;
    return myClone;
  }



  public deleteByRefFromView(structure: StructureDeRecherche) {
    const index = this.structures.findIndex(s => s.reference === structure.reference);
    if (index !== -1) {
      this.structures.splice(index, 1);
    }
  }
  public deleteByReference(structure: StructureDeRecherche) {
    console.log(this.structure);
    this.http.delete<number>(this._url + 'reference/' + structure.reference).subscribe(
      data => {
        this.deleteByRefFromView(structure);
        this._snackBar.open('structure supprimer avec succés ','',{
          duration: 5000,
        });
      }, error => {
        console.log('erreur');
      }
    );
  }
}

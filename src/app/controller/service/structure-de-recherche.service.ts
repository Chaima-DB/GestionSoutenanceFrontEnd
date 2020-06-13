import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {StructureDeRecherche} from '../model/structure-de-recherche.model';


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
  constructor(private http: HttpClient) { }


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
      }, error => {
        console.log('erreur');
      }
    );
  }
}

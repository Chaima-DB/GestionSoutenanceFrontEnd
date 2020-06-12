import {Etablissement} from './etablissement.model';

export class StructureDeRecherche {
  public reference: string ;
  public title: string ;
  public responsable: string ;
  public emailRespo: string ;
  public etablissement: Etablissement = new Etablissement();
}

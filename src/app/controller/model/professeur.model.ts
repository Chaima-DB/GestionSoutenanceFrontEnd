
import {Specialite} from './specialite.model';

export class Professeur {
  public  id: number;
  public cin: string;
  public email: string;
  public nom: string ;
  public prenom: string;
  public sexe: string;
  public tel: string;
  public dateDernierePublication: Date;

  public specialite: Specialite = new Specialite();
}

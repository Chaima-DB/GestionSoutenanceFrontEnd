import {Sujet} from './sujet.model';
import {Specialite} from './specialite.model';
import {StructureDeRecherche} from './structure-de-recherche.model';
import {User} from './user';


export class Doctorant {
  public  id: number;
  public cin: string;
  public cne: string;
  public email: string;
  public nom: string ;
  public prenom: string;
  public sexe: string;
  public tel: string;
  public password: string;
  public dateInscription: Date;
  public nv: number;
  public sujet: Sujet = new Sujet();
  public specialite: Specialite = new Specialite();
  public structureDeRecherche: StructureDeRecherche = new StructureDeRecherche();
  public user: User = new User();
}

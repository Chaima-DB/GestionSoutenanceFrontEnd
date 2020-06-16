import {Soutenance} from './soutenance.model';
import {Professeur} from './professeur.model';

export class Jury {
  public soutenance: Soutenance;
  public professeur: Professeur = new Professeur();
  public avis: string;
}

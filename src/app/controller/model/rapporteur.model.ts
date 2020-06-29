import {Professeur} from './professeur.model';
import {Doctorant} from './doctorant.model';

export class Rapporteur {
  public id: number;
  public dateAffectation: Date;
  public professeur: Professeur = new Professeur();
  public doctorant: Doctorant = new Doctorant();
  public avis: string;
}

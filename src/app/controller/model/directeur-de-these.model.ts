import {Professeur} from './professeur.model';
import {Doctorant} from './doctorant.model';

export class DirecteurDeThese {
  public id: number;
  public dateDebutEncadrement: Date;
  public professeur: Professeur = new Professeur();
  public doctorant: Doctorant = new Doctorant();
}

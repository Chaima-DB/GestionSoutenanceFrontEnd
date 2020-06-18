import {Doctorant} from './doctorant.model';
import {Jury} from './jury.model';
import {Time} from '@angular/common';

export class Soutenance {
  public id: number;
  public  reference: string;
  public  dateSoutenance: Date;
  public  heureSoutenance: Time;
  public resultatFinal: string;
  public doctorant: Doctorant = new Doctorant();
  public jurys: Array<Jury> = new Array<Jury>();

}

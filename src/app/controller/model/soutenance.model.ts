import {Doctorant} from './doctorant.model';
import {Jury} from './jury.model';
import DateTimeFormat = Intl.DateTimeFormat;

export class Soutenance {
  public id: number;
  public  reference: string;
  public  dateSoutenance: DateTimeFormat;
  public resultatFinal: string;
  public doctorant: Doctorant = new Doctorant();
  public jurys: Array<Jury> = new Array<Jury>();

}

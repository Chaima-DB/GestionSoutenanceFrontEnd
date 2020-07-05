import {Doctorant} from './doctorant.model';

export class These {
  public id: number;
  public titre: string;
  public reference: string;
  public filepath: string;
  public fileName: string;
  public desciption: string;
  public file: File;
  public doctorant = new Doctorant();
}

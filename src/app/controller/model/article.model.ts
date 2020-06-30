import {Doctorant} from './doctorant.model';
import {Indexation} from './indexation.model';
import {FileInfo} from './file-info.model';

export class Article {
  public doctorant: Doctorant = new Doctorant();
  public indexation: Indexation = new Indexation();
  public file: File;
  public datePublicationArticle: Date;
  public motCle: string ;

}

import { Injectable } from '@angular/core';
import {DirecteurDeThese} from '../model/directeur-de-these.model';
import {HttpClient} from '@angular/common/http';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Article} from '../model/article.model';
import {Indexation} from '../model/indexation.model';
import {map} from 'rxjs/operators';
import {DoctorantService} from "./doctorant.service";
import {JwtClientService} from "./jwt-client.service";

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private _article: Article;
  private _articles: Array<Article>;
  private _indexations: Array<Indexation>;

  private _baseUrl= 'http://localhost:8090/';
  private _url= this._baseUrl + 'api/v1/gestionDesSoutenances-api/article/';
  private _urlIndexation= this._baseUrl + 'api/v1/gestionDesSoutenances-api/indexation/';
  constructor(private http: HttpClient, private _snackBar: MatSnackBar,private doctorantService: DoctorantService,
              private jwtClientService: JwtClientService) { }
  get article(): Article {
    if (this._article == null) {
      this._article = new Article();
    }
    return this._article;
  }
  set article(value: Article) {
    this._article = value;
  }

  get articles(): Array<Article> {
    if (this._articles == null) {
      this._articles = new Array<Article>();
    }
    return this._articles;
  }

  set articles(value: Array<Article>) {
    this._articles = value;
  }

  get indexations(): Array<Indexation> {
    if (this._indexations == null) {
      this._indexations = new Array<Indexation>();
    }
    return this._indexations;
  }

  set indexations(value: Array<Indexation>) {
    this._indexations = value;
  }

  public findAll() {
    this.http.get<Array<Article>>(this._url).subscribe(
      data => {
        this.articles = data;
        console.log('done  find all Articles');
      }, error => {
        console.log('erreur  find all articles');
      }
    );
  }
  public findAllIndexation() {
    this.http.get<Array<Indexation>>(this._urlIndexation).subscribe(
      data => {
        this.indexations = data;
        console.log('done  find all indexations');
      }, error => {
        console.log('erreur  find all indexations');
      }
    );
  }

   public save() {
    this.http.post<number>(this._url, this.article).subscribe(
      data => {
        if (data > 0) {
          //this.article.doctorant.user = this.doctorantService.findByUserEmail(this.jwtClientService.getUsername());
          this.article = null;
          console.log(data);
          this._snackBar.open('Enregistrer avec success ', '', {
            duration: 5000,
          });
        }
      }, error => {
        console.log(this.article);
        this._snackBar.open('une erreur est survenu!! résseyer plutard  ', '', {
          duration: 5000,
        });
      }
    );
  }
  // public save() {
  //   return   this.http.post<number>(this._url, this.article).subscribe(
  //     data => {
  //       console.log(data);
  //       /* this._snackBar.open('Enregistrer avec success ', '', {
  //          duration: 5000
  //        });*/
  //     },error => {
  //       console.log(error);
  //     });
  // }
  private cloneArticle(article: Article) {
    const myClone = new Article();
    myClone.datePublicationArticle = article.datePublicationArticle;
    myClone.indexation = article.indexation;
    myClone.doctorant = article.doctorant;
    myClone.motCle = article.motCle;
    myClone.file = article.file;
    return myClone;
  }
}

import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {FileUploderService} from "../../../../controller/service/file-uploder.service";
import {ArticleService} from "../../../../controller/service/article.service";
import {DoctorantService} from "../../../../controller/service/doctorant.service";
import {Doctorant} from "../../../../controller/model/doctorant.model";
import {Article} from "../../../../controller/model/article.model";
import {Indexation} from "../../../../controller/model/indexation.model";
import {first} from "rxjs/operators";
import {HttpEvent, HttpEventType, HttpResponse, HttpRequest, HttpClient} from "@angular/common/http";
import {JwtClientService} from '../../../../controller/service/jwt-client.service';

@Component({
  selector: 'app-ajout-article',
  templateUrl: './ajout-article.component.html',
  styleUrls: ['./ajout-article.component.css']
})
export class AjoutArticleComponent implements OnInit {
  selectedFiles: FileList;
  currentFile: File;
  progress = 0;
  message = '';

  fileInfos: Observable<any>;
  constructor(private  uploadService: FileUploderService,
              private  articleService: ArticleService,
              private doctorantService: DoctorantService,
              private jwtClientService: JwtClientService,
              private http: HttpClient) { }

  ngOnInit(): void {
    this.doctorantService.findAll();
    this.articleService.findAllIndexation();
    this.articleService.findAll();
  }

  get doctorants(): Array<Doctorant> {
    return this.doctorantService.doctorants;
  }
  get doctorant(): Doctorant {
    return this.doctorantService.doctorant;
  }
  get articles(): Array<Article> {
    return this.articleService.articles;
  }
  get indexations(): Array<Indexation> {
    return this.articleService.indexations;
  }
  get article(): Article {
    return this.articleService.article;
  }
  public save() {
    this.upload();
    this.article.doctorant.user.email = this.jwtClientService.getEmail() ;
    this.articleService.save();
  }
  selectFile(event) {
    this.selectedFiles = event.target.files;
  }
  upload() {
    this.progress = 0;
    this.currentFile = this.selectedFiles.item(0);
    this.uploadService.pushFileToStorage(this.currentFile).subscribe(
      event => {
        if (event.type === HttpEventType.UploadProgress) {
          this.progress = Math.round(100 * event.loaded / event.total);
        } else if (event instanceof HttpResponse) {
          console.log('file saved');
        }

      },
      err => {
        this.progress = 0;
        console.log(err);
        this.message = 'Could not upload the file!';
        this.currentFile = undefined;
      });

    this.selectedFiles = undefined;
  }



}

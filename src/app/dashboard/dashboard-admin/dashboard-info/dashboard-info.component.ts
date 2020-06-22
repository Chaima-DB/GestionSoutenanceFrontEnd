import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {FileUploderService} from '../../../controller/service/file-uploder.service';
import {HttpEventType, HttpResponse} from '@angular/common/http';
import {ArticleService} from '../../../controller/service/article.service';
import {DoctorantService} from '../../../controller/service/doctorant.service';
import {Doctorant} from '../../../controller/model/doctorant.model';
import {Article} from '../../../controller/model/article.model';
import {Indexation} from '../../../controller/model/indexation.model';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-dashboard-info',
  templateUrl: './dashboard-info.component.html',
  styleUrls: ['./dashboard-info.component.css']
})
export class DashboardInfoComponent implements OnInit {
  selectedFiles: FileList;
  currentFile: File;
  progress = 0;
  message = '';

  fileInfos: Observable<any>;
  constructor(private  uploadService: FileUploderService,
              private  articleService: ArticleService,
              private doctorantService: DoctorantService) { }

  ngOnInit(): void {
    this.doctorantService.findAll();
    this.articleService.findAllIndexation();
    this.articleService.findAll();
  }

  get doctorants(): Array<Doctorant> {
    return this.doctorantService.doctorants;
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
    this.articleService.save().pipe(first()).subscribe(data => {
      this.upload();
    }, error => {
      console.log(error);
    });
  }
  selectFile(event) {
    this.selectedFiles = event.target.files;
  }
  upload() {
    this.progress = 0;

    this.currentFile = this.selectedFiles.item(0);
    this.uploadService.upload(this.currentFile).subscribe(
      event => {
        if (event.type === HttpEventType.UploadProgress) {
          this.progress = Math.round(100 * event.loaded / event.total);
        } else if (event instanceof HttpResponse) {
          this.message = event.body.message;
          this.fileInfos = this.uploadService.getFiles();
        }
        this.articleService.save();
      },
      err => {
        this.progress = 0;
        this.message = 'Could not upload the file!';
        this.currentFile = undefined;
      });

    this.selectedFiles = undefined;
  }

}

import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {UploadFileService} from '../../../controller/service/upload-file.service';
import {HttpEventType, HttpResponse} from '@angular/common/http';
import {TheseService} from '../../../controller/service/these.service';
import {These} from '../../../controller/model/these.model';
import {JwtClientService} from '../../../controller/service/jwt-client.service';

@Component({
  selector: 'app-these-upload',
  templateUrl: './these-upload.component.html',
  styleUrls: ['./these-upload.component.css']
})
export class TheseUploadComponent implements OnInit {

  selectedFiles: FileList;
  currentFile: File;
  progress = 0;
  message = '';

  fileInfos: Observable<any>;

  constructor(private theseService: TheseService, private uploadService: UploadFileService,
              private jwtClientService: JwtClientService) { }
  ngOnInit(): void {
    this.fileInfos = this.uploadService.getFiles();
  }
  get these(): These {
    return this.theseService.these;
  }
  get theses(): Array<These> {
    return this.theseService.theses;
  }
  selectFile(event) {
    this.selectedFiles = event.target.files;
  }
  upload(these: These) {
    this.progress = 0;
    these.doctorant.email = this.jwtClientService.getEmail() ;
    this.currentFile = this.selectedFiles.item(0);
    this.uploadService.upload(these, this.currentFile).subscribe(
      event => {
        if (event.type === HttpEventType .UploadProgress) {
          this.progress = Math.round(100 * event.loaded / event.total);
        } else if (event instanceof HttpResponse) {
          this.message = event.body.message;
          this.fileInfos = this.uploadService.getFiles();
        }
      },
      err => {
        this.progress = 0;
        this.message = 'Could not upload the file!';
        this.currentFile = undefined;
      });

    this.selectedFiles = undefined;
  }
  getDoctorantFiles(fileName: string): any {
    return this.uploadService.getDoctorantFiles(fileName);
  }
}

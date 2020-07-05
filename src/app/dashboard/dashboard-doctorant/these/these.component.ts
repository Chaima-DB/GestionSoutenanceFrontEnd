import { Component, OnInit } from '@angular/core';
import {HttpEventType, HttpResponse} from '@angular/common/http';
import {TheseService} from '../../../controller/service/these.service';
import {FileUploderService} from '../../../controller/service/file-uploder.service';
import {These} from '../../../controller/model/these.model';
import {Doctorant} from '../../../controller/model/doctorant.model';
import {JwtClientService} from '../../../controller/service/jwt-client.service';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-these',
  templateUrl: './these.component.html',
  styleUrls: ['./these.component.css']
})
export class TheseComponent implements OnInit {
  selectedFiles: FileList;
  currentFile: File;
  progress = 0;
  message = '';
  constructor(private theseService: TheseService, private uploadService: FileUploderService,
              private jwtClientService: JwtClientService,
              private sanitizer: DomSanitizer) {
  }

  ngOnInit(): void {
    this.theseService.findAll();
  }
  get these(): These {
    return this.theseService.these;
  }
  get theses(): Array<These> {
    return this.theseService.theses;
  }

  public save(these) {
    this.upload(these);
    // this.these.doctorant.user.email = this.jwtClientService.getEmail() ;

  }
  selectFile(event) {
    this.selectedFiles = event.target.files;
  }
  upload(these) {
    console.log('avant' + these);
    this.progress = 0;
    this.currentFile = this.selectedFiles.item(0);
    this.theseService.saveFileThese(these, this.currentFile ).subscribe(
      event => {
        if (event.type === HttpEventType.UploadProgress) {
          this.progress = Math.round(100 * event.loaded / event.total);
          console.log(these);
        } else if (event instanceof HttpResponse) {
          console.log('file saved');
          console.log(these);

        }

      },
      err => {
        this.progress = 0;
        console.log(err);
        console.log(these);
        this.message = 'Could not upload the file!';
        this.currentFile = undefined;
      });

    this.selectedFiles = undefined;
  }
}

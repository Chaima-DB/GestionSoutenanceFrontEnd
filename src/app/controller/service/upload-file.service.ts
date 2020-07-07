import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {These} from '../model/these.model';

@Injectable({
  providedIn: 'root'
})
export class UploadFileService {

  private baseUrl = 'http://localhost:8090';
  private url = this.baseUrl + '/upload/description/';

  constructor(private http: HttpClient) { }

  upload(these: These, file: File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();

    formData.append('description', these.desciption);
    formData.append('titre', these.titre);
    formData.append('file', file);
    formData.append('email', these.doctorant.email);
    const req = new HttpRequest('POST', this.url + these.desciption +
      '/titre/' + these.titre + '/email/' + these.doctorant.email, formData, {
      reportProgress: true,
      responseType: 'json'
    });

    return this.http.request(req);
  }

  getFiles(): Observable<any> {
    return this.http.get(`${this.baseUrl}/files`);
  }
  getDoctorantFiles(fileName: string): any {
    return this.http.get(this.baseUrl + '/get/filname' + fileName );
  }

}

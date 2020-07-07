import { Component, OnInit } from '@angular/core';
import {TheseService} from '../../../controller/service/these.service';
import {These} from '../../../controller/model/these.model';
import {JwtClientService} from '../../../controller/service/jwt-client.service';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent implements OnInit {

  constructor(private theseService: TheseService, private jwtClientService: JwtClientService) { }
  baseUrl = 'http://localhost:8090';
  Useremail = this.jwtClientService.getEmail();
  ngOnInit(): void {
    this.theseService.findByDoctorantUserEmail(this.Useremail);
  }
  get theses(): Array<These> {
    return this.theseService.theses;
  }
  get these(): These {
    return this.theseService.these;
  }
}

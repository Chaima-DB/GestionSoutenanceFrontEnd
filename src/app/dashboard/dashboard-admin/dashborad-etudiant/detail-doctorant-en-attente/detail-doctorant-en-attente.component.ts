import { Component, OnInit } from '@angular/core';
import {DoctorantService} from '../../../../controller/service/doctorant.service';
import {JwtClientService} from '../../../../controller/service/jwt-client.service';
import {DirecteurDeTheseService} from '../../../../controller/service/directeur-de-these.service';
import {Doctorant} from '../../../../controller/model/doctorant.model';
import {DirecteurDeThese} from '../../../../controller/model/directeur-de-these.model';

@Component({
  selector: 'app-detail-doctorant-en-attente',
  templateUrl: './detail-doctorant-en-attente.component.html',
  styleUrls: ['./detail-doctorant-en-attente.component.css']
})
export class DetailDoctorantEnAttenteComponent implements OnInit {

  constructor(private doctorantService: DoctorantService) { }

  get doctorant(): Doctorant {
    return this.doctorantService.doctorant;
  }
  ngOnInit(): void {
  }
}

import { Component, OnInit } from '@angular/core';
import {DirecteurDeTheseService} from '../../../../controller/service/directeur-de-these.service';
import {DirecteurDeThese} from '../../../../controller/model/directeur-de-these.model';
import {Soutenance} from '../../../../controller/model/soutenance.model';

@Component({
  selector: 'app-list-directeur-theses',
  templateUrl: './list-directeur-theses.component.html',
  styleUrls: ['./list-directeur-theses.component.css']
})
export class ListDirecteurThesesComponent implements OnInit {
  public page = 1;
  public Tablesearch = '';
  constructor(private directeurDeTheseService: DirecteurDeTheseService) { }
  ngOnInit(): void {
    this.directeurDeTheseService.findAll();
  }
  get directeurs(): Array<DirecteurDeThese> {
    return this.directeurDeTheseService.directeurDeTheses;
  }
  public delete(directeur: DirecteurDeThese) {
    this.directeurDeTheseService.deleteByDoctorantCin(directeur);
  }
}

import { Component, OnInit} from '@angular/core';
import {Doctorant} from '../../../../controller/model/doctorant.model';
import {DoctorantService} from '../../../../controller/service/doctorant.service';



@Component({
  selector: 'app-liste-doctorant',
  templateUrl: './liste-doctorant.component.html',
  styleUrls: ['./liste-doctorant.component.css']
})
export class ListeDoctorantComponent implements OnInit {

  constructor( private doctorantService: DoctorantService) {

  }
  ngOnInit(): void {
    this.doctorantService.findAll();
  }

 get doctorants(): Array<Doctorant>  {
 return this.doctorantService.doctorants;
 }
  get doctorant(): Doctorant  {
    return this.doctorantService.doctorant;
  }
  public deleteByCin(doctorant: Doctorant) {
    this.doctorantService.deleteByCin(doctorant);
  }
}

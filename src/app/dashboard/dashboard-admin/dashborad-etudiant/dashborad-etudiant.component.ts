import { Component, OnInit } from '@angular/core';
import {DoctorantService} from '../../../controller/service/doctorant.service';
import {Doctorant} from '../../../controller/model/doctorant.model';


@Component({
  selector: 'app-dashborad-etudiant',
  templateUrl: './dashborad-etudiant.component.html',
  styleUrls: ['./dashborad-etudiant.component.css']
})
export class DashboradEtudiantComponent implements OnInit {

  constructor(private doctorantService: DoctorantService) { }

  ngOnInit(): void {
    this.doctorantService.findAll();
  }

  get doctorants(): Array<Doctorant> {
    return this.doctorantService.doctorants;
  }

}

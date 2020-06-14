import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {DoctorantService} from '../../../../controller/service/doctorant.service';
import {Doctorant} from '../../../../controller/model/doctorant.model';

@Component({
  selector: 'app-details-doctorants',
  templateUrl: './details-doctorants.component.html',
  styleUrls: ['./details-doctorants.component.css']
})
export class DetailsDoctorantsComponent implements OnInit {

  constructor(public dialogBox: MatDialogRef<DetailsDoctorantsComponent>, private doctorantService: DoctorantService) { }

  ngOnInit(): void {
  }
  onClose(){
  this.dialogBox.close();
  }
  get doctorants(): Array<Doctorant>  {
    return this.doctorantService.doctorants;
  }
  get doctorant(): Doctorant  {
    return this.doctorantService.doctorant;
  }
}

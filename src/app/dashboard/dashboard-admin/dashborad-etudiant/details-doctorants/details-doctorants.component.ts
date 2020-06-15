import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {DoctorantService} from '../../../../controller/service/doctorant.service';
import {Doctorant} from '../../../../controller/model/doctorant.model';
import {BsDatepickerConfig} from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-details-doctorants',
  templateUrl: './details-doctorants.component.html',
  styleUrls: ['./details-doctorants.component.css']
})
export class DetailsDoctorantsComponent implements OnInit {
datePickerConfig: Partial<BsDatepickerConfig>;
  constructor(public dialogBox: MatDialogRef<DetailsDoctorantsComponent>,
              private doctorantService: DoctorantService, ) {
    this.datePickerConfig = Object.assign({}, { containerClass: 'theme-dark-blue', dateInputFormat: 'yyyy-MM-dd'});
  }

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
  public update(doctorant: Doctorant, id: number) {
    this.doctorantService.update(doctorant, id);
  }
}

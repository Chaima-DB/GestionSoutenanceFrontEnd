import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {DetailsDoctorantsComponent} from '../dashborad-etudiant/details-doctorants/details-doctorants.component';
import {FileUploadComponent} from '../../../file-upload/file-upload.component';


@Component({
  selector: 'app-dashboard-user',
  templateUrl: './dashboard-user.component.html',
  styleUrls: ['./dashboard-user.component.css']
})
export class DashboardUserComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }
  public uploadDialoge(){
    const  dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = false;
    dialogConfig.width = ' 1000px ';
    dialogConfig.height = '1000px';
    this.dialog.open(FileUploadComponent, dialogConfig);
  }
}

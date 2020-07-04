import { Component, OnInit } from '@angular/core';
import {LoginService} from '../controller/service/login.service';
import {ActivatedRoute, Router} from '@angular/router';
import {JwtClientService} from '../controller/service/jwt-client.service';
import {DoctorantService} from '../controller/service/doctorant.service';
import {Doctorant} from '../controller/model/doctorant.model';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
  cin: string;
  // doctorant: Doctorant;
  constructor(private route: ActivatedRoute, private router: Router, private doctorantService: DoctorantService ) { }
  ngOnInit(): void {
    this.cin = this.route.snapshot.params.cin;
    console.log(this.cin);
    // this.doctorant = this.route.snapshot.params.doctorant;
    this.doctorantService.afterConfirmation(this.cin);
    console.log(this.cin);
    this.router.navigate(['/login']);
  }

}

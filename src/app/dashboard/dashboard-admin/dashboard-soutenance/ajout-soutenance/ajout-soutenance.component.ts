import { Component, OnInit } from '@angular/core';
import {SoutenanceService} from '../../../../controller/service/soutenance.service';
import {ProfesseurService} from '../../../../controller/service/professeur.service';
import {Soutenance} from '../../../../controller/model/soutenance.model';
import {Professeur} from '../../../../controller/model/professeur.model';
import {Jury} from '../../../../controller/model/jury.model';
import {DoctorantService} from '../../../../controller/service/doctorant.service';
import {Doctorant} from '../../../../controller/model/doctorant.model';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-ajout-soutenance',
  templateUrl: './ajout-soutenance.component.html',
  styleUrls: ['./ajout-soutenance.component.css']
})
export class AjoutSoutenanceComponent implements OnInit {
  private _i: number;
  public bool = true;
  constructor(
    private soutenanceService: SoutenanceService,
    private professeurService: ProfesseurService,
    private doctorantService: DoctorantService,
  ) { this._i = 1; }

  ngOnInit(): void {
    this.professeurService.findAll();
    this.doctorantService.findAll();
  }

  get i(): number {
    return this._i;
  }


  set i(value: number) {
    this._i = value;
  }
  get doctorant(): Doctorant {
    return this.doctorantService.doctorant;
  }
  get doctorants(): Array<Doctorant> {
    return this.doctorantService.doctorants;
  }
  get soutenance(): Soutenance {
    return this.soutenanceService.soutenance;
  }
  get professeur(): Professeur {
    return this.professeurService.professeur;
  }
  get professeurs(): Array<Professeur> {
    return this.professeurService.professeurs;
  }
  get jurys(): Array<Jury> {
    return this.soutenanceService.jurys;
  }
  get lesJurys(): Array<Jury> {
    return this.soutenanceService.lesJurys;
  }
  get jury(): Jury {
    return this.soutenanceService.jury;
  }
  public addJury() {
   this.soutenanceService.addJury();
 }
  get status(): boolean {
    return this.soutenanceService.status;
  }
  get ok(): string {
    return this.soutenanceService.ok;
  }
  get no(): string {
    return this.soutenanceService.no;
  }

  public save() {
    this.soutenanceService.save();
  }
  public deleteByRefFromView(soutenance: Soutenance){
  this.soutenanceService.deleteByReferenceFromView(soutenance);
}
public validateSave() {
  return this.soutenanceService.validateSave();
}
}
// }
// public supprimer() {
//   this.empruntService.supprimer();
// }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialsModule} from './materials/materials.module';
import { DashboardAdminComponent } from './dashboard/dashboard-admin/dashboard-admin.component';
import { DashboradNavComponent } from './dashboard/dashboard-admin/dashborad-nav/dashborad-nav.component';
import { DashboradSidelistComponent } from './dashboard/dashboard-admin/dashborad-sidelist/dashborad-sidelist.component';
import { DashboradEtudiantComponent } from './dashboard/dashboard-admin/dashborad-etudiant/dashborad-etudiant.component';
import { DashboradProfesseurComponent } from './dashboard/dashboard-admin/dashborad-professeur/dashborad-professeur.component';
import { HomeComponent } from './website/home/home.component';
import { DashboardInfoComponent } from './dashboard/dashboard-admin/dashboard-info/dashboard-info.component';
import { ListeDoctorantComponent } from './dashboard/dashboard-admin/dashborad-etudiant/liste-doctorant/liste-doctorant.component';
import { DashboardUserComponent } from './dashboard/dashboard-admin/dashboard-user/dashboard-user.component';
import { ProfileComponent } from './dashboard/dashboard-admin/dashboard-user/profile/profile.component';
import { LoginComponent } from './website/login/login.component';
import { InscriptionComponent } from './website/inscription/inscription.component';
import { NavComponent } from './website/navigation/nav/nav.component';
import {ReactiveFormsModule} from '@angular/forms';
import { StructureDERechercheComponent } from './dashboard/dashboard-admin/structure-derecherche/structure-derecherche.component';
import {HttpClientModule} from '@angular/common/http';
import {DoctorantService} from './controller/service/doctorant.service';
import { EtablissementComponent } from './dashboard/dashboard-admin/dash-etablissement/etablissement.component';
import { ListEtablissementComponent } from './dashboard/dashboard-admin/dash-etablissement/list-etablissement/list-etablissement.component';
import { AjoutEtablissementComponent } from './dashboard/dashboard-admin/dash-etablissement/ajout-etablissement/ajout-etablissement.component';



@NgModule({
  declarations: [
    AppComponent,
    DashboardAdminComponent,
    DashboradNavComponent,
    DashboradSidelistComponent,
    DashboradEtudiantComponent,
    DashboradProfesseurComponent,
    HomeComponent,
    DashboardInfoComponent,
    ListeDoctorantComponent,
    DashboardUserComponent,
    ProfileComponent,
    LoginComponent,
    InscriptionComponent,
    NavComponent,
    StructureDERechercheComponent,
    EtablissementComponent,
    ListEtablissementComponent,
    AjoutEtablissementComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MaterialsModule,
        ReactiveFormsModule,

    ],
  providers: [DoctorantService],
  bootstrap: [AppComponent]
})
export class AppModule { }

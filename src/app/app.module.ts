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
import { StructureDERechercheComponent } from './website/pages/structure-derecherche/structure-derecherche.component';
import {HttpClientModule} from '@angular/common/http';



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
    StructureDERechercheComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MaterialsModule,
        ReactiveFormsModule,

    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

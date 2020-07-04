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
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { StructureDERechercheComponent } from './dashboard/dashboard-admin/dash-etablissement/structure-derecherche/structure-derecherche.component';
import {HttpClientModule} from '@angular/common/http';
import {DoctorantService} from './controller/service/doctorant.service';
import { EtablissementComponent } from './dashboard/dashboard-admin/dash-etablissement/etablissement.component';
import { ListEtablissementComponent } from './dashboard/dashboard-admin/dash-etablissement/list-etablissement/list-etablissement.component';
import { AjoutEtablissementComponent } from './dashboard/dashboard-admin/dash-etablissement/ajout-etablissement/ajout-etablissement.component';
import {ListStructureComponent} from './dashboard/dashboard-admin/dash-etablissement/structure-derecherche/list-structure/list-structure.component';
import {AjoutStructureComponent} from './dashboard/dashboard-admin/dash-etablissement/structure-derecherche/ajout-structure/ajout-structure.component';
import { DetailsDoctorantsComponent } from './dashboard/dashboard-admin/dashborad-etudiant/details-doctorants/details-doctorants.component';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import {NgxPaginationModule} from 'ngx-pagination';
import { FileUploadComponent } from './file-upload/file-upload.component';
import {DateFormatModule, DatePipe} from 'ng-date-format';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ListProfesseursComponent } from './dashboard/dashboard-admin/dashborad-professeur/list-professeurs/list-professeurs.component';
import { DetailProfesseurComponent } from './dashboard/dashboard-admin/dashborad-professeur/detail-professeur/detail-professeur.component';
import { AjoutProfesseurComponent } from './dashboard/dashboard-admin/dashborad-professeur/ajout-professeur/ajout-professeur.component';
import {Professeur} from './controller/model/professeur.model';
import {ProfesseurService} from './controller/service/professeur.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardSoutenanceComponent } from './dashboard/dashboard-admin/dashboard-soutenance/dashboard-soutenance.component';
import { AjoutSoutenanceComponent } from './dashboard/dashboard-admin/dashboard-soutenance/ajout-soutenance/ajout-soutenance.component';
import { ListSoutenancesComponent } from './dashboard/dashboard-admin/dashboard-soutenance/list-soutenances/list-soutenances.component';
import { DetailsSoutenancesComponent } from './dashboard/dashboard-admin/dashboard-soutenance/details-soutenances/details-soutenances.component';
import { ListJurysComponent } from './dashboard/dashboard-admin/dashborad-professeur/list-jurys/list-jurys.component';
import { AjoutDirecteurTheseComponent } from './dashboard/dashboard-admin/dashborad-professeur/ajout-directeur-these/ajout-directeur-these.component';
import { ListDirecteurThesesComponent } from './dashboard/dashboard-admin/dashborad-professeur/list-directeur-theses/list-directeur-theses.component';
import {DashboardProfComponent} from './dashboard/dashboard-prof/dashboard-prof.component';
import {DashboardProfNavComponent} from './dashboard/dashboard-prof/dashboard-prof-nav/dashboard-prof-nav.component';
import {DashboardProfSidelistComponent} from './dashboard/dashboard-prof/dashboard-prof-sidelist/dashboard-prof-sidelist.component';
import {ProfDoctorantsComponent} from './dashboard/dashboard-prof/prof-doctorants/prof-doctorants.component';
import {ProfDocDetailsComponent} from './dashboard/dashboard-prof/prof-doctorants/prof-doc-details/prof-doc-details.component';
import {ProfProfilComponent} from './dashboard/dashboard-prof/prof-profil/prof-profil.component';
import {ArticleComponent} from './dashboard/dashboard-doctorant/article/article.component';
import {AjoutArticleComponent} from './dashboard/dashboard-doctorant/article/ajout-article/ajout-article.component';
import {DashboardDoctorantComponent} from './dashboard/dashboard-doctorant/dashboard-doctorant.component';
import {DashboardDocNavComponent} from './dashboard/dashboard-doctorant/dashboard-doc-nav/dashboard-doc-nav.component';
import {DashboardDocSidelistComponent} from './dashboard/dashboard-doctorant/dashboard-doc-sidelist/dashboard-doc-sidelist.component';
import {AjoutRapporteursComponent} from './dashboard/dashboard-admin/dashborad-professeur/ajout-rapporteurs/ajout-rapporteurs.component';
import { ListNvInscritComponent } from './dashboard/dashboard-admin/dashborad-etudiant/list-nv-inscrit/list-nv-inscrit.component';
import {DoctorantProfileComponent} from "./dashboard/dashboard-doctorant/doctorant-profile/doctorant-profile.component";
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { ListEnAttenteComponent } from './dashboard/dashboard-admin/dashborad-etudiant/list-en-attente/list-en-attente.component';
import { DetailDoctorantEnAttenteComponent } from './dashboard/dashboard-admin/dashborad-etudiant/detail-doctorant-en-attente/detail-doctorant-en-attente.component';
import {DirecteurDeTheseService} from './controller/service/directeur-de-these.service';


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
    AjoutEtablissementComponent,
    ListStructureComponent,
    AjoutStructureComponent,
    DetailsDoctorantsComponent,
    FileUploadComponent,
    ListProfesseursComponent,
    DetailProfesseurComponent,
    AjoutProfesseurComponent,
    DashboardComponent,
    DashboardSoutenanceComponent,
    AjoutSoutenanceComponent,
    ListSoutenancesComponent,
    DetailsSoutenancesComponent,
    ListJurysComponent,
    ListDirecteurThesesComponent,
    DashboradProfesseurComponent,
    AjoutRapporteursComponent,
    AjoutDirecteurTheseComponent,
    DashboradNavComponent,
    DashboardUserComponent,
    DashboardProfComponent,
    DashboardProfNavComponent,
    DashboardProfSidelistComponent,
    ProfDoctorantsComponent,
    ProfDocDetailsComponent,
    ProfProfilComponent,
    ArticleComponent,
    AjoutArticleComponent,
    DashboardDoctorantComponent,
    DashboardDocNavComponent,
    DashboardDocSidelistComponent,
    ListNvInscritComponent,
    DoctorantProfileComponent,
    ConfirmationComponent,
    ListEnAttenteComponent,
    DetailDoctorantEnAttenteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialsModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    DateFormatModule,
    BsDatepickerModule.forRoot(),
  ],
  providers: [
    DoctorantService,
    ProfesseurService,
    DirecteurDeTheseService,
    DatePipe,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }

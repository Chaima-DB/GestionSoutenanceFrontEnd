import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardAdminComponent} from './dashboard/dashboard-admin/dashboard-admin.component';
import {DashboradEtudiantComponent} from './dashboard/dashboard-admin/dashborad-etudiant/dashborad-etudiant.component';
import {DashboradProfesseurComponent} from './dashboard/dashboard-admin/dashborad-professeur/dashborad-professeur.component';
import {HomeComponent} from './website/home/home.component';
import {DashboardInfoComponent} from './dashboard/dashboard-admin/dashboard-info/dashboard-info.component';
import {ListeDoctorantComponent} from './dashboard/dashboard-admin/dashborad-etudiant/liste-doctorant/liste-doctorant.component';
import {DashboardUserComponent} from './dashboard/dashboard-admin/dashboard-user/dashboard-user.component';
import {LoginComponent} from './website/login/login.component';
import {InscriptionComponent} from './website/inscription/inscription.component';
import {EtablissementComponent} from './dashboard/dashboard-admin/dash-etablissement/etablissement.component';
import {AjoutEtablissementComponent} from './dashboard/dashboard-admin/dash-etablissement/ajout-etablissement/ajout-etablissement.component';
import {DashboardSoutenanceComponent} from './dashboard/dashboard-admin/dashboard-soutenance/dashboard-soutenance.component';


const routes: Routes = [
  { path : '',
    redirectTo : '/home',
    pathMatch: 'full'
  },
  { path : 'home',
    component: HomeComponent,
  },
  { path : 'login',
    component: LoginComponent,
  },
  { path : 'inscription',
    component: InscriptionComponent,
  },
  { path : 'dashboardAdmin',
    component: DashboardAdminComponent,
              children: [
                { path : '',
                  redirectTo : 'dashboard-info',
                  pathMatch: 'full'
                },
                { path : 'espace-doctorant',
                  component: DashboradEtudiantComponent,
                },
                { path : 'espace-prof',
                  component: DashboradProfesseurComponent,
                },
                { path : 'dashboard-info',
                  component: DashboardInfoComponent,
                },
                { path : 'espace-user',
                  component: DashboardUserComponent,
                },
                { path : 'espace-etablissement',
                  component: EtablissementComponent,
                },
                { path : 'espace-soutenance',
                  component: DashboardSoutenanceComponent,
                },
              ]
  },
  { path : 'dashboardUser',
    component: DashboardUserComponent,
    children: []
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

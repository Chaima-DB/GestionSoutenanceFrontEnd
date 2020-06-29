import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardAdminComponent} from './dashboard/dashboard-admin/dashboard-admin.component';
import {DashboradEtudiantComponent} from './dashboard/dashboard-admin/dashborad-etudiant/dashborad-etudiant.component';
import {DashboradProfesseurComponent} from './dashboard/dashboard-admin/dashborad-professeur/dashborad-professeur.component';
import {HomeComponent} from './website/home/home.component';
import {DashboardInfoComponent} from './dashboard/dashboard-admin/dashboard-info/dashboard-info.component';
import {DashboardUserComponent} from './dashboard/dashboard-admin/dashboard-user/dashboard-user.component';
import {LoginComponent} from './website/login/login.component';
import {InscriptionComponent} from './website/inscription/inscription.component';
import {EtablissementComponent} from './dashboard/dashboard-admin/dash-etablissement/etablissement.component';
import {DashboardSoutenanceComponent} from './dashboard/dashboard-admin/dashboard-soutenance/dashboard-soutenance.component';
import {AuthGuard} from "./controller/guards/auth.guard";
import {GuardAdminGuard} from "./controller/guards/guard-admin.guard";
import {GuardProfGuard} from "./controller/guards/guard-prof.guard";
import {GuardUserGuard} from "./controller/guards/guard-user.guard";
import {DashboardDoctorantComponent} from "./dashboard/dashboard-doctorant/dashboard-doctorant.component";
import {DoctorantProfileComponent} from "./dashboard/dashboard-doctorant/doctorant-profile/doctorant-profile.component";
import {GuardLoginGuard} from "./controller/guards/guard-login.guard";
import {ArticleComponent} from "./dashboard/dashboard-doctorant/article/article.component";


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
    canActivate: [GuardLoginGuard]
  },
  { path : 'inscription',
    component: InscriptionComponent,
    canActivate: [GuardLoginGuard]
  },
  { path : 'dashboardAdmin',
    component: DashboardAdminComponent,
    canActivate: [AuthGuard,
                  GuardAdminGuard],
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
    component: DashboardDoctorantComponent,
    canActivate: [AuthGuard, GuardUserGuard],
    children: [
      { path : 'Userprofile',
        component: DoctorantProfileComponent,
      },
      { path : 'article',
        component: ArticleComponent,
      },
    ],

  },
  { path : 'dashboardProf',
    canActivate: [AuthGuard,
                  GuardProfGuard],
    children: [
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

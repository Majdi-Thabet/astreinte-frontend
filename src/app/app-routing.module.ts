import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoriqueAstreinteComponent } from './pages/home/historique-astreinte/historique-astreinte.component';
import { BodyComponent } from './compoments/body/body.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { Page404Component } from './pages/page404/page404.component';
import { PeopleListComponent } from './pages/home/people-list/people-list.component';
import { RegisterComponent } from './pages/register/register.component';
import { UpdateUserComponent } from './pages/home/update-user/update-user.component';
import { AddUserComponent } from './pages/home/add-user/add-user.component';
import { CalendrierAstreinteComponent } from './pages/home/calendrier-astreinte/calendrier-astreinte.component';
import { ConfigAstreinteComponent } from './pages/home/config-astreinte/config-astreinte.component';
import { DetailsUserComponent } from './pages/home/details-user/details-user.component';
import { GestionAstreinteComponent } from './pages/home/gestion-astreinte/gestion-astreinte.component';
import { GestionDemandeComponent } from './pages/home/gestion-demande/gestion-demande.component';

const routes: Routes = [

  {
    path: "",
    component: LoginComponent
  },
  {
    path: "register",
    component: RegisterComponent
  },


  {
    path: "home",
    component: HomeComponent, children: [
      {
        path: "",
        component: BodyComponent
      }, {
        path: "update-user/:id",
        component: UpdateUserComponent
      },
      {
        path: "details-user/:id",
        component: DetailsUserComponent
      },
      {
        path: "add-user",
        component: AddUserComponent
      },
      {
        path: "people-list", component: PeopleListComponent

      },

      {
        path: "gestion-astreinte",
        component: GestionAstreinteComponent
      },
      {
        path: "calendrier-astreinte",
        component: CalendrierAstreinteComponent
      },
      {
        path: "gestion-demande",
        component: GestionDemandeComponent
      },

      {
        path: "config-astreinte",
        component: ConfigAstreinteComponent
      },

      {
        path: "historique-astreinte",
        component: HistoriqueAstreinteComponent
      },
    ]

  },

  {
    path: "**",
    component: Page404Component
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

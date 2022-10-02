import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { ConfigAstreinteComponent } from './config-astreinte/config-astreinte.component';
import { DetailsUserComponent } from './details-user/details-user.component';
import { GestionAstreinteComponent } from './gestion-astreinte/gestion-astreinte.component';
import { CalendrierAstreinteComponent } from './calendrier-astreinte/calendrier-astreinte.component';
import { GestionDemandeComponent } from './gestion-demande/gestion-demande.component';
import { HistoriqueAstreinteComponent } from './historique-astreinte/historique-astreinte.component';
import { BodyComponent } from './home/body/body.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { Page404Component } from './page404/page404.component';
import { PeopleListComponent } from './people-list/people-list.component';
import { RegisterComponent } from './register/register.component';
import { TestComponent } from './test/test.component';
import { UpdateUserComponent } from './update-user/update-user.component';

const routes: Routes = [
  {
    path:"home",
    component:HomeComponent,children:[
      {
        path:"",
        component:BodyComponent
      },   {
        path:"update-user/:id",
        component:UpdateUserComponent
      },
      {
        path:"details-user/:id",
        component:DetailsUserComponent
      },
      {
        path:"add-user",
        component:AddUserComponent
      },
      {
        path:"people-list",component:PeopleListComponent
      
      },

      {
        path:"gestion-astreinte",
        component:GestionAstreinteComponent
      },
      {
        path:"calendrier-astreinte",
        component:CalendrierAstreinteComponent
      },
      {
        path:"gestion-demande",
        component:GestionDemandeComponent
      },

      {
        path:"config-astreinte",
        component:ConfigAstreinteComponent
      },

      {
        path:"historique-astreinte",
        component:HistoriqueAstreinteComponent
      },
  
     
      
      
    ]
  
  },
  
  
 
  {
    path:"",
    component:LoginComponent
  },
  {
    path:"register",
    component:RegisterComponent
  },


  {
    path:"test",
    component:TestComponent
  },
  {
    path:"**",
    component:Page404Component
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



// {
//   path:"home",
//   component:HomeComponent,children:[
//     {
//       path:"",
//       component:BodyComponent
//     },
//     {
//       path:"people-list",
//       component:PeopleListComponent
//     },

//     {
//       path:"details-user",
//       component:DetailsUserComponent
//     },
//     {
//       path:"add-user",
//       component:AddUserComponent
//     },
    
    
//   ]

// },
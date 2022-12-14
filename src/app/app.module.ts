import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { FullCalendarModule } from '@fullcalendar/angular';
import interactionPlugin from '@fullcalendar/interaction';
import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { PeopleListComponent } from './pages/home/people-list/people-list.component';
import { FooterComponent } from './compoments/footer/footer.component';
import { Page404Component } from './pages/page404/page404.component';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateUserComponent } from './pages/home/update-user/update-user.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ToastrModule, ToastNoAnimation, ToastNoAnimationModule } from 'ngx-toastr';
import { SidebarComponent } from './compoments/sidebar/sidebar.component';
import { BodyComponent } from './compoments/body/body.component';
import { SettingsComponent } from './pages/home/settings/settings.component';
import { HistoriqueAstreinteComponent } from './pages/home/historique-astreinte/historique-astreinte.component';
import { SearchFilterPipe } from './pipes/search-filter.pipe';
import { SearchFilter1Pipe } from './pipes/search-filter1.pipe';
import { SearchFilter2Pipe } from './pipes/search-filter2.pipe';
import { NavbarComponent } from './compoments/navbar/navbar.component';
import { AddUserComponent } from './pages/home/add-user/add-user.component';
import { CalendrierAstreinteComponent } from './pages/home/calendrier-astreinte/calendrier-astreinte.component';
import { ConfigAstreinteComponent } from './pages/home/config-astreinte/config-astreinte.component';
import { DetailsUserComponent } from './pages/home/details-user/details-user.component';
import { GestionAstreinteComponent } from './pages/home/gestion-astreinte/gestion-astreinte.component';
import { GestionDemandeComponent } from './pages/home/gestion-demande/gestion-demande.component';

// FullCalendarModule.registerPlugins([
//   dayGridPlugin,
//   timeGridPlugin,
//   listPlugin,
//   interactionPlugin
// ])

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    PeopleListComponent,
    NavbarComponent,
    FooterComponent,
    Page404Component,
    AddUserComponent,
    UpdateUserComponent,
    SidebarComponent,
    BodyComponent,
    SettingsComponent,
    DetailsUserComponent,
    GestionAstreinteComponent,
    GestionDemandeComponent,
    ConfigAstreinteComponent,
    HistoriqueAstreinteComponent,
    SearchFilterPipe,
    SearchFilter1Pipe,
    SearchFilter2Pipe,
    CalendrierAstreinteComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ToastNoAnimationModule.forRoot(),
    NgxPaginationModule
    //  FullCalendarModule // import the FullCalendar module! will make the FullCalendar component available
  ],
  providers: [],
  bootstrap: [AppComponent],

  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class AppModule { }

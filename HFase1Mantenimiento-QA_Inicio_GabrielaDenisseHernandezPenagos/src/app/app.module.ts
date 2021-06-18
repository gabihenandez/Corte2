import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule } from "@angular/forms"
import { HttpClientModule } from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import { ModulomaualComponent } from './modulomaual/modulomaual.component';
import { PlantillaPComponent } from './plantilla-p/plantilla-p.component';
import { DatospComponent } from './datosp/datosp.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { InicioComponent } from './inicio/inicio.component';
import { PoliticasComponent } from './politicas/politicas.component';
import { DatosProcesoComponent } from './datos-proceso/datos-proceso.component';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ModulomaualComponent,
    PlantillaPComponent,
    DatospComponent,
    LoginComponent,
    RegisterComponent,
    InicioComponent,
    PoliticasComponent,
    DatosProcesoComponent,
  ],
  imports: [
    BrowserModule, AppRoutingModule, FormsModule, HttpClientModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }

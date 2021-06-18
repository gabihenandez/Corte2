import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import { ModulomaualComponent } from './modulomaual/modulomaual.component';
import { PlantillaPComponent } from './plantilla-p/plantilla-p.component';
import { DatospComponent } from './datosp/datosp.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { InicioComponent } from './inicio/inicio.component';
import { PoliticasComponent } from './politicas/politicas.component';
import { DatosProcesoComponent } from './datos-proceso/datos-proceso.component';

const routes: Routes = [
  {
    path : 'Dashboard',
      component : DashboardComponent,
  },
  {
    path : 'ModuloManual',
      component : ModulomaualComponent,
  },
  {
    path : 'PlantillaPruebas',
      component : PlantillaPComponent,
  },
  {
    path : 'Datosp',
      component : DatospComponent,
  },
  {
    path : 'Login',
      component : LoginComponent,
  },
  {
    path : 'Registro',
      component : RegisterComponent,
  },
  {
    path : 'Inicio',
      component : InicioComponent,
  },
  {
    path : 'Politicas',
      component : PoliticasComponent,
  },
  {
    path : 'DatosProceso',
      component : DatosProcesoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

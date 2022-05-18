import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteDataComponent } from './vsitas/cliente-data/cliente-data.component';
import { ClienteComponent } from './vsitas/cliente/cliente.component';
import { HomeComponent } from './vsitas/home/home.component';
import { LoginComponent } from './vsitas/login/login.component';
import { RegistroComponent } from './vsitas/registro/registro.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path: 'cliente/:id',component:ClienteComponent},
  {path: 'data',component:ClienteDataComponent},
  {path:'registro',component:RegistroComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
///
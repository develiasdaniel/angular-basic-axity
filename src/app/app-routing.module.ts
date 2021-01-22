import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComputersComponent } from './computers/computers.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { LoginComponent } from './login/login.component';
import { MascotasComponent } from './mascotas/mascotas.component';
import { PetsComponent } from './pets/pets.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'mascotas',
    component: MascotasComponent
  },
  {
    path: 'pets',
    component: PetsComponent,
  },
  {
    path: 'computers',
    component: ComputersComponent,
  },
  {
    path: 'computers/:id',
    component: ComputersComponent,
  },
  {
    path: 'list',
    component: ListComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

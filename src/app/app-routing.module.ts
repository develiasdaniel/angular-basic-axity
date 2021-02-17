import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComputersComponent } from './computers/computers.component';
import { HomeComponent } from './home/home.component';
import { ListPetsComponent } from './list-pets/list-pets.component';
import { ListComponent } from './list/list.component';
import { LoginComponent } from './login/login.component';
import { UsersListComponent } from './pages/users-list/users-list.component';
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
    path: 'pets',
    component: PetsComponent,
  },
  {
    path: 'pets/:id',
    component: PetsComponent,
  },
  {
    path: 'petslist',
    component: ListPetsComponent,
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
  },
  {
    path: 'userList',
    component: UsersListComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

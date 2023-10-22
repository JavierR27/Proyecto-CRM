import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { IndexComponent } from './components/usuarios/index/index.component';
import { CreateUsuarioComponent } from './components/usuarios/create-usuario/create-usuario.component';
import { EditUsuarioComponent } from './components/usuarios/edit-usuario/edit-usuario.component';

const appRoutes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'usuario', component: IndexComponent },
  { path: 'usuario/create', component: CreateUsuarioComponent },
  { path: 'usuario/edit/:id', component: EditUsuarioComponent },
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> =
  RouterModule.forRoot(appRoutes);

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginRegisterComponent } from './components/login-register/login-register.component';
import { AuthGuardService } from './components/shared/guard/auth-guard.service';
import { AdminComponent } from './components/admin/admin.component';
import { AdminGuardService } from './components/shared/guard/admin-guard.service';

const routes: Routes = [
  { path: '', component: LoginRegisterComponent, pathMatch: 'full' },
  {
    path: 'dashboard',
    loadChildren: () => import('./components/dashboard/dashboard.module').then(m => m.DashboardModule), canActivate: [AuthGuardService]

  },
  { path: 'admin', component: AdminComponent, canActivate: [AdminGuardService] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

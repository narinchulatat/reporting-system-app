import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UsersComponent } from './pages/users/users.component';
import { MenuItemsComponent } from './pages/menu-items/menu-items.component';
import { SubItemsComponent } from './pages/sub-items/sub-items.component';
import { QueriesComponent } from './pages/queries/queries.component';
import { ReportFiltersComponent } from './pages/report-filters/report-filters.component';
import { MultiQueryComponent } from './pages/multi-query/multi-query.component';
import { PermissionsComponent } from './pages/permissions/permissions.component';
import { LayoutComponent } from './layout/layout.component';

import { AuthGuard } from './core/auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'users', component: UsersComponent },
      { path: 'menu-items', component: MenuItemsComponent },
      { path: 'sub-items', component: SubItemsComponent },
      { path: 'queries', component: QueriesComponent },
      { path: 'report-filters', component: ReportFiltersComponent },
      { path: 'multi-query', component: MultiQueryComponent },
      { path: 'permissions', component: PermissionsComponent }
    ]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

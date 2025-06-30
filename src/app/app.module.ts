import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UsersComponent } from './pages/users/users.component';
import { MenuItemsComponent } from './pages/menu-items/menu-items.component';
import { SubItemsComponent } from './pages/sub-items/sub-items.component';
import { QueriesComponent } from './pages/queries/queries.component';
import { ReportFiltersComponent } from './pages/report-filters/report-filters.component';
import { MultiQueryComponent } from './pages/multi-query/multi-query.component';
import { PermissionsComponent } from './pages/permissions/permissions.component';

import { NavbarComponent } from './shared/navbar/navbar.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { LayoutComponent } from './layout/layout.component';

import { AuthGuard } from './core/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    UsersComponent,
    MenuItemsComponent,
    SubItemsComponent,
    QueriesComponent,
    ReportFiltersComponent,
    MultiQueryComponent,
    PermissionsComponent,
    NavbarComponent,
    SidebarComponent,
    LayoutComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

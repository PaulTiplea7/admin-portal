import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { UsersComponent } from './components/users/users.component';
import { RolesComponent } from './components/roles/roles.component';
import { OrganisationsComponent } from './components/organisations/organisations.component';
import { PermissionsComponent } from './components/permissions/permissions.component';
import { UserComponent } from './sub-components/user/user.component';
import { RoleComponent } from './sub-components/role/role.component';
import { PermissionComponent } from './sub-components/permission/permission.component';
import { OrganisationComponent } from './sub-components/organisation/organisation.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    RolesComponent,
    OrganisationsComponent,
    PermissionsComponent,
    UserComponent,
    RoleComponent,
    PermissionComponent,
    OrganisationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

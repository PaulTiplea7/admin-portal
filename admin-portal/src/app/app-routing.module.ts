import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UsersComponent } from './components/users/users.component';
import { OrganisationsComponent } from './components/organisations/organisations.component';
import { RolesComponent } from './components/roles/roles.component';
import { PermissionsComponent } from './components/permissions/permissions.component';
import { UserComponent } from './sub-components/user/user.component';
import { OrganisationComponent } from './sub-components/organisation/organisation.component';
import { RoleComponent } from './sub-components/role/role.component';
import { PermissionComponent } from './sub-components/permission/permission.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'users', component: UsersComponent },
  { path: 'organisations', component: OrganisationsComponent },
  { path: 'roles', component:  RolesComponent},
  { path: 'permissions', component: PermissionsComponent },
  { path: 'users/:id', component: UserComponent},
  { path: 'organisations/:id', component:OrganisationComponent},
  { path: 'roles/:id', component:RoleComponent},
  { path: 'permissions/:id', component:PermissionComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

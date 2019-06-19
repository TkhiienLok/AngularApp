import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserlistComponent } from './users-list/users-list.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', component: UserlistComponent },
  { path: '/users', component: UserlistComponent},
  { path: 'user-details/:id', component: UserDetailsComponent }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
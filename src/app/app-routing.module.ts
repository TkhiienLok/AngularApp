import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UsertableComponent } from './usertable/usertable.component';

const routes: Routes = [
  { path: 'users',  component: UsertableComponent},
  { path: 'user-details/:id', component: UserDetailsComponent },
  { path: '', pathMatch: 'full', redirectTo: 'users' },  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
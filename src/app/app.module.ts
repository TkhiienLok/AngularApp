import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import 'hammerjs';

// Routing module for router service
import { AppRoutingModule } from './app-routing.module';
import './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Components
import { UserDetailsComponent } from './user-details/user-details.component';
import { UsertableComponent } from './usertable/usertable.component';//doesn't work
import { UserlistComponent } from './users-list/users-list.component';
import { MatTableModule, MatListModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http'; 
import { UserService } from './shared/user.service';

import { StoreModule } from '@ngrx/store';
import { UserReducer } from './store/reducers/user.reducer';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './store/effects/users.effects';

const material = [ MatTableModule,
                   MatListModule]
@NgModule({
  declarations: [
    AppComponent,
    UsertableComponent,
    UserDetailsComponent,
    UserlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    HttpClientModule,
    MatListModule,
    StoreModule.forRoot({ applicationState:UserReducer}),
    EffectsModule.forRoot([UserEffects]),

  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})

export class AppModule { }
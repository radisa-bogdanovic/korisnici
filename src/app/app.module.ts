import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UsersContainer } from './user-component/users-container.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InputUserComponent } from './Input-user/input-user.component';
import { UserDisplayComponent } from './user-display/user-display.component';
import { Routes, RouterModule } from '@angular/router';

const userRoutes:Routes= [
  {
    path:'users' , component: UsersContainer  },
    { path: 'users/:id', component:UserDisplayComponent}
  
  
]
@NgModule({
  declarations: [
    AppComponent,
    UsersContainer,
    InputUserComponent,
    UserDisplayComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule.forRoot(userRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UsersContainer } from './user-component/users-container.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InputUserComponent } from './Input-user/input-user.component';
import { UserDisplayComponent } from './user-display/user-display.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersContainer,
    InputUserComponent,
    UserDisplayComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { KorisniciKomponentaComponent } from './korisnici-komponenta/korisnici-komponenta.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UnosKorisnikaComponent } from './unos-korisnika/unos-korisnika.component';

@NgModule({
  declarations: [
    AppComponent,
    KorisniciKomponentaComponent,
    UnosKorisnikaComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

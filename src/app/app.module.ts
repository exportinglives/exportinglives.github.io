import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ScrollToModule} from '@nicky-lenaers/ngx-scroll-to';

import {AppComponent} from './app.component';
import {NavComponent} from './nav/nav.component';
import {CoverComponent} from './cover/cover.component';
import {DocumentaryComponent} from './documentary/documentary.component';
import {PetitionsComponent} from './petitions/petitions.component';
import {ContactComponent} from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CoverComponent,
    DocumentaryComponent,
    PetitionsComponent,
    ContactComponent,
  ],
  imports: [BrowserModule, ScrollToModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

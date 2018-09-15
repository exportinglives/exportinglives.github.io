import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {PdfViewerModule} from 'ng2-pdf-viewer';
import {Ng2LoadingSpinnerModule} from 'ng2-loading-spinner';

import {AppComponent} from './app.component';
import {NavComponent} from './nav/nav.component';
import {CoverComponent} from './cover/cover.component';
import {DocumentaryComponent} from './documentary/documentary.component';
import {PetitionsComponent} from './petitions/petitions.component';
import {ContactComponent} from './contact/contact.component';
import {DocumentsComponent} from './documents/documents.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CoverComponent,
    DocumentaryComponent,
    PetitionsComponent,
    ContactComponent,
    DocumentsComponent,
  ],
  imports: [BrowserModule, PdfViewerModule, Ng2LoadingSpinnerModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

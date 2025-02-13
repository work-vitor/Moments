import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './comopents/header/header.component';
import { FooterComponent } from './comopents/footer/footer.component';
import { AboutComponent } from './comopents/pages/about/about.component';
import { HomeComponent } from './comopents/pages/home/home.component';
import { NewMomentComponent } from './comopents/pages/new-moment/new-moment.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    HomeComponent,
    NewMomentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

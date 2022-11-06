import { NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PrimeNGConfig } from 'primeng/api';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './@home/components/home/home.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { EventsComponent } from './components/events/events.component';
import { ChangeValueComponent } from './components/change-value/change-value.component';
import { EmitterComponent } from './components/emitter/emitter.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DirectivesComponent,
    EventsComponent,
    ChangeValueComponent,
    EmitterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule implements OnInit {
  constructor(private primengConfig: PrimeNGConfig) {}

  ngOnInit() {
    this.primengConfig.ripple = true;
  }

}
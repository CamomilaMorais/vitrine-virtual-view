import { NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PrimeNGConfig } from 'primeng/api';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DirectivesComponent } from './@shared/components/directives/directives.component';
import { EventsComponent } from './@shared/components/events/events.component';
import { ChangeValueComponent } from './@shared/components/change-value/change-value.component';
import { EmitterComponent } from './@shared/components/emitter/emitter.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DividerModule } from "primeng/divider";
import { AutoCompleteModule } from 'primeng/autocomplete';
import { InputMaskModule } from "primeng/inputmask";

@NgModule({
  declarations: [
    AppComponent,
    DirectivesComponent,
    EventsComponent,
    ChangeValueComponent,
    EmitterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CheckboxModule,
    ButtonModule,
    InputTextModule,
    DividerModule,
    AutoCompleteModule,
    InputMaskModule,
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
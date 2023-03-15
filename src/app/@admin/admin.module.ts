import { NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PrimeNGConfig } from 'primeng/api';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DividerModule } from "primeng/divider";
import { AutoCompleteModule } from 'primeng/autocomplete';
import { InputMaskModule } from "primeng/inputmask";
import { InicioComponent } from './components/inicio/inicio.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import { DetalheComponent } from './components/detalhe/detalhe.component';
import { AdminRoutingModule } from './admin-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    InicioComponent,
    BuscarComponent,
    DetalheComponent
  ],
  imports: [
    AdminRoutingModule,
    CommonModule
  ],
  providers: [],
  bootstrap: []
})
export class AdminModule { }
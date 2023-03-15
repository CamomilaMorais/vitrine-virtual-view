import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/app/@home/components/home/home.component';

const routes: Routes = [
 //  { path: '', redirectTo: 'entrar', pathMatch: 'full'},
  { path: 'entrar', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./@home/home.module').then(m => m.HomeModule)},
  { path: 'admin', loadChildren: () => import('./@admin/admin.module').then(m => m.AdminModule)},
  { path: 'aluno', loadChildren: () => import('./@aluno/aluno.module').then(m => m.AlunoModule)},
  { path: 'empresa', loadChildren: () => import('./@empresa/empresa.module').then(m => m.EmpresaModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

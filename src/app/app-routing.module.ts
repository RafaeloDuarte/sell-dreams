import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CorretoresComponent } from './corretores/corretores.component';
import { ContatoComponent } from './contato/contato.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path:"",component:HomeComponent },
  { path:"corretores",component:CorretoresComponent },
  { path:"contato",component:ContatoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PhotoListComponent } from './photos/photo-list/photo-list.component';
import { PhotoFormComponent } from './photos/photo-form/photo-form.component';
import { NotFoundComponent } from './erros/not-found/not-found.component';
import { PhotoListResolver } from './photos/photo-list/photo-list.resolver';
import { SinginComponent } from './home/singin/singin.component';


const routes: Routes = [
  { path: '', component: SinginComponent },
  { path: 'user/:nomeUsuario', component: PhotoListComponent,resolve:{photos:PhotoListResolver} },
  { path: 'p/add', component: PhotoFormComponent },
  { path: '**', component: NotFoundComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

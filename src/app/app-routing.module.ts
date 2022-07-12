import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoticiaAlterarComponent } from './components/noticia/noticia-alterar/noticia-alterar.component';
import { NoticiaCriarComponent } from './components/noticia/noticia-criar/noticia-criar.component';
import { HomeComponent } from './components/views/home/home.component';
import { NoticiasCrudComponent } from './components/views/noticias-crud/noticias-crud.component';

const routes: Routes = [
  {
    path:"",
    component: HomeComponent
  },
  {
    path:"noticias",
    component: NoticiasCrudComponent
  },
  {
    path:"noticias/criar",
    component: NoticiaCriarComponent
  },
  {
    path:"noticias/alterar/:id",
    component: NoticiaAlterarComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

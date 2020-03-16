import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SentinelaGuard } from './sentinela.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./access/access.module')
    .then(mod => mod.AccessModule)
    .catch(errMod => {
      alert('Falha ao carregar o módulo de acesso básico');
      console.error(`app-routing: ${errMod}`);
    })
  },
  {
    path: 'home',
    canActivate: [SentinelaGuard],
    loadChildren: () => import('./posts/posts.module')
    .then(mod => mod.PostsModule)
    .catch(errMod => {
      alert('Falha ao carregar o módulo de postagens');
      console.error(`app-routing: ${errMod}`);
    })
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

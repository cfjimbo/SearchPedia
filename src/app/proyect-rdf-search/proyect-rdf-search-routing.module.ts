import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProyectRdfSearchPage } from './proyect-rdf-search.page';

const routes: Routes = [
  {
    path: '',
    component: ProyectRdfSearchPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProyectRdfSearchPageRoutingModule {}

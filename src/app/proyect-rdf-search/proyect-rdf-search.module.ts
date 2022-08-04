import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProyectRdfSearchPageRoutingModule } from './proyect-rdf-search-routing.module';

import { ProyectRdfSearchPage } from './proyect-rdf-search.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProyectRdfSearchPageRoutingModule
  ],
  declarations: [ProyectRdfSearchPage]
})
export class ProyectRdfSearchPageModule {}

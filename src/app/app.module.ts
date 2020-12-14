import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BuscadorComponent } from './buscador/buscador.component';
import { ListaNegocioComponent } from './lista-negocio/lista-negocio.component';
import { DetalleNegocioComponent } from './detalle-negocio/detalle-negocio.component';
import { FormsModule } from '@angular/forms';
import { FiltroPipe } from './pipes/filtro.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BuscadorComponent,
    ListaNegocioComponent,
    DetalleNegocioComponent,
    FiltroPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

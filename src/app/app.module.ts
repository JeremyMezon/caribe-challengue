import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BuscadorComponent } from './buscador/buscador.component';
import { FiltroPipe } from './filtro.pipe';
import { ListaNegocioComponent } from './lista-negocio/lista-negocio.component';
import { DetalleNegocioComponent } from './detalle-negocio/detalle-negocio.component';

@NgModule({
  declarations: [
    AppComponent,
    BuscadorComponent,
    FiltroPipe,
    ListaNegocioComponent,
    DetalleNegocioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

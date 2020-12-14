import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetalleNegocioComponent } from './detalle-negocio/detalle-negocio.component';
import { ListaNegocioComponent } from './lista-negocio/lista-negocio.component';

const routes: Routes = [
  {
    path: "Lista",
    component: ListaNegocioComponent
  },
  {
    path: "Negocio",
    component: DetalleNegocioComponent
  },
  {
    path: "",
    component: ListaNegocioComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

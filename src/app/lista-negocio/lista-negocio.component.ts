import { Component, OnInit } from '@angular/core';
import { Negocios } from '../negocios';
import { NegociosService } from '../servicios/negocios.service';

@Component({
  selector: 'app-lista-negocio',
  templateUrl: './lista-negocio.component.html',
  styleUrls: ['./lista-negocio.component.css']
})
export class ListaNegocioComponent implements OnInit {

  negocio: Negocios[];
  constructor(private negociosService: NegociosService) { }

  ngOnInit(): void {
    this.negociosService.getNegocios()
    .subscribe((negocios: Negocios[]) => {
      this.negocio = negocios;
      console.log(negocios);
    });
  }

}

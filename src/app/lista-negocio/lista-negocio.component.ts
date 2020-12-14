import { Component, OnInit } from '@angular/core';
import { Negocios } from '../negocios';
import { NegociosService } from '../servicios/negocios.service';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-lista-negocio',
  templateUrl: './lista-negocio.component.html',
  styleUrls: ['./lista-negocio.component.css']
})
export class ListaNegocioComponent implements OnInit {

  negocio: Negocios[];
  idNegocio: Observable<Negocios>;  

  constructor(private negociosService: NegociosService) {}

  filtroNombre = "";

  ngOnInit(): void {
    this.getDataFromService();
    console.log(this.negocio);
  }

  private getDataFromService(): void{
    this.negociosService.getNegocios()
    .subscribe((negocios: Negocios[]) => {
      this.negocio = negocios;
      console.log(negocios);
    });
  }

  // private onUrlChanged(): void{
  //   this.router.events.pipe(filter((event) => event instanceof NavigationEnd))
  //   .subscribe(()=>{
  //     this.negocio = [],
  //     this.getNegociosByQuery()
  //   })
  // }

  //Metodo para filtrar en la API
  // private getNegociosByQuery(): void{
  //   this.route.queryParams.pipe(
  //     take(1) ).subscribe((params:ParamMap) =>{
  //       console.log(params);
  //       this.query = params['q'];
  //       this.getDataFromService();
  //     });
  // }

  getTodo(){
    this.negociosService.getTodo().subscribe((data:any)=>{
      this.negocio = data;
    },(err)=>{console.log(err)})
  }

  // private getNegociosById(): void{
  //   this.route.params.pipe( take(1)).subscribe((params)=>{
  //     const id = params["id"];
  //     this.negocio = this.negociosService.getIdNegocio(id);
  //   });
  // }

}

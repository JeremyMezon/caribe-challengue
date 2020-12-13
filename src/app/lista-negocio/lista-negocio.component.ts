import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, ParamMap, Router } from '@angular/router';
import { Negocios } from '../negocios';
import { NegociosService } from '../servicios/negocios.service';

import { filter, take } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-lista-negocio',
  templateUrl: './lista-negocio.component.html',
  styleUrls: ['./lista-negocio.component.css']
})
export class ListaNegocioComponent implements OnInit {

  negocio: Negocios[];
  idNegocio: Observable<Negocios>;  
  private query: string;

  constructor(
    private negociosService: NegociosService,
    private route:ActivatedRoute,
    private router:Router
    ) {
      this.onUrlChanged();
     }

  ngOnInit(): void {
    this.getNegociosByQuery();
  }

  private onUrlChanged(): void{
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd))
    .subscribe(()=>{
      this.negocio = [],
      this.getNegociosByQuery()
    })
  }

  //Metodo para filtrar en la API
  private getNegociosByQuery(): void{
    this.route.queryParams.pipe(
      take(1) ).subscribe((params:ParamMap) =>{
        console.log(params);
        this.query = params['q'];
        this.getDataFromService();
      });
  }

  private getDataFromService(): void{
    this.negociosService.getNegocios()
    .subscribe((negocios: Negocios[]) => {
      this.negocio = negocios;
      console.log(negocios);
    });
  }

  // private getNegociosById(): void{
  //   this.route.params.pipe( take(1)).subscribe((params)=>{
  //     const id = params["id"];
  //     this.negocio = this.negociosService.getIdNegocio(id);
  //   });
  // }

}

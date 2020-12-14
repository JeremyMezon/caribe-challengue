import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Negocios } from '../negocios';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NegociosService {

  
  constructor(private httpClient: HttpClient) { }

  private rutaApi = environment.baseUrlAPI;

  buscarNegocio(query = ''){
    return this.httpClient.get<Negocios[]>(`${environment.baseUrlAPI}/name=${query}`)
  }

  getIdNegocio(id:string){
    return this.httpClient.get<Negocios>(`${environment.baseUrlAPI}/${id}`)
  }

  getNegocios(): Observable<Negocios[]>{
    return this.httpClient.get<Negocios[]>(`${environment.baseUrlAPI}`)
  }

  getTodo(){
    return this.httpClient.get(this.rutaApi);
  }

}

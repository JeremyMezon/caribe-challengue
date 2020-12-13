import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Negocios } from '../negocios';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NegociosService {

  constructor(private httpClient: HttpClient) { }

  getNegocios(): Observable<Negocios[]>{
    return this.httpClient.get<Negocios[]>('https://5fcfc9341f23740016630db3.mockapi.io/api/v1/business')
  }
}

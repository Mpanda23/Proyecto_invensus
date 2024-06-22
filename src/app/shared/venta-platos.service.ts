import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ventaModel } from './ventaplatos.model';

@Injectable({
  providedIn: 'root'
})
export class VentaPlatosService {

  BASE_URL = "http://localhost:3000"; // Corregir la URL localhost

  constructor(private http: HttpClient) { }

  venderPlato(venta: ventaModel){
    return this.http.post<string>(`${this.BASE_URL}/venta-platos`, venta);
  }
}

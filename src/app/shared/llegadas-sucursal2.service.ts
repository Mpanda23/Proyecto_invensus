import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { llegadasSucursal2Model } from './llegadas-sucursal2.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LlegadasSucursal2Service {

  BASE_URL = "https://apiinvensus.onrender.com";

  constructor(private http: HttpClient) { }

  obtenerLlegadasSucursal2() {
    return this.http.get<llegadasSucursal2Model[]>(`${this.BASE_URL}/llegadas-sucursal2`);
  }

  agregarLlegadasSucursal2(llegadas1: llegadasSucursal2Model) {
    return this.http.post<string>(`${this.BASE_URL}/llegadas-sucursal2/agregar`, llegadas1);
  }

  actualizarCantidadTotal(idproducto: string, nuevaCantidad: number): Observable<any> {
    const url = `${this.BASE_URL}/actualizar-cantidad-sucursal2`; // Reemplaza 'actualizar-cantidad-sucursal1' con la ruta correcta en tu backend
    const payload = { idproducto, nuevaCantidad };
    return this.http.put<any>(url, payload);
  }

}

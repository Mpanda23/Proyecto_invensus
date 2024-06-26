import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { llegadasSucursal3Model } from './llegadas-sucursal3.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LlegadasSucursal3Service {

  BASE_URL = "https://apiinvensus.onrender.com";

  constructor(private http: HttpClient) { }

  obtenerLlegadasSucursal3() {
    return this.http.get<llegadasSucursal3Model[]>(`${this.BASE_URL}/llegadas-sucursal3`);
  }

  agregarLlegadasSucursal3(llegadas3: llegadasSucursal3Model) {
    return this.http.post<string>(`${this.BASE_URL}/llegadas-sucursal3/agregar`, llegadas3);
  }

  actualizarCantidadTotal(idproducto: string, nuevaCantidad: number): Observable<any> {
    const url = `${this.BASE_URL}/actualizar-cantidad-sucursal3`; // Reemplaza 'actualizar-cantidad-sucursal1' con la ruta correcta en tu backend
    const payload = { idproducto, nuevaCantidad };
    return this.http.put<any>(url, payload);
  }

}

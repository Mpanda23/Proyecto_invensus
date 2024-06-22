import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { llegadasSucursal1Model } from './llegadas-sucursal1.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LlegadasSucursal1Service {

  BASE_URL = "http://localhost:3000";

  constructor(private http: HttpClient) { }

  obtenerLlegadasSucursal1(){
    return this.http.get<llegadasSucursal1Model[]>(`${this.BASE_URL}/llegadas-sucursal1`);
  }

  agregarLlegadasSucursal1(llegadas1: llegadasSucursal1Model){
    return this.http.post<string>(`${this.BASE_URL}/llegadas-sucursal1/agregar`, llegadas1);
  }

  actualizarCantidadTotal(idproducto: string, nuevaCantidad: number): Observable<any> {
    const url = `${this.BASE_URL}/actualizar-cantidad-sucursal1`; // Reemplaza 'actualizar-cantidad-sucursal1' con la ruta correcta en tu backend
    const payload = { idproducto, nuevaCantidad };
    return this.http.put<any>(url, payload);
  }
  
}

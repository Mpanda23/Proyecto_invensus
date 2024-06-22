import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Sucursal1Model } from './sucursal1.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Sucursal1Service {

  BASE_URL = "http://localhost:3000";

  constructor(private http: HttpClient) { }

  obtenerSucursal1(){
    return this.http.get<Sucursal1Model[]>(`${this.BASE_URL}/sucursal1`);
  }

  obtenerSucursal1PorId(id: string){
    return this.http.get<Sucursal1Model[]>(`${this.BASE_URL}/sucursal1/${id}`);
  }

  agregarSucursal1(sucursal1: Sucursal1Model){
    return this.http.post<string>(`${this.BASE_URL}/sucursal1/agregar`, sucursal1);
  }

  actualizarSucursal1(sucursal1: Sucursal1Model){
    return this.http.put<string>(`${this.BASE_URL}/sucursal1/actualizar/${sucursal1.idsucursal}`, sucursal1);
  }

  borrarSucursal1(id:string){
    return this.http.delete<string>(`${this.BASE_URL}/sucursal1/borrar/${id}`);
  }

  obtenerCantidad(id:string){
    return this.http.get<number>(`${this.BASE_URL}/sucursal1cantidad/${id}`);
  }

  actualizarCantidad(idSucursal: string, cantidad: number): Observable<string> {
    return this.http.put<string>(`${this.BASE_URL}/sucursal1/actualizarcantidad/${idSucursal}`, { cantidad });
  }
  
  obtenerRegistrosPorFecha(fecha: string) {
    return this.http.get<any[]>(`${this.BASE_URL}/sucursal1fecha/${fecha}`);
  }
}

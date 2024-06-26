import { Injectable } from '@angular/core';
import { Sucursal3Model } from './sucursal3.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Sucursal3Service {

  BASE_URL = "https://apiinvensus.onrender.com";

  constructor(private http: HttpClient) { }

  obtenerSucursal3() {
    return this.http.get<Sucursal3Model[]>(`${this.BASE_URL}/sucursal3`);
  }

  obtenerSucursal3PorId(id: string) {
    return this.http.get<Sucursal3Model[]>(`${this.BASE_URL}/sucursal3/${id}`);
  }

  agregarSucursal3(sucursal3: Sucursal3Model) {
    return this.http.post<string>(`${this.BASE_URL}/sucursal3/agregar`, sucursal3);
  }

  actualizarSucursal3(sucursal3: Sucursal3Model) {
    return this.http.put<string>(`${this.BASE_URL}/sucursal3/actualizar/${sucursal3.idsucursal}`, sucursal3);
  }

  borrarSucursal3(id: string) {
    return this.http.delete<string>(`${this.BASE_URL}/sucursal3/borrar/${id}`);
  }

  obtenerRegistrosPorFecha(fecha: string) {
    return this.http.get<any[]>(`${this.BASE_URL}/sucursal3fecha/${fecha}`);
  }
}

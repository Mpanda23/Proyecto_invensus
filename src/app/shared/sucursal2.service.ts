import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Sucursal2Model } from './sucursal2.model';

@Injectable({
  providedIn: 'root'
})
export class Sucursal2Service {

  BASE_URL = "https://apiinvensus.onrender.com";

  constructor(private http: HttpClient) { }

  obtenerSucursal2() {
    return this.http.get<Sucursal2Model[]>(`${this.BASE_URL}/sucursal2`);
  }

  obtenerSucursal2PorId(id: string) {
    return this.http.get<Sucursal2Model[]>(`${this.BASE_URL}/sucursal2/${id}`);
  }

  agregarSucursal2(sucursal2: Sucursal2Model) {
    return this.http.post<string>(`${this.BASE_URL}/sucursal2/agregar`, sucursal2);
  }

  actualizarSucursal2(sucursal2: Sucursal2Model) {
    return this.http.put<string>(`${this.BASE_URL}/sucursal2/actualizar/${sucursal2.idsucursal}`, sucursal2);
  }

  borrarSucursal2(id: string) {
    return this.http.delete<string>(`${this.BASE_URL}/sucursal2/borrar/${id}`);
  }

  obtenerRegistrosPorFecha(fecha: String) {
    return this.http.get<any[]>(`${this.BASE_URL}/sucursal2fecha/${fecha}`);
  }
}

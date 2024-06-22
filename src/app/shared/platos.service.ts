import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PlatosModel } from './platos.model';
import { Observable } from 'rxjs';
import { ProductoModel } from './producto.model';

@Injectable({
    providedIn: 'root'
})

export class PlatosService {

  BASE_URL = "http://localhost:3000";

  constructor(private http: HttpClient) { }

  obtenerProductosPrincipales(): Observable<ProductoModel[]> {
    return this.http.get<ProductoModel[]>(`${this.BASE_URL}/productos`);
}

obtenerPlatosActivos(): Observable<PlatosModel[]> {
    return this.http.get<PlatosModel[]>(`${this.BASE_URL}/platos/activos`);
}

obtenerPlatosInactivos(): Observable<PlatosModel[]> { // Agregar este método
    return this.http.get<PlatosModel[]>(`${this.BASE_URL}/platos/inactivos`);
}

obtenerPlatosPorId(id: string): Observable<PlatosModel[]> {
    return this.http.get<PlatosModel[]>(`${this.BASE_URL}/platos/${id}`);
}

agregarPlatos(platos: PlatosModel): Observable<string> {
    return this.http.post<string>(`${this.BASE_URL}/platos/agregar`, platos);
}

actualizarPlatos(platos: PlatosModel): Observable<string> {
    return this.http.put<string>(`${this.BASE_URL}/platos/actualizar/${platos.idplatos}`, platos);
}

borrarPlatos(id: string): Observable<string> {
    return this.http.delete<string>(`${this.BASE_URL}/platos/borrar/${id}`);
}

validateNombre(nombre: string): boolean {
  const pattern = /^[a-zA-Z\s]*$/;
  return pattern.test(nombre);
}
  }

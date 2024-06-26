import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProveedoresModel } from './proveedores.model'; // Asegúrate de usar el nombre correcto del modelo
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProveedoresService {

  BASE_URL = "https://apiinvensus.onrender.com";

  constructor(private http: HttpClient) { }

  obtenerProveedores() {
    return this.http.get<ProveedoresModel[]>(`${this.BASE_URL}/proveedores`);
  }

  obtenerProveedoresPorId(id: string) {
    return this.http.get<ProveedoresModel[]>(`${this.BASE_URL}/proveedores/${id}`);
  }

  agregarProveedores(proveedores: ProveedoresModel) {
    return this.http.post<string>(`${this.BASE_URL}/proveedores/agregar`, proveedores);
  }

  actualizarProveedores(proveedores: ProveedoresModel) {
    return this.http.put<string>(`${this.BASE_URL}/proveedores/actualizar/${proveedores.idproveedores}`, proveedores);
  }

  borrarProveedores(id: string) {
    return this.http.delete<string>(`${this.BASE_URL}/proveedores/borrar/${id}`);
  }

  obtenerProveedoresActivos(): Observable<ProveedoresModel[]> {
    return this.http.get<ProveedoresModel[]>(`${this.BASE_URL}/proveedores/activos`);
  }

  obtenerProveedoresInactivos(): Observable<ProveedoresModel[]> {
    return this.http.get<ProveedoresModel[]>(`${this.BASE_URL}/proveedores/inactivos`);
  }

  verificarProveedorExistente(nombre: string): Observable<boolean> {
    const url = `${this.BASE_URL}/proveedores/exists/${encodeURIComponent(nombre)}`;
    return this.http.get<boolean>(url);
  }
  verificarDireccionExistente(direccion: string): Observable<boolean> {
    const url = `${this.BASE_URL}/proveedores/exists/direccion/${encodeURIComponent(direccion)}`;
    return this.http.get<boolean>(url);
  }
  verificarCorreoExistente(correo: string): Observable<boolean> {
    const url = `${this.BASE_URL}/proveedores/exists/correo/${encodeURIComponent(correo)}`;
    return this.http.get<boolean>(url);
  }
  verificarTelefonoExistente(telefono: string): Observable<boolean> {
    const url = `${this.BASE_URL}/proveedores/exists/telefono/${encodeURIComponent(telefono)}`;
    return this.http.get<boolean>(url);
  }
}

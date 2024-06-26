import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuariosModel } from './usuarios.model';
import { RegistroUsuario } from './registro-usuario'; // Importa el modelo de registro de usuario
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  BASE_URL = "https://apiinvensus.onrender.com"; // Define la URL base de tu API

  constructor(private http: HttpClient) { }

  obtenerUsuarios() {
    return this.http.get<UsuariosModel[]>(`${this.BASE_URL}/usuarios`);
  }

  obtenerUsuariosPorId(id: string) {
    return this.http.get<UsuariosModel[]>(`${this.BASE_URL}/usuarios/${id}`);
  }

  // Método para agregar un nuevo usuario
  agregaruUsuarios(usuario: RegistroUsuario) {
    return this.http.post<any>(`${this.BASE_URL}/usuarios/agregar`, usuario);
  }

  // Método para registrar un nuevo usuario
  registrarUsuario(usuario: RegistroUsuario) {
    return this.http.post<any>(`${this.BASE_URL}/usuarios/registro`, usuario);
  }


  actualizarUsuarios(usuarios: UsuariosModel) {
    return this.http.put<string>(`${this.BASE_URL}/usuarios/actualizar/${usuarios.idusuarios}`, usuarios);
  }

  borrarUsuarios(id: string) {
    return this.http.delete<string>(`${this.BASE_URL}/usuarios/borrar/${id}`);
  }


  obtenerUsuariosActivos(): Observable<UsuariosModel[]> {
    return this.http.get<UsuariosModel[]>(`${this.BASE_URL}/usuarios/activos`);
  }

  obtenerUsuariosInactivos(): Observable<UsuariosModel[]> {
    return this.http.get<UsuariosModel[]>(`${this.BASE_URL}/usuarios/inactivos`);
  }
  verificarUsuariosExistente(nombre: string): Observable<boolean> {
    const url = `${this.BASE_URL}/usuarios/exists/${encodeURIComponent(nombre)}`;
    return this.http.get<boolean>(url);
  }
  verificarIdentificacionExistente(identificacion: string): Observable<boolean> {
    const url = `${this.BASE_URL}/usuarios/exists/identificacion/${encodeURIComponent(identificacion)}`;
    return this.http.get<boolean>(url);
  }
  verificarCorreoExistente(correo: string): Observable<boolean> {
    const url = `${this.BASE_URL}/usuarios/exists/correo/${encodeURIComponent(correo)}`;
    return this.http.get<boolean>(url);
  }
  verificarTelefonoExistente(telefono: string): Observable<boolean> {
    const url = `${this.BASE_URL}/usuarios/exists/telefono/${encodeURIComponent(telefono)}`;
    return this.http.get<boolean>(url);
  }
}
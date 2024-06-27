import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'https://apiinvensus.onrender.com/';

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    const loginData = { usu_nombre: username, usu_contrasena: password };

    return this.http.post<any>(`${this.apiUrl}/login`, loginData);
  }

  register(username: string, email: string, password: string): Observable<any> {
    const registerData = { username, email, password };

    return this.http.post<any>(`${this.apiUrl}/register`, registerData);
  }

  verificarEstadoCuenta(idUsuario: number): Observable<any> {
    // Aquí puedes hacer una solicitud HTTP al backend para obtener el estado de la cuenta del usuario
    return this.http.get<any>(`${this.apiUrl}/usuarios/${idUsuario}`);
  }
}

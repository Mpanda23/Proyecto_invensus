import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlertasEnviadasService {
  constructor(private http: HttpClient) {}

  getAlertasEnviadas(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:5000/alertasenviadas'); // Reemplaza 'puerto' con el puerto de tu servidor Node.js
  }
}
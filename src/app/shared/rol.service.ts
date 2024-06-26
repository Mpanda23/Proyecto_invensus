import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RolModel } from './rol.model';

@Injectable({
  providedIn: 'root'
})
export class RolService {
  private BASE_URL = "https://apiinvensus.onrender.com";

  constructor(private http: HttpClient) { }

  obtenerRoles(): Observable<RolModel[]> {
    return this.http.get<RolModel[]>(`${this.BASE_URL}/roles`);
  }
}

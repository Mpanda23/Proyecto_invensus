import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GeneroModel } from './genero.model';

@Injectable({
  providedIn: 'root'
})
export class GeneroService {
  private BASE_URL = "https://apiinvensus.onrender.com";

  constructor(private http: HttpClient) { }

  obtenerGeneros(): Observable<GeneroModel[]> {
    return this.http.get<GeneroModel[]>(`${this.BASE_URL}/genero`);
  }
}

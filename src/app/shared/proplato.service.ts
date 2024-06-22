import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { ProplatoModel } from './proplato.model';

@Injectable({
  providedIn: 'root'
})
export class ProplatoService {

  BASE_URL = "http://localhost:3000";

  constructor(private http: HttpClient) { }

  obtenerProplato() {
    return this.http.get<ProplatoModel[]>(`${this.BASE_URL}/proplato`);
  }

  obtenerProplatoPorId(id: string) {
    return this.http.get<ProplatoModel[]>(`${this.BASE_URL}/proplato/${id}`);
  }

  agregarProplato(proplato: ProplatoModel) {
    return this.http.post<string>(`${this.BASE_URL}/proplato/agregar`, proplato);
  }

  actualizarProplato(proplato: ProplatoModel): Observable<string> {
    return this.http.post<string>(`${this.BASE_URL}/proplato/actualizar/${proplato.proplaid}`, proplato);
  }

  obtenerDetallesProplato(id: string): Observable<ProplatoModel> {
    return this.http.get<ProplatoModel>(`${this.BASE_URL}/proplato/detalles/${id}`).pipe(
      catchError(error => {
        console.error('Error al obtener los detalles del plato:', error);
        throw 'Ocurrió un error al obtener los detalles del plato.';
      })
    );
  }
  generarOrden(id: string): Observable<any> {
    return this.http.put<any>(`${this.BASE_URL}/proplato/${id}/productos`, null);
}
}

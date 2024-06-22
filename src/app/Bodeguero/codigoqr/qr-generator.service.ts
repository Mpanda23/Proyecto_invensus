import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QrGeneratorService {
  private apiUrl = 'http://localhost:4000';
  constructor(private http: HttpClient) {}

  getProductosQR(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/productos/qr`);
  }

  generateQR(id: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/productos/qr`, { id });
  }
}

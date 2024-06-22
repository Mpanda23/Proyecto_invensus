import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export class PlatosModel {

  constructor(
    public idplatos: string,
    public pla_nombre: string,
    public pla_descripcion: string,
    public pla_precio: string,
    public pla_tiempopre: string,
    public idproducto: string,
    public estado: string,
  ) {}

  static obtenerProductosPrincipales(http: HttpClient, BASE_URL: string): Observable<any[]> {
    return http.get<any[]>(`${BASE_URL}/productos`);
  }
  }

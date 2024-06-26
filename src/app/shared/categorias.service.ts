import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CategoriasModel } from './categorias.model'; // Asegúrate de usar el nombre correcto del modelo
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  BASE_URL = "https://apiinvensus.onrender.com";

  constructor(private http: HttpClient) { }

  obtenerCategorias() {
    return this.http.get<CategoriasModel[]>(`${this.BASE_URL}/categorias`);
  }

  obtenerCategoriasPorId(id: string) {
    return this.http.get<CategoriasModel[]>(`${this.BASE_URL}/categorias/${id}`);
  }

  agregarCategorias(categorias: CategoriasModel) {
    return this.http.post<string>(`${this.BASE_URL}/categorias/agregar`, categorias);
  }

  actualizarCategorias(categorias: CategoriasModel) {
    return this.http.put<string>(`${this.BASE_URL}/categorias/actualizar/${categorias.idcategoria}`, categorias);
  }

  borrarCategorias(id: string) {
    return this.http.delete<string>(`${this.BASE_URL}/categorias/borrar/${id}`);
  }

}

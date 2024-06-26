import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SubcategoriaModel } from './subcategoria.model'; // Asegúrate de usar el nombre correcto del modelo

@Injectable({
  providedIn: 'root'
})
export class SubcategoriaService {

  BASE_URL = "https://apiinvensus.onrender.com";

  constructor(private http: HttpClient) { }

  obtenerSubcategorias() {
    return this.http.get<SubcategoriaModel[]>(`${this.BASE_URL}/subcategorias`);
  }

  obtenerSubcategoriaPorId(id: string) {
    return this.http.get<SubcategoriaModel[]>(`${this.BASE_URL}/subcategorias/${id}`);
  }

  agregarSubcategoria(subcategoria: SubcategoriaModel) {
    return this.http.post<string>(`${this.BASE_URL}/subcategorias/agregar`, subcategoria);
  }

  actualizarSubcategoria(subcategoria: SubcategoriaModel) {
    return this.http.put<string>(`${this.BASE_URL}/subcategorias/actualizar/${subcategoria.idsubcategorias}`, subcategoria);
  }

  borrarSubcategoria(id: string) {
    return this.http.delete<string>(`${this.BASE_URL}/subcategorias/borrar/${id}`);
  }
}
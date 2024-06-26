import { Injectable } from '@angular/core';
import { ProductoModel } from '../shared/producto.model';
import { HttpClient } from '@angular/common/http';
import { Sucursal1Model } from './sucursal1.model';
import { Sucursal2Model } from './sucursal2.model';
import { Sucursal3Model } from './sucursal3.model';
import { Observable } from 'rxjs';
import { llegadasSucursal1Model } from './llegadas-sucursal1.model';
import { llegadasSucursal2Model } from './llegadas-sucursal2.model';
import { llegadasSucursal3Model } from './llegadas-sucursal3.model';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  BASE_URL = "https://apiinvensus.onrender.com";

  constructor(private http: HttpClient) { }

  obtenerProductos() {
    return this.http.get<ProductoModel[]>(`${this.BASE_URL}/productos`);
  }

  obtenerProductoPorId(id: string) {
    return this.http.get<ProductoModel>(`${this.BASE_URL}/productos/${id}`);
  }

  agregarProducto(producto: ProductoModel) {
    return this.http.post<string>(`${this.BASE_URL}/productos/agregar`, producto);
  }

  actualizarProducto(producto: ProductoModel) {
    return this.http.put<string>(`${this.BASE_URL}/productos/actualizar/${producto.idproducto}`, producto);
  }

  borrarProducto(id: string) {
    return this.http.delete<string>(`${this.BASE_URL}/productos/borrar/${id}`);
  }

  obtenerSucursal1SinRegistro() {
    return this.http.get<Sucursal1Model[]>(`${this.BASE_URL}/sucursal1noregistrado`);
  }

  obtenerSucursal2SinRegistro() {
    return this.http.get<Sucursal2Model[]>(`${this.BASE_URL}/sucursal2noregistrado`);
  }

  obtenerSucursal3SinRegistro() {
    return this.http.get<Sucursal3Model[]>(`${this.BASE_URL}/sucursal3noregistrado`)
  }

  obtenerSuma(id: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.BASE_URL}/sucursalessuma/${id}`);
  }

  obtenerProductosSucursal1() {
    return this.http.get<llegadasSucursal1Model[]>(`${this.BASE_URL}/llegadas-sucursal1-productos`);
  }

  obtenerProductosSucursal2() {
    return this.http.get<llegadasSucursal2Model[]>(`${this.BASE_URL}/llegadas-sucursal2-productos`);
  }

  obtenerProductosSucursal3() {
    return this.http.get<llegadasSucursal3Model[]>(`${this.BASE_URL}/llegadas-sucursal3-productos`);
  }

  verificarNombreProducto(nombre: string): Observable<boolean> {
    return this.http.get<boolean>(`${this.BASE_URL}/productos/verificarNombre/${nombre}`);
  }

  obtenerValorMultiplicado(id: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.BASE_URL}/total-valor/${id}`);
  }

}

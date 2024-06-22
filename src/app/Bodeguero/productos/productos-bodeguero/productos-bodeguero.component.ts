import { Component, OnInit } from '@angular/core';
import { Observable, forkJoin, } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ProductoService } from 'src/app/shared/producto.service';
import { ProductoModel } from 'src/app/shared/producto.model';
import { CategoriasService } from 'src/app/shared/categorias.service';
import { ProveedoresService } from 'src/app/shared/proveedores.service';
import { of } from 'rxjs';

@Component({
  selector: 'app-productos-bodeguero',
  templateUrl: './productos-bodeguero.component.html',
  styleUrls: ['./productos-bodeguero.component.css']
})
export class ProductosBodegueroComponent implements OnInit {
  productos$: Observable<ProductoModel[]> | undefined;
  categorias: any[] = [];
  proveedores: any[] = [];

  constructor(
    private productoService: ProductoService,
    private categoriasService: CategoriasService,
    private proveedoresService: ProveedoresService
  ) { }

  ngOnInit() {
    this.productos$ = forkJoin({
      productos: this.productoService.obtenerProductos(),
      categorias: this.categoriasService.obtenerCategorias(),
      proveedores: this.proveedoresService.obtenerProveedores()
    }).pipe(
      switchMap(data => {
        this.categorias = data.categorias;
        this.proveedores = data.proveedores;
        return this.actualizarNombresProveedores(data.productos);
      })
    );
  }
  private actualizarNombresProveedores(productos: ProductoModel[]): Observable<ProductoModel[]> {
    const productosActualizados = productos.map(producto => {
      return { ...producto, nombreProveedor: this.obtenerNombreProveedor(producto.idproveedores) };
    });
    return of(productosActualizados);
  }


  borrarProducto(id: string) {
    this.productoService.borrarProducto(id).subscribe((data: any) => {
      console.log(data);
    });
  }

  formatearFecha(fecha: string): string {
    const date = new Date(fecha);
    return date.toISOString().split('T')[0];
  }

  obtenerNombreCategoria(idCategoria: string): string {
    const categoria = this.categorias.find(c => c.idcategoria === idCategoria);
    return categoria ? categoria.cat_nombre : 'Categoría no encontrada';
  }

  obtenerNombreProveedor(idproveedores: string): string {
    const proveedor = this.proveedores.find(p => p.idproveedores === idproveedores);
    return proveedor ? proveedor.pro_nombre : 'Proveedor no encontrada';
  }
}

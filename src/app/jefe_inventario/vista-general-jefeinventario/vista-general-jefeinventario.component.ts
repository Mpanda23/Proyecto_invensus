import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { CategoriasService } from 'src/app/shared/categorias.service';
import { ProductoService } from 'src/app/shared/producto.service';
import { Sucursal1Service } from 'src/app/shared/sucursal1.service';
import { Sucursal2Service } from 'src/app/shared/sucursal2.service';
import { Sucursal3Service } from 'src/app/shared/sucursal3.service';

@Component({
  selector: 'app-vista-general-jefeinventario',
  templateUrl: './vista-general-jefeinventario.component.html',
  styleUrls: ['./vista-general-jefeinventario.component.css']
})
export class VistaGeneralJefeinventarioComponent implements OnInit {

  id = '';
  categorias: any[] = [];
  producto: any[] = [];
  sucursal1: any[] = [];
  cantidadproductosucursal2: any[] = [];
  cantidadproductosucursal3: any[] = [];
  suma: any = {};
  productosConCantidadesTotales: any[] = [];

  constructor(
    private productoService: ProductoService,
    private sucursal1Service: Sucursal1Service,
    private sucursal2Service: Sucursal2Service,
    private sucursal3Service: Sucursal3Service,
    private categoriasService: CategoriasService
  ) { }

  ngOnInit() {
    this.productoService.obtenerProductos().subscribe((data: any[]) => {
      this.producto = data;
    });

    forkJoin([
      this.productoService.obtenerProductos(),
      this.productoService.obtenerSuma(this.id)
    ]).subscribe(([productos, sumas]) => {
      this.productosConCantidadesTotales = productos.map(producto => {
        const suma = sumas.find((s: any) => s.idproducto === producto.idproducto);
        return {
          ...producto,
          cantidad_total: suma ? suma.cantidad_total : 0
        };
      });
    }, error => {
      console.error('Error al obtener productos o sumas:', error);
    });

    forkJoin([
      this.productoService.obtenerProductos(),
      this.productoService.obtenerSuma(this.id),
      this.productoService.obtenerValorMultiplicado(this.id)
    ]).subscribe(([productos, sumas, valoresMultiplicados]) => {
      console.log('Productos:', productos);
      console.log('Sumas:', sumas);
      console.log('Valores multiplicados:', valoresMultiplicados);

      this.productosConCantidadesTotales = productos.map(producto => {
        const suma = sumas.find((s: any) => s.idproducto === producto.idproducto);
        const cantidadTotal = suma ? suma.cantidad_total : 0;
        const cantidadMultiplicada = valoresMultiplicados.find((v: any) => v.idproducto === producto.idproducto);
        console.log('Producto:', producto);
        console.log('Suma:', suma);
        console.log('Cantidad total:', cantidadTotal);
        console.log('Cantidad multiplicada:', cantidadMultiplicada);

        return {
          ...producto,
          cantidad_total: cantidadTotal,
          cantidad_multiplicada: cantidadMultiplicada ? cantidadMultiplicada.cantidad_multiplicada : 0
        };
      });
    }, error => {
      console.error('Error al obtener productos, sumas o valores multiplicados:', error);
    });

    this.sucursal1Service.obtenerSucursal1().subscribe((data: any[]) => {
      this.sucursal1 = data;
    });

    this.sucursal2Service.obtenerSucursal2().subscribe((data: any[]) => {
      this.cantidadproductosucursal2 = data;
    });

    this.sucursal3Service.obtenerSucursal3().subscribe((data: any[]) => {
      this.cantidadproductosucursal3 = data;
    });

    this.categoriasService.obtenerCategorias().subscribe((data: any[]) => {
      this.categorias = data;
    });
  }

  obtenerNombreProducto(prod_nombre: string): string {
    const producto = this.producto.find(a => a.prod_nombre === prod_nombre);
    return producto ? producto.prod_nombre : 'Nombre no encontrado';
  }

  obtenerCantidadSucursal1(idproducto: string): string {
    const sucursal1 = this.sucursal1.find(b => b.idproducto === idproducto);
    return sucursal1 ? sucursal1.cantidad_producto : 'Cantidad no encontrada';
  }

  obtenerCantidadSucursal2(idproducto: string): string {
    const sucursal2 = this.cantidadproductosucursal2.find(c => c.idproducto === idproducto);
    return sucursal2 ? sucursal2.cantidad_producto : 'Cantidad no encontrada';
  }

  obtenerCantidadSucursal3(idproducto: string): string {
    const sucursal3 = this.cantidadproductosucursal3.find(d => d.idproducto === idproducto);
    return sucursal3 ? sucursal3.cantidad_producto : 'Cantidad no encontrada';
  }

  obtenerNombreCategoria(idCategoria: string): string {
    const categoria = this.categorias.find(c => c.idcategoria === idCategoria);
    return categoria ? categoria.cat_nombre : 'Categoría no encontrada';
  }

  obtenerSuma(idproducto: string): number {
    if (this.suma && this.suma[idproducto]) {
      console.log(this.suma);
      return this.suma[idproducto].cantidad_total;
    } else {
      return 0;
    }
  }

  calcularCantidadesTotales() {
    if (this.producto.length > 0 && Object.keys(this.suma).length > 0) {
      this.productosConCantidadesTotales = this.producto.map(prod => ({
        idproducto: prod.idproducto,
        prod_nombre: prod.prod_nombre,
        cantidad_total: this.obtenerCantidadTotal(prod.idproducto)
      }));
    }
  }

  actualizarCantidadesTotales() {
    this.productosConCantidadesTotales = this.producto.map(prod => ({
      idproducto: prod.idproducto,
      prod_nombre: prod.prod_nombre,
      cantidad_total: this.obtenerCantidadTotal(prod.idproducto)
    }));
  }

  obtenerCantidadTotal(idproducto: string): number {
    if (this.suma && this.suma[idproducto]) {
      console.log(this.suma);
      return this.suma[idproducto].cantidad_total;
    } else {
      return 0;
    }
  }
}

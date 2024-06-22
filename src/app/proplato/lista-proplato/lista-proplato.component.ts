import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoriasService } from 'src/app/shared/categorias.service';
import { PlatosService } from 'src/app/shared/platos.service';
import { ProductoService } from 'src/app/shared/producto.service';
import { ProplatoModel } from 'src/app/shared/proplato.model';
import { ProplatoService } from 'src/app/shared/proplato.service';

@Component({
  selector: 'app-lista-proplato',
  templateUrl: './lista-proplato.component.html',
  styleUrls: ['./lista-proplato.component.css']
})
export class ListaProplatoComponent {
  proplatos: Observable<ProplatoModel[]> | undefined;
  categorias: any[] = [];  // Declara la variable categorías
  platos: any[] = [];
  productos: any[] = [];

  constructor(private proplatoService: ProplatoService, private categoriasService: CategoriasService, private platosService: PlatosService, private productoService: ProductoService) { }

  ngOnInit() {
    this.proplatos = this.proplatoService.obtenerProplato();
    // Obtén las categorías al iniciar el componente
    this.categoriasService.obtenerCategorias().subscribe((data: any[]) => {
      this.categorias = data;
    });
      this.platosService.obtenerPlatosActivos().subscribe((data: any[]) => {
        this.platos = data;
    });
    this.productoService.obtenerProductos().subscribe((data: any[]) => {
      this.productos = data;
  });
  }
  obtenerNombreCategoria(idCategoria: string): string {
    const categoria = this.categorias.find(c => c.idcategoria === idCategoria);
    return categoria ? categoria.cat_nombre : 'Categoría no encontrada';
  }
  obtenerNombrePlato(idPlatos: string): string {
    const plato = this.platos.find(p => p.idplatos === idPlatos);
    return plato ? plato.pla_nombre : 'Plato no encontrado';
}

  obtenerNombreProducto(idProducto: string): string {
    const producto = this.productos.find(pr => pr.idproducto === idProducto);
    return producto ? producto.prod_nombre : 'producto no encontrada';
  }

  generarOrden(proplato: ProplatoModel) {
    this.proplatoService.generarOrden(proplato.proplaid).subscribe(
        (response) => {
            console.log('Productos del plato eliminados exitosamente:', response.message);
            if (response && response.message === 'No hay productos suficientes para este plato') {
                alert('No hay productos suficientes para esta orden');
            } else {
                alert('Orgen generada correctamente.');
            }
        },
        (error: any) => {
            console.error('Error al generar la orden:', error);
            alert('Error al generar la orden');
        }
    );
}

}

import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoriasService } from 'src/app/shared/categorias.service';
import { PlatosService } from 'src/app/shared/platos.service';
import { ProductoService } from 'src/app/shared/producto.service';
import { ProplatoModel } from 'src/app/shared/proplato.model';
import { ProplatoService } from 'src/app/shared/proplato.service';

@Component({
  selector: 'app-vista-plato',
  templateUrl: './vista-plato.component.html',
  styleUrls: ['./vista-plato.component.css']
})
export class VistaPlatoComponent {
  proplato: ProplatoModel | undefined;
  error: string | undefined;
  proplaid: string='';
  categorias: any[] = [];
  platos: any[] = [];
  productos: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private proplatoService: ProplatoService,
    private categoriasService: CategoriasService,
    private platosService: PlatosService,
    private productoService: ProductoService

  ) { }

  ngOnInit(): void {
    this.proplaid = this.route.snapshot.params['id']; // Cambiar a proplaid
    if (this.proplaid) {
      this.obtenerDetallesPlato(this.proplaid); // Cambiar a proplaid
    } else {
      console.error('ID del plato no proporcionado.');
    }
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

  obtenerDetallesPlato(proplaid: string): void { // Cambiar a proplaid
    console.log('ID del plato:', proplaid); // Verifica si el ID se está recibiendo correctamente
    this.proplatoService.obtenerDetallesProplato(proplaid).subscribe({
      next: (data) => {
        this.proplato = data;
        console.log('Datos del plato:', this.proplato); // Verifica si los datos se están recibiendo correctamente
      },
      error: (error) => {
        console.error('Error al obtener los detalles del plato:', error);
        this.error = 'Ocurrió un error al obtener los detalles del plato.';
      }
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

}

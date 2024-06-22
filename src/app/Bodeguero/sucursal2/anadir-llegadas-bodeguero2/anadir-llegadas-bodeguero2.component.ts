import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { llegadasSucursal2Model } from 'src/app/shared/llegadas-sucursal2.model';
import { LlegadasSucursal2Service } from 'src/app/shared/llegadas-sucursal2.service';
import { ProductoService } from 'src/app/shared/producto.service';

@Component({
  selector: 'app-anadir-llegadas-bodeguero2',
  templateUrl: './anadir-llegadas-bodeguero2.component.html',
  styleUrls: ['./anadir-llegadas-bodeguero2.component.css']
})
export class AnadirLlegadasBodeguero2Component implements OnInit {

  id = '';
  llegadas2 = new llegadasSucursal2Model('', '', '', '', '');
  productos: any[] = [];

  constructor(
    private sucursalService: LlegadasSucursal2Service,
    private productoService: ProductoService,
    private route: ActivatedRoute,
    private router: Router
  ){}

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];

    this.productoService.obtenerProductosSucursal2().subscribe((data: any[])=> {
      this.productos = data;
      console.log(this.productos);
    });

    this.llegadas2.fecha_ingreso = this.getFormattedDate();
  }

  onSubmit() {
      console.log('crear');
      if (this.llegadas2.cantidad_llegada) {
        if (!this.validateCantidad(this.llegadas2.cantidad_llegada)) {
          this.sucursalService.agregarLlegadasSucursal2(this.llegadas2).subscribe(data => {
            alert('Producto ingresado correctamente.');
            this.router.navigate(['/sucursal2-bodeguero']);
          });
        } else {
          alert('Por favor, ingrese solo números en cantidad producto.');
        }
      } else {
        alert('Por favor, ingrese la cantidad del producto.');
      }
  }

  getFormattedDate(): string {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
    const day = currentDate.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day} `;
  }

  validateCantidad(cantidad: string): {[key: string]: any} | null {
    const pattern = /[0-9]+/;
    if (!pattern.test(cantidad)) {
      return {'pattern': true};
    }
    return null;
  }

  actualizarCantidadProducto(idProducto: string, nuevaCantidad: string): void {
    const cantidad = parseInt(nuevaCantidad, 10);
    
    this.sucursalService.actualizarCantidadTotal(idProducto, cantidad).subscribe(() => {
      console.log('Cantidad total del producto actualizada correctamente.');
    });
  }  

  ejecutarActualizacionCantidad(): void {
    if (this.llegadas2.idproducto && this.llegadas2.cantidad_llegada) {
      console.log(this.llegadas2)
      this.actualizarCantidadProducto(this.llegadas2.idproducto, this.llegadas2.cantidad_llegada);
    } else {
      alert('Por favor, seleccione un producto y especifique la cantidad.');
    }
  }


}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { llegadasSucursal1Model } from 'src/app/shared/llegadas-sucursal1.model';
import { LlegadasSucursal1Service } from 'src/app/shared/llegadas-sucursal1.service';
import { ProductoService } from 'src/app/shared/producto.service';

@Component({
  selector: 'app-anadir-llegada-bodeguero1',
  templateUrl: './anadir-llegada-bodeguero1.component.html',
  styleUrls: ['./anadir-llegada-bodeguero1.component.css']
})
export class AnadirLlegadaBodeguero1Component implements OnInit {

  id = '';
  llegadas1 = new llegadasSucursal1Model('', '', '', '', '');
  productos: any[] = [];

  constructor(
    private sucursalService: LlegadasSucursal1Service,
    private productoService: ProductoService,
    private route: ActivatedRoute,
    private router: Router
  ){}

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];

    this.productoService.obtenerProductosSucursal1().subscribe((data: any[])=> {
      this.productos = data;
      console.log(this.productos);
    });

    this.llegadas1.fecha_ingreso = this.getFormattedDate();
  }

  onSubmit() {
      console.log('crear');
      if (this.llegadas1.cantidad_llegada) {
        if (!this.validateCantidad(this.llegadas1.cantidad_llegada)) {
          this.sucursalService.agregarLlegadasSucursal1(this.llegadas1).subscribe(data => {
            alert('Producto ingresado correctamente.');
            this.router.navigate(['/sucursal1-bodeguero']);
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
    if (this.llegadas1.idproducto && this.llegadas1.cantidad_llegada) {
      console.log(this.llegadas1)
      this.actualizarCantidadProducto(this.llegadas1.idproducto, this.llegadas1.cantidad_llegada);
    } else {
      alert('Por favor, seleccione un producto y especifique la cantidad.');
    }
  }

}

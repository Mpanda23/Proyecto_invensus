import { Component, OnInit } from '@angular/core';
import { Sucursal1Model } from 'src/app/shared/sucursal1.model';
import { Sucursal1Service } from 'src/app/shared/sucursal1.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductoService } from 'src/app/shared/producto.service';

@Component({
  selector: 'app-editar-sucursal1-bodeguero',
  templateUrl: './editar-sucursal1-bodeguero.component.html',
  styleUrls: ['./editar-sucursal1-bodeguero.component.css']
})
export class EditarSucursal1BodegueroComponent implements OnInit {
 
  id = '';
  sucursal1 = new Sucursal1Model('', '', '', '', '', '');
  productos: any[] = [];

  constructor(
    private sucursalService: Sucursal1Service,
    private productoService: ProductoService,
    private route: ActivatedRoute,
    private router: Router
  ){}

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];

    this.productoService.obtenerSucursal1SinRegistro().subscribe((data: any[])=> {
      this.productos = data;
      console.log('Datos de productos sin registrar:', this.productos);
    });

    this.sucursal1.fecha_ingreso = this.getFormattedDate();
  }

  onSubmit() {
      console.log('crear');
      if (this.sucursal1.cantidad_producto) {
        if (!this.validateCantidad(this.sucursal1.cantidad_producto)) {
          this.sucursalService.agregarSucursal1(this.sucursal1).subscribe(data => {
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
  
}

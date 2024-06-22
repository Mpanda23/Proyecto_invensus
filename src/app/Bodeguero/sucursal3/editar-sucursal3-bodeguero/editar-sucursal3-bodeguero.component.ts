import { Component, OnInit } from '@angular/core';
import { Sucursal3Model } from 'src/app/shared/sucursal3.model';
import { Sucursal3Service } from 'src/app/shared/sucursal3.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductoService } from 'src/app/shared/producto.service';

@Component({
  selector: 'app-editar-sucursal3-bodeguero',
  templateUrl: './editar-sucursal3-bodeguero.component.html',
  styleUrls: ['./editar-sucursal3-bodeguero.component.css']
})
export class EditarSucursal3BodegueroComponent implements OnInit {

  id = '';
  sucursal3 = new Sucursal3Model('', '', '', '', '', '');
  productos: any[] = [];

  constructor(
    private sucursalService: Sucursal3Service,
    private productoService: ProductoService,
    private route: ActivatedRoute,
    private router: Router
  ){}

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];

    this.productoService.obtenerSucursal3SinRegistro().subscribe((data: any[])=> {
      this.productos = data;
      console.log('Datos de productos sin registrar:', this.productos);
    });

    this.sucursal3.fecha_ingreso = this.getFormattedDate();
  }

  onSubmit() {
      console.log('crear');
      if (this.sucursal3.cantidad_producto) {
        if (!this.validateCantidad(this.sucursal3.cantidad_producto)) {
          this.sucursalService.agregarSucursal3(this.sucursal3).subscribe(data => {
            console.log(this.sucursal3);
            alert('Producto ingresado correctamente.');
            this.router.navigate(['/sucursal3-bodeguero']);
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

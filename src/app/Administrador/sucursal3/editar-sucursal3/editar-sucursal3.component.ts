import { Component, OnInit } from '@angular/core';
import { Sucursal3Model } from 'src/app/shared/sucursal3.model';
import { Sucursal3Service } from 'src/app/shared/sucursal3.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductoService } from 'src/app/shared/producto.service';

@Component({
  selector: 'app-editar-sucursal3',
  templateUrl: './editar-sucursal3.component.html',
  styleUrls: ['./editar-sucursal3.component.css']
})
export class EditarSucursal3Component implements OnInit {

  id = '';
  sucursal3 = new Sucursal3Model("","","","","","");
  producto: any[] = [];

  constructor(
    private sucursalService: Sucursal3Service,
    private productoService: ProductoService,
    private route: ActivatedRoute,
    private router: Router
  ){}

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];

    // Obtener productos sin registrar
    this.productoService.obtenerSucursal3SinRegistro().subscribe((data: any[])=> {
      this.producto = data;
      console.log('Datos de productos sin registrar:', this.producto);
    });
    if (this.id) {
      console.log('editar');
      this.sucursalService.obtenerSucursal3PorId(this.id).subscribe((data: any[]) => {
        this.sucursal3 = data[0];
      }, (error: any) => {
        console.log(error);
      });
    } else {
      console.log('crear');
    }
  }

  onSubmit() {
    console.log('onSubmit');

    if (this.sucursal3.idsucursal) {
      if (this.sucursal3.cantidad_producto) {
        if (!this.validateCantidad(this.sucursal3.cantidad_producto)) {
          this.sucursalService.actualizarSucursal3(this.sucursal3).subscribe(data => {
            alert('Categoría actualizada correctamente');
            this.router.navigate(['/sucursal3']);
          });
        } else {
          alert('Por favor, ingrese solo números en cantidad producto.');
        }
      } else {
        alert('Por favor, ingrese la cantidad del producto.');
      }
    }
  }

  validateCantidad(cantidad: string): {[key: string]: any} | null {
    const pattern = /[0-9]+/;
    if (!pattern.test(cantidad)) {
      return {'pattern': true};
    }
    return null;
  }
  

}

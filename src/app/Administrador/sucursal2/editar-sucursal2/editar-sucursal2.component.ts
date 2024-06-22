import { Component, OnInit } from '@angular/core';
import { Sucursal2Model } from 'src/app/shared/sucursal2.model';
import { Sucursal2Service } from 'src/app/shared/sucursal2.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductoService } from 'src/app/shared/producto.service';

@Component({
  selector: 'app-editar-sucursal2',
  templateUrl: './editar-sucursal2.component.html',
  styleUrls: ['./editar-sucursal2.component.css']
})
export class EditarSucursal2Component implements OnInit {

  id = '';
  sucursal2 = new Sucursal2Model("","","","","","");
  producto: any[] = [];

  constructor(
    private sucursalService: Sucursal2Service,
    private productoService: ProductoService,
    private route: ActivatedRoute,
    private router: Router
  ){}

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];

    // Obtener productos sin registrar
    this.productoService.obtenerSucursal2SinRegistro().subscribe((data: any[])=> {
      this.producto = data;
      console.log('Datos de productos sin registrar:', this.producto);
    });
    if (this.id) {
      console.log('editar');
      this.sucursalService.obtenerSucursal2PorId(this.id).subscribe((data: any[]) => {
        this.sucursal2 = data[0];
      });
    } else {
      console.log('crear');
    }
  }

  onSubmit() {
    console.log('onSubmit');

    if (this.sucursal2.idsucursal) {
      if (this.sucursal2.cantidad_producto) {
        if (!this.validateCantidad(this.sucursal2.cantidad_producto)) {
          this.sucursalService.actualizarSucursal2(this.sucursal2).subscribe(data => {
            alert('Categoría actualizada correctamente');
            this.router.navigate(['/sucursal2']);
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

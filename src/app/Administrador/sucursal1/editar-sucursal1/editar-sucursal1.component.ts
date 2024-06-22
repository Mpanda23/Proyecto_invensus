import { Component, OnInit } from '@angular/core';
import { Sucursal1Model } from 'src/app/shared/sucursal1.model';
import { Sucursal1Service } from 'src/app/shared/sucursal1.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductoService } from 'src/app/shared/producto.service';
import { ProductoModel } from 'src/app/shared/producto.model';

@Component({
  selector: 'app-editar-sucursal1',
  templateUrl: './editar-sucursal1.component.html',
  styleUrls: ['./editar-sucursal1.component.css']
})
export class EditarSucursal1Component implements OnInit {

  id = '';
  sucursal1 = new Sucursal1Model('', '', '', '', '', '');
  cantidadProductos: number | undefined;

  constructor(
    private sucursalService: Sucursal1Service,
    private productoService: ProductoService,
    private route: ActivatedRoute,
    private router: Router
  ){}

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];

    this.productoService.obtenerProductoPorId(this.id).subscribe((producto: ProductoModel) => {
      this.sucursal1.idproducto = this.id;
    });  
    
    if(this.id){
      console.log('editar');
      this.sucursalService.obtenerSucursal1PorId(this.id).subscribe((data: any[]) => {
        this.sucursal1 = data[0];
      });
    } else {
      console.log('Crear');
    }
  }

  onSubmit() {
    console.log('onSubmit');
    if(this.sucursal1.idsucursal){
      if(this.sucursal1.cantidad_producto){
        if(!this.validateCantidad(this.sucursal1.cantidad_producto)){
          this.sucursalService.actualizarSucursal1(this.sucursal1).subscribe(data =>{
            console.log(this.sucursal1);
            alert('Actualizada correctamente');
            this.router.navigate(['/sucursal1']);
          });
        }
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

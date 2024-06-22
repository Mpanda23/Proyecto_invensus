import { Component } from '@angular/core';
import { ProductoService } from 'src/app/shared/producto.service';
import { Sucursal3Service } from 'src/app/shared/sucursal3.service';

@Component({
  selector: 'app-registros-sucursal3',
  templateUrl: './registros-sucursal3.component.html',
  styleUrls: ['./registros-sucursal3.component.css']
})
export class RegistrosSucursal3Component {

  registros: any[] = [];
  fechaSeleccionada: string = "";
  productos: any[] = [];

  constructor(private sucursal3Service: Sucursal3Service, private productoService: ProductoService){

  }

  ngOnInit() {
    this.productoService.obtenerProductos().subscribe((data: any[])=>{
      this.productos = data;
    })
  }

  buscarRegistrosPorFecha() {
    if (this.fechaSeleccionada) {
      this.sucursal3Service.obtenerRegistrosPorFecha(this.fechaSeleccionada).subscribe((data: any[]) => {
        this.registros = data.map(registro => {
          return {
            ...registro,
            fecha_ingreso: registro.fecha_ingreso.split('T')[0] // Separar la fecha y la hora y tomar solo la fecha
          };
        });
      });
    } else {
      console.log('Por favor seleccione una fecha');
    }
  }

  obtenerNombreProducto(idproducto: string): string{
    const producto = this.productos.find(c => c.idproducto === idproducto);
    return producto ? producto.prod_nombre : 'producto no encontrado'
  }

}

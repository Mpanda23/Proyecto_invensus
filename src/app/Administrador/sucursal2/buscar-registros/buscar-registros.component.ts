import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/shared/producto.service';
import { Sucursal2Service } from 'src/app/shared/sucursal2.service';

@Component({
  selector: 'app-buscar-registros',
  templateUrl: './buscar-registros.component.html',
  styleUrls: ['./buscar-registros.component.css']
})
export class BuscarRegistros2Component implements OnInit {

  registros: any[] = [];
  fechaSeleccionada: string = "";
  productos: any[] = [];

  constructor (private sucursal2Service: Sucursal2Service, private productoService: ProductoService){}

  ngOnInit() {
    this.productoService.obtenerProductos().subscribe((data: any[])=>{
      this.productos = data;
    })
  } 

  buscarRegistrosPorFecha(){
    if(this.fechaSeleccionada){
      this.sucursal2Service.obtenerRegistrosPorFecha(this.fechaSeleccionada).subscribe((data: any[])=>{
        this.registros = data.map(registro =>{
          return{
            ...registro,
            fecha_ingreso: registro.fecha_ingreso.split('T')[0]
          }
        });
      });
    } else {
      console.log('Por favor seleccione una fecha');
    }
  }

  obtenerNombreProducto(idproducto: string): string {
    const producto = this.productos.find(c => c.idproducto === idproducto);
    return producto ? producto.prod_nombre: 'producto no encontrado';
  }

}

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { llegadasSucursal2Model } from 'src/app/shared/llegadas-sucursal2.model';
import { LlegadasSucursal2Service } from 'src/app/shared/llegadas-sucursal2.service';
import { ProductoService } from 'src/app/shared/producto.service';

@Component({
  selector: 'app-listar-llegada2',
  templateUrl: './listar-llegada2.component.html',
  styleUrls: ['./listar-llegada2.component.css']
})
export class ListarLlegada2Component implements OnInit {

  llegadas2: Observable<llegadasSucursal2Model[]> | undefined;
  producto : any[] = [];

  constructor(private llegadasService: LlegadasSucursal2Service, private productoService: ProductoService){}

  ngOnInit() {
    this.llegadas2 = this.llegadasService.obtenerLlegadasSucursal2();

    this.productoService.obtenerProductos().subscribe((data: any[])=>{
      this.producto = data;
    });
  }

  obtenerNombreProducto (idproducto : string):string {
    const producto = this.producto.find(c => c.idproducto === idproducto);
    return producto ? producto.prod_nombre : 'nombre no encontrado';
  }

}

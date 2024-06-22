import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { llegadasSucursal1Model } from 'src/app/shared/llegadas-sucursal1.model';
import { LlegadasSucursal1Service } from 'src/app/shared/llegadas-sucursal1.service';
import { ProductoService } from 'src/app/shared/producto.service';

@Component({
  selector: 'app-listar-llegadas1',
  templateUrl: './listar-llegadas1.component.html',
  styleUrls: ['./listar-llegadas1.component.css']
})
export class ListarLlegadas1Component implements OnInit {

  llegadas1: Observable<llegadasSucursal1Model[]> | undefined;
  producto : any[] = [];

  constructor(private llegadasService: LlegadasSucursal1Service, private productoService: ProductoService){}

  ngOnInit() {
    this.llegadas1 = this.llegadasService.obtenerLlegadasSucursal1();

    this.productoService.obtenerProductos().subscribe((data: any[])=>{
      this.producto = data;
    });
  }

  obtenerNombreProducto (idproducto : string):string {
    const producto = this.producto.find(c => c.idproducto === idproducto);
    return producto ? producto.prod_nombre : 'nombre no encontrado';
  }

}

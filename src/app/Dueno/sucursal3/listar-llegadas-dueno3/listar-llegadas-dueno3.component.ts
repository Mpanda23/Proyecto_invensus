import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { llegadasSucursal3Model } from 'src/app/shared/llegadas-sucursal3.model';
import { LlegadasSucursal3Service } from 'src/app/shared/llegadas-sucursal3.service';
import { ProductoService } from 'src/app/shared/producto.service';

@Component({
  selector: 'app-listar-llegadas-dueno3',
  templateUrl: './listar-llegadas-dueno3.component.html',
  styleUrls: ['./listar-llegadas-dueno3.component.css']
})
export class ListarLlegadasDueno3Component {

  llegadas3: Observable<llegadasSucursal3Model[]> | undefined;
  producto : any[] = [];

  constructor(private llegadasService: LlegadasSucursal3Service, private productoService: ProductoService){}

  ngOnInit() {
    this.llegadas3 = this.llegadasService.obtenerLlegadasSucursal3();

    this.productoService.obtenerProductos().subscribe((data: any[])=>{
      this.producto = data;
    });
  }

  obtenerNombreProducto (idproducto : string):string {
    const producto = this.producto.find(c => c.idproducto === idproducto);
    return producto ? producto.prod_nombre : 'nombre no encontrado';
  }

}

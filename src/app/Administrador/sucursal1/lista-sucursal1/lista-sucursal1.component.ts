import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductoService } from 'src/app/shared/producto.service';
import { Sucursal1Model } from 'src/app/shared/sucursal1.model';
import { Sucursal1Service } from 'src/app/shared/sucursal1.service';

@Component({
  selector: 'app-lista-sucursal1',
  templateUrl: './lista-sucursal1.component.html',
  styleUrls: ['./lista-sucursal1.component.css']
})
export class ListaSucursal1Component implements OnInit {

  sucursal: Observable<Sucursal1Model[]> | undefined;
  producto: any[] = [];

  constructor(private sucursalService: Sucursal1Service, private productoService: ProductoService){} 

  ngOnInit(): void {
    this.sucursal = this.sucursalService.obtenerSucursal1();

    this.productoService.obtenerProductos().subscribe((data: any[])=>{
      this.producto = data;
    });
  }
}

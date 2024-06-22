import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductoService } from 'src/app/shared/producto.service';
import { Sucursal2Model } from 'src/app/shared/sucursal2.model';
import { Sucursal2Service } from 'src/app/shared/sucursal2.service';

@Component({
  selector: 'app-lista-sucursal2',
  templateUrl: './lista-sucursal2.component.html',
  styleUrls: ['./lista-sucursal2.component.css']
})
export class ListaSucursal2Component implements OnInit {

  sucursal: Observable<Sucursal2Model[]> | undefined;
  producto: any[] = [];

  constructor(private sucursalService: Sucursal2Service, private productoService: ProductoService){} 

  ngOnInit(): void {
    this.sucursal = this.sucursalService.obtenerSucursal2();

    this.productoService.obtenerProductos().subscribe((data: any[])=>{
      this.producto = data;
    });
  }

}

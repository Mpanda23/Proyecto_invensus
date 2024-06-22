import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Sucursal1Model } from 'src/app/shared/sucursal1.model';
import { Sucursal1Service } from 'src/app/shared/sucursal1.service';
import { ProductoService } from 'src/app/shared/producto.service';

@Component({
  selector: 'app-listar-sucursal1-bodeguero',
  templateUrl: './listar-sucursal1-bodeguero.component.html',
  styleUrls: ['./listar-sucursal1-bodeguero.component.css']
})
export class ListarSucursal1BodegueroComponent implements OnInit {

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

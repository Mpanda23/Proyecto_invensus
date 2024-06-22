import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductoService } from 'src/app/shared/producto.service';
import { Sucursal2Model } from 'src/app/shared/sucursal2.model';
import { Sucursal2Service } from 'src/app/shared/sucursal2.service';

@Component({
  selector: 'app-listar-sucursal2-bodeguero',
  templateUrl: './listar-sucursal2-bodeguero.component.html',
  styleUrls: ['./listar-sucursal2-bodeguero.component.css']
})
export class ListarSucursal2BodegueroComponent implements OnInit {

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

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductoService } from 'src/app/shared/producto.service';
import { Sucursal3Model } from 'src/app/shared/sucursal3.model';
import { Sucursal3Service } from 'src/app/shared/sucursal3.service';

@Component({
  selector: 'app-listar-sucursal3-bodeguero',
  templateUrl: './listar-sucursal3-bodeguero.component.html',
  styleUrls: ['./listar-sucursal3-bodeguero.component.css']
})
export class ListarSucursal3BodegueroComponent implements OnInit {

  sucursal: Observable<Sucursal3Model[]> | undefined;
  producto: any[] = []

  constructor(private sucursalService: Sucursal3Service, private productoService: ProductoService){} 

  ngOnInit(): void {
    this.sucursal = this.sucursalService.obtenerSucursal3();

    this.productoService.obtenerProductos().subscribe((data: any[])=>{
      this.producto = data;
    })
  }
}

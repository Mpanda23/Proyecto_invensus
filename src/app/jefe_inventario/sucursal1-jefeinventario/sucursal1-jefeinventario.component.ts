import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductoService } from 'src/app/shared/producto.service';
import { Sucursal1Model } from 'src/app/shared/sucursal1.model';
import { Sucursal1Service } from 'src/app/shared/sucursal1.service';

@Component({
  selector: 'app-sucursal1-jefeinventario',
  templateUrl: './sucursal1-jefeinventario.component.html',
  styleUrls: ['./sucursal1-jefeinventario.component.css']
})
export class Sucursal1JefeinventarioComponent implements OnInit {

  sucursal: Observable<Sucursal1Model[]> | undefined;
  producto: any[] = [];

  constructor(private sucursalService: Sucursal1Service, private productoService: ProductoService) { }

  ngOnInit(): void {
    this.sucursal = this.sucursalService.obtenerSucursal1();

    this.productoService.obtenerProductos().subscribe((data: any[]) => {
      this.producto = data;
    });
  }
}

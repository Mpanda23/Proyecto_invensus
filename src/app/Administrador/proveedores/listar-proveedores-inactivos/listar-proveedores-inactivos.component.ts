import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ProveedoresModel } from 'src/app/shared/proveedores.model';
import { ProveedoresService } from 'src/app/shared/proveedores.service';

@Component({
  selector: 'app-listar-proveedores-inactivos',
  templateUrl: './listar-proveedores-inactivos.component.html',
  styleUrls: ['./listar-proveedores-inactivos.component.css']
})
export class ListarProveedoresInactivosComponent {

  proveedoresInactivos: Observable<ProveedoresModel[]> | undefined;

  constructor(private proveedoresService: ProveedoresService) { }

  ngOnInit() {
    this.proveedoresInactivos = this.proveedoresService.obtenerProveedoresInactivos();
  }

}

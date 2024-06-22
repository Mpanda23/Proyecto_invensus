import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProveedoresModel } from 'src/app/shared/proveedores.model';
import { ProveedoresService } from 'src/app/shared/proveedores.service';

@Component({
  selector: 'app-listar-proveedores-inactivos-dueno',
  templateUrl: './listar-proveedores-inactivos-dueno.component.html',
  styleUrls: ['./listar-proveedores-inactivos-dueno.component.css']
})
export class ListarProveedoresInactivosDuenoComponent implements OnInit {

  proveedoresInactivos: Observable<ProveedoresModel[]> | undefined;

  constructor(private proveedoresService: ProveedoresService) { }

  ngOnInit() {
    this.proveedoresInactivos = this.proveedoresService.obtenerProveedoresInactivos();
  }

}

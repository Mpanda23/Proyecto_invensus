import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProveedoresModel } from 'src/app/shared/proveedores.model'; 
import { ProveedoresService } from 'src/app/shared/proveedores.service'; 

@Component({
  selector: 'app-lista-proveedores',
  templateUrl: './lista-proveedores.component.html',
  styleUrls: ['./lista-proveedores.component.css']
})
export class ListaProveedoresComponent implements OnInit {

  proveedores: Observable<ProveedoresModel[]> | undefined;

  constructor(private proveedoresService: ProveedoresService) { }

  ngOnInit() {
    this.proveedores = this.proveedoresService.obtenerProveedoresActivos();
  }

  borrarProveedores(id: string) {
    this.proveedoresService.borrarProveedores(id).subscribe(() => {
      this.proveedores = this.proveedoresService.obtenerProveedoresActivos();
    });
  }

}

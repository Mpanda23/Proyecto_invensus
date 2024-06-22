import { Component } from '@angular/core';
import { PlatosModel } from 'src/app/shared/platos.model';
import { PlatosService } from 'src/app/shared/platos.service';

@Component({
  selector: 'app-listar-platos-inactivos-dueno',
  templateUrl: './listar-platos-inactivos-dueno.component.html',
  styleUrls: ['./listar-platos-inactivos-dueno.component.css']
})
export class ListarPlatosInactivosDuenoComponent {

  platosInactivos: PlatosModel[] = []; // Inicialización aquí

  constructor(private platosService: PlatosService) { }

  ngOnInit() {
    this.obtenerPlatosInactivos();
  }

  obtenerPlatosInactivos() {
    this.platosService.obtenerPlatosInactivos().subscribe((data: PlatosModel[]) => {
      this.platosInactivos = data;
    }, (error: any) => {
      console.log(error);
      // Manejo de errores
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PlatosModel } from 'src/app/shared/platos.model';
import { PlatosService } from 'src/app/shared/platos.service';

@Component({
  selector: 'app-listar-platos',
  templateUrl: './listar-platos.component.html',
  styleUrls: ['./listar-platos.component.css']
})
export class ListarPlatosComponent implements OnInit {

  platos: Observable<PlatosModel[]> | undefined;

  constructor(private platosService: PlatosService) { }

  ngOnInit() {
    this.platos = this.platosService.obtenerPlatosActivos();
  }

  borrarPlatos(id: string) {
    this.platosService.borrarPlatos(id).subscribe(() => {
      this.platos = this.platosService.obtenerPlatosActivos();
    });
  }

}

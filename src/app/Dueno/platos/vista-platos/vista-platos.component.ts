import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { PlatosModel } from 'src/app/shared/platos.model';
import { PlatosService } from 'src/app/shared/platos.service';

@Component({
  selector: 'app-vista-platos',
  templateUrl: './vista-platos.component.html',
  styleUrls: ['./vista-platos.component.css']
})
export class VistaPlatosComponent {

  platos: Observable<PlatosModel[]> | undefined;

  constructor(private platosService: PlatosService) { }

  ngOnInit() {
    this.platos = this.platosService.obtenerPlatosActivos();
  }

}

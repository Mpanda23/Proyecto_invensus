import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoriasModel } from 'src/app/shared/categorias.model';
import { CategoriasService } from 'src/app/shared/categorias.service';

@Component({
  selector: 'app-categorias-bodeguero',
  templateUrl: './categorias-bodeguero.component.html',
  styleUrls: ['./categorias-bodeguero.component.css']
})
export class CategoriasBodegueroComponent {

  categorias: Observable<CategoriasModel[]> | undefined;

  constructor(private categoriasService: CategoriasService) { }

  ngOnInit() {
    this.categorias = this.categoriasService.obtenerCategorias();
  }

}

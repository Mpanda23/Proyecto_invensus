import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoriasModel } from 'src/app/shared/categorias.model';
import { CategoriasService } from 'src/app/shared/categorias.service';

@Component({
  selector: 'app-lista-categorias',
  templateUrl: './lista-categorias.component.html',
  styleUrls: ['./lista-categorias.component.css']
})
export class ListaCategoriasComponent implements OnInit {

  categorias: Observable<CategoriasModel[]> | undefined;

  constructor(private categoriasService: CategoriasService) { }

  ngOnInit() {
    this.categorias = this.categoriasService.obtenerCategorias();
  }

  borrarCategorias(id: string) {
    this.categoriasService.borrarCategorias(id).subscribe(() => {
      this.categorias = this.categoriasService.obtenerCategorias();
    });
  }


}

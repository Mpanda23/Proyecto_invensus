import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoriasModel } from 'src/app/shared/categorias.model';
import { CategoriasService } from 'src/app/shared/categorias.service';

@Component({
  selector: 'app-vista-categorias',
  templateUrl: './vista-categorias.component.html',
  styleUrls: ['./vista-categorias.component.css']
})
export class VistaCategoriasComponent implements OnInit {

  categorias: Observable<CategoriasModel[]> | undefined;

  constructor(private categoriasService: CategoriasService) { }

  ngOnInit() {
    this.categorias = this.categoriasService.obtenerCategorias();
  }
}

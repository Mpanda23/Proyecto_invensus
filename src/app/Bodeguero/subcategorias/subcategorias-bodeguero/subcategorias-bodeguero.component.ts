import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SubcategoriaModel } from 'src/app/shared/subcategoria.model'; 
import { SubcategoriaService } from 'src/app/shared/subcategoria.service'; 
import { CategoriasService } from 'src/app/shared/categorias.service';

@Component({
  selector: 'app-subcategorias-bodeguero',
  templateUrl: './subcategorias-bodeguero.component.html',
  styleUrls: ['./subcategorias-bodeguero.component.css']
})
export class SubcategoriasBodegueroComponent implements OnInit {

  subcategorias: Observable<SubcategoriaModel[]> | undefined;
  categorias: any[] = [];  // Declara la variable categorías

  constructor(private subcategoriaService: SubcategoriaService, private categoriasService: CategoriasService) { }

  ngOnInit() {
    this.subcategorias = this.subcategoriaService.obtenerSubcategorias();

    // Obtén las categorías al iniciar el componente
    this.categoriasService.obtenerCategorias().subscribe((data: any[]) => {
      this.categorias = data;
    });
  }

  borrarSubcategoria(id: string) {
    this.subcategoriaService.borrarSubcategoria(id).subscribe((data: any) => {
      console.log(data);
    });
  }

  obtenerNombreCategoria(idCategoria: string): string {
    const categoria = this.categorias.find(c => c.idcategoria === idCategoria);
    return categoria ? categoria.cat_nombre : 'Categoría no encontrada';
  }
}

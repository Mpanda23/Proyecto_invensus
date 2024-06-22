import { Component, OnInit } from '@angular/core';import { SubcategoriaService } from 'src/app/shared/subcategoria.service'; 
import { ActivatedRoute, Router } from '@angular/router';
import { SubcategoriaModel } from 'src/app/shared/subcategoria.model';
import { CategoriasService } from 'src/app/shared/categorias.service';

@Component({
  selector: 'app-editar-subtagorias-bodeguero',
  templateUrl: './editar-subtagorias-bodeguero.component.html',
  styleUrls: ['./editar-subtagorias-bodeguero.component.css']
})
export class EditarSubtagoriasBodegueroComponent implements OnInit {
  id = '';
  subcategoria = new SubcategoriaModel("", "", ""); 
  categorias: any[] = []; 

  constructor(
    private subcategoriaService: SubcategoriaService,
    private categoriasService: CategoriasService, 
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];

    this.categoriasService.obtenerCategorias().subscribe((data: any[]) => {
        this.categorias = data;
    });
  }

  onSubmit() {
    console.log('crear');
    if (this.subcategoria.subc_nombre && this.subcategoria.idcategoria) {
      if (!this.validateNombre(this.subcategoria.subc_nombre)) {
        this.subcategoriaService.obtenerSubcategorias().subscribe((subcategorias: any[]) => {
          const nombresSubcategorias = subcategorias.map(subcategoria => subcategoria.subc_nombre);
          if (!nombresSubcategorias.includes(this.subcategoria.subc_nombre)) {
            this.subcategoriaService.agregarSubcategoria(this.subcategoria).subscribe(data => {
              alert('Subcategoría agregada correctamente.');
              this.router.navigate(['/listar-subcategorias-bodeguero']);
            });
          } else {
            alert('El nombre de la subcategoría ya está en uso.');
          }
        });
      } else {
        alert('Por favor, ingrese solo letras en el nombre de la subcategoría.');
      }
    } else {
      alert('Por favor, complete todos los campos del formulario.');
    }
    }
  

  validateNombre(nombre: string): { [key: string]: any } | null {
    const pattern = /^[a-zA-Z\s]*$/;
    if (!pattern.test(nombre)) {
      return { 'pattern': true };
    }
    return null;
  }
}

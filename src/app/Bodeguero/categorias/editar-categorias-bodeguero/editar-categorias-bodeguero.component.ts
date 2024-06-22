import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriasModel } from 'src/app/shared/categorias.model';
import { CategoriasService } from 'src/app/shared/categorias.service';

@Component({
  selector: 'app-editar-categorias-bodeguero',
  templateUrl: './editar-categorias-bodeguero.component.html',
  styleUrls: ['./editar-categorias-bodeguero.component.css']
})
export class EditarCategoriasBodegueroComponent {
  id = '';
  categorias = new CategoriasModel("", "");

  constructor(
    private categoriasService: CategoriasService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];    
  }

  onSubmit() {
    console.log('onSubmit');
      console.log('crear');
      if(this.categorias.cat_nombre) {
        if(!this.validateNombre(this.categorias.cat_nombre)){
          this.categoriasService.obtenerCategorias().subscribe((categorias: any[])=>{
            const nombresCategorias = categorias.map(categorias => categorias.cat_nombre);
            if(!nombresCategorias.includes(this.categorias.cat_nombre)){
              this.categoriasService.agregarCategorias(this.categorias).subscribe(data =>{
                alert ('Categoria agregada correctamente');
                this.router.navigate(['/listar-categorias-bodeguero']);
              });
            } else {
              alert ('El nombre de la categoria ya existe');
            }
          });
        } else {
          alert ('Por favor ingresa solo letras en el campo de nombre categoria');
        }
      } else {
        alert ('Por favor complete los campos del formulario');
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

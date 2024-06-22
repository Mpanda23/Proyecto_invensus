import { Component, OnInit } from '@angular/core';
import { CategoriasService } from 'src/app/shared/categorias.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriasModel } from 'src/app/shared/categorias.model';

@Component({
  selector: 'app-editar-categorias',
  templateUrl: './editar-categorias.component.html',
  styleUrls: ['./editar-categorias.component.css']
})
export class EditarCategoriasComponent implements OnInit {

  id = '';
  categorias = new CategoriasModel("", "");

  constructor(
    private categoriasService: CategoriasService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    if (this.id) {
      console.log("EDITAR");
      this.categoriasService.obtenerCategoriasPorId(this.id).subscribe((data: any[]) => {
        this.categorias = data[0];
      }, (error: any) => {
        console.log(error);
      });
    } else {
      console.log("CREAR");
    }
  }

  onSubmit() {
    console.log('onSubmit');
  
    if (this.categorias.idcategoria){
      if (this.categorias.cat_nombre){
        if (!this.validateNombre(this.categorias.cat_nombre)){
          this.categoriasService.obtenerCategorias().subscribe((categorias: any[])=>{
            const otrasCategorias = categorias.filter(categorias => categorias.idcategoria !== this.categorias.idcategoria);
            const nombresOtrasCategorias = otrasCategorias.map(categorias => categorias.cat_nombre);
            if(!nombresOtrasCategorias.includes(this.categorias.cat_nombre)){
              this.categoriasService.actualizarCategorias(this.categorias).subscribe(data => {
                alert ('Categoria actualizada correctamente');
                this.router.navigate(['/categorias']);
              });
            } else {
              alert ('El nombre de la categoria ya esta en uso');
            }
          });
        }else {
          alert ('Ingrese solo letras en el campo de nombre categoria');
        }
      } else {
        alert ('Pro favor, ingrese un nombre de categoria')
      }
    } else {
      console.log('crear');
      if(this.categorias.cat_nombre) {
        if(!this.validateNombre(this.categorias.cat_nombre)){
          this.categoriasService.obtenerCategorias().subscribe((categorias: any[])=>{
            const nombresCategorias = categorias.map(categorias => categorias.cat_nombre);
            if(!nombresCategorias.includes(this.categorias.cat_nombre)){
              this.categoriasService.agregarCategorias(this.categorias).subscribe(data =>{
                alert ('Categoria agregada correctamente');
                this.router.navigate(['/categorias']);
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

  }

  validateNombre(nombre: string): { [key: string]: any } | null {
    const pattern = /^[a-zA-Z\s]*$/;
    if (!pattern.test(nombre)) {
      return { 'pattern': true };
    }
    return null;
  }
}

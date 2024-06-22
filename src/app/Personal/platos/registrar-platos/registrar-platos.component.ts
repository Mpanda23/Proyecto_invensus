import { Component, OnInit } from '@angular/core';
import { PlatosService } from 'src/app/shared/platos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PlatosModel } from 'src/app/shared/platos.model';
import { ProductoModel } from 'src/app/shared/producto.model';

@Component({
  selector: 'app-registrar-platos',
  templateUrl: './registrar-platos.component.html',
  styleUrls: ['./registrar-platos.component.css']
})
export class RegistrarPlatosComponent implements OnInit {

  id ='';
  platos = new PlatosModel("", "", "", "", "", "", "");
  productosPrincipales: ProductoModel[] = []; // Array para almacenar los productos principales

  constructor(
    private platosService: PlatosService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    if (this.id) {
      console.log("EDITAR");
      this.platosService.obtenerPlatosPorId(this.id).subscribe((data: any[]) => {
        this.platos = data[0];
      }, (error: any) => {
        console.log(error);
      });
    } else {
      console.log("CREAR");
    }

    // Llamar al método para obtener los productos principales
    this.platosService.obtenerProductosPrincipales().subscribe((productos: ProductoModel[]) => {
      this.productosPrincipales = productos;
    }, (error: any) => {
      console.log(error);
    });
  }

  validateNombre(nombre: string): { [key: string]: any } | null {
    const pattern = /^[a-zA-Z\s]*$/;
    if (!pattern.test(nombre)) {
      return { 'pattern': true };
    }
    return null;
  }

  validateDescripcion(descripcion: string): { [key: string]: any } | null {
    const pattern = /^[a-zA-Z\s]*$/;
    if (!pattern.test(descripcion)) {
      return { 'pattern': true };
    }
    return null;
  }

  onSubmit() {
    console.log('onSubmit');

    if (!this.validateNombre(this.platos.pla_nombre)) {
      if (!this.validateDescripcion(this.platos.pla_descripcion)) {
        if (this.platos.pla_precio) {
          if (this.platos.pla_tiempopre) {
            if (this.platos.idproducto) {
              if (this.id) {
                this.platosService.actualizarPlatos(this.platos).subscribe(data => {
                  alert('Plato actualizado correctamente.');
                  this.router.navigate(['/platos-personal']);
                });
              } else {
                this.platosService.agregarPlatos(this.platos).subscribe(data => {
                  alert('Plato agregado correctamente.');
                  this.router.navigate(['/platos-personal']);
                });
              }
            } else {
              alert('Por favor, seleccione un producto principal.');
            }
          } else {
            alert('Por favor, ingrese el tiempo de preparación.');
          }
        } else {
          alert('Por favor, ingrese un precio.');
        }
      } else {
        alert('Por favor, ingrese una descripción válida.');
      }
    } else {
      alert('Por favor, ingrese un nombre válido.');
    }
  }

}

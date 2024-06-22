import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/shared/producto.service';
import { ProductoModel } from 'src/app/shared/producto.model';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriasService } from 'src/app/shared/categorias.service';
import { ProveedoresService } from 'src/app/shared/proveedores.service';

@Component({
  selector: 'app-editar-productos-bodeguero',
  templateUrl: './editar-productos-bodeguero.component.html',
  styleUrls: ['./editar-productos-bodeguero.component.css']
})
export class EditarProductosBodegueroComponent implements OnInit {

  id = '';
  producto = new ProductoModel("", "", "", "", "", "", "", "");
  fechaInvalida = false;
  categorias: any[] = [];
  proveedores: any[] = [];
  categoriasLoaded = false;
  proveedoresLoaded = false;
  nombreOriginal = ''; 

  constructor(
    private productoService: ProductoService,
    private categoriasService: CategoriasService,
    private proveedoresService: ProveedoresService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];

    this.categoriasService.obtenerCategorias().subscribe((data: any[]) => {
      this.categorias = data;
      this.categoriasLoaded = true;
    });

    this.proveedoresService.obtenerProveedores().subscribe((data: any[]) => {
      this.proveedores = data;
      this.proveedoresLoaded = true;
    });

    if (this.id) {
      console.log("EDITAR");
      this.productoService.obtenerProductoPorId(this.id).subscribe((producto: ProductoModel) => {
        this.producto = producto;
        this.nombreOriginal = producto.prod_nombre; 
      }, (error: any) => {
        console.log(error);
      });
    } else {
      console.log("CREAR");
    }
  }

  validarFechas() {
    const fechaActual = new Date();
    const fechaVencimiento = new Date(this.producto.prod_vencimiento);
    let fechaAlerta = new Date(this.producto.prod_alerta);

    fechaActual.setHours(0, 0, 0, 0);
    fechaVencimiento.setHours(0, 0, 0, 0);
    fechaAlerta.setHours(0, 0, 0, 0);

    if (fechaVencimiento.getTime() <= fechaActual.getTime()) {
      alert('La fecha de vencimiento no puede ser en el pasado o la fecha actual.');
      this.fechaInvalida = true;
    } else if (fechaAlerta.getTime() > fechaVencimiento.getTime()) {
      alert('La fecha de alerta no puede ser mayor que la fecha de vencimiento.');
      this.fechaInvalida = true;
    } else if (fechaAlerta.getTime() < fechaActual.getTime()) {
      alert('La fecha de alerta no puede ser en el pasado.');
      this.fechaInvalida = true;
    } else {
      this.fechaInvalida = false;
    }
  }

  onSubmit() {
    console.log('Validando formulario...');

    if (this.validarFormulario()) {
      console.log('Formulario válido. Enviando datos...');

      if (this.id) {
        if (this.producto.prod_nombre !== this.nombreOriginal) {
          this.validarNombreProducto();
        } else {
          this.actualizarProducto();
        }
      } else {
        this.validarNombreProductoAgregar();
      }
    } else {
      console.log('Formulario no válido');
    }
  }

  validarNombreProductoAgregar() {
    this.productoService.verificarNombreProducto(this.producto.prod_nombre).subscribe((existe: boolean) => {
      if (existe) {
        alert('El nombre del producto ya está registrado.');
      } else {
        this.agregarProducto();
      }
    });
  }

  agregarProducto() {
    this.productoService.agregarProducto(this.producto).subscribe(data => {
      alert('Producto creado exitosamente.');
      this.router.navigate(['/listar-productos-bodeguero']);
    });
  }

  validarNombreProducto() {
    this.productoService.verificarNombreProducto(this.producto.prod_nombre).subscribe((existe: boolean) => {
      if (existe) {
        alert('El nombre del producto ya está registrado.');
      } else {
        this.actualizarProducto();
      }
    });
  }

  actualizarProducto() {
    this.productoService.actualizarProducto(this.producto).subscribe(data => {
      alert('Producto actualizado exitosamente.');
      this.router.navigate(['/listar-productos-bodeguero']);
    });
  }

  validarFormulario(): boolean {
    console.log('Validando formulario...');

    const nombreCompleto = this.producto.prod_nombre.trim();
    const descripcionCompleta = this.producto.prod_descripcion.trim();

    if (
      nombreCompleto &&
      descripcionCompleta &&
      this.producto.prod_valor !== '' &&
      this.producto.prod_vencimiento &&
      this.producto.prod_alerta &&
      this.producto.idcategoria &&
      this.producto.idproveedores
    ) {
      console.log('Campos completos...');

      if (this.validateNombre(nombreCompleto)) {
        console.log('Nombre válido...');

        this.validarFechas();

        if (this.fechaInvalida) {
          alert('Por favor, ingrese fechas válidas.');
          console.log('Fechas no válidas...');
          return false;
        } else {
          console.log('Fechas válidas...');
          return true;
        }
      } else {
        alert('Por favor, ingrese solo letras en el nombre del producto.');
        console.log('Nombre no válido...');
        return false;
      }
    } else {
      alert('Por favor, complete todos los campos del formulario.');
      console.log('Campos incompletos...');
      return false;
    }
  }

  validateNombre(nombre: string): boolean {
    const pattern = /^[a-zA-Z\s]*$/;
    return pattern.test(nombre);
  }

}

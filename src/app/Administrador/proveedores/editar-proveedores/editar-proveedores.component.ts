import { Component, OnInit } from '@angular/core';
import { ProveedoresService } from 'src/app/shared/proveedores.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProveedoresModel } from 'src/app/shared/proveedores.model';

@Component({
  selector: 'app-editar-proveedores',
  templateUrl: './editar-proveedores.component.html',
  styleUrls: ['./editar-proveedores.component.css']
})
export class EditarProveedoresComponent implements OnInit {

  id = '';
  proveedores = new ProveedoresModel("", "", "", "", "", "");
  correoValido: boolean = true;
  nombreExistente: boolean = false;
  direccionExistente: boolean = false;
  telefonoExistente: boolean = false;
  correoExistente: boolean = false;

  constructor(
    private proveedoresService: ProveedoresService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    if (this.id) {
      console.log("EDITAR");
      this.proveedoresService.obtenerProveedoresPorId(this.id).subscribe((data: any[]) => {
        this.proveedores = data[0];
      }, (error: any) => {
        console.log(error);
      });
    } else {
      console.log("CREAR");
    }
  }

  onSubmit() {
    console.log('onSubmit');

    if (this.proveedores.idproveedores) {
      this.guardarProveedor();
    } else {
      if (this.proveedores.pro_nombre && this.proveedores.pro_direccion && this.proveedores.pro_mail && this.proveedores.pro_telefono && this.proveedores.pro_estado) {
        if (!this.validateNombre(this.proveedores.pro_nombre)) {
          if (this.validateCorreo(this.proveedores.pro_mail)) {
            this.verificarExistencia();
          } else {
            this.correoValido = false;
            alert('Por favor, ingrese un correo electrónico válido.');
          }
        } else {
          alert('Por favor, ingrese solo letras en el nombre del proveedor.');
        }
      } else {
        alert('Por favor, complete todos los campos del formulario.');
      }
    }
  }

  verificarExistencia() {
    this.proveedoresService.verificarProveedorExistente(this.proveedores.pro_nombre).subscribe(exists => {
      if (!exists) {
        this.proveedoresService.verificarDireccionExistente(this.proveedores.pro_direccion).subscribe(existsDir => {
          if (!existsDir) {
            this.proveedoresService.verificarCorreoExistente(this.proveedores.pro_mail).subscribe(existsCorreo => {
              if (!existsCorreo) {
                this.proveedoresService.verificarTelefonoExistente(this.proveedores.pro_telefono).subscribe(existsTel => {
                  if (!existsTel) {
                    this.guardarProveedor(); // Si no existen duplicados, guardar el proveedor
                  } else {
                    this.telefonoExistente = true;
                    alert('El teléfono ya está registrado. Ingrese otro número de teléfono.');
                  }
                });
              } else {
                this.correoExistente = true;
                alert('El correo electrónico ya está registrado. Ingrese otro correo.');
              }
            });
          } else {
            this.direccionExistente = true;
            alert('La dirección ya está registrada. Ingrese otra dirección.');
          }
        });
      } else {
        this.nombreExistente = true;
        alert('El nombre de proveedor ya existe. Por favor, elija otro nombre.');
      }
    });
  }

  guardarProveedor() {
    if (this.proveedores.idproveedores) {
      this.proveedoresService.actualizarProveedores(this.proveedores).subscribe(data => {
        alert('Proveedor actualizado correctamente.');
        this.router.navigate(['/proveedores']);
      });
    } else {
      this.proveedoresService.agregarProveedores(this.proveedores).subscribe(data => {
        alert('Proveedor agregado correctamente.');
        this.router.navigate(['/proveedores']);
      });
    }
  }

  validateNombre(nombre: string): boolean {
    const pattern = /^[a-zA-Z\s]*$/;
    return !pattern.test(nombre);
  }

  validateCorreo(correo: string): boolean {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(correo);
  }
}

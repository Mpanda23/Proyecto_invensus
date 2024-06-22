import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuariosModel } from 'src/app/shared/usuarios.model';
import { UsuariosService } from 'src/app/shared/usuarios.service';

@Component({
  selector: 'app-editar-usuarios-dueno',
  templateUrl: './editar-usuarios-dueno.component.html',
  styleUrls: ['./editar-usuarios-dueno.component.css']
})
export class EditarUsuariosDuenoComponent implements OnInit {

  id = '';
  usuarios = new UsuariosModel("", "", "", "", "", "", "", "", "", "", "", "", false);
  correoValido: boolean = true;

  constructor(
    private usuariosService: UsuariosService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    if (this.id) {
      console.log("EDITAR");
      this.usuariosService.obtenerUsuariosPorId(this.id).subscribe(
        (data: UsuariosModel[]) => {
          if (data.length > 0) {
            this.usuarios = { ...data[0] };
          } else {
            console.log('Usuario no encontrado');
          }
        },
        (error: any) => {
          console.log(error);
        }
      );
    } else {
      console.log("CREAR");
    }
  }

  onSubmit() {
    console.log('onSubmit');

    if (this.validateForm()) {
      if (this.usuarios.idusuarios) {
        this.usuariosService.actualizarUsuarios(this.usuarios).subscribe(data => {
          alert('Usuario actualizado correctamente.');
          this.router.navigate(['/usuarios-dueno']);
        });
      } else {
        console.log('crear');
        this.usuariosService.agregaruUsuarios(this.usuarios).subscribe(data => {
          alert('Usuario agregado correctamente.');
          this.router.navigate(['/usuarios-dueno']);
        });
      }
    }
  }

  validateForm(): boolean {
    if (this.usuarios.usu_nombre && this.usuarios.usu_tipoid && this.usuarios.usu_identificacion &&
      this.usuarios.usu_numerotel && this.usuarios.usu_correo && this.usuarios.usu_contrasena &&
      this.usuarios.usu_estado && this.usuarios.idgenero && this.usuarios.idroles) {

      if (!this.validateNombre(this.usuarios.usu_nombre)) {
        if (this.validateCorreo(this.usuarios.usu_correo)) {
          return true;
        } else {
          this.correoValido = false;
          alert('Por favor, ingrese un correo electrónico válido.');
        }
      } else {
        alert('Por favor, ingrese solo letras en el nombre del usuario.');
      }
    } else {
      alert('Por favor, complete todos los campos del formulario.');
    }

    return false;
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

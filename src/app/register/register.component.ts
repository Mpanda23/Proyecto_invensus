import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuariosModel } from 'src/app/shared/usuarios.model';
import { UsuariosService } from 'src/app/shared/usuarios.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  id = '';
  usuario = new UsuariosModel("", "", "", "", "", "", "", "", "", "", "", "", false);
  correoValido: boolean = true;
  nombreExistente: boolean = false;
  identificacionExistente: boolean = false;
  telefonoExistente: boolean = false;
  correoExistente: boolean = false;
  mostrarTerminosFlag: boolean = false;

  constructor(
    private usuarioService: UsuariosService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  onSubmit() {
    console.log('onSubmit');

    if (this.validateForm()) {
      if (this.usuario.idusuarios) {
        this.usuarioService.actualizarUsuarios(this.usuario).subscribe(data => {
          alert('Usuario actualizado correctamente.');
          this.router.navigate(['/usuario']);
        });
      } else {
        this.verificarExistencia();
      }
    }
  }

  verificarExistencia() {
    this.usuarioService.verificarUsuariosExistente(this.usuario.usu_nombre).subscribe(exists => {
      if (!exists) {
        this.usuarioService.verificarIdentificacionExistente(this.usuario.usu_identificacion).subscribe(existsDir => {
          if (!existsDir) {
            this.usuarioService.verificarCorreoExistente(this.usuario.usu_correo).subscribe(existsCorreo => {
              if (!existsCorreo) {
                this.usuarioService.verificarTelefonoExistente(this.usuario.usu_numerotel).subscribe(existsTel => {
                  if (!existsTel) {
                    this.crearUsuario();
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
            this.identificacionExistente = true;
            alert('La identificación ya está registrada. Ingrese otra identificación.');
          }
        });
      } else {
        this.nombreExistente = true;
        alert('El nombre de usuario ya existe. Por favor, elija otro nombre.');
      }
    });
  }

  crearUsuario() {
    console.log('crear');
    this.usuarioService.registrarUsuario(this.usuario).subscribe(data => {
      alert('Usuario agregado correctamente.');
      this.router.navigate(['/usuario']);
    });
  }

  validateForm(): boolean {
    if (this.usuario.usu_nombre && this.usuario.usu_tipoid &&
      this.usuario.usu_identificacion && this.usuario.usu_numerotel &&
      this.usuario.usu_correo && this.usuario.usu_contrasena && this.usuario.agree_terms) {

      if (!this.validateNombre(this.usuario.usu_nombre)) {
        if (this.validateCorreo(this.usuario.usu_correo)) {
          if (this.validateTelefono(this.usuario.usu_numerotel)) {
            if (this.validateIdentificacion(Number(this.usuario.usu_identificacion))) {
              if (this.usuario.agree_terms) {

                console.log('Usuario registrado');
                return true;
              } else {
                alert('Si no acepta los términos y condiciones, no se puede registrar.');
              }
            } else {
              alert('Por favor, ingrese un número de identificación válido, No puede ser menor a 7 digitos ni mayor a 10 digitos.');
            }
          } else {
            alert('Por favor, ingrese un número de teléfono válido, con su respectivo indicativo.');
          }
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
  mostrarTerminos() {
    this.mostrarTerminosFlag = !this.mostrarTerminosFlag;
  }


  validateNombre(nombre: string): boolean {
    const pattern = /^[a-zA-Z\s]*$/;
    return !pattern.test(nombre);
  }

  validateCorreo(correo: string): boolean {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(correo);
  }

  validateTelefono(telefono: string): boolean {
    const telefonoPattern = /^\+\d{1,3}\s?\d{10}$/;
    return telefonoPattern.test(telefono);
  }

  validateIdentificacion(identificacion: number): boolean {
    const identificacionStr = identificacion.toString();
    return identificacionStr.length >= 7 && identificacionStr.length <= 10;
  }

}
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuariosModel } from 'src/app/shared/usuarios.model';
import { UsuariosService } from 'src/app/shared/usuarios.service';
import { GeneroModel } from 'src/app/shared/genero.model';
import { RolModel } from 'src/app/shared/rol.model';
import { GeneroService } from 'src/app/shared/genero.service';
import { RolService } from 'src/app/shared/rol.service';

@Component({
  selector: 'app-editar-usuarios',
  templateUrl: './editar-usuarios.component.html',
  styleUrls: ['./editar-usuarios.component.css']
})
export class EditarUsuariosComponent implements OnInit {
  id = '';
  usuarios = new UsuariosModel("", "", "", "", "", "", "", "", "", "", "", "", false);
  correoValido: boolean = true;
  generos: GeneroModel[] = [];
  roles: RolModel[] = [];
  nombreExistente: boolean = false;
  identificacionExistente: boolean = false;
  telefonoExistente: boolean = false;
  correoExistente: boolean = false;

  constructor(
    private usuariosService: UsuariosService,
    private generoService: GeneroService,
    private rolService: RolService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.generoService.obtenerGeneros().subscribe((data: GeneroModel[]) => {
      this.generos = data;
    });

    this.rolService.obtenerRoles().subscribe((data: RolModel[]) => {
      this.roles = data;
    });

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
          this.router.navigate(['/usuarios']);
        });
      } else {
        this.verificarExistencia();
      }
    }
  }

  verificarExistencia() {
    this.usuariosService.verificarUsuariosExistente(this.usuarios.usu_nombre).subscribe(exists => {
      if (!exists) {
        this.usuariosService.verificarIdentificacionExistente(this.usuarios.usu_identificacion).subscribe(existsDir => {
          if (!existsDir) {
            this.usuariosService.verificarCorreoExistente(this.usuarios.usu_correo).subscribe(existsCorreo => {
              if (!existsCorreo) {
                this.usuariosService.verificarTelefonoExistente(this.usuarios.usu_numerotel).subscribe(existsTel => {
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
    this.usuariosService.agregaruUsuarios(this.usuarios).subscribe(data => {
      alert('Usuario agregado correctamente.');
      this.router.navigate(['/usuarios']);
    });
  }

  validateForm(): boolean {
    if (this.usuarios.usu_nombre && this.usuarios.usu_tipoid &&
      this.usuarios.usu_identificacion && this.usuarios.usu_numerotel &&
      this.usuarios.usu_correo && this.usuarios.usu_contrasena &&
      this.usuarios.usu_estado && this.usuarios.idgenero &&
      this.usuarios.idroles) {

      if (!this.validateNombre(this.usuarios.usu_nombre)) {
        if (this.validateCorreo(this.usuarios.usu_correo)) {
          if (this.validateTelefono(this.usuarios.usu_numerotel)) {
            if (this.validateIdentificacion(Number(this.usuarios.usu_identificacion))) {
              return true;
            } else {
              alert('Por favor, ingrese un número de identificación válido, No puede ser menor a 7 digitos ni mayor a 10 digitos ');
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
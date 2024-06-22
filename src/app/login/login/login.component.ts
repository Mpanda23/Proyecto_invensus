import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  usu_nombre = '';
  usu_contrasena = '';

  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  login() {
    this.authService.login(this.usu_nombre, this.usu_contrasena).subscribe(
      (response) => {
        console.log('Login successful:', response);
        if (response.usu_estado === 'activo') {
          this.mostrarAlerta(true, 'Inicio de sesión exitoso', response.idroles);
        } else {
          this.mostrarAlerta(false, 'Su cuenta está inactiva. Espere la confirmación e intente nuevamente.', null);
        }
      },
      (error) => {
        console.error('Login error:', error);
        this.mostrarAlerta(
          false,
          'Error en el inicio de sesión. Verifica tus credenciales.',
          null
        );
      }
    );
  }

  mostrarAlerta(esCorrecto: boolean, mensaje: string, idroles: number | null): void {
    if (esCorrecto) {
      alert('¡Éxito! ' + mensaje);
      if (idroles) {
        switch (idroles) {
          case 1:
            this.router.navigate(['/vista-bodeguero']);
            break;
          case 2:
            this.router.navigate(['/vista-admin']);
            break;
          case 3:
            this.router.navigate(['/vista-jefe-inventario']);
            break;
          case 4:
            this.router.navigate(['/vista-personal']);
            break;
          case 5:
            this.router.navigate(['/vista-dueno']);
            break;
          default:
            this.router.navigate(['/login']);
        }
      } else {
        alert('Espere la confirmacion de su rol, e ingrese nuevamente');

        this.router.navigate(['/login']);
      }
    } else {
      alert('Error: ' + mensaje);
    }
  }
}

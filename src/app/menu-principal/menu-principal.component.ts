import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.component.html',
  styleUrls: ['./menu-principal.component.css']
})
export class MenuPrincipalComponent {
  
  currentSection: string | undefined;
  informacionAMostrar: string | undefined;

  constructor(private router: Router) {}

  mostrarLogin() {
    this.router.navigate(['/login']);
  }

  mostrarSeccion(section: string) {
    this.currentSection = section;
  }

  mostrarInformacion(informacion: string) {
    this.informacionAMostrar = informacion;
  }
}



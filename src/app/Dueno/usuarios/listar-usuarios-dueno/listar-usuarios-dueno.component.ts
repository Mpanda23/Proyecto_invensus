import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UsuariosModel } from 'src/app/shared/usuarios.model';
import { UsuariosService } from 'src/app/shared/usuarios.service';

@Component({
  selector: 'app-listar-usuarios-dueno',
  templateUrl: './listar-usuarios-dueno.component.html',
  styleUrls: ['./listar-usuarios-dueno.component.css']
})
export class ListarUsuariosDuenoComponent implements OnInit {

  usuarios: Observable<UsuariosModel[]> | undefined;

  constructor(private usuariosService: UsuariosService) { }

  ngOnInit() {
    this.usuarios = this.usuariosService.obtenerUsuariosActivos(); // Cambiado a obtenerUsuariosActivos
  }

  borrarusuarios(id: string) {
    this.usuariosService.borrarUsuarios(id).subscribe(() => {
      this.usuarios = this.usuariosService.obtenerUsuariosActivos(); // Cambiado a obtenerUsuariosActivos
    });
  }
  
}

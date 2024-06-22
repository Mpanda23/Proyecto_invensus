import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UsuariosModel } from 'src/app/shared/usuarios.model';
import { UsuariosService } from 'src/app/shared/usuarios.service';

@Component({
  selector: 'app-listar-usuarios-inactivos-dueno',
  templateUrl: './listar-usuarios-inactivos-dueno.component.html',
  styleUrls: ['./listar-usuarios-inactivos-dueno.component.css']
})
export class ListarUsuariosInactivosDuenoComponent implements OnInit {
    
  usuariosInactivos: Observable<UsuariosModel[]> | undefined;

  constructor(private usuariosService: UsuariosService) { }

  ngOnInit() {
    this.usuariosInactivos = this.usuariosService.obtenerUsuariosInactivos();
  }

  borrarUsuario(id: string) {
    this.usuariosService.borrarUsuarios(id).subscribe(() => {
      this.usuariosInactivos = this.usuariosService.obtenerUsuariosInactivos();
    });
  }

}

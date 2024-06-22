import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RolService } from 'src/app/shared/rol.service';
import { UsuariosModel } from 'src/app/shared/usuarios.model';
import { UsuariosService } from 'src/app/shared/usuarios.service';
import { GeneroService } from '../../../shared/genero.service';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './listar-usuarios.component.html',
  styleUrls: ['./listar-usuarios.component.css']
})
export class ListarUsuariosComponent implements OnInit {

  usuarios: Observable<UsuariosModel[]> | undefined;
  roles: any[] = [];
  genero: any[] = [];

  constructor(private usuariosService: UsuariosService, private rolService: RolService, private generoService: GeneroService) { }

  ngOnInit() {
    this.usuarios = this.usuariosService.obtenerUsuariosActivos(); // Cambiado a obtenerUsuariosActivos
    this.rolService.obtenerRoles().subscribe((data: any[]) => {
      this.roles = data;
    });
    this.generoService.obtenerGeneros().subscribe((data: any[])=>{
      this.genero = data;
    });
  }

  borrarusuarios(id: string) {
    this.usuariosService.borrarUsuarios(id).subscribe(() => {
      this.usuarios = this.usuariosService.obtenerUsuariosActivos(); // Cambiado a obtenerUsuariosActivos
    });
  }

  obtenerNombreRol(idRoles: string): string {
    const rol = this.roles.find(c => c.idroles === idRoles);
    return rol ? rol.rol_nombre : 'rol no encontrado';
  }

  obtenerNombreGenero(idGenero: string): string{
    const genero = this.genero.find(c => c.idgenero === idGenero );
    return genero ? genero.genero_tipo : 'genero no encontrado';
  }


}

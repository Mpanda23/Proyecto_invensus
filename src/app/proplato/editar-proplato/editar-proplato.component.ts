import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriasService } from 'src/app/shared/categorias.service';
import { PlatosService } from 'src/app/shared/platos.service';
import { ProductoService } from 'src/app/shared/producto.service';
import { ProplatoModel } from 'src/app/shared/proplato.model';
import { ProplatoService } from 'src/app/shared/proplato.service';

@Component({
  selector: 'app-editar-proplato',
  templateUrl: './editar-proplato.component.html',
  styleUrls: ['./editar-proplato.component.css']
})
export class EditarProplatoComponent {
  id = '';
  proplato = new ProplatoModel("", "", "", "", "", "", "", "", "", ""," ","","","","","","","","","","","","","","","","");
  platos: any[] = [];
  categorias: any[] = [];
  productos: any[] = [];
  mostrarCategoria2: boolean = false;
  mostrarCategoria3: boolean = false;
  mostrarCategoria4: boolean = false;
  mostrarCategoria5: boolean = false;
  mostrarCategoria6: boolean = false;
  mostrarCategoria7: boolean = false;
  mostrarProducto2: boolean = false;
  mostrarProducto3: boolean = false;
  mostrarProducto4: boolean = false;
  mostrarProducto5: boolean = false;
  mostrarProducto6: boolean = false;
  mostrarProducto7: boolean = false;
  mostrarProducto8: boolean = false;
  mostrarProducto9: boolean = false;

  constructor(
    private proplatoService: ProplatoService,
    private platosService: PlatosService,
    private categoriasService: CategoriasService,
    private productoService: ProductoService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.platosService.obtenerPlatosActivos().subscribe((data: any[])=> {
      this.platos = data;
    });
    this.categoriasService.obtenerCategorias().subscribe((data: any[])=> {
      this.categorias = data;
    });
    this.productoService.obtenerProductos().subscribe((data: any[])=> {
      this.productos = data;
    });

    if (this.id) {
      console.log("editar");
      this.proplatoService.obtenerProplatoPorId(this.id).subscribe((data: any[]) => {
        this.proplato = data[0];
      }, (error: any) => {
        console.log(error);
      });
    } else {
      console.log("crear");

    }

  }

  onSubmit() {
    console.log('onSubmit');
    if (this.proplato.proplaid) {
      this.proplatoService.actualizarProplato(this.proplato).subscribe(data => {
        alert(data);
        this.router.navigate(['/proplato']);
      });
    } else {
      console.log('crear');
      this.proplatoService.agregarProplato(this.proplato).subscribe(data => {
        alert(data);
        this.router.navigate(['/proplato']);
      });
    }
  }

}

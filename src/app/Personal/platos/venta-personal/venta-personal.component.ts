import { Component, OnInit } from '@angular/core';
import { PlatosService } from 'src/app/shared/platos.service';
import { VentaPlatosService } from 'src/app/shared/venta-platos.service';
import { ventaModel } from 'src/app/shared/ventaplatos.model';

@Component({
  selector: 'app-venta-personal',
  templateUrl: './venta-personal.component.html',
  styleUrls: ['./venta-personal.component.css']
})
export class VentaPersonalComponent implements OnInit {

  venta = new ventaModel("","");
  platos: any[] = [];

  constructor (
    private ventaPlatosService: VentaPlatosService,
    private platosService: PlatosService 
  ){}

  ngOnInit() {
    this.platosService.obtenerPlatosActivos().subscribe((data: any[])=>{
      this.platos = data;
    });
  }

  registrarVenta(){
    this.ventaPlatosService.venderPlato(this.venta).subscribe({
      next: () => {
        console.log('Venta registrada correctamente.');
        // Aquí puedes agregar lógica adicional, como actualizar la lista de platos vendidos o mostrar un mensaje de éxito al usuario.
      },
      error: (error) => {
        console.error('Error al registrar la venta:', error);
        // Aquí puedes manejar el error, como mostrar un mensaje de error al usuario.
      }
    });
  }

  obtenerNombrePlato(idplatos: string): string{
    const plato = this.platos.find(c => c.idplatos === idplatos);
    return plato ? plato.pla_nombre: 'Plato no encontrado';
  }
}

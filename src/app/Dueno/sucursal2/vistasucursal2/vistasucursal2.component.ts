import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Sucursal2Model } from 'src/app/shared/sucursal2.model';
import { Sucursal2Service } from 'src/app/shared/sucursal2.service';

@Component({
  selector: 'app-vistasucursal2',
  templateUrl: './vistasucursal2.component.html',
  styleUrls: ['./vistasucursal2.component.css']
})
export class Vistasucursal2Component {

  sucursal: Observable<Sucursal2Model[]> | undefined;

  constructor(private sucursalService: Sucursal2Service){}

  ngOnInit(): void {
    this.sucursal = this.sucursalService.obtenerSucursal2();
  }

  borrarSucursal(id:string){
    this.sucursalService.borrarSucursal2(id).subscribe(()=>{
      this.sucursal = this.sucursalService.obtenerSucursal2();
    })
  }

}

import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Sucursal3Model } from 'src/app/shared/sucursal3.model';
import { Sucursal3Service } from 'src/app/shared/sucursal3.service';

@Component({
  selector: 'app-vista-sucursal3',
  templateUrl: './vista-sucursal3.component.html',
  styleUrls: ['./vista-sucursal3.component.css']
})
export class VistaSucursal3Component {

  sucursal: Observable<Sucursal3Model[]> | undefined;

  constructor(private sucursalService: Sucursal3Service){}

  ngOnInit(): void {
    this.sucursal = this.sucursalService.obtenerSucursal3();
  }

  borrarSucursal(id:string){
    this.sucursalService.borrarSucursal3(id).subscribe(()=>{
      this.sucursal = this.sucursalService.obtenerSucursal3();
    })
  }

}

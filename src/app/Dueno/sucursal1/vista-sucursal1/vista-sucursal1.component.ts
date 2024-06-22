import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Sucursal1Model } from 'src/app/shared/sucursal1.model';
import { Sucursal1Service } from 'src/app/shared/sucursal1.service';

@Component({
  selector: 'app-vista-sucursal1',
  templateUrl: './vista-sucursal1.component.html',
  styleUrls: ['./vista-sucursal1.component.css']
})
export class VistaSucursal1Component implements OnInit {

  sucursal: Observable<Sucursal1Model[]> | undefined;

  constructor(private sucursalService: Sucursal1Service){}

  ngOnInit(): void {
    this.sucursal = this.sucursalService.obtenerSucursal1();
  }

  borrarSucursal(id:string){
    this.sucursalService.borrarSucursal1(id).subscribe(()=>{
      this.sucursal = this.sucursalService.obtenerSucursal1();
    })
  }
}

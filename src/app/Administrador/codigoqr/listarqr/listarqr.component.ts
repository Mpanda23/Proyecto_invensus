import { Component, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-listarqr',
  templateUrl: './listarqr.component.html',
  styleUrls: ['./listarqr.component.css']
})
export class ListarqrComponent {
  @Input() codigosGenerados: any[] = [];
  @Output() volverClicked = new EventEmitter<void>();

  constructor(private http: HttpClient) { }

  volver() {
    this.volverClicked.emit();
  }

  getQRImageUrl(qr: string, producto: any): string {
    return typeof qr === 'string' ? atob(qr) : `data:image/png;base64,${producto.qr}`;
  }

  buscarProductos(terminoBusqueda: string) {
    if (terminoBusqueda.trim() !== '') {
      this.http.get<any[]>('api/productos', { params: { nombre: terminoBusqueda } })
        .subscribe(data => {
          this.codigosGenerados = data;
        }, error => {
          console.error('Error al buscar productos', error);
        });
    } else {
      this.codigosGenerados = [];
    }
  }
}

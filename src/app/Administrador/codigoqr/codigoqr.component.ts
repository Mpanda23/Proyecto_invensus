import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { QrGeneratorService } from './qr-generator.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-codigoqr',
  templateUrl: './codigoqr.component.html',
  styleUrls: ['./codigoqr.component.css']
})
export class CodigoqrComponent implements OnInit {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  codigosGenerados: any[] = [];
  idProducto: string = '';
  isQRGenerated: boolean = false;
  terminoBusqueda: string = '';
  productos: any[] = [];
  mostrarListaCodigos: boolean = false;
  volverGenerador: boolean = false; // Definir la propiedad volverGenerador

  @ViewChild('qrCodeImage') qrCodeImage!: ElementRef;

  constructor(
    private qrService: QrGeneratorService,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit() {
    this.qrService.getProductosQR().subscribe((data: any[]) => {
      this.codigosGenerados = data;
    });
  }

  generarQR(id: string) {
    this.qrService.generateQR(id).subscribe((response: { qr: string }) => {
      console.log(response);
      this.isQRGenerated = true;
      this.updateQRCodeImage(response.qr);
    });
  }

  getQRImageUrl(qr: string, producto: any): string {
    return typeof qr === 'string' ? atob(qr) : `data:image/png;base64,${producto.qr}`;
  }

  updateQRCodeImage(qr: string): void {
    const imageUrl = this.getQRImageUrl(qr, this.productos);

    if (this.qrCodeImage && this.qrCodeImage.nativeElement) {
      this.qrCodeImage.nativeElement.src = imageUrl;
    }
  }

  mostrarCodigosGenerados() {
    this.mostrarListaCodigos = true;
    this.isQRGenerated = false;
    this.volverGenerador = true;
  }

  volver() {
    this.mostrarListaCodigos = false;
    this.volverGenerador = false;
  }

  buscar() {
    if (this.terminoBusqueda.trim() !== '') {
      this.http.get<any[]>('api/productos', { params: { nombre: this.terminoBusqueda } })
        .subscribe(data => {
          this.productos = data;
        }, error => {
          console.error('Error al buscar productos', error);
        });
    } else {
      this.productos = [];
    }
  }
}

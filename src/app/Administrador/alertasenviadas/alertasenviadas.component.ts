import { Component, OnInit } from '@angular/core';
import { AlertasEnviadasService } from './alertas-enviadas.service';

@Component({
  selector: 'app-alertasenviadas',
  templateUrl: './alertasenviadas.component.html',
  styleUrls: ['./alertasenviadas.component.css']
})
export class AlertasenviadasComponent implements OnInit {
  alertasEnviadas: any[] | undefined;
  errorMessage: string | undefined;

  constructor(private alertasService: AlertasEnviadasService) {}

  ngOnInit(): void {
    this.alertasService.getAlertasEnviadas().subscribe(
      data => {
        this.alertasEnviadas = data;
      },
      error => {
        this.errorMessage = 'Error al obtener las alertas enviadas: ' + error.message;
      }
    );
  }
}

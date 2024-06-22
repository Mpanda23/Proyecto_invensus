import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as Notiflix from 'notiflix';

@Component({
  selector: 'app-alertas',
  templateUrl: './alertas.component.html',
  styleUrls: ['./alertas.component.css']
})
export class AlertasComponent {
  datos: FormGroup;

  constructor(private httpClient: HttpClient) {
    this.datos = new FormGroup({
      correo: new FormControl('', [Validators.required, Validators.email]),
      asunto: new FormControl('', Validators.required),
      mensaje: new FormControl('', Validators.required)
    });
  }

  enviarCorreo() {
    if (this.datos.valid) {
      Notiflix.Loading.standard("enviando..");
      const params = {
        email: this.datos.value.correo,
        asunto: this.datos.value.asunto,
        mensaje: this.datos.value.mensaje
      };

      console.log(params);
      this.httpClient.post('http://localhost:5000/envio', params).subscribe(
        (resp) => {
          console.log(resp);
          Notiflix.Loading.remove();
          Notiflix.Notify.success("Enviado Correctamente");
          this.datos.reset();
        },
        (error) => {
          console.error(error);
          Notiflix.Loading.remove();
          Notiflix.Notify.failure("Error al enviar el correo");
        }
      );
    } else {

      Notiflix.Notify.failure("Por favor completa todos los campos correctamente.");
    }
  }
}

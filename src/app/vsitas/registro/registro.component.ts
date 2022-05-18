import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiClientesService } from 'src/app/servicios/api-clientes.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent implements OnInit {
  constructor(private service: ApiClientesService, private ruta:Router) {}

  ngOnInit(): void {}

  FormData(data: any) {
    this.service.RegistroUsuario(data).subscribe((datos) => {
      console.warn(datos);
      this.ruta.navigate(['login'])
    });
    console.warn(data);
  }
}

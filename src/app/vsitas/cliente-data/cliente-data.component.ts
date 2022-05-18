import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiClientesService } from 'src/app/servicios/api-clientes.service';

@Component({
  selector: 'app-cliente-data',
  templateUrl: './cliente-data.component.html',
  styleUrls: ['./cliente-data.component.css']
})
export class ClienteDataComponent implements OnInit {
  cliente:string = '';
  constructor(private ruta:Router, private servicio:ApiClientesService) { }

  ngOnInit(): void {
  }

  buscar(cliente:string){
    cliente = this.cliente
    if(this.cliente==""){
    alert('NO HA INGRESADO UN CODIGO DE CLIENTE')
     this.ruta.navigate(['data'])
    }else{
      this.ruta.navigate(['cliente/'+cliente]);
    }
    
  }

}

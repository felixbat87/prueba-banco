import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ApiLoginService } from 'src/app/servicios/api-login.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user: string = '';
  password: string = '';
  datos:any=[];

  //importando servicio y metodo de router
  constructor(private ruta: Router, private servicio: ApiLoginService) {}

  ngOnInit(): void {}

  registrarse() {
    //redireccionar a la vista registro
    this.ruta.navigate(['registro']);
  }

  //metodo de Login
  login(user: string, password: string) {
    user = this.user;
    password = this.password;
  //conectando al servicio de  la api login y  validando si el array me trae datos nulo o VACIO
   this.servicio.login(user, password).subscribe((data) => {
    this.datos=data;
    console.log(this.datos);
    this.ruta.navigate(['data']);
    });
  }
}

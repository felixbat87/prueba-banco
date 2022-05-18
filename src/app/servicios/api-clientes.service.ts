import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiClientesService {

  constructor(private http: HttpClient) { }


/// registro de Usuario
  RegistroUsuario(data:any){
    return this.http.post('http://localhost:3000/registro',data);
  }

  cliente(ID:string):Observable<any[]>{
    return this.http.get<any[]>('http://localhost:3000/cliente/'+ID);
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiLoginService {

  constructor(private http:HttpClient) { }


  login(usuario:string, password:string):Observable<any> {
    return this.http.get('http://localhost:3000/login/'+usuario+'/'+password);
  }


  

}

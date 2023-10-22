import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GLOBAL } from './GLOBAL';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  public url = GLOBAL.url;

  constructor(private _http: HttpClient) {}

  createUsuario(data: any): Observable<any> {
    let headers = new HttpHeaders().set('Content-type', 'application/json');
    return this._http.post(this.url + '/createUsuario', data, {
      headers: headers,
    });
  }

  getUsuarios(filtro: any): Observable<any> {
    let headers = new HttpHeaders().set('Content-type', 'application/json');
    return this._http.get(this.url + '/getUsuarios/' + filtro, {
      headers: headers,
    });
  }
}

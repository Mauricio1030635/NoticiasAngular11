import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(private http : HttpClient ) { }

  getServicio(parametros:any):Observable<any>  {
    const url =`https://newsapi.org/v2/top-headlines?country=${parametros[1].valor}&category=${parametros[0].valorx}&apiKey=9db6b09e5f784b39adcbb1cf762c2c60`;
    return this.http.get(url);
  }
}

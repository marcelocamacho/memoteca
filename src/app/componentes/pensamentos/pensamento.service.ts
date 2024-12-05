import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pensamento } from './pensamento/pensamento';
import { first, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PensamentoService {

  private readonly API = 'http://localhost:3000/pensamentos'

  constructor(private http: HttpClient) { }

  listar(): Observable<Pensamento[]>{
       return this.http.get<Pensamento[]>(this.API)
       .pipe(
          first(),
          tap(pensamento => console.log(pensamento))
        );
  }

  criar(pensamento:Pensamento):Observable<Pensamento>{
    return this.http.post<Pensamento>(this.API,pensamento);
  }

  editar(pensamento:Pensamento): Observable<Pensamento>{
    const url = `${this.API}/${pensamento.id}`;
    return this.http.put<Pensamento>(url,pensamento);
  }

  excluir(id: string): Observable<Pensamento>{
    const url = `${this.API}/${id}`;
    return this.http.delete<Pensamento>(url);
  }

  buscarPorId(id:string): Observable<Pensamento>{
    const url = `${this.API}/${id}`;
    return this.http.get<Pensamento>(url);
  }

}

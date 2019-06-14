import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Produto } from './produto';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = "http://localhost:3000/produtos";

@Injectable({
  providedIn: 'root'
})
export class ProdutoApiService {

  constructor(private http: HttpClient) { }

  getProdutos (): Observable<Produto[]> {
    return this.http.get<Produto[]>(apiUrl)
      .pipe(
        tap(heroes => console.log('fetched Produtos')),
        catchError(this.handleError('getProdutos', []))
      );
  }
  
  getProduto(id: number): Observable<Produto> {
    const url = `${apiUrl}/${id}`;
    return this.http.get<Produto>(url).pipe(
      tap(_ => console.log(`fetched Produto id=${id}`)),
      catchError(this.handleError<Produto>(`getProduto id=${id}`))
    );
  }
  
  addProduto (produto): Observable<any> {
    return this.http.post(apiUrl, produto, httpOptions).pipe(      
      catchError(this.handleError('addProduto'))
    );
  }
  
  updateProduto (id, produto): Observable<any> {
    const url = `${apiUrl}/${id}`;
    return this.http.put(url, produto, httpOptions).pipe(
      catchError(this.handleError('updateProduto'))
    );
  }
  
  deleteProduto (id) {
    const url = `${apiUrl}/${id}`;
  
    return this.http.delete(url, httpOptions).pipe(
      catchError(this.handleError('deleteProduto'))
    );
  }


  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      console.error(error); // log to console instead
  
      return of(result as T);
    };
  }
}

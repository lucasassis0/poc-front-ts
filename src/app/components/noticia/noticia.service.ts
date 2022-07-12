import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Noticia } from './noticia.model';

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {
  baseUrl = 'http://localhost:5000/noticias';
  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessageErro(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: ['red-background'],
    })
  }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  criar(noticia: Noticia): Observable<Noticia> {
    return this.http.post<Noticia>(this.baseUrl, noticia);
  }
  ler(): Observable<Noticia[]>{
    return this.http.get<Noticia[]>(this.baseUrl);
  }
  deletar(id: string): Observable<Noticia>{
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Noticia>(url);
  }
  lerPorId(id: string):Observable<Noticia>{
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Noticia>(url);
  }
  alterar(noticia: Noticia):Observable<Noticia>{
    console.log('noticia: ', noticia);
    return this.http.put<Noticia>(this.baseUrl, noticia);
  }
}

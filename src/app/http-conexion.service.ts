import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpConexionService {

  constructor(private http :HttpClient) { }
  private visibleBar = new BehaviorSubject<boolean>(false);
  visibleBar$ = this.visibleBar.asObservable();
  private visibleFooter = new BehaviorSubject<boolean>(true);
  visibleFooter$ = this.visibleFooter.asObservable();
  private temaBar = new BehaviorSubject<string>('');
  temaBar$ = this.temaBar.asObservable();
show() {
    this.visibleBar.next(true);
  }

  hide() {
    this.visibleBar.next(false);
  }
  setTema(tema:string){
    this.temaBar.next(tema);
  }
  showF() {
    this.visibleFooter.next(true);
  }

  hideF() {
    this.visibleFooter.next(false);
  }
  get(url:string){
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      "Authorization": "Bearer "+ token
    });
    return this.http.get(url,{headers});

  }
  post_login(url:string,data:any){
   return this.http.post(url,data);
  }
  post(url:string,body:any){
    
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      "Authorization": "Bearer "+ token
    });
    return this.http.post(url, body, { headers });

  }
  delete(url: string): Observable<any> {
    const token = localStorage.getItem('token'); // Obtén el token del localStorage o de donde lo almacenes
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}` // Incluye el token en el encabezado Authorization
    });

    return this.http.delete(url, { headers, observe: 'response' })
      .pipe(
        catchError(this.handleError) // Maneja errores
      );
  }

  private handleError(error: any): Observable<never> {
    console.error('Error occurred:', error);
    return throwError(() => new Error('An error occurred; please try again later.'));
  }
  put(url: string, body: any): Observable<any> {
    const token = localStorage.getItem('token'); // Obtén el token del localStorage
    const headers = new HttpHeaders({
      'Content-Type': 'application/json', // Especifica el tipo de contenido
      'Authorization': `Bearer ${token}` // Agrega el token en el encabezado
    });

    return this.http.put(url, body, { headers })
      .pipe(
        catchError(this.handleError) // Manejo de errores
      );
  }

}

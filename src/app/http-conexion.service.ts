import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, throwError } from 'rxjs';

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
  delete(url: string) {
    return this.http.delete(url, { observe: 'response' })
      .pipe(
        catchError(this.handleError)
      );
  }
  
  private handleError(error: HttpErrorResponse) {
    console.error('An error occurred:', error.message);
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
  
}

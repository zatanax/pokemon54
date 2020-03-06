
import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';
import { HttpClient , HttpErrorResponse  } from '@angular/common/http';
import {  throwError, Observable } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class FomentoService {

   /// private api =  'http://localhost:555/';
  // private api = 'http://localhost:555';
   private api =  environment.apiFomento;
  // private api = 'https://localhost:44361';
  constructor( private http: HttpClient  ) { }
//// GET: api/Usuario
// GET: api/Usuario/5
 // PUT: api/Usuario/5
 // POST: api/Usuario
 // DELETE: api/Usuario/5


 handleError(error: HttpErrorResponse) {
  let errorMessage = 'Unknown error!';
  if (error.error instanceof ErrorEvent) {
    // Client-side errors
    errorMessage = `Error: ${error.error.message}`;
  } else {
    // Server-side errors
    errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
  }
  window.alert(errorMessage);
  return throwError(errorMessage);
}
// public sendGetRequest(){
//   return this.http.get(this.REST_API_SERVER).pipe(catchError(this.handleError));
// }

// usuarios




}

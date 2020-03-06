import { Injectable } from '@angular/core';
import { Ipokemon } from './../_interfaces/ipokemon';
import { environment } from '../../environments/environment';
import { HttpClient , HttpErrorResponse  } from '@angular/common/http';
import {  throwError, Observable } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private api = environment.pokeapi;

  constructor(
    private http: HttpClient) {}

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
      getAllPokemon() {
      const path = `${environment.pokeapi}/api/digimon`;
      return this.http.get<[Ipokemon]>(path).pipe(catchError(this.handleError));
      }

      getPokemonbyId(id: number) {
        const path = `${environment.pokeapi}/api/digimon/id/${id}`;
        return this.http.get<[Ipokemon]>(path).pipe(catchError(this.handleError));
      }
      getPokemonbyName(name: string) {
        const path = `${environment.pokeapi}/api/digimon/name/${name}`;
        return this.http.get<[Ipokemon]>(path).pipe(catchError(this.handleError));
      }
      getPokemonbyLevel(level: string ) {
        const path = `${environment.pokeapi}/api/digimon/level/${level}`;
        return this.http.get<[Ipokemon]>(path).pipe(catchError(this.handleError));
      }
      public search(term: string) {
        return this.http.get('https://en.wikipedia.org/w/api.php', {
          params: {
            action: 'query',
            format: 'json',
            list: 'search',
            utf8: '1',
            srsearch: term,
            origin: '*'
          }
        });
      }
}

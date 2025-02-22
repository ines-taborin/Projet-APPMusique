import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Liste } from '../interfaces/liste';

const httpOptions = {headers:new HttpHeaders({
  'Content-Type': 'application/json',
})};

@Injectable({
  providedIn: 'root',
})
export class ListesService {
  API_URL = 'http://localhost/api-musique-main/api/listes/';

  constructor(private http: HttpClient) {}

  getListes(): Observable<Liste[]> {
    return this.http.get<Liste[]>(this.API_URL);
  }

  supprimerListe(id: number): Observable<void> {
    return this.http.delete<void>(this.API_URL + `/?id=${id}`, httpOptions);
  }

  creerListe(liste: Liste): Observable<void>{
    return this.http.post<void>(this.API_URL, liste);
  }

  modifierListe(liste: Liste, id: number): Observable<void>{
    return this.http.put<void>(this.API_URL+ `/?id=${id}`, liste);
  }
}

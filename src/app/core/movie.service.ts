import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../model/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  //baseUrl = "http://localhost:8080/imdb/movie";
  baseUrl = "https://web-crawler-imdb.herokuapp.com/imdb/movie";

  constructor(private http: HttpClient) { }

  read(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.baseUrl);
  }

  readById(id: string): Observable<Movie> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Movie>(url);
  }

  update(movie: Movie): Observable<Movie> {
    const url = `${this.baseUrl}/${movie.id}`;
    return this.http.put<Movie>(url, movie);
  }

  delete(movie: Movie): Observable<void> {
    const url = `${this.baseUrl}/${movie.id}`;
    return this.http.delete<void>(url);
  }

  deleteAll(): Observable<void> {
    return this.http.delete<void>(this.baseUrl);
  }
}
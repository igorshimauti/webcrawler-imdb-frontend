import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrawlerService {

  //baseUrl = "http://localhost:8080/imdb/crawler";
  baseUrl = "https://web-crawler-imdb.herokuapp.com/imdb/crawler";

  constructor(private http: HttpClient) { }

  run(): Observable<void> {
    const url = `${this.baseUrl}/run`;
    return this.http.post<void>(url, {});
  }
}
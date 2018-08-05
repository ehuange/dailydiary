import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

export class Day {
  title: string;
  body: string;
  date: string;
}

@Injectable()
export class ApiService {
  host = 'http://localhost:3000'
  constructor(private httpClient: HttpClient) { }

  getDailyPages(): Observable<Day[]> {
    return this.httpClient.get<Day[]>(`${this.host}/api/v1/pages`);
  }

  getSpecificPage(day: string) {
    return this.httpClient.get<Day[]>(`${this.host}/api/pages/${day}`);
  }

  getTodayPage() {
    return this.httpClient.get<Day[]>(`${this.host}/api/pages/today`);
  }

  createPage(title: string, body: string, date: string) {
    return this.httpClient.post<Day[]>(`${this.host}/api/pages`, { title, body, date });
  }

  editPage(title: string, body: string, date: string) {
    return this.httpClient.put<Day[]>(`${this.host}/api/pages`, { title, body, date });
  }

  getKeywordPage(keyword: string) {
    return this.httpClient.get<Day[]>(`${this.host}/api/v1/pages/search/${keyword}`)
  }
}
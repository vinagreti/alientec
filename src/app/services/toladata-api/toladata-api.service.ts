import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const API = 'https://dev.toladata.io/api';

@Injectable({
  providedIn: 'root'
})
export class ToladataApiService {

  constructor(
    private http: HttpClient,
  ) { }

  list<T>(path) {
    const endpoint = `${API}/${path}/`;
    return this.http.get<T>(endpoint);
  }

  delete<T>(path: string) {
    const endpoint = `${API}/${path}/`;
    return this.http.delete<T>(endpoint);
  }
}

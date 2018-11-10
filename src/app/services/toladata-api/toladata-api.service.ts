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

  list(path) {
    const endpoint = `${API}/${path}/`;
    return this.http.get(endpoint);
  }

  drop(path: string) {
    const endpoint = `${API}/${path}/`;
    return this.http.delete(endpoint);
  }
}

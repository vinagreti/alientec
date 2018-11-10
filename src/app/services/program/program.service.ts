import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const API = 'https://reqres.in/api';

@Injectable({
  providedIn: 'root'
})
export class ProgramService {

  constructor(
    private http: HttpClient,
  ) { }

  list() {
    const endpoint = `${API}/users`;
    return this.http.get(endpoint);
  }

}

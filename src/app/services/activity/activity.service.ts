import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DropActivity } from '../../redux/activity/activity.actions';

const API = 'https://reqres.in/api';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  constructor(
    private http: HttpClient,
  ) { }

  list() {
    const endpoint = `${API}/unknown`;
    return this.http.get(endpoint);
  }

  drop(data: DropActivity) {
    const endpoint = `${API}/unknown/${data.activity.id}`;
    return this.http.delete(endpoint);
  }
}

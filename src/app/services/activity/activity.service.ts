import { Injectable } from '@angular/core';
import { DropActivity } from '../../redux/activity/activity.actions';
import { ToladataApiService } from '@app/services/toladata-api/toladata-api.service';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  constructor(
    private toladataApi: ToladataApiService,
  ) { }

  list() {
    return this.toladataApi.list('workflowlevel2');
  }

  drop(data: DropActivity) {
    const endpoint = `workflowlevel2/${data.activity.id}`;
    return this.toladataApi.drop(endpoint);
  }
}

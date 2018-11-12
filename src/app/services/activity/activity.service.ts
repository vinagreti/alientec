import { Injectable } from '@angular/core';
import { ToladataApiService } from '@app/services/toladata-api/toladata-api.service';
import { Activity } from '@app/models/activity';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  constructor(
    private toladataApi: ToladataApiService,
  ) { }

  add(activity?: Activity) {
    return this.toladataApi.post<Activity>('workflowlevel2', activity);
  }

  list(filter?: any) {
    return this.toladataApi.list<Activity[]>('workflowlevel2');
  }

  delete(activity: Activity) {
    const endpoint = `workflowlevel2/${activity.id}`;
    return this.toladataApi.delete(endpoint);
  }
}

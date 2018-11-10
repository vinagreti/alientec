import { Injectable } from '@angular/core';
import { ToladataApiService } from '@app/services/toladata-api/toladata-api.service';

@Injectable({
  providedIn: 'root'
})
export class ProgramService {

  constructor(
    private toladataApi: ToladataApiService,
  ) { }

  list() {
    return this.toladataApi.list('workflowlevel1');
  }

}

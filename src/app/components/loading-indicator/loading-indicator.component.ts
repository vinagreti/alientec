import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-loading-indicator',
  templateUrl: './loading-indicator.component.html',
  styleUrls: ['./loading-indicator.component.scss']
})
export class LoadingIndicatorComponent implements OnInit {

  @Input() centerScreen: boolean;

  @Input() autoHeight: boolean;

  @Input() msg: string;

  constructor() { }

  ngOnInit() {
  }

}

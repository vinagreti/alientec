import { Component, OnInit, Input } from '@angular/core';
import { Program } from '@app/models/program';

@Component({
  selector: 'app-program-list-item',
  templateUrl: './program-list-item.component.html',
  styleUrls: ['./program-list-item.component.scss']
})
export class ProgramListItemComponent implements OnInit {

  @Input() program: Program;

  constructor() { }

  ngOnInit() {
  }

}

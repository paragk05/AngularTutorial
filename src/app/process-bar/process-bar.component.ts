import { BtnEv } from './../process-btn/process-btn.component';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-process-bar',
  templateUrl: './process-bar.component.html',
  styleUrls: ['./process-bar.component.css']
})
export class ProcessBarComponent implements OnInit {

  @Input()
  process : BtnEv
  constructor() { }

  ngOnInit(): void {
  }

}

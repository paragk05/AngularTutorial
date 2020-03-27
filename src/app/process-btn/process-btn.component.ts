import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { HomeService } from '../home.service';


@Component({
  selector: 'app-process-btn',
  templateUrl: './process-btn.component.html',
  styleUrls: ['./process-btn.component.css']
})
export class ProcessBtnComponent implements OnInit {

  pro = 0

  constructor(private bar : HomeService) { }

  @Output()
  btnClick : EventEmitter<BtnEv>= new EventEmitter();

  ngOnInit(): void {
  }

  onClk(num : number)
  {
    
    if(num===1)
    {
      this.pro=this.bar.inc(this.pro);
    }
    else if(num===2)
    {
      this.pro=this.bar.dec(this.pro)
    }
    let ev : BtnEv ={
      pro:this.pro
    }
    this.btnClick.emit(ev)
  }

  
}

export interface BtnEv{
  
  pro : number
}
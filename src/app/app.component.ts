import { BtnEv} from './process-btn/process-btn.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  ev : BtnEv
  onBtn(ev : BtnEv)
  {
   // this.pro=ev.pro;
    console.log(ev.pro)
    this.ev=ev;
  }
}

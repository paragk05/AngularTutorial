import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  val =0;
  bar='';
  constructor( private sr : HomeService) { }

  ngOnInit(): void {
  }

  clk(n : number)
  {
    if(n==1)
    {
      if(this.val==100){
        this.bar='bg-primary';
        return this.val;
      }      
      else
      {
        this.bar='bg-success';
        this.val=this.sr.inc(this.val);
      }
      
    }
    else if(n==2)
    {
      if(this.val==0)
      return this.val;
      else
      {
        this.bar='bg-danger';
        this.val=this.sr.dec(this.val);
      }

    }
    
  }

}

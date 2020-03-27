import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor() { }

  retVal=0;

  inc(i)
  {
    return i>=100? i : i+10;
  }
  dec(d)
  {
    return d<=0 ? d : d-10;
  }
}

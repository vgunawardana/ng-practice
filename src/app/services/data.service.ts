import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  

  constructor() { 

  }

  carTypes = [
    'benz', 'bmw', 'audi'
  ];

  myDataMethod(){
    return 'this is my data';
  }
}

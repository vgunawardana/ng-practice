import { Component } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  template: `<h1>hello anya richelle</h1>
  <ul>
    <li *ngFor='let arr of myArr'>{{arr}}</li>

  </ul>
  <div *ngIf='myArr.length==5'>{{obj.id}}</div>

  <div *ngIf="hello;then templ1 else templ2">{{hello}}</div>
  <ng-template #templ1>bye</ng-template>
  <ng-template #templ2>hi</ng-template>

  <p>{{obj.name}}</p>

  <img src="{{angLogo}}">
  <img [src]="angLogo">
  <img bind-src="angLogo">

  <button [disabled]="status" >Submit</button>
  <button (submit)="myEvent($event)">Event</button>

  <h3 [class]="colorStyle">{{name}}</h3>
  <h3 [class.red-title]="nameClass">{{name}}</h3>
  <h3 [style.color]="cssStyle">{{obj.address}}</h3>
  <h3 [style.color]="cssStyle ? 'blue' : 'pink'">{{obj.address}}</h3>

  <h3 [ngClass]="ngcolorStyle">{{name}}</h3>
  <h3 [ngStyle]="titleStyles">{{obj.address}}</h3>

  <p>{{property}}</p>
  <app-main></app-main>

  `,
  styles: [`
  h1{
    text-decoration:underline;
  }

  .red-title{
    color:red;
    
  }

  .large-title {
    font-size:4em;
  }

  `]
})
export class AppComponent {

  property : string = '';

  constructor(private dataservice : DataService) {
    console.log('hello constructor');
   }

  ngOnInit() {
    console.log(this.dataservice.carTypes);
    this.property = this.dataservice.myDataMethod();
  }

  colorStyle = "red-title";

  ngcolorStyle = {
    'red-title':true,
    'large-title':true
  };

  titleStyles = {
    'color':'yellow',
    'font-size':'4em'
  }

  

  angLogo = "https://i.stack.imgur.com/kS9Kf.png";

  name = "vindi";

  nameClass = true;

  status = true;

  hello = true;

  cssStyle = 'green';
  
  myArr = ['a','b','c','d','e'];

  obj : Student= {
    id : 'asa',
    name : 2444,
    address : 'hamburg'
  }

  myEvent(event){
    console.log("event triggers");
    console.log(event);
  }

}

interface Student{
    id : string;
    name : number;
    address : string;
}

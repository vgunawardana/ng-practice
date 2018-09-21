import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  property:string = '';

  constructor(private dataservice : DataService) {
    console.log('hello constructor');
   }

  ngOnInit() {
    console.log('hello ngOnInit');
    this.property = this.dataservice.myDataMethod();
  }

}

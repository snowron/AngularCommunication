import { Component, OnInit ,Input, HostListener  } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-sb2',
  templateUrl: './sb2.component.html',
  styleUrls: ['./sb2.component.css']
})
export class Sb2Component implements OnInit {

  constructor(private data:DataService){

  }

  ngOnInit() {
    this.data1.currentMessage().subscribe(mydata => { 
    console.log(mydata);
	
    });
  }
  
}

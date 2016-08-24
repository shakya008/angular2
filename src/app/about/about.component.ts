import { Component, OnInit } from '@angular/core';
import {MyService} from "./ServiceClass";
import {CmpParent} from "./di/parentCmp";


@Component({
  selector: 'my-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  providers: [MyService],
  directives: [CmpParent]
})
export class AboutComponent implements OnInit {

  constructor(public mySer:MyService) {
    console.log(mySer.title);
    //alert("jhfj");
  }

clickHandler(){
	console.log("fdhgd");
	console.log(this.mySer.title);
}
  ngOnInit() {
    console.log('Hello About');
    
  }

}

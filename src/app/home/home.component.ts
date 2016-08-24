import { Component, OnInit } from '@angular/core';
import {CmpL1} from './change-detect/comp-level1';
import {ItemListChange} from "./change-detect/list-item-change";
import {ObjectList} from "./change-detect/object-list";

@Component({
  selector: 'my-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  directives: [CmpL1, ItemListChange, ObjectList]
})
export class HomeComponent implements OnInit {
list:Array<string> = ['st1', 'st2'];
list2:Array<string> = ['st1', 'st2'];
  constructor() {
    // Do stuff
  }

  ngOnInit() {
    console.log('Hello Home');
  }

public addItem(){
	//this.list.push("Shyam");
	var newList = this.list.slice(0);
	newList.push("Shyam");
	this.list = newList;

}

public objectList=[
    {
    	"name":"Shyam",
    	"id": 1
    },
    {
    	"name":"Ram",
    	"id": 2
    }

]

public addObject(){
	this.objectList.push({"name":"Mohan", "id":3});
	/*var newObj = this.objectList.slice(0);
	newObj.push({"name":"Mohan", "id":3});
	this.objectList = newObj;*/
}
}

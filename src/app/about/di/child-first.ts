import {Component, Input, OnInit} from "@angular/core";
import {MyService} from "./../ServiceClass";

@Component({
	selector: "child-first",
	template: `
	<div>first-child {{title}}</div>
	<div>
	<button (click)="clickHandler()">check service instance</button>
	</div>
	`
})

export class ChildFirst implements OnInit{
	title:string;
	@Input() serObj: MyService;
	mySer: MyService;
	constructor(mySer: MyService){
		this.title = mySer.title;
		this.mySer = mySer;
	}
	ngOnInit(){

	}

	clickHandler(){
		console.log(this.serObj == this.mySer);
	}
}
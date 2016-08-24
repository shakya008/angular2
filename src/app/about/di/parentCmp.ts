import {Component} from "@angular/core";
import {MyService} from "./../ServiceClass";
import {ChildFirst} from "./child-first";

@Component({
	selector: "cmp-parent",
	template: `
	<div>cmp-parent {{title}}
	<div>
	<child-first [serObj] = "mySer"></child-first>
	</div>
	</div>
	`,
	directives: [ChildFirst]
})

export class CmpParent {
	title:string;
	constructor(mySer: MyService){
		this.title = mySer.title;
	}
}
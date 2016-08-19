import {Component, Input, Output, ChangeDetectionStrategy} from '@angular/core';

@Component({
	selector: 'item-list-change',
	template: `
    <div>
        <div>{{item}}</div>
    </div>
	`,
	changeDetection: ChangeDetectionStrategy.OnPush
})

export class ItemListChange {
	private _item:string;
	@Input()
	get item(){
		console.log("get item : ", this._item);
		return this._item;
	}
	set item(v){
		console.log(v);
		this._item = v;
	}
}

/*
* When we use Default strategy, change detection performed for all the items
* Same is not performed for OnPush case
*/
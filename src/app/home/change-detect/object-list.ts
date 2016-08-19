import {Component, Input, Output, ChangeDetectionStrategy} from '@angular/core';

@Component({
	selector:'show-item',
	template: `
    <div>{{item.name}}</div>
	`,
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShowItem {
	private _item:string;
	@Input()
	get item(){
		console.log(this._item);
		return this._item;
	}
	set item(v){
		this._item = v;
		console.log(this._item);
	}

}

@Component({
	selector: 'object-list',
	template: `
    <div>
        <div *ngFor="#item of objectList">
            <show-item [item]="item"></show-item>
        </div>
    </div>
	`,
	changeDetection: ChangeDetectionStrategy.OnPush,
	directives: [ShowItem]
})

export class ObjectList {

	@Input() obj:any;
	private _list:Array<any>;
	@Input()
	get objectList(){
		console.log(this._list);
		return this._list;
	}

	set objectList(items){
		this._list = items;
	}


}



import {Component, Input, Output, ChangeDetectionStrategy} from '@angular/core';

@Component({
	selector: 'cmp-l1',
	template: `
    <div>
        <div *ngFor="#item of list">{{item}}</div>
    </div>
	`,
	changeDetection: ChangeDetectionStrategy.OnPush
})

export class CmpL1 {
	@Input() list:Array<string>;
	@Input() obj:any;
}
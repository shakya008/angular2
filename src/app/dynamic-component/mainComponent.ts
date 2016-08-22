import {Component} from '@angular/core';
import {Dyna1P} from './dyna1.ts';
import {Dyna2P} from './templateDyna.ts';

@Component({
	selector:'main-cmp',
	template: require('./mainComponent.html'),
	directives: [Dyna1P, Dyna2P]
})

export class MainCmp {

}
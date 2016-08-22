import {Component, ComponentResolver, ViewContainerRef, OnInit, ComponentFactory} from "@angular/core"

@Component({
	selector: 'dyna-1p',
	template: `
	<div> parent
        <ng-content></ng-content>
	</div>
	`,
	host: {
		"(mouseenter)" : "mouseEntered($event)",
		"(mouseleave)" : "mouseleft($event)"
	}
})
export class Dyna1P implements OnInit{

    constructor(private _vcr: ViewContainerRef, private _cr: ComponentResolver) {}
    ngOnInit(){
    	//this.resolver.resolveComponent(PopoverContent).then((factory: ComponentFactory<any>) => {

    }

    createCmp(){
    	this._cr.resolveComponent(Dyna1C)
            .then((cmpFactory: ComponentFactory<any>)=>{
            	const ctxInjector = this._vcr.injector;
                    this._vcr.createComponent(cmpFactory, 0, ctxInjector);
            });
    }
    mouseEntered($event){
    	this.createCmp();
    }
    mouseleft($event){
    	//this._vcr.clear();
    }
}


@Component({
	selector: 'dyna-1c',
	template: `
    <div>child of dyna1P
       <ng-content></ng-content>
    </div>
	`
})

export class Dyna1C {

}
import {Component, ComponentResolver, ViewContainerRef, OnInit, ComponentFactory, Directive, TemplateRef, Input} from "@angular/core"


@Directive({
    selector: '[doLoad]',

})
export class DoLoad {
    private _doLoad:boolean=false;
    @Input()
    set doLoad(value:boolean){
        this._doLoad = value;
    }

     constructor(private _vr: ViewContainerRef, private _tr: TemplateRef<any>) {
    console.log("sdghj");
  }

  ngOnChanges(changes) {
    if(this._doLoad) {
      this._vr.createEmbeddedView(this._tr);
    } else {
      this._vr.clear();
    }
  }
}




@Component({
	selector: 'dyna-2p',
	template: `
	<div>
    <ng-content select="on-text"></ng-content>
    <template [doLoad]="show">
        <ng-content select="popover-content"></ng-content>
        </template>
	</div>
	`,
	host: {
		"(mouseenter)" : "mouseEntered($event)",
		"(mouseleave)" : "mouseleft($event)"
	},
    directives: [DoLoad]
})
export class Dyna2P implements OnInit{
    public show:boolean =false;
    constructor(private _vcr: ViewContainerRef, private _cr: ComponentResolver) {}
    ngOnInit(){
    	//this.resolver.resolveComponent(PopoverContent).then((factory: ComponentFactory<any>) => {

    }

    /*createCmp(){
    	this._cr.resolveComponent(DoLoad)
            .then((cmpFactory: ComponentFactory<any>)=>{
            	const ctxInjector = this._vcr.injector;
                    this._vcr.createComponent(cmpFactory, 0, ctxInjector);
            });
    }*/
    mouseEntered($event){
    	//this.createCmp();
        this.show = true;
    }
    mouseleft($event){
    	//this._vcr.clear();
        //this.show = false;
    }
}



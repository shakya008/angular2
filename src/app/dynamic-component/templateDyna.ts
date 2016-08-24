import {Component, ComponentResolver, ViewContainerRef, OnInit, ComponentFactory,
 Directive, TemplateRef, Input, ElementRef, ViewChild, ChangeDetectionStrategy} from "@angular/core"
import {ElemPosition} from "../shared/ElemPositionService";

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
    <div #popover style="min-width:200px">
    <ng-content select="on-text"></ng-content>
    </div>
    <div #popoverDiv [style.top]="top + 'px'"
     [style.left]="left + 'px'"
    [style.position]="'absolute'"
     >
    <template [doLoad]="show">
        <ng-content select="popover-content"></ng-content>
        </template>
        </div>
	</div>
	`,
	host: {
		"(mouseenter)" : "mouseEntered($event)",
		"(mouseleave)" : "mouseleft($event)"
	},
    directives: [DoLoad],
    providers: [ElemPosition],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class Dyna2P implements OnInit{
    public show: boolean =false;
    public top: number= -1;
    public left: number= -1;
    @Input() title: string
    constructor(private _vcr: ViewContainerRef, private _cr: ComponentResolver, private elPos: ElemPosition) {}
    ngOnInit(){
    	const p =  this.elPos.positionElements(this.popover.nativeElement, this.popoverDiv.nativeElement, "bottom");
        this.top = p.top;
        this.left = p.left;
        console.log(p);

    }
    @ViewChild("popoverDiv")
    popoverDiv: ElementRef;

    @ViewChild("popover")
    popover: ElementRef;

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
        /*const p = this.elPos.positionElements(this.popover.nativeElement, this.popoverDiv.nativeElement, "bottom");
        console.log(p);*/


    }
    mouseleft($event){
    	//this._vcr.clear();
        this.show = false;
    }
}



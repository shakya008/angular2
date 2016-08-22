//our root app component
import {Component, Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector : '[ngIfIn][ngIfValue]',
  inputs : ['ngIfIn', 'ngIfValue']
})
class NgIfIn {
  _value: any;
  _obj: any;
  constructor(private _vr: ViewContainerRef, private _tr: TemplateRef<any>) {
    console.log("sdghj");
  }

  set ngIfValue(value: any) {
    this._value = value;
  }

  set ngIfIn(obj: any) {
    this._obj = obj;
  }

  ngOnChanges(changes) {
    if(this._obj.make == this._value) {
      this._vr.createEmbeddedView(this._tr);
    } else {
      this._vr.clear();
    }
  }
}

@Component({
  selector: 'my-app2',
  template : `
    <template  [ngIfValue]="'asd'" [ngIfIn]="obj">
      This will print
    </template>
    <template [ngIfValue]="'bsd'" [ngIfIn]="obj">
      This will print after 2 seconds
    </template>
  `,
  directives : [NgIfIn]
})
export class App {
  public obj = {"make" : "asd"};

  constructor() {
    setTimeout(() => this.obj = {'make': 'bsd'}, 2000);
  }
}
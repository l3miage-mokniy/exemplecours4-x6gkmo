import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'hello',
  template: `
    <h1>Hello MIAGE {{nom}}!
    <input type="range"
           [(ngModel)] = "value"
           (ngModelChange) = "update($event)"
           />
    {{ getValue(value) }}
    </h1>
  `,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent  {
  value = 5;
  @Input() nom: string = "DEFAUT";
  @Output() monEvt = new EventEmitter<number>();

  getValue(v: number): number {
    return Math.round(v/10);
  }

  update(v: number): void {
    this.monEvt.emit( this.getValue(v) );
  }


}

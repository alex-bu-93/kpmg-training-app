import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit, OnChanges {

  // private _parentCount: number;
  // @Input() set parentCount(value: number) { this._parentCount = value; }
  // get parentCount(): number { return this._parentCount; }

  // @Input() parentCount2 = 1;

  @Input() parentCount: number;
  @Output() parentCountChange = new EventEmitter<number>();

  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes', changes);
  }

  ngOnInit(): void {
    console.log('ngOnInit');
  }
}

import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-reactive-sub-label',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<span *ngIf="subLabel" class="sub-label">( {{subLabel}} )</span>',
  styles: [`
    .sub-label {
      position: absolute;
      bottom: -20px;
      right: 0;
      width: 100%;
      font-size: 0.8em;
      color: #8b8b8b;
      text-align: right;
      line-height: 20px;
    }
  `]
})
export class ReactiveSubLabelComponent {

  @Input() subLabel: string = null;

}

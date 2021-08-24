import { ChangeDetectionStrategy, Component, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-reactive-label',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <label class="text-muted d-inline align-middle text-nowrap mr-2 mb-0" [for]="fieldId">
      <span style="font-size: 12px">{{label}}</span>
      <span *ngIf="hasRequiredIndicator" class="text-danger ml-1">*</span>
      <i *ngIf="tooltip" nz-tooltip
         nz-icon nzType="question-circle"
         style="font-size: 14px"
         class="cursor-help ml-1"
         [nzTooltipTitle]="tooltip">
      </i>
    </label>`,
  styles: [`:host { display: flex; align-items: center }`]
})
export class ReactiveLabelComponent {

  @Input() fieldId: string;
  @Input() hasRequiredIndicator: boolean;
  @Input() tooltip: string | TemplateRef<void>;
  @Input() label: string;

}

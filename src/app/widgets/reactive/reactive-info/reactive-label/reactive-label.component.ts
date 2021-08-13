import { ChangeDetectionStrategy, Component, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-reactive-label',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <label class="text-muted d-inline align-middle text-nowrap mr-2 mb-0"
           [for]="fieldId"
           [class.text-nowrap]="!noTextNowrap">
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

  /**
   * fieldId is a unique field identifier to match field with it's label / tooltip message
   */
  @Input() fieldId: string;

  /**
   * hasRequiredIndicator is a flag to show or not red-color start in label
   */
  @Input() hasRequiredIndicator: boolean;

  /**
   * Tooltip is some text which appear on hover info-icon next to label
   */
  @Input() tooltip: string | TemplateRef<void>;

  /**
   * label is a main text characterizing the field
   */
  @Input() label: string;

  /**
   * showTooltip - flag to show tooltip message
   */
  @Input() noTextNowrap: boolean;
}

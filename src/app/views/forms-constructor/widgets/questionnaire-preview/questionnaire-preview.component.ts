import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-questionnaire-preview',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './questionnaire-preview.component.html'
})
export class QuestionnairePreviewComponent {

  @Input() questionnaire;
  @Input() isDisabled: boolean;

  isPreviewModalVisible: boolean;

}

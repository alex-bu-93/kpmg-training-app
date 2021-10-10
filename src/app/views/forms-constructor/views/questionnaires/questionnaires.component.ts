import { ChangeDetectionStrategy, Component } from '@angular/core';
import { QuestionnairesService }              from '@services/questionnairies';

@Component({
  selector: 'app-questionnaires',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './questionnaires.component.html'
})
export class QuestionnairesComponent {

  questionnaires$ = this.questionnairesService.getQuestionnaires();

  constructor(
    private questionnairesService: QuestionnairesService
  ) {
  }
}

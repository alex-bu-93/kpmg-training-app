import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { QuestionnairesService }                                 from '@services/questionnairies';
import { finalize, tap }         from 'rxjs/operators';

@Component({
  selector: 'app-questionnaires',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './questionnaires.component.html'
})
export class QuestionnairesComponent {

  questionnaires$ = this.questionnairesService.getQuestionnaires();

  constructor(
    private cdr: ChangeDetectorRef,
    private questionnairesService: QuestionnairesService
  ) {
  }

  deleteQuestionnaire(questionnaire): void {
    questionnaire['isDeleteLoading'] = true;
    questionnaire['deleteQuestionnaire$'] = this.questionnairesService.deleteQuestionnaire(questionnaire).pipe(
      tap(() => this.questionnaires$ = this.questionnairesService.getQuestionnaires()),
      finalize(() => { questionnaire['isDeleteLoading'] = false; this.cdr.markForCheck(); })
    );
  }
}

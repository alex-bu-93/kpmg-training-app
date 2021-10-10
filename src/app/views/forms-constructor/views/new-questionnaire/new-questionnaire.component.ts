import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators }         from '@angular/forms';
import { Router }                                                from '@angular/router';
import { QuestionnairesService }                                 from '@services/questionnairies';
import { markTouchedAndScroll }                                  from '@widgets/reactive/reactive-funcs';
import { Observable }                                            from 'rxjs';
import { finalize, tap }                                         from 'rxjs/operators';

@Component({
  selector: 'app-new-questionnaire',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './new-questionnaire.component.html'
})
export class NewQuestionnaireComponent {

  colOptions = Array.from({length: 12}).map((x, i) => i + 1).map(x => ({label: x, value: x}));
  typeOptions = [
    {label: 'Текст (короткий ответ)', value: 'input'},
    {label: 'Текст (развернутый ответ)', value: 'text-area'},
    {label: 'Флаг', value: 'check-box'},
    {label: 'Календарь', value: 'date-picker'}
  ];

  isCreateQuestionnaireLoading: boolean;

  fg = new FormGroup({
    name: new FormControl(null, Validators.required),
    description: new FormControl(null, Validators.required),
    fields: new FormArray([this.fieldFg], Validators.required),
  });

  createQuestionnaire$: Observable<any>;

  get fieldFg(): FormGroup {
    return new FormGroup({
      type: new FormControl(null, Validators.required),
      label: new FormControl(),
      placeholder: new FormControl(),
      col: new FormControl(12),
      maxLength: new FormControl(50),
      minRows: new FormControl(4),
      maxRows: new FormControl(15)
    });
  }

  constructor(
    private router: Router,
    private cdr: ChangeDetectorRef,
    private questionnairesService: QuestionnairesService
  ) {
  }

  onCreateQuestionnaire(): void {
    if (this.fg.valid) {
      this.isCreateQuestionnaireLoading = true;
      this.createQuestionnaire$ = this.questionnairesService.createQuestionnaire(this.fg.value).pipe(
        tap(() => this.router.navigate(['forms-constructor', 'questionnaires'])),
        finalize(() => { this.isCreateQuestionnaireLoading = false; this.cdr.markForCheck(); })
      );
    } else markTouchedAndScroll(this.fg);
  }
}

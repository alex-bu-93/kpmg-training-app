import { Injectable }     from '@angular/core';
import { HttpClient }     from '@angular/common/http';
import { ReactiveField }  from '@widgets/reactive/reactive-fields/reactive-field';
import { Observable }     from 'rxjs';

export interface Questionnaires {
  id?: any;
  name: string;
  descriptions: string;
  fields: ReactiveField[];
}

@Injectable({providedIn: 'root'})
export class QuestionnairesService {

  constructor(
    private http: HttpClient
  ) {
  }

  getQuestionnaires(): Observable<Questionnaires[]> {
    return this.http.get<Questionnaires[]>('questionnaires');
  }

  postQuestionnaire(questionnaire: Questionnaires): Observable<any> {
    return this.http.post<any>('questionnaires', questionnaire);
  }

  deleteQuestionnaire(questionnaire: Questionnaires): Observable<any> {
    return this.http.delete<any>(`questionnaires/${questionnaire.id}`);
  }
}

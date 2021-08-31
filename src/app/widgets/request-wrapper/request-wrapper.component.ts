import { ChangeDetectionStrategy, Component, Input, OnChanges } from '@angular/core';
import { Observable }                                           from 'rxjs';
import { tap }                                                  from 'rxjs/operators';

@Component({
  selector: 'app-request-wrapper',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './request-wrapper.component.html',
  styles: [`
    :host::ng-deep.ant-result-subtitle { word-break: break-word }
    :host::ng-deep.ant-spin-container { height: 100% }
    :host { display: block; width: 100% }
  `]
})
export class RequestWrapperComponent<T = any> implements OnChanges {

  @Input() request$: Observable<T>;

  public data: T;
  isFirstRequest = true;

  ngOnChanges(): void { this.request$ = this.getUpdatedRequest(this.request$); }

  getUpdatedRequest(request$: Observable<T>): Observable<T> {
    return request$?.pipe(
      tap(() => this.isFirstRequest && (this.isFirstRequest = false)),
      tap(data => this.data = data)
    );
  }
}

import { NgModule }                   from '@angular/core';
import { Pipe, PipeTransform }        from '@angular/core';
import { HttpErrorResponse }          from '@angular/common/http';
import { Observable, of }             from 'rxjs';
import { map, startWith, catchError } from 'rxjs/operators';

interface WithLoading {
  isLoading: boolean;
  response?: any;
  error?: string;
  status?: string;
}

@Pipe({name: 'withLoading'})
export class WithLoadingPipe implements PipeTransform {
  transform(val): Observable<WithLoading> {
    return val?.pipe(
      map(response => ({isLoading: false, response})),
      startWith({isLoading: true}),
      catchError(({status, message}: HttpErrorResponse) => of({
        isLoading: false,
        error: message || 'Something went wrong',
        status: status?.toString()
      }))
    );
  }
}

@NgModule({
  declarations: [WithLoadingPipe],
  exports: [WithLoadingPipe]
})
export class WithLoadingPipeModule {
}

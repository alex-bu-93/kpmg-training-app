import { Component }                 from '@angular/core';
import { HttpErrorResponse }         from '@angular/common/http';
import { catchError, finalize, tap } from 'rxjs/operators';
import { Observable, of }            from 'rxjs';
import { Post, PostsService }        from '../../services/posts.service';

@Component({
  selector: 'app-training-six',
  templateUrl: './training-six.component.html',
  styleUrls: ['./training-six.component.css']
})
export class TrainingSixComponent {

  posts$: Observable<Post[]> = this.getPosts();

  // posts$ = of('test').pipe(
  //   map((res: any) => res()),
  //   catchError(err => {
  //     console.log(err);
  //     return of('test');
  //   }),
  //   tap(res => console.log(res))
  // );

  isPostsVisible: boolean;
  isLoading: boolean;

  error: string;

  constructor(
    private postsService: PostsService
  ) {
  }

  getPosts(): Observable<any> {
    this.isLoading = true;
    return this.postsService.getPosts().pipe(
      tap(() => {
        // ...
        console.log('tap');
      }),
      catchError((err: HttpErrorResponse) => {
        this.error = `Status: ${err.status}, ${err.message}`;
        // ...
        return of({error: 'lolkek'});
      }),
      finalize(() => {
        this.isLoading = false;
        console.log('finalize');
      })
    );
  }

}

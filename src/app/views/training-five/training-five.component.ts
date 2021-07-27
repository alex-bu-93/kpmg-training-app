import { Component, OnDestroy }                                                   from '@angular/core';
import { interval, Observable, of, Subscription, throwError, timer }              from 'rxjs';
import { catchError, delay, finalize, map, startWith, switchMap, takeUntil, tap } from 'rxjs/operators';
import { Post, PostsService }                                                     from '../../services/posts.service';

interface User {
  name: string;
  secondName: string;
}

@Component({
  selector: 'app-training-five',
  templateUrl: './training-five.component.html',
  styleUrls: ['./training-five.component.css']
})
export class TrainingFiveComponent implements OnDestroy {

  isLoading: boolean;

  post: Post = {title: '', author: ''};

  users: User[];
  usersSubscription: Subscription;
  users$: Observable<any> = of([
    {name: 'alex', secondName: 'bu'},
    {name: 'alex2', secondName: 'bu2'},
    {name: 'alex2', secondName: 'bu2'},
    {name: 'alex2', secondName: 'bu2'},
    {name: 'alex2', secondName: 'bu2'},
    {name: 'alex2', secondName: 'bu2'},
    {name: 'alex2', secondName: 'bu2'},
  ]).pipe(
    // delay(3000),
    tap(users => console.log(users)),
    tap(users => console.log(users.length)),
    // map(users => `Users count: ${users.length}`),
    tap(users => this.users = users),
    catchError(error => {
      // this.isLoading = false;
      // this.notification.createError(error);
      // return of('Error found');
      return throwError(error);
    }),
    tap(response => console.log(response)), // 'Error found',
    // tap(() => this.isLoading = false),
    finalize(() => this.isLoading = false),
    // takeUntil(this.destroy$)
  );

  posts: Post[];
  postsSubscription: Subscription;
  posts$: Observable<Post[]> = this.postsService.getPosts();

  constructor(
    private postsService: PostsService
  ) {
    // this.isLoading = true;
    // this.usersSubscription = this.users$.subscribe(
    //   () => {},
    //   error => {},
    //   () => {}
    // );
    // interval(3000).pipe(startWith(1000)).subscribe(res => console.log('ping', res));
  }

  getPosts(): void {
    this.postsSubscription?.unsubscribe();
    this.postsSubscription = this.posts$.subscribe(posts => this.posts = posts);
  }

  createPost(): void {
    this.isLoading = true;
    this.postsService.postPost(this.post).pipe(
      tap(res => console.log(res)),
      tap(() => this.getPosts()),
      finalize(() => this.isLoading = false)
      // takeUntil(this.destroy),
    ).subscribe();
  }

  ngOnDestroy(): void {
    this.postsSubscription?.unsubscribe();
    // this.destroy$.next();
  }
}

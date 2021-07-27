import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Post {
  id?: number;
  title: string;
  author: string;
}

@Injectable({providedIn: 'root'})
export class PostsService {

  constructor(
    private http: HttpClient
  ) {
  }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>('http://localhost:3000/posts');
  }

  getPost(id: number): Observable<Post> {
    return this.http.get<Post>(`http://localhost:3000/posts/${id}`);
  }

  postPost(post: Post): Observable<any> {
    return this.http.post<any>(`http://localhost:3000/posts`, post);
  }

  // putPost() {
  // }
  //
  // patchPost() {
  // }
}

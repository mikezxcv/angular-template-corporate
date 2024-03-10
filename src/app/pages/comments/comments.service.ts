import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/core/services/http.service';
import { GlobalComponent } from 'src/app/global-component';
import { findAllCommentsInterface } from './interfaces/findAllCommentsInterface';
import { Observable, map } from 'rxjs';
import { saveCommentInterface } from './interfaces/saveComentInterface';
import { findAllUsersInterface } from './interfaces/findAllUsersInterface';
import { findAllPostsInterface } from './interfaces/findAllPosts.interface';

@Injectable({
  providedIn: 'root',
})
export class CommentsService {
  constructor(private readonly httpService: HttpService) {}

  public findAllComments(): Observable<findAllCommentsInterface[]> {
    return this.httpService
      .get(GlobalComponent.DUMMY_JSON_API + '/comments?limit=10')
      .pipe(
        map((response: any) => {
          console.debug('response', response);
          return response.comments;
        })
      );
  }

  public saveComment(
    comment: any
  ): Observable<findAllCommentsInterface> {
    return this.httpService
      .post(GlobalComponent.DUMMY_JSON_API + '/comments/add', comment)
      .pipe(
        map((response: any) => {
          console.debug('responseFromCommentsService:', response);
          return response;
        })
      );
  }

  public findAllUsers(): Observable<findAllUsersInterface[]> {
    return this.httpService
      .get(GlobalComponent.DUMMY_JSON_API + '/users?limit=10')
      .pipe(
        map((response: any) => {
          console.debug('response', response);
          return response.users;
        })
      );
  }

  public findAllPosts(): Observable<findAllPostsInterface[]> {
    return this.httpService
      .get(GlobalComponent.DUMMY_JSON_API + '/posts?limit=10')
      .pipe(
        map((response: any) => {
          console.debug('response', response);
          return response.posts;
        })
      );
  }
}

import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { catchError, concatMap, map } from 'rxjs/operators';
import { AuthService } from '../auth.service';

import * as UserActions from './user.actions';


@Injectable()
export class UserEffects {

  constructor(private actions$: Actions, private authService: AuthService) {
  }

  registerUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.doRegister),
      concatMap(action => this.authService.doRegister(action.data)
        .pipe(
          map((data) => {
            console.log(data);
            return UserActions.loadUser({ data: {} })
          })
        )
      )
    )
  );

  loadUsers$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UserActions.loadUsers),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        EMPTY.pipe(
          map(data => UserActions.loadUsersSuccess({ data })),
          catchError(error => of(UserActions.loadUsersFailure({ error }))))
      )
    );
  });
}

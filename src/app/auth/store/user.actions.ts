import { createAction, props } from '@ngrx/store';

export const doRegister = createAction(
  '[User] Do Register',
  props<{ data: { email: string, password: string }}>()
);

export const loadUser = createAction(
  '[User] Load User',
  props<{data: any}>()
);

export const loadUsers = createAction(
  '[User] Load Users'
);

export const loadUsersSuccess = createAction(
  '[User] Load Users Success',
  props<{ data: any }>()
);

export const loadUsersFailure = createAction(
  '[User] Load Users Failure',
  props<{ error: any }>()
);

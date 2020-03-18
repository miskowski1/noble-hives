import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, share } from 'rxjs/operators';
import * as UserActions from '../store/user.actions';
import * as fromStore from '../store/user.reducer';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [ './login.component.scss' ]
})
export class LoginComponent implements OnInit {

  public form$: Observable<FormGroup>;
  public isRegister$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private fb: FormBuilder, private store: Store<fromStore.State>) {
  }

  ngOnInit(): void {
    this.form$ = this.buildForm();
  }

  public onSubmit(formValue: any): void {
    this.store.dispatch(UserActions.doRegister({ data: { email: formValue.email, password: formValue.password } }));
  }

  private buildForm(): Observable<FormGroup> {
    return this.isRegister$.pipe(
      map(isRegister => {
        const form = this.fb.group({
          email: [ '', Validators.required ],
          password: [ '', Validators.required ]
        });

        if (isRegister) {
          form.addControl('repeatPassword', new FormControl('', Validators.required));
        }

        return form;
      }),
      share()
    );
  }
}

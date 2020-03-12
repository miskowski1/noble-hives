import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [ './login.component.scss' ]
})
export class LoginComponent implements OnInit {

  public form: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.form = this.buildForm();
  }

  public onSubmit(): void {
    
  }

  private buildForm(): FormGroup {
    return this.fb.group({
      email: [ '', Validators.required ],
      password: [ '', Validators.required ]
    });
  }
}

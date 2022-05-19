// app.component.ts

import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Clanedtask2-angularform';
  angForm!: FormGroup;
  name = '';
  namePattern = /[a-z]+$/;
  //namePattern = '[a-z]+';
  isInvalid = false;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      name: ['', [Validators.required, Validators.pattern(this.namePattern)]],
    });
  }
}

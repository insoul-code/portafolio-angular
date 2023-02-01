import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  form = new FormGroup({
    name: new FormControl('',[Validators.required, Validators.maxLength(60)]),
    email: new FormControl('', [Validators.required]),
    message: new FormControl('', [Validators.required, Validators.maxLength(250)])
  })

  constructor() { }

  ngOnInit(): void {
  }

  get nameField() {
    return this.form.get('name');
  }
  get emailField() {
    return this.form.get('email');
  }
  get messageField() {
    return this.form.get('message');
  }

  get isNameFieldInvalid() {
    return this.nameField?.touched && this.nameField.invalid;
  }

  get isEmailFieldInvalid() {
    return this.emailField?.touched && this.emailField.invalid;
  }

  get isMessageFieldInvalid() {
    return this.messageField?.touched && this.messageField.invalid;
  }

}

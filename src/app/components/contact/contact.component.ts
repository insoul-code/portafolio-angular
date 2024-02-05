import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  form: FormGroup;
  isSubmit = true;
  submitMessage = '';

  private contactForm: AngularFirestoreCollection<any>;

  constructor(
    private formBuilder: FormBuilder,
    private fireStore: AngularFirestore
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
    this.contactForm = this.fireStore.collection('enquiry')
  }

  save(event: Event) {
    if (this.form.valid){
      console.log(this.form.value);
    } else {
      this.form.markAllAsTouched();
    }
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      name: ['',[Validators.required, Validators.maxLength(40), Validators.pattern(/^[a-zA-ZÀ-ÿ\s]{1,40}$/)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.maxLength(250)]]
    });
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

  get allInputsFilled() {
    return this.nameField?.touched && this.nameField.invalid
            || this.emailField?.touched && this.emailField.invalid
            || this.messageField?.touched && this.messageField.invalid;
  }

  submitData(value: any){
    this.contactForm.add(value)
    .then(res=>{
      this.submitMessage ='Submitted successfully';
    })
    .catch(error=>{
      console.log(error);
    })
    this.isSubmit = true;
    this.submitMessage = 'Submitted successfully';
    setTimeout(()=>{
      this.isSubmit=false;
    },8000)
  }

}

import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.scss']
})
export class AddFormComponent implements OnInit {
  @Output() userDetails = new EventEmitter<any>();
  userForm: FormGroup = new FormGroup({});

  userArray:any = [];

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form();
  }

  form() {
    this.userForm = this.fb.group(
      {
        selector: new FormControl('',
          [Validators.required]
        ),
        firstname: new FormControl('', [
          Validators.required,
          Validators.pattern('[a-zA-Z ]*'),
        ]),
        lastname: new FormControl('', [
          Validators.required,
          Validators.pattern('[a-zA-Z ]*'),
        ]),
        email: new FormControl('', [
          Validators.required,
          Validators.pattern('[[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$]*'),
          Validators.email,
        ]),
        phoneno: new FormControl('', [
          Validators.required,
          Validators.pattern('[0-9]*'),
        ]),
        password: new FormControl('', [
          Validators.required,
          Validators.pattern('[a-zA-Z0-9]*'),
        ]),
        confirmpassword: new FormControl('', [Validators.required]),
        address1: new FormControl('', [Validators.required]),
        address2: new FormControl(''),
        city: new FormControl('', [Validators.required]),
        remarks: new FormControl('', [Validators.required, Validators.minLength(21)]),
        zipcode: new FormControl('', [Validators.required]),
        gender: new FormControl('', [Validators.required]),
        dob: new FormControl('', [Validators.required]),
        terms: new FormControl('', [Validators.requiredTrue, Validators.required]),

      },
      { validators: this.MustMatch('password', 'confirmpassword') }
    );
  }

  MustMatch(password: any, confirmpassword: any) {
    return (formGroup: FormGroup) => {
      const passwordControl = formGroup.controls[password];
      const confirmpasswordControl = formGroup.controls[confirmpassword];

      if (
        confirmpasswordControl.errors &&
        !confirmpasswordControl.errors['mismatch']
      ) {
        return;
      }

      passwordControl.value !== confirmpasswordControl.value
        ? confirmpasswordControl.setErrors({ mismatch: true })
        : confirmpasswordControl.setErrors(null);
    };
  }

  onSubmit() {
    let value = this.userForm.value;
    let temp = [...this.userArray];
    temp.push(value);
    this.userArray = [...temp];    
    this.userDetails.emit(this.userArray);
  }



}

import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-validators',
  templateUrl: './validators.component.html',
  styleUrls: ['./validators.component.css']
})
export class ValidatorsComponent implements OnInit {
  title = 'LearnAngular';
  reactiveform!: FormGroup;
  constructor(private formbuilder: FormBuilder) {
    this.reactiveform = this.formbuilder.group({
      username: new FormControl(
        '',
        Validators.compose([Validators.required, Validators.minLength(6)])
      ),
      password: new FormControl('', Validators.required),
      confipassword: new FormControl('', Validators.required),
      // email: new FormControl('', Validators.email)
      email: new FormControl('', Validators.pattern('[a-z0-9]+@[a-z]+\.[a-z]{2,3}'))
    },{
      validators: this.MustMatch('password','confipassword')
    });
  }

  ngOnInit(): void {}

  //values
  get f() {
    return this.reactiveform.controls;
  }

  //Comparing Password

  MustMatch(password: any, confipassword: any) {
    return (formGroup: FormGroup) => {
      const passwordcontrol = formGroup.controls[password];
      const confirmpasswordcontrol = formGroup.controls[confipassword];

      if (
        confirmpasswordcontrol.errors &&
        !confirmpasswordcontrol.errors['MustMatch']
      ) {
        return;
      }

      if (passwordcontrol.value !== confirmpasswordcontrol.value) {
        confirmpasswordcontrol.setErrors({ MustMatch: true });
      } else {
        confirmpasswordcontrol.setErrors(null);
      }
    };
  }

  Login(){
      console.log(this.reactiveform.value);
  }

}

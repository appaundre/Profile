import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  registrationForm = this.fb.group({
    name: null,
    email: ['', Validators.email],
    mobileNo: ['', [Validators.required, Validators.minLength(10)]],
    password: ''
  });
  submited: boolean;
  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
  }
  registrationUser() {
    this.submited = true;

    if (this.registrationForm.valid) {
      this.submited = false;
      const postData = {
        ...this.registrationForm.value,
      };
      sessionStorage.setItem('userDetails', JSON.stringify(postData));
      this.router.navigate(['./login']);
    }
  }

}

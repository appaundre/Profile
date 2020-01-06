import { Component, OnInit } from '@angular/core';
import { Login } from '../login';
import { Router } from '@angular/router';
import { format } from 'url';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: Login;
  submited: boolean;
  userDetails: any;

  constructor(private router: Router) {
    this.loginForm = new Login();
  }

  ngOnInit() {
  }

  login(loginForm) {

    this.submited = true;
    if (loginForm.valid) {

      this.submited = false;

      this.userDetails = JSON.parse(sessionStorage.getItem('userDetails'));
      console.log(this.userDetails);
      console.log(loginForm);
      if (this.userDetails.email === loginForm.value.username && this.userDetails.password === loginForm.value.password) {
        this.router.navigate(['/profile']);
      }

    }
  }

}

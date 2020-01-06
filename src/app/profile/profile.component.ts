import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  userDetails: string;

  constructor() { }

  ngOnInit() {

    this.userDetails = JSON.parse(sessionStorage.getItem('userDetails'));
  }

}

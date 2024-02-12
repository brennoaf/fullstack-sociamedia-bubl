import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-after-login-content',
  templateUrl: './after-login-content.component.html',
  styleUrl: './after-login-content.component.css'
})
export class AfterLoginContentComponent implements OnInit {
  userData = {
    email:'usercontent123@domain.com',
    userId:'N3Fafd392JDCmn24FJSO9odFS4849ND',
    username:'usercontent123',
    password:'UserContent321',
    userIcon:'',
  };

  construtor() {}

  ngOnInit(): void {}
}

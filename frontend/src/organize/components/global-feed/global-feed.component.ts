import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-global-feed',
  templateUrl: './global-feed.component.html',
  styleUrl: './global-feed.component.css'
})
export class GlobalFeedComponent implements OnInit {
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

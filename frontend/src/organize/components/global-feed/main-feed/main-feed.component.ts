import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-main-feed',
  templateUrl: './main-feed.component.html',
  styleUrl: './main-feed.component.css'
})
export class MainFeedComponent implements OnInit {
  @Input() userData!: {username: string}
  
  constructor() {}

  ngOnInit(): void {}

}

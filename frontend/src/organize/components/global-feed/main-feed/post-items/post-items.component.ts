import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-items',
  templateUrl: './post-items.component.html',
  styleUrl: './post-items.component.css'
})
export class PostItemsComponent implements OnInit {
  constructor () {}

  @Input() userData!: {username: string}

  ngOnInit(): void {}

}

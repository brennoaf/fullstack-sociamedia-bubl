import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-left-nav-bar',
  templateUrl: './left-nav-bar.component.html',
  styleUrl: './left-nav-bar.component.css'
})
export class LeftNavBarComponent implements  OnInit{
  constructor() {}

  @Input() userData!: {username: string};


  ngOnInit(): void{}

}

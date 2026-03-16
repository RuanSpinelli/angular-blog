import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  imports: [],
  standalone: true,
  templateUrl: './big-card.html',
  styleUrls: ['./big-card.css', './big-card-responsive.css'],
})
export class BigCard implements OnInit {

  @Input()
  photoCover: string = ''
  @Input()
  cardTitle: string = ''
  @Input()
  cardDescription: string = ''

  constructor() {}

  ngOnInit(): void {
  }
}

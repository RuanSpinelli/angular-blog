import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-big-card',
  imports: [RouterLink],
  standalone: true,
  templateUrl: './big-card.html',
  styleUrls: ['./big-card.css', './big-card-responsive.css'],
})
export class BigCard implements OnInit {

  @Input()
  id: string = "0";
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

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from '../../data/DataFake';

@Component({
  selector: 'app-content',
  imports: [],
  templateUrl: './content.html',
  styleUrl: './content.css',
})
export class Content implements OnInit {
  photoCover:string='';
  contentTitle:string='';
  contentDescription:string='';
  private id:string | null = '0';

  constructor(
    private route:ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe(value => {
      this.id = value.get("id");

      this.setValuesContent(this.id);
    });
  }



  setValuesContent(id: string | null) {
    const result = dataFake.filter(article => article.id == id)[0]

    this.contentTitle = result.title;
    this.contentDescription = result.description;
    this.photoCover = result.photo;
    //this.contentTitle = result.title;

  }
}

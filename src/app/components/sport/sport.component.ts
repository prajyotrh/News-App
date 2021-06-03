import { NewsService } from './../../services/news.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sport',
  templateUrl: './sport.component.html',
  styleUrls: ['./sport.component.css']
})
export class SportComponent implements OnInit {

  sportsNews:any = [];

  constructor(private newsService : NewsService) { }

  ngOnInit(): void {
    this.newsService.getSportsNews().subscribe(result => {
      this.sportsNews=result.articles;
    })
  }

}

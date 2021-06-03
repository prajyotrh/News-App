import { NewsService } from './../../services/news.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entertainment',
  templateUrl: './entertainment.component.html',
  styleUrls: ['./entertainment.component.css']
})
export class EntertainmentComponent implements OnInit {
  
  entertainmentNews:any = [];

  constructor( private newsService : NewsService) { }

  ngOnInit(): void {
    this.newsService.getEntertainmentNews().subscribe(result => {
      this.entertainmentNews = result.articles;
    })
  }

}

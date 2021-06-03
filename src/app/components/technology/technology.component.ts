import { NewsService } from './../../services/news.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css']
})
export class TechnologyComponent implements OnInit {

  technologyNews:any=[];

  constructor(private newsService : NewsService) { }

  ngOnInit(): void {
    this.newsService.getTechnologyNews().subscribe(results => {
      this.technologyNews = results.articles;
    })
  }

}

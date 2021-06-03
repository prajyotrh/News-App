import { NewsService } from './../../services/news.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit {

  businessHeadlines:any =[];

  constructor( private newsService : NewsService) { }

  ngOnInit(): void {
      this.newsService.getBusinessNews().subscribe(results => {
        this.businessHeadlines = results.articles;
      })
  }

}

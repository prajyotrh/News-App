import { NewsService } from './../../services/news.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( private newsService : NewsService) { }

  topHeadingNews:any =[];

  ngOnInit(): void {
      this.newsService.getHeadlines().subscribe((result)=>{
        console.log(result);
         
        this.topHeadingNews=result.articles;
      })
  }

}

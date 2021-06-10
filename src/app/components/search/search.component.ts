import { NewsService } from './../../services/news.service';
import { Component, OnInit, SimpleChange } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  message:string;
  subscription: Subscription;

  searchResult:any=[];

  constructor(private data: DataService,private newsService : NewsService) { }

  ngOnInit(): void {
    this.subscription = this.data.currentMessage.subscribe(message => this.message = message);
    this.newsService.getSearchNews(this.message).subscribe(result =>{
      this.searchResult = result.articles;
      
    });
  }


  ngOnChange(chages : SimpleChange) {
    alert(this.message);
  }
  

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}

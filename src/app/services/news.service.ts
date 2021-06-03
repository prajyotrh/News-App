import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private service : HttpClient) { }

  abs:string='hiii';

  headlinesApiUrl = "https://newsapi.org/v2/top-headlines?country=in&apiKey=9e9b7d1c2042476586e5d3584b6e7cab";

  businessApiUrl = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=9e9b7d1c2042476586e5d3584b6e7cab"

  sportsApiUrl = "https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=9e9b7d1c2042476586e5d3584b6e7cab"

  entertainmentApiUrl = "https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=9e9b7d1c2042476586e5d3584b6e7cab"

  technologyApiUrl = "https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=9e9b7d1c2042476586e5d3584b6e7cab";

  searchApiUrl = "";
  getHeadlines(): Observable<any>{
    return this.service.get(this.headlinesApiUrl);
  }

  getBusinessNews(): Observable<any>{
    return this.service.get(this.businessApiUrl);
  }

  getSportsNews(): Observable<any>{
    return this.service.get(this.sportsApiUrl);
  }

  getEntertainmentNews(): Observable<any>{
    return this.service.get(this.entertainmentApiUrl);
  }

  getTechnologyNews(): Observable<any>{
    return this.service.get(this.technologyApiUrl);
  }

  getSearchNews(str:string): Observable<any>{
    this.searchApiUrl = "https://newsapi.org/v2/everything?q="+str+"&apiKey=9e9b7d1c2042476586e5d3584b6e7cab";
    return this.service.get(this.searchApiUrl);
  }

}

import { DataService } from './../../services/data.service';
import { NewsService } from './../../services/news.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  query = {
    msg :'' 
  }

  message :string;
  subscription : Subscription;

  constructor(private router : Router,private newsService : NewsService,
    private data: DataService) { }

  ngOnInit(): void {
    this.subscription=this.data.currentMessage.subscribe(message => this.message = message);
  }

  onSubmit() {
    this.data.changeMessage(this.query.msg);
    this.router.navigate(['search']);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}

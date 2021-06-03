import { TechnologyComponent } from './components/technology/technology.component';
import { SportComponent } from './components/sport/sport.component';
import { EntertainmentComponent } from './components/entertainment/entertainment.component';
import { BusinessComponent } from './components/business/business.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'business',
    component:BusinessComponent
  },
  {
    path:'entertainment',
    component:EntertainmentComponent
  },
  {
    path:'sports',
    component:SportComponent
  },
  {
    path:'technology',
    component:TechnologyComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

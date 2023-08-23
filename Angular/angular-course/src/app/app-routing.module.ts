import { FirstCompComponent } from './first-comp/first-comp.component';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {
    path: 'home',
    component: FirstCompComponent
  }, 
  {
    path:'about',
    component: AboutComponent
  },
  {
    path:'about/:username', // path variable
    component: AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

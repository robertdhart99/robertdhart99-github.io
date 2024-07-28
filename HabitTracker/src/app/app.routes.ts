
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DayViewComponent } from './day-view/day-view.component';
import { WeekViewComponent } from './week-view/week-view.component';

export const routes: Routes = [
    { path: 'DayView', component: DayViewComponent },
    { path: 'WeekView', component: WeekViewComponent },
  ];




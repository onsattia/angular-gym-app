import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoachesListComponent } from './coaches-list/coaches-list.component';
import { CoachesDetailsComponent } from './coaches-details/coaches-details.component';

@NgModule({
  declarations: [CoachesListComponent, CoachesDetailsComponent],
  imports: [
    CommonModule
  ]
})
export class CoachesModule { }

import { Routes } from "@angular/router";

import { ListComponent as ProgramsListComponent } from "src/app/programs/list/list.component";
import { ListComponent as ExercisesListComponent } from "src/app/exercises/list/list.component";
import { CoachesListComponent } from "src/app/coaches/coaches-list/coaches-list.component";
import { HomeComponent } from "src/app/home/home.component";

export const routes: Routes = [
  {
    path: "programs",
    component: ProgramsListComponent
  },
  {
    path: "exercises",
    component: ExercisesListComponent
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "coaches",
    component: CoachesListComponent
  },
  {
    path: "",
    redirectTo: "/home",
    pathMatch: "full"
  }
];

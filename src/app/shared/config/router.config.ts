import { Routes } from "@angular/router";

import { ListComponent as ProgramsListComponent } from "src/app/programs/list/list.component";
import { ListComponent as ExercisesListComponent } from "src/app/exercises/list/list.component";
import { CoachesListComponent } from "src/app/coaches/coaches-list/coaches-list.component";
import { HomeComponent } from "src/app/home/home.component";
import { MyWodComponent } from "src/app/my-space/my-wod/my-wod.component";
import { ProgramsService } from "../services/programs.service";
import { ContactComponent } from "src/app/contact/contact.component";

export const routes: Routes = [
  {
    path: "wods",
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
    path: "contact",
    component: ContactComponent
  },
  {
    path: "my-wod",
    component: MyWodComponent,
    canActivate: [ProgramsService]
  },
  {
    path: "",
    redirectTo: "/home",
    pathMatch: "full"
  }
];

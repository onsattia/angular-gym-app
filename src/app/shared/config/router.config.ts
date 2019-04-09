import { Routes } from "@angular/router";

import { ListComponent } from "src/app/programs/list/list.component";

export const routes: Routes = [
  {
    path: "programs",
    component: ListComponent
  },
  {
    path: "",
    redirectTo: "/programs",
    pathMatch: "full"
  }
];

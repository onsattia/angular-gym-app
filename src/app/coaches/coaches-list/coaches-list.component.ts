import { Component, OnInit } from "@angular/core";
import { CoachesService } from "src/app/shared/services/coaches/coaches.service";
import { Coach } from "src/app/shared/models/coaches";

@Component({
  selector: "app-coaches-list",
  templateUrl: "./coaches-list.component.html",
  styleUrls: ["./coaches-list.component.css"]
})
export class CoachesListComponent implements OnInit {
  private coaches: Coach[] = [];

  constructor(private coachesServ: CoachesService) {}

  public loadCoaches() {
    this.coachesServ
      .getCoaches()
      .subscribe(response => (this.coaches = response));
  }

  ngOnInit() {
    this.loadCoaches();
  }
}

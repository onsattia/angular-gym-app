import { Component, OnInit, Input } from "@angular/core";
import { Coach } from "src/app/shared/models/coaches";

@Component({
  selector: "app-coaches-details",
  templateUrl: "./coaches-details.component.html",
  styleUrls: ["./coaches-details.component.css"]
})
export class CoachesDetailsComponent implements OnInit {
  @Input() coach: Coach;

  constructor() {}

  ngOnInit() {}
}

import { Component, OnInit, Input } from "@angular/core";
import { Exercise } from "src/app/shared/models/exercises";

@Component({
  selector: "app-item",
  templateUrl: "./item.component.html",
  styleUrls: ["./item.component.css"]
})
export class ItemComponent implements OnInit {
  @Input() exercise: Exercise;

  constructor() {}

  ngOnInit() {}
}

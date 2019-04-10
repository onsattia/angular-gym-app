import { Component, OnInit, Input } from "@angular/core";
import { Program } from "src/app/shared/models/programs";

@Component({
  selector: "app-item",
  templateUrl: "./item.component.html",
  styleUrls: ["./item.component.css"]
})
export class ItemComponent implements OnInit {
  @Input() program: Program;

  constructor() {}

  ngOnInit() {}
}

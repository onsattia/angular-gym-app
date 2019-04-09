import { Component, OnInit } from "@angular/core";
import { ProgramsService } from "src/app/shared/services/programs.service";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"]
})
export class ListComponent implements OnInit {
  private programs: any;

  constructor(private programsService: ProgramsService) {}

  ngOnInit() {
    this.programsService.getPrograms().subscribe(programs => {
      this.programs = programs;
    });
  }
}

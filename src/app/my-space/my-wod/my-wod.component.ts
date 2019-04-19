import { Component, OnInit } from "@angular/core";
import { ProgramsService } from "src/app/shared/services/programs.service";

@Component({
  selector: "app-my-wod",
  templateUrl: "./my-wod.component.html",
  styleUrls: ["./my-wod.component.css"]
})
export class MyWodComponent implements OnInit {
  private myWods: any = [];
  private allPrograms: any;
  constructor(private programsService: ProgramsService) {}

  ngOnInit() {
    this.programsService.getPrograms().subscribe(res => {
      this.allPrograms = res;
      const programs = JSON.parse(localStorage.getItem("programs"));
      programs.forEach(progId => {
        const program = this.allPrograms.filter(p => p.id === progId)[0];
        this.myWods.push(program);
      });
    });
  }
}

import { Component, OnInit } from "@angular/core";
import { ExercisesService } from "src/app/shared/services/exercises/exercises.service";
import { Exercise } from "src/app/shared/models/exercises";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"]
})
export class ListComponent implements OnInit {
  private exercises: Exercise[] = [];
  constructor(private exercisesServ: ExercisesService) {}

  public loadExercises() {
    this.exercisesServ
      .getAll()
      .subscribe(response => (this.exercises = response));
  }

  ngOnInit() {
    this.loadExercises();
  }
}

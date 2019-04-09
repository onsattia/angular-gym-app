import { Injectable } from "@angular/core";
import { Program } from "../models/programs";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ProgramsService {
  private programs: Array<Program>;
  constructor() {}
  getPrograms(): any {
    this.programs = [
      {
        id: 1,
        name: "Body Building",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugavoluptate.",
        image: "assets/images/img_1.jpg"
      },
      {
        id: 2,
        name: "Body Combat",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugavoluptate.",
        image: "assets/images/img_2.jpg"
      },
      {
        id: 3,
        name: "Push Up",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugavoluptate.",
        image: "assets/images/img_3.jpg"
      },
      {
        id: 4,
        name: "Weight Lifting",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugavoluptate.",
        image: "assets/images/img_4.jpg"
      },
      {
        id: 5,
        name: "Body Combat",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugavoluptate.",
        image: "assets/images/img_5.jpg"
      },
      {
        id: 6,
        name: "Body Combat",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugavoluptate.",
        image: "assets/images/img_6.jpg"
      }
    ];

    const programObservable = new Observable(observable => {
      setTimeout(() => {
        observable.next(this.programs);
      }, 1000);
    });

    return programObservable;
  }
}

import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Coach } from "../../models/coaches";

@Injectable({
  providedIn: "root"
})
export class CoachesService {
  private coaches: Array<Coach>;

  constructor() {}
  getCoaches(): any {
    this.coaches = [
      {
        id: 1,
        name: "Mark Johnson",
        description:
          "“Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita et aliquam fuga dicta amet ad laborum error recusandae, voluptatibus quam minima sed, saepe odio voluptatem. Sed unde hic, vitae fugiat.”",
        image: "assets/images/person_1.jpg"
      },
      {
        id: 2,
        name: "Shane Holmes",
        description:
          "“Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita et aliquam fuga dicta amet ad laborum error recusandae, voluptatibus quam minima sed, saepe odio voluptatem. Sed unde hic, vitae fugiat.”",
        image: "assets/images/person_2.jpg"
      },
      {
        id: 3,
        name: "Joshua Creen",
        description:
          "“Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita et aliquam fuga dicta amet ad laborum error recusandae, voluptatibus quam minima sed, saepe odio voluptatem. Sed unde hic, vitae fugiat.”",
        image: "assets/images/person_3.jpg"
      },
      {
        id: 4,
        name: "Shane Holmes",
        description:
          "“Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita et aliquam fuga dicta amet ad laborum error recusandae, voluptatibus quam minima sed, saepe odio voluptatem. Sed unde hic, vitae fugiat.”",
        image: "assets/images/person_4.jpg"
      }
    ];

    const programObservable = new Observable(observable => {
      setTimeout(() => {
        observable.next(this.coaches);
      }, 500);
    });

    return programObservable;
  }
}

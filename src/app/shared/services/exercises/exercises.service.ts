import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Exercise } from "../../models/exercises";

@Injectable({
  providedIn: "root"
})
export class ExercisesService {
  constructor(private http: HttpClient) {}

  private api = "http://localhost:4000";

  public getAll(): Observable<Exercise[]> {
    let URI = `${this.api}/exercises/`;
    return this.http.get<Exercise[]>(URI);
  }
}

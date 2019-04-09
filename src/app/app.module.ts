import { BrowserModule } from "@angular/platform-browser";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

import { routes } from "./shared/config/router.config";

import { AppComponent } from "./app.component";
import { ProgramsModule } from "./programs/programs.module";
import { ExercisesModule } from "./exercises/exercises.module";
import { MainHeaderComponent } from "./shared/component/main-header/main-header.component";
import { MainFooterComponent } from "./shared/component/main-footer/main-footer.component";
import { RouterModule } from "@angular/router";
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [AppComponent, MainHeaderComponent, MainFooterComponent, HomeComponent],
  imports: [
    BrowserModule,
    ProgramsModule,
    ExercisesModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}

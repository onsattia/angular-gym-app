import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";

import { routes } from "./shared/config/router.config";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { MainHeaderComponent } from "./shared/component/main-header/main-header.component";
import { MainFooterComponent } from "./shared/component/main-footer/main-footer.component";
import { HomeComponent } from "./home/home.component";

import { ProgramsModule } from "./programs/programs.module";
import { ExercisesModule } from "./exercises/exercises.module";
import { CoachesModule } from "./coaches/coaches.module";

import { ExercisesService } from "./shared/services/exercises/exercises.service";
import { MySpaceModule } from "./my-space/my-space.module";
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent,
    MainFooterComponent,
    HomeComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ProgramsModule,
    ExercisesModule,
    CoachesModule,
    MySpaceModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ExercisesService],
  bootstrap: [AppComponent]
})
export class AppModule {}

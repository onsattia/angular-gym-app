import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { routes } from "./shared/config/router.config";

import { AppComponent } from "./app.component";
import { ProgramsModule } from "./programs/programs.module";
import { MainHeaderComponent } from "./shared/component/main-header/main-header.component";
import { MainFooterComponent } from "./shared/component/main-footer/main-footer.component";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [AppComponent, MainHeaderComponent, MainFooterComponent],
  imports: [BrowserModule, ProgramsModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

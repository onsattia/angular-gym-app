import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MyWodComponent } from "./my-wod/my-wod.component";
import { TruncatePipe } from "../shared/pipes/truncate.pipe";

@NgModule({
  declarations: [MyWodComponent],
  imports: [CommonModule]
})
export class MySpaceModule {}

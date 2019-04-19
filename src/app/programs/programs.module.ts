import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ItemComponent } from "./item/item.component";
import { ListComponent } from "./list/list.component";
import { TruncatePipe } from "../shared/pipes/truncate.pipe";

@NgModule({
  declarations: [ItemComponent, ListComponent, TruncatePipe],
  imports: [CommonModule]
})
export class ProgramsModule {}

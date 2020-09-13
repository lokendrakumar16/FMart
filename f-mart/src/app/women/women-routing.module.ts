import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { WomenComponent } from "./women.component";

const routes: Routes = [
  {
    path: "",
    component: WomenComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
})
export class WomenRoutingModule {}

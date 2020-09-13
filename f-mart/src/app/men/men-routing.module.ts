import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { MenComponent } from "./men.component";
// import { DashboardComponent } from "../dashboard/dashboard.component";

const routes: Routes = [
  {
    path: "",
    component: MenComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenRoutingModule {}

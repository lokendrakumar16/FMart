import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";

const routes: Routes = [
  {
    path: "",
    component: DashboardComponent,
  },
  {
    path: "men",
    loadChildren: () => import("./men/men.module").then((m) => m.MenModule),
  },
  {
    path: "women",
    loadChildren: () =>
      import("./women/women.module").then((m) => m.WomenModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}

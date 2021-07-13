import { Routes } from "@angular/router";

import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
import { CoursesComponent } from "../../pages/courses/courses.component";
import { MapComponent } from "../../pages/map/map.component";
import { NotificationsComponent } from "../../pages/notifications/notifications.component";
import { AboutComponent } from "../../pages/about/about.component";
import { TablesComponent } from "../../pages/tables/tables.component";
import { ContactComponent } from "../../pages/contact/contact.component";
// import { RtlComponent } from "../../pages/rtl/rtl.component";

export const AdminLayoutRoutes: Routes = [
  { path: "dashboard", component: DashboardComponent },
  { path: "courses", component: CoursesComponent },
  { path: "maps", component: MapComponent },
  { path: "notifications", component: NotificationsComponent },
  { path: "about", component: AboutComponent },
  { path: "tables", component: TablesComponent },
  { path: "contact", component: ContactComponent },
  // { path: "rtl", component: RtlComponent }
];

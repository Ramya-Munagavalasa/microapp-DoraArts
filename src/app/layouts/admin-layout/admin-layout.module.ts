import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { CoursesComponent } from '../../pages/courses/courses.component';
import { MapComponent } from '../../pages/map/map.component';
import { NotificationsComponent } from '../../pages/notifications/notifications.component';
import { AboutComponent } from '../../pages/about/about.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { ContactComponent } from '../../pages/contact/contact.component';
// import { RtlComponent } from '../../pages/rtl/rtl.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {CarouselModule, WavesModule, InputsModule} from 'angular-bootstrap-md';
import { MDBBootstrapModule} from 'angular-bootstrap-md';
import { MatExpansionModule} from '@angular/material/expansion';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(AdminLayoutRoutes),
        FormsModule,
        HttpClientModule,
        NgbModule,
        MDBBootstrapModule.forRoot(),
        CarouselModule.forRoot(),
        MatExpansionModule,
        WavesModule,
        InputsModule,
        ReactiveFormsModule
    ],
  declarations: [
    DashboardComponent,
    AboutComponent,
    TablesComponent,
    CoursesComponent,
    ContactComponent,
    NotificationsComponent,
    MapComponent,
    // RtlComponent
  ],
  providers: [  ]
})
export class AdminLayoutModule {}

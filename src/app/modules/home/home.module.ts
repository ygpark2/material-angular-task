import {NgModule} from '@angular/core';

import {HomeComponent} from './pages/home.component';
import {HomeRoutingModule} from './home.routing';

import {SharedModule} from '../../shared';
import {TaskItemComponent} from './pages/task-item/task-item.component';
import {TaskDetailsComponent} from './pages/task-details/task-details.component';
import {TaskDeleteComponent} from './pages/task-delete/task-delete.component';
import {MatDialog} from "@angular/material/dialog";
import {TaskService} from "../../core";

@NgModule({
  declarations: [
    HomeComponent,
    TaskItemComponent,
    TaskDetailsComponent,
    TaskDeleteComponent,
  ],
  imports: [
    SharedModule,
    HomeRoutingModule,
  ],
  exports: [],
  providers: [
    TaskService,
  ],
  entryComponents: [
    TaskDetailsComponent,
  ],
})
export class HomeModule {
}

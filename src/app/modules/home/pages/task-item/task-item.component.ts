import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Task, TaskService} from "../../../../core";
import {AbstractTaskComponent} from "../../abstract.task.component";
import {MatDialog} from "@angular/material/dialog";


@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss'],
  providers: [MatDialog],
})
export class TaskItemComponent extends AbstractTaskComponent implements OnInit {

  @Input() task: Task;

  constructor(public override dialog: MatDialog) {
    super(dialog);
  }

  ngOnInit() {
  }

}

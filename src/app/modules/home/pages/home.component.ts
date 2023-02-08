import {Component, OnInit} from '@angular/core';
import {ItemCollection, Task, TaskService} from "../../../core";
import {AbstractTaskComponent} from "../abstract.task.component";
import {MatDialog} from "@angular/material/dialog";
import {MatSnackBar} from "@angular/material/snack-bar";
import { map } from 'rxjs';
import { faL } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [TaskService],
})
export class HomeComponent extends AbstractTaskComponent implements OnInit {

  tasks: Task[] = [];
  searchName: string = "";
  status?: string = "all";

  constructor(private taskService: TaskService, public override dialog: MatDialog, private snackBar: MatSnackBar) {
    super(dialog);
    dialog.afterAllClosed.subscribe(() => this.loadTasks());
  }

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks() {
    this.taskService.getAll()
      .subscribe(taskList => {
        this.tasks = taskList.getItems().reverse();
      });
  }

  filter(task: Task): boolean {
    var statusCheck = false;
    switch(this.status) {
      case "all":
        statusCheck = true;
        break;
      case "active":
        statusCheck = task.complete === false;
        break;
      case "complete":
        statusCheck = task.complete === true;
        break;
      default:

        break;
    }
    return task.name.includes(this.searchName) && statusCheck;
  }

  getTotalActiveCount(): number {
    return this.tasks.filter((task) => this.filter(task) && task.complete === false).length;
  }

}

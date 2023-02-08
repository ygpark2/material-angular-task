import {Task} from "../../core";
import {MatDialog} from "@angular/material/dialog";
import {TaskDetailsComponent} from "./pages/task-details/task-details.component";
import {TaskDeleteComponent} from "./pages/task-delete/task-delete.component";


export abstract class AbstractTaskComponent {

  constructor(public dialog: MatDialog) {
  }

  onClickEdit(task: Task): void {
    const dialogRef = this.dialog.open(TaskDetailsComponent, {
      width: '450px',
      data: task
    });
  }

  onClickDelete(task: Task): void {
    const dialogRef = this.dialog.open(TaskDeleteComponent, {
      width: '250px',
      data: task
    });
  }

  onClickCreate(): void {
    this.onClickEdit(new Task());
  }
}

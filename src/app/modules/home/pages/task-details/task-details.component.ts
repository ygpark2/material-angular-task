import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Task, TaskService} from "../../../../core";


@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.scss'],
  providers: [TaskService]
})
export class TaskDetailsComponent {

  constructor(private taskService: TaskService,
              public dialogRef: MatDialogRef<TaskDetailsComponent>,
              @Inject(MAT_DIALOG_DATA) public task: Task) {
  }

  onSubmit() {
    this.taskService.save(this.task).subscribe(response => {
      this.task = response;
      this.onCancel();
    });
  }

  onCancel() {
    this.dialogRef.close();
  }
}

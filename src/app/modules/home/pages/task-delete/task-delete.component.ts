import {Component, Inject} from '@angular/core';
import {Task, TaskService} from "../../../../core";
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from "@angular/material/dialog";


@Component({
  selector: 'app-task-delete',
  templateUrl: './task-delete.component.html',
  styleUrls: ['./task-delete.component.scss'],
  providers: [MatDialog],
})
export class TaskDeleteComponent {

  constructor(private taskService: TaskService,
    public dialogRef: MatDialogRef<TaskDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public task: Task) {
    
  }

  ngOnInit() {
  }

  onSubmit() {
    this.taskService.delete(this.task).subscribe(response => {
      this.onCancel();
    });
  }

  onCancel() {
    this.dialogRef.close();
  }

}

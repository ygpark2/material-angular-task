import {Injectable} from '@angular/core';

import {Observable, of} from 'rxjs';
import {filter, find, map} from "rxjs/operators";

import {LocalStorageService} from './local-storage.service';
import {Task, ItemCollection} from "../models";
import { faL } from '@fortawesome/free-solid-svg-icons';


@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private storageService: LocalStorageService) {
    // this.storageService.clear();
  }

  getAll(): Observable<ItemCollection<Task>> {
    return this.storageService.get("tasks")
      .pipe(map((tasks) => {
        if (tasks) {
            return Object.assign(new ItemCollection<Task>(), tasks);
        } else {
            return new ItemCollection<Task>();
        }
      }));
  }

  get(id: string): Observable<Task | undefined> {
    return this.getAll().pipe(map((taskCollection: ItemCollection<Task>) => {
        return taskCollection.getItems().find(item => item.id === id);
    }));
  }

  delete(task: Task): Observable<boolean> {
    return this.getAll().pipe(map((taskCollection: ItemCollection<Task>) => {
      const filteredItemCollection = taskCollection.getItems().filter(item => item.id !== task.id);
      taskCollection.setItems(filteredItemCollection);
      this.storageService.set("tasks", taskCollection);
      return true;
    }));
  }

  save(task: Task): Observable<Task> {
    return this.getAll().pipe(map((taskCollection) => {
      if (task.id) {
        const updatedItemCollection = taskCollection.getItems().map(item => {
            if (item.id === task.id) {
                return task;
            } else {
                return item;
            }
        });
        taskCollection.setItems(updatedItemCollection);
      } else {
        task.id = this.uuidv4();
        task.complete = false;
        const taskNum = taskCollection.addItem(task);
      }
      this.storageService.set("tasks", taskCollection);
      return task;
    }));
  }

  private uuidv4(): string {
    return (`${1e7}-${1e3}-${4e3}-${8e3}-${1e11}`).replace(/[018]/g, (c: any) =>
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    )
  }
}
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from '../model/todo';
import { TodoService } from '../service/todo.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, OnDestroy{

  list!: Todo[];

  constructor(private service: TodoService,  router: Router, route: ActivatedRoute) {}


  ngOnInit(): void {

   this.list = this.service.getLista();

   this.service.listaChanged.subscribe((newList) => {
    this.list = newList
   });
  }

  ngOnDestroy(): void {
    this.service.listaChanged.unsubscribe();
  }

  toggle(id:number) {
    this.service.taskCompleted(id);
  }

  delete(id:number) {
    this.service.deleteTask(id);
  }
}

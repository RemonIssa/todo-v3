import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Task, Todo } from '../model/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private lista: Todo[] = [
    {
      id:0,
      descrizione:"Uccidi Gerry Scotti",
      completato: false,
    },
    {
      id:1,
      descrizione:"Uccidi Fabrizio Frizzi",
      completato: true,
    }, 
    {
      id:2,
      descrizione:"Cercare la dignità",
      completato: false,
    },
  ];

  lastId= 3;

  getLista() {
    return this.lista.slice()
  }


  listaChanged = new Subject<Todo[]>();

  deleteTask(id:number) {
    this.lista = this.lista.filter(t => t.id !=id);

    this.listaChanged.next(this.lista.slice());
  }

  addTask(task: Task) {
    const newTask: Todo = {
      id:this.lastId++,
      ...task
    }

    this.lista.push(newTask)
  }

  taskCompleted(id:number) {

    const index = this.lista.findIndex(t => t.id == id);

    this.lista[index].completato = !this.lista[index].completato;
    this.listaChanged.next(this.lista.slice());
  }
}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoService } from '../service/todo.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit{

  form: FormGroup = new FormGroup({
    descrizione: new FormControl(null, [
      Validators.required
    ])
  });

  constructor(private service: TodoService,private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {}

  onSubmit() {
    if(this.form.invalid) {
      alert('Attenzione cojonasso');
      return;
    }

    this.service.addTask(this.form.value);
    this.form.reset();
    this.router.navigateByUrl('/');
  }


}

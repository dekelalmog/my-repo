import { Component } from '@angular/core';

@Component({
  selector: 'app-exercise-one',
  templateUrl: './exercise-one.component.html',
  styleUrls: ['./exercise-one.component.css']
})
export class ExerciseOneComponent{

  msg = '';

  constructor() { 
  }

  fun(val:string) {
    this.msg = "hello " + val;
  }
}

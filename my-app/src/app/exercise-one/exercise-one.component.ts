import { Component, OnInit } from '@angular/core';
import { elementEventFullName } from '@angular/compiler/src/view_compiler/view_compiler';

@Component({
  selector: 'app-exercise-one',
  templateUrl: './exercise-one.component.html',
  styleUrls: ['./exercise-one.component.css']
})
export class ExerciseOneComponent implements OnInit {

  msg = '';

  constructor() { 
  }

  ngOnInit(): void {
  }

  fun(val:string) {
    this.msg = "hello " + val;
  }

  greeting(): void {
    alert('hello');
  }

}

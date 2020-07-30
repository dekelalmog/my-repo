import { Component, OnInit, Injectable } from '@angular/core';
import {FormGroup,FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-exercise-three',
  templateUrl: './exercise-three.component.html',
  styleUrls: ['./exercise-three.component.css']
})
export class ExerciseThreeComponent implements OnInit {
  isValidFormSubmitted = false;

  user =  new Person();
  
  mapForm = new FormGroup({
    firstName: new FormControl('',Validators.required),
    lastName: new FormControl('',Validators.required),
    date: new FormControl('',Validators.required),
    food: new FormControl('',Validators.required),
    gender: new FormControl('',Validators.required),
    donate: new FormControl(false,Validators.requiredTrue)
  });

  constructor() {
   }

  ngOnInit(): void {
    console.log(this.mapForm.controls['firstName'].value);
  }

  onSubmit() {
    console.warn(this.mapForm.value);
    if(this.mapForm.valid) {
      this.isValidFormSubmitted = true;
      this.user.firstName = this.mapForm.controls['firstName'].value;
      this.user.lastName = this.mapForm.controls['lastName'].value;
      this.user.date = this.mapForm.controls['date'].value;
      this.user.food = this.mapForm.controls['food'].value;
      this.user.gender = this.mapForm.controls['gender'].value;
      this.user.donate = this.mapForm.controls['donate'].value;
    }
  }
  edit(){
    this.isValidFormSubmitted = false;
  }
}

export class Person {
  firstName: string;
  lastName: string;
  food: string;
  gender: string;
  donate: boolean;
  date: Date;
  constructor(){
  }
};
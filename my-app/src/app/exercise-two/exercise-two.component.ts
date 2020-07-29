import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise-two',
  templateUrl: './exercise-two.component.html',
  styleUrls: ['./exercise-two.component.css']
})
export class ExerciseTwoComponent implements OnInit {

  Age : number = 0; 
  // planets = [
  //   {name: 'Saturn' , value: 3.5},
  //   {name: 'Uranus', value:2.4 },
  //   {name: 'Mars', value:5 }
  // ];

   myplanets : Planet[] = [ {name: 'Saturn' , value: 3.5},
   {name: 'Uranus', value:2.4 },
   {name: 'Mars', value:5 }];
   
  CurrPlanet : string;
  constructor() {
    
  }

  ngOnInit(): void {
  }

  getVal(name : string) {
    console.log(this.myplanets.find(element => element.name === name));
    return this.myplanets.find(element => element.name === name);
  }

  fnc (val : number) {
    this.Age = val;
  }
}

export class Planet {
  name: string;
  value: number;
}

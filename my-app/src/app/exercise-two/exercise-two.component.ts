import { Component} from '@angular/core';

@Component({
  selector: 'app-exercise-two',
  templateUrl: './exercise-two.component.html',
  styleUrls: ['./exercise-two.component.css']
})
export class ExerciseTwoComponent {

  age : number = 0; 

   myPlanets : Planet[] = [ {name: 'Saturn' , value: 3.5},
   {name: 'Uranus', value:2.4 },
   {name: 'Mars', value:5 }];
   
  currPlanet : Planet;
  constructor() {
    
  }

  fnc (val : number) {
    this.age = val;
  }
}

export class Planet {
  name: string;
  value: number;
}

import { Component} from '@angular/core';

@Component({
  selector: 'app-exercise-two',
  templateUrl: './exercise-two.component.html',
  styleUrls: ['./exercise-two.component.css']
})
export class ExerciseTwoComponent {

  public typesEnum = types;
  age : number = 0; 
   
   myPlanets : Planet[] = [ {name: 'Saturn' , value: 3.5, type:types.Saturn},
   {name: 'Uranus', value:2.4,type:types.Uranus },
   {name: 'Mars', value:5,type:types.Mars }];
   
  currPlanet : Planet;
  constructor() {
  }

  fnc (val : number) {
    this.age = val;
  }
}

 export enum types {
  Saturn,Uranus,Mars
}

export class Planet {
  name: string;
  value: number;
  type: number;
}

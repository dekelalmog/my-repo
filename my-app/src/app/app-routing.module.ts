import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExerciseOneComponent } from './exercise-one/exercise-one.component';
import { ExerciseThreeComponent } from './exercise-three/exercise-three.component';
import { ExerciseTwoComponent } from './exercise-two/exercise-two.component';
import { ExerciseFourComponent } from './exercise-four/exercise-four.component';

const routes: Routes = [
  {path: 'exercise-one', component: ExerciseOneComponent },
  {path: 'exercise-two', component: ExerciseTwoComponent },
  {path: 'exercise-three', component: ExerciseThreeComponent },
  {path: 'exercise-four', component: ExerciseFourComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

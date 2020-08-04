import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExerciseOneComponent } from './exercise-one/exercise-one.component';
import { ExerciseTwoComponent } from './exercise-two/exercise-two.component';
import { ExerciseThreeComponent } from './exercise-three/exercise-three.component';
import {ReactiveFormsModule} from '@angular/forms';
import { DetailsComponent } from './details/details.component';
import { ExerciseFourComponent } from './exercise-four/exercise-four.component';
import {PostsListComponent} from './exercise-four/posts-list.component';
import { RootStoreModule } from './root-store/root-store.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PreloadSelectedModulesList } from './preload_modules';


@NgModule({
  declarations: [
    AppComponent,
    ExerciseOneComponent,
    ExerciseTwoComponent,
    ExerciseThreeComponent,
    DetailsComponent,
    ExerciseFourComponent,
    PostsListComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RootStoreModule
  ],
  providers: [PreloadSelectedModulesList],
  bootstrap: [AppComponent]
})
export class AppModule { }

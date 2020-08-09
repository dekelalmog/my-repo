import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExerciseOneComponent } from './exercise-one/exercise-one.component';
import { ExerciseTwoComponent } from './exercise-two/exercise-two.component';
import { ExerciseThreeComponent } from './exercise-three/exercise-three.component';
import {ReactiveFormsModule,FormsModule} from '@angular/forms';
import { DetailsComponent } from './details/details.component';
import { ExerciseFourComponent } from './exercise-four/exercise-four.component';
import {PostsListComponent} from './exercise-four/post-list/posts-list.component';
import { RootStoreModule } from './root-store/root-store.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {PostStoreService} from './exercise-four/services/post.store.service';
import {PostsResolverService} from './exercise-four/services/post.resolver';
import {MatCardModule} from '@angular/material/card';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {MatButtonModule} from '@angular/material/button';
import {AddPostComponent} from './exercise-four/add-post/add-post.component';
import {messiPipe} from './exercise-four/messi.pipe';
import {MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatListModule} from '@angular/material/list';

@NgModule({
  declarations: [
    AppComponent,
    ExerciseOneComponent,
    ExerciseTwoComponent,
    ExerciseThreeComponent,
    DetailsComponent,
    ExerciseFourComponent,
    PostsListComponent,
    AddPostComponent,
    messiPipe 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RootStoreModule,
    MatCardModule,
    FontAwesomeModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatListModule
  ],
  providers: [PostStoreService,PostsResolverService],
  bootstrap: [AppComponent]
})
export class AppModule { }

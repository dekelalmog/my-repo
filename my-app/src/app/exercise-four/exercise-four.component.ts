import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from './models/post';
import {PostStoreService} from './services/post.store.service';
@Component({
  selector: 'app-exercise-four',
  templateUrl: './exercise-four.component.html',
  styleUrls: ['./exercise-four.component.css']
})
export class ExerciseFourComponent implements OnInit {

  posts$: Observable<Array<Post>>;
  constructor(private postStoreService: PostStoreService) { 
    this.posts$ = this.postStoreService.getPosts();
  }

  ngOnInit(): void {
  }

  onPostAdded(post: Post){
    this.postStoreService.addPost(post);
  }

}

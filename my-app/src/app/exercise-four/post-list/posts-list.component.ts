import { Component, OnInit, Input, EventEmitter, Output, ChangeDetectionStrategy } from '@angular/core';
import { Post } from '../models/post';
import { faSmile } from '@fortawesome/free-regular-svg-icons';
import { Observable } from 'rxjs';
import { PostStoreService } from '../services/post.store.service';

@Component({
    selector: 'posts-list',
    templateUrl: './posts-list.component.html',
    styleUrls: ['./post-list.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class PostsListComponent implements OnInit {
    
faSmile = faSmile;
posts$: Observable<Array<Post>>;
  constructor(private postStoreService: PostStoreService) { 
    this.posts$ = this.postStoreService.getPosts();
  }
    ngOnInit(){
    }
}

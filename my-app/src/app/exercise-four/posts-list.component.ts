import { Component, OnInit, Input, EventEmitter, Output, ChangeDetectionStrategy } from '@angular/core';
import { Post } from './models/post';
import { faSmile } from '@fortawesome/free-regular-svg-icons';

@Component({
    selector: 'posts-list',
    templateUrl: './posts-list.component.html',
    styleUrls: ['./post-list.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class PostsListComponent implements OnInit {
    
@Input() posts: Post[];
@Output() postAdded: EventEmitter<Post> = new EventEmitter<Post>();
faSmile = faSmile;
constructor(){

}
    ngOnInit(){
    }

    addPost(title: string, text: string){
        const post = new Post();
        post.title = title;
        post.text = text;
        this.postAdded.emit(post);
    }
}
import { Component, OnInit, Input, EventEmitter, Output, ChangeDetectionStrategy } from '@angular/core';
import { Post } from './models/post';

@Component({
    selector: 'posts-list',
    template: `
    <p>post-list works</p>
    <ul>
    <li *ngFor="let post of posts">
    <h1>{{post.title}}</h1>
    <p>{{post.text}}</p>
    </li>
    </ul>
    <input #title placeholder="enter title"/>
    <input #text placeholder="enter text"/>
    <button (click)="addPost(title.value,text.value)">add post</button>
    `,
    styles: [],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class PostsListComponent implements OnInit {
    
@Input() posts: Post[];
@Output() postAdded: EventEmitter<Post> = new EventEmitter<Post>();

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
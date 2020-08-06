import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post';
import {PostStoreService} from '../services/post.store.service';
@Component({
  selector: 'add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
  cities = ['haifa','manchester'];
  constructor(private postStoreService: PostStoreService) { 
  }

  ngOnInit(): void {
  }

  addPost(title: string, text: string){
    const post = new Post();
    post.title = title;
    post.text = text;
    post.date = new Date();
    post.hasLocation = this.smileyCheck(text);
    this.postStoreService.addPost(post);
}
smileyCheck(text:string){
  for (const city of this.cities) {
      if(text.toLocaleUpperCase().includes(city.toLocaleUpperCase())){
          return true;
      }
  } 
  return false;
}
}
import { Injectable } from '@angular/core';
import { Store } from '../../core/store/store';
import { UiStoreService } from '../../root-store/store/store.service';
import { Post} from '../models/post';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


export class PostData {
    posts: Post[];
    postsLoaded: boolean;
}

const INITIAL_POST_DATA: PostData = {
    posts: new Array<Post>(),
    postsLoaded: false,
};

@Injectable()
export class PostStoreService extends Store<PostData> {
    constructor(private u: UiStoreService) {
        super('Post',INITIAL_POST_DATA)
    }

    public loadPosts() {
        const posts = new Array<Post>();

        const post = new Post;
        post.title = "title1";
        post.text = "text1";

        const post2 = new Post;
        post2.title = "title2";
        post2.text = "text2";

        posts.push(post);
        posts.push(post2);

        this.updateState('[Posts] LOAD', { posts: posts, postsLoaded: true});
    }

    addPost(post: Post){
        this.setState('[Posts] ADD',s => ({...s, posts: [...s.posts, post]}));
    }

    getPosts(): Observable<Array<Post>> {
        return this.select(state => state.posts);
      }

}